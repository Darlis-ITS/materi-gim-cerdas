# Game Cerdas — Pertemuan 1
## Introduction to Intelligent Games & Game AI
**Program Studi S1 Teknik Informatika — Semester 7**  
**Tools:** Unity 6 + C#  
**Praktikum:** Setup Unity Project dan NPC Detector sederhana

---

# Slide 1 — Cover

## Introduction to Intelligent Games & Game AI

**Game Cerdas — Pertemuan 1**

Pokok bahasan:
- Definisi Game AI
- Tujuan AI dalam game
- Game AI vs Academic AI
- Game loop
- Agent dan environment
- Perception–Decision–Action
- Contoh AI pada game modern
- Pengantar Unity untuk Game AI

Praktikum:
- Setup Unity project
- Membuat NPC/agent sederhana: **NPC Detector**

> Fokus pertemuan ini adalah memahami dasar berpikir Game AI: bagaimana NPC mengamati lingkungan, mengambil keputusan, dan melakukan aksi di dalam game.

---

# Slide 2 — Posisi Pertemuan 1 dalam Mata Kuliah

Pertemuan 1 adalah fondasi untuk seluruh materi Game Cerdas.

Materi berikutnya akan membahas:
- perception,
- memory,
- movement AI,
- steering,
- pathfinding,
- FSM,
- Behavior Tree,
- Utility AI,
- Tactical AI,
- PCG,
- DDA,
- player modeling,
- machine learning,
- Unity ML-Agents.

Semua topik tersebut berangkat dari konsep dasar:

```text
Agent
    ↓
Perception
    ↓
Decision
    ↓
Action
    ↓
Environment
```

---

# Slide 3 — Mengapa Game Cerdas Penting?

Game modern tidak hanya membutuhkan grafik bagus.

Game juga membutuhkan:
- NPC yang responsif,
- musuh yang menantang,
- dunia yang terasa hidup,
- level yang bervariasi,
- gameplay yang adaptif,
- sistem yang dapat merespons perilaku player.

Game AI membantu menciptakan pengalaman bermain yang:
- menarik,
- menantang,
- tidak monoton,
- terasa dinamis,
- lebih imersif.

---

# Slide 4 — Apa yang Dimaksud Game Cerdas?

**Game Cerdas** adalah game yang memiliki sistem, karakter, atau lingkungan yang dapat merespons kondisi permainan secara dinamis.

Contoh:
- enemy mengejar player saat terlihat,
- NPC berpatroli lalu mencari player saat kehilangan target,
- musuh memilih cover,
- dungeon dibuat secara prosedural,
- tingkat kesulitan menyesuaikan performa player,
- agent belajar dari pengalaman.

Game cerdas tidak selalu berarti menggunakan machine learning.

Banyak Game AI dibangun dari aturan sederhana yang dirancang dengan baik.

---

# Slide 5 — Apa Itu Game AI?

**Game AI** adalah teknik untuk membuat entitas dalam game terlihat cerdas melalui proses pengambilan keputusan, pergerakan, persepsi, adaptasi, atau pembangkitan konten.

Entitas yang dapat menggunakan AI:
- enemy,
- NPC,
- companion,
- boss,
- animal,
- vehicle,
- game director,
- procedural generator,
- adaptive difficulty system.

Game AI bertujuan mendukung gameplay, bukan sekadar menghasilkan kecerdasan teoritis.

---

# Slide 6 — Definisi Sederhana Game AI

Game AI dapat dipahami sebagai:

```text
Sistem yang membuat game entity
dapat memilih aksi berdasarkan kondisi game.
```

Contoh sederhana:

```text
Jika player dekat:
    enemy menjadi alert

Jika player jauh:
    enemy idle
```

Contoh lebih kompleks:

```text
Jika player terlihat:
    enemy memilih cover
    memanggil bantuan
    lalu menyerang dari posisi aman
```

---

# Slide 7 — Game AI Bukan Hanya NPC

Sering kali Game AI dianggap hanya AI untuk enemy.

Padahal Game AI dapat mencakup:
- perilaku NPC,
- movement agent,
- pathfinding,
- decision making,
- tactical AI,
- procedural content generation,
- adaptive difficulty,
- player modeling,
- AI director,
- machine learning agent.

Contoh:
- PCG membuat dungeon,
- DDA menyesuaikan musuh,
- Player Modeling mengenali gaya bermain player.

---

# Slide 8 — Tujuan AI dalam Game

Tujuan utama Game AI:

```text
Membuat pengalaman bermain lebih menarik.
```

Tujuan teknis:
- membuat NPC merespons player,
- membuat enemy menantang,
- membuat dunia terasa hidup,
- membuat gameplay tidak monoton,
- membuat game dapat beradaptasi,
- membantu balancing,
- memberi variasi konten.

Game AI harus selalu dikaitkan dengan pengalaman player.

---

# Slide 9 — AI yang “Pintar” vs AI yang “Menyenangkan”

Dalam game, AI paling pintar belum tentu paling baik.

Contoh:

```text
Enemy selalu menembak sempurna
dan tidak pernah meleset.
```

Secara teknis mungkin “pintar”, tetapi tidak menyenangkan.

AI dalam game harus:
- menantang,
- dapat dipahami,
- memberi kesempatan player bereaksi,
- terasa adil,
- mendukung desain gameplay.

Prinsip penting:

> Game AI tidak harus sempurna. Game AI harus membuat game lebih baik.

---

# Slide 10 — Game AI vs Academic AI

## Academic AI

Biasanya fokus pada:
- optimalitas,
- akurasi,
- teori,
- pembuktian,
- generalisasi,
- benchmark.

## Game AI

Biasanya fokus pada:
- pengalaman player,
- performa real-time,
- kontrol designer,
- debugging,
- believability,
- fun factor.

Game AI sering memilih solusi yang cukup baik, cepat, dan mudah dikontrol.

---

# Slide 11 — Perbandingan Game AI dan Academic AI

| Aspek | Academic AI | Game AI |
|---|---|---|
| Tujuan | solusi optimal / akurat | pengalaman bermain |
| Evaluasi | benchmark, metrik formal | fun, fairness, responsiveness |
| Waktu proses | bisa offline/lama | harus real-time |
| Kontrol | model bisa kompleks | designer perlu kontrol |
| Output | benar secara teori | believable dan playable |
| Contoh | klasifikasi, planning formal | patrol, chase, attack, cover |

Game AI sering lebih pragmatis.

---

# Slide 12 — Contoh Perbedaan Pendekatan

Masalah:

```text
Enemy harus mengejar player.
```

Academic AI mungkin bertanya:

```text
Algoritma apa yang paling optimal?
```

Game AI bertanya:

```text
Apakah enemy terasa menantang?
Apakah player punya kesempatan menghindar?
Apakah enemy tidak menabrak tembok?
Apakah performa tetap stabil?
Apakah behavior mudah di-debug?
```

Tujuan akhir Game AI adalah pengalaman bermain.

---

# Slide 13 — Believability

**Believability** berarti AI terlihat masuk akal bagi player.

Contoh:
- guard tidak melihat menembus tembok,
- enemy mencari player di posisi terakhir terlihat,
- NPC bereaksi saat ada suara,
- squad tidak menumpuk di tempat yang sama,
- enemy tidak langsung lupa setelah kehilangan player.

AI believable belum tentu optimal, tetapi terasa natural.

---

# Slide 14 — Fairness

Game AI harus terasa adil.

Contoh AI tidak fair:
- enemy melihat player dari balik tembok,
- enemy menyerang tanpa cooldown,
- enemy spawn tepat di belakang player,
- enemy selalu tahu posisi player,
- difficulty naik tiba-tiba tanpa alasan.

AI boleh kuat, tetapi player harus merasa punya peluang untuk menang.

---

# Slide 15 — Responsiveness

AI harus merespons kondisi game.

Contoh:
- player mendekat → NPC alert,
- player menyerang → enemy membalas,
- player bersembunyi → enemy mencari,
- player low health → game dapat mengurangi tekanan,
- player terlalu dominan → game memberi tantangan lebih.

Responsiveness membuat game terasa hidup.

---

# Slide 16 — Performance dalam Game AI

Game AI berjalan saat game berlangsung.

Karena itu AI harus memperhatikan:
- frame rate,
- jumlah NPC,
- update per frame,
- raycast,
- pathfinding,
- memory,
- physics,
- animasi.

AI yang terlalu berat dapat membuat game lag.

Prinsip:

```text
AI harus cukup pintar,
tetapi tetap efisien.
```

---

# Slide 17 — Game Loop

**Game loop** adalah siklus utama yang terus berjalan selama game aktif.

Secara sederhana:

```text
Input
  ↓
Update Game State
  ↓
AI Decision
  ↓
Physics / Movement
  ↓
Rendering
  ↓
Repeat
```

Game loop berjalan berkali-kali setiap detik.

Dalam Unity, konsep ini sering terlihat melalui:

```csharp
Update()
```

dan:

```csharp
FixedUpdate()
```

---

# Slide 18 — Game Loop dalam Unity

Unity menjalankan fungsi tertentu secara otomatis.

Contoh:

```csharp
void Update()
{
    // dijalankan setiap frame
}
```

Umumnya digunakan untuk:
- input player,
- decision AI,
- timer,
- visual update.

```csharp
void FixedUpdate()
{
    // dijalankan pada interval physics
}
```

Umumnya digunakan untuk:
- Rigidbody movement,
- physics force,
- collision-related movement.

---

# Slide 19 — AI dalam Game Loop

AI biasanya berjalan dalam loop:

```text
Update
  ↓
Baca kondisi game
  ↓
Ambil keputusan
  ↓
Jalankan aksi
```

Contoh:

```csharp
void Update()
{
    DetectPlayer();
    DecideState();
    PerformAction();
}
```

Dalam praktikum NPC Detector, AI melakukan:
- menghitung jarak,
- menentukan state,
- mengubah warna.

---

# Slide 20 — Intelligent Agent

**Agent** adalah entitas yang dapat:
- menerima informasi,
- memproses kondisi,
- mengambil keputusan,
- melakukan aksi.

Dalam game, agent dapat berupa:
- enemy,
- NPC,
- companion,
- animal,
- robot,
- vehicle,
- AI director.

Pada praktikum pertama:

```text
Agent = Enemy / NPC Detector
```

---

# Slide 21 — Environment

**Environment** adalah dunia tempat agent berada dan berinteraksi.

Dalam Unity, environment dapat berupa:
- scene,
- player,
- ground,
- obstacle,
- item,
- enemy lain,
- waypoint,
- trigger area,
- lighting,
- physics world.

Pada praktikum pertama:

```text
Environment = Scene Unity
```

yang berisi:

```text
Ground
Player
Enemy
Camera
Light
```

---

# Slide 22 — Agent dan Environment

Hubungan agent dan environment:

```text
Environment
    ↓
Agent menerima informasi
    ↓
Agent mengambil keputusan
    ↓
Agent melakukan aksi
    ↓
Environment berubah
```

Contoh:

```text
Player bergerak mendekati enemy
        ↓
Enemy menghitung jarak
        ↓
Enemy menjadi ALERT
        ↓
Warna enemy berubah merah
```

---

# Slide 23 — Perception

**Perception** adalah kemampuan agent untuk mendapatkan informasi dari environment.

Contoh perception:
- melihat player,
- mendengar suara,
- merasakan damage,
- mengetahui jarak,
- mendeteksi obstacle,
- mengetahui posisi item,
- menerima informasi dari agent lain.

Dalam Unity, perception dapat dibuat dengan:
- `Vector3.Distance()`,
- `Physics.Raycast()`,
- trigger collider,
- overlap sphere,
- sensor custom.

---

# Slide 24 — Contoh Perception Sederhana

NPC dapat mengetahui jarak ke player.

```csharp
float distance = Vector3.Distance(
    enemy.position,
    player.position
);
```

Interpretasi:

```text
Jika distance kecil:
    player dekat

Jika distance besar:
    player jauh
```

Pada praktikum pertama, perception menggunakan jarak.

---

# Slide 25 — Decision

**Decision** adalah proses memilih tindakan berdasarkan informasi yang diterima agent.

Contoh:

```text
Jika player dekat:
    ALERT

Jika player jauh:
    IDLE
```

Dalam kode:

```csharp
if (distance <= detectionRadius)
{
    state = Alert;
}
else
{
    state = Idle;
}
```

Decision mengubah data perception menjadi perilaku.

---

# Slide 26 — Action

**Action** adalah aksi nyata yang dilakukan agent setelah mengambil keputusan.

Contoh action:
- bergerak,
- menyerang,
- berpatroli,
- kabur,
- memanggil bantuan,
- mengubah warna,
- memainkan animasi,
- menembak,
- mencari cover.

Pada praktikum pertama, action sederhana:

```text
Enemy mengubah warna.
```

---

# Slide 27 — Perception–Decision–Action

Pola dasar Game AI:

```text
PERCEPTION
Mendapat informasi dari environment
        ↓
DECISION
Menentukan state / aksi
        ↓
ACTION
Melakukan respon di game
```

Contoh praktikum:

```text
PERCEPTION
Hitung jarak player

DECISION
distance <= detectionRadius?

ACTION
ubah warna enemy
```

---

# Slide 28 — Diagram Praktikum NPC Detector

```text
Player bergerak
      ↓
Posisi Player berubah
      ↓
Enemy menghitung jarak
      ↓
Apakah jarak <= Detection Radius?
      ↓
 ┌───────────────┐
 │               │
YA              TIDAK
 │               │
 ▼               ▼
ALERT           IDLE
 │               │
 ▼               ▼
Merah           Biru
```

Ini adalah bentuk paling sederhana dari Game AI.

---

# Slide 29 — State

**State** adalah kondisi aktif agent.

Contoh state:
- Idle,
- Alert,
- Patrol,
- Chase,
- Attack,
- Flee,
- Search.

Pada praktikum pertama:

```text
State 1 = IDLE
State 2 = ALERT
```

State membantu membuat perilaku AI lebih jelas dan mudah di-debug.

---

# Slide 30 — IDLE State

State `IDLE` berarti NPC tidak mendeteksi player.

Ciri:
- player berada di luar detection radius,
- enemy tidak bereaksi,
- warna enemy biru,
- current state = Idle.

Logika:

```text
currentDistance > detectionRadius
        ↓
IDLE
```

---

# Slide 31 — ALERT State

State `ALERT` berarti NPC mendeteksi player.

Ciri:
- player berada di dalam detection radius,
- enemy masuk mode waspada,
- warna enemy merah,
- current state = Alert.

Logika:

```text
currentDistance <= detectionRadius
        ↓
ALERT
```

---

# Slide 32 — Parameter AI

**Parameter AI** adalah nilai yang mengatur perilaku AI.

Contoh:
- detection radius,
- movement speed,
- attack range,
- view angle,
- attack cooldown,
- aggression,
- memory duration.

Pada praktikum pertama:

```text
Detection Radius
```

adalah parameter utama.

Nilai ini menentukan seberapa jauh NPC dapat mendeteksi player.

---

# Slide 33 — Mengapa Parameter Penting?

Parameter membuat behavior AI dapat diatur tanpa mengubah kode.

Contoh:

```text
Detection Radius = 3
NPC hanya mendeteksi dari dekat

Detection Radius = 8
NPC mendeteksi dari jauh
```

Parameter memudahkan:
- tuning,
- eksperimen,
- balancing,
- debugging,
- desain gameplay.

---

# Slide 34 — Inspector dalam Unity

Inspector digunakan untuk mengatur nilai komponen.

Dengan:

```csharp
[SerializeField]
private float detectionRadius = 5f;
```

nilai `detectionRadius` dapat muncul di Inspector.

Manfaat:
- mudah diubah,
- tidak perlu edit script,
- cocok untuk eksperimen,
- designer dapat melakukan tuning.

---

# Slide 35 — Debugging dalam Game AI

Game AI perlu debugging visual dan numerik.

Contoh debug:
- current state,
- current distance,
- detection radius,
- line of sight,
- path,
- target,
- utility score,
- reward.

Pada praktikum pertama, debug menggunakan:
- Inspector,
- Console,
- Gizmos.

---

# Slide 36 — Gizmos

**Gizmos** adalah visual bantuan di Scene View Unity.

Gizmos dapat digunakan untuk menampilkan:
- detection radius,
- field of view,
- path,
- waypoint,
- attack range,
- cover point,
- spawn area.

Pada praktikum pertama:

```csharp
Gizmos.DrawWireSphere(
    transform.position,
    detectionRadius
);
```

digunakan untuk menggambar area deteksi NPC.

---

# Slide 37 — Console Log

Console digunakan untuk melihat pesan debug.

Contoh:

```csharp
Debug.Log("Enemy State → " + currentState);
```

Manfaat:
- mengetahui state berubah,
- mengetahui error,
- melihat urutan event,
- membantu troubleshooting.

Dalam Game AI, log sebaiknya tidak terlalu banyak setiap frame.

---

# Slide 38 — Contoh AI pada Game Modern

Game modern menggunakan AI untuk banyak hal.

Contoh:
- enemy patrol dan chase,
- companion mengikuti player,
- NPC civilian berjalan di kota,
- boss memiliki phase,
- enemy squad menggunakan cover,
- AI director mengatur intensitas,
- procedural dungeon,
- adaptive difficulty,
- player modeling.

AI membuat game terasa lebih hidup dan dinamis.

---

# Slide 39 — Contoh AI: Stealth Game

Pada stealth game, AI biasanya menggunakan:
- field of view,
- line of sight,
- hearing,
- memory,
- patrol,
- alert level,
- search behavior.

Contoh:

```text
Guard melihat player
        ↓
Guard mengejar
        ↓
Player bersembunyi
        ↓
Guard menuju posisi terakhir player
        ↓
Guard mencari
        ↓
Guard kembali patroli
```

Ini akan dipelajari pada pertemuan berikutnya.

---

# Slide 40 — Contoh AI: Action Game

Pada action game, enemy AI dapat memiliki:
- chase,
- attack,
- dodge,
- flee,
- target selection,
- ability usage,
- cooldown,
- cover,
- combo.

Contoh:

```text
Jika player dekat:
    melee attack

Jika player jauh:
    ranged attack

Jika HP rendah:
    flee atau call backup
```

---

# Slide 41 — Contoh AI: Open World Game

Pada open world game, AI dapat mencakup:
- NPC routines,
- traffic AI,
- crowd behavior,
- animal behavior,
- faction AI,
- world event,
- quest system,
- dynamic encounter.

Contoh:

```text
NPC pergi bekerja pagi hari
NPC pulang sore hari
NPC bereaksi saat terjadi bahaya
```

AI membantu menciptakan dunia yang terasa hidup.

---

# Slide 42 — Contoh AI: Strategy Game

Pada strategy game, AI dapat digunakan untuk:
- unit movement,
- resource gathering,
- base building,
- attack planning,
- defense planning,
- target priority,
- group coordination.

Contoh:

```text
AI mengumpulkan resource
membangun base
melatih unit
menyerang player
```

Strategi AI sering menggabungkan planning, utility, dan rule-based decision.

---

# Slide 43 — Contoh AI: Racing Game

Pada racing game, AI digunakan untuk:
- path following,
- racing line,
- obstacle avoidance,
- overtaking,
- rubber banding,
- difficulty scaling.

Contoh:

```text
AI car mengikuti racing line
mengurangi kecepatan di tikungan
mencoba menyalip player
```

Rubber banding akan dibahas pada materi Dynamic Difficulty Adjustment.

---

# Slide 44 — Contoh AI: Procedural Game

Pada procedural game, AI dapat digunakan untuk:
- level generation,
- dungeon generation,
- enemy spawn,
- loot generation,
- quest generation,
- adaptive content.

Contoh:

```text
Setiap run menghasilkan dungeon berbeda
tetapi tetap memiliki path dari start ke goal.
```

Ini akan dibahas pada materi PCG.

---

# Slide 45 — Teknik Game AI yang Akan Dipelajari

Sepanjang semester, mahasiswa akan mempelajari:

```text
1. Perception & Memory
2. Steering Behavior
3. Pathfinding & Navigation
4. Finite State Machine
5. Behavior Tree
6. Utility-Based AI
7. Tactical AI
8. Procedural Content Generation
9. Dynamic Difficulty Adjustment
10. Player Modeling
11. Machine Learning
12. Unity ML-Agents
```

Pertemuan 1 memberi dasar untuk memahami semua materi tersebut.

---

# Slide 46 — Unity sebagai Tool Game AI

Unity digunakan karena:
- mendukung 2D dan 3D,
- memiliki C# scripting,
- memiliki physics engine,
- mendukung NavMesh,
- mendukung animation,
- mendukung prefab,
- mendukung visual debugging,
- memiliki package ML-Agents,
- cocok untuk prototype cepat.

Dalam mata kuliah ini, Unity digunakan untuk mengimplementasikan konsep Game AI secara langsung.

---

# Slide 47 — GameObject

**GameObject** adalah objek dasar di Unity.

Contoh:
- Player,
- Enemy,
- Camera,
- Light,
- Ground,
- Item,
- Door.

GameObject dapat memiliki komponen.

Contoh:

```text
Player
├── Transform
├── Collider
├── Renderer
└── PlayerController
```

Dalam praktikum, Player dan Enemy dibuat sebagai GameObject.

---

# Slide 48 — Transform

**Transform** adalah komponen yang menyimpan:
- position,
- rotation,
- scale.

Contoh:

```csharp
transform.position
```

digunakan untuk membaca atau mengubah posisi object.

Dalam AI, Transform sering digunakan untuk:
- menghitung jarak,
- menentukan arah,
- menggerakkan agent,
- menghadap target.

---

# Slide 49 — Component

Unity menggunakan konsep component-based architecture.

Artinya GameObject dapat diberi banyak komponen.

Contoh:

```text
Enemy
├── Transform
├── Capsule Collider
├── Mesh Renderer
└── EnemyDetector.cs
```

Script C# yang dibuat mahasiswa juga menjadi component.

---

# Slide 50 — MonoBehaviour

Script Unity biasanya mewarisi `MonoBehaviour`.

Contoh:

```csharp
public class EnemyDetector : MonoBehaviour
{
    void Update()
    {
        DetectPlayer();
    }
}
```

`MonoBehaviour` memungkinkan script menerima event dari Unity, seperti:
- `Start()`,
- `Update()`,
- `OnDrawGizmosSelected()`.

---

# Slide 51 — Start() dan Update()

`Start()` dipanggil sekali saat object aktif.

```csharp
void Start()
{
    // inisialisasi
}
```

`Update()` dipanggil setiap frame.

```csharp
void Update()
{
    // logika game setiap frame
}
```

Pada NPC Detector:
- `Start()` mengambil Renderer dan mengatur state awal,
- `Update()` memanggil proses deteksi.

---

# Slide 52 — Vector3

`Vector3` digunakan untuk menyimpan posisi atau arah dalam 3D.

Contoh:

```csharp
Vector3 position = new Vector3(0f, 1f, 2f);
```

Komponen:
- x,
- y,
- z.

Dalam Unity 3D:
- X = kiri/kanan,
- Y = atas/bawah,
- Z = depan/belakang.

---

# Slide 53 — Vector3.Distance()

`Vector3.Distance()` menghitung jarak antara dua posisi.

Contoh:

```csharp
float distance = Vector3.Distance(
    enemy.position,
    player.position
);
```

Dalam praktikum:
- jika jarak <= detection radius, enemy alert,
- jika jarak > detection radius, enemy idle.

Ini adalah contoh perception paling sederhana.

---

# Slide 54 — Renderer dan Material

`Renderer` digunakan untuk menampilkan visual object.

Material menentukan tampilan object, termasuk warna.

Contoh:

```csharp
enemyRenderer.material.color = Color.red;
```

Pada praktikum:
- warna biru = IDLE,
- warna merah = ALERT.

Visual feedback memudahkan mahasiswa melihat perubahan state AI.

---

# Slide 55 — Enum

`enum` digunakan untuk mendefinisikan daftar nilai tetap.

Contoh:

```csharp
public enum EnemyState
{
    Idle,
    Alert
}
```

Manfaat:
- state lebih jelas,
- menghindari string typo,
- mudah dibaca,
- cocok untuk FSM sederhana.

Pada praktikum, enum digunakan untuk state Enemy.

---

# Slide 56 — SerializeField

`SerializeField` membuat variabel private tetap muncul di Inspector.

Contoh:

```csharp
[SerializeField]
private float detectionRadius = 5f;
```

Manfaat:
- variabel tetap aman secara struktur kode,
- tetapi bisa diatur dari Unity Inspector.

Ini sangat penting untuk tuning parameter AI.

---

# Slide 57 — Min Attribute

`[Min(0f)]` membatasi nilai minimum di Inspector.

Contoh:

```csharp
[SerializeField]
[Min(0f)]
private float detectionRadius = 5f;
```

Artinya radius tidak boleh bernilai negatif.

Ini membantu mencegah parameter tidak masuk akal.

---

# Slide 58 — Praktikum Pertemuan 1

Judul praktikum:

## NPC Detector: Perception dan Parameter AI di Unity 6

Target:
- membuat project Unity,
- membuat scene sederhana,
- membuat Player,
- membuat Enemy,
- membuat Player Controller,
- membuat Enemy Detector,
- memahami perception,
- memahami decision,
- memahami action,
- menampilkan debug dengan Gizmos.

---

# Slide 59 — Hasil Akhir Praktikum

Scene terdiri dari:

```text
Main Camera
Directional Light
Ground
Player
Enemy
```

Player dapat digerakkan dengan:
- WASD,
- Arrow Key.

Enemy memiliki:
- detection radius,
- state IDLE,
- state ALERT,
- perubahan warna,
- current distance,
- Gizmos radius deteksi.

---

# Slide 60 — Alur Praktikum

```text
1. Membuat project Unity
2. Menyimpan scene
3. Membuat struktur folder
4. Membuat Ground
5. Membuat Player
6. Membuat PlayerController
7. Membuat Enemy
8. Membuat Enemy material
9. Membuat EnemyDetector
10. Menghubungkan Player ke EnemyDetector
11. Menguji detection radius
12. Mengamati Gizmos dan Console
```

Detail langkah teknis dijelaskan pada modul praktikum terpisah.

---

# Slide 61 — Project Unity yang Digunakan

Nama project yang disarankan:

```text
GameCerdas_Praktikum01_NPCDetector
```

Scene:

```text
NPCDetector
```

Struktur folder:

```text
Assets
├── Materials
├── Scenes
└── Scripts
```

Struktur folder rapi membantu pengembangan project berikutnya.

---

# Slide 62 — Player Controller

Player Controller digunakan agar player dapat bergerak.

Input:
- W,
- A,
- S,
- D,
- Arrow Key.

Konsep penting:
- membaca keyboard,
- membuat vector movement,
- normalisasi gerakan diagonal,
- menggunakan `Time.deltaTime`.

Player Controller diperlukan agar mahasiswa dapat menguji AI secara interaktif.

---

# Slide 63 — Gerakan Player

Kontrol:

| Aksi | WASD | Arrow Key |
|---|---|---|
| Maju | W | ↑ |
| Mundur | S | ↓ |
| Kiri | A | ← |
| Kanan | D | → |

Gerakan diagonal:
- W + D,
- W + A,
- S + D,
- S + A.

Gerakan diagonal perlu dinormalisasi agar tidak lebih cepat daripada gerakan lurus.

---

# Slide 64 — Enemy Detector

Enemy Detector adalah script AI sederhana.

Tugas:
- menyimpan referensi Player,
- menghitung jarak ke Player,
- membandingkan jarak dengan Detection Radius,
- mengatur state,
- mengubah warna,
- menampilkan Gizmos.

Komponen utama:
- `player`,
- `detectionRadius`,
- `currentDistance`,
- `currentState`,
- `idleColor`,
- `alertColor`.

---

# Slide 65 — Perception pada Praktikum

Perception:

```csharp
currentDistance = Vector3.Distance(
    transform.position,
    player.position
);
```

Agent menerima informasi:

```text
Jarak Enemy ke Player
```

Ini adalah sensor sederhana.

Pada pertemuan berikutnya, perception dapat dikembangkan menjadi:
- field of view,
- raycast,
- line of sight,
- hearing,
- memory.

---

# Slide 66 — Decision pada Praktikum

Decision:

```csharp
if (currentDistance <= detectionRadius)
{
    SetState(EnemyState.Alert);
}
else
{
    SetState(EnemyState.Idle);
}
```

Aturan:

```text
distance <= radius → ALERT
distance > radius  → IDLE
```

Ini adalah decision rule sederhana.

---

# Slide 67 — Action pada Praktikum

Action:

```csharp
enemyRenderer.material.color = alertColor;
```

atau:

```csharp
enemyRenderer.material.color = idleColor;
```

Makna:
- state ALERT divisualisasikan dengan warna merah,
- state IDLE divisualisasikan dengan warna biru.

Pada AI yang lebih kompleks, action dapat berupa:
- move,
- chase,
- attack,
- flee,
- search.

---

# Slide 68 — Debug pada Praktikum

Debug yang digunakan:

```text
Inspector
├── Current State
└── Current Distance

Console
└── Enemy State → Alert / Idle

Gizmos
└── Detection Radius
```

Mahasiswa harus membiasakan diri melihat data internal AI, bukan hanya hasil visual.

---

# Slide 69 — Eksperimen Praktikum

Eksperimen yang dilakukan:
1. Ubah `Detection Radius`.
2. Ubah `Move Speed`.
3. Ubah warna IDLE dan ALERT.
4. Amati `Current Distance`.
5. Amati perubahan state di Console.
6. Amati Gizmos radius deteksi.

Tujuan eksperimen:

```text
Memahami hubungan parameter AI dengan behavior AI.
```

---

# Slide 70 — Tantangan Tambahan

Tambahkan state:

```text
Suspicious
```

State menjadi:

```text
Idle
Suspicious
Alert
```

Aturan:

```text
Distance > 8
    → IDLE

Distance <= 8
    → SUSPICIOUS

Distance <= 4
    → ALERT
```

Warna:
- IDLE = biru,
- SUSPICIOUS = kuning,
- ALERT = merah.

Tantangan ini memperkenalkan FSM sederhana.

---

# Slide 71 — Hubungan Praktikum 1 dengan Pertemuan 2

Praktikum 1:

```text
NPC mendeteksi player berdasarkan jarak
dan berubah state IDLE/ALERT.
```

Pertemuan 2 akan mengembangkan konsep ini menjadi:

```text
NPC Guard:
Patrol
Detect
Chase
Remember Last Seen Position
Search
Return Patrol
```

Dengan demikian, Praktikum 1 adalah fondasi perception dan state sederhana.

---

# Slide 72 — Hubungan Praktikum 1 dengan Materi Semester

Praktikum 1 menjadi dasar untuk:

```text
Perception
    ↓
Memory
    ↓
Decision
    ↓
Movement
    ↓
Navigation
    ↓
Tactical AI
```

Pada akhir semester, konsep sederhana ini dapat berkembang menjadi:

```text
Enemy Squad
Adaptive AI
Procedural Level
ML Agent
```

Tetapi pola dasarnya tetap sama:

```text
Sense → Decide → Act
```

---

# Slide 73 — Kesalahan Umum Praktikum

Kesalahan yang sering terjadi:
1. Player belum dipasang ke EnemyDetector.
2. Input System belum di-install.
3. PlayerController belum dipasang.
4. Detection Radius terlalu kecil.
5. Enemy selalu ALERT karena player terlalu dekat.
6. Gizmos tidak aktif.
7. Console penuh error.
8. Script belum disimpan.
9. Nama class tidak sama dengan nama file.
10. Material belum dipasang ke Enemy.

---

# Slide 74 — Checklist Praktikum

Pastikan:
- project Unity berhasil dibuat,
- scene tersimpan,
- folder rapi,
- Player dapat bergerak,
- Enemy memiliki script detector,
- Player sudah dihubungkan ke EnemyDetector,
- Detection Radius dapat diubah,
- Enemy berubah warna,
- Current Distance terlihat,
- Gizmos terlihat,
- Console menampilkan perubahan state,
- tidak ada error merah.

---

# Slide 75 — Output Praktikum

Mahasiswa mengumpulkan:
- project Unity,
- screenshot Player di luar radius,
- screenshot Player di dalam radius,
- screenshot Inspector Enemy,
- screenshot Gizmos radius,
- video/GIF pendek,
- laporan singkat 1–2 halaman.

Laporan menjelaskan:
- tujuan,
- konsep Perception–Decision–Action,
- implementasi,
- eksperimen,
- hasil,
- kendala,
- kesimpulan.

---

# Slide 76 — Pertanyaan Diskusi

1. Apa yang dimaksud Game AI?
2. Mengapa Game AI tidak harus selalu optimal?
3. Apa perbedaan Game AI dan Academic AI?
4. Apa yang dimaksud agent?
5. Apa yang dimaksud environment?
6. Apa contoh perception dalam game?
7. Apa contoh decision dalam game?
8. Apa contoh action dalam game?
9. Apa fungsi parameter AI?
10. Mengapa debugging penting dalam Game AI?

---

# Slide 77 — Latihan Konsep

Diberikan kasus:

```text
NPC harus mendeteksi player.
Jika player dekat, NPC waspada.
Jika player jauh, NPC santai.
```

Tentukan:
1. Agent-nya siapa?
2. Environment-nya apa?
3. Perception yang dibutuhkan apa?
4. Decision rule-nya bagaimana?
5. Action yang dilakukan apa?
6. Parameter AI yang dibutuhkan apa?
7. Debug apa yang perlu ditampilkan?

---

# Slide 78 — Ringkasan Materi

Hari ini kita mempelajari:

```text
Introduction to Intelligent Games & Game AI
│
├── Definisi Game AI
├── Tujuan AI dalam game
├── Game AI vs Academic AI
├── Game loop
├── Agent
├── Environment
├── Perception
├── Decision
├── Action
├── State
├── Parameter AI
├── Debugging
└── NPC Detector di Unity
```

Konsep kunci:

> Game AI adalah sistem yang membuat entitas dalam game dapat merespons kondisi lingkungan dengan cara yang mendukung pengalaman bermain.

---

# Slide 79 — Penutup

## Praktikum Pertemuan 1

Praktikum:

```text
Setup Unity Project
+
NPC Detector
```

Mahasiswa akan membuat NPC sederhana yang:
- mendeteksi player berdasarkan jarak,
- memiliki state IDLE dan ALERT,
- mengubah warna sesuai state,
- menampilkan detection radius dengan Gizmos.

Materi berikutnya:

```text
AI dalam Game: Perception, Memory, dan Decision
```

---

# Catatan Pembelajaran

Urutan pembelajaran yang disarankan:

```text
1. Mulai dari contoh NPC dalam game modern.
2. Jelaskan bahwa Game AI fokus pada pengalaman bermain.
3. Bandingkan Game AI dengan Academic AI.
4. Jelaskan game loop.
5. Jelaskan agent dan environment.
6. Jelaskan Perception–Decision–Action.
7. Hubungkan konsep dengan NPC Detector.
8. Jelaskan istilah Unity yang akan dipakai.
9. Tunjukkan gambaran praktikum.
10. Tutup dengan diskusi dan checklist praktikum.
```

Penekanan penting:

> Mahasiswa perlu memahami bahwa Game AI tidak harus dimulai dari algoritma kompleks. Fondasinya adalah agent yang mampu membaca kondisi lingkungan, mengambil keputusan berdasarkan parameter, dan memberikan respons yang terlihat dalam gameplay.
