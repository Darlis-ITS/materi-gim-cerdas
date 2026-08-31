# Narasi Game Cerdas - Pertemuan 05

## Finite State Machine

Sumber: markdown/pert05.md

---

## Slide 001 - Cover

### Narasi

Selamat datang di **Pertemuan 5** mata kuliah **Game Cerdas**. Pada pertemuan ini, kita akan membahas **Finite State Machine** atau **FSM**, yaitu salah satu cara paling dasar dan penting untuk mengatur perilaku **NPC** dalam game. Inti dari topik ini adalah bagaimana sebuah karakter dapat memiliki beberapa mode perilaku, lalu berpindah dari satu mode ke mode lain secara terstruktur ketika kondisi tertentu terpenuhi.

Pokok bahasan yang akan kita pelajari meliputi **state**, **transition**, **condition**, **Hierarchical FSM**, desain perilaku NPC, serta implementasi konsep FSM pada **Unity**. Sebagai gambaran praktis, nanti kita akan melihat contoh perilaku musuh yang berpindah dari `Patrol` ke `Chase`, lalu ke `Attack`, dan dapat kembali ke `Flee` ketika kondisinya berubah.

Fokus utama pertemuan ini bukan sekadar membuat NPC bergerak, tetapi memahami bagaimana perilaku NPC dapat diatur secara rapi, mudah dibaca, dan mudah dikembangkan. Sebelum masuk ke detail teknis, mahasiswa perlu memahami bahwa FSM membantu kita memisahkan perilaku menjadi bagian-bagian yang jelas, sehingga sistem keputusan dalam game menjadi lebih stabil dan tidak acak.

### Inti yang Harus Ditekankan

- **FSM** adalah model perilaku berbasis **state**, **transition**, dan **condition**.
- FSM membantu NPC berpindah perilaku secara terstruktur, misalnya dari `Patrol` ke `Chase` atau `Attack`.
- Pertemuan ini menjadi dasar untuk memahami desain perilaku NPC dan implementasinya pada **Unity**.

### Transisi ke Slide Berikutnya

Sebelum masuk ke pembahasan FSM, kita akan meninjau kembali materi pertemuan sebelumnya agar alur pembelajaran tetap terhubung, terutama bagaimana NPC bergerak menuju target sebelum kita membahas bagaimana NPC memutuskan perilaku apa yang sedang aktif.

---

## Slide 002 - Review Pertemuan 4

### Narasi

Sebelum masuk ke **Finite State Machine**, kita perlu menyegarkan kembali materi **Pertemuan 4** tentang **Pathfinding & Navigation**. Pada pertemuan itu, fokus utamanya adalah bagaimana NPC menemukan dan mengikuti jalur di lingkungan game. Konsep yang dibahas meliputi `Graph`, `Waypoint`, `BFS`, `Dijkstra`, `A*`, `Heuristic`, `Navigation Mesh`, dan `Unity NavMesh`. Intinya, pathfinding menjawab pertanyaan: *dari posisi NPC ke target, jalur apa yang sebaiknya diambil?*

```text
NPC ingin menuju target
        ↓
Pathfinding mencari jalur
        ↓
Navigation mengikuti jalur
        ↓
Movement menggerakkan NPC
```

Alur ini penting karena menunjukkan bahwa **pathfinding** bukan satu-satunya bagian perilaku NPC. Ia bekerja setelah NPC sudah memiliki tujuan atau target. Dalam arsitektur game, pathfinding biasanya berada di tahap eksekusi: mencari rute, lalu `movement` menjalankan rute tersebut. Jadi, jika NPC belum tahu harus `Patrol`, `Chase`, `Attack`, atau `Flee`, pathfinding saja tidak cukup.

```text
Bagaimana NPC memutuskan perilaku apa yang sedang aktif?
```

Pertanyaan inilah yang menjadi pintu masuk **Pertemuan 5**. Kita akan beralih dari masalah *bagaimana NPC bergerak* ke masalah *bagaimana NPC memilih perilaku*. Pemahaman ini penting agar mahasiswa tidak menyamakan pathfinding dengan decision making. Pathfinding menentukan rute, sedangkan decision making menentukan perilaku aktif yang sedang dijalankan.

### Inti yang Harus Ditekankan

- **Pathfinding & Navigation** adalah dasar pergerakan NPC, bukan pengganti keputusan perilaku.
- Alur utama: **pathfinding** mencari jalur, **navigation** mengikuti jalur, **movement** menggerakkan NPC.
- Pertemuan 5 fokus pada **decision making**, yaitu bagaimana NPC memilih perilaku aktif seperti `Patrol`, `Chase`, `Attack`, atau `Flee`.

### Transisi ke Slide Berikutnya

Dengan dasar itu, kita lanjut ke posisi **FSM** dalam arsitektur game, khususnya pada bagian **Decision Making** yang menentukan perilaku aktif NPC.

---

## Slide 003 - Posisi FSM dalam Game AI

### Narasi

Slide ini menempatkan **Finite State Machine** atau **FSM** dalam arsitektur perilaku game secara keseluruhan.

Perilaku NPC biasanya tidak dihasilkan oleh satu komponen saja. Ada alur yang saling terhubung, mulai dari membaca kondisi, menyimpan informasi, mengambil keputusan, hingga menjalankan gerakan.

```text
Perception
    ↓
Memory
    ↓
Decision Making
    ↓
Pathfinding / Navigation
    ↓
Movement / Steering
    ↓
Action / Animation
```

Alur ini penting karena menunjukkan bahwa **Decision Making** berada di posisi yang menentukan.

Secara sederhana, alurnya dapat dipahami sebagai berikut:

1. **Perception** membaca kondisi lingkungan sekitar NPC.
2. **Memory** menyimpan informasi penting yang masih dibutuhkan.
3. **Decision Making** memilih perilaku apa yang harus aktif saat ini.
4. **Pathfinding / Navigation** mencari atau mengikuti jalur menuju tujuan.
5. **Movement / Steering** menggerakkan NPC di dunia game.
6. **Action / Animation** menampilkan hasil perilaku, misalnya animasi berjalan, mengejar, atau kabur.

**FSM** berada pada bagian **Decision Making**.

Peran FSM adalah menentukan **state** atau perilaku aktif NPC. Dalam contoh yang umum, state tersebut bisa berupa:

- `Patrol`
- `Chase`
- `Attack`
- `Flee`

Artinya, FSM tidak langsung menggerakkan NPC. FSM memutuskan perilaku apa yang sedang berjalan. Setelah itu, komponen lain seperti **Pathfinding / Navigation** dan **Movement / Steering** menjalankan keputusan tersebut.

Contohnya, jika FSM memilih state `Chase`, maka pathfinding dapat mencari jalur ke target, movement menggerakkan NPC, dan animation menampilkan perilaku mengejar. Jika FSM beralih ke `Flee`, maka target dan arah gerak dapat berubah, lalu komponen eksekusi menyesuaikan perilaku NPC.

Poin penting yang harus dipahami mahasiswa adalah: **FSM adalah pengambil keputusan perilaku**, bukan pengganti pathfinding atau movement.

Dengan posisi ini, mahasiswa dapat melihat bahwa perilaku NPC yang baik tidak hanya soal bergerak, tetapi juga soal bagaimana NPC memilih perilaku yang sesuai berdasarkan kondisi game.

### Inti yang Harus Ditekankan

- **FSM** berada pada lapisan **Decision Making** dalam arsitektur perilaku game.
- FSM memilih perilaku aktif NPC, misalnya `Patrol`, `Chase`, `Attack`, dan `Flee`.
- **Pathfinding / Navigation**, **Movement / Steering**, dan **Action / Animation** adalah komponen yang menjalankan keputusan dari FSM.
- Pemisahan ini membantu perilaku NPC menjadi lebih terstruktur dan lebih mudah dipahami.

### Transisi ke Slide Berikutnya

Setelah memahami posisi FSM dalam arsitektur perilaku game, langkah berikutnya adalah memahami mengapa NPC membutuhkan decision making, karena tanpa keputusan perilaku, NPC hanya akan bergerak tanpa konteks.

---

## Slide 004 - Mengapa NPC Perlu Decision Making?

### Narasi

Dalam game, NPC yang hanya bergerak terus-menerus belum bisa dianggap cerdas. **Gerakan** hanya menjawab pertanyaan *bagaimana* NPC berpindah, tetapi belum menjawab pertanyaan *mengapa* NPC melakukan gerakan itu. Karena itu, NPC membutuhkan **decision making**, yaitu proses memilih perilaku yang paling sesuai berdasarkan kondisi lingkungan.

Secara sederhana, decision making berada di antara **perception** dan **pathfinding/movement**. NPC terlebih dahulu mengamati sesuatu, misalnya posisi `player`, jarak, atau kondisi `HP`. Setelah itu, sistem perilaku memilih tindakan yang harus dijalankan. Keputusan tersebut baru diterjemahkan menjadi pergerakan, animasi, atau aksi lain.

Pertanyaan inti yang harus dijawab oleh NPC adalah:

```text
Kapan patroli?
Kapan mengejar?
Kapan menyerang?
Kapan kabur?
Kapan kembali?
```

Pertanyaan ini menunjukkan bahwa perilaku NPC tidak boleh statis. NPC harus bisa berpindah dari satu perilaku ke perilaku lain ketika kondisi berubah.

Sebagai contoh, kita dapat melihat aturan sederhana berikut:

```text
Jika player tidak terlihat
    → Patrol

Jika player terlihat
    → Chase

Jika player cukup dekat
    → Attack

Jika HP rendah
    → Flee
```

Aturan ini menggambarkan hubungan antara **condition** dan **action**. Kondisi `player tidak terlihat` memicu perilaku `Patrol`. Kondisi `player terlihat` memicu `Chase`. Kondisi jarak dekat memicu `Attack`. Kondisi `HP rendah` memicu `Flee`. Dalam konteks game, aturan seperti ini membuat NPC terasa lebih hidup karena perilakunya mengikuti situasi, bukan sekadar menjalankan gerakan yang sama berulang kali.

Tanpa decision making, NPC akan terlihat kaku, tidak responsif, dan mudah diprediksi. Misalnya, NPC tetap menyerang meskipun `HP` sudah rendah, atau tetap patroli meskipun `player` sudah berada di dekatnya. Hal ini mengurangi kualitas pengalaman bermain karena NPC tidak lagi terasa seperti entitas yang mampu bereaksi terhadap lingkungan.

Sebelum lanjut, mahasiswa perlu memahami bahwa **decision making** bukan pengganti pathfinding. Decision making memilih perilaku aktif, sedangkan pathfinding dan movement menjalankan perilaku tersebut. Dengan kata lain, decision making menentukan *apa yang dilakukan*, sementara movement menentukan *bagaimana melakukannya*.

### Inti yang Harus Ditekankan

- **Decision making** adalah proses NPC memilih perilaku berdasarkan kondisi lingkungan.
- Perilaku seperti `Patrol`, `Chase`, `Attack`, dan `Flee` harus dipilih secara dinamis, bukan dijalankan terus-menerus.
- Kondisi seperti `player terlihat`, jarak, dan `HP rendah` menjadi dasar pengambilan keputusan.
- Tanpa decision making, NPC akan kaku, tidak responsif, dan tidak realistis.
- Decision making bekerja bersama perception, pathfinding, movement, dan animation.

### Transisi ke Slide Berikutnya

Setelah memahami mengapa NPC membutuhkan decision making, kita lanjut ke capaian pembelajaran pertemuan ini, yaitu kemampuan menjelaskan konsep FSM, komponen state, transition, dan condition, serta merancang perilaku NPC yang lebih terstruktur.

---

## Slide 005 - Capaian Pembelajaran Pertemuan

### Narasi

Slide ini menjadi **peta pembelajaran** untuk pertemuan Finite State Machine. Tujuannya bukan sekadar menghafal istilah, tetapi membangun kemampuan praktis: mahasiswa dapat menjelaskan, membaca, dan merancang FSM untuk perilaku NPC.

Setelah pertemuan ini, mahasiswa diharapkan mampu:

1. Menjelaskan konsep **Finite State Machine** dan komponen dasarnya, yaitu `state`, `transition`, dan `condition`.
2. Membaca diagram FSM sederhana serta membedakan **state aktif** dengan `event` pemicu.
3. Mendesain FSM untuk perilaku NPC, terutama alur `Patrol → Chase → Attack → Flee`.
4. Menghubungkan FSM dengan sistem pendukung seperti `perception`, `pathfinding`, `movement`, dan `animation`.
5. Menjelaskan kelebihan, keterbatasan, dan konsep **hierarchical FSM** untuk perilaku yang lebih kompleks.

Perhatikan bahwa capaian ini bersifat berurutan: mahasiswa harus memahami struktur FSM sebelum menggunakannya untuk merancang Enemy AI. Dengan kata lain, pertemuan ini menyiapkan dasar berpikir sistematis tentang bagaimana NPC memilih perilaku berdasarkan kondisi lingkungan.

### Inti yang Harus Ditekankan

- **FSM** adalah model perilaku berbasis `state` aktif, `transition`, dan `condition`.
- Mahasiswa harus mampu membedakan **state aktif** dengan `event` pemicu, karena keduanya menentukan perubahan perilaku NPC.
- FSM menjadi dasar untuk merancang Enemy AI `Patrol → Chase → Attack → Flee` dan mengaitkannya dengan `perception`, `pathfinding`, `movement`, dan `animation`.

### Transisi ke Slide Berikutnya

Dengan capaian ini sebagai arah, kita mulai dari definisi paling dasar: apa itu **Finite State Machine** dan bagaimana satu `state` aktif menentukan perilaku NPC.

---

## Slide 006 - Apa Itu Finite State Machine?

### Narasi

Kita mulai dari konsep dasar **Finite State Machine** atau **FSM**. FSM adalah model komputasi yang terdiri dari sejumlah **state** terbatas. Dalam game, state dapat dipahami sebagai mode perilaku NPC, misalnya sedang patroli, mengejar, menyerang, atau melarikan diri.

Intuisi pentingnya adalah: pada satu waktu, sistem hanya berada pada **satu state aktif**. Artinya, NPC menjalankan satu set perilaku yang sesuai dengan state yang sedang aktif, bukan semua perilaku secara bersamaan.

Contoh sederhana:

```text
NPC State:
- Patrol
- Chase
- Attack
- Flee
```

Jika state aktif adalah:

```text
Chase
```

maka perilaku yang dijalankan adalah perilaku mengejar target. Dalam konteks game, ini berarti NPC akan menjalankan logika pengejaran, misalnya bergerak menuju target dan mempertahankan fokus pada pemain.

Dengan cara ini, FSM membantu kita memisahkan perilaku NPC menjadi bagian-bagian yang jelas. Setiap state memiliki tanggung jawab sendiri, sehingga perilaku NPC lebih mudah dipahami, diuji, dan dikembangkan.

Sebelum masuk ke detail teknis, mahasiswa perlu memahami bahwa FSM bukan sekadar daftar state. Yang paling penting adalah adanya **state aktif** yang menentukan perilaku sistem pada saat itu.

### Inti yang Harus Ditekankan

- **FSM** adalah model komputasi dengan sejumlah **state** terbatas.
- Pada satu waktu, hanya ada **satu state aktif**.
- State aktif menentukan perilaku NPC yang sedang dijalankan.
- Contoh state NPC: `Patrol`, `Chase`, `Attack`, `Flee`.
- Jika state aktif `Chase`, NPC menjalankan perilaku mengejar target.

### Transisi ke Slide Berikutnya

Setelah memahami apa itu FSM dan contoh state NPC-nya, kita akan masuk ke bagian berikutnya untuk membahas tiga komponen inti FSM, yaitu state, transition, dan condition.

---

## Slide 007 - Inti FSM

### Narasi

Setelah memahami bahwa **Finite State Machine** adalah model perilaku berbasis state, kita masuk ke inti strukturnya.

Inti FSM bukan sekadar daftar state, tetapi hubungan antara state, aturan perpindahan, dan syarat pemicunya.

```text
State
Transition
Condition
```

Tiga komponen ini menentukan bagaimana NPC mengambil keputusan.

- **State** adalah kondisi atau perilaku aktif yang sedang dijalankan.
- **Transition** adalah perpindahan dari satu state ke state lain.
- **Condition** adalah syarat atau event yang memicu perpindahan tersebut.

Tanpa `Condition`, `Transition` tidak punya alasan untuk terjadi.

Tanpa `Transition`, state hanya berdiri sendiri.

Tanpa `State`, tidak ada perilaku yang sedang aktif.

```text
State awal: Patrol

Condition:
Player terlihat

Transition:
Patrol → Chase
```

Pada contoh ini, NPC sedang berada di state `Patrol`.

Ketika condition `Player terlihat` terpenuhi, sistem mengevaluasi transition yang tersedia.

Jika transition `Patrol → Chase` valid, NPC berpindah ke state `Chase`.

Artinya, perilaku NPC berubah dari patroli menjadi mengejar.

Dalam implementasi game, `Condition` biasanya berupa hasil sensor, jarak, health, target, atau event tertentu.

Namun pada slide ini, kita cukup memahami bahwa `Condition` adalah pemicu logis, bukan detail deteksi.

Poin penting yang harus dipahami mahasiswa adalah bahwa FSM bekerja secara diskret.

Pada satu waktu, hanya ada satu state aktif.

Perubahan perilaku terjadi hanya ketika `Transition` dipicu oleh `Condition`.

Ini membuat perilaku NPC lebih mudah dibaca, diuji, dan dikontrol.

### Inti yang Harus Ditekankan

- **State** adalah perilaku aktif NPC pada satu waktu.
- **Transition** adalah jalur perpindahan antar state.
- **Condition** adalah syarat yang menentukan kapan transition terjadi.
- FSM mengubah perilaku NPC menjadi aturan yang jelas: state aktif, pemicu, dan state tujuan.

### Transisi ke Slide Berikutnya

Selanjutnya, kita akan melihat contoh FSM sangat sederhana dengan dua state, yaitu `Patrol` dan `Chase`, untuk memahami bagaimana transition bekerja dalam diagram.

---

## Slide 008 - Contoh FSM Sangat Sederhana

### Narasi

Pada slide ini kita melihat bentuk paling sederhana dari **Finite State Machine** untuk perilaku NPC. Diagramnya hanya memiliki dua state, yaitu `Patrol` dan `Chase`, serta dua transisi yang saling berlawanan.

```text
       Player terlihat
Patrol ─────────────→ Chase

       Player hilang
Chase ──────────────→ Patrol
```

Secara intuitif, NPC ini seperti penjaga yang sedang berpatroli. Selama `Player` tidak terlihat, NPC tetap berada di state `Patrol`. Begitu kondisi `Player terlihat` terpenuhi, NPC berpindah ke state `Chase`. Sebaliknya, jika NPC sedang mengejar tetapi `Player hilang`, NPC kembali ke `Patrol`.

Dalam implementasi game, kondisi tersebut biasanya dicek pada setiap update, misalnya melalui sensor, raycast, garis pandang, atau flag `playerVisible`. Namun pada slide ini kita tidak perlu masuk ke detail teknis sensor; yang penting adalah memahami bahwa **condition** adalah pemicu **transition**, dan **transition** mengubah **state** aktif.

Alur prosesnya dapat dibaca sebagai berikut:

1. NPC memulai pada state `Patrol`.
2. Sistem memeriksa kondisi `Player terlihat`.
3. Jika kondisi benar, terjadi transisi `Patrol → Chase`.
4. Pada state `Chase`, sistem memeriksa kondisi `Player hilang`.
5. Jika kondisi benar, terjadi transisi `Chase → Patrol`.

Contoh ini menunjukkan kekuatan utama FSM: perilaku NPC menjadi lebih **jelas**, **dapat diprediksi**, dan **mudah dikontrol**. Kita tidak perlu menuliskan logika ad hoc seperti "jika dekat maka kejar, jika jauh maka balik" secara tersebar. Cukup tentukan state apa saja, kondisi apa yang memicu perpindahan, dan perilaku apa yang dijalankan pada masing-masing state.

Sebelum lanjut, mahasiswa perlu memahami bahwa `Patrol` dan `Chase` bukan sekadar label; keduanya adalah mode perilaku aktif. State menentukan apa yang dilakukan NPC pada saat itu, sedangkan transisi menentukan kapan mode tersebut berubah.

### Inti yang Harus Ditekankan

- FSM sederhana ini memiliki dua state utama: `Patrol` dan `Chase`.
- Transisi `Patrol → Chase` dipicu oleh kondisi `Player terlihat`.
- Transisi `Chase → Patrol` dipicu oleh kondisi `Player hilang`.
- FSM membuat perilaku NPC lebih terstruktur karena state, condition, dan transition dipisahkan secara eksplisit.
- Pada implementasi nyata, kondisi biasanya dievaluasi secara berulang pada update loop, tetapi konsep dasarnya tetap sama.

### Transisi ke Slide Berikutnya

Setelah memahami contoh FSM dua state ini, kita akan masuk ke pembahasan yang lebih mendasar tentang apa sebenarnya **State** dalam FSM, yaitu perilaku atau mode aktif NPC yang menjadi dasar dari seluruh perilaku NPC.

---

## Slide 009 - State

### Narasi

Setelah contoh transisi sederhana, kita perlu memahami unit dasar **Finite State Machine**, yaitu **State**.

**State** adalah perilaku atau mode aktif NPC pada suatu waktu. Artinya, NPC tidak menjalankan semua perilaku sekaligus; ia berada dalam satu mode yang menentukan aksi yang boleh dilakukan.

Contoh state pada enemy:

```text
Idle
Patrol
Alert
Chase
Attack
Search
Flee
Dead
```

Daftar ini menunjukkan bahwa perilaku NPC dapat dipecah menjadi mode-mode yang jelas. Nama-nama state memberi gambaran mode, tetapi detail perilaku masing-masing akan kita lihat pada pembahasan berikutnya.

Setiap state biasanya memiliki tiga kelompok aksi:

- aksi ketika masuk state,
- aksi selama state aktif,
- aksi ketika keluar state.

Struktur umumnya sering ditulis sebagai:

```text
OnEnter()
OnUpdate()
OnExit()
```

Tiga fungsi ini memisahkan tanggung jawab perilaku: `OnEnter()` dijalankan sekali saat state diaktifkan, `OnUpdate()` dijalankan berulang selama state aktif, dan `OnExit()` dijalankan saat state ditinggalkan.

Urutan eksekusinya penting:

1. State lama memanggil `OnExit()`.
2. Transisi ke state baru terjadi.
3. State baru memanggil `OnEnter()`.
4. Pada frame berikutnya, state baru menjalankan `OnUpdate()` selama tidak ada transisi lain.

Secara sederhana:

```text
State lama: OnExit()
Transisi
State baru: OnEnter()
Loop frame: OnUpdate()
```

Pola ini membuat perilaku NPC lebih rapi karena kita tahu apa yang terjadi saat masuk state, apa yang dilakukan selama state aktif, dan apa yang harus dibersihkan saat keluar state. Sebelum lanjut, mahasiswa perlu memahami bahwa **state** bukan hanya label, melainkan unit perilaku dengan siklus hidup yang dapat dikontrol, diuji, dan dikembangkan secara terpisah.

### Inti yang Harus Ditekankan

- **State** adalah mode aktif NPC yang menentukan perilaku pada suatu waktu.
- Setiap state umumnya memiliki `OnEnter()`, `OnUpdate()`, dan `OnExit()`.
- `OnEnter()` untuk inisialisasi, `OnUpdate()` untuk perilaku berulang, dan `OnExit()` untuk pembersihan.
- Pemisahan state membuat perilaku NPC lebih terorganisasi, mudah dikontrol, dan lebih mudah dikembangkan.

### Transisi ke Slide Berikutnya

Selanjutnya, kita akan melihat contoh state dalam konteks NPC dan perilaku yang biasanya dikaitkan dengan masing-masing state.

---

## Slide 010 - State dalam Konteks NPC

### Narasi

Pada slide ini, kita melihat bagaimana konsep **state** diterjemahkan ke perilaku NPC yang konkret. State bukan sekadar label, melainkan unit perilaku yang memberi tahu NPC apa yang harus dilakukan pada situasi tertentu. Dalam konteks game, state membantu memisahkan logika agar NPC tidak menjadi satu blok kode yang sulit dikontrol.

Tabel pada slide menunjukkan beberapa state umum pada enemy. Secara konseptual, state-state ini dapat dikelompokkan menjadi beberapa kelompok perilaku:

- **Idle** dan **Dead** mewakili kondisi netral atau tidak aktif.
- **Patrol** dan **Search** berkaitan dengan pergerakan NPC di lingkungan.
- **Chase** dan **Flee** berkaitan dengan respons terhadap posisi player.
- **Attack** berkaitan dengan interaksi langsung dengan player.

Kelompok ini penting karena menunjukkan bahwa perilaku NPC biasanya tidak acak, tetapi mengikuti pola yang bisa dipetakan ke kondisi lingkungan. Misalnya, `Patrol` biasanya melibatkan pergerakan antar waypoint, `Chase` melibatkan pergerakan menuju player, dan `Flee` melibatkan pergerakan menjauh dari player. Di sini, state menjadi dasar bagi sistem pergerakan, steering, atau pathfinding yang mendukung perilaku NPC.

Perhatikan bahwa setiap state memiliki perilaku yang berbeda, tetapi tetap berada dalam satu struktur yang sama. Artinya, NPC tidak perlu menjalankan seluruh perilaku sekaligus; ia hanya menjalankan perilaku dari state yang sedang relevan. Inilah yang membuat perilaku NPC terasa lebih terorganisasi dan mudah dikembangkan.

Sebelum lanjut, mahasiswa perlu memahami bahwa state adalah cara untuk memodelkan keputusan sederhana pada NPC. State menentukan apa yang dilakukan NPC, tetapi belum menentukan kapan state berubah. Poin penting berikutnya adalah bagaimana satu state menjadi aktif dan bagaimana perubahan state terjadi.

### Inti yang Harus Ditekankan

- **State** adalah unit perilaku NPC yang membuat logika lebih terorganisasi.
- State seperti `Patrol`, `Chase`, `Flee`, dan `Search` menunjukkan perilaku berbasis posisi, lingkungan, dan respons terhadap player.
- State membantu memisahkan perilaku NPC menjadi bagian yang lebih mudah dikontrol, dikembangkan, dan diuji.
- State menentukan perilaku yang dijalankan, tetapi belum menjelaskan mekanisme perubahan state.

### Transisi ke Slide Berikutnya

Selanjutnya, kita akan melihat bahwa dalam FSM hanya satu state utama yang aktif pada satu waktu, sehingga perilaku NPC dapat dikontrol melalui nilai seperti `currentState`.

---

## Slide 011 - State Aktif

### Narasi

Pada slide ini kita fokus pada satu aturan penting dalam **Finite State Machine**: pada satu waktu, NPC hanya memiliki **satu state utama yang aktif**.

Artinya, meskipun NPC memiliki banyak perilaku seperti `Idle`, `Patrol`, `Chase`, `Attack`, `Flee`, dan `Search`, sistem tidak menjalankan semuanya secara bersamaan.

Contoh sederhana:

```text
currentState = Patrol
```

Variabel `currentState` menunjukkan bahwa NPC sedang berada dalam state `Patrol`.

Implikasinya:

- NPC menjalankan logika `Patrol`, misalnya bergerak antar waypoint.
- Logika `Chase` belum aktif.
- Logika `Attack` belum aktif.
- Logika `Flee` belum aktif.

Dengan cara ini, perilaku NPC menjadi lebih mudah dikendalikan karena pada setiap langkah hanya ada satu sumber perilaku utama.

Jika situasi berubah, misalnya pemain terlihat atau jaraknya dekat, nilai `currentState` dapat diganti:

```text
currentState = Chase
```

Setelah itu, perilaku NPC berubah dari patroli menjadi pengejaran.

Yang perlu dipahami mahasiswa adalah bahwa **state aktif** adalah kondisi saat ini dari NPC, bukan daftar perilaku yang berjalan paralel.

Pemahaman ini penting sebelum masuk ke mekanisme perpindahan state, karena tanpa aturan satu state aktif, NPC bisa berperilaku tidak konsisten.

### Inti yang Harus Ditekankan

- Dalam FSM, hanya **satu state utama** yang aktif pada satu waktu.
- Variabel seperti `currentState` menentukan logika perilaku NPC yang sedang dijalankan.
- State lain tetap tersedia, tetapi tidak aktif sampai `currentState` berubah.
- Konsep ini membuat perilaku NPC lebih terorganisasi dan mudah diprediksi.

### Transisi ke Slide Berikutnya

Setelah memahami bahwa NPC hanya memiliki satu state aktif, langkah berikutnya adalah memahami bagaimana state tersebut dapat berpindah dari satu kondisi ke kondisi lain melalui **transition**.

---

## Slide 012 - Transition

### Narasi

Pada slide sebelumnya kita melihat bahwa satu state aktif pada satu waktu. Sekarang kita masuk ke **Transition**, yaitu mekanisme yang memungkinkan NPC berpindah dari satu state ke state lain.

Tanpa transition, state hanya menjadi label statis. Dengan transition, perilaku NPC menjadi dinamis. Contoh sederhana:

```text
Patrol → Chase
```

Artinya NPC yang semula berada di state `Patrol` dapat berubah ke state `Chase` ketika situasi berubah.

Transition biasanya ditulis sebagai aturan sederhana. Misalnya:

```text
Jika player terlihat:
    Patrol → Chase
```

Dalam bentuk ini, ada tiga hal penting: state asal, state tujuan, dan alasan perpindahan. State asal adalah kondisi perilaku saat ini, state tujuan adalah perilaku baru, dan alasan perpindahan adalah pemicu yang membuat sistem memutuskan untuk berubah.

Perlu dipahami bahwa transition bukan sekadar mengganti nilai `currentState`. Transition adalah keputusan perilaku. Jika terlalu banyak transition yang saling tumpang tindih, NPC bisa berpindah state secara tidak konsisten, misalnya langsung dari `Patrol` ke `Attack` tanpa melewati `Chase`, atau kembali ke `Patrol` terlalu cepat.

Oleh karena itu, transition harus dirancang dengan jelas. Setiap perpindahan sebaiknya memiliki arah yang masuk akal, mudah diuji, dan tidak membuat perilaku NPC menjadi kacau. Pada tahap ini, mahasiswa cukup memahami bahwa transition adalah "jembatan" antar state. Detail syarat apa yang memicu perpindahan akan dibahas lebih lanjut pada slide berikutnya.

### Inti yang Harus Ditekankan

- **Transition** adalah perpindahan dari satu state ke state lain dalam FSM.
- Transition mengubah perilaku NPC dari state aktif saat ini ke state baru.
- Contoh dasar: `Patrol → Chase`.
- Transition harus dirancang jelas agar perpindahan state tidak kacau.
- Transition bukan hanya perubahan variabel, tetapi keputusan perilaku yang terstruktur.

### Transisi ke Slide Berikutnya

Setelah memahami bahwa transition adalah perpindahan antar state, langkah berikutnya adalah memahami apa yang memicu perpindahan tersebut. Pada slide berikutnya, kita akan membahas **Condition**, yaitu syarat yang menentukan apakah transition boleh terjadi.

---

## Slide 013 - Condition

### Narasi

**Condition** adalah syarat yang menentukan apakah sebuah **transition** dalam **Finite State Machine** boleh terjadi. Dalam konteks NPC, condition bukan sekadar nilai boolean, tetapi representasi dari situasi dunia game yang sedang diamati oleh agen.

Contoh sederhana:

```text
playerVisible == true
distanceToPlayer < attackRange
health < lowHealthThreshold
playerLost == true
```

Setiap baris tersebut menggambarkan kondisi yang bisa memicu perpindahan state. Misalnya, `playerVisible == true` dapat mengubah perilaku NPC dari `Patrol` ke `Chase`, sedangkan `distanceToPlayer < attackRange` dapat membuka peluang transisi menuju `Attack`.

Dalam implementasi Unity, condition biasanya dihitung dari sumber data yang tersedia di scene. Sumber-sumber tersebut meliputi:

- jarak antara NPC dan player,
- `Raycast` untuk memeriksa apakah ada objek menghalangi pandangan,
- `trigger collider` untuk mendeteksi player masuk ke area tertentu,
- nilai `health` atau status agen,
- `timer` untuk durasi perilaku tertentu,
- `line of sight` untuk memastikan NPC benar-benar dapat melihat player,
- `input event` dari player,
- `animation event` yang memicu perubahan perilaku saat animasi tertentu terjadi.

Intuisi pentingnya adalah: **transition** menentukan *kapan* state boleh berubah, sedangkan **condition** menentukan *apakah* perubahan itu sah. Tanpa condition yang jelas, NPC dapat berpindah state secara tidak konsisten, misalnya menyerang dari jarak jauh atau kehilangan player terlalu cepat.

Mahasiswa perlu memahami bahwa condition adalah jembatan antara logika perilaku dan data runtime. Nilai seperti `distanceToPlayer`, `playerVisible`, atau `health` bukan hanya variabel, tetapi sinyal yang membuat FSM mampu merespons lingkungan secara lebih hidup dan dapat diprediksi.

### Inti yang Harus Ditekankan

- **Condition** adalah syarat logis yang menentukan apakah **transition** dalam FSM terjadi.
- Condition biasanya berupa perbandingan nilai runtime, seperti jarak, visibilitas, kesehatan, timer, atau event.
- Dalam Unity, condition dapat berasal dari perhitungan jarak, `Raycast`, `trigger collider`, `health`, `timer`, `line of sight`, `input event`, atau `animation event`.
- Condition yang jelas membuat perilaku NPC lebih stabil, konsisten, dan mudah di-debug.

### Transisi ke Slide Berikutnya

Setelah memahami apa itu condition, kita akan melihat contoh paling sederhana: condition berbasis jarak, di mana NPC berpindah ke state `Attack` ketika player berada dalam `attackRange`.

---

## Slide 014 - Contoh Condition Berbasis Jarak

### Narasi

Pada slide ini kita melihat salah satu **condition** paling sederhana dalam **Finite State Machine** untuk perilaku NPC, yaitu **jarak**. Intuisinya sangat praktis: NPC tidak perlu melakukan perhitungan sensor yang rumit untuk memutuskan kapan menyerang. Cukup mengetahui apakah posisi player sudah masuk ke dalam radius serangan NPC atau belum.

Contoh implementasinya dapat dilihat pada potongan kode berikut:

```csharp
float distance =
    Vector3.Distance(transform.position, player.position);

if (distance <= attackRange)
{
    ChangeState(EnemyState.Attack);
}
```

Kode ini bekerja dengan langkah yang jelas:

1. `Vector3.Distance(transform.position, player.position)` menghitung jarak antara posisi NPC dan posisi player.
2. Hasilnya disimpan ke variabel `distance`.
3. Nilai `distance` dibandingkan dengan `attackRange`.
4. Jika jaraknya lebih kecil atau sama dengan `attackRange`, maka condition dianggap benar.
5. NPC kemudian melakukan transisi ke state `EnemyState.Attack` melalui `ChangeState(EnemyState.Attack)`.

Secara konsep, alurnya dapat dibaca seperti diagram berikut:

```text
distanceToPlayer <= attackRange
        ↓
Chase → Attack
```

Artinya, ketika NPC berada dalam state `Chase` dan player sudah cukup dekat, maka NPC berpindah ke state `Attack`. Ini menunjukkan bahwa **condition** bukan sekadar nilai boolean, tetapi juga pemicu perubahan perilaku NPC dalam FSM.

Jarak sering menjadi pilihan pertama karena murah secara komputasi, mudah diuji, dan mudah dipahami. Dalam Unity, posisi objek sudah tersedia, sehingga kita tidak perlu raycast, line of sight, atau sistem sensor tambahan hanya untuk menentukan kapan NPC boleh menyerang.

Sebelum lanjut, hal yang penting dipahami adalah bahwa condition berbasis jarak hanya menjawab pertanyaan **“apakah player cukup dekat?”**, bukan **“apakah NPC benar-benar melihat player?”**. Perbedaan ini akan menjadi fokus pembahasan berikutnya.

### Inti yang Harus Ditekankan

- **Condition berbasis jarak** adalah bentuk condition paling sederhana dalam FSM game.
- `Vector3.Distance` digunakan untuk menghitung jarak antara posisi NPC dan player.
- `distance <= attackRange` menjadi syarat transisi dari `Chase` ke `Attack`.
- Condition ini cocok untuk NPC melee yang menyerang berdasarkan radius, tetapi belum memperhitungkan visibilitas.

### Transisi ke Slide Berikutnya

Setelah memahami condition berbasis jarak, kita akan melangkah ke condition yang lebih realistis, yaitu **perception**, di mana NPC mengejar player hanya jika player benar-benar dapat dilihat.

---

## Slide 015 - Contoh Condition Berbasis Perception

### Narasi

Slide ini memperluas contoh condition dari sekadar jarak menjadi kondisi berbasis **perception**. Pada contoh sebelumnya, NPC beralih ke state `Attack` jika jarak player cukup dekat. Di sini, fokusnya adalah NPC beralih ke state `Chase` jika NPC dapat melihat player.

Intuisinya, jarak saja tidak selalu cukup. Player bisa berada dekat dengan NPC, tetapi tetap tidak terlihat karena berada di balik dinding, di luar sudut pandang, atau berada pada layer yang tidak dideteksi. Karena itu, kondisi `canSeePlayer` membuat perilaku NPC lebih masuk akal.

```csharp
if (canSeePlayer)
{
    ChangeState(EnemyState.Chase);
}
```

Variabel `canSeePlayer` adalah nilai boolean yang menyatakan hasil proses deteksi. Jika bernilai `true`, kondisi transisi terpenuhi dan FSM dapat berpindah ke state `Chase`. Fungsi `ChangeState` bertugas mengubah state aktif, sedangkan logika deteksi sebaiknya sudah disiapkan di bagian lain agar state tidak membebani perhitungan yang terlalu kompleks.

`canSeePlayer` dapat berasal dari beberapa sumber:

- **Jarak**: player harus berada dalam radius tertentu.
- **Field of view**: player harus berada di dalam sudut pandang NPC.
- **Raycast**: ada garis pandang bebas antara NPC dan player, sehingga dinding atau obstacle dapat memblokir deteksi.
- **Layer mask**: NPC hanya mendeteksi objek pada layer tertentu, misalnya `Player`.

Dalam implementasi sederhana, `canSeePlayer` cukup berupa `true` atau `false`. Namun secara konsep, nilai tersebut biasanya hasil gabungan beberapa pengecekan. Misalnya, player harus dekat, berada di dalam `field of view`, tidak terhalang oleh raycast, dan berada pada layer yang benar.

Hubungan penting dengan FSM adalah bahwa **perception** menjadi sumber condition untuk transisi state. State `Chase` tidak selalu aktif terus-menerus; ia dapat dipicu oleh perubahan kondisi. Jika `canSeePlayer` berubah menjadi `false`, NPC dapat kembali ke state lain seperti `Patrol`, tetapi detail transisi lengkapnya akan dibahas pada diagram FSM berikutnya.

### Inti yang Harus Ditekankan

- `canSeePlayer` adalah condition boolean yang memicu transisi ke state `Chase`.
- Deteksi player dapat berasal dari jarak, field of view, raycast, dan layer mask.
- Perception membuat FSM lebih realistis karena NPC bereaksi terhadap apa yang dapat dilihat, bukan hanya posisi player.
- `ChangeState` hanya mengeksekusi transisi; logika deteksi sebaiknya dipisahkan agar lebih rapi.

### Transisi ke Slide Berikutnya

Setelah memahami condition berbasis perception, kita akan melihat bagaimana kondisi-kondisi tersebut dirangkai dalam diagram FSM enemy sederhana, yaitu `Patrol`, `Chase`, dan `Attack`.

---

## Slide 016 - Diagram FSM Enemy Sederhana

### Narasi

Slide ini memperlihatkan **diagram FSM** untuk perilaku enemy yang sederhana. Diagram ini penting karena mengubah logika “jika kondisi ini, lakukan itu” menjadi struktur state yang lebih rapi dan mudah dibaca.

```text
                 player terlihat
        ┌─────────────────────────┐
        │                         ▼
     Patrol ───────────────────→ Chase
        ▲                         │
        │                         │ player dekat
        │                         ▼
        └────────────────────── Attack
            player hilang /
            selesai menyerang
```

Dalam diagram ini, setiap state mewakili **perilaku utama** enemy:

- `Patrol`: enemy berada dalam mode penjagaan atau pergerakan rutin.
- `Chase`: enemy mengejar player setelah player terdeteksi.
- `Attack`: enemy melakukan serangan ketika jarak sudah cukup dekat.

Arah panah menunjukkan **transisi state**. Label di atas panah adalah **condition** yang memicu perpindahan. Alur utamanya dapat dibaca sebagai berikut:

1. Enemy mulai dari state `Patrol`.
2. Jika `player terlihat`, enemy berpindah ke `Chase`.
3. Jika `player dekat`, enemy berpindah ke `Attack`.
4. Jika `player hilang` atau `selesai menyerang`, enemy kembali ke `Patrol`.

Intuisi praktisnya adalah: enemy tidak selalu melakukan semua hal sekaligus. Pada satu waktu, enemy berada di **satu state aktif**, lalu menunggu condition tertentu untuk berpindah. Pola ini membuat perilaku NPC lebih mudah dikontrol, diuji, dan dikembangkan.

Hal yang harus dipahami sebelum lanjut adalah bahwa **state** dan **condition** adalah dua bagian inti dari FSM. State menentukan apa yang dilakukan enemy, sedangkan condition menentukan kapan enemy boleh berpindah. Pada slide berikutnya, struktur ini akan diperluas dengan state tambahan untuk kebutuhan praktikum.

### Inti yang Harus Ditekankan

- FSM memisahkan perilaku enemy ke dalam state yang jelas: `Patrol`, `Chase`, dan `Attack`.
- Transisi terjadi karena **condition** terpenuhi, misalnya `player terlihat`, `player dekat`, atau `player hilang`.
- Pada satu waktu, enemy berada di satu state aktif, bukan menjalankan semua perilaku secara bersamaan.

### Transisi ke Slide Berikutnya

Selanjutnya, kita akan melihat bagaimana diagram sederhana ini dikembangkan menjadi alur praktikum yang lebih lengkap, yaitu `Patrol → Chase → Attack → Flee`.

---

## Slide 017 - FSM untuk Enemy AI Praktikum

### Narasi

Pada slide ini kita masuk ke bentuk praktikum dari **Finite State Machine** untuk perilaku enemy. Fokusnya adalah alur perilaku sederhana yang mudah dipahami, mudah diuji, dan mudah divisualisasikan sebagai diagram state.

Alur yang akan digunakan dalam praktikum adalah:

```text
Patrol → Chase → Attack → Flee
```

Artinya, enemy tidak selalu melakukan satu perilaku yang sama. Perilakunya berubah tergantung kondisi di sekitarnya. Inilah inti dari **FSM**: sistem memiliki beberapa **state**, dan perpindahan antar state terjadi ketika **condition** tertentu terpenuhi.

Secara intuitif, enemy akan memulai perilaku dasarnya dengan `Patrol`. Jika kondisi tertentu terjadi, misalnya player terlihat, enemy berpindah ke `Chase`. Jika player sudah dekat, enemy masuk ke `Attack`. Jika HP enemy rendah, enemy dapat berpindah ke `Flee`.

Penjelasan singkatnya adalah sebagai berikut:

```text
Patrol:
Enemy berjalan antar waypoint.

Chase:
Enemy mengejar player.

Attack:
Enemy menyerang jika player dekat.

Flee:
Enemy kabur jika HP rendah.
```

Setiap state memiliki tanggung jawab yang berbeda. `Patrol` adalah perilaku dasar ketika enemy tidak sedang berinteraksi langsung dengan player. `Chase` adalah respons ketika player sudah terdeteksi. `Attack` adalah perilaku ofensif ketika jarak sudah cukup dekat. `Flee` adalah perilaku defensif ketika kondisi enemy sudah lemah.

Yang perlu dipahami sebelum masuk ke detail teknis adalah bahwa perilaku enemy tidak harus ditulis sebagai satu skrip panjang. Dengan FSM, perilaku dipecah menjadi state-state kecil yang jelas. Hal ini membuat sistem lebih mudah dibaca, lebih mudah di-debug, dan lebih mudah dikembangkan.

Detail implementasi teknis akan dibuat di modul praktikum terpisah. Pada bagian ini, mahasiswa cukup memahami alur perilaku, makna setiap state, dan bagaimana kondisi memicu perpindahan state.

### Inti yang Harus Ditekankan

- Praktikum menggunakan empat state utama: `Patrol`, `Chase`, `Attack`, dan `Flee`.
- Perpindahan state terjadi karena kondisi, misalnya player terlihat, player dekat, atau HP rendah.
- `Patrol` adalah perilaku dasar, `Chase` adalah respons terhadap player, `Attack` adalah perilaku ofensif, dan `Flee` adalah perilaku defensif.
- Detail implementasi teknis dibahas di modul praktikum terpisah, sehingga fokus slide ini adalah alur perilaku dan logika state.

### Transisi ke Slide Berikutnya

Selanjutnya kita akan membahas state pertama, yaitu `Patrol`, sebagai perilaku dasar enemy sebelum berpindah ke state lain.

---

## Slide 018 - State Patrol

### Narasi

Pada **Finite State Machine** untuk perilaku NPC, **Patrol** adalah salah satu **state** yang paling dasar. State ini menggambarkan kondisi ketika NPC tidak sedang mengejar atau kabur, tetapi menjalankan rutinitas berjalan di area tertentu.

Intuisi pentingnya adalah NPC tidak selalu harus diam. Dengan **Patrol**, lingkungan game terasa lebih hidup karena NPC memiliki aktivitas yang dapat diprediksi. Aktivitas ini juga menjadi kondisi awal sebelum NPC bereaksi terhadap `player`.

Contoh rute patrol dapat ditulis sebagai:

```text
Waypoint A → Waypoint B → Waypoint C → Waypoint A
```

Rute ini menunjukkan bahwa NPC bergerak dari satu **waypoint** ke waypoint berikutnya secara berurutan. Setelah sampai di waypoint terakhir, rute kembali ke waypoint pertama, sehingga perilaku berjalan dapat berulang terus-menerus.

Perilaku utama pada state `Patrol` adalah:

- NPC bergerak menuju **waypoint** saat ini.
- Jika NPC sudah sampai, sistem memilih waypoint berikutnya.
- Selama bergerak, NPC tetap memantau kondisi `player`.

Poin terakhir penting karena `Patrol` bukan state yang tertutup. NPC tetap mengevaluasi kondisi lingkungan meskipun sedang berjalan, sehingga state ini dapat berubah kapan pun kondisi transisi terpenuhi.

**Transition** umum dari `Patrol` adalah:

- `Patrol → Chase` jika `player` terlihat.
- `Patrol → Flee` jika `HP` rendah.

Artinya, `Patrol` menentukan dua hal penting: bagaimana NPC memilih target pergerakan, dan kondisi apa yang memicu perpindahan state. Sebelum lanjut, mahasiswa perlu memahami bahwa perilaku patrol adalah dasar sebelum detail struktur waypoint dibahas.

### Inti yang Harus Ditekankan

- `Patrol` adalah state berjalan mengikuti rute waypoint.
- NPC bergerak ke waypoint saat ini, lalu memilih waypoint berikutnya setelah sampai.
- `Patrol` tetap memantau `player` dan dapat beralih ke `Chase` atau `Flee`.

### Transisi ke Slide Berikutnya

Selanjutnya, kita akan melihat bagaimana waypoint disusun dan bagaimana rute patrol diterapkan pada struktur NPC.

---

## Slide 019 - Patrol dengan Waypoint

### Narasi

Pada slide ini kita memperdalam cara **Patrol** diwujudkan dalam scene. Jika sebelumnya **Patrol** dijelaskan sebagai state, maka sekarang kita melihat **data rute** yang dipakai NPC. Rute ini biasanya berupa titik-titik **waypoint** yang disusun membentuk loop.

```text
W1 ● ───── ● W2
 |          |
 |          |
W4 ● ───── ● W3
```

Diagram ini menunjukkan empat waypoint: `W1`, `W2`, `W3`, dan `W4`. Urutan pergerakannya adalah:

```text
W1 → W2 → W3 → W4 → W1
```

Artinya, NPC tidak memilih tujuan secara bebas. NPC cukup mengikuti urutan waypoint yang sudah ditentukan. Setelah sampai di `W4`, NPC kembali ke `W1` sehingga patroli menjadi berulang.

Dalam Unity, waypoint paling sederhana dibuat sebagai **Empty GameObject**. GameObject ini tidak perlu memiliki renderer atau collider; perannya hanya sebagai penanda posisi di scene. Setelah posisi waypoint diatur, waypoint disimpan dalam array:

```csharp
Transform[] patrolPoints;
```

Variabel `patrolPoints` menyimpan daftar `Transform` yang merepresentasikan posisi waypoint. Urutan elemen array sangat penting karena menentukan arah patroli. Jika array diisi `W1`, `W2`, `W3`, `W4`, maka NPC akan bergerak sesuai loop tersebut.

Secara perilaku, logika patrol berbasis waypoint biasanya berjalan seperti berikut:

1. NPC memilih waypoint awal, misalnya `patrolPoints[0]`.
2. NPC bergerak menuju posisi waypoint saat ini.
3. Jika NPC sudah cukup dekat dengan waypoint, indeks waypoint berikutnya dipilih.
4. Jika indeks melewati akhir array, indeks kembali ke `0`.

Dengan cara ini, **Patrol** menjadi state yang sederhana dan mudah dipahami. Mahasiswa perlu memahami bahwa waypoint adalah **data rute**, sedangkan keputusan untuk tetap patrol, mengejar, atau kabur tetap berada pada logika state.

Sebelum lanjut, hal penting yang harus dipahami adalah: urutan waypoint menentukan perilaku NPC, `Transform[]` adalah cara Unity menyimpan daftar posisi, dan patrol berbasis waypoint cocok untuk NPC dengan rute terbatas.

### Inti yang Harus Ditekankan

- **Waypoint** adalah titik posisi yang menjadi tujuan sementara NPC selama state **Patrol**.
- Urutan waypoint dalam `Transform[] patrolPoints;` menentukan rute patroli, misalnya `W1 → W2 → W3 → W4 → W1`.
- Dalam Unity, waypoint dapat dibuat sebagai **Empty GameObject** lalu disimpan sebagai array `Transform`.
- Patrol berbasis waypoint adalah implementasi praktis dari state **Patrol** sebelum NPC beralih ke state lain seperti **Chase** atau **Flee**.

### Transisi ke Slide Berikutnya

Setelah NPC tahu cara berpatroli mengikuti waypoint, langkah berikutnya adalah memahami apa yang terjadi ketika NPC melihat player. Pada slide berikutnya, kita akan membahas state **Chase**, yaitu perilaku NPC yang mengejar player dan memperbarui target secara terus-menerus.

---

## Slide 020 - State Chase

### Narasi

Pada slide ini kita membahas state `Chase` dalam **Finite State Machine**. State ini aktif ketika NPC mulai mengejar player. Intuisinya sederhana: NPC tidak lagi bergerak ke titik tetap, tetapi menjadikan posisi player sebagai target yang terus berubah.

Perilaku utama dalam state `Chase` adalah:

- menentukan posisi player sebagai target,
- bergerak menuju player,
- terus memperbarui posisi tujuan,
- memeriksa jarak serang.

Poin penting di sini adalah **posisi tujuan harus terus diperbarui**. Karena player bergerak, NPC tidak cukup hanya sekali mengambil posisi player. Jika target tidak diperbarui, NPC akan mengejar titik lama dan perilakunya menjadi tidak natural.

Dalam Unity, perilaku ini sering diimplementasikan dengan komponen `NavMeshAgent`. Pada pembaruan perilaku NPC, kita dapat memanggil:

```csharp
navAgent.SetDestination(player.position);
```

Fungsi ini memberi tahu sistem pathfinding untuk menghitung jalur menuju posisi player. Selain itu, untuk gerakan yang lebih halus, kita bisa memakai **steering Arrive** atau movement custom, terutama jika NPC perlu melambat saat mendekati player.

Setelah NPC cukup dekat, state `Chase` tidak terus berjalan tanpa batas. Ada **transition** yang menentukan kapan NPC berpindah state:

- `Chase → Attack` jika player masuk **attack range**.
- `Chase → Patrol/Search` jika player hilang.
- `Chase → Flee` jika HP rendah.

Transisi ini penting karena membuat perilaku NPC terasa reaktif. NPC tidak terjebak mengejar selamanya; ia bisa menyerang, mencari, atau mundur tergantung kondisi.

Sebelum lanjut, mahasiswa perlu memahami bahwa `Chase` adalah state pergerakan berbasis target dinamis. Yang harus diperhatikan adalah sumber target, cara memperbarui tujuan, dan kondisi transisi ke state lain.

### Inti yang Harus Ditekankan

- `Chase` adalah state NPC ketika mengejar player, bukan sekadar bergerak ke titik tetap.
- Posisi target harus terus diperbarui karena player bergerak.
- Implementasi umum memakai `NavMeshAgent.SetDestination(player.position)`, **steering Arrive**, atau movement custom.
- Transisi utama: ke `Attack` jika dekat, ke `Patrol/Search` jika player hilang, dan ke `Flee` jika HP rendah.

### Transisi ke Slide Berikutnya

Jika jarak NPC dan player sudah masuk **attack range**, state `Chase` akan berpindah ke `Attack`. Pada slide berikutnya, kita akan membahas bagaimana NPC berhenti, menghadap player, melakukan serangan, dan mengatur cooldown.

---

## Slide 021 - State Attack

### Narasi

**Attack** adalah state ketika NPC beralih dari mengejar menjadi menyerang. Dalam **Finite State Machine**, state `Attack` biasanya aktif ketika target masih terlihat dan jaraknya berada di dalam `attack range`.

Perilaku utama pada state `Attack` dapat dipahami sebagai berikut:

1. NPC berhenti atau mengurangi gerakan agar posisi dan animasi tetap stabil.
2. NPC menghadap player sebagai target serangan.
3. NPC memainkan animasi attack.
4. NPC mengurangi `health` player sesuai nilai `attack damage`.
5. NPC menunggu `attack cooldown` sebelum serangan berikutnya dapat dilakukan.

Urutan ini penting karena serangan dalam game tidak hanya berupa animasi, tetapi juga memiliki efek mekanik. Jika cooldown tidak diatur, NPC dapat menyerang terlalu cepat. Jika animasi tidak disinkronkan dengan damage, pemain akan merasakan serangan yang tidak konsisten.

Parameter penting yang perlu dipahami mahasiswa adalah:

- `attack range`: jarak maksimum NPC dapat menyerang.
- `attack damage`: jumlah `health` player yang berkurang.
- `attack cooldown`: jeda waktu antara serangan.
- `animation duration`: durasi animasi attack.

Parameter ini menentukan ritme combat. `attack range` yang terlalu besar membuat NPC terasa agresif, sedangkan `attack cooldown` yang terlalu pendek membuat serangan terasa berlebihan.

Transisi umum dari state `Attack` adalah:

- `Attack` → `Chase` jika player keluar `attack range`.
- `Attack` → `Flee` jika HP NPC rendah.
- `Attack` → `Patrol/Search` jika player hilang.

Dengan transisi ini, NPC tidak terjebak dalam satu perilaku. Ia tetap dapat menyesuaikan diri ketika kondisi target atau kondisinya berubah.

Sebelum lanjut, mahasiswa perlu memahami bahwa `Attack` adalah state eksekusi, bukan state pergerakan. State ini mengatur kapan NPC menyerang, seberapa keras, dan kapan NPC harus berhenti menyerang.

### Inti yang Harus Ditekankan

- `Attack` adalah state ketika NPC mengeksekusi serangan terhadap player.
- Perilaku utama meliputi berhenti atau mengurangi gerakan, menghadap player, memainkan animasi, mengurangi `health`, dan menunggu cooldown.
- Parameter `attack range`, `attack damage`, `attack cooldown`, dan `animation duration` menentukan ritme dan keseimbangan serangan.
- Transisi `Attack` → `Chase`, `Flee`, atau `Patrol/Search` membuat perilaku NPC tetap responsif terhadap perubahan kondisi.

### Transisi ke Slide Berikutnya

Setelah memahami bagaimana NPC menyerang, kita akan melihat bagaimana NPC memilih untuk mundur atau mencari area aman ketika kondisinya tidak menguntungkan, yaitu state `Flee`.

---

## Slide 022 - State Flee

### Narasi

**Flee** adalah state dalam **Finite State Machine** yang menggambarkan situasi ketika NPC memilih untuk mundur, menjauh dari player, atau bergerak menuju area yang dianggap lebih aman. State ini penting karena mengubah NPC dari pola agresif menjadi pola bertahan.

Dalam state `Flee`, NPC tidak lagi fokus menyerang. Perilakunya biasanya berupa:

- memilih arah menjauh dari posisi player,
- bergerak menuju `safe point` atau area aman,
- menghindari obstacle di lingkungan,
- berhenti atau kembali normal jika kondisi sudah aman.

Intuisi praktisnya, `Flee` membuat NPC terasa lebih hidup. Enemy yang selalu menyerang sampai mati sering terasa kaku. Dengan `Flee`, NPC bisa menunjukkan keputusan sederhana: jika terlalu lemah, mundur dulu.

Dari sisi implementasi, state ini biasanya membutuhkan data posisi player, posisi NPC, nilai `health`, dan lokasi `safe point`. Arah menjauh dapat dihitung dari vektor posisi player ke NPC, lalu diarahkan ke titik aman. Jika ada obstacle, sistem pathfinding atau steering dapat membantu NPC memilih jalur yang feasible.

Transisi keluar dari `Flee` juga menentukan kualitas perilaku NPC. Secara umum:

- `Flee` → `Patrol` jika NPC sudah berada di area aman.
- `Flee` → `Chase` jika `health` pulih atau ada bantuan.
- `Flee` → `Dead` jika `health` habis.

Yang perlu dipahami mahasiswa sebelum lanjut adalah bahwa `Flee` bukan sekadar animasi mundur. State ini adalah keputusan perilaku yang bergantung pada kondisi NPC dan lingkungan. Kondisi apa yang memicu `Flee` akan dibahas lebih detail pada slide berikutnya.

### Inti yang Harus Ditekankan

- `Flee` adalah state NPC untuk mundur, menjauh, atau menuju area aman.
- Perilaku `Flee` melibatkan arah menjauh, `safe point`, penghindaran obstacle, dan kondisi berhenti.
- Transisi `Flee` biasanya menuju `Patrol`, `Chase`, atau `Dead` tergantung kondisi.
- State ini membuat NPC lebih adaptif dan tidak selalu menyerang secara kaku.

### Transisi ke Slide Berikutnya

Setelah memahami perilaku `Flee`, langkah berikutnya adalah melihat kondisi apa yang memicu perpindahan ke state tersebut.

---

## Slide 023 - Condition untuk Flee

### Narasi

Pada slide ini, kita membahas **condition** yang menentukan kapan NPC beralih ke state **Flee**.

Intuisinya sederhana: NPC tidak selalu menyerang. Ketika kondisi tertentu terpenuhi, misalnya nyawa sudah rendah, NPC memilih perilaku bertahan hidup.

Contoh condition yang digunakan adalah:

```text
health <= lowHealthThreshold
```

Artinya, sistem memeriksa nilai `health` NPC dan membandingkannya dengan `lowHealthThreshold`. Jika nilai nyawa sama dengan atau lebih kecil dari ambang batas, kondisi dianggap benar.

Dalam implementasi Unity, condition ini biasanya dicek pada update loop atau pada state aktif:

```csharp
if (health <= lowHealthThreshold)
{
    ChangeState(EnemyState.Flee);
}
```

Urutan eksekusinya:

1. Sistem membaca nilai `health` NPC.
2. Sistem membandingkan `health` dengan `lowHealthThreshold`.
3. Jika hasil perbandingan benar, fungsi `ChangeState` dipanggil.
4. State aktif berubah menjadi `EnemyState.Flee`.

Contoh parameter yang dapat digunakan:

```text
Max Health = 100
Low Health Threshold = 30
```

Dengan parameter ini, jika `health` enemy turun sampai 30 atau kurang:

```text
Enemy mulai kabur
```

Hal penting yang perlu dipahami mahasiswa adalah bahwa `lowHealthThreshold` bukan sekadar angka tetap. Nilai ini menjadi **desain perilaku**: semakin rendah threshold, NPC akan lebih lama bertahan dalam state menyerang; semakin tinggi threshold, NPC lebih cepat memilih kabur.

Condition seperti ini membuat transisi state menjadi lebih mudah dibaca, lebih mudah diuji, dan lebih mudah disesuaikan saat playtesting.

### Inti yang Harus Ditekankan

- **Condition** adalah aturan logika yang memicu transisi state.
- `health <= lowHealthThreshold` adalah contoh condition sederhana untuk masuk ke state **Flee**.
- `ChangeState(EnemyState.Flee)` adalah aksi yang dijalankan ketika condition benar.
- Nilai `lowHealthThreshold` memengaruhi agresivitas dan perilaku bertahan hidup NPC.
- Condition harus jelas, mudah diuji, dan konsisten dengan parameter game.

### Transisi ke Slide Berikutnya

Setelah kita tahu satu condition untuk Flee, masalah berikutnya muncul ketika beberapa condition benar pada saat yang sama. Misalnya player terlihat, player dekat, dan health rendah. Bagaimana memilih state yang paling tepat? Itu akan dibahas pada slide berikutnya tentang **Prioritas Transition**.

---

## Slide 024 - Prioritas Transition

### Narasi

Pada tahap ini, kita melihat masalah umum dalam **Finite State Machine**: beberapa **transition** dapat menjadi valid pada waktu yang sama.

Misalnya, NPC sedang melihat player, jarak player sudah dekat, dan `health` NPC juga rendah. Jika sistem hanya memeriksa condition satu per satu tanpa aturan, NPC bisa berpindah ke `Chase`, `Attack`, atau `Flee` secara tidak konsisten.

Intuisi praktisnya sederhana: NPC perlu tahu **mana kondisi yang lebih mendesak**. Untuk itu, kita menggunakan **prioritas transition**.

Prioritas berarti urutan evaluasi. Sistem tidak memilih semua state yang memenuhi condition, tetapi memilih **satu state** dari kondisi yang paling penting.

Contoh prioritas yang umum adalah:

```text
1. Dead
2. Flee
3. Attack
4. Chase
5. Patrol
```

Urutan ini menunjukkan bahwa kondisi paling kritis diperiksa lebih dulu. Jika `health <= 0`, NPC masuk ke `Dead`. Jika `health` masih ada tetapi sudah di bawah `lowHealthThreshold`, NPC sebaiknya masuk ke `Flee`.

Dengan prioritas ini, `Flee` lebih penting daripada `Attack` ketika NPC sekarat. Perilaku menjadi lebih logis: NPC yang lemah mundur, bukan terus menyerang.

Dalam implementasi game, prioritas ini biasanya dilakukan dengan mengevaluasi condition dari atas ke bawah, lalu memanggil `ChangeState` hanya untuk state pertama yang valid. Urutan evaluasi sangat menentukan hasil akhir.

### Inti yang Harus Ditekankan

- **Transition dapat bertabrakan** ketika beberapa condition benar secara bersamaan.
- **Prioritas transition** memberi urutan evaluasi agar NPC memilih satu state yang paling mendesak.
- Urutan `Dead`, `Flee`, `Attack`, `Chase`, `Patrol` membuat kondisi kritis menang sebelum kondisi umum.
- Tanpa prioritas, NPC dapat berpindah state dengan perilaku yang tidak logis.

### Transisi ke Slide Berikutnya

Setelah memahami bahwa urutan evaluasi menentukan perilaku NPC, kita akan melihat contoh prioritas condition secara lebih eksplisit.

---

## Slide 025 - Contoh Prioritas Condition

### Narasi

Pada slide ini, kita melihat bagaimana **prioritas transition** diterjemahkan menjadi **urutan evaluasi condition** dalam sebuah **Finite State Machine**.

Intinya, NPC tidak hanya perlu tahu *kapan* harus berpindah state, tetapi juga **state mana yang harus dipilih lebih dulu** ketika beberapa kondisi benar pada saat yang sama.

```text
Jika health <= 0
    → Dead

Else jika health <= lowHealthThreshold
    → Flee

Else jika player dalam attackRange
    → Attack

Else jika player terlihat
    → Chase

Else
    → Patrol
```

Pseudocode di atas menunjukkan pola **if-else berurutan**. Sistem akan memeriksa kondisi dari atas ke bawah, dan **kondisi pertama yang bernilai benar** akan menentukan state berikutnya.

Misalnya, jika `health <= 0`, NPC langsung masuk ke state `Dead`. Kondisi lain tidak perlu diperiksa lagi karena kematian adalah kondisi terminal yang paling menentukan.

Jika `health` masih ada tetapi sudah di bawah `lowHealthThreshold`, NPC masuk ke `Flee`. Artinya, meskipun player sedang terlihat atau berada dalam `attackRange`, NPC tetap memilih mundur karena kondisi bertahan hidup lebih penting.

Jika kondisi `Flee` tidak terpenuhi, sistem baru memeriksa apakah player berada dalam `attackRange`. Jika ya, NPC masuk ke `Attack`. Jika player terlihat tetapi masih jauh, NPC masuk ke `Chase`. Jika semua kondisi tidak terpenuhi, NPC kembali ke `Patrol`.

Di sinilah **urutan evaluasi** menjadi sangat penting. Tanpa prioritas, NPC bisa berperilaku tidak logis. Misalnya, NPC yang HP-nya rendah seharusnya lari, tetapi karena player terlihat lebih dulu, NPC malah mengejar.

Sebelum lanjut, mahasiswa perlu memahami bahwa dalam FSM berbasis condition, **bukan hanya isi condition yang penting**, tetapi juga **posisi condition dalam urutan pemeriksaan**.

### Inti yang Harus Ditekankan

- **Urutan if-else menentukan prioritas state** yang dipilih NPC.
- `Dead` harus berada paling atas karena kondisi `health <= 0` bersifat terminal.
- `Flee` harus diperiksa sebelum `Attack` dan `Chase` agar NPC tetap logis saat HP rendah.
- `Patrol` berfungsi sebagai **fallback** ketika tidak ada kondisi lain yang terpenuhi.
- Tanpa prioritas condition, transisi state dapat menjadi tidak konsisten dan sulit diprediksi.

### Transisi ke Slide Berikutnya

Setelah memahami bagaimana urutan condition menentukan prioritas perilaku NPC, langkah berikutnya adalah merangkum seluruh relasi antar state ke dalam bentuk yang lebih sistematis, yaitu tabel transisi.

---

## Slide 026 - State Transition Table

### Narasi

Slide ini menunjukkan cara merancang **Finite State Machine** secara lebih sistematis melalui **State Transition Table**. Sebelum menulis kode, kita perlu mengetahui dari state mana NPC berada, kondisi apa yang memicu perpindahan, dan state tujuan apa yang harus dijalankan. Tabel ini menjadi semacam kontrak perilaku NPC.

| Current State | Condition | Next State |
|---|---|---|
| `Patrol` | Player terlihat | `Chase` |
| `Chase` | Player dekat | `Attack` |
| `Chase` | Player hilang | `Patrol` |
| `Attack` | Player menjauh | `Chase` |
| `Attack` | HP rendah | `Flee` |
| `Flee` | Sudah aman | `Patrol` |
| `Any` | HP habis | `Dead` |

Kolom **Current State** adalah state yang sedang aktif pada NPC. **Condition** adalah aturan yang dievaluasi berdasarkan data game, misalnya jarak player, visibilitas, atau nilai HP. **Next State** adalah state yang akan dijalankan jika kondisi tersebut terpenuhi.

Perhatikan baris `Any | HP habis | Dead`. Ini adalah transisi global yang memotong state lain. Artinya, jika HP NPC mencapai nol, perilaku apa pun yang sedang berjalan harus berhenti dan NPC masuk ke state `Dead`. Dalam implementasi, kondisi ini biasanya dicek lebih dulu atau diprioritaskan agar NPC tidak tetap `Patrol`, `Chase`, atau `Attack` setelah mati.

Baris lain menunjukkan alur perilaku yang lebih natural:

- `Patrol` berubah ke `Chase` saat player terlihat.
- `Chase` berubah ke `Attack` saat player sudah dekat.
- `Chase` kembali ke `Patrol` jika player hilang.
- `Attack` kembali ke `Chase` jika player menjauh.
- `Attack` bisa berubah ke `Flee` jika HP NPC rendah.
- `Flee` kembali ke `Patrol` jika NPC sudah aman.

Manfaat utama tabel ini adalah membantu mahasiswa mendeteksi state yang belum terdefinisi, kondisi yang tumpang tindih, atau transisi yang tidak logis. Misalnya, jika tidak ada aturan dari `Flee` kembali ke `Patrol`, NPC bisa terjebak di `Flee` selamanya. Jika tidak ada aturan global `Dead`, NPC bisa tetap bergerak setelah HP habis.

Secara praktis, tabel ini dapat menjadi dasar implementasi di Unity, misalnya dengan `enum` state, method `Update`, dan pengecekan kondisi. Namun pada tahap ini, fokus utamanya adalah desain perilaku: state apa saja yang dibutuhkan, kondisi apa yang memicu perpindahan, dan apakah alurnya sudah masuk akal sebelum dikodekan.

### Inti yang Harus Ditekankan

- **State Transition Table** merangkum hubungan antara **Current State**, **Condition**, dan **Next State**.
- Transisi global `Any → Dead` harus diprioritaskan agar NPC tidak tetap aktif setelah HP habis.
- Tabel membantu mendeteksi missing transition, state terjebak, dan perilaku NPC yang tidak logis sebelum implementasi.

### Transisi ke Slide Berikutnya

Setelah transisi dirangkum dalam tabel, langkah berikutnya adalah mengubahnya menjadi diagram FSM yang lebih visual, sehingga alur `Patrol`, `Chase`, `Attack`, `Flee`, dan `Dead` dapat dilihat sebagai node dan panah perpindahan state.

---

## Slide 027 - Diagram FSM Praktikum

### Narasi

Slide ini menampilkan **diagram FSM** untuk praktikum NPC sederhana. Diagram ini membantu mahasiswa melihat perilaku sebagai kumpulan **state** yang saling terhubung oleh **transition**.

```text
                 player terlihat
        ┌─────────────────────────┐
        │                         ▼
     Patrol ───────────────────→ Chase
        ▲                         │
        │                         │ player dekat
        │                         ▼
        │                      Attack
        │                         │
        │                         │ HP rendah
        │                         ▼
        └────────────────────── Flee
              sudah aman
```

Tambahan transition:

```text
Dari state mana pun:
HP <= 0 → Dead
```

Intuisi praktisnya: NPC tidak “memikirkan” semua kemungkinan sekaligus. Pada satu waktu, NPC berada di **satu state aktif**, misalnya `Patrol`, `Chase`, `Attack`, atau `Flee`. Setiap frame, sistem memeriksa kondisi yang relevan, lalu memutuskan apakah state tetap atau pindah.

Alur diagram dapat dibaca sebagai berikut:

1. NPC mulai atau kembali ke `Patrol` ketika situasi sudah aman.
2. Jika `player terlihat`, NPC beralih ke `Chase`.
3. Jika `player dekat`, NPC beralih ke `Attack`.
4. Jika `HP rendah`, NPC beralih ke `Flee`.
5. Jika `sudah aman`, NPC kembali ke `Patrol`.

Edge `HP <= 0 → Dead` bersifat khusus karena berlaku dari **state mana pun**. Artinya, kondisi kematian tidak bergantung pada perilaku terakhir NPC. Jika HP habis saat `Patrol`, `Chase`, `Attack`, atau `Flee`, state berikutnya tetap `Dead`.

Yang perlu dipahami sebelum lanjut: diagram ini adalah **desain perilaku**, bukan kode final. Ia menjawab pertanyaan “kapan NPC berpindah state?” dan “ke state mana?”. Detail eksekusi di dalam game loop, seperti urutan membaca sensor, evaluasi transition, dan menjalankan state aktif, akan dibahas pada slide berikutnya.

### Inti yang Harus Ditekankan

- **State** adalah mode perilaku NPC, misalnya `Patrol`, `Chase`, `Attack`, `Flee`, dan `Dead`.
- **Transition** terjadi hanya jika **condition** terpenuhi, misalnya `player terlihat`, `player dekat`, `HP rendah`, atau `sudah aman`.
- Pada satu waktu, NPC berada di **satu state aktif**; perubahan state adalah hasil evaluasi kondisi.
- Transisi `HP <= 0 → Dead` bersifat global dan mengakhiri perilaku normal NPC.
- Diagram FSM membantu merancang perilaku sebelum diimplementasikan ke kode.

### Transisi ke Slide Berikutnya

Setelah perilaku dirancang dalam diagram, langkah berikutnya adalah memahami bagaimana FSM dieksekusi di dalam game loop, yaitu bagaimana sensor, keputusan, dan aksi dijalankan setiap frame.

---

## Slide 028 - FSM dan Game Loop

### Narasi

Setelah diagram FSM dibuat, langkah berikutnya adalah memahami **di mana** dan **kapan** mesin state itu dijalankan. Dalam game, FSM tidak berjalan sekali saja; ia dievaluasi berulang kali di dalam **game loop**. Pada Unity, titik masuk yang paling umum adalah fungsi `Update()`, yang dipanggil setiap frame.

Intuisi praktisnya sederhana: setiap frame, NPC perlu tahu **apa yang terjadi di sekitarnya**, **apakah state harus berubah**, lalu **apa yang dilakukan pada state saat ini**. Urutan ini penting karena keputusan harus memakai data terbaru, bukan data lama dari frame sebelumnya.

Alur umumnya dapat dilihat sebagai pipeline berikut:

```text
Update()
    ↓
Baca sensor
    ↓
Evaluasi transition
    ↓
Jalankan state aktif
```

Tahap **sensor** membaca kondisi lingkungan, misalnya jarak pemain, visibilitas, atau nilai `HP`. Tahap **decision** memeriksa aturan transisi dari diagram FSM. Tahap **action** menjalankan perilaku state yang aktif, misalnya `Patrol`, `Chase`, `Attack`, atau `Flee`.

Pola umum dalam kode Unity biasanya ditulis seperti ini:

```csharp
void Update()
{
    UpdatePerception();
    EvaluateTransitions();
    UpdateCurrentState();
}
```

Fungsi `UpdatePerception()` mengumpulkan data terbaru dari lingkungan. Fungsi `EvaluateTransitions()` memeriksa apakah ada kondisi yang memenuhi aturan pindah state. Fungsi `UpdateCurrentState()` kemudian menjalankan perilaku untuk state yang sedang aktif.

Urutan ini membantu memisahkan tiga tanggung jawab utama:

- **sensor**: membaca kondisi dunia,
- **decision**: menentukan apakah state berubah,
- **action**: menjalankan perilaku state aktif.

Pemisahan ini membuat perilaku NPC lebih mudah dibaca, diuji, dan diperbaiki. Jika NPC tidak bereaksi, kita bisa mengecek apakah masalahnya ada pada sensor, aturan transisi, atau eksekusi state. Jika NPC bergerak aneh, masalahnya biasanya ada pada action, bukan pada transisi.

Sebagai contoh, saat NPC berada di state `Patrol`, `UpdatePerception()` mendeteksi bahwa pemain terlihat. `EvaluateTransitions()` kemudian memeriksa aturan `player terlihat → Chase`. Jika kondisi terpenuhi, state berubah menjadi `Chase`, lalu `UpdateCurrentState()` menjalankan perilaku `Chase`. Yang harus dipahami mahasiswa adalah bahwa FSM di game loop bukan sekadar daftar state, melainkan **siklus evaluasi berulang** yang terjadi setiap frame.

### Inti yang Harus Ditekankan

- FSM dijalankan berulang kali di dalam **game loop**, biasanya melalui `Update()`.
- Urutan penting: **sensor**, **decision**, lalu **action**.
- `UpdatePerception()` membaca data lingkungan, `EvaluateTransitions()` memeriksa aturan pindah state, dan `UpdateCurrentState()` menjalankan perilaku state aktif.
- Pemisahan sensor, decision, dan action membuat perilaku NPC lebih modular, mudah di-debug, dan lebih konsisten.

### Transisi ke Slide Berikutnya

Selanjutnya, kita akan melihat cara paling sederhana untuk merepresentasikan state dalam kode, yaitu menggunakan `enum` dan `switch`, sehingga diagram FSM dapat mulai diimplementasikan secara praktis.

---

## Slide 029 - Implementasi FSM Sederhana dengan Enum

### Narasi

Slide ini menunjukkan cara paling sederhana untuk merepresentasikan **Finite State Machine** dalam kode. Intinya, perilaku NPC atau musuh didefinisikan sebagai beberapa **state** yang bernama, lalu disimpan dalam satu variabel agar bisa diperiksa setiap frame.

Kita mulai dengan `enum` yang berisi daftar state:

```csharp
public enum EnemyState
{
    Patrol,
    Chase,
    Attack,
    Flee,
    Dead
}
```

Setiap nilai di dalam `EnemyState` adalah label untuk satu kondisi perilaku. Misalnya, `Patrol` berarti NPC sedang berpatroli, `Chase` berarti NPC mengejar pemain, `Attack` berarti NPC menyerang, `Flee` berarti NPC mundur, dan `Dead` berarti NPC tidak aktif lagi.

Selanjutnya, kita menyimpan state yang sedang aktif menggunakan variabel:

```csharp
private EnemyState currentState;
```

Variabel `currentState` adalah “posisi” NPC di dalam state machine. Nilai ini akan berubah ketika kondisi tertentu terpenuhi, misalnya pemain masuk ke jarak pandang sehingga NPC berpindah dari `Patrol` ke `Chase`.

Di dalam update, kita menggunakan `switch` untuk menjalankan perilaku sesuai state aktif:

```csharp
switch (currentState)
{
    case EnemyState.Patrol:
        UpdatePatrol();
        break;

    case EnemyState.Chase:
        UpdateChase();
        break;

    case EnemyState.Attack:
        UpdateAttack();
        break;

    case EnemyState.Flee:
        UpdateFlee();
        break;
}
```

Urutan eksekusinya cukup sederhana:

1. Game loop memanggil update.
2. Nilai `currentState` dibaca.
3. `switch` memilih case yang sesuai.
4. Method perilaku state dijalankan.
5. Jika kondisi transisi terpenuhi, `currentState` diganti ke state lain.

Perhatikan bahwa `Dead` tidak masuk ke dalam `switch` pada potongan ini. Itu wajar karena NPC yang mati biasanya tidak lagi menjalankan perilaku aktif seperti patroli, kejar, atau serangan.

Implementasi ini sangat cocok untuk praktikum awal karena strukturnya langsung terlihat: satu `enum`, satu variabel state, dan satu `switch-case`. Mahasiswa dapat fokus memahami bagaimana state menentukan perilaku, sebelum nanti membahas kelebihan dan keterbatasannya.

### Inti yang Harus Ditekankan

- **`enum`** digunakan untuk memberi nama setiap state secara eksplisit.
- **`currentState`** menyimpan state yang sedang aktif pada NPC.
- **`switch-case`** menentukan perilaku mana yang dijalankan berdasarkan state aktif.
- **Transisi state** dilakukan dengan mengganti nilai `currentState`.
- Implementasi ini sederhana, mudah dibaca, dan cocok untuk jumlah state yang sedikit.

### Transisi ke Slide Berikutnya

Setelah memahami bentuk paling sederhana dari FSM berbasis `enum`, kita akan lanjut ke slide berikutnya untuk membahas kelebihan pendekatan ini, sekaligus melihat batasannya ketika jumlah state dan kompleksitas perilaku bertambah.

---

## Slide 030 - Kelebihan Enum FSM

### Narasi

Setelah pada slide sebelumnya kita melihat bentuk paling sederhana dari **Finite State Machine** berbasis `enum`, sekarang kita perlu menilai kapan pendekatan ini masih tepat. Intuisi utamanya sederhana: **Enum FSM** sangat berguna ketika perilaku NPC dapat diwakili oleh sejumlah kecil state yang jelas, seperti `Patrol`, `Chase`, `Attack`, `Flee`, dan `Dead`.

Dalam implementasi sederhana, seluruh state disimpan dalam satu variabel `currentState`, lalu diuji melalui `switch-case`. Cara ini membuat alur perilaku mudah diikuti: mahasiswa dapat melihat langsung state apa yang sedang aktif, perilaku apa yang dijalankan pada state tersebut, dan bagaimana perubahan state terjadi.

Kelebihan utama **Enum FSM** dapat diringkas sebagai berikut:

- Mudah dibuat karena hanya membutuhkan satu `enum` dan satu variabel state.
- Mudah dibaca karena semua state terlihat dalam satu tempat.
- Cocok untuk jumlah state sedikit.
- Cocok untuk pembelajaran dasar perilaku NPC.
- Tidak membutuhkan banyak file atau struktur kelas yang rumit.

Di sisi lain, pendekatan ini juga memiliki batas. Kekurangannya muncul ketika sistem perilaku mulai membesar:

- Blok `switch-case` dapat menjadi panjang dan sulit dibaca.
- Sulit dikelola jika jumlah state sangat banyak.
- Sulit dikembangkan jika tiap state memiliki logika yang kompleks.
- Kurang **modular** karena banyak perilaku NPC berada dalam satu kelas.

Karena itu, mahasiswa perlu memahami bahwa **Enum FSM** bukan berarti selalu buruk atau selalu baik. Ia adalah pilihan desain yang sangat tepat untuk state sedikit dan perilaku sederhana. Yang penting adalah mengenali tanda bahwa sistem mulai sulit dikelola: `switch-case` membengkak, logika state saling bercampur, dan perubahan kecil berisiko memengaruhi banyak bagian.

Untuk praktikum ini, **Enum FSM** masih sangat tepat karena tujuannya adalah membangun pemahaman dasar tentang **state**, **transisi state**, dan perilaku NPC. Setelah batasannya dipahami, langkah berikutnya adalah merapikan perpindahan state agar lebih terkontrol dan lebih mudah dikembangkan.

### Inti yang Harus Ditekankan

- **Enum FSM** cocok untuk state sedikit, mudah dibaca, dan cepat dibuat.
- `switch-case` dapat menjadi panjang dan kurang modular jika state bertambah banyak.
- Untuk perilaku NPC sederhana, pendekatan ini membantu memahami **state** dan **transisi** dengan jelas.
- Batasannya penting dikenali sebelum sistem perilaku menjadi sulit dikelola.

### Transisi ke Slide Berikutnya

Setelah memahami kelebihan dan batas **Enum FSM**, kita akan melihat cara membuat perpindahan state lebih rapi melalui fungsi `ChangeState()`.

---

## Slide 031 - ChangeState()

### Narasi

Setelah memahami bahwa **enum FSM** mudah dibuat dan cocok untuk jumlah state yang sedikit, langkah berikutnya adalah membuat perpindahan state menjadi lebih rapi. Dalam implementasi FSM, perpindahan state tidak boleh dilakukan secara acak di banyak tempat, karena hal itu dapat membuat logika NPC menjadi sulit dibaca dan sulit diuji.

Intuisi praktisnya adalah: setiap kali NPC ingin berpindah state, kita arahkan melalui satu fungsi khusus. Fungsi ini menjadi “gerbang” yang memastikan bahwa state lama benar-benar ditutup, state baru diset, dan state baru benar-benar diinisialisasi. Dengan cara ini, perilaku game menjadi lebih konsisten.

Untuk itu, kita dapat menggunakan fungsi `ChangeState()` seperti berikut:

```csharp
void ChangeState(EnemyState newState)
{
    if (currentState == newState)
        return;

    ExitState(currentState);
    currentState = newState;
    EnterState(newState);
}
```

Urutan eksekusi fungsi ini penting untuk dipahami:

1. Cek apakah `newState` sama dengan `currentState`.
2. Jika sama, langsung `return` agar tidak terjadi transisi yang tidak perlu.
3. Panggil `ExitState(currentState)` untuk membersihkan atau menutup perilaku state lama.
4. Ubah nilai `currentState` menjadi `newState`.
5. Panggil `EnterState(newState)` untuk menyiapkan perilaku state baru.

Manfaat utama dari fungsi ini adalah:

- **menghindari perubahan state sembarangan**,
- memastikan `OnExit` atau `ExitState` dipanggil sebelum state berubah,
- memastikan `OnEnter` atau `EnterState` dipanggil setelah state berubah,
- memudahkan **debug** karena semua transisi state dapat dilacak di satu tempat.

Dengan `ChangeState()`, mahasiswa perlu memahami bahwa FSM bukan hanya tentang menyimpan nilai state, tetapi juga tentang mengatur **kapan** dan **bagaimana** state berpindah. Ini adalah fondasi penting sebelum masuk ke detail perilaku tiap state.

### Inti yang Harus Ditekankan

- `ChangeState()` menjadi satu pintu utama untuk perpindahan state.
- Jika `newState` sama dengan `currentState`, transisi tidak perlu dilakukan.
- State lama harus di-`exit` terlebih dahulu sebelum state baru di-`enter`.
- Pola ini membuat logika NPC lebih rapi, mudah dibaca, dan lebih mudah di-debug.

### Transisi ke Slide Berikutnya

Setelah perpindahan state dikendalikan oleh `ChangeState()`, langkah berikutnya adalah memahami apa yang terjadi saat state lama keluar dan state baru masuk. Slide berikutnya akan membahas `EnterState` dan `ExitState`.

---

## Slide 032 - EnterState dan ExitState

### Narasi

Setelah sebuah agen game berpindah state, kita perlu memastikan bahwa state baru langsung memiliki kondisi yang benar. Di sinilah peran **`EnterState()`** dan **`ExitState()`** menjadi penting. `EnterState()` dipanggil **satu kali** ketika agen masuk ke state tertentu, sedangkan `ExitState()` dipanggil ketika agen meninggalkan state sebelumnya.

Secara intuitif, `EnterState()` adalah bagian “persiapan awal” sebelum perilaku state itu berjalan. Misalnya, ketika musuh masuk ke state **Patrol**, ia harus berjalan dengan kecepatan patroli. Ketika masuk ke **Chase**, kecepatannya harus ditingkatkan. Ketika masuk ke **Attack**, ia mungkin perlu berhenti bergerak agar bisa melakukan serangan.

```csharp
void EnterState(EnemyState state)
{
    switch (state)
    {
        case EnemyState.Patrol:
            agent.speed = patrolSpeed;
            break;

        case EnemyState.Chase:
            agent.speed = chaseSpeed;
            break;

        case EnemyState.Attack:
            agent.isStopped = true;
            break;
    }
}
```

Pada potongan kode di atas, fungsi `EnterState()` menerima parameter `state` yang menunjukkan state baru yang sedang dimasuki. Blok `switch (state)` kemudian memeriksa state tersebut dan menjalankan pengaturan yang sesuai.

- `EnemyState.Patrol` mengatur `agent.speed` menjadi `patrolSpeed`.
- `EnemyState.Chase` mengatur `agent.speed` menjadi `chaseSpeed`.
- `EnemyState.Attack` mengatur `agent.isStopped = true` agar agen berhenti bergerak.

Perhatikan juga penggunaan `break` di setiap `case`. Tanpa `break`, eksekusi bisa “jatuh” ke case berikutnya dan menyebabkan pengaturan yang tidak diinginkan.

`EnterState()` cocok digunakan untuk hal-hal yang hanya perlu dilakukan **saat masuk state**, bukan setiap frame. Beberapa contohnya adalah:

- mengatur `speed` agen,
- mengatur animasi awal,
- mengatur target,
- reset timer atau cooldown.

Sementara itu, `ExitState()` berperan sebagai “pembersihan” sebelum state baru dimulai. Misalnya, jika state sebelumnya menjalankan animasi tertentu atau menyimpan target lama, `ExitState()` dapat membereskan kondisi tersebut agar state baru tidak mewarisi efek yang sudah tidak relevan.

Yang harus dipahami mahasiswa adalah perbedaan antara **masuk state** dan **perilaku state**. `EnterState()` hanya menyiapkan kondisi awal. Logika yang berjalan terus-menerus, seperti bergerak ke waypoint atau memeriksa jarak ke pemain, akan dibahas pada bagian update state.

### Inti yang Harus Ditekankan

- `EnterState()` dipanggil **satu kali** saat agen masuk ke state baru.
- `ExitState()` digunakan untuk membersihkan kondisi state sebelumnya.
- `EnterState()` cocok untuk setup awal seperti `speed`, animasi, target, dan timer.
- `switch` dan `break` memastikan hanya satu case yang dieksekusi sesuai state.
- `EnterState()` bukan tempat untuk logika per-frame; itu hanya persiapan awal state.

### Transisi ke Slide Berikutnya

Setelah state berhasil masuk dan kondisinya disiapkan, langkah berikutnya adalah menentukan apa yang dilakukan agen selama berada di state tersebut. Untuk itu, kita akan lanjut ke pembahasan **Update State**, di mana setiap state memiliki fungsi update sendiri yang berjalan setiap frame.

---

## Slide 033 - Update State

### Narasi

Setelah state masuk melalui `EnterState()`, state tidak berhenti hanya pada setup awal. Dalam **Finite State Machine**, setiap state memiliki perilaku yang berjalan selama state itu aktif. Perilaku inilah yang biasanya diletakkan pada fungsi **update state**.

Intuisi praktisnya: `EnterState()` adalah "apa yang dilakukan sekali saat pindah state", sedangkan `UpdateState()` adalah "apa yang dilakukan terus-menerus selama state ini aktif". Dalam game, fungsi update biasanya dipanggil setiap frame atau setiap tick agen.

```csharp
void UpdatePatrol()
{
    MoveToCurrentWaypoint();

    if (CanSeePlayer())
    {
        ChangeState(EnemyState.Chase);
    }
}
```

Pada `UpdatePatrol()`, urutan prosesnya adalah:

1. musuh bergerak menuju waypoint saat ini melalui `MoveToCurrentWaypoint()`;
2. musuh memeriksa apakah pemain terlihat melalui `CanSeePlayer()`.

Jika `CanSeePlayer()` bernilai benar, state berubah menjadi `EnemyState.Chase`. Jika tidak, musuh tetap berada di state patrol dan terus mengeksekusi perilaku patrol.

```csharp
void UpdateChase()
{
    MoveToPlayer();

    if (IsPlayerInAttackRange())
    {
        ChangeState(EnemyState.Attack);
    }
}
```

Pada `UpdateChase()`, urutan prosesnya juga cukup jelas:

1. musuh mengejar pemain melalui `MoveToPlayer()`;
2. musuh memeriksa apakah pemain sudah berada dalam jangkauan serangan melalui `IsPlayerInAttackRange()`.

Jika kondisi jangkauan terpenuhi, state berubah menjadi `EnemyState.Attack`. Jika belum, musuh tetap berada di state chase.

Pola ini penting karena memisahkan perilaku tiap state. Alih-alih menumpuk banyak kondisi dalam satu fungsi besar, setiap state memiliki tanggung jawab sendiri:

- `Patrol` bergerak ke waypoint dan mendeteksi pemain.
- `Chase` mengejar pemain dan memeriksa jangkauan serangan.
- `Attack` dapat didefinisikan untuk perilaku menyerang.
- `Flee` dapat didefinisikan untuk perilaku mundur atau kabur.

Dengan pemisahan ini, kode lebih mudah dibaca, lebih mudah diuji, dan lebih mudah dikembangkan. Mahasiswa perlu memahami bahwa **update state** bukan hanya fungsi gerak, tetapi juga tempat keputusan dibuat: agen mengevaluasi kondisi lingkungan, lalu memutuskan apakah tetap di state yang sama atau berpindah state.

### Inti yang Harus Ditekankan

- `UpdateState()` adalah perilaku yang berjalan selama state aktif, biasanya setiap frame.
- `EnterState()` untuk setup sekali, `UpdateState()` untuk perilaku berulang dan pemeriksaan transisi.
- Setiap state memiliki perilaku sendiri, misalnya `UpdatePatrol()` dan `UpdateChase()`.
- **Transisi state** terjadi ketika kondisi tertentu terpenuhi, seperti `CanSeePlayer()` atau `IsPlayerInAttackRange()`.
- Pola ini membuat **NPC behavior** lebih modular, mudah dibaca, dan mudah dikembangkan.

### Transisi ke Slide Berikutnya

Jika jumlah state bertambah, fungsi update per state masih bisa bekerja, tetapi struktur kode bisa mulai terasa kurang rapi. Karena itu, pada slide berikutnya kita akan melihat pendekatan **FSM berbasis class**, di mana setiap state dibuat sebagai class terpisah dengan `Enter()`, `Update()`, dan `Exit()`.

---

## Slide 034 - FSM Berbasis Class

### Narasi

Pada slide sebelumnya, kita sudah melihat bahwa setiap state dapat memiliki fungsi update sendiri, misalnya `UpdatePatrol()` dan `UpdateChase()`. Pola itu sudah cukup untuk praktikum awal, tetapi ketika jumlah state bertambah, kode mulai sulit dikelola. Karena itu, untuk **FSM yang lebih kompleks**, setiap state dapat dibuat sebagai **class** tersendiri.

Struktur dasarnya dapat dilihat seperti ini:

```text
EnemyStateBase
├── PatrolState
├── ChaseState
├── AttackState
└── FleeState
```

Dalam struktur ini, `EnemyStateBase` berperan sebagai **kelas dasar** atau kontrak umum untuk semua state. Setiap state, seperti `PatrolState`, `ChaseState`, `AttackState`, dan `FleeState`, adalah **turunan** dari kelas dasar tersebut. Dengan cara ini, perilaku tiap state tidak lagi tersebar di satu fungsi besar, tetapi dikemas dalam class yang memiliki tanggung jawab jelas.

Setiap class state biasanya menyediakan tiga metode utama:

```csharp
Enter()
Update()
Exit()
```

Tiga metode ini memiliki peran yang berbeda:

1. `Enter()` dipanggil saat state baru diaktifkan.
2. `Update()` dipanggil setiap frame selama state tersebut aktif.
3. `Exit()` dipanggil saat state akan ditinggalkan.

Urutan ini penting karena menentukan kapan NPC mulai melakukan sesuatu, kapan perilaku dievaluasi, dan kapan state lama dibersihkan. Misalnya, ketika musuh berpindah dari `PatrolState` ke `ChaseState`, sistem dapat memanggil `Exit()` pada state patrol, lalu `Enter()` pada state chase, dan setelah itu `Update()` pada state chase akan berjalan setiap frame.

Pendekatan class membuat FSM lebih **modular** dan lebih mudah dikembangkan. Jika kita ingin menambah state baru, misalnya `FleeState`, kita cukup membuat class baru yang mewarisi `EnemyStateBase` dan mengimplementasikan `Enter()`, `Update()`, serta `Exit()`. Perilaku lama tidak perlu diubah secara besar-besaran. Dalam implementasi game, pola ini membantu memisahkan logika perilaku NPC dari kode utama, sehingga lebih mudah diuji dan dipelihara.

Namun, pendekatan ini juga memiliki konsekuensi. Dibandingkan dengan enum FSM, class FSM biasanya menghasilkan **lebih banyak file** dan struktur kode yang lebih panjang. Untuk praktikum awal, ini bisa terasa lebih berat. Karena itu, mahasiswa perlu memahami bahwa class FSM bukan berarti selalu lebih baik untuk semua kasus, tetapi lebih cocok ketika perilaku NPC mulai kompleks dan perlu dikembangkan secara bertahap.

### Inti yang Harus Ditekankan

- **Class FSM** memisahkan setiap state menjadi class tersendiri, sehingga perilaku NPC lebih modular.
- `Enter()`, `Update()`, dan `Exit()` adalah tiga fase penting yang mengatur kapan state dimulai, dijalankan, dan diakhiri.
- Pendekatan ini lebih baik untuk project yang lebih besar, tetapi lebih panjang untuk praktikum awal.

### Transisi ke Slide Berikutnya

Setelah memahami bagaimana class FSM dibangun, langkah berikutnya adalah membandingkannya dengan enum FSM agar mahasiswa dapat memilih pendekatan yang paling sesuai untuk skala project.

---

## Slide 035 - Perbandingan Enum FSM dan Class FSM

### Narasi

Setelah melihat FSM berbasis class, kita perlu membandingkannya dengan pendekatan **Enum FSM** yang lebih sederhana. Dalam **Enum FSM**, state biasanya direpresentasikan sebagai nilai enum, misalnya `Patrol`, `Chase`, `Attack`, lalu logika perilaku ditulis dalam satu atau beberapa method menggunakan `switch` atau `if`. Pendekatan ini mudah dipahami karena alur state terlihat langsung: variabel `currentState` berubah, lalu perilaku NPC dieksekusi sesuai state aktif.

Sementara itu, **Class FSM** memisahkan setiap state menjadi class tersendiri, seperti `PatrolState`, `ChaseState`, dan `AttackState`. Setiap class dapat memiliki `Enter()`, `Update()`, dan `Exit()`, sehingga perilaku tiap state lebih terisolasi. Cara ini membuat kode lebih rapi ketika jumlah state bertambah, tetapi juga menambah jumlah file dan struktur kelas yang perlu dikelola.

Perbedaan utamanya bukan hanya soal gaya penulisan, tetapi juga **modularitas** dan **skalabilitas**. Enum FSM biasanya lebih cepat dibuat, cocok untuk praktikum awal, dan membantu mahasiswa memahami konsep transisi state tanpa distraksi arsitektur yang terlalu banyak. Namun, jika NPC memiliki banyak state, animasi, kondisi sensor, atau perilaku yang saling terkait, class FSM lebih mudah dikembangkan karena setiap state dapat diperluas, diuji, dan diganti tanpa mengganggu state lain.

Untuk pertemuan ini, pendekatan yang paling sesuai adalah memulai dengan **enum** dan diagram state. Mahasiswa dapat fokus pada apa yang memicu transisi, bagaimana state aktif dievaluasi, dan bagaimana perilaku NPC berubah dari satu state ke state lain. Setelah konsep dasar itu kuat, pengembangan lanjut dapat diarahkan ke **class FSM** untuk project yang lebih besar.

Intuisi praktisnya: gunakan **Enum FSM** ketika tujuan utama adalah memahami dan mendemonstrasikan perilaku dasar NPC. Gunakan **Class FSM** ketika project mulai membutuhkan pemisahan tanggung jawab, penambahan state baru, atau perilaku yang lebih kompleks tanpa membuat satu method menjadi terlalu panjang.

### Inti yang Harus Ditekankan

- **Enum FSM** lebih mudah, lebih sedikit file, dan cocok untuk praktikum awal.
- **Class FSM** lebih modular dan lebih baik skalabilitasnya, tetapi struktur kodenya lebih kompleks.
- Untuk Pertemuan 5, fokus utama adalah memahami konsep state dan transisi menggunakan enum/diagram, lalu class FSM sebagai pengembangan lanjut.

### Transisi ke Slide Berikutnya

Setelah memahami kapan enum dan class FSM digunakan, kita akan melihat masalah umum yang sering muncul saat transisi state terlalu cepat, sehingga perilaku NPC menjadi tidak stabil.

---

## Slide 036 - Transition yang Terlalu Cepat

### Narasi

Pada slide sebelumnya kita sudah melihat dua cara membangun **Finite State Machine**, yaitu berbasis `enum` dan berbasis class. Sekarang kita masuk ke masalah yang sering muncul saat FSM dijalankan di game: **transisi state yang terlalu cepat**.

Masalah ini biasanya terlihat seperti pola berulang:

```text
Patrol ↔ Chase ↔ Patrol ↔ Chase
```

NPC berpindah dari `Patrol` ke `Chase`, lalu kembali ke `Patrol`, dan begitu seterusnya dalam waktu yang sangat singkat.

Hal ini terjadi karena kondisi transisi berada di sekitar **batas ambang**. Misalnya:

- player berada tepat di batas `vision range`,
- `raycast` kadang mengenai player, kadang tidak,
- jarak player berada tepat di sekitar `attack range`.

Karena kondisi dicek berulang kali setiap frame, perubahan kecil saja dapat membalikkan hasil kondisi. Akibatnya, state yang seharusnya stabil menjadi berganti-ganti.

Dampaknya tidak hanya pada logika, tetapi juga pada pengalaman bermain:

- NPC terlihat **bergetar** perilakunya,
- animasi tidak sinkron,
- movement menjadi tidak stabil,
- pemain merasa perilaku NPC tidak masuk akal.

Intuisi pentingnya adalah: dalam FSM, **kapan state berubah** sama pentingnya dengan **state apa yang tersedia**. Jika transisi hanya bergantung pada satu batas yang sama untuk masuk dan keluar, sistem rentan terhadap osilasi.

Sebelum lanjut, mahasiswa perlu memahami bahwa masalah ini bukan berarti FSM salah konsep, melainkan transisi perlu dirancang agar lebih **stabil** terhadap kondisi yang berada di ambang batas.

### Inti yang Harus Ditekankan

- Transisi terlalu cepat terjadi ketika kondisi berada di sekitar **batas ambang**.
- Perubahan kecil pada `vision range`, `raycast`, atau jarak dapat menyebabkan state berganti berulang.
- Dampaknya adalah perilaku NPC tidak stabil, animasi kacau, dan movement tidak konsisten.
- Masalah ini menunjukkan bahwa desain transisi FSM perlu mempertimbangkan **stabilitas**, bukan hanya kebenaran kondisi.

### Transisi ke Slide Berikutnya

Untuk mengatasi osilasi ini, kita akan melihat cara membuat batas masuk dan batas keluar yang berbeda, sehingga state NPC menjadi lebih stabil.

---

## Slide 037 - Solusi: Hysteresis

### Narasi

Pada slide sebelumnya, kita melihat masalah umum pada **Finite State Machine**: NPC berpindah state terlalu cepat karena kondisi berada tepat di ambang batas. Solusi yang dibahas di sini adalah **hysteresis**.

**Hysteresis** berarti menggunakan **batas masuk** dan **batas keluar** yang berbeda untuk satu state. Intuisinya sederhana: jangan gunakan satu angka yang sama untuk memulai dan mengakhiri perilaku.

Contoh pada slide menggunakan dua ambang berbeda:

```text
Masuk Chase jika jarak < 10
Keluar Chase jika jarak > 13
```

Sedangkan tanpa hysteresis, kondisi menjadi simetris:

```text
Chase jika jarak < 10
Patrol jika jarak >= 10
```

Tanpa hysteresis, jika jarak player berada di sekitar `10`, misalnya `9.9` lalu `10.1`, NPC akan terus berganti antara `Chase` dan `Patrol`. Hasilnya perilaku terlihat bergetar, animasi tidak stabil, dan movement NPC menjadi tidak natural. Dengan hysteresis, terdapat **zona stabil** antara `10` dan `13`. Jika NPC sudah berada di state `Chase`, ia tidak langsung kembali ke `Patrol` hanya karena jarak naik sedikit di atas `10`. Ia baru keluar dari `Chase` jika jarak melewati `13`. Sebaliknya, jika NPC masih `Patrol`, ia baru masuk `Chase` jika jarak turun di bawah `10`.

Prinsip yang sama bisa diterapkan pada jarak serangan. Contoh pada slide:

```text
attackRange = 2
stopAttackRange = 3
```

Artinya:

- NPC mulai menyerang jika jarak player `< 2`.
- NPC berhenti menyerang jika jarak player `> 3`.
- Jika jarak berada di antara `2` dan `3`, NPC mempertahankan state serangan terakhir.

Dalam konteks FSM, ini berarti **kondisi transisi tidak harus simetris**. Kondisi untuk masuk ke sebuah state dapat berbeda dari kondisi untuk keluar dari state tersebut. Secara implementasi, logikanya bisa dibaca sebagai berikut:

```csharp
if (state == Patrol && jarak < 10)
    state = Chase;

else if (state == Chase && jarak > 13)
    state = Patrol;
```

Bagian penting dari kode ini adalah pemeriksaan `state` saat ini. Dengan memeriksa state, kita bisa memilih threshold yang berbeda tergantung apakah NPC sedang masuk ke state atau keluar dari state. Hasil yang diharapkan adalah transisi yang lebih halus, animasi yang lebih konsisten, dan perilaku NPC yang lebih mudah diprediksi.

Sebelum lanjut, mahasiswa perlu memahami bahwa hysteresis bukan sekadar menambah angka. Hysteresis adalah cara mendesain **ambang batas** agar state tidak sensitif terhadap fluktuasi kecil pada input, seperti jarak atau kondisi sensor yang berubah-ubah.

### Inti yang Harus Ditekankan

- **Hysteresis** menggunakan batas masuk dan keluar yang berbeda untuk satu state.
- Zona antara dua threshold berfungsi sebagai **area stabil** agar NPC tidak cepat berpindah state.
- Kondisi transisi FSM sebaiknya diperiksa berdasarkan state saat ini, misalnya `state == Patrol` atau `state == Chase`.
- Contoh `attackRange = 2` dan `stopAttackRange = 3` menunjukkan bahwa memulai dan mengakhiri serangan dapat menggunakan ambang berbeda.

### Transisi ke Slide Berikutnya

Hysteresis membantu mengurangi perpindahan state yang terlalu cepat karena ambang batas berbeda. Namun, ada situasi di mana NPC tetap perlu diberi jeda sebelum kembali ke state sebelumnya. Untuk itu, slide berikutnya membahas solusi lain, yaitu **timer**.

---

## Slide 038 - Solusi: Timer

### Narasi

Pada FSM, masalah tidak hanya muncul karena ambang jarak yang terlalu dekat, tetapi juga karena transisi state yang terjadi terlalu cepat. Jika player hanya hilang sesaat, NPC bisa langsung kembali ke `Patrol`, lalu mengejar lagi, sehingga perilakunya terlihat kaku dan tidak konsisten.

Solusi yang dibahas pada slide ini adalah **timer**. Timer digunakan untuk menunda perubahan state sampai kondisi tertentu bertahan cukup lama. Dengan cara ini, NPC tidak langsung "lupa" hanya karena player hilang sebentar.

Alur sederhana yang dimaksud adalah:

```text
Player hilang
    ↓
Tunggu 2 detik
    ↓
Baru kembali Patrol
```

Artinya, ketika kondisi player hilang masih terjadi, sistem tidak langsung melakukan transisi ke `Patrol`. Sistem menunggu selama durasi tertentu. Jika player masih hilang setelah durasi itu, barulah NPC kembali ke `Patrol`. Jika player ditemukan kembali sebelum timer habis, transisi ke `Patrol` tidak perlu dilakukan.

Variabel yang digunakan pada slide adalah:

```csharp
float lostPlayerTimer;
float lostPlayerDelay = 2f;
```

Variabel `lostPlayerTimer` berfungsi sebagai penghitung waktu selama player hilang. Variabel `lostPlayerDelay` adalah ambang waktu yang menentukan kapan transisi diizinkan. Nilai `2f` berarti 2 detik.

Secara sederhana, urutan eksekusinya adalah:

```csharp
if (playerLost)
{
    lostPlayerTimer += Time.deltaTime;

    if (lostPlayerTimer >= lostPlayerDelay)
    {
        ChangeState(Patrol);
        lostPlayerTimer = 0f;
    }
}
else
{
    lostPlayerTimer = 0f;
}
```

Bagian penting dari kode ini adalah `lostPlayerTimer += Time.deltaTime`. Baris ini membuat timer bertambah setiap frame selama kondisi hilang masih terjadi. Kondisi `lostPlayerTimer >= lostPlayerDelay` memastikan transisi hanya terjadi setelah jeda terpenuhi. Reset timer penting agar jeda tidak menumpuk dan perilaku NPC tetap responsif.

Hasil yang diharapkan adalah NPC terlihat lebih natural. NPC tidak langsung kembali `Patrol` hanya karena player hilang sesaat, tetapi memberi kesan bahwa NPC masih memperhatikan posisi terakhir player. Dalam konteks FSM, timer berfungsi seperti **filter waktu** pada transisi state.

### Inti yang Harus Ditekankan

- **Timer** digunakan untuk menunda transisi state agar NPC tidak bereaksi terhadap perubahan kondisi yang terlalu cepat.
- `lostPlayerTimer` mengukur durasi kondisi, sedangkan `lostPlayerDelay` menentukan ambang waktu sebelum transisi diizinkan.
- Timer membuat perilaku NPC lebih natural karena NPC tidak langsung "lupa" saat player hilang sesaat.
- Timer bekerja sebagai penunda waktu pada transisi FSM, bukan sebagai pengganti kondisi atau ambang jarak.

### Transisi ke Slide Berikutnya

Setelah NPC diberi jeda sebelum kembali ke `Patrol`, langkah berikutnya adalah mempertimbangkan apakah NPC perlu melakukan tindakan tambahan, seperti mencari player, sebelum benar-benar kembali patrol.

---

## Slide 039 - Search sebagai State Tambahan

### Narasi

Slide sebelumnya membahas **timer** agar NPC tidak langsung berpindah state ketika pemain hilang. Timer memang memperbaiki masalah transisi yang terlalu cepat, tetapi timer saja hanya menunda perubahan. Pada slide ini, kita menambahkan perilaku yang lebih bermakna, yaitu state `Search`.

Intuisi praktisnya sederhana. Ketika NPC sedang mengejar pemain dan pemain tiba-tiba hilang, NPC tidak perlu langsung kembali patroli. NPC dapat melakukan pencarian singkat di area terakhir kali pemain terlihat. Perilaku ini membuat NPC terasa lebih memperhatikan lingkungan dan memiliki **memori terbatas**.

Alurnya dapat dibaca sebagai berikut:

```text
Chase
  ↓ player hilang
Search
  ↓ tidak ditemukan
Patrol
```

Pada kondisi `Chase`, NPC sedang mengejar pemain. Jika pemain tidak lagi terlihat, NPC masuk ke `Search`. Selama `Search`, NPC melakukan beberapa tindakan. Jika pencarian gagal, NPC kembali ke `Patrol`.

Perilaku `Search` biasanya terdiri dari beberapa langkah:

1. NPC menuju **last known position**, yaitu posisi terakhir pemain terlihat.
2. NPC berputar atau mencari pemain di sekitar posisi tersebut.
3. NPC menunggu beberapa detik, misalnya menggunakan timer.
4. Jika pemain tidak ditemukan, NPC keluar dari `Search` dan kembali ke `Patrol`.

Langkah-langkah ini penting karena `Search` bukan sekadar fungsi kecil, melainkan state yang memiliki perilaku sendiri. State ini memiliki kondisi masuk, perilaku selama state aktif, dan kondisi keluar. Dengan cara ini, NPC tidak hanya bereaksi terhadap pemain yang terlihat, tetapi juga menggunakan informasi terakhir yang diketahui.

Yang perlu dipahami mahasiswa adalah perbedaan antara menunda transisi dan menambahkan state. Timer membuat perubahan state lebih halus, tetapi `Search` memberi tujuan perilaku: mencari pemain di lokasi terakhir. Inilah yang membuat NPC lebih cerdas daripada langsung kembali patroli.

### Inti yang Harus Ditekankan

- `Search` adalah state tambahan antara `Chase` dan `Patrol`.
- `Search` menggunakan **last known position**, gerakan mencari, dan timer.
- State ini memiliki kondisi masuk, perilaku aktif, dan kondisi keluar.
- `Search` membuat NPC lebih natural karena memiliki memori terbatas terhadap posisi terakhir pemain.

### Transisi ke Slide Berikutnya

Setelah memahami `Search` sebagai state tambahan, slide berikutnya akan menyusun diagram FSM lengkap yang menghubungkan `Patrol`, `Chase`, dan `Search`, termasuk kondisi ketika pemain terlihat lagi.

---

## Slide 040 - FSM dengan Search

### Narasi

Pada slide ini, kita melihat **Finite State Machine** yang sudah diperluas dengan state **`Search`**. Sebelumnya, NPC hanya berpindah antara `Patrol` dan `Chase`. Sekarang, ketika NPC kehilangan target, ia tidak langsung kembali ke `Patrol`, melainkan masuk ke perilaku pencarian yang lebih masuk akal.

Diagram berikut menunjukkan alur state dan kondisi transisinya:

```text
Patrol ── player terlihat ──→ Chase
  ▲                           │
  │                           │ player hilang
  │                           ▼
  └──── tidak ditemukan ─── Search
                              │
                              │ player terlihat lagi
                              ▼
                            Chase
```

Secara sederhana, alurnya dapat dibaca sebagai berikut:

1. NPC memulai perilaku di state `Patrol`.
2. Jika `player` terlihat, NPC beralih ke state `Chase`.
3. Jika `player` hilang saat dikejar, NPC beralih ke state `Search`.
4. Di state `Search`, NPC menggunakan informasi terakhir yang diketahui, misalnya posisi terakhir `player`.
5. Jika `player` terlihat lagi, NPC kembali ke `Chase`.
6. Jika pencarian gagal atau waktu tunggu habis, NPC kembali ke `Patrol`.

State `Search` penting karena NPC tidak hanya bereaksi terhadap kondisi saat ini, tetapi juga mengingat kondisi sebelumnya. Dengan kata lain, perilaku ini menggabungkan beberapa konsep dasar:

- **perception**, yaitu kemampuan mendeteksi apakah `player` terlihat atau hilang;
- **memory**, yaitu menyimpan posisi terakhir `player` sebelum hilang;
- **navigation**, yaitu bergerak menuju posisi terakhir tersebut;
- **FSM**, yaitu mengatur perilaku NPC melalui state dan transisi yang jelas.

Dari sisi implementasi, state `Search` biasanya tidak hanya berarti “diam”. NPC dapat bergerak ke `lastKnownPosition`, melakukan `lookAround`, menunggu beberapa detik, lalu memutuskan apakah kembali `Chase` atau `Patrol`. Keputusan ini membuat NPC terasa lebih hidup, karena ia seolah masih berusaha menemukan pemain, bukan sekadar kehilangan target lalu kembali patroli.

Untuk praktikum, state `Search` dapat dijadikan pengembangan opsional. Mahasiswa sebaiknya memastikan FSM dasar `Patrol` dan `Chase` sudah berjalan dengan benar terlebih dahulu, baru kemudian menambahkan `Search` sebagai peningkatan perilaku.

### Inti yang Harus Ditekankan

- **`Search`** adalah state tambahan yang membuat transisi dari `Chase` ke `Patrol` tidak terjadi secara langsung.
- Kondisi transisi utama adalah `player terlihat`, `player hilang`, `tidak ditemukan`, dan `player terlihat lagi`.
- State `Search` menghubungkan **perception**, **memory**, **navigation**, dan **FSM** dalam satu perilaku NPC.
- Untuk praktikum, `Search` dapat menjadi pengembangan opsional setelah FSM dasar stabil.

### Transisi ke Slide Berikutnya

Setelah memahami FSM datar dengan state `Patrol`, `Chase`, dan `Search`, langkah berikutnya adalah melihat bagaimana beberapa state dapat dikelompokkan menjadi struktur yang lebih rapi, yaitu **Hierarchical FSM**.

---

## Slide 041 - Hierarchical FSM

### Narasi

Pada slide ini kita masuk ke **Hierarchical FSM**, yaitu bentuk pengembangan dari FSM biasa. Pada FSM sederhana, semua state biasanya berada pada satu level yang sama. Misalnya `Idle`, `Patrol`, `Chase`, `Attack`, dan `Flee` semuanya menjadi state utama. Masalahnya, ketika perilaku NPC bertambah, struktur itu menjadi datar dan sulit dibaca.

**Hierarchical FSM** mengatasi hal ini dengan membuat **state induk** yang memuat beberapa **sub-state**. State induk menggambarkan kelompok perilaku yang lebih luas, sedangkan sub-state menggambarkan perilaku yang lebih spesifik di dalam kelompok itu.

Contoh sederhana:

```text
Combat
├── Chase
├── Attack
└── Flee
```

Di sini, `Combat` bukan perilaku yang terlalu detail, melainkan kategori. Ketika NPC berada dalam kondisi `Combat`, sistem perilaku hanya perlu memilih salah satu sub-state di dalamnya, yaitu `Chase`, `Attack`, atau `Flee`.

Struktur yang lebih lengkap bisa terlihat seperti ini:

```text
Enemy
├── Normal
│   ├── Idle
│   └── Patrol
│
└── Combat
    ├── Chase
    ├── Attack
    └── Flee
```

Dalam struktur ini, `Enemy` memiliki dua state utama, yaitu `Normal` dan `Combat`. State `Normal` memuat perilaku dasar ketika NPC tidak sedang bertempur, seperti `Idle` dan `Patrol`. State `Combat` memuat perilaku ketika NPC sedang menghadapi ancaman, seperti `Chase`, `Attack`, dan `Flee`.

Cara membacanya adalah sebagai dua lapisan keputusan. Lapisan pertama menentukan mode besar NPC, misalnya apakah NPC sedang `Normal` atau `Combat`. Lapisan kedua menentukan perilaku spesifik di dalam mode tersebut. Dengan cara ini, transisi antar perilaku kecil tidak perlu selalu melewati semua state utama.

Sebagai intuisi praktis, bayangkan NPC yang sedang `Patrol`. Jika pemain terlihat, NPC dapat berpindah ke state `Combat`. Setelah itu, di dalam `Combat`, NPC bisa memilih `Chase` jika jarak masih jauh, `Attack` jika jarak dekat, atau `Flee` jika NPC perlu mundur. Ketika ancaman hilang, NPC dapat kembali ke `Normal` dan melanjutkan `Idle` atau `Patrol`.

Yang perlu dipahami mahasiswa sebelum lanjut adalah bahwa **Hierarchical FSM** bukan berarti menambah state baru secara acak. Tujuannya adalah **mengelompokkan state** berdasarkan konteks perilaku. Dengan pengelompokan ini, desain perilaku menjadi lebih rapi, lebih mudah dibaca, dan lebih mudah dikembangkan.

### Inti yang Harus Ditekankan

- **Hierarchical FSM** adalah FSM yang memiliki **state induk** dan **sub-state**.
- State induk seperti `Normal` dan `Combat` mewakili kelompok perilaku, sedangkan sub-state seperti `Idle`, `Patrol`, `Chase`, `Attack`, dan `Flee` mewakili perilaku spesifik.
- Struktur hierarki membantu NPC mengambil keputusan dalam dua lapisan: menentukan mode utama terlebih dahulu, lalu memilih perilaku di dalam mode tersebut.
- Pengelompokan state membuat desain perilaku lebih rapi dan mengurangi kesan datar pada FSM sederhana.

### Transisi ke Slide Berikutnya

Setelah memahami bentuk struktur **Hierarchical FSM**, langkah berikutnya adalah memahami mengapa struktur ini dibutuhkan ketika jumlah state dan transisi semakin banyak.

---

## Slide 042 - Mengapa Hierarchical FSM Dibutuhkan?

### Narasi

Pada slide sebelumnya, kita sudah melihat bahwa **Hierarchical FSM** adalah FSM yang memiliki state besar dan sub-state. Di sini kita fokus pada alasan mengapa struktur berlapis itu dibutuhkan.

**Finite State Machine** sederhana bekerja dengan baik ketika perilaku NPC masih terbatas. Setiap state mewakili satu kondisi, dan transition menghubungkan kondisi yang satu ke kondisi lainnya. Namun, ketika jumlah state bertambah, diagram mulai menjadi padat dan sulit dibaca.

Sebagai ilustrasi, bayangkan sebuah enemy yang memiliki state berikut:

```text
Idle
Patrol
Alert
Chase
Attack
Reload
TakeCover
Flee
Search
Dead
Stunned
```

Daftar ini menunjukkan bahwa perilaku NPC tidak hanya bergerak atau menyerang, tetapi juga merespons kondisi seperti kehabisan amunisi, terluka, atau kehilangan target.

Masalah utama muncul ketika state-state tersebut berada pada level yang sama. Semakin banyak state, semakin banyak transition yang perlu didefinisikan. Akibatnya, desain menjadi sulit dikelola karena setiap state harus mengetahui banyak state lain yang mungkin menjadi tujuan transisi.

Hal ini juga membuat perubahan kecil menjadi berisiko. Jika kita ingin menambah satu perilaku baru, kita mungkin harus memeriksa banyak transition yang sudah ada. Dalam implementasi, kondisi seperti ini dapat menyebabkan logika yang tumpang tindih dan lebih sulit diuji.

**Hierarchical FSM** membantu dengan mengelompokkan state yang memiliki hubungan perilaku yang dekat. State-state kecil dapat ditempatkan di dalam state besar, sehingga struktur menjadi berlapis.

Manfaat utamanya adalah:

- mengelompokkan state yang sejenis,
- mengurangi transition berulang,
- membuat desain lebih rapi,
- memisahkan perilaku umum dan perilaku khusus.

Dengan pengelompokan ini, transisi antar kelompok perilaku dapat diletakkan pada level parent. Sementara itu, sub-state hanya mengurus detail perilaku di dalam kelompok tersebut.

Secara intuitif, HFSM membuat desain lebih mudah dibaca. Alih-alih melihat banyak state yang saling terhubung secara datar, kita melihat beberapa mode utama yang masing-masing memiliki perilaku internal.

Hal yang penting dipahami sebelum lanjut adalah bahwa HFSM bukan berarti menambah state baru secara sembarangan. HFSM adalah cara mereorganisasi state yang sudah ada agar transisi dan tanggung jawab perilaku lebih jelas.

### Inti yang Harus Ditekankan

- FSM datar menjadi sulit dikelola ketika jumlah state dan transition meningkat.
- HFSM membantu dengan mengelompokkan state menjadi state besar dan sub-state.
- Manfaat utamanya adalah mengurangi transition berulang, merapikan desain, dan memisahkan perilaku umum dari perilaku khusus.

### Transisi ke Slide Berikutnya

Setelah memahami alasan mengapa struktur hierarkis dibutuhkan, kita akan melihat contoh konkretnya pada slide berikutnya, yaitu struktur enemy dengan mode patrol dan combat serta transition global yang berlaku dari sub-state.

---

## Slide 043 - Contoh Hierarchical FSM Enemy

### Narasi

Pada slide ini kita melihat contoh **Hierarchical FSM** untuk musuh dalam game. Tujuannya bukan hanya menampilkan state, tetapi menunjukkan bagaimana perilaku musuh dikelompokkan menjadi lapisan yang lebih mudah dikelola.

```text
Enemy FSM
│
├── Alive
│   │
│   ├── Patrol Mode
│   │   ├── Idle
│   │   └── Patrol
│   │
│   └── Combat Mode
│       ├── Chase
│       ├── Attack
│       └── Flee
│
└── Dead
```

Struktur ini dimulai dari state utama `Enemy FSM`. Di level teratas, ada dua kondisi besar: `Alive` dan `Dead`. State `Alive` bersifat **composite state**, artinya ia tidak hanya satu perilaku, tetapi memuat sub-state lain. Sementara `Dead` adalah kondisi akhir ketika musuh tidak lagi bisa berperilaku.

Di dalam `Alive`, perilaku dibagi menjadi dua mode utama:

- `Patrol Mode`: memuat `Idle` dan `Patrol`, digunakan ketika musuh tidak sedang bertempur.
- `Combat Mode`: memuat `Chase`, `Attack`, dan `Flee`, digunakan ketika musuh berinteraksi dengan pemain atau ancaman.

Pembagian ini penting karena transisi kecil tetap berada di dalam mode yang sama. Misalnya, musuh bisa berpindah dari `Idle` ke `Patrol` tanpa harus menyentuh state `Chase` atau `Attack`. Jika situasi berubah, misalnya pemain terdeteksi, sistem cukup berpindah dari `Patrol Mode` ke `Combat Mode`.

Ada juga **transition global** yang didefinisikan di level atas:

```text
Alive → Dead
jika health <= 0
```

Artinya, selama musuh berada di `Alive`, tidak peduli sub-state aktifnya `Idle`, `Patrol`, `Chase`, `Attack`, atau `Flee`, kondisi `health <= 0` tetap memicu perpindahan ke `Dead`. Dalam implementasi, pengecekan ini biasanya dilakukan pada setiap update perilaku musuh, lalu jika kondisi terpenuhi, state aktif diakhiri dan musuh masuk ke `Dead`.

Urutan perilaku yang perlu dipahami mahasiswa adalah:

1. Musuh dimulai pada `Alive`, misalnya di `Patrol Mode`.
2. Di dalam `Patrol Mode`, musuh bisa berada di `Idle` atau `Patrol`.
3. Jika kondisi tempur terpenuhi, musuh berpindah ke `Combat Mode`.
4. Di `Combat Mode`, musuh memilih perilaku seperti `Chase`, `Attack`, atau `Flee`.
5. Jika `health <= 0`, musuh berpindah ke `Dead` dari mana pun ia berada di dalam `Alive`.

Intuisi praktisnya adalah: hierarki membuat perilaku lokal tetap rapi, sementara aturan global seperti kematian hanya ditulis sekali. Mahasiswa perlu memahami bahwa `Alive` bukan sekadar label, tetapi kelompok state yang memiliki aturan bersama.

### Inti yang Harus Ditekankan

- `Alive` adalah **composite state** yang memuat `Patrol Mode` dan `Combat Mode`, sedangkan `Dead` adalah state utama di luar `Alive`.
- Transisi lokal terjadi di dalam mode, misalnya `Idle → Patrol` atau `Chase → Attack`, sedangkan perubahan mode menandai pergeseran perilaku yang lebih besar.
- Transition global `Alive → Dead` jika `health <= 0` berlaku untuk semua sub-state di dalam `Alive`, sehingga tidak perlu membuat transisi `Idle → Dead`, `Patrol → Dead`, `Chase → Dead`, dan seterusnya.

### Transisi ke Slide Berikutnya

Dengan contoh ini, kita sudah melihat bagaimana hierarki menyusun state musuh. Selanjutnya, kita akan membandingkan struktur ini dengan FSM datar untuk memahami keuntungan utama dari Hierarchical FSM.

---

## Slide 044 - Keuntungan Hierarchical FSM

### Narasi

Slide ini menjelaskan **mengapa Hierarchical FSM lebih rapi** dibandingkan FSM datar ketika jumlah state bertambah. Pada contoh sebelumnya, enemy memiliki beberapa mode perilaku, seperti `Patrol Mode` dan `Combat Mode`, yang masing-masing berisi sub-state. Jika struktur ini tidak dibuat hierarkis, setiap sub-state harus memiliki transition sendiri ke state tertentu.

Contoh tanpa hierarchy terlihat seperti ini:

```text
Idle → Dead
Patrol → Dead
Chase → Dead
Attack → Dead
Flee → Dead
Search → Dead
```

Artinya, jika enemy bisa mati dari kondisi apa pun, kita harus menulis transition ke `Dead` dari hampir semua state aktif. Jumlah transition menjadi banyak, dan setiap kali menambah state baru, kita harus mengecek apakah state tersebut juga perlu transition ke `Dead`.

Dengan hierarchy, struktur menjadi lebih ringkas:

```text
Alive → Dead
```

Karena semua state aktif berada di bawah parent state `Alive`, maka transition global cukup diletakkan pada level `Alive`. Saat `health <= 0`, enemy berpindah ke `Dead` tanpa perlu menulis ulang transition dari `Idle`, `Patrol`, `Chase`, `Attack`, `Flee`, atau `Search`.

Manfaat utama dari struktur ini adalah:

- **transition lebih sedikit**, karena kondisi umum cukup diletakkan di parent state;
- **mudah menambahkan state baru**, karena state baru cukup dimasukkan ke bawah parent yang sesuai;
- **perilaku global lebih rapi**, karena aturan yang berlaku untuk banyak state tidak tersebar di banyak tempat.

Secara praktis, ini sangat berguna untuk NPC yang memiliki banyak perilaku. Misalnya, jika kita ingin menambah state `Search` di bawah `Combat Mode`, kita tidak perlu membuat ulang semua transition global. State baru cukup mengikuti struktur hierarki yang sudah ada.

Sebelum lanjut, mahasiswa perlu memahami bahwa **hierarki bukan hanya soal tampilan diagram**, tetapi juga soal cara kita mengelola aturan perpindahan state. Semakin kompleks perilaku karakter, semakin besar keuntungan dari struktur yang mengelompokkan state berdasarkan konteksnya.

### Inti yang Harus Ditekankan

- **Hierarchical FSM mengurangi jumlah transition** karena aturan umum dapat diletakkan di parent state.
- **Penambahan state baru lebih mudah** karena cukup dimasukkan ke bawah parent yang relevan.
- **Perilaku global menjadi lebih konsisten**, misalnya transisi ke `Dead` tidak perlu ditulis ulang dari setiap sub-state.

### Transisi ke Slide Berikutnya

Setelah memahami keuntungan struktur hierarki, langkah berikutnya adalah melihat kondisi yang berlaku dari state mana pun, yaitu **state global**.

---

## Slide 045 - State Global

### Narasi

Pada slide ini kita melihat konsep **state global** dalam **Finite State Machine**. State global bukan berarti satu state khusus yang selalu aktif, melainkan kondisi yang berlaku dari state mana pun. Artinya, sebelum NPC memutuskan perilaku berdasarkan state saat ini, sistem perlu memeriksa apakah ada kondisi yang harus mengintervensi semua state.

Intuisi praktisnya sederhana: jika NPC sudah mati, tidak relevan lagi apakah ia sedang `Patrol`, `Chase`, atau `Attack`. Jika game sedang `Pause`, semua perilaku harus berhenti. Jika cutscene aktif, NPC mungkin tidak boleh bereaksi. Kondisi-kondisi ini bersifat global karena tidak bergantung pada state aktif.

Contoh umum:

- `HP habis` → `Dead`
- `HP rendah` → `Flee`
- `terkena stun` → `Stunned`
- `game paused` → `Pause`
- `cutscene aktif` → `Disabled`

Dalam implementasi sederhana, kondisi global biasanya diperiksa di awal update perilaku NPC:

```csharp
if (health <= 0)
{
    ChangeState(EnemyState.Dead);
    return;
}
```

Potongan kode ini menunjukkan pola penting. Variabel `health` diperiksa terlebih dahulu. Jika nilainya nol atau kurang, sistem langsung memanggil `ChangeState(EnemyState.Dead)` untuk memindahkan NPC ke state `Dead`. Perintah `return` menghentikan eksekusi update saat itu, sehingga logika state sebelumnya tidak dilanjutkan. Dengan cara ini, NPC tidak akan tetap berjalan, mengejar, atau menyerang setelah mati.

Poin yang harus dipahami mahasiswa adalah urutan pemeriksaan. **Condition global** biasanya diperiksa **sebelum condition khusus state**. Urutan ini penting karena kondisi global memiliki prioritas lebih tinggi: ia dapat memotong perilaku lokal. Jika urutan dibalik, NPC bisa saja melakukan aksi state lama sebelum sempat masuk ke state global, sehingga muncul bug seperti musuh mati masih bergerak atau NPC stunned masih menyerang.

Secara desain, state global membuat FSM lebih rapi dan mudah dirawat. Daripada menambahkan transisi `Idle → Dead`, `Patrol → Dead`, `Chase → Dead`, dan seterusnya, kita cukup memastikan kondisi `health <= 0` selalu diperiksa di level global. Pendekatan ini juga membantu ketika jumlah state bertambah, karena perilaku yang bersifat universal tidak perlu diulang di setiap state.

### Inti yang Harus Ditekankan

- **State global** adalah kondisi yang berlaku dari state mana pun dan dapat mengintervensi perilaku NPC.
- Contoh kondisi global: `HP habis`, `HP rendah`, `stun`, `pause`, dan `cutscene aktif`.
- Kondisi global sebaiknya diperiksa **sebelum** kondisi khusus state agar perilaku tidak salah.
- Pola `ChangeState(...)` diikuti `return` memastikan transisi terjadi segera dan logika state lama tidak dilanjutkan.
- State global mengurangi transisi berulang dan membuat FSM lebih mudah dikembangkan.

### Transisi ke Slide Berikutnya

Setelah memahami kondisi global, langkah berikutnya adalah merancang perilaku NPC secara utuh: menentukan tujuan, state, condition, diagram transisi, dan prioritas sebelum masuk ke implementasi.

---

## Slide 046 - Desain Perilaku NPC

### Narasi

Sebelum menulis kode, kita perlu memahami bahwa **FSM** untuk NPC bukan sekadar kumpulan `state`. Ia adalah rancangan perilaku yang harus dipikirkan secara utuh agar NPC bergerak, bereaksi, dan mengambil keputusan secara konsisten.

Slide ini menampilkan alur desain FSM NPC:

```text
1. Tentukan tujuan NPC
2. Daftar perilaku utama
3. Tentukan state
4. Tentukan condition
5. Buat diagram transition
6. Tentukan prioritas transition
7. Tentukan parameter
8. Implementasikan
9. Debug dan tuning
```

Alur ini penting karena **FSM sebaiknya didesain sebelum coding**. Jika kita langsung menulis kode tanpa rancangan, biasanya akan muncul masalah seperti `state` yang tumpang tindih, `transition` yang tidak jelas, atau perilaku NPC yang sulit diprediksi.

Beberapa poin utama dari alur ini adalah:

- **Tujuan NPC** menjadi dasar perilaku, karena NPC yang berperan sebagai penjaga, musuh, atau warga akan memiliki kebutuhan perilaku yang berbeda.
- **Perilaku utama** membantu kita memetakan kemampuan dasar NPC, misalnya bergerak, menyerang, menghindar, atau diam.
- **State** adalah kondisi perilaku yang bisa dimiliki NPC, misalnya `Idle`, `Patrol`, `Chase`, atau `Attack`.
- **Condition** adalah aturan yang menentukan kapan NPC berpindah dari satu `state` ke `state` lain.
- **Diagram transition** membantu kita melihat hubungan antar-`state` secara visual, sehingga alur perilaku lebih mudah dipahami.
- **Prioritas transition** penting untuk menghindari konflik ketika beberapa `condition` terpenuhi bersamaan.
- **Parameter** digunakan untuk mengatur nilai seperti jarak deteksi, kecepatan, durasi, atau cooldown.
- **Implementasi** adalah tahap penerjemahan rancangan ke dalam kode.
- **Debug dan tuning** memastikan perilaku NPC berjalan sesuai desain dan terasa natural dalam game.

Diagram yang jelas akan mengurangi error implementasi. Dengan diagram, kita bisa memeriksa apakah setiap `state` memiliki `entry`, `exit`, `update`, dan `transition` yang masuk akal. Kita juga bisa melihat apakah ada `state` yang tidak pernah digunakan atau `condition` yang saling bertentangan.

Intinya, desain FSM NPC adalah tahap perencanaan perilaku. Semakin jelas rancangannya, semakin mudah kita mengimplementasikan, memperbaiki, dan mengembangkan perilaku NPC di tahap berikutnya.

### Inti yang Harus Ditekankan

- **FSM NPC harus didesain sebelum coding**, bukan langsung ditulis berdasarkan tebakan.
- Setiap `state`, `condition`, dan `transition` perlu memiliki tujuan yang jelas.
- **Diagram transition** membantu mengurangi error dan memudahkan debugging.
- **Prioritas transition** penting agar NPC tidak bingung ketika beberapa kondisi terpenuhi bersamaan.
- **Parameter** membuat perilaku NPC lebih mudah diatur dan di-tuning.

### Transisi ke Slide Berikutnya

Setelah memahami alur desain FSM NPC secara keseluruhan, kita akan mulai dari langkah pertama, yaitu menentukan tujuan NPC.

---

## Slide 047 - Langkah 1: Tentukan Tujuan NPC

### Narasi

Sebelum masuk ke `state`, `condition`, atau diagram `transition`, kita perlu menjawab pertanyaan paling dasar terlebih dahulu:

```text
NPC ini berperan sebagai apa?
```

Pertanyaan ini penting karena peran NPC menentukan **ruang perilaku** yang wajar. Dalam **Finite State Machine**, setiap `state` seharusnya mewakili perilaku yang relevan dengan peran tersebut. Jika peran belum jelas, mahasiswa cenderung membuat `state` yang terlalu banyak, terlalu umum, atau tidak konsisten.

Contoh peran NPC yang umum adalah:

- `guard`
- `monster`
- `animal`
- `boss`
- `civilian`
- `ally`
- `turret`
- `merchant`

Peran ini bukan sekadar label visual. Peran menentukan **tujuan perilaku** NPC. Misalnya, `guard` biasanya menjaga area, `monster` mungkin mengejar atau menyerang, `civilian` mungkin menghindari konflik, `turret` hanya menyerang target dalam jangkauan, dan `merchant` lebih berfokus pada interaksi.

Dari sini mahasiswa perlu memahami bahwa **enemy agresif berbeda dengan enemy defensif**. `Enemy agresif` mungkin memiliki prioritas `transition` menuju perilaku ofensif lebih tinggi. Sebaliknya, `enemy defensif` mungkin lebih sering mundur, menjaga jarak, atau menunggu. Perbedaan ini akan memengaruhi `state`, `condition`, dan **prioritas transition** pada tahap berikutnya.

Begitu pula `civilian` berbeda dengan `guard`. `Civilian` mungkin tidak memiliki perilaku menyerang, sehingga `state` ofensif tidak relevan. `Guard` mungkin memiliki perilaku menjaga pos, mengejar intruder, atau memanggil bantuan. Dengan menentukan peran terlebih dahulu, mahasiswa dapat membatasi perilaku yang perlu dipertimbangkan dan menghindari desain FSM yang terlalu kompleks.

Inti dari langkah ini adalah: **tujuan NPC menjadi dasar desain perilaku**, bukan sekadar deskripsi karakter. Jika peran sudah jelas, mahasiswa akan lebih mudah memilih `state` yang tepat, menentukan `condition` yang masuk akal, dan membangun diagram `transition` yang lebih rapi.

### Inti yang Harus Ditekankan

- **Tujuan NPC** menentukan perilaku yang relevan dan membatasi ruang `state` dalam FSM.
- Peran seperti `guard`, `monster`, `civilian`, `turret`, dan `merchant` memiliki **tujuan perilaku** yang berbeda.
- **Enemy agresif** dan **enemy defensif** akan menghasilkan prioritas `transition` dan parameter yang berbeda.
- Menentukan peran sebelum coding membantu mengurangi `state` yang tidak perlu dan membuat desain FSM lebih konsisten.

### Transisi ke Slide Berikutnya

Setelah peran NPC sudah jelas, langkah berikutnya adalah menyusun daftar perilaku utama yang mungkin dibutuhkan oleh NPC tersebut.

---

## Slide 048 - Langkah 2: Daftar Perilaku

### Narasi

Setelah peran NPC ditentukan, langkah berikutnya adalah menyusun **daftar perilaku** yang akan dimiliki NPC. Dalam **Finite State Machine**, setiap perilaku ini akan menjadi **state** yang dapat dijalankan oleh script.

Untuk enemy praktikum, kita cukup memulai dari lima state inti:

```text
Patrol
Chase
Attack
Flee
Dead
```

Kelima state ini sudah cukup untuk membentuk perilaku dasar enemy:

- `Patrol` adalah perilaku default ketika NPC tidak sedang terganggu.
- `Chase` adalah perilaku mengejar ketika NPC menyadari keberadaan player.
- `Attack` adalah perilaku menyerang ketika player berada dalam jangkauan.
- `Flee` adalah perilaku mundur atau menjauh ketika NPC berada dalam kondisi tidak menguntungkan.
- `Dead` adalah state akhir ketika NPC tidak dapat lagi berperilaku.

Selain state inti, ada beberapa perilaku tambahan yang bisa dipertimbangkan:

- `Idle`
- `Alert`
- `Search`
- `Return`
- `Stunned`

Namun, state tambahan ini **tidak wajib** pada tahap awal. Mahasiswa sebaiknya memulai dari state yang sedikit terlebih dahulu.

Alasannya sederhana. Semakin banyak state, semakin banyak hubungan perpindahan yang harus dirancang. Jika perilaku dasar belum stabil, penambahan state baru justru membuat sistem sulit diuji dan sulit diperbaiki.

Secara praktis, ketika NPC berada pada satu state, script akan menjalankan perilaku state tersebut sampai ada kondisi yang memicu perpindahan ke state lain. Karena itu, daftar perilaku harus dibuat jelas, tidak tumpang tindih, dan mudah diimplementasikan.

Oleh karena itu, prinsip yang harus dipahami adalah: **tambahkan state hanya jika perilaku tersebut sudah jelas, dibutuhkan, dan dapat diimplementasikan secara konsisten**. Dengan cara ini, desain NPC menjadi lebih rapi, mudah dibaca, dan lebih mudah dikembangkan.

### Inti yang Harus Ditekankan

- **Daftar perilaku** adalah dasar pembentukan **state** dalam FSM.
- Mulai dari state inti: `Patrol`, `Chase`, `Attack`, `Flee`, `Dead`.
- State tambahan seperti `Idle`, `Alert`, `Search`, `Return`, dan `Stunned` hanya ditambahkan jika perilaku sudah stabil.
- Hindari membuat terlalu banyak state di awal agar sistem tetap mudah diuji dan diperbaiki.

### Transisi ke Slide Berikutnya

Setelah daftar perilaku sudah ditentukan, langkah berikutnya adalah menentukan **condition** yang akan memicu perpindahan antar state.

---

## Slide 049 - Langkah 3: Tentukan Condition

### Narasi

Setelah perilaku enemy dirumuskan, langkah berikutnya adalah menentukan **condition** yang memicu perpindahan antar state. Dalam **Finite State Machine**, state tidak berubah secara sembarangan; perubahan terjadi ketika suatu kondisi terpenuhi.

Condition berfungsi sebagai pemicu transisi. Misalnya, enemy berpindah dari `Patrol` ke `Chase` ketika `canSeePlayer` bernilai `true`. Dari `Chase` ke `Attack` ketika jarak player sudah berada dalam jangkauan serangan.

Contoh condition untuk enemy praktikum dapat ditulis sebagai berikut:

```text
canSeePlayer
distanceToPlayer <= attackRange
distanceToPlayer > attackRange
health <= lowHealthThreshold
health <= 0
distanceToPlayer >= safeDistance
```

Setiap baris di atas sebaiknya menjadi nilai boolean yang dapat dihitung oleh script. Artinya, tidak cukup hanya menulis “player dekat” atau “HP rendah”. Mahasiswa perlu menentukan ukuran yang jelas, misalnya `attackRange`, `safeDistance`, dan `lowHealthThreshold`.

Beberapa condition memiliki makna berbeda:

- `canSeePlayer` biasanya dihitung dari line of sight, raycast, atau area pandang NPC.
- `distanceToPlayer <= attackRange` menandakan player sudah cukup dekat untuk diserang.
- `distanceToPlayer > attackRange` menandakan player masih terlalu jauh untuk menyerang.
- `health <= lowHealthThreshold` menandakan enemy mulai lemah dan perlu mundur.
- `health <= 0` menandakan enemy mati.
- `distanceToPlayer >= safeDistance` menandakan enemy sudah berada pada jarak aman.

Hal penting yang harus dipahami adalah condition harus **dapat dihitung**. Jika condition terlalu abstrak, implementasi menjadi sulit karena script tidak tahu kapan harus melakukan transisi. Dengan condition yang jelas, perilaku enemy menjadi lebih konsisten, mudah diuji, dan mudah dikembangkan.

Condition juga menjadi dasar untuk membuat diagram FSM. Setiap panah transisi pada diagram nanti akan diberi label condition yang memicunya.

### Inti yang Harus Ditekankan

- **Condition** adalah predikat boolean yang menentukan kapan state berubah.
- Condition harus berbasis data yang dapat dihitung, seperti jarak, health, dan visibilitas.
- Istilah abstrak harus diubah menjadi variabel dan threshold yang jelas.
- Condition menjadi dasar transisi dalam diagram FSM.

### Transisi ke Slide Berikutnya

Setelah condition ditentukan, langkah berikutnya adalah menyusun diagram FSM agar alur perilaku enemy dapat dilihat secara visual dan dicek kelengkapannya.

---

## Slide 050 - Langkah 4: Buat Diagram

### Narasi

Setelah state dan condition sudah ditentukan, langkah berikutnya adalah menyusun **diagram alur** untuk Finite State Machine. Diagram ini penting karena mengubah daftar state menjadi struktur perilaku yang lebih mudah dibaca. Dalam konteks NPC, diagram membantu kita melihat bagaimana karakter berpindah dari satu mode perilaku ke mode lain berdasarkan kondisi dunia.

```text
Patrol
  │ player terlihat
  ▼
Chase
  │ player dekat
  ▼
Attack
  │ HP rendah
  ▼
Flee
  │ aman
  ▼
Patrol
```

Pada diagram ini, `Patrol` adalah state awal. NPC bergerak mencari area atau berjalan pada rute tertentu. Ketika condition `player terlihat` terpenuhi, NPC berpindah ke `Chase`. State ini menunjukkan bahwa NPC mulai mengejar pemain. Jika `player dekat`, maka transisi ke `Attack` terjadi, di mana NPC melakukan serangan. Ketika `HP rendah`, NPC beralih ke `Flee` untuk menjauh. Setelah kondisi `aman` terpenuhi, NPC kembali ke `Patrol`.

Alur ini menunjukkan bahwa perilaku NPC tidak acak, melainkan dikendalikan oleh **transition** yang jelas. Setiap panah pada diagram mewakili keputusan: state mana yang aktif, condition apa yang dicek, dan state berikutnya apa yang akan dijalankan. Dalam implementasi game, struktur seperti ini sering dipakai untuk membuat perilaku musuh yang sederhana namun konsisten, terutama sebelum masuk ke sistem keputusan yang lebih kompleks.

Selain menggambarkan alur, diagram juga berfungsi sebagai alat validasi. Sebelum menulis script, kita bisa mengecek beberapa hal penting:

- apakah ada state yang tidak bisa dicapai,
- apakah ada state tanpa jalan keluar,
- apakah transition masuk akal secara gameplay.

Misalnya, jika `Flee` tidak pernah kembali ke state lain, NPC akan terjebak selamanya. Sebaliknya, jika `Attack` tidak memiliki kondisi keluar, NPC akan terus menyerang meskipun pemain sudah jauh. Dengan diagram, masalah seperti ini bisa terlihat lebih cepat.

Intuisi praktisnya adalah: diagram FSM membantu kita berpikir seperti desainer perilaku, bukan hanya seperti programmer. Kita bisa memastikan bahwa setiap state punya alasan, setiap transition punya condition, dan seluruh perilaku NPC terasa hidup namun tetap terkontrol.

### Inti yang Harus Ditekankan

- **Diagram FSM** membantu melihat alur perilaku NPC secara visual.
- Setiap state seperti `Patrol`, `Chase`, `Attack`, dan `Flee` harus memiliki transisi masuk dan keluar yang jelas.
- Diagram berguna untuk mendeteksi state yang tidak terjangkau, state tanpa keluar, atau transition yang tidak masuk akal.
- Struktur ini menjadi dasar sebelum menentukan parameter tuning pada slide berikutnya.

### Transisi ke Slide Berikutnya

Setelah alur state sudah jelas, langkah berikutnya adalah menentukan parameter yang mengatur perilaku NPC, seperti jarak pandang, jarak serangan, kecepatan, dan ambang HP.

---

## Slide 051 - Langkah 5: Tentukan Parameter

### Narasi

Setelah diagram state dibuat, langkah berikutnya adalah menentukan **parameter** yang mengatur perilaku NPC. Parameter berfungsi mengubah aturan yang masih bersifat kualitatif menjadi nilai yang dapat dihitung oleh program. Misalnya, kondisi “player terlihat” tidak cukup; kita perlu menentukan sejauh mana NPC dapat melihat dan seberapa lebar sudut penglihatannya.

Contoh parameter yang umum digunakan pada FSM NPC:

```text
visionRange
visionAngle
attackRange
attackCooldown
patrolSpeed
chaseSpeed
fleeSpeed
lowHealthThreshold
safeDistance
lostPlayerDelay
```

Parameter ini dapat dikelompokkan berdasarkan fungsinya:

- **Sensing**: `visionRange` dan `visionAngle` menentukan kapan NPC menyadari player.
- **Combat**: `attackRange` dan `attackCooldown` mengatur jarak serangan dan jeda antar serangan.
- **Movement**: `patrolSpeed`, `chaseSpeed`, dan `fleeSpeed` menentukan kecepatan NPC pada state berbeda.
- **Survival**: `lowHealthThreshold` dan `safeDistance` menentukan kapan NPC memilih melarikan diri.
- **Memory/lost target**: `lostPlayerDelay` memberi jeda sebelum NPC kembali ke state awal setelah kehilangan target.

Pada implementasi Unity, parameter sebaiknya dibuat dapat diubah tanpa harus mengubah logika inti. Contoh sederhana:

```csharp
[SerializeField] private float visionRange = 10f;
[SerializeField] private float attackRange = 2f;
```

Atribut `[SerializeField]` membuat field `private` tetap dapat ditampilkan di **Inspector**. Nilai default seperti `10f` dan `2f` menjadi titik awal, tetapi desainer atau pengembang dapat mengubahnya untuk menyesuaikan rasa gameplay. Dengan cara ini, satu FSM yang sama dapat menghasilkan NPC yang lebih waspada, lebih agresif, atau lebih mudah kabur hanya dengan mengganti nilai parameter.

Hal penting yang harus dipahami mahasiswa adalah bahwa parameter bukan sekadar angka acak. Setiap parameter memengaruhi **kapan transisi terjadi**, **seberapa cepat NPC bereaksi**, dan **bagaimana perilaku NPC dirasakan pemain**. Sebelum menulis kode, mahasiswa perlu menentukan satuan, nilai awal, dan rentang yang masuk akal untuk setiap parameter.

### Inti yang Harus Ditekankan

- Parameter mengubah diagram FSM menjadi perilaku yang dapat dihitung dan diuji.
- Nilai parameter menentukan kondisi transisi, kecepatan reaksi, dan rasa gameplay NPC.
- `SerializeField` memungkinkan parameter diubah di Inspector tanpa mengubah kode utama.

### Transisi ke Slide Berikutnya

Setelah parameter ditentukan, slide berikutnya akan membahas bagaimana parameter tersebut ditampilkan dan dimanfaatkan melalui Unity Inspector.

---

## Slide 052 - FSM dan Unity Inspector

### Narasi

Pada slide ini, kita melihat bagaimana parameter FSM dibuat lebih praktis melalui **Unity Inspector**. Sebelumnya kita sudah mengenal beberapa parameter penting seperti kecepatan patroli, kecepatan mengejar, jarak serangan, dan ambang kesehatan. Pada tahap ini, fokusnya adalah bagaimana parameter tersebut dapat diatur langsung dari editor tanpa harus membuka file script setiap kali.

Untuk itu, kita menggunakan atribut `SerializeField` pada variabel `private`.

```csharp
[SerializeField] private float patrolSpeed = 2f;
[SerializeField] private float chaseSpeed = 4f;
[SerializeField] private float attackRange = 2f;
[SerializeField] private float lowHealthThreshold = 30f;
```

Penulisan `private` tetap penting karena menjaga encapsulation. Artinya, variabel tidak boleh diakses sembarangan dari script lain. Namun, `SerializeField` membuat Unity menampilkan field tersebut di **Inspector**, sehingga nilai default di kode tetap ada, tetapi dapat diubah langsung dari editor.

Artinya, ketika komponen FSM dipasang pada GameObject NPC, mahasiswa dapat melihat dan mengubah nilai `patrolSpeed`, `chaseSpeed`, `attackRange`, dan `lowHealthThreshold` secara langsung. Nilai di Inspector dapat menimpa nilai default yang ada di kode, sehingga proses pengujian menjadi lebih cepat.

Keuntungan utama dari pendekatan ini adalah:

- mudah melakukan eksperimen,
- tidak perlu mengubah kode setiap kali ingin mencoba nilai baru,
- dosen dapat memberi tugas tuning parameter,
- mahasiswa dapat memahami efek parameter terhadap gameplay.

Dalam konteks FSM, parameter ini memengaruhi perilaku NPC. `patrolSpeed` menentukan kecepatan saat NPC berada pada state patroli, `chaseSpeed` menentukan kecepatan saat NPC mengejar, `attackRange` menentukan jarak di mana NPC dapat menyerang, dan `lowHealthThreshold` dapat digunakan untuk memicu perilaku bertahan atau mundur ketika kesehatan rendah.

Sebelum lanjut, hal penting yang harus dipahami adalah bahwa parameter ini bukan sekadar angka. Nilai yang terlalu besar atau terlalu kecil dapat membuat perilaku NPC terasa tidak masuk akal, misalnya NPC terlalu lambat, terlalu agresif, atau terlalu mudah kabur.

### Inti yang Harus Ditekankan

- `SerializeField` membuat variabel `private` tetap aman, tetapi dapat diatur di **Inspector**.
- Parameter FSM seperti `patrolSpeed`, `chaseSpeed`, `attackRange`, dan `lowHealthThreshold` memengaruhi perilaku NPC secara langsung.
- Tuning parameter di Inspector membantu mahasiswa memahami hubungan antara nilai numerik dan hasil gameplay.

### Transisi ke Slide Berikutnya

Setelah parameter dapat diatur melalui Inspector, langkah berikutnya adalah menghubungkan keputusan FSM dengan sistem navigasi. Pada slide berikutnya, kita akan melihat bagaimana FSM dapat mengatur `NavMeshAgent` untuk menjalankan perilaku seperti patroli, mengejar, menyerang, dan mundur.

---

## Slide 053 - FSM dan NavMeshAgent

### Narasi

Pada slide ini, kita melihat bagaimana **Finite State Machine** dapat dihubungkan dengan komponen navigasi di Unity, yaitu `NavMeshAgent`. Intuisi pentingnya adalah: **FSM menentukan keputusan perilaku**, sedangkan `NavMeshAgent` bertugas **menjalankan gerakan** berdasarkan keputusan tersebut.

Dengan kata lain, FSM tidak perlu menghitung path secara manual. FSM cukup memilih state yang aktif, lalu memberi perintah ke `NavMeshAgent` untuk bergerak ke tujuan tertentu atau berhenti.

```text
Patrol:
agent.SetDestination(currentWaypoint.position)

Chase:
agent.SetDestination(player.position)

Attack:
agent.isStopped = true

Flee:
agent.SetDestination(safePoint.position)
```

Pada contoh di atas, `agent` adalah referensi ke komponen `NavMeshAgent` yang terpasang pada NPC.

- **`Patrol`**: NPC bergerak ke waypoint tertentu menggunakan `agent.SetDestination(currentWaypoint.position)`. Biasanya, `currentWaypoint` dapat diganti secara berurutan agar NPC berjalan mengelilingi area.
- **`Chase`**: NPC mengejar pemain dengan `agent.SetDestination(player.position)`. Karena posisi pemain berubah, `NavMeshAgent` akan memperbarui path secara otomatis selama tujuan tetap diarahkan ke pemain.
- **`Attack`**: NPC berhenti bergerak dengan `agent.isStopped = true`. Pada state ini, NPC dapat melakukan animasi serangan, target facing, atau logika damage tanpa harus terus bergerak.
- **`Flee`**: NPC menjauh ke titik aman menggunakan `agent.SetDestination(safePoint.position)`. Ini berguna ketika NPC berada dalam kondisi lemah atau ingin menghindari ancaman.

Peran `NavMeshAgent` di sini adalah melakukan **pathfinding** di atas NavMesh. Komponen ini menghitung jalur, menghindari obstacle, dan menggerakkan transform NPC menuju destination yang diberikan.

Jadi, alur kerjanya adalah:

1. FSM memeriksa kondisi, misalnya jarak ke pemain atau nilai health.
2. FSM memilih state yang sesuai, misalnya `Patrol`, `Chase`, `Attack`, atau `Flee`.
3. FSM memanggil perintah navigasi yang sesuai.
4. `NavMeshAgent` mengeksekusi gerakan NPC di lingkungan game.

Pemisahan ini penting karena membuat perilaku NPC lebih rapi. Logika keputusan berada di FSM, sedangkan detail pergerakan dibiarkan ditangani oleh sistem navigasi.

### Inti yang Harus Ditekankan

- **FSM memutuskan state**, sedangkan `NavMeshAgent` menjalankan navigasi.
- `agent.SetDestination()` digunakan untuk memerintahkan NPC bergerak ke posisi tertentu.
- `agent.isStopped = true` digunakan untuk menghentikan NPC, misalnya saat state `Attack`.
- Pola ini membuat perilaku NPC lebih modular: logika perilaku dan sistem gerak terpisah.

### Transisi ke Slide Berikutnya

Jika NPC tidak menggunakan `NavMeshAgent`, kita masih bisa membuat pergerakan yang mirip dengan cara lain. Pada slide berikutnya, kita akan melihat bagaimana FSM dapat dipasangkan dengan **steering behavior** sebagai alternatif sistem gerak.

---

## Slide 054 - FSM dan Steering

### Narasi

Slide ini membahas bagaimana **Finite State Machine** atau **FSM** dapat digunakan untuk mengatur pergerakan NPC ketika sistem tidak memakai **NavMesh**. Intuisi pentingnya adalah: **FSM bertugas memutuskan state**, sedangkan **steering behavior** bertugas mengeksekusi gerak berdasarkan state tersebut. Dengan pemisahan ini, logika keputusan menjadi lebih rapi dan tidak tercampur dengan detail perhitungan gerak.

Contoh sederhana dapat dilihat pada pseudocode berikut:

```text
Patrol:
Arrive(currentWaypoint)

Chase:
Arrive(player)

Attack:
Stop and face player

Flee:
Flee(player)
```

Pada state `Patrol`, NPC menggunakan perilaku `Arrive(currentWaypoint)` untuk bergerak menuju waypoint tertentu. Perilaku `Arrive` biasanya membuat NPC bergerak mendekati target dan melambat ketika sudah dekat, sehingga gerakannya terlihat lebih natural daripada sekadar bergerak lurus tanpa pengendalian jarak.

Pada state `Chase`, NPC menggunakan `Arrive(player)` untuk mengejar pemain. Artinya, target gerak NPC berubah dari waypoint menjadi posisi pemain. Sementara itu, pada state `Attack`, NPC berhenti bergerak dan menghadap pemain melalui perilaku `Stop and face player`. State ini menunjukkan bahwa tidak semua state membutuhkan gerak; ada state yang lebih penting untuk orientasi atau aksi.

Pada state `Flee`, NPC menggunakan `Flee(player)` untuk menjauh dari pemain. Perilaku ini berlawanan dengan `Arrive`, karena tujuannya bukan mendekati target, tetapi bergerak menjauh dari ancaman. Dengan demikian, satu FSM dapat menghasilkan beberapa pola gerak yang berbeda hanya dengan mengganti steering behavior yang aktif.

Poin penting yang harus dipahami adalah **FSM tidak harus bergantung pada NavMesh**. NavMesh biasanya digunakan untuk pathfinding berbasis graf, tetapi steering behavior dapat digunakan untuk pengendalian gerak yang lebih lokal dan langsung. Karena itu, FSM dapat dipasangkan dengan berbagai sistem gerak, misalnya:

- `Transform` movement untuk gerak sederhana tanpa fisika,
- `Rigidbody` movement untuk gerak berbasis fisika,
- steering behavior untuk pengendalian arah dan kecepatan,
- `NavMeshAgent` untuk navigasi berbasis pathfinding.

Dengan cara ini, mahasiswa perlu melihat FSM sebagai lapisan keputusan yang relatif independen dari sistem gerak. Selama setiap state dapat memetakan perilaku gerak yang sesuai, NPC dapat bergerak secara konsisten meskipun implementasi geraknya berbeda-beda.

### Inti yang Harus Ditekankan

- **FSM menentukan state**, sedangkan **steering behavior menentukan cara gerak** pada state tersebut.
- Contoh perilaku steering yang umum adalah `Arrive`, `Flee`, dan `Stop and face player`.
- FSM tidak wajib menggunakan `NavMesh`; ia dapat bekerja dengan `Transform`, `Rigidbody`, steering behavior, atau `NavMeshAgent`.
- Pemisahan antara keputusan state dan eksekusi gerak membuat desain NPC lebih modular dan mudah dikembangkan.

### Transisi ke Slide Berikutnya

Setelah pergerakan NPC dapat diatur melalui state dan steering behavior, langkah berikutnya adalah memberikan umpan balik visual pada setiap state. Pada slide berikutnya, kita akan membahas bagaimana setiap state dapat memicu animasi yang sesuai, sehingga perilaku NPC tidak hanya benar secara logika, tetapi juga terlihat natural di dalam game.

---

## Slide 055 - FSM dan Animation

### Narasi

Pada slide ini kita melihat hubungan antara **Finite State Machine** dan **animation**. Dalam game, state bukan hanya logika internal NPC; state juga menentukan bagaimana NPC terlihat bergerak. Jika NPC berpindah state, animasi biasanya ikut berubah.

Intuisi praktisnya sederhana: ketika NPC sedang `Patrol`, ia berjalan pelan. Ketika NPC sedang `Chase`, ia berlari. Ketika NPC sedang `Attack`, ia melakukan gerakan menyerang. Dengan kata lain, **state memberi tahu logika**, sedangkan **animation memberi tahu visual**.

Setiap state dapat memicu animasi. Contoh pemetaannya adalah:

- `Patrol` → `Walk animation`
- `Chase` → `Run animation`
- `Attack` → `Attack animation`
- `Flee` → `Run/Flee animation`
- `Dead` → `Death animation`

Dalam Unity, hubungan antara state dan animasi biasanya menggunakan:

- `Animator`
- `Animator Controller`
- `Animation Parameter`

`Animator` adalah komponen yang menjalankan animasi pada objek. `Animator Controller` berisi state animasi, transisi, dan kondisi perpindahan. `Animation Parameter` adalah variabel yang bisa diubah dari script untuk memengaruhi animasi.

Contoh sederhana:

```csharp
animator.SetBool("IsChasing", true);
animator.SetTrigger("Attack");
```

Pada baris pertama, `animator.SetBool("IsChasing", true);` mengubah parameter `IsChasing` menjadi `true`. Parameter ini biasanya digunakan untuk menentukan apakah NPC sedang mengejar pemain. Jika parameter ini aktif, `Animator Controller` dapat memindahkan animasi dari `Walk` ke `Run`.

Pada baris kedua, `animator.SetTrigger("Attack");` memicu parameter `Attack`. Trigger biasanya bersifat sekali pakai, artinya cocok untuk animasi yang hanya terjadi satu kali, seperti serangan, lompatan, atau kematian.

Urutan eksekusinya penting. Biasanya script FSM menentukan state NPC terlebih dahulu. Setelah state berubah, script mengubah parameter `Animator`. Kemudian `Animator` mengevaluasi transisi dan menjalankan animasi yang sesuai.

Hasil yang diharapkan adalah NPC tidak hanya “tahu” sedang berada di state apa, tetapi juga “tampil” sesuai state tersebut. Misalnya, NPC yang sedang `Chase` terlihat berlari, dan NPC yang sedang `Attack` terlihat melakukan gerakan menyerang.

Untuk praktikum awal, animasi dapat dibuat sederhana atau bahkan opsional. Yang paling penting adalah logika FSM sudah benar. Setelah state machine berjalan dengan baik, animasi dapat ditambahkan sebagai lapisan visual.

### Inti yang Harus Ditekankan

- **State menentukan perilaku**, sedangkan **animation menentukan tampilan** NPC.
- `Animator`, `Animator Controller`, dan `Animation Parameter` adalah komponen utama untuk menghubungkan FSM dengan animasi di Unity.
- `SetBool()` cocok untuk kondisi yang bertahan, seperti `IsChasing`.
- `SetTrigger()` cocok untuk aksi sekali pakai, seperti `Attack`.
- Untuk praktikum awal, animasi boleh sederhana atau opsional selama logika state machine sudah benar.

### Transisi ke Slide Berikutnya

Setelah state dan animasi terhubung, langkah berikutnya adalah memastikan bahwa state NPC benar-benar berjalan sesuai harapan saat game dijalankan. Untuk itu, kita akan masuk ke pembahasan **debugging FSM**.

---

## Slide 056 - FSM dan Debugging

### Narasi

Pada slide ini kita membahas **debugging** untuk **Finite State Machine** atau **FSM** pada NPC. Dalam praktik, FSM sering terlihat sederhana di atas kertas, tetapi saat dijalankan di Unity bisa muncul masalah seperti state tidak berubah, transisi tidak terpicu, atau perilaku NPC tidak sesuai harapan. Karena itu, FSM harus dibuat **mudah dilihat saat runtime**.

Masalah utama pada FSM biasanya bukan hanya logika state, tetapi juga kondisi yang memicu transisi. Misalnya, NPC seharusnya berpindah dari `Patrol` ke `Chase`, tetapi tidak terjadi karena jarak deteksi salah, `line of sight` terhalang, atau variabel target tidak terisi. Dengan debugging, mahasiswa dapat melihat apa yang sebenarnya terjadi di dalam agent.

Contoh paling sederhana adalah mencatat state aktif ke console:

```csharp
Debug.Log("Current State: " + currentState);
```

Baris ini berguna untuk melacak urutan state. Variabel `currentState` biasanya menyimpan state yang sedang aktif, misalnya `Patrol`, `Chase`, `Attack`, atau `Flee`. Jika log menunjukkan state yang tidak sesuai, mahasiswa dapat memeriksa fungsi transisi, parameter range, atau kondisi sensor NPC.

Selain console, state juga dapat ditampilkan langsung di atas NPC:

```text
Enemy
State: Chase
HP: 45
```

Tampilan ini membantu pengembang melihat perilaku NPC secara langsung di scene. Mahasiswa tidak perlu membuka console terus-menerus untuk mengetahui apakah NPC sedang mengejar, menyerang, atau kembali patroli.

Visual debugging dapat menampilkan beberapa elemen penting:

- **state aktif**,
- **vision range**,
- **attack range**,
- **destination**,
- **waypoint**,
- **line of sight**.

Elemen-elemen ini penting karena FSM untuk NPC biasanya bergantung pada input spasial. `vision range` menentukan kapan NPC mendeteksi pemain, `attack range` menentukan kapan NPC boleh menyerang, `destination` dan `waypoint` membantu memahami pathfinding, sedangkan `line of sight` menentukan apakah NPC benar-benar melihat target.

Dengan debug yang baik, mahasiswa dapat memisahkan masalah secara sistematis. Jika state salah, periksa transisi. Jika state benar tetapi NPC tidak bergerak, periksa pathfinding atau steering. Jika NPC tidak menyerang, periksa `attack range` dan `line of sight`. Pendekatan ini membuat pengembangan Game AI lebih terarah dan tidak sekadar menebak-nebak.

Sebelum lanjut, hal yang harus dipahami adalah bahwa **debugging FSM** bukan hanya menampilkan teks, tetapi membuat kondisi internal agent terlihat. Dengan begitu, mahasiswa dapat memahami hubungan antara state, sensor, range, path, dan perilaku akhir NPC.

### Inti yang Harus Ditekankan

- **FSM harus mudah diamati saat runtime** agar perilaku NPC dapat ditelusuri.
- `Debug.Log("Current State: " + currentState);` adalah cara sederhana untuk melacak state aktif.
- Tampilan debug di atas NPC membantu melihat state, HP, dan kondisi penting secara langsung.
- Visual debugging mencakup **state aktif**, **vision range**, **attack range**, **destination**, **waypoint**, dan **line of sight**.
- Debugging membantu memisahkan masalah antara logika state, sensor, range, pathfinding, dan perilaku NPC.

### Transisi ke Slide Berikutnya

Setelah memahami elemen apa saja yang perlu dipantau, slide berikutnya akan menunjukkan cara menampilkan radius deteksi dan radius serangan secara visual menggunakan `Gizmos` di Unity.

---

## Slide 057 - Debug Visual dengan Gizmos

### Narasi

**Gizmos** adalah cara paling langsung untuk melihat area kerja NPC secara visual. Daripada hanya membaca nilai numerik seperti jarak deteksi atau jarak serangan, mahasiswa dapat melihat bentuk spasialnya langsung di scene.

```csharp
void OnDrawGizmosSelected()
{
    Gizmos.color = Color.yellow;
    Gizmos.DrawWireSphere(transform.position, visionRange);

    Gizmos.color = Color.red;
    Gizmos.DrawWireSphere(transform.position, attackRange);
}
```

Fungsi `OnDrawGizmosSelected()` dipanggil oleh editor ketika objek dipilih. Artinya, bentuk yang digambar hanya muncul saat NPC tersebut sedang aktif dipilih, sehingga scene tidak terlalu penuh dengan garis debug.

`Gizmos.color = Color.yellow;` menentukan warna garis yang akan digambar. Warna kuning biasanya digunakan untuk menandai area deteksi, karena area ini bersifat lebih luas dan lebih “aman” dibanding area serangan.

`Gizmos.DrawWireSphere(transform.position, visionRange);` menggambar bola kawat di posisi NPC dengan radius `visionRange`. Bola ini menunjukkan seberapa jauh NPC dapat “melihat” atau mendeteksi pemain.

`Gizmos.color = Color.red;` mengganti warna menjadi merah. Warna merah cocok untuk area serangan karena menandakan zona yang lebih kritis dan lebih dekat dengan NPC.

`Gizmos.DrawWireSphere(transform.position, attackRange);` menggambar bola kawat dengan radius `attackRange`. Bola ini menunjukkan jarak maksimum tempat NPC dapat menyerang.

Secara intuitif, dua bola ini membantu mahasiswa memahami batas perilaku NPC. Jika pemain berada di dalam bola kuning tetapi di luar bola merah, NPC seharusnya hanya mengejar. Jika pemain masuk ke dalam bola merah, NPC dapat beralih ke state menyerang.

Gizmos membantu mahasiswa melihat:

- **radius deteksi**,
- **radius serangan**,
- **safe distance**,
- **waypoint**,
- **arah pandang**.

Dalam praktik, debug visual sangat penting karena banyak masalah perilaku NPC bukan berasal dari logika yang salah, melainkan dari nilai parameter yang tidak sesuai. Misalnya, NPC tidak mengejar karena `visionRange` terlalu kecil, atau NPC menyerang terlalu sering karena `attackRange` terlalu besar.

Sebelum lanjut, mahasiswa perlu memahami bahwa visualisasi ini bukan sekadar hiasan. Gizmos membantu memverifikasi apakah area deteksi, area serangan, dan jarak aman benar-benar sesuai dengan desain perilaku NPC.

### Inti yang Harus Ditekankan

- **Gizmos** mengubah parameter jarak menjadi bentuk visual yang mudah dibaca di scene.
- `visionRange` dan `attackRange` harus bisa diverifikasi secara spasial, bukan hanya secara numerik.
- Debug visual membantu menemukan masalah deteksi, jarak aman, dan transisi perilaku NPC.

### Transisi ke Slide Berikutnya

Setelah area deteksi dan serangan dapat dilihat secara visual, langkah berikutnya adalah mengenali kesalahan umum yang sering membuat FSM sulit dibaca dan sulit diuji.

---

## Slide 058 - Kesalahan Umum pada FSM

### Narasi

Slide ini membahas kesalahan yang sering muncul saat mahasiswa membangun **Finite State Machine** untuk perilaku NPC. Secara konsep, FSM terlihat sederhana: ada state, ada transition, dan ada kondisi. Namun, dalam praktik, perilaku NPC sering terasa aneh bukan karena state-nya salah, tetapi karena desain transisi dan kondisi tidak rapi.

Intuisi pentingnya adalah ini: **FSM adalah kontrak perilaku**. Setiap state harus punya makna yang jelas, setiap transition harus bisa dijelaskan, dan setiap kondisi harus bisa diuji. Jika kontrak ini kabur, NPC akan berpindah state secara tidak konsisten, misalnya terus menyerang, terus kabur, atau berganti state terlalu cepat.

Kesalahan umum pada FSM biasanya muncul dari sepuluh pola berikut:

1. **Terlalu banyak state sejak awal.**  
   Mahasiswa sering langsung membuat banyak state seperti `Idle`, `Patrol`, `Chase`, `Attack`, `Flee`, `Stunned`, dan `Dead` sekaligus. Padahal, lebih baik mulai dari state inti yang benar-benar dibutuhkan, lalu pecah state jika perilaku menjadi terlalu kompleks.

2. **Transition tidak jelas.**  
   Setiap perpindahan harus diketahui: dari state mana, ke state mana, dan dipicu oleh kondisi apa. Jika transition hanya ditulis berdasarkan “rasa” atau kondisi yang samar, perilaku NPC akan sulit diprediksi.

3. **Condition saling bertabrakan.**  
   Masalah muncul ketika beberapa kondisi benar pada saat yang sama. Misalnya, NPC sedang dekat musuh, tetapi juga sedang dalam keadaan `Stunned`. Jika tidak ada aturan yang jelas, sistem tidak tahu kondisi mana yang harus diprioritaskan.

4. **Tidak ada prioritas.**  
   Ketika banyak kondisi aktif, perlu ada urutan evaluasi. Prioritas membantu sistem memilih kondisi yang paling penting, misalnya `Dead` lebih dulu dicek daripada `Attack`, atau `Stunned` lebih dulu daripada `Chase`.

5. **State berpindah terlalu cepat.**  
   Jika kondisi hanya dicek satu frame, NPC bisa cepat berpindah state karena perubahan kecil pada jarak, arah, atau input. Untuk menghindari ini, bisa digunakan timer, hysteresis, atau syarat stabil sebelum perpindahan state dilakukan.

6. **Tidak ada debug state.**  
   Tanpa `debug state`, mahasiswa sulit mengetahui state apa yang sedang aktif, mengapa NPC berpindah, dan kondisi apa yang sedang terpenuhi. Debug state sangat penting untuk melacak perilaku NPC secara sistematis.

7. **Semua logika ditulis dalam satu fungsi besar.**  
   Jika semua logika state, transition, dan aksi NPC ditulis dalam satu fungsi panjang, kode menjadi sulit dibaca dan sulit diuji. Lebih baik logika dipisah per state atau per transition agar lebih modular.

8. **Tidak memisahkan perception dan decision.**  
   `Perception` adalah proses NPC membaca lingkungan, misalnya jarak musuh, arah pandang, atau status kesehatan. `Decision` adalah proses memilih state atau aksi berdasarkan data tersebut. Jika keduanya dicampur, logika menjadi sulit dikembangkan dan sulit di-debug.

9. **Attack tidak memiliki cooldown.**  
   Jika NPC menyerang setiap frame tanpa jeda, perilaku akan terasa tidak natural dan bisa membuat animasi atau damage tidak masuk akal. State `Attack` sebaiknya memiliki `cooldown`, durasi animasi, atau kondisi selesai sebelum bisa menyerang lagi.

10. **Flee tidak memiliki kondisi selesai.**  
    Jika NPC masuk state `Flee` tetapi tidak ada aturan kapan berhenti, NPC bisa terus kabur meskipun ancaman sudah hilang. State `Flee` perlu memiliki kondisi selesai, misalnya jarak aman tercapai, timer habis, atau musuh tidak terlihat lagi.

Sebelum lanjut ke topik berikutnya, mahasiswa perlu memahami bahwa masalah FSM biasanya bukan hanya masalah kode, tetapi masalah desain. Setiap state harus bisa dijelaskan fungsinya, setiap transition harus punya alasan, dan setiap kondisi harus bisa diuji. Jika tidak, perilaku NPC akan tampak seperti “glitch”, padahal sebenarnya sistemnya belum dirancang dengan jelas.

### Inti yang Harus Ditekankan

- FSM yang baik dimulai dari **state minimal** dan **transition yang jelas**.
- Setiap perpindahan state harus memiliki **kondisi**, **prioritas**, dan **aturan berhenti**.
- Pisahkan `perception` dan `decision` agar logika NPC lebih rapi dan mudah di-debug.
- Sediakan `debug state` untuk mengetahui state aktif, alasan perpindahan, dan kondisi yang sedang terpenuhi.
- `Attack` dan `Flee` harus memiliki batasan, seperti `cooldown` atau kondisi selesai, agar perilaku NPC tidak berulang tanpa kendali.

### Transisi ke Slide Berikutnya

Jika kesalahan-kesalahan ini dibiarkan, jumlah state dan transition akan terus membesar dan sulit dikontrol. Kita akan lanjut ke masalah yang muncul ketika sistem FSM menjadi terlalu kompleks, yaitu **state explosion**.

---

## Slide 059 - Masalah: State Explosion

### Narasi

Pada slide ini kita membahas salah satu masalah klasik dalam **Finite State Machine** untuk perilaku NPC, yaitu **state explosion**. Masalah ini muncul ketika jumlah **state** dan **transition** bertambah terus, sehingga sistem keputusan NPC menjadi sulit dirancang, diuji, dan dipelihara.

Contoh sederhana dapat dilihat pada daftar state berikut:

```text
Idle
Patrol
Walk
Run
Chase
Attack
Reload
TakeCover
Flee
Heal
Stunned
Dead
```

Secara intuitif, setiap state tersebut mewakili perilaku yang mungkin dilakukan agen. Jika hanya ada beberapa state, transisi masih mudah digambar dan dipahami. Namun ketika semua state saling terhubung, misalnya `Idle` bisa ke `Patrol`, `Patrol` bisa ke `Chase`, `Chase` bisa ke `Attack`, `Attack` bisa ke `Reload`, `Reload` bisa ke `TakeCover`, dan seterusnya, diagram transisi menjadi sangat padat.

Dampaknya bukan hanya visual. Dalam implementasi, setiap transisi biasanya membutuhkan **condition**, **priority**, dan kadang **cooldown** atau **duration**. Semakin banyak transisi, semakin besar peluang munculnya kondisi yang saling bertabrakan, perilaku yang tidak konsisten, dan bug yang sulit dilacak. Mahasiswa perlu memahami bahwa FSM yang baik tidak hanya memiliki state yang benar, tetapi juga transisi yang terkontrol dan mudah dibaca.

**State explosion** menjadi lebih serius ketika NPC memiliki banyak kebutuhan sekaligus: bergerak, menyerang, menghindar, mengisi amunisi, menyembuhkan diri, dan bereaksi terhadap kondisi lingkungan. Jika semua logika diletakkan dalam satu FSM besar, sistem akan cepat menjadi rapuh. Oleh karena itu, solusi yang umum digunakan adalah memecah kompleksitas, bukan menambah state tanpa struktur.

Beberapa solusi yang dapat dipertimbangkan:

- **Hierarchical FSM**: mengelompokkan state menjadi sub-FSM, misalnya sub-FSM untuk combat dan sub-FSM untuk movement.
- **Behavior Tree**: memisahkan keputusan menjadi node yang lebih modular, terutama untuk perilaku bercabang.
- **Utility AI**: menilai beberapa pilihan perilaku berdasarkan skor, sehingga transisi tidak selalu harus didefinisikan satu per satu.
- **FSM kecil**: membagi sistem menjadi beberapa FSM yang lebih fokus, misalnya FSM untuk movement, FSM untuk combat, dan FSM untuk status.

Inti yang harus dipahami mahasiswa adalah: **state explosion** bukan sekadar masalah jumlah state, tetapi masalah kompleksitas transisi dan keputusan. Sebelum menambah state baru, kita harus bertanya apakah perilaku tersebut benar-benar perlu menjadi state utama, atau cukup menjadi sub-state, parameter, atau bagian dari sistem keputusan lain.

### Inti yang Harus Ditekankan

- **State explosion** terjadi ketika jumlah **state** dan **transition** terlalu banyak sehingga FSM sulit dikontrol.
- Setiap transisi membawa **condition**, **priority**, dan potensi konflik, sehingga kompleksitas meningkat cepat.
- Solusinya adalah menambah struktur: **hierarchical FSM**, **Behavior Tree**, **Utility AI**, atau memecah sistem menjadi beberapa **FSM kecil**.
- Mahasiswa harus membedakan antara perilaku yang layak menjadi state utama dan perilaku yang lebih baik diletakkan pada sub-sistem.

### Transisi ke Slide Berikutnya

Setelah memahami mengapa FSM dapat menjadi terlalu kompleks, kita lanjut ke perbandingan antara **FSM** dan **Behavior Tree**, terutama kapan masing-masing pendekatan lebih sesuai untuk perilaku NPC.

---

## Slide 060 - FSM vs Behavior Tree

### Narasi

Setelah membahas **state explosion**, kita perlu membandingkan dua pendekatan decision making yang sering muncul dalam perilaku NPC: **Finite State Machine** dan **Behavior Tree**.

**FSM** bekerja dengan mendefinisikan `state` dan `transition` secara eksplisit. Setiap `state` seperti `Idle`, `Patrol`, `Chase`, `Attack` memiliki aturan kapan berpindah. Kelebihannya sederhana: alur perilaku mudah dibaca, mudah di-debug, dan cocok untuk NPC dengan perilaku terbatas.

Namun, ketika jumlah `state` bertambah, `transition` antar `state` dapat menjadi banyak. Jika setiap `state` harus terhubung ke banyak `state` lain, sistem menjadi sulit dikontrol. Karena itu, FSM paling kuat ketika perilaku game dapat dipetakan ke beberapa `state` utama.

**Behavior Tree** mengambil pendekatan yang lebih modular. Perilaku tidak hanya berupa `state` yang saling berpindah, tetapi disusun sebagai pohon keputusan. `Node` dapat mewakili `action`, kondisi, atau cabang logika. Struktur ini membuat perilaku bercabang lebih rapi, terutama untuk perilaku game kompleks.

Perbedaan konseptual utamanya:

- **FSM** berfokus pada `state` aktif dan `transition` yang eksplisit.
- **Behavior Tree** berfokus pada **struktur keputusan** yang dapat disusun ulang secara modular.
- **FSM** lebih mudah untuk perilaku sederhana.
- **Behavior Tree** lebih fleksibel untuk perilaku bercabang dan kompleks.

Secara praktis, jika kita membuat enemy sederhana dengan `state` `Idle`, `Chase`, dan `Attack`, FSM sudah cukup. Jika enemy perlu memilih antara combat, patrol, flee, reload, dan cover secara lebih fleksibel, Behavior Tree dapat membantu mengorganisasi pilihan tersebut tanpa membuat `transition` menjadi terlalu rumit.

Dalam pertemuan ini, fokus utama masih pada **FSM** karena ia menjadi fondasi decision making yang mudah dipahami. Pemahaman tentang `state`, `transition`, dan kondisi perpindahan akan menjadi dasar sebelum memperluas pembahasan ke Behavior Tree dan pendekatan utility.

### Inti yang Harus Ditekankan

- **FSM** cocok untuk perilaku sederhana karena `state` dan `transition` jelas.
- **Behavior Tree** lebih modular dan cocok untuk perilaku bercabang yang kompleks.
- Perbedaan utamanya ada pada cara representasi keputusan: **state aktif** versus **pohon keputusan**.
- FSM tetap menjadi fondasi penting sebelum memahami sistem decision making yang lebih luas.

### Transisi ke Slide Berikutnya

Setelah memahami perbandingan FSM dan Behavior Tree, langkah berikutnya adalah melihat bagaimana FSM dibandingkan dengan pendekatan utility, terutama dalam cara memilih aksi berdasarkan skor.

---

## Slide 061 - FSM vs Utility AI

### Narasi

Slide ini membandingkan dua cara pengambilan keputusan untuk perilaku NPC: **Finite State Machine** dan **Utility**. Keduanya membantu sistem memilih perilaku, tetapi logikanya berbeda.

**FSM** bekerja berdasarkan **state** dan **transition**. Sistem berada pada satu state aktif, lalu memeriksa kondisi. Jika kondisi terpenuhi, sistem berpindah ke state lain.

```text
Jika condition terpenuhi
    pindah state
```

Artinya, perilaku dirancang sebagai jalur yang eksplisit. Misalnya state `Patrol` dapat berpindah ke `Chase` jika `canSeePlayer` bernilai benar. Kelebihannya mudah dibaca, mudah di-debug, dan cocok ketika perilaku sudah jelas.

**Utility** bekerja dengan cara memberi **skor** pada beberapa aksi. Sistem tidak hanya memilih state berdasarkan aturan transisi, tetapi menilai seberapa tepat setiap aksi pada kondisi saat ini.

```text
Attack = 0.8
Flee   = 0.9
Patrol = 0.2

Pilih Flee
```

Pada contoh ini, `Flee` dipilih karena skornya tertinggi. Skor dapat berasal dari jarak, kesehatan, ancaman, atau faktor lain. Hasilnya perilaku terasa lebih fleksibel karena beberapa aksi dapat dipertimbangkan secara bersamaan.

Perbedaan utamanya adalah:

- **FSM** memilih berdasarkan **transition** yang sudah didefinisikan.
- **Utility** memilih berdasarkan **skor** yang dihitung dari kondisi.
- **FSM** lebih kuat untuk perilaku dengan state jelas dan alur mudah dipetakan.
- **Utility** lebih kuat untuk banyak pilihan aksi dan perilaku yang perlu menyesuaikan diri.

Untuk enemy sederhana hingga menengah, **FSM** sering menjadi pilihan yang aman karena transisinya dapat diuji satu per satu. Namun ketika perilaku memiliki banyak alternatif, misalnya menyerang, kabur, menutup jarak, atau mencari posisi aman, **utility** membantu sistem memilih aksi yang paling sesuai tanpa harus menulis semua transisi secara eksplisit.

Sebelum lanjut, mahasiswa perlu memahami bahwa **FSM** menekankan *di mana sistem berada* dan *kapan pindah*, sedangkan **utility** menekankan *seberapa baik setiap aksi* pada kondisi tertentu. Pemahaman ini penting karena studi kasus berikutnya akan merangkai state, condition, dan perilaku enemy menjadi satu sistem yang utuh.

### Inti yang Harus Ditekankan

- **FSM** memilih perilaku melalui **state** dan **transition** yang eksplisit.
- **Utility** memilih aksi berdasarkan **skor** tertinggi dari beberapa pilihan.
- **FSM** cocok untuk perilaku jelas dan mudah dipetakan.
- **Utility** cocok untuk banyak pilihan aksi dan perilaku lebih fleksibel.
- Pahami perbedaan logika: **transition-based** versus **score-based**.

### Transisi ke Slide Berikutnya

Setelah memahami perbedaan **FSM** dan **utility**, kita akan masuk ke studi kasus perilaku enemy untuk melihat bagaimana state, condition, dan perilaku dirangkai menjadi satu sistem yang dapat dijalankan.

---

## Slide 062 - Studi Kasus Enemy AI

### Narasi

Pada slide ini kita melihat **studi kasus** sederhana untuk perilaku enemy. Tujuannya bukan langsung membuat alur lengkap, tetapi memetakan spesifikasi perilaku menjadi **state** dan **condition** yang bisa digunakan oleh FSM.

```text
Enemy berpatroli di area.
Jika melihat player, enemy mengejar.
Jika cukup dekat, enemy menyerang.
Jika HP rendah, enemy kabur.
Jika HP habis, enemy mati.
```

Secara intuitif, enemy tidak melakukan semua perilaku sekaligus. Pada satu waktu, enemy berada dalam satu mode perilaku, misalnya sedang patroli, mengejar, menyerang, atau kabur. Mode-mode inilah yang kita representasikan sebagai **state**.

State yang digunakan pada kasus ini adalah:

- `Patrol`: enemy bergerak di area tertentu tanpa target aktif.
- `Chase`: enemy bergerak menuju player setelah mendeteksi keberadaan player.
- `Attack`: enemy berada dalam jarak serangan dan melakukan aksi menyerang.
- `Flee`: enemy menjauh dari player karena kondisi tidak menguntungkan, misalnya HP rendah.
- `Dead`: enemy tidak lagi aktif dan tidak melakukan perilaku lain.

Selanjutnya, state saja belum cukup. FSM membutuhkan **condition** untuk menentukan kapan perilaku perlu berubah. Condition pada dasarnya adalah informasi yang dibaca oleh sistem, misalnya hasil sensor, jarak, atau nilai HP.

Condition yang muncul pada slide ini adalah:

```text
canSeePlayer
distanceToPlayer <= attackRange
health <= lowHealthThreshold
health <= 0
distanceToPlayer >= safeDistance
```

Makna dari condition tersebut adalah:

- `canSeePlayer`: player terlihat atau berada dalam jangkauan deteksi.
- `distanceToPlayer <= attackRange`: jarak player sudah masuk ke area serangan.
- `health <= lowHealthThreshold`: HP enemy berada di bawah ambang batas yang dianggap berbahaya.
- `health <= 0`: enemy tidak lagi memiliki HP.
- `distanceToPlayer >= safeDistance`: jarak player sudah cukup jauh sehingga kondisi dianggap aman.

Hubungan antara state dan condition adalah inti dari perilaku ini. Setiap state menggambarkan **apa yang dilakukan enemy**, sedangkan condition menggambarkan **kapan perilaku tersebut berubah**. Dalam implementasi, nilai seperti `distanceToPlayer`, `health`, dan `canSeePlayer` biasanya diperiksa secara berkala, misalnya setiap update frame.

Sebelum lanjut ke alur, hal penting yang harus dipahami mahasiswa adalah bahwa spesifikasi perilaku harus dipecah menjadi dua bagian: **state** sebagai mode perilaku, dan **condition** sebagai pemicu perubahan. Jika pemetaan ini sudah jelas, maka menyusun transisi antar-state akan menjadi lebih terarah.

### Inti yang Harus Ditekankan

- **State** adalah mode perilaku enemy: `Patrol`, `Chase`, `Attack`, `Flee`, dan `Dead`.
- **Condition** adalah informasi yang menentukan kapan perilaku berubah, seperti `canSeePlayer`, jarak, dan HP.
- Nilai ambang seperti `attackRange`, `lowHealthThreshold`, dan `safeDistance` menentukan batas perilaku enemy.
- Studi kasus ini menjadi dasar untuk menyusun alur decision making pada slide berikutnya.

### Transisi ke Slide Berikutnya

Setelah state dan condition sudah jelas, langkah berikutnya adalah menyusunnya menjadi alur perilaku yang lebih mudah dibaca.

---

## Slide 063 - Alur Enemy AI

### Narasi

Slide ini melanjutkan spesifikasi enemy dengan menunjukkan **alur perilaku** dalam bentuk **Finite State Machine**. Tujuannya bukan hanya menampilkan daftar state, tetapi memperlihatkan bagaimana enemy berpindah dari satu perilaku ke perilaku lain berdasarkan kondisi lingkungan.

```text
Start
  ↓
Patrol
  ↓ canSeePlayer
Chase
  ↓ inAttackRange
Attack
  ↓ healthLow
Flee
  ↓ safe
Patrol
```

Alur utama dapat dibaca sebagai berikut:

1. Sistem dimulai dari `Start`, lalu masuk ke state `Patrol`.
2. Selama `Patrol`, jika kondisi `canSeePlayer` terpenuhi, enemy berpindah ke `Chase`.
3. Dari `Chase`, jika `inAttackRange` terpenuhi, enemy masuk ke `Attack`.
4. Dari `Attack`, jika `healthLow` terpenuhi, enemy berpindah ke `Flee`.
5. Dari `Flee`, jika kondisi `safe` terpenuhi, enemy kembali ke `Patrol`.

Selain alur utama, ada transisi khusus yang berlaku dari state aktif:

```text
health <= 0
    ↓
Dead
```

Artinya, ketika nilai `health` mencapai nol, perilaku enemy langsung berakhir pada state `Dead`. Transisi ini penting karena menunjukkan bahwa kondisi kritis dapat memotong alur normal.

Secara konseptual, diagram ini memperlihatkan **decision making** dasar pada NPC. Enemy tidak bergerak secara acak, melainkan memilih perilaku berdasarkan kondisi: melihat player, jarak, dan kesehatan. Pola ini membuat perilaku mudah dipahami, mudah diuji, dan mudah dikembangkan.

Sebelum lanjut ke detail state, mahasiswa perlu memahami tiga hal utama: **state** adalah perilaku yang sedang aktif, **condition** adalah aturan untuk berpindah, dan **transisi** adalah perubahan state ketika condition terpenuhi. Dengan pemahaman ini, alur FSM tidak hanya dibaca sebagai gambar, tetapi sebagai logika perilaku yang dapat diimplementasikan.

### Inti yang Harus Ditekankan

- **State** adalah perilaku utama enemy: `Patrol`, `Chase`, `Attack`, `Flee`, dan `Dead`.
- **Condition** menentukan kapan enemy berpindah, misalnya `canSeePlayer`, `inAttackRange`, `healthLow`, dan `safe`.
- Transisi `health <= 0` ke `Dead` bersifat prioritas karena mengakhiri perilaku enemy dari state aktif.
- FSM ini menunjukkan **decision making** sederhana: enemy bereaksi terhadap player, jarak, dan kondisi kesehatan.

### Transisi ke Slide Berikutnya

Setelah alur global dipahami, langkah berikutnya adalah melihat bagaimana state `Patrol` bekerja secara lebih detail, termasuk pergerakan ke waypoint dan pemeriksaan kondisi player.

---

## Slide 064 - Patrol Detail

### Narasi

Slide ini memperbesar perilaku **Patrol** dari alur **FSM** yang sudah kita lihat sebelumnya. Pada state `Patrol`, enemy tidak hanya bergerak tanpa tujuan, tetapi menjalankan perilaku dasar yang membuatnya tetap hidup di lingkungan game. Ia bergerak menuju **waypoint**, memilih waypoint berikutnya setelah sampai, dan tetap memeriksa kondisi sekitar, terutama keberadaan player.

Intuisi praktisnya sederhana: `Patrol` adalah state “siaga”. Enemy terlihat seperti penjaga, patroli, atau NPC yang sedang beraktivitas normal. Namun di balik gerakan itu, ada **decision making** kecil yang terus berjalan setiap frame. Jika player terlihat, enemy harus siap beralih ke `Chase`. Jika nyawanya rendah, enemy harus siap beralih ke `Flee`.

Pseudocode pada slide menunjukkan struktur update state `Patrol`:

```text
UpdatePatrol:
    MoveTo(currentWaypoint)

    if reached waypoint:
        select next waypoint

    if canSeePlayer:
        ChangeState(Chase)

    if health low:
        ChangeState(Flee)
```

Urutan eksekusi pseudocode ini penting untuk dipahami:

1. `MoveTo(currentWaypoint)`  
   Enemy bergerak menuju waypoint yang sedang menjadi target. Dalam implementasi nyata, fungsi ini biasanya didukung **pathfinding**, **steering**, atau sistem navigasi seperti `NavMeshAgent` di Unity, sehingga enemy tidak hanya “melompat” ke titik, tetapi bergerak melalui jalur yang wajar.

2. `if reached waypoint: select next waypoint`  
   Jika enemy sudah sampai di waypoint, ia memilih waypoint berikutnya. Ini membuat patroli tidak berhenti di satu titik, tetapi terus berjalan dalam rute yang sudah ditentukan.

3. `if canSeePlayer: ChangeState(Chase)`  
   Selama patroli, enemy tetap memeriksa apakah player terlihat. Jika kondisi `canSeePlayer` benar, state berubah ke `Chase`. Artinya, `Patrol` bukan state pasif; ia selalu membuka peluang transisi ke perilaku yang lebih agresif.

4. `if health low: ChangeState(Flee)`  
   Jika `health` enemy berada di bawah ambang tertentu, enemy dapat beralih ke `Flee`. Ini menunjukkan bahwa state `Patrol` juga memperhatikan kondisi internal enemy, bukan hanya posisi player.

Perlu diperhatikan bahwa `Patrol` memiliki dua jenis kondisi keluar: kondisi eksternal, yaitu `canSeePlayer`, dan kondisi internal, yaitu `health low`. Kondisi eksternal membuat enemy merespons lingkungan, sedangkan kondisi internal membuat enemy merespons status dirinya sendiri. Kombinasi inilah yang membuat perilaku NPC terasa lebih responsif dan tidak kaku.

Sebelum lanjut ke state berikutnya, mahasiswa perlu memahami bahwa `Patrol` adalah fondasi perilaku enemy. Jika `Patrol` tidak dirancang dengan baik, enemy bisa terlihat diam, tersangkut, tidak waspada, atau tidak pernah beralih ke state lain. Dengan `MoveTo`, pemilihan waypoint, dan pengecekan kondisi yang konsisten, `Patrol` menjadi dasar yang sehat untuk perilaku `Chase`, `Attack`, dan `Flee` selanjutnya.

### Inti yang Harus Ditekankan

- `Patrol` adalah state dasar enemy yang menggabungkan **pergerakan** dan **pemantauan lingkungan**.
- `MoveTo(currentWaypoint)` biasanya didukung sistem **pathfinding** atau **steering**, bukan sekadar perpindahan posisi instan.
- Saat enemy mencapai waypoint, ia harus memilih waypoint berikutnya agar patroli tetap berjalan.
- State `Patrol` tetap memeriksa `canSeePlayer` dan `health` setiap update.
- Transisi keluar `Patrol` dapat menuju `Chase` jika player terlihat, atau menuju `Flee` jika `health` rendah.
- Urutan pengecekan kondisi penting agar perilaku enemy konsisten dan tidak ambigu.

### Transisi ke Slide Berikutnya

Setelah memahami bagaimana enemy bergerak dan tetap waspada saat `Patrol`, kita akan masuk ke `Chase Detail` untuk melihat bagaimana perilaku enemy berubah ketika player sudah terlihat.

---

## Slide 065 - Chase Detail

### Narasi

Slide ini membahas state `Chase` dalam Finite State Machine musuh. Pada state ini, perilaku NPC berubah dari patroli menjadi pengejaran terhadap player. Intuisinya sederhana: ketika musuh sudah mendeteksi player, target geraknya tidak lagi waypoint, melainkan posisi player itu sendiri.

Perhatikan pseudocode berikut:

```text
UpdateChase:
    MoveTo(player.position)

    if health low:
        ChangeState(Flee)

    else if distanceToPlayer <= attackRange:
        ChangeState(Attack)

    else if player lost:
        ChangeState(Patrol or Search)
```

Urutan eksekusi dalam `UpdateChase` dapat dibaca sebagai berikut:

1. `MoveTo(player.position)` dijalankan setiap frame, sehingga `destination` musuh diperbarui mengikuti posisi player.
2. Jika `health low`, musuh berpindah ke state `Flee`.
3. Jika `distanceToPlayer <= attackRange`, musuh berpindah ke state `Attack`.
4. Jika `player lost`, musuh kembali ke state `Patrol` atau `Search`.

Perbedaan utama dengan state `Patrol` terletak pada target gerak. Pada `Patrol`, musuh bergerak menuju waypoint yang sudah ditentukan. Pada `Chase`, targetnya dinamis karena mengikuti `player.position`. Artinya, musuh harus terus memperbarui arah dan tujuan geraknya selama state ini aktif.

Kondisi `health low` diperiksa lebih dulu karena biasanya menjadi prioritas keselamatan agent. Jika musuh terlalu lemah, mengejar player bukan lagi perilaku yang masuk akal. Maka musuh berpindah ke `Flee` untuk menjauh atau menyelamatkan diri.

Kondisi `distanceToPlayer <= attackRange` menandai keberhasilan pengejaran. Ketika jarak sudah cukup dekat, musuh tidak perlu terus mengejar, melainkan dapat beralih ke state `Attack`. Dengan kata lain, `Chase` berfungsi sebagai fase transisi antara deteksi player dan eksekusi serangan.

Kondisi `player lost` juga penting. Jika player tidak lagi terlihat atau keluar dari area deteksi, musuh tidak boleh terus mengejar tanpa target. State dapat kembali ke `Patrol` atau `Search`, tergantung desain perilaku NPC. Hal ini membuat perilaku musuh lebih masuk akal dan tidak terjebak pada posisi terakhir player.

Sebelum lanjut, mahasiswa perlu memahami bahwa `Chase` adalah state yang dinamis. Target gerak, jarak, dan kondisi transisi dievaluasi secara terus-menerus setiap frame. State ini menjadi penghubung penting antara perilaku deteksi dan perilaku menyerang.

### Inti yang Harus Ditekankan

- `Chase` menjadikan `player.position` sebagai target yang diperbarui setiap frame.
- Transisi utama ditentukan oleh `health low`, `distanceToPlayer <= attackRange`, dan `player lost`.
- `MoveTo` menunjukkan bahwa musuh masih bergerak, tetapi tujuannya berubah dari waypoint menjadi player.
- Kondisi `player lost` penting agar NPC kembali ke perilaku yang wajar setelah target hilang.

### Transisi ke Slide Berikutnya

Setelah musuh berhasil mendekati player dan jarak masuk `attackRange`, state berikutnya adalah `Attack`, di mana musuh berhenti, menghadap player, dan menyerang dengan cooldown.

---

## Slide 066 - Attack Detail

### Narasi

Slide ini membahas state **Attack** dalam **Finite State Machine** untuk perilaku NPC musuh. State ini biasanya aktif setelah musuh berhasil mengejar pemain dan jaraknya berada di dalam `attackRange`. Fokusnya bukan hanya “menyerang”, tetapi mengatur kapan musuh berhenti, menghadap, dan melakukan serangan secara terkendali.

Intuisi praktisnya sederhana: ketika musuh sudah dekat, ia tidak perlu terus bergerak. Ia cukup **menghadap pemain**, lalu menyerang pada interval tertentu. Pola ini membuat perilaku musuh terasa lebih natural dan tidak berlebihan.

Pseudocode pada slide adalah:

```text
UpdateAttack:
    FacePlayer()

    if health low:
        ChangeState(Flee)

    else if distanceToPlayer > attackRange:
        ChangeState(Chase)

    else if attackCooldown ready:
        AttackPlayer()
```

Urutan eksekusinya penting. Fungsi `FacePlayer()` dipanggil terlebih dahulu agar orientasi musuh selalu mengarah ke pemain sebelum kondisi lain diperiksa. Setelah itu, sistem mengecek kondisi prioritas: jika `health low`, musuh beralih ke `Flee`; jika jarak sudah melebihi `attackRange`, musuh kembali ke `Chase`; dan hanya jika `attackCooldown ready`, musuh memanggil `AttackPlayer()`.

Bagian `FacePlayer()` penting karena dalam implementasi game, orientasi tubuh, animasi, dan arah serangan biasanya bergantung pada posisi pemain. Tanpa langkah ini, musuh bisa menyerang dari arah yang salah atau terlihat tidak responsif.

Bagian `attackCooldown` adalah kunci agar damage tidak terjadi setiap frame. Jika serangan dipanggil setiap frame, damage akan sangat besar dan tidak realistis. Dengan cooldown, serangan terjadi pada interval tertentu, misalnya setiap 0,5 detik atau 1 detik, sehingga combat lebih seimbang dan mudah di-tune.

Transisi keluar dari `Attack` juga menunjukkan bahwa state ini tetap reaktif. Jika pemain menjauh, musuh kembali ke `Chase`. Jika kesehatan musuh rendah, musuh memilih `Flee`. Dengan cara ini, **FSM** menjaga perilaku musuh tetap konsisten: menyerang hanya saat aman dan dalam jangkauan.

Sebelum lanjut, mahasiswa perlu memahami bahwa `Attack` bukan sekadar aksi damage, melainkan state dengan **orientasi**, **kondisi transisi**, dan **pengaturan waktu**. Pemahaman ini akan membantu saat membahas state berikutnya yang lebih fokus pada pergerakan menjauh.

### Inti yang Harus Ditekankan

- **Attack** adalah state aktif ketika musuh berada dalam `attackRange` dan siap menyerang.
- `FacePlayer()` menjaga orientasi musuh agar serangan terlihat natural dan benar arah.
- `attackCooldown` mencegah damage terjadi setiap frame dan membuat serangan terjadwal.
- Transisi ke `Flee` atau `Chase` membuat perilaku musuh tetap responsif terhadap jarak dan kondisi kesehatan.

### Transisi ke Slide Berikutnya

Selanjutnya kita akan membahas state **Flee**, yaitu perilaku musuh ketika memilih menjauh dari pemain, misalnya karena kesehatan rendah atau situasi tidak aman.

---

## Slide 067 - Flee Detail

### Narasi

State `Flee` adalah perilaku bertahan yang membuat enemy mundur dari player. Intuisi praktisnya sederhana: ketika enemy perlu mundur, ia tidak terus menyerang, tetapi mencari jarak aman. Dalam **Finite State Machine**, state ini aktif selama kondisi aman belum terpenuhi, lalu dapat berpindah ke state lain.

Pada state `Flee`, enemy dapat:

- menjauh dari player,
- menuju **safe point**, atau
- bergerak ke arah berlawanan dari posisi player.

Pseudocode berikut menunjukkan cara menghitung arah dan target tersebut:

```text
UpdateFlee:
    fleeDirection = position - player.position
    destination = position + fleeDirection.normalized * fleeDistance

    MoveTo(destination)

    if distanceToPlayer >= safeDistance:
        ChangeState(Patrol)
```

Baris `fleeDirection = position - player.position` menghitung vektor dari posisi player menuju posisi enemy. Vektor ini menunjukkan arah yang harus diikuti agar enemy bergerak menjauh. Jika posisi enemy berada di depan player, arah ini akan mendorong enemy mundur ke belakang.

Selanjutnya, `fleeDirection.normalized` mengubah vektor arah menjadi panjang satu. Dengan demikian, `fleeDistance` dapat menentukan seberapa jauh enemy ingin bergerak dari posisinya saat ini. Hasilnya disimpan sebagai `destination`, yaitu titik target sementara untuk perilaku `Flee`.

Perintah `MoveTo(destination)` menjalankan pergerakan menuju titik tersebut. Dalam implementasi game, fungsi ini dapat menggunakan steering sederhana atau pathfinding berbasis **NavMesh**. Jika menggunakan NavMesh, `destination` harus berada di area NavMesh yang valid; jika tidak, agent mungkin gagal bergerak atau memilih titik yang tidak dapat dicapai.

Setelah bergerak, sistem memeriksa `distanceToPlayer >= safeDistance`. Jika jarak sudah cukup aman, state berubah menjadi `Patrol` melalui `ChangeState(Patrol)`. Jika belum aman, enemy tetap berada di state `Flee` dan terus memperbarui arah atau targetnya.

Dengan cara ini, perilaku enemy menjadi lebih natural: musuh yang lemah tidak terus menyerang, tetapi mundur ke posisi aman. Mahasiswa perlu memahami bahwa state `Flee` bukan sekadar “bergerak menjauh”, melainkan kombinasi arah vektor, target valid, pergerakan, dan kondisi transisi state.

### Inti yang Harus Ditekankan

- State `Flee` adalah state bertahan yang membuat enemy menjauh dari player.
- `fleeDirection = position - player.position` menentukan arah menjauh dari posisi player.
- `destination` harus valid, terutama jika pergerakan menggunakan **NavMesh**.
- Transisi ke `Patrol` terjadi ketika `distanceToPlayer >= safeDistance`.

### Transisi ke Slide Berikutnya

Setelah memahami bagaimana enemy mundur dan kembali ke perilaku normal, kita akan melihat state akhir, yaitu `Dead`, di mana pergerakan dan interaksi enemy dihentikan.

---

## Slide 068 - Dead Detail

### Narasi

Pada state `Dead`, musuh tidak lagi menjalankan perilaku aktif seperti patrol, chase, attack, atau flee. State ini menandai akhir dari siklus perilaku NPC. Secara konseptual, `Dead` adalah **final state** dalam FSM: setelah masuk ke state ini, tidak ada transisi keluar yang diharapkan dalam alur perilaku musuh.

Intuisi praktisnya: ketika musuh mati, kita ingin menghentikan semua proses yang tidak perlu. Pergerakan tidak perlu terus berjalan, collision tidak perlu lagi memblokir player, dan animasi aktif sebelumnya tidak perlu dipertahankan. Dengan begitu, game menjadi lebih rapi dan hemat sumber daya.

Pseudocode berikut menunjukkan apa yang biasanya dilakukan saat masuk ke state `Dead`:

```text
EnterDead:
    agent.isStopped = true
    collider.enabled = false
    animator.SetTrigger("Dead")
```

Baris `agent.isStopped = true` menghentikan pergerakan agent. Jika sebelumnya musuh bergerak menuju waypoint, player, atau safe point, state ini memastikan agent tidak lagi melanjutkan pergerakan tersebut.

Baris `collider.enabled = false` menonaktifkan collider musuh. Ini penting agar musuh yang mati tidak lagi memblokir player, tidak lagi memicu trigger, dan tidak lagi dianggap sebagai objek fisik yang aktif. Dalam banyak game, musuh mati menjadi non-interactive atau hanya tersisa sebagai visual.

Baris `animator.SetTrigger("Dead")` memberi sinyal ke animator untuk memainkan animasi kematian. Trigger ini biasanya terhubung ke state animasi tertentu, sehingga transisi visual terjadi tanpa perlu memaksa animasi secara manual.

Yang perlu dipahami mahasiswa: `Dead` bukan sekadar animasi mati. Ia adalah perubahan status sistem: pergerakan berhenti, interaksi fisik dimatikan, dan perilaku aktif dihentikan. Dalam FSM, state ini membantu memisahkan logika “masih hidup” dan “sudah selesai”.

### Inti yang Harus Ditekankan

- **`Dead`** adalah **final state** yang menandai akhir perilaku aktif musuh.
- `agent.isStopped = true` menghentikan pergerakan agent.
- `collider.enabled = false` membuat musuh tidak lagi berinteraksi secara fisik dengan player atau lingkungan.
- `animator.SetTrigger("Dead")` memicu animasi kematian melalui animator.
- State ini menjaga game tetap rapi: tidak ada pergerakan, collision, atau perilaku aktif yang berjalan tanpa perlu.

### Transisi ke Slide Berikutnya

Setelah memahami bagaimana state terminal seperti `Dead` menghentikan perilaku musuh, kita akan masuk ke praktikum yang merangkai beberapa state utama menjadi alur perilaku musuh yang lebih utuh.

---

## Slide 069 - Praktikum Pertemuan 5: Gambaran Umum

### Narasi

Pada praktikum ini, mahasiswa akan membangun **musuh** yang memiliki beberapa **state** perilaku. Tujuannya bukan langsung menulis semua detail implementasi, tetapi memahami bagaimana satu musuh dapat berpindah dari satu perilaku ke perilaku lain berdasarkan kondisi di scene.

Empat state utama yang akan digunakan adalah:

- `Patrol`: musuh bergerak mengikuti **waypoint** tertentu.
- `Chase`: musuh mengejar pemain ketika jarak atau **perception** terpenuhi.
- `Attack`: musuh menyerang ketika berada dalam **attack range**, dengan **cooldown** agar serangan tidak terjadi terus-menerus.
- `Flee`: musuh mundur ke area aman ketika **health threshold** tercapai.

Dalam kerangka **Finite State Machine**, setiap state mewakili perilaku yang sedang aktif, sedangkan **transition** adalah aturan yang menentukan kapan state berubah. Mahasiswa perlu memahami bahwa perilaku musuh tidak ditentukan secara acak, melainkan oleh kondisi yang dapat diamati, seperti jarak, health, dan posisi waypoint.

Sebelum masuk ke langkah implementasi, hal penting yang harus dipahami adalah: setiap state harus memiliki perilaku masuk, perilaku berjalan, dan kondisi keluar yang jelas. Detail teknis dan langkah-langkah praktikum akan dibahas dalam modul terpisah.

### Inti yang Harus Ditekankan

- Praktikum ini membangun musuh dengan state `Patrol`, `Chase`, `Attack`, dan `Flee`.
- Transition antar state ditentukan oleh kondisi: waypoint, jarak/perception, attack range/cooldown, dan health threshold.
- Mahasiswa harus memahami konsep **state** dan **transition** sebelum masuk ke detail implementasi.

### Transisi ke Slide Berikutnya

Setelah gambaran umum ini, kita akan melihat scene praktikum yang direncanakan, termasuk komponen dan posisi elemen yang akan digunakan.

---

## Slide 070 - Scene Praktikum yang Direncanakan

### Narasi

Pada slide ini, kita melihat **scene praktikum** yang akan digunakan untuk menguji perilaku enemy berbasis **Finite State Machine**. Scene ini penting karena menjadi lingkungan minimal tempat setiap **state** dan **transition** dapat diamati secara langsung.

Komponen scene yang direncanakan adalah:

```text
Ground
Player
Enemy
Patrol Waypoints
Obstacle
Safe Point
Main Camera
```

Setiap komponen memiliki peran. `Ground` dan `Main Camera` memberi ruang serta sudut pandang pengujian. `Player` menjadi objek yang dideteksi. `Enemy` adalah agen yang menjalankan perilaku. `Patrol Waypoints` menentukan jalur patroli. `Obstacle` memberi batas ruang gerak. `Safe Point` menjadi tujuan saat enemy harus mundur.

Tata letak scene dapat digambarkan sebagai berikut:

```text
W1 ● ─────── ● W2

        Enemy ●

            █ Obstacle

Player ●                  Safe ●
```

Dari diagram ini, mahasiswa perlu memahami bahwa posisi objek bukan sekadar dekorasi. `W1` dan `W2` adalah titik patroli. `Enemy` berada di area yang memungkinkan perpindahan antar waypoint. `Player` berada pada jarak yang dapat memicu **chase** atau **attack**. `Safe Point` berada di sisi lain sebagai target **flee**.

Perilaku enemy yang diharapkan dalam scene ini adalah:

1. `patrol` antar waypoint.
2. `chase` player jika terdeteksi.
3. `attack` jika player berada di jarak dekat.
4. `flee` ke area aman jika `HP` rendah.

Secara konsep, scene ini menyediakan sumber data untuk **transition**: waypoint untuk `patrol`, posisi player untuk `chase` dan `attack`, serta kondisi `HP` untuk `flee`. Dengan demikian, mahasiswa dapat melihat hubungan antara lingkungan, kondisi, dan perubahan state.

Sebelum lanjut, hal yang harus dipahami adalah bahwa scene ini adalah **ruang pengujian perilaku**, bukan hanya kumpulan objek. Setiap objek harus bisa dibaca sebagai input untuk keputusan enemy.

### Inti yang Harus Ditekankan

- Scene praktikum terdiri dari `Ground`, `Player`, `Enemy`, `Patrol Waypoints`, `Obstacle`, `Safe Point`, dan `Main Camera`.
- `Patrol Waypoints`, `Player`, `Safe Point`, dan `HP` menjadi sumber kondisi untuk **state** dan **transition**.
- Perilaku enemy harus dapat diamati sebagai alur: `patrol`, `chase`, `attack`, lalu `flee`.
- `Obstacle` membantu melihat pergerakan enemy dalam ruang, bukan hanya perubahan state secara logis.

### Transisi ke Slide Berikutnya

Setelah scene dan peran setiap objek dipahami, kita lanjut ke struktur script yang akan mengatur perilaku tersebut.

---

## Slide 071 - Script yang Direncanakan

### Narasi

Slide ini menunjukkan **struktur script** yang akan digunakan dalam praktikum. Tujuannya bukan langsung menulis kode lengkap, tetapi memahami pembagian tanggung jawab antar komponen. Dengan struktur ini, perilaku enemy tidak ditulis dalam satu file yang besar, melainkan dibagi menjadi beberapa komponen yang lebih mudah diuji dan dikembangkan.

```text
Scripts/
├── EnemyFSM.cs
├── EnemyPerception.cs
├── EnemyHealth.cs
├── PlayerHealth.cs
└── SimplePlayerController.cs
```

Pembagian script ini mengikuti pola **separation of concerns**. Setiap file memiliki peran yang berbeda dalam satu sistem perilaku NPC.

- `EnemyFSM.cs` adalah komponen utama yang mengatur **state** dan **transition**. Komponen ini menentukan kapan enemy berpindah dari `patrol`, `chase`, `attack`, atau `flee`.
- `EnemyPerception.cs` berperan sebagai "panca indra" enemy. Komponen ini mendeteksi keberadaan player, misalnya berdasarkan jarak atau kondisi tertentu.
- `EnemyHealth.cs` menyimpan kondisi kesehatan enemy. Nilai health ini dapat menjadi dasar keputusan, misalnya kapan enemy harus `flee`.
- `PlayerHealth.cs` menerima damage dari enemy. Komponen ini penting untuk menguji apakah perilaku attack benar-benar memberi efek.
- `SimplePlayerController.cs` digunakan untuk menggerakkan player secara sederhana. Komponen ini membantu mahasiswa menguji perilaku enemy tanpa perlu membuat kontrol player yang kompleks.

Dari sisi alur kerja, kita dapat membayangkan prosesnya sebagai berikut.

1. `EnemyPerception.cs` memeriksa apakah player terlihat atau berada dalam jangkauan.
2. `EnemyHealth.cs` dan `PlayerHealth.cs` menyediakan data kondisi masing-masing.
3. `EnemyFSM.cs` membaca data tersebut, lalu memilih state yang sesuai.
4. State yang aktif menentukan aksi enemy, misalnya bergerak ke waypoint, mengejar player, menyerang, atau menjauh.
5. `SimplePlayerController.cs` memungkinkan player bergerak sehingga kondisi deteksi dan interaksi dapat diuji secara nyata.

Penting untuk dipahami bahwa script ini masih berupa **rencana arsitektur**. Mahasiswa tidak perlu langsung memikirkan semua detail implementasi. Yang utama adalah memahami bahwa perilaku NPC yang tampak sederhana sebenarnya dibangun dari beberapa bagian yang bekerja bersama: **perception**, **state management**, **health**, dan **player interaction**.

### Inti yang Harus Ditekankan

- `EnemyFSM.cs` adalah pusat pengambilan keputusan state dan transition.
- `EnemyPerception.cs` bertugas mendeteksi player, bukan menentukan state secara langsung.
- `EnemyHealth.cs` dan `PlayerHealth.cs` menyediakan data kondisi yang memengaruhi perilaku.
- `SimplePlayerController.cs` berfungsi sebagai alat pengujian agar perilaku enemy dapat diamati.
- Pembagian script membuat sistem lebih modular, mudah diuji, dan lebih mudah dikembangkan.

### Transisi ke Slide Berikutnya

Setelah struktur script dipahami, langkah berikutnya adalah menentukan nilai parameter yang akan digunakan. Parameter inilah yang akan memengaruhi kecepatan, jangkauan, damage, dan ambang batas perilaku enemy.

---

## Slide 072 - Parameter Praktikum

### Narasi

Pada slide ini, kita melihat **parameter praktikum** yang akan digunakan untuk mengatur perilaku NPC dalam struktur **Finite State Machine**. Parameter ini bukan bagian dari state itu sendiri, melainkan nilai konfigurasi yang menentukan seberapa cepat NPC bergerak, kapan NPC menganggap player terlihat, kapan NPC menyerang, dan kapan NPC perlu mundur.

```text
patrolSpeed = 2
chaseSpeed = 4
fleeSpeed = 5
visionRange = 10
attackRange = 2
attackDamage = 10
attackCooldown = 1.5
maxHealth = 100
lowHealthThreshold = 30
safeDistance = 12
```

Secara intuitif, parameter ini bekerja seperti "tombol pengatur" perilaku NPC. Nilai yang terlalu besar atau terlalu kecil dapat membuat NPC terasa lambat, terlalu agresif, terlalu mudah kabur, atau tidak konsisten. Karena itu, mahasiswa perlu membaca parameter bukan hanya sebagai angka, tetapi sebagai aturan yang memengaruhi transisi antar state.

Beberapa parameter dapat dikelompokkan berdasarkan fungsinya:

- **Gerakan NPC**: `patrolSpeed`, `chaseSpeed`, dan `fleeSpeed` menentukan kecepatan NPC pada state patrol, chase, dan flee. Jika `chaseSpeed` lebih besar dari `patrolSpeed`, NPC akan terasa lebih waspada saat mengejar. Jika `fleeSpeed` tinggi, NPC akan mundur lebih cepat saat merasa terancam.
- **Persepsi dan serangan**: `visionRange` menentukan jarak maksimum NPC dapat mendeteksi player. `attackRange` menentukan jarak di mana NPC mulai menyerang. `attackDamage` menentukan besarnya damage per serangan, sedangkan `attackCooldown` mengatur jeda antar serangan agar NPC tidak menyerang terus-menerus.
- **Kesehatan dan jarak aman**: `maxHealth` adalah batas kesehatan NPC. `lowHealthThreshold` adalah ambang kesehatan rendah yang dapat memicu perilaku bertahan atau kabur. `safeDistance` digunakan untuk menilai apakah NPC sudah berada pada jarak yang dianggap aman dari ancaman.

Dalam alur FSM, parameter ini biasanya diperiksa pada setiap update. Misalnya, saat NPC berada di state patrol, NPC bergerak dengan `patrolSpeed`. Jika player masuk ke `visionRange`, kondisi transisi ke state chase dapat terpenuhi. Jika jarak player sudah masuk ke `attackRange`, NPC dapat beralih ke state attack. Jika kesehatan NPC turun di bawah `lowHealthThreshold`, dan player masih dekat, NPC dapat beralih ke state flee. Nilai `safeDistance` membantu NPC menilai apakah ancaman sudah menjauh.

Poin penting yang harus dipahami sebelum praktikum adalah bahwa satu parameter dapat memengaruhi lebih dari satu perilaku. Contoh sederhana: memperbesar `visionRange` membuat NPC lebih cepat mengejar, tetapi jika `attackRange` tetap kecil, NPC mungkin mengejar lama sebelum bisa menyerang. Sebaliknya, memperkecil `attackCooldown` membuat NPC terasa lebih agresif, tetapi jika `attackDamage` tetap rendah, dampaknya terhadap player tidak terlalu besar.

Dengan memahami parameter ini, mahasiswa dapat melakukan eksperimen secara terarah. Tujuan utamanya bukan sekadar mengubah angka, tetapi mengamati bagaimana perubahan parameter memengaruhi transisi state, respons NPC, dan pengalaman bermain secara keseluruhan.

### Inti yang Harus Ditekankan

- **Parameter adalah nilai konfigurasi** yang mengatur perilaku NPC, bukan state baru dalam FSM.
- Parameter memengaruhi **transisi state**, kecepatan gerakan, jarak deteksi, frekuensi serangan, dan respons terhadap kesehatan.
- Perubahan parameter harus diamati secara sistematis karena satu nilai dapat mengubah beberapa perilaku NPC secara bersamaan.
- Mahasiswa perlu memahami hubungan antara `visionRange`, `attackRange`, `attackCooldown`, dan `lowHealthThreshold` sebelum melakukan eksperimen.

### Transisi ke Slide Berikutnya

Setelah parameter ini dipahami, kita lanjut ke slide berikutnya untuk membahas eksperimen praktikum yang dapat dilakukan dengan mengubah nilai-nilai tersebut.

---

## Slide 073 - Eksperimen Praktikum

### Narasi

Setelah parameter dasar dipahami, mahasiswa dapat melakukan **eksperimen perilaku NPC** dengan mengubah nilai, menambah state, atau menghubungkan logika FSM dengan pergerakan. Tujuannya adalah melihat bagaimana keputusan NPC berubah secara nyata.

Beberapa eksperimen yang dapat dicoba:

1. Memperbesar `visionRange` agar NPC lebih cepat berpindah dari `Patrol` ke `Chase`.
2. Memperkecil `attackRange` agar NPC hanya masuk `Attack` saat player sangat dekat.
3. Mengubah `patrolSpeed` dan `chaseSpeed` untuk membandingkan kecepatan saat `Patrol` dan `Chase`.
4. Mengubah `lowHealthThreshold` untuk mengatur kapan NPC memilih `Flee`.
5. Membuat enemy lebih agresif dengan `visionRange` besar, `chaseSpeed` tinggi, dan `attackRange` yang lebih leluasa.
6. Membuat enemy lebih defensif dengan `lowHealthThreshold` lebih tinggi, kecepatan lebih terukur, dan menjaga `safeDistance`.
7. Menambahkan state `Search` agar NPC mencari player setelah kehilangan target.
8. Menambahkan state `Alert` agar NPC menunjukkan kesiapan sebelum benar-benar mengejar.
9. Menghubungkan FSM dengan `NavMeshAgent` agar keputusan state menghasilkan pergerakan nyata di scene.
10. Menampilkan state aktif di UI atau `Debug.Log` agar alur perpindahan state mudah diamati.

Eksperimen ini sebaiknya dilakukan secara bertahap. Mahasiswa dapat mengubah satu parameter dulu, mengamati hasilnya, lalu membandingkannya dengan kondisi awal. Dengan cara ini, pengaruh setiap nilai terhadap perilaku NPC menjadi lebih jelas.

Yang perlu dipahami adalah bahwa FSM tidak hanya berisi daftar state, tetapi juga **aturan perpindahan** dan `action` yang dijalankan. Parameter menentukan kapan aturan terpenuhi, state menentukan mode perilaku, dan `NavMeshAgent` menerjemahkan mode tersebut menjadi pergerakan.

### Inti yang Harus Ditekankan

- Eksperimen parameter bertujuan mengamati **dampak perubahan nilai** terhadap perpindahan state.
- `visionRange`, `attackRange`, `patrolSpeed`, `chaseSpeed`, dan `lowHealthThreshold` adalah parameter utama yang memengaruhi perilaku NPC.
- State tambahan seperti `Search` dan `Alert` memperkaya FSM agar NPC tidak hanya berpindah antar state dasar.
- `NavMeshAgent` dan debug state penting untuk melihat hubungan antara keputusan logika dan pergerakan visual.

### Transisi ke Slide Berikutnya

Setelah eksperimen dilakukan, langkah berikutnya adalah mengevaluasi apakah perilaku NPC berjalan sesuai aturan FSM yang telah dibuat.

---

## Slide 074 - Evaluasi Perilaku NPC

### Narasi

Evaluasi perilaku NPC adalah tahap penting setelah **Finite State Machine** diimplementasikan. Tujuannya bukan hanya memastikan program berjalan tanpa error, tetapi memastikan **perilaku enemy** terasa masuk akal, konsisten, dan dapat dikendalikan oleh desainer game.

Dalam konteks FSM, kita mengamati apakah setiap **state** menghasilkan aksi yang sesuai. Alur dasar yang perlu dicek biasanya:

1. Saat player jauh, enemy berada di state `Patrol` dan bergerak sesuai rute.
2. Saat player terlihat, enemy berpindah ke `Chase` dan mengejar.
3. Saat player masuk jarak serangan, enemy masuk `Attack` dan melakukan serangan.
4. Saat HP rendah, enemy masuk `Flee` dan menjauh.
5. Saat kondisi aman, enemy kembali ke `Patrol`.

Pertanyaan pada slide membantu mahasiswa memeriksa kualitas perilaku, bukan hanya keberadaan state. Beberapa aspek utama yang perlu dievaluasi:

- **Pergerakan dan persepsi**: enemy harus patrol dengan benar, mengejar hanya saat player terlihat, dan tidak mengejar tanpa alasan.
- **Aturan serangan**: `Attack` harus terjadi hanya saat player dekat, memiliki `cooldown`, dan tidak membuat enemy menyerang terus-menerus.
- **Kondisi bertahan hidup**: enemy harus kabur saat HP rendah dan kembali patrol setelah aman, sehingga perilaku tidak selalu agresif atau selalu pasif.
- **Kestabilan FSM**: perpindahan state harus stabil, tidak terlalu cepat bolak-balik, dan tidak ada state yang tidak pernah aktif atau state yang terjebak.
- **Observability dan tuning**: debug state harus mudah dibaca, dan parameter seperti jarak, kecepatan, threshold HP, serta `cooldown` harus mudah diubah untuk menyesuaikan gameplay.

Saat evaluasi, mahasiswa sebaiknya tidak hanya melihat satu frame animasi, tetapi mengamati beberapa skenario: player diam, player bergerak cepat, player masuk dan keluar jarak serangan, enemy terkena damage, dan enemy kembali ke kondisi aman. Dari sana, mahasiswa dapat menilai apakah **transition** antar state sudah sesuai dengan kondisi yang diharapkan.

Hal yang harus dipahami sebelum lanjut adalah bahwa FSM yang baik bukan hanya “bisa jalan”, tetapi **dapat diamati, diuji, dan dituning**. Jika perilaku NPC sulit dijelaskan, biasanya masalahnya ada pada kondisi transisi, parameter yang tidak seimbang, atau debug yang kurang jelas.

### Inti yang Harus Ditekankan

- Evaluasi NPC fokus pada **perilaku yang dihasilkan FSM**, bukan hanya apakah state ada.
- Periksa alur `Patrol`, `Chase`, `Attack`, `Flee`, dan kembali ke `Patrol` sesuai kondisi game.
- Pastikan `cooldown`, jarak serangan, threshold HP, dan kecepatan membuat perilaku stabil serta mudah dituning.
- Debug state yang jelas membantu mahasiswa menemukan state yang tidak aktif, transisi yang aneh, atau parameter yang perlu disesuaikan.

### Transisi ke Slide Berikutnya

Setelah perilaku NPC dievaluasi, kita akan merangkum seluruh konsep FSM yang telah dibahas sebagai fondasi desain perilaku game AI.

---

## Slide 075 - Ringkasan Materi

### Narasi

Pada slide ini, kita menutup materi **Finite State Machine** dengan merangkum konsep-konsep utama yang telah kita pelajari. **FSM** adalah salah satu fondasi paling penting dalam **Game AI** karena memberikan cara yang terstruktur untuk memodelkan perilaku NPC, mulai dari patrol, chase, attack, hingga flee.

Topik hari ini dapat dilihat dalam beberapa kelompok:

- **Konsep dasar**: `State`, `Transition`, `Condition`, `State Diagram`, dan `Transition Table`.
- **Implementasi**: `Enter / Update / Exit State`, `Enum FSM`, `Class-based FSM`, dan `Hierarchical FSM`.
- **Stabilisasi perilaku**: `Priority Transition`, `Hysteresis`, dan `Timer`.
- **Tujuan desain**: `NPC Behavior Design`.

Secara intuisi, **FSM** bukan hanya daftar state, tetapi aturan perpindahan antar state berdasarkan kondisi. Jika `Condition` tidak jelas, NPC dapat mengalami perilaku tidak stabil, seperti stuck, jitter, atau salah prioritas. Pola `Enter`, `Update`, dan `Exit` membantu memisahkan inisialisasi, perilaku per frame, dan pembersihan state. Sementara itu, `Priority Transition`, `Hysteresis`, dan `Timer` digunakan agar transisi tidak terlalu sensitif terhadap perubahan kondisi yang cepat.

Sebelum lanjut, mahasiswa perlu memahami bahwa desain FSM yang baik harus mudah dibaca, mudah di-debug, dan mudah dituning. Dengan pemahaman ini, kita dapat membangun perilaku NPC yang lebih konsisten dan dapat diprediksi.

### Inti yang Harus Ditekankan

- **FSM** memodelkan keputusan NPC melalui `State`, `Transition`, dan `Condition`.
- `State Diagram` dan `Transition Table` membantu merancang, membaca, dan menguji perilaku NPC.
- `Enter / Update / Exit State`, `Enum FSM`, `Class-based FSM`, dan `Hierarchical FSM` adalah pola implementasi yang berbeda.
- `Priority Transition`, `Hysteresis`, dan `Timer` berperan penting untuk menjaga stabilitas perilaku.

### Transisi ke Slide Berikutnya

Selanjutnya, kita akan melihat bagaimana materi **FSM** ini terhubung dengan pertemuan-pertemuan sebelumnya, terutama dalam konteks **perception**, **movement**, **pathfinding**, dan **decision making** pada NPC.

---

## Slide 076 - Hubungan dengan Pertemuan Sebelumnya

### Narasi

Slide ini menunjukkan bahwa **Finite State Machine** tidak berdiri sendiri. Ia adalah bagian dari satu alur perilaku NPC yang lebih besar. Pertemuan sebelumnya sudah membangun beberapa kemampuan dasar, yaitu **Perception** dan **Memory**, **Movement** dan **Steering**, serta **Pathfinding** dan **Navigation**. Hari ini kita menggabungkannya dengan **Decision Making** menggunakan **FSM**.

Artinya, NPC tidak hanya “tahu” posisi player, tetapi juga harus **memutuskan** apa yang harus dilakukan. Keputusan itulah yang diwakili oleh state pada FSM, misalnya `Chase`, `Attack`, atau `Flee`. Setelah keputusan dibuat, barulah sistem pergerakan dan navigasi mengambil alih.

Alur utamanya dapat dilihat sebagai berikut:

```text
NPC melihat player
        ↓
FSM memilih Chase
        ↓
NavMesh mencari jalur
        ↓
Movement mengikuti jalur
        ↓
NPC menyerang jika dekat
```

Pada langkah pertama, NPC menerima informasi dari lingkungan, misalnya posisi player. Informasi ini bisa berasal dari **Perception**, dan jika player pernah terlihat sebelumnya, **Memory** dapat membantu NPC mengingat posisi terakhir. Setelah itu, **FSM** mengevaluasi kondisi dan memilih state yang sesuai. Jika jarak cukup dekat dan kondisi memungkinkan, state `Chase` dapat dipilih.

Setelah state `Chase` aktif, tugas berikutnya bukan lagi memilih perilaku, tetapi **mengeksekusi** perilaku tersebut. **NavMesh** atau `NavMeshAgent` digunakan untuk mencari jalur menuju target. Setelah jalur tersedia, **Movement** dan **Steering** membuat NPC bergerak secara halus mengikuti jalur tersebut. Jika NPC sudah berada dalam jarak serangan, barulah aksi `Attack` dapat dilakukan.

Poin penting yang harus dipahami adalah pemisahan antara **decision layer** dan **execution layer**. FSM bertugas memutuskan “apa yang harus dilakukan”, sedangkan pathfinding dan movement bertugas menentukan “bagaimana melakukannya”. Pemisahan ini membuat perilaku NPC lebih mudah dirancang, diuji, dan diperbaiki.

### Inti yang Harus Ditekankan

- **FSM** berperan sebagai lapisan keputusan yang menghubungkan **Perception** dengan **Movement**.
- Alur utama NPC adalah: melihat target, memilih state, mencari jalur, bergerak, lalu melakukan aksi.
- **NavMesh** dan **Movement** tidak menggantikan FSM; mereka hanya mengeksekusi keputusan yang dibuat oleh FSM.

### Transisi ke Slide Berikutnya

Dengan alur hubungan antar-pertemuan ini, kita bisa melihat bahwa perilaku NPC yang baik membutuhkan koordinasi antara persepsi, keputusan, navigasi, dan pergerakan. Selanjutnya, kita akan membahas beberapa pertanyaan diskusi untuk menguji pemahaman kita tentang state, transition, prioritas, dan desain perilaku NPC menggunakan FSM.

---

## Slide 077 - Pertanyaan Diskusi

### Narasi

Slide ini digunakan untuk menguji apakah mahasiswa sudah menangkap inti **Finite State Machine** sebelum masuk ke latihan. Sepuluh pertanyaan di sini bukan sekadar daftar yang harus dijawab satu per satu, melainkan titik-titik kontrol untuk memastikan konsep dasar sudah benar.

Inti yang harus muncul dalam diskusi adalah pemisahan antara **state**, **condition**, dan **transition**. `State` adalah mode perilaku NPC, misalnya `Idle`, `Chase`, `Attack`, atau `Flee`. `Condition` adalah hasil penilaian terhadap dunia, misalnya jarak player, health, atau target terlihat. `Transition` adalah aturan yang memutuskan kapan NPC berpindah dari satu state ke state lain.

Kita bisa melihat alur dasarnya sebagai berikut:

```text
Perception -> Condition -> Transition -> State -> Action
```

Artinya, NPC tidak langsung bertindak secara acak. NPC mengamati, mengevaluasi kondisi, memilih state, lalu menjalankan aksi yang sesuai.

Beberapa pertanyaan penting perlu mendapat perhatian khusus:

1. **FSM cocok untuk enemy sederhana** karena perilakunya terbatas, mudah dirancang, mudah diuji, dan mudah di-debug.
2. **Transition perlu prioritas** agar tidak terjadi konflik saat beberapa `condition` benar bersamaan.
3. **State berpindah terlalu cepat** dapat membuat NPC tampak berkedip, tidak stabil, atau tidak natural.
4. **Attack perlu cooldown** agar serangan tidak spam, animasi masuk akal, dan gameplay tetap seimbang.
5. **Flee** sebaiknya digunakan ketika NPC kalah kuat, health rendah, atau desain game memang meminta perilaku bertahan.
6. **Hierarchical FSM** membantu mengelompokkan state yang mirip, misalnya `Combat` sebagai parent dari `Chase` dan `Attack`.
7. **FSM mulai sulit** ketika jumlah state, condition, dan transition bertambah banyak sehingga aturan menjadi rumit dan sulit dipelihara.
8. **Hubungan dengan `NavMeshAgent`** adalah FSM menentukan perilaku atau target, sedangkan `NavMeshAgent` mengeksekusi pergerakan di NavMesh.
9. **NPC lebih natural** jika diberi jeda reaksi, cooldown, hysteresis, variasi kecil, dan transisi yang tidak instan.

Dalam diskusi, mahasiswa tidak perlu menghafal jawaban. Yang lebih penting adalah mereka bisa menjelaskan alasan di balik setiap keputusan desain. Misalnya, mengapa `Flee` tidak selalu aktif, mengapa `Attack` tidak boleh langsung terjadi setiap frame, dan mengapa prioritas transition penting untuk mencegah perilaku yang tidak konsisten.

### Inti yang Harus Ditekankan

- **State** adalah perilaku, **condition** adalah penilaian kondisi, dan **transition** adalah aturan perpindahan.
- FSM paling kuat untuk perilaku NPC yang terbatas, eksplisit, dan mudah diuji.
- Prioritas, cooldown, dan jeda reaksi penting agar NPC tidak tampak kaku atau tidak stabil.
- `NavMeshAgent` menangani pergerakan, sedangkan FSM menentukan perilaku dan target.

### Transisi ke Slide Berikutnya

Dengan pertanyaan diskusi ini, kita sudah punya dasar untuk merancang FSM secara mandiri. Selanjutnya, kita akan menerapkan konsep tersebut pada latihan konsep dengan NPC penjaga pintu.

---

## Slide 078 - Latihan Konsep

### Narasi

Pada slide ini, kita tidak langsung menulis kode. Kita berlatih **merancang perilaku NPC** dengan **Finite State Machine**. Skenarionya sederhana: NPC penjaga menjaga pintu, memberi peringatan, menyerang jika player tetap mendekat, kembali menjaga jika player pergi, dan memanggil bantuan jika terluka parah. Tujuan utamanya adalah melatih mahasiswa memisahkan **state**, **condition**, dan **transition** sebelum implementasi.

Intuisi praktisnya adalah begini: NPC memiliki perilaku default, yaitu `Guard`. Perilaku ini aktif selama tidak ada kondisi yang lebih penting. Ketika player mendekat, NPC perlu beralih ke perilaku yang lebih waspada. Jika ancaman meningkat, NPC menyerang. Jika kondisi NPC kritis, perilaku bertahan hidup mengambil alih. Dengan cara ini, perilaku NPC menjadi terstruktur dan mudah diuji.

State yang paling sederhana untuk skenario ini adalah:

1. `Guard` — NPC menjaga pintu, memantau jarak player, dan menjadi state default.
2. `Warn` — NPC memberi peringatan, misalnya berhenti, menghadap player, atau menampilkan dialog peringatan.
3. `Attack` — NPC menyerang karena player masih berada dalam jarak serangan.
4. `CallHelp` — NPC memanggil bantuan karena HP atau kondisi kesehatan berada di ambang kritis.

State `Return` tidak perlu dibuat terpisah. Kembali ke `Guard` cukup dimodelkan sebagai transition dari `Warn` atau `Attack` ketika player pergi.

Condition yang memicu transition sebaiknya berbasis nilai yang dapat diukur, misalnya jarak player terhadap NPC dan HP NPC. Beberapa condition yang bisa digunakan:

- `playerDistance < warnThreshold` → dari `Guard` ke `Warn`.
- `playerDistance < attackThreshold` → dari `Warn` ke `Attack`.
- `playerDistance > leaveThreshold` → dari `Warn` atau `Attack` kembali ke `Guard`.
- `npcHP < criticalThreshold` → dari `Guard`, `Warn`, atau `Attack` ke `CallHelp`.

Agar NPC tidak berpindah state terlalu cepat, threshold untuk masuk dan keluar sebaiknya tidak sama. Misalnya, player harus masuk lebih dekat untuk memicu `Warn`, dan harus keluar lebih jauh untuk kembali ke `Guard`. Pola ini sering disebut **hysteresis** atau bisa juga ditambahkan cooldown pada transition.

Prioritas transition penting karena beberapa condition bisa benar pada saat yang sama. Contoh: player dekat dan HP NPC kritis. Jika tidak ada prioritas, NPC bisa bingung apakah harus menyerang atau memanggil bantuan. Prioritas yang wajar adalah:

1. `CallHelp` — prioritas tertinggi karena kondisi kritis mengancam keberlangsungan NPC.
2. `Attack` — prioritas berikutnya jika ancaman player masih ada dan NPC masih mampu menyerang.
3. `Warn` — prioritas waspada sebelum menyerang.
4. `Guard` — state default jika tidak ada kondisi lain yang aktif.

Dengan prioritas ini, jika `npcHP < criticalThreshold` benar, NPC langsung masuk `CallHelp` meskipun player sedang dekat. Setelah kondisi kritis teratasi, NPC dapat kembali ke `Guard` atau `Attack` berdasarkan jarak player.

Untuk skenario ini, **hierarchical FSM** belum wajib. Empat state sudah cukup untuk menggambarkan perilaku penjaga pintu. Namun, HFSM bisa membantu jika state `Guard` perlu dipecah menjadi beberapa sub-state, misalnya `WalkToDoor`, `StandAtDoor`, dan `FaceDoor`. HFSM juga berguna jika ada banyak NPC penjaga dengan perilaku dasar yang sama tetapi detail kecil berbeda. Jadi, untuk latihan ini, flat FSM sudah memadai; HFSM dipertimbangkan ketika kompleksitas naik.

Sebelum lanjut, mahasiswa perlu memahami bahwa FSM bukan sekadar daftar state. Yang penting adalah **kapan transition terjadi**, **apa yang diprioritaskan**, dan **bagaimana perilaku NPC tetap stabil** ketika beberapa condition terjadi bersamaan.

### Inti yang Harus Ditekankan

- State minimal yang dibutuhkan: `Guard`, `Warn`, `Attack`, dan `CallHelp`.
- Condition utama berbasis `playerDistance` dan `npcHP`, dengan threshold yang jelas.
- Prioritas transition sebaiknya `CallHelp` > `Attack` > `Warn` > `Guard`.
- Hierarchical FSM tidak wajib untuk skenario sederhana, tetapi berguna jika state perlu dipecah menjadi sub-state.

### Transisi ke Slide Berikutnya

Setelah latihan rancangan FSM ini, kita akan menutup pertemuan dengan gambaran bahwa decision making untuk NPC tidak selalu harus menggunakan FSM. Pendekatan lain yang lebih fleksibel akan dibahas pada materi berikutnya.

---

## Slide 079 - Penutup

### Narasi

Slide ini menutup pembahasan **Finite State Machine** untuk pertemuan ini. Inti yang perlu dibawa mahasiswa adalah bahwa **FSM** bukan sekadar teknik coding, tetapi cara berpikir untuk merancang perilaku NPC secara terstruktur: setiap perilaku didefinisikan sebagai `state`, perpindahan diatur oleh `transition`, dan keputusan dipicu oleh `condition` yang jelas. Dengan cara ini, perilaku NPC menjadi lebih mudah diuji, mudah dikembangkan, dan lebih mudah dikendalikan saat kebutuhan desain berubah.

Untuk pertemuan berikutnya, pembahasan decision making akan diperluas ke pendekatan yang lebih fleksibel. Topik lanjutan yang akan dibahas meliputi:

- **Behavior Tree**,
- **Selector**,
- **Sequence**,
- **Decorator**,
- **Utility-Based AI**,
- `scoring action`,
- perbandingan **FSM**, **BT**, dan **Utility AI**.

Praktikum detail untuk Pertemuan 5 akan dibuat terpisah, dengan fokus pada alur perilaku musuh yang sederhana namun representatif:

```text
Enemy AI:
Patrol → Chase → Attack → Flee
```

Alur ini membantu mahasiswa melihat bagaimana `Patrol`, `Chase`, `Attack`, dan `Flee` dapat dihubungkan dengan `NavMeshAgent`, `Animator`, dan kondisi seperti jarak player atau nilai HP. Urutan pembelajaran yang disarankan tetap mengikuti alur dari konsep dasar menuju implementasi:

```text
1. Review pathfinding dan navigation
2. Jelaskan kebutuhan decision making
3. Perkenalkan FSM dengan contoh sederhana
4. Jelaskan state, transition, condition
5. Gunakan diagram Patrol → Chase
6. Tambahkan Attack
7. Tambahkan Flee karena HP rendah
8. Bahas prioritas transition
9. Bahas masalah state switching cepat
10. Perkenalkan hierarchical FSM
11. Hubungkan FSM dengan NavMeshAgent dan Animator
12. Tutup dengan gambaran praktikum
```

Sebelum lanjut, mahasiswa perlu memahami bahwa **FSM** sangat berguna untuk perilaku yang jelas dan diskrit, tetapi juga memiliki keterbatasan ketika jumlah `state` dan `transition` bertambah. Oleh karena itu, pertemuan berikutnya akan memperkenalkan struktur yang lebih fleksibel untuk menangani perilaku yang lebih kompleks.

### Inti yang Harus Ditekankan

- **FSM** adalah cara berpikir untuk mendesain perilaku NPC secara terstruktur, mudah diuji, dan mudah dikembangkan.
- Setiap perilaku utama sebaiknya dipetakan ke `state`, `transition`, dan `condition` yang jelas.
- Alur `Patrol → Chase → Attack → Flee` menjadi dasar praktikum yang menghubungkan decision making dengan navigation dan animasi.
- Pertemuan berikutnya akan memperluas pembahasan ke **Behavior Tree**, **Selector**, **Sequence**, **Decorator**, dan pendekatan utility-based.

### Transisi ke Slide Berikutnya

Karena slide ini merupakan penutup, tidak ada slide lanjutan dalam rangkaian ini. Mahasiswa dapat melanjutkan ke pertemuan berikutnya untuk membahas struktur decision making yang lebih fleksibel, serta menyiapkan praktikum `Enemy AI` dengan alur `Patrol → Chase → Attack → Flee`.
