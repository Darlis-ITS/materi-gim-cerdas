# Narasi Game Cerdas - Pertemuan 06

## Behavior Tree & Utility-Based AI

Sumber: markdown/pert06.md

---

## Slide 001 - Cover

### Narasi

Selamat datang pada **Pertemuan 6** mata kuliah **Game Cerdas**. Pada slide pembuka ini, kita akan memasuki topik **Behavior Tree** dan **Utility-Based AI**, dua pendekatan decision making yang sering digunakan untuk perilaku `NPC` dalam game. Fokus utamanya adalah memahami cara `NPC` memilih tindakan yang lebih fleksibel dibandingkan model state sederhana.

Pada **Behavior Tree**, perilaku `NPC` disusun seperti pohon keputusan. Komponen penting yang akan kita bahas meliputi `Selector`, `Sequence`, `Decorator`, `Leaf Node`, `Action Node`, dan `Condition Node`. Intuisi praktisnya, `NPC` tidak hanya berpindah state secara kaku, tetapi mengevaluasi struktur perilaku untuk menentukan tindakan yang paling sesuai pada kondisi tertentu.

Pada **Utility-Based AI**, keputusan dibuat berdasarkan penilaian atau skor. Setiap `Scoring Action` diberi nilai berdasarkan konteks, lalu sistem memilih tindakan dengan nilai tertinggi. Pendekatan ini berguna ketika perilaku `NPC` perlu terasa lebih halus, adaptif, dan tidak selalu hitam-putih. Praktikum yang akan dibuat terpisah adalah `NPC` dengan **Behavior Tree** dan `NPC` dengan **Utility-Based Decision**.

### Inti yang Harus Ditekankan

- **Behavior Tree** dan **Utility-Based AI** adalah pendekatan decision making untuk perilaku `NPC`.
- **Behavior Tree** menggunakan struktur node seperti `Selector`, `Sequence`, `Decorator`, `Leaf Node`, `Action Node`, dan `Condition Node`.
- **Utility-Based AI** memilih tindakan berdasarkan skor atau penilaian konteks.
- Kedua pendekatan ini lebih fleksibel daripada model state sederhana untuk perilaku `NPC` yang kompleks.

### Transisi ke Slide Berikutnya

Selanjutnya, kita akan meninjau kembali pendekatan decision making sebelumnya, yaitu model state sederhana seperti `Patrol → Chase → Attack → Flee`, serta batasannya ketika perilaku `NPC` semakin banyak.

---

## Slide 002 - Review Materi Decision Making Sebelumnya

### Narasi

Slide ini menjadi pengingat singkat sebelum kita membahas pendekatan decision making yang lebih fleksibel. Pada materi sebelumnya, perilaku NPC dapat dimodelkan menggunakan **state**, di mana NPC berpindah dari satu kondisi ke kondisi lain berdasarkan situasi game.

Contoh sederhana yang dapat kita lihat adalah:

```text
Patrol → Chase → Attack → Flee
```

Dalam contoh tersebut, NPC dapat mulai dari state `Patrol`, lalu masuk ke `Chase` jika mendeteksi pemain, melakukan `Attack` jika jarak cukup dekat, dan beralih ke `Flee` jika kondisi menjadi tidak menguntungkan. Alur ini mudah dipahami karena transisinya jelas dan perilaku NPC masih terbatas.

Pendekatan berbasis state cocok untuk beberapa kondisi, yaitu:

- perilaku NPC masih sederhana,
- jumlah state terbatas,
- transisi antar state mudah dijelaskan,
- cocok untuk perilaku musuh dasar.

Kelebihan utama model ini adalah mudah divisualisasikan, mudah diuji, dan mudah dijadikan fondasi awal untuk memahami **NPC behavior**. Namun, ketika perilaku NPC semakin banyak, model state dapat menjadi sulit dikelola karena setiap penambahan perilaku berpotensi menambah state dan transisi baru.

Sebelum lanjut, mahasiswa perlu memahami bahwa **model berbasis state** bukan pendekatan yang salah, tetapi memiliki ruang lingkup tertentu. Ia sangat berguna untuk perilaku sederhana, tetapi ketika kompleksitas meningkat, kita membutuhkan struktur decision making yang lebih fleksibel dan mudah dikembangkan.

### Inti yang Harus Ditekankan

- **Model berbasis state** adalah dasar decision making yang mudah dipahami dan mudah divisualisasikan.
- Contoh `Patrol → Chase → Attack → Flee` menunjukkan alur perilaku NPC yang sederhana dengan transisi yang jelas.
- Model ini cocok untuk perilaku terbatas, tetapi akan sulit dikelola jika jumlah state dan transisi terus bertambah.

### Transisi ke Slide Berikutnya

Dengan memahami kelebihan dan batas model state sederhana, kita dapat melihat mengapa pendekatan decision making yang lebih fleksibel dibutuhkan ketika perilaku NPC menjadi kompleks.

---

## Slide 003 - Masalah pada FSM Sederhana

### Narasi

Pada slide ini kita melihat **keterbatasan utama dari FSM sederhana**. **FSM** memang mudah dipahami karena perilaku NPC dinyatakan sebagai **state** dan perpindahan antar state disebut **transition**. Untuk perilaku dasar seperti `Patrol`, `Chase`, dan `Attack`, pendekatan ini cukup jelas dan mudah diimplementasikan.

Namun, dalam game yang lebih kompleks, NPC tidak hanya memiliki beberapa state. Bayangkan NPC yang bisa diam, patroli, waspada, mengejar, menyerang, mengisi ulang amunisi, berlindung, menyembuhkan diri, kabur, mencari target, memanggil bantuan, hingga mati. Semakin banyak perilaku yang ingin dimodelkan, semakin banyak state yang harus dibuat.

Contoh state yang mungkin muncul adalah:

```text
Idle
Patrol
Alert
Chase
Attack
Reload
TakeCover
Heal
Flee
Search
CallBackup
Dead
```

Daftar ini belum tentu harus semuanya ada dalam satu NPC, tetapi tujuannya untuk menunjukkan bahwa jumlah state dapat bertambah dengan cepat. Setiap state biasanya memiliki kondisi masuk dan kondisi keluar. Artinya, setiap state perlu memeriksa beberapa kondisi sebelum berpindah.

Masalahnya bukan hanya pada banyaknya state, tetapi pada banyaknya **transition** yang saling terhubung. Jika state bertambah, jumlah kemungkinan perpindahan juga bisa meningkat. Diagram FSM yang tadinya rapi dapat berubah menjadi padat dan sulit dibaca. Kondisi antar transition juga bisa saling bertabrakan, misalnya NPC memiliki kesehatan rendah, amunisi habis, dan musuh berada dekat secara bersamaan.

Perubahan kecil pada desain perilaku juga dapat memengaruhi banyak bagian. Jika kita menambahkan state `Reload`, misalnya, kita perlu menentukan dari state mana NPC bisa masuk ke `Reload`, kapan NPC kembali ke `Attack`, dan bagaimana `Reload` berinteraksi dengan `Flee` atau `TakeCover`. Satu perubahan kecil dapat memicu penyesuaian di banyak transition.

Kondisi ini sering disebut **`state explosion`**. Istilah ini menggambarkan bahwa kompleksitas FSM tidak hanya tumbuh karena bertambahnya state, tetapi juga karena bertambahnya transition, kondisi, dan interaksi antar perilaku. Mahasiswa perlu memahami bahwa **FSM bukan pendekatan yang salah**, tetapi skalabilitasnya terbatas. Sebelum melanjutkan, penting untuk mengenali kapan FSM masih cocok dan kapan perilaku NPC sudah terlalu kompleks untuk dikelola hanya dengan state dan transition sederhana.

### Inti yang Harus Ditekankan

- **FSM sederhana** cocok untuk perilaku terbatas, tetapi menjadi sulit ketika jumlah `state` dan `transition` bertambah.
- **`state explosion`** terjadi karena kompleksitas tidak hanya datang dari state, tetapi juga dari kondisi perpindahan yang saling terkait.
- Perubahan kecil pada satu perilaku dapat memengaruhi banyak state lain, sehingga desain FSM harus diperhatikan sejak awal.

### Transisi ke Slide Berikutnya

Karena FSM sederhana memiliki keterbatasan ketika perilaku NPC semakin kompleks, slide berikutnya akan memperkenalkan alternatif decision making yang dapat digunakan untuk mengatur perilaku NPC dengan cara yang lebih terstruktur.

---

## Slide 004 - Alternatif Decision Making

### Narasi

Pada slide ini, kita memperluas pandangan dari **Finite State Machine** ke berbagai pendekatan **decision making** dalam **Game AI**. Inti dari decision making adalah memilih perilaku atau aksi NPC berdasarkan kondisi game. Dengan kata lain, bagian ini menjawab pertanyaan: *perilaku apa yang sebaiknya dilakukan agen pada saat ini?*

Pendekatan decision making tidak tunggal. Beberapa keluarga teknik yang umum digunakan adalah:

```text
Decision Making
├── Finite State Machine
├── Hierarchical FSM
├── Behavior Tree
├── Utility-Based AI
├── Goal-Oriented Action Planning
└── Machine Learning / Reinforcement Learning
```

Secara singkat:

- **Finite State Machine** cocok untuk perilaku yang jelas dan terbatas.
- **Hierarchical FSM** membantu mengelompokkan state agar lebih terstruktur.
- **Behavior Tree** membangun perilaku dari node-node yang dapat disusun ulang.
- **Utility-Based AI** menilai beberapa opsi perilaku berdasarkan skor atau bobot.
- **Goal-Oriented Action Planning** mencari urutan aksi untuk mencapai tujuan.
- **Machine Learning / Reinforcement Learning** memungkinkan agen belajar dari pengalaman atau lingkungan.

Namun, pertemuan ini tidak membahas semua pendekatan secara mendalam. Fokusnya adalah dua teknik yang sangat penting dalam produksi game, yaitu **Behavior Tree** dan **Utility-Based AI**. Keduanya dipilih karena sering digunakan untuk membuat NPC yang lebih fleksibel, mudah dirancang, dan mampu menangani situasi yang lebih kompleks dibanding FSM sederhana.

Sebelum lanjut, mahasiswa perlu memahami bahwa **decision making** adalah tahap pemilihan perilaku, bukan tahap eksekusi gerakan. Output dari tahap ini biasanya berupa `action`, `state`, atau perintah perilaku yang kemudian diteruskan ke bagian navigasi, steering, atau animasi. Pemahaman ini penting agar tidak tertukar antara memilih perilaku dan menjalankan perilaku.

### Inti yang Harus Ditekankan

- **Decision making** dalam Game AI bukan hanya **Finite State Machine**.
- Ada beberapa pendekatan umum: FSM, **Hierarchical FSM**, **Behavior Tree**, **Utility-Based AI**, **Goal-Oriented Action Planning**, dan **Machine Learning / Reinforcement Learning**.
- Pertemuan ini berfokus pada **Behavior Tree** dan **Utility-Based AI**.
- Kedua teknik tersebut berada pada tahap pemilihan perilaku NPC berdasarkan kondisi game.

### Transisi ke Slide Berikutnya

Selanjutnya, kita akan melihat posisi **Behavior Tree** dan **Utility-Based AI** dalam arsitektur Game AI, yaitu bagaimana keduanya berada pada bagian **decision making** setelah `perception` dan `memory`, lalu sebelum `navigation`, `movement`, dan `action`.

---

## Slide 005 - Posisi Behavior Tree dan Utility AI

### Narasi

Slide ini membantu mahasiswa melihat **di mana** Behavior Tree dan Utility AI berada dalam arsitektur Game AI.

```text
Perception
    ↓
Memory / Blackboard
    ↓
Decision Making
    ├─ FSM
    ├─ Behavior Tree
    └─ Utility AI
    ↓
Navigation / Pathfinding
    ↓
Movement / Steering
    ↓
Action / Animation
```

Alur ini menunjukkan bahwa NPC tidak langsung bergerak hanya karena ada input. NPC biasanya melewati beberapa tahap:

1. **Perception** membaca kondisi lingkungan, seperti posisi musuh, jarak target, atau status objek di sekitar NPC.
2. **Memory / Blackboard** menyimpan informasi penting yang akan digunakan untuk mengambil keputusan.
3. **Decision Making** memilih perilaku atau aksi yang paling sesuai berdasarkan kondisi game.
4. **Navigation / Pathfinding** menentukan rute atau arah menuju target.
5. **Movement / Steering** mengatur gerak NPC agar halus dan sesuai lingkungan.
6. **Action / Animation** mengeksekusi aksi akhir, seperti berjalan, menyerang, atau beristirahat.

**Behavior Tree** dan **Utility AI** berada pada tahap **Decision Making**. Artinya, keduanya bukan pengganti pathfinding atau animasi, tetapi bagian yang memutuskan *apa yang harus dilakukan* NPC.

Pada tahap ini, sistem menerima kondisi game seperti jarak musuh, kesehatan, target, atau status tugas. Kemudian Behavior Tree atau Utility AI menghasilkan keputusan berupa aksi, misalnya `pursue`, `attack`, `flee`, `idle`, atau `patrol`. Keputusan ini lalu diteruskan ke modul berikutnya.

Perbedaan penting yang perlu dipahami: **Behavior Tree** cenderung menyusun perilaku dalam struktur node yang dapat dibaca sebagai alur logika, sedangkan **Utility AI** cenderung menilai beberapa aksi berdasarkan skor atau utilitas. Namun pada slide ini, fokus utamanya adalah posisi keduanya dalam pipeline, bukan detail implementasi.

Sebelum lanjut, mahasiswa perlu menyadari bahwa kualitas keputusan NPC sangat bergantung pada kualitas data dari **Perception** dan **Memory / Blackboard**. Jika data tidak tersedia atau tidak disimpan dengan benar, Behavior Tree maupun Utility AI akan menghasilkan keputusan yang tidak sesuai.

### Inti yang Harus Ditekankan

- **Behavior Tree** dan **Utility AI** berada pada tahap **Decision Making** dalam arsitektur Game AI.
- Keduanya menentukan aksi atau perilaku NPC berdasarkan kondisi game, bukan langsung menghasilkan gerakan atau animasi.
- Pipeline Game AI umumnya bergerak dari **Perception** ke **Memory / Blackboard**, lalu **Decision Making**, **Navigation / Pathfinding**, **Movement / Steering**, dan **Action / Animation**.
- Keputusan dari Behavior Tree atau Utility AI menjadi input bagi modul gerak dan eksekusi aksi.

### Transisi ke Slide Berikutnya

Dengan memahami posisi Behavior Tree dan Utility AI dalam arsitektur Game AI, kita dapat masuk ke capaian pembelajaran pertemuan ini, yaitu kemampuan menjelaskan, membedakan, dan merancang perilaku NPC menggunakan pendekatan tersebut.

---

## Slide 006 - Capaian Pembelajaran Pertemuan

### Narasi

Slide ini merangkum capaian pembelajaran yang diharapkan setelah pertemuan. Tujuannya agar mahasiswa tidak hanya mengenal istilah, tetapi mampu menggunakan **Behavior Tree** dan **Utility-Based AI** sebagai alat desain perilaku NPC. Kedua pendekatan ini berada pada tahap **decision making**, yaitu bagian yang menentukan aksi apa yang akan dilakukan agent berdasarkan kondisi lingkungan.

Capaian pertama berkaitan dengan pemahaman struktur **Behavior Tree**. Mahasiswa diharapkan mampu menjelaskan konsepnya, mengenal node utama, serta membedakan peran `selector`, `sequence`, `decorator`, `condition`, dan `action`. Dengan pemahaman ini, mahasiswa dapat membaca diagram Behavior Tree sederhana dan mulai merancang perilaku NPC yang lebih modular.

Capaian berikutnya berkaitan dengan **Utility-Based AI**. Mahasiswa diharapkan mampu menjelaskan konsepnya, menghitung skor aksi berdasarkan beberapa faktor, lalu memilih aksi dengan skor tertinggi. Selain itu, mahasiswa perlu mampu membandingkan **FSM**, **Behavior Tree**, dan **Utility AI** agar dapat memilih arsitektur yang sesuai dengan kompleksitas perilaku NPC.

Sebelum masuk ke definisi dan contoh, penting untuk memahami bahwa capaian ini bersifat bertahap. Mahasiswa harus mampu menjelaskan konsep, membaca struktur, menghitung skor, dan merancang solusi sederhana. Dengan fondasi ini, pembahasan berikutnya akan lebih mudah diikuti.

### Inti yang Harus Ditekankan

- **Behavior Tree** adalah struktur decision making berbasis node yang membantu mengatur perilaku NPC secara modular.
- Node utama seperti `selector`, `sequence`, `decorator`, `condition`, dan `action` memiliki peran berbeda dalam menentukan alur eksekusi.
- **Utility-Based AI** menilai beberapa aksi berdasarkan faktor-faktor tertentu, lalu memilih aksi dengan skor terbaik.
- Perbandingan antara **FSM**, **Behavior Tree**, dan **Utility AI** membantu mahasiswa memilih pendekatan yang tepat untuk desain NPC.

### Transisi ke Slide Berikutnya

Setelah capaian pembelajaran ini dipahami, kita akan mulai dari konsep dasar **Behavior Tree** dan melihat bagaimana struktur pohon digunakan untuk mengatur perilaku agent.

---

## Slide 007 - Apa Itu Behavior Tree?

### Narasi

**Behavior Tree** adalah struktur **decision making** berbentuk pohon yang digunakan untuk mengatur perilaku agent dalam game. Intuisi sederhananya, perilaku NPC tidak ditulis sebagai satu blok logika panjang, tetapi dipecah menjadi beberapa node yang saling terhubung. Node paling atas disebut `Root`, dan dari `Root` ini percabangan menuju node lain.

```text
Root
 └── Node
      ├── Node
      └── Node
```

Struktur ini penting karena sistem perilaku dalam game sering harus memilih tindakan yang sesuai dengan situasi. NPC bisa bergerak, menyerang, menghindar, atau melakukan tugas tertentu. Dengan Behavior Tree, setiap bagian perilaku dapat diletakkan pada node yang berbeda, sehingga sistem menjadi lebih modular dan mudah diperluas.

Keunggulan utamanya adalah perilaku kompleks menjadi lebih rapi. Jika satu NPC memiliki banyak aksi, kita tidak perlu menumpuk banyak kondisi di satu tempat. Setiap node dapat mewakili satu keputusan atau satu `action`, lalu pohon mengatur bagaimana node-node tersebut saling terhubung.

Behavior Tree juga mudah divisualisasikan. Bentuk pohonnya membantu desainer dan programmer melihat alur perilaku secara langsung: dari `Root` ke cabang-cabang perilaku. Hal ini sangat berguna saat debugging, karena kita bisa mengecek bagian mana yang sedang aktif atau tidak sesuai harapan.

Dalam konteks game, Behavior Tree cocok untuk NPC yang membutuhkan banyak pilihan perilaku, misalnya NPC penjaga, musuh, atau karakter yang melakukan rutinitas. Struktur ini juga mendukung kerja sama dengan komponen lain seperti pathfinding atau steering, karena node tertentu dapat memicu pergerakan, sementara node lain mengatur keputusan berikutnya.

Sebelum lanjut, yang perlu dipahami adalah bahwa Behavior Tree bukan sekadar diagram pohon, melainkan cara menyusun keputusan agent secara bertahap. Pohon ini menjadi kerangka untuk perilaku yang lebih terstruktur, modular, dan mudah dikembangkan.

### Inti yang Harus Ditekankan

- **Behavior Tree** adalah struktur decision making berbentuk pohon untuk mengatur perilaku agent.
- Pohon dimulai dari `Root` dan bercabang ke node-node perilaku.
- Keunggulannya: modular, mudah diperluas, rapi untuk perilaku kompleks, mudah divisualisasikan, dan cocok untuk NPC dengan banyak aksi.
- Behavior Tree membantu memisahkan keputusan dan `action` agar perilaku NPC lebih terstruktur.

### Transisi ke Slide Berikutnya

Setelah kita memahami bentuk dasar Behavior Tree, langkah berikutnya adalah melihat bagaimana pohon ini dibaca dan bagaimana alur eksekusinya menentukan perilaku NPC.

---

## Slide 008 - Cara Membaca Behavior Tree

### Narasi

Setelah kita memahami bahwa **Behavior Tree** adalah struktur pohon untuk mengatur perilaku agent, langkah berikutnya adalah memahami cara membacanya. Poin utamanya adalah: Behavior Tree tidak dibaca sebagai gambar diam, tetapi sebagai **alur eksekusi** yang berjalan dari atas ke bawah.

```text
Root
  ↓
Child node
  ↓
Leaf node
```

Artinya, eksekusi dimulai dari **`Root`**. `Root` adalah pintu masuk tree. Dari `Root`, eksekusi turun ke **`Child node`**, lalu ke **`Leaf node`** jika ada. Dalam konteks game, ini mirip dengan NPC yang mulai dari perilaku utama, lalu memeriksa kondisi atau menjalankan aksi yang lebih spesifik.

Setiap node yang dieksekusi akan mengembalikan salah satu dari tiga status:

```text
Success
Failure
Running
```

Tiga status ini adalah “bahasa” antar node. Status menentukan apakah tree boleh lanjut, harus berhenti, atau harus menunggu sampai pemrosesan berikutnya.

| Status | Arti |
|---|---|
| `Success` | Node berhasil dijalankan |
| `Failure` | Node gagal dijalankan |
| `Running` | Node masih berjalan |

Status `Success` berarti node sudah menyelesaikan tugasnya. Misalnya, sebuah kondisi terpenuhi atau sebuah aksi selesai. Status `Failure` berarti node tidak dapat menyelesaikan tugasnya, misalnya kondisi tidak terpenuhi. Status `Running` berarti node belum selesai dan masih membutuhkan waktu.

Hal yang penting dipahami mahasiswa adalah bahwa status tidak hanya menjelaskan hasil node, tetapi juga **mengendalikan alur tree**. Jika node mengembalikan `Success` atau `Failure`, parent node dapat memutuskan langkah berikutnya. Jika node mengembalikan `Running`, tree biasanya berhenti sementara pada node tersebut dan melanjutkan kembali pada pemrosesan berikutnya.

Dengan cara ini, Behavior Tree menjadi lebih rapi untuk perilaku NPC yang kompleks. Agent tidak perlu langsung melompat ke perilaku lain ketika sebuah aksi masih berjalan. Status `Running` memberi ruang bagi aksi seperti bergerak, menunggu, atau animasi untuk selesai secara natural.

### Inti yang Harus Ditekankan

- Behavior Tree dibaca sebagai **alur eksekusi** dari `Root` ke `Child node` lalu ke `Leaf node`.
- Setiap node mengembalikan status `Success`, `Failure`, atau `Running`.
- Status menentukan apakah tree lanjut, berhenti, atau menunggu sampai node tersebut selesai.

### Transisi ke Slide Berikutnya

Selanjutnya, kita akan melihat lebih dekat tiga status utama tersebut beserta contoh sederhana yang menunjukkan bagaimana `Success`, `Failure`, dan `Running` muncul dalam perilaku agent.

---

## Slide 009 - Tiga Status Utama

### Narasi

Dalam Behavior Tree, setiap `node` tidak hanya dijalankan, tetapi juga memberi laporan hasil ke `node` induknya. Laporan inilah yang menjadi dasar perilaku NPC. Tiga status utama yang perlu dipahami adalah `Success`, `Failure`, dan `Running`.

```text
Condition: Player terlihat
Result: Success

Condition: Player terlihat
Result: Failure karena player tidak terlihat

Action: Berjalan ke waypoint
Result: Running karena belum sampai
```

Status **Success** berarti node telah selesai dan hasilnya positif. Pada contoh `Condition: Player terlihat`, jika NPC benar-benar melihat `Player`, node mengembalikan `Success`. Artinya, pengecekan selesai dan hasilnya dapat digunakan oleh struktur di atasnya.

Status **Failure** berarti node juga telah selesai, tetapi hasilnya negatif. Jika `Player` tidak terlihat, node mengembalikan `Failure`. Ini bukan error; ini adalah hasil logis dari kondisi yang tidak terpenuhi.

Status **Running** menunjukkan bahwa node belum selesai. Pada contoh `Action: Berjalan ke waypoint`, NPC masih bergerak, sehingga node tetap mengembalikan `Running` sampai tujuan tercapai. Setelah sampai, node dapat berubah menjadi `Success` atau `Failure` tergantung hasil akhir.

Status `Running` sangat penting untuk action yang membutuhkan waktu, seperti bergerak, beranimasi, menunggu cooldown, atau memutar dialog. Tanpa status ini, action yang seharusnya berlangsung beberapa detik bisa dianggap selesai secara instan, sehingga perilaku NPC menjadi tidak realistis.

Yang harus dipahami mahasiswa adalah bahwa ketiga status ini adalah mekanisme komunikasi antar node. Node anak memberi tahu node induk apa yang terjadi, lalu node induk menentukan langkah berikutnya. Pemahaman ini menjadi dasar sebelum masuk ke struktur Behavior Tree yang lebih lengkap.

### Inti yang Harus Ditekankan

- `Success` berarti node selesai dengan hasil positif.
- `Failure` berarti node selesai dengan hasil negatif atau kondisi tidak terpenuhi.
- `Running` berarti node belum selesai dan masih berjalan.
- Status `Running` penting untuk action yang membutuhkan waktu, seperti bergerak ke `waypoint`.
- Status dari node anak menjadi dasar keputusan node induk dalam Behavior Tree.

### Transisi ke Slide Berikutnya

Setelah memahami tiga status utama, langkah berikutnya adalah melihat bagaimana node-node tersebut disusun menjadi struktur Behavior Tree yang utuh.

---

## Slide 010 - Struktur Umum Behavior Tree

### Narasi

Slide ini menunjukkan **struktur umum Behavior Tree** untuk NPC sederhana. Pohon ini menggambarkan bagaimana agen memilih perilaku berdasarkan kondisi lingkungan.

```text
Root
 └── Selector
      ├── Sequence: Attack
      │    ├── Can See Player?
      │    ├── In Attack Range?
      │    └── Attack Player
      │
      ├── Sequence: Chase
      │    ├── Can See Player?
      │    └── Chase Player
      │
      └── Patrol
```

Pada level teratas, `Root` menjalankan satu child utama, yaitu `Selector`. `Selector` bekerja seperti pengambil keputusan prioritas: ia mencoba child pertama, lalu child berikutnya, sampai ada child yang menghasilkan `Success` atau `Running`.

Child pertama adalah `Sequence: Attack`. `Sequence` mengeksekusi child-nya secara berurutan. Urutan yang terjadi adalah:

1. Cek `Can See Player?`
2. Jika sukses, cek `In Attack Range?`
3. Jika sukses, eksekusi `Attack Player`

Jika salah satu kondisi gagal, sequence berhenti dan `Selector` lanjut ke child berikutnya.

Child kedua adalah `Sequence: Chase`. Perilaku ini dipilih ketika NPC melihat player tetapi belum berada dalam jangkauan serangan. Urutan pengecekan:

1. Cek `Can See Player?`
2. Jika sukses, eksekusi `Chase Player`

Child terakhir adalah `Patrol`. Node ini menjadi fallback ketika NPC tidak melihat player dan tidak ada kondisi attack/chase yang terpenuhi. Dengan demikian, perilaku NPC menjadi hierarkis dan mudah dibaca.

Intuisi praktisnya: Behavior Tree membantu memisahkan **keputusan** dari **aksi**. `Selector` menentukan prioritas perilaku, `Sequence` memastikan serangkaian kondisi dan aksi dijalankan secara runtut, sedangkan leaf node seperti `Attack Player`, `Chase Player`, dan `Patrol` adalah perilaku konkret yang dapat dihubungkan ke steering, pathfinding, animasi, atau komponen Unity.

Sebelum lanjut, mahasiswa perlu memahami bahwa pohon ini tidak hanya “daftar perilaku”, tetapi struktur eksekusi yang memiliki status `Success`, `Failure`, dan `Running`. Status inilah yang menentukan apakah perilaku berhenti, gagal, atau masih berjalan di tick berikutnya.

### Inti yang Harus Ditekankan

- `Selector` memilih perilaku berdasarkan prioritas: attack lebih dulu, lalu chase, lalu patrol.
- `Sequence` menjalankan child secara berurutan dan berhenti jika ada child yang gagal.
- Perilaku NPC menjadi lebih terstruktur karena keputusan dan aksi dipisahkan dalam node.
- Status `Success`, `Failure`, dan `Running` menentukan alur eksekusi pohon.

### Transisi ke Slide Berikutnya

Selanjutnya kita akan melihat bagaimana `Root Node` menjadi titik awal eksekusi Behavior Tree dan bagaimana pohon ini dipanggil pada setiap update atau interval tick.

---

## Slide 011 - Root Node

### Narasi

Pada slide ini kita fokus pada **Root Node** dalam Behavior Tree. Root Node adalah titik awal dari seluruh pohon perilaku. Artinya, ketika Behavior Tree dijalankan, proses selalu dimulai dari node ini, bukan langsung dari action atau kondisi tertentu.

Secara struktur, Root biasanya tidak langsung melakukan keputusan. Root lebih berperan sebagai pintu masuk yang memanggil child utamanya. Dalam contoh sederhana, child utama tersebut sering berupa **Selector**.

```text
Root
 └── Selector
```

Pola ini penting karena Root tidak perlu mengetahui semua detail perilaku NPC. Root hanya memastikan bahwa proses evaluasi dimulai dari tempat yang benar. Setelah itu, Selector yang bertugas memilih cabang perilaku mana yang akan dijalankan.

Dalam implementasi Unity, Root biasanya dipanggil dari `Update()` pada komponen MonoBehaviour. Contoh paling sederhana adalah:

```csharp
void Update()
{
    tree.Tick();
}
```

Pada potongan kode ini, `tree` adalah objek Behavior Tree yang sudah dibuat. Setiap kali `Update()` dipanggil, `tree.Tick()` akan mengeksekusi pohon perilaku mulai dari Root.

Namun, Behavior Tree tidak harus dijalankan setiap frame. Untuk beberapa perilaku, misalnya NPC yang tidak membutuhkan reaksi sangat cepat, tick dapat dilakukan dengan interval tertentu.

```text
Tick setiap 0.2 detik
```

Pendekatan ini membantu mengontrol performa. Jika semua NPC men-jalankan Behavior Tree setiap frame, beban komputasi bisa meningkat. Dengan interval tick, kita bisa mengatur seberapa sering perilaku NPC diperbarui.

Sebelum lanjut, mahasiswa perlu memahami bahwa Root adalah awal eksekusi, bukan pusat keputusan. Keputusan biasanya berada di node seperti **Selector**, **Sequence**, atau action node. Root hanya memastikan Behavior Tree mulai berjalan dari titik yang konsisten.

### Inti yang Harus Ditekankan

- **Root Node** adalah titik awal eksekusi Behavior Tree.
- Root biasanya memiliki satu child utama, misalnya **Selector**.
- Root dipanggil setiap tick, misalnya melalui `tree.Tick()` di `Update()`.
- Tick dapat dilakukan setiap frame atau dengan interval tertentu untuk mengontrol performa.
- Root bukan node keputusan utama; ia hanya memulai proses evaluasi Behavior Tree.

### Transisi ke Slide Berikutnya

Setelah memahami bahwa Root adalah titik awal, langkah berikutnya adalah memahami apa yang terjadi ketika Root dipanggil. Pada slide berikutnya, kita akan membahas proses **Tick** pada Behavior Tree, yaitu bagaimana evaluasi dimulai dari Root, diteruskan ke child, dan menghasilkan status atau action yang dijalankan.

---

## Slide 012 - Tick pada Behavior Tree

### Narasi

**Tick** adalah siklus eksekusi Behavior Tree. Ia berfungsi seperti "detak jantung" perilaku NPC: setiap kali tick dipanggil, tree diperiksa ulang untuk menentukan perilaku yang aktif.

Dalam konteks game, tick biasanya dipicu oleh loop update. Pada Unity, pemanggilan dapat dilakukan di `Update()` atau pada interval tertentu. Intinya, Behavior Tree tidak berjalan sendiri secara permanen; ia dievaluasi ulang setiap kali sistem game memberinya kesempatan untuk berjalan.

Setiap tick mengikuti alur dari atas ke bawah:

1. Eksekusi dimulai dari `Root`.
2. Node yang aktif dievaluasi.
3. Node mengembalikan status evaluasi.
4. `Action` dijalankan hanya jika kondisi yang diperlukan terpenuhi.

```text
Update()
    ↓
BehaviorTree.Tick()
    ↓
Root
    ↓
Selector
    ↓
Sequence / Action
```

Diagram ini menunjukkan bahwa `Update()` memicu `BehaviorTree.Tick()`. Setelah itu, eksekusi masuk ke `Root`, lalu turun ke node seperti `Selector`, dan akhirnya sampai ke `Sequence` atau `Action`. Arahnya penting: keputusan perilaku tidak dimulai dari action, tetapi dari struktur tree yang mengatur urutan evaluasi.

Poin penting berikutnya adalah bahwa tick tidak selalu harus dilakukan setiap frame. Untuk game dengan banyak NPC atau perilaku yang tidak membutuhkan respons sangat cepat, tick dapat dijalankan pada interval tertentu. Pendekatan ini membantu menjaga performa, karena evaluasi Behavior Tree tetap dilakukan, tetapi tidak setiap frame.

Sebelum lanjut, mahasiswa perlu memahami bahwa tick adalah mekanisme penggerak Behavior Tree. Tanpa tick, tree hanya struktur data. Dengan tick, struktur tersebut menjadi perilaku yang dapat berubah sesuai kondisi game.

### Inti yang Harus Ditekankan

- **Tick** adalah proses eksekusi Behavior Tree, bukan sekadar nama fungsi.
- Eksekusi dimulai dari `Root`, lalu node dievaluasi dan status dikembalikan.
- `Action` hanya dijalankan jika kondisi terpenuhi.
- Tick dapat dilakukan setiap frame atau pada interval tertentu untuk menjaga performa.

### Transisi ke Slide Berikutnya

Setelah memahami bagaimana Behavior Tree dieksekusi melalui tick, langkah berikutnya adalah mengenal jenis node yang membentuk tree tersebut.

---

## Slide 013 - Jenis Node pada Behavior Tree

### Narasi

Pada slide ini, kita melihat **jenis node utama** dalam Behavior Tree. Behavior Tree dapat dibayangkan sebagai struktur keputusan yang disusun dari node-node kecil. Setiap node memiliki peran berbeda, sehingga satu pohon perilaku dapat mengatur NPC secara lebih rapi dibanding satu blok kode keputusan yang panjang.

```text
Behavior Tree Node
├── Composite Node
│   ├── Selector
│   └── Sequence
│
├── Decorator Node
│   ├── Inverter
│   ├── Repeat
│   └── Cooldown
│
└── Leaf Node
    ├── Condition
    └── Action
```

Dari diagram tersebut, kita dapat melihat tiga kelompok besar. **Composite Node** adalah node yang memiliki anak node dan bertugas mengatur alur eksekusi. Contoh utamanya adalah `Selector` dan `Sequence`. Composite tidak langsung melakukan aksi nyata, tetapi menentukan child mana yang akan dievaluasi dan bagaimana status dari child tersebut memengaruhi langkah berikutnya.

**Decorator Node** berperan sebagai pembungkus atau modifikasi perilaku child. Node seperti `Inverter`, `Repeat`, dan `Cooldown` tidak menggantikan logika child, tetapi mengubah cara child dievaluasi atau dijalankan. Misalnya, `Inverter` dapat membalik hasil status child, `Repeat` dapat mengulang child beberapa kali, dan `Cooldown` dapat memberi jeda sebelum child boleh dijalankan kembali.

**Leaf Node** adalah node paling dasar yang biasanya tidak memiliki child. Leaf menjalankan pengecekan atau aksi nyata. `Condition` memeriksa keadaan dunia, misalnya apakah musuh terlihat, apakah jarak cukup dekat, atau apakah inventory tersedia. `Action` melakukan sesuatu yang dapat diamati di game, misalnya bergerak, menembak, berbicara, atau membuka dialog.

Intuisi praktisnya adalah: **composite mengatur alur, decorator memodifikasi perilaku, dan leaf melakukan hal nyata**. Dalam implementasi game, struktur ini membantu mahasiswa memisahkan logika keputusan dari aksi. Misalnya, sebuah NPC penjaga dapat menggunakan `Selector` untuk memilih antara menyerang, mundur, atau patroli. Di dalam cabang menyerang, `Sequence` dapat memastikan kondisi jarak dan target valid sebelum `Action` menembak dijalankan. `Cooldown` lalu dapat mencegah NPC menembak terlalu sering.

Sebelum lanjut, mahasiswa perlu memahami bahwa node pada Behavior Tree bukan sekadar label, tetapi memiliki tanggung jawab berbeda dalam eksekusi. Composite menentukan urutan dan kombinasi child, decorator mengubah status atau frekuensi child, sedangkan leaf adalah titik di mana kondisi dunia diperiksa atau aksi game terjadi. Pemahaman ini penting karena nanti kita akan membahas bagaimana `Selector` dan `Sequence` bekerja secara lebih detail.

### Inti yang Harus Ditekankan

- **Composite Node** mengatur alur eksekusi child, dengan contoh utama `Selector` dan `Sequence`.
- **Decorator Node** memodifikasi perilaku child, seperti `Inverter`, `Repeat`, dan `Cooldown`.
- **Leaf Node** menjalankan pengecekan atau aksi nyata, yaitu `Condition` dan `Action`.
- Struktur node membantu memisahkan **keputusan**, **modifikasi perilaku**, dan **aksi game** dalam satu Behavior Tree.

### Transisi ke Slide Berikutnya

Selanjutnya, kita akan masuk ke **Composite Node**, khususnya `Selector` dan `Sequence`, untuk memahami bagaimana node induk mengatur alur keputusan pada Behavior Tree.

---

## Slide 014 - Composite Node

### Narasi

**Composite node** adalah node internal dalam Behavior Tree yang memiliki lebih dari satu `child`. Berbeda dengan leaf node yang menjalankan kondisi atau aksi langsung, composite node bertugas mengatur alur eksekusi antar `child`.

```text
Composite Node
├── Child 1
├── Child 2
└── Child 3
```

Secara konsep, composite node menerima status dari `child` dan menentukan status berikutnya. Dalam Behavior Tree, status tidak hanya `Success` atau `Failure`, tetapi juga `Running`. Karena itu, perilaku composite node tidak bisa disamakan sepenuhnya dengan logika boolean sederhana.

Dua composite node yang paling penting adalah:

- **Selector**, yang sering dipahami sebagai `OR`.
- **Sequence**, yang sering dipahami sebagai `AND`.

Pemahaman ini berguna untuk merancang perilaku NPC secara modular. Misalnya, sebuah agen dapat memiliki beberapa pilihan perilaku, atau harus melewati beberapa langkah secara berurutan. Composite node membantu struktur keputusan menjadi lebih rapi dan mudah dikembangkan.

Namun, mahasiswa perlu memperhatikan bahwa status `Running` mengubah cara kerja composite node. Jika salah satu `child` masih `Running`, composite node biasanya juga dapat tetap `Running` dan melanjutkan eksekusi pada `tick` berikutnya. Dengan kata lain, composite node bukan hanya memilih atau menjalankan `child` sekali, tetapi juga mengelola proses yang berlangsung.

Sebelum masuk ke **Selector**, hal utama yang harus dipahami adalah bahwa composite node adalah pengatur alur, bukan eksekutor aksi. Ia menentukan bagaimana `child` dieksekusi dan bagaimana status dikembalikan ke node induk.

### Inti yang Harus Ditekankan

- **Composite node** memiliki lebih dari satu `child` dan mengatur alur eksekusi.
- **Selector** dan **Sequence** adalah dua composite node utama.
- Selector sering dianalogikan sebagai `OR`, sedangkan Sequence sebagai `AND`.
- Status `Running` membuat perilaku composite node tidak sepenuhnya sama dengan logika boolean sederhana.

### Transisi ke Slide Berikutnya

Setelah memahami bahwa composite node mengatur alur dan status `child`, kita akan melihat bagaimana **Selector** bekerja secara lebih detail, terutama cara memilih `child` berdasarkan prioritas.

---

## Slide 015 - Selector

### Narasi

Slide ini membahas **Selector**, salah satu composite node paling penting dalam Behavior Tree. Secara intuisi, Selector adalah mekanisme pemilihan aksi: NPC tidak harus memutuskan semua perilaku sekaligus, tetapi mencoba beberapa kemungkinan secara berurutan sampai salah satu berhasil.

Struktur sederhana yang ditampilkan adalah:

```text
Selector
├─ Attack
├─ Chase
└─ Patrol
```

Artinya, saat proses eksekusi berjalan, node `Selector` memanggil child pertama, yaitu `Attack`. Jika `Attack` menghasilkan `Failure`, Selector tidak berhenti; ia lanjut ke `Chase`. Jika `Chase` juga gagal, barulah `Patrol` dicoba. Begitu ada child yang menghasilkan `Success`, Selector menghentikan proses dan mengembalikan `Success` ke parent.

Logika ini dapat dibaca sebagai:

```text
Coba Attack
Jika gagal, coba Chase
Jika gagal, coba Patrol
```

Kelebihan Selector adalah ia memberi **prioritas implisit** pada aksi. Child yang lebih penting diletakkan di kiri, sehingga NPC akan mencoba aksi tersebut lebih dulu. Misalnya, `Attack` lebih penting dari `Chase`, dan `Chase` lebih penting dari `Patrol`. Dengan cara ini, perilaku NPC menjadi lebih rapi dibanding menulis banyak transisi manual pada FSM.

Dalam konteks game, Selector membantu NPC memilih respons yang sesuai dengan kondisi lingkungan. Jika kondisi memungkinkan menyerang, `Attack` berhasil; jika tidak, NPC tetap punya fallback berupa `Chase` atau `Patrol`. Mahasiswa perlu memahami bahwa urutan child bukan sekadar daftar, melainkan urutan prioritas eksekusi.

Sebelum lanjut, hal penting yang harus dipahami adalah: Selector tidak mengeksekusi semua child sekaligus. Ia berhenti begitu ada child yang sukses. Jika semua child gagal, Selector biasanya mengembalikan `Failure`. Status `Running` juga perlu diperhatikan dalam implementasi Behavior Tree, tetapi pada slide ini fokus utamanya adalah pola percobaan kiri-ke-kanan dan pemilihan prioritas aksi.

### Inti yang Harus Ditekankan

- **Selector** mencoba child dari kiri ke kanan dan berhenti saat ada child yang `Success`.
- Urutan child menentukan **prioritas aksi**: child di kiri lebih dulu dicoba.
- Selector cocok untuk perilaku NPC yang memiliki beberapa opsi aksi dengan tingkat kepentingan berbeda.
- Jika semua child gagal, Selector mengembalikan `Failure`; jika ada child `Running`, status tersebut perlu diteruskan sesuai aturan Behavior Tree.

### Transisi ke Slide Berikutnya

Setelah memahami pola dasar Selector, kita lanjut ke slide berikutnya untuk melihat bagaimana urutan child dapat dibaca secara eksplisit sebagai **Priority Selector**, dengan contoh prioritas `Flee`, `Attack`, `Chase`, dan `Patrol`.

---

## Slide 016 - Selector sebagai Priority Selector

### Narasi

Pada slide ini, kita melihat **Selector** bukan hanya sebagai node pemilih aksi, tetapi sebagai **priority selector**. Artinya, urutan child dari kiri ke kanan mencerminkan tingkat kepentingan perilaku NPC.

Contoh pohon berikut menunjukkan empat perilaku yang mungkin dijalankan oleh NPC:

```text
Selector
├── Flee
├── Attack
├── Chase
└── Patrol
```

Makna praktisnya adalah:

1. Jika HP rendah, `Flee` menjadi prioritas utama.
2. Jika NPC bisa menyerang, `Attack` dipilih.
3. Jika NPC melihat player, `Chase` dijalankan.
4. Jika tidak ada kondisi khusus, `Patrol` menjadi perilaku default.

Intuisi pentingnya: perilaku yang lebih kritis ditempatkan lebih dulu. `Flee` biasanya lebih penting daripada `Attack` karena menyangkut kelangsungan NPC. `Attack` lebih penting daripada `Chase` karena kontak dekat lebih mendesak. `Patrol` diletakkan terakhir sebagai fallback.

Keunggulan utama dibanding banyak transition pada **FSM** adalah keterbacaan. Pada FSM, kita perlu mendefinisikan banyak transisi antar state, misalnya dari `Patrol` ke `Chase`, dari `Chase` ke `Attack`, dari `Attack` ke `Flee`, dan seterusnya. Pada selector, prioritas cukup diatur dengan urutan child.

Ini membuat desain perilaku lebih mudah diuji dan diubah. Jika desainer ingin membuat NPC lebih agresif, cukup memindahkan `Attack` ke atas `Flee` atau mengubah kondisi child. Jika ingin NPC lebih waspada, `Chase` bisa ditingkatkan prioritasnya.

Hal yang harus dipahami sebelum lanjut: selector tidak menilai semua child sekaligus. Ia memilih berdasarkan urutan prioritas dan berhenti ketika child yang dipilih memberikan hasil yang sesuai. Detail status `Success`, `Running`, dan `Failure` akan dibahas pada pseudocode berikutnya.

### Inti yang Harus Ditekankan

- **Selector** dapat dibaca sebagai **priority selector** karena urutan child menentukan prioritas perilaku.
- Child yang lebih penting, seperti `Flee` atau `Attack`, diletakkan lebih dulu agar NPC merespons kondisi kritis lebih cepat.
- `Patrol` berfungsi sebagai fallback ketika tidak ada kondisi khusus yang aktif.
- Selector membuat prioritas lebih mudah diatur dibanding banyak transition pada **FSM**.

### Transisi ke Slide Berikutnya

Selanjutnya, kita akan melihat bagaimana logika prioritas ini diimplementasikan dalam pseudocode selector, termasuk cara status child menentukan hasil akhir selector.

---

## Slide 017 - Pseudocode Selector

### Narasi

Pada slide ini kita melihat bagaimana **Selector** bekerja dalam bentuk pseudocode. Selector adalah node dalam **behavior tree** yang mencoba anak-anaknya satu per satu, biasanya sesuai prioritas. Tujuannya sederhana: memilih satu aksi yang paling sesuai untuk dijalankan pada saat itu.

Pseudocode berikut menunjukkan alur utama:

```text
Selector:
    for each child:
        status = child.Tick()

        if status == Success:
            return Success

        if status == Running:
            return Running

    return Failure
```

Urutan eksekusinya dapat dipahami sebagai berikut:

1. Selector memanggil `Tick()` pada child pertama.
2. Jika child mengembalikan `Success`, selector langsung mengembalikan `Success` ke parent.
3. Jika child mengembalikan `Running`, selector langsung mengembalikan `Running` karena aksi tersebut belum selesai.
4. Jika child mengembalikan `Failure`, selector melanjutkan ke child berikutnya.
5. Jika semua child telah dicoba dan semuanya gagal, selector mengembalikan `Failure`.

Poin penting yang harus dipahami mahasiswa adalah bahwa selector tidak menjalankan semua child secara bersamaan. Selector berhenti begitu menemukan child yang berhasil atau sedang berjalan. Dengan cara ini, perilaku NPC dapat dibuat lebih rapi: misalnya child `Flee` dicoba dulu, lalu `Attack`, lalu `Chase`, lalu `Patrol`. Jika `Flee` berhasil, aksi-aksi setelahnya tidak perlu dievaluasi.

Status `Success`, `Running`, dan `Failure` adalah bahasa bersama dalam behavior tree. `Success` berarti child menyelesaikan tugasnya. `Running` berarti child masih membutuhkan waktu, misalnya animasi bergerak atau serangan. `Failure` berarti child tidak dapat dijalankan pada kondisi saat ini. Selector menggunakan status ini untuk memutuskan apakah harus berhenti, menunggu, atau mencoba pilihan lain.

Secara implementasi, pseudocode ini sangat berguna karena menunjukkan bahwa selector adalah mekanisme **decision making** yang sederhana namun kuat. Mahasiswa perlu memahami bahwa prioritas ditentukan oleh urutan child, bukan oleh logika tambahan yang rumit. Jika urutan child salah, perilaku game bisa terasa tidak wajar meskipun setiap child sendiri sudah benar.

### Inti yang Harus Ditekankan

- **Selector** mencoba child satu per satu dan berhenti jika ada child yang `Success` atau `Running`.
- Jika semua child gagal, selector mengembalikan `Failure`.
- Urutan child menentukan prioritas perilaku, sehingga penting untuk menyusun child dari kondisi paling kritis ke kondisi paling umum.
- Status `Success`, `Running`, dan `Failure` adalah kunci komunikasi antar node dalam behavior tree.

### Transisi ke Slide Berikutnya

Setelah memahami cara selector memilih satu aksi, langkah berikutnya adalah melihat **Sequence**, yaitu node yang menjalankan child secara berurutan sampai semuanya berhasil. Sequence akan membantu kita memahami bagaimana beberapa kondisi dan aksi digabungkan menjadi satu perilaku yang lebih kompleks.

---

## Slide 018 - Sequence

### Narasi

Pada slide ini kita membahas **Sequence**, salah satu node komposit dalam **Behavior Tree**. **Sequence** menjalankan child dari kiri ke kanan secara berurutan. Tujuannya adalah memastikan bahwa serangkaian kondisi atau aksi hanya terjadi jika semua langkah sebelumnya terpenuhi.

Intuisi praktisnya, **Sequence** bekerja seperti gerbang logika **AND** untuk perilaku NPC. Jika salah satu syarat tidak terpenuhi, aksi berikutnya tidak dijalankan. Pola ini penting agar musuh tidak melakukan serangan ketika tidak melihat player atau ketika player berada di luar jangkauan.

```text
Sequence
├── Can See Player?
├── In Attack Range?
└── Attack
```

Pada diagram di atas, node `Sequence` memiliki tiga child: `Can See Player?`, `In Attack Range?`, dan `Attack`. Eksekusi dimulai dari child pertama. Jika `Can See Player?` mengembalikan `Failure`, maka sequence berhenti dan seluruh sequence dianggap gagal. Child berikutnya tidak akan dievaluasi.

Jika child pertama sukses, eksekusi lanjut ke `In Attack Range?`. Jika player terlihat tetapi jaraknya terlalu jauh, child ini gagal dan sequence langsung gagal. Artinya, `Attack` tidak akan dijalankan. Jika kedua kondisi tersebut sukses, barulah child terakhir, yaitu `Attack`, dieksekusi.

Makna logisnya dapat dibaca sebagai berikut:

```text
Jika player terlihat
DAN player dalam jarak serang
MAKA attack
```

Dengan cara ini, **Sequence** membantu memisahkan **precondition** dan **action**. Kondisi diperiksa terlebih dahulu, lalu aksi dilakukan hanya jika semua kondisi benar. Jika salah satu child gagal, sequence langsung gagal.

Hal penting yang harus dipahami mahasiswa adalah **Sequence** tidak memilih child yang paling mungkin seperti selector. **Sequence** bersifat ketat: semua child harus sukses. Jika ada satu child gagal, seluruh sequence gagal. Pola ini cocok untuk membuat aksi bersyarat yang rapi, mudah dibaca, dan mudah diuji dalam desain perilaku NPC.

### Inti yang Harus Ditekankan

- **Sequence** mengeksekusi child secara berurutan dari kiri ke kanan.
- Sequence hanya sukses jika semua child sukses; satu child gagal membuat seluruh sequence gagal.
- Diagram menunjukkan pola precondition: `Can See Player?` dan `In Attack Range?` harus benar sebelum `Attack` dijalankan.
- Sequence berguna untuk membuat aksi bersyarat pada NPC, misalnya menyerang hanya jika player terlihat dan berada dalam jangkauan.

### Transisi ke Slide Berikutnya

Setelah memahami bahwa **Sequence** menjalankan child secara berurutan, slide berikutnya akan memperluas pola ini sebagai **AND** dengan lebih banyak kondisi sebelum action dijalankan.

---

## Slide 019 - Sequence sebagai AND

### Narasi

Pada slide ini, kita melihat **Sequence** dari sudut pandang yang lebih praktis: sebagai bentuk **AND** dalam **behavior tree**. Artinya, sebuah aksi baru boleh dijalankan jika seluruh kondisi sebelumnya terpenuhi.

```text
Sequence: Attack Player
├── Is Alive?
├── Can See Player?
├── Is In Attack Range?
└── Perform Attack
```

Intuisi sederhananya adalah seperti ini: musuh tidak boleh menyerang secara sembarangan. Ia harus **hidup**, **melihat player**, berada **dalam jangkauan serangan**, dan kemudian baru boleh melakukan `Perform Attack`. Jika salah satu syarat tidak terpenuhi, maka aksi serangan tidak dijalankan.

Dalam diagram di atas, node `Sequence: Attack Player` memiliki beberapa child. Child-child di awal berfungsi sebagai **condition**, sedangkan child terakhir adalah **action**. Evaluasi dilakukan dari atas ke bawah, atau dari kiri ke kanan. Jika `Is Alive?` gagal, proses berhenti. Jika `Can See Player?` gagal, proses juga berhenti. Jika `Is In Attack Range?` gagal, `Perform Attack` tidak akan dieksekusi.

Pola ini sangat berguna untuk membuat perilaku NPC yang lebih masuk akal. Tanpa struktur seperti ini, NPC bisa melakukan hal yang tidak realistis, misalnya menyerang meskipun tidak melihat player, menyerang dari jarak terlalu jauh, atau bahkan menyerang meskipun sudah mati. Dengan **Sequence sebagai AND**, kita membuat **guard condition** yang jelas sebelum aksi penting dijalankan.

Yang perlu dipahami mahasiswa adalah bahwa **Sequence** di sini tidak hanya berarti “menjalankan child satu per satu”, tetapi juga berarti **menggabungkan syarat logika**. Dalam konteks slide ini, maknanya adalah:

- `Is Alive?` harus success.
- `Can See Player?` harus success.
- `Is In Attack Range?` harus success.
- Setelah itu, `Perform Attack` baru dijalankan.

Jika semua condition success, maka sequence berhasil dan action dapat terjadi. Jika ada satu condition saja yang gagal, sequence gagal dan action tidak dijalankan.

### Inti yang Harus Ditekankan

- **Sequence** dapat dipandang sebagai operator **AND** ketika child-childnya berupa kondisi yang harus terpenuhi semua.
- Jika salah satu condition gagal, maka `Perform Attack` tidak dijalankan.
- Pola ini membuat perilaku NPC lebih aman, konsisten, dan realistis karena aksi hanya terjadi setelah semua syarat terpenuhi.

### Transisi ke Slide Berikutnya

Setelah memahami maknanya sebagai AND, langkah berikutnya adalah melihat bagaimana logika ini diimplementasikan dalam bentuk pseudocode.

---

## Slide 020 - Pseudocode Sequence

### Narasi

Pada slide ini, kita melihat **pseudocode** dari node **Sequence** dalam behavior tree. Sequence adalah node komposit yang mengevaluasi anak-anaknya secara **berurutan**, dari anak pertama hingga anak terakhir.

Intuisi praktisnya sederhana: Sequence bekerja seperti **daftar syarat** yang harus dipenuhi satu per satu. Jika salah satu syarat gagal, proses berhenti. Jika semua syarat berhasil, barulah Sequence dianggap berhasil.

```text
Sequence:
    for each child:
        status = child.Tick()

        if status == Failure:
            return Failure

        if status == Running:
            return Running

    return Success
```

Urutan eksekusi pseudocode ini dapat dipahami sebagai berikut:

1. Sequence memanggil `Tick()` pada setiap `child` secara berurutan.
2. Setiap `child` mengembalikan status, misalnya `Success`, `Failure`, atau `Running`.
3. Jika ada `child` yang mengembalikan `Failure`, Sequence langsung mengembalikan `Failure`.
4. Jika ada `child` yang mengembalikan `Running`, Sequence juga langsung mengembalikan `Running`.
5. Jika semua `child` berhasil, Sequence mengembalikan `Success`.

Poin penting di sini adalah perilaku **fail-fast**. Sequence tidak melanjutkan evaluasi ke anak berikutnya jika sudah ada anak yang gagal. Hal ini penting karena Sequence mewakili logika **AND**: semua kondisi harus benar, dan urutan evaluasi menentukan kapan proses berhenti.

Dalam konteks perilaku NPC, Sequence sering digunakan untuk aksi yang memiliki prasyarat. Misalnya, NPC tidak boleh menyerang jika ia tidak hidup, tidak melihat pemain, atau pemain berada di luar jangkauan. Sequence memastikan bahwa aksi terakhir hanya dijalankan jika seluruh kondisi sebelumnya terpenuhi.

Jika salah satu kondisi gagal, Sequence gagal secara keseluruhan. Jika salah satu kondisi masih berjalan, misalnya proses melihat pemain masih berlangsung, Sequence juga berstatus `Running` dan akan diperiksa kembali pada tick berikutnya.

Sebelum lanjut, mahasiswa perlu memahami bahwa Sequence bukan sekadar menjalankan semua anak sampai selesai. Sequence adalah node yang **menghentikan proses lebih awal** jika ada kegagalan atau proses yang masih berjalan. Pemahaman ini menjadi dasar untuk membedakan Sequence dengan node komposit lain.

### Inti yang Harus Ditekankan

- **Sequence** mengevaluasi `child` secara **berurutan**.
- Jika ada `child` dengan status `Failure`, Sequence langsung mengembalikan `Failure`.
- Jika ada `child` dengan status `Running`, Sequence langsung mengembalikan `Running`.
- Sequence hanya mengembalikan `Success` jika **semua** `child` berhasil.
- Sequence cocok untuk aksi bersyarat, seperti menyerang hanya jika semua kondisi terpenuhi.

### Transisi ke Slide Berikutnya

Setelah memahami cara kerja Sequence, langkah berikutnya adalah membandingkannya dengan **Selector**, karena keduanya merupakan node komposit utama dalam behavior tree.

---

## Slide 021 - Selector vs Sequence

### Narasi

Pada slide ini kita membandingkan dua node komposit penting dalam **Behavior Tree**, yaitu `Selector` dan `Sequence`. Keduanya tidak langsung melakukan aksi, tetapi mengatur cara `child node` di bawahnya dieksekusi. Pemahaman ini penting karena perilaku NPC biasanya dibangun dari kombinasi pilihan dan syarat, bukan dari satu aksi tunggal.

Secara intuisi, `Selector` bekerja seperti logika **OR**. Node ini mencoba `child` satu per satu berdasarkan prioritas. Jika salah satu `child` menghasilkan `Success`, maka `Selector` berhenti dan dianggap berhasil. Dengan kata lain, `Selector` cocok untuk memilih alternatif perilaku yang paling relevan pada saat itu.

`Sequence` bekerja seperti logika **AND**. Node ini mengeksekusi `child` secara berurutan. Jika ada satu `child` yang menghasilkan `Failure`, maka seluruh `Sequence` berhenti dan dianggap gagal. `Sequence` cocok untuk perilaku yang memiliki syarat, misalnya NPC hanya menyerang jika pemain terlihat dan jaraknya dekat.

Contoh pada slide dapat dibaca sebagai berikut:

```text
Selector:
Attack atau Chase atau Patrol

Sequence:
Jika melihat player dan dekat, lakukan Attack
```

Pada contoh `Selector`, NPC mencoba `Attack` terlebih dahulu. Jika `Attack` tidak bisa dilakukan, NPC mencoba `Chase`. Jika `Chase` juga gagal, NPC bisa kembali ke `Patrol`. Urutan ini menunjukkan prioritas perilaku. Pada contoh `Sequence`, NPC harus melewati semua syarat sebelum melakukan `Attack`. Jika pemain tidak terlihat atau jarak terlalu jauh, `Attack` tidak dijalankan.

Perbedaan utamanya bukan pada aksi yang dilakukan, tetapi pada cara keputusan diambil. `Selector` memilih satu alternatif yang berhasil, sedangkan `Sequence` memastikan semua langkah atau syarat terpenuhi. Dalam desain game, pola ini membantu NPC terlihat lebih rasional: memilih perilaku yang sesuai situasi, sekaligus tidak melakukan aksi yang syaratnya belum terpenuhi.

Sebelum lanjut ke node yang lebih bawah, mahasiswa perlu memahami bahwa `Selector` dan `Sequence` adalah struktur pengendali. Mereka menentukan kapan suatu perilaku dipilih dan kapan suatu rangkaian syarat dianggap valid. Konsep ini akan menjadi dasar ketika nanti kita membahas node yang benar-benar mengecek kondisi atau menjalankan aksi.

### Inti yang Harus Ditekankan

- `Selector` adalah node **OR**: memilih alternatif perilaku dan berhenti saat ada `child` yang `Success`.
- `Sequence` adalah node **AND**: menjalankan `child` secara berurutan dan berhenti saat ada `child` yang `Failure`.
- `Selector` cocok untuk memilih aksi, seperti `Attack`, `Chase`, atau `Patrol`.
- `Sequence` cocok untuk aksi bersyarat, seperti menyerang hanya jika pemain terlihat dan dekat.
- Keduanya adalah node komposit yang mengatur eksekusi `child node`, bukan node yang langsung melakukan aksi utama.

### Transisi ke Slide Berikutnya

Setelah memahami bagaimana `Selector` dan `Sequence` mengatur keputusan, kita akan turun ke level yang lebih dasar, yaitu **Leaf Node**, tempat kondisi dan aksi nyata didefinisikan.

---

## Slide 022 - Leaf Node

### Narasi

Setelah memahami **Selector** dan **Sequence** sebagai node komposit, kita turun ke bagian paling dasar dari **behavior tree**, yaitu **leaf node**. Leaf node adalah node paling bawah dalam struktur tree. Node ini tidak memiliki child lagi, sehingga tugasnya bukan lagi memecah keputusan menjadi cabang, tetapi mengeksekusi sesuatu yang konkret. Dalam perilaku NPC, leaf node adalah titik di mana logika perilaku berubah menjadi aksi nyata di game.

Secara umum, leaf node dapat berupa dua jenis utama:

```text
Condition Node
Action Node
```

Kedua jenis ini memiliki peran berbeda. **Condition node** berfungsi sebagai pengecek keadaan. Ia hanya menilai apakah suatu syarat terpenuhi atau tidak, misalnya apakah musuh terlihat, jarak cukup dekat, atau cooldown sudah selesai. Karena hanya mengecek, condition node sebaiknya tidak melakukan perubahan besar pada game. Hasilnya biasanya berupa **Success** atau **Failure**.

**Action node** berbeda. Node ini benar-benar melakukan sesuatu, misalnya NPC bergerak, menyerang, atau memutar animasi. Karena aksi bisa berlangsung beberapa frame, action node dapat mengembalikan status **Running** selama proses masih berjalan. Setelah selesai, barulah ia mengembalikan **Success** atau **Failure**.

Perbedaan ini penting karena menentukan cara behavior tree berjalan. Jika parent node meminta leaf node untuk dieksekusi, leaf node tidak lagi memilih anak lain. Ia hanya menjawab: apakah syarat terpenuhi? atau apakah aksi sedang berjalan? atau apakah aksi selesai? Dengan cara ini, struktur tree tetap rapi: node komposit mengatur alur, sedangkan leaf node menyediakan fakta dan tindakan.

Dalam implementasi game, leaf node sering menjadi tempat menghubungkan perilaku NPC dengan komponen lain. Misalnya, action node dapat memanggil sistem movement, attack, atau animation. Condition node dapat membaca data seperti posisi player, health, ammo, atau cooldown. Dengan pemisahan ini, mahasiswa dapat memahami bahwa behavior tree bukan hanya diagram, tetapi mekanisme eksekusi yang dapat dikaitkan dengan perilaku NPC di engine game.

Sebelum lanjut, hal yang harus dipahami adalah bahwa leaf node adalah terminal dari keputusan. Ia tidak memiliki child, tidak memecah masalah lebih lanjut, dan harus memiliki tanggung jawab yang jelas. Jika condition node terlalu banyak melakukan aksi, atau action node hanya mengecek tanpa eksekusi, struktur behavior tree menjadi tidak konsisten.

### Inti yang Harus Ditekankan

- **Leaf node** adalah node terminal atau node paling bawah dalam behavior tree.
- Leaf node biasanya berupa **Condition Node** dan **Action Node**.
- **Condition node** hanya mengecek kondisi dan menghasilkan **Success** atau **Failure**.
- **Action node** melakukan aksi nyata dan dapat menghasilkan **Running** selama proses masih berlangsung.
- Leaf node menghubungkan keputusan tree dengan perilaku konkret NPC, seperti movement, attack, dan animation.

### Transisi ke Slide Berikutnya

Selanjutnya kita akan memperdalam salah satu jenis leaf node, yaitu **Condition Node**, termasuk contoh pengecekan dan cara hasilnya dipetakan menjadi **Success** atau **Failure**.

---

## Slide 023 - Condition Node

### Narasi

**Condition Node** adalah node yang bertugas mengecek apakah suatu syarat terpenuhi. Dalam Behavior Tree, node ini biasanya berada di bagian bawah pohon dan berperan sebagai **predicate** atau pengujian kondisi.

Fungsinya penting karena perilaku NPC tidak boleh dijalankan secara asal. Misalnya, NPC tidak boleh menyerang jika pemain tidak terlihat, tidak dalam jangkauan, atau amunisi habis. Condition node membantu sistem membuat keputusan yang lebih masuk akal.

Contoh condition yang umum digunakan:

```text
Can See Player?
Is Player In Range?
Is Health Low?
Has Ammo?
Is Cooldown Ready?
```

Setiap condition biasanya mengembalikan hasil biner:

```text
Can See Player?
    true  → Success
    false → Failure
```

Artinya, jika kondisi benar, node menghasilkan **Success**. Jika kondisi salah, node menghasilkan **Failure**. Hasil ini kemudian digunakan oleh struktur Behavior Tree untuk menentukan cabang perilaku mana yang dilanjutkan.

Condition node sebaiknya dibuat **singkat dan jelas**. Node ini tidak perlu menjalankan animasi, movement, atau serangan. Tugas utamanya hanya memeriksa data seperti jarak, visibilitas, health, ammo, cooldown, atau status NPC. Dengan begitu, evaluasi menjadi cepat dan mudah diuji.

Sebelum lanjut, mahasiswa perlu memahami bahwa condition node adalah **penyaring keputusan**, bukan eksekusi perilaku. Ia menjawab pertanyaan “boleh atau tidak perilaku ini dijalankan?”, bukan “perilaku apa yang dilakukan?”.

### Inti yang Harus Ditekankan

- **Condition Node** hanya mengecek syarat, bukan menjalankan aksi utama.
- Hasilnya biasanya **Success** jika kondisi benar dan **Failure** jika kondisi salah.
- Contoh kondisi: `Can See Player?`, `Is Player In Range?`, `Is Health Low?`, `Has Ammo?`, `Is Cooldown Ready?`.
- Condition node sebaiknya singkat, jelas, cepat, dan tidak memuat logika aksi yang berat.
- Node ini membantu NPC mengambil keputusan yang lebih masuk akal sebelum menjalankan perilaku.

### Transisi ke Slide Berikutnya

Setelah syarat diperiksa oleh Condition Node, perilaku nyata akan dijalankan oleh **Action Node**. Action Node akan membahas bagaimana NPC melakukan aksi seperti `Patrol`, `Chase Player`, `Attack Player`, atau `Flee`, serta bagaimana hasilnya dapat berupa `Success`, `Failure`, atau `Running`.

---

## Slide 024 - Action Node

### Narasi

Pada Behavior Tree, **Action Node** adalah node yang menjalankan perilaku nyata NPC. Jika **Condition Node** hanya menjawab apakah suatu syarat terpenuhi, maka **Action Node** adalah bagian yang membuat agen benar-benar melakukan sesuatu.

Contoh action yang umum digunakan:

```text
Patrol
Chase Player
Attack Player
Flee
Reload
Take Cover
Search Last Position
```

Intuisi praktisnya: action node biasanya berada di ujung tree, seperti daun. Ia tidak perlu mengevaluasi banyak child; tugas utamanya adalah memicu perilaku dan melaporkan status eksekusinya.

Status yang dikembalikan action node biasanya:

- `Success` → aksi selesai dengan hasil yang diharapkan.
- `Failure` → aksi tidak dapat diselesaikan atau syarat eksekusi tidak terpenuhi.
- `Running` → aksi masih berjalan dan harus dicek ulang pada tick berikutnya.

Contoh:

- `Attack` bisa mengembalikan `Success` setelah animasi serangan selesai.
- `MoveToTarget` mengembalikan `Running` selama NPC belum sampai ke target.
- `Flee` mengembalikan `Running` selama NPC belum berada di posisi aman.

Penting untuk memahami bahwa `Running` membuat Behavior Tree bersifat stateful. Tree tidak selalu harus selesai dalam satu frame; ia dapat terus memanggil node yang sama sampai status berubah. Dalam implementasi game, action node dapat terhubung ke sistem lain seperti animasi, pathfinding, steering, atau timer, tetapi dari sudut pandang tree, yang utama adalah status yang dikembalikan.

Sebelum lanjut, mahasiswa perlu membedakan tiga hal:

- **Condition** menjawab pertanyaan: “boleh/bisa tidak?”
- **Action** melakukan pekerjaan: “lakukan apa?”
- **Status** menentukan apakah tree berhenti, gagal, atau menunggu.

### Inti yang Harus Ditekankan

- **Action Node** adalah node eksekusi yang menjalankan perilaku NPC, bukan hanya mengecek kondisi.
- Action dapat mengembalikan `Success`, `Failure`, atau `Running`.
- `Running` penting untuk aksi berkelanjutan seperti `MoveToTarget`, `Flee`, atau `Attack` yang membutuhkan waktu.
- Action node membantu Behavior Tree menjadi lebih modular karena satu aksi dapat dipakai di banyak cabang perilaku.

### Transisi ke Slide Berikutnya

Setelah memahami node yang melakukan aksi, kita perlu melihat cara mengubah perilaku child tanpa mengganti isi child itu sendiri. Selanjutnya kita akan membahas **Decorator**, yaitu node yang memodifikasi evaluasi child, misalnya dengan `Cooldown`, `Repeater`, atau `Timeout`.

---

## Slide 025 - Decorator

### Narasi

Pada behavior tree, kita sudah mengenal node yang menjalankan aksi atau memeriksa kondisi. **Decorator** adalah jenis node yang posisinya berbeda: ia tidak menggantikan child, tetapi membungkus satu child dan mengubah cara child tersebut dievaluasi.

Intuisi praktisnya: decorator seperti "modifikasi" pada perilaku. Child tetap memiliki tugas aslinya, misalnya `Can See Player`, `MoveToTarget`, atau `Attack Player`. Decorator menentukan apakah hasil child dibalik, diulang, dibatasi waktu, atau ditahan sampai status tertentu tercapai.

Struktur dasarnya selalu satu child:

```text
Decorator
 └── Child Node
```

Artinya, decorator tidak boleh memiliki banyak child seperti `Selector` atau `Sequence`. Ia bekerja sebagai lapisan pengatur di atas satu node.

Contoh decorator yang umum digunakan:

- `Inverter`: mengubah makna status child.
- `Repeater`: menjalankan child beberapa kali.
- `Cooldown`: memberi jeda sebelum child dievaluasi lagi.
- `Timeout`: membatasi waktu child boleh berjalan.
- `Until Success`: menahan eksekusi sampai child menghasilkan `Success`.
- `Until Failure`: menahan eksekusi sampai child menghasilkan `Failure`.

Dalam konteks decision making NPC, decorator membuat perilaku lebih fleksibel tanpa harus menulis ulang logika child. Misalnya, sebuah condition `Can See Player` dapat dibungkus decorator agar menghasilkan keputusan negatif, atau sebuah action `Patrol` dapat diberi cooldown agar NPC tidak terus-menerus mengevaluasi gerakan yang sama.

Hal penting yang harus dipahami: decorator mengubah **cara evaluasi**, bukan isi perilaku child. Child tetap mengembalikan status seperti `Success`, `Failure`, atau `Running`; decorator kemudian menentukan bagaimana status itu diteruskan ke parent atau bagaimana child dipanggil ulang.

Sebelum lanjut, mahasiswa perlu mengingat tiga hal: decorator memiliki satu child, decorator tidak menggantikan child, dan decorator berguna untuk membuat behavior tree lebih modular.

### Inti yang Harus Ditekankan

- **Decorator** adalah node dengan tepat satu child yang mengubah cara child dievaluasi.
- Decorator tidak mengubah isi child; ia mengatur status, pengulangan, jeda, atau batas waktu.
- Contoh penting: `Inverter`, `Repeater`, `Cooldown`, `Timeout`, `Until Success`, dan `Until Failure`.
- Decorator membuat behavior tree lebih fleksibel dan modular untuk perilaku NPC.

### Transisi ke Slide Berikutnya

Selanjutnya kita akan melihat decorator yang paling dasar, yaitu `Inverter`, untuk memahami bagaimana status child dapat dibalik menjadi keputusan yang berlawanan.

---

## Slide 026 - Inverter Decorator

### Narasi

Pada slide ini kita membahas **Inverter Decorator**, salah satu decorator paling sederhana dalam behavior tree. Intuisinya, Inverter tidak mengubah isi child, tetapi membalik hasil evaluasi child. Ini penting karena dalam game AI sering dibutuhkan kondisi negatif, misalnya NPC harus bertindak ketika pemain tidak terlihat, padahal sensor yang tersedia hanya memeriksa apakah pemain terlihat.

Inverter bekerja dengan aturan status berikut:

```text
Success → Failure
Failure → Success
Running → Running
```

Artinya, jika child menghasilkan `Success`, Inverter mengubahnya menjadi `Failure`. Jika child menghasilkan `Failure`, Inverter mengubahnya menjadi `Success`. Jika child masih `Running`, Inverter tetap mengembalikan `Running` karena proses child belum selesai.

Contoh implementasinya adalah:

```text
Inverter
 └── Can See Player?
```

Node `Can See Player?` adalah condition yang mengevaluasi visibilitas pemain. Jika pemain terlihat, condition menghasilkan `Success`. Karena berada di bawah Inverter, status tersebut dibalik menjadi `Failure`. Sebaliknya, jika pemain tidak terlihat, condition menghasilkan `Failure`, lalu Inverter mengubahnya menjadi `Success`.

Makna praktisnya adalah:

```text
Jika tidak melihat player → Success
Jika melihat player → Failure
```

Dengan cara ini, kita bisa menulis kondisi negatif seperti `Player not visible` tanpa membuat logic baru. Inverter membuat behavior tree lebih ringkas, mudah dibaca, dan mengurangi duplikasi kondisi.

Urutan evaluasinya sederhana:

1. Inverter memanggil child node.
2. Child node dievaluasi sesuai logikanya, misalnya memeriksa line of sight atau visibility terhadap pemain.
3. Inverter membaca status child.
4. Inverter mengembalikan status yang sudah dibalik, kecuali statusnya `Running`.

Dalam konteks NPC, Inverter sering dipakai untuk memicu perilaku saat kondisi tertentu tidak terpenuhi. Misalnya, NPC dapat melakukan patroli atau mencari pemain hanya ketika pemain tidak terlihat. Jika pemain terlihat, branch yang menggunakan Inverter akan gagal, sehingga behavior tree dapat memilih branch lain yang lebih sesuai.

Yang perlu dipahami mahasiswa adalah bahwa Inverter hanya mengubah status, bukan mengubah perilaku child. Child tetap melakukan evaluasi yang sama; Inverter hanya memberi interpretasi terbalik terhadap hasilnya. Karena itu, nama condition harus tetap jelas agar pembaca tree tidak bingung.

### Inti yang Harus Ditekankan

- **Inverter** adalah decorator yang membalik status child: `Success` menjadi `Failure`, `Failure` menjadi `Success`, dan `Running` tetap `Running`.
- Inverter berguna untuk membuat **kondisi negatif** seperti `Player not visible` tanpa menduplikasi logika condition.
- Inverter tidak mengubah isi child; ia hanya mengubah interpretasi hasil evaluasi child dalam behavior tree.

### Transisi ke Slide Berikutnya

Setelah memahami cara Inverter membalik status condition, kita lanjut ke decorator lain yang mengatur frekuensi eksekusi, yaitu **Cooldown Decorator**.

---

## Slide 027 - Cooldown Decorator

### Narasi

Pada slide ini kita membahas **Cooldown Decorator** dalam **behavior tree**. Decorator ini tidak mengubah logika dasar `child`, tetapi menambahkan aturan waktu: `child` hanya boleh dijalankan setelah jeda tertentu selesai.

Contoh pada slide:

```text
Cooldown 1.5s
 └── Attack Player
```

Artinya, `Attack Player` tidak boleh dieksekusi setiap frame. Setelah satu kali attack dijalankan, sistem mencatat waktu terakhir eksekusi. Selama 1.5 detik berikutnya, action tersebut ditahan. Setelah cooldown selesai, `Attack Player` baru boleh dijalankan kembali.

Intuisi praktisnya sederhana: banyak action game memiliki jeda alami. Tanpa cooldown, `damage` dapat terjadi terlalu cepat, sehingga NPC terasa tidak seimbang dan gameplay menjadi tidak realistis. Cooldown memberi ritme pada perilaku agent.

Alur kerja cooldown dapat dipahami sebagai berikut:

1. Sistem menyimpan waktu terakhir eksekusi, misalnya `lastAttackTime`.
2. Pada tick berikutnya, sistem membandingkan `now` dengan `lastAttackTime + cooldownDuration`.
3. Jika cooldown belum selesai, `child` tidak dijalankan.
4. Jika cooldown sudah selesai, `child` dijalankan dan waktu terakhir diperbarui.

Secara sederhana, logikanya mirip dengan potongan berikut:

```text
if now - lastAttackTime >= 1.5:
    lastAttackTime = now
    execute Attack Player
else:
    skip Attack Player
```

Potongan ini bukan satu-satunya implementasi, tetapi menunjukkan inti konsep: cooldown adalah pengatur waktu yang membatasi frekuensi eksekusi. Dalam behavior tree, decorator ini berguna karena kita tidak perlu menulis logika jeda di dalam setiap action. Cukup tempatkan `Cooldown` di atas action yang perlu dibatasi.

Decorator ini sangat penting untuk action seperti `attack`, `heal`, `skill`, dan `special ability`. Dengan cooldown, perilaku NPC lebih terkendali, lebih mudah di-tune, dan lebih sesuai dengan desain game. Mahasiswa perlu memahami bahwa cooldown bukan membuat action berulang; cooldown hanya mengatur kapan action boleh dijalankan kembali.

### Inti yang Harus Ditekankan

- **Cooldown Decorator** membatasi frekuensi eksekusi `child` dalam behavior tree.
- Contoh `Cooldown 1.5s` di atas `Attack Player` berarti attack tidak boleh terjadi setiap frame.
- Cooldown mencegah `damage`, `heal`, atau `skill` terjadi terlalu cepat sehingga gameplay tetap seimbang.
- Implementasinya biasanya melibatkan perbandingan waktu sekarang dengan waktu terakhir eksekusi.
- Cooldown berbeda dari pengulangan; ia mengatur jeda, bukan membuat action terus berjalan.

### Transisi ke Slide Berikutnya

Setelah memahami bagaimana cooldown membatasi waktu eksekusi, kita lanjut ke decorator yang berkebalikan arah: **Repeat Decorator**, yang membuat `child` dijalankan berulang selama kondisi memungkinkan.

---

## Slide 028 - Repeat Decorator

### Narasi

Slide ini membahas **Repeat Decorator**, yaitu decorator yang membuat child behavior dijalankan berulang kali.

Contoh sederhana:

```text
Repeat
 └── Patrol
```

Pada struktur ini, node `Repeat` tidak langsung melakukan aksi. Ia hanya mengatur eksekusi child-nya, yaitu `Patrol`. Setiap tick behavior tree, `Repeat` meminta child untuk dijalankan. Jika child menghasilkan status `Running`, eksekusi dianggap masih berlangsung. Jika child menghasilkan `Success` atau `Failure`, `Repeat` dapat memulai ulang child tersebut, sehingga perilaku seperti patrol dapat terus berulang.

Makna praktisnya adalah `Patrol` menjadi perilaku yang terus aktif selama tidak ada perilaku lain yang lebih penting. Dalam behavior tree, ini biasanya terjadi karena node prioritas lebih tinggi, misalnya `Attack` atau `Flee`, mengambil alih eksekusi terlebih dahulu. Ketika perilaku prioritas selesai atau gagal, eksekusi dapat kembali ke perilaku default seperti patrol.

Perlu dipahami bahwa `Repeat` sering dipakai untuk **behavior default**, yaitu perilaku dasar NPC ketika tidak ada tujuan khusus. Namun, dalam banyak implementasi sederhana, decorator `Repeat` tidak selalu diperlukan. Jika action `Patrol` sudah dirancang untuk mengembalikan status `Running` selama NPC masih bergerak menuju titik patrol berikutnya, behavior tree akan terus memanggil action tersebut secara alami.

Dengan kata lain, ada dua cara mencapai perilaku berulang:

- menggunakan node `Repeat` yang secara eksplisit mengulang child;
- membuat action itu sendiri berstatus `Running` sampai kondisi selesai terpenuhi.

Kedua pendekatan ini menghasilkan perilaku yang mirip, tetapi cara berpikirnya berbeda. `Repeat` lebih cocok ketika kita ingin memisahkan aturan pengulangan dari aksi. Action yang mengembalikan `Running` lebih cocok ketika logika berulang sudah menjadi bagian alami dari aksi tersebut.

Sebelum lanjut, mahasiswa perlu memahami bahwa `Repeat` bukan berarti child selalu berjalan tanpa henti. Ia tetap tunduk pada prioritas behavior tree, status eksekusi, dan kondisi lingkungan. Jika ada perilaku lain yang lebih penting, perilaku berulang ini bisa tertunda atau digantikan.

### Inti yang Harus Ditekankan

- **Repeat Decorator** membuat child behavior dijalankan berulang kali.
- `Repeat` sering digunakan untuk **behavior default** seperti `Patrol`.
- Child dapat terus berjalan selama statusnya `Running` atau selama `Repeat` mengulang eksekusinya.
- Dalam implementasi sederhana, `Patrol` bisa cukup dibuat sebagai action yang mengembalikan `Running`, sehingga node `Repeat` tidak selalu diperlukan.
- Perilaku berulang tetap harus tunduk pada prioritas behavior tree dan kondisi game.

### Transisi ke Slide Berikutnya

Setelah memahami bagaimana perilaku dapat diulang, langkah berikutnya adalah melihat dari mana behavior tree mendapatkan data untuk mengambil keputusan. Data seperti posisi pemain, jarak, target, dan titik patrol biasanya disimpan pada **Blackboard**.

---

## Slide 029 - Blackboard

### Narasi

Setelah membahas decorator, kita masuk ke komponen penting lain dalam Behavior Tree, yaitu **Blackboard**. Blackboard adalah tempat menyimpan data yang digunakan oleh Behavior Tree.

Dalam implementasi perilaku NPC, node Behavior Tree sebaiknya tidak menyimpan semua informasi secara langsung. Node perlu membaca kondisi dunia dan menulis hasil keputusan ke tempat bersama. Blackboard menjadi lapisan data bersama tersebut.

Contoh data yang sering disimpan:

```text
playerTransform
lastSeenPosition
canSeePlayer
distanceToPlayer
health
currentTarget
patrolPoint
```

Data seperti `playerTransform` dan `distanceToPlayer` biasanya berasal dari proses **perception**, misalnya deteksi jarak atau status target. Data seperti `lastSeenPosition` dan `currentTarget` lebih bersifat **memory**, karena membantu NPC mengingat posisi terakhir target atau tujuan yang sedang dipilih.

Selanjutnya, node **decision** membaca data tersebut untuk menentukan perilaku. Misalnya, node condition dapat memeriksa `canSeePlayer` atau `distanceToPlayer`. Node **action** kemudian menggunakan data seperti `currentTarget` atau `patrolPoint` untuk menjalankan perilaku seperti mengejar atau patroli.

Dengan cara ini, Blackboard membantu memisahkan:

- **perception**, yaitu proses mengumpulkan informasi dari lingkungan;
- **memory**, yaitu penyimpanan data penting yang masih relevan;
- **decision**, yaitu proses memilih perilaku berdasarkan data;
- **action**, yaitu eksekusi perilaku oleh NPC.

Pemisahan ini penting karena membuat Behavior Tree lebih mudah dibaca, diuji, dan dikembangkan. Mahasiswa perlu memahami bahwa Blackboard bukan sekadar variabel global, melainkan **kontrak data** antara node-node dalam Behavior Tree.

Sebelum lanjut, pastikan mahasiswa paham bahwa setiap node dapat membaca dan menulis data yang sama, tetapi harus tetap konsisten agar perilaku NPC tidak menjadi tidak terduga.

### Inti yang Harus Ditekankan

- **Blackboard** adalah tempat penyimpanan data bersama untuk Behavior Tree.
- Data blackboard dapat berasal dari **perception**, disimpan sebagai **memory**, dibaca oleh **decision**, dan digunakan oleh **action**.
- Blackboard membantu memisahkan logika pengamatan, ingatan, pengambilan keputusan, dan eksekusi perilaku NPC.
- Node Behavior Tree sebaiknya membaca dan menulis data melalui blackboard, bukan menyimpan data penting secara tersebar.

### Transisi ke Slide Berikutnya

Selanjutnya, kita akan melihat contoh blackboard untuk enemy, lalu bagaimana condition node dan action node menggunakan data tersebut.

---

## Slide 030 - Contoh Blackboard Enemy

### Narasi

Pada slide ini, kita melihat contoh konkret **Blackboard** untuk musuh sederhana. Blackboard ini berisi data yang akan dibaca dan ditulis oleh node-node Behavior Tree. Intinya, blackboard adalah “papan memori” yang membuat musuh bisa mengingat dan menilai keadaan sekitarnya.

```text
Enemy Blackboard
├── Player Transform
├── Can See Player
├── Distance To Player
├── Last Seen Position
├── Health
├── Is Health Low
├── Attack Cooldown Ready
└── Current Patrol Point
```

Data-data ini bisa dikelompokkan berdasarkan fungsinya dalam perilaku musuh.

- `Player Transform`: posisi pemain yang diketahui musuh.
- `Can See Player`: hasil persepsi, misalnya apakah pemain terlihat atau tidak.
- `Distance To Player`: jarak antara musuh dan pemain.
- `Last Seen Position`: posisi terakhir pemain terlihat, berguna jika pemain menghilang.
- `Health`: nilai kesehatan musuh.
- `Is Health Low`: kondisi turunan dari `Health`, misalnya apakah musuh sedang lemah.
- `Attack Cooldown Ready`: penanda apakah musuh sudah boleh menyerang lagi.
- `Current Patrol Point`: titik patroin yang sedang dituju musuh.

Perhatikan bahwa beberapa data bersifat **mentah**, seperti `Health` dan `Distance To Player`, sedangkan beberapa data bersifat **hasil evaluasi**, seperti `Is Health Low` dan `Attack Cooldown Ready`. Pola ini penting karena Behavior Tree biasanya lebih mudah bekerja jika data sudah diolah menjadi kondisi yang jelas.

Condition node membaca data dari blackboard untuk menentukan apakah suatu cabang boleh dijalankan. Contoh sederhana:

```text
CanSeePlayerCondition
```

Node ini membaca nilai `Can See Player`. Jika nilainya `true`, maka cabang yang bergantung pada kondisi tersebut dapat dilanjutkan. Jika nilainya `false`, cabang tersebut tidak dijalankan. Dengan cara ini, keputusan musuh tidak ditulis langsung di dalam satu fungsi besar, tetapi dipisahkan menjadi node-node kecil yang lebih mudah dibaca.

Action node menggunakan data dari blackboard untuk melakukan sesuatu. Contoh:

```text
ChasePlayerAction
```

Action ini biasanya membutuhkan data seperti `Player Transform` atau `Last Seen Position` agar musuh tahu ke mana harus bergerak. Jika pemain terlihat, musuh bisa mengejar `Player Transform`. Jika pemain tidak terlihat, musuh bisa bergerak menuju `Last Seen Position` sebelum kembali ke perilaku lain.

Yang harus dipahami mahasiswa adalah bahwa **Blackboard bukan logika perilaku itu sendiri**. Blackboard hanya menyimpan data. Logika perilaku muncul ketika node Condition dan Action membaca serta menggunakan data tersebut. Pemisahan ini membuat sistem AI musuh lebih modular: persepsi menulis data, memori menyimpan data, keputusan membaca data, dan aksi menggunakan data.

### Inti yang Harus Ditekankan

- **Blackboard** adalah tempat data bersama untuk Behavior Tree musuh.
- Data seperti `Can See Player`, `Distance To Player`, dan `Health` membantu node mengambil keputusan.
- Condition node membaca data, sedangkan Action node menggunakan data untuk menghasilkan perilaku.
- Blackboard membuat perilaku musuh lebih modular, mudah diuji, dan tidak bergantung pada satu fungsi besar.

### Transisi ke Slide Berikutnya

Setelah kita memahami data apa saja yang disimpan di blackboard, langkah berikutnya adalah melihat bagaimana data-data itu digunakan dalam struktur Behavior Tree musuh yang sederhana.

---

## Slide 031 - Behavior Tree Enemy Sederhana

### Narasi

Slide ini menunjukkan struktur **Behavior Tree** sederhana untuk musuh. Pohon ini dievaluasi secara berulang oleh NPC untuk memilih perilaku yang paling sesuai dengan kondisi saat ini.

```text
Root
 └─ Selector
      ├─ Sequence: Flee
      │    ├─ Is Health Low?
      │    └─ Flee From Player
      │
      ├─ Sequence: Attack
      │    ├─ Can See Player?
      │    ├─ Is In Attack Range?
      │    └─ Attack Player
      │
      ├─ Sequence: Chase
      │    ├─ Can See Player?
      │    └─ Chase Player
      │
      └─ Patrol
```

Node teratas adalah `Root`. Anak utamanya adalah `Selector`, yang mengevaluasi cabang dari atas ke bawah dan memilih cabang pertama yang sukses. Urutan anak pada `Selector` menentukan prioritas perilaku:

1. `Flee`
2. `Attack`
3. `Chase`
4. `Patrol`

Dengan prioritas ini, musuh akan mencoba kabur jika `Is Health Low?` benar. Jika tidak, musuh mencoba menyerang jika `Can See Player?` dan `Is In Attack Range?` benar. Jika tidak bisa menyerang, musuh mengejar jika player terlihat. Jika semua cabang gagal, `Patrol` dijalankan sebagai fallback.

Setiap cabang utama berupa `Sequence`. `Sequence` mengevaluasi anak secara berurutan dan hanya dianggap sukses jika semua anak sukses. Jika satu kondisi gagal, sequence berhenti dan `Selector` melanjutkan ke cabang berikutnya. Kondisi-kondisi tersebut biasanya membaca data yang sudah tersedia pada blackboard, seperti health, visibilitas, dan jarak.

- `Sequence: Flee` memeriksa `Is Health Low?`, lalu menjalankan `Flee From Player`.
- `Sequence: Attack` memeriksa `Can See Player?` dan `Is In Attack Range?`, lalu menjalankan `Attack Player`.
- `Sequence: Chase` memeriksa `Can See Player?`, lalu menjalankan `Chase Player`.
- `Patrol` dijalankan jika tidak ada kondisi penting yang terpenuhi.

Struktur ini penting karena perilaku musuh menjadi terstruktur, mudah dibaca, dan mudah dikembangkan. Mahasiswa perlu memahami bahwa `Selector` mengatur prioritas, sedangkan `Sequence` memastikan kondisi dan aksi dijalankan secara berurutan.

### Inti yang Harus Ditekankan

- `Selector` mengevaluasi cabang dari atas ke bawah dan memilih cabang pertama yang sukses.
- `Sequence` hanya sukses jika semua anak sukses; satu kondisi gagal membuat sequence gagal.
- Prioritas perilaku musuh adalah `Flee`, `Attack`, `Chase`, lalu `Patrol`.
- Kondisi seperti `Is Health Low?`, `Can See Player?`, dan `Is In Attack Range?` menentukan cabang mana yang aktif.
- `Patrol` berfungsi sebagai fallback agar NPC tetap berperilaku wajar saat tidak ada ancaman atau target.

### Transisi ke Slide Berikutnya

Selanjutnya kita akan membaca pohon ini secara kasus per kasus, mulai dari HP rendah, player dekat, player terlihat tetapi jauh, hingga player tidak terlihat.

---

## Slide 032 - Membaca Tree Enemy

### Narasi

Pada slide ini kita membaca bagaimana pohon perilaku musuh dievaluasi setiap frame. Intuisi utamanya sederhana: **Behavior Tree** tidak memilih satu state lalu menunggu; ia mencoba beberapa kemungkinan perilaku secara berurutan berdasarkan **prioritas**. Node `Selector` di akar akan memeriksa anak pertama, lalu anak kedua, dan seterusnya sampai ada satu cabang yang berhasil.

Setiap cabang utama berupa `Sequence`. `Sequence` mengevaluasi anak-anaknya dari kiri ke kanan. Jika semua kondisi dan aksi berhasil, maka `Sequence` tersebut sukses dan NPC menjalankan perilaku itu. Jika ada satu saja yang gagal, `Sequence` gagal, lalu `Selector` mencoba cabang berikutnya.

```text
HP rendah        -> Flee sequence sukses
HP normal dekat  -> Flee gagal, Attack sequence sukses
Terlihat jauh    -> Flee gagal, Attack gagal, Chase sukses
Tidak terlihat   -> Flee gagal, Attack gagal, Chase gagal, Patrol dijalankan
```

Potongan di atas menunjukkan hasil evaluasi untuk empat situasi umum. Perhatikan bahwa yang berubah bukan struktur pohonnya, melainkan kondisi yang membuat satu `Sequence` sukses atau gagal.

Kita bisa membaca situasi tersebut sebagai berikut:

1. **HP rendah**
   - `Is Health Low?` bernilai benar.
   - `Flee From Player` dijalankan.
   - `Flee sequence` sukses, sehingga NPC kabur.
   - Perilaku ini menang karena prioritasnya paling tinggi.

2. **HP normal dan player dekat**
   - `Flee` gagal karena HP tidak rendah.
   - `Can See Player?` dan `Is In Attack Range?` berhasil.
   - `Attack Player` dijalankan.
   - `Attack sequence` sukses, sehingga NPC menyerang.

3. **Player terlihat tetapi belum dekat**
   - `Flee` gagal.
   - `Attack` gagal pada `Is In Attack Range?`.
   - `Chase` berhasil karena `Can See Player?` benar.
   - NPC menjalankan `Chase Player`.

4. **Player tidak terlihat**
   - `Flee`, `Attack`, dan `Chase` gagal.
   - `Patrol` dijalankan sebagai fallback.
   - NPC tetap aktif di lingkungan tanpa target.

Yang perlu dipahami mahasiswa adalah bahwa perilaku NPC tidak ditentukan oleh satu kondisi tunggal, melainkan oleh **alur evaluasi** dari atas ke bawah. `Selector` menjaga prioritas, sedangkan `Sequence` memastikan bahwa serangkaian syarat harus terpenuhi sebelum aksi dijalankan. Dengan cara ini, satu pohon perilaku dapat menghasilkan beberapa respons berbeda tanpa perlu menulis banyak cabang keputusan terpisah.

Sebelum lanjut, pastikan mahasiswa bisa menjelaskan mengapa `Flee` selalu dicoba lebih dulu, mengapa `Attack` bisa gagal meskipun player terlihat, dan mengapa `Patrol` tetap penting sebagai perilaku dasar.

### Inti yang Harus Ditekankan

- **Prioritas** menentukan urutan evaluasi: `Flee`, lalu `Attack`, lalu `Chase`, lalu `Patrol`.
- `Selector` memilih satu cabang yang sukses; `Sequence` memastikan semua kondisi di dalamnya terpenuhi.
- Kegagalan satu kondisi membuat `Sequence` gagal dan evaluasi pindah ke cabang berikutnya.
- `Patrol` berfungsi sebagai fallback ketika tidak ada kondisi khusus yang terpenuhi.
- Membaca tree berarti menelusuri alur sukses/gagal, bukan hanya membaca nama node.

### Transisi ke Slide Berikutnya

Setelah kita memahami cara membaca Behavior Tree, langkah berikutnya adalah membandingkannya dengan FSM. Pada slide berikutnya kita akan melihat kapan FSM lebih sederhana dan kapan Behavior Tree lebih nyaman untuk perilaku NPC yang banyak cabangnya.

---

## Slide 033 - Behavior Tree vs FSM

### Narasi

Setelah melihat bagaimana `tree enemy` mengevaluasi kondisi HP, jarak, dan visibilitas, kita perlu memposisikan **Behavior Tree** dalam arsitektur perilaku NPC. Pada slide ini, kita membandingkannya dengan **Finite State Machine** atau **FSM**, yaitu pendekatan klasik untuk perilaku NPC.

**FSM** memetakan perilaku NPC ke beberapa `state` yang jelas, misalnya `Patrol`, `Chase`, `Attack`, atau `Flee`. Setiap state memiliki `transition` yang dipicu oleh kondisi tertentu. Pendekatan ini cocok untuk perilaku sederhana karena alurnya mudah digambar, mudah dipahami, dan mudah diperiksa.

**Behavior Tree** menggunakan cara berpikir yang berbeda. Alih-alih bertanya `state mana yang aktif?`, Behavior Tree bertanya `cabang mana yang berhasil dievaluasi?`. Struktur pohon ini terdiri dari `tree node` yang dievaluasi berdasarkan prioritas. Jika satu cabang berhasil, cabang lain pada level yang sama bisa tidak dievaluasi.

Perbedaan utama dapat dilihat dari beberapa aspek:

- **Struktur**: FSM dibangun dari `state` dan `transition`, sedangkan Behavior Tree dibangun dari `tree node`.
- **Fokus**: FSM berfokus pada state aktif, Behavior Tree berfokus pada evaluasi prioritas.
- **Cocok untuk**: FSM cocok untuk perilaku sederhana, Behavior Tree cocok untuk perilaku modular.
- **Perubahan**: menambah perilaku pada FSM bisa memengaruhi banyak transition, sedangkan pada Behavior Tree cukup menambah node atau cabang.
- **Visual**: FSM digambarkan sebagai diagram state, Behavior Tree digambarkan sebagai diagram pohon.
- **Kompleksitas**: FSM berisiko mengalami `state explosion`, sedangkan Behavior Tree bisa dalam tetapi tetap modular.

Intuisi praktisnya adalah begini. Jika NPC hanya memiliki beberapa mode yang jelas, FSM sudah cukup. Namun ketika perilaku NPC mulai bercabang, Behavior Tree biasanya lebih nyaman karena perilaku dapat disusun menjadi cabang-cabang yang terpisah.

Yang harus dipahami mahasiswa sebelum lanjut adalah bahwa perbandingan ini bukan berarti Behavior Tree selalu lebih baik. FSM tetap penting karena sederhana dan mudah untuk perilaku kecil. Behavior Tree unggul ketika perilaku NPC mulai bercabang dan perlu diprioritaskan.

### Inti yang Harus Ditekankan

- **FSM** cocok untuk perilaku NPC yang sederhana dan memiliki state yang jelas.
- **Behavior Tree** cocok untuk perilaku modular yang banyak cabang dan berbasis prioritas.
- FSM berisiko `state explosion`, sedangkan Behavior Tree dapat tumbuh dalam tetapi tetap lebih mudah diorganisasi.

### Transisi ke Slide Berikutnya

Setelah memahami perbedaan struktural antara FSM dan Behavior Tree, kita lanjut ke slide berikutnya untuk melihat kelebihan Behavior Tree secara lebih rinci.

---

## Slide 034 - Kelebihan Behavior Tree

### Narasi

Slide ini menjelaskan mengapa **Behavior Tree** menjadi pilihan yang kuat untuk perilaku NPC yang mulai kompleks. Jika FSM berfokus pada state aktif dan transisi antar state, Behavior Tree berfokus pada **pohon keputusan** yang dievaluasi secara bertahap. Intuisinya sederhana: perilaku NPC disusun seperti daftar prioritas yang bisa diperiksa satu per satu, sehingga designer atau programmer bisa melihat aksi mana yang lebih penting pada kondisi tertentu.

Kelebihan utama pertama adalah **modularitas**. Setiap node bisa mewakili satu kondisi atau satu aksi, misalnya `CanSeeEnemy`, `Attack`, `Flee`, atau `Heal`. Karena node relatif berdiri sendiri, perilaku baru bisa ditambahkan tanpa harus merombak seluruh struktur. Hal ini membuat Behavior Tree lebih mudah dikembangkan ketika kebutuhan NPC bertambah.

Kelebihan berikutnya adalah **kemudahan membaca dan memelihara**. Struktur pohon biasanya lebih mudah divisualisasikan daripada banyak transisi FSM yang saling terhubung. Mahasiswa perlu memahami bahwa keterbacaan ini penting karena perilaku NPC sering berubah selama proses desain: jarak serangan, kondisi kesehatan, ketersediaan item, atau prioritas ancaman bisa terus disesuaikan.

Behavior Tree juga cocok untuk **prioritas aksi**. Node yang lebih tinggi atau lebih awal dievaluasi bisa mewakili perilaku yang lebih penting. Misalnya, jika NPC terluka berat, perilaku `Heal` bisa diprioritaskan sebelum `Flee` atau `Attack`. Dengan cara ini, keputusan NPC terasa lebih masuk akal karena ada urutan pemeriksaan yang jelas.

Contoh berikut menunjukkan cara menambah behavior baru secara lokal:

```text
Tambahkan Heal sebelum Flee
Tambahkan Reload sebelum Attack
Tambahkan Search setelah Chase
```

Potongan ini bukan script lengkap, tetapi catatan desain yang menggambarkan posisi node baru dalam pohon. `Heal` dimasukkan sebelum `Flee` agar NPC memilih menyembuhkan diri jika kondisinya memungkinkan. `Reload` dimasukkan sebelum `Attack` agar NPC tidak menyerang saat amunisi kosong. `Search` dimasukkan setelah `Chase` agar NPC mencari target ketika pengejaran tidak berhasil. Poin pentingnya: perubahan ini cukup menambah atau memindahkan node, tanpa harus mengubah banyak transisi seperti pada FSM.

Selain itu, **condition** dan **action** dapat dipakai ulang di berbagai cabang pohon. Node `CanSeeEnemy` bisa dipakai oleh beberapa NPC atau beberapa perilaku berbeda. Hal ini membuat Behavior Tree lebih terstruktur untuk NPC kompleks, terutama ketika banyak perilaku saling bergantung tetapi tetap ingin dipertahankan rapi.

Sebelum lanjut, mahasiswa perlu memahami bahwa kelebihan Behavior Tree terletak pada **struktur keputusan yang jelas, modular, dan mudah dikembangkan**. Namun, struktur ini tetap perlu dirancang dengan cermat, terutama pada urutan node dan prioritas perilaku.

### Inti yang Harus Ditekankan

- **Behavior Tree** memudahkan perilaku NPC yang banyak cabang karena berbasis node, bukan transisi state yang saling terkait.
- Menambah behavior baru biasanya cukup dengan menambah atau memindahkan node, misalnya `Heal`, `Reload`, atau `Search`.
- **Condition** dan **action** dapat dipakai ulang, sehingga perilaku lebih modular dan lebih mudah dipelihara.
- Prioritas aksi ditentukan oleh struktur pohon dan urutan evaluasi, bukan oleh skor numerik otomatis.

### Transisi ke Slide Berikutnya

Setelah memahami mengapa Behavior Tree lebih nyaman untuk perilaku NPC yang kompleks, kita perlu melihat batasannya. Pada slide berikutnya, kita akan membahas kekurangan Behavior Tree dan kapan pendekatan utility-based bisa lebih cocok.

---

## Slide 035 - Kekurangan Behavior Tree

### Narasi

Setelah membahas kelebihan **Behavior Tree**, kita perlu melihat sisi lain: meskipun struktur ini rapi dan mudah dikembangkan, ia tetap memiliki batas praktis.

**Behavior Tree** sangat berguna untuk NPC, tetapi ketika jumlah perilaku bertambah, tree bisa menjadi besar. Ukuran yang besar bukan berarti salah, tetapi membuat desain, review, dan pemeliharaan menjadi lebih berat.

Beberapa kekurangan utama yang perlu dipahami:

- **Tree bisa membesar**: semakin banyak kondisi, aksi, dan cabang, semakin sulit melihat keseluruhan perilaku NPC.
- **Debugging membutuhkan visualisasi**: tanpa tampilan node dan status eksekusi, mahasiswa akan kesulitan melacak node mana yang aktif, gagal, atau sedang berjalan.
- **Prioritas node harus hati-hati**: urutan node menentukan aksi mana yang lebih penting; salah urutan dapat membuat NPC melakukan aksi yang tidak sesuai.
- **Action `Running` perlu ditangani benar**: jika aksi yang sedang berjalan tidak dikembalikan dengan status yang tepat, tree bisa berhenti, mengulang, atau tidak melanjutkan perilaku berikutnya.
- **Tree terlalu dalam sulit dibaca**: banyak level node membuat alur keputusan sulit dipahami, terutama saat ada banyak cabang yang bersarang.
- **Tidak otomatis memilih aksi terbaik secara numerik**: Behavior Tree umumnya memilih berdasarkan kondisi dan prioritas, bukan menghitung skor dari banyak alternatif.

Karena itu, untuk perilaku yang membutuhkan perbandingan banyak skor, misalnya memilih target berdasarkan jarak, ancaman, dan peluang menang, pendekatan **Utility** bisa lebih cocok. Namun, ini bukan berarti Behavior Tree buruk; ia tetap sangat kuat untuk perilaku yang bersifat prioritas dan kondisi.

Sebelum lanjut, mahasiswa perlu memahami bahwa kekurangan ini bukan alasan meninggalkan Behavior Tree, tetapi alasan untuk merancang tree dengan lebih disiplin: node harus jelas, prioritas harus masuk akal, status `Running` harus benar, dan struktur harus tetap mudah dibaca.

### Inti yang Harus Ditekankan

- **Behavior Tree** tetap dapat membesar dan sulit dikelola jika tidak dirancang dengan baik.
- Debugging yang efektif membutuhkan visualisasi node dan status eksekusi.
- Urutan prioritas node sangat menentukan perilaku akhir NPC.
- Status `Running` pada action harus ditangani dengan benar agar eksekusi tidak macet atau tidak konsisten.
- Behavior Tree tidak otomatis membandingkan banyak alternatif secara numerik; pendekatan **Utility** dapat menjadi alternatif.

### Transisi ke Slide Berikutnya

Dengan memahami batasannya, kita sekarang masuk ke kesalahan umum yang sering terjadi saat membangun Behavior Tree, agar mahasiswa dapat menghindari masalah desain dan implementasi sejak awal.

---

## Slide 036 - Kesalahan Umum Behavior Tree

### Narasi

Slide ini membahas **kesalahan umum** yang sering muncul saat mahasiswa merancang **Behavior Tree** untuk perilaku NPC. Setelah sebelumnya kita melihat kekurangan Behavior Tree, sekarang kita masuk ke sisi praktis: bagaimana kesalahan desain membuat tree sulit dibaca, sulit di-debug, atau menghasilkan perilaku yang tidak stabil.

Intuisi pentingnya adalah: Behavior Tree bukan hanya kumpulan node, tetapi **struktur keputusan** yang harus punya alur yang jelas. Jika node disusun tanpa aturan, NPC bisa melakukan aksi yang tidak masuk akal, misalnya menyerang tanpa target, terus-menerus melakukan animasi yang sama, atau tidak pernah berhenti karena status node tidak benar.

Berikut kesalahan yang perlu dihindari:

1. **Semua action diletakkan tanpa condition.**  
   Jika `Action` dijalankan tanpa `Condition`, NPC bisa melakukan aksi yang tidak relevan. Misalnya, NPC menyerang padahal tidak ada musuh di dekatnya. `Condition` berfungsi sebagai penjaga agar aksi hanya dijalankan saat syaratnya terpenuhi.

2. **Selector tidak diurutkan berdasarkan prioritas.**  
   `Selector` biasanya mengevaluasi anak dari kiri ke kanan. Jika prioritas salah, NPC bisa memilih perilaku yang kurang penting terlebih dahulu. Urutan node di `Selector` harus mencerminkan prioritas perilaku, misalnya bertahan dari bahaya sebelum melakukan aksi biasa.

3. **Sequence terlalu panjang dan sulit dibaca.**  
   `Sequence` yang terlalu panjang membuat alur keputusan sulit dipahami. Jika satu `Sequence` memuat terlalu banyak langkah, lebih baik dipecah menjadi beberapa sub-sequence agar lebih modular dan mudah diuji.

4. **Action tidak mengembalikan Running.**  
   Aksi yang membutuhkan waktu, seperti berjalan, menyerang, atau membuka pintu, sebaiknya mengembalikan `Running` selama proses masih berlangsung. Jika langsung mengembalikan `Success` atau `Failure`, perilaku NPC bisa melompat ke aksi berikutnya sebelum aksi sebelumnya selesai.

5. **Cooldown attack tidak dibuat.**  
   Tanpa cooldown, NPC bisa melakukan serangan secara terus-menerus. Cooldown membantu mengatur jeda antar aksi sehingga perilaku NPC terasa lebih natural dan tidak berlebihan.

6. **Blackboard tidak diperbarui.**  
   `Blackboard` adalah tempat data bersama, seperti target, jarak, kesehatan, atau status misi. Jika data di `Blackboard` tidak diperbarui, keputusan NPC akan berdasarkan informasi yang sudah basi.

7. **Perception dicampur terlalu banyak di action.**  
   Action sebaiknya fokus pada eksekusi perilaku, bukan mengumpulkan banyak data lingkungan. Jika `Perception` terlalu banyak masuk ke dalam action, node menjadi sulit dipisahkan dan sulit diuji.

8. **Tree di-tick terlalu sering untuk NPC sangat banyak.**  
   Memanggil `Tick()` terlalu sering pada banyak NPC dapat membebani performa. Untuk game dengan banyak agen, perlu diperhatikan frekuensi tick, optimasi node, atau pembagian prioritas evaluasi.

9. **Tidak ada debug status node.**  
   Tanpa debug, mahasiswa sulit mengetahui node mana yang sedang aktif, node mana yang gagal, atau mengapa NPC tidak berperilaku sesuai harapan. Debug status node sangat membantu saat praktikum.

10. **Node terlalu spesifik dan tidak reusable.**  
    Node yang terlalu spesifik untuk satu kasus membuat Behavior Tree sulit dikembangkan. Node sebaiknya dibuat cukup umum, misalnya `MoveToTarget`, `AttackTarget`, atau `CheckDistance`, agar bisa dipakai di banyak situasi.

Kesalahan-kesalahan ini biasanya tidak terlihat saat tree masih kecil. Namun, ketika tree bertambah besar, masalah desain akan cepat muncul. Karena itu, mahasiswa perlu membiasakan diri merancang Behavior Tree dengan struktur yang rapi, data yang jelas, dan status node yang benar.

### Inti yang Harus Ditekankan

- **Condition** harus digunakan untuk membatasi kapan action boleh dijalankan.
- **Selector** harus diurutkan sesuai prioritas perilaku NPC.
- Action yang berlangsung lama harus mengembalikan **Running**, bukan langsung selesai.
- **Blackboard** harus diperbarui agar keputusan NPC berdasarkan data terbaru.
- **Perception** sebaiknya dipisahkan dari action agar node lebih bersih dan mudah diuji.
- Debug status node sangat penting untuk memahami perilaku NPC.
- Node sebaiknya dibuat **reusable**, bukan terlalu spesifik untuk satu kasus.

### Transisi ke Slide Berikutnya

Setelah memahami kesalahan umum yang harus dihindari, langkah berikutnya adalah melihat bagaimana konsep Behavior Tree dapat diimplementasikan secara sederhana dalam Unity, mulai dari struktur node, status node, hingga fungsi `Tick()` yang menjadi dasar eksekusi perilaku.

---

## Slide 037 - Implementasi Konsep BT di Unity

### Narasi

Pada slide ini kita masuk ke tahap implementasi dasar **Behavior Tree** di Unity. Setelah memahami struktur node dan kesalahan umum, langkah berikutnya adalah menyiapkan kerangka kode yang bisa dikembangkan menjadi sistem perilaku NPC. Intuisi praktisnya sederhana: setiap node adalah keputusan kecil, dan seluruh perilaku NPC dibangun dari kombinasi node yang di-*tick* secara berulang.

Struktur class yang ditampilkan menunjukkan hierarki dasar:

```text
Node
├── SelectorNode
├── SequenceNode
├── ConditionNode
└── ActionNode
```

`Node` menjadi konsep induk, sedangkan `SelectorNode`, `SequenceNode`, `ConditionNode`, dan `ActionNode` adalah jenis node yang akan digunakan untuk menyusun perilaku. Dalam praktikum, struktur ini membantu mahasiswa memisahkan logika keputusan dari aksi konkret, sehingga perilaku NPC lebih mudah dibaca, diuji, dan dikembangkan.

Status node didefinisikan sebagai enum:

```csharp
public enum NodeState
{
    Success,
    Failure,
    Running
}
```

Tiga status ini penting karena Behavior Tree tidak hanya menjawab “berhasil atau gagal”, tetapi juga “sedang berjalan”. `Success` berarti node selesai dengan hasil positif, `Failure` berarti node tidak dapat dilanjutkan atau tidak memenuhi syarat, dan `Running` berarti node masih membutuhkan waktu, misalnya animasi, pergerakan, atau cooldown. Tanpa status `Running`, perilaku NPC akan terasa melompat-lompat karena aksi tidak dapat diproses secara bertahap.

Base node didefinisikan sebagai class abstrak:

```csharp
public abstract class BTNode
{
    public abstract NodeState Tick();
}
```

`BTNode` menjadi kontrak dasar untuk semua node. Setiap node wajib memiliki metode `Tick()` yang mengembalikan salah satu nilai `NodeState`. Pola ini membuat perilaku game dapat dieksekusi secara konsisten: setiap frame atau interval tertentu, root tree memanggil `Tick()`, lalu keputusan mengalir ke node anak. Mahasiswa perlu memahami bahwa `Tick()` adalah titik pusat eksekusi Behavior Tree.

Secara alur, implementasi ini bekerja seperti pipeline sederhana:

1. Sistem game memanggil `Tick()` pada root Behavior Tree.
2. Root node memeriksa child node sesuai logikanya.
3. Setiap child mengembalikan `Success`, `Failure`, atau `Running`.
4. Hasil tersebut menentukan apakah perilaku NPC berhenti, berlanjut, atau menunggu tick berikutnya.

Dengan struktur ini, mahasiswa dapat membangun Behavior Tree sederhana untuk NPC, misalnya memeriksa kondisi lalu menjalankan aksi. Yang perlu ditekankan sebelum lanjut adalah bahwa kode ini masih berupa fondasi: belum ada logika `SelectorNode`, `SequenceNode`, `ConditionNode`, atau `ActionNode` yang lengkap. Namun, fondasi ini sudah cukup untuk memahami bagaimana node saling terhubung dan bagaimana status node mengontrol perilaku NPC di Unity.

### Inti yang Harus Ditekankan

- **Behavior Tree** di Unity dibangun dari node yang dapat di-*tick* secara berulang.
- `NodeState` harus mencakup `Success`, `Failure`, dan `Running` agar perilaku NPC dapat berjalan bertahap.
- `BTNode` adalah class abstrak yang mewajibkan setiap node memiliki `Tick()`.
- Struktur `SelectorNode`, `SequenceNode`, `ConditionNode`, dan `ActionNode` menjadi dasar penyusunan perilaku NPC.
- Implementasi ini adalah fondasi praktikum, bukan perilaku lengkap.

### Transisi ke Slide Berikutnya

Selanjutnya kita akan melihat bagaimana `SelectorNode` diimplementasikan, karena node ini menentukan cara Behavior Tree memilih child pertama yang berhasil atau sedang berjalan.

---

## Slide 038 - Contoh Selector Node

### Narasi

Pada slide ini kita melihat implementasi konkret dari salah satu node komposit dalam **Behavior Tree**, yaitu **Selector Node**. Setelah sebelumnya kita mengenal struktur dasar `BTNode`, `NodeState`, dan bentuk class sederhana, sekarang kita fokus pada bagaimana sebuah node mengambil keputusan dari beberapa pilihan perilaku.

Intuisi praktisnya, selector seperti NPC yang punya beberapa opsi tindakan. Misalnya, jika musuh terlihat maka serang; jika tidak, mundur; jika tidak bisa mundur, diam. Selector akan mencoba opsi satu per satu sampai ada yang berhasil atau sedang berjalan.

```csharp
public class SelectorNode : BTNode
{
    private List<BTNode> children;

    public override NodeState Tick()
    {
        foreach (BTNode child in children)
        {
            NodeState state = child.Tick();

            if (state == NodeState.Success)
                return NodeState.Success;

            if (state == NodeState.Running)
                return NodeState.Running;
        }

        return NodeState.Failure;
    }
}
```

Dari kode tersebut, `SelectorNode` mewarisi `BTNode` dan menyimpan daftar `children`. Setiap `Tick()` memanggil `Tick()` pada setiap child secara berurutan.

Urutan eksekusinya adalah sebagai berikut:

1. Ambil child pertama dari `children`.
2. Jalankan `child.Tick()`.
3. Jika child mengembalikan `Success`, selector langsung mengembalikan `Success`.
4. Jika child mengembalikan `Running`, selector juga mengembalikan `Running` agar perilaku yang sedang berjalan tidak terputus.
5. Jika child mengembalikan `Failure`, selector lanjut ke child berikutnya.
6. Jika semua child gagal, selector mengembalikan `Failure`.

Poin penting yang perlu dipahami adalah selector tidak mengevaluasi semua child sekaligus. Ia berhenti begitu menemukan child yang `Success` atau `Running`. Ini membuat perilaku NPC lebih efisien dan mudah dibaca.

Dalam konteks game, selector berguna untuk mengatur prioritas perilaku. Child pertama adalah prioritas tertinggi. Jika child pertama gagal, barulah sistem mencoba alternatif. Dengan cara ini, satu node bisa merepresentasikan logika “coba A, kalau tidak bisa coba B, kalau tidak bisa coba C”.

Sebelum lanjut, mahasiswa perlu memahami bahwa selector adalah node komposit yang mengatur keputusan berdasarkan prioritas. Ia tidak menentukan kondisi atau aksi secara langsung; ia hanya mengatur kapan child mana yang dijalankan. Pemahaman ini penting karena nanti kita akan membandingkannya dengan node lain yang memiliki aturan keberhasilan berbeda.

### Inti yang Harus Ditekankan

- **Selector Node** mencoba child secara berurutan sampai ada child yang `Success` atau `Running`.
- Jika semua child `Failure`, selector mengembalikan `Failure`.
- Child pertama memiliki prioritas tertinggi dalam keputusan NPC.
- Selector adalah node komposit yang mengatur alur perilaku, bukan aksi tunggal.

### Transisi ke Slide Berikutnya

Setelah memahami bagaimana selector memilih satu perilaku dari beberapa pilihan, kita akan melihat node komposit lain yang bekerja dengan logika berbeda, yaitu `SequenceNode`, di mana keberhasilan bergantung pada seluruh child yang dijalankan.

---

## Slide 039 - Contoh Sequence Node

### Narasi

Pada slide ini kita melihat implementasi **Sequence Node** dalam Behavior Tree. Node ini berperan sebagai node komposit yang mengeksekusi beberapa child secara berurutan. Intuisinya sederhana: sequence adalah rangkaian langkah yang harus diselesaikan satu per satu, misalnya “periksa kondisi, lalu bergerak, lalu menyerang”.

```csharp
public class SequenceNode : BTNode
{
    private List<BTNode> children;

    public override NodeState Tick()
    {
        foreach (BTNode child in children)
        {
            NodeState state = child.Tick();

            if (state == NodeState.Failure)
                return NodeState.Failure;

            if (state == NodeState.Running)
                return NodeState.Running;
        }

        return NodeState.Success;
    }
}
```

Metode `Tick()` dipanggil oleh parent node pada setiap tick behavior tree. Sequence node kemudian memanggil `Tick()` pada child pertama, lalu child berikutnya, sesuai urutan yang tersimpan dalam `children`.

Perilaku penting pertama adalah **short-circuit failure**. Jika salah satu child mengembalikan `NodeState.Failure`, sequence langsung mengembalikan `NodeState.Failure` tanpa mengeksekusi child berikutnya. Artinya, langkah berikutnya tidak akan dijalankan jika prasyarat sebelumnya gagal.

Perilaku penting kedua adalah penanganan `NodeState.Running`. Jika child sedang berjalan, sequence mengembalikan `NodeState.Running`. Dengan cara ini, parent tahu bahwa sequence belum selesai dan akan memanggilnya kembali pada tick berikutnya. Dalam implementasi sederhana seperti kode di atas, urutan child dapat dimulai ulang; pada implementasi yang lebih lengkap, biasanya disimpan indeks child terakhir agar proses tidak diulang dari awal.

Jika semua child berhasil, sequence mengembalikan `NodeState.Success`. Inilah alasan sequence cocok untuk aksi yang memiliki beberapa tahap, misalnya NPC harus berada dalam jarak tertentu, target terlihat, lalu melakukan serangan. Jika salah satu kondisi tidak terpenuhi, sequence gagal dan parent dapat memilih cabang lain.

Sebagai perbandingan singkat dengan selector, sequence menuntut **semua child berhasil**, sedangkan selector cukup memiliki satu child yang berhasil atau sedang berjalan. Jadi sequence bekerja seperti logika “AND”, sementara selector bekerja seperti logika “OR”.

### Inti yang Harus Ditekankan

- **Sequence Node** mengeksekusi child secara berurutan dan hanya sukses jika semua child sukses.
- Jika ada child yang `NodeState.Failure`, sequence langsung gagal dan child berikutnya tidak dieksekusi.
- Jika ada child yang `NodeState.Running`, sequence melaporkan `NodeState.Running` sampai proses selesai.
- Urutan child penting karena sequence merepresentasikan tahapan perilaku NPC yang harus diikuti.
- Sequence berguna untuk menggabungkan kondisi dan aksi menjadi satu rangkaian perilaku yang konsisten.

### Transisi ke Slide Berikutnya

Setelah memahami bagaimana sequence mengatur urutan perilaku, langkah berikutnya adalah melihat bagaimana action node dalam Behavior Tree dapat terhubung dengan sistem navigasi, khususnya `NavMeshAgent`, untuk menjalankan aksi seperti mengejar, menyerang, atau patroli.

---

## Slide 040 - Behavior Tree dan NavMeshAgent

### Narasi

Pada slide ini kita melihat bagaimana **Behavior Tree** terhubung dengan sistem gerak NPC di Unity, khususnya komponen `NavMeshAgent`.

Intuisi pentingnya sederhana: **Behavior Tree menentukan apa yang harus dilakukan**, sedangkan **`NavMeshAgent` menentukan bagaimana NPC bergerak** di atas `NavMesh`. Dengan kata lain, tree tidak perlu menghitung pathfinding secara manual; tree cukup memilih aksi, lalu aksi tersebut memanggil perintah navigasi.

Dalam contoh `ChasePlayerAction`, action node memanggil:

```text
ChasePlayerAction
    ↓
agent.SetDestination(player.position)
```

Artinya, ketika tree memilih aksi mengejar, NPC tidak langsung “teleport” ke pemain. `agent.SetDestination(player.position)` memberi tujuan baru ke `NavMeshAgent`, lalu agent mencari jalur yang valid di `NavMesh` dan menggerakkan NPC menuju pemain.

Untuk aksi menyerang, pola pergerakannya berbeda:

```text
agent.isStopped = true
FacePlayer()
PlayAttackAnimation()
```

Di sini NPC berhenti bergerak, menghadap pemain, lalu menjalankan animasi serangan. Ini menunjukkan bahwa action node tidak selalu melakukan navigasi; action node bisa mengatur state gerak, orientasi, dan animasi NPC.

Untuk aksi patroli, contoh yang diberikan adalah:

```text
agent.SetDestination(currentWaypoint.position)
```

Aksi ini membuat NPC berpindah antar waypoint. Dalam desain game, pola seperti ini sering dipakai untuk NPC penjaga, musuh yang berkeliling, atau karakter yang menunggu di area tertentu.

Hal yang harus dipahami mahasiswa adalah **pemisahan tanggung jawab** antara keputusan dan eksekusi:

- **Behavior Tree** memilih aksi berdasarkan kondisi atau prioritas.
- **`NavMeshAgent`** menjalankan pergerakan, pathfinding, dan update posisi NPC.
- **Action node** menjadi jembatan antara keduanya dengan memanggil API seperti `SetDestination`, `isStopped`, `FacePlayer`, atau `PlayAttackAnimation`.

Dengan pola ini, perilaku NPC menjadi lebih modular. Kita bisa mengganti aksi patroli, mengejar, atau menyerang tanpa harus menulis ulang logika pathfinding.

### Inti yang Harus Ditekankan

- **Behavior Tree** berfungsi sebagai pengambil keputusan, bukan sebagai engine pathfinding.
- **`NavMeshAgent`** adalah komponen navigasi yang mengeksekusi pergerakan NPC di atas `NavMesh`.
- Action node seperti `ChasePlayerAction`, attack action, dan patrol action hanya memanggil perintah navigasi atau perilaku NPC.
- Pemisahan antara **decision** dan **movement** membuat NPC lebih mudah dikembangkan dan diuji.

### Transisi ke Slide Berikutnya

Setelah memahami bagaimana tree memicu aksi gerak, langkah berikutnya adalah melihat dari mana kondisi keputusan itu berasal. Slide berikutnya akan membahas bagaimana **perception** memperbarui data yang dibaca oleh Behavior Tree.

---

## Slide 041 - Behavior Tree dan Perception

### Narasi

Pada slide ini, kita fokus pada **perception** sebagai sumber informasi bagi **Behavior Tree**. Behavior Tree tidak bisa mengambil keputusan hanya dari struktur node; ia juga membutuhkan data tentang keadaan NPC dan lingkungan sekitar. Data inilah yang biasanya disimpan dalam **blackboard**.

**Perception** berperan seperti lapisan sensor NPC. Ia memeriksa hal-hal seperti apakah player terlihat, seberapa jauh jarak player, atau kondisi tertentu yang relevan dengan perilaku NPC. Hasil pemeriksaan tersebut kemudian ditulis ke dalam blackboard.

Contoh implementasinya adalah:

```csharp
blackboard.canSeePlayer = CanSeePlayer();
blackboard.distanceToPlayer =
    Vector3.Distance(transform.position, player.position);
```

Pada potongan kode ini, `CanSeePlayer()` menghasilkan nilai boolean yang menyatakan apakah player dapat dilihat oleh NPC. Nilai itu disimpan ke `blackboard.canSeePlayer`. Sementara itu, `Vector3.Distance(transform.position, player.position)` menghitung jarak antara posisi NPC dan posisi player, lalu disimpan ke `blackboard.distanceToPlayer`.

Dengan cara ini, **condition node** tidak perlu memanggil sensor secara langsung. Ia cukup membaca nilai yang sudah tersedia di blackboard:

```text
blackboard.canSeePlayer
blackboard.distanceToPlayer
blackboard.health
```

Artinya, keputusan di Behavior Tree menjadi lebih sederhana. Node hanya memeriksa kondisi, bukan melakukan perhitungan sensor yang berat.

Urutan kerjanya dapat dipahami sebagai berikut:

1. **Perception** memeriksa lingkungan.
2. Hasil pemeriksaan disimpan ke **blackboard**.
3. **Condition node** membaca nilai dari blackboard.
4. **Behavior Tree** memilih cabang perilaku berdasarkan kondisi tersebut.

Pemisahan ini penting karena membuat sistem lebih rapi. Sensor, penyimpanan data, dan pengambilan keputusan tidak bercampur dalam satu node. Jika nanti cara deteksi player berubah, kita cukup memperbarui bagian perception, tanpa harus mengubah seluruh logic di Behavior Tree.

Secara praktis, pendekatan ini membuat NPC terasa lebih responsif karena keputusan diambil dari data yang sudah disiapkan. Namun, mahasiswa perlu memahami bahwa blackboard di sini menyimpan **keadaan saat ini**, bukan memori jangka panjang.

### Inti yang Harus Ditekankan

- **Perception** bertugas memperbarui data lingkungan ke **blackboard**.
- **Blackboard** berfungsi sebagai tempat penyimpanan kondisi yang bisa dibaca oleh Behavior Tree.
- **Condition node** cukup membaca nilai seperti `blackboard.canSeePlayer` dan `blackboard.distanceToPlayer`.
- Pemisahan antara sensor, penyimpanan data, dan keputusan membuat Behavior Tree lebih mudah dikembangkan dan dipelihara.

### Transisi ke Slide Berikutnya

Setelah Behavior Tree dapat membaca keadaan saat ini dari blackboard, langkah berikutnya adalah membuat NPC tidak langsung melupakan informasi penting. Slide berikutnya akan membahas bagaimana **memory** digunakan untuk menyimpan data seperti posisi terakhir player terlihat.

---

## Slide 042 - Behavior Tree dengan Memory

### Narasi

Pada slide ini, kita menambahkan **memory** ke dalam Behavior Tree. Memory berfungsi sebagai catatan jangka pendek NPC tentang apa yang terakhir kali diketahui.

```text
lastSeenPosition
lastHeardSoundPosition
lastKnownThreat
```

Variabel seperti `lastSeenPosition` biasanya diisi oleh sistem perception ketika player masih terlihat. Setelah player hilang, nilai ini tidak langsung hilang, melainkan tetap tersimpan di blackboard. Dengan begitu, condition node cukup membaca nilai yang sudah ada.

Contoh tree:

```text
Selector
├── Attack if visible and close
├── Chase if visible
├── Search Last Seen Position
└── Patrol
```

`Selector` mengevaluasi anak dari atas ke bawah. Jika player terlihat dan dekat, NPC memilih `Attack`. Jika terlihat tetapi belum dekat, NPC memilih `Chase`. Jika player tidak terlihat tetapi `lastSeenPosition` masih valid, NPC memilih `Search Last Seen Position`. Jika tidak ada informasi yang cukup, NPC kembali ke `Patrol`.

Perilaku `Search Last Seen Position` penting karena memberi NPC kesan "mengingat". Alurnya sederhana:

1. NPC bergerak ke `lastSeenPosition`.
2. NPC mencari sebentar, misalnya menunggu atau memeriksa area sekitar.
3. Jika player ditemukan, `lastSeenPosition` diperbarui.
4. Jika tidak ditemukan, NPC kembali ke `Patrol`.

Dengan memory, NPC tidak langsung "lupa" ketika player keluar dari pandangan. Ia tetap punya respons yang masuk akal, sehingga perilaku game terasa lebih hidup dan lebih mendekati agen yang mampu mempertahankan keadaan.

Sebelum lanjut, mahasiswa perlu memahami bahwa memory bukan sensor baru. Memory adalah **state tersimpan** yang dibaca oleh Behavior Tree, biasanya melalui blackboard. Nilai memory harus tetap konsisten dengan kondisi dunia, misalnya dibersihkan atau diberi batas waktu agar NPC tidak terus mengejar posisi lama yang sudah tidak relevan.

### Inti yang Harus Ditekankan

- **Memory** membuat Behavior Tree mampu mempertahankan informasi seperti `lastSeenPosition`, `lastHeardSoundPosition`, dan `lastKnownThreat`.
- `Selector` memilih perilaku berdasarkan prioritas: attack, chase, search last seen, lalu patrol.
- Memory dibaca dari blackboard, sehingga tree tidak perlu menghitung sensor secara langsung.
- Perilaku "mencari posisi terakhir" membuat NPC tampak lebih cerdas karena tidak langsung lupa saat player hilang.

### Transisi ke Slide Berikutnya

Setelah memahami bagaimana memory memperkuat Behavior Tree, kita akan masuk ke bentuk Behavior Tree yang akan digunakan dalam praktikum, yaitu perilaku NPC berdasarkan kondisi HP, jarak, dan visibilitas player.

---

## Slide 043 - Behavior Tree untuk Praktikum

### Narasi

Slide ini memuat rencana praktikum yang akan dikerjakan: membangun **NPC** yang perilakunya dikendalikan oleh **Behavior Tree**. Fokusnya bukan langsung pada kode lengkap, tetapi pada target perilaku yang harus bisa dihasilkan oleh NPC. Dengan memahami target ini, mahasiswa akan lebih mudah merancang struktur pohon perilaku sebelum masuk ke detail implementasi.

Intuisi utamanya adalah NPC perlu mengambil keputusan berulang kali berdasarkan kondisi yang sedang terjadi. **Behavior Tree** membantu keputusan ini menjadi terstruktur karena perilaku disusun sebagai daftar prioritas. Node di atas biasanya lebih penting daripada node di bawah, sehingga NPC tidak perlu memilih secara acak, melainkan mengikuti aturan yang sudah ditentukan.

Target perilaku yang direncanakan adalah sebagai berikut:

```text
Jika HP rendah
    → Flee

Jika player terlihat dan dekat
    → Attack

Jika player terlihat tetapi jauh
    → Chase

Jika player tidak terlihat
    → Patrol
```

Secara konsep, perilaku ini dapat dibaca sebagai sebuah **Selector** yang mengevaluasi kondisi dari atas ke bawah. Setiap kali NPC melakukan `tick`, sistem akan memeriksa kondisi pertama. Jika kondisi terpenuhi, maka aksi yang sesuai langsung dijalankan. Jika tidak, sistem lanjut ke kondisi berikutnya.

Urutan evaluasi ini penting karena menentukan prioritas perilaku:

1. Jika `HP` rendah, NPC melakukan `Flee`.
2. Jika `player` terlihat dan dekat, NPC melakukan `Attack`.
3. Jika `player` terlihat tetapi jauh, NPC melakukan `Chase`.
4. Jika `player` tidak terlihat, NPC melakukan `Patrol`.

Artinya, kondisi `HP rendah` memiliki prioritas lebih tinggi daripada `Attack`. Hal ini membuat NPC lebih masuk akal: ketika nyawanya hampir habis, ia tidak langsung menyerang, melainkan mundur terlebih dahulu. Setelah kondisi itu tidak lagi terpenuhi, barulah NPC kembali menilai apakah harus menyerang, mengejar, atau berpatroli.

Dalam implementasi nanti, setiap kondisi akan bergantung pada data yang dimiliki NPC, misalnya nilai `HP`, jarak terhadap `player`, dan status apakah `player` terlihat. Setiap aksi seperti `Flee`, `Attack`, `Chase`, dan `Patrol` akan menjadi tugas yang dijalankan oleh NPC. Detail teknis dan langkah implementasi akan dibahas di modul terpisah, tetapi mahasiswa perlu memahami struktur perilaku ini terlebih dahulu.

### Inti yang Harus Ditekankan

- **Behavior Tree** digunakan untuk menyusun perilaku NPC berdasarkan prioritas yang jelas.
- Urutan kondisi menentukan perilaku: `Flee` karena `HP` rendah lebih penting daripada `Attack`.
- Mahasiswa perlu memahami hubungan antara **Condition**, **Action**, dan proses `tick` sebelum masuk ke implementasi.
- Slide ini menetapkan target perilaku praktikum, bukan detail teknis lengkap.

### Transisi ke Slide Berikutnya

Setelah memahami bagaimana Behavior Tree mengatur perilaku NPC berdasarkan prioritas, langkah berikutnya adalah melihat pendekatan decision making lain yang tidak bergantung pada urutan prioritas tetap, yaitu pendekatan berbasis utility.

---

## Slide 044 - Bagian Kedua: Utility-Based AI

### Narasi

Setelah membahas **Behavior Tree**, kita masuk ke bagian kedua dari materi decision making, yaitu **Utility-Based AI**. Pendekatan ini penting karena tidak semua perilaku NPC cocok diatur dengan prioritas tetap. Dalam Behavior Tree, alur keputusan sering ditentukan oleh struktur node dan urutan evaluasi. Pada Utility-Based AI, keputusan dibuat berdasarkan **skor** atau **nilai utilitas** yang dihitung dari kondisi game saat itu.

Intuisi praktisnya sederhana: NPC tidak bertanya “apakah aturan pertama terpenuhi?”, tetapi “aksi mana yang paling berguna sekarang?”. Setiap aksi diberi nilai, lalu NPC memilih aksi dengan nilai tertinggi. Dengan cara ini, perilaku NPC bisa terasa lebih adaptif karena perubahan HP, jarak, ancaman, atau situasi lain dapat langsung memengaruhi skor.

Contoh pada slide menunjukkan tiga aksi:

```text
Attack = 0.75
Flee   = 0.90
Patrol = 0.10

Pilih Flee
```

Pada contoh ini, `Flee` memiliki skor tertinggi, yaitu `0.90`, sehingga NPC memilih `Flee` meskipun `Attack` juga cukup tinggi. Nilai `Patrol` rendah karena kondisi saat itu tidak mendukung perilaku patroli. Urutan eksekusinya adalah:

1. Sistem menilai kondisi NPC dan lingkungan.
2. Setiap aksi diberi skor.
3. Aksi dengan skor tertinggi dipilih.
4. Aksi tersebut dieksekusi.

Yang harus dipahami mahasiswa adalah bahwa Utility-Based AI mengubah keputusan dari “pilih berdasarkan aturan prioritas” menjadi “pilih berdasarkan nilai yang paling relevan”. Ini sangat berguna ketika NPC memiliki banyak pilihan dan situasi berubah cepat.

### Inti yang Harus Ditekankan

- **Utility-Based AI** memilih aksi berdasarkan **skor**, bukan urutan prioritas tetap.
- Skor mencerminkan seberapa berguna suatu aksi pada kondisi saat ini.
- Contoh `Flee = 0.90` menunjukkan bahwa aksi dengan nilai tertinggi dipilih.
- Pendekatan ini membuat NPC lebih adaptif terhadap perubahan kondisi game.

### Transisi ke Slide Berikutnya

Selanjutnya, kita akan melihat definisi dan alur kerja **Utility-Based AI** secara lebih lengkap, mulai dari game state, evaluasi aksi, pemberian skor, hingga eksekusi aksi terpilih.

---

## Slide 045 - Apa Itu Utility-Based AI?

### Narasi

Pada slide ini, kita membahas **Utility-Based AI** sebagai pendekatan decision making yang berbasis penilaian. Intinya, NPC tidak memilih aksi karena aturan yang selalu lebih penting, tetapi karena aksi tersebut dinilai paling berguna pada kondisi saat ini.

Secara intuitif, pendekatan ini membantu NPC berperilaku lebih adaptif. Jika kondisi berubah, nilai kegunaan setiap aksi juga berubah. Misalnya, aksi bertahan dapat menjadi lebih relevan ketika kondisi NPC melemah, sementara aksi menyerang dapat menjadi lebih relevan ketika NPC dalam keadaan kuat.

Alur utama dapat dilihat dari diagram berikut:

```text
Game State
    ↓
Evaluate Actions
    ↓
Score Each Action
    ↓
Choose Highest Score
    ↓
Execute Action
```

Alur ini dapat dibaca sebagai proses evaluasi yang berulang:

1. `Game State` menjadi input utama, yaitu kondisi dunia dan kondisi NPC pada saat itu.
2. `Evaluate Actions` memeriksa semua aksi yang tersedia untuk NPC.
3. `Score Each Action` memberikan nilai utilitas kepada setiap aksi berdasarkan kondisi yang sedang terjadi.
4. `Choose Highest Score` memilih aksi dengan nilai tertinggi.
5. `Execute Action` menjalankan aksi terpilih sehingga perilaku NPC terlihat di game.

Poin penting yang harus dipahami adalah bahwa skor utilitas bukan sekadar label prioritas tetap. Skor ini adalah hasil penilaian terhadap situasi, sehingga aksi yang terpilih dapat berbeda dari satu waktu ke waktu lain. Inilah yang membuat pendekatan ini cocok untuk NPC yang memiliki banyak pilihan dan harus memilih perilaku paling relevan.

Sebelum lanjut, mahasiswa perlu memahami bahwa inti Utility-Based terletak pada tiga hal: ada banyak aksi, setiap aksi diberi skor, dan aksi dengan skor tertinggi yang dieksekusi. Pemahaman ini menjadi dasar untuk melihat contoh perhitungan skor pada slide berikutnya.

### Inti yang Harus Ditekankan

- **Utility-Based AI** memilih aksi berdasarkan skor utilitas, bukan urutan prioritas yang tetap.
- Alur utamanya adalah: ambil `Game State`, evaluasi aksi, beri skor, pilih skor tertinggi, lalu eksekusi aksi.
- Skor utilitas membuat NPC dapat menyesuaikan perilaku dengan kondisi saat ini.
- Pendekatan ini cocok untuk NPC dengan banyak pilihan aksi dan situasi yang dinamis.

### Transisi ke Slide Berikutnya

Setelah memahami alur umum Utility-Based, kita akan melihat contoh sederhana bagaimana beberapa aksi diberi skor dan satu aksi terpilih karena memiliki skor tertinggi.

---

## Slide 046 - Contoh Utility AI Sederhana

### Narasi

Pada slide ini kita melihat contoh sederhana dari **utility-based decision making** untuk perilaku NPC.

Istilah penting di sini adalah **utility**, yaitu nilai yang menunjukkan seberapa baik suatu aksi untuk kondisi saat ini. Nilai biasanya berada di antara `0` dan `1`, semakin tinggi semakin prioritas.

```text
Attack
Flee
Heal
Patrol
Chase
```

Setiap aksi diberi skor:

```text
Attack = 0.80
Flee   = 0.30
Heal   = 0.60
Patrol = 0.10
Chase  = 0.70
```

Intuisi praktisnya sederhana: NPC tidak harus menggunakan aturan `if-else` yang kaku untuk setiap situasi. Ia cukup menghitung skor untuk semua aksi yang tersedia, lalu memilih yang nilainya tertinggi.

Dalam contoh ini, `Attack` memiliki skor `0.80`, lebih tinggi dari `Chase` `0.70`, `Heal` `0.60`, `Flee` `0.30`, dan `Patrol` `0.10`. Maka aksi yang dipilih adalah:

```text
Attack
```

Hal yang perlu dipahami mahasiswa adalah bahwa skor ini bukan angka acak. Skor adalah hasil evaluasi kondisi game, misalnya seberapa dekat musuh, seberapa rendah health, atau seberapa relevan aksi tersebut saat itu. Namun detail perhitungan skornya akan dibahas pada slide berikutnya.

Yang penting pada tahap ini adalah alur pengambilan keputusan:

1. NPC memiliki beberapa aksi yang mungkin dilakukan.
2. Setiap aksi diberi nilai utilitas.
3. Aksi dengan nilai tertinggi dipilih.
4. Aksi tersebut dieksekusi.

Dengan cara ini, perilaku NPC menjadi lebih fleksibel karena keputusan dapat berubah ketika skor berubah.

### Inti yang Harus Ditekankan

- **Utility-based decision making** memilih aksi berdasarkan skor tertinggi, bukan urutan aturan yang kaku.
- Nilai utilitas menunjukkan seberapa relevan suatu aksi pada kondisi tertentu.
- Dalam contoh ini, `Attack` dipilih karena memiliki skor tertinggi, yaitu `0.80`.
- Skor aksi dapat berubah seiring perubahan kondisi game, sehingga perilaku NPC menjadi adaptif.

### Transisi ke Slide Berikutnya

Selanjutnya kita akan melihat bagaimana skor untuk setiap aksi dihitung, karena nilai utilitas tidak muncul begitu saja tetapi berasal dari kombinasi beberapa faktor kondisi game.

---

## Slide 047 - Scoring Action

### Narasi

Pada slide ini, kita membahas **Scoring Action**, yaitu cara setiap aksi NPC diberi nilai sebelum dipilih.

Ide dasarnya adalah NPC tidak memilih aksi hanya dari satu kondisi. Misalnya, `Attack` tidak selalu dilakukan hanya karena player terlihat. NPC perlu menilai beberapa keadaan sekaligus.

Untuk aksi `Attack`, skornya dapat dipengaruhi oleh:

- jarak ke player,
- `cooldown attack`,
- `health enemy`,
- apakah player terlihat.

Dalam bentuk sederhana, fungsi skornya bisa dipahami seperti ini:

```text
Score Attack = f(jarak, cooldown, health enemy, player terlihat)
```

Artinya, jika player jauh, `Attack` menjadi kurang relevan. Jika `cooldown attack` masih aktif, NPC tidak bisa menyerang. Jika `health enemy` rendah, mungkin `Flee` atau `Heal` lebih masuk akal. Jika player tidak terlihat, skor `Attack` harus turun.

Untuk aksi `Flee`, faktor yang dinilai berbeda:

- `health` rendah,
- player dekat,
- jumlah musuh pendukung sedikit.

```text
Score Flee = f(health, jarak player, jumlah pendukung)
```

Jika `health` rendah dan player sudah dekat, `Flee` menjadi lebih kuat. Namun, jika masih banyak pendukung atau `health` masih aman, skor `Flee` tidak perlu tinggi.

Poin utamanya adalah **scoring action** membuat keputusan NPC menjadi kontekstual. Setiap aksi memiliki fungsi skor yang membaca `state` game, lalu menghasilkan nilai yang mencerminkan seberapa cocok aksi itu dilakukan pada saat itu.

Sebelum lanjut, mahasiswa perlu memahami bahwa skor ini bukan angka acak. Skor adalah hasil evaluasi terhadap kondisi seperti posisi, `health`, `cooldown`, dan visibilitas.

### Inti yang Harus Ditekankan

- Setiap aksi memiliki **fungsi skor** yang menilai kelayakan aksi berdasarkan kondisi game.
- Skor `Attack` dipengaruhi oleh jarak, `cooldown attack`, `health enemy`, dan visibilitas player.
- Skor `Flee` dipengaruhi oleh `health` rendah, kedekatan player, dan jumlah musuh pendukung.
- NPC memilih berdasarkan **kombinasi faktor**, bukan satu kondisi tunggal.
- Scoring action membuat perilaku NPC lebih halus, kontekstual, dan realistis.

### Transisi ke Slide Berikutnya

Setelah kita tahu faktor apa saja yang memengaruhi skor, langkah berikutnya adalah memahami bagaimana skor tersebut diartikan sebagai **utility score** yang bisa dibandingkan antar aksi.

---

## Slide 048 - Utility Score

### Narasi

Pada slide ini kita fokus pada **utility score**, yaitu cara memberi nilai pada aksi setelah faktor-faktor perilaku dipertimbangkan. Skor ini biasanya dinormalisasi ke rentang:

```text
0.0 sampai 1.0
```

Normalisasi penting karena setiap aksi dapat dipengaruhi oleh faktor yang berbeda. Misalnya jarak, cooldown, health, atau visibilitas. Dengan rentang yang sama, sistem perilaku dapat membandingkan aksi-aksi secara konsisten.

Makna nilai utility cukup intuitif:

```text
0.0 = tidak berguna
1.0 = sangat berguna
```

Artinya, nilai bukan sekadar “boleh” atau “tidak boleh”. Nilai menunjukkan seberapa kuat suatu aksi layak dipilih pada kondisi saat ini.

Contoh sederhana adalah aksi `Flee`. Jika health NPC masih penuh, skor `Flee` cenderung rendah. Sebaliknya, jika health rendah, skor `Flee` meningkat.

```text
Health penuh:
Flee score rendah

Health rendah:
Flee score tinggi
```

Dengan cara ini, perubahan perilaku tidak harus terjadi secara tiba-tiba. NPC dapat mulai menunjukkan tanda ingin mundur sebelum benar-benar melarikan diri, tergantung bagaimana skor `Flee` naik secara bertahap.

**Utility score** membuat perilaku lebih halus daripada kondisi biner. Saya ingin mahasiswa memahami bahwa utility bukan pengganti logika, tetapi cara memberi bobot pada keputusan. Nilai yang lebih tinggi berarti aksi lebih layak, tetapi keputusan akhir masih bergantung pada mekanisme pemilihan yang dibahas kemudian.

Sebelum lanjut, pastikan mahasiswa paham tiga hal: rentang normalisasi, makna nilai `0.0` sampai `1.0`, dan contoh perubahan skor berdasarkan kondisi.

### Inti yang Harus Ditekankan

- **Utility score** adalah nilai yang menunjukkan seberapa berguna suatu aksi pada kondisi tertentu.
- Skor biasanya dinormalisasi ke rentang `0.0` sampai `1.0` agar mudah dibandingkan antar aksi.
- `0.0` berarti tidak berguna, sedangkan `1.0` berarti sangat berguna.
- Contoh `Flee`: health rendah meningkatkan skor `Flee`, health penuh menurunkan skor `Flee`.
- Utility membuat perilaku lebih halus dan bertahap dibanding kondisi benar/salah.

### Transisi ke Slide Berikutnya

Selanjutnya kita akan membandingkan keputusan biner dengan keputusan berbasis utility, agar mahasiswa melihat perbedaan perilaku yang dihasilkan secara lebih jelas.

---

## Slide 049 - Binary Decision vs Utility Decision

### Narasi

Pada slide ini, kita membandingkan dua cara **NPC** mengambil keputusan: **binary condition** dan **utility score**. Intuisi praktisnya sederhana: kondisi biner seperti **saklar** yang hanya bisa mati atau nyala, sedangkan utility score seperti **volume** yang bisa dinaikkan atau diturunkan secara bertahap.

```text
Jika health < 30
    → Flee
```

Contoh di atas adalah bentuk **binary condition**. Sistem hanya memeriksa satu ambang batas pada `health`. Selama `health` masih 30 atau lebih, aksi `Flee` tidak aktif. Begitu `health` turun menjadi 29, keputusan berubah secara langsung.

Masalah utama dari pendekatan biner adalah perubahan perilaku yang terasa **mendadak**. Dalam game, NPC bisa terlihat kaku karena perilaku melompat dari satu state ke state lain tanpa transisi yang halus. Selain itu, keputusan hanya memiliki dua kemungkinan: **benar** atau **salah**, **aktif** atau **tidak aktif**.

```text
Health 80 → Flee score 0.1
Health 50 → Flee score 0.4
Health 20 → Flee score 0.9
```

Dengan **utility score**, nilai `Flee` tidak lagi hanya aktif atau tidak aktif. Skor tersebut berubah mengikuti kondisi `health`. Semakin rendah `health`, semakin tinggi skor `Flee`. Artinya, perilaku NPC dapat meningkat secara bertahap, misalnya dari sedikit waspada, mulai mundur, hingga akhirnya lari.

Perbedaan konseptualnya penting untuk dipahami. **Binary decision** cocok untuk aturan yang tegas, misalnya objek sudah mati atau tidak. **Utility decision** lebih cocok untuk perilaku yang perlu terasa adaptif dan halus, terutama ketika beberapa kondisi saling memengaruhi keputusan NPC.

Sebelum lanjut, mahasiswa perlu memahami bahwa utility score bukan sekadar angka acak. Angka tersebut adalah **tingkat kepentingan** suatu aksi pada kondisi tertentu. Dengan cara ini, sistem perilaku game dapat memilih aksi yang paling relevan tanpa harus bergantung pada satu ambang batas yang kaku.

### Inti yang Harus Ditekankan

- **Binary condition** menggunakan ambang batas dan menghasilkan keputusan yang langsung berubah.
- **Utility score** memberikan nilai bertahap, sehingga perilaku NPC dapat lebih halus dan adaptif.
- `health` adalah contoh kondisi yang dapat diubah menjadi skor `Flee` secara proporsional.
- Utility score membantu sistem perilaku memilih prioritas aksi berdasarkan tingkat kepentingan, bukan hanya benar/salah.

### Transisi ke Slide Berikutnya

Selanjutnya, kita akan melihat faktor-faktor apa saja yang dapat diubah menjadi skor dalam utility-based decision, sehingga perilaku NPC tidak hanya bergantung pada satu kondisi seperti `health`.

---

## Slide 050 - Faktor dalam Utility AI

### Narasi

Pada slide ini, kita melihat **faktor** yang biasanya menjadi bahan keputusan dalam **utility-based decision making**. Faktor bukan perilaku langsung, melainkan sinyal keadaan agen atau lingkungan yang dapat diukur.

Faktor umum yang sering digunakan adalah:

```text
Health
Distance to Player
Ammo
Cooldown
Cover Availability
Ally Nearby
Enemy Count
Threat Level
Objective Importance
Resource Availability
```

Intuisi praktisnya sederhana: setiap faktor membantu menjawab pertanyaan, “seberapa penting suatu tindakan dilakukan sekarang?” Misalnya, semakin rendah `health`, semakin tinggi skor untuk `flee`. Semakin dekat `distanceToPlayer`, semakin tinggi skor untuk `attack`. Semakin jauh target, semakin rendah skor untuk `meleeAttack`.

Dalam konteks NPC, faktor-faktor ini dapat berasal dari data yang sudah ada di game. Nilai `health` bisa dibaca dari komponen kesehatan. Jarak ke pemain bisa dihitung dari posisi transform. `ammo` bisa dibaca dari data senjata. `cooldown` bisa berasal dari timer aksi. `coverAvailability` bisa berasal dari deteksi posisi aman. `allyNearby` bisa berasal dari daftar sekutu dalam radius tertentu.

Hal penting yang harus dipahami mahasiswa adalah bahwa **faktor bukan action**. Faktor adalah input. Action adalah perilaku yang akhirnya dipilih, seperti `attack`, `flee`, `hide`, `support`, atau `moveToObjective`. Skor dari faktor-faktor tersebut kemudian digunakan untuk menilai seberapa layak setiap action dilakukan.

Sebelum lanjut, mahasiswa perlu memahami bahwa faktor harus **relevan**, **dapat diukur**, dan **konsisten**. Faktor yang tidak relevan dapat membuat keputusan NPC menjadi tidak stabil. Faktor yang tidak jelas batasannya juga dapat menghasilkan perilaku yang sulit diprediksi.

### Inti yang Harus Ditekankan

- **Faktor** adalah sinyal keadaan, bukan perilaku langsung.
- Setiap faktor dapat diubah menjadi **skor** untuk menilai kelayakan suatu action.
- Keputusan utility-based biasanya dipengaruhi oleh **banyak faktor sekaligus**, bukan satu kondisi tunggal.
- Faktor harus relevan dengan desain game dan dapat diukur secara konsisten.

### Transisi ke Slide Berikutnya

Setelah faktor-faktor ini diketahui, langkah berikutnya adalah bagaimana faktor diubah menjadi skor yang lebih halus dan terkontrol. Pada slide berikutnya, kita akan membahas **response curve** sebagai cara mengubah input menjadi skor perilaku.

---

## Slide 051 - Response Curve

### Narasi

Dalam sistem utility, faktor seperti `health`, `distance`, atau `ammo` tidak bisa langsung dibandingkan karena skalanya berbeda. **Response curve** berfungsi sebagai penerjemah: ia mengubah satu input menjadi skor yang dapat dipakai oleh agen untuk memilih perilaku.

Intinya, response curve menjawab pertanyaan: *seberapa besar pengaruh nilai input terhadap keputusan?* Misalnya, inputnya adalah:

```text
health percentage
```

dan outputnya adalah:

```text
flee urgency
```

Ilustrasinya sederhana:

```text
Health tinggi  → Flee score rendah
Health rendah  → Flee score tinggi
```

Artinya, ketika agen masih sehat, keinginan untuk kabur kecil. Ketika health turun, skor kabur naik. Yang penting bukan hanya nilai health-nya, tetapi **bentuk kurva** yang menentukan seberapa cepat atau seberapa tajam perubahan skor terjadi.

Bentuk curve dapat dipilih sesuai desain perilaku:

- **Linear**: skor naik atau turun secara proporsional.
- **Exponential**: perubahan menjadi sangat tajam di area tertentu, misalnya health sangat rendah.
- **Threshold**: skor tetap rendah sampai melewati batas tertentu, lalu naik.
- **Inverse**: input tinggi menghasilkan skor rendah, atau sebaliknya.
- **Custom**: bentuk khusus yang disesuaikan dengan kebutuhan NPC.

Secara praktis, response curve memberi desainer kendali atas “kepekaan” agen. Dengan curve yang tepat, NPC tidak selalu bereaksi sama kuatnya untuk setiap perubahan kondisi. Ia bisa tampak lebih hati-hati, lebih agresif, atau lebih panik tergantung bentuk curve yang dipilih.

Sebelum lanjut, mahasiswa perlu memahami bahwa response curve adalah **abstraksi pemetaan nilai**, bukan satu rumus tetap. Setiap faktor dapat memiliki curve berbeda, dan hasil akhirnya adalah skor utility yang siap dibandingkan dengan perilaku lain.

### Inti yang Harus Ditekankan

- **Response curve** mengubah input mentah menjadi skor yang dapat dibandingkan.
- Bentuk curve menentukan **kecepatan dan ketajaman** perubahan perilaku agen.
- Contoh `health percentage` ke `flee urgency` menunjukkan bagaimana kondisi agen diterjemahkan menjadi prioritas perilaku.
- Pilihan curve seperti linear, exponential, threshold, inverse, atau custom adalah keputusan desain, bukan sekadar detail teknis.

### Transisi ke Slide Berikutnya

Setelah memahami bahwa response curve adalah pemetaan input ke skor, langkah berikutnya adalah melihat contoh konkretnya: bagaimana nilai health diubah menjadi skor flee yang dapat dipakai oleh agen.

---

## Slide 052 - Contoh Skor Flee

### Narasi

Slide ini menunjukkan cara sederhana mengubah kondisi NPC menjadi skor keputusan. Dalam **utility-based decision making**, perilaku tidak selalu dipilih secara hitam-putih, tetapi diberi nilai seberapa penting perilaku itu pada saat tertentu. Untuk perilaku kabur, nilai yang paling alami adalah kondisi kesehatan.

```text
healthPercent = currentHealth / maxHealth
fleeScore = 1 - healthPercent
```

Variabel `currentHealth` adalah kesehatan saat ini, sedangkan `maxHealth` adalah batas maksimum. Hasil `healthPercent` berada di antara `0` dan `1`. Jika NPC masih penuh, `healthPercent` mendekati `1`, sehingga `fleeScore` mendekati `0`. Jika NPC hampir mati, `healthPercent` kecil, sehingga `fleeScore` menjadi besar.

Tabel pada slide memperlihatkan pola ini secara ringkas:

| Health | `healthPercent` | `fleeScore` |
|---:|---:|---:|
| 100 | 1.0 | 0.0 |
| 70 | 0.7 | 0.3 |
| 40 | 0.4 | 0.6 |
| 10 | 0.1 | 0.9 |

Poin pentingnya bukan angka pastinya, melainkan arah hubungan: **semakin rendah health, semakin tinggi keinginan untuk kabur**. Pola ini memberi intuisi bahwa NPC tidak harus langsung panik saat terkena damage sedikit, tetapi responsnya meningkat secara bertahap.

Dalam implementasi game, skor ini biasanya tidak langsung menjadi aksi. `fleeScore` dapat dibandingkan dengan skor perilaku lain, misalnya `attackScore`, `exploreScore`, atau `defendScore`. Perilaku dengan skor tertinggi yang dipilih, atau skor-skor tersebut dapat dikombinasikan dengan bobot. Dengan cara ini, NPC terasa lebih adaptif karena keputusannya mengikuti kondisi dunia, bukan hanya aturan if-else yang kaku.

Sebelum lanjut, mahasiswa perlu memahami bahwa rumus ini adalah **response curve** sederhana berbentuk inversi linear. Ia mengubah input `health` menjadi output `flee urgency` yang dapat dipakai oleh sistem pengambilan keputusan.

### Inti yang Harus Ditekankan

- `healthPercent` adalah normalisasi kesehatan NPC ke rentang `0` sampai `1`.
- `fleeScore = 1 - healthPercent` membuat skor kabur tinggi ketika kesehatan rendah.
- Skor ini bersifat relatif dan dapat dibandingkan dengan skor perilaku lain dalam **utility-based decision making**.
- Pola ini memberi dasar untuk membuat NPC yang responsif terhadap kondisi, bukan sekadar mengikuti state tunggal.

### Transisi ke Slide Berikutnya

Setelah melihat bagaimana kesehatan memengaruhi keinginan kabur, langkah berikutnya adalah melihat faktor lain yang memengaruhi perilaku agresif, yaitu jarak terhadap pemain.

---

## Slide 053 - Contoh Skor Attack

### Narasi

Pada slide ini kita melihat contoh **utility score** untuk aksi **attack**. Jika sebelumnya skor **flee** dipengaruhi oleh kondisi kesehatan, maka skor **attack** dipengaruhi oleh **jarak** antara NPC dan player. Intuisinya sederhana: semakin dekat player, semakin besar keinginan NPC untuk menyerang.

Rumus yang digunakan adalah:

```text
attackScore = 1 - (distance / attackMaxDistance)
```

Di sini, `distance` adalah jarak player terhadap NPC, sedangkan `attackMaxDistance` adalah jarak maksimum di mana aksi attack masih dianggap relevan. Jika jaraknya sangat dekat, nilai `distance` kecil, sehingga `attackScore` mendekati `1`. Jika jaraknya sudah mencapai `attackMaxDistance`, nilai `attackScore` menjadi `0`.

Perhatikan bahwa rumus ini mengasumsikan jarak dibatasi antara `0` dan `attackMaxDistance`. Artinya, nilai yang masuk ke perhitungan sudah berada pada rentang yang masuk akal. Jika jarak lebih kecil dari nol atau lebih besar dari batas maksimum, nilai skor perlu dibatasi agar tetap valid. Pembatasan nilai secara eksplisit akan dibahas pada slide berikutnya.

Dari tabel contoh, terlihat bahwa `attackMaxDistance` bernilai `10`.

| Distance | Attack Score |
|---:|---:|
| 1 | 0.9 |
| 3 | 0.7 |
| 6 | 0.4 |
| 10 | 0.0 |

Artinya, ketika player berada pada jarak `1`, NPC memiliki keinginan menyerang yang sangat tinggi. Ketika jarak bertambah menjadi `3`, skor turun menjadi `0.7`. Pada jarak `6`, skor menjadi `0.4`. Dan ketika jarak mencapai `10`, skor attack menjadi `0`, sehingga NPC tidak lagi memiliki preferensi untuk menyerang berdasarkan jarak.

Dalam sistem perilaku game, skor seperti ini biasanya tidak langsung menjadi perintah mutlak. Skor attack adalah **tingkat preferensi** untuk melakukan aksi attack. Sistem dapat membandingkannya dengan skor aksi lain, misalnya flee, idle, atau move, lalu memilih aksi dengan skor tertinggi. Dengan cara ini, perilaku NPC menjadi lebih halus dan kontekstual.

Hal penting yang harus dipahami mahasiswa adalah bahwa `attackScore` bukan sekadar angka acak. Angka ini menunjukkan seberapa kuat kondisi jarak mendorong NPC untuk menyerang. Nilai `attackMaxDistance` juga menjadi parameter desain yang penting. Jika `attackMaxDistance` dibuat kecil, NPC hanya menyerang saat sangat dekat. Jika dibuat besar, NPC lebih agresif dari jarak jauh.

### Inti yang Harus Ditekankan

- **Attack score** meningkat ketika jarak NPC ke player semakin kecil.
- Rumus utamanya adalah `attackScore = 1 - (distance / attackMaxDistance)`.
- Skor attack menunjukkan **preferensi**, bukan perintah langsung.
- Tabel contoh menunjukkan `attackMaxDistance = 10`.
- Parameter `attackMaxDistance` memengaruhi seberapa agresif NPC dari jarak tertentu.

### Transisi ke Slide Berikutnya

Setelah memahami bagaimana skor attack dihitung dari jarak, langkah berikutnya adalah memastikan skor tersebut tetap berada pada rentang yang valid, yaitu `0` sampai `1`.

---

## Slide 054 - Clamp pada Utility Score

### Narasi

Pada slide sebelumnya kita sudah melihat bagaimana jarak menghasilkan skor attack. Namun dalam implementasi nyata, hasil perhitungan tidak selalu aman. Nilai bisa menjadi negatif jika jarak melebihi `maxDistance`, atau bisa melebihi 1 karena kondisi data yang tidak ideal. Karena itu, skor utility perlu dibatasi ke rentang 0 sampai 1.

Dalam Unity, pembatasan ini bisa dilakukan dengan `Mathf.Clamp01()`.

```csharp
float score = 1f - (distance / maxDistance);
score = Mathf.Clamp01(score);
```

Fungsi `Mathf.Clamp01()` bekerja sederhana: jika nilai kurang dari 0, hasilnya menjadi 0; jika nilai lebih dari 1, hasilnya menjadi 1; jika sudah berada di antara 0 dan 1, nilainya tetap. Dengan cara ini, `score` selalu berada pada rentang yang konsisten.

Hal ini penting karena skor utility biasanya digunakan untuk membandingkan beberapa aksi. Jika satu skor bisa menjadi -0,2 atau 1,3, perbandingan antar aksi menjadi tidak stabil. Rentang 0 sampai 1 membuat nilai mudah dibaca, mudah dijumlahkan, dikalikan, atau dibandingkan dengan skor lain.

Secara perilaku NPC, clamp memberi batas yang jelas. Misalnya, jika jarak sudah jauh melebihi `maxDistance`, skor attack tidak terus menurun tanpa batas, tetapi berhenti di 0. Artinya, aksi attack dianggap tidak layak. Sebaliknya, jika jarak sangat dekat, skor tidak melewati 1, sehingga tidak ada skor yang tidak masuk akal.

Sebelum lanjut ke penggabungan banyak faktor, mahasiswa perlu memahami bahwa clamp bukan sekadar koreksi angka, tetapi bagian dari desain skor yang andal. Skor yang sudah dibatasi menjadi dasar yang aman untuk dikombinasikan dengan faktor lain seperti visibilitas atau cooldown.

### Inti yang Harus Ditekankan

- Skor utility harus berada di rentang **0 sampai 1** agar konsisten dan mudah dibandingkan.
- `Mathf.Clamp01()` mengubah nilai di luar rentang menjadi **0** atau **1**.
- Clamp mencegah skor negatif atau lebih dari 1, sehingga keputusan NPC tetap stabil.
- Skor yang sudah dibatasi menjadi dasar yang aman untuk dikombinasikan dengan faktor lain.

### Transisi ke Slide Berikutnya

Setelah skor satu faktor sudah aman dan berada di rentang yang benar, langkah berikutnya adalah menggabungkan beberapa faktor menjadi satu skor akhir.

---

## Slide 055 - Menggabungkan Banyak Faktor

### Narasi

Pada tahap ini, kita melihat bahwa skor satu aksi tidak cukup ditentukan oleh satu faktor saja. Dalam perilaku NPC, keputusan seperti menyerang biasanya bergantung pada beberapa kondisi sekaligus: seberapa dekat target, apakah target terlihat, dan apakah aksi masih tersedia.

Intuisi praktisnya sederhana: NPC tidak akan menyerang pemain hanya karena jarak dekat. Jika pemain berada di balik tembok atau di luar jangkauan pandangan, faktor **visibilitas** harus mampu mematikan aksi tersebut.

Slide memberikan contoh rumus:

```text
Attack Score =
distanceScore × visibilityScore × cooldownScore
```

Rumus ini menggabungkan tiga nilai yang biasanya sudah dinormalisasi ke rentang 0 sampai 1. `distanceScore` tinggi ketika pemain dekat, `visibilityScore` tinggi ketika pemain terlihat, dan `cooldownScore` tinggi ketika jeda serangan sudah cukup.

Keunikan kombinasi perkalian adalah sifat **gating** atau pembatasan keras. Jika salah satu faktor bernilai 0, hasil akhirnya juga 0.

```text
visibilityScore = 0
Attack Score = 0
```

Artinya, meskipun `distanceScore` sangat tinggi, NPC tetap tidak menyerang karena `visibilityScore` memblokir keputusan. Pola ini cocok untuk kondisi yang bersifat wajib, bukan sekadar menambah nilai.

Dalam implementasi, urutan pemikirannya adalah:

1. Hitung skor jarak.
2. Hitung skor visibilitas.
3. Hitung skor cooldown.
4. Kalikan ketiga skor tersebut.
5. Gunakan hasil akhir untuk membandingkan dengan aksi lain atau ambang keputusan.

Dengan cara ini, perilaku NPC menjadi lebih masuk akal: ia menyerang hanya ketika dekat, melihat target, dan tidak sedang dalam jeda. Mahasiswa perlu memahami bahwa perkalian bukan satu-satunya cara menggabungkan faktor; cara lain akan dibahas setelahnya.

### Inti yang Harus Ditekankan

- Skor aksi dapat dibentuk dari beberapa faktor, bukan hanya satu nilai.
- Perkalian berfungsi sebagai **gating**: satu faktor nol membuat total skor nol.
- `visibilityScore = 0` mencegah NPC menyerang meskipun jarak dekat.
- Pola ini membantu perilaku NPC lebih konsisten dengan kondisi lingkungan.

### Transisi ke Slide Berikutnya

Setelah memahami kombinasi perkalian, kita akan melihat cara lain yang lebih fleksibel untuk menggabungkan faktor, yaitu dengan penjumlahan berbobot.

---

## Slide 056 - Weighted Sum

### Narasi

Pada slide ini kita membahas **weighted sum**, yaitu cara menggabungkan beberapa faktor penilaian dengan **bobot**. Pendekatan ini sering dipakai dalam utility-based decision making untuk sistem perilaku NPC ketika satu aksi perlu dinilai dari banyak sinyal, misalnya jarak, visibilitas, dan tingkat agresivitas.

```text
Attack Score =
0.5 × distanceScore
+ 0.3 × visibilityScore
+ 0.2 × aggressionScore
```

Dalam rumus di atas, setiap skor dikalikan bobotnya terlebih dahulu, lalu hasilnya dijumlahkan. Artinya, `Attack Score` bukan lagi hasil perkalian langsung antar faktor, melainkan **penjumlahan terbobot** yang menunjukkan seberapa besar kontribusi masing-masing faktor terhadap keputusan akhir.

Bobot pada contoh ini memiliki makna desain:

- `distanceScore` diberi bobot `0.5`, sehingga jarak menjadi faktor paling berpengaruh.
- `visibilityScore` diberi bobot `0.3`, sehingga visibilitas tetap wajib dipertimbangkan, tetapi tidak langsung mematikan skor seperti pada perkalian.
- `aggressionScore` diberi bobot `0.2`, sehingga agresivitas berperan sebagai variasi perilaku, bukan penentu utama.

Jumlah bobot sebaiknya mudah dipahami. Dalam banyak kasus, bobot dinormalisasi sehingga totalnya menjadi `1.0`. Dengan cara ini, nilai akhir lebih mudah dibandingkan antar aksi dan lebih mudah disetel oleh desainer.

Secara praktis, weighted sum memberi NPC kemampuan memilih aksi berdasarkan **preferensi proporsional**. Jika player dekat, terlihat, dan NPC agresif, `Attack Score` akan tinggi. Jika jarak jauh, skor menurun meskipun visibilitas masih ada. Jika agresivitas tinggi, NPC bisa lebih cenderung menyerang meskipun kondisi tidak sempurna. Dalam behavior tree, nilai ini dapat dipakai pada utility node atau selector untuk memilih aksi dengan skor tertinggi.

Sebelum lanjut, mahasiswa perlu memahami bahwa weighted sum cocok untuk faktor yang bersifat **lembut** atau dapat dikompensasi. Jika ada syarat yang benar-benar harus dipenuhi, misalnya player harus terlihat agar serangan mungkin terjadi, maka weighted sum saja tidak cukup; perlu mekanisme tambahan atau pendekatan lain.

### Inti yang Harus Ditekankan

- **Weighted sum** menggabungkan skor dengan bobot, bukan dengan perkalian langsung.
- Bobot menunjukkan **prioritas desain** dan menentukan seberapa besar pengaruh tiap faktor.
- Total bobot yang mudah dipahami, misalnya `1.0`, membantu skor lebih konsisten dan mudah disetel.
- Weighted sum cocok untuk preferensi yang dapat dikompensasi, tetapi kurang cocok untuk syarat mutlak.

### Transisi ke Slide Berikutnya

Setelah memahami cara menjumlahkan skor dengan bobot, kita akan melihat **multiplicative scoring**, yaitu pendekatan yang lebih menekankan syarat wajib melalui perkalian antar faktor.

---

## Slide 057 - Multiplicative Scoring

### Narasi

**Multiplicative Scoring** adalah cara menghitung skor action dengan mengalikan beberapa faktor. Dalam pendekatan **utility-based**, setiap action biasanya diberi nilai yang menunjukkan seberapa layak action tersebut dilakukan pada keadaan tertentu.

```text
Attack Score =
distanceScore
×
visibilityScore
×
cooldownScore
```

Pada contoh ini, `Attack Score` tidak dihitung dengan menjumlahkan faktor, tetapi dengan mengalikan `distanceScore`, `visibilityScore`, dan `cooldownScore`. Urutan eksekusinya sederhana: sistem terlebih dahulu menilai masing-masing faktor, kemudian mengalikan hasilnya menjadi satu skor akhir.

Keunikan utama dari perkalian adalah sifat **gating**. Jika salah satu faktor bernilai `0`, maka skor total langsung menjadi `0`. Misalnya, jika `visibilityScore` bernilai `0` karena target tidak terlihat, maka `Attack Score` akan nol meskipun jarak sudah dekat dan cooldown sudah siap.

Sifat ini sangat berguna untuk **syarat wajib** pada perilaku NPC. Action seperti `Attack` sebaiknya tidak dipilih jika kondisi tertentu tidak terpenuhi, misalnya target tidak terlihat atau kemampuan masih dalam cooldown. Dengan multiplicative scoring, kondisi tersebut dapat langsung memblokir action tanpa perlu aturan tambahan yang rumit.

Namun, cara ini juga memiliki kekurangan. Jika terlalu banyak faktor dikalikan, skor akhir bisa menjadi sangat kecil dan sulit dibandingkan dengan action lain. Oleh karena itu, multiplicative scoring sebaiknya digunakan untuk faktor yang benar-benar penting dan berada pada rentang nilai yang konsisten, misalnya antara `0` dan `1`.

Sebelum lanjut, mahasiswa perlu memahami bahwa multiplicative scoring bukan hanya soal perkalian matematis. Ia juga merepresentasikan hubungan antar faktor: satu faktor dapat membatalkan faktor lain. Inilah yang membedakannya dari pendekatan penjumlahan berbobot, di mana faktor yang lemah masih bisa dikompensasi oleh faktor lain.

### Inti yang Harus Ditekankan

- **Multiplicative Scoring** menghitung skor dengan mengalikan faktor, sehingga satu faktor bernilai `0` membuat skor total menjadi `0`.
- Pendekatan ini cocok untuk **syarat wajib** atau kondisi gating, misalnya action `Attack` hanya layak jika target terlihat dan cooldown siap.
- Kekurangannya, skor mudah menjadi sangat kecil jika terlalu banyak faktor, sehingga perlu digunakan secara hati-hati dan dengan rentang nilai yang konsisten.

### Transisi ke Slide Berikutnya

Setelah memahami cara skor dihitung, langkah berikutnya adalah menempatkan skor tersebut ke dalam struktur action yang dapat dipilih dan dieksekusi. Pada slide berikutnya, kita akan melihat bagaimana sebuah action didefinisikan beserta fungsi skornya dan fungsi eksekusinya.

---

## Slide 058 - Utility Action

### Narasi

Pada slide ini kita masuk ke konsep **Utility Action**, yaitu cara representasi perilaku NPC dalam pendekatan **Utility-based decision making**. Intuisi praktisnya: setiap kemungkinan tindakan tidak lagi dipaksa masuk ke state tunggal, tetapi diberi nilai atau skor berdasarkan kondisi game. Dengan begitu, NPC dapat memilih tindakan yang paling masuk akal pada saat itu.

Setiap action biasanya memiliki tiga bagian penting:

- `Name`: identitas action, misalnya `Attack` atau `Flee`.
- `Score Function`: fungsi yang menghitung seberapa layak action tersebut dijalankan.
- `Execute Function`: fungsi yang benar-benar menjalankan perilaku ketika action terpilih.

Contoh sederhana:

```text
Action: Attack
Score: CalculateAttackScore()
Execute: AttackPlayer()
```

Artinya, action `Attack` tidak langsung dijalankan. Sistem Utility akan memanggil `CalculateAttackScore()` untuk menilai apakah menyerang sekarang menguntungkan. Jika skornya tinggi, misalnya jarak dekat, target terlihat, dan cooldown sudah selesai, maka `AttackPlayer()` akan dieksekusi.

Action lain dapat memiliki logika berbeda:

```text
Action: Flee
Score: CalculateFleeScore()
Execute: FleeFromPlayer()
```

Pada action `Flee`, skor bisa naik ketika health rendah, jarak terlalu dekat, atau ancaman tinggi. Jadi satu NPC dapat memiliki beberapa action yang saling bersaing berdasarkan skor.

Yang perlu dipahami mahasiswa adalah **sistem Utility memilih action dengan skor tertinggi**. Ini berbeda dari pendekatan berbasis state kaku, karena keputusan menjadi lebih fleksibel dan dapat disesuaikan dengan parameter game. Mahasiswa harus melihat action sebagai paket perilaku yang terdiri dari penilaian dan eksekusi, bukan sekadar nama perintah.

Sebelum lanjut, pastikan mahasiswa paham bahwa skor adalah hasil evaluasi kondisi saat ini. Action yang sama bisa terpilih di satu situasi dan tidak terpilih di situasi lain karena `Score Function` menghasilkan nilai berbeda.

### Inti yang Harus Ditekankan

- **Utility Action** adalah unit perilaku dalam sistem Utility yang memiliki `Name`, `Score Function`, dan `Execute Function`.
- `Score Function` menilai kelayakan action berdasarkan kondisi game, sedangkan `Execute Function` menjalankan perilaku setelah action terpilih.
- Sistem Utility memilih action dengan **skor tertinggi**, sehingga keputusan NPC lebih adaptif dibanding state tunggal yang kaku.
- Contoh `Attack` dan `Flee` menunjukkan bahwa action yang berbeda dapat bersaing berdasarkan situasi seperti jarak, ancaman, atau kondisi NPC.

### Transisi ke Slide Berikutnya

Setelah memahami bentuk action, langkah berikutnya adalah melihat bagaimana sistem Utility membandingkan semua action dan memilih yang terbaik secara algoritmik.

---

## Slide 059 - Pseudocode Utility AI

### Narasi

Pada slide ini kita melihat bentuk paling sederhana dari **Utility-Based Decision Making** untuk NPC. Intuisinya, agent tidak langsung memutuskan satu perilaku, tetapi menilai beberapa action yang tersedia, lalu memilih action yang paling sesuai dengan kondisi saat ini.

```text
bestAction = null
bestScore = -infinity

for each action in actions:
    score = action.CalculateScore(context)

    if score > bestScore:
        bestScore = score
        bestAction = action

bestAction.Execute()
```

Urutan eksekusinya:

1. Sistem menyiapkan `bestAction = null` dan `bestScore = -infinity`. Nilai `-infinity` memastikan skor pertama yang valid selalu lebih besar dari nilai awal.
2. Sistem memeriksa setiap `action` dalam daftar `actions`.
3. Untuk setiap action, dipanggil `action.CalculateScore(context)` untuk menghasilkan skor berdasarkan kondisi game.
4. Jika `score > bestScore`, sistem memperbarui `bestScore` dan menyimpan action tersebut ke `bestAction`.
5. Setelah seluruh action diperiksa, `bestAction.Execute()` dijalankan.

Artinya, keputusan tidak langsung dieksekusi saat skor dihitung, tetapi setelah semua kemungkinan dibandingkan. Ini penting agar perilaku NPC tidak berubah-ubah di tengah proses perbandingan.

`context` adalah data kondisi yang dipakai oleh fungsi skor. Dalam slide ini, `context` dapat berisi:

- `health`,
- `distance`,
- `visibility`,
- `cooldown`,
- `ammo`,
- `target position`.

Data ini membuat skor action menjadi dinamis. Misalnya, action menyerang bisa mendapat skor tinggi ketika target terlihat dan jarak dekat, tetapi skor tersebut bisa turun jika `cooldown` masih aktif atau `ammo` habis.

Yang perlu dipahami mahasiswa adalah bahwa pseudocode ini menunjukkan pola umum **selection by score**: kumpulkan action, hitung skor, bandingkan, lalu eksekusi action terbaik. Pola ini menjadi dasar sebelum kita melihat contoh action dan formula skor yang lebih konkret.

### Inti yang Harus Ditekankan

- Pseudocode utility adalah proses memilih action dengan **skor tertinggi** dari daftar action yang tersedia.
- `context` berisi kondisi game seperti `health`, `distance`, `visibility`, `cooldown`, `ammo`, dan `target position` yang menentukan skor.
- `bestScore` diinisialisasi `-infinity` agar action pertama yang valid dapat terpilih, lalu `bestAction.Execute()` dijalankan setelah seluruh action dibandingkan.

### Transisi ke Slide Berikutnya

Selanjutnya, kita akan melihat contoh enemy dengan beberapa action seperti `Attack`, `Chase`, `Flee`, dan `Patrol`, serta bagaimana skor masing-masing action berubah berdasarkan kondisi game.

---

## Slide 060 - Contoh Utility AI Enemy

### Narasi

Slide ini memperlihatkan penerapan **utility-based decision making** pada musuh sederhana. Setelah pseudocode sebelumnya, fokusnya adalah isi `actions` dan cara skor dihitung. Intuisi praktisnya: musuh tidak selalu menyerang; ia memilih perilaku yang paling sesuai dengan kondisi saat ini.

```text
Aksi:
Attack
Chase
Flee
Patrol

Skor:
Attack = distanceScore × visibilityScore × cooldownScore
Chase  = visibilityScore × farFromPlayerScore
Flee   = lowHealthScore × threatNearScore
Patrol = defaultScore
```

Tujuan potongan ini adalah menunjukkan bagaimana `context` diubah menjadi **utility score** untuk setiap aksi. Urutan eksekusinya sederhana: sistem menghitung skor tiap aksi, membandingkannya, lalu menjalankan aksi dengan skor tertinggi.

- `Attack` tinggi ketika `distanceScore` besar, `visibilityScore` besar, dan `cooldownScore` besar. Artinya player dekat, terlihat, dan senjata siap digunakan.
- `Chase` tinggi ketika player terlihat tetapi masih jauh, karena `farFromPlayerScore` mendorong NPC mendekati target.
- `Flee` tinggi ketika `lowHealthScore` besar dan `threatNearScore` besar, yaitu HP rendah dan ancaman dekat.
- `Patrol` menjadi pilihan ketika tidak ada stimulus kuat, karena `defaultScore` menjaga NPC tetap aktif.

Perhatikan penggunaan perkalian. Jika salah satu faktor bernilai nol, skor aksi dapat menjadi nol. Misalnya, jika `visibilityScore` nol, `Attack` dan `Chase` tidak akan terpilih meskipun jarak dekat. Ini membuat perilaku musuh lebih masuk akal: musuh tidak menyerang target yang tidak terlihat.

Kasus penting yang harus dipahami mahasiswa adalah hubungan antara kondisi dan pilihan aksi. Jika HP rendah dan player dekat, `Flee` dapat menjadi skor tertinggi. Jika player terlihat dan dekat, `Attack` dapat menang. Jika tidak ada player, `Patrol` menjadi perilaku default. Dengan cara ini, satu sistem skor dapat menghasilkan beberapa perilaku berbeda tanpa perlu menulis banyak aturan `if-else` yang kaku.

Sebelum lanjut, mahasiswa perlu memahami bahwa `context` adalah sumber data keputusan: health, distance, visibility, cooldown, dan posisi target. Skor bukan sekadar angka acak, tetapi representasi dari seberapa tepat suatu aksi untuk kondisi saat ini.

### Inti yang Harus Ditekankan

- **Utility score** menentukan aksi mana yang dipilih oleh NPC berdasarkan kondisi `context`.
- `Attack`, `Chase`, `Flee`, dan `Patrol` mewakili perilaku berbeda dengan prioritas yang berubah-ubah.
- Perkalian antar skor membuat aksi menjadi tidak terpilih jika prasyarat penting tidak terpenuhi.
- `Patrol` berperan sebagai perilaku default ketika tidak ada kondisi yang mendorong aksi lain.

### Transisi ke Slide Berikutnya

Selanjutnya, kita akan membahas mengapa `Patrol` perlu memiliki nilai default yang jelas agar NPC tetap melakukan sesuatu ketika semua skor lain rendah.

---

## Slide 061 - Default Action

### Narasi

Pada sistem Utility, setiap aksi biasanya diberi skor berdasarkan kondisi dunia. Namun, sistem tidak boleh berhenti hanya karena tidak ada aksi yang terlihat kuat. Di sinilah **default action** berperan.

Default action adalah perilaku cadangan yang tetap tersedia ketika skor aksi lain rendah atau tidak ada kondisi pemicu yang cukup. Contoh sederhana:

```text
Patrol Score = 0.1
```

Nilai ini sengaja dibuat kecil, sehingga `Patrol` tidak akan menyaingi `Attack`, `Chase`, atau `Flee` ketika kondisi mendukung. Tetapi ketika semua aksi lain memiliki skor rendah, `Patrol` tetap bisa menjadi pilihan tertinggi.

Tanpa default action, NPC dapat mengalami masalah perilaku:

- NPC bisa diam tanpa melakukan apa pun.
- Tidak ada aksi yang terpilih karena semua skor rendah.
- Perilaku NPC terlihat rusak, terutama saat player jauh atau tidak terlihat.

Oleh karena itu, default action penting untuk menjaga NPC tetap hidup dan konsisten. Beberapa default action yang umum digunakan adalah:

- `idle`
- `patrol`
- `wander`
- `guard position`

Pilihan default action sebaiknya sesuai dengan peran NPC. Musuh penjaga mungkin menggunakan `guard position`, penjelajah menggunakan `wander`, atau musuh biasa menggunakan `patrol`. Dengan begini, sistem Utility tidak hanya memilih aksi berdasarkan skor, tetapi juga memiliki perilaku dasar yang aman.

Sebelum lanjut, mahasiswa perlu memahami bahwa default action bukan sekadar nilai kecil. Ia adalah bagian dari desain perilaku NPC agar sistem tetap stabil dan tidak menghasilkan keadaan kosong.

### Inti yang Harus Ditekankan

- **Default action** adalah fallback perilaku ketika semua aksi lain memiliki skor rendah.
- Nilai default biasanya kecil, misalnya `Patrol Score = 0.1`, agar tidak mengganggu aksi utama.
- Tanpa default action, NPC bisa diam, tidak memilih aksi, atau terlihat rusak.
- Contoh default action yang umum: `idle`, `patrol`, `wander`, `guard position`.

### Transisi ke Slide Berikutnya

Setelah memastikan NPC selalu punya perilaku dasar, kita perlu membahas masalah lain: sistem Utility bisa membuat NPC berganti aksi terlalu cepat karena skor berubah setiap frame.

---

## Slide 062 - Masalah Switching Terlalu Cepat

### Narasi

Pada **Utility AI**, setiap action diberi skor berdasarkan kondisi dunia. Masalah muncul ketika dua action memiliki skor yang sangat dekat, misalnya `Attack` dan `Chase`.

```text
Attack score = 0.51
Chase score  = 0.50
```

Pada frame berikutnya, perubahan kecil bisa membalikkan urutan:

```text
Attack score = 0.49
Chase score  = 0.52
```

Jika sistem memilih action dengan skor tertinggi setiap frame tanpa aturan tambahan, NPC akan terus berganti antara `Attack` dan `Chase`. Perilaku ini terlihat tidak stabil, animasi bisa terpotong, dan keputusan NPC terasa “panik” atau tidak masuk akal.

Masalah ini bukan berarti Utility AI salah, tetapi menunjukkan bahwa **skor tertinggi saja belum cukup** untuk menghasilkan perilaku yang halus. Utility AI memberi nilai preferensi, tetapi game juga membutuhkan mekanisme stabilisasi agar perubahan action tidak terjadi terlalu cepat.

Beberapa solusi umum adalah:

- **Hysteresis**: action yang sedang aktif diberi bonus kecil agar tidak mudah tergantikan oleh action lain yang hanya sedikit lebih tinggi.
- **Action commitment**: NPC bertahan pada action yang dipilih selama durasi minimum.
- **Cooldown decision**: keputusan action baru hanya dihitung setelah interval tertentu, bukan setiap frame.
- **Minimum action duration**: action harus dijalankan minimal beberapa frame atau detik sebelum boleh diganti.

Secara intuisi, mekanisme ini membuat NPC lebih “bertanggung jawab” terhadap pilihannya. Ia tidak langsung berubah hanya karena skor berubah sedikit, tetapi menunggu sampai kondisi benar-benar cukup berbeda. Hal ini penting agar perilaku NPC tetap responsif, tetapi tidak bergetar atau tidak konsisten.

Sebelum lanjut, mahasiswa perlu memahami bahwa Utility AI bukan hanya menghitung skor, tetapi juga mengatur **kapan skor boleh mengubah action**. Tanpa aturan switching, sistem bisa menghasilkan keputusan yang valid secara matematis tetapi buruk secara gameplay.

### Inti yang Harus Ditekankan

- Utility AI dapat memilih action berbeda setiap frame jika skor antar action terlalu dekat.
- Perubahan skor kecil bisa menyebabkan NPC berganti action terlalu cepat dan terlihat tidak stabil.
- Solusi stabilisasi seperti **hysteresis**, **action commitment**, **cooldown decision**, dan **minimum action duration** membantu menjaga perilaku NPC lebih halus.
- Skor tertinggi penting, tetapi aturan switching sama pentingnya untuk gameplay yang natural.

### Transisi ke Slide Berikutnya

Selanjutnya kita akan membahas salah satu solusi paling langsung, yaitu **action commitment**, di mana NPC mempertahankan action yang dipilih selama durasi minimum sebelum boleh beralih.

---

## Slide 063 - Action Commitment

### Narasi

Slide ini membahas **action commitment**, yaitu aturan sederhana untuk mencegah NPC mengganti aksi terlalu cepat.

Masalahnya muncul ketika skor utility berubah tipis antar frame. Satu frame `Attack` unggul, frame berikutnya `Chase` unggul, lalu kembali lagi. Tanpa pengaman, NPC akan tampak ragu-ragu atau bergetar.

```text
Jika memilih Attack,
jalankan minimal 1 detik
sebelum memilih action lain.
```

Contoh ini berarti ketika NPC memilih `Attack`, sistem tidak langsung mengevaluasi ulang setiap frame. Sistem mencatat waktu mulai aksi, misalnya `startTime`, lalu menghitung `elapsed = now - startTime`. Selama `elapsed < 1 detik`, aksi `Attack` tetap dijalankan meskipun skor `Chase` naik sedikit.

Setelah durasi minimum terpenuhi, NPC boleh memilih aksi lain berdasarkan skor terbaru. Dengan cara ini, keputusan tetap berbasis utility, tetapi eksekusinya diberi jeda yang membuat perilaku lebih konsisten.

Manfaat utamanya adalah:

- perilaku NPC lebih stabil,
- animasi tidak terpotong di tengah gerakan,
- aksi tidak berganti setiap frame,
- pemain lebih mudah membaca niat NPC.

Konsep ini mirip dengan stabilisasi transition pada **FSM**. Pada FSM, kita bisa membatasi perpindahan state agar tidak terjadi terlalu cepat. Pada utility system, action commitment bekerja sebagai pengaman temporal setelah skor dihitung.

Durasi minimum sebaiknya dipilih berdasarkan panjang animasi, kecepatan gameplay, dan rasa kontrol. Durasi terlalu pendek tidak banyak membantu, sedangkan durasi terlalu panjang membuat NPC terasa lambat bereaksi.

Yang perlu dipahami mahasiswa: **action commitment** bukan mengganti mekanisme scoring, melainkan menambahkan aturan waktu agar aksi terpilih dapat selesai dijalankan.

### Inti yang Harus Ditekankan

- **Action commitment** memaksa NPC mempertahankan aksi selama durasi minimum.
- Mencegah switching cepat akibat fluktuasi skor kecil antar frame.
- Membuat animasi dan perilaku lebih stabil, mirip stabilisasi transition pada **FSM**.
- Durasi minimum harus disesuaikan dengan animasi dan gameplay.

### Transisi ke Slide Berikutnya

Setelah perilaku dasar NPC sudah lebih stabil, langkah berikutnya adalah memberi variasi karakter dengan parameter utility yang berbeda, yaitu personality NPC.

---

## Slide 064 - Utility AI dan Personality

### Narasi

Slide ini membahas bagaimana **Utility AI** dapat digunakan untuk membuat variasi **personality** pada NPC. Intuisi praktisnya sederhana: satu set perilaku dasar dapat dibuat sama, tetapi karakter NPC menjadi berbeda karena **parameter** atau **weight** dari setiap aksi diatur berbeda.

Dalam pendekatan ini, setiap aksi dapat memiliki nilai atau bobot tertentu. Saat NPC perlu memilih perilaku, sistem cenderung memilih aksi dengan nilai tertinggi. Dengan cara ini, keputusan NPC tidak hanya bergantung pada satu aturan tetap, tetapi juga pada parameter yang dapat disesuaikan untuk membentuk karakter.

Contoh pada slide menunjukkan tiga tipe musuh:

```text
Aggressive Enemy
Attack weight tinggi
Flee weight rendah

Coward Enemy
Flee weight tinggi
Attack weight rendah

Defensive Enemy
TakeCover weight tinggi
```

Untuk `Aggressive Enemy`, aksi `Attack` diberi weight tinggi, sedangkan `Flee` diberi weight rendah. Akibatnya, NPC ini lebih cenderung menyerang dan tidak mudah mundur.

Untuk `Coward Enemy`, kebalikannya terjadi. Aksi `Flee` memiliki weight tinggi, sementara `Attack` rendah. Dengan parameter ini, NPC akan lebih sering memilih mundur atau menghindari konflik.

Untuk `Defensive Enemy`, aksi `TakeCover` diberi weight tinggi. Artinya, NPC ini lebih cenderung mencari perlindungan atau posisi aman dibandingkan langsung menyerang atau melarikan diri.

Hal yang penting dipahami adalah bahwa perilaku dasar tidak harus ditulis ulang untuk setiap karakter. Yang berubah adalah **parameter**, bukan struktur perilaku utama. Dengan cara ini, satu sistem keputusan dapat menghasilkan banyak NPC yang terasa berbeda, seperti agresif, pengecut, atau defensif.

Sebelum lanjut, mahasiswa perlu memahami bahwa Utility AI bersifat berbasis **skor** atau **bobot**, sehingga perubahan parameter akan langsung memengaruhi pilihan aksi. Pemahaman ini menjadi dasar untuk membandingkan Utility AI dengan Behavior Tree pada slide berikutnya.

### Inti yang Harus Ditekankan

- **Utility AI** dapat digunakan untuk membentuk variasi **personality** NPC melalui parameter atau **weight** pada setiap aksi.
- Perilaku dasar dapat tetap sama, tetapi karakter NPC berbeda karena nilai `Attack`, `Flee`, atau `TakeCover` diatur berbeda.
- Perubahan parameter memengaruhi pilihan aksi, sehingga NPC dapat terasa agresif, pengecut, atau defensif.

### Transisi ke Slide Berikutnya

Selanjutnya, kita akan membandingkan Utility AI dengan Behavior Tree untuk melihat kapan masing-masing pendekatan lebih cocok digunakan dalam desain perilaku NPC.

---

## Slide 065 - Utility AI vs Behavior Tree

### Narasi

Pada slide ini kita membandingkan dua pendekatan penting dalam Game AI: **Behavior Tree** dan **Utility AI**. Keduanya digunakan untuk membantu NPC memilih aksi, tetapi cara berpikirnya berbeda. **Behavior Tree** bekerja seperti alur keputusan yang tersusun dari `node`, sedangkan **Utility AI** bekerja seperti sistem penilaian yang memberi `score` pada beberapa `action` berdasarkan `context`.

Secara intuisi, **Behavior Tree** cocok ketika kita ingin perilaku NPC terasa seperti logika yang jelas. Misalnya, NPC mengecek kondisi tertentu, lalu memilih aksi yang sesuai, lalu berhenti jika aksi tersebut berhasil. Pendekatan ini sangat berguna untuk alur misi, dialog, atau perilaku yang memiliki urutan prioritas yang rapi.

**Utility AI** berbeda. Di sini, NPC tidak hanya memilih berdasarkan urutan `node`, tetapi berdasarkan nilai atau `score` dari setiap `action`. Setiap aksi dapat dinilai berdasarkan situasi saat ini, misalnya jarak ke musuh, kondisi NPC, atau tujuan yang sedang dikejar. Aksi dengan `score` tertinggi kemudian dipilih. Karena itu, **Utility AI** lebih cocok untuk pilihan yang fleksibel dan kontekstual.

Perbedaan utamanya ada pada dasar keputusan. **Behavior Tree** menggunakan **urutan prioritas `node`**, sedangkan **Utility AI** menggunakan **skor aksi**. Output dari **Behavior Tree** adalah `node` atau `action` yang berhasil dieksekusi. Output dari **Utility AI** adalah `action` dengan `score` tertinggi pada saat itu.

Dari sisi perilaku, **Behavior Tree** lebih kuat untuk **logika terstruktur**. Ia mudah dibaca secara visual dan membantu kita memahami alur keputusan NPC. Namun, jika terlalu banyak cabang dan kondisi, `tree` bisa menjadi besar dan sulit dikelola. **Utility AI** lebih kuat untuk **pilihan fleksibel** dan perilaku bertahap, karena perubahan `context` dapat mengubah `score` secara halus. Namun, jika `score` berubah terlalu cepat, NPC bisa mengalami **switching** yang terlalu cepat antar `action`.

Jadi, yang harus dipahami mahasiswa adalah bahwa kedua pendekatan ini tidak selalu bisa disamakan. **Behavior Tree** lebih cocok ketika perilaku NPC ingin dibuat seperti alur logika yang jelas. **Utility AI** lebih cocok ketika perilaku NPC perlu menilai situasi dan memilih aksi yang paling masuk akal pada saat itu.

### Inti yang Harus Ditekankan

- **Behavior Tree** memilih berdasarkan **urutan prioritas `node`** dan menghasilkan `action` yang berhasil.
- **Utility AI** memilih berdasarkan **skor aksi** yang dihitung dari `context`, lalu memilih `action` dengan `score` tertinggi.
- **Behavior Tree** cocok untuk **logika terstruktur**, sedangkan **Utility AI** cocok untuk **pilihan fleksibel** dan perilaku bertahap.
- Risiko utama **Behavior Tree** adalah `tree` bisa menjadi terlalu besar, sedangkan risiko utama **Utility AI** adalah `action` bisa berpindah terlalu cepat jika `score` tidak dihaluskan.

### Transisi ke Slide Berikutnya

Selanjutnya, kita akan memperluas perbandingan ini dengan teknik lain seperti **FSM** dan **Hierarchical FSM**, sehingga mahasiswa dapat melihat bahwa pemilihan teknik AI NPC harus disesuaikan dengan kebutuhan perilaku, bukan menganggap satu teknik selalu lebih baik untuk semua kasus.

---

## Slide 066 - FSM vs Behavior Tree vs Utility AI

### Narasi

Setelah membandingkan **Behavior Tree** dan **Utility AI**, kita perlu menempatkan keduanya bersama teknik perilaku yang lebih umum, yaitu **FSM** dan **Hierarchical FSM**. Tujuannya bukan mencari teknik yang paling canggih, tetapi memahami kapan setiap teknik paling sesuai dengan kebutuhan perilaku NPC.

Secara intuisi, **FSM** cocok ketika perilaku NPC dapat digambarkan sebagai beberapa kondisi utama yang berpindah secara jelas. Misalnya NPC bergerak, berhenti, menyerang, lalu kembali. Kelebihannya sederhana dan mudah diikuti. Namun, ketika jumlah kondisi bertambah, jumlah transisi bisa membesar dan sulit dikelola.

**Behavior Tree** mengambil pendekatan yang berbeda. Perilaku dipecah menjadi `node`, `condition`, dan `action` yang disusun berdasarkan prioritas. Teknik ini kuat untuk perilaku modular dan visual, terutama ketika banyak aksi bersyarat. Kelemahannya, struktur bisa menjadi besar jika tidak dirancang dengan baik.

**Utility AI** bekerja dengan memberi skor pada aksi berdasarkan konteks. Teknik ini fleksibel dan adaptif karena NPC dapat memilih aksi dengan skor tertinggi. Perilakunya bisa terasa lebih bertahap. Namun, desain skor harus hati-hati agar tidak terjadi perpindahan aksi yang terlalu cepat atau tidak stabil.

**Hierarchical FSM** membantu ketika `state` tidak cukup datar. State dapat dikelompokkan menjadi lapisan, sehingga perilaku berlapis menjadi lebih rapi. Namun, kompleksitasnya lebih tinggi dibanding `FSM` dasar karena ada beberapa level state yang harus dikelola.

Poin penting yang harus dipahami mahasiswa adalah tidak ada satu teknik terbaik untuk semua kasus. Pemilihan teknik bergantung pada:

- jumlah `state` atau aksi yang perlu dikelola,
- apakah prioritas perilaku sudah jelas,
- apakah perilaku perlu responsif terhadap banyak konteks,
- apakah struktur perlu mudah dibaca dan dikembangkan,
- apakah perilaku perlu stabil atau lebih adaptif.

Dalam praktik, satu NPC bisa saja memakai kombinasi teknik. Misalnya `FSM` untuk fase besar, `Behavior Tree` untuk detail perilaku, dan `Utility AI` untuk memilih aksi dalam situasi tertentu. Yang terpenting adalah memilih struktur yang membuat perilaku NPC mudah dipahami, mudah diuji, dan mudah dikembangkan.

### Inti yang Harus Ditekankan

- **FSM** sederhana dan jelas, tetapi transisi bisa membesar.
- **Behavior Tree** modular dan visual, tetapi struktur bisa menjadi besar.
- **Utility AI** fleksibel dan adaptif, tetapi membutuhkan desain skor yang baik.
- **Hierarchical FSM** rapi untuk perilaku berlapis, tetapi lebih kompleks dari `FSM` dasar.
- Tidak ada teknik universal; pilihan harus mengikuti kebutuhan perilaku NPC.

### Transisi ke Slide Berikutnya

Dengan memahami posisi masing-masing teknik, kita lanjut ke kriteria praktis: kapan **Behavior Tree** benar-benar cocok digunakan untuk perilaku NPC.

---

## Slide 067 - Kapan Memakai Behavior Tree?

### Narasi

Pada slide ini kita fokus pada **kapan Behavior Tree menjadi pilihan yang tepat** untuk perilaku NPC. Setelah membandingkan beberapa pendekatan perilaku, poin pentingnya bukan mencari teknik yang paling canggih, tetapi memilih struktur yang paling sesuai dengan bentuk perilaku yang ingin kita bangun.

Behavior Tree cocok ketika NPC memiliki **banyak aksi bersyarat**. Artinya, NPC tidak hanya berpindah antar dua atau tiga state sederhana, tetapi harus memeriksa beberapa kondisi sebelum memilih tindakan. Misalnya, NPC harus mengecek apakah musuh terlihat, jarak cukup dekat, amunisi tersedia, atau posisi sedang terancam.

Prioritas aksi juga menjadi indikator penting. Jika kita ingin perilaku yang jelas urutannya, misalnya **cek bahaya dulu, lalu cari musuh, lalu serang, lalu kembali ke posisi aman**, Behavior Tree membantu menyusun prioritas tersebut secara eksplisit. Dengan struktur pohon, kita bisa membaca alur keputusan dari atas ke bawah dan memahami mana aksi yang lebih penting.

Behavior Tree juga tepat jika perilaku dapat dipecah menjadi **node** yang lebih kecil. Setiap node bisa mewakili satu keputusan, satu `condition`, atau satu `action`. Pembagian ini membuat perilaku lebih mudah diuji, diganti, dan dikembangkan. Jika satu bagian perilaku berubah, kita tidak perlu menulis ulang seluruh logika NPC.

Sifat **modular** dan **reusable** juga menjadi alasan kuat. Komponen seperti `condition` untuk mengecek jarak, `action` untuk bergerak, atau node untuk memilih target dapat dipakai ulang di NPC lain. Ini sangat berguna dalam proyek game yang memiliki banyak karakter dengan perilaku mirip, tetapi tidak identik.

Beberapa contoh kasus yang cocok menggunakan Behavior Tree adalah:

- **guard** yang menjaga area,
- **enemy shooter** yang memilih kapan menembak,
- **boss pattern** dengan urutan serangan yang jelas,
- **companion** yang mengikuti dan membantu pemain,
- **stealth game NPC** yang bereaksi terhadap suara, jarak, atau penampakan.

Intuisi praktisnya, jika perilaku NPC terasa seperti **daftar aturan prioritas** yang bisa dipecah menjadi blok-blok kecil, Behavior Tree biasanya lebih nyaman daripada struktur state yang transisinya bisa membesar. Namun, jika perilaku lebih berupa penilaian fleksibel dari banyak faktor, kita akan membahas pendekatan Utility pada slide berikutnya.

### Inti yang Harus Ditekankan

- Behavior Tree cocok untuk NPC dengan **banyak aksi bersyarat** dan **prioritas yang jelas**.
- Struktur **node**, `condition`, dan `action` membuat perilaku lebih **modular**, mudah diuji, dan dapat dipakai ulang.
- Contoh yang tepat meliputi **guard**, **enemy shooter**, **boss pattern**, **companion**, dan **stealth game NPC**.

### Transisi ke Slide Berikutnya

Jika Behavior Tree menjawab kebutuhan perilaku yang terstruktur dan berprioritas, Utility akan kita gunakan ketika keputusan NPC perlu lebih adaptif, fleksibel, dan bergantung pada banyak faktor yang tidak selalu bisa dirangkai menjadi aturan kaku.

---

## Slide 068 - Kapan Memakai Utility AI?

### Narasi

Slide ini membahas **kapan Utility AI menjadi pilihan yang tepat** untuk perilaku NPC. Berbeda dengan struktur keputusan yang sangat kaku, Utility AI bekerja dengan cara menilai beberapa kemungkinan **action** berdasarkan seberapa relevan atau seberapa menguntungkan action tersebut pada kondisi saat ini.

Intuisi praktisnya sederhana. Jika NPC memiliki banyak pilihan aksi, dan pilihan itu bergantung pada beberapa faktor sekaligus, maka aturan berbasis prioritas tetap bisa terasa kaku. Utility AI membantu perilaku menjadi lebih **adaptif**, karena keputusan tidak hanya ditentukan oleh satu kondisi, tetapi oleh kombinasi beberapa nilai.

Utility AI cocok digunakan ketika:

- banyak **action** mungkin dipilih,
- pilihan bergantung pada beberapa **factor**,
- tidak ingin rule terlalu kaku,
- ingin perilaku lebih adaptif,
- ingin variasi **personality** pada NPC.

Misalnya, sebuah NPC combat taktis tidak selalu harus menyerang secara langsung. Keputusan bisa berubah tergantung pada `health`, `distance`, `threat`, dan `objective`. Jika `health` rendah, action `flee` bisa mendapat nilai lebih tinggi. Jika musuh dekat dan `health` masih baik, action `attack` bisa lebih unggul. Dengan cara ini, perilaku NPC terasa lebih dinamis dan tidak hanya mengikuti urutan rule yang tetap.

Utility AI juga berguna ketika kita ingin NPC memiliki **personality** yang berbeda. Dua NPC bisa memiliki action yang sama, tetapi dengan bobot penilaian yang berbeda. Satu NPC bisa lebih agresif, satu lagi lebih hati-hati, dan satu lagi lebih fokus pada objective. Perbedaan ini muncul bukan karena action-nya berbeda, tetapi karena nilai utility dari masing-masing action berbeda.

Beberapa contoh kasus yang cocok untuk Utility AI adalah:

- NPC combat taktis,
- simulation game,
- survival agent,
- strategy unit,
- director sederhana.

Pada kasus-kasus ini, keputusan NPC sering kali tidak bisa diringkas menjadi satu aturan tunggal. Ada banyak trade-off, banyak kondisi yang berubah, dan banyak pilihan yang harus dibandingkan secara bersamaan.

Yang perlu dipahami mahasiswa sebelum lanjut adalah bahwa Utility AI bukan pengganti mutlak dari struktur perilaku lain. Jika prioritas aksi sudah sangat jelas dan perilaku mudah dipecah menjadi node yang modular, struktur berbasis tree bisa lebih sederhana. Utility AI paling kuat ketika kita ingin **perbandingan bertahap**, **adaptasi terhadap kondisi**, dan **variasi perilaku** yang lebih halus.

### Inti yang Harus Ditekankan

- **Utility AI** cocok ketika NPC memiliki banyak pilihan action dan keputusan bergantung pada beberapa faktor.
- Utility AI membuat perilaku lebih **adaptif** karena action dinilai berdasarkan kondisi saat ini, bukan hanya urutan rule yang kaku.
- Utility AI juga mendukung variasi **personality** melalui perbedaan bobot penilaian antar action.
- Utility AI paling berguna untuk kasus seperti NPC combat taktis, simulation, survival, strategy unit, dan director sederhana.

### Transisi ke Slide Berikutnya

Setelah memahami kapan Utility AI lebih cocok digunakan, langkah berikutnya adalah melihat bagaimana Utility AI dapat digabungkan dengan struktur perilaku yang lebih besar, sehingga keputusan tetap terorganisir tetapi tetap fleksibel.

---

## Slide 069 - Kombinasi Behavior Tree dan Utility AI

### Narasi

Pada slide ini, kita membahas cara menggabungkan **Behavior Tree** dan **utility** dalam satu sistem keputusan NPC.

Intuisi praktisnya sederhana: **Behavior Tree** berguna untuk mengatur *struktur besar* dan prioritas, sedangkan **utility** berguna untuk memilih *aksi terbaik* ketika ada beberapa pilihan yang mirip. Dengan kombinasi ini, keputusan tidak menjadi terlalu kaku, tetapi juga tidak kehilangan kontrol atas kondisi kritis.

```text
Behavior Tree
└── Selector
    ├── Emergency Sequence
    │   ├── Is Dying?
    │   └── Flee
    │
    └── Utility Selector
        ├── Attack
        ├── Chase
        ├── TakeCover
        └── Patrol
```

Diagram ini dibaca dari atas ke bawah. Node paling atas adalah `Selector`, yang mencoba anak-anaknya secara berurutan sampai ada satu yang berhasil.

Secara pipeline, inputnya adalah state NPC, prosesnya evaluasi kondisi dan skor, lalu outputnya adalah satu aksi yang dijalankan.

- Anak pertama adalah `Emergency Sequence`.
- Di dalamnya ada kondisi `Is Dying?` dan aksi `Flee`.
- Jika NPC sedang sekarat, `Sequence` ini berhasil, lalu tree berhenti di cabang tersebut.
- Jika tidak sekarat, cabang ini gagal dan eksekusi lanjut ke `Utility Selector`.

`Utility Selector` berisi beberapa aksi: `Attack`, `Chase`, `TakeCover`, dan `Patrol`. Di sinilah sistem menilai masing-masing aksi berdasarkan faktor game, lalu memilih yang memiliki skor tertinggi.

Kombinasi ini memberi dua keuntungan penting.

- **Prioritas tetap aman**: kondisi darurat seperti sekarat tidak kalah oleh aksi combat yang skornya tinggi.
- **Perilaku tetap fleksibel**: pilihan antara menyerang, mengejar, berlindung, atau patroli dapat berubah sesuai keadaan.

Yang harus dipahami mahasiswa adalah batas tanggung jawab masing-masing bagian. **Behavior Tree** menentukan *kapan cabang boleh dijalankan*, sedangkan **utility** menentukan *aksi mana yang paling layak* di dalam cabang tersebut.

### Inti yang Harus Ditekankan

- **Behavior Tree** mengatur struktur besar dan urutan prioritas keputusan.
- **Utility** memilih aksi terbaik dalam bagian tertentu berdasarkan skor atau faktor keadaan.
- `Emergency Sequence` diproses lebih dulu agar kondisi kritis selalu diprioritaskan.
- `Utility Selector` memberi variasi adaptif pada aksi seperti `Attack`, `Chase`, `TakeCover`, dan `Patrol`.

### Transisi ke Slide Berikutnya

Selanjutnya, kita akan melihat contoh kombinasi ini pada enemy, di mana kondisi darurat, keputusan combat berbasis skor, dan perilaku patroli disusun dalam satu tree.

---

## Slide 070 - Contoh Kombinasi pada Enemy

### Narasi

Slide ini menunjukkan contoh konkret bagaimana **Behavior Tree** dan **utility-based decision** dapat digabungkan pada perilaku enemy. Tujuannya bukan hanya menampilkan struktur node, tetapi memperlihatkan cara kerja prioritas dan pemilihan aksi yang lebih halus dalam satu sistem perilaku.

```text
Root
 └─ Selector
      ├─ Sequence: Emergency
      │    ├─ Health Critical?
      │    └─ Flee
      │
      ├─ Sequence: Combat
      │    ├─ Can See Player?
      │    └─ Utility Combat Decision
      │         ├─ Attack
      │         ├─ Chase
      │         └─ Take Cover
      │
      └─ Patrol
```

Perhatikan bahwa node teratas adalah `Root`, dan anak utamanya adalah `Selector`. Dalam Behavior Tree, `Selector` mencoba anak-anaknya secara berurutan dari atas ke bawah. Jika satu anak berhasil, eksekusi berhenti di situ. Artinya, urutan anak pada `Selector` menentukan **prioritas perilaku**.

Anak pertama adalah `Sequence: Emergency`. Node `Sequence` bekerja dengan logika yang berbeda: ia mengeksekusi anak-anaknya secara berurutan, dan semua anak harus berhasil agar sequence dianggap berhasil. Di sini, enemy pertama-tama memeriksa `Health Critical?`. Jika kondisi itu benar, enemy akan menjalankan `Flee`. Jika kondisi itu tidak terpenuhi, sequence gagal, lalu `Selector` lanjut ke anak berikutnya.

Anak kedua adalah `Sequence: Combat`. Sequence ini dimulai dengan kondisi `Can See Player?`. Jika enemy tidak melihat player, sequence gagal dan sistem turun ke perilaku berikutnya. Namun, jika enemy melihat player, maka eksekusi masuk ke `Utility Combat Decision`. Di sinilah utility-based decision bekerja: sistem tidak memilih satu aksi secara kaku, tetapi menilai beberapa kemungkinan aksi seperti `Attack`, `Chase`, dan `Take Cover` berdasarkan skor.

Skor tersebut biasanya berasal dari kondisi game, misalnya jarak dengan player, kesehatan enemy, ancaman yang diterima, atau ketersediaan cover. Aksi dengan skor tertinggi akan dipilih. Dengan cara ini, perilaku combat menjadi lebih adaptif: enemy bisa menyerang jika jarak dekat, mengejar jika jarak sedang, atau mengambil cover jika kondisinya berbahaya.

Jika tidak ada kondisi darurat dan enemy juga tidak melihat player, maka perilaku terakhir yang dijalankan adalah `Patrol`. Ini penting karena enemy tetap memiliki perilaku dasar ketika tidak ada interaksi langsung dengan player. Jadi, struktur ini menghasilkan alur yang jelas: **darurat diprioritaskan, combat dipilih berdasarkan skor, dan patrol menjadi fallback**.

### Inti yang Harus Ditekankan

- `Selector` menentukan **prioritas** perilaku dengan mencoba anak dari atas ke bawah.
- `Sequence` memastikan beberapa kondisi atau aksi dijalankan secara berurutan.
- `Utility Combat Decision` membuat pilihan aksi combat lebih fleksibel berdasarkan **skor**.
- `Patrol` berfungsi sebagai perilaku fallback ketika tidak ada kondisi darurat atau combat.

### Transisi ke Slide Berikutnya

Setelah struktur kombinasi Behavior Tree dan utility decision ini dipahami, langkah berikutnya adalah melihat konsep-konsep Unity yang relevan untuk membangun sistem perilaku seperti ini.

---

## Slide 071 - Unity Concepts yang Relevan

### Narasi

Sebelum membangun behavior tree atau utility-based behavior, mahasiswa perlu melihat fondasi Unity yang akan dipakai. Konsep-konsep ini bukan sekadar daftar API; mereka adalah cara NPC membaca dunia, mengambil keputusan, bergerak, beranimasi, dan menyimpan data perilaku.

Secara praktis, kita bisa membaginya menjadi empat kelompok.

- **Komponen dan siklus eksekusi**
  - `MonoBehaviour` adalah kelas dasar untuk komponen Unity yang bisa dipasang di GameObject.
  - `Update()` dipanggil setiap frame, sehingga cocok untuk pengecekan kondisi sederhana atau pembaruan perilaku.
  - `SerializeField` memungkinkan variabel privat tetap bisa diatur dari Inspector tanpa membuka publik.

- **Ruang, posisi, dan gerak**
  - `Transform` menyimpan posisi, rotasi, dan skala objek.
  - `Vector3` digunakan untuk koordinat, arah, jarak, dan offset.
  - `NavMeshAgent` membantu NPC bergerak di atas NavMesh, terutama untuk pathfinding.

- **Interaksi, animasi, dan deteksi**
  - `Animator` mengontrol state machine animasi, misalnya idle, walk, attack, flee.
  - `Collider` mendeteksi tumbukan atau overlap dengan objek lain.
  - `Raycast` berguna untuk line of sight, deteksi target, atau cek halangan.
  - `LayerMask` memfilter objek mana yang boleh dideteksi atau diabaikan.

- **Data, debugging, dan visualisasi**
  - `ScriptableObject` dapat menyimpan data yang bisa dipakai ulang, misalnya parameter aksi atau konfigurasi perilaku.
  - `Debug.Log` membantu melacak keputusan yang diambil NPC.
  - `Gizmos` membantu memvisualisasikan area deteksi, path, atau node saat development.

Untuk struktur behavior tree, mahasiswa juga perlu memahami beberapa konsep C# yang akan sering muncul.

- `enum` status node, misalnya `Success`, `Failure`, dan `Running`, untuk menyatakan hasil evaluasi node.
- `class inheritance` agar node komposit seperti `Selector` dan `Sequence` serta node leaf dapat berbagi antarmuka yang sama.
- `List<BTNode>` atau struktur child node untuk menyimpan anak dari sebuah node.
- `interface` action agar setiap aksi memiliki cara eksekusi yang konsisten.
- Data context atau blackboard untuk menyimpan informasi bersama, seperti health, target, jarak, atau status darurat.

Intuisi pentingnya adalah: behavior tree tidak berdiri sendiri. Ia membutuhkan data dari dunia Unity, lalu mengubah data itu menjadi keputusan, dan keputusan itu dieksekusi melalui komponen seperti `NavMeshAgent`, `Animator`, atau aksi kustom. Jika mahasiswa sudah paham konsep ini, implementasi behavior tree dan utility-based behavior akan terasa lebih terarah.

### Inti yang Harus Ditekankan

- `MonoBehaviour`, `Update()`, dan `SerializeField` adalah dasar komponen dan alur eksekusi di Unity.
- `Transform`, `Vector3`, `NavMeshAgent`, `Raycast`, dan `LayerMask` membantu NPC memahami posisi, gerak, dan deteksi.
- `Animator`, `Collider`, `ScriptableObject`, `Debug.Log`, dan `Gizmos` mendukung animasi, interaksi, data, debugging, dan visualisasi.
- Struktur behavior tree membutuhkan `enum` status, inheritance, child node, interface action, dan blackboard/context.

### Transisi ke Slide Berikutnya

Setelah fondasi Unity ini dipahami, langkah berikutnya adalah membuat action yang lebih rapi dan reusable. Pada slide berikutnya, kita akan melihat bagaimana `ScriptableObject` dapat dipakai untuk menyimpan dan mengatur utility action.

---

## Slide 072 - ScriptableObject untuk Utility Action

### Narasi

Pada slide ini, kita melihat cara membuat **action** dalam Behavior Tree atau sistem utility-based menjadi **asset** yang bisa disimpan dan diatur ulang. Intuisi pentingnya adalah: action tidak selalu harus ditulis sebagai logika yang melekat pada satu `GameObject`. Action juga bisa berupa **data konfigurasi** yang menentukan apa yang dilakukan NPC, misalnya menyerang, mundur, menyembuhkan, atau patroli.

Di Unity, `ScriptableObject` adalah tipe asset yang cocok untuk menyimpan data seperti ini. Berbeda dengan `MonoBehaviour` yang biasanya menempel pada `GameObject`, `ScriptableObject` dapat disimpan sebagai file di project, misalnya `AttackAction.asset`. Artinya, satu jenis action dapat dibuat sekali, lalu dipakai oleh banyak NPC atau banyak percabangan Behavior Tree.

Keuntungan utama dari pendekatan ini adalah:

- data action dapat diatur dari `Inspector`,
- mudah membuat variasi action,
- action menjadi reusable,
- alur kerja menjadi lebih designer-friendly.

Dengan `Inspector`, parameter action dapat diubah tanpa harus membuka script. Misalnya, parameter yang relevan dengan action dapat diubah langsung, tanpa harus menulis ulang seluruh logika. Yang penting dipahami adalah `ScriptableObject` memisahkan **data action** dari **logika evaluasi node**.

Contoh konsep yang ditampilkan pada slide adalah:

- `AttackAction.asset`
- `FleeAction.asset`
- `HealAction.asset`
- `PatrolAction.asset`

Setiap file tersebut dapat dianggap sebagai konfigurasi action. Behavior Tree tetap bertugas memilih action mana yang aktif berdasarkan kondisi, sementara asset menyimpan detail perilaku yang ingin dijalankan.

Untuk praktikum awal, implementasi tidak harus langsung menggunakan `ScriptableObject`. Mahasiswa dapat membuat action lebih sederhana di script biasa, misalnya sebagai class biasa atau `MonoBehaviour`, selama alur Behavior Tree sudah jelas. Setelah struktur node, condition, dan action dipahami, barulah action dapat dipindahkan ke `ScriptableObject` agar lebih rapi, mudah diatur, dan lebih mudah dikembangkan.

Sebelum lanjut, mahasiswa perlu memahami bahwa `ScriptableObject` bukan pengganti Behavior Tree. Ia hanya membuat action menjadi **data yang dapat dikelola**, sehingga perubahan perilaku NPC tidak selalu membutuhkan perubahan kode. Pemahaman ini penting karena kesalahan perilaku nanti bisa berasal dari data action yang salah, bukan hanya dari struktur tree.

### Inti yang Harus Ditekankan

- `ScriptableObject` membuat action menjadi asset yang dapat disimpan, diatur, dan dipakai ulang.
- `Inspector` memungkinkan parameter action diubah tanpa mengubah logika script secara langsung.
- Untuk praktikum awal, action boleh dibuat sederhana di script biasa, lalu dikembangkan menjadi `ScriptableObject`.

### Transisi ke Slide Berikutnya

Setelah action dapat dipahami sebagai data yang terpisah, langkah berikutnya adalah memeriksa bagaimana Behavior Tree mengevaluasi node. Pada slide berikutnya, kita akan melihat cara debugging Behavior Tree, termasuk node yang sedang `Running`, `Success`, atau `Failure`, serta urutan evaluasi selector.

---

## Slide 073 - Debugging Behavior Tree

### Narasi

Setelah behavior tree dibangun, langkah penting berikutnya adalah memastikan pohon tersebut benar-benar mengevaluasi cabang yang diharapkan. Dalam praktik, perilaku NPC sering kali terlihat tidak sesuai harapan bukan karena satu node rusak, tetapi karena urutan evaluasi, kondisi, atau status node tidak sesuai asumsi. Karena itu, debugging behavior tree berfokus pada melacak jalur keputusan dari `root` hingga action yang sedang dijalankan.

Yang perlu diperhatikan saat debugging adalah status setiap node. Secara umum, node dapat berada pada kondisi berikut:

- **Running**: node sedang dievaluasi atau action sedang berlangsung.
- **Success**: node selesai dan menghasilkan hasil positif.
- **Failure**: node tidak dapat dilanjutkan atau kondisi tidak terpenuhi.
- **Idle** atau tidak aktif: node belum dievaluasi pada tick saat ini.

Selain status, mahasiswa perlu memahami **urutan evaluasi selector**. Selector biasanya mencoba anak pertama, lalu anak berikutnya jika anak sebelumnya gagal. Jika urutan ini tidak terlihat jelas, sulit mengetahui mengapa satu cabang dilewati dan cabang lain yang dipilih.

Contoh output debug sederhana dapat ditampilkan seperti ini:

```text
Root/Selector/AttackSequence: Failure
Root/Selector/ChaseSequence: Running
Current Action: Chase
```

Dari contoh tersebut, dapat dibaca bahwa `Root/Selector` mencoba `AttackSequence` terlebih dahulu. Karena `AttackSequence` berstatus `Failure`, selector lanjut ke `ChaseSequence`. Node `ChaseSequence` sedang `Running`, dan action aktif saat ini adalah `Chase`. Informasi ini membantu kita mengetahui bahwa NPC tidak menyerang bukan karena action `Attack` tidak ada, tetapi karena cabang `AttackSequence` gagal atau tidak memenuhi kondisi.

Hal lain yang penting adalah menemukan **condition mana yang gagal**. Dalam behavior tree, banyak keputusan ditentukan oleh condition seperti jarak musuh, health, cooldown, atau target tersedia. Jika condition gagal, sequence biasanya berhenti dan mengembalikan `Failure`. Dengan melihat condition yang gagal, kita dapat memperbaiki logika, threshold, atau data yang diberikan ke NPC.

Visual debug sangat membantu karena behavior tree dapat menjadi besar dan memiliki banyak cabang. Dengan visualisasi, kita dapat melihat node aktif, jalur evaluasi, warna status, dan action yang sedang berjalan. Ini membuat proses debugging lebih cepat dibandingkan hanya membaca log teks, terutama ketika tree memiliki banyak selector, sequence, dan condition.

Sebelum lanjut ke topik berikutnya, mahasiswa perlu memahami bahwa debugging behavior tree bukan hanya mencari error, tetapi memahami **mengapa NPC memilih perilaku tertentu**. Fokus utamanya adalah melacak status node, urutan evaluasi, dan condition yang menentukan hasil akhir.

### Inti yang Harus Ditekankan

- Perhatikan status node: **Running**, **Success**, dan **Failure**.
- Pahami **urutan evaluasi selector**, karena selector mencoba cabang secara berurutan.
- Lacak **condition mana yang gagal** untuk mengetahui alasan cabang dilewati.
- Gunakan visual debug atau log terstruktur agar jalur keputusan behavior tree mudah dibaca.

### Transisi ke Slide Berikutnya

Setelah memahami cara melacak jalur keputusan pada behavior tree, kita akan beralih ke debugging utility-based decision, di mana fokusnya bukan lagi status node, tetapi skor yang menentukan aksi mana yang dipilih.

---

## Slide 074 - Debugging Utility AI

### Narasi

Pada slide ini, kita akan membahas **debugging** pada **pengambilan keputusan berbasis utilitas**. Jika pada behavior tree kita memeriksa status node, pada sistem utilitas hal yang paling penting adalah melihat **skor** dari setiap aksi. Skor inilah yang menentukan aksi mana yang dianggap paling sesuai pada kondisi tertentu.

Contoh output debug yang sederhana bisa ditampilkan seperti ini:

```text
Attack: 0.72
Chase : 0.65
Flee  : 0.20
Patrol: 0.10

Selected: Attack
```

Dari contoh tersebut, mahasiswa perlu memahami bahwa `Attack` terpilih karena memiliki skor tertinggi, yaitu `0.72`. Nilai `0.65` untuk `Chase` menunjukkan bahwa aksi tersebut masih relevan, tetapi belum menjadi pilihan utama. Sementara `Flee` dan `Patrol` memiliki skor rendah, sehingga NPC tidak memilihnya pada kondisi tersebut.

Tanpa debug skor, mahasiswa sering hanya melihat hasil akhir, misalnya NPC menyerang atau NPC mengejar. Namun, proses di balik keputusan itu tidak terlihat. Padahal, memahami skor membantu kita mengetahui faktor apa yang menaikkan atau menurunkan nilai sebuah aksi.

Debug skor dapat ditampilkan melalui beberapa cara yang praktis:

- `Console`, untuk log cepat selama development.
- `UI text`, untuk menampilkan skor di dalam scene.
- `gizmos`, untuk visualisasi langsung di editor.
- `inspector custom`, untuk melihat nilai per aksi secara rapi.
- `on-screen label`, untuk debugging saat game berjalan.

Poin penting yang harus dipahami sebelum lanjut adalah: **debugging sistem utilitas bukan hanya menampilkan aksi terpilih**, tetapi juga menampilkan **skor setiap kandidat aksi**. Dengan begitu, mahasiswa dapat memeriksa apakah keputusan NPC sesuai dengan desain gameplay, dan apakah ada aksi yang seharusnya tinggi tetapi nilainya rendah.

### Inti yang Harus Ditekankan

- **Skor** adalah informasi utama yang harus ditampilkan saat debugging pengambilan keputusan berbasis utilitas.
- Aksi terpilih biasanya adalah aksi dengan skor tertinggi, tetapi mahasiswa perlu memeriksa nilai relatif antar aksi.
- Debug dapat dilakukan melalui `Console`, `UI text`, `gizmos`, `inspector custom`, atau `on-screen label`.
- Tanpa skor, sulit mengetahui mengapa NPC memilih satu aksi dan tidak memilih aksi lain.

### Transisi ke Slide Berikutnya

Setelah memahami cara menampilkan skor, langkah berikutnya adalah mengenali kesalahan umum yang sering membuat skor utilitas tidak berperilaku sesuai harapan.

---

## Slide 075 - Kesalahan Umum Utility AI

### Narasi

Pada slide ini kita membahas **kesalahan umum** yang sering membuat utility-based decision terlihat tidak masuk akal. Masalahnya bukan hanya pada rumus skor, tetapi pada cara skor diubah menjadi perilaku NPC yang stabil, dapat dijelaskan, dan sesuai desain game.

Kesalahan ini dapat dikelompokkan menjadi beberapa area:

- **Skor tidak valid**: skor tidak dinormalisasi, sulit diamati, atau tidak mencerminkan gameplay.
- **Keputusan tidak stabil**: aksi berubah terlalu cepat karena skor berubah setiap frame.
- **Struktur keputusan sulit dibaca**: bobot tidak jelas, terlalu banyak faktor, atau faktor wajib tidak diperlakukan sebagai gate.
- **Eksekusi tidak aman**: tidak ada `defaultAction`, atau aksi terpilih tidak bisa dijalankan oleh sistem NPC.

**Skor harus dapat dibandingkan secara adil.** Jika satu aksi menghasilkan nilai `0` sampai `100`, sedangkan aksi lain `0` sampai `1`, maka aksi dengan rentang besar akan selalu unggul. Karena itu, skor sebaiknya dinormalisasi ke rentang yang sama, misalnya `0` sampai `1`. Dengan normalisasi, keputusan ditentukan oleh kondisi gameplay dan bobot, bukan oleh skala perhitungan.

**Sistem harus memiliki jalan keluar.** Jika semua skor rendah, atau tidak ada aksi yang cukup layak, NPC tetap harus melakukan sesuatu. `defaultAction` seperti `patrol`, `idle`, atau `wait` mencegah NPC diam, error, atau memilih aksi yang sebenarnya tidak valid. Default action juga menjaga perilaku tetap aman ketika kondisi lingkungan belum cukup untuk memilih aksi agresif.

**Keputusan tidak boleh terlalu cepat berubah.** Skor utility sering berubah setiap frame karena jarak, health, target, atau posisi pemain. Jika NPC langsung mengganti aksi setiap kali skor sedikit berubah, perilaku akan terlihat gemetar atau tidak natural. Solusinya adalah memberi `cooldown`, `minimumDuration`, atau hysteresis: aksi baru hanya dipilih jika selisih skornya cukup besar dan bertahan cukup lama.

**Bobot dan faktor harus mudah dijelaskan.** Jika satu aksi memiliki terlalu banyak faktor, atau bobotnya tidak jelas, sulit mengetahui mengapa NPC memilih aksi tertentu. Faktor wajib sebaiknya dibuat sebagai `multiplier` atau gate, bukan sekadar penambah skor. Misalnya:

```text
attackScore = baseAttack * canSeeTarget * inRange * notStunned
```

Jika `canSeeTarget` bernilai `0`, maka `attackScore` langsung menjadi `0`, meskipun faktor lain tinggi. Pola ini membuat aturan wajib lebih jelas daripada sekadar menambah nilai kecil.

**Skor harus sesuai gameplay dan aksi harus dapat dieksekusi.** Skor tinggi tidak berguna jika aksi tidak bisa dijalankan, misalnya jarak terlalu jauh, animasi sedang terkunci, atau state machine tidak mengizinkan transisi. Selain itu, skor harus mencerminkan desain: musuh yang sekarat sebaiknya lebih memilih `flee` atau `defend`, bukan tetap `attack` karena bobot lama.

Sebelum lanjut ke praktikum, mahasiswa perlu memastikan bahwa utility decision memiliki skor yang dinormalisasi, `defaultAction` yang jelas, aturan kestabilan yang masuk akal, faktor yang dapat dijelaskan, dan eksekusi aksi yang benar-benar valid.

### Inti yang Harus Ditekankan

- Skor utility harus **dinormalisasi** agar bisa dibandingkan secara adil.
- Selalu sediakan `defaultAction` agar NPC tetap berperilaku valid ketika tidak ada aksi yang cukup layak.
- Gunakan `cooldown`, `minimumDuration`, atau hysteresis agar keputusan tidak berubah terlalu cepat.
- Faktor wajib sebaiknya menjadi `multiplier` atau gate, bukan hanya penambah skor.
- Skor harus sesuai gameplay, dan aksi terpilih harus benar-benar dapat dieksekusi.

### Transisi ke Slide Berikutnya

Setelah memahami kesalahan umum yang harus dihindari, kita lanjut ke gambaran umum praktikum pertemuan 6, yaitu membangun NPC dengan behavior tree atau utility-based decision.

---

## Slide 076 - Praktikum Pertemuan 6: Gambaran Umum

### Narasi

Slide ini menjadi pintu masuk ke praktikum pertemuan keenam. Fokusnya bukan lagi pada penjelasan teori secara terpisah, tetapi pada rancangan implementasi NPC yang dapat mengambil keputusan secara lebih terstruktur.

```text
Pilihan A:
NPC Behavior Tree

Pilihan B:
NPC Utility-Based Decision
```

Dalam praktikum ini, mahasiswa dapat memilih salah satu pendekatan utama.

- **Pilihan A** menggunakan **Behavior Tree** sebagai struktur keputusan. Pendekatan ini cocok untuk perilaku NPC yang memiliki prioritas jelas, misalnya satu aksi harus dicek lebih dulu sebelum aksi lain.
- **Pilihan B** menggunakan **Utility-Based Decision**, di mana setiap aksi dinilai berdasarkan skor atau tingkat kepentingan, lalu aksi dengan nilai tertinggi dipilih.

Selain dua pilihan tersebut, praktikum juga dapat dilakukan secara gabungan:

```text
Behavior Tree sebagai struktur utama
Utility-Based Decision untuk memilih action combat
```

Kombinasi ini menunjukkan bahwa struktur keputusan dan penilaian aksi tidak selalu harus berdiri sendiri. **Behavior Tree** dapat mengatur alur dan prioritas, sementara `utility` dapat membantu memilih aksi yang paling sesuai dalam kondisi tertentu.

Perlu dipahami bahwa slide ini masih bersifat gambaran umum. Detail teknis, script, dan langkah implementasi akan dibahas pada modul praktikum terpisah. Jadi, pada tahap ini mahasiswa cukup memahami arah praktikum, pilihan arsitektur keputusan, dan hubungan antara struktur perilaku NPC dengan hasil gameplay yang diharapkan.

### Inti yang Harus Ditekankan

- Praktikum pertemuan 6 berfokus pada pembuatan NPC dengan sistem keputusan yang lebih terstruktur.
- **Behavior Tree** dan **Utility-Based Decision** adalah dua pilihan utama yang dapat dipilih atau digabungkan.
- Detail teknis, script, dan langkah implementasi tidak dibahas pada slide ini, melainkan pada modul praktikum terpisah.

### Transisi ke Slide Berikutnya

Setelah memahami gambaran umum, kita akan masuk ke rencana praktikum untuk **Pilihan A**, yaitu membangun NPC berbasis **Behavior Tree**.

---

## Slide 077 - Rencana Praktikum Pilihan A: Behavior Tree

### Narasi

Slide ini membahas **Rencana Praktikum Pilihan A**, yaitu implementasi NPC menggunakan **Behavior Tree**. Intuisi utamanya adalah: NPC tidak perlu memiliki satu logika keputusan yang rumit dalam satu fungsi besar. Perilaku NPC dapat dipecah menjadi beberapa **node** kecil yang disusun menjadi struktur pohon. Struktur ini memudahkan mahasiswa memahami bagaimana NPC memilih aksi berdasarkan kondisi game.

Target praktikum pada pilihan ini adalah membangun komponen dasar Behavior Tree, yaitu:

- membuat **node dasar**,
- membuat **selector**,
- membuat **sequence**,
- membuat **condition node**,
- membuat **action node**,
- membuat NPC dengan **prioritas aksi**.

Perilaku NPC yang ingin dibuat cukup sederhana, tetapi sudah menunjukkan pola keputusan yang umum dalam game. Perilaku tersebut adalah:

- `Flee` jika `HP` rendah,
- `Attack` jika `player` dekat,
- `Chase` jika `player` terlihat,
- `Patrol` jika tidak ada target.

Struktur pohon yang direncanakan adalah sebagai berikut:

```text
Root
 └── Selector
      ├── Flee Sequence
      ├── Attack Sequence
      ├── Chase Sequence
      └── Patrol Action
```

Pohon ini dibaca dari atas ke bawah. `Root` adalah titik awal evaluasi. Di bawahnya terdapat **Selector**, yang bertugas mencoba anak-anaknya secara berurutan. Selector akan memilih cabang pertama yang berhasil dieksekusi. Jika cabang pertama gagal, selector mencoba cabang berikutnya. Dengan cara ini, urutan anak pada selector menentukan **prioritas aksi** NPC.

Cabang pertama adalah `Flee Sequence`. Sequence ini biasanya berisi **condition node** yang memeriksa apakah `HP` NPC rendah. Jika kondisi benar, sequence akan menjalankan **action node** `Flee`. Jika kondisi tidak benar, sequence gagal dan selector lanjut ke cabang berikutnya.

Cabang kedua adalah `Attack Sequence`. Sequence ini memeriksa apakah `player` berada dekat dengan NPC. Jika jarak cukup dekat, NPC menjalankan aksi `Attack`. Jika tidak, sequence gagal dan selector melanjutkan ke cabang berikutnya.

Cabang ketiga adalah `Chase Sequence`. Sequence ini memeriksa apakah `player` terlihat oleh NPC. Jika `player` terlihat tetapi belum dekat, NPC menjalankan aksi `Chase`. Jika tidak terlihat, sequence gagal dan selector melanjutkan ke cabang terakhir.

Cabang terakhir adalah `Patrol Action`. Karena ini adalah aksi langsung, bukan sequence, maka jika semua kondisi sebelumnya gagal, NPC akan menjalankan `Patrol`. Artinya, `Patrol` menjadi perilaku default ketika NPC tidak sedang dalam kondisi bahaya, tidak dekat dengan `player`, dan tidak melihat `player`.

Alur eksekusi Behavior Tree dapat dipahami sebagai berikut:

1. `Root` memanggil `Selector`.
2. `Selector` mencoba `Flee Sequence`.
3. Jika `HP` rendah, `Flee` dijalankan.
4. Jika `HP` tidak rendah, `Selector` mencoba `Attack Sequence`.
5. Jika `player` dekat, `Attack` dijalankan.
6. Jika `player` tidak dekat, `Selector` mencoba `Chase Sequence`.
7. Jika `player` terlihat, `Chase` dijalankan.
8. Jika semua kondisi sebelumnya gagal, `Patrol` dijalankan.

Hal penting yang harus dipahami mahasiswa adalah perbedaan antara **selector** dan **sequence**.

- **Selector** memilih satu cabang yang berhasil.
- **Sequence** menjalankan beberapa langkah secara berurutan dan hanya berhasil jika semua langkah berhasil.
- **Condition node** memeriksa kondisi game, misalnya `HP` rendah, `player` dekat, atau `player` terlihat.
- **Action node** menjalankan perilaku NPC, misalnya `Flee`, `Attack`, `Chase`, atau `Patrol`.

Dengan struktur ini, mahasiswa dapat melihat bahwa Behavior Tree tidak hanya mengatur “apa yang dilakukan NPC”, tetapi juga “kapan NPC melakukan sesuatu berdasarkan prioritas”. Urutan cabang pada selector sangat menentukan perilaku akhir. Jika `Flee Sequence` diletakkan paling atas, NPC akan selalu memprioritaskan keselamatan ketika `HP` rendah. Jika `Attack Sequence` diletakkan setelah `Flee`, NPC akan menyerang hanya jika tidak sedang dalam kondisi harus kabur.

Sebelum lanjut ke implementasi, mahasiswa perlu memahami bahwa Behavior Tree adalah struktur keputusan yang dievaluasi secara berulang. Setiap kali game update, pohon dapat dievaluasi kembali berdasarkan kondisi terbaru. Dengan cara ini, NPC dapat merespons perubahan lingkungan secara lebih terstruktur dan mudah dikembangkan.

### Inti yang Harus Ditekankan

- **Behavior Tree** menyusun perilaku NPC menjadi struktur pohon yang mudah dibaca dan dikembangkan.
- **Selector** memilih cabang pertama yang berhasil, sehingga urutan cabang menentukan **prioritas aksi**.
- **Sequence** memastikan beberapa kondisi atau langkah dijalankan secara berurutan.
- **Condition node** memeriksa fakta game, sedangkan **action node** menjalankan perilaku NPC.
- Prioritas perilaku pada slide ini adalah: `Flee` > `Attack` > `Chase` > `Patrol`.

### Transisi ke Slide Berikutnya

Setelah memahami bagaimana Behavior Tree mengatur prioritas aksi NPC, slide berikutnya akan membahas pilihan lain, yaitu **Utility AI**, di mana NPC memilih aksi berdasarkan skor yang dihitung dari kondisi game.

---

## Slide 078 - Rencana Praktikum Pilihan B: Utility AI

### Narasi

Pada slide ini, kita membahas rencana praktikum pilihan kedua untuk membuat NPC yang mengambil keputusan berdasarkan **skor aksi**. Ide utamanya adalah setiap aksi tidak lagi dipilih hanya karena berada di urutan tertentu, tetapi karena memiliki nilai yang paling tinggi pada kondisi game saat itu.

Pendekatan ini cocok untuk perilaku NPC yang harus berubah secara dinamis. Misalnya, NPC bisa memilih `Flee` ketika `health` rendah, memilih `Attack` ketika jarak dekat, memilih `Chase` ketika player terlihat, atau memilih `Patrol` ketika situasi aman.

Aksi yang akan dievaluasi dalam praktikum ini adalah:

```text
Attack
Chase
Flee
Patrol
```

Target praktikumnya dapat dirangkum sebagai berikut:

1. Membuat daftar action yang bisa dipilih NPC.
2. Menghitung skor untuk setiap action.
3. Memilih action dengan skor tertinggi.
4. Menjalankan action yang terpilih.
5. Menampilkan skor untuk keperluan debug.

Faktor yang digunakan untuk menghitung skor adalah:

- `health`
- `distance`
- `visibility`
- `cooldown`

Faktor-faktor ini mewakili kondisi game yang memengaruhi keputusan NPC. `health` menunjukkan seberapa berbahaya kondisi NPC, `distance` menunjukkan seberapa dekat player, `visibility` menunjukkan apakah player terlihat, dan `cooldown` menunjukkan apakah aksi tertentu masih dalam jeda.

Intuisi praktisnya adalah NPC tidak lagi menggunakan aturan prioritas yang kaku. Setiap frame atau setiap tick keputusan, sistem akan menilai semua aksi yang tersedia. Aksi dengan skor tertinggi akan dijalankan. Dengan cara ini, perilaku NPC terasa lebih adaptif karena keputusan berubah mengikuti kondisi game.

Bagian penting yang harus dipahami mahasiswa adalah **skor harus bisa dijelaskan**. Jika skor `Flee` tinggi, seharusnya ada alasan yang jelas, misalnya `health` rendah. Jika skor `Attack` tinggi, seharusnya ada alasan seperti `distance` dekat dan `visibility` aktif. Menampilkan skor untuk debug membantu mahasiswa memahami mengapa NPC memilih aksi tertentu.

Sebelum lanjut ke scene praktikum, mahasiswa perlu memahami bahwa pendekatan ini berbeda dari perilaku berbasis prioritas node. Di sini, keputusan dihasilkan dari **perbandingan skor**, bukan dari urutan node yang dievaluasi sampai berhasil.

### Inti yang Harus Ditekankan

- **Utility-based decision** memilih action berdasarkan skor tertinggi, bukan urutan prioritas tetap.
- Skor action dipengaruhi oleh `health`, `distance`, `visibility`, dan `cooldown`.
- Action yang dijalankan harus sesuai dengan kondisi game secara dinamis.
- Menampilkan skor sangat penting untuk debug dan memahami alasan keputusan NPC.

### Transisi ke Slide Berikutnya

Selanjutnya, kita akan melihat rencana scene praktikum yang akan digunakan untuk menguji perilaku NPC, termasuk komponen scene dan perbedaan perilaku antara pendekatan prioritas node dengan pendekatan skor aksi.

---

## Slide 079 - Rencana Scene Praktikum

### Narasi

Slide ini membahas **rencana scene praktikum** untuk menguji perilaku NPC secara sederhana. Tujuannya bukan langsung membangun sistem keputusan yang rumit, tetapi menyiapkan lingkungan yang cukup jelas sehingga mahasiswa dapat mengamati kapan NPC berpindah dari satu perilaku ke perilaku lain.

Komponen scene yang direncanakan adalah:

```text
Ground
Player
NPC Enemy
Waypoint Patrol
Obstacle
Safe Point
Main Camera
Canvas Debug UI
```

Setiap komponen memiliki peran yang berbeda dalam praktikum.

- `Ground` menjadi batas area permainan dan tempat NPC bergerak.
- `Player` berfungsi sebagai objek yang memicu respons NPC, misalnya terlihat atau terlalu dekat.
- `NPC Enemy` adalah agen yang menjalankan perilaku berdasarkan kondisi lingkungan.
- `Waypoint Patrol` digunakan sebagai jalur atau titik-titik yang dikunjungi saat NPC dalam kondisi aman.
- `Obstacle` membantu menguji kemampuan NPC menghindari halangan atau memilih rute yang wajar.
- `Safe Point` menjadi tujuan saat NPC perlu menjauh, misalnya ketika health rendah.
- `Main Camera` digunakan untuk mengamati perilaku NPC secara langsung.
- `Canvas Debug UI` membantu menampilkan informasi internal, seperti perilaku aktif atau nilai keputusan, agar mahasiswa tidak hanya melihat hasil akhir tetapi juga proses pengambilan keputusan.

Perilaku NPC yang harus muncul dalam scene ini adalah:

- `patrol` ketika lingkungan aman,
- `chase` jika NPC melihat `Player`,
- `attack` jika jarak dengan `Player` sudah dekat,
- `flee` jika health NPC rendah.

Keempat perilaku ini menunjukkan bahwa NPC tidak hanya bergerak otomatis, tetapi harus **membaca kondisi** sebelum memilih aksi. Kondisi tersebut bisa berupa jarak, visibilitas, health, dan keberadaan titik aman. Dengan kata lain, scene praktikum ini menjadi tempat untuk menguji hubungan antara **input lingkungan** dan **output perilaku NPC**.

Perbedaan penting yang perlu dipahami adalah cara keputusan dibuat. **Behavior Tree** memilih perilaku berdasarkan **prioritas node**, sehingga alur keputusannya lebih terstruktur dan mudah diikuti. Sebaliknya, pendekatan berbasis skor memilih aksi berdasarkan **skor setiap aksi**, sehingga keputusan dapat berubah secara lebih dinamis mengikuti kondisi game.

Sebelum lanjut ke parameter, mahasiswa perlu memahami bahwa scene ini harus cukup sederhana untuk diamati, tetapi cukup lengkap untuk membedakan perilaku `patrol`, `chase`, `attack`, dan `flee`. Jika scene terlalu kosong, perilaku NPC sulit diuji. Jika scene terlalu rumit, mahasiswa akan sulit mengetahui penyebab perubahan perilaku.

### Inti yang Harus Ditekankan

- Scene praktikum harus menyediakan **lingkungan**, **objek pemicu**, **jalur perilaku**, **halangan**, **titik aman**, dan **tampilan debug**.
- NPC harus mampu berpindah perilaku berdasarkan kondisi: `patrol`, `chase`, `attack`, dan `flee`.
- **Behavior Tree** menekankan **prioritas node**, sedangkan pendekatan berbasis skor menekankan **perbandingan skor aksi**.
- `Canvas Debug UI` penting untuk mengamati keputusan NPC, bukan hanya hasil geraknya.

### Transisi ke Slide Berikutnya

Setelah struktur scene dipahami, langkah berikutnya adalah menentukan **parameter praktikum** yang mengatur jarak, kecepatan, health, cooldown, dan bobot keputusan agar perilaku NPC dapat diuji secara konsisten.

---

## Slide 080 - Parameter Praktikum

### Narasi

Pada slide ini, kita membahas **parameter praktikum** yang digunakan untuk mengatur perilaku NPC. Parameter ini penting karena perilaku NPC tidak hanya ditentukan oleh struktur Behavior Tree atau sistem utility, tetapi juga oleh nilai ambang, jarak, waktu, kecepatan, dan bobot keputusan.

```text
visionRange = 10
attackRange = 2
attackCooldown = 1.5
maxHealth = 100
lowHealthThreshold = 30
safeDistance = 12
patrolSpeed = 2
chaseSpeed = 4
fleeSpeed = 5
```

Parameter pertama ini menggambarkan kondisi dunia dan kemampuan NPC.

- `visionRange` menentukan seberapa jauh NPC dapat mendeteksi player.
- `attackRange` menentukan jarak maksimum untuk melakukan serangan.
- `attackCooldown` mengatur jeda antar serangan agar NPC tidak menyerang setiap frame.
- `maxHealth` menentukan total kesehatan NPC.
- `lowHealthThreshold` menentukan ambang kesehatan rendah yang memicu perilaku defensif.
- `safeDistance` menjadi acuan jarak aman saat NPC ingin menjauh dari ancaman.
- `patrolSpeed`, `chaseSpeed`, dan `fleeSpeed` menentukan kecepatan gerak pada mode patrol, chase, dan flee.

Dengan parameter ini, mahasiswa dapat memahami bahwa perilaku NPC bukan sekadar “melihat lalu menyerang”. Ada beberapa kondisi yang harus diperiksa: apakah player terlihat, apakah jarak sudah cukup dekat, apakah cooldown serangan sudah selesai, apakah health masih aman, dan apakah posisi NPC sudah cukup jauh dari ancaman.

```text
attackWeight
fleeWeight
chaseWeight
patrolBaseScore
decisionInterval
minimumActionDuration
```

Untuk pendekatan utility, parameter ini berfungsi sebagai bobot dan pengaturan waktu keputusan.

- `attackWeight` menentukan seberapa kuat aksi attack diprioritaskan.
- `fleeWeight` menentukan seberapa kuat aksi flee diprioritaskan.
- `chaseWeight` menentukan seberapa kuat aksi chase diprioritaskan.
- `patrolBaseScore` memberi nilai dasar untuk aksi patrol sebagai perilaku default.
- `decisionInterval` mengatur seberapa sering sistem mengevaluasi ulang pilihan aksi.
- `minimumActionDuration` mencegah NPC berpindah aksi terlalu cepat, sehingga gerakan lebih stabil.

Perbedaan utamanya adalah cara memilih. Behavior Tree biasanya memilih berdasarkan **prioritas node** dan kondisi boolean, sedangkan utility memilih berdasarkan **skor aksi** yang dapat berubah-ubah. Parameter pada slide ini menjadi alat tuning: mengubah satu nilai dapat membuat NPC lebih agresif, lebih waspada, lebih lambat, atau lebih mudah panik.

Sebelum lanjut ke eksperimen, mahasiswa perlu memahami bahwa parameter bukan sekadar angka acak. Setiap parameter harus memiliki makna desain: jarak, waktu, kesehatan, kecepatan, dan bobot. Jika parameter tidak konsisten, misalnya `attackRange` lebih besar dari `visionRange`, atau `fleeSpeed` lebih kecil dari `chaseSpeed`, perilaku NPC bisa menjadi tidak masuk akal.

### Inti yang Harus Ditekankan

- Parameter jarak dan waktu seperti `visionRange`, `attackRange`, `attackCooldown`, dan `safeDistance` menentukan kapan NPC dapat melihat, menyerang, dan merasa aman.
- Parameter kesehatan dan kecepatan seperti `maxHealth`, `lowHealthThreshold`, `patrolSpeed`, `chaseSpeed`, dan `fleeSpeed` mengatur respons NPC terhadap ancaman dan kondisi tubuh.
- Parameter utility seperti `attackWeight`, `fleeWeight`, `chaseWeight`, `patrolBaseScore`, `decisionInterval`, dan `minimumActionDuration` digunakan untuk menyeimbangkan skor aksi dan menjaga stabilitas keputusan.
- Tuning parameter adalah bagian penting dari desain perilaku NPC, bukan hanya penulisan logika node.

### Transisi ke Slide Berikutnya

Setelah parameter ini dipahami, langkah berikutnya adalah melakukan eksperimen: mengubah nilai, menghapus kondisi, menambahkan cooldown, membandingkan Behavior Tree dan utility, serta mengamati bagaimana perubahan kecil memengaruhi perilaku NPC.

---

## Slide 081 - Eksperimen Mahasiswa

### Narasi

Slide ini menempatkan mahasiswa sebagai perancang perilaku NPC. Setelah parameter sudah tersedia, langkah berikutnya adalah menguji bagaimana perubahan kecil pada struktur keputusan mengubah perilaku agen.

Intuisi pentingnya: **Behavior Tree** bekerja seperti hierarki prioritas yang deterministik, sedangkan **Utility** bekerja seperti penilaian skor yang lebih fleksibel. Pada BT, urutan child pada `selector` menentukan aksi mana yang dicoba lebih dulu. Pada Utility, nilai bobot menentukan seberapa kuat suatu aksi dipilih ketika kondisi tertentu aktif.

Eksperimen pertama sampai kelima berfokus pada struktur Behavior Tree. Mahasiswa dapat:

1. Mengubah prioritas `selector` untuk melihat aksi mana yang lebih dulu dieksekusi.
2. Menghapus satu `condition` dan mengamati apakah `sequence` gagal atau aksi berikutnya berubah.
3. Menambahkan `cooldown` decorator agar aksi tidak terus-menerus diulang.
4. Menambahkan `Search` action untuk memberi NPC kemampuan mencari target atau area.
5. Membandingkan hasil perilaku BT dengan hasil berbasis skor Utility.

Eksperimen keenam sampai kesembilan berfokus pada penyetelan Utility. Mahasiswa dapat mengubah `fleeWeight` dan `attackWeight`, lalu menampilkan skor utility di UI. Tujuannya bukan hanya melihat angka, tetapi memahami hubungan antara kondisi game, bobot, dan keputusan akhir.

Dua eksperimen terakhir mendorong mahasiswa membuat persona NPC yang berbeda. Enemy agresif dapat dibuat dengan bobot `attack` tinggi dan `flee` rendah. Enemy coward dapat dibuat dengan bobot `flee` tinggi dan `attack` rendah. Penggabungan BT dengan Utility juga penting: BT dapat mengatur alur utama, sementara Utility memilih variasi aksi di dalam cabang tertentu.

Sebelum masuk ke evaluasi, mahasiswa perlu memahami bahwa perubahan parameter tidak selalu menghasilkan perilaku yang sama. Prioritas BT, kondisi, cooldown, dan bobot Utility semuanya memengaruhi apakah NPC terasa reaktif, stabil, atau terlalu sering berganti aksi.

### Inti yang Harus Ditekankan

- **Behavior Tree** mengandalkan urutan prioritas dan kondisi, sehingga perubahan struktur langsung mengubah alur keputusan.
- **Utility** mengandalkan skor dan bobot, sehingga perubahan `attackWeight`, `fleeWeight`, atau kondisi akan mengubah aksi terpilih.
- Eksperimen harus dilakukan dengan mengamati hasil: apakah NPC memilih aksi yang masuk akal, stabil, dan sesuai desain.

### Transisi ke Slide Berikutnya

Setelah mahasiswa mencoba berbagai perubahan, langkah berikutnya adalah menilai apakah perilaku NPC sudah benar, stabil, dan mudah dibaca melalui evaluasi perilaku.

---

## Slide 082 - Evaluasi Perilaku NPC

### Narasi

Slide ini mengajak kita menilai apakah perilaku NPC yang sudah dibangun benar-benar masuk akal. Evaluasi tidak berhenti pada pertanyaan “apakah NPC bergerak?” atau “apakah program tidak error?”. Yang lebih penting adalah apakah NPC memilih aksi yang sesuai dengan kondisi dunia game, misalnya `health` rendah, `distance` dekat, `player terlihat`, atau `cooldown` siap.

Dalam praktik, evaluasi dapat dikelompokkan menjadi tiga hal:

- **Kebenaran keputusan**: apakah NPC memilih `attack`, `flee`, `search`, atau aksi lain yang paling sesuai?
- **Konsistensi mekanisme**: apakah struktur keputusan bekerja seperti yang direncanakan?
- **Kualitas pengalaman**: apakah perilaku NPC terasa natural dan mudah dipahami pemain?

Untuk **Behavior Tree**, mahasiswa perlu memeriksa urutan prioritas. Jika `Sequence` memiliki `condition` yang tidak terpenuhi, maka `Sequence` tersebut harus gagal dan tidak menjalankan `action` di dalamnya. Sebaliknya, `Selector` harus mencoba `child` berikutnya ketika `child` sebelumnya gagal. Jika prioritas salah, NPC bisa melakukan aksi yang tidak masuk akal, misalnya menyerang saat `health` sangat rendah, atau kabur saat kondisi masih aman.

Perlu juga diperhatikan status `Running`. Dalam beberapa desain Behavior Tree, `action` dapat mengembalikan `Running` untuk menunjukkan bahwa aksi masih berlangsung. Jika status ini tidak ditangani dengan benar, NPC bisa mengulang aksi, kehilangan progres, atau berpindah `state` secara tidak wajar.

Untuk **utility-based decision**, fokusnya adalah skor. Sistem harus memilih aksi dengan `score` tertinggi, tetapi skor tersebut harus sesuai dengan kondisi game. Jika `health` rendah dan jarak dekat, skor `flee` seharusnya lebih tinggi daripada `attack`. Jika skor tidak mencerminkan kondisi, NPC akan membuat keputusan yang terasa acak atau tidak dapat dijelaskan.

Masalah lain yang sering muncul adalah NPC terlalu sering berganti aksi. Hal ini bisa terjadi karena skor antar aksi terlalu berdekatan, bobot berubah terlalu cepat, atau tidak ada mekanisme penstabil seperti `cooldown`. Evaluasi ini membantu mahasiswa memahami bahwa keputusan yang benar secara teknis belum tentu terasa natural.

Terakhir, debug score dan status harus mudah dibaca. Jika mahasiswa dapat melihat nilai `score`, `state`, `condition`, dan alasan pemilihan aksi, maka proses debugging menjadi lebih cepat. Dengan kata lain, evaluasi perilaku NPC bukan hanya menilai hasil akhir, tetapi juga menilai apakah alasan di balik keputusan tersebut dapat dijelaskan.

### Inti yang Harus Ditekankan

- Evaluasi NPC menilai apakah keputusan sesuai kondisi, bukan hanya apakah program berjalan.
- Pada Behavior Tree, urutan prioritas, kegagalan `Sequence`, fallback `Selector`, dan penanganan `Running` menentukan perilaku.
- Pada utility-based, `score` tertinggi harus sesuai kondisi dan tidak menyebabkan pergantian aksi yang tidak natural.
- Debug score dan status penting untuk memahami alasan keputusan NPC.

### Transisi ke Slide Berikutnya

Setelah memahami cara menilai perilaku NPC, slide berikutnya akan membandingkan bagaimana kondisi yang sama dapat menghasilkan keputusan pada FSM, Behavior Tree, dan utility-based.

---

## Slide 083 - Studi Kasus Perbandingan

### Narasi

Slide ini menggunakan satu **kondisi game** yang sama untuk membandingkan cara **FSM**, **Behavior Tree**, dan **Utility** mengambil keputusan. Intuisi pentingnya adalah: hasil akhir bisa sama, tetapi alasan teknis di balik keputusan tersebut berbeda. Mahasiswa perlu melihat bahwa NPC tidak hanya “tahu” harus `Flee`, tetapi ada mekanisme yang memvalidasi kondisi, prioritas, atau skor.

Kondisi yang diberikan adalah:

```text
Health enemy = 20%
Player terlihat = Ya
Distance to player = dekat
Attack cooldown = ready
```

Kondisi ini sengaja dibuat ambigu secara desain: musuh masih bisa menyerang karena `Attack cooldown = ready` dan jarak dekat, tetapi `Health enemy = 20%` membuat risiko bertahan hidup lebih besar. Dari sinilah kita bisa melihat bagaimana setiap teknik menimbang kondisi tersebut.

Pada **FSM**, keputusan berasal dari aturan transisi yang eksplisit:

```text
Jika HP rendah → Flee
```

Artinya, jika `state` saat ini memungkinkan transisi dan kondisi `HP rendah` terpenuhi, NPC berpindah ke `state` `Flee`. Pendekatan ini sangat mudah dipahami dan mudah di-debug, karena alurnya berupa aturan `if-then` yang jelas. Namun, kekuatannya terbatas ketika banyak kondisi saling bersaing atau prioritas berubah-ubah.

Pada **Behavior Tree**, keputusan muncul dari struktur pohon dan urutan prioritas:

```text
Flee Sequence berada paling kiri
→ Flee dijalankan
```

Node `Flee Sequence` biasanya memeriksa beberapa `condition`, misalnya HP rendah, player terlihat, dan jarak dekat. Jika semua `condition` terpenuhi, `sequence` menghasilkan `Success`, lalu `action` `Flee` dijalankan. Posisi paling kiri menunjukkan bahwa `Flee` memiliki prioritas lebih tinggi daripada aksi lain seperti `Attack`.

Pada **Utility**, keputusan dihitung berdasarkan skor:

```text
Flee score = 0.90
Attack score = 0.75
→ Flee dipilih
```

Di sini tidak ada aturan tunggal yang langsung memaksa NPC `Flee`. Sebaliknya, setiap aksi diberi nilai berdasarkan kondisi game. Karena `Flee` memiliki skor tertinggi, NPC memilih aksi tersebut. Pendekatan ini lebih fleksibel untuk perilaku yang halus, karena skor dapat berubah secara bertahap mengikuti kondisi.

Perbandingan utamanya adalah:

- **FSM** berpikir dalam **state transition**: kondisi tertentu memicu perpindahan `state`.
- **Behavior Tree** berpikir dalam **prioritas node**: `child` yang lebih penting dievaluasi lebih dulu.
- **Utility** berpikir dalam **skor tertinggi**: semua aksi dinilai, lalu yang paling tinggi dipilih.

Dengan kata lain, ketiganya bisa menghasilkan keputusan `Flee` yang sama, tetapi cara memodelkan pengetahuan, prioritas, dan evaluasi kondisi di dalamnya berbeda. Mahasiswa perlu memahami hal ini sebelum memilih teknik untuk NPC yang lebih kompleks.

### Inti yang Harus Ditekankan

- Keputusan yang sama bisa dihasilkan oleh **FSM**, **Behavior Tree**, dan **Utility**, tetapi logika internalnya berbeda.
- **FSM** cocok untuk aturan transisi yang jelas, **Behavior Tree** untuk prioritas perilaku yang modular, dan **Utility** untuk penilaian skor yang lebih fleksibel.
- Kondisi seperti `Health enemy = 20%`, `Player terlihat = Ya`, dan `Distance to player = dekat` menjadi input penting yang menentukan apakah `Flee` lebih rasional daripada `Attack`.

### Transisi ke Slide Berikutnya

Setelah melihat bahwa perilaku yang sama dapat muncul dari struktur keputusan yang berbeda, kita akan merangkum kembali cara kerja **Behavior Tree** sebagai salah satu teknik utama untuk membangun perilaku NPC yang terstruktur dan mudah dikembangkan.

---

## Slide 084 - Ringkasan Behavior Tree

### Narasi

Behavior Tree dapat dipahami sebagai cara menyusun perilaku NPC seperti **pohon keputusan**. Intuisinya, sistem tidak langsung memilih satu aksi dari banyak kemungkinan, tetapi memeriksa cabang-cabang secara terstruktur. Cabang yang lebih dekat ke `root` biasanya mewakili prioritas yang lebih penting, sehingga perilaku seperti bertahan, menyerang, atau kabur dapat diatur tanpa membuat logika bercabang yang sulit dibaca.

Struktur utamanya terdiri dari beberapa jenis node:

- `root` menjadi titik awal eksekusi.
- `selector` mencoba anak-anaknya sampai salah satu berhasil, sehingga cocok untuk memilih alternatif.
- `sequence` menjalankan anak secara berurutan dan berhenti jika ada yang gagal, sehingga cocok untuk syarat bertahap.
- `decorator` memodifikasi hasil atau perilaku satu anak, misalnya mengulang, membalik, atau membatasi eksekusi.
- `leaf` berisi `condition` atau `action` yang benar-benar diperiksa atau dijalankan.

Setiap node dapat menghasilkan status `Success`, `Failure`, atau `Running`. Status `Running` penting karena beberapa perilaku tidak selesai dalam satu frame, misalnya bergerak, menunggu, atau menjalankan animasi. Karena perilaku disimpan dalam node yang dapat disusun ulang, Behavior Tree cocok untuk **NPC kompleks**, **perilaku modular**, dan **prioritas aksi yang jelas**.

### Inti yang Harus Ditekankan

- Behavior Tree adalah struktur pohon yang dimulai dari `root` dan dievaluasi melalui node-node di bawahnya.
- `selector` memilih alternatif, `sequence` menjalankan urutan, `decorator` memodifikasi child, dan `leaf` berisi `condition` atau `action`.
- Hasil evaluasi node dapat berupa `Success`, `Failure`, atau `Running`, sehingga perilaku dapat selesai, gagal, atau berjalan bertahap.
- Behavior Tree sangat berguna ketika perilaku NPC perlu dibuat modular, mudah dibaca, dan memiliki prioritas yang jelas.

### Transisi ke Slide Berikutnya

Setelah memahami Behavior Tree sebagai struktur pohon yang memilih perilaku berdasarkan prioritas dan kondisi, pembahasan berikutnya akan beralih ke pendekatan Utility-Based, yang menilai beberapa aksi berdasarkan skor kepentingan sebelum memilih satu aksi terbaik.

---

## Slide 085 - Ringkasan Utility-Based AI

### Narasi

Slide ini merangkum **utility-based decision making** sebagai cara NPC memilih tindakan berdasarkan **skor kepentingan**, bukan hanya kondisi benar/salah. Dalam pendekatan ini, setiap kandidat aksi diberi nilai berdasarkan faktor situasi, misalnya `health`, `distance`, `visibility`, atau ancaman. Semakin tinggi skor suatu aksi, semakin relevan aksi tersebut untuk dieksekusi pada kondisi saat itu.

Alur dasarnya dapat dilihat pada diagram berikut:

```text
Action Score
    ↓
Best Action
    ↓
Execute
```

Proses dimulai dari **`Action Score`**, yaitu tahap menghitung nilai setiap aksi yang tersedia. Setelah semua skor dihitung, sistem memilih **`Best Action`**, yaitu aksi dengan skor tertinggi. Aksi terpilih kemudian masuk ke tahap **`Execute`**, sehingga NPC melakukan perilaku yang paling sesuai dengan keadaan lingkungan.

Kelebihan utama pendekatan ini adalah kemampuannya menghasilkan perilaku yang **adaptif**. Ketika kondisi NPC berubah, misalnya `health` menurun atau musuh terlihat, skor aksi dapat berubah secara dinamis. Karena itu, pendekatan ini cocok untuk NPC yang memiliki banyak pilihan tindakan dan membutuhkan keputusan yang lebih halus dibanding struktur perilaku yang kaku.

Sebelum lanjut, mahasiswa perlu memahami bahwa utility-based decision making tidak menggantikan seluruh arsitektur perilaku. Ia paling berguna untuk memilih **aksi prioritas** di antara beberapa opsi, terutama pada situasi combat, eksplorasi, atau respons terhadap lingkungan.

### Inti yang Harus Ditekankan

- **Utility-based decision making** memilih aksi berdasarkan **skor tertinggi**, bukan hanya kondisi `true`/`false`.
- Skor dapat dipengaruhi oleh faktor seperti `health`, `distance`, dan `visibility`.
- Alur utamanya adalah menghitung `Action Score`, memilih `Best Action`, lalu menjalankan `Execute`.
- Pendekatan ini menghasilkan perilaku NPC yang lebih **adaptif** dan cocok untuk banyak pilihan aksi.

### Transisi ke Slide Berikutnya

Selanjutnya, kita akan membandingkan FSM, Behavior Tree, dan utility-based decision making secara akhir, serta melihat bagaimana ketiganya dapat digabungkan dalam proyek game nyata.

---

## Slide 086 - Perbandingan Akhir

### Narasi

Slide ini menutup pembahasan dengan membandingkan tiga pendekatan pengambilan keputusan untuk NPC: **FSM**, **Behavior Tree**, dan **utility-based**. Tujuannya bukan memilih satu teknik yang paling unggul, tetapi memahami kapan masing-masing paling sesuai.

```text
FSM
    cocok untuk state sederhana

Behavior Tree
    cocok untuk struktur perilaku modular

Utility
    cocok untuk memilih aksi berdasarkan skor
```

Secara intuitif, **FSM** paling mudah dipahami ketika perilaku NPC dapat dibagi menjadi beberapa mode besar yang jelas, misalnya `idle`, `patrol`, `chase`, dan `attack`. Kelemahannya muncul ketika jumlah state dan transisi bertambah, karena struktur bisa menjadi sulit dibaca dan sulit dikembangkan.

**Behavior Tree** lebih cocok ketika perilaku perlu disusun secara modular. Node di dalamnya dapat disusun ulang, diuji, dan digabungkan kembali tanpa mengubah seluruh logika. Dengan pendekatan ini, satu NPC dapat memiliki perilaku yang lebih rapi dan lebih mudah dipelihara.

**Utility** berguna ketika NPC harus memilih aksi berdasarkan beberapa faktor yang bernilai kontinu, seperti jarak, kesehatan, visibilitas, atau ancaman. Alih-alih memilih satu state secara tegas, sistem menghitung skor setiap aksi dan memilih yang paling relevan pada saat itu.

Dalam proyek game nyata, ketiga pendekatan ini sering digabung.

```text
FSM untuk mode besar
Behavior Tree untuk perilaku NPC
Utility untuk memilih aksi combat
```

Pola ini memberi struktur: **FSM** menjaga alur utama, **Behavior Tree** mengatur perilaku detail, dan **utility** membantu memilih aksi yang paling masuk akal dalam situasi `combat`. Mahasiswa perlu memahami bahwa desain perilaku NPC bukan soal satu teknik tunggal, tetapi pemilihan dan penggabungan teknik yang sesuai dengan kebutuhan game.

### Inti yang Harus Ditekankan

- **FSM** paling cocok untuk perilaku dengan state sederhana dan transisi yang jelas.
- **Behavior Tree** lebih kuat untuk struktur perilaku yang modular, rapi, dan mudah dikembangkan.
- **Utility** cocok untuk memilih aksi berdasarkan skor dari beberapa faktor situasi.
- Dalam implementasi nyata, ketiga pendekatan sering digabung, bukan saling menggantikan.

### Transisi ke Slide Berikutnya

Setelah memahami perbandingan ini, kita akan masuk ke pertanyaan diskusi untuk menguji pemahaman tentang struktur Behavior Tree, fungsi node, blackboard, serta pemilihan dan penggabungan teknik perilaku NPC.

---

## Slide 087 - Pertanyaan Diskusi

### Narasi

Slide ini berfungsi sebagai **cek pemahaman** sebelum mahasiswa masuk ke latihan perancangan. Sepuluh pertanyaan ini tidak perlu dijawab satu per satu secara hafalan, tetapi digunakan untuk membandingkan **Behavior Tree** dan **utility-based decision making** secara langsung.

Fokus diskusi dapat dikelompokkan menjadi tiga bagian:

- **Struktur Behavior Tree**: mengapa BT lebih modular, perbedaan `selector` dan `sequence`, peran status `Running`, fungsi `decorator`, dan peran `blackboard`.
- **Utility-based decision making**: mengapa skor perlu `normalisasi`, kapan utility lebih cocok, mengapa NPC bisa berganti aksi terlalu cepat, dan bagaimana membuat enemy lebih agresif.
- **Kombinasi teknik**: bagaimana Behavior Tree dan utility dapat dipakai bersama dalam satu sistem perilaku NPC.

Dalam diskusi, arahkan mahasiswa untuk memberi contoh konkret. Misalnya, `selector` berguna ketika NPC harus memilih satu perilaku yang valid, sedangkan `sequence` berguna ketika beberapa kondisi harus terpenuhi sebelum aksi dijalankan. Untuk utility, tekankan bahwa skor harus berasal dari kondisi game seperti jarak, HP, atau keberadaan target, lalu dinormalisasi agar bisa dibandingkan secara adil. Untuk membuat enemy lebih agresif, mahasiswa dapat menaikkan bobot skor menyerang ketika jarak dekat atau target terlihat.

### Inti yang Harus Ditekankan

- **Behavior Tree** lebih modular karena perilaku dapat dipecah menjadi node yang bisa dipakai ulang, sedangkan FSM sederhana sering bertambah transisi saat perilaku bertambah kompleks.
- `selector` mencoba anak hingga satu berhasil; `sequence` menjalankan anak berurutan hingga ada yang gagal.
- Status `Running` penting untuk action yang tidak selesai dalam satu tick, seperti bergerak, mengejar, atau menyerang.
- `decorator` mengubah atau membatasi hasil anak, misalnya mengulang, membalik, atau membatasi eksekusi.
- `blackboard` menjadi tempat data bersama agar node dapat membaca kondisi NPC dan lingkungan tanpa coupling yang kaku.
- Utility membutuhkan `normalisasi` agar skor dari sumber berbeda, seperti jarak dan HP, berada dalam rentang yang bisa dibandingkan.
- Utility cocok untuk keputusan yang halus dan berbasis prioritas, sedangkan Behavior Tree cocok untuk struktur perilaku yang jelas dan mudah diuji.
- Kombinasi yang umum: Behavior Tree mengatur alur besar, sementara utility memilih aksi di dalam cabang tertentu.

### Transisi ke Slide Berikutnya

Setelah pertanyaan ini terjawab, kita lanjut ke latihan konsep: merancang Behavior Tree untuk NPC guard yang memiliki perilaku kabur, menyerang, mengejar, mencari, dan patroli.

---

## Slide 088 - Latihan Konsep

### Narasi

Slide ini meminta mahasiswa merancang **Behavior Tree** untuk NPC guard. Skenarionya sederhana, tetapi cukup lengkap untuk melatih cara memecah perilaku NPC menjadi node-node yang terstruktur.

```text
NPC guard menjaga area.
Jika HP rendah, NPC kabur.
Jika melihat player dan player dekat, NPC menyerang.
Jika melihat player tetapi jauh, NPC mengejar.
Jika kehilangan player, NPC mencari posisi terakhir.
Jika tidak ada target, NPC patroli.
```

Intuisi praktisnya: **Behavior Tree** bekerja seperti daftar keputusan yang dievaluasi dari atas ke bawah. Node yang lebih penting biasanya diletakkan lebih dulu. Untuk guard, prioritas tertinggi adalah keselamatan diri, yaitu **flee** ketika HP rendah. Setelah itu baru interaksi dengan player: **attack** jika dekat, **chase** jika jauh, **search** jika target hilang, dan **patrol** sebagai perilaku default.

Struktur utama sebaiknya menggunakan **Selector** sebagai akar. Selector mengevaluasi anak-anaknya secara berurutan dan berhenti begitu ada anak yang menghasilkan `Success`. Jika semua anak gagal, selector juga gagal. Dengan kata lain, selector menjawab pertanyaan: “perilaku mana yang paling layak dijalankan sekarang?”

Urutan anak selector dapat dirancang sebagai berikut:

1. `Flee` jika HP rendah.
2. `Attack` jika melihat player dan jarak dekat.
3. `Chase` jika melihat player dan jarak jauh.
4. `Search` jika player tidak terlihat tetapi ada posisi terakhir.
5. `Patrol` jika tidak ada target.

Setiap perilaku tersebut sebaiknya dibungkus **Sequence**. Sequence mengevaluasi anak-anaknya secara berurutan dan hanya berhasil jika semua anak berhasil. Jika ada condition yang gagal, sequence berhenti dan tidak menjalankan action. Pola ini penting agar action tidak dijalankan secara asal.

Contoh dekomposisi per perilaku:

- `Flee`:
  - Condition: `HP < threshold`
  - Action: `Flee`
- `Attack`:
  - Condition: `PlayerVisible`
  - Condition: `Distance < attackRange`
  - Action: `AttackPlayer`
- `Chase`:
  - Condition: `PlayerVisible`
  - Condition: `Distance >= attackRange`
  - Action: `MoveToPlayer`
- `Search`:
  - Condition: `!PlayerVisible`
  - Condition: `LastKnownPosition != null`
  - Action: `MoveToLastKnownPosition`
- `Patrol`:
  - Condition: `NoTarget`
  - Action: `PatrolRoute`

**Condition node** berfungsi sebagai pengecekan fakta dari lingkungan atau data NPC. Contoh: `HP rendah`, `player terlihat`, `jarak dekat`, dan `posisi terakhir tersedia`. **Action node** adalah perilaku yang benar-benar dijalankan, seperti `Flee`, `Attack`, `Chase`, `Search`, dan `Patrol`. Pemisahan condition dan action membuat tree lebih modular: satu condition dapat dipakai di beberapa sequence, dan action dapat diganti tanpa merusak logika keputusan.

Decorator berguna untuk memodifikasi perilaku node tanpa menulis logic baru. Beberapa decorator yang mungkin diperlukan:

- `Inverter`: mengubah `Failure` menjadi `Success`, atau sebaliknya.
- `Repeater`: menjalankan action beberapa kali atau sampai kondisi tertentu.
- `Cooldown`: mencegah action tertentu dijalankan terlalu sering.
- `Timeout`: membatasi durasi action, misalnya `Search` tidak boleh berjalan selamanya.

Untuk latihan ini, decorator paling relevan adalah `Cooldown` atau `Timeout` pada `Search` dan `Patrol`, agar NPC tidak terjebak pada satu perilaku terlalu lama. Jika `Search` sudah menemukan player, tree akan otomatis kembali ke `Attack` atau `Chase` karena selector mengevaluasi dari atas.

Hal yang harus dipahami mahasiswa sebelum lanjut adalah: **prioritas perilaku menentukan karakter NPC**. Guard yang terlalu agresif bisa dibuat dengan menaikkan prioritas `Attack`, tetapi guard yang terlalu mudah kabur bisa dibuat dengan menaikkan prioritas `Flee`. Behavior Tree tidak menghitung skor; ia memilih perilaku berdasarkan urutan dan status node. Karena itu, desain tree harus mencerminkan aturan gameplay yang diinginkan.

### Inti yang Harus Ditekankan

- **Selector** adalah akar utama untuk memilih perilaku berdasarkan prioritas.
- **Sequence** digunakan untuk memastikan condition terpenuhi sebelum action dijalankan.
- **Condition node** mengecek fakta seperti HP, visibilitas player, jarak, dan posisi terakhir.
- **Action node** menjalankan perilaku seperti `Flee`, `Attack`, `Chase`, `Search`, dan `Patrol`.
- **Decorator** membantu membatasi durasi, mengulang, atau membalik status node.
- Prioritas node menentukan karakter NPC: keselamatan, interaksi, pencarian, lalu default.

### Transisi ke Slide Berikutnya

Setelah memahami cara merancang Behavior Tree berdasarkan prioritas perilaku, kita akan beralih ke pendekatan lain: **Utility AI**, di mana NPC memilih aksi berdasarkan skor yang dihitung dari berbagai faktor.

---

## Slide 089 - Latihan Utility AI

### Narasi

Pada latihan ini, kita beralih dari struktur keputusan yang kaku ke pendekatan **utility-based**. Jika Behavior Tree memilih jalur berdasarkan prioritas node, pendekatan utility memberi nilai pada setiap aksi yang tersedia. Intuisinya sederhana: NPC tidak hanya bertanya "boleh melakukan apa?", tetapi juga "aksi mana yang paling masuk akal pada kondisi sekarang?".

Aksi yang akan dinilai adalah `Attack`, `Chase`, `Flee`, `Take Cover`, dan `Patrol`. Faktor yang memengaruhi skor biasanya berasal dari state NPC dan lingkungan, misalnya `hp`, `distanceToPlayer`, `canSeePlayer`, `damageReceived`, `coverAvailable`, dan `cooldown`.

Untuk `Attack`, skor sebaiknya tinggi ketika target terlihat, jarak cukup dekat, dan NPC masih mampu bertempur. Contoh rumus sederhana:

```text
scoreAttack = baseAttack
            * canSeePlayer
            * closeness(distanceToPlayer)
            * healthFactor
```

`canSeePlayer` bernilai `1` jika target terlihat dan `0` jika tidak. `closeness` menghasilkan nilai lebih besar saat jarak pendek. `healthFactor` menurunkan skor `Attack` ketika `hp` NPC sudah rendah, sehingga NPC tidak terus menyerang dalam kondisi berbahaya.

Untuk `Flee`, skornya sebaiknya naik ketika `hp` rendah, ancaman tinggi, atau NPC baru menerima damage. Contoh rumusnya:

```text
scoreFlee = baseFlee
          * (1 - healthFactor)
          * threatLevel
          * escapeAvailable
```

`1 - healthFactor` membuat skor `Flee` meningkat saat `hp` turun. `threatLevel` bisa berasal dari jarak, senjata, atau jumlah musuh. `escapeAvailable` memastikan NPC tidak memilih kabur jika tidak ada jalur keluar yang masuk akal.

`default action` sebaiknya dipilih sebagai aksi aman dan rendah biaya ketika tidak ada aksi lain yang cukup kuat. Untuk enemy, `Patrol` adalah pilihan yang wajar. Jika semua skor di bawah ambang batas, atau terjadi tie yang tidak signifikan, NPC kembali ke `Patrol`.

Hal penting berikutnya adalah mencegah **action switching** terlalu cepat. Tanpa pengendalian, NPC bisa berganti aksi setiap frame karena skor berubah sedikit. Beberapa cara yang bisa digunakan:

1. Tambahkan **margin** atau **hysteresis**: aksi baru hanya dipilih jika skornya melebihi skor aksi saat ini dengan selisih tertentu.
2. Gunakan **cooldown** setelah pergantian aksi.
3. Batasi durasi minimum suatu aksi, misalnya `Attack` tidak boleh berhenti sebelum animasi selesai.
4. Tambahkan **stickiness** pada aksi berjalan, misalnya `scoreCurrent += stickiness`.

Secara praktis, alur keputusannya bisa dilihat seperti ini:

```text
for action in [Attack, Chase, Flee, Take Cover, Patrol]:
    score[action] = calculate(action, state)

best = argmax(score)

if best != currentAction:
    if score[best] > score[currentAction] + margin:
        currentAction = best
```

Bagian yang harus dipahami mahasiswa sebelum lanjut adalah bahwa utility-based decision tidak menggantikan seluruh sistem NPC. Ia tetap membutuhkan input state yang benar, seperti jarak, visibilitas, dan `hp`. Kelebihannya ada pada fleksibilitas: satu set aksi dapat menghasilkan perilaku yang berbeda-beda tergantung kondisi, tanpa harus menambah banyak state secara manual.

### Inti yang Harus Ditekankan

- **Utility scoring** menilai setiap aksi berdasarkan kondisi saat ini, bukan hanya memilih dari daftar prioritas tetap.
- Rumus skor harus mencerminkan tujuan perilaku: `Attack` tinggi saat target dekat dan terlihat, `Flee` tinggi saat `hp` rendah atau ancaman besar.
- `default action` penting untuk menjaga perilaku tetap stabil ketika tidak ada aksi yang cukup kuat.
- **Action switching** perlu dikendalikan dengan margin, cooldown, durasi minimum, atau stickiness agar NPC tidak berganti aksi terlalu cepat.

### Transisi ke Slide Berikutnya

Setelah memahami cara merancang skor dan memilih aksi, kita akan menutup pertemuan ini dengan gambaran materi berikutnya, yaitu integrasi sistem keputusan dengan komponen lain dalam game.

---

## Slide 090 - Penutup

### Narasi

Pada penutup pertemuan ini, kita merangkum dua pendekatan utama yang telah dibahas: **Behavior Tree** dan **Utility-Based AI**. Keduanya membantu kita membangun perilaku NPC yang lebih rapi, modular, dan mudah dikembangkan. Behavior Tree cocok ketika perilaku NPC dapat disusun sebagai struktur keputusan yang jelas, sedangkan Utility AI lebih kuat ketika banyak aksi harus dibandingkan berdasarkan skor kondisi saat itu.

Urutan pembelajaran yang disarankan dapat dirangkum menjadi empat tahap:

1. Review FSM dan masalah `state explosion`.
2. Penguasaan Behavior Tree: status `Success`, `Failure`, `Running`, `selector`, `sequence`, decorator, `blackboard`, dan contoh enemy BT.
3. Pengenalan Utility AI: `scoring action` dan perbandingan dengan FSM serta Behavior Tree.
4. Gambaran praktikum untuk integrasi perilaku NPC.

Materi berikutnya akan bergerak ke **Game AI Integration & Tactical AI**. Di sana, komponen-komponen yang sudah kita pelajari akan dirangkai menjadi satu sistem agent yang lebih utuh.

```text
Game AI Integration & Tactical AI
```

Fokusnya adalah menghubungkan beberapa lapisan perilaku, yaitu:

- `perception` untuk membaca lingkungan,
- `memory` untuk menyimpan informasi penting,
- `decision` untuk memilih aksi,
- `pathfinding` untuk menentukan rute,
- `movement` untuk menjalankan gerakan,
- `tactical positioning` dan `cover selection` untuk keputusan taktis,
- `koordinasi antar-agent` agar beberapa NPC dapat bekerja bersama.

Praktikum detail untuk materi ini akan dibuat terpisah:

```text
NPC dengan Behavior Tree / Utility-Based Decision
```

Sebelum lanjut, mahasiswa perlu memahami bahwa **Behavior Tree** membantu menyusun perilaku NPC secara modular, sedangkan **Utility AI** membantu NPC memilih aksi berdasarkan tingkat kepentingan pada kondisi saat itu. Poin ini menjadi dasar untuk integrasi berikutnya.

### Inti yang Harus Ditekankan

- **Behavior Tree** dan **Utility AI** bukan pengganti satu sama lain, tetapi dua cara berbeda untuk mengatur keputusan NPC.
- Behavior Tree menekankan struktur keputusan yang modular dan mudah dibaca, sedangkan Utility AI menekankan pemilihan aksi berdasarkan skor.
- Materi berikutnya akan menggabungkan `perception`, `memory`, `decision`, `pathfinding`, `movement`, dan `tactical positioning` menjadi satu sistem agent.
- Praktikum terpisah akan fokus pada implementasi NPC dengan **Behavior Tree** atau **Utility-Based Decision**.

### Transisi ke Slide Berikutnya

Karena pertemuan ini ditutup, langkah berikutnya adalah menyiapkan praktikum integrasi: membangun NPC yang tidak hanya memilih aksi, tetapi juga membaca lingkungan, mengingat kondisi, bergerak, dan mengambil posisi taktis secara konsisten.
