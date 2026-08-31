# Game Cerdas — Pertemuan 4
## Pathfinding & Navigation
**Program Studi S1 Teknik Informatika — Semester 7**  
**Tools:** Unity 6 + C#  
**Posisi materi:** Lanjutan dari Pertemuan 3 — Movement AI & Steering Behaviors

---

# Slide 1 — Cover

## Pathfinding & Navigation

**Game Cerdas — Pertemuan 4**

Pokok bahasan:
- Graph
- Waypoint
- BFS
- Dijkstra
- A*
- Heuristic
- Navigation Mesh
- Unity NavMesh

Praktikum yang akan dibuat terpisah:
- Implementasi A* sederhana
- Implementasi Unity NavMesh

> Fokus pertemuan ini adalah memahami bagaimana NPC menemukan jalur dari satu lokasi ke lokasi lain secara efisien dan dapat diterapkan di Unity.

---

# Slide 2 — Review Pertemuan 3

Pada Pertemuan 3 kita mempelajari **Movement AI & Steering Behaviors**.

Materi utama:
- Seek
- Flee
- Arrive
- Pursue
- Evade
- Wander
- Obstacle Avoidance
- Separation, Alignment, Cohesion

Contoh:

```text
NPC melihat target
        ↓
Seek / Arrive
        ↓
NPC bergerak menuju target
```

Steering menjawab:

> Bagaimana agent bergerak secara lokal dan halus?

---

# Slide 3 — Keterbatasan Steering Behavior

Steering behavior cocok untuk movement lokal.

Namun, jika terdapat obstacle besar atau labirin, steering sederhana tidak cukup.

Contoh:

```text
NPC ● ───────→ ███████ ───────→ Target ●
```

Jika hanya memakai Seek:

```text
NPC bergerak lurus ke target
dan menabrak obstacle.
```

Agar NPC dapat menemukan jalan memutar, dibutuhkan:

```text
Pathfinding
```

---

# Slide 4 — Posisi Pathfinding dalam Game AI

Arsitektur sederhana Game AI:

```text
Perception
    ↓
Memory
    ↓
Decision
    ↓
Pathfinding / Navigation
    ↓
Movement / Steering
    ↓
Animation / Action
```

Contoh:

```text
NPC melihat player
        ↓
Decision: Chase
        ↓
Pathfinding: cari rute ke player
        ↓
Steering: bergerak mengikuti rute
```

Pathfinding menentukan:

> Lewat mana NPC harus berjalan?

Movement/steering menentukan:

> Bagaimana NPC bergerak mengikuti jalur tersebut?

---

# Slide 5 — Capaian Pembelajaran Pertemuan

Setelah pertemuan ini, mahasiswa diharapkan mampu:

1. Menjelaskan konsep pathfinding dan navigation dalam Game AI.
2. Merepresentasikan peta sebagai graph.
3. Menjelaskan node, edge, cost, dan waypoint.
4. Menjelaskan cara kerja BFS.
5. Menjelaskan cara kerja Dijkstra.
6. Menjelaskan cara kerja A*.
7. Menjelaskan fungsi heuristic dalam A*.
8. Membandingkan BFS, Dijkstra, dan A*.
9. Menjelaskan konsep Navigation Mesh.
10. Menghubungkan konsep pathfinding manual dengan Unity NavMesh.

---

# Slide 6 — Apa Itu Pathfinding?

**Pathfinding** adalah proses mencari jalur dari titik awal ke titik tujuan.

Contoh pertanyaan:

```text
Dari posisi NPC sekarang,
jalur mana yang harus dilewati
agar sampai ke posisi player?
```

Input:
- posisi awal,
- posisi tujuan,
- representasi peta,
- obstacle,
- biaya pergerakan.

Output:
- urutan node,
- urutan waypoint,
- jalur yang dapat diikuti NPC.

---

# Slide 7 — Apa Itu Navigation?

**Navigation** adalah proses menggunakan hasil pathfinding untuk bergerak di dalam lingkungan game.

Pathfinding:

```text
Cari jalur
```

Navigation:

```text
Ikuti jalur
hindari obstacle
atur movement
sesuaikan posisi agent
```

Contoh:

```text
Pathfinding:
A → B → C → D

Navigation:
NPC bergerak dari A ke B,
lalu B ke C,
lalu C ke D.
```

Navigation biasanya melibatkan:
- path following,
- local avoidance,
- movement controller,
- stopping distance,
- agent radius.

---

# Slide 8 — Pathfinding vs Navigation vs Steering

| Konsep | Pertanyaan | Contoh |
|---|---|---|
| Pathfinding | Jalur mana yang dipilih? | A* mencari rute |
| Navigation | Bagaimana mengikuti jalur? | NavMeshAgent berjalan ke tujuan |
| Steering | Bagaimana bergerak lokal? | Arrive, avoid, separation |

Hubungannya:

```text
Pathfinding menghasilkan path
        ↓
Navigation mengikuti path
        ↓
Steering menghaluskan gerakan lokal
```

Dalam Unity, `NavMeshAgent` menggabungkan sebagian besar proses navigation.

---

# Slide 9 — Representasi Dunia Game

Agar komputer dapat mencari jalur, dunia game harus direpresentasikan menjadi struktur yang dapat diproses.

Beberapa representasi umum:

```text
1. Grid
2. Graph
3. Waypoint network
4. Navigation Mesh
```

Contoh:
- game strategi sering memakai grid,
- game 3D sering memakai NavMesh,
- NPC patrol sering memakai waypoint,
- graph digunakan sebagai model umum.

---

# Slide 10 — Grid Map

Grid map membagi dunia menjadi kotak-kotak.

Contoh:

```text
S . . # .
. # . # .
. # . . .
. . # # .
. . . . G
```

Keterangan:

```text
S = Start
G = Goal
. = walkable
# = obstacle
```

Setiap cell dapat dianggap sebagai node.

Grid mudah dipahami dan cocok untuk menunjukkan BFS, Dijkstra, dan A*.

---

# Slide 11 — Graph

**Graph** adalah struktur data yang terdiri dari:

```text
Node
Edge
```

Node merepresentasikan titik/lokasi.  
Edge merepresentasikan hubungan antar titik.

Contoh:

```text
A ----- B
|       |
|       |
C ----- D
```

Graph dapat digunakan untuk merepresentasikan:
- peta,
- ruangan,
- jalan,
- waypoint,
- area navigasi.

---

# Slide 12 — Node

**Node** adalah titik dalam graph.

Dalam game, node dapat merepresentasikan:
- cell grid,
- waypoint,
- persimpangan,
- posisi ruangan,
- area yang dapat dilalui.

Contoh:

```text
Node A = posisi NPC
Node B = pintu
Node C = koridor
Node D = posisi target
```

Dalam Unity, node dapat direpresentasikan sebagai:
- `Vector3`,
- `GameObject`,
- class custom,
- titik pada grid.

---

# Slide 13 — Edge

**Edge** adalah hubungan antara dua node.

Contoh:

```text
A ----- B
```

Artinya:
- dari A bisa pergi ke B,
- dari B bisa pergi ke A jika graph tidak berarah.

Edge dapat memiliki biaya.

Contoh:

```text
A -- cost 2 -- B
B -- cost 5 -- C
```

Cost dapat berarti:
- jarak,
- waktu tempuh,
- tingkat bahaya,
- energi,
- kesulitan terrain.

---

# Slide 14 — Weighted dan Unweighted Graph

## Unweighted Graph

Semua edge dianggap memiliki biaya sama.

```text
A -- B -- C
```

Cocok untuk BFS.

## Weighted Graph

Setiap edge memiliki biaya berbeda.

```text
A --2-- B --5-- C
```

Cocok untuk:
- Dijkstra,
- A*.

Dalam game, weighted graph lebih realistis karena tidak semua terrain sama mudah dilalui.

---

# Slide 15 — Directed dan Undirected Graph

## Undirected Graph

Edge dapat dilalui dua arah.

```text
A ----- B
```

A bisa ke B, B bisa ke A.

## Directed Graph

Edge hanya dapat dilalui satu arah.

```text
A ----→ B
```

Contoh dalam game:
- pintu satu arah,
- tebing yang hanya bisa turun,
- conveyor belt,
- jalan satu arah.

---

# Slide 16 — Path

**Path** adalah urutan node dari start ke goal.

Contoh:

```text
Start = A
Goal  = F

Path:
A → B → D → F
```

Pathfinding mencari path yang:
- valid,
- tidak melewati obstacle,
- lebih pendek atau lebih murah,
- sesuai aturan movement agent.

---

# Slide 17 — Shortest Path

Shortest path dapat berarti:

```text
jalur dengan jumlah langkah paling sedikit
```

atau:

```text
jalur dengan total cost paling kecil
```

Contoh:

```text
A --1-- B --1-- D
 \             /
  \--5-- C --1
```

Jalur:
- A → B → D cost = 2
- A → C → D cost = 6

Shortest path adalah:

```text
A → B → D
```

---

# Slide 18 — Waypoint

**Waypoint** adalah titik yang digunakan NPC sebagai tujuan antara.

Contoh:

```text
NPC → W1 → W2 → W3 → Goal
```

Waypoint sering digunakan untuk:
- patrol,
- route planning,
- checkpoint,
- path following,
- titik navigasi manual.

Dalam Unity, waypoint sering dibuat sebagai `Empty GameObject`.

---

# Slide 19 — Waypoint Network

Waypoint dapat dihubungkan menjadi jaringan.

Contoh:

```text
W1 ----- W2 ----- W3
 |        |        |
W4 ----- W5 ----- W6
```

NPC dapat mencari jalur melalui waypoint.

Kelebihan:
- sederhana,
- mudah dibuat manual,
- cocok untuk level kecil,
- mudah dikontrol designer.

Kelemahan:
- butuh penempatan manual,
- kurang fleksibel untuk level besar,
- tidak selalu mengikuti bentuk area walkable.

---

# Slide 20 — Waypoint Patrol vs Waypoint Pathfinding

## Waypoint Patrol

NPC mengikuti titik secara urut:

```text
W1 → W2 → W3 → W4 → W1
```

## Waypoint Pathfinding

NPC memilih jalur melalui network:

```text
NPC at W1
Goal near W6

Path:
W1 → W2 → W5 → W6
```

Perbedaan penting:

```text
Patrol = mengikuti urutan tetap
Pathfinding = mencari rute terbaik
```

---

# Slide 21 — Grid sebagai Graph

Grid dapat diubah menjadi graph.

Setiap cell walkable menjadi node.

```text
. . .
. # .
. . .
```

Node walkable:

```text
(0,0), (1,0), (2,0)
(0,1),       (2,1)
(0,2), (1,2), (2,2)
```

Cell obstacle tidak menjadi node yang bisa dilalui.

---

# Slide 22 — Neighbor pada Grid

Pada grid 2D, neighbor dapat berupa 4 arah:

```text
   atas
kiri X kanan
  bawah
```

atau 8 arah:

```text
kiri-atas    atas    kanan-atas
kiri         X       kanan
kiri-bawah   bawah   kanan-bawah
```

4 arah:
- lebih sederhana,
- cocok untuk movement tile-based.

8 arah:
- lebih fleksibel,
- harus memperhatikan diagonal cost.

---

# Slide 23 — Cost pada Grid

Jika movement 4 arah:

```text
atas, bawah, kiri, kanan
cost = 1
```

Jika movement diagonal diizinkan:

```text
diagonal cost ≈ 1.414
```

karena diagonal setara dengan:

```text
√2
```

Dalam game, cost juga dapat dipengaruhi terrain:

```text
jalan biasa     cost = 1
rumput          cost = 2
lumpur          cost = 4
air dangkal     cost = 5
lava            tidak bisa dilalui
```

---

# Slide 24 — Breadth-First Search

**Breadth-First Search** atau BFS adalah algoritma pencarian yang menjelajahi node berdasarkan kedalaman terdekat terlebih dahulu.

BFS cocok untuk:
- graph tanpa bobot,
- grid dengan cost seragam,
- mencari jalur dengan jumlah langkah paling sedikit.

Prinsip:

```text
kunjungi tetangga terdekat dulu
baru lanjut ke level berikutnya
```

BFS menggunakan struktur data:

```text
Queue
```

---

# Slide 25 — Queue pada BFS

Queue menggunakan prinsip:

```text
First In, First Out
```

Contoh:

```text
Masuk:
A, B, C

Keluar:
A, B, C
```

Dalam BFS:

```text
1. Masukkan start ke queue
2. Ambil node dari depan queue
3. Masukkan neighbor yang belum dikunjungi
4. Ulangi sampai goal ditemukan
```

---

# Slide 26 — Ilustrasi BFS

Contoh grid:

```text
S . .
. # .
. . G
```

BFS menjelajah secara melebar:

```text
Step 1:
S

Step 2:
tetangga S

Step 3:
tetangga dari tetangga S

Step 4:
sampai G
```

BFS tidak mempertimbangkan arah goal secara khusus.

Artinya BFS dapat menjelajah cukup banyak node sebelum sampai goal.

---

# Slide 27 — Pseudocode BFS

```text
BFS(start, goal):
    queue = empty queue
    visited = empty set
    cameFrom = empty map

    enqueue start
    mark start as visited

    while queue is not empty:
        current = dequeue

        if current == goal:
            return reconstruct path

        for each neighbor of current:
            if neighbor not visited:
                mark neighbor as visited
                cameFrom[neighbor] = current
                enqueue neighbor
```

`cameFrom` digunakan untuk membangun kembali path dari goal ke start.

---

# Slide 28 — Kelebihan dan Kekurangan BFS

## Kelebihan

- mudah dipahami,
- mudah diimplementasikan,
- menghasilkan shortest path jika semua cost sama,
- cocok untuk grid sederhana.

## Kekurangan

- tidak cocok untuk weighted graph,
- dapat menjelajah terlalu banyak node,
- tidak menggunakan informasi arah tujuan,
- kurang efisien untuk map besar.

BFS adalah dasar penting sebelum memahami Dijkstra dan A*.

---

# Slide 29 — Dijkstra

**Dijkstra** adalah algoritma untuk mencari jalur dengan total cost terkecil pada weighted graph.

Dijkstra memperhitungkan cost setiap edge.

Contoh:

```text
A --1-- B --1-- D
 \             /
  \--5-- C --1
```

Dijkstra memilih jalur:

```text
A → B → D
```

karena total cost paling kecil.

---

# Slide 30 — Konsep Cost pada Dijkstra

Dijkstra menyimpan nilai:

```text
costSoFar
```

atau jarak termurah dari start ke node tertentu.

Contoh:

```text
costSoFar[A] = 0
costSoFar[B] = 3
costSoFar[C] = 7
```

Jika ditemukan jalur yang lebih murah ke node yang sama, nilai tersebut diperbarui.

Dijkstra tidak sekadar menghitung jumlah langkah, tetapi menghitung total biaya.

---

# Slide 31 — Priority Queue pada Dijkstra

Dijkstra menggunakan:

```text
Priority Queue
```

Node dengan cost terkecil diproses lebih dulu.

Contoh isi queue:

```text
Node B cost 2
Node C cost 5
Node D cost 3
```

Urutan keluar:

```text
B → D → C
```

Karena B memiliki cost paling kecil.

---

# Slide 32 — Pseudocode Dijkstra

```text
Dijkstra(start, goal):
    frontier = priority queue
    cameFrom = empty map
    costSoFar = empty map

    frontier.put(start, priority = 0)
    cameFrom[start] = null
    costSoFar[start] = 0

    while frontier is not empty:
        current = frontier.getLowestPriority()

        if current == goal:
            break

        for each neighbor of current:
            newCost = costSoFar[current] + cost(current, neighbor)

            if neighbor not in costSoFar
               or newCost < costSoFar[neighbor]:

                costSoFar[neighbor] = newCost
                priority = newCost
                frontier.put(neighbor, priority)
                cameFrom[neighbor] = current
```

---

# Slide 33 — Kelebihan dan Kekurangan Dijkstra

## Kelebihan

- dapat menangani weighted graph,
- menghasilkan jalur dengan cost minimum,
- cocok jika setiap terrain memiliki cost berbeda,
- tidak membutuhkan heuristic.

## Kekurangan

- dapat menjelajah banyak node,
- tidak mengetahui arah goal,
- lebih lambat dibanding A* pada banyak kasus game.

Dijkstra cocok jika:
- semua target penting,
- tidak ada heuristic yang baik,
- mencari jarak termurah ke banyak node.

---

# Slide 34 — A*

**A-star** atau **A\*** adalah algoritma pathfinding yang sangat populer dalam game.

A* menggabungkan:

```text
Dijkstra
+
Heuristic
```

Dijkstra memperhatikan cost dari start.

Heuristic memperkirakan jarak ke goal.

A* memilih node berdasarkan:

```text
f(n) = g(n) + h(n)
```

---

# Slide 35 — Komponen A*

Dalam A*:

```text
g(n) = cost dari start ke node n
h(n) = estimasi cost dari node n ke goal
f(n) = total estimasi cost
```

Contoh:

```text
g(n) = 5
h(n) = 3
f(n) = 8
```

A* memilih node dengan nilai `f(n)` terkecil.

---

# Slide 36 — Mengapa A* Efisien?

Dijkstra mencari jalur murah tanpa tahu arah goal.

BFS menjelajah melebar.

A* menggunakan heuristic untuk mengarahkan pencarian.

Ilustrasi:

```text
Start ●
       \
        \
         \     Goal ●
          \
```

A* cenderung menjelajah node yang:
- murah dari start,
- tampak dekat ke goal.

---

# Slide 37 — Heuristic

**Heuristic** adalah fungsi estimasi jarak dari node saat ini ke goal.

Contoh heuristic:
- Manhattan Distance,
- Euclidean Distance,
- Diagonal Distance.

Heuristic tidak selalu harus sempurna.

Namun heuristic yang baik membuat A* lebih efisien.

Dalam game, heuristic membantu NPC mencari jalur dengan lebih cepat.

---

# Slide 38 — Manhattan Distance

Manhattan Distance cocok untuk grid 4 arah.

Rumus:

```text
h = |x1 - x2| + |y1 - y2|
```

Contoh:

```text
Node A = (2, 3)
Goal   = (7, 5)

h = |2 - 7| + |3 - 5|
h = 5 + 2
h = 7
```

Cocok jika movement hanya:
- atas,
- bawah,
- kiri,
- kanan.

---

# Slide 39 — Euclidean Distance

Euclidean Distance adalah jarak garis lurus.

Rumus:

```text
h = sqrt((x1 - x2)^2 + (y1 - y2)^2)
```

Dalam Unity 3D:

```csharp
float h =
    Vector3.Distance(nodePosition, goalPosition);
```

Cocok untuk:
- movement bebas,
- waypoint graph,
- game 3D,
- area yang tidak terbatas grid 4 arah.

---

# Slide 40 — Diagonal Distance

Diagonal Distance cocok untuk grid 8 arah.

Jika agent dapat bergerak diagonal, Manhattan Distance dapat terlalu besar.

Konsep:

```text
dx = |x1 - x2|
dy = |y1 - y2|

h = max(dx, dy)
```

atau versi cost diagonal:

```text
h = D * (dx + dy) + (D2 - 2D) * min(dx, dy)
```

Dengan:
- `D` = cost lurus,
- `D2` = cost diagonal.

---

# Slide 41 — Heuristic yang Baik

Heuristic yang baik sebaiknya:
- cepat dihitung,
- mendekati jarak sebenarnya,
- tidak terlalu melebih-lebihkan jika ingin optimal,
- sesuai jenis movement.

Contoh pemilihan:

| Movement | Heuristic |
|---|---|
| Grid 4 arah | Manhattan |
| Grid 8 arah | Diagonal |
| Waypoint / 3D | Euclidean |

Jika heuristic buruk, A* dapat menjadi lambat atau menghasilkan jalur yang kurang optimal.

---

# Slide 42 — Pseudocode A*

```text
AStar(start, goal):
    frontier = priority queue
    cameFrom = empty map
    costSoFar = empty map

    frontier.put(start, priority = 0)
    cameFrom[start] = null
    costSoFar[start] = 0

    while frontier is not empty:
        current = frontier.getLowestPriority()

        if current == goal:
            break

        for each neighbor of current:
            newCost = costSoFar[current] + cost(current, neighbor)

            if neighbor not in costSoFar
               or newCost < costSoFar[neighbor]:

                costSoFar[neighbor] = newCost
                priority = newCost + heuristic(neighbor, goal)
                frontier.put(neighbor, priority)
                cameFrom[neighbor] = current
```

Perbedaan utama dari Dijkstra:

```text
priority = newCost + heuristic
```

---

# Slide 43 — Reconstruct Path

Setelah goal ditemukan, path harus dibangun kembali.

Data `cameFrom` menyimpan parent tiap node.

Contoh:

```text
cameFrom[D] = C
cameFrom[C] = B
cameFrom[B] = A
cameFrom[A] = null
```

Reconstruct:

```text
D → C → B → A
```

Kemudian dibalik:

```text
A → B → C → D
```

Path inilah yang akan diikuti oleh NPC.

---

# Slide 44 — Open Set dan Closed Set

Dalam A* sering terdapat istilah:

## Open Set

Node yang akan diperiksa.

```text
frontier / priority queue
```

## Closed Set

Node yang sudah diproses.

```text
visited / explored
```

Konsep:

```text
Open Set  = kandidat
Closed Set = sudah selesai diperiksa
```

Dengan struktur ini, algoritma tidak terus-menerus memeriksa node yang sama.

---

# Slide 45 — Perbandingan BFS, Dijkstra, dan A*

| Algoritma | Cost Berbeda | Heuristic | Cocok Untuk |
|---|---|---|---|
| BFS | Tidak | Tidak | Grid sederhana cost sama |
| Dijkstra | Ya | Tidak | Weighted graph |
| A* | Ya | Ya | Pathfinding game yang efisien |

Ringkasan:

```text
BFS      = sederhana
Dijkstra = memperhatikan cost
A*       = cost + arah tujuan
```

---

# Slide 46 — Ilustrasi Cara Berpikir Algoritma

## BFS

```text
Cari melebar ke semua arah.
```

## Dijkstra

```text
Cari berdasarkan biaya termurah dari start.
```

## A*

```text
Cari berdasarkan biaya dari start
+
perkiraan jarak ke goal.
```

A* biasanya paling cocok untuk game karena lebih fokus menuju tujuan.

---

# Slide 47 — Kapan Menggunakan BFS?

Gunakan BFS jika:
- map tidak berbobot,
- semua langkah memiliki cost sama,
- ukuran map kecil,
- ingin implementasi paling sederhana.

Contoh:
- puzzle grid sederhana,
- mencari area terdekat,
- game berbasis tile dengan cost seragam.

BFS baik untuk belajar konsep dasar traversal graph.

---

# Slide 48 — Kapan Menggunakan Dijkstra?

Gunakan Dijkstra jika:
- terrain memiliki cost berbeda,
- tidak ada goal tunggal,
- ingin menghitung jarak ke banyak titik,
- heuristic sulit dibuat.

Contoh:
- strategy game dengan terrain cost,
- mencari semua posisi yang bisa dicapai,
- menghitung area movement pada turn-based game.

---

# Slide 49 — Kapan Menggunakan A*?

Gunakan A* jika:
- ada start dan goal yang jelas,
- map cukup besar,
- ingin jalur efisien,
- heuristic dapat dihitung.

Contoh:
- enemy mengejar player,
- NPC menuju lokasi tertentu,
- unit RTS menuju target,
- robot game mencari jalur.

A* adalah pilihan umum untuk pathfinding manual dalam game.

---

# Slide 50 — Path Following

Pathfinding menghasilkan:

```text
A → B → C → D
```

NPC masih perlu mengikuti path tersebut.

Proses path following:

```text
currentWaypoint = A
bergerak ke A
jika sudah dekat:
    currentWaypoint = B
bergerak ke B
...
```

Dalam Unity, ini dapat menggunakan:
- `Vector3.MoveTowards`,
- steering `Arrive`,
- Rigidbody movement,
- NavMeshAgent.

---

# Slide 51 — Waypoint Following

Contoh sederhana:

```text
NPC ● → W1 → W2 → W3 → Goal ●
```

Logika:

```text
Jika jarak NPC ke waypoint saat ini < threshold
    lanjut ke waypoint berikutnya
```

Parameter penting:
- waypoint radius,
- movement speed,
- turn speed,
- stopping distance.

Waypoint following sering digabung dengan Arrive agar gerakan lebih halus.

---

# Slide 52 — Path Smoothing

Path hasil grid sering terlihat patah-patah.

Contoh:

```text
S → → ↓ ↓ → → G
```

Gerakan dapat terlihat kaku.

Path smoothing mencoba membuat path lebih natural:

```text
S ─────╲
        ╲──── G
```

Cara sederhana:
- hilangkan waypoint yang tidak perlu,
- cek line of sight antar waypoint,
- gunakan steering untuk memperhalus belokan.

---

# Slide 53 — Dynamic Obstacles

Pathfinding sering menghitung jalur berdasarkan kondisi saat path dibuat.

Namun dalam game, obstacle dapat berubah.

Contoh:
- player menutup jalan,
- pintu tertutup,
- enemy lain menghalangi,
- objek fisika berpindah.

Solusi:
- recalculating path,
- local avoidance,
- dynamic NavMesh obstacle,
- steering avoidance,
- path replanning.

---

# Slide 54 — Navigation Mesh

**Navigation Mesh** atau **NavMesh** adalah representasi area yang dapat dilalui agent.

NavMesh biasanya terdiri dari polygon.

Contoh:

```text
Area walkable:
┌─────────────┐
│             │
│   ███       │
│             │
└─────────────┘
```

Obstacle tidak termasuk area walkable.

NPC berjalan di atas permukaan yang sudah ditandai sebagai navigable.

---

# Slide 55 — Mengapa Menggunakan NavMesh?

NavMesh cocok untuk game 3D karena:
- mengikuti bentuk permukaan level,
- lebih efisien daripada grid yang sangat detail,
- dapat menangani lantai, koridor, ruangan,
- mudah digunakan di Unity,
- mendukung agent radius dan obstacle avoidance.

Dalam Unity, NavMesh memudahkan developer karena banyak proses navigation sudah tersedia.

---

# Slide 56 — NavMesh vs Grid

| Aspek | Grid | NavMesh |
|---|---|---|
| Representasi | Kotak-kotak | Polygon area walkable |
| Cocok untuk | Tile-based game | 3D world |
| Detail | Bergantung ukuran cell | Mengikuti permukaan |
| Path | Node per cell | Polygon/area |
| Unity support | Manual | Built-in melalui AI Navigation |

Grid lebih cocok untuk pembelajaran algoritma.  
NavMesh lebih cocok untuk implementasi 3D praktis di Unity.

---

# Slide 57 — Komponen Unity NavMesh

Komponen yang umum digunakan:

```text
NavMeshSurface
NavMeshAgent
NavMeshObstacle
NavMeshLink
NavMeshModifier
```

## NavMeshSurface

Membangun area navigasi dari geometry scene.

## NavMeshAgent

Komponen pada NPC untuk bergerak di atas NavMesh.

## NavMeshObstacle

Obstacle dinamis yang dapat memengaruhi navigation.

## NavMeshLink

Menghubungkan area yang tidak tersambung langsung, misalnya lompat atau turun tangga.

## NavMesh Modifier 

Komponen tambahan pada objek tertentu untuk mengubah cara baking area, misalnya menandai area tertentu agar tidak bisa dilewati atau memberi biaya bobot berbeda.

---

# Slide 58 — NavMeshAgent

`NavMeshAgent` adalah komponen Unity untuk membuat agent berjalan di NavMesh.

Parameter penting:

```text
Speed
Angular Speed
Acceleration
Stopping Distance
Radius
Height
Obstacle Avoidance
Auto Braking
```

Contoh script:

```csharp
using UnityEngine;
using UnityEngine.AI;

public class AgentMoveToTarget : MonoBehaviour
{
    public Transform target;
    private NavMeshAgent agent;

    void Awake()
    {
        agent = GetComponent<NavMeshAgent>();
    }

    void Update()
    {
        if (target != null)
        {
            agent.SetDestination(target.position);
        }
    }
}
```

---

# Slide 59 — NavMeshSurface

`NavMeshSurface` digunakan untuk membangun NavMesh.

Langkah umum:
1. Tambahkan package AI Navigation jika diperlukan.
2. Tambahkan komponen `NavMeshSurface`.
3. Tentukan layer objek yang menjadi area jalan.
4. Klik `Bake` untuk membangun NavMesh.

Hasilnya:
- area walkable divisualisasikan,
- agent dapat menggunakan area tersebut untuk navigation.

Catatan:
- collider/mesh level harus benar,
- layer harus diatur dengan rapi,
- area obstacle perlu diperhatikan.

---

# Slide 60 — NavMeshObstacle

`NavMeshObstacle` digunakan untuk obstacle yang dapat menghalangi agent.

Contoh:
- pintu,
- box besar,
- kendaraan,
- objek bergerak.

Fitur penting:

```text
Carve
```

Jika `Carve` aktif, obstacle dapat membuat lubang pada NavMesh secara dinamis.

Namun carving terlalu banyak dapat berdampak pada performa.

---

# Slide 61 — NavMeshLink

`NavMeshLink` digunakan untuk menghubungkan dua area NavMesh yang terpisah.

Contoh:
- melompat,
- turun dari platform,
- melewati jembatan,
- memanjat,
- masuk pintu khusus.

Ilustrasi:

```text
Platform A        Platform B
─────────         ─────────
    ●  =========>    ●
       OffMeshLink
```

Tanpa NavMeshLink, agent mungkin menganggap area tersebut tidak terhubung.

---

# Slide 62 — Agent Radius dan Clearance

Setiap agent memiliki ukuran.

Parameter:

```text
Radius
Height
Step Height
Max Slope
```

Contoh masalah:
- agent terlalu besar tidak bisa melewati pintu,
- agent terlalu kecil bisa melewati celah yang tidak realistis,
- slope terlalu curam tidak dianggap walkable.

NavMesh memperhitungkan ukuran agent saat menentukan area yang dapat dilalui.

---

# Slide 63 — Area Cost pada NavMesh

Unity NavMesh dapat menggunakan area dengan cost berbeda.

Contoh area:

```text
Walkable
Mud
Water
Danger
Road
```

Cost:
- jalan biasa cost rendah,
- lumpur cost lebih tinggi,
- area bahaya cost sangat tinggi.

Agent akan cenderung memilih path dengan total cost lebih rendah.

Ini mirip konsep weighted graph pada Dijkstra/A*.

---

# Slide 64 — Hubungan NavMesh dengan A*

Walaupun Unity menyembunyikan detail implementasi internalnya, konsepnya tetap mirip:

```text
Area navigasi direpresentasikan sebagai graph
        ↓
Algoritma mencari path
        ↓
Agent mengikuti path
```

Pada pembelajaran, mahasiswa sebaiknya memahami A* manual agar tidak hanya menjadi pengguna tool.

Dengan memahami A*, mahasiswa dapat:
- memahami mengapa path tertentu dipilih,
- menganalisis kegagalan navigation,
- melakukan debugging,
- membuat custom pathfinding jika diperlukan.

---

# Slide 65 — Unity: Manual A* vs NavMesh

| Aspek | Manual A* | Unity NavMesh |
|---|---|---|
| Tujuan belajar | Memahami algoritma | Implementasi praktis |
| Representasi | Grid/graph manual | Mesh navigasi |
| Kontrol | Sangat tinggi | Lebih otomatis |
| Kesulitan | Lebih teknis | Lebih mudah digunakan |
| Cocok untuk | Praktikum algoritmik | Game 3D langsung |
| Debug | Harus dibuat sendiri | Sudah ada visual NavMesh |

Keduanya penting:
- A* untuk memahami dasar,
- NavMesh untuk produksi game Unity.

---

# Slide 66 — Contoh Skenario Game

## Skenario

NPC guard harus mengejar player di area dengan obstacle.

```text
NPC ●       ██████
            █    █
            █    █
Player ●    ██████
```

Tanpa pathfinding:
- NPC bergerak lurus,
- menabrak tembok.

Dengan pathfinding:
- NPC mencari rute memutar,
- mengikuti jalur,
- sampai ke player.

---

# Slide 67 — Alur Chase dengan Pathfinding

```text
Player terdeteksi
        ↓
State = Chase
        ↓
Hitung path ke player
        ↓
Path = W1 → W2 → W3
        ↓
NPC mengikuti waypoint
        ↓
Jika player berpindah jauh
        ↓
Hitung ulang path
```

Dalam Unity NavMesh:

```csharp
agent.SetDestination(player.position);
```

Tetapi secara konsep, proses di dalamnya tetap berkaitan dengan pathfinding dan navigation.

---

# Slide 68 — Repathing

**Repathing** adalah proses menghitung ulang path.

Dibutuhkan ketika:
- target bergerak,
- obstacle berubah,
- agent keluar dari path,
- path lama tidak valid,
- kondisi terrain berubah.

Namun repathing terlalu sering bisa mahal.

Contoh strategi:

```text
Hitung ulang path setiap 0.5 detik
atau jika target berpindah cukup jauh
```

---

# Slide 69 — Debugging Pathfinding

Hal yang perlu divisualisasikan:

```text
Start node
Goal node
Open set
Closed set
Final path
Cost value
Heuristic value
Waypoint
Agent destination
```

Dalam Unity dapat menggunakan:

```csharp
Debug.DrawLine()
Gizmos.DrawSphere()
Gizmos.DrawWireCube()
```

Debug visual sangat membantu mahasiswa memahami algoritma pathfinding.

---

# Slide 70 — Kesalahan Umum Pathfinding

1. Node obstacle tetap dianggap walkable.
2. Neighbor diagonal menembus sudut obstacle.
3. Cost tidak diperbarui dengan benar.
4. `cameFrom` tidak disimpan.
5. Path tidak dibalik setelah reconstruct.
6. Heuristic tidak sesuai jenis movement.
7. Agent tidak berpindah ke waypoint berikutnya.
8. NavMesh belum di-bake.
9. Layer untuk NavMeshSurface salah.
10. NavMeshAgent tidak berada di atas NavMesh.

---

# Slide 71 — Diagonal Corner Cutting

Jika diagonal diizinkan, perlu hati-hati.

Contoh:

```text
A # 
# B
```

Agent tidak seharusnya bisa bergerak dari A ke B secara diagonal karena sudut tertutup obstacle.

Masalah ini disebut:

```text
corner cutting
```

Solusi:
- larang diagonal jika dua sisi penghalang tertutup,
- gunakan collision check,
- gunakan grid neighbor rule yang benar.

---

# Slide 72 — Pathfinding untuk Game Berbeda

## Game Tile-Based

Cocok menggunakan:
- grid,
- BFS,
- Dijkstra,
- A*.

## Game 3D Third-Person

Cocok menggunakan:
- NavMesh,
- NavMeshAgent,
- local avoidance.

## RTS

Cocok menggunakan:
- flow field,
- hierarchical pathfinding,
- group movement.

## Puzzle Game

Cocok menggunakan:
- BFS,
- graph search.

---

# Slide 73 — Kompleksitas dan Performa

Pathfinding bisa mahal jika:
- map sangat besar,
- agent sangat banyak,
- path dihitung setiap frame,
- grid terlalu detail,
- dynamic obstacle terlalu sering berubah.

Strategi optimasi:
- jangan hitung path setiap frame,
- gunakan grid resolution yang wajar,
- cache path jika memungkinkan,
- batasi area pencarian,
- gunakan hierarchical pathfinding,
- gunakan NavMesh untuk world 3D.

---

# Slide 74 — Integrasi dengan Praktikum 2 dan 3

Praktikum 2:

```text
NPC dapat melihat dan memutuskan Chase.
```

Praktikum 3:

```text
NPC dapat bergerak dengan steering.
```

Praktikum 4:

```text
NPC dapat mencari jalur menuju target.
```

Gabungan:

```text
See Player
    ↓
Decide Chase
    ↓
Find Path
    ↓
Follow Path
    ↓
Avoid Local Obstacles
```

---

# Slide 75 — Gambaran Praktikum 4

Praktikum 4 akan terdiri dari dua bagian utama:

## Bagian 1 — A* Sederhana

Mahasiswa mengimplementasikan A* pada grid sederhana.

Target:
- membuat grid,
- menentukan walkable dan obstacle,
- menentukan start dan goal,
- menghitung path,
- menampilkan path.

## Bagian 2 — Unity NavMesh

Mahasiswa menggunakan NavMesh untuk membuat NPC bergerak menuju target di scene 3D.

Target:
- bake NavMesh,
- memasang NavMeshAgent,
- menggunakan `SetDestination`,
- mengatur obstacle,
- mengamati parameter agent.

Detail langkah teknis akan dibuat pada modul praktikum terpisah.

---

# Slide 76 — Gambaran Scene Praktikum A*

Contoh scene:

```text
S . . . .
. # # . .
. . . . .
. # . # .
. . . . G
```

Komponen:
- grid manager,
- node class,
- A* pathfinder,
- obstacle marker,
- path visualizer,
- agent follower.

Output:
- jalur dari start ke goal terlihat jelas,
- mahasiswa dapat membandingkan path dengan obstacle.

---

# Slide 77 — Gambaran Scene Praktikum NavMesh

Contoh scene Unity:

```text
┌──────────────────────────────┐
│ NPC ●       Wall             │
│             █████            │
│                              │
│                    Player ●  │
└──────────────────────────────┘
```

Komponen:
- Ground,
- obstacle,
- NPC dengan `NavMeshAgent`,
- target/player,
- `NavMeshSurface`.

Output:
- NPC dapat mencari jalan menuju target,
- NPC tidak menabrak obstacle besar,
- path berubah ketika target berpindah.

---

# Slide 78 — Istilah Unity yang Harus Dipahami

Mahasiswa perlu memahami:

```text
NavMesh
NavMeshSurface
NavMeshAgent
NavMeshObstacle
OffMeshLink
Agent Radius
Agent Height
Speed
Acceleration
Angular Speed
Stopping Distance
Area Cost
Layer
Bake
SetDestination()
```

Istilah ini akan sering digunakan dalam modul praktikum dan proyek Game AI.

---

# Slide 79 — Ringkasan Materi

Hari ini kita mempelajari:

```text
Pathfinding & Navigation
│
├── Graph
│   ├── Node
│   ├── Edge
│   └── Cost
│
├── Waypoint
│   ├── Patrol
│   └── Network
│
├── Search Algorithm
│   ├── BFS
│   ├── Dijkstra
│   └── A*
│
├── Heuristic
│   ├── Manhattan
│   ├── Euclidean
│   └── Diagonal
│
└── Unity Navigation
    ├── NavMesh
    ├── NavMeshAgent
    ├── NavMeshSurface
    ├── NavMeshObstacle
    └── OffMeshLink
```

---

# Slide 80 — Pertanyaan Diskusi

1. Mengapa Seek tidak cukup untuk mengejar target di area labirin?
2. Apa perbedaan pathfinding dan steering?
3. Apa perbedaan node dan edge?
4. Kapan BFS cocok digunakan?
5. Mengapa Dijkstra dapat menangani terrain cost?
6. Mengapa A* biasanya lebih efisien untuk game?
7. Apa fungsi heuristic?
8. Kapan Manhattan Distance lebih cocok daripada Euclidean Distance?
9. Apa kelebihan NavMesh dibanding grid pada game 3D?
10. Mengapa NavMeshAgent masih perlu parameter seperti speed dan stopping distance?

---

# Slide 81 — Latihan Konsep Singkat

Diberikan graph:

```text
A --1-- B --2-- D
|       |
4       1
|       |
C --1-- E --1-- F
```

Pertanyaan:
1. Jalur mana yang mungkin dipilih dari A ke F?
2. Apa jalur dengan cost terkecil?
3. Algoritma apa yang cocok jika semua cost dianggap sama?
4. Algoritma apa yang cocok jika cost diperhitungkan?
5. Bagaimana heuristic dapat membantu jika posisi node diketahui?

---

# Slide 82 — Penutup

## Pertemuan Berikutnya

Materi berikutnya akan melanjutkan AI agent ke bagian decision making yang lebih eksplisit.

Topik lanjutan:
- Finite State Machine,
- state,
- transition,
- condition,
- perilaku NPC,
- integrasi perception, pathfinding, dan movement.

Praktikum 4 akan dibuat dalam modul terpisah dengan fokus pada:

```text
A* sederhana
+
Unity NavMesh
```

---

# Catatan Pembelajaran

Urutan pembelajaran yang disarankan:

```text
1. Review steering dari Pertemuan 3
2. Tunjukkan masalah Seek pada obstacle besar
3. Perkenalkan graph dan waypoint
4. Jelaskan BFS sebagai dasar traversal
5. Jelaskan Dijkstra sebagai shortest path berbobot
6. Jelaskan A* sebagai Dijkstra + heuristic
7. Bahas heuristic secara intuitif
8. Perlihatkan perbandingan BFS, Dijkstra, A*
9. Masuk ke konsep Navigation Mesh
10. Tunjukkan hubungan teori A* dengan Unity NavMesh
11. Tutup dengan gambaran praktikum A* dan NavMesh
```

Penekanan penting:

> Mahasiswa perlu memahami algoritma pathfinding manual terlebih dahulu agar penggunaan `NavMeshAgent` tidak hanya menjadi penggunaan komponen Unity secara mekanis.

