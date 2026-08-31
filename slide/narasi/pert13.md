# Narasi Game Cerdas - Pertemuan 13

## Machine Learning for Games

Sumber: markdown/pert13.md

---

## Slide 001 - Cover

### Narasi

Selamat datang pada **Pertemuan 13** mata kuliah **Game Cerdas** dengan topik **Machine Learning for Games**. Pada pertemuan ini, kita akan membahas bagaimana **machine learning** dapat digunakan dalam pengembangan game, khususnya untuk membuat sistem yang tidak hanya mengikuti aturan yang sudah ditetapkan, tetapi juga mampu belajar dari **data**, **pengalaman**, dan **interaksi** dengan lingkungan permainan.

Fokus utama pertemuan ini adalah memahami dasar-dasar **machine learning** untuk game, mulai dari **Supervised Learning**, **Reinforcement Learning**, hingga konsep penting seperti `state`, `action`, dan `reward`. Kita juga akan membahas `Q-Learning` sebagai salah satu metode pembelajaran berbasis penguatan, serta melihat bagaimana pendekatan machine learning dapat diterapkan dalam sistem game. Sebagai pengenalan praktis, kita akan membahas `Unity ML-Agents` sebagai salah satu tools yang dapat digunakan untuk membangun agen yang belajar dalam lingkungan game.

Perlu dicatat bahwa praktikum akan dibuat terpisah, yaitu **Implementasi Q-Learning sederhana** atau **Unity ML-Agents Introduction**. Dengan demikian, pertemuan ini lebih menekankan pada pemahaman konsep, alur berpikir, dan dasar penerapan machine learning dalam konteks game, sebelum mahasiswa masuk ke tahap implementasi.

### Inti yang Harus Ditekankan

- Fokus utama pertemuan ini adalah memahami bagaimana **machine learning** dapat digunakan untuk membuat sistem game yang belajar dari **data**, **pengalaman**, dan **interaksi**.
- Konsep penting yang harus dipahami adalah `state`, `action`, dan `reward`, karena menjadi dasar dalam pembelajaran berbasis penguatan.
- Materi akan membahas **Supervised Learning**, **Reinforcement Learning**, `Q-Learning`, penggunaan machine learning dalam game, serta pengenalan `Unity ML-Agents`.
- Praktikum akan dibuat terpisah, yaitu **Implementasi Q-Learning sederhana** atau **Unity ML-Agents Introduction**.

### Transisi ke Slide Berikutnya

Sebelum masuk ke pembahasan machine learning, kita akan meninjau kembali materi **Pertemuan 12** tentang **Player Modeling & Adaptive Game AI**, karena pemahaman tentang belajar dari data akan menjadi dasar untuk memahami pendekatan machine learning pada pertemuan ini.

---

## Slide 002 - Review Pertemuan 12

### Narasi

Slide ini menjadi jeda singkat untuk menyambungkan materi **Pertemuan 12** dengan fokus **Pertemuan 13**. Pada pertemuan sebelumnya, kita membahas **Player Modeling & Adaptive Gameplay**, yaitu cara sistem game mengamati pemain, merangkum perilakunya, lalu menyesuaikan pengalaman bermain. Intuisi praktisnya sederhana: game tidak hanya menjalankan aturan tetap, tetapi mencoba memahami siapa yang sedang bermain dan bagaimana ia bermain.

Materi utama yang perlu diingat adalah rangkaian data dan keputusan berikut:

- `player telemetry`: data mentah yang ditangkap saat bermain, seperti waktu respon, kesalahan, rute, atau frekuensi aksi.
- `gameplay metrics`: ukuran yang dirangkum dari telemetri, misalnya tingkat kesulitan yang dihadapi, keberhasilan, atau pola agresif-defensif.
- `skill estimation`: estimasi kemampuan pemain berdasarkan metrik tersebut.
- `play style`: karakter gaya bermain, seperti eksploratif, agresif, hati-hati, atau cepat.
- `player profile`: representasi ringkas tentang pemain yang dapat digunakan sistem.
- `adaptation policy`: aturan atau strategi untuk menyesuaikan game, misalnya mengubah jumlah musuh, memberi petunjuk, atau menyesuaikan tantangan.

Alurnya dapat dibaca sebagai pipeline:

```text
Gameplay Data
    ↓
Metrics
    ↓
Player Model
    ↓
Adaptation Policy
    ↓
Adaptive Gameplay
```

Artinya, data mentah dari pemain diolah menjadi metrik, metrik membentuk model pemain, model pemain mendorong kebijakan adaptasi, dan kebijakan adaptasi menghasilkan pengalaman bermain yang lebih sesuai. Pada Pertemuan 12, penekanan utamanya adalah **pemodelan pemain** dan **adaptasi** yang masih dapat dibangun dari aturan yang dirancang pengembang.

Pertemuan 13 melanjutkan gagasan yang sama, yaitu belajar dari data, tetapi dengan pendekatan **Machine Learning**. Bedanya, sistem tidak hanya menggunakan aturan yang sudah ditulis manusia; sistem dapat menemukan pola dari data, memperbarui model, atau memilih tindakan berdasarkan pengalaman. Sebelum lanjut, mahasiswa perlu memahami bahwa data pemain adalah bahan baku, model adalah representasi, dan kebijakan adaptasi adalah keputusan yang mengubah perilaku game.

### Inti yang Harus Ditekankan

- **Player modeling** adalah proses mengubah perilaku pemain menjadi representasi yang dapat digunakan sistem.
- **Adaptation policy** adalah tahap keputusan yang mengubah model pemain menjadi perubahan gameplay.
- Pertemuan 13 memperluas gagasan adaptif dengan **Machine Learning**, di mana pola dapat dipelajari dari data atau pengalaman, bukan hanya dari aturan manual.

### Transisi ke Slide Berikutnya

Setelah mengingat kembali alur player modeling dan adaptasi, kita akan melihat posisi materi ini dalam rencana pembelajaran: dari sistem berbasis aturan dan adaptif menuju sistem yang belajar.

---

## Slide 003 - Posisi Materi dalam Rencana Pembelajaran

### Narasi

Slide ini menunjukkan **posisi materi Machine Learning for Games** dalam alur pembelajaran Game Cerdas. Tujuannya adalah memberi peta besar: dari AI yang dibangun berdasarkan aturan eksplisit, menuju AI yang dapat **belajar dari data atau pengalaman**.

```text
Rule-Based Game AI
├── Perception
├── Movement
├── Pathfinding
├── FSM
├── Behavior Tree
├── Utility AI
└── Tactical AI

Content & Adaptive AI
├── PCG
├── DDA
└── Player Modeling

Learning-Based Game AI
```

Pada kelompok **Rule-Based Game AI**, mahasiswa sudah melihat bagaimana perilaku NPC dibentuk melalui aturan yang dirancang developer: `perception` untuk memahami lingkungan, `movement` dan `pathfinding` untuk berpindah, `FSM` dan `Behavior Tree` untuk mengatur keputusan, serta `Utility AI` dan `Tactical AI` untuk memilih tindakan yang lebih kontekstual. Kelompok **Content & Adaptive AI** memperluas fokus ke konten dan adaptasi, misalnya `PCG`, `DDA`, dan `Player Modeling`.

Pertemuan 13 masuk ke **Learning-Based Game AI**. Artinya, agent tidak hanya mengeksekusi aturan yang sudah ditulis, tetapi dapat memperbarui perilaku berdasarkan data, contoh, atau pengalaman bermain. Poin penting yang harus dipahami sebelum lanjut adalah: **Machine Learning bukan pengganti total** metode sebelumnya, melainkan pendekatan tambahan untuk masalah yang sulit dirumuskan sepenuhnya dengan aturan manual.

### Inti yang Harus Ditekankan

- Materi ini berada setelah **Rule-Based Game AI** dan **Content & Adaptive AI**.
- Pertemuan 13 memperkenalkan **Learning-Based Game AI** sebagai fase baru dalam desain AI game.
- Agent dapat **belajar dari data atau pengalaman**, bukan hanya mengikuti aturan eksplisit.
- ML memperluas kemampuan NPC dan sistem game, tetapi tidak menghapus peran `FSM`, `Behavior Tree`, `Utility AI`, dan `pathfinding`.

### Transisi ke Slide Berikutnya

Dengan posisi materi ini sudah jelas, langkah berikutnya adalah memahami mengapa Machine Learning digunakan dalam game dan di mana pendekatan ini mulai relevan.

---

## Slide 004 - Mengapa Machine Learning untuk Game?

### Narasi

Slide ini menjawab pertanyaan mendasar: **mengapa Machine Learning perlu masuk ke dalam desain Game Cerdas?** Setelah kita melihat pendekatan berbasis aturan dan konten adaptif, posisi `Machine Learning` adalah memperluas kemampuan sistem agar tidak hanya mengeksekusi aturan yang sudah ditulis, tetapi juga dapat menemukan pola dari data atau pengalaman.

Intuisi praktisnya sederhana. Dalam game, banyak perilaku yang sulit ditulis sebagai aturan tunggal karena pemain berbeda-beda, situasi berubah cepat, dan hasil interaksi sangat kontekstual. `Machine Learning` memberi cara untuk membangun **agent** yang dapat diperbaiki berdasarkan data, misalnya log gameplay, hasil simulasi, atau umpan balik dari lingkungan.

Beberapa penggunaan utamanya dapat dikelompokkan sebagai berikut:

- **Prediksi dan klasifikasi**: memprediksi perilaku player, mengklasifikasikan play style, serta menganalisis data gameplay.
- **Adaptasi dan balancing**: menyesuaikan difficulty, menguji balancing game, dan membantu desain agar pengalaman pemain lebih seimbang.
- **Perilaku NPC dan konten**: mengoptimalkan strategi NPC serta menghasilkan konten adaptif yang lebih responsif terhadap kondisi permainan.

Penting untuk memahami bahwa `Machine Learning` bukan pengganti otomatis dari seluruh sistem perilaku. Dalam banyak game, perilaku yang harus jelas, stabil, dan mudah diuji tetap lebih cocok dibangun dengan `FSM`, `Behavior Tree`, `Utility AI`, dan `NavMesh`. Pendekatan berbasis aturan sering kali lebih mudah dikontrol, lebih mudah didokumentasikan, dan lebih aman untuk kebutuhan produksi.

Kelemahan `Machine Learning` juga perlu dipahami sejak awal. Sistem yang belajar dari data biasanya membutuhkan data yang cukup, proses pelatihan, evaluasi, dan mekanisme untuk memastikan hasilnya tidak bias atau tidak stabil. Selain itu, perilaku yang dihasilkan bisa lebih sulit diprediksi dibandingkan aturan eksplisit, sehingga tidak selalu cocok untuk setiap bagian game.

Sebelum lanjut, mahasiswa perlu membawa satu pemahaman utama: `Machine Learning` adalah **alat tambahan** untuk masalah tertentu, bukan satu-satunya cara membangun perilaku game. Pilihan pendekatan harus didasarkan pada tujuan desain, kebutuhan kontrol, ketersediaan data, dan risiko perilaku yang tidak diinginkan.

### Inti yang Harus Ditekankan

- `Machine Learning` berguna ketika perilaku game perlu **belajar dari data**, memprediksi pemain, atau menyesuaikan diri secara adaptif.
- Penggunaannya mencakup prediksi player, klasifikasi play style, penyesuaian difficulty, optimasi NPC, konten adaptif, analisis gameplay, dan uji balancing.
- `Machine Learning` tidak selalu lebih baik; `FSM`, `Behavior Tree`, `Utility AI`, dan `NavMesh` tetap penting untuk perilaku yang harus stabil, jelas, dan mudah dikontrol.
- Mahasiswa harus memahami bahwa pemilihan pendekatan berbasis aturan atau pembelajaran harus disesuaikan dengan kebutuhan desain game, bukan sekadar tren teknologi.

### Transisi ke Slide Berikutnya

Selanjutnya, kita akan membandingkan secara langsung pendekatan berbasis aturan dan pendekatan berbasis pembelajaran, agar mahasiswa dapat melihat kapan masing-masing lebih cocok digunakan dalam desain perilaku game.

---

## Slide 005 - Rule-Based AI vs Learning-Based AI

### Narasi

Pada slide ini kita membandingkan dua cara utama membangun perilaku agent dalam game.

**Rule-based** berarti developer menulis aturan eksplisit. Sistem tidak perlu belajar dari data; ia hanya mengevaluasi kondisi dan memilih aksi. Intuisinya sederhana: jika kondisi A terjadi, lakukan aksi B.

Contoh pada slide dapat dibaca sebagai aturan keputusan:

```text
Jika player terlihat
    Chase

Jika player dekat
    Attack

Jika HP rendah
    Flee
```

Dalam implementasi, pola ini sering muncul sebagai **Finite State Machine**, **behavior tree**, atau aturan `if-else` sederhana. Setiap kondisi seperti `player terlihat`, `player dekat`, dan `HP rendah` menjadi **state** atau **condition**, sedangkan `Chase`, `Attack`, dan `Flee` menjadi **action** yang dijalankan agent.

Kelebihan pendekatan ini adalah **mudah dikontrol**, **mudah diuji**, dan **mudah dijelaskan**. Dosen atau developer bisa langsung melihat mengapa agent melakukan sesuatu. Jika agent tidak mengejar, kita bisa memeriksa apakah kondisi `player terlihat` benar-benar terpenuhi.

**Learning-based** berbeda. Di sini agent tidak langsung diberi aturan lengkap. Agent mencoba banyak aksi, menerima `reward`, lalu memperbaiki keputusan berdasarkan pengalaman.

Contoh alurnya:

```text
Agent mencoba banyak aksi.
Agent mendapat reward.
Agent belajar aksi mana yang lebih baik.
```

Artinya, perilaku agent terbentuk dari **data** atau **pengalaman**, bukan hanya dari aturan yang ditulis manual. Jika agent berhasil mencapai tujuan atau menghindari bahaya, `reward` positif memperkuat aksi tersebut. Jika gagal, sistem belajar mengurangi kemungkinan mengulangi aksi yang buruk.

Perbedaan utamanya ada pada **sumber perilaku**. Rule-based berasal dari **aturan eksplisit** yang dibuat developer. Learning-based berasal dari **proses pembelajaran** yang menghasilkan kebijakan perilaku.

Karena itu, rule-based biasanya lebih **deterministik** dan lebih mudah diprediksi. Learning-based biasanya lebih **adaptif**, tetapi juga lebih sulit diprediksi karena perilakunya bergantung pada data, parameter, dan proses pelatihan.

Sebelum lanjut, mahasiswa perlu memahami bahwa kedua pendekatan ini bukan saling menggantikan. Dalam game, aturan eksplisit sering tetap diperlukan untuk kontrol, keamanan, dan konsistensi desain. Pembelajaran berguna ketika aturan manual menjadi terlalu kompleks atau ketika sistem perlu menyesuaikan diri dengan pola yang sulit ditulis tangan.

### Inti yang Harus Ditekankan

- **Rule-based** menggunakan aturan eksplisit: kondisi diperiksa, lalu action dipilih.
- **Learning-based** menggunakan pengalaman: agent mencoba aksi, menerima `reward`, lalu memperbaiki keputusan.
- Rule-based lebih mudah dikontrol dan diuji; learning-based lebih adaptif tetapi lebih sulit diprediksi.
- Keduanya bisa menjadi pilihan desain, bukan pengganti satu sama lain.

### Transisi ke Slide Berikutnya

Setelah memahami perbedaan dasar antara aturan eksplisit dan pembelajaran dari pengalaman, langkah berikutnya adalah menentukan kapan pendekatan berbasis pembelajaran benar-benar cocok digunakan dalam game.

---

## Slide 006 - Kapan ML Cocok Digunakan dalam Game?

### Narasi

Setelah memahami perbedaan antara **rule-based AI** dan **learning-based AI**, langkah berikutnya adalah menentukan kapan pendekatan berbasis **machine learning** atau `ML` benar-benar layak digunakan dalam game. Intuisi utamanya sederhana: `ML` bukan pilihan default, melainkan alat yang berguna ketika perilaku yang diinginkan sulit didefinisikan secara manual, tetapi dapat dipelajari dari data, pengalaman, atau simulasi berulang.

`ML` cocok digunakan ketika beberapa kondisi berikut terpenuhi:

- **Aturan sulit ditulis manual**  
  Misalnya, perilaku NPC yang harus menyesuaikan diri terhadap banyak variasi gaya bermain pemain. Jika aturan `if-else` menjadi terlalu banyak dan rapuh, pendekatan berbasis pembelajaran dapat menjadi alternatif.

- **Ada banyak data gameplay**  
  `ML` biasanya lebih kuat ketika tersedia data yang cukup, seperti rekaman permainan, hasil simulasi, atau interaksi `agent` dengan lingkungan. Data ini menjadi bahan untuk mengenali pola.

- **Agent perlu belajar strategi**  
  Dalam beberapa game, strategi terbaik tidak selalu bisa ditentukan langsung oleh developer. `Agent` dapat belajar memilih `action` yang lebih baik berdasarkan `state` lingkungan dan umpan balik yang diterima.

- **Sistem perlu mengenali pola player**  
  Game dapat memanfaatkan `ML` untuk memahami kebiasaan pemain, misalnya gaya bermain agresif, defensif, eksploratif, atau pola keputusan tertentu.

- **Environment dapat disimulasikan berulang**  
  Jika lingkungan game dapat dijalankan berkali-kali, `agent` memiliki kesempatan untuk mencoba berbagai perilaku dan memperbaiki kinerjanya.

- **Adaptasi membutuhkan prediksi**  
  Beberapa sistem game membutuhkan kemampuan memprediksi, misalnya memperkirakan apakah pemain akan berhenti bermain atau bagaimana pemain akan merespons situasi tertentu.

Beberapa contoh penerapannya adalah sebagai berikut:

- `agent` belajar mencapai `target` tertentu.
- bot belajar menghindari `obstacle` dalam lingkungan yang bervariasi.
- sistem memprediksi `player churn`, yaitu kemungkinan pemain berhenti bermain.
- model mengklasifikasikan `play style` pemain.
- `AI director` menyesuaikan `spawn` musuh atau peristiwa dalam game berdasarkan kondisi permainan.

Dari contoh tersebut, terlihat bahwa `ML` paling berguna ketika masalahnya bersifat **adaptif**, **berbasis data**, atau **sulit diwakili oleh aturan tetap**. Sebelum memilih pendekatan ini, mahasiswa perlu memahami bahwa `ML` biasanya dipilih bukan karena terdengar lebih canggih, tetapi karena ia mampu menangani variasi dan pembelajaran yang sulit ditulis secara eksplisit.

Hal penting yang harus dipahami sebelum lanjut adalah: `ML` cocok ketika perilaku game membutuhkan penyesuaian terhadap banyak kemungkinan, ketika data atau simulasi tersedia, dan ketika prediksi atau pengenalan pola menjadi bagian penting dari pengalaman bermain.

### Inti yang Harus Ditekankan

- `ML` cocok ketika aturan manual menjadi terlalu kompleks atau tidak praktis.
- `ML` lebih efektif jika tersedia data gameplay, simulasi berulang, atau umpan balik dari lingkungan.
- `ML` berguna untuk adaptasi, prediksi, pengenalan pola, dan pembelajaran strategi.
- `ML` bukan pengganti otomatis untuk semua sistem AI game; ia dipilih berdasarkan kebutuhan desain dan ketersediaan data.

### Transisi ke Slide Berikutnya

Setelah memahami kapan `ML` cocok digunakan, kita juga perlu memahami batasannya. Pada slide berikutnya, kita akan membahas kasus-kasus ketika `ML` tidak selalu diperlukan dan pendekatan klasik justru lebih praktis.

---

## Slide 007 - Kapan ML Tidak Perlu Digunakan?

### Narasi

**Machine learning** tidak selalu menjadi pilihan pertama dalam pengembangan game. Intuisi praktisnya sederhana: jika perilaku yang diinginkan bisa dijelaskan dengan beberapa kondisi, transisi, atau aturan yang jelas, teknik klasik biasanya lebih hemat, lebih stabil, dan lebih mudah dikendalikan.

Dalam banyak kasus, **ML** justru menjadi berlebihan ketika masalahnya masih kecil dan solusinya sudah cukup deterministik. Mahasiswa perlu memahami bahwa pemilihan metode harus mengikuti kebutuhan desain, bukan sekadar mengikuti tren teknologi.

Beberapa contoh pada slide menunjukkan perbandingan yang penting:

- **Patrol sederhana** dapat diselesaikan dengan `FSM`, karena agent hanya berpindah antar `state` seperti `idle`, `walk`, dan `look`.
- **Enemy chase** umumnya cukup menggunakan `NavMesh` ditambah `FSM`, karena jalur dan keputusan dasar sudah dapat diatur secara eksplisit.
- **Target selection sederhana** dapat memakai `Utility AI`, di mana setiap `action` diberi skor berdasarkan jarak, ancaman, atau prioritas.
- **Dungeon generator sederhana** dapat menggunakan `PCG` rule-based, karena aturan tata letak, konektivitas, dan batas ruang dapat didefinisikan secara manual.

ML dapat menjadi tidak perlu jika kondisi berikut muncul:

- data gameplay sangat sedikit,
- perilaku harus sangat deterministik,
- `debugging` harus mudah dilakukan,
- waktu development terbatas,
- tujuan desain bisa dicapai dengan aturan sederhana.

Hal yang harus dipahami sebelum lanjut adalah: **ML** berguna ketika aturan manual menjadi terlalu rumit, data melimpah, atau sistem perlu belajar dari pola. Namun, untuk perilaku dasar NPC, pathfinding, dan keputusan sederhana, teknik klasik sering kali lebih tepat karena lebih mudah diuji, diprediksi, dan disesuaikan.

### Inti yang Harus Ditekankan

- **ML tidak selalu lebih baik**; teknik klasik seperti `FSM`, `NavMesh`, `Utility AI`, dan `PCG` sering lebih praktis.
- Gunakan **ML** ketika masalahnya kompleks, data cukup, dan perilaku perlu belajar atau beradaptasi.
- Pertimbangkan **deterministik**, **debugging**, data, dan waktu development sebelum memilih metode.

### Transisi ke Slide Berikutnya

Setelah memahami kapan **ML** perlu dan tidak perlu digunakan, kita lanjut ke capaian pembelajaran pertemuan ini untuk merangkum kompetensi yang harus dikuasai mahasiswa.

---

## Slide 008 - Capaian Pembelajaran Pertemuan

### Narasi

Slide ini menata capaian pembelajaran untuk pertemuan **Machine Learning for Games**. Tujuannya bukan langsung masuk ke implementasi yang rumit, tetapi memastikan mahasiswa memiliki peta konsep yang utuh: dari peran machine learning dalam game, sampai kesiapan merancang praktikum sederhana.

Secara garis besar, capaian ini dapat dikelompokkan menjadi tiga lapisan:

1. **Pemahaman dasar machine learning**: mahasiswa mampu menjelaskan peran machine learning dalam game dan membedakannya dengan pendekatan berbasis aturan manual.
2. **Pemahaman reinforcement learning**: mahasiswa mampu menjelaskan `state`, `action`, `reward`, `agent`, dan `environment`, kemudian memahami prinsip dasar `Q-learning`, membaca `Q-table` sederhana, serta menjelaskan eksplorasi dan eksploitasi.
3. **Kesiapan aplikasi dan praktik**: mahasiswa mampu menjelaskan penggunaan machine learning dalam game, gambaran `Unity ML-Agents`, dan merancang praktikum `Q-learning` sederhana atau pengenalan `ML-Agents`.

Dengan capaian ini, mahasiswa diharapkan tidak hanya hafal istilah, tetapi mampu melihat hubungan antar konsep: bagaimana agent mengambil keputusan di environment, bagaimana reward membentuk pembelajaran, dan bagaimana `Q-learning` menjadi dasar untuk perilaku yang dapat dievaluasi secara sederhana.

### Inti yang Harus Ditekankan

- Mahasiswa harus paham bahwa machine learning dalam game adalah cara sistem belajar pola atau keputusan dari data atau pengalaman, bukan sekadar aturan yang ditulis manual.
- Konsep `state`, `action`, `reward`, `agent`, dan `environment` adalah fondasi utama untuk memahami reinforcement learning dan `Q-learning`.
- `Q-learning` perlu dipahami sebagai proses memperbarui nilai tindakan berdasarkan reward, dengan keseimbangan antara eksplorasi dan eksploitasi.
- Mahasiswa harus mampu membedakan **supervised learning** dan **reinforcement learning**, serta melihat relevansinya dengan perilaku NPC, adaptasi gameplay, dan `Unity ML-Agents`.
- Capaian akhir pertemuan adalah kesiapan merancang praktikum sederhana, bukan langsung menguasai implementasi machine learning yang kompleks.

### Transisi ke Slide Berikutnya

Setelah capaian pembelajaran ini dipahami, kita lanjut ke pertanyaan paling dasar: apa itu machine learning, dan bagaimana sistem belajar pola dari data atau pengalaman.

---

## Slide 009 - Apa Itu Machine Learning?

### Narasi

**Machine Learning** adalah pendekatan di mana sistem belajar **pola** dari **data** atau **pengalaman**. Intuisinya, alih-alih menulis semua aturan secara eksplisit, sistem diberi contoh atau pengalaman, lalu menemukan hubungan yang berguna untuk membuat keputusan.

Pendekatan ini penting dalam game karena banyak situasi sulit didefinisikan dengan aturan tetap. Misalnya, perilaku pemain, kondisi permainan, atau respons terhadap tantangan bisa berubah-ubah. Dengan **machine learning**, sistem dapat menyesuaikan perilaku berdasarkan apa yang telah dipelajarinya.

Alur dasarnya dapat dilihat dari diagram berikut:

```text
Input data
    ↓
Model belajar pola
    ↓
Model membuat prediksi / keputusan
```

Pada tahap pertama, sistem menerima **input data**. Data ini bisa berupa contoh perilaku, hasil simulasi, atau informasi dari lingkungan permainan. Selanjutnya, **model** belajar pola yang ada di dalamnya. Pola ini bukan aturan yang ditulis manual, melainkan hubungan yang ditemukan dari data.

Setelah pola terbentuk, model dapat menghasilkan **prediksi** atau **keputusan**. Dalam konteks game, keputusan ini bisa berupa perkiraan perilaku pemain, kategori situasi, atau pilihan tindakan yang dilakukan oleh agent.

Beberapa penggunaan **machine learning** dalam game antara lain:

- **prediksi**, untuk memperkirakan hasil atau perilaku berikutnya;
- **klasifikasi**, untuk mengelompokkan situasi atau perilaku ke dalam kategori;
- **kontrol agent**, untuk membantu agent memilih tindakan;
- **adaptasi gameplay**, untuk menyesuaikan pengalaman bermain;
- **analisis player**, untuk memahami pola dan kebiasaan pemain.

Yang perlu dipahami mahasiswa adalah bahwa **machine learning** bukan pengganti seluruh desain game, melainkan cara sistem belajar dari data atau pengalaman agar dapat membuat keputusan yang lebih adaptif.

### Inti yang Harus Ditekankan

- **Machine Learning** adalah pembelajaran pola dari **data** atau **pengalaman**, bukan selalu aturan eksplisit.
- Alur utamanya adalah **input data** → **model belajar pola** → **prediksi/keputusan**.
- Dalam game, **machine learning** dapat digunakan untuk prediksi, klasifikasi, kontrol agent, adaptasi gameplay, dan analisis player.

### Transisi ke Slide Berikutnya

Setelah memahami apa itu **machine learning**, langkah berikutnya adalah melihat kategori umumnya, yaitu supervised learning, unsupervised learning, dan reinforcement learning, serta mengapa pertemuan ini berfokus pada dua kategori yang paling dekat dengan game.

---

## Slide 010 - Tiga Kategori Umum Machine Learning

### Narasi

Slide ini memetakan **tiga kategori umum Machine Learning** yang akan menjadi dasar pembahasan.

```text
Machine Learning
├── Supervised Learning
├── Unsupervised Learning
└── Reinforcement Learning
```

Secara intuitif, perbedaan ketiganya terletak pada **jenis umpan balik** yang diterima sistem saat belajar.

- **Supervised Learning** belajar dari data yang sudah memiliki **label**.
- **Unsupervised Learning** belajar dari data tanpa label, biasanya untuk menemukan pola atau kelompok.
- **Reinforcement Learning** belajar melalui percobaan, di mana agent menerima **reward** atau **penalti** berdasarkan tindakan yang diambil.

Dalam konteks game, kategori yang paling langsung terasa adalah **Supervised Learning** dan **Reinforcement Learning**.

**Supervised Learning** cocok untuk situasi di mana kita sudah punya contoh perilaku yang bisa diberi label, misalnya gaya bermain pemain, jenis serangan, atau keputusan NPC. Sistem belajar memetakan input ke label yang sudah diketahui.

**Reinforcement Learning** cocok untuk situasi di mana perilaku harus ditemukan melalui interaksi dengan lingkungan, misalnya agent belajar memilih `move`, `attack`, atau `defend` berdasarkan reward yang diberikan.

**Unsupervised Learning** tetap penting, tetapi pada pertemuan ini tidak menjadi fokus utama karena hubungannya dengan perilaku game biasanya lebih tidak langsung.

Sebelum lanjut, mahasiswa perlu memahami bahwa **label**, **pola tanpa label**, dan **reward** adalah tiga kunci untuk membedakan kategori.

### Inti yang Harus Ditekankan

- **Supervised Learning** menggunakan data berlabel.
- **Unsupervised Learning** mencari struktur pada data tanpa label.
- **Reinforcement Learning** belajar dari interaksi dan reward.
- Fokus pertemuan ini adalah **Supervised Learning** dan **Reinforcement Learning** karena paling mudah dikaitkan dengan game.

### Transisi ke Slide Berikutnya

Setelah memahami tiga kategori ini, kita masuk ke **Supervised Learning**, yaitu cara sistem belajar dari data yang sudah memiliki label.

---

## Slide 011 - Supervised Learning

### Narasi

Pada slide ini kita membahas **Supervised Learning**, yaitu salah satu pendekatan machine learning yang paling mudah dipahami karena model belajar dari data yang sudah memiliki label.

Istilah *supervised* menunjukkan adanya "pembimbing" dalam bentuk label. Model tidak menebak secara bebas; ia mempelajari hubungan antara input dan output yang sudah diketahui.

```text
Input: telemetry player
Label: play style
```

Dalam konteks game, `telemetry player` adalah data perilaku yang dikumpulkan selama permainan. Data ini bisa berupa nilai statistik, pola interaksi, atau metrik gameplay. Label seperti `play style` adalah kategori yang ingin diprediksi oleh model.

Contoh data pada slide menunjukkan tiga fitur utama:

| `Accuracy` | `Damage Taken` | `Exploration` | `Label` |
|---:|---:|---:|---|
| 0.80 | 30 | 0.20 | `Aggressive` |
| 0.45 | 15 | 0.70 | `Explorer` |
| 0.60 | 10 | 0.30 | `Defensive` |

Kolom `Accuracy`, `Damage Taken`, dan `Exploration` berperan sebagai **input** atau fitur. Kolom `Label` berperan sebagai **target** yang ingin dipelajari.

Model akan melihat banyak baris data seperti ini, lalu mencari pola. Misalnya, nilai `Accuracy` yang tinggi dan `Exploration` yang rendah dapat diasosiasikan dengan label `Aggressive`. Nilai `Exploration` yang tinggi dapat diasosiasikan dengan label `Explorer`.

Secara sederhana, alurnya adalah:

```text
[accuracy, damage_taken, exploration]
        -> model
        -> play_style
```

Yang penting dipahami: supervised learning bukan sekadar membuat aturan manual. Model belajar dari contoh, sehingga pola yang ditemukan dapat berasal dari data, bukan hanya dari asumsi desainer.

Sebelum lanjut, mahasiswa perlu memahami tiga hal:

- Data harus memiliki **label** yang jelas.
- Input berupa fitur numerik atau kategorikal yang dapat diproses model.
- Tujuan model adalah memprediksi label untuk data baru yang belum berlabel.

### Inti yang Harus Ditekankan

- **Supervised Learning** adalah pembelajaran dari data berlabel.
- `telemetry player` adalah sumber input, sedangkan `play style` adalah label target.
- Model belajar pola dari fitur seperti `Accuracy`, `Damage Taken`, dan `Exploration`.
- Kualitas label sangat menentukan kualitas prediksi.

### Transisi ke Slide Berikutnya

Setelah memahami bahwa supervised learning bekerja dari data berlabel, slide berikutnya akan menunjukkan contoh konkretnya dalam game, termasuk bagaimana input gameplay dapat dipetakan ke prediksi perilaku pemain.

---

## Slide 012 - Contoh Supervised Learning dalam Game

### Narasi

Pada slide ini, kita melihat bagaimana **Supervised Learning** dapat diterapkan dalam konteks game. Intuisinya sederhana: sistem belajar dari data pemain yang sudah memiliki label, lalu menggunakan pola tersebut untuk memprediksi label pada data pemain baru.

Contoh yang paling dekat dengan game adalah **klasifikasi play style**. Data yang diukur bisa berupa `accuracy`, `damage taken`, dan `exploration ratio`. Dari kombinasi nilai tersebut, model dapat memprediksi apakah pemain cenderung `Aggressive`, `Defensive`, atau `Explorer`.

```text
Input:
accuracy, damage taken, exploration ratio

Output:
Aggressive / Defensive / Explorer
```

Dalam praktik, contoh ini dapat diperluas ke beberapa kebutuhan desain dan operasional game:

- **Prediksi skill level** untuk menyesuaikan tantangan.
- **Prediksi menang/kalah** untuk membantu balancing atau rekomendasi.
- **Prediksi kemungkinan berhenti bermain** sebagai bagian dari retensi.
- **Deteksi cheater** dengan mengenali pola anomali.
- **Prediksi kebutuhan hint** agar pemain tidak frustrasi.
- **Rekomendasi difficulty** agar pengalaman bermain tetap menantang namun adil.

Poin penting yang harus dipahami mahasiswa adalah bahwa supervised learning di sini bukan sekadar “membaca data”, tetapi membangun hubungan antara **input telemetry** dan **label perilaku**. Label bisa berasal dari pengamatan, aturan desain, atau hasil kurasi data. Tanpa label yang jelas, model tidak memiliki target pembelajaran.

Contoh ini juga menjadi jembatan menuju **Player Modeling**. Dengan mengetahui gaya bermain, tingkat kemampuan, atau risiko berhenti bermain, game dapat menyesuaikan perilaku NPC, tantangan, hint, atau rekomendasi difficulty secara lebih personal.

Sebelum masuk ke detail teknis, mahasiswa perlu memahami bahwa output model bersifat **prediktif**. Artinya, model membantu memperkirakan kemungkinan, bukan menentukan secara mutlak.

### Inti yang Harus Ditekankan

- **Supervised Learning** dalam game menggunakan data berlabel untuk memprediksi perilaku atau kondisi pemain.
- Contoh utamanya adalah **klasifikasi play style** dari input seperti `accuracy`, `damage taken`, dan `exploration ratio`.
- Penerapannya dapat mendukung **player modeling**, rekomendasi difficulty, deteksi anomali, dan pengalaman bermain yang lebih adaptif.
- Output model bersifat **prediktif**, sehingga perlu dipahami sebagai estimasi, bukan kepastian absolut.

### Transisi ke Slide Berikutnya

Setelah memahami contoh penggunaannya, langkah berikutnya adalah melihat bagaimana data tersebut diproses secara sistematis. Pada slide berikutnya, kita akan membahas **Supervised Learning Pipeline**, mulai dari pengumpulan data, pelabelan, pelatihan model, validasi, hingga penggunaan model dalam game.

---

## Slide 013 - Supervised Learning Pipeline

### Narasi

Pada slide ini, kita melihat **Supervised Learning Pipeline** sebagai alur kerja yang mengubah data gameplay menjadi model yang dapat digunakan dalam game. Intuisi awalnya sederhana: model tidak langsung “tahu” pola pemain; ia harus dilatih dari contoh yang sudah memiliki jawaban.

Pipeline ini dapat ditulis sebagai berikut:

```text
Collect Data
    ↓
Label Data
    ↓
Train Model
    ↓
Validate Model
    ↓
Use Model in Game
```

Tahapan ini penting karena setiap tahap memiliki peran yang berbeda.

1. **Collect Data**  
   Data dikumpulkan dari aktivitas pemain, misalnya telemetri gameplay seperti `accuracy`, `damage taken`, dan `exploration ratio`. Data ini menjadi bahan mentah untuk pembelajaran.

2. **Label Data**  
   Setiap data diberi label target, misalnya `Aggressive`, `Defensive`, atau `Explorer`. Label inilah yang menjadi jawaban yang ingin dipelajari model.

3. **Train Model**  
   Model dilatih untuk menemukan hubungan antara fitur input dan label. Dalam konteks game, model belajar memetakan perilaku pemain ke kategori tertentu.

4. **Validate Model**  
   Model diuji pada data yang tidak digunakan saat pelatihan. Tahap ini membantu memastikan model tidak hanya menghafal data lama, tetapi mampu memprediksi data baru.

5. **Use Model in Game**  
   Model yang sudah tervalidasi dapat digunakan untuk memprediksi perilaku pemain baru, mendukung player modeling, atau menjadi dasar rekomendasi dalam game.

Contoh konkretnya adalah sebagai berikut:

```text
Telemetry banyak player
    ↓
Label play style
    ↓
Train classifier
    ↓
Model memprediksi play style player baru
```

Pada contoh ini, data telemetri dari banyak pemain menjadi input. Setelah diberi label play style, `classifier` dilatih. Hasilnya, model dapat memperkirakan play style pemain baru berdasarkan data perilakunya.

Untuk praktikum mata kuliah ini, mahasiswa cukup memahami supervised learning secara konsep. Yang penting adalah memahami alur pipeline, peran label, dan mengapa validasi diperlukan sebelum model digunakan.

### Inti yang Harus Ditekankan

- **Supervised learning pipeline** adalah alur dari pengumpulan data, pelabelan, pelatihan, validasi, hingga penggunaan model.
- **Label data** menentukan apa yang dipelajari model; tanpa label yang jelas, model tidak memiliki target prediksi.
- **Validasi model** penting untuk memastikan model dapat bekerja pada data baru, bukan hanya data pelatihan.
- Dalam praktikum, fokusnya adalah memahami konsep pipeline, bukan implementasi lengkap.

### Transisi ke Slide Berikutnya

Setelah alur pipeline dipahami, langkah berikutnya adalah melihat mengapa supervised learning berguna sekaligus apa batasannya. Slide berikutnya akan membahas kelebihan dan kekurangan supervised learning.

---

## Slide 014 - Kelebihan Supervised Learning

### Narasi

Setelah memahami pipeline supervised learning, kita perlu melihat kapan pendekatan ini benar-benar berguna dalam game. Intuisi praktisnya sederhana: jika kita sudah punya data masa lalu yang diberi label, supervised learning bisa membantu sistem mengenali pola dan membuat prediksi. Dalam konteks game, ini sering dipakai untuk memahami perilaku pemain, bukan untuk membuat agent belajar dari nol.

**Kelebihan utama** supervised learning adalah kesesuaiannya untuk tugas **prediksi** dan **klasifikasi**. Misalnya, sistem dapat memprediksi apakah pemain cenderung agresif, defensif, atau eksploratif berdasarkan data gameplay. Karena ada label, proses evaluasi juga lebih jelas: model dapat diuji dengan `data test` untuk melihat seberapa baik prediksi yang dihasilkan.

Untuk game, supervised learning sangat berguna untuk **player modeling**. Data gameplay nyata dari banyak pemain dapat digunakan untuk membangun profil perilaku. Jika modelnya sederhana, outputnya relatif mudah dipahami, misalnya kategori play style atau probabilitas pilihan strategi. Hal ini membantu desainer dan developer membuat konten, balancing, atau rekomendasi yang lebih sesuai.

Namun, pendekatan ini juga memiliki batas. Supervised learning membutuhkan **data berlabel**, dan kualitas model sangat bergantung pada kualitas data. Jika label tidak konsisten atau data tidak mewakili populasi pemain, prediksi dapat meleset. Selain itu, supervised learning tidak belajar langsung dari `trial-error` di environment, sehingga kurang cocok untuk agent yang harus menyesuaikan diri secara real-time melalui interaksi.

Karena itu, sebelum lanjut, mahasiswa perlu memahami bahwa supervised learning adalah alat yang kuat untuk **memprediksi pola dari data historis**, tetapi bukan satu-satunya cara untuk membuat perilaku agent. Untuk kasus di mana agent perlu belajar mengambil keputusan berurutan dari interaksi dengan environment, kita akan beralih ke pendekatan lain.

### Inti yang Harus Ditekankan

- Supervised learning cocok untuk **prediksi** dan **klasifikasi**, terutama ketika data sudah memiliki label.
- Dalam game, pendekatan ini berguna untuk **player modeling** dan pemanfaatan data gameplay nyata.
- Evaluasinya relatif jelas karena model dapat diuji dengan `data test`.
- Kekurangannya adalah ketergantungan pada data berlabel, kualitas data, dan ketidakcocokan untuk pembelajaran langsung dari `trial-error` environment.

### Transisi ke Slide Berikutnya

Karena supervised learning tidak belajar langsung dari interaksi dan trial-error, selanjutnya kita akan membahas **Reinforcement Learning**, yaitu pendekatan di mana agent belajar strategi melalui aksi, lingkungan, dan umpan balik.

---

## Slide 015 - Reinforcement Learning

### Narasi

**Reinforcement Learning** atau **RL** adalah pendekatan pembelajaran di mana **agent** memperoleh strategi melalui interaksi langsung dengan **environment**.

Intuisinya, agent tidak diberi jawaban siap pakai. Agent mencoba **action**, lalu environment memberi umpan balik berupa **state** dan **reward**. Dari umpan balik itu, agent menilai apakah tindakannya menguntungkan atau merugikan.

Alur dasarnya dapat dilihat pada diagram berikut:

```text
Agent
  ↓ action
Environment
  ↓ state + reward
Agent belajar
```

Dalam diagram tersebut, **Agent** adalah entitas yang membuat keputusan, misalnya karakter dalam game atau NPC. **Environment** adalah dunia atau aturan tempat agent berinteraksi. Ketika agent memilih `action`, environment merespons dengan kondisi baru `state` dan nilai `reward`.

Nilai `reward` menjadi sinyal utama pembelajaran. Jika action membawa agent lebih dekat ke tujuan, reward bisa positif. Jika action membuat agent terjebak, gagal, atau melanggar aturan, reward bisa negatif atau nol. Agent lalu menyesuaikan strateginya agar total reward di masa depan lebih besar.

Yang perlu dipahami mahasiswa sebelum lanjut adalah bahwa RL berfokus pada **keputusan berurutan**. Agent tidak hanya memilih satu aksi sekali, tetapi belajar memilih rangkaian aksi dari waktu ke waktu. Inilah yang membedakan RL dari pendekatan yang hanya memprediksi label atau mengklasifikasikan data.

### Inti yang Harus Ditekankan

- **Agent** belajar melalui interaksi, bukan hanya dari data berlabel.
- **Action**, **state**, dan **reward** adalah komponen inti dalam loop pembelajaran.
- **Reward** berfungsi sebagai umpan balik untuk menilai kualitas keputusan.
- RL cocok untuk masalah **sequential decision making**, yaitu pengambilan keputusan yang saling bergantung antar langkah.

### Transisi ke Slide Berikutnya

Setelah memahami alur dasar RL, kita akan melihat bagaimana konsep ini diterapkan dalam skenario game yang lebih konkret, seperti agent yang belajar mencapai target atau memilih aksi dalam lingkungan sederhana.

---

## Slide 016 - Contoh Reinforcement Learning dalam Game

### Narasi

Slide ini membawa **Reinforcement Learning** dari alur umum ke contoh yang lebih konkret dalam game. Setelah agent memilih `action`, environment memberi `state` dan `reward`, maka di sini kita melihat bentuk perilaku apa yang bisa dipelajari.

Contoh-contoh yang muncul di slide ini cukup luas:

- **Mencapai target**: agent belajar memilih arah yang membawanya ke `goal`.
- **Menghindari obstacle**: NPC belajar tidak menabrak dinding, rintangan, atau area berbahaya.
- **Mini game**: bot belajar pola aksi yang menghasilkan skor atau kemenangan.
- **Gerak karakter**: karakter belajar kontrol sederhana seperti jalan, belok, atau menghindari tabrakan.
- **Strategi sederhana**: agent memilih pendekatan yang lebih menguntungkan dalam situasi terbatas.
- **Combat**: agent belajar memilih aksi seperti menyerang, menghindar, atau mundur.

Poin pentingnya adalah semua contoh ini memiliki pola yang sama: ada `state`, ada `action`, dan ada `reward` atau `penalty` yang memberi sinyal apakah perilaku tersebut baik atau buruk.

Contoh paling sederhana yang ditampilkan adalah:

```text
Agent berada di grid.
Goal berada di titik tertentu.
Agent mendapat reward +1 jika mencapai goal.
Agent mendapat penalty -1 jika menabrak obstacle.
```

Dalam contoh grid ini, `state` bisa dipahami sebagai posisi agent di grid. `Action` bisa berupa bergerak ke atas, bawah, kiri, atau kanan. Jika agent sampai di `goal`, ia mendapat `reward` `+1`. Jika agent menabrak `obstacle`, ia mendapat `penalty` `-1`.

Artinya, agent tidak langsung diberi rute yang pasti. Ia belajar dari pengalaman: langkah yang membawa ke `goal` lebih bernilai, sedangkan langkah yang menabrak `obstacle` perlu dikurangi.

Hasil yang diharapkan dari proses ini adalah perilaku yang lebih rasional. Agent cenderung memilih aksi yang meningkatkan peluang mendapat `reward` dan menghindari aksi yang menghasilkan `penalty`.

Sebelum lanjut, mahasiswa perlu memahami bahwa contoh grid ini adalah versi sederhana dari pengambilan keputusan dalam game. Konsep yang sama bisa dipakai untuk NPC, bot, atau karakter yang harus belajar bertindak di `environment`.

### Inti yang Harus Ditekankan

- **Reinforcement Learning** dalam game terlihat dari agent yang belajar memilih `action` berdasarkan `reward` dan `penalty`.
- Contoh grid menunjukkan tiga elemen utama: `state` berupa posisi, `action` berupa arah gerak, dan `reward` berupa `+1` untuk `goal` serta `-1` untuk `obstacle`.
- Fokusnya bukan menghitung rute langsung, tetapi membentuk perilaku yang lebih baik melalui interaksi dengan environment.

### Transisi ke Slide Berikutnya

Setelah melihat contoh **Reinforcement Learning** dalam game, kita akan membandingkannya dengan **Supervised Learning** untuk memahami perbedaan data, feedback, tujuan, dan tantangan masing-masing pendekatan.

---

## Slide 017 - Supervised vs Reinforcement Learning

### Narasi

Pada slide ini kita membandingkan dua cara sistem belajar dalam game: **supervised learning** dan **reinforcement learning**. Keduanya sama-sama dapat digunakan untuk membuat perilaku NPC yang lebih adaptif, tetapi sumber belajarnya berbeda.

**Supervised learning** bekerja dari **contoh yang sudah diberi label**. Misalnya, data gerakan pemain diberi label `agresif`, `defensif`, atau `eksploitasi`. Sistem belajar memetakan input ke label tersebut, sehingga cocok untuk tugas **prediksi** atau **klasifikasi**. Dalam game, pendekatan ini bisa dipakai untuk mengenali `play style` pemain atau mengategorikan situasi.

**Reinforcement learning** bekerja dari **pengalaman berinteraksi dengan lingkungan**. Tidak ada label benar-salah yang diberikan langsung. Agent memilih `action`, lingkungan memberi `reward` atau penalti, lalu agent memperbarui strateginya. Tujuannya bukan sekadar menebak label, tetapi menemukan **kebijakan aksi terbaik** untuk memaksimalkan hasil jangka panjang.

Perbedaan utamanya terletak pada **sumber data**, **jenis umpan balik**, dan **tujuan akhir**. Supervised learning membutuhkan dataset berlabel yang cukup besar dan konsisten. Reinforcement learning tidak membutuhkan label, tetapi proses latihannya bisa lebih lama karena agent harus mencoba banyak situasi, termasuk kegagalan, sebelum menemukan perilaku yang stabil.

Untuk game, pilihannya bergantung pada masalah. Jika kita ingin mengklasifikasikan pola pemain, `supervised learning` lebih langsung. Jika kita ingin NPC belajar mencapai `goal`, menghindari `obstacle`, atau memilih aksi combat, `reinforcement learning` lebih alami karena perilakunya muncul dari interaksi dengan level.

Sebelum lanjut, mahasiswa perlu memahami bahwa **label** dan **reward** adalah dua sinyal pembelajaran yang berbeda. Label memberi tahu “jawaban yang benar”, sedangkan reward memberi tahu “seberapa baik hasil dari suatu aksi”. Pemahaman ini penting karena menentukan cara kita merancang data, lingkungan, dan evaluasi perilaku NPC.

### Inti yang Harus Ditekankan

- **Supervised learning** belajar dari data berlabel untuk tugas prediksi atau klasifikasi.
- **Reinforcement learning** belajar dari interaksi `agent` dan `environment` melalui `reward`.
- Dalam game, supervised cocok untuk mengenali pola, sedangkan reinforcement cocok untuk perilaku yang berkembang dari pengalaman.
- Tantangan supervised adalah kebutuhan data berlabel; tantangan reinforcement adalah waktu dan stabilitas pelatihan.

### Transisi ke Slide Berikutnya

Setelah memahami dua cara belajar ini, langkah berikutnya adalah melihat struktur dasar reinforcement learning: bagaimana `agent` dan `environment` saling berhubungan.

---

## Slide 018 - Agent dan Environment

### Narasi

Slide ini memperkenalkan dua komponen utama dalam **reinforcement learning**, yaitu:

```text
Agent
Environment
```

Secara intuitif, **Agent** adalah pihak yang mengambil keputusan, sedangkan **Environment** adalah dunia tempat keputusan itu dijalankan. Dalam konteks game, pasangan ini bisa dibayangkan sebagai **NPC** yang bertindak dan **level game** yang menampung seluruh kondisi yang memengaruhi tindakan NPC.

Peran **Agent** dapat diringkas menjadi empat hal:

- mengamati `state` dari lingkungan,
- memilih `action` berdasarkan strategi yang dimiliki,
- menerima `reward` sebagai umpan balik,
- memperbarui strategi agar keputusan berikutnya lebih baik.

Peran **Environment** juga memiliki empat fungsi utama:

- menyediakan `state` yang dapat diamati Agent,
- menerima `action` yang dipilih Agent,
- menghitung `reward` berdasarkan hasil tindakan,
- memperbarui kondisi dunia setelah `action` terjadi.

Hubungan keduanya bersifat siklik. Alurnya dapat dipahami sebagai berikut:

1. `Environment` memberikan `state` kepada `Agent`.
2. `Agent` memilih `action` berdasarkan `state` dan strategi saat ini.
3. `Environment` menerima `action` tersebut dan mengubah kondisi dunia.
4. `Environment` menghasilkan `reward` yang merepresentasikan kualitas tindakan.
5. `Agent` menggunakan `reward` untuk memperbarui strategi.

Contoh sederhana pada slide adalah:

```text
Agent = NPC
Environment = level game
```

Pada contoh ini, **NPC** bertindak sebagai `Agent` karena ia mengamati kondisi level, memilih tindakan, dan belajar dari hasil tindakan tersebut. **Level game** bertindak sebagai `Environment` karena ia menyediakan posisi, objek, aturan, dan konsekuensi yang memengaruhi perilaku NPC.

Yang perlu dipahami mahasiswa sebelum lanjut adalah bahwa `Agent` dan `Environment` tidak dapat dipisahkan. `Agent` tidak belajar dalam ruang kosong; ia belajar dari interaksi dengan `Environment`. Sebaliknya, `Environment` menjadi bermakna ketika ada `Agent` yang mengamati `state`, memilih `action`, dan menerima `reward`.

### Inti yang Harus Ditekankan

- **Agent** adalah pengambil keputusan yang mengamati `state`, memilih `action`, menerima `reward`, dan memperbarui strategi.
- **Environment** adalah dunia yang menyediakan `state`, menerima `action`, menghitung `reward`, dan memperbarui kondisi game.
- Interaksi `Agent` dan `Environment` membentuk siklus pembelajaran: `state` → `action` → `reward` → pembaruan strategi.

### Transisi ke Slide Berikutnya

Setelah memahami siapa yang bertindak dan siapa yang menyediakan dunia, langkah berikutnya adalah melihat apa yang diamati oleh `Agent`. Slide berikutnya akan membahas **State** sebagai representasi kondisi yang menjadi dasar pengambilan keputusan.

---

## Slide 019 - State

### Narasi

Setelah memahami **agent** dan **environment**, langkah berikutnya adalah memahami apa yang sebenarnya diamati oleh agent. Dalam konteks game, **state** adalah representasi kondisi lingkungan pada satu waktu tertentu. State bukan seluruh dunia secara mentah, melainkan kumpulan informasi yang dipilih agar agent dapat menilai situasi dan memilih **action** yang masuk akal.

Intuisi praktisnya: state adalah “pandangan” agent terhadap game. Jika agent adalah NPC, state bisa berisi posisi NPC, posisi pemain, posisi musuh, kondisi medan, atau status tempur. Semakin state informatif, semakin baik keputusan yang dapat diambil. Namun state juga harus cukup ringkas dan dapat diproses, karena informasi yang terlalu banyak dapat membuat keputusan menjadi lambat atau tidak stabil.

Pada grid sederhana, state biasanya cukup diskrit dan mudah divisualisasikan. Contoh:

```text
posisi agent
posisi goal
posisi obstacle
```

Informasi ini sudah cukup untuk mendukung perilaku seperti mencari jalan, menghindari rintangan, atau bergerak menuju tujuan. Agent tidak perlu mengetahui seluruh detail visual level; yang penting adalah posisi relatif terhadap objek yang relevan.

Pada situasi combat, state menjadi lebih kaya karena keputusan agent bergantung pada banyak faktor tempur. Contoh:

```text
health agent
health enemy
distance to enemy
ammo
cover availability
```

Di sini, agent tidak hanya tahu “ada musuh”, tetapi juga seberapa dekat musuh, apakah masih memiliki amunisi, apakah ada cover, dan apakah kondisi health masih aman. Kombinasi nilai-nilai inilah yang menentukan apakah agent sebaiknya menyerang, mundur, mencari perlindungan, atau mengisi ulang amunisi.

Poin penting yang harus dipahami mahasiswa adalah bahwa state bukan sekadar data mentah. State adalah **representasi** yang dirancang untuk mendukung keputusan. Dalam game, representasi ini sering dipilih berdasarkan perilaku yang ingin dibuat: pathfinding, combat, avoidance, atau interaksi dengan pemain. Jika state tidak memuat informasi penting, agent akan tampak bodoh atau tidak responsif. Jika state terlalu kompleks, implementasi dan tuning menjadi lebih sulit.

Sebelum lanjut, mahasiswa perlu menyadari bahwa kualitas perilaku agent sangat bergantung pada kualitas state. State yang baik membuat keputusan lebih konsisten, lebih mudah di-debug, dan lebih mudah dikembangkan. Pada slide berikutnya, kita akan melihat bagaimana state ini diterjemahkan ke dalam bentuk yang lebih konkret untuk game.

### Inti yang Harus Ditekankan

- **State** adalah representasi kondisi yang diamati agent pada satu waktu tertentu.
- State harus cukup informatif untuk mendukung keputusan, tetapi tetap dapat diproses.
- Contoh state dapat berupa posisi pada grid atau nilai tempur seperti `health`, `distance`, `ammo`, dan `cover availability`.
- Kualitas state memengaruhi kualitas perilaku agent dalam game.

### Transisi ke Slide Berikutnya

Selanjutnya, kita akan melihat contoh state yang lebih spesifik untuk enemy dalam game, serta bentuk-bentuk data yang dapat digunakan untuk merepresentasikan state.

---

## Slide 020 - State dalam Game

### Narasi

Pada slide ini, kita memindahkan konsep **state** dari definisi umum ke bentuk yang lebih konkret untuk agent game, khususnya enemy. State bukan sekadar posisi di peta, melainkan kumpulan observasi yang membuat agent mampu menilai situasi dan memilih perilaku yang masuk akal.

Contoh sederhana untuk enemy adalah:

```text
distanceToPlayer
health
canSeePlayer
isInCover
ammo
```

Variabel-variabel ini membentuk gambaran situasi yang cukup padat. `distanceToPlayer` memberi tahu seberapa dekat ancaman, `health` menunjukkan kondisi bertahan hidup, `canSeePlayer` menentukan apakah agent memiliki informasi visual, `isInCover` memberi tahu apakah posisi aman, dan `ammo` memengaruhi kemampuan menyerang.

Dalam implementasi, state dapat memiliki banyak bentuk:

- **angka**, misalnya jarak atau health,
- **kategori**, misalnya kondisi aman atau berbahaya,
- **boolean**, misalnya `canSeePlayer`,
- **vector**, misalnya posisi dan kecepatan,
- **grid**, misalnya peta lingkungan,
- **image**, misalnya frame visual dari kamera virtual,
- **sensor ray**, misalnya hasil raycast ke arah tertentu.

Pilihan bentuk state bergantung pada jenis keputusan yang ingin dibuat. Untuk agent sederhana, state yang terlalu kompleks justru sulit diproses, sedangkan state yang terlalu sedikit membuat keputusan agent tampak bodoh atau tidak konsisten.

Untuk **Q-learning** sederhana, state biasanya dibuat diskrit. Alasannya adalah tabel Q membutuhkan ruang state yang terbatas dan mudah dihitung. Nilai kontinu seperti jarak atau health perlu diubah menjadi label atau bucket agar agent dapat mempelajari nilai untuk setiap situasi.

Contoh diskritisasi state adalah:

```text
NearPlayer
FarFromPlayer
LowHealth
HighHealth
```

Label `NearPlayer` dapat dihasilkan jika `distanceToPlayer` berada di bawah ambang tertentu, sedangkan `LowHealth` dapat diberikan jika `health` berada di bawah batas minimum. Dengan cara ini, agent tidak perlu mengingat semua nilai numerik secara eksak, tetapi cukup mengenali kategori situasi yang relevan.

Sebelum lanjut ke action, mahasiswa perlu memahami bahwa state adalah input keputusan. State harus cukup informatif, konsisten, dan sesuai dengan perilaku yang ingin diajarkan. Jika state tidak menangkap informasi penting, agent tidak akan mampu membedakan situasi yang membutuhkan respons berbeda.

### Inti yang Harus Ditekankan

- **State** adalah representasi observasi agent yang digunakan untuk mengambil keputusan.
- State dapat berupa angka, kategori, boolean, vector, grid, image, atau sensor ray.
- Untuk Q-learning sederhana, state sering didiskritkan menjadi label seperti `NearPlayer` atau `LowHealth`.
- State harus cukup informatif agar agent dapat membedakan situasi yang berbeda.

### Transisi ke Slide Berikutnya

Setelah state menentukan apa yang diketahui agent, langkah berikutnya adalah memahami apa yang bisa dilakukan agent. Pada slide berikutnya, kita akan membahas **action**, yaitu pilihan perilaku yang dapat dieksekusi oleh agent dalam environment.

---

## Slide 021 - Action

### Narasi

Pada slide sebelumnya kita sudah melihat **state** sebagai gambaran kondisi agent. Sekarang kita masuk ke **action**, yaitu pilihan yang dapat dilakukan agent ketika berada pada suatu kondisi. Dalam konteks game, action adalah perintah atau perilaku yang dieksekusi oleh agent terhadap environment.

Action tidak boleh hanya berupa label. Action harus jelas, terdefinisi, dan dapat dijalankan oleh environment. Jika action tidak jelas, agent tidak dapat mengambil keputusan yang konsisten.

Contoh action pada grid biasanya berupa gerakan dasar:

```text
Move Up
Move Down
Move Left
Move Right
```

Pada lingkungan grid, setiap action mengubah posisi agent. Misalnya `Move Up` menggeser agent satu sel ke atas, selama environment mengizinkan. Jika ada dinding atau obstacle, environment yang menentukan apakah action berhasil atau tidak.

Untuk enemy, action bisa berada pada level perilaku yang lebih tinggi:

```text
Patrol
Chase
Attack
Flee
TakeCover
```

Action seperti `Patrol` atau `Chase` biasanya mewakili perilaku NPC. Dalam implementasi game, action ini dapat dipetakan ke state machine, behavior tree, steering behavior, atau perintah gerak yang lebih rendah. Yang penting, action tersebut harus memiliki efek yang dapat diamati di environment.

Contoh lain pada robot menunjukkan action yang lebih dekat ke kontrol motor:

```text
MoveForward
TurnLeft
TurnRight
Shoot
```

Action seperti `MoveForward` dan `TurnLeft` biasanya dieksekusi oleh komponen gerak, sedangkan `Shoot` dapat memicu animasi, proyektil, atau perubahan kondisi environment. Dalam Unity, action dapat berupa pemanggilan fungsi, perubahan transform, trigger animasi, atau perintah ke controller.

Hal penting yang harus dipahami adalah **action space**, yaitu himpunan semua action yang tersedia untuk agent. Action space harus sesuai dengan state dan environment. Jika action terlalu banyak, terlalu ambigu, atau tidak dapat dieksekusi, perilaku agent akan sulit dikendalikan.

Secara praktis, alurnya adalah: agent mengamati state, memilih action, environment mengeksekusi action, lalu kondisi game berubah. Pada tahap ini kita belum membahas bagaimana action dinilai baik atau buruk; itu akan menjadi fokus reward.

### Inti yang Harus Ditekankan

- **Action** adalah pilihan yang dapat dilakukan agent dan harus dapat dieksekusi oleh environment.
- Action dapat berupa gerakan dasar, perilaku NPC, atau perintah kontrol robot.
- **Action space** harus jelas, konsisten, dan sesuai dengan state serta environment.
- Dalam game, action sering menjadi jembatan antara keputusan agent dan perubahan nyata di dunia game.

### Transisi ke Slide Berikutnya

Setelah agent memilih action, environment akan memberi umpan balik. Umpan balik itulah yang disebut **reward**, dan akan kita bahas pada slide berikutnya.

---

## Slide 022 - Reward

### Narasi

**Reward** adalah nilai feedback yang diberikan environment kepada agent setelah agent melakukan suatu action.

Secara intuitif, reward berfungsi seperti sinyal hasil. Sinyal ini tidak langsung memerintahkan agent harus melakukan apa, tetapi memberi tahu apakah action yang baru saja dilakukan membawa konsekuensi yang menguntungkan atau merugikan.

Contoh bentuk reward yang sederhana dapat ditulis sebagai berikut:

```text
+1.0 jika mencapai goal
-1.0 jika jatuh / mati
-0.1 jika menabrak obstacle
-0.01 setiap langkah
```

Pada contoh ini, nilai `+1.0` memberi sinyal bahwa agent berhasil mencapai tujuan. Nilai `-1.0` memberi penalti besar jika agent jatuh atau mati. Nilai `-0.1` memberi penalti sedang jika agent menabrak obstacle. Nilai `-0.01` pada setiap langkah mendorong agent untuk menyelesaikan tugas dengan efisien, bukan hanya bergerak tanpa arah.

Reward adalah bagian sangat penting dalam reinforcement learning karena reward menentukan apa yang dianggap baik atau buruk oleh agent. Agent akan berusaha mencari perilaku yang menghasilkan total reward terbesar dalam jangka panjang.

Oleh karena itu, desain reward harus sangat hati-hati. Reward yang salah dapat membuat agent belajar perilaku yang tidak diinginkan, misalnya menghindari goal karena reward goal terlalu kecil, atau melakukan gerakan berulang hanya untuk mengumpulkan reward kecil yang tidak relevan dengan tujuan utama.

Dalam konteks game, reward dapat digunakan untuk membentuk perilaku agent seperti menavigasi level, menghindari bahaya, mengejar target, atau menyelesaikan misi. Nilai reward yang jelas membantu agent memahami hubungan antara action dan konsekuensi di environment.

Sebelum lanjut, mahasiswa perlu memahami bahwa reward bukan pengganti action. Action adalah pilihan yang dilakukan agent, sedangkan reward adalah umpan balik yang diterima setelah action tersebut dieksekusi.

### Inti yang Harus Ditekankan

- **Reward** adalah nilai numerik yang menjadi feedback dari environment kepada agent.
- Reward memberi tahu apakah action menghasilkan konsekuensi yang baik atau buruk.
- Desain reward yang salah dapat mengarahkan agent ke perilaku yang tidak diinginkan.
- Agent belajar dengan cara mencari perilaku yang memaksimalkan reward secara keseluruhan.

### Transisi ke Slide Berikutnya

Setelah memahami peran reward, langkah berikutnya adalah melihat bagaimana state, action, dan reward saling terhubung dalam satu siklus pembelajaran yang berulang.

---

## Slide 023 - State-Action-Reward Loop

### Narasi

Slide ini menjelaskan **State-Action-Reward Loop**, yaitu siklus dasar dalam reinforcement learning. Intuisinya sederhana: agent tidak langsung tahu perilaku terbaik, tetapi belajar dari pengalaman berulang. Agent melihat keadaan, memilih tindakan, lingkungan berubah, agent menerima umpan balik, lalu melihat keadaan baru.

Diagram pada slide menunjukkan alur dari atas ke bawah:

```text
State saat ini
    ↓
Agent memilih action
    ↓
Environment berubah
    ↓
Agent menerima reward
    ↓
Agent mengamati state baru
    ↓
Agent memperbarui policy
```

Dalam bentuk ringkas, loop ini ditulis sebagai:

```text
S_t → A_t → R_t → S_{t+1}
```

Notasi ini berarti:

- `S_t` adalah **state** pada langkah `t`,
- `A_t` adalah **action** yang dipilih agent,
- `R_t` adalah **reward** yang diterima setelah transisi,
- `S_{t+1}` adalah **state berikutnya** yang diamati agent.

Dalam konteks game, state dapat berupa posisi NPC, jarak ke musuh, kondisi `health`, atau item yang dimiliki. Action dapat berupa bergerak, menyerang, menghindar, atau menunggu. Environment kemudian memperbarui dunia game, misalnya posisi berubah, musuh bereaksi, atau kondisi level berubah. Reward yang sudah dibahas pada slide sebelumnya menjadi sinyal apakah transisi tersebut menguntungkan atau merugikan.

Yang perlu ditekankan adalah bahwa loop ini bersifat **berulang**. Agent tidak hanya mengambil satu keputusan, tetapi terus mengalami rangkaian state, action, dan reward. Dari pengalaman tersebut, agent memperbarui policy, yaitu cara memilih action. Pada slide ini kita belum membahas detail policy; yang penting dipahami adalah posisi policy dalam loop: policy digunakan untuk memilih action, dan pengalaman loop menjadi bahan untuk memperbarui policy.

Sebelum lanjut, mahasiswa perlu memahami bahwa reinforcement learning bukan sekadar “agent memilih action”. Yang menentukan kualitas pembelajaran adalah hubungan sebab-akibat: action memengaruhi environment, environment menghasilkan reward dan state baru, lalu state baru memengaruhi keputusan berikutnya. Jika hubungan ini tidak dipahami, pembahasan policy dan nilai action akan terasa abstrak.

### Inti yang Harus Ditekankan

- **State-Action-Reward Loop** adalah siklus dasar: `S_t → A_t → R_t → S_{t+1}`.
- Agent belajar dari pengalaman berulang, bukan dari aturan tunggal yang langsung benar.
- Reward berfungsi sebagai umpan balik, sedangkan state baru menjadi dasar keputusan berikutnya.
- Pemahaman loop ini menjadi prasyarat untuk memahami policy, karena policy menentukan action apa yang dipilih pada state tertentu.

### Transisi ke Slide Berikutnya

Setelah loop dasar ini dipahami, kita lanjut ke **Policy**, yaitu strategi agent untuk memilih action berdasarkan state.

---

## Slide 024 - Policy

### Narasi

Pada slide ini kita membahas **policy**, yaitu strategi yang digunakan agent untuk memilih `action` berdasarkan `state` yang sedang dialami. Dalam konteks game, policy dapat dipahami sebagai “aturan keputusan” yang menentukan apa yang harus dilakukan oleh karakter, NPC, atau agent ketika berada pada situasi tertentu.

Intuisi sederhananya adalah sebagai berikut: agent tidak hanya mengetahui posisi atau kondisi saat ini, tetapi juga harus memutuskan tindakan berikutnya. Misalnya, jika agent berada dekat `goal`, maka policy dapat mengarahkan agent untuk memilih `action` menuju `goal`. Keputusan inilah yang membedakan agent yang hanya bereaksi acak dengan agent yang memiliki strategi.

Contoh sederhana policy dapat ditulis seperti ini:

```text
Jika state = dekat goal
    pilih action menuju goal
```

Pada contoh tersebut, `state` berupa informasi bahwa agent berada dekat `goal`, sedangkan `action` yang dipilih adalah bergerak menuju `goal`. Dalam game yang lebih kompleks, `state` bisa mencakup jarak ke musuh, kondisi kesehatan, posisi di peta, item yang dimiliki, atau ancaman yang sedang terjadi. Sementara `action` bisa berupa bergerak, menyerang, menghindar, menunggu, atau membuka pintu.

Dalam reinforcement learning, **policy** tidak selalu harus ditulis manual oleh programmer. Policy dapat dipelajari dari pengalaman agent berinteraksi dengan environment. Artinya, agent akan mencoba berbagai `action`, menerima `reward`, mengamati `state` baru, lalu memperbaiki cara memilih `action` di masa depan. Dengan proses ini, policy menjadi semakin baik dalam mencapai tujuan.

Perlu dipahami bahwa policy menjawab pertanyaan utama:

```text
Dalam state ini, action apa yang sebaiknya dipilih?
```

Ini berbeda dengan `reward`, yang memberi tahu seberapa baik hasil dari suatu tindakan. Policy adalah fungsi keputusan, sedangkan `reward` adalah sinyal umpan balik. Dalam pendekatan seperti `Q-learning`, agent belajar nilai dari setiap `action`, kemudian memilih `action` dengan nilai tertinggi. Jadi, policy pada akhirnya menentukan perilaku agent dalam situasi tertentu.

### Inti yang Harus Ditekankan

- **Policy** adalah strategi agent untuk memilih `action` berdasarkan `state`.
- Policy menjawab pertanyaan: “Dalam state ini, action apa yang sebaiknya dipilih?”
- Dalam game, policy dapat menentukan perilaku NPC, seperti bergerak, menyerang, menghindar, atau menuju `goal`.
- Policy dapat dibuat secara eksplisit atau dipelajari dari pengalaman.
- `Q-learning` belajar nilai `action`, lalu memilih `action` dengan nilai tertinggi sebagai dasar policy.

### Transisi ke Slide Berikutnya

Setelah memahami bagaimana policy memilih `action`, langkah berikutnya adalah memahami dalam konteks apa proses belajar ini berlangsung, yaitu melalui episode.

---

## Slide 025 - Episode

### Narasi

**Episode** adalah satu rangkaian percobaan lengkap yang dilakukan `agent` dalam `environment`.

Istilah ini penting karena pembelajaran tidak selalu dinilai dari satu langkah, tetapi dari hasil keseluruhan percobaan.

Secara intuitif, episode seperti satu “permainan kecil” yang bisa diulang.

`Agent` mulai dari kondisi awal, lalu mengambil serangkaian `action` sampai kondisi akhir tercapai.

Contoh alurnya:

1. `Agent` berada di posisi awal.
2. `Agent` memilih dan menjalankan `action`.
3. `Environment` berubah sesuai `action` tersebut.
4. `Agent` mencapai `goal`, gagal, atau waktu habis.
5. Episode dinyatakan selesai.

Setelah episode selesai, `environment` biasanya di-reset ke kondisi awal.

Dengan `reset()`, `agent` dapat mencoba lagi dari awal.

Proses ini memungkinkan `agent` mengumpulkan pengalaman berulang.

Dalam konteks game, satu episode dapat berarti:

- satu level,
- satu match,
- satu percobaan mencapai target,
- satu wave survival.

Yang harus dipahami mahasiswa adalah episode sebagai unit pembelajaran.

`Agent` tidak belajar hanya dari satu `state` atau satu `action`.

`Agent` belajar dari pola yang muncul selama satu episode.

Episode juga memberi batas yang jelas: kapan percobaan dimulai, kapan berakhir, dan kapan lingkungan diulang.

Tanpa episode, sulit menilai apakah strategi `agent` berhasil atau gagal.

### Inti yang Harus Ditekankan

- **Episode** adalah satu sesi percobaan lengkap dari awal sampai akhir.
- Setelah episode selesai, `environment` di-reset dan `agent` mencoba lagi.
- Dalam game, episode dapat berupa level, match, target, atau wave survival.
- Episode menjadi unit dasar untuk menilai keberhasilan dan melanjutkan proses belajar.

### Transisi ke Slide Berikutnya

Setelah memahami episode sebagai satu percobaan lengkap, kita akan melihat keputusan penting yang muncul di dalamnya: kapan `agent` sebaiknya mencoba aksi baru dan kapan sebaiknya memakai aksi yang sudah dianggap terbaik.

---

## Slide 026 - Exploration vs Exploitation

### Narasi

Pada tahap ini, kita melihat dilema dasar yang muncul ketika agent belajar dari lingkungan. Agent tidak hanya perlu memilih aksi yang sudah dianggap baik, tetapi juga perlu mencoba aksi lain yang belum pasti hasilnya. Dalam konteks game, keputusan ini menentukan apakah NPC atau agent hanya mengulang perilaku lama, atau mulai menemukan strategi baru.

**Exploration** berarti agent mencoba aksi baru untuk memperoleh pengalaman.

```text
Mungkin action ini lebih baik?
```

Secara intuitif, agent sedang “mencoba-coba” di lingkungan game. Misalnya, agent bisa memilih jalur yang belum pernah dicoba, menyerang lawan dengan cara berbeda, atau mengambil item yang belum dievaluasi. Tujuannya adalah menemukan informasi baru yang mungkin meningkatkan performa di masa depan.

**Exploitation** berarti agent menggunakan aksi yang sudah diketahui paling baik berdasarkan pengalaman sebelumnya.

```text
Pilih action dengan nilai tertinggi.
```

Dalam situasi ini, agent cenderung memilih `action` yang sudah memberikan hasil paling menguntungkan. Jika agent sudah tahu bahwa satu jalur lebih cepat, satu strategi bertahan lebih aman, atau satu keputusan menghasilkan nilai lebih besar, maka eksploitasi membuat agent berperilaku lebih stabil dan efisien.

Namun, kedua pilihan ini tidak bisa dipisahkan. Jika agent hanya melakukan eksploitasi, ia akan terjebak pada strategi yang sudah diketahui. Akibatnya, agent sulit menemukan perilaku baru, misalnya rute alternatif, pola serangan baru, atau cara bertahan yang lebih baik.

Sebaliknya, jika agent terlalu banyak melakukan eksplorasi, perilakunya dapat tampak acak dan tidak konsisten. Dalam game, hal ini bisa membuat NPC terasa tidak rasional, agent terlalu lambat belajar, atau performa selama proses belajar tidak stabil.

Karena itu, mahasiswa perlu memahami bahwa **exploration** dan **exploitation** adalah dua sisi dari proses belajar yang sama. Agent yang baik harus mampu menyeimbangkan keduanya: cukup mencoba hal baru agar tidak terjebak, tetapi cukup memanfaatkan pengetahuan yang sudah ada agar tetap efektif.

Sebelum lanjut, poin penting yang harus dipahami adalah:

- **Exploration** adalah mencari pengalaman baru.
- **Exploitation** adalah memanfaatkan pilihan terbaik yang sudah diketahui.
- Keseimbangan keduanya menentukan kualitas perilaku agent dalam game.

### Inti yang Harus Ditekankan

- **Exploration** membantu agent menemukan `action` baru dan memperluas pengetahuan tentang lingkungan.
- **Exploitation** membantu agent memilih `action` yang sudah terbukti bernilai tinggi.
- Terlalu banyak eksploitasi membuat agent kaku; terlalu banyak eksplorasi membuat agent tampak acak.
- Dalam game, keseimbangan ini memengaruhi perilaku NPC, strategi agent, dan proses belajar.

### Transisi ke Slide Berikutnya

Setelah memahami dua pilihan ini, langkah berikutnya adalah melihat bagaimana agent dapat menyeimbangkannya secara sederhana melalui strategi **epsilon-greedy**.

---

## Slide 027 - Epsilon-Greedy

### Narasi

**Epsilon-greedy** adalah strategi sederhana untuk membantu agent memilih `action` ketika ia harus menyeimbangkan dua hal: mencoba hal baru dan memakai pilihan yang sudah dianggap baik. Intuisinya, agent tidak perlu selalu memilih `action` terbaik yang diketahui, karena mungkin ada `action` lain yang belum dicoba dan ternyata lebih menguntungkan. Namun, agent juga tidak boleh terlalu sering memilih secara acak, karena perilakunya akan sulit diprediksi dan proses belajarnya menjadi tidak efisien.

Strategi ini dapat dirumuskan secara sederhana sebagai berikut:

```text
Dengan probabilitas epsilon:
    pilih action random

Selain itu:
    pilih action terbaik
```

Artinya, pada setiap keputusan, agent melempar peluang sebesar `epsilon` untuk memilih `action` secara acak. Jika peluang tersebut tidak terjadi, agent memilih `action` yang saat ini dinilai terbaik. Dalam konteks game, pola ini mirip dengan NPC yang biasanya memakai strategi yang sudah dikenal, tetapi sesekali mencoba gerakan atau respons lain agar tidak terjebak pada perilaku yang kaku.

Contoh yang paling mudah dipahami adalah `epsilon = 0.2`. Nilai ini berarti agent melakukan eksplorasi sebesar 20% dan eksploitasi sebesar 80%. Dengan kata lain, dari sepuluh keputusan, sekitar dua keputusan dapat dipilih secara acak, sedangkan delapan keputusan lainnya mengikuti pilihan terbaik yang sudah diketahui. Proporsi ini penting karena memberi ruang untuk menemukan strategi baru tanpa membuat agent tampak terlalu acak.

Selama `training`, nilai `epsilon` tidak harus tetap. Biasanya, `epsilon` diturunkan secara bertahap:

```text
awal training: epsilon tinggi
akhir training: epsilon rendah
```

Pada awal `training`, agent masih memiliki sedikit pengalaman, sehingga `epsilon` tinggi membantu ia mencoba banyak `action`. Seiring waktu, ketika agent sudah menemukan pola yang lebih baik, `epsilon` diturunkan agar agent lebih sering memakai `action` terbaik. Proses ini sering disebut penurunan `epsilon`, dan tujuannya adalah membuat perilaku agent berubah dari fase mencari menjadi fase memanfaatkan.

Yang perlu dipahami mahasiswa adalah bahwa `epsilon` bukan sekadar angka acak, melainkan pengatur keseimbangan antara eksplorasi dan eksploitasi. Jika `epsilon` terlalu tinggi, agent akan sering memilih `action` acak sehingga sulit membentuk strategi yang stabil. Sebaliknya, jika `epsilon` terlalu rendah sejak awal, agent mungkin cepat memakai strategi yang belum tentu optimal karena belum cukup banyak mencoba alternatif.

Dalam implementasi sederhana, keputusan ini dapat dilakukan dengan membandingkan nilai acak dengan `epsilon`. Jika nilai acak lebih kecil dari `epsilon`, agent memilih `action` acak; jika tidak, agent memilih `action` terbaik. Pola ini sederhana, mudah diuji, dan sering menjadi dasar perilaku keputusan agent sebelum nilai `action` dipelajari secara lebih formal.

### Inti yang Harus Ditekankan

- **Epsilon-greedy** menyeimbangkan **eksplorasi** dan **eksploitasi** dengan peluang `epsilon`.
- `epsilon = 0.2` berarti sekitar **20% eksplorasi** dan **80% eksploitasi**.
- Selama `training`, `epsilon` biasanya **diturunkan** agar agent beralih dari mencoba banyak `action` ke memakai `action` terbaik.
- Jika `epsilon` terlalu tinggi, perilaku agent terlalu acak; jika terlalu rendah, agent sulit menemukan strategi baru.

### Transisi ke Slide Berikutnya

Setelah memahami cara memilih `action` dengan **epsilon-greedy**, langkah berikutnya adalah memahami bagaimana nilai `action` itu sendiri dapat dipelajari. Slide berikutnya akan membahas **Q-Learning**, yaitu cara agent menilai dan menyimpan kebaikan `action` pada `state` tertentu.

---

## Slide 028 - Q-Learning

### Narasi

**Q-learning** adalah algoritma **reinforcement learning** yang sederhana dan sering digunakan sebagai pintu masuk untuk memahami bagaimana agent belajar mengambil keputusan.

Dalam konteks game, agent bisa berupa NPC, karakter, robot, atau unit yang harus memilih tindakan berdasarkan kondisi lingkungan.

Inti dari Q-learning adalah menilai pasangan **state** dan **action**.

```text
Q(state, action)
```

Nilai ini menjawab pertanyaan sederhana:

```text
Seberapa baik memilih action tertentu pada state tertentu?
```

Misalnya, `state` dapat menggambarkan posisi agent, kondisi level, atau situasi permainan. `Action` dapat berupa `Up`, `Down`, `Left`, `Right`, `attack`, `wait`, atau keputusan lain yang tersedia.

Nilai Q tidak hanya disimpan sebagai angka lepas. Q-learning menyimpan nilai tersebut dalam struktur yang disebut **Q-table**.

```text
Q-table
```

Q-table berfungsi sebagai tempat penyimpanan nilai Q untuk berbagai `state` dan `action`.

Dengan Q-table, agent dapat melihat nilai dari beberapa `action` pada `state` yang sama, lalu memilih `action` yang nilainya paling tinggi.

Namun, sebelum nilai Q terbentuk dengan baik, agent perlu mengalami proses belajar. Ia mencoba `action`, mengamati hasil, dan memperbarui nilai Q berdasarkan pengalaman.

Proses inilah yang membuat Q-learning cocok untuk pembelajaran dasar RL, terutama ketika `state` dan `action` masih terbatas serta dapat diwakili secara diskrit.

Sebelum lanjut, mahasiswa perlu memahami bahwa Q-learning bukan sekadar memilih `action` acak. Fokusnya adalah membangun estimasi nilai untuk setiap pasangan `state` dan `action`.

### Inti yang Harus Ditekankan

- **Q-learning** belajar nilai keputusan melalui pasangan `Q(state, action)`.
- Nilai Q menunjukkan seberapa baik suatu `action` pada `state` tertentu.
- Nilai Q disimpan dalam **Q-table** sebagai dasar pengambilan keputusan.
- Q-learning cocok untuk lingkungan dengan `state` dan `action` yang relatif terbatas.

### Transisi ke Slide Berikutnya

Setelah memahami apa yang diukur oleh Q-learning, kita akan melihat bagaimana nilai Q disimpan dan dibaca secara konkret melalui Q-table.

---

## Slide 029 - Q-Table

### Narasi

**Q-table** adalah bentuk penyimpanan nilai yang paling sederhana dalam **Q-learning**. Tabel ini menjawab pertanyaan praktis: ketika agent berada pada suatu state, action mana yang paling menguntungkan?

Slide ini menggunakan contoh kecil:

```text
State:
S0, S1, S2

Action:
Up, Down, Left, Right
```

Setiap baris pada tabel mewakili satu state, sedangkan setiap kolom mewakili satu action. Nilai di dalam sel menunjukkan estimasi keuntungan dari memilih action tersebut pada state tersebut.

| State | Up | Down | Left | Right |
|---|---:|---:|---:|---:|
| S0 | 0.2 | 0.1 | -0.1 | 0.5 |
| S1 | 0.0 | 0.3 | 0.2 | 0.1 |
| S2 | 0.8 | -0.2 | 0.0 | 0.4 |

Cara membaca tabel ini cukup langsung:

- Pada state `S0`, nilai action `Right` adalah `0.5`.
- Nilai tersebut lebih tinggi daripada `Up` yaitu `0.2`, `Down` yaitu `0.1`, dan `Left` yaitu `-0.1`.
- Maka, jika agent berada di `S0`, action terbaik adalah `Right`.

Prinsip utamanya adalah memilih action dengan nilai **Q** terbesar pada state saat ini. Nilai yang lebih tinggi berarti action tersebut diperkirakan menghasilkan keuntungan lebih besar dalam jangka panjang.

Perlu diperhatikan bahwa nilai **Q** tidak harus selalu positif. Nilai negatif menunjukkan bahwa action tersebut cenderung merugikan, nilai nol menunjukkan kondisi netral, dan nilai positif menunjukkan action yang menguntungkan. Nilai ini juga bukan probabilitas, melainkan estimasi nilai dari keputusan yang diambil.

Dalam konteks game, struktur seperti ini dapat digunakan untuk keputusan gerak NPC pada situasi diskrit. Misalnya, NPC memilih arah `Up`, `Down`, `Left`, atau `Right` berdasarkan state lingkungan yang sudah diringkas. Kelebihannya adalah sederhana, mudah dibaca, dan mudah divisualisasikan. Namun, jika jumlah state dan action terlalu besar, tabel akan menjadi sangat besar dan kurang praktis.

Sebelum lanjut, mahasiswa perlu memahami bahwa **Q-table** bukan sekadar tabel nilai acak. Ia merupakan representasi pengetahuan agent tentang hubungan antara state dan action. Agent menggunakan tabel ini untuk mengambil keputusan, dan nilai di dalamnya biasanya terbentuk dari pengalaman serta proses pembelajaran.

### Inti yang Harus Ditekankan

- **Q-table** menyimpan nilai `Q(state, action)` untuk setiap pasangan state dan action.
- Action terbaik dipilih dengan mengambil nilai terbesar pada baris state saat ini.
- Nilai **Q** bukan probabilitas, melainkan estimasi keuntungan jangka panjang dari suatu action.
- Nilai negatif menandakan action yang kurang menguntungkan, sedangkan nilai positif menandakan action yang lebih menguntungkan.
- Untuk game, **Q-table** cocok untuk keputusan diskrit seperti arah gerak NPC, tetapi skalanya terbatas jika state dan action terlalu banyak.

### Transisi ke Slide Berikutnya

Setelah memahami cara membaca **Q-table**, kita akan menerapkan konsep ini pada environment grid sederhana. Di sana, agent akan belajar memilih jalur menuju goal dengan mempertimbangkan start, obstacle, dan reward yang diberikan.

---

## Slide 030 - Q-Learning dalam Grid

### Narasi

Pada slide ini kita melihat **Q-learning** dalam bentuk environment yang paling mudah divisualisasikan, yaitu **grid**. Grid membantu mahasiswa membayangkan state, action, dan reward secara konkret sebelum masuk ke formula update.

Environment yang ditampilkan adalah papan grid sederhana:

```text
S . . .
. # . .
. # . G
. . . .
```

Keterangan simbol:

- `S` adalah posisi awal agen.
- `G` adalah goal atau tujuan.
- `#` adalah obstacle yang tidak boleh dilewati.
- `.` adalah sel kosong yang dapat dilalui.

Setiap sel pada grid dapat dipandang sebagai **state** yang berbeda. Dari satu state, agen memiliki beberapa pilihan **action**, yaitu `Up`, `Down`, `Left`, dan `Right`. Pilihan action inilah yang menentukan state berikutnya.

Reward dirancang untuk mengarahkan perilaku agen:

- `+1` jika agen mencapai `G`.
- `-1` jika agen menabrak `#`.
- `-0.01` untuk setiap langkah yang dilakukan.

Reward kecil negatif pada setiap langkah penting. Tanpa reward ini, agen mungkin hanya menghindari obstacle tetapi tidak terdorong untuk menemukan jalur yang efisien. Dengan penalti langkah, agen belajar memilih jalur yang lebih pendek menuju goal.

Dalam konteks game, environment seperti ini dapat dianalogikan dengan NPC yang belajar bergerak di area terbatas, misalnya ruang, koridor, atau peta sederhana. Agent tidak langsung diberi jalur lengkap; ia belajar dari interaksi dengan environment. Setiap kali agen memilih action, ia menerima konsekuensi berupa reward atau penalti, lalu memperbarui nilai preferensi untuk action tersebut.

Intuisi praktisnya adalah sebagai berikut:

1. Agen berada di state tertentu.
2. Agen memilih action, misalnya `Right`.
3. Agen berpindah ke state berikutnya.
4. Agen menerima reward sesuai aturan environment.
5. Nilai Q untuk state dan action sebelumnya diperbarui berdasarkan pengalaman tersebut.

Proses berulang inilah yang membuat agen secara bertahap menemukan jalur yang baik menuju `G`. Mahasiswa perlu memahami bahwa Q-learning bukan sekadar mencari path sekali jalan, tetapi proses pembelajaran dari trial and error.

Sebelum lanjut, hal penting yang harus dipahami adalah hubungan antara **state**, **action**, **reward**, dan **state berikutnya**. Jika keempat elemen ini sudah jelas, mahasiswa akan lebih mudah memahami bagaimana nilai Q diperbarui pada slide berikutnya.

### Inti yang Harus Ditekankan

- Grid adalah representasi sederhana dari **state space** yang dapat dipelajari oleh agen.
- Action `Up`, `Down`, `Left`, dan `Right` menentukan transisi antar state.
- Reward `+1`, `-1`, dan `-0.01` membentuk tujuan belajar: mencapai goal, menghindari obstacle, dan memilih jalur efisien.
- Q-learning bekerja melalui pengalaman berulang, bukan dari aturan jalur yang langsung diberikan.

### Transisi ke Slide Berikutnya

Setelah environment, action, dan reward dipahami, langkah berikutnya adalah melihat bagaimana nilai Q diperbarui setiap kali agen mengambil action. Di situlah formula update Q-learning menjadi inti dari proses pembelajaran.

---

## Slide 031 - Q-Learning Update Formula

### Narasi

Pada slide ini kita masuk ke inti proses pembelajaran Q-learning, yaitu bagaimana nilai sebuah action diperbarui setelah agent mengambil keputusan.

```text
Q(s,a) ← Q(s,a) + α [ r + γ max Q(s',a') - Q(s,a) ]
```

Rumus ini bukan sekadar persamaan matematika, tetapi aturan koreksi nilai. Agent memiliki perkiraan awal tentang seberapa baik action `a` pada state `s`. Setelah action dijalankan, agent menerima `r` dan berpindah ke `s'`. Nilai lama `Q(s,a)` kemudian disesuaikan agar lebih dekat dengan target `r + γ max Q(s',a')`.

Komponen penting:

- `s` adalah **state saat ini**, misalnya posisi agent pada grid.
- `a` adalah **action yang dipilih**, seperti `Up`, `Down`, `Left`, atau `Right`.
- `r` adalah **reward** yang diterima, misalnya `+1` jika mencapai goal, `-1` jika menabrak obstacle, atau `-0.01` untuk biaya langkah.
- `s'` adalah **state berikutnya** setelah action dijalankan.
- `α` adalah **learning rate**, yaitu seberapa besar agent mau mengubah nilai lamanya.
- `γ` adalah **discount factor**, yaitu seberapa penting keuntungan masa depan dibandingkan reward sekarang.

Intuisi praktisnya: bagian `r` menilai hasil langsung dari action, sedangkan `γ max Q(s',a')` menilai seberapa baik posisi yang akan dicapai. Jika action membawa agent ke state yang masih menjanjikan, nilai `Q(s,a)` akan cenderung naik. Jika action membawa agent ke posisi buruk atau reward negatif, nilai `Q(s,a)` akan cenderung turun.

Dalam konteks game, formula ini menjadi dasar perilaku NPC yang belajar dari lingkungan. Agent tidak perlu diprogram untuk setiap jalur; cukup diberi reward, action, dan state. Melalui pengulangan, `Q(s,a)` membentuk kebijakan yang mengarahkan agent menuju goal, menghindari obstacle, atau memilih strategi yang lebih menguntungkan.

Yang harus dipahami mahasiswa sebelum lanjut adalah: Q-learning memperbarui nilai action berdasarkan pengalaman, bukan menghitung jalur secara langsung. Nilai `Q(s,a)` adalah perkiraan kualitas action pada state tertentu, dan update formula adalah mekanisme yang membuat perkiraan itu semakin akurat.

### Inti yang Harus Ditekankan

- Formula Q-learning adalah **update rule** yang memperbaiki nilai `Q(s,a)` setelah agent mengalami `r` dan berpindah ke `s'`.
- `α` mengontrol seberapa cepat agent belajar, sedangkan `γ` mengontrol seberapa besar nilai keuntungan masa depan.
- `max Q(s',a')` menunjukkan bahwa agent menilai state berikutnya berdasarkan action terbaik yang mungkin dilakukan dari state itu.
- Tujuan utama formula ini adalah membuat agent secara bertahap memilih action yang menghasilkan reward lebih baik.

### Transisi ke Slide Berikutnya

Setelah melihat bentuk formula, selanjutnya kita akan membuka maknanya secara lebih sederhana: bagaimana reward sekarang dan perkiraan keuntungan masa depan menentukan apakah nilai action naik atau turun.

---

## Slide 032 - Makna Formula Q-Learning

### Narasi

Pada slide ini, kita tidak perlu langsung masuk ke perhitungan matematis yang berat. Yang penting adalah memahami **makna** dari update `Q-value`.

```text
Nilai action diperbarui berdasarkan:
reward sekarang
+
perkiraan keuntungan masa depan
```

Artinya, setiap kali agent melakukan `action` pada suatu `state`, sistem menilai apakah `action` itu menguntungkan. Penilaian ini tidak hanya melihat `reward` yang diterima saat itu, tetapi juga memperkirakan keuntungan yang mungkin diperoleh di langkah-langkah berikutnya.

Dengan kata lain, `Q-value` adalah **perkiraan nilai** dari suatu `action` pada suatu `state`. Semakin tinggi `Q-value`, semakin baik `action` tersebut dianggap untuk `state` itu.

Jika `action` menghasilkan `reward` yang baik, maka `Q-value` akan naik. Sebaliknya, jika `action` menghasilkan `reward` yang buruk, `Q-value` akan turun.

```text
Jika reward baik:
Q-value naik

Jika reward buruk:
Q-value turun
```

Dalam konteks game, proses ini bisa dibayangkan pada perilaku NPC. Misalnya, `state` bisa berupa posisi NPC, jarak ke musuh, atau kondisi kesehatan. `Action` bisa berupa bergerak, menyerang, atau mundur. `Reward` bisa berupa poin untuk menang, penalti untuk terkena serangan, atau bonus untuk mencapai tujuan.

Setiap episode, agent mencoba berbagai `action`. Melalui umpan balik `reward`, nilai `Q-value` untuk pasangan `state-action` yang menguntungkan akan perlahan menjadi lebih besar.

Prosesnya dapat dipahami sebagai berikut:

1. Agent berada pada suatu `state`.
2. Agent memilih satu `action`.
3. Lingkungan memberikan `reward` dan `state` berikutnya.
4. `Q-value` untuk `state-action` yang dipilih diperbarui.
5. Proses diulang hingga agent lebih sering memilih `action` yang menghasilkan hasil lebih baik.

Intuisi praktisnya adalah: agent tidak langsung tahu `action` terbaik. Agent belajar dari pengalaman, lalu memperbarui perkiraannya secara bertahap.

Sebelum lanjut, mahasiswa perlu memahami bahwa `Q-value` bukan nilai tetap. Nilai ini berubah setiap kali ada pengalaman baru, dan perubahan itu mengarahkan agent untuk memilih `action` yang lebih baik di masa depan.

### Inti yang Harus Ditekankan

- `Q-value` adalah **perkiraan nilai** dari `action` pada suatu `state`.
- Update `Q-value` dipengaruhi oleh `reward` sekarang dan **perkiraan keuntungan masa depan**.
- `Reward` baik membuat `Q-value` naik, sedangkan `reward` buruk membuat `Q-value` turun.
- Agent belajar secara bertahap dengan memperbarui nilai `Q-value` dari pengalaman.
- Dalam game, mekanisme ini dapat membantu NPC memilih `action` yang lebih rasional untuk mencapai tujuan.

### Transisi ke Slide Berikutnya

Setelah memahami makna update `Q-value`, langkah berikutnya adalah melihat seberapa besar perubahan nilai tersebut terjadi. Di slide berikutnya, kita akan membahas `learning rate` sebagai pengatur ukuran update.

---

## Slide 033 - Learning Rate

### Narasi

Slide ini menjelaskan **learning rate**, yaitu parameter yang biasanya ditulis:

```text
α
```

Learning rate menentukan seberapa besar **update nilai Q** dilakukan ketika agent menerima reward baru. Dengan kata lain, `α` mengatur seberapa cepat agent mengubah perkiraannya tentang kualitas suatu `action` pada suatu `state`.

Secara intuitif, `α` seperti “kecepatan belajar”. Jika `α` kecil, agent hanya sedikit menyesuaikan nilai `Q` lama. Jika `α` besar, agent lebih cepat mengikuti reward yang baru diterima.

Contoh sederhana:

```text
α = 0.1
```

Artinya, agent tidak langsung mengganti seluruh nilai `Q` lama dengan reward baru, tetapi hanya menggesernya sebagian. Cara ini membuat proses belajar lebih terkendali.

Perhatikan efek nilai `α`:

- **Nilai kecil**
  - belajar lebih pelan,
  - lebih stabil,
  - kurang mudah terpengaruh reward yang tidak konsisten.
- **Nilai besar**
  - belajar lebih cepat,
  - bisa tidak stabil,
  - nilai `Q` dapat berubah-ubah terlalu tajam.

Untuk praktikum, rentang yang aman untuk dicoba adalah:

```text
α = 0.1 sampai 0.5
```

Rentang ini memberi mahasiswa ruang untuk mengamati perbedaan perilaku agent: terlalu kecil membuat pembelajaran lambat, sedangkan terlalu besar dapat membuat agent sulit menemukan perilaku yang konsisten.

Sebelum lanjut, mahasiswa perlu memahami bahwa `α` bukan menentukan reward itu sendiri, melainkan **seberapa besar pengaruh reward baru terhadap nilai Q yang sudah ada**. Pemahaman ini penting karena dalam game, stabilitas perilaku NPC atau agent sangat bergantung pada cara parameter belajar diatur.

### Inti yang Harus Ditekankan

- **Learning rate** dilambangkan dengan `α`.
- `α` menentukan **seberapa besar update nilai Q** dilakukan.
- Nilai kecil membuat belajar **pelan dan stabil**; nilai besar membuat belajar **cepat tetapi berisiko tidak stabil**.
- Untuk praktikum, gunakan `α` sekitar `0.1` sampai `0.5`.

### Transisi ke Slide Berikutnya

Setelah memahami seberapa cepat agent memperbarui nilai Q, langkah berikutnya adalah memahami seberapa jauh agent mempertimbangkan reward masa depan. Hal ini dibahas pada **discount factor**.

---

## Slide 034 - Discount Factor

### Narasi

Pada slide ini kita membahas **discount factor**, biasanya ditulis:

```text
γ
```

Discount factor menentukan seberapa penting **reward masa depan** bagi agent. Dalam konteks game, agent tidak hanya menilai reward yang diterima sekarang, tetapi juga reward yang mungkin diperoleh beberapa langkah kemudian.

Contoh nilai yang umum digunakan:

```text
γ = 0.9
```

Nilai ini berarti reward di masa depan masih sangat diperhitungkan, tetapi nilainya sedikit berkurang seiring jarak waktu.

Jika `γ` tinggi:

- agent lebih mempertimbangkan **reward jangka panjang**.
- agent cenderung memilih tindakan yang mungkin tidak memberi keuntungan langsung, tetapi membawa ke tujuan akhir.

Jika `γ` rendah:

- agent lebih fokus pada **reward langsung**.
- agent bisa menjadi terlalu reaktif dan kurang merencanakan langkah ke depan.

Untuk game dengan tujuan seperti mencapai `goal`, nilai `γ` biasanya cukup tinggi. Misalnya, agent di maze perlu melewati beberapa langkah tanpa reward besar sebelum akhirnya mendapat reward mencapai tujuan. Jika `γ` terlalu rendah, agent mungkin tidak cukup termotivasi untuk menempuh jalur menuju `goal`.

Secara praktis, discount factor membantu menyeimbangkan antara **keuntungan sekarang** dan **keuntungan nanti**. Dalam desain perilaku agent, hal ini memengaruhi apakah agent lebih agresif, lebih sabar, atau lebih berorientasi pada penyelesaian tugas.

Sebelum lanjut, mahasiswa perlu memahami bahwa `γ` bukan pengganti reward, melainkan faktor yang memberi bobot pada reward masa depan. Nilai `γ` yang tepat membuat agent belajar strategi yang lebih stabil dan sesuai tujuan game.

### Inti yang Harus Ditekankan

- **Discount factor** biasanya ditulis `γ` dan menentukan bobot **reward masa depan**.
- Nilai `γ` tinggi membuat agent lebih memperhatikan **tujuan jangka panjang**, seperti mencapai `goal`.
- Nilai `γ` rendah membuat agent lebih fokus pada **reward langsung** dan bisa kurang merencanakan langkah ke depan.
- Untuk game dengan tujuan akhir, `γ` biasanya cukup tinggi agar agent tidak terlalu reaktif.

### Transisi ke Slide Berikutnya

Setelah memahami bagaimana `γ` memberi bobot pada reward masa depan, langkah berikutnya adalah membahas bagaimana reward itu sendiri dirancang. Di slide berikutnya kita akan melihat **reward design**, termasuk contoh reward untuk mencapai `goal`, menabrak obstacle, dan penalty setiap langkah.

---

## Slide 035 - Reward Design

### Narasi

**Reward design** adalah proses menentukan bagaimana **agent** menilai kualitas suatu keadaan atau tindakan dalam game. Angka reward bukan sekadar nilai matematis, tetapi cara kita menerjemahkan tujuan desain menjadi sinyal yang dapat dipelajari. Jika reward dirancang dengan tepat, agent akan belajar membedakan perilaku yang membawa tujuan dari perilaku yang hanya terlihat menguntungkan sesaat.

Contoh sederhana reward dapat ditulis sebagai berikut:

```text
+1.0 mencapai goal
-1.0 menabrak obstacle
-0.01 setiap langkah
```

Dalam contoh ini, setiap baris memiliki peran yang berbeda:

- `+1.0 mencapai goal` memberi sinyal bahwa tujuan utama telah tercapai.
- `-1.0 menabrak obstacle` memberi konsekuensi negatif ketika agent melanggar batasan lingkungan.
- `-0.01 setiap langkah` memberi tekanan kecil agar agent tidak bergerak tanpa arah dan cenderung mencari jalur yang lebih efisien.

Perhatikan bahwa nilai `-0.01` sengaja dibuat kecil. Nilainya harus cukup kecil agar agent tidak takut bergerak, tetapi cukup konsisten agar setiap langkah yang tidak perlu tetap terasa merugikan. Dengan cara ini, agent didorong untuk menyelesaikan tugas, bukan hanya bertahan di tempat yang aman.

Masalah muncul ketika skala reward tidak seimbang. Reward yang terlalu besar dapat membuat agent terlalu sensitif terhadap satu sinyal, sedangkan reward yang terlalu kecil dapat membuat agent sulit membedakan perilaku baik dan buruk. Akibatnya, proses penyesuaian perilaku menjadi lambat, tidak stabil, atau menghasilkan strategi yang tidak sesuai tujuan.

Contoh desain yang buruk adalah:

```text
+100 untuk mendekati goal setiap frame
```

Reward seperti ini memberi nilai sangat besar hanya karena agent berada dekat goal, bukan karena benar-benar mencapai goal. Akibatnya, agent mungkin hanya berputar di sekitar goal, bergerak maju-mundur, atau mencari posisi yang terus memberikan reward tinggi tanpa menyelesaikan tugas. Perilaku ini menunjukkan bahwa reward harus menggambarkan tujuan secara presisi, bukan hanya memberikan angka besar pada situasi yang tampak menguntungkan.

Sebelum lanjut, mahasiswa perlu memahami bahwa **reward design** adalah bentuk spesifikasi tujuan. Nilai reward menentukan apa yang dianggap berhasil, apa yang harus dihindari, dan bagaimana efisiensi perilaku dinilai. Jika reward tidak dirancang dengan hati-hati, agent dapat menemukan celah yang menguntungkan secara numerik tetapi tidak sesuai dengan maksud game.

### Inti yang Harus Ditekankan

- **Reward** adalah sinyal numerik yang menerjemahkan tujuan desain menjadi perilaku agent.
- Reward harus seimbang: reward utama cukup kuat, reward negatif cukup jelas, dan step penalty cukup kecil untuk mendorong efisiensi.
- Reward yang terlalu besar atau terlalu kecil dapat membuat proses penyesuaian perilaku menjadi buruk.
- Reward yang tidak presisi dapat mendorong agent mengeksploitasi celah, bukan menyelesaikan tugas.

### Transisi ke Slide Berikutnya

Dari contoh ini, kita dapat melihat bahwa reward yang tampak sederhana masih bisa disalahartikan oleh agent. Pada slide berikutnya, kita akan membahas bagaimana agent dapat menemukan cara mendapatkan reward yang tidak sesuai tujuan designer, yaitu **reward hacking**.

---

## Slide 036 - Reward Hacking

### Narasi

**Reward hacking** adalah situasi di mana agent berhasil menaikkan nilai `reward` yang diberikan, tetapi perilaku yang muncul tidak sesuai dengan tujuan yang ingin dicapai oleh designer. Intuisinya sederhana: agent tidak memahami maksud di balik angka reward; agent hanya mencari cara untuk membuat angka tersebut menjadi besar. Karena itu, jika reward dirancang tidak hati-hati, agent bisa menemukan celah yang secara teknis menguntungkan tetapi secara gameplay salah.

Beberapa bentuk reward hacking yang perlu diperhatikan:

- agent berputar di area yang memberi reward kecil secara terus-menerus,
- agent menghindari `goal` karena reward per langkah lebih tinggi,
- agent melakukan aksi aneh yang memaksimalkan reward tetapi tidak menyelesaikan game.

Contoh pertama sering terjadi ketika ada reward kecil yang bisa diperoleh berulang kali. Dari sudut pandang agent, perilaku itu stabil dan menguntungkan. Namun dari sudut pandang game, agent tidak menyelesaikan misi, tidak mencapai `goal`, dan tidak menunjukkan perilaku yang diharapkan. Ini menunjukkan bahwa reward kecil yang berulang dapat menjadi jebakan jika tidak dibatasi oleh tujuan akhir.

Contoh kedua terjadi ketika reward per langkah terlalu besar. Agent bisa memilih untuk terus bergerak tanpa tujuan daripada menyelesaikan episode. Dalam kasus ini, agent tidak gagal karena tidak mampu belajar; agent justru berhasil belajar, tetapi belajar terhadap sinyal yang salah.

Masalah ini juga bisa muncul ketika agent melakukan aksi yang tampak tidak masuk akal bagi pemain, tetapi menghasilkan nilai reward yang lebih tinggi. Oleh karena itu, mahasiswa perlu memahami bahwa desain reward bukan hanya soal memberi angka, melainkan tentang memastikan angka tersebut benar-benar mendeskripsikan tujuan perilaku yang diinginkan.

```text
Reward harus mendeskripsikan tujuan dengan hati-hati.
```

Sebelum lanjut ke algoritma pembelajaran, hal penting yang harus dipahami adalah: reward yang buruk dapat menghasilkan perilaku yang buruk, meskipun proses pembelajarannya berjalan dengan benar. Reward hacking mengingatkan kita bahwa kualitas hasil sangat bergantung pada kualitas sinyal yang diberikan oleh environment.

### Inti yang Harus Ditekankan

- **Reward hacking** terjadi ketika agent memaksimalkan `reward` tetapi perilakunya tidak sesuai tujuan designer.
- Agent tidak memahami maksud reward; agent hanya merespons sinyal numerik yang diberikan environment.
- Desain reward harus hati-hati agar tidak memberi celah untuk perilaku berulang, menghindari `goal`, atau melakukan aksi tidak wajar.
- Masalah reward hacking menunjukkan bahwa kualitas perilaku agent sangat bergantung pada kualitas `reward function`.

### Transisi ke Slide Berikutnya

Setelah memahami bahwa reward harus dirancang agar tidak mudah dieksploitasi, langkah berikutnya adalah melihat bagaimana agent memperbarui nilai action berdasarkan reward yang diterima. Pada slide berikutnya, kita akan masuk ke algoritma Q-Learning sebagai dasar proses pembelajaran tersebut.

---

## Slide 037 - Q-Learning Algorithm

### Narasi

Setelah memahami bahwa `reward` harus dirancang dengan hati-hati, langkah berikutnya adalah melihat bagaimana agent dapat belajar memilih `action` yang baik. Pada slide ini kita membahas **Q-Learning Algorithm**, yaitu prosedur pembelajaran berbasis tabel yang memperkirakan nilai dari setiap pasangan `state` dan `action`.

Ide utamanya sederhana: agent tidak langsung tahu `action` terbaik, tetapi ia mengumpulkan pengalaman episode demi episode. Setiap kali agent berada pada `state`, ia memilih `action`, mengamati `reward` dan `nextState`, lalu memperbarui nilai `Q(state, action)`. Semakin sering proses ini dilakukan, semakin baik estimasi nilai `action` yang tersimpan.

Pseudocode berikut menunjukkan alur utama:

```text
Initialize Q-table with zero

for each episode:
    reset environment
    state = start state

    while episode not done:
        choose action using epsilon-greedy
        perform action
        observe reward and nextState

        update Q(state, action)

        state = nextState
```

Secara berurutan, prosesnya dapat dibaca sebagai berikut:

1. **Inisialisasi**: `Q-table` diisi nol karena agent belum memiliki pengetahuan.
2. **Reset environment**: setiap episode dimulai dari kondisi awal yang sama atau sesuai aturan game.
3. **Pilihan action**: agent memilih `action` dengan `epsilon-greedy`, yaitu sebagian besar memilih `action` yang saat ini dinilai terbaik, tetapi tetap menyisakan peluang mencoba `action` lain.
4. **Eksekusi dan observasi**: `action` dijalankan, lalu agent menerima `reward` dan `nextState`.
5. **Pembaruan nilai**: `Q(state, action)` diperbarui berdasarkan pengalaman tersebut.
6. **Perpindahan state**: `state` diganti menjadi `nextState`, lalu loop berlanjut sampai episode selesai.

Dalam konteks game, `state` bisa berupa posisi agent, posisi musuh, item yang tersedia, atau kondisi level. `action` bisa berupa bergerak, menyerang, menghindari, atau mengambil item. `reward` memberi sinyal apakah `action` tersebut mendukung tujuan, misalnya mendekati goal, menghindari bahaya, atau menyelesaikan misi. Dengan demikian, `Q-table` menjadi semacam "peta nilai" yang membantu agent mengambil keputusan.

Perlu dipahami bahwa Q-learning tidak langsung menghasilkan perilaku sempurna. Pada episode awal, agent sering melakukan `action` yang buruk karena nilai masih nol. Namun, karena setiap episode memperbarui tabel, agent perlahan belajar membedakan `action` yang menghasilkan `reward` baik dari `action` yang tidak. Setelah banyak episode, `Q-table` berisi nilai yang lebih informatif, sehingga agent dapat memilih `action` yang lebih rasional.

Sebelum melanjutkan, mahasiswa perlu menangkap tiga hal penting: Q-learning bekerja melalui **pengalaman berulang**, keputusan didasarkan pada **nilai yang dipelajari**, dan kualitas hasil sangat bergantung pada desain `state`, `action`, dan `reward`.

### Inti yang Harus Ditekankan

- **`Q-table`** menyimpan estimasi nilai untuk setiap pasangan `state` dan `action`.
- **`epsilon-greedy`** menyeimbangkan eksplorasi dan eksploitasi selama pembelajaran.
- Setiap episode menghasilkan pengalaman berupa `reward` dan `nextState` yang digunakan untuk memperbarui `Q(state, action)`.
- Setelah banyak episode, agent dapat memilih `action` yang lebih baik karena nilai di `Q-table` semakin akurat.

### Transisi ke Slide Berikutnya

Setelah memahami bagaimana agent belajar dan memperbarui nilai `action`, langkah berikutnya adalah membedakan fase ketika agent masih belajar dengan fase ketika agent hanya menggunakan hasil belajar yang sudah terbentuk.

---

## Slide 038 - Training vs Inference

### Narasi

Slide ini membedakan dua kondisi kerja agent setelah kita memahami algoritma Q-learning: **training** dan **inference**. Intuisinya sederhana: **training** adalah fase agent masih belajar, sedangkan **inference** adalah fase agent sudah memakai hasil belajar untuk bertindak.

Pada fase **training**, agent belum memiliki keyakinan penuh terhadap nilai `Q-table`. Karena itu, agent perlu melakukan **eksplorasi** yang cukup besar. Artinya, agent tidak selalu memilih `action` yang saat ini dianggap terbaik, tetapi juga mencoba `action` lain untuk melihat konsekuensinya.

Ciri utama fase **training** adalah:

- agent masih belajar dari lingkungan,
- `Q-table` terus diperbarui berdasarkan `reward` yang diterima,
- agent sering mencoba `action` yang belum tentu baik,
- perilaku agent dapat berubah dari waktu ke waktu.

Proses ini penting karena tanpa eksplorasi, agent bisa terjebak pada pilihan awal yang tidak optimal. Dalam implementasi Q-learning, eksplorasi biasanya dikendalikan oleh mekanisme seperti `epsilon-greedy`, di mana sebagian waktu agent memilih `action` terbaik dan sebagian waktu agent mencoba `action` acak.

Pada fase **inference**, agent tidak lagi memperbarui `Q-table`. Agent hanya menggunakan nilai yang sudah tersedia untuk memilih `action` terbaik pada `state` saat ini.

Ciri utama fase **inference** adalah:

- eksplorasi rendah atau bahkan nol,
- `Q-table` dianggap tetap,
- agent memilih `action` dengan nilai `Q` tertinggi,
- perilaku agent lebih stabil dan dapat diprediksi.

Dalam game final, agent biasanya dijalankan pada mode **inference**. Alasannya, pemain mengharapkan perilaku yang konsisten, cepat, dan tidak terus berubah seperti saat agent masih belajar. Mode inference membuat agent berfungsi sebagai policy yang sudah siap digunakan, bukan sebagai proses pembelajaran yang masih berjalan.

Perbedaan penting yang harus dipahami mahasiswa adalah: **training** bertujuan membentuk nilai `Q-table`, sedangkan **inference** bertujuan mengeksekusi keputusan berdasarkan nilai yang sudah terbentuk. Jika `Q-table` belum cukup baik, hasil inference juga akan buruk. Sebaliknya, jika `Q-table` sudah matang, inference akan menghasilkan perilaku yang lebih stabil.

### Inti yang Harus Ditekankan

- **Training** adalah fase belajar: agent mengeksplorasi, menerima `reward`, dan memperbarui `Q-table`.
- **Inference** adalah fase penggunaan hasil belajar: agent memilih `action` terbaik tanpa mengubah `Q-table`.
- Dalam game final, agent umumnya memakai mode **inference** agar perilaku stabil dan siap dimainkan.

### Transisi ke Slide Berikutnya

Setelah memahami perbedaan antara **training** dan **inference**, langkah berikutnya adalah melihat kapan Q-learning cocok digunakan pada game sederhana, seperti grid world, maze kecil, atau mini game dengan `state` diskrit.

---

## Slide 039 - Q-Learning untuk Game Sederhana

### Narasi

**Q-learning** adalah metode **reinforcement learning** di mana agent belajar memilih **action** berdasarkan **state** dan **reward** yang diterima. Intuisi sederhananya, agent mencoba beberapa perilaku, lalu menyimpan pengalaman mana yang menghasilkan hasil baik. Dalam game, ini bisa digunakan untuk membuat agent yang tidak hanya mengikuti aturan tetap, tetapi juga belajar dari lingkungan.

Pada slide ini, fokus utamanya adalah memahami **kapan Q-learning cocok digunakan**. Q-learning paling mudah diterapkan ketika **state** dan **action** bersifat **diskrit** dan jumlahnya terbatas. Artinya, kondisi agent dapat direpresentasikan sebagai nilai yang jelas, misalnya posisi di grid, arah, jarak dekat/jauh, atau kondisi hidup/mati.

Q-learning cocok untuk:

- **grid world**,
- **maze kecil**,
- agent yang mencari target,
- agent yang menghindari obstacle,
- **turn-based decision** sederhana,
- mini game dengan **state diskrit**.

Pada kasus seperti ini, agent biasanya memiliki **action set** yang terbatas, misalnya `move_up`, `move_down`, `move_left`, `move_right`, atau `wait`. Karena state dan action terbatas, **Q-table** masih dapat disimpan dan diperbarui secara praktis.

Namun, Q-learning kurang cocok langsung untuk:

- **state sangat besar**,
- **visual input kompleks**,
- **action continuous**,
- **environment 3D kompleks**,
- banyak agent dengan perilaku rumit.

Alasannya sederhana: semakin banyak kombinasi **state** dan **action**, semakin besar ukuran **Q-table**. Jika state berasal dari gambar, posisi kontinu, atau lingkungan 3D yang kompleks, Q-table menjadi tidak praktis dan sulit dilatih secara stabil.

Untuk kasus yang lebih kompleks, biasanya digunakan **Deep Reinforcement Learning**. Pendekatan ini menggunakan model yang lebih kuat untuk mengestimasi nilai **Q** tanpa perlu menyimpan tabel untuk setiap kombinasi state-action secara eksplisit.

Sebelum lanjut, mahasiswa perlu memahami bahwa Q-learning bukan sekadar **pathfinding**. Q-learning adalah proses belajar kebijakan: agent belajar **kapan melakukan apa** berdasarkan reward. Jika state terlalu abstrak, action terlalu banyak, atau reward tidak jelas, hasil belajar bisa tidak stabil.

Untuk praktikum awal, **grid world** lebih aman karena mudah divisualisasikan, state-nya jelas, dan proses belajarnya mudah diamati. Setelah konsep ini dipahami, kita bisa melihat contoh penerapan Q-learning pada agent game yang lebih konkret.

### Inti yang Harus Ditekankan

- **Q-learning** cocok untuk lingkungan dengan **state diskrit** dan **action terbatas**.
- **Q-table** menjadi inti penyimpanan nilai **Q(state, action)**, sehingga ukuran state dan action sangat menentukan kelayakan implementasi.
- Untuk state besar, visual kompleks, action kontinu, atau lingkungan 3D rumit, Q-learning langsung biasanya kurang praktis.
- Kasus kompleks umumnya membutuhkan **Deep Reinforcement Learning**.
- **Grid world** adalah contoh awal yang baik karena sederhana, jelas, dan mudah dipelajari.

### Transisi ke Slide Berikutnya

Setelah memahami batas penggunaan Q-learning, kita akan melihat contoh sederhana bagaimana state, action, dan reward dapat dirancang untuk agent game.

---

## Slide 040 - Contoh Q-Learning Enemy

### Narasi

Slide ini menunjukkan contoh kecil **Q-learning** untuk perilaku musuh. Tujuannya adalah memberi intuisi bagaimana agent dapat belajar memilih tindakan, bukan langsung membangun musuh yang kompleks.

State dibuat sederhana dan diskrit:

```text
distanceToPlayer:
Near / Medium / Far

health:
Low / High
```

Variabel `distanceToPlayer` menggambarkan seberapa dekat musuh dengan pemain, sedangkan `health` menggambarkan kondisi musuh. Karena nilainya diskrit, agent dapat memetakan situasi ke sejumlah state yang terbatas.

Action yang tersedia juga dibuat terbatas:

```text
Attack
Chase
Flee
TakeCover
```

Setiap action mewakili keputusan perilaku musuh. `Attack` digunakan untuk menyerang, `Chase` untuk mengejar, `Flee` untuk mundur, dan `TakeCover` untuk mencari perlindungan.

Reward menentukan apa yang dianggap baik oleh agent:

```text
+1 jika berhasil menyerang
-1 jika mati
+0.5 jika bertahan hidup
-0.2 jika terlalu jauh dari target
```

Reward positif mendorong musuh untuk menyerang dan bertahan hidup. Reward negatif menghukum kematian dan perilaku menjauh yang tidak berguna. Dengan kombinasi ini, agent dapat belajar kapan sebaiknya menyerang, mengejar, atau kabur.

Dalam implementasi sederhana, state dan action di atas membentuk **Q-table** yang kecil. Jika ada 3 nilai jarak dan 2 nilai health, maka hanya ada 6 state. Setiap state memiliki 4 nilai Q untuk 4 action. Agent mencoba action, menerima reward, lalu memperbarui nilai Q sehingga keputusan berikutnya menjadi lebih baik.

Untuk praktikum awal, contoh ini berguna sebagai konsep. Namun, grid world tetap lebih aman dan lebih jelas karena state, action, dan reward lebih mudah divisualisasikan.

### Inti yang Harus Ditekankan

- **State** harus diskrit dan terbatas: `distanceToPlayer` memiliki 3 nilai dan `health` memiliki 2 nilai.
- **Action** harus jelas dan terbatas: `Attack`, `Chase`, `Flee`, `TakeCover`.
- **Reward** membentuk perilaku: menyerang memberi reward positif, mati memberi penalti besar, bertahan hidup memberi reward kecil, dan terlalu jauh memberi penalti kecil.
- Q-table pada contoh ini masih kecil, sehingga cocok untuk memahami konsep sebelum masuk ke masalah state yang lebih besar.

### Transisi ke Slide Berikutnya

Setelah melihat contoh kecil ini, kita perlu memahami batasannya. Jika state dibuat lebih detail, jumlah state bisa meningkat cepat dan Q-table menjadi besar. Pada slide berikutnya kita akan membahas **State Space Problem**.

---

## Slide 041 - State Space Problem

### Narasi

Pada slide ini kita masuk ke salah satu masalah utama ketika menerapkan **Q-learning** pada game: **state space problem**. Intuisinya sederhana. Semakin banyak informasi yang dimasukkan ke dalam `state`, semakin banyak kombinasi kondisi yang harus dipelajari agent.

```text
Jumlah state bisa sangat besar.
```

Dalam game, `state` tidak hanya satu nilai. Agent mungkin perlu mengetahui posisi `x` dan `y`, nilai `health`, jumlah `enemy`, posisi `item`, serta keberadaan `obstacle`. Jika setiap variabel memiliki banyak kemungkinan, jumlah kombinasi `state` dapat meningkat sangat cepat.

Contoh sumber pembengkakan `state`:

- posisi `x` dan `y` memiliki banyak nilai,
- `health` dapat memiliki banyak tingkat,
- jumlah `enemy` lebih dari satu,
- jumlah `item` lebih dari satu,
- banyak `obstacle` atau kondisi lingkungan yang berbeda.

Dampaknya terhadap Q-learning:

1. `Q-table` menjadi sangat besar karena setiap pasangan `state` dan `action` perlu disimpan.
2. `training` menjadi lambat karena agent membutuhkan banyak pengalaman untuk mengisi nilai `Q` yang relevan.
3. kebutuhan memori menjadi besar, bahkan bisa tidak praktis untuk game yang kompleks.

Masalah ini penting dipahami sebelum lanjut ke implementasi. Jika `state` terlalu detail, agent tidak akan belajar dengan efisien. Sebaliknya, jika `state` terlalu sederhana, agent mungkin kehilangan informasi penting untuk mengambil keputusan yang baik.

Solusinya adalah merancang `state` yang cukup informatif tetapi tetap dapat dipelajari. Beberapa arah solusi yang umum digunakan:

- sederhanakan `state` dengan memilih fitur yang paling relevan,
- gunakan `discretization` untuk mengubah nilai kontinu menjadi kategori,
- gunakan `function approximation` agar nilai `Q` tidak harus disimpan per `state`,
- gunakan `neural network` sebagai pendekatan `function approximation`,
- gunakan framework seperti `ML-Agents` atau `deep RL` untuk masalah yang lebih kompleks.

Sebelum masuk ke detail teknis, mahasiswa perlu memahami bahwa **state space problem** bukan hanya masalah ukuran tabel, tetapi masalah desain representasi. Representasi `state` yang buruk membuat agent sulit belajar, sedangkan representasi yang baik membantu agent menemukan strategi yang berguna untuk perilaku NPC, pathfinding, atau decision making dalam game.

### Inti yang Harus Ditekankan

- **State space problem** terjadi karena jumlah kombinasi `state` dapat menjadi sangat besar.
- `Q-table` yang terlalu besar menyebabkan `training` lambat dan kebutuhan memori tinggi.
- Solusinya adalah menyederhanakan `state`, menggunakan `discretization`, `function approximation`, `neural network`, atau `deep RL`.
- Desain `state` harus menyeimbangkan informasi yang cukup dan kompleksitas yang masih dapat dipelajari.

### Transisi ke Slide Berikutnya

Setelah memahami masalah besarnya, kita akan melihat salah satu cara paling dasar untuk memperkecil ruang `state`, yaitu `discretization`.

---

## Slide 042 - Discretization

### Narasi

Pada slide sebelumnya, kita melihat bahwa jumlah **state** dalam Q-learning bisa menjadi sangat besar. Salah satu cara praktis untuk menyederhanakannya adalah **discretization**.

**Discretization** adalah proses mengubah nilai kontinu menjadi beberapa kategori diskrit. Dengan kata lain, nilai yang bisa berubah-ubah secara halus diubah menjadi label yang terbatas.

Contoh sederhana:

```text
distance = 2.3
```

Nilai `distance` ini bersifat kontinu. Namun, dalam konteks perilaku NPC, kita tidak selalu perlu membedakan antara `2.3` dan `2.4`. Kita cukup mengelompokkannya menjadi kategori yang lebih mudah digunakan.

Misalnya:

```text
distance < 3       → Near
3 <= distance < 8  → Medium
distance >= 8      → Far
```

Maka, jika:

```text
distance = 2.3
```

maka state-nya menjadi:

```text
Near
```

Dalam Q-learning, ini sangat membantu. Alih-alih membuat entri Q-table untuk setiap nilai `distance` yang mungkin, kita hanya perlu menangani beberapa state diskrit seperti `Near`, `Medium`, dan `Far`.

Secara praktis, alurnya adalah:

1. Game menghitung nilai kontinu, misalnya jarak NPC ke pemain.
2. Nilai tersebut dibandingkan dengan threshold.
3. Nilai kontinu diubah menjadi kategori diskrit.
4. Kategori diskrit digunakan sebagai bagian dari state dalam Q-learning.

Dengan cara ini, **state space** menjadi lebih kecil, **Q-table** lebih ringkas, proses training lebih cepat, dan perilaku NPC lebih mudah dipahami.

Namun, discretization juga memiliki konsekuensi. Jika kategori terlalu sedikit, NPC bisa kehilangan nuansa perilaku. Jika kategori terlalu banyak, masalah state space besar bisa kembali muncul. Karena itu, pemilihan threshold harus sesuai dengan kebutuhan gameplay.

### Inti yang Harus Ditekankan

- **Discretization** mengubah nilai kontinu menjadi kategori diskrit.
- Contoh: `distance = 2.3` dapat diubah menjadi `Near`.
- Threshold seperti `distance < 3`, `3 <= distance < 8`, dan `distance >= 8` membantu membentuk state yang terbatas.
- Dengan state yang lebih terbatas, Q-learning menjadi lebih mudah diterapkan karena Q-table lebih kecil dan training lebih efisien.
- Pemilihan kategori dan threshold harus mempertimbangkan kebutuhan perilaku NPC, bukan hanya kemudahan teknis.

### Transisi ke Slide Berikutnya

Setelah kita memahami bagaimana state dapat disederhanakan melalui discretization, selanjutnya kita akan memperluas pandangan: machine learning dalam game tidak hanya digunakan untuk mengontrol NPC, tetapi juga untuk berbagai aspek lain seperti player modeling, balancing, dan analisis gameplay.

---

## Slide 043 - Penggunaan ML dalam Game

### Narasi

Pada slide ini, kita perlu memperluas pandangan tentang **Machine Learning** dalam game. Selama ini, mahasiswa sering mengaitkan ML hanya dengan NPC yang bergerak atau mengambil keputusan. Padahal, ML dapat membantu banyak bagian dari pengembangan game, mulai dari perilaku agen hingga proses desain dan evaluasi.

```text
Machine Learning for Games
├── Agent Control
├── Player Modeling
├── Game Balancing
├── Content Generation
├── Animation
├── Matchmaking
├── Testing
└── Analytics
```

Pohon di atas menunjukkan bahwa ML dalam game tidak terbatas pada satu komponen. Setiap cabang mewakili area yang berbeda, dan masing-masing memiliki tujuan yang berbeda pula.

- **`Agent Control`**: ML digunakan untuk mengendalikan agen, misalnya karakter yang belajar bergerak, memilih aksi, atau beradaptasi terhadap lingkungan.
- **`Player Modeling`**: ML membantu memahami perilaku pemain, seperti tingkat kesulitan yang disukai, pola bermain, atau kemungkinan pemain berhenti.
- **`Game Balancing`**: ML dapat digunakan untuk menganalisis data gameplay dan membantu menyeimbangkan parameter game.
- **`Content Generation`**: ML dapat mendukung pembuatan konten, seperti level, item, atau variasi elemen permainan.
- **`Animation`**: ML dapat membantu menghasilkan atau memperbaiki gerakan karakter.
- **`Matchmaking`**: ML digunakan untuk mencocokkan pemain berdasarkan kemampuan atau preferensi.
- **`Testing`**: ML dapat membantu menguji game secara otomatis, misalnya dengan menjalankan skenario bermain berulang.
- **`Analytics`**: ML membantu menganalisis data pemain untuk memahami performa, keterlibatan, dan masalah desain.

Poin penting yang harus dipahami adalah: **tidak semua ML dalam game harus digunakan untuk NPC**. Banyak penerapan ML justru berfokus pada **player**, **desain**, dan **pengembangan game**. Misalnya, data dari `Analytics` dapat membantu tim memahami mengapa pemain kesulitan di bagian tertentu, lalu digunakan untuk memperbaiki `Game Balancing`. Dengan cara ini, ML tidak hanya membuat agen lebih pintar, tetapi juga membuat game lebih baik secara keseluruhan.

Secara sederhana, alur umumnya adalah data dari game diolah oleh model, lalu hasilnya digunakan untuk mengambil keputusan atau memperbaiki desain. Jadi, ketika kita membicarakan ML untuk game, kita tidak hanya membicarakan perilaku agen, tetapi juga data, model, dan keputusan desain yang memengaruhi pengalaman bermain.

Sebelum masuk ke contoh yang lebih spesifik, mahasiswa perlu memahami bahwa ML dalam game adalah **alat bantu lintas bidang**. Ia dapat digunakan untuk perilaku agen, tetapi juga untuk memahami pemain, menguji sistem, dan meningkatkan kualitas game. Pemahaman ini penting agar nanti kita tidak terjebak pada asumsi bahwa ML hanya untuk membuat NPC lebih cerdas.

### Inti yang Harus Ditekankan

- **ML dalam game tidak hanya untuk NPC**; ia juga dapat digunakan untuk memahami pemain, menyeimbangkan game, menghasilkan konten, menguji game, dan menganalisis data.
- **`Agent Control`** adalah salah satu area, tetapi bukan satu-satunya area penerapan ML dalam game.
- Banyak penerapan ML justru membantu **desain dan pengembangan game**, misalnya melalui `Player Modeling`, `Game Balancing`, `Testing`, dan `Analytics`.

### Transisi ke Slide Berikutnya

Setelah memahami bahwa ML dapat digunakan di banyak area, kita akan masuk ke salah satu area yang paling dekat dengan perilaku agen, yaitu **ML untuk Agent Control**.

---

## Slide 044 - ML untuk Agent Control

### Narasi

Slide ini membahas salah satu area penting dari machine learning dalam game, yaitu **agent control**. Fokusnya adalah bagaimana sebuah `agent` dapat belajar mengatur perilakunya sendiri, bukan hanya mengikuti aturan yang ditulis manual.

Contoh yang ditampilkan cukup luas:

- `agent` belajar mencapai `target`,
- `agent` belajar menghindari `obstacle`,
- robot belajar berjalan,
- enemy belajar strategi sederhana,
- bot belajar bermain mini game.

Intuisi praktisnya, machine learning berguna ketika perilaku agent bergantung pada banyak kondisi, seperti posisi, jarak, kecepatan, atau layout lingkungan. Dalam situasi seperti itu, agent dapat belajar memilih `action` yang tepat agar tetap bergerak menuju tujuan tanpa menabrak rintangan.

Kelebihan utama dari pendekatan ini adalah agent dapat menemukan **strategi baru** yang mungkin tidak langsung terpikirkan oleh desainer. Hal ini sangat cocok untuk **simulasi**, karena perilaku agent dapat diuji berulang kali dalam lingkungan yang sama atau bervariasi sebelum digunakan di game.

Namun, pendekatan ini juga memiliki konsekuensi:

- **training** memerlukan waktu,
- **debugging** lebih sulit,
- behavior bisa **tidak terduga**.

Artinya, mahasiswa perlu memahami bahwa machine learning untuk agent control bukan pengganti semua teknik perilaku game. Ia paling berguna ketika perilaku agent perlu adaptif, kompleks, atau harus dievaluasi melalui banyak percobaan.

### Inti yang Harus Ditekankan

- **Agent control** menggunakan machine learning agar `agent` belajar perilaku seperti mencapai `target`, menghindari `obstacle`, atau bermain mini game.
- Kelebihannya adalah dapat menemukan **strategi baru** dan cocok untuk **simulasi**.
- Kekurangannya adalah **training** memakan waktu, **debugging** lebih sulit, dan behavior bisa **tidak terduga**.

### Transisi ke Slide Berikutnya

Setelah memahami bagaimana machine learning dapat mengendalikan perilaku agent, kita beralih ke sisi lain: menggunakan machine learning untuk memahami player melalui player modeling.

---

## Slide 045 - ML untuk Player Modeling

### Narasi

Pada slide ini kita beralih dari **agent control** ke **player modeling**. Jika sebelumnya machine learning dipakai untuk membuat agent belajar bertindak, di sini model dipakai untuk memahami perilaku **player** manusia.

Intuisi praktisnya sederhana: game dapat merekam banyak sinyal selama pemain bermain. Sinyal ini disebut **telemetry player**, misalnya seberapa akurat tembakan, berapa kali mati, dan seberapa sering pemain menjelajah area baru.

Data tersebut kemudian diubah menjadi **fitur** yang bisa dipelajari oleh model. Beberapa tujuan player modeling adalah:

- **Klasifikasi play style**, misalnya pemain agresif, defensif, atau penjelajah.
- **Prediksi skill** pemain.
- **Prediksi kebutuhan bantuan**, seperti hint atau tutorial tambahan.
- **Prediksi kemungkinan pemain gagal** pada level atau misi tertentu.
- **Segmentasi player** untuk kelompok pemain dengan pola perilaku serupa.

Contoh supervised learning pada slide ini dapat ditulis sebagai berikut:

```text
Input:
accuracy, death count, exploration ratio

Output:
Aggressive / Defensive / Explorer
```

Dalam potongan di atas, `accuracy`, `death count`, dan `exploration ratio` adalah **input feature** yang menggambarkan perilaku pemain. `Aggressive`, `Defensive`, dan `Explorer` adalah **label output** yang menunjukkan kategori play style.

Model supervised learning belajar dari data historis yang sudah memiliki label. Misalnya, dari banyak sesi permainan, sistem tahu bahwa pemain dengan `accuracy` tinggi dan `death count` rendah cenderung masuk ke kelas `Aggressive`. Setelah dilatih, model dapat menerima fitur baru dari sesi berjalan dan menghasilkan estimasi play style.

Hal penting yang harus dipahami mahasiswa adalah bahwa player modeling bukan sekadar membuat statistik. Statistik memberi nilai mentah, sedangkan model memberi **interpretasi perilaku** yang dapat dipakai sistem game. Interpretasi ini bisa memengaruhi hint, difficulty, rekomendasi, atau cara sistem menyesuaikan pengalaman bermain.

Sebelum lanjut, pastikan mahasiswa memahami tiga hal: **telemetry** sebagai sumber data, **fitur** sebagai representasi perilaku, dan **label** sebagai target yang dipelajari. Tanpa pemahaman ini, model hanya menjadi kotak hitam tanpa makna desain.

### Inti yang Harus Ditekankan

- **Player modeling** menggunakan **telemetry player** untuk memahami perilaku pemain, bukan hanya mengontrol agent.
- Contoh outputnya dapat berupa **play style**, **skill**, **kebutuhan bantuan**, **risiko gagal**, atau **segmentasi player**.
- Pada contoh supervised learning, `accuracy`, `death count`, dan `exploration ratio` dipetakan ke label `Aggressive`, `Defensive`, atau `Explorer`.

### Transisi ke Slide Berikutnya

Setelah kita dapat memodelkan pemain, langkah berikutnya adalah memakai machine learning untuk membantu **game balancing**, misalnya memprediksi level yang terlalu sulit atau menganalisis win rate.

---

## Slide 046 - ML untuk Game Balancing

### Narasi

Pada slide ini, kita beralih dari **player modeling** ke **game balancing**. Jika player modeling bertujuan memahami perilaku pemain, maka balancing bertujuan menyesuaikan game agar pengalaman bermain tetap menantang, adil, dan menyenangkan. Intuisi pentingnya adalah: balancing tidak lagi hanya mengandalkan insting desainer, tetapi dapat didukung oleh data dan model pembelajaran.

Dalam game, **balancing** berarti mencari titik keseimbangan antara kesulitan, reward, dan kemampuan pemain. ML dapat membantu karena game modern menghasilkan banyak sinyal yang dapat diukur, misalnya `win_rate`, `death_count`, `completion_time`, `damage_taken`, `resource_gain`, atau `reward_value`. Sinyal-sinyal ini bisa menjadi fitur untuk menilai apakah suatu level, musuh, atau sistem reward sudah seimbang.

Contoh pertama adalah **memprediksi level terlalu sulit**. Model dapat belajar dari data pemain atau bot bahwa jika `death_count` tinggi di area tertentu, `completion_time` melonjak, atau `win_rate` turun drastis, maka level tersebut mungkin perlu disesuaikan. Penyesuaian bisa berupa menurunkan `enemy_hp`, menambah bantuan pemain, atau menyesuaikan spawn musuh.

Contoh kedua adalah **mencari parameter enemy yang seimbang**. Parameter seperti `enemy_hp`, `enemy_speed`, `attack_damage`, dan `spawn_rate` dapat diuji melalui simulasi. ML dapat membantu memilih kombinasi parameter yang menghasilkan `win_rate` yang diinginkan, tanpa membuat musuh terlalu lemah atau terlalu mematikan.

Selain itu, ML juga dapat digunakan untuk **menganalisis win rate** dan **mengoptimalkan reward**. `win_rate` memberi gambaran apakah pemain terlalu mudah atau terlalu sulit menang, sedangkan reward memengaruhi motivasi dan strategi pemain. Dengan model, tim game dapat memperkirakan efek perubahan XP, koin, drop item, atau buff sebelum diterapkan ke pemain nyata.

Poin penting berikutnya adalah **pengujian ribuan simulasi bot**. Dalam production game, **analytics** dan **simulation** sangat penting untuk balancing. Bot dapat bermain berulang dengan parameter berbeda, sehingga tim dapat menguji banyak kombinasi parameter secara cepat. Alur umumnya dapat dilihat sebagai berikut:

1. Kumpulkan data dari analytics pemain atau simulasi bot.
2. Ubah data menjadi fitur seperti `win_rate`, `death_count`, `completion_time`, `enemy_hp`, dan `reward_value`.
3. Latih model untuk memprediksi kesulitan, keseimbangan, atau efek perubahan parameter.
4. Gunakan prediksi model untuk menyesuaikan parameter game.
5. Ulangi proses dengan simulasi baru untuk memastikan keseimbangan.

Dengan cara ini, ML tidak menggantikan keputusan desainer, tetapi memberi dasar data yang lebih kuat. Mahasiswa perlu memahami bahwa balancing berbasis ML bergantung pada data yang cukup dan metrik yang sesuai.

### Inti yang Harus Ditekankan

- **ML untuk game balancing** membantu menilai dan menyesuaikan kesulitan, musuh, reward, dan parameter game berdasarkan data.
- Sinyal penting meliputi `win_rate`, `death_count`, `completion_time`, parameter enemy, dan `reward_value`.
- **Simulasi bot** memungkinkan pengujian ribuan kombinasi parameter secara cepat, sehingga balancing tidak hanya bergantung pada uji manual.
- Tujuan akhir balancing adalah menciptakan pengalaman bermain yang menantang, adil, dan berkelanjutan bagi pemain.

### Transisi ke Slide Berikutnya

Setelah membahas bagaimana ML dapat membantu menyeimbangkan parameter game, selanjutnya kita akan melihat bagaimana ML juga dapat digunakan untuk **content generation**, yaitu membantu menghasilkan atau memilih konten game seperti level.

---

## Slide 047 - ML untuk Content Generation

### Narasi

Pada slide ini, kita melihat peran **machine learning** dalam **Procedural Content Generation** atau **PCG**. Intuisinya, PCG adalah cara game membuat konten secara otomatis, misalnya level, objek, atau variasi animasi, tanpa semua konten harus dibuat manual satu per satu.

Dalam pendekatan yang sudah dibahas sebelumnya, PCG umumnya masih berbasis **rule**. Artinya, sistem mengikuti aturan, parameter, atau template yang ditentukan oleh developer. Pendekatan ini mudah dikontrol, tetapi fleksibilitasnya terbatas karena variasi konten sangat bergantung pada aturan yang dibuat.

**ML-based PCG** adalah pengembangan lanjutan. Di sini, model dapat belajar dari data, misalnya dari level yang sudah ada, hasil playtest, atau preferensi pemain. Dengan cara itu, sistem tidak hanya menjalankan aturan tetap, tetapi dapat menghasilkan konten yang lebih adaptif.

Contoh penerapannya dapat dilihat pada beberapa kasus berikut:

- **Menghasilkan level berdasarkan contoh**: model mempelajari pola dari level yang sudah ada, lalu membuat level baru yang mirip secara struktur atau tantangan.
- **Memprediksi kualitas level**: sistem menilai apakah level yang dihasilkan terlalu mudah, terlalu sulit, atau memiliki alur yang kurang menarik.
- **Memilih konten yang cocok untuk player**: konten dapat disesuaikan dengan gaya bermain, kemampuan, atau progres pemain.
- **Adaptive PCG**: level atau tantangan berubah selama permainan agar tetap sesuai dengan kondisi pemain.
- **Procedural animation**: gerakan atau variasi animasi dapat dihasilkan secara otomatis, bukan hanya dipilih dari aset yang sudah ada.

Yang perlu dipahami mahasiswa adalah bahwa **ML-based PCG** bukan pengganti desain game, melainkan alat bantu untuk memperluas variasi konten. Dalam praktik, hasil yang dihasilkan tetap perlu dievaluasi dari sisi gameplay, konsistensi, dan pengalaman pemain.

### Inti yang Harus Ditekankan

- **PCG** adalah pembuatan konten game secara prosedural, misalnya level, objek, atau animasi.
- PCG yang dibahas sebelumnya masih berbasis **rule**, sedangkan **ML-based PCG** menggunakan pembelajaran dari data.
- Manfaat utamanya adalah konten yang lebih variatif, adaptif, dan dapat disesuaikan dengan pemain.
- Hasil ML tetap perlu dikontrol karena kualitas gameplay tidak hanya ditentukan oleh variasi konten.

### Transisi ke Slide Berikutnya

Setelah konten dapat dihasilkan secara otomatis, langkah berikutnya adalah memastikan konten tersebut benar-benar dapat dimainkan dan tidak menimbulkan masalah. Pada slide berikutnya, kita akan membahas bagaimana machine learning dan bot dapat digunakan untuk **game testing**.

---

## Slide 048 - ML untuk Game Testing

### Narasi

Dalam pengembangan game, **testing** tidak hanya memastikan program berjalan tanpa error, tetapi juga memastikan perilaku game terasa benar saat dimainkan. Banyak masalah baru muncul ketika pemain bergerak, memilih aksi, atau berinteraksi dengan konten yang dihasilkan secara prosedural. Karena itu, pengujian manual sering tidak cukup, terutama jika jumlah variasi level atau konten sangat besar.

**Machine learning** atau `bot` dapat berperan sebagai **automated playtester**. Agent ini mencoba memainkan game seperti pemain: mengamati keadaan lingkungan, memilih aksi, lalu mengevaluasi hasil yang terjadi. Dengan cara ini, pengujian dapat dilakukan berulang kali dalam skala besar, tanpa harus menunggu pengujian manual satu per satu.

Beberapa contoh penerapannya adalah:

- `bot` mencoba menyelesaikan `level` dan menemukan titik yang tidak dapat dicapai.
- `bot` mendeteksi masalah navigasi, misalnya tersangkut, tidak menemukan jalur, atau `navmesh` tidak valid.
- `bot` menemukan `exploit`, seperti jalan pintas yang tidak dimaksudkan, tabrakan yang salah, atau cara mencapai tujuan yang tidak wajar.
- `bot` membantu menguji `balancing` dengan membandingkan waktu penyelesaian, tingkat keberhasilan, atau strategi yang muncul.

Intuisi pentingnya adalah: agent tidak perlu "mengetahui" seluruh aturan game secara eksplisit. Ia dapat belajar dari interaksi, atau mengikuti kebijakan yang dilatih untuk mencoba berbagai perilaku. Ketika agent gagal mencapai tujuan, gagal melewati area, atau menemukan jalur yang aneh, kegagalan itu menjadi sinyal bahwa ada masalah pada desain, navigasi, atau aturan game.

Untuk game dengan banyak konten prosedural, pendekatan ini sangat berguna karena jumlah level atau variasi dapat sangat besar. Pengujian manual tidak praktis untuk semua kemungkinan, sedangkan `agent` dapat menjelajahi banyak episode, mengumpulkan pola kegagalan, dan membantu tim menemukan masalah yang jarang muncul.

Sebelum lanjut, mahasiswa perlu memahami bahwa **ML untuk game testing** berfokus pada evaluasi perilaku game, bukan pada pembuatan konten. Fokusnya adalah apakah agent dapat bermain, apakah lingkungan konsisten, dan apakah aturan game menghasilkan pengalaman yang stabil.

### Inti yang Harus Ditekankan

- `bot` atau `agent` dapat menjadi **automated playtester** untuk mencoba `level`, navigasi, dan aturan game secara berulang.
- Kegagalan agent sering menjadi indikator masalah: area tidak terjangkau, bug navigasi, `exploit`, atau `balancing` yang tidak seimbang.
- Pendekatan ini sangat relevan untuk game dengan konten prosedural karena variasi pengujian dapat sangat besar.
- Tujuan utamanya adalah evaluasi perilaku game, bukan menggantikan seluruh pengujian manual.

### Transisi ke Slide Berikutnya

Setelah memahami peran machine learning sebagai alat pengujian, langkah berikutnya adalah melihat bagaimana agent dilatih dan dijalankan dalam lingkungan game, khususnya melalui toolkit Unity yang memungkinkan scene menjadi environment untuk training dan inference.

---

## Slide 049 - Unity ML-Agents

### Narasi

**`Unity ML-Agents`** adalah toolkit di Unity yang memungkinkan kita melatih **`Agent`** menggunakan **machine learning**, khususnya **reinforcement learning**. Intuisi praktisnya sederhana: alih-alih menulis aturan manual untuk setiap perilaku NPC, kita menyiapkan lingkungan permainan, memberi agent kemampuan mengamati dan bertindak, lalu membiarkan agent memperbaiki keputusan berdasarkan umpan balik.

Dalam konteks game, scene Unity dapat berperan sebagai **environment training**. Agent tidak hanya menjadi objek statis, tetapi menjadi entitas yang berinteraksi dengan dunia game. Ia membaca keadaan lingkungan, memilih tindakan, dan menerima konsekuensi dari tindakannya.

Konsep utama yang perlu dipahami adalah:

- **`Agent`**: entitas dalam scene yang belajar mengambil keputusan.
- **`Behavior Parameters`**: parameter perilaku yang memengaruhi cara agent bertindak.
- **`Observations`**: data yang diterima agent dari lingkungan, misalnya posisi, jarak, kecepatan, atau kondisi game.
- **`Actions`**: pilihan tindakan yang dapat dilakukan agent, misalnya bergerak, berputar, menyerang, atau memilih jalur.
- **`Rewards`**: sinyal umpan balik yang menilai kualitas tindakan, baik positif maupun negatif.
- **`Episodes`**: satu percobaan lengkap dari awal hingga akhir, misalnya satu level atau satu skenario permainan.
- **`Training`**: proses pembelajaran di mana agent memperbarui strateginya berdasarkan pengalaman.
- **`Inference`**: penggunaan model yang sudah terlatih untuk mengambil keputusan di Unity tanpa proses training lagi.

Peran **`Agent`** adalah menjadi pusat keputusan. Dalam Unity, agent biasanya menempel pada GameObject atau komponen tertentu, sehingga ia dapat mengakses data scene. **`Behavior Parameters`** penting karena menjadi nilai yang dapat diatur atau dipelajari untuk membentuk perilaku agent.

**`Observations`** dan **`Actions`** adalah dua sisi interaksi agent dengan game. **`Observations`** adalah apa yang agent “lihat”, sedangkan **`Actions`** adalah apa yang agent “lakukan”. Jika observations terlalu sedikit, agent tidak punya cukup informasi. Jika actions tidak dirancang dengan baik, agent tidak bisa mengekspresikan perilaku yang diinginkan.

**`Rewards`** dan **`Episodes`** menentukan arah pembelajaran. Reward yang jelas membantu agent memahami mana tindakan yang mendekati tujuan. Episode memberi batas percobaan, sehingga agent dapat belajar dari satu skenario ke skenario berikutnya.

Terakhir, kita perlu membedakan **`Training`** dan **`Inference`**. Training adalah fase pembentukan perilaku, sedangkan inference adalah fase penggunaan perilaku yang sudah terbentuk. Mahasiswa harus paham bahwa scene Unity bukan hanya tempat menampilkan game, tetapi juga lingkungan tempat agent belajar.

### Inti yang Harus Ditekankan

- **`Unity ML-Agents`** menjadikan scene Unity sebagai **environment training** untuk **`Agent`**.
- Siklus dasar pembelajaran adalah **`Observations`**, **`Actions`**, dan **`Rewards`**.
- **`Agent`** belajar melalui **`Episodes`**, bukan dari satu tindakan tunggal.
- **`Training`** menghasilkan model perilaku, sedangkan **`Inference`** menggunakan model tersebut di Unity.

### Transisi ke Slide Berikutnya

Setelah komponen dasar ini dipahami, kita akan melihat bagaimana **Unity Environment**, **`Agent`**, dan algoritma training terhubung dalam arsitektur **`Unity ML-Agents`**.

---

## Slide 050 - Arsitektur Unity ML-Agents

### Narasi

Slide ini menjelaskan **bagaimana komponen ML-Agents saling terhubung** dalam satu alur pembelajaran. Intuisi sederhananya: `Unity Environment` adalah panggung game, `Agent` adalah entitas yang mengamati dan bertindak, sedangkan `Training Algorithm` adalah proses yang memperbaiki perilaku agen berdasarkan hasil tindakan.

```text
Unity Environment
        ↓ observations
Agent
        ↓ actions
Unity Environment
        ↓ rewards
Training Algorithm
```

Alur diagram ini dibaca sebagai **siklus tertutup**:

1. `Unity Environment` menghasilkan keadaan scene, misalnya posisi objek, sensor, atau parameter game.
2. Keadaan tersebut dikirim sebagai `observations` ke `Agent`.
3. `Agent` memilih `actions` berdasarkan model yang sedang dilatih.
4. `actions` kembali ke `Unity Environment` dan mengubah perilaku scene.
5. `Unity Environment` menghasilkan `rewards` sebagai umpan balik kualitas tindakan.
6. `Training Algorithm` menggunakan `rewards` untuk memperbarui model, sehingga `Agent` diharapkan memilih tindakan yang lebih baik pada episode berikutnya.

Poin penting yang harus dipahami adalah **pemisahan peran**. `Agent` berada di Unity, tetapi training biasanya berjalan melalui Python package `ML-Agents`. Artinya, scene Unity berfungsi sebagai environment, sedangkan perhitungan pembelajaran dilakukan di sisi training. Setelah model selesai dilatih, model tersebut dapat digunakan untuk **inference** di Unity, yaitu menjalankan perilaku yang sudah dipelajari tanpa proses training lagi.

Dalam konteks game, arsitektur ini berguna untuk membuat perilaku NPC yang tidak hanya mengikuti aturan manual, tetapi dapat belajar dari interaksi dengan environment. Mahasiswa perlu melihat bahwa `observations`, `actions`, dan `rewards` adalah tiga hal yang menentukan apakah agen dapat belajar dengan benar. Jika observasi tidak cukup, agen tidak memahami keadaan; jika action tidak sesuai, agen tidak bisa memengaruhi game; jika reward tidak jelas, agen tidak tahu perilaku mana yang harus diperbaiki.

Sebelum masuk ke detail implementasi, hal yang harus ditekankan adalah: **Unity menyediakan environment dan agent, sedangkan Python ML-Agents menjalankan training**. Setelah arsitektur ini dipahami, langkah berikutnya adalah melihat bagaimana `Agent` didefinisikan di Unity dan method apa saja yang harus diisi.

### Inti yang Harus Ditekankan

- `Unity Environment` adalah sumber `observations` dan penerima `actions`.
- `Agent` berada di Unity dan menjadi penghubung antara environment dengan model pembelajaran.
- `Training Algorithm` biasanya berjalan di Python package `ML-Agents` dan memperbarui model berdasarkan `rewards`.
- Setelah training selesai, model dapat digunakan untuk `inference` di Unity.
- Kualitas pembelajaran sangat bergantung pada desain `observations`, `actions`, dan `rewards`.

### Transisi ke Slide Berikutnya

Selanjutnya kita akan masuk ke slide **Agent dalam ML-Agents**, yaitu bagaimana `Agent` dibuat sebagai GameObject di Unity dan method apa saja yang perlu didefinisikan.

---

## Slide 051 - Agent dalam ML-Agents

### Narasi

Pada slide ini kita fokus pada **Agent** dalam Unity ML-Agents. Agent bukan sekadar objek biasa; ia adalah **entitas yang membuat keputusan** di dalam lingkungan game. Dalam Unity, agent biasanya diimplementasikan sebagai `GameObject` yang memiliki script turunan dari `Agent`.

```csharp
public class MyAgent : Agent
{
    public override void OnEpisodeBegin()
    {
        // reset posisi, skor, timer, atau state awal
    }

    public override void CollectObservations()
    {
        // kumpulkan data yang akan dibaca agent
    }

    public override void OnActionReceived(float[] vectorAction)
    {
        // terjemahkan action ke perilaku game
    }

    public override float[] Heuristic(float[] state)
    {
        // perilaku fallback jika model belum dipakai
    }
}
```

Script ini penting karena ia menentukan **apa yang diketahui agent**, **apa yang bisa dilakukan agent**, dan **bagaimana episode berjalan**.

Secara konseptual, agent mendefinisikan empat hal utama:

- **Observations**: data yang diterima agent untuk membuat keputusan.
- **Actions**: pilihan perilaku yang bisa dieksekusi di lingkungan.
- **Rewards**: sinyal keberhasilan yang digunakan untuk menilai kualitas keputusan.
- **Episode reset**: aturan kapan satu percobaan selesai dan dimulai ulang.

Empat hal ini menjadi dasar loop pembelajaran: agent mengamati lingkungan, memilih aksi, menerima reward, lalu episode direset jika selesai.

Urutan eksekusi method biasanya mengikuti alur berikut:

1. `OnEpisodeBegin()` dipanggil saat episode dimulai.
2. `CollectObservations()` dipanggil setiap langkah untuk mengumpulkan data.
3. `OnActionReceived()` dipanggil ketika action dari model atau heuristic diterima.
4. `Heuristic()` dapat dipanggil sebagai perilaku dasar atau fallback.

Perhatikan bahwa `OnActionReceived()` adalah titik penting karena di situlah keputusan agent diterjemahkan menjadi perilaku nyata, misalnya bergerak, berputar, menghindari rintangan, atau mengejar target.

`Heuristic()` berguna ketika kita belum memiliki model terlatih. Ia memberi perilaku sederhana, misalnya bergerak acak atau mengikuti aturan dasar, sehingga lingkungan tetap bisa dijalankan dan diuji.

Yang harus dipahami mahasiswa adalah: **Agent adalah jembatan antara simulasi Unity dan algoritma pembelajaran**. Tanpa definisi yang jelas untuk observations, actions, rewards, dan reset, agent tidak memiliki ruang belajar yang bermakna.

### Inti yang Harus Ditekankan

- **Agent** adalah `GameObject` dengan script turunan dari `Agent`.
- Agent mendefinisikan **observations**, **actions**, **rewards**, dan **episode reset**.
- Method utama: `OnEpisodeBegin()`, `CollectObservations()`, `OnActionReceived()`, dan `Heuristic()`.
- `OnActionReceived()` menerjemahkan keputusan agent menjadi perilaku game.
- `Heuristic()` menyediakan perilaku fallback sebelum model terlatih digunakan.

### Transisi ke Slide Berikutnya

Setelah memahami struktur agent, langkah berikutnya adalah melihat apa saja data yang diberikan kepada agent melalui **observation**.

---

## Slide 052 - Observation

### Narasi

Pada slide ini kita fokus pada **Observation** dalam ML-Agents. **Observation** adalah data yang diberikan kepada agent sebagai gambaran kondisi lingkungan saat ini. Data ini menjadi bahan utama bagi agent untuk memahami situasi sebelum menentukan perilaku.

Secara intuitif, agent tidak “melihat” dunia secara langsung seperti manusia. Agent hanya membaca nilai yang kita sediakan, misalnya posisi, kecepatan, jarak, atau hasil sensor. Semakin jelas informasi yang diberikan, semakin mudah agent mengenali pola tugas yang sedang dihadapi.

Contoh **observation** yang umum digunakan antara lain:

- posisi agent,
- posisi target,
- `velocity`,
- `distance to goal`,
- `ray sensor`,
- `health`,
- `obstacle information`.

Masing-masing data mewakili aspek penting dari keadaan agent. Posisi membantu agent memahami lokasi, kecepatan membantu memahami arah gerak, jarak membantu menilai kedekatan terhadap tujuan, sedangkan sensor dan informasi rintangan membantu agent mengenali hambatan di lingkungan.

Contoh implementasinya adalah sebagai berikut:

```csharp
sensor.AddObservation(transform.localPosition);
sensor.AddObservation(target.localPosition);
```

Pada potongan kode tersebut, `sensor` adalah komponen yang mengumpulkan data **observation**. Baris pertama menambahkan posisi agent melalui `transform.localPosition`. Baris kedua menambahkan posisi target melalui `target.localPosition`. Urutan eksekusinya sederhana: saat agent mengumpulkan observation, nilai posisi agent dan posisi target ditambahkan satu per satu ke dalam kumpulan data yang akan digunakan oleh agent.

Hasil yang diharapkan dari kode ini adalah agent memiliki informasi posisi relatif antara dirinya dan target. Dengan informasi tersebut, agent dapat menilai apakah ia sudah dekat dengan target, masih jauh, atau perlu bergerak ke arah tertentu.

Hal penting yang harus dipahami adalah **observation harus relevan dengan tugas agent**. Jika tugas agent adalah mengejar target, maka posisi dan jarak menjadi data yang sangat penting. Jika tugasnya adalah menghindari rintangan, maka `obstacle information` atau `ray sensor` menjadi lebih relevan. Data yang tidak relevan dapat menambah kebisingan dan membuat proses pembelajaran agent menjadi kurang efisien.

Perlu juga dibedakan bahwa **observation bukan action**. **Observation** adalah input yang dibaca oleh agent, sedangkan action adalah perintah atau keluaran yang digunakan untuk memengaruhi perilaku agent. Pada slide ini kita baru membahas apa yang dibaca oleh agent, bukan apa yang dilakukan agent setelah membaca data tersebut.

### Inti yang Harus Ditekankan

- **Observation** adalah data input yang diberikan kepada agent untuk memahami keadaan lingkungan.
- Contoh observation meliputi posisi, `velocity`, jarak, sensor, `health`, dan informasi rintangan.
- Kode `sensor.AddObservation(...)` digunakan untuk menambah data observation ke dalam agent.
- Observation harus relevan dengan tugas agar agent dapat memahami situasi dan berperilaku sesuai tujuan.

### Transisi ke Slide Berikutnya

Setelah memahami apa yang dibaca oleh agent melalui **observation**, langkah berikutnya adalah memahami apa yang dilakukan agent setelah membaca data tersebut, yaitu **action**.

---

## Slide 053 - Action dalam ML-Agents

### Narasi

Setelah agent menerima **observation**, langkah berikutnya adalah menghasilkan **action**. Dalam konteks ML-Agents, **action** adalah output dari model yang menentukan apa yang dilakukan agent pada environment. Secara intuitif, observation menjawab pertanyaan “apa yang agent ketahui?”, sedangkan action menjawab “apa yang agent putuskan untuk dilakukan?”.

Dalam game, action biasanya dipetakan ke perilaku karakter atau NPC. Misalnya, agent dapat memilih untuk bergerak maju, belok kiri, belok kanan, atau melompat. Pilihan-pilihan ini sering disebut **action diskrit**, karena jumlahnya terbatas dan dapat dinyatakan sebagai indeks atau label.

Selain action diskrit, ada juga **action kontinu**. Action kontinu cocok untuk kontrol halus, seperti nilai `horizontal movement`, `vertical movement`, atau `rotation value`. Nilai-nilai ini biasanya berada dalam rentang tertentu, sehingga agent dapat mengatur intensitas atau arah gerakan secara lebih presisi.

Dalam Unity, action dari model biasanya diterima melalui callback:

```text
OnActionReceived(ActionBuffers actions)
```

Metode ini menjadi titik di mana agent membaca keputusan model. `ActionBuffers` berisi action yang dihasilkan model, baik diskrit maupun kontinu. Setelah dibaca, agent menerjemahkan action tersebut menjadi perubahan pada `GameObject`, misalnya mengubah posisi, rotasi, atau memicu animasi.

Alur penting yang harus dipahami mahasiswa adalah:

1. Model menghasilkan action berdasarkan observation.
2. Unity menerima action melalui `OnActionReceived`.
3. Kode agent membaca nilai action.
4. `GameObject` diubah sesuai action, sehingga perilaku agent terlihat di scene.

Poin kuncinya adalah action tidak boleh dipisahkan dari tujuan agent. Action harus relevan dengan tugas, dapat dieksekusi oleh environment, dan konsisten dengan observation yang diberikan. Jika action tidak bermakna atau tidak dapat diterapkan, perilaku agent akan sulit dipelajari dan sulit dikendalikan.

### Inti yang Harus Ditekankan

- **Action** adalah output keputusan agent, bukan sekadar input manual.
- **Action diskrit** cocok untuk pilihan terbatas seperti `move forward`, `turn left`, `turn right`, dan `jump`.
- **Action kontinu** cocok untuk kontrol halus seperti `horizontal movement`, `vertical movement`, dan `rotation value`.
- Di Unity, action dibaca melalui `OnActionReceived(ActionBuffers actions)` lalu diterjemahkan ke perubahan `GameObject`.
- Mahasiswa harus memahami hubungan: observation → model → action → perubahan perilaku agent.

### Transisi ke Slide Berikutnya

Setelah agent tahu apa yang harus dilakukan, pertanyaan berikutnya adalah bagaimana agent tahu apakah action tersebut baik atau buruk. Hal ini akan dijelaskan pada slide berikutnya melalui konsep **reward**.

---

## Slide 054 - Reward dalam ML-Agents

### Narasi

Pada slide ini kita membahas **reward**, yaitu sinyal numerik yang memberi tahu agent bahwa suatu keadaan atau tindakan menghasilkan konsekuensi tertentu. Setelah agent menghasilkan `action`, lingkungan memberikan umpan balik melalui reward. Tanpa reward, agent tidak memiliki dasar untuk membedakan perilaku yang baik dan perilaku yang buruk.

Dalam **ML-Agents**, reward diberikan melalui API yang dipanggil dari `Agent` saat event tertentu terjadi. Dua bentuk yang umum adalah:

```csharp
AddReward(value);
SetReward(value);
```

`AddReward(value)` menambah nilai reward pada langkah saat ini, sehingga beberapa aturan reward dapat dijumlahkan. `SetReward(value)` menetapkan nilai reward untuk langkah tersebut, sehingga nilai sebelumnya dapat diganti. Dalam praktik, `AddReward` sering lebih fleksibel karena kita bisa memberi reward positif, negatif, dan penalti kecil secara terpisah.

Contoh implementasinya adalah:

```csharp
AddReward(1.0f);    // mencapai target
AddReward(-1.0f);   // jatuh
AddReward(-0.01f);  // penalty waktu
```

Arti dari contoh ini cukup penting:

- `AddReward(1.0f)` memberi sinyal bahwa agent berhasil mencapai tujuan, misalnya menyentuh target.
- `AddReward(-1.0f)` memberi hukuman yang besar ketika agent gagal, misalnya jatuh keluar area.
- `AddReward(-0.01f)` memberi penalti kecil per langkah agar agent tidak hanya bergerak lambat tanpa arah.

Dari sisi perilaku game, reward menentukan **apa yang dipelajari agent**. Agent akan mencari pola `action` yang menghasilkan total reward tinggi. Jika reward hanya diberikan saat mencapai target, agent belajar menemukan target. Jika ditambah penalti waktu, agent belajar menemukan target secara lebih cepat. Jika ditambah hukuman jatuh, agent belajar menghindari keadaan yang merugikan.

Perlu dipahami bahwa reward bukan sekadar angka acak. Reward adalah **desain tujuan** dari perilaku agent. Nilai yang terlalu kecil mungkin membuat pembelajaran lambat, sedangkan nilai yang terlalu besar dapat membuat agent fokus pada satu aspek dan mengabaikan aspek lain. Karena itu, penentuan reward harus konsisten dengan tujuan gameplay yang diinginkan.

Sebelum lanjut ke episode, mahasiswa perlu mengingat bahwa reward diberikan pada setiap langkah atau event, dijumlahkan selama agent berjalan, dan menjadi dasar bagi agent untuk memperbaiki perilakunya.

### Inti yang Harus Ditekankan

- **Reward** adalah umpan balik numerik yang menentukan apa yang dipelajari agent.
- `AddReward(value)` menambah reward pada langkah saat ini, sedangkan `SetReward(value)` menetapkan nilai reward untuk langkah tersebut.
- Reward positif mendorong perilaku, reward negatif menghukum perilaku, dan penalti kecil dapat mendorong efisiensi.
- Desain reward harus selaras dengan tujuan gameplay, misalnya mencapai target, menghindari jatuh, dan menyelesaikan tugas lebih cepat.

### Transisi ke Slide Berikutnya

Selanjutnya kita akan melihat bagaimana kumpulan langkah dan reward ini dibungkus dalam satu episode, yaitu dari awal reset lingkungan sampai agent mencapai kondisi akhir.

---

## Slide 055 - Episode dalam ML-Agents

### Narasi

Dalam **ML-Agents**, satu **episode** adalah satu percobaan lengkap yang dilakukan agent di dalam environment. Episode menjadi batas alami antara satu pengalaman belajar dan pengalaman berikutnya.

Episode dimulai ketika environment di-reset. Dalam Unity, reset ini biasanya dilakukan di method `OnEpisodeBegin()`.

```csharp
public override void OnEpisodeBegin()
{
    // reset posisi agent dan target
}
```

Method ini dipanggil setiap kali episode baru dimulai. Di dalamnya, kita menyiapkan kondisi awal yang konsisten, misalnya posisi agent, posisi target, timer, obstacle, atau state lain yang memengaruhi perilaku agent.

Konsistensi kondisi awal penting karena agent belajar dari pola pengalaman. Jika setiap episode dimulai dari kondisi yang terlalu acak atau tidak terdefinisi, proses belajar bisa menjadi tidak stabil dan sulit dievaluasi.

Episode selesai ketika kita memanggil:

```csharp
EndEpisode();
```

Panggilan `EndEpisode()` memberi tahu ML-Agents bahwa satu rangkaian pengalaman sudah berakhir. Setelah itu, environment bisa di-reset kembali untuk episode berikutnya.

Beberapa contoh kondisi yang bisa memicu akhir episode adalah:

- agent mencapai target,
- agent jatuh,
- waktu habis,
- agent menabrak obstacle.

Secara intuitif, episode bisa dipahami seperti satu ronde permainan. Agent mencoba menyelesaikan tugas, mengumpulkan pengalaman, lalu ronde itu diakhiri. Setelah itu, agent mulai ronde baru dengan kondisi awal yang sudah di-reset.

Hal yang harus dipahami mahasiswa sebelum lanjut adalah bahwa **episode bukan sekadar memuat ulang scene**, tetapi merupakan batas logis dari satu trial belajar. Batas ini penting karena menentukan kapan pengalaman agent dianggap selesai dan kapan state environment harus dikembalikan ke kondisi awal.

### Inti yang Harus Ditekankan

- **Episode** adalah satu trial lengkap dari reset environment hingga kondisi selesai.
- `OnEpisodeBegin()` digunakan untuk menginisialisasi ulang posisi, target, timer, dan state awal agent.
- `EndEpisode()` menandai akhir episode dan memungkinkan environment di-reset untuk trial berikutnya.
- Kondisi akhir episode menentukan apa yang dianggap sebagai keberhasilan, kegagalan, atau timeout.

### Transisi ke Slide Berikutnya

Setelah memahami kapan episode dimulai dan diakhiri, langkah berikutnya adalah mengatur bagaimana agent mengamati environment dan mengambil tindakan. Itu dibahas pada slide berikutnya melalui **Behavior Parameters**.

---

## Slide 056 - Behavior Parameters

### Narasi

Dalam konteks ML-Agents, **Behavior Parameters** adalah komponen Unity yang berfungsi sebagai pengatur utama perilaku agent. Komponen ini tidak langsung berisi logika perilaku, tetapi menentukan bagaimana agent terhubung dengan behavior, bagaimana data lingkungan dibaca, dan bagaimana aksi dapat dihasilkan.

Komponen ini biasanya dipasang pada GameObject yang sama dengan agent. Melalui field-fieldnya, Unity dapat mengenali behavior mana yang harus dijalankan oleh agent.

Field-field penting yang perlu dipahami adalah:

- `behavior name`: nama behavior yang akan digunakan agent.
- `observation type`: jenis representasi observasi yang diterima agent dari environment.
- `action type`: jenis aksi yang dapat dipilih agent.
- `action size`: jumlah atau ukuran ruang aksi yang tersedia.
- `model`: model behavior yang dapat dijalankan, terutama untuk inference.
- `behavior type`: mode operasi behavior.

`behavior type` memiliki tiga pilihan utama:

- `Default`: mode umum untuk behavior yang dapat digunakan dalam alur training dan inference sesuai konfigurasi.
- `Heuristic Only`: mode yang membatasi behavior pada kontrol manual.
- `Inference Only`: mode yang membatasi behavior pada eksekusi model yang sudah ada.

Untuk training, agent harus menggunakan behavior yang terhubung dengan `trainer`. Artinya, parameter behavior harus konsisten dengan trainer, terutama pada nama behavior, jenis observasi, dan ukuran aksi. Jika parameter tidak konsisten, agent tidak dapat menerima observasi dan menghasilkan aksi dengan benar.

Secara intuitif, `Behavior Parameters` dapat dipahami seperti konfigurasi sensor dan aktuator pada robot. `observation type` menentukan cara agent “melihat” environment, `action size` menentukan berapa banyak aksi yang dapat dipilih, dan `behavior type` menentukan mode operasi behavior.

Sebelum lanjut ke mode perilaku tertentu, mahasiswa perlu memahami bahwa komponen ini adalah jembatan antara agent, environment, trainer, dan model behavior.

### Inti yang Harus Ditekankan

- **Behavior Parameters** adalah komponen Unity untuk mengatur konfigurasi behavior agent.
- Field utama meliputi `behavior name`, `observation type`, `action type`, `action size`, `model`, dan `behavior type`.
- `behavior type` menentukan mode behavior: `Default`, `Heuristic Only`, atau `Inference Only`.
- Untuk training, behavior harus terhubung dengan `trainer` dan parameter behavior harus konsisten.

### Transisi ke Slide Berikutnya

Setelah memahami parameter behavior, slide berikutnya akan membahas **Heuristic Mode**, yaitu mode di mana aksi agent dikontrol secara manual untuk keperluan testing dan perbandingan.

---

## Slide 057 - Heuristic Mode

### Narasi

**Heuristic Mode** adalah mode di mana `action` agent tidak diambil dari model, tetapi dikontrol secara manual. Intuisinya sederhana: sebelum agent belajar, kita perlu memastikan bahwa `environment` dan `action` yang tersedia benar-benar berfungsi.

Dalam praktik, mode ini sering dipakai untuk menggerakkan agent dengan input manusia, misalnya tombol `WASD`. Dengan cara ini, mahasiswa dapat melihat langsung bagaimana agent merespons perintah: maju, mundur, belok kiri, atau belok kanan. Jika gerakan tidak sesuai, masalah biasanya ada pada `environment` atau konfigurasi `action`, bukan pada model.

Mode ini juga berguna untuk **testing**. Saat `environment` baru dibuat, kita perlu mengecek apakah `agent` dapat bergerak dan apakah responsnya sesuai desain. Heuristic mode menjadi alat verifikasi awal yang cepat sebelum proses training dimulai.

Selain testing, mode manual dapat dipakai untuk **membandingkan perilaku manusia dengan model**. Mahasiswa bisa mengamati strategi sederhana yang dilakukan manusia, lalu membandingkannya dengan perilaku agent setelah model dilatih. Perbandingan ini membantu menilai apakah model belajar pola yang wajar atau masih melakukan gerakan tidak efisien.

Pada konteks yang lebih lanjut, data manual seperti ini juga dapat menjadi dasar untuk **imitation learning**. Dalam pendekatan tersebut, agent belajar meniru perilaku yang dianggap baik. Namun pada slide ini, kita cukup memahami bahwa heuristic mode menyediakan cara untuk menghasilkan atau mengamati perilaku manual yang kemudian bisa dimanfaatkan.

Untuk praktikum pengantar, urutan yang paling penting adalah:

1. Pastikan `environment` dapat dijalankan.
2. Pastikan `agent` dapat dikontrol manual, misalnya dengan `WASD`.
3. Pastikan `action` yang dikirim menghasilkan gerakan yang benar.
4. Setelah lingkungan stabil, barulah lanjut ke tahap training.

Dengan memahami heuristic mode, mahasiswa tidak akan langsung menganggap model gagal ketika sebenarnya masalahnya ada pada setup environment atau konfigurasi perilaku.

### Inti yang Harus Ditekankan

- **Heuristic Mode** berarti `action` dikontrol manual, bukan oleh model.
- Mode ini dipakai untuk **testing** `environment`, `agent`, dan `action` sebelum training.
- Input seperti `WASD` membantu memastikan agent bergerak sesuai desain.
- Perilaku manual juga dapat digunakan untuk membandingkan manusia vs model atau sebagai dasar **imitation learning**.
- Langkah praktis: verifikasi environment dan kontrol manual terlebih dahulu sebelum masuk ke training.

### Transisi ke Slide Berikutnya

Setelah `environment` dan kontrol manual sudah terverifikasi, kita lanjut ke slide berikutnya untuk memahami bagaimana training menghasilkan model.

---

## Slide 058 - Training dan Model

### Narasi

Pada slide ini kita masuk ke bagian inti dari praktikum: bagaimana sebuah **agent** belajar dan bagaimana hasil belajarnya disimpan. Setelah environment sudah bisa dijalankan, misalnya melalui mode manual, langkah berikutnya adalah menjalankan proses **training**.

**Training** menghasilkan **model**. Model ini bukan sekadar file tambahan, tetapi representasi dari kebijakan yang sudah dipelajari. Kebijakan atau **policy** ini menentukan **action** apa yang sebaiknya diambil oleh agent berdasarkan **state** yang diterima.

Alur utamanya dapat dilihat sebagai pipeline dari Unity ke trainer, lalu kembali ke Unity:

```text
Unity Scene
    ↓
ML-Agents Trainer
    ↓
Agent mencoba banyak episode
    ↓
Model belajar policy
    ↓
Model disimpan
    ↓
Model digunakan di Unity
```

Secara lebih rinci, alur tersebut dapat dipahami sebagai berikut:

1. `Unity Scene` menyediakan environment, yaitu dunia simulasi tempat agent berada.
2. `ML-Agents Trainer` menjalankan proses pelatihan menggunakan data dari scene.
3. Agent mencoba banyak `episode`, yaitu banyak percobaan dari awal sampai selesai.
4. Model belajar `policy` berdasarkan pengalaman, `state`, `action`, dan `reward`.
5. Model disimpan sebagai file hasil training.
6. Model kemudian digunakan di Unity untuk `inference` saat game berjalan.

Secara intuitif, training bisa dibayangkan seperti latihan berulang. Agent mencoba, gagal, mencoba lagi, dan perlahan menemukan pola perilaku yang lebih baik. Model yang dihasilkan adalah hasil dari latihan tersebut. Selama training, model boleh belum sempurna; yang penting prosesnya berjalan dan perilaku agent mulai membaik.

Hal penting yang harus dipahami adalah perbedaan antara **training** dan **inference**. Training adalah proses belajar yang menghasilkan model. Inference adalah proses memakai model yang sudah dilatih untuk mengambil keputusan saat runtime. Saat inference, model tidak lagi belajar; ia hanya membaca `state` dan menghasilkan `action`.

Model yang sudah dilatih kemudian dipasang ke `Behavior Parameters` agar bisa digunakan di Unity. Artinya, ketika scene dijalankan, komponen agent akan membaca `state`, mengirimkannya ke model, lalu model menghasilkan `action` yang akan dieksekusi. Jika model belum dipasang dengan benar, agent tidak akan menggunakan hasil training.

Sebelum lanjut, mahasiswa perlu memahami tiga hal penting: training menghasilkan model, model berisi policy, dan model harus dipasang untuk inference. Selain itu, environment dan model adalah dua hal yang berbeda. Environment adalah dunia simulasi, sedangkan model adalah kebijakan yang dipakai agent untuk bertindak. Jika environment berubah secara signifikan, model yang sudah dilatih mungkin perlu disesuaikan atau dilatih ulang.

### Inti yang Harus Ditekankan

- **Training** adalah proses menghasilkan **model** dari banyak `episode`.
- **Model** berisi **policy** yang memetakan `state` ke `action`.
- Alur utama: `Unity Scene` → `ML-Agents Trainer` → banyak `episode` → `policy` → model disimpan → `inference` di Unity.
- Model harus dipasang ke `Behavior Parameters` agar bisa digunakan saat runtime.
- Bedakan **training** sebagai proses belajar dan **inference** sebagai proses memakai model.

### Transisi ke Slide Berikutnya

Setelah memahami bahwa training menghasilkan model dan model digunakan untuk inference, kita akan membandingkan pendekatan `Q-Learning` sederhana dengan Unity `ML-Agents` untuk melihat kapan masing-masing lebih cocok digunakan.

---

## Slide 059 - Q-Learning vs ML-Agents

### Narasi

Setelah kita memahami bahwa proses training menghasilkan model yang bisa digunakan kembali, langkah berikutnya adalah memilih pendekatan yang sesuai untuk praktikum. Pada slide ini, kita membandingkan **Q-Learning sederhana** dan **Unity ML-Agents** bukan untuk menentukan mana yang selalu lebih baik, tetapi untuk memahami konteks penggunaannya dalam pembelajaran Game Cerdas.

**Q-Learning sederhana** biasanya bekerja pada lingkungan yang kecil dan diskrit. `state`-nya jelas, misalnya posisi agent pada grid, dan `action`-nya terbatas, misalnya atas, bawah, kiri, kanan. Karena ruang `state` dan `action` kecil, proses belajarnya mudah divisualisasikan dan mudah dijelaskan. Implementasinya juga bisa dilakukan dengan `C#` sederhana, sehingga mahasiswa dapat fokus pada inti `state`, `action`, `reward`, dan `policy` tanpa terbebani setup yang rumit.

Sebaliknya, **Unity ML-Agents** berada pada level yang lebih kompleks. `state` yang diberikan ke agent bisa berupa data kontinu, posisi 3D, rotasi, sensor, atau kombinasi banyak komponen. Training umumnya dilakukan melalui pipeline `Unity` dan `Python`, lalu model yang dihasilkan dipasang kembali ke `Behavior Parameters` untuk inference. Pendekatan ini lebih kuat untuk simulasi 3D dan perilaku agent yang lebih realistis, misalnya kontrol karakter, navigasi, atau pengambilan keputusan dalam scene game yang lebih kaya.

Perbedaan utamanya terletak pada **tujuan pembelajaran** dan **kompleksitas implementasi**.

- **Q-Learning sederhana** cocok untuk memperkenalkan konsep dasar reinforcement learning, terutama jika mahasiswa baru pertama kali memahami bagaimana agent memilih `action` berdasarkan `state` dan `reward`.
- **Unity ML-Agents** cocok untuk menunjukkan bagaimana learning agent dapat dilatih pada environment game yang lebih kompleks, tetapi membutuhkan pemahaman tambahan tentang setup, pipeline training, dan integrasi model.

Untuk Pertemuan 13, keduanya dapat diperkenalkan. Mahasiswa perlu memahami bahwa pilihan pendekatan tidak hanya ditentukan oleh "mana yang lebih canggih", tetapi oleh tujuan praktikum, waktu yang tersedia, kondisi lab, dan tingkat pemahaman yang ingin dicapai. Jika tujuan utamanya adalah memahami mekanisme dasar reinforcement learning, jalur sederhana lebih aman. Jika tujuan utamanya adalah melihat agent belajar dalam scene 3D, `ML-Agents` menjadi pilihan yang lebih representatif.

### Inti yang Harus Ditekankan

- **Q-Learning sederhana** cocok untuk konsep dasar reinforcement learning karena `state` diskrit, implementasi ringan, dan mudah divisualisasikan.
- **Unity ML-Agents** cocok untuk agent game yang lebih realistis karena mendukung `state` kompleks, simulasi 3D, dan pipeline `Unity` + `Python`.
- Pilihan praktikum harus mempertimbangkan **kompleksitas setup**, **waktu**, dan **tujuan pembelajaran**, bukan hanya kecanggihan teknologi.

### Transisi ke Slide Berikutnya

Dengan memahami perbandingan ini, kita dapat menentukan jalur praktikum yang paling aman dan sesuai dengan kondisi lab serta tujuan pembelajaran mahasiswa.

---

## Slide 060 - Rekomendasi Praktikum

### Narasi

Untuk praktikum pada pertemuan ini, pilihan yang paling aman adalah:

```text
Implementasi Q-Learning sederhana pada grid
```

Pilihan ini direkomendasikan karena konsep **Reinforcement Learning** dapat terlihat jelas tanpa beban teknis yang terlalu besar. Mahasiswa dapat langsung mengamati bagaimana agent mengambil keputusan berdasarkan lingkungan sederhana, tanpa harus menyiapkan infrastruktur pelatihan yang kompleks.

Beberapa alasan utama rekomendasi ini adalah:

- konsep **RL** terlihat jelas,
- tidak butuh setup `Python`,
- mudah dijelaskan,
- mudah divisualisasikan,
- cocok untuk memahami `state`, `action`, dan `reward`.

Dengan pendekatan `grid`, mahasiswa dapat melihat proses pembelajaran agent secara intuitif. Agent mencoba berbagai `action`, menerima `reward` atau `penalty`, lalu memperbaiki keputusannya dari waktu ke waktu. Hal ini sangat membantu sebelum masuk ke sistem yang lebih kompleks seperti `Unity ML-Agents`.

Alternatif yang dapat dipertimbangkan adalah:

```text
Unity ML-Agents Introduction
```

Alternatif ini cocok jika waktu dan setup lab mendukung. Namun, untuk pemahaman awal yang stabil dan minim risiko teknis, implementasi `Q-Learning` sederhana pada `grid` tetap menjadi pilihan utama.

### Inti yang Harus Ditekankan

- Praktikum paling aman adalah **`Q-Learning` sederhana pada `grid`**.
- Fokus utama adalah memahami hubungan `state`, `action`, dan `reward`.
- `Unity ML-Agents` dapat menjadi alternatif, tetapi hanya jika waktu dan setup lab memadai.

### Transisi ke Slide Berikutnya

Selanjutnya, kita akan masuk ke praktikum Opsi A, yaitu implementasi `Q-Learning` untuk agent yang belajar mencapai `goal` pada lingkungan `grid`.

---

## Slide 061 - Praktikum Opsi A: Q-Learning Grid Agent

### Narasi

Pada slide ini kita masuk ke **Praktikum Opsi A**, yaitu **Q-Learning Grid Agent**. Praktikum ini dipilih karena bentuknya sederhana, tetapi sudah memperlihatkan inti pembelajaran berbasis penguatan: agent belajar dari lingkungan, mencoba aksi, menerima reward, lalu memperbaiki keputusan berikutnya.

Lingkungannya berupa grid kecil:

```text
S . . .
. # . .
. # . G
. . . .
```

Pada grid tersebut, `S` adalah posisi awal agent, `G` adalah goal, `#` adalah obstacle, dan titik kosong adalah sel yang dapat dilewati. Agent bergerak dalam grid dua dimensi dan hanya memiliki empat aksi:

- `up`
- `down`
- `left`
- `right`

Ide utamanya adalah agent tidak langsung diberi jalur yang benar. Agent harus menemukan sendiri cara menuju goal melalui percobaan. Setiap keputusan menghasilkan konsekuensi dalam bentuk reward.

Reward pada praktikum ini dirancang sederhana:

- mencapai `G` memberi **reward besar**,
- menabrak `#` memberi **penalty**,
- setiap langkah yang tidak mencapai goal memberi **penalty kecil**.

Penalty kecil pada setiap langkah penting. Tanpa penalty langkah, agent mungkin tidak termotivasi untuk memilih jalur yang lebih pendek. Agent tidak hanya perlu sampai ke goal, tetapi juga perlu belajar sampai dengan efisien.

Dalam Q-Learning, agent menyimpan estimasi nilai untuk setiap pasangan **state** dan **action**. State pada praktikum ini dapat dipahami sebagai posisi agent pada grid. Action adalah arah yang dipilih. Nilai yang disimpan membantu agent menilai: “dari posisi ini, arah mana yang paling baik untuk dilakukan?”

Setiap episode, agent bergerak dari `S` menuju `G`. Selama episode, agent mencoba beberapa aksi, menerima reward, dan memperbarui nilai yang disimpan. Setelah banyak episode, nilai tersebut menjadi lebih baik, sehingga agent cenderung memilih aksi yang membawa ke goal lebih cepat.

Output yang diharapkan terlihat jelas: **agent semakin cepat menemukan goal setelah banyak episode**. Ini adalah tanda bahwa pembelajaran sedang terjadi. Agent tidak sekadar bergerak acak, tetapi membentuk kebiasaan yang lebih baik berdasarkan pengalaman reward.

Sebelum lanjut, mahasiswa perlu memahami tiga hal utama: **state** adalah posisi agent, **action** adalah empat arah gerak, dan **reward** adalah sinyal yang membentuk perilaku agent. Jika tiga hal ini sudah jelas, praktikum akan jauh lebih mudah diikuti.

### Inti yang Harus Ditekankan

- Praktikum ini menggunakan **grid sederhana** agar fokus mahasiswa ada pada konsep **state**, **action**, dan **reward**, bukan pada kompleksitas lingkungan.
- `S` adalah start, `G` adalah goal, `#` adalah obstacle, dan titik kosong adalah sel yang dapat dilewati.
- Agent hanya memilih dari empat aksi: `up`, `down`, `left`, `right`.
- Reward besar diberikan saat mencapai goal, sedangkan obstacle dan langkah tambahan memberi penalty.
- Tujuan pembelajaran adalah agent menjadi lebih cepat mencapai goal setelah banyak episode.

### Transisi ke Slide Berikutnya

Selanjutnya kita akan membuka praktikum ini menjadi komponen yang lebih konkret, yaitu struktur script dan bagian-bagian yang perlu disiapkan untuk menjalankan Q-Learning Grid Agent.

---

## Slide 062 - Komponen Praktikum Q-Learning

### Narasi

Slide ini memetakan **komponen praktikum Q-Learning** yang akan digunakan untuk membangun agent pada grid. Tujuannya agar mahasiswa tidak hanya memahami konsep belajar dari reward, tetapi juga melihat bagaimana konsep tersebut dipecah menjadi beberapa script yang saling bekerja sama.

Script yang direncanakan adalah sebagai berikut:

```text
Scripts/
├── GridWorld.cs
├── QLearningAgent.cs
├── QTable.cs
├── GridCell.cs
├── TrainingManager.cs
└── QLearningDebugUI.cs
```

Struktur ini penting karena praktikum Q-Learning membutuhkan pemisahan tanggung jawab yang jelas. Lingkungan, agent, tabel nilai, proses pelatihan, dan visualisasi debug sebaiknya tidak dicampur dalam satu script. Dengan pemisahan ini, mahasiswa lebih mudah menguji satu bagian, memperbaiki bug, dan mengamati perilaku agent selama pelatihan.

Tanggung jawab utama masing-masing script adalah sebagai berikut:

- `GridWorld.cs`  
  Berperan sebagai **lingkungan grid**. Script ini menyimpan susunan grid, posisi `start`, posisi `goal`, dan `obstacle`. Script ini juga menjadi tempat logika langkah agent dieksekusi, misalnya agent bergerak `up`, `down`, `left`, atau `right`.

- `GridCell.cs`  
  Mewakili **satu sel pada grid**. Komponen ini biasanya menyimpan informasi seperti posisi sel, jenis sel, dan status sel tersebut, misalnya kosong, obstacle, start, atau goal.

- `QLearningAgent.cs`  
  Berperan sebagai **agent yang belajar**. Script ini menentukan aksi apa yang akan dilakukan agent pada state saat ini, lalu menerima `reward` dari lingkungan. Di sinilah proses pembaruan nilai Q dilakukan.

- `QTable.cs`  
  Menyimpan **nilai Q** untuk setiap pasangan state dan action. Nilai ini adalah memori belajar agent. Semakin sering agent berlatih, nilai Q pada jalur yang menguntungkan akan semakin besar.

- `TrainingManager.cs`  
  Mengatur **training loop**. Script ini menjalankan banyak episode, mengatur reset posisi agent, membatasi langkah per episode, dan mencatat hasil pelatihan.

- `QLearningDebugUI.cs`  
  Menyediakan **debug visualization**. Komponen ini membantu mahasiswa melihat proses belajar agent, misalnya posisi agent, episode berjalan, langkah yang diambil, atau perubahan perilaku dari episode ke episode.

Komponen utama yang harus tersedia dalam praktikum ini adalah:

- **grid** sebagai ruang gerak agent,
- **obstacle** sebagai rintangan yang memberi penalti,
- **start** sebagai posisi awal agent,
- **goal** sebagai target yang memberi reward besar,
- **agent** sebagai entitas yang belajar,
- **reward system** sebagai sinyal umpan balik,
- **Q-table** sebagai penyimpanan nilai belajar,
- **training loop** sebagai proses latihan berulang,
- **debug visualization** sebagai alat observasi.

Intuisi praktisnya adalah begini: `GridWorld` menyediakan dunia, `QLearningAgent` mengambil keputusan, `QTable` menyimpan apa yang sudah dipelajari, `TrainingManager` menjalankan latihan berulang, dan `QLearningDebugUI` membantu kita melihat apakah agent benar-benar belajar.

Sebelum lanjut ke parameter, mahasiswa perlu memahami bahwa kualitas hasil Q-Learning tidak hanya ditentukan oleh rumus, tetapi juga oleh struktur implementasi. Jika lingkungan, reward, Q-table, dan training loop tidak terpisah dengan baik, akan sulit mengetahui apakah masalah berasal dari lingkungan, agent, tabel nilai, atau proses pelatihan.

### Inti yang Harus Ditekankan

- Praktikum Q-Learning membutuhkan **pemisahan script** agar lingkungan, agent, tabel nilai, pelatihan, dan visualisasi mudah dikontrol.
- `QTable.cs` adalah bagian penting karena menyimpan **nilai Q** yang menjadi dasar keputusan agent.
- `TrainingManager.cs` dan `QLearningDebugUI.cs` membantu mahasiswa mengamati apakah agent belajar dari episode ke episode.

### Transisi ke Slide Berikutnya

Setelah komponen praktikum jelas, langkah berikutnya adalah menentukan parameter yang akan mengatur proses belajar agent.

---

## Slide 063 - Parameter Praktikum Q-Learning

### Narasi

Pada slide ini kita fokus pada **parameter** yang akan mengatur proses belajar agent dalam praktikum Q-Learning. Parameter ini menentukan seberapa cepat agent memperbarui nilai Q, seberapa besar pengaruh reward masa depan, dan bagaimana keseimbangan antara eksplorasi serta eksploitasi.

```text
learningRate
discountFactor
epsilon
epsilonDecay
minEpsilon
episodeCount
maxStepsPerEpisode
stepPenalty
goalReward
obstaclePenalty
```

Secara intuitif, parameter ini bisa dikelompokkan menjadi tiga bagian:

- **Hyperparameter pembelajaran**: `learningRate`, `discountFactor`, `epsilon`, `epsilonDecay`, `minEpsilon`.
- **Kontrol episode**: `episodeCount`, `maxStepsPerEpisode`.
- **Reward lingkungan**: `stepPenalty`, `goalReward`, `obstaclePenalty`.

`learningRate` menentukan seberapa besar perubahan nilai Q pada setiap langkah. Nilai terlalu kecil membuat belajar lambat, sedangkan nilai terlalu besar dapat membuat nilai Q tidak stabil.

`discountFactor` menentukan seberapa penting reward di masa depan. Nilai dekat 1 membuat agent lebih memperhatikan hasil jangka panjang, sedangkan nilai kecil membuat agent lebih reaktif terhadap reward saat ini.

`epsilon` adalah probabilitas agent memilih aksi acak. Pada awal belajar, nilai `epsilon` yang cukup besar membantu agent menjelajahi grid. Seiring episode berjalan, `epsilon` dapat dikurangi melalui `epsilonDecay` hingga mencapai `minEpsilon`, sehingga agent lebih sering memilih aksi dengan `Q-value` terbaik.

```text
learningRate = 0.2
discountFactor = 0.9
epsilon = 0.3
stepPenalty = -0.01
goalReward = +1
obstaclePenalty = -1
```

Contoh nilai ini menunjukkan konfigurasi awal yang wajar. `learningRate = 0.2` memberi pembaruan yang cukup responsif. `discountFactor = 0.9` membuat agent tetap memperhatikan reward tujuan di langkah berikutnya. `epsilon = 0.3` memberi ruang eksplorasi tanpa membuat agent terlalu acak.

`stepPenalty = -0.01` memberi penalti kecil untuk setiap langkah, sehingga agent cenderung mencari jalur yang lebih efisien. `goalReward = +1` memberi reward positif saat mencapai goal. `obstaclePenalty = -1` memberi penalti lebih besar saat menabrak obstacle, sehingga agent belajar menghindari rintangan.

`episodeCount` menentukan berapa banyak episode latihan yang dijalankan. `maxStepsPerEpisode` membatasi jumlah langkah dalam satu episode agar proses tidak berjalan tanpa batas. Kedua parameter ini penting untuk menjaga stabilitas eksperimen dan memudahkan perbandingan hasil.

Mahasiswa dapat bereksperimen dengan parameter ini untuk melihat pengaruhnya terhadap perilaku agent. Misalnya, menurunkan `epsilon` terlalu cepat dapat membuat agent terjebak pada strategi awal, sedangkan `stepPenalty` yang terlalu besar dapat membuat agent terlalu menghindari langkah meskipun belum menemukan jalur terbaik.

Sebelum lanjut, mahasiswa perlu memahami bahwa parameter Q-Learning bukan sekadar angka, tetapi representasi dari kebijakan belajar agent. Nilai yang baik biasanya ditemukan melalui eksperimen dan pengamatan terhadap total reward, jumlah langkah, serta konsistensi perilaku agent antar episode.

### Inti yang Harus Ditekankan

- **Parameter Q-Learning** mengatur kecepatan belajar, eksplorasi, dan penilaian reward.
- `learningRate` dan `discountFactor` memengaruhi stabilitas serta orientasi jangka panjang agent.
- `epsilon`, `epsilonDecay`, dan `minEpsilon` mengatur keseimbangan antara **eksplorasi** dan **eksploitasi**.
- `stepPenalty`, `goalReward`, dan `obstaclePenalty` membentuk sinyal reward lingkungan.
- `episodeCount` dan `maxStepsPerEpisode` menjaga proses latihan tetap terkontrol.
- Eksperimen parameter bertujuan memahami perilaku agent, bukan hanya mencari satu nilai terbaik.

### Transisi ke Slide Berikutnya

Setelah parameter ditetapkan, langkah berikutnya adalah mengamati proses belajar secara langsung. Pada slide berikutnya, kita akan membahas **debug Q-Learning** untuk melihat episode, reward, epsilon, posisi agent, action, Q-value, dan policy pada grid.

---

## Slide 064 - Debug Q-Learning

### Narasi

Pada praktikum Q-Learning, bagian yang sering menentukan keberhasilan bukan hanya algoritma, tetapi **debugging** dan **visualisasi**. Mahasiswa perlu melihat apa yang sedang terjadi pada agent setiap episode, karena Q-Learning adalah proses belajar dari **reward** yang kumulatif. Tanpa tampilan debug, mahasiswa hanya melihat agent bergerak tanpa tahu apakah ia belajar, terjebak, atau reward-nya salah.

Debug yang perlu ditampilkan adalah informasi yang menggambarkan **keadaan belajar** dan **keputusan agent**. Informasi ini dapat ditampilkan di console, HUD, atau panel Unity:

- `episode` saat ini, untuk melihat progres pelatihan.
- `totalReward`, untuk menilai apakah agent semakin baik.
- `stepCount`, untuk mengetahui apakah agent cepat mencapai goal atau sering menabrak.
- `epsilon`, untuk melihat keseimbangan antara eksplorasi dan eksploitasi.
- `agentPosition`, untuk melacak posisi agent di grid.
- `chosenAction`, untuk mengetahui arah yang dipilih agent.
- `QValue` untuk setiap arah, untuk melihat estimasi nilai tiap aksi.
- `policyArrow` pada grid, untuk melihat kebijakan yang terbentuk.

Bagian yang paling penting untuk dipahami adalah `QValue` tiap arah. Nilai ini menunjukkan seberapa baik agent menilai aksi `up`, `down`, `left`, dan `right` dari posisi tertentu. Jika `QValue` masih mirip-mirip, agent belum menemukan pola yang jelas. Jika satu arah memiliki nilai lebih tinggi di dekat goal, berarti agent mulai membentuk **policy** yang mengarah ke tujuan.

Contoh visual berikut menunjukkan policy pada grid:

```text
↑  →  →  ↓
↑  #  →  ↓
↑  #  →  G
→  →  →  ↑
```

Pada visual tersebut, `#` adalah obstacle, `G` adalah goal, dan panah menunjukkan arah policy yang terbentuk. Mahasiswa dapat mengecek apakah panah membentuk jalur yang masuk akal, misalnya bergerak menjauhi obstacle dan menuju goal. Jika panah mengarah ke obstacle, membentuk loop, atau tidak berubah antar episode, berarti ada masalah pada reward, update Q-value, atau parameter belajar.

Visualisasi membuat proses belajar mudah dipahami karena mahasiswa tidak hanya melihat angka, tetapi juga melihat **perilaku** agent. Dari sini, mahasiswa dapat menilai apakah `totalReward` meningkat, `stepCount` menurun, dan `epsilon` menurun sesuai rencana. Sebelum lanjut, mahasiswa harus paham bahwa debug Q-Learning bukan sekadar menampilkan log, tetapi alat untuk memahami bagaimana agent membentuk policy dari pengalaman.

### Inti yang Harus Ditekankan

- Debug Q-Learning harus menampilkan `episode`, `totalReward`, `stepCount`, `epsilon`, `agentPosition`, `chosenAction`, `QValue` tiap arah, dan `policyArrow`.
- `QValue` adalah inti diagnosis: nilai yang tidak berubah atau tidak masuk akal menunjukkan masalah pada update, reward, atau parameter.
- Visualisasi grid membantu mahasiswa melihat policy secara langsung, bukan hanya membaca angka.
- Pola panah yang menuju goal dan menghindari obstacle menunjukkan agent mulai belajar dengan benar.

### Transisi ke Slide Berikutnya

Setelah memahami cara debug dan visualisasi Q-Learning, kita lanjut ke praktikum Opsi B: Unity ML-Agents Introduction, untuk melihat pendekatan agent belajar di arena sederhana dengan struktur reward, observation, dan action.

---

## Slide 065 - Praktikum Opsi B: Unity ML-Agents Introduction

### Narasi

Slide ini membuka **Praktikum Opsi B** dengan pengenalan **Unity ML-Agents**. Setelah konsep belajar pada grid sederhana, kita memindahkan ide yang sama ke scene Unity yang lebih visual.

```text
Agent belajar mencapai target di arena sederhana.
```

Intuisi utamanya sederhana: sebuah **agent** berada di arena, lalu belajar memilih gerakan agar sampai ke **target**. Agent tidak langsung diberi aturan lengkap; ia mencoba, menerima **reward**, dan memperbaiki perilaku dari pengalaman tersebut.

Scene praktikum cukup ringan agar mahasiswa fokus pada alur belajar:

- `plane` sebagai area dasar,
- `agent cube/robot` sebagai entitas yang belajar,
- `target` sebagai tujuan,
- `wall/obstacle` opsional untuk menambah tantangan.

Reward dirancang agar agent tahu kapan perilakunya baik atau buruk:

- `+1` jika mencapai `target`,
- `-1` jika jatuh atau keluar area,
- `-0.01` untuk setiap `step`.

Penalti kecil per `step` penting. Tanpa penalti ini, agent bisa saja bergerak lambat atau berputar-putar tanpa tujuan. Dengan penalti, agent terdorong menyelesaikan tugas secepat mungkin.

Observation adalah informasi yang dilihat agent sebelum memilih aksi:

- posisi `agent`,
- posisi `target`,
- `velocity agent`.

Informasi ini menjadi input bagi proses pengambilan keputusan. Agent tidak perlu memahami seluruh scene secara visual; cukup data numerik yang relevan untuk menilai posisi dan arah gerak.

Action yang tersedia juga sederhana:

- gerak `kiri/kanan`,
- gerak `maju/mundur`.

Setiap keputusan menghasilkan salah satu gerakan, lalu scene berubah, reward diberikan, dan agent menerima observation baru. Siklus inilah yang menjadi dasar praktikum.

Sebelum lanjut, mahasiswa perlu memahami hubungan antara **observation**, **action**, dan **reward**. Tiga elemen ini menentukan apakah agent belajar dengan benar.

### Inti yang Harus Ditekankan

- Praktikum Opsi B menggunakan **Unity ML-Agents** untuk melatih `agent` mencapai `target` di arena sederhana.
- `reward` membentuk perilaku: `+1` untuk sukses, `-1` untuk gagal, dan `-0.01` per `step` agar agent tidak bertele-tele.
- `observation` berisi posisi `agent`, posisi `target`, dan `velocity agent`; `action` berupa gerakan `kiri/kanan` serta `maju/mundur`.

### Transisi ke Slide Berikutnya

Selanjutnya, kita akan membedah komponen Unity dan method agent yang mendukung praktikum ini.

---

## Slide 066 - Komponen ML-Agents Praktikum

### Narasi

Slide ini menjelaskan **komponen Unity** yang diperlukan agar praktikum ML-Agents dapat berjalan. Setelah slide sebelumnya membahas reward, observation, dan action, sekarang kita melihat bagaimana elemen-elemen tersebut diimplementasikan dalam scene Unity.

Komponen pertama adalah objek-objek utama di scene, yaitu `Agent GameObject`, `Target GameObject`, dan `Ground`. `Agent GameObject` adalah objek yang akan belajar, `Target GameObject` adalah tujuan yang ingin dicapai, dan `Ground` menjadi area dasar tempat agent bergerak.

Selanjutnya ada `Behavior Parameters` dan `Decision Requester`. `Behavior Parameters` digunakan untuk mengatur konfigurasi perilaku agent, sedangkan `Decision Requester` menentukan kapan agent meminta keputusan. Dengan kata lain, komponen ini mengatur ritme interaksi antara agent dan lingkungan.

Komponen berikutnya adalah `Agent script` dan `training configuration`. `Agent script` berisi logika agent, terutama callback yang dipanggil oleh ML-Agents. `training configuration` menghubungkan scene dengan proses training, meskipun detail setup package dan training akan dibahas pada modul praktikum terpisah.

Metode penting pada agent adalah:

1. `OnEpisodeBegin()`  
   Dipanggil saat episode dimulai. Biasanya digunakan untuk me-reset posisi agent, target, atau state awal.

2. `CollectObservations()`  
   Dipanggil untuk mengumpulkan informasi lingkungan, misalnya posisi agent, posisi target, atau velocity agent.

3. `OnActionReceived()`  
   Dipanggil setelah keputusan diterima. Di sini agent mengeksekusi action, seperti bergerak maju, mundur, kiri, atau kanan.

4. `Heuristic()`  
   Dipanggil sebagai fallback jika model belum tersedia atau saat mode tertentu. Metode ini dapat digunakan untuk memberikan perilaku dasar sebelum agent benar-benar belajar.

Intuisi pentingnya adalah: komponen-komponen ini membentuk **loop interaksi** antara agent dan environment. Agent di-reset, mengamati lingkungan, menerima keputusan, lalu bertindak. Proses ini berulang hingga agent memperoleh perilaku yang lebih baik.

Sebelum lanjut ke rencana scene, mahasiswa perlu memahami bahwa setiap komponen memiliki peran berbeda. `Agent GameObject` adalah subjek belajar, `Target GameObject` adalah tujuan, `Ground` adalah batas area, `Behavior Parameters` mengatur konfigurasi, `Decision Requester` mengatur permintaan keputusan, `Agent script` mengimplementasikan callback, dan `training configuration` menghubungkan scene dengan proses training.

### Inti yang Harus Ditekankan

- `Agent GameObject`, `Target GameObject`, dan `Ground` adalah komponen scene utama yang membentuk lingkungan praktikum.
- `Behavior Parameters`, `Decision Requester`, `Agent script`, dan `training configuration` mengatur bagaimana agent dikonfigurasi, meminta keputusan, dan terhubung ke proses training.
- Callback `OnEpisodeBegin()`, `CollectObservations()`, `OnActionReceived()`, dan `Heuristic()` adalah bagian penting dari siklus perilaku agent.
- Detail setup package dan training tidak dibahas di sini, tetapi akan dijelaskan pada modul praktikum terpisah.

### Transisi ke Slide Berikutnya

Setelah memahami komponen-komponen ini, langkah berikutnya adalah menyusun rencana scene praktikum agar setiap komponen berada pada tempat yang tepat dan siap digunakan untuk eksperimen.

---

## Slide 067 - Rencana Scene Praktikum

### Narasi

Slide ini menunjukkan **rencana scene** yang akan digunakan dalam praktikum. Tujuannya bukan membuat game yang selesai, tetapi menyiapkan **environment** yang cukup sederhana agar mahasiswa dapat melihat bagaimana agent belajar dari interaksi. Ada dua scene utama: satu untuk **Q-learning** dan satu untuk **ML-Agents**.

Untuk **Q-learning**, struktur scene direncanakan sebagai berikut:

```text
QLearningGridScene
├── GridWorld
├── Agent
├── Goal
├── Obstacles
└── Debug UI
```

- `GridWorld` menjadi representasi **state space**, yaitu kumpulan posisi atau sel yang dapat ditempuh agent.
- `Agent` adalah entitas yang memilih **action**, misalnya bergerak ke atas, bawah, kiri, atau kanan.
- `Goal` memberikan sinyal **reward** positif ketika agent mencapai tujuan.
- `Obstacles` memberi konsekuensi negatif atau memblokir jalur tertentu.
- `Debug UI` membantu mahasiswa mengamati nilai Q, episode, reward, atau policy yang terbentuk selama proses belajar.

Untuk **ML-Agents**, struktur scene direncanakan sebagai berikut:

```text
MLAgentsIntroScene
├── Ground
├── LearningAgent
├── Target
├── Obstacles
├── Behavior Parameters
└── Training Area
```

- `Ground` menjadi dasar environment tempat agent bergerak.
- `LearningAgent` adalah agent yang akan dilatih untuk mencapai target.
- `Target` menjadi objek yang harus dicapai oleh agent.
- `Obstacles` membatasi ruang gerak agent dan memengaruhi jalur yang dipilih.
- `Behavior Parameters` mengatur parameter perilaku, seperti reward, observation, atau action.
- `Training Area` membatasi area tempat proses pembelajaran berlangsung.

Kedua scene memiliki tujuan yang sama: memperlihatkan bahwa perilaku agent tidak hanya dibuat secara manual, tetapi dapat terbentuk dari **interaksi** dengan environment. Dalam istilah reinforcement learning, agent menerima **observation**, memilih **action**, lalu menerima **reward** atau **penalty**. Dari proses berulang tersebut, agent diharapkan membentuk **policy** yang semakin baik.

Sebelum masuk ke eksperimen, mahasiswa perlu memahami bahwa setiap komponen scene memiliki peran konseptual. `GridWorld` dan `Ground` bukan sekadar objek visual, tetapi bagian dari environment. `Goal` dan `Target` bukan hanya tujuan visual, tetapi sumber sinyal reward. `Obstacles` memengaruhi ruang pencarian dan perilaku belajar. Dengan memahami pemetaan ini, mahasiswa dapat membaca scene sebagai sistem pembelajaran, bukan hanya susunan GameObject.

### Inti yang Harus Ditekankan

- **QLearningGridScene** terdiri dari `GridWorld`, `Agent`, `Goal`, `Obstacles`, dan `Debug UI` untuk memperlihatkan Q-learning pada lingkungan grid.
- **MLAgentsIntroScene** terdiri dari `Ground`, `LearningAgent`, `Target`, `Obstacles`, `Behavior Parameters`, dan `Training Area` untuk setup ML-Agents.
- Kedua scene dirancang sebagai **environment minimal** yang memungkinkan agent belajar dari interaksi, bukan sebagai game final.
- Mahasiswa harus memahami hubungan antara komponen scene dengan konsep **state**, **action**, **reward**, dan **policy**.

### Transisi ke Slide Berikutnya

Setelah struktur scene dipahami, pembahasan akan dilanjutkan ke eksperimen mahasiswa, yaitu bagaimana perubahan parameter dan lingkungan dapat memengaruhi proses belajar agent.

---

## Slide 068 - Eksperimen Mahasiswa

### Narasi

Pada slide ini, mahasiswa tidak hanya menjalankan scene praktikum, tetapi melakukan **eksperimen terkontrol**. Tujuannya adalah melihat bagaimana perubahan sinyal reward dan parameter pembelajaran mengubah perilaku agent. Intuisi pentingnya sederhana: agent belajar dari umpan balik numerik, sehingga jika umpan balik itu diubah, jalur yang dipilih, kecepatan belajar, dan perilaku akhir juga dapat berubah.

Sepuluh eksperimen pada slide dapat dikelompokkan menjadi empat bagian:

| Kelompok | Parameter atau aktivitas | Yang ingin dipahami |
|---|---|---|
| **Reward shaping** | `reward_goal`, `penalty_obstacle`, `penalty_step` | Bagaimana sinyal positif dan negatif membentuk tujuan agent |
| **Hyperparameter** | `epsilon`, `learning_rate`, `discount_factor` | Bagaimana eksplorasi, kecepatan update, dan nilai reward masa depan memengaruhi pembelajaran |
| **Lingkungan** | penambahan obstacle | Bagaimana agent menyesuaikan perilaku ketika topologi grid berubah |
| **Analisis hasil** | membandingkan training awal/akhir, mengamati policy, membandingkan dengan `A*` | Apakah agent benar-benar belajar dan bagaimana hasilnya dibandingkan pathfinding rule-based |

Untuk **reward shaping**, mahasiswa dapat mengubah `reward_goal` menjadi lebih besar atau lebih kecil. Jika reward tujuan terlalu kecil, agent mungkin lambat belajar. Jika terlalu besar, agent bisa terlalu fokus pada tujuan dan mengabaikan biaya langkah atau rintangan. `penalty_obstacle` memberi sinyal negatif saat agent menabrak obstacle. Nilai yang terlalu kecil membuat agent kurang menghindari rintangan, sedangkan nilai yang terlalu besar dapat membuat agent terlalu hati-hati. `penalty_step` memberi biaya untuk setiap langkah, sehingga mendorong agent mencari jalur yang lebih pendek. Namun, jika biaya langkah terlalu besar, agent bisa menjadi ragu-ragu atau sulit bergerak.

Untuk **hyperparameter**, `epsilon` mengatur keseimbangan antara eksplorasi dan eksploitasi. Nilai `epsilon` yang tinggi membuat agent sering memilih aksi acak, sehingga banyak mencoba. Nilai yang rendah membuat agent lebih mengikuti `Q-table` yang sudah terbentuk. `learning_rate` menentukan seberapa cepat nilai `Q(s,a)` diperbarui. Nilai terlalu tinggi dapat membuat pembelajaran tidak stabil, sedangkan nilai terlalu rendah membuat proses belajar lambat. `discount_factor` menentukan seberapa penting reward di masa depan. Nilai rendah membuat agent lebih mementingkan reward dekat, sedangkan nilai tinggi mendorong agent mempertimbangkan jalur yang lebih panjang menuju tujuan.

Eksperimen lingkungan dilakukan dengan menambahkan obstacle. Tujuannya bukan hanya membuat grid lebih sulit, tetapi melihat apakah agent mampu menyesuaikan policy ketika jalur sebelumnya tidak lagi tersedia. Mahasiswa juga diminta membandingkan perilaku pada training awal dan akhir. Pada awal training, perilaku agent biasanya masih acak karena `Q-table` belum terbentuk dengan baik. Pada akhir training, agent seharusnya menunjukkan pola yang lebih konsisten, misalnya bergerak menuju goal, menghindari obstacle, dan memilih jalur yang lebih efisien.

Bagian terakhir adalah mengamati **policy** yang terbentuk. Dalam Q-learning, policy dapat dilihat sebagai pilihan aksi dengan nilai `Q(s,a)` terbesar pada setiap state. Mahasiswa dapat mencatat apakah agent cenderung memilih aksi tertentu, apakah ada state yang masih ambigu, dan apakah jalur yang dihasilkan lebih pendek atau lebih aman. Perbandingan dengan `A*` juga penting. `A*` adalah pathfinding rule-based yang biasanya menghasilkan jalur deterministik berdasarkan heuristic dan biaya. Perilaku yang dipelajari dari episode dapat berbeda: mungkin tidak selalu optimal, tetapi bisa menunjukkan adaptasi terhadap perubahan lingkungan atau reward design.

### Inti yang Harus Ditekankan

- Eksperimen ini bertujuan menguji hubungan antara **reward**, **hyperparameter**, lingkungan, dan perilaku agent.
- Parameter seperti `reward_goal`, `penalty_obstacle`, `penalty_step`, `epsilon`, `learning_rate`, dan `discount_factor` sebaiknya diubah secara terkontrol agar efeknya dapat dijelaskan.
- Hasil yang penting bukan hanya agent mencapai goal, tetapi perubahan `Q-table`, policy, panjang jalur, konsistensi perilaku, dan kemampuan menyesuaikan diri terhadap obstacle baru.
- Perbandingan dengan `A*` membantu mahasiswa membedakan perilaku rule-based yang deterministik dengan perilaku yang terbentuk melalui pembelajaran.

### Transisi ke Slide Berikutnya

Setelah mahasiswa menjalankan variasi eksperimen ini, kita akan masuk ke evaluasi praktikum untuk menilai apakah agent benar-benar belajar, apakah reward design sudah tepat, dan bagaimana hasilnya dibandingkan dengan pathfinding klasik.

---

## Slide 069 - Evaluasi Praktikum

### Narasi

Setelah mahasiswa mencoba berbagai parameter, langkah berikutnya adalah **evaluasi praktikum**. Tujuannya bukan hanya melihat apakah agent berhasil mencapai goal, tetapi memahami **mengapa** perilaku agent berubah selama proses belajar.

Evaluasi ini membantu mahasiswa membaca hasil eksperimen secara lebih kritis. Mahasiswa perlu memeriksa apakah perubahan parameter benar-benar memengaruhi perilaku, dan apakah hasil yang muncul sesuai dengan tujuan desain game.

Beberapa hal yang perlu diperiksa adalah:

1. **Pembelajaran dari episode** — apakah agent menunjukkan peningkatan dari episode ke episode, misalnya semakin sering mencapai goal atau semakin sedikit langkah yang diambil.
2. **Pengaruh reward** — apakah perubahan `reward goal`, `penalty obstacle`, dan `penalty langkah` mengubah prioritas agent.
3. **Pengaruh epsilon** — apakah nilai `epsilon` yang tinggi membuat agent lebih banyak mencoba aksi baru, sedangkan nilai yang rendah membuat agent lebih mengikuti `Q-value` yang sudah ada.
4. **Perubahan Q-table** — apakah `Q-table` berubah selama `training`, dan apakah perubahan tersebut sesuai dengan pengalaman yang diterima agent.
5. **Kualitas jalur** — apakah agent menemukan jalur yang lebih baik, misalnya lebih pendek, lebih aman, atau lebih konsisten.
6. **Reward design** — apakah susunan `reward` sudah mengarahkan agent ke perilaku yang diinginkan, bukan hanya ke angka reward tertinggi.
7. **Reward hacking** — apakah agent menemukan cara mendapatkan reward tinggi dengan perilaku yang tidak sesuai tujuan desain.
8. **Stabilitas training** — apakah hasil belajar stabil, tidak terlalu berfluktuasi, dan tidak menghasilkan `policy` yang tidak konsisten.
9. **Keterjelasan hasil** — apakah mahasiswa dapat menjelaskan keputusan agent berdasarkan `Q-value`, `reward`, dan parameter yang digunakan.
10. **Perbandingan dengan A*** — apakah hasil belajar agent berbeda dari jalur yang dihasilkan oleh `A*`, baik dari proses maupun sifat hasilnya.

Dalam praktik, mahasiswa tidak perlu menjawab semua pertanyaan dengan sempurna. Yang penting adalah mampu menghubungkan **parameter**, **pengalaman**, dan **perilaku agent**. Dengan cara ini, mahasiswa tidak hanya melihat agent bergerak, tetapi juga memahami mekanisme di balik keputusan yang diambil.

### Inti yang Harus Ditekankan

- Evaluasi praktikum bertujuan memahami **proses belajar**, bukan hanya melihat hasil akhir.
- Perubahan `reward`, `epsilon`, `learning rate`, dan `discount factor` harus dikaitkan dengan perubahan perilaku agent.
- `Q-table` adalah bukti bahwa agent sedang memperbarui pengetahuan tentang nilai aksi.
- Hasil belajar perlu diperiksa dari sisi kualitas jalur, stabilitas, dan kemungkinan `reward hacking`.
- Perbandingan dengan `A*` membantu membedakan antara **pathfinding eksplisit** dan **kebijakan hasil belajar**.

### Transisi ke Slide Berikutnya

Setelah kita mengevaluasi hasil praktikum, langkah berikutnya adalah membandingkan secara lebih sistematis bagaimana `Q-learning` dan `A*` menghasilkan jalur, serta apa perbedaan mendasar di antara keduanya.

---

## Slide 070 - Q-Learning vs A*

### Narasi

Pada slide ini kita membandingkan dua cara yang sering muncul dalam game AI: `A*` dan **Q-learning**. Keduanya bisa menghasilkan perilaku yang terlihat mirip, misalnya NPC bergerak menuju target. Namun, cara berpikirnya berbeda.

`A*` adalah algoritma **pathfinding** yang bekerja pada **graph**. Input utamanya adalah struktur graph, bobot tepi, dan **heuristic** untuk memperkirakan jarak ke target. Outputnya adalah **path** yang dapat langsung digunakan oleh agent. Karena prosesnya deterministik dan berbasis pencarian, `A*` relatif mudah diuji: kita bisa memeriksa node yang diekspansi, jalur yang dihasilkan, dan apakah heuristiknya bekerja dengan benar.

**Q-learning** berbeda. Ia adalah metode **reinforcement learning** yang belajar dari **reward** dan pengalaman. Agent tidak diberi graph lengkap atau jalur yang harus diikuti. Agent memilih `action` pada setiap `state`, menerima reward, lalu memperbarui estimasi nilai aksi dalam `Q-table`. Setelah cukup banyak episode, agent membentuk **policy** yang memetakan `state` ke `action` yang dianggap baik.

Perbedaan utamanya ada pada sumber pengetahuan. `A*` mengandalkan pengetahuan struktur lingkungan yang sudah tersedia. **Q-learning** membangun pengetahuan dari trial-error. Karena itu, **Q-learning** membutuhkan **training**, sedangkan `A*` tidak. Hasil `A*` biasanya berupa jalur eksplisit, sedangkan hasil **Q-learning** berupa kebijakan belajar yang mungkin baru terlihat baik setelah beberapa episode.

Untuk game, `A*` sangat cocok ketika lingkungan bisa dimodelkan sebagai graph dan kita ingin jalur yang cepat, stabil, dan mudah di-debug. **Q-learning** lebih relevan ketika kita ingin agent belajar dari reward, misalnya memilih strategi, menghindari jebakan, atau mengambil keputusan yang tidak mudah dirumuskan sebagai graph sederhana. Namun, karena perilakunya muncul dari proses belajar, debugging **Q-learning** biasanya memerlukan analisis `Q-value`, reward, dan stabilitas training.

Secara intuisi praktis, bayangkan NPC yang hanya perlu pergi dari titik A ke titik B. `A*` adalah pilihan yang langsung dan efisien. Bayangkan NPC yang harus belajar kapan menyerang, kapan mundur, atau kapan mengambil item berdasarkan reward. Di situlah **Q-learning** mulai masuk. Keduanya tidak saling menggantikan secara mutlak; mereka menjawab kebutuhan desain yang berbeda.

### Inti yang Harus Ditekankan

- `A*` adalah **pathfinding** berbasis graph dan heuristic; outputnya **path** yang langsung dapat dipakai.
- **Q-learning** adalah **reinforcement learning** berbasis reward dan pengalaman; outputnya **policy** hasil belajar.
- `A*` tidak perlu training dan relatif mudah di-debug; **Q-learning** perlu training dan analisis `Q-value`.
- Untuk jalur eksplisit, `A*` lebih praktis; untuk belajar dari trial-error, **Q-learning** lebih relevan.

### Transisi ke Slide Berikutnya

Setelah memahami perbedaan ini, pertanyaan berikutnya adalah: jika `A*` sudah bisa mencari jalur dengan baik, mengapa kita tetap perlu mempelajari **Q-learning**? Slide berikutnya akan membahas alasan konseptual dan praktisnya.

---

## Slide 071 - Mengapa Belajar Q-Learning Jika Ada A*?

### Narasi

Pada slide ini kita menjawab pertanyaan yang sering muncul setelah membandingkan `A*` dan `Q-learning`:

```text
Jika A* bisa mencari path, mengapa belajar Q-learning?
```

Jawabannya bukan karena `Q-learning` selalu lebih baik untuk pathfinding. Untuk masalah jalur yang grafnya sudah jelas, `A*` tetap lebih praktis, lebih mudah diuji, dan langsung menghasilkan `path`. Namun, `Q-learning` memperkenalkan cara berpikir yang berbeda: agent tidak diberi aturan lengkap, tetapi belajar dari `reward` dan pengalaman.

Perbedaan utamanya ada pada bentuk solusi. `A*` menghasilkan jalur untuk satu masalah tertentu, sedangkan `Q-learning` menghasilkan **policy** berupa nilai `Q-value` untuk setiap pasangan `state` dan `action`. Artinya, setelah belajar, agent dapat memilih aksi berdasarkan estimasi keuntungan jangka panjang, bukan hanya mengikuti heuristik jarak.

Hal ini penting karena banyak keputusan dalam game tidak mudah dirumuskan sebagai graph sederhana. Keputusan tersebut bisa bergantung pada `reward`, situasi yang berubah, atau perilaku yang perlu ditingkatkan melalui trial-error. `Q-learning` menjadi dasar untuk memahami `Deep RL` dan `ML-Agents`, karena di sana `state`, `action`, dan `reward` menjadi bahasa utama untuk melatih perilaku agent.

Sebelum lanjut, mahasiswa perlu memahami bahwa `Q-learning` bukan pengganti `A*` untuk semua kebutuhan. Ia adalah pintu masuk ke reinforcement learning: cara membuat agent belajar kebijakan dari lingkungan, bukan hanya menghitung jalur.

### Inti yang Harus Ditekankan

- `A*` cocok untuk pathfinding eksplisit karena praktis, mudah diuji, dan langsung menghasilkan `path`.
- `Q-learning` menghasilkan **policy** dari `reward`, bukan hanya jalur.
- `Q-value` membantu agent memilih `action` berdasarkan estimasi keuntungan jangka panjang.
- `Q-learning` membuka pemahaman ke `Deep RL` dan `ML-Agents`.

### Transisi ke Slide Berikutnya

Setelah memahami mengapa `Q-learning` tetap penting meskipun ada `A*`, kita lanjut ke cara machine learning dapat diintegrasikan dengan teknik klasik seperti `FSM`, `Behavior Tree`, dan `NavMesh`.

---

## Slide 072 - Integrasi ML dengan Game AI Klasik

### Narasi

Pada slide ini, kita melihat bahwa **Machine Learning** tidak selalu harus menggantikan **Game AI klasik**. Dalam banyak game, sistem klasik seperti `FSM`, `Behavior Tree`, `Utility AI`, dan `NavMesh` tetap menjadi tulang punggung perilaku NPC karena mudah dikontrol, mudah di-debug, dan konsisten secara desain.

Peran ML lebih tepat dilihat sebagai lapisan tambahan yang membantu sistem klasik menjadi lebih adaptif. Misalnya, model ML dapat memperkirakan parameter seperti `agresivitas`, `kecepatan reaksi`, atau `probabilitas memilih aksi`, tanpa mengambil alih seluruh alur keputusan.

Pendekatan ini penting karena game AI biasanya membutuhkan keseimbangan antara **kecerdasan** dan **keandalan**. Jika seluruh perilaku NPC diserahkan ke model, hasilnya bisa sulit diprediksi dan sulit disesuaikan oleh desainer. Sebaliknya, jika hanya memakai aturan tetap, NPC bisa terasa kaku. Integrasi keduanya memberi ruang untuk perilaku yang lebih hidup tetapi tetap terstruktur.

Sebagai gambaran, alur integrasi dapat dilihat sebagai berikut:

1. `FSM` menentukan mode besar, misalnya `Explore`, `Combat`, atau `Flee`.
2. `Behavior Tree` menyusun struktur perilaku di dalam mode tersebut, misalnya memilih cabang `Combat`.
3. `Utility AI` menilai beberapa aksi yang tersedia, misalnya `Attack`, `Take Cover`, atau `Retreat`.
4. Model ML memberikan nilai parameter, misalnya tingkat `agresivitas` enemy berdasarkan kondisi game.
5. `NavMeshAgent` mengeksekusi gerakan, misalnya bergerak ke posisi cover yang dipilih.

Dalam contoh pada slide, `Behavior Tree` memilih `Combat`, `Utility AI` memilih `Take Cover`, model ML mengatur `agresivitas`, lalu `NavMeshAgent` bergerak ke cover. Urutan ini menunjukkan bahwa setiap komponen memiliki tanggung jawab yang berbeda: struktur keputusan, pemilihan aksi, penyesuaian parameter, dan eksekusi pergerakan.

Secara praktis, mahasiswa perlu memahami bahwa ML di sini bukan pengganti seluruh NPC brain. ML lebih berfungsi sebagai **penyedia parameter** atau **penilai kondisi** yang memperkaya keputusan klasik. Dengan cara ini, desainer masih dapat mengatur batas perilaku, sementara model membantu NPC merespons situasi yang lebih kompleks.

Sebelum lanjut, hal yang penting adalah memahami **pemisahan tanggung jawab** antara sistem klasik dan ML. Jika arsitektur ini jelas, mahasiswa akan lebih mudah memahami bagaimana model dapat dimasukkan ke dalam pipeline game AI tanpa merusak stabilitas perilaku NPC.

### Inti yang Harus Ditekankan

- **ML tidak harus menggantikan Game AI klasik**, tetapi dapat mengintegrasikannya sebagai lapisan adaptif.
- Sistem klasik seperti `FSM`, `Behavior Tree`, `Utility AI`, dan `NavMesh` tetap penting untuk struktur, keandalan, dan kontrol desain.
- Model ML paling berguna untuk mengatur parameter seperti `agresivitas`, probabilitas aksi, atau respons terhadap kondisi game.
- Integrasi yang baik menjaga pemisahan tanggung jawab: struktur keputusan, pemilihan aksi, penyesuaian parameter, dan eksekusi pergerakan.

### Transisi ke Slide Berikutnya

Selanjutnya, kita akan melihat bagaimana ML dapat digunakan untuk memodelkan pemain, bukan hanya NPC, dengan pendekatan yang lebih sederhana sebagai dasar praktikum.

---

## Slide 073 - ML dan Player Modeling

### Narasi

Pada slide ini kita membahas **player modeling**, yaitu cara game mengenali pola bermain pemain berdasarkan data yang dikumpulkan selama permainan.

Ide utamanya adalah game tidak hanya perlu membuat NPC bergerak atau memilih aksi, tetapi juga perlu memahami siapa yang sedang bermain. Pemahaman ini berguna untuk menyesuaikan bantuan, tantangan, atau respons sistem terhadap pemain.

Di sini kita menggunakan **supervised learning**. Artinya, model belajar dari data yang sudah memiliki label. Labelnya bisa berupa kategori gaya bermain, misalnya agresif, hati-hati, eksploratif, atau kolektif.

Contoh sederhana yang ditampilkan pada slide adalah:

```text
Input:
accuracy
damageTaken
roomsVisited
itemsCollected

Output:
playStyle
```

Fitur input tersebut mewakili sinyal perilaku yang dapat diukur dari gameplay:

- `accuracy` menunjukkan seberapa tepat pemain dalam menyerang atau menembak.
- `damageTaken` menunjukkan seberapa sering pemain menerima risiko atau kesulitan.
- `roomsVisited` menunjukkan kecenderungan pemain untuk mengeksplorasi area.
- `itemsCollected` menunjukkan kecenderungan pemain untuk mengumpulkan objek di lingkungan.

Dari keempat sinyal itu, model dapat menghasilkan `playStyle` sebagai output. Dengan kata lain, model belajar memetakan pola statistik permainan ke kategori gaya bermain.

Model seperti ini dapat menggantikan **rule-based classifier**. Rule-based classifier menggunakan aturan manual, misalnya jika `damageTaken` tinggi dan `accuracy` rendah, maka pemain dianggap hati-hati. Keunggulan model supervised adalah ia dapat mempelajari pola dari data, termasuk hubungan yang tidak mudah dirumuskan sebagai aturan sederhana.

Namun, untuk praktikum awal, **rule-based classifier** masih cukup. Alasannya sederhana: lebih mudah diimplementasikan, mudah diuji, mudah didebug, dan tidak membutuhkan dataset besar. **Machine learning** lebih tepat diperkenalkan sebagai pengembangan lanjut setelah mahasiswa sudah memahami alur dasar player modeling.

Sebelum lanjut, hal penting yang harus dipahami adalah bahwa player modeling bukan sekadar menghitung statistik. Ia adalah langkah untuk membuat keputusan yang lebih kontekstual: sistem perlu tahu siapa pemainnya sebelum menyesuaikan tantangan atau memberikan bantuan.

### Inti yang Harus Ditekankan

- **Player modeling** menggunakan supervised learning untuk memetakan fitur gameplay ke kategori `playStyle`.
- Fitur seperti `accuracy`, `damageTaken`, `roomsVisited`, dan `itemsCollected` adalah sinyal perilaku pemain yang dapat diukur.
- Model dapat menggantikan rule-based classifier, tetapi untuk praktikum awal rule-based lebih aman karena sederhana, mudah diuji, dan tidak membutuhkan dataset besar.

### Transisi ke Slide Berikutnya

Setelah memahami bagaimana model dapat mengenali gaya pemain, langkah berikutnya adalah menggunakan prediksi tersebut untuk menyesuaikan permainan. Pada slide berikutnya kita akan melihat bagaimana machine learning dapat membantu DDA, misalnya memprediksi pemain akan kesulitan dan memberi bantuan lebih awal.

---

## Slide 074 - ML dan DDA

### Narasi

Pada slide ini kita melihat bagaimana **machine learning** dapat memperluas kemampuan **DDA** atau **Dynamic Difficulty Adjustment**. DDA adalah mekanisme yang menyesuaikan tingkat kesulitan game secara dinamis agar pemain tetap tertantang tetapi tidak frustrasi. Selama ini DDA sering dibuat dengan aturan sederhana: jika kondisi pemain tertentu terpenuhi, game mengubah parameter. Pendekatan itu mudah diimplementasikan, tetapi sifatnya masih reaktif.

Machine learning memberi kemampuan untuk **memprediksi** kondisi pemain sebelum kejadian buruk benar-benar terjadi. Model dapat mempelajari pola dari data permainan, misalnya frekuensi kegagalan, waktu bertahan, penggunaan item, atau respons terhadap tantangan. Dari pola tersebut, model memperkirakan apakah `player` akan kesulitan dalam beberapa detik ke depan.

Contoh penggunaan ML untuk DDA:

- memprediksi `player` akan kalah,
- menyesuaikan `difficulty` sebelum frustrasi,
- mengatur `spawn` berdasarkan prediksi performa,
- memilih adaptasi yang paling efektif.

Perhatikan perbedaannya dengan DDA berbasis aturan. Aturan biasanya menunggu kondisi terlihat:

```text
Jika health rendah, turunkan difficulty.
```

Pendekatan ini sederhana dan cocok untuk praktikum awal. Namun, `health` rendah baru diketahui setelah pemain sudah menerima banyak damage. Penyesuaian datang terlambat, sehingga pengalaman pemain bisa terasa mendadak.

DDA berbasis prediksi bekerja lebih awal:

```text
Model memprediksi player akan gagal dalam 30 detik.
Game memberi bantuan lebih awal.
```

Di sini, game tidak menunggu `health` habis. Model membaca sinyal-sinyal yang lebih halus, misalnya pemain sering salah arah, gagal menghindari serangan, atau waktu menyelesaikan area meningkat. Lalu game dapat memberi bantuan yang lebih halus, seperti menambah `health pack`, mengurangi jumlah musuh, atau membuka jalur alternatif.

Yang perlu dipahami mahasiswa adalah **pergeseran dari reaktif menjadi prediktif**. DDA rule-based menjawab pertanyaan: “Apa yang harus dilakukan saat kondisi tertentu terjadi?” DDA berbasis ML menjawab: “Apa yang mungkin terjadi, dan bagaimana menyesuaikan game agar pemain tetap menikmati tantangan?”

Dalam implementasi, model tidak menggantikan seluruh desain game. Ia membantu memilih adaptasi yang paling sesuai. Misalnya, jika prediksi menunjukkan pemain akan gagal karena musuh terlalu cepat, game bisa menurunkan `spawn rate` musuh. Jika masalahnya adalah pemain tidak memahami tujuan, game bisa memberi petunjuk lebih jelas. Dengan cara ini, DDA menjadi lebih personal dan lebih halus.

### Inti yang Harus Ditekankan

- ML membantu DDA dengan **memprediksi kegagalan** sebelum benar-benar terjadi.
- DDA rule-based bersifat **reaktif**, sedangkan DDA berbasis prediksi bersifat **lebih awal dan lebih halus**.
- Model dapat memilih adaptasi seperti penyesuaian `difficulty`, pengaturan `spawn`, atau pemberian bantuan yang lebih tepat.

### Transisi ke Slide Berikutnya

Setelah memahami bagaimana ML dapat membantu DDA, langkah berikutnya adalah melihat hubungan ML dengan PCG, yaitu proses menghasilkan atau mengevaluasi konten game seperti level, dungeon, dan elemen adaptif lainnya.

---

## Slide 075 - ML dan PCG

### Narasi

**Machine Learning** tidak hanya dipakai untuk perilaku NPC atau penyesuaian difficulty. ML juga dapat membantu **PCG**, yaitu **Procedural Content Generation**, yaitu proses membuat konten game secara prosedural, seperti level, dungeon, atau variasi lingkungan.

Intuisi praktisnya sederhana. Pada PCG biasa, sistem sering memakai aturan dan `seed` untuk menghasilkan konten. Dengan ML, sistem tidak hanya menghasilkan konten secara acak, tetapi juga bisa menilai kualitas konten atau memilih konten yang lebih sesuai.

Ada dua peran utama ML dalam PCG:

- **Evaluasi konten**: model memprediksi apakah sebuah `level` terlalu sulit, membosankan, atau kurang seimbang.
- **Generasi atau seleksi konten**: model memilih `dungeon seed` yang cocok, atau generator belajar dari contoh `level` buatan designer.

Contoh yang paling mudah dipahami adalah pemilihan `dungeon seed`. Sistem dapat membuat banyak kandidat dungeon, lalu model menilai kandidat mana yang paling sesuai dengan target gameplay. Dengan cara ini, PCG tidak hanya “membuat”, tetapi juga “memilih” konten yang lebih baik.

Contoh lain adalah **adaptive content generation** berdasarkan `player profile`. Jika data menunjukkan pemain cenderung kesulitan pada area tertentu, sistem dapat menghasilkan atau memilih konten yang lebih membantu. Namun, detail implementasinya biasanya masuk ke topik lanjutan.

Pada mata kuliah ini, mahasiswa cukup memahami hubungan konseptual antara ML dan PCG. Yang penting dipahami adalah bahwa ML dapat menjadi alat bantu untuk **menilai**, **memilih**, atau **menghasilkan** konten game secara lebih adaptif, bukan sekadar pengganti aturan prosedural.

### Inti yang Harus Ditekankan

- **PCG** adalah cara membuat konten game secara prosedural, seperti level, dungeon, atau variasi lingkungan.
- **ML** dapat berperan untuk **evaluasi**, **seleksi**, atau **generasi** konten.
- Contoh penerapannya adalah memprediksi kesulitan `level`, memilih `dungeon seed`, atau menyesuaikan konten berdasarkan `player profile`.
- Pada level mata kuliah ini, fokusnya adalah memahami hubungan konseptual ML dengan PCG, bukan implementasi teknis yang mendalam.

### Transisi ke Slide Berikutnya

Setelah melihat peluang ML dalam PCG, kita perlu memahami sisi lain dari penggunaannya, yaitu risiko dan tantangan teknis ketika ML diterapkan dalam game.

---

## Slide 076 - Risiko Penggunaan ML dalam Game

### Narasi

Pada slide ini, kita berhenti sejenak dari peluang dan melihat sisi risikonya. Intuisi praktisnya sederhana: **machine learning** bisa membuat agent lebih adaptif, tetapi juga membuat perilaku game lebih sulit diprediksi. Dalam desain game, pemain biasanya mengharapkan tantangan yang adil, musuh yang bisa dibaca, dan sistem yang tetap stabil saat diuji.

Risiko utama muncul karena keputusan sering dihasilkan oleh model, bukan oleh aturan yang ditulis langsung. Akibatnya, ketika perilaku agent tidak sesuai, proses `debug` menjadi lebih sulit. Kita tidak cukup hanya memeriksa satu kondisi `if` atau satu `state`; kita perlu menelusuri data, parameter, dan hasil `training`.

Beberapa risiko penting yang perlu dipahami mahasiswa:

- **Sulit di-debug** — penyebab perilaku salah tidak selalu terlihat langsung dari kode.
- **Hasil tidak selalu konsisten** — model bisa menghasilkan `action` yang berbeda pada situasi yang mirip.
- **Butuh data atau training** — kualitas perilaku sangat bergantung pada data dan proses pembelajaran.
- **Bisa menghasilkan behavior aneh** — agent mungkin mengambil keputusan yang tidak masuk akal dari sudut pandang pemain.
- **Sulit dikontrol designer** — batas perilaku tidak selalu bisa diatur seketat aturan eksplisit.
- **Setup teknis lebih kompleks** — pipeline data, model, dan integrasi ke engine game membutuhkan lebih banyak perhatian.
- **Performa training bisa mahal** — proses pembelajaran bisa memakan waktu, komputasi, dan sumber daya yang tidak kecil.

Karena itu, **machine learning** sebaiknya digunakan ketika memang memberi manfaat yang jelas. Misalnya, ketika sistem aturan biasa tidak cukup untuk menyesuaikan kesulitan, mengevaluasi konten, atau mempelajari pola pemain. Namun, jika tujuannya hanya membuat satu perilaku sederhana yang harus selalu benar, pendekatan yang lebih eksplisit biasanya lebih aman.

Yang harus dipahami mahasiswa sebelum lanjut adalah: ML bukan pengganti otomatis untuk semua sistem perilaku game. Ia adalah alat yang kuat, tetapi membawa biaya tambahan dalam hal debugging, konsistensi, kontrol desain, dan infrastruktur teknis.

### Inti yang Harus Ditekankan

- **ML memberi fleksibilitas**, tetapi juga menambah ketidakpastian pada perilaku game.
- Risiko terbesar ada pada **debugging**, **konsistensi**, **kontrol designer**, dan **biaya training**.
- ML sebaiknya dipilih hanya jika **manfaatnya jelas** dan bisa diuji dalam konteks game.

### Transisi ke Slide Berikutnya

Setelah memahami risikonya, kita perlu melihat sisi lain: bagaimana perilaku model bisa dijelaskan. Slide berikutnya membahas **explainability**, yaitu cara membuat keputusan agent lebih bisa dipahami untuk debugging dan desain.

---

## Slide 077 - Explainability

### Narasi

**Explainability** adalah kemampuan sistem untuk menunjukkan alasan di balik suatu keputusan. Dalam game, hal ini penting karena developer, desainer, dan mahasiswa perlu memahami mengapa agent melakukan tindakan tertentu. Tanpa penjelasan, perilaku yang tampak aneh sulit ditelusuri.

Untuk sistem berbasis aturan, penjelasan biasanya langsung terlihat. Pada **FSM**, keputusan bergantung pada `state` dan kondisi. Contoh:

```text
State = Chase karena player terlihat.
```

Artinya agent berpindah ke `state` `Chase` karena kondisi `player terlihat` terpenuhi. Mahasiswa dapat mengecek transisi, sensor, atau kondisi yang memicu perubahan.

Sistem **utility-based** juga relatif mudah dijelaskan karena keputusan berasal dari skor. Setiap `action` diberi nilai berdasarkan kondisi game. Contoh:

```text
Attack score tertinggi.
```

Jika `action` `Attack` memiliki skor tertinggi, agent memilihnya. Penjelasan bisa berupa daftar skor: jarak, kesehatan, ancaman, atau prioritas desain.

Sistem **ML** berbeda. Keputusan sering berasal dari model yang sudah dilatih, sehingga alasan tidak selalu berupa aturan eksplisit. Contoh:

```text
Model memilih action karena hasil training.
```

Di sini, mahasiswa perlu memahami bahwa model memilih `action` berdasarkan pola data, bobot internal, atau estimasi nilai, bukan karena satu kondisi yang mudah dibaca.

Untuk praktikum, cara praktis menjelaskan perilaku agent adalah memeriksa **Q-value** atau `reward history`. `Q-value` menunjukkan estimasi nilai `action` pada `state` tertentu, sedangkan `reward history` menunjukkan bagaimana agent belajar dari hasil yang diterima.

Dengan memeriksa nilai tersebut, mahasiswa dapat menjawab pertanyaan seperti: mengapa agent memilih `Attack` daripada `Flee`, mengapa agent berhenti di posisi tertentu, atau mengapa perilaku berubah setelah beberapa episode.

Hal yang harus dipahami sebelum lanjut adalah: explainability bukan sekadar menampilkan log. Ia membantu debugging, validasi desain, dan komunikasi antara programmer, desainer, dan pengembang game.

### Inti yang Harus Ditekankan

- **Explainability** membantu memahami alasan keputusan agent.
- **FSM** dan sistem utility lebih mudah dijelaskan karena berbasis aturan atau skor.
- **ML** lebih sulit dijelaskan karena keputusan berasal dari model hasil training.
- `Q-value` dan `reward history` adalah alat praktis untuk menjelaskan perilaku agent.

### Transisi ke Slide Berikutnya

Setelah memahami cara menjelaskan perilaku agent, kita akan masuk ke alasan mengapa mahasiswa perlu mempelajari ML untuk game, termasuk batasannya dalam praktik.

---

## Slide 078 - ML untuk Pendidikan Game AI

### Narasi

Slide ini menjawab pertanyaan yang sering muncul: mengapa mahasiswa perlu mempelajari **machine learning** untuk game? Jawabannya bukan karena setiap perilaku NPC harus dibuat dengan model yang dilatih, tetapi karena machine learning memperkenalkan cara berpikir yang berbeda dari pendekatan `rule-based`. Pada sistem klasik, developer biasanya menulis aturan secara eksplisit: jika jarak dekat, kejar; jika health rendah, mundur. Pada pendekatan learning-based, sistem diberi lingkungan, kumpulan `action`, dan sinyal `reward`, lalu model mencari pola keputusan yang menghasilkan hasil baik.

Intuisi praktisnya adalah **agent yang belajar**. Agent mengamati `state`, memilih `action`, menerima `reward`, lalu memperbaiki keputusan melalui **trial and error**. Ini berbeda dari **FSM** atau **behavior tree** yang perilaku akhirnya sudah sangat ditentukan oleh aturan yang ditulis. Mahasiswa perlu memahami bahwa **data-driven decision** membuat perilaku bisa adaptif, tetapi juga lebih sulit diprediksi, diuji, dan dijelaskan. Karena itu, machine learning bukan pengganti desain, melainkan alat untuk membangun sistem yang bisa menyesuaikan diri dengan data atau pengalaman.

Namun, batasannya penting. Sistem cerdas dalam game modern jarang hanya memakai machine learning. Banyak game menggabungkan **algoritma klasik**, `rule-based`, `data-driven`, dan machine learning. Misalnya, pathfinding tetap bisa memakai algoritma pencarian, interaksi sosial bisa memakai FSM atau behavior tree, sementara adaptasi kesulitan atau perilaku musuh tertentu bisa memakai model yang dilatih. Mahasiswa harus bisa memilih pendekatan yang sesuai dengan kebutuhan desain, biaya komputasi, dan kebutuhan kontrol artistik.

Sebelum lanjut, pahami tiga hal: machine learning memberi cara baru untuk membuat perilaku adaptif; machine learning bekerja melalui pengalaman, reward, dan data; serta machine learning harus diposisikan sebagai bagian dari toolbox, bukan satu-satunya solusi. Dengan pandangan ini, mahasiswa tidak hanya melihat machine learning sebagai algoritma, tetapi sebagai cara membangun agent yang belajar dalam lingkungan game.

### Inti yang Harus Ditekankan

- **Machine learning** memperkenalkan agent yang belajar melalui `reward`, `trial and error`, dan data, bukan hanya aturan eksplisit.
- Perilaku learning-based lebih adaptif, tetapi lebih sulit dijelaskan dan dikontrol dibanding pendekatan `rule-based` seperti FSM atau behavior tree.
- Game modern sering memakai pendekatan hybrid: algoritma klasik, `rule-based`, `data-driven`, dan machine learning dipilih sesuai kebutuhan desain.

### Transisi ke Slide Berikutnya

Setelah memahami mengapa machine learning penting dan batasannya, kita akan merangkum seluruh konsep Machine Learning for Games yang telah dibahas.

---

## Slide 079 - Ringkasan Materi

### Narasi

Slide ini berfungsi sebagai peta akhir pertemuan. Kita meninjau kembali alur dari perbandingan **rule-based** dan **learning-based**, posisi **supervised learning**, lalu masuk ke konsep inti **reinforcement learning**: `agent`, `environment`, `state`, `action`, `reward`, `policy`, dan `episode`.

```text
Machine Learning for Games
│
├── Rule-Based vs Learning-Based AI
├── Supervised Learning
├── Reinforcement Learning
├── Agent & Environment
├── State
├── Action
├── Reward
├── Policy
├── Episode
├── Exploration vs Exploitation
├── Epsilon-Greedy
├── Q-Learning
├── Q-Table
├── Reward Design
├── Unity ML-Agents
└── Praktikum Q-Learning / ML-Agents
```

Pohon materi ini menunjukkan bahwa pembelajaran untuk game tidak berhenti pada definisi. Mahasiswa perlu melihat hubungan antarbagian: `state` menggambarkan situasi, `action` adalah pilihan yang bisa dilakukan, `reward` memberi sinyal kualitas hasil, `policy` menentukan strategi memilih aksi, dan `episode` menjadi satu rangkaian pengalaman belajar.

Dalam praktik, **exploration vs exploitation** menjadi titik penting. `epsilon-greedy` memberi cara sederhana untuk menyeimbangkan mencoba aksi baru dan memakai aksi yang sudah dianggap baik. **Q-Learning** lalu menyimpan nilai estimasi dalam `Q-table`, sehingga `agent` dapat memilih aksi berdasarkan nilai yang dipelajari dari pengalaman, bukan hanya aturan eksplisit.

Sebelum lanjut, hal yang harus dipahami adalah peran **reward design** dan keterbatasan `Q-table`. Reward yang buruk dapat membuat `agent` belajar perilaku yang tidak diinginkan, sedangkan `state` yang sangat besar membuat `Q-table` sulit disimpan dan diperbarui. Pembahasan juga diarahkan ke **Unity ML-Agents** dan praktikum sebagai jembatan dari konsep ke implementasi.

### Inti yang Harus Ditekankan

- **Reinforcement learning** menekankan pembelajaran dari pengalaman: `state`, `action`, `reward`, `policy`, dan `episode`.
- **Exploration vs exploitation** menentukan apakah `agent` mencoba aksi baru atau memakai aksi terbaik yang sudah diketahui.
- `Q-table` menyimpan estimasi nilai aksi, tetapi skalabilitasnya terbatas ketika ruang `state` sangat besar.
- **Reward design** sangat menentukan kualitas perilaku yang dipelajari oleh `agent`.

### Transisi ke Slide Berikutnya

Selanjutnya, kita akan menguji pemahaman melalui pertanyaan diskusi yang membandingkan **rule-based** dan **learning-based**, serta mengaitkan konsep `state`, `action`, `reward`, `epsilon`, dan `Q-table` dengan praktikum.

---

## Slide 080 - Pertanyaan Diskusi

### Narasi

Slide ini digunakan untuk mengecek pemahaman sebelum masuk ke latihan. Sepuluh pertanyaan ini bukan sekadar daftar hafalan, melainkan peta konsep yang harus bisa dijelaskan mahasiswa dengan bahasa sendiri.

Pertanyaan pertama sampai ketiga mengarah pada pilihan strategi: kapan sistem cukup dibangun dengan aturan eksplisit, dan kapan pembelajaran lebih tepat. Mahasiswa perlu memahami bahwa pendekatan berbasis aturan lebih mudah dikontrol dan diuji, sedangkan pendekatan berbasis pembelajaran lebih fleksibel tetapi membutuhkan data, reward, atau label yang dirancang dengan baik.

Pertanyaan keempat sampai keenam membahas inti interaksi agent dengan lingkungan: `state`, `action`, dan `reward`. Tiga istilah ini menentukan apakah agent dapat belajar. `state` menggambarkan kondisi yang diamati, `action` adalah pilihan yang dapat dilakukan, dan `reward` memberi sinyal kualitas keputusan. Jika salah satu tidak dirancang dengan tepat, perilaku yang dihasilkan akan sulit diprediksi.

Pertanyaan ketujuh sampai kesembilan membawa diskusi ke `epsilon-greedy` dan `Q-table`. Di sini mahasiswa perlu menjelaskan peran `epsilon` sebagai keseimbangan antara mencoba aksi baru dan memakai aksi terbaik yang sudah diketahui. `Q-table` menyimpan nilai estimasi untuk pasangan `state` dan `action`. Namun, ketika jumlah `state` sangat besar, tabel menjadi tidak praktis, sehingga perlu dipahami batasannya.

Pertanyaan terakhir membandingkan `Q-learning` dan `A*`. Keduanya dapat menghasilkan perilaku yang tampak seperti mencari tujuan, tetapi tujuannya berbeda: `Q-learning` belajar nilai aksi dari pengalaman, sedangkan `A*` mencari jalur optimal berdasarkan heuristik pada lingkungan yang diketahui. Mahasiswa harus bisa membedakan “belajar kebijakan” dan “mencari jalur”.

Sebelum lanjut, pastikan mahasiswa dapat menjawab pertanyaan ini secara singkat, jelas, dan dengan contoh sederhana dari game.

### Inti yang Harus Ditekankan

- **Rule-based** mengandalkan aturan yang ditulis eksplisit; **learning-based** mengandalkan pembelajaran dari data atau pengalaman.
- `state`, `action`, dan `reward` adalah komponen utama yang menentukan kualitas pembelajaran agent.
- `epsilon` dalam `epsilon-greedy` mengatur keseimbangan antara **exploration** dan **exploitation**.
- `Q-table` menyimpan nilai `Q` untuk pasangan `state` dan `action`, tetapi skalabilitasnya terbatas pada ruang `state` yang besar.
- `Q-learning` dan `A*` berbeda tujuan: yang pertama belajar kebijakan, yang kedua mencari jalur optimal.

### Transisi ke Slide Berikutnya

Setelah pertanyaan diskusi ini terjawab, kita akan menerapkan konsep **supervised learning** pada kasus klasifikasi play style, di mana model belajar memprediksi label dari fitur input yang diberikan.

---

## Slide 081 - Latihan Konsep Supervised Learning

### Narasi

Pada slide ini kita berlatih merancang **supervised learning** untuk klasifikasi **play style** pemain. Intuisi utamanya sederhana: game mengumpulkan data perilaku pemain, lalu model memprediksi label gaya bermain dari data tersebut. Berbeda dengan aturan manual yang dibuat satu per satu, supervised learning belajar pola dari contoh yang sudah diberi label.

Fitur input yang digunakan adalah metrik yang dapat diukur selama sesi bermain:

- `accuracy`: seberapa tepat pemain melakukan serangan atau interaksi.
- `damageTaken`: jumlah atau intensitas kerusakan yang diterima.
- `roomsVisited`: jumlah ruang yang dijelajahi.
- `itemsCollected`: jumlah item yang dikumpulkan.
- `completionTime`: waktu penyelesaian level atau misi.
- `attackFrequency`: seberapa sering pemain menyerang.

Label yang ingin diprediksi adalah empat gaya bermain utama:

- `Aggressive`
- `Defensive`
- `Explorer`
- `Speedrunner`

Contoh data training dapat disusun sebagai tabel atau baris data:

```text
accuracy,damageTaken,roomsVisited,itemsCollected,completionTime,attackFrequency,label
0.85,10,3,4,120,0.9,Aggressive
0.40,65,2,3,480,0.2,Defensive
0.55,35,9,16,360,0.4,Explorer
0.70,20,4,5,90,0.7,Speedrunner
```

Setiap baris mewakili satu sesi atau cuplikan perilaku. Kolom fitur menunjukkan pola numerik, sedangkan kolom `label` menyatakan gaya bermain yang ingin dipelajari model. Data training harus cukup beragam agar model tidak hanya menghafal satu contoh.

Dalam game, model dapat digunakan setelah data perilaku terkumpul, misalnya setelah beberapa menit bermain atau setelah satu fase selesai. Alurnya:

1. Sistem game mengumpulkan nilai fitur dari telemetri pemain.
2. Nilai fitur dinormalisasi agar skala antar metrik seimbang.
3. Model klasifikasi memproses fitur dan menghasilkan label `play style`.
4. Label tersebut disimpan sebagai state pemain, misalnya `playerStyle`.
5. Sistem adaptasi membaca label untuk menyesuaikan tantangan atau perilaku NPC.

Adaptasi setelah style diprediksi dapat dilakukan secara halus. Misalnya:

- `Aggressive`: NPC lebih sering menggunakan cover, jebakan, atau serangan defensif.
- `Defensive`: game memberikan peluang reward untuk mengambil risiko atau jalur cepat.
- `Explorer`: muncul petunjuk area tersembunyi, item tambahan, atau rahasia.
- `Speedrunner`: tantangan waktu, shortcut, atau target waktu lebih ditekankan.

Yang harus dipahami sebelum lanjut adalah bahwa supervised learning membutuhkan **data berlabel**, **fitur yang relevan**, dan **label yang konsisten**. Jika fitur tidak mencerminkan perilaku, prediksi akan lemah. Jika label tidak jelas, model akan belajar pola yang salah.

### Inti yang Harus Ditekankan

- **Supervised learning** untuk play style berarti memprediksi label gaya bermain dari fitur perilaku pemain.
- Fitur seperti `attackFrequency`, `damageTaken`, `roomsVisited`, dan `completionTime` membantu membedakan `Aggressive`, `Defensive`, `Explorer`, dan `Speedrunner`.
- Model digunakan dengan alur: kumpulkan data, normalisasi, klasifikasi, simpan label, lalu adaptasi game.
- Adaptasi harus terukur dan tidak mengubah gameplay secara tiba-tiba; label `play style` menjadi input untuk sistem balancing atau perilaku NPC.

### Transisi ke Slide Berikutnya

Setelah kita memahami bagaimana model belajar dari data berlabel, kita akan beralih ke latihan **reinforcement learning** di mana agent belajar memilih aksi berdasarkan reward di lingkungan grid sederhana.

---

## Slide 082 - Latihan Konsep Reinforcement Learning

### Narasi

Slide ini mengajak mahasiswa merancang **reinforcement learning environment** yang sederhana. Fokusnya bukan langsung membuat agent yang sempurna, tetapi memahami bagaimana **state**, **action**, **reward**, dan **episode** membentuk proses pembelajaran.

Environment yang diminta adalah grid `5x5`. `Agent` berada di dalam grid, `goal` berada di pojok kanan atas, dan beberapa cell berisi `obstacle`. Agent dapat memilih empat arah gerak: `up`, `down`, `left`, dan `right`. Bentuk environment seperti ini cocok untuk latihan karena mudah divisualisasikan, mudah diuji, dan mudah dihubungkan dengan perilaku NPC yang harus mencapai target sambil menghindari rintangan.

Untuk **state**, mahasiswa perlu menentukan informasi apa yang dilihat agent pada setiap langkah. Minimalnya, state bisa berupa posisi agent `(x, y)` dan posisi `goal`. Jika layout `obstacle` tetap, agent bisa menyimpan peta obstacle sebagai bagian dari state atau sebagai pengetahuan lingkungan. Jika layout berubah-ubah, state harus menyertakan informasi obstacle yang relevan agar keputusan agent tidak buta terhadap lingkungan.

Untuk **action**, ruang aksinya cukup empat gerakan dasar:

- `up`: bergerak satu cell ke atas.
- `down`: bergerak satu cell ke bawah.
- `left`: bergerak satu cell ke kiri.
- `right`: bergerak satu cell ke kanan.

Setiap action harus memiliki aturan yang jelas: apa yang terjadi jika agent menabrak dinding, apa yang terjadi jika menabrak `obstacle`, dan apakah posisi agent berubah atau tetap.

Untuk **reward**, mahasiswa perlu memberi sinyal hasil dari setiap action. Secara umum, reward positif diberikan saat agent mencapai `goal`, reward negatif kecil dapat diberikan untuk setiap langkah agar agent tidak berjalan tanpa arah, dan reward negatif lebih besar dapat diberikan saat agent menabrak `obstacle`. Detail penyesuaian reward akan dibahas lebih dalam pada slide berikutnya, tetapi pada slide ini mahasiswa cukup memahami bahwa reward adalah umpan balik yang mengarahkan agent.

Episode selesai ketika kondisi terminal terpenuhi. Biasanya episode berakhir jika:

1. Agent mencapai `goal`.
2. Agent mencapai batas maksimum langkah.
3. Agent berada dalam kondisi gagal yang ditentukan, misalnya menabrak `obstacle` yang bersifat terminal.

Setelah episode selesai, environment di-reset ke posisi awal, dan agent memulai episode baru. Siklus reset-episode inilah yang membuat agent dapat mengulang pengalaman dan memperbaiki perilakunya.

Proses belajar agent dapat dijelaskan sebagai loop interaksi:

```text
episode = 1
while episode <= max_episodes:
    state = reset_environment()
    done = false

    while not done:
        action = choose_action(state)
        next_state, reward, done = step(action)
        update_policy(state, action, reward, next_state)
        state = next_state

    episode += 1
```

Bagian penting dari loop ini adalah `choose_action` dan `update_policy`. `choose_action` menentukan perilaku agent berdasarkan state saat ini, misalnya dengan memilih action terbaik, mencoba action acak, atau menggunakan strategi eksplorasi. `update_policy` memperbaiki nilai atau kebijakan agent berdasarkan `reward` dan `next_state`. Dengan pengulangan episode, agent seharusnya semakin sering menemukan jalur menuju `goal` dan semakin jarang menabrak `obstacle`.

**Debug UI** sangat penting agar mahasiswa bisa mengamati proses belajar. UI dapat menampilkan grid, posisi agent, `goal`, dan `obstacle`. Selain itu, UI sebaiknya menampilkan:

- State saat ini, misalnya `(x, y)`.
- Action yang dipilih.
- Reward terakhir dan total reward episode.
- Jumlah langkah pada episode.
- Alasan episode selesai: `goal`, `max_steps`, atau `obstacle`.
- Nilai kebijakan atau heatmap Q-value untuk setiap cell dan arah, jika ada.

Dalam konteks Unity, debug UI bisa berupa overlay `Canvas`, teks `TextMeshPro`, atau panel kecil yang memperbarui nilai setiap frame. Warna cell dapat digunakan untuk menunjukkan nilai kebijakan, sehingga mahasiswa dapat melihat secara visual bagaimana agent belajar memilih jalur.

Sebelum lanjut, mahasiswa perlu memastikan bahwa environment sudah memiliki aturan yang konsisten: state cukup informatif, action dapat dieksekusi, reward memberi sinyal yang jelas, episode memiliki akhir, dan debug UI membantu observasi. Jika bagian-bagian ini sudah jelas, barulah desain reward dapat dioptimalkan secara lebih teliti.

### Inti yang Harus Ditekankan

- **State** harus cukup untuk agent mengambil keputusan, minimal posisi agent dan `goal`, serta informasi `obstacle` jika layout tidak tetap.
- **Action** terdiri dari empat gerakan dasar, tetapi setiap gerakan perlu aturan yang jelas untuk dinding dan `obstacle`.
- **Reward** adalah umpan balik pembelajaran: positif untuk `goal`, negatif untuk langkah atau `obstacle`, dengan detail penyesuaian dibahas berikutnya.
- **Episode** harus memiliki kondisi selesai yang jelas, misalnya mencapai `goal` atau melewati batas langkah.
- Agent belajar melalui loop `state -> action -> reward -> next_state -> policy update`.
- **Debug UI** membantu mahasiswa mengamati perilaku agent, reward, langkah, dan kebijakan yang sedang dipelajari.

### Transisi ke Slide Berikutnya

Setelah environment, state, action, dan episode sudah jelas, langkah berikutnya adalah merancang reward secara lebih hati-hati. Slide berikutnya akan membahas bagaimana memilih reward dan penalty agar agent benar-benar belajar mencapai `goal` dengan jalur yang baik, bukan sekadar menemukan cara yang tidak diinginkan.

---

## Slide 083 - Latihan Reward Design

### Narasi

Setelah `state`, `action`, dan environment grid didefinisikan, fokus berikutnya adalah **reward**. Reward adalah sinyal numerik yang membentuk perilaku `agent`. Dalam latihan ini, tujuan utama adalah mencapai `goal`, sehingga reward harus mendorong `agent` bergerak menuju `goal`, menghindari `obstacle`, dan memilih jalur yang efisien.

Secara sederhana, reward dapat dirancang seperti ini:

```text
reward = -0.01

if nextState == goal:
    reward = +10
    episode_done = True

if nextState == obstacle:
    reward = -10
    episode_done = True
```

Urutan eksekusinya cukup sederhana. Setelah `agent` memilih `action`, sistem memeriksa `nextState`. Jika `nextState` adalah `goal`, `agent` mendapat reward positif dan episode diakhiri. Jika `nextState` adalah `obstacle`, `agent` mendapat penalty. Jika keduanya tidak terjadi, `agent` hanya menerima step penalty kecil.

Desain reward ini menjawab beberapa pertanyaan penting:

1. **Reward untuk mencapai `goal`**  
   Gunakan reward positif yang cukup besar, misalnya `+10`. Nilai ini harus lebih besar dari akumulasi step penalty agar `agent` tetap termotivasi mencapai `goal`.

2. **Penalty untuk menabrak `obstacle`**  
   Gunakan reward negatif, misalnya `-10`. Jika `obstacle` dianggap fatal, episode dapat diakhiri. Jika tidak fatal, `agent` tetap belajar bahwa menabrak `obstacle` merugikan.

3. **Penalty setiap langkah**  
   Step penalty kecil, misalnya `-0.01`, biasanya diperlukan. Tujuannya membuat `agent` tidak hanya mencapai `goal`, tetapi juga memilih jalur yang lebih pendek.

4. **Mencegah `agent` berputar-putar**  
   Step penalty sudah membantu karena setiap langkah menambah biaya. Jika masih terjadi looping, bisa ditambahkan batas maksimum langkah atau episode timeout.

5. **Memastikan `agent` mencari jalur pendek**  
   Keseimbangan antara reward `goal` yang besar dan step penalty yang kecil sangat penting. Step penalty yang terlalu besar membuat `agent` belajar lambat, sedangkan step penalty yang terlalu kecil membuat `agent` tidak cukup termotivasi memilih jalur efisien.

6. **Risiko `reward hacking`**  
   `Reward hacking` terjadi ketika `agent` menemukan cara memperoleh reward tinggi tanpa melakukan perilaku yang dimaksud. Contoh: jika episode tidak diakhiri setelah `goal`, `agent` bisa tetap di `goal` dan terus mendapat reward. Contoh lain: jika aturan reward terlalu longgar, `agent` bisa mengeksploitasi celah desain.

Intuisi praktisnya, reward bukan sekadar angka, tetapi **desain perilaku**. Perubahan kecil pada reward dapat mengubah kebijakan `agent` secara signifikan. Sebelum implementasi, mahasiswa perlu menentukan perilaku yang diinginkan, lalu memilih reward yang mengarahkan perilaku tersebut.

### Inti yang Harus Ditekankan

- Reward `goal` harus positif dan cukup besar, lalu episode sebaiknya diakhiri.
- `Obstacle` diberi penalty negatif, dan step penalty kecil membantu memilih jalur yang lebih pendek.
- Looping dapat dikurangi dengan step penalty, batas langkah, atau episode timeout.
- `Reward hacking` harus diantisipasi dengan memastikan reward hanya diberikan untuk perilaku yang benar-benar diinginkan.

### Transisi ke Slide Berikutnya

Dengan memahami cara merancang reward, mahasiswa siap menutup pertemuan dan masuk ke gambaran praktikum sederhana, misalnya implementasi `Q-learning` pada grid atau pengenalan `Unity ML-Agents`.

---

## Slide 084 - Penutup

### Narasi

Dengan ini kita menutup pertemuan ke-13 pada materi **Machine Learning for Games**. Pada pertemuan ini, kita telah membahas bagaimana **machine learning** dapat digunakan dalam game, khususnya untuk membuat agent yang mampu belajar dari pengalaman. Poin pentingnya adalah **machine learning** bukan pengganti seluruh teknik **Game AI**, melainkan alat tambahan yang berguna ketika game membutuhkan kemampuan belajar dari data, perilaku pemain, atau interaksi dengan lingkungan.

Untuk praktikum pertemuan ini, saya merekomendasikan agar mahasiswa memilih topik yang paling mudah dipahami dan langsung menunjukkan inti **reinforcement learning**. Opsi praktikum yang dapat dipilih adalah:

```text
Implementasi Q-Learning sederhana
atau
Unity ML-Agents Introduction
```

Rekomendasi utama saya adalah:

```text
Q-Learning sederhana pada grid
```

Alasannya sederhana. Grid world memiliki ruang **state** yang kecil, sehingga mahasiswa dapat dengan mudah mengamati bagaimana agent memilih **action**, menerima **reward**, memperbarui **Q-table**, dan perlahan belajar perilaku yang lebih baik. Praktikum ini juga langsung memperlihatkan konsep penting seperti **exploration**, **exploitation**, dan proses **learning** tanpa perlu setup yang terlalu kompleks.

Secara keseluruhan, urutan pembelajaran yang kita bangun hari ini bergerak dari pemahaman dasar **data-driven AI**, perbandingan antara **rule-based AI** dan **learning-based AI**, contoh **supervised learning**, lalu masuk ke **reinforcement learning** melalui konsep **state**, **action**, dan **reward**. Setelah itu, kita membahas **exploration vs exploitation**, **Q-table**, **Q-learning**, contoh **grid world**, dan pengenalan konseptual **Unity ML-Agents**. Alur ini penting agar mahasiswa tidak langsung masuk ke implementasi, tetapi terlebih dahulu memahami logika di balik perilaku agent.

Sebelum lanjut, hal yang harus benar-benar dipahami adalah bahwa **machine learning** dalam game sangat berguna, tetapi tetap harus dirancang dengan hati-hati. Teknik klasik seperti **FSM**, **behavior tree**, **pathfinding**, dan **steering** masih sangat penting untuk menjaga stabilitas, kontrol, dan desain gameplay. **Machine learning** paling kuat ketika digunakan untuk bagian yang membutuhkan adaptasi, personalisasi, atau pembelajaran dari pengalaman.

### Inti yang Harus Ditekankan

- **Machine learning** adalah pelengkap teknik **Game AI**, bukan pengganti seluruh sistem AI dalam game.
- Praktikum paling direkomendasikan adalah **Q-Learning sederhana pada grid** karena mudah dipahami dan langsung menunjukkan **state**, **action**, **reward**, **Q-table**, **exploration**, dan **learning**.
- Mahasiswa harus memahami bahwa agent belajar melalui interaksi dengan lingkungan, bukan hanya dari aturan yang ditulis manual.
- Teknik klasik tetap penting untuk kontrol, stabilitas, dan desain gameplay, sementara **machine learning** berguna untuk pembelajaran dari data atau pengalaman.

### Transisi ke Slide Berikutnya

Dengan penutup ini, pertemuan ke-13 selesai. Materi berikutnya akan melanjutkan ke **Reinforcement Learning with Unity ML-Agents**, di mana konsep yang telah kita bahas akan diperkenalkan dalam konteks implementasi agent di lingkungan game.
