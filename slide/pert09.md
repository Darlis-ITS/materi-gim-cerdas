# Game Cerdas — Pertemuan 9
## Procedural Content Generation (PCG)

**Program Studi S1 Teknik Informatika**  
**Tools:**  Unity 6 + C#  
**Posisi materi:**  Setelah UTS / Mini Project, masuk ke topik Content Intelligence dalam Game AI

---

# Slide 1 — Cover

## Procedural Content Generation (PCG)

**Game Cerdas — Pertemuan 9**  
Pokok bahasan:
- Konsep Procedural Content Generation
- Randomness
- Seed
- Constructive PCG
- Generate-and-Test PCG
- PCG Taxonomy
- Penerapan PCG di Unity

Praktikum yang akan dibuat terpisah: **Procedural Spawning****Random Level Sederhana**  
> Fokus pertemuan ini adalah memahami bagaimana game dapat menghasilkan konten secara otomatis menggunakan algoritma, aturan, dan parameter.

---

# Slide 2 — Posisi Materi dalam Rencana Pembelajaran

Pada pertemuan sebelumnya, mahasiswa telah mempelajari:

```text
Pertemuan 1–2 : Introduction, AI dalam Game, Perception, Memory, Decision
Pertemuan 3   : Movement AI & Steering
Pertemuan 4   : Pathfinding & Navigation
Pertemuan 5   : Finite State Machine
Pertemuan 6   : Behavior Tree & Utility AI
Pertemuan 7   : Game AI Integration & Tactical AI
Pertemuan 8   : UTS / Mini Project
```

Topik sebelumnya banyak membahas:

```text
AI untuk perilaku agent / NPC
```

Pertemuan 9 mulai masuk ke area:

```text
AI untuk menghasilkan konten game
```

Materi ini disebut:

```text
Procedural Content Generation
```

---

# Slide 3 — Mengapa PCG Penting?

Dalam game, konten bisa sangat banyak.

Contoh konten:
- level,
- dungeon,
- musuh,
- item,
- terrain,
- quest,
- peta,
- loot,
- obstacle,
- dekorasi,
- layout ruangan.

Jika semua dibuat manual, prosesnya bisa lama dan mahal.

PCG membantu developer membuat konten secara otomatis dengan aturan tertentu.

---

# Slide 4 — Contoh Game yang Menggunakan PCG

PCG sering ditemukan pada:
- roguelike,
- dungeon crawler,
- survival game,
- sandbox game,
- strategy game,
- open world game,
- endless runner,
- loot-based RPG.

Contoh penggunaan:
- dungeon berubah setiap run,
- item muncul secara acak,
- musuh muncul berdasarkan area,
- terrain dibuat dari noise,
- quest dibuat dari template.

---

# Slide 5 — Capaian Pembelajaran Pertemuan

Setelah pertemuan ini, mahasiswa diharapkan mampu:

1. Menjelaskan konsep Procedural Content Generation.
2. Menjelaskan peran randomness dalam PCG.
3. Menjelaskan konsep seed dan reproducibility.
4. Membedakan random murni dan controlled randomness.
5. Menjelaskan constructive PCG.
6. Menjelaskan generate-and-test PCG.
7. Menjelaskan taxonomy PCG secara umum.
8. Merancang PCG sederhana untuk spawning atau level layout.
9. Menghubungkan konsep PCG dengan implementasi Unity.
10. Menjelaskan parameter dan evaluasi hasil PCG.

---

# Slide 6 — Apa Itu Procedural Content Generation?

**Procedural Content Generation** atau**PCG** adalah teknik menghasilkan konten game secara otomatis menggunakan algoritma.

Konten tidak dibuat satu per satu secara manual, tetapi dihasilkan berdasarkan:
- aturan,
- parameter,
- randomness,
- seed,
- constraint,
- evaluasi.

Contoh sederhana:

```text
Buat 10 enemy pada posisi acak
di area yang sudah ditentukan.
```

Contoh lebih kompleks:

```text
Buat dungeon dengan beberapa ruangan,
koridor yang saling terhubung,
item, enemy, dan posisi boss.
```

---

# Slide 7 — Manual Content vs Procedural Content

## Manual Content

Designer membuat konten secara langsung.

Contoh:
- menaruh enemy satu per satu,
- membuat level secara manual,
- menentukan posisi item secara manual.

## Procedural Content

Algoritma membuat konten.

Contoh:
- enemy muncul otomatis,
- level dibuat dari grid,
- loot dibuat berdasarkan rarity,
- obstacle diatur secara acak.

| Aspek | Manual | Procedural |
|---|---|---|
| Kontrol | Tinggi | Bergantung aturan |
| Variasi | Terbatas | Bisa sangat banyak |
| Waktu produksi | Lama | Lebih cepat setelah sistem dibuat |
| Risiko | Stabil | Bisa menghasilkan konten buruk jika aturan lemah |

---

# Slide 8 — PCG Bukan Sekadar Random

Kesalahan umum:

```text
PCG = random
```

Padahal PCG yang baik bukan hanya acak.

PCG yang baik biasanya:

```text
Random
+
Rule
+
Constraint
+
Validation
+
Design Goal
```

Contoh:

```text
Enemy boleh muncul acak,
tetapi tidak boleh muncul terlalu dekat dari player.
```

atau:

```text
Dungeon boleh acak,
tetapi harus memiliki jalan dari start ke goal.
```

---

# Slide 9 — Randomness

**Randomness** adalah ketidakpastian atau variasi dalam hasil.

Dalam game, randomness digunakan untuk:
- variasi posisi,
- variasi item,
- variasi musuh,
- variasi level,
- variasi event,
- variasi reward.

Contoh Unity:

```csharp
int value = Random.Range(0, 10);
float x = Random.Range(-5f, 5f);
```

Randomness membuat game tidak selalu sama setiap dimainkan.

---

# Slide 10 — Random.Range di Unity

Unity menyediakan fungsi:

```csharp
Random.Range(min, max)
```

Untuk integer:

```csharp
int number = Random.Range(0, 5);
```

Hasil mungkin:

```text
0, 1, 2, 3, atau 4
```

Untuk float:

```csharp
float value = Random.Range(0f, 5f);
```

Hasil bisa berupa nilai desimal antara 0 sampai 5.

Catatan:
- `Random.Range(int, int)` batas atas tidak termasuk.
- `Random.Range(float, float)` batas atas dapat termasuk.

---

# Slide 11 — Random Position

Contoh posisi acak pada bidang XZ:

```csharp
float x = Random.Range(-10f, 10f);
float z = Random.Range(-10f, 10f);

Vector3 position = new Vector3(x, 0f, z);
```

Posisi tersebut dapat digunakan untuk:
- spawning enemy,
- spawning item,
- dekorasi level,
- obstacle.

Namun, posisi acak belum tentu valid.

Masalah:
- muncul di dalam tembok,
- muncul di luar arena,
- terlalu dekat dengan player,
- saling bertumpuk.

---

# Slide 12 — Controlled Randomness

**Controlled randomness** berarti randomness tetap dibatasi aturan.

Contoh aturan:

```text
Enemy tidak boleh muncul terlalu dekat dari player.
Item harus muncul di area walkable.
Boss harus muncul jauh dari start.
Obstacle tidak boleh menutup semua jalan.
```

Alur:

```text
Random position
    ↓
Cek valid?
    ├�”€─ Ya → gunakan
    └�”€─ Tidak → cari lagi
```

Controlled randomness membuat hasil PCG lebih masuk akal.

---

# Slide 13 — Probability

PCG sering menggunakan probabilitas.

Contoh loot:

```text
Common item    70%
Rare item      25%
Legendary item 5%
```

Contoh enemy:

```text
Slime      50%
Goblin     30%
Skeleton   15%
Mini Boss   5%
```

Probabilitas membantu mengatur frekuensi kemunculan konten.

---

# Slide 14 — Weighted Random

Weighted random adalah random dengan bobot.

| Item | Weight |
|---|---:|
| Coin | 70 |
| Potion | 20 |
| Sword | 8 |
| Legendary Gem | 2 |

Total weight:

```text
100
```

Item dengan bobot lebih besar lebih sering muncul.

Weighted random cocok untuk:
- loot table,
- enemy spawn table,
- reward generation,
- random event.

---

# Slide 15 — Randomness dan Fairness

Random tidak selalu terasa adil bagi player.

Contoh:
- player mendapat item buruk terus-menerus,
- enemy kuat muncul terlalu sering,
- level terlalu sulit karena obstacle acak,
- spawn terlalu dekat dari player.

Karena itu PCG perlu memperhatikan fairness.

Solusi:
- batas minimal dan maksimal,
- pity system,
- spawn distance,
- difficulty budget,
- validation rules.

---

# Slide 16 — Seed

**Seed** adalah nilai awal yang digunakan untuk menghasilkan urutan random.

Dengan seed yang sama, hasil random dapat dibuat sama kembali.

Contoh:

```text
Seed = 12345
```

Jika algoritma dan parameter sama, hasil generation dapat direproduksi.

Seed sangat penting untuk:
- debugging,
- testing,
- replay,
- sharing level,
- procedural world generation.

---

# Slide 17 — Reproducibility

Reproducibility berarti hasil dapat diulang.

Contoh:

```text
Seed 1001 menghasilkan dungeon A
Seed 1002 menghasilkan dungeon B
Seed 1001 menghasilkan dungeon A lagi
```

Manfaat:
- designer dapat menguji level tertentu,
- bug pada level acak dapat dilacak,
- player dapat berbagi seed,
- sistem dapat membuat challenge harian.

---

# Slide 18 — Random.InitState di Unity

Unity menyediakan:

```csharp
Random.InitState(seed);
```

Contoh:

```csharp
int seed = 12345;
Random.InitState(seed);

int value = Random.Range(0, 100);
```

Jika seed sama, urutan random yang dihasilkan akan sama.

Catatan:
- `Random.InitState()` memengaruhi random state Unity.
- Untuk sistem besar, bisa dipertimbangkan menggunakan `System.Random` agar generator lebih terisolasi.

---

# Slide 19 — UnityEngine.Random vs System.Random

## UnityEngine.Random

Digunakan langsung oleh Unity.

```csharp
Random.Range(0, 10);
```

Kelebihan:
- mudah,
- umum digunakan,
- terintegrasi dengan Unity.

## System.Random

Generator random dari C#.

```csharp
System.Random rng = new System.Random(seed);
int value = rng.Next(0, 10);
```

Kelebihan:
- bisa memiliki beberapa generator terpisah,
- lebih mudah mengontrol seed per sistem.

---

# Slide 20 — Seed untuk Debugging

Tanpa seed:

```text
Bug muncul hanya kadang-kadang.
Sulit mengulang kondisi yang sama.
```

Dengan seed:

```text
Seed 8421 menghasilkan level bermasalah.
Developer menjalankan ulang seed 8421.
Bug dapat dianalisis.
```

Dalam PCG, seed sebaiknya ditampilkan atau disimpan.

Contoh:

```text
Current Seed: 8421
```

---

# Slide 21 — Parameter PCG

PCG biasanya dikendalikan oleh parameter.

Contoh procedural spawning:

```text
enemyCount
spawnAreaSize
minDistanceFromPlayer
maxEnemyPerZone
enemyTypeWeights
```

Contoh random level:

```text
mapWidth
mapHeight
wallProbability
roomCount
minRoomSize
maxRoomSize
corridorWidth
```

Parameter menentukan karakter hasil generation.

---

# Slide 22 — PCG Pipeline

Pipeline sederhana:

```text
Input Parameter
      ↓
Random / Seed
      ↓
Generate Candidate Content
      ↓
Validate Content
      ↓
Place Content in World
      ↓
Evaluate / Debug
```

Contoh:

```text
Parameter: 10 enemy
Seed: 123
Generate posisi acak
Cek jarak dari player
Spawn enemy
Tampilkan debug
```

---

# Slide 23 — Constructive PCG

**Constructive PCG** adalah metode menghasilkan konten langsung menggunakan aturan tertentu.

Contoh:

```text
Buat room
Hubungkan room dengan corridor
Letakkan start
Letakkan goal
Letakkan enemy
```

Konten langsung dibangun dengan asumsi aturan generation sudah cukup baik.

Constructive PCG biasanya cepat dan sederhana.

---

# Slide 24 — Contoh Constructive PCG

Contoh random level sederhana:

```text
1. Buat grid kosong
2. Pilih beberapa posisi room
3. Buat room pada posisi tersebut
4. Hubungkan room dengan corridor
5. Letakkan player di room pertama
6. Letakkan goal di room terakhir
```

Jika aturan baik, hasil langsung dapat dimainkan.

Kelebihan:
- cepat,
- mudah dipahami,
- cocok untuk praktikum awal.

---

# Slide 25 — Kelebihan Constructive PCG

Kelebihan:
- implementasi relatif sederhana,
- performa cepat,
- mudah digunakan real-time,
- cocok untuk spawning sederhana,
- cocok untuk level kecil,
- tidak memerlukan evaluasi kompleks.

Contoh:
- spawn item acak,
- generate obstacle sederhana,
- dungeon room-corridor sederhana,
- random enemy placement.

---

# Slide 26 — Kekurangan Constructive PCG

Kekurangan:
- jika aturan kurang baik, hasil bisa buruk,
- tidak selalu menjamin level playable,
- sulit memenuhi constraint kompleks,
- variasi bisa terasa repetitif,
- perlu banyak tuning parameter.

Contoh masalah:

```text
Start dan goal tidak terhubung.
Enemy muncul di posisi tidak valid.
Obstacle menutup semua jalan.
Room saling bertumpuk.
```

---

# Slide 27 — Generate-and-Test PCG

**Generate-and-Test** menghasilkan kandidat konten, lalu menguji apakah konten tersebut memenuhi syarat.

Alur:

```text
Generate candidate
        ↓
Test / Validate
        ↓
Valid?
 ├�”€─ Ya → gunakan
 └�”€─ Tidak → generate ulang
```

Contoh:

```text
Buat dungeon acak
Cek apakah start terhubung ke goal
Jika tidak, buat ulang
```

---

# Slide 28 — Contoh Generate-and-Test

Contoh spawning:

```text
Generate random position
        ↓
Cek apakah posisi walkable
        ↓
Cek jarak dari player
        ↓
Cek tidak bertumpuk dengan enemy lain
        ↓
Jika valid, spawn enemy
Jika tidak, cari posisi lain
```

Ini lebih aman daripada random murni.

Namun, jika aturan terlalu ketat, sistem bisa gagal menemukan posisi valid.

---

# Slide 29 — Validation Rules

Validation rules adalah aturan untuk mengecek kualitas hasil PCG.

Contoh rules:

```text
Level harus memiliki path dari start ke goal.
Start dan goal harus cukup jauh.
Enemy tidak boleh muncul terlalu dekat dari start.
Jumlah item minimal 3.
Setiap room harus terhubung.
Boss harus berada di room terakhir.
```

Validation rules membuat PCG lebih terkontrol.

---

# Slide 30 — Playability Constraint

Constraint paling penting dalam PCG level adalah:

```text
Level harus bisa dimainkan.
```

Contoh:
- player bisa bergerak dari start ke goal,
- tidak ada area penting yang tertutup,
- enemy tidak langsung membunuh player,
- resource cukup,
- obstacle tidak membuat game mustahil.

Untuk level grid, playability dapat diuji dengan BFS atau A*.

---

# Slide 31 — Generate-and-Test dengan Pathfinding

Contoh:

```text
Generate map
    ↓
Gunakan BFS/A* dari Start ke Goal
    ↓
Path ditemukan?
    ├�”€─ Ya → level valid
    └�”€─ Tidak → generate ulang
```

Ini menghubungkan materi PCG dengan Pertemuan 4:

```text
Pathfinding dapat digunakan untuk mengevaluasi hasil PCG.
```

---

# Slide 32 — Kelebihan Generate-and-Test

Kelebihan:
- hasil lebih aman,
- dapat menjamin constraint tertentu,
- cocok untuk level generation,
- dapat menghindari konten tidak valid,
- mudah dipahami secara konsep.

Contoh constraint:
- connectivity,
- distance,
- enemy placement,
- item placement.

---

# Slide 33 — Kekurangan Generate-and-Test

Kekurangan:
- bisa lebih lambat,
- dapat gagal jika constraint terlalu ketat,
- perlu batas jumlah percobaan,
- tidak menjamin kualitas estetika,
- testing rules harus dirancang dengan baik.

Contoh:

```text
Coba 100 kali mencari posisi spawn valid.
Jika gagal, hentikan atau longgarkan aturan.
```

Gunakan:

```text
maxAttempts
```

agar loop tidak berjalan tanpa akhir.

---

# Slide 34 — Constructive vs Generate-and-Test

| Aspek | Constructive | Generate-and-Test |
|---|---|---|
| Cara kerja | Bangun langsung | Buat lalu validasi |
| Kecepatan | Cepat | Bisa lebih lambat |
| Keamanan hasil | Bergantung aturan | Lebih terkontrol |
| Cocok untuk | Spawning sederhana | Level dengan constraint |
| Risiko | Hasil tidak valid | Banyak percobaan gagal |
| Implementasi awal | Lebih mudah | Sedikit lebih kompleks |

Keduanya dapat digabung.

---

# Slide 35 — Hybrid PCG

Dalam praktik, PCG sering menggunakan pendekatan hybrid.

Contoh:

```text
Constructive:
Buat room dan corridor

Generate-and-Test:
Cek apakah semua room terhubung
Cek apakah start-goal valid
Cek apakah enemy placement aman
```

Hybrid membuat generation:
- lebih cepat daripada test total,
- lebih aman daripada constructive murni.

---

# Slide 36 — PCG Taxonomy

**PCG taxonomy** adalah cara mengelompokkan teknik PCG berdasarkan karakteristiknya.

Beberapa dimensi taxonomy:
- online vs offline,
- necessary vs optional,
- deterministic vs stochastic,
- constructive vs generate-and-test,
- automatic vs mixed-initiative,
- generic vs adaptive.

Taxonomy membantu memahami jenis PCG yang digunakan.

---

# Slide 37 — Online vs Offline PCG

## Online PCG

Konten dibuat saat game berjalan.

Contoh:
- endless runner membuat jalan terus-menerus,
- enemy spawn runtime,
- loot drop saat enemy mati.

## Offline PCG

Konten dibuat sebelum game dimainkan, lalu disimpan.

Contoh:
- tool generate dungeon untuk designer,
- generate terrain lalu diedit manual,
- batch generate level.

---

# Slide 38 — Necessary vs Optional PCG

## Necessary PCG

Game tidak berjalan tanpa PCG.

Contoh:
- endless procedural world,
- roguelike dungeon setiap run.

## Optional PCG

PCG hanya membantu variasi atau produksi konten.

Contoh:
- random loot,
- random decoration,
- variasi enemy placement.

Dalam praktikum, PCG bersifat optional tetapi memberi variasi gameplay.

---

# Slide 39 — Deterministic vs Stochastic

## Deterministic

Output selalu sama untuk input yang sama.

Contoh:

```text
Seed 123 + parameter sama = output sama
```

## Stochastic

Menggunakan randomness sehingga hasil bervariasi.

Namun stochastic tetap dapat dibuat reproducible dengan seed.

PCG game biasanya memadukan:
- aturan deterministic,
- variasi stochastic.

---

# Slide 40 — Automatic vs Mixed-Initiative PCG

## Automatic PCG

Sistem menghasilkan konten tanpa campur tangan designer saat generation.

## Mixed-Initiative PCG

Sistem dan designer bekerja bersama.

Contoh:
- tool menyarankan layout dungeon,
- designer memilih dan mengedit,
- sistem melengkapi detail.

Untuk Unity, mixed-initiative dapat dibuat dengan custom editor tool, tetapi praktikum awal cukup runtime automatic PCG.

---

# Slide 41 — Generic vs Adaptive PCG

## Generic PCG

Konten dibuat tanpa memperhatikan player tertentu.

Contoh:
- dungeon random biasa,
- item random biasa.

## Adaptive PCG

Konten dibuat menyesuaikan kondisi player.

Contoh:
- enemy spawn menyesuaikan skill player,
- loot menyesuaikan kebutuhan player,
- level difficulty meningkat bertahap.

Adaptive PCG berhubungan dengan DDA pada pertemuan berikutnya.

---

# Slide 42 — PCG Taxonomy Ringkas

| Dimensi | Pilihan |
|---|---|
| Waktu generate | Online / Offline |
| Peran dalam game | Necessary / Optional |
| Randomness | Deterministic / Stochastic |
| Cara membangun | Constructive / Generate-and-Test |
| Keterlibatan designer | Automatic / Mixed-Initiative |
| Adaptasi player | Generic / Adaptive |

Praktikum Pertemuan 9 akan fokus pada:

```text
Online
Optional
Stochastic with Seed
Constructive + Simple Validation
Automatic
Generic
```

---

# Slide 43 — Jenis Konten yang Dapat Dibuat dengan PCG

PCG dapat menghasilkan banyak jenis konten.

```text
Game Content
├�”€─ Space
│   ├�”€─ Level
│   ├�”€─ Dungeon
│   └�”€─ Terrain
│
├�”€─ Entities
│   ├�”€─ Enemy
│   ├�”€─ Item
│   └�”€─ NPC
│
├�”€─ Rules
│   ├�”€─ Quest
│   ├�”€─ Objective
│   └�”€─ Challenge
│
└�”€─ Aesthetic
    ├�”€─ Decoration
    ├�”€─ Vegetation
    └�”€─ Visual variation
```

Pertemuan ini fokus pada:
- spawning,
- random level sederhana.

---

# Slide 44 — Procedural Spawning

**Procedural spawning** adalah proses memunculkan objek secara otomatis berdasarkan aturan.

Objek yang dapat di-spawn:
- enemy,
- item,
- obstacle,
- collectible,
- power-up,
- decoration,
- resource.

Contoh:

```text
Spawn 20 coin di area map
Spawn 5 enemy di luar safe zone
Spawn 3 health pack di lokasi acak
```

---

# Slide 45 — Spawn Area

Spawn area adalah area yang boleh digunakan untuk memunculkan objek.

Bentuk spawn area:
- rectangle,
- circle,
- polygon,
- volume,
- zone,
- grid region.

Contoh sederhana:

```text
x = -10 sampai 10
z = -10 sampai 10
```

Unity:

```csharp
float x = Random.Range(-10f, 10f);
float z = Random.Range(-10f, 10f);
Vector3 position = new Vector3(x, 0f, z);
```

---

# Slide 46 — Spawn Rule

Spawn rule adalah aturan pemunculan objek.

Contoh:

```text
Enemy tidak boleh spawn di dekat player.
Enemy tidak boleh spawn di dalam obstacle.
Item harus spawn di atas ground.
Enemy maksimal 3 per zone.
Power-up hanya muncul setelah waktu tertentu.
```

Spawn rule membuat procedural spawning lebih terarah.

---

# Slide 47 — Spawn Validation

Contoh validation untuk spawning:

```text
1. Posisi berada di area spawn.
2. Posisi berada di atas NavMesh.
3. Posisi tidak terlalu dekat dengan player.
4. Posisi tidak bertabrakan dengan obstacle.
5. Posisi tidak terlalu dekat dengan objek lain.
```

Unity dapat menggunakan:
- `Physics.CheckSphere`,
- `Physics.OverlapSphere`,
- `NavMesh.SamplePosition`,
- `LayerMask`.

---

# Slide 48 — Physics.CheckSphere

`Physics.CheckSphere` dapat digunakan untuk mengecek apakah area tertentu kosong.

Contoh:

```csharp
bool blocked = Physics.CheckSphere(
    position,
    checkRadius,
    obstacleMask
);
```

Jika `blocked == true`, posisi tidak valid.

Berguna untuk:
- mencegah spawn di dalam obstacle,
- mencegah objek saling bertumpuk,
- mengecek ruang kosong.

---

# Slide 49 — NavMesh.SamplePosition untuk Spawn

Jika spawning dilakukan pada area 3D dengan NavMesh, gunakan:

```csharp
NavMesh.SamplePosition()
```

Contoh:

```csharp
NavMeshHit hit;

if (NavMesh.SamplePosition(
        randomPosition,
        out hit,
        sampleRadius,
        NavMesh.AllAreas))
{
    Vector3 spawnPosition = hit.position;
}
```

Tujuan:
- memastikan spawn berada di area yang dapat dilalui,
- menghindari posisi di luar NavMesh.

---

# Slide 50 — Object Prefab

Dalam Unity, objek yang di-spawn biasanya berupa prefab.

Prefab:
- enemy prefab,
- item prefab,
- obstacle prefab,
- room prefab,
- tile prefab.

Contoh:

```csharp
Instantiate(enemyPrefab, spawnPosition, Quaternion.identity);
```

Prefab memungkinkan sistem PCG membuat banyak objek dari template yang sama.

---

# Slide 51 — Procedural Level Sederhana

Level sederhana dapat dibuat dengan grid.

Contoh:

```text
0 = floor
1 = wall
S = start
G = goal
```

Grid:

```text
S . . # .
. # . # .
. # . . .
. . # # .
. . . . G
```

Setelah grid dibuat, Unity menampilkan:
- floor tile,
- wall tile,
- start,
- goal,
- enemy,
- item.

---

# Slide 52 — Random Level dengan Probability

Contoh:

```text
Setiap cell memiliki peluang menjadi wall.
```

Parameter:

```text
wallProbability = 0.25
```

Pseudocode:

```text
for each cell:
    if random < wallProbability:
        cell = wall
    else:
        cell = floor
```

Masalah:
- start dan goal bisa terputus,
- terlalu banyak wall,
- level bisa tidak playable.

Karena itu perlu validation.

---

# Slide 53 — Random Walk Level

Random walk membuat path dengan berjalan acak dari titik awal.

Alur:

```text
Start dari posisi tengah
Ulangi beberapa langkah:
    pilih arah acak
    bergerak satu cell
    jadikan cell sebagai floor
```

Hasil:
- bentuk lebih organik,
- cocok untuk cave sederhana,
- tidak sepenuhnya random per cell.

Random walk adalah constructive PCG sederhana.

---

# Slide 54 — Room and Corridor Level

Metode sederhana:

```text
1. Buat beberapa room
2. Tempatkan room secara acak
3. Hubungkan room dengan corridor
4. Letakkan start di room pertama
5. Letakkan goal di room terakhir
```

Visual:

```text
┌�”€─�”€─�”       ┌�”€─�”€─�”€─�”
│ R1 │�”€─�”€─�”€─�”€│  R2  │
└�”€─�”€─�”˜       └�”€─�”¬─�”€─�”˜
                │
             ┌�”€─�”´─�”€┐
             │ R3  │
             └�”€─�”€─�”€┘
```

Metode ini akan dibahas lebih lanjut pada pertemuan PCG level berikutnya.

---

# Slide 55 — Tile-Based Generation di Unity

Tile-based generation menggunakan prefab tile.

Contoh prefab:
- FloorTile,
- WallTile,
- StartTile,
- GoalTile,
- EnemySpawnPoint,
- ItemSpawnPoint.

Alur:

```text
Baca grid
Untuk setiap cell:
    jika floor → Instantiate FloorTile
    jika wall  → Instantiate WallTile
```

Setiap cell grid dikonversi menjadi posisi dunia.

---

# Slide 56 — Grid Coordinate ke World Position

Grid coordinate:

```text
x, y
```

World position Unity:

```text
x, z
```

Contoh:

```csharp
Vector3 worldPosition =
    new Vector3(x * tileSize, 0f, y * tileSize);
```

Jika `tileSize = 2`, maka:
- grid (0,0) → world (0,0,0)
- grid (1,0) → world (2,0,0)
- grid (0,1) → world (0,0,2)

---

# Slide 57 — Data Structure untuk Grid

Contoh enum:

```csharp
public enum TileType
{
    Floor,
    Wall,
    Start,
    Goal
}
```

Grid:

```csharp
TileType[,] grid;
```

Atau menggunakan class Node:

```csharp
public class Cell
{
    public Vector2Int gridPosition;
    public bool walkable;
    public TileType type;
}
```

Struktur data yang rapi membuat PCG lebih mudah dikembangkan.

---

# Slide 58 — Reuse Materi Pathfinding

PCG level dapat divalidasi menggunakan pathfinding.

Contoh:

```text
Setelah level dibuat:
    jalankan BFS/A*
    cek Start ke Goal
```

Jika path ada:

```text
level valid
```

Jika tidak ada path:

```text
generate ulang
```

Ini menunjukkan integrasi:
- PCG,
- graph,
- pathfinding,
- validation.

---

# Slide 59 — Difficulty dalam PCG

PCG dapat mengatur tingkat kesulitan.

Contoh parameter:
- jumlah enemy,
- jarak start-goal,
- jumlah obstacle,
- jumlah resource,
- jenis enemy,
- ukuran level,
- kepadatan ruangan.

Contoh:

```text
Level mudah:
enemy sedikit
resource banyak
jalan luas

Level sulit:
enemy banyak
resource sedikit
jalan sempit
```

Ini menjadi jembatan menuju materi DDA.

---

# Slide 60 — PCG dan Replayability

Replayability berarti game tetap menarik dimainkan berulang.

PCG membantu replayability karena:
- level bisa berubah,
- spawn bisa berbeda,
- loot bisa bervariasi,
- challenge bisa berubah,
- player tidak selalu menghafal pola.

Namun replayability tidak otomatis baik.

PCG tetap harus menghasilkan konten yang:
- adil,
- dapat dimainkan,
- menarik,
- tidak terlalu acak.

---

# Slide 61 — PCG dan Designer Control

PCG yang baik tetap memberi kontrol kepada designer.

Contoh:
- enemy maksimal 10,
- boss selalu di akhir,
- start area aman,
- rare item tidak terlalu sering,
- level harus punya minimal 3 room,
- jalur utama harus valid.

Designer menentukan aturan.  
Algoritma menghasilkan variasi di dalam aturan tersebut.

---

# Slide 62 — PCG dan Debugging

PCG sulit di-debug jika hasil berubah terus.

Hal yang sebaiknya ditampilkan:
- seed,
- parameter,
- jumlah percobaan,
- jumlah objek berhasil spawn,
- posisi gagal validasi,
- path start-goal,
- grid hasil generation.

Debug visual:
- warna tile,
- gizmos spawn radius,
- garis path,
- label seed.

---

# Slide 63 — Kesalahan Umum PCG

1. Menganggap random sudah cukup.
2. Tidak menggunakan seed.
3. Tidak menyimpan seed untuk debugging.
4. Tidak melakukan validation.
5. Tidak memberi batas `maxAttempts`.
6. Spawn terlalu dekat dari player.
7. Level tidak memiliki jalan dari start ke goal.
8. Terlalu banyak parameter tanpa struktur.
9. Konten sulit dikontrol designer.
10. Tidak ada debug visual.

---

# Slide 64 — Praktikum Pertemuan 9: Gambaran Umum

Praktikum yang direncanakan:

## Procedural Spawning / Random Level Sederhana

Target umum:
- mahasiswa memahami random generation,
- menggunakan seed,
- membuat spawn procedural,
- membuat aturan validasi sederhana,
- menampilkan hasil generation di Unity,
- membandingkan beberapa seed berbeda.

Detail teknis dan langkah implementasi akan dibuat pada modul praktikum terpisah.

---

# Slide 65 — Pilihan Praktikum A: Procedural Spawning

Target:
- spawn enemy/item secara acak,
- gunakan spawn area,
- gunakan min distance dari player,
- gunakan obstacle check,
- gunakan prefab,
- gunakan seed.

Komponen:
- `Spawner.cs`
- enemy prefab,
- item prefab,
- spawn area,
- obstacle layer,
- player reference.

Output:
- objek muncul secara procedural dengan aturan tertentu.

---

# Slide 66 — Pilihan Praktikum B: Random Level Sederhana

Target:
- membuat grid level,
- menentukan wall/floor secara procedural,
- menentukan start dan goal,
- melakukan validasi path sederhana,
- instantiate tile prefab,
- spawn player dan goal.

Komponen:
- `LevelGenerator.cs`
- floor prefab,
- wall prefab,
- start/goal marker,
- grid data,
- seed,
- validation.

Output:
- level sederhana berubah sesuai seed.

---

# Slide 67 — Struktur Scene Praktikum

Contoh scene:

```text
PCGDemoScene
├�”€─ PCGManager
├�”€─ Player
├�”€─ Camera
├�”€─ Ground / Tiles
├�”€─ Enemy Prefabs
├�”€─ Item Prefabs
└�”€─ Debug UI
```

Untuk spawning:

```text
SpawnArea
├�”€─ EnemySpawn
├�”€─ ItemSpawn
└�”€─ Obstacle
```

Untuk random level:

```text
GeneratedLevel
├�”€─ FloorTiles
├�”€─ WallTiles
├�”€─ Start
└�”€─ Goal
```

---

# Slide 68 — Parameter Praktikum

Contoh parameter procedural spawning:

```text
seed
enemyCount
itemCount
spawnAreaSize
minDistanceFromPlayer
spawnCheckRadius
maxAttempts
```

Contoh parameter random level:

```text
seed
mapWidth
mapHeight
tileSize
wallProbability
startPosition
goalPosition
maxGenerationAttempts
```

Parameter ini sebaiknya dapat diubah melalui Unity Inspector.

---

# Slide 69 — Eksperimen Mahasiswa

Mahasiswa dapat mencoba:

1. Mengubah seed dan membandingkan hasil.
2. Mengubah jumlah enemy.
3. Mengubah ukuran spawn area.
4. Mengubah minimal jarak spawn dari player.
5. Mengubah probability wall.
6. Membandingkan level valid dan tidak valid.
7. Mengaktifkan atau menonaktifkan validation.
8. Menampilkan seed pada UI.
9. Membuat spawn table sederhana.
10. Membuat random item rarity.

---

# Slide 70 — Evaluasi Hasil PCG

Pertanyaan evaluasi:

1. Apakah hasil generation dapat direproduksi dengan seed yang sama?
2. Apakah objek spawn pada posisi valid?
3. Apakah enemy terlalu dekat dengan player?
4. Apakah item tersebar dengan baik?
5. Apakah level memiliki path dari start ke goal?
6. Apakah hasil terlalu acak atau masih terkontrol?
7. Apakah parameter mudah diatur?
8. Apakah sistem memiliki batas `maxAttempts`?
9. Apakah debug seed tersedia?
10. Apakah hasil generation menarik untuk dimainkan?

---

# Slide 71 — Hubungan PCG dengan Materi Sebelumnya

PCG dapat memanfaatkan materi sebelumnya.

```text
Pathfinding:
validasi jalur start ke goal

Navigation:
cek posisi spawn pada NavMesh

Movement AI:
NPC bergerak dalam level yang dihasilkan

Decision AI:
enemy mengambil keputusan di level procedural

Tactical AI:
cover dan posisi taktis dapat dibuat procedural
```

PCG bukan materi terpisah, tetapi dapat memperkaya seluruh sistem Game AI.

---

# Slide 72 — Hubungan PCG dengan Materi Berikutnya

Materi berikutnya akan membahas PCG lebih lanjut untuk:

```text
Level & Dungeon Generation
```

Topik lanjutan:
- grid-based generation,
- random walk,
- BSP,
- cellular automata,
- constraint-based generation,
- procedural dungeon.

Pertemuan 9 adalah dasar konsep PCG.  
Pertemuan berikutnya memperdalam PCG untuk level/dungeon.

---

# Slide 73 — Ringkasan Materi

Hari ini kita mempelajari:

```text
Procedural Content Generation
│
├�”€─ Konsep PCG
├�”€─ Randomness
├�”€─ Controlled Randomness
├�”€─ Probability
├�”€─ Weighted Random
├�”€─ Seed
├�”€─ Reproducibility
├�”€─ Parameter PCG
├�”€─ Constructive PCG
├�”€─ Generate-and-Test PCG
├�”€─ Validation Rules
├�”€─ PCG Taxonomy
├�”€─ Procedural Spawning
└�”€─ Random Level Sederhana
```

Konsep kunci:

> PCG yang baik bukan sekadar acak, tetapi acak yang dikendalikan oleh aturan, parameter, constraint, dan tujuan desain.

---

# Slide 74 — Pertanyaan Diskusi

1. Mengapa PCG tidak sama dengan random murni?
2. Apa manfaat seed dalam PCG?
3. Mengapa reproducibility penting untuk debugging?
4. Apa perbedaan constructive dan generate-and-test?
5. Kapan generate-and-test lebih aman dibanding constructive?
6. Mengapa level procedural perlu validation?
7. Bagaimana pathfinding dapat digunakan dalam PCG?
8. Mengapa spawn enemy perlu min distance dari player?
9. Apa risiko jika tidak ada `maxAttempts`?
10. Bagaimana PCG dapat meningkatkan replayability?

---

# Slide 75 — Latihan Konsep

Rancang sistem procedural spawning sederhana.

Spesifikasi:

```text
Spawn 10 enemy dan 5 item di arena.
Enemy tidak boleh muncul dalam radius 5 dari player.
Item tidak boleh muncul di dalam obstacle.
Gunakan seed agar hasil dapat diulang.
```

Tentukan:
1. Parameter yang dibutuhkan.
2. Aturan validasi.
3. Struktur data yang digunakan.
4. Cara menampilkan debug.
5. Apa yang dilakukan jika posisi valid tidak ditemukan?

---

# Slide 76 — Latihan Konsep Random Level

Rancang random level grid sederhana.

Spesifikasi:

```text
Ukuran map 20 x 20.
Start di kiri bawah.
Goal di kanan atas.
Wall muncul dengan probability tertentu.
Level harus memiliki path dari start ke goal.
```

Tentukan:
1. Representasi grid.
2. Cara generate wall.
3. Cara validasi path.
4. Algoritma pathfinding yang digunakan.
5. Apa yang dilakukan jika level tidak valid?

---

# Slide 77 — Penutup

## Praktikum Pertemuan 9

Praktikum detail akan dibuat pada modul terpisah:

```text
Procedural Spawning
/
Random Level Sederhana
```

Fokus praktikum:
- random generation,
- seed,
- prefab spawning,
- validation,
- parameter tuning,
- debug visual.

Materi berikutnya:

```text
PCG for Level & Dungeon Generation
```

yang akan memperdalam generation level berbasis grid, dungeon, dan teknik procedural lain.

---

# Catatan Pembelajaran

Urutan pembelajaran yang disarankan:

```text
1. Hubungkan PCG dengan replayability
2. Jelaskan bahwa PCG bukan random murni
3. Berikan contoh random spawning sederhana
4. Jelaskan seed dan reproducibility
5. Tunjukkan controlled randomness
6. Jelaskan constructive PCG
7. Jelaskan generate-and-test PCG
8. Hubungkan validation dengan pathfinding
9. Jelaskan PCG taxonomy secara ringkas
10. Tutup dengan gambaran praktikum Unity
```

Penekanan penting:

> Mahasiswa perlu memahami bahwa PCG adalah kombinasi antara algoritma, randomness, aturan desain, dan validasi. Randomness memberi variasi, tetapi constraint membuat hasilnya tetap dapat dimainkan.
