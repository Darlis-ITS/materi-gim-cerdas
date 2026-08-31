# Game Cerdas — Pertemuan 0
## Rencana Pembelajaran, CPMK, dan Ringkasan Materi Semester
**Program Studi S1 Teknik Informatika — Semester 7**  
**Tools Utama:** Unity Game Engine + C#  
**Pendekatan:** teori singkat, demo, praktikum, mini project, dan final project

---

# Slide 1 — Cover

## Pertemuan 0  
# Rencana Pembelajaran Game Cerdas

**Game Cerdas — S1 Teknik Informatika Semester 7**

Isi pertemuan:
- Gambaran umum mata kuliah
- Tujuan pembelajaran
- CPMK
- Rencana pembelajaran satu semester
- Alur materi
- Praktikum Unity
- UTS Mini Project
- UAS Intelligent Game Project
- Sistem penilaian

> Pertemuan 0 berfungsi sebagai orientasi agar mahasiswa memahami arah, target, dan ekspektasi mata kuliah Game Cerdas selama satu semester.

---

# Slide 2 — Identitas Mata Kuliah

## Game Cerdas

**Jenjang:** S1 Teknik Informatika  
**Semester:** 7  
**Tools utama:** Unity Game Engine + C#  
**Beban yang disarankan:** 3 SKS  
**Model pembelajaran:** teori + demo + praktikum + project

Karakter mata kuliah:
- berbasis implementasi,
- berorientasi gameplay,
- menggunakan Unity,
- menggabungkan AI klasik dan AI modern,
- menghasilkan mini game cerdas sebagai proyek akhir.

---

# Slide 3 — Fokus Mata Kuliah

Mata kuliah Game Cerdas tidak hanya membahas teori AI.

Fokus utama:

```text
Bagaimana AI digunakan untuk membuat game
lebih responsif, menarik, adaptif, dan menantang.
```

Mahasiswa akan belajar:
- bagaimana NPC mendeteksi player,
- bagaimana NPC bergerak,
- bagaimana NPC mengambil keputusan,
- bagaimana level dibuat procedural,
- bagaimana difficulty menyesuaikan player,
- bagaimana agent dapat belajar menggunakan ML-Agents.

---

# Slide 4 — Mengapa Game Cerdas Penting?

Game modern membutuhkan lebih dari visual yang bagus.

Game juga membutuhkan:
- NPC yang responsif,
- enemy yang menantang,
- dunia yang terasa hidup,
- level yang bervariasi,
- gameplay yang adaptif,
- sistem yang memahami performa player.

Game AI membantu menciptakan pengalaman yang:

```text
menarik
menantang
tidak monoton
dinamis
believable
menyenangkan
```

---

# Slide 5 — Prinsip Utama Mata Kuliah

Prinsip utama:

```text
Game AI bukan hanya membuat AI yang paling pintar,
tetapi membuat AI yang mendukung pengalaman bermain.
```

AI dalam game harus:
- terasa masuk akal,
- memberi tantangan,
- tetap adil,
- dapat dikontrol designer,
- dapat di-debug,
- efisien secara performa,
- menyenangkan untuk player.

---

# Slide 6 — Game AI vs Academic AI

| Aspek | Academic AI | Game AI |
|---|---|---|
| Tujuan | optimal / akurat | gameplay experience |
| Fokus | teori dan benchmark | fun, fairness, believability |
| Waktu proses | bisa offline | harus real-time |
| Kontrol | model bisa kompleks | designer perlu kontrol |
| Output | benar secara formal | menarik dan playable |
| Contoh | klasifikasi, planning formal | patrol, chase, attack, PCG, DDA |

Game AI lebih pragmatis.

---

# Slide 7 — Kerangka Besar Game AI

Secara umum, banyak sistem Game AI mengikuti pola:

```text
Environment
    ↓
Perception
    ↓
Memory / State
    ↓
Decision
    ↓
Action
    ↓
Environment
```

Contoh:

```text
Player masuk area pandang NPC
        ↓
NPC melihat player
        ↓
NPC menyimpan posisi player
        ↓
NPC memilih CHASE
        ↓
NPC mengejar player
```

---

# Slide 8 — Peta Besar Mata Kuliah

```text
GAME CERDAS
│
├── FUNDAMENTALS
│   ├── Game AI
│   ├── Intelligent Agent
│   └── Perception
│
├── AUTONOMOUS AGENT
│   ├── Steering
│   ├── Navigation
│   └── Pathfinding
│
├── DECISION MAKING
│   ├── FSM
│   ├── Behavior Tree
│   ├── Utility AI
│   └── Tactical AI
│
├── CONTENT INTELLIGENCE
│   └── PCG
│
├── ADAPTIVE GAME
│   ├── DDA
│   └── Player Modeling
│
└── LEARNING AI
    ├── Reinforcement Learning
    └── Unity ML-Agents
```

---

# Slide 9 — Alur Materi Semester

Struktur utama:

```text
Game AI Fundamentals
        ↓
Movement & Navigation
        ↓
Decision Making
        ↓
PCG
        ↓
DDA & Player Modeling
        ↓
Learning-Based Game AI
        ↓
Final Intelligent Game Project
```

Mata kuliah dirancang agar mahasiswa tidak hanya memahami konsep, tetapi mampu mengimplementasikan AI dalam Unity.

---

# Slide 10 — Fase 1: Fundamentals of Game AI

## Minggu 1–2

Fokus:
- pengenalan Game AI,
- intelligent agent,
- environment,
- perception,
- state,
- action,
- update loop,
- arsitektur AI modular.

Praktikum:
- setup Unity project,
- NPC Detector,
- NPC Guard berbasis sensor, memory, decision.

Konsep dasar:

```text
Perception → Decision → Action
```

---

# Slide 11 — Fase 2: Classical Game AI

## Minggu 3–7

Fokus:
- autonomous movement,
- steering behavior,
- pathfinding,
- NavMesh,
- FSM,
- Behavior Tree,
- Utility AI,
- Tactical AI.

Urutan konsep:

```text
Movement
   ↓
Navigation
   ↓
Perception
   ↓
Decision Making
   ↓
Tactical Behavior
```

Ini adalah inti classical Game AI.

---

# Slide 12 — Fase 3: Procedural Content Generation

## Minggu 9–10

Fokus:
- randomness,
- seed,
- reproducibility,
- constructive PCG,
- generate-and-test,
- procedural spawning,
- random level,
- procedural dungeon.

Tujuan:
- mahasiswa memahami cara membuat konten game secara otomatis,
- tetapi tetap terkontrol dan playable.

---

# Slide 13 — Fase 4: Adaptive Game AI

## Minggu 11–12

Fokus:
- Dynamic Difficulty Adjustment,
- player performance,
- difficulty model,
- player telemetry,
- skill estimation,
- play style,
- player profile,
- adaptation policy.

Tujuan:
- game dapat menyesuaikan diri terhadap performa dan gaya bermain player.

Contoh:

```text
Player kesulitan
    ↓
enemy sedikit dikurangi
health item lebih sering muncul
```

---

# Slide 14 — Fase 5: Learning-Based Game AI

## Minggu 13–14

Fokus:
- supervised learning,
- reinforcement learning,
- state-action-reward,
- Q-learning,
- Unity ML-Agents,
- agent,
- observation,
- action,
- reward,
- episode,
- policy,
- PPO secara konseptual.

Tujuan:
- mahasiswa mengenal AI yang belajar dari data atau pengalaman,
- terutama melalui Unity ML-Agents.

---

# Slide 15 — Fase 6: Final Project Development

## Minggu 15–16

Fokus:
- AI Director,
- adaptive systems,
- emergent behavior,
- debugging Game AI,
- evaluasi Game AI,
- integrasi AI dalam proyek akhir,
- presentasi final project.

Target akhir:

```text
mini game Unity yang playable
+
memiliki AI yang jelas
+
dapat didemokan
+
dapat dijelaskan secara teknis
```

---

# Slide 16 — CPMK Mata Kuliah

Setelah mengikuti mata kuliah ini, mahasiswa diharapkan mampu:

1. Menjelaskan konsep dan arsitektur kecerdasan buatan dalam permainan komputer.
2. Mengimplementasikan autonomous movement, navigation, perception, dan pathfinding untuk agen permainan.
3. Merancang perilaku agen menggunakan FSM, Behavior Tree, dan Utility-Based AI.
4. Mengembangkan konten permainan secara prosedural menggunakan teknik Procedural Content Generation.
5. Merancang sistem permainan adaptif menggunakan Dynamic Difficulty Adjustment dan Player Modeling.
6. Menjelaskan serta mengimplementasikan konsep dasar learning-based Game AI menggunakan Unity ML-Agents.
7. Mengintegrasikan beberapa teknik Game AI ke dalam permainan interaktif menggunakan Unity.

---

# Slide 17 — CPMK 1

## Menjelaskan konsep dan arsitektur Game AI

Mahasiswa mampu menjelaskan:
- definisi Game AI,
- tujuan AI dalam game,
- game AI vs academic AI,
- intelligent agent,
- environment,
- perception,
- decision,
- action,
- update loop,
- modular architecture.

Contoh hasil belajar:

```text
Mahasiswa dapat menjelaskan bagaimana NPC Guard
menggunakan sensor, memory, decision, dan action.
```

---

# Slide 18 — CPMK 2

## Mengimplementasikan movement, navigation, perception, dan pathfinding

Mahasiswa mampu membuat agent yang:
- bergerak secara autonomous,
- menggunakan steering behavior,
- mengejar atau menghindari target,
- mengikuti waypoint,
- menggunakan NavMesh,
- memahami konsep pathfinding seperti BFS, Dijkstra, dan A*.

Contoh implementasi:
- Seek,
- Flee,
- Arrive,
- Patrol,
- Chase,
- A* sederhana,
- Unity NavMeshAgent.

---

# Slide 19 — CPMK 3

## Merancang decision making agent

Mahasiswa mampu merancang perilaku NPC menggunakan:
- Finite State Machine,
- Behavior Tree,
- Utility-Based AI.

Contoh behavior:

```text
Enemy:
Patrol → Chase → Attack → Flee
```

atau:

```text
Utility AI:
Attack Score = 0.75
Flee Score = 0.90
Take Cover Score = 0.60

Action dipilih = Flee
```

---

# Slide 20 — CPMK 4

## Mengembangkan Procedural Content Generation

Mahasiswa mampu memahami dan menerapkan:
- randomness,
- seed,
- procedural spawning,
- random level,
- dungeon generation,
- grid-based generation,
- random walk,
- BSP,
- cellular automata,
- constraint-based generation.

Contoh:

```text
Seed 12345 menghasilkan dungeon A
Seed 54321 menghasilkan dungeon B
Seed 12345 menghasilkan dungeon A lagi
```

---

# Slide 21 — CPMK 5

## Merancang sistem adaptif

Mahasiswa mampu membuat sistem game yang menyesuaikan kondisi berdasarkan data player.

Topik:
- Dynamic Difficulty Adjustment,
- player performance,
- difficulty multiplier,
- player telemetry,
- skill estimation,
- play style,
- player profile,
- adaptation policy.

Contoh:

```text
Jika player terlalu dominan:
    spawn enemy lebih cepat

Jika player kesulitan:
    health item lebih sering muncul
```

---

# Slide 22 — CPMK 6

## Memahami Learning-Based Game AI

Mahasiswa mampu menjelaskan dan mencoba:
- supervised learning dalam game,
- reinforcement learning,
- state,
- action,
- reward,
- Q-learning,
- Unity ML-Agents,
- observation,
- episode,
- policy,
- PPO secara konseptual.

Contoh praktikum:
- Q-Learning grid agent,
- ML-Agents agent mencapai target.

---

# Slide 23 — CPMK 7

## Mengintegrasikan Game AI ke dalam game interaktif

Mahasiswa mampu membuat mini game Unity yang memiliki:
- player controller,
- NPC/enemy AI,
- navigation,
- decision making,
- gameplay objective,
- UI,
- win/lose condition,
- debug AI,
- visual asset yang layak,
- dokumentasi dan evaluasi.

Target:

```text
bukan sekadar demo algoritma,
tetapi mini game yang playable.
```

---

# Slide 24 — Rencana Pembelajaran Semester

| Minggu | Materi | Pokok Bahasan | Praktikum / Target Unity |
|---:|---|---|---|
| 1 | Introduction to Intelligent Games & Game AI | Definisi Game AI, tujuan AI, game loop, agent, environment, perception-decision-action | Setup Unity project; NPC Detector |
| 2 | AI Architecture & Game Agent | Intelligent agent, state, sensor/perception, actuator/action, update loop, modular architecture | NPC Guard mendeteksi player dengan jarak/FOV |
| 3 | Movement AI & Steering Behaviors | Seek, flee, arrive, pursue, evade, wander, obstacle avoidance, separation, cohesion | Autonomous moving agents |
| 4 | Pathfinding & Navigation | Graph, waypoint, BFS, Dijkstra, A*, heuristic, NavMesh | A* sederhana dan Unity NavMesh |

---

# Slide 25 — Rencana Pembelajaran Semester Lanjutan 1

| Minggu | Materi | Pokok Bahasan | Praktikum / Target Unity |
|---:|---|---|---|
| 5 | Finite State Machine | State, transition, condition, hierarchical FSM, perilaku NPC | Enemy AI: Patrol → Chase → Attack → Flee |
| 6 | Behavior Tree & Utility-Based AI | Selector, sequence, decorator, Utility AI, scoring action | NPC dengan Behavior Tree / Utility decision |
| 7 | Game AI Integration & Tactical AI | Perception, memory, target selection, cover, tactical positioning, coordination | Squad/enemy AI sederhana |
| 8 | UTS / Mini Project | Integrasi movement, navigation, perception, decision | Mini game dengan NPC cerdas |

---

# Slide 26 — Rencana Pembelajaran Semester Lanjutan 2

| Minggu | Materi | Pokok Bahasan | Praktikum / Target Unity |
|---:|---|---|---|
| 9 | Procedural Content Generation | Konsep PCG, randomness, seed, constructive vs generate-and-test, taxonomy | Procedural spawning / random level sederhana |
| 10 | PCG for Level & Dungeon Generation | Grid, random walk, BSP, cellular automata, constraint-based generation | Procedural dungeon/level |
| 11 | Dynamic Difficulty Adjustment | Player performance, difficulty model, adaptive gameplay, rubber banding | Game menyesuaikan musuh berdasarkan performa player |
| 12 | Player Modeling & Adaptive Game AI | Telemetry, skill estimation, play style, player profile, adaptation policy | Merekam gameplay metrics dan player model sederhana |

---

# Slide 27 — Rencana Pembelajaran Semester Lanjutan 3

| Minggu | Materi | Pokok Bahasan | Praktikum / Target Unity |
|---:|---|---|---|
| 13 | Machine Learning for Games | Supervised vs reinforcement learning, state-action-reward, Q-learning | Q-Learning sederhana / ML-Agents introduction |
| 14 | Reinforcement Learning with Unity ML-Agents | Agent, observation, action, reward, episode, policy, PPO konseptual | Training agent menggunakan Unity ML-Agents |
| 15 | Advanced Game AI & Final Project Development | AI Director, adaptive systems, emergent behavior, debugging, evaluasi Game AI | Integrasi AI dalam proyek akhir |
| 16 | UAS — Intelligent Game Project | Presentasi, demo, evaluasi AI dan gameplay | Demo final game |

---

# Slide 28 — Pertemuan 1 Ringkas

## Introduction to Intelligent Games & Game AI

Mahasiswa belajar:
- definisi Game AI,
- tujuan AI dalam game,
- AI vs academic AI,
- game loop,
- agent,
- environment,
- perception–decision–action.

Praktikum:
- Setup Unity Project,
- NPC Detector sederhana.

Target:
```text
NPC dapat mendeteksi player berdasarkan jarak.
```

---

# Slide 29 — Pertemuan 2 Ringkas

## AI Architecture & Game Agent

Mahasiswa belajar:
- intelligent agent,
- sensor,
- perception,
- memory,
- decision,
- action,
- update loop,
- modular AI architecture.

Praktikum:
- NPC Guard,
- jarak,
- FOV,
- Line of Sight,
- Last Known Position,
- PATROL–CHASE–SEARCH.

---

# Slide 30 — Pertemuan 3 Ringkas

## Movement AI & Steering Behaviors

Mahasiswa belajar:
- Seek,
- Flee,
- Arrive,
- Pursue,
- Evade,
- Wander,
- Obstacle Avoidance,
- Separation,
- Cohesion,
- Alignment.

Praktikum:
- autonomous moving agents,
- agent bergerak menuju target,
- agent menghindar,
- agent berperilaku kawanan sederhana.

---

# Slide 31 — Pertemuan 4 Ringkas

## Pathfinding & Navigation

Mahasiswa belajar:
- graph,
- node,
- edge,
- waypoint,
- BFS,
- Dijkstra,
- A*,
- heuristic,
- Unity NavMesh.

Praktikum:
- A* sederhana,
- Unity NavMesh,
- NavMeshAgent menuju target.

Konsep penting:

```text
f(n) = g(n) + h(n)
```

---

# Slide 32 — Pertemuan 5 Ringkas

## Finite State Machine

Mahasiswa belajar:
- state,
- transition,
- condition,
- hierarchical FSM,
- desain perilaku NPC.

Praktikum:
- Enemy AI: Patrol → Chase → Attack → Flee.

Contoh:

```text
PATROL
   ↓ player detected
CHASE
   ↓ in range
ATTACK
   ↓ low health
FLEE
```

---

# Slide 33 — Pertemuan 6 Ringkas

## Behavior Tree & Utility-Based AI

Mahasiswa belajar:
- Behavior Tree,
- selector,
- sequence,
- decorator,
- leaf node,
- condition,
- action,
- Utility AI,
- scoring action.

Praktikum:
- NPC dengan Behavior Tree,
- atau Utility-Based Decision.

Contoh:

```text
Attack = 0.75
Flee   = 0.90
Patrol = 0.10

Dipilih: Flee
```

---

# Slide 34 — Pertemuan 7 Ringkas

## Game AI Integration & Tactical AI

Mahasiswa belajar:
- integration,
- perception,
- memory,
- target selection,
- cover,
- tactical positioning,
- coordination antar-agent.

Praktikum:
- squad/enemy AI sederhana.

Contoh:
```text
Enemy A menyerang dari depan
Enemy B flank dari samping
Enemy C mengambil cover
```

---

# Slide 35 — Pertemuan 8 Ringkas

## UTS / Mini Project

Mahasiswa membuat mini game yang mengintegrasikan:
- movement,
- navigation,
- perception,
- decision making.

Target:
```text
Mini game dengan NPC cerdas.
```

Contoh:
- stealth mini game,
- enemy patrol challenge,
- dungeon combat kecil,
- survival arena sederhana.

---

# Slide 36 — Pertemuan 9 Ringkas

## Procedural Content Generation

Mahasiswa belajar:
- konsep PCG,
- randomness,
- seed,
- reproducibility,
- constructive PCG,
- generate-and-test,
- PCG taxonomy.

Praktikum:
- procedural spawning,
- random level sederhana.

Konsep penting:

```text
Randomness + Rule + Constraint + Validation
```

---

# Slide 37 — Pertemuan 10 Ringkas

## PCG for Level & Dungeon Generation

Mahasiswa belajar:
- grid-based generation,
- random walk,
- BSP,
- cellular automata,
- constraint-based generation,
- dungeon validation.

Praktikum:
- procedural dungeon/level di Unity.

Target:
```text
Dungeon berbeda untuk seed berbeda,
tetapi tetap playable.
```

---

# Slide 38 — Pertemuan 11 Ringkas

## Dynamic Difficulty Adjustment

Mahasiswa belajar:
- player performance,
- difficulty model,
- adaptive gameplay,
- rubber banding,
- parameter adaptation.

Praktikum:
- game otomatis menyesuaikan musuh berdasarkan performa player.

Contoh:

```text
Player dominan
    ↓
spawn musuh lebih cepat

Player kesulitan
    ↓
musuh lebih lemah
```

---

# Slide 39 — Pertemuan 12 Ringkas

## Player Modeling & Adaptive Game AI

Mahasiswa belajar:
- player telemetry,
- gameplay metrics,
- skill estimation,
- play style,
- player profile,
- adaptation policy.

Praktikum:
- merekam gameplay metrics,
- membuat player model sederhana.

Contoh profile:

```text
Skill: Medium
Style: Aggressive
Explorer Score: Low
Risk Score: High
```

---

# Slide 40 — Pertemuan 13 Ringkas

## Machine Learning for Games

Mahasiswa belajar:
- supervised learning,
- reinforcement learning,
- state,
- action,
- reward,
- Q-learning,
- penggunaan ML dalam game.

Praktikum:
- Q-Learning sederhana,
- atau ML-Agents introduction.

Konsep:

```text
Agent belajar dari reward.
```

---

# Slide 41 — Pertemuan 14 Ringkas

## Reinforcement Learning with Unity ML-Agents

Mahasiswa belajar:
- Agent,
- Observation,
- Action,
- Reward,
- Episode,
- Policy,
- PPO secara konseptual,
- training dan inference.

Praktikum:
- training agent menggunakan Unity ML-Agents.

Contoh:
```text
Agent belajar mencapai target di arena.
```

---

# Slide 42 — Pertemuan 15 Ringkas

## Advanced Game AI & Final Project Development

Mahasiswa belajar:
- AI Director,
- adaptive systems,
- emergent behavior,
- debugging Game AI,
- evaluasi Game AI,
- final project development.

Praktikum:
- integrasi AI dalam proyek akhir.

Target:
```text
Project siap dipresentasikan pada UAS.
```

---

# Slide 43 — Pertemuan 16 Ringkas

## UAS — Intelligent Game Project

Mahasiswa melakukan:
- presentasi proyek akhir,
- demo gameplay,
- demo AI debug mode,
- evaluasi AI,
- penjelasan arsitektur sistem,
- refleksi pengembangan.

Target:
```text
Mini game Unity dengan AI yang dapat dimainkan,
dijelaskan, diuji, dan dievaluasi.
```

---

# Slide 44 — Komponen Praktikum Unity

Praktikum sepanjang semester mencakup:

```text
Unity Project Setup
Player Controller
NPC Detector
NPC Guard
Steering Agents
NavMeshAgent
A* Grid Pathfinding
FSM Enemy
Behavior Tree NPC
Utility AI
Squad AI
PCG Spawner
Procedural Dungeon
DDA Manager
Player Telemetry
Q-Learning Agent
Unity ML-Agents
```

---

# Slide 45 — Tools dan Skill Teknis

Mahasiswa akan menggunakan:
- Unity 6,
- C#,
- GameObject,
- Component,
- Transform,
- Rigidbody,
- Collider,
- Raycast,
- LayerMask,
- Gizmos,
- NavMeshAgent,
- ScriptableObject opsional,
- UI Debug,
- Unity ML-Agents opsional.

Skill penting:
- scripting,
- debugging,
- parameter tuning,
- gameplay testing,
- dokumentasi.

---

# Slide 46 — UTS Mini Project

## Konsep UTS

UTS berupa mini project, bukan hanya ujian tertulis.

Target:
```text
Mini game kecil dengan NPC cerdas.
```

Minimal mengintegrasikan:
- perception,
- movement/navigation,
- decision making,
- gameplay objective,
- win/lose condition,
- debug sederhana.

Contoh project:
- stealth guard game,
- survival arena,
- dungeon enemy,
- robot arena,
- chase/escape game.

---

# Slide 47 — Komponen Penilaian UTS

Rekomendasi penilaian:

| Komponen | Bobot |
|---|---:|
| Perception system | 15% |
| Movement / navigation | 20% |
| Decision making | 25% |
| Correctness | 15% |
| Gameplay | 15% |
| Dokumentasi | 10% |
| **Total** | **100%** |

UTS menilai integrasi materi Minggu 1–7.

---

# Slide 48 — UAS Final Project

## Intelligent Game Project

Mahasiswa membuat mini game Unity yang memiliki beberapa komponen Game AI.

Contoh kombinasi:

```text
Game
├── NPC AI
│   └── Behavior Tree
├── Procedural Level
│   └── PCG
└── Adaptive Difficulty
    └── DDA
```

atau:

```text
Game
├── Enemy FSM
├── NavMesh / A*
├── Player Modeling
└── Procedural Dungeon
```

---

# Slide 49 — Requirement Final Project

Final project minimal memiliki:
- 1 playable level,
- 1 player controller,
- beberapa NPC/enemy,
- minimal 3 AI behavior,
- navigation/pathfinding,
- decision making,
- 1 fitur advanced: PCG / DDA / Player Modeling / Tactical AI / ML-Agent,
- win condition,
- lose condition,
- UI,
- audio atau visual feedback,
- asset non-default Unity,
- AI debug mode.

---

# Slide 50 — Contoh Topik Final Project

Contoh:
- Stealth Infiltration,
- Tactical Outpost Defense,
- Procedural Dungeon Hunter,
- Robot Arena Adaptive Combat,
- Zombie Extraction,
- Wildlife Ecosystem,
- Alien Colony Defense,
- Heist Escape.

Prinsip:

```text
Satu level kecil tetapi selesai dan playable
lebih baik daripada game besar tetapi tidak stabil.
```

---

# Slide 51 — Komposisi Penilaian Mata Kuliah

Rekomendasi komposisi:

| Komponen | Bobot |
|---|---:|
| Tugas / Praktikum | 25% |
| Kuis / Konsep | 10% |
| UTS Mini Project | 20% |
| Progress Final Project | 10% |
| UAS Final Project | 35% |
| **Total** | **100%** |

Penilaian menyeimbangkan:
- konsep,
- implementasi,
- praktikum,
- project,
- presentasi.

---

# Slide 52 — Ekspektasi Praktikum

Setiap praktikum harus memiliki:
- project Unity yang berjalan,
- script yang dapat dijelaskan,
- parameter yang dapat diubah,
- debug visual,
- screenshot atau video demo,
- laporan singkat,
- analisis hasil.

Mahasiswa tidak cukup hanya menjalankan kode.

Mahasiswa harus mampu menjelaskan:

```text
Mengapa AI mengambil keputusan tertentu?
```

---

# Slide 53 — Ekspektasi Project

Project yang baik:
- playable,
- memiliki gameplay loop,
- memiliki AI yang terlihat,
- tidak hanya demo teknis,
- visual cukup menarik,
- asset konsisten,
- UI jelas,
- win/lose condition ada,
- AI debug mode ada,
- dokumentasi menjelaskan arsitektur AI.

Project yang buruk:
- terlalu besar,
- tidak selesai,
- AI tidak terlihat,
- hanya asset visual,
- tidak bisa menjelaskan decision AI.

---

# Slide 54 — Pentingnya Debug Mode

AI Debug Mode membantu melihat:
- state NPC,
- target,
- path,
- FOV,
- last known position,
- utility score,
- difficulty multiplier,
- seed PCG,
- reward RL.

Contoh:

```text
Enemy01
State: CHASE
Target: Player
Can See: TRUE
Distance: 6.2
Path: Active
```

Debug mode membantu penilaian dan troubleshooting.

---

# Slide 55 — Prinsip Belajar Game AI

Belajar Game AI berarti belajar menghubungkan:

```text
Algorithm
    ↓
Implementation
    ↓
Gameplay
    ↓
Player Experience
```

Tidak cukup hanya:
- memahami rumus,
- menulis script,
- membuat NPC bergerak.

Mahasiswa harus memahami bagaimana AI memengaruhi gameplay.

---

# Slide 56 — Peran Unity dalam Mata Kuliah

Unity digunakan sebagai:
- media implementasi,
- simulator agent,
- tools visualisasi,
- environment untuk eksperimen,
- platform final project.

Unity membantu mahasiswa melihat hasil AI secara langsung.

Contoh:
```text
FOV terlihat dengan Gizmos
Path terlihat di scene
NPC mengejar player
Dungeon terbentuk otomatis
DDA berubah saat player bermain
```

---

# Slide 57 — Peran C# dalam Mata Kuliah

C# digunakan untuk:
- membuat behavior script,
- membaca input,
- menghitung perception,
- mengatur state,
- memanggil NavMeshAgent,
- membuat procedural generator,
- menghitung skill score,
- mengatur reward,
- menampilkan debug UI.

Kemampuan scripting sangat penting.

---

# Slide 58 — Alur Belajar Praktis

Setiap topik sebaiknya dipahami dalam alur:

```text
Konsep
    ↓
Diagram
    ↓
Pseudocode
    ↓
Implementasi Unity
    ↓
Eksperimen parameter
    ↓
Debug
    ↓
Evaluasi gameplay
```

Dengan alur ini, mahasiswa tidak hanya menyalin kode.

Mahasiswa belajar mendesain AI.

---

# Slide 59 — Kompetensi Akhir Mahasiswa

Pada akhir semester, mahasiswa diharapkan mampu:

```text
mendesain
mengimplementasikan
men-debug
mengevaluasi
dan mempresentasikan
Game AI dalam Unity.
```

Output akhir:

```text
Intelligent Game Project
```

yang menggabungkan beberapa konsep:
- agent,
- movement,
- navigation,
- decision,
- PCG,
- adaptive system,
- atau ML.

---

# Slide 60 — Penutup Pertemuan 0

## Ringkasan

Mata kuliah Game Cerdas akan membahas:

```text
Game AI Fundamentals
Movement & Navigation
Decision Making
Procedural Content Generation
Dynamic Difficulty Adjustment
Player Modeling
Machine Learning for Games
Unity ML-Agents
Final Intelligent Game Project
```

Target utama:

```text
Mahasiswa mampu membuat game Unity
dengan AI yang nyata, menarik, terintegrasi,
dapat dijelaskan, dan dapat dievaluasi.
```

---

# Catatan Pembelajaran

Urutan penyampaian yang disarankan:

```text
1. Jelaskan posisi mata kuliah Game Cerdas
2. Jelaskan fokus pada Unity dan gameplay
3. Paparkan CPMK
4. Paparkan rencana 16 pertemuan
5. Jelaskan fase pembelajaran
6. Jelaskan praktikum dan project
7. Jelaskan sistem penilaian
8. Beri gambaran ekspektasi UTS dan UAS
9. Tekankan pentingnya debug dan evaluasi AI
10. Tutup dengan motivasi final intelligent game project
```

Penekanan penting:

> Mata kuliah ini bukan hanya belajar algoritma AI, tetapi belajar membuat AI yang bekerja di dalam game, mendukung gameplay, dan memberi pengalaman bermain yang lebih menarik.
