# Narasi Game Cerdas - Pertemuan 10

## PCG for Level & Dungeon Generation

Sumber: markdown/pert10.md

---

## Slide 001 - Cover

### Narasi

Selamat datang di **Game Cerdas — Pertemuan 10**. Pada pertemuan ini, kita masuk ke topik yang lebih aplikatif, yaitu **PCG for Level & Dungeon Generation**. Jika sebelumnya kita membahas dasar **PCG**, maka fokus hari ini adalah bagaimana teknik prosedural digunakan untuk menghasilkan **level** dan **dungeon** yang dapat dimainkan.

Kita akan melihat beberapa teknik dasar yang sering dipakai dalam **procedural level generation**, yaitu `grid-based generation`, `random walk`, `BSP`, `cellular automata`, dan `constraint-based generation`. Intuisi utamanya sederhana: sistem tidak membuat level secara manual, tetapi membangun struktur dari **aturan**, **ruang grid**, dan **batasan desain** agar hasilnya tetap masuk akal untuk pemain maupun lingkungan game.

Di akhir materi, kita juga akan melihat arah penerapan pada **Unity** melalui praktikum terpisah: **Procedural Dungeon / Level di Unity**. Tujuannya bukan hanya menghasilkan dungeon secara acak, tetapi memahami bagaimana hasil **PCG** dapat menjadi lingkungan yang mendukung **gameplay**, **spawn**, dan perilaku agen dalam game.

### Inti yang Harus Ditekankan

- **PCG for Level & Dungeon Generation** adalah penerapan **PCG** untuk membuat struktur level atau dungeon secara prosedural.
- Teknik utama yang akan dibahas: `grid-based generation`, `random walk`, `BSP`, `cellular automata`, dan `constraint-based generation`.
- Implementasi praktis akan dibahas terpisah dalam praktikum **Procedural Dungeon / Level di Unity**.

### Transisi ke Slide Berikutnya

Sebelum masuk ke teknik level dan dungeon, kita akan melakukan review singkat **Pertemuan 9** untuk memastikan dasar **PCG**, **randomness**, **seed**, **reproducibility**, dan konsep **generate-and-test** sudah dipahami.

---

## Slide 002 - Review Pertemuan 9

### Narasi

Slide ini berfungsi sebagai review singkat sebelum kita masuk ke teknik PCG yang lebih spesifik. Tujuannya adalah menyamakan pemahaman dasar, sehingga mahasiswa tidak hanya melihat PCG sebagai “membuat level acak”, tetapi sebagai proses desain yang terkontrol.

Pada pertemuan sebelumnya, kita membahas dasar PCG melalui beberapa konsep penting:

- **randomness** sebagai sumber variasi,
- `seed` untuk membuat hasil acak dapat diulang,
- **reproducibility** agar level yang sama dapat dihasilkan kembali,
- **constructive PCG** yang membangun konten secara langsung,
- **generate-and-test** yang menghasilkan kandidat lalu memvalidasinya,
- **PCG taxonomy** sebagai cara mengelompokkan pendekatan PCG,
- **procedural spawning** untuk menempatkan objek atau entitas secara prosedural,
- **random level sederhana** sebagai contoh awal.

Inti yang harus benar-benar dipahami adalah bahwa PCG tidak berhenti pada penggunaan angka acak. Dalam konteks game, PCG adalah kombinasi antara variasi, aturan, batasan, validasi, dan tujuan desain.

```text
PCG bukan sekadar random.
PCG = Randomness + Rule + Constraint + Validation + Design Goal
```

Artinya, level yang dihasilkan secara prosedural harus tetap sesuai aturan game, dapat dimainkan, dan mendukung pengalaman yang diinginkan. Pertemuan 10 akan memperdalam PCG pada dua fokus utama:

```text
Level Generation
Dungeon Generation
```

Kedua fokus ini penting karena level dan dungeon adalah lingkungan tempat pemain dan sistem game lainnya beroperasi. Dengan fondasi ini, mahasiswa akan lebih siap memahami bagaimana konten prosedural dibuat menjadi level yang terstruktur dan layak dimainkan.

### Inti yang Harus Ditekankan

- **PCG** bukan sekadar random, tetapi proses menghasilkan konten dengan aturan, batasan, validasi, dan tujuan desain.
- `seed` dan **reproducibility** penting agar hasil prosedural dapat diuji, dibandingkan, dan direproduksi.
- **Constraint** dan **validation** menentukan apakah hasil PCG layak dipakai sebagai level atau dungeon.
- Pertemuan 10 berfokus pada **level generation** dan **dungeon generation** sebagai penerapan PCG yang lebih terstruktur.

### Transisi ke Slide Berikutnya

Setelah fondasi PCG ini disegarkan, kita akan melihat posisi pertemuan 10 dalam alur materi Game Cerdas, yaitu bagaimana PCG bergerak dari konten acak sederhana menuju level yang lebih terstruktur, playable, dan dapat divalidasi.

---

## Slide 003 - Posisi Materi Pertemuan 10

### Narasi

Pada slide ini, kita akan memetakan posisi **Pertemuan 10** dalam alur materi **Game Cerdas**. Tujuannya agar mahasiswa tidak melihat materi ini sebagai topik terpisah, tetapi sebagai bagian dari rangkaian pembelajaran yang saling terhubung.

```text
Pertemuan 9   -> PCG Fundamentals
Pertemuan 10  -> PCG for Level & Dungeon Generation
Pertemuan 11  -> Dynamic Difficulty Adjustment
Pertemuan 12  -> Player Modeling & Adaptive Game Behavior
```

Dalam alur tersebut, **Pertemuan 9** sudah memperkenalkan dasar **PCG**, seperti `randomness`, `seed`, `rule`, `constraint`, dan `validation`. **Pertemuan 10** memperdalam dasar itu ke domain yang lebih konkret, yaitu pembuatan `level` dan `dungeon`.

Artinya, mahasiswa tidak lagi hanya membuat konten acak sederhana, tetapi mulai memikirkan bagaimana konten tersebut menjadi **ruang permainan** yang dapat dimainkan. Level yang dihasilkan harus memiliki struktur, jalur yang masuk akal, posisi objek yang konsisten, dan aturan validasi agar tidak menghasilkan ruang yang rusak atau tidak `playable`.

Posisi ini penting karena **level generation** menjadi dasar bagi banyak perilaku dalam game. Lingkungan yang dihasilkan akan memengaruhi navigasi player, penempatan enemy, jalur pencarian, dan pengalaman bermain. Namun pada slide ini, kita baru menetapkan konteksnya, belum masuk ke alasan teknis mengapa level generation penting.

### Inti yang Harus Ditekankan

- **Pertemuan 10** adalah lanjutan dari **PCG Fundamentals** pada Pertemuan 9.
- Fokusnya bukan sekadar random, tetapi menghasilkan `level` dan `dungeon` yang **terstruktur**, **playable**, dan **dapat divalidasi**.
- Materi ini menjadi jembatan menuju topik adaptif seperti **Dynamic Difficulty Adjustment** dan **Player Modeling**.

### Transisi ke Slide Berikutnya

Setelah posisi materi jelas, langkah berikutnya adalah memahami mengapa **level generation** penting dalam desain game dan bagaimana level memengaruhi pengalaman bermain.

---

## Slide 004 - Mengapa Level Generation Penting?

### Narasi

Pada slide ini, kita melihat **mengapa `level generation`** menjadi bagian penting dalam Game Cerdas. Level bukan sekadar latar belakang visual; level adalah **ruang permainan** yang menentukan bagaimana player bergerak, bagaimana NPC ditempatkan, dan bagaimana tantangan disusun.

Kualitas level memengaruhi banyak aspek gameplay:

- **navigasi player**, karena tata letak jalur menentukan kemudahan eksplorasi;
- **posisi enemy**, karena penempatan musuh memengaruhi keputusan taktis;
- **pacing permainan**, karena jarak antar ruang dan area transisi mengatur ritme;
- **tingkat kesulitan**, karena kompleksitas jalur dan penempatan ancaman membentuk tantangan;
- **eksplorasi**, karena cabang jalur atau ruang tersembunyi memberi rasa penemuan;
- **strategi**, karena player perlu membaca layout untuk memilih pendekatan;
- **replayability**, karena variasi level membuat permainan tetap menarik untuk dimainkan ulang.

Intuisi praktisnya sederhana: level yang terlalu datar bisa membuat gameplay membosankan, sedangkan level yang terlalu acak bisa membuat player bingung atau merasa tidak adil. Karena itu, `level generation` yang baik bukan hanya menghasilkan bentuk acak, tetapi menghasilkan **variasi yang tetap playable**.

Di sinilah **`procedural level generation`** menjadi berguna. Daripada membuat banyak level secara manual, sistem dapat menghasilkan variasi dari aturan, parameter, atau proses generatif. Dengan pendekatan ini, game dapat memiliki:

```text
banyak variasi level
tanpa membuat semuanya secara manual
```

Hal ini relevan untuk game yang membutuhkan konten berulang tetapi berbeda, misalnya:

- dungeon berbeda setiap run;
- cave berbeda setiap permainan;
- arena berbeda setiap wave;
- maze berbeda setiap level.

Poin penting yang harus dipahami mahasiswa: `level generation` bukan hanya soal estetika. Ia berkaitan dengan **desain gameplay**, **perilaku NPC**, **navigasi**, dan **keseimbangan tantangan**. Level yang dihasilkan secara prosedural tetap harus memenuhi syarat dasar: player bisa bergerak, enemy bisa ditempatkan secara masuk akal, jalur penting dapat dicapai, dan tantangan terasa seimbang.

Sebelum masuk ke teknik pembuatannya, kita perlu menyadari bahwa level adalah **lingkungan** tempat sistem cerdas dalam game bekerja. NPC yang mencari jalur, enemy yang memilih posisi, atau sistem yang mengatur ritme permainan semuanya bergantung pada struktur level. Jika level tidak dirancang dengan baik, perilaku yang bagus pun bisa terasa tidak efektif.

### Inti yang Harus Ditekankan

- Level adalah **ruang gameplay**, bukan hanya latar visual.
- Kualitas level memengaruhi navigasi, penempatan enemy, pacing, kesulitan, eksplorasi, strategi, dan replayability.
- **`procedural level generation`** memungkinkan banyak variasi level tanpa pembuatan manual penuh.
- Level yang dihasilkan harus tetap **playable**, masuk akal, dan mendukung perilaku NPC serta keputusan player.

### Transisi ke Slide Berikutnya

Setelah memahami mengapa `level generation` penting, kita akan masuk ke contoh yang lebih konkret: **dungeon** sebagai studi kasus PCG, karena strukturnya jelas dan mudah dianalisis.

---

## Slide 005 - Dungeon sebagai Studi Kasus PCG

### Narasi

**Dungeon** adalah salah satu bentuk level yang paling cocok untuk mempelajari **PCG** karena strukturnya relatif jelas dan mudah diurai. Tidak seperti level terbuka yang sangat luas, dungeon biasanya terdiri dari ruang-ruang terbatas yang saling terhubung. Karena itu, mahasiswa dapat lebih mudah memahami bagaimana sebuah level dihasilkan secara prosedural tanpa kehilangan kontrol atas **gameplay**.

Elemen utama dungeon dapat dilihat sebagai komponen level yang saling berhubungan:

- `room`: ruang tempat pemain berinteraksi, seperti ruang pertempuran, ruang harta, atau ruang boss.
- `corridor`: jalur penghubung antar-ruang yang menentukan alur pergerakan.
- `wall` dan `floor`: batas ruang serta area yang dapat dilalui.
- `start` dan `goal`: titik awal dan tujuan utama yang memberi arah progresi.
- `enemy`, `item`, dan `trap`: konten gameplay yang memengaruhi risiko, reward, dan keputusan pemain.
- `boss room` dan `locked door`: elemen progresi yang dapat mengatur urutan eksplorasi.

Dengan elemen ini, dungeon tidak hanya menjadi kumpulan bentuk geometris, tetapi menjadi struktur yang mendukung **navigasi**, **pacing**, dan **decision making** pemain. Misalnya, `enemy` dapat ditempatkan di `room` tertentu untuk menciptakan tantangan, `item` dapat memberi insentif eksplorasi, dan `locked door` dapat membatasi jalur sampai kondisi tertentu terpenuhi.

Contoh struktur sederhana dapat ditulis sebagai berikut:

```text
Start Room → Corridor → Enemy Room → Treasure Room → Boss Room
```

Alur ini dapat dibaca sebagai urutan progresi level:

1. Pemain mulai dari `Start Room`.
2. `Corridor` menghubungkan ruang berikutnya.
3. `Enemy Room` memberi tantangan pertempuran.
4. `Treasure Room` memberi reward atau insentif.
5. `Boss Room` menjadi klimaks atau tujuan akhir.

Dalam konteks perilaku NPC dan navigasi agen, struktur seperti ini juga membantu memahami bagaimana karakter bergerak antar-ruang. Setiap `room` dan `corridor` dapat menjadi bagian dari ruang navigasi, sehingga posisi `enemy`, `item`, dan `trap` tidak hanya memengaruhi pemain, tetapi juga perilaku agen dalam game.

Poin penting yang perlu dipahami adalah bahwa dungeon generation yang baik tidak hanya menghasilkan bentuk acak. Level harus tetap **terhubung**, **bisa dimainkan**, dan memiliki **tujuan yang jelas**. Artinya, `start` harus dapat mencapai `goal`, konten gameplay harus berada di lokasi yang masuk akal, dan `locked door` tidak boleh menghalangi progresi secara tidak wajar.

Dari sini, dungeon menjadi studi kasus yang kuat karena sederhana secara bentuk tetapi kaya secara desain. Mahasiswa dapat belajar bagaimana elemen level direpresentasikan, bagaimana variasi dihasilkan, dan bagaimana aturan sederhana menjaga kualitas **gameplay**.

### Inti yang Harus Ditekankan

- **Dungeon** cocok untuk PCG karena strukturnya jelas: `room`, `corridor`, `wall`, `floor`, `start`, `goal`, dan konten gameplay.
- Elemen dungeon bukan hanya visual, tetapi menjadi dasar **navigasi**, **pacing**, dan **decision making** dalam game.
- Struktur seperti `Start Room → Corridor → Enemy Room → Treasure Room → Boss Room` membantu memahami alur level dan progresi pemain.
- Dungeon generation yang baik harus menghasilkan level yang **terhubung**, **bisa dimainkan**, dan memiliki tujuan yang jelas.

### Transisi ke Slide Berikutnya

Setelah memahami mengapa dungeon menjadi studi kasus yang baik, kita lanjut ke capaian pembelajaran pertemuan ini, yaitu kemampuan menjelaskan dan merancang dasar-dasar level generation secara lebih terstruktur.

---

## Slide 006 - Capaian Pembelajaran Pertemuan

### Narasi

Pada slide ini, kita menata capaian pembelajaran pertemuan. Tujuannya bukan sekadar menghafal istilah, tetapi memastikan mahasiswa memiliki peta kompetensi yang utuh: dari cara merepresentasikan level, memilih metode generation, memvalidasi hasil, hingga merancang dungeon sederhana di `Unity`.

Secara garis besar, capaian ini dapat dikelompokkan menjadi beberapa kemampuan utama:

- **Representasi level**: mahasiswa memahami bahwa level dapat dimodelkan sebagai `grid`, sehingga setiap sel dapat merepresentasikan dinding, lantai, room, corridor, start, goal, atau spawn.
- **Metode generation**: mahasiswa mampu menjelaskan pendekatan seperti `random walk`, **BSP**, **cellular automata**, dan **constraint-based generation** sebagai cara membentuk ruang, room, atau area yang layak dimainkan.
- **Validasi dan implementasi**: mahasiswa memahami bahwa hasil generation tidak cukup hanya terlihat acak, tetapi harus diperiksa menggunakan aturan dan `pathfinding`, lalu dapat dirancang menjadi procedural dungeon sederhana di `Unity`.
- **Parameter generation**: mahasiswa mampu mengidentifikasi parameter penting seperti ukuran level, jumlah room, `seed`, dan constraint yang memengaruhi hasil akhir.

Dengan capaian ini, mahasiswa diharapkan tidak hanya tahu bahwa dungeon dapat dibuat otomatis, tetapi juga memahami mengapa setiap metode dipilih, bagaimana hasilnya divalidasi, dan apa yang harus diperhatikan saat mengimplementasikannya.

### Inti yang Harus Ditekankan

- Capaian ini adalah **peta kompetensi**, bukan daftar topik yang berdiri sendiri.
- Mahasiswa harus menghubungkan representasi `grid`, metode generation, validasi, dan implementasi di `Unity`.
- Validasi penting karena level prosedural harus tetap **playable**, misalnya start dan goal terhubung.
- Parameter seperti `seed`, ukuran level, jumlah room, dan constraint menentukan konsistensi serta variasi hasil generation.

### Transisi ke Slide Berikutnya

Setelah capaian pembelajaran ditegaskan, kita mulai dari dasar: apa yang dimaksud dengan level generation dan bagaimana prosesnya menghasilkan layout level.

---

## Slide 007 - Apa Itu Level Generation?

### Narasi

Slide ini menjawab pertanyaan dasar: apa yang dimaksud dengan **level generation**? Dalam konteks Game Cerdas, **level generation** adalah proses menghasilkan **layout level** secara otomatis. Artinya, sistem tidak hanya menampilkan gambar level, tetapi membangun struktur level berdasarkan aturan dan parameter yang diberikan.

Intuisi praktisnya, **level generation** mengubah data sederhana menjadi dunia yang bisa dimainkan. Jika level dibuat manual, desainer menentukan setiap ruang, dinding, dan jalur secara langsung. Jika level dibuat secara prosedural, sistem menentukan hasil berdasarkan **input** yang diberikan.

**Input** yang umum digunakan antara lain:

- **ukuran level**, misalnya `width` dan `height`,
- `seed` untuk menghasilkan acak yang konsisten,
- `parameter` seperti `roomCount`,
- **aturan** yang membatasi bentuk level,
- `prefab` yang akan ditempatkan di dalam level,
- `constraint` yang memastikan hasil tetap valid.

**Output** dari proses ini juga bukan hanya visual, tetapi struktur level yang dapat digunakan oleh game. Output yang dihasilkan dapat berupa:

- **layout level**,
- posisi `start` dan `goal`,
- `obstacle`,
- `room`,
- `corridor`,
- `enemy spawn`,
- `item spawn`.

Contoh sederhana dapat dilihat pada potongan berikut:

```text
Input:
width = 30
height = 30
roomCount = 8
seed = 12345

Output:
dungeon dengan 8 room dan corridor penghubung
```

Pada contoh ini, `width = 30` dan `height = 30` menentukan batas area level. `roomCount = 8` menjadi target jumlah ruang yang ingin dihasilkan. Sementara itu, `seed = 12345` membuat hasil acak tetap konsisten. Dengan `seed` yang sama, sistem dapat menghasilkan dungeon yang sama, sehingga level mudah diuji, direproduksi, dan dibandingkan.

Hal penting yang harus dipahami adalah **level generation** bukan sekadar membuat bentuk acak. Level yang dihasilkan harus masuk akal dan dapat dimainkan. Misalnya, `start` dan `goal` harus dapat dihubungkan, `room` dan `corridor` harus terhubung, serta posisi `enemy spawn` dan `item spawn` harus sesuai dengan struktur level.

### Inti yang Harus Ditekankan

- **Level generation** adalah proses otomatis menghasilkan **layout level** dari seperangkat **input**.
- `seed` membuat hasil acak dapat direproduksi, sehingga level dapat diuji secara konsisten.
- **Output** berupa struktur level, bukan hanya gambar, seperti `room`, `corridor`, `start`, `goal`, `obstacle`, `enemy spawn`, dan `item spawn`.
- Level yang dihasilkan harus valid dan dapat dimainkan, bukan sekadar bentuk acak.

### Transisi ke Slide Berikutnya

Setelah memahami apa yang dihasilkan oleh **level generation**, langkah berikutnya adalah menentukan bagaimana level tersebut direpresentasikan dalam data. Pada slide berikutnya, kita akan membahas representasi level, terutama `Grid 2D` sebagai dasar yang paling mudah untuk praktikum awal.

---

## Slide 008 - Level Representation

### Narasi

Sebelum level digambar atau dibangun di Unity, level harus terlebih dahulu direpresentasikan sebagai data. Representasi ini penting karena algoritma tidak bekerja langsung pada objek visual, tetapi pada struktur data yang dapat dibaca, dihitung, divalidasi, dan diubah.

Representasi level dapat dipilih sesuai kebutuhan game. Beberapa bentuk umum adalah:

- **grid**, yaitu level dibagi menjadi sel-sel berukuran sama;
- **graph**, yaitu level direpresentasikan sebagai node dan edge;
- **tilemap**, yaitu kumpulan tile yang disusun untuk membentuk permukaan level;
- **room list**, yaitu daftar ruang beserta posisinya;
- **navmesh area**, yaitu area navigasi untuk pergerakan agen;
- **prefab chunk**, yaitu potongan level yang dapat dipasang ulang.

Untuk praktikum awal, representasi yang paling mudah adalah:

```text
Grid 2D
```

Grid 2D dipilih karena strukturnya sederhana, mudah divisualisasikan, dan mudah dihubungkan dengan logika pathfinding, penempatan spawn, serta validasi layout. Setiap posisi pada grid dapat diberi koordinat, sehingga algoritma dapat memeriksa apakah suatu sel dapat dilalui, terhalang, atau menjadi tujuan.

Setiap cell pada grid tidak hanya menyimpan warna atau gambar, tetapi juga informasi makna lingkungan. Contoh informasi yang dapat disimpan adalah:

```text
Wall
Floor
Start
Goal
EnemySpawn
ItemSpawn
```

`Wall` menandai area yang tidak dapat dilalui. `Floor` menandai area yang dapat dilalui. `Start` dan `Goal` menentukan titik awal dan tujuan agen. `EnemySpawn` dan `ItemSpawn` menentukan lokasi munculnya NPC atau objek gameplay. Dengan informasi ini, level sudah memiliki struktur yang dapat digunakan untuk pengambilan keputusan, pergerakan, dan penempatan konten.

Representasi level juga menentukan cara agen memahami lingkungan. Jika level direpresentasikan sebagai grid, pergerakan dan pencarian jalur dapat dilakukan berdasarkan sel. Jika direpresentasikan sebagai graph, keputusan dapat dibuat berdasarkan node dan koneksi. Jika direpresentasikan sebagai navmesh, pergerakan dapat lebih halus dan mendekati ruang kontinu. Pada tahap awal, grid memberikan batasan yang jelas sehingga mahasiswa dapat fokus memahami hubungan antara data level, perilaku agen, dan hasil visual di Unity.

Hal penting yang perlu dipahami adalah bahwa representasi level adalah abstraksi dari lingkungan game. Representasi yang tepat membuat proses generation, validasi, dan interaksi agen menjadi lebih terstruktur. Sebelum lanjut ke bentuk grid yang lebih konkret, mahasiswa perlu menyadari bahwa data level harus konsisten, mudah dibaca, dan mendukung algoritma yang akan digunakan.

### Inti yang Harus Ditekankan

- Level harus direpresentasikan sebagai data sebelum dibangun di Unity.
- Representasi seperti **grid**, **graph**, **tilemap**, **room list**, **navmesh area**, dan **prefab chunk** memiliki karakteristik berbeda.
- Untuk praktikum awal, **Grid 2D** paling mudah karena sederhana, terstruktur, dan mendukung pathfinding serta penempatan spawn.
- Setiap cell menyimpan makna lingkungan, misalnya `Wall`, `Floor`, `Start`, `Goal`, `EnemySpawn`, dan `ItemSpawn`.
- Representasi level menentukan cara agen memahami lingkungan dan mengambil keputusan.

### Transisi ke Slide Berikutnya

Selanjutnya, kita akan melihat bentuk konkret dari grid-based representation, yaitu bagaimana level dibagi menjadi cell dan bagaimana simbol cell dapat dikonversi menjadi tile atau prefab di Unity.

---

## Slide 009 - Grid-Based Representation

### Narasi

**Grid-based representation** adalah cara paling sederhana untuk mengubah level menjadi data spasial yang dapat dibaca oleh game. Level tidak lagi dipandang sebagai gambar bebas, tetapi sebagai kumpulan **cell** berukuran sama.

Setiap cell menyimpan status lingkungan:

- `#` = `Wall`
- `.` = `Floor`
- `S` = `Start`
- `G` = `Goal`

```text
# # # # # # #
# S . . # G #
# . # . # . #
# . # . . . #
# # # # # # #
```

Contoh grid di atas menunjukkan area yang dapat dilewati dan area yang memblokir. Cell `Floor` menjadi ruang gerak, sedangkan cell `Wall` menjadi batas yang tidak boleh ditembus. Titik `Start` dan `Goal` memberi konteks untuk pergerakan, spawn, atau tujuan pencarian rute.

Dalam konteks perilaku game, grid menjadi dasar bagi `NPC` atau agen untuk mengambil keputusan langkah. Karena ruang sudah diskrit, proses seperti `pathfinding`, `BFS`, atau `A*` dapat bekerja pada cell tetangga yang valid. Mahasiswa dapat membayangkan agen bergerak dari `S` ke `G` dengan memeriksa cell di sekitarnya.

Di Unity, setiap cell dapat dikonversi menjadi `tile` atau `prefab`. Cell `Wall` dapat menjadi prefab dinding, cell `Floor` menjadi prefab lantai, dan cell `S` menjadi spawn point. Dengan cara ini, level dapat dibangun ulang secara konsisten dari data, bukan hanya dari penempatan objek manual di `scene`.

Keunggulan utama grid adalah kesederhanaan dan sifat deterministik. Karena setiap cell memiliki peran yang jelas, logika pergerakan, spawn, dan interaksi menjadi lebih mudah diuji. Grid bukan sekadar tampilan visual, tetapi model data yang menghubungkan desain level dengan perilaku agen dalam game.

Sebelum lanjut, mahasiswa perlu memahami bahwa grid menyimpan informasi lingkungan per cell. Informasi inilah yang nanti digunakan untuk menentukan posisi, pergerakan, dan interaksi dalam game.

### Inti yang Harus Ditekankan

- **Grid** membagi level menjadi **cell** seragam yang dapat disimpan sebagai data.
- Simbol `#`, `.`, `S`, dan `G` merepresentasikan `Wall`, `Floor`, `Start`, dan `Goal`.
- Grid menjadi dasar untuk `pathfinding`, spawn, dan konversi ke `tile` atau `prefab` di Unity.

### Transisi ke Slide Berikutnya

Setelah grid dipahami sebagai representasi level, langkah berikutnya adalah memberi identitas posisi pada setiap cell melalui koordinat grid.

---

## Slide 010 - Grid Coordinate

### Narasi

Setelah level direpresentasikan sebagai grid, langkah berikutnya adalah memberi **alamat unik** pada setiap cell. Alamat ini biasanya berupa koordinat grid `(x, y)`, di mana `x` menunjukkan kolom dan `y` menunjukkan baris. Cara berpikirnya mirip papan catur: setiap kotak memiliki posisi yang bisa disebut secara konsisten.

Contoh sederhana untuk grid 3x3:

```text
(0,0) (1,0) (2,0)
(0,1) (1,1) (2,1)
(0,2) (1,2) (2,2)
```

Koordinat ini masih bersifat **logis**, artinya ia hanya menunjukkan posisi cell di dalam data grid. Belum tentu sama dengan posisi dunia di Unity.

Dalam Unity 3D, sumbu `Y` biasanya digunakan untuk tinggi, sedangkan bidang lantai berada pada sumbu `XZ`. Karena itu, koordinat grid `y` umumnya dipetakan ke sumbu `Z` dunia, bukan ke sumbu `Y`. Dengan cara ini, tile atau objek level akan berada di lantai, bukan melayang ke atas.

Konversi dari koordinat grid ke posisi dunia dapat dilakukan seperti berikut:

```csharp
Vector3 worldPosition =
    new Vector3(x * tileSize, 0f, y * tileSize);
```

Pada kode tersebut, `x` dan `y` adalah koordinat grid, sedangkan `tileSize` adalah ukuran satu cell dalam satuan dunia. Jika `tileSize` bernilai `1`, maka cell `(1, 2)` akan berada di posisi dunia `(1, 0, 2)`. Jika `tileSize` bernilai `2`, posisi dunia menjadi `(2, 0, 4)`.

Konversi ini penting karena memungkinkan data grid yang tersimpan sebagai array atau struktur data diubah menjadi objek nyata di scene. Misalnya, setiap cell dapat diinstantiate sebagai tile, prefab, collider, atau penanda spawn. Tanpa konversi koordinat yang benar, level yang dihasilkan generator tidak akan berada pada posisi yang sesuai.

Sebelum lanjut, mahasiswa perlu memahami bahwa **koordinat grid** dan **posisi dunia** adalah dua hal yang berbeda. Koordinat grid adalah index data, sedangkan posisi dunia adalah representasi visual dan spasial di Unity. Pemisahan ini membuat sistem level generation lebih rapi, mudah diuji, dan tidak bergantung pada satu ukuran tile tertentu.

### Inti yang Harus Ditekankan

- `(x, y)` adalah **alamat logis** untuk setiap cell dalam grid.
- `x` biasanya mewakili kolom, sedangkan `y` mewakili baris.
- Di Unity 3D, bidang lantai umumnya berada pada sumbu `XZ`, sehingga koordinat grid `y` dipetakan ke sumbu `Z`.
- `tileSize` berfungsi mengubah index grid menjadi jarak dunia.
- Konversi koordinat memungkinkan data grid diwujudkan menjadi objek di scene.

### Transisi ke Slide Berikutnya

Setiap cell kini sudah memiliki posisi yang dapat ditentukan. Langkah berikutnya adalah memberi **makna** pada setiap cell, misalnya apakah cell tersebut adalah dinding, lantai, titik awal, titik tujuan, atau lokasi spawn.

---

## Slide 011 - Tile Type

### Narasi

Pada slide sebelumnya, kita sudah melihat bahwa level dapat direpresentasikan sebagai grid koordinat. Namun koordinat saja belum memberi tahu generator apa arti setiap sel. Di sinilah konsep **Tile Type** menjadi penting.

**Tile Type** adalah label atau kategori yang diberikan pada setiap cell grid. Label ini memberi makna pada posisi, misalnya apakah sel itu dinding, lantai, titik awal, tujuan, atau lokasi spawn.

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

Penggunaan `enum` membuat tipe tile menjadi **type-safe** dan mudah dibaca. Daripada menyimpan angka seperti `0` atau `1`, kita bisa menulis `Wall` atau `Floor`. Ini mengurangi kesalahan dan membuat logika generator lebih jelas.

```csharp
TileType[,] grid;
```

Struktur `TileType[,] grid` menyimpan tipe untuk setiap pasangan koordinat. Dengan struktur ini, generator dapat memproses level secara sistematis: membaca satu cell, mengubahnya, membandingkannya, atau memvalidasi state level.

Secara praktis, tile type menjadi dasar bagi banyak sistem game.

- `Wall` dan `Floor` menentukan apakah agent dapat bergerak atau tidak.
- `Start` dan `Goal` memberi target untuk pathfinding atau quest.
- `EnemySpawn` dan `ItemSpawn` memberi lokasi penempatan NPC atau item.
- Sistem rendering dapat memetakan setiap tipe ke prefab, material, atau tile visual.

Dengan kata lain, tile type mengubah grid dari sekadar koordinat menjadi **state level** yang dapat diproses oleh generator, pathfinding, NPC behavior, dan Unity scene.

Sebelum lanjut, mahasiswa perlu memahami bahwa representasi data ini adalah fondasi. Tanpa tipe yang jelas, generator tidak tahu apa yang boleh diubah, apa yang harus dihindari, dan apa yang perlu diperiksa.

### Inti yang Harus Ditekankan

- **Tile Type** memberi makna pada setiap cell grid.
- `enum TileType` membuat representasi level lebih aman, rapi, dan mudah dibaca.
- `TileType[,] grid` memungkinkan generator memproses, memvalidasi, dan memetakan level secara sistematis.
- Tipe seperti `Wall`, `Floor`, `Start`, `Goal`, `EnemySpawn`, dan `ItemSpawn` menjadi dasar untuk pathfinding, penempatan NPC/item, dan visualisasi scene.

### Transisi ke Slide Berikutnya

Setelah setiap cell memiliki tipe, langkah berikutnya adalah bagaimana generator memodifikasi grid secara sistematis untuk membentuk level.

---

## Slide 012 - Grid-Based Generation

### Narasi

**Grid-based generation** adalah teknik pembuatan level yang bekerja pada tingkat **grid**. Alih-alih langsung menempatkan objek di scene, generator memodifikasi nilai setiap cell, misalnya dari `wall` menjadi `floor`, lalu menambahkan `start`, `goal`, `enemy`, dan `item`.

Intuisi praktisnya sederhana: grid adalah kanvas data. Setiap cell menyimpan informasi tipe, sehingga level dapat dibuat, diperiksa, dan diubah secara sistematis. Pendekatan ini sangat cocok untuk dungeon, cave, atau level 2D karena struktur sel mudah diproses oleh algoritma.

Alur umumnya dapat dilihat sebagai pipeline berikut:

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

Setiap tahap memiliki peran yang berbeda:

- **Initialize Grid**: menyiapkan grid dalam kondisi awal yang konsisten.
- **Generate Floor**: membuka sebagian cell agar menjadi area yang bisa dilewati.
- **Generate Rooms / Corridors**: membentuk ruang dan jalur penghubung.
- **Place Start & Goal**: menentukan titik awal dan tujuan utama.
- **Place Enemy & Item**: menempatkan konten gameplay yang relevan.
- **Validate**: memastikan level layak dimainkan, terutama dari sisi keterhubungan.
- **Build Unity Scene**: mengubah data grid menjadi objek atau tilemap di Unity.

Tahap **Validate** sangat penting karena level yang terlihat bagus belum tentu valid secara gameplay. Generator perlu memeriksa apakah `start` dapat mencapai `goal`, apakah `enemy` dan `item` berada di area yang terjangkau, dan apakah tidak ada `floor` yang terisolasi. Jika validasi gagal, generator dapat memperbaiki layout atau membuat ulang level.

Hasil akhir dari pipeline ini bukan hanya gambar level, tetapi **data lingkungan** yang siap digunakan oleh sistem game. Data grid dapat dipakai untuk membangun tilemap, memunculkan prefab, mengatur spawn, dan mendukung perilaku NPC atau pathfinding. Dengan kata lain, grid-based generation memberikan dasar yang rapi sebelum level benar-benar tampil di scene.

### Inti yang Harus Ditekankan

- **Grid-based generation** bekerja dengan memodifikasi cell, bukan langsung membangun objek scene.
- Pipeline utama bergerak dari **initialize**, **generate**, **place**, **validate**, hingga **build Unity scene**.
- **Validasi path** dan spawn adalah syarat penting agar level dapat dimainkan dan NPC dapat bergerak secara wajar.

### Transisi ke Slide Berikutnya

Selanjutnya kita mulai dari langkah pertama pipeline, yaitu **Initialize Grid**, di mana semua cell disiapkan dalam kondisi awal sebelum diukir menjadi area yang bisa dilewati.

---

## Slide 013 - Initialize Grid

### Narasi

**Initialize Grid** adalah langkah awal yang paling umum dalam proses pembuatan level berbasis grid. Pada tahap ini, kita belum membuat ruang, lorong, musuh, atau item. Yang kita lakukan adalah menyiapkan “kanvas” dasar yang akan dimodifikasi oleh algoritma generasi level.

Pendekatan yang paling sering digunakan adalah memulai dengan seluruh cell sebagai **wall**. Dalam representasi teks, cell wall biasanya ditandai dengan simbol `#`, sedangkan cell yang bisa dilalui atau **floor** ditandai dengan simbol `.`.

```text
Semua cell = wall
```

Contoh grid awal yang seluruhnya berupa wall adalah sebagai berikut:

```text
# # # # #
# # # # #
# # # # #
# # # # #
# # # # #
```

Grid ini penting karena memberi kondisi awal yang aman. Semua posisi dianggap tidak bisa dilalui, sehingga algoritma tidak perlu khawatir ada area terbuka yang tidak terkontrol. Setelah itu, algoritma akan “mengukir” beberapa cell menjadi floor.

```text
# # # # #
# . . # #
# # . # #
# # . . #
# # # # #
```

Perhatikan bahwa perubahan dari `#` menjadi `.` bukan sekadar estetika visual. Perubahan ini menentukan cell mana yang boleh dimasuki oleh agen, NPC, pemain, atau objek lain. Dalam konteks **pathfinding**, grid ini menjadi dasar untuk mencari jalur valid dari satu titik ke titik lain. Jika semua cell masih wall, tidak ada jalur yang bisa dihitung. Setelah ada floor, barulah sistem bisa menilai apakah posisi start dan goal terhubung.

Pendekatan ini juga berguna untuk desain **NPC behavior**. Sebelum NPC bergerak, sistem perlu tahu area mana yang valid untuk berdiri, bergerak, atau bersembunyi. Grid yang sudah diinisialisasi menjadi representasi lingkungan sederhana yang bisa digunakan oleh **finite state machine**, **behavior tree**, atau sistem steering untuk mengambil keputusan.

Dalam implementasi Unity, grid seperti ini bisa disimpan sebagai data dua dimensi, misalnya array `int[,]` atau struktur tilemap, sebelum akhirnya dibangun menjadi scene. Dengan kata lain, **Initialize Grid** bukan hanya membuat tampilan kotak-kotak, tetapi menyiapkan data lingkungan yang akan dipakai oleh banyak sistem game AI.

### Inti yang Harus Ditekankan

- **Initialize Grid** adalah tahap menyiapkan representasi level sebelum proses generasi dimulai.
- Pola umum adalah memulai dengan semua cell sebagai `#` atau **wall**, lalu mengubah sebagian menjadi `.` atau **floor**.
- Grid awal yang seluruhnya wall memberi kondisi aman karena tidak ada area terbuka yang belum dikontrol.
- Perubahan cell menjadi floor menentukan area yang bisa digunakan untuk **pathfinding**, penempatan NPC, dan validasi jalur.
- Tahap ini menjadi dasar bagi sistem AI game untuk memahami lingkungan sebelum mengambil keputusan.

### Transisi ke Slide Berikutnya

Setelah grid diinisialisasi, langkah berikutnya adalah memahami strategi dasar pembuatan level: apakah kita mulai dari wall lalu membuat floor, atau mulai dari floor lalu menambahkan wall. Pada slide berikutnya, kita akan membahas perbedaan antara **Floor-First** dan **Wall-First**.

---

## Slide 014 - Floor-First vs Wall-First

### Narasi

Pada slide ini kita membandingkan dua cara memulai pembuatan grid level: **Wall-First** dan **Floor-First**. Keduanya bukan sekadar urutan teknis, tetapi keputusan desain yang memengaruhi bentuk level, jalur pemain, dan perilaku NPC.

**Wall-First** berarti grid dimulai dari kondisi semua cell `wall`, kemudian algoritma membuat cell `floor`. Pendekatan ini memberi kesan ruang yang “ditemukan” dari kegelapan atau batuan. Karena itu, pendekatan ini cocok untuk **dungeon**, **cave**, **maze**, dan **random walk**.

Kelebihan Wall-First adalah mudah menghasilkan jalur sempit, ruang tersembunyi, dan struktur eksploratif. Namun, mahasiswa perlu memahami bahwa cara ini menuntut perhatian pada **konektivitas**. Jika terlalu banyak dinding atau jalur terputus, NPC tidak bisa bergerak dari titik spawn ke titik tujuan.

**Floor-First** berarti grid dimulai dari kondisi semua cell `floor`, kemudian algoritma menambahkan `wall` atau obstacle. Pendekatan ini memberi kesan ruang terbuka yang kemudian diberi batas, rintangan, atau area taktis. Karena itu, pendekatan ini cocok untuk **arena**, **open field**, **obstacle placement**, dan **tactical map sederhana**.

Kelebihan Floor-First adalah pemain dan NPC umumnya memiliki ruang gerak yang lebih bebas. Dinding yang ditambahkan dapat berfungsi sebagai cover, chokepoint, atau pembatas area. Namun, jika obstacle terlalu banyak atau ditempatkan tidak terkontrol, jalur bisa terpotong dan peta menjadi sulit dimainkan.

Pemilihan antara Wall-First dan Floor-First bergantung pada **jenis level yang diinginkan**. Untuk dungeon yang misterius, Wall-First lebih alami. Untuk arena pertempuran atau peta taktis, Floor-First lebih mudah dikendalikan. Dalam implementasi game, pilihan ini juga memengaruhi pathfinding, spawn NPC, line of sight, dan validasi apakah start ke goal masih terhubung.

Sebelum lanjut ke metode pengisian acak, hal penting yang harus dipahami adalah: kondisi awal grid menentukan strategi algoritma. Wall-First berarti “mengukir ruang”, sedangkan Floor-First berarti “menambahkan rintangan”.

### Inti yang Harus Ditekankan

- **Wall-First** dimulai dari semua `wall`, lalu algoritma membuat `floor`; cocok untuk dungeon, cave, maze, dan random walk.
- **Floor-First** dimulai dari semua `floor`, lalu algoritma menambahkan `wall` atau obstacle; cocok untuk arena, open field, obstacle placement, dan tactical map sederhana.
- Pilihan awal grid memengaruhi **karakter level**, **jalur NPC**, **pathfinding**, dan kebutuhan validasi konektivitas.

### Transisi ke Slide Berikutnya

Selanjutnya, kita akan melihat cara paling sederhana untuk mengisi grid secara acak melalui **Random Fill Grid**, serta mengapa hasil acak saja belum cukup untuk menjamin level yang bisa dimainkan.

---

## Slide 015 - Random Fill Grid

### Narasi

Pada slide ini, kita membahas **Random Fill Grid**, yaitu metode paling sederhana untuk membuat grid level secara prosedural. Intuisinya adalah setiap `cell` diberi peluang acak untuk menjadi `wall` atau `floor`. Dengan kata lain, grid tidak dibangun berdasarkan aturan bentuk ruang, tetapi berdasarkan probabilitas per sel.

Parameter utamanya adalah `wallProbability = 0.35`. Nilai ini berarti sekitar 35% dari seluruh `cell` diharapkan menjadi `wall`, sedangkan sisanya menjadi `floor`. Semakin besar nilai `wallProbability`, semakin padat grid; semakin kecil nilainya, semakin terbuka area yang dihasilkan.

Pseudocode metode ini adalah:

```text
for each cell:
    if random < wallProbability:
        cell = wall
    else:
        cell = floor
```

Urutan eksekusinya cukup langsung:

1. Iterasi setiap `cell` pada grid.
2. Ambil nilai `random` antara 0 dan 1.
3. Bandingkan `random` dengan `wallProbability`.
4. Jika `random < wallProbability`, tetapkan `cell = wall`.
5. Jika tidak, tetapkan `cell = floor`.

Karena setiap `cell` ditentukan secara independen, metode ini sangat cepat dan mudah diimplementasikan. Dalam konteks game AI, grid hasil `Random Fill Grid` dapat menjadi environment untuk NPC, pathfinding, steering, atau placement objek. Namun, karena tidak ada aturan konektivitas, hasil yang dihasilkan belum tentu bisa dimainkan secara konsisten.

Kelebihan dan kekurangan metode ini perlu dipahami:

- **Kelebihan**: sangat mudah, cepat, dan cocok untuk prototype atau baseline.
- **Kekurangan**: hasil bisa berantakan, area bisa terputus, dan tidak menjamin `start` terhubung ke `goal`.

Sebelum lanjut, mahasiswa perlu memahami bahwa `Random Fill Grid` hanya menghasilkan kandidat grid. Grid tersebut masih perlu diperiksa apakah layak digunakan untuk gameplay, terutama untuk pergerakan agent dan pathfinding.

### Inti yang Harus Ditekankan

- `Random Fill Grid` adalah metode dasar PCG grid berbasis probabilitas per `cell`.
- `wallProbability` mengontrol kepadatan `wall` dan `floor`.
- Pseudocode hanya melakukan perbandingan acak per `cell` tanpa aturan konektivitas.
- Metode ini mudah dan cepat, tetapi hasilnya belum tentu playable karena `start` dan `goal` bisa terputus.

### Transisi ke Slide Berikutnya

Setelah grid dibuat secara acak, langkah berikutnya adalah memastikan grid tersebut layak digunakan. Slide berikutnya akan membahas validasi grid, seperti pengecekan konektivitas `start` ke `goal` dan kelayakan penempatan objek.

---

## Slide 016 - Validasi Grid

### Narasi

Setelah grid level dihasilkan oleh proses PCG, langkah berikutnya adalah **validasi**. Validasi berfungsi sebagai gerbang kualitas: grid yang terlihat acak belum tentu bisa dimainkan. Tanpa validasi, level bisa menghasilkan peta yang tidak masuk akal, misalnya pemain terjebak atau tidak bisa mencapai tujuan.

Contoh validasi yang umum dilakukan adalah:

- **start** dan **goal** harus ada di grid.
- **start** harus terhubung ke **goal** melalui sel **floor** yang dapat dilalui.
- Jumlah sel **floor** harus cukup agar level tidak terlalu sempit.
- Proporsi **wall** tidak boleh terlalu tinggi sehingga area tidak terfragmentasi.
- **enemy** tidak boleh spawn di sel **wall**.
- **item** tidak boleh spawn terlalu dekat dari **start**, agar tidak terasa tidak menantang.

Intuisi pentingnya adalah: **konektivitas** menjadi validasi paling kritis. Jika **start** dan **goal** berada di area yang terpisah oleh **wall**, maka level tersebut tidak valid meskipun secara visual grid sudah terbentuk. Dalam konteks game, ini berarti pemain tidak memiliki jalur untuk menyelesaikan level, dan sistem pathfinding tidak akan mampu menemukan rute yang valid.

Validasi konektivitas dapat dilakukan dengan algoritma pencarian graf seperti `BFS`, `Dijkstra`, `A*`, atau `flood fill`. Pada grid sederhana, sel **floor** dapat dipandang sebagai node, dan sel yang bersebelahan sebagai edge. Algoritma tersebut kemudian menjelajah dari **start** untuk menentukan sel mana saja yang dapat dicapai. Jika **goal** termasuk dalam himpunan sel terjangkau, level dinyatakan valid dari sisi konektivitas.

Perlu dipahami bahwa validasi bukan hanya soal ada atau tidaknya jalur. Validasi juga menjaga konsistensi desain level, misalnya memastikan spawn entity berada di sel yang valid dan penempatan item tidak merusak balance. Dengan kata lain, PCG tidak berhenti pada pembuatan struktur acak, tetapi harus memastikan struktur tersebut memenuhi aturan gameplay.

Di sinilah PCG terhubung langsung dengan materi pathfinding. Algoritma yang sama yang digunakan untuk mencari rute NPC atau pemain juga dapat digunakan untuk memeriksa apakah level yang dihasilkan layak dimainkan. Pada slide berikutnya, kita akan melihat salah satu metode validasi yang paling sederhana dan intuitif, yaitu `flood fill`, untuk mengecek area yang terhubung dari **start** menuju **goal**.

### Inti yang Harus Ditekankan

- Validasi adalah tahap penting setelah grid PCG dibuat.
- Konektivitas dari `start` ke `goal` adalah validasi paling kritis.
- Validasi mencakup keberadaan start/goal, jumlah floor, proporsi wall, spawn enemy, dan penempatan item.
- `BFS`, `Dijkstra`, `A*`, dan `flood fill` dapat digunakan untuk memeriksa area terjangkau.
- PCG dan pathfinding saling terhubung karena keduanya bekerja pada grid sebagai graf.

### Transisi ke Slide Berikutnya

Setelah memahami jenis validasi yang diperlukan, langkah berikutnya adalah melihat bagaimana `flood fill` digunakan untuk mengecek apakah `goal` benar-benar dapat dicapai dari `start`.

---

## Slide 017 - Flood Fill untuk Validasi

### Narasi

Setelah grid dungeon atau level dihasilkan, langkah penting berikutnya adalah memastikan bahwa area yang dibuat benar-benar dapat dimainkan. Pada slide ini kita fokus pada **Flood Fill** sebagai cara sederhana untuk mengecek **area yang terhubung** dalam grid. Intuisinya sederhana: kita mulai dari titik `Start`, lalu menjelajahi semua cell `floor` yang bisa dicapai tanpa melewati `wall`. Jika titik `Goal` ikut terjangkau, berarti jalur dari `Start` ke `Goal` secara topologis ada. Jika tidak, level tersebut tidak valid.

Alur kerja Flood Fill untuk validasi dapat dilihat sebagai berikut:

```text
Mulai dari Start
Kunjungi semua floor yang dapat dicapai
Hitung jumlah cell yang terjangkau
Cek apakah Goal termasuk terjangkau
```

Secara berurutan, prosesnya dapat dibaca sebagai:

1. Mulai dari cell `Start`.
2. Tandai semua cell `floor` yang dapat dicapai dari `Start`.
3. Hitung atau simpan area yang terjangkau.
4. Periksa apakah cell `Goal` termasuk dalam area yang terjangkau.

Dalam implementasinya, proses ini mirip dengan **BFS**. Kita bisa menempatkan `Start` ke dalam `queue`, lalu mengambil satu cell, menandainya sebagai terjangkau, dan menambahkan tetangga `floor` yang belum dikunjungi. Berbeda dengan pencarian jalur yang mencari urutan langkah terpendek, Flood Fill di sini hanya menjawab pertanyaan: **apakah `Goal` berada pada komponen yang sama dengan `Start`?** Karena itu, Flood Fill cocok untuk validasi cepat pada grid 2D, terutama ketika yang dibutuhkan adalah pengecekan konektivitas, bukan biaya jalur.

Jika hasil penjelajahan menunjukkan bahwa `Goal` tidak termasuk cell yang terjangkau, maka:

```text
level tidak valid
```

Keputusan ini penting karena level yang terlihat bagus secara visual belum tentu bisa diselesaikan. Misalnya, `Goal` bisa berada di balik dinding, di area terisolasi, atau di cell yang tidak terhubung karena proses generasi sebelumnya. Dengan Flood Fill, kita bisa mendeteksi masalah tersebut sebelum level digunakan oleh pemain atau sebelum NPC melakukan pathfinding.

Yang perlu dipahami mahasiswa adalah bahwa Flood Fill bukan pengganti pathfinding seperti `A*` atau `Dijkstra`, melainkan alat **validasi konektivitas**. Pathfinding biasanya digunakan untuk mencari jalur dari satu titik ke titik lain, sedangkan Flood Fill digunakan untuk mengetahui seluruh area yang dapat dicapai dari sebuah titik awal. Dalam konteks PCG, validasi seperti ini menjadi jembatan antara pembuatan level dan perilaku agen: jika level tidak valid, perilaku NPC atau pemain tidak akan berjalan dengan baik.

### Inti yang Harus Ditekankan

- **Flood Fill** digunakan untuk mengecek apakah `Start` dan `Goal` berada pada area `floor` yang terhubung.
- Prosesnya mirip **BFS**: mulai dari `Start`, tandai semua cell `floor` yang terjangkau, lalu periksa `Goal`.
- Jika `Goal` tidak terjangkau, level dinyatakan **tidak valid** meskipun grid sudah terbentuk.
- Flood Fill berfungsi sebagai **validasi konektivitas**, bukan sebagai pencarian jalur terpendek.

### Transisi ke Slide Berikutnya

Setelah kita tahu cara memvalidasi grid yang sudah ada, langkah berikutnya adalah melihat bagaimana grid tersebut bisa dibuat secara sederhana. Pada slide berikutnya, kita akan membahas **Random Walk** sebagai teknik generasi level yang menghasilkan jalur organik di grid.

---

## Slide 018 - Random Walk

### Narasi

**Random walk** adalah teknik **procedural content generation** sederhana untuk membuat level pada **grid**. Intuisinya, kita menempatkan satu **walker** di posisi awal, lalu membiarkannya berjalan beberapa langkah ke arah yang dipilih secara acak. Setiap kali walker melewati sel, sel tersebut diubah menjadi `floor`. Dengan cara ini, bentuk level muncul dari jejak perjalanan, bukan dari pola yang digambar manual.

Alur dasarnya dapat ditulis sebagai berikut:

```text
posisi = start
ulangi N langkah:
    arah = pilih_acak(directions)
    tetangga = posisi + arah
    jika tetangga valid:
        grid[tetangga] = floor
        posisi = tetangga
```

Pada potongan di atas, `start` adalah titik awal walker. `directions` berisi kemungkinan arah, misalnya atas, bawah, kiri, dan kanan. Variabel `posisi` menyimpan sel terakhir yang dikunjungi. Setiap iterasi memilih satu arah secara acak, menghitung sel tetangga, lalu mengubah sel tersebut menjadi `floor`. Jika sel tetangga tidak valid, langkah tersebut dapat diabaikan atau diulang, tergantung implementasi.

Poin penting yang harus dipahami mahasiswa adalah bahwa **random walk** menghasilkan area yang **terhubung** secara alami, karena semua `floor` berasal dari satu jalur yang sama. Namun, bentuknya sangat bergantung pada jumlah langkah, pilihan arah, dan aturan tambahan yang diberikan. Jika langkah terlalu sedikit, level bisa terlalu sempit. Jika langkah terlalu banyak, level bisa terlalu menyebar atau menyerupai labirin yang tidak terstruktur.

Teknik ini cocok untuk tema level yang membutuhkan kesan organik, seperti **cave**, **winding path**, **organic dungeon**, atau **area eksplorasi**. Dalam konteks game, jalur yang terbentuk dapat menjadi tempat NPC bergerak, area yang dijelajahi agen, atau lingkungan untuk **pathfinding**. Random walk juga sering menjadi langkah awal sebelum tahap pembersihan, pelebaran koridor, atau validasi keterhubungan.

Sebelum lanjut, mahasiswa perlu memahami bahwa random walk bukan sekadar "menggambar acak". Ia adalah proses pembuatan konten berbasis aturan: ada posisi, ada langkah, ada pilihan arah, dan ada perubahan state grid dari `wall` menjadi `floor`. Pemahaman ini penting karena teknik yang sama dapat dikembangkan menjadi generator dungeon, peta eksplorasi, atau lingkungan dinamis untuk permainan.

### Inti yang Harus Ditekankan

- **Random walk** membuat level dengan membiarkan **walker** bergerak acak di **grid** dan mengubah sel yang dilalui menjadi `floor`.
- Alurnya bersifat iteratif: pilih arah, bergerak ke tetangga, lalu perbarui state grid.
- Hasilnya cenderung organik dan cocok untuk **cave**, **winding path**, **organic dungeon**, atau **area eksplorasi**.
- Jumlah langkah dan aturan arah sangat memengaruhi bentuk akhir level.
- Jalur yang terbentuk dapat menjadi dasar lingkungan untuk NPC, agen, atau **pathfinding**.

### Transisi ke Slide Berikutnya

Setelah memahami alur random walk, slide berikutnya akan menunjukkan ilustrasi sederhana bagaimana posisi awal berubah menjadi jejak `floor` setelah walker melakukan beberapa langkah.

---

## Slide 019 - Ilustrasi Random Walk

### Narasi

Slide ini memperlihatkan apa yang terjadi ketika **random walk** dijalankan pada grid kecil. Pada kondisi awal, hampir seluruh sel masih berupa dinding, disimbolkan dengan `#`, dan hanya ada satu titik awal `S` yang menjadi posisi walker. Grid ini bisa dibayangkan sebagai area dungeon yang belum digali.

```text
# # # # #
# # # # #
# # S # #
# # # # #
# # # # #
```

Setelah beberapa langkah acak, walker meninggalkan jejak berupa sel lantai, disimbolkan dengan `.`. Perhatikan bahwa bentuk lantai tidak dibuat dari template ruangan, melainkan terbentuk dari jalur pergerakan. Karena setiap langkah dipilih secara acak, hasilnya cenderung organik, seperti lorong gua atau jalur eksplorasi yang tidak terlalu geometris.

```text
# # # # #
# . . # #
# . S . #
# # . . #
# # # # #
```

Gambar kedua menunjukkan hasil setelah walker melakukan beberapa langkah. Sel `.` adalah jejak langkah yang telah diubah menjadi floor. Dari ilustrasi ini, mahasiswa dapat melihat bahwa **random walk** tidak langsung menghasilkan ruangan besar, tetapi membentuk jalur sempit yang terhubung dari titik awal. Karakteristik ini cocok untuk cave, winding path, atau dungeon yang ingin terasa eksploratif.

Untuk desain game, ilustrasi ini membantu memahami bahwa PCG dapat menghasilkan level yang berbeda setiap kali dijalankan. Namun, karena langkahnya acak, hasil bisa terlalu pendek, terlalu menumpul, atau kurang luas. Dalam implementasi nyata, parameter seperti jumlah langkah, batas grid, dan arah yang diizinkan akan menentukan bentuk akhir.

### Inti yang Harus Ditekankan

- `#` adalah dinding, `S` adalah titik awal, dan `.` adalah floor yang terbentuk dari jejak walker.
- **Random walk** membuat level dari pergerakan acak, bukan dari template ruangan yang sudah ditentukan.
- Hasilnya cenderung organik dan cocok untuk cave atau winding path, tetapi bentuk akhirnya sangat bergantung pada jumlah langkah dan arah yang diizinkan.

### Transisi ke Slide Berikutnya

Setelah memahami bentuk visualnya, kita lanjut ke pseudocode random walk agar alur pergerakan, pemilihan arah, dan penulisan floor ke grid dapat dilihat secara lebih eksplisit.

---

## Slide 020 - Pseudocode Random Walk

### Narasi

Pada slide ini, kita mengubah ilustrasi **random walk** menjadi bentuk prosedur yang lebih jelas. Intinya, sebuah **walker** mulai dari posisi awal, kemudian bergerak langkah demi langkah ke arah acak, dan setiap posisi yang dilewati ditandai sebagai **floor**. Dengan cara ini, pola lantai atau koridor dapat terbentuk secara prosedural.

Pseudocode yang ditampilkan adalah:

```text
position = startPosition
grid[position] = floor

for i from 0 to walkLength:
    direction = random direction
    position = position + direction
    position = clamp inside grid
    grid[position] = floor
```

Secara umum, alur eksekusinya dapat dipahami sebagai berikut:

1. Tentukan `position` pada `startPosition`.
2. Tandai sel awal sebagai `floor`.
3. Ulangi proses sebanyak `walkLength` langkah.
4. Pilih satu `direction` secara acak.
5. Geser `position` sesuai arah tersebut.
6. Pastikan posisi tetap berada di dalam grid menggunakan `clamp inside grid`.
7. Tandai posisi baru sebagai `floor`.

Bagian penting dari pseudocode ini adalah `direction = random direction`. Di sinilah sifat acak dari **random walk** muncul. Jika arah yang dipilih selalu sama, hasilnya akan berupa garis lurus. Namun karena arah dipilih secara acak, jalur yang terbentuk menjadi lebih bervariasi dan tidak terprediksi.

Untuk arah gerak, slide ini menggunakan empat arah utama:

- `up`
- `down`
- `left`
- `right`

Empat arah ini lebih mudah dikontrol karena pergerakan tetap mengikuti sumbu grid. Bentuknya cenderung menghasilkan koridor yang rapi dan mudah dibaca, terutama untuk level atau dungeon sederhana.

Pseudocode juga menyebutkan bahwa bisa digunakan **8 arah**, tetapi 4 arah lebih mudah dikontrol. Jika 8 arah digunakan, walker dapat bergerak diagonal. Hasilnya bisa terasa lebih organik, tetapi juga lebih sulit dibatasi karena jalur bisa lebih menyebar dan kurang mengikuti struktur grid.

Perintah `position = clamp inside grid` sangat penting. Perintah ini memastikan posisi walker tidak keluar dari batas grid. Tanpa pembatasan ini, walker bisa menghasilkan koordinat yang tidak valid, misalnya di luar peta. Dengan `clamp`, proses generasi tetap aman meskipun walker bergerak ke arah batas peta.

Hasil yang diharapkan dari pseudocode ini adalah terbentuknya jalur `floor` yang terhubung dari posisi awal. Jalur tersebut bisa lurus, berbelok, atau bahkan kembali ke sel yang sudah pernah ditandai. Untuk tahap awal, pseudocode ini sudah cukup untuk menunjukkan bagaimana **random walk** dapat menjadi dasar sederhana dalam **PCG for Level & Dungeon Generation**.

### Inti yang Harus Ditekankan

- **Random walk** adalah proses pergerakan acak yang meninggalkan jejak `floor` di grid.
- `walkLength` menentukan berapa banyak langkah yang dilakukan walker.
- `clamp inside grid` menjaga posisi tetap valid dan tidak keluar dari batas peta.
- Empat arah lebih mudah dikontrol dibandingkan delapan arah karena tetap mengikuti struktur grid.

### Transisi ke Slide Berikutnya

Setelah memahami pseudocode dasarnya, langkah berikutnya adalah melihat parameter apa saja yang dapat mengatur hasil random walk, seperti panjang langkah, jumlah walker, dan batas area.

---

## Slide 021 - Parameter Random Walk

### Narasi

Setelah memahami pseudocode **random walk**, langkah berikutnya adalah memahami **parameter** yang mengontrol hasil generasi. Parameter ini penting karena **random walk** tidak hanya menghasilkan pola acak, tetapi juga dapat diarahkan untuk membentuk ruang game yang lebih masuk akal.

Parameter utama yang perlu diperhatikan adalah:

- **start position**: menentukan titik awal walker, sehingga memengaruhi di mana area floor pertama kali terbentuk.
- **walk length**: menentukan berapa langkah yang dilakukan walker; semakin panjang, semakin banyak sel yang berpotensi menjadi floor.
- **number of walkers**: menentukan berapa banyak walker yang berjalan; semakin banyak, area yang tercakup biasanya lebih luas.
- **chance to change direction**: menentukan seberapa sering walker berbelok; nilai kecil menghasilkan jalur lebih lurus, nilai besar menghasilkan jalur lebih berkelok.
- **boundary margin**: menjaga walker tetap berada di area yang aman, misalnya tidak menyentuh tepi grid atau area yang tidak boleh dibangun.
- **target floor count**: dapat digunakan sebagai kondisi berhenti ketika jumlah floor yang diinginkan sudah tercapai.

Contoh parameter yang sederhana adalah:

```text
walkLength = 200
walkerCount = 3
mapWidth = 40
mapHeight = 40
```

Pada contoh ini, grid berukuran `40 x 40` akan diisi oleh tiga walker, dan masing-masing walker berjalan sebanyak `200` langkah. Jika tidak ada tumpang tindih, potensi sel floor yang dibuat bisa mendekati `3 x 200 = 600` sel. Namun, karena walker dapat melewati sel yang sama, jumlah floor aktual biasanya lebih kecil dari nilai maksimum tersebut.

Dari sisi desain, parameter ini menjadi alat untuk mengatur **densitas**, **bentuk**, dan **rasio ruang** pada level. Misalnya, `walkLength` yang terlalu kecil dapat menghasilkan level yang terlalu kosong, sedangkan `walkLength` yang terlalu besar dapat membuat area terlalu padat atau sulit dibedakan antara koridor dan ruang terbuka. Parameter `chance to change direction` juga memengaruhi kesan level: jalur yang terlalu lurus terasa seperti lorong, sedangkan jalur yang sering berbelok terasa lebih seperti dungeon.

Hal yang harus dipahami mahasiswa sebelum lanjut adalah bahwa parameter **random walk** bukan sekadar nilai teknis, tetapi juga keputusan desain. Setiap perubahan parameter akan mengubah karakter level, sehingga perlu diuji dengan beberapa nilai untuk melihat hasil yang paling sesuai dengan tujuan game.

### Inti yang Harus Ditekankan

- Parameter **random walk** menentukan seberapa banyak, di mana, dan bagaimana floor terbentuk.
- `walkLength` dan `walkerCount` memengaruhi luas area, sedangkan `chance to change direction` memengaruhi bentuk jalur.
- `boundary margin` dan `target floor count` membantu menjaga hasil tetap berada dalam batas yang diinginkan.
- Nilai parameter perlu dituning karena hasil **random walk** sangat bergantung pada kombinasi angka, bukan satu parameter saja.

### Transisi ke Slide Berikutnya

Setelah parameter dasar dipahami, langkah berikutnya adalah melihat bagaimana beberapa walker dapat digunakan bersamaan untuk menghasilkan area yang lebih luas dan variatif, sekaligus memperhatikan agar area tetap terhubung.

---

## Slide 022 - Multiple Random Walkers

### Narasi

Dalam konteks **PCG untuk level dan dungeon generation**, satu walker sudah cukup untuk membuat area sederhana. Namun, untuk menghasilkan dungeon yang lebih menarik, kita dapat menjalankan **multiple random walkers**, yaitu beberapa walker yang berjalan pada grid yang sama.

```text
Walker A mulai dari tengah
Walker B mulai dari titik lain
Walker C mulai dari titik lain
```

Potongan ini menunjukkan bahwa setiap walker tidak harus berangkat dari titik yang sama. `Walker A` dapat menjadi inti utama, sedangkan `Walker B` dan `Walker C` memperluas area ke arah lain. Dengan cara ini, pembentukan lantai tidak hanya terjadi di satu jalur, tetapi di beberapa bagian peta sekaligus.

Manfaat pertama adalah **area menjadi lebih luas**. Satu walker cenderung menghasilkan satu jalur atau satu ruang yang memanjang. Beberapa walker dapat membentuk beberapa ruang pada waktu yang sama, sehingga dungeon terasa lebih kompleks dan tidak terlalu sempit.

Manfaat kedua adalah **bentuk menjadi lebih variatif**. Karena setiap walker memiliki arah acak dan titik awal berbeda, hasil akhirnya dapat memiliki cabang, ruang kecil, dan sudut yang tidak terlalu simetris. Ini membantu mengurangi kesan level yang terlalu linear atau mudah ditebak.

Namun, multiple random walkers juga memiliki risiko. Jika walker berjalan terlalu jauh atau berada di area yang terpisah, beberapa bagian lantai dapat menjadi tidak terhubung. Dalam game, hal ini bermasalah karena pemain atau NPC tidak dapat berpindah antar area yang terputus.

Oleh karena itu, **validasi konektivitas** menjadi bagian penting. Setelah semua walker selesai berjalan, kita perlu memeriksa apakah seluruh `tile` lantai dapat dicapai dari satu titik. Jika ada area yang terpisah, kita dapat menyambungkannya dengan koridor atau menyesuaikan posisi awal walker agar dungeon tetap dapat dijelajahi.

Yang perlu dipahami mahasiswa adalah multiple random walkers bukan sekadar menambah jumlah walker. Tujuannya adalah memperluas area, memvariasikan bentuk level, dan tetap menjaga dungeon sebagai satu ruang yang koheren.

### Inti yang Harus Ditekankan

- **Multiple random walkers** membuat area dungeon lebih luas dan bentuknya lebih variatif dibanding satu walker.
- Setiap walker sebaiknya memiliki titik awal berbeda agar hasil tidak hanya memperpanjang satu jalur yang sama.
- **Validasi konektivitas** wajib dilakukan agar seluruh area lantai tetap terhubung dan dapat dijelajahi oleh pemain atau NPC.

### Transisi ke Slide Berikutnya

Setelah area dungeon dapat dibentuk oleh beberapa walker, langkah berikutnya adalah memanfaatkan random walk untuk membuat jalur utama dari titik awal menuju tujuan.

---

## Slide 023 - Random Walk untuk Main Path

### Narasi

Pada tahap ini, kita melihat cara paling sederhana untuk memberi “tulang punggung” pada level yang digenerate. **Random walk** tidak langsung membuat dungeon lengkap, tetapi ia membuat **main path** terlebih dahulu. Intuisinya sederhana: level yang baik biasanya punya jalur utama yang bisa diikuti pemain, lalu detail lain ditambahkan di sekitarnya.

Diagram pada slide menunjukkan alur dasar:

```text
Start
  ↓
random walk
  ↓
Goal
```

Artinya, proses dimulai dari `Start`, kemudian generator melakukan langkah acak dari satu sel ke sel tetangga, dan berhenti ketika mencapai `Goal`. Hasilnya adalah rangkaian sel yang terhubung, sehingga pemain pasti memiliki rute dari awal ke akhir.

Keunggulan utama cara ini adalah **jaminan jalur utama**. Karena `random walk` berjalan dari `Start` menuju `Goal`, level tidak akan menjadi kumpulan ruang yang terputus. Ini penting untuk **pathfinding**, **NPC behavior**, dan progresi pemain, karena ada referensi rute yang jelas sebelum level diberi variasi.

Setelah main path terbentuk, kita tambahkan elemen pendukung:

- `room kecil` sebagai ruang transisi atau area istirahat.
- `enemy` sebagai tantangan di sepanjang jalur.
- `item` sebagai reward atau alat bantu.
- `branch path` sebagai cabang yang memberi pilihan tanpa merusak jalur utama.
- `treasure area` sebagai area khusus yang memberi motivasi eksplorasi.

Secara praktis, alurnya bisa dipahami sebagai:

1. Tentukan `Start` dan `Goal` pada grid.
2. Jalankan `random walk` dari `Start` hingga `Goal`.
3. Simpan sel-sel yang dilewati sebagai `main path`.
4. Tambahkan `room`, `enemy`, `item`, `branch path`, dan `treasure area` di sekitar jalur.
5. Gunakan jalur tersebut sebagai dasar level, bukan sebagai hasil akhir.

Yang harus dipahami mahasiswa sebelum lanjut adalah bahwa **random walk untuk main path** adalah strategi pembentuk struktur, bukan pembuat seluruh detail level. Ia cocok untuk level sederhana karena cepat, mudah diverifikasi, dan menghasilkan jalur yang pasti terbentuk.

### Inti yang Harus Ditekankan

- **Main path** adalah jalur utama dari `Start` ke `Goal` yang dibuat dengan `random walk`.
- Jalur utama memberi **konektivitas** dan dasar untuk `pathfinding`, `NPC behavior`, serta progresi pemain.
- Elemen seperti `room`, `enemy`, `item`, `branch path`, dan `treasure area` ditambahkan setelah jalur utama terbentuk.
- Metode ini cocok untuk level sederhana karena jalur utama pasti terbentuk dan mudah dipahami.

### Transisi ke Slide Berikutnya

Setelah memahami bagaimana `random walk` membentuk main path, kita akan menilai mengapa metode ini menarik dan apa batasannya. Slide berikutnya akan membahas kelebihan `random walk`, sehingga kita bisa melihat sisi praktisnya sebelum masuk ke kelemahan dan perbaikan.

---

## Slide 024 - Kelebihan Random Walk

### Narasi

Pada slide ini kita menilai **Random Walk** sebagai teknik dasar **Procedural Content Generation** untuk level atau dungeon. Intuisinya sederhana: agen atau walker bergerak dari satu sel ke sel tetangga secara acak, lalu jejaknya menjadi lantai atau jalur. Karena prosesnya berbasis langkah lokal, mahasiswa tidak perlu memahami algoritma pencarian global yang rumit untuk mulai menghasilkan layout.

Kelebihan utama pertama adalah **mudah diimplementasikan**. Dalam konteks game, cukup menentukan grid, posisi `start`, aturan langkah, dan kondisi berhenti. Jika walker bergerak dari `start` menuju `goal`, jalur yang terbentuk secara alami terhubung karena setiap langkah baru selalu bersebelahan dengan langkah sebelumnya. Hal ini penting untuk dungeon sederhana karena NPC atau pemain tetap memiliki rute yang dapat dilalui.

Kelebihan berikutnya adalah hasilnya terlihat **organik**. Berbeda dengan grid kotak-kotak yang terlalu rapi, random walk menghasilkan belokan, cabang kecil, dan bentuk ruang yang mirip gua atau lorong dungeon. Karakteristik ini cocok untuk tema **cave**, **dungeon sederhana**, atau level eksplorasi yang tidak menuntut kontrol bentuk yang sangat presisi.

Dari sisi desain, parameter random walk juga **mudah dipahami**. Dosen dan mahasiswa dapat mengamati langsung pengaruh beberapa nilai, seperti:

- jumlah langkah,
- bias arah,
- ukuran grid,
- batas dinding,
- target `goal`.

Perubahan parameter biasanya memberi efek visual yang jelas, sehingga cocok untuk eksperimen awal dalam mata kuliah Game Cerdas.

Namun, random walk juga memiliki keterbatasan. Bentuk jalur **sulit dikontrol** secara detail karena hasil acak dapat berbeda setiap eksekusi. Jalur juga bisa **terlalu sempit**, **terlalu berliku**, atau menghasilkan ruang yang kurang nyaman untuk gameplay. Karena itu, hasil random walk sering perlu **smoothing** atau **pelebaran area** sebelum dijadikan level final.

Sebelum lanjut, yang perlu dipahami mahasiswa adalah random walk bukan teknik yang selalu menghasilkan level sempurna, tetapi teknik yang cepat, sederhana, dan mudah dikembangkan. Ia menjadi fondasi untuk teknik lanjutan seperti pelebaran jalur, penempatan room, atau penyesuaian bentuk dungeon.

### Inti yang Harus Ditekankan

- **Random Walk** mudah diimplementasikan karena hanya membutuhkan aturan langkah lokal pada grid.
- Hasilnya cenderung **organik** dan cocok untuk **cave** atau **dungeon sederhana**.
- Jalur dari `start` ke `goal` dapat tetap terhubung karena setiap langkah memperluas jalur dari posisi sebelumnya.
- Parameter seperti jumlah langkah, bias arah, dan ukuran grid mudah dipahami untuk eksperimen.
- Kekurangannya adalah bentuk sulit dikontrol, jalur bisa sempit atau berliku, sehingga perlu **smoothing** atau pelebaran.

### Transisi ke Slide Berikutnya

Karena random walk sering menghasilkan jalur yang terlalu sempit, langkah berikutnya adalah membahas bagaimana melebarkan jalur tersebut agar dungeon lebih nyaman untuk pemain dan NPC.

---

## Slide 025 - Pelebaran Random Walk

### Narasi

Pada slide sebelumnya, random walk menghasilkan jalur yang organik dan mudah diimplementasikan. Namun, masalah utamanya adalah jalur yang terbentuk sering terlalu sempit, sehingga pemain atau agen game tidak punya ruang gerak yang nyaman.

Ide dasar pelebaran adalah mengubah jalur satu sel menjadi area yang lebih lebar. Setiap kali walker berada pada posisi `(x, y)`, kita tidak hanya menandai sel tersebut sebagai `floor`, tetapi juga menandai sel-sel di sekitarnya. Dengan cara ini, jalur yang tadinya seperti garis tipis berubah menjadi lorong atau ruang yang dapat dimainkan.

Pendekatan paling sederhana adalah menggunakan area `3x3` di sekitar posisi walker. Artinya, dari posisi pusat, kita menggeser koordinat ke kiri, kanan, atas, bawah, dan empat diagonal. Semua sel dalam area tersebut diubah menjadi `floor`.

Pseudocode yang ditampilkan pada slide adalah:

```text
for dx = -1 to 1:
    for dy = -1 to 1:
        grid[x+dx, y+dy] = floor
```

Dalam potongan kode ini, `dx` dan `dy` adalah offset relatif terhadap posisi walker. Nilai `-1`, `0`, dan `1` menghasilkan sembilan sel: satu sel pusat dan delapan sel tetangga. Urutan eksekusinya sederhana: untuk setiap langkah walker, dua loop berjalan dan menandai sel-sel sekitar sebagai `floor`.

Hasil yang diharapkan adalah jalur random walk menjadi lebih lebar dan lebih mudah dinavigasi. Jika `brush size` diperbesar, area yang ditandai bisa lebih dari `3x3`, misalnya `5x5`, sehingga menghasilkan lorong yang lebih luas. Namun, semakin besar brush, semakin besar pula ruang yang terbuka, sehingga bentuk dungeon bisa berubah dari sempit menjadi lebih terbuka.

Selain pelebaran, slide juga menyebutkan `smoothing` dan penambahan `room` pada beberapa titik. Smoothing membantu merapikan tepi jalur yang terlalu bergerigi, sedangkan room memberi variasi ruang agar dungeon tidak hanya berupa lorong panjang. Dengan kombinasi ini, hasil random walk menjadi lebih layak digunakan sebagai level sederhana.

Sebelum lanjut, mahasiswa perlu memahami bahwa pelebaran random walk bukan mengubah algoritma penjelajahannya, melainkan mengubah cara penulisan hasil jalur ke grid. Random walk tetap menentukan posisi walker; pelebaran hanya memperlebar jejak yang ditinggalkan.

### Inti yang Harus Ditekankan

- Pelebaran random walk dilakukan dengan menandai area sekitar posisi walker, bukan hanya satu sel.
- Pseudocode `for dx = -1 to 1` dan `for dy = -1 to 1` menghasilkan area `3x3` yang diubah menjadi `floor`.
- `brush size` dapat memperbesar area pelebaran, tetapi juga mengubah skala ruang yang dihasilkan.
- Smoothing dan penambahan room membantu membuat jalur lebih rapi dan dungeon lebih bervariasi.

### Transisi ke Slide Berikutnya

Setelah random walk diperlebar, kita sudah punya cara membuat dungeon berbasis jalur. Selanjutnya, kita akan melihat pendekatan lain yang lebih terstruktur, yaitu BSP, yang membagi area menjadi bagian-bagian kecil sebelum menempatkan room.

---

## Slide 026 - BSP

### Narasi

**BSP** adalah singkatan dari **Binary Space Partitioning**. Dalam konteks pembuatan level, `BSP` adalah strategi membagi ruang permainan menjadi beberapa sub-area secara berulang. Tujuannya adalah mengubah area besar yang masih kosong menjadi struktur ruang yang lebih kecil, lebih teratur, dan lebih mudah diisi.

Intuisi praktisnya sederhana. Bayangkan sebuah area dungeon yang belum memiliki ruangan. Alih-alih menempatkan `room` secara acak, kita memotong area itu menjadi dua bagian, lalu memotong bagian-bagian tersebut lagi sampai ukurannya cukup kecil. Dengan cara ini, level tidak hanya terbentuk dari jalur acak, tetapi dari hierarki ruang yang sudah dipartisi lebih dulu.

Alur konsepnya dapat dilihat sebagai berikut:

```text
Area besar
   ↓ split
Area kiri + area kanan
   ↓ split lagi
Area kecil-kecil
```

Proses ini bersifat rekursif. Artinya, setiap area yang masih dianggap besar dapat dipecah lagi menjadi dua area baru. Tahapan dasarnya adalah:

1. Ambil satu area besar.
2. Lakukan `split` menjadi dua sub-area.
3. Ulangi `split` pada sub-area yang masih memenuhi syarat untuk dipecah.
4. Isi area kecil yang sudah tidak dipecah lagi dengan `room`.

Setelah pembagian selesai, setiap area kecil dapat menjadi tempat penempatan `room`. Dalam dungeon berbasis room, `room` biasanya menjadi lokasi pemain berinteraksi, `NPC` muncul, item diletakkan, atau jalur antar ruang dihubungkan. Struktur partisi juga membantu sistem permainan karena batas ruang menjadi lebih jelas. Misalnya, `pathfinding` dapat memanfaatkan koneksi antar `room`, dan perilaku agen dapat disesuaikan berdasarkan area yang sedang ditempati.

`BSP` sangat cocok untuk `dungeon` berbasis `room` karena menghasilkan tata letak yang rapi, mudah dibaca, dan relatif konsisten. Mahasiswa perlu memahami bahwa `BSP` bukan hanya soal menggambar garis pembagi, tetapi tentang membuat hierarki ruang yang kemudian bisa diisi, dihubungkan, dan dimanfaatkan oleh sistem level.

### Inti yang Harus Ditekankan

- **BSP** berarti **Binary Space Partitioning**, yaitu teknik membagi area secara rekursif menjadi sub-area yang lebih kecil.
- Setiap hasil pembagian dapat diisi dengan `room`, sehingga cocok untuk `dungeon` berbasis ruang.
- `BSP` memberi struktur level yang lebih teratur dibandingkan penempatan ruang secara acak.
- Proses `split` harus berhenti pada ukuran area yang dianggap cukup kecil untuk dijadikan ruang dasar.

### Transisi ke Slide Berikutnya

Selanjutnya, kita akan melihat ilustrasi `BSP` secara visual, mulai dari area awal, hasil `split` pertama, hingga pembagian berikutnya yang membentuk ruang-ruang kecil.

---

## Slide 027 - Ilustrasi BSP

### Narasi

Slide ini memperlihatkan **BSP** secara visual, yaitu bagaimana satu area besar dipotong menjadi beberapa area kecil secara bertahap. Tujuannya bukan langsung membuat room, tetapi membentuk struktur ruang yang rapi dan terkontrol. Dalam konteks **PCG for Level & Dungeon Generation**, langkah ini penting karena layout dungeon yang baik biasanya dimulai dari pembagian ruang, bukan dari penempatan room secara acak.

Secara intuisi, bayangkan area awal sebagai satu ruangan kosong yang belum memiliki struktur. Area ini kemudian dipotong dengan garis `split`, sehingga menjadi dua subarea. Potongan ini bisa vertikal atau horizontal, dan pada ilustrasi ini kita melihat `split` vertikal terlebih dahulu.

```text
Area awal:

+----------------+
|                |
|                |
|                |
+----------------+
```

Setelah `split` pertama, area besar menjadi dua bagian. Kedua bagian ini masih bisa dipotong lagi, tergantung aturan algoritma. Misalnya, salah satu area dipilih untuk dibagi lagi secara horizontal. Proses ini menunjukkan sifat **rekursif** dari BSP: setiap area yang masih memenuhi syarat bisa terus dipartisi.

```text
Split pertama:

+--------+---------+
|        |         |
|        |         |
|        |         |
+--------+---------+
```

Pada tahap berikutnya, salah satu subarea dipotong lagi. Hasilnya adalah area yang semakin kecil dan lebih siap digunakan sebagai tempat penempatan room. Perhatikan bahwa BSP tidak langsung menentukan bentuk room; ia hanya menentukan **ruang kandidat** untuk room.

```text
Split berikutnya:

+----+----+---------+
|    |    |         |
+----+----+         |
|        |         |
|        |         |
+--------+---------+
```

Untuk mahasiswa, hal penting yang harus dipahami adalah bahwa BSP bekerja dari **ruang besar ke ruang kecil**. Pola ini sangat berguna untuk dungeon berbasis room karena menghasilkan area yang tidak saling tumpang tindih dan lebih mudah dihubungkan. Setelah area-area kecil terbentuk, setiap area dapat diisi dengan room, lalu room-room tersebut dapat dihubungkan dengan koridor atau jalur.

Dalam implementasi game, hasil dari proses ini dapat menjadi dasar untuk penempatan NPC, spawn point, area loot, atau jalur pathfinding. Namun pada slide ini, fokus utamanya masih pada **ilustrasi proses partisi**, bukan pada struktur tree atau representasi data.

### Inti yang Harus Ditekankan

- **BSP** membagi area besar menjadi subarea kecil secara **rekursif**.
- Setiap `split` menghasilkan area baru yang masih bisa dipartisi lagi.
- Area hasil partisi berfungsi sebagai **ruang kandidat** untuk room.
- Ilustrasi ini menunjukkan alur visual: area awal, `split` pertama, lalu `split` berikutnya.
- BSP membantu menghasilkan layout dungeon yang rapi, terstruktur, dan siap untuk tahap penempatan room.

### Transisi ke Slide Berikutnya

Setelah kita melihat bagaimana area dipotong secara visual, langkah berikutnya adalah memahami bagaimana proses partisi ini direpresentasikan sebagai struktur data. Pada slide berikutnya, kita akan membahas **BSP Tree**, yaitu representasi hierarkis dari setiap area yang dihasilkan oleh proses BSP.

---

## Slide 028 - BSP Tree

### Narasi

Setelah proses split, hal penting yang perlu dipahami adalah bahwa **BSP** tidak hanya menghasilkan kumpulan rectangle. BSP juga menghasilkan **struktur tree** yang merepresentasikan riwayat pembagian area.

```text
Root Area
├── Left Area
│   ├── Left-Left
│   └── Left-Right
└── Right Area
    ├── Right-Left
    └── Right-Right
```

Di diagram ini, **Root Area** adalah area awal sebelum dipecah. Setiap kali sebuah area di-split, area tersebut menjadi node induk dan menghasilkan dua anak, misalnya `Left Area` dan `Right Area`.

Secara konseptual, node dalam tree dapat dibaca sebagai berikut:

- **Root Area**: area paling awal yang menjadi titik awal pembagian.
- **Internal node**: area yang masih memiliki anak karena masih dipecah.
- **Leaf node**: area terakhir yang tidak dibagi lagi.

Dalam konteks dungeon generation, **leaf node** adalah bagian yang paling penting. Setiap leaf dapat digunakan untuk membuat **room**, karena leaf sudah mewakili area final yang cukup kecil dan tidak akan dipecah lagi.

Struktur tree memberi keuntungan karena hubungan antar area tersimpan secara hierarkis. Mahasiswa dapat melacak dari mana sebuah room berasal, area mana yang bertetangga, dan bagaimana ruang-ruang tersebut terbentuk dari pembagian bertahap.

Untuk implementasi, setiap node mewakili sebuah area dan memiliki hubungan ke anak-anaknya. Saat leaf terbentuk, area leaf tersebut dapat digunakan sebagai dasar penempatan room.

Sebelum lanjut, pahami bahwa tree adalah representasi logis dari hasil split. Rectangle yang terlihat di layar adalah hasil visual, sedangkan tree adalah struktur data yang menyimpan organisasi ruang. Pemahaman ini penting karena langkah berikutnya akan menggunakan leaf untuk membuat room dan menghubungkannya.

### Inti yang Harus Ditekankan

- **BSP** menghasilkan **tree** dari proses split area.
- **Leaf node** adalah area terakhir yang tidak dipecah lagi.
- Setiap leaf dapat dijadikan **room** dalam dungeon.
- Struktur tree membantu melacak hierarki dan hubungan antar area.

### Transisi ke Slide Berikutnya

Dengan struktur tree ini, langkah berikutnya adalah menjalankan alur BSP dungeon: mulai dari rectangle besar, melakukan split, membuat room di leaf, lalu menghubungkannya dengan corridor.

---

## Slide 029 - Langkah BSP Dungeon

### Narasi

Pada slide ini, kita melihat **alur praktis** dari BSP untuk membuat dungeon. Intuisinya sederhana: alih-alih meletakkan room secara acak, kita mulai dari satu **area besar** lalu membaginya secara bertahap. Pembagian ini menghasilkan struktur yang lebih rapi, karena setiap ruang lahir dari hierarki area yang sudah terdefinisi.

```text
1. Mulai dari rectangle besar
2. Split horizontal atau vertical
3. Ulangi split sampai ukuran minimum
4. Buat room di setiap leaf
5. Hubungkan room antar leaf dengan corridor
6. Letakkan start dan goal
7. Spawn enemy dan item
```

Alur ini dapat dibaca sebagai pipeline: inputnya adalah `rectangle` awal, prosesnya adalah `split` berulang hingga mencapai `leaf`, lalu outputnya adalah kumpulan `room`, `corridor`, `start`, `goal`, `enemy`, dan `item`. Dengan kata lain, BSP tidak hanya menghasilkan bentuk ruang, tetapi juga **topologi dungeon** yang siap dipakai oleh sistem game.

Urutan langkah ini penting karena:

- `rectangle` besar menjadi batas dunia dungeon.
- `split` membentuk area-area yang lebih kecil dan terstruktur.
- `leaf` menjadi lokasi yang layak untuk menempatkan `room`.
- `corridor` memastikan dungeon tetap terhubung dan bisa dijelajahi.
- `start` dan `goal` memberi tujuan bagi pemain atau agent.
- `enemy` dan `item` mengisi ruang dengan konten gameplay.

Dalam konteks Game AI, dungeon yang dihasilkan BSP sangat berguna karena memberikan **environment yang konsisten** untuk NPC, pathfinding, dan decision making. Corridor yang menghubungkan room dapat diubah menjadi graph untuk pencarian jalur, sementara posisi `start`, `goal`, `enemy`, dan `item` dapat menjadi input bagi FSM, behavior tree, atau learning agent. Dibanding random walk, BSP cenderung menghasilkan dungeon yang lebih terstruktur dan lebih mudah dianalisis oleh sistem AI.

Sebelum lanjut, mahasiswa perlu memahami bahwa **room tidak muncul langsung dari split**, tetapi dari `leaf` yang sudah memenuhi ukuran minimum. Setelah itu, koneksi antar room dan penempatan konten gameplay menentukan apakah dungeon hanya terlihat rapi atau benar-benar bisa dimainkan.

### Inti yang Harus Ditekankan

- BSP dungeon dibangun dari **rectangle besar** yang di-split berulang hingga menjadi `leaf`.
- Setiap `leaf` dapat menjadi `room`, lalu dihubungkan dengan `corridor` agar dungeon terhubung.
- Penempatan `start`, `goal`, `enemy`, dan `item` dilakukan setelah struktur ruang terbentuk.
- BSP menghasilkan dungeon yang lebih terstruktur dibanding random walk, sehingga lebih cocok untuk pathfinding dan desain level.

### Transisi ke Slide Berikutnya

Selanjutnya kita akan membahas aturan apa yang menentukan kapan area di-split horizontal atau vertical, serta constraint yang menjaga ukuran area dan room tetap layak.

---

## Slide 030 - Split Rule pada BSP

### Narasi

Pada slide ini kita fokus pada **split rule** dalam BSP. Setelah area dungeon dibagi menjadi sub-area, keputusan berikutnya adalah apakah membaginya secara `horizontal` atau `vertical`. Pilihan ini menentukan bentuk ruang, keseimbangan layout, dan kualitas struktur level yang dihasilkan.

Secara intuitif, split yang baik membuat area tidak terlalu sempit atau terlalu panjang. Jika area terlalu lebar, split `vertical` membantu memotong lebar area. Jika area terlalu tinggi, split `horizontal` membantu memotong tinggi area. Jika proporsinya seimbang, baru pemilihan boleh dilakukan secara acak.

Acak tetap perlu aturan. Tanpa aturan, generator bisa menghasilkan `leaf` yang terlalu kecil, area yang tidak proporsional, atau ruang yang sulit digunakan. Karena itu, pemilihan split sebaiknya berbasis kondisi ukuran area, bukan hanya kebetulan.

Sebagai contoh sederhana, aturan pemilihan split dapat ditulis seperti ini:

```text
if width > height * ratio:
    split = vertical
elif height > width * ratio:
    split = horizontal
else:
    split = random(horizontal, vertical)
```

Variabel `width` dan `height` adalah ukuran area saat ini. `ratio` adalah ambang proporsi yang menentukan kapan area dianggap terlalu lebar atau terlalu tinggi. Jika `width` jauh lebih besar dari `height`, area dianggap terlalu lebar, sehingga split `vertical` lebih masuk akal. Sebaliknya, jika `height` jauh lebih besar, split `horizontal` dipilih.

Selain orientasi, ada **constraint** penting. Ukuran area setelah split tidak boleh terlalu kecil. Jika hasil split menghasilkan area yang lebih kecil dari batas minimum, split tersebut sebaiknya ditolak atau dipindahkan.

```text
if newWidth < minAreaSize or newHeight < minAreaSize:
    reject split
```

Constraint lain adalah area harus cukup untuk menampung `room` nanti. Pada tahap ini kita belum mendetailkan pembuatan room, tetapi keputusan split harus sudah memperhitungkan bahwa setiap `leaf` akan menjadi tempat room. Jika `leaf` terlalu sempit, room tidak akan muat atau layout menjadi tidak seimbang.

Untuk mahasiswa, hal penting yang harus dipahami adalah split rule bukan sekadar memilih arah secara acak. Aturan ini menjaga kualitas dungeon: area tetap proporsional, `leaf` layak digunakan, dan struktur level tetap mendukung penempatan room, koridor, serta pergerakan NPC atau pemain pada tahap berikutnya.

### Inti yang Harus Ditekankan

- Split BSP dapat dilakukan secara `horizontal` atau `vertical`, tetapi pemilihan arah harus diatur.
- Heuristik umum: area terlalu lebar di-split `vertical`, area terlalu tinggi di-split `horizontal`, area seimbang boleh dipilih acak.
- **Constraint** penting: area hasil split tidak boleh terlalu kecil dan harus cukup untuk menampung `room` di dalam `leaf`.

### Transisi ke Slide Berikutnya

Setelah aturan split menghasilkan `leaf` yang layak, langkah berikutnya adalah mengisi setiap `leaf` dengan `room`. Pada slide berikutnya kita akan membahas bagaimana room dibuat di dalam leaf beserta parameter ukurannya.

---

## Slide 031 - Room pada BSP

### Narasi

Slide ini membahas tahap setelah area dungeon dibagi menjadi **leaf** pada proses BSP. Pada tahap ini, setiap leaf tidak langsung menjadi ruang permainan, tetapi digunakan sebagai **batas aman** untuk menempatkan **room**. Intuisinya, leaf adalah “kotak” hasil pembagian area, sedangkan room adalah area yang benar-benar bisa dimasuki oleh player atau NPC.

Perhatikan diagram berikut:

```text
Leaf Area
┌──────────────┐
│              │
│   ┌──────┐   │
│   │Room  │   │
│   └──────┘   │
│              │
└──────────────┘
```

Pada diagram tersebut, **leaf** memiliki batas luar, dan di dalamnya terdapat **room** yang lebih kecil. Room tidak menempel ke tepi leaf. Jarak ini penting agar dinding, tile, atau batas level tidak terlalu rapat, dan agar agent memiliki ruang gerak yang wajar.

Penempatan room biasanya dikontrol oleh beberapa parameter penting:

- `minRoomSize`: ukuran minimum room agar ruang masih layak digunakan.
- `maxRoomSize`: ukuran maksimum room agar dungeon tidak terasa terlalu kosong atau kurang terstruktur.
- `roomMargin`: jarak minimum antara room dan batas leaf.

Parameter ini menentukan apakah sebuah leaf cukup besar untuk menampung room. Jika leaf terlalu kecil, room tidak dapat dibuat. Kondisi ini penting karena proses BSP dapat menghasilkan leaf dengan ukuran yang tidak merata. Mahasiswa perlu memahami bahwa pembuatan room harus disertai validasi: leaf harus cukup besar untuk menampung room beserta `roomMargin`.

Hubungan konsep ini dengan desain level dan perilaku agent cukup penting. Room menjadi unit ruang dasar yang nanti dapat digunakan untuk spawn NPC, menempatkan objek, atau menjadi area yang dilalui player. Namun, pada slide ini kita belum membahas cara menghubungkan room satu ke room lain. Yang perlu dipahami sekarang adalah bahwa room harus valid, terlokasi di dalam leaf, dan memiliki ukuran yang konsisten.

Sebelum lanjut, pahami tiga hal utama: **leaf adalah container**, **room adalah playable area**, dan **margin menjaga kualitas level**. Parameter room akan memengaruhi gameplay secara langsung: room terlalu kecil membuat ruang terasa sempit, room terlalu besar membuat dungeon kurang terstruktur, dan margin terlalu kecil membuat dinding terasa rapat.

### Inti yang Harus Ditekankan

- **Leaf BSP** menjadi batas aman untuk membuat room.
- Room harus diberi `roomMargin` agar tidak menempel ke tepi leaf.
- `minRoomSize`, `maxRoomSize`, dan `roomMargin` menentukan apakah room valid dan nyaman dimainkan.
- Room adalah dasar ruang untuk player atau NPC, tetapi koneksi antar-room dibahas pada slide berikutnya.

### Transisi ke Slide Berikutnya

Setiap room sudah berada di tempatnya, tetapi dungeon belum bisa dijelajahi secara utuh. Pada slide berikutnya, kita akan melihat bagaimana room dihubungkan dengan corridor agar agent dapat berpindah antar ruang.

---

## Slide 032 - Corridor pada BSP

### Narasi

Setelah **room** dibuat di dalam setiap leaf, langkah berikutnya adalah menghubungkan room tersebut. Tanpa penghubung, dungeon hanya berisi ruang-ruang terpisah yang tidak bisa dijelajahi secara utuh.

**Corridor** berfungsi sebagai jalur penghubung antar room. Dalam konteks dungeon generation, corridor bukan hanya elemen visual, tetapi bagian penting yang membuat level menjadi **navigable**. Jika room tidak terhubung, pemain atau NPC tidak dapat berpindah dari satu area ke area lain.

Cara sederhana untuk membuat corridor adalah dengan menghubungkan **center** dari dua room. Misalnya, ada `Room A` di sisi kiri dan `Room B` di sisi kanan. Kita dapat membuat jalur berbentuk **L** dengan dua pilihan urutan:

1. Gerak **horizontal** dulu dari `Room A` ke arah `Room B`, lalu gerak **vertical** sampai mencapai `Room B`.
2. Gerak **vertical** dulu dari `Room A`, lalu gerak **horizontal** sampai mencapai `Room B`.

Contoh bentuk corridor L dapat digambarkan seperti ini:

```text
Room A ───
          │
          └── Room B
```

Pilihan urutan **horizontal lalu vertical** atau **vertical lalu horizontal** akan menghasilkan bentuk jalur yang berbeda. Keduanya tetap valid, tetapi dapat memengaruhi tampilan dungeon, luas area yang terisi, dan rasa eksplorasi pemain.

Secara praktis, corridor membuat dungeon menjadi satu ruang yang dapat dilalui. Ini penting untuk **pathfinding**, pergerakan NPC, penempatan start dan goal, serta desain level yang bisa dimainkan. Tanpa konektivitas, struktur dungeon menjadi tidak fungsional meskipun room dan leaf sudah terbentuk dengan rapi.

Sebelum lanjut, mahasiswa perlu memahami bahwa corridor adalah langkah krusial setelah room dibuat. Corridor memastikan dungeon tidak hanya “terlihat seperti dungeon”, tetapi benar-benar dapat dijelajahi.

### Inti yang Harus Ditekankan

- **Corridor** menghubungkan room agar dungeon dapat dijelajahi.
- Cara sederhana adalah menghubungkan **center** dua room dengan jalur berbentuk **L**.
- Urutan pembuatan corridor dapat berupa **horizontal lalu vertical** atau **vertical lalu horizontal**.
- Corridor penting untuk **pathfinding**, pergerakan NPC, dan desain level yang fungsional.

### Transisi ke Slide Berikutnya

Dengan adanya room dan corridor, BSP mulai menghasilkan dungeon yang terstruktur dan dapat dimainkan. Selanjutnya, kita akan membahas kelebihan pendekatan BSP dalam menghasilkan level dungeon yang rapi dan mudah dikendalikan.

---

## Slide 033 - Kelebihan BSP

### Narasi

Pada slide ini, kita menilai **kelebihan** dan **kekurangan** teknik **BSP** setelah sebelumnya melihat bagaimana `room` dan `corridor` dibuat. Intuisi utamanya adalah **BSP** bekerja seperti proses memotong area dungeon menjadi bagian-bagian yang lebih kecil secara sistematis. Setiap potongan kemudian dapat diisi dengan ruang, lalu dihubungkan dengan koridor.

Kelebihan pertama adalah **BSP** sangat cocok untuk dungeon bertipe **room-corridor**. Karena area dibagi secara terstruktur, `room` cenderung memiliki batas yang jelas dan posisi yang mudah dibaca. Hal ini membantu perilaku NPC dan `pathfinding`, karena layout dungeon dapat dipikirkan sebagai rangkaian ruang yang saling terhubung.

Kelebihan berikutnya adalah **BSP** lebih terstruktur dan lebih mudah menjamin **konektivitas**. Jika setiap sub-area dijaga agar tetap terhubung, dungeon tidak mudah menghasilkan ruang yang terisolasi. Selain itu, penempatan `start` dan `goal` juga lebih mudah, misalnya pada dua ruang yang berada di sisi berbeda atau pada ruang yang cukup jauh secara spasial.

**BSP** juga cocok untuk desain level yang rapi dan mudah dibaca pemain. Struktur seperti ini berguna untuk level yang membutuhkan kejelasan jalur, progresi yang terkontrol, dan keseimbangan antara ruang terbuka serta koridor. Dalam konteks implementasi game, struktur hasil **BSP** dapat dipetakan ke `tilemap`, scene, atau graph yang digunakan untuk navigasi NPC.

Namun, **BSP** juga memiliki kekurangan. Hasilnya bisa terasa terlalu kotak dan kurang organik. Dibandingkan dengan pendekatan sederhana seperti `random walk`, implementasi **BSP** biasanya lebih kompleks karena membutuhkan `recursive data structure` dan aturan pembagian yang hati-hati, misalnya agar ruang tidak terlalu sempit atau tidak terlalu banyak cabang yang sulit dijelajahi.

Jadi, hal penting yang harus dipahami mahasiswa adalah **trade-off** dari **BSP**: teknik ini memberikan kontrol, keteraturan, dan konektivitas yang baik, tetapi mengorbankan kesan natural. Pilihan teknik generation bergantung pada target desain level: apakah dungeon ingin terasa rapi dan terstruktur, atau lebih liar dan organik.

### Inti yang Harus Ditekankan

- **BSP** unggul untuk dungeon **room-corridor** karena menghasilkan struktur yang jelas dan mudah dihubungkan.
- **Konektivitas** lebih mudah dijaga, sehingga `start` dan `goal` dapat ditempatkan dengan lebih terkontrol.
- Hasil **BSP** cenderung rapi dan terstruktur, tetapi bisa terasa terlalu kotak dan kurang organik.
- Implementasi **BSP** lebih kompleks dari `random walk` karena membutuhkan `recursive data structure` dan aturan pembagian ruang.

### Transisi ke Slide Berikutnya

Karena **BSP** menghasilkan layout yang rapi dan terstruktur, selanjutnya kita akan melihat teknik yang lebih cocok untuk menghasilkan bentuk yang lebih organik, yaitu **Cellular Automata**.

---

## Slide 034 - Cellular Automata

### Narasi

**Cellular automata** adalah teknik **grid generation** yang bekerja berdasarkan aturan tetangga. Dalam konteks pembuatan level, teknik ini memandang peta sebagai kumpulan `cell` yang saling bersebelahan. Setiap `cell` memiliki status, misalnya `wall` atau `floor`, dan status tersebut dapat berubah karena pengaruh lingkungan sekitarnya.

Intuisi pentingnya adalah bahwa keputusan tidak dibuat oleh satu aturan global yang merancang seluruh peta. Sebaliknya, setiap `cell` hanya melihat `neighbor` di sekitarnya. Dari interaksi lokal yang sederhana inilah pola besar dapat muncul, seperti lorong, ruang terbuka, atau dinding yang tampak alami.

```text
cell baru ditentukan oleh jumlah wall/floor di sekitarnya
```

Potongan aturan di atas menunjukkan inti prosesnya. Pada setiap langkah, kita menghitung berapa banyak `wall` dan `floor` di sekitar sebuah `cell`. Jika lingkungan sekitar didominasi `wall`, `cell` tersebut cenderung menjadi `wall`. Jika lingkungan sekitar didominasi `floor`, `cell` tersebut cenderung menjadi `floor`. Dengan cara ini, batas antara dinding dan lantai menjadi lebih halus dan bentuk peta menjadi lebih koheren.

Teknik ini cocok untuk:

- `cave generation`,
- `organic map`,
- `terrain roughness`,
- `natural-looking dungeon`.

Keunggulan utamanya adalah hasil yang tidak terasa terlalu kaku. Dibandingkan dengan pendekatan yang membangun ruang secara sangat terstruktur, **cellular automata** lebih mudah menghasilkan bentuk yang mirip gua, labirin alami, atau medan yang tidak terlalu geometris.

Untuk mahasiswa, hal yang perlu dipahami sebelum lanjut adalah bahwa **cellular automata** bukan sekadar mengisi grid secara acak. Yang penting adalah adanya **aturan lokal**, **status cell**, dan **pengaruh tetangga**. Ketiga hal ini menentukan apakah hasil akhirnya terasa organik, terlalu berpori, terlalu padat, atau terlalu halus.

### Inti yang Harus Ditekankan

- **Cellular automata** adalah teknik **grid generation** berbasis aturan tetangga.
- Setiap `cell` diperbarui berdasarkan jumlah `wall` atau `floor` di sekitarnya.
- Teknik ini cocok untuk `cave generation`, `organic map`, `terrain roughness`, dan `natural-looking dungeon`.
- Hasilnya cenderung lebih organik dan natural dibanding struktur yang terlalu rapi.

### Transisi ke Slide Berikutnya

Setelah memahami konsep dasarnya, kita akan melihat bagaimana grid awal dibuat dan bagaimana proses smoothing dimulai pada slide berikutnya.

---

## Slide 035 - Cellular Automata Awal

### Narasi

Pada tahap ini kita melihat **langkah awal** dari **cellular automata** untuk **procedural content generation** level atau dungeon. Intuisinya sederhana: sebelum bentuk gua atau ruangan muncul, kita mulai dari grid yang masih acak. Grid ini menjadi bahan dasar, seperti kanvas kosong yang belum dihaluskan.

Secara praktis, langkah awalnya dapat diringkas sebagai berikut:

1. Buat **grid** berukuran tertentu.
2. Isi setiap cell dengan nilai awal, misalnya `wall` atau `floor`.
3. Lakukan **smoothing** selama beberapa **iterasi**.

Penentuan nilai awal biasanya menggunakan **probability**, sehingga hasil setiap kali dijalankan bisa berbeda. Inilah salah satu kekuatan teknik ini untuk menghasilkan variasi level tanpa perlu mendesain semua map secara manual.

Contoh grid awal dapat digambarkan seperti berikut:

```text
# . # # .
. . # . #
# # . . .
. # # . #
# . . # .
```

Pada contoh ini, simbol `#` mewakili **wall**, sedangkan `.` mewakili **floor**. Grid seperti ini belum tentu terlihat seperti gua atau dungeon yang natural. Bentuknya masih pecah-pecah, tidak konsisten, dan belum memiliki struktur yang jelas.

Setelah grid acak terbentuk, langkah berikutnya adalah melakukan **smoothing** selama beberapa **iterasi**. Smoothing berarti setiap cell diperbarui berdasarkan kondisi cell di sekitarnya. Tujuannya adalah mengurangi bentuk yang terlalu acak dan membuat transisi antara `wall` dan `floor` menjadi lebih halus.

Yang perlu dipahami mahasiswa pada tahap ini adalah bahwa **cellular automata** tidak langsung menghasilkan map final. Ia bekerja bertahap: mulai dari keadaan acak, lalu dihaluskan berulang kali hingga pola yang lebih natural terbentuk. Aturan detail untuk menghitung tetangga dan menentukan kapan cell menjadi `wall` atau `floor` akan dibahas pada bagian berikutnya.

### Inti yang Harus Ditekankan

- **Cellular automata** dimulai dari grid acak yang berisi `wall` dan `floor`.
- Nilai awal cell biasanya ditentukan berdasarkan **probability**.
- Simbol `#` menunjukkan **wall**, sedangkan `.` menunjukkan **floor**.
- **Smoothing** dilakukan beberapa kali agar bentuk grid menjadi lebih natural.
- Tahap ini masih berupa awal proses, bukan aturan final untuk menentukan bentuk gua atau dungeon.

### Transisi ke Slide Berikutnya

Setelah kita memahami bagaimana grid awal dibuat dan mengapa smoothing diperlukan, langkah berikutnya adalah menentukan bagaimana setiap cell melihat tetangganya. Pada slide berikutnya kita akan membahas **neighbor count** dan aturan sederhana yang digunakan untuk memperbarui cell.

---

## Slide 036 - Neighbor Count

### Narasi

Pada slide ini, kita masuk ke aturan inti **Cellular Automata** untuk membentuk cave atau dungeon.

Ide utamanya sederhana: setiap cell tidak memutuskan dirinya sendiri secara acak, melainkan melihat lingkungan sekitarnya.

Untuk setiap cell, kita hitung jumlah **wall** di sekitar cell tersebut. Posisi cell yang sedang diperiksa biasanya ditandai sebagai `X`, dan tetangganya ada di 8 arah:

```text
NW N NE
W  X  E
SW S SE
```

Artinya, satu cell dipengaruhi oleh tetangga atas, bawah, kiri, kanan, dan keempat diagonalnya.

Contoh rule yang digunakan adalah:

```text
Jika jumlah wall neighbor >= 5
    cell menjadi wall
Else
    cell menjadi floor
```

Aturan ini berarti: jika mayoritas tetangga cell adalah `wall`, maka cell tersebut juga menjadi `wall`.

Sebaliknya, jika jumlah `wall` di sekitarnya kurang dari 5, cell menjadi `floor`.

Efeknya, noise kecil pada grid awal mulai berkurang. Cell yang terisolasi cenderung berubah mengikuti tetangga di sekitarnya.

Hasilnya, batas antara `wall` dan `floor` menjadi lebih halus, dan bentuk cave terasa lebih natural.

Dalam konteks game, proses ini penting karena layout level menentukan ruang gerak pemain dan NPC.

Area `floor` menjadi jalur yang bisa dilalui, sedangkan `wall` menjadi penghalang yang memengaruhi pathfinding, navigasi, dan desain dungeon.

Yang perlu dipahami mahasiswa sebelum lanjut adalah: **neighbor count** adalah aturan lokal.

Setiap cell hanya melihat tetangga terdekat, tetapi dari banyak keputusan lokal inilah struktur global terbentuk.

### Inti yang Harus Ditekankan

- **Neighbor count** menghitung jumlah `wall` pada 8 tetangga sekitar sebuah cell.
- Rule `>= 5` membuat cell menjadi `wall`, sedangkan kondisi lain membuat cell menjadi `floor`.
- Aturan lokal sederhana ini membantu mengubah grid acak menjadi bentuk cave yang lebih natural dan berguna sebagai lingkungan game.

### Transisi ke Slide Berikutnya

Setelah aturan dasar ini dipahami, langkah berikutnya adalah melihat bagaimana aturan ini dijalankan berulang kali untuk menghasilkan cave yang semakin halus.

---

## Slide 037 - Iterasi Cellular Automata

### Narasi

Pada slide ini, kita masuk ke tahap penting dalam **Cellular Automata** untuk **PCG** level atau dungeon: **iterasi**. Setelah grid awal dibuat secara acak, proses iterasi dilakukan berulang kali untuk mengubah pola acak menjadi bentuk cave yang lebih natural. Intuisinya sederhana: satu langkah hanya memperbaiki bentuk lokal, tetapi beberapa langkah membuat dinding dan lantai menyatu menjadi ruang yang lebih konsisten.

Setiap iterasi bekerja dengan prinsip **simultaneous update**. Artinya, semua cell membaca kondisi dari **grid lama**, bukan dari grid yang sedang diubah. Alurnya dapat dirangkum sebagai berikut:

1. Baca seluruh kondisi `grid` lama.
2. Untuk setiap cell, hitung jumlah neighbor wall menggunakan aturan yang sudah dibahas.
3. Tentukan nilai cell pada `newGrid` berdasarkan threshold, misalnya `wallThreshold`.
4. Setelah semua cell selesai diproses, `newGrid` menggantikan `grid` lama.

Prinsip ini penting karena jika kita mengubah grid secara langsung saat masih membaca neighbor, hasil akan bergantung pada urutan pemeriksaan cell. Dengan menggunakan grid baru, setiap cell mendapat perlakuan yang adil dan proses menjadi lebih stabil.

Contoh visualnya adalah sebagai berikut:

```text
Random grid
    ↓ iteration 1
More structured grid
    ↓ iteration 2
Smoother cave
    ↓ iteration 3
Final cave
```

Pada iterasi pertama, grid acak mulai membentuk kelompok dinding dan lantai. Pada iterasi berikutnya, tepi-epi yang tajam menjadi lebih halus, ruang kecil yang tidak stabil dapat hilang, dan koridor atau chamber mulai terlihat lebih natural. Semakin banyak iterasi, hasil semakin halus, tetapi perlu diperhatikan bahwa terlalu banyak iterasi dapat membuat bentuk terlalu sederhana atau kehilangan variasi.

Dalam konteks game, hasil iterasi ini menjadi dasar **level generation**. Cave yang dihasilkan dapat dipakai sebagai environment untuk NPC, pathfinding, atau desain dungeon. Dengan kata lain, Cellular Automata membantu menciptakan ruang bermain yang terasa seperti dibuat secara organik, bukan sekadar kotak-kotak acak.

Sebelum lanjut, mahasiswa perlu memahami bahwa iterasi adalah proses **update berulang** dari grid lama ke grid baru. Konsep ini menjadi dasar untuk pseudocode yang akan dibahas berikutnya.

### Inti yang Harus Ditekankan

- **Iterasi** membuat pola acak menjadi cave yang lebih natural.
- Setiap iterasi harus membaca **grid lama** dan menulis ke **grid baru** agar update bersifat simultan.
- Jumlah iterasi memengaruhi **smoothness** hasil; semakin banyak, bentuk semakin halus.
- Hasil PCG ini dapat menjadi environment untuk NPC, pathfinding, dan desain dungeon.

### Transisi ke Slide Berikutnya

Setelah memahami alur iterasi, langkah berikutnya adalah menuliskannya sebagai pseudocode yang lebih eksplisit, lengkap dengan parameter yang mengatur proses smoothing.

---

## Slide 038 - Pseudocode Cellular Automata

### Narasi

Pseudocode ini menunjukkan bagaimana proses iterasi yang sudah dibahas sebelumnya dapat diimplementasikan sebagai algoritma sederhana. Intuisi utamanya adalah: grid acak tidak langsung menjadi dungeon; ia perlu dihaluskan beberapa kali berdasarkan aturan lokal.

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

Secara eksekusi, algoritma berjalan dalam beberapa tahap:

1. `for iteration from 0 to smoothCount` mengontrol jumlah langkah penghalusan.
2. `newGrid = copy grid` membuat salinan grid agar keputusan setiap sel tidak saling mengganggu dalam iterasi yang sama.
3. `for each cell` memeriksa satu sel pada satu waktu.
4. `wallCount = count wall neighbors` menghitung tetangga yang berupa dinding.
5. Jika `wallCount >= wallThreshold`, sel menjadi `wall`; jika tidak, sel menjadi `floor`.
6. `grid = newGrid` mengganti grid lama dengan hasil baru, lalu iterasi berikutnya dimulai.

Penting untuk dipahami bahwa aturan ini bersifat **lokal**. Setiap sel hanya melihat tetangganya, bukan seluruh peta. Karena itu, pola besar seperti lorong, ruang, atau dinding muncul secara emergent dari banyak keputusan kecil.

Tiga parameter utama yang perlu diperhatikan adalah:

- `initialWallProbability`: menentukan seberapa banyak dinding pada grid awal.
- `wallThreshold`: menentukan ambang batas agar sel tetap menjadi dinding.
- `smoothCount`: menentukan berapa kali iterasi penghalusan dilakukan.

Nilai `wallThreshold` memengaruhi bentuk hasil. Jika ambang terlalu tinggi, banyak sel menjadi dinding sehingga peta tampak padat. Jika ambang terlalu rendah, banyak sel menjadi lantai sehingga hasil bisa terlalu terbuka. `smoothCount` yang lebih besar membuat transisi antara dinding dan lantai lebih halus, tetapi juga bisa mengurangi detail kecil.

Dalam konteks pembuatan level, pseudocode ini menjadi dasar untuk menghasilkan dungeon atau cave yang terlihat natural. Mahasiswa perlu memahami bahwa parameter ini bukan sekadar angka, melainkan alat desain: mengubahnya akan mengubah karakter level yang dihasilkan.

### Inti yang Harus Ditekankan

- Pseudocode Cellular Automata bekerja dengan **iterasi penghalusan** pada grid 2D.
- Setiap sel diputuskan berdasarkan `wallCount` dan `wallThreshold`, bukan berdasarkan aturan global.
- `initialWallProbability`, `wallThreshold`, dan `smoothCount` adalah parameter utama yang memengaruhi hasil dungeon.
- Grid baru dibuat dari salinan grid lama agar setiap iterasi konsisten dan tidak terpengaruh perubahan parsial.

### Transisi ke Slide Berikutnya

Setelah memahami cara kerja pseudocode-nya, langkah berikutnya adalah menilai mengapa pendekatan ini berguna dan apa batasannya dalam pembuatan level.

---

## Slide 039 - Kelebihan Cellular Automata

### Narasi

Setelah melihat pseudocode-nya, kita perlu menilai kapan **cellular automata** layak digunakan untuk membuat level. Intuisi utamanya sederhana: aturan lokal yang diulang beberapa kali dapat menghasilkan bentuk yang tampak organik, mirip gua, tanpa perlu mendesain setiap dinding secara manual.

Kelebihan utama **cellular automata** dapat dilihat dari beberapa sisi:

- **Hasil natural** — bentuk dinding dan lorong terlihat lebih organik dibandingkan grid kotak-kotak yang dibuat manual.
- **Cocok untuk cave** — sangat sesuai untuk tema gua, gua bawah tanah, atau area eksplorasi yang tidak terlalu terstruktur.
- **Mudah dikombinasikan dengan random fill** — tahap awal pengisian acak dapat menghasilkan variasi level yang berbeda setiap kali dijalankan.
- **Aturan sederhana** — logika intinya hanya menghitung tetangga dan mengubah sel berdasarkan ambang tertentu.
- **Parameter mudah dieksperimenkan** — nilai seperti `initialWallProbability`, `wallThreshold`, dan `smoothCount` dapat diubah untuk mengatur kepadatan dinding dan halus bentuk gua.

Dari sisi desain game, kelebihan ini penting karena bentuk level memengaruhi banyak hal. Lorong yang berkelok dapat menciptakan jalur alternatif, area sembunyi, dan variasi rute bagi NPC atau pemain. Bentuk yang natural juga membuat dungeon terasa lebih hidup, bukan sekadar kotak-kotak yang kaku.

Namun, **cellular automata** juga memiliki keterbatasan yang harus dipahami:

- **Area bisa terputus** — beberapa bagian gua dapat terpisah dan tidak dapat dicapai dari bagian lain.
- **Start dan goal tidak selalu terhubung** — titik awal dan tujuan mungkin berada di region yang berbeda.
- **Sulit menghasilkan room rapi** — bentuknya cenderung organik, sehingga kurang cocok jika desain membutuhkan ruangan persegi yang jelas.
- **Perlu validasi dan koneksi antar area** — hasil generasi harus diperiksa agar level benar-benar dapat dimainkan.

Karena itu, mahasiswa perlu memahami bahwa **cellular automata** sangat kuat untuk menghasilkan bentuk gua yang natural, tetapi tidak otomatis menghasilkan level yang valid secara gameplay. Sebelum lanjut, hal penting yang harus diingat adalah: hasil generasi harus selalu dicek dari sisi keterhubungan, terutama untuk `start`, `goal`, dan area yang dapat dijelajahi.

### Inti yang Harus Ditekankan

- **Cellular automata** menghasilkan bentuk level yang natural dan cocok untuk tema cave.
- Aturan dan parameternya sederhana, sehingga mudah diuji dan divariasikan.
- Kekurangan utamanya adalah area bisa terputus, sehingga level perlu divalidasi agar `start` dan `goal` terhubung.

### Transisi ke Slide Berikutnya

Karena **cellular automata** sering menghasilkan beberapa area yang terpisah, slide berikutnya akan membahas cara menghubungkan area-area tersebut agar level benar-benar dapat dimainkan.

---

## Slide 040 - Menghubungkan Area Cellular Automata

### Narasi

Pada slide ini kita fokus pada masalah praktis setelah cave dibuat: area yang dihasilkan **cellular automata** sering terpecah menjadi beberapa kantong. Secara visual mungkin menarik, tetapi untuk gameplay, NPC, pathfinding, dan penempatan objek, area harus bisa dilalui dari satu titik ke titik lain. Intuisi sederhananya, sebelum kita memikirkan musuh, item, atau boss, kita harus memastikan peta sudah memiliki ruang utama yang terhubung.

Alur perbaikan yang digunakan adalah sebagai berikut:

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

Tahap pertama, `Generate Cave`, membuat grid awal dari sel terbuka dan tertutup. Tahap berikutnya, `Find Regions`, mencari kumpulan sel terbuka yang saling terhubung. Biasanya ini dilakukan dengan **flood fill**, yang menandai setiap sel dengan `region_id` yang sama. Dengan begitu kita tahu mana area yang satu kelompok dan mana yang terpisah.

Solusinya dapat dirangkum sebagai berikut:

1. Gunakan `flood_fill` untuk menemukan **region** terbuka.
2. Pilih **region terbesar** sebagai ruang utama.
3. Hapus region kecil atau jadikan area terpisah.
4. Hubungkan region yang masih penting dengan `corridor`.
5. Lakukan `regenerate` jika hasil akhir tidak valid.

Setelah region diketahui, langkah `Keep Largest Region` memilih region terbesar sebagai ruang utama. Region kecil bisa dihapus, dijadikan ruang terpisah, atau dibiarkan sebagai area bonus. Untuk level sederhana, memilih region terbesar sering lebih stabil karena mengurangi risiko `start` dan `goal` berada di kantong yang tidak terhubung.

Jika masih ada beberapa region penting, tahap `Connect Regions` menambahkan `corridor` di antara titik-titik yang dipilih. Corridor biasanya berupa jalur lurus atau L-shaped yang mengukir sel-sel tertutup menjadi terbuka. Fungsi seperti `carve_corridor` cukup penting karena ia mengubah peta dari beberapa kantong menjadi satu jaringan yang bisa dilalui.

Baru setelah peta terhubung, tahap `Place Start and Goal` dilakukan. Penempatan `start` dan `goal` sebaiknya divalidasi dengan `is_connected` atau pathfinding sederhana. Jika validasi gagal, proses bisa `regenerate` atau memperbaiki koneksi. Urutan ini penting: jangan menempatkan `start` dan `goal` sebelum kita yakin regionnya terhubung.

Yang harus dipahami mahasiswa sebelum lanjut adalah bahwa **connectivity** adalah prasyarat. Tanpa area terhubung, `pathfinding` tidak akan menemukan jalur, NPC tidak bisa bergerak antar ruang, dan level tidak siap untuk aturan desain yang lebih kompleks. Pada slide ini kita baru memastikan peta bisa dipakai; aturan desain yang lebih ketat akan dibahas setelahnya.

### Inti yang Harus Ditekankan

- **Flood fill** digunakan untuk menemukan **region** terbuka yang terhubung.
- **Region terbesar** dipilih sebagai ruang utama agar level lebih stabil.
- **Corridor** menghubungkan region yang masih terpisah sebelum `start` dan `goal` ditempatkan.
- Validasi koneksi penting; jika gagal, proses dapat `regenerate`.

### Transisi ke Slide Berikutnya

Setelah area terhubung, langkah berikutnya adalah memastikan level tidak hanya bisa dilalui, tetapi juga memenuhi aturan desain. Pada slide berikutnya kita akan melihat bagaimana constraint digunakan untuk mengarahkan hasil generation.

---

## Slide 041 - Constraint-Based Generation

### Narasi

Slide ini memperkenalkan **constraint-based generation**, yaitu pendekatan PCG yang tidak hanya menghasilkan layout acak, tetapi memaksa hasil akhir memenuhi aturan desain. Setelah tahap sebelumnya memastikan area terhubung, slide ini menambahkan lapisan aturan agar level tidak hanya terbentuk, tetapi juga sesuai dengan kebutuhan gameplay.

Constraint berfungsi seperti syarat validasi. Beberapa contoh yang ditampilkan pada slide adalah:

```text
Start harus jauh dari goal.
Goal harus dapat dicapai dari start.
Boss room harus berada di area terdalam.
Enemy tidak boleh dekat start.
Treasure harus berada di dead-end.
Setiap room harus terhubung.
```

Constraint pertama dan kedua berkaitan dengan **pathfinding** dan ketercapaian. Jika `goal` tidak dapat dicapai dari `start`, level secara teknis gagal meskipun secara visual terlihat menarik. Karena itu, generator biasanya perlu melakukan pengecekan konektivitas sebelum level dianggap valid.

Constraint seperti `Boss room harus berada di area terdalam` dan `Treasure harus berada di dead-end` menunjukkan bahwa PCG tidak hanya memikirkan bentuk peta, tetapi juga **desain progresi**. Posisi boss atau treasure memengaruhi eksplorasi pemain, risiko, dan reward. Dalam implementasi game, aturan ini dapat menjadi bagian dari validasi level, scoring, atau proses regenerasi jika layout tidak memenuhi target.

Constraint `Enemy tidak boleh dekat start` juga berhubungan dengan **NPC behavior** dan pengalaman awal pemain. Spawn yang terlalu dekat dapat membuat pemain langsung menghadapi tekanan sebelum memahami kontrol atau lingkungan. Dengan constraint, posisi spawn dapat diatur agar sesuai dengan kurva kesulitan, area aman, atau tujuan desain misi.

Intuisi praktisnya adalah: generator acak memberi variasi, constraint memberi arah. Tanpa constraint, hasil bisa acak dan tidak konsisten. Dengan constraint, setiap level tetap unik tetapi masih berada dalam batas desain yang dapat dimainkan. Mahasiswa perlu memahami bahwa constraint bukan sekadar dekorasi, melainkan mekanisme yang menentukan kualitas output PCG.

### Inti yang Harus Ditekankan

- **Constraint-based generation** menghasilkan konten dengan aturan yang harus dipenuhi, bukan hanya acak.
- Constraint memastikan level valid secara gameplay: ketercapaian, progresi, spawn, dan reward.
- Constraint berperan sebagai validasi atau filter terhadap hasil generation, sehingga output tetap sesuai desain.

### Transisi ke Slide Berikutnya

Setelah memahami peran constraint, pada slide berikutnya kita akan membedakan constraint dengan parameter, yaitu nilai yang mengatur proses generation.

---

## Slide 042 - Constraint vs Parameter

### Narasi

Pada slide ini kita membedakan dua hal yang sering tertukar dalam **PCG for Level & Dungeon Generation**: **parameter** dan **constraint**. Keduanya sama-sama memengaruhi hasil level, tetapi posisinya berbeda. Parameter berada di sisi proses pembuatan, sedangkan constraint berada di sisi penilaian hasil.

Secara intuitif, parameter adalah "pengatur mesin generator". Nilai ini menentukan bagaimana algoritma membangun level, misalnya berapa banyak ruang yang dibuat, seberapa besar peluang dinding muncul, atau berapa ukuran grid.

Contoh parameter:

```text
roomCount = 8
wallProbability = 0.35
mapWidth = 50
```

Nilai `roomCount = 8` memberi tahu generator bahwa level sebaiknya memiliki sekitar delapan ruang. Nilai `wallProbability = 0.35` mengatur seberapa sering sel tertentu menjadi dinding. Nilai `mapWidth = 50` menentukan lebar peta. Parameter tidak langsung menjamin level bagus; ia hanya membentuk proses generation.

Constraint berbeda. Constraint adalah syarat yang harus dipenuhi oleh level setelah dibuat. Ia bekerja seperti validator atau quality gate.

Contoh constraint:

```text
Start terhubung ke goal.
Jumlah floor minimal 30%.
Enemy tidak spawn dekat start.
```

Constraint pertama memastikan pemain bisa mencapai tujuan, yang juga penting untuk pathfinding NPC atau validasi level. Constraint kedua menjaga agar level tidak terlalu tertutup. Constraint ketiga menjaga fairness gameplay, karena spawn musuh terlalu dekat dengan start dapat membuat pengalaman awal tidak seimbang.

Perbedaan utamanya dapat diringkas sebagai berikut:

- **Parameter** mengatur **cara membuat** level.
- **Constraint** mengatur **kualitas hasil** level.
- Parameter biasanya berupa nilai numerik atau konfigurasi generator.
- Constraint biasanya berupa aturan yang dapat dicek setelah level dihasilkan.

Dalam implementasi, generator dapat dijalankan dengan parameter tertentu, lalu hasil level diperiksa terhadap constraint. Jika constraint tidak terpenuhi, level dapat ditolak, diperbaiki, atau di-generate ulang. Pola ini penting agar PCG tidak hanya menghasilkan peta acak, tetapi peta yang layak dimainkan.

Sebelum lanjut, mahasiswa perlu memahami bahwa parameter dan constraint bukan pengganti satu sama lain. Parameter yang baik tanpa constraint dapat menghasilkan level yang tidak valid. Constraint yang kuat tanpa parameter yang tepat dapat membuat generator sulit menemukan solusi. Keduanya harus dirancang bersama.

### Inti yang Harus Ditekankan

- **Parameter** adalah nilai konfigurasi yang mengatur proses generation, seperti `roomCount`, `wallProbability`, dan `mapWidth`.
- **Constraint** adalah syarat yang harus dipenuhi hasil akhir, seperti konektivitas start-goal, rasio floor, dan jarak spawn musuh.
- Parameter menentukan **bagaimana level dibuat**, sedangkan constraint menentukan **apakah level layak diterima**.
- Dalam PCG, generator dan validator bekerja berurutan: parameter membentuk level, constraint memeriksa kualitas level.

### Transisi ke Slide Berikutnya

Setelah memahami perbedaan parameter dan constraint, langkah berikutnya adalah membedakan jenis constraint itu sendiri. Slide berikutnya akan membahas **hard constraint** dan **soft constraint**, yaitu constraint yang wajib dipenuhi dan constraint yang hanya diinginkan agar hasil lebih optimal.

---

## Slide 043 - Hard Constraint dan Soft Constraint

### Narasi

Setelah membedakan **parameter** dan **constraint**, langkah berikutnya adalah mengelompokkan constraint berdasarkan tingkat kewajibannya. Dalam PCG untuk level atau dungeon, tidak semua syarat memiliki konsekuensi yang sama. Ada syarat yang menentukan apakah level **valid**, dan ada syarat yang menentukan apakah level **baik**.

**Hard constraint** adalah syarat yang harus dipenuhi. Contoh paling sederhana adalah:

```text
Start harus terhubung ke goal.
```

Artinya, jika hasil generation tidak memiliki jalur dari titik awal ke tujuan, level tersebut tidak dapat dianggap layak. Dalam konteks game, kegagalan ini bisa membuat pemain tidak bisa melanjutkan, NPC tidak dapat mencapai target, atau `pathfinding` tidak menghasilkan rute yang valid. Karena itu, hard constraint bekerja seperti gerbang validitas: lolos atau tidak.

Jika hard constraint gagal, konsekuensinya tegas:

```text
level ditolak
```

Level tidak perlu dinilai lebih lanjut dari sisi estetika, jarak, atau variasi, karena secara fungsional sudah tidak memenuhi syarat minimum.

**Soft constraint** berbeda. Soft constraint adalah kondisi yang diinginkan, tetapi tidak wajib. Contoh yang diberikan adalah:

```text
Goal sebaiknya sejauh mungkin dari start.
```

Syarat ini tidak membuat level menjadi tidak valid jika tidak terpenuhi. Level tetap dapat diterima, meskipun kualitasnya mungkin kurang optimal. Soft constraint lebih berperan sebagai preferensi desain, misalnya untuk membuat dungeon terasa lebih menantang, memberi jarak eksplorasi, atau mengatur pacing pemain.

Perbedaan utamanya terletak pada fungsi. **Hard constraint** menjaga validitas level, sedangkan **soft constraint** menjaga kualitas level. Hard constraint biasanya diperiksa sebagai kondisi benar atau salah. Soft constraint lebih cocok dipandang sebagai ukuran preferensi, karena hasilnya bisa lebih baik atau kurang baik, tetapi tidak otomatis membatalkan level.

Sebelum lanjut, mahasiswa perlu memahami bahwa dalam generation level, **reachability** sering menjadi hard constraint karena menyangkut kelangsungan gameplay. Sementara itu, jarak, variasi, atau kenyamanan desain sering masuk ke soft constraint karena memengaruhi pengalaman, tetapi tidak menentukan apakah level bisa dimainkan.

### Inti yang Harus Ditekankan

- **Hard constraint** bersifat wajib; jika gagal, level ditolak.
- **Soft constraint** bersifat preferensi; jika tidak optimal, level masih dapat diterima.
- Contoh kunci: `Start harus terhubung ke goal` adalah hard constraint, sedangkan `Goal sebaiknya sejauh mungkin dari start` adalah soft constraint.

### Transisi ke Slide Berikutnya

Dengan memahami perbedaan ini, kita dapat melihat bagaimana hard dan soft constraint digunakan bersama dalam alur generation yang lebih formal.

---

## Slide 044 - Constraint-Based Pipeline

### Narasi

Slide ini menunjukkan bagaimana **constraint-based pipeline** bekerja dalam proses pembuatan level. Intuisi praktisnya adalah sistem tidak langsung mempercayai hasil generate, melainkan melewati serangkaian tahap pemeriksaan dan penilaian sebelum level dianggap siap digunakan.

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

Tahap pertama adalah `Generate Candidate Level`. Pada tahap ini sistem menghasilkan satu atau beberapa kandidat level. Kandidat ini masih berupa hasil awal, sehingga belum tentu memenuhi semua syarat yang dibutuhkan untuk permainan.

Selanjutnya, kandidat melewati `Check Hard Constraints`. Tahap ini berfungsi sebagai gerbang validasi. Jika kandidat melanggar **hard constraint**, maka level tersebut tidak boleh dilanjutkan ke tahap berikutnya. Sistem dapat memilih `regenerate` untuk membuat kandidat baru, atau `repair` untuk memperbaiki bagian yang bermasalah tanpa harus mengulang seluruh proses.

Setelah kandidat lolos dari pemeriksaan hard constraint, sistem masuk ke tahap `Score Soft Constraints`. Di sini, kualitas level dinilai berdasarkan preferensi desain, bukan syarat mutlak. Setiap kandidat dapat memperoleh skor, sehingga sistem dapat membandingkan beberapa hasil yang sama-sama valid.

Tahap berikutnya adalah `Pilih level terbaik`. Dari kandidat yang valid dan telah diberi skor, sistem memilih level dengan kualitas terbaik menurut kriteria yang telah ditentukan. Pilihan ini penting karena pipeline tidak hanya mencari level yang "bisa dimainkan", tetapi juga level yang lebih sesuai dengan tujuan desain.

Terakhir, tahap `Build Level` mengubah level terpilih menjadi representasi yang dapat digunakan dalam game. Pada tahap ini, data level diwujudkan menjadi scene, tile, objek, atau struktur lain yang siap dipakai oleh sistem permainan.

Pendekatan ini mirip dengan **generate-and-test**, tetapi lebih formal karena tahap test tidak hanya menerima atau menolak, melainkan juga memisahkan validitas dari kualitas. Mahasiswa perlu memahami bahwa **hard constraint** menentukan apakah level layak, sedangkan **soft constraint** menentukan seberapa baik level tersebut.

### Inti yang Harus Ditekankan

- **Constraint-based pipeline** adalah alur sistematis: generate, validasi, penilaian, seleksi, dan build.
- **Hard constraint** berfungsi sebagai syarat mutlak; jika gagal, kandidat harus `regenerate` atau `repair`.
- **Soft constraint** berfungsi sebagai kriteria kualitas; kandidat yang lolos hard constraint kemudian diberi skor.
- Hasil akhir bukan sekadar level acak, tetapi level yang valid dan terpilih berdasarkan preferensi desain.

### Transisi ke Slide Berikutnya

Setelah alur umum pipeline ini dipahami, langkah berikutnya adalah melihat contoh constraint yang lebih konkret untuk dungeon, sehingga mahasiswa dapat membayangkan bagaimana aturan validitas dan kualitas diterapkan pada struktur level yang nyata.

---

## Slide 045 - Contoh Constraint untuk Dungeon

### Narasi

Slide ini menunjukkan contoh konkret **constraint** yang biasanya digunakan dalam **PCG** untuk dungeon. Setelah pipeline constraint-based menghasilkan kandidat level, sistem perlu menilai apakah level tersebut layak dimainkan dan apakah kualitasnya cukup baik.

**Hard constraints** adalah aturan yang tidak boleh dilanggar. Jika salah satu gagal, level dianggap tidak valid. Contoh yang ditampilkan:

- semua `room` terhubung,
- `start` dan `goal` valid,
- ada path dari `start` ke `goal`,
- `boss room` dapat dicapai,
- tile `start` bukan `wall`.

Constraint ini penting karena menyangkut **playability** dasar. Jika `start` berada di `wall`, pemain atau NPC tidak bisa memulai. Jika tidak ada path ke `goal`, pathfinding tidak akan menemukan rute yang valid. Jika `boss room` tidak terjangkau, progres permainan menjadi rusak.

**Soft constraints** berbeda. Aturan ini tidak menentukan valid atau tidak, tetapi menentukan apakah level lebih baik atau lebih buruk. Contoh:

- `goal` jauh dari `start`,
- `enemy` tersebar merata,
- `treasure` berada di area samping,
- `corridor` tidak terlalu panjang,
- level tidak terlalu linear.

Soft constraints biasanya dinilai dengan skor. Misalnya, jarak `start`-`goal` yang terlalu pendek bisa membuat dungeon terasa kurang menantang. Distribusi `enemy` yang tidak merata bisa membuat satu area terlalu mudah atau terlalu sulit. Corridor yang terlalu panjang dapat memperlambat eksplorasi, sedangkan level yang terlalu linear mengurangi rasa menemukan jalur alternatif.

Dalam konteks pipeline, hard constraints diperiksa lebih dulu. Jika kandidat gagal, sistem bisa melakukan regenerate atau repair. Setelah valid, soft constraints digunakan untuk memilih level terbaik. Dengan cara ini, generator tidak hanya membuat dungeon yang “bisa dimainkan”, tetapi juga dungeon yang lebih seimbang dan menarik.

Sebelum lanjut, mahasiswa perlu memahami bahwa constraint adalah cara formal untuk menyaring hasil PCG. Hard constraints menjaga legalitas level, sedangkan soft constraints menjaga kualitas desain.

### Inti yang Harus Ditekankan

- **Hard constraints** menentukan apakah dungeon valid: semua `room` terhubung, `start`/`goal` valid, path ada, `boss room` terjangkau, dan `start` bukan `wall`.
- **Soft constraints** menentukan kualitas dungeon: jarak `start`-`goal`, distribusi `enemy`, penempatan `treasure`, panjang `corridor`, dan tingkat linearitas.
- Hard constraints harus dipenuhi terlebih dahulu; soft constraints digunakan untuk memberi skor dan memilih kandidat terbaik.
- Contoh constraint ini membantu menghubungkan PCG dengan pathfinding, NPC behavior, dan desain level yang playable.

### Transisi ke Slide Berikutnya

Jika kandidat dungeon gagal memenuhi hard constraints, langkah berikutnya bukan selalu generate ulang. Slide berikutnya akan membahas **repair strategy**, yaitu cara memperbaiki level yang tidak valid agar tetap bisa digunakan.

---

## Slide 046 - Repair Strategy

### Narasi

Dalam **PCG for Level & Dungeon Generation**, hasil generate tidak selalu langsung valid. Level mungkin sudah memiliki struktur dungeon yang menarik, tetapi masih melanggar **hard constraint** seperti konektivitas antar region, keberadaan path, atau penempatan `start` dan `goal`.

Intuisi praktisnya adalah: jika level sudah hampir benar, lebih baik dilakukan **repair** daripada **generate ulang** dari nol. Repair berarti memperbaiki bagian yang bermasalah secara lokal, sehingga struktur dungeon yang sudah baik tetap dipertahankan.

Alur umumnya dapat dilihat sebagai:

1. `generate` level awal.
2. `validate` level terhadap constraint.
3. `repair` bagian yang melanggar constraint.
4. `validate` ulang untuk memastikan level menjadi valid.

Inputnya adalah level hasil generate, prosesnya adalah validasi dan perbaikan, sedangkan outputnya adalah level yang valid dan siap digunakan. Jika repair tidak berhasil, barulah sistem dapat kembali ke generate ulang. Dengan cara ini, proses produksi level menjadi lebih efisien dan lebih mudah dikendalikan.

Beberapa contoh repair yang umum adalah:

- Jika dua region terpisah, tambahkan `corridor` penghubung.
- Jika `goal` tidak bisa dicapai, pindahkan `goal` ke lokasi yang valid.
- Jika `enemy` terlalu dekat dengan `start`, pindahkan `enemy` ke area yang lebih aman.
- Jika `room` terlalu kecil, lakukan `resize room` agar cukup untuk gameplay.

Perlu dipahami bahwa repair bukan sekadar mengubah posisi objek. Setiap perbaikan harus tetap menjaga **hard constraint** dan tidak merusak **soft constraint** yang sudah baik. Misalnya, membuat `corridor` baru harus tetap menghasilkan path yang masuk akal, bukan jalur yang terlalu panjang atau terlalu linear.

Dalam konteks perilaku NPC dan pathfinding, repair sangat relevan karena kualitas level memengaruhi pengalaman pemain. Jika `goal` tidak terjangkau, NPC atau pemain tidak dapat menyelesaikan misi. Jika `enemy` terlalu dekat, tantangan awal menjadi tidak seimbang. Jadi, repair membantu memastikan level yang dihasilkan dapat dimainkan secara konsisten.

### Inti yang Harus Ditekankan

- **Repair** adalah perbaikan lokal pada level yang belum valid, bukan generate ulang penuh.
- Repair biasanya dilakukan setelah validasi dan harus diikuti validasi ulang.
- Contoh repair meliputi menambah `corridor`, memindahkan `goal`, memindahkan `enemy`, dan `resize room`.
- Repair lebih efisien karena mempertahankan struktur dungeon yang sudah baik.

### Transisi ke Slide Berikutnya

Setelah level dapat diperbaiki menjadi valid, langkah berikutnya adalah menentukan penempatan `start` dan `goal` yang baik agar dungeon memiliki alur permainan yang jelas.

---

## Slide 047 - Start dan Goal Placement

### Narasi

Dalam **PCG for Level & Dungeon Generation**, penempatan **start** dan **goal** sangat menentukan apakah dungeon yang dihasilkan terasa masuk akal bagi pemain. **Start** adalah titik awal perjalanan, sedangkan **goal** adalah tujuan akhir yang harus dicapai. Jika keduanya ditempatkan secara asal, dungeon bisa terasa terlalu pendek, terlalu mudah, atau bahkan tidak memiliki alur yang jelas.

**Start** biasanya ditempatkan di **room pertama** yang dihasilkan oleh proses generation. Room ini menjadi titik aman dan titik referensi untuk seluruh perhitungan jarak. Dalam representasi dungeon, setiap **room** dapat dipandang sebagai node, dan setiap **corridor** sebagai edge yang menghubungkan node tersebut. Dengan representasi ini, posisi **start** menjadi awal dari pencarian jalur.

**Goal** sebaiknya tidak dipilih hanya berdasarkan posisi visual, misalnya room paling kanan atau paling bawah. Posisi visual tidak selalu sama dengan jarak tempuh yang sebenarnya. Dua room bisa terlihat dekat secara spasial, tetapi terpisah oleh banyak corridor, sehingga jarak path-nya jauh. Karena itu, **goal** lebih baik dipilih berdasarkan **jarak path** dari **start**.

Strategi sederhana yang sering digunakan adalah:

```text
Start = room paling kiri
Goal  = room paling kanan
```

Pendekatan ini cocok untuk dungeon yang bentuknya relatif linear, misalnya dungeon yang tumbuh dari kiri ke kanan. Namun, untuk dungeon bercabang, bentuk tidak beraturan, atau layout yang lebih kompleks, strategi ini bisa menghasilkan **goal** yang terlalu dekat atau tidak menantang.

Strategi yang lebih robust adalah menggunakan **pathfinding** untuk mencari room dengan jarak terjauh dari **start**:

```text
Goal = room dengan jarak path terjauh dari start
```

Prosesnya dapat dipahami sebagai berikut:

1. Representasikan dungeon sebagai graph dari **room** dan **corridor**.
2. Tentukan **start** pada room awal.
3. Jalankan **pathfinding** dari **start** ke semua room yang terjangkau.
4. Simpan jarak path ke setiap room.
5. Pilih room dengan jarak path terbesar sebagai **goal**.

Dengan cara ini, **goal** tidak hanya berada di ujung visual dungeon, tetapi juga berada di ujung jalur yang paling jauh secara gameplay. Hal ini membantu memastikan pemain harus melewati sebagian besar dungeon sebelum mencapai tujuan akhir.

Hal penting yang harus dipahami mahasiswa adalah perbedaan antara **jarak spasial** dan **jarak path**. Jarak spasial adalah jarak posisi pada grid atau ruang, sedangkan **jarak path** adalah jumlah langkah atau biaya yang diperlukan untuk benar-benar sampai ke room tersebut melalui corridor yang tersedia. Dalam dungeon generation, **jarak path** lebih relevan karena mencerminkan pengalaman traversal pemain.

### Inti yang Harus Ditekankan

- **Start** dan **goal** adalah anchor utama yang menentukan alur dungeon.
- **Goal** sebaiknya dipilih berdasarkan **jarak path**, bukan hanya posisi visual.
- **Pathfinding** dari **start** membantu menemukan room terjauh secara traversal.
- Pemilihan **goal** yang tepat membuat dungeon lebih menantang dan lebih konsisten secara desain.

### Transisi ke Slide Berikutnya

Setelah **start** dan **goal** sudah ditempatkan dengan aturan yang jelas, langkah berikutnya adalah menentukan bagaimana **enemy** ditempatkan di dalam dungeon. Penempatan **enemy** juga perlu memperhatikan jarak dari **start** agar dungeon tidak terasa terlalu berbahaya di awal.

---

## Slide 048 - Enemy Placement

### Narasi

Setelah posisi **start** dan **goal** ditentukan, langkah berikutnya adalah menempatkan **enemy**. Penempatan musuh tidak boleh sepenuhnya acak karena memengaruhi rasa adil, ritme permainan, dan kualitas pengalaman pemain.

Secara intuitif, **enemy** berfungsi sebagai penanda tantangan. Musuh yang terlalu dekat dengan start dapat membuat pemain langsung tertekan. Sebaliknya, musuh yang semakin banyak mendekati goal dapat membangun kurva kesulitan yang lebih dramatis.

Aturan dasar yang perlu dipahami:

- **Enemy tidak dekat start**: area awal harus terasa aman agar pemain memahami kontrol, lingkungan, dan tujuan.
- **Enemy lebih banyak di dekat goal**: tantangan meningkat menjelang akhir dungeon.
- **Enemy ditempatkan di room besar**: ruang luas memberi pemain kesempatan bergerak, menghindar, dan membuat keputusan.
- **Enemy tidak spawn di corridor sempit**: lorong sempit dapat membuat pertarungan terasa memaksa dan mengurangi agency pemain.
- **Boss hanya di boss room**: boss membutuhkan ruang khusus, aturan khusus, dan perilaku yang lebih terstruktur.

Slide memberikan contoh aturan sederhana:

```text
Jika distanceFromStart < safeDistance:
    jangan spawn enemy
```

Potongan aturan ini menunjukkan bahwa penempatan musuh dapat dikendalikan dengan **constraint**. Variabel `distanceFromStart` biasanya dihitung dari graf room atau hasil pathfinding. Nilai `safeDistance` menjadi ambang batas area aman. Jika jaraknya masih di bawah ambang tersebut, sistem tidak menempatkan musuh di lokasi itu.

Dalam implementasi, aturan ini dapat menjadi filter sebelum spawn. Alurnya bisa dipahami sebagai berikut:

1. Dungeon sudah memiliki room, corridor, start, dan goal.
2. Sistem menghitung jarak setiap room atau spawn point dari start.
3. Sistem memeriksa tipe ruang, misalnya room besar, corridor, atau boss room.
4. Sistem menolak spawn yang melanggar aturan, seperti terlalu dekat start atau berada di lorong sempit.
5. Sistem memilih lokasi yang valid untuk menempatkan enemy atau boss.

Aturan spasial ini juga memengaruhi perilaku NPC. Jika enemy berada di room besar, sistem dapat menggunakan `pathfinding`, `steering`, atau `behavior tree` untuk mengejar, menjaga jarak, atau memposisikan diri. Jika enemy berada di corridor sempit, perilaku NPC dapat terasa tidak natural karena ruang gerak terbatas dan pemain tidak punya pilihan untuk menghindar.

Untuk boss, penempatan di **boss room** penting karena boss biasanya memiliki state khusus, fase pertarungan, atau pola serangan yang membutuhkan arena. Dengan demikian, boss room menjadi ruang yang mendukung `FSM`, `behavior tree`, atau skenario khusus tanpa mengganggu room biasa.

Yang harus dipahami mahasiswa adalah bahwa **enemy placement** bukan sekadar menempatkan sprite musuh di peta. Ia adalah bagian dari desain level yang menentukan fairness, difficulty curve, dan kualitas interaksi antara pemain dengan sistem permainan.

### Inti yang Harus Ditekankan

- **Enemy placement** harus mengikuti aturan desain, bukan hanya random.
- Area dekat start perlu aman dengan `safeDistance` agar pemain tidak langsung tertekan.
- Room besar lebih cocok untuk enemy karena memberi ruang gerak dan keputusan.
- Corridor sempit sebaiknya tidak digunakan untuk spawn agar gameplay tidak terasa memaksa.
- Boss hanya ditempatkan di **boss room** karena membutuhkan ruang dan perilaku khusus.

### Transisi ke Slide Berikutnya

Setelah posisi musuh sudah diatur dengan aturan yang adil, langkah berikutnya adalah menempatkan item agar mendukung alur gameplay dan membantu pemain menghadapi tantangan.

---

## Slide 049 - Item Placement

### Narasi

Pada slide ini kita membahas **item placement**, yaitu penempatan item dalam level atau dungeon yang dihasilkan secara prosedural. Item bukan sekadar objek dekoratif; item adalah bagian dari desain gameplay. Posisi item memengaruhi bagaimana pemain mengeksplorasi, mengambil risiko, dan merasakan progres.

**Item placement** perlu mendukung gameplay. Artinya, item harus ditempatkan dengan alasan mekanik yang jelas. Item dapat menjadi bantuan, insentif eksplorasi, kunci progres, atau konsekuensi dari tantangan yang sudah dihadapi pemain.

Beberapa contoh yang perlu dipahami:

- `health potion` ditempatkan sebelum area sulit, agar pemain memiliki persiapan.
- `treasure` ditempatkan di `dead-end`, agar eksplorasi cabang terasa berharga.
- `key` ditempatkan sebelum `locked door`, agar progres tidak terasa macet.
- `ammo` ditempatkan sebelum `combat room`, agar pemain siap menghadapi ancaman.
- `reward` ditempatkan setelah `enemy` kuat, agar tantangan terasa sepadan.

Jika penempatan item terlalu acak, gameplay bisa terasa tidak adil. Pemain mungkin membutuhkan item di saat genting, tetapi item tidak muncul di tempat yang relevan. Sebaliknya, item yang muncul tanpa konteks dapat membuat level terasa datar atau kebetulan.

Dalam konteks generator level, **item placement** adalah bagian dari aturan desain yang harus dipertimbangkan bersama geometri level. Generator tidak hanya membuat ruang, koridor, dan room, tetapi juga menentukan di mana item harus muncul agar pengalaman bermain tetap masuk akal.

Sebelum lanjut, mahasiswa perlu memahami bahwa item placement berkaitan dengan **pacing**, **fairness**, dan **decision making** dalam desain level. Item yang diletakkan dengan benar dapat mengarahkan pemain, memberi imbalan eksplorasi, dan membuat tantangan terasa lebih seimbang.

### Inti yang Harus Ditekankan

- **Item placement** harus memiliki alasan gameplay, bukan sekadar hasil acak.
- Posisi item memengaruhi **pacing**, **eksplorasi**, dan rasa adil dalam permainan.
- Generator level perlu aturan penempatan item agar item muncul di tempat yang bermakna.

### Transisi ke Slide Berikutnya

Selanjutnya, kita akan melihat bagaimana `dead-end` dapat dimanfaatkan sebagai lokasi reward, sehingga cabang level tidak hanya menjadi ruang kosong, tetapi juga bagian dari desain eksplorasi.

---

## Slide 050 - Dead-End dan Reward

### Narasi

Pada slide ini kita melihat bagaimana **dead-end** dapat dimanfaatkan sebagai bagian dari desain level, bukan sekadar ruang yang tersisa. Dalam konteks dungeon atau level yang dihasilkan secara prosedural, dead-end adalah cabang koridor atau ruangan yang tidak terhubung kembali ke jalur utama. Jika dibiarkan kosong, area ini bisa terasa seperti ruang mati. Namun jika diberi **reward**, dead-end berubah menjadi insentif eksplorasi.

Contoh sederhana yang ditampilkan pada slide adalah:

```text
Path utama → Goal
Cabang mati → Treasure
```

Artinya, pemain tetap memiliki jalur utama menuju tujuan, tetapi ada cabang yang berakhir pada **treasure**. Cabang ini tidak harus menjadi jalan wajib, melainkan pilihan yang memberi nilai tambahan bagi pemain yang mau menjelajah.

Diagram desainnya dapat dibaca sebagai berikut:

```text
Start ─── Goal
    │
    └── Treasure
```

Dari **Start**, pemain dapat bergerak menuju **Goal** melalui jalur utama. Di tengah jalan, terdapat cabang ke bawah yang berakhir pada **Treasure**. Karena cabang ini bersifat dead-end, pemain perlu memutuskan apakah ingin masuk, mengambil reward, lalu kembali, atau langsung menuju goal. Keputusan inilah yang membuat eksplorasi terasa lebih hidup.

Dalam desain game, pola ini penting karena reward pada dead-end memberi **motivasi eksplorasi** tanpa mengganggu tujuan utama. Pemain tidak kehilangan arah, tetapi tetap diberi alasan untuk memeriksa area yang tidak berada di jalur terpendek. Hal ini juga membantu level terasa lebih kaya, karena ruang yang secara struktural sederhana dapat memiliki fungsi gameplay.

Untuk mahasiswa, poin yang perlu dipahami adalah bahwa dead-end bukan hanya masalah geometri level. Dead-end adalah elemen desain yang dapat dikaitkan dengan **reward**, **risiko**, dan **keputusan pemain**. Pola serupa juga dapat memengaruhi perilaku penjelajahan dalam game: agen atau pemain dapat memilih jalur utama, tetapi juga diberi insentif untuk memeriksa cabang yang mengandung reward. Namun pada slide ini, fokusnya tetap pada desain level dan penempatan reward, bukan pada algoritma pencarian jalur yang lebih detail.

Sebelum lanjut, pastikan mahasiswa memahami bahwa dead-end yang diberi reward harus tetap seimbang. Jika terlalu banyak, pemain bisa merasa level penuh cabang yang tidak penting. Jika terlalu sedikit, eksplorasi menjadi kurang menarik. Jadi, dead-end dan reward adalah alat desain untuk membuat level lebih bermakna.

### Inti yang Harus Ditekankan

- **Dead-end** adalah cabang level yang berakhir tanpa kembali ke jalur utama.
- Dead-end dapat diberi **reward** seperti `treasure` agar eksplorasi memiliki tujuan.
- Pola `path utama → goal` dan `cabang mati → treasure` memberi pemain pilihan tanpa menghilangkan tujuan utama.
- Reward pada dead-end meningkatkan rasa eksplorasi, tetapi harus digunakan secara seimbang.

### Transisi ke Slide Berikutnya

Setelah memahami bagaimana dead-end dan reward membentuk pengalaman eksplorasi, langkah berikutnya adalah mengevaluasi apakah level yang dihasilkan benar-benar seimbang. Untuk itu, kita akan masuk ke **Level Metrics**, yaitu ukuran-ukuran yang membantu membandingkan hasil level dari beberapa seed.

---

## Slide 051 - Level Metrics

### Narasi

Para mahasiswa, setelah generator membuat dungeon dari `seed`, kita perlu tahu apakah layout yang dihasilkan layak dipakai. Slide ini membahas **Level Metrics**, yaitu ukuran kuantitatif untuk mengevaluasi struktur level.

Intuisi praktisnya sederhana: dua dungeon bisa terlihat sama-sama “acak”, tetapi satu terlalu sempit, satu terlalu banyak cabang, atau satu membuat jarak start-goal tidak wajar. Metrics memberi cara objektif untuk membandingkan hasil dari beberapa `seed`.

Beberapa metrik dasar yang perlu dipahami:

- **Jumlah room** menunjukkan seberapa padat ruang utama.
- **Jumlah corridor** menggambarkan konektivitas antar ruang.
- **Jumlah dead-end** memberi indikasi area buntu yang bisa dipakai untuk eksplorasi atau reward.
- **Jarak start-goal** menunjukkan panjang perjalanan utama dari titik awal ke tujuan.
- **Persentase floor** menggambarkan seberapa banyak area yang dapat dilalui.
- **Enemy density** dan **item density** memberi gambaran sebaran ancaman dan sumber daya.
- **Branching factor** menunjukkan seberapa banyak pilihan jalur di titik tertentu.
- **Path length** mengukur panjang jalur yang mungkin ditempuh pemain atau NPC.

Secara konseptual, metrik ini bekerja seperti “profil” level. Generator PCG dapat menghasilkan banyak kandidat dari `seed` berbeda, lalu kita membandingkan profilnya. Misalnya, `seed` A menghasilkan 12 room, 18 corridor, 4 dead-end, dan jarak start-goal 45 tile. `Seed` B menghasilkan 9 room, 22 corridor, 1 dead-end, dan jarak start-goal 70 tile. Dari data ini, kita bisa menilai mana yang lebih seimbang, mana yang terlalu panjang, atau mana yang kurang memberi ruang eksplorasi.

Dalam konteks desain game, metrik level penting karena perilaku NPC, pathfinding, dan tantangan pemain bergantung pada struktur level. Jika `path length` terlalu panjang, pencarian jalur bisa menjadi lebih berat. Jika `branching factor` tinggi, keputusan navigasi menjadi lebih kompleks. Jika `enemy density` terlalu besar di area tertentu, pengalaman pemain bisa berubah drastis.

Yang harus ditekankan: metrics bukan pengganti penilaian desain. Angka membantu membandingkan, tetapi interpretasinya tetap bergantung pada tujuan desain level.

Sebelum lanjut, mahasiswa perlu memahami bahwa metrik level adalah langkah evaluasi struktural. Kita belum menghitung kesulitan secara langsung; kita baru mengukur bentuk, konektivitas, dan sebaran elemen dasar level.

### Inti yang Harus Ditekankan

- **Level Metrics** adalah ukuran kuantitatif untuk menilai hasil PCG, bukan sekadar tampilan visual.
- Metrik seperti `jumlah room`, `corridor`, `dead-end`, `jarak start-goal`, `branching factor`, dan `path length` membantu membandingkan beberapa `seed` secara objektif.
- Metrics menjadi dasar untuk evaluasi generator dan memahami dampak struktur level terhadap pathfinding serta perilaku NPC.

### Transisi ke Slide Berikutnya

Setelah kita bisa mengukur struktur level, langkah berikutnya adalah menilai seberapa sulit level tersebut. Pada slide berikutnya, kita akan membahas **Difficulty Metrics**, yaitu cara memperkirakan kesulitan dari elemen seperti jumlah enemy, trap, resource, panjang path, dan kompleksitas navigasi.

---

## Slide 052 - Difficulty Metrics

### Narasi

Pada slide ini kita masuk ke aspek evaluasi yang lebih spesifik dari level yang dihasilkan PCG: **difficulty metrics**. Jika level metrics sebelumnya membantu memeriksa struktur level, maka difficulty metrics membantu memperkirakan seberapa menantang level tersebut bagi pemain.

Intuisi praktisnya, kesulitan tidak hanya ditentukan oleh satu faktor, tetapi oleh kombinasi ancaman, hambatan, dan dukungan yang tersedia. Dalam konteks desain game, metrik ini penting karena dapat menjadi sinyal untuk mengatur penempatan enemy, tekanan combat, atau penyesuaian tantangan secara dinamis.

Beberapa faktor yang dapat memperkirakan difficulty adalah:

- **Jumlah enemy** dan **tipe enemy** yang menentukan tekanan combat.
- **Resource yang tersedia** yang memberi ruang pemulihan atau strategi.
- **Panjang path** yang memengaruhi durasi dan kelelahan pemain.
- **Jumlah trap** yang menambah risiko lingkungan.
- **Jarak antar checkpoint** yang menentukan seberapa sering pemain dapat menyimpan progres.
- **Cover availability** yang memengaruhi kemampuan bertahan atau menghindar.
- **Kompleksitas navigasi** yang memengaruhi beban eksplorasi dan pengambilan keputusan.

Contoh model sederhana yang diberikan pada slide adalah:

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

Rumus ini menunjukkan bahwa kesulitan dapat dimodelkan sebagai agregat dari beberapa komponen. `enemyScore` biasanya meningkat jika jumlah enemy bertambah atau tipe enemy lebih kuat. `trapScore` meningkat jika lingkungan memiliki lebih banyak bahaya. `pathLengthScore` meningkat jika jarak tempuh lebih panjang, sehingga pemain lebih lama terpapar risiko. Sebaliknya, `resourceScore` dikurangi karena resource seperti health, item, atau area aman dapat menurunkan tekanan.

Secara teknis, setiap komponen dapat dihitung dari data level yang sudah tersedia. Misalnya, `enemyScore` bisa berasal dari jumlah dan tipe enemy spawn, `trapScore` dari jumlah tile trap, `pathLengthScore` dari panjang jalur start-goal atau antar checkpoint, dan `resourceScore` dari jumlah item atau area aman. Nilai-nilai tersebut kemudian dapat dinormalisasi agar dapat dibandingkan antar seed atau antar level.

Hal penting yang harus dipahami mahasiswa adalah bahwa `difficultyScore` bukan satu-satunya ukuran kualitas level. Ia adalah proxy yang berguna untuk evaluasi, perbandingan hasil PCG, dan dasar bagi sistem seperti **Dynamic Difficulty Adjustment** atau DDA. DDA dapat menggunakan skor ini untuk menyesuaikan tantangan saat permainan berlangsung, misalnya dengan mengubah jumlah enemy, resource, atau parameter level.

Sebelum lanjut ke implementasi scene, mahasiswa perlu memahami bahwa metrik kesulitan harus dapat dihitung secara otomatis dari data level. Tanpa itu, PCG hanya menghasilkan struktur, tetapi belum bisa menilai apakah level tersebut terlalu mudah, terlalu sulit, atau seimbang.

### Inti yang Harus Ditekankan

- **Difficulty metrics** memperkirakan tantangan level dari kombinasi ancaman, hambatan, dan resource.
- `difficultyScore` dapat dihitung sebagai jumlah `enemyScore`, `trapScore`, dan `pathLengthScore`, dikurangi `resourceScore`.
- Metrik ini penting untuk evaluasi PCG dan menjadi dasar bagi **Dynamic Difficulty Adjustment**.

### Transisi ke Slide Berikutnya

Setelah level dapat dievaluasi dari sisi kesulitan, langkah berikutnya adalah membangun level tersebut menjadi scene yang dapat dimainkan di Unity.

---

## Slide 053 - Building Level di Unity

### Narasi

Slide ini membahas tahap **pembangunan scene** setelah data level sudah tersedia.

Secara intuitif, `Grid Data` adalah **blueprint** level. Unity tidak langsung menampilkan grid mentah; data tersebut harus diubah menjadi objek 3D yang bisa dilihat, diklik, dan digunakan oleh sistem game.

Alur yang ditampilkan pada slide adalah:

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

Urutan ini penting karena setiap tahap memiliki tanggung jawab yang berbeda:

1. `Grid Data` dibaca sebagai sumber informasi posisi dan jenis tile.
2. Setiap cell diproses satu per satu melalui **loop**.
3. Prefab yang sesuai dengan `TileType` dibuat menjadi objek scene.
4. Objek tersebut diparenting ke `LevelRoot` agar struktur scene rapi.
5. Entity seperti player, enemy, dan item diletakkan pada posisi yang ditentukan.
6. Data navigasi diupdate jika agen membutuhkan **pathfinding** atau pergerakan dinamis.

Prefab yang umum digunakan antara lain:

- `floor`
- `wall`
- `door`
- `corridor`
- `prop`
- `enemy spawn marker`

Pemisahan prefab ini membantu menjaga konsistensi visual dan logika. Misalnya, `wall` tidak hanya menjadi objek visual, tetapi juga dapat memengaruhi navigasi, sedangkan `enemy spawn marker` memberi tahu sistem perilaku agen di mana musuh harus muncul.

Sebelum lanjut, mahasiswa perlu memahami bahwa **membangun level di Unity** bukan sekadar menempatkan objek. Tahap ini adalah jembatan antara data hasil generasi dan scene yang benar-benar dapat dimainkan, diuji, dan digunakan oleh sistem pergerakan atau pengambilan keputusan.

### Inti yang Harus Ditekankan

- `Grid Data` adalah **data**, sedangkan scene Unity adalah **objek** yang dibangun dari data tersebut.
- Prefab per `TileType` membuat proses pembangunan level lebih konsisten, mudah dirawat, dan lebih efisien.
- Parenting ke `LevelRoot` memudahkan pengelolaan transformasi, pembersihan scene, dan debugging.
- Spawn entity dan update navigasi menghubungkan struktur level dengan perilaku agen, seperti pathfinding dan spawn musuh.

### Transisi ke Slide Berikutnya

Setelah alur pembangunan level dipahami, langkah berikutnya adalah melihat bagaimana setiap tile direpresentasikan sebagai prefab di Unity, termasuk contoh nama prefab dan cara objek tersebut dibuat ke dalam scene.

---

## Slide 054 - Tile Prefab

### Narasi

Pada tahap ini, kita mengubah data grid yang sudah dihasilkan menjadi objek nyata di scene Unity. Setiap cell pada grid tidak lagi hanya berupa nilai seperti `Wall`, `Floor`, atau `Door`, tetapi dapat direpresentasikan sebagai **tile prefab**. Prefab adalah objek yang sudah disiapkan di editor, lalu diinstansiasi ke scene saat level digenerate.

Intuisinya, grid adalah rencana, sedangkan prefab adalah wujud fisik dari rencana tersebut. Jika cell bernilai `Wall`, maka `WallPrefab` yang dibuat. Jika cell bernilai `Floor`, maka `FloorPrefab` yang dibuat. Dengan cara ini, satu data level dapat menghasilkan banyak objek yang konsisten, rapi, dan mudah diganti.

Contoh tile prefab yang umum digunakan:

- `WallPrefab` untuk dinding atau penghalang.
- `FloorPrefab` untuk lantai yang dapat dilalui.
- `StartPrefab` untuk posisi awal pemain.
- `GoalPrefab` untuk tujuan atau exit.
- `DoorPrefab` untuk pintu yang dapat dibuka atau memblokir jalur.
- `TrapPrefab` untuk jebakan yang memengaruhi perilaku agen.

Dalam Unity, proses pembuatannya cukup singkat:

```csharp
Instantiate(prefab, position, rotation, parent);
```

Fungsi `Instantiate` membuat objek baru dari prefab yang dipilih. Parameter `position` menentukan lokasi objek di scene, biasanya dihitung dari koordinat cell grid. Parameter `rotation` menentukan orientasi objek, misalnya untuk pintu atau prop yang memiliki arah. Parameter `parent` menentukan di mana objek tersebut akan diletakkan dalam hierarki scene.

Agar scene tetap rapi, setiap prefab sebaiknya diparenting ke grup yang sesuai:

```text
GeneratedLevel
├── Floors
├── Walls
├── Props
├── Enemies
└── Items
```

Struktur ini penting karena memudahkan pengelolaan objek hasil generasi. Misalnya, semua lantai berada di `Floors`, semua dinding di `Walls`, dan semua item di `Items`. Dengan begitu, kita dapat mengaktifkan atau menonaktifkan grup tertentu, membersihkan level, atau mencari objek tertentu tanpa harus menelusuri seluruh scene.

Untuk perilaku NPC, pemisahan ini juga membantu sistem game membaca lingkungan. Dinding dan lantai dapat memengaruhi **pathfinding** dan **navigation**, sedangkan `DoorPrefab` atau `TrapPrefab` dapat menjadi pemicu keputusan NPC atau pemain. Jika prefab sudah memiliki komponen, tag, atau collider yang benar, agen dapat mengenali tile tersebut sebagai area aman, area berbahaya, atau area yang perlu dihindari.

Hal yang harus dipahami mahasiswa adalah bahwa tile prefab bukan sekadar gambar atau mesh. Prefab adalah unit representasi lingkungan yang menghubungkan data level dengan objek scene. Jika prefab salah dipilih, posisi salah, atau parent salah, maka level bisa terlihat benar tetapi sistem spawn, navigation, atau interaksi NPC menjadi tidak konsisten.

### Inti yang Harus Ditekankan

- Setiap cell grid dapat direpresentasikan sebagai **tile prefab** yang sesuai dengan `TileType`.
- `Instantiate(prefab, position, rotation, parent)` adalah cara utama membuat objek prefab ke scene Unity.
- Parenting ke grup seperti `Floors`, `Walls`, `Props`, `Enemies`, dan `Items` membuat scene lebih rapi dan mudah dikelola.
- Prefab yang konsisten membantu sistem game membaca lingkungan, seperti area yang dapat dilalui, penghalang, atau pemicu perilaku NPC.

### Transisi ke Slide Berikutnya

Setelah memahami bahwa setiap cell dapat menjadi prefab, langkah berikutnya adalah memilih representasi level yang paling sesuai: apakah menggunakan Tilemap untuk grid 2D, atau 3D prefab untuk lingkungan dungeon yang lebih fleksibel.

---

## Slide 055 - Tilemap vs 3D Prefab

### Narasi

Pada slide ini kita membandingkan dua cara membangun level hasil PCG: **`Tilemap`** dan **3D `Prefab`**. Keduanya dapat digunakan untuk menempatkan elemen level, tetapi karakter dan kegunaannya berbeda. Pilihan representasi level ini penting karena memengaruhi cara level digenerate, cara objek disusun, dan bagaimana agent game berinteraksi dengan environment.

**`Tilemap`** paling cocok untuk:

- game 2D,
- top-down,
- grid yang jelas,
- kebutuhan performa yang baik.

Intuisinya, `Tilemap` bekerja seperti papan kisi. Setiap sel grid dapat diisi tile tertentu, sehingga proses generate level menjadi sederhana: tentukan isi sel, lalu tampilkan sebagai tile. Pendekatan ini juga memudahkan pathfinding berbasis grid, penempatan NPC, dan perilaku agent yang bergantung pada posisi grid.

**3D `Prefab`** lebih cocok untuk:

- dungeon 3D,
- third-person,
- first-person,
- environment modular.

Di sini level tidak hanya berupa sel grid, tetapi dibangun dari objek 3D yang dapat diinstansiasi dan disusun. Prefab memberi fleksibilitas lebih untuk ruang 3D, sudut pandang kamera, dan interaksi agent dengan environment. Untuk mata kuliah ini, kita dapat menggunakan **3D prefab sederhana** agar sesuai dengan konteks Unity Game AI.

Yang perlu dipahami sebelum lanjut adalah: **`Tilemap`** lebih kuat pada keteraturan grid dan efisiensi 2D, sedangkan **3D `Prefab`** lebih kuat pada fleksibilitas ruang 3D dan modularitas environment. Mahasiswa tidak perlu memilih salah satu secara mutlak, tetapi harus memahami kapan masing-masing pendekatan lebih sesuai dengan desain game dan kebutuhan AI.

### Inti yang Harus Ditekankan

- **`Tilemap`** cocok untuk game 2D atau top-down dengan grid jelas dan performa baik.
- **3D `Prefab`** cocok untuk dungeon 3D, third-person, first-person, dan environment modular.
- Untuk Unity Game AI, pendekatan **3D prefab sederhana** dapat menjadi dasar level yang tetap mudah digenerate dan digunakan agent.

### Transisi ke Slide Berikutnya

Setelah memahami perbedaan representasi level, langkah berikutnya adalah menyiapkan elemen-elemen modular yang dapat disusun menjadi dungeon.

---

## Slide 056 - Modular Dungeon Asset

### Narasi

Setelah kita memahami bahwa dungeon 3D dapat dibangun dari prefab sederhana, langkah berikutnya adalah menyiapkan **modular dungeon asset**. Aset modular adalah kumpulan komponen kecil yang dirancang untuk saling menyambung, misalnya `floorTile`, `wallTile`, `cornerWall`, `doorFrame`, `pillar`, `torch`, `crate`, `treasure`, `trap`, dan `stairs`. Intuisinya sederhana: dungeon tidak dibuat sebagai satu objek besar, tetapi dirakit dari blok-blok yang bisa dipilih, diputar, dan digabungkan oleh generator.

Dalam **PCG for Level & Dungeon Generation**, modular asset sangat penting karena generator tidak perlu membuat geometri level dari nol. Generator cukup memilih modul yang sesuai untuk setiap ruang, lorong, sudut, atau transisi. Dengan cara ini, level dapat bervariasi setiap kali dijalankan, tetapi tetap memiliki aturan penyambungan yang konsisten. Misalnya, `floorTile` bertemu `wallTile`, `cornerWall` menutup sudut, dan `doorFrame` membuka jalur antar ruang.

Aset modular juga memengaruhi perilaku agen di dalam level. Dinding, pintu, pilar, dan tangga menentukan area yang bisa dilalui, sementara `crate`, `trap`, dan `treasure` dapat menjadi target, penghalang, atau pemicu interaksi. Jika modul tidak dirancang dengan ukuran dan orientasi yang konsisten, agen dapat terjebak di celah, melewati dinding yang seharusnya memblokir, atau tidak menemukan jalur menuju pintu.

Secara praktis, setiap modul sebaiknya memiliki properti yang jelas, seperti ukuran grid, titik sambungan, tag, layer, dan prefab 3D sederhana. Properti ini memudahkan generator menempatkan aset secara otomatis dan memudahkan sistem navigasi membaca bentuk level. Dalam Unity, pendekatan ini dapat dimulai dengan membuat beberapa prefab modular, lalu menyusunnya secara prosedural berdasarkan aturan ruang dan lorong.

Yang perlu dipahami mahasiswa adalah bahwa modular asset bukan hanya soal visual. Ia adalah kontrak antara generator level, environment, dan perilaku agen. Jika modul konsisten, proses generate lebih stabil dan hasil dungeon lebih mudah divalidasi. Jika modul tidak konsisten, masalah akan muncul pada tahap navigasi, interaksi, dan pengujian level.

Sebelum melanjutkan, pastikan mahasiswa memahami tiga hal: modular asset memudahkan PCG karena elemen disusun seperti blok; kualitas penyambungan modul menentukan apakah dungeon terlihat rapi; dan desain modul yang baik akan memudahkan NPC bergerak, berinteraksi, dan menghindari area yang tidak seharusnya dilalui.

### Inti yang Harus Ditekankan

- **Modular dungeon asset** adalah komponen kecil yang dapat digabungkan secara prosedural untuk membentuk dungeon.
- Modular asset membantu **PCG** menghasilkan level yang bervariasi tetapi tetap konsisten dalam penyambungan.
- Desain modul yang baik memengaruhi visual level, interaksi agen, dan kesiapan dungeon untuk navigasi.

### Transisi ke Slide Berikutnya

Setelah aset modular siap, dungeon yang dibuat secara prosedural masih perlu memastikan agen dapat bergerak dengan benar. Pada slide berikutnya, kita akan membahas NavMesh untuk dungeon procedural.

---

## Slide 057 - NavMesh untuk Dungeon Procedural

### Narasi

Slide ini membahas masalah penting setelah dungeon prosedural berhasil dibuat: bagaimana NPC atau karakter pemain dapat bergerak secara natural di dalamnya. Jika dungeon dibuat saat runtime, geometri level tidak selalu tersedia sejak awal, sehingga sistem navigasi harus disesuaikan dengan cara level dibuat.

Intuisi praktisnya adalah: **NavMesh** adalah permukaan navigasi yang digunakan agent untuk mencari jalur. Jika dungeon sudah final sebelum game dimulai, kita bisa membuat NavMesh sekali saja. Jika dungeon dibuat saat runtime, kita perlu memastikan NavMesh ikut dibuat atau diganti setelah geometri dungeon selesai.

Ada beberapa pilihan umum:

1. **Generate level sebelum game dimulai**, lalu bake NavMesh. Ini paling stabil karena navigasi sudah siap saat game berjalan.
2. Gunakan **NavMeshSurface** dengan runtime build. Ini cocok untuk dungeon yang dibuat saat runtime, tetapi perlu memperhatikan waktu build dan kondisi geometri.
3. Gunakan **grid pathfinding manual**. Pendekatan ini sederhana, terutama jika dungeon berbasis tile atau grid.
4. Gunakan **waypoint graph** dari room dan corridor. Ini berguna jika dungeon dibangun dari ruang-ruang yang terhubung.

Untuk praktikum sederhana, dua pilihan yang paling mudah dipahami adalah:

- **grid movement**, di mana karakter bergerak berdasarkan sel grid;
- atau **generate level lalu gunakan NavMeshSurface**, sehingga NPC dapat memakai `NavMeshAgent` untuk bergerak.

Yang harus dipahami mahasiswa adalah: navigasi bukan hanya soal "menampilkan dungeon", tetapi memastikan agent tahu area mana yang bisa dilewati, area mana yang terhalang, dan bagaimana jalur dari titik A ke titik B dihitung. Jika dungeon prosedural dibuat dengan modular asset, NavMesh harus tetap konsisten dengan geometri yang dihasilkan.

Sebelum lanjut, mahasiswa perlu membedakan antara **baking NavMesh** dan **membangun NavMesh saat runtime**. Baking biasanya dilakukan saat level sudah final, sedangkan runtime build dilakukan setelah geometri dungeon tersedia. Perbedaan ini penting karena memengaruhi alur produksi, performa, dan cara NPC di-spawn.

### Inti yang Harus Ditekankan

- Dungeon prosedural yang dibuat saat runtime membutuhkan strategi navigasi yang sesuai.
- **NavMesh** memberi agent permukaan untuk menghitung jalur, bukan hanya visualisasi level.
- Pilihan praktis untuk praktikum: **grid movement** atau **generate level lalu gunakan NavMeshSurface**.
- NavMesh harus dibangun setelah geometri dungeon final agar NPC tidak tersangkut atau tidak bisa bergerak.

### Transisi ke Slide Berikutnya

Selanjutnya kita akan melihat bagaimana `NavMeshSurface` dapat dibangun saat runtime, sehingga dungeon yang baru saja digenerate bisa langsung digunakan oleh `NavMeshAgent`.

---

## Slide 058 - Runtime NavMeshSurface

### Narasi

Pada slide ini kita membahas cara membuat **NavMesh** saat **runtime** menggunakan komponen `NavMeshSurface`.

Ketika dungeon dihasilkan secara prosedural, geometri level baru tersedia setelah proses generation selesai. Karena itu, NavMesh tidak selalu bisa dibuat sekali saja di editor. `NavMeshSurface` memungkinkan kita membangun data navigasi setelah dinding, lantai, room, dan corridor sudah dibuat.

Inti pemanggilannya cukup sederhana:

```csharp
navMeshSurface.BuildNavMesh();
```

Panggilan ini meminta `NavMeshSurface` menghitung permukaan navigasi dari geometri yang tersedia. Hasilnya adalah data yang dapat digunakan oleh `NavMeshAgent` untuk bergerak dan mencari `path`.

Alur utamanya dapat dibaca sebagai berikut:

```text
Generate dungeon geometry
        ↓
Build NavMesh
        ↓
Spawn NPC
        ↓
NPC dapat menggunakan NavMeshAgent
```

Tahap pertama adalah membuat geometri dungeon. Setelah itu, `NavMeshSurface` membangun NavMesh. Setelah NavMesh siap, NPC baru di-spawn. Dengan urutan ini, `NavMeshAgent` sudah memiliki data navigasi yang valid ketika NPC mulai bergerak.

Ada beberapa hal penting yang harus diperhatikan:

- collider atau mesh dungeon harus benar,
- layer yang digunakan harus termasuk dalam setting `NavMeshSurface`,
- runtime build dapat memakan waktu, terutama jika geometri dungeon cukup besar.

Oleh karena itu, mahasiswa perlu memahami bahwa runtime NavMeshSurface adalah solusi praktis untuk level prosedural, tetapi tetap ada biaya komputasi. Urutan generation, build, dan spawn harus dijaga agar NPC tidak mencoba bergerak sebelum data navigasi siap.

### Inti yang Harus Ditekankan

- `NavMeshSurface` dapat membangun NavMesh saat **runtime**, bukan hanya di editor.
- `navMeshSurface.BuildNavMesh()` dipanggil setelah geometri dungeon selesai dibuat.
- Urutan penting: generate geometry, build NavMesh, spawn NPC, lalu `NavMeshAgent` dapat digunakan.
- Pastikan collider/mesh benar, layer termasuk, dan perhatikan waktu build runtime.

### Transisi ke Slide Berikutnya

Setelah NavMesh dapat dibangun saat runtime, langkah berikutnya adalah membuat proses generation lebih mudah diperiksa. Untuk itu, kita akan masuk ke **Debug Visualization** agar mahasiswa bisa melihat hasil PCG secara visual.

---

## Slide 059 - Debug Visualization

### Narasi

Pada tahap PCG level dan dungeon generation, hasil generasi tidak cukup hanya dilihat dari data numerik. Mahasiswa perlu melihat apakah dungeon benar-benar terbentuk sesuai aturan. **Debug visualization** menjadi lapisan diagnostik yang menampilkan struktur level secara visual.

Intuisi praktisnya adalah: sebelum menilai kualitas dungeon, tampilkan elemen penting yang menentukan apakah level valid. Elemen ini membantu mahasiswa memeriksa koneksi, batas ruang, dan posisi objek.

- **seed** untuk melacak variasi dan reproduksi level.
- **grid** dan **room bounds** untuk melihat struktur serta batas ruang.
- **corridor** untuk memeriksa koneksi antar room.
- **start** dan **goal** untuk memastikan titik awal dan tujuan valid.
- **path utama** untuk melihat jalur yang dapat digunakan NPC atau player.
- **enemy spawn** dan **item spawn** untuk memastikan objek tidak berada di dinding atau sel invalid.
- **invalid cells** untuk menandai area yang tidak boleh ditempati.

Di Unity, visualisasi ini dapat dibuat dengan tool sederhana. `Gizmos.DrawWireCube` cocok untuk menampilkan batas room atau area tertentu. `Debug.DrawLine` berguna untuk menggambar corridor, path utama, atau hubungan antar titik. Warna material tile dapat membedakan sel valid, invalid, start, goal, atau spawn. UI text seed membantu mahasiswa membandingkan dua run dengan parameter sama.

```csharp
Gizmos.DrawWireCube(roomCenter, roomSize);
Debug.DrawLine(startPos, goalPos, Color.cyan);
```

Potongan kode ini menunjukkan dua hal penting. `Gizmos.DrawWireCube` menerima pusat dan ukuran ruang, sehingga batas room dapat dilihat secara langsung. `Debug.DrawLine` menggambar garis antara dua posisi, misalnya dari `startPos` ke `goalPos` atau sepanjang path utama. Warna garis membantu membedakan path dari corridor biasa.

Urutan penggunaannya biasanya:

1. Dungeon data sudah dibuat oleh proses generation.
2. Visualisasi digambar di Scene View.
3. Mahasiswa memeriksa apakah room, corridor, spawn, dan path valid.

Hasil yang diharapkan adalah mahasiswa dapat menemukan masalah lebih cepat daripada hanya membaca log. Jika `enemy spawn` berada di dinding atau `path utama` terputus, perilaku NPC tidak akan berjalan seperti yang diharapkan.

Sebelum lanjut ke kesalahan umum, mahasiswa perlu memahami bahwa debug visual bukan sekadar hiasan. Ia adalah alat verifikasi. Setiap elemen yang ditampilkan harus punya makna: seed untuk reproduksi, grid untuk struktur, room bounds untuk batas, corridor untuk koneksi, spawn untuk validitas objek, dan invalid cells untuk area terlarang.

### Inti yang Harus Ditekankan

- **Debug visualization** membuat hasil PCG dungeon dapat diperiksa secara visual.
- Elemen penting yang perlu ditampilkan: **seed**, **grid**, **room bounds**, **corridor**, **start**, **goal**, **path utama**, **enemy spawn**, **item spawn**, dan **invalid cells**.
- Unity tools yang relevan: `Gizmos.DrawWireCube`, `Debug.DrawLine`, warna material tile, dan UI text seed.
- Visualisasi membantu memastikan spawn valid, path terhubung, dan dungeon siap digunakan.

### Transisi ke Slide Berikutnya

Setelah mahasiswa dapat melihat struktur dungeon secara visual, langkah berikutnya adalah mengenali kesalahan umum yang sering muncul dalam dungeon generation.

---

## Slide 060 - Kesalahan Umum Dungeon Generation

### Narasi

Sebelum mahasiswa menilai kualitas sebuah teknik **PCG**, mereka perlu mengenali kegagalan yang paling sering muncul saat membuat dungeon. Kesalahan-kesalahan ini penting karena dungeon yang terlihat rapi secara visual belum tentu bisa dimainkan. Dalam konteks game, level yang dihasilkan harus memenuhi beberapa syarat dasar: **terhubung**, **bisa dilalui**, **spawn valid**, **bisa di-debug**, dan **bisa dikontrol proses pembuatannya**.

Sepuluh kesalahan pada slide ini dapat dibaca sebagai tiga kelompok besar: **validasi layout**, **validasi spawn**, dan **kontrol proses generation**.

1. **`start` dan `goal` tidak terhubung.**  
   Ini adalah kesalahan paling kritis. Jika `start` dan `goal` tidak berada pada area yang terhubung, level tidak bisa diselesaikan. Dampaknya langsung terasa pada **pathfinding**, karena NPC atau player tidak memiliki jalur menuju tujuan.

2. **`room` saling tumpang tindih.**  
   Tumpang tindih membuat struktur dungeon menjadi tidak konsisten. Dinding bisa terpotong, ruang menjadi tidak jelas, dan corridor bisa masuk ke area yang seharusnya tidak boleh ditembus. Akibatnya, level terlihat aneh dan sulit divalidasi.

3. **`corridor` tidak menghubungkan `room`.**  
   Corridor seharusnya menjadi penghubung antar ruang. Jika corridor tidak benar-benar menyambungkan `room`, maka beberapa ruang bisa menjadi terisolasi. NPC tidak bisa berpindah, item tidak bisa dijangkau, dan gameplay menjadi tidak masuk akal.

4. **`enemy spawn` berada di `wall`.**  
   Spawn musuh yang berada di dinding atau sel tidak valid membuat NPC terjebak. Sistem pathfinding bisa gagal, musuh tidak muncul di posisi yang benar, atau perilaku NPC menjadi tidak wajar.

5. **`player spawn` berada di posisi tidak valid.**  
   Posisi spawn player harus aman dan bisa dilalui. Jika player muncul di dalam dinding, di area terisolasi, atau di posisi yang tidak fair, pengalaman bermain langsung rusak sejak awal.

6. **Tidak ada `seed`.**  
   Tanpa `seed`, hasil generation tidak bisa direproduksi. Mahasiswa akan kesulitan men-debug karena setiap kali program dijalankan, dungeon bisa berubah. Padahal, untuk memahami kesalahan, kita perlu melihat hasil yang sama secara berulang.

7. **Tidak ada `debug visual`.**  
   Debug visual membantu mahasiswa melihat apa yang sebenarnya terjadi di balik dungeon: grid, `room bounds`, `corridor`, `start`, `goal`, `enemy spawn`, `item spawn`, dan `invalid cells`. Tanpa visualisasi, proses generation menjadi seperti kotak hitam.

8. **Tidak ada batas percobaan generation.**  
   Beberapa algoritma generation perlu mencoba beberapa kali sampai menghasilkan layout yang valid. Jika tidak ada batas percobaan, proses bisa berjalan terlalu lama atau bahkan tidak berhenti. Batas ini penting untuk menjaga performa dan stabilitas program.

9. **Semua level terasa sama.**  
   Dungeon yang selalu menghasilkan pola serupa akan membuat gameplay terasa monoton. Variasi penting agar player memiliki pengalaman yang berbeda, tetapi variasi tetap harus dikontrol agar level tetap playable.

10. **`parameter` terlalu banyak tetapi tidak terkontrol.**  
   Banyak parameter bisa membuat hasil generation sulit diprediksi. Jika parameter tidak dikelola dengan baik, mahasiswa akan kesulitan menentukan penyebab perubahan hasil. Parameter harus cukup untuk memberi variasi, tetapi tetap bisa dikontrol dan dijelaskan.

Poin penting yang harus dipahami mahasiswa adalah bahwa **generation dungeon baru selesai ketika level lolos validasi**, bukan ketika gambar dungeon sudah muncul. Validasi mencakup konektivitas, validitas spawn, keterbacaan proses, dan konsistensi hasil.

Sebelum lanjut ke perbandingan teknik PCG, mahasiswa perlu menyadari bahwa setiap teknik memiliki kekuatan dan kelemahan. Teknik yang sederhana mungkin mudah dibuat, tetapi bisa menghasilkan banyak kesalahan. Teknik yang lebih terstruktur mungkin lebih kompleks, tetapi biasanya lebih mudah dikontrol dan divalidasi.

### Inti yang Harus Ditekankan

- **Konektivitas adalah prioritas utama**: `start`, `goal`, `room`, dan `corridor` harus saling terhubung dengan benar.
- **Spawn harus valid**: `player spawn` dan `enemy spawn` harus berada di sel yang bisa dilalui.
- **Reproducibility penting**: gunakan `seed` agar hasil generation bisa diuji dan di-debug secara konsisten.
- **Debug visual membantu memahami proses**: tanpa visualisasi, kesalahan layout sulit ditemukan.
- **Generation harus dikontrol**: batasi percobaan, kelola parameter, dan pastikan hasil tetap bervariasi tetapi playable.

### Transisi ke Slide Berikutnya

Dengan memahami kesalahan umum ini, kita dapat membandingkan teknik PCG secara lebih adil: bukan hanya dari bentuk dungeon yang dihasilkan, tetapi juga dari validitas, kemudahan debugging, dan kontrol terhadap hasil generation.

---

## Slide 061 - Membandingkan Teknik PCG

### Narasi

Setelah kita melihat berbagai **kesalahan umum** dalam dungeon generation, langkah berikutnya adalah memahami bahwa tidak semua teknik PCG cocok untuk semua jenis level. Setiap teknik memiliki karakter berbeda, terutama dari sisi **kecepatan implementasi**, **tingkat kontrol**, dan **kualitas hasil yang dihasilkan**.

Pada slide ini, kita tidak hanya membaca tabel perbandingan, tetapi memahami **kapan suatu teknik lebih masuk akal digunakan** dalam desain game.

Secara konseptual, teknik-teknik PCG ini dapat dilihat dari tiga sudut pandang:

- **Mudah diimplementasikan**, tetapi hasil mungkin kurang terkontrol.
- **Menghasilkan bentuk yang natural**, tetapi membutuhkan validasi tambahan.
- **Lebih terstruktur dan terkontrol**, tetapi implementasinya lebih kompleks.

Beberapa teknik yang perlu dipahami perbedaannya adalah:

- `grid random fill`  
  Cocok untuk **eksperimen awal** karena sangat mudah dibuat. Namun, hasilnya sering kali **tidak valid**, misalnya room tidak terhubung atau spawn berada di posisi yang salah.

- `random walk`  
  Menghasilkan bentuk yang lebih **organik**, seperti cave atau jalur alami. Kelebihannya sederhana dan cepat, tetapi **kontrol desainnya rendah**, sehingga hasil bisa sulit diprediksi.

- `BSP`  
  Lebih cocok untuk dungeon dengan struktur **room-corridor** yang rapi. Hasilnya lebih terorganisir, tetapi proses pembagiannya lebih kompleks dibanding teknik sederhana.

- `cellular automata`  
  Menghasilkan bentuk yang terasa **natural**, terutama untuk cave. Namun, area yang terbentuk bisa **terputus**, sehingga perlu dicek konektivitasnya sebelum digunakan.

- `constraint-based`  
  Berfokus pada hasil yang lebih **playable** dan terkontrol. Kelebihannya adalah level lebih sesuai aturan desain, tetapi membutuhkan **validasi** yang lebih serius.

Dalam konteks Game Cerdas, pilihan teknik PCG tidak hanya memengaruhi tampilan level, tetapi juga memengaruhi **perilaku NPC**, **pathfinding**, **spawn enemy**, dan **validitas posisi player**. Level yang terlihat bagus secara visual belum tentu bisa dimainkan dengan baik jika konektivitas, spawn, atau jalur gerak tidak valid.

Sebelum lanjut, mahasiswa perlu memahami bahwa tujuan utama perbandingan ini adalah memilih teknik yang sesuai dengan **tujuan desain**, bukan memilih teknik yang paling rumit atau paling sederhana.

### Inti yang Harus Ditekankan

- Tidak ada satu teknik PCG yang selalu terbaik; pilihan bergantung pada **jenis level** dan **tujuan desain**.
- Teknik sederhana seperti `grid random fill` dan `random walk` cocok untuk **prototipe cepat**, tetapi sering membutuhkan validasi tambahan.
- Teknik seperti `BSP` dan `constraint-based` memberikan hasil yang lebih **terkontrol**, tetapi implementasinya lebih kompleks.
- Kualitas level PCG tidak hanya dinilai dari bentuk visual, tetapi juga dari **konektivitas**, **spawn yang valid**, dan **playability**.

### Transisi ke Slide Berikutnya

Selanjutnya, kita akan membahas lebih spesifik kapan teknik `random walk` paling tepat digunakan, terutama untuk level yang membutuhkan bentuk organik dan implementasi yang cepat.

---

## Slide 062 - Kapan Menggunakan Random Walk?

### Narasi

**Random walk** paling tepat digunakan ketika tujuan utama level adalah menghasilkan ruang yang **organik**, **sederhana**, dan **cepat dibuat**, bukan struktur yang sangat presisi. Intuisinya, proses ini mirip dengan agen yang bergerak selangkah demi selangkah ke sel tetangga yang dipilih secara acak, lalu menandai sel tersebut sebagai area terbuka. Hasilnya adalah lorong atau gua yang berkelok-kelok, seperti ruang alami yang terbentuk tanpa desain ruangan yang kaku.

Dalam konteks PCG, random walk cocok jika:

- ingin membuat **cave sederhana** tanpa banyak aturan tambahan,
- ingin jalur yang terasa **organik** dan tidak terlalu geometris,
- ingin **implementasi cepat** untuk prototipe atau eksperimen,
- level tidak harus sangat rapi atau simetris,
- targetnya adalah **top-down dungeon kecil** yang mudah dijelajahi.

Kelebihan utama teknik ini adalah kesederhanaannya. Mahasiswa dapat mulai dari satu titik awal, memilih arah acak, menandai sel, lalu mengulang proses tersebut beberapa kali. Karena kontrolnya relatif rendah, bentuk akhir bisa berbeda setiap kali dijalankan. Hal ini justru menguntungkan untuk game yang membutuhkan variasi ruang, misalnya **cave exploration**, **mining game**, **roguelike sederhana**, atau **monster cave**.

Secara praktis, level hasil random walk juga mudah digunakan untuk perilaku NPC, misalnya `wandering`, penjelajahan, atau `pathfinding` sederhana di dalam gua. Ruang yang berkelok-kelok dapat memberi kesan eksplorasi yang lebih alami, terutama untuk dungeon kecil yang tidak membutuhkan tata letak sangat ketat.

Namun, mahasiswa perlu memahami batasannya. Random walk tidak ideal jika desain membutuhkan ruangan yang jelas, koridor yang terstruktur, atau penempatan objek penting seperti `start`, `goal`, dan `boss room` yang sangat terkontrol. Jika level harus terasa seperti dungeon klasik dengan ruang-ruang yang dapat dibaca secara visual, teknik lain biasanya lebih sesuai.

Sebelum melanjutkan, poin penting yang harus dipahami adalah: pilihan teknik PCG ditentukan oleh **tujuan desain level**, bukan hanya kemudahan implementasi. Random walk adalah pilihan yang baik ketika nuansa **gua alami**, **jalur berkelok**, dan **variasi acak** lebih penting daripada struktur yang rapi.

### Inti yang Harus Ditekankan

- **Random walk** cocok untuk **cave sederhana**, **jalur organik**, dan **top-down dungeon kecil**.
- Teknik ini dipilih ketika **implementasi cepat** dan **variasi acak** lebih penting daripada struktur yang sangat rapi.
- Karena kontrolnya rendah, random walk kurang cocok untuk dungeon yang membutuhkan ruangan jelas, koridor terstruktur, atau penempatan `start`, `goal`, dan `boss room` yang terkontrol.

### Transisi ke Slide Berikutnya

Selanjutnya, kita akan melihat kapan **BSP** menjadi pilihan yang lebih tepat, terutama untuk dungeon dengan struktur **room-corridor** yang lebih rapi dan terkontrol.

---

## Slide 063 - Kapan Menggunakan BSP?

### Narasi

Pada slide ini, kita fokus pada **kriteria pemilihan** algoritma PCG, khususnya **BSP**. BSP paling tepat ketika level yang diinginkan bukan sekadar jalur acak, tetapi **ruang-ruang yang jelas** dan **struktur yang mudah dikendalikan**. Dalam desain game, layout seperti ini memengaruhi penempatan pemain, NPC, jalur, dan area perilaku.

Secara intuitif, **BSP** cocok untuk dungeon yang terasa seperti **room-corridor**. Jika random walk menghasilkan bentuk yang lebih organik, BSP menghasilkan partisi ruang yang lebih rapi. Area besar dibagi menjadi sub-area, lalu sub-area dibagi lagi menjadi ruang-ruang kecil. Ruang-ruang tersebut kemudian dihubungkan dengan koridor, sehingga pemain dapat memahami arah dan tujuan dengan lebih mudah.

Alur dasarnya dapat dipahami sebagai berikut:

1. Area awal dibagi menjadi dua bagian.
2. Pembagian diulang hingga terbentuk daun-daun yang mewakili `room`.
3. `room` dihubungkan dengan `corridor` agar level dapat dilalui.
4. Node tertentu dipilih sebagai `start`, `goal`, atau `boss_room`.

Struktur ini sering disebut `BSP tree`, karena setiap pembagian ruang membentuk cabang hierarki.

Keuntungan BSP juga terasa pada perilaku NPC. Layout berbasis ruang memudahkan pembuatan `waypoint`, `pathfinding`, dan area perilaku. Misalnya, NPC dapat diberi state `patrol_room`, `guard_corridor`, atau `alert` ketika pemain memasuki ruang tertentu. Dengan struktur ruang yang jelas, perilaku berbasis `FSM` atau `behavior tree` menjadi lebih mudah dirancang dan diuji.

BSP sangat cocok untuk beberapa jenis game:

- **Dungeon crawler**, karena pemain membutuhkan ruang dan koridor yang jelas.
- **RPG dungeon**, karena progresi dari `start` ke `boss_room` dapat diatur secara hierarkis.
- **Tactical room combat**, karena ruangan membantu membentuk cover, sudut pandang, dan area pertempuran.
- **Stealth facility layout**, karena koridor dan ruang memudahkan penempatan penjaga, jalur patroli, dan area tersembunyi.

Namun, BSP tidak selalu menjadi pilihan terbaik. Jika target visual adalah **cave natural**, **bentuk organik**, atau area yang tidak memerlukan ruang persegi panjang, BSP bisa terasa terlalu kaku. Dalam kasus tersebut, pendekatan lain yang lebih cocok akan dibahas pada slide berikutnya.

### Inti yang Harus Ditekankan

- **BSP dipilih** ketika level membutuhkan **ruang jelas**, **koridor**, dan **struktur rapi**.
- BSP menghasilkan **hierarki ruang** yang memudahkan penempatan `start`, `goal`, `boss_room`, dan area perilaku NPC.
- Layout BSP mendukung `waypoint`, `pathfinding`, dan perilaku berbasis ruang seperti `patrol_room` atau `guard_corridor`.
- Jika desain yang diinginkan lebih natural dan organik, BSP bukan pilihan utama; pertimbangkan algoritma lain.

### Transisi ke Slide Berikutnya

Setelah memahami kapan BSP cocok untuk dungeon berbasis ruang dan koridor, langkah berikutnya adalah melihat alternatif untuk bentuk yang lebih natural. Slide berikutnya akan membahas **kapan menggunakan cellular automata**, terutama untuk cave, terowongan, dan area organik.

---

## Slide 064 - Kapan Menggunakan Cellular Automata?

### Narasi

Pada slide ini kita memosisikan **cellular automata** sebagai teknik PCG yang dipilih ketika struktur level tidak perlu rapi atau simetris, tetapi harus terasa seperti terbentuk secara alami. Jika BSP lebih cocok untuk dungeon yang terdiri dari **room** dan **corridor** yang jelas, maka cellular automata lebih tepat untuk lingkungan yang bentuknya organik, seperti gua, terowongan bawah tanah, atau sarang makhluk asing.

Intuisi praktisnya adalah: gunakan **cellular automata** ketika Anda ingin pemain merasakan ruang yang “tumbuh” atau “terbentuk”, bukan ruang yang dirancang sebagai kotak-kotak. Teknik ini bekerja pada `grid` yang terdiri dari `cell`, di mana setiap `cell` dapat berubah berdasarkan kondisi `cell` di sekitarnya. Hasilnya adalah pola ruang yang lebih natural, dengan lorong melengkung, ruang terbuka kecil, dan cabang yang tidak terlalu terstruktur.

Untuk desain game, pilihan ini penting karena bentuk level memengaruhi perilaku NPC dan pengalaman pemain. Lingkungan gua yang organik dapat menciptakan jalur alternatif, sudut penyembunyian, dan area eksplorasi yang lebih bebas. Hal ini juga memengaruhi **pathfinding** dan **steering**, karena NPC tidak lagi bergerak di antara ruangan yang jelas, tetapi harus menavigasi medan yang lebih kompleks dan tidak beraturan.

Contoh penggunaan yang sesuai antara lain:

- **cave** atau gua bawah tanah,
- **forest clearing** yang terbentuk alami,
- **underground tunnel** dengan cabang organik,
- **alien nest** dengan ruang yang tidak simetris.

Sebelum lanjut, mahasiswa perlu memahami bahwa cellular automata bukan selalu pilihan terbaik untuk semua level. Jika game membutuhkan ruangan yang mudah dibaca, start-goal yang terkontrol, atau penempatan boss room yang jelas, teknik lain seperti BSP atau constraint-based mungkin lebih cocok. Pada slide ini, fokus utamanya adalah mengenali situasi di mana bentuk organik lebih mendukung desain.

### Inti yang Harus Ditekankan

- **Cellular automata** dipilih untuk level yang ingin terasa natural, organik, dan tidak terstruktur seperti room-corridor.
- Teknik ini cocok untuk **cave**, **underground tunnel**, **forest clearing**, dan **alien nest**, bukan untuk dungeon yang membutuhkan ruangan jelas.
- Bentuk level yang dihasilkan memengaruhi **pathfinding**, **NPC navigation**, dan pengalaman eksplorasi pemain.
- Mahasiswa harus bisa membedakan kapan struktur organik lebih tepat dibandingkan struktur ruang yang rapi.

### Transisi ke Slide Berikutnya

Setelah memahami kapan bentuk organik lebih cocok, kita akan masuk ke pendekatan yang lebih ketat: **constraint-based**, yaitu ketika level harus memenuhi aturan gameplay tertentu, seperti validitas start-goal, keseimbangan enemy/item, dan tingkat kesulitan yang terukur.

---

## Slide 065 - Kapan Menggunakan Constraint-Based?

### Narasi

**Constraint-based generation** adalah pendekatan yang cocok ketika hasil level tidak boleh hanya “terlihat bagus”, tetapi harus **memenuhi aturan gameplay** yang sudah ditentukan. Dalam konteks Game Cerdas, pendekatan ini penting karena level adalah lingkungan tempat **NPC**, **pathfinding**, **item**, dan **enemy** berinteraksi. Jika lingkungan tidak valid, perilaku AI atau pengalaman pemain bisa menjadi tidak masuk akal.

Secara intuitif, constraint-based bekerja seperti **pembatas** atau **guardrail** pada proses generate. Teknik acak atau generator bentuk lain dapat menghasilkan variasi yang menarik, tetapi hasilnya mungkin melanggar kebutuhan game. Misalnya, `start` dan `goal` tidak terhubung, `enemy` terlalu menumpuk di satu area, atau `item` penting tidak dapat dicapai. Constraint-based membantu memastikan bahwa level yang dihasilkan tetap **playable** dan sesuai desain.

Beberapa situasi di mana pendekatan ini sangat berguna adalah:

- level harus memenuhi **aturan gameplay** tertentu,
- `start-goal` harus pasti valid dan dapat dicapai,
- penempatan `enemy` dan `item` harus seimbang,
- level perlu memiliki **tingkat kesulitan** tertentu,
- kita ingin membuat beberapa kandidat level, lalu memilih yang terbaik.

Prosesnya biasanya tidak berhenti pada satu hasil acak. Alurnya lebih mirip seleksi:

1. Generator membuat beberapa **kandidat level**.
2. Setiap kandidat dicek terhadap **constraint** yang sudah didefinisikan.
3. Kandidat yang lolos diberi nilai atau skor berdasarkan kualitasnya.
4. Kandidat terbaik dipilih untuk dijadikan level final.

Cara berpikir ini penting karena constraint-based tidak selalu menghasilkan satu level secara langsung. Ia lebih menekankan **validasi** dan **pilihan terbaik** dari beberapa kemungkinan. Dalam implementasi game, kita dapat membuat level secara prosedural, lalu memvalidasi `start-goal` sebelum level tersebut digunakan oleh NPC atau sistem game.

Pendekatan ini juga sering **digabungkan dengan teknik lain**. Constraint-based bisa menjadi lapisan pengaman di atas generator bentuk atau penempatan objek acak. Dengan kombinasi ini, level tetap bervariasi secara visual, tetapi tetap memenuhi aturan gameplay yang dibutuhkan.

Sebelum lanjut, mahasiswa perlu memahami bahwa constraint-based bukan pengganti generator bentuk. Ia adalah mekanisme untuk memastikan level yang dihasilkan **aman, valid, dan sesuai tujuan desain**. Jika level hanya membutuhkan bentuk organik, pendekatan lain mungkin lebih sederhana. Namun, jika level harus mendukung keseimbangan, aturan gameplay, dan perilaku NPC yang masuk akal, constraint-based menjadi sangat relevan.

### Inti yang Harus Ditekankan

- **Constraint-based** digunakan ketika level harus memenuhi **aturan gameplay**, bukan hanya menghasilkan bentuk acak.
- Constraint penting meliputi `start-goal` yang valid, keseimbangan `enemy` dan `item`, serta tingkat kesulitan yang terkontrol.
- Alur umumnya adalah membuat beberapa **kandidat level**, melakukan **validasi constraint**, lalu memilih kandidat terbaik.
- Teknik ini sering digabungkan dengan teknik lain agar level tetap bervariasi tetapi tetap valid.

### Transisi ke Slide Berikutnya

Setelah memahami kapan constraint-based diperlukan, kita akan melihat bagaimana pendekatan ini dapat digabungkan dengan teknik lain dalam contoh hybrid dungeon.

---

## Slide 066 - Contoh Hybrid Dungeon

### Narasi

Pada slide ini kita melihat **contoh hybrid dungeon**, yaitu cara menggabungkan beberapa teknik PCG agar dungeon yang dihasilkan tidak hanya acak, tetapi tetap layak dimainkan. Intuisi praktisnya sederhana: satu teknik saja biasanya tidak cukup. **BSP** bagus untuk membentuk ruang, **corridor** membuat ruang terhubung, **random placement** memberi variasi konten, **constraint check** menjaga aturan gameplay, dan **pathfinding** memastikan level benar-benar bisa dilalui.

Pipeline yang ditampilkan pada slide adalah:

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

Urutan ini penting karena setiap tahap memiliki peran yang berbeda. Secara umum, alurnya dapat dibaca sebagai berikut:

1. **BSP** membagi area dungeon menjadi beberapa **room**.
2. **Corridor** menghubungkan `room` yang sudah terbentuk.
3. **Random placement** menempatkan `enemy` dan `item` pada posisi yang valid.
4. **Constraint check** memastikan `start` dan `goal` memenuhi aturan, misalnya tidak berada di ruang yang sama atau memenuhi jarak minimum.
5. **Pathfinding** memvalidasi bahwa pemain benar-benar dapat bergerak dari `start` ke `goal`.
6. **Build Unity level** mengubah data grid atau struktur dungeon menjadi scene yang dapat dimainkan.

Tahap pertama dan kedua membentuk **topologi dasar** dungeon. **BSP** menghasilkan ruang yang relatif rapi dan mudah dikontrol, sehingga mahasiswa tidak perlu langsung menghadapi hasil acak yang terlalu liar. Setelah ruang terbentuk, **corridor** menjadi penghubung antar ruang. Tanpa tahap ini, dungeon bisa menjadi kumpulan ruang yang terpisah dan tidak bisa dijelajahi.

Tahap ketiga menambahkan **konten gameplay**. **Random placement** membuat setiap dungeon berbeda, tetapi penempatannya tetap harus dibatasi agar tidak merusak pengalaman bermain. Misalnya, `enemy` tidak boleh menutupi `start`, `item` tidak boleh berada di luar area yang bisa dijangkau, dan posisi penting tidak boleh bertabrakan. Di sinilah konsep **constraint** mulai terasa, meskipun belum menjadi tahap validasi utama.

Tahap keempat dan kelima adalah tahap **validasi**. **Constraint check** memastikan aturan level terpenuhi, sedangkan **pathfinding** memastikan konektivitas secara nyata. Dalam desain game, tahap ini sangat penting karena dungeon yang terlihat bagus secara visual belum tentu valid secara gameplay. Jika `pathfinding` gagal menemukan jalur dari `start` ke `goal`, level tersebut harus ditolak atau diperbaiki sebelum masuk ke tahap berikutnya.

Tahap terakhir, **Build Unity level**, mengubah hasil PCG menjadi aset yang dapat digunakan di engine. Data grid atau struktur dungeon dapat dikonversi menjadi `tilemap`, `wall`, `floor`, `spawn point`, `enemy`, dan `item`. Dengan cara ini, mahasiswa dapat melihat hubungan langsung antara algoritma PCG dan perilaku game yang sebenarnya.

Yang harus dipahami mahasiswa adalah bahwa **hybrid** bukan berarti mencampur semua teknik secara acak. Hybrid adalah **desain pipeline** yang memilih teknik yang tepat untuk setiap tahap. Pendekatan ini cocok untuk praktikum karena konsepnya cukup lengkap, tetapi masih dapat dibuat sederhana dan mudah diuji.

### Inti yang Harus Ditekankan

- **Hybrid dungeon** menggabungkan **BSP**, **corridor**, **random placement**, **constraint check**, **pathfinding**, dan **Build Unity level**.
- Urutan pipeline penting: bentuk ruang, hubungkan ruang, isi konten, validasi aturan, validasi jalur, lalu bangun scene.
- `pathfinding` berfungsi sebagai validasi akhir bahwa `start` dan `goal` benar-benar terhubung.
- Pendekatan hybrid cocok untuk praktikum karena konsepnya lengkap tetapi masih dapat dibuat sederhana.

### Transisi ke Slide Berikutnya

Setelah memahami alur hybrid dungeon, kita akan masuk ke gambaran umum praktikum pertemuan 10, yaitu bagaimana alur ini diterjemahkan ke dalam tugas pembuatan dungeon berbasis grid di Unity.

---

## Slide 067 - Praktikum Pertemuan 10: Gambaran Umum

### Narasi

Pada slide ini, kita memasuki bagian praktikum untuk pertemuan ke-10. Fokusnya adalah **Procedural Dungeon / Level di Unity**. Artinya, mahasiswa tidak hanya membuat satu level secara manual, tetapi membangun sistem yang dapat menghasilkan dungeon atau level secara prosedural.

Intuisi praktisnya sederhana: game memiliki **grid** sebagai representasi dunia. Setiap sel grid dapat menandai lantai, dinding, `room`, `corridor`, `start`, `goal`, `enemy`, atau `item`. Dari data grid inilah scene Unity dapat dibangun, sehingga level tidak perlu digambar satu per satu.

Target umum praktikum ini adalah:

- membuat dungeon berbasis `grid`,
- menghasilkan `room` dan `corridor`,
- menentukan `start` dan `goal`,
- menempatkan `enemy` dan `item`,
- memvalidasi level,
- membangun scene `Unity` dari data `grid`.

Perhatikan bahwa urutan ini penting. `room` dan `corridor` membentuk struktur dasar dungeon. Setelah struktur terbentuk, baru kita menentukan `start` dan `goal`. Penempatan `enemy` dan `item` dilakukan pada area yang valid. Validasi memastikan level dapat dimainkan, misalnya `start` dan `goal` dapat dihubungkan.

Bagian yang harus dipahami sebelum lanjut adalah bahwa **data grid adalah sumber utama**. Scene Unity adalah hasil visualisasi dari data tersebut. Dengan cara ini, mahasiswa belajar memisahkan logika generasi level dari tampilan scene, yang merupakan pola penting dalam pengembangan game.

Detail langkah teknis, seperti algoritma spesifik, parameter, dan implementasi kode, akan dibahas pada modul praktikum terpisah. Jadi pada slide ini, mahasiswa cukup memahami gambaran besar dan tujuan akhir praktikum.

### Inti yang Harus Ditekankan

- Praktikum ini berfokus pada **Procedural Dungeon / Level di Unity**, bukan pembuatan level manual.
- `grid` berperan sebagai representasi utama dungeon, sementara `Unity` digunakan untuk membangun scene dari data tersebut.
- Alur umum adalah: `room` dan `corridor` → `start` dan `goal` → `enemy` dan `item` → validasi → scene `Unity`.
- Validasi penting untuk memastikan dungeon dapat dimainkan, terutama hubungan antara `start` dan `goal`.

### Transisi ke Slide Berikutnya

Setelah memahami gambaran umum praktikum, kita akan melihat rekomendasi opsi praktikum yang dapat dipilih mahasiswa, mulai dari pendekatan yang lebih sederhana hingga yang lebih menantang.

---

## Slide 068 - Rekomendasi Praktikum

### Narasi

Setelah gambaran umum praktikum, langkah berikutnya adalah menentukan **skala pengerjaan** yang realistis untuk mahasiswa S1. Pada slide ini, saya memberikan dua opsi yang bisa dipilih: **Opsi A — Random Walk Dungeon** dan **Opsi B — BSP Room-Corridor Dungeon**. Keduanya tetap berada pada konteks yang sama, yaitu membuat dungeon berbasis `grid`, menghasilkan layout, lalu memvalidasi hasilnya sebelum ditampilkan di `Unity`.

**Opsi A — Random Walk Dungeon** adalah pilihan yang lebih sederhana. Pendekatan ini biasanya dimulai dari `grid` kosong, kemudian proses generator bergerak secara acak dari satu sel ke sel lain sambil melakukan `carving floor`. Setiap langkah mengubah sel dari dinding menjadi lantai, sehingga terbentuk jalur yang saling terhubung.

Opsi ini cocok untuk memahami konsep dasar berikut:

- struktur `grid` dan koordinat sel,
- penggunaan `seed` agar hasil acak dapat direproduksi,
- proses `carving floor` secara bertahap,
- `validasi` konektivitas antara `start`, `goal`, dan area yang dapat dijelajahi.

Secara intuisi, `Random Walk` mirip dengan agen yang berjalan di lingkungan diskrit. Mahasiswa dapat melihat bagaimana keputusan langkah sederhana menghasilkan bentuk dungeon yang organik, tetapi kadang kurang rapi. Karena itu, opsi ini sangat baik untuk membangun fondasi sebelum masuk ke algoritma yang lebih terstruktur.

**Opsi B — BSP Room-Corridor Dungeon** adalah pilihan yang lebih menantang. Pendekatan ini tidak langsung menggambar jalur acak, tetapi terlebih dahulu membagi area menjadi beberapa sub-area menggunakan **BSP**, yaitu *Binary Space Partitioning*. Setelah area terbagi, generator menempatkan `room` pada tiap sub-area, lalu menghubungkan antar-`room` dengan `corridor`.

Opsi ini cocok untuk memahami konsep berikut:

- pembagian area secara hierarkis,
- penempatan `room` yang lebih terkontrol,
- pembuatan `corridor` antar-ruangan,
- hasil dungeon yang lebih rapi dan mudah dibaca secara visual.

Secara desain game, layout yang rapi membantu mahasiswa memahami hubungan spasial antar-ruangan. Hal ini juga memudahkan penempatan `start`, `goal`, `enemy`, dan `item`, serta memberi dasar yang lebih baik untuk perilaku NPC, `pathfinding`, dan validasi level di tahap berikutnya.

Kedua opsi ini tidak bersifat saling meniadakan. Jika kelompok ingin fokus pada penguasaan `grid`, `seed`, dan `validasi`, **Opsi A** adalah pilihan yang aman. Jika kelompok ingin hasil yang lebih mendekati level game dan siap mengerjakan struktur area yang lebih kompleks, **Opsi B** lebih sesuai.

Sebelum lanjut, mahasiswa perlu memahami bahwa perbedaan utama keduanya ada pada **tingkat kontrol layout**: `Random Walk` menghasilkan bentuk yang lebih bebas, sedangkan `BSP Room-Corridor` menghasilkan bentuk yang lebih terstruktur. Pemahaman ini penting karena akan menentukan seberapa mudah dungeon dikembangkan menjadi scene `Unity` yang utuh.

### Inti yang Harus Ditekankan

- **Opsi A — Random Walk Dungeon** lebih sederhana dan cocok untuk memahami `grid`, `seed`, `carving floor`, serta `validasi`.
- **Opsi B — BSP Room-Corridor Dungeon** lebih menantang dan cocok untuk memahami pembagian area, `room`, `corridor`, serta hasil dungeon yang lebih rapi.
- Perbedaan utamanya terletak pada **tingkat kontrol layout**: bebas dan organik versus terstruktur dan hierarkis.
- Kedua opsi tetap harus menghasilkan dungeon yang valid, yaitu `start`, `goal`, dan area penting dapat terhubung.

### Transisi ke Slide Berikutnya

Setelah memahami dua opsi ini, kita lanjut ke slide berikutnya untuk menentukan **opsi praktikum terbaik** beserta alasannya.

---

## Slide 069 - Opsi Praktikum Terbaik

### Narasi

Pada slide ini, kita memilih satu opsi praktikum yang paling layak untuk dilanjutkan. Dari dua alternatif yang sudah dibahas, rekomendasi utama adalah:

```text
BSP Room-Corridor Dungeon
```

Alasan utamanya bukan hanya karena dungeon terlihat lebih rapi, tetapi karena struktur level yang dihasilkan lebih mendukung tahap berikutnya, yaitu penempatan agen dan perilaku NPC.

Secara intuitif, dungeon berbasis **BSP** cenderung menghasilkan ruang-ruang yang jelas dan koridor yang menghubungkan ruang tersebut. Bentuk seperti ini memudahkan mahasiswa membayangkan di mana `start`, `goal`, `enemy`, dan `item` dapat ditempatkan. Jika ruang sudah terbentuk, mahasiswa tidak perlu menebak-nebak posisi objek; penempatan dapat dilakukan berdasarkan area yang valid.

Untuk perilaku agen, struktur ini juga lebih ramah terhadap **pathfinding**. Koridor dan ruang memberikan jalur yang mudah dibaca oleh sistem navigasi, termasuk `NavMesh` di Unity. Enemy dapat bergerak dari satu ruang ke ruang lain, menjaga jarak, mengejar pemain, atau kembali ke posisi awal dengan lebih konsisten.

Kelebihan lain adalah skalabilitas. Dungeon yang dihasilkan BSP lebih mudah dikembangkan menjadi proyek UAS karena mahasiswa dapat menambahkan:

- beberapa jenis `enemy`,
- item atau reward,
- checkpoint,
- debug visual,
- parameter `seed`,
- dan variasi ukuran dungeon.

Namun, jika kelompok membutuhkan versi yang lebih sederhana, opsi:

```text
Random Walk Dungeon
```

tetap sangat baik sebagai alternatif. Opsi ini cocok untuk memahami dasar grid, seed, carving floor, dan validasi sebelum beralih ke struktur yang lebih kompleks.

Sebelum lanjut, mahasiswa perlu memahami bahwa pilihan praktikum bukan sekadar soal membuat gambar dungeon. Pilihan ini menentukan seberapa mudah level tersebut dapat dihubungkan dengan pathfinding, decision making, dan interaksi pemain.

### Inti yang Harus Ditekankan

- **Opsi terbaik** untuk praktikum adalah `BSP Room-Corridor Dungeon`.
- Struktur ruang dan koridor memudahkan penempatan `start`, `goal`, `enemy`, dan `item`.
- Dungeon yang rapi lebih mendukung `NavMesh`, pathfinding, dan perilaku NPC.
- Opsi ini mudah diperluas ke proyek UAS.
- `Random Walk Dungeon` tetap layak sebagai alternatif sederhana.

### Transisi ke Slide Berikutnya

Setelah menentukan opsi praktikum, langkah berikutnya adalah melihat bagaimana scene praktikum disusun, termasuk komponen generator, level root, prefab, dan debug UI.

---

## Slide 070 - Struktur Scene Praktikum

### Narasi

Setelah memilih pendekatan praktikum, langkah berikutnya adalah menyiapkan **struktur scene** yang rapi. Scene bukan sekadar kumpulan objek, tetapi tempat seluruh pipeline PCG bertemu: data dungeon, prefab visual, objek gameplay, dan alat debug.

```text
PCG_Dungeon_Scene
├── DungeonGenerator
├── LevelRoot
├── PlayerPrefab
├── EnemyPrefabs
├── ItemPrefabs
├── FloorPrefab
├── WallPrefab
├── GoalPrefab
├── Main Camera
└── Debug UI
```

Pada struktur ini, `DungeonGenerator` berperan sebagai **pengendali utama**. Objek ini tidak perlu menyimpan seluruh level secara manual, tetapi menjalankan proses bertahap: membuat data dungeon, membangun level dari data tersebut, men-spawn objek gameplay, lalu menampilkan informasi debug.

Alurnya dapat dibaca sebagai pipeline sederhana:

1. `DungeonGenerator` menerima parameter generate, misalnya seed, ukuran grid, atau jumlah room.
2. Generator membuat data dungeon, baik berupa grid, room, corridor, atau jalur random walk.
3. Data tersebut digunakan untuk membangun level dengan prefab seperti `FloorPrefab` dan `WallPrefab`.
4. Objek gameplay seperti `PlayerPrefab`, `EnemyPrefabs`, `ItemPrefabs`, dan `GoalPrefab` ditempatkan pada posisi yang valid.
5. `Debug UI` menampilkan hasil atau informasi proses generate.

`LevelRoot` penting karena menjadi **parent** untuk semua objek yang dihasilkan secara dinamis, misalnya tile lantai, dinding, room, atau corridor. Dengan memisahkan objek hasil generate ke `LevelRoot`, kita dapat membersihkan level lama sebelum generate ulang tanpa mengganggu prefab, kamera, atau UI.

Prefab seperti `FloorPrefab`, `WallPrefab`, `PlayerPrefab`, `EnemyPrefabs`, `ItemPrefabs`, dan `GoalPrefab` berfungsi sebagai **template objek**. Ini membuat tampilan dan komponen objek tetap konsisten, sekaligus memudahkan penempatan berdasarkan hasil grid atau room. Misalnya, `FloorPrefab` di-instantiate pada tile yang dapat dilalui, sedangkan `WallPrefab` di-instantiate pada tile yang menghalangi.

Untuk kebutuhan gameplay dan perilaku NPC, struktur ini juga membantu karena posisi spawn dapat ditentukan dari data dungeon. `PlayerPrefab` dapat ditempatkan di start tile, `GoalPrefab` di goal tile, `EnemyPrefabs` di tile yang valid, dan `ItemPrefabs` di lokasi yang dipilih generator. Dengan begitu, pathfinding, NavMesh, atau perilaku NPC dapat bekerja pada level yang sudah terbentuk.

`Main Camera` dan `Debug UI` bukan sekadar pelengkap. Kamera membantu mahasiswa mengamati hasil generate, sedangkan `Debug UI` dapat menampilkan informasi seperti seed, ukuran grid, jumlah room, jumlah tile, atau status proses generate. Informasi ini sangat berguna ketika hasil dungeon belum sesuai harapan.

Sebelum lanjut ke struktur script, mahasiswa perlu memahami bahwa scene ini adalah **kerangka kerja**: generator menghasilkan data, data diubah menjadi level, level diisi objek, dan debug membantu evaluasi. Jika struktur ini sudah jelas, implementasi script akan lebih mudah karena setiap tanggung jawab sudah memiliki tempatnya.

### Inti yang Harus Ditekankan

- `DungeonGenerator` adalah pusat pipeline: **generate data**, **build level**, **spawn object**, dan **debug**.
- `LevelRoot` penting untuk memisahkan objek hasil generate agar mudah dibersihkan dan dibangun ulang.
- Prefab membuat objek seperti lantai, dinding, player, enemy, item, dan goal tetap konsisten serta mudah di-instantiate.
- Struktur scene memudahkan penempatan objek gameplay dan perilaku NPC berdasarkan tile atau room yang valid.

### Transisi ke Slide Berikutnya

Setelah struktur scene dipahami, langkah berikutnya adalah melihat bagaimana tanggung jawab tersebut dibagi ke dalam beberapa script.

---

## Slide 071 - Struktur Script Praktikum

### Narasi

Slide ini menunjukkan struktur script yang direncanakan untuk praktikum **PCG Dungeon Generation**. Struktur ini penting karena menentukan bagaimana proses pembuatan dungeon dipisah menjadi beberapa tanggung jawab yang jelas.

```text
Scripts/
├── DungeonGenerator.cs
├── DungeonGrid.cs
├── Room.cs
├── BSPNode.cs
├── TileType.cs
├── LevelBuilder.cs
├── SpawnManager.cs
└── DungeonDebug.cs
```

Secara umum, struktur ini membagi sistem menjadi beberapa bagian:

- `DungeonGenerator.cs` menjadi **koordinator utama**. Script ini mengatur alur generation, mulai dari menyiapkan data dungeon, membangun level, memanggil spawn, hingga menampilkan debug.
- `DungeonGrid.cs` digunakan untuk menyimpan **data grid dungeon**, misalnya posisi tile, ukuran peta, dan jenis tile pada setiap koordinat.
- `Room.cs` merepresentasikan **ruangan** yang dihasilkan, biasanya berupa data posisi dan ukuran ruangan.
- `BSPNode.cs` digunakan untuk algoritma **BSP**, yaitu cara membagi area menjadi beberapa bagian secara hierarkis.
- `TileType.cs` berisi definisi jenis tile, misalnya floor, wall, door, atau obstacle.
- `LevelBuilder.cs` bertugas mengubah data dungeon menjadi **objek scene**, seperti floor, wall, dan goal.
- `SpawnManager.cs` digunakan untuk menempatkan objek dinamis seperti enemy, item, atau player.
- `DungeonDebug.cs` membantu menampilkan visualisasi proses generation agar mudah diamati.

Pemisahan ini penting karena mahasiswa tidak perlu mencampur logika data, logika rendering, dan logika spawn dalam satu script. Dengan struktur seperti ini, bagian yang berubah dapat diganti tanpa mengganggu bagian lain.

Untuk versi **random walk**, struktur script dapat disesuaikan. Pada slide ini disebutkan bahwa `BSPNode.cs` dapat diganti dengan `RandomWalker.cs`. Artinya, jika algoritma generation tidak lagi menggunakan pembagian area berbasis BSP, tetapi menggunakan walker yang bergerak dan mengukir jalur, maka struktur data yang dibutuhkan juga berubah.

Sebelum lanjut ke parameter, mahasiswa perlu memahami bahwa setiap script memiliki peran berbeda. Parameter yang akan dibahas selanjutnya akan memengaruhi bagian tertentu dari struktur ini, misalnya ukuran grid, jumlah room, atau jumlah spawn.

### Inti yang Harus Ditekankan

- `DungeonGenerator.cs` adalah **entry point** atau koordinator utama proses generation.
- `DungeonGrid.cs`, `Room.cs`, dan `BSPNode.cs` lebih berfokus pada **data struktur dungeon**.
- `LevelBuilder.cs` dan `SpawnManager.cs` berfokus pada **pembangunan scene** dan penempatan objek.
- `DungeonDebug.cs` membantu visualisasi agar proses generation mudah dipahami.
- Untuk random walk, `BSPNode.cs` dapat diganti dengan `RandomWalker.cs` karena struktur data algoritmanya berbeda.

### Transisi ke Slide Berikutnya

Setelah struktur script dipahami, langkah berikutnya adalah melihat parameter apa saja yang akan mengatur hasil generation dungeon.

---

## Slide 072 - Parameter Praktikum

### Narasi

Pada slide ini, kita masuk ke bagian **parameter praktikum**. Parameter adalah nilai yang mengatur bagaimana **procedural content generation** membentuk dungeon. Tanpa parameter, generator hanya menghasilkan bentuk acak; dengan parameter, mahasiswa dapat mengontrol ukuran, kepadatan, jumlah ruang, jalur, dan isi level.

Contoh parameter utama:

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

Parameter ini dapat dibaca sebagai kontrak antara desain level dan algoritma generator. `seed` menentukan sumber acak yang dapat diulang. Jika `seed` sama, proses generasi seharusnya menghasilkan dungeon yang sama. Jika `seed` berbeda, hasil dapat berbeda secara signifikan.

Beberapa parameter menentukan **ruang dan grid**:

- `mapWidth` dan `mapHeight` mengatur jumlah kolom dan baris pada grid dungeon.
- `tileSize` mengatur ukuran visual satu tile di scene.
- `roomCount`, `minRoomSize`, dan `maxRoomSize` mengatur seberapa banyak ruang yang dibuat serta batas ukurannya.
- `corridorWidth` mengatur lebar koridor yang menghubungkan ruang.

Parameter lain menentukan **isi dan validitas level**:

- `enemyCount` dan `itemCount` mengatur jumlah objek yang ditempatkan setelah dungeon terbentuk.
- `maxGenerationAttempts` menjadi batas percobaan ketika generator gagal memenuhi syarat, misalnya ruang tidak terhubung atau start dan goal tidak valid.

Untuk pendekatan **cellular automata**, parameter yang relevan adalah:

```text
initialWallProbability
smoothIterations
wallThreshold
```

`initialWallProbability` menentukan seberapa banyak tile awal yang dijadikan dinding. Nilai yang lebih tinggi membuat dungeon lebih tertutup, sedangkan nilai yang lebih rendah membuat area lebih terbuka. `smoothIterations` mengatur berapa kali aturan seluler dijalankan. Semakin banyak iterasi, bentuk dinding biasanya semakin halus dan organik. `wallThreshold` menentukan batas keputusan akhir: tile dengan kepadatan dinding tertentu menjadi dinding, sisanya menjadi lantai.

Untuk pendekatan **random walk**, parameter yang relevan adalah:

```text
walkLength
walkerCount
brushSize
```

`walkLength` menentukan seberapa jauh satu walker bergerak sebelum berhenti. `walkerCount` menentukan berapa banyak walker yang bekerja secara paralel atau berurutan. `brushSize` menentukan lebar area yang digali oleh walker. Kombinasi ketiganya memengaruhi apakah dungeon terasa seperti labirin sempit, ruang terbuka, atau jaringan jalur yang kompleks.

Hal penting yang harus dipahami mahasiswa sebelum lanjut adalah bahwa parameter bukan sekadar angka bebas. Setiap parameter memengaruhi **determinisme**, **konektivitas**, **performa generasi**, dan **kelayakan level**. Mahasiswa perlu memastikan bahwa nilai parameter berada dalam rentang yang masuk akal, misalnya `minRoomSize` tidak lebih besar dari `maxRoomSize`, `enemyCount` tidak melebihi jumlah lantai yang tersedia, dan `maxGenerationAttempts` tidak membuat proses terlalu lama.

Dengan parameter yang jelas, mahasiswa dapat menguji generator secara sistematis: mengubah satu nilai, mengamati perubahan dungeon, lalu menilai apakah hasil masih sesuai tujuan desain.

### Inti yang Harus Ditekankan

- `seed` adalah kunci **reproducibility**: seed sama seharusnya menghasilkan dungeon sama.
- Parameter grid seperti `mapWidth`, `mapHeight`, dan `tileSize` menentukan skala dan bentuk dasar dungeon.
- Parameter ruang dan koridor seperti `roomCount`, `minRoomSize`, `maxRoomSize`, dan `corridorWidth` memengaruhi struktur level.
- Parameter isi seperti `enemyCount` dan `itemCount` menentukan kepadatan gameplay setelah dungeon terbentuk.
- `maxGenerationAttempts` menjadi pengaman ketika hasil generasi tidak valid.
- Parameter **cellular automata** dan **random walk** berbeda karena algoritma pembentukannya berbeda.

### Transisi ke Slide Berikutnya

Setelah parameter dipahami, langkah berikutnya adalah memeriksa hasil yang diharapkan dari generator, yaitu dungeon yang valid, dapat dimainkan, dan dapat diverifikasi melalui seed.

---

## Slide 073 - Output Praktikum

### Narasi

Pada tahap ini, mahasiswa tidak hanya melihat dungeon yang berhasil digenerate, tetapi juga memastikan bahwa hasil PCG memenuhi syarat sebagai level yang dapat dimainkan. Output yang diharapkan adalah bukti bahwa proses generation deterministik, valid secara spasial, dan siap dipakai oleh sistem game.

```text
Dungeon berbeda untuk seed berbeda
Dungeon sama untuk seed sama
Start dan goal valid
Ada path dari start ke goal
Enemy dan item spawn di floor
Level dapat dimainkan
Debug seed terlihat
```

Secara konseptual, `seed` menjadi sumber acak yang dapat direproduksi. Jika `seed` sama, urutan keputusan generation harus menghasilkan layout yang sama. Jika `seed` berbeda, layout dungeon dapat berubah. Hal ini penting untuk debugging, testing, dan konsistensi level.

Validitas level dapat diperiksa melalui beberapa hal:

1. **Start dan goal valid**: posisi awal pemain dan tujuan harus berada di tile `floor`, bukan di `wall` atau area tidak valid.
2. **Ada path dari start ke goal**: dungeon harus memiliki konektivitas minimal. Mahasiswa dapat memverifikasi ini dengan pathfinding sederhana seperti BFS atau A* pada grid tile.
3. **Enemy dan item spawn di floor**: entitas NPC atau item tidak boleh muncul di dinding. Spawn yang valid membuat level dapat dimainkan dan mencegah bug posisi.
4. **Level dapat dimainkan**: selain valid secara data, dungeon harus terasa masuk akal secara gameplay, misalnya tidak ada area terisolasi yang tidak bisa diakses.
5. **Debug seed terlihat**: menampilkan `seed` saat runtime membantu mahasiswa membandingkan hasil generation dan melacak perubahan parameter.

Output ini juga menjadi dasar sebelum menambahkan fitur opsional. Fitur seperti minimap, path preview, boss room, treasure room, locked door, atau runtime regeneration sebaiknya tidak mengganggu validitas dasar. Jika dungeon belum memenuhi syarat minimum, penambahan fitur hanya akan menutupi masalah generation.

Sebelum lanjut ke eksperimen, mahasiswa perlu memastikan bahwa output generation sudah stabil dan dapat diverifikasi. Dengan output yang valid, perubahan parameter pada slide berikutnya dapat diuji secara lebih bermakna.

### Inti yang Harus Ditekankan

- **Determinisme seed**: `seed` sama menghasilkan dungeon sama; `seed` berbeda menghasilkan dungeon berbeda.
- **Validitas level**: `start`, `goal`, `enemy`, dan `item` harus berada di tile `floor` yang valid.
- **Konektivitas**: harus ada path dari `start` ke `goal`, misalnya diverifikasi dengan BFS atau A*.
- **Debugging**: menampilkan `seed` membantu reproduksi hasil dan pemecahan masalah.
- **Fitur opsional**: minimap, path preview, boss room, treasure room, locked door, dan runtime regeneration adalah pengembangan setelah output dasar valid.

### Transisi ke Slide Berikutnya

Setelah output praktikum dinyatakan valid, langkah berikutnya adalah melakukan eksperimen parameter. Mahasiswa dapat mengubah `seed`, ukuran dungeon, jumlah room, ukuran room, `corridorWidth`, dan membandingkan metode generation seperti random walk dan BSP untuk melihat pengaruhnya terhadap hasil level.

---

## Slide 074 - Eksperimen Mahasiswa

### Narasi

Slide ini mengajak mahasiswa beralih dari melihat output menjadi **menguji perilaku generator dungeon** secara aktif. Tujuannya bukan hanya membuat dungeon yang berbeda, tetapi memahami bagaimana setiap parameter memengaruhi struktur level, konektivitas, dan kelayakan bermain.

Eksperimen pertama yang paling penting adalah mengubah `seed`. Dalam PCG, `seed` adalah sumber acak yang dapat dikendalikan. Jika `seed` sama, hasil dungeon harus sama; jika `seed` berbeda, hasil dungeon harus berbeda. Dengan cara ini, mahasiswa dapat mereproduksi masalah, membandingkan dua versi generator, dan memastikan bahwa proses generation bersifat **deterministik**.

Selanjutnya, mahasiswa dapat memvariasikan parameter geometri dungeon. Parameter ini sebaiknya diubah satu per satu agar efeknya mudah diamati:

- `dungeonSize` memengaruhi luas total level dan jarak tempuh.
- `roomCount` memengaruhi kepadatan ruang dan kompleksitas eksplorasi.
- `roomSize` memengaruhi ruang tempur, penempatan item, dan kemungkinan `dead-end`.
- `corridorWidth` memengaruhi pergerakan, ruang pandang, dan kenyamanan navigasi.

Perlu ditekankan bahwa perubahan parameter tidak selalu menghasilkan dungeon yang lebih baik. Dungeon yang terlalu besar bisa terasa kosong, terlalu banyak room bisa membuat path membingungkan, dan corridor yang terlalu sempit bisa mengurangi ruang taktis.

Eksperimen berikutnya adalah membandingkan strategi generation, yaitu `random walk` dan `BSP`. `random walk` cenderung menghasilkan dungeon yang lebih organik dan mirip lorong eksplorasi, tetapi bisa menghasilkan area yang tidak merata. `BSP` cenderung membagi ruang secara lebih terstruktur, sehingga room sering lebih seimbang dan mudah dianalisis. Mahasiswa tidak perlu memilih salah satu sebagai yang paling benar, tetapi harus mampu menjelaskan perbedaan topologi yang dihasilkan.

Setelah struktur dungeon terbentuk, mahasiswa dapat menambahkan elemen gameplay. Item dapat ditempatkan di `dead-end` sebagai reward eksplorasi, sedangkan enemy dapat ditempatkan di room tertentu sebagai tantangan. Penempatan ini harus tetap valid: posisi harus berada di `floor`, harus dapat dijangkau, dan tidak boleh menghalangi path dari `start` ke `goal`.

Eksperimen terakhir adalah validasi dan debug visual. Mahasiswa perlu menguji apakah path dari `start` ke `goal` selalu valid, apakah ada room yang terisolasi, dan apakah corridor benar-benar menghubungkan room. Menampilkan `room` dan `corridor` dengan warna berbeda sangat membantu karena mahasiswa dapat melihat struktur level secara langsung, bukan hanya dari hasil akhir.

Sebelum lanjut, mahasiswa perlu memahami bahwa eksperimen ini adalah dasar evaluasi. Setiap perubahan parameter harus dicatat: apa yang diubah, apa yang terjadi, dan apakah dungeon tetap dapat dimainkan. Dengan catatan ini, mahasiswa dapat menilai generator secara objektif, bukan hanya berdasarkan tampilan visual.

### Inti yang Harus Ditekankan

- Ubah parameter secara terkontrol agar pengaruhnya mudah diamati.
- `seed` harus menghasilkan dungeon yang sama untuk seed sama dan berbeda untuk seed berbeda.
- Parameter seperti `dungeonSize`, `roomCount`, `roomSize`, dan `corridorWidth` memengaruhi kepadatan, jarak, dan kenyamanan bermain.
- Perbandingan `random walk` dan `BSP` fokus pada struktur topologi, bukan hanya tampilan.
- Spawn item dan enemy harus berada di posisi valid, dapat dijangkau, dan tidak merusak path.
- Debug visual membantu memverifikasi konektivitas `room`, `corridor`, `dead-end`, `start`, dan `goal`.

### Transisi ke Slide Berikutnya

Setelah mahasiswa mencoba berbagai eksperimen, langkah berikutnya adalah menilai hasil secara sistematis: apakah dungeon selalu dapat dimainkan, apakah seed bekerja dengan benar, dan apakah parameter mudah dituning. Kita lanjut ke slide Evaluasi Praktikum.

---

## Slide 075 - Evaluasi Praktikum

### Narasi

Slide ini digunakan untuk mengevaluasi hasil praktikum **PCG dungeon**. Tujuannya bukan hanya memastikan generator berhasil berjalan, tetapi memastikan output benar-benar layak sebagai level game. Mahasiswa perlu memeriksa apakah dungeon selalu dapat dimainkan, apakah `start` dan `goal` terhubung, dan apakah `seed` bekerja dengan benar. Jika `seed` sama menghasilkan layout yang sama, dan `seed` berbeda menghasilkan layout berbeda, maka proses generation bersifat deterministik dan dapat diuji secara konsisten.

Evaluasi berikutnya melihat kualitas struktur dan isi dungeon. Poin penting yang perlu diperiksa antara lain:

- **Konektivitas**: `room` saling terhubung melalui `corridor`, tidak ada area terisolasi, dan jalur dari `start` ke `goal` dapat ditempuh.
- **Spawn valid**: `enemy` dan `item` muncul di posisi yang valid, misalnya di dalam `room` atau area yang dapat diakses, bukan di dinding atau area yang tidak masuk akal.
- **Kepadatan**: level tidak terlalu kosong atau terlalu padat, sehingga ritme eksplorasi tetap nyaman.
- **Tuning parameter**: ukuran dungeon, jumlah `room`, ukuran `room`, dan `corridor width` mudah diubah dan pengaruhnya terlihat jelas.
- **Debug visual**: warna berbeda untuk `room`, `corridor`, `start`, `goal`, `enemy`, dan `item` membantu mahasiswa memahami struktur dungeon secara cepat.

Selain aspek teknis, evaluasi juga perlu menyentuh pengalaman bermain. Dungeon yang baik tidak hanya valid secara struktur, tetapi juga terasa menarik untuk dimainkan. Menarik di sini bisa berarti ada variasi jalur, ruang untuk pertempuran, `dead-end` yang bermakna, dan ritme eksplorasi yang tidak monoton. Mahasiswa harus mampu menjelaskan apakah hasil generator sudah cukup sebagai lingkungan permainan, atau masih perlu perbaikan parameter dan validasi.

### Inti yang Harus Ditekankan

- Dungeon harus **playable**: `start` dan `goal` terhubung, `room` saling terhubung, dan tidak ada area terisolasi.
- `seed` harus deterministik: `seed` sama menghasilkan hasil sama, `seed` berbeda menghasilkan hasil berbeda.
- `enemy` dan `item` harus spawn di posisi valid, dan kepadatan level harus seimbang.
- Parameter harus mudah dituning, dan `debug` visual harus membantu memahami struktur dungeon.
- Kualitas dungeon tidak hanya dinilai dari validitas teknis, tetapi juga dari rasa bermain.

### Transisi ke Slide Berikutnya

Setelah evaluasi ini, kita akan melihat bagaimana PCG dungeon terhubung dengan materi sebelumnya, karena dungeon yang dihasilkan dapat menjadi lingkungan bagi pathfinding, movement NPC, decision, tactical, dan randomness.

---

## Slide 076 - Hubungan dengan Materi Sebelumnya

### Narasi

Slide ini membantu mahasiswa melihat bahwa **PCG dungeon** bukan topik berdiri sendiri. Ia adalah tahap integrasi dari beberapa kemampuan perilaku agen yang sudah dibahas.

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

Intuisi praktisnya: dungeon yang dihasilkan secara prosedural harus bisa dipakai oleh agen lain. Jika `room` tidak terhubung, `pathfinding` gagal. Jika `start` dan `goal` tidak terjangkau, level tidak valid. Jika `enemy` tidak punya perilaku, dungeon hanya menjadi peta kosong.

Hubungan dengan materi sebelumnya dapat dilihat sebagai berikut:

- **Pathfinding** digunakan untuk memvalidasi apakah `start`, `goal`, `room`, dan jalur antar ruang benar-benar dapat dilalui.
- **Movement NPC** memanfaatkan hasil dungeon sebagai `environment` tempat agen bergerak, menghindari tabrakan, dan menuju target.
- **Decision AI** menentukan perilaku `enemy` seperti `patrol`, `chase`, `attack`, atau `flee` berdasarkan kondisi level.
- **Tactical AI** memanfaatkan struktur dungeon, misalnya `cover`, `room`, dan jalur sempit, untuk membuat keputusan yang lebih kontekstual.
- **Seed, `randomness`, dan `generate-and-test`** memastikan hasil dungeon dapat direproduksi, bervariasi, dan lolos uji validitas.

Dengan cara ini, PCG menjadi **lingkungan dinamis** bagi seluruh sistem perilaku. `pathfinding` tidak hanya berjalan di grid statis, tetapi di dungeon yang baru saja dibuat. `enemy` tidak hanya bereaksi di arena tetap, tetapi menyesuaikan perilaku terhadap `room`, `item`, dan jalur yang tersedia.

Hal yang perlu dipahami mahasiswa sebelum lanjut adalah bahwa kualitas PCG tidak hanya diukur dari tampilan dungeon, tetapi dari kemampuannya mendukung **permainan yang dapat dimainkan**. Dungeon harus valid secara spasial, konsisten secara acak, dan kompatibel dengan perilaku agen.

### Inti yang Harus Ditekankan

- PCG dungeon adalah **integrasi** dari pathfinding, movement, decision, tactical, dan randomness.
- Hasil PCG harus divalidasi agar `start`, `goal`, `room`, dan `enemy/item` berada pada posisi yang valid.
- Dungeon yang baik menjadi **environment** tempat NPC, enemy, dan sistem perilaku lain dapat bekerja secara konsisten.

### Transisi ke Slide Berikutnya

Setelah PCG menghasilkan dungeon yang valid, langkah berikutnya adalah melihat bagaimana dungeon dapat dihubungkan dengan **Dynamic Difficulty Adjustment** untuk membuat pengalaman bermain yang lebih adaptif.

---

## Slide 077 - Hubungan dengan Materi Berikutnya

### Narasi

Setelah kita memahami bagaimana **PCG** dapat menghasilkan dungeon secara prosedural, langkah berikutnya adalah melihat ke mana arah materi ini akan dibawa. Slide ini menunjukkan bahwa **PCG** tidak berhenti pada pembuatan level yang bervariasi. Lebih jauh dari itu, **PCG** dapat menjadi dasar bagi sistem yang mampu menyesuaikan tantangan selama permainan berlangsung.

Materi berikutnya yang akan kita bahas adalah **Dynamic Difficulty Adjustment**. Konsep ini berkaitan dengan kemampuan game untuk mengamati kondisi pemain, lalu menyesuaikan tingkat kesulitan secara dinamis. Dalam konteks **PCG**, penyesuaian tersebut tidak harus dilakukan dengan mengubah angka statistik pemain saja, tetapi juga dengan mengubah struktur level itu sendiri.

Sebagai gambaran, **PCG** dapat menerima parameter seperti `enemyCount`, `itemCount`, `dungeonLength`, dan `pathComplexity`. Parameter ini kemudian diterjemahkan menjadi layout dungeon yang berbeda. Dengan cara ini, generator level tidak hanya membuat satu dungeon acak, tetapi dapat menghasilkan dungeon yang lebih sulit atau lebih mudah sesuai kebutuhan.

Contoh sederhana yang perlu dipahami mahasiswa adalah sebagai berikut:

- Jika pemain terlalu mudah menang, sistem dapat:
  - menambah jumlah `enemy`,
  - mengurangi jumlah `item`,
  - membuat dungeon lebih panjang.

- Jika pemain kesulitan, sistem dapat:
  - menambah `healthItem`,
  - mengurangi jumlah `enemy`,
  - membuat jalur lebih sederhana.

Poin pentingnya adalah **PCG** berperan sebagai alat untuk mewujudkan keputusan adaptif tersebut ke dalam bentuk level yang nyata. Jadi, **PCG** tidak hanya menghasilkan lingkungan permainan, tetapi juga dapat menjadi bagian dari sistem yang membuat game terasa lebih responsif terhadap pemain.

Sebelum lanjut ke ringkasan, mahasiswa perlu memahami bahwa level procedural dapat dipandang sebagai variabel yang dapat diatur, bukan sekadar aset statis. Pemahaman ini penting karena akan menjadi dasar ketika kita membahas bagaimana sistem adaptif dapat bekerja dalam desain game.

### Inti yang Harus Ditekankan

- **PCG** dapat menjadi dasar bagi **game adaptif**.
- **Dynamic Difficulty Adjustment** dapat menggunakan **PCG** untuk mengubah struktur level.
- Penyesuaian tantangan dapat dilakukan melalui perubahan `enemyCount`, `itemCount`, `dungeonLength`, dan kompleksitas jalur.
- **PCG** menerjemahkan parameter adaptif menjadi layout dungeon yang dapat dimainkan.

### Transisi ke Slide Berikutnya

Setelah melihat hubungan **PCG** dengan materi berikutnya, kita akan kembali merangkum seluruh konsep yang telah kita pelajari hari ini.

---

## Slide 078 - Ringkasan Materi

### Narasi

Para mahasiswa, pada slide ini kita merangkum keseluruhan materi **PCG for Level & Dungeon Generation** yang telah kita pelajari. Fokus utamanya adalah bagaimana sebuah level atau dungeon dapat dibuat secara prosedural, bukan hanya digambar manual. Kita mulai dari **grid-based generation** dan **grid representation**, lalu masuk ke beberapa teknik dasar seperti `random fill`, `random walk`, `BSP`, `cellular automata`, dan **constraint-based generation**. Setelah itu, kita membahas bagaimana hasil generasi tersebut perlu melewati **validation**, penempatan `start` dan `goal`, penempatan `enemy` dan `item`, hingga implementasi sederhana dalam `Unity` dan praktikum dungeon prosedural.

```text
PCG for Level & Dungeon Generation
│
├── Grid-Based Generation
├── Grid Representation
├── Random Fill
├── Random Walk
├── BSP
├── Cellular Automata
├── Constraint-Based Generation
├── Validation
├── Room & Corridor
├── Start / Goal Placement
├── Enemy / Item Placement
├── Unity Level Building
└── Procedural Dungeon Praktikum
```

Inti yang harus benar-benar dipahami adalah: level procedural yang baik tidak cukup hanya “acak” atau “berbeda setiap kali dijalankan”. Level tersebut harus tetap **playable**, **terkontrol**, dan sesuai dengan tujuan desain gameplay. Artinya, variasi visual atau struktur dungeon harus tetap menjaga keterjangkauan, keseimbangan tantangan, dan pengalaman bermain. Untuk itu, teknik generasi saja tidak cukup; kita juga membutuhkan **constraint**, **validation**, dan penempatan entitas yang masuk akal.

Secara praktis, alur berpikirnya adalah: representasikan lingkungan sebagai `grid`, hasilkan bentuk dungeon menggunakan teknik yang sesuai, periksa apakah level tersebut valid, lalu letakkan `start`, `goal`, `enemy`, dan `item` dengan mempertimbangkan gameplay. Mahasiswa perlu menyadari bahwa pilihan teknik sangat memengaruhi hasil: `random walk` cenderung menghasilkan jalur yang organik, `BSP` cocok untuk struktur room-corridor yang rapi, `cellular automata` sering menghasilkan bentuk cave-like, sedangkan **constraint-based generation** membantu menjaga agar hasil tetap sesuai aturan desain.

### Inti yang Harus Ditekankan

- **PCG** digunakan untuk membuat level atau dungeon yang bervariasi, tetapi tetap harus **playable** dan sesuai tujuan desain.
- Teknik seperti `random fill`, `random walk`, `BSP`, dan `cellular automata` menghasilkan karakter dungeon yang berbeda.
- **Validation** penting untuk memastikan level tidak rusak, tidak terputus, dan tetap dapat dimainkan.
- Penempatan `start`, `goal`, `enemy`, dan `item` memengaruhi pengalaman bermain dan keseimbangan tantangan.
- Implementasi dalam `Unity` menunjukkan bahwa konsep prosedural dapat diterapkan langsung dalam pengembangan game.

### Transisi ke Slide Berikutnya

Setelah merangkum konsep utamanya, kita akan masuk ke beberapa pertanyaan diskusi untuk menguji pemahaman mahasiswa tentang pilihan teknik, validasi level, penempatan entitas, dan hubungan PCG dengan desain gameplay.

---

## Slide 079 - Pertanyaan Diskusi

### Narasi

Slide ini berfungsi sebagai **checkpoint pemahaman** sebelum mahasiswa masuk ke latihan. Sepuluh pertanyaan pada slide sebaiknya tidak dijawab sebagai hafalan, tetapi digunakan untuk menguji hubungan antara **teknik generation**, **tujuan desain level**, dan **validasi playable**.

Saya akan mengarahkan diskusi ke empat kelompok:

- **Representasi dan teknik dasar**: `grid`, `random fill`, `random walk`, `BSP`, dan `cellular automata`.
- **Kontrol desain**: `parameter`, `constraint`, `start`, `goal`, `enemy`, dan `item`.
- **Validasi level**: peran `pathfinding` dalam memastikan level bisa dimainkan.
- **Ekstensi desain**: hubungan PCG dungeon dengan `DDA`.

Untuk kelompok pertama, karakter tiap teknik dapat dilihat sebagai berikut:

- `Grid`: cocok karena representasinya sederhana, mudah diuji, dan mudah dihubungkan dengan `pathfinding` atau `Tilemap` di Unity.
- `Random fill`: memberi variasi cepat, tetapi tanpa validasi bisa menghasilkan `start` dan `goal` yang tidak terhubung.
- `Random walk`: cocok untuk `cave` karena menghasilkan jalur organik yang bisa dikontrol melalui `walk length` dan `brush size`.
- `BSP`: cocok untuk `dungeon` bergaya `room-corridor` karena membagi ruang secara hierarkis.
- `Cellular automata`: bisa menghasilkan bentuk gua yang menarik, tetapi masalah utamanya adalah sulit mengontrol konektivitas, ukuran ruang, dan penempatan objek.

Untuk kelompok kedua, mahasiswa perlu membedakan **variasi** dan **syarat minimum**. `Parameter` mengatur variasi, seperti `map size`, `density`, `walk length`, atau `seed`. `Constraint` adalah syarat yang tidak boleh dilanggar, misalnya `goal harus reachable` dan `enemy tidak boleh spawn dekat start`. Penempatan `start` dan `goal` menentukan tujuan pemain, sedangkan `pathfinding` membantu memvalidasi apakah `goal` benar-benar dapat dicapai. `Enemy` yang terlalu dekat `start` dapat membuat pengalaman awal terasa tidak adil, karena pemain belum memahami lingkungan dan kontrol.

Pertanyaan terakhir menghubungkan PCG dengan `DDA`. Dalam konteks ini, `DDA` dapat menyesuaikan `parameter` atau `constraint` berdasarkan performa pemain, misalnya mengurangi jumlah `enemy`, memperlebar jalur, atau memindahkan `goal` ke posisi yang lebih mudah. Namun, setiap penyesuaian tetap harus melewati validasi agar level tidak menjadi tidak playable.

### Inti yang Harus Ditekankan

- `Grid` adalah dasar yang memudahkan representasi, validasi, dan integrasi dengan `pathfinding`.
- Teknik seperti `random fill`, `random walk`, `BSP`, dan `cellular automata` menghasilkan karakter level yang berbeda, tetapi semuanya perlu validasi.
- `Parameter` memberi variasi, sedangkan `constraint` menjaga syarat playable.
- `Start`, `goal`, `enemy`, dan `item` harus ditempatkan dengan tujuan desain, bukan hanya acak.
- `Pathfinding` berfungsi ganda: membantu pergerakan NPC dan memvalidasi konektivitas level.
- `DDA` dapat memperluas PCG dengan menyesuaikan parameter berdasarkan pengalaman pemain, tetapi tetap harus menjaga level tetap valid.

### Transisi ke Slide Berikutnya

Setelah memahami pertanyaan diskusi ini, kita akan masuk ke latihan konsep `random walk`. Latihan tersebut akan meminta mahasiswa merancang level `cave` sederhana dengan spesifikasi grid, `start`, `walk length`, `goal`, dan aturan spawn `enemy`.

---

## Slide 080 - Latihan Konsep Random Walk

### Narasi

Pada slide ini kita berlatih merancang level **cave** menggunakan **random walk**. Intuisi awalnya sederhana: sebuah agen berjalan acak di grid, lalu setiap sel yang dilewati diubah menjadi `floor`. Karena `brushSize` bernilai `1`, hanya sel saat ini yang digali, sehingga hasil akhirnya cenderung berupa lorong sempit dan organik, bukan ruang-ruang dungeon yang rapi.

Spesifikasi latihannya adalah sebagai berikut:

```text
Map 40 x 40
Start di tengah
Walk length 300
Brush size 1
Goal di floor terjauh dari start
Enemy tidak boleh muncul dekat start
```

Untuk **data grid**, gunakan array dua dimensi berukuran `40 x 40`, misalnya `int[,] grid` atau `Tile[,] grid`. Nilai `0` dapat mewakili `wall`, sedangkan `1` mewakili `floor`. Posisi `start` berada di tengah, yaitu sekitar `(20, 20)` jika indeks dimulai dari `0`. Grid awal sebaiknya diisi `wall`, kemudian sel `start` diubah menjadi `floor` sebelum proses `random walk` dimulai.

Cara memilih **arah random** dapat dilakukan dengan memilih satu dari empat arah dasar: `up`, `down`, `left`, `right`. Pada setiap langkah, agen memilih arah acak, kemudian memindahkan posisi ke sel berikutnya jika sel tersebut masih berada dalam batas map. Jika arah yang dipilih keluar batas, cara paling sederhana untuk latihan awal adalah memilih ulang arah sampai mendapatkan langkah yang valid.

Setelah `walkLength` sebanyak `300` langkah selesai, semua sel yang pernah dilewati agen menjadi `floor`. Karena `brushSize` bernilai `1`, tidak perlu menggambar area sekitar; cukup ubah sel `current` menjadi `floor`. Langkah ini menghasilkan jalur yang terhubung secara alami, tetapi tetap perlu divalidasi agar aman untuk gameplay.

Untuk menentukan `goal`, cari `floor` yang terjauh dari `start`. Cara yang paling jelas adalah menjalankan `BFS` dari `start` hanya pada sel `floor`. Simpan nilai `distance` untuk setiap sel, lalu pilih sel `floor` dengan jarak terbesar sebagai `goal`. Dengan cara ini, `goal` tidak hanya acak, tetapi benar-benar berada di titik yang paling jauh dari posisi awal pemain.

Validasi level penting sebelum level dianggap siap dipakai. Beberapa hal yang perlu dicek:

1. `start` dan `goal` berada di sel `floor`.
2. `goal` dapat dicapai dari `start` melalui `BFS`.
3. Jumlah sel `floor` cukup untuk gameplay.
4. Ada kandidat sel `enemy` dan `item` yang cukup jauh dari `start`.
5. Tidak ada area `floor` yang tidak terhubung jika nanti ada modifikasi tambahan.

Untuk `enemy` dan `item`, gunakan aturan jarak dari `start`. Misalnya, tentukan `minSpawnDistance` seperti `8` atau `10` sel. Kumpulkan semua sel `floor` yang memiliki `distance` lebih besar dari ambang tersebut, lalu pilih secara acak untuk `enemy` dan `item`. `enemy` sebaiknya tidak muncul terlalu dekat dengan `start` agar pemain tidak langsung mendapat tekanan tanpa persiapan. `item` dapat ditempatkan di area yang lebih menantang atau dekat `goal`, tetapi tetap harus berada di sel `floor` yang dapat dicapai.

Sebelum lanjut, mahasiswa perlu memahami bahwa `random walk` bukan sekadar membuat pola acak. Ia adalah proses **generation** yang menghasilkan struktur level, lalu diikuti **validation** dan **placement** agar level bisa dimainkan. Poin kuncinya adalah: grid sebagai representasi, `random walk` sebagai pembentuk `floor`, `BFS` sebagai penentu jarak dan validasi, serta aturan spawn sebagai batasan gameplay.

### Inti yang Harus Ditekankan

- Gunakan grid `40 x 40` dengan nilai `wall` dan `floor`, lalu mulai dari `start` di tengah.
- `Random walk` dengan `walkLength = 300` dan `brushSize = 1` menghasilkan cave yang organik dan cenderung berupa jalur sempit.
- `Goal` ditentukan sebagai `floor` terjauh dari `start` menggunakan `BFS`.
- Validasi level wajib dilakukan: `start` dan `goal` harus `floor`, `goal` harus reachable, dan spawn harus valid.
- `Enemy` tidak boleh muncul dekat `start`; gunakan ambang jarak minimum dari `start` untuk memilih sel spawn.

### Transisi ke Slide Berikutnya

Setelah memahami cara membuat cave dengan `random walk`, kita akan beralih ke struktur dungeon yang lebih terkontrol menggunakan **BSP**, yaitu membagi area menjadi ruang-ruang dan menghubungkannya dengan koridor.

---

## Slide 081 - Latihan Konsep BSP

### Narasi

Pada slide ini kita beralih dari **random walk** ke **BSP**, yaitu *Binary Space Partition*. Intuisinya, dungeon tidak dibuat dengan jalan acak, tetapi dengan **membagi area** secara berulang menjadi kotak-kotak kecil. Setiap kotak akhir disebut **leaf**, dan leaf inilah yang menjadi calon **room**. Dengan cara ini, struktur dungeon lebih mudah dikendalikan: ukuran ruang, jarak antar ruang, dan konektivitas dapat diatur sejak tahap generation.

Untuk spesifikasi `Map 60 x 40`, langkah desainnya dapat dirangkum sebagai berikut:

1. **Split area**: mulai dari rectangle penuh `60 x 40`. Pecah secara vertikal atau horizontal pada posisi acak, tetapi hentikan pembagian ketika leaf sudah terlalu kecil untuk dipecah lagi, sesuai parameter `Minimum leaf size 12`. Parameter ini mencegah leaf terlalu kecil sehingga room tidak muat.
2. **Buat room**: di setiap leaf, tempatkan room dengan ukuran antara `4 x 4` dan `10 x 8`. Posisi room dipilih acak di dalam leaf dengan margin agar tidak menabrak dinding leaf.
3. **Hubungkan corridor**: gunakan struktur pohon BSP. Setiap room anak dihubungkan ke room induk melalui corridor berbentuk L, biasanya melewati titik tengah room. Cara ini membuat semua room terhubung secara alami.
4. **Tentukan start dan goal**: letakkan `start` di room pertama, misalnya leaf pertama pada urutan traversal. Untuk `goal`, bangun graph room berdasarkan corridor, lalu jalankan `BFS` dari start dan pilih room dengan jarak terbesar.
5. **Tempatkan enemy dan item**: setelah room, corridor, start, dan goal valid, baru letakkan `enemy` dan `item`. Enemy sebaiknya tidak dekat start, sedangkan item dapat diletakkan di room yang lebih jauh atau di corridor penting.

Bagian penting yang harus dipahami mahasiswa adalah **urutan generation**. BSP bukan hanya menghasilkan bentuk acak, tetapi menghasilkan **hierarki ruang**. Karena setiap leaf terhubung ke induknya, konektivitas dungeon lebih mudah divalidasi dibandingkan metode yang hanya mengandalkan bentuk acak. Jika ada room yang tidak terjangkau, masalahnya biasanya ada pada tahap pembuatan corridor atau graph room, bukan pada bentuk room itu sendiri.

Untuk `goal di room terjauh`, mahasiswa perlu memahami bahwa "terjauh" bukan berarti koordinat x atau y paling besar, melainkan **jarak path** dalam graph dungeon. Dengan `BFS`, jarak yang dihitung adalah jumlah langkah atau jumlah room yang harus dilalui dari `start`. Jika ada beberapa room dengan jarak sama, bisa dipilih salah satu secara deterministik, misalnya berdasarkan index room, agar hasil latihan konsisten.

Penempatan `enemy` dan `item` juga harus mengikuti constraint. Enemy tidak boleh muncul dekat `start` agar pemain tidak langsung mendapat tekanan. Item dapat digunakan sebagai reward di room yang lebih jauh. Semua penempatan harus divalidasi terhadap `grid`: tidak berada di dinding, tidak tumpang tindih, dan tetap reachable. Dengan demikian, dungeon yang dihasilkan tidak hanya terlihat acak, tetapi memiliki **struktur, tujuan, tantangan, dan validasi**.

### Inti yang Harus Ditekankan

- **BSP** bekerja dengan membagi area menjadi leaf secara rekursif, lalu menjadikan leaf sebagai calon **room**.
- Constraint seperti `Minimum leaf size 12`, room `4 x 4` sampai `10 x 8`, dan konektivitas harus dicek sejak tahap generation.
- Corridor paling aman dibuat mengikuti pohon BSP: setiap room anak terhubung ke room induk.
- `goal` ditentukan dari **jarak path** menggunakan `BFS`, bukan dari posisi koordinat saja.
- Penempatan `enemy` dan `item` dilakukan setelah dungeon valid, dengan aturan jarak dari `start` dan validasi `grid`.

### Transisi ke Slide Berikutnya

Setelah latihan konsep BSP ini, kita masuk ke penutup praktikum. Di slide berikutnya, kita akan merangkum bahwa praktikum detail akan dibuat pada modul terpisah, dengan fokus pada grid data, seed, generation algorithm, validasi, instantiation prefab, dan debug visual, sebelum materi berikutnya membahas Dynamic Difficulty Adjustment.

---

## Slide 082 - Penutup

### Narasi

Kita tutup pertemuan ke-10 tentang **PCG for Level & Dungeon Generation**. Pada tahap ini, mahasiswa perlu melihat PCG bukan sekadar algoritma yang menghasilkan bentuk acak, tetapi sebagai proses produksi level yang memiliki data, aturan, validasi, dan hasil visual di Unity.

Praktikum detail akan dibuat pada modul terpisah:

```text
Procedural Dungeon / Level di Unity
```

Fokus praktikum:

- **`grid data`** sebagai representasi level,
- **`seed`** untuk hasil yang dapat diulang,
- **`generation algorithm`** seperti room/corridor atau random walk,
- **`validation`** untuk memastikan level layak dimainkan,
- **`prefab instantiation`** untuk membangun tile, room, corridor, enemy, dan item,
- **`enemy/item placement`** agar tantangan tersebar secara bermakna,
- **`debug visual`** untuk memeriksa hasil generation.

Dalam Unity, alurnya dapat dipahami sebagai: data grid -> proses generation -> validasi -> instantiation objek -> penempatan konten -> visualisasi debug. Mahasiswa perlu memahami bahwa dungeon procedural bukan hanya menghasilkan bentuk acak, tetapi menghasilkan ruang bermain yang memiliki **struktur**, **konektivitas**, **tujuan**, **tantangan**, dan **validasi**.

Sebelum lanjut, pastikan mahasiswa dapat menjelaskan bagaimana `seed` memengaruhi hasil, bagaimana `grid` menjadi sumber data, dan bagaimana `validation` mencegah level yang tidak terhubung atau tidak dapat diselesaikan.

Materi berikutnya:

```text
Dynamic Difficulty Adjustment
```

### Inti yang Harus Ditekankan

- **PCG** menghasilkan level secara algoritmik, bukan hanya aset statis.
- **`seed`** penting untuk reproduktibilitas dan testing.
- **`grid data`** adalah dasar representasi level sebelum di-instantiate di Unity.
- **`validation`** memastikan konektivitas, `start`/`goal`, dan kelayakan bermain.
- **`prefab instantiation`** menghubungkan data generation dengan objek game.
- Dungeon yang baik memiliki struktur, tujuan, tantangan, dan validasi.

### Transisi ke Slide Berikutnya

Setelah memahami cara membangun level secara prosedural, langkah berikutnya adalah membuat level yang dapat menyesuaikan tingkat kesulitan pemain. Materi berikutnya akan membahas **Dynamic Difficulty Adjustment**.
