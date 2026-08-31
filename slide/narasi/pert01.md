# Narasi Game Cerdas - Pertemuan 01

## Introduction to Intelligent Games & Game AI

Sumber: markdown/pert01.md

---

## Slide 001 - Cover

### Narasi

Selamat datang pada pertemuan pertama mata kuliah **Game Cerdas**. Slide pembuka ini menjadi titik awal untuk memahami bagaimana sebuah game dapat memiliki perilaku yang terasa hidup, terutama melalui **NPC** yang mampu mengamati lingkungan, mengambil keputusan, dan melakukan aksi. Dalam konteks ini, **Game AI** bukan sekadar membuat karakter bergerak otomatis, tetapi membangun sistem keputusan yang konsisten, dapat dikendalikan, dan sesuai dengan tujuan desain game.

Pertemuan ini akan membahas beberapa fondasi penting, mulai dari definisi **Game AI**, tujuan penggunaan kecerdasan dalam game, perbedaan antara **Game AI** dan **Academic AI**, hingga konsep **game loop** yang menjadi dasar eksekusi perilaku di dalam game. Mahasiswa juga akan dikenalkan pada pasangan **agent** dan **environment**, serta alur dasar **Perception–Decision–Action** yang akan menjadi pola pikir utama di seluruh mata kuliah.

Sebagai gambaran praktis, pertemuan ini juga menyertakan pengantar **Unity** untuk Game AI dan praktikum sederhana berupa `NPC Detector`. Melalui praktikum tersebut, mahasiswa dapat melihat bagaimana sebuah agent mulai “mendeteksi” keadaan di sekitarnya sebelum kemudian mengambil keputusan. Intinya, sebelum masuk ke topik yang lebih kompleks, mahasiswa perlu memahami bahwa perilaku NPC dibangun dari siklus pengamatan, penilaian, dan aksi yang terus berulang di dalam game.

### Inti yang Harus Ditekankan

- **Game AI** adalah sistem yang memungkinkan NPC atau agent dalam game mengamati lingkungan, mengambil keputusan, dan melakukan aksi.
- Pola dasar **Perception–Decision–Action** menjadi fondasi untuk memahami perilaku NPC, pathfinding, steering, FSM, behavior tree, dan topik lanjutan lainnya.
- **Unity** digunakan sebagai lingkungan implementasi, dengan praktikum awal `NPC Detector` untuk membangun intuisi dasar agent yang berinteraksi dengan environment.

### Transisi ke Slide Berikutnya

Setelah memahami gambaran umum pertemuan ini, kita akan melihat posisi pertemuan pertama dalam keseluruhan mata kuliah, yaitu sebagai fondasi sebelum masuk ke topik yang lebih spesifik seperti perception, memory, movement AI, pathfinding, FSM, Behavior Tree, dan sistem keputusan lainnya.

---

## Slide 002 - Posisi Pertemuan 1 dalam Mata Kuliah

### Narasi

Slide ini membantu mahasiswa melihat posisi pertemuan pertama dalam keseluruhan mata kuliah **Game Cerdas**. Pertemuan ini bukan sekadar pengenalan istilah, tetapi membangun **fondasi berpikir** yang akan dipakai di topik berikutnya.

Materi ke depan akan membahas banyak komponen, mulai dari **perception**, **memory**, **movement**, **steering**, **pathfinding**, hingga teknik pengambilan keputusan seperti **FSM**, **Behavior Tree**, **utility**, dan **tactical**. Ada juga topik yang lebih luas seperti **PCG**, **DDA**, **player modeling**, **machine learning**, dan **Unity ML-Agents**.

Namun, semua topik tersebut berangkat dari satu pola dasar yang sama:

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

Dalam pola ini, **Agent** adalah entitas yang memiliki perilaku, misalnya NPC, musuh, atau karakter yang dikendalikan sistem. **Perception** adalah proses mengamati kondisi lingkungan, seperti jarak musuh, target, atau status pemain. **Decision** adalah tahap memilih tindakan berdasarkan hasil observasi dan aturan atau model yang dimiliki agent. **Action** adalah eksekusi tindakan, misalnya bergerak, menyerang, menghindar, atau menunggu. **Environment** adalah dunia game yang menerima aksi tersebut dan kemudian menjadi kondisi baru yang diamati kembali.

Poin penting yang harus dipahami sebelum lanjut adalah: hampir semua sistem cerdas dalam game dapat dibaca sebagai cara agent berinteraksi dengan environment melalui **perception–decision–action**. Dengan kerangka ini, mahasiswa tidak perlu menghafal setiap teknik secara terpisah, tetapi bisa melihat fungsi masing-masing teknik dalam satu alur perilaku.

### Inti yang Harus Ditekankan

- Pertemuan 1 adalah **fondasi** untuk seluruh topik Game Cerdas.
- Topik lanjutan seperti **pathfinding**, **FSM**, **Behavior Tree**, **utility**, dan **machine learning** tetap berangkat dari pola **Agent → Perception → Decision → Action → Environment**.
- Mahasiswa perlu memahami bahwa sistem cerdas dalam game pada dasarnya membuat **NPC** atau **agent** mampu mengamati, memutuskan, dan bertindak di dalam **environment**.

### Transisi ke Slide Berikutnya

Setelah posisi pertemuan ini jelas, langkah berikutnya adalah memahami mengapa **Game Cerdas** penting dalam pengembangan game modern, terutama untuk menciptakan pengalaman bermain yang lebih hidup, menantang, dan responsif terhadap pemain.

---

## Slide 003 - Mengapa Game Cerdas Penting?

### Narasi

Pada slide ini, kita berhenti sejenak sebelum masuk ke definisi teknis. Pertanyaannya sederhana: mengapa **Game AI** menjadi bagian penting dari game modern? Jawabannya bukan hanya karena game membutuhkan karakter yang bergerak, tetapi karena pengalaman bermain dibentuk oleh interaksi antara `player` dan `environment`.

Game modern tidak cukup hanya memiliki grafik yang indah. Jika dunia terasa statis, `NPC` tidak bereaksi, musuh tidak menantang, dan `level` selalu sama, pemain akan cepat kehilangan rasa keterlibatan. Karena itu, game membutuhkan sistem yang dapat merespons kondisi permainan.

Beberapa kebutuhan utama yang dibahas pada slide ini adalah:

- `NPC` yang **responsif**, sehingga interaksi dengan pemain terasa bermakna.
- musuh yang **menantang**, sehingga permainan tidak terasa datar.
- dunia yang terasa **hidup**, bukan sekadar latar belakang visual.
- `level` yang **bervariasi**, sehingga pengalaman bermain tidak cepat membosankan.
- `gameplay` yang **adaptif**, sehingga permainan dapat menyesuaikan dengan perilaku pemain.
- sistem yang dapat **merespons perilaku player**.

Dari sisi pengalaman, **Game AI** membantu menciptakan permainan yang **menarik**, **menantang**, **tidak monoton**, **dinamis**, dan lebih **imersif**. Artinya, kecerdasan dalam game tidak selalu berarti membuat musuh menjadi sangat sulit. Yang lebih penting adalah membuat pemain merasa bahwa dunia permainan memiliki reaksi, tujuan, dan variasi.

Sebelum lanjut ke definisi **Game Cerdas**, mahasiswa perlu memahami bahwa **Game AI** adalah lapisan desain dan teknis yang menghubungkan perilaku `player` dengan respons `environment`. Tanpa lapisan ini, game hanya menjadi sekumpulan aset visual; dengan lapisan ini, game menjadi sistem yang dapat berinteraksi.

### Inti yang Harus Ditekankan

- **Game AI** penting karena game modern membutuhkan dunia yang responsif, bukan hanya visual yang bagus.
- `NPC`, musuh, `level`, dan `gameplay` harus dapat bereaksi terhadap kondisi permainan dan perilaku `player`.
- Tujuan utama **Game AI** adalah membuat pengalaman bermain lebih menarik, menantang, dinamis, tidak monoton, dan imersif.
- Kecerdasan dalam game harus membuat respons dunia terasa alami dan mendukung pengalaman bermain.

### Transisi ke Slide Berikutnya

Setelah memahami mengapa **Game AI** penting, langkah berikutnya adalah menjawab pertanyaan yang lebih mendasar: apa yang dimaksud dengan **Game Cerdas**?

---

## Slide 004 - Apa yang Dimaksud Game Cerdas?

### Narasi

**Game Cerdas** adalah game yang memiliki sistem, karakter, atau lingkungan yang dapat merespons kondisi permainan secara dinamis. Artinya, perilaku dalam game tidak hanya berjalan sebagai animasi tetap, tetapi berubah berdasarkan keadaan `player`, posisi musuh, kondisi level, atau hasil interaksi sebelumnya.

Intuisi praktisnya sederhana: game terasa cerdas ketika pemain melihat bahwa dunia permainan "mengerti" apa yang sedang terjadi. Contoh yang sering muncul adalah:

- `enemy` mengejar `player` saat terlihat, lalu berhenti atau kembali berpatroli saat target hilang.
- `NPC` berpatroli, kemudian mencari `player` atau objek tertentu ketika kehilangan target.
- Musuh memilih `cover` untuk mengurangi risiko terkena serangan.
- Dungeon atau level dibuat secara prosedural sehingga setiap permainan bisa berbeda.
- Tingkat kesulitan menyesuaikan performa `player`, misalnya menambah tekanan jika pemain terlalu kuat.
- `agent` belajar dari pengalaman, misalnya memperbaiki strategi setelah beberapa kali kalah.

Poin penting yang perlu dipahami: **game cerdas tidak selalu berarti menggunakan machine learning**. Banyak perilaku yang terasa cerdas justru dibangun dari aturan sederhana, kondisi, dan logika yang dirancang dengan baik. Dalam konteks game, "cerdas" lebih sering berarti responsif, meyakinkan, dan mendukung gameplay, bukan berarti sistem tersebut setara dengan kecerdasan manusia.

Sebelum masuk ke teknik yang lebih detail, mahasiswa perlu menangkap satu hal utama: game cerdas adalah tentang **pengambilan keputusan dalam batas aturan permainan**. Sistem harus memilih tindakan yang masuk akal berdasarkan apa yang diketahui, apa yang bisa dilakukan, dan apa yang diinginkan oleh desain game.

Dengan kata lain, contoh seperti musuh mengejar, NPC mencari target, atau level yang berubah-ubah semuanya menunjukkan satu pola yang sama: ada kondisi, ada respons, dan ada tujuan desain. Pola inilah yang akan menjadi dasar pembahasan berikutnya.

### Inti yang Harus Ditekankan

- **Game cerdas** adalah game yang sistem, karakter, atau lingkungannya dapat merespons kondisi permainan secara dinamis.
- Perilaku cerdas dalam game sering dibangun dari **aturan sederhana yang dirancang baik**, bukan selalu dari machine learning.
- Contoh seperti mengejar, berpatroli, mencari `cover`, adaptasi kesulitan, dan pembangkitan level menunjukkan bahwa game merespons `player` dan keadaan permainan.

### Transisi ke Slide Berikutnya

Setelah memahami apa yang dimaksud dengan game cerdas, kita akan masuk ke teknik yang digunakan untuk membuat entitas dalam game mengambil keputusan, bergerak, beradaptasi, atau menghasilkan konten yang mendukung gameplay.

---

## Slide 005 - Apa Itu Game AI?

### Narasi

**Game AI** adalah teknik untuk membuat entitas dalam game terlihat cerdas melalui proses **pengambilan keputusan**, **pergerakan**, **persepsi**, **adaptasi**, atau **pembangkitan konten**.

Istilah ini perlu dipahami sebagai payung teknik, bukan satu algoritma tunggal. Dalam game, “cerdas” biasanya berarti entitas dapat bereaksi terhadap kondisi permainan secara yang terasa hidup, konsisten, dan mendukung pengalaman bermain.

Entitas yang dapat menggunakan **Game AI** tidak terbatas pada musuh. Beberapa contohnya:

- `enemy`
- `NPC`
- `companion`
- `boss`
- `animal`
- `vehicle`
- `game director`
- `procedural generator`
- `adaptive difficulty system`

Artinya, **Game AI** bisa hadir pada karakter yang terlihat oleh pemain, tetapi juga pada sistem yang bekerja di balik layar, misalnya sistem yang mengatur alur permainan atau menghasilkan konten secara dinamis.

Secara konseptual, **Game AI** sering bekerja melalui beberapa proses utama:

1. **Persepsi**  
   Entitas membaca kondisi game, misalnya jarak pemain, visibilitas, suara, atau status lingkungan.

2. **Pengambilan keputusan**  
   Berdasarkan kondisi tersebut, entitas memilih aksi, misalnya `idle`, `alert`, `chase`, `attack`, atau `flee`.

3. **Pergerakan**  
   Keputusan diubah menjadi gerak, misalnya mencari jalur, menghindari rintangan, atau mengikuti target.

4. **Adaptasi**  
   Sistem dapat menyesuaikan perilaku atau tantangan berdasarkan performa pemain.

5. **Pembangkitan konten**  
   Game dapat membuat atau mengubah elemen permainan secara dinamis, seperti level, musuh, atau situasi tertentu.

Poin penting yang harus dipahami mahasiswa adalah tujuan utama **Game AI** bukan sekadar menghasilkan kecerdasan teoritis. Tujuan utamanya adalah mendukung **gameplay**, membuat interaksi terasa hidup, menjaga keseimbangan tantangan, dan meningkatkan pengalaman pemain.

Dalam implementasi, **Game AI** biasanya berupa sistem yang membaca kondisi game, memproses aturan atau model perilaku, lalu menghasilkan aksi. Dalam konteks Unity, ini dapat berupa script yang mengubah `state`, memanggil sistem pathfinding, mengatur `transform`, atau mengaktifkan perilaku tertentu pada `GameObject`.

Sebelum lanjut, mahasiswa perlu memahami bahwa **Game AI** adalah teknik desain dan implementasi yang menghubungkan kondisi permainan dengan perilaku entitas.

### Inti yang Harus Ditekankan

- **Game AI** adalah teknik untuk membuat entitas game terlihat cerdas melalui keputusan, gerak, persepsi, adaptasi, atau pembangkitan konten.
- **Game AI** dapat diterapkan pada banyak entitas, termasuk `enemy`, `NPC`, `companion`, `boss`, `vehicle`, `game director`, dan sistem adaptif.
- Tujuan utama **Game AI** adalah mendukung **gameplay** dan pengalaman pemain, bukan hanya mencapai kecerdasan teoritis.

### Transisi ke Slide Berikutnya

Setelah memahami ruang lingkup **Game AI**, kita akan menyederhanakan definisinya menjadi bentuk yang lebih mudah diimplementasikan, yaitu sistem yang membuat entitas game memilih aksi berdasarkan kondisi permainan.

---

## Slide 006 - Definisi Sederhana Game AI

### Narasi

Pada slide ini, kita mulai dari definisi yang paling sederhana. **Game AI** dapat dipahami sebagai:

```text
Sistem yang membuat game entity
dapat memilih aksi berdasarkan kondisi game.
```

Artinya, inti dari perilaku cerdas dalam game bukan membuat entitas benar-benar berpikir seperti manusia, tetapi membuat entitas mampu **memilih aksi** yang sesuai dengan **kondisi game** saat itu.

Kondisi game bisa berupa jarak `player`, visibilitas, kesehatan, posisi, atau situasi lingkungan. Aksi bisa berupa bergerak, menyerang, bersembunyi, memanggil bantuan, atau berubah `state`.

Contoh paling sederhana adalah:

```text
Jika player dekat:
    enemy menjadi alert

Jika player jauh:
    enemy idle
```

Dalam contoh ini, ada dua bagian penting:

- **Kondisi**: `player dekat` atau `player jauh`.
- **Aksi**: `enemy menjadi alert` atau `enemy idle`.

Secara praktis, sistem akan memeriksa kondisi, misalnya jarak antara `enemy` dan `player`. Jika jarak di bawah ambang tertentu, `enemy` masuk ke `state` `alert`. Jika jarak masih jauh, `enemy` tetap pada `state` `idle`.

Contoh ini menunjukkan bahwa perilaku sederhana sudah cukup untuk membuat game terasa hidup. `Player` akan merasakan bahwa `enemy` tidak diam terus, tetapi bereaksi terhadap jarak.

Contoh berikutnya sedikit lebih kompleks:

```text
Jika player terlihat:
    enemy memilih cover
    memanggil bantuan
    lalu menyerang dari posisi aman
```

Di sini, satu kondisi dapat memicu **sekuens aksi**, bukan hanya satu `state`. Urutan eksekusinya bisa dipahami sebagai berikut:

1. Sistem memeriksa apakah `player` terlihat oleh `enemy`.
2. Jika terlihat, `enemy` mencari `cover` atau posisi perlindungan.
3. `Enemy` memanggil bantuan, misalnya menambah jumlah musuh atau memicu event.
4. Setelah posisi aman, `enemy` melakukan serangan.

Hasil yang diharapkan adalah `enemy` tidak langsung menyerang secara buta, tetapi menunjukkan perilaku taktis sederhana. Perilaku seperti ini membuat gameplay lebih menantang dan lebih mudah dipahami oleh `player`.

Yang perlu dipahami mahasiswa sebelum lanjut adalah: **Game AI pada dasarnya adalah pemetaan dari kondisi game ke aksi entitas**. Semakin banyak kondisi dan semakin terstruktur aksinya, semakin kompleks perilaku yang dihasilkan.

### Inti yang Harus Ditekankan

- **Game AI** adalah sistem yang membuat `game entity` memilih `aksi` berdasarkan `kondisi game`.
- Contoh sederhana menggunakan `jika-maka` sudah dapat menghasilkan perilaku dasar seperti `idle` dan `alert`.
- Contoh kompleks menunjukkan bahwa satu kondisi dapat memicu beberapa aksi berurutan, misalnya `cover`, `call help`, lalu `attack`.
- Fokus utama adalah hubungan antara **kondisi**, **keputusan**, dan **perilaku entitas** dalam game.

### Transisi ke Slide Berikutnya

Setelah memahami definisi sederhana ini, kita perlu memperluas pandangan bahwa perilaku cerdas dalam game tidak selalu hanya muncul pada `enemy` atau `NPC` yang terlihat oleh `player`.

---

## Slide 007 - Game AI Bukan Hanya NPC

### Narasi

Pada slide ini, kita perlu meluruskan satu persepsi yang sering muncul: **Game AI** tidak terbatas pada musuh yang mengejar atau menyerang pemain. Slide sebelumnya sudah memberi definisi sederhana, yaitu sistem yang membuat game entity dapat memilih aksi berdasarkan kondisi. Sekarang kita perlu memperluas pandangan itu.

Intuisi praktisnya sederhana. Ketika pemain merasa dunia game hidup, biasanya ada banyak sistem yang bekerja bersamaan. Ada karakter yang berjalan, ada rute yang dipilih, ada keputusan yang diambil, ada konten yang muncul, dan ada tingkat kesulitan yang menyesuaikan. Semua itu bisa menjadi bagian dari **Game AI**.

Cakupan **Game AI** dapat dilihat dari beberapa kelompok berikut:

- **Perilaku NPC**: membuat karakter non-player melakukan aksi yang wajar, seperti berdiri, berjalan, berbicara, atau bereaksi.
- **Movement agent** dan **pathfinding**: membuat agent dapat bergerak di lingkungan, memilih rute, dan menghindari rintangan.
- **Decision making**: menentukan aksi apa yang harus dilakukan berdasarkan kondisi, misalnya `idle`, `alert`, `attack`, atau `flee`.
- **Tactical AI**: membantu agent memilih posisi, formasi, atau strategi dalam situasi tertentu.
- **Procedural content generation**: membuat konten game secara otomatis, seperti dungeon, level, atau item.
- **Adaptive difficulty**: menyesuaikan tantangan agar tetap sesuai kemampuan pemain.
- **Player modeling**: mengenali pola atau gaya bermain pemain untuk menyesuaikan respons sistem.
- **AI director**: mengatur momen, event, atau tekanan dalam permainan agar pengalaman terasa dinamis.
- **Machine learning agent**: agent yang dapat belajar dari data atau pengalaman, bukan hanya mengikuti aturan tetap.

Contoh pada slide menunjukkan bahwa **Game AI** bisa bekerja di level yang berbeda. **PCG** dapat membuat dungeon baru, **DDA** dapat menyesuaikan kekuatan musuh, dan **player modeling** dapat mengenali apakah pemain bermain agresif, defensif, atau eksploratif. Dengan kata lain, **Game AI** tidak hanya ada di dalam satu karakter, tetapi juga di dalam sistem yang membentuk pengalaman bermain.

Dalam implementasi, komponen-komponen ini sering tersebar di beberapa bagian game. Misalnya, `movement agent` menangani gerak, `pathfinding` menangani rute, `decision making` menangani pilihan aksi, dan `difficulty manager` menangani penyesuaian tantangan. Mahasiswa perlu memahami bahwa satu perilaku yang terlihat sederhana di layar biasanya didukung oleh beberapa sistem yang saling terhubung.

Sebelum melanjutkan, hal penting yang harus dipahami adalah: **Game AI** adalah lapisan sistem yang membuat game entity dan dunia dapat merespons kondisi. Ia tidak hanya membuat musuh “bergerak”, tetapi juga membuat game terasa lebih hidup, lebih responsif, dan lebih bervariasi.

### Inti yang Harus Ditekankan

- **Game AI** bukan hanya AI untuk enemy, tetapi mencakup banyak sistem yang mendukung perilaku game.
- Komponen seperti **pathfinding**, **decision making**, **PCG**, **adaptive difficulty**, dan **player modeling** adalah bagian dari cakupan **Game AI**.
- Fokus utamanya adalah membuat game entity dan lingkungan dapat merespons kondisi, bukan sekadar menjalankan animasi atau aturan tetap.

### Transisi ke Slide Berikutnya

Setelah memperluas cakupan **Game AI**, langkah berikutnya adalah memahami tujuan utama dari semua sistem tersebut, yaitu bagaimana mereka membentuk pengalaman bermain.

---

## Slide 008 - Tujuan AI dalam Game

### Narasi

Pada slide ini kita memusatkan perhatian pada **tujuan utama Game AI**. Setelah memahami bahwa Game AI tidak terbatas pada perilaku musuh, langkah berikutnya adalah memahami mengapa sistem tersebut dibangun. Intinya, Game AI bukan sekadar kumpulan algoritma, melainkan alat desain untuk meningkatkan pengalaman bermain.

```text
Membuat pengalaman bermain lebih menarik.
```

Kalimat ini menjadi acuan utama. Artinya, setiap keputusan teknis harus bisa dijawab dengan pertanyaan: apakah hal ini membuat `player` lebih terlibat, lebih tertantang, atau lebih menikmati dunia game? Jika sebuah perilaku hanya terlihat canggih tetapi tidak memengaruhi rasa bermain, maka tujuannya belum tercapai.

Secara teknis, tujuan tersebut dijabarkan menjadi beberapa kemampuan:

- **Respons NPC**: `NPC` harus mampu bereaksi terhadap `player`, misalnya mendekat, menghindar, atau memberi informasi.
- **Tantangan enemy**: `enemy` harus memberikan tekanan yang cukup agar `gameplay` terasa bermakna.
- **Dunia yang hidup**: lingkungan tidak terasa statis, karena ada agen yang bergerak, berinteraksi, dan memiliki tujuan.
- **Gameplay tidak monoton**: pola permainan harus bervariasi agar `player` tidak cepat bosan.
- **Adaptasi game**: sistem dapat menyesuaikan tekanan atau konten berdasarkan kondisi permainan.
- **Balancing**: AI membantu menjaga keseimbangan antara tantangan dan kemampuan `player`.
- **Variasi konten**: perilaku agen dapat menghasilkan situasi yang berbeda di setiap sesi bermain.

Dalam praktik, tujuan-tujuan ini sering diwujudkan melalui kombinasi **perilaku NPC**, **pathfinding**, **decision making**, dan **steering**. Misalnya, agen yang mampu memilih rute, menentukan kapan menyerang, dan bergerak secara natural akan terasa lebih hidup daripada agen yang hanya bergerak mengikuti pola tetap. Namun, semua elemen teknis tersebut tetap harus melayani satu hal: pengalaman `player`.

Sebagai intuisi praktis, mahasiswa perlu membiasakan diri menilai Game AI dari dua sisi. Sisi pertama adalah sisi teknis: apakah agen dapat merespons, memilih aksi, dan bergerak secara konsisten? Sisi kedua adalah sisi desain: apakah respons tersebut membuat `player` merasa tertantang, memahami situasi, dan ingin mencoba strategi baru? Kedua sisi ini harus berjalan bersama.

Sebelum melanjutkan ke pembahasan berikutnya, hal penting yang harus dipahami adalah bahwa **Game AI tidak dinilai hanya dari kecerdasan algoritmanya**. Ia dinilai dari kontribusinya terhadap `gameplay`, imersi, dan kualitas pengalaman bermain. Dengan kata lain, tujuan akhir Game AI adalah membuat game lebih baik, bukan sekadar membuat agen lebih pintar.

### Inti yang Harus Ditekankan

- Tujuan utama Game AI adalah **membuat pengalaman bermain lebih menarik**.
- Tujuan teknis seperti respons `NPC`, tantangan `enemy`, dan adaptasi `gameplay` adalah sarana untuk mencapai tujuan tersebut.
- Setiap perilaku agen harus dikaitkan dengan dampak terhadap `player`, bukan hanya pada kompleksitas teknis.

### Transisi ke Slide Berikutnya

Setelah memahami tujuan utamanya, kita perlu membedakan antara AI yang secara teknis kuat dan AI yang benar-benar menyenangkan bagi `player`.

---

## Slide 009 - AI yang “Pintar” vs AI yang “Menyenangkan”

### Narasi

Pada slide ini, kita akan membedakan dua hal yang sering tertukar dalam Game AI: **AI yang “pintar”** dan **AI yang “menyenangkan”**. Dalam konteks akademik atau sistem umum, “pintar” biasanya berarti mampu menghasilkan keputusan yang optimal, akurat, atau paling rasional. Namun, dalam game, ukuran keberhasilan AI tidak hanya terletak pada seberapa baik ia menyelesaikan masalah, tetapi pada seberapa baik ia membentuk pengalaman bermain.

Contoh yang paling mudah dipahami adalah perilaku `enemy` yang selalu menembak sempurna dan tidak pernah meleset.

```text
Enemy selalu menembak sempurna
dan tidak pernah meleset.
```

Secara teknis, perilaku ini bisa dianggap sangat “pintar” karena tingkat akurasinya sempurna. Namun, dari sisi gameplay, perilaku tersebut justru bisa membuat `player` frustrasi. Jika `player` tidak memiliki ruang untuk bereaksi, menghindar, atau mengambil keputusan, maka tantangan yang seharusnya terasa seru berubah menjadi pengalaman yang tidak adil.

Oleh karena itu, AI dalam game harus dirancang dengan tujuan desain, bukan hanya tujuan teknis. Beberapa sifat yang perlu diperhatikan adalah:

- **menantang**, tetapi tidak mustahil,
- **dapat dipahami** oleh `player`,
- memberi kesempatan `player` untuk bereaksi,
- terasa **adil**,
- dan mendukung **desain gameplay** secara keseluruhan.

Intuisi praktisnya adalah: AI game bukan sekadar mesin pembuat keputusan, tetapi juga alat desain. AI yang baik bisa saja sengaja tidak sempurna. Misalnya, `enemy` dapat memiliki jeda sebelum menyerang, pola gerakan yang bisa dibaca, atau tingkat keberhasilan yang bisa diatur. Hal-hal seperti ini membuat `player` merasa memiliki kesempatan, sehingga momen keberhasilan terasa lebih memuaskan.

Prinsip penting dari slide ini adalah:

> **Game AI tidak harus sempurna. Game AI harus membuat game lebih baik.**

Artinya, kualitas AI dalam game harus dinilai dari dampaknya terhadap pengalaman `player`. Jika AI terlalu kuat, terlalu cepat, atau terlalu akurat hingga merusak keseimbangan permainan, maka AI tersebut belum tentu baik. Sebaliknya, AI yang tampak lebih sederhana tetapi mampu menciptakan ketegangan, ritme, dan ruang keputusan bagi `player` justru bisa menjadi AI yang lebih efektif.

Sebelum lanjut, mahasiswa perlu memahami bahwa dalam Game AI, **kebenaran teknis** dan **kepuasan pemain** tidak selalu identik. AI yang optimal secara matematis belum tentu menghasilkan gameplay yang baik. Oleh karena itu, desain AI game harus selalu mempertimbangkan tantangan, keadilan, keterbacaan perilaku, dan dukungan terhadap fun factor.

### Inti yang Harus Ditekankan

- **AI yang “pintar”** belum tentu menghasilkan pengalaman bermain yang baik.
- AI game harus **menantang, dapat dipahami, adil, dan mendukung gameplay**.
- Impersepsi tertentu bisa sengaja dirancang agar `player` memiliki ruang bereaksi.
- Prinsip utamanya: **Game AI tidak harus sempurna, tetapi harus membuat game lebih baik**.

### Transisi ke Slide Berikutnya

Setelah memahami bahwa AI game tidak selalu harus optimal secara teknis, kita akan melanjutkan ke perbandingan antara **Game AI** dan **Academic AI**, untuk melihat bagaimana fokus, tujuan, dan cara mengevaluasi AI dapat berbeda di kedua konteks tersebut.

---

## Slide 010 - Game AI vs Academic AI

### Narasi

Slide ini mengajak kita membedakan dua orientasi utama dalam membangun sistem cerdas.

**Academic AI** biasanya berfokus pada kualitas solusi secara formal. Fokusnya antara lain:

- **optimalitas**, yaitu mencari jawaban terbaik menurut model atau metrik tertentu;
- **akurasi**, yaitu hasil yang selaras dengan data atau teori;
- **teori** dan **pembuktian**, yaitu penjelasan yang dapat dipertanggungjawabkan secara ilmiah;
- **generalisasi**, yaitu kemampuan bekerja baik pada kasus baru;
- **benchmark**, yaitu evaluasi menggunakan standar atau dataset tertentu.

Dalam game, orientasinya berbeda. **Game AI** lebih berfokus pada hasil yang terasa benar dan berguna saat permainan berjalan. Fokusnya antara lain:

- **pengalaman player**, yaitu perilaku yang membuat pemain merasa tertantang dan tidak frustrasi;
- **performa real-time**, yaitu keputusan harus selesai dalam waktu yang sangat singkat;
- **kontrol designer**, yaitu perilaku dapat diatur agar sesuai desain level atau gameplay;
- **debugging**, yaitu perilaku mudah diamati, diuji, dan diperbaiki;
- **believability**, yaitu perilaku terasa masuk akal meskipun tidak selalu optimal;
- **fun factor**, yaitu kontribusi terhadap keseruan permainan.

Intuisi praktisnya sederhana. Academic AI sering bertanya, “Apakah solusi ini benar, optimal, atau dapat dibuktikan?” Sementara Game AI bertanya, “Apakah perilaku ini terasa wajar, cukup cepat, dan membuat game lebih enak dimainkan?”

Perbedaan ini penting karena game berjalan dalam batasan waktu yang ketat. Sebuah perilaku NPC yang secara teori optimal tetapi lambat, sulit dikontrol, atau terasa tidak adil dapat merusak pengalaman bermain. Karena itu, **Game AI** sering memilih solusi yang **cukup baik**, **cepat**, dan **mudah dikontrol**.

Sebelum lanjut, mahasiswa perlu memahami bahwa keberhasilan sistem cerdas dalam game tidak hanya diukur dari akurasi atau optimalitas. Keberhasilan juga ditentukan oleh bagaimana perilaku tersebut dirasakan pemain, bagaimana ia berjalan dalam waktu nyata, dan bagaimana desainer dapat mengaturnya.

### Inti yang Harus Ditekankan

- **Academic AI** menekankan optimalitas, akurasi, teori, pembuktian, generalisasi, dan benchmark.
- **Game AI** menekankan pengalaman player, performa real-time, kontrol designer, debugging, believability, dan fun factor.
- Solusi Game AI sering dipilih karena **cukup baik**, **cepat**, dan **mudah dikontrol**, bukan karena selalu optimal secara formal.

### Transisi ke Slide Berikutnya

Dengan memahami perbedaan orientasi ini, kita dapat melihat perbandingan yang lebih rinci antara Academic AI dan Game AI pada beberapa aspek penting.

---

## Slide 011 - Perbandingan Game AI dan Academic AI

### Narasi

Pada slide ini, kita membandingkan **Game AI** dan **Academic AI** dari sisi cara berpikir, bukan dari sisi “mana yang lebih baik”. Keduanya sama-sama bagian dari kecerdasan artifisial, tetapi tujuan akhirnya berbeda.

**Academic AI** biasanya mengejar solusi yang **optimal**, **akurat**, dan dapat dibuktikan secara formal. Evaluasinya sering menggunakan **benchmark**, metrik, dan pengujian yang bisa dilakukan secara offline atau membutuhkan waktu lama.

**Game AI** berbeda. Fokus utamanya adalah **pengalaman bermain**. AI dalam game harus terasa **menantang**, **adil**, dan **responsif** terhadap pemain. Karena game berjalan dalam **real-time**, proses AI tidak boleh terlalu lambat atau tidak stabil.

Perbedaan ini juga terlihat pada kebutuhan **kontrol designer**. Dalam game, perilaku AI sering harus mudah diatur, diuji, dan diperbaiki. Oleh karena itu, output AI tidak cukup hanya **benar secara teori**, tetapi juga harus **believable** dan **playable**.

Beberapa perilaku NPC seperti `patrol`, `chase`, `attack`, dan `cover` menunjukkan sifat pragmatis Game AI. Perilaku ini tidak selalu harus optimal secara matematis, tetapi harus terasa masuk akal, mudah di-debug, dan tetap menjaga kenyamanan pemain.

### Inti yang Harus Ditekankan

- **Game AI lebih pragmatis**: solusi yang cukup baik, cepat, dan playable sering lebih penting daripada solusi optimal.
- **Academic AI** cenderung fokus pada optimalitas, akurasi, benchmark, dan metrik formal.
- **Game AI** cenderung fokus pada fun, fairness, responsiveness, believability, dan kontrol designer.
- Perilaku NPC seperti `patrol`, `chase`, `attack`, dan `cover` dinilai dari pengalaman pemain, bukan hanya kebenaran formal.

### Transisi ke Slide Berikutnya

Setelah memahami perbedaan orientasi antara Game AI dan Academic AI, kita akan melihat contoh konkret bagaimana kedua pendekatan tersebut mengajukan pertanyaan yang berbeda ketika menghadapi masalah sederhana: enemy mengejar player.

---

## Slide 012 - Contoh Perbedaan Pendekatan

### Narasi

Pada slide ini kita melihat satu masalah sederhana:

```text
Enemy harus mengejar player.
```

Masalah ini tampak mudah, tetapi cara memahaminya sudah menunjukkan perbedaan besar antara pendekatan akademik dan pendekatan game.

Dalam pendekatan akademik, pertanyaan utamanya biasanya:

```text
Algoritma apa yang paling optimal?
```

Fokusnya ada pada ketepatan, efisiensi, atau kualitas solusi secara formal, misalnya jalur terpendek, keputusan paling rasional, atau metrik evaluasi terbaik.

Sementara itu, pendekatan game bertanya pada hal yang berbeda:

- Apakah `enemy` terasa menantang?
- Apakah `player` punya kesempatan menghindar?
- Apakah `enemy` tidak menabrak tembok?
- Apakah performa tetap stabil?
- Apakah `behavior` mudah di-debug?

Pertanyaan-pertanyaan ini menunjukkan bahwa **tujuan akhir** bukan hanya solusi yang benar, tetapi **pengalaman bermain** yang baik.

Secara praktis, "menantang" berkaitan dengan **desain perilaku**: `enemy` yang terlalu kuat membuat `player` frustrasi, sedangkan `enemy` yang terlalu lemah membuat permainan membosankan. "Kesempatan menghindar" berkaitan dengan **fairness** dan **responsiveness**, karena `player` harus merasa kemampuannya masih bermakna.

"`enemy` tidak menabrak tembok" berkaitan dengan **pathfinding** dan **steering**, misalnya pencarian jalur, penghindaran rintangan, atau aturan agar `agent` tetap berada di area valid. "Performa stabil" penting karena game berjalan **real-time**, dan "`behavior` mudah di-debug" penting karena perilaku yang sulit dipahami akan sulit diperbaiki ketika `enemy` berhenti, terjebak, atau bereaksi tidak wajar.

Jadi, pada slide ini mahasiswa perlu memahami bahwa **kecerdasan game** sering dinilai bukan hanya dari optimalitas, tetapi dari **playability**, **stabilitas**, dan **kemudahan kontrol** oleh desainer.

### Inti yang Harus Ditekankan

- Masalah sederhana seperti `enemy` mengejar `player` menunjukkan perbedaan fokus: pendekatan akademik mencari optimalitas, pendekatan game mencari pengalaman bermain.
- Pertanyaan utama game bukan hanya "apakah benar?", tetapi "apakah menantang, adil, stabil, dan mudah dikontrol?"
- Hal seperti tidak menabrak tembok, performa `real-time`, dan kemudahan `debug` adalah bagian dari kualitas perilaku game.
- Mahasiswa perlu memahami bahwa **kecerdasan game** dinilai dari `playability`, stabilitas, dan kontrol desainer, bukan hanya metrik formal.

### Transisi ke Slide Berikutnya

Setelah memahami perbedaan pertanyaan yang diajukan, slide berikutnya akan membahas **believability**, yaitu bagaimana perilaku `agent` terlihat masuk akal bagi `player`.

---

## Slide 013 - Believability

### Narasi

**Believability** adalah kualitas perilaku agen game yang membuat pemain merasa tindakan agen masuk akal, meskipun di balik layar agen tidak selalu menghitung solusi paling optimal. Dalam konteks game, pemain tidak menilai apakah agen benar-benar “pintar” secara matematis, tetapi apakah perilakunya terasa wajar dalam dunia yang sedang dimainkan.

Intuisi praktisnya sederhana: pemain akan memaafkan agen yang salah arah sesekali, tetapi akan merasa janggal jika agen melakukan hal yang mustahil. Misalnya, `guard` yang tiba-tiba melihat `player` dari balik tembok akan merusak rasa percaya terhadap lingkungan. Sebaliknya, `guard` yang hanya melihat dalam jangkauan pandang dan berhenti mencari setelah beberapa waktu akan terasa lebih hidup.

Beberapa contoh penting pada slide ini adalah:

- `guard` tidak melihat menembus tembok, sehingga **perception** agen dibatasi oleh lingkungan.
- `enemy` mencari `player` di **posisi terakhir terlihat**, bukan langsung menghilang dari memori.
- `NPC` bereaksi saat ada suara, sehingga dunia terasa memiliki **sumber informasi** yang bisa dideteksi.
- `squad` tidak menumpuk di tempat yang sama, biasanya karena ada aturan **separation** atau spacing antar agen.
- `enemy` tidak langsung lupa setelah kehilangan `player`, sehingga perilaku pencarian terasa lebih konsisten.

Dari sisi implementasi, believability sering dibangun dari kombinasi **perception**, **memory**, **state**, dan **action**. Agen perlu tahu apa yang bisa dilihat atau didengar, menyimpan informasi seperti `lastKnownPosition`, lalu memilih perilaku seperti `search`, `investigate`, `patrol`, atau `returnToPost`. Dalam praktik, pola ini sering diwujudkan lewat state sederhana seperti `patrol`, `alert`, `search`, dan `return`.

Tidak semua perilaku harus optimal; yang penting adalah alur perilaku terasa masuk akal dan dapat diprediksi oleh pemain. Algoritma yang selalu memilih jalur terpendek atau selalu menemukan pemain dengan cepat belum tentu menghasilkan pengalaman bermain yang baik. Dalam game, perilaku yang sedikit terbatas, sedikit lambat, atau sedikit “manusiawi” justru bisa membuat pemain merasa dunia game memiliki aturan yang konsisten.

Hal yang harus dipahami mahasiswa sebelum lanjut adalah bahwa believability berbeda dari optimalitas. Believability membantu pemain mempercayai dunia game, sedangkan optimalitas lebih berfokus pada hasil terbaik secara teknis. Keduanya penting, tetapi untuk pengalaman bermain, believability sering menjadi dasar yang lebih dulu dirasakan oleh pemain.

### Inti yang Harus Ditekankan

- **Believability** berarti perilaku agen terasa masuk akal bagi pemain, bukan berarti agen selalu optimal.
- Perilaku believable biasanya didukung oleh **perception**, **memory**, dan aturan interaksi dengan lingkungan.
- Contoh seperti `lastKnownPosition`, reaksi suara, dan spacing antar `squad` membantu pemain mempercayai dunia game.
- Believability adalah dasar agar perilaku NPC atau enemy terasa hidup sebelum membahas aspek fairness.

### Transisi ke Slide Berikutnya

Setelah perilaku agen terasa masuk akal, langkah berikutnya adalah memastikan perilaku itu tidak membuat pemain merasa diperlakukan tidak adil.

---

## Slide 014 - Fairness

### Narasi

**Fairness** adalah prinsip bahwa perilaku game harus memberi pemain perasaan bahwa tantangan yang dihadapi masih bisa dikalahkan. Dalam konteks NPC dan enemy, fairness bukan berarti membuat lawan lemah, tetapi membuat aturan permainan terasa konsisten, dapat diprediksi, dan tidak menipu.

Prinsip ini berbeda dari **believability**. Believability membuat perilaku terasa masuk akal, misalnya NPC tidak menembus tembok atau tidak lupa posisi pemain secara tiba-tiba. Fairness lebih menyangkut **peluang menang**: pemain harus merasa bahwa keputusan yang ia ambil dapat memengaruhi hasil.

Dalam implementasi, fairness biasanya muncul dari pembatasan pada **informasi**, **aksi**, **posisi awal**, dan **kenaikan kesulitan**. Beberapa contoh perilaku yang tidak fair dapat dijelaskan sebagai berikut:

- **Enemy melihat pemain dari balik tembok**  
  Ini menunjukkan masalah pada `line_of_sight` atau sensor. Jika NPC dapat melihat tanpa hambatan, pemain merasa kehilangan kendali karena tidak bisa memanfaatkan lingkungan.

- **Enemy menyerang tanpa cooldown**  
  Masalah ini muncul pada `attack_cooldown` atau pacing aksi. Serangan yang terlalu cepat membuat pemain tidak punya waktu untuk bereaksi, menghindar, atau membalas.

- **Enemy spawn tepat di belakang pemain**  
  Ini menyangkut `spawn_distance` dan `spawn_position`. Posisi spawn yang terlalu dekat atau tersembunyi membuat pemain tidak punya kesempatan untuk menyadari ancaman.

- **Enemy selalu tahu posisi pemain**  
  Ini adalah masalah `player_position` dan akses informasi. Jika NPC selalu mengetahui posisi pemain, mekanisme stealth, pengamatan, dan strategi menjadi tidak bermakna.

- **Difficulty naik tiba-tiba tanpa alasan**  
  Ini berkaitan dengan `difficulty_level` dan pacing tantangan. Kenaikan kesulitan yang mendadak membuat pemain merasa permainan berubah aturan, bukan menjadi lebih menantang secara wajar.

Intinya, lawan boleh kuat, tetapi pemain harus tetap merasa memiliki **peluang untuk menang**. Fairness membantu menjaga keseimbangan antara tantangan dan agency pemain. Jika pemain merasa permainan tidak adil, ia cenderung berhenti bermain bukan karena kalah, tetapi karena merasa tidak memiliki kendali.

Sebelum lanjut, mahasiswa perlu memahami bahwa fairness bukan sekadar membuat NPC lebih lemah. Fairness adalah desain aturan yang membuat pemain dapat membaca situasi, mengambil keputusan, dan merasakan bahwa kemenangannya berasal dari kemampuannya sendiri.

### Inti yang Harus Ditekankan

- **Fairness** berarti pemain merasa punya peluang menang, bukan hanya melihat NPC berperilaku masuk akal.
- Fairness sering diwujudkan melalui pembatasan `line_of_sight`, `attack_cooldown`, `spawn_position`, dan akses `player_position`.
- Kenaikan kesulitan harus terasa wajar dan dapat dipahami, bukan tiba-tiba mengubah aturan permainan.
- Lawan boleh kuat, tetapi pemain harus tetap memiliki ruang untuk bereaksi dan mengambil keputusan.

### Transisi ke Slide Berikutnya

Setelah perilaku game terasa adil, langkah berikutnya adalah memastikan NPC dapat merespons perubahan kondisi permainan secara tepat. Hal ini akan dibahas pada slide **Responsiveness**.

---

## Slide 015 - Responsiveness

### Narasi

Pada slide ini, kita membahas **responsiveness** sebagai sifat penting dalam **Game AI**. Responsiveness berarti sistem AI tidak hanya berjalan dengan pola tetap, tetapi mampu **mendeteksi perubahan kondisi game** dan mengubah perilakunya secara tepat waktu. Dalam konteks NPC, hal ini membuat pemain merasa dunia game memiliki reaksi yang masuk akal.

Intuisi praktisnya adalah: AI yang baik harus terasa **peka terhadap aksi pemain**. Jika pemain mendekati NPC, NPC dapat beralih ke state `alert` atau `investigate`. Jika pemain menyerang, enemy dapat melakukan `retaliate` atau `attack`. Jika pemain bersembunyi, enemy dapat melakukan `search` atau `patrol` dengan prioritas berbeda. Pola ini sering diimplementasikan melalui **Finite State Machine**, **behavior tree**, atau sistem **decision making** yang memilih action berdasarkan kondisi.

Contoh pada slide menunjukkan beberapa respons yang umum:

- `player mendekat` → NPC menjadi `alert`.
- `player menyerang` → enemy membalas dengan `attack` atau `defend`.
- `player bersembunyi` → enemy melakukan `search` atau `listen`.
- `player low health` → game dapat mengurangi tekanan melalui **dynamic difficulty**.
- `player terlalu dominan` → game memberi tantangan lebih agar pengalaman tetap seimbang.

Poin penting yang harus dipahami mahasiswa adalah **responsiveness bukan sekadar membuat AI lebih cepat**, tetapi membuat AI **mengambil keputusan yang sesuai konteks**. Respons yang terlalu lambat membuat game terasa tumpul, sedangkan respons yang terlalu agresif dapat membuat pemain frustrasi. Oleh karena itu, desain respons harus memperhatikan **timing**, **prioritas**, dan **feedback** terhadap pemain.

Dalam implementasi, respons biasanya berasal dari **perception** atau input kondisi game, lalu diproses oleh sistem keputusan, dan menghasilkan **action** atau perubahan state. Alurnya dapat dipahami sebagai:

1. Sistem membaca kondisi: jarak, health, posisi, cooldown, target, atau status pemain.
2. Sistem mengevaluasi prioritas: mana kondisi yang lebih penting.
3. Sistem memilih perilaku: `alert`, `attack`, `search`, `retreat`, atau `adjust difficulty`.
4. Sistem mengeksekusi perilaku melalui animasi, steering, pathfinding, atau perubahan state.

Dengan cara ini, **responsiveness** membuat game terasa hidup karena NPC tidak tampak statis, tetapi seperti entitas yang memperhatikan dan beradaptasi terhadap pemain.

### Inti yang Harus Ditekankan

- **Responsiveness** adalah kemampuan AI untuk **mendeteksi perubahan kondisi** dan **mengubah perilaku** secara tepat waktu.
- Respons yang baik harus **masuk akal**, **tidak terlalu lambat**, dan **tidak terlalu agresif**.
- Implementasi biasanya melibatkan **perception**, **decision making**, **state/action**, dan eksekusi perilaku seperti `alert`, `attack`, `search`, atau penyesuaian difficulty.

### Transisi ke Slide Berikutnya

Setelah AI mampu merespons kondisi game dengan tepat, hal berikutnya yang perlu diperhatikan adalah bagaimana respons tersebut dapat berjalan tanpa membebani performa game.

---

## Slide 016 - Performance dalam Game AI

### Narasi

Pada slide ini kita beralih dari **responsiveness** ke **performance**. Responsiveness menjawab bagaimana sistem kecerdasan game harus bereaksi terhadap kondisi pemain, sedangkan performance menjawab bagaimana reaksi tersebut dapat dijalankan tanpa mengganggu kelancaran permainan.

Game AI tidak berjalan di luar waktu permainan. Ia berjalan **saat game berlangsung**, bersamaan dengan input pemain, simulasi dunia, dan rendering. Karena itu setiap keputusan AI harus masuk ke dalam **frame budget** yang tersedia.

Intuisi praktisnya sederhana: semakin banyak `NPC` dan semakin sering mereka mengambil keputusan, semakin besar beban komputasi. Jika satu `NPC` melakukan `raycast`, `pathfinding`, dan perubahan `physics` setiap frame, lalu ada puluhan `NPC`, waktu proses per frame bisa melampaui target.

Faktor yang perlu diperhatikan antara lain:

- **`frame rate`**: target jumlah frame per detik yang harus dipertahankan.
- **jumlah `NPC`**: semakin banyak agen, semakin banyak keputusan yang harus dihitung.
- **`update per frame`**: seberapa sering logika AI dievaluasi.
- **`raycast`**: deteksi garis pandang atau sensor yang bisa mahal jika dipanggil berlebihan.
- **`pathfinding`**: pencarian jalur yang dapat menjadi beban utama jika dilakukan terlalu sering.
- **`memory`**: penyimpanan data agen, `state`, `path`, dan referensi objek.
- **`physics`**: interaksi tumbukan dan gerakan yang memengaruhi hasil keputusan AI.
- **`animasi`**: sinkronisasi perilaku dengan `state` visual agar `NPC` tidak terlihat tidak natural.

AI yang terlalu berat dapat membuat game **lag**. Lag bukan hanya masalah visual, tetapi juga membuat respons pemain dan perilaku `NPC` menjadi tidak konsisten.

Prinsip utamanya adalah:

```text
AI harus cukup pintar,
tetapi tetap efisien.
```

Artinya, mahasiswa tidak perlu mengejar AI yang selalu sempurna setiap frame. Yang penting adalah memilih tingkat detail keputusan yang cukup untuk menghasilkan perilaku yang meyakinkan, sambil menjaga waktu eksekusi tetap stabil.

Sebelum lanjut, hal yang harus dipahami adalah: performance bukan musuh dari kecerdasan game. Performance adalah batasan desain yang menentukan kapan AI boleh berpikir, seberapa sering AI menghitung, dan seberapa sederhana perilaku yang perlu ditampilkan.

### Inti yang Harus Ditekankan

- Game AI berjalan **saat game berlangsung**, sehingga setiap keputusan harus memperhatikan **`frame rate`** dan waktu eksekusi per frame.
- Beban AI dapat meningkat karena **jumlah `NPC`**, `raycast`, `pathfinding`, `memory`, `physics`, dan `animasi`.
- AI yang terlalu berat dapat menyebabkan **lag**, sehingga perilaku `NPC` dan respons game menjadi tidak stabil.
- Prinsip utama adalah **cukup pintar tetapi efisien**, bukan selalu menghitung keputusan paling kompleks setiap frame.

### Transisi ke Slide Berikutnya

Setelah memahami bahwa AI harus efisien, langkah berikutnya adalah melihat di mana keputusan AI diproses dalam siklus permainan. Slide berikutnya membahas **Game Loop**, yaitu alur utama yang menghubungkan input, update state, keputusan AI, fisika, dan rendering.

---

## Slide 017 - Game Loop

### Narasi

**Game loop** adalah siklus utama yang terus berjalan selama game aktif. Bayangkan game sebagai mesin yang tidak berhenti: setiap frame, sistem membaca keadaan, memproses perubahan, lalu menampilkan hasil. Karena itu, perilaku NPC atau agent tidak berjalan sekali, tetapi berulang terus selama game berjalan.

Secara sederhana, alurnya dapat dilihat sebagai berikut:

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

Tahapan ini penting karena menunjukkan urutan kerja sistem game.

- **Input** adalah tahap pembacaan data dari player, controller, sensor, atau kondisi lingkungan.
- **Update Game State** adalah tahap pembaruan variabel game, misalnya posisi, skor, cooldown, kondisi NPC, atau status level.
- **AI Decision** adalah tahap di mana agent atau NPC memilih tindakan berdasarkan `state` terbaru, misalnya mengejar, menghindar, menyerang, atau menunggu.
- **Physics / Movement** adalah tahap penerapan hasil keputusan ke dunia game, seperti perubahan posisi, kecepatan, force, atau collision response.
- **Rendering** adalah tahap menampilkan hasil akhir ke layar, termasuk posisi karakter, animasi, efek, dan perubahan visual.
- Setelah rendering selesai, siklus diulang pada frame berikutnya.

Intuisi praktisnya: **AI Decision** harus berada setelah `state` diperbarui, tetapi sebelum rendering. Dengan begitu, keputusan NPC didasarkan pada informasi yang masih relevan, dan hasilnya langsung terlihat pada frame yang sama atau frame berikutnya. Jika urutannya salah, misalnya AI mengambil keputusan sebelum input atau `state` diperbarui, perilaku NPC bisa terasa lambat, tidak responsif, atau tidak konsisten.

Dalam Unity, konsep game loop ini sering terlihat melalui fungsi:

```csharp
Update()
```

dan:

```csharp
FixedUpdate()
```

Keduanya merupakan bagian dari cara Unity memetakan konsep loop ke kode. Detail penggunaannya akan kita bahas pada slide berikutnya, tetapi yang perlu dipahami sekarang adalah bahwa game loop adalah “detak jantung” dari seluruh sistem game.

Karena game loop berjalan berulang kali setiap detik, setiap tahap harus efisien. AI yang terlalu berat, pathfinding yang terlalu sering dihitung, atau update yang tidak perlu dapat memperlambat seluruh siklus. Oleh karena itu, desain AI game harus mempertimbangkan tidak hanya kecerdasan perilaku, tetapi juga biaya komputasi di dalam loop.

### Inti yang Harus Ditekankan

- **Game loop** adalah siklus berulang yang menjadi dasar kerja game selama aktif.
- Urutan umum: **Input → Update Game State → AI Decision → Physics / Movement → Rendering → Repeat**.
- **AI Decision** harus menggunakan `state` terbaru agar perilaku NPC atau agent responsif dan konsisten.
- Dalam Unity, konsep loop ini sering dipetakan ke `Update()` dan `FixedUpdate()`, dengan detail implementasi dibahas berikutnya.
- Setiap tahap loop harus efisien karena berjalan berulang kali setiap detik.

### Transisi ke Slide Berikutnya

Setelah memahami konsep umum game loop, kita akan masuk ke Unity untuk melihat bagaimana loop tersebut dipetakan ke fungsi `Update()` dan `FixedUpdate()`, serta kapan masing-masing fungsi sebaiknya digunakan.

---

## Slide 018 - Game Loop dalam Unity

### Narasi

Pada slide ini kita fokus pada cara Unity menjalankan logika game secara otomatis. Mahasiswa tidak perlu menulis game loop secara manual; cukup menempatkan kode pada fungsi yang dipanggil Unity pada waktu yang tepat.

```csharp
void Update()
{
    // dijalankan setiap frame
}
```

`Update()` dipanggil setiap frame. Karena itu, fungsi ini cocok untuk logika yang harus diperiksa terus-menerus, seperti input player, timer, perubahan visual, atau keputusan NPC yang ringan. Namun, karena frekuensinya mengikuti frame rate, kode di sini sebaiknya tidak terlalu berat.

```csharp
void FixedUpdate()
{
    // dijalankan pada interval physics
}
```

`FixedUpdate()` dipanggil pada interval physics yang tetap. Fungsi ini lebih tepat untuk logika yang berhubungan dengan fisika, seperti `Rigidbody` movement, `physics force`, atau movement yang bergantung pada collision.

Perbedaan penting yang harus dipahami mahasiswa adalah:

- `Update()` mengikuti **frame rate**, sehingga cocok untuk respons input, timer, visual update, dan keputusan NPC.
- `FixedUpdate()` mengikuti **interval physics** yang stabil, sehingga cocok untuk simulasi fisika dan pergerakan berbasis `Rigidbody`.

Dalam konteks Game AI, keputusan NPC sering diletakkan di `Update()` karena NPC perlu membaca kondisi game setiap frame. Jika keputusan tersebut menghasilkan pergerakan fisika, perintah gerak sebaiknya diletakkan di `FixedUpdate()` agar lebih stabil dan konsisten.

Hal yang harus dipahami sebelum lanjut adalah posisi kode menentukan kapan logika dieksekusi. Kesalahan umum adalah menempatkan perhitungan fisika di `Update()` atau menempatkan logika yang harus stabil di tempat yang salah.

### Inti yang Harus Ditekankan

- `Update()` dijalankan setiap frame dan cocok untuk input, timer, visual update, atau keputusan NPC ringan.
- `FixedUpdate()` dijalankan pada interval physics dan cocok untuk `Rigidbody`, force, serta movement berbasis fisika.
- Dalam game AI, logika keputusan sering berada di `Update()`, sedangkan eksekusi gerak fisika lebih stabil di `FixedUpdate()`.

### Transisi ke Slide Berikutnya

Setelah memahami di mana Unity menjalankan logika, kita akan masuk ke pembahasan berikutnya tentang bagaimana logika NPC diletakkan dalam game loop, mulai dari membaca kondisi, mengambil keputusan, hingga menjalankan aksi.

---

## Slide 019 - AI dalam Game Loop

### Narasi

Pada slide ini kita melihat bagaimana perilaku NPC atau sistem kecerdasan game diletakkan di dalam **game loop**. Intuisinya sederhana: setiap frame, game memberi kesempatan pada objek untuk memeriksa dunia, lalu memilih apa yang harus dilakukan.

Alurnya dapat dibaca sebagai pipeline:

```text
Update
  ↓
Baca kondisi game
  ↓
Ambil keputusan
  ↓
Jalankan aksi
```

Artinya, `Update` bukan hanya tempat memanggil fungsi visual. Di dalamnya ada tiga tahap penting:

1. **Baca kondisi game** — misalnya jarak ke player, posisi, health, atau objek di sekitar.
2. **Ambil keputusan** — menentukan state atau perilaku yang paling sesuai, seperti `idle`, `detect`, `chase`, atau `alert`.
3. **Jalankan aksi** — mengubah animasi, warna, arah gerak, atau status NPC.

Contoh implementasinya terlihat pada potongan kode berikut:

```csharp
void Update()
{
    DetectPlayer();
    DecideState();
    PerformAction();
}
```

Fungsi `DetectPlayer()` berperan sebagai tahap pembacaan kondisi. Fungsi `DecideState()` mengubah hasil deteksi menjadi keputusan perilaku. Fungsi `PerformAction()` menerjemahkan keputusan tersebut menjadi perubahan yang terlihat di game.

Dalam praktikum **NPC Detector**, pola ini muncul dalam bentuk sederhana: sistem menghitung jarak, menentukan state, lalu mengubah warna. Warna di sini bukan sekadar estetika; warna menjadi representasi visual dari state internal NPC.

Yang perlu dipahami mahasiswa adalah bahwa perilaku NPC yang “cerdas” sering kali dibangun dari loop kecil yang berulang: **percept → decision → action**. Selama loop ini berjalan setiap frame, NPC dapat merespons perubahan lingkungan secara real-time.

### Inti yang Harus Ditekankan

- **Game loop** adalah tempat perilaku NPC dieksekusi secara berulang setiap frame.
- Alur utama adalah **baca kondisi → ambil keputusan → jalankan aksi**.
- `Update()` adalah titik umum untuk logika perilaku yang tidak bergantung pada physics interval.
- Pada NPC Detector, jarak, state, dan warna menunjukkan hubungan antara data, keputusan, dan feedback visual.

### Transisi ke Slide Berikutnya

Setelah memahami bagaimana perilaku berjalan di dalam loop, langkah berikutnya adalah memberi nama formal pada entitas yang melakukan proses tersebut: **Intelligent Agent**.

---

## Slide 020 - Intelligent Agent

### Narasi

Pada slide ini, kita memperkenalkan istilah **Agent** sebagai konsep dasar dalam perilaku game. **Agent** adalah entitas yang dapat **menerima informasi**, **memproses kondisi**, **mengambil keputusan**, dan **melakukan aksi**. Dengan kata lain, agent bukan hanya objek yang diam di dalam game, melainkan entitas yang memiliki kemampuan untuk merespons sesuatu yang terjadi di sekitarnya.

Dalam konteks game, agent dapat hadir dalam banyak bentuk. Contoh yang paling umum adalah `enemy`, `NPC`, `companion`, `animal`, `robot`, `vehicle`, hingga `AI director`. Yang perlu dipahami adalah agent tidak harus selalu berupa karakter manusia. Selama entitas tersebut memiliki logika untuk membaca situasi dan melakukan tindakan, maka ia dapat dipandang sebagai agent.

Slide ini juga membantu kita melihat hubungan dengan perilaku yang sudah dibahas sebelumnya. Jika proses perilaku game berupa membaca kondisi, memutuskan, lalu bertindak, maka **agent** adalah subjek yang menjalankan proses tersebut. Jadi, agent adalah “pihak yang berperilaku” di dalam sistem game.

Pada praktikum pertama, kita menggunakan contoh yang sederhana:

```text
Agent = Enemy / NPC Detector
```

Dalam contoh ini, `Enemy` atau `NPC Detector` berperan sebagai agent karena ia menerima informasi dari lingkungan, memproses kondisi tersebut, lalu melakukan aksi. Meskipun aksinya masih sederhana, struktur dasarnya sudah mencerminkan pola perilaku agent yang lebih umum.

Sebelum lanjut, mahasiswa perlu memahami bahwa agent dapat dimulai dari logika yang sangat sederhana. Agent tidak harus langsung berupa sistem yang rumit. Yang penting adalah adanya alur: informasi masuk, kondisi diproses, keputusan diambil, dan aksi dilakukan. Pemahaman ini akan menjadi dasar ketika kita membahas lingkungan tempat agent berinteraksi.

### Inti yang Harus Ditekankan

- **Agent** adalah entitas yang **menerima informasi**, **memproses kondisi**, **mengambil keputusan**, dan **melakukan aksi**.
- Dalam game, agent dapat berupa `enemy`, `NPC`, `companion`, `animal`, `robot`, `vehicle`, atau `AI director`.
- Pada praktikum pertama, `Enemy` / `NPC Detector` adalah contoh agent sederhana.
- Agent adalah subjek perilaku, bukan sekadar objek statis di dalam game.

### Transisi ke Slide Berikutnya

Setelah kita memahami siapa yang bertindak sebagai agent, langkah berikutnya adalah memahami di mana agent berada dan berinteraksi, yaitu Environment.

---

## Slide 021 - Environment

### Narasi

**Environment** adalah dunia atau ruang tempat **agent** berada, bergerak, dan berinteraksi. Dalam konteks game, environment bukan hanya latar visual, tetapi juga kumpulan objek, aturan, dan kondisi yang dapat diamati oleh agent serta memengaruhi keputusan yang diambilnya.

Dalam Unity, environment biasanya direpresentasikan sebagai `scene`. Sebuah `scene` berisi berbagai `GameObject` yang membentuk dunia permainan. Komponen-komponen ini menjadi sumber informasi bagi agent, sekaligus batas atau peluang yang dapat dimanfaatkan saat agent mengambil aksi.

Pada praktikum pertama, environment dapat disederhanakan sebagai:

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

Beberapa komponen tersebut memiliki peran yang berbeda bagi perilaku agent:

- `Ground` memberi batas area gerak dan menjadi dasar posisi agent.
- `Player` menjadi objek interaksi utama yang dapat memicu respons dari agent lain.
- `Enemy` dapat berperan sebagai agent lain yang juga mengamati dan bereaksi terhadap environment.
- `Camera` menentukan apa yang terlihat dalam permainan dan dapat memengaruhi informasi yang tersedia.
- `Light` memberi konteks visual, misalnya membedakan area terang dan gelap.

Selain objek dasar, environment juga dapat memuat elemen lain seperti `obstacle`, `item`, `waypoint`, `trigger area`, dan `physics world`. Elemen-elemen ini penting karena dapat memengaruhi pergerakan, deteksi, dan interaksi agent. Misalnya, `waypoint` dapat membantu proses pencarian jalur, `trigger area` dapat memicu deteksi atau perubahan status, dan `physics world` memengaruhi tabrakan serta gerak objek.

Intuisi praktisnya adalah: sebelum membuat perilaku agent, mahasiswa perlu memahami environment terlebih dahulu. Agent tidak dapat mengambil keputusan yang baik jika environment tidak menyediakan informasi yang cukup, seperti jarak, area deteksi, jalur, atau objek yang dapat diinteraksi.

### Inti yang Harus Ditekankan

- **Environment** adalah dunia tempat agent menerima informasi dan melakukan aksi.
- Dalam Unity, environment sering direpresentasikan sebagai `scene` yang berisi `GameObject`.
- Objek seperti `Ground`, `Player`, `Enemy`, `Camera`, dan `Light` membentuk kondisi dasar bagi perilaku agent.
- Elemen seperti `waypoint`, `trigger area`, dan `physics world` dapat memengaruhi deteksi, gerak, dan interaksi agent.
- Agent hanya dapat berperilaku berdasarkan informasi yang tersedia dari environment.

### Transisi ke Slide Berikutnya

Setelah memahami apa itu environment, langkah berikutnya adalah melihat bagaimana agent dan environment saling berhubungan, yaitu bagaimana agent menerima informasi, mengambil keputusan, melakukan aksi, dan menyebabkan environment berubah.

---

## Slide 022 - Agent dan Environment

### Narasi

Pada slide ini, kita melihat hubungan paling dasar dalam perilaku game: **Agent** dan **Environment**. **Agent** adalah entitas yang dapat bertindak, misalnya player, enemy, atau NPC. **Environment** adalah dunia yang memuat objek, posisi, kondisi, dan aturan interaksi. Keduanya tidak bisa dipisahkan, karena agent membutuhkan informasi dari environment untuk bertindak, dan aksi agent akan mengubah environment.

Diagram berikut menunjukkan alur dasar:

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

Alur ini penting karena perilaku game tidak terjadi sekali saja, melainkan berulang setiap frame atau setiap update.

Urutan prosesnya dapat dipahami sebagai berikut:

1. **Environment** menyediakan kondisi saat ini, misalnya posisi player, posisi enemy, jarak, atau status objek.
2. **Agent** menerima informasi tersebut sebagai dasar penilaian.
3. **Agent** mengambil keputusan, misalnya tetap diam, mengejar, menghindar, atau berubah state.
4. **Agent** melakukan aksi, misalnya bergerak, mengubah warna, menyerang, atau memicu event.
5. **Environment** berubah sebagai akibat aksi tersebut, lalu menjadi informasi baru untuk langkah berikutnya.

Contoh pada slide menunjukkan enemy yang bereaksi ketika player mendekat:

```text
Player bergerak mendekati enemy
        ↓
Enemy menghitung jarak
        ↓
Enemy menjadi ALERT
        ↓
Warna enemy berubah merah
```

Dalam contoh ini, **enemy** adalah agent. Informasi yang diterimanya adalah perubahan jarak terhadap player. Keputusan yang diambil adalah beralih ke state `ALERT`. Aksinya adalah mengubah tampilan, misalnya warna menjadi merah. Perubahan tampilan itu bukan sekadar efek visual, tetapi tanda bahwa kondisi environment dan status agent telah berubah.

Yang perlu dipahami mahasiswa sebelum lanjut adalah bahwa setiap perilaku NPC pada dasarnya mengikuti pola ini: menerima kondisi, menilai kondisi, memilih tindakan, lalu memengaruhi dunia. Pola ini menjadi dasar untuk pembahasan state, decision making, dan interaksi agent dengan scene Unity.

### Inti yang Harus Ditekankan

- **Agent** dan **Environment** adalah dua sisi yang saling memengaruhi.
- Perilaku agent mengikuti alur: informasi → keputusan → aksi → perubahan environment.
- Contoh enemy `ALERT` menunjukkan bahwa perubahan state dapat dipicu oleh kondisi lingkungan, misalnya jarak player.
- Aksi agent tidak hanya mengubah dirinya sendiri, tetapi juga mengubah informasi yang tersedia untuk langkah berikutnya.

### Transisi ke Slide Berikutnya

Setelah memahami hubungan dasar antara agent dan environment, langkah berikutnya adalah melihat bagaimana agent memperoleh informasi dari environment. Pembahasan itu akan dibahas pada konsep **Perception**.

---

## Slide 023 - Perception

### Narasi

**Perception** adalah kemampuan **agent** untuk memperoleh informasi dari **environment**. Dalam konteks perilaku NPC, ini adalah tahap paling awal sebelum agent melakukan penilaian, memilih state, atau mengeksekusi aksi. Tanpa perception, NPC tidak memiliki dasar untuk bereaksi terhadap player, musuh, item, atau perubahan dunia.

Secara intuitif, perception bisa dibayangkan sebagai “indera” agent. Agent tidak selalu perlu mengetahui seluruh kondisi game; ia hanya perlu mengetahui informasi yang relevan untuk perilakunya. Misalnya, enemy cukup tahu apakah player terlihat, apakah jaraknya dekat, atau apakah ada tembakan di dekatnya.

Beberapa bentuk perception yang umum dalam game adalah:

- melihat player atau objek tertentu,
- mendengar suara atau event,
- merasakan damage,
- mengetahui jarak,
- mendeteksi obstacle,
- mengetahui posisi item,
- menerima informasi dari agent lain.

Dalam implementasi Unity, perception tidak harus dibuat sebagai sistem kompleks sejak awal. Mahasiswa dapat memulainya dari API sederhana yang sudah tersedia, misalnya:

- `Vector3.Distance()` untuk menghitung jarak antar posisi,
- `Physics.Raycast()` untuk mengecek apakah ada garis pandang atau objek menghalangi,
- `trigger collider` untuk mendeteksi objek yang masuk area tertentu,
- `overlap sphere` untuk mengecek objek di sekitar agent,
- `sensor custom` untuk membuat aturan deteksi yang lebih spesifik.

Poin penting yang harus dipahami adalah bahwa **perception bukan keputusan**. Perception hanya menyediakan data atau kondisi. Keputusan muncul ketika data tersebut diinterpretasikan oleh sistem perilaku, misalnya finite state machine, behavior tree, atau aturan sederhana. Contoh sederhana: jika jarak player kecil dan tidak ada obstacle, agent dapat masuk ke state `ALERT` atau `CHASE`.

Sebelum lanjut, mahasiswa perlu menyadari bahwa kualitas perception sangat memengaruhi kualitas perilaku NPC. Jika agent salah mendeteksi jarak, salah membaca line of sight, atau tidak mendeteksi obstacle, maka perilaku yang dihasilkan akan terasa tidak masuk akal. Oleh karena itu, perception harus dirancang agar cukup, relevan, dan tidak terlalu mahal untuk dihitung setiap frame.

### Inti yang Harus Ditekankan

- **Perception** adalah proses agent memperoleh informasi dari environment.
- Perception dapat berupa jarak, line of sight, trigger, damage, obstacle, item, atau informasi antar agent.
- Di Unity, implementasi awal dapat menggunakan `Vector3.Distance()`, `Physics.Raycast()`, trigger collider, overlap sphere, atau sensor custom.
- Perception adalah input perilaku, bukan keputusan akhir; interpretasinya dilakukan oleh sistem pengambilan keputusan.

### Transisi ke Slide Berikutnya

Setelah memahami apa saja yang bisa diketahui agent, kita akan melihat contoh sederhana di mana NPC menggunakan jarak ke player sebagai dasar perception.

---

## Slide 024 - Contoh Perception Sederhana

### Narasi

Pada slide ini kita melihat contoh paling sederhana dari **perception** pada NPC. Agent tidak perlu sistem sensor yang rumit; cukup mengetahui jarak antara dirinya dan player. Dalam konteks game, jarak adalah informasi dasar yang menentukan apakah player berada di sekitar NPC atau masih jauh.

Contoh implementasinya menggunakan Unity:

```csharp
float distance = Vector3.Distance(
    enemy.position,
    player.position
);
```

Baris ini menghitung jarak antara posisi `enemy` dan posisi `player`. Hasilnya disimpan pada variabel `distance`. Nilai ini bersifat numerik, sehingga mudah dibandingkan dengan ambang batas tertentu.

Arti praktisnya adalah:

- Jika `distance` kecil, player dianggap dekat.
- Jika `distance` besar, player dianggap jauh.

Dengan cara ini, NPC memperoleh informasi sederhana dari environment tanpa harus melihat, mendengar, atau memproses data kompleks.

Urutan eksekusinya cukup langsung:

1. Sistem membaca posisi `enemy` dan `player`.
2. `Vector3.Distance()` menghitung jarak antara dua titik tersebut.
3. Nilai jarak disimpan ke `distance`.

Nilai inilah yang menjadi dasar perilaku NPC berikutnya.

Yang harus dipahami mahasiswa adalah bahwa **perception** bukan sekadar fungsi jarak, melainkan cara agent mengubah posisi di world menjadi informasi yang dapat dipakai. Pada praktikum pertama, kita sengaja menggunakan jarak karena mudah diuji, mudah divisualisasikan, dan menjadi fondasi untuk perilaku seperti waspada, mengejar, atau kembali diam.

### Inti yang Harus Ditekankan

- `Vector3.Distance()` menghasilkan nilai jarak antara dua posisi.
- Variabel `distance` adalah data perception yang dapat dibandingkan dengan ambang batas.
- Jarak kecil berarti player dekat, jarak besar berarti player jauh.
- Perception sederhana ini menjadi dasar sebelum NPC memilih tindakan.

### Transisi ke Slide Berikutnya

Setelah NPC mengetahui jarak ke player, langkah berikutnya adalah mengubah informasi jarak tersebut menjadi keputusan perilaku.

---

## Slide 025 - Decision

### Narasi

**Decision** adalah proses di mana agent memilih tindakan atau kondisi berikutnya berdasarkan informasi yang telah diterimanya. Dalam konteks Game AI, tahap ini menjadi jembatan antara **perception** dan **action**. Agent tidak langsung bertindak begitu saja; ia terlebih dahulu menafsirkan data dari lingkungan, lalu memutuskan perilaku yang paling sesuai.

Pada slide sebelumnya, kita sudah melihat contoh sederhana di mana NPC menghitung jarak ke player menggunakan `Vector3.Distance`. Nilai `distance` tersebut merupakan hasil dari proses **perception**. Namun, jarak saja belum cukup untuk menentukan perilaku NPC. Nilai itu harus diinterpretasikan terlebih dahulu.

Interpretasi sederhana dapat dilakukan dengan membandingkan `distance` terhadap suatu ambang batas, misalnya `detectionRadius`. Jika jarak lebih kecil atau sama dengan `detectionRadius`, maka player dianggap dekat. Jika jarak lebih besar, player dianggap jauh. Dari interpretasi inilah agent mengambil keputusan.

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

Dalam potongan kode di atas, `distance` adalah data hasil perception, `detectionRadius` adalah parameter keputusan, dan `state` adalah hasil keputusan yang akan memengaruhi perilaku NPC. Jika `distance <= detectionRadius`, NPC masuk ke state `Alert`. Sebaliknya, jika jarak lebih besar, NPC tetap pada state `Idle`.

Secara konseptual, contoh ini sudah menunjukkan pola dasar **Finite State Machine** atau FSM. Agent memiliki beberapa state, misalnya `Idle` dan `Alert`, lalu berpindah state berdasarkan kondisi tertentu. State `Idle` menggambarkan NPC yang sedang tidak terganggu, sedangkan state `Alert` menggambarkan NPC yang menyadari keberadaan player di dekatnya.

Penting untuk dipahami bahwa **decision** belum sama dengan **action**. Decision adalah proses memilih kondisi atau perilaku, sedangkan action adalah eksekusi nyata dari perilaku tersebut. Misalnya, keputusan `Alert` belum tentu langsung berarti NPC bergerak atau menyerang; keputusan itu hanya menandakan bahwa NPC telah memasuki kondisi waspada.

Sebelum lanjut, mahasiswa perlu memahami bahwa dalam sistem game AI, alur umumnya adalah:

1. Agent menerima informasi dari lingkungan.
2. Informasi tersebut diinterpretasikan.
3. Agent mengambil keputusan.
4. Keputusan tersebut memicu aksi tertentu.

Pada praktikum pertama, alur ini disederhanakan menjadi: hitung jarak, bandingkan dengan radius deteksi, lalu ubah state NPC.

### Inti yang Harus Ditekankan

- **Decision** adalah tahap memilih perilaku berdasarkan hasil **perception**.
- Contoh `if (distance <= detectionRadius)` menunjukkan cara sederhana agent mengambil keputusan.
- State seperti `Idle` dan `Alert` adalah hasil keputusan, bukan eksekusi aksi.
- Pola ini merupakan dasar dari **Finite State Machine** dalam NPC behavior.
- Decision mengubah data lingkungan menjadi kondisi perilaku agent.

### Transisi ke Slide Berikutnya

Setelah agent memutuskan state atau perilaku, langkah berikutnya adalah mengeksekusi perilaku tersebut. Di sinilah konsep **Action** menjadi penting, karena action adalah tindakan nyata yang dilakukan agent setelah keputusan diambil.

---

## Slide 026 - Action

### Narasi

**Action** adalah tahap eksekusi dari perilaku agent. Setelah agent melakukan **decision**, action adalah perubahan nyata yang terjadi di dalam game.

Perbedaan utamanya sederhana: **decision** menentukan pilihan, sedangkan **action** menjalankan pilihan tersebut. Decision bisa berupa logika seperti “jika dekat, maka alert”, tetapi action adalah apa yang benar-benar dilakukan agent setelah masuk ke kondisi itu.

Contoh action dalam game dapat berupa:

- **bergerak** menuju target,
- **menyerang** player,
- **berpatroli** di area tertentu,
- **kabur** saat kondisi agent lemah,
- **memanggil bantuan**,
- **mengubah warna**,
- **memainkan animasi**,
- **menembak**,
- **mencari cover**.

Dalam pendekatan berbasis state, action sering dikaitkan dengan state yang dipilih. Misalnya, ketika agent masuk ke state `Alert`, action yang dijalankan bisa berupa berhenti, menoleh ke player, atau mengubah tampilan.

Pada praktikum pertama, action disederhanakan menjadi:

```text
Enemy mengubah warna.
```

Action ini dipilih karena mudah diamati dan mudah diuji. Mahasiswa dapat melihat langsung bahwa perubahan keputusan menghasilkan perubahan visual pada agent.

Yang perlu dipahami sebelum lanjut adalah bahwa action bukan sekadar efek visual. Action adalah bagian dari perilaku agent yang membuat game terasa responsif. Tanpa action, decision hanya berhenti pada logika internal dan tidak terlihat oleh player.

### Inti yang Harus Ditekankan

- **Action** adalah eksekusi nyata dari keputusan agent.
- Decision menentukan “apa yang dipilih”, action menentukan “apa yang terjadi”.
- Contoh action bisa berupa gerakan, serangan, animasi, perubahan warna, atau perubahan posisi.
- Pada praktikum pertama, action sederhana berupa `Enemy mengubah warna` digunakan untuk menunjukkan hubungan antara decision dan perilaku yang terlihat.

### Transisi ke Slide Berikutnya

Selanjutnya, kita akan menggabungkan **perception**, **decision**, dan **action** menjadi satu pola dasar perilaku agent dalam game.

---

## Slide 027 - Perception–Decision–Action

### Narasi

Slide ini memperkenalkan **Perception–Decision–Action** sebagai pola dasar perilaku agent dalam game. Pola ini penting karena hampir semua perilaku NPC, dari yang sederhana hingga yang kompleks, dapat dipandang sebagai rangkaian membaca situasi, memilih respons, lalu mengeksekusi respons tersebut.

Intuisi praktisnya sederhana: agent tidak langsung bertindak. Agent harus **mendapat informasi** dari environment terlebih dahulu. Informasi itu bisa berupa posisi player, jarak, arah, atau kondisi lingkungan. Setelah informasi tersedia, agent melakukan **decision**, yaitu menentukan state atau aksi yang paling sesuai. Barulah **action** dijalankan di game.

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

Alur ini dapat dibaca sebagai pipeline:

1. **Perception** membaca input dari environment.
2. **Decision** memproses input menjadi pilihan state atau aksi.
3. **Action** mengubah perilaku agent yang terlihat di game.

Pada praktikum, contoh yang digunakan sangat sederhana:

```text
PERCEPTION
Hitung jarak player

DECISION
distance <= detectionRadius?

ACTION
ubah warna enemy
```

Di contoh ini, `PERCEPTION` adalah proses menghitung jarak antara enemy dan player. Nilai jarak tersebut disimpan atau dibandingkan dengan variabel `distance`. Keputusan dibuat dengan kondisi `distance <= detectionRadius?`. Jika kondisi benar, enemy dianggap berada dalam jangkauan deteksi. Jika kondisi salah, enemy tidak melakukan perubahan yang sama.

`ACTION` dalam praktikum adalah mengubah warna enemy. Perubahan warna ini bukan sekadar estetika; ia menjadi representasi visual dari state agent. Mahasiswa perlu memahami bahwa warna yang berubah adalah hasil dari loop PDA, bukan aksi yang muncul tanpa alasan.

Pola ini juga menjadi dasar perilaku NPC yang lebih besar. Dalam bentuk sederhana, kondisi hasil perception dapat menentukan state agent, dan state tersebut menentukan action. Dengan kata lain, agent memiliki respons yang konsisten terhadap perubahan environment.

Sebelum lanjut, mahasiswa perlu menangkap tiga hal: **perception** adalah input, **decision** adalah aturan atau kondisi, dan **action** adalah output yang terlihat. Jika salah satu bagian tidak jelas, perilaku agent akan sulit dipahami atau sulit dikembangkan.

### Inti yang Harus Ditekankan

- **Perception–Decision–Action** adalah pola dasar: agent membaca environment, memilih keputusan, lalu menjalankan aksi.
- Pada praktikum, `PERCEPTION` menghitung jarak player, `DECISION` memeriksa `distance <= detectionRadius?`, dan `ACTION` mengubah warna enemy.
- Perubahan warna enemy adalah representasi visual dari state atau respons agent terhadap lingkungan.
- Pola ini menjadi fondasi perilaku NPC yang lebih kompleks, termasuk deteksi, patroli, atau respons terhadap player.

### Transisi ke Slide Berikutnya

Selanjutnya, kita akan melihat diagram praktikum NPC Detector untuk melihat bagaimana alur Perception–Decision–Action ini muncul secara visual dari posisi player hingga perubahan state enemy.

---

## Slide 028 - Diagram Praktikum NPC Detector

### Narasi

Diagram ini memperlihatkan bentuk paling sederhana dari **kecerdasan game** dalam praktikum: sebuah **NPC Detector**. Fokusnya bukan membuat musuh yang langsung menyerang, tetapi membuat `Enemy` mampu "menyadari" keberadaan `Player` berdasarkan jarak.

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

Alur diagram dapat dibaca dari atas ke bawah sebagai satu siklus perilaku sederhana.

1. `Player` bergerak, sehingga posisi `Player` berubah.
2. `Enemy` menghitung jarak antara dirinya dan `Player`.
3. Sistem membandingkan jarak tersebut dengan **Detection Radius**.
4. Jika jarak lebih kecil atau sama dengan radius, `Enemy` masuk ke kondisi `ALERT`.
5. Jika jarak lebih besar dari radius, `Enemy` tetap atau kembali ke kondisi `IDLE`.

Dari sisi input, proses, dan output, diagram ini sangat ringkas. Inputnya adalah perubahan posisi `Player`. Prosesnya adalah perhitungan jarak dan perbandingan dengan **Detection Radius**. Outputnya adalah perubahan kondisi `Enemy` beserta warna visual.

Secara konseptual, diagram ini adalah implementasi praktis dari **Perception–Decision–Action**.

- **Perception**: `Enemy` memperoleh informasi dari environment, yaitu posisi `Player`.
- **Decision**: `Enemy` mengevaluasi kondisi `distance <= Detection Radius`.
- **Action**: `Enemy` menampilkan respons visual, misalnya warna merah untuk `ALERT` dan warna biru untuk `IDLE`.

Intuisi praktisnya adalah `Enemy` tidak perlu memahami seluruh dunia. Ia hanya perlu menjawab satu pertanyaan sederhana: "Apakah `Player` berada di area yang bisa saya deteksi?" Jika ya, ia berubah menjadi waspada. Jika tidak, ia tetap tenang.

Dalam implementasi sederhana, bagian penting yang harus dipahami mahasiswa adalah:

- `Detection Radius` adalah parameter perilaku, bukan sekadar angka visual.
- Perubahan warna adalah cara paling mudah untuk melihat bahwa logika perilaku sudah berjalan.
- Kondisi `ALERT` dan `IDLE` adalah dasar dari perilaku berbasis kondisi, meskipun pada slide ini kita belum membahas struktur kondisi secara formal.

Sebelum lanjut, mahasiswa perlu memastikan bahwa perubahan warna terjadi tepat ketika `Player` masuk dan keluar radius. Jika warna tidak berubah, biasanya masalahnya ada pada perhitungan jarak, nilai radius, atau pembaruan posisi.

### Inti yang Harus Ditekankan

- **NPC Detector** adalah bentuk paling sederhana dari **kecerdasan game**: deteksi `Player` berdasarkan jarak.
- Alur utamanya adalah `Player bergerak → posisi berubah → Enemy menghitung jarak → keputusan radius → respons visual`.
- `ALERT` dan `IDLE` adalah dua kondisi perilaku dasar yang memudahkan mahasiswa melihat logika perilaku bekerja.
- **Detection Radius** menentukan seberapa jauh `Enemy` dapat "melihat" atau mendeteksi `Player`.

### Transisi ke Slide Berikutnya

Setelah melihat bagaimana `Enemy` bereaksi terhadap jarak, langkah berikutnya adalah memberi nama dan struktur pada kondisi-kondisi tersebut. Kita akan membahas apa itu **State** dan mengapa `IDLE` serta `ALERT` dapat menjadi dasar perilaku yang lebih rapi.

---

## Slide 029 - State

### Narasi

Pada slide ini kita masuk ke konsep **State**. Dalam konteks game, **state** adalah kondisi aktif yang sedang dialami oleh agent, misalnya NPC. State bukan sekadar label, tetapi representasi perilaku yang sedang dijalankan.

Contoh state yang umum:

- `Idle`
- `Alert`
- `Patrol`
- `Chase`
- `Attack`
- `Flee`
- `Search`

Setiap state menggambarkan situasi yang berbeda. Saat NPC berada di `Idle`, ia tidak sedang mengejar atau menyerang. Saat `Chase`, ia sedang mengejar target. Saat `Attack`, ia sedang melakukan aksi menyerang. Dengan kata lain, state membantu kita memetakan perilaku NPC ke kondisi yang bisa dipahami.

Pada praktikum pertama, kita hanya menggunakan dua state sederhana:

```text
State 1 = IDLE
State 2 = ALERT
```

Artinya, NPC hanya memiliki dua kondisi utama: tidak mendeteksi player dan sedang mendeteksi player. Bentuk ini memang sederhana, tetapi sudah cukup untuk menunjukkan bahwa perilaku NPC dapat diatur berdasarkan kondisi.

Keuntungan utama dari state adalah kejelasan. Jika NPC berperilaku tidak sesuai, kita bisa mengecek state apa yang sedang aktif. Apakah NPC seharusnya `ALERT` tetapi masih `IDLE`? Apakah jarak player sudah masuk detection radius tetapi state belum berubah? Dengan state, proses debugging menjadi lebih terarah.

Sebelum lanjut, mahasiswa perlu memahami bahwa state adalah dasar dari perilaku berbasis kondisi. State membuat agent tidak hanya “bergerak”, tetapi memiliki alasan perilaku: apa yang sedang terjadi pada agent saat ini.

### Inti yang Harus Ditekankan

- **State** adalah kondisi aktif agent, bukan sekadar nama perilaku.
- State membantu perilaku NPC menjadi lebih jelas, konsisten, dan mudah di-debug.
- Pada praktikum awal, dua state `IDLE` dan `ALERT` sudah cukup untuk menunjukkan dasar perilaku berbasis kondisi.

### Transisi ke Slide Berikutnya

Setelah memahami apa itu state, kita akan masuk ke state pertama, yaitu `IDLE`, untuk melihat kondisi apa yang membuat NPC berada pada state tersebut.

---

## Slide 030 - IDLE State

### Narasi

Slide ini membahas **`IDLE`** sebagai kondisi dasar **NPC** ketika tidak ada ancaman yang terdeteksi. Dalam perilaku agent, **`IDLE`** berfungsi sebagai kondisi aman atau netral sebelum agent melakukan reaksi lain.

Secara intuitif, **`IDLE`** adalah keadaan “tidak ada yang perlu dilakukan”. **NPC** tetap berada pada perilaku dasarnya, tidak mengejar, tidak menyerang, dan tidak waspada. Kondisi ini penting karena menjadi acuan awal sebelum agent beralih ke state lain.

Ciri utama state **`IDLE`** dapat dilihat dari beberapa hal:

- `player` berada di luar **`detectionRadius`**.
- `enemy` tidak bereaksi terhadap `player`.
- Warna `enemy` ditampilkan biru sebagai indikator visual.
- Nilai **`currentState`** adalah **`Idle`**.

Logika sederhana untuk masuk ke **`IDLE`** adalah sebagai berikut:

```text
currentDistance > detectionRadius
        ↓
IDLE
```

Artinya, jika jarak antara `enemy` dan `player` lebih besar dari **`detectionRadius`**, maka `enemy` dianggap tidak melihat atau tidak mendeteksi `player`. Akibatnya, `enemy` tetap berada pada state **`Idle`**.

Dalam implementasi, kondisi ini biasanya diperiksa setiap frame atau setiap update perilaku. Nilai **`currentDistance`** dihitung dari posisi `enemy` dan posisi `player`, kemudian dibandingkan dengan **`detectionRadius`**. Jika hasilnya benar, state agent tidak berubah atau kembali ke **`Idle`**.

State **`IDLE`** juga membantu proses debugging. Karena warna `enemy` biru dan **`currentState`** jelas, mahasiswa dapat melihat apakah agent sedang aman, belum mendeteksi, atau logika deteksi belum berjalan.

Sebelum lanjut ke state berikutnya, mahasiswa perlu memahami bahwa **`IDLE`** bukan berarti agent tidak aktif. Agent tetap berjalan, tetap memiliki state, dan tetap siap beralih jika kondisi deteksi berubah.

### Inti yang Harus Ditekankan

- **`IDLE`** adalah state aman ketika `player` berada di luar **`detectionRadius`**.
- Kondisi utamanya adalah **`currentDistance > detectionRadius`**.
- Indikator visual `enemy` biru dan **`currentState = Idle`** membantu memahami perilaku agent.
- **`IDLE`** menjadi dasar sebelum agent beralih ke state waspada atau agresif.

### Transisi ke Slide Berikutnya

Jika jarak `player` menjadi lebih dekat dari radius deteksi, kondisi **`IDLE`** tidak lagi berlaku dan agent akan beralih ke state **`ALERT`**.

---

## Slide 031 - ALERT State

### Narasi

Setelah kondisi `IDLE`, kondisi berikutnya yang perlu dipahami adalah **`ALERT`**. State `ALERT` menandai bahwa NPC mulai menyadari keberadaan player. Dalam perilaku NPC sederhana, ini adalah titik awal perubahan dari kondisi pasif menjadi kondisi waspada.

Secara intuitif, `ALERT` belum tentu berarti NPC langsung menyerang. State ini lebih menggambarkan perubahan status: player sudah masuk ke area yang dapat dideteksi. Karena itu, visualisasi biasanya memberi sinyal yang jelas, misalnya warna enemy berubah menjadi merah, sehingga mahasiswa dapat melihat perubahan state secara langsung.

Kondisi pemicu utama adalah jarak antara NPC dan player. Jika `currentDistance` lebih kecil atau sama dengan `detectionRadius`, maka NPC dianggap mendeteksi player. Logika sederhana ini dapat ditulis sebagai berikut:

```text
currentDistance <= detectionRadius
        ↓
ALERT
```

Urutan eksekusinya cukup sederhana. Sistem menghitung jarak terkini, membandingkannya dengan nilai deteksi, lalu memperbarui `current state` menjadi `Alert`. Perubahan ini penting karena menjadi dasar perilaku lanjutan, misalnya NPC berhenti, menoleh, mengejar, atau bersiap menyerang, tergantung aturan state berikutnya.

Dalam state machine sederhana, state seperti `ALERT` membantu membangun perilaku NPC yang lebih hidup dan dapat diprediksi. Mahasiswa perlu memahami bahwa state bukan hanya label, melainkan kondisi yang menentukan apa yang boleh dilakukan NPC pada saat itu.

Sebelum lanjut, pastikan mahasiswa memahami tiga hal: kondisi jarak, perubahan visual, dan perubahan `current state`. Ketiganya menunjukkan bahwa NPC telah beralih dari kondisi tidak sadar menjadi kondisi waspada.

### Inti yang Harus Ditekankan

- `ALERT` dipicu saat `currentDistance <= detectionRadius`.
- NPC berubah dari tidak mendeteksi menjadi waspada, sering ditandai dengan warna merah.
- `current state` harus diperbarui menjadi `Alert` agar perilaku berikutnya dapat bergantung pada state ini.

### Transisi ke Slide Berikutnya

Setelah memahami state `ALERT`, langkah berikutnya adalah melihat nilai apa yang mengatur perilaku tersebut, terutama parameter deteksi seperti `Detection Radius`.

---

## Slide 032 - Parameter AI

### Narasi

Pada slide ini kita masuk ke konsep **Parameter AI**. Parameter AI adalah nilai yang mengatur perilaku AI, bukan logika utama yang menentukan NPC harus melakukan apa.

Istilah ini penting karena dalam game, perilaku NPC biasanya tidak ditulis sebagai satu aturan kaku. Perilaku dibentuk oleh kombinasi **logika** dan **parameter**. Logika menentukan alur keputusan, sedangkan parameter menentukan batas, kecepatan, atau ambang dari keputusan tersebut.

Contoh parameter yang sering muncul pada NPC:

- `detection radius`
- `movement speed`
- `attack range`
- `view angle`
- `attack cooldown`
- `aggression`
- `memory duration`

Setiap nilai tersebut memengaruhi cara NPC merespons player. Misalnya, `detection radius` menentukan seberapa jauh NPC dapat melihat player. `attack range` menentukan jarak aman untuk menyerang. `attack cooldown` mengatur jeda antar serangan. `aggression` memengaruhi seberapa cepat NPC memilih tindakan agresif. `memory duration` menentukan seberapa lama NPC mengingat posisi terakhir player.

Pada praktikum pertama, parameter utama yang kita gunakan adalah:

```text
Detection Radius
```

Nilai ini menjadi penghubung antara posisi player dan keputusan NPC. Jika player berada di dalam radius tersebut, NPC dapat memasuki kondisi waspada atau `ALERT`. Jika player berada di luar radius, NPC tidak mendeteksi player meskipun berada di lingkungan yang sama.

Dengan memahami parameter, mahasiswa dapat melihat bahwa perilaku NPC bukan hanya soal “NPC bergerak” atau “NPC menyerang”. Perilaku NPC dibentuk oleh nilai yang dapat diamati dan diuji. Parameter membuat perilaku NPC lebih mudah dipahami karena kita bisa melihat pengaruh langsung dari satu nilai terhadap hasil perilaku.

Sebelum lanjut, hal yang perlu dipahami adalah: parameter bukan pengganti logika. Parameter hanya mengatur nilai ambang atau sifat perilaku. Logika tetap menentukan apa yang dilakukan NPC ketika kondisi terpenuhi.

### Inti yang Harus Ditekankan

- **Parameter AI** adalah nilai yang mengatur perilaku AI, bukan logika keputusan itu sendiri.
- Contoh parameter penting: `detection radius`, `movement speed`, `attack range`, `view angle`, `attack cooldown`, `aggression`, `memory duration`.
- Pada praktikum pertama, `Detection Radius` adalah parameter utama karena menentukan seberapa jauh NPC dapat mendeteksi player.
- Parameter membantu perilaku NPC menjadi lebih terukur dan mudah diamati.

### Transisi ke Slide Berikutnya

Setelah kita tahu apa itu parameter AI, langkah berikutnya adalah memahami mengapa parameter penting dalam pengembangan game.

---

## Slide 033 - Mengapa Parameter Penting?

### Narasi

Pada slide ini, kita memahami mengapa **parameter** menjadi bagian penting dalam desain perilaku NPC. Parameter bukan sekadar angka yang ditulis di kode, melainkan **kendali perilaku** yang memisahkan logika dari nilai yang digunakan.

Dengan kata lain, logika deteksi, pergerakan, atau serangan dapat tetap sama, tetapi hasilnya berubah karena nilai parameternya berbeda. Ini membuat sistem lebih fleksibel dan lebih mudah dikembangkan.

Contoh sederhana dapat dilihat pada parameter `Detection Radius`:

```text
Detection Radius = 3
NPC hanya mendeteksi dari dekat

Detection Radius = 8
NPC mendeteksi dari jauh
```

Pada nilai `3`, NPC cenderung hanya bereaksi ketika player berada di dekatnya. Pada nilai `8`, NPC lebih waspada dan dapat mendeteksi player dari jarak yang lebih jauh. Logika pengecekan jarak tidak berubah, tetapi **perilaku yang terlihat** berubah.

Di sinilah kekuatan parameter. Jika nilai ditulis langsung di dalam kode, setiap perubahan kecil akan menuntut pengeditan kode. Dengan parameter, perubahan dapat dilakukan sebagai **penyesuaian nilai**, bukan perubahan struktur program.

Parameter memudahkan beberapa proses penting dalam pengembangan game:

- **Tuning**: menyesuaikan rasa permainan, misalnya membuat NPC lebih agresif atau lebih pasif.
- **Eksperimen**: mencoba beberapa nilai untuk melihat dampak perilaku.
- **Balancing**: menjaga tingkat kesulitan tetap adil dan konsisten.
- **Debugging**: menemukan apakah masalah berasal dari logika atau dari nilai yang salah.
- **Desain gameplay**: membentuk pengalaman pemain tanpa harus menulis ulang seluruh sistem.

Sebelum lanjut, mahasiswa perlu memahami bahwa parameter adalah **ruang desain**. Nilai yang dipilih akan memengaruhi apakah NPC terasa terlalu mudah, terlalu sulit, terlalu lambat, atau terlalu agresif. Karena itu, parameter harus dipahami sebagai bagian dari desain, bukan hanya detail teknis.

### Inti yang Harus Ditekankan

- Parameter memungkinkan perilaku NPC diatur **tanpa mengubah logika kode**.
- Nilai seperti `Detection Radius` mengubah **threshold** perilaku, bukan struktur sistem.
- Parameter mendukung **tuning**, **eksperimen**, **balancing**, **debugging**, dan **desain gameplay**.

### Transisi ke Slide Berikutnya

Selanjutnya, kita akan melihat bagaimana nilai parameter dapat ditampilkan dan diubah melalui Inspector dalam Unity, sehingga proses penyesuaian menjadi lebih praktis dan tidak selalu memerlukan pengeditan script.

---

## Slide 034 - Inspector dalam Unity

### Narasi

Pada slide ini, kita melihat bagaimana parameter perilaku AI dapat dibuat lebih praktis dalam Unity. **Inspector** adalah panel di Unity yang menampilkan komponen pada `GameObject` dan nilai field yang dapat diatur secara visual.

Untuk membuat nilai seperti radius deteksi NPC terlihat di Inspector, kita dapat menuliskan:

```csharp
[SerializeField]
private float detectionRadius = 5f;
```

Atribut `[SerializeField]` membuat field `private` tetap dapat ditampilkan dan diubah di Inspector. Dengan cara ini, nilai `detectionRadius` tidak perlu diubah langsung di kode.

Secara intuitif, ini seperti memberikan “knob” atau slider kepada desainer dan pengembang. Jika NPC terlalu cepat mendeteksi pemain, nilai `detectionRadius` bisa diperkecil. Jika NPC terlalu lambat, nilai tersebut bisa diperbesar. Perubahan ini dapat dilakukan langsung di scene tanpa membuka ulang script.

Manfaat utama dari pendekatan ini adalah:

- mudah diubah saat testing,
- tidak perlu edit script untuk setiap penyesuaian,
- cocok untuk eksperimen perilaku NPC,
- desainer dapat melakukan tuning gameplay secara lebih cepat.

Dalam konteks Game AI, Inspector membantu memisahkan logika perilaku dari nilai parameter. Script tetap menyimpan aturan, misalnya NPC bereaksi jika jarak pemain lebih kecil dari `detectionRadius`, sementara nilai ambangnya dapat diatur secara visual.

Sebelum lanjut, mahasiswa perlu memahami bahwa `private` menjaga enkapsulasi, sedangkan `[SerializeField]` memberi akses khusus untuk editor Unity. Dengan memahami hal ini, kita dapat membuat AI yang lebih mudah diuji dan disetel.

### Inti yang Harus Ditekankan

- **Inspector** adalah tempat mengatur nilai komponen Unity secara visual.
- `[SerializeField]` membuat field `private` seperti `detectionRadius` dapat ditampilkan di Inspector.
- Parameter AI seperti radius deteksi dapat di-tune tanpa mengubah logika script.
- Pendekatan ini mempercepat eksperimen, balancing, dan desain perilaku NPC.

### Transisi ke Slide Berikutnya

Setelah parameter dapat diatur di Inspector, langkah berikutnya adalah memastikan perilaku AI benar-benar berjalan sesuai nilai yang kita atur. Untuk itu, kita akan membahas debugging dalam Game AI.

---

## Slide 035 - Debugging dalam Game AI

### Narasi

Pada slide ini, kita beralih dari mengatur nilai komponen ke tahap **debugging** dalam perilaku game. Dalam sistem yang melibatkan NPC, pathfinding, atau decision making, masalah jarang muncul sebagai error biasa. Masalah biasanya berupa perilaku yang tidak sesuai: NPC tidak mengejar, tidak kembali, tidak memilih aksi, atau skor berubah tidak masuk akal.

Oleh karena itu, debugging di sini bersifat **visual dan numerik**. Nilai numerik membantu kita memeriksa variabel, sedangkan visualisasi membantu kita melihat apa yang sebenarnya terjadi di scene. Dengan kombinasi keduanya, mahasiswa dapat menelusuri alasan di balik keputusan agent.

Beberapa informasi yang perlu dipantau adalah:

- `current state`: menunjukkan posisi agent dalam state machine atau behavior tree.
- `current distance`: jarak agent terhadap target atau ancaman.
- `detectionRadius`: batas area di mana agent dapat mendeteksi objek.
- `line of sight`: apakah agent benar-benar dapat melihat target tanpa terhalang.
- `path`: rute yang dihasilkan oleh pathfinding.
- `target`: objek yang sedang diprioritaskan oleh agent.
- `utility score`: nilai preferensi untuk memilih aksi tertentu.
- `reward`: umpan balik yang memengaruhi pembelajaran atau evaluasi perilaku.

Pada praktikum pertama, observasi ini dilakukan menggunakan tiga alat utama di Unity:

- **Inspector**: memeriksa dan mengubah nilai komponen secara langsung.
- **Console**: membaca log, pesan error, atau nilai yang dicetak saat runtime.
- **Gizmos**: menampilkan bantuan visual di Scene View, seperti area deteksi atau path.

Cara berpikir yang penting adalah: jangan langsung mengasumsikan bug ada di satu fungsi. Tanyakan dulu apa yang seharusnya terjadi, lalu bandingkan dengan data yang terlihat. Jika NPC tidak mendeteksi musuh, periksa `current distance`, `detectionRadius`, dan `line of sight`. Jika NPC tidak bergerak, periksa `path` dan `target`. Jika NPC memilih aksi yang salah, periksa `utility score` atau `reward`.

Dengan kebiasaan ini, mahasiswa belajar membaca sistem perilaku game secara sistematis. Debugging menjadi proses memahami hubungan antara sensor, state, keputusan, dan hasil yang terlihat di scene.

### Inti yang Harus Ditekankan

- **Debugging perilaku game** membutuhkan kombinasi data numerik dan visual.
- Variabel penting seperti `current state`, `detectionRadius`, `line of sight`, `path`, `target`, `utility score`, dan `reward` membantu melacak keputusan agent.
- **Inspector**, **Console**, dan **Gizmos** adalah alat dasar untuk observasi di Unity.

### Transisi ke Slide Berikutnya

Setelah memahami apa yang perlu dipantau, kita akan masuk ke **Gizmos**, yaitu alat visual yang digunakan untuk menampilkan area deteksi, path, waypoint, dan elemen bantuan lainnya di Scene View.

---

## Slide 036 - Gizmos

### Narasi

**Gizmos** adalah alat bantu visual di **Scene View** Unity. Fungsinya membuat kondisi spasial yang biasanya tidak terlihat menjadi tampak jelas. Dalam game cerdas, banyak keputusan NPC bergantung pada jarak, arah, dan area tertentu. Dengan gizmo, mahasiswa dapat melihat langsung apakah area deteksi, jalur, atau titik penting sudah berada di posisi yang benar.

Slide ini menekankan bahwa debugging tidak hanya berupa angka di konsol. Visualisasi membantu memahami perilaku NPC secara intuitif. Misalnya, jika NPC tidak mendeteksi pemain, mahasiswa dapat memeriksa apakah posisi pemain berada di dalam area deteksi yang digambar.

Beberapa elemen yang dapat divisualisasikan dengan **Gizmos** antara lain:

- `detection radius`
- `field of view`
- `path`
- `waypoint`
- `attack range`
- `cover point`
- `spawn area`

Pada praktikum pertama, kode berikut digunakan untuk menggambar area deteksi NPC:

```csharp
Gizmos.DrawWireSphere(
    transform.position,
    detectionRadius
);
```

Kode ini memanggil `Gizmos.DrawWireSphere` dengan dua input utama. `transform.position` menentukan pusat bola, yaitu posisi NPC di scene. `detectionRadius` menentukan ukuran area deteksi. Hasilnya adalah bola wireframe di Scene View yang menandai batas area yang dianggap NPC dapat mendeteksi.

Urutan pemahamannya sederhana:

1. NPC memiliki posisi di scene melalui `transform.position`.
2. Nilai `detectionRadius` menentukan seberapa jauh area deteksi.
3. `Gizmos.DrawWireSphere` menggambar bola di posisi tersebut.
4. Mahasiswa dapat membandingkan posisi pemain atau objek lain dengan bola tersebut.

Dengan cara ini, masalah seperti radius terlalu kecil, posisi NPC bergeser, atau target berada di luar area deteksi dapat terlihat cepat. Mahasiswa perlu memahami bahwa **Gizmos** bukan bagian dari logika permainan, melainkan alat bantu pengembangan dan debugging. Ia membantu memastikan data spasial yang dipakai oleh perilaku NPC sesuai dengan desain yang diinginkan.

### Inti yang Harus Ditekankan

- **Gizmos** adalah visualisasi bantuan di Scene View Unity.
- Gizmos membantu melihat area spasial seperti `detection radius`, `field of view`, `path`, `waypoint`, `attack range`, `cover point`, dan `spawn area`.
- `Gizmos.DrawWireSphere(transform.position, detectionRadius)` menggambar area deteksi NPC sebagai bola wireframe.
- Visualisasi ini mempercepat debugging karena masalah spasial dapat dilihat langsung, bukan hanya dari nilai numerik.

### Transisi ke Slide Berikutnya

Setelah area spasial dapat dilihat secara visual, langkah berikutnya adalah memeriksa pesan debug yang muncul saat perilaku NPC berjalan. Pada slide berikutnya, kita akan membahas `Console Log` untuk melihat perubahan state, urutan event, dan error yang terjadi.

---

## Slide 037 - Console Log

### Narasi

**Console** adalah jendela debug di Unity yang menampilkan pesan runtime. Pada materi Game Cerdas, Console membantu kita mengamati apakah logika NPC berjalan sesuai desain.

Contoh paling sederhana adalah:

```csharp
Debug.Log("Enemy State → " + currentState);
```

Pesan ini dikirim ke Console setiap kali baris tersebut dieksekusi. `Debug.Log` adalah fungsi debug, sedangkan `currentState` biasanya menyimpan state aktif NPC, misalnya `Patrol`, `Chase`, atau `Attack`. Jika state berubah, pesan yang muncul akan berbeda, sehingga kita dapat melihat perubahan perilaku secara langsung.

Manfaat utama Console dalam pengembangan Game AI:

- mengetahui **state** NPC berubah,
- mengetahui adanya **error** atau nilai tidak valid,
- melihat **urutan event** yang terjadi,
- membantu **troubleshooting** ketika perilaku NPC tidak sesuai.

Namun, log harus digunakan secara selektif. Dalam simulasi game, update dapat berjalan setiap frame. Jika kita menuliskan log setiap frame, Console akan penuh dan sulit dibaca. Sebaiknya log hanya dipanggil pada momen penting, misalnya saat transisi state, saat error, atau saat event tertentu terjadi.

Sebelum lanjut, mahasiswa perlu memahami bahwa Console bukan pengganti visualisasi. Console memberi informasi teks tentang apa yang terjadi di dalam kode, sedangkan visualisasi seperti gizmo membantu melihat area, path, atau range di Scene View.

### Inti yang Harus Ditekankan

- **Console** digunakan untuk membaca pesan debug selama game berjalan.
- `Debug.Log` membantu memantau perubahan `currentState` dan event penting pada NPC.
- Log yang terlalu sering, terutama setiap frame, dapat mengganggu debugging.
- Console paling berguna untuk mengetahui state berubah, error, urutan event, dan troubleshooting.

### Transisi ke Slide Berikutnya

Setelah memahami cara membaca log perilaku NPC, kita akan melihat contoh penerapan AI pada game modern, mulai dari enemy patrol, companion, NPC kota, hingga boss dengan phase.

---

## Slide 038 - Contoh AI pada Game Modern

### Narasi

Slide ini memberi gambaran bahwa perilaku cerdas pada game modern tidak datang dari satu teknik tunggal. Ia muncul dari banyak sistem yang bekerja pada lapisan berbeda: pergerakan, kesadaran, keputusan taktis, hingga pengaturan pengalaman pemain.

Contoh yang ditampilkan pada slide dapat dikelompokkan sebagai berikut:

- **Enemy patrol dan chase**: musuh bergerak di rute tertentu, lalu beralih ke pengejaran ketika mendeteksi pemain.
- **Companion mengikuti player**: karakter pendamping menjaga jarak, menghindari tabrakan, dan tetap berada di dekat pemain.
- **NPC civilian berjalan di kota**: warga kota memiliki jadwal, tujuan, dan jalur yang membuat dunia terasa hidup.
- **Boss memiliki phase**: boss berubah perilaku berdasarkan kondisi seperti kesehatan, waktu, atau event tertentu.
- **Enemy squad menggunakan cover**: sekelompok musuh memilih posisi perlindungan dan berkoordinasi saat menyerang.
- **Director mengatur intensitas**: sistem tingkat tinggi mengatur kapan ancaman, bantuan, atau tantangan muncul.
- **Procedural dungeon**: level atau area dibuat secara otomatis agar setiap permainan bisa berbeda.
- **Adaptive difficulty**: kesulitan disesuaikan dengan kemampuan atau pola bermain pemain.
- **Player modeling**: sistem mengamati perilaku pemain untuk memprediksi kebutuhan atau gaya bermain.

Dari contoh tersebut, mahasiswa perlu melihat pola umum. Banyak perilaku game dapat dipetakan ke komponen seperti **perception**, **decision making**, **pathfinding**, **steering**, dan **state management**. Misalnya, `patrol` dan `chase` membutuhkan deteksi pemain, pencarian jalur, dan pengendalian gerak. `phase` pada boss biasanya dikelola dengan state machine atau behavior tree, di mana setiap state memiliki kondisi masuk, aksi, dan kondisi keluar.

Pada level implementasi, perilaku ini sering tidak berdiri sendiri. Sebuah musuh yang menggunakan `cover` tidak hanya memilih posisi aman, tetapi juga perlu bergerak ke posisi tersebut, menghindari NPC lain, dan memutuskan kapan menembak atau mundur. Companion yang mengikuti pemain juga harus menyeimbangkan `follow`, `avoid`, dan `stay` agar tidak menabrak objek atau pemain.

Poin penting yang harus dipahami sebelum lanjut adalah: tidak semua perilaku cerdas berarti **machine learning**. Banyak game modern menggunakan aturan, pencarian jalur, state machine, behavior tree, dan sistem evaluasi sederhana karena lebih mudah dikontrol, diuji, dan disesuaikan dengan desain. Namun, sistem seperti `adaptive_difficulty` dan `player_model` dapat membuka ruang untuk pendekatan pembelajaran atau analisis data.

Dengan kata lain, slide ini mengajak mahasiswa melihat game sebagai sistem berlapis. Lapisan bawah mengurus gerak dan jalur, lapisan tengah mengurus perilaku karakter, dan lapisan atas mengurus pengalaman pemain. Pemahaman ini penting agar nanti ketika membahas genre tertentu, mahasiswa tidak hanya melihat satu aksi, tetapi juga struktur keputusan di baliknya.

### Inti yang Harus Ditekankan

- Game modern menggunakan banyak sistem perilaku, bukan satu algoritma tunggal.
- Contoh seperti `patrol`, `chase`, `follow`, `phase`, `cover`, dan `adaptive_difficulty` menunjukkan lapisan berbeda dari perilaku game.
- Banyak perilaku dapat dijelaskan dengan **perception**, **decision making**, **pathfinding**, **steering**, dan **state management**.
- Tidak semua perilaku cerdas memerlukan machine learning; aturan, state machine, dan behavior tree sering lebih praktis.
- Mahasiswa perlu membedakan perilaku tingkat rendah, tingkat menengah, dan tingkat tinggi sebelum masuk ke contoh genre.

### Transisi ke Slide Berikutnya

Setelah melihat cakupan luas perilaku pada game modern, kita akan memperdalam satu contoh yang sangat khas: stealth game. Di sana, perilaku NPC seperti patroli, kecurigaan, dan pencarian akan dibahas lebih rinci sebagai dasar untuk memahami desain perilaku yang lebih terstruktur.

---

## Slide 039 - Contoh AI: Stealth Game

### Narasi

Slide ini menggunakan **stealth game** sebagai contoh karena perilaku NPC tidak hanya bergerak, tetapi harus **merespons persepsi** terhadap pemain. Intuisi praktisnya adalah: pemain bisa menghindari konflik, jadi sistem perilaku harus tahu kapan NPC **melihat**, **mendengar**, **mengingat**, dan **mencari**.

Komponen utama yang perlu dipahami adalah:

- **field of view**: batas sudut pandang NPC.
- **line of sight**: apakah NPC benar-benar bisa melihat pemain tanpa penghalang.
- **hearing**: deteksi suara berdasarkan jarak atau volume.
- **memory**: penyimpanan informasi terakhir, misalnya posisi terakhir pemain.
- **patrol**: perilaku dasar saat NPC tidak terancam.
- **alert level**: tingkat kewaspadaan NPC.
- **search behavior**: perilaku mencari setelah kehilangan kontak.

Alur sederhana pada slide dapat dibaca sebagai berikut:

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

Alur ini menunjukkan **input**, **proses**, dan **output**. Inputnya adalah posisi pemain, suara, dan kondisi lingkungan. Prosesnya adalah evaluasi persepsi dan perubahan tingkat kewaspadaan. Outputnya adalah perilaku guard: `patrol`, `chase`, `search`, atau kembali ke `patrol`.

Dalam implementasi, alur ini sering dipetakan ke **state machine** atau **behavior tree**. State `patrol` menjadi state awal. Saat `field of view` dan `line of sight` terpenuhi, guard masuk state `alert` lalu `chase`. Jika pemain hilang, guard menggunakan `lastSeenPosition` untuk state `search`. Setelah waktu pencarian habis, guard kembali ke `patrol`. Untuk pergerakan, sistem **steering** dapat membantu guard bergerak menuju target, menghindari dinding, dan menjaga jarak yang wajar.

Sebelum lanjut, mahasiswa perlu memahami bahwa stealth behavior bukan sekadar "NPC mengejar pemain". Perilaku ini bergantung pada **decision making** yang berbasis persepsi dan memori. Jika `line of sight` terputus, NPC tidak boleh langsung kehilangan informasi; ia harus mengingat posisi terakhir dan mencari. Pemahaman ini menjadi dasar untuk perilaku NPC yang lebih hidup dan dapat diprediksi oleh pemain.

### Inti yang Harus Ditekankan

- **Stealth behavior** adalah gabungan dari persepsi, memori, dan keputusan perilaku.
- `field of view`, `line of sight`, dan `hearing` menentukan apakah NPC **terdeteksi**.
- `alert level` dan `memory` menentukan apakah NPC **mengejar**, **mencari**, atau **kembali patroli**.
- Alur guard dapat diimplementasikan sebagai state `patrol`, `alert`, `chase`, `search`, dan `return`.

### Transisi ke Slide Berikutnya

Setelah memahami bagaimana NPC menjaga, mengejar, dan mencari dalam stealth game, kita beralih ke **action game**, di mana perilaku NPC lebih cepat dan berfokus pada keputusan combat. Detail stealth akan diperdalam pada pertemuan berikutnya.

---

## Slide 040 - Contoh AI: Action Game

### Narasi

Pada **action game**, fokus utama perilaku musuh adalah membuat pertempuran terasa cepat, responsif, dan menantang. Berbeda dengan stealth yang menekankan pengamatan dan peringatan, action game menuntut musuh mampu **memilih aksi** berdasarkan jarak, kondisi, dan kemampuan yang dimiliki.

Perilaku yang umum muncul pada enemy action game meliputi:

- **chase** untuk mengejar pemain,
- **attack** untuk menyerang,
- **dodge** untuk menghindar,
- **flee** untuk mundur saat lemah,
- **target selection** untuk memilih target yang tepat,
- **ability usage** untuk memakai kemampuan khusus,
- **cooldown** untuk mengatur jeda antar kemampuan,
- **cover** untuk mencari perlindungan,
- **combo** untuk menjalankan rangkaian serangan.

Intuisi praktisnya sederhana: musuh tidak hanya bergerak ke arah pemain, tetapi harus memutuskan **kapan menyerang, kapan menghindar, dan kapan mundur**. Keputusan inilah yang membuat pertempuran terasa hidup.

Contoh aturan keputusan dapat ditulis sebagai berikut:

```text
Jika player dekat:
    melee attack

Jika player jauh:
    ranged attack

Jika HP rendah:
    flee atau call backup
```

Pada potongan aturan tersebut, sistem membaca kondisi pemain dan status musuh. Jika `player` berada dalam jarak dekat, musuh memilih `melee attack`. Jika jarak masih jauh, musuh memilih `ranged attack`. Jika `HP` musuh rendah, musuh dapat beralih ke `flee` atau memanggil `backup`.

Urutan eksekusinya dapat dipahami sebagai:

1. Sistem memeriksa kondisi: jarak pemain, HP musuh, dan kesiapan kemampuan.
2. Sistem memilih aksi yang paling sesuai.
3. Aksi dijalankan, misalnya menyerang, menghindar, atau mundur.
4. Setelah aksi selesai, sistem kembali memeriksa kondisi untuk memilih aksi berikutnya.

Yang perlu dipahami mahasiswa adalah bahwa perilaku action game biasanya bersifat **reaktif** dan **berbasis kondisi**. Setiap keputusan harus cepat karena tempo permainan tinggi. Selain itu, aturan seperti `cooldown` penting agar musuh tidak menggunakan kemampuan secara terus-menerus dan tetap terasa seimbang.

### Inti yang Harus Ditekankan

- Action game menuntut musuh mampu memilih aksi seperti `chase`, `attack`, `dodge`, `flee`, dan `cover` secara cepat.
- Keputusan musuh bergantung pada kondisi seperti jarak pemain, HP, dan kesiapan kemampuan.
- `cooldown` dan `target selection` membantu membuat perilaku musuh lebih seimbang dan tidak membingungkan.

### Transisi ke Slide Berikutnya

Setelah memahami perilaku musuh dalam action game, kita akan memperluas cakupan ke open world, di mana perilaku NPC tidak hanya berfokus pada pertempuran, tetapi juga pada rutinitas, interaksi, dan dinamika dunia.

---

## Slide 041 - Contoh AI: Open World Game

### Narasi

Pada slide ini, kita melihat **open world game** sebagai contoh sistem AI yang skalanya lebih besar dari sekadar satu musuh. Jika pada action game fokusnya adalah respons langsung terhadap pemain, maka pada open world game AI bertugas membuat dunia tetap berjalan meskipun pemain tidak sedang berinteraksi. Tujuannya adalah menciptakan kesan bahwa dunia memiliki rutinitas, aturan sosial, lalu lintas, dan peristiwa yang terjadi secara mandiri.

Komponen AI yang muncul pada open world game biasanya bersifat berlapis. Beberapa contohnya adalah:

- **NPC routines**: jadwal harian seperti bekerja, pulang, atau beraktivitas.
- **Traffic AI**: pergerakan kendaraan atau pejalan kaki di jalan.
- **Crowd behavior**: kerumunan yang bergerak, menyebar, atau bereaksi terhadap kejadian.
- **Animal behavior**: hewan yang berkeliaran, mencari makan, atau kabur dari ancaman.
- **Faction AI**: kelompok NPC yang memiliki hubungan, wilayah, atau tujuan bersama.
- **World event**: peristiwa global yang dapat mengubah suasana atau kondisi dunia.
- **Quest system**: pemicu tugas atau cerita yang muncul berdasarkan kondisi pemain.
- **Dynamic encounter**: pertemuan acak atau situasional yang membuat dunia terasa lebih hidup.

Contoh sederhana pada slide dapat ditulis sebagai berikut:

```text
NPC pergi bekerja pagi hari
NPC pulang sore hari
NPC bereaksi saat terjadi bahaya
```

Pseudocode ini menunjukkan pola dasar **rutinitas berbasis waktu** dan **reaksi terhadap ancaman**. Urutan eksekusinya dapat dipahami sebagai tiga tahap:

1. Sistem memeriksa waktu dunia, misalnya pagi atau sore.
2. `NPC` memilih state atau action yang sesuai, seperti `pergi_bekerja` atau `pulang`.
3. Jika ada event bahaya, sistem memotong rutinitas dan beralih ke state `bereaksi`, misalnya kabur, bersembunyi, atau memanggil bantuan.

Dalam implementasi nyata, pola seperti ini sering menggunakan **finite state machine**, **behavior tree**, atau kombinasi keduanya. `State` seperti `work`, `go_home`, dan `flee` dapat dikaitkan dengan `action` pergerakan, dialog, atau animasi. Untuk pergerakan, AI dapat memakai **pathfinding** menuju tujuan dan **steering** agar NPC tidak menabrak objek atau NPC lain. Dengan cara ini, dunia tidak hanya berisi objek statis, tetapi entitas yang memiliki perilaku yang konsisten.

Hal penting yang harus dipahami mahasiswa adalah bahwa AI open world bukan satu sistem tunggal yang “mengatur semua”. Ia adalah kumpulan sistem kecil yang bekerja bersama: jadwal, sensor lingkungan, event, pathfinding, dan aturan interaksi. Mahasiswa perlu melihat bahwa kualitas dunia terbuka sangat bergantung pada konsistensi perilaku, bukan hanya pada satu musuh yang pintar. Jika rutinitas NPC, lalu lintas, dan reaksi terhadap bahaya berjalan selaras, pemain akan merasakan dunia yang hidup dan dapat dipercaya.

### Inti yang Harus Ditekankan

- **Open world AI** bertujuan membuat dunia terasa hidup melalui rutinitas, lalu lintas, kerumunan, hewan, faksi, event, quest, dan encounter.
- Contoh pseudocode menunjukkan pola **jadwal berbasis waktu** yang dapat diinterupsi oleh **event bahaya**.
- Implementasi biasanya menggabungkan `state`, `action`, pathfinding, steering, dan event-driven behavior agar perilaku NPC konsisten.
- Mahasiswa perlu memahami bahwa AI open world bersifat **berlapis dan sistemik**, bukan sekadar satu musuh yang mengejar pemain.

### Transisi ke Slide Berikutnya

Setelah memahami bagaimana AI membuat dunia terbuka terasa hidup melalui rutinitas dan event, kita akan beralih ke strategy game, di mana AI lebih banyak berperan dalam perencanaan, pengelolaan unit, dan pengambilan keputusan strategis.

---

## Slide 042 - Contoh AI: Strategy Game

### Narasi

Pada **strategy game**, fokusnya bergeser dari NPC yang sekadar hidup di dunia menjadi agen yang harus membuat keputusan strategis. Jika open world menekankan rutinitas dan reaksi lingkungan, strategy game menuntut sistem yang bisa memilih tindakan berdasarkan tujuan jangka panjang: mempertahankan basis, mengembangkan ekonomi, dan menekan lawan.

Komponen utamanya meliputi:

- `unit movement` untuk memindahkan pasukan atau pekerja,
- `resource gathering` untuk mengumpulkan sumber daya,
- `base building` untuk membangun struktur pendukung,
- `attack planning` untuk menyusun serangan,
- `defense planning` untuk memperkuat pertahanan,
- `target priority` untuk memilih target yang paling bernilai,
- `group coordination` agar beberapa unit bekerja sama.

Contoh sederhana yang ditampilkan pada slide adalah:

```text
AI mengumpulkan resource
membangun base
melatih unit
menyerang player
```

Potongan ini sebaiknya dibaca sebagai **alur tugas tingkat tinggi**, bukan satu perintah kaku. Dalam implementasi, sistem biasanya mengevaluasi kondisi dunia: apakah `resource` cukup, apakah `base` aman, apakah `unit` siap, dan apakah waktu menyerang sudah tepat.

Di sinilah **planning**, **utility**, dan **rule-based decision** bertemu. **Planning** membantu menyusun urutan tindakan menuju tujuan, misalnya kumpulkan `resource` dulu, lalu bangun `base`, kemudian latih `unit`. **Utility** memberi nilai pada pilihan tindakan berdasarkan kondisi saat ini, sehingga sistem bisa memilih antara mengumpulkan `resource`, memperkuat pertahanan, atau menyerang. **Rule-based decision** menyediakan aturan praktis, misalnya “jika `resource` cukup dan `unit` siap, mulai menyerang”.

Untuk mahasiswa, hal penting yang harus dipahami adalah bahwa strategy AI tidak cukup hanya membuat satu unit bergerak. Yang menentukan kualitasnya adalah **prioritas keputusan** dan **koordinasi kelompok**. Unit yang bergerak tanpa prioritas akan terlihat tidak masuk akal, misalnya menyerang target yang lemah saat basis sendiri belum aman, atau semua unit menuju target yang sama tanpa pembagian tugas.

Sebelum lanjut, pastikan mahasiswa memahami tiga hal: strategi AI adalah sistem keputusan berlapis, `target priority` menentukan rasionalitas tindakan, dan `group coordination` mengubah kumpulan unit menjadi pasukan yang koheren.

### Inti yang Harus Ditekankan

- **Strategy game** menuntut sistem yang bisa memilih tindakan strategis, bukan hanya bereaksi terhadap lingkungan.
- `target priority` dan `group coordination` adalah kunci agar perilaku unit terasa masuk akal.
- Strategi AI sering menggabungkan **planning**, **utility**, dan **rule-based decision** untuk menyeimbangkan ekonomi, pertahanan, dan serangan.

### Transisi ke Slide Berikutnya

Setelah melihat bagaimana strategy game mengatur keputusan tingkat tinggi, kita akan masuk ke jenis game lain yang lebih menekankan pergerakan dan jalur: racing game.

---

## Slide 043 - Contoh AI: Racing Game

### Narasi

Setelah melihat strategy game, kita masuk ke genre yang lebih real-time: **racing game**. Pada genre ini, tantangan utama bukan hanya memilih aksi, tetapi membuat kendaraan bergerak mulus, cepat, dan tetap terasa hidup di lintasan. Sistem AI di sini berperan sebagai pengemudi virtual yang harus membaca posisi, kecepatan, dan kondisi lintasan secara terus-menerus.

Secara konseptual, racing AI menggabungkan **path following** dengan **steering behavior**. Agent tidak cukup hanya tahu titik tujuan; ia harus memilih titik target di lintasan, menjaga jarak dari dinding, mengatur kecepatan, dan memutuskan kapan harus menyalip. Karena itu, perilaku ini sering diimplementasikan dengan kombinasi `waypoint`, `pathfinding`, `steering`, dan `decision making`.

Slide ini menyebutkan beberapa fungsi utama:

- **path following**: mengikuti jalur lintasan yang sudah ditentukan.
- **racing line**: memilih jalur optimal agar kecepatan rata-rata lebih tinggi, terutama di tikungan.
- **obstacle avoidance**: menghindari pemain, kendaraan lain, atau rintangan.
- **overtaking**: mengambil keputusan untuk menyalip saat posisi dan jarak memungkinkan.
- **rubber banding**: menyesuaikan kecepatan AI agar pemain tidak terlalu jauh atau terlalu tertinggal.
- **difficulty scaling**: mengubah perilaku AI agar tingkat kesulitan tetap seimbang.

Contoh perilaku pada slide dapat ditulis sebagai:

```text
AI car mengikuti racing line
mengurangi kecepatan di tikungan
mencoba menyalip player
```

Potongan ini menggambarkan perilaku dasar yang mudah dipahami. Dalam eksekusinya, dapat dilihat sebagai tahapan:

1. Kendaraan AI memilih target di `racing line`.
2. Saat mendekati tikungan, sistem mengurangi `speed` atau `throttle`.
3. Jika ada peluang, AI memilih `action` menyalip dengan sisi yang aman.

Namun dalam implementasi nyata, tahapan ini dievaluasi terus-menerus, bukan hanya sekali.

Alur prosesnya dapat dipahami sebagai pipeline sederhana. Input berupa posisi kendaraan, posisi pemain, titik lintasan, kecepatan, dan rintangan. Proses berupa pemilihan target, perhitungan `steering`, penyesuaian `throttle` atau `brake`, dan keputusan menyalip. Output berupa gerakan kendaraan yang halus dan kompetitif. Jika hanya menggunakan `path following` tanpa kontrol kecepatan, kendaraan akan terlihat kaku. Jika hanya menggunakan `steering` tanpa `racing line`, kendaraan mungkin masuk lintasan tetapi tidak efisien.

Perlu diperhatikan bahwa **rubber banding** bukan sekadar membuat AI lebih cepat atau lebih lambat. Ia adalah mekanisme desain untuk menjaga pengalaman bermain tetap menarik. Namun, pembahasan detailnya akan masuk ke materi **Dynamic Difficulty Adjustment**, sehingga di sini cukup dipahami sebagai salah satu cara `difficulty scaling` pada racing game.

Sebelum lanjut, mahasiswa perlu memahami tiga hal: `path following` adalah dasar, `racing line` menentukan efisiensi, dan `overtaking` adalah keputusan berbasis kondisi. Dengan pemahaman ini, perilaku AI pada racing game tidak lagi terlihat sebagai gerakan acak, tetapi sebagai sistem yang membaca lingkungan dan memilih aksi yang tepat.

### Inti yang Harus Ditekankan

- `path following` dan `racing line` membedakan AI yang hanya sampai tujuan dengan AI yang mengemudi efisien.
- `obstacle avoidance` dan `overtaking` menunjukkan bahwa racing AI membutuhkan keputusan real-time, bukan hanya jalur statis.
- `rubber banding` dan `difficulty scaling` adalah alat desain untuk menjaga keseimbangan, bukan sekadar parameter kecepatan.

### Transisi ke Slide Berikutnya

Setelah memahami bagaimana AI mengendalikan perilaku kendaraan pada lintasan yang sudah ada, langkah berikutnya adalah melihat bagaimana AI dapat membantu menghasilkan konten itu sendiri, seperti level, dungeon, dan spawn enemy pada procedural game.

---

## Slide 044 - Contoh AI: Procedural Game

### Narasi

Pada slide ini, kita melihat contoh penerapan kecerdasan game pada **procedural game**. Intuisi utamanya sederhana: sebagian isi game tidak dibuat sepenuhnya secara manual, tetapi dihasilkan oleh sistem berdasarkan aturan, parameter, atau proses generatif. Pendekatan ini membuat setiap kali pemain bermain, pengalaman bisa terasa segar, berbeda, dan lebih sulit diprediksi.

Dalam konteks ini, sistem kecerdasan dapat membantu beberapa hal:

- **Level generation**, yaitu membuat struktur area permainan.
- **Dungeon generation**, yaitu menyusun ruangan, koridor, dan layout dungeon.
- **Enemy spawn**, yaitu menentukan posisi atau jenis musuh yang muncul.
- **Loot generation**, yaitu mengatur item atau hadiah yang tersedia.
- **Quest generation**, yaitu membentuk tujuan atau misi yang dapat dimainkan.
- **Adaptive content**, yaitu menyesuaikan konten berdasarkan kondisi permainan atau perilaku pemain.

Contoh yang ditampilkan pada slide adalah:

```text
Setiap run menghasilkan dungeon berbeda
tetapi tetap memiliki path dari start ke goal.
```

Contoh ini penting karena menunjukkan bahwa **prosedural** tidak berarti **acak tanpa aturan**. Sistem harus menghasilkan variasi, tetapi juga tetap menjaga agar permainan dapat diselesaikan. Dalam hal ini, ada hubungan antara **input** berupa aturan atau parameter, **proses** pembuatan layout, dan **output** berupa dungeon yang bisa dimainkan.

Secara praktis, alurnya dapat dipahami sebagai berikut:

1. Sistem menentukan aturan dasar, misalnya ukuran dungeon, jumlah ruangan, dan batas kesulitan.
2. Sistem menyusun layout, seperti ruangan, koridor, atau area transisi.
3. Sistem memvalidasi bahwa ada `path` yang valid dari `start` ke `goal`.
4. Sistem menambahkan elemen pendukung, seperti musuh, loot, atau quest, sesuai aturan desain.

Hal yang harus dipahami sebelum lanjut adalah bahwa konten prosedural harus tetap memenuhi tujuan desain game. Variasi penting, tetapi **playability**, **fairness**, dan **konsistensi pengalaman** sama pentingnya. Mahasiswa perlu melihat procedural game bukan sebagai "membuat acak", melainkan sebagai proses menghasilkan konten yang tetap terkontrol dan bermakna.

### Inti yang Harus Ditekankan

- **Procedural game** menggunakan sistem generatif untuk membuat konten seperti level, dungeon, musuh, loot, quest, dan konten adaptif.
- Variasi harus tetap dibatasi oleh aturan agar permainan tetap **playable** dan memiliki `path` yang valid dari `start` ke `goal`.
- Konsep ini menjadi dasar menuju pembahasan **PCG**, yaitu cara menghasilkan konten game secara prosedural dengan tujuan desain yang jelas.

### Transisi ke Slide Berikutnya

Setelah melihat contoh pada racing game dan procedural game, kita akan merangkum teknik-teknik kecerdasan game yang akan dipelajari sepanjang semester, mulai dari perception, steering, pathfinding, hingga machine learning.

---

## Slide 045 - Teknik Game AI yang Akan Dipelajari

### Narasi

Slide ini menjadi **peta belajar** mata kuliah Game Cerdas. Tujuannya bukan langsung masuk ke satu algoritma, tetapi memberi gambaran bahwa AI dalam game adalah kumpulan teknik yang saling melengkapi: dari cara agen **menerima informasi**, **mengingat**, **bergerak**, **menentukan keputusan**, sampai **belajar** dari lingkungan.

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

Daftar ini dapat dibaca sebagai **alur kemampuan NPC** yang semakin kompleks. Pada tahap awal, agen perlu **perception** untuk mengetahui posisi pemain, musuh, atau objek di sekitar, serta **memory** untuk menyimpan informasi penting. Setelah itu, teknik seperti `Steering Behavior` dan `Pathfinding & Navigation` membantu agen bergerak secara natural dan mencapai tujuan di environment.

Selanjutnya, teknik decision making seperti `Finite State Machine`, `Behavior Tree`, dan `Utility-Based AI` menentukan **apa yang dilakukan NPC** pada kondisi tertentu. `Tactical AI` memperluas keputusan ke level strategi, misalnya memilih target atau menyesuaikan respons terhadap situasi. Sementara `Procedural Content Generation`, `Dynamic Difficulty Adjustment`, dan `Player Modeling` menunjukkan bahwa AI tidak hanya untuk NPC, tetapi juga untuk **menghasilkan konten** dan **menyesuaikan pengalaman pemain**.

Poin penting yang harus dipahami mahasiswa adalah: setiap teknik memiliki **peran berbeda**, tetapi dalam game nyata sering digabungkan. Misalnya, NPC dapat menggunakan `Pathfinding` untuk menuju pemain, `Behavior Tree` untuk memilih aksi, dan `Steering Behavior` agar gerakannya tidak kaku. Pertemuan 1 berfungsi sebagai dasar agar mahasiswa dapat melihat hubungan antar teknik sebelum masuk ke implementasi.

### Inti yang Harus Ditekankan

- **Perception & Memory** adalah dasar agar agen tahu apa yang terjadi dan mengingat informasi penting.
- `Steering Behavior`, `Pathfinding & Navigation`, `Finite State Machine`, `Behavior Tree`, dan `Utility-Based AI` adalah inti perilaku dan keputusan NPC.
- `Procedural Content Generation`, `Dynamic Difficulty Adjustment`, `Player Modeling`, `Machine Learning`, dan `Unity ML-Agents` memperluas Game AI ke konten adaptif, pembelajaran, dan implementasi praktis.

### Transisi ke Slide Berikutnya

Setelah memahami teknik apa saja yang akan dipelajari, langkah berikutnya adalah melihat **platform** yang akan digunakan untuk mengimplementasikannya, yaitu Unity sebagai tool Game AI.

---

## Slide 046 - Unity sebagai Tool Game AI

### Narasi

Slide ini menjelaskan mengapa **Unity** dipilih sebagai tool utama dalam mata kuliah Game Cerdas. Unity bukan sekadar editor game; ia menyediakan lingkungan yang lengkap untuk membangun, menguji, dan mengamati perilaku agen dalam game. Dengan Unity, mahasiswa dapat melihat langsung bagaimana konsep seperti **perception**, **pathfinding**, **state machine**, **behavior tree**, **steering**, dan **decision making** berubah menjadi perilaku yang dapat dijalankan.

Beberapa alasan utama penggunaan Unity adalah sebagai berikut:

- **Mendukung 2D dan 3D**: mahasiswa dapat membuat contoh sederhana di 2D, lalu memperluasnya ke 3D tanpa mengganti tool utama.
- **Memiliki `C# scripting`**: logika perilaku agen dapat ditulis langsung dalam bahasa yang umum, terbaca, dan mudah dikembangkan.
- **Memiliki `physics engine`**: interaksi antar agen, tabrakan, dan respons lingkungan dapat disimulasikan secara lebih realistis.
- **Mendukung `NavMesh`**: fitur ini membantu agen bergerak di lingkungan yang memiliki rintangan, sehingga relevan untuk **pathfinding** dan **navigation**.
- **Mendukung `animation`**: perubahan perilaku agen dapat ditampilkan melalui animasi, misalnya berjalan, menyerang, atau bereaksi terhadap pemain.
- **Mendukung `prefab`**: agen atau objek yang sama dapat dibuat sekali, lalu digunakan berulang kali dengan variasi parameter.
- **Mendukung visual debugging**: mahasiswa dapat mengamati komponen, nilai variabel, dan perubahan perilaku secara lebih mudah selama pengembangan.
- **Memiliki package `ML-Agents`**: Unity menyediakan jalur untuk mencoba pendekatan **learning agent** tanpa harus membangun seluruh infrastruktur dari nol.
- **Cocok untuk prototype cepat**: ide perilaku agen dapat diuji dalam waktu singkat, lalu diperbaiki berdasarkan hasil pengamatan.

Dalam konteks praktikum, Unity digunakan untuk mengimplementasikan konsep kecerdasan game secara langsung. Artinya, mahasiswa tidak hanya memahami teori, tetapi juga membangun agen yang dapat bergerak, mengambil keputusan, dan berinteraksi dengan lingkungan. Hal ini penting karena perilaku game yang baik biasanya baru terlihat ketika konsep tersebut dijalankan dalam scene yang nyata.

Sebelum masuk ke detail teknis, mahasiswa perlu memahami bahwa Unity berfungsi sebagai **platform integrasi**. Di dalamnya, logika perilaku, lingkungan, animasi, fisika, dan debugging bertemu dalam satu alur kerja. Dengan pemahaman ini, materi berikutnya akan lebih mudah diikuti karena setiap komponen yang dibahas nanti akan ditempatkan dalam konteks tool yang sama.

### Inti yang Harus Ditekankan

- **Unity dipilih karena mendukung implementasi langsung** konsep kecerdasan game, bukan hanya pembuatan visual game.
- Fitur seperti `NavMesh`, `C# scripting`, `prefab`, dan `ML-Agents` membuat Unity relevan untuk **NPC behavior**, **pathfinding**, **decision making**, dan **learning agent**.
- Unity membantu mahasiswa bergerak cepat dari ide ke **prototype**, sehingga perilaku agen dapat diamati, diuji, dan diperbaiki secara iteratif.

### Transisi ke Slide Berikutnya

Setelah memahami mengapa Unity digunakan sebagai tool utama, langkah berikutnya adalah memahami unit dasar yang akan kita bangun di dalamnya, yaitu **GameObject**.

---

## Slide 047 - GameObject

### Narasi

Pada bagian ini kita mulai dari unit kerja paling dasar di Unity, yaitu **GameObject**. **GameObject** adalah objek dasar yang menjadi wadah bagi semua entitas di dalam scene. Dalam game, hampir semua hal yang bisa dilihat, diinteraksikan, atau dikendalikan dapat direpresentasikan sebagai **GameObject**.

Beberapa contoh **GameObject** yang umum adalah:

- `Player`
- `Enemy`
- `Camera`
- `Light`
- `Ground`
- `Item`
- `Door`

Yang perlu dipahami adalah **GameObject** tidak otomatis memiliki perilaku. Perilaku, tampilan, dan interaksi muncul karena **GameObject** memiliki **komponen**. Komponen adalah bagian yang menempel pada objek dan menentukan apa yang bisa dilakukan objek tersebut.

Sebagai ilustrasi, struktur komponen pada objek `Player` dapat digambarkan seperti berikut:

```text
Player
├── Transform
├── Collider
├── Renderer
└── PlayerController
```

Pada contoh ini, `Player` adalah **GameObject**, sedangkan `Transform`, `Collider`, `Renderer`, dan `PlayerController` adalah komponen yang melekat padanya. `Transform` menyimpan informasi posisi dan orientasi objek, `Collider` membantu interaksi fisik atau deteksi tabrakan, `Renderer` menampilkan tampilan visual, dan `PlayerController` berisi logika yang membuat objek dapat dikendalikan.

Dalam praktikum, `Player` dan `Enemy` dibuat sebagai **GameObject**. Ini penting karena dalam pengembangan game cerdas, agent seperti pemain atau NPC biasanya tidak langsung menjadi "game", melainkan menjadi objek yang memiliki komponen. Dengan cara ini, kita dapat menambahkan kemampuan gerak, deteksi, animasi, atau logika keputusan secara modular.

Sebelum lanjut, mahasiswa perlu memahami bahwa **GameObject** adalah unit dasar, sedangkan **komponen** adalah sumber perilaku. Konsep ini akan menjadi dasar ketika kita membahas bagaimana agent membaca posisi, menghitung jarak, dan menggerakkan objek.

### Inti yang Harus Ditekankan

- **GameObject** adalah objek dasar di Unity yang merepresentasikan entitas dalam scene.
- **Komponen** menentukan kemampuan objek, seperti posisi, tampilan, interaksi, dan logika perilaku.
- `Player` dan `Enemy` sebagai **GameObject** menjadi dasar implementasi perilaku agent dalam praktikum.

### Transisi ke Slide Berikutnya

Selanjutnya kita akan membahas `Transform`, yaitu komponen yang menyimpan informasi posisi dan orientasi objek, sehingga menjadi dasar bagi perilaku agent seperti bergerak, menghadap target, dan menghitung jarak.

---

## Slide 048 - Transform

### Narasi

**Transform** adalah komponen dasar yang melekat pada setiap GameObject di Unity. Komponen ini menyimpan tiga informasi utama: `position`, `rotation`, dan `scale`.

Secara intuitif, `Transform` bisa dipahami sebagai "kartu identitas ruang" dari sebuah objek. Ia menjawab pertanyaan sederhana: di mana objek berada, ke mana objek menghadap, dan seberapa besar objek tersebut.

```csharp
transform.position
```

Baris ini digunakan untuk membaca atau mengubah posisi objek. Dalam praktik, nilai posisi inilah yang paling sering dipakai oleh logika game, misalnya untuk mengetahui jarak antara player dan enemy.

Dalam kecerdasan game, `Transform` menjadi data penting untuk perilaku agent. Beberapa penggunaannya adalah:

- menghitung jarak antara agent dan target,
- menentukan arah pergerakan,
- menggerakkan agent menuju titik tertentu,
- membuat agent menghadap target.

Dengan kata lain, sebelum sebuah agent dapat bergerak atau merespons lingkungan, ia biasanya perlu membaca data `Transform` terlebih dahulu. Posisi memberi tahu di mana agent berada, rotasi memberi tahu ke mana agent menghadap, dan skala memberi tahu ukuran objek.

Hal yang perlu dipahami mahasiswa adalah bahwa `Transform` bukan hanya komponen visual. Ia juga menjadi dasar perhitungan logika, seperti pergerakan NPC, pengejaran target, atau penentuan arah agent.

### Inti yang Harus Ditekankan

- **Transform** menyimpan `position`, `rotation`, dan `scale`.
- `transform.position` digunakan untuk membaca atau mengubah posisi objek.
- Data `Transform` penting untuk menghitung jarak, menentukan arah, menggerakkan agent, dan menghadap target.
- `Transform` adalah dasar perilaku NPC dan agent dalam game.

### Transisi ke Slide Berikutnya

Setelah memahami peran `Transform`, kita akan masuk ke konsep **Component**, yaitu cara Unity memungkinkan GameObject memiliki banyak komponen, termasuk script C# yang dibuat mahasiswa.

---

## Slide 049 - Component

### Narasi

Dalam Unity, sebuah objek game tidak dibangun sebagai satu kesatuan monolitik. Unity menggunakan **component-based architecture**, artinya sebuah `GameObject` dapat memiliki banyak komponen yang bekerja bersama.

Pendekatan ini penting karena setiap komponen memiliki tanggung jawab yang berbeda. Ada komponen untuk posisi, bentuk visual, tabrakan, animasi, dan logika perilaku. Dengan cara ini, satu objek seperti musuh, pemain, atau item dapat dirakit dari beberapa bagian yang terpisah.

Contoh struktur objeknya adalah sebagai berikut:

```text
Enemy
├── Transform
├── Capsule Collider
├── Mesh Renderer
└── EnemyDetector.cs
```

Setiap komponen pada contoh tersebut memiliki peran yang berbeda:

- `Transform` menyimpan posisi, rotasi, dan skala objek.
- `Capsule Collider` membantu Unity mendeteksi bentuk tabrakan atau area overlap.
- `Mesh Renderer` menampilkan model visual objek di scene.
- `EnemyDetector.cs` berisi logika yang membuat objek tersebut memiliki perilaku tertentu.

Perlu dipahami bahwa script C# yang dibuat mahasiswa juga menjadi **component**. Ketika script seperti `EnemyDetector.cs` di-attach ke `GameObject`, script tersebut tidak lagi hanya berupa file terpisah, melainkan menjadi bagian dari objek tersebut.

Secara praktis, cara berpikir ini sangat membantu ketika merancang perilaku NPC atau agent dalam game. Kita tidak perlu menaruh semua logika ke dalam satu tempat. Misalnya, deteksi pemain, pergerakan, dan tampilan visual dapat dipisahkan ke komponen yang berbeda.

Sebelum lanjut, mahasiswa perlu memahami bahwa `GameObject` adalah wadah, sedangkan komponen adalah bagian yang menentukan apa yang bisa dilakukan oleh objek tersebut. Pemahaman ini menjadi dasar untuk memahami bagaimana script Unity terhubung dengan objek game.

### Inti yang Harus Ditekankan

- Unity menggunakan **component-based architecture**, di mana `GameObject` dapat memiliki banyak komponen.
- Satu objek game dapat menggabungkan komponen visual, fisika, dan logika perilaku.
- Script C# yang di-attach ke `GameObject` juga menjadi bagian dari komponen objek tersebut.
- Pemisahan komponen membuat perilaku game lebih modular, rapi, dan mudah dikembangkan.

### Transisi ke Slide Berikutnya

Setelah memahami bahwa script dapat menjadi komponen, langkah berikutnya adalah memahami bagaimana script tersebut dapat menerima event dari Unity.

---

## Slide 050 - MonoBehaviour

### Narasi

Pada slide ini kita membahas **MonoBehaviour**, yaitu kelas dasar yang membuat script Unity dapat menjadi komponen yang dikenali oleh engine.

Sebelumnya kita melihat bahwa GameObject dapat memiliki banyak **component**. Komponen inilah yang memberi objek kemampuan, tampilan, collider, dan logika perilaku.

```csharp
public class EnemyDetector : MonoBehaviour
{
    void Update()
    {
        DetectPlayer();
    }
}
```

Pada contoh ini, `EnemyDetector` mewarisi `MonoBehaviour`. Artinya script tersebut dapat dipasang pada GameObject dan dikelola oleh Unity sebagai bagian dari objek.

Tanpa `MonoBehaviour`, script C# biasa tidak dapat menerima event dari Unity. Dengan `MonoBehaviour`, Unity dapat memanggil method tertentu pada waktu yang tepat, misalnya:

- `Start()`
- `Update()`
- `OnDrawGizmosSelected()`

Method `Update()` sangat penting karena dipanggil setiap frame. Dalam konteks game cerdas, inilah cara script NPC dapat menjalankan logika berulang, seperti memantau pemain atau mengubah perilaku.

Pada contoh di atas, `Update()` memanggil `DetectPlayer()`. Dengan demikian, setiap frame objek NPC dapat menjalankan proses deteksi. Ini menjadi dasar perilaku sederhana yang terus berjalan selama game aktif.

Yang harus dipahami mahasiswa adalah: `MonoBehaviour` bukan sekadar class biasa. Ia adalah mekanisme yang menghubungkan script dengan siklus eksekusi Unity, sehingga komponen dapat hidup dan bereaksi terhadap kondisi game.

### Inti yang Harus Ditekankan

- Script Unity biasanya mewarisi `MonoBehaviour` agar dapat dipasang sebagai komponen.
- `MonoBehaviour` memungkinkan Unity memanggil method seperti `Start()`, `Update()`, dan `OnDrawGizmosSelected()`.
- `Update()` penting untuk logika yang berjalan setiap frame, termasuk perilaku NPC.
- `MonoBehaviour` menghubungkan script dengan game loop Unity.

### Transisi ke Slide Berikutnya

Setelah memahami bahwa `MonoBehaviour` membuat script dapat menerima event Unity, kita akan membahas dua event paling dasar, yaitu `Start()` dan `Update()`, serta bagaimana keduanya digunakan pada NPC Detector.

---

## Slide 051 - Start() dan Update()

### Narasi

Setelah script terhubung ke objek Unity melalui `MonoBehaviour`, mahasiswa perlu memahami dua method lifecycle yang paling menentukan perilaku NPC.

`Start()` dipanggil **sekali** saat object aktif. Method ini biasanya digunakan untuk **inisialisasi**, yaitu menyiapkan data awal sebelum game berjalan.

```csharp
void Start()
{
    // inisialisasi
}
```

Secara praktis, `Start()` cocok digunakan untuk mengambil referensi komponen, mengatur nilai awal, atau menyiapkan **state awal** NPC. Logika yang hanya perlu dilakukan satu kali sebaiknya tidak diletakkan di `Update()`.

`Update()` dipanggil **setiap frame**. Method ini digunakan untuk logika game yang harus terus berjalan selama object aktif.

```csharp
void Update()
{
    // logika game setiap frame
}
```

Karena `Update()` berjalan berulang, method ini cocok untuk memeriksa kondisi lingkungan, memperbarui posisi, atau memanggil proses deteksi NPC.

Urutan eksekusinya penting:

1. Object menjadi aktif.
2. Unity memanggil `Start()`.
3. Setelah itu, `Update()` mulai dipanggil setiap frame.

Pada **NPC Detector**, pembagian tugasnya menjadi jelas:

- `Start()` mengambil `Renderer` dan mengatur state awal.
- `Update()` memanggil proses deteksi.

```csharp
void Start()
{
    // ambil Renderer
    // atur state awal
}

void Update()
{
    // panggil proses deteksi
}
```

Dengan pola ini, NPC sudah siap sejak awal dan terus memantau kondisi game setiap frame. Jika inisialisasi diletakkan di `Update()`, proses yang seharusnya hanya sekali akan berulang. Sebaliknya, jika deteksi hanya dilakukan di `Start()`, NPC tidak akan responsif terhadap perubahan lingkungan.

### Inti yang Harus Ditekankan

- `Start()` dipanggil **sekali** saat object aktif dan digunakan untuk **inisialisasi**.
- `Update()` dipanggil **setiap frame** dan digunakan untuk logika yang harus terus berjalan.
- `Start()` harus selesai sebelum `Update()` pertama kali berjalan.
- Pada NPC Detector, `Start()` menyiapkan `Renderer` dan state awal, sedangkan `Update()` menjalankan proses deteksi.
- Jangan menaruh setup berulang di `Update()` dan jangan menaruh logika berkelanjutan hanya di `Start()`.

### Transisi ke Slide Berikutnya

Setelah memahami kapan `Start()` dan `Update()` dijalankan, langkah berikutnya adalah memahami bagaimana posisi dan arah disimpan dalam Unity 3D, yaitu melalui `Vector3`.

---

## Slide 052 - Vector3

### Narasi

**Vector3** adalah tipe data dasar dalam Unity untuk merepresentasikan titik atau arah dalam ruang tiga dimensi. Dalam game 3D, hampir semua keputusan perilaku NPC dimulai dari informasi posisi: di mana agent berada, di mana target berada, dan bagaimana arah relatif antara keduanya.

Contoh sederhana:

```csharp
Vector3 position = new Vector3(0f, 1f, 2f);
```

Variabel `position` menyimpan satu titik dengan tiga komponen:

- `x` = 0f,
- `y` = 1f,
- `z` = 2f.

Angka `f` menandakan nilai bertipe `float`, yang umum digunakan untuk koordinat karena presisi dan efisiensi komputasi.

Dalam Unity 3D, sumbu memiliki arti spasial yang konsisten:

- `X` = kiri/kanan,
- `Y` = atas/bawah,
- `Z` = depan/belakang.

Pemahaman ini penting karena posisi bukan hanya angka, tetapi representasi ruang yang bisa dibandingkan, dipindahkan, atau diukur. Misalnya, NPC yang sedang `idle` tetap memiliki posisi, dan ketika pemain bergerak, perubahan posisi relatif dapat memicu perubahan perilaku seperti `alert` atau `chase`.

Sebelum masuk ke perhitungan jarak atau arah, mahasiswa perlu memahami bahwa `Vector3` adalah "bahasa koordinat" yang menghubungkan objek game dengan logika perilaku. Tanpa representasi ini, sistem deteksi, pergerakan, atau pengambilan keputusan tidak memiliki dasar spasial yang jelas.

### Inti yang Harus Ditekankan

- **Vector3** menyimpan posisi atau arah dalam 3D menggunakan komponen `x`, `y`, dan `z`.
- Dalam Unity, `X` adalah kiri/kanan, `Y` adalah atas/bawah, dan `Z` adalah depan/belakang.
- Nilai koordinat biasanya menggunakan `float`, seperti `0f`, `1f`, dan `2f`.
- Posisi berbasis `Vector3` menjadi dasar untuk deteksi, pergerakan, dan perilaku NPC.

### Transisi ke Slide Berikutnya

Setelah memahami apa itu `Vector3`, langkah berikutnya adalah menghitung jarak antara dua posisi, misalnya posisi NPC dan posisi pemain, menggunakan `Vector3.Distance()`.

---

## Slide 053 - Vector3.Distance()

### Narasi

Pada slide ini kita masuk ke fungsi yang sangat praktis dalam Game AI: `Vector3.Distance()`. Fungsi ini menghitung jarak antara dua posisi dalam ruang 3D. Dalam konteks game, posisi biasanya disimpan sebagai `Vector3`, misalnya posisi musuh dan posisi pemain.

Contoh implementasinya adalah:

```csharp
float distance = Vector3.Distance(
    enemy.position,
    player.position
);
```

Secara konsep, `Vector3.Distance()` mengambil dua titik, yaitu `enemy.position` dan `player.position`, lalu menghasilkan satu nilai `float` yang menyatakan seberapa jauh keduanya. Nilai ini penting karena banyak perilaku NPC tidak langsung ditentukan oleh posisi mutlak, tetapi oleh hubungan spasial antar objek.

Dalam praktikum, nilai jarak ini digunakan sebagai dasar **perception** sederhana. Musuh tidak perlu memahami dunia secara kompleks; ia hanya perlu tahu apakah pemain berada di dalam atau di luar radius deteksi.

Aturan perilakunya dapat dirumuskan sebagai berikut:

- jika `distance <= detection radius`, maka musuh masuk ke state `alert`;
- jika `distance > detection radius`, maka musuh kembali ke state `idle`.

Dengan cara ini, `Vector3.Distance()` menjadi jembatan antara data posisi dan keputusan perilaku. Fungsi ini tidak menentukan arah gerak, tidak menghitung path, dan tidak membuat musuh bergerak; ia hanya memberikan informasi jarak yang kemudian dipakai oleh sistem perilaku.

Yang perlu dipahami mahasiswa adalah bahwa **perception** dalam Game AI sering dimulai dari hal yang sangat sederhana: membandingkan jarak. Dari nilai `distance` ini, sistem dapat memicu perubahan state, misalnya dari `idle` menjadi `alert`, atau sebaliknya. Ini menjadi fondasi sebelum perilaku dibuat lebih kompleks, seperti pengejaran, penghindaran, atau pengambilan keputusan berbasis sensor.

### Inti yang Harus Ditekankan

- `Vector3.Distance()` menghitung jarak antara dua `Vector3`.
- Hasilnya berupa nilai `float` yang dapat dibandingkan dengan `detection radius`.
- Jarak menjadi dasar **perception** sederhana untuk menentukan state NPC seperti `idle` atau `alert`.

### Transisi ke Slide Berikutnya

Setelah kita tahu bagaimana jarak digunakan untuk menentukan state AI, langkah berikutnya adalah membuat state tersebut terlihat oleh mahasiswa. Untuk itu, slide berikutnya akan membahas `Renderer` dan `Material` sebagai cara memberi visual feedback pada perubahan perilaku NPC.

---

## Slide 054 - Renderer dan Material

### Narasi

Pada slide ini kita melihat bagaimana visualisasi membantu memahami perilaku NPC. Dalam Unity, setiap objek yang bisa dilihat biasanya memiliki komponen **`Renderer`**. Komponen ini bertanggung jawab menampilkan mesh, sprite, atau bentuk visual objek di scene.

**`Renderer`** sendiri tidak menentukan warna secara langsung. Warna dan tampilan objek diatur oleh **`Material`**. Material adalah data visual yang diterapkan ke renderer, misalnya warna, tekstur, atau parameter tampilan lainnya.

Contoh di bawah ini mengubah warna material objek musuh menjadi merah.

```csharp
enemyRenderer.material.color = Color.red;
```

Baris ini mengambil `material` dari `enemyRenderer`, lalu mengatur properti `color` menjadi `Color.red`. Dalam praktikum, perubahan warna ini digunakan sebagai umpan balik visual untuk melihat perubahan state NPC.

- Warna biru menunjukkan state **`IDLE`**.
- Warna merah menunjukkan state **`ALERT`**.

Dengan cara ini, mahasiswa tidak perlu membuka log atau debugger untuk mengetahui apakah NPC sedang diam atau waspada. Perubahan warna langsung terlihat di scene, sehingga proses pengujian perilaku menjadi lebih cepat dan intuitif.

Sebelum lanjut, hal penting yang harus dipahami adalah: **`Renderer`** menampilkan objek, sedangkan **`Material`** mengatur tampilannya. Perubahan warna bukan bagian dari logika keputusan NPC, melainkan cara visualisasi state yang sedang aktif.

### Inti yang Harus Ditekankan

- **`Renderer`** adalah komponen yang menampilkan visual objek di Unity.
- **`Material`** menentukan tampilan objek, termasuk warna.
- `enemyRenderer.material.color = Color.red;` mengubah tampilan objek secara langsung.
- Warna biru untuk **`IDLE`** dan warna merah untuk **`ALERT`** membantu melihat perubahan state NPC.
- Visual feedback membuat perilaku NPC lebih mudah diamati dan diuji.

### Transisi ke Slide Berikutnya

Setelah kita bisa melihat perubahan state melalui warna, langkah berikutnya adalah membuat state itu sendiri lebih rapi dan aman. Untuk itu, kita akan membahas `enum` sebagai cara mendefinisikan daftar nilai tetap untuk state NPC.

---

## Slide 055 - Enum

### Narasi

Setelah kita melihat bagaimana visual object dapat memberi umpan balik perubahan perilaku, langkah berikutnya adalah membuat **state** AI itu sendiri menjadi lebih rapi dan mudah dikelola. Dalam praktikum, kita akan menggunakan **enum** untuk mendefinisikan daftar nilai tetap yang mewakili kondisi atau perilaku musuh.

`enum` adalah cara untuk membuat **daftar nilai tetap** yang memiliki nama. Dengan kata lain, kita tidak lagi menggunakan string bebas seperti `"idle"` atau `"alert"` yang mudah salah ketik. Sebaliknya, kita membuat nama state yang jelas dan dikenali oleh compiler.

```csharp
public enum EnemyState
{
    Idle,
    Alert
}
```

Pada contoh di atas, `EnemyState` adalah tipe data baru yang hanya boleh berisi nilai yang sudah didefinisikan, yaitu `Idle` dan `Alert`. Artinya, jika kita membuat variabel bertipe `EnemyState`, variabel tersebut tidak bisa diisi sembarangan. Ia hanya boleh mengambil nilai yang ada di dalam daftar tersebut.

Manfaat utama penggunaan `enum` dalam konteks Game AI adalah:

- **State lebih jelas** karena nama state langsung menggambarkan perilaku.
- **Menghindari string typo**, misalnya `Idle` tidak bisa menjadi `idle` atau `Iddle`.
- **Mudah dibaca** saat kita melihat kode perilaku NPC.
- **Cocok untuk FSM sederhana**, karena setiap state dapat diwakili oleh satu nilai yang tetap.

Dalam praktikum, `enum` ini akan digunakan untuk merepresentasikan **state Enemy**. Misalnya, ketika musuh tidak terganggu, state-nya adalah `Idle`. Ketika musuh mendeteksi pemain, state-nya berubah menjadi `Alert`. Perubahan state inilah yang nantinya dapat memengaruhi perilaku NPC, seperti gerak, reaksi, atau tampilan visual.

Sebelum lanjut ke bagian berikutnya, hal penting yang harus dipahami adalah bahwa `enum` bukan sekadar pengganti string. Ia adalah cara untuk membuat **state machine** menjadi lebih aman, konsisten, dan mudah dikembangkan. Jika nanti kita menambahkan state baru seperti `Chase` atau `Attack`, kita cukup menambah nilai baru di dalam `enum`, lalu menggunakannya di logika AI.

### Inti yang Harus Ditekankan

- `enum` digunakan untuk membuat **daftar nilai tetap** yang merepresentasikan state AI.
- `enum` membuat kode lebih aman karena nilai state tidak bisa diisi sembarangan.
- `enum` sangat cocok untuk membangun **Finite State Machine** sederhana pada NPC.
- Dalam praktikum, `EnemyState` digunakan untuk membedakan perilaku musuh, misalnya `Idle` dan `Alert`.

### Transisi ke Slide Berikutnya

Setelah state didefinisikan dengan rapi menggunakan `enum`, langkah berikutnya adalah mengatur parameter AI agar bisa diubah dari Unity Inspector tanpa merusak struktur kode. Untuk itu, kita akan masuk ke pembahasan `SerializeField`.

---

## Slide 056 - SerializeField

### Narasi

Pada slide ini kita melihat cara membuat parameter perilaku NPC dapat diatur langsung dari Unity tanpa harus membuka kode.

```csharp
[SerializeField]
private float detectionRadius = 5f;
```

Variabel `detectionRadius` dideklarasikan sebagai `private`, artinya variabel ini tidak bisa diakses sembarangan dari script lain. Dengan kata lain, struktur kode tetap rapi dan aman.

Namun, atribut `SerializeField` membuat variabel `private` tersebut tetap muncul di `Inspector`. Jadi, nilai `5f` dapat diubah langsung dari editor Unity.

Ini penting dalam pengembangan game cerdas karena banyak parameter perilaku NPC perlu dituning, misalnya jarak deteksi, kecepatan reaksi, atau jangkauan aksi.

Manfaat utama `SerializeField` adalah:

- variabel tetap **private** secara struktur kode,
- nilai tetap bisa diatur dari `Inspector`,
- proses tuning perilaku menjadi lebih cepat,
- desainer atau pengembang bisa menguji variasi parameter tanpa mengubah script.

Sebelum lanjut, mahasiswa perlu memahami bahwa `SerializeField` tidak membuat variabel menjadi `public`. Ia hanya membuka akses khusus untuk editor Unity, bukan untuk script lain.

### Inti yang Harus Ditekankan

- `SerializeField` membuat variabel `private` tetap terlihat di `Inspector`.
- Variabel tetap aman karena tidak menjadi `public`.
- Atribut ini sangat berguna untuk tuning parameter perilaku NPC, seperti `detectionRadius`.
- Nilai default tetap ada, tetapi bisa diubah langsung dari Unity.

### Transisi ke Slide Berikutnya

Setelah variabel bisa ditampilkan di `Inspector`, langkah berikutnya adalah memberi batasan nilai agar parameter yang diatur tetap masuk akal.

---

## Slide 057 - Min Attribute

### Narasi

Setelah variabel private dapat ditampilkan di **Inspector** melalui `SerializeField`, langkah berikutnya adalah memberi batas nilai yang wajar. Pada slide ini kita membahas atribut `[Min(0f)]`. Atribut ini memberi tahu Unity bahwa nilai minimum yang boleh dimasukkan di Inspector adalah nol.

```csharp
[SerializeField]
[Min(0f)]
private float detectionRadius = 5f;
```

Pada contoh ini, `detectionRadius` adalah **radius deteksi** NPC. Secara fisik, radius tidak mungkin bernilai negatif. Jika nilai negatif tetap bisa dimasukkan, parameter tersebut dapat membuat perilaku deteksi menjadi tidak masuk akal, misalnya jarak deteksi menjadi tidak valid atau logika perbandingan jarak menghasilkan hasil yang aneh.

Dengan `[Min(0f)]`, mahasiswa tidak perlu selalu mengecek nilai secara manual. Saat mencoba mengatur parameter di Inspector, Unity langsung membatasi input di bawah nol. Ini membuat proses **tuning** lebih aman dan lebih cepat, terutama ketika banyak parameter perilaku NPC yang perlu diuji.

Poin penting yang perlu dipahami adalah `[Min(0f)]` bekerja pada tampilan **Inspector**. Artinya, ia membantu mencegah nilai tidak valid saat parameter diatur secara visual. Untuk nilai yang diubah lewat kode, tetap perlu ada logika validasi jika diperlukan.

Sebelum lanjut ke praktikum, pastikan mahasiswa memahami bahwa atribut ini bukan sekadar dekorasi. Atribut ini adalah bagian dari desain parameter yang baik: variabel tetap private, tetap bisa diatur, dan tetap memiliki batas yang masuk akal.

### Inti yang Harus Ditekankan

- `[Min(0f)]` membatasi nilai minimum di Inspector menjadi nol.
- Atribut ini cocok digunakan bersama `SerializeField` untuk parameter seperti `detectionRadius`.
- Batasan nilai membantu mencegah parameter perilaku NPC menjadi tidak masuk akal.

### Transisi ke Slide Berikutnya

Dengan memahami cara membatasi parameter di Inspector, kita siap masuk ke praktikum. Di sana, parameter seperti `detectionRadius` akan digunakan langsung pada NPC Detector untuk membangun perilaku deteksi yang lebih rapi dan mudah diuji.

---

## Slide 058 - Praktikum Pertemuan 1

### Narasi

Slide ini membuka bagian praktikum pertemuan pertama. Fokusnya adalah membangun **NPC Detector** sederhana di **Unity 6** untuk memahami bagaimana NPC menerima informasi dari lingkungan, memprosesnya, lalu menghasilkan tindakan.

Inti praktikum ini adalah alur dasar perilaku NPC:

1. **Perception**: `Enemy Detector` membaca informasi dari lingkungan, terutama jarak antara `Enemy` dan `Player`.
2. **Decision**: hasil pembacaan jarak dibandingkan dengan parameter deteksi, misalnya radius deteksi.
3. **Action**: `Enemy` menampilkan respons, baik berupa perubahan perilaku maupun visual debug.

Target yang harus dicapai mahasiswa adalah:

- membuat project Unity,
- membuat scene sederhana,
- membuat `Player`,
- membuat `Enemy`,
- membuat `Player Controller`,
- membuat `Enemy Detector`,
- memahami **perception**,
- memahami **decision**,
- memahami **action**,
- menampilkan debug dengan `Gizmos`.

Dalam konteks game, `Player` adalah sumber input yang bergerak, sedangkan `Enemy` adalah agen yang mengamati posisi `Player`. `Player Controller` bertugas meneruskan input menjadi gerakan, sementara `Enemy Detector` bertugas membaca jarak atau kondisi sekitar. Dengan `Gizmos`, mahasiswa dapat melihat secara visual area deteksi, sehingga parameter yang diatur tidak lagi abstrak.

Sebelum lanjut, mahasiswa perlu memahami bahwa praktikum ini bukan sekadar menempatkan objek di scene. Tujuannya adalah membangun dasar **decision making** untuk NPC: NPC harus tahu kapan ia "melihat" `Player`, bagaimana ia menilai jarak tersebut, dan apa yang ia lakukan setelahnya.

### Inti yang Harus Ditekankan

- Praktikum ini membangun **NPC Detector** sederhana di **Unity 6**.
- Alur utamanya adalah **perception** → **decision** → **action**.
- `Enemy Detector` membaca jarak terhadap `Player` dan menampilkan debug dengan `Gizmos`.
- Parameter deteksi memengaruhi perilaku NPC.

### Transisi ke Slide Berikutnya

Setelah target praktikum ini dipahami, kita akan melihat hasil akhir scene dan komponen yang diharapkan pada slide berikutnya.

---

## Slide 059 - Hasil Akhir Praktikum

### Narasi

Setelah praktikum selesai, hasil yang diharapkan adalah scene Unity yang sederhana namun sudah memperlihatkan perilaku dasar NPC. Scene ini tidak perlu kompleks; yang penting setiap komponen memiliki peran jelas dalam simulasi deteksi.

```text
Main Camera
Directional Light
Ground
Player
Enemy
```

Secara visual, `Main Camera` dan `Directional Light` memastikan scene dapat dilihat dan diterangi. `Ground` menjadi area bermain, sedangkan `Player` dan `Enemy` adalah dua agen utama yang saling memengaruhi.

`Player` dapat digerakkan menggunakan `WASD` atau `Arrow Key`. Pergerakan ini penting karena posisi `Player` menjadi sumber perubahan lingkungan yang diamati oleh `Enemy`. Dalam konteks perilaku NPC, `Player` berperan sebagai stimulus yang memicu respons `Enemy`.

`Enemy` memiliki beberapa elemen penting:

- `detection radius` sebagai batas persepsi,
- state `IDLE` saat `Player` berada di luar radius,
- state `ALERT` saat `Player` masuk radius,
- perubahan warna sebagai umpan balik visual,
- `current distance` sebagai data jarak antara `Enemy` dan `Player`,
- `Gizmos` radius deteksi agar area persepsi terlihat di Scene view.

Alur perilaku yang diharapkan sangat sederhana. Saat `Player` bergerak mendekati `Enemy`, nilai `current distance` berubah. Jika jarak tersebut berada di dalam `detection radius`, `Enemy` berpindah dari `IDLE` ke `ALERT` dan warnanya berubah. Jika `Player` menjauh, `Enemy` kembali ke `IDLE`. Dengan demikian, mahasiswa dapat melihat langsung hubungan antara **perception**, **decision**, dan **action** dalam satu scene kecil.

Sebelum melanjutkan ke urutan langkah, hal yang harus dipahami adalah bahwa hasil akhir ini bukan sekadar scene yang bisa dijalankan. Hasil ini adalah bukti bahwa parameter deteksi, seperti radius, dapat memengaruhi perilaku NPC secara nyata. `Gizmos` dan perubahan warna membantu proses debugging dan tuning, sehingga mahasiswa dapat mengamati kapan NPC seharusnya bereaksi.

### Inti yang Harus Ditekankan

- Scene akhir harus memuat `Main Camera`, `Directional Light`, `Ground`, `Player`, dan `Enemy`.
- `Player` dapat bergerak dengan `WASD` atau `Arrow Key`, dan posisinya memengaruhi perilaku `Enemy`.
- `Enemy` menunjukkan perilaku berbasis deteksi melalui `detection radius`, state `IDLE` dan `ALERT`, perubahan warna, `current distance`, serta `Gizmos`.

### Transisi ke Slide Berikutnya

Selanjutnya, kita akan melihat urutan langkah praktikum secara lebih sistematis, mulai dari pembuatan project hingga pengamatan `Gizmos` dan Console.

---

## Slide 060 - Alur Praktikum

### Narasi

Slide ini memetakan **alur praktikum** dari project kosong sampai perilaku deteksi NPC dapat diamati. Tujuannya bukan menjelaskan setiap klik, tetapi memberi urutan kerja yang benar agar mahasiswa tidak kehilangan konteks saat membuka modul praktikum.

Tahap pertama adalah menyiapkan **ruang kerja Unity**. Kita membuat project, menyimpan `scene`, dan menyusun struktur folder. Langkah ini terlihat sederhana, tetapi penting karena asset, `scene`, dan script akan bertambah seiring praktikum berikutnya.

Setelah ruang kerja siap, kita membangun **lingkungan dan aktor utama**. `Ground` memberi batas visual, `Player` menjadi objek yang bergerak, dan `PlayerController` membuat `Player` dapat dikendalikan. Dengan urutan ini, kita memastikan bahwa objek yang akan dideteksi sudah ada sebelum logika deteksi dibuat.

Selanjutnya, kita menyiapkan **Enemy** sebagai agent sederhana. `Enemy` diberi material, lalu diberi komponen `EnemyDetector`. Komponen inilah yang nanti membaca kondisi sekitar, misalnya jarak terhadap `Player`, dan mengubah perilaku `Enemy` berdasarkan hasil deteksi.

Bagian penting berikutnya adalah **menghubungkan `Player` ke `EnemyDetector`**. Dalam Unity, komponen sering membutuhkan referensi objek lain agar logikanya bisa berjalan. Jika referensi ini tidak diisi, `Enemy` tidak tahu objek mana yang harus dideteksi.

Terakhir, kita melakukan **uji dan observasi**. `detection radius` diuji, `Gizmos` diamati, dan `Console` dibaca untuk memastikan tidak ada error. Proses ini membentuk siklus pengembangan: membuat, menghubungkan, menguji, lalu memperbaiki.

Alur lengkapnya adalah:

1. Membuat project Unity
2. Menyimpan `scene`
3. Membuat struktur folder
4. Membuat `Ground`
5. Membuat `Player`
6. Membuat `PlayerController`
7. Membuat `Enemy`
8. Membuat `Enemy` material
9. Membuat `EnemyDetector`
10. Menghubungkan `Player` ke `EnemyDetector`
11. Menguji `detection radius`
12. Mengamati `Gizmos` dan `Console`

Detail langkah teknis dijelaskan pada modul praktikum terpisah. Pada slide ini, yang perlu dipahami adalah **urutan kerja** dan **tujuan setiap kelompok langkah**.

### Inti yang Harus Ditekankan

- **Alur praktikum** adalah peta kerja: setup project, bangun `scene`, buat komponen, hubungkan referensi, lalu uji perilaku.
- Urutan penting karena `EnemyDetector` membutuhkan `Player` sebagai target deteksi.
- `Gizmos` dan `Console` berfungsi sebagai umpan balik visual dan log untuk memastikan `detection radius` bekerja.
- Slide ini menekankan proses, bukan detail teknis; detail teknis ada pada modul praktikum terpisah.

### Transisi ke Slide Berikutnya

Setelah alur kerja dipahami, kita lanjut ke project Unity yang digunakan, termasuk nama project, `scene`, dan struktur folder yang disarankan.

---

## Slide 061 - Project Unity yang Digunakan

### Narasi

Pada slide ini, kita menetapkan **project Unity** yang akan digunakan untuk praktikum pertama. Nama project yang disarankan adalah:

```text
GameCerdas_Praktikum01_NPCDetector
```

Nama ini penting karena langsung menunjukkan konteks materi: praktikum pertama pada mata kuliah Game Cerdas, dengan fokus pada **NPC Detector**. Dengan nama yang konsisten, mahasiswa lebih mudah mengenali project saat membuka kembali, menyimpan, atau membagi file dengan dosen.

Scene yang digunakan adalah:

```text
NPCDetector
```

Scene ini menjadi ruang kerja utama untuk menempatkan objek-objek yang akan dibahas, seperti player, enemy, material, dan script deteksi. Menetapkan nama scene sejak awal membantu menjaga alur kerja tetap rapi, terutama ketika nanti ada banyak scene atau variasi percobaan.

Struktur folder yang disarankan adalah:

```text
Assets
├── Materials
├── Scenes
└── Scripts
```

Struktur ini bukan sekadar formalitas. Dalam pengembangan game, pemisahan antara **Materials**, **Scenes**, dan **Scripts** membuat project lebih mudah dijelajahi. Folder `Materials` dapat digunakan untuk material visual enemy atau objek lain. Folder `Scenes` menyimpan scene `NPCDetector`. Folder `Scripts` akan menampung script seperti `PlayerController` dan `EnemyDetector`.

Dengan struktur yang rapi, mahasiswa dapat lebih cepat menemukan file yang sedang diedit, mengurangi risiko salah menyimpan, dan memudahkan pengembangan project berikutnya. Sebelum masuk ke pembuatan script, pastikan project sudah dibuat, scene sudah disimpan, dan folder sudah tersedia.

### Inti yang Harus Ditekankan

- Gunakan nama project `GameCerdas_Praktikum01_NPCDetector` agar konsisten dengan praktikum.
- Simpan scene utama dengan nama `NPCDetector`.
- Buat struktur folder `Materials`, `Scenes`, dan `Scripts` di dalam `Assets`.
- Struktur folder yang rapi membantu pengembangan, debugging, dan kolaborasi.

### Transisi ke Slide Berikutnya

Setelah project dan struktur folder siap, langkah berikutnya adalah membuat `PlayerController` agar player dapat bergerak dan menjadi objek pengujian untuk perilaku NPC.

---

## Slide 062 - Player Controller

### Narasi

Pada slide ini kita membahas **Player Controller**, yaitu komponen yang memungkinkan player bergerak di dalam scene. Peran ini penting karena player bukan hanya objek visual, tetapi juga sumber interaksi yang membuat mahasiswa dapat mengamati perilaku NPC secara langsung.

Input yang didukung adalah `W`, `A`, `S`, `D`, dan `Arrow Key`. Kedua skema input ini biasanya dipetakan ke arah yang sama, yaitu maju, mundur, kiri, dan kanan. Mahasiswa perlu memahami bahwa controller tidak langsung memindahkan player, tetapi membaca keadaan tombol lalu mengubahnya menjadi data gerakan.

Konsep penting pertama adalah **membaca keyboard**. Proses ini memeriksa apakah tombol tertentu sedang ditekan, lalu menghasilkan informasi arah yang diminta player. Informasi inilah yang menjadi dasar pembentukan gerakan.

Konsep penting kedua adalah **membuat `movement vector`**. Jika player menekan satu tombol, vector mengarah ke satu sisi. Jika dua tombol ditekan bersamaan, vector menjadi kombinasi dua arah. Vector ini menjadi representasi matematis dari niat gerakan player.

Konsep penting ketiga adalah **normalisasi gerakan diagonal**. Tanpa normalisasi, panjang vector diagonal bisa lebih besar daripada vector lurus, sehingga player terasa bergerak lebih cepat. Dengan normalisasi, panjang vector dijaga tetap konsisten, sehingga kecepatan player sama baik saat bergerak lurus maupun diagonal.

Konsep penting keempat adalah penggunaan `Time.deltaTime`. Nilai ini membuat gerakan tidak bergantung pada frame rate. Jika kecepatan player dinyatakan dalam unit per detik, maka pergeseran posisi harus dikalikan dengan `Time.deltaTime` agar hasil tetap stabil pada berbagai frame rate.

**Player Controller** diperlukan agar mahasiswa dapat menguji perilaku NPC secara interaktif. Dengan controller yang stabil, mahasiswa dapat menggerakkan player mendekati NPC, memicu respons, dan mengamati perubahan perilaku secara lebih konsisten.

### Inti yang Harus Ditekankan

- **Player Controller** mengubah input keyboard menjadi gerakan player.
- Input `W`, `A`, `S`, `D`, dan `Arrow Key` perlu dipetakan ke arah yang sama.
- `movement vector` merepresentasikan arah gerakan player.
- Normalisasi menjaga kecepatan diagonal tetap sama dengan gerakan lurus.
- `Time.deltaTime` membuat gerakan konsisten antar frame rate.
- Controller diperlukan untuk menguji perilaku NPC secara interaktif.

### Transisi ke Slide Berikutnya

Setelah memahami peran **Player Controller**, slide berikutnya akan membahas detail pemetaan tombol `W`, `A`, `S`, `D`, dan `Arrow Key`, termasuk bagaimana gerakan diagonal terbentuk dan mengapa normalisasi penting.

---

## Slide 063 - Gerakan Player

### Narasi

Slide ini membahas bagaimana gerakan player dikonversi dari input keyboard menjadi arah gerak yang konsisten. Pada dasarnya, player dapat dikendalikan melalui dua skema input: **WASD** dan **Arrow Key**. Kedua skema ini memiliki fungsi yang sama, yaitu memberi arah **maju**, **mundur**, **kiri**, dan **kanan**.

| Aksi | WASD | Arrow Key |
|---|---|---|
| Maju | `W` | `↑` |
| Mundur | `S` | `↓` |
| Kiri | `A` | `←` |
| Kanan | `D` | `→` |

Dari tabel ini, mahasiswa perlu memahami bahwa setiap tombol bukan hanya memicu gerakan, tetapi menghasilkan **komponen arah** pada sumbu horizontal dan vertikal. Misalnya, tombol `W` menghasilkan arah vertikal positif, tombol `S` menghasilkan arah vertikal negatif, tombol `A` menghasilkan arah horizontal negatif, dan tombol `D` menghasilkan arah horizontal positif.

Gerakan lurus terjadi ketika hanya satu tombol ditekan. Namun, dalam game, player sering bergerak diagonal dengan menekan dua tombol sekaligus, seperti:

- `W` + `D`
- `W` + `A`
- `S` + `D`
- `S` + `A`

Tanpa penanganan khusus, gerakan diagonal dapat menjadi lebih cepat daripada gerakan lurus. Hal ini terjadi karena vektor diagonal memiliki panjang lebih besar dari vektor lurus. Sebagai contoh, gerakan lurus ke kanan dapat direpresentasikan sebagai vektor `(1, 0)`, sedangkan gerakan diagonal kanan-atas dapat direpresentasikan sebagai `(1, 1)`. Panjang vektor `(1, 1)` lebih besar dari panjang vektor `(1, 0)`, sehingga jika langsung digunakan, player akan bergerak lebih cepat saat diagonal.

Untuk mengatasi hal tersebut, gerakan diagonal perlu **dinormalisasi**. Normalisasi berarti mengubah panjang vektor menjadi satu tanpa mengubah arahnya. Dengan cara ini, player bergerak dengan kecepatan yang sama baik saat bergerak lurus maupun diagonal.

Secara intuitif, prosesnya dapat dipahami sebagai berikut:

1. Baca input dari `W`, `A`, `S`, `D`, atau Arrow Key.
2. Bentuk vektor gerakan berdasarkan kombinasi tombol yang aktif.
3. Jika panjang vektor lebih besar dari satu, lakukan normalisasi.
4. Gunakan vektor hasil normalisasi untuk menggerakkan player.

Pendekatan ini penting karena gerakan player menjadi dasar pengujian perilaku interaktif dalam scene. Ketika player dapat bergerak secara konsisten, mahasiswa dapat mengamati bagaimana objek lain merespons posisi player, misalnya dalam sistem deteksi, penghindaran, atau kejaran. Namun, pada slide ini fokusnya masih pada **kontrol gerakan player** dan **konsistensi kecepatan gerak**, bukan pada logika interaksi yang lebih lanjut.

### Inti yang Harus Ditekankan

- **WASD** dan **Arrow Key** adalah dua skema input yang menghasilkan arah gerak yang sama.
- Setiap tombol menghasilkan komponen vektor pada sumbu horizontal dan vertikal.
- Gerakan diagonal terbentuk dari kombinasi dua tombol, seperti `W` + `D` atau `S` + `A`.
- Vektor diagonal harus **dinormalisasi** agar kecepatan player tetap sama dengan gerakan lurus.
- Gerakan player yang konsisten menjadi dasar untuk menguji interaksi dengan objek lain di scene.

### Transisi ke Slide Berikutnya

Setelah player dapat bergerak dengan kontrol yang konsisten, langkah berikutnya adalah membuat objek lain mampu merespons keberadaan player. Pada slide berikutnya, kita akan membahas **Enemy Detector**, yaitu komponen sederhana yang mulai mengamati jarak antara enemy dan player.

---

## Slide 064 - Enemy Detector

### Narasi

Slide ini memperkenalkan **Enemy Detector**, yaitu script sederhana yang membuat objek musuh mampu "menyadari" keberadaan player. Intuisinya: sebelum musuh bergerak, menyerang, atau berpindah state, ia harus tahu seberapa dekat player berada. Jarak menjadi sinyal paling dasar dalam perilaku NPC.

Tugas utama detector adalah membaca posisi player, menghitung jarak, lalu membandingkannya dengan **Detection Radius**. Jika jarak lebih kecil atau sama dengan radius, musuh dianggap berada dalam kondisi waspada; jika lebih besar, musuh kembali ke kondisi normal.

Komponen penting yang perlu dipahami:

- `player`: referensi objek player yang akan dideteksi.
- `detectionRadius`: batas jarak maksimum deteksi.
- `currentDistance`: nilai jarak hasil perhitungan.
- `currentState`: kondisi logis musuh, misalnya idle atau alert.
- `idleColor`: warna visual saat musuh tidak waspada.
- `alertColor`: warna visual saat musuh mendeteksi player.

Perubahan warna dan **Gizmos** bukan sekadar dekorasi. Keduanya membantu mahasiswa melihat bahwa logika deteksi sedang berjalan. Warna memberi umpan balik visual di scene, sedangkan gizmos dapat menampilkan radius deteksi sehingga hubungan antara jarak, batas, dan state menjadi mudah diamati.

Secara konsep, Enemy Detector adalah bentuk awal **perception** pada agent game. Agent menerima informasi dari lingkungan, dalam hal ini jarak ke player, lalu mengubah state internal. Pola ini menjadi dasar perilaku NPC yang lebih kompleks, seperti mengejar, menghindar, atau berpindah mode.

Sebelum lanjut, mahasiswa perlu memahami tiga hal: referensi player harus valid, jarak dihitung dari posisi agent ke posisi player, dan hasil perbandingan jarak menentukan state serta tampilan musuh.

### Inti yang Harus Ditekankan

- **Enemy Detector** adalah script sederhana yang mengubah jarak ke player menjadi state dan tampilan visual.
- `detectionRadius` adalah ambang batas yang menentukan apakah musuh berada dalam kondisi normal atau waspada.
- `currentDistance`, `currentState`, dan warna visual membantu memahami alur deteksi secara nyata.
- Gizmos dan perubahan warna berfungsi sebagai alat observasi untuk memastikan logika berjalan sesuai harapan.

### Transisi ke Slide Berikutnya

Setelah memahami komponen dan tugas Enemy Detector, kita akan melihat bagaimana perhitungan jarak tersebut ditulis sebagai bentuk sederhana perception pada praktikum.

---

## Slide 065 - Perception pada Praktikum

### Narasi

Pada slide ini, kita fokus pada bagian **perception** dari script Enemy Detector. Setelah komponen utama seperti `player`, `detectionRadius`, dan `currentDistance` diperkenalkan, tahap berikutnya adalah mengisi nilai `currentDistance` dengan informasi yang relevan.

Secara sederhana, perception adalah tahap di mana agent menerima informasi dari lingkungan. Dalam praktikum ini, informasi yang diterima masih sangat sederhana, yaitu jarak antara enemy dan player.

Kode yang ditampilkan adalah:

```csharp
currentDistance = Vector3.Distance(
    transform.position,
    player.position
);
```

Baris ini menghitung jarak antara posisi enemy dan posisi player. `transform.position` merepresentasikan posisi objek enemy di scene, sedangkan `player.position` adalah posisi player. Hasil perhitungan disimpan ke variabel `currentDistance`, sehingga nilai ini bisa digunakan oleh bagian berikutnya dari perilaku NPC.

Intuisi praktisnya, baris kode ini berperan seperti **sensor jarak** pada NPC. Agent belum memutuskan apa pun; ia hanya “mengukur” seberapa dekat player berada. Dalam arsitektur perilaku NPC, tahap ini penting karena keputusan perilaku biasanya bergantung pada data yang sudah di-perceive terlebih dahulu.

Dengan kata lain, output dari perception adalah informasi:

```text
Jarak Enemy ke Player
```

Informasi ini menjadi bahan untuk tahap decision. Pada slide berikutnya, nilai `currentDistance` akan dibandingkan dengan `detectionRadius` untuk menentukan apakah enemy masuk ke state `Alert` atau tetap `Idle`.

Perlu dipahami bahwa sensor sederhana ini masih terbatas. Pada pertemuan berikutnya, perception dapat dikembangkan menjadi bentuk yang lebih realistis, misalnya:

- **field of view**,
- **raycast**,
- **line of sight**,
- **hearing**,
- **memory**.

Namun untuk saat ini, mahasiswa cukup memahami bahwa `Vector3.Distance` adalah cara paling dasar untuk memberi agent kemampuan “merasakan” keberadaan player berdasarkan jarak.

### Inti yang Harus Ditekankan

- **Perception** adalah tahap agent menerima informasi dari lingkungan, bukan tahap mengambil keputusan.
- `Vector3.Distance(transform.position, player.position)` menghitung jarak antara enemy dan player.
- Hasil disimpan ke `currentDistance` dan akan digunakan pada tahap decision.
- Konsep ini adalah dasar dari sensor sederhana pada NPC behavior.

### Transisi ke Slide Berikutnya

Setelah agent memiliki informasi jarak, langkah berikutnya adalah menggunakan informasi tersebut untuk membuat keputusan. Pada slide berikutnya, kita akan membahas bagaimana `currentDistance` dibandingkan dengan `detectionRadius` untuk mengubah state enemy menjadi `Alert` atau `Idle`.

---

## Slide 066 - Decision pada Praktikum

### Narasi

Pada slide ini kita masuk ke tahap **decision** dalam praktikum sederhana. Setelah agent memperoleh informasi dari **perception**, yaitu nilai `currentDistance` yang menunjukkan jarak antara enemy dan player, langkah berikutnya adalah menentukan keputusan berdasarkan informasi tersebut.

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

Secara konsep, potongan kode ini adalah **decision rule** sederhana. Nilai `currentDistance` dibandingkan dengan `detectionRadius`. Jika jaraknya lebih kecil atau sama dengan radius deteksi, agent dianggap berada dalam kondisi waspada, sehingga state diubah menjadi `EnemyState.Alert`. Jika jaraknya lebih besar, agent kembali ke kondisi normal, yaitu `EnemyState.Idle`.

Aturan ini dapat diringkas sebagai berikut:

- `distance <= radius` → `ALERT`
- `distance > radius` → `IDLE`

Dalam konteks **Finite State Machine**, decision adalah bagian yang menentukan state mana yang aktif berdasarkan kondisi lingkungan. State `Alert` dan `Idle` bukan sekadar label, tetapi representasi perilaku agent. State `Alert` menandakan bahwa agent telah mendeteksi player dalam jangkauan, sedangkan `Idle` menandakan bahwa player berada di luar jangkauan atau tidak perlu direspons secara aktif.

Yang perlu dipahami mahasiswa adalah bahwa decision tidak selalu harus kompleks. Pada tahap awal, satu aturan `if-else` sudah cukup untuk menunjukkan alur dasar **perception → decision → action**. Keputusan ini menjadi jembatan antara informasi yang diterima agent dan tindakan yang akan dilakukan.

Sebelum lanjut, pastikan mahasiswa memahami tiga hal:

1. `currentDistance` adalah hasil dari tahap perception.
2. `detectionRadius` adalah ambang batas yang menentukan kapan agent berubah perilaku.
3. `SetState` adalah mekanisme untuk mengubah state agent, yang nantinya akan memengaruhi action.

### Inti yang Harus Ditekankan

- **Decision** adalah proses memilih state berdasarkan hasil **perception**.
- Aturan `if (currentDistance <= detectionRadius)` menunjukkan bahwa agent masuk ke `EnemyState.Alert` ketika player berada dalam jangkauan.
- Jika jarak lebih besar dari `detectionRadius`, agent kembali ke `EnemyState.Idle`.
- Decision ini menjadi dasar perilaku NPC sederhana dan dapat dikembangkan menjadi aturan yang lebih kompleks.

### Transisi ke Slide Berikutnya

Setelah state ditentukan, langkah berikutnya adalah menampilkan atau mengeksekusi perilaku yang sesuai. Pada slide berikutnya, kita akan melihat bagaimana state `Alert` dan `Idle` divisualisasikan melalui **action**, misalnya dengan mengubah warna renderer enemy.

---

## Slide 067 - Action pada Praktikum

### Narasi

Pada slide ini kita masuk ke bagian **action** dalam praktikum. Jika pada bagian sebelumnya `decision` menentukan state, maka action adalah perilaku yang dijalankan setelah state terpilih.

```csharp
enemyRenderer.material.color = alertColor;
```

atau:

```csharp
enemyRenderer.material.color = idleColor;
```

Kode ini mengubah warna material pada `enemyRenderer`. `alertColor` biasanya merah, sedangkan `idleColor` biru. Tujuannya agar mahasiswa dapat melihat state internal secara visual.

Makna praktisnya:

- state `ALERT` divisualisasikan dengan warna merah,
- state `IDLE` divisualisasikan dengan warna biru.

Dengan cara ini, perubahan state tidak hanya terjadi di data internal, tetapi juga terlihat di scene. Mahasiswa dapat memverifikasi apakah keputusan AI sesuai dengan jarak yang terdeteksi.

Pada AI yang lebih kompleks, action tidak hanya mengubah warna. Action dapat berupa:

- `move`,
- `chase`,
- `attack`,
- `flee`,
- `search`.

Intinya, action adalah eksekusi perilaku dari state atau keputusan. Pada praktikum ini, action bersifat sederhana sebagai feedback visual, tetapi konsepnya sama dengan perilaku NPC yang lebih nyata.

### Inti yang Harus Ditekankan

- **Action** adalah perilaku yang dijalankan setelah **decision** atau state ditentukan.
- Pada praktikum, action berupa perubahan warna material: merah untuk `ALERT`, biru untuk `IDLE`.
- Visualisasi membantu mahasiswa memeriksa apakah state internal AI sesuai dengan kondisi lingkungan.
- Dalam AI game yang lebih kompleks, action dapat berupa `move`, `chase`, `attack`, `flee`, atau `search`.

### Transisi ke Slide Berikutnya

Setelah action terlihat secara visual, langkah berikutnya adalah memastikan state dan jarak benar-benar sesuai. Untuk itu, kita akan membahas **debug** pada praktikum.

---

## Slide 068 - Debug pada Praktikum

### Narasi

Pada slide ini kita masuk ke tahap penting setelah membuat perilaku dasar: **debug**. Debug bukan sekadar melihat apakah musuh berubah warna, tetapi memeriksa **data internal** yang menentukan keputusan perilaku. Dalam praktikum ini, ada tiga titik utama yang perlu diperhatikan: **Inspector**, **Console**, dan **Gizmos**.

```text
Inspector
├── Current State
└── Current Distance

Console
└── Enemy State → Alert / Idle

Gizmos
└── Detection Radius
```

Di **Inspector**, mahasiswa dapat melihat nilai `Current State` dan `Current Distance`. `Current State` menunjukkan kondisi perilaku saat ini, misalnya `IDLE` atau `ALERT`. `Current Distance` menunjukkan jarak antara musuh dan objek yang dipantau. Nilai ini penting karena biasanya perubahan state bergantung pada perbandingan jarak dengan radius deteksi.

Di **Console**, perubahan state dapat dilacak secara kronologis. Jika muncul `Enemy State → Alert`, artinya perilaku berpindah ke kondisi waspada. Jika muncul `Enemy State → Idle`, artinya perilaku kembali ke kondisi normal. Log ini membantu memastikan bahwa transisi state terjadi pada waktu yang benar, bukan hanya karena tampilan visual berubah.

Di **Gizmos**, radius deteksi divisualisasikan di scene. Visual ini membantu mahasiswa memahami batas area di mana musuh dapat mendeteksi objek. Jika posisi musuh berada di dalam radius, `Current Distance` seharusnya lebih kecil dari `Detection Radius`, dan state dapat berpindah ke `ALERT`. Jika berada di luar radius, state dapat kembali ke `IDLE`.

Yang perlu ditekankan adalah kebiasaan **membaca data internal perilaku**, bukan hanya mengamati warna atau gerakan. Warna merah atau biru hanya merupakan representasi visual dari state. Keputusan sebenarnya ditentukan oleh nilai `Current Distance`, `Detection Radius`, dan aturan transisi state. Dengan debug yang baik, mahasiswa dapat menemukan masalah seperti state tidak berubah, jarak tidak diperbarui, atau radius deteksi tidak sesuai.

Sebelum lanjut ke eksperimen, mahasiswa harus mampu menjawab tiga hal: apa state saat ini, berapa jarak saat ini, dan apakah radius deteksi sesuai dengan perilaku yang diharapkan.

### Inti yang Harus Ditekankan

- **Debug** digunakan untuk memeriksa `Current State`, `Current Distance`, dan `Detection Radius`.
- **Inspector** menampilkan nilai internal, **Console** menampilkan riwayat perubahan state, dan **Gizmos** menampilkan radius deteksi di scene.
- Perubahan warna hanya representasi visual; keputusan perilaku ditentukan oleh data internal dan aturan transisi state.
- Mahasiswa harus membiasakan diri membaca nilai `Current Distance` dan membandingkannya dengan `Detection Radius` untuk memahami perilaku musuh.

### Transisi ke Slide Berikutnya

Setelah memahami cara membaca debug, langkah berikutnya adalah melakukan eksperimen dengan mengubah parameter perilaku dan mengamati dampaknya terhadap state, jarak, dan radius deteksi.

---

## Slide 069 - Eksperimen Praktikum

### Narasi

Pada slide ini, mahasiswa melakukan **eksperimen** untuk melihat bagaimana parameter sederhana memengaruhi perilaku NPC. Intuisi utamanya adalah bahwa keputusan NPC tidak muncul dari visual saja, tetapi dari nilai yang dapat diamati: jarak, kecepatan, dan ambang batas deteksi. Dengan mengubah satu parameter pada satu waktu, mahasiswa dapat melihat sebab-akibat dalam sistem perilaku.

Eksperimen sebaiknya dilakukan sebagai **loop observasi**:

1. Ubah `Detection Radius` untuk melihat seberapa jauh NPC mulai merespons.
2. Ubah `Move Speed` untuk melihat seberapa cepat NPC mengejar atau menutup jarak.
3. Ubah warna `IDLE` dan `ALERT` agar perubahan `state` lebih mudah dibaca.
4. Amati `Current Distance` sebagai nilai jarak yang menjadi dasar keputusan.
5. Amati perubahan `state` di `Console` untuk memastikan logika berjalan sesuai kondisi.
6. Amati `Gizmos` radius deteksi untuk melihat area sensor NPC secara visual.

`Detection Radius` berperan seperti **sensor** NPC. Jika radius lebih besar, NPC lebih cepat menganggap objek yang diamati berada dalam jangkauan. Jika radius lebih kecil, NPC lebih lambat beralih ke `state` waspada. Nilai `Current Distance` menjadi input penting karena menunjukkan jarak aktual antara NPC dan objek yang diamati.

`Move Speed` memengaruhi dinamika jarak. Kecepatan yang tinggi membuat jarak berubah lebih cepat, sehingga `state` dapat berpindah lebih cepat. Kecepatan yang rendah membuat perilaku NPC terasa lebih lambat dan lebih mudah diamati. Parameter ini penting untuk memahami bahwa perilaku NPC bukan hanya soal "kapan berubah", tetapi juga "seberapa cepat berubah".

Warna `IDLE` dan `ALERT` bukan logika utama, tetapi berfungsi sebagai **visual feedback**. Warna membantu mahasiswa membaca `state` secara cepat, terutama ketika NPC bergerak dan jarak berubah terus-menerus. Dengan warna yang jelas, mahasiswa dapat membedakan apakah NPC sedang diam, waspada, atau mengejar.

Tujuan eksperimen ini adalah memahami hubungan antara parameter dan behavior. Mahasiswa tidak perlu langsung menambah `state` baru, tetapi harus mampu menjelaskan mengapa perubahan `Detection Radius` atau `Move Speed` menghasilkan perilaku yang berbeda. Pemahaman ini menjadi dasar untuk membangun sistem keputusan yang lebih kompleks.

### Inti yang Harus Ditekankan

- `Detection Radius` menentukan seberapa cepat NPC mulai merespons objek yang diamati.
- `Move Speed` memengaruhi kecepatan perubahan jarak dan perpindahan `state`.
- `Current Distance`, `Console`, dan `Gizmos` harus dibaca bersama untuk memahami perilaku NPC.
- Warna membantu observasi, tetapi keputusan utama tetap berasal dari parameter dan kondisi jarak.

### Transisi ke Slide Berikutnya

Setelah hubungan parameter dasar dengan `state` NPC dipahami, slide berikutnya akan memperluas model keputusan dengan menambahkan `state` baru, sehingga mahasiswa dapat melihat bagaimana sistem perilaku berkembang dari dua `state` menjadi lebih kompleks.

---

## Slide 070 - Tantangan Tambahan

### Narasi

Pada slide ini, mahasiswa diminta memperluas eksperimen sebelumnya dengan menambahkan satu state baru, yaitu `SUSPICIOUS`. Tujuannya bukan hanya menambah label, tetapi melatih cara mendefinisikan perilaku NPC berdasarkan jarak. Dengan adanya state ini, NPC memiliki tingkat respons yang lebih halus: tidak langsung dari keadaan normal ke keadaan waspada penuh.

State yang digunakan menjadi tiga:

- `IDLE`: NPC berada dalam kondisi normal karena player masih jauh.
- `SUSPICIOUS`: NPC mulai memperhatikan karena player sudah masuk jarak menengah.
- `ALERT`: NPC berada dalam kondisi waspada penuh karena player sudah sangat dekat.

Aturan keputusan yang diberikan adalah sebagai berikut:

```text
Distance > 8
    → IDLE

Distance <= 8
    → SUSPICIOUS

Distance <= 4
    → ALERT
```

Perhatikan bahwa aturan ini memiliki tumpang tindih. Nilai `Distance` yang sama dengan 3, misalnya, juga memenuhi kondisi `Distance <= 8`. Karena itu, urutan evaluasi sangat penting. Dalam implementasi, kondisi `ALERT` harus diperiksa terlebih dahulu, kemudian `SUSPICIOUS`, dan terakhir `IDLE`.

Urutan yang aman dapat ditulis sebagai:

1. Jika `Distance <= 4`, state menjadi `ALERT`.
2. Jika `Distance <= 8`, state menjadi `SUSPICIOUS`.
3. Jika `Distance > 8`, state menjadi `IDLE`.

Warna state juga menjadi bagian dari tantangan. `IDLE` menggunakan warna biru, `SUSPICIOUS` menggunakan warna kuning, dan `ALERT` menggunakan warna merah. Warna ini berfungsi sebagai umpan balik visual, sehingga mahasiswa dapat mengamati perubahan state secara cepat.

Tantangan ini memperkenalkan `FSM` sederhana. State adalah kondisi yang bisa dimiliki NPC, sedangkan transisi adalah aturan yang menentukan kapan NPC berpindah dari satu state ke state lain. Sebelum lanjut, mahasiswa perlu memahami bahwa perilaku NPC tidak ditentukan oleh satu aksi tunggal, tetapi oleh pilihan kondisi berdasarkan nilai `Distance`.

### Inti yang Harus Ditekankan

- `SUSPICIOUS` menambah tingkat respons antara `IDLE` dan `ALERT`, sehingga perilaku NPC menjadi lebih bertahap.
- Aturan jarak harus dievaluasi dengan prioritas: `ALERT` dulu, lalu `SUSPICIOUS`, lalu `IDLE`.
- Warna state membantu observasi perilaku dan menjadi dasar visual dari `FSM` sederhana.

### Transisi ke Slide Berikutnya

Dengan tiga state ini, mahasiswa sudah memiliki fondasi deteksi jarak dan transisi state yang sederhana. Selanjutnya, kita akan menghubungkan praktikum ini dengan pertemuan berikutnya, di mana perilaku NPC akan dikembangkan menjadi guard dengan state yang lebih lengkap.

---

## Slide 071 - Hubungan Praktikum 1 dengan Pertemuan 2

### Narasi

Pada slide ini, kita menghubungkan apa yang sudah dilakukan di **Praktikum 1** dengan arah pengembangan pada **Pertemuan 2**.

Di praktikum, perilaku NPC masih sederhana:

```text
NPC mendeteksi player berdasarkan jarak
dan berubah state IDLE/ALERT.
```

Artinya, NPC memiliki **perception** dasar: membaca jarak terhadap player. Jika jarak melewati ambang tertentu, state berubah dari `IDLE` ke `ALERT`. Ini sudah cukup untuk menunjukkan pola dasar: **input sensor → perubahan state → perubahan perilaku**.

Pada Pertemuan 2, pola ini dikembangkan menjadi perilaku **NPC Guard** yang lebih utuh:

```text
NPC Guard:
Patrol
Detect
Chase
Remember Last Seen Position
Search
Return Patrol
```

Perkembangan ini penting karena NPC tidak lagi hanya bereaksi terhadap jarak saat ini, tetapi juga memiliki **memori** dan **alur keputusan**.

- `Patrol` adalah perilaku default ketika tidak ada ancaman.
- `Detect` menandai bahwa player terlihat atau masuk area deteksi.
- `Chase` adalah respons aktif untuk mengejar player.
- `Remember Last Seen Position` menyimpan lokasi terakhir player terlihat.
- `Search` dilakukan ketika player hilang dari pandangan.
- `Return Patrol` mengembalikan NPC ke perilaku awal setelah pencarian selesai.

Dengan demikian, Praktikum 1 bukan sekadar latihan state sederhana. Ia menjadi **fondasi perception** dan **state machine** yang akan diperluas menjadi perilaku penjagaan yang lebih realistis.

Sebelum lanjut, mahasiswa perlu memahami bahwa setiap state mewakili **keputusan perilaku**, bukan hanya label visual. Perubahan dari `IDLE` ke `ALERT` di praktikum adalah langkah pertama menuju sistem yang bisa **melihat, mengingat, memutuskan, dan bergerak**.

### Inti yang Harus Ditekankan

- Praktikum 1 memperkenalkan **perception sederhana** berbasis jarak.
- State `IDLE` dan `ALERT` menunjukkan perubahan perilaku akibat input lingkungan.
- Pertemuan 2 mengembangkan perilaku menjadi **NPC Guard** dengan alur `Patrol`, `Detect`, `Chase`, `Remember Last Seen Position`, `Search`, dan `Return Patrol`.
- Tambahan penting pada Pertemuan 2 adalah **memori lokasi terakhir** dan **alur pencarian**, bukan hanya deteksi jarak.
- Pola dasarnya tetap: **sensor → state → perilaku**.

### Transisi ke Slide Berikutnya

Selanjutnya, kita akan melihat bagaimana praktikum ini tidak hanya berhubungan dengan Pertemuan 2, tetapi juga menjadi dasar seluruh alur materi semester, dari **perception** hingga **perilaku taktis**.

---

## Slide 072 - Hubungan Praktikum 1 dengan Materi Semester

### Narasi

Pada slide ini, kita menempatkan **Praktikum 1** sebagai titik awal dari keseluruhan alur **Game AI** yang akan kita pelajari selama semester. Praktikum yang tampak sederhana, yaitu NPC mendeteksi player dan mengubah state, sebenarnya sudah mengandung pola dasar dari perilaku agent cerdas.

Alur tersebut dapat dilihat sebagai pipeline berikut:

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

Urutan ini penting karena menunjukkan bagaimana informasi dari lingkungan berubah menjadi perilaku yang terlihat di game.

1. **Perception** adalah tahap agent menerima informasi dari lingkungan, misalnya jarak player terhadap NPC.
2. **Memory** menyimpan informasi penting agar keputusan tidak hanya reaktif pada saat ini.
3. **Decision** memilih perilaku atau state berikutnya berdasarkan hasil persepsi dan memori.
4. **Movement** mengeksekusi gerak lokal, misalnya mendekati, berhenti, atau berputar.
5. **Navigation** membantu agent mencapai target dalam lingkungan, misalnya menuju posisi tertentu.
6. **Tactical AI** berada pada lapisan yang lebih tinggi, misalnya koordinasi antar agent atau strategi tim.

Dengan kata lain, Praktikum 1 sudah menyentuh inti dari agent cerdas: membaca keadaan, menyimpan konteks, memilih tindakan, lalu bergerak.

Pada akhir semester, konsep sederhana ini dapat berkembang menjadi sistem yang lebih kompleks, seperti:

- **Enemy Squad**
- **Adaptive AI**
- **Procedural Level**
- **ML Agent**

Namun, meskipun skalanya membesar, struktur dasarnya tetap sama:

```text
Sense → Decide → Act
```

Hal yang harus dipahami mahasiswa sebelum lanjut adalah bahwa setiap fitur Game AI yang lebih rumit biasanya dibangun dari komponen kecil yang sudah ada di praktikum. Jika pola dasar ini belum jelas, pengembangan ke squad, adaptasi, atau learning agent akan terasa terpisah dan sulit di-debug.

### Inti yang Harus Ditekankan

- Praktikum 1 adalah fondasi pipeline Game AI: **Perception**, **Memory**, **Decision**, **Movement**, **Navigation**, dan **Tactical AI**.
- Pola inti perilaku agent tetap `Sense → Decide → Act`.
- Konsep akhir semester seperti **Enemy Squad**, **Adaptive AI**, **Procedural Level**, dan **ML Agent** adalah pengembangan dari pola dasar, bukan topik yang terpisah.

### Transisi ke Slide Berikutnya

Setelah memahami posisi praktikum dalam keseluruhan materi semester, kita perlu memastikan implementasi dasarnya benar. Selanjutnya, kita akan membahas kesalahan umum praktikum yang sering membuat pipeline sederhana ini gagal berjalan.

---

## Slide 073 - Kesalahan Umum Praktikum

_Belum ada narasi terpilih untuk slide ini._

---

## Slide 074 - Checklist Praktikum

### Narasi

Sebelum praktikum dianggap selesai, mahasiswa perlu melakukan verifikasi cepat bahwa sistem deteksi musuh sudah berjalan sebagai satu alur yang utuh. Checklist ini bukan sekadar daftar teknis, tetapi cara memastikan bahwa **perception**, **state**, dan **feedback visual** pada agent sudah dapat diamati di Unity. Jika salah satu item belum terpenuhi, perilaku Enemy akan tampak tidak konsisten meskipun script sebenarnya sudah ada.

Gunakan urutan berikut sebagai pengecekan akhir:

- **Setup project**: project Unity berhasil dibuat, scene tersimpan, dan folder rapi.
- **Komponen inti**: Player dapat bergerak, Enemy memiliki script detector, dan Player sudah dihubungkan ke `EnemyDetector`.
- **Parameter dan visual**: `Detection Radius` dapat diubah, Enemy berubah warna, `Current Distance` terlihat, dan `Gizmos` terlihat.
- **Debugging**: `Console` menampilkan perubahan state, dan tidak ada error merah.

Penekanan penting adalah hubungan antara input Player, perhitungan jarak, dan perubahan state Enemy. Jika radius diubah tetapi warna atau log state tidak berubah, kemungkinan besar referensi `Player` belum terhubung, `Gizmos` tidak aktif, atau script belum disimpan. Mahasiswa harus memastikan bahwa perubahan parameter menghasilkan perubahan perilaku yang dapat dilihat, bukan hanya nilai di Inspector.

### Inti yang Harus Ditekankan

- Checklist memastikan alur **perception → decision → action** dapat diverifikasi secara visual dan logikal.
- Komponen wajib: `Player` bergerak, `EnemyDetector` terhubung, `Detection Radius` dapat diubah, dan `Gizmos` terlihat.
- `Console` dan perubahan warna Enemy menjadi bukti bahwa state agent berubah sesuai jarak.
- Error merah dan referensi kosong harus diatasi sebelum mengumpulkan output praktikum.

### Transisi ke Slide Berikutnya

Setelah semua item checklist terpenuhi, langkah berikutnya adalah menyiapkan bukti praktikum berupa screenshot, video/GIF, dan laporan singkat yang menunjukkan perilaku Enemy di luar dan di dalam radius.

---

## Slide 075 - Output Praktikum

### Narasi

Setelah checklist praktikum terpenuhi, langkah berikutnya adalah menyiapkan **output praktikum** yang dapat diperiksa. Output ini bukan sekadar file tambahan, tetapi bukti bahwa mahasiswa benar-benar memahami alur kerja sistem deteksi musuh dalam game. Setiap item yang dikumpulkan harus menunjukkan bahwa `Player`, `Enemy`, dan komponen deteksi seperti `EnemyDetector` sudah terhubung dengan benar.

Mahasiswa mengumpulkan:

- **project Unity** yang dapat dibuka dan dijalankan,
- **screenshot Player di luar radius** untuk menunjukkan kondisi awal tanpa deteksi,
- **screenshot Player di dalam radius** untuk menunjukkan perubahan state saat deteksi aktif,
- **screenshot Inspector Enemy** agar parameter seperti `Detection Radius` dan `Current Distance` terlihat jelas,
- **screenshot Gizmos radius** sebagai visualisasi area deteksi di scene,
- **video/GIF pendek** yang memperlihatkan perubahan perilaku `Enemy` secara dinamis,
- **laporan singkat 1–2 halaman** yang merangkum proses dan hasil praktikum.

Laporan singkat sebaiknya tidak hanya berisi daftar langkah, tetapi juga menjelaskan **tujuan**, **konsep Perception–Decision–Action**, **implementasi**, **eksperimen**, **hasil**, **kendala**, dan **kesimpulan**. Bagian ini penting karena menunjukkan bahwa mahasiswa mampu menerjemahkan perilaku game menjadi penjelasan teknis: apa yang diterima `Enemy`, bagaimana keputusan dibuat, dan apa aksi yang terjadi. Dengan struktur ini, dosen dapat menilai tidak hanya apakah program berjalan, tetapi juga apakah mahasiswa memahami alasan di balik setiap perubahan state.

Sebelum mengumpulkan, pastikan semua screenshot dan video konsisten dengan kondisi project akhir. Jika ada perubahan parameter, dokumentasikan dampaknya secara singkat. Output yang rapi akan memudahkan review dan menjadi dasar diskusi konsep yang lebih luas.

### Inti yang Harus Ditekankan

- **Output praktikum** adalah bukti visual dan teknis bahwa sistem deteksi berfungsi.
- Screenshot harus menunjukkan **Player di luar radius**, **Player di dalam radius**, **Inspector Enemy**, dan **Gizmos radius**.
- Video/GIF penting untuk memperlihatkan **perubahan state** secara dinamis.
- Laporan singkat harus menjelaskan **Perception–Decision–Action**, implementasi, eksperimen, hasil, kendala, dan kesimpulan.

### Transisi ke Slide Berikutnya

Setelah output praktikum dirapikan, kita akan menguji pemahaman konsep melalui pertanyaan diskusi yang menghubungkan praktikum dengan dasar-dasar sistem cerdas dalam game.

---

## Slide 076 - Pertanyaan Diskusi

### Narasi

Slide ini bukan untuk menghafal definisi, tetapi untuk menguji apakah mahasiswa sudah bisa memetakan konsep dasar **Game AI** ke situasi praktikum yang baru saja dikerjakan. Pertanyaan-pertanyaan ini mengarah pada satu hal penting: bagaimana sebuah **NPC** atau entitas game mengambil keputusan berdasarkan informasi yang tersedia, lalu mengubah keputusan itu menjadi perilaku yang bisa diamati.

**Game AI** adalah teknik dan strategi yang digunakan agar entitas dalam game mampu berperilaku seolah-olah cerdas, meskipun tidak selalu harus benar-benar cerdas dalam arti matematis. Dalam konteks game, tujuan utamanya adalah menciptakan pengalaman bermain yang terasa hidup, menantang, dan konsisten, bukan menghasilkan solusi sempurna untuk setiap situasi.

Karena itu, **Game AI tidak harus selalu optimal**. Optimalitas sering kali membuat perilaku NPC terasa kaku, terlalu cepat, atau tidak menyenangkan. Misalnya, musuh yang selalu menemukan rute tercepat dan tidak pernah salah bisa membuat pemain merasa tidak punya ruang untuk strategi. Game AI lebih menekankan **playability**, **fairness**, dan **rasa** dibanding kebenaran absolut.

Perbedaan dengan **Academic AI** juga penting. Academic AI biasanya mengejar solusi yang benar, terukur, dan dapat dibuktikan secara formal. Game AI sering kali menggunakan pendekatan yang lebih praktis: aturan sederhana, heuristik, atau logika yang cukup untuk menghasilkan perilaku yang meyakinkan dan sesuai dengan desain game.

Untuk memahami perilaku game, mahasiswa perlu mengenali **agent** dan **environment**. `agent` adalah entitas yang mengambil keputusan, misalnya NPC, musuh, atau karakter AI. `environment` adalah dunia atau kondisi di sekitar agent yang memengaruhi keputusannya, misalnya posisi player, jarak, objek, atau status game.

Dari situ muncul alur **Perception–Decision–Action**. `perception` adalah informasi yang dibaca agent, seperti jarak player atau apakah player terlihat. `decision` adalah aturan atau proses yang menentukan apa yang sebaiknya dilakukan, misalnya waspada jika dekat dan santai jika jauh. `action` adalah perubahan perilaku yang terlihat, seperti bergerak, menyerang, berhenti, atau mengubah animasi.

**Parameter AI** berfungsi untuk mengatur perilaku tersebut agar bisa diuji dan disesuaikan. Parameter seperti radius deteksi, kecepatan reaksi, atau ambang jarak membuat developer bisa mengubah karakter NPC tanpa menulis ulang logika. **Debugging** penting karena perilaku AI sering kali sulit dilihat hanya dari hasil akhir; dengan debug, mahasiswa bisa memeriksa apakah `perception` benar, `decision` masuk akal, dan `action` sesuai harapan.

Sebelum lanjut, mahasiswa harus bisa menjawab pertanyaan ini dengan contoh dari praktikum, bukan hanya definisi umum. Jika jawaban masih abstrak, berarti konsep dasar belum benar-benar terhubung dengan implementasi.

### Inti yang Harus Ditekankan

- **Game AI** bertujuan membuat perilaku game terasa cerdas dan menyenangkan, bukan selalu optimal.
- **Agent** adalah entitas yang mengambil keputusan, sedangkan **environment** adalah kondisi yang memengaruhi keputusan tersebut.
- Alur dasar perilaku AI adalah `perception` → `decision` → `action`.
- **Parameter AI** dan **debugging** penting untuk mengatur, menguji, dan memperbaiki perilaku NPC.

### Transisi ke Slide Berikutnya

Setelah konsep dasar ini dipahami, kita akan menerapkannya pada kasus sederhana: NPC yang mendeteksi player, lalu memilih perilaku waspada atau santai berdasarkan jarak.

---

## Slide 077 - Latihan Konsep

### Narasi

Slide ini adalah latihan singkat untuk menguji apakah mahasiswa sudah mampu memetakan konsep dasar ke dalam kasus nyata. Kasus yang diberikan sangat sederhana: sebuah NPC harus mendeteksi player, lalu mengubah perilakunya berdasarkan jarak.

```text
NPC harus mendeteksi player.
Jika player dekat, NPC waspada.
Jika player jauh, NPC santai.
```

Kasus ini membantu melihat alur dasar: **perception** menghasilkan informasi, **decision rule** memilih kondisi, dan **action** mengubah perilaku NPC.

Pemetaan konsepnya adalah sebagai berikut:

1. **Agent**-nya adalah `NPC`, karena `NPC` adalah entitas yang mengambil keputusan.
2. **Environment**-nya adalah dunia game atau scene tempat `NPC` dan `player` berada, termasuk posisi, jarak, dan kondisi sekitar.
3. **Perception** yang dibutuhkan adalah informasi jarak antara `NPC` dan `player`, misalnya `distance` atau hasil dari `distance(npc.position, player.position)`.
4. **Decision rule**-nya adalah membandingkan `distance` dengan ambang batas, misalnya `if (distance < alertRange)`.
5. **Action** yang dilakukan adalah mengubah `state` NPC, misalnya menjadi `waspada` atau `santai`, lalu menjalankan perilaku yang sesuai.
6. **Parameter perilaku** yang dibutuhkan adalah `alertRange` atau `detectionRange`, yaitu nilai ambang batas yang menentukan kapan NPC dianggap dekat.
7. **Debug** yang perlu ditampilkan adalah `distance`, `state`, dan `alertRange`, agar mahasiswa bisa melihat mengapa NPC berubah perilaku.

Aturan keputusan pada item 4 dapat ditulis sederhana sebagai berikut:

```text
if (distance < alertRange)
    state = "waspada";
else
    state = "santai";
```

Dalam implementasi, parameter ini penting karena membuat perilaku NPC bisa diatur tanpa mengubah logika utama. Jika `alertRange` terlalu kecil, NPC mungkin tidak waspada saat player sudah dekat. Jika terlalu besar, NPC bisa selalu waspada dan terasa tidak natural.

Sebelum lanjut, mahasiswa perlu memahami bahwa kasus ini bukan hanya soal "NPC bergerak", tetapi soal **loop perilaku**: membaca lingkungan, memilih keputusan, lalu melakukan aksi. Pola ini akan menjadi dasar untuk sistem yang lebih kompleks.

### Inti yang Harus Ditekankan

- **Agent** adalah entitas yang memutuskan, dalam kasus ini `NPC`.
- **Environment** adalah konteks dunia game yang memengaruhi keputusan.
- **Perception** adalah data yang dibaca, misalnya jarak ke `player`.
- **Decision rule** adalah aturan sederhana seperti `if (distance < alertRange)`.
- **Action** adalah perubahan perilaku, misalnya `state = "waspada"` atau `state = "santai"`.
- **Parameter** dan **debug** penting agar perilaku bisa diatur dan diperiksa.

### Transisi ke Slide Berikutnya

Setelah kasus ini dipahami, kita akan merangkum seluruh konsep yang sudah dibahas agar mahasiswa melihat hubungan antara definisi, loop perilaku, dan contoh NPC detector.

---

## Slide 078 - Ringkasan Materi

### Narasi

Pada pertemuan pertama ini, kita telah membangun fondasi **Game AI** sebagai cara memahami bagaimana entitas dalam game dapat berperilaku secara cerdas. Fokus utamanya bukan membuat sistem yang selalu optimal secara matematis, tetapi membuat **NPC** mampu merespons kondisi lingkungan sehingga pengalaman bermain terasa hidup, menantang, dan dapat dikendalikan.

Kita menelusuri alur dasar dari **game loop**: agent membaca **`environment`** melalui **`perception`**, lalu menghasilkan **`decision`** berdasarkan **`state`** dan **parameter AI**, kemudian mengeksekusi **`action`** yang terlihat oleh player. Konsep ini juga membantu kita membedakan **Game AI** dengan **Academic AI**: dalam game, keberhasilan sering diukur dari gameplay, feedback, dan kemudahan debugging, bukan hanya ketepatan solusi.

Sebagai penutup materi, mahasiswa perlu mengingat bahwa implementasi sederhana seperti **NPC Detector di Unity** sudah cukup untuk memperlihatkan hubungan antara deteksi jarak, perubahan state, dan respons visual. Dengan memahami **`state`**, **parameter AI**, dan **debugging**, mahasiswa dapat melanjutkan ke praktikum tanpa harus langsung masuk ke algoritma yang kompleks.

### Inti yang Harus Ditekankan

- **Game AI** adalah sistem yang membuat entitas game merespons lingkungan untuk mendukung pengalaman bermain.
- Alur intinya adalah **`perception`** → **`decision`** → **`action`**, yang dijalankan berulang dalam **game loop**.
- **`state`**, **parameter AI**, dan **debugging** penting agar perilaku NPC dapat diuji, disesuaikan, dan dipahami.

### Transisi ke Slide Berikutnya

Dengan fondasi ini, kita akan masuk ke penutup dan gambaran praktikum, yaitu menyiapkan proyek Unity serta membangun NPC sederhana yang dapat mendeteksi player dan menampilkan state-nya secara visual.

---

## Slide 079 - Penutup

### Narasi

Sebagai penutup pertemuan pertama, kita kembali ke satu hal penting: **Game AI** tidak selalu harus dimulai dari algoritma yang rumit. Fondasinya adalah **agent** yang mampu membaca kondisi lingkungan, mengambil keputusan berdasarkan parameter, dan menghasilkan respons yang terlihat dalam gameplay.

Praktikum pertemuan 1 akan menjadi langkah awal untuk melihat konsep tersebut secara konkret:

```text
Setup Unity Project
+
NPC Detector
```

Dalam praktikum ini, mahasiswa akan membuat **NPC** sederhana yang:

- mendeteksi player berdasarkan jarak,
- memiliki state `IDLE` dan `ALERT`,
- mengubah warna sesuai state,
- menampilkan `detection radius` dengan `Gizmos`.

Tujuan utama praktikum ini bukan membuat NPC yang langsung cerdas, tetapi memastikan mahasiswa memahami alur dasar **Perception–Decision–Action**: NPC membaca jarak player, memutuskan state, lalu menampilkan perubahan visual. Perubahan warna dan radius deteksi membantu mahasiswa melihat bahwa perilaku AI dapat diuji, diamati, dan diperbaiki.

Sebelum lanjut, pastikan mahasiswa memahami bahwa **Game AI** berfokus pada pengalaman bermain. Artinya, keputusan NPC harus terasa wajar, responsif, dan mendukung gameplay, bukan sekadar menjalankan logika teknis.

### Inti yang Harus Ditekankan

- **Game AI** dimulai dari agent sederhana yang membaca lingkungan dan memberi respons.
- Praktikum `NPC Detector` menghubungkan konsep `Perception`, `Decision`, dan `Action` ke implementasi Unity.
- State `IDLE` dan `ALERT` adalah dasar perilaku NPC yang dapat dikembangkan menjadi sistem yang lebih kompleks.
- Visualisasi `detection radius` dan perubahan warna penting untuk debugging dan pemahaman perilaku NPC.

### Transisi ke Slide Berikutnya

Setelah praktikum ini, kita akan masuk ke materi berikutnya: **AI dalam Game: Perception, Memory, dan Decision**, untuk memperdalam cara NPC menyimpan informasi, mengingat kondisi, dan membuat keputusan yang lebih konsisten.
