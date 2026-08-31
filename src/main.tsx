import React, { useEffect, useMemo, useRef, useState } from "react";
import { createRoot } from "react-dom/client";
import { marked } from "marked";
import hljs from "highlight.js/lib/core";
import javascript from "highlight.js/lib/languages/javascript";
import typescript from "highlight.js/lib/languages/typescript";
import xml from "highlight.js/lib/languages/xml";
import css from "highlight.js/lib/languages/css";
import json from "highlight.js/lib/languages/json";
import python from "highlight.js/lib/languages/python";
import "highlight.js/styles/github-dark.css";
import "./styles.css";
import { courseData } from "./course-data";
import darkBackground from "./assets/backgrounds/dark-bg.webp";
import lightBackground from "./assets/backgrounds/light-bg.webp";

hljs.registerLanguage("javascript", javascript);
hljs.registerLanguage("js", javascript);
hljs.registerLanguage("typescript", typescript);
hljs.registerLanguage("ts", typescript);
hljs.registerLanguage("html", xml);
hljs.registerLanguage("xml", xml);
hljs.registerLanguage("css", css);
hljs.registerLanguage("json", json);
hljs.registerLanguage("python", python);
hljs.registerLanguage("py", python);

type Mode = "home" | "rps" | "meeting" | "practicum";
type SlideTab = "markdown" | "image" | "narration";
type Heading = { id: string; text: string; level: number };
type Meeting = (typeof courseData.meetings)[number];

const markdownFiles = import.meta.glob("../{rps,slide,praktikum}/**/*.md", {
  query: "?raw",
  import: "default",
  eager: true
}) as Record<string, string>;

const imageFiles = import.meta.glob("../slide/slide-image/**/*.{webp,png,jpg,jpeg,gif}", {
  query: "?url",
  import: "default",
  eager: true
}) as Record<string, string>;

const outputSourceFiles = import.meta.glob("../praktikum/output/**/*", {
  query: "?url",
  import: "default",
  eager: true
}) as Record<string, string>;

const outputDocs = import.meta.glob("../praktikum/output/**/*.md", {
  query: "?raw",
  import: "default",
  eager: true
}) as Record<string, string>;

function normalizePath(value: string) {
  return value.replace(/\\/g, "/").replace(/^\.\.\//, "").replace(/^\.\//, "");
}

function readMarkdown(relativePath?: string) {
  if (!relativePath) return "";
  const wanted = normalizePath(relativePath);
  const entry = Object.entries(markdownFiles).find(([path]) => normalizePath(path).endsWith(wanted));
  return entry?.[1] || "";
}

function imageUrl(relativePath?: string) {
  if (!relativePath) return "";
  const wanted = normalizePath(relativePath);
  const entry = Object.entries(imageFiles).find(([path]) => normalizePath(path).endsWith(wanted));
  return entry?.[1] || "";
}

function outputUrl(path: string) {
  return `./praktikum/output/${normalizePath(path).replace(/^praktikum\/output\//, "")}`;
}

function slugify(value: string) {
  return value
    .toLowerCase()
    .trim()
    .replace(/<[^>]*>/g, "")
    .replace(/[^\w\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-");
}

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function renderMarkdown(source: string) {
  const headings: Heading[] = [];
  const renderer = new marked.Renderer();
  renderer.heading = ({ text, depth }) => {
    const id = slugify(text);
    headings.push({ id, text: text.replace(/<[^>]*>/g, ""), level: depth });
    return `<h${depth} id="${id}">${text}</h${depth}>`;
  };
  renderer.code = ({ text, lang }) => {
    const language = lang && hljs.getLanguage(lang) ? lang : "plaintext";
    const highlighted = language === "plaintext" ? escapeHtml(text) : hljs.highlight(text, { language }).value;
    return `<pre><code class="hljs language-${language}">${highlighted}</code></pre>`;
  };
  return { html: marked.parse(source || "", { renderer }) as string, headings };
}

function splitSlides(source: string) {
  return source
    .split(/\n\s*---\s*\n/g)
    .map((item) => item.trim())
    .filter((item) => /^#\s+Slide\s+\d+/im.test(item));
}

function slideNumber(section: string, fallback: number) {
  const match = section.match(/^#\s+Slide\s+(\d+)/im);
  return match ? Number(match[1]) : fallback;
}

function slideTitle(section: string, fallback: number) {
  return (
    section
      .match(/^#\s+(.+)$/m)?.[1]
      ?.replace(/^slide\s+\d+\s*[-–—:]\s*/i, "")
      .trim() || `Slide ${String(fallback).padStart(3, "0")}`
  );
}

function narrationForSlide(source: string, number: number) {
  return source
    .split(/(?=^##\s+Slide\s+\d+)/gim)
    .find((section) => Number(section.match(/^##\s+Slide\s+(\d+)/im)?.[1]) === number) || "";
}

function icon(name: string) {
  return <span className="material-symbols-rounded icon">{name}</span>;
}

function App() {
  const [mode, setMode] = useState<Mode>("home");
  const [meeting, setMeeting] = useState<Meeting | null>(null);
  const [slideIndex, setSlideIndex] = useState(0);
  const [slideMode, setSlideMode] = useState<"single" | "all">("single");
  const [slideTab, setSlideTab] = useState<SlideTab>("markdown");
  const [sidebarOpen, setSidebarOpen] = useState(localStorage.getItem("learning-sidebar") !== "collapsed");
  const [theme, setTheme] = useState<"dark" | "light">(
    (localStorage.getItem("learning-theme") as "dark" | "light") || "dark"
  );
  const [backgroundEnabled, setBackgroundEnabled] = useState(localStorage.getItem("learning-background") !== "off");
  const [query, setQuery] = useState("");
  const filtered = courseData.meetings.filter((item) =>
    `${item.title} ${item.subtitle || ""}`.toLowerCase().includes(query.toLowerCase())
  );

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    document.documentElement.style.setProperty("--learning-bg-image", `url(${theme === "dark" ? darkBackground : lightBackground})`);
    localStorage.setItem("learning-theme", theme);
  }, [theme]);

  useEffect(() => {
    localStorage.setItem("learning-sidebar", sidebarOpen ? "expanded" : "collapsed");
  }, [sidebarOpen]);

  useEffect(() => {
    document.documentElement.dataset.background = backgroundEnabled ? "on" : "off";
    localStorage.setItem("learning-background", backgroundEnabled ? "on" : "off");
  }, [backgroundEnabled]);

  const openMeeting = (item: Meeting) => {
    setMeeting(item);
    setMode("meeting");
    setSlideIndex(0);
    setSlideMode("single");
    setSlideTab("markdown");
  };

  return (
    <div className={`app-shell ${sidebarOpen ? "" : "sidebar-collapsed"} ${backgroundEnabled ? "background-enabled" : ""}`}>
      <aside className={`sidebar ${sidebarOpen ? "" : "collapsed"}`}>
        <button className="brand" onClick={() => setMode("home")}>
          <span className="brand-icon">{icon("school")}</span>
          <strong className="brand-title">{courseData.name}</strong>
        </button>
        <button className={mode === "home" ? "active nav-item" : "nav-item"} onClick={() => setMode("home")}>
          {icon("dashboard")} <span className="nav-text">Beranda</span>
        </button>
        <button className={mode === "rps" ? "active nav-item" : "nav-item"} onClick={() => setMode("rps")}>
          {icon("assignment")} <span className="nav-text">RPS</span>
        </button>
        <div className="nav-label">Pertemuan</div>
        {courseData.meetings.map((item) => (
          <button
            key={item.id}
            className={meeting?.id === item.id && mode !== "home" && mode !== "rps" ? "active nav-item" : "nav-item"}
            onClick={() => openMeeting(item)}
          >
            <span className="nav-number">{String(item.number).padStart(2, "0")}</span>
            <span className="nav-text">{item.title}</span>
          </button>
        ))}
      </aside>
      <main className="main">
        <header className="topbar">
          <button
            className="icon-button"
            onClick={() => setSidebarOpen((value) => !value)}
            aria-label="Toggle sidebar"
            title={sidebarOpen ? "Collapse sidebar" : "Expand sidebar"}
          >
            {icon(sidebarOpen ? "menu_open" : "menu")}
          </button>
          <div>
            <p>{courseData.academicYear} {courseData.semester || ""}</p>
            <h1>{courseData.name}</h1>
          </div>
          <div className="topbar-actions">
            <label className="search">
              {icon("search")}
              <input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Cari materi..." />
            </label>
            <button
              className="icon-button"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              aria-label="Toggle dark light mode"
              title={theme === "dark" ? "Light mode" : "Dark mode"}
            >
              {icon(theme === "dark" ? "light_mode" : "dark_mode")}
            </button>
            <button
              className="icon-button"
              onClick={() => setBackgroundEnabled((value) => !value)}
              aria-label="Toggle background"
              title={backgroundEnabled ? "Matikan background" : "Nyalakan background"}
            >
              {icon(backgroundEnabled ? "wallpaper" : "texture")}
            </button>
          </div>
        </header>
        {mode === "home" && <Home meetings={filtered} onOpen={openMeeting} />}
        {mode === "rps" && <MarkdownPage title="Rencana Pembelajaran Semester" source={readMarkdown(courseData.rps?.path)} />}
        {(mode === "meeting" || mode === "practicum") && meeting && (
          <MeetingPage
            meeting={meeting}
            mode={mode}
            setMode={setMode}
            slideIndex={slideIndex}
            setSlideIndex={setSlideIndex}
            slideMode={slideMode}
            setSlideMode={setSlideMode}
            slideTab={slideTab}
            setSlideTab={setSlideTab}
          />
        )}
      </main>
    </div>
  );
}

function Home({ meetings, onOpen }: { meetings: Meeting[]; onOpen: (meeting: Meeting) => void }) {
  return (
    <section className="home">
      <div className="hero">
        <div className="hero-copy">
          <p>{courseData.code}</p>
          <h2>{courseData.heroTitle || courseData.name}</h2>
          <span>{courseData.description || "Materi pembelajaran, slide, narasi, dan praktikum."}</span>
        </div>
        <div className="hero-visual" aria-hidden="true">
          <div className="hero-orb">
            {icon("auto_stories")}
            <i />
            <i />
            <i />
          </div>
        </div>
      </div>
      <div className="grid">
        {meetings.map((meeting) => (
          <article className="card" key={meeting.id} onClick={() => onOpen(meeting)}>
            <span>Pertemuan {String(meeting.number).padStart(2, "0")}</span>
            <h3>{meeting.title}</h3>
            <p>{meeting.subtitle || `${meeting.slideCount} slide`}</p>
            <small>{meeting.practicumPaths.length ? "Praktikum tersedia" : "Materi slide"}</small>
          </article>
        ))}
      </div>
    </section>
  );
}

function MarkdownPage({ title, source }: { title: string; source: string }) {
  const rendered = renderMarkdown(source);
  return (
    <div className="reader-layout">
      <Outline headings={rendered.headings} />
      <article className="markdown" dangerouslySetInnerHTML={{ __html: rendered.html || `<p>${title} belum tersedia.</p>` }} />
    </div>
  );
}

function MeetingPage({
  meeting,
  mode,
  setMode,
  slideIndex,
  setSlideIndex,
  slideMode,
  setSlideMode,
  slideTab,
  setSlideTab
}: {
  meeting: Meeting;
  mode: Mode;
  setMode: (mode: Mode) => void;
  slideIndex: number;
  setSlideIndex: (index: number) => void;
  slideMode: "single" | "all";
  setSlideMode: (mode: "single" | "all") => void;
  slideTab: SlideTab;
  setSlideTab: (tab: SlideTab) => void;
}) {
  const slideSource = readMarkdown(meeting.slidePath);
  const narrationSource = readMarkdown(meeting.narrationPath);
  const sections = useMemo(() => splitSlides(slideSource), [slideSource]);
  const current = sections[slideIndex] || "";
  const currentNumber = slideNumber(current, slideIndex);
  const renderedSlide = renderMarkdown(current);
  const renderedAllSlides = renderMarkdown(slideSource);
  const renderedNarration = renderMarkdown(narrationForSlide(narrationSource, currentNumber));
  const currentImage = meeting.images.find((image) => image.slideNumber === currentNumber);
  const practicumSource = meeting.practicumPaths.map((path) => readMarkdown(path)).filter(Boolean).join("\n\n---\n\n");
  const outputEntries = Object.entries(outputSourceFiles).filter(([path]) =>
    normalizePath(path).includes(`praktikum/output/pert${String(meeting.number).padStart(2, "0")}/`)
  );
  const docEntries = Object.entries(outputDocs).filter(([path]) =>
    normalizePath(path).includes(`praktikum/output/pert${String(meeting.number).padStart(2, "0")}/`)
  );

  return (
    <section className="content">
      <div className="page-title">
        <div>
          <p>Pertemuan {String(meeting.number).padStart(2, "0")}</p>
          <h2>{meeting.title}</h2>
          {meeting.subtitle && <span>{meeting.subtitle}</span>}
        </div>
      </div>
      <div className="meeting-mode-row">
        <div className="segmented content-mode-toggle meeting-mode-toggle">
          <button className={mode === "meeting" ? "selected" : ""} onClick={() => setMode("meeting")}>{icon("auto_stories")} Slide</button>
          <button className={mode === "practicum" ? "selected" : ""} disabled={!meeting.practicumPaths.length} onClick={() => setMode("practicum")}>{icon("terminal")} Praktikum</button>
        </div>
      </div>
      {mode === "practicum" ? (
        <Practicum source={practicumSource} output={outputEntries} docs={docEntries} />
      ) : (
        <div className="reader-layout">
          <aside className="outline slide-list">
            <div className="outline-title">{icon("view_list")} Daftar Slide</div>
            {sections.map((section, index) => (
              <button className={slideIndex === index ? "active" : ""} key={index} onClick={() => setSlideIndex(index)}>
                <span>{String(slideNumber(section, index)).padStart(2, "0")}</span>
                <b>{slideTitle(section, index)}</b>
              </button>
            ))}
          </aside>
          <div className="reader">
            <div className="reader-tab-header">
              <div className="slide-tabs">
                <button className={slideTab === "markdown" ? "active" : ""} onClick={() => setSlideTab("markdown")}>{icon("code")} Slide</button>
                <button className={slideTab === "image" ? "active" : ""} onClick={() => setSlideTab("image")}>{icon("image")} Image</button>
                <button className={slideTab === "narration" ? "active" : ""} onClick={() => setSlideTab("narration")}>{icon("record_voice_over")} Narasi</button>
              </div>
            </div>
            {slideTab === "markdown" && (
              <>
                <div className="reader-toolbar">
                  <div className="segmented">
                    <button className={slideMode === "single" ? "selected" : ""} onClick={() => setSlideMode("single")}>
                      Per slide
                    </button>
                    <button className={slideMode === "all" ? "selected" : ""} onClick={() => setSlideMode("all")}>
                      Keseluruhan
                    </button>
                  </div>
                  <span className="slide-counter">Slide {String(currentNumber).padStart(2, "0")} / {Math.max(0, sections.length - 1)}</span>
                </div>
                <article
                  className="markdown"
                  dangerouslySetInnerHTML={{
                    __html: (slideMode === "single" ? renderedSlide.html : renderedAllSlides.html) || "<p>Slide belum tersedia.</p>"
                  }}
                />
              </>
            )}
            {slideTab === "narration" && <article className="markdown" dangerouslySetInnerHTML={{ __html: renderedNarration.html || "<p>Narasi slide belum tersedia.</p>" }} />}
            {slideTab === "image" && <ImageSlideView image={currentImage ? imageUrl(currentImage.path) : ""} index={slideIndex} total={sections.length} slideNumber={currentNumber} setIndex={setSlideIndex} />}
            {slideTab !== "image" && (
              <div className="reader-nav">
                <button disabled={slideIndex === 0} onClick={() => setSlideIndex(slideIndex - 1)}>{icon("arrow_back")} Sebelumnya</button>
                <span>Slide {String(currentNumber).padStart(2, "0")} / {Math.max(0, sections.length - 1)}</span>
                <button disabled={slideIndex >= sections.length - 1} onClick={() => setSlideIndex(slideIndex + 1)}>Berikutnya {icon("arrow_forward")}</button>
              </div>
            )}
          </div>
        </div>
      )}
    </section>
  );
}

function ImageSlideView({
  image,
  index,
  total,
  slideNumber,
  setIndex
}: {
  image: string;
  index: number;
  total: number;
  slideNumber: number;
  setIndex: (index: number) => void;
}) {
  const viewerRef = useRef<HTMLElement>(null);
  const [fullscreen, setFullscreen] = useState(false);
  const maxIndex = Math.max(0, total - 1);
  const go = (delta: number) => setIndex(Math.max(0, Math.min(maxIndex, index + delta)));

  const enterFullscreen = async () => {
    if (viewerRef.current?.requestFullscreen) await viewerRef.current.requestFullscreen();
    setFullscreen(true);
  };

  const exitFullscreen = async () => {
    if (document.fullscreenElement && document.exitFullscreen) await document.exitFullscreen();
    setFullscreen(false);
  };

  useEffect(() => {
    const handleKey = (event: KeyboardEvent) => {
      if (event.key === "ArrowLeft") {
        event.preventDefault();
        go(-1);
      }
      if (event.key === "ArrowRight") {
        event.preventDefault();
        go(1);
      }
    };
    const handleFullscreen = () => setFullscreen(document.fullscreenElement === viewerRef.current);
    window.addEventListener("keydown", handleKey);
    document.addEventListener("fullscreenchange", handleFullscreen);
    return () => {
      window.removeEventListener("keydown", handleKey);
      document.removeEventListener("fullscreenchange", handleFullscreen);
    };
  }, [index, maxIndex]);

  return (
    <section ref={viewerRef} className={`image-viewer ${fullscreen ? "fullscreen" : ""}`}>
      <div className="image-toolbar">
        <span>Slide {String(slideNumber).padStart(2, "0")} / {String(maxIndex).padStart(2, "0")}</span>
        {fullscreen ? (
          <button onClick={exitFullscreen}>{icon("fullscreen_exit")} Exit</button>
        ) : (
          <button onClick={enterFullscreen}>{icon("fullscreen")} Fullscreen</button>
        )}
      </div>
      {image ? (
        <div className="image-viewport">
          <img src={image} alt={`Slide ${slideNumber}`} />
          <button className="image-nav prev" onClick={() => go(-1)} disabled={index === 0} aria-label="Slide sebelumnya">
            {icon("chevron_left")}
          </button>
          <button className="image-nav next" onClick={() => go(1)} disabled={index >= maxIndex} aria-label="Slide berikutnya">
            {icon("chevron_right")}
          </button>
        </div>
      ) : (
        <p>Image slide belum tersedia.</p>
      )}
      <p className="image-help">Gunakan tombol navigasi atau tombol panah keyboard.</p>
    </section>
  );
}

function Practicum({ source, output, docs }: { source: string; output: [string, string][]; docs: [string, string][] }) {
  const rendered = renderMarkdown(source);
  const htmlOutputs = output.filter(([path]) => path.toLowerCase().endsWith(".html"));
  const renderedDocs = docs.map(([path, text]) => ({ path, ...renderMarkdown(text) }));
  return (
    <div className="reader-layout">
      <Outline headings={rendered.headings} />
      <div className="reader">
        <article className="markdown" dangerouslySetInnerHTML={{ __html: rendered.html || "<p>Praktikum belum tersedia.</p>" }} />
        {htmlOutputs.map(([path]) => (
          <section className="demo" key={path}>
            <div><b>{path.split(/[\\/]/).pop()}</b><a href={outputUrl(path)} target="_blank" rel="noreferrer">Buka penuh</a></div>
            <iframe src={outputUrl(path)} sandbox="allow-scripts allow-same-origin" />
          </section>
        ))}
        {renderedDocs.map((doc) => (
          <article className="markdown" key={doc.path} dangerouslySetInnerHTML={{ __html: doc.html }} />
        ))}
      </div>
    </div>
  );
}

function Outline({ headings }: { headings: Heading[] }) {
  return (
    <aside className="outline">
      <div className="outline-title">{icon("format_list_bulleted")} Outline</div>
      {headings.filter((heading) => heading.level <= 2).map((heading, index) => (
        <a href={`#${heading.id}`} key={`${heading.id}-${index}`}>{heading.text}</a>
      ))}
    </aside>
  );
}

createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
