# Game Cerdas — Pertemuan 15
## Advanced Game AI & Final Project Development

**Program Studi S1 Teknik Informatika**  
**Tools:**  Unity 6 + C#  
**Posisi materi:**  Pertemuan akhir sebelum UAS / Final Intelligent Game Project

---

# Slide 1 — Cover

## Advanced Game AI & Final Project Development

**Game Cerdas — Pertemuan 15**  
Pokok bahasan:
- AI Director
- Adaptive systems
- Emergent behavior
- Debugging Game AI
- Evaluasi Game AI
- Integrasi AI dalam proyek akhir

Praktikum yang akan dibuat terpisah: **Integrasi AI dalam proyek akhir**  
> Fokus pertemuan ini adalah mengintegrasikan berbagai teknik Game AI yang telah dipelajari menjadi sebuah mini game yang utuh, menarik, dapat dimainkan, dan dapat dievaluasi.

---

# Slide 2 — Posisi Pertemuan 15

Pertemuan 15 adalah tahap persiapan final project.

Materi sebelumnya:

```text
Pertemuan 1–2
Introduction, AI dalam Game, Perception, Memory

Pertemuan 3
Movement AI & Steering

Pertemuan 4
Pathfinding & Navigation

Pertemuan 5
Finite State Machine

Pertemuan 6
Behavior Tree & Utility AI

Pertemuan 7
Game AI Integration & Tactical AI

Pertemuan 9–10
Procedural Content Generation

Pertemuan 11–12
DDA dan Player Modeling

Pertemuan 13–14
Machine Learning dan Unity ML-Agents
```

Pertemuan 15 menggabungkan semuanya.

---

# Slide 3 — Tujuan Pertemuan 15

Tujuan utama:

```text
Mempersiapkan mahasiswa untuk menyelesaikan proyek akhir Game Cerdas.
```

Proyek akhir bukan hanya demo script AI.

Proyek akhir harus menjadi:

```text
mini game playable
+
AI terlihat bekerja
+
gameplay menarik
+
debug dan evaluasi jelas
```

Mahasiswa harus mampu menjelaskan:
- teknik AI yang digunakan,
- alasan desain,
- integrasi antar sistem,
- hasil evaluasi.

---

# Slide 4 — Capaian Pembelajaran Pertemuan

Setelah pertemuan ini, mahasiswa diharapkan mampu:

1. Menjelaskan konsep Advanced Game AI.
2. Menjelaskan peran AI Director dalam game.
3. Menjelaskan adaptive systems pada gameplay.
4. Menjelaskan emergent behavior.
5. Merancang integrasi beberapa teknik AI.
6. Melakukan debugging Game AI secara sistematis.
7. Mengevaluasi kualitas Game AI.
8. Menyusun rencana final project.
9. Menentukan scope proyek akhir yang realistis.
10. Menyiapkan demo final project yang dapat dinilai.

---

# Slide 5 — Apa Itu Advanced Game AI?

**Advanced Game AI** bukan berarti selalu menggunakan algoritma paling rumit.

Advanced Game AI berarti:

```text
AI dirancang sebagai sistem yang terintegrasi,
dapat beradaptasi,
dapat diuji,
dan mendukung gameplay.
```

Contoh:
- enemy tidak hanya chase, tetapi memilih cover,
- dungeon tidak hanya random, tetapi playable,
- difficulty tidak tetap, tetapi menyesuaikan player,
- NPC tidak hanya individual, tetapi berkoordinasi,
- game tidak hanya berjalan, tetapi dapat dievaluasi.

---

# Slide 6 — Dari Komponen ke Sistem

Pada awal semester, kita belajar komponen satu per satu.

```text
Perception
Movement
Pathfinding
FSM
Behavior Tree
Utility AI
PCG
DDA
Player Modeling
ML-Agents
```

Dalam proyek akhir, komponen tersebut harus menjadi sistem.

Contoh:

```text
Player masuk dungeon procedural
        ↓
Enemy melihat player
        ↓
Behavior Tree memilih aksi
        ↓
NavMesh mengejar player
        ↓
DDA mengatur spawn berikutnya
        ↓
AI Director mengatur intensitas permainan
```

---

# Slide 7 — Integrasi Game AI

Integrasi Game AI adalah proses menghubungkan berbagai modul AI agar saling bekerja.

Contoh modul:

```text
AI System
├�”€─ Perception
├�”€─ Memory
├�”€─ Decision
├�”€─ Navigation
├�”€─ Combat
├�”€─ Tactical Positioning
├�”€─ PCG
├�”€─ DDA
├�”€─ Player Modeling
└�”€─ Debug System
```

Sistem yang baik memiliki:
- tanggung jawab modul jelas,
- data flow jelas,
- parameter mudah dituning,
- debug mudah dibaca.

---

# Slide 8 — Masalah Jika AI Tidak Terintegrasi

Jika AI dibuat terpisah tanpa desain:

```text
NPC bisa melihat player,
tetapi tidak tahu harus mengejar.

NPC punya NavMesh,
tetapi tidak punya decision.

Enemy kuat,
tetapi difficulty tidak seimbang.

Dungeon procedural,
tetapi enemy spawn di tempat salah.

DDA berjalan,
tetapi tidak terlihat di gameplay.
```

Integrasi memastikan setiap komponen AI memberi kontribusi pada pengalaman bermain.

---

# Slide 9 — AI Director

**AI Director** adalah sistem yang mengatur pengalaman gameplay secara global.

AI Director tidak selalu mengontrol satu NPC.

AI Director mengamati kondisi permainan, lalu mengatur:
- intensitas,
- spawn enemy,
- resource,
- pacing,
- event,
- tekanan pada player,
- jeda aman,
- encounter berikutnya.

Contoh:

```text
Player terlalu aman terlalu lama
        ↓
AI Director memunculkan enemy wave kecil
```

---

# Slide 10 — Perbedaan AI Director dan Enemy AI

## Enemy AI

Mengatur perilaku individu enemy.

Contoh:

```text
Enemy melihat player → Chase
Enemy dekat → Attack
Enemy HP rendah → Flee
```

## AI Director

Mengatur pengalaman game secara keseluruhan.

Contoh:

```text
Player terlalu dominan → tambah intensitas
Player terlalu tertekan → beri jeda
Player low health → munculkan resource
```

Enemy AI bersifat lokal.  
AI Director bersifat global.

---

# Slide 11 — Peran AI Director

AI Director dapat berperan sebagai:

```text
Pacing Manager
Difficulty Manager
Encounter Manager
Spawn Controller
Resource Controller
Event Trigger
Tension Controller
```

Tujuan:
- menjaga gameplay tidak monoton,
- menjaga intensitas,
- mengatur ritme tegang dan santai,
- membuat pengalaman lebih dinamis.

---

# Slide 12 — Tension dalam Game

**Tension** adalah tingkat tekanan yang dirasakan player.

Tension dapat meningkat karena:
- enemy banyak,
- health rendah,
- ammo sedikit,
- waktu hampir habis,
- objective sulit,
- area sempit,
- boss muncul.

Tension dapat turun karena:
- area aman,
- resource banyak,
- enemy sedikit,
- objective selesai,
- checkpoint tercapai.

AI Director dapat mengatur tension.

---

# Slide 13 — Tension Curve

Gameplay yang baik sering memiliki naik-turun intensitas.

Contoh:

```text
Low tension
    ↓
Enemy encounter
    ↓
High tension
    ↓
Reward / safe area
    ↓
Medium tension
    ↓
Boss encounter
```

Jika tension selalu tinggi:
- player lelah.

Jika tension selalu rendah:
- player bosan.

AI Director membantu mengatur ritme.

---

# Slide 14 — Contoh AI Director Sederhana

Sistem mengamati:

```text
Player Health
Enemy Count
Time Since Last Encounter
Player Skill Score
Resource Amount
```

Keputusan:

```text
Jika enemy count rendah
dan player health tinggi
dan sudah lama tidak ada encounter:
    spawn enemy

Jika player health rendah:
    kurangi spawn
    tambah health item
```

Ini adalah AI Director sederhana berbasis rule.

---

# Slide 15 — AI Director Data Input

Input untuk AI Director:

```text
Player Metrics
├�”€─ health
├�”€─ damage taken
├�”€─ kill rate
├�”€─ death count
└�”€─ skill score

World State
├�”€─ enemy count
├�”€─ resource count
├�”€─ current room
├�”€─ objective status
└�”€─ time elapsed

AI State
├�”€─ alert level
├�”€─ active squads
├�”€─ difficulty multiplier
└�”€─ encounter intensity
```

AI Director membutuhkan data agar keputusan global masuk akal.

---

# Slide 16 — AI Director Output

Output AI Director:

```text
Spawn Enemy
Spawn Item
Activate Event
Change Music Intensity
Change Enemy Aggression
Adjust Difficulty
Open / Close Encounter
Trigger Ambush
Reduce Pressure
```

Contoh:

```text
Director memberi perintah ke EnemySpawner:
Spawn 3 melee enemy di room berikutnya.
```

atau:

```text
Director menaikkan aggressionWeight pada Utility AI enemy.
```

---

# Slide 17 — AI Director Pipeline

```text
Collect Game State
        ↓
Calculate Tension / Intensity
        ↓
Compare with Target Intensity
        ↓
Choose Director Action
        ↓
Apply to Game Systems
        ↓
Observe Result
```

Contoh:

```text
Current intensity = rendah
Target intensity = sedang
        ↓
Spawn small enemy wave
```

---

# Slide 18 — AI Director dan DDA

AI Director dapat memakai DDA.

DDA menjawab:

```text
Seberapa sulit game sebaiknya?
```

AI Director menjawab:

```text
Apa yang harus diubah untuk mencapai pengalaman itu?
```

Contoh:

```text
DDA:
difficultyMultiplier = 1.25

AI Director:
spawn enemy elite
kurangi health drop
aktifkan tactical squad
```

---

# Slide 19 — AI Director dan PCG

AI Director dapat mengarahkan PCG.

Contoh:

```text
Jika player explorer:
    generate optional room

Jika player high skill:
    generate challenge room

Jika player low health:
    generate resource room

Jika tension terlalu rendah:
    generate ambush encounter
```

PCG menghasilkan konten.  
AI Director menentukan kapan dan jenis konten apa yang dibutuhkan.

---

# Slide 20 — AI Director dan Enemy AI

AI Director dapat mengubah perilaku enemy secara global.

Contoh:

```text
Intensity Low:
enemy patrol biasa

Intensity Medium:
enemy lebih sering mengejar

Intensity High:
enemy flanking dan cover aktif
```

Parameter yang dapat diubah:
- spawn rate,
- aggression,
- detection range,
- attack cooldown,
- squad alert level,
- elite enemy chance.

---

# Slide 21 — Adaptive Systems

**Adaptive system** adalah sistem game yang berubah berdasarkan kondisi permainan atau player.

Contoh adaptive systems:
- DDA,
- adaptive spawning,
- adaptive enemy AI,
- adaptive PCG,
- adaptive hint,
- adaptive music,
- adaptive loot,
- adaptive tutorial.

Adaptive systems bertujuan membuat pengalaman lebih responsif terhadap player.

---

# Slide 22 — Adaptive System Pipeline

```text
Sense
    ↓
Model
    ↓
Decide
    ↓
Adapt
    ↓
Evaluate
```

Penjelasan:

```text
Sense:
mengumpulkan data

Model:
memahami kondisi

Decide:
menentukan adaptasi

Adapt:
mengubah game

Evaluate:
melihat dampaknya
```

Pipeline ini mirip arsitektur agent, tetapi berlaku untuk sistem game secara global.

---

# Slide 23 — Adaptive Gameplay

Adaptive gameplay dapat mengubah:

```text
Difficulty
Content
Enemy Behavior
Resource
Objective
Tutorial
Narrative
Music
```

Contoh:

```text
Player sering gagal di combat:
    game memberi lebih banyak resource
    enemy berikutnya sedikit lebih lambat
```

atau:

```text
Player eksploratif:
    game membuka optional area
    memberi collectible tambahan
```

---

# Slide 24 — Adaptasi Harus Memiliki Tujuan

Adaptasi tidak boleh dilakukan hanya karena bisa.

Setiap adaptasi harus punya tujuan desain.

Contoh tujuan:
- menjaga flow,
- mengurangi frustrasi,
- menambah tantangan,
- memperkuat gaya bermain,
- menghindari kebosanan,
- memberi variasi,
- menjaga fairness.

Contoh buruk:

```text
Game menaikkan enemy damage terus-menerus
hanya karena player menang.
```

Adaptasi harus mendukung gameplay, bukan menghukum player.

---

# Slide 25 — Adaptive System dalam Final Project

Dalam final project, adaptive system dapat berupa:

```text
DDA sederhana
Adaptive enemy spawn
Adaptive loot drop
Adaptive tactical aggression
Adaptive PCG room
Adaptive hint system
Player-profile based adjustment
```

Tidak wajib semuanya.

Minimal satu adaptive behavior yang jelas dan dapat dijelaskan.

Contoh:

```text
Jika player sering low health,
health item spawn chance meningkat.
```

---

# Slide 26 — Emergent Behavior

**Emergent behavior** adalah perilaku kompleks yang muncul dari interaksi aturan sederhana.

Contoh:

```text
Separation + Alignment + Cohesion
        ↓
Flocking
```

Tidak ada aturan eksplisit:

```text
Buat formasi burung realistis.
```

Namun perilaku kelompok muncul dari kombinasi aturan sederhana.

---

# Slide 27 — Mengapa Emergent Behavior Menarik?

Emergent behavior membuat game terasa hidup.

Contoh:
- enemy mengepung player,
- squad terlihat bekerja sama,
- hewan membentuk kawanan,
- zombie swarm bergerak dinamis,
- NPC bereaksi terhadap bahaya,
- ekosistem predator-prey.

Emergence memberi variasi dan kejutan.

Namun perlu dikontrol agar tidak merusak gameplay.

---

# Slide 28 — Contoh Emergent Behavior dari Steering

Aturan sederhana:

```text
Separation:
jangan terlalu dekat

Alignment:
ikuti arah kelompok

Cohesion:
tetap dekat kelompok
```

Hasil:

```text
Agent bergerak seperti kawanan.
```

Ini menunjukkan bahwa AI tidak selalu harus berupa keputusan kompleks.

Kadang behavior menarik muncul dari aturan lokal sederhana.

---

# Slide 29 — Emergent Behavior dari Squad AI

Aturan sederhana:
- setiap enemy memilih cover kosong,
- setiap enemy menjaga jarak dari teman,
- flanker memilih sisi player,
- attacker memilih target terdekat.

Hasil:
- enemy tersebar,
- player merasa dikepung,
- squad terlihat taktis.

Tidak perlu scripted sequence rumit.

---

# Slide 30 — Emergent Behavior dari PCG

PCG juga dapat menghasilkan emergence.

Contoh:
- dungeon random menciptakan situasi combat berbeda,
- enemy spawn acak menciptakan encounter unik,
- item placement membuat strategi berbeda,
- obstacle placement memengaruhi pathfinding.

Konten procedural + enemy AI dapat menghasilkan pengalaman baru.

---

# Slide 31 — Risiko Emergent Behavior

Emergent behavior bisa menghasilkan:
- behavior tidak terduga,
- gameplay terlalu sulit,
- agent saling menghalangi,
- exploit,
- bug sulit direproduksi,
- situasi tidak adil.

Contoh:

```text
Enemy squad mengepung player di spawn point
sehingga player langsung kalah.
```

Karena itu emergence tetap perlu:
- constraint,
- batasan,
- debug,
- evaluasi.

---

# Slide 32 — Mendesain Emergence yang Terkontrol

Prinsip:
- mulai dari aturan sederhana,
- batasi parameter,
- gunakan constraint,
- gunakan debug visual,
- test banyak skenario,
- beri fallback behavior,
- jangan biarkan semua sistem bebas tanpa batas.

Contoh:

```text
Enemy boleh flank,
tetapi tidak boleh spawn terlalu dekat dari player.
```

---

# Slide 33 — Debugging Game AI

Debugging Game AI adalah proses mencari, memahami, dan memperbaiki masalah perilaku AI.

Masalah AI sering tidak terlihat dari error code.

Contoh:
- NPC tidak mengejar player,
- enemy memilih cover salah,
- agent stuck,
- DDA tidak berubah,
- BT selalu gagal,
- Utility AI memilih aksi aneh,
- NavMeshAgent tidak bergerak.

AI debugging membutuhkan visualisasi internal state.

---

# Slide 34 — Mengapa Debugging AI Sulit?

AI sulit di-debug karena:
- behavior tergantung kondisi,
- banyak sistem terhubung,
- perubahan kecil memengaruhi keputusan,
- bug kadang hanya muncul pada seed tertentu,
- emergent behavior tidak selalu mudah diprediksi,
- tidak selalu ada error di console.

Karena itu, AI perlu dibuat observable.

---

# Slide 35 — Prinsip Debugging Game AI

Prinsip utama:

```text
Jangan hanya melihat apa yang NPC lakukan.
Lihat juga mengapa NPC melakukannya.
```

Debug harus menjawab:
- state apa yang aktif?
- target siapa?
- destination di mana?
- path valid atau tidak?
- condition mana yang true?
- utility score berapa?
- reward berapa?
- seed apa yang digunakan?

---

# Slide 36 — Debug State

Untuk FSM:

```text
Current State: Chase
Previous State: Patrol
Reason: Player Visible
Time in State: 4.2s
```

Untuk Behavior Tree:

```text
Running Node: ChasePlayer
Attack Sequence: Failure
Reason: Player not in attack range
```

Untuk Utility AI:

```text
Attack Score: 0.65
Flee Score: 0.20
TakeCover Score: 0.85
Selected: TakeCover
```

---

# Slide 37 — Debug Visual dengan Gizmos

Gunakan Gizmos untuk menampilkan:
- vision radius,
- field of view,
- attack range,
- path,
- waypoint,
- target,
- cover point,
- last known position,
- spawn area,
- tactical slot.

Contoh:

```csharp
void OnDrawGizmosSelected()
{
    Gizmos.DrawWireSphere(transform.position, viewRadius);
}
```

Visual debug sangat penting dalam Game AI.

---

# Slide 38 — Debug NavMesh dan Path

Hal yang perlu dicek:
- apakah agent berada di atas NavMesh?
- apakah destination valid?
- apakah path complete?
- apakah obstacle memblokir?
- apakah agent radius terlalu besar?
- apakah stopping distance benar?

Debug:
- tampilkan path corner,
- tampilkan destination,
- tampilkan status path,
- tampilkan velocity agent.

---

# Slide 39 — Debug PCG

Untuk PCG, tampilkan:
- seed,
- parameter generation,
- jumlah room,
- path start-goal,
- posisi enemy,
- posisi item,
- failed attempts,
- validation result.

Contoh debug info:

```text
Seed: 12488
Room Count: 8
Valid Path: True
Enemy Spawned: 12
Generation Attempts: 3
```

Seed sangat penting agar bug dapat direproduksi.

---

# Slide 40 — Debug DDA dan Player Modeling

Untuk DDA:

```text
Skill Score
Difficulty Multiplier
Adjustment Direction
Evaluation Timer
Enemy Parameter
```

Untuk Player Modeling:

```text
Aggressive Score
Explorer Score
Defensive Score
Dominant Style
Confidence
Current Adaptation
```

Debug nilai numerik membantu menjelaskan keputusan adaptif.

---

# Slide 41 — Debug ML-Agents

Untuk ML-Agents:
- cumulative reward,
- episode count,
- success rate,
- fail count,
- observation values,
- action values,
- last reward,
- episode length.

Saat inference:
- tampilkan model aktif,
- behavior type,
- target,
- reward event.

ML behavior sulit dijelaskan, sehingga debug statistik sangat penting.

---

# Slide 42 — Logging

Selain visual, gunakan logging.

Contoh:

```text
[Enemy01] State changed: Patrol → Chase
Reason: Player detected

[Director] Spawn wave: intensity low
[PCG] Generated level seed 7821 valid true
[DDA] Difficulty 1.00 → 1.05
```

Logging membantu saat presentasi dan troubleshooting.

Namun jangan terlalu banyak log setiap frame karena dapat mengganggu performa.

---

# Slide 43 — AI Debug Mode

Final project sebaiknya memiliki AI Debug Mode.

Contoh tombol:

```text
F1 = Toggle AI Debug
```

Saat aktif:
- tampilkan state NPC,
- tampilkan target,
- tampilkan path,
- tampilkan FOV,
- tampilkan utility score,
- tampilkan difficulty,
- tampilkan seed.

AI Debug Mode memudahkan dosen menilai AI secara objektif.

---

# Slide 44 — Evaluasi Game AI

Evaluasi Game AI tidak hanya bertanya:

```text
Apakah AI berjalan?
```

Tetapi juga:

```text
Apakah AI mendukung gameplay?
Apakah AI masuk akal?
Apakah AI menantang?
Apakah AI dapat diprediksi secukupnya?
Apakah AI tidak curang?
Apakah AI dapat dijelaskan?
Apakah AI stabil?
```

Game AI harus dinilai dari sisi teknis dan pengalaman bermain.

---

# Slide 45 — Dimensi Evaluasi Game AI

Dimensi evaluasi:

```text
Correctness
Robustness
Believability
Challenge
Fairness
Responsiveness
Performance
Explainability
Player Experience
Integration
```

Tidak semua proyek harus sempurna di semua dimensi, tetapi harus ada evaluasi yang jelas.

---

# Slide 46 — Correctness

Correctness berarti AI melakukan apa yang seharusnya.

Contoh:
- NPC patrol sesuai waypoint,
- NPC chase saat player terlihat,
- attack hanya saat dalam range,
- path tidak melewati wall,
- DDA berubah sesuai performa,
- PCG menghasilkan level valid.

Pertanyaan:

```text
Apakah sistem AI memenuhi spesifikasi?
```

---

# Slide 47 — Robustness

Robustness berarti AI tetap berjalan pada berbagai kondisi.

Contoh:
- target hilang,
- player mati,
- path tidak ditemukan,
- cover penuh,
- seed PCG berbeda,
- banyak enemy aktif,
- difficulty berubah.

AI yang robust memiliki fallback.

Contoh:

```text
Jika cover tidak ditemukan:
    gunakan fallback Chase atau Retreat.
```

---

# Slide 48 — Believability

Believability berarti AI terlihat masuk akal bagi player.

Contoh:
- enemy tidak melihat menembus tembok,
- NPC mencari posisi terakhir player,
- guard tidak langsung lupa,
- enemy tidak menyerang dari jarak tidak masuk akal,
- squad tidak menumpuk.

Believability tidak selalu berarti AI paling optimal.

Kadang AI yang terlalu sempurna justru terasa tidak natural.

---

# Slide 49 — Challenge

Challenge berarti AI memberi tantangan yang sesuai.

Terlalu mudah:

```text
player bosan
```

Terlalu sulit:

```text
player frustrasi
```

Evaluasi:
- berapa kali player kalah?
- apakah enemy terlalu lambat?
- apakah damage terlalu besar?
- apakah resource cukup?
- apakah DDA bekerja?

---

# Slide 50 — Fairness

Fairness berarti AI terasa adil.

Contoh tidak fair:
- enemy spawn tepat di belakang player,
- enemy melihat menembus dinding,
- attack tidak memiliki cooldown,
- difficulty naik tiba-tiba tanpa tanda,
- player tidak punya kesempatan bereaksi.

AI boleh kuat, tetapi harus memberi sinyal dan peluang counterplay.

---

# Slide 51 — Responsiveness

Responsiveness berarti AI merespons perubahan game dengan tepat.

Contoh:
- enemy mengejar saat player terlihat,
- enemy mencari saat player hilang,
- AI Director mengurangi tekanan saat player low health,
- squad menjadi alert saat satu enemy melihat player.

Namun terlalu responsif juga buruk jika AI berubah setiap frame.

Gunakan smoothing, timer, dan cooldown.

---

# Slide 52 — Performance

AI dapat memengaruhi performa game.

Masalah:
- terlalu banyak raycast,
- pathfinding terlalu sering,
- PCG runtime terlalu berat,
- banyak enemy update setiap frame,
- terlalu banyak debug log,
- ML inference terlalu berat.

Strategi:
- update interval,
- spatial filtering,
- object pooling,
- batasi agent,
- cache data,
- gunakan profiling.

---

# Slide 53 — Explainability

Explainability berarti keputusan AI dapat dijelaskan.

Contoh:

```text
Enemy memilih TakeCover karena:
health rendah,
player terlihat,
cover valid tersedia,
TakeCover score tertinggi.
```

Untuk final project, mahasiswa harus bisa menjelaskan:
- input AI,
- logika keputusan,
- parameter,
- output behavior,
- alasan desain.

---

# Slide 54 — Player Experience

Evaluasi paling penting:

```text
Apakah game terasa menyenangkan?
```

AI yang teknisnya benar belum tentu menghasilkan gameplay bagus.

Pertanyaan:
- apakah player memahami tujuan?
- apakah AI terlihat hidup?
- apakah tantangan menarik?
- apakah adaptasi terasa natural?
- apakah game punya feedback yang jelas?
- apakah ada win/lose condition?

---

# Slide 55 — Metode Evaluasi Final Project

Metode evaluasi yang disarankan:

```text
1. Demo gameplay langsung
2. Penjelasan arsitektur AI
3. AI Debug Mode
4. Pengujian beberapa skenario
5. Penjelasan parameter
6. Penjelasan evaluasi
7. Tanya jawab
```

Mahasiswa harus dapat menunjukkan bukan hanya game, tetapi juga bagaimana AI bekerja.

---

# Slide 56 — Skenario Uji AI

Setiap kelompok sebaiknya menyiapkan skenario uji.

Contoh:
- player masuk vision range enemy,
- player bersembunyi di balik wall,
- player low health,
- enemy kehilangan target,
- cover point penuh,
- seed PCG berbeda,
- player performa baik/buruk,
- AI Director menaikkan intensitas.

Skenario uji membantu demo lebih terarah.

---

# Slide 57 — Final Project: Intelligent Game

Proyek akhir sebaiknya berupa mini game yang selesai.

Ciri mini game yang baik:
- objective jelas,
- kontrol player jelas,
- enemy/NPC punya AI,
- ada tantangan,
- ada win/lose condition,
- ada feedback visual/audio,
- ada UI,
- ada debug mode,
- dapat dimainkan 5–10 menit.

Jangan hanya membuat scene kosong berisi demo algoritma.

---

# Slide 58 — Minimum Requirement Final Project

Rekomendasi minimum:

```text
1 playable level
1 player controller
minimum 3 NPC/enemy
minimum 3 AI behaviors
perception system
navigation/pathfinding
decision making
1 tactical/adaptive/PCG feature
win condition
lose condition
UI
non-default visual assets
AI debug mode
```

Kelompok boleh memilih teknik AI yang sesuai dengan konsep game.

---

# Slide 59 — Teknik AI yang Bisa Digunakan

Mahasiswa dapat memilih minimal beberapa teknik:

```text
Perception
Memory
Steering
NavMesh / A*
FSM
Behavior Tree
Utility AI
Tactical AI
PCG
DDA
Player Modeling
Q-Learning / ML-Agents
AI Director
```

Lebih baik sedikit teknik tetapi terintegrasi baik daripada banyak teknik tetapi tidak selesai.

---

# Slide 60 — Contoh Kombinasi AI Final Project

## Stealth Game

```text
Perception
Memory
FSM / Behavior Tree
NavMesh
Search last known position
Shared alert
AI Director
```

## Dungeon Game

```text
PCG dungeon
NavMesh
Enemy FSM
Utility AI
DDA
Loot adaptation
```

## Squad Shooter

```text
Perception
Target selection
Cover
Tactical positioning
Behavior Tree
Squad coordination
```

---

# Slide 61 — Scope Final Project

Scope harus realistis.

Hindari:
- open world besar,
- multiplayer online,
- RPG penuh,
- banyak level,
- inventory kompleks,
- cerita panjang,
- terlalu banyak tipe enemy,
- ML-Agents kompleks tanpa waktu training.

Fokus:

```text
Satu level kecil
AI jelas
Gameplay selesai
Visual cukup menarik
Debug tersedia
```

---

# Slide 62 — Vertical Slice

Final project sebaiknya berupa**vertical slice**.

Artinya:
- satu bagian kecil dari game,
- tetapi semua elemen inti ada.

Contoh:
- satu dungeon level,
- satu arena survival,
- satu misi stealth,
- satu outpost defense,
- satu robot training arena.

Vertical slice lebih baik daripada banyak fitur setengah jadi.

---

# Slide 63 — Pembagian Tugas Kelompok

Untuk kelompok 3 orang:

## Anggota 1 — AI Decision & Perception

```text
Perception
FSM / BT / Utility AI
Memory
Target selection
Debug AI state
```

## Anggota 2 — Navigation & Gameplay System

```text
NavMesh / steering
Combat
Enemy movement
Spawner
PCG / level system
```

## Anggota 3 — Game Integration & Presentation

```text
Player controller
UI
Audio/VFX
Level design
Game manager
Final demo
Report
```

Namun semua anggota harus memahami arsitektur AI keseluruhan.

---

# Slide 64 — Asset dan Visual Quality

Final project tidak disarankan hanya memakai:
- cube,
- capsule,
- plane,
- material default.

Gunakan asset menarik:
- character,
- environment,
- props,
- animation,
- UI,
- audio,
- VFX.

Sumber asset:
- Unity Asset Store,
- Kenney,
- itch.io,
- Mixamo,
- asset buatan sendiri.

Pilih style yang konsisten:
- low poly,
- stylized fantasy,
- sci-fi,
- dungeon,
- post-apocalyptic,
- cartoon.

---

# Slide 65 — Gameplay Loop

Setiap final project harus punya gameplay loop.

Contoh:

```text
Explore
    ↓
Encounter enemy
    ↓
Use AI-driven challenge
    ↓
Collect reward
    ↓
Progress to objective
    ↓
Win / Lose
```

Tanpa gameplay loop, proyek terasa seperti demo teknis.

AI harus mendukung loop tersebut.

---

# Slide 66 — Feedback Player

Player perlu feedback.

Contoh:
- health bar,
- enemy alert indicator,
- attack feedback,
- damage number,
- sound effect,
- objective marker,
- win/lose screen,
- AI state debug,
- minimap opsional.

Feedback membuat game lebih mudah dipahami dan lebih menyenangkan.

---

# Slide 67 — AI Debug Requirement

Final project sebaiknya memiliki mode debug.

Minimum debug:
- state enemy,
- target enemy,
- vision range,
- path/destination,
- current behavior,
- difficulty multiplier jika ada,
- seed jika ada PCG,
- utility score jika ada Utility AI.

Debug dapat ditampilkan dengan:
- UI text,
- world-space label,
- Gizmos,
- colored lines,
- console log terbatas.

---

# Slide 68 — Evaluasi AI Final Project

Rubrik evaluasi AI dapat mencakup:

```text
AI correctness
AI integration
Decision making
Navigation/movement
Tactical/adaptive behavior
Debug visualization
Gameplay impact
Code structure
Polish
Presentation
```

AI harus memberi dampak nyata pada gameplay.

Bukan hanya ada script yang tidak terlihat pengaruhnya.

---

# Slide 69 — Contoh Rubrik Penilaian

| Komponen | Bobot |
|---|---:|
| Gameplay playable dan objective jelas | 15% |
| Implementasi AI utama | 25% |
| Integrasi movement/navigation/decision | 15% |
| Tactical/adaptive/PCG feature | 15% |
| Debug dan evaluasi AI | 10% |
| Visual, UI, audio, polish | 10% |
| Presentasi dan dokumentasi | 10% |

Bobot dapat disesuaikan dengan kebijakan dosen.

---

# Slide 70 — Dokumentasi Final Project

Dokumentasi sebaiknya menjelaskan:
- konsep game,
- gameplay loop,
- teknik AI yang digunakan,
- arsitektur sistem,
- diagram AI,
- parameter penting,
- cara menjalankan game,
- skenario uji,
- hasil evaluasi,
- pembagian tugas.

Dokumentasi singkat tetapi jelas lebih baik daripada panjang namun tidak menjelaskan AI.

---

# Slide 71 — Diagram yang Wajib Ada

Minimal satu diagram arsitektur AI.

Contoh:

```text
Player
  ↓
Enemy Perception
  ↓
Enemy Memory
  ↓
Behavior Tree
  ↓
NavMeshAgent
  ↓
Combat Action
```

Jika ada DDA:

```text
Performance Tracker
  ↓
Difficulty Manager
  ↓
Enemy Spawner
  ↓
Enemy Parameters
```

Diagram membantu dosen memahami sistem dengan cepat.

---

# Slide 72 — Presentasi Final Project

Struktur presentasi:

```text
1. Judul dan anggota
2. Konsep game
3. Gameplay loop
4. Teknik AI yang digunakan
5. Arsitektur AI
6. Demo gameplay
7. Demo AI debug
8. Evaluasi / hasil pengujian
9. Kendala dan pengembangan
10. Kesimpulan
```

Demo harus disiapkan dengan skenario yang jelas.

---

# Slide 73 — Demo yang Baik

Demo final project harus menunjukkan:
- player dapat bermain,
- enemy/NPC bereaksi,
- AI mengambil keputusan,
- pathfinding bekerja,
- fitur advanced terlihat,
- debug mode menjelaskan AI,
- win/lose condition berjalan.

Contoh demo sequence:

```text
1. Tunjukkan patrol
2. Masuk FOV enemy
3. Enemy chase
4. Player bersembunyi
5. Enemy search last position
6. AI Director spawn encounter
7. Player menang/kalah
```

---

# Slide 74 — Kriteria Project yang Baik

Project yang baik:
- scope realistis,
- AI terlihat jelas,
- gameplay menyenangkan,
- fitur tidak terlalu banyak,
- visual konsisten,
- debug tersedia,
- kode cukup rapi,
- parameter dapat diubah,
- demo stabil,
- dokumentasi menjelaskan AI.

Project yang buruk:
- terlalu ambisius,
- tidak playable,
- AI tidak terlihat,
- hanya asset visual tanpa AI,
- banyak bug,
- tidak ada debug,
- tidak bisa menjelaskan decision AI.

---

# Slide 75 — Contoh Project 1: Stealth Infiltration

Konsep:

```text
Player menyusup ke fasilitas,
mengambil data,
lalu keluar tanpa tertangkap.
```

AI:
- guard patrol,
- FOV + raycast,
- last known position,
- chase,
- search,
- shared alert,
- AI Director alarm.

Fitur advanced:
- alert level,
- security camera,
- adaptive guard spawn.

Cocok untuk menunjukkan perception, memory, navigation, dan tactical response.

---

# Slide 76 — Contoh Project 2: Tactical Outpost Defense

Konsep:

```text
Player mempertahankan outpost dari enemy squad.
```

AI:
- enemy squad,
- target selection,
- cover,
- flanking,
- utility decision,
- DDA wave scaling,
- AI Director intensity.

Fitur advanced:
- role assignment,
- cover reservation,
- adaptive wave.

Cocok untuk menunjukkan tactical AI dan coordination.

---

# Slide 77 — Contoh Project 3: Procedural Dungeon Hunter

Konsep:

```text
Player menjelajahi dungeon procedural
dan mengalahkan boss.
```

AI:
- PCG dungeon,
- enemy FSM/BT,
- NavMesh,
- adaptive loot,
- DDA enemy scaling.

Fitur advanced:
- seed,
- dungeon validation,
- enemy spawn rule,
- player model sederhana.

Cocok untuk menggabungkan PCG, enemy AI, dan adaptive system.

---

# Slide 78 — Contoh Project 4: Robot Arena Adaptive Combat

Konsep:

```text
Player bertarung melawan robot dalam arena.
```

AI:
- robot dengan Utility AI,
- attack/flee/take cover,
- adaptive difficulty,
- player performance tracking,
- AI Director wave control.

Fitur advanced:
- robot personality,
- difficulty multiplier,
- debug score.

Cocok untuk scope kecil tetapi AI jelas.

---

# Slide 79 — Contoh Project 5: Wildlife Ecosystem

Konsep:

```text
Player mengamati ekosistem predator dan prey.
```

AI:
- prey flocking,
- predator pursue,
- flee behavior,
- perception,
- group behavior,
- emergent behavior.

Fitur advanced:
- ecosystem balance,
- player disturbance,
- adaptive spawn.

Cocok untuk menunjukkan emergent behavior.

---

# Slide 80 — Integrasi AI dalam Proyek Akhir

Praktikum / aktivitas Pertemuan 15:

```text
Integrasi AI dalam proyek akhir
```

Target aktivitas:
- review desain project,
- memastikan AI utama berjalan,
- menambahkan debug mode,
- menyusun skenario demo,
- mengecek scope,
- mengecek parameter,
- menyusun evaluasi.

Detail teknis akan dibuat di modul praktikum terpisah.

---

# Slide 81 — Checklist Integrasi AI

Checklist:

```text
[ ] Player controller berjalan
[ ] Enemy/NPC aktif
[ ] Perception berjalan
[ ] Decision AI berjalan
[ ] Navigation berjalan
[ ] Combat/objective berjalan
[ ] Fitur advanced berjalan
[ ] Debug mode tersedia
[ ] Win/lose condition tersedia
[ ] Demo scenario siap
```

Checklist ini membantu memastikan proyek siap UAS.

---

# Slide 82 — Checklist Debug AI

```text
[ ] State NPC terlihat
[ ] Target NPC terlihat
[ ] Vision/FOV terlihat
[ ] Path/destination terlihat
[ ] Utility score terlihat jika ada
[ ] Difficulty terlihat jika ada DDA
[ ] Seed terlihat jika ada PCG
[ ] Log state change tersedia
[ ] Error console bersih
[ ] Demo dapat diulang
```

Debug adalah bagian penting dari penilaian Game AI.

---

# Slide 83 — Checklist Evaluasi AI

```text
[ ] AI memenuhi spesifikasi
[ ] AI memberi tantangan
[ ] AI tidak terlalu mudah/sulit
[ ] AI tidak curang
[ ] AI stabil
[ ] AI bisa dijelaskan
[ ] AI berdampak pada gameplay
[ ] AI diuji pada beberapa skenario
[ ] Parameter sudah dituning
[ ] Ada catatan keterbatasan
```

Evaluasi tidak harus sempurna, tetapi harus jujur dan jelas.

---

# Slide 84 — Manajemen Risiko Final Project

Risiko umum:
- scope terlalu besar,
- AI belum selesai,
- asset tidak konsisten,
- build error,
- training ML-Agents terlalu lama,
- PCG menghasilkan level rusak,
- enemy stuck,
- game tidak punya objective jelas.

Mitigasi:
- kecilkan scope,
- buat fallback,
- siapkan demo scene,
- gunakan debug mode,
- freeze fitur sebelum final,
- fokus polishing.

---

# Slide 85 — Prioritas Menjelang UAS

Prioritas utama:

```text
1. Gameplay bisa dimainkan
2. AI utama berjalan
3. Win/lose condition jelas
4. Debug mode tersedia
5. Demo stabil
6. Visual cukup baik
7. Dokumentasi jelas
```

Jangan menambah fitur besar baru jika fitur inti belum stabil.

---

# Slide 86 — Pertanyaan Diskusi

1. Apa perbedaan enemy AI dan AI Director?
2. Mengapa adaptive system perlu tujuan desain?
3. Apa contoh emergent behavior dalam game?
4. Mengapa emergent behavior perlu dibatasi?
5. Mengapa debugging AI berbeda dari debugging error biasa?
6. Apa saja indikator AI yang baik?
7. Bagaimana cara mengevaluasi fairness AI?
8. Mengapa final project perlu AI debug mode?
9. Bagaimana menentukan scope final project yang realistis?
10. Bagaimana menghubungkan AI dengan gameplay loop?

---

# Slide 87 — Latihan Desain AI Director

Rancang AI Director untuk game arena survival.

Input:
```text
player health
enemy count
time since last wave
kill rate
difficulty multiplier
```

Output:
```text
spawn enemy
spawn health item
increase intensity
decrease intensity
trigger elite enemy
```

Tentukan:
1. aturan director,
2. target tension,
3. kapan spawn dilakukan,
4. kapan bantuan diberikan,
5. debug info yang ditampilkan.

---

# Slide 88 — Latihan Evaluasi Game AI

Pilih satu proyek game kelompok.

Evaluasi:
1. Apa AI utama dalam game?
2. Apa input AI?
3. Apa output AI?
4. Bagaimana AI memengaruhi gameplay?
5. Bagaimana AI di-debug?
6. Bagaimana AI diuji?
7. Apa kelemahan AI saat ini?
8. Apa rencana perbaikan sebelum UAS?

---

# Slide 89 — Ringkasan Materi

Hari ini kita mempelajari:

```text
Advanced Game AI & Final Project Development
│
├�”€─ Game AI Integration
├�”€─ AI Director
├�”€─ Adaptive Systems
├�”€─ Emergent Behavior
├�”€─ Debugging Game AI
├�”€─ Evaluasi Game AI
├�”€─ Final Project Scope
├�”€─ AI Debug Mode
├�”€─ Demo Preparation
└�”€─ Integrasi AI dalam Proyek Akhir
```

Konsep kunci:

> Game AI yang baik bukan hanya algoritma yang berjalan, tetapi sistem yang terintegrasi dengan gameplay, dapat diuji, dapat dijelaskan, dan membuat pengalaman bermain lebih menarik.

---

# Slide 90 — Penutup

## Persiapan UAS

Final project harus menunjukkan:

```text
Game playable
AI terlihat bekerja
AI terintegrasi dengan gameplay
Debug mode tersedia
Evaluasi jelas
Demo stabil
```

Pertemuan berikutnya:

```text
UAS — Intelligent Game Project
```

Mahasiswa akan mempresentasikan dan mendemokan proyek akhir.

---

# Catatan Pembelajaran

Urutan pembelajaran yang disarankan:

```text
1. Review seluruh materi Game Cerdas
2. Jelaskan pentingnya integrasi AI
3. Bahas AI Director
4. Bahas adaptive systems
5. Bahas emergent behavior
6. Bahas debugging Game AI
7. Bahas evaluasi Game AI
8. Jelaskan requirement final project
9. Bahas contoh project yang baik
10. Tutup dengan checklist persiapan UAS
```

Penekanan penting:

> Pada tahap final project, yang paling penting bukan menambahkan algoritma sebanyak mungkin, tetapi memastikan AI yang dipilih benar-benar mendukung gameplay, dapat dilihat saat demo, dan dapat dijelaskan secara teknis.
