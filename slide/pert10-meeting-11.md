# Game Cerdas — Pertemuan 10
## PCG for Level & Dungeon Generation

**Program Studi S1 Teknik Informatika**  
**Tools:**  Unity 6 + C#  
**Posisi materi:**  Lanjutan Pertemuan 9 — Procedural Content Generation (PCG)

---

# Slide 1 — Cover

## PCG for Level & Dungeon Generation

**Game Cerdas — Pertemuan 10**  
Pokok bahasan:
- Grid-based generation
- Random walk
- BSP
- Cellular automata
- Constraint-based generation
- Procedural dungeon / level di Unity

Praktikum yang akan dibuat terpisah: **Procedural Dungeon / Level di Unity**  
> Fokus pertemuan ini adalah memahami teknik-teknik dasar untuk menghasilkan level dan dungeon secara prosedural, serta bagaimana konsep tersebut dapat diterapkan di Unity.

---

# Slide 2 — Review Pertemuan 9

Pada Pertemuan 9 kita mempelajari dasar PCG.

Materi utama:
- konsep PCG,
- randomness,
- seed,
- reproducibility,
- constructive PCG,
- generate-and-test,
- PCG taxonomy,
- procedural spawning,
- random level sederhana.

Inti penting:

```text
PCG bukan sekadar random.
PCG = Randomness + Rule + Constraint + Validation + Design Goal
```

Pertemuan 10 memperdalam PCG khusus untuk:

```text
Level Generation
Dungeon Generation
```

---

# Slide 3 — Posisi Materi Pertemuan 10

Dalam rencana pembelajaran Game Cerdas:

```text
Pertemuan 9
PCG Fundamentals

Pertemuan 10
PCG for Level & Dungeon Generation

Pertemuan 11
Dynamic Difficulty Adjustment

Pertemuan 12
Player Modeling & Adaptive Game AI
```

Pertemuan 10 menjadi jembatan dari:

```text
konten acak sederhana
```

menuju:

```text
level yang terstruktur, playable, dan dapat divalidasi
```

---

# Slide 4 — Mengapa Level Generation Penting?

Level adalah ruang tempat gameplay terjadi.

Level yang baik memengaruhi:
- navigasi player,
- posisi enemy,
- pacing permainan,
- tingkat kesulitan,
- eksplorasi,
- strategi,
- replayability.

Procedural level generation memungkinkan game memiliki:

```text
banyak variasi level
tanpa membuat semuanya secara manual
```

Contoh:
- dungeon berbeda setiap run,
- cave berbeda setiap permainan,
- arena berbeda setiap wave,
- maze berbeda setiap level.

---

# Slide 5 — Dungeon sebagai Studi Kasus PCG

Dungeon cocok untuk belajar PCG karena strukturnya jelas.

Elemen dungeon:
- room,
- corridor,
- wall,
- floor,
- start,
- goal,
- enemy,
- item,
- trap,
- boss room,
- locked door.

Contoh struktur:

```text
Start Room → Corridor → Enemy Room → Treasure Room → Boss Room
```

Dungeon generation dapat dibuat sederhana tetapi tetap menarik.

---

# Slide 6 — Capaian Pembelajaran Pertemuan

Setelah pertemuan ini, mahasiswa diharapkan mampu:

1. Menjelaskan konsep level/dungeon generation.
2. Merepresentasikan level menggunakan grid.
3. Menjelaskan grid-based generation.
4. Menjelaskan random walk untuk menghasilkan area.
5. Menjelaskan BSP untuk membagi ruang menjadi room.
6. Menjelaskan cellular automata untuk cave generation.
7. Menjelaskan constraint-based generation.
8. Menjelaskan validasi level menggunakan aturan dan pathfinding.
9. Merancang procedural dungeon sederhana untuk Unity.
10. Menjelaskan parameter penting dalam level generation.

---

# Slide 7 — Apa Itu Level Generation?

**Level generation** adalah proses menghasilkan layout level secara otomatis.

Input:
- ukuran level,
- seed,
- parameter,
- aturan,
- prefab,
- constraint.

Output:
- layout level,
- posisi start dan goal,
- obstacle,
- room,
- corridor,
- enemy spawn,
- item spawn.

Contoh:

```text
Input:
width = 30
height = 30
roomCount = 8
seed = 12345

Output:
dungeon dengan 8 room dan corridor penghubung
```

---

# Slide 8 — Level Representation

Sebelum level dibuat di Unity, level perlu direpresentasikan dalam data.

Representasi umum:
- grid,
- graph,
- tilemap,
- room list,
- navmesh area,
- prefab chunk.

Untuk praktikum awal, representasi paling mudah:

```text
Grid 2D
```

Setiap cell menyimpan informasi:

```text
Wall
Floor
Start
Goal
EnemySpawn
ItemSpawn
```

---

# Slide 9 — Grid-Based Representation

Grid membagi level menjadi cell.

Contoh:

```text
# # # # # # #
# S . . # G #
# . # . # . #
# . # . . . #
# # # # # # #
```

Keterangan:

```text
# = wall
. = floor
S = start
G = goal
```

Setiap cell dapat dikonversi menjadi tile atau prefab di Unity.

---

# Slide 10 — Grid Coordinate

Grid menggunakan koordinat:

```text
(x, y)
```

Contoh:

```text
(0,0) (1,0) (2,0)
(0,1) (1,1) (2,1)
(0,2) (1,2) (2,2)
```

Unity 3D biasanya menggunakan bidang XZ.

Konversi:

```csharp
Vector3 worldPosition =
    new Vector3(x * tileSize, 0f, y * tileSize);
```

Dengan cara ini, data grid dapat diwujudkan menjadi objek di scene.

---

# Slide 11 — Tile Type

Setiap cell dapat memiliki tipe.

Contoh enum:

```csharp
public enum TileType
{
    Wall,
    Floor,
    Start,
    Goal,
    EnemySpawn,
    ItemSpawn
}
```

Grid:

```csharp
TileType[,] grid;
```

Dengan struktur ini, generator dapat memproses level secara sistematis.

---

# Slide 12 — Grid-Based Generation

**Grid-based generation** adalah teknik membuat level dengan memodifikasi cell dalam grid.

Contoh:
- mulai semua cell sebagai wall,
- ubah sebagian cell menjadi floor,
- buat room,
- buat corridor,
- letakkan start dan goal,
- validasi path.

Alur umum:

```text
Initialize Grid
      ↓
Generate Floor
      ↓
Generate Rooms / Corridors
      ↓
Place Start & Goal
      ↓
Place Enemy & Item
      ↓
Validate
      ↓
Build Unity Scene
```

---

# Slide 13 — Initialize Grid

Langkah awal paling umum:

```text
Semua cell = wall
```

Contoh:

```text
# # # # #
# # # # #
# # # # #
# # # # #
# # # # #
```

Kemudian algoritma akan “mengukir” floor.

```text
# # # # #
# . . # #
# # . # #
# # . . #
# # # # #
```

Pendekatan ini umum untuk dungeon dan cave generation.

---

# Slide 14 — Floor-First vs Wall-First

## Wall-First

Mulai dari semua wall, lalu buat floor.

Cocok untuk:
- dungeon,
- cave,
- maze,
- random walk.

## Floor-First

Mulai dari semua floor, lalu tambahkan wall/obstacle.

Cocok untuk:
- arena,
- open field,
- obstacle placement,
- tactical map sederhana.

Pemilihan bergantung jenis level yang diinginkan.

---

# Slide 15 — Random Fill Grid

Metode sederhana:

```text
Setiap cell memiliki peluang menjadi wall.
```

Parameter:

```text
wallProbability = 0.35
```

Pseudocode:

```text
for each cell:
    if random < wallProbability:
        cell = wall
    else:
        cell = floor
```

Kelebihan:
- sangat mudah.

Kekurangan:
- hasil bisa berantakan,
- area bisa terputus,
- tidak menjamin start ke goal terhubung.

---

# Slide 16 — Validasi Grid

Setelah grid dibuat, perlu validasi.

Contoh validasi:
- start dan goal ada,
- start terhubung ke goal,
- jumlah floor cukup,
- tidak terlalu banyak wall,
- enemy tidak spawn di wall,
- item tidak spawn terlalu dekat dari start.

Validasi dapat menggunakan:
- BFS,
- Dijkstra,
- A*,
- flood fill.

Ini menghubungkan PCG dengan materi pathfinding.

---

# Slide 17 — Flood Fill untuk Validasi

Flood fill dapat digunakan untuk mengecek area yang terhubung.

Alur:

```text
Mulai dari Start
Kunjungi semua floor yang dapat dicapai
Hitung jumlah cell yang terjangkau
Cek apakah Goal termasuk terjangkau
```

Jika goal tidak tercapai:

```text
level tidak valid
```

Flood fill mirip BFS.

---

# Slide 18 — Random Walk

**Random walk** adalah teknik membuat level dengan berjalan acak di grid.

Alur:

```text
Mulai dari satu posisi
Ulangi beberapa langkah:
    pilih arah acak
    bergerak ke cell tetangga
    ubah cell menjadi floor
```

Random walk cocok untuk:
- cave,
- winding path,
- organic dungeon,
- area eksplorasi.

---

# Slide 19 — Ilustrasi Random Walk

Awal:

```text
# # # # #
# # # # #
# # S # #
# # # # #
# # # # #
```

Setelah random walk:

```text
# # # # #
# . . # #
# . S . #
# # . . #
# # # # #
```

Floor terbentuk dari jejak perjalanan walker.

---

# Slide 20 — Pseudocode Random Walk

```text
position = startPosition
grid[position] = floor

for i from 0 to walkLength:
    direction = random direction
    position = position + direction
    position = clamp inside grid
    grid[position] = floor
```

Arah:

```text
up
down
left
right
```

Bisa juga menggunakan 8 arah, tetapi 4 arah lebih mudah dikontrol.

---

# Slide 21 — Parameter Random Walk

Parameter penting:
- start position,
- walk length,
- number of walkers,
- chance to change direction,
- boundary margin,
- target floor count.

Contoh:

```text
walkLength = 200
walkerCount = 3
mapWidth = 40
mapHeight = 40
```

Semakin panjang walk, semakin banyak floor yang terbentuk.

---

# Slide 22 — Multiple Random Walkers

Daripada satu walker, gunakan beberapa walker.

```text
Walker A mulai dari tengah
Walker B mulai dari titik lain
Walker C mulai dari titik lain
```

Manfaat:
- area lebih luas,
- bentuk lebih variatif,
- tidak terlalu linear.

Namun perlu validasi agar area tetap terhubung.

---

# Slide 23 — Random Walk untuk Main Path

Random walk dapat digunakan untuk membuat jalur utama.

Contoh:

```text
Start
  ↓
random walk
  ↓
Goal
```

Kemudian tambahkan:
- room kecil,
- enemy,
- item,
- branch path,
- treasure area.

Metode ini cocok untuk level sederhana karena path utama pasti terbentuk.

---

# Slide 24 — Kelebihan Random Walk

Kelebihan:
- mudah diimplementasikan,
- hasil terlihat organik,
- cocok untuk cave/dungeon sederhana,
- dapat menjamin koneksi jika walk dimulai dari start,
- parameter mudah dipahami.

Kekurangan:
- bentuk sulit dikontrol,
- bisa terlalu sempit,
- bisa terlalu berliku,
- perlu smoothing atau pelebaran area.

---

# Slide 25 — Pelebaran Random Walk

Random walk sering menghasilkan jalur sempit.

Solusi:
- setiap posisi walker membuat area 3x3 floor,
- tambahkan brush size,
- lakukan smoothing,
- tambahkan room pada beberapa titik.

Contoh:

```text
Saat walker berada di (x,y),
ubah cell sekitar menjadi floor.
```

Pseudocode:

```text
for dx = -1 to 1:
    for dy = -1 to 1:
        grid[x+dx, y+dy] = floor
```

---

# Slide 26 — BSP

**BSP** adalah singkatan dari**Binary Space Partitioning**.

BSP membagi area besar menjadi area-area kecil secara rekursif.

Konsep:

```text
Area besar
   ↓ split
Area kiri + area kanan
   ↓ split lagi
Area kecil-kecil
```

Setelah area dibagi, setiap bagian dapat berisi room.

BSP sangat cocok untuk dungeon berbasis room.

---

# Slide 27 — Ilustrasi BSP

Area awal:

```text
┌�”€─�”€─�”€─�”€─�”€─�”€─�”€─�”€─�”€─�”€─�”
│                    │
│                    │
│                    │
└�”€─�”€─�”€─�”€─�”€─�”€─�”€─�”€─�”€─�”€─�”˜
```

Split pertama:

```text
┌�”€─�”€─�”€─�”€─�”€┬�”€─�”€─�”€─�”€─�”€─�”
│         │          │
│         │          │
│         │          │
└�”€─�”€─�”€─�”€─�”€┴�”€─�”€─�”€─�”€─�”€─�”˜
```

Split berikutnya:

```text
┌�”€─�”€─�”¬─�”€─�”€┬�”€─�”€─�”€─�”€─�”€─�”
│    │    │          │
├�”€─�”€─�”´─�”€─�”€┤          │
│         │          │
└�”€─�”€─�”€─�”€─�”€┴�”€─�”€─�”€─�”€─�”€─�”˜
```

---

# Slide 28 — BSP Tree

BSP menghasilkan struktur tree.

```text
Root Area
├�”€─ Left Area
│   ├�”€─ Left-Left
│   └�”€─ Left-Right
└�”€─ Right Area
    ├�”€─ Right-Left
    └�”€─ Right-Right
```

Leaf node adalah area terakhir yang tidak dibagi lagi.

Setiap leaf dapat digunakan untuk membuat room.

---

# Slide 29 — Langkah BSP Dungeon

Langkah umum:

```text
1. Mulai dari rectangle besar
2. Split horizontal atau vertical
3. Ulangi split sampai ukuran minimum
4. Buat room di setiap leaf
5. Hubungkan room antar leaf dengan corridor
6. Letakkan start dan goal
7. Spawn enemy dan item
```

BSP menghasilkan dungeon yang lebih terstruktur dibanding random walk.

---

# Slide 30 — Split Rule pada BSP

Split dapat dilakukan:
- horizontal,
- vertical.

Pemilihan split dapat acak, tetapi perlu aturan.

Contoh:
- jika area terlalu lebar, split vertical,
- jika area terlalu tinggi, split horizontal,
- jika seimbang, pilih random.

Constraint:
- ukuran area setelah split tidak boleh terlalu kecil,
- room harus muat di dalam leaf.

---

# Slide 31 — Room pada BSP

Setelah area dibagi menjadi leaf, buat room di dalam setiap leaf.

Contoh:

```text
Leaf Area
┌�”€─�”€─�”€─�”€─�”€─�”€─�”€┐
│             │
│   ┌�”€─�”€─�”€┐   │
│   │Room │   │
│   └�”€─�”€─�”€┘   │
│             │
└�”€─�”€─�”€─�”€─�”€─�”€─�”€┘
```

Room dapat dibuat dengan margin agar tidak menempel ke batas leaf.

Parameter:
- minRoomSize,
- maxRoomSize,
- roomMargin.

---

# Slide 32 — Corridor pada BSP

Room perlu dihubungkan dengan corridor.

Cara sederhana:
- hubungkan center room kiri dan kanan,
- gunakan corridor berbentuk L,
- gunakan horizontal lalu vertical,
- atau vertical lalu horizontal.

Contoh:

```text
Room A ─�”€─�”€─�”
            │
            └�”€─�”€─ Room B
```

Corridor memastikan dungeon dapat dijelajahi.

---

# Slide 33 — Kelebihan BSP

Kelebihan:
- cocok untuk dungeon room-corridor,
- lebih terstruktur,
- mudah menjamin konektivitas,
- mudah menempatkan start dan goal,
- cocok untuk desain level yang rapi.

Kekurangan:
- hasil bisa terasa terlalu kotak,
- kurang organik,
- implementasi lebih kompleks dari random walk,
- perlu recursive data structure.

---

# Slide 34 — Cellular Automata

**Cellular automata** adalah teknik grid generation berdasarkan aturan tetangga.

Setiap cell berubah berdasarkan kondisi cell di sekitarnya.

Cocok untuk:
- cave generation,
- organic map,
- terrain roughness,
- natural-looking dungeon.

Konsep:

```text
cell baru ditentukan oleh jumlah wall/floor di sekitarnya
```

---

# Slide 35 — Cellular Automata Awal

Langkah awal:
- buat grid random,
- setiap cell menjadi wall atau floor berdasarkan probability.

Contoh:

```text
# . # # .
. . # . #
# # . . .
. # # . #
# . . # .
```

Kemudian dilakukan smoothing beberapa iterasi.

---

# Slide 36 — Neighbor Count

Untuk setiap cell, hitung jumlah wall di sekitar cell.

Neighbor 8 arah:

```text
NW N NE
W  X  E
SW S SE
```

Contoh rule:

```text
Jika jumlah wall neighbor >= 5
    cell menjadi wall
Else
    cell menjadi floor
```

Rule sederhana ini dapat membentuk cave yang lebih natural.

---

# Slide 37 — Iterasi Cellular Automata

Setiap iterasi:
1. baca grid lama,
2. hitung neighbor tiap cell,
3. buat grid baru,
4. ulangi beberapa kali.

Contoh:

```text
Random grid
    ↓ iteration 1
More structured grid
    ↓ iteration 2
Smoother cave
    ↓ iteration 3
Final cave
```

Semakin banyak iterasi, hasil semakin halus.

---

# Slide 38 — Pseudocode Cellular Automata

```text
for iteration from 0 to smoothCount:
    newGrid = copy grid

    for each cell:
        wallCount = count wall neighbors

        if wallCount >= wallThreshold:
            newGrid[cell] = wall
        else:
            newGrid[cell] = floor

    grid = newGrid
```

Parameter:
- initialWallProbability,
- wallThreshold,
- smoothCount.

---

# Slide 39 — Kelebihan Cellular Automata

Kelebihan:
- hasil natural,
- cocok untuk cave,
- mudah dikombinasikan dengan random fill,
- aturan sederhana,
- parameter mudah dieksperimenkan.

Kekurangan:
- area bisa terputus,
- start dan goal tidak selalu terhubung,
- sulit menghasilkan room rapi,
- perlu validasi dan koneksi antar area.

---

# Slide 40 — Menghubungkan Area Cellular Automata

Cellular automata sering menghasilkan beberapa area terpisah.

Solusi:
- gunakan flood fill untuk menemukan region,
- pilih region terbesar,
- hapus region kecil,
- hubungkan region dengan corridor,
- regenerate jika tidak valid.

Alur:

```text
Generate Cave
    ↓
Find Regions
    ↓
Keep Largest Region
    ↓
Connect Regions
    ↓
Place Start and Goal
```

---

# Slide 41 — Constraint-Based Generation

**Constraint-based generation** membuat konten berdasarkan constraint atau aturan yang harus dipenuhi.

Contoh constraint:

```text
Start harus jauh dari goal.
Goal harus dapat dicapai dari start.
Boss room harus berada di area terdalam.
Enemy tidak boleh dekat start.
Treasure harus berada di dead-end.
Setiap room harus terhubung.
```

Constraint membuat level tidak hanya acak, tetapi sesuai desain gameplay.

---

# Slide 42 — Constraint vs Parameter

## Parameter

Nilai yang mengatur proses generation.

Contoh:

```text
roomCount = 8
wallProbability = 0.35
mapWidth = 50
```

## Constraint

Syarat yang harus dipenuhi hasil akhir.

Contoh:

```text
Start terhubung ke goal.
Jumlah floor minimal 30%.
Enemy tidak spawn dekat start.
```

Parameter mengatur cara membuat.  
Constraint mengatur kualitas hasil.

---

# Slide 43 — Hard Constraint dan Soft Constraint

## Hard Constraint

Harus dipenuhi.

Contoh:

```text
Start harus terhubung ke goal.
```

Jika gagal:

```text
level ditolak
```

## Soft Constraint

Diinginkan, tetapi tidak wajib.

Contoh:

```text
Goal sebaiknya sejauh mungkin dari start.
```

Jika tidak optimal, level masih dapat diterima.

---

# Slide 44 — Constraint-Based Pipeline

```text
Generate Candidate Level
        ↓
Check Hard Constraints
        ↓
Jika gagal → regenerate / repair
        ↓
Score Soft Constraints
        ↓
Pilih level terbaik
        ↓
Build Level
```

Pendekatan ini mirip generate-and-test, tetapi lebih formal.

---

# Slide 45 — Contoh Constraint untuk Dungeon

Hard constraints:
- semua room terhubung,
- start dan goal valid,
- path start-goal ada,
- boss room dapat dicapai,
- tile start bukan wall.

Soft constraints:
- goal jauh dari start,
- enemy tersebar merata,
- treasure berada di area samping,
- corridor tidak terlalu panjang,
- level tidak terlalu linear.

---

# Slide 46 — Repair Strategy

Jika level tidak valid, tidak selalu harus generate ulang.

Bisa dilakukan repair.

Contoh:
- jika dua region terpisah, buat corridor penghubung,
- jika goal tidak bisa dicapai, pindahkan goal,
- jika enemy terlalu dekat start, pindahkan enemy,
- jika room terlalu kecil, resize room.

Repair lebih efisien daripada generate ulang penuh.

---

# Slide 47 — Start dan Goal Placement

Penempatan start dan goal penting.

Strategi:
- start di room pertama,
- goal di room terjauh,
- start dan goal pada dua ujung dungeon,
- gunakan pathfinding untuk mencari jarak terpanjang.

Contoh:

```text
Start = room paling kiri
Goal  = room paling kanan
```

atau:

```text
Goal = room dengan jarak path terjauh dari start
```

---

# Slide 48 — Enemy Placement

Enemy placement juga perlu aturan.

Contoh:
- enemy tidak dekat start,
- enemy lebih banyak di dekat goal,
- enemy ditempatkan di room besar,
- enemy tidak spawn di corridor sempit,
- boss hanya di boss room.

Contoh:

```text
Jika distanceFromStart < safeDistance:
    jangan spawn enemy
```

---

# Slide 49 — Item Placement

Item placement perlu mendukung gameplay.

Contoh:
- health potion sebelum area sulit,
- treasure di dead-end,
- key sebelum locked door,
- ammo sebelum combat room,
- reward setelah enemy kuat.

Jika item placement terlalu random, gameplay bisa terasa tidak adil.

---

# Slide 50 — Dead-End dan Reward

Dead-end dapat digunakan untuk reward.

Contoh:

```text
Path utama → Goal
Cabang mati → Treasure
```

Desain:

```text
Start ─�”€─�”€─�”€─ Goal
    │
    └�”€─�”€─ Treasure
```

Ini membuat eksplorasi lebih menarik.

---

# Slide 51 — Level Metrics

Untuk mengevaluasi level, gunakan metrics.

Contoh:
- jumlah room,
- jumlah corridor,
- jumlah dead-end,
- jarak start-goal,
- persentase floor,
- enemy density,
- item density,
- branching factor,
- path length.

Metrics membantu membandingkan hasil dari beberapa seed.

---

# Slide 52 — Difficulty Metrics

Difficulty dapat diperkirakan dari:
- jumlah enemy,
- tipe enemy,
- resource yang tersedia,
- panjang path,
- jumlah trap,
- jarak antar checkpoint,
- cover availability,
- kompleksitas navigasi.

Contoh:

```text
difficultyScore =
enemyScore
+
trapScore
+
pathLengthScore
-
resourceScore
```

Ini menjadi jembatan menuju DDA.

---

# Slide 53 — Building Level di Unity

Setelah data level dibuat, Unity perlu membangun scene.

Alur:

```text
Grid Data
    ↓
Loop setiap cell
    ↓
Instantiate prefab sesuai TileType
    ↓
Set parent ke LevelRoot
    ↓
Spawn player, enemy, item
    ↓
Bake / update navigation jika diperlukan
```

Prefab:
- floor,
- wall,
- door,
- corridor,
- prop,
- enemy spawn marker.

---

# Slide 54 — Tile Prefab

Setiap cell dapat menjadi prefab.

Contoh:

```text
WallPrefab
FloorPrefab
StartPrefab
GoalPrefab
DoorPrefab
TrapPrefab
```

Unity:

```csharp
Instantiate(prefab, position, rotation, parent);
```

Agar scene rapi, gunakan parent:

```text
GeneratedLevel
├�”€─ Floors
├�”€─ Walls
├�”€─ Props
├�”€─ Enemies
└�”€─ Items
```

---

# Slide 55 — Tilemap vs 3D Prefab

## Tilemap

Cocok untuk:
- game 2D,
- top-down,
- grid jelas,
- performa baik.

## 3D Prefab

Cocok untuk:
- dungeon 3D,
- third-person,
- first-person,
- environment modular.

Untuk mata kuliah ini, dapat menggunakan 3D prefab sederhana agar sesuai dengan Unity Game AI.

---

# Slide 56 — Modular Dungeon Asset

Agar level terlihat menarik, gunakan modular assets.

Contoh:
- floor tile,
- wall tile,
- corner wall,
- door frame,
- pillar,
- torch,
- crate,
- treasure,
- trap,
- stairs.

Modular asset memudahkan PCG karena elemen bisa disusun seperti blok.

---

# Slide 57 — NavMesh untuk Dungeon Procedural

Jika dungeon dibuat saat runtime, navigation perlu diperhatikan.

Pilihan:
1. Generate level sebelum game dimulai, lalu bake NavMesh.
2. Gunakan NavMeshSurface runtime build.
3. Gunakan grid pathfinding manual.
4. Gunakan waypoint graph dari room/corridor.

Untuk praktikum sederhana:
- bisa menggunakan grid movement,
- atau generate level lalu gunakan NavMeshSurface.

---

# Slide 58 — Runtime NavMeshSurface

Dengan package AI Navigation, `NavMeshSurface` dapat dibangun runtime.

Konsep:

```csharp
navMeshSurface.BuildNavMesh();
```

Alur:

```text
Generate dungeon geometry
        ↓
Build NavMesh
        ↓
Spawn NPC
        ↓
NPC dapat menggunakan NavMeshAgent
```

Catatan:
- pastikan collider/mesh benar,
- pastikan layer included,
- runtime build dapat memakan waktu.

---

# Slide 59 — Debug Visualization

PCG level perlu debug visual.

Tampilkan:
- seed,
- grid,
- room bounds,
- corridor,
- start,
- goal,
- path utama,
- enemy spawn,
- item spawn,
- invalid cells.

Unity tools:
- `Gizmos.DrawWireCube`,
- `Debug.DrawLine`,
- warna material tile,
- UI text seed.

Debug membuat proses generation lebih mudah dipahami mahasiswa.

---

# Slide 60 — Kesalahan Umum Dungeon Generation

1. Start dan goal tidak terhubung.
2. Room saling tumpang tindih.
3. Corridor tidak menghubungkan room.
4. Enemy spawn di wall.
5. Player spawn di posisi tidak valid.
6. Tidak ada seed.
7. Tidak ada debug visual.
8. Tidak ada batas percobaan generation.
9. Semua level terasa sama.
10. Parameter terlalu banyak tetapi tidak terkontrol.

---

# Slide 61 — Membandingkan Teknik PCG

| Teknik | Cocok Untuk | Kelebihan | Kekurangan |
|---|---|---|---|
| Grid random fill | eksperimen awal | sangat mudah | sering tidak valid |
| Random walk | cave/path organik | sederhana, organik | kontrol rendah |
| BSP | room-corridor dungeon | rapi, terstruktur | lebih kompleks |
| Cellular automata | cave natural | bentuk natural | area bisa terputus |
| Constraint-based | level terkontrol | hasil lebih playable | butuh validation |

---

# Slide 62 — Kapan Menggunakan Random Walk?

Gunakan random walk jika:
- ingin cave sederhana,
- ingin jalur organik,
- ingin implementasi cepat,
- level tidak harus sangat rapi,
- cocok untuk top-down dungeon kecil.

Contoh game:
- cave exploration,
- mining game,
- roguelike sederhana,
- monster cave.

---

# Slide 63 — Kapan Menggunakan BSP?

Gunakan BSP jika:
- ingin dungeon room-corridor,
- ingin ruangan jelas,
- ingin struktur lebih rapi,
- ingin mudah menempatkan boss room,
- ingin start dan goal lebih terkontrol.

Contoh game:
- dungeon crawler,
- RPG dungeon,
- tactical room combat,
- stealth facility layout.

---

# Slide 64 — Kapan Menggunakan Cellular Automata?

Gunakan cellular automata jika:
- ingin cave natural,
- ingin bentuk organik,
- tidak memerlukan room rectangular,
- ingin variasi area alam.

Contoh:
- cave,
- forest clearing,
- underground tunnel,
- alien nest.

---

# Slide 65 — Kapan Menggunakan Constraint-Based?

Gunakan constraint-based jika:
- level harus memenuhi aturan gameplay,
- start-goal harus pasti valid,
- enemy/item harus seimbang,
- level perlu tingkat kesulitan tertentu,
- ingin generate beberapa kandidat lalu pilih terbaik.

Constraint-based sering digabung dengan teknik lain.

---

# Slide 66 — Contoh Hybrid Dungeon

Contoh hybrid:

```text
BSP untuk membuat room
        ↓
Corridor untuk menghubungkan room
        ↓
Random placement untuk enemy dan item
        ↓
Constraint check untuk start-goal
        ↓
Pathfinding untuk validasi
        ↓
Build Unity level
```

Hybrid cocok untuk praktikum karena konsepnya lengkap tetapi masih dapat dibuat sederhana.

---

# Slide 67 — Praktikum Pertemuan 10: Gambaran Umum

Praktikum:

## Procedural Dungeon / Level di Unity

Target umum:
- membuat dungeon berbasis grid,
- menghasilkan room dan corridor,
- menentukan start dan goal,
- menempatkan enemy dan item,
- memvalidasi level,
- membangun scene Unity dari data grid.

Detail langkah teknis akan dibuat pada modul praktikum terpisah.

---

# Slide 68 — Rekomendasi Praktikum

Untuk mahasiswa S1, saya merekomendasikan dua opsi.

## Opsi A — Random Walk Dungeon

Lebih sederhana.

Cocok untuk:
- memahami grid,
- memahami seed,
- memahami carving floor,
- memahami validasi.

## Opsi B — BSP Room-Corridor Dungeon

Lebih menantang.

Cocok untuk:
- memahami pembagian area,
- memahami room generation,
- memahami corridor,
- membuat dungeon yang lebih rapi.

---

# Slide 69 — Opsi Praktikum Terbaik

Rekomendasi terbaik:

```text
BSP Room-Corridor Dungeon
```

Alasan:
- hasil visual lebih mudah dipahami,
- cocok untuk enemy AI dan NavMesh,
- dungeon terlihat seperti level game,
- start, goal, enemy, item lebih mudah ditempatkan,
- mudah diperluas ke proyek UAS.

Namun untuk kelompok yang butuh versi lebih sederhana:

```text
Random Walk Dungeon
```

juga sangat baik sebagai alternatif.

---

# Slide 70 — Struktur Scene Praktikum

Contoh scene:

```text
PCG_Dungeon_Scene
├�”€─ DungeonGenerator
├�”€─ LevelRoot
├�”€─ PlayerPrefab
├�”€─ EnemyPrefabs
├�”€─ ItemPrefabs
├�”€─ FloorPrefab
├�”€─ WallPrefab
├�”€─ GoalPrefab
├�”€─ Main Camera
└�”€─ Debug UI
```

`DungeonGenerator` bertugas:
- generate data,
- build level,
- spawn object,
- menampilkan debug.

---

# Slide 71 — Struktur Script Praktikum

Script yang direncanakan:

```text
Scripts/
├�”€─ DungeonGenerator.cs
├�”€─ DungeonGrid.cs
├�”€─ Room.cs
├�”€─ BSPNode.cs
├�”€─ TileType.cs
├�”€─ LevelBuilder.cs
├�”€─ SpawnManager.cs
└�”€─ DungeonDebug.cs
```

Untuk versi random walk:
- `BSPNode.cs` dapat diganti dengan `RandomWalker.cs`.

---

# Slide 72 — Parameter Praktikum

Contoh parameter:

```text
seed
mapWidth
mapHeight
tileSize
roomCount
minRoomSize
maxRoomSize
corridorWidth
enemyCount
itemCount
maxGenerationAttempts
```

Untuk cellular automata:

```text
initialWallProbability
smoothIterations
wallThreshold
```

Untuk random walk:

```text
walkLength
walkerCount
brushSize
```

---

# Slide 73 — Output Praktikum

Output yang diharapkan:

```text
Dungeon berbeda untuk seed berbeda
Dungeon sama untuk seed sama
Start dan goal valid
Ada path dari start ke goal
Enemy dan item spawn di floor
Level dapat dimainkan
Debug seed terlihat
```

Tambahan opsional:
- minimap,
- path preview,
- boss room,
- treasure room,
- locked door,
- runtime regeneration.

---

# Slide 74 — Eksperimen Mahasiswa

Mahasiswa dapat mencoba:

1. Mengubah seed.
2. Mengubah ukuran dungeon.
3. Mengubah jumlah room.
4. Mengubah ukuran room.
5. Mengubah corridor width.
6. Membandingkan random walk dan BSP.
7. Menambahkan item di dead-end.
8. Menambahkan enemy di room tertentu.
9. Menguji validasi path.
10. Menampilkan room dan corridor dengan warna berbeda.

---

# Slide 75 — Evaluasi Praktikum

Pertanyaan evaluasi:

1. Apakah dungeon selalu dapat dimainkan?
2. Apakah start dan goal terhubung?
3. Apakah seed bekerja dengan benar?
4. Apakah hasil berbeda untuk seed berbeda?
5. Apakah enemy/item spawn di posisi valid?
6. Apakah room saling terhubung?
7. Apakah level terlalu kosong atau terlalu padat?
8. Apakah parameter mudah dituning?
9. Apakah debug visual membantu?
10. Apakah dungeon terasa menarik untuk dimainkan?

---

# Slide 76 — Hubungan dengan Materi Sebelumnya

PCG dungeon menggunakan banyak materi sebelumnya:

```text
Pertemuan 4
Pathfinding untuk validasi

Pertemuan 3
Movement NPC dalam dungeon

Pertemuan 5–6
Decision AI untuk enemy

Pertemuan 7
Tactical AI dengan cover/room

Pertemuan 9
Seed, randomness, generate-and-test
```

Dengan demikian, PCG bukan materi terpisah.

PCG dapat menjadi lingkungan tempat semua AI lain bekerja.

---

# Slide 77 — Hubungan dengan Materi Berikutnya

Materi berikutnya:

```text
Dynamic Difficulty Adjustment
```

PCG dapat terhubung dengan DDA.

Contoh:

```text
Jika player terlalu mudah menang:
    tambah enemy
    kurangi item
    buat dungeon lebih panjang

Jika player kesulitan:
    tambah health item
    kurangi enemy
    buat jalur lebih sederhana
```

PCG dapat menjadi alat untuk membuat game adaptif.

---

# Slide 78 — Ringkasan Materi

Hari ini kita mempelajari:

```text
PCG for Level & Dungeon Generation
│
├�”€─ Grid-Based Generation
├�”€─ Grid Representation
├�”€─ Random Fill
├�”€─ Random Walk
├�”€─ BSP
├�”€─ Cellular Automata
├�”€─ Constraint-Based Generation
├�”€─ Validation
├�”€─ Room & Corridor
├�”€─ Start / Goal Placement
├�”€─ Enemy / Item Placement
├�”€─ Unity Level Building
└�”€─ Procedural Dungeon Praktikum
```

Konsep kunci:

> Level procedural yang baik harus bervariasi, tetapi tetap playable, terkontrol, dan sesuai tujuan desain gameplay.

---

# Slide 79 — Pertanyaan Diskusi

1. Mengapa grid cocok untuk belajar dungeon generation?
2. Apa kelemahan random fill tanpa validasi?
3. Mengapa random walk cocok untuk cave?
4. Mengapa BSP cocok untuk dungeon room-corridor?
5. Apa masalah utama cellular automata?
6. Apa bedanya parameter dan constraint?
7. Mengapa start dan goal placement penting?
8. Bagaimana pathfinding membantu validasi level?
9. Mengapa enemy tidak boleh spawn terlalu dekat start?
10. Bagaimana PCG dungeon dapat dihubungkan dengan DDA?

---

# Slide 80 — Latihan Konsep Random Walk

Rancang level cave dengan random walk.

Spesifikasi:

```text
Map 40 x 40
Start di tengah
Walk length 300
Brush size 1
Goal di floor terjauh dari start
Enemy tidak boleh muncul dekat start
```

Tentukan:
1. Data grid yang digunakan.
2. Cara memilih arah random.
3. Cara menentukan goal.
4. Cara validasi level.
5. Cara spawn enemy dan item.

---

# Slide 81 — Latihan Konsep BSP

Rancang dungeon berbasis BSP.

Spesifikasi:

```text
Map 60 x 40
Minimum leaf size 12
Room minimal 4 x 4
Room maksimal 10 x 8
Semua room harus terhubung
Start di room pertama
Goal di room terjauh
```

Tentukan:
1. Cara split area.
2. Cara membuat room.
3. Cara menghubungkan corridor.
4. Cara menentukan start dan goal.
5. Cara menempatkan enemy dan item.

---

# Slide 82 — Penutup

## Praktikum Pertemuan 10

Praktikum detail akan dibuat pada modul terpisah:

```text
Procedural Dungeon / Level di Unity
```

Fokus praktikum:
- grid data,
- seed,
- generation algorithm,
- room/corridor atau random walk,
- validation,
- prefab instantiation,
- enemy/item placement,
- debug visual.

Materi berikutnya:

```text
Dynamic Difficulty Adjustment
```

---

# Catatan Pembelajaran

Urutan pembelajaran yang disarankan:

```text
1. Review PCG dasar dari Pertemuan 9
2. Jelaskan level sebagai data grid
3. Jelaskan grid-based generation
4. Bahas random fill dan masalahnya
5. Jelaskan random walk
6. Jelaskan BSP sebagai room-corridor generator
7. Jelaskan cellular automata untuk cave
8. Bahas constraint-based generation
9. Hubungkan validation dengan BFS/A*
10. Jelaskan cara membangun level di Unity dari data grid
11. Tutup dengan gambaran praktikum procedural dungeon
```

Penekanan penting:

> Mahasiswa perlu memahami bahwa dungeon procedural bukan hanya menghasilkan bentuk acak, tetapi menghasilkan ruang bermain yang memiliki struktur, konektivitas, tujuan, tantangan, dan validasi.
