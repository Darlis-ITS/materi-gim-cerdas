# Narasi Game Cerdas - Pertemuan 11

## Dynamic Difficulty Adjustment

Sumber: markdown/pert11.md

---

## Slide 001 - Cover

### Narasi

Selamat datang di **Game Cerdas — Pertemuan 11**. Pada pertemuan ini, kita akan membahas topik **Dynamic Difficulty Adjustment** atau **DDA**, yaitu mekanisme yang memungkinkan game menyesuaikan tingkat kesulitan secara dinamis selama permainan berlangsung. Inti dari DDA adalah membuat pengalaman bermain tetap **menantang**, **adil**, dan **menyenangkan** bagi pemain, baik bagi pemain yang masih belajar maupun pemain yang sudah sangat mahir.

Dalam konteks game, DDA tidak hanya berarti menambah atau mengurangi jumlah musuh secara acak. DDA melibatkan pengamatan terhadap **`player performance`**, misalnya skor, kesehatan, waktu menyelesaikan level, tingkat kegagalan, atau pola keputusan pemain. Dari data tersebut, game dapat membangun **`difficulty model`** yang digunakan untuk mengatur **`adaptive gameplay`**, seperti kecepatan musuh, jumlah serangan, reward, atau parameter level. Salah satu bentuk sederhana dari penyesuaian ini adalah **`rubber banding`**, yaitu mekanisme yang membuat game terasa lebih mudah saat pemain tertinggal dan lebih menantang saat pemain terlalu unggul.

Pada pertemuan ini, kita juga akan melihat bagaimana konsep DDA dapat diimplementasikan dalam **`Unity`**, terutama melalui penyesuaian parameter musuh atau level secara runtime. Praktikum yang akan dibuat terpisah adalah **game otomatis menyesuaikan musuh berdasarkan performa player**. Namun, sebelum masuk ke implementasi, kita perlu memahami dulu konsep dasarnya: apa yang diamati, bagaimana kesulitan dimodelkan, dan bagaimana perubahan parameter memengaruhi pengalaman bermain.

### Inti yang Harus Ditekankan

- **DDA** adalah sistem adaptif yang menyesuaikan tingkat kesulitan game berdasarkan **`player performance`**.
- Konsep utama yang akan dibahas meliputi **`player performance`**, **`difficulty model`**, **`adaptive gameplay`**, **`rubber banding`**, dan **`parameter adaptation`**.
- Tujuan akhir dari DDA adalah menjaga keseimbangan antara **tantangan**, **keadilan**, dan **keseruan** dalam gameplay.

### Transisi ke Slide Berikutnya

Setelah memahami gambaran umum DDA, kita akan meninjau kembali materi pertemuan sebelumnya agar konsep adaptasi kesulitan ini dapat dihubungkan dengan topik yang sudah dibahas sebelumnya.

---

## Slide 002 - Review Pertemuan Sebelumnya

### Narasi

Sebelum masuk ke **Dynamic Difficulty Adjustment**, kita kembali sebentar ke **Pertemuan 9** dan **Pertemuan 10** yang membahas **Procedural Content Generation** atau **PCG**.

```text
Pertemuan 9
Procedural Content Generation

Pertemuan 10
PCG for Level & Dungeon Generation
```

Inti dari PCG adalah game dapat membuat atau menyusun konten secara otomatis, bukan hanya memuat aset yang sudah dibuat manual. Dalam konteks game, PCG dapat menghasilkan berbagai elemen seperti:

- `enemy spawn`,
- `item spawn`,
- `level`,
- `dungeon`,
- `obstacle`,
- `room`,
- dan `corridor`.

Pertemuan 11 melanjutkan ide tersebut ke arah yang lebih adaptif. Jika PCG fokus pada **konten yang berubah**, maka **DDA** fokus pada **pengalaman bermain yang berubah**.

```text
Bukan hanya konten yang berubah,
tetapi tingkat kesulitan game juga dapat berubah.
```

Artinya, game tidak hanya menyesuaikan apa yang muncul di layar, tetapi juga bagaimana tantangan dirasakan oleh player.

### Inti yang Harus Ditekankan

- **PCG** adalah dasar dari konten yang dihasilkan secara otomatis, seperti spawn, level, dan dungeon.
- **DDA** melanjutkan ide adaptasi, tetapi fokusnya bukan hanya konten, melainkan **tingkat kesulitan** dan **rasa tantangan** bagi player.
- Mahasiswa perlu memahami bahwa adaptasi dalam game bisa terjadi pada dua lapisan: **konten** dan **pengalaman bermain**.

### Transisi ke Slide Berikutnya

Setelah mengingat kembali posisi PCG, kita akan melihat bagaimana materi DDA ini berada dalam keseluruhan cakupan Game Cerdas, terutama hubungannya dengan NPC intelligence, content intelligence, dan adaptive game intelligence.

---

## Slide 003 - Posisi Materi dalam Game Cerdas

### Narasi

Pada slide ini, kita memetakan posisi materi **Dynamic Difficulty Adjustment** dalam keseluruhan mata kuliah Game Cerdas. Materi sebelumnya banyak berfokus pada **NPC Intelligence**, yaitu kemampuan agen dalam game untuk memahami lingkungan dan mengambil keputusan. Komponen yang sudah dibahas antara lain `Perception`, `Movement`, `Pathfinding`, `FSM`, `Behavior Tree`, dan `Tactical AI`.

Setelah tahap itu, pembahasan berkembang ke **Content Intelligence**. Di sini fokusnya bukan lagi hanya perilaku NPC, tetapi kemampuan game untuk menghasilkan konten secara dinamis, misalnya melalui `PCG` dan `Dungeon Generation`. Dengan pendekatan ini, game dapat membuat level, ruangan, koridor, atau spawn secara lebih bervariasi.

Pertemuan 11 kemudian masuk ke **Adaptive Game Intelligence**. Posisi ini perlu dipahami sebagai perluasan dari dua tahap sebelumnya. Game tidak hanya memiliki NPC yang bertindak cerdas, dan tidak hanya memiliki konten yang dapat berubah, tetapi juga dapat menyesuaikan pengalaman bermain itu sendiri.

Secara sederhana, alur pemahamannya dapat dilihat sebagai berikut:

- **NPC Intelligence**: game membuat karakter yang mampu merespons lingkungan.
- **Content Intelligence**: game membuat konten yang dapat berubah atau dihasilkan secara dinamis.
- **Adaptive Game Intelligence**: game menyesuaikan pengalaman bermain, termasuk tingkat tantangan, berdasarkan kondisi pemain.

Poin penting yang harus dipahami sebelum lanjut adalah bahwa **DDA** berada pada lapisan adaptasi pengalaman. Artinya, fokusnya bukan hanya membuat NPC lebih pintar atau level lebih bervariasi, tetapi membuat game lebih responsif terhadap kemampuan dan perilaku pemain.

### Inti yang Harus Ditekankan

- **DDA** berada pada tahap **Adaptive Game Intelligence**, bukan hanya pada **NPC Intelligence** atau **Content Intelligence**.
- Materi sebelumnya membangun dasar: NPC yang mampu mengambil keputusan, dan konten yang dapat dihasilkan secara dinamis.
- Pada pertemuan ini, fokus bergeser ke kemampuan game untuk menyesuaikan pengalaman bermain, termasuk tingkat tantangan, agar tetap sesuai dengan kondisi pemain.

### Transisi ke Slide Berikutnya

Setelah posisi materi ini jelas, kita lanjut ke alasan mengapa **DDA** penting: menjaga pemain tetap berada pada zona tantangan yang ideal, yaitu tidak terlalu mudah, tidak terlalu sulit, dan tetap menyenangkan.

---

## Slide 004 - Mengapa DDA Penting?

### Narasi

Setelah membahas kecerdasan NPC dan kecerdasan konten, pertemuan ini masuk ke **Adaptive Game Intelligence**. Dalam konteks ini, game tidak hanya berisi agen yang berperilaku cerdas, tetapi juga sistem yang mampu menyesuaikan pengalaman bermain terhadap kondisi pemain. Salah satu konsep pentingnya adalah **Dynamic Difficulty Adjustment**, atau `DDA`.

Intuisi awalnya sederhana. Jika game terlalu mudah, pemain dapat kehilangan rasa tantangan dan akhirnya merasa **membosankan**. Sebaliknya, jika game terlalu sulit, pemain dapat mengalami kegagalan berulang dan akhirnya merasa **frustrasi**. Kedua kondisi ini mengurangi kualitas pengalaman bermain, meskipun secara teknis game tetap berjalan dengan baik.

Tujuan utama `DDA` adalah menjaga pemain tetap berada pada **zona tantangan yang ideal**. Artinya, tingkat kesulitan tidak harus tetap statis sepanjang permainan. Game dapat menyesuaikan tekanan, tantangan, atau kondisi permainan agar pemain tetap terlibat secara emosional dan kognitif.

Secara ideal, kondisi yang ingin dicapai adalah:

- Tidak terlalu mudah.
- Tidak terlalu sulit.
- Tetap menantang.
- Tetap menyenangkan.

Dengan kata lain, `DDA` membantu game beradaptasi terhadap kemampuan `player`. Mahasiswa perlu memahami bahwa `DDA` bukan sekadar membuat game “lebih mudah” atau “lebih sulit”, tetapi menjaga keseimbangan antara kemampuan pemain dan tingkat tantangan yang diberikan. Pemahaman ini penting sebelum kita masuk ke konsep keseimbangan tantangan secara lebih terstruktur.

### Inti yang Harus Ditekankan

- `DDA` penting karena tantangan yang tidak seimbang dapat membuat pemain **bosan** atau **frustrasi**.
- Tujuan `DDA` adalah menjaga pemain tetap berada pada **zona tantangan yang ideal**.
- `DDA` memandang tingkat kesulitan sebagai hal yang dapat disesuaikan terhadap kemampuan `player`, bukan nilai tetap.

### Transisi ke Slide Berikutnya

Selanjutnya, kita akan melihat bagaimana keseimbangan antara kemampuan pemain dan tingkat tantangan menentukan apakah pemain merasa bosan, frustrasi, atau justru tetap terlibat dalam permainan.

---

## Slide 005 - Challenge Balance

### Narasi

Pada slide ini, kita masuk ke inti dari **Dynamic Difficulty Adjustment** atau **DDA**, yaitu menjaga keseimbangan antara **tingkat tantangan** dan **kemampuan player**. Dalam game, tantangan tidak boleh dipandang sebagai nilai tetap. Tantangan yang sama bisa terasa berbeda bagi player yang berbeda, atau bagi player yang sama pada waktu yang berbeda.

Slide menampilkan tiga kondisi sederhana:

- **Skill rendah + difficulty tinggi** → player cenderung mengalami **frustrasi**.
- **Skill tinggi + difficulty rendah** → player cenderung merasa **bosan**.
- **Skill sesuai difficulty** → player menjadi **engaged** dan dapat masuk ke kondisi **flow**.

Intuisi praktisnya adalah sebagai berikut. Jika player terus-menerus gagal, game terasa tidak adil. Jika player menang terlalu mudah, game kehilangan ketegangan. DDA berusaha memindahkan pengalaman player ke area tengah, yaitu area di mana tantangan terasa sulit tetapi masih dapat diatasi.

Dalam konteks perilaku game, keseimbangan ini biasanya tidak hanya ditentukan oleh satu parameter. Game dapat mengamati sinyal seperti tingkat keberhasilan, waktu menyelesaikan misi, jumlah kematian, penggunaan bantuan, atau pola keputusan player. Dari sinyal tersebut, sistem dapat menyesuaikan parameter seperti jumlah musuh, kekuatan serangan, ketersediaan item, kecepatan spawn, atau jumlah checkpoint.

Yang perlu dipahami mahasiswa adalah bahwa **challenge balance** bukan berarti membuat game selalu mudah. Tujuannya adalah membuat player tetap merasa tertantang, tetapi tidak sampai kehilangan motivasi. Dengan kata lain, DDA menjaga **zona tantangan ideal** agar pengalaman bermain tetap menyenangkan dan progresif.

Sebelum lanjut, pastikan mahasiswa memahami bahwa DDA bekerja dengan cara menyesuaikan `difficulty` terhadap `skill` player, bukan sekadar menambah atau mengurangi nilai secara acak.

### Inti yang Harus Ditekankan

- **Challenge balance** adalah kesesuaian antara `difficulty` dan `skill` player.
- Tantangan terlalu tinggi menyebabkan **frustrasi**, sedangkan tantangan terlalu rendah menyebabkan **bosan**.
- DDA menjaga player tetap berada pada kondisi **engaged** atau mendekati **flow**.
- Penyesuaian difficulty harus berbasis sinyal perilaku player, bukan perubahan acak.

### Transisi ke Slide Berikutnya

Setelah memahami bahwa DDA menjaga keseimbangan tantangan, kita akan melihat konsep **flow** sebagai kerangka psikologis yang menjelaskan mengapa kondisi tersebut penting bagi pengalaman bermain.

---

## Slide 006 - Konsep Flow dalam Game

### Narasi

Slide ini menjelaskan **Flow**, yaitu kondisi ketika player merasa fokus, terlibat, dan menikmati tantangan yang sedang dihadapi. Dalam konteks Game Cerdas, flow menjadi acuan penting karena tujuan sistem permainan bukan hanya membuat player menang atau kalah, tetapi menjaga pengalaman bermain tetap menarik.

Diagram pada slide menunjukkan hubungan antara `Skill` player dan `Difficulty` permainan. Sumbu horizontal menggambarkan kemampuan player, sedangkan sumbu vertikal menggambarkan tingkat kesulitan. Area tengah disebut **Flow Zone**, yaitu wilayah di mana tantangan terasa pas: cukup menantang untuk membuat player fokus, tetapi tidak terlalu berat hingga membuat player frustrasi.

Kita dapat membaca diagram ini sebagai berikut:

- Jika `Difficulty` terlalu tinggi dibandingkan `Skill`, player cenderung masuk ke area **Anxiety / Frustration**.
- Jika `Difficulty` terlalu rendah dibandingkan `Skill`, player cenderung masuk ke area **Boredom**.
- Jika `Skill` dan `Difficulty` seimbang, player berada pada **Flow Zone**.

Intuisi praktisnya adalah bahwa flow bukan kondisi statis. Ketika player semakin terampil, tantangan yang sebelumnya terasa pas bisa menjadi terlalu mudah. Sebaliknya, ketika player mulai kesulitan, permainan perlu memberikan ruang untuk pulih, misalnya dengan menurunkan tekanan atau memberi bantuan.

Di sinilah peran **DDA** menjadi penting. DDA adalah mekanisme yang menyesuaikan tingkat kesulitan secara dinamis agar player tetap berada di sekitar **Flow Zone**. Dengan kata lain, DDA tidak bertujuan membuat game selalu mudah, tetapi menjaga keseimbangan antara kemampuan player dan tantangan yang diberikan.

Sebelum melanjutkan, mahasiswa perlu memahami bahwa flow adalah target pengalaman yang harus dijaga secara berkelanjutan. Konsep ini menjadi dasar untuk memahami bagaimana parameter permainan dapat diubah selama proses bermain.

### Inti yang Harus Ditekankan

- **Flow** adalah kondisi player yang fokus dan menikmati tantangan karena `Skill` dan `Difficulty` seimbang.
- Jika `Difficulty` terlalu tinggi, player mengalami **Anxiety / Frustration**; jika terlalu rendah, player mengalami **Boredom**.
- **DDA** berfungsi menjaga player tetap berada pada **Flow Zone** dengan menyesuaikan tantangan secara dinamis.

### Transisi ke Slide Berikutnya

Dengan memahami flow sebagai target pengalaman bermain, kita akan melihat capaian pembelajaran yang diharapkan dari pertemuan ini.

---

## Slide 007 - Capaian Pembelajaran Pertemuan

### Narasi

Slide ini menjadi peta capaian pertemuan. Setelah materi **Dynamic Difficulty Adjustment** atau `DDA`, mahasiswa diharapkan tidak hanya memahami istilahnya, tetapi juga mampu menjelaskan, membandingkan, dan merancang sistem sederhana yang relevan dengan desain game.

Secara ringkas, capaian yang diharapkan adalah:

1. Menjelaskan konsep **Dynamic Difficulty Adjustment** atau `DDA`.
2. Menjelaskan perbedaan **static difficulty** dan **dynamic difficulty**.
3. Mengidentifikasi metrik performa player yang dapat digunakan untuk menilai kondisi permainan.
4. Merancang model difficulty sederhana yang dapat diterapkan pada game.
5. Menjelaskan konsep **adaptive gameplay**.
6. Menjelaskan **rubber banding** sebagai salah satu strategi penyesuaian kesulitan.
7. Menjelaskan **parameter adaptation** yang dapat diubah selama permainan berlangsung.
8. Merancang sistem `DDA` sederhana di `Unity`.
9. Menjelaskan risiko dan etika desain `DDA`.
10. Menghubungkan `DDA` dengan `PCG`, `AI enemy`, dan `player modeling`.

Poin-poin ini penting karena `DDA` bukan sekadar membuat musuh lebih kuat atau lebih lemah. Konsep ini berkaitan dengan cara game membaca kondisi player, lalu menyesuaikan pengalaman bermain agar tetap menantang, adil, dan menyenangkan.

Sebelum masuk ke definisi teknis, mahasiswa perlu memahami bahwa `DDA` adalah bagian dari sistem **adaptive gameplay**. Artinya, game tidak lagi menggunakan satu tingkat kesulitan yang tetap, tetapi dapat menyesuaikan diri berdasarkan perilaku, kemampuan, atau performa player.

### Inti yang Harus Ditekankan

- `DDA` adalah penyesuaian tingkat kesulitan secara dinamis selama permainan berlangsung.
- Perbedaan utama antara **static difficulty** dan **dynamic difficulty** terletak pada apakah parameter game tetap atau berubah berdasarkan kondisi player.
- Perancangan `DDA` membutuhkan metrik player, parameter yang dapat diubah, dan aturan adaptasi yang jelas.
- `DDA` harus dirancang secara etis agar tidak membuat player merasa dimanipulasi atau kehilangan kendali.

### Transisi ke Slide Berikutnya

Selanjutnya, kita akan membuka definisi `DDA` secara lebih konkret dan melihat contoh parameter game yang dapat disesuaikan untuk menjaga pengalaman bermain player.

---

## Slide 008 - Apa Itu Dynamic Difficulty Adjustment?

### Narasi

**Dynamic Difficulty Adjustment** atau **DDA** adalah teknik untuk menyesuaikan tingkat kesulitan game secara otomatis berdasarkan kondisi atau performa `player`. Intuisinya, game tidak membiarkan pemain terus-menerus merasa terlalu tertekan atau terlalu bosan. Sistem mengamati sinyal gameplay, lalu mengubah tantangan agar pengalaman bermain tetap seimbang.

Contoh sederhana dari logika DDA adalah:

```text
Jika player terlalu sering kalah:
    enemy dibuat lebih lemah

Jika player terlalu mudah menang:
    enemy dibuat lebih kuat
```

Pseudocode ini menunjukkan aturan dasar: ada kondisi performa `player`, lalu ada keputusan penyesuaian `enemy`. Tujuannya adalah mengubah tekanan gameplay secara otomatis. Hasil yang diharapkan adalah pemain yang kesulitan mendapat ruang untuk bangkit, sementara pemain yang terlalu dominan mendapat tantangan tambahan.

Urutan konsepnya dapat dipahami sebagai berikut:

1. Sistem mengamati sinyal performa `player`, misalnya frekuensi kalah atau kemudahan menang.
2. Sistem menilai apakah kondisi tersebut menunjukkan kesulitan terlalu tinggi atau terlalu rendah.
3. Sistem mengubah parameter `enemy` yang memengaruhi tekanan gameplay.
4. Perilaku `enemy` berubah pada interaksi berikutnya.

DDA dapat mengubah beberapa parameter, antara lain:

- `jumlah enemy`
- `health enemy`
- `damage enemy`
- `speed enemy`
- `spawn rate`
- `resource drop`
- `akurasi musuh`
- `agresivitas musuh`

Parameter ini penting karena tidak hanya mengubah angka statistik, tetapi juga mengubah cara `enemy` berperilaku. Misalnya, `spawn rate` yang lebih tinggi membuat ancaman datang lebih sering, sedangkan `agresivitas musuh` yang lebih rendah membuat musuh lebih mudah dikendalikan oleh `player`.

Dalam konteks perilaku NPC, DDA berfungsi sebagai lapisan keputusan di atas sistem musuh. DDA tidak selalu mengubah seluruh logika NPC, tetapi dapat mengubah kondisi yang digunakan NPC untuk bertindak, seperti target, prioritas, atau batas kemampuan. Dengan cara ini, pemain merasakan perubahan tantangan tanpa harus memilih mode kesulitan secara manual.

Sebelum lanjut, mahasiswa perlu memahami bahwa DDA adalah penyesuaian kesulitan yang terjadi saat permainan berlangsung. Yang penting adalah adanya metrik performa `player` dan parameter `enemy` yang dapat diubah secara terukur, sehingga perubahan tantangan terasa wajar dan tidak merusak keseimbangan game.

### Inti yang Harus Ditekankan

- **DDA** menyesuaikan tingkat kesulitan secara otomatis berdasarkan performa `player`.
- Penyesuaian dilakukan dengan mengubah parameter `enemy`, seperti `health`, `damage`, `spawn rate`, dan `agresivitas musuh`.
- DDA memengaruhi perilaku NPC secara tidak langsung karena mengubah kondisi yang digunakan musuh untuk mengambil keputusan.

### Transisi ke Slide Berikutnya

Setelah memahami apa itu DDA, langkah berikutnya adalah membandingkannya dengan static difficulty, yaitu tingkat kesulitan yang dipilih di awal dan relatif tetap selama permainan.

---

## Slide 009 - Static Difficulty vs Dynamic Difficulty

### Narasi

Pada slide ini kita membandingkan dua cara utama mengatur tingkat kesulitan dalam game: **static difficulty** dan **dynamic difficulty**. Perbedaan utamanya terletak pada kapan nilai kesulitan ditentukan. Pada **static difficulty**, pemain memilih tingkat kesulitan di awal, misalnya `Easy`, `Normal`, `Hard`, atau `Nightmare`. Setelah itu, nilai tersebut relatif tetap selama permainan berlangsung.

```text
Easy
Normal
Hard
Nightmare
```

Pendekatan ini memberi pemain kontrol awal yang jelas. Pemain tahu sejak awal bahwa ia memilih tantangan tertentu, dan desainer game juga lebih mudah mengatur parameter untuk setiap mode. Namun, karena nilainya tetap, pengalaman pemain bisa tidak selalu pas. Pemain yang terlalu cepat menguasai game mungkin merasa kurang tertantang, sementara pemain yang kesulitan mungkin merasa terlalu berat.

**Dynamic difficulty** bekerja dengan cara yang berbeda. Di sini, game tidak hanya mengandalkan pilihan awal, tetapi juga mengamati kondisi pemain selama permainan berlangsung. Jika performa pemain menurun, sistem dapat memberikan bantuan. Jika performa pemain sangat baik, sistem dapat meningkatkan tantangan.

```text
Player performa buruk
    ↓
game memberi bantuan

Player performa sangat baik
    ↓
game meningkatkan tantangan
```

Secara konsep, dynamic difficulty mengubah parameter game secara adaptif. Parameter yang dapat disesuaikan bisa berupa jumlah musuh, kekuatan musuh, laju spawn, atau tingkat agresivitas musuh. Tujuannya bukan membuat game selalu mudah atau selalu sulit, tetapi menjaga pemain tetap berada pada zona tantangan yang sesuai.

Perbedaan penting yang harus dipahami adalah bahwa **static difficulty** bersifat tetap dan diprediksi pemain, sedangkan **dynamic difficulty** bersifat responsif terhadap perilaku pemain. Dalam desain game, static difficulty lebih sederhana dan transparan, sementara dynamic difficulty lebih fleksibel tetapi membutuhkan aturan yang hati-hati agar pemain tidak merasa game berubah secara tidak adil.

Sebelum lanjut, mahasiswa perlu memahami bahwa perbedaan ini bukan hanya soal label `Easy` atau `Hard`, tetapi soal kapan keputusan kesulitan dibuat: sebelum permainan dimulai, atau selama permainan berlangsung.

### Inti yang Harus Ditekankan

- **Static difficulty** dipilih pemain di awal dan relatif tetap selama permainan.
- **Dynamic difficulty** menyesuaikan tantangan berdasarkan performa pemain saat game berjalan.
- Static lebih mudah dipahami dan diatur, tetapi kurang adaptif terhadap variasi kemampuan pemain.
- Dynamic lebih fleksibel, tetapi harus dirancang agar terasa adil dan tidak mengganggu pengalaman pemain.

### Transisi ke Slide Berikutnya

Setelah memahami perbedaan konsepnya, kita akan melihat contoh static difficulty secara lebih konkret, yaitu bagaimana nilai parameter musuh dapat ditetapkan untuk setiap tingkat kesulitan.

---

## Slide 010 - Contoh Static Difficulty

### Narasi

Slide ini memperlihatkan **contoh konkret static difficulty** dalam game. Pada pendekatan ini, tingkat kesulitan ditentukan oleh nilai parameter yang sudah ditetapkan di awal, misalnya saat pemain memilih mode `Easy`, `Normal`, atau `Hard`.

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

Nilai `Enemy HP` dan `Enemy Damage` di atas biasanya bersifat **tetap** selama permainan berlangsung. Artinya, musuh pada mode `Hard` tidak akan otomatis menjadi lebih lemah hanya karena pemain kesulitan, dan musuh pada mode `Easy` tidak akan otomatis menjadi lebih kuat hanya karena pemain sudah mahir.

Dalam implementasi sederhana, nilai ini dapat disimpan sebagai konfigurasi NPC, variabel pada prefab, atau konstanta di script. Perilaku NPC seperti menyerang, mundur, atau mengejar dapat tetap sama, tetapi **statistik musuh** memengaruhi durasi pertempuran, risiko yang dirasakan pemain, dan keseimbangan pengalaman bermain.

Kelebihan static difficulty cukup jelas:

- mudah dipahami pemain karena pilihan awal sudah jelas,
- mudah diatur oleh designer karena setiap mode memiliki target numerik,
- mudah diuji karena kondisi permainan lebih stabil dan dapat diprediksi.

Namun, pendekatan ini juga memiliki keterbatasan:

- tidak semua pemain memiliki kemampuan yang sama,
- pemain yang cepat berkembang dapat merasa tantangan terlalu mudah,
- beberapa bagian game bisa terasa tidak seimbang jika nilai statis tidak cocok dengan progres pemain.

Sebelum lanjut ke pembahasan berikutnya, mahasiswa perlu memahami bahwa static difficulty adalah **baseline** atau titik awal desain. Ia berguna untuk membangun rasa tantangan yang konsisten, tetapi belum mampu menyesuaikan diri terhadap performa pemain secara langsung.

### Inti yang Harus Ditekankan

- Static difficulty menggunakan nilai parameter yang **tetap** untuk setiap mode kesulitan.
- `Enemy HP` dan `Enemy Damage` adalah contoh parameter yang memengaruhi tantangan tanpa mengubah perilaku NPC secara langsung.
- Kelebihan utamanya adalah kejelasan dan kemudahan penyetelan, sedangkan kekurangannya adalah kurangnya adaptasi terhadap kemampuan pemain.

### Transisi ke Slide Berikutnya

Selanjutnya, kita akan melihat bagaimana dynamic difficulty mengubah nilai dasar tersebut menggunakan multiplier yang dapat berubah berdasarkan performa pemain.

---

## Slide 011 - Contoh Dynamic Difficulty

### Narasi

Pada slide ini kita melihat **dynamic difficulty** sebagai pengembangan dari difficulty yang tetap. Ide utamanya sederhana: game tidak lagi memakai satu set nilai musuh yang sama untuk semua kondisi, tetapi mengubah beberapa parameter berdasarkan **performa player**.

```text
Enemy HP = baseHP × difficultyMultiplier
Enemy Damage = baseDamage × difficultyMultiplier
Enemy Spawn Rate = baseSpawnRate × difficultyMultiplier
```

Di sini, `baseHP`, `baseDamage`, dan `baseSpawnRate` adalah nilai dasar yang sudah ditentukan designer. Nilai tersebut kemudian dikalikan dengan `difficultyMultiplier`, sehingga satu variabel kecil dapat memengaruhi beberapa aspek gameplay sekaligus.

```text
0.8  → lebih mudah
1.0  → normal
1.3  → lebih sulit
```

Artinya, jika `difficultyMultiplier` bernilai `0.8`, musuh menjadi lebih lemah dan muncul lebih jarang. Jika bernilai `1.3`, musuh lebih kuat, lebih berbahaya, dan lebih sering muncul. Nilai `1.0` dapat dianggap sebagai kondisi normal.

Intuisi praktisnya adalah: sistem game menyesuaikan tekanan gameplay berdasarkan apakah player terlalu kesulitan atau terlalu mudah. Misalnya, jika player sering gagal menyelesaikan tantangan, multiplier dapat diturunkan. Sebaliknya, jika player menyelesaikan tantangan dengan cepat dan efisien, multiplier dapat dinaikkan.

Yang perlu dipahami mahasiswa sebelum lanjut adalah bahwa dynamic difficulty bukan berarti mengubah seluruh game secara acak. Yang diubah adalah **parameter terukur** seperti HP, damage, dan spawn rate, dengan dasar yang tetap. Dengan cara ini, game dapat terasa lebih adaptif tanpa kehilangan keseimbangan desain.

### Inti yang Harus Ditekankan

- **Dynamic difficulty** mengubah parameter game secara bertahap berdasarkan performa player.
- `difficultyMultiplier` adalah nilai pengali yang menentukan apakah game menjadi lebih mudah, normal, atau lebih sulit.
- Parameter yang dapat disesuaikan termasuk `Enemy HP`, `Enemy Damage`, dan `Enemy Spawn Rate`.
- Penyesuaian ini bertujuan menjaga tantangan tetap sesuai dengan kemampuan player.

### Transisi ke Slide Berikutnya

Setelah kita memahami contoh parameter yang dapat diubah, langkah berikutnya adalah melihat bagaimana proses pengumpulan data, analisis performa, dan penyesuaian parameter tersebut disusun menjadi pipeline DDA.

---

## Slide 012 - DDA Pipeline

### Narasi

Slide ini menjelaskan **DDA Pipeline**, yaitu alur kerja umum untuk menyesuaikan tingkat kesulitan secara dinamis. Intuisi pentingnya: game tidak hanya menetapkan kesulitan sekali di awal, tetapi terus mengamati pemain, menilai performanya, lalu menyesuaikan parameter permainan secara bertahap.

Pipeline umumnya dapat dilihat sebagai loop:

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

Urutan kerja pipeline ini dapat dipahami sebagai berikut:

1. **Collect Player Data** — sistem mengumpulkan data performa pemain.
2. **Analyze Performance** — data mentah diubah menjadi ukuran performa yang lebih bermakna.
3. **Estimate Difficulty Need** — sistem menilai apakah kesulitan perlu dinaikkan atau diturunkan.
4. **Adjust Game Parameters** — keputusan diterjemahkan ke parameter seperti `Enemy HP`, `Enemy Damage`, atau `Enemy Spawn Rate`.
5. **Observe Player Response** — sistem mengamati efek perubahan terhadap pemain.
6. **Repeat** — siklus diulang sehingga kesulitan tetap adaptif.

Yang perlu ditekankan: DDA adalah **feedback loop**, bukan satu kali penyesuaian. Setelah parameter diubah, sistem kembali mengamati respons pemain, lalu mengulang siklus. Dengan cara ini, tantangan game dapat tetap relevan dengan kemampuan pemain.

Dalam Unity, pipeline ini biasanya dipetakan ke beberapa komponen atau tanggung jawab:

```text
GameManager
    ↓
PerformanceTracker
    ↓
DifficultyManager
    ↓
EnemySpawner / EnemyStats / LootSystem
```

`GameManager` dapat berperan sebagai koordinator utama. `PerformanceTracker` bertugas mengumpulkan dan memproses data pemain. `DifficultyManager` kemudian mengambil keputusan penyesuaian. Keputusan itu dieksekusi oleh sistem seperti `EnemySpawner`, `EnemyStats`, atau `LootSystem` yang mengubah parameter permainan.

Pemisahan komponen ini penting karena membuat sistem lebih mudah diuji dan dikembangkan. Mahasiswa perlu memahami bahwa DDA bukan hanya rumus kesulitan, tetapi alur data, keputusan, eksekusi, dan observasi yang saling terhubung.

### Inti yang Harus Ditekankan

- **DDA Pipeline** adalah loop umpan balik: kumpulkan data, analisis, estimasi, sesuaikan, amati, ulangi.
- Penyesuaian kesulitan harus berbasis data performa pemain, bukan perubahan acak atau tiba-tiba.
- Dalam Unity, tanggung jawab biasanya dipisahkan ke `GameManager`, `PerformanceTracker`, `DifficultyManager`, dan komponen eksekusi seperti `EnemySpawner`, `EnemyStats`, atau `LootSystem`.

### Transisi ke Slide Berikutnya

Setelah alur pipeline DDA dipahami, langkah berikutnya adalah melihat komponen-komponen sistem DDA secara lebih rinci, mulai dari tracker performa hingga controller parameter.

---

## Slide 013 - Komponen Sistem DDA

### Narasi

Slide ini memetakan pipeline DDA menjadi komponen sistem yang dapat diimplementasikan. Intuisinya, DDA bukan satu fungsi tunggal, melainkan **loop kontrol** yang mengamati pemain, menilai kesulitan, memutuskan penyesuaian, lalu memverifikasi hasilnya.

```text
DDA System
├── Player Performance Tracker
├── Difficulty Model
├── Adaptation Rule
├── Parameter Controller
└── Feedback / Debug UI
```

Setiap komponen memiliki tanggung jawab berbeda. Pemisahan ini penting agar sistem mudah diuji, diganti, dan diperluas.

- `Player Performance Tracker` bertugas mengumpulkan data runtime dari pemain. Data ini bisa berupa sinyal permainan yang terjadi saat sesi berlangsung, misalnya perubahan kondisi pemain, hasil interaksi, atau progres level. Dalam Unity, komponen ini sering berupa script yang mendengarkan event dari `Player`, `Health`, `Combat`, atau `LevelManager`.

- `Difficulty Model` mengubah data mentah menjadi estimasi kesulitan. Tujuannya bukan hanya menghitung skor, tetapi menilai apakah tantangan saat ini sudah sesuai. Model dapat menggunakan rata-rata bergerak, normalisasi, atau bobot metrik tertentu.

- `Adaptation Rule` adalah kebijakan keputusan. Komponen ini menentukan apakah kesulitan harus dinaikkan, diturunkan, atau dipertahankan. Aturan ini perlu hati-hati agar game tidak berubah terlalu cepat atau terlalu lambat.

- `Parameter Controller` menerjemahkan keputusan menjadi perubahan nyata di game. Perubahan dapat menyentuh parameter seperti statistik musuh, laju spawn, perilaku NPC, atau sistem loot. Di sini keputusan DDA mulai memengaruhi pengalaman pemain secara langsung.

- `Feedback / Debug UI` menyediakan visibilitas. Komponen ini menampilkan nilai internal, log keputusan, atau slider pengujian agar developer dapat memeriksa apakah DDA bekerja sesuai harapan.

Dalam praktik, alur datanya bergerak dari **tracker** ke **model**, lalu ke **rule**, kemudian ke **controller**, dan akhirnya kembali ke game untuk diamati. Pola ini membuat DDA menjadi sistem yang dapat dipantau, bukan sekadar perubahan acak.

Sebelum lanjut, mahasiswa perlu memahami bahwa kualitas DDA sangat bergantung pada **pemisahan tanggung jawab** antar komponen. Jika semua logika dicampur dalam satu script, sistem akan sulit diuji dan sulit dijelaskan.

### Inti yang Harus Ditekankan

- DDA adalah **sistem loop**, bukan satu fungsi penyesuaian tunggal.
- `Player Performance Tracker`, `Difficulty Model`, `Adaptation Rule`, `Parameter Controller`, dan `Feedback / Debug UI` memiliki peran berbeda.
- Pemisahan komponen memudahkan pengujian, debugging, dan pengembangan perilaku game.
- Keputusan DDA harus dapat dilacak melalui nilai internal dan feedback.

### Transisi ke Slide Berikutnya

Setelah memahami komponen sistem, langkah berikutnya adalah melihat apa yang sebenarnya dibaca oleh `Player Performance Tracker`. Slide berikutnya akan membahas metrik performa pemain yang dapat digunakan untuk menilai apakah game terlalu mudah atau terlalu sulit.

---

## Slide 014 - Player Performance

### Narasi

Pada slide ini kita masuk ke bagian pertama dari sistem DDA yang paling penting, yaitu **player performance**. Setelah sebelumnya kita melihat komponen sistem DDA, sekarang kita fokus pada apa yang dibaca oleh `Player Performance Tracker`. Secara sederhana, **player performance** adalah ukuran tentang seberapa baik pemain bermain dalam kondisi game yang sedang berjalan.

Intuisi praktisnya begini: sistem DDA tidak boleh langsung menaikkan atau menurunkan kesulitan tanpa bukti. Bukti itu datang dari perilaku pemain. Jika pemain sering mati, health terus rendah, atau harus retry berkali-kali, itu bisa menjadi sinyal bahwa game terlalu sulit. Sebaliknya, jika pemain menyelesaikan level sangat cepat, akurasi tinggi, dan hampir tidak menerima damage, itu bisa menjadi sinyal bahwa game terlalu mudah.

Metrik player performance biasanya berupa data yang bisa diukur langsung dari gameplay. Beberapa contohnya adalah:

- `health remaining` atau health tersisa,
- `damage received` atau jumlah damage diterima,
- `damage given` atau jumlah damage diberikan,
- `accuracy` atau akurasi serangan,
- `kill count` atau jumlah kill,
- `level completion time` atau waktu menyelesaikan level,
- `death count` atau jumlah kematian,
- `retry count` atau jumlah retry,
- `resource remaining` atau jumlah resource tersisa,
- `hit frequency` atau frekuensi terkena hit,
- `evasion ability` atau kemampuan menghindar.

Penting untuk dipahami bahwa metrik ini bukan hanya angka terpisah. Dalam sistem DDA, metrik-metrik ini menjadi input bagi **difficulty model**. Model tersebut kemudian menilai apakah performa pemain menunjukkan kesulitan, kemudahan, atau kondisi yang seimbang. Misalnya, `health remaining` saja tidak cukup untuk menyimpulkan kesulitan. Health rendah bisa berarti pemain sedang kesulitan, tetapi juga bisa berarti pemain bermain agresif atau memilih strategi berisiko. Karena itu, metrik biasanya dikombinasikan, dinormalisasi, dan diberi bobot agar interpretasinya lebih stabil.

Dalam konteks sistem game yang adaptif, data player performance membantu sistem membuat keputusan. Jika performa pemain menurun, `Adaptation Rule` dapat memicu `Parameter Controller` untuk menyesuaikan kesulitan. Jika performa pemain terlalu tinggi, sistem juga dapat meningkatkan tantangan. Dengan cara ini, DDA bukan sekadar mengubah angka, tetapi menyesuaikan pengalaman bermain berdasarkan bukti perilaku pemain.

Sebelum lanjut, mahasiswa perlu memahami bahwa **player performance** adalah lapisan observasi dalam DDA. Ia menjawab pertanyaan: "Apa yang sedang terjadi pada pemain?" Jawaban dari pertanyaan ini kemudian dipakai untuk menentukan apakah difficulty perlu disesuaikan.

### Inti yang Harus Ditekankan

- **Player performance** adalah ukuran terukur tentang seberapa baik pemain bermain.
- Metrik seperti `health remaining`, `damage received`, `kill count`, `retry count`, dan `level completion time` menjadi sinyal utama untuk menilai kesulitan.
- Satu metrik saja biasanya tidak cukup; interpretasi yang baik membutuhkan kombinasi beberapa metrik.
- Data performa pemain menjadi input bagi **difficulty model** dan **adaptation rule** dalam sistem DDA.

### Transisi ke Slide Berikutnya

Selanjutnya, kita akan memperdalam salah satu kelompok metrik yang paling sering digunakan, yaitu **survival metrics**, seperti health, damage diterima, jumlah kematian, dan waktu bertahan.

---

## Slide 015 - Performance Metrics: Survival

### Narasi

**Survival metrics** adalah kelompok metrik yang mengukur kemampuan player bertahan hidup. Berbeda dengan metrik umum, fokusnya bukan hanya apakah player menang, tetapi seberapa lama dan seberapa stabil player mampu tetap hidup di dalam environment.

Metrik yang ditampilkan pada slide dapat dibaca sebagai berikut:

```text
Health remaining
Damage received
Death count
Retry count
Time survived
Healing item used
```

Dalam implementasi, metrik ini biasanya dipetakan ke variabel seperti `health_remaining`, `damage_received`, `death_count`, `retry_count`, `time_survived`, dan `healing_item_used`.

- `health_remaining` menunjukkan sisa nyawa player.
- `damage_received` menunjukkan seberapa sering player terkena serangan.
- `death_count` menunjukkan frekuensi kematian.
- `retry_count` menunjukkan seberapa sering player harus mengulang.
- `time_survived` menunjukkan durasi bertahan sebelum gagal.
- `healing_item_used` menunjukkan seberapa banyak player bergantung pada item pemulihan.

Contoh interpretasi pada slide adalah:

```text
Health sering rendah
Damage received tinggi
Death count tinggi
        ↓
player sedang kesulitan
```

Pola ini penting karena satu kejadian health rendah belum tentu berarti player kesulitan. Yang lebih kuat adalah **pola berulang**: health sering turun, damage diterima terus meningkat, dan kematian atau retry terjadi berkali-kali.

Dalam konteks **Dynamic Difficulty Adjustment**, metrik survival berfungsi sebagai sinyal awal. Alurnya dapat dipahami sebagai berikut:

1. Game mencatat nilai survival dari player.
2. Sistem menilai apakah nilai tersebut menunjukkan kesulitan.
3. Jika kesulitan terdeteksi, game dapat menyesuaikan tekanan, misalnya mengurangi agresivitas enemy atau menambah peluang healing.
4. Jika player terlalu mudah bertahan, game dapat meningkatkan tantangan agar engagement tetap terjaga.

Metrik survival paling cocok untuk genre yang memiliki tekanan bertahan hidup, seperti:

- action game,
- shooter,
- survival,
- dungeon crawler.

Sebelum lanjut ke metrik combat, mahasiswa perlu memahami bahwa survival metrics menjawab pertanyaan: **apakah player masih mampu bertahan?** Sementara metrik combat nanti akan menjawab pertanyaan berbeda, yaitu **seberapa efektif player bertempur?**

### Inti yang Harus Ditekankan

- **Survival metrics** mengukur kemampuan player bertahan hidup, bukan hanya kemenangan.
- Sinyal kesulitan biasanya muncul dari **pola berulang**, bukan satu nilai metrik saja.
- Metrik seperti `death_count`, `retry_count`, dan `damage_received` sangat berguna sebagai input untuk **Dynamic Difficulty Adjustment**.
- Metrik survival paling relevan untuk game dengan tekanan bertahan hidup, seperti action, shooter, survival, dan dungeon crawler.

### Transisi ke Slide Berikutnya

Setelah memahami bagaimana player bertahan, kita akan beralih ke **Performance Metrics: Combat**, di mana fokusnya adalah seberapa efektif player melakukan serangan, menghindari serangan, dan menyelesaikan pertempuran.

---

## Slide 016 - Performance Metrics: Combat

### Narasi

Slide ini membahas **performance metrics** pada aspek **combat**. Jika metrik survival menekankan kemampuan pemain untuk bertahan, metrik combat menekankan seberapa efektif pemain dalam pertempuran aktif.

```text
Enemy killed
Damage dealt
Accuracy
Hit rate
Dodge success
Attack frequency
Combo count
```

Metrik combat biasanya digunakan pada game yang memiliki interaksi ofensif dan defensif yang intens, seperti action game, shooter, atau dungeon crawler dengan banyak pertempuran.

Setiap metrik memberi sinyal yang berbeda:

- `Enemy killed` menunjukkan keberhasilan pemain dalam menyelesaikan ancaman.
- `Damage dealt` mengukur kontribusi ofensif, bukan hanya jumlah serangan.
- `Accuracy` dan `hit rate` menilai presisi; nilai tinggi menandakan pemain mampu memanfaatkan serangan dengan efektif.
- `Dodge success` menilai kemampuan pemain menghindari serangan musuh.
- `Attack frequency` menunjukkan intensitas serangan; terlalu rendah dapat menandakan ragu, terlalu tinggi dapat menandakan serangan tanpa strategi.
- `Combo count` menunjukkan kemampuan pemain mempertahankan tekanan dalam satu rangkaian serangan.

Contoh interpretasi:

```text
Accuracy tinggi
Damage dealt tinggi
Enemy cepat mati
        ↓
player performa baik
```

Interpretasi seperti ini membantu sistem game memahami apakah pemain sedang menguasai fase combat. Jika metrik combat terlalu tinggi, pemain mungkin merasa tantangan terlalu mudah. Jika metrik combat rendah, terutama pada `accuracy`, `dodge success`, atau `damage dealt`, pemain mungkin membutuhkan penyesuaian tantangan.

Dalam implementasi, metrik ini dapat dikumpulkan dari event pertempuran, misalnya saat serangan mengenai target, musuh dikalahkan, serangan berhasil dihindari, atau combo bertambah. Data tersebut kemudian menjadi bahan penilaian untuk **Dynamic Difficulty Adjustment** pada bagian combat.

### Inti yang Harus Ditekankan

- Metrik combat mengukur **efektivitas pertempuran**, bukan hanya kemampuan bertahan.
- Nilai combat harus dibaca secara gabungan, bukan dari satu metrik tunggal.
- Metrik combat menjadi sinyal penting untuk menilai apakah fase pertempuran terlalu mudah, terlalu sulit, atau sudah sesuai.

### Transisi ke Slide Berikutnya

Setelah memahami metrik combat, kita akan melanjutkan ke metrik progress yang lebih menekankan kemajuan pemain, bukan intensitas pertempuran.

---

## Slide 017 - Performance Metrics: Progress

### Narasi

Setelah metrik combat, kita beralih ke **metrik progress**. Metrik ini mengukur seberapa jauh pemain bergerak dalam tujuan permainan, bukan hanya seberapa baik pemain bertarung. Dalam **Dynamic Difficulty Adjustment**, metrik progress menjadi sinyal penting untuk mengetahui apakah pemain sedang lancar, ragu, atau terjebak.

Metrik progress yang ditampilkan pada slide adalah:

```text
Completion time
Objective completed
Distance traveled
Puzzle solved
Checkpoint reached
Level progress
```

Secara konseptual, metrik ini dapat dikelompokkan menjadi dua jenis.

- **Metrik waktu dan kemajuan umum**: `Completion time` dan `Level progress` menunjukkan seberapa cepat pemain menyelesaikan bagian permainan.
- **Metrik milestone dan aktivitas**: `Objective completed`, `Puzzle solved`, `Checkpoint reached`, dan `Distance traveled` menunjukkan apakah pemain benar-benar mencapai titik penting atau hanya bergerak tanpa kemajuan berarti.

Intuisi praktisnya sederhana: jika pemain sudah lama tidak mencapai milestone baru, sistem dapat menganggap ada hambatan. Hambatan itu bisa berasal dari puzzle yang terlalu sulit, jalur yang tidak jelas, musuh yang terlalu kuat, atau desain area yang membingungkan. Karena itu, metrik progress sangat cocok untuk game yang menjadikan kemajuan sebagai inti pengalaman.

Contoh pada slide menunjukkan pola penalaran berikut:

```text
Player terlalu lama di area yang sama
        ↓
mungkin player kesulitan
```

Pola ini penting karena `Player terlalu lama di area yang sama` bukan bukti pasti bahwa pemain gagal. Kondisi tersebut hanya menjadi **indikasi awal**. Dalam implementasi, sistem biasanya menggabungkannya dengan metrik lain, misalnya `checkpoint reached` yang tidak bertambah, `distance traveled` yang rendah, atau `puzzle solved` yang stagnan.

Metrik progress juga dapat menjadi input untuk perilaku NPC atau sistem adaptif dalam game. Misalnya, jika `puzzle solved` tidak bertambah, NPC dapat memberikan petunjuk. Jika `level progress` stagnan, game dapat membuka jalur alternatif atau menyesuaikan tantangan. Dengan cara ini, metrik progress tidak hanya digunakan untuk statistik, tetapi juga membantu sistem memahami konteks kesulitan pemain.

Sebelum lanjut, mahasiswa perlu memahami bahwa metrik progress bersifat relatif terhadap genre. Game puzzle lebih sensitif terhadap `puzzle solved` dan `completion time`, sedangkan dungeon atau mission-based lebih memperhatikan `checkpoint reached` dan `distance traveled`. Karena itu, keputusan penyesuaian kesulitan sebaiknya tidak hanya bergantung pada satu metrik, tetapi pada kombinasi beberapa sinyal progress.

### Inti yang Harus Ditekankan

- **Metrik progress** mengukur kemajuan pemain melalui waktu, tujuan, jarak, puzzle, checkpoint, dan progress level.
- Stagnasi di area tertentu atau tidak bertambahnya milestone dapat menjadi indikasi bahwa pemain mengalami kesulitan.
- Metrik ini paling relevan untuk adventure, puzzle, dungeon, dan mission-based game, serta dapat menjadi dasar penyesuaian tantangan secara adaptif.

### Transisi ke Slide Berikutnya

Setelah memahami metrik progress, kita akan melanjutkan ke metrik resource, yaitu bagaimana ketersediaan sumber daya seperti ammo, potion, energy, gold, dan item memengaruhi persepsi kesulitan pemain.

---

## Slide 018 - Performance Metrics: Resource

### Narasi

Pada bagian ini kita beralih dari metrik progress ke **metrik resource**. Jika progress menunjukkan seberapa jauh pemain bergerak, resource menunjukkan seberapa banyak cadangan yang masih dimiliki pemain.

Metrik resource biasanya berupa nilai yang bisa berkurang, bertambah, atau menipis selama permainan:

```text
Ammo remaining
Health potion remaining
Energy remaining
Gold collected
Item usage
Resource scarcity
```

Dalam implementasi, nilai ini dapat dipantau sebagai variabel seperti `ammoRemaining`, `healthPotion`, `energy`, `gold`, atau `itemUsage`.

Beberapa metrik resource penting untuk DDA:

- **Ammo remaining** dan **energy remaining** menunjukkan kemampuan pemain mempertahankan diri atau bergerak.
- **Health potion remaining** menunjukkan cadangan pemulihan.
- **Gold collected** dan **item usage** menunjukkan pola konsumsi dan kemampuan ekonomi pemain.
- **Resource scarcity** menggambarkan seberapa langka sumber daya di area tertentu.

Contoh interpretasinya:

```text
Ammo hampir habis
Health potion habis
Health rendah
        ↓
game mungkin terlalu sulit
```

Pola ini memberi sinyal bahwa pemain sedang berada dalam tekanan. Jika kondisi ini terjadi terlalu sering, sistem dapat menyesuaikan **loot drop** agar pemain mendapat cadangan yang lebih memadai.

Penyesuaian ini tidak selalu berarti membuat game lebih mudah secara langsung. Misalnya, sistem dapat meningkatkan peluang item tertentu, menambah spawn resource, atau menyesuaikan item yang tersedia di area tersebut.

Yang perlu dipahami mahasiswa adalah bahwa metrik resource bukan hanya angka. Angka tersebut adalah sinyal perilaku pemain: apakah pemain kekurangan, terlalu boros, atau area terlalu menantang.

Sebelum lanjut, pahami bahwa resource metrics paling berguna ketika dihubungkan dengan tujuan gameplay: bertahan hidup, eksplorasi, ekonomi, atau penyelesaian misi.

### Inti yang Harus Ditekankan

- **Metrik resource** memantau cadangan pemain seperti amunisi, potion, energi, emas, dan item.
- Nilai resource yang rendah dapat menjadi sinyal bahwa game terlalu sulit.
- Resource dapat digunakan untuk menyesuaikan **loot drop** dan ketersediaan item.
- Interpretasi metrik harus memperhatikan konteks gameplay, bukan hanya angka tunggal.

### Transisi ke Slide Berikutnya

Setelah memahami metrik resource, langkah berikutnya adalah memilih metrik yang benar-benar sesuai dengan genre game. Tidak semua metrik cocok untuk semua jenis permainan, sehingga DDA harus disesuaikan dengan tujuan gameplay masing-masing genre.

---

## Slide 019 - Metrik Harus Sesuai Genre

### Narasi

Pada slide ini, kita membahas prinsip penting dalam **Dynamic Difficulty Adjustment** atau **DDA**: metrik tidak bisa dipilih secara universal. DDA bekerja dengan membaca kondisi pemain, tetapi kondisi yang relevan sangat bergantung pada genre.

Intuisi praktisnya adalah metrik harus menangkap apa yang membuat pemain merasa kesulitan atau terlalu mudah dalam genre tersebut. Jika metrik salah, sistem akan menyesuaikan kesulitan pada aspek yang tidak tepat.

Contoh metrik yang sesuai genre:

- **Shooter**: `accuracy`, `damage taken`, `kill rate`.
- **Stealth**: `detection count`, `alarm triggered`, `time unseen`.
- **Racing**: `lap time`, `distance from leader`, `collision count`.
- **Dungeon**: `health remaining`, `room cleared`, `death count`.

Metrik ini bukan sekadar angka statistik. Dalam konteks perilaku game, metrik dapat menjadi input untuk **decision making**, **finite state machine**, **behavior tree**, **steering**, atau **learning agent**. Misalnya, pada game stealth, `detection count` dapat memicu perubahan state NPC dari waspada menjadi mengejar. Pada game racing, `distance from leader` dapat mengatur agresivitas kendaraan lawan. Pada game dungeon, `health remaining` dapat memengaruhi spawn musuh atau loot yang diberikan.

Hal yang harus dipahami mahasiswa sebelum lanjut adalah: sebelum membuat threshold atau rumus penyesuaian, tentukan dulu tujuan gameplay. Apakah DDA ingin mempertahankan tensi, memberi ruang belajar, menjaga fairness, atau mempertahankan flow? Metrik yang baik adalah metrik yang selaras dengan tujuan tersebut.

### Inti yang Harus Ditekankan

- **Metrik DDA harus sesuai genre**, karena sumber kesulitan berbeda-beda.
- Metrik yang relevan dapat menjadi input untuk perilaku NPC, state, steering, dan decision making.
- Tujuan gameplay harus ditentukan sebelum memilih threshold atau aturan penyesuaian.

### Transisi ke Slide Berikutnya

Setelah metrik dipilih sesuai genre, langkah berikutnya adalah menentukan apakah satu metrik sudah cukup atau perlu digabungkan menjadi beberapa metrik.

---

## Slide 020 - Metrik Tunggal vs Multi-Metrik

### Narasi

Slide ini membandingkan dua cara membaca kondisi pemain dalam **Dynamic Difficulty Adjustment** atau **DDA**. Sistem DDA perlu memutuskan kapan kesulitan dinaikkan atau diturunkan, dan keputusan itu bergantung pada metrik gameplay yang diukur.

**Metrik tunggal** adalah satu indikator yang langsung memicu perubahan difficulty. Contoh sederhana:

```text
Jika health < 30%
    difficulty turun
```

Secara eksekusi, sistem memeriksa nilai `health` pada interval tertentu. Jika kondisi benar, sistem menurunkan parameter kesulitan, misalnya mengurangi damage musuh atau menambah peluang healing. Kelebihannya mudah diimplementasikan, mudah diuji, dan cepat dipahami.

Namun, metrik tunggal bisa salah membaca kondisi. Pemain mungkin `health` rendah karena strategi, karena sedang berada di fase sulit, atau karena sengaja mengambil risiko. Jika hanya melihat `health`, DDA bisa menurunkan kesulitan pada saat yang tidak tepat.

**Multi-metrik** menggabungkan beberapa indikator menjadi satu penilaian yang lebih utuh. Contoh:

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

Di sini, `SkillScore` menilai beberapa aspek sekaligus: kondisi bertahan, kemampuan menyerang, kemampuan bertahan hidup, dan kecepatan menyelesaikan tantangan. Urutan prosesnya adalah mengumpulkan nilai dari tiap aspek, mengubahnya menjadi skor yang dapat dibandingkan, lalu menjumlahkannya menjadi `SkillScore`.

Nilai `SkillScore` kemudian digunakan sebagai dasar keputusan DDA. Hasil yang diharapkan lebih akurat karena satu metrik tidak lagi mendominasi keputusan. Dengan multi-metrik, sistem dapat membedakan pemain yang benar-benar kesulitan dari pemain yang hanya sedang berada dalam kondisi sementara.

### Inti yang Harus Ditekankan

- **Metrik tunggal** mudah tetapi rentan salah membaca kondisi karena hanya menggunakan satu sinyal.
- **Multi-metrik** menilai beberapa aspek gameplay sehingga keputusan DDA lebih stabil dan kontekstual.
- `SkillScore` adalah contoh agregasi metrik; sebelum digabung, skala metrik perlu dibuat konsisten.

### Transisi ke Slide Berikutnya

Karena `health`, `accuracy`, `kill count`, dan `time` memiliki satuan berbeda, langkah berikutnya adalah normalisasi metrik agar dapat digabung secara adil.

---

## Slide 021 - Normalisasi Metrik

### Narasi

Pada tahap ini, kita masuk ke masalah praktis dalam **Dynamic Difficulty Adjustment** atau **DDA**. Ketika sistem ingin menilai performa pemain, biasanya tidak cukup memakai satu metrik. Kita bisa memakai **health**, **accuracy**, **kill count**, dan **time**. Masalahnya, setiap metrik memiliki satuan dan skala yang berbeda.

Misalnya, **health** bisa berada pada rentang `0` sampai `100`, **accuracy** pada rentang `0` sampai `1`, **kill count** bisa `0` sampai `50`, sedangkan **time** diukur dalam detik. Jika nilai-nilai ini langsung dijumlahkan, metrik dengan angka besar akan mendominasi perhitungan. Akibatnya, sistem bisa salah membaca kondisi pemain.

Untuk mengatasi hal itu, kita melakukan **normalisasi**. Normalisasi adalah proses mengubah nilai mentah ke rentang yang lebih seragam, biasanya `0.0` sampai `1.0`. Dengan rentang yang sama, setiap metrik dapat dibandingkan dan digabungkan secara lebih adil.

Contoh sederhana untuk health adalah:

```text
normalizedHealth = currentHealth / maxHealth
```

Di sini, `currentHealth` adalah nilai health saat ini, sedangkan `maxHealth` adalah batas maksimum health. Jika `currentHealth` bernilai `75` dan `maxHealth` bernilai `100`, maka `normalizedHealth` menjadi `0.75`. Nilai ini berarti pemain masih memiliki 75% dari kapasitas health maksimumnya.

Hasil normalisasi tidak hanya membuat angka lebih rapi, tetapi juga membuat perhitungan **DDA** lebih konsisten. Sistem tidak lagi terkecoh oleh perbedaan satuan. Metrik yang kecil secara angka, seperti `accuracy`, tetap bisa memberikan kontribusi yang seimbang dengan metrik lain.

Sebelum lanjut, mahasiswa perlu memahami bahwa normalisasi bukan sekadar membagi angka. Tujuannya adalah menyamakan skala agar keputusan penyesuaian kesulitan lebih masuk akal.

### Inti yang Harus Ditekankan

- Metrik yang berbeda skala tidak bisa langsung digabungkan karena bisa menghasilkan bobot yang tidak adil.
- **Normalisasi** mengubah nilai mentah ke rentang yang seragam, biasanya `0.0` sampai `1.0`.
- Hasil normalisasi membuat perhitungan **DDA** lebih konsisten dan lebih mudah diinterpretasi.

### Transisi ke Slide Berikutnya

Setelah memahami alasan mengapa normalisasi diperlukan, kita akan melihat contoh implementasinya untuk beberapa metrik seperti health, accuracy, survival, dan damage taken.

---

## Slide 022 - Contoh Normalisasi

### Narasi

Pada slide ini, kita melihat contoh praktis normalisasi metrik performa player. Tujuannya adalah mengubah nilai yang berskala berbeda menjadi skor yang seragam, sehingga mudah dibandingkan dan digunakan oleh sistem **Dynamic Difficulty Adjustment**.

```csharp
float healthScore = currentHealth / maxHealth;
float accuracyScore = hitCount / shotCount;
float survivalScore = 1f - Mathf.Clamp01(deathCount / maxDeaths);
float damageScore = 1f - Mathf.Clamp01(damageTaken / maxExpectedDamage);
```

Setiap baris menghitung satu aspek performa player menjadi nilai antara `0.0` dan `1.0`.

- **Health**: `healthScore` membandingkan `currentHealth` dengan `maxHealth`. Jika player masih sehat penuh, skor mendekati `1.0`; jika nyaris mati, skor mendekati `0.0`.
- **Accuracy**: `accuracyScore` membandingkan `hitCount` dengan `shotCount`. Semakin banyak tembakan yang mengenai target, semakin tinggi skor.
- **Survival**: `survivalScore` menggunakan nilai invers dari rasio kematian. `deathCount / maxDeaths` menunjukkan seberapa sering player mati, lalu dikurangi dari `1f` sehingga player yang jarang mati mendapat skor lebih tinggi.
- **Damage Taken**: `damageScore` juga menggunakan nilai invers. Semakin kecil `damageTaken` relatif terhadap `maxExpectedDamage`, semakin tinggi skor.

Fungsi `Mathf.Clamp01` penting karena memastikan hasil rasio tetap berada pada rentang `0.0` sampai `1.0`. Tanpa clamp, nilai bisa melebihi `1.0` jika `deathCount` lebih besar dari `maxDeaths` atau `damageTaken` lebih besar dari `maxExpectedDamage`. Dengan clamp, skor tetap valid dan stabil.

Secara keseluruhan, keempat skor ini memiliki arah yang sama: **semakin tinggi skor, semakin baik performa player**. Untuk metrik yang buruk jika nilainya besar, seperti kematian dan damage, kita menggunakan invers agar interpretasinya tetap konsisten.

Skor-skor ini kemudian menjadi bahan evaluasi performa player. Sistem game dapat mengamati nilai-nilai tersebut untuk menilai apakah player sedang kesulitan, bermain baik, atau membutuhkan penyesuaian tantangan.

### Inti yang Harus Ditekankan

- Normalisasi membuat metrik berbeda menjadi skor seragam pada rentang `0.0` sampai `1.0`.
- `healthScore` dan `accuracyScore` adalah skor langsung, sedangkan `survivalScore` dan `damageScore` adalah skor invers.
- `Mathf.Clamp01` menjaga skor tetap valid meskipun nilai mentah melebihi batas yang diharapkan.
- Skor yang lebih tinggi selalu menunjukkan performa player yang lebih baik.

### Transisi ke Slide Berikutnya

Setelah beberapa metrik dinormalisasi menjadi skor yang konsisten, langkah berikutnya adalah menggabungkannya menjadi satu nilai yang lebih representatif, yaitu **Skill Score**.

---

## Slide 023 - Skill Score

### Narasi

Pada slide ini, kita masuk ke tahap berikutnya setelah melakukan normalisasi metrik performa pemain. Setiap metrik seperti `healthScore`, `accuracyScore`, `killRateScore`, dan `speedScore` sudah berada pada skala yang sama, yaitu antara `0.0` dan `1.0`. Dengan skala yang seragam, kita dapat menggabungkan beberapa metrik tersebut menjadi satu nilai yang lebih representatif.

Nilai gabungan ini disebut **Skill Score**. Tujuannya adalah memberikan estimasi tunggal mengenai seberapa baik performa pemain pada suatu waktu. Dalam konteks **Dynamic Difficulty Adjustment** atau **DDA**, nilai ini menjadi sinyal penting untuk menentukan apakah tingkat kesulitan perlu dinaikkan, diturunkan, atau dipertahankan.

Bentuk umum skill score dapat ditulis sebagai berikut:

```text
SkillScore =
0.4 × healthScore
+ 0.3 × accuracyScore
+ 0.2 × killRateScore
+ 0.1 × speedScore
```

Pada rumus tersebut, setiap metrik diberi bobot yang berbeda. Bobot menunjukkan seberapa besar pengaruh metrik tersebut terhadap penilaian keseluruhan. Misalnya, `healthScore` diberi bobot `0.4`, artinya kondisi kesehatan pemain dianggap paling berpengaruh dalam contoh ini. `accuracyScore` diberi bobot `0.3`, `killRateScore` diberi bobot `0.2`, dan `speedScore` diberi bobot `0.1`.

Penting untuk diperhatikan bahwa jumlah bobot pada contoh ini adalah `1.0`. Hal ini membuat hasil akhir tetap berada pada rentang yang konsisten:

```text
0.0 = performa sangat buruk
1.0 = performa sangat baik
```

Artinya, jika semua metrik bernilai `0.0`, maka `SkillScore` juga akan bernilai `0.0`. Sebaliknya, jika semua metrik bernilai `1.0`, maka `SkillScore` akan bernilai `1.0`. Dengan cara ini, sistem dapat membaca performa pemain secara lebih stabil dan mudah dibandingkan.

Dalam implementasi game, skill score tidak selalu harus menggunakan empat metrik tersebut. Metriknya dapat disesuaikan dengan genre dan tujuan desain. Yang penting adalah setiap metrik telah dinormalisasi terlebih dahulu, lalu digabungkan dengan bobot yang masuk akal. Skill score kemudian menjadi dasar keputusan sistem DDA, misalnya untuk menyesuaikan kekuatan musuh, jumlah ancaman, atau tingkat tantangan secara keseluruhan.

### Inti yang Harus Ditekankan

- **Skill Score** adalah nilai gabungan dari beberapa metrik performa pemain yang sudah dinormalisasi.
- Bobot pada rumus menunjukkan seberapa penting masing-masing metrik dalam menilai performa keseluruhan.
- Nilai `SkillScore` berada pada rentang `0.0` sampai `1.0`, sehingga mudah digunakan sebagai sinyal keputusan.
- Skill score berfungsi sebagai dasar untuk menentukan arah **difficulty adjustment**, bukan sebagai satu-satunya faktor desain.
- Semakin tinggi `SkillScore`, semakin baik performa pemain; semakin rendah `SkillScore`, semakin besar kemungkinan pemain membutuhkan tantangan yang lebih ringan.

### Transisi ke Slide Berikutnya

Setelah memahami bentuk umum skill score, kita akan melihat contoh perhitungan konkretnya pada slide berikutnya, di mana nilai metrik dan bobot akan digabungkan menjadi satu hasil akhir yang dapat diinterpretasikan.

---

## Slide 024 - Contoh Skill Score

### Narasi

Pada slide ini, kita melihat **contoh perhitungan skill score** dari nilai-nilai performa player yang sudah dinormalisasi. Tujuannya bukan sekadar menghitung angka, tetapi menunjukkan bagaimana beberapa indikator gameplay dapat digabungkan menjadi satu sinyal yang bisa digunakan oleh sistem **Dynamic Difficulty Adjustment**.

```text
healthScore = 0.80
accuracyScore = 0.70
killRateScore = 0.60
speedScore = 0.50
```

Setiap nilai berada pada rentang `0.0` sampai `1.0`, sehingga dapat dibandingkan langsung. Nilai `healthScore` yang tinggi menunjukkan player masih relatif aman, sedangkan `speedScore` yang lebih rendah menunjukkan player belum terlalu cepat dalam bergerak atau merespons.

Rumus yang digunakan adalah:

```text
SkillScore =
0.4 * 0.80
+ 0.3 * 0.70
+ 0.2 * 0.60
+ 0.1 * 0.50
```

Perhitungannya dapat dilihat sebagai berikut:

1. `0.4 * 0.80 = 0.32`
2. `0.3 * 0.70 = 0.21`
3. `0.2 * 0.60 = 0.12`
4. `0.1 * 0.50 = 0.05`

Jika dijumlahkan, hasilnya adalah:

```text
SkillScore = 0.70
```

Artinya, performa player secara keseluruhan berada pada kategori **cukup baik**. Player tidak sedang kesulitan berat, tetapi juga belum menunjukkan performa sangat dominan. Karena itu, sistem dapat mempertimbangkan untuk **menaikkan difficulty sedikit**, misalnya dengan membuat tantangan lebih responsif tanpa langsung membuat game terasa terlalu berat.

Yang perlu dipahami mahasiswa adalah bahwa `SkillScore` bukan nilai kesulitan langsung. Nilai ini adalah **input penilaian performa player**. Selanjutnya, nilai tersebut akan diterjemahkan ke dalam model difficulty yang menentukan parameter game seperti statistik enemy, spawn rate, atau agresivitas enemy.

### Inti yang Harus Ditekankan

- `SkillScore` adalah hasil **weighted sum** dari beberapa indikator performa player.
- Setiap indikator harus sudah dinormalisasi ke rentang `0.0` sampai `1.0` agar dapat digabungkan.
- Bobot menunjukkan prioritas: `healthScore` paling berpengaruh, diikuti `accuracyScore`, `killRateScore`, dan `speedScore`.
- Hasil `0.70` berarti player **cukup baik**, sehingga difficulty dapat dinaikkan secara kecil.
- `SkillScore` bukan `difficultyLevel`; ia hanya menjadi sinyal untuk menentukan arah penyesuaian difficulty.

### Transisi ke Slide Berikutnya

Setelah kita tahu bagaimana performa player diukur melalui `SkillScore`, langkah berikutnya adalah memahami bagaimana nilai tersebut diterjemahkan ke dalam **difficulty model** yang benar-benar memengaruhi parameter game.

---

## Slide 025 - Difficulty Model

### Narasi

Setelah slide sebelumnya menunjukkan cara menghitung `SkillScore`, langkah berikutnya adalah mengubah nilai tersebut menjadi bentuk yang bisa dipakai game. Di sinilah **difficulty model** berperan. Ia bukan sekadar label “mudah” atau “sulit”, melainkan representasi terstruktur yang menentukan seberapa besar tantangan yang diberikan sistem kepada pemain.

Secara sederhana, **difficulty model** adalah lapisan antara penilaian pemain dan perubahan dunia game. Nilai skill pemain dapat menjadi input, lalu model ini menghasilkan parameter yang memengaruhi gameplay. Dengan cara ini, penyesuaian kesulitan tidak dilakukan secara acak, tetapi mengikuti aturan yang bisa diuji dan diatur.

Slide ini menampilkan dua bentuk nilai yang umum dipakai:

```text
difficultyLevel = 1 sampai 5
difficultyMultiplier = 0.75 sampai 1.50
```

Bentuk pertama bersifat **diskrit**, yaitu nilai bertingkat. Bentuk kedua bersifat **kontinu**, yaitu pengali yang dapat diubah secara halus. Keduanya valid, tetapi memberi karakter berbeda. Nilai diskrit lebih mudah dipahami dan di-debug, sedangkan nilai kontinu lebih fleksibel untuk perubahan bertahap.

Pengaruh **difficulty model** biasanya tidak hanya satu variabel. Model ini dapat mengatur beberapa aspek sekaligus, misalnya:

- `enemyStats` seperti damage, health, atau armor,
- `spawnRate` untuk jumlah musuh yang muncul,
- `resourceAmount` untuk item, amunisi, atau healing,
- `obstacleDensity` untuk hambatan di lingkungan,
- `aggressionLevel` untuk keputusan NPC menyerang atau bertahan,
- `enemyReactionTime` untuk kecepatan respons agent.

Dalam desain game, hal penting adalah memilih parameter yang benar-benar memengaruhi pengalaman pemain. Tidak semua variabel harus diubah setiap kali kesulitan berubah. Misalnya, menaikkan `spawnRate` terlalu cepat dapat membuat game terasa tidak adil, sementara memperpendek `enemyReactionTime` dapat membuat NPC terasa lebih waspada tanpa langsung mengubah damage secara ekstrem.

Dari sisi perilaku agent, **difficulty model** dapat menjadi input untuk `FSM`, `behavior tree`, atau sistem steering. Sebagai contoh, jika `difficultyMultiplier` tinggi, agent dapat memilih state `aggressive`, mengurangi jarak aman, atau memperpendek cooldown serangan. Jika nilainya rendah, agent dapat lebih sering memilih state `cautious` atau memberi pemain waktu lebih panjang untuk bereaksi. Dengan demikian, model kesulitan menjadi bagian dari decision making, bukan hanya angka di UI.

Sebelum lanjut, mahasiswa perlu memahami bahwa **difficulty model** adalah abstraksi yang harus konsisten. Nilai yang dihasilkan harus memiliki batas yang jelas, mudah diuji, dan tidak mengubah seluruh game secara tiba-tiba. Pemahaman ini penting karena slide berikutnya akan membahas salah satu bentuk konkretnya, yaitu difficulty level diskrit.

### Inti yang Harus Ditekankan

- **Difficulty model** adalah representasi terstruktur yang mengubah penilaian pemain menjadi parameter gameplay.
- Model ini dapat berupa nilai diskrit seperti `difficultyLevel` atau nilai kontinu seperti `difficultyMultiplier`.
- Pengaruhnya bersifat multi-parameter, termasuk `enemyStats`, `spawnRate`, `resourceAmount`, `obstacleDensity`, `aggressionLevel`, dan `enemyReactionTime`.
- Model ini harus terhubung dengan perilaku NPC atau agent melalui state, decision making, atau parameter steering.

### Transisi ke Slide Berikutnya

Setelah memahami bentuk umum **difficulty model**, kita akan masuk ke bentuk yang lebih sederhana dan mudah dipraktikkan, yaitu difficulty level diskrit.

---

## Slide 026 - Difficulty Level Diskrit

### Narasi

**Difficulty level diskrit** adalah cara paling sederhana untuk mengatur tingkat kesulitan game. Alih-alih menggunakan nilai desimal yang berubah halus, game membagi kesulitan menjadi beberapa tingkat yang jelas. Pada contoh ini, tingkat kesulitan direpresentasikan sebagai bilangan bulat dari `1` sampai `5`.

```text
Level 1 = Easy
Level 2 = Normal-
Level 3 = Normal
Level 4 = Hard
Level 5 = Very Hard
```

Setiap level dapat dipetakan ke parameter gameplay yang berbeda. Misalnya, `Level 1` dapat membuat musuh lebih lambat, `Level 3` menjadi baseline, dan `Level 5` meningkatkan agresivitas, kecepatan, atau jumlah ancaman. Pemetaan ini membuat perilaku NPC lebih mudah dikendalikan karena sistem hanya perlu membaca satu nilai level, bukan menghitung banyak parameter secara bebas.

Aturan penyesuaian pada slide ini menggunakan `skillScore` sebagai sinyal performa pemain. Nilai `skillScore` dapat dianggap sebagai ukuran seberapa baik pemain menghadapi tantangan saat ini. Jika nilainya tinggi, pemain dianggap mampu, sehingga kesulitan dinaikkan. Jika nilainya rendah, pemain dianggap kesulitan, sehingga kesulitan diturunkan.

```text
Jika skillScore > 0.75
    naikkan difficulty

Jika skillScore < 0.35
    turunkan difficulty
```

Dalam implementasi sederhana, aturan ini dapat ditulis sebagai berikut:

```text
if skillScore > 0.75:
    difficultyLevel = min(5, difficultyLevel + 1)

elif skillScore < 0.35:
    difficultyLevel = max(1, difficultyLevel - 1)
```

Urutan eksekusinya dapat dipahami sebagai berikut:

1. Sistem membaca nilai `skillScore`.
2. Sistem membandingkan nilai tersebut dengan ambang batas `0.75` dan `0.35`.
3. Jika kondisi terpenuhi, `difficultyLevel` diubah satu tingkat.
4. Fungsi `min` dan `max` menjaga nilai tetap berada pada rentang `1` sampai `5`.

Kelebihan utama pendekatan diskrit adalah kemudahan. Mahasiswa dapat dengan cepat memahami bahwa `Level 3` lebih sulit dari `Level 2` dan lebih mudah dari `Level 4`. Pendekatan ini juga mudah di-debug karena perubahan dapat dilacak sebagai loncatan antar level. Untuk praktikum, pendekatan ini sangat cocok karena mahasiswa dapat menguji perilaku musuh pada setiap level secara terpisah.

Namun, mahasiswa perlu memahami bahwa perubahan diskrit bersifat tidak kontinu. Peningkatan dari `Level 3` ke `Level 4` dapat terasa lebih mencolok dibandingkan perubahan nilai kecil. Oleh karena itu, dalam desain game, ambang batas dan aturan perubahan perlu dipilih agar pemain tidak merasakan lompatan yang terlalu tajam.

### Inti yang Harus Ditekankan

- **Difficulty level diskrit** menggunakan tingkat yang terpisah, misalnya `Level 1` sampai `Level 5`.
- `skillScore` menjadi sinyal keputusan: nilai tinggi menaikkan level, nilai rendah menurunkan level.
- Perubahan level sebaiknya dibatasi dengan `min` dan `max` agar tetap berada pada rentang yang valid.
- Pendekatan diskrit mudah dipahami, mudah di-debug, dan cocok untuk praktikum.
- Setiap level dapat memetakan parameter gameplay seperti kecepatan musuh, agresivitas, spawn rate, atau jumlah resource.

### Transisi ke Slide Berikutnya

Setelah memahami cara kerja level diskrit, kita akan melanjutkan ke **difficulty multiplier kontinu**, yaitu pendekatan yang menggunakan nilai desimal agar perubahan kesulitan dapat lebih halus dan fleksibel.

---

## Slide 027 - Difficulty Multiplier Kontinu

### Narasi

Pada slide ini kita melangkah dari **difficulty level diskrit** ke model yang lebih halus, yaitu **difficulty multiplier kontinu**. Jika sebelumnya kesulitan game direpresentasikan sebagai level 1 sampai 5, di sini kesulitan dapat berupa satu nilai numerik yang bisa berubah sedikit demi sedikit.

Intuisi praktisnya sederhana: game memiliki nilai dasar, misalnya `difficultyMultiplier = 1.0`. Nilai ini dapat digunakan untuk mengatur parameter gameplay, seperti kecepatan musuh, damage, jumlah spawn, atau akurasi NPC. Jika pemain bermain baik, nilai ini dinaikkan sedikit. Jika pemain kesulitan, nilai ini diturunkan sedikit.

```text
difficultyMultiplier = 1.0

Jika player bagus:
    difficultyMultiplier += 0.05

Jika player kesulitan:
    difficultyMultiplier -= 0.05

Batas:
0.75 <= difficultyMultiplier <= 1.5
```

Dalam potongan kode tersebut, `difficultyMultiplier` adalah variabel pengali yang menjadi pusat penyesuaian. Nilai awal `1.0` biasanya berarti kesulitan normal. Perubahan `+= 0.05` atau `-= 0.05` membuat penyesuaian terjadi secara bertahap, bukan melompat langsung ke level yang jauh berbeda. Batas `0.75` sampai `1.5` menjaga agar game tidak menjadi terlalu mudah atau terlalu sulit.

Kelebihan model kontinu adalah **perubahan halus** dan **fleksibel**. Sistem DDA tidak harus berupa pilihan menu, tetapi bisa berjalan di belakang layar. Misalnya, musuh tidak langsung berubah dari "Normal" menjadi "Hard", melainkan sedikit lebih cepat atau sedikit lebih agresif.

Namun, model ini juga memiliki kekurangan utama: tanpa pengendalian tambahan, nilai bisa berubah terlalu cepat. Jika `skillScore` pemain berfluktuasi sedikit saja, `difficultyMultiplier` dapat naik-turun secara tidak stabil. Karena itu, pada implementasi nyata biasanya diperlukan **smoothing**, misalnya membatasi laju perubahan, menggunakan interpolasi, atau menunggu beberapa frame sebelum menyesuaikan nilai.

Sebelum lanjut, mahasiswa perlu memahami bahwa **difficulty multiplier** adalah cara merepresentasikan kesulitan sebagai skala kontinu. Konsep ini penting karena banyak sistem DDA modern tidak menggunakan label level, tetapi mengalikan parameter gameplay secara dinamis.

### Inti yang Harus Ditekankan

- **Difficulty multiplier** adalah nilai kontinu, bukan level diskrit.
- Perubahan kecil seperti `+= 0.05` membuat penyesuaian lebih halus.
- Batas minimum dan maksimum mencegah kesulitan keluar dari rentang yang wajar.
- Tanpa **smoothing**, sistem dapat menjadi terlalu sensitif terhadap perubahan performa pemain.

### Transisi ke Slide Berikutnya

Setelah memahami bahwa kesulitan dapat diubah secara kontinu, langkah berikutnya adalah menentukan ke mana sistem harus mengarah. Pada slide berikutnya, kita akan melihat **difficulty target**, yaitu target performa pemain yang menjadi acuan penyesuaian.

---

## Slide 028 - Difficulty Target

### Narasi

Pada slide ini, kita melihat cara sistem **Dynamic Difficulty Adjustment** menentukan kapan kesulitan harus diubah. Ide utamanya adalah sistem tidak hanya bereaksi terhadap kondisi pemain, tetapi memiliki **target performa** yang ingin dijaga.

Target tersebut dapat dinyatakan sebagai nilai `skillScore`, misalnya:

```text
targetSkillScore = 0.6
```

Nilai ini berarti sistem ingin pemain berada sekitar level kemampuan `0.6`. Jika pemain terlalu di atas target, sistem dapat menaikkan kesulitan. Jika pemain terlalu di bawah target, sistem dapat menurunkan kesulitan.

Logika dasarnya dapat ditulis sebagai berikut:

```text
if skillScore > target + tolerance:
    naikkan difficulty

if skillScore < target - tolerance:
    turunkan difficulty
```

Bagian penting dari logika ini adalah `tolerance`. Toleransi membentuk rentang aman di sekitar target.

Contoh:

```text
target = 0.6
tolerance = 0.1
```

Artinya:

- `0.5` sampai `0.7` dianggap masih normal.
- Jika `skillScore` di atas `0.7`, baru kesulitan dinaikkan.
- Jika `skillScore` di bawah `0.5`, baru kesulitan diturunkan.
- Selama nilai berada di dalam rentang tersebut, sistem tidak perlu mengubah kesulitan.

Cara kerja ini penting karena tanpa toleransi, sistem bisa terlalu sensitif. Perubahan kecil pada `skillScore` dapat memicu penyesuaian yang cepat, sehingga kesulitan terasa berayun-ayun. Dengan toleransi, keputusan DDA menjadi lebih stabil dan lebih mudah dirasakan sebagai tantangan yang wajar.

Dalam konteks sistem game, target performa ini dapat menjadi bagian dari **decision making**. Sistem mengamati metrik pemain, membandingkannya dengan target, lalu memilih aksi penyesuaian. Aksi tersebut dapat memengaruhi parameter musuh, spawn, reward, atau nilai `difficultyMultiplier` yang sudah dibahas sebelumnya.

Yang perlu dipahami mahasiswa sebelum lanjut adalah: DDA bukan sekadar menaikkan atau menurunkan kesulitan. DDA yang baik memiliki **target**, **metrik**, dan **batas toleransi** agar perubahan tidak agresif dan tetap menjaga pengalaman bermain.

### Inti yang Harus Ditekankan

- **Difficulty target** adalah nilai performa ideal yang ingin dijaga oleh sistem DDA.
- `tolerance` membuat sistem hanya bereaksi ketika `skillScore` keluar dari rentang normal.
- Rentang toleransi mencegah perubahan kesulitan yang terlalu cepat, sensitif, atau tidak stabil.
- Keputusan DDA dapat dilihat sebagai proses: amati `skillScore`, bandingkan dengan target, lalu pilih aksi penyesuaian.

### Transisi ke Slide Berikutnya

Setelah memahami bagaimana target dan toleransi mengatur penyesuaian kesulitan, kita akan memperluas pembahasannya ke **adaptive gameplay**, yaitu bentuk gameplay yang menyesuaikan diri terhadap kondisi pemain secara lebih umum.

---

## Slide 029 - Adaptive Gameplay

### Narasi

**Adaptive gameplay** adalah gameplay yang berubah berdasarkan kondisi `player`. Dalam materi ini, **DDA** diposisikan sebagai salah satu bentuk adaptive gameplay, yaitu penyesuaian kesulitan yang dilakukan sistem berdasarkan performa pemain.

Intuisi praktisnya, game tidak harus berjalan dengan aturan yang sama dari awal sampai akhir. Sistem dapat mengamati kondisi pemain, lalu memilih respons yang membuat pengalaman bermain tetap menantang tanpa terasa tidak adil.

Contoh **adaptive gameplay** yang dapat dipahami dari slide ini:

- `enemy` menjadi lebih agresif jika `player` terlalu dominan.
- `health pack` muncul lebih sering jika `player` sering berada di kondisi sekarat.
- musuh mengurangi `damage` jika `player` sering mati.
- game memberi `hint` jika `player` terlalu lama stuck.
- `dungeon` menjadi lebih pendek jika `player` sering gagal.

Poin penting yang harus ditekankan adalah tujuan adaptasi bukan membuat game selalu mudah. Jika game terlalu mudah, pemain bisa bosan. Jika terlalu sulit, pemain bisa frustrasi. Oleh karena itu, adaptasi berfungsi menjaga keseimbangan antara tantangan dan kemampuan pemain.

Dalam konteks sistem game, ide ini dapat dikaitkan dengan **decision making** dan **NPC behavior**. Sistem dapat membaca sinyal kondisi `player`, lalu memilih `action` tertentu, misalnya menaikkan agresivitas musuh atau menambah bantuan. Yang penting, perubahan tersebut harus terasa natural dan tidak merusak desain inti game.

Sebelum masuk ke elemen apa saja yang bisa diubah, mahasiswa perlu memahami bahwa **adaptive gameplay** adalah konsep yang lebih luas. **DDA** adalah salah satu bentuknya, dan fokus utamanya adalah menyesuaikan tantangan berdasarkan performa `player`.

### Inti yang Harus Ditekankan

- **Adaptive gameplay** adalah gameplay yang berubah berdasarkan kondisi `player`.
- **DDA** adalah salah satu bentuk adaptive gameplay, bukan satu-satunya.
- Tujuan adaptasi adalah menjaga tantangan tetap menarik, bukan membuat game selalu mudah.
- Perubahan harus terasa natural dan tidak merusak desain inti game.

### Transisi ke Slide Berikutnya

Selanjutnya kita akan melihat bentuk-bentuk adaptasi yang dapat dilakukan dalam DDA, mulai dari musuh, spawner, resource, hingga level.

---

## Slide 030 - Bentuk Adaptasi

### Narasi

Pada slide ini, kita memperluas pandangan tentang **Dynamic Difficulty Adjustment** atau **DDA**. DDA tidak selalu berarti mengubah satu angka saja. Ia dapat menyentuh beberapa lapisan sistem game, mulai dari karakter musuh, mekanisme spawn, item penunjang, hingga bentuk level.

```text
Enemy
├── Health
├── Damage
├── Speed
├── Accuracy
├── Reaction Time
└── Aggressiveness

Spawner
├── Spawn Rate
├── Enemy Count
└── Enemy Type

Resource
├── Health Drop
├── Ammo Drop
└── Power-up

Level
├── Obstacle Density
├── Trap Count
└── Path Complexity
```

Pohon ini menunjukkan bahwa adaptasi dapat terjadi pada empat kelompok utama.

- **Enemy** adalah elemen yang paling langsung dirasakan pemain. Nilai seperti `Health`, `Damage`, `Speed`, `Accuracy`, `Reaction Time`, dan `Aggressiveness` menentukan seberapa kuat, cepat, dan agresif NPC berperilaku.
- **Spawner** mengatur tekanan permainan dari sisi jumlah musuh. `Spawn Rate`, `Enemy Count`, dan `Enemy Type` memengaruhi ritme pertempuran dan variasi ancaman.
- **Resource** mengatur bantuan yang diterima pemain. `Health Drop`, `Ammo Drop`, dan `Power-up` dapat membuat permainan terasa lebih aman atau lebih menantang.
- **Level** mengubah tantangan spasial. `Obstacle Density`, `Trap Count`, dan `Path Complexity` memengaruhi cara pemain bergerak, menghindari bahaya, dan mencari jalur.

Secara intuitif, DDA bekerja seperti beberapa “knob” yang dapat disesuaikan. Namun, setiap knob memiliki efek berbeda. Mengubah `Damage` musuh mengubah intensitas pertempuran. Mengubah `Spawn Rate` mengubah kepadatan tekanan. Mengubah `Path Complexity` mengubah tantangan navigasi. Karena itu, desain DDA harus memilih elemen yang paling sesuai dengan tujuan pengalaman pemain.

Untuk praktikum, fokus pada musuh adalah pilihan yang paling praktis. Parameter musuh mudah diamati, mudah diubah, dan dampaknya langsung terlihat pada gameplay. Mahasiswa dapat melihat bagaimana perubahan `Health`, `Damage`, atau `Speed` memengaruhi perilaku NPC dan keputusan pemain.

Sebelum lanjut, hal penting yang harus dipahami adalah bahwa DDA memiliki banyak titik adaptasi. Namun, dalam implementasi awal, lebih baik memilih satu kelompok yang jelas, yaitu musuh, agar efek adaptasi mudah diukur dan dijelaskan.

### Inti yang Harus Ditekankan

- DDA dapat mengadaptasi **Enemy**, **Spawner**, **Resource**, dan **Level**.
- Adaptasi pada musuh paling langsung memengaruhi perilaku NPC dan pengalaman pertempuran.
- Untuk praktikum, fokus pada musuh karena lebih mudah diimplementasikan, diamati, dan dianalisis.

### Transisi ke Slide Berikutnya

Setelah memahami elemen apa saja yang dapat diadaptasi, langkah berikutnya adalah melihat bagaimana nilai-nilai tersebut diubah secara konkret melalui parameter adaptation.

---

## Slide 031 - Parameter Adaptation

### Narasi

**Parameter adaptation** adalah bentuk adaptasi DDA yang paling langsung: sistem mengubah nilai numerik pada objek atau aturan game.

```text
Enemy Health       100 → 120
Enemy Damage        10 → 12
Enemy Speed          3 → 3.5
Spawn Interval       5 → 4
Health Drop Chance 10% → 15%
```

Dalam contoh ini, nilai parameter berubah dari satu kondisi ke kondisi lain. Misalnya, `Enemy Health` dari `100` menjadi `120` membuat musuh lebih tahan lama. `Enemy Damage` dari `10` menjadi `12` membuat serangan musuh lebih berbahaya. `Enemy Speed` dari `3` menjadi `3.5` membuat musuh lebih cepat mengejar atau menghindar.

Perubahan parameter seperti ini mudah dipahami karena dampaknya terlihat pada perilaku NPC. Jika `Spawn Interval` turun dari `5` menjadi `4`, pemain akan merasakan tekanan lebih besar karena musuh muncul lebih sering. Jika `Health Drop Chance` naik dari `10%` menjadi `15%`, pemain mendapat peluang pemulihan lebih tinggi, sehingga tekanan bisa dikurangi.

Keunggulan utama parameter adaptation adalah **mudah diimplementasikan**. Dalam Unity, nilai seperti `maxHealth`, `damage`, atau `moveSpeed` biasanya sudah tersedia sebagai variabel di komponen enemy. Sistem DDA cukup membaca kondisi pemain, lalu mengubah nilai tersebut pada runtime.

Keunggulan lain adalah **mudah diamati**. Dosen, mahasiswa, dan pengembang dapat melihat perubahan nilai secara langsung, misalnya melalui log, inspector, atau debug UI. Hal ini penting untuk praktikum karena mahasiswa dapat memverifikasi apakah adaptasi benar-benar terjadi dan apakah dampaknya sesuai tujuan.

Sebelum lanjut, mahasiswa perlu memahami bahwa parameter adaptation tidak selalu berarti membuat game lebih sulit. Arah perubahan bisa menaikkan atau menurunkan nilai, tergantung kondisi pemain dan target pengalaman yang diinginkan.

### Inti yang Harus Ditekankan

- **Parameter adaptation** mengubah nilai numerik game, bukan mengganti seluruh perilaku NPC.
- Dampaknya terlihat pada pengalaman pemain, seperti musuh lebih kuat, lebih cepat, lebih sering muncul, atau lebih mudah dikalahkan.
- Bentuk ini cocok untuk DDA karena mudah diimplementasikan, mudah diuji, dan mudah diamati.

### Transisi ke Slide Berikutnya

Setelah memahami bahwa parameter dapat diubah secara langsung, kita akan melihat parameter enemy mana saja yang paling relevan untuk diadaptasi.

---

## Slide 032 - Enemy Parameter yang Dapat Diadaptasi

### Narasi

Slide ini memperdalam **parameter adaptation** pada satu objek yang paling mudah dirasakan mahasiswa: **enemy**. Pada slide sebelumnya, kita sudah melihat bahwa DDA dapat dilakukan dengan mengubah nilai parameter game. Di sini, fokusnya adalah parameter yang dimiliki musuh, karena perubahan pada nilai ini langsung memengaruhi tantangan, ritme pertempuran, dan perilaku NPC.

Parameter enemy yang dapat diadaptasi dapat ditulis sebagai berikut:

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

Setiap parameter memiliki peran berbeda:

- `maxHealth` dan `damage` menentukan seberapa lama musuh bertahan dan seberapa besar ancaman yang diberikan.
- `moveSpeed` memengaruhi kemampuan musuh mengejar atau menghindar, terutama jika musuh menggunakan steering atau pathfinding.
- `attackCooldown` mengatur jarak waktu antar serangan, sehingga musuh tidak menyerang secara terus-menerus.
- `detectionRange` menentukan seberapa jauh musuh dapat mengenali player.
- `accuracy` memengaruhi peluang serangan musuh mengenai target.
- `aggression` biasanya digunakan sebagai bobol keputusan: musuh dengan `aggression` tinggi cenderung memilih state `chase` atau `attack` lebih sering.
- `reactionDelay` memberi jeda sebelum musuh merespons stimulus, sehingga perilaku musuh terasa lebih natural dan tidak instan.

Contoh adaptasi parameter enemy dapat dilihat pada potongan berikut:

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

Secara konseptual, alur adaptasinya sederhana. Sistem DDA membaca kondisi player, misalnya player terlalu kuat atau player kesulitan. Setelah itu, sistem memilih parameter enemy yang akan diubah. Nilai baru kemudian dibaca oleh controller musuh, misalnya FSM, behavior tree, atau steering behavior. Dengan cara ini, struktur logika musuh tidak perlu diubah; yang berubah adalah nilai yang memengaruhi keputusan dan eksekusi perilaku.

Urutan eksekusi yang perlu dipahami mahasiswa adalah sebagai berikut:

1. Sistem DDA menilai performa player.
2. Sistem menentukan kondisi: player terlalu kuat atau player kesulitan.
3. Sistem menyesuaikan parameter enemy, seperti `damage`, `moveSpeed`, dan `attackCooldown`.
4. Enemy menggunakan nilai baru pada update berikutnya.
5. Perilaku musuh berubah secara bertahap, misalnya lebih agresif atau lebih lemah.

Poin penting yang harus dipahami adalah bahwa parameter enemy adalah **adaptasi mikro**. Perubahan ini langsung terlihat dalam gameplay, mudah diuji, dan mudah diamati. Namun, perubahan tidak boleh terlalu ekstrem. Jika `damage` naik terlalu cepat, player bisa merasa permainan menjadi tidak adil. Jika `moveSpeed` turun terlalu banyak, musuh bisa terasa tidak hidup. Karena itu, nilai parameter perlu dibatasi pada rentang yang wajar.

Sebelum lanjut, mahasiswa perlu membedakan parameter enemy dengan parameter spawner. Parameter enemy mengatur kekuatan dan perilaku musuh yang sudah ada di dunia game. Parameter spawner, yang akan dibahas berikutnya, mengatur bagaimana musuh muncul, berapa jumlahnya, dan seberapa sering gelombang baru terjadi.

### Inti yang Harus Ditekankan

- **Parameter enemy** memengaruhi kekuatan, persepsi, dan perilaku musuh secara langsung.
- DDA pada enemy dilakukan dengan mengubah nilai seperti `damage`, `moveSpeed`, `attackCooldown`, `detectionRange`, `accuracy`, `aggression`, dan `reactionDelay`.
- Perubahan parameter harus terkontrol agar gameplay tetap menantang, adil, dan mudah diamati.

### Transisi ke Slide Berikutnya

Setelah memahami parameter musuh yang dapat diadaptasi, kita akan memperluas pembahasan ke parameter spawner, yaitu nilai yang mengatur jumlah musuh, interval spawn, dan komposisi gelombang.

---

## Slide 033 - Spawn Parameter yang Dapat Diadaptasi

### Narasi

Slide ini membahas **spawn parameter** sebagai salah satu lapisan **Dynamic Difficulty Adjustment** yang paling mudah diamati. Jika parameter enemy mengatur kekuatan individu, parameter spawner mengatur **tekanan populasi**: berapa banyak musuh yang muncul, kapan muncul, dan jenis apa yang muncul.

Parameter spawner yang dibahas adalah:

```text
enemyCount
spawnInterval
maxEnemiesAlive
enemyTypeWeight
waveSize
eliteSpawnChance
```

Secara intuitif, spawner adalah “gerbang” yang mengatur jumlah NPC di scene. Dengan mengubah parameter ini, game dapat terasa lebih sulit atau lebih ringan tanpa harus mengubah seluruh perilaku musuh satu per satu.

- `enemyCount` menentukan total musuh yang direncanakan untuk satu fase atau wave.
- `spawnInterval` mengatur jarak waktu antar spawn, sehingga memengaruhi tempo permainan.
- `maxEnemiesAlive` membatasi jumlah musuh yang aktif bersamaan, penting untuk keseimbangan dan performa.
- `enemyTypeWeight` mengatur peluang munculnya tipe musuh tertentu.
- `waveSize` menentukan jumlah musuh dalam satu gelombang.
- `eliteSpawnChance` mengatur peluang munculnya musuh varian elite yang biasanya lebih kuat.

Contoh penyesuaian yang dapat dijelaskan ke mahasiswa:

```text
Player sangat baik:
    spawnInterval lebih kecil
    eliteSpawnChance naik

Player kesulitan:
    waveSize turun
    enemyCount turun
```

Artinya, jika pemain bermain sangat baik, spawner dapat mempercepat spawn dan meningkatkan peluang musuh elite agar tantangan tetap terasa. Sebaliknya, jika pemain kesulitan, spawner dapat mengurangi jumlah musuh per wave dan total musuh yang muncul.

Urutan praktisnya dapat dipahami sebagai berikut:

1. Spawner mengamati kondisi pemain, misalnya terlalu kuat atau terlalu kesulitan.
2. Nilai parameter spawn disesuaikan.
3. Sistem spawn menjalankan timer atau wave.
4. Musuh yang muncul memengaruhi tekanan dan ritme permainan.

Dalam konteks Unity, spawner sangat cocok untuk praktikum karena biasanya sudah berupa komponen yang menjalankan timer, memilih prefab musuh, dan mengaktifkan instance. Mahasiswa dapat melihat langsung bagaimana perubahan nilai parameter memengaruhi scene: musuh muncul lebih cepat, lebih banyak, lebih jarang, atau lebih kuat.

Hal penting yang harus dipahami sebelum lanjut adalah bahwa adaptasi spawn bersifat **makro**. Ia mengubah kondisi lingkungan dan populasi musuh, bukan detail perilaku individual seperti `moveSpeed` atau `attackCooldown`. Karena itu, efeknya lebih terlihat pada ritme permainan dan tekanan yang dirasakan pemain.

### Inti yang Harus Ditekankan

- **Spawn parameter** mengatur tekanan permainan melalui jumlah, tempo, dan variasi musuh yang muncul.
- `spawnInterval`, `waveSize`, dan `enemyCount` memengaruhi seberapa sering dan seberapa banyak pemain menghadapi musuh.
- `maxEnemiesAlive` menjaga keseimbangan antara tantangan, fairness, dan performa game.
- `enemyTypeWeight` dan `eliteSpawnChance` memberi variasi tantangan tanpa mengubah seluruh parameter musuh.
- Spawner adalah titik adaptasi yang sangat visual dan mudah dipraktikkan di Unity.

### Transisi ke Slide Berikutnya

Setelah memahami bagaimana spawner mengatur jumlah dan jenis musuh, langkah berikutnya adalah melihat parameter resource, yaitu elemen yang dapat disesuaikan secara lebih halus untuk membantu atau menantang pemain.

---

## Slide 034 - Resource Parameter yang Dapat Diadaptasi

### Narasi

Pada slide ini, kita melihat **resource parameter** sebagai salah satu parameter yang dapat diadaptasi dalam **Dynamic Difficulty Adjustment**. Setelah parameter spawn, resource menjadi lapisan yang lebih halus karena tidak langsung menambah atau mengurangi ancaman, tetapi mengatur seberapa besar dukungan yang diterima pemain.

Parameter resource yang umum adalah:

```text
healthDropChance
ammoDropChance
powerUpChance
healingAmount
resourceSpawnInterval
```

Setiap parameter ini memengaruhi kemampuan bertahan pemain:

- `healthDropChance` menentukan peluang item kesehatan muncul.
- `ammoDropChance` memengaruhi ketersediaan amunisi.
- `powerUpChance` mengatur peluang item kekuatan sementara.
- `healingAmount` menentukan seberapa besar pemulihan yang diberikan.
- `resourceSpawnInterval` mengatur seberapa sering resource muncul.

Intuisi praktisnya sederhana: jika pemain sering berada dalam kondisi lemah, sistem dapat meningkatkan dukungan. Sebaliknya, jika pemain terlalu dominan, dukungan dapat dikurangi agar tantangan tetap terasa.

Contoh pada slide menunjukkan dua arah adaptasi:

```text
Player sering low health:
    healthDropChance naik
```

```text
Player dominan:
    healthDropChance turun
```

Artinya, DDA tidak selalu harus mengubah musuh. Sistem bisa menyesuaikan **resource** agar pemain tetap punya kesempatan bertahan atau agar kemenangan tidak terlalu mudah.

Pendekatan ini penting karena resource adaptation sering lebih halus daripada langsung mengubah enemy. Pemain tetap merasa mengendalikan permainan, tetapi lingkungan memberikan sinyal keseimbangan yang lebih natural. Dalam praktikum Unity, parameter ini dapat dihubungkan dengan spawner resource dan kondisi pemain, seperti health, score, atau waktu bertahan.

Sebelum lanjut, mahasiswa perlu memahami bahwa resource parameter adalah **alat penyesuaian dukungan**, bukan pengganti desain level. Parameter ini bekerja paling baik ketika ada metrik pemain yang jelas dan perubahan yang tidak terlalu drastis.

### Inti yang Harus Ditekankan

- **Resource parameter** mengatur dukungan pemain melalui item seperti health, ammo, dan power-up.
- `healthDropChance`, `ammoDropChance`, `powerUpChance`, `healingAmount`, dan `resourceSpawnInterval` dapat disesuaikan berdasarkan kondisi pemain.
- Adaptasi resource biasanya lebih halus daripada mengubah enemy secara langsung.
- Tujuannya menjaga pemain tetap terlibat: tidak terlalu tertinggal, tetapi juga tidak terlalu dominan.

### Transisi ke Slide Berikutnya

Setelah resource dapat disesuaikan, kita akan melihat teknik yang lebih spesifik untuk menjaga jarak kompetitif, yaitu **rubber banding**, terutama pada game seperti racing.

---

## Slide 035 - Rubber Banding

### Narasi

**Rubber banding** adalah teknik dalam **Dynamic Difficulty Adjustment** yang menyesuaikan tingkat kesulitan secara dinamis ketika pemain mulai tertinggal. Intuisi praktisnya sederhana: jika jarak antara pemain dan lawan menjadi terlalu besar, sistem memberi sedikit “bantalan” agar pertandingan tidak kehilangan ketegangan.

Dalam konteks game, teknik ini paling sering dikaitkan dengan **racing game**. Bayangkan pemain berada jauh di belakang lawan. Jika tidak ada penyesuaian, pemain mungkin merasa tidak ada lagi peluang untuk mengejar, sehingga pengalaman bermain menjadi datar. **Rubber banding** hadir untuk menjaga agar kompetisi tetap terasa hidup.

Contoh alurnya dapat digambarkan seperti ini:

```text
Player tertinggal jauh
    ↓
mobil player mendapat sedikit boost
atau AI lawan sedikit melambat
```

Contoh tersebut menunjukkan dua arah penyesuaian:

- memberi `boost` kecil kepada mobil pemain,
- membuat `AI lawan` sedikit mengurangi kecepatan.

Kedua pendekatan ini bertujuan sama: memperkecil `gap` performa tanpa mengubah seluruh aturan game secara drastis.

Dari sisi **AI untuk game**, rubber banding dapat dilihat sebagai bentuk **decision making** sederhana. Sistem memantau kondisi pemain, misalnya jarak dari lawan atau posisi di balapan, lalu memilih respons yang sesuai. Respons ini tidak harus selalu sama; ia dapat berupa bantuan kecil pada pemain atau penyesuaian perilaku NPC lawan.

Yang perlu dipahami mahasiswa adalah bahwa rubber banding bukan berarti membuat pemain menang secara instan. Fungsinya adalah menjaga pertandingan tetap **kompetitif**, mencegah jarak yang terlalu besar, dan mempertahankan **ketegangan** hingga akhir. Jika penyesuaian terlalu kuat, pemain dapat merasa hasil akhir tidak wajar; jika terlalu lemah, tujuan DDA tidak tercapai.

### Inti yang Harus Ditekankan

- **Rubber banding** adalah teknik DDA yang membantu pemain yang tertinggal agar masih memiliki peluang mengejar.
- Teknik ini sering digunakan pada **racing game**, misalnya dengan memberi `boost` kecil atau membuat `AI lawan` sedikit melambat.
- Tujuannya menjaga pertandingan tetap **kompetitif**, mencegah `gap` terlalu besar, dan mempertahankan **ketegangan**.

### Transisi ke Slide Berikutnya

Setelah memahami bentuk dasar rubber banding pada racing, kita akan melihat bagaimana teknik yang sama dapat diterapkan pada genre lain, seperti action, wave survival, dan tactical game.

---

## Slide 036 - Rubber Banding dalam Genre Lain

### Narasi

Slide ini memperluas konsep **rubber banding** dari contoh racing ke genre lain. Intinya tetap sama: sistem membaca kondisi pemain, lalu melakukan penyesuaian kecil pada perilaku AI atau parameter dunia agar permainan tetap seimbang dan tidak terasa putus.

Perbedaannya ada pada parameter yang boleh disesuaikan:

- **Action game**: agresivitas musuh dan peluang item.
- **Wave survival**: intensitas wave berikutnya.
- **Tactical game**: waktu atau jumlah penguatan musuh.

Contoh pada **action game**:

```text
Player hampir mati
    ↓
enemy sedikit mengurangi agresivitas
health item lebih mungkin muncul
```

Dalam implementasi, perubahan ini biasanya tidak membuat musuh tiba-tiba berhenti menyerang. Yang lebih wajar adalah menurunkan parameter seperti `aggressionLevel`, `attackPriority`, atau `damageMultiplier`, serta menaikkan `healthItemSpawnChance`. Dengan begitu, pemain masih merasakan tekanan, tetapi mendapat ruang untuk bertahan.

Contoh pada **wave survival**:

```text
Player tertinggal performa
    ↓
wave berikutnya sedikit lebih ringan
```

Di sini, sistem dapat menyesuaikan parameter wave, misalnya `enemyCount`, `enemyHealth`, `spawnInterval`, atau `eliteChance`. Penyesuaian ini penting karena wave survival sangat bergantung pada ritme. Jika wave terlalu berat setelah pemain kesulitan, pemain bisa keluar dari loop permainan.

Contoh pada **tactical game**:

```text
Player kehilangan banyak unit
    ↓
enemy reinforcement ditunda
```

Pada game taktis, rubber banding sering berupa penundaan `reinforcementTimer` atau pengurangan `reinforcementSize`. Ini memberi pemain kesempatan membangun kembali formasi tanpa membuat musuh terlihat lemah secara tiba-tiba.

Hal yang harus dipahami mahasiswa adalah bahwa rubber banding lintas genre tetap harus **halus**. Perubahan harus terasa seperti bagian dari desain, bukan seperti sistem yang sengaja menolong atau menghukum. Karena itu, penyesuaian biasanya dilakukan pada parameter yang kecil, bertahap, dan konsisten dengan konteks permainan.

### Inti yang Harus Ditekankan

- **Rubber banding** bukan hanya teknik racing; ia dapat diterapkan pada action, wave survival, dan tactical game.
- Implementasinya biasanya berupa penyesuaian parameter AI atau dunia, seperti `aggressionLevel`, `healthItemSpawnChance`, `enemyCount`, dan `reinforcementTimer`.
- Perubahan harus **halus** dan tidak terasa seperti manipulasi hasil, agar pemain tetap percaya pada tantangan permainan.

### Transisi ke Slide Berikutnya

Setelah melihat bentuk rubber banding di berbagai genre, kita perlu memahami batasannya: kapan penyesuaian ini bisa terasa tidak adil dan bagaimana risiko tersebut muncul.

---

## Slide 037 - Risiko Rubber Banding

### Narasi

**Rubber banding** adalah bentuk **Dynamic Difficulty Adjustment** yang bertujuan menjaga tantangan tetap relevan dengan kemampuan pemain. Namun, teknik ini memiliki risiko utama: jika penyesuaian terlalu mudah dibaca, pemain dapat merasa permainan tidak lagi adil.

Masalahnya bukan pada penyesuaian itu sendiri, melainkan pada **persepsi sebab-akibat**. Jika pemain sedang tertinggal lalu musuh tiba-tiba menjadi sangat lemah, pemain dapat menyimpulkan bahwa kemenangan bukan berasal dari strategi, melainkan dari campur tangan sistem.

Contoh buruk yang perlu dihindari:

- musuh tiba-tiba sangat lemah tanpa alasan yang masuk akal,
- pemain yang sedang unggul merasa “dihukum” karena permainan menurunkan tantangannya,
- kemenangan terasa tidak natural,
- pemain merasa hasil permainan dimanipulasi.

Untuk mengurangi risiko tersebut, perubahan harus dibuat **kecil**, **terbatas**, dan **memiliki alasan dalam dunia permainan**. Dalam implementasi, parameter seperti `aggression`, `accuracy`, `spawn_rate`, atau `reinforcement_delay` sebaiknya tidak diubah secara ekstrem.

Beberapa prinsip penting:

- lakukan perubahan kecil, misalnya menurunkan `accuracy` sedikit atau menunda `reinforcement` sebentar,
- gunakan batas minimum dan maksimum agar perilaku NPC tidak keluar dari karakter,
- beri alasan diegetic, misalnya musuh sedang menunggu dukungan atau pemain berhasil merusak jalur pasokan,
- jangan ubah parameter terlalu sering,
- jangan merusak **skill expression**, karena pemain tetap harus bisa menunjukkan kemampuan melalui keputusan dan eksekusi.

Intuisi praktisnya adalah: penyesuaian yang baik terasa seperti **perubahan situasi**, bukan seperti **tombol rahasia** yang mengubah hasil.

### Inti yang Harus Ditekankan

- **Rubber banding** harus menjaga keseimbangan, tetapi tidak boleh terasa seperti manipulasi.
- Perubahan yang terlalu besar, terlalu sering, atau tanpa alasan akan merusak rasa adil.
- Gunakan parameter yang dibatasi, alasan diegetic, dan jaga agar **skill expression** pemain tetap bermakna.

### Transisi ke Slide Berikutnya

Setelah memahami risikonya, langkah berikutnya adalah melihat bagaimana adaptasi dapat ditampilkan kepada pemain atau justru dilakukan di belakang layar.

---

## Slide 038 - Visible vs Invisible Adaptation

### Narasi

Dalam **Dynamic Difficulty Adjustment** atau **DDA**, perubahan kesulitan tidak selalu harus disampaikan dengan cara yang sama. Ada dua pendekatan utama yang perlu dipahami mahasiswa: **visible adaptation** dan **invisible adaptation**. Perbedaan ini penting karena menentukan bagaimana player merasakan keadilan, tantangan, dan kontrol atas hasil permainan.

**Visible adaptation** adalah adaptasi yang dapat dilihat langsung oleh player. Perubahan ini biasanya muncul sebagai elemen gameplay yang jelas, misalnya musuh baru, gelombang berikutnya, atau bantuan dari sistem.

```text
Wave 3: enemy elite muncul
```

atau:

```text
Game memberi hint
```

Kelebihan visible adaptation adalah **transparansi**. Player tahu bahwa tantangan berubah, sehingga mereka dapat menyesuaikan strategi. Dalam desain game, hal ini membantu menjaga **skill expression** karena player merasa menang atau kalah berdasarkan keputusan yang mereka ambil, bukan karena perubahan yang tersembunyi.

**Invisible adaptation** adalah adaptasi yang terjadi di belakang layar. Player tidak melihat angka difficulty berubah secara eksplisit, tetapi perilaku NPC atau peluang gameplay dapat sedikit disesuaikan.

```text
Enemy reaction delay sedikit naik
Health drop chance sedikit berubah
```

Dalam implementasi, hal ini dapat berupa penyesuaian parameter seperti `reactionDelay`, `accuracy`, `aggression`, atau `healthDropChance`. Perubahan ini harus **kecil**, **terbatas**, dan **tidak terlalu sering** agar tidak terasa seperti manipulasi.

Perbedaan konseptualnya sederhana: visible adaptation memberi **alasan yang terlihat**, sedangkan invisible adaptation memberi **penyesuaian yang halus**. Visible adaptation cocok untuk perubahan besar yang ingin dipahami player, misalnya fase baru atau musuh elite. Invisible adaptation cocok untuk meratakan pengalaman saat player terlalu cepat atau terlalu kesulitan, tanpa membuat player merasa dihukum.

Namun, invisible adaptation memiliki risiko lebih tinggi. Jika perubahan terlalu besar, player dapat merasakan bahwa game "membantu" atau "menghukum" tanpa alasan yang jelas. Oleh karena itu, sistem harus menjaga batas minimum dan maksimum, serta memastikan bahwa kemampuan player tetap menjadi faktor utama. Mahasiswa perlu memahami bahwa DDA bukan hanya mengubah angka, tetapi juga menjaga rasa adil dan natural dalam gameplay.

### Inti yang Harus Ditekankan

- **Visible adaptation** membuat perubahan kesulitan terlihat dan mudah dipahami player.
- **Invisible adaptation** menyesuaikan parameter di belakang layar, seperti `reactionDelay` atau `healthDropChance`, dengan perubahan kecil.
- Kedua pendekatan harus menjaga **fairness**, **skill expression**, dan batas perubahan agar tidak terasa curang.

### Transisi ke Slide Berikutnya

Setelah memahami apakah adaptasi terlihat atau tersembunyi, langkah berikutnya adalah memberi alasan yang lebih natural di dalam dunia game. Pada slide berikutnya, kita akan membahas **diegetic adaptation**, yaitu adaptasi yang memiliki penjelasan gameplay sehingga perubahan kesulitan terasa lebih masuk akal.

---

## Slide 039 - Diegetic Adaptation

### Narasi

**Diegetic adaptation** adalah bentuk adaptasi kesulitan yang tidak hanya mengubah parameter di belakang layar, tetapi juga memiliki alasan yang bisa dilihat atau dirasakan pemain di dalam dunia game. Kata *diegetic* di sini berarti perubahan tersebut hadir sebagai bagian dari cerita, lingkungan, atau aturan gameplay, bukan sekadar angka `difficulty` yang naik atau turun tanpa konteks.

Intuisi praktisnya sederhana: pemain lebih mudah menerima perubahan tantangan jika perubahan itu terasa seperti konsekuensi dari apa yang terjadi di dalam game. Misalnya, jika pemain terlihat terlalu kuat, sistem tidak perlu langsung menaikkan `enemy_damage` secara diam-diam. Sistem bisa memicu peristiwa dalam dunia game, seperti:

```text
Jika player terlalu kuat:
    enemy commander memanggil elite squad
```

Peristiwa ini memberi alasan naratif dan mekanis: musuh bereaksi terhadap ancaman. Dari sisi perilaku NPC, `enemy_commander` mengambil keputusan untuk memanggil `elite_squad`, sehingga perubahan kesulitan terasa seperti respons dunia, bukan campur tangan luar.

Contoh lain:

```text
Jika player sering low health:
    supply drone menjatuhkan medkit
```

Di sini, adaptasi membantu pemain yang kesulitan, tetapi tetap dibungkus alasan gameplay: ada `supply drone` yang memberikan `medkit`. Pemain tidak merasa kesulitan tiba-tiba dikurangi oleh angka tersembunyi; ia melihat objek atau peristiwa yang masuk akal dalam dunia game.

Perbedaan utamanya dengan adaptasi yang hanya mengubah nilai internal adalah **konteks**. Tanpa konteks, perubahan bisa terasa tiba-tiba, curang, atau tidak konsisten. Dengan diegetic adaptation, perubahan memiliki sebab-akibat yang bisa dipahami pemain, sehingga pengalaman bermain tetap terasa adil dan imersif.

Sebelum lanjut, hal penting yang harus dipahami mahasiswa adalah: **DDA yang baik tidak selalu berarti mengubah parameter secara langsung**. Kadang yang lebih penting adalah memilih *peristiwa dalam dunia game* yang menjadi alasan perubahan tersebut. Dengan cara ini, adaptasi tetap mendukung keseimbangan permainan, tetapi tidak merusak kepercayaan pemain terhadap aturan dunia game.

### Inti yang Harus Ditekankan

- **Diegetic adaptation** adalah adaptasi yang memiliki alasan di dalam dunia game, bukan hanya perubahan parameter tersembunyi.
- Contoh `enemy commander memanggil elite squad` membuat peningkatan tantangan terasa seperti respons NPC terhadap ancaman.
- Contoh `supply drone menjatuhkan medkit` membuat bantuan bagi pemain yang kesulitan tetap terasa natural dan masuk akal.
- Konteks gameplay penting agar adaptasi tidak terasa curang, tiba-tiba, atau merusak imersi.
- Dari sisi implementasi, diegetic adaptation biasanya berupa kondisi yang memicu peristiwa atau aksi NPC, bukan sekadar mengubah `difficulty` tanpa penjelasan.

### Transisi ke Slide Berikutnya

Setelah memahami bahwa adaptasi perlu dibungkus alasan dalam dunia game, langkah berikutnya adalah memastikan perubahan tersebut tidak terjadi terlalu cepat atau terlalu reaktif. Kita akan masuk ke **smoothing dalam DDA**, yaitu cara menjaga agar penyesuaian kesulitan tetap stabil dan terasa natural.

---

## Slide 040 - Smoothing dalam DDA

### Narasi

Pada slide sebelumnya, kita melihat bahwa adaptasi difficulty sebaiknya memiliki alasan yang masuk akal di dalam dunia game. Namun, alasan yang masuk akal saja belum cukup. **Dynamic Difficulty Adjustment** atau **DDA** juga harus dikendalikan agar tidak berubah terlalu cepat. Intuisi praktisnya sederhana: game tidak boleh terasa seperti langsung menghukum atau langsung menolong player hanya karena satu kejadian singkat.

Masalah utama muncul ketika sistem terlalu reaktif terhadap sinyal sesaat. Misalnya:

```text
Player terkena damage sekali
    ↓
difficulty langsung turun
```

Jika satu kali `damage` sudah langsung menurunkan `difficulty`, player bisa merasa game tidak konsisten. Satu momen sulit tidak selalu berarti player sedang gagal secara keseluruhan.

Oleh karena itu, DDA perlu **smoothing**, yaitu proses menghaluskan perubahan difficulty berdasarkan beberapa sinyal, bukan satu kejadian. Tujuannya adalah membuat `difficulty` lebih stabil, perubahan terasa natural, dan sistem tidak terus-menerus naik-turun.

Beberapa teknik smoothing yang umum digunakan adalah:

- **Moving average**: nilai difficulty tidak dihitung dari satu data terakhir, tetapi dari rata-rata beberapa data sebelumnya.
- **Evaluation window**: performa player dinilai dalam rentang waktu tertentu, bukan setiap frame.
- **Cooldown adjustment**: setelah difficulty berubah, sistem menunggu sebelum melakukan perubahan berikutnya.
- **Minimum interval**: ada jarak waktu minimum antara dua penyesuaian difficulty.
- **Tolerance range**: difficulty hanya diubah jika performa player keluar dari batas toleransi tertentu.

Dalam implementasi game, alurnya bisa dipahami seperti ini: sistem membaca sinyal player, misalnya `health`, `damage taken`, `kills`, atau `time to clear`. Sinyal tersebut tidak langsung mengubah `difficulty`. Sinyal itu dulu dirata-ratakan atau difilter, lalu dibandingkan dengan batas toleransi. Jika memang perlu berubah, perubahan dilakukan secara bertahap dan dibatasi oleh `cooldown` atau `minimum interval`.

Hal penting yang harus dipahami mahasiswa adalah perbedaan antara **sinyal mentah** dan **sinyal yang sudah dihaluskan**. Sinyal mentah bisa berupa satu kejadian, misalnya player terkena `damage`. Sinyal yang dihaluskan adalah gambaran performa yang lebih stabil, misalnya player terus-menerus berada di bawah batas `health` dalam beberapa waktu. DDA yang baik menggunakan sinyal yang dihaluskan, bukan reaksi instan.

Dengan smoothing, sistem DDA menjadi lebih mirip pengendalian yang stabil. Jika player kesulitan, difficulty bisa turun secara wajar. Jika player kembali kuat, difficulty bisa naik kembali, tetapi tidak secara mendadak. Ini membantu menghindari **oscillation**, yaitu kondisi di mana difficulty naik-turun terlalu cepat dan membuat pengalaman bermain terasa tidak adil.

### Inti yang Harus Ditekankan

- DDA tidak boleh berubah terlalu cepat karena satu kejadian sesaat.
- Smoothing membuat `difficulty` stabil, natural, dan tidak mudah berosilasi.
- Teknik utamanya meliputi **moving average**, **evaluation window**, **cooldown adjustment**, **minimum interval**, dan **tolerance range**.
- Sistem sebaiknya menilai performa player secara agregat, bukan hanya dari satu `damage` atau satu frame.

### Transisi ke Slide Berikutnya

Setelah memahami bahwa DDA perlu dihaluskan, langkah berikutnya adalah menentukan dalam rentang waktu berapa lama performa player dievaluasi. Rentang waktu itulah yang disebut **evaluation window**.

---

## Slide 041 - Evaluation Window

### Narasi

Pada slide ini kita masuk ke salah satu mekanisme penting dalam **Dynamic Difficulty Adjustment**, yaitu **Evaluation Window**. Intinya, sistem DDA sebaiknya tidak menilai performa pemain secara instan, tetapi dalam **rentang waktu tertentu**. Dengan cara ini, keputusan perubahan difficulty didasarkan pada pola perilaku pemain, bukan hanya satu kejadian sesaat.

Secara intuitif, bayangkan pemain menerima damage sekali karena kesalahan kecil. Jika sistem langsung menurunkan difficulty, responsnya akan terlalu cepat dan tidak representatif. Sebaliknya, jika kita mengamati performa pemain selama beberapa detik atau beberapa menit, kita bisa melihat apakah pemain memang sedang kesulitan, atau hanya mengalami satu momen buruk.

Contoh penerapan **evaluation window** bisa berupa:

- evaluasi setiap **30 detik**,
- evaluasi setiap **akhir wave**,
- evaluasi setiap **selesai room**,
- evaluasi setiap **checkpoint** tertentu.

Yang penting, evaluasi tidak dilakukan **setiap frame**. Jika dilakukan setiap frame, sistem akan terlalu sensitif terhadap perubahan kecil dan sulit menghasilkan difficulty yang stabil.

Dalam satu window, sistem biasanya mengumpulkan beberapa metrik performa pemain, misalnya:

```text
Window:
damage taken selama 30 detik
kills selama 30 detik
health rata-rata selama 30 detik
```

Metrik-metrik ini kemudian menjadi bahan pertimbangan untuk menentukan apakah difficulty perlu dinaikkan, diturunkan, atau dipertahankan. Misalnya, jika `damage taken` tinggi dan `health rata-rata` menurun selama window, sistem dapat menyimpulkan bahwa pemain sedang kesulitan. Sebaliknya, jika pemain banyak melakukan `kills` dan healthnya stabil, difficulty dapat ditingkatkan secara bertahap.

**Evaluation window** membuat sistem DDA lebih stabil karena data yang digunakan sudah mewakili periode tertentu. Ini juga membantu menghindari perubahan difficulty yang terlalu cepat, sehingga pengalaman bermain terasa lebih natural. Dalam konteks game AI, window ini bisa memengaruhi perilaku NPC, misalnya tingkat agresivitas musuh, jumlah spawn, atau reward yang diberikan, tetapi penyesuaiannya dilakukan berdasarkan performa pemain dalam satu periode, bukan reaksi langsung terhadap satu event.

Hal yang perlu dipahami mahasiswa sebelum lanjut adalah bahwa **evaluation window** menentukan **kapan** dan **dalam rentang berapa lama** data performa dikumpulkan. Window yang terlalu pendek membuat sistem terlalu reaktif, sedangkan window yang terlalu panjang membuat sistem lambat menyesuaikan diri.

### Inti yang Harus Ditekankan

- **Evaluation window** adalah rentang waktu untuk mengevaluasi performa pemain dalam DDA.
- Evaluasi sebaiknya dilakukan per interval, misalnya 30 detik, akhir wave, atau selesai room, bukan setiap frame.
- Window mengumpulkan data seperti `damage taken`, `kills`, dan `health rata-rata`.
- Tujuannya membuat difficulty lebih stabil, natural, dan tidak terlalu reaktif terhadap satu kejadian.

### Transisi ke Slide Berikutnya

Setelah kita tahu data performa dikumpulkan dalam satu window, langkah berikutnya adalah bagaimana meratakan data tersebut agar satu nilai ekstrem tidak langsung mengubah difficulty secara besar.

---

## Slide 042 - Moving Average

### Narasi

Setelah performa pemain dievaluasi dalam **evaluation window**, sistem DDA biasanya mendapatkan beberapa nilai metrik. Nilai tersebut bisa berupa `healthScore`, `damage taken`, `kills`, atau metrik lain yang sudah dirangkum per interval.

Masalahnya, satu sampel saja sering kali terlalu sensitif. Jika pemain terkena serangan besar sekali, nilai metrik bisa turun tajam. Jika sistem langsung mengubah difficulty berdasarkan satu nilai itu, pengalaman bermain bisa terasa melompat dan tidak wajar.

**Moving average** digunakan untuk meratakan sinyal tersebut. Ia menghitung rata-rata dari beberapa data terakhir, bukan hanya nilai terbaru.

```text
healthScore tiap 10 detik:
0.8, 0.7, 0.6, 0.4

moving average = 0.625
```

Pada contoh ini, sistem tidak hanya melihat nilai terakhir `0.4`. Sistem melihat tren dari empat sampel terakhir. Rata-ratanya adalah `(0.8 + 0.7 + 0.6 + 0.4) / 4 = 0.625`. Nilai ini lebih mewakili kondisi pemain dalam beberapa interval terakhir.

Intuisi praktisnya sederhana:

- `moving average` membuat sinyal performa lebih halus.
- Satu kejadian ekstrem tidak langsung mengubah difficulty secara besar.
- Sistem dapat membedakan antara penurunan sesaat dan penurunan yang konsisten.

Dalam konteks DDA, `moving average` berperan sebagai **smoothing** sebelum keputusan penyesuaian difficulty dibuat. Misalnya, jika `healthScore` turun karena satu hit besar, nilai rata-rata masih bisa menunjukkan bahwa pemain secara umum masih mampu. Sebaliknya, jika beberapa sampel terakhir terus menurun, rata-rata akan bergerak turun dan memberi sinyal yang lebih kuat untuk menurunkan difficulty.

Penting untuk dipahami bahwa `moving average` bukan pengganti evaluasi performa. Ia bekerja setelah data performa sudah dikumpulkan dalam window tertentu. Window menentukan kapan data diambil, sedangkan `moving average` menentukan bagaimana beberapa data tersebut dirangkum menjadi sinyal yang lebih stabil.

Panjang window atau jumlah sampel juga memengaruhi perilaku sistem. Jika jumlah sampel terlalu sedikit, sistem cepat bereaksi tetapi mudah terpengaruh noise. Jika terlalu banyak, sistem lebih stabil tetapi lebih lambat menangkap perubahan kondisi pemain.

### Inti yang Harus Ditekankan

- **Moving average** adalah rata-rata dari beberapa data performa terakhir.
- Tujuannya adalah membuat sinyal DDA lebih stabil dan tidak terlalu reaktif terhadap satu kejadian ekstrem.
- `moving average` bekerja setelah **evaluation window**, bukan menggantikan pengumpulan data performa.
- Jumlah sampel menentukan keseimbangan antara **stabilitas** dan **kecepatan respons**.

### Transisi ke Slide Berikutnya

Meskipun `moving average` membantu meratakan sinyal, sistem DDA tetap bisa mengalami masalah jika penyesuaian difficulty dilakukan terlalu sering. Kondisi tersebut akan dibahas pada slide berikutnya, yaitu **DDA Oscillation**.

---

## Slide 043 - DDA Oscillation

### Narasi

Pada slide ini kita membahas **oscillation** dalam **Dynamic Difficulty Adjustment**. Oscillation muncul ketika sistem penyesuaian kesulitan terlalu cepat bereaksi terhadap perubahan performa pemain. Akibatnya, nilai `difficulty` tidak bergerak menuju titik yang stabil, melainkan terus naik dan turun dalam waktu singkat.

Contoh sederhananya dapat dilihat seperti ini:

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

Alur ini menunjukkan masalah utama: sistem membaca satu kondisi sesaat, lalu langsung mengubah tantangan. Ketika pemain sedang bermain baik, game menaikkan kesulitan. Namun, kenaikan itu membuat pemain kesulitan, sehingga sistem menurunkan kesulitan. Begitu pemain kembali baik, kesulitan naik lagi. Pola ini membentuk loop yang tidak diinginkan.

Dampaknya tidak hanya pada angka `difficulty`. Gameplay terasa tidak stabil, balancing menjadi sulit, dan perilaku NPC atau tantangan game terasa tidak konsisten. Pemain bisa merasa game “tidak adil” karena tantangan berubah terlalu cepat, padahal sebenarnya sistem hanya bereaksi terhadap sinyal yang terlalu bising.

Intuisi praktisnya adalah DDA sebaiknya bekerja seperti pengatur suhu, bukan saklar yang langsung menyala dan mati. Sistem perlu memiliki jeda, ambang batas, dan perubahan yang halus. Dengan cara ini, satu momen sulit atau satu momen mudah tidak langsung mengubah seluruh pengalaman bermain.

Beberapa solusi yang perlu dipahami adalah:

- **tolerance**: hanya ubah difficulty jika metrik melewati ambang batas dengan selisih yang cukup, bukan hanya sedikit di bawah atau di atas nilai target.
- **cooldown adjustment**: batasi seberapa sering difficulty boleh berubah.
- **minimum duration**: pertahankan difficulty pada level tertentu selama durasi minimum.
- **perubahan bertahap**: naikkan atau turunkan difficulty sedikit demi sedikit, bukan langsung melompat ke level ekstrem.

Sebelum lanjut, mahasiswa perlu memahami bahwa DDA bukan hanya soal “mengukur performa pemain”, tetapi juga soal **stabilitas sistem**. Sistem yang terlalu sensitif akan menghasilkan gameplay yang bergetar, sedangkan sistem yang terlalu lambat bisa membuat pemain bosan atau frustrasi. Keseimbangan antara responsivitas dan kestabilan adalah inti dari desain difficulty yang baik.

### Inti yang Harus Ditekankan

- **Oscillation** adalah masalah utama ketika difficulty naik-turun terlalu sering karena sistem terlalu reaktif.
- Dampaknya membuat gameplay tidak stabil, balancing sulit, dan perilaku NPC/tantangan terasa tidak konsisten.
- Solusinya bukan hanya moving average, tetapi juga **tolerance**, **cooldown adjustment**, **minimum duration**, dan **perubahan bertahap**.
- DDA harus dirancang sebagai sistem kontrol yang stabil, bukan sekadar penyesuaian instan terhadap satu data performa.

### Transisi ke Slide Berikutnya

Selanjutnya, kita akan membahas salah satu solusi penting untuk mencegah oscillation, yaitu **cooldown adjustment**, yang membatasi seberapa sering difficulty boleh berubah.

---

## Slide 044 - Difficulty Adjustment Cooldown

### Narasi

Setelah membahas **oscillation**, kita masuk ke mekanisme yang paling sederhana untuk menstabilkan **Dynamic Difficulty Adjustment**, yaitu **cooldown**.

Intuisinya, sistem DDA tidak perlu menilai ulang kesulitan setiap frame. Jika player baru saja mendapat perubahan, beri waktu beberapa detik agar gameplay sempat terasa konsisten.

Contoh sederhana:

```text
Difficulty hanya boleh berubah setiap 30 detik.
```

Artinya, meskipun data player menunjukkan perubahan performa, sistem menahan perubahan sampai jeda waktu terpenuhi.

Pseudocode-nya:

```text
if Time.time - lastAdjustmentTime >= adjustmentCooldown:
    EvaluateDifficulty()
```

Pada potongan ini:

- `Time.time` adalah waktu berjalan saat ini.
- `lastAdjustmentTime` menyimpan waktu terakhir difficulty diubah.
- `adjustmentCooldown` adalah batas minimum jarak antar perubahan, misalnya 30 detik.
- `EvaluateDifficulty()` hanya dipanggil jika kondisi terpenuhi.

Urutan eksekusinya cukup jelas. Setiap frame, sistem menghitung selisih waktu sejak perubahan terakhir. Jika selisih masih kurang dari `adjustmentCooldown`, evaluasi dilewati. Jika sudah cukup lama, sistem baru menilai ulang dan memutuskan apakah difficulty perlu diubah.

Hasil yang diharapkan adalah perubahan difficulty hanya terjadi pada interval tertentu, bukan secara terus-menerus. Dengan cara ini, sistem DDA menjadi lebih terkendali dan tidak membuat gameplay terasa berantakan.

Manfaat utama cooldown:

- mengurangi perubahan yang terlalu sering,
- memudahkan debugging karena perubahan tidak terjadi terus-menerus,
- membuat gameplay lebih stabil dan mudah dirasakan oleh player.

Hal penting yang harus dipahami mahasiswa: cooldown mengatur **frekuensi** perubahan, bukan **besaran** perubahan. Dengan cooldown, sistem DDA menjadi lebih stabil, tetapi masih perlu aturan tambahan agar perubahan tidak terlalu drastis.

### Inti yang Harus Ditekankan

- **Cooldown** membatasi seberapa sering difficulty boleh berubah.
- Pseudocode menggunakan `Time.time - lastAdjustmentTime >= adjustmentCooldown` untuk memastikan jeda waktu terpenuhi.
- `EvaluateDifficulty()` hanya dijalankan setelah cooldown selesai, sehingga perubahan tidak terjadi setiap frame.
- Manfaatnya adalah mengurangi **oscillation**, memudahkan debugging, dan menstabilkan gameplay.
- Cooldown mengatur **kapan** perubahan boleh terjadi, bukan **seberapa besar** perubahan tersebut.

### Transisi ke Slide Berikutnya

Setelah kita tahu kapan sistem boleh menilai ulang difficulty, langkah berikutnya adalah menentukan seberapa besar perubahan yang boleh dilakukan agar tidak terasa mendadak.

---

## Slide 045 - Adjustment Step

### Narasi

Pada slide ini kita masuk ke **Adjustment Step**, yaitu aturan tentang **seberapa besar perubahan difficulty** yang boleh dilakukan dalam satu langkah. Setelah cooldown memastikan sistem tidak terlalu sering mengubah difficulty, adjustment step memastikan perubahan yang terjadi tidak terlalu tajam.

Intuisi praktisnya sederhana: jika pemain sedang kesulitan, game boleh menurunkan tantangan, tetapi tidak boleh tiba-tiba membuat musuh sangat lemah. Sebaliknya, jika pemain terlalu mudah menang, game boleh menaikkan tantangan, tetapi tidak boleh langsung membuat musuh jauh lebih kuat. Perubahan yang terlalu ekstrem membuat pemain merasa game tidak adil, sulit membaca pola, dan kehilangan rasa progres.

Contoh buruk yang ditampilkan adalah:

```text
difficultyMultiplier 0.8 → 1.5
```

Perubahan dari `0.8` ke `1.5` berarti tantangan naik hampir dua kali lipat dalam satu langkah. Dalam implementasi, ini bisa membuat musuh tiba-tiba jauh lebih cepat, lebih kuat, atau lebih agresif. Efeknya, pemain tidak lagi merasa sedang belajar, tetapi merasa dihukum oleh sistem.

Contoh yang lebih baik adalah perubahan bertahap:

```text
difficultyMultiplier += 0.05
```

atau:

```text
difficultyLevel naik satu tingkat
```

Pendekatan pertama cocok jika difficulty menggunakan nilai kontinu, misalnya `0.80`, `0.85`, `0.90`. Pendekatan kedua cocok jika difficulty menggunakan level diskrit, misalnya `level 1`, `level 2`, `level 3`. Keduanya sama-sama menjaga perubahan tetap kecil dan mudah diprediksi.

Dalam konteks sistem game, adjustment step sangat penting karena difficulty sering memengaruhi banyak parameter sekaligus, seperti `enemy speed`, `damage`, `accuracy`, `spawn rate`, atau `reaction time`. Jika satu langkah terlalu besar, perubahan tersebut akan terasa mendadak di seluruh perilaku musuh. Sebaliknya, langkah kecil membuat sistem terasa halus, lebih mudah diuji, dan lebih mudah dituning.

Hal yang harus dipahami mahasiswa sebelum lanjut adalah: **cooldown** mengatur *kapan* difficulty boleh berubah, sedangkan **adjustment step** mengatur *seberapa besar* perubahan yang boleh terjadi. Keduanya bekerja bersama untuk menjaga gameplay tetap stabil. Namun, perubahan kecil saja belum cukup; sistem juga perlu tahu batas bawah dan batas atas agar difficulty tidak keluar dari rentang yang sehat.

### Inti yang Harus Ditekankan

- **Adjustment step** membatasi besarnya perubahan difficulty dalam satu langkah.
- Perubahan drastis seperti `0.8 → 1.5` dapat membuat gameplay terasa tidak adil dan sulit dikendalikan.
- Perubahan kecil seperti `difficultyMultiplier += 0.05` atau menaikkan satu level lebih aman dan lebih mudah dituning.
- Step yang halus membantu pemain tetap merasa progresif, bukan dihukum oleh sistem.
- Konsep ini melengkapi cooldown: cooldown mengatur frekuensi, step mengatur magnitudo perubahan.

### Transisi ke Slide Berikutnya

Setelah kita membatasi seberapa besar perubahan difficulty dalam satu langkah, langkah berikutnya adalah memastikan nilai difficulty tetap berada dalam rentang yang aman. Untuk itu, kita akan membahas **Batas Minimum dan Maksimum** pada slide berikutnya.

---

## Slide 046 - Batas Minimum dan Maksimum

### Narasi

Pada tahap ini, kita membahas **batas minimum dan maksimum** dalam **Dynamic Difficulty Adjustment** atau **DDA**. Setelah nilai kesulitan diubah secara bertahap, nilai tersebut tidak boleh dibiarkan bergerak tanpa batas.

Intuisi praktisnya sederhana: DDA boleh menyesuaikan tantangan, tetapi harus tetap berada dalam rentang yang masih masuk akal bagi pemain. Jika nilai kesulitan terlalu rendah, musuh menjadi terlalu lemah. Jika terlalu tinggi, musuh menjadi terlalu kuat dan gameplay bisa rusak.

Contoh rentang yang umum digunakan adalah:

```text
minDifficulty = 0.75
maxDifficulty = 1.50
```

Artinya, nilai `difficultyMultiplier` tidak boleh turun di bawah `0.75` dan tidak boleh naik di atas `1.50`.

Dalam Unity, hal ini biasanya diimplementasikan dengan `Mathf.Clamp`:

```csharp
difficultyMultiplier =
    Mathf.Clamp(difficultyMultiplier, 0.75f, 1.5f);
```

Fungsi `Mathf.Clamp` menerima tiga nilai: nilai yang ingin dibatasi, nilai minimum, dan nilai maksimum. Jika `difficultyMultiplier` lebih kecil dari `0.75f`, nilai yang digunakan menjadi `0.75f`. Jika lebih besar dari `1.5f`, nilai yang digunakan menjadi `1.5f`. Jika berada di antara keduanya, nilai tetap tidak berubah.

Dengan cara ini, sistem DDA tetap adaptif tetapi aman. Perubahan kesulitan masih bisa terjadi, tetapi tidak pernah melewati batas desain yang telah ditentukan.

Sebelum lanjut, mahasiswa perlu memahami bahwa **batas DDA** adalah mekanisme perlindungan desain. Batas ini menjaga agar penyesuaian kesulitan tidak mengubah karakter game secara ekstrem.

### Inti yang Harus Ditekankan

- **DDA harus memiliki batas minimum dan maksimum** agar penyesuaian kesulitan tetap terkendali.
- Nilai seperti `minDifficulty = 0.75` dan `maxDifficulty = 1.50` menjaga `difficultyMultiplier` tetap dalam rentang yang wajar.
- `Mathf.Clamp` memastikan nilai tidak keluar dari batas yang ditentukan.
- Tanpa batas, musuh bisa terlalu lemah, terlalu kuat, atau gameplay menjadi rusak.

### Transisi ke Slide Berikutnya

Setelah memastikan DDA memiliki batas yang aman, langkah berikutnya adalah memastikan penyesuaian tersebut tetap terasa adil bagi pemain.

---

## Slide 047 - DDA dan Fairness

### Narasi

Setelah DDA dibatasi dengan nilai minimum dan maksimum, langkah berikutnya adalah memastikan penyesuaian difficulty tetap terasa adil bagi pemain. **Fairness** dalam DDA bukan berarti difficulty tidak boleh berubah, melainkan perubahan itu tidak membuat pemain merasa permainan sedang “mengatur hasil” secara tidak wajar.

Intuisi praktisnya sederhana: jika pemain kesulitan, sistem boleh membantu, tetapi bantuan itu tidak boleh terasa seperti campur tangan yang terlalu jelas. Sebaliknya, jika pemain bermain baik, sistem tidak boleh membuat tantangan terasa dihukum atau dihilangkan.

Ada beberapa pertanyaan desain yang perlu dijawab:

- Apakah player merasa dibantu terlalu jelas?
- Apakah player yang bermain baik merasa dihukum?
- Apakah reward skill tetap terasa?
- Apakah adaptasi merusak tantangan?
- Apakah perubahan difficulty dapat dijelaskan?

Empat poin pertama berkaitan dengan persepsi pemain terhadap **skill** dan **tantangan**. DDA yang baik harus menjaga agar kemenangan masih terasa berasal dari keputusan pemain, dan kekalahan masih terasa sebagai konsekuensi dari tantangan yang wajar.

Poin terakhir penting karena DDA tidak boleh menjadi proses yang sepenuhnya misterius. Dalam desain game, setiap perubahan difficulty seharusnya punya alasan yang bisa dijelaskan, misalnya untuk menjaga pengalaman bermain tetap dalam rentang yang sehat.

Jadi, inti slide ini adalah: DDA harus membantu pengalaman bermain tanpa menghilangkan makna skill. Jika adaptasi membuat pemain merasa hasil permainan ditentukan oleh sistem, maka DDA telah melewati batas fairness.

### Inti yang Harus Ditekankan

- **Fairness** berarti DDA tidak membuat pemain merasa dibantu terlalu jelas atau dihukum secara tidak adil.
- **Reward skill** harus tetap terasa, sehingga kemenangan dan kekalahan masih bermakna.
- Perubahan difficulty sebaiknya memiliki alasan desain yang dapat dijelaskan.
- DDA harus mendukung pengalaman bermain, bukan menggantikan kemampuan pemain.

### Transisi ke Slide Berikutnya

Setelah memahami fairness, kita lanjut ke slide berikutnya tentang **player agency**, yaitu bagaimana DDA sebaiknya mendukung keputusan pemain tanpa membuat hasil permainan terasa otomatis.

---

## Slide 048 - DDA dan Player Agency

### Narasi

Pada slide ini, kita masuk ke aspek penting dari **Dynamic Difficulty Adjustment** yang sering luput dari implementasi teknis, yaitu **player agency**. **Player agency** adalah perasaan bahwa keputusan, strategi, dan kemampuan pemain masih menentukan hasil permainan. Dalam konteks Game AI, DDA bukan hanya soal mengubah parameter kesulitan, tetapi juga menjaga agar pemain tetap merasa menjadi agen utama, bukan objek yang dikendalikan oleh sistem.

Jika DDA terlalu kuat, pemain dapat merasakan bahwa game-lah yang menentukan hasil. Misalnya, kemenangan terasa terlalu mudah atau terlalu cepat, sehingga rasa pencapaian berkurang. Sebaliknya, kekalahan dapat terasa tidak adil karena pemain merasa sudah berusaha, tetapi sistem mengubah kondisi permainan secara berlebihan. Dalam situasi ini, adaptasi yang seharusnya membantu justru merusak makna **skill** dan **decision making** pemain.

Oleh karena itu, DDA yang baik harus berada pada posisi **mendukung**, bukan **menggantikan**. Sistem adaptif boleh membantu pemain yang kesulitan, tetapi tidak boleh menghapus kebutuhan untuk belajar, bereaksi, dan mengambil keputusan. Tantangan tetap harus ada, karena tantangan adalah bagian dari pengalaman bermain yang bermakna. Jika hasil terasa otomatis, pemain kehilangan motivasi untuk meningkatkan kemampuan.

Secara desain, kita dapat memposisikan DDA sebagai lapisan penyesuai yang halus. Ia boleh mengatur tekanan, memberi ruang pemulihan, atau menyesuaikan tingkat kesulitan secara bertahap, tetapi tidak boleh mengambil alih peran pemain. Dalam implementasi, ini berarti perubahan parameter harus terasa masuk akal, tidak terlalu mencolok, dan tetap memberi ruang bagi pemain untuk memengaruhi hasil.

Hal yang harus dipahami mahasiswa sebelum lanjut adalah bahwa **fairness** dan **player agency** saling terkait. DDA yang adil bukan hanya soal tidak merugikan pemain, tetapi juga soal menjaga agar pemain merasa keputusan dan skill mereka masih penting. Jika aspek ini hilang, sistem adaptif yang secara teknis berhasil dapat tetap gagal secara pengalaman bermain.

### Inti yang Harus Ditekankan

- **Player agency** adalah rasa bahwa keputusan dan **skill** pemain masih menentukan hasil.
- DDA yang terlalu kuat dapat membuat kemenangan terasa kurang bermakna dan kekalahan terasa tidak adil.
- DDA sebaiknya **mendukung** pemain, bukan **menggantikan** kemampuan atau keputusan pemain.
- Tantangan harus tetap terjaga agar hasil permainan tidak terasa otomatis.

### Transisi ke Slide Berikutnya

Setelah memahami bahwa DDA harus menjaga **player agency**, langkah berikutnya adalah melihat bagaimana sistem adaptif ini dapat dikomunikasikan ke pemain. Pada slide berikutnya, kita akan membahas **transparansi** DDA, yaitu apakah penyesuaian kesulitan ditampilkan secara terbuka atau disembunyikan, dan bagaimana hal itu memengaruhi pemahaman pemain terhadap sistem.

---

## Slide 049 - DDA dan Transparansi

### Narasi

Pada slide ini kita membahas **transparansi** dalam **Dynamic Difficulty Adjustment** atau **DDA**. Intuisi praktisnya sederhana: ketika sistem menyesuaikan kesulitan, pemain perlu tahu apakah perubahan itu berasal dari skill mereka, dari desain level, atau dari mekanisme adaptif. Jika pemain tidak diberi sinyal, mereka mungkin salah membaca penyebab kemenangan atau kekalahan.

Beberapa game memilih menampilkan DDA secara eksplisit. Misalnya, ketika sistem menilai pemain mulai kesulitan, game dapat menampilkan pesan seperti:

```text
Threat Level meningkat
Enemy Reinforcement datang
Area menjadi lebih berbahaya
```

Pesan ini bukan sekadar teks. Ia memberi **feedback** bahwa lingkungan sedang berubah, sehingga pemain dapat menyesuaikan strategi: lebih hati-hati, mencari item, atau mengubah pola serangan. Dalam konteks sistem adaptif game, transparansi membantu pemain memahami bahwa perubahan tantangan bukan acak, melainkan hasil dari penilaian sistem terhadap kondisi permainan.

Di sisi lain, beberapa game menyembunyikan DDA. Pendekatan ini bisa tepat untuk menjaga imersi, membuat dunia terasa hidup, atau menghindari kesan bahwa game sedang "mengatur" pemain. Namun, DDA yang tersembunyi harus tetap konsisten dengan desain keseluruhan. Jika perubahan kesulitan terasa tiba-tiba atau tidak dapat dijelaskan, pemain dapat kehilangan rasa kendali.

Untuk pembelajaran, saya menyarankan agar mahasiswa menampilkan **debug** DDA. Debug ini membantu melihat apa yang sebenarnya dihitung dan diubah oleh sistem. Contoh variabel yang dapat ditampilkan:

```text
Skill Score
Difficulty Multiplier
Current Adaptation
```

`Skill Score` menggambarkan estimasi kemampuan pemain berdasarkan performa, misalnya tingkat keberhasilan, waktu penyelesaian, atau jumlah kegagalan. `Difficulty Multiplier` adalah nilai pengali yang mengubah parameter tantangan. `Current Adaptation` menunjukkan mode atau arah penyesuaian saat ini, misalnya menurunkan tekanan, mempertahankan tantangan, atau meningkatkan tantangan.

Dengan debug ini, mahasiswa dapat memeriksa apakah DDA bekerja sesuai desain. Mereka bisa melihat kapan sistem menaikkan atau menurunkan kesulitan, seberapa besar perubahan yang terjadi, dan apakah perubahan itu masih terasa wajar. Dalam praktik Unity, informasi seperti ini dapat ditampilkan melalui UI debug, log konsol, atau panel inspector yang diperbarui setiap frame atau interval tertentu.

Hal penting yang harus dipahami sebelum lanjut adalah: **transparansi DDA bukan soal selalu menampilkan semua data ke pemain**, melainkan soal memilih tingkat informasi yang sesuai. Game dapat menampilkan sinyal halus, menyembunyikan mekanisme internal, atau membuka debug untuk pengembang. Yang terpenting, sistem adaptif harus dapat dijelaskan, diuji, dan tidak merusak pengalaman bermain.

### Inti yang Harus Ditekankan

- **Transparansi DDA** membantu pemain memahami bahwa perubahan kesulitan berasal dari sistem adaptif, bukan dari keacakan.
- DDA boleh ditampilkan secara jelas atau disembunyikan, tetapi harus konsisten dengan desain dan imersi game.
- Untuk pembelajaran, tampilkan debug seperti `Skill Score`, `Difficulty Multiplier`, dan `Current Adaptation` agar mahasiswa dapat menganalisis perilaku sistem.

### Transisi ke Slide Berikutnya

Setelah memahami bagaimana DDA dapat dibuat transparan, langkah berikutnya adalah melihat bagaimana penyesuaian kesulitan itu diwujudkan pada perilaku musuh.

---

## Slide 050 - DDA dengan Enemy AI

### Narasi

Pada slide ini kita melihat bagaimana **Dynamic Difficulty Adjustment** tidak hanya mengubah angka statistik pemain atau musuh, tetapi juga mengubah **perilaku musuh**. Intuisinya sederhana: difficulty rendah membuat musuh lebih mudah dibaca, sedangkan difficulty tinggi membuat musuh lebih responsif, lebih waspada, dan lebih agresif.

Contoh yang ditampilkan pada slide menunjukkan perubahan parameter dasar:

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

Perubahan ini penting karena **perception** dan **reaction** menentukan seberapa cepat musuh mengenali pemain dan mengambil keputusan. Jika `detection range` kecil, musuh mungkin tidak langsung melihat pemain. Jika `reaction delay` besar, musuh butuh waktu lebih lama sebelum menyerang atau menghindar.

Dalam implementasi game, DDA dapat memodifikasi beberapa parameter perilaku musuh, antara lain:

- **FSM transition threshold**: ambang kondisi untuk berpindah state, misalnya dari `idle` ke `chase` atau `attack`.
- **Utility AI weights**: bobot pilihan aksi, seperti menyerang, menutupi diri, atau mundur.
- **Behavior Tree priority**: urutan prioritas node atau perilaku yang dievaluasi.
- **Perception radius**: jarak deteksi musuh terhadap pemain.
- **Reaction delay**: jeda waktu sebelum musuh bereaksi terhadap stimulus.

Perlu dipahami bahwa DDA dengan enemy AI bukan sekadar membuat musuh lebih kuat secara statistik. Yang berubah adalah **kecerdasan perilaku**: musuh bisa lebih cepat beralih state, lebih sering memilih aksi agresif, atau lebih cepat merespons perubahan lingkungan.

Sebelum lanjut, mahasiswa perlu memastikan bahwa perubahan parameter ini tetap konsisten dengan desain game. Jika difficulty terlalu tinggi, musuh bisa terasa tidak adil; jika terlalu rendah, tantangan bisa hilang. Untuk pembelajaran, nilai parameter seperti `perception radius`, `reaction delay`, dan `difficulty multiplier` sebaiknya dapat diobservasi melalui debug.

### Inti yang Harus Ditekankan

- DDA dapat mengubah **perilaku musuh**, bukan hanya statistik.
- Parameter penting meliputi `FSM transition threshold`, `Utility AI weights`, `Behavior Tree priority`, `perception radius`, dan `reaction delay`.
- Perubahan parameter memengaruhi seberapa cepat, waspada, dan agresif musuh dalam mengambil keputusan.

### Transisi ke Slide Berikutnya

Selanjutnya kita akan melihat salah satu parameter tersebut secara lebih spesifik, yaitu bagaimana DDA memengaruhi **Utility AI** melalui perubahan bobot aksi musuh.

---

## Slide 051 - DDA dengan Utility AI

### Narasi

Slide ini membahas cara **Dynamic Difficulty Adjustment** bekerja ketika keputusan musuh dibuat menggunakan **Utility AI**. Pada slide sebelumnya, kita sudah melihat bahwa DDA dapat mengubah parameter musuh seperti kecepatan, cooldown, dan jangkauan deteksi. Di sini, fokusnya lebih ke lapisan pengambilan keputusan: musuh tidak hanya berubah karena stat-nya, tetapi karena cara ia menilai pilihan aksinya.

Intuisi praktisnya sederhana. Dalam Utility AI, setiap aksi biasanya diberi skor berdasarkan kondisi saat ini. Skor tersebut sering dipengaruhi oleh **bobot** atau `weight`. Semakin tinggi bobot suatu aksi, semakin besar kemungkinan aksi itu dipilih. Jadi, DDA tidak harus mengganti seluruh logika musuh; cukup mengubah bobot beberapa aksi agar perilaku musuh terasa berbeda.

Contoh pada slide menunjukkan dua skenario:

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

Pada **difficulty tinggi**, `attackWeight` naik sehingga musuh lebih sering memilih menyerang. `takeCoverWeight` juga naik, artinya musuh tidak hanya agresif, tetapi juga lebih taktis karena lebih sering mencari posisi aman. Sebaliknya, `fleeWeight` turun, sehingga musuh lebih jarang mundur. Hasilnya, musuh terasa lebih percaya diri, lebih agresif, dan lebih sulit ditebak.

Pada **difficulty rendah**, arah penyesuaiannya berlawanan. `attackWeight` turun, sehingga musuh kurang sering menyerang. `fleeWeight` naik, sehingga musuh lebih mudah mundur atau menghindari konflik. `reactionDelay` juga naik, artinya musuh lebih lambat merespons ancaman. Dengan kombinasi ini, musuh terasa lebih lemah secara perilaku, bukan hanya karena damage atau health yang lebih kecil.

Poin penting yang harus dipahami mahasiswa adalah bahwa DDA pada Utility AI bersifat **halus** dan **dinamis**. Perubahan kecil pada bobot dapat mengubah kepribadian musuh secara signifikan. Misalnya, musuh yang sama bisa berubah dari tipe “cautious” menjadi “aggressive” hanya karena `attackWeight` dan `takeCoverWeight` dinaikkan. Inilah kekuatan Utility AI untuk DDA: kita bisa menyesuaikan tingkat kesulitan tanpa menulis ulang seluruh sistem perilaku.

Sebelum lanjut, pastikan mahasiswa paham bahwa yang diubah di sini adalah **kecenderungan keputusan**, bukan hanya angka statistik. Musuh sulit bukan hanya lebih cepat atau lebih kuat, tetapi juga lebih sering memilih aksi yang berbahaya atau lebih taktis. Musuh mudah bukan hanya lebih lemah, tetapi juga lebih lambat bereaksi dan lebih sering menghindari pertempuran.

### Inti yang Harus Ditekankan

- **DDA pada Utility AI** mengubah `weight` atau bobot aksi, sehingga keputusan musuh berubah secara dinamis.
- `attackWeight`, `takeCoverWeight`, dan `fleeWeight` menentukan seberapa agresif, taktis, atau mudah mundur musuh.
- Perubahan bobot membuat musuh sulit terasa lebih cerdas dan agresif, sedangkan musuh mudah terasa lebih lambat dan kurang mengancam.

### Transisi ke Slide Berikutnya

Setelah memahami bagaimana DDA dapat menyesuaikan bobot pada Utility AI, kita akan melanjutkan ke struktur keputusan yang lebih eksplisit, yaitu Behavior Tree. Di sana, DDA tidak hanya mengubah bobot, tetapi juga dapat memengaruhi decorator, condition, urutan prioritas, dan parameter aksi.

---

## Slide 052 - DDA dengan Behavior Tree

### Narasi

Pada slide ini, kita melihat bagaimana **Dynamic Difficulty Adjustment** dapat dimasukkan ke dalam **Behavior Tree**. Intuisi praktisnya sederhana: Behavior Tree adalah struktur keputusan yang menentukan NPC melakukan apa, sedangkan DDA adalah mekanisme yang menyesuaikan parameter keputusan tersebut saat game berjalan. Jadi, kita tidak perlu membuat Behavior Tree baru untuk setiap tingkat kesulitan. Cukup ubah nilai yang dibaca oleh node.

Dalam Behavior Tree, DDA dapat mengubah beberapa bagian penting:

- **`cooldown decorator`**: mengatur jeda sebelum sebuah action boleh dieksekusi lagi.
- **`condition threshold`**: mengubah ambang kondisi, misalnya jarak, health, atau range deteksi.
- **`priority order`**: mengubah urutan branch yang dievaluasi oleh selector.
- **`action parameter`**: mengubah nilai parameter pada action, misalnya range, kecepatan, atau intensitas perilaku.

Bagian yang paling mudah dipahami adalah `cooldown decorator`. Jika node attack memiliki cooldown, maka DDA dapat mengubah nilai cooldown tersebut sesuai tingkat kesulitan.

```text
Attack cooldown:
Easy  = 2.0 detik
Normal = 1.5 detik
Hard = 1.0 detik
```

Pada mode `Easy`, NPC menyerang lebih jarang karena jeda antar serangan lebih panjang. Pada mode `Hard`, NPC menyerang lebih sering. Efeknya, pemain merasakan tekanan yang berbeda tanpa harus mengubah nilai statistik dasar seperti `health` atau `damage`.

Contoh lain adalah `vision range`, yang biasanya berperan sebagai kondisi deteksi atau parameter action.

```text
Vision range:
Easy  = 6
Normal = 10
Hard = 14
```

Jika `visionRange` lebih kecil, NPC baru menyadari pemain ketika jarak sudah dekat. Jika nilainya lebih besar, NPC dapat mendeteksi pemain lebih awal, lalu masuk ke branch `chase` atau `attack` lebih cepat. Dengan cara ini, DDA mengubah **kapan** NPC bereaksi, bukan hanya **seberapa kuat** NPC.

Secara eksekusi, alurnya dapat dipahami sebagai berikut:

1. Sistem DDA menentukan tingkat kesulitan saat ini.
2. Nilai parameter Behavior Tree diperbarui, misalnya `attackCooldown` dan `visionRange`.
3. Behavior Tree dievaluasi setiap tick.
4. Node condition memeriksa apakah kondisi terpenuhi.
5. Jika condition benar dan cooldown sudah selesai, action dijalankan.

Hasil yang diharapkan adalah perilaku NPC yang lebih adaptif. Pada tingkat kesulitan rendah, NPC dapat terlihat lebih lambat, lebih jarang menyerang, dan lebih lambat menyadari pemain. Pada tingkat kesulitan tinggi, NPC terlihat lebih agresif, lebih cepat bereaksi, dan lebih sering memilih branch yang menekan pemain.

Sebelum lanjut, hal penting yang harus dipahami mahasiswa adalah bahwa DDA dengan Behavior Tree bukan sekadar mengganti angka statistik. DDA di sini mengubah **keputusan perilaku**: kapan NPC bertindak, kondisi apa yang dianggap cukup, dan branch mana yang diprioritaskan. Pemahaman ini penting karena Behavior Tree sering digunakan untuk NPC yang perilakunya lebih kompleks daripada hanya mengikuti path atau state sederhana.

### Inti yang Harus Ditekankan

- DDA pada Behavior Tree dilakukan dengan mengubah parameter node, bukan mengganti seluruh struktur.
- `cooldown decorator` dan `condition threshold` memengaruhi kapan NPC bertindak.
- `priority order` dan `action parameter` memengaruhi pilihan perilaku dan intensitasnya.
- Contoh `attack cooldown` dan `vision range` menunjukkan perubahan yang langsung terasa pada gameplay.

### Transisi ke Slide Berikutnya

Setelah perilaku individu NPC dapat diatur melalui Behavior Tree, pembahasan berikutnya akan berpindah ke spawner, yaitu komponen yang mengatur jumlah dan ritme musuh yang muncul.

---

## Slide 053 - DDA dengan Spawner

### Narasi

Pada slide ini, kita melihat cara **DDA** yang paling konkret: mengatur **Spawner**. `Spawner` adalah komponen yang menentukan kapan musuh muncul dan berapa banyak musuh yang boleh ada di dunia permainan. Karena ia bekerja di level lingkungan, efeknya langsung terasa oleh pemain tanpa harus mengubah seluruh logika NPC.

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

Dua parameter utama di sini adalah `spawn interval` dan `max enemy alive`. `spawn interval` mengatur **ritme ancaman**: semakin kecil nilainya, semakin sering pemain harus bereaksi. `max enemy alive` mengatur **tekanan bersamaan**: semakin besar nilainya, semakin banyak musuh yang dapat menyerang atau mengejar pada saat yang sama.

Urutan eksekusinya sederhana. Sistem DDA memilih tingkat kesulitan, lalu `Spawner` membaca nilai `spawn interval` dan `max enemy alive`. Setiap interval, spawner memeriksa apakah jumlah musuh yang masih hidup sudah mencapai batas. Jika belum, spawner membuat musuh baru; jika sudah, spawner menunggu sampai ada musuh yang mati atau keluar dari area.

Hasilnya mudah diamati. Pada difficulty rendah, pemain mendapat jeda yang lebih panjang dan jumlah musuh yang lebih sedikit. Pada difficulty tinggi, pemain menghadapi musuh yang muncul lebih cepat dan lebih ramai. Karena perubahan ini terlihat langsung di scene, pendekatan ini sangat cocok untuk praktikum: mahasiswa dapat mengubah angka, menjalankan game, dan melihat dampaknya terhadap tekanan gameplay.

Sebelum lanjut, mahasiswa perlu memahami bahwa DDA tidak selalu harus mengubah perilaku internal NPC. Kadang, cukup mengubah kondisi lingkungan melalui spawner. Namun, parameter tetap perlu dibatasi agar tidak terlalu mudah atau terlalu sulit, dan agar jumlah musuh yang muncul masih masuk akal secara gameplay dan performa.

### Inti yang Harus Ditekankan

- **Spawner** adalah titik kontrol DDA yang paling mudah diuji karena efeknya langsung terlihat.
- `spawn interval` mengatur **kecepatan munculnya ancaman**, sedangkan `max enemy alive` mengatur **jumlah ancaman yang bersamaan**.
- Nilai DDA sebaiknya dipilih secara bertahap agar perubahan tantangan terasa natural, bukan ekstrem.
- Dalam praktikum, ubah parameter spawner, amati gameplay, dan kaitkan hasilnya dengan pengalaman pemain.

### Transisi ke Slide Berikutnya

Setelah melihat DDA melalui spawner, langkah berikutnya adalah memperluas kontrol DDA ke proses pembuatan konten, yaitu PCG.

---

## Slide 054 - DDA dengan PCG

### Narasi

Pada slide ini, kita melihat cara **Dynamic Difficulty Adjustment** atau **DDA** tidak hanya mengatur jumlah musuh, tetapi juga mengendalikan **Procedural Content Generation** atau **PCG**. Intuisinya sederhana: jika level dibuat secara prosedural, maka parameter pembuatan level bisa diubah berdasarkan performa pemain. Dengan begitu, DDA bekerja lebih dalam dari sekadar menambah atau mengurangi entitas di runtime; ia memengaruhi bentuk konten yang dihasilkan.

Dalam contoh slide, ada dua kondisi utama. Ketika pemain bermain baik, sistem dapat menaikkan parameter tantangan. Sebaliknya, ketika pemain kesulitan, sistem menurunkan tekanan dan memberi bantuan. Pendekatan ini membuat pengalaman bermain terasa lebih seimbang tanpa mengubah seluruh desain level secara manual.

Parameter yang dapat dikontrol oleh DDA melalui PCG antara lain:

- `enemyCount`: jumlah musuh yang dihasilkan.
- `itemCount`: jumlah item yang tersedia.
- `trapCount`: jumlah jebakan atau bahaya.
- `pathLength`: panjang atau kompleksitas jalur yang dibuat.

Untuk pemain yang bermain baik, nilai-nilai tersebut bisa diarahkan ke kondisi lebih menantang:

```text
Player bagus:
    enemyCount naik
    itemCount turun
    trapCount naik
    path lebih panjang
```

Artinya, pemain yang mampu menyelesaikan tantangan dengan cepat atau efisien akan mendapat level yang lebih padat, lebih berbahaya, dan lebih panjang. Ini bukan berarti sistem "menghukum" pemain, melainkan menjaga agar tantangan tetap relevan dengan kemampuannya.

Untuk pemain yang sedang kesulitan, arah penyesuaian berlawanan:

```text
Player kesulitan:
    enemyCount turun
    health item naik
    trapCount turun
    path lebih pendek
```

Di sini, PCG menghasilkan konten yang lebih ramah: musuh lebih sedikit, item kesehatan lebih banyak, jebakan lebih jarang, dan jalur lebih pendek. Tujuannya adalah memberi pemain kesempatan untuk pulih, memahami pola, dan kembali menikmati permainan tanpa frustrasi yang berlebihan.

Poin penting yang perlu dipahami mahasiswa adalah bahwa DDA dengan PCG menghubungkan dua topik yang sebelumnya dibahas. Pertemuan 9 dan 10 membahas pembuatan konten secara prosedural, sedangkan Pertemuan 11 membahas penyesuaian kesulitan secara dinamis. Ketika keduanya digabungkan, sistem game tidak hanya menghasilkan level, tetapi juga memilih parameter level berdasarkan kondisi pemain.

Secara implementasi, mahasiswa dapat membayangkan adanya komponen yang menyimpan parameter PCG, lalu komponen DDA mengubah nilai parameter tersebut sebelum atau selama level dibuat. Urusan teknisnya bisa dimulai dari hal sederhana: tentukan metrik performa pemain, pilih kondisi, lalu ubah parameter PCG. Setelah itu, proses generate level berjalan seperti biasa, tetapi dengan nilai yang sudah disesuaikan.

### Inti yang Harus Ditekankan

- **DDA** dapat mengendalikan **PCG** dengan mengubah parameter generasi level, bukan hanya menambah entitas secara langsung.
- Parameter seperti `enemyCount`, `itemCount`, `trapCount`, dan panjang jalur dapat disesuaikan berdasarkan performa pemain.
- Pemain yang bermain baik mendapat tantangan lebih tinggi, sedangkan pemain yang kesulitan mendapat konten yang lebih mudah dan mendukung.
- Slide ini menjadi jembatan antara **Procedural Content Generation** dan **Dynamic Difficulty Adjustment** dalam satu sistem adaptif.

### Transisi ke Slide Berikutnya

Setelah melihat DDA yang memengaruhi parameter PCG, kita lanjut ke bentuk yang lebih spesifik, yaitu **Adaptive Spawn**, di mana spawning musuh dan item disesuaikan langsung dengan performa pemain.

---

## Slide 055 - DDA dan Adaptive Spawn

### Narasi

Pada slide ini, kita masuk ke salah satu bentuk penerapan **Dynamic Difficulty Adjustment** yang paling mudah dilihat langsung oleh pemain, yaitu **adaptive spawn**.

**Adaptive spawn** adalah mekanisme spawning yang tidak tetap, tetapi menyesuaikan diri dengan performa pemain. Artinya, game tidak hanya menentukan “apa yang muncul” secara statis, melainkan juga mempertimbangkan bagaimana pemain bermain saat itu.

Intuisi praktisnya sederhana:

- Jika pemain terlalu kuat, game bisa menambah tantangan.
- Jika pemain kesulitan, game bisa memberi bantuan.
- Jika pemain bertahan terlalu lama, game bisa meningkatkan tekanan.

Contoh logikanya dapat ditulis seperti ini:

```text
Jika player sering menang cepat:
    spawn enemy lebih banyak

Jika player sering low health:
    spawn health item lebih sering

Jika player terlalu lama bertahan:
    tambah enemy elite
```

Pada kondisi pertama, jika pemain sering menang cepat, sistem dapat meningkatkan jumlah musuh yang muncul. Tujuannya agar pemain tidak merasa permainan terlalu mudah.

Pada kondisi kedua, jika pemain sering berada dalam kondisi `low health`, sistem dapat meningkatkan frekuensi munculnya `health item`. Ini membuat pemain tetap mendapat kesempatan untuk bertahan tanpa mengubah seluruh aturan game secara drastis.

Pada kondisi ketiga, jika pemain bertahan terlalu lama, sistem dapat menambahkan `enemy elite`. Ini memberi tekanan baru agar permainan tidak menjadi terlalu lambat atau terlalu aman.

Secara teknis, adaptive spawn biasanya melibatkan tiga komponen utama:

- `PerformanceTracker`
- `DifficultyManager`
- `EnemySpawner`

`PerformanceTracker` bertugas mengumpulkan data performa pemain, misalnya kecepatan menang, kondisi health, atau durasi bertahan.

`DifficultyManager` bertugas menginterpretasikan data tersebut dan menentukan keputusan, misalnya apakah musuh harus ditambah, item harus ditingkatkan, atau musuh elite perlu muncul.

`EnemySpawner` bertugas mengeksekusi keputusan tersebut ke dalam scene, yaitu memunculkan musuh, item, atau entitas lain sesuai aturan yang sudah ditentukan.

Penting untuk dipahami bahwa adaptive spawn bukan sekadar “membuat musuh muncul”. Ia adalah bagian dari sistem keputusan game yang menghubungkan **data pemain**, **aturan kesulitan**, dan **perubahan gameplay**.

Sebelum lanjut ke arsitektur Unity, mahasiswa perlu memahami bahwa adaptive spawn bekerja melalui alur sederhana:

1. Sistem mengamati performa pemain.
2. Sistem menilai apakah kesulitan perlu dinaikkan, diturunkan, atau diubah bentuknya.
3. Sistem mengubah entitas yang muncul di game.

Dengan cara ini, pemain tetap merasa permainan responsif, tetapi tidak langsung melihat bahwa ada sistem yang sedang menyesuaikan kesulitan.

### Inti yang Harus Ditekankan

- **Adaptive spawn** adalah bentuk DDA yang mengubah entitas yang muncul berdasarkan performa pemain.
- Keputusan spawn harus berbasis data, bukan sekadar acak, misalnya kecepatan menang, `low health`, atau durasi bertahan.
- `PerformanceTracker`, `DifficultyManager`, dan `EnemySpawner` memisahkan peran pengamatan, pengambilan keputusan, dan eksekusi spawning.

### Transisi ke Slide Berikutnya

Setelah memahami konsep adaptive spawn, langkah berikutnya adalah melihat bagaimana komponen-komponen ini disusun dalam arsitektur Unity.

---

## Slide 056 - Contoh Arsitektur Unity DDA

### Narasi

Pada slide ini kita melihat **contoh arsitektur Unity** untuk **Dynamic Difficulty Adjustment** atau **DDA**. Fokus utamanya bukan pada satu algoritma tertentu, melainkan bagaimana beberapa komponen dalam scene saling terhubung agar kesulitan game dapat berubah secara terukur dan mudah dikendalikan.

Struktur scene yang ditampilkan dapat dibaca sebagai berikut:

```text
Scene
├── GameManager
├── DifficultyManager
├── PlayerPerformanceTracker
├── EnemySpawner
├── Player
├── Enemies
└── Debug UI
```

Dalam arsitektur ini, **`GameManager`** berperan sebagai pengatur alur game secara umum, misalnya kondisi menang, kalah, atau fase permainan. **`DifficultyManager`** adalah komponen yang mengambil keputusan tingkat kesulitan. **`PlayerPerformanceTracker`** bertugas mengumpulkan data performa pemain. **`EnemySpawner`** dan **`EnemyStats`** menjadi eksekutor perubahan, misalnya jumlah musuh, jenis musuh, atau parameter musuh yang muncul. **`Player`** dan **`Enemies`** adalah objek gameplay yang dipengaruhi oleh keputusan tersebut, sedangkan **`Debug UI`** membantu pengembang melihat nilai kesulitan atau data performa secara langsung.

Alur utamanya dapat digambarkan sebagai berikut:

```text
PlayerPerformanceTracker
        ↓
DifficultyManager
        ↓
EnemySpawner / EnemyStats
        ↓
Gameplay berubah
```

Artinya, data performa pemain tidak langsung mengubah gameplay. Data tersebut terlebih dahulu diproses oleh **`DifficultyManager`**, lalu diterjemahkan menjadi perubahan yang dapat dieksekusi oleh **`EnemySpawner`** atau **`EnemyStats`**. Pemisahan ini penting agar sistem DDA tetap rapi, mudah diuji, dan tidak membuat satu komponen terlalu banyak tanggung jawab.

Secara intuitif, arsitektur ini bekerja seperti rantai keputusan: pemain melakukan aksi, sistem mencatat dampaknya, manajer kesulitan menilai apakah tantangan perlu dinaikkan atau diturunkan, lalu spawner atau statistik musuh menyesuaikan isi gameplay. Dengan cara ini, perubahan kesulitan terasa lebih halus dan dapat dijelaskan berdasarkan data, bukan sekadar tebakan.

Alur ini juga dapat dibaca sebagai **input**, **proses**, dan **output**. Inputnya adalah data performa dari **`PlayerPerformanceTracker`**. Prosesnya adalah penilaian dan pengambilan keputusan oleh **`DifficultyManager`**. Outputnya adalah perubahan pada **`EnemySpawner`** atau **`EnemyStats`**, yang kemudian membuat gameplay berubah.

Sebelum lanjut, mahasiswa perlu memahami bahwa **`PlayerPerformanceTracker`** hanya menyediakan data, **`DifficultyManager`** yang menentukan kebijakan kesulitan, dan **`EnemySpawner`** atau **`EnemyStats`** yang menjalankan perubahan di dunia game.

### Inti yang Harus Ditekankan

- **DDA di Unity** dapat diimplementasikan melalui pemisahan komponen: pelacak performa, manajer kesulitan, dan eksekutor perubahan.
- **`PlayerPerformanceTracker`** tidak langsung mengubah gameplay; ia hanya mengumpulkan data untuk diproses.
- **`DifficultyManager`** menjadi pusat keputusan yang menerjemahkan data performa menjadi tingkat kesulitan.
- **`EnemySpawner`** dan **`EnemyStats`** adalah bagian yang membuat perubahan kesulitan benar-benar terasa oleh pemain.
- **`Debug UI`** membantu observasi dan debugging nilai DDA selama pengembangan.

### Transisi ke Slide Berikutnya

Selanjutnya kita akan masuk ke komponen pertama dalam alur ini, yaitu **`PlayerPerformanceTracker`**, untuk melihat data apa saja yang perlu dicatat agar **`DifficultyManager`** dapat mengambil keputusan yang lebih tepat.

---

## Slide 057 - PlayerPerformanceTracker

### Narasi

Pada slide ini, kita fokus pada komponen **PlayerPerformanceTracker** dalam arsitektur Dynamic Difficulty Adjustment. Komponen ini berperan sebagai **perekam data performa pemain** selama permainan berlangsung.

Intuisi praktisnya sederhana: tracker ini seperti **telemetri** atau **dashboard internal** yang mengamati apa yang terjadi pada pemain, tetapi tidak mengambil keputusan. Ia mencatat, menyimpan, dan merangkum data. Keputusan untuk menaikkan atau menurunkan kesulitan akan dilakukan oleh komponen lain, yaitu **DifficultyManager**.

Tugas utama `PlayerPerformanceTracker` adalah mengumpulkan metrik gameplay yang relevan, antara lain:

- **damage diterima** oleh pemain,
- **jumlah kill** yang dilakukan pemain,
- **health** pemain, baik saat ini maupun rata-rata,
- **waktu bertahan** pemain,
- **jumlah kematian** pemain,
- **performance score** yang dihitung dari kombinasi metrik tersebut.

Variabel-variabel ini penting karena menjadi bahan evaluasi apakah pemain sedang kesulitan, terlalu mudah, atau berada pada tingkat tantangan yang seimbang.

Contoh variabel yang dapat digunakan adalah:

```csharp
int killCount;
float damageTaken;
float timeSurvived;
float averageHealth;
int deathCount;
```

Secara konsep, `killCount` menunjukkan kemampuan pemain dalam menghadapi musuh. `damageTaken` menggambarkan seberapa besar tekanan yang diterima pemain. `timeSurvived` memberi gambaran ketahanan pemain dalam sesi permainan. `averageHealth` membantu menilai apakah pemain sering berada di kondisi kritis. `deathCount` mencatat frekuensi kegagalan pemain.

Urutan kerja tracker biasanya mengikuti alur data:

1. Sistem gameplay mengirim peristiwa, misalnya pemain terkena damage, pemain melakukan kill, atau pemain mati.
2. `PlayerPerformanceTracker` memperbarui variabel terkait.
3. Nilai-nilai tersebut dirangkum menjadi **performance score**.
4. Data performa ini siap dibaca oleh komponen lain.

Poin penting yang harus dipahami mahasiswa adalah **pemisahan tanggung jawab**. `PlayerPerformanceTracker` tidak mengubah difficulty, tidak memanggil `EnemySpawner`, dan tidak mengubah statistik musuh secara langsung. Ia hanya menyediakan data yang bersih, konsisten, dan dapat diukur.

Dengan desain seperti ini, sistem menjadi lebih mudah diuji dan dikembangkan. Jika nanti nilai difficulty berubah, kita bisa melacak apakah penyebabnya berasal dari data performa yang salah, atau dari logika keputusan pada komponen berikutnya.

### Inti yang Harus Ditekankan

- `PlayerPerformanceTracker` adalah komponen **pengamat data**, bukan pengambil keputusan.
- Metrik seperti `killCount`, `damageTaken`, `timeSurvived`, `averageHealth`, dan `deathCount` menjadi dasar perhitungan **performance score**.
- Tracker tidak mengubah difficulty; ia hanya menyediakan data untuk komponen lain.
- Pemisahan antara pencatatan data dan pengambilan keputusan membuat arsitektur DDA lebih modular dan mudah di-debug.

### Transisi ke Slide Berikutnya

Setelah data performa terkumpul, langkah berikutnya adalah bagaimana data tersebut diubah menjadi keputusan kesulitan. Pada slide berikutnya, kita akan membahas **DifficultyManager**, yaitu komponen yang membaca performance score, menghitung difficulty multiplier, dan mengirim nilai tersebut ke sistem gameplay lain.

---

## Slide 058 - DifficultyManager

### Narasi

Pada slide ini kita masuk ke komponen yang mengubah data performa pemain menjadi keputusan kesulitan. **DifficultyManager** adalah pengatur pusat dalam sistem **Dynamic Difficulty Adjustment** atau DDA. Ia tidak lagi sekadar mencatat angka, tetapi membaca **performance score** yang dihasilkan oleh `PlayerPerformanceTracker`, lalu menerjemahkannya menjadi **difficulty multiplier**.

Intuisi praktisnya sederhana: jika pemain terlalu kuat, multiplier dapat naik; jika pemain kesulitan, multiplier dapat turun. Nilai multiplier ini menjadi faktor pengali yang dipakai sistem lain. Dengan cara ini, game tidak perlu mengubah banyak parameter secara manual; cukup satu nilai yang konsisten dan mudah dikontrol.

Contoh representasi sederhana dari nilai tersebut adalah:

```csharp
public float DifficultyMultiplier { get; private set; } = 1f;
```

Property ini penting karena `private set` menjaga agar nilai hanya diubah oleh logika `DifficultyManager`, bukan oleh komponen lain secara sembarangan. Nilai awal `1f` berarti kesulitan netral, yaitu kondisi dasar sebelum penyesuaian dilakukan.

Tugas utama `DifficultyManager` dapat dirangkum sebagai berikut:

1. Membaca **performance score** dari tracker.
2. Menghitung **difficulty multiplier** berdasarkan aturan yang ditentukan.
3. Membatasi nilai difficulty agar tidak terlalu ekstrem.
4. Mengirim nilai tersebut ke sistem lain yang membutuhkan.

Pembatasan nilai sangat penting karena DDA yang terlalu agresif dapat membuat game terasa tidak adil. Mahasiswa perlu memahami bahwa `DifficultyManager` adalah penjaga keseimbangan, bukan sekadar penghitung angka.

Komponen yang dapat dikendalikan oleh `DifficultyManager` antara lain:

- `EnemySpawner`
- `EnemyStats`
- `LootDrop`
- `WaveManager`
- `UI Debug`

Hubungan ini menunjukkan bahwa difficulty bukan hanya jumlah musuh, tetapi juga kekuatan musuh, hadiah, ritme wave, dan informasi debug. `UI Debug` membantu pengembang melihat nilai multiplier secara real-time selama pengujian.

Sebelum lanjut, hal yang harus dipahami adalah peran `DifficultyManager` sebagai lapisan keputusan antara data pemain dan perilaku game. Ia mengubah metrik performa menjadi parameter yang dapat dipakai sistem lain secara konsisten.

### Inti yang Harus Ditekankan

- `DifficultyManager` membaca **performance score** dan mengubahnya menjadi **difficulty multiplier**.
- Nilai multiplier harus dibatasi agar DDA tetap stabil dan adil.
- `DifficultyMultiplier` sebaiknya memiliki `private set` agar hanya diubah oleh manager.
- Sistem lain seperti `EnemySpawner`, `EnemyStats`, `LootDrop`, `WaveManager`, dan `UI Debug` dapat memakai nilai ini.

### Transisi ke Slide Berikutnya

Selanjutnya kita akan melihat bagaimana `EnemySpawner` memakai `difficultyMultiplier` untuk mengatur interval spawn dan jumlah musuh maksimum.

---

## Slide 059 - EnemySpawner

### Narasi

Pada slide ini, kita melihat bagaimana **EnemySpawner** menjadi salah satu eksekutor dari nilai **difficulty** yang dihasilkan oleh sistem sebelumnya. **DifficultyManager** tidak hanya menyimpan angka, tetapi nilainya perlu dipakai oleh komponen lain agar perubahan kesulitan benar-benar terasa di gameplay. **EnemySpawner** adalah contoh yang paling langsung: ia mengatur kapan dan seberapa banyak musuh muncul.

Intuisi praktisnya sederhana: jika kesulitan naik, pemain harus menghadapi tekanan lebih besar. Tekanan itu bisa datang dari musuh yang lebih kuat, tetapi juga dari musuh yang lebih sering muncul atau populasi musuh yang lebih besar. Di sini, **EnemySpawner** menggunakan **difficultyMultiplier** untuk mengubah parameter spawn.

```csharp
float currentSpawnInterval =
    baseSpawnInterval / difficultyMultiplier;
```

Baris ini menentukan jarak waktu antar spawn. `baseSpawnInterval` adalah nilai dasar, misalnya 2 detik. Jika `difficultyMultiplier` bernilai 1, interval tetap 2 detik. Jika multiplier naik menjadi 2, interval menjadi 1 detik. Artinya, musuh muncul lebih sering. Karena menggunakan pembagian, kenaikan difficulty membuat interval turun.

```csharp
int currentMaxEnemies =
    Mathf.RoundToInt(baseMaxEnemies * difficultyMultiplier);
```

Parameter kedua adalah batas jumlah musuh yang boleh aktif. `baseMaxEnemies` adalah jumlah dasar, misalnya 5 musuh. Jika multiplier naik menjadi 1.5, nilai menjadi 7.5, lalu `Mathf.RoundToInt` mengubahnya menjadi 8. Hasilnya, lebih banyak musuh dapat hadir secara bersamaan. `Mathf.RoundToInt` penting karena jumlah musuh harus berupa bilangan bulat.

Dengan dua parameter ini, **EnemySpawner** mengubah difficulty menjadi perilaku yang bisa diamati pemain:

- `currentSpawnInterval` yang lebih kecil membuat musuh datang lebih cepat.
- `currentMaxEnemies` yang lebih besar membuat arena lebih ramai.
- Kombinasi keduanya meningkatkan tekanan tanpa mengubah statistik individual musuh.

Mahasiswa perlu memahami bahwa **difficultyMultiplier** sebaiknya sudah dibatasi oleh sistem sebelumnya agar tidak menghasilkan interval terlalu kecil atau jumlah musuh tidak wajar. Jika multiplier terlalu besar, spawn bisa terasa agresif dan sulit dikontrol. Jika multiplier terlalu kecil, perubahan difficulty tidak terasa.

Sebelum lanjut, hal penting yang harus dipahami adalah **EnemySpawner** hanya mengubah **populasi dan frekuensi** musuh. Ia belum mengubah kekuatan musuh itu sendiri. Perubahan seperti health, damage, atau speed akan dibahas pada bagian berikutnya.

### Inti yang Harus Ditekankan

- **EnemySpawner** memakai `difficultyMultiplier` untuk menyesuaikan spawn musuh.
- `currentSpawnInterval = baseSpawnInterval / difficultyMultiplier` membuat interval spawn turun ketika difficulty naik.
- `currentMaxEnemies = Mathf.RoundToInt(baseMaxEnemies * difficultyMultiplier)` meningkatkan batas jumlah musuh aktif.
- Perubahan ini memengaruhi tekanan gameplay melalui frekuensi dan populasi musuh, bukan statistik individual.

### Transisi ke Slide Berikutnya

Setelah EnemySpawner mengatur seberapa sering dan seberapa banyak musuh muncul, langkah berikutnya adalah menyesuaikan kekuatan masing-masing musuh. Pada slide berikutnya, kita akan membahas **EnemyStats Scaling**, yaitu cara menaikkan parameter seperti health, damage, dan speed secara terkontrol.

---

## Slide 060 - EnemyStats Scaling

### Narasi

Dalam **Dynamic Difficulty Adjustment**, musuh tidak hanya muncul lebih sering. Musuh juga bisa dibuat lebih kuat, lebih cepat, atau lebih sulit dikalahkan.

```csharp
enemy.maxHealth = baseHealth * difficultyMultiplier;
enemy.damage = baseDamage * difficultyMultiplier;
enemy.moveSpeed = baseSpeed * speedMultiplier;
```

Potongan kode ini menunjukkan pola dasar **scaling**. Saat eksekusi, nilai dasar seperti `baseHealth` dibaca, dikalikan dengan `difficultyMultiplier`, lalu ditugaskan ke `enemy.maxHealth`. Hasil yang diharapkan adalah musuh menjadi lebih kuat secara terukur.

- `enemy.maxHealth` menentukan seberapa lama musuh bertahan.
- `enemy.damage` menentukan seberapa besar ancaman musuh terhadap pemain.
- `enemy.moveSpeed` menentukan tekanan spasial dan kecepatan musuh mendekati pemain.

Penting untuk memahami bahwa ketiga parameter ini tidak selalu harus naik bersamaan. Jika semua parameter ditingkatkan pada saat yang sama, efeknya bisa saling memperkuat.

Misalnya, musuh yang lebih cepat, lebih kuat, dan lebih tahan lama dapat membuat pemain merasa tidak punya ruang untuk bereaksi. Akibatnya, tantangan berubah dari “sulit” menjadi “tidak adil”.

Dalam konteks perilaku NPC dan **decision making**, scaling musuh adalah bagian dari **balancing**. Sistem tidak hanya memilih perilaku musuh, tetapi juga mengatur kekuatan perilaku tersebut agar tetap sesuai dengan pengalaman pemain.

Karena itu, pendekatan yang lebih baik adalah memilih beberapa parameter saja yang relevan dengan tujuan desain. Misalnya, tingkat kesulitan bisa dinaikkan melalui `maxHealth` dan `damage`, sementara `moveSpeed` tetap dijaga agar gameplay tidak terlalu cepat.

Sebelum lanjut, mahasiswa perlu memahami bahwa scaling musuh bukan sekadar menaikkan angka. Yang penting adalah memilih parameter yang tepat, menjaga fairness, dan memastikan perubahan difficulty dapat dirasakan secara jelas oleh pemain.

### Inti yang Harus Ditekankan

- **Enemy stats scaling** dilakukan dengan mengalikan nilai dasar musuh, seperti `maxHealth`, `damage`, dan `moveSpeed`, dengan multiplier.
- Tidak semua parameter harus dinaikkan bersamaan karena dapat membuat difficulty terlalu ekstrem dan terasa tidak adil.
- Pilihan parameter scaling harus mendukung **balancing**, fairness, dan pengalaman bermain yang tetap bisa dikendalikan pemain.

### Transisi ke Slide Berikutnya

Selanjutnya, kita akan melihat parameter mana yang paling disarankan untuk dipraktikkan di Unity, agar adaptasi difficulty mudah diuji, mudah diukur, dan tidak merusak gameplay.

---

## Slide 061 - Adaptasi yang Disarankan untuk Praktikum

### Narasi

Untuk praktikum Unity, fokus utama **Dynamic Difficulty Adjustment** bukan menambah banyak parameter sekaligus, tetapi memilih beberapa parameter yang benar-benar terasa oleh pemain. Slide ini memberikan daftar adaptasi yang disarankan:

```text
1. Enemy spawn interval
2. Enemy max health
3. Enemy damage
4. Enemy move speed
5. Health item drop chance
```

Parameter ini dipilih karena efeknya mudah dilihat dalam gameplay. Misalnya, `spawnInterval` memengaruhi seberapa sering pemain menghadapi tekanan baru. `maxHealth` memengaruhi lama waktu untuk mengalahkan satu enemy. `damage` memengaruhi risiko yang dirasakan pemain. `moveSpeed` memengaruhi tekanan spasial dan jarak aman. `dropChance` memengaruhi bantuan yang diterima pemain ketika kesulitan.

Prioritas utama adalah **mudah dilihat**, **mudah diukur**, dan **mudah di-debug**. Jika parameter terlalu banyak, mahasiswa akan sulit menentukan penyebab perubahan difficulty. Apakah pemain kesulitan karena enemy lebih cepat, lebih kuat, atau muncul lebih sering? Dengan parameter terbatas, hubungan sebab-akibat menjadi lebih jelas.

Hal yang sama penting adalah **tidak merusak gameplay**. Perubahan kecil pada satu atau dua parameter biasanya lebih aman daripada mengubah semua stat secara bersamaan. Dalam praktikum, mahasiswa bisa mulai dari `spawnInterval` dan `maxHealth`, lalu menambahkan `damage` atau `moveSpeed` setelah perilaku dasar sudah stabil.

Pendekatan ini juga membantu mahasiswa memahami bahwa DDA bukan sekadar menaikkan angka. DDA yang baik harus menjaga pengalaman bermain tetap adil, menantang, dan dapat diprediksi oleh pemain.

### Inti yang Harus Ditekankan

- Pilih **sedikit parameter** di awal praktikum agar mudah dikontrol.
- Parameter yang baik harus **mudah diamati**, **mudah diukur**, dan **mudah di-debug**.
- Hindari mengubah semua stat enemy sekaligus agar difficulty tidak terasa tidak adil.
- Fokus pada parameter yang efeknya langsung terasa oleh pemain, seperti `spawnInterval`, `maxHealth`, `damage`, `moveSpeed`, dan `dropChance`.

### Transisi ke Slide Berikutnya

Setelah parameter yang akan disesuaikan sudah dipilih, langkah berikutnya adalah menentukan aturan sederhana untuk mengubah parameter tersebut berdasarkan kondisi pemain.

---

## Slide 062 - Contoh Rule DDA Sederhana

### Narasi

Slide ini menunjukkan bentuk paling sederhana dari **Dynamic Difficulty Adjustment**, yaitu sistem yang menyesuaikan tingkat tantangan game berdasarkan performa pemain. Intuisi praktisnya sederhana: jika pemain terlihat sangat mampu, game boleh sedikit lebih menantang; jika pemain kesulitan, game boleh sedikit lebih ringan. Tujuannya bukan membuat game “acak”, tetapi menjaga pengalaman bermain tetap seimbang.

Aturan yang ditampilkan pada slide adalah:

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

Variabel utama di sini adalah `skillScore` dan `difficultyMultiplier`. `skillScore` mewakili penilaian performa pemain, sedangkan `difficultyMultiplier` adalah faktor pengali yang digunakan untuk mengubah parameter kesulitan, misalnya kekuatan musuh, kecepatan musuh, atau interval spawn. Nilai `difficultyMultiplier` tidak langsung diubah secara ekstrem, tetapi dinaikkan atau diturunkan secara bertahap sebesar `0.05`.

Urutan logika penyesuaian dapat dipahami sebagai berikut:

1. Jika `skillScore > 0.75`, pemain dianggap cukup mampu, sehingga `difficultyMultiplier` dinaikkan.
2. Jika `skillScore < 0.35`, pemain dianggap kesulitan, sehingga `difficultyMultiplier` diturunkan.
3. Jika `skillScore` berada di antara `0.35` dan `0.75`, kondisi dianggap stabil, sehingga kesulitan tidak diubah.

Setelah penyesuaian dilakukan, nilai `difficultyMultiplier` dibatasi atau di-*clamp* antara `0.75` dan `1.50`. Batas ini penting agar game tidak menjadi terlalu mudah atau terlalu sulit. Misalnya, jika `difficultyMultiplier` turun terus-menerus, nilainya tidak boleh melewati `0.75`. Sebaliknya, jika pemain terus berperforma tinggi, nilainya tidak boleh melewati `1.50`.

Evaluasi dilakukan secara periodik, yaitu setiap akhir `wave` atau setiap `30 detik`. Penyesuaian tidak dilakukan setiap frame karena perubahan yang terlalu cepat akan terasa tidak stabil dan sulit di-debug. Dengan evaluasi periodik, sistem memiliki waktu untuk mengumpulkan sinyal performa yang lebih bermakna sebelum mengubah kesulitan.

Hasil yang diharapkan dari aturan sederhana ini adalah perilaku game yang lebih adaptif. Pemain yang kuat akan menghadapi tantangan yang sedikit meningkat, pemain yang kesulitan akan mendapat ruang untuk pulih, dan pemain dengan performa sedang akan merasakan kesulitan yang relatif stabil.

### Inti yang Harus Ditekankan

- `skillScore` adalah sinyal performa pemain yang digunakan untuk mengambil keputusan penyesuaian.
- `difficultyMultiplier` diubah secara bertahap, yaitu naik atau turun sebesar `0.05`.
- Nilai `difficultyMultiplier` harus dibatasi antara `0.75` dan `1.50` agar tetap seimbang.
- Evaluasi dilakukan secara periodik, misalnya setiap akhir `wave` atau setiap `30 detik`, bukan setiap frame.

### Transisi ke Slide Berikutnya

Setelah aturan penyesuaian kesulitan dipahami, langkah berikutnya adalah memahami bagaimana `skillScore` itu sendiri dihitung. Slide berikutnya akan menunjukkan contoh `skillScore` untuk game survival sederhana.

---

## Slide 063 - Contoh Skill Score Praktikum

### Narasi

Pada slide ini, kita melihat cara menghitung **skill score** untuk game survival sederhana. **Skill score** adalah nilai tunggal yang menggambarkan seberapa baik pemain melakukan dalam suatu rentang waktu. Nilai ini penting karena menjadi dasar untuk menilai apakah pemain sedang kesulitan, bermain stabil, atau sudah terlalu mudah.

Untuk game survival, kita tidak cukup hanya melihat satu metrik. Pemain bisa saja bertahan lama, tetapi banyak menerima damage. Pemain juga bisa banyak membunuh musuh, tetapi nyawanya sudah sangat rendah. Karena itu, kita menggabungkan beberapa indikator menjadi satu nilai yang lebih seimbang.

Indikator yang digunakan adalah:

- `healthScore` menunjukkan kondisi nyawa pemain.
- `killScore` menunjukkan kemampuan pemain dalam menyelesaikan musuh.
- `damageScore` menunjukkan seberapa baik pemain menghindari damage.
- `survivalScore` menunjukkan seberapa lama pemain bertahan.

Rumus dasarnya adalah:

```text
healthScore = currentHealth / maxHealth
killScore = killsInWindow / expectedKills
damageScore = 1 - damageTakenInWindow / maxExpectedDamage
survivalScore = timeSurvived / targetSurvivalTime
```

Setiap nilai tersebut harus berada dalam rentang `0` sampai `1`. Artinya, semua metrik dinormalisasi agar bisa dibandingkan. Misalnya, `healthScore` bernilai `1` jika nyawa penuh, dan bernilai `0` jika nyawa habis. `damageScore` bernilai tinggi jika damage yang diterima rendah, karena rumusnya menggunakan `1 - damageTakenInWindow / maxExpectedDamage`.

Setelah itu, keempat nilai tersebut digabungkan dengan bobot:

```text
skillScore =
0.35 × healthScore
+
0.30 × killScore
+
0.25 × damageScore
+
0.10 × survivalScore
```

Bobot ini menunjukkan prioritas desain. Pada contoh ini, kondisi nyawa diberi bobot terbesar, yaitu `0.35`. Kemampuan membunuh musuh diberi bobot `0.30`, kemampuan menghindari damage diberi bobot `0.25`, dan lama bertahan diberi bobot `0.10`. Total bobotnya adalah `1.00`, sehingga hasil akhir tetap berada dalam skala yang konsisten.

Dalam implementasi, nilai-nilai seperti `currentHealth`, `killsInWindow`, `damageTakenInWindow`, dan `timeSurvived` biasanya diperbarui selama permainan berjalan. Kemudian, `skillScore` dihitung pada interval evaluasi tertentu, misalnya setiap akhir wave atau setiap beberapa detik. Hasilnya adalah satu angka antara `0` dan `1` yang menggambarkan performa pemain secara keseluruhan.

Hal yang harus dipahami mahasiswa adalah bahwa `skillScore` bukan sekadar rumus matematika. Nilai ini adalah representasi performa pemain yang akan digunakan oleh sistem DDA. Jika `skillScore` tinggi, pemain dianggap mampu menghadapi tantangan lebih besar. Jika `skillScore` rendah, pemain dianggap membutuhkan bantuan agar tidak terlalu frustrasi.

### Inti yang Harus Ditekankan

- `skillScore` adalah agregat dari beberapa metrik performa pemain, bukan hanya satu metrik tunggal.
- Setiap komponen harus **dinormalisasi ke rentang `0`–`1`** agar bobot dapat dibandingkan secara adil.
- Bobot pada rumus menunjukkan **prioritas desain**, misalnya nyawa dan kemampuan membunuh musuh lebih penting daripada lama bertahan.
- Nilai `skillScore` menjadi **input untuk aturan DDA**, bukan langsung mengubah parameter musuh.

### Transisi ke Slide Berikutnya

Setelah `skillScore` terbentuk, langkah berikutnya adalah melihat bagaimana nilai tersebut digunakan untuk menyesuaikan kesulitan. Slide berikutnya akan membahas contoh adaptasi musuh, yaitu bagaimana difficulty multiplier memengaruhi HP, damage, dan spawn interval.

---

## Slide 064 - Contoh Adaptasi Enemy

### Narasi

Pada slide ini, kita melihat bagaimana hasil penilaian skill pemain diterjemahkan menjadi **adaptasi musuh** yang nyata dalam game. Nilai `difficultyMultiplier` bukan hanya angka internal; ia menjadi pengali yang mengubah parameter musuh secara konsisten. Intuisinya sederhana: jika pemain bermain baik, tantangan naik; jika pemain kesulitan, tekanan turun.

```text
Enemy Health
Enemy Damage
Spawn Interval
```

Secara praktis, hubungannya dapat ditulis sebagai:

```text
enemyHealth   = baseHealth * difficultyMultiplier
enemyDamage   = baseDamage * difficultyMultiplier
spawnInterval = baseSpawnInterval / difficultyMultiplier
```

Tiga parameter yang dipengaruhi adalah:

- **Enemy Health**: menentukan seberapa lama musuh bertahan.
- **Enemy Damage**: menentukan seberapa besar ancaman setiap serangan.
- **Spawn Interval**: menentukan seberapa cepat musuh baru muncul.

Perhatikan arah skalanya. `enemyHealth` dan `enemyDamage` biasanya **dikali** dengan multiplier, sehingga nilai yang lebih besar membuat musuh lebih kuat. Sebaliknya, `spawnInterval` biasanya **dibagi** dengan multiplier karena interval adalah durasi tunggu; semakin kecil nilainya, semakin cepat musuh muncul.

Contoh nilai dasarnya dapat dibaca dari tabel berikut:

| Difficulty | Enemy HP | Damage | Spawn Interval |
|---|---:|---:|---:|
| 0.75 | 75 | 7.5 | 6.0s |
| 1.00 | 100 | 10 | 4.5s |
| 1.25 | 125 | 12.5 | 3.6s |
| 1.50 | 150 | 15 | 3.0s |

Pada nilai `1.00`, game berada pada tingkat kesulitan dasar. Jika multiplier turun ke `0.75`, musuh memiliki HP lebih rendah, damage lebih kecil, dan muncul lebih lambat. Jika multiplier naik ke `1.50`, musuh menjadi lebih kuat dan muncul lebih sering.

Dalam implementasi sederhana, mahasiswa cukup menyimpan nilai dasar seperti `baseHealth`, `baseDamage`, dan `baseSpawnInterval`, lalu menerapkannya setiap kali musuh dibuat. Dengan cara ini, DDA tidak mengubah logika inti musuh secara acak, tetapi menyesuaikan kondisi lingkungan permainan secara terukur.

Yang harus dipahami sebelum lanjut adalah hubungan proporsional dan hubungan terbalik ini. Kesalahan umum adalah mengalikan `spawnInterval` dengan multiplier, padahal itu akan membuat musuh muncul lebih lambat ketika kesulitan seharusnya naik.

### Inti yang Harus Ditekankan

- `difficultyMultiplier` mengubah tantangan secara konsisten melalui parameter musuh.
- **HP** dan **damage** biasanya dikali multiplier; **spawn interval** biasanya dibagi multiplier.
- Nilai `1.00` adalah baseline; nilai di bawahnya membuat game lebih mudah, nilai di atasnya membuat game lebih sulit.
- Perubahan parameter harus terasa sebagai adaptasi yang halus, bukan lonjakan yang tidak dapat dijelaskan.

### Transisi ke Slide Berikutnya

Setelah parameter musuh dapat disesuaikan, langkah berikutnya adalah memastikan nilai-nilai tersebut dapat dilihat dan diperiksa saat praktikum, yaitu melalui **Debug UI DDA**.

---

## Slide 065 - Debug UI DDA

### Narasi

Pada tahap praktikum, sistem **Dynamic Difficulty Adjustment** tidak boleh hanya berjalan secara tersembunyi. Mahasiswa perlu melihat nilai internal yang sedang dihitung oleh game, sehingga bisa menilai apakah adaptasi berjalan sesuai aturan. Karena itu, slide ini menekankan pentingnya **debug UI** sederhana.

Debug UI berfungsi sebagai panel observasi. Panel ini menampilkan state penting dari sistem DDA, misalnya:

- `current health`
- `kills`
- `damage taken`
- `skill score`
- `difficulty multiplier`
- `spawn interval`
- `enemy count`
- `current adjustment`

Dengan nilai ini, mahasiswa dapat memeriksa hubungan antara performa pemain dan perubahan tantangan. Misalnya, jika `skill score` tinggi, `difficulty multiplier` dapat naik, lalu `spawn interval` menjadi lebih pendek. Sebaliknya, jika pemain sering menerima damage, sistem dapat menurunkan tekanan.

Contoh tampilan debug UI dapat dibuat sederhana seperti berikut:

```text
Skill Score: 0.72
Difficulty: 1.15
Spawn Interval: 3.9s
Adjustment: Increasing
```

Pada contoh ini, `Skill Score: 0.72` menunjukkan estimasi kemampuan pemain. Nilai `Difficulty: 1.15` adalah multiplier yang memengaruhi parameter musuh. `Spawn Interval: 3.9s` menunjukkan hasil perhitungan interval spawn setelah multiplier diterapkan. Sementara `Adjustment: Increasing` memberi tahu bahwa sistem sedang menaikkan tingkat kesulitan.

Bagian penting dari debug UI adalah konsistensi antara nilai yang ditampilkan dan logika DDA. Jika `Difficulty` naik tetapi `Spawn Interval` tidak berubah, ada kemungkinan bug pada perhitungan. Jika `Adjustment` menunjukkan `Increasing` tetapi `enemy count` tidak bertambah, mahasiswa perlu memeriksa aturan spawn atau batas maksimum musuh. Dengan kata lain, debug UI membantu menemukan kesalahan lebih cepat.

Dalam implementasi, nilai-nilai ini biasanya dibaca dari variabel global atau state manager, lalu ditampilkan melalui komponen teks di layar. Pembaruan UI sebaiknya dilakukan secara berkala, misalnya beberapa kali per detik, agar tidak membebani performa game. Tujuannya bukan membuat tampilan rumit, tetapi membuat proses adaptasi mudah diamati saat demo atau penilaian.

Sebelum lanjut, mahasiswa harus memahami bahwa debug UI adalah alat verifikasi. Tanpa panel ini, perubahan DDA hanya terasa sebagai “game menjadi lebih sulit” tanpa bukti yang jelas. Dengan debug UI, mahasiswa dapat menjelaskan alasan perubahan berdasarkan data.

### Inti yang Harus Ditekankan

- **Debug UI** membuat state DDA terlihat: `skill score`, `difficulty multiplier`, `spawn interval`, `enemy count`, dan `current adjustment`.
- Nilai yang ditampilkan harus konsisten dengan logika adaptasi, terutama hubungan antara multiplier dan parameter musuh.
- Panel ini membantu debug, demo, dan penilaian praktikum karena perubahan DDA dapat dijelaskan berdasarkan data, bukan hanya perasaan.

### Transisi ke Slide Berikutnya

Setelah nilai DDA dapat dibaca melalui teks, langkah berikutnya adalah membuat adaptasi lebih mudah dipahami secara visual. Slide berikutnya akan membahas visualisasi DDA menggunakan indikator atau level ancaman.

---

## Slide 066 - Visualisasi DDA

### Narasi

Pada slide ini, fokusnya adalah bagaimana **Dynamic Difficulty Adjustment** atau **DDA** ditampilkan secara visual.

Sebelumnya kita sudah melihat nilai numerik seperti `skill score`, `difficulty multiplier`, dan `spawn interval`. Nilai tersebut penting untuk debugging, tetapi saat demo, pengamat sering tidak sempat membaca angka satu per satu.

Karena itu, visualisasi DDA mengubah kondisi internal sistem menjadi sinyal yang lebih cepat dibaca. Misalnya, tingkat ancaman musuh dapat direpresentasikan dengan warna.

```text
Threat Level 1 = hijau
Threat Level 2 = kuning
Threat Level 3 = oranye
Threat Level 4 = merah
```

Pemetaan ini membantu pemain memahami bahwa musuh sedang lebih mudah atau lebih berbahaya tanpa perlu membuka panel debug. Warna `hijau` memberi kesan aman, `kuning` memberi peringatan ringan, `oranye` menunjukkan tekanan meningkat, dan `merah` menandakan kondisi sulit.

Selain warna, DDA juga bisa divisualisasikan dengan label tingkat gelombang.

```text
Wave Difficulty: Low / Medium / High
```

Label seperti `Low`, `Medium`, dan `High` cocok untuk game berbasis wave, karena pemain biasanya mengharapkan perubahan tantangan antar gelombang. Indikator ini dapat ditampilkan sebagai status gelombang atau penanda ancaman.

Intuisi praktisnya sederhana: **angka menjelaskan apa yang terjadi, warna menjelaskan seberapa cepat kondisi berubah**. Dalam konteks perilaku musuh, visualisasi membuat adaptasi sistem terasa lebih hidup dan mudah diamati.

Yang perlu dipahami mahasiswa adalah bahwa visualisasi DDA bukan sekadar dekorasi. Visual feedback adalah bagian dari komunikasi antara sistem adaptasi dan pemain. Jika indikator tidak jelas, perubahan difficulty bisa terasa acak. Jika indikator jelas, pemain dapat menyesuaikan strategi, misalnya lebih hati-hati saat ancaman berwarna merah.

### Inti yang Harus Ditekankan

- Visualisasi DDA membantu kondisi adaptasi dibaca lebih cepat daripada angka debug.
- Warna atau label seperti `Threat Level` dan `Wave Difficulty` dapat mewakili perubahan tingkat tantangan.
- Indikator visual harus konsisten dengan nilai internal sistem agar pemain tidak salah memahami tingkat kesulitan.
- Feedback visual membuat perilaku musuh yang menyesuaikan diri lebih mudah dipahami saat demo.

### Transisi ke Slide Berikutnya

Setelah nilai DDA dapat ditampilkan secara visual, langkah berikutnya adalah melihat bagaimana nilai tersebut masuk ke alur permainan secara utuh. Pada slide berikutnya, kita akan membahas **Game Loop Praktikum**, mulai dari spawn musuh, pencatatan performa, evaluasi difficulty, hingga penyesuaian parameter musuh untuk gelombang berikutnya.

---

## Slide 067 - Game Loop Praktikum

### Narasi

Slide ini menunjukkan bahwa **Dynamic Difficulty Adjustment** tidak berdiri sendiri sebagai fitur terpisah. Dalam praktikum, DDA perlu ditanam ke dalam **game loop** agar sistem benar-benar berjalan saat game dimainkan.

Intuisi awalnya sederhana: player bertahan melawan musuh, musuh muncul secara berkala, player mendapat `score` dari kill, sistem mencatat performa, `difficulty` berubah setiap interval, dan enemy berikutnya menyesuaikan `difficulty`. Dari sini mahasiswa perlu melihat bahwa ada **siklus umpan balik**: game mengumpulkan data, membuat keputusan, lalu mengubah perilaku musuh.

Alur utamanya dapat dilihat sebagai berikut:

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

Proses ini berjalan secara berulang:

1. `Start Wave` menjadi titik awal satu putaran permainan.
2. `Spawn Enemy` menghasilkan musuh yang akan dihadapi player.
3. `Track Performance` mencatat bagaimana player bermain, misalnya dari skor, kondisi bertahan, atau hasil interaksi dengan musuh.
4. `Evaluate Difficulty` menilai apakah performa player menunjukkan kesulitan yang perlu dinaikkan, diturunkan, atau dipertahankan.
5. `Adjust Enemy Parameters` mengubah parameter musuh untuk wave berikutnya.
6. `Next Wave` memulai ulang siklus dengan kondisi yang sudah disesuaikan.

Bagian penting yang harus dipahami adalah posisi `Track Performance` dan `Evaluate Difficulty`. Tanpa pencatatan performa, sistem tidak punya dasar untuk menyesuaikan `difficulty`. Tanpa evaluasi, data performa tidak berubah menjadi keputusan. Inilah inti dari **decision making** sederhana dalam sistem game: input berupa performa player, proses berupa penilaian, dan output berupa parameter musuh yang baru.

Dalam konteks NPC behavior, musuh tidak lagi muncul dengan pola tetap. Musuh menjadi bagian dari sistem adaptif yang merespons player. Artinya, perilaku musuh bukan hanya "muncul lalu bergerak", tetapi juga dipengaruhi oleh kondisi game yang sedang berjalan.

Untuk implementasi praktikum, mahasiswa cukup membangun loop ini terlebih dahulu sebelum memperumit logika musuh. Yang penting adalah memastikan setiap wave memiliki data performa, ada interval evaluasi, dan ada parameter musuh yang bisa diubah. Dengan struktur ini, DDA dapat diuji secara nyata tanpa harus langsung membuat sistem adaptasi yang kompleks.

### Inti yang Harus Ditekankan

- DDA berjalan sebagai **game loop**, bukan sekadar rumus atau pengaturan statis.
- `Track Performance` dan `Evaluate Difficulty` adalah dua tahap kunci yang mengubah data permainan menjadi keputusan adaptasi.
- `Adjust Enemy Parameters` menunjukkan bahwa musuh berikutnya adalah output dari penilaian performa player.
- Loop ini memberi dasar sederhana untuk **decision making** dan adaptasi NPC behavior dalam game.

### Transisi ke Slide Berikutnya

Setelah alur loop ini dipahami, langkah berikutnya adalah menerjemahkannya ke desain gameplay yang lebih konkret, yaitu contoh game praktikum dengan player, enemy, dan DDA yang saling terhubung.

---

## Slide 068 - Desain Gameplay Praktikum

### Narasi

Pada slide ini kita masuk ke **desain gameplay** yang akan digunakan dalam praktikum. Contoh yang dipilih adalah:

```text
Arena Survival
```

Pilihan ini sengaja dibuat sederhana karena mahasiswa perlu melihat langsung bagaimana **player**, **enemy**, dan **DDA** saling terhubung dalam satu sistem permainan yang dapat diamati.

Intuisi praktisnya adalah pemain berada di arena, musuh muncul, dan pemain harus bertahan selama mungkin. Dari situasi ini kita bisa mendapatkan sinyal performa yang jelas, misalnya pemain bertahan berapa lama, berapa musuh yang dikalahkan, berapa kali pemain terkena serangan, dan apakah pemain berhasil mengambil item kesehatan. Sinyal inilah yang menjadi bahan evaluasi untuk menyesuaikan tingkat kesulitan.

Peran **player** dalam desain ini cukup ringkas, tetapi sudah mewakili interaksi inti sekaligus menjadi sumber data performa:

- `move`: pemain berpindah posisi untuk mengatur jarak dan menghindari bahaya.
- `avoid enemy`: pemain membaca ancaman dan memilih jalur yang lebih aman.
- `attack enemy`: pemain mengurangi `HP` musuh dan menghasilkan peluang `kill`.
- `ambil health item`: pemain memulihkan kondisi agar tetap mampu bertahan.

Peran **enemy** juga dibuat sederhana agar mudah diimplementasikan:

- `detect player`: musuh mengenali keberadaan pemain dalam jangkauan tertentu.
- `chase player`: musuh bergerak mendekati pemain setelah mendeteksi.
- `attack`: musuh memberikan `damage` ketika berada dalam jarak serangan.
- memiliki `HP` dan `damage`: musuh dapat dikalahkan dan memiliki kekuatan yang dapat diubah.

Dari sisi perilaku NPC, struktur ini sudah cukup untuk membangun state sederhana, misalnya `detect`, `chase`, `attack`, dan `dead`. Yang perlu ditekankan adalah musuh tidak perlu terlalu pintar; yang penting perilakunya konsisten dan parameternya dapat dikendalikan oleh sistem kesulitan.

Bagian **DDA** pada slide ini menyatakan bahwa sistem akan **menyesuaikan kekuatan dan jumlah musuh** berdasarkan performa player. Dalam implementasi, ini bisa berarti mengubah nilai seperti `enemyCount`, `enemyDamage`, atau `enemyHP` pada gelombang berikutnya. Jika pemain tampil terlalu kuat, jumlah atau kekuatan musuh dapat ditingkatkan. Jika pemain kesulitan bertahan, sistem dapat menurunkan tekanan agar permainan tetap menantang tetapi tidak langsung mematikan.

Sebelum lanjut, mahasiswa perlu memahami tiga hal utama:

- desain gameplay harus memiliki **metrik performa** yang bisa diukur;
- harus ada **parameter difficulty** yang benar-benar memengaruhi gameplay;
- perubahan difficulty harus **terlihat oleh pemain**, misalnya musuh lebih banyak atau lebih kuat.

### Inti yang Harus Ditekankan

- `Arena Survival` dipilih karena sederhana, mudah diukur, dan cukup untuk menampilkan hubungan antara performa player dan penyesuaian difficulty.
- Aksi player seperti `move`, `avoid enemy`, `attack enemy`, dan `ambil health item` menjadi sumber sinyal performa.
- Enemy cukup memiliki perilaku dasar `detect`, `chase`, `attack`, serta parameter `HP` dan `damage` yang dapat disesuaikan.
- DDA pada desain ini berarti mengubah kekuatan dan jumlah musuh berdasarkan evaluasi performa player.

### Transisi ke Slide Berikutnya

Setelah desain dasar `Arena Survival` dipahami, kita dapat melihat alternatif gameplay lain yang tetap memenuhi syarat yang sama: ada metrik performa, ada enemy, ada parameter difficulty, dan ada perubahan yang terlihat.

---

## Slide 069 - Alternatif Gameplay Praktikum

### Narasi

Pada slide ini, kita perlu memahami bahwa praktikum **Dynamic Difficulty Adjustment** tidak harus selalu menggunakan **Arena Survival**. Bentuk game dapat diganti dengan alternatif lain selama inti mekaniknya tetap mendukung pengamatan performa pemain dan penyesuaian kesulitan.

Beberapa alternatif yang bisa dipilih adalah:

```text
Dungeon room survival
Top-down shooter
Robot training arena
```

Setiap alternatif memiliki karakter berbeda. **Dungeon room survival** cocok untuk latihan pergerakan dan tekanan musuh di ruang terbatas. **Top-down shooter** lebih menekankan akurasi, jarak, dan tempo pertempuran. **Robot training arena** dapat digunakan bila mahasiswa ingin membingkai enemy sebagai agen yang dievaluasi dalam lingkungan simulasi.

Yang paling penting bukan tema visualnya, melainkan adanya empat elemen dasar:

- **metrik performa** pemain,
- **enemy** yang dapat berperilaku dan memberi tantangan,
- **parameter difficulty** yang dapat diubah,
- **perubahan yang terlihat** oleh pemain atau pengembang.

Tanpa metrik performa, sistem tidak punya dasar untuk menilai apakah pemain kesulitan atau terlalu mudah. Tanpa parameter difficulty, tidak ada yang bisa disesuaikan. Tanpa perubahan yang terlihat, DDA hanya menjadi perhitungan internal tanpa dampak gameplay.

Sebelum lanjut, mahasiswa perlu memastikan bahwa alternatif yang dipilih cukup sederhana untuk dicoba di Unity, memiliki data yang bisa dicatat, dan memungkinkan perubahan parameter enemy secara langsung.

### Inti yang Harus Ditekankan

- Alternatif gameplay boleh berbeda, tetapi harus mendukung **DDA**.
- Empat syarat utama: **metrik performa**, **enemy**, **parameter difficulty**, dan **perubahan yang terlihat**.
- Tema game tidak menentukan keberhasilan; yang menentukan adalah apakah sistem dapat mengukur, menghitung, dan menyesuaikan kesulitan.

### Transisi ke Slide Berikutnya

Setelah memahami alternatif gameplay yang layak digunakan, kita lanjut ke gambaran umum praktikum **Adaptive Enemy Difficulty**, yaitu alur kerja yang akan menjadi acuan implementasi.

---

## Slide 070 - Praktikum Pertemuan 11: Gambaran Umum

### Narasi

Pada slide ini kita memasuki gambaran umum praktikum pertemuan 11. Judul praktikumnya adalah **Adaptive Enemy Difficulty**, yaitu bentuk sederhana dari **Dynamic Difficulty Adjustment** atau **DDA**. Intuisi utamanya sederhana: game tidak harus selalu memberikan tantangan yang sama untuk semua pemain. Jika pemain terlihat kesulitan, sistem dapat menurunkan tekanan. Jika pemain terlihat sangat menguasai, sistem dapat menaikkan tantangan secara bertahap.

Dalam konteks perilaku enemy, tujuan praktikum ini adalah membangun loop umpan balik yang bisa diamati. Pemain melakukan aksi, sistem mencatat metrik performa, metrik tersebut diubah menjadi nilai `skillScore`, lalu nilai itu digunakan untuk mengatur `difficultyMultiplier`. Multiplier inilah yang kemudian memengaruhi parameter enemy, sehingga perubahan difficulty tidak hanya terasa, tetapi juga dapat dicek secara teknis.

Target praktikum dapat dirangkum sebagai berikut:

- membuat enemy sederhana yang parameternya bisa diatur,
- mencatat performa player secara berkala,
- menghitung `skillScore` dari metrik yang relevan,
- mengatur `difficultyMultiplier` berdasarkan `skillScore`,
- mengubah parameter enemy yang memengaruhi tingkat kesulitan,
- menampilkan `DebugUI` agar nilai-nilai adaptasi terlihat.

Poin penting yang harus dipahami mahasiswa sebelum masuk ke implementasi adalah pemisahan tanggung jawab. Pencatatan performa, perhitungan skill, penyesuaian difficulty, dan tampilan debug sebaiknya tidak dicampur dalam satu komponen. Dengan pemisahan ini, mahasiswa dapat menguji setiap bagian secara terpisah: apakah metrik player benar, apakah `skillScore` masuk akal, apakah `difficultyMultiplier` tidak melompat terlalu ekstrem, dan apakah parameter enemy benar-benar berubah sesuai nilai yang diharapkan.

Secara alur, praktikum ini dapat dibayangkan sebagai pipeline sederhana:

```text
Performa Player -> Metrik -> skillScore -> difficultyMultiplier -> Parameter Enemy -> DebugUI
```

Alur ini penting karena **DDA** bukan sekadar membuat enemy lebih cepat atau lebih kuat. DDA adalah sistem yang membaca kondisi pemain, mengambil keputusan adaptif, lalu menerapkan perubahan yang terukur. Detail teknis dan langkah implementasi akan dibahas pada modul praktikum terpisah, sehingga pada slide ini mahasiswa cukup memahami tujuan, komponen utama, dan bentuk umpan balik yang akan dibangun.

### Inti yang Harus Ditekankan

- **Adaptive Enemy Difficulty** adalah penerapan sederhana dari **DDA**: tantangan enemy disesuaikan berdasarkan performa player.
- Loop utamanya adalah `Performa Player -> skillScore -> difficultyMultiplier -> Parameter Enemy`.
- Enemy harus cukup sederhana agar perubahan difficulty mudah diamati, diuji, dan divalidasi.
- `DebugUI` penting untuk melihat nilai `skillScore`, `difficultyMultiplier`, dan parameter enemy secara real-time.
- Fokus praktikum bukan membuat perilaku enemy yang sangat kompleks, tetapi membangun pipeline pengukuran dan penyesuaian yang jelas.

### Transisi ke Slide Berikutnya

Setelah memahami gambaran umum dan target praktikum, langkah berikutnya adalah melihat struktur script yang akan digunakan. Struktur ini akan membantu mahasiswa memahami komponen mana yang bertanggung jawab untuk mencatat performa, mengelola difficulty, dan mengatur enemy.

---

## Slide 071 - Struktur Script Praktikum

### Narasi

Pada slide ini kita melihat **struktur script** yang akan digunakan dalam praktikum **Dynamic Difficulty Adjustment**. Struktur ini penting karena menunjukkan bahwa sistem DDA tidak ditulis dalam satu script besar, tetapi dibagi menjadi beberapa komponen yang saling bekerja. Pembagian ini membuat alur data lebih jelas: data performa pemain dikumpulkan, dievaluasi, lalu digunakan untuk mengatur perilaku musuh.

```text
Scripts/
├── PlayerController.cs
├── PlayerHealth.cs
├── PlayerPerformanceTracker.cs
├── DifficultyManager.cs
├── EnemySpawner.cs
├── EnemyAI.cs
├── EnemyHealth.cs
├── EnemyAttack.cs
├── LootDrop.cs
└── DDADebugUI.cs
```

Secara garis besar, script ini dapat dikelompokkan menjadi beberapa peran.

- **Pemain** : `PlayerController.cs` dan `PlayerHealth.cs` menangani gerakan serta kondisi pemain.
- **Pengukuran performa** : `PlayerPerformanceTracker.cs` mencatat sinyal performa pemain yang akan digunakan sebagai dasar penilaian.
- **Pengaturan kesulitan** : `DifficultyManager.cs` menjadi pusat keputusan DDA. Komponen ini membaca hasil pengukuran dan menentukan penyesuaian tantangan.
- **Musuh** : `EnemySpawner.cs`, `EnemyAI.cs`, `EnemyHealth.cs`, dan `EnemyAttack.cs` menangani penciptaan musuh, perilaku musuh, kesehatan, dan serangan.
- **Umpan balik** : `LootDrop.cs` dan `DDADebugUI.cs` membantu memberikan hasil interaksi serta menampilkan nilai kesulitan secara visual selama pengujian.

Fokus utama praktikum berada pada tiga komponen, yaitu `PlayerPerformanceTracker`, `DifficultyManager`, dan `EnemySpawner`. Ketiganya membentuk inti dari sistem adaptif. `PlayerPerformanceTracker` bertugas mengumpulkan data, `DifficultyManager` bertugas menginterpretasikan data tersebut, dan `EnemySpawner` menerjemahkan keputusan kesulitan menjadi perubahan nyata di dalam game.

Alur utama yang perlu dipahami mahasiswa dapat diringkas sebagai berikut.

1. `PlayerController` dan `PlayerHealth` menghasilkan kondisi pemain.
2. `PlayerPerformanceTracker` mencatat sinyal performa dari kondisi tersebut.
3. `DifficultyManager` mengevaluasi sinyal dan memutuskan tingkat kesulitan.
4. `EnemySpawner` menerjemahkan keputusan tersebut menjadi perubahan perilaku musuh.
5. `DDADebugUI` menampilkan nilai yang relevan agar penyesuaian dapat diamati.

Dengan alur ini, mahasiswa dapat melihat bahwa DDA bukan sekadar mengubah angka secara manual, tetapi merupakan proses yang menghubungkan **input perilaku pemain** dengan **output perilaku musuh**. `DDADebugUI` berperan penting karena membantu mahasiswa memverifikasi apakah sistem benar-benar menyesuaikan diri.

Sebelum masuk ke parameter, mahasiswa perlu memahami bahwa struktur script ini adalah fondasi. Tanpa pemisahan peran yang jelas, akan sulit membedakan mana data mentah, mana keputusan, dan mana eksekusi. Dengan struktur ini, mahasiswa dapat fokus pada logika adaptasi tanpa harus mencampur semua perilaku game ke dalam satu komponen.

### Inti yang Harus Ditekankan

- Struktur script menunjukkan **pemisahan tanggung jawab** antara pemain, pengukuran performa, keputusan kesulitan, musuh, dan debug UI.
- Tiga komponen inti praktikum adalah `PlayerPerformanceTracker`, `DifficultyManager`, dan `EnemySpawner`.
- Alur utama DDA adalah: **data performa pemain** → **evaluasi kesulitan** → **penyesuaian perilaku musuh**.
- `DDADebugUI` penting untuk memverifikasi bahwa penyesuaian kesulitan benar-benar terjadi dan dapat diamati.

### Transisi ke Slide Berikutnya

Setelah struktur script dipahami, langkah berikutnya adalah melihat parameter apa saja yang akan diatur oleh sistem, sehingga kita dapat menghubungkan keputusan `DifficultyManager` dengan perubahan nyata pada musuh.

---

## Slide 072 - Parameter Praktikum

### Narasi

Pada slide ini kita melihat **parameter dasar** praktikum **Dynamic Difficulty Adjustment** atau DDA. Parameter ini menjadi titik awal perilaku game sebelum sistem menyesuaikan kesulitan secara dinamis.

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

Secara intuitif, parameter ini dapat dikelompokkan menjadi dua bagian:

- **Statistik musuh dan spawn control**: `baseEnemyHealth`, `baseEnemyDamage`, `baseEnemySpeed`, `baseSpawnInterval`, dan `baseMaxEnemies` menentukan kekuatan musuh, kecepatan, ritme spawn, dan jumlah musuh maksimum.
- **Parameter penyesuaian kesulitan**: `minDifficulty`, `maxDifficulty`, `adjustmentStep`, dan `evaluationInterval` menentukan batas adaptasi, ukuran langkah perubahan, dan frekuensi evaluasi.

`minDifficulty = 0.75` dan `maxDifficulty = 1.50` memberi batas skala kesulitan. Nilai `0.75` berarti kesulitan dapat turun menjadi sekitar 75% dari baseline, sedangkan `1.50` berarti kesulitan dapat naik menjadi sekitar 150% dari baseline. Batas ini penting agar game tidak menjadi terlalu mudah atau terlalu sulit secara ekstrem.

`adjustmentStep = 0.05` menunjukkan perubahan yang dilakukan secara bertahap. Setiap evaluasi, nilai kesulitan hanya boleh naik atau turun sebesar langkah kecil tersebut. Pendekatan ini membuat perubahan terasa lebih natural dan tidak membuat pemain kaget.

`evaluationInterval = 30` menentukan jarak waktu antar evaluasi. Sistem tidak perlu mengubah kesulitan terus-menerus; cukup pada interval tertentu. Ini membuat perilaku DDA lebih stabil dan lebih mudah diamati.

Parameter dapat diubah dari **Unity Inspector** menggunakan atribut:

```csharp
[SerializeField]
```

Atribut ini membuat field dapat ditampilkan dan diedit di Inspector tanpa harus dibuat public. Dengan cara ini, mahasiswa dapat melakukan eksperimen tanpa harus membuka kode setiap kali ingin mengubah nilai.

Sebelum lanjut, mahasiswa perlu memahami bahwa parameter ini bukan sekadar angka acak. Nilai `base...` adalah kondisi awal, nilai `min` dan `max` adalah batas aman, `adjustmentStep` adalah kecepatan adaptasi, dan `evaluationInterval` adalah frekuensi pengambilan keputusan.

### Inti yang Harus Ditekankan

- Parameter `base...` menentukan baseline kekuatan musuh dan ritme spawn.
- `minDifficulty` dan `maxDifficulty` membatasi rentang adaptasi agar tetap seimbang.
- `adjustmentStep` dan `evaluationInterval` menentukan seberapa halus dan seberapa sering DDA bekerja.
- `[SerializeField]` membuat parameter dapat diubah langsung dari Unity Inspector.

### Transisi ke Slide Berikutnya

Setelah parameter dasar dipahami, langkah berikutnya adalah mencoba variasi parameter tersebut untuk melihat pengaruhnya terhadap pengalaman bermain.

---

## Slide 073 - Eksperimen Mahasiswa

### Narasi

Slide ini mengarahkan mahasiswa untuk melakukan **eksperimen** pada sistem **Dynamic Difficulty Adjustment** yang sudah dibangun. Tujuannya bukan hanya menjalankan game, tetapi mengamati bagaimana perubahan parameter memengaruhi perilaku musuh dan pengalaman bermain.

Eksperimen dapat dikelompokkan menjadi beberapa fokus utama.

- **Frekuensi evaluasi**: mengubah `evaluationInterval` untuk melihat seberapa sering sistem membaca performa pemain.
- **Kecepatan adaptasi**: mengubah `adjustmentStep` untuk menguji apakah perubahan difficulty terlalu lambat, terlalu cepat, atau cukup stabil.
- **Batas difficulty**: mengubah `minDifficulty` dan `maxDifficulty` agar sistem tidak keluar dari rentang yang aman.
- **Metrik penilaian**: mencoba hanya `health` sebagai metrik, lalu membandingkannya dengan **multi-metrik skill score**.
- **Target adaptasi**: menyesuaikan hanya `spawn interval`, atau menyesuaikan `enemy health` dan `enemy damage`.
- **Penanganan kondisi khusus**: menambahkan **health drop adaptation** ketika pemain mengalami penurunan kondisi.
- **Analisis hasil**: membandingkan **static difficulty** dan **dynamic difficulty**, lalu menampilkan grafik perubahan difficulty sederhana.

Dalam praktik, mahasiswa sebaiknya mengubah satu variabel pada satu waktu. Dengan cara ini, pengaruh setiap parameter terhadap gameplay dapat diamati lebih jelas. Misalnya, jika `adjustmentStep` diperbesar, difficulty bisa berubah lebih cepat; jika `evaluationInterval` diperkecil, sistem lebih responsif tetapi juga lebih sensitif terhadap fluktuasi performa.

Hal penting yang harus dipahami adalah bahwa DDA bukan sekadar membuat musuh lebih kuat atau lebih lemah. DDA bertujuan menjaga **flow** permainan, yaitu menjaga pemain tetap tertantang tanpa merasa frustrasi. Oleh karena itu, setiap eksperimen harus dinilai dari dua sisi: stabilitas nilai difficulty dan kualitas pengalaman bermain.

Sebelum lanjut ke evaluasi, mahasiswa perlu memastikan bahwa perubahan difficulty dapat dilihat, diukur, dan dijelaskan. Tanpa observasi yang jelas, sulit menentukan apakah adaptasi bekerja sesuai tujuan.

### Inti yang Harus Ditekankan

- Eksperimen DDA dilakukan dengan **mengubah parameter secara terkontrol**, bukan hanya mencoba tanpa tujuan.
- Parameter seperti `evaluationInterval`, `adjustmentStep`, `minDifficulty`, `maxDifficulty`, dan metrik skill score memengaruhi **kecepatan, stabilitas, dan batas adaptasi**.
- Mahasiswa perlu membandingkan **static difficulty** dan **dynamic difficulty** untuk memahami manfaat adaptasi.
- Hasil eksperimen harus dapat diamati melalui perubahan gameplay dan, bila memungkinkan, grafik difficulty.

### Transisi ke Slide Berikutnya

Setelah mahasiswa melakukan eksperimen, langkah berikutnya adalah mengevaluasi apakah sistem DDA benar-benar bekerja secara stabil, adil, dan tetap menyenangkan.

---

## Slide 074 - Evaluasi Praktikum

### Narasi

Setelah mahasiswa mencoba beberapa konfigurasi DDA, langkah berikutnya adalah mengevaluasi apakah sistem adaptasi benar-benar bekerja sesuai tujuan. Fokusnya bukan hanya memastikan `difficulty multiplier` berubah, tetapi memastikan perubahan tersebut **masuk akal**, **stabil**, dan **terasa adil** bagi player.

Untuk melakukan evaluasi, mahasiswa dapat memeriksa beberapa aspek berikut:

1. **Pencatatan performa player**  
   Apakah game mencatat data performa player dengan benar? Jika data tidak valid, `skill score` tidak dapat dipercaya.

2. **Responsivitas `skill score`**  
   Apakah `skill score` berubah sesuai kondisi player? Nilai ini harus meningkat saat player dominan dan menurun saat player kesulitan.

3. **Stabilitas `difficulty multiplier`**  
   Apakah `difficulty multiplier` berubah stabil dan tidak terlalu cepat? Perubahan yang terlalu cepat membuat gameplay terasa tidak konsisten.

4. **Arah adaptasi dan batas nilai**  
   Apakah enemy menjadi lebih sulit saat player dominan, dan lebih mudah saat player kesulitan? Nilai difficulty juga harus memiliki batas minimum dan maksimum.

5. **Debug UI dan pengalaman main**  
   Apakah debug UI cukup jelas untuk mengamati perubahan? Gameplay tetap harus menyenangkan, dan adaptasi harus terasa adil, bukan seperti sistem yang tiba-tiba menghukum atau menolong player.

Dengan evaluasi ini, mahasiswa dapat memastikan bahwa DDA tidak hanya mengubah angka, tetapi juga menjaga keseimbangan gameplay.

### Inti yang Harus Ditekankan

- `skill score` harus berasal dari data performa player yang valid dan konsisten.
- `difficulty multiplier` harus berubah stabil, tidak terlalu cepat, dan tetap berada dalam batas yang aman.
- Arah adaptasi harus sesuai: player dominan membuat challenge meningkat, player kesulitan membuat challenge menurun.
- Debug UI penting untuk observasi, tetapi tidak boleh mengganggu atau membuat adaptasi terasa tidak adil.
- Tujuan akhir DDA adalah menjaga keseimbangan gameplay, bukan sekadar mengubah angka.

### Transisi ke Slide Berikutnya

Jika hasil evaluasi menunjukkan perubahan yang terlalu cepat, batas yang tidak jelas, atau adaptasi yang tidak terasa, kita akan membahas kesalahan umum implementasi DDA.

---

## Slide 075 - Kesalahan Umum Implementasi DDA

### Narasi

Pada slide ini, kita membahas **kesalahan umum implementasi DDA**. Tujuannya bukan hanya membuat nilai `difficulty` berubah, tetapi memastikan perubahan itu **stabil, adil, dan tidak merusak pengalaman bermain**.

DDA yang baik seharusnya terasa seperti **penyesuaian halus** terhadap tantangan game. Jika implementasinya salah, pemain bisa merasa game tiba-tiba terlalu sulit, terlalu mudah, tidak konsisten, atau bahkan curang.

Berikut kesalahan yang perlu dihindari:

1. **Difficulty berubah setiap frame.**  
   Jika `difficultyMultiplier` diperbarui setiap frame, nilai bisa terlalu cepat berubah dan terasa tidak stabil. Perubahan sebaiknya dilakukan berdasarkan **interval evaluasi** atau **evaluation window**, misalnya setiap beberapa detik atau setelah beberapa kondisi gameplay tercapai.

2. **Tidak ada batas minimum dan maksimum.**  
   Nilai `difficulty` harus dibatasi dengan `minDifficulty` dan `maxDifficulty`. Tanpa batas, sistem bisa membuat game terlalu mudah atau terlalu sulit secara ekstrem.

3. **Semua parameter enemy dinaikkan sekaligus.**  
   Menambah `enemyHealth`, `enemySpeed`, `enemyDamage`, dan `spawnRate` secara bersamaan bisa membuat perubahan terlalu mencolok. Lebih baik ubah parameter secara **selektif** dan bertahap.

4. **Tidak ada smoothing atau evaluation window.**  
   Tanpa smoothing, perubahan difficulty bisa terlalu tajam. Dengan **smoothing**, nilai baru dicampur perlahan dengan nilai sebelumnya sehingga transisi lebih natural.

5. **Skill score tidak dinormalisasi.**  
   `skillScore` harus berada dalam skala yang konsisten. Jika tidak dinormalisasi, nilai bisa terlalu kecil, terlalu besar, atau tidak sebanding dengan parameter difficulty.

6. **Player dihukum karena bermain baik.**  
   Jika pemain bermain bagus lalu difficulty naik terlalu cepat, pemain bisa merasa dihukum. Peningkatan difficulty harus terasa sebagai **tantangan lanjutan**, bukan hukuman mendadak.

7. **Game menjadi terlalu mudah setelah player terkena damage sedikit.**  
   Sistem tidak boleh terlalu reaktif terhadap satu kejadian kecil. Jika pemain terkena damage sedikit lalu difficulty langsung turun drastis, gameplay bisa terasa tidak adil.

8. **Debug UI tidak tersedia.**  
   Tanpa debug UI, sulit memantau nilai `skillScore`, `difficultyMultiplier`, dan parameter enemy yang berubah. Debug UI membantu developer memastikan adaptasi berjalan sesuai desain.

9. **Adaptasi tidak terasa dalam gameplay.**  
   Jika perubahan terlalu kecil atau terlalu lambat, pemain tidak merasakan adanya penyesuaian. DDA harus cukup berpengaruh untuk mengubah tantangan, tetapi tidak sampai mengganggu keseimbangan.

10. **Adaptasi terlalu jelas dan terasa curang.**  
   Jika enemy tiba-tiba jauh lebih cepat, lebih kuat, atau lebih agresif tanpa alasan yang jelas, pemain bisa merasa game curang. Perubahan harus terasa **wajar** dan selaras dengan kondisi gameplay.

Intinya, DDA bukan hanya soal mengubah angka. Yang penting adalah **kapan**, **seberapa besar**, dan **bagaimana** perubahan itu dirasakan oleh pemain.

### Inti yang Harus Ditekankan

- **Jangan ubah difficulty setiap frame**; gunakan interval evaluasi atau evaluation window.
- **Selalu beri batas** `minDifficulty` dan `maxDifficulty` agar sistem tidak keluar dari range yang aman.
- **Gunakan smoothing** agar perubahan difficulty terasa halus dan tidak mendadak.
- **Normalisasi `skillScore`** agar nilai pemain bisa dibandingkan secara konsisten.
- **Ubah parameter enemy secara selektif**, bukan semuanya sekaligus.
- **Debug UI sangat penting** untuk memantau perilaku DDA selama pengujian.
- Adaptasi harus **terasa dalam gameplay**, tetapi tidak boleh terasa **curang** atau menghukum pemain.

### Transisi ke Slide Berikutnya

Setelah memahami kesalahan umum dalam implementasi DDA, kita perlu melihat batasannya: DDA tidak bisa berdiri sendiri. Selanjutnya, kita akan membahas hubungan antara DDA dan balancing manual.

---

## Slide 076 - DDA dan Balancing

### Narasi

Pada slide ini, kita perlu menegaskan satu hal: **Dynamic Difficulty Adjustment** atau **DDA** bukan pengganti **balancing manual**. DDA adalah lapisan adaptasi yang bekerja di atas desain game yang sudah ada. Ia membantu menyesuaikan pengalaman pemain, tetapi fondasi tantangan tetap harus dibangun oleh developer.

Sebelum DDA digunakan, developer tetap perlu menetapkan beberapa hal penting:

- **Base difficulty** atau `baseDifficulty`, yaitu titik awal tantangan yang dianggap wajar untuk mayoritas pemain.
- **Range adaptasi**, misalnya `minDifficulty` dan `maxDifficulty`, agar game tidak menjadi terlalu mudah atau terlalu sulit.
- **Parameter yang boleh disesuaikan**, seperti `enemySpeed`, `enemyDamage`, `spawnRate`, atau `resourceDrop`, dengan batas yang jelas.
- **Uji gameplay** untuk memastikan perubahan parameter tidak merusak ritme, fairness, atau fun.
- **Kebijakan fairness**, sehingga adaptasi tidak terasa seperti hukuman atau bantuan yang tidak wajar.

Dengan kata lain, DDA boleh mengubah perilaku NPC atau tekanan gameplay, tetapi hanya dalam koridor yang sudah dirancang. Jika semua parameter dinaikkan atau diturunkan secara bebas, game akan terasa tidak konsisten dan sulit diprediksi.

Poin yang harus dipahami mahasiswa adalah bahwa DDA tidak boleh digunakan untuk menutupi desain game yang buruk. Jika level terlalu sulit karena desain, atau terlalu mudah karena kurva tantangan lemah, DDA hanya akan menutupi gejala. DDA yang baik membuat game terasa lebih responsif terhadap pemain, bukan membuat desain yang lemah menjadi seolah-olah sudah seimbang.

### Inti yang Harus Ditekankan

- **DDA bukan pengganti balancing manual**, melainkan lapisan adaptasi di atas desain yang sudah ada.
- Developer tetap harus menentukan **base difficulty**, **range adaptasi**, parameter yang boleh diubah, hasil uji gameplay, dan prinsip **fairness**.
- DDA membantu menyesuaikan pengalaman pemain, tetapi tidak boleh digunakan untuk menutupi desain game yang buruk.

### Transisi ke Slide Berikutnya

Setelah memahami bahwa DDA harus berdiri di atas balancing yang sehat, langkah berikutnya adalah melihat bagaimana data gameplay dapat mendukung keputusan adaptasi. Pada slide berikutnya, kita akan membahas hubungan DDA dengan data analytics sebagai dasar evaluasi desain dan pemahaman perilaku pemain.

---

## Slide 077 - DDA dan Data Analytics

### Narasi

Pada slide ini, kita melangkah dari penyesuaian kesulitan ke arah pemanfaatan data. **Dynamic Difficulty Adjustment** tidak hanya mengubah tantangan secara langsung, tetapi juga menghasilkan jejak perilaku pemain yang dapat dianalisis. Dengan kata lain, setiap perubahan difficulty, kematian, atau keberhasilan pemain dapat menjadi sinyal untuk memahami apakah game terlalu mudah, terlalu sulit, atau sudah berada pada titik yang tepat.

Data yang dikumpulkan biasanya berupa metrik gameplay yang terukur. Beberapa contoh yang penting adalah:

- `survival_time` atau waktu bertahan,
- `death_count` atau jumlah kematian,
- `damage_taken` atau damage yang diterima,
- `enemy_killed` atau jumlah musuh yang dikalahkan,
- `difficulty_history` atau riwayat tingkat kesulitan,
- `item_usage` atau penggunaan item.

Metrik ini penting karena memberikan gambaran yang lebih objektif daripada sekadar kesan subjektif. Misalnya, jika `death_count` tinggi tetapi `enemy_killed` juga tinggi, pemain mungkin bermain agresif dan berani mengambil risiko. Sebaliknya, jika `survival_time` pendek dan `damage_taken` besar, pemain mungkin kesulitan memahami mekanisme musuh atau kontrol.

Data tersebut kemudian dapat digunakan untuk beberapa tujuan utama:

- **balancing**, untuk memperbaiki kurva kesulitan,
- **player modeling**, untuk mengenali pola bermain pemain,
- **adaptive content**, untuk menyesuaikan konten atau tantangan secara lebih personal,
- **evaluasi game design**, untuk menilai apakah desain level, musuh, atau reward sudah efektif.

Dalam konteks game cerdas, data ini menjadi jembatan antara perilaku pemain dan keputusan desain. Sistem DDA dapat membaca kondisi pemain, lalu memilih parameter yang lebih sesuai, misalnya menurunkan agresi musuh, menambah hint, atau menyesuaikan `spawn_rate`. Namun, yang perlu dipahami adalah bahwa data ini tidak otomatis “mengerti” pemain; ia hanya menyediakan bahan untuk membangun model dan kebijakan adaptasi yang lebih baik.

Sebelum lanjut ke pertemuan berikutnya, mahasiswa perlu memahami bahwa DDA berbasis data bukan hanya soal membuat game lebih mudah atau lebih sulit. Ia adalah proses pengumpulan sinyal, interpretasi sinyal, dan pengambilan keputusan adaptasi. Pemahaman ini akan menjadi dasar ketika kita membahas player modeling, di mana fokusnya bukan hanya performa saat ini, tetapi karakter bermain pemain secara lebih luas.

### Inti yang Harus Ditekankan

- DDA menghasilkan data perilaku pemain yang dapat dianalisis.
- Metrik seperti `death_count`, `damage_taken`, dan `difficulty_history` membantu menilai tantangan secara objektif.
- Data ini berguna untuk balancing, player modeling, adaptive content, dan evaluasi desain game.
- DDA berbasis data adalah jembatan menuju pemahaman player yang lebih luas.

### Transisi ke Slide Berikutnya

Selanjutnya, kita akan melihat bagaimana data dari DDA dapat dikembangkan menjadi **player modeling**, yaitu cara memahami gaya bermain dan karakteristik pemain, bukan hanya performa sesaat.

---

## Slide 078 - Hubungan dengan Player Modeling

### Narasi

Pada slide ini kita memisahkan dua hal yang sering dianggap sama: **DDA** dan **player modeling**. `DDA` menilai kondisi performa pemain pada momen tertentu, misalnya apakah pemain sedang kesulitan, terlalu cepat, atau sering gagal. Ia bersifat reaktif dan biasanya digunakan untuk menyesuaikan parameter permainan secara langsung.

`Player modeling` memiliki cakupan yang lebih luas. Sistem ini tidak hanya bertanya “apakah pemain kesulitan sekarang?”, tetapi juga mencoba memahami pola perilaku pemain secara lebih stabil: gaya bermain, preferensi, kebiasaan, dan kecenderungan yang muncul dari waktu ke waktu.

Contoh perbedaannya dapat dilihat pada potongan berikut:

```text
DDA:
Player sedang kesulitan sekarang.

Player Modeling:
Player cenderung agresif, sering menyerang, jarang bertahan.
```

Pada baris pertama, `DDA` menghasilkan sinyal sesaat. Sinyal ini bisa dipakai untuk menurunkan jumlah musuh, memberi item bantuan, atau mengubah parameter tantangan. Pada baris kedua, `player modeling` menghasilkan gambaran karakter pemain. Gambaran ini lebih berguna untuk keputusan jangka menengah, misalnya bagaimana NPC memilih strategi, apa jenis konten yang lebih sesuai, atau bagaimana sistem menyesuaikan pengalaman tanpa hanya bereaksi pada satu momen.

Perbedaan penting yang harus dipahami mahasiswa adalah:

- **DDA** berfokus pada **state saat ini** dan biasanya menghasilkan **parameter adaptif** yang cepat.
- **Player modeling** berfokus pada **pola perilaku** dan menghasilkan **profil pemain** yang lebih persisten.
- Keduanya dapat bekerja bersama: `DDA` memberi sinyal instan, sedangkan `player modeling` memberi konteks yang lebih dalam.

Sebelum lanjut, mahasiswa perlu memahami bahwa `player modeling` bukan pengganti `DDA`, melainkan lapisan pemahaman tambahan. `DDA` menjawab “apa yang perlu diubah sekarang?”, sedangkan `player modeling` membantu menjawab “siapa pemain ini dan bagaimana ia cenderung bermain?”.

### Inti yang Harus Ditekankan

- **DDA** menilai performa pemain pada kondisi saat ini.
- **Player modeling** memahami karakter dan pola perilaku pemain secara lebih luas.
- `DDA` bersifat reaktif dan sesaat, sedangkan `player modeling` menghasilkan profil yang lebih stabil.
- Keduanya dapat saling melengkapi dalam sistem adaptif game.

### Transisi ke Slide Berikutnya

Setelah memahami bahwa `DDA` dapat bekerja dengan `player modeling`, kita akan melihat bagaimana `DDA` berhubungan dengan **PCG**, yaitu proses menghasilkan konten game secara prosedural.

---

## Slide 079 - Hubungan dengan PCG

### Narasi

Pada slide ini kita melihat hubungan antara **DDA** dan **PCG**. Jika **DDA** bertugas menilai seberapa sulit pengalaman yang dibutuhkan player, maka **PCG** bertugas mewujudkan keputusan tersebut menjadi konten nyata di dalam game.

Intuisinya sederhana: **DDA** menentukan *target*, sedangkan **PCG** menentukan *bentuk*. **DDA** tidak perlu tahu detail geometri room atau posisi setiap musuh; ia cukup menghasilkan parameter seperti `difficulty = tinggi`. Setelah itu, **PCG** menggunakan parameter tersebut untuk menyusun konten yang sesuai.

Contoh alurnya dapat dilihat sebagai berikut:

```text
DDA menentukan difficulty = tinggi
        ↓
PCG membuat room dengan lebih banyak enemy
        ↓
Loot lebih sedikit
        ↓
Path lebih kompleks
```

Dalam alur ini, inputnya adalah parameter kesulitan yang dihasilkan **DDA**. Prosesnya adalah **PCG** mengubah parameter tersebut menjadi keputusan konten, misalnya jumlah `enemy`, jumlah `loot`, dan kompleksitas `path`. Outputnya adalah ruang permainan yang lebih menantang secara struktural, bukan hanya secara angka statistik.

Poin penting yang harus dipahami mahasiswa adalah bahwa **DDA** dan **PCG** bekerja pada lapisan yang berbeda. **DDA** menjawab pertanyaan “seberapa sulit game harus menjadi sekarang?”, sedangkan **PCG** menjawab pertanyaan “bagaimana konten yang dihasilkan agar sesuai dengan tingkat kesulitan itu?”. Kombinasi keduanya memungkinkan game menghasilkan pengalaman adaptif tanpa harus membuat seluruh konten secara manual.

Sebelum lanjut, pastikan mahasiswa memahami bahwa parameter DDA dapat menjadi input untuk sistem konten. Dengan cara ini, adaptasi kesulitan tidak hanya mengubah nilai musuh, tetapi juga mengubah struktur level, jalur, dan reward yang player hadapi.

### Inti yang Harus Ditekankan

- **DDA** menentukan parameter kesulitan, sedangkan **PCG** menghasilkan konten berdasarkan parameter tersebut.
- Contoh parameter seperti `difficulty = tinggi` dapat diterjemahkan menjadi lebih banyak `enemy`, lebih sedikit `loot`, dan `path` yang lebih kompleks.
- Kombinasi **DDA** dan **PCG** memungkinkan pengalaman bermain yang adaptif dan lebih variatif.

### Transisi ke Slide Berikutnya

Setelah melihat hubungan DDA dengan player modeling dan PCG, kita akan merangkum seluruh konsep DDA yang telah dibahas hari ini.

---

## Slide 080 - Ringkasan Materi

### Narasi

Slide ini menutup pertemuan dengan merangkum alur **Dynamic Difficulty Adjustment** yang telah kita bahas. Intinya, DDA bukan sekadar menaikkan atau menurunkan kesulitan secara acak, tetapi membangun sistem adaptif yang membaca kondisi pemain, mengubahnya menjadi ukuran yang dapat dibandingkan, lalu menerapkannya ke parameter gameplay secara terkendali.

Alur utamanya dapat dilihat sebagai pipeline:

1. **Player Performance** mengamati perilaku pemain, misalnya keberhasilan, kegagalan, waktu, atau tekanan yang dialami.
2. **Performance Metrics** memilih indikator yang relevan dan dapat diukur.
3. **Normalization** membuat metrik dari sumber berbeda dapat dibandingkan.
4. **Skill Score** merangkum kemampuan pemain menjadi nilai yang stabil.
5. **Difficulty Model** menentukan target kesulitan yang sesuai.
6. **Adaptive Gameplay** menerjemahkan target tersebut ke perubahan yang terasa alami.
7. **Rubber Banding** menjaga jarak antara pemain dan tantangan agar tidak terlalu jauh.
8. **Parameter Adaptation** memilih parameter yang boleh diubah, seperti perilaku musuh atau spawner.
9. **Smoothing** mencegah perubahan mendadak.
10. **Evaluation Window** memastikan keputusan didasarkan pada rentang waktu yang cukup.
11. **Difficulty Multiplier** menjadi nilai pengali yang mudah diterapkan ke parameter.
12. **Enemy Adaptation** dan **Spawner Adaptation** menerapkannya ke NPC dan sistem spawn.
13. **Unity DDA Architecture** menata komponen tersebut agar rapi, modular, dan mudah diuji.

Dalam implementasi, nilai seperti `skillScore` dan `difficultyMultiplier` biasanya tidak langsung mengubah gameplay secara ekstrem. Sistem lebih baik menggunakan `evaluationWindow` dan `smoothing` agar perubahan terasa halus. Misalnya, jika pemain kesulitan, `difficultyMultiplier` dapat diturunkan sedikit sehingga musuh menjadi lebih mudah dikalahkan atau spawner mengurangi tekanan. Sebaliknya, jika pemain terlalu cepat menyelesaikan tantangan, sistem dapat menaikkan tantangan secara bertahap.

Yang harus diingat adalah batas etika desain: DDA yang baik menjaga game tetap menantang dan menyenangkan tanpa membuat pemain merasa dicurangi. Karena itu, parameter yang diadaptasi harus transparan secara gameplay, tidak mengubah aturan inti secara tiba-tiba, dan tetap memberikan pemain kendali.

### Inti yang Harus Ditekankan

- DDA adalah sistem adaptif berbasis metrik, bukan perubahan kesulitan yang acak.
- `skillScore`, `difficultyMultiplier`, `smoothing`, dan `evaluationWindow` menjaga perubahan tetap stabil dan adil.
- Adaptasi sebaiknya diterapkan pada parameter yang aman, seperti perilaku musuh, spawner, atau parameter gameplay, bukan aturan inti yang membuat pemain merasa diperlakukan tidak adil.
- Arsitektur Unity membantu memisahkan pengamatan, perhitungan, dan penerapan DDA agar mudah dikembangkan.

### Transisi ke Slide Berikutnya

Selanjutnya kita akan membahas pertanyaan diskusi untuk menguji pemahaman kita tentang metrik, normalisasi, batas perubahan, dan cara menjaga DDA tetap adil.

---

## Slide 081 - Pertanyaan Diskusi

### Narasi

Slide ini berfungsi sebagai titik refleksi sebelum mahasiswa masuk ke latihan. Sepuluh pertanyaan pada slide ini tidak dimaksudkan untuk dijawab secara hafalan, tetapi untuk menguji apakah mahasiswa sudah memahami alasan di balik setiap keputusan desain **Dynamic Difficulty Adjustment**.

Pertanyaan pertama dan kedua mengajak mahasiswa melihat pengalaman pemain. Game yang terlalu mudah membuat `player` kehilangan tantangan, sehingga permainan terasa datar dan membosankan. Sebaliknya, game yang terlalu sulit membuat `player` merasa tidak mampu, terutama jika kegagalan tidak terasa bisa diperbaiki. Intinya, DDA bertujuan menjaga keseimbangan antara **tantangan** dan **kemampuan pemain**.

Pertanyaan ketiga membedakan **static difficulty** dan **dynamic difficulty**. Pada **static difficulty**, parameter game tetap sejak awal. Pada **dynamic difficulty**, sistem mengamati performa pemain lalu menyesuaikan parameter tertentu. Perbedaannya bukan hanya “sulit atau mudah”, tetapi ada umpan balik dari perilaku pemain.

Pertanyaan keempat sampai keenam membahas cara mengukur dan mengubah difficulty. Metrik yang baik harus mencerminkan kemampuan pemain, bukan hanya hasil akhir. Contoh metrik yang bisa didiskusikan adalah `damage_dealt`, `damage_taken`, `accuracy`, `time_to_clear`, `resource_gain`, dan `survival_time`. Namun metrik perlu dinormalisasi agar skala berbeda bisa dibandingkan secara adil. DDA juga tidak boleh diubah setiap frame karena perubahan terlalu cepat membuat pemain tidak merasakan alasan perubahan dan bisa merasa sistem tidak konsisten.

Pertanyaan ketujuh sampai kesepuluh membahas risiko dan batasan adaptasi. **Rubber banding** bisa membantu pemain yang tertinggal, tetapi jika terlalu agresif, pemain merasa game “mengalah” atau “menyiksa” secara tidak wajar. Parameter yang aman untuk diadaptasi sebaiknya tidak mengubah aturan inti game, misalnya `enemy_speed`, `enemy_health`, `enemy_damage`, `spawn_rate`, atau `enemy_accuracy`, dengan batas minimum dan maksimum. DDA juga dapat dikombinasikan dengan **PCG** jika konten yang dihasilkan tetap konsisten dengan level kesulitan yang diinginkan. Yang terpenting, DDA harus tetap adil: pemain harus merasa kesulitan atau kemudahan muncul dari permainannya sendiri, bukan dari manipulasi yang terlihat.

Sebelum lanjut, mahasiswa perlu bisa menjawab: metrik apa yang dipilih, mengapa metrik itu valid, bagaimana normalisasi dilakukan, parameter apa yang boleh diubah, dan bagaimana batas perubahan menjaga rasa adil.

### Inti yang Harus Ditekankan

- DDA menjaga keseimbangan antara **tantangan** dan **kemampuan player**.
- **Static difficulty** tetap, sedangkan **dynamic difficulty** menyesuaikan berdasarkan performa.
- Metrik performa harus relevan, terukur, dan dinormalisasi agar bisa dibandingkan.
- Perubahan difficulty tidak boleh terlalu cepat, misalnya tidak setiap frame.
- **Rubber banding** perlu dibatasi agar tidak terasa tidak adil.
- Parameter yang diadaptasi harus aman, terukur, dan memiliki batas minimum serta maksimum.
- DDA tetap adil jika perubahan terasa wajar dan tidak mengubah aturan inti game.

### Transisi ke Slide Berikutnya

Setelah pertanyaan diskusi ini terjawab, kita akan menerapkan konsepnya pada latihan konsep: merancang sistem DDA untuk game survival arena dengan evaluasi berkala dan adaptasi enemy yang terkontrol.

---

## Slide 082 - Latihan Konsep

### Narasi

Pada slide ini kita tidak hanya mendefinisikan DDA, tetapi merancang satu sistem utuh untuk game survival arena. Inti latihan ini adalah membangun **loop penyesuaian**: sistem mengamati player, menghitung seberapa baik player bermain, lalu mengubah parameter enemy secara terbatas. Jika player terlalu dominan, game memberi tantangan lebih; jika player kesulitan, game memberi ruang untuk bertahan.

Sebelum masuk ke rumus, mahasiswa perlu memahami bahwa DDA yang baik harus terasa **stabil** dan **wajar**. Evaluasi dilakukan setiap 30 detik, bukan setiap frame, karena data performa player perlu cukup panjang agar tidak bising. Perubahan difficulty juga sebaiknya tidak langsung lompat ke nilai ekstrem, melainkan bergerak bertahap.

Untuk menjawab spesifikasi, kita bisa menentukan komponen sebagai berikut.

1. **Metrik player performance**
   - `kill_rate`: jumlah enemy yang dikalahkan per waktu.
   - `survival_time`: durasi bertahan pada wave.
   - `damage_taken`: total damage yang diterima player.
   - `wave_progress`: sejauh mana wave diselesaikan.
   - `resource_usage`: seberapa efisien player memakai item atau cooldown, jika ada.

   Metrik ini dipilih karena menggambarkan dua hal: kemampuan menyerang dan kemampuan bertahan.

2. **Rumus skill score**
   Skill score sebaiknya berupa nilai tunggal yang sudah dinormalisasi, misalnya antara 0 dan 1. Bentuk sederhana:

   `skill_score = w1 * norm(kill_rate) + w2 * norm(survival_time) + w3 * (1 - norm(damage_taken))`

   Bobot `w1`, `w2`, `w3` menentukan apakah game lebih menekankan agresivitas atau ketahanan. Nilai `norm` memastikan metrik dengan skala berbeda bisa dibandingkan.

3. **Difficulty model**
   Difficulty model menerjemahkan `skill_score` menjadi target difficulty. Misalnya:

   `target_difficulty = clamp(base_difficulty + k * (skill_score - target_skill), min_difficulty, max_difficulty)`

   Jika `skill_score` lebih tinggi dari `target_skill`, difficulty naik. Jika lebih rendah, difficulty turun. Parameter `k` mengatur seberapa agresif penyesuaian.

4. **Parameter enemy yang diadaptasi**
   Parameter yang aman biasanya:
   - `enemy_health`
   - `enemy_damage`
   - `enemy_speed`
   - `spawn_interval`
   - `enemy_count` per wave

   Hindari mengubah parameter yang membuat game terasa tidak adil secara tiba-tiba, misalnya mengubah damage player atau memberi invincibility tanpa alasan desain.

5. **Batas minimum dan maksimum difficulty**
   Batas ini menjaga game tetap bisa dimainkan. Misalnya:
   - `min_difficulty = 0.6` agar player tidak terlalu lemah.
   - `max_difficulty = 1.4` agar player tidak terlalu tertekan.

   Nilai ini harus diuji dengan playtest, bukan hanya ditentukan secara matematis.

6. **Cara mencegah difficulty naik-turun terlalu cepat**
   Gunakan **smoothing** atau **hysteresis**.
   - `current_difficulty` bergerak perlahan menuju `target_difficulty`.
   - Tambahkan jeda sebelum difficulty boleh naik atau turun.
   - Batasi perubahan maksimum per interval, misalnya maksimal 10% setiap 30 detik.
   - Gunakan rata-rata bergerak dari beberapa evaluasi terakhir.

Bentuk sederhana alurnya dapat ditulis sebagai:

```text
setiap 30 detik:
  skill_score = hitung_skill_score(player)
  target_difficulty = clamp(base + k * (skill_score - target_skill), min, max)
  current_difficulty = lerp(current_difficulty, target_difficulty, alpha)
  enemy.health = base_health * current_difficulty
  enemy.damage = base_damage * current_difficulty
```

Bagian penting dari pseudocode ini adalah `clamp` dan `lerp`. `clamp` menjaga difficulty tetap dalam batas aman. `lerp` membuat perubahan bertahap, sehingga player tidak merasakan lompatan mendadak. Hasil yang diharapkan adalah game yang tetap menantang bagi player yang kuat, tetapi tidak menghukum player yang masih belajar.

Sebelum lanjut, mahasiswa perlu memastikan bahwa metrik yang dipilih benar-benar mencerminkan performa, bukan hanya keberuntungan. Jika metrik terlalu sensitif, difficulty akan berfluktuasi. Jika terlalu lambat, game tidak terasa responsif.

### Inti yang Harus Ditekankan

- DDA adalah **sistem umpan balik**: observasi player, hitung skill score, lalu adaptasi parameter enemy.
- Evaluasi harus menggunakan interval yang stabil, misalnya 30 detik, agar data tidak bising.
- Difficulty perlu dibatasi dengan `min_difficulty` dan `max_difficulty` agar tetap adil.
- Perubahan difficulty sebaiknya dihaluskan dengan smoothing, hysteresis, atau batas perubahan per interval.
- Parameter yang diadaptasi harus berdampak pada tantangan, tetapi tidak membuat game terasa curang.

### Transisi ke Slide Berikutnya

Setelah memahami DDA secara umum, kita akan masuk ke kasus yang lebih spesifik: rubber banding, yaitu bantuan yang diberikan ketika player tertinggal.

---

## Slide 083 - Latihan Desain Rubber Banding

### Narasi

**Rubber banding** adalah mekanisme desain dalam **Dynamic Difficulty Adjustment** yang menjaga pemain tetap berada pada rentang tantangan yang sehat. Intuisinya seperti pegas: jika pemain terlalu jauh di belakang, sistem memberikan bantuan agar pemain tidak frustrasi; jika pemain terlalu jauh di depan, sistem dapat menambah tekanan agar permainan tidak terasa terlalu mudah. Pada game racing, mekanisme ini sering muncul pada perilaku mobil lawan. Pada arena survival, mekanisme ini dapat muncul pada musuh, spawn, atau kondisi pemain.

Yang pertama harus ditentukan adalah **kapan pemain dianggap tertinggal**. Penilaian tidak boleh hanya berdasarkan satu angka, tetapi dari beberapa metrik yang relevan dengan genre. Untuk racing, metriknya bisa berupa jarak dari pemimpin, waktu putaran, posisi di lintasan, atau kerusakan kendaraan. Untuk arena survival, metriknya bisa berupa `health_ratio`, `wave_progress`, `kill_count`, `death_count`, `resource_level`, atau jarak dari target. Agar keputusan stabil, gunakan **evaluation window** dan **hysteresis**: pemain harus tetap berada di zona tertinggal selama beberapa detik sebelum bantuan diberikan, dan bantuan tidak langsung hilang begitu metrik membaik.

Bantuan yang diberikan harus **terukur, terbatas, dan dapat diakhiri**. Bentuk bantuannya bisa berupa:

- penurunan sementara `enemy_damage` atau `enemy_accuracy`;
- pengurangan `spawn_rate` atau penundaan spawn musuh;
- buff sementara seperti `damage_reduction`, `heal_over_time`, atau `resource_bonus`;
- bantuan navigasi atau steering yang membuat pemain lebih mudah menghindari serangan;
- pada racing, peningkatan `acceleration` atau `handling` pemain, atau penurunan `top_speed` mobil yang terlalu jauh di depan.

Ukuran bantuan sebaiknya mengikuti jarak ketertinggalan, tetapi dibatasi. Pola sederhana yang bisa digunakan adalah:

```text
gap = target_progress - player_progress
assist = clamp(k * gap, 0, max_assist)
```

Di sini, `gap` menunjukkan seberapa jauh pemain dari target tantangan, `k` adalah kekuatan respons, dan `max_assist` adalah batas maksimal bantuan. Dengan cara ini, bantuan tidak langsung melompat ke nilai maksimum, tetapi naik secara proporsional. Jika `gap` kecil, bantuan kecil; jika `gap` besar, bantuan lebih besar namun tetap dibatasi.

Agar bantuan tidak terasa curang, desainnya harus terasa **adil dan dapat dipahami pemain**. Bantuan sebaiknya bersifat sementara, tidak menghapus seluruh tantangan, dan memiliki feedback yang jelas. Pemain harus bisa merasakan bahwa permainan sedang membantu, misalnya melalui perubahan perilaku musuh, efek visual, suara, atau indikator kecil di HUD. Perubahan juga sebaiknya dilakukan secara bertahap, bukan tiba-tiba. Misalnya, musuh tidak langsung menjadi sangat lemah, tetapi `attack_rate`-nya menurun perlahan selama beberapa detik. Dengan begitu, pemain tetap merasa memiliki kendali atas hasil permainan.

Batas maksimal bantuan perlu ditetapkan agar game tidak kehilangan identitasnya. Batas ini bisa berupa `max_assist`, `cooldown`, `minimum_enemy_stat`, atau `minimum_spawn_rate`. Selain itu, perlu diputuskan apakah bantuan **terlihat** atau **tersembunyi**. Bantuan yang terlihat lebih aman secara desain karena pemain memahami bahwa sistem sedang menyeimbangkan tantangan. Bantuan yang tersembunyi bisa terasa lebih imersif, tetapi berisiko dianggap curang jika pemain tidak bisa menebak penyebabnya. Untuk latihan ini, pilihan yang lebih sehat adalah bantuan yang terlihat atau setidaknya dapat disimpulkan dari perilaku dunia game.

Sebelum lanjut, mahasiswa perlu memahami bahwa **rubber banding** bukan sekadar menambah buff atau melemahkan musuh. Ia adalah loop desain yang menghubungkan perilaku NPC, sistem spawn, steering, dan keputusan adaptif menjadi satu pengalaman bermain yang lebih seimbang.

1. Ukur posisi pemain menggunakan metrik yang relevan.
2. Tentukan zona tertinggal dan zona terlalu kuat.
3. Terapkan bantuan atau tekanan yang dibatasi.
4. Hilangkan bantuan secara halus ketika pemain kembali seimbang.

### Inti yang Harus Ditekankan

- **Rubber banding** menjaga pemain tetap dalam rentang tantangan, bukan membuat game selalu mudah atau selalu sulit.
- Keputusan bantuan harus berbasis metrik yang jelas, seperti `progress_gap`, `health_ratio`, `wave_progress`, atau `spawn_rate`.
- Bantuan harus **proporsional, terbatas, sementara, dan memiliki feedback** agar tidak terasa curang.
- Gunakan `clamp`, `cooldown`, dan `hysteresis` agar bantuan tidak naik-turun terlalu cepat.
- Desain yang baik membuat pemain merasa sistem membantu, bukan sistem mengambil alih permainan.

### Transisi ke Slide Berikutnya

Setelah memahami cara merancang rubber banding, kita akan menutup pertemuan dengan gambaran praktikum yang akan menghubungkan metrik performa, penyesuaian tantangan, dan pengujian gameplay secara langsung.

---

## Slide 084 - Penutup

### Narasi

Pada penutup pertemuan ini, kita kembali ke gagasan utama **Dynamic Difficulty Adjustment** atau **DDA**. DDA bukan hanya menaikkan atau menurunkan angka musuh, tetapi sistem desain yang membaca performa pemain, menilai tantangan, lalu menyesuaikan parameter game agar pengalaman bermain tetap seimbang.

Untuk praktikum Pertemuan 11, mahasiswa akan membangun sistem sederhana dengan fokus:

- `performance tracking` untuk mencatat indikator performa pemain,
- `skill score` sebagai nilai ringkas dari kemampuan pemain,
- `difficulty multiplier` sebagai faktor penyesuaian tantangan,
- `enemy stat scaling` untuk menyesuaikan statistik musuh,
- `spawn rate adaptation` untuk mengatur laju kemunculan musuh,
- `debug UI` agar perubahan difficulty dapat diamati,
- `gameplay testing` untuk memastikan penyesuaian terasa adil dan tidak mengganggu gameplay.

```text
Game otomatis menyesuaikan musuh berdasarkan performa player
```

Kalimat ini menjadi target utama praktikum: sistem harus mampu membaca kondisi pemain dan mengubah perilaku game secara terukur. Mahasiswa perlu memahami bahwa setiap parameter penyesuaian harus memiliki batas, evaluasi yang stabil, dan cara pengujian yang jelas.

Materi berikutnya akan memperluas pembahasan ke:

```text
Player Modeling & Adaptive Game AI
```

Di sana, fokusnya bukan hanya menyesuaikan difficulty, tetapi memodelkan pemain dan membangun sistem adaptif yang lebih kontekstual.

### Inti yang Harus Ditekankan

- **DDA** adalah sistem desain, bukan sekadar perubahan angka musuh.
- Praktikum menekankan `performance tracking`, `skill score`, `difficulty multiplier`, `enemy stat scaling`, `spawn rate adaptation`, `debug UI`, dan `gameplay testing`.
- Penyesuaian difficulty harus terukur, terbatas, dan dapat diuji agar tidak terasa curang atau mengganggu pengalaman bermain.
- Langkah berikutnya adalah memahami **Player Modeling & Adaptive Game AI** sebagai dasar sistem adaptif yang lebih luas.

### Transisi ke Slide Berikutnya

Dengan praktikum ini, mahasiswa diharapkan memiliki gambaran implementasi DDA yang sederhana namun terstruktur. Selanjutnya, kita akan melangkah ke materi **Player Modeling & Adaptive Game AI** untuk memahami bagaimana sistem game dapat memodelkan pemain dan menyesuaikan perilaku secara lebih adaptif.
