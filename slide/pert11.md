# Game Cerdas — Pertemuan 11
## Dynamic Difficulty Adjustment (DDA)

**Program Studi S1 Teknik Informatika**  
**Tools:**  Unity 6 + C#  
**Posisi materi:**  Lanjutan dari Pertemuan 9–10 tentang PCG dan menuju Adaptive Game AI

---

# Slide 1 — Cover

## Dynamic Difficulty Adjustment (DDA)

**Game Cerdas — Pertemuan 11**  
Pokok pembahasan:
- Player performance
- Difficulty model
- Adaptive gameplay
- Rubber banding
- Parameter adaptation
- Implementasi konsep DDA di Unity

Praktikum yang akan dibuat terpisah: **Game otomatis menyesuaikan musuh berdasarkan performa player**  
> Fokus pertemuan ini adalah memahami bagaimana game dapat menyesuaikan tingkat kesulitan secara dinamis agar tetap menantang, adil, dan menyenangkan.

---

# Slide 2 — Review Pertemuan Sebelumnya

Pada Pertemuan 9 dan 10, kita membahas PCG.

```text
Pertemuan 9
Procedural Content Generation

Pertemuan 10
PCG for Level & Dungeon Generation
```

PCG membantu game membuat konten secara otomatis:
- enemy spawn,
- item spawn,
- level,
- dungeon,
- obstacle,
- room,
- corridor.

Pertemuan 11 melanjutkan ide tersebut:

```text
Bukan hanya konten yang berubah,
tetapi tingkat kesulitan game juga dapat berubah.
```

---

# Slide 3 — Posisi Materi dalam Game Cerdas

Materi sebelumnya banyak membahas:

```text
NPC Intelligence
├�”€─ Perception
├�”€─ Movement
├�”€─ Pathfinding
├�”€─ FSM
├�”€─ Behavior Tree
└�”€─ Tactical AI
```

Kemudian masuk ke:

```text
Content Intelligence
├�”€─ PCG
└�”€─ Dungeon Generation
```

Pertemuan 11 masuk ke:

```text
Adaptive Game Intelligence
```

Game tidak hanya memiliki NPC cerdas, tetapi juga dapat menyesuaikan pengalaman bermain.

---

# Slide 4 — Mengapa DDA Penting?

Game yang terlalu mudah akan terasa membosankan.

Game yang terlalu sulit akan terasa membuat frustrasi.

Tujuan DDA:

```text
Menjaga player tetap berada pada zona tantangan yang ideal.
```

Idealnya:

```text
Tidak terlalu mudah
Tidak terlalu sulit
Tetap menantang
Tetap menyenangkan
```

DDA membantu game beradaptasi terhadap kemampuan player.

---

# Slide 5 — Challenge Balance

Tingkat tantangan harus seimbang dengan kemampuan player.

```text
Skill rendah + difficulty tinggi
        ↓
frustrasi

Skill tinggi + difficulty rendah
        ↓
bosan

Skill sesuai difficulty
        ↓
engaged / flow
```

DDA mencoba menjaga game tetap berada di area tengah.

---

# Slide 6 — Konsep Flow dalam Game

Flow adalah kondisi ketika player merasa fokus dan menikmati tantangan.

```text
Difficulty
   ↑
   │        Anxiety / Frustration
   │
   │     Flow Zone
   │
   │ Boredom
   └�”€─�”€─�”€─�”€─�”€─�”€─�”€─�”€─�†’ Skill
```

Jika skill player meningkat, difficulty juga perlu meningkat.

Jika player kesulitan, difficulty dapat diturunkan atau dibantu.

DDA adalah salah satu cara menjaga flow.

---

# Slide 7 — Capaian Pembelajaran Pertemuan

Setelah pertemuan ini, mahasiswa diharapkan mampu:

1. Menjelaskan konsep Dynamic Difficulty Adjustment.
2. Menjelaskan perbedaan static difficulty dan dynamic difficulty.
3. Mengidentifikasi metrik performa player.
4. Merancang model difficulty sederhana.
5. Menjelaskan konsep adaptive gameplay.
6. Menjelaskan rubber banding.
7. Menjelaskan parameter adaptation.
8. Merancang sistem DDA sederhana di Unity.
9. Menjelaskan risiko dan etika desain DDA.
10. Menghubungkan DDA dengan PCG, AI enemy, dan player modeling.

---

# Slide 8 — Apa Itu Dynamic Difficulty Adjustment?

**Dynamic Difficulty Adjustment** atau**DDA** adalah teknik untuk menyesuaikan tingkat kesulitan game secara otomatis berdasarkan kondisi atau performa player.

Contoh:

```text
Jika player terlalu sering kalah:
    enemy dibuat lebih lemah

Jika player terlalu mudah menang:
    enemy dibuat lebih kuat
```

DDA dapat mengubah:
- jumlah enemy,
- health enemy,
- damage enemy,
- speed enemy,
- spawn rate,
- resource drop,
- akurasi musuh,
- agresivitas AI.

---

# Slide 9 — Static Difficulty vs Dynamic Difficulty

## Static Difficulty

Player memilih tingkat kesulitan di awal.

Contoh:

```text
Easy
Normal
Hard
Nightmare
```

Difficulty tetap relatif sama selama permainan.

## Dynamic Difficulty

Game menyesuaikan difficulty saat permainan berlangsung.

Contoh:

```text
Player performa buruk
    ↓
game memberi bantuan

Player performa sangat baik
    ↓
game meningkatkan tantangan
```

---

# Slide 10 — Contoh Static Difficulty

Pada static difficulty:

```text
Easy:
Enemy HP = 60
Enemy Damage = 5

Normal:
Enemy HP = 100
Enemy Damage = 10

Hard:
Enemy HP = 150
Enemy Damage = 20
```

Nilai ini biasanya tetap.

Kelebihan:
- mudah dipahami player,
- mudah diatur designer.

Kekurangan:
- tidak semua player cocok,
- player dapat terlalu cepat berkembang,
- beberapa bagian game bisa tidak seimbang.

---

# Slide 11 — Contoh Dynamic Difficulty

Pada dynamic difficulty:

```text
Enemy HP = baseHP Ã— difficultyMultiplier
Enemy Damage = baseDamage Ã— difficultyMultiplier
Enemy Spawn Rate = baseSpawnRate Ã— difficultyMultiplier
```

Difficulty multiplier dapat berubah:

```text
0.8  → lebih mudah
1.0  → normal
1.3  → lebih sulit
```

Perubahan didasarkan pada performa player.

---

# Slide 12 — DDA Pipeline

Pipeline umum DDA:

```text
Collect Player Data
        ↓
Analyze Performance
        ↓
Estimate Difficulty Need
        ↓
Adjust Game Parameters
        ↓
Observe Player Response
        ↓
Repeat
```

Dalam Unity:

```text
GameManager
    ↓
PerformanceTracker
    ↓
DifficultyManager
    ↓
EnemySpawner / EnemyStats / LootSystem
```

---

# Slide 13 — Komponen Sistem DDA

Sistem DDA biasanya terdiri dari:

```text
DDA System
├�”€─ Player Performance Tracker
├�”€─ Difficulty Model
├�”€─ Adaptation Rule
├�”€─ Parameter Controller
└�”€─ Feedback / Debug UI
```

Penjelasan:
- Tracker membaca data player.
- Model menghitung performa.
- Rule menentukan naik/turun difficulty.
- Controller mengubah parameter game.
- Debug UI menampilkan nilai agar mudah diuji.

---

# Slide 14 — Player Performance

**Player performance** adalah ukuran tentang seberapa baik player bermain.

Contoh metrik:
- health tersisa,
- jumlah damage diterima,
- jumlah damage diberikan,
- akurasi,
- jumlah kill,
- waktu menyelesaikan level,
- jumlah kematian,
- jumlah retry,
- jumlah resource tersisa,
- frekuensi terkena hit,
- kemampuan menghindar.

Metrik ini digunakan untuk menilai apakah game terlalu mudah atau terlalu sulit.

---

# Slide 15 — Performance Metrics: Survival

Metrik survival:

```text
Health remaining
Damage received
Death count
Retry count
Time survived
Healing item used
```

Contoh interpretasi:

```text
Health sering rendah
Damage received tinggi
Death count tinggi
        ↓
player sedang kesulitan
```

Metrik survival cocok untuk:
- action game,
- shooter,
- survival,
- dungeon crawler.

---

# Slide 16 — Performance Metrics: Combat

Metrik combat:

```text
Enemy killed
Damage dealt
Accuracy
Hit rate
Dodge success
Attack frequency
Combo count
```

Contoh:

```text
Accuracy tinggi
Damage dealt tinggi
Enemy cepat mati
        ↓
player performa baik
```

Metrik combat cocok untuk game yang memiliki pertempuran aktif.

---

# Slide 17 — Performance Metrics: Progress

Metrik progress:

```text
Completion time
Objective completed
Distance traveled
Puzzle solved
Checkpoint reached
Level progress
```

Contoh:

```text
Player terlalu lama di area yang sama
        ↓
mungkin player kesulitan
```

Metrik progress cocok untuk:
- adventure,
- puzzle,
- dungeon,
- mission-based game.

---

# Slide 18 — Performance Metrics: Resource

Metrik resource:

```text
Ammo remaining
Health potion remaining
Energy remaining
Gold collected
Item usage
Resource scarcity
```

Contoh:

```text
Ammo hampir habis
Health potion habis
Health rendah
        ↓
game mungkin terlalu sulit
```

Resource dapat digunakan untuk menyesuaikan loot drop.

---

# Slide 19 — Metrik Harus Sesuai Genre

Tidak semua metrik cocok untuk semua game.

Contoh:

## Shooter
- accuracy,
- damage taken,
- kill rate.

## Stealth
- detection count,
- alarm triggered,
- time unseen.

## Racing
- lap time,
- distance from leader,
- collision count.

## Dungeon
- health remaining,
- room cleared,
- death count.

DDA harus menyesuaikan genre dan tujuan gameplay.

---

# Slide 20 — Metrik Tunggal vs Multi-Metrik

## Metrik Tunggal

Contoh:

```text
Jika health < 30%
    difficulty turun
```

Kelebihan:
- mudah.

Kekurangan:
- terlalu sederhana,
- bisa salah membaca kondisi.

## Multi-Metrik

Contoh:

```text
SkillScore =
healthScore
+
accuracyScore
+
survivalScore
+
speedScore
```

Lebih akurat karena mempertimbangkan beberapa aspek.

---

# Slide 21 — Normalisasi Metrik

Metrik berbeda memiliki skala berbeda.

Contoh:
- health: 0–100,
- accuracy: 0–1,
- kill count: 0–50,
- time: detik.

Agar bisa digabung, nilai perlu dinormalisasi.

Contoh:

```text
normalizedHealth = currentHealth / maxHealth
```

Hasil:

```text
0.0 sampai 1.0
```

Normalisasi membuat perhitungan lebih konsisten.

---

# Slide 22 — Contoh Normalisasi

Health:

```csharp
float healthScore = currentHealth / maxHealth;
```

Accuracy:

```csharp
float accuracyScore = hitCount / shotCount;
```

Survival:

```csharp
float survivalScore = 1f - Mathf.Clamp01(deathCount / maxDeaths);
```

Damage Taken:

```csharp
float damageScore = 1f - Mathf.Clamp01(damageTaken / maxExpectedDamage);
```

Semakin tinggi score, semakin baik performa.

---

# Slide 23 — Skill Score

Skill score adalah nilai gabungan untuk memperkirakan performa player.

Contoh:

```text
SkillScore =
0.4 Ã— healthScore
+
0.3 Ã— accuracyScore
+
0.2 Ã— killRateScore
+
0.1 Ã— speedScore
```

Nilai akhir:

```text
0.0 = performa sangat buruk
1.0 = performa sangat baik
```

Skill score digunakan untuk menentukan arah difficulty adjustment.

---

# Slide 24 — Contoh Skill Score

Misalnya:

```text
healthScore = 0.80
accuracyScore = 0.70
killRateScore = 0.60
speedScore = 0.50
```

Rumus:

```text
SkillScore =
0.4 Ã— 0.80
+
0.3 Ã— 0.70
+
0.2 Ã— 0.60
+
0.1 Ã— 0.50
```

Hasil:

```text
SkillScore = 0.70
```

Interpretasi:

```text
Player cukup baik.
Difficulty dapat sedikit dinaikkan.
```

---

# Slide 25 — Difficulty Model

**Difficulty model** adalah model yang menentukan tingkat kesulitan game.

Contoh nilai:

```text
difficultyLevel = 1 sampai 5
```

atau:

```text
difficultyMultiplier = 0.75 sampai 1.50
```

Difficulty model dapat memengaruhi:
- enemy stats,
- spawn rate,
- jumlah resource,
- obstacle,
- agresivitas AI,
- reaction time enemy.

---

# Slide 26 — Difficulty Level Diskrit

Contoh level:

```text
Level 1 = Easy
Level 2 = Normal-
Level 3 = Normal
Level 4 = Hard
Level 5 = Very Hard
```

Aturan:

```text
Jika skillScore > 0.75
    naikkan difficulty

Jika skillScore < 0.35
    turunkan difficulty
```

Kelebihan:
- mudah dipahami,
- mudah di-debug,
- cocok untuk praktikum.

---

# Slide 27 — Difficulty Multiplier Kontinu

Difficulty dapat berupa nilai kontinu.

Contoh:

```text
difficultyMultiplier = 1.0
```

Jika player bagus:

```text
difficultyMultiplier += 0.05
```

Jika player kesulitan:

```text
difficultyMultiplier -= 0.05
```

Batas:

```text
0.75 <= difficultyMultiplier <= 1.5
```

Kelebihan:
- perubahan halus,
- fleksibel.

Kekurangan:
- perlu smoothing agar tidak berubah terlalu cepat.

---

# Slide 28 — Difficulty Target

Sistem DDA dapat memiliki target performa.

Contoh:

```text
targetSkillScore = 0.6
```

Jika:

```text
skillScore > target + tolerance
    naikkan difficulty

skillScore < target - tolerance
    turunkan difficulty
```

Toleransi mencegah perubahan terlalu sensitif.

Contoh:

```text
target = 0.6
tolerance = 0.1
```

Artinya:
- 0.5–0.7 dianggap masih normal,
- di luar rentang itu baru dilakukan penyesuaian.

---

# Slide 29 — Adaptive Gameplay

**Adaptive gameplay** adalah gameplay yang berubah berdasarkan kondisi player.

DDA adalah salah satu bentuk adaptive gameplay.

Contoh adaptive gameplay:
- enemy lebih agresif jika player terlalu dominan,
- health pack muncul lebih sering jika player sering sekarat,
- musuh mengurangi damage jika player sering mati,
- game memberi hint jika player terlalu lama stuck,
- dungeon menjadi lebih pendek jika player sering gagal.

Tujuannya bukan membuat game selalu mudah, tetapi menjaga tantangan tetap menarik.

---

# Slide 30 — Bentuk Adaptasi

DDA dapat mengadaptasi berbagai elemen.

```text
Enemy
├�”€─ Health
├�”€─ Damage
├�”€─ Speed
├�”€─ Accuracy
├�”€─ Reaction Time
└�”€─ Aggressiveness

Spawner
├�”€─ Spawn Rate
├�”€─ Enemy Count
└�”€─ Enemy Type

Resource
├�”€─ Health Drop
├�”€─ Ammo Drop
└�”€─ Power-up

Level
├�”€─ Obstacle Density
├�”€─ Trap Count
└�”€─ Path Complexity
```

Untuk praktikum, fokus pada musuh.

---

# Slide 31 — Parameter Adaptation

**Parameter adaptation** adalah mengubah nilai parameter game.

Contoh:

```text
Enemy Health       100 → 120
Enemy Damage        10 → 12
Enemy Speed          3 → 3.5
Spawn Interval       5 → 4
Health Drop Chance 10% → 15%
```

Parameter adaptation cocok untuk DDA karena mudah diimplementasikan dan mudah diamati.

---

# Slide 32 — Enemy Parameter yang Dapat Diadaptasi

Parameter enemy:

```text
maxHealth
damage
moveSpeed
attackCooldown
detectionRange
accuracy
aggression
reactionDelay
```

Contoh:

```text
Jika player terlalu kuat:
    enemy damage naik
    enemy speed naik
    attack cooldown turun
```

```text
Jika player kesulitan:
    enemy damage turun
    enemy speed turun
    attack cooldown naik
```

---

# Slide 33 — Spawn Parameter yang Dapat Diadaptasi

Parameter spawner:

```text
enemyCount
spawnInterval
maxEnemiesAlive
enemyTypeWeight
waveSize
eliteSpawnChance
```

Contoh:

```text
Player sangat baik:
    spawnInterval lebih kecil
    eliteSpawnChance naik

Player kesulitan:
    waveSize turun
    enemyCount turun
```

Untuk praktikum Unity, spawner sangat cocok untuk menunjukkan DDA.

---

# Slide 34 — Resource Parameter yang Dapat Diadaptasi

Parameter resource:

```text
healthDropChance
ammoDropChance
powerUpChance
healingAmount
resourceSpawnInterval
```

Contoh:

```text
Player sering low health:
    healthDropChance naik
```

```text
Player dominan:
    healthDropChance turun
```

Resource adaptation sering lebih halus daripada langsung mengubah enemy.

---

# Slide 35 — Rubber Banding

**Rubber banding** adalah teknik menyesuaikan difficulty agar pemain yang tertinggal masih memiliki kesempatan mengejar.

Istilah ini sering digunakan pada racing game.

Contoh:

```text
Player tertinggal jauh
    ↓
mobil player mendapat sedikit boost
atau AI lawan sedikit melambat
```

Tujuannya:
- menjaga pertandingan tetap kompetitif,
- menghindari gap terlalu besar,
- mempertahankan ketegangan.

---

# Slide 36 — Rubber Banding dalam Genre Lain

Rubber banding tidak hanya untuk racing.

Contoh action game:

```text
Player hampir mati
    ↓
enemy sedikit mengurangi agresivitas
health item lebih mungkin muncul
```

Contoh wave survival:

```text
Player tertinggal performa
    ↓
wave berikutnya sedikit lebih ringan
```

Contoh tactical game:

```text
Player kehilangan banyak unit
    ↓
enemy reinforcement ditunda
```

Rubber banding harus dibuat halus agar player tidak merasa dicurangi.

---

# Slide 37 — Risiko Rubber Banding

Rubber banding dapat terasa tidak adil jika terlalu jelas.

Contoh buruk:
- enemy tiba-tiba sangat lemah tanpa alasan,
- player yang unggul merasa “dihukum”,
- kemenangan terasa tidak natural,
- player merasa game memanipulasi hasil.

Solusi:
- lakukan perubahan kecil,
- gunakan batas minimum/maksimum,
- beri alasan diegetic,
- jangan ubah terlalu sering,
- jangan merusak skill expression.

---

# Slide 38 — Visible vs Invisible Adaptation

## Visible Adaptation

Player melihat perubahan.

Contoh:

```text
Wave 3: enemy elite muncul
```

atau:

```text
Game memberi hint
```

## Invisible Adaptation

Game menyesuaikan di belakang layar.

Contoh:

```text
Enemy reaction delay sedikit naik
Health drop chance sedikit berubah
```

Invisible adaptation harus hati-hati agar tidak terasa curang.

---

# Slide 39 — Diegetic Adaptation

Diegetic adaptation adalah adaptasi yang memiliki alasan di dalam dunia game.

Contoh:

```text
Jika player terlalu kuat:
    enemy commander memanggil elite squad
```

```text
Jika player sering low health:
    supply drone menjatuhkan medkit
```

Adaptasi terasa lebih natural karena memiliki penjelasan gameplay.

Ini lebih baik daripada angka difficulty berubah tanpa konteks.

---

# Slide 40 — Smoothing dalam DDA

DDA tidak boleh berubah terlalu cepat.

Masalah:

```text
Player terkena damage sekali
    ↓
difficulty langsung turun
```

Itu terlalu reaktif.

Gunakan smoothing:
- moving average,
- evaluation window,
- cooldown adjustment,
- minimum interval,
- tolerance range.

Tujuan:
- difficulty stabil,
- perubahan terasa natural,
- menghindari oscillation.

---

# Slide 41 — Evaluation Window

DDA sebaiknya mengevaluasi performa dalam rentang waktu tertentu.

Contoh:

```text
Evaluasi setiap 30 detik
atau setiap akhir wave
atau setiap selesai room
```

Bukan setiap frame.

Contoh:

```text
Window:
damage taken selama 30 detik
kills selama 30 detik
health rata-rata selama 30 detik
```

Evaluation window membuat sistem lebih stabil.

---

# Slide 42 — Moving Average

Moving average menghitung rata-rata performa dari beberapa data terakhir.

Contoh:

```text
healthScore tiap 10 detik:
0.8, 0.7, 0.6, 0.4

moving average = 0.625
```

Dengan moving average, satu kejadian ekstrem tidak langsung mengubah difficulty secara besar.

---

# Slide 43 — DDA Oscillation

Oscillation terjadi ketika difficulty naik-turun terlalu sering.

Contoh:

```text
Player bagus
    ↓
difficulty naik

Player langsung kesulitan
    ↓
difficulty turun

Player bagus lagi
    ↓
difficulty naik
```

Akibat:
- gameplay terasa tidak stabil,
- balancing sulit,
- AI terasa tidak konsisten.

Solusi:
- tolerance,
- cooldown adjustment,
- minimum duration,
- perubahan bertahap.

---

# Slide 44 — Difficulty Adjustment Cooldown

Cooldown membatasi seberapa sering difficulty boleh berubah.

Contoh:

```text
Difficulty hanya boleh berubah setiap 30 detik.
```

Pseudocode:

```text
if Time.time - lastAdjustmentTime >= adjustmentCooldown:
    EvaluateDifficulty()
```

Manfaat:
- mengurangi perubahan berlebihan,
- memudahkan debugging,
- gameplay lebih stabil.

---

# Slide 45 — Adjustment Step

Jangan ubah difficulty terlalu drastis.

Contoh buruk:

```text
difficultyMultiplier 0.8 → 1.5
```

Terlalu ekstrem.

Contoh lebih baik:

```text
difficultyMultiplier += 0.05
```

atau:

```text
difficultyLevel naik satu tingkat
```

Perubahan kecil lebih aman.

---

# Slide 46 — Batas Minimum dan Maksimum

DDA harus memiliki batas.

Contoh:

```text
minDifficulty = 0.75
maxDifficulty = 1.50
```

Tanpa batas:
- enemy bisa terlalu lemah,
- enemy bisa terlalu kuat,
- gameplay rusak.

Unity:

```csharp
difficultyMultiplier =
    Mathf.Clamp(difficultyMultiplier, 0.75f, 1.5f);
```

---

# Slide 47 — DDA dan Fairness

DDA harus menjaga fairness.

Pertanyaan desain:
- Apakah player merasa dibantu terlalu jelas?
- Apakah player yang bermain baik merasa dihukum?
- Apakah reward skill tetap terasa?
- Apakah adaptasi merusak tantangan?
- Apakah perubahan difficulty dapat dijelaskan?

DDA yang baik membantu pengalaman bermain tanpa menghilangkan makna skill.

---

# Slide 48 — DDA dan Player Agency

Player agency berarti player merasa keputusan dan skill mereka penting.

Jika DDA terlalu kuat:
- player merasa game menentukan hasil,
- kemenangan terasa kurang bermakna,
- kekalahan terasa tidak adil.

DDA sebaiknya:
- mendukung player,
- bukan menggantikan skill player,
- menjaga tantangan,
- tidak membuat hasil terasa otomatis.

---

# Slide 49 — DDA dan Transparansi

Beberapa game menampilkan difficulty adaptif secara jelas.

Contoh:

```text
Threat Level meningkat
Enemy Reinforcement datang
Area menjadi lebih berbahaya
```

Beberapa game menyembunyikan DDA.

Keduanya boleh, tetapi harus sesuai desain.

Untuk pembelajaran, sebaiknya tampilkan debug:

```text
Skill Score
Difficulty Multiplier
Current Adaptation
```

Agar mahasiswa memahami cara kerja sistem.

---

# Slide 50 — DDA dengan Enemy AI

DDA dapat mengubah AI enemy.

Contoh:

```text
Difficulty rendah:
enemy lebih lambat
attack cooldown lebih lama
detection range lebih kecil

Difficulty tinggi:
enemy lebih cepat
attack cooldown lebih pendek
detection range lebih luas
lebih agresif
```

Parameter AI yang dapat berubah:
- FSM transition threshold,
- Utility AI weights,
- Behavior Tree priority,
- perception radius,
- reaction delay.

---

# Slide 51 — DDA dengan Utility AI

Jika enemy menggunakan Utility AI, DDA dapat mengubah bobot.

Contoh:

```text
Difficulty tinggi:
attackWeight naik
takeCoverWeight naik
fleeWeight turun

Difficulty rendah:
attackWeight turun
fleeWeight naik
reactionDelay naik
```

Dengan cara ini, enemy tidak hanya lebih kuat secara angka, tetapi juga lebih cerdas atau agresif.

---

# Slide 52 — DDA dengan Behavior Tree

Pada Behavior Tree, DDA dapat mengubah:
- cooldown decorator,
- condition threshold,
- priority order,
- action parameter.

Contoh:

```text
Attack cooldown:
Easy  = 2.0 detik
Normal = 1.5 detik
Hard = 1.0 detik
```

atau:

```text
Vision range:
Easy  = 6
Normal = 10
Hard = 14
```

---

# Slide 53 — DDA dengan Spawner

Spawner adalah komponen yang paling mudah diadaptasi.

Contoh:

```text
Difficulty rendah:
spawn interval = 6 detik
max enemy alive = 3

Difficulty normal:
spawn interval = 4 detik
max enemy alive = 5

Difficulty tinggi:
spawn interval = 2.5 detik
max enemy alive = 8
```

Ini cocok untuk praktikum karena hasilnya langsung terlihat.

---

# Slide 54 — DDA dengan PCG

DDA dapat mengontrol PCG.

Contoh:

```text
Player bagus:
    enemyCount naik
    itemCount turun
    trapCount naik
    path lebih panjang

Player kesulitan:
    enemyCount turun
    health item naik
    trapCount turun
    path lebih pendek
```

Ini menghubungkan Pertemuan 9–10 dengan Pertemuan 11.

---

# Slide 55 — DDA dan Adaptive Spawn

Adaptive spawn adalah spawning yang menyesuaikan performa player.

Contoh:

```text
Jika player sering menang cepat:
    spawn enemy lebih banyak

Jika player sering low health:
    spawn health item lebih sering

Jika player terlalu lama bertahan:
    tambah enemy elite
```

Adaptive spawn mudah dibuat dengan:
- `EnemySpawner`,
- `DifficultyManager`,
- `PerformanceTracker`.

---

# Slide 56 — Contoh Arsitektur Unity DDA

```text
Scene
├�”€─ GameManager
├�”€─ DifficultyManager
├�”€─ PlayerPerformanceTracker
├�”€─ EnemySpawner
├�”€─ Player
├�”€─ Enemies
└�”€─ Debug UI
```

Hubungan:

```text
PlayerPerformanceTracker
        ↓
DifficultyManager
        ↓
EnemySpawner / EnemyStats
        ↓
Gameplay berubah
```

---

# Slide 57 — PlayerPerformanceTracker

Tugas:
- mencatat damage diterima,
- mencatat kill,
- mencatat health,
- mencatat waktu bertahan,
- mencatat jumlah kematian,
- menghitung performance score.

Contoh variabel:

```csharp
int killCount;
float damageTaken;
float timeSurvived;
float averageHealth;
int deathCount;
```

Tracker tidak mengubah difficulty.

Tracker hanya menyediakan data.

---

# Slide 58 — DifficultyManager

Tugas:
- membaca performance score,
- menghitung difficulty multiplier,
- membatasi nilai difficulty,
- mengirim nilai ke sistem lain.

Contoh:

```csharp
public float DifficultyMultiplier { get; private set; } = 1f;
```

DifficultyManager dapat mengontrol:
- EnemySpawner,
- EnemyStats,
- LootDrop,
- WaveManager,
- UI Debug.

---

# Slide 59 — EnemySpawner

EnemySpawner menggunakan difficulty.

Contoh:

```csharp
float currentSpawnInterval =
    baseSpawnInterval / difficultyMultiplier;
```

Jika difficulty naik:

```text
spawn interval turun
enemy muncul lebih sering
```

Contoh lain:

```csharp
int currentMaxEnemies =
    Mathf.RoundToInt(baseMaxEnemies * difficultyMultiplier);
```

---

# Slide 60 — EnemyStats Scaling

Enemy stats dapat diskalakan.

Contoh:

```csharp
enemy.maxHealth = baseHealth * difficultyMultiplier;
enemy.damage = baseDamage * difficultyMultiplier;
enemy.moveSpeed = baseSpeed * speedMultiplier;
```

Namun perlu hati-hati.

Jika semua parameter naik bersamaan:
- difficulty bisa terlalu ekstrem,
- enemy terasa tidak adil,
- balancing sulit.

Lebih baik pilih beberapa parameter saja.

---

# Slide 61 — Adaptasi yang Disarankan untuk Praktikum

Untuk praktikum Unity, adaptasi yang disarankan:

```text
1. Enemy spawn interval
2. Enemy max health
3. Enemy damage
4. Enemy move speed
5. Health item drop chance
```

Jangan terlalu banyak parameter di awal.

Prioritas:
- mudah dilihat,
- mudah diukur,
- mudah di-debug,
- tidak merusak gameplay.

---

# Slide 62 — Contoh Rule DDA Sederhana

```text
Jika skillScore > 0.75:
    difficultyMultiplier += 0.05

Jika skillScore < 0.35:
    difficultyMultiplier -= 0.05

Jika 0.35 <= skillScore <= 0.75:
    difficulty tetap
```

Kemudian:

```text
difficultyMultiplier dibatasi antara 0.75 dan 1.50
```

Evaluasi dilakukan setiap akhir wave atau setiap 30 detik.

---

# Slide 63 — Contoh Skill Score Praktikum

Untuk game survival sederhana:

```text
healthScore = currentHealth / maxHealth
killScore = killsInWindow / expectedKills
damageScore = 1 - damageTakenInWindow / maxExpectedDamage
survivalScore = timeSurvived / targetSurvivalTime
```

Gabungan:

```text
skillScore =
0.35 Ã— healthScore
+
0.30 Ã— killScore
+
0.25 Ã— damageScore
+
0.10 Ã— survivalScore
```

Nilai dinormalisasi 0–1.

---

# Slide 64 — Contoh Adaptasi Enemy

Difficulty multiplier memengaruhi:

```text
Enemy Health
Enemy Damage
Spawn Interval
```

Contoh:

| Difficulty | Enemy HP | Damage | Spawn Interval |
|---|---:|---:|---:|
| 0.75 | 75 | 7.5 | 6.0s |
| 1.00 | 100 | 10 | 4.5s |
| 1.25 | 125 | 12.5 | 3.6s |
| 1.50 | 150 | 15 | 3.0s |

Catatan:
- spawn interval biasanya dibagi multiplier,
- HP dan damage biasanya dikali multiplier.

---

# Slide 65 — Debug UI DDA

Untuk praktikum, wajib ada debug UI sederhana.

Tampilkan:
- current health,
- kills,
- damage taken,
- skill score,
- difficulty multiplier,
- spawn interval,
- enemy count,
- current adjustment.

Contoh:

```text
Skill Score: 0.72
Difficulty: 1.15
Spawn Interval: 3.9s
Adjustment: Increasing
```

Debug UI memudahkan penilaian.

---

# Slide 66 — Visualisasi DDA

Selain UI teks, bisa gunakan warna atau indikator.

Contoh:

```text
Threat Level 1 = hijau
Threat Level 2 = kuning
Threat Level 3 = oranye
Threat Level 4 = merah
```

Atau:

```text
Wave Difficulty: Low / Medium / High
```

Visual feedback membuat adaptasi lebih mudah dipahami saat demo.

---

# Slide 67 — Game Loop Praktikum

Game sederhana:

```text
Player bertahan melawan musuh.
Musuh muncul secara berkala.
Player mendapat score dari kill.
Sistem mencatat performa.
Difficulty berubah setiap interval.
Enemy berikutnya menyesuaikan difficulty.
```

Alur:

```text
Start Wave
    ↓
Spawn Enemy
    ↓
Track Performance
    ↓
Evaluate Difficulty
    ↓
Adjust Enemy Parameters
    ↓
Next Wave
```

---

# Slide 68 — Desain Gameplay Praktikum

Contoh game:

```text
Arena Survival
```

Player:
- bergerak,
- menghindari enemy,
- menyerang enemy,
- mengambil health item.

Enemy:
- mendeteksi player,
- mengejar player,
- menyerang,
- memiliki HP dan damage.

DDA:
- menyesuaikan kekuatan dan jumlah musuh berdasarkan performa player.

---

# Slide 69 — Alternatif Gameplay Praktikum

Selain arena survival, praktikum dapat berupa:

```text
Dungeon room survival
```

atau:

```text
Top-down shooter
```

atau:

```text
Robot training arena
```

Yang penting:
- ada metrik performa,
- ada enemy,
- ada parameter difficulty,
- ada perubahan yang terlihat.

---

# Slide 70 — Praktikum Pertemuan 11: Gambaran Umum

Judul praktikum:

## Adaptive Enemy Difficulty

Target:
- membuat enemy sederhana,
- mencatat performa player,
- menghitung skill score,
- mengatur difficulty multiplier,
- mengubah parameter enemy,
- menampilkan debug UI.

Detail teknis dan langkah implementasi akan dibuat pada modul praktikum terpisah.

---

# Slide 71 — Struktur Script Praktikum

Script yang direncanakan:

```text
Scripts/
├�”€─ PlayerController.cs
├�”€─ PlayerHealth.cs
├�”€─ PlayerPerformanceTracker.cs
├�”€─ DifficultyManager.cs
├�”€─ EnemySpawner.cs
├�”€─ EnemyAI.cs
├�”€─ EnemyHealth.cs
├�”€─ EnemyAttack.cs
├�”€─ LootDrop.cs
└�”€─ DDADebugUI.cs
```

Fokus utama:
- `PlayerPerformanceTracker`
- `DifficultyManager`
- `EnemySpawner`

---

# Slide 72 — Parameter Praktikum

Contoh parameter:

```text
baseEnemyHealth = 100
baseEnemyDamage = 10
baseEnemySpeed = 3
baseSpawnInterval = 4
baseMaxEnemies = 5
minDifficulty = 0.75
maxDifficulty = 1.50
adjustmentStep = 0.05
evaluationInterval = 30
```

Parameter dapat diubah dari Unity Inspector menggunakan:

```csharp
[SerializeField]
```

---

# Slide 73 — Eksperimen Mahasiswa

Mahasiswa dapat mencoba:

1. Mengubah `evaluationInterval`.
2. Mengubah `adjustmentStep`.
3. Mengubah batas minimum dan maksimum difficulty.
4. Menggunakan health sebagai satu-satunya metrik.
5. Menggunakan multi-metrik skill score.
6. Mengadaptasi spawn interval saja.
7. Mengadaptasi enemy health dan damage.
8. Menambahkan health drop adaptation.
9. Membandingkan static difficulty dan dynamic difficulty.
10. Menampilkan grafik perubahan difficulty sederhana.

---

# Slide 74 — Evaluasi Praktikum

Pertanyaan evaluasi:

1. Apakah game mencatat performa player?
2. Apakah skill score berubah sesuai kondisi?
3. Apakah difficulty multiplier berubah stabil?
4. Apakah perubahan difficulty tidak terlalu cepat?
5. Apakah enemy menjadi lebih sulit saat player dominan?
6. Apakah enemy menjadi lebih mudah saat player kesulitan?
7. Apakah nilai difficulty memiliki batas?
8. Apakah debug UI jelas?
9. Apakah gameplay tetap menyenangkan?
10. Apakah adaptasi terasa adil?

---

# Slide 75 — Kesalahan Umum Implementasi DDA

1. Difficulty berubah setiap frame.
2. Tidak ada batas minimum/maksimum.
3. Semua parameter enemy dinaikkan sekaligus.
4. Tidak ada smoothing atau evaluation window.
5. Skill score tidak dinormalisasi.
6. Player dihukum karena bermain baik.
7. Game menjadi terlalu mudah setelah player terkena damage sedikit.
8. Debug UI tidak tersedia.
9. Adaptasi tidak terasa dalam gameplay.
10. Adaptasi terlalu jelas dan terasa curang.

---

# Slide 76 — DDA dan Balancing

DDA bukan pengganti balancing manual.

Developer tetap perlu:
- menentukan base difficulty,
- menentukan range adaptasi,
- menguji gameplay,
- mengatur parameter,
- memastikan challenge tetap adil.

DDA membantu menyesuaikan pengalaman, tetapi tidak boleh digunakan untuk menutupi desain game yang buruk.

---

# Slide 77 — DDA dan Data Analytics

DDA dapat menjadi dasar untuk player analytics.

Data yang dikumpulkan:
- waktu bertahan,
- death count,
- damage taken,
- enemy killed,
- difficulty history,
- item usage.

Data ini dapat digunakan untuk:
- balancing,
- player modeling,
- adaptive content,
- evaluasi game design.

Ini menjadi jembatan menuju Pertemuan 12.

---

# Slide 78 — Hubungan dengan Player Modeling

DDA menilai performa saat ini.

Player modeling mencoba memahami karakter player lebih luas.

Contoh:

```text
DDA:
Player sedang kesulitan sekarang.

Player Modeling:
Player cenderung agresif, sering menyerang, jarang bertahan.
```

Pertemuan berikutnya akan membahas:
- player telemetry,
- skill estimation,
- play style,
- player profile,
- adaptation policy.

---

# Slide 79 — Hubungan dengan PCG

PCG dapat menghasilkan konten.

DDA dapat menentukan parameter konten.

Contoh:

```text
DDA menentukan difficulty = tinggi
        ↓
PCG membuat room dengan lebih banyak enemy
        ↓
Loot lebih sedikit
        ↓
Path lebih kompleks
```

Dengan kombinasi PCG + DDA, game dapat menghasilkan pengalaman adaptif.

---

# Slide 80 — Ringkasan Materi

Hari ini kita mempelajari:

```text
Dynamic Difficulty Adjustment
│
├�”€─ Player Performance
├�”€─ Performance Metrics
├�”€─ Normalization
├�”€─ Skill Score
├�”€─ Difficulty Model
├�”€─ Adaptive Gameplay
├�”€─ Rubber Banding
├�”€─ Parameter Adaptation
├�”€─ Smoothing
├�”€─ Evaluation Window
├�”€─ Difficulty Multiplier
├�”€─ Enemy Adaptation
├�”€─ Spawner Adaptation
└�”€─ Unity DDA Architecture
```

Konsep kunci:

> DDA yang baik menjaga game tetap menantang dan menyenangkan tanpa membuat player merasa dicurangi.

---

# Slide 81 — Pertanyaan Diskusi

1. Mengapa game yang terlalu mudah bisa membosankan?
2. Mengapa game yang terlalu sulit bisa membuat frustrasi?
3. Apa perbedaan static difficulty dan dynamic difficulty?
4. Metrik apa yang cocok untuk mengukur performa player?
5. Mengapa metrik perlu dinormalisasi?
6. Mengapa DDA tidak boleh berubah setiap frame?
7. Apa risiko rubber banding?
8. Apa parameter enemy yang aman untuk diadaptasi?
9. Bagaimana DDA dapat dikombinasikan dengan PCG?
10. Bagaimana cara membuat DDA tetap adil?

---

# Slide 82 — Latihan Konsep

Rancang sistem DDA untuk game survival arena.

Spesifikasi:

```text
Player melawan enemy dalam wave.
Setiap 30 detik game mengevaluasi performa.
Jika player terlalu dominan, enemy diperkuat.
Jika player kesulitan, enemy dilemahkan.
```

Tentukan:
1. Metrik player performance.
2. Rumus skill score.
3. Difficulty model.
4. Parameter enemy yang diadaptasi.
5. Batas minimum dan maksimum difficulty.
6. Cara mencegah difficulty naik-turun terlalu cepat.

---

# Slide 83 — Latihan Desain Rubber Banding

Rancang rubber banding untuk game racing atau arena survival.

Pertanyaan:
1. Kapan player dianggap tertinggal?
2. Bantuan apa yang diberikan?
3. Seberapa besar bantuan tersebut?
4. Bagaimana agar bantuan tidak terasa curang?
5. Apa batas maksimal bantuan?
6. Apakah bantuan terlihat oleh player atau tersembunyi?

---

# Slide 84 — Penutup

## Praktikum Pertemuan 11

Praktikum detail akan dibuat pada modul terpisah:

```text
Game otomatis menyesuaikan musuh berdasarkan performa player
```

Fokus praktikum:
- performance tracking,
- skill score,
- difficulty multiplier,
- enemy stat scaling,
- spawn rate adaptation,
- debug UI,
- gameplay testing.

Materi berikutnya:

```text
Player Modeling & Adaptive Game AI
```

---

# Catatan Pembelajaran

Urutan pembelajaran yang disarankan:

```text
1. Mulai dari masalah game terlalu mudah / terlalu sulit
2. Jelaskan flow dan challenge balance
3. Perkenalkan DDA
4. Bahas player performance metrics
5. Jelaskan normalisasi dan skill score
6. Bahas difficulty model
7. Jelaskan adaptive gameplay dan rubber banding
8. Bahas parameter adaptation
9. Jelaskan smoothing, evaluation window, dan cooldown
10. Hubungkan DDA dengan enemy AI, spawner, dan PCG
11. Tutup dengan gambaran praktikum Unity
```

Penekanan penting:

> DDA bukan sekadar menaikkan atau menurunkan angka musuh, tetapi sistem desain yang membaca performa player, menyesuaikan tantangan, dan menjaga pengalaman bermain tetap seimbang.
