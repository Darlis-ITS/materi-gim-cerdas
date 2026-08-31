import fs from "node:fs";
import path from "node:path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

const copyPracticalOutput = () => ({
  name: "copy-practical-output",
  closeBundle() {
    const favicon = path.resolve("favicon.ico");
    if (fs.existsSync(favicon)) {
      fs.copyFileSync(favicon, path.resolve("dist/favicon.ico"));
    }

    const source = path.resolve("praktikum/output");
    if (!fs.existsSync(source)) return;
    fs.cpSync(source, path.resolve("dist/praktikum/output"), {
      recursive: true,
      force: true
    });
  }
});

export default defineConfig({
  base: "./",
  plugins: [react(), copyPracticalOutput()]
});
