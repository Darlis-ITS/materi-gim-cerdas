# Narasi Game Cerdas - Pertemuan 04

## Pathfinding & Navigation

Sumber: markdown/pert04.md

---

## Slide 001 - Cover

### Narasi

Selamat datang pada **Pertemuan 4** mata kuliah **Game Cerdas**, dengan topik **Pathfinding & Navigation**. Pada pertemuan ini kita akan membahas bagaimana **NPC** dapat menentukan rute dari satu lokasi ke lokasi lain secara efisien. Intuisi awalnya sederhana: sebelum NPC bergerak, ia perlu tahu urutan titik mana yang harus dilewati. Proses inilah yang disebut **pathfinding**, yaitu perencanaan jalur global dalam lingkungan game.

Materi ini akan dibangun dari representasi dunia hingga algoritma pencarian. Kita akan melihat bagaimana lingkungan game dapat dimodelkan sebagai `graph`, bagaimana `waypoint` digunakan sebagai titik-titik penting, serta bagaimana algoritma seperti `BFS`, `Dijkstra`, dan `A*` membantu menemukan jalur. Konsep `heuristic` akan dijelaskan sebagai cara memperkirakan biaya menuju tujuan agar pencarian lebih cepat. Setelah itu, kita akan melanjutkan ke representasi yang lebih umum di game modern, yaitu **Navigation Mesh**, dan penerapannya melalui `NavMesh` di Unity.

Fokus utama pertemuan ini adalah memahami ide, bukan langsung masuk ke implementasi lengkap. Mahasiswa perlu memahami bahwa **pathfinding** menghasilkan urutan titik atau rute, sedangkan pergerakan halus dari titik ke titik biasanya ditangani oleh sistem navigasi atau steering. Praktikum untuk implementasi `A*` sederhana dan `NavMesh` Unity akan dibuat terpisah, sehingga pada sesi teori ini kita menekankan konsep, pemilihan algoritma, dan cara berpikir yang tepat sebelum menulis kode.

### Inti yang Harus Ditekankan

- **Pathfinding** adalah proses mencari urutan lokasi yang harus dilewati NPC dari titik awal ke titik tujuan.
- Lingkungan game dapat dimodelkan sebagai `graph`, `waypoint`, atau **Navigation Mesh** tergantung kebutuhan.
- `BFS`, `Dijkstra`, dan `A*` adalah algoritma pencarian jalur dengan karakteristik efisiensi dan penggunaan `heuristic` yang berbeda.
- `NavMesh` di Unity adalah cara praktis menerapkan **Navigation Mesh** agar NPC dapat bergerak di lingkungan 3D.
- Hasil pathfinding biasanya berupa rute, bukan gerakan halus; gerakan halus membutuhkan sistem navigasi tambahan.

### Transisi ke Slide Berikutnya

Sebelum masuk ke konsep pathfinding, kita akan meninjau kembali materi pertemuan sebelumnya tentang pergerakan lokal NPC, agar mahasiswa dapat membedakan antara perencanaan jalur dan perilaku gerak yang halus.

---

## Slide 002 - Review Pertemuan 3

### Narasi

Sebelum kita masuk ke topik **Pathfinding & Navigation**, kita perlu menyegarkan kembali materi Pertemuan 3, yaitu **Movement AI & Steering Behaviors**. Pada pertemuan sebelumnya, kita membahas bagaimana sebuah agent atau NPC dapat bergerak secara lebih natural di lingkungan game.

Materi utamanya adalah kumpulan perilaku gerak lokal, antara lain:

- `Seek`
- `Flee`
- `Arrive`
- `Pursue`
- `Evade`
- `Wander`
- `Obstacle Avoidance`
- `Separation`, `Alignment`, `Cohesion`

Perilaku-perilaku ini biasanya digunakan untuk membuat NPC bergerak menuju target, menjauh dari ancaman, menghindari tabrakan, atau bergerak dalam kelompok.

Contoh sederhana alurnya adalah sebagai berikut:

```text
NPC melihat target
        ↓
Seek / Arrive
        ↓
NPC bergerak menuju target
```

Dalam contoh ini, input utamanya adalah posisi target. Prosesnya adalah NPC menghitung gaya gerak atau arah gerak berdasarkan perilaku steering. Outputnya adalah pergerakan NPC yang relatif halus dan responsif terhadap posisi target.

Poin penting yang perlu dipahami adalah: **steering behavior menjawab pertanyaan bagaimana agent bergerak secara lokal dan halus**. Artinya, steering sangat berguna untuk mengatur gerak langsung, misalnya mengejar, menghindar, atau mendekati target. Namun, steering tidak otomatis menjawab pertanyaan lebih besar, yaitu jalur mana yang harus ditempuh dari satu lokasi ke lokasi lain ketika lingkungan memiliki banyak rintangan.

### Inti yang Harus Ditekankan

- **Steering behavior** mengatur gerak lokal NPC, seperti `Seek`, `Flee`, `Arrive`, `Pursue`, dan `Evade`.
- Output steering biasanya berupa gaya, arah, atau kecepatan yang membuat pergerakan NPC terasa lebih halus.
- Steering cocok untuk perilaku gerak langsung, tetapi belum cukup untuk mencari jalur memutar di lingkungan yang kompleks.

### Transisi ke Slide Berikutnya

Sekarang kita sudah mengingat kembali peran steering behavior. Selanjutnya, kita akan melihat batasannya: apa yang terjadi ketika NPC hanya menggunakan `Seek` di hadapan obstacle besar atau labirin?

---

## Slide 003 - Keterbatasan Steering Behavior

### Narasi

Slide ini membantu mahasiswa melihat batas kemampuan **steering behavior**. Pada pembahasan sebelumnya, steering behavior digunakan untuk membuat `NPC` bergerak secara lokal, halus, dan reaktif terhadap target atau lingkungan sekitar.

Namun, steering behavior yang sederhana memiliki keterbatasan ketika lingkungan tidak lagi terbuka. Jika ada **obstacle** besar atau labirin, gaya gerak lokal seperti `Seek` atau `Arrive` tidak selalu mampu menemukan rute yang benar.

Contoh sederhana dapat dilihat pada diagram berikut:

```text
NPC ● ───────→ ███████ ───────→ Target ●
```

Dalam situasi ini, `NPC` berada di sisi kiri, `target` berada di sisi kanan, dan di tengah terdapat obstacle yang menghalangi jalur langsung.

Jika `NPC` hanya memakai `Seek`, perilakunya akan sangat sederhana:

```text
NPC bergerak lurus ke target
dan menabrak obstacle.
```

Masalahnya, `Seek` hanya menghitung arah menuju target, bukan mencari jalur yang dapat dilalui. Akibatnya, `NPC` bisa terus mendorong ke arah target meskipun jalur langsung terhalang.

Untuk kasus seperti ini, dibutuhkan **pathfinding**. Pathfinding bertugas mencari rute yang valid dari posisi `NPC` menuju `target`, misalnya dengan memutar di sekitar obstacle.

Dengan kata lain, steering behavior menjawab pertanyaan:

> Bagaimana `NPC` bergerak secara lokal?

Sedangkan pathfinding menjawab pertanyaan:

> Lewat mana `NPC` harus berjalan?

Sebelum lanjut, mahasiswa perlu memahami bahwa movement lokal yang halus tidak otomatis berarti navigasi global yang benar. Keduanya saling melengkapi, tetapi memiliki tanggung jawab yang berbeda.

### Inti yang Harus Ditekankan

- **Steering behavior** cocok untuk movement lokal yang halus dan reaktif.
- `Seek`, `Arrive`, atau gaya gerak lokal lain bisa gagal jika jalur langsung terhalang **obstacle** besar.
- **Pathfinding** dibutuhkan untuk mencari rute yang dapat dilalui menuju `target`.
- Perbedaan penting: steering mengatur **bagaimana bergerak**, pathfinding mengatur **jalur mana yang dipilih**.

### Transisi ke Slide Berikutnya

Setelah memahami keterbatasan steering behavior, slide berikutnya akan menunjukkan posisi pathfinding dalam arsitektur game cerdas, yaitu bagaimana keputusan, navigasi, dan movement saling terhubung.

---

## Slide 004 - Posisi Pathfinding dalam Game AI

### Narasi

Pada slide ini kita melihat **di mana pathfinding berada** dalam arsitektur sederhana **Game AI**. Pathfinding bukan satu-satunya bagian dari perilaku NPC, melainkan tahap yang menghubungkan keputusan dengan gerakan.

Arsitektur sederhananya dapat dilihat sebagai alur berikut:

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

Secara intuitif, alur ini menggambarkan bagaimana NPC “berpikir” lalu “bergerak”. **Perception** menyediakan informasi dari lingkungan, misalnya posisi player atau objek yang terlihat. **Memory** menyimpan informasi penting yang masih relevan, seperti target terakhir atau status misi. **Decision** kemudian memilih tindakan, misalnya `Chase`.

Setelah keputusan diambil, NPC perlu tahu **rute** yang harus ditempuh. Di sinilah **Pathfinding / Navigation** bekerja. Pathfinding menjawab pertanyaan:

> Lewat mana NPC harus berjalan?

Ia menghasilkan urutan titik atau jalur yang dapat diikuti, misalnya melewati gerbang, lorong, atau titik belokan tertentu.

Setelah rute tersedia, **Movement / Steering** mengambil alih. Steering menjawab pertanyaan:

> Bagaimana NPC bergerak mengikuti jalur tersebut?

Steering mengatur kecepatan, arah, penghindaran tabrakan lokal, dan perilaku gerak yang halus. Dengan demikian, pathfinding dan steering memiliki peran berbeda: pathfinding menentukan **rute global**, sedangkan steering mengatur **eksekusi gerak lokal**.

Contoh sederhana:

```text
NPC melihat player
        ↓
Decision: Chase
        ↓
Pathfinding: cari rute ke player
        ↓
Steering: bergerak mengikuti rute
```

Dalam contoh ini, NPC tidak langsung bergerak lurus ke player. Ia terlebih dahulu mencari jalur yang valid, lalu mengikuti jalur tersebut. Jika player berpindah posisi, sistem dapat memperbarui keputusan atau rute sesuai kebutuhan.

Hal penting yang harus dipahami sebelum lanjut adalah **pemisahan tanggung jawab** antar komponen. **Perception** memberi data, **Decision** memilih tujuan, **Pathfinding** mencari rute, **Steering** mengeksekusi gerak, dan **Animation / Action** menampilkan hasil perilaku tersebut. Pemisahan ini membuat sistem perilaku game lebih mudah dirancang, diuji, dan dikembangkan.

### Inti yang Harus Ditekankan

- **Pathfinding** berada setelah **Decision** dan sebelum **Movement / Steering** dalam arsitektur Game AI.
- **Pathfinding** menentukan **rute** yang harus ditempuh NPC, bukan cara NPC bergerak secara halus.
- **Steering** mengeksekusi gerakan mengikuti rute, termasuk pengendalian arah, kecepatan, dan respons lokal.
- Pemisahan antara **pathfinding** dan **steering** membantu memahami perilaku NPC secara modular.

### Transisi ke Slide Berikutnya

Setelah memahami posisi pathfinding dalam alur Game AI, kita akan melihat capaian pembelajaran pertemuan ini, termasuk konsep graph, node, edge, cost, waypoint, serta algoritma pathfinding yang akan dibahas.

---

## Slide 005 - Capaian Pembelajaran Pertemuan

### Narasi

Slide ini menjadi peta belajar untuk pertemuan **Pathfinding & Navigation**. Tujuannya bukan sekadar menghafal nama algoritma, tetapi memahami bagaimana NPC dapat memilih rute yang masuk akal dalam lingkungan game. Mahasiswa diharapkan mampu menjelaskan konsep **pathfinding** dan **navigation** sebagai bagian dari arsitektur Game Cerdas, yaitu proses menentukan jalur dari posisi awal ke posisi tujuan sebelum gerakan NPC dieksekusi.

Capaian berikutnya berkaitan dengan representasi ruang. Mahasiswa perlu memahami bahwa peta game dapat dimodelkan sebagai **graph**, di mana `node` mewakili posisi atau waypoint, `edge` mewakili koneksi yang dapat dilalui, dan `cost` mewakili biaya pergerakan. Dengan representasi ini, masalah navigasi menjadi masalah pencarian jalur pada struktur data yang dapat diproses oleh algoritma.

Selanjutnya, mahasiswa diharapkan mampu menjelaskan cara kerja `BFS`, `Dijkstra`, dan `A*`, serta memahami peran `heuristic` dalam `A*`. Poin penting bukan hanya urutan langkah, tetapi perbedaan perilaku pencarian: `BFS` mencari jalur pada graph tanpa biaya, `Dijkstra` memperhitungkan `cost`, dan `A*` menggabungkan `cost` dengan estimasi jarak ke tujuan. Mahasiswa juga perlu memahami **Navigation Mesh** sebagai representasi area yang dapat dilalui, serta mampu menghubungkan konsep pathfinding manual dengan `Unity NavMesh`.

### Inti yang Harus Ditekankan

- Capaian utama adalah menjelaskan **pathfinding** dan **navigation** dalam konteks Game Cerdas.
- Peta game dapat direpresentasikan sebagai **graph** dengan `node`, `edge`, `cost`, dan `waypoint`.
- Mahasiswa harus memahami perbedaan `BFS`, `Dijkstra`, dan `A*`, termasuk fungsi `heuristic` pada `A*`.
- **Navigation Mesh** dan `Unity NavMesh` menjadi jembatan antara konsep pathfinding manual dengan implementasi praktis di engine game.

### Transisi ke Slide Berikutnya

Setelah capaian pembelajaran ini dipahami, kita mulai dari pertanyaan paling dasar: apa itu pathfinding, dan apa saja input serta output yang dibutuhkan NPC untuk mencari jalur dari posisi awal ke tujuan.

---

## Slide 006 - Apa Itu Pathfinding?

### Narasi

**Pathfinding** adalah proses mencari jalur dari titik awal ke titik tujuan. Dalam game, proses ini digunakan untuk menentukan rute yang akan ditempuh oleh NPC, karakter, kendaraan, atau agent lain.

Intuisi sederhananya bisa dilihat dari pertanyaan berikut:

```text
Dari posisi NPC sekarang,
jalur mana yang harus dilewati
agar sampai ke posisi player?
```

Pertanyaan ini menunjukkan bahwa pathfinding bukan tentang bagaimana NPC bergerak, melainkan tentang menentukan **rute** yang harus diikuti.

Secara umum, pathfinding membutuhkan beberapa input utama:

- `posisi awal` atau `start node`,
- `posisi tujuan` atau `goal node`,
- `representasi peta` yang dapat dicari,
- `obstacle` yang tidak boleh dilewati,
- `biaya pergerakan` untuk setiap langkah atau transisi.

Representasi peta ini penting karena pathfinding tidak bekerja langsung pada dunia game secara mentah. Peta biasanya diubah menjadi struktur yang dapat diproses, misalnya graph, grid, atau jaringan waypoint.

Dari input tersebut, sistem pathfinding menghasilkan output berupa:

- urutan `node`,
- urutan `waypoint`,
- jalur yang dapat diikuti NPC.

Output ini biasanya berupa daftar titik-titik yang harus dilewati secara berurutan, misalnya dari titik awal menuju beberapa waypoint, lalu ke titik tujuan.

Perlu dipahami bahwa pathfinding adalah tahap **perencanaan jalur**. Ia menjawab pertanyaan "jalur mana yang harus diambil?", bukan "bagaimana NPC berjalan?". Gerakan, penghindaran obstacle lokal, dan penyesuaian posisi agent akan dibahas pada konsep navigation.

Sebelum lanjut, mahasiswa perlu mengingat bahwa kualitas jalur sangat bergantung pada representasi peta dan biaya pergerakan. Jika peta tidak merepresentasikan area yang bisa dilewati dengan benar, atau jika biaya pergerakan tidak masuk akal, jalur yang dihasilkan juga tidak akan sesuai dengan perilaku game yang diharapkan.

### Inti yang Harus Ditekankan

- **Pathfinding** adalah proses mencari jalur dari `start` ke `goal`.
- Input utama meliputi posisi awal, posisi tujuan, representasi peta, obstacle, dan biaya pergerakan.
- Output pathfinding adalah urutan `node` atau `waypoint` yang dapat diikuti agent.
- Pathfinding berbeda dengan navigation: pathfinding menentukan rute, navigation mengeksekusi rute tersebut.

### Transisi ke Slide Berikutnya

Setelah memahami apa yang dicari oleh pathfinding, langkah berikutnya adalah melihat bagaimana hasil jalur tersebut digunakan untuk membuat NPC benar-benar bergerak di lingkungan game.

---

## Slide 007 - Apa Itu Navigation?

### Narasi

Pada slide ini, kita membedakan **pathfinding** dan **navigation**. **Pathfinding** adalah proses mencari jalur dari posisi awal ke posisi tujuan. Setelah jalur ditemukan, **navigation** adalah proses menggunakan jalur tersebut untuk membuat NPC benar-benar bergerak di dalam lingkungan game.

Secara intuitif, **pathfinding** seperti membuat peta rute, sedangkan **navigation** seperti mengemudi mengikuti rute tersebut. **Pathfinding** menjawab pertanyaan “jalur mana yang harus dipilih?”, sedangkan **navigation** menjawab pertanyaan “bagaimana NPC mengikuti jalur itu sampai tiba di tujuan?”.

```text
Pathfinding:
Cari jalur
```

```text
Navigation:
Ikuti jalur
hindari obstacle
atur movement
sesuaikan posisi agent
```

Perbedaan ini penting karena **pathfinding** biasanya menghasilkan data berupa urutan node atau `waypoint`. **Navigation** kemudian mengonsumsi data tersebut dan mengubahnya menjadi gerakan yang terlihat di game.

```text
Pathfinding:
A → B → C → D

Navigation:
NPC bergerak dari A ke B,
lalu B ke C,
lalu C ke D.
```

Dalam contoh ini, **pathfinding** sudah menentukan urutan `A`, `B`, `C`, dan `D`. **Navigation** bertugas memastikan NPC bergerak dari `A` ke `B`, lalu melanjutkan ke `C`, dan akhirnya berhenti di `D`. Proses ini terjadi secara terus-menerus selama NPC bergerak.

**Navigation** bukan sekadar berpindah posisi dari satu node ke node berikutnya. NPC harus bergerak secara halus, menjaga orientasi tubuh, mengatur kecepatan, dan tetap berada di area yang valid. Jika ada obstacle di sekitar, NPC juga perlu melakukan penyesuaian lokal agar tidak menabrak objek atau NPC lain.

Komponen utama yang biasanya terlibat dalam **navigation** adalah:

- **Path following**: NPC mengikuti urutan `waypoint` yang dihasilkan oleh **pathfinding**.
- **Local avoidance**: NPC menghindari obstacle atau agent lain di sekitarnya tanpa harus mencari jalur global baru.
- **Movement controller**: komponen yang mengubah target `waypoint` menjadi perubahan posisi, rotasi, dan kecepatan NPC.
- **Stopping distance**: jarak di mana NPC berhenti sebelum mencapai target, sehingga NPC tidak menembus posisi tujuan.
- **Agent radius**: ukuran radius NPC yang memengaruhi bagaimana NPC berinteraksi dengan obstacle dan area gerak.

Dalam arsitektur perilaku NPC, **navigation** sering menjadi bagian dari state atau action, misalnya state `MoveToTarget`. State ini aktif ketika NPC perlu bergerak ke posisi tertentu, lalu nonaktif ketika NPC sudah mencapai target atau kondisi berhenti terpenuhi.

Pada Unity, komponen seperti `NavMeshAgent` sering menjadi implementasi praktis **navigation**. Komponen ini membantu NPC bergerak di atas `NavMesh`, mengikuti `waypoint`, dan mengatur parameter seperti `stoppingDistance` serta `radius`. Dengan demikian, mahasiswa perlu memahami bahwa **navigation** adalah tahap eksekusi dari hasil **pathfinding** menjadi gerakan NPC yang natural.

### Inti yang Harus Ditekankan

- **Pathfinding** menghasilkan `path`, sedangkan **navigation** mengeksekusi `path` menjadi gerakan NPC.
- **Navigation** melibatkan **path following**, **local avoidance**, **movement controller**, **stopping distance**, dan **agent radius**.
- NPC tidak hanya “teleport” antar node, tetapi bergerak secara bertahap menuju `waypoint` berikutnya.
- Dalam Unity, `NavMeshAgent` sering menjadi representasi praktis dari proses **navigation**.

### Transisi ke Slide Berikutnya

Setelah memahami bahwa **navigation** adalah proses mengikuti jalur, kita akan membandingkan **pathfinding**, **navigation**, dan **steering** pada slide berikutnya untuk melihat batas tanggung jawab masing-masing konsep.

---

## Slide 008 - Pathfinding vs Navigation vs Steering

### Narasi

Slide ini membedakan tiga istilah yang sering terdengar mirip, tetapi sebenarnya memiliki tanggung jawab berbeda dalam sistem gerak NPC. Ketiganya adalah **pathfinding**, **navigation**, dan **steering**.

**Pathfinding** adalah tahap pencarian rute. Pertanyaan utamanya adalah: “jalur mana yang harus dipilih?” Dalam konteks ini, sistem biasanya bekerja pada level global, misalnya mencari urutan titik dari posisi awal ke tujuan. Contoh yang umum adalah algoritma `A*` yang menghasilkan rute berupa deretan node atau waypoint.

**Navigation** adalah tahap penggunaan jalur tersebut. Pertanyaannya bukan lagi “rute mana?”, tetapi “bagaimana NPC mengikuti rute itu?” Di sini NPC mulai bergerak dari satu waypoint ke waypoint berikutnya, menjaga posisi di atas jalur, mengatur jarak berhenti, dan menyesuaikan gerakan dengan bentuk lingkungan.

**Steering** adalah tahap pengendalian gerakan lokal. Pertanyaannya adalah “bagaimana NPC bergerak secara halus dan responsif di sekitar posisi saat ini?” Steering biasanya menangani perilaku seperti `Arrive`, `avoid`, dan `separation`, sehingga NPC tidak bergerak kaku, tidak menabrak NPC lain, dan tidak berhenti secara tiba-tiba.

Hubungan ketiganya dapat dilihat sebagai alur berikut:

```text
Pathfinding menghasilkan path
        ↓
Navigation mengikuti path
        ↓
Steering menghaluskan gerakan lokal
```

Artinya, **pathfinding** memberi tahu rute, **navigation** membuat NPC mengikuti rute tersebut, dan **steering** membuat gerakan NPC terasa lebih natural di level lokal.

Dalam Unity, komponen `NavMeshAgent` sering menggabungkan sebagian besar proses navigation. Ketika kita mengatur `destination`, `NavMeshAgent` akan mencari jalur, bergerak mengikuti jalur, dan melakukan beberapa penyesuaian lokal seperti menghindari tabrakan. Namun, tetap penting bagi mahasiswa memahami bahwa di balik komponen tersebut terdapat beberapa lapisan perilaku yang berbeda.

Secara praktis, jika NPC memilih rute yang tidak masuk akal, masalahnya biasanya ada di **pathfinding**. Jika NPC berhenti di tengah jalur atau tidak mengikuti waypoint dengan benar, masalahnya biasanya ada di **navigation**. Jika NPC bergerak bergetar, saling menabrak, atau berhenti terlalu kaku, masalahnya biasanya ada di **steering**.

Sebelum lanjut ke representasi dunia game, mahasiswa perlu memahami bahwa ketiga konsep ini bekerja pada level yang berbeda. **Pathfinding** lebih bersifat global, **navigation** bersifat pengendalian jalur, dan **steering** bersifat pengendalian gerak lokal.

### Inti yang Harus Ditekankan

- **Pathfinding** menjawab pertanyaan “jalur mana yang dipilih?”, misalnya dengan `A*`.
- **Navigation** menjawab pertanyaan “bagaimana NPC mengikuti jalur?”, termasuk path following, stopping distance, dan agent radius.
- **Steering** menjawab pertanyaan “bagaimana NPC bergerak secara lokal?”, misalnya dengan `Arrive`, `avoid`, dan `separation`.
- Alur umumnya adalah: **pathfinding** menghasilkan `path`, **navigation** mengikuti `path`, dan **steering** menghaluskan gerakan lokal.
- `NavMeshAgent` di Unity menggabungkan sebagian besar proses navigation, tetapi mahasiswa tetap perlu memahami peran masing-masing lapisan.

### Transisi ke Slide Berikutnya

Dengan membedakan ketiga lapisan ini, kita bisa masuk ke pertanyaan berikutnya: bagaimana komputer memahami bentuk dunia game agar dapat mencari jalur? Itu akan dibahas pada slide berikutnya tentang representasi dunia game.

---

## Slide 009 - Representasi Dunia Game

### Narasi

Sebelum algoritma pencarian jalur dapat dijalankan, dunia game tidak bisa langsung diproses apa adanya. Dunia 2D atau 3D yang relatif kontinu perlu diubah menjadi **representasi dunia** yang lebih terstruktur. Representasi ini menjadi “peta” bagi sistem untuk memahami mana area yang dapat dilalui, mana yang terhalang, dan bagaimana titik-titik dalam ruang saling terhubung.

Intuisi praktisnya sederhana: **pathfinding** bekerja pada model, bukan pada dunia mentah. Jika modelnya buruk, jalur yang dihasilkan bisa tidak masuk akal, tidak efisien, atau sulit dikendalikan. Karena itu, pemilihan representasi sangat memengaruhi perilaku NPC, biaya komputasi, dan kemudahan desain level.

Beberapa representasi umum yang perlu dipahami adalah:

1. **Grid** — dunia dibagi menjadi sel-sel kecil. Setiap `cell` dapat dianggap sebagai `node`. Representasi ini mudah divisualisasikan dan cocok untuk game berbasis petak, strategi, atau top-down.
2. **Graph** — dunia dimodelkan sebagai kumpulan `node` dan `edge`. Model ini lebih umum dan fleksibel, karena dapat merepresentasikan ruangan, koridor, jalan, atau area yang terhubung secara tidak beraturan.
3. **Waypoint network** — desainer menempatkan titik-titik `waypoint` tertentu, lalu NPC bergerak dari satu titik ke titik lain. Representasi ini sering dipakai untuk patroli, jalur tetap, atau pergerakan yang ingin dikendalikan secara eksplisit.
4. **Navigation Mesh** — area yang dapat dilalui direpresentasikan sebagai kumpulan poligon. Ini umum pada game 3D karena memungkinkan pergerakan yang lebih natural dan lebih hemat dibanding grid yang sangat halus. Dalam Unity, konsep ini sering terhubung dengan `NavMesh` dan `NavMeshAgent`.

Perlu ditekankan bahwa keempat representasi ini bukan pengganti satu sama lain secara mutlak. Mereka adalah pilihan desain. Game strategi sering memakai **grid** karena dunia dan aturan pergerakannya sudah diskrit. Game 3D sering memakai **Navigation Mesh** karena dunia lebih luas dan kontinyu. NPC patrol sering memakai **waypoint network** karena jalur patroli ingin tetap terkontrol. Sementara **graph** dapat menjadi model dasar yang lebih umum untuk menghubungkan area-area penting.

Sebelum lanjut ke algoritma pencarian jalur, mahasiswa perlu memahami bahwa representasi menentukan bentuk masalah. Dengan grid, masalahnya menjadi pencarian antar `cell`. Dengan graph, masalahnya menjadi pencarian antar `node` melalui `edge`. Dengan waypoint, masalahnya menjadi urutan titik yang sudah ditentukan. Dengan NavMesh, masalahnya menjadi pencarian rute di atas permukaan yang dapat dilalui.

### Inti yang Harus Ditekankan

- **Representasi dunia** adalah abstraksi spasial yang memungkinkan sistem mencari jalur secara terstruktur.
- **Grid**, **graph**, **waypoint network**, dan **Navigation Mesh** memiliki karakteristik berbeda: kemudahan, fleksibilitas, realisme, dan biaya komputasi.
- Pilihan representasi memengaruhi perilaku NPC, desain level, dan integrasi dengan komponen seperti `NavMesh` atau `NavMeshAgent`.

### Transisi ke Slide Berikutnya

Setelah memahami empat representasi umum, kita masuk ke bentuk yang paling dasar dan mudah divisualisasikan: **grid map**, di mana dunia dibagi menjadi sel-sel yang dapat diproses sebagai `node`.

---

## Slide 010 - Grid Map

### Narasi

Pada slide ini kita membahas **Grid Map**, yaitu cara yang sederhana untuk merepresentasikan dunia game agar agen dapat bergerak.

Ide dasarnya adalah membagi area permainan menjadi kotak-kotak kecil. Setiap kotak disebut **cell**. Cell bisa memiliki status sederhana: dapat dilalui, terhalang, titik awal, atau tujuan.

Contoh pada slide:

```text
S . . # .
. # . # .
. # . . .
. . # # .
. . . . G
```

Keterangan:

- `S` adalah **Start**, posisi awal agen.
- `G` adalah **Goal**, posisi tujuan.
- `.` adalah **walkable**, cell yang dapat dilewati.
- `#` adalah **obstacle**, cell yang tidak dapat dilewati.

Dalam konteks game, setiap cell dapat dipandang sebagai **node**. Node adalah titik keputusan bagi agen: dari cell ini, agen bisa memilih bergerak ke cell tetangga yang valid. Dengan cara ini, masalah navigasi menjadi masalah pencarian pada struktur diskrit.

Grid map sangat berguna karena mudah divisualisasikan dan mudah diuji. Mahasiswa dapat melihat langsung bagaimana agen memilih langkah, menghindari obstacle, dan menuju goal. Karena representasinya sederhana, grid cocok untuk memperkenalkan algoritma pathfinding seperti `BFS`, `Dijkstra`, dan `A*`.

Secara intuitif, `BFS` mencari jalur dengan menjelajah selangkah demi selangkah tanpa bobot. `Dijkstra` memperluas pencarian dengan mempertimbangkan biaya antar cell. `A*` menambahkan heuristik untuk memperkirakan jarak ke tujuan, sehingga pencarian lebih terarah.

Yang perlu dipahami sebelum lanjut: grid map bukan hanya gambar kotak-kotak, melainkan model dunia yang dapat diproses oleh algoritma. Setiap cell menyimpan status, dan hubungan antar cell membentuk ruang pencarian.

### Inti yang Harus Ditekankan

- **Grid map** membagi dunia game menjadi cell-cell diskrit.
- Setiap cell dapat dianggap sebagai **node** dalam proses pencarian jalur.
- Simbol `S`, `G`, `.`, dan `#` menunjukkan start, goal, area yang dapat dilalui, dan obstacle.
- Grid map cocok untuk menjelaskan `BFS`, `Dijkstra`, dan `A*` karena strukturnya sederhana dan mudah divisualisasikan.

### Transisi ke Slide Berikutnya

Setelah memahami grid sebagai kumpulan cell, kita akan melihat bentuk yang lebih umum, yaitu **Graph**, di mana node dan edge dapat merepresentasikan hubungan antar titik tanpa harus terikat kotak-kotak.

---

## Slide 011 - Graph

### Narasi

Setelah memahami **Grid Map**, kita perlu menaikkan level abstraksi. **Graph** adalah struktur data yang terdiri dari dua komponen utama:

- `Node`
- `Edge`

`Node` merepresentasikan titik atau lokasi, sedangkan `Edge` merepresentasikan hubungan antar titik. Dalam konteks game, hubungan ini biasanya berarti bahwa satu titik dapat dihubungkan atau dilalui menuju titik lain.

Contoh sederhana:

```text
A ----- B
|       |
|       |
C ----- D
```

Pada diagram ini, `A`, `B`, `C`, dan `D` adalah `Node`. Garis yang menghubungkan mereka adalah `Edge`. Misalnya, `A` terhubung ke `B` dan `C`, sedangkan `B` dan `C` sama-sama terhubung ke `D`. Jika NPC berada di `A` dan target berada di `D`, maka ada beberapa kemungkinan jalur yang dapat dipertimbangkan, misalnya `A - B - D` atau `A - C - D`.

Graph sangat berguna untuk merepresentasikan ruang navigasi dalam game, seperti:

- peta,
- ruangan,
- jalan,
- waypoint,
- area navigasi.

Perbedaan penting dengan grid adalah bahwa graph tidak harus berbentuk kotak-kotak yang seragam. Graph dapat lebih ringkas karena hanya menyimpan titik-titik penting dan hubungan antar titik. Dengan cara ini, dunia game yang kompleks dapat diubah menjadi pilihan-pilihan yang dapat diproses oleh sistem navigasi.

Sebelum lanjut, mahasiswa perlu memahami bahwa graph bukan sekadar gambar, melainkan representasi dari kemungkinan pergerakan. Setiap `Node` dapat dipandang sebagai posisi atau keadaan, sedangkan setiap `Edge` dapat dipandang sebagai transisi atau aksi yang memungkinkan. Pemahaman ini menjadi dasar untuk membahas komponen `Node` secara lebih detail pada slide berikutnya.

### Inti yang Harus Ditekankan

- **Graph** terdiri dari `Node` dan `Edge`.
- `Node` adalah titik/lokasi, sedangkan `Edge` adalah hubungan atau kemungkinan pergerakan antar titik.
- Graph dapat merepresentasikan peta, ruangan, jalan, waypoint, dan area navigasi.
- Graph adalah abstraksi penting untuk pathfinding dan navigasi NPC karena mengubah ruang game menjadi pilihan jalur yang dapat dicari.

### Transisi ke Slide Berikutnya

Selanjutnya kita akan membahas `Node` secara lebih dalam, yaitu apa saja yang dapat direpresentasikan oleh sebuah node dalam game dan bagaimana node dapat diwujudkan dalam implementasi.

---

## Slide 012 - Node

### Narasi

Setelah memahami **graph** sebagai struktur yang menghubungkan titik-titik, kita masuk ke elemen paling dasar: **Node**.

**Node** adalah titik dalam graph. Dalam konteks game, node bukan sekadar koordinat matematis, tetapi representasi dari tempat atau posisi yang dapat digunakan NPC untuk bergerak, menunggu, atau memilih tujuan berikutnya.

Intuisi praktisnya: ketika NPC ingin menuju pintu, NPC tidak perlu mengetahui seluruh peta secara detail; ia cukup mengenal beberapa titik penting. Titik-titik penting itulah yang menjadi node.

Dalam game, node dapat merepresentasikan:

- **cell grid**, yaitu sel pada grid navigasi,
- **waypoint**, titik tujuan yang dibuat desainer,
- **persimpangan**, tempat jalur bercabang,
- **posisi ruangan**, representasi area besar,
- **area yang dapat dilalui**, titik yang valid untuk pergerakan.

Contoh sederhana:

```text
Node A = posisi NPC
Node B = pintu
Node C = koridor
Node D = posisi target
```

Pada contoh ini, `Node A` adalah posisi awal NPC, `Node B` adalah objek penting yang bisa menjadi tujuan, `Node C` adalah jalur transisi, dan `Node D` adalah target akhir. Pola seperti ini sering muncul pada pathfinding, steering, atau sistem keputusan NPC ketika memilih posisi berikutnya.

Dalam Unity, node dapat direpresentasikan dengan beberapa cara:

- `Vector3`, untuk menyimpan koordinat posisi,
- `GameObject`, jika node terkait objek di scene,
- class custom, jika node perlu menyimpan data tambahan,
- titik pada grid, jika navigasi berbasis grid.

Pilihan representasi ini penting karena memengaruhi cara sistem membaca posisi, menghitung jarak, dan menghubungkan node dengan node lain. Untuk materi ini, yang harus dipahami mahasiswa adalah bahwa node adalah unit dasar navigasi: ia memberi tahu NPC “di mana” posisi yang relevan, tetapi belum menjelaskan “bagaimana” posisi tersebut terhubung.

### Inti yang Harus Ditekankan

- **Node** adalah titik dalam graph yang merepresentasikan lokasi atau posisi penting dalam game.
- Node dapat berupa `Vector3`, `GameObject`, class custom, atau titik grid, tergantung kebutuhan navigasi.
- Node membantu pathfinding, steering, dan sistem keputusan NPC dengan menyediakan titik-titik yang dapat dipilih sebagai posisi, tujuan, atau waypoint.
- Pada slide ini, fokusnya adalah memahami node sebagai elemen dasar; hubungan antar node akan dibahas pada slide berikutnya.

### Transisi ke Slide Berikutnya

Jika node menjawab pertanyaan “di mana titik penting berada?”, maka slide berikutnya akan membahas **Edge**, yaitu hubungan yang memungkinkan node-node tersebut terhubung dan membentuk jalur navigasi.

---

## Slide 013 - Edge

### Narasi

Setelah memahami **node** sebagai titik posisi, langkah berikutnya adalah memahami **edge**. Edge adalah hubungan yang memungkinkan perpindahan antara dua node. Dalam graph pathfinding, node saja belum cukup; kita perlu tahu node mana yang dapat dihubungkan dan bagaimana cara NPC berpindah dari satu titik ke titik lain.

Contoh sederhana:

```text
A ----- B
```

Artinya, jika NPC berada di `A`, ia dapat bergerak ke `B`. Jika graph bersifat **tidak berarah**, hubungan ini berlaku dua arah, sehingga dari `B` juga dapat kembali ke `A`. Namun, jika graph bersifat **berarah**, edge hanya berlaku satu arah, misalnya dari `A` ke `B` tetapi tidak sebaliknya.

Dalam konteks game, edge merepresentasikan jalur yang dapat dilalui. Contoh penerapannya adalah koridor, jembatan, pintu, tangga, jalur waypoint, atau area yang terhubung dalam navigation graph. Dengan edge, sistem pathfinding dapat menentukan urutan node yang harus dilewati untuk mencapai target.

Edge juga dapat memiliki **biaya** atau `cost`. Biaya ini menunjukkan seberapa besar “harga” untuk melewati hubungan tersebut. Contoh:

```text
A -- cost 2 -- B
B -- cost 5 -- C
```

Biaya tidak selalu berarti jarak fisik. Dalam game, `cost` dapat dimaknai sebagai:

- jarak antar node,
- waktu tempuh,
- tingkat bahaya area,
- konsumsi energi,
- kesulitan terrain,
- risiko terdeteksi musuh.

Intuisi praktisnya, edge menentukan **konektivitas**, sedangkan `cost` menentukan **preferensi jalur**. Dua jalur mungkin sama-sama bisa mencapai target, tetapi jalur dengan total biaya lebih kecil biasanya lebih diutamakan oleh algoritma pathfinding.

Sebelum masuk ke algoritma pencarian, mahasiswa perlu memahami bahwa graph game biasanya dibangun dari node dan edge. Node adalah posisi, edge adalah hubungan, dan cost adalah nilai yang membuat keputusan navigasi lebih realistis. Pemahaman ini menjadi dasar untuk membedakan graph tanpa bobot dan graph berbobot.

### Inti yang Harus Ditekankan

- **Edge** adalah hubungan yang memungkinkan perpindahan antara dua node.
- Edge dapat bersifat **berarah** atau **tidak berarah**, tergantung aturan pergerakan dalam game.
- `cost` pada edge menentukan seberapa mahal atau sulit suatu jalur dilalui, sehingga memengaruhi pemilihan rute.
- Dalam game, edge membuat graph menjadi representasi navigasi yang dapat digunakan untuk pathfinding.

### Transisi ke Slide Berikutnya

Selanjutnya, kita akan melihat bagaimana keberadaan `cost` membedakan **unweighted graph** dan **weighted graph**, serta mengapa weighted graph lebih sesuai untuk banyak situasi navigasi dalam game.

---

## Slide 014 - Weighted dan Unweighted Graph

### Narasi

Setelah memahami bahwa **edge** adalah hubungan antar **node**, langkah berikutnya adalah memperhatikan apakah hubungan itu memiliki biaya yang berbeda atau tidak. Pembedaan ini penting karena menentukan algoritma pathfinding yang paling sesuai.

**Unweighted graph** adalah graph di mana semua edge dianggap memiliki biaya yang sama.

```text
A -- B -- C
```

Dalam kondisi seperti ini, jalur terpendek diukur dari jumlah edge yang dilalui. Karena semua langkah dianggap setara, **BFS** menjadi pilihan yang alami. BFS menjelajah node per lapisan, sehingga jalur yang pertama ditemukan ke target sudah merupakan jalur dengan jumlah langkah minimum. Dalam game, model ini cocok untuk grid sederhana, misalnya lantai datar di mana setiap sel memiliki biaya gerak yang sama.

**Weighted graph** berbeda karena setiap edge memiliki biaya atau `cost` yang dapat berbeda-beda.

```text
A --2-- B --5-- C
```

Biaya ini bisa mewakili jarak, waktu tempuh, energi, tingkat bahaya, atau kesulitan terrain. Karena biaya tidak seragam, jalur terpendek tidak selalu sama dengan jalur yang memiliki jumlah edge paling sedikit. Algoritma harus membandingkan total biaya dari beberapa kemungkinan jalur.

Untuk weighted graph, algoritma yang umum digunakan adalah:

- `Dijkstra`, yang mencari jalur berbiaya minimum dari satu sumber ke node lain.
- `A*`, yang memperluas pencarian dengan bantuan `heuristic` agar lebih efisien ketika target sudah diketahui.

Dalam konteks game, weighted graph lebih realistis. NPC tidak hanya mencari "berapa banyak langkah", tetapi juga "berapa mahal" langkah tersebut. Rawa mungkin lebih lambat, area berbahaya mungkin meningkatkan risiko, dan jalur memutar bisa lebih aman atau lebih hemat energi.

Sebelum lanjut, mahasiswa perlu memahami bahwa perbedaan utama ada pada cara mengukur "terpendek". Pada unweighted graph, yang dioptimalkan adalah jumlah edge. Pada weighted graph, yang dioptimalkan adalah total `cost`. Pemahaman ini menjadi dasar untuk memilih algoritma pathfinding yang tepat.

### Inti yang Harus Ditekankan

- **Unweighted graph**: semua edge dianggap sama, sehingga **BFS** cocok untuk mencari jalur dengan jumlah edge minimum.
- **Weighted graph**: setiap edge memiliki `cost` berbeda, sehingga `Dijkstra` atau `A*` lebih sesuai karena mempertimbangkan total biaya.
- Dalam game, weighted graph lebih realistis karena terrain, waktu, bahaya, dan energi tidak selalu sama.

### Transisi ke Slide Berikutnya

Setelah memahami bahwa edge dapat memiliki biaya atau tidak, langkah berikutnya adalah melihat arah hubungan antar node, yaitu directed dan undirected graph.

---

## Slide 015 - Directed dan Undirected Graph

### Narasi

Setelah memahami biaya edge, langkah berikutnya adalah memahami **arah pergerakan** pada graph. Dalam pathfinding, arah menentukan apakah agent boleh bergerak bolak-balik atau hanya satu arah.

**Undirected graph** memiliki edge yang dapat dilalui dua arah.

```text
A ----- B
```

Artinya, jika agent berada di `A`, agent dapat menuju `B`; sebaliknya, dari `B` agent juga dapat kembali ke `A`. Model ini cocok untuk ruang terbuka, koridor, atau area yang bisa dimasuki dan ditinggalkan dengan aturan yang sama.

**Directed graph** memiliki edge yang hanya dapat dilalui satu arah.

```text
A ----→ B
```

Pada graph ini, agent dapat bergerak dari `A` ke `B`, tetapi tidak otomatis dapat kembali dari `B` ke `A` kecuali ada edge lain yang mengizinkan.

Dalam game, directed graph sering muncul pada situasi di mana aturan movement tidak simetris. Contoh yang umum:

- pintu satu arah,
- tebing yang hanya bisa dituruni,
- conveyor belt yang mendorong agent ke satu arah,
- jalan satu arah,
- area yang hanya bisa dimasuki melalui titik tertentu.

Hal penting yang harus dipahami mahasiswa adalah bahwa **arah edge adalah aturan validitas pergerakan**, bukan sekadar visualisasi. Jika graph salah dimodelkan sebagai undirected, pathfinding dapat menghasilkan rencana yang secara teknis ada di graph tetapi tidak mungkin dieksekusi oleh agent.

Dalam implementasi, perbedaan ini biasanya terlihat pada struktur adjacency. Untuk undirected graph, edge `A-B` biasanya disimpan dua kali: `A` memiliki tetangga `B`, dan `B` memiliki tetangga `A`. Untuk directed graph, edge `A → B` hanya disimpan sebagai keluaran dari `A`, sehingga pencarian dari `B` tidak akan menemukan `A` melalui edge tersebut.

Secara intuitif, weighted/unweighted menjawab pertanyaan **seberapa mahal** suatu pergerakan, sedangkan directed/undirected menjawab pertanyaan **apakah pergerakan itu diizinkan**. Kedua hal ini harus benar sebelum algoritma pathfinding dijalankan, karena algoritma hanya dapat menemukan path yang valid berdasarkan graph yang diberikan.

### Inti yang Harus Ditekankan

- **Undirected graph** berarti edge dapat dilalui dua arah, sehingga pergerakan bersifat simetris.
- **Directed graph** berarti edge hanya dapat dilalui satu arah, sehingga aturan movement agent harus dipatuhi.
- Arah edge menentukan **validitas path**, bukan hanya tampilan koneksi antar node.
- Dalam implementasi, directed graph biasanya hanya menyimpan edge sebagai keluaran dari node asal, bukan sebagai koneksi dua arah.

### Transisi ke Slide Berikutnya

Setelah arah edge ditentukan, langkah berikutnya adalah memahami bagaimana rangkaian node membentuk **path** dari `start` ke `goal`.

---

## Slide 016 - Path

### Narasi

**Path** adalah urutan node yang menghubungkan posisi awal dengan tujuan. Dalam konteks pathfinding, path bukan hanya garis lurus di layar, melainkan rangkaian keputusan perpindahan dari satu node ke node berikutnya.

Contoh sederhana:

```text
Start = A
Goal  = F

Path:
A → B → D → F
```

Pada contoh ini, agent memulai dari node `A`, kemudian bergerak ke `B`, lanjut ke `D`, dan berakhir di `F`. Setiap tanda panah menunjukkan satu langkah perpindahan yang harus diizinkan oleh graph.

Path yang baik harus memenuhi beberapa syarat:

- **valid**, artinya setiap node dalam urutan terhubung oleh edge yang boleh dilalui;
- **tidak melewati obstacle**, artinya node atau edge yang terblokir tidak digunakan;
- **lebih pendek atau lebih murah**, artinya path sebaiknya efisien dari sisi jarak, waktu, atau cost;
- **sesuai aturan movement agent**, artinya perpindahan sesuai kemampuan atau batasan agent.

Dalam game, path biasanya menjadi input untuk perilaku NPC. Setelah path ditemukan, agent dapat mengikuti waypoint atau menjalankan steering menuju tujuan. Dengan kata lain, path menjembatani model graph dengan gerakan nyata di scene.

Hal penting yang harus dipahami sebelum lanjut: path adalah hasil pencarian jalur, tetapi belum tentu jalur terbaik. Konsep “terbaik” akan dibahas lebih lanjut melalui shortest path.

### Inti yang Harus Ditekankan

- **Path** adalah urutan node dari `Start` ke `Goal`.
- Setiap transisi dalam path harus **valid** dan sesuai aturan graph.
- Path harus menghindari obstacle dan memperhatikan cost atau efisiensi.
- Path menjadi dasar perilaku agent, seperti waypoint atau steering.

### Transisi ke Slide Berikutnya

Setelah memahami apa itu path, langkah berikutnya adalah menentukan bagaimana memilih path yang paling efisien, yaitu shortest path.

---

## Slide 017 - Shortest Path

### Narasi

Pada slide ini kita memperjelas istilah **shortest path**. Sebelumnya, **path** sudah dipahami sebagai urutan node dari `start` ke `goal`. Sekarang kita fokus pada jalur yang dianggap paling baik menurut kriteria tertentu.

Dalam konteks **Game AI**, **shortest path** dapat memiliki dua makna:

```text
Shortest path dapat berarti:
jalur dengan jumlah langkah paling sedikit
atau
jalur dengan total cost paling kecil
```

Perbedaan ini penting karena tidak semua lingkungan game memiliki biaya yang sama untuk setiap langkah. Pada grid sederhana, satu langkah ke kanan, kiri, atas, atau bawah mungkin dianggap sama. Namun pada lingkungan yang lebih realistis, biaya bisa berbeda. Misalnya, jalan raya lebih murah dari hutan, medan datar lebih murah dari tanjakan, atau jalur aman lebih murah dari jalur berisiko.

Contoh pada slide menunjukkan graph berbobot:

```text
A --1-- B --1-- D
 \             /
  \--5-- C --1
```

Pada contoh ini, setiap garis memiliki `cost`. Artinya:

- `A → B` memiliki cost `1`
- `B → D` memiliki cost `1`
- `A → C` memiliki cost `5`
- `C → D` memiliki cost `1`

Kemudian kita membandingkan dua jalur menuju `D`:

- `A → B → D` memiliki total cost `1 + 1 = 2`
- `A → C → D` memiliki total cost `5 + 1 = 6`

Karena `2` lebih kecil dari `6`, maka **shortest path** yang dipilih adalah:

```text
A → B → D
```

Intuisi praktisnya adalah sebagai berikut: **shortest path tidak selalu berarti jalur dengan node paling sedikit**. Dalam graph berbobot, jalur yang lebih panjang secara jumlah node bisa saja lebih murah jika setiap langkahnya memiliki cost rendah. Sebaliknya, jalur yang terlihat lebih langsung bisa menjadi lebih mahal jika melewati area dengan cost tinggi.

Dalam game, konsep ini sangat berguna untuk perilaku NPC. NPC tidak cukup hanya bergerak ke titik terdekat. NPC perlu memilih rute yang paling sesuai dengan aturan movement agent, misalnya rute tercepat, rute paling aman, rute paling hemat energi, atau rute yang menghindari obstacle. Dengan memahami **cost**, mahasiswa dapat melihat bahwa pathfinding bukan hanya soal menemukan jalur, tetapi juga menilai kualitas jalur.

### Inti yang Harus Ditekankan

- **Shortest path** bisa berarti jalur dengan jumlah langkah paling sedikit atau jalur dengan total `cost` paling kecil.
- Pada graph berbobot, jalur dengan node lebih sedikit belum tentu paling murah.
- Contoh `A → B → D` memiliki cost `2`, sedangkan `A → C → D` memiliki cost `6`, sehingga `A → B → D` adalah shortest path.
- Dalam **Game AI**, `cost` dapat mewakili jarak, waktu, energi, risiko, atau aturan movement agent.

### Transisi ke Slide Berikutnya

Setelah memahami apa yang dimaksud dengan **shortest path**, langkah berikutnya adalah melihat bagaimana NPC menggunakan titik-titik penting dalam lingkungan untuk membantu navigasi, yaitu **waypoint**.

---

## Slide 018 - Waypoint

### Narasi

**Waypoint** adalah titik navigasi yang digunakan NPC sebagai **tujuan antara** sebelum mencapai tujuan akhir. Intuisinya, NPC tidak selalu bergerak langsung ke satu titik tujuan; ia dapat melewati beberapa titik penting yang sudah ditentukan. Dalam bentuk sederhana, pergerakannya dapat digambarkan sebagai:

```text
NPC → W1 → W2 → W3 → Goal
```

Artinya, NPC bergerak menuju `W1`, lalu setelah sampai atau mendekati titik tersebut, ia melanjutkan ke `W2`, kemudian `W3`, dan akhirnya menuju `Goal`. Pola ini sangat berguna ketika kita ingin NPC mengikuti rute tertentu, bukan hanya memilih jalur bebas.

Dalam praktik, waypoint sering dipakai untuk beberapa kebutuhan:

- **Patrol**, yaitu NPC bergerak berulang ke beberapa titik penjagaan.
- **Route planning**, yaitu NPC mengikuti urutan titik yang sudah dirancang.
- **Checkpoint**, yaitu titik penting untuk menandai progres atau posisi tertentu.
- **Path following**, yaitu NPC mengikuti jalur yang sudah ditentukan.
- **Titik navigasi manual**, yaitu titik yang dibuat oleh developer atau designer untuk mengontrol perilaku NPC.

Dalam Unity, waypoint biasanya dibuat sebagai `Empty GameObject`. Artinya, objek ini tidak perlu memiliki model, collider, atau komponen visual; yang penting adalah posisinya di dunia. Posisi tersebut dapat dibaca oleh script NPC sebagai target berikutnya. Dengan cara ini, developer dapat mengatur perilaku NPC secara sederhana dan mudah dikontrol.

Sebelum lanjut, mahasiswa perlu memahami bahwa waypoint adalah **titik tujuan**, bukan jalur lengkap. Waypoint memberi tahu NPC ke mana harus bergerak, tetapi cara NPC bergerak dari satu titik ke titik berikutnya dapat menggunakan steering, pathfinding, atau logika sederhana. Pemahaman ini penting karena pada tahap berikutnya, titik-titik waypoint dapat dihubungkan menjadi struktur yang lebih kompleks.

### Inti yang Harus Ditekankan

- **Waypoint** adalah titik tujuan antara untuk NPC, bukan tujuan akhir tunggal.
- Pola `NPC → W1 → W2 → W3 → Goal` menunjukkan urutan pergerakan NPC.
- Waypoint cocok untuk **patrol**, **route planning**, **checkpoint**, **path following**, dan navigasi manual.
- Di Unity, waypoint sering diimplementasikan sebagai `Empty GameObject` yang hanya menyimpan posisi.
- Waypoint menentukan **target berikutnya**, sedangkan mekanisme pergerakan dapat menggunakan logika lain.

### Transisi ke Slide Berikutnya

Setelah memahami waypoint sebagai titik tujuan, langkah berikutnya adalah menghubungkan beberapa waypoint menjadi jaringan, sehingga NPC dapat memilih jalur antar titik secara lebih fleksibel.

---

## Slide 019 - Waypoint Network

### Narasi

Pada slide sebelumnya, kita membahas **waypoint** sebagai titik tujuan antara yang dapat diikuti NPC. Sekarang kita melangkah satu tingkat lebih lanjut: beberapa waypoint tidak berdiri sendiri, tetapi dihubungkan menjadi **waypoint network**.

Intuisi praktisnya adalah begini: jika satu waypoint seperti “titik tujuan”, maka waypoint network seperti **peta jalur sederhana** yang dibuat dari titik-titik dan garis penghubung.

```text
W1 ----- W2 ----- W3
 |        |        |
W4 ----- W5 ----- W6
```

Dalam diagram ini, setiap waypoint seperti `W1`, `W2`, sampai `W6` dapat dipandang sebagai **node**. Garis antara dua waypoint adalah **koneksi** atau **edge** yang menyatakan bahwa NPC dapat bergerak dari satu waypoint ke waypoint lain.

Dengan struktur ini, NPC tidak hanya bergerak ke satu titik, tetapi dapat **memilih jalur** melalui jaringan waypoint. Misalnya, jika NPC berada di `W1` dan tujuannya dekat `W6`, NPC dapat melewati waypoint lain yang terhubung, seperti `W1 → W2 → W5 → W6`.

Kelebihan waypoint network adalah sifatnya yang sederhana dan mudah dikendalikan oleh designer.

- Sederhana untuk dipahami dan diimplementasikan.
- Mudah dibuat secara manual.
- Cocok untuk level kecil atau area terbatas.
- Mudah dikontrol oleh designer untuk mengatur jalur NPC.

Namun, waypoint network juga memiliki keterbatasan.

- Butuh penempatan waypoint secara manual.
- Kurang fleksibel untuk level besar.
- Tidak selalu mengikuti bentuk area walkable secara alami.

Artinya, waypoint network sangat berguna ketika designer ingin **mengatur perilaku navigasi NPC secara eksplisit**, misalnya untuk patrol, checkpoint, atau jalur tertentu. Tetapi untuk level yang besar, kompleks, atau dinamis, jaringan waypoint manual mungkin tidak cukup dan perlu didukung oleh teknik navigasi yang lebih fleksibel.

### Inti yang Harus Ditekankan

- **Waypoint network** adalah kumpulan waypoint yang dihubungkan menjadi struktur seperti graph.
- Setiap waypoint dapat menjadi **node**, dan koneksi antarwaypoint menjadi **edge** yang dapat dilalui NPC.
- Struktur ini memungkinkan NPC mencari jalur melalui waypoint, bukan hanya bergerak ke satu titik.
- Kelebihannya adalah **sederhana, manual, dan mudah dikontrol designer**.
- Kelemahannya adalah **kurang fleksibel untuk level besar** dan tidak selalu mengikuti area walkable secara alami.

### Transisi ke Slide Berikutnya

Setelah memahami bahwa waypoint dapat membentuk jaringan, langkah berikutnya adalah membedakan dua cara NPC menggunakan jaringan tersebut: **patrol** yang mengikuti urutan tetap, dan **pathfinding** yang mencari rute menuju tujuan.

---

## Slide 020 - Waypoint Patrol vs Waypoint Pathfinding

### Narasi

Pada slide ini kita membandingkan dua cara NPC memanfaatkan waypoint: **Waypoint Patrol** dan **Waypoint Pathfinding**. Keduanya sama-sama memakai titik-titik navigasi, tetapi logika pengambilan keputusan NPC-nya berbeda.

**Waypoint Patrol** adalah perilaku sederhana di mana NPC mengikuti urutan waypoint yang sudah ditentukan. Urutannya bersifat tetap, misalnya:

```text
W1 → W2 → W3 → W4 → W1
```

Artinya, NPC tidak mencari rute terbaik menuju tujuan tertentu. NPC hanya menjalankan aksi bergerak ke waypoint berikutnya, lalu kembali ke awal setelah selesai. Pola ini cocok untuk penjagaan, patroli, atau perilaku berulang yang ingin dikontrol langsung oleh designer.

**Waypoint Pathfinding** berbeda. Di sini NPC memiliki posisi awal dan tujuan, lalu memilih jalur melalui jaringan waypoint. Contoh pada slide:

```text
NPC at W1
Goal near W6

Path:
W1 → W2 → W5 → W6
```

Dalam kasus ini, NPC tidak sekadar mengikuti daftar tetap. NPC perlu menentukan urutan waypoint mana yang membentuk rute menuju `W6`. Jika waypoint sudah terhubung menjadi graph, proses ini bisa menggunakan pencarian jalur, misalnya memilih rute yang lebih pendek atau lebih sesuai dengan aturan level.

Perbedaan utamanya dapat diringkas sebagai berikut:

```text
Patrol = mengikuti urutan tetap
Pathfinding = mencari rute terbaik
```

Secara perilaku game, **patrol** lebih mirip state atau action berulang: `move to next waypoint`, `wait`, `loop`. Sementara **pathfinding** lebih mirip proses decision making: dari posisi saat ini dan goal, sistem menghasilkan urutan node yang harus dilalui. Mahasiswa perlu memahami bahwa waypoint network yang sama bisa dipakai untuk dua tujuan berbeda: membuat NPC berpatroli, atau menjadi dasar pencarian rute menuju target.

Sebelum lanjut, hal penting yang harus dipahami adalah: **patrol tidak membutuhkan pencarian rute**, sedangkan **pathfinding membutuhkan graph dan aturan pencarian**. Jika level kecil dan perilaku NPC sederhana, patrol sudah cukup. Namun jika NPC harus menuju posisi dinamis, seperti mengejar pemain atau menuju titik tertentu, waypoint pathfinding lebih relevan.

### Inti yang Harus Ditekankan

- **Waypoint Patrol** menggunakan urutan waypoint tetap, misalnya `W1 → W2 → W3 → W4 → W1`.
- **Waypoint Pathfinding** memilih rute melalui network berdasarkan posisi NPC dan tujuan, misalnya `W1 → W2 → W5 → W6`.
- Patrol cocok untuk perilaku berulang dan mudah dikontrol; pathfinding cocok untuk navigasi menuju tujuan dinamis.
- Keduanya memakai waypoint, tetapi logika NPC-nya berbeda: patrol mengikuti daftar, pathfinding mencari rute.

### Transisi ke Slide Berikutnya

Setelah memahami perbedaan patrol dan pathfinding pada waypoint, kita perlu melihat cara lain merepresentasikan area navigasi. Pada slide berikutnya, grid akan diubah menjadi graph, sehingga setiap cell walkable dapat menjadi node yang bisa dilalui.

---

## Slide 021 - Grid sebagai Graph

### Narasi

Pada slide ini, kita membahas representasi dasar yang sering dipakai dalam **pathfinding** pada game berbasis grid. Intuisi utamanya sederhana: dunia game yang berbentuk kotak-kotak dapat diubah menjadi struktur **graph**, sehingga posisi yang bisa ditempati NPC menjadi **node**, dan hubungan antarposisi menjadi dasar pencarian jalur.

Contoh grid pada slide ini adalah:

```text
. . .
. # .
. . .
```

Simbol `.` menyatakan **cell walkable**, yaitu posisi yang dapat ditempati atau dilalui. Simbol `#` menyatakan **obstacle**, yaitu posisi yang tidak dapat ditempati. Dalam representasi graph, setiap cell walkable akan menjadi satu node.

Node yang terbentuk dari grid tersebut adalah:

```text
(0,0), (1,0), (2,0)
(0,1),       (2,1)
(0,2), (1,2), (2,2)
```

Perhatikan bahwa cell `(1,1)` tidak muncul sebagai node karena posisinya berisi `#`. Artinya, obstacle tidak hanya menghalangi visual, tetapi juga menghapus kemungkinan posisi tersebut dari ruang pencarian jalur.

Representasi ini penting karena algoritma pathfinding tidak bekerja langsung pada gambar grid, tetapi pada struktur graph. Node menyatakan **posisi yang valid**, sedangkan jalur yang dicari adalah urutan node dari posisi awal menuju posisi tujuan. Dengan kata lain, masalah “NPC harus bergerak dari titik A ke titik B” menjadi masalah “mencari rute pada graph yang node-node-nya adalah cell walkable”.

Dalam konteks game, representasi ini membantu NPC menghindari dinding, jurang, atau area non-walkable. Jika obstacle berada di tengah grid, jalur tidak bisa melewati titik tersebut, sehingga pencarian jalur harus menemukan rute alternatif melalui node-node yang tetap valid.

Sebelum lanjut, hal yang harus dipahami mahasiswa adalah bahwa **grid adalah bentuk data level**, sedangkan **graph adalah bentuk logika pencarian jalur**. Grid memberi tahu kita posisi mana yang bisa ditempati, dan graph memberi tahu kita bagaimana posisi-posisi tersebut dapat dihubungkan.

### Inti yang Harus Ditekankan

- **Grid dapat diubah menjadi graph** untuk keperluan pathfinding.
- Setiap **cell walkable** menjadi **node** dengan koordinat tertentu.
- **Cell obstacle** tidak menjadi node yang dapat dilalui, sehingga membatasi jalur yang mungkin.
- Representasi graph memungkinkan sistem game mencari rute dari posisi awal ke posisi tujuan secara terstruktur.

### Transisi ke Slide Berikutnya

Setelah node-node grid terbentuk, langkah berikutnya adalah menentukan node mana yang dapat dihubungkan, yaitu aturan **neighbor** pada grid.

---

## Slide 022 - Neighbor pada Grid

### Narasi

Pada slide sebelumnya, kita sudah melihat bahwa **grid** dapat dipandang sebagai **graph**. Setiap cell yang bisa dilalui menjadi node. Langkah berikutnya adalah menentukan node mana saja yang saling terhubung. Koneksi inilah yang disebut **neighbor** atau tetangga.

Dalam grid 2D, pilihan paling umum adalah **4 arah**:

```text
   atas
kiri X kanan
  bawah
```

Artinya, dari satu cell, NPC hanya boleh bergerak ke atas, bawah, kiri, atau kanan. Representasi offsetnya bisa ditulis sebagai `(-1, 0)`, `(1, 0)`, `(0, -1)`, dan `(0, 1)`.

Pilihan lain adalah **8 arah**:

```text
kiri-atas    atas    kanan-atas
kiri         X       kanan
kiri-bawah   bawah   kanan-bawah
```

Dengan 8 arah, NPC juga dapat bergerak diagonal. Offset diagonal yang ditambahkan adalah `(-1, -1)`, `(1, -1)`, `(-1, 1)`, dan `(1, 1)`.

Pilihan neighbor sangat menentukan bentuk **path** yang dihasilkan algoritma pathfinding seperti `A*`, `Dijkstra`, atau `BFS`. Algoritma tersebut tidak “tahu” arah secara bebas; mereka hanya mengeksplorasi node yang dianggap tetangga oleh fungsi `neighbor`.

Untuk **4 arah**:

- lebih sederhana untuk diimplementasikan.
- cocok untuk game tile-based dengan movement ortogonal.
- path cenderung lurus horizontal atau vertikal.
- aturan tabrakan lebih mudah karena hanya satu sumbu per langkah.

Untuk **8 arah**:

- lebih fleksibel dan menghasilkan gerakan yang lebih halus.
- NPC dapat bergerak diagonal.
- harus memperhatikan **diagonal cost** dan validitas diagonal.
- path biasanya terlihat lebih natural, tetapi logika `neighbor` lebih kompleks.

Dalam konteks perilaku NPC, pilihan ini bukan hanya masalah matematika. Ini memengaruhi rasa movement, desain level, dan bentuk path yang dihasilkan. Misalnya, karakter yang bergerak seperti papan catur biasanya memakai 4 arah, sedangkan karakter yang bergerak lebih bebas di grid sering memakai 8 arah.

Sebelum masuk ke slide berikutnya, mahasiswa perlu memahami bahwa **neighbor set** adalah keputusan desain sekaligus keputusan teknis. Set neighbor menentukan edge pada graph, memengaruhi jumlah node yang dieksplorasi, bentuk path, dan biaya pergerakan yang akan dibahas selanjutnya.

### Inti yang Harus Ditekankan

- **Neighbor** menentukan edge antara node pada grid graph.
- **4 arah** lebih sederhana dan cocok untuk movement tile-based ortogonal.
- **8 arah** lebih fleksibel, tetapi perlu memperhatikan **diagonal cost** dan aturan diagonal.
- Pilihan neighbor memengaruhi hasil pathfinding, perilaku NPC, dan desain movement game.

### Transisi ke Slide Berikutnya

Setelah kita tahu cell mana yang dianggap tetangga, langkah berikutnya adalah menentukan berapa biaya untuk berpindah ke tetangga tersebut. Pada slide berikutnya, kita akan membahas **cost pada grid**, termasuk mengapa diagonal biasanya tidak sama dengan gerakan ortogonal.

---

## Slide 023 - Cost pada Grid

### Narasi

Pada grid, **cost** adalah biaya yang dibayar ketika sebuah karakter berpindah dari satu tile ke tile lain. Cost tidak selalu sama dengan jumlah langkah; cost dapat mewakili jarak, waktu, energi, atau tingkat kesulitan pergerakan.

Untuk movement 4 arah:

```text
atas, bawah, kiri, kanan
cost = 1
```

Artinya, setiap perpindahan ortogonal dianggap memiliki biaya satu satuan. Ini adalah bentuk cost yang paling sederhana dan sering digunakan pada grid tile-based.

Jika movement diagonal diizinkan:

```text
diagonal cost ≈ 1.414
```

Nilai ini berasal dari:

```text
√2
```

Secara geometri, perpindahan diagonal dari satu tile ke tile diagonal memiliki jarak akar dari `1^2 + 1^2`, yaitu `√2`. Jika diagonal diberi cost `1`, jalur diagonal akan terasa terlalu murah dibandingkan jarak sebenarnya. Dengan cost sekitar `1.414`, jalur yang dihasilkan lebih konsisten dengan jarak Euclidean.

Dalam game, cost juga dapat dipengaruhi **terrain**:

```text
jalan biasa     cost = 1
rumput          cost = 2
lumpur          cost = 4
air dangkal     cost = 5
lava            tidak bisa dilalui
```

Tabel ini menunjukkan bahwa pathfinding tidak hanya mencari jalur dengan jumlah tile paling sedikit, tetapi jalur dengan **total cost paling kecil**. Tile dengan cost tinggi tidak selalu dilarang, tetapi akan dihindari jika ada alternatif yang lebih murah. Tile seperti `lava` dapat dianggap **impassable**, sehingga tidak boleh digunakan sebagai bagian dari jalur.

Secara konseptual, grid berubah menjadi **graph berbobot**:

- node = tile,
- edge = perpindahan antar tile,
- weight = cost perpindahan.

Algoritma pathfinding kemudian memilih jalur berdasarkan total biaya, bukan hanya urutan langkah.

Sebelum lanjut, mahasiswa perlu memahami bahwa cost adalah properti **edge**, bukan hanya properti tile. Cost dapat berbeda untuk arah ortogonal, arah diagonal, dan jenis terrain. Pemahaman ini penting karena menentukan apakah pencarian dapat dianggap seragam atau perlu memperhitungkan bobot.

### Inti yang Harus Ditekankan

- **Cost** adalah biaya perpindahan antar tile, bukan sekadar jumlah langkah.
- Untuk 4 arah, cost ortogonal biasanya `1`; untuk diagonal, cost mendekati `1.414` atau `√2`.
- Terrain dapat mengubah cost, misalnya `rumput = 2`, `lumpur = 4`, dan `lava` tidak bisa dilalui.
- Grid dengan cost berbeda diperlakukan sebagai **graph berbobot**, sehingga jalur optimal bergantung pada total biaya.

### Transisi ke Slide Berikutnya

Selanjutnya kita akan melihat **Breadth-First Search**, yaitu algoritma pencarian yang cocok ketika cost antar langkah dianggap seragam dan tujuan utamanya adalah menemukan jalur dengan jumlah langkah paling sedikit.

---

## Slide 024 - Breadth-First Search

### Narasi

Setelah memahami cost pada grid, langkah berikutnya adalah memilih algoritma yang dapat menemukan jalur dari posisi awal ke tujuan. Dalam game, NPC sering harus bergerak di grid atau graph, misalnya dari titik spawn ke target pemain. **Breadth-First Search** atau **BFS** adalah salah satu algoritma pencarian dasar yang digunakan untuk menemukan jalur tersebut.

BFS bekerja dengan cara menjelajahi node secara **level per level**. Artinya, algoritma ini tidak langsung memilih satu arah yang terlihat paling dekat ke tujuan, tetapi memeriksa semua kemungkinan tetangga pada jarak terdekat terlebih dahulu. Setelah semua node pada level pertama selesai diproses, barulah BFS melanjutkan ke level berikutnya.

Prinsip intinya dapat diringkas sebagai berikut:

```text
kunjungi tetangga terdekat dulu
baru lanjut ke level berikutnya
```

Cara berpikir ini mirip dengan gelombang yang menyebar dari titik `start`. Semua node yang berjarak satu langkah dari `start` diproses lebih dulu, kemudian node yang berjarak dua langkah, dan seterusnya. Karena penjelajahan dilakukan secara merata ke semua arah, BFS tidak bergantung pada tebakan arah tujuan.

BFS paling cocok digunakan pada situasi berikut:

- graph tanpa bobot,
- grid dengan cost seragam,
- pencarian jalur dengan jumlah langkah paling sedikit.

Jika setiap langkah memiliki biaya yang sama, misalnya bergerak satu tile selalu bernilai `1`, maka jalur pertama yang mencapai `goal` pada BFS adalah jalur dengan jumlah langkah minimum. Inilah alasan BFS sering menjadi pilihan untuk grid sederhana, papan permainan, atau NPC yang bergerak pada tile dengan biaya seragam.

Namun, mahasiswa perlu memahami batasannya. Jika cost antar langkah berbeda, misalnya rumput lebih mahal daripada jalan, BFS tidak cukup untuk menjamin jalur dengan biaya minimum karena BFS hanya menghitung jumlah langkah, bukan total cost. Untuk kasus seperti itu, diperlukan pendekatan pencarian yang memperhitungkan bobot.

BFS juga membutuhkan struktur data untuk menyimpan node yang sudah ditemukan tetapi belum diproses. Struktur data tersebut adalah:

```text
Queue
```

Queue berperan menjaga urutan penjelajahan agar node pada level yang lebih dekat tetap diproses sebelum node pada level yang lebih jauh. Dengan mekanisme ini, BFS dapat mempertahankan sifat pencarian yang sistematis dan terukur.

Dalam konteks game, BFS dapat digunakan untuk membuat NPC yang mampu menemukan jalur di lingkungan grid, menghindari obstacle, dan mencapai target. Algoritma ini relatif mudah dipahami dan diimplementasikan, sehingga menjadi fondasi penting sebelum memahami struktur data yang mendukung proses pencarian.

### Inti yang Harus Ditekankan

- **BFS** menjelajahi node pada level terdekat terlebih dahulu, yaitu dari `start` ke tetangga terdekat, lalu ke level berikutnya.
- BFS cocok untuk **graph tanpa bobot** atau **grid dengan cost seragam** karena dapat menemukan jalur dengan jumlah langkah paling sedikit.
- BFS menggunakan `Queue` untuk menjaga urutan penjelajahan, sehingga node yang lebih dekat diproses sebelum node yang lebih jauh.
- Jika cost tidak seragam, BFS tidak menjamin jalur dengan total biaya minimum.

### Transisi ke Slide Berikutnya

Untuk memahami bagaimana BFS menjaga urutan penjelajahan secara benar, kita akan membahas struktur `Queue` yang digunakan pada slide berikutnya.

---

## Slide 025 - Queue pada BFS

### Narasi

**Queue** adalah struktur data yang menjadi kunci cara **Breadth-First Search** atau BFS menjelajahi graph. Prinsip utamanya adalah **First In, First Out** atau FIFO. Artinya, node yang lebih dulu dimasukkan akan lebih dulu diproses. Dalam konteks pathfinding, FIFO membuat BFS tidak langsung melompat jauh ke satu arah, tetapi memproses node secara berurutan sesuai urutan penemuannya.

Contoh sederhananya, jika node `A`, `B`, dan `C` masuk ke queue secara berurutan, maka urutan keluarnya juga `A`, `B`, `C`. Urutan ini penting karena BFS ingin memastikan node pada level yang sama dipertimbangkan sebelum masuk ke level berikutnya. Dengan kata lain, queue menjaga agar pencarian tetap “melebar” secara teratur.

Dalam BFS, alur kerja queue dapat dilihat sebagai berikut:

```text
queue = [start]
visited = {start}

while queue tidak kosong:
    node = ambil dari depan queue

    if node == goal:
        return jalur

    for neighbor in neighbors(node):
        if neighbor belum visited:
            visited.add(neighbor)
            queue.push_back(neighbor)
```

Pada potongan di atas, `start` adalah posisi awal NPC atau agen yang sedang mencari jalur. `queue` menyimpan node yang sudah ditemukan tetapi belum diproses. `visited` digunakan untuk menandai node yang sudah pernah dipertimbangkan, sehingga node yang sama tidak diproses berulang kali. Setiap kali `node` diambil dari depan queue, algoritma memeriksa apakah node tersebut adalah `goal`. Jika belum, semua `neighbor` yang valid dan belum dikunjungi dimasukkan ke belakang queue.

Urutan eksekusi ini menghasilkan perilaku pencarian yang melebar. Node `start` diproses pertama, lalu tetangganya, lalu tetangga dari tetangga, dan seterusnya. Karena setiap langkah dianggap memiliki cost yang sama, urutan FIFO pada queue membuat BFS menemukan jalur dengan jumlah langkah paling sedikit pada graph tanpa bobot.

Dalam game, struktur ini sering dipakai untuk NPC yang bergerak di grid sederhana, seperti koridor, peta tile, atau area dengan biaya langkah seragam. Queue tidak membuat NPC “tahu” arah `goal` secara langsung; ia hanya menjaga urutan penjelajahan tetap rapi. Dengan cara ini, pencarian tetap sistematis, mudah diikuti, dan dapat diprediksi.

Yang harus dipahami sebelum lanjut adalah peran queue sebagai penentu urutan BFS. Jika queue diganti dengan struktur yang memproses node terakhir lebih dulu, perilaku pencarian akan berubah. Jadi, queue bukan sekadar tempat menyimpan node, tetapi mekanisme yang membuat BFS menjelajah per level.

### Inti yang Harus Ditekankan

- Queue menggunakan prinsip **First In, First Out** atau FIFO.
- BFS menyimpan `start` di queue, lalu memproses node dari depan queue.
- `neighbor` yang belum dikunjungi dimasukkan ke belakang queue.
- `visited` mencegah node yang sama diproses berulang kali.
- FIFO membuat BFS menjelajah per level, sehingga cocok untuk grid dengan cost seragam.

### Transisi ke Slide Berikutnya

Setelah memahami peran queue, kita akan melihat bagaimana BFS benar-benar bergerak pada grid sederhana, dari `S` menuju `G`, dan mengapa penjelajahannya bisa melebar sebelum mencapai goal.

---

## Slide 026 - Ilustrasi BFS

### Narasi

Bayangkan sebuah NPC bergerak di atas peta grid sederhana. Setiap sel dapat berupa jalan, dinding, titik awal, atau tujuan. Pada ilustrasi ini, `S` adalah posisi awal, `G` adalah tujuan, dan `#` adalah rintangan yang tidak bisa dilewati.

```text
S . .
. # .
. . G
```

BFS bekerja dengan cara memperluas pencarian secara merata ke sekitar posisi awal. Ia tidak langsung “melompat” ke arah `G`, tetapi memeriksa tetangga yang masih mungkin menjadi bagian dari jalur.

Urutan penjelajahannya dapat dipahami sebagai berikut:

1. Mulai dari `S`.
2. Kembangkan semua tetangga `S` yang valid.
3. Kembangkan tetangga dari tetangga `S`.
4. Lanjutkan sampai `G` ditemukan.

Karena penjelajahan bersifat melebar, BFS dapat memeriksa cukup banyak node sebelum mencapai tujuan. Hal ini penting untuk dipahami karena perilaku NPC akan terlihat seperti mencari jalur secara sistematis, bukan selalu memilih langkah yang paling “pintar” menuju goal.

Dalam konteks game, ilustrasi ini membantu kita melihat bagaimana pathfinding berbasis grid bekerja: agent memiliki lingkungan diskrit, ada aturan mana sel yang boleh dimasuki, dan pencarian dilakukan langkah demi langkah dari posisi awal.

### Inti yang Harus Ditekankan

- BFS menjelajah **secara melebar**, bukan langsung menuju `G`.
- `#` adalah rintangan, sehingga tetangga yang tidak valid tidak dikembangkan.
- BFS dapat memeriksa banyak node sebelum menemukan goal.
- Ilustrasi ini menunjukkan dasar perilaku NPC pada grid sederhana.

### Transisi ke Slide Berikutnya

Setelah kita melihat bentuk penjelajahannya, slide berikutnya akan menuliskan langkah-langkah BFS secara lebih formal dalam bentuk pseudocode.

---

## Slide 027 - Pseudocode BFS

### Narasi

Setelah melihat ilustrasi BFS, langkah berikutnya adalah melihat bagaimana algoritma tersebut ditulis sebagai prosedur yang dapat diimplementasikan. Pseudocode ini menunjukkan tiga struktur data utama: **queue**, **visited**, dan **cameFrom**.

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

Struktur `queue` berfungsi sebagai antrean node yang akan diperiksa. Karena BFS menggunakan prinsip **FIFO**, node yang lebih dekat ke `start` akan diproses lebih dulu. Sifat inilah yang membuat BFS menjelajah secara melebar, satu lapisan jarak pada satu waktu.

Struktur `visited` mencegah node yang sama diperiksa berulang kali. Tanpa `visited`, algoritma bisa terjebak pada siklus, terutama pada graph yang memiliki banyak koneksi. Dalam konteks grid game, hal ini penting agar NPC tidak terus-menerus mengecek tile yang sudah pernah dilewati.

Struktur `cameFrom` menyimpan node induk dari setiap node yang ditemukan. Saat `goal` ditemukan, path tidak langsung tersedia; path dibangun kembali dengan mengikuti `cameFrom` dari `goal` menuju `start`, lalu dibalik urutannya. Inilah alasan mengapa `cameFrom` sering menjadi bagian penting pada algoritma pencarian path.

Urutan eksekusinya dimulai dengan memasukkan `start` ke `queue` dan menandainya sebagai visited. Selama `queue` belum kosong, satu node diambil sebagai `current`. Jika `current` sama dengan `goal`, algoritma berhenti dan mengembalikan hasil rekonstruksi path. Jika belum, semua `neighbor` dari `current` diperiksa.

Untuk setiap `neighbor` yang belum visited, algoritma menandainya sebagai visited, mencatat `cameFrom[neighbor] = current`, lalu memasukkan `neighbor` ke `queue`. Dengan cara ini, penjelajahan terus melebar hingga `goal` ditemukan.

Dalam implementasi game sederhana, pseudocode ini dapat dipakai untuk NPC yang bergerak pada grid tile-based, misalnya musuh yang mengejar pemain pada peta kotak-kotak. Jika semua langkah memiliki biaya yang sama, BFS akan memberikan path dengan jumlah langkah paling sedikit. Namun, karena BFS tidak memakai informasi arah tujuan, penjelajahannya bisa mencakup banyak node sebelum mencapai `goal`.

### Inti yang Harus Ditekankan

- BFS menggunakan **queue** untuk menjaga urutan penjelajahan dari node terdekat ke node berikutnya.
- `visited` mencegah pemeriksaan ulang dan menjaga algoritma tetap berhenti pada graph yang memiliki siklus.
- `cameFrom` menyimpan parent node sehingga path dari `start` ke `goal` dapat direkonstruksi.
- Pada graph unweighted, BFS menghasilkan **shortest path** berdasarkan jumlah langkah.

### Transisi ke Slide Berikutnya

Setelah memahami cara kerja pseudocode BFS, langkah berikutnya adalah menilai kapan algoritma ini cocok digunakan dan kapan keterbatasannya mulai terasa.

---

## Slide 028 - Kelebihan dan Kekurangan BFS

### Narasi

Setelah melihat pseudocode **BFS**, langkah berikutnya adalah menilai kapan algoritma ini layak digunakan dalam game. **BFS** bekerja dengan menjelajah `node` secara bertahap, dari node terdekat ke node yang lebih jauh, menggunakan `queue` dan `visited`. Karena penjelajahannya bersifat seragam, **BFS** memberi intuisi yang kuat tentang jarak minimum dalam jumlah langkah.

Kelebihan utama **BFS** adalah kesederhanaannya. Algoritma ini mudah dipahami, mudah diimplementasikan, dan cukup stabil untuk `grid` sederhana. Jika semua `edge` memiliki `cost` yang sama, misalnya setiap perpindahan antar tile memiliki biaya satu langkah, maka jalur yang ditemukan **BFS** adalah **shortest path** dalam arti jumlah `node` atau langkah minimum. Dalam konteks game, ini cocok untuk peta berbasis grid kecil, prototipe NPC, atau situasi di mana biaya gerak tidak berbeda antar sel.

Namun, **BFS** memiliki batas yang penting. Algoritma ini tidak dirancang untuk **weighted graph**, yaitu graf di mana setiap `edge` memiliki `cost` berbeda. Jika ada jalan cepat, medan berat, air, atau area dengan biaya gerak berbeda, **BFS** tidak bisa membedakan jalur yang lebih murah. Akibatnya, jalur yang dihasilkan mungkin paling sedikit langkah, tetapi belum tentu paling efisien secara biaya.

Kekurangan lain adalah **BFS** dapat menjelajah terlalu banyak `node`. Karena algoritma ini tidak menggunakan informasi arah tujuan, ia cenderung menyebar ke semua arah yang mungkin. Pada map kecil, hal ini masih dapat diterima. Tetapi pada map besar atau lingkungan terbuka, jumlah `node` yang diperiksa dan disimpan dalam `queue` dapat meningkat cepat, sehingga waktu dan memori menjadi kurang efisien.

Intuisi praktisnya adalah **BFS** seperti gelombang yang menyebar merata dari titik awal. Ia sangat berguna untuk memahami dasar `pathfinding`, tetapi belum cukup untuk kebutuhan navigasi game yang lebih realistis. Mahasiswa perlu memahami bahwa **BFS** adalah fondasi penting sebelum masuk ke algoritma yang lebih adaptif, yaitu **Dijkstra** dan `A*`.

### Inti yang Harus Ditekankan

- **BFS** mudah dipahami dan mudah diimplementasikan, terutama untuk `grid` sederhana.
- Jika semua `cost` sama, **BFS** menghasilkan **shortest path** dalam jumlah langkah minimum.
- **BFS** tidak cocok untuk **weighted graph** karena tidak memperhitungkan `cost` setiap `edge`.
- **BFS** dapat memeriksa terlalu banyak `node` karena tidak menggunakan informasi arah tujuan.
- **BFS** adalah dasar penting sebelum memahami **Dijkstra** dan `A*`.

### Transisi ke Slide Berikutnya

Karena **BFS** mengasumsikan semua langkah memiliki biaya yang sama, kita perlu algoritma yang mampu memilih jalur berdasarkan total `cost` terkecil. Pada slide berikutnya, kita akan membahas **Dijkstra**, yaitu algoritma `pathfinding` untuk **weighted graph** yang memperhitungkan biaya setiap `edge`.

---

## Slide 029 - Dijkstra

### Narasi

**Dijkstra** adalah algoritma pathfinding untuk **weighted graph**, yaitu graf di mana setiap edge memiliki biaya atau `cost`. Berbeda dengan BFS yang hanya menghitung jumlah langkah, Dijkstra mencari jalur dengan **total cost terkecil** dari node awal ke node tujuan.

Intuisi praktisnya: dalam game, biaya pergerakan tidak selalu sama. Misalnya, NPC bergerak di jalan cepat mungkin memiliki `cost` kecil, sedangkan melewati medan berat memiliki `cost` lebih besar. Karena itu, NPC tidak cukup memilih jalur dengan jumlah langkah paling sedikit; ia perlu memilih jalur yang paling murah secara total.

Contoh pada slide:

```text
A --1-- B --1-- D
 \             /
  \--5-- C --1
```

Ada dua jalur utama dari `A` ke `D`:

- `A → B → D` dengan total `cost` `1 + 1 = 2`.
- `A → C → D` dengan total `cost` `5 + 1 = 6`.

Karena `2` lebih kecil dari `6`, Dijkstra memilih:

```text
A → B → D
```

Poin penting yang harus dipahami mahasiswa adalah Dijkstra tidak menilai satu edge saja, tetapi **akumulasi cost** sepanjang jalur. Edge yang murah di awal belum tentu menghasilkan jalur terbaik jika diikuti edge yang mahal. Sebaliknya, jalur dengan beberapa edge murah dapat menjadi total biaya terkecil.

Dalam konteks game, Dijkstra berguna untuk NPC yang bergerak di grid atau graph dengan biaya berbeda, misalnya terrain cost, area berbahaya, atau jalur yang lebih aman. Algoritma ini menjadi dasar penting sebelum memahami algoritma yang lebih efisien seperti `A*`, yang akan memperhitungkan arah tujuan melalui heuristic.

### Inti yang Harus Ditekankan

- **Dijkstra** mencari jalur dengan **total cost terkecil**, bukan hanya jumlah langkah terkecil.
- Setiap edge pada **weighted graph** memiliki biaya, dan biaya tersebut dijumlahkan sepanjang jalur.
- Contoh `A → B → D` dipilih karena total `cost` `2`, lebih kecil dari `A → C → D` yang total `cost` `6`.
- Dijkstra penting untuk NPC behavior dan pathfinding ketika biaya pergerakan tidak seragam.

### Transisi ke Slide Berikutnya

Selanjutnya kita akan melihat bagaimana Dijkstra menyimpan nilai biaya sementara, yaitu `costSoFar`, agar dapat membandingkan jalur dan memperbarui jalur termurah saat menemukan alternatif yang lebih baik.

---

## Slide 030 - Konsep Cost pada Dijkstra

### Narasi

Setelah kita melihat bahwa **Dijkstra** memilih jalur dengan total cost terkecil, sekarang kita bedah bagian penting dari algoritma tersebut, yaitu **konsep cost**.

Dijkstra menyimpan nilai **`costSoFar`** untuk setiap `node`. Nilai ini menyatakan **jarah termurah yang diketahui** dari `start` ke `node` tersebut.

```text
costSoFar[A] = 0
costSoFar[B] = 3
costSoFar[C] = 7
```

Artinya, dari `start` ke `A` biayanya 0 karena `A` adalah titik awal. Dari `start` ke `B`, jalur termurah yang diketahui saat ini memiliki biaya 3. Dari `start` ke `C`, jalur termurah yang diketahui saat ini memiliki biaya 7.

Jika kemudian ditemukan jalur lain ke `node` yang sama dengan biaya lebih kecil, nilai `costSoFar` lama akan diganti. Secara sederhana, prosesnya seperti ini:

```text
if newCost < costSoFar[node]:
    costSoFar[node] = newCost
```

Proses ini penting karena Dijkstra tidak langsung mengunci satu jalur. Algoritma terus memeriksa apakah ada jalur lain yang lebih murah menuju `node` yang sama.

Dalam konteks game, **cost** tidak selalu berarti jumlah langkah. Cost bisa mewakili waktu tempuh, energi yang digunakan, risiko bertemu musuh, atau kesulitan medan. Misalnya, jalan raya mungkin memiliki cost lebih kecil daripada hutan, karena NPC bisa bergerak lebih cepat dan aman di jalan raya.

Jadi, Dijkstra tidak sekadar mencari jalur dengan sedikit `edge`. Dijkstra mencari jalur dengan **total biaya paling kecil**. Inilah yang membuat algoritma ini cocok untuk navigasi NPC pada graph berbobot.

Sebelum lanjut, mahasiswa perlu memahami bahwa `costSoFar` adalah **nilai sementara terbaik** yang diketahui. Nilai ini bisa berubah selama proses pencarian, selama ditemukan jalur yang lebih murah.

### Inti yang Harus Ditekankan

- **`costSoFar`** adalah biaya termurah yang diketahui dari `start` ke suatu `node`.
- Nilai `costSoFar` diperbarui hanya jika ditemukan jalur dengan **`newCost`** yang lebih kecil.
- Dijkstra menghitung **total biaya**, bukan hanya jumlah langkah.
- Dalam game, cost dapat merepresentasikan waktu, energi, risiko, atau kesulitan medan.

### Transisi ke Slide Berikutnya

Setelah nilai `costSoFar` dipahami, langkah berikutnya adalah menentukan `node` mana yang diproses lebih dulu. Di situlah peran **Priority Queue** pada Dijkstra.

---

## Slide 031 - Priority Queue pada Dijkstra

### Narasi

Pada slide ini kita masuk ke bagian penting dari cara Dijkstra bekerja, yaitu **Priority Queue**. Struktur ini berfungsi seperti daftar tunggu yang selalu memprioritaskan node dengan nilai prioritas terkecil. Dalam Dijkstra, prioritas biasanya adalah `costSoFar`, yaitu total biaya termurah yang sudah diketahui dari node awal ke node tersebut.

Artinya, Dijkstra tidak memproses node secara acak, juga tidak hanya mengikuti urutan penemuan. Node yang memiliki biaya terkecil akan diambil lebih dulu untuk dikembangkan. Cara ini membuat pencarian tetap efisien karena jalur yang murah dieksplorasi sebelum jalur yang mahal.

Contoh isi queue pada slide:

```text
Node B cost 2
Node C cost 5
Node D cost 3
```

Meskipun `C` mungkin ditemukan lebih dulu atau lebih dekat secara posisi, queue tidak mengurutkannya berdasarkan urutan masuk. Queue mengurutkan berdasarkan cost. Karena `B` memiliki cost 2, `B` keluar pertama. Setelah `B` diproses, sisa queue berisi `D` cost 3 dan `C` cost 5, sehingga `D` keluar sebelum `C`.

```text
Urutan keluar: B → D → C
```

Dalam konteks game, struktur ini sangat relevan untuk **pathfinding NPC**. Misalnya, NPC harus mencari rute dari titik awal ke tujuan di peta yang memiliki biaya berbeda untuk rumput, jalan, air, atau area berbahaya. Priority queue memastikan NPC tidak membuang waktu mengeksplorasi area mahal sebelum area murah yang mungkin menuju goal.

Hal penting yang harus dipahami mahasiswa adalah bahwa Priority Queue menjaga Dijkstra tetap sistematis. Dengan selalu mengambil node berbiaya terkecil, algoritma dapat menjamin bahwa ketika suatu node diproses, biaya termurah ke node tersebut sudah final, selama semua edge memiliki cost non-negatif. Ini menjadi alasan Dijkstra dapat menemukan jalur termurah, bukan sekadar jalur yang lebih pendek dalam jumlah langkah.

Secara praktis, Priority Queue adalah komponen yang membuat pencarian jalur di game terasa lebih efisien secara komputasi. NPC tidak memeriksa semua kemungkinan secara buta, tetapi memilih kandidat jalur yang paling menjanjikan berdasarkan biaya yang sudah dihitung.

### Inti yang Harus Ditekankan

- **Priority Queue** adalah struktur data yang selalu mengambil node dengan prioritas terkecil.
- Pada Dijkstra, prioritas biasanya adalah `costSoFar`, yaitu total biaya termurah dari start ke node.
- Urutan pemrosesan ditentukan oleh cost, bukan urutan node ditemukan.
- Contoh `B cost 2`, `C cost 5`, `D cost 3` menghasilkan urutan `B → D → C`.
- Priority queue membantu pathfinding game menjadi lebih efisien karena NPC mengeksplorasi jalur murah lebih dulu.

### Transisi ke Slide Berikutnya

Selanjutnya, kita akan melihat bagaimana Priority Queue, `costSoFar`, dan `cameFrom` digabungkan dalam pseudocode Dijkstra, sehingga mahasiswa dapat melihat alur lengkap pencarian jalur dari start hingga goal.

---

## Slide 032 - Pseudocode Dijkstra

### Narasi

Pseudocode ini menunjukkan bentuk inti dari algoritma **Dijkstra** dalam konteks pathfinding game. Tujuannya bukan hanya menemukan jalur yang sampai ke `goal`, tetapi menemukan jalur dengan **total cost terkecil** dari `start` ke `goal` pada graph berbobot. Dalam game, `cost` bisa mewakili jarak, waktu, risiko, atau biaya melintasi terrain tertentu.

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

Tiga struktur utama yang harus dipahami mahasiswa adalah:

- `frontier`: priority queue yang menyimpan node yang masih perlu diperiksa.
- `cameFrom`: peta untuk merekonstruksi jalur setelah `goal` ditemukan.
- `costSoFar`: nilai cost terbaik yang diketahui menuju setiap node.

Urutan eksekusi pseudocode dapat dibaca sebagai berikut:

1. Inisialisasi `frontier`, `cameFrom`, dan `costSoFar`.
2. Masukkan `start` ke `frontier` dengan prioritas `0`, karena cost awal ke `start` adalah nol.
3. Ambil node dengan prioritas terendah dari `frontier` sebagai `current`.
4. Jika `current` sama dengan `goal`, hentikan pencarian karena jalur termurah sudah ditemukan.
5. Untuk setiap `neighbor` dari `current`, hitung `newCost` sebagai `costSoFar[current] + cost(current, neighbor)`.
6. Jika `newCost` lebih baik dari cost yang sudah tersimpan, perbarui `costSoFar[neighbor]`, `cameFrom[neighbor]`, dan prioritas node tersebut di `frontier`.

Bagian terpenting adalah proses **relaxation**, yaitu pembaruan cost ketika ditemukan jalur alternatif yang lebih murah. Kondisi `neighbor not in costSoFar or newCost < costSoFar[neighbor]` memastikan algoritma tidak hanya menerima jalur pertama kali, tetapi terus memperbaiki solusi selama masih ada cost yang lebih kecil. Inilah yang membuat Dijkstra cocok untuk graph berbobot, misalnya grid dengan rumput, pasir, air, atau area berbahaya yang memiliki biaya berbeda.

Dalam implementasi game, `current` dan `neighbor` dapat berupa sel grid, node navmesh, atau simpul graph navigasi. Fungsi `cost(current, neighbor)` menentukan seberapa mahal NPC bergerak dari satu node ke node lain. Jika cost hanya jarak Euclidean, Dijkstra cenderung mencari jalur terpendek. Jika cost dipengaruhi terrain, NPC akan memilih rute yang mungkin lebih panjang tetapi lebih murah atau lebih aman. Setelah `goal` ditemukan, jalur dapat direkonstruksi dengan menelusuri `cameFrom` dari `goal` kembali ke `start`.

Poin yang perlu ditekankan sebelum lanjut adalah bahwa Dijkstra tidak menebak arah `goal`. Ia menjelajah node berdasarkan cost terkecil yang diketahui, sehingga kepastian optimalitasnya datang dari urutan pemrosesan `frontier` dan pembaruan cost yang konsisten. Mahasiswa harus memahami bahwa `frontier` bukan daftar acak, melainkan struktur yang menentukan node mana yang diekspansi berikutnya.

### Inti yang Harus Ditekankan

- `frontier`, `cameFrom`, dan `costSoFar` adalah tiga komponen utama pseudocode Dijkstra.
- Algoritma memilih node dengan prioritas terendah, lalu memperbarui cost tetangga melalui proses **relaxation**.
- `cameFrom` memungkinkan rekonstruksi jalur termurah dari `goal` kembali ke `start`.
- Dalam game, `cost(current, neighbor)` dapat merepresentasikan jarak, waktu, atau biaya terrain.

### Transisi ke Slide Berikutnya

Setelah memahami cara kerja pseudocode Dijkstra, langkah berikutnya adalah menilai kapan algoritma ini efektif dan kapan ia kurang efisien dibandingkan pendekatan lain.

---

## Slide 033 - Kelebihan dan Kekurangan Dijkstra

### Narasi

Setelah melihat pseudocode Dijkstra, kita perlu memahami kapan algoritma ini benar-benar berguna. Dijkstra bukan sekadar algoritma pathfinding yang “menemukan jalan”; ia adalah algoritma pencarian **cost minimum** pada **weighted graph**. Artinya, setiap transisi antar node dapat memiliki biaya berbeda, misalnya bergerak di rumput, pasir, air, atau medan rusak.

**Kelebihan utama Dijkstra** adalah kemampuannya menangani **weighted graph** secara sistematis. Algoritma ini menghasilkan jalur dengan **cost minimum** dari `start` ke `goal`. Karena tidak menggunakan **heuristic**, Dijkstra tidak bergantung pada perkiraan jarak ke `goal`. Hal ini membuatnya lebih aman secara konseptual: tidak ada risiko heuristic yang buruk menyebabkan jalur suboptimal.

Dalam konteks game, kelebihan ini sangat relevan ketika **terrain memiliki cost berbeda**. NPC tidak hanya menghitung jumlah langkah, tetapi juga biaya bergerak melalui medan tertentu. Dijkstra cocok untuk situasi seperti:

- semua target penting dan perlu diketahui jarak termurah ke banyak node,
- tidak ada **heuristic** yang baik atau andal,
- kita ingin mencari jarak termurah ke banyak node sekaligus, bukan hanya satu `goal`.

Namun, Dijkstra juga memiliki **kekurangan** yang jelas. Karena hanya memperhatikan **cost dari start**, algoritma ini tidak memiliki pengarahan ke `goal`. Akibatnya, pencarian dapat menjelajah banyak node di sekitar `start` sebelum akhirnya mencapai `goal`. Pada peta game yang besar, jumlah node yang diekspansi bisa jauh lebih banyak dibandingkan algoritma yang memanfaatkan informasi arah tujuan.

Secara praktis, Dijkstra sering dibandingkan dengan `A*`. Dijkstra seperti pencarian yang menyebar berdasarkan biaya terakumulasi, sedangkan `A*` akan memperluas pencarian dengan bantuan perkiraan jarak ke `goal`. Karena alasan itu, Dijkstra dapat lebih lambat pada banyak kasus game, terutama ketika hanya ada satu `goal` dan peta cukup luas.

Jadi, mahasiswa perlu memahami bahwa Dijkstra bukan algoritma yang “salah” atau selalu buruk. Ia sangat kuat untuk **weighted graph**, **cost minimum**, dan pencarian ke banyak node. Namun, untuk pathfinding game yang biasanya mencari satu tujuan di peta besar, kita perlu algoritma yang lebih terarah.

### Inti yang Harus Ditekankan

- **Dijkstra** cocok untuk **weighted graph** dan menghasilkan jalur dengan **cost minimum**.
- Dijkstra tidak membutuhkan **heuristic**, sehingga aman dari bias perkiraan, tetapi bisa menjelajah banyak node.
- Dijkstra berguna ketika semua target penting, tidak ada heuristic yang baik, atau kita ingin jarak termurah ke banyak node.
- Untuk satu `goal` di peta game besar, `A*` biasanya lebih efisien karena pencarian lebih terarah.

### Transisi ke Slide Berikutnya

Kita sudah melihat kekuatan dan keterbatasan Dijkstra. Selanjutnya, kita akan masuk ke `A*`, yaitu algoritma yang menggabungkan ide Dijkstra dengan **heuristic** agar pencarian lebih fokus ke `goal`.

---

## Slide 034 - A*

### Narasi

Pada slide ini kita masuk ke algoritma **A\***, yang sering ditulis `A*`. Algoritma ini sangat populer dalam game karena mampu mencari jalur yang efisien untuk NPC, karakter, atau agen yang bergerak di lingkungan game.

Secara konsep, `A*` dapat dipahami sebagai gabungan dari dua ide:

```text
Dijkstra
+
Heuristic
```

Bagian `Dijkstra` membuat algoritma tetap memperhatikan **cost** yang sudah ditempuh dari titik awal. Jadi, jalur yang lebih mahal karena melewati terrain sulit, air, atau area berisiko akan tetap diperhitungkan.

Bagian `Heuristic` memberi arah. Heuristic memperkirakan seberapa dekat sebuah node dengan `goal`. Dengan adanya perkiraan ini, pencarian tidak lagi menyebar ke semua arah seperti pencarian tanpa arah, tetapi lebih condong menuju target.

Dalam `A*`, setiap node dinilai menggunakan fungsi:

```text
f(n) = g(n) + h(n)
```

`g(n)` mewakili cost dari `start` ke node `n`. `h(n)` mewakili estimasi cost dari node `n` ke `goal`. Penjumlahan keduanya menghasilkan **total estimasi cost** untuk jalur yang melewati node tersebut.

Intuisi pentingnya adalah `A*` tidak hanya memilih jalur yang murah dari awal, tetapi juga jalur yang secara perkiraan paling dekat ke tujuan. Inilah yang membuatnya lebih praktis untuk game dibanding pencarian yang hanya mengandalkan cost tanpa arah.

Sebelum lanjut, mahasiswa perlu memahami bahwa `A*` bekerja dengan cara memberi nilai pada node, lalu memilih node yang paling menjanjikan berdasarkan nilai `f(n)`. Detail komponen `g(n)`, `h(n)`, dan `f(n)` akan kita bahas lebih lanjut pada slide berikutnya.

### Inti yang Harus Ditekankan

- `A*` adalah algoritma pathfinding yang menggabungkan **Dijkstra** dan **Heuristic**.
- `Dijkstra` memperhitungkan cost dari `start`, sedangkan `Heuristic` memperkirakan jarak ke `goal`.
- Node dinilai dengan `f(n) = g(n) + h(n)`, yaitu total estimasi cost jalur.
- `A*` memilih node berdasarkan nilai `f(n)` agar pencarian lebih terarah dan efisien.

### Transisi ke Slide Berikutnya

Setelah memahami ide dasar `A*`, kita akan masuk ke komponen pembentuknya, yaitu `g(n)`, `h(n)`, dan `f(n)`, serta bagaimana nilai tersebut digunakan untuk memilih node berikutnya.

---

## Slide 035 - Komponen A*

### Narasi

Slide ini membahas tiga komponen utama yang membuat **A\*** dapat memilih jalur secara cerdas.

```text
g(n) = cost dari start ke node n
h(n) = estimasi cost dari node n ke goal
f(n) = total estimasi cost
```

**g(n)** adalah biaya nyata yang sudah ditempuh dari titik awal sampai node `n`. Dalam game, nilai ini bisa berupa jarak, waktu, energi, atau biaya traversal pada grid, waypoint, atau navigation mesh.

**h(n)** adalah estimasi biaya dari node `n` menuju `goal`. Komponen ini tidak harus tepat, tetapi berfungsi sebagai petunjuk arah. Semakin baik estimasinya, semakin fokus pencarian A* ke arah tujuan.

**f(n)** adalah gabungan dari keduanya:

```text
f(n) = g(n) + h(n)
```

Nilai `f(n)` menjadi prioritas node. A* memilih node dengan `f(n)` terkecil karena node tersebut dianggap paling menjanjikan: sudah murah dari start dan masih terlihat dekat ke goal.

Contoh sederhana:

```text
g(n) = 5
h(n) = 3
f(n) = 8
```

Artinya, dari start ke node `n` sudah memakan biaya 5, dan estimasi sisa menuju goal adalah 3. Total estimasi biaya jalur melalui node tersebut adalah 8.

Dalam implementasi game, komponen ini membantu NPC tidak hanya bergerak sembarangan, tetapi mengevaluasi kandidat langkah secara konsisten. Mahasiswa perlu memahami bahwa `g`, `h`, dan `f` bukan sekadar rumus, melainkan dasar pengambilan keputusan pathfinding.

### Inti yang Harus Ditekankan

- `g(n)` adalah biaya aktual dari start ke node.
- `h(n)` adalah estimasi biaya dari node ke goal.
- `f(n) = g(n) + h(n)` digunakan untuk memilih node prioritas.
- A* memilih node dengan `f(n)` terkecil.
- Nilai `h(n)` memberi arah pencarian tanpa harus mengetahui jalur pasti.

### Transisi ke Slide Berikutnya

Setelah memahami komponen `g`, `h`, dan `f`, langkah berikutnya adalah melihat mengapa kombinasi ini membuat A* lebih efisien dibanding pencarian yang tidak memiliki arah ke goal.

---

## Slide 036 - Mengapa A* Efisien?

### Narasi

Pada slide ini kita melihat alasan `A*` sering lebih efisien daripada pencarian jalur yang tidak diarahkan. **Dijkstra** mencari jalur dengan biaya terkecil, tetapi ia tidak memiliki informasi khusus tentang arah `goal`. Akibatnya, pencarian bisa menyebar ke banyak arah yang sebenarnya tidak perlu.

**BFS** juga cenderung menjelajah secara melebar, yaitu memeriksa node pada jarak yang sama secara merata. Cara ini sederhana dan aman, tetapi kurang hemat ketika peta game cukup besar atau NPC harus mencari jalur berulang kali.

`A*` berbeda karena menggunakan **heuristic** untuk mengarahkan pencarian. Dengan kata lain, `A*` tidak hanya bertanya, “node mana yang murah dari `start`?”, tetapi juga mempertimbangkan, “node mana yang tampaknya dekat ke `goal`?”.

Pada ilustrasi di slide, `start` berada di kiri atas dan `goal` berada di kanan bawah. `A*` cenderung memilih node yang berada di sekitar jalur menuju `goal`, bukan menjelajah seluruh peta secara merata.

Secara praktis, `A*` menyeimbangkan dua hal:

- biaya aktual dari `start` ke node, yang biasanya direpresentasikan oleh `g(n)`,
- estimasi jarak dari node ke `goal`, yang biasanya direpresentasikan oleh `h(n)`.

Kombinasi ini membuat `A*` lebih fokus pada area yang relevan. Dalam game, hal ini penting karena NPC bisa mencari jalur lebih cepat, penggunaan memori dan CPU lebih hemat, serta perilaku navigasi terasa lebih responsif.

Yang perlu dipahami sebelum lanjut adalah: efisiensi `A*` tidak datang dari pencarian yang buta, melainkan dari adanya arah estimasi menuju `goal`. Semakin baik estimasi arah itu, semakin sedikit node yang perlu diperiksa. Detail tentang bentuk estimasi tersebut akan dibahas pada slide berikutnya.

### Inti yang Harus Ditekankan

- `A*` efisien karena pencarian diarahkan ke `goal`, bukan hanya menjelajah semua kemungkinan.
- `g(n)` menjaga pencarian tetap berdasarkan biaya nyata, sedangkan `h(n)` memberi arah menuju `goal`.
- Dalam game, arah pencarian yang lebih fokus membuat NPC menavigasi lebih cepat dan lebih hemat sumber daya.

### Transisi ke Slide Berikutnya

Sekarang kita sudah tahu bahwa `A*` menjadi efisien karena menggunakan estimasi arah ke `goal`. Langkah berikutnya adalah memahami apa yang dimaksud dengan **heuristic** dan bagaimana estimasi jarak itu memengaruhi perilaku pencarian jalur.

---

## Slide 037 - Heuristic

### Narasi

Pada slide ini kita masuk ke komponen penting yang membuat **A\*** lebih terarah daripada pencarian buta. **Heuristic** adalah fungsi estimasi jarak dari node saat ini ke goal. Ia tidak menghitung jalur sebenarnya, tetapi memberi perkiraan seberapa dekat suatu node dengan tujuan.

Intuisi praktisnya: jika NPC tidak tahu jalur pasti, heuristic memberi "petunjuk arah". Misalnya, NPC di grid bisa menilai bahwa node yang lebih dekat ke goal lebih layak dieksplorasi. Dengan cara ini, pencarian tidak perlu menyebar ke semua arah secara merata.

Contoh heuristic yang umum digunakan dalam game adalah:

- **Manhattan Distance**, cocok untuk grid dengan gerakan empat arah.
- **Euclidean Distance**, cocok untuk ruang bebas atau grid dengan gerakan diagonal.
- **Diagonal Distance**, memperhitungkan biaya gerak diagonal yang berbeda dari gerak ortogonal.

Poin penting yang harus dipahami mahasiswa adalah heuristic tidak harus sempurna. Yang penting adalah heuristic memberikan estimasi yang masuk akal dan konsisten dengan aturan gerak di game. Jika heuristic terlalu lemah, A* akan memeriksa lebih banyak node. Jika heuristic tidak sesuai aturan gerak, arah pencarian bisa menjadi tidak efektif.

Dalam konteks game, heuristic membantu NPC mencari jalur dengan lebih cepat karena mengurangi jumlah node yang perlu diperiksa. Ini sangat berguna untuk enemy, companion, atau unit yang harus menavigasi peta besar secara real-time.

Sebelum lanjut, pastikan mahasiswa memahami bahwa heuristic adalah "penilai jarak ke goal", bukan fungsi biaya jalur dari start. Ia bekerja bersama biaya jalur yang sudah ditempuh untuk menentukan prioritas node dalam A*.

### Inti yang Harus Ditekankan

- **Heuristic** adalah estimasi jarak dari node saat ini ke goal.
- Heuristic membuat **A\*** lebih efisien dengan mengarahkan pencarian ke area yang lebih menjanjikan.
- Heuristic tidak harus sempurna, tetapi harus sesuai dengan aturan gerak dan lingkungan game.
- Contoh umum: `Manhattan Distance`, `Euclidean Distance`, dan `Diagonal Distance`.

### Transisi ke Slide Berikutnya

Selanjutnya kita akan melihat salah satu heuristic paling sederhana, yaitu **Manhattan Distance**, dan bagaimana ia cocok untuk grid dengan gerakan empat arah.

---

## Slide 038 - Manhattan Distance

### Narasi

Pada slide ini kita fokus pada salah satu **heuristic** yang paling sering digunakan dalam pathfinding berbasis grid, yaitu **Manhattan Distance**. Heuristic ini menjawab pertanyaan sederhana: berapa langkah minimum yang mungkin dibutuhkan dari node saat ini menuju goal, jika agent hanya boleh bergerak ke empat arah.

Intuisi praktisnya bisa dibayangkan seperti jalan di kota yang hanya memiliki arah horizontal dan vertikal. Jika tidak boleh memotong diagonal, maka jarak yang wajar dihitung sebagai jumlah langkah ke samping ditambah langkah ke atas atau ke bawah. Dalam game, pola ini sangat cocok untuk karakter yang bergerak tile ke tile pada grid 2D.

Rumusnya adalah:

```text
h = |x1 - x2| + |y1 - y2|
```

Di sini, `x1` dan `y1` adalah posisi node yang sedang dievaluasi, sedangkan `x2` dan `y2` adalah posisi goal. Nilai mutlak digunakan agar jarak selalu positif, terlepas dari arah pergeseran koordinat.

Contoh perhitungannya:

```text
Node A = (2, 3)
Goal   = (7, 5)

h = |2 - 7| + |3 - 5|
h = 5 + 2
h = 7
```

Artinya, dari koordinat `x = 2` ke `x = 7` dibutuhkan selisih 5 langkah horizontal. Dari `y = 3` ke `y = 5` dibutuhkan selisih 2 langkah vertikal. Total estimasinya adalah 7 langkah.

Perlu dipahami bahwa nilai `h` ini bukan jalur aktual. Ia hanya estimasi jarak ke goal. Arah sebenarnya, keberadaan obstacle, dan biaya langkah tetap akan dihitung oleh algoritma pencarian seperti A*.

Manhattan Distance paling cocok digunakan jika movement agent hanya:

- atas,
- bawah,
- kiri,
- kanan.

Jika movement sudah memungkinkan diagonal atau movement bebas, heuristic ini tidak lagi menjadi pilihan utama. Untuk kasus seperti itu, kita akan membahas bentuk jarak lain pada slide berikutnya.

### Inti yang Harus Ditekankan

- **Manhattan Distance** menghitung jarak sebagai jumlah langkah horizontal dan vertikal, bukan jarak garis lurus.
- Rumus `h = |x1 - x2| + |y1 - y2|` sangat cocok untuk **grid 4 arah**.
- Nilai `h` adalah **heuristic**, bukan jalur final; obstacle dan biaya aktual tetap diproses oleh algoritma pathfinding.
- Jika movement memungkinkan diagonal atau movement bebas, Manhattan Distance tidak selalu tepat.

### Transisi ke Slide Berikutnya

Setelah memahami bagaimana Manhattan Distance bekerja pada grid empat arah, kita lanjut ke **Euclidean Distance**, yaitu jarak garis lurus yang lebih cocok untuk movement bebas, waypoint graph, atau lingkungan yang tidak terbatas pada grid 4 arah.

---

## Slide 039 - Euclidean Distance

### Narasi

Slide ini membahas **Euclidean Distance**, yaitu cara menghitung jarak antara dua titik berdasarkan **garis lurus**. Intuisinya sederhana: jika sebuah agent berada di suatu posisi dan goal berada di posisi lain, Euclidean Distance menjawab pertanyaan, “Berapa jarak terpendek jika agent boleh bergerak langsung ke goal tanpa mengikuti grid?”

Rumusnya adalah:

```text
h = sqrt((x1 - x2)^2 + (y1 - y2)^2)
```

Di sini, `x1` dan `y1` adalah posisi node saat ini, sedangkan `x2` dan `y2` adalah posisi goal. Selisih koordinat di kuadratkan agar nilai negatif tidak memengaruhi hasil, kemudian akar kuadrat digunakan untuk mendapatkan panjang garis lurus.

Dalam Unity 3D, perhitungan ini bisa dilakukan dengan lebih praktis:

```csharp
float h =
    Vector3.Distance(nodePosition, goalPosition);
```

Fungsi `Vector3.Distance` menghitung jarak Euclidean antara dua posisi `Vector3`. Inputnya adalah `nodePosition` dan `goalPosition`, lalu outputnya berupa nilai `float` yang bisa digunakan sebagai heuristic `h` dalam algoritma pathfinding seperti A*.

Euclidean Distance cocok digunakan ketika agent tidak dibatasi hanya bergerak ke atas, bawah, kiri, dan kanan. Misalnya, agent dapat bergerak bebas di ruang 3D, mengikuti waypoint graph, atau bergerak melintasi area yang tidak berbentuk grid 4 arah. Dalam waypoint graph, jarak garis lurus dari node ke goal biasanya menjadi **lower bound** dari panjang path aktual, karena path yang melewati beberapa edge tidak mungkin lebih pendek dari garis lurus langsung ke goal.

Perbedaan utamanya dengan Manhattan Distance adalah arah pergerakan yang dianggap. Manhattan Distance mengikuti sumbu grid, sedangkan Euclidean Distance mengabaikan batasan sumbu dan menghitung jarak langsung. Karena itu, untuk grid 4 arah, Euclidean Distance masih bisa digunakan, tetapi nilainya cenderung lebih kecil dan kurang mencerminkan biaya gerak yang sebenarnya.

Hal penting yang harus dipahami mahasiswa adalah **pilihan heuristic harus sesuai dengan model pergerakan agent**. Jika agent bergerak bebas atau berada di ruang 3D, Euclidean Distance adalah pilihan yang natural. Jika agent terbatas pada grid 4 arah, Manhattan Distance biasanya lebih sesuai. Jika agent juga boleh bergerak diagonal, kita perlu mempertimbangkan jarak diagonal.

### Inti yang Harus Ditekankan

- **Euclidean Distance** adalah jarak garis lurus antara posisi node dan goal.
- Rumusnya menggunakan akar kuadrat dari jumlah kuadrat selisih koordinat.
- Dalam Unity, dapat dihitung dengan `Vector3.Distance(nodePosition, goalPosition)`.
- Cocok untuk movement bebas, waypoint graph, dan game 3D.
- Heuristic harus dipilih sesuai model pergerakan agent.

### Transisi ke Slide Berikutnya

Setelah memahami jarak garis lurus, kita akan melihat kasus di mana agent dapat bergerak diagonal pada grid 8 arah. Di situ, Euclidean Distance belum cukup menggambarkan biaya gerak diagonal secara tepat, sehingga kita perlu membahas **Diagonal Distance**.

---

## Slide 040 - Diagonal Distance

### Narasi

Pada slide ini kita masuk ke **Diagonal Distance**, yaitu heuristik yang lebih sesuai untuk grid dua dimensi di mana agent dapat bergerak ke **8 arah**.

Pada grid 4 arah, Manhattan Distance cukup karena agent hanya bisa bergerak horizontal atau vertikal. Namun, ketika agent diperbolehkan bergerak diagonal, jarak sebenarnya bisa lebih pendek daripada jumlah langkah horizontal dan vertikal.

Intuisinya sederhana: jika agent bisa memotong diagonal, maka ia tidak perlu menyelesaikan seluruh selisih `dx` dan `dy` secara terpisah. Sebagian gerakan horizontal dan vertikal dapat dilakukan bersamaan.

Rumus dasar yang sering digunakan adalah:

```text
dx = |x1 - x2|
dy = |y1 - y2|

h = max(dx, dy)
```

Rumus ini cocok jika biaya langkah diagonal dianggap sama dengan biaya langkah lurus, misalnya `D = 1` dan `D2 = 1`. Dalam kondisi itu, satu langkah diagonal dapat menggantikan satu langkah horizontal dan satu langkah vertikal sekaligus.

Jika biaya diagonal berbeda, misalnya diagonal lebih mahal karena jarak geometrisnya lebih panjang, kita dapat menggunakan versi cost diagonal:

```text
h = D * (dx + dy) + (D2 - 2D) * min(dx, dy)
```

Dengan:
- `D` = cost lurus,
- `D2` = cost diagonal.

Misalnya, jika `D = 1` dan `D2 = sqrt(2)`, maka heuristik ini akan menghasilkan estimasi yang lebih dekat dengan jarak geometris sebenarnya.

Dalam konteks pathfinding, heuristik ini biasanya digunakan pada fungsi `h(n)` untuk memperkirakan jarak dari node `n` ke goal. Semakin tepat estimasinya, semakin efisien pencarian karena agent tidak perlu mengeksplorasi banyak node yang jelas-jelas jauh dari tujuan.

Untuk implementasi sederhana di grid, kita dapat menghitung `dx` dan `dy` terlebih dahulu, lalu memilih nilai maksimum atau menghitung dengan cost diagonal.

```csharp
int dx = Mathf.Abs(x1 - x2);
int dy = Mathf.Abs(y1 - y2);

float h = Mathf.Max(dx, dy);
```

Jika menggunakan cost diagonal:

```csharp
float D = 1f;
float D2 = Mathf.Sqrt(2f);

float h = D * (dx + dy) + (D2 - 2f * D) * Mathf.Min(dx, dy);
```

Bagian penting yang perlu dipahami adalah hubungan antara `dx`, `dy`, dan `min(dx, dy)`. Nilai `min(dx, dy)` menunjukkan berapa banyak langkah diagonal yang dapat digunakan secara bersamaan sebelum salah satu sumbu selesai.

Dengan kata lain, jika `dx` dan `dy` sama besar, seluruh gerakan dapat dilakukan secara diagonal. Jika salah satu lebih besar, sisanya harus diselesaikan dengan gerakan lurus.

Hal ini penting karena heuristik yang tidak sesuai dengan aturan movement dapat membuat pencarian menjadi kurang efisien. Jika estimasi terlalu besar, pencarian bisa kehilangan jalur optimal. Jika estimasi terlalu kecil, pencarian tetap benar tetapi mungkin lebih lambat.

Sebelum lanjut, pastikan mahasiswa memahami bahwa **Diagonal Distance** bukan pengganti universal. Heuristik harus dipilih berdasarkan jenis movement dan biaya langkah yang digunakan di game.

### Inti yang Harus Ditekankan

- **Diagonal Distance** cocok untuk grid **8 arah** karena memperhitungkan gerakan diagonal.
- Rumus sederhana `h = max(dx, dy)` berlaku jika cost diagonal sama dengan cost lurus.
- Rumus `h = D * (dx + dy) + (D2 - 2D) * min(dx, dy)` digunakan jika cost diagonal berbeda.
- `min(dx, dy)` mewakili jumlah langkah diagonal yang dapat dilakukan bersamaan.
- Heuristik harus sesuai dengan aturan movement agar pathfinding efisien dan konsisten.

### Transisi ke Slide Berikutnya

Selanjutnya, kita akan membahas kriteria umum **heuristic yang baik**, termasuk bagaimana memilih Manhattan, Diagonal, atau Euclidean sesuai jenis movement.

---

## Slide 041 - Heuristic yang Baik

### Narasi

Pada pathfinding, **heuristic** adalah perkiraan jarak dari posisi agent ke tujuan. Ia tidak menghitung jalur lengkap, tetapi memberi sinyal seberapa dekat suatu node dengan goal. Dalam `A*`, sinyal ini membantu pencarian memilih node mana yang lebih layak dieksplorasi.

Intuisi praktisnya: heuristic yang baik membuat pencarian NPC lebih fokus ke arah tujuan, bukan menyebar ke semua arah. Jika perkiraan terlalu lemah, pencarian menjadi lebih banyak menjelajah. Jika terlalu kuat, pencarian bisa cepat tetapi berisiko memilih jalur yang tidak optimal.

Heuristic yang baik sebaiknya:

- cepat dihitung,
- mendekati jarak sebenarnya,
- tidak terlalu melebih-lebihkan jika ingin jalur optimal,
- sesuai jenis movement.

Kecepatan penting karena heuristic dipanggil berulang kali untuk banyak node. Pendekatan jarak sebenarnya membantu pencarian tetap efisien. Sifat tidak overestimate menjaga `A*` tetap optimal. Kesesuaian movement memastikan estimasi jarak sesuai aturan gerak agent.

Pemilihan heuristic mengikuti bentuk lingkungan dan aturan gerak.

| Movement | Heuristic |
|---|---|
| Grid 4 arah | `Manhattan` |
| Grid 8 arah | `Diagonal` |
| Waypoint / 3D | `Euclidean` |

Untuk grid 4 arah, agent hanya bergerak horizontal dan vertikal, sehingga `Manhattan` cocok karena menghitung langkah tanpa diagonal. Untuk grid 8 arah, agent bisa bergerak diagonal, sehingga `Diagonal` lebih sesuai. Untuk waypoint atau ruang 3D, agent bisa bergerak bebas antar titik, sehingga `Euclidean` menjadi pilihan yang natural.

Jika heuristic buruk, `A*` dapat menjadi lambat atau menghasilkan jalur yang kurang optimal. Heuristic yang terlalu kecil membuat pencarian kurang terarah. Heuristic yang terlalu besar dapat membuat pencarian mengejar node yang tampak dekat tetapi sebenarnya mahal. Karena itu, heuristic bukan sekadar rumus jarak, melainkan bagian dari kualitas perilaku navigasi NPC.

Sebelum lanjut, yang harus dipahami adalah hubungan antara aturan movement dan pilihan heuristic. Jika agent bergerak di grid, waypoint, atau ruang 3D, estimasi jarak harus konsisten dengan biaya gerak yang sebenarnya.

### Inti yang Harus Ditekankan

- **Heuristic** adalah estimasi jarak ke tujuan yang digunakan `A*` untuk memprioritaskan pencarian.
- Heuristic yang baik harus cepat, mendekati jarak sebenarnya, tidak overestimate untuk optimalitas, dan sesuai movement.
- Pemilihan heuristic mengikuti aturan gerak: `Manhattan` untuk grid 4 arah, `Diagonal` untuk grid 8 arah, `Euclidean` untuk waypoint/3D.
- Heuristic buruk dapat membuat `A*` lambat atau menghasilkan jalur kurang optimal.

### Transisi ke Slide Berikutnya

Setelah memahami sifat heuristic yang baik, langkah berikutnya adalah melihat pseudocode `A*` untuk memahami bagaimana pencarian dijalankan dari `start` ke `goal`.

---

## Slide 042 - Pseudocode A*

### Narasi

Pada slide ini kita melihat bentuk inti dari algoritma **A\*** dalam bentuk pseudocode. Tujuannya adalah menunjukkan bagaimana algoritma ini memilih node yang paling menjanjikan untuk dieksplorasi, bukan hanya node yang paling murah dari titik awal.

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

Tiga struktur data utama yang perlu dipahami adalah `frontier`, `cameFrom`, dan `costSoFar`.

- `frontier` adalah **priority queue** yang menyimpan node-node yang masih akan diperiksa.
- `cameFrom` menyimpan node induk atau parent dari setiap node, sehingga jalur bisa dibangun kembali nanti.
- `costSoFar` menyimpan biaya terkecil yang diketahui dari `start` ke setiap node.

Urutan eksekusinya dimulai dari inisialisasi. Node `start` dimasukkan ke `frontier` dengan prioritas `0`, `cameFrom[start]` diisi `null`, dan `costSoFar[start]` diisi `0`. Artinya, titik awal belum memiliki biaya perjalanan dan tidak memiliki node induk.

Selama `frontier` belum kosong, algoritma mengambil node dengan prioritas terendah melalui `frontier.getLowestPriority()`. Node ini menjadi `current`. Jika `current` sama dengan `goal`, proses dihentikan karena tujuan sudah ditemukan.

Setelah itu, algoritma memeriksa setiap `neighbor` dari `current`. Untuk setiap tetangga, dihitung `newCost` sebagai biaya dari `start` ke `current` ditambah biaya bergerak dari `current` ke `neighbor`.

Jika `neighbor` belum pernah memiliki biaya, atau `newCost` lebih kecil dari biaya yang sudah tersimpan, maka data diperbarui. `costSoFar[neighbor]` diisi `newCost`, lalu prioritas dihitung dengan rumus:

```text
priority = newCost + heuristic(neighbor, goal)
```

Rumus inilah yang membedakan **A\*** dari **Dijkstra**. Pada Dijkstra, prioritas biasanya hanya berdasarkan biaya yang sudah ditempuh. Pada A\*, prioritas juga memperhitungkan perkiraan jarak menuju `goal` melalui `heuristic`. Dengan cara ini, pencarian lebih diarahkan ke tujuan, bukan menyebar secara merata ke semua arah.

Dalam konteks game, pseudocode ini menjadi dasar perilaku NPC yang mencari jalur. Misalnya, NPC di grid, waypoint graph, atau lingkungan 3D dapat menggunakan pola yang sama: memilih node berikutnya berdasarkan biaya yang sudah ditempuh dan estimasi jarak ke target. Hasil yang diharapkan adalah jalur yang efisien dan lebih cepat ditemukan dibanding pencarian tanpa heuristic.

### Inti yang Harus Ditekankan

- `frontier` menyimpan node yang masih akan diperiksa, dan node dengan prioritas terendah dipilih lebih dulu.
- `costSoFar` menyimpan biaya terbaik dari `start` ke node, sedangkan `cameFrom` menyimpan parent untuk membangun jalur.
- Prioritas A\* dihitung dengan `newCost + heuristic(neighbor, goal)`, sehingga pencarian lebih terarah ke `goal`.
- Algoritma berhenti ketika `goal` diambil dari `frontier`, bukan ketika `goal` pertama kali ditemukan sebagai tetangga.

### Transisi ke Slide Berikutnya

Setelah `goal` ditemukan, langkah berikutnya adalah membangun jalur dari data `cameFrom` yang sudah tersimpan selama proses pencarian.

---

## Slide 043 - Reconstruct Path

### Narasi

Setelah `goal` ditemukan, algoritma belum selesai. Yang masih harus dilakukan adalah membangun **path** yang bisa diikuti NPC. Informasi penting untuk langkah ini sudah tersimpan selama pencarian, yaitu struktur `cameFrom`.

`cameFrom` menyimpan **parent** dari setiap node. Artinya, setiap kali sebuah node dipilih sebagai jalur terbaik, algoritma mencatat dari node mana node tersebut berasal. Data ini menjadi jejak balik dari `goal` menuju `start`.

Contoh sederhana:

```text
cameFrom[D] = C
cameFrom[C] = B
cameFrom[B] = A
cameFrom[A] = null
```

Pada contoh ini, `D` berasal dari `C`, `C` berasal dari `B`, `B` berasal dari `A`, dan `A` adalah titik awal karena nilainya `null`.

Proses rekonstruksi dapat diringkas sebagai berikut:

1. Mulai dari `goal`.
2. Ambil nilai `cameFrom[goal]`.
3. Ulangi sampai mencapai `null`.
4. Kumpulkan node yang ditemukan.
5. Balik urutan node menjadi path dari `start` ke `goal`.

Hasil mundur dari contoh di atas adalah:

```text
D → C → B → A
```

Urutan ini masih berlawanan dengan arah pergerakan. Karena NPC bergerak dari titik awal ke tujuan, path harus dibalik:

```text
A → B → C → D
```

Path inilah yang akan digunakan oleh sistem navigasi. Dalam game, setiap node pada path dapat diubah menjadi posisi dunia atau waypoint, lalu diberikan ke sistem pergerakan NPC agar rute dapat diikuti.

Poin penting yang harus dipahami mahasiswa adalah: pencarian hanya menemukan `goal` dan biaya terbaik, tetapi path yang siap dijalankan baru muncul setelah `cameFrom` direkonstruksi dan dibalik. Tanpa jejak parent, kita hanya tahu bahwa tujuan dapat dicapai, tetapi tidak tahu urutan langkah yang harus diikuti.

### Inti yang Harus Ditekankan

- `cameFrom` menyimpan **parent node** untuk setiap node yang terpilih selama pencarian.
- Rekonstruksi path dimulai dari `goal` dan mundur mengikuti `cameFrom` sampai `start`.
- Hasil mundur `D → C → B → A` harus dibalik menjadi `A → B → C → D` agar sesuai arah pergerakan NPC.
- Path akhir adalah urutan node atau waypoint yang dapat digunakan sistem navigasi game.

### Transisi ke Slide Berikutnya

Setelah memahami bagaimana path dibangun dari jejak `cameFrom`, langkah berikutnya adalah melihat struktur data yang membuat pencarian A* tetap efisien, yaitu `open set` dan `closed set`.

---

## Slide 044 - Open Set dan Closed Set

### Narasi

Pada tahap pencarian path, algoritma tidak memeriksa seluruh grid sekaligus. A* menjaga dua kelompok node agar proses pencarian tetap terkendali.

**Open Set** berisi node yang masih mungkin menjadi bagian dari path terbaik. Istilah lain yang sering muncul adalah `frontier` atau `priority queue`.

```text
Open Set = kandidat
```

Node di sini belum diputuskan. Ia hanya menunggu diperiksa, biasanya berdasarkan estimasi biaya menuju goal. Dalam konteks NPC, `openSet` adalah daftar titik yang masih layak dipertimbangkan sebelum NPC memilih langkah berikutnya.

**Closed Set** berisi node yang sudah selesai diperiksa. Istilah lain yang sering dipakai adalah `visited` atau `explored`.

```text
Closed Set = sudah selesai diperiksa
```

Artinya, node tersebut sudah dievaluasi dan tidak perlu diperiksa ulang pada iterasi berikutnya. Dengan cara ini, algoritma tidak terjebak mengulang node yang sama secara terus-menerus.

```text
Open Set  = kandidat
Closed Set = sudah selesai diperiksa
```

Secara praktis, alurnya dapat dipahami sebagai berikut:

1. Node awal dimasukkan ke `openSet`.
2. Algoritma memilih satu node terbaik dari `openSet`.
3. Node yang dipilih dipindahkan ke `closedSet`.
4. Tetangga node tersebut diperiksa dan ditambahkan ke `openSet` jika masih relevan.
5. Proses berulang sampai goal ditemukan atau `openSet` kosong.

Struktur ini penting karena pathfinding game harus cepat dan hemat memori. Tanpa `closedSet`, NPC bisa terus-menerus mengevaluasi node yang sama. Tanpa `openSet`, algoritma tidak punya cara untuk memilih kandidat berikutnya secara efisien.

Sebelum lanjut, mahasiswa perlu memahami bahwa `openSet` dan `closedSet` bukan bagian dari path akhir. Keduanya adalah struktur bantu pencarian. Path akhir tetap dibangun dari data parent seperti `cameFrom`, bukan dari daftar node yang pernah dibuka atau ditutup.

### Inti yang Harus Ditekankan

- **Open Set** adalah kumpulan node kandidat yang masih perlu diperiksa.
- **Closed Set** adalah kumpulan node yang sudah diproses dan tidak perlu diperiksa ulang.
- `openSet` sering diimplementasikan sebagai `priority queue` agar node dengan prioritas terbaik dapat diambil lebih cepat.
- `closedSet` mencegah pencarian berulang pada node yang sama.
- Kedua struktur ini membantu NPC mencari path secara efisien tanpa memeriksa seluruh grid secara buta.

### Transisi ke Slide Berikutnya

Setelah memahami bagaimana node dikategorikan sebagai kandidat dan node yang sudah diproses, kita dapat membandingkan algoritma pencarian yang berbeda, yaitu BFS, Dijkstra, dan A*, serta kapan masing-masing cocok digunakan.

---

## Slide 045 - Perbandingan BFS, Dijkstra, dan A*

### Narasi

Pada slide ini kita membandingkan **BFS**, **Dijkstra**, dan **A\*** sebagai tiga pendekatan pathfinding yang paling sering digunakan dalam game. Fokus utamanya adalah memahami **kapan algoritma tertentu dipilih**, bukan sekadar menghafal definisi. Dalam pengembangan game, pilihan ini memengaruhi seberapa efisien NPC bergerak dari posisi awal ke tujuan.

Tiga algoritma ini dapat dibedakan secara konseptual:

- **BFS**: Algoritma dasar yang bekerja baik pada grid sederhana dengan biaya langkah yang sama. BFS tidak menggunakan **cost berbeda** dan tidak menggunakan **heuristic**, sehingga pencariannya cenderung menyebar merata ke sekitar node awal.
- **Dijkstra**: Algoritma yang memperhitungkan **cost** pada setiap edge. Dijkstra mencari jalur termurah berdasarkan biaya terakumulasi dari start, sehingga cocok untuk **weighted graph** seperti medan dengan jalan cepat, jalan lambat, atau area dengan biaya berbeda.
- **A\***: Algoritma yang menggabungkan **cost** dan **heuristic**. Heuristic memberikan perkiraan arah atau jarak ke tujuan, sehingga pencarian menjadi lebih fokus. Karena alasan ini, **A\*** biasanya lebih efisien untuk pathfinding game yang membutuhkan pergerakan NPC menuju goal.

Ringkasan konseptualnya dapat dilihat pada potongan berikut:

```text
BFS      = sederhana
Dijkstra = memperhatikan cost
A*       = cost + arah tujuan
```

Artinya, perbedaan utama terletak pada dua hal: apakah algoritma memperhitungkan **biaya**, dan apakah algoritma memiliki **petunjuk arah tujuan**. Dalam implementasinya, struktur seperti `open set` dan `closed set` membantu algoritma menjaga proses pencarian tetap rapi dan menghindari pemeriksaan ulang node yang tidak perlu.

Sebelum lanjut, mahasiswa perlu memahami bahwa pemilihan algoritma bukan soal mana yang "paling pintar", tetapi soal **kesesuaian dengan lingkungan game**. Jika grid seragam dan sederhana, **BFS** sudah cukup. Jika ada biaya berbeda antar langkah, **Dijkstra** lebih tepat. Jika dibutuhkan pencarian yang efisien menuju tujuan, **A\*** menjadi pilihan yang paling umum.

### Inti yang Harus Ditekankan

- **BFS** cocok untuk grid sederhana dengan cost seragam, tanpa heuristic.
- **Dijkstra** memperhitungkan cost, sehingga cocok untuk weighted graph.
- **A\*** menggabungkan cost dan heuristic, sehingga biasanya lebih efisien untuk pathfinding game.
- Pilihan algoritma ditentukan oleh struktur graph, keberadaan cost, dan kebutuhan performa NPC.

### Transisi ke Slide Berikutnya

Setelah memahami perbedaan konsepnya, kita akan melihat bagaimana cara berpikir masing-masing algoritma bekerja secara lebih visual.

---

## Slide 046 - Ilustrasi Cara Berpikir Algoritma

### Narasi

Slide ini membantu mahasiswa membayangkan **cara berpikir** dari tiga algoritma pathfinding, bukan sekadar mengingat tabel perbandingan.

Untuk **BFS**, bayangkan pencarian seperti gelombang yang menyebar ke semua arah yang mungkin.

```text
Cari melebar ke semua arah.
```

Artinya, algoritma ini memeriksa tetangga yang dekat terlebih dahulu tanpa memprioritaskan arah tujuan. Jika semua langkah memiliki biaya sama, cara ini sangat intuitif karena setiap langkah dianggap setara.

Untuk **Dijkstra**, cara berpikirnya berubah menjadi pencarian berdasarkan biaya.

```text
Cari berdasarkan biaya termurah dari start.
```

Algoritma ini tidak hanya mencari langkah terdekat, tetapi memilih jalur yang memiliki **biaya terkecil** dari titik awal. Jadi, jika ada jalan yang lebih panjang tetapi lebih murah, Dijkstra akan mempertimbangkannya. Namun, karena tidak menggunakan perkiraan arah tujuan, pencarian bisa lebih menyebar.

Untuk **A\***, cara berpikirnya menggabungkan dua hal.

```text
Cari berdasarkan biaya dari start
+
perkiraan jarak ke goal.
```

Secara sederhana, A* menilai setiap kandidat jalur dengan dua informasi:

- **biaya nyata** dari `start` sampai simpul saat ini,
- **perkiraan jarak** dari simpul tersebut ke `goal`.

```text
prioritas = biaya dari start + perkiraan jarak ke goal
```

Karena ada komponen arah tujuan, A* cenderung lebih fokus dan lebih cepat menemukan jalur yang masuk akal dalam lingkungan game. Inilah alasan A* sering menjadi pilihan utama untuk pathfinding NPC, terutama pada grid, tilemap, atau graph sederhana.

Intuisi praktisnya:

- **BFS** seperti mencari ke mana saja dengan langkah sama.
- **Dijkstra** seperti memilih rute termurah tanpa tahu persis arah tujuan.
- **A\*** seperti memilih rute termurah sambil tetap diarahkan menuju tujuan.

Sebelum lanjut, mahasiswa perlu memahami bahwa perbedaan utama bukan hanya pada nama algoritma, tetapi pada **apa yang digunakan untuk memilih simpul berikutnya**. BFS memilih berdasarkan urutan lapisan, Dijkstra memilih berdasarkan biaya terkecil, dan A* memilih berdasarkan biaya plus perkiraan arah.

### Inti yang Harus Ditekankan

- **BFS** berpikir melebar ke semua arah dan cocok ketika semua langkah dianggap setara.
- **Dijkstra** berpikir berdasarkan **biaya termurah** dari `start`, sehingga memperhatikan berat jalur.
- **A\*** berpikir berdasarkan **biaya dari start** ditambah **perkiraan jarak ke goal**, sehingga lebih fokus menuju tujuan.
- Dalam konteks game, A* sering lebih praktis karena membantu NPC bergerak menuju target dengan cara yang lebih efisien.

### Transisi ke Slide Berikutnya

Setelah memahami cara berpikir masing-masing algoritma, langkah berikutnya adalah menentukan kapan BFS benar-benar layak digunakan, terutama pada map sederhana dengan biaya seragam.

---

## Slide 047 - Kapan Menggunakan BFS?

### Narasi

Pada slide ini, kita fokus pada **kapan `BFS` sebaiknya digunakan**. Setelah melihat cara berpikir `BFS` yang melebar ke semua arah, langkah berikutnya adalah mengenali kondisi masalah yang cocok dengan cara kerja tersebut.

`BFS` paling tepat ketika **setiap langkah memiliki biaya yang sama**. Dalam istilah graph, ini berarti kita bekerja pada **graph tidak berbobot** atau **unweighted graph**. Misalnya, agent bergerak di grid dan setiap perpindahan antar tile dianggap sama: satu langkah ke atas, bawah, kiri, atau kanan. Dalam situasi seperti itu, `BFS` dapat menemukan jalur dengan **jumlah langkah paling sedikit**.

Kondisi utama penggunaan `BFS` adalah:

- **map tidak berbobot**, artinya tidak ada perbedaan biaya antar langkah;
- **semua langkah memiliki `cost` sama**, misalnya satu tile selalu satu unit movement;
- **ukuran map kecil**, karena `BFS` dapat mengeksplorasi banyak node sebelum menemukan tujuan;
- **implementasi sederhana**, karena `BFS` mudah dipahami dan mudah diuji.

Contoh penerapannya dalam game cukup praktis:

- **puzzle grid sederhana**, seperti mencari keluar dari labirin;
- **mencari area terdekat** dari posisi agent;
- **game berbasis tile** dengan cost seragam, misalnya papan catur atau grid sederhana.

Perlu dipahami bahwa keunggulan `BFS` bukan hanya pada hasil, tetapi juga pada **intuisi traversal graph**. Algoritma ini membantu mahasiswa memahami konsep `node`, tetangga, `visited`, `queue`, dan cara pencarian menyebar per lapisan. Pemahaman ini menjadi dasar sebelum masuk ke algoritma pathfinding yang mempertimbangkan biaya yang berbeda.

### Inti yang Harus Ditekankan

- `BFS` cocok untuk **map tidak berbobot** dan **cost seragam**.
- `BFS` menghasilkan jalur dengan **jumlah langkah minimum**, bukan biaya minimum jika biaya berbeda.
- `BFS` paling aman digunakan pada **map kecil** karena eksplorasi bisa melebar ke banyak arah.
- `BFS` sangat berguna untuk memahami **dasar traversal graph** sebelum mempelajari algoritma pathfinding yang lebih kompleks.

### Transisi ke Slide Berikutnya

Jika pada slide ini kita memilih `BFS` untuk langkah yang biayanya sama, maka pada slide berikutnya kita akan melihat situasi di mana biaya tidak lagi sama, yaitu kapan `Dijkstra` menjadi pilihan yang lebih tepat.

---

## Slide 048 - Kapan Menggunakan Dijkstra?

### Narasi

Pada slide ini kita memfokuskan pada **kapan `Dijkstra` lebih tepat digunakan** dalam sistem navigasi game. `Dijkstra` bukan hanya alat untuk mencari satu jalur ke satu tujuan. Ia menghitung **jarak terpendek dari satu titik awal ke banyak titik lain** berdasarkan **biaya lintasan** yang dapat berbeda. Dalam game, biaya ini bisa berupa kecepatan NPC di rumput, pasir, air, jalan, atau medan rusak.

Intuisi praktisnya adalah: jika sistem game tidak hanya perlu tahu “apakah bisa sampai”, tetapi juga “berapa biaya menuju setiap posisi”, maka `Dijkstra` sangat berguna. Hasilnya bukan hanya satu jalur, melainkan semacam **peta biaya** yang bisa dipakai untuk keputusan NPC, pemilihan posisi, atau penentuan area yang dapat dimasuki.

Gunakan **`Dijkstra`** ketika:

- **terrain memiliki `cost` berbeda**, misalnya jalan cepat, hutan lambat, atau air sangat mahal.
- **tidak ada `goal` tunggal**, karena kita ingin tahu jarak ke banyak `node`.
- kita ingin menghitung **jarak ke banyak titik** dari satu titik awal.
- `heuristic` sulit dibuat atau tidak tersedia.

Secara konsep, `Dijkstra` mengeksplorasi `node` berdasarkan **biaya kumulatif** yang sudah ditempuh, sering disebut `g(n)`. Ia tidak mengandalkan tebakan arah ke tujuan. Karena itu, ia aman dan konsisten selama `cost` pada setiap `edge` tidak negatif. Inilah yang membedakannya dari pencarian sederhana yang hanya menghitung jumlah langkah.

Contoh penerapannya dalam game cukup jelas:

- **strategy game dengan terrain cost**: unit memilih rute yang lebih murah, misalnya melewati jalan daripada menembus hutan.
- **mencari semua posisi yang bisa dicapai**: sistem menghitung `node` mana saja yang terjangkau dari posisi awal.
- **menghitung area movement pada turn-based game**: semua `node` dengan `g(n)` di bawah batas movement budget ditandai sebagai area yang bisa dimasuki.

Hal penting yang harus dipahami mahasiswa adalah: `Dijkstra` cocok ketika **biaya lintasan** dan **banyaknya titik tujuan** menjadi faktor utama. Jika semua langkah memiliki biaya sama dan hanya ingin tahu langkah terdekat, `BFS` sudah cukup. Namun begitu terrain berbobot atau sistem membutuhkan jarak ke banyak posisi, `Dijkstra` menjadi pilihan yang lebih tepat.

### Inti yang Harus Ditekankan

- **`Dijkstra` digunakan untuk graph berbobot**, di mana setiap `edge` atau `terrain` dapat memiliki `cost` berbeda.
- Ia berguna ketika **tidak ada satu `goal` tunggal**, karena bisa menghitung jarak ke banyak `node`.
- Cocok untuk **area movement**, **reachable positions**, dan **terrain cost** dalam game.
- Jika hanya ada satu tujuan jelas dan `heuristic` tersedia, algoritma lain biasanya lebih efisien.

### Transisi ke Slide Berikutnya

Kita sudah melihat bahwa `Dijkstra` sangat berguna ketika sistem perlu tahu jarak ke banyak titik berdasarkan biaya terrain. Namun banyak situasi game hanya membutuhkan satu jalur dari `start` ke `goal`. Pada slide berikutnya, kita akan melihat kapan `A*` menjadi pilihan yang lebih tepat.

---

## Slide 049 - Kapan Menggunakan A*?

### Narasi

Pada slide ini kita fokus pada **kapan `A*` layak digunakan** dalam pathfinding game. `A*` adalah algoritma pencarian jalur yang menggabungkan biaya nyata dari titik awal dengan **heuristic** untuk memperkirakan jarak ke tujuan. Intuisinya sederhana: jika kita tahu arah tujuan secara cukup baik, pencarian bisa lebih cepat dan lebih terarah dibanding pencarian yang menjelajah semua arah secara merata.

Gunakan `A*` ketika masalahnya memiliki **start** dan **goal** yang jelas. Misalnya, NPC harus bergerak dari posisi saat ini ke titik spawn, musuh mengejar pemain, atau unit RTS menuju target. Dalam situasi seperti ini, tujuan tunggal membuat heuristic dapat diarahkan ke satu titik, sehingga pencarian tidak perlu menghitung jarak ke semua titik di peta.

Kondisi berikutnya adalah **map cukup besar**. Pada peta kecil, perbedaan performa mungkin tidak terasa, tetapi pada peta besar, `A*` membantu mengurangi jumlah node yang dievaluasi. Ini penting untuk game real-time di mana banyak NPC atau unit mungkin meminta jalur secara bersamaan. Jika pencarian terlalu lambat, perilaku NPC akan terasa jeda, kaku, atau tidak responsif.

Syarat penting lain adalah **heuristic dapat dihitung**. Heuristic adalah fungsi estimasi jarak atau biaya menuju goal, misalnya jarak Euclidean, Manhattan, atau jarak berdasarkan grid. Heuristic yang baik membuat `A*` lebih efisien, tetapi tetap harus masuk akal agar jalur yang dihasilkan tidak menjadi tidak optimal atau tidak sesuai aturan game.

Contoh penerapannya cukup luas:

- **Enemy mengejar player**: goal adalah posisi player yang berubah-ubah, tetapi pada tiap langkah pencarian ada `start` dan `goal` yang jelas.
- **NPC menuju lokasi tertentu**: NPC mencari jalur ke waypoint, pintu, atau titik interaksi.
- **Unit RTS menuju target**: banyak unit dapat mencari jalur ke target yang sama atau target berbeda.
- **Robot game mencari jalur**: robot bergerak di grid atau graph dengan hambatan dan biaya tertentu.

Perlu dipahami bahwa `A*` bukan pengganti seluruh sistem navigasi. Ia menjawab pertanyaan **bagaimana menemukan jalur** dari titik A ke titik B. Setelah jalur ditemukan, NPC masih harus bergerak mengikuti waypoint, menghindari tabrakan, dan menyesuaikan perilaku. Namun untuk keputusan pathfinding manual dalam game, `A*` adalah pilihan umum karena seimbang antara efisiensi dan kualitas jalur.

Sebelum lanjut, mahasiswa perlu mengingat tiga hal: ada **start dan goal yang jelas**, **heuristic dapat dihitung**, dan **peta cukup besar sehingga efisiensi penting**. Jika tidak ada goal tunggal atau heuristic sulit dibuat, algoritma lain seperti Dijkstra mungkin lebih sesuai.

### Inti yang Harus Ditekankan

- `A*` paling cocok untuk pencarian jalur dengan **start** dan **goal** yang jelas.
- Keunggulannya muncul pada **map besar** karena heuristic membantu pencarian lebih terarah.
- `A*` membutuhkan **heuristic** yang dapat dihitung dan sesuai aturan pergerakan game.
- Contoh umum: enemy mengejar player, NPC menuju lokasi, unit RTS menuju target, robot game mencari jalur.
- `A*` adalah pilihan umum untuk **pathfinding manual** dalam game, tetapi jalur hasil pencarian masih perlu diikuti oleh sistem gerak NPC.

### Transisi ke Slide Berikutnya

Setelah `A*` menghasilkan urutan waypoint, pertanyaan berikutnya adalah bagaimana NPC benar-benar bergerak mengikuti jalur tersebut. Pada slide berikutnya kita akan membahas **Path Following**, yaitu proses mengubah hasil pathfinding menjadi gerakan yang halus dan stabil.

---

## Slide 050 - Path Following

### Narasi

Setelah pathfinding selesai, NPC biasanya sudah memiliki urutan titik yang harus dilewati, misalnya:

```text
A → B → C → D
```

Namun, urutan titik ini belum otomatis membuat NPC bergerak. **Path following** adalah tahap eksekusi, yaitu proses NPC mengikuti jalur yang sudah dihasilkan.

Intuisinya sederhana: NPC menyimpan satu waypoint aktif, misalnya `currentWaypoint`. NPC bergerak menuju waypoint tersebut. Jika jaraknya sudah cukup dekat, waypoint aktif diganti dengan titik berikutnya.

```text
currentWaypoint = A
bergerak ke A
jika sudah dekat:
    currentWaypoint = B
bergerak ke B
...
```

Secara operasional, prosesnya dapat dipahami sebagai berikut:

1. Tentukan waypoint awal sebagai `currentWaypoint`.
2. Gerakkan NPC menuju waypoint tersebut.
3. Jika NPC sudah mendekati waypoint, pindah `currentWaypoint` ke waypoint berikutnya.
4. Ulangi proses sampai waypoint terakhir tercapai.

Dalam Unity, path following dapat diimplementasikan dengan beberapa cara:

- `Vector3.MoveTowards` untuk memindahkan posisi NPC secara bertahap menuju waypoint.
- steering `Arrive` untuk membuat NPC melambat saat mendekati waypoint, sehingga gerakan lebih halus.
- `Rigidbody` movement jika NPC menggunakan fisika dan perlu kontrol gerak yang lebih stabil.
- `NavMeshAgent` jika NPC bergerak di NavMesh dan kita ingin Unity menangani pergerakan secara lebih otomatis.

Perbedaan penting yang perlu dipahami adalah bahwa **pathfinding** dan **path following** bukan tahap yang sama. Pathfinding menentukan "ke mana harus pergi", sedangkan path following menentukan "bagaimana NPC benar-benar bergerak menuju titik-titik tersebut".

Tanpa path following yang baik, NPC bisa terlihat melompat antar waypoint, berhenti terlalu cepat, atau bergerak kaku. Karena itu, dalam praktik game, path following sering dikombinasikan dengan kontrol kecepatan dan perilaku arrive agar gerakan NPC terasa natural.

### Inti yang Harus Ditekankan

- **Pathfinding** menghasilkan urutan waypoint, bukan gerakan NPC secara langsung.
- **Path following** mengeksekusi urutan waypoint dengan memindahkan `currentWaypoint` saat NPC mendekati titik aktif.
- Implementasi bisa menggunakan `Vector3.MoveTowards`, steering `Arrive`, `Rigidbody`, atau `NavMeshAgent` sesuai kebutuhan.
- Gerakan NPC yang baik membutuhkan transisi antar waypoint yang halus, bukan hanya perpindahan posisi yang instan.

### Transisi ke Slide Berikutnya

Selanjutnya, kita akan melihat contoh sederhana waypoint following, yaitu bagaimana NPC berpindah dari satu waypoint ke waypoint berikutnya dengan aturan jarak dan parameter gerak yang lebih konkret.

---

## Slide 051 - Waypoint Following

### Narasi

Slide ini membahas **Waypoint Following**, yaitu cara NPC menjalankan path yang sudah berupa urutan titik. Pada contoh di bawah, NPC bergerak dari posisi awal menuju `W1`, lalu `W2`, `W3`, dan akhirnya `Goal`.

```text
NPC ● → W1 → W2 → W3 → Goal ●
```

Poin pentingnya bukan hanya “bergerak ke titik”, tetapi kapan NPC dianggap sudah sampai. Jika jarak NPC ke waypoint saat ini lebih kecil dari `threshold`, maka waypoint aktif diganti dengan waypoint berikutnya. Nilai `threshold` ini sering disebut **waypoint radius**.

```text
Jika jarak NPC ke waypoint saat ini < threshold
    lanjut ke waypoint berikutnya
```

Parameter penting yang memengaruhi perilaku ini adalah:

- **waypoint radius**: jarak di mana NPC dianggap sudah mencapai waypoint,
- **movement speed**: kecepatan NPC bergerak menuju waypoint,
- **turn speed**: kecepatan NPC memutar orientasi ke arah waypoint,
- **stopping distance**: jarak aman sebelum NPC berhenti atau melambat.

Tanpa parameter yang tepat, NPC bisa berhenti terlalu jauh, berputar kaku, atau bahkan melewati waypoint. Dalam implementasi Unity, logika ini bisa memakai `Vector3.MoveTowards`, `Rigidbody` movement, atau `NavMeshAgent`, tetapi intinya tetap sama: cek jarak, ganti target, dan arahkan gerakan NPC.

Agar lebih natural, **waypoint following** sering digabung dengan steering **Arrive**. `Arrive` membuat NPC mulai melambat saat mendekati waypoint, sehingga tidak tiba-tiba berhenti atau terasa melompat antar waypoint. Hasilnya, gerakan NPC lebih halus dan lebih mudah dikontrol.

### Inti yang Harus Ditekankan

- **Waypoint following** adalah eksekusi path sebagai urutan target yang diikuti NPC.
- Transisi antar waypoint ditentukan oleh jarak NPC terhadap `threshold` atau **waypoint radius**.
- Parameter seperti `movement speed`, `turn speed`, dan `stopping distance` sangat memengaruhi naturalitas gerakan.
- Steering `Arrive` membantu NPC melambat mendekati waypoint sehingga gerakan lebih halus.

### Transisi ke Slide Berikutnya

Setelah NPC bisa mengikuti waypoint, masalah berikutnya adalah path yang masih terlihat patah-patah. Pada slide berikutnya, kita akan membahas **Path Smoothing** untuk membuat jalur pergerakan lebih natural.

---

## Slide 052 - Path Smoothing

### Narasi

Pada slide sebelumnya kita melihat **waypoint following**, yaitu NPC bergerak dari satu waypoint ke waypoint berikutnya. Namun ketika path berasal dari algoritma grid seperti A*, hasil yang dihasilkan sering berupa rangkaian langkah kecil yang mengikuti sel grid. Bentuknya bisa terlihat seperti:

```text
S → → ↓ ↓ → → G
```

Secara logika path tersebut valid, tetapi secara visual gerakan NPC dapat terasa kaku, seperti robot yang hanya bergerak lurus dan belok 90 derajat. Di sinilah **path smoothing** berperan: memperbaiki bentuk path tanpa mengubah tujuan utama, yaitu tetap membawa NPC dari titik awal ke titik tujuan.

Intuisi praktisnya sederhana. Jika NPC bisa bergerak langsung dari satu waypoint ke waypoint berikutnya yang lebih jauh tanpa melewati obstacle, maka waypoint di antaranya tidak perlu lagi. Dengan kata lain, kita bisa “memotong” belokan yang tidak diperlukan. Hasilnya, path yang tadinya patah-patah menjadi lebih halus dan natural:

```text
S ─────╲
        ╲──── G
```

Dalam implementasi, path smoothing biasanya dilakukan setelah pathfinding selesai. Alurnya adalah:

1. Ambil daftar waypoint hasil pathfinding.
2. Cek apakah ada **line of sight** antara waypoint awal dan waypoint berikutnya yang lebih jauh.
3. Jika line of sight valid, buang waypoint yang berada di antara keduanya.
4. Ulangi proses sampai tidak ada lagi waypoint yang bisa dihilangkan.
5. Gunakan **steering** untuk memperhalus belokan dan kecepatan gerak.

Pendekatan ini penting karena pathfinding grid sering bekerja pada representasi dunia yang diskrit, sedangkan gerakan karakter di game biasanya terjadi di ruang kontinu. Jika kita hanya mengikuti waypoint grid secara mentah, NPC akan terlihat tidak natural. Path smoothing membantu menjembatani perbedaan antara **jalur logis** dan **pergerakan visual**.

Perlu diperhatikan bahwa smoothing tidak boleh membuat NPC menembus obstacle. Karena itu, pengecekan **line of sight** adalah bagian penting. Jika garis antara dua waypoint terhalang, waypoint di antaranya tidak boleh dihapus. Dengan cara ini, path tetap valid secara navigasi, tetapi bentuknya menjadi lebih mulus.

Sebelum lanjut, mahasiswa perlu memahami bahwa path smoothing bukan pengganti pathfinding. Pathfinding bertugas menemukan urutan waypoint yang valid, sedangkan smoothing bertugas memperbaiki bentuk path agar gerakan NPC lebih natural. Konsep ini sering digunakan dalam NPC behavior, terutama ketika karakter harus berjalan, berlari, atau mengejar target di lingkungan game.

### Inti yang Harus Ditekankan

- **Path smoothing** membuat path hasil grid lebih natural dengan mengurangi waypoint yang tidak perlu.
- Pengecekan **line of sight** memastikan NPC tidak melewati obstacle saat waypoint dihilangkan.
- **Steering** membantu memperhalus belokan, kecepatan, dan transisi gerakan NPC.
- Smoothing dilakukan setelah pathfinding, bukan menggantikan proses pencarian jalur.

### Transisi ke Slide Berikutnya

Setelah path dibuat dan dirapikan, masih ada masalah lain: lingkungan game bisa berubah. Pada slide berikutnya, kita akan membahas **dynamic obstacles**, yaitu situasi di mana jalur yang sudah dihitung bisa terhalang oleh objek atau agen lain yang bergerak.

---

## Slide 053 - Dynamic Obstacles

### Narasi

Pada slide ini kita membahas **Dynamic Obstacles**, yaitu situasi di mana lingkungan game berubah setelah path dihitung. Pathfinding biasanya bekerja berdasarkan kondisi saat path dibuat, misalnya area yang dianggap dapat dilalui pada waktu tertentu. Namun dalam game, obstacle tidak selalu statis.

Contoh perubahan yang sering terjadi:

- **player** menutup jalan,
- **pintu** tertutup atau terbuka,
- **enemy lain** menghalangi jalur,
- **objek fisika** berpindah posisi.

Jika NPC hanya mengikuti path lama, perilakunya bisa terlihat kaku, menabrak, atau berhenti tanpa alasan.

Intuisi praktisnya adalah: **pathfinding global** memberi rencana rute, tetapi agent juga membutuhkan **respons lokal** terhadap perubahan lingkungan. Bayangkan pengemudi yang sudah tahu rute dari peta, tetapi tetap harus menghindar dari kendaraan yang mendadak berhenti. Dalam game AI, kombinasi antara rencana global dan penghindaran lokal membuat NPC terasa lebih natural.

Solusi pertama adalah **recalculating path** atau **path replanning**. Jika perubahan lingkungan cukup besar, agent dapat menghitung ulang path menuju tujuan. Cara ini cocok untuk perubahan yang mengubah rute secara signifikan, misalnya jalan utama tertutup. Namun, replan tidak selalu dilakukan setiap frame karena biayanya bisa tinggi. Biasanya replan dipicu oleh kondisi tertentu, seperti path tidak valid atau obstacle baru muncul di jalur.

Solusi kedua adalah **local avoidance** dan **steering avoidance**. Untuk obstacle kecil atau sementara, agent dapat menyesuaikan gerakan secara lokal tanpa menghitung ulang seluruh path. Pendekatan ini menggunakan gaya steering untuk mendorong agent menjauh dari benda yang menghalangi. Hasilnya, gerakan NPC lebih halus dan responsif.

Solusi ketiga adalah **dynamic NavMesh obstacle**. Dalam representasi navigasi, area yang dapat dilalui dapat diperbarui secara dinamis. Obstacle yang berpindah dapat ditandai sebagai area tidak bisa dilalui sementara, lalu dihapus kembali setelah posisinya berubah. Dengan cara ini, pathfinding global tetap memiliki informasi lingkungan yang lebih akurat.

Yang perlu dipahami mahasiswa adalah trade-off antara **keakuratan** dan **biaya komputasi**. **Path replanning** lebih akurat untuk perubahan besar, tetapi lebih mahal. **Local avoidance** lebih murah dan cepat, tetapi mungkin tidak selalu menghasilkan rute optimal. Dalam desain game, pilihan solusi bergantung pada kompleksitas lingkungan dan kebutuhan gameplay.

### Inti yang Harus Ditekankan

- **Dynamic obstacles** membuat path yang sudah dihitung dapat menjadi tidak valid.
- **Path replanning** digunakan untuk perubahan besar, sedangkan **local avoidance** cocok untuk gangguan kecil dan sementara.
- **Dynamic NavMesh obstacle** membantu memperbarui area navigable agar pathfinding tetap relevan.
- Mahasiswa perlu memahami trade-off antara keakuratan rute dan biaya komputasi.

### Transisi ke Slide Berikutnya

Setelah memahami bagaimana obstacle dinamis memengaruhi path, kita akan masuk ke representasi area navigable itu sendiri, yaitu **Navigation Mesh** atau `NavMesh`, yang menjadi dasar banyak sistem pathfinding di game modern.

---

## Slide 054 - Navigation Mesh

### Narasi

Slide ini memperkenalkan **Navigation Mesh** atau **NavMesh**, yaitu representasi area yang dapat dilalui oleh `agent` dalam game. Intuisi sederhananya, NavMesh adalah "peta jalan" yang sudah disaring: bagian mana saja yang boleh ditempati NPC, dan bagian mana yang tidak.

NavMesh biasanya dibentuk dari **polygon**, bukan dari grid kotak-kotak yang sangat halus. Setiap polygon mewakili permukaan yang navigable, misalnya lantai koridor, ruangan, atau platform. Dengan polygon, bentuk level dapat mengikuti geometri 3D secara lebih natural.

Contoh pada slide menunjukkan area walkable berupa persegi panjang. Blok `███` adalah obstacle yang tidak termasuk area walkable. Artinya, `agent` tidak boleh melewati area tersebut, tetapi masih dapat bergerak di sekitarnya selama permukaan itu tetap navigable.

```text
Area walkable:
┌─────────────┐
│             │
│   ███       │
│             │
└─────────────┘
```

Secara konseptual, NavMesh memuat:

- **polygon navigable** sebagai permukaan yang dapat dilalui.
- **area walkable** sebagai batas pergerakan `agent`.
- **obstacle** sebagai area yang dikecualikan dari NavMesh.
- **permukaan navigable** sebagai tempat NPC berjalan dan mencari jalur.

Dalam konteks `pathfinding`, NavMesh menjadi dasar bagi algoritma pencarian jalur. `agent` tidak lagi mencari jalur pada seluruh geometri level, melainkan pada struktur navigable yang sudah ditentukan. Ini membuat keputusan pergerakan lebih stabil dan lebih mudah dikontrol oleh sistem AI NPC.

Untuk NPC, NavMesh memberi batasan perilaku: NPC berjalan di atas permukaan yang sudah ditandai navigable. Jika target berada di luar NavMesh, jalur tidak valid. Jika obstacle menutup area, sistem perlu menyesuaikan jalur atau melakukan replanning, tetapi pada slide ini kita fokus pada representasi area, bukan mekanisme replanning.

Yang harus dipahami mahasiswa sebelum lanjut: NavMesh bukan sekadar gambar lantai, melainkan data navigasi yang membatasi dan mengarahkan pergerakan `agent`. Dalam Unity, konsep ini biasanya diwakili oleh `NavMesh`, sehingga NPC dapat menggunakan sistem navigation yang tersedia.

### Inti yang Harus Ditekankan

- **NavMesh** adalah representasi area yang dapat dilalui oleh `agent`.
- NavMesh biasanya terdiri dari **polygon** yang menandai permukaan navigable.
- **Obstacle** tidak termasuk area walkable, sehingga menjadi batas pergerakan NPC.
- NavMesh menjadi dasar `pathfinding` dan batasan perilaku NPC dalam game.

### Transisi ke Slide Berikutnya

Setelah memahami apa itu NavMesh, slide berikutnya akan menjelaskan mengapa NavMesh cocok untuk game 3D, terutama dari sisi efisiensi, bentuk permukaan level, dan kemudahan penggunaan di Unity.

---

## Slide 055 - Mengapa Menggunakan NavMesh?

### Narasi

Setelah memahami **Navigation Mesh** sebagai representasi area yang dapat dilalui, langkah berikutnya adalah memahami mengapa representasi ini sangat cocok untuk game 3D. Intuisi utamanya sederhana: agent tidak perlu bergerak di atas kotak-kotak grid yang kaku, tetapi dapat bergerak di atas permukaan level yang bentuknya lebih natural.

**NavMesh** membantu karena ia mengikuti bentuk permukaan level. Dalam dunia 3D, area `walkable` sering berupa lantai, koridor, dan ruangan yang tidak selalu berbentuk persegi panjang. Dengan polygon, batas area navigable dapat mengikuti kontur level, sehingga NPC dapat bergerak lebih realistis dan tetap berada di area yang memang bisa dilalui.

Alasan penting berikutnya adalah efisiensi. Jika kita menggunakan grid yang sangat detail untuk world 3D, jumlah cell bisa menjadi sangat besar. NavMesh biasanya lebih ringkas karena hanya merepresentasikan area yang benar-benar dapat dilalui, bukan seluruh ruang 3D. Hal ini membuat proses pencarian `path` dan penyimpanan data navigation lebih hemat, terutama untuk level yang kompleks.

Di Unity, NavMesh juga memudahkan developer karena banyak proses navigation sudah tersedia. Developer tidak perlu membangun seluruh sistem pathfinding dari nol. Proses seperti pembuatan mesh navigable, pencarian `path`, dan pergerakan `agent` dapat didukung oleh fitur navigation bawaan Unity. Ini membuat implementasi NPC yang bergerak menuju target menjadi lebih praktis.

Selain itu, NavMesh mendukung parameter seperti `agent radius` dan `obstacle avoidance`. `agent radius` membantu sistem memahami ukuran agent, sehingga `path` yang dihasilkan tidak terlalu sempit atau tidak realistis. `obstacle avoidance` membantu agent menghindari tabrakan dengan agent lain atau hambatan, sehingga perilaku NPC terasa lebih hidup dan tidak kaku.

Secara keseluruhan, mahasiswa perlu memahami bahwa NavMesh dipilih bukan hanya karena ia bisa mencari `path`, tetapi karena ia cocok dengan struktur level 3D, lebih efisien daripada grid detail, dan mudah diintegrasikan ke engine game seperti Unity.

### Inti yang Harus Ditekankan

- **NavMesh** cocok untuk game 3D karena mengikuti bentuk permukaan level, bukan kotak grid yang kaku.
- NavMesh lebih efisien daripada grid yang sangat detail karena hanya merepresentasikan area `walkable`.
- NavMesh mendukung `agent radius` dan `obstacle avoidance`, sehingga pergerakan NPC lebih realistis.
- Di Unity, NavMesh memudahkan implementasi karena banyak proses navigation sudah tersedia.

### Transisi ke Slide Berikutnya

Setelah memahami alasan memilih NavMesh, kita akan membandingkannya dengan grid pada slide berikutnya untuk melihat kapan masing-masing representasi lebih tepat digunakan.

---

## Slide 056 - NavMesh vs Grid

### Narasi

Setelah memahami alasan **NavMesh** cocok untuk game 3D, kita perlu membandingkannya dengan representasi navigasi yang paling dasar, yaitu `Grid`. Perbandingan ini penting karena keduanya bukan pengganti satu sama lain, melainkan pilihan desain yang berbeda.

Secara intuisi, `Grid` membagi dunia menjadi kotak-kotak kecil. Setiap kotak bisa dianggap dapat dilewati atau tidak. Agen bergerak dari satu sel ke sel lain, biasanya melalui tetangga terdekat. Representasi ini sangat mudah dipahami karena strukturnya seragam dan sederhana.

`Grid` paling cocok untuk game berbasis tile, papan permainan, atau lingkungan 2D yang bentuknya teratur. Karena setiap sel menjadi node, mahasiswa dapat dengan mudah mempelajari algoritma pencarian jalur seperti `A*`, `Dijkstra`, atau `BFS`. Namun, detail navigasinya sangat bergantung pada ukuran sel. Semakin kecil sel, semakin akurat, tetapi semakin banyak data dan waktu komputasi yang dibutuhkan.

`NavMesh` mengambil pendekatan yang berbeda. Alih-alih kotak-kotak, `NavMesh` merepresentasikan area yang bisa dilewati sebagai **polygon** atau area permukaan. Bentuknya mengikuti geometri level, seperti lantai, koridor, tangga, atau permukaan miring. Dengan cara ini, jalur tidak dibatasi oleh sel persegi, tetapi dapat mengikuti bentuk permukaan yang lebih natural.

Perbedaan utama terletak pada kesesuaian dengan jenis game dan dukungan implementasi. `Grid` lebih baik untuk pembelajaran konsep dan implementasi manual. `NavMesh` lebih praktis untuk dunia 3D di Unity karena banyak proses navigasi sudah tersedia dalam sistem bawaan, termasuk pembuatan area navigasi dari geometri scene dan pergerakan agen di atas area tersebut.

Jadi, mahasiswa tidak perlu menganggap salah satu selalu lebih baik. Yang harus dipahami adalah **trade-off**: `Grid` menawarkan kesederhanaan dan kemudahan analisis, sedangkan `NavMesh` menawarkan efisiensi dan kesesuaian dengan permukaan 3D. Pilihan yang tepat bergantung pada bentuk level, kebutuhan visual, performa, dan alur kerja pengembangan.

### Inti yang Harus Ditekankan

- `Grid` menggunakan representasi kotak-kotak dan sangat cocok untuk game berbasis tile.
- `NavMesh` menggunakan polygon area walkable dan lebih sesuai untuk dunia 3D.
- Detail `Grid` bergantung pada ukuran cell, sedangkan `NavMesh` mengikuti bentuk permukaan level.
- Di Unity, `Grid` umumnya diimplementasikan secara manual, sedangkan `NavMesh` didukung oleh sistem navigasi bawaan.
- Pilihan antara `Grid` dan `NavMesh` adalah keputusan desain, bukan sekadar preferensi teknis.

### Transisi ke Slide Berikutnya

Setelah memahami perbedaan konsep antara `Grid` dan `NavMesh`, langkah berikutnya adalah melihat komponen apa saja yang digunakan Unity untuk membangun dan mengendalikan `NavMesh` secara praktis.

---

## Slide 057 - Komponen Unity NavMesh

### Narasi

Pada slide ini, kita beralih dari perbandingan konsep ke **komponen Unity** yang mendukung **NavMesh**. Tujuannya agar mahasiswa memahami bagian mana yang membangun area jalan, bagian mana yang membuat NPC bergerak, dan bagian mana yang mengatur pengecualian atau sambungan khusus.

Komponen yang umum digunakan:

```text
NavMeshSurface
NavMeshAgent
NavMeshObstacle
NavMeshLink
NavMesh Modifier
```

Setiap komponen memiliki peran yang berbeda dalam sistem navigasi.

- **`NavMeshSurface`** digunakan untuk membangun area navigasi dari **geometry scene**. Komponen ini membaca bentuk dunia, lalu menghasilkan permukaan yang bisa dilalui oleh agen.
- **`NavMeshAgent`** adalah komponen yang dipasang pada NPC atau karakter. Perannya adalah membuat objek tersebut dapat bergerak di atas NavMesh.
- **`NavMeshObstacle`** digunakan untuk obstacle dinamis. Objek ini dapat memengaruhi jalur navigasi, misalnya menghalangi area tertentu saat runtime.
- **`NavMeshLink`** berfungsi menghubungkan area yang tidak tersambung langsung. Contohnya area yang membutuhkan lompatan atau turun tangga.
- **`NavMeshModifier`** adalah komponen tambahan untuk mengubah cara area dibake. Misalnya menandai area tertentu agar tidak bisa dilewati atau memberi biaya bobot yang berbeda.

Alur kerja dasarnya dapat dipahami sebagai berikut.

1. Geometry scene disiapkan sebagai sumber bentuk dunia.
2. `NavMeshSurface` membangun area navigasi dari geometry tersebut.
3. `NavMeshAgent` menggunakan area navigasi itu untuk memindahkan NPC.
4. `NavMeshObstacle`, `NavMeshLink`, dan `NavMeshModifier` menyesuaikan perilaku navigasi sesuai kebutuhan desain.

Intuisi praktisnya adalah NavMesh bukan hanya “peta” statis. Ia adalah lingkungan navigasi yang dapat dipengaruhi oleh objek dinamis, sambungan khusus, dan aturan area.

Sebelum lanjut, mahasiswa perlu memahami bahwa slide ini baru membahas **peran komponen**. Detail parameter gerak, cara script mengontrol agen, dan perilaku `NavMeshAgent` akan dibahas pada slide berikutnya.

### Inti yang Harus Ditekankan

- **`NavMeshSurface`** membangun area navigasi dari geometry scene.
- **`NavMeshAgent`** membuat NPC dapat bergerak di atas NavMesh.
- **`NavMeshObstacle`**, **`NavMeshLink`**, dan **`NavMeshModifier`** digunakan untuk menyesuaikan navigasi secara dinamis atau berdasarkan aturan area.
- Slide ini menekankan **peran komponen**, bukan detail parameter atau script.

### Transisi ke Slide Berikutnya

Setelah memahami komponen apa saja yang terlibat, kita akan masuk lebih dalam ke `NavMeshAgent`, yaitu komponen utama yang membuat NPC bergerak di atas NavMesh.

---

## Slide 058 - NavMeshAgent

### Narasi

Pada slide ini kita fokus pada **`NavMeshAgent`**, yaitu komponen Unity yang membuat objek atau NPC dapat bergerak di atas **NavMesh**. Intuisi pentingnya: agent tidak sekadar menggeser `transform` secara manual, tetapi meminta sistem navigasi untuk mencari rute yang valid di area yang sudah dapat dilalui. Dengan cara ini, gerakan NPC terasa lebih alami karena mengikuti bentuk level, menghindari area yang tidak bisa dilewati, dan dapat berinteraksi dengan obstacle atau agent lain.

Parameter penting pada `NavMeshAgent` menentukan bagaimana agent bergerak:

- **`Speed`**: kecepatan maksimum agent saat bergerak.
- **`Angular Speed`**: kecepatan rotasi agent saat mengubah arah.
- **`Acceleration`**: seberapa cepat agent mempercepat atau memperlambat.
- **`Stopping Distance`**: jarak di mana agent berhenti sebelum mencapai tujuan.
- **`Radius`** dan **`Height`**: ukuran kapsul agent yang memengaruhi collision dan obstacle avoidance.
- **`Obstacle Avoidance`**: kemampuan agent menghindari agent atau obstacle dinamis lain.
- **`Auto Braking`**: membuat agent berhenti secara lebih halus.

Contoh script berikut menunjukkan cara paling dasar untuk membuat agent bergerak menuju target:

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

Script ini memiliki alur yang sederhana:

1. Pada `Awake()`, komponen mengambil referensi `NavMeshAgent` yang ada di GameObject yang sama menggunakan `GetComponent<NavMeshAgent>()`.
2. Pada `Update()`, script memeriksa apakah `target` sudah diatur.
3. Jika `target` tidak null, script memanggil `agent.SetDestination(target.position)` untuk memberi tahu agent bahwa posisi target adalah tujuan yang harus dicapai.

Hasil yang diharapkan adalah NPC bergerak otomatis di atas NavMesh menuju posisi `target`. Pergerakan tersebut tidak hanya berupa garis lurus sederhana, tetapi mengikuti area yang dapat dinavigasi. Parameter seperti `Speed`, `Stopping Distance`, dan `Auto Braking` akan memengaruhi seberapa cepat agent bergerak, kapan agent berhenti, dan seberapa halus gerakan berhenti tersebut.

Hal penting yang perlu dipahami mahasiswa adalah bahwa `SetDestination()` hanya bekerja dengan baik jika target berada pada area yang dapat dinavigasi. Jika target berada di luar NavMesh, agent mungkin tidak dapat bergerak ke posisi tersebut. Dalam praktik, `target` biasanya berupa pemain, NPC lain, pintu, titik misi, atau objek penting lainnya yang berada di area walkable.

Sebelum lanjut, mahasiswa perlu memahami bahwa `NavMeshAgent` adalah komponen yang membuat NPC “bergerak” di atas NavMesh. NavMesh sendiri adalah area yang dapat dilewati, sedangkan `NavMeshAgent` adalah penggerak yang menggunakan area tersebut untuk pathfinding dan pergerakan.

### Inti yang Harus Ditekankan

- `NavMeshAgent` membuat NPC bergerak di atas NavMesh, bukan hanya menggeser `transform` secara manual.
- Parameter seperti `Speed`, `Stopping Distance`, `Radius`, `Height`, dan `Obstacle Avoidance` memengaruhi perilaku gerak dan penghindaran.
- `agent.SetDestination(target.position)` adalah cara dasar untuk memberi tujuan kepada agent.
- Target harus berada pada area yang dapat dinavigasi agar agent dapat bergerak dengan benar.

### Transisi ke Slide Berikutnya

Setelah memahami bagaimana agent bergerak, langkah berikutnya adalah memahami dari mana area navigasi itu berasal. Pada slide berikutnya, kita akan membahas `NavMeshSurface` yang digunakan untuk membangun NavMesh dari geometry scene.

---

## Slide 059 - NavMeshSurface

### Narasi

Pada slide ini kita membahas **`NavMeshSurface`**, yaitu komponen Unity yang digunakan untuk **membangun NavMesh**. Jika `NavMeshAgent` adalah komponen yang membuat karakter dapat bergerak, maka `NavMeshSurface` adalah komponen yang menyediakan area navigasi yang bisa digunakan oleh agent. Tanpa NavMesh, agent tidak memiliki “peta jalan” yang valid untuk melakukan pathfinding.

Secara intuitif, `NavMeshSurface` mengubah geometri level menjadi area yang dapat dilalui. Unity akan memproses objek-objek tertentu, misalnya lantai, platform, atau jalan, lalu menghasilkan **NavMesh**. NavMesh inilah yang menjadi dasar bagi `NavMeshAgent` untuk menghitung rute dan bergerak menuju target.

Alur pembuatannya dapat digambarkan sebagai berikut:

```text
Objek Level dengan Layer Walkable
        ↓
NavMeshSurface
        ↓
Bake
        ↓
NavMesh
        ↓
NavMeshAgent
```

Langkah umum yang perlu dilakukan adalah:

1. Tambahkan package **Navigation** jika belum tersedia.
2. Tambahkan komponen `NavMeshSurface` pada `GameObject` yang mewakili area navigasi.
3. Tentukan `layer` objek yang menjadi area jalan.
4. Klik **Bake** untuk membangun NavMesh.

Pengaturan `layer` menjadi bagian penting karena `NavMeshSurface` tidak otomatis menganggap semua objek sebagai area walkable. Jika `layer` tidak diatur dengan benar, hasil bake dapat tidak sesuai harapan, misalnya lantai tidak masuk area navigasi atau area tertentu tidak dapat digunakan oleh agent.

Hasil dari proses bake adalah visualisasi area walkable di Scene View. Visualisasi ini membantu mahasiswa memeriksa bagian mana yang dapat digunakan agent. Setelah NavMesh terbentuk, `NavMeshAgent` dapat memanfaatkan area tersebut untuk navigation, misalnya ketika memanggil `SetDestination` pada target tertentu.

Ada beberapa hal yang harus diperhatikan agar NavMesh terbentuk dengan baik:

- **`collider` dan `mesh` level harus benar**, karena bentuk geometri memengaruhi hasil area navigasi.
- **`layer` harus diatur dengan rapi**, agar objek yang seharusnya menjadi area jalan tidak terlewat.
- **Area obstacle perlu diperhatikan**, karena bentuk geometri yang tidak jelas dapat membuat NavMesh tidak mulus atau tidak sesuai kebutuhan gameplay.

Sebelum lanjut, mahasiswa perlu memahami bahwa `NavMeshSurface` adalah tahap persiapan navigasi. Kualitas NavMesh sangat memengaruhi perilaku agent, terutama untuk NPC yang harus bergerak secara natural menuju target di dalam game.

### Inti yang Harus Ditekankan

- `NavMeshSurface` digunakan untuk **membangun NavMesh** dari geometri level.
- Proses utamanya adalah mengatur `layer` area walkable, lalu menjalankan **Bake**.
- Hasil bake berupa area walkable yang dapat digunakan oleh `NavMeshAgent` untuk navigation.
- Kualitas NavMesh sangat bergantung pada `collider`, `mesh`, pengaturan `layer`, dan bentuk area obstacle.

### Transisi ke Slide Berikutnya

Setelah NavMesh berhasil dibangun, langkah berikutnya adalah memahami bagaimana obstacle dapat memengaruhi area navigasi. Pada slide berikutnya kita akan membahas `NavMeshObstacle`, yaitu komponen untuk objek yang dapat menghalangi pergerakan agent.

---

## Slide 060 - NavMeshObstacle

### Narasi

Pada slide sebelumnya kita sudah membahas `NavMeshSurface`, yaitu cara membangun area jalan yang dapat digunakan agent. Setelah NavMesh terbentuk, masih ada situasi di mana lingkungan tidak sepenuhnya statis. Ada objek yang bisa menghalangi jalur agent, tetapi posisinya dapat berubah atau perlu diperlakukan sebagai penghalang khusus. Untuk itulah komponen `NavMeshObstacle` digunakan.

Secara intuitif, `NavMeshObstacle` memberi tahu sistem navigasi bahwa suatu objek bukan sekadar dekorasi, melainkan **obstacle** yang dapat memengaruhi pergerakan NPC atau agent. Tanpa penandaan ini, agent mungkin menganggap area di sekitar objek tersebut masih dapat dilewati, padahal secara desain game area itu harus dihindari.

Beberapa contoh umum penggunaan `NavMeshObstacle` adalah:

- pintu yang menutup atau membuka,
- box besar yang menghalangi lorong,
- kendaraan yang bergerak di area tertentu,
- objek bergerak yang dapat berpindah posisi.

Perbedaan penting dari obstacle biasa adalah kemampuan **Carve**.

```text
Carve
```

Jika `Carve` aktif, obstacle dapat membuat lubang pada NavMesh secara dinamis. Artinya, area walkable di sekitar obstacle akan dihapus sementara sehingga agent tidak lagi menganggap area tersebut dapat dilewati. Ketika obstacle berpindah atau dihapus, area NavMesh yang terpengaruh dapat diperbarui kembali.

Fitur ini sangat berguna untuk objek yang posisinya berubah selama runtime. Misalnya, kendaraan yang melintas di jalan, kotak yang didorong NPC, atau pintu yang menutup dan menghalangi jalur. Dengan `Carve`, sistem pathfinding dapat menyesuaikan jalur secara lebih realistis tanpa harus membakar ulang seluruh NavMesh secara manual.

Namun, mahasiswa perlu memahami bahwa carving bukan tanpa biaya. Jika terlalu banyak obstacle aktif dengan `Carve`, sistem navigasi harus memperbarui area walkable lebih sering. Hal ini dapat berdampak pada performa, terutama di scene dengan banyak agent atau banyak objek bergerak. Oleh karena itu, `Carve` sebaiknya digunakan secara selektif, hanya untuk obstacle yang benar-benar memengaruhi jalur agent secara signifikan.

Sebelum lanjut, hal yang harus dipahami adalah: `NavMeshObstacle` bukan pengganti desain level yang benar. Collider, ukuran obstacle, dan posisi objek tetap harus diatur dengan rapi. `Carve` membantu NavMesh menyesuaikan diri secara dinamis, tetapi kualitas navigasi tetap bergantung pada bagaimana lingkungan dan obstacle dirancang.

### Inti yang Harus Ditekankan

- `NavMeshObstacle` menandai objek sebagai penghalang yang dapat memengaruhi jalur agent.
- Contoh penggunaannya meliputi pintu, box besar, kendaraan, dan objek bergerak.
- `Carve` membuat lubang pada NavMesh secara dinamis sehingga agent tidak melewati area yang terhalang.
- Carving berguna untuk obstacle yang berubah posisi, tetapi terlalu banyak carving dapat memengaruhi performa.
- Desain collider, ukuran, dan penempatan obstacle tetap penting agar navigasi bekerja dengan benar.

### Transisi ke Slide Berikutnya

Setelah obstacle dapat menghalangi jalur, ada kasus di mana agent perlu berpindah antar area yang tidak terhubung langsung oleh NavMesh biasa. Untuk membahas cara menghubungkan dua area navigasi, kita lanjut ke `NavMeshLink`.

---

## Slide 061 - NavMeshLink

### Narasi

Pada slide ini kita membahas **NavMeshLink**. Komponen ini digunakan untuk **menghubungkan dua area NavMesh yang terpisah**. Dalam game, agent tidak selalu bergerak di permukaan yang terus-menerus. Ada situasi di mana agent harus melompat, turun, memanjat, atau melewati jalur khusus.

Tanpa **NavMeshLink**, agent biasanya menganggap dua area tersebut tidak terhubung. Akibatnya, sistem pathfinding tidak menemukan rute, meskipun secara visual pemain dapat bergerak dari satu area ke area lain.

Ilustrasi sederhana:

```text
Platform A        Platform B
─────────         ─────────
    ●  =========>    ●
       OffMeshLink
```

Pada gambar ini, titik di **Platform A** dan **Platform B** berada di area yang terpisah. **NavMeshLink** bertindak sebagai **OffMeshLink**, yaitu jalur khusus yang memberi tahu sistem navigasi bahwa transisi dari area A ke area B dimungkinkan.

Beberapa contoh penggunaannya:

- **Melompat** dari satu platform ke platform lain.
- **Turun dari platform** ke area yang lebih rendah.
- **Melewati jembatan** yang tidak sepenuhnya menjadi permukaan jalan.
- **Memanjat** atau naik melalui jalur tertentu.
- **Masuk pintu khusus** yang membutuhkan transisi tertentu.

Secara konsep, **NavMeshLink** bukan sekadar garis visual. Ia adalah **edge tambahan** pada graph navigasi. Graph navigasi biasanya terdiri dari area atau node yang dapat dilalui. **NavMeshLink** menambahkan hubungan antar area yang sebelumnya tidak terhubung, sehingga agent dapat merencanakan rute yang melewati transisi tersebut.

Hal penting yang perlu dipahami mahasiswa adalah bahwa **NavMeshLink** harus ditempatkan dengan benar. Jika link terlalu pendek, terlalu miring, atau tidak sesuai dengan aturan gerak agent, agent mungkin tidak dapat menggunakannya. Sebaliknya, jika link terlalu longgar, agent bisa mengambil jalur yang tidak realistis.

Sebelum lanjut, pastikan mahasiswa memahami bahwa **NavMeshLink** menjawab masalah konektivitas, bukan masalah ukuran agent. Masalah ukuran, radius, step height, dan slope akan dibahas pada slide berikutnya.

### Inti yang Harus Ditekankan

- **NavMeshLink** digunakan untuk menghubungkan dua area NavMesh yang terpisah.
- Tanpa link, agent dapat menganggap area tersebut tidak terhubung meskipun secara visual bisa dilalui.
- Link ini memungkinkan transisi seperti lompatan, penurunan platform, jembatan, panjatan, atau pintu khusus.
- **NavMeshLink** berfungsi sebagai **OffMeshLink** pada graph navigasi, bukan hanya elemen visual.
- Penempatan link harus sesuai dengan aturan gerak agent agar jalur yang dihasilkan realistis.

### Transisi ke Slide Berikutnya

Setelah memahami bagaimana area terpisah dapat dihubungkan, kita perlu melihat bagaimana ukuran agent memengaruhi area yang dianggap dapat dilalui. Pada slide berikutnya, kita akan membahas **Agent Radius dan Clearance**, termasuk parameter seperti `Radius`, `Height`, `Step Height`, dan `Max Slope`.

---

## Slide 062 - Agent Radius dan Clearance

### Narasi

Setelah area NavMesh terhubung, ada satu hal yang sering luput: agent tidak selalu bisa melewati semua area yang secara geometris terlihat terbuka. Dalam pathfinding, agent kadang dimodelkan sebagai titik, tetapi dalam game, setiap karakter memiliki ukuran fisik. Karena itu, NavMesh tidak hanya menghitung apakah ada jalur, tetapi juga apakah jalur tersebut cukup untuk agent yang sedang digunakan.

Parameter utama yang perlu dipahami adalah `Radius`, `Height`, `Step Height`, dan `Max Slope`. Keempat parameter ini membentuk profil gerak agent dan memengaruhi area mana yang dianggap dapat dilalui.

Parameter `Radius` menentukan lebar footprint agent. Nilai ini berkaitan langsung dengan **clearance**, yaitu ruang bebas yang dibutuhkan agent untuk bergerak di antara obstacle. Jika dua dinding terlalu dekat, area tersebut mungkin tetap terlihat terbuka untuk agent kecil, tetapi tidak bisa dilewati oleh agent dengan radius lebih besar.

Parameter `Height` membantu sistem memahami dimensi vertikal agent. Ini penting ketika ada celah rendah, overhang, atau area yang tidak cukup tinggi. Dalam banyak kasus, `Height` bekerja bersama `Radius` untuk memastikan agent tidak dianggap bisa masuk ke ruang yang secara ukuran tidak realistis.

Parameter `Step Height` menentukan seberapa tinggi agent dapat naik secara otomatis, misalnya melewati tangga kecil, tepi platform, atau perubahan ketinggian minor. Jika `Step Height` terlalu kecil, agent mungkin berhenti di depan perubahan ketinggian yang sebenarnya bisa dilewati. Sebaliknya, jika terlalu besar, agent bisa naik ke area yang seharusnya tidak bisa ditempuh.

Parameter `Max Slope` menentukan batas kemiringan permukaan yang masih dianggap **walkable**. Lereng yang terlalu curam tidak akan dianggap dapat dilalui, meskipun secara visual masih terlihat seperti permukaan tanah. Parameter ini penting agar agent tidak berjalan di dinding miring atau permukaan yang tidak sesuai dengan kemampuan karakter.

Masalah praktisnya cukup jelas. Agent yang terlalu besar tidak bisa melewati pintu atau lorong sempit. Agent yang terlalu kecil bisa melewati celah yang tidak realistis. Slope yang terlalu curam juga tidak akan dianggap bisa dilalui jika melebihi `Max Slope`. Karena itu, NavMesh memperhitungkan ukuran agent saat menentukan area yang dapat dilalui.

Sebelum lanjut, mahasiswa perlu memahami bahwa parameter ini bukan sekadar angka teknis. Nilai `Radius`, `Height`, `Step Height`, dan `Max Slope` harus sesuai dengan desain karakter, proporsi level, dan aturan gameplay. Jika parameter tidak konsisten, agent bisa terlihat menembus objek, berhenti di tempat yang aneh, atau tidak bisa mencapai area yang seharusnya bisa ditempuh.

### Inti yang Harus Ditekankan

- Agent tidak selalu dimodelkan sebagai titik; ukuran fisik memengaruhi area yang bisa dilalui.
- `Radius` dan **clearance** menentukan apakah ruang cukup lebar untuk agent.
- `Height`, `Step Height`, dan `Max Slope` membatasi kemampuan agent secara vertikal dan kemiringan.
- Parameter harus konsisten dengan desain karakter dan level agar perilaku pathfinding realistis.

### Transisi ke Slide Berikutnya

Setelah memahami bagaimana ukuran agent memengaruhi area yang bisa dilalui, kita akan melanjutkan ke konsep berikutnya, yaitu bagaimana NavMesh dapat memberi biaya berbeda pada area tertentu sehingga agent memilih jalur berdasarkan total cost.

---

## Slide 063 - Area Cost pada NavMesh

### Narasi

Pada slide ini kita membahas **Area Cost** pada `NavMesh`. Konsep ini penting karena dalam game, tidak semua area yang bisa dilalui memiliki nilai yang sama bagi agent.

Intuisi praktisnya sederhana: agent tidak selalu memilih jalur terpendek secara jarak. Agent cenderung memilih jalur yang **paling murah secara total cost**, meskipun jalur itu sedikit lebih panjang.

`NavMesh` di Unity dapat membedakan area berdasarkan biaya. Misalnya, area jalan biasa memiliki cost rendah, area lumpur memiliki cost lebih tinggi, dan area bahaya memiliki cost sangat tinggi.

```text
Area: Walkable, Mud, Water, Danger, Road
Cost: low, medium, high, very high, low
```

Potongan di atas menunjukkan bahwa setiap area dapat diberi bobot berbeda. `Walkable` dan `Road` biasanya dipilih karena cost-nya rendah. `Mud` dan `Water` masih mungkin dilalui, tetapi agent akan menghindarinya jika ada alternatif. `Danger` biasanya dihindari kecuali tidak ada jalur lain.

Artinya, perilaku agent dipengaruhi oleh **total cost path**, bukan hanya panjang geometris path. Jika satu jalur pendek tetapi melewati area `Danger`, total cost-nya bisa lebih tinggi daripada jalur yang lebih panjang tetapi melewati `Road` atau `Walkable`.

Konsep ini sangat mirip dengan **weighted graph** pada algoritma `Dijkstra` atau `A*`. Dalam graph berbobot, setiap edge atau node memiliki biaya, dan algoritma mencari path dengan total biaya minimum. Pada `NavMesh`, area dengan cost berbeda berperan seperti bobot pada graph navigasi.

Sebelum lanjut, mahasiswa perlu memahami bahwa **cost bersifat kumulatif**. Semakin panjang area mahal yang dilalui, semakin besar total cost path. Pemahaman ini membantu kita menganalisis mengapa agent memilih path tertentu, mengapa path terlihat tidak optimal, dan bagaimana designer dapat mengarahkan perilaku agent melalui penyesuaian cost.

### Inti yang Harus Ditekankan

- **Area cost** membuat `NavMesh` tidak hanya mencari path terpendek, tetapi path dengan total biaya paling rendah.
- Cost area bersifat **kumulatif**, sehingga jalur yang lebih panjang bisa lebih murah jika melewati area berbiaya rendah.
- Konsep ini setara dengan **weighted graph** pada `Dijkstra` dan `A*`, di mana pilihan path ditentukan oleh bobot, bukan hanya jarak.

### Transisi ke Slide Berikutnya

Setelah memahami bahwa area memiliki cost, langkah berikutnya adalah melihat bagaimana `NavMesh` dapat dipandang sebagai graph dan bagaimana algoritma `A*` memanfaatkan bobot tersebut untuk memilih path.

---

## Slide 064 - Hubungan NavMesh dengan A*

### Narasi

**NavMesh** pada Unity sering terlihat sebagai permukaan navigasi yang dapat di-bake, tetapi secara konseptual ia bekerja seperti **graph navigasi**. Area yang bisa dilalui agent diubah menjadi representasi yang dapat dicari, misalnya node, edge, atau region yang saling terhubung. Dengan kata lain, `NavMesh` bukan hanya visualisasi, melainkan struktur yang memungkinkan algoritma pencarian path menemukan rute dari posisi awal ke tujuan.

Alur utamanya dapat dilihat sebagai berikut:

```text
Area navigasi direpresentasikan sebagai graph
        ↓
Algoritma mencari path
        ↓
Agent mengikuti path
```

Pada tahap pertama, lingkungan game diubah menjadi ruang navigasi yang dapat dianalisis. Pada tahap kedua, algoritma seperti `A*` mencari rute berdasarkan biaya, jarak, dan heuristik. Pada tahap ketiga, hasil pencarian berupa `path` diberikan kepada `agent` untuk diikuti.

Meskipun Unity menyembunyikan detail implementasi internalnya, konsep yang digunakan tetap dekat dengan `A*`. `A*` memilih path dengan mempertimbangkan biaya aktual dari titik awal ke simpul tertentu serta estimasi biaya menuju tujuan. Karena itu, path yang dihasilkan tidak selalu yang paling pendek secara geometris, tetapi yang paling sesuai dengan aturan biaya yang diberikan.

Hal ini penting ketika mahasiswa hanya menggunakan tool. Jika tidak memahami dasar `A*`, mahasiswa cenderung berhenti pada gejala: agent tidak bergerak, path melenceng, atau agent berhenti di area tertentu. Padahal masalahnya bisa berasal dari representasi graph, biaya area, koneksi antar area, atau parameter pencarian.

Dengan memahami `A*` secara manual, mahasiswa dapat:

- memahami mengapa path tertentu dipilih,
- menganalisis kegagalan navigation,
- melakukan debugging,
- membuat custom pathfinding jika diperlukan.

Pemahaman ini juga membantu menghubungkan konsep `cost` yang sudah dibahas sebelumnya dengan perilaku agent. Area dengan cost tinggi akan cenderung dihindari jika ada alternatif yang lebih murah, selama rute tersebut tetap valid dan terjangkau oleh algoritma pencarian.

Sebelum lanjut, mahasiswa perlu memahami bahwa `NavMesh` adalah implementasi praktis, sedangkan `A*` adalah dasar algoritma yang menjelaskan bagaimana path ditemukan. Keduanya saling melengkapi: `NavMesh` memudahkan penggunaan di Unity, sementara `A*` memberi kemampuan untuk menganalisis dan mengembangkan perilaku navigasi secara lebih sadar.

### Inti yang Harus Ditekankan

- `NavMesh` dapat dipahami sebagai representasi navigasi yang mirip **graph**, meskipun Unity menyembunyikan detail internalnya.
- Alur utamanya adalah: area navigasi menjadi graph, algoritma mencari `path`, lalu `agent` mengikuti `path`.
- Memahami `A*` manual membantu mahasiswa menganalisis pemilihan path, kegagalan navigation, dan kebutuhan custom pathfinding.

### Transisi ke Slide Berikutnya

Setelah memahami hubungan konseptual antara `NavMesh` dan `A*`, kita akan membandingkan langsung penggunaan `Manual A*` dengan `Unity NavMesh` dari sisi tujuan belajar, representasi, kontrol, kesulitan, dan kecocogannya untuk praktikum maupun implementasi game.

---

## Slide 065 - Unity: Manual A* vs NavMesh

### Narasi

Pada slide ini, kita membandingkan dua cara yang sering dipakai dalam pengembangan game Unity: **Manual `A*`** dan **Unity `NavMesh`**. Keduanya sama-sama mendukung kemampuan agen untuk bergerak dari satu titik ke titik lain, tetapi posisinya dalam proses pembelajaran dan produksi berbeda.

**Manual `A*`** berarti kita membangun representasi lingkungan secara eksplisit, misalnya berupa `grid` atau `graph`, lalu menerapkan algoritma pencarian jalur seperti `A*` sendiri. Pendekatan ini memberi kontrol sangat tinggi terhadap cara lingkungan direpresentasikan, cara biaya jalur dihitung, dan bagaimana hasil pencarian digunakan oleh agen. Karena itu, pendekatan ini sangat berguna untuk memahami dasar **pathfinding**, bukan sekadar memanggil API.

**Unity `NavMesh`** adalah solusi praktis yang disediakan Unity. Sistem ini membuat **mesh navigasi** dari lingkungan 3D, lalu menyediakan komponen seperti `NavMeshAgent` untuk membantu NPC bergerak mengikuti jalur. Mahasiswa tidak perlu membangun seluruh struktur pencarian dari nol, sehingga lebih mudah digunakan untuk game 3D langsung.

Perbedaan utamanya bukan sekadar “lebih mudah” atau “lebih sulit”, tetapi terletak pada **tujuan pembelajaran**. Manual `A*` melatih mahasiswa memahami mengapa jalur tertentu dipilih, bagaimana `heuristic` memengaruhi pencarian, dan apa yang terjadi ketika lingkungan berubah. `NavMesh` melatih mahasiswa memahami integrasi sistem navigasi ke dalam pipeline produksi, termasuk visualisasi area navigasi dan debugging yang lebih cepat.

Dalam konteks **NPC behavior**, kedua pendekatan ini biasanya tidak berdiri sendiri. Hasil pathfinding dapat menjadi input untuk **FSM**, **behavior tree**, atau **steering behavior**, sehingga NPC tidak hanya tahu ke mana harus bergerak, tetapi juga kapan harus mengejar, menghindari, atau menunggu.

Sebelum lanjut, mahasiswa perlu memahami bahwa memilih manual `A*` atau `NavMesh` bukan soal mana yang lebih benar. Keduanya penting: **`A*`** untuk memahami dasar algoritma, dan **`NavMesh`** untuk implementasi praktis dalam Unity.

### Inti yang Harus Ditekankan

- **Manual `A*`** menekankan pemahaman algoritma, representasi `grid`/`graph`, dan kontrol penuh terhadap pencarian jalur.
- **Unity `NavMesh`** menekankan implementasi praktis, integrasi dengan `NavMeshAgent`, dan kemudahan produksi untuk game 3D.
- Keduanya dapat menjadi bagian dari sistem **NPC behavior** yang lebih besar, seperti FSM, behavior tree, atau steering.

### Transisi ke Slide Berikutnya

Setelah memahami perbedaan pendekatan ini, kita akan melihat contoh skenario game sederhana di mana NPC harus mengejar player di area dengan obstacle.

---

## Slide 066 - Contoh Skenario Game

### Narasi

Pada slide ini kita melihat **contoh skenario game** yang sederhana tetapi penting: sebuah **NPC guard** harus mengejar **player** di area yang memiliki **obstacle**.

```text
NPC ●       ██████
            █    █
            █    █
Player ●    ██████
```

Dalam diagram tersebut, simbol `●` mewakili posisi agen, sedangkan blok `████` mewakili dinding atau area yang tidak bisa dilewati. Intuisi praktisnya adalah: jika NPC hanya bergerak langsung ke posisi player, ia akan bergerak lurus dan menabrak tembok. Perilaku seperti ini membuat NPC terlihat tidak natural dan tidak cocok untuk game yang menuntut navigasi yang meyakinkan.

Tanpa **pathfinding**, perilaku NPC biasanya hanya berupa gerak lurus menuju target. Akibatnya:

- NPC bergerak lurus ke arah player.
- NPC menabrak tembok atau obstacle.
- NPC berhenti, tersangkut, atau bergerak tidak natural.
- Player dapat dengan mudah menghindari NPC hanya dengan memanfaatkan dinding.

Dengan **pathfinding**, NPC tidak lagi bergerak langsung menembus obstacle. Ia mencari rute yang valid di sekitar tembok, lalu mengikuti jalur tersebut hingga mendekati player. Dalam konteks game, ini berarti NPC dapat memutar, menghindari area terlarang, dan tetap terlihat seperti agen yang memahami lingkungan.

Poin penting yang harus dipahami mahasiswa adalah: **pathfinding bukan sekadar membuat NPC bergerak**, tetapi membuat NPC memilih **jalur yang mungkin** berdasarkan lingkungan yang tersedia. Yang penting pada tahap ini adalah adanya posisi target, area yang dapat dilewati, dan area yang menghalangi.

Skenario ini menjadi dasar perilaku **chase** pada NPC guard. Ketika player terdeteksi, NPC tidak cukup hanya tahu posisi player; ia harus menghitung rute menuju player, lalu mengikuti jalur yang dihasilkan. Jika player berpindah posisi, rute dapat perlu diperbarui agar NPC tetap mengejar secara efektif.

Sebelum lanjut ke alur teknis, pastikan mahasiswa memahami tiga hal:

1. **Target** adalah posisi player yang ingin dikejar.
2. **Obstacle** membatasi rute yang dapat diambil.
3. **Pathfinding** menghasilkan urutan langkah atau jalur yang diikuti NPC.

### Inti yang Harus Ditekankan

- **Pathfinding** membuat NPC mampu menghindari obstacle, bukan hanya bergerak lurus ke target.
- Tanpa pathfinding, NPC akan menabrak tembok dan perilakunya tidak natural.
- Dengan pathfinding, NPC mencari rute memutar dan mengikuti jalur menuju player.
- Skenario ini menjadi dasar perilaku **chase** pada NPC guard.
- Mahasiswa harus memahami hubungan antara **posisi target**, **hambatan lingkungan**, dan **jalur yang dihasilkan**.

### Transisi ke Slide Berikutnya

Selanjutnya, kita akan melihat bagaimana skenario chase ini disusun menjadi alur yang lebih sistematis: dari deteksi player, perubahan state, perhitungan path, hingga NPC mengikuti waypoint dan memperbarui rute jika player berpindah.

---

## Slide 067 - Alur Chase dengan Pathfinding

### Narasi

Slide ini menjelaskan **alur chase** ketika NPC sudah mendeteksi player. Fokus utamanya adalah bagaimana deteksi berubah menjadi perilaku navigasi yang benar, bukan sekadar NPC bergerak lurus ke arah player.

Alurnya dapat dibaca sebagai pipeline sederhana:

1. **Player terdeteksi** oleh NPC.
2. Perilaku NPC masuk ke `State = Chase`.
3. Sistem menghitung path menuju posisi player.
4. Path yang dihasilkan berupa rangkaian waypoint, misalnya `W1 → W2 → W3`.
5. NPC bergerak mengikuti waypoint tersebut.
6. Jika player berpindah cukup jauh, path lama tidak lagi cocok, sehingga path dihitung ulang.

Intuisi praktisnya adalah: **chase** membutuhkan dua hal yang bekerja bersama, yaitu **keputusan** untuk memilih state mengejar dan **navigasi** untuk menemukan rute yang bisa dilalui. Tanpa pathfinding, NPC hanya tahu "ke mana" tetapi belum tentu tahu "bagaimana sampai".

Dalam konteks Unity, proses ini sering terlihat sederhana karena `NavMesh` menyediakan API seperti:

```csharp
agent.SetDestination(player.position);
```

Secara permukaan, satu baris ini hanya menetapkan tujuan. Namun secara konsep, di dalamnya tetap terjadi proses pathfinding dan navigation: sistem menentukan rute di NavMesh, menghasilkan waypoint, lalu memandu agent bergerak menuju target.

Yang perlu dipahami mahasiswa adalah bahwa `agent.SetDestination(player.position)` bukan pengganti pemahaman pathfinding. Ia adalah bentuk implementasi praktis. Mahasiswa tetap perlu memahami apa yang terjadi setelah destination ditetapkan: path dihitung, waypoint diikuti, dan path bisa menjadi tidak valid ketika target bergerak atau lingkungan berubah.

Sebelum lanjut, pastikan mahasiswa paham bahwa alur chase ini bersifat dinamis. Path yang benar pada satu detik bisa menjadi tidak optimal pada detik berikutnya, terutama jika player bergerak cepat atau berpindah area.

### Inti yang Harus Ditekankan

- **Chase** adalah kombinasi antara perubahan state dan eksekusi path, bukan hanya gerakan lurus ke target.
- `State = Chase` menandai bahwa NPC sudah memilih perilaku mengejar, lalu sistem navigation mengambil alih untuk mencari rute.
- `W1 → W2 → W3` menunjukkan bahwa path biasanya berupa **waypoint** yang diikuti agent, bukan satu titik tujuan langsung.
- `agent.SetDestination(player.position)` adalah API praktis di Unity, tetapi konsepnya tetap pathfinding, waypoint, dan validitas path.
- Jika player berpindah jauh, path lama perlu diperiksa atau dihitung ulang agar NPC tidak mengejar rute yang sudah tidak relevan.

### Transisi ke Slide Berikutnya

Setelah alur dasar chase dipahami, pertanyaan berikutnya adalah kapan path harus dihitung ulang dan seberapa sering hal itu boleh dilakukan. Slide berikutnya akan membahas **Repathing** sebagai proses memperbarui path ketika kondisi berubah.

---

## Slide 068 - Repathing

### Narasi

**Repathing** adalah proses menghitung ulang path ketika kondisi lingkungan atau tujuan berubah. Dalam game, NPC tidak cukup hanya sekali menghitung jalur; ia harus menyesuaikan diri karena player bergerak, obstacle berubah, atau jalur yang sudah dipilih menjadi tidak valid.

Intuisi praktisnya sederhana: path yang bagus pada satu detik bisa menjadi buruk pada detik berikutnya. Jika target berpindah jauh, menghitung ulang path membantu agent tetap mengejar secara efisien. Jika obstacle baru muncul, path lama bisa menabrak dinding atau melewati area yang tidak bisa dilewati.

Kondisi yang biasanya memicu repathing antara lain:

- target bergerak,
- obstacle berubah,
- agent keluar dari path,
- path lama tidak valid,
- kondisi terrain berubah.

Namun, repathing tidak boleh dilakukan terlalu sering. Setiap perhitungan path membutuhkan waktu CPU, terutama jika environment besar atau banyak agent. Jika setiap frame kita hitung ulang path, performa game bisa turun dan perilaku NPC menjadi tidak stabil.

Contoh strategi yang umum digunakan:

```text
Hitung ulang path setiap 0.5 detik
atau jika target berpindah cukup jauh
```

Strategi ini menggabungkan dua pemicu: waktu dan jarak. Interval waktu memastikan agent tetap memperbarui jalur secara berkala, sedangkan ambang jarak mencegah perhitungan yang tidak perlu ketika target hanya bergerak sedikit. Dalam implementasi, ini sering dikaitkan dengan pemanggilan `SetDestination` atau mekanisme pathfinding internal, tetapi yang penting dipahami adalah kapan path harus dihitung ulang dan kapan cukup mengikuti path lama.

Sebelum lanjut, mahasiswa perlu memahami bahwa repathing adalah trade-off antara responsivitas dan biaya komputasi. Path yang terlalu jarang dihitung membuat NPC tampak lambat atau kaku, sedangkan path yang terlalu sering dihitung membuat sistem berat.

### Inti yang Harus Ditekankan

- **Repathing** adalah perhitungan ulang path karena target, obstacle, atau kondisi lingkungan berubah.
- Repathing diperlukan agar NPC tetap bergerak menuju tujuan yang valid dan efisien.
- Repathing terlalu sering dapat membebani performa, terutama pada scene dengan banyak agent.
- Strategi praktis biasanya menggunakan kombinasi interval waktu dan ambang jarak perpindahan target.
- Mahasiswa harus memahami trade-off antara responsivitas perilaku dan biaya komputasi pathfinding.

### Transisi ke Slide Berikutnya

Setelah memahami kapan path harus dihitung ulang, langkah berikutnya adalah bagaimana kita melihat dan memeriksa proses pathfinding secara visual. Pada slide berikutnya, kita akan membahas debugging pathfinding untuk memahami start node, goal node, open set, closed set, final path, cost, heuristic, waypoint, dan destination agent.

---

## Slide 069 - Debugging Pathfinding

### Narasi

Pada slide ini, kita beralih dari konsep **repathing** ke cara memeriksa apakah pathfinding benar-benar berjalan sesuai harapan. Path yang terlihat benar di layar belum tentu benar secara algoritma. Mahasiswa perlu bisa melihat proses pencarian, bukan hanya hasil akhirnya.

Hal pertama yang perlu divisualisasikan adalah elemen inti dari pencarian path:

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

Setiap elemen ini memberi informasi berbeda. `Start node` dan `goal node` menunjukkan titik awal dan tujuan. `Open set` adalah kandidat node yang masih dievaluasi, sedangkan `closed set` adalah node yang sudah diproses. `Final path` adalah hasil akhir setelah reconstruct. `Cost value` dan `heuristic value` membantu memahami mengapa algoritma memilih node tertentu. `Waypoint` dan `agent destination` menghubungkan hasil pathfinding dengan pergerakan NPC di scene.

Dalam Unity, visualisasi ini bisa dibuat dengan bantuan beberapa API sederhana:

```csharp
Debug.DrawLine()
Gizmos.DrawSphere()
Gizmos.DrawWireCube()
```

`Debug.DrawLine()` berguna untuk menggambar garis antar node, misalnya path final atau edge yang sedang dievaluasi. `Gizmos.DrawSphere()` cocok untuk menampilkan node, waypoint, atau posisi agent. `Gizmos.DrawWireCube()` dapat dipakai untuk menandai sel grid, obstacle, atau area yang tidak bisa dilalui. `Gizmos` sangat membantu saat memeriksa scene di editor, sedangkan `Debug.DrawLine()` bisa dipakai saat runtime.

Urutan visualnya bisa mengikuti alur algoritma: tampilkan `start node` dan `goal node` terlebih dahulu, lalu perbarui warna `open set` dan `closed set` setiap iterasi pencarian, gambar `final path` setelah reconstruct, dan terakhir tampilkan `waypoint` serta `agent destination` yang akan diikuti agent.

Cara praktisnya adalah memberi warna berbeda untuk setiap bagian. Misalnya, `open set` bisa ditampilkan dengan warna cyan, `closed set` dengan biru, `final path` dengan gold, dan `start` serta `goal` dengan warna yang lebih terang. Jika path tidak muncul atau melintasi obstacle, visualisasi akan membantu mahasiswa melihat apakah masalah ada pada grid, cost, heuristic, atau proses reconstruct path.

Intuisi pentingnya adalah: debugging pathfinding bukan hanya memeriksa apakah agent sampai tujuan. Mahasiswa perlu memahami apakah pencarian berhenti di node yang benar, apakah `open set` berhenti pada kondisi yang benar, apakah `closed set` mencegah node diproses ulang, dan apakah path yang dihasilkan konsisten dengan cost serta heuristic.

Sebelum lanjut ke kesalahan umum, pastikan mahasiswa paham bahwa visual debug adalah alat diagnostik. Jika path terlihat aneh, langkah pertama adalah membandingkan apa yang digambar dengan apa yang seharusnya dilakukan algoritma.

### Inti yang Harus Ditekankan

- **Debugging pathfinding** membantu melihat proses pencarian, bukan hanya hasil akhir.
- Visualisasi penting untuk `start node`, `goal node`, `open set`, `closed set`, `final path`, `cost value`, `heuristic value`, `waypoint`, dan `agent destination`.
- Di Unity, `Debug.DrawLine()`, `Gizmos.DrawSphere()`, dan `Gizmos.DrawWireCube()` dapat dipakai untuk menampilkan node, path, dan obstacle secara intuitif.
- Warna dan bentuk yang konsisten membantu mahasiswa membedakan node yang masih dievaluasi, node yang sudah diproses, dan path final.

### Transisi ke Slide Berikutnya

Setelah kita tahu apa yang harus divisualisasikan, langkah berikutnya adalah mengenali kesalahan umum yang sering membuat pathfinding tampak salah. Slide berikutnya akan membahas kasus-kasus seperti node obstacle yang masih dianggap walkable, path yang tidak dibalik, hingga agent yang tidak mengikuti waypoint.

---

## Slide 070 - Kesalahan Umum Pathfinding

### Narasi

Setelah slide sebelumnya membahas cara memvisualisasikan proses pencarian jalur, slide ini membantu mahasiswa melihat sisi praktisnya: mengapa jalur yang seharusnya benar bisa tetap salah. Kesalahan pathfinding jarang hanya berasal dari satu titik; biasanya muncul dari data grid, logika algoritma, atau konfigurasi runtime agent.

Dalam konteks NPC, pathfinding adalah rantai keputusan: **node**, **cost**, **heuristic**, **reconstruction**, lalu **waypoint execution**. Jika salah satu rantai terputus, agent bisa berhenti, menembus dinding, atau bergerak ke arah yang salah.

Sepuluh kesalahan umum berikut sebaiknya dibaca sebagai daftar pemeriksaan, bukan sekadar daftar teori.

1. **Node obstacle tetap dianggap walkable**  
   Ini terjadi ketika data grid atau tile tidak menandai node yang seharusnya terhalang. Akibatnya, algoritma bisa memilih jalur yang melewati dinding, batu, atau area yang tidak boleh dimasuki.

2. **Neighbor diagonal menembus sudut obstacle**  
   Jika grid mengizinkan gerakan diagonal, agent bisa “memotong sudut” yang seharusnya tertutup. Masalah ini sering terlihat kecil, tetapi sangat memengaruhi rasa realistis pergerakan NPC.

3. **Cost tidak diperbarui dengan benar**  
   Nilai `gScore`, `fScore`, atau total cost yang salah membuat algoritma memilih jalur yang tidak optimal. Agent mungkin tetap sampai ke tujuan, tetapi lewat jalur yang lebih panjang atau tidak wajar.

4. **`cameFrom` tidak disimpan**  
   Tanpa `cameFrom`, algoritma tahu node mana yang terpilih, tetapi tidak bisa melacak jalur kembali dari goal ke start. Ini membuat reconstruction path gagal.

5. **Path tidak dibalik setelah reconstruct**  
   Banyak algoritma membangun path dari goal menuju start. Jika urutan tidak dibalik, agent akan bergerak mundur atau menuju waypoint yang salah.

6. **Heuristic tidak sesuai jenis movement**  
   Heuristic untuk gerakan 4 arah berbeda dengan gerakan 8 arah. Jika heuristic terlalu agresif atau tidak konsisten dengan cost, jalur bisa menjadi tidak optimal atau bahkan tidak valid.

7. **Agent tidak berpindah ke waypoint berikutnya**  
   Path bisa benar, tetapi agent tetap diam jika logika update tidak memeriksa waypoint aktif, jarak arrival, atau kondisi `isStopped`.

8. **NavMesh belum di-bake**  
   Di Unity, `NavMeshSurface` harus di-bake agar data navigasi tersedia. Tanpa bake, `NavMeshAgent` tidak punya permukaan navigasi untuk bergerak.

9. **Layer untuk NavMeshSurface salah**  
   Jika layer geometry tidak termasuk dalam `NavMeshSurface`, area tersebut tidak akan menjadi bagian dari NavMesh. Akibatnya, agent tidak bisa melewati area yang seharusnya bisa dilalui.

10. **NavMeshAgent tidak berada di atas NavMesh**  
    `NavMeshAgent` membutuhkan posisi awal yang valid di atas NavMesh. Jika agent berada di luar area navigasi, agent tidak bisa bergerak atau tidak bisa menerima destination.

Kesalahan-kesalahan ini menunjukkan bahwa pathfinding bukan hanya soal algoritma. Mahasiswa perlu memahami bahwa jalur yang benar harus didukung oleh data yang benar, state yang benar, dan eksekusi agent yang benar.

### Inti yang Harus Ditekankan

- Kesalahan pathfinding bisa berasal dari **data grid**, **logika algoritma**, atau **konfigurasi agent**.
- `cameFrom`, `gScore`, `fScore`, dan urutan waypoint adalah bagian kritis yang sering terlewat.
- Di Unity, cek `NavMeshSurface`, layer, proses bake, dan posisi `NavMeshAgent`.
- Debug visual membantu, tetapi harus diikuti pemeriksaan logika pathfinding secara sistematis.

### Transisi ke Slide Berikutnya

Dengan daftar ini, mahasiswa memiliki checklist untuk mendiagnosis masalah pathfinding secara lebih terarah. Selanjutnya, kita akan fokus pada salah satu kesalahan yang paling halus namun sering muncul: **diagonal corner cutting**.

---

## Slide 071 - Diagonal Corner Cutting

### Narasi

Pada slide sebelumnya kita sudah melihat beberapa kesalahan umum pathfinding. Salah satu yang sering muncul di grid adalah **diagonal corner cutting**.

Intuisinya sederhana: jika agent boleh bergerak diagonal, kita tidak boleh hanya mengecek apakah sel tujuan bebas. Kita juga harus memastikan jalur diagonal tidak "memotong" sudut obstacle.

Contoh:

```text
A # 
# B
```

Pada grid ini, sel `A` dan sel `B` bebas, tetapi dua sel di samping diagonalnya berisi obstacle `#`. Jika agent bergerak dari `A` ke `B` secara diagonal, secara visual agent akan melewati sudut yang tertutup.

Masalah ini disebut:

```text
corner cutting
```

Dalam implementasi grid, kesalahan ini biasanya terjadi karena aturan neighbor diagonal terlalu longgar. Agent dianggap bisa melangkah ke diagonal hanya karena sel diagonal bebas, padahal sisi kiri dan kanan langkah diagonal tersebut terhalang.

Solusinya adalah membuat aturan neighbor yang benar:

- larang diagonal jika dua sisi penghalang tertutup,
- gunakan `collision check` pada bentuk agent, misalnya capsule atau circle,
- gunakan grid neighbor rule yang konsisten dengan model pergerakan game.

Untuk grid sederhana, aturan yang umum adalah: diagonal hanya diizinkan jika kedua sel ortogonal yang bersinggungan dengan langkah diagonal tersebut juga walkable. Dengan cara ini, edge `A` ke `B` tidak akan dibuat pada graph pathfinding.

Hal penting yang harus dipahami mahasiswa sebelum lanjut: pathfinding bukan hanya soal memilih algoritma seperti `A*`, tetapi juga soal membangun graph yang benar. Jika graph sudah salah karena edge diagonal tidak valid, hasil pathfinding akan terlihat tidak wajar meskipun algoritmanya benar.

### Inti yang Harus Ditekankan

- **Corner cutting** terjadi ketika agent memotong sudut obstacle melalui langkah diagonal.
- Cek sel tujuan saja tidak cukup; perlu mengecek dua sel sisi diagonal.
- Aturan grid neighbor yang benar mencegah path yang tidak realistis.
- `collision check` membantu jika model agent bukan sekadar titik pada grid.
- Graph pathfinding harus merepresentasikan pergerakan yang benar-benar mungkin dilakukan agent.

### Transisi ke Slide Berikutnya

Setelah aturan grid dan diagonal diperbaiki, kita perlu memilih pendekatan pathfinding yang sesuai dengan jenis game. Pada slide berikutnya, kita akan melihat perbedaan kebutuhan pathfinding untuk game tile-based, 3D third-person, RTS, dan puzzle game.

---

## Slide 072 - Pathfinding untuk Game Berbeda

### Narasi

Setelah memahami aturan grid dan masalah seperti corner cutting, kita masuk ke pertanyaan desain yang lebih penting: teknik pathfinding mana yang paling cocok untuk jenis game tertentu. Tidak ada satu algoritma yang selalu unggul; pilihan biasanya ditentukan oleh representasi dunia, jumlah agent, biaya gerakan, dan seberapa dinamis lingkungan.

Untuk **game tile-based**, dunia biasanya direpresentasikan sebagai **grid**. Karena struktur grid sederhana, teknik seperti `BFS`, `Dijkstra`, dan `A*` sangat umum digunakan. `BFS` cocok jika setiap langkah memiliki biaya sama, `Dijkstra` cocok jika biaya antar sel berbeda, dan `A*` cocok jika kita ingin pencarian lebih cepat dengan bantuan heuristik. Jenis game seperti top-down, roguelike, turn-based strategy, atau puzzle berbasis papan sering menggunakan pendekatan ini.

Untuk **game 3D third-person**, representasi grid 2D biasanya kurang natural. Di sini, `NavMesh` menjadi pilihan yang lebih sesuai karena menggambarkan permukaan yang bisa dilalui dalam ruang 3D. Komponen seperti `NavMeshAgent` dapat mengikuti path yang dihasilkan dari `NavMesh`, sementara `local avoidance` membantu agent menghindari tabrakan dengan agent lain atau obstacle kecil yang bergerak. Dengan pendekatan ini, karakter dapat bergerak lebih natural di lingkungan 3D tanpa harus menghitung grid yang sangat detail.

Untuk **RTS**, tantangan utamanya adalah jumlah agent yang sangat banyak. Jika setiap unit menghitung path secara individual, biaya komputasi bisa menjadi besar. Karena itu, teknik seperti `flow field`, `hierarchical pathfinding`, dan `group movement` sering digunakan. `Flow field` dapat menghasilkan arah gerak dari banyak titik menuju target, sehingga banyak unit dapat bergerak secara efisien. `Hierarchical pathfinding` membantu membagi pencarian menjadi level yang lebih besar dan lebih kecil, sedangkan `group movement` memungkinkan sekumpulan unit bergerak sebagai satu kelompok.

Untuk **puzzle game**, masalah pathfinding sering bukan soal karakter berjalan di peta, tetapi soal mencari urutan langkah yang valid. Dalam kasus seperti ini, `BFS` dan `graph search` sangat berguna karena state dapat dimodelkan sebagai node pada graph, dan transisi antar state mewakili langkah yang diizinkan. Pendekatan ini membantu menemukan solusi terpendek atau solusi yang memenuhi aturan puzzle.

Poin penting yang harus dipahami mahasiswa adalah: sebelum memilih algoritma, kita harus menentukan representasi dunia dan model biaya. Grid, graph, dan `NavMesh` menghasilkan cara berpikir yang berbeda. Selain itu, jumlah agent, ukuran map, dan perubahan obstacle akan memengaruhi teknik yang paling praktis. Pemahaman ini menjadi dasar sebelum membahas masalah performa dan optimasi.

### Inti yang Harus Ditekankan

- **Pilihan pathfinding harus disesuaikan dengan representasi dunia**: grid, graph, atau `NavMesh`.
- **Tile-based dan puzzle** sering cocok dengan `BFS`, `Dijkstra`, `A*`, atau `graph search`.
- **3D third-person** cocok dengan `NavMesh`, `NavMeshAgent`, dan `local avoidance`.
- **RTS** membutuhkan `flow field`, `hierarchical pathfinding`, dan `group movement` untuk banyak agent.

### Transisi ke Slide Berikutnya

Setelah kita memahami teknik pathfinding yang sesuai untuk berbagai jenis game, langkah berikutnya adalah melihat mengapa perhitungan path bisa menjadi mahal dan strategi apa yang digunakan untuk menjaga performa.

---

## Slide 073 - Kompleksitas dan Performa

### Narasi

Pada slide ini, kita beralih dari **pilihan algoritma** ke **biaya eksekusi** pathfinding di game nyata. Intuisi pentingnya sederhana: pathfinding yang benar secara matematis belum tentu cocok untuk runtime game jika terlalu lambat.

Pathfinding bisa menjadi mahal ketika:

- **Map sangat besar**, sehingga ruang pencarian menjadi luas.
- **Agent sangat banyak**, sehingga banyak NPC melakukan pencarian jalur secara bersamaan.
- **Path dihitung setiap frame**, padahal posisi atau target belum berubah signifikan.
- **Grid terlalu detail**, sehingga jumlah node dan edge yang diperiksa meningkat drastis.
- **Dynamic obstacle terlalu sering berubah**, sehingga path yang sudah dihitung cepat tidak valid.

Dalam konteks NPC, pathfinding biasanya dipanggil ketika agen memasuki state tertentu, misalnya `Chase`, `MoveTo`, atau `Patrol`. Jika pencarian jalur memakan waktu terlalu lama, perilaku NPC menjadi tidak responsif, gerakan terlihat melompat, atau frame rate turun.

Strategi optimasi yang perlu dipahami:

- **Jangan hitung path setiap frame.** Hitung ulang hanya ketika target berubah, obstacle menghalangi, atau path sudah tidak valid.
- **Gunakan grid resolution yang wajar.** Grid yang terlalu halus meningkatkan akurasi, tetapi juga meningkatkan biaya pencarian.
- **Cache path jika memungkinkan.** Simpan path untuk pasangan start-goal yang sama atau untuk area yang tidak berubah.
- **Batasi area pencarian.** Jangan selalu mencari di seluruh map; cukup cari di region yang relevan dengan NPC.
- **Gunakan hierarchical pathfinding.** Cari jalur pada level kasar terlebih dahulu, lalu detailkan pada level lokal.
- **Gunakan `NavMesh` untuk world 3D.** `NavMesh` membantu representasi area yang bisa dilewati tanpa harus membangun grid yang sangat padat.

Setiap strategi ini pada dasarnya adalah **trade-off** antara akurasi, responsivitas, dan biaya komputasi. Pathfinding yang baik untuk game bukan hanya yang menemukan jalur terpendek, tetapi juga yang cukup cepat untuk dijalankan bersama sistem lain seperti decision making dan steering.

Sebelum lanjut, mahasiswa perlu memahami bahwa pathfinding adalah bagian dari alur perilaku NPC yang lebih besar. Memahami biaya pathfinding akan membantu mahasiswa memilih pendekatan yang realistis saat membangun NPC yang stabil dan efisien.

### Inti yang Harus Ditekankan

- Pathfinding yang benar belum tentu efisien; **biaya runtime** sering menjadi faktor penentu.
- Hindari menghitung path setiap frame; gunakan replan hanya ketika kondisi berubah.
- Pilih resolusi grid, area pencarian, dan representasi world yang sesuai dengan skala game.
- `NavMesh` dan hierarchical pathfinding adalah cara penting untuk menjaga performa pada map besar atau world 3D.

### Transisi ke Slide Berikutnya

Setelah memahami cara menjaga pathfinding tetap efisien, kita akan melihat bagaimana pathfinding diintegrasikan dengan alur perilaku NPC yang lebih utuh pada slide berikutnya.

---

## Slide 074 - Integrasi dengan Praktikum 2 dan 3

### Narasi

Slide ini menunjukkan bagaimana kemampuan yang sudah dibangun di praktikum sebelumnya dirangkai menjadi perilaku NPC yang lebih utuh.

Di praktikum 2, NPC sudah memiliki kemampuan dasar untuk **melihat** pemain dan mengambil keputusan sederhana, misalnya masuk ke state `Chase`.

```text
NPC dapat melihat dan memutuskan Chase.
```

Artinya, tahap ini masih berada pada level **perception** dan **decision making**: NPC mengetahui ada target, lalu memilih aksi.

Di praktikum 3, NPC sudah dapat bergerak lebih halus menggunakan **steering**.

```text
NPC dapat bergerak dengan steering.
```

Steering membantu NPC menghindari rintangan lokal, menjaga jarak, atau bergerak menuju titik terdekat, tetapi belum tentu menemukan jalur global yang benar-benar efisien.

Praktikum 4 melengkapi dua kemampuan tersebut dengan **pathfinding**.

```text
NPC dapat mencari jalur menuju target.
```

Dengan pathfinding, NPC tidak hanya bergerak lurus ke target, tetapi dapat mencari rute yang melewati area `walkable` dan menghindari obstacle global.

Jika ketiga kemampuan ini digabungkan, alur perilaku NPC menjadi seperti berikut:

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

Alur ini penting karena menunjukkan pemisahan tanggung jawab:

1. **See Player** — NPC mendeteksi target, misalnya berdasarkan jarak atau area sensor.
2. **Decide Chase** — sistem keputusan memilih aksi `Chase`.
3. **Find Path** — algoritma pathfinding menghitung rute menuju target.
4. **Follow Path** — NPC mengikuti path yang dihasilkan.
5. **Avoid Local Obstacles** — steering menangani rintangan kecil yang muncul di sekitar NPC.

Pemisahan ini membuat sistem lebih mudah diuji dan dikembangkan. Jika NPC tidak mengejar, kita periksa tahap `See Player` atau `Decide Chase`. Jika NPC bergerak tetapi tidak menemukan rute, kita periksa `Find Path`. Jika NPC tersangkut di objek kecil, kita periksa `Avoid Local Obstacles`.

Dalam konteks Unity, pola ini sering muncul pada NPC yang menggunakan `NavMeshAgent` atau sistem pathfinding lain: keputusan perilaku menentukan tujuan, pathfinding menentukan rute, dan steering/agent handling mengatur gerak lokal.

Sebelum lanjut ke praktikum 4, mahasiswa perlu memahami bahwa **pathfinding bukan satu-satunya bagian dari navigasi**. Pathfinding menjawab pertanyaan “rute mana yang harus ditempuh?”, sedangkan steering dan decision making menjawab “kapan NPC bergerak?” dan “bagaimana NPC bergerak secara halus?”.

### Inti yang Harus Ditekankan

- **Perception, decision, pathfinding, dan steering** adalah lapisan perilaku NPC yang saling melengkapi.
- `Chase` adalah keputusan perilaku, bukan pengganti pathfinding.
- `Find Path` menghasilkan rute global, sedangkan `Avoid Local Obstacles` menangani rintangan lokal.
- Pemisahan alur memudahkan debugging: masalah deteksi, keputusan, rute, dan gerak lokal dapat diperiksa secara terpisah.

### Transisi ke Slide Berikutnya

Setelah memahami bagaimana praktikum 2 dan 3 menyatu dengan pathfinding, kita akan masuk ke gambaran praktikum 4, yaitu implementasi pathfinding sederhana dan penggunaan NavMesh pada scene 3D.

---

## Slide 075 - Gambaran Praktikum 4

### Narasi

Pada slide ini, kita membangun gambaran besar **Praktikum 4** sebelum masuk ke langkah teknis. Praktikum ini berfokus pada **pathfinding** dan **navigation**, yaitu kemampuan NPC untuk menentukan rute menuju target. Setelah sebelumnya NPC sudah dapat melihat pemain, memutuskan `Chase`, dan bergerak dengan steering, praktikum ini menambahkan lapisan baru: NPC tidak hanya bergerak ke arah target, tetapi juga mencari jalur yang valid di lingkungan.

Praktikum 4 terdiri dari dua bagian utama:

- **Bagian 1 — A\* Sederhana**: mahasiswa mengimplementasikan `A*` pada grid sederhana.
- **Bagian 2 — Unity NavMesh**: mahasiswa menggunakan NavMesh untuk membuat NPC bergerak menuju target di scene 3D.

Pada **A\* Sederhana**, mahasiswa akan membuat grid, menentukan `walkable` dan `obstacle`, menetapkan `start` dan `goal`, menghitung path, lalu menampilkan path di scene. Alur ini penting karena membantu mahasiswa memahami bagaimana lingkungan game diubah menjadi struktur yang dapat dicari jalurnya.

```text
grid → walkable/obstacle → start/goal → A* → path visualizer
```

Pada **Unity NavMesh**, mahasiswa tidak membangun grid manual, tetapi menggunakan sistem navigasi Unity. Alurnya dimulai dari `bake NavMesh`, memasang `NavMeshAgent`, memanggil `SetDestination`, mengatur obstacle, lalu mengamati parameter agent.

```csharp
agent.SetDestination(target.position);
```

Perintah `SetDestination` memberi tahu `NavMeshAgent` titik tujuan yang harus dicapai. Setelah itu, Unity akan mengatur pergerakan agent di atas NavMesh. Mahasiswa perlu memperhatikan parameter seperti kecepatan, radius, dan perilaku agent ketika target berubah atau obstacle menghalangi.

Detail langkah teknis akan dibahas pada modul praktikum terpisah. Oleh karena itu, pada slide ini mahasiswa cukup memahami dua jalur pembelajaran: **A\*** untuk memahami pencarian jalur secara eksplisit, dan **NavMesh** untuk melihat implementasi navigasi praktis di Unity.

### Inti yang Harus Ditekankan

- Praktikum 4 memiliki dua fokus utama: **A\* pada grid sederhana** dan **Unity NavMesh**.
- Pada `A*`, mahasiswa harus memahami konsep `walkable`, `obstacle`, `start`, `goal`, dan visualisasi path.
- Pada NavMesh, mahasiswa perlu memahami alur `bake NavMesh`, `NavMeshAgent`, `SetDestination`, obstacle, dan parameter agent.
- `A*` memberi pemahaman konseptual tentang pencarian jalur, sedangkan NavMesh memberi implementasi praktis di scene 3D.

### Transisi ke Slide Berikutnya

Selanjutnya, kita akan melihat contoh scene untuk praktikum A*, yaitu grid sederhana beserta komponen yang akan digunakan untuk menampilkan jalur dari `start` ke `goal`.

---

## Slide 076 - Gambaran Scene Praktikum A*

### Narasi

Slide ini memperlihatkan **contoh scene** untuk praktikum `A*` sederhana. Tujuannya bukan langsung membuat game 3D yang kompleks, tetapi menyiapkan lingkungan minimal agar mahasiswa bisa melihat bagaimana **pathfinding** bekerja pada grid.

```text
S . . . .
. # # . .
. . . . .
. # . # .
. . . . G
```

Pada grid tersebut, `S` adalah **start**, `G` adalah **goal**, `.` adalah sel yang bisa dilalui, dan `#` adalah **obstacle**. Mahasiswa dapat membaca scene ini sebagai peta kecil: agent harus mencari urutan sel dari `S` ke `G` tanpa melewati `#`.

Komponen utama yang perlu dipahami adalah:

- **`grid manager`**: mengelola ukuran grid, koordinat sel, dan status **walkable** atau **obstacle**.
- **`node class`**: merepresentasikan satu sel grid, biasanya menyimpan posisi, biaya, dan hubungan ke node tetangga.
- **`A* pathfinder`**: menjalankan pencarian jalur dari start ke goal.
- **`obstacle marker`**: menandai sel atau objek yang tidak boleh dilewati.
- **`path visualizer`**: menampilkan hasil jalur, misalnya garis atau highlight pada sel.
- **`agent follower`**: memindahkan agent mengikuti jalur yang sudah dihitung.

Alur kerja scene ini cukup sederhana:

1. Grid dibuat dan status setiap sel ditentukan.
2. `start` dan `goal` dipilih.
3. `A* pathfinder` menghitung urutan node berdasarkan biaya dan **heuristic**.
4. `path visualizer` menampilkan jalur, dan `agent follower` dapat digunakan untuk melihat agent bergerak mengikuti jalur tersebut.

Yang penting diperhatikan adalah **hubungan antara obstacle dan path**. Jika posisi `#` diubah, jalur yang dihasilkan harus berubah. Ini membantu mahasiswa memahami bahwa pathfinding bukan sekadar garis lurus dari start ke goal, tetapi proses pencarian yang mempertimbangkan lingkungan.

Sebelum lanjut ke scene 3D, mahasiswa perlu memastikan bahwa scene grid ini sudah menghasilkan jalur yang benar, mudah dibaca, dan responsif terhadap perubahan obstacle.

### Inti yang Harus Ditekankan

- Scene `A*` adalah **lingkungan minimal** untuk menguji pathfinding pada grid.
- `S`, `G`, `.`, dan `#` masing-masing merepresentasikan start, goal, walkable, dan obstacle.
- Komponen penting meliputi `grid manager`, `node class`, `A* pathfinder`, `obstacle marker`, `path visualizer`, dan `agent follower`.
- Output utama adalah jalur yang terlihat jelas dan dapat dibandingkan ketika obstacle berubah.

### Transisi ke Slide Berikutnya

Setelah memahami scene grid `A*`, kita akan beralih ke scene Unity NavMesh, di mana NPC bergerak di lingkungan 3D menggunakan `NavMeshAgent` dan target yang dapat berpindah.

---

## Slide 077 - Gambaran Scene Praktikum NavMesh

### Narasi

Slide ini memperlihatkan **gambaran scene praktikum NavMesh** di Unity. Pada scene ini, pergerakan NPC tidak lagi dibatasi oleh grid kotak-kotak seperti pada praktikum A*, melainkan dilakukan di atas permukaan navigasi yang lebih mendekati bentuk level nyata.

```text
┌──────────────────────────────┐
│ NPC ●       Wall             │
│             █████            │
│                              │
│                    Player ●  │
└──────────────────────────────┘
```

Dari diagram sederhana tersebut, kita dapat melihat tiga unsur utama: **NPC** sebagai agen yang bergerak, **Wall** sebagai obstacle, dan **Player** sebagai target yang ingin dicapai. Posisi NPC berada di sisi kiri, sedangkan Player berada di sisi kanan. Dinding di tengah memaksa NPC mencari jalur yang melewati area yang tersedia, bukan bergerak lurus menembus objek.

Komponen scene ini terdiri dari:

- **Ground**, yaitu permukaan dasar yang dapat dilalui.
- **Obstacle**, yaitu dinding atau benda besar yang menghalangi jalur.
- **NPC dengan `NavMeshAgent`**, yaitu komponen yang membuat NPC mampu bergerak mengikuti permukaan navigasi.
- **Target/player**, yaitu objek yang menjadi tujuan pergerakan NPC.
- **`NavMeshSurface`**, yaitu komponen yang membantu membentuk permukaan navigasi dari geometri scene.

Alur kerja scene ini dapat dipahami sebagai berikut:

1. Scene memiliki geometri berupa ground dan obstacle.
2. `NavMeshSurface` memproses geometri tersebut menjadi permukaan navigasi.
3. `NavMeshAgent` pada NPC menggunakan permukaan navigasi tersebut untuk menentukan jalur.
4. NPC bergerak menuju target.
5. Jika target berpindah, jalur NPC diperbarui secara dinamis.

Output yang diharapkan dari praktikum ini adalah NPC dapat mencari jalan menuju target, tidak menabrak obstacle besar, dan tetap menyesuaikan path ketika posisi target berubah. Mahasiswa perlu memperhatikan bahwa kualitas pergerakan NPC sangat bergantung pada bentuk permukaan, ukuran NPC, dan penempatan obstacle.

Sebelum lanjut, hal penting yang harus dipahami adalah bahwa **NavMesh** bekerja sebagai permukaan navigasi, bukan sekadar grid. Dengan pemahaman ini, mahasiswa dapat melihat mengapa NPC mampu bergerak lebih natural di level 3D dibandingkan pendekatan grid sederhana.

### Inti yang Harus Ditekankan

- **NavMesh** adalah permukaan navigasi yang digunakan NPC untuk bergerak di scene.
- `NavMeshAgent` membuat NPC mampu mencari dan mengikuti jalur menuju target.
- `NavMeshSurface` membantu membentuk permukaan navigasi dari geometri scene.
- Obstacle memengaruhi jalur, tetapi NPC tetap dapat mencari rute yang valid.
- Path NPC dapat berubah secara dinamis ketika target berpindah.

### Transisi ke Slide Berikutnya

Setelah memahami gambaran scene praktikum NavMesh, langkah berikutnya adalah mengenal istilah-istilah Unity yang akan sering digunakan dalam modul praktikum dan proyek Game Cerdas.

---

## Slide 078 - Istilah Unity yang Harus Dipahami

### Narasi

Setelah melihat gambaran scene praktikum, mahasiswa perlu mengenali istilah Unity yang akan muncul di hampir semua tahap pembuatan perilaku navigasi. Istilah ini penting karena menentukan bagaimana scene dibaca, bagaimana area yang bisa dilalui dibuat, dan bagaimana NPC atau player bergerak menuju target.

Secara intuitif, Unity tidak selalu membuat agent “menghitung” setiap dinding secara manual. Unity menyediakan lapisan navigasi yang memetakan geometri scene menjadi permukaan yang bisa dilalui. Agent kemudian bergerak di atas permukaan itu, menghindari area yang tidak valid, dan menyesuaikan jalur ketika target berubah.

Istilah inti yang harus dipahami:

- **NavMesh**: permukaan navigasi yang dihasilkan dari geometri scene. Ini adalah “peta jalan” yang bisa digunakan agent.
- **`NavMeshSurface`**: komponen yang membantu membuat atau *bake* NavMesh pada scene. Ia menentukan area mana yang menjadi permukaan navigasi.
- **`NavMeshAgent`**: komponen yang dipasang pada objek yang ingin bergerak, misalnya NPC atau player. Komponen ini membuat objek mampu mengikuti NavMesh dan menuju tujuan.
- **`NavMeshObstacle`**: komponen untuk menandai objek penghalang. Obstacle dapat membuat agent menghindari area tertentu atau memotong jalur di sekitarnya.
- **`OffMeshLink`**: komponen untuk menghubungkan dua area yang tidak terhubung langsung, misalnya lompat, panjat, atau menyeberangi celah.

Parameter agent memengaruhi hasil gerak:

- `Agent Radius`: radius tabrakan agent. Radius yang terlalu besar membuat agent tampak “kaku” atau tidak bisa melewati celah sempit.
- `Agent Height`: tinggi agent. Nilai ini memengaruhi apakah agent dianggap bisa berada di area tertentu.
- `Speed`: kecepatan gerak agent.
- `Acceleration`: seberapa cepat agent mencapai kecepatan target.
- `Angular Speed`: kecepatan rotasi agent saat mengubah arah.
- `Stopping Distance`: jarak berhenti sebelum agent dianggap mencapai tujuan.

Selain parameter gerak, ada istilah biaya dan proses:

- `Area Cost`: biaya area. Area dengan biaya lebih tinggi cenderung dihindari jika ada alternatif jalur lain.
- `Layer`: layer Unity dapat digunakan untuk memisahkan objek yang ikut dalam pembuatan NavMesh atau yang berinteraksi dengan agent.
- `Bake`: proses membuat NavMesh dari geometri scene. Setelah bake, agent dapat menggunakan permukaan navigasi yang sudah dihasilkan.
- `SetDestination()`: method untuk memberi tahu agent tujuan baru.

Contoh penggunaan sederhana:

```csharp
agent.SetDestination(target.position);
```

Baris ini memberi tahu `NavMeshAgent` untuk bergerak menuju posisi `target`. Setelah itu, agent akan mencari jalur di atas NavMesh, menghindari area yang tidak valid, dan berhenti ketika jaraknya terhadap tujuan sudah memenuhi `Stopping Distance`.

Sebelum lanjut, mahasiswa perlu memastikan tidak hanya hafal nama komponen, tetapi memahami hubungan antar istilah: `NavMeshSurface` membantu membuat **NavMesh**, `NavMeshAgent` bergerak di atas **NavMesh**, `NavMeshObstacle` memengaruhi area yang bisa dilalui, `OffMeshLink` membuka jalur khusus, dan `SetDestination()` memicu perubahan tujuan.

### Inti yang Harus Ditekankan

- **NavMesh** adalah permukaan navigasi yang menjadi dasar pergerakan agent.
- `NavMeshAgent` adalah komponen yang membuat objek mampu bergerak dan mencari jalur.
- `NavMeshSurface`, `Bake`, `Layer`, dan `NavMeshObstacle` menentukan area mana yang valid, dihindari, atau diproses.
- Parameter seperti `Speed`, `Acceleration`, `Angular Speed`, dan `Stopping Distance` memengaruhi perilaku gerak agent.
- `SetDestination()` adalah cara utama memberi tujuan baru pada agent.

### Transisi ke Slide Berikutnya

Dengan istilah Unity ini, kita dapat merangkum seluruh alur materi dari graph, waypoint, algoritma pencarian, hingga komponen navigasi Unity pada slide berikutnya.

---

## Slide 079 - Ringkasan Materi

### Narasi

Slide ini menjadi peta kecil dari materi **Pathfinding & Navigation** yang sudah kita bahas. Intinya, sistem navigasi game dibangun dari representasi ruang, aturan pencarian, dan komponen runtime yang menjalankan pergerakan agent.

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

Dalam **Graph**, **Node** mewakili titik yang bisa ditempuh, **Edge** mewakili hubungan antar titik, dan **Cost** menentukan seberapa mahal perpindahan itu. **Waypoint** adalah bentuk yang lebih sederhana untuk perilaku seperti `Patrol` atau jaringan titik tertentu, sedangkan **Search Algorithm** seperti `BFS`, `Dijkstra`, dan `A*` bertugas menemukan urutan titik yang layak diikuti.

Perbedaan penting yang perlu diingat adalah peran **Heuristic**. `Manhattan`, `Euclidean`, dan `Diagonal` bukan pengganti pathfinding, melainkan alat bantu untuk memperkirakan jarak menuju tujuan agar pencarian lebih terarah. Di sisi implementasi, **Unity Navigation** menyediakan `NavMesh`, `NavMeshAgent`, `NavMeshSurface`, `NavMeshObstacle`, dan `OffMeshLink` agar agent dapat bergerak di ruang 3D dengan aturan yang lebih realistis.

Sebelum masuk ke diskusi, pastikan mahasiswa dapat membedakan **pathfinding** sebagai proses mencari rute, **navigation** sebagai proses menjalankan pergerakan agent, serta peran tiap komponen Unity dalam menjalankan rute tersebut.

### Inti yang Harus Ditekankan

- **Graph** adalah fondasi pathfinding: `Node` adalah titik, `Edge` adalah hubungan, dan `Cost` adalah bobot perpindahan.
- **Waypoint** cocok untuk perilaku sederhana seperti patrol, tetapi **Graph** lebih fleksibel untuk jaringan rute yang kompleks.
- `BFS`, `Dijkstra`, dan `A*` memiliki peran berbeda: pencarian dasar, pencarian berbasis biaya, dan pencarian berbasis biaya plus heuristic.
- **Heuristic** membantu memperkirakan jarak ke tujuan, tetapi kualitasnya memengaruhi efisiensi dan kualitas hasil pencarian.
- `NavMesh`, `NavMeshAgent`, `NavMeshSurface`, `NavMeshObstacle`, dan `OffMeshLink` adalah komponen utama untuk navigasi agent di Unity.

### Transisi ke Slide Berikutnya

Selanjutnya kita akan menguji pemahaman ini melalui pertanyaan diskusi, terutama peran heuristic, pemilihan algoritma, dan fungsi komponen navigasi di Unity.

---

## Slide 080 - Pertanyaan Diskusi

### Narasi

Slide ini bukan materi baru, melainkan ruang diskusi untuk memastikan mahasiswa sudah memahami hubungan antara **graph**, **algoritma pencarian**, **heuristic**, dan implementasi navigasi di Unity. Tujuannya adalah menguji apakah mahasiswa bisa memilih pendekatan yang tepat untuk perilaku NPC, bukan sekadar menghafal nama algoritma.

Sepuluh pertanyaan pada slide dapat dibaca sebagai empat kelompok pemahaman.

1. **Dasar representasi ruang**: apa arti `node` dan `edge`, serta mengapa keduanya penting untuk menghitung jalur.
2. **Pemilihan algoritma**: kapan `BFS`, `Dijkstra`, dan `A*` cocok digunakan.
3. **Peran heuristic**: bagaimana estimasi jarak membantu pencarian menjadi lebih cepat.
4. **Implementasi navigasi game**: perbedaan `pathfinding` dan `steering`, serta peran `NavMesh` dan `NavMeshAgent` di Unity.

Untuk pertanyaan pertama, `Seek` berarti agen bergerak langsung menuju target. Di area labirin, perilaku ini bisa membuat NPC menabrak dinding atau berhenti karena tidak ada jalur lurus. Yang dibutuhkan bukan hanya arah target, tetapi urutan titik yang dapat dilalui. Karena itu, `pathfinding` menghasilkan rute, sedangkan `steering` mengatur bagaimana agen mengikuti rute tersebut secara halus.

Perbedaan `node` dan `edge` juga penting. `Node` adalah posisi atau titik keputusan, misalnya titik di peta, waypoint, atau sel grid. `Edge` adalah hubungan yang memungkinkan perpindahan antar node, dan biasanya memiliki `cost`. Jika `cost` sama untuk semua edge, `BFS` sudah cukup untuk menemukan jalur dengan jumlah langkah terkecil. Namun, jika peta memiliki terrain dengan biaya berbeda, misalnya rumput lebih lambat daripada jalan, `Dijkstra` dapat menangani `cost` tersebut karena memperluas node berdasarkan total biaya terkecil.

`A*` biasanya lebih efisien untuk game karena menggabungkan biaya yang sudah ditempuh dengan `heuristic` untuk memperkirakan sisa biaya menuju target. `Heuristic` bukan jalur sebenarnya, tetapi alat prioritas: ia membantu algoritma fokus pada node yang lebih mungkin berada di jalur menuju target. Untuk grid dengan gerakan empat arah, `Manhattan Distance` sering lebih cocok daripada `Euclidean Distance` karena sesuai dengan cara menghitung langkah horizontal dan vertikal. `Euclidean Distance` lebih alami untuk ruang kontinu atau gerakan diagonal.

Pada game 3D, `NavMesh` sering lebih baik dibanding grid karena merepresentasikan permukaan yang bisa dilalui sebagai mesh, bukan kotak-kotak 2D. Ini membuat jalur lebih halus, lebih sesuai dengan geometri level, dan biasanya lebih hemat node. Meskipun `NavMeshAgent` sudah bisa mengikuti jalur, parameter seperti `speed` dan `stoppingDistance` tetap diperlukan. `speed` menentukan seberapa cepat NPC bergerak, sedangkan `stoppingDistance` mengatur jarak aman sebelum berhenti, sehingga agen tidak melewati target, bergetar, atau bertabrakan.

### Inti yang Harus Ditekankan

- `Seek` hanya menuju target secara langsung; di labirin, NPC tetap membutuhkan `pathfinding` untuk menemukan rute yang valid.
- `Pathfinding` menghitung urutan titik atau jalur, sedangkan `steering` mengatur gerakan lokal untuk mengikuti jalur tersebut.
- `Node` adalah titik, `edge` adalah hubungan antar titik, dan `cost` pada edge menentukan biaya perpindahan.
- `BFS` cocok untuk biaya seragam; `Dijkstra` cocok untuk biaya berbeda; `A*` lebih efisien karena menggunakan `heuristic`.
- `Manhattan Distance` cocok untuk grid empat arah, sedangkan `Euclidean Distance` lebih cocok untuk ruang kontinu atau diagonal.
- `NavMesh` mendukung navigasi 3D yang lebih alami, tetapi `NavMeshAgent` tetap perlu `speed` dan `stoppingDistance` untuk perilaku yang stabil.

### Transisi ke Slide Berikutnya

Setelah diskusi ini, kita akan menerapkan konsep graph, cost, dan algoritma pencarian pada contoh kecil, sehingga mahasiswa bisa melihat bagaimana jalur dipilih secara langsung.

---

## Slide 081 - Latihan Konsep Singkat

_Belum ada narasi terpilih untuk slide ini._

---

## Slide 082 - Penutup

### Narasi

Kita menutup pertemuan **Pathfinding & Navigation** dengan merangkum alur yang sudah dibangun. Pada pertemuan ini, kita melangkah dari masalah pergerakan agent menuju **pathfinding** yang lebih sistematis. Intuisi awalnya sederhana: agent tidak cukup hanya bergerak ke target, tetapi harus memilih rute yang valid, efisien, dan sesuai lingkungan. Dari **steering** sederhana, kita melihat keterbatasan perilaku seperti `Seek` ketika ada obstacle besar, lalu beralih ke representasi **graph** dan **waypoint** agar ruang gerak agent dapat dimodelkan secara eksplisit.

Setelah itu, kita membangun pemahaman bertahap. `BFS` memberi dasar traversal pada graph tanpa bobot, `Dijkstra` memperluas pencarian untuk jalur terpendek berbobot, dan `A*` menambahkan **heuristic** agar pencarian lebih terarah tanpa kehilangan jaminan optimalitas bila heuristic-nya admissible. Poin penting yang harus dipahami mahasiswa adalah perbedaan antara sekadar menemukan jalur, menemukan jalur terpendek, dan menemukan jalur terpendek dengan cara yang lebih efisien secara komputasi.

Pada bagian akhir, konsep **Navigation Mesh** menghubungkan teori pathfinding dengan implementasi praktis di Unity. Di sinilah `NavMeshAgent` berperan, tetapi penggunaannya harus didasari pemahaman algoritma di baliknya. Praktikum 4 akan dibuat dalam modul terpisah dengan fokus pada:

```text
A* sederhana
+
Unity NavMesh
```

Tujuan kombinasi ini adalah agar mahasiswa tidak hanya memasang komponen secara mekanis, tetapi mampu membaca perilaku agent, memahami peran graph, node, cost, dan heuristic, serta menghubungkannya dengan hasil navigasi di engine.

Urutan pembelajaran yang disarankan tetap penting: mulai dari review steering, masalah obstacle, graph dan waypoint, `BFS`, `Dijkstra`, `A*`, heuristic, perbandingan algoritma, lalu **Navigation Mesh** dan hubungannya dengan Unity. Penekanan utamanya adalah mahasiswa perlu memahami **algoritma pathfinding manual** terlebih dahulu, sehingga penggunaan `NavMeshAgent` menjadi keputusan desain dan teknis yang sadar, bukan sekadar fitur bawaan.

### Inti yang Harus Ditekankan

- **Pathfinding** mengubah pergerakan agent dari reaksi lokal menjadi pemilihan rute berbasis graph, cost, dan heuristic.
- `BFS`, `Dijkstra`, dan `A*` memiliki peran berbeda: traversal dasar, shortest path berbobot, dan pencarian terarah dengan heuristic.
- **Navigation Mesh** dan `NavMeshAgent` harus dipahami dari sisi algoritma, bukan hanya sebagai komponen Unity.
- Praktikum 4 menggabungkan `A*` sederhana dan `Unity NavMesh` untuk memperkuat hubungan teori dan implementasi.

### Transisi ke Slide Berikutnya

Dengan fondasi pathfinding dan navigation yang sudah dibangun, pertemuan berikutnya akan melanjutkan pembahasan agent ke bagian decision making yang lebih eksplisit, seperti **Finite State Machine**, `state`, `transition`, `condition`, perilaku NPC, serta integrasi perception, pathfinding, dan movement.
