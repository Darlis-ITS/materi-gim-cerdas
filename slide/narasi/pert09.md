# Narasi Game Cerdas - Pertemuan 09

## Procedural Content Generation

Sumber: markdown/pert09.md

---

## Slide 001 - Cover

### Narasi

Slide pembuka ini memperkenalkan topik utama pertemuan ke-9, yaitu **Procedural Content Generation** atau **PCG**. Dalam konteks **Game Cerdas**, PCG membahas cara sebuah game tidak hanya menampilkan aset yang sudah dibuat secara manual, tetapi juga dapat menghasilkan konten secara otomatis menggunakan algoritma, aturan, dan parameter.

Beberapa istilah penting yang akan kita temui adalah **`randomness`**, **`seed`**, **constructive PCG**, **generate-and-test PCG**, dan **PCG taxonomy**. Secara sederhana, **`randomness`** memberi variasi pada hasil, sedangkan **`seed`** membuat variasi tersebut dapat diulang atau direproduksi. **Constructive PCG** membangun konten secara bertahap, misalnya menyusun level atau menempatkan objek langkah demi langkah. **Generate-and-test PCG** membuat banyak kandidat konten, lalu menyaringnya berdasarkan aturan atau kriteria tertentu. **PCG taxonomy** membantu kita memahami jenis, tujuan, dan cara kerja berbagai metode PCG.

Praktikum yang akan dibuat terpisah adalah **Procedural Spawning** dan **Random Level Sederhana**. Fokus pertemuan ini adalah memahami bagaimana game dapat menghasilkan konten secara otomatis menggunakan algoritma, aturan, dan parameter, sebelum kemudian diterapkan pada lingkungan pengembangan seperti **Unity**.

### Inti yang Harus Ditekankan

- **PCG** adalah pendekatan untuk menghasilkan konten game secara otomatis, bukan hanya menampilkan aset statis.
- **`randomness`** dan **`seed`** penting untuk menghasilkan variasi yang tetap dapat dikontrol dan direproduksi.
- **Constructive PCG** membangun konten secara bertahap, sedangkan **generate-and-test PCG** membuat kandidat lalu menyaringnya.
- **PCG taxonomy** membantu memahami jenis dan tujuan metode PCG.
- Penerapan di **Unity** menjadi jembatan dari konsep ke implementasi praktis.

### Transisi ke Slide Berikutnya

Setelah memahami gambaran umum topik ini, kita akan melihat posisi materi PCG dalam alur pembelajaran, terutama setelah topik perilaku agent dan menuju area konten yang dihasilkan secara prosedural.

---

## Slide 002 - Posisi Materi dalam Rencana Pembelajaran

### Narasi

Pada slide ini, kita menata posisi pertemuan ke-9 dalam alur mata kuliah **Game Cerdas**. Pertemuan sebelumnya telah membangun dasar perilaku `agent` dan `NPC` melalui beberapa topik utama:

- `perception`, `memory`, dan `decision`
- `steering`, `pathfinding`, dan `navigation`
- `Finite State Machine`, `Behavior Tree`, dan `utility-based decision`

Dengan alur tersebut, fokus utama pertemuan 1–8 adalah bagaimana `agent` atau `NPC` bertindak di dalam lingkungan game. Pertemuan 9 menggeser fokus ke area yang berbeda, yaitu bagaimana konten game dapat dihasilkan secara otomatis melalui aturan, parameter, dan algoritma. Materi ini disebut **Procedural Content Generation**.

Pergeseran ini penting karena mahasiswa perlu melihat bahwa kecerdasan dalam game tidak hanya terbatas pada perilaku `agent`, tetapi juga mencakup pembuatan konten seperti `level`, `spawning`, `obstacle`, dan `layout`. Pemahaman ini menjadi dasar sebelum masuk ke alasan mengapa **Procedural Content Generation** dibutuhkan dalam pengembangan game.

### Inti yang Harus Ditekankan

- Pertemuan 1–8 berfokus pada teknik kecerdasan untuk perilaku `agent` dan `NPC`, seperti `perception`, `memory`, `decision`, `steering`, `pathfinding`, `FSM`, `Behavior Tree`, dan `utility-based decision`.
- Pertemuan 9 menggeser fokus ke teknik kecerdasan untuk menghasilkan konten game, yaitu **Procedural Content Generation**.
- Posisi materi ini menjadi jembatan dari perilaku `agent` ke pembuatan konten otomatis yang dapat memengaruhi lingkungan, `spawning`, `level`, dan interaksi dalam game.

### Transisi ke Slide Berikutnya

Dengan posisi tersebut, kita lanjut ke slide berikutnya untuk memahami mengapa **Procedural Content Generation** penting ketika jumlah konten game sangat besar dan pembuatan manual menjadi tidak efisien.

---

## Slide 003 - Mengapa PCG Penting?

### Narasi

Dalam game, jumlah **konten** yang harus disiapkan bisa sangat besar. Konten ini tidak hanya berupa cerita atau karakter, tetapi juga elemen yang membentuk pengalaman bermain:

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

Jika semua elemen tersebut dibuat manual, proses produksinya dapat menjadi lama dan mahal. Developer harus merancang, menguji, dan menyesuaikan setiap variasi. Ketika game membutuhkan banyak replikasi atau pengalaman yang berubah-ubah, beban kerja ini semakin besar.

**PCG** membantu developer membuat konten secara otomatis dengan **aturan tertentu**. Intuisinya sederhana: developer tidak lagi membuat setiap detail satu per satu, tetapi mendefinisikan batasan, pola, atau parameter yang boleh digunakan. Sistem kemudian menghasilkan variasi konten yang tetap berada dalam desain yang diinginkan.

Hal ini penting karena konten yang dihasilkan dapat memengaruhi banyak aspek game. Penempatan obstacle, bentuk terrain, layout ruangan, dan variasi musuh dapat memengaruhi jalur pemain, tantangan, dan dinamika permainan. Dengan PCG, developer dapat memperluas skala konten tanpa harus menambah beban produksi secara proporsional.

Namun, PCG bukan berarti membuat konten secara acak tanpa kontrol. Hasilnya harus tetap **playable**, seimbang, dan sesuai tujuan desain. Aturan yang didefinisikan developer menjadi kunci agar konten tidak terlalu sulit, terlalu mudah, atau tidak koheren. Mahasiswa perlu memahami bahwa PCG adalah alat untuk membantu desain, bukan pengganti desain itu sendiri.

### Inti yang Harus Ditekankan

- Konten game dapat sangat banyak, mulai dari level, dungeon, musuh, item, terrain, quest, peta, loot, obstacle, dekorasi, hingga layout ruangan.
- Pembuatan konten secara manual dapat memakan waktu lama dan biaya tinggi, terutama ketika dibutuhkan banyak variasi.
- PCG membantu menghasilkan konten secara otomatis berdasarkan aturan tertentu, sehingga proses produksi lebih efisien.
- Hasil PCG harus tetap playable dan konsisten dengan desain game, bukan sekadar acak tanpa kontrol.

### Transisi ke Slide Berikutnya

Setelah memahami mengapa PCG penting, kita akan melihat contoh game yang menggunakan PCG untuk menghasilkan konten secara lebih dinamis.

---

## Slide 004 - Contoh Game yang Menggunakan PCG

### Narasi

Pada slide ini, kita melihat **Procedural Content Generation** dalam bentuk contoh nyata. Tujuannya bukan sekadar menghafal genre, tetapi memahami di mana PCG paling berguna dalam desain game.

PCG sering ditemukan pada:

- **roguelike**,
- **dungeon crawler**,
- **survival game**,
- **sandbox game**,
- **strategy game**,
- **open world game**,
- **endless runner**,
- **loot-based RPG**.

Genre-genre ini biasanya membutuhkan variasi konten yang tinggi. Jika setiap level, item, atau musuh dibuat manual, proses produksi menjadi panjang dan sulit mempertahankan rasa baru bagi pemain. PCG membantu membuat konten secara otomatis dengan aturan tertentu, sehingga game tetap terasa segar tanpa harus menambah banyak aset secara manual.

Contoh penggunaannya bisa dilihat dari beberapa pola berikut:

- **Dungeon berubah setiap run** — layout ruangan, lorong, atau posisi pintu dibuat ulang agar setiap sesi bermain berbeda.
- **Item muncul secara acak** — `loot`, senjata, atau perlengkapan ditentukan oleh sistem saat game berjalan.
- **Musuh muncul berdasarkan area** — `spawn` musuh disesuaikan dengan zona, kesulitan, atau progres pemain.
- **Terrain dibuat dari noise** — bentuk permukaan, pegunungan, atau medan dibuat dari pola acak terstruktur.
- **Quest dibuat dari template** — misi disusun dari pola umum, lalu diisi parameter seperti lokasi, target, atau hadiah.

Dari contoh tersebut, mahasiswa perlu menangkap satu intuisi penting: PCG tidak selalu berarti “acak tanpa aturan”. Dalam praktik, PCG biasanya dibatasi oleh aturan desain, parameter, dan tujuan gameplay. Misalnya, dungeon boleh berubah, tetapi tetap harus bisa diselesaikan; item boleh acak, tetapi tetap seimbang; musuh boleh muncul di area tertentu, tetapi tetap sesuai tema atau tingkat kesulitan.

Hubungannya dengan sistem kecerdasan game juga cukup jelas. PCG menyiapkan lingkungan dan tantangan, kemudian sistem lain seperti `pathfinding`, perilaku NPC, atau `decision making` memanfaatkan konten yang sudah dihasilkan. Dengan kata lain, PCG sering menjadi bagian dari ekosistem game yang membuat pengalaman bermain lebih dinamis.

### Inti yang Harus Ditekankan

- PCG banyak digunakan pada genre yang membutuhkan **variasi tinggi** dan **konten besar**.
- Contoh utamanya meliputi dungeon, item, musuh, terrain, dan quest yang dihasilkan secara otomatis.
- PCG biasanya tetap menggunakan **aturan dan parameter**, bukan sekadar acak bebas.
- PCG dapat menjadi dasar bagi sistem lain seperti spawning, perilaku NPC, dan tantangan gameplay.

### Transisi ke Slide Berikutnya

Setelah kita melihat contoh-contoh game yang menggunakan PCG, langkah berikutnya adalah merangkum capaian pembelajaran pertemuan ini, agar mahasiswa tahu kompetensi apa yang harus dikuasai setelah materi ini.

---

## Slide 005 - Capaian Pembelajaran Pertemuan

### Narasi

Slide ini menjadi peta kompetensi untuk pertemuan ke-9. Tujuannya bukan hanya mengenali istilah **Procedural Content Generation**, tetapi mahasiswa diharapkan mampu menjelaskan, membedakan, dan merancang sistem PCG sederhana yang dapat diterapkan pada game.

Secara garis besar, capaian pembelajaran ini dapat dibaca sebagai empat kelompok kompetensi:

1. **Konsep dasar PCG**  
   Mahasiswa mampu menjelaskan apa itu PCG, peran `randomness`, serta hubungan antara `seed` dan **reproducibility**.

2. **Mekanisme acak yang terkontrol**  
   Mahasiswa mampu membedakan `random murni` dan `controlled randomness`, sehingga hasil konten tidak sepenuhnya tak terduga tetapi tetap dapat diatur.

3. **Pendekatan PCG**  
   Mahasiswa mampu menjelaskan **constructive PCG**, **generate-and-test PCG**, serta **taxonomy PCG** secara umum.

4. **Implementasi dan evaluasi**  
   Mahasiswa mampu merancang PCG sederhana untuk `spawning` atau `level layout`, menghubungkannya dengan `Unity`, serta menjelaskan parameter dan cara evaluasi hasil PCG.

Dengan memahami capaian ini, mahasiswa tahu arah materi: dari konsep dasar, mekanisme acak, pendekatan algoritma, sampai contoh implementasi dan evaluasi hasil.

### Inti yang Harus Ditekankan

- PCG bukan sekadar membuat konten secara acak, tetapi menghasilkan konten berdasarkan **aturan**, **parameter**, dan **constraint**.
- `seed` penting karena membuat hasil PCG dapat **direproduksi** dan diuji secara konsisten.
- Mahasiswa perlu membedakan `random murni` dan `controlled randomness` untuk menghasilkan konten yang tetap variatif tetapi tetap sesuai desain.
- Capaian akhir adalah mampu merancang PCG sederhana untuk `spawning` atau `level layout` dan menghubungkannya dengan implementasi di `Unity`.

### Transisi ke Slide Berikutnya

Setelah capaian pembelajaran dipahami, kita masuk ke definisi inti: apa sebenarnya **Procedural Content Generation** dan bagaimana algoritma mengubah aturan serta parameter menjadi konten game.

---

## Slide 006 - Apa Itu Procedural Content Generation?

### Narasi

**Procedural Content Generation** atau **PCG** adalah teknik menghasilkan konten game secara otomatis menggunakan algoritma. Intuisi sederhananya, kita tidak lagi menaruh setiap objek satu per satu secara manual, tetapi memberi sistem aturan untuk membuat objek tersebut.

Konten yang dihasilkan bisa berupa posisi `enemy`, layout level, item, obstacle, atau penempatan `boss`. Dalam PCG, hasil tidak muncul dari keacakan semata, tetapi dari kombinasi aturan, parameter, dan pembatasan yang sudah dirancang.

Dasar-dasar yang biasanya terlibat adalah:

- **aturan**: logika yang menentukan apa yang boleh dibuat.
- **parameter**: nilai yang mengatur jumlah, ukuran, atau probabilitas.
- **randomness**: sumber variasi agar hasil tidak selalu sama.
- `seed`: nilai awal yang membuat proses acak bisa diulang.
- `constraint`: batasan agar konten tetap masuk akal.
- `evaluation`: pengecekan apakah hasil memenuhi syarat.

Contoh sederhana:

```text
Buat 10 enemy pada posisi acak
di area yang sudah ditentukan.
```

Pada contoh ini, `10` adalah parameter, `area` adalah constraint, dan posisi acak menghasilkan variasi. Sistem cukup memilih posisi `enemy` di dalam area yang valid, tanpa perlu menempatkan setiap musuh secara manual.

Contoh yang lebih kompleks:

```text
Buat dungeon dengan beberapa ruangan,
koridor yang saling terhubung,
item, enemy, dan posisi boss.
```

Di sini PCG tidak hanya menempatkan objek, tetapi membentuk struktur level. Ruangan dan koridor menentukan jalur pergerakan, sementara penempatan `enemy`, `item`, dan `boss` memengaruhi pengalaman bermain. Jika layout berubah, perilaku NPC, steering, dan decision making juga harus menyesuaikan dengan lingkungan baru.

Hal penting yang harus dipahami mahasiswa adalah PCG bukan sekadar “acak”. PCG yang baik menghasilkan variasi, tetapi tetap berada dalam batas desain. Tanpa constraint dan evaluasi, sistem bisa menghasilkan konten yang tidak konsisten, terlalu sulit, atau tidak bisa dimainkan.

### Inti yang Harus Ditekankan

- **PCG** menghasilkan konten game secara otomatis melalui algoritma, bukan penempatan manual satu per satu.
- Variasi berasal dari randomness, tetapi hasil tetap dikendalikan oleh aturan, parameter, `seed`, `constraint`, dan evaluasi.
- Contoh sederhana adalah spawning `enemy`; contoh kompleks adalah pembuatan dungeon dengan ruangan, koridor, item, `enemy`, dan `boss`.
- PCG penting karena lingkungan yang dihasilkan memengaruhi pergerakan NPC, jalur, dan keputusan dalam game.

### Transisi ke Slide Berikutnya

Setelah definisi ini jelas, langkah berikutnya adalah membandingkan konten manual dan konten procedural untuk melihat kapan masing-masing pendekatan lebih tepat digunakan.

---

## Slide 007 - Manual Content vs Procedural Content

### Narasi

Pada slide ini kita membandingkan dua cara utama menyiapkan konten game: **manual content** dan **procedural content**. Perbandingan ini penting karena banyak mahasiswa membayangkan PCG sebagai pengganti total kerja designer, padahal dalam praktik keduanya sering bekerja bersama.

**Manual content** adalah konten yang dibuat langsung oleh designer. Misalnya, designer menaruh `enemy` satu per satu di scene, menyusun `level` dengan tangan, atau menentukan posisi `item` agar sesuai alur cerita. Kelebihannya adalah kontrol sangat tinggi: setiap posisi, jarak, dan urutan bisa diatur secara sadar. Dalam konteks Unity, ini bisa berupa object yang sudah ditempatkan di scene dan diatur secara langsung oleh designer.

**Procedural content** adalah konten yang dihasilkan oleh algoritma. `Enemy` bisa muncul otomatis, `level` bisa dibuat dari grid, `loot` bisa ditentukan berdasarkan `rarity`, dan `obstacle` bisa diatur secara acak. Di sini designer tidak lagi menaruh setiap objek satu per satu, tetapi merancang sistem yang menghasilkan variasi konten.

Perbedaan utamanya bukan hanya “siapa yang membuat”, tetapi **tingkat kontrol** dan **jenis variasi** yang dihasilkan. Konten manual biasanya lebih stabil dan mudah diprediksi, tetapi variasi terbatas. Konten procedural bisa menghasilkan banyak kemungkinan, tetapi hasilnya sangat bergantung pada aturan yang diberikan.

Kita bisa melihatnya dari empat aspek penting:

- **Kontrol**: manual memberi kontrol tinggi; procedural memberi kontrol melalui aturan, parameter, dan batasan.
- **Variasi**: manual cenderung terbatas; procedural bisa sangat banyak jika sistemnya dirancang baik.
- **Waktu produksi**: manual sering lama karena banyak keputusan dilakukan satu per satu; procedural bisa lebih cepat setelah sistem generator sudah tersedia.
- **Risiko**: manual cenderung stabil; procedural berisiko menghasilkan konten yang buruk jika aturannya lemah.

Dalam konteks game AI, perbedaan ini juga memengaruhi perilaku agent. Posisi `enemy`, bentuk `level`, dan penempatan `obstacle` menentukan ruang gerak NPC, hasil pathfinding, dan keputusan yang mungkin diambil oleh sistem perilaku. Jadi, konten bukan hanya “latar belakang”, tetapi bagian dari lingkungan yang membentuk perilaku game.

Sebelum lanjut, mahasiswa perlu memahami bahwa memilih manual atau procedural bukan soal mana yang lebih baik secara mutlak. Untuk level utama yang sangat penting, manual sering lebih tepat. Untuk konten berulang, variasi besar, atau konten yang harus diuji banyak skenario, procedural lebih efisien.

### Inti yang Harus Ditekankan

- **Manual content** memberi kontrol tinggi dan hasil stabil, tetapi variasi terbatas dan produksi bisa lama.
- **Procedural content** memberi variasi besar dan produksi lebih cepat setelah sistem dibuat, tetapi kualitasnya bergantung pada aturan.
- Dalam game AI, konten yang dihasilkan memengaruhi lingkungan, ruang gerak agent, pathfinding, dan keputusan NPC.
- Pilihan manual atau procedural harus disesuaikan dengan tujuan desain, kebutuhan variasi, dan risiko kualitas konten.

### Transisi ke Slide Berikutnya

Setelah memahami perbedaan manual dan procedural, kita perlu meluruskan miskonsepsi berikutnya: procedural content generation bukan sekadar melempar nilai acak ke dalam game.

---

## Slide 008 - PCG Bukan Sekadar Random

### Narasi

Kesalahan umum yang sering muncul saat membahas **Procedural Content Generation** adalah menyamakan PCG dengan keacakan.

```text
PCG = random
```

Persamaan ini terlalu sederhana. Jika konten game hanya dibuat acak, hasilnya bisa tidak konsisten: musuh muncul terlalu dekat, item tidak seimbang, atau level tidak bisa diselesaikan. Dalam konteks perilaku NPC, spawn, atau pembuatan dungeon, keacakan hanya memberi variasi, bukan jaminan kualitas.

PCG yang baik biasanya dibangun dari beberapa lapisan:

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

Artinya, sistem tidak berhenti pada “muncul acak”. Ada aturan desain yang menentukan apa yang boleh dan tidak boleh terjadi. Ada batasan yang menjaga konten tetap aman untuk dimainkan. Ada validasi untuk memeriksa apakah hasil generasi layak dipakai. Dan ada tujuan desain yang memastikan konten mendukung pengalaman game.

Komponen-komponen tersebut bisa dipahami sebagai berikut:

- `Random` memberi variasi, misalnya posisi, jenis musuh, atau bentuk dungeon.
- `Rule` menyatakan aturan desain, misalnya musuh tertentu hanya muncul di area gelap.
- `Constraint` membatasi hasil, misalnya jarak minimum dari `player`.
- `Validation` memeriksa hasil akhir, misalnya apakah dungeon masih bisa dilalui.
- `Design Goal` menjaga hasil tetap sesuai tujuan gameplay, misalnya tantangan yang adil dan bervariasi.

Contoh pertamanya sederhana:

```text
Enemy boleh muncul acak,
tetapi tidak boleh muncul terlalu dekat dari player.
```

Di sini, posisi `enemy` memang bisa bervariasi, tetapi ada `constraint` jarak. Jika hasil spawn melanggar jarak minimum, sistem bisa menolak, memindahkan, atau membuat ulang posisi tersebut. Dengan begitu, variasi tetap ada, tetapi pemain tidak langsung berada dalam situasi yang tidak adil.

Contoh keduanya lebih dekat dengan struktur level:

```text
Dungeon boleh acak,
tetapi harus memiliki jalan dari start ke goal.
```

Dungeon dapat dibuat dari grid, ruangan, atau koridor yang berbeda setiap kali. Namun sebelum konten dianggap valid, sistem perlu memastikan ada jalur dari `start` ke `goal`. Ini penting karena tanpa validasi konektivitas, dungeon acak bisa menghasilkan area yang tidak bisa dicapai atau tidak bisa diselesaikan.

Intuisi praktisnya adalah: **random adalah bahan, bukan resep**. PCG yang baik adalah sistem yang menghasilkan variasi, tetapi tetap dikendalikan oleh aturan, batasan, pemeriksaan, dan tujuan desain. Sebelum lanjut ke pembahasan berikutnya, mahasiswa perlu memahami bahwa setiap konten prosedural harus memiliki kriteria penerimaan: apa yang membuat konten tersebut layak dipakai dalam game.

### Inti yang Harus Ditekankan

- **PCG bukan sekadar `random`**; keacakan hanya sumber variasi.
- PCG yang baik menggabungkan `Random`, `Rule`, `Constraint`, `Validation`, dan `Design Goal`.
- Contoh `enemy spawn` menunjukkan pentingnya batasan jarak terhadap `player`.
- Contoh dungeon menunjukkan pentingnya validasi jalur dari `start` ke `goal`.
- Konten prosedural harus melewati kriteria penerimaan sebelum dianggap layak dipakai.

### Transisi ke Slide Berikutnya

Setelah memahami bahwa PCG bukan sekadar acak, kita akan masuk ke salah satu komponen dasarnya, yaitu `Randomness`, untuk melihat bagaimana variasi dihasilkan dan digunakan dalam game.

---

## Slide 009 - Randomness

### Narasi

**Randomness** adalah sifat acak atau ketidakpastian dalam hasil yang dihasilkan oleh sistem. Dalam konteks game, randomness bukan sekadar “membuat sesuatu jadi berbeda”, tetapi menjadi bahan dasar untuk menciptakan variasi yang dapat dirasakan pemain.

Setelah slide sebelumnya menegaskan bahwa **PCG bukan sekadar random**, slide ini membahas salah satu komponen dasarnya terlebih dahulu: bagaimana randomness bekerja dan untuk apa ia digunakan dalam game.

Dalam game, randomness dapat digunakan untuk:

- variasi posisi spawn,
- variasi item yang muncul,
- variasi jenis musuh,
- variasi layout level,
- variasi event yang terjadi,
- variasi reward yang diberikan.

Contoh sederhana dalam Unity:

```csharp
int value = Random.Range(0, 10);
float x = Random.Range(-5f, 5f);
```

Pada potongan kode ini, `Random.Range` digunakan untuk menghasilkan nilai acak dalam suatu rentang. Baris pertama menghasilkan bilangan bulat yang disimpan ke variabel `value`, sedangkan baris kedua menghasilkan bilangan desimal yang disimpan ke variabel `x`.

Secara eksekusi, program meminta nilai acak dari rentang yang ditentukan, lalu menyimpan hasilnya ke variabel. Nilai tersebut kemudian dapat dipakai untuk menentukan posisi, jarak, delay, pilihan item, atau parameter perilaku NPC.

Dalam desain game AI, randomness sering menjadi sumber variasi untuk keputusan sederhana. Misalnya, NPC tidak selalu muncul di titik yang sama, tidak selalu memilih item yang sama, atau tidak selalu melakukan reaksi dengan pola yang identik. Hal ini membuat perilaku game terasa lebih hidup dan tidak mudah ditebak.

Namun, randomness harus dipahami sebagai **bahan mentah**, bukan solusi akhir. Jika digunakan tanpa aturan, hasil acak bisa membuat game terasa tidak adil, tidak konsisten, atau sulit dikendalikan. Karena itu, randomness biasanya perlu dibatasi oleh aturan, constraint, dan tujuan desain.

### Inti yang Harus Ditekankan

- **Randomness** adalah sumber variasi dan ketidakpastian dalam hasil game.
- Randomness dapat memengaruhi posisi, item, musuh, level, event, dan reward.
- Dalam Unity, `Random.Range` digunakan untuk menghasilkan nilai acak dalam rentang tertentu.
- Randomness penting untuk membuat game tidak selalu sama setiap dimainkan.
- Randomness harus dikendalikan, bukan dibiarkan sepenuhnya bebas.

### Transisi ke Slide Berikutnya

Sekarang kita sudah memahami apa itu randomness dan mengapa ia penting dalam game. Selanjutnya, kita akan melihat lebih detail bagaimana `Random.Range` bekerja di Unity, termasuk perbedaan perilaku untuk tipe `int` dan `float`.

---

## Slide 010 - Random.Range di Unity

### Narasi

Pada slide ini kita fokus pada cara praktis menghasilkan nilai acak di Unity menggunakan **`Random.Range`**. Fungsi ini menjadi dasar dari banyak variasi dalam game, misalnya posisi spawn, item, musuh, atau parameter perilaku NPC.

```csharp
Random.Range(min, max)
```

Untuk tipe integer, Unity menyediakan overload:

```csharp
int number = Random.Range(0, 5);
```

Nilai yang mungkin dihasilkan adalah:

```text
0, 1, 2, 3, atau 4
```

Artinya, batas atas **tidak termasuk**. Jika mahasiswa ingin hasil acak dari 0 sampai 5, maka rentang yang digunakan harus `Random.Range(0, 6)`.

Untuk tipe float, cara pemakaiannya sedikit berbeda:

```csharp
float value = Random.Range(0f, 5f);
```

Hasilnya adalah nilai desimal antara 0 sampai 5. Pada overload float, batas atas **dapat termasuk**, sehingga nilai `5f` tetap mungkin muncul.

Perbedaan ini penting karena sering menjadi sumber bug kecil dalam game. Misalnya, jika kita ingin memilih indeks array dari 0 sampai 4, `Random.Range(0, 5)` sudah tepat. Namun jika kita ingin memilih nilai koordinat atau parameter yang bisa mencapai batas maksimum, perlu diperhatikan apakah overload integer atau float yang digunakan.

Sebelum lanjut, mahasiswa perlu memahami bahwa `Random.Range` hanya menghasilkan **nilai acak**, belum menjamin nilai tersebut valid secara game. Validitas posisi, jarak, atau kondisi spawn akan dibahas pada slide berikutnya.

### Inti yang Harus Ditekankan

- `Random.Range(min, max)` adalah fungsi dasar untuk membuat variasi acak di Unity.
- `Random.Range(int, int)` menghasilkan integer dengan **batas atas tidak termasuk**.
- `Random.Range(float, float)` menghasilkan float dengan **batas atas dapat termasuk**.
- Untuk integer inklusif sampai `n`, gunakan `Random.Range(min, n + 1)`.
- Nilai acak masih perlu divalidasi sebelum digunakan untuk posisi, spawn, atau keputusan game.

### Transisi ke Slide Berikutnya

Setelah memahami cara kerja `Random.Range`, langkah berikutnya adalah menerapkannya untuk membuat posisi acak pada bidang XZ, lalu memperhatikan masalah validitas posisi tersebut.

---

## Slide 011 - Random Position

### Narasi

Pada slide ini kita masuk ke contoh sederhana **Procedural Content Generation** atau **PCG** di Unity. Intinya, sistem membuat variasi konten secara otomatis, salah satunya dengan memilih posisi acak.

Untuk menempatkan objek pada bidang **XZ**, kita bisa mengambil dua nilai acak:

```csharp
float x = Random.Range(-10f, 10f);
float z = Random.Range(-10f, 10f);

Vector3 position = new Vector3(x, 0f, z);
```

Variabel `x` dan `z` menentukan koordinat horizontal. Nilai `0f` pada `y` biasanya dipakai agar objek berada di permukaan tanah atau bidang dasar. Hasilnya adalah `Vector3` yang bisa langsung dipakai sebagai `transform.position` objek.

Posisi acak seperti ini berguna untuk beberapa kebutuhan game:

- spawning enemy,
- spawning item,
- dekorasi level,
- obstacle.

Dalam konteks AI game, posisi spawn juga memengaruhi perilaku NPC, misalnya jarak awal terhadap player atau area yang bisa dijelajahi.

Namun, penting dipahami bahwa **posisi acak belum tentu valid**. Randomness hanya memberi variasi, tetapi tidak otomatis memahami aturan dunia game.

Beberapa masalah yang bisa muncul:

- objek muncul di dalam tembok,
- objek muncul di luar arena,
- objek terlalu dekat dengan player,
- objek saling bertumpuk.

Karena itu, dalam praktik PCG, posisi acak biasanya hanya menjadi langkah awal. Setelah itu, posisi perlu dicek terhadap batasan lingkungan, jarak, dan aturan gameplay.

### Inti yang Harus Ditekankan

- `Random.Range(-10f, 10f)` menghasilkan nilai acak pada sumbu `x` dan `z`.
- `Vector3(x, 0f, z)` membuat posisi 3D dengan tinggi tetap di bidang dasar.
- Posisi acak dapat dipakai untuk spawn enemy, item, dekorasi, atau obstacle.
- Random position belum tentu valid karena bisa melanggar batas arena, dinding, jarak, atau tumpang tindih.

### Transisi ke Slide Berikutnya

Selanjutnya kita akan melihat bagaimana randomness dibatasi oleh aturan, sehingga posisi acak yang dihasilkan lebih masuk akal dan aman untuk gameplay.

---

## Slide 012 - Controlled Randomness

### Narasi

Setelah posisi acak dihasilkan, fokusnya bergeser dari sekadar membuat angka acak menjadi memastikan angka itu **aman untuk dipakai dalam game**.

**Controlled randomness** berarti proses acak tidak dibiarkan bebas total. Randomness tetap dibatasi oleh aturan, sehingga hasil yang muncul masih masuk akal secara gameplay.

Intuisi praktisnya: generator boleh memilih posisi secara acak, tetapi posisi itu harus melewati **validasi** sebelum benar-benar dipakai.

```text
Enemy tidak boleh muncul terlalu dekat dari player.
Item harus muncul di area walkable.
Boss harus muncul jauh dari start.
Obstacle tidak boleh menutup semua jalan.
```

Empat aturan di atas mewakili jenis cek yang sering muncul dalam PCG:

- jarak minimum terhadap `player`,
- area `walkable` untuk item atau agen,
- jarak dari `start` untuk konten penting,
- konektivitas jalur agar `obstacle` tidak menutup semua jalan.

Alur kerjanya sederhana:

```text
Random position
    ↓
Cek valid?
    ├── Ya → gunakan
    └── Tidak → cari lagi
```

Proses ini dapat dibaca sebagai pipeline: input berupa kandidat posisi acak, proses berupa pengecekan aturan, dan output berupa posisi yang diterima atau kandidat yang harus dicoba ulang.

Dalam konteks NPC behavior dan pathfinding, validasi ini penting karena agen tidak boleh muncul dalam keadaan yang tidak playable. Misalnya, musuh yang muncul terlalu dekat dapat membuat gameplay terasa tidak adil, item yang muncul di dinding tidak bisa dijangkau, dan obstacle yang menutup semua jalur dapat membuat agen gagal mencapai target.

Yang harus dipahami mahasiswa sebelum lanjut: **controlled randomness** bukan sekadar "acak dengan batas", tetapi cara desain agar PCG menghasilkan konten yang aman, masuk akal, dan mendukung perilaku agen dalam game.

### Inti yang Harus Ditekankan

- **Controlled randomness** adalah randomness yang dibatasi aturan validasi.
- Validasi dapat berupa jarak, area `walkable`, jarak dari `start`, dan konektivitas jalur.
- Alur `generate → check → accept/retry` membuat hasil PCG lebih aman dan playable.
- Aturan ini penting agar NPC, item, dan obstacle tidak merusak gameplay.

### Transisi ke Slide Berikutnya

Jika controlled randomness memastikan posisi acak aman untuk dipakai, pembahasan berikutnya akan masuk ke probability untuk mengatur seberapa sering jenis konten tertentu muncul.

---

## Slide 013 - Probability

### Narasi

**Probability** adalah cara PCG mengatur peluang suatu konten muncul. Intuisinya, kita tidak hanya memilih item atau musuh secara acak, tetapi memberi setiap pilihan **peluang berbeda** sesuai desain.

Contoh pada loot:

```text
Common item    70%
Rare item      25%
Legendary item 5%
```

Artinya, jika sistem memilih item secara acak berdasarkan tabel ini, `Common item` diharapkan muncul paling sering, `Rare item` lebih jarang, dan `Legendary item` sangat jarang.

Contoh pada enemy:

```text
Slime      50%
Goblin     30%
Skeleton   15%
Mini Boss   5%
```

Tabel ini membantu mengatur **frekuensi kemunculan** musuh. `Slime` menjadi musuh umum, `Goblin` sebagai variasi, `Skeleton` lebih langka, dan `Mini Boss` hanya muncul sesekali.

Dalam implementasi, probabilitas biasanya dipakai untuk:

- memilih item dari **loot table**,
- memilih musuh dari **enemy spawn table**,
- menentukan reward atau event acak,
- mengatur rarity konten.

Yang perlu dipahami mahasiswa adalah bahwa probabilitas tidak menjamin hasil pasti pada satu kali kejadian. Misalnya, `Legendary item` dengan 5% tidak berarti pasti muncul setiap 20 kali. Probabilitas bekerja sebagai **distribusi jangka panjang**: semakin banyak percobaan, hasil akan semakin mendekati persentase yang ditetapkan.

Sebelum lanjut, pastikan mahasiswa memahami tiga hal:

1. Setiap pilihan memiliki **peluang** yang dapat diatur.
2. Total peluang sebaiknya membentuk **distribusi valid**, misalnya 100%.
3. Probabilitas adalah alat desain untuk mengontrol **rarity** dan **variasi** konten.

### Inti yang Harus Ditekankan

- **Probability** mengatur peluang konten muncul, bukan sekadar acak tanpa aturan.
- Tabel peluang menentukan **frekuensi** item, musuh, reward, atau event.
- Hasil acak bersifat statistik; persentase menunjukkan kecenderungan jangka panjang, bukan jaminan satu kali.
- Probabilitas membantu PCG terasa lebih seimbang, bervariasi, dan sesuai desain game.

### Transisi ke Slide Berikutnya

Selanjutnya kita akan melihat cara lain untuk merepresentasikan peluang yang sama, yaitu **weighted random**, di mana peluang sering dinyatakan sebagai bobot.

---

## Slide 014 - Weighted Random

### Narasi

Pada slide ini kita membahas **weighted random**, yaitu bentuk random yang tidak memperlakukan semua pilihan secara sama. Dalam **Procedural Content Generation** atau PCG, banyak konten tidak boleh muncul dengan peluang yang persis sama. Misalnya, item biasa perlu lebih sering muncul daripada item langka agar pengalaman bermain tetap seimbang.

Tabel pada slide menunjukkan contoh **loot table** sederhana:

- `Coin` memiliki **weight** 70.
- `Potion` memiliki **weight** 20.
- `Sword` memiliki **weight** 8.
- `Legendary Gem` memiliki **weight** 2.

Total weight dari semua item adalah:

```text
100
```

Artinya, setiap item memiliki “ruang peluang” yang berbeda. Semakin besar bobotnya, semakin besar kemungkinan item tersebut terpilih.

Secara sederhana, jika total weight dianggap sebagai rentang acak dari `0` sampai `99`, maka:

- `Coin` dapat menempati rentang `0` sampai `69`.
- `Potion` menempati rentang `70` sampai `89`.
- `Sword` menempati rentang `90` sampai `97`.
- `Legendary Gem` menempati rentang `98` sampai `99`.

Dengan cara ini, `Coin` memiliki peluang sekitar 70% dari total bobot, `Potion` sekitar 20%, `Sword` sekitar 8%, dan `Legendary Gem` hanya sekitar 2%.

Weighted random sangat berguna untuk mengatur **frekuensi kemunculan konten** dalam game. Konsep ini tidak hanya dipakai untuk loot, tetapi juga untuk:

- **loot table**,
- **enemy spawn table**,
- **reward generation**,
- **random event**.

Dalam desain game, weighted random membantu pengembang mengontrol rasa permainan. Misalnya, musuh biasa dapat diberi bobot besar agar sering muncul, sementara musuh langka atau mini boss diberi bobot kecil agar kemunculannya terasa lebih spesial.

Hal penting yang harus dipahami mahasiswa adalah bahwa weighted random bukan sekadar “acak biasa”. Ia adalah acak yang sudah diberi **distribusi peluang** agar konten muncul sesuai desain, bukan semata-mata bergantung pada kebetulan.

### Inti yang Harus Ditekankan

- **Weighted random** adalah random dengan bobot, di mana item dengan bobot lebih besar memiliki peluang muncul lebih besar.
- Total weight menentukan skala peluang; pada contoh, total weight `100` memudahkan interpretasi sebagai persentase.
- Konsep ini cocok untuk **loot table**, **enemy spawn table**, **reward generation**, dan **random event**.
- Weighted random membantu PCG menghasilkan variasi yang tetap terkendali dan sesuai desain game.

### Transisi ke Slide Berikutnya

Setelah memahami bagaimana peluang dapat diatur melalui bobot, kita perlu melihat sisi lain dari randomness: bagaimana memastikan hasil acak tetap terasa adil bagi player.

---

## Slide 015 - Randomness dan Fairness

### Narasi

Dalam PCG, **randomness** bukan hanya soal menghasilkan variasi. Random juga menentukan apakah player merasa permainan **adil** atau justru frustrasi. Masalahnya, hasil acak yang secara matematis valid bisa tetap terasa buruk jika distribusinya tidak dikendalikan.

Contoh yang sering muncul adalah player terus mendapat item buruk, enemy kuat muncul terlalu sering, level menjadi terlalu sulit karena obstacle acak, atau `spawn` terlalu dekat dari player. Kasus-kasus ini menunjukkan bahwa randomness tanpa batas dapat merusak **game feel** dan kepercayaan player terhadap sistem.

Karena itu, PCG perlu memperhatikan **fairness**. Fairness di sini bukan berarti menghilangkan acak, melainkan memberi **guardrail** agar hasil acak tetap berada dalam rentang desain yang dapat diterima. Tujuannya adalah menjaga variasi, tetapi mencegah hasil yang terlalu ekstrem.

Beberapa solusi yang umum digunakan adalah:

- **Batas minimal dan maksimal** untuk membatasi nilai acak, misalnya jarak spawn, jumlah enemy, atau kualitas loot.
- **`pity system`** untuk menjamin hasil tertentu setelah beberapa kali kegagalan, sehingga player tidak mengalami run buruk yang terlalu panjang.
- **`spawn distance`** untuk memastikan objek atau enemy tidak muncul terlalu dekat dengan player.
- **`difficulty budget`** untuk membatasi total tingkat kesulitan yang boleh muncul dalam satu area atau satu waktu.
- **`validation rules`** untuk memeriksa hasil generation sebelum ditampilkan ke player.

Secara praktis, alurnya bisa dipahami sebagai generate lalu validasi. Sistem membuat kandidat hasil acak, kemudian memeriksa apakah kandidat itu melanggar aturan fairness. Jika melanggar, hasil bisa ditolak, digeser, diturunkan tingkat kesulitannya, atau diganti dengan alternatif yang lebih aman.

```text
candidate = generateSpawn()

if distance(candidate, player) < MIN_SPAWN_DISTANCE:
    candidate = rejectOrMove(candidate)

if difficultyScore(candidate) > remainingDifficultyBudget:
    candidate = downgradeOrReject(candidate)
```

Potongan ini menunjukkan bahwa fairness bukan hanya aturan statis, tetapi proses pemeriksaan. `distance(candidate, player)` menjaga agar spawn tidak terasa agresif, sedangkan `difficultyScore(candidate)` menjaga agar total ancaman tidak melampaui `remainingDifficultyBudget`. Hasil yang diharapkan adalah player tetap merasakan variasi, tetapi tidak merasa diperlakukan tidak adil oleh sistem.

Sebelum lanjut, mahasiswa perlu memahami bahwa randomness dalam PCG harus selalu dipandang sebagai **alat desain**, bukan sekadar fungsi acak. Fairness adalah bagian dari desain game, karena ia memengaruhi pengalaman player, keseimbangan, dan apakah konten yang dihasilkan layak dimainkan.

### Inti yang Harus Ditekankan

- Randomness yang tidak dibatasi dapat terasa tidak adil meskipun secara matematis acak.
- Fairness berarti memberi batas, aturan validasi, dan mekanisme pengaman pada hasil generation.
- Mekanisme seperti `pity system`, `spawn distance`, `difficulty budget`, dan `validation rules` menjaga variasi tetap aman bagi player.

### Transisi ke Slide Berikutnya

Setelah memahami bagaimana fairness menjaga hasil acak tetap dapat diterima, langkah berikutnya adalah memastikan hasil random tersebut dapat direproduksi dan diuji secara konsisten.

---

## Slide 016 - Seed

### Narasi

**Seed** adalah nilai awal yang digunakan untuk menghasilkan urutan random. Dalam konteks **Procedural Content Generation**, seed berperan seperti titik awal yang menentukan bagaimana sistem acak akan berjalan.

```text
Seed = 12345
```

Dengan seed yang sama, hasil random dapat dibuat sama kembali. Artinya, jika algoritma generation, parameter, dan urutan pemanggilan fungsi acak tidak berubah, maka output yang dihasilkan juga akan konsisten.

Hal ini sangat penting karena PCG tidak hanya perlu menghasilkan konten yang bervariasi, tetapi juga perlu dapat dikendalikan. Tanpa seed, setiap hasil acak akan sulit dilacak, diuji, atau dibandingkan.

Seed sangat penting untuk:

- **debugging**, karena bug pada level acak dapat ditelusuri kembali ke kondisi yang sama,
- **testing**, karena designer dapat menguji skenario tertentu secara berulang,
- **replay**, karena pengalaman yang sama dapat diulang dengan kondisi awal yang sama,
- **sharing level**, karena pemain dapat membagikan seed untuk mendapatkan level yang sama,
- **procedural world generation**, karena dunia atau level dapat dibuat unik namun tetap dapat direproduksi.

Sebelum lanjut, mahasiswa perlu memahami bahwa seed bukan sekadar angka acak. Seed adalah alat kontrol yang membuat sistem acak menjadi lebih stabil, terukur, dan dapat dipercaya.

### Inti yang Harus Ditekankan

- **Seed** menentukan urutan hasil random.
- Seed yang sama dengan algoritma dan parameter yang sama akan menghasilkan output yang sama.
- Seed mendukung debugging, testing, replay, sharing level, dan procedural world generation.

### Transisi ke Slide Berikutnya

Setelah memahami peran seed, kita akan masuk ke konsep berikutnya, yaitu bagaimana seed memungkinkan hasil generation untuk diulang secara konsisten.

---

## Slide 017 - Reproducibility

### Narasi

**Reproducibility** adalah sifat penting dalam **Procedural Content Generation** yang memungkinkan hasil generation dapat diulang secara konsisten. Artinya, jika sistem menggunakan kondisi awal yang sama, maka konten yang dihasilkan juga akan sama.

Contoh sederhana:

```text
Seed 1001 menghasilkan dungeon A
Seed 1002 menghasilkan dungeon B
Seed 1001 menghasilkan dungeon A lagi
```

Pada contoh ini, `Seed 1001` tidak hanya menghasilkan `dungeon A` sekali, tetapi dapat menghasilkan `dungeon A` yang sama ketika dijalankan kembali. Ini menunjukkan bahwa proses generation tidak sepenuhnya “acak bebas”, melainkan **deterministik** selama seed dan parameter algoritma tetap sama.

Untuk mahasiswa, intuisi praktisnya adalah: seed bukan sekadar angka, melainkan **pintu masuk** untuk mengontrol hasil acak. Dalam game, hal ini sangat berguna karena konten yang dibuat secara prosedural tetap bisa diuji, diperiksa, dan dibagikan.

Manfaat utama reproducibility:

- **Designer** dapat menguji level tertentu secara berulang tanpa bergantung pada hasil acak yang berubah-ubah.
- **Bug** yang muncul pada level acak dapat dilacak karena kondisi yang sama dapat dibuat kembali.
- **Player** dapat berbagi seed agar pemain lain mendapatkan level atau tantangan yang sama.
- **Sistem game** dapat membuat challenge harian atau event tertentu yang tetap dapat diverifikasi.

Sebelum lanjut, mahasiswa perlu memahami bahwa reproducibility bukan berarti semua konten harus sama untuk semua pemain. Justru kekuatannya ada pada kemampuan memilih: acak untuk variasi, tetapi tetap bisa diulang ketika dibutuhkan.

### Inti yang Harus Ditekankan

- **Reproducibility** berarti hasil generation dapat diulang dengan kondisi awal yang sama.
- Seed yang sama menghasilkan konten yang sama, selama algoritma dan parameter tidak berubah.
- Konsep ini penting untuk debugging, testing, sharing level, dan challenge berbasis seed.

### Transisi ke Slide Berikutnya

Setelah memahami mengapa hasil generation harus dapat diulang, langkah berikutnya adalah melihat bagaimana konsep seed diterapkan dalam Unity melalui `Random.InitState`.

---

## Slide 018 - Random.InitState di Unity

### Narasi

Pada slide ini, kita masuk ke implementasi praktis dari konsep **reproducibility** di Unity. Sebelumnya kita sudah memahami bahwa seed yang sama harus menghasilkan hasil acak yang sama. Di Unity, salah satu cara untuk mengatur seed tersebut adalah dengan memanggil `Random.InitState(seed)`.

Fungsi `Random.InitState(seed)` digunakan untuk mengatur **initial state** dari generator acak Unity. Dengan kata lain, kita memberi “titik awal” yang sama kepada sistem random, sehingga urutan nilai acak yang dihasilkan dapat diprediksi dan diulang.

```csharp
int seed = 12345;
Random.InitState(seed);

int value = Random.Range(0, 100);
```

Urutan eksekusi pada kode di atas adalah sebagai berikut:

1. Variabel `seed` diberi nilai `12345`.
2. `Random.InitState(seed)` dipanggil untuk mengatur state random Unity.
3. `Random.Range(0, 100)` dipanggil untuk mengambil satu nilai acak dari generator yang sudah diinisialisasi.

Jika kode ini dijalankan berulang kali dengan seed yang sama, dan urutan pemanggilan `Random.Range` juga sama, maka nilai `value` yang dihasilkan akan sama. Inilah dasar dari **reproducibility** dalam sistem acak.

Dalam konteks **Procedural Content Generation**, kemampuan ini sangat penting. Misalnya, ketika kita membuat dungeon, spawn musuh, item, atau event acak, seed yang sama dapat menghasilkan layout atau kejadian yang sama. Hal ini membantu designer menguji level tertentu, melacak bug, atau membuat challenge harian yang bisa dibagikan ke pemain.

Perlu diperhatikan bahwa `Random.InitState()` memengaruhi **random state Unity** secara umum. Artinya, jika banyak sistem di game menggunakan `Random` dari Unity, perubahan seed dapat memengaruhi sistem lain yang juga bergantung pada generator acak yang sama. Untuk sistem yang lebih besar atau lebih kompleks, slide ini juga memberikan catatan bahwa kita bisa mempertimbangkan `System.Random` agar generator acak lebih terisolasi.

### Inti yang Harus Ditekankan

- `Random.InitState(seed)` digunakan untuk mengatur **initial state** generator acak Unity.
- Seed yang sama akan menghasilkan **urutan nilai acak yang sama**, selama urutan pemanggilan fungsi random juga sama.
- `Random.Range(0, 100)` adalah contoh penggunaan nilai acak setelah state random diinisialisasi.
- `Random.InitState()` memengaruhi random state Unity, sehingga perlu diperhatikan jika banyak sistem menggunakan generator acak yang sama.
- Untuk sistem besar, isolasi generator acak bisa dipertimbangkan, misalnya dengan `System.Random`.

### Transisi ke Slide Berikutnya

Setelah memahami cara menginisialisasi seed menggunakan `Random.InitState`, langkah berikutnya adalah membandingkan dua pendekatan generator acak yang umum digunakan, yaitu `UnityEngine.Random` dan `System.Random`, beserta kelebihan masing-masing.

---

## Slide 019 - UnityEngine.Random vs System.Random

### Narasi

Dalam materi PCG, pilihan generator acak menentukan seberapa mudah sistem game dikendalikan, diuji, dan dipisahkan antar modul. Di Unity, mahasiswa akan sering menemui dua jalur: **UnityEngine.Random** dan **System.Random**. Keduanya menghasilkan angka acak, tetapi cara kerja dan dampaknya terhadap arsitektur game berbeda.

**UnityEngine.Random** adalah utilitas bawaan Unity yang paling cepat digunakan. Contoh paling sederhana adalah:

```csharp
Random.Range(0, 10);
```

Cara ini cocok untuk kebutuhan kecil seperti animasi, efek suara, atau variasi visual sederhana. Kelebihannya adalah **mudah**, **umum digunakan**, dan **terintegrasi langsung dengan Unity**. Mahasiswa tidak perlu membuat objek generator tambahan; cukup panggil method static.

Namun, karena `UnityEngine.Random` bekerja sebagai state global, seluruh pemanggilan random di project dapat berbagi urutan acak yang sama. Artinya, jika satu sistem memanggil `Random.Range` lebih banyak dari yang diperkirakan, urutan random sistem lain bisa berubah. Untuk sistem kecil ini biasanya tidak masalah, tetapi untuk PCG yang melibatkan banyak modul, isolasi menjadi penting.

**System.Random** adalah generator acak dari C# yang dapat dibuat sebagai instance. Contoh:

```csharp
System.Random rng = new System.Random(seed);
int value = rng.Next(0, 10);
```

Di sini, setiap `rng` memiliki state sendiri. Kita bisa membuat satu generator untuk level generator, satu lagi untuk enemy spawner, dan satu lagi untuk dialog. Dengan cara ini, **seed per sistem** lebih mudah dikontrol dan tidak saling mengganggu.

Secara intuisi praktis, gunakan **UnityEngine.Random** ketika kita ingin solusi cepat dan tidak perlu mengisolasi stream acak. Gunakan **System.Random** ketika sistem acak menjadi bagian penting dari desain game, terutama PCG, di mana hasil harus bisa diulang, diuji, dan dipisahkan antar komponen.

Sebelum lanjut, mahasiswa perlu memahami bahwa perbedaan ini bukan hanya soal syntax, tetapi soal **kontrol state**. Generator yang terisolasi membuat sistem lebih mudah di-debug dan lebih stabil ketika banyak modul berjalan bersamaan.

### Inti yang Harus Ditekankan

- **UnityEngine.Random** mudah dan terintegrasi dengan Unity, tetapi bekerja sebagai state global.
- **System.Random** dapat dibuat sebagai instance, sehingga memungkinkan beberapa generator terpisah.
- Untuk PCG, **seed per sistem** lebih mudah dikontrol jika menggunakan generator yang terisolasi.
- Pilihan generator memengaruhi kemudahan pengujian, reproduksi hasil, dan arsitektur sistem acak.

### Transisi ke Slide Berikutnya

Setelah memahami dua generator acak ini, langkah berikutnya adalah melihat bagaimana **seed** membantu debugging, terutama ketika bug hanya muncul pada kondisi acak tertentu.

---

## Slide 020 - Seed untuk Debugging

### Narasi

Pada slide ini kita membahas **seed** sebagai alat penting untuk **debugging** dalam **Procedural Content Generation** atau **PCG**.

Tanpa seed, hasil generation biasanya berbeda setiap kali game dijalankan. Kondisi ini membuat bug menjadi sulit dilacak karena masalah hanya muncul kadang-kadang.

```text
Bug muncul hanya kadang-kadang.
Sulit mengulang kondisi yang sama.
```

Masalahnya bukan hanya pada bug itu sendiri, tetapi pada **ketidakmampuan mengulang kondisi yang sama**. Dalam pengembangan game, sebuah bug baru bisa diperbaiki jika developer dapat mereproduksi kondisi yang menyebabkan bug tersebut.

Dengan seed, generator random dapat menghasilkan urutan nilai yang sama secara konsisten. Artinya, jika sebuah level bermasalah dihasilkan dari seed tertentu, developer dapat menjalankan ulang seed yang sama untuk mendapatkan kondisi yang identik.

```text
Seed 8421 menghasilkan level bermasalah.
Developer menjalankan ulang seed 8421.
Bug dapat dianalisis.
```

Dalam PCG, seed sebaiknya **ditampilkan** atau **disimpan**. Hal ini penting karena seed menjadi identitas dari hasil generation tertentu.

Contoh sederhana:

```text
Current Seed: 8421
```

Jika seed ditampilkan di layar, mahasiswa atau developer dapat mencatat kondisi saat bug terjadi. Jika seed disimpan, misalnya pada log, file save, atau data test, maka hasil generation dapat dipanggil kembali untuk pengujian.

Secara praktis, seed membantu proses debugging menjadi lebih terarah. Developer tidak perlu menebak-nebak level mana yang bermasalah. Cukup gunakan seed yang sama, amati perilaku game, lalu perbaiki masalah yang ditemukan.

Sebelum lanjut, hal penting yang harus dipahami adalah: **seed bukan sekadar angka acak**, melainkan **penanda kondisi generation** yang memungkinkan hasil PCG diulang, dibandingkan, dan dianalisis.

### Inti yang Harus Ditekankan

- **Seed** membuat hasil PCG dapat direproduksi secara konsisten.
- Tanpa seed, bug yang muncul acak menjadi sulit dilacak dan diperbaiki.
- Seed sebaiknya **ditampilkan** atau **disimpan** agar kondisi generation dapat dilaporkan dan diuji ulang.
- Contoh `Current Seed: 8421` menunjukkan cara sederhana untuk melacak hasil generation tertentu.

### Transisi ke Slide Berikutnya

Setelah memahami bagaimana seed membantu debugging, langkah berikutnya adalah melihat apa saja yang dikendalikan oleh PCG. Pada slide berikutnya, kita akan membahas **parameter PCG** yang menentukan bentuk dan karakter hasil generation.

---

## Slide 021 - Parameter PCG

### Narasi

**Parameter PCG** adalah nilai yang mengatur bagaimana konten game dihasilkan secara prosedural. Intuisi sederhananya, parameter bukan sekadar angka acak, melainkan "tuas desain" yang menentukan karakter hasil generation.

Untuk **procedural spawning**, parameter biasanya mengatur jumlah, lokasi, dan jenis NPC yang muncul. Contoh parameter yang umum digunakan adalah:

```text
enemyCount
spawnAreaSize
minDistanceFromPlayer
maxEnemyPerZone
enemyTypeWeights
```

Setiap parameter memiliki peran berbeda. `enemyCount` menentukan jumlah musuh, `spawnAreaSize` menentukan luas area spawn, `minDistanceFromPlayer` menjaga agar NPC tidak muncul terlalu dekat dengan pemain, `maxEnemyPerZone` membatasi kepadatan musuh per zona, dan `enemyTypeWeights` mengatur komposisi jenis musuh. Dengan parameter ini, spawning tidak hanya acak, tetapi tetap sesuai aturan desain dan pengalaman bermain.

Untuk **random level**, parameter biasanya mengatur bentuk dan struktur peta. Contoh parameter yang dapat digunakan adalah:

```text
mapWidth
mapHeight
wallProbability
roomCount
minRoomSize
maxRoomSize
corridorWidth
```

Parameter seperti `mapWidth` dan `mapHeight` menentukan ukuran peta, `wallProbability` memengaruhi seberapa padat dinding, `roomCount` menentukan jumlah ruangan, `minRoomSize` dan `maxRoomSize` mengatur batas ukuran ruangan, sedangkan `corridorWidth` menentukan lebar lorong. Perubahan kecil pada parameter ini dapat menghasilkan peta yang terasa sangat berbeda, misalnya lebih terbuka, lebih labirin, atau lebih sulit dijelajahi.

Hal penting yang harus dipahami mahasiswa adalah **parameter menentukan karakter hasil generation**. Algoritma yang sama dapat menghasilkan konten yang mudah, sulit, rapat, terbuka, atau seimbang tergantung nilai parameter yang diberikan. Karena itu, parameter sebaiknya dipilih secara sadar, bukan hanya diisi angka sembarangan.

Dalam praktik, parameter juga menjadi dasar tuning dan debugging. Jika hasil generation terasa tidak sesuai, developer dapat memeriksa parameter mana yang memengaruhi masalah tersebut, misalnya jarak spawn terlalu dekat, jumlah musuh terlalu banyak, atau ukuran ruangan terlalu sempit. Dengan parameter yang jelas, proses pengembangan menjadi lebih terarah dan mudah dievaluasi.

### Inti yang Harus Ditekankan

- **Parameter PCG** adalah pengendali utama hasil generation.
- Parameter spawning mengatur **jumlah, lokasi, kepadatan, dan jenis NPC**.
- Parameter level generation mengatur **ukuran peta, dinding, ruangan, dan lorong**.
- Nilai parameter menentukan **karakter gameplay**, bukan hanya tampilan konten.
- Parameter yang jelas memudahkan **tuning, evaluasi, dan debugging**.

### Transisi ke Slide Berikutnya

Setelah memahami parameter sebagai pengendali generation, langkah berikutnya adalah melihat bagaimana parameter diproses menjadi konten game melalui **PCG Pipeline**.

---

## Slide 022 - PCG Pipeline

### Narasi

**PCG Pipeline** adalah alur kerja yang mengubah parameter desain menjadi konten game yang dapat digunakan di dunia permainan. Intuisinya, procedural content generation tidak langsung “menyihir” objek ke dalam scene; ia melewati tahap yang bisa dikontrol, diperiksa, dan diuji.

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

Tahap-tahap ini penting karena hasil PCG harus tetap masuk akal secara gameplay. Tanpa pipeline, konten yang dihasilkan bisa terlalu acak, tidak seimbang, atau bahkan tidak dapat dimainkan.

Urutan pipeline dapat dipahami sebagai berikut:

1. **Input Parameter**  
   Sistem menerima aturan dasar, misalnya `enemyCount`, `spawnAreaSize`, atau `minDistanceFromPlayer`. Parameter ini menentukan bentuk hasil yang diinginkan.

2. **Random / Seed**  
   Nilai acak dihasilkan dari `seed`. Jika `seed` sama, hasil generation bisa sama pula. Ini sangat berguna untuk pengujian, debugging, dan reproduksi masalah.

3. **Generate Candidate Content**  
   Sistem membuat kandidat konten, misalnya posisi acak untuk enemy. Pada tahap ini, konten masih berupa “calon” dan belum tentu valid.

4. **Validate Content**  
   Kandidat diperiksa terhadap aturan. Contoh pengujiannya: jarak dari player cukup, tidak berada di dalam dinding, tidak tumpang tindih, dan tidak berada di area yang tidak terjangkau.

5. **Place Content in World**  
   Konten yang lolos validasi baru diletakkan ke dunia game. Dalam implementasi engine, tahap ini biasanya berarti membuat objek, mengatur posisi, dan mendaftarkannya ke scene.

6. **Evaluate / Debug**  
   Hasil akhir dievaluasi. Developer bisa menampilkan visualisasi, log, atau marker untuk melihat apakah generation berjalan sesuai harapan.

Contoh sederhana dari pipeline ini adalah:

```text
Parameter: 10 enemy
Seed: 123
Generate posisi acak
Cek jarak dari player
Spawn enemy
Tampilkan debug
```

Pada contoh ini, sistem ingin membuat 10 enemy. `seed` bernilai `123` membuat proses acak bisa diulang dengan hasil yang sama. Sistem kemudian menghasilkan posisi acak, memeriksa jarak dari player, dan hanya enemy yang lolos validasi yang di-spawn. Terakhir, debug membantu developer melihat hasil generation secara langsung.

Hal yang harus dipahami sebelum lanjut adalah bahwa **pipeline** adalah struktur kerja, bukan satu metode generation tertentu. Di dalamnya bisa digunakan berbagai cara untuk menghasilkan konten, tetapi alur input, validasi, penempatan, dan evaluasi tetap menjadi dasar yang penting.

### Inti yang Harus Ditekankan

- **PCG Pipeline** adalah alur kerja dari parameter ke konten dunia game.
- **Seed** membuat hasil acak dapat direproduksi dan memudahkan debugging.
- **Validasi** memastikan konten yang dihasilkan layak dimainkan.
- **Debug** membantu developer memahami hasil generation secara visual dan teknis.

### Transisi ke Slide Berikutnya

Setelah memahami alur pipeline, kita masuk ke salah satu cara mengisi tahap **Generate Candidate Content**, yaitu **Constructive PCG**, yang membangun konten langsung berdasarkan aturan tertentu.

---

## Slide 023 - Constructive PCG

### Narasi

Pada slide ini kita masuk ke salah satu pendekatan dasar dalam **Procedural Content Generation**, yaitu **Constructive PCG**.

**Constructive PCG** adalah metode menghasilkan konten game secara langsung menggunakan aturan tertentu. Artinya, sistem membangun konten langkah demi langkah berdasarkan aturan yang sudah ditentukan, bukan sekadar menunggu hasil acak tanpa struktur.

Contoh sederhana yang ditampilkan pada slide adalah:

```text
Buat room
Hubungkan room dengan corridor
Letakkan start
Letakkan goal
Letakkan enemy
```

Urutan ini penting karena menunjukkan bagaimana konten dibangun secara bertahap:

1. Sistem membuat `room` sebagai ruang utama level.
2. `room` dihubungkan dengan `corridor` agar struktur level dapat dilalui.
3. Sistem menempatkan `start` sebagai posisi awal pemain.
4. Sistem menempatkan `goal` sebagai tujuan akhir.
5. Sistem menempatkan `enemy` sebagai elemen tantangan.

Intuisi praktisnya adalah: jika aturan generation sudah cukup baik, hasil yang dibangun langsung dapat digunakan. Inilah alasan mengapa **Constructive PCG** biasanya cepat dan sederhana.

Metode ini cocok untuk membuat level, penempatan objek, atau struktur dunia yang membutuhkan kontrol langsung dari desainer. Dalam konteks game, posisi `room`, `corridor`, `start`, `goal`, dan `enemy` dapat memengaruhi perilaku NPC, pathfinding, dan tingkat kesulitan level.

Namun, mahasiswa perlu memahami satu hal penting: kualitas hasil sangat bergantung pada kualitas aturan. Jika aturan terlalu sederhana, hasil bisa membosankan. Jika aturan terlalu ketat, hasil bisa tidak konsisten. Karena itu, **Constructive PCG** sering menjadi titik awal yang baik sebelum mencoba metode generation yang lebih kompleks.

### Inti yang Harus Ditekankan

- **Constructive PCG** membangun konten langsung menggunakan aturan, bukan hanya menghasilkan konten secara acak.
- Urutan pembuatan konten penting: `room`, `corridor`, `start`, `goal`, dan `enemy` membentuk struktur level yang dapat dimainkan.
- Keunggulan utamanya adalah cepat, sederhana, dan mudah dikontrol.
- Kualitas hasil sangat bergantung pada aturan generation yang digunakan.

### Transisi ke Slide Berikutnya

Selanjutnya, kita akan melihat contoh **Constructive PCG** yang lebih konkret, yaitu pembuatan random level sederhana berbasis grid.

---

## Slide 024 - Contoh Constructive PCG

### Narasi

Pada slide ini, kita melihat **contoh konkret** dari **Constructive PCG** dalam bentuk **random level sederhana**. Ide utamanya adalah konten tidak diambil dari template yang sudah jadi, melainkan **dibangun langsung** oleh aturan generation.

```text
1. Buat grid kosong
2. Pilih beberapa posisi room
3. Buat room pada posisi tersebut
4. Hubungkan room dengan corridor
5. Letakkan player di room pertama
6. Letakkan goal di room terakhir
```

Alur ini bisa dibaca sebagai **pipeline generation** yang sederhana:

1. `grid` kosong menjadi representasi dunia.
2. Posisi `room` dipilih secara acak atau berdasarkan aturan.
3. `room` dibuat pada posisi yang valid.
4. `corridor` menghubungkan antar-`room` agar level dapat dilalui.
5. `player` ditempatkan di `room pertama` sebagai titik awal.
6. `goal` ditempatkan di `room terakhir` sebagai tujuan.

Kunci dari contoh ini adalah **kualitas aturan**. Jika aturan sudah memastikan `room` tidak tumpang tindih, `corridor` terhubung, dan posisi `player` serta `goal` valid, maka hasil generation dapat langsung dimainkan.

Artinya, **Constructive PCG** tidak perlu mengevaluasi hasil secara rumit pada tahap awal. Selama aturan generation cukup baik, sistem sudah menghasilkan konten yang **playable**.

Kelebihan yang tampak dari contoh ini adalah prosesnya **cepat**, **mudah dipahami**, dan **cocok untuk praktikum awal**. Mahasiswa dapat melihat bagaimana beberapa langkah sederhana sudah mampu menghasilkan level yang memiliki struktur dasar: area, koneksi, titik awal, dan tujuan.

Sebelum lanjut, yang perlu dipahami adalah bahwa contoh ini menunjukkan **cara membangun konten dari nol**, bukan memilih atau memperbaiki konten yang sudah ada. Pemahaman ini penting karena metode ini menjadi dasar untuk level sederhana, spawning, dan environment yang dapat digunakan dalam gameplay.

### Inti yang Harus Ditekankan

- **Constructive PCG** membangun konten langsung dari aturan, bukan dari template atau evaluasi kompleks.
- Contoh level sederhana menggunakan `grid`, `room`, `corridor`, `player`, dan `goal`.
- Jika aturan generation valid, hasil dapat langsung dimainkan.
- Metode ini cepat, mudah dipahami, dan cocok untuk praktikum awal.

### Transisi ke Slide Berikutnya

Selanjutnya, kita akan membahas kelebihan **Constructive PCG** secara lebih lengkap, termasuk mengapa metode ini cocok untuk implementasi sederhana, performa cepat, dan penggunaan pada level kecil.

---

## Slide 025 - Kelebihan Constructive PCG

### Narasi

**Constructive PCG** memiliki posisi yang praktis dalam desain game karena konten dibangun langsung dari aturan yang sudah ditentukan. Alih-alih mencari solusi dari banyak kemungkinan, sistem cukup menjalankan langkah-langkah seperti memilih posisi `room`, membuat `corridor`, atau menempatkan `enemy` pada `grid`. Cara kerja ini membuat alur pembuatan konten lebih mudah diprediksi dan lebih mudah dijelaskan kepada mahasiswa.

Kelebihan pertama adalah **implementasi relatif sederhana**. Dalam konteks Unity, proses ini dapat dimulai dari `grid` kosong, lalu menggunakan `random` untuk memilih posisi, memeriksa validitas sederhana, dan menempatkan objek. Karena tidak perlu membangun pipeline evaluasi yang rumit, mahasiswa dapat fokus pada logika dasar seperti `spawn`, `placement`, dan `level generation`.

Kelebihan kedua adalah **performa cepat**. Constructive PCG biasanya tidak melakukan pencarian yang berat, sehingga cocok untuk dijalankan saat runtime. Misalnya, game dapat memanggil fungsi `GenerateLevel()` ketika pemain masuk ke area tertentu, atau memanggil `SpawnEnemy()` untuk menempatkan musuh secara acak. Kecepatan ini penting untuk konten yang harus dibuat berulang kali.

Kelebihan ketiga adalah **mudah digunakan real-time**. Karena prosesnya ringan, pendekatan ini dapat dipakai untuk konten yang berubah-ubah selama permainan, seperti item yang muncul, obstacle sederhana, atau musuh yang ditempatkan ulang. Untuk level kecil, waktu pembuatan biasanya tidak menjadi masalah, sehingga pengalaman bermain tetap lancar.

Pendekatan ini juga **tidak memerlukan evaluasi kompleks**. Sistem cukup mengikuti aturan yang sudah ada, tanpa perlu menilai banyak kandidat level secara bersamaan. Hal ini membuat debugging lebih mudah: jika hasil tidak sesuai, mahasiswa dapat memeriksa aturan pembuatan, bukan model evaluasi yang rumit.

Contoh penerapannya antara lain:

- `spawn item acak` di area tertentu.
- `generate obstacle sederhana` pada `grid`.
- `dungeon room-corridor sederhana` untuk level kecil.
- `random enemy placement` untuk menempatkan musuh secara cepat.

Secara intuitif, Constructive PCG adalah pilihan yang baik ketika tujuan utama adalah **kecepatan, kesederhanaan, dan kontrol langsung** terhadap hasil. Untuk sistem perilaku NPC, penempatan awal yang cepat juga memungkinkan logika `pathfinding` atau `steering` berjalan setelah objek muncul. Mahasiswa perlu memahami bahwa kualitas hasil sangat bergantung pada aturan yang dibuat, tetapi pembahasan batasannya akan dilakukan pada slide berikutnya.

### Inti yang Harus Ditekankan

- **Implementasi sederhana** karena konten dibangun langsung dari aturan, bukan dari pencarian kompleks.
- **Performa cepat** sehingga cocok untuk real-time spawning, level kecil, dan penempatan musuh.
- **Tidak memerlukan evaluasi kompleks**, sehingga lebih mudah diuji dan disesuaikan.

### Transisi ke Slide Berikutnya

Setelah memahami mengapa Constructive PCG praktis dan cepat, kita perlu melihat batasannya: aturan yang kurang baik dapat menghasilkan konten yang sulit dimainkan atau tidak konsisten.

---

## Slide 026 - Kekurangan Constructive PCG

### Narasi

Setelah melihat kelebihan **Constructive PCG**, kita perlu memahami batasannya. Pendekatan ini membangun konten secara langsung dari aturan, misalnya menempatkan `room`, `obstacle`, atau `enemy` berdasarkan parameter. Kelebihannya memang cepat dan sederhana, tetapi kualitas hasil sangat bergantung pada kualitas aturan.

Intuisi praktisnya: **Constructive PCG** seperti merakit level dengan resep. Jika resepnya baik, hasilnya bisa konsisten. Namun, jika resep tidak mempertimbangkan interaksi antar elemen, level bisa tampak valid secara lokal tetapi gagal secara global.

Masalah utama muncul ketika aturan tidak menjamin **playability**. Dalam game, konten bukan hanya objek yang muncul, tetapi harus bisa dimainkan. Jika `start` dan `goal` tidak terhubung, pemain atau NPC tidak dapat mencapai tujuan. Jika `enemy` muncul di posisi tidak valid, perilaku seperti `pathfinding`, `steering`, atau `finite state machine` bisa gagal.

Contoh masalah yang sering terjadi:

```text
Start dan goal tidak terhubung.
Enemy muncul di posisi tidak valid.
Obstacle menutup semua jalan.
Room saling bertumpuk.
```

Empat kasus ini menunjukkan satu hal penting: **Constructive PCG** tidak otomatis melakukan validasi. Ia hanya mengikuti aturan pembuatan, bukan aturan ketermainan. Akibatnya, level bisa lolos dari proses generate tetapi gagal saat diuji oleh pemain atau sistem game.

Kekurangan lain adalah kesulitan memenuhi `constraint` kompleks. Misalnya, kita ingin level memiliki jalur utama, jalur rahasia, jarak aman antar `enemy`, dan kepadatan `obstacle` tertentu. Semakin banyak `constraint`, semakin sulit aturan konstruktif menjaga semuanya sekaligus.

Variasi juga bisa terasa repetitif. Jika parameter acak hanya sedikit atau distribusinya tidak dirancang baik, pemain akan melihat pola yang sama berulang kali. Untuk memperbaikinya, developer sering perlu melakukan banyak **tuning parameter**, seperti mengubah probabilitas spawn, ukuran `room`, atau jarak antar `obstacle`.

Sebelum lanjut, mahasiswa perlu memahami bahwa **Constructive PCG** cocok untuk konten sederhana dan real-time, tetapi tidak cukup untuk level yang membutuhkan jaminan keterhubungan, validitas posisi, dan keseimbangan.

### Inti yang Harus Ditekankan

- **Constructive PCG** membangun konten langsung dari aturan, sehingga kualitas hasil sangat bergantung pada aturan tersebut.
- Tanpa validasi, hasil bisa tidak **playable**, misalnya `start` dan `goal` tidak terhubung atau `enemy` muncul di posisi tidak valid.
- `constraint` kompleks dan variasi yang tidak repetitif sering membutuhkan banyak **tuning parameter**.

### Transisi ke Slide Berikutnya

Karena Constructive PCG tidak selalu menjamin hasil yang valid, pendekatan berikutnya adalah **Generate-and-Test PCG**, yang menambahkan tahap pengujian sebelum konten digunakan.

---

## Slide 027 - Generate-and-Test PCG

### Narasi

Setelah kita melihat bahwa constructive PCG bisa menghasilkan konten yang dibuat berdasarkan aturan, tetapi belum tentu playable, pendekatan **Generate-and-Test** memberi strategi yang lebih praktis.

Intuisinya sederhana: sistem tidak perlu menjamin bahwa setiap kandidat langsung benar. Sistem cukup membuat kandidat, lalu mengujinya terhadap syarat yang sudah ditentukan. Jika kandidat lolos, kandidat tersebut diterima. Jika tidak, kandidat dibuang dan proses diulang.

Alur utamanya dapat dilihat sebagai pipeline berikut:

```text
Generate candidate
        ↓
Test / Validate
        ↓
Valid?
 ├─ Ya → gunakan
 └─ Tidak → generate ulang
```

Input pada tahap `Generate candidate` biasanya berupa parameter acak atau aturan dasar pembuatan konten. Outputnya masih berupa kandidat, bukan konten final. Tahap `Test / Validate` adalah tahap kontrol kualitas. Di sinilah sistem memeriksa apakah kandidat memenuhi constraint penting, misalnya apakah `start` terhubung ke `goal`, apakah posisi masih `walkable`, atau apakah konten tidak melanggar aturan dasar game. Keputusan `Valid?` menentukan apakah kandidat dipakai atau dibuat ulang.

Contoh sederhana pada slide adalah pembuatan dungeon acak:

```text
Buat dungeon acak
Cek apakah start terhubung ke goal
Jika tidak, buat ulang
```

Di sini, kandidat `dungeon` dibuat terlebih dahulu. Setelah itu, sistem melakukan pengecekan konektivitas antara `start` dan `goal`. Jika `start` dan `goal` tidak terhubung, `dungeon` tersebut tidak layak dipakai karena pemain atau agent tidak dapat mencapai tujuan. Maka sistem membuat `dungeon` baru sampai ditemukan kandidat yang valid. Pola ini sangat berguna ketika membuat konten yang valid sejak awal sulit, tetapi mengecek validitasnya relatif lebih mudah.

Untuk memahami pendekatan ini, mahasiswa perlu memperhatikan tiga hal:

- `Generate` tidak selalu menghasilkan konten final; ia hanya menghasilkan kandidat.
- `Test / Validate` harus menggunakan aturan yang jelas, terukur, dan relevan dengan gameplay.
- `generate ulang` membuat sistem menjadi iteratif, sehingga kualitas hasil bergantung pada kualitas validasi dan jumlah percobaan yang diizinkan.

Dalam konteks game cerdas, pendekatan ini membantu memastikan konten yang dihasilkan aman untuk perilaku agent. Misalnya, level yang tidak terhubung dapat membuat `pathfinding` gagal, posisi spawn yang tidak valid dapat membuat objek tidak muncul dengan benar, dan konten yang melanggar constraint dapat merusak pengalaman bermain. Dengan kata lain, **Generate-and-Test** memindahkan sebagian tanggung jawab dari proses pembuatan ke proses pemeriksaan.

### Inti yang Harus Ditekankan

- **Generate-and-Test** adalah pola PCG: buat kandidat, uji validitas, terima atau buat ulang.
- Tahap `Test / Validate` menentukan apakah konten benar-benar playable, bukan hanya berhasil dibuat.
- Pendekatan ini berguna ketika validasi lebih mudah daripada menjamin hasil valid sejak awal.
- Validasi harus jelas dan efisien, misalnya mengecek konektivitas `start` ke `goal`.

### Transisi ke Slide Berikutnya

Selanjutnya, kita akan melihat contoh konkret **Generate-and-Test** pada spawning, di mana kandidat posisi diuji sebelum objek benar-benar dibuat di dalam game.

---

## Slide 028 - Contoh Generate-and-Test

### Narasi

Pada slide ini kita melihat contoh konkret dari pola **Generate-and-Test** dalam konteks **spawning enemy**.

Ide utamanya sederhana: sistem tidak langsung meletakkan musuh di posisi acak, tetapi terlebih dahulu membuat kandidat posisi, lalu mengecek apakah posisi tersebut layak digunakan.

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

Alur ini bisa dibaca sebagai proses validasi bertahap.

- `Generate random position` adalah langkah awal, yaitu membuat kandidat posisi musuh.
- `Cek apakah posisi walkable` memastikan posisi tersebut berada di area yang bisa dimasuki, misalnya tidak berada di dinding, luar peta, atau area yang tidak bisa dilalui.
- `Cek jarak dari player` memastikan musuh tidak muncul terlalu dekat dengan pemain, karena hal itu bisa terasa tidak adil atau mengganggu gameplay.
- `Cek tidak bertumpuk dengan enemy lain` memastikan beberapa musuh tidak muncul di posisi yang sama, yang bisa menyebabkan visual aneh atau perilaku AI yang tidak stabil.
- Jika semua cek berhasil, sistem melakukan `spawn enemy`.
- Jika ada satu saja cek yang gagal, sistem akan `cari posisi lain` dan mengulang proses generate-test.

Contoh ini menunjukkan mengapa **random murni** sering kali kurang aman untuk konten game.

Jika kita hanya memilih posisi acak tanpa validasi, musuh bisa muncul di tempat yang tidak masuk akal, misalnya di dalam dinding, terlalu dekat dengan pemain, atau bertumpuk dengan musuh lain.

Dengan **Generate-and-Test**, sistem menjadi lebih terkendali karena setiap kandidat posisi harus melewati beberapa syarat sebelum benar-benar digunakan.

Namun, pendekatan ini juga memiliki risiko.

Jika aturan validasi terlalu ketat, sistem bisa kesulitan menemukan posisi yang valid.

Misalnya, jika jarak minimum dari pemain terlalu besar, area walkable terlalu sempit, dan jumlah musuh yang harus muncul terlalu banyak, maka proses pencarian posisi bisa gagal atau memakan waktu lebih lama.

Karena itu, mahasiswa perlu memahami bahwa **Generate-and-Test** bukan hanya soal membuat konten acak, tetapi juga soal menyeimbangkan kebebasan generasi dengan aturan validasi yang masuk akal.

### Inti yang Harus Ditekankan

- **Generate-and-Test** untuk spawning berarti sistem membuat kandidat posisi, lalu memvalidasi posisi tersebut sebelum digunakan.
- Validasi biasanya mengecek hal seperti `walkable`, jarak dari `player`, dan apakah posisi sudah ditempati oleh `enemy` lain.
- Pendekatan ini lebih aman daripada **random murni** karena mencegah musuh muncul di posisi yang tidak valid atau tidak nyaman bagi pemain.
- Jika aturan validasi terlalu ketat, sistem bisa gagal menemukan posisi valid, sehingga aturan perlu dirancang seimbang.

### Transisi ke Slide Berikutnya

Selanjutnya kita akan melihat **Validation Rules**, yaitu aturan-aturan yang digunakan untuk mengecek kualitas hasil PCG secara lebih umum, tidak hanya untuk spawning, tetapi juga untuk level, item, room, dan elemen konten lainnya.

---

## Slide 029 - Validation Rules

### Narasi

Pada slide sebelumnya, kita melihat **generate-and-test** untuk posisi spawn. Di slide ini, kita melangkah ke lapisan yang lebih umum: **validation rules** untuk konten hasil **PCG**.

**Validation rules** adalah aturan yang digunakan untuk mengecek apakah hasil generasi sudah memenuhi kualitas minimum. Aturan ini tidak menentukan bagaimana konten dibuat, tetapi menilai apakah konten yang sudah dibuat layak digunakan.

Contoh rules:

```text
Level harus memiliki path dari start ke goal.
Start dan goal harus cukup jauh.
Enemy tidak boleh muncul terlalu dekat dari start.
Jumlah item minimal 3.
Setiap room harus terhubung.
Boss harus berada di room terakhir.
```

Secara sederhana, alurnya adalah:

1. Sistem PCG menghasilkan konten, misalnya level, spawn, atau item.
2. Setiap aturan validasi diperiksa terhadap hasil tersebut.
3. Jika semua aturan terpenuhi, konten diterima.
4. Jika ada aturan yang gagal, konten ditolak, diperbaiki, atau digenerate ulang.

Dalam implementasi, aturan-aturan ini biasanya menjadi kondisi yang diperiksa oleh fungsi seperti `validateLevel()`. Fungsi tersebut dapat mengembalikan `true` jika semua aturan terpenuhi, atau mengumpulkan daftar `violations` jika ada aturan yang gagal.

Beberapa aturan di atas memiliki tujuan berbeda:

- **Path dari `start` ke `goal`** memastikan pemain memiliki kemungkinan menyelesaikan level.
- **Jarak `start` dan `goal`** menjaga level tidak terlalu pendek atau trivial.
- **Posisi `enemy`** mencegah pengalaman awal yang terlalu sulit.
- **Jumlah `item`** menjaga level memiliki konten yang cukup.
- **Keterhubungan `room`** mencegah area terisolasi yang tidak dapat diakses.
- **Posisi `boss`** menjaga struktur progresi level tetap konsisten.

Dengan aturan ini, sistem PCG menjadi lebih terkontrol. Hasil acak tidak langsung dipakai, tetapi melewati pemeriksaan terlebih dahulu. Hal ini membuat konten yang dihasilkan lebih konsisten dengan desain game.

Hal penting yang harus dipahami mahasiswa adalah bahwa **validation rules** bukan pengganti desain. Aturan harus jelas, terukur, dan tidak terlalu ketat. Jika aturan terlalu ketat, sistem dapat gagal menemukan konten valid, seperti yang sudah kita lihat pada contoh spawn sebelumnya.

### Inti yang Harus Ditekankan

- **Validation rules** berfungsi sebagai filter kualitas untuk hasil PCG.
- Aturan harus dapat diperiksa secara programatik, misalnya melalui fungsi `validateLevel()`.
- Validasi membuat konten lebih konsisten, aman, dan sesuai desain.
- Aturan yang terlalu ketat dapat menyebabkan kegagalan generasi.

### Transisi ke Slide Berikutnya

Selanjutnya, kita akan membahas constraint yang paling menentukan dari aturan-aturan ini: **playability**, yaitu apakah level benar-benar bisa dimainkan.

---

## Slide 030 - Playability Constraint

### Narasi

Pada slide ini kita membahas **playability constraint**, yaitu batasan yang paling penting dalam **Procedural Content Generation** untuk level.

```text
Level harus bisa dimainkan.
```

Artinya, hasil generator tidak cukup hanya terlihat seperti level yang valid secara visual atau struktural. Level tersebut harus benar-benar memungkinkan **player** untuk bertindak, bergerak, dan menyelesaikan tujuan permainan.

Dalam PCG level, constraint playability menjadi dasar sebelum kita menilai aspek lain seperti kesulitan, variasi, atau keseruan. Jika level tidak bisa dimainkan, maka aturan lain yang lebih halus tidak akan terlalu berarti.

Contoh constraint playability antara lain:

- player bisa bergerak dari `start` ke `goal`
- tidak ada area penting yang tertutup
- `enemy` tidak langsung membunuh player
- `resource` cukup untuk menyelesaikan tantangan
- `obstacle` tidak membuat game mustahil

Secara intuitif, constraint ini memastikan bahwa level memiliki **ruang aksi** yang masuk akal bagi player. Player harus punya kemungkinan untuk maju, mengambil keputusan, dan menyelesaikan level tanpa terjebak pada kondisi yang tidak mungkin.

Untuk level berbasis grid, playability dapat diuji dengan **pathfinding**. Kita bisa memodelkan setiap sel grid sebagai node, lalu memeriksa apakah ada jalur dari `start` ke `goal` melalui sel yang bisa dilalui.

Algoritma seperti `BFS` atau `A*` dapat digunakan untuk pengujian ini. `BFS` cocok untuk grid sederhana karena mencari jalur secara sistematis, sedangkan `A*` dapat membantu ketika kita ingin pencarian yang lebih efisien dengan bantuan heuristik.

Hasil dari pengujian ini cukup sederhana:

1. Jika path ditemukan, level memenuhi syarat dasar playability.
2. Jika path tidak ditemukan, level perlu diperbaiki atau digenerate ulang.

Poin penting yang harus dipahami mahasiswa adalah bahwa **playability adalah syarat minimum**, bukan jaminan bahwa level sudah menarik. Level yang bisa dimainkan belum tentu memiliki pacing, tantangan, atau pengalaman bermain yang baik. Namun, sebelum masuk ke aspek desain yang lebih kompleks, kita harus memastikan bahwa level tersebut feasible.

### Inti yang Harus Ditekankan

- **Playability constraint** adalah batasan paling dasar dalam PCG level: level harus bisa dimainkan.
- Constraint ini mencakup keterjangkauan `start` ke `goal`, area penting yang tidak tertutup, `enemy` yang tidak mematikan secara instan, `resource` yang cukup, dan `obstacle` yang tidak membuat level mustahil.
- Untuk level grid, playability dapat diuji menggunakan `BFS` atau `A*` dengan memeriksa apakah ada jalur valid dari `start` ke `goal`.
- Playability adalah syarat minimum; level yang bisa dimainkan belum tentu level yang menarik secara desain.

### Transisi ke Slide Berikutnya

Setelah memahami bahwa level harus bisa dimainkan, langkah berikutnya adalah melihat bagaimana pengujian playability ini diterapkan secara praktis menggunakan pathfinding dalam alur generate-and-test.

---

## Slide 031 - Generate-and-Test dengan Pathfinding

### Narasi

Setelah memahami bahwa level hasil **PCG** harus memenuhi **playability constraint**, langkah berikutnya adalah bagaimana constraint itu benar-benar diperiksa. Pendekatan yang paling sederhana adalah **Generate-and-Test**.

Ide dasarnya sangat intuitif: sistem tidak langsung menerima hasil acak. Sistem **generate** sebuah kandidat level, kemudian **test** apakah level tersebut layak dimainkan. Jika tidak layak, kandidat dibuang dan proses diulang.

```text
Generate map
    ↓
Gunakan BFS/A* dari Start ke Goal
    ↓
Path ditemukan?
    ├─ Ya → level valid
    └─ Tidak → generate ulang
```

Pada diagram ini, inputnya adalah **map** yang baru dibuat. Proses utamanya adalah menjalankan **pathfinding**, misalnya `BFS` atau `A*`, dari titik `Start` ke titik `Goal`. Outputnya ada dua: jika path ditemukan, level dinyatakan **valid**; jika tidak, level dinyatakan **tidak valid** dan generator harus membuat map baru.

Peran `BFS` atau `A*` di sini bukan hanya untuk pergerakan agen, tetapi juga sebagai **validator**. Dalam konteks PCG, pathfinding menjadi alat uji apakah area penting terhubung. Jika `Start` dan `Goal` tidak dapat dihubungi, berarti ada masalah seperti area tertutup, obstacle terlalu rapat, atau layout yang tidak memungkinkan player mencapai tujuan.

Secara praktis, pendekatan ini mudah diterapkan karena tidak perlu memahami seluruh aturan desain level secara eksplisit. Selama generator mampu membuat kandidat, dan pathfinding mampu menjawab pertanyaan “apakah ada jalur?”, kita sudah memiliki mekanisme dasar untuk menyaring konten yang tidak valid.

Yang perlu dipahami mahasiswa sebelum lanjut adalah: **Generate-and-Test** adalah pola **generate → validate → accept/reject**. Validasi di slide ini menggunakan **connectivity** melalui pathfinding. Pola ini menjadi dasar untuk constraint lain yang lebih kompleks, seperti jarak, penempatan enemy, atau penempatan item.

### Inti yang Harus Ditekankan

- **Generate-and-Test** adalah cara sederhana memvalidasi hasil **PCG** dengan menolak level yang tidak memenuhi syarat.
- `BFS` atau `A*` digunakan untuk memeriksa apakah `Start` dan `Goal` terhubung.
- Jika path ditemukan, level **valid**; jika tidak, level harus di-**generate ulang**.
- Pathfinding di sini berfungsi sebagai **quality control** untuk hasil procedural generation.

### Transisi ke Slide Berikutnya

Dengan skema generate → test → accept/reject, kita sudah melihat cara dasar memastikan level PCG layak dimainkan. Selanjutnya, kita akan membahas kelebihan pendekatan ini dan mengapa ia cocok untuk berbagai constraint level generation.

---

## Slide 032 - Kelebihan Generate-and-Test

### Narasi

Pada slide ini, kita membahas mengapa pendekatan **generate-and-test** menjadi pilihan yang praktis dalam **Procedural Content Generation** atau PCG. Ide dasarnya sederhana: sistem tidak langsung menerima hasil acak, tetapi membuat kandidat konten terlebih dahulu, lalu mengujinya terhadap aturan tertentu. Jika kandidat lolos, konten tersebut digunakan. Jika tidak, sistem membuat kandidat baru.

Kelebihan utama dari pendekatan ini adalah **hasil lebih aman**. Dalam level generation, konten yang dihasilkan tidak hanya harus terlihat menarik, tetapi juga harus bisa dimainkan. Dengan mekanisme pengujian, sistem dapat menolak level yang bermasalah sebelum ditampilkan ke pemain.

Beberapa kelebihan yang perlu dipahami mahasiswa adalah:

- **Hasil lebih aman**, karena konten yang lolos sudah melewati validasi.
- **Constraint tertentu dapat dijamin**, misalnya aturan jarak, keterhubungan, atau penempatan objek.
- **Cocok untuk level generation**, karena banyak level membutuhkan aturan minimal agar tetap playable.
- **Dapat menghindari konten tidak valid**, seperti area yang tidak bisa dicapai atau objek yang menghalangi jalur.
- **Mudah dipahami secara konsep**, karena alurnya mirip dengan proses coba, periksa, lalu ulangi jika gagal.

Contoh constraint yang sering digunakan antara lain:

- `connectivity`, untuk memastikan pemain dapat bergerak dari titik awal ke tujuan.
- `distance`, untuk menjaga jarak spawn, goal, atau objek penting agar tidak terlalu dekat atau terlalu jauh.
- `enemy placement`, untuk memastikan penempatan musuh tidak membuat level tidak seimbang atau tidak dapat dilewati.
- `item placement`, untuk memastikan item berada di lokasi yang masuk akal dan tidak menghalangi jalur.

Hubungan dengan slide sebelumnya juga penting. Jika pathfinding digunakan untuk menguji apakah ada jalur dari `Start` ke `Goal`, maka generate-and-test menjadi cara untuk menyaring hasil PCG. Level yang tidak memiliki jalur valid akan ditolak, lalu sistem mencoba membuat level baru. Dengan cara ini, PCG tidak hanya menghasilkan bentuk acak, tetapi juga memastikan bahwa bentuk tersebut mendukung perilaku game.

Yang perlu ditekankan adalah bahwa generate-and-test memberikan **kontrol kualitas minimal**. Ia membantu memastikan konten memenuhi aturan dasar, bukan sekadar menghasilkan variasi. Namun, kekuatan ini tidak berarti pendekatan ini selalu cepat atau selalu berhasil. Mahasiswa perlu memahami bahwa validasi adalah bagian penting dari pipeline PCG, terutama ketika konten harus tetap playable dan konsisten.

### Inti yang Harus Ditekankan

- **Generate-and-test** membuat konten lebih aman karena kandidat hasil PCG divalidasi sebelum digunakan.
- Constraint seperti `connectivity`, `distance`, `enemy placement`, dan `item placement` dapat dijadikan aturan validasi.
- Pendekatan ini cocok untuk level generation karena membantu menghindari konten tidak valid dan mudah dipahami secara konsep.

### Transisi ke Slide Berikutnya

Setelah memahami mengapa generate-and-test berguna, kita perlu melihat batasannya: kapan pendekatan ini bisa menjadi lambat, gagal, atau membutuhkan aturan tambahan agar prosesnya tetap terkendali.

---

## Slide 033 - Kekurangan Generate-and-Test

### Narasi

Setelah memahami bahwa **Generate-and-Test** memberikan hasil yang lebih aman karena konten divalidasi sebelum digunakan, kita perlu melihat sisi lain dari pendekatan ini. Pendekatan ini memang mudah dipahami, tetapi dalam praktik game AI, ia memiliki beberapa keterbatasan penting yang harus diperhatikan sebelum digunakan untuk **level generation**, **spawn point**, atau penempatan objek di lingkungan game.

Kekurangan utama pertama adalah prosesnya **bisa lebih lambat**. Setiap kandidat konten harus dibuat, lalu diuji terhadap aturan. Jika banyak kandidat yang gagal, sistem akan melakukan percobaan berulang. Dalam game, hal ini dapat memengaruhi waktu loading, responsivitas NPC, atau proses pembuatan level secara real-time.

```text
Coba 100 kali mencari posisi spawn valid.
Jika gagal, hentikan atau longgarkan aturan.
```

Contoh di atas menggambarkan pola kerja **Generate-and-Test** secara sederhana. Sistem mencoba mencari posisi `spawn` yang valid, misalnya posisi yang tidak bertabrakan dengan dinding, tidak terlalu dekat dengan pemain, dan berada di area yang dapat dicapai. Jika setelah 100 percobaan posisi valid tidak ditemukan, sistem tidak boleh terus mencoba tanpa batas.

Masalah berikutnya adalah pendekatan ini **dapat gagal jika constraint terlalu ketat**. Misalnya, aturan penempatan musuh mensyaratkan jarak minimum dari pemain, jarak maksimum dari item, dan area spawn harus berada di ruangan tertentu. Jika ketiga aturan tersebut terlalu ketat, kemungkinan tidak ada posisi yang memenuhi semuanya. Oleh karena itu, sistem perlu memiliki mekanisme pembatasan percobaan.

```text
maxAttempts
```

Variabel `maxAttempts` digunakan agar loop pencarian tidak berjalan tanpa akhir. Jika jumlah percobaan sudah mencapai batas, sistem harus mengambil keputusan, misalnya berhenti, memberi peringatan, menggunakan fallback, atau melonggarkan sebagian aturan. Ini penting dalam implementasi game karena proses yang tidak terbatas dapat menyebabkan lag atau kegagalan runtime.

Kekurangan lain yang sering diabaikan adalah **tidak dijaminnya kualitas estetika**. Sebuah posisi spawn bisa valid secara aturan, tetapi tetap terasa buruk secara desain. Misalnya, musuh muncul di tempat yang terlalu mudah terlihat, item berada di sudut yang tidak menarik, atau layout level valid tetapi membosankan. Jadi, validitas teknis belum tentu sama dengan kualitas pengalaman bermain.

Terakhir, **testing rules harus dirancang dengan baik**. Jika aturan validasi terlalu longgar, konten yang seharusnya tidak valid bisa lolos. Jika aturan terlalu ketat, sistem bisa gagal menemukan hasil. Mahasiswa perlu memahami bahwa dalam **Generate-and-Test**, kualitas hasil sangat bergantung pada kualitas aturan pengujian, bukan hanya pada proses pembuatannya.

### Inti yang Harus Ditekankan

- **Generate-and-Test** dapat lebih lambat karena melakukan banyak percobaan dan validasi.
- Jika `constraint` terlalu ketat, sistem bisa gagal menemukan konten valid.
- Perlu menggunakan `maxAttempts` agar proses tidak berjalan tanpa batas.
- Hasil yang valid secara aturan belum tentu memiliki kualitas estetika yang baik.
- Kualitas `testing rules` sangat menentukan keberhasilan pendekatan ini.

### Transisi ke Slide Berikutnya

Setelah memahami kelebihan dan kekurangan **Generate-and-Test**, langkah berikutnya adalah membandingkannya dengan pendekatan **Constructive**, yaitu membangun konten secara langsung berdasarkan aturan.

---

## Slide 034 - Constructive vs Generate-and-Test

### Narasi

Pada slide ini, kita membandingkan dua strategi dasar dalam **Procedural Content Generation** atau **PCG**: **Constructive** dan **Generate-and-Test**. Keduanya digunakan untuk membuat konten game secara otomatis, misalnya posisi `spawn` NPC, penempatan objek, atau struktur level sederhana.

**Constructive** bekerja dengan cara **membangun konten langsung** mengikuti aturan yang sudah ditentukan. Intuisinya sederhana: jika aturan pembangunannya sudah cukup kuat, konten yang dihasilkan akan langsung masuk ke dalam batas yang diinginkan. Pendekatan ini biasanya lebih cepat karena tidak perlu melakukan banyak percobaan ulang.

**Generate-and-Test** bekerja dengan cara yang berbeda. Sistem terlebih dahulu **membuat kandidat konten**, kemudian **memvalidasi** apakah kandidat tersebut memenuhi aturan. Jika tidak valid, kandidat bisa ditolak, dimodifikasi, atau dibuat ulang. Cara ini lebih terkontrol karena ada tahap pemeriksaan, tetapi bisa lebih lambat jika banyak kandidat yang gagal.

Perbedaan konseptualnya dapat diringkas menjadi tiga hal:

1. **Sumber validitas**: **Constructive** mengandalkan aturan saat membangun, sedangkan **Generate-and-Test** mengandalkan pemeriksaan setelah konten dibuat.
2. **Trade-off kecepatan dan kontrol**: **Constructive** umumnya lebih cepat, tetapi berisiko menghasilkan konten tidak valid jika aturan kurang lengkap. **Generate-and-Test** lebih aman karena hasil dicek, tetapi bisa lebih lambat jika banyak kandidat gagal.
3. **Kecocokan penggunaan**: **Constructive** cocok untuk `spawn` sederhana, sedangkan **Generate-and-Test** lebih cocok untuk level dengan **constraint** seperti keterhubungan ruang, jalur yang valid, atau penempatan objek yang aman.

Dari sisi implementasi awal, **Constructive** biasanya lebih mudah karena cukup mengikuti aturan pembangunan. **Generate-and-Test** sedikit lebih kompleks karena perlu menyiapkan kandidat, aturan validasi, dan mekanisme penanganan kegagalan.

Dalam konteks game, pilihan strategi sangat bergantung pada jenis konten. Untuk menempatkan satu objek di area terbuka, **Constructive** sering sudah cukup. Namun untuk membuat level yang harus tetap terhubung, memiliki jalur yang bisa dilalui, atau menempatkan musuh pada posisi yang aman, **Generate-and-Test** lebih membantu karena hasil dapat diperiksa sebelum digunakan.

Hal penting yang harus dipahami mahasiswa adalah bahwa kedua pendekatan ini bukan pilihan yang saling meniadakan. Dalam praktik, keduanya dapat digabung agar proses pembuatan konten lebih cepat sekaligus lebih aman.

### Inti yang Harus Ditekankan

- **Constructive** membangun konten langsung dan biasanya lebih cepat, tetapi kualitas hasil sangat bergantung pada aturan pembangunan.
- **Generate-and-Test** membuat kandidat lalu memvalidasinya, sehingga lebih terkontrol, tetapi bisa lebih lambat jika banyak kandidat gagal.
- **Constructive** cocok untuk `spawn` sederhana, sedangkan **Generate-and-Test** lebih cocok untuk konten dengan **constraint** seperti keterhubungan level atau validitas jalur.
- Kedua pendekatan dapat digabung untuk mendapatkan proses **PCG** yang lebih efisien dan lebih aman.

### Transisi ke Slide Berikutnya

Setelah memahami perbedaan antara **Constructive** dan **Generate-and-Test**, langkah berikutnya adalah melihat bagaimana keduanya dapat digabungkan dalam pendekatan hybrid.

---

## Slide 035 - Hybrid PCG

### Narasi

Pada praktik pembuatan konten game, pendekatan PCG jarang hanya memakai satu strategi. **Hybrid PCG** muncul karena desainer ingin hasil yang cepat dibuat sekaligus tetap memenuhi aturan permainan.

Intuisinya sederhana: jangan langsung membuat seluruh level secara acak, dan jangan pula hanya membangun tanpa mengecek. Kita mulai dengan **constructive** untuk membentuk struktur dasar, lalu gunakan **generate-and-test** untuk memvalidasi bagian yang berisiko.

Contoh alurnya dapat dilihat pada potongan berikut:

```text
Constructive:
Buat room dan corridor

Generate-and-Test:
Cek apakah semua room terhubung
Cek apakah start-goal valid
Cek apakah enemy placement aman
```

Bagian pertama, `Constructive`, bertugas membangun elemen dasar seperti `room` dan `corridor`. Tujuannya adalah menghasilkan kerangka level yang sudah masuk akal secara spasial. Dengan cara ini, sistem tidak perlu mencoba banyak bentuk level dari nol.

Bagian kedua, `Generate-and-Test`, melakukan pengecekan terhadap hasil konstruksi. Pengecekan ini biasanya berupa validasi constraint:

- semua `room` terhubung,
- jalur dari `start` ke `goal` valid,
- penempatan `enemy` aman dan tidak melanggar aturan desain.

Jika validasi gagal, sistem dapat memperbaiki bagian tertentu, misalnya menambah `corridor`, memindahkan `enemy`, atau mencoba ulang penempatan. Karena perbaikan dilakukan pada struktur yang sudah ada, prosesnya lebih efisien daripada membuat seluruh level dari awal.

Keunggulan utama **hybrid** adalah keseimbangan. Dibandingkan **test total**, hybrid lebih cepat karena tidak semua elemen harus diuji dari nol. Dibandingkan **constructive murni**, hybrid lebih aman karena hasil akhir dicek terhadap constraint penting.

Sebelum lanjut, mahasiswa perlu memahami bahwa hybrid bukan sekadar menggabungkan dua teknik secara acak. Yang penting adalah menentukan bagian mana yang dibangun langsung dan bagian mana yang perlu divalidasi. Keputusan ini menentukan kualitas level, biaya komputasi, dan konsistensi pengalaman pemain.

### Inti yang Harus Ditekankan

- **Hybrid PCG** menggabungkan **constructive** dan **generate-and-test** untuk menyeimbangkan kecepatan dan keamanan hasil.
- Struktur dasar seperti `room` dan `corridor` dapat dibangun langsung, lalu divalidasi dengan constraint seperti konektivitas, `start-goal`, dan `enemy placement`.
- Hybrid lebih efisien daripada validasi total dan lebih andal daripada konstruksi murni.

### Transisi ke Slide Berikutnya

Setelah memahami cara kerja hybrid, langkah berikutnya adalah melihat bagaimana berbagai teknik PCG dikelompokkan berdasarkan karakteristiknya melalui **PCG taxonomy**.

---

## Slide 036 - PCG Taxonomy

### Narasi

Pada slide ini, kita beralih dari contoh **hybrid PCG** ke cara mengelompokkan teknik PCG secara lebih sistematis. **PCG taxonomy** bukan teknik baru, melainkan kerangka untuk memahami karakteristik setiap teknik.

Kerangka ini penting karena dalam pengembangan game, kita sering harus memilih apakah konten dibuat saat game berjalan atau sebelum game dimainkan, apakah hasilnya harus konsisten atau boleh bervariasi, dan apakah prosesnya sepenuhnya otomatis atau melibatkan desainer.

Beberapa dimensi **PCG taxonomy** yang perlu dipahami:

- **`online` vs `offline`**: kapan konten dibuat, yaitu saat game berjalan atau sebelum game dimainkan.
- **`necessary` vs `optional`**: apakah konten wajib untuk gameplay berjalan atau hanya menambah variasi.
- **`deterministic` vs `stochastic`**: apakah input yang sama selalu menghasilkan output yang sama, atau prosesnya mengandung unsur acak.
- **`constructive` vs `generate-and-test`**: apakah konten dibangun langsung agar valid, atau dibuat dulu lalu diuji.
- **`automatic` vs `mixed-initiative`**: apakah sistem bekerja sepenuhnya otomatis atau melibatkan keputusan desainer/pemain.
- **`generic` vs `adaptive`**: apakah teknik bersifat umum atau menyesuaikan konteks tertentu.

Dalam konteks game, dimensi-dimensi ini membantu kita menilai dampak PCG terhadap **NPC behavior**, `pathfinding`, `enemy placement`, dan desain level. Misalnya, generator yang `deterministic` memudahkan pengujian, sedangkan generator `stochastic` dapat memberi variasi pengalaman.

Hal yang harus dipahami sebelum lanjut adalah bahwa satu sistem PCG dapat memiliki beberapa label sekaligus. Sistem yang sama bisa bersifat `offline`, `necessary`, `constructive`, dan `mixed-initiative` pada saat yang bersamaan.

### Inti yang Harus Ditekankan

- **PCG taxonomy** adalah cara mengelompokkan teknik PCG berdasarkan karakteristiknya.
- Setiap dimensi taxonomy menjawab pertanyaan desain: kapan dibuat, apakah wajib, bagaimana hasil, bagaimana proses, siapa yang terlibat, dan seberapa umum.
- Satu sistem PCG dapat memiliki beberapa label sekaligus, sehingga taxonomy membantu memilih pendekatan yang tepat.

### Transisi ke Slide Berikutnya

Setelah memahami dimensi taxonomy, kita mulai dari dimensi waktu pembuatan konten: `online` versus `offline` PCG.

---

## Slide 037 - Online vs Offline PCG

### Narasi

**Online vs offline PCG** adalah salah satu dimensi penting dalam **PCG taxonomy**. Dimensi ini tidak menanyakan *apa* yang dibuat, tetapi *kapan* konten dibuat. Pertanyaan utamanya sederhana: apakah konten dihasilkan **saat game berjalan**, atau **sebelum game dimainkan**?

**Online PCG** berarti konten dibuat pada `runtime`. Intuisinya, game tidak menunggu semua konten tersedia sejak awal; konten muncul saat dibutuhkan oleh progres pemain. Pendekatan ini cocok untuk game yang membutuhkan variasi terus-menerus, dunia yang panjang, atau konten yang harus menyesuaikan kondisi permainan.

Contoh yang paling mudah dipahami:

- `endless runner` membuat segmen jalan secara terus-menerus,
- `enemy spawn` dilakukan saat `runtime` berdasarkan kondisi tertentu,
- `loot drop` muncul ketika enemy mati.

Dalam konteks perilaku NPC, konten yang dibuat online harus langsung dapat digunakan oleh sistem lain. Misalnya, jalur yang baru dibuat harus valid untuk `pathfinding`, posisi spawn harus masuk akal untuk `steering`, dan event spawn dapat memicu state tertentu pada `FSM` atau `behavior tree` NPC.

Implikasi praktis `online PCG` adalah sistem harus mampu menghasilkan konten yang valid, cepat, dan konsisten. Jika konten dibuat saat game berjalan, mahasiswa perlu memperhatikan performa, ukuran memori, serta apakah hasil generasi dapat direproduksi. Dalam implementasi game, hal ini sering muncul sebagai script `runtime` yang membangun objek, memuat aset, atau memvalidasi level yang baru dibuat.

**Offline PCG** berarti konten dibuat **sebelum game dimainkan**, lalu disimpan sebagai aset. Intuisinya, proses generasi terjadi di luar waktu main, sehingga hasilnya bisa diperiksa, diedit, dan dikurasi oleh designer. Pendekatan ini sering digunakan ketika kualitas, keseimbangan, atau konsistensi level lebih penting daripada variasi yang muncul secara instan.

Contoh `offline PCG`:

- tool yang digunakan designer untuk `generate dungeon`,
- `generate terrain` lalu diedit manual,
- `batch generate level` untuk menghasilkan banyak varian level.

Keuntungan `offline PCG` adalah konten yang dihasilkan sudah stabil. Sistem `pathfinding`, penempatan NPC, dan desain level dapat mengandalkan aset yang sudah ada. Mahasiswa perlu memahami bahwa `offline PCG` tidak berarti “lebih baik”; ia hanya berbeda dalam waktu pembuatan dan alur kerja produksi.

Perbedaan konseptual utama antara keduanya adalah **waktu generasi** dan **dampak desain**. `Online PCG` menekankan konten yang muncul saat bermain, sedangkan `offline PCG` menekankan konten yang sudah tersedia sebelum bermain. Keduanya dapat digunakan dalam satu game, misalnya level utama dibuat offline, sementara variasi spawn atau dekorasi dibuat online.

Sebelum lanjut, mahasiswa harus memahami bahwa pilihan online atau offline dipengaruhi oleh kebutuhan gameplay, ukuran konten, performa, alur kerja designer, dan seberapa besar variasi yang dibutuhkan saat `runtime`.

### Inti yang Harus Ditekankan

- **Online PCG** dibuat saat game berjalan, misalnya `endless runner`, `enemy spawn`, dan `loot drop`.
- **Offline PCG** dibuat sebelum game dimainkan, lalu disimpan sebagai aset, misalnya `generate dungeon`, `generate terrain`, dan `batch generate level`.
- Perbedaan utamanya adalah **waktu generasi**, bukan sekadar teknik yang digunakan.
- Konten yang dibuat online harus langsung valid untuk sistem game seperti `pathfinding`, `steering`, `FSM`, dan `behavior tree`.
- `Offline PCG` memberi ruang untuk kurasi, editing, dan stabilitas aset sebelum game dimainkan.

### Transisi ke Slide Berikutnya

Setelah memahami kapan konten dibuat, langkah berikutnya adalah memahami seberapa penting konten tersebut bagi game: apakah game tidak bisa berjalan tanpa PCG, atau PCG hanya menambah variasi.

---

## Slide 038 - Necessary vs Optional PCG

### Narasi

Pada slide ini kita membedakan dua peran `PCG` dalam game: apakah proses generate konten menjadi bagian inti dari permainan, atau hanya menjadi alat bantu variasi.

**Necessary PCG** adalah kondisi di mana game tidak dapat berjalan tanpa proses generate. Artinya, konten yang dibuat secara prosedural bukan sekadar pelengkap, tetapi menjadi struktur utama yang memungkinkan pemain terus bermain.

Contoh yang paling mudah dipahami:

- `endless procedural world`, di mana dunia atau jalur permainan terus dibuat saat pemain bergerak.
- `roguelike dungeon`, di mana setiap `run` membutuhkan dungeon baru agar permainan tetap bisa dilanjutkan.

Dalam kasus ini, jika sistem `PCG` berhenti atau gagal, game biasanya tidak bisa dilanjutkan secara normal. Pemain tidak lagi memiliki konten yang cukup untuk dimainkan.

**Optional PCG** berbeda. Di sini game tetap dapat berjalan meskipun proses generate tidak aktif atau diganti dengan konten manual. `PCG` digunakan untuk menambah variasi, mempercepat produksi, atau membuat pengalaman bermain tidak terlalu monoton.

Contohnya:

- `random loot` yang membuat item yang didapat pemain berbeda-beda.
- `random decoration` yang membuat lingkungan terlihat lebih hidup.
- variasi `enemy placement` yang membuat posisi musuh tidak selalu sama.

Untuk praktikum, pendekatan `PCG` biasanya bersifat optional. Game tetap dapat dimainkan dengan level atau konten yang sudah disiapkan, tetapi `PCG` memberi nilai tambah berupa variasi `gameplay`.

Poin penting yang harus dipahami mahasiswa adalah: sebelum memilih teknik `PCG`, kita perlu menentukan dulu apakah konten yang di-generate itu **wajib** untuk permainan atau hanya **opsional** untuk variasi. Jika wajib, sistem generate harus andal dan tidak boleh membuat game tidak bisa dimainkan. Jika opsional, `PCG` lebih fleksibel dan dapat digunakan untuk meningkatkan variasi tanpa membebani inti permainan.

### Inti yang Harus Ditekankan

- **Necessary PCG** membuat game tidak bisa berjalan tanpa proses generate.
- **Optional PCG** hanya membantu variasi, produksi konten, atau pengalaman bermain.
- Dalam praktikum, `PCG` umumnya bersifat optional tetapi tetap memberi nilai tambah pada `gameplay`.
- Mahasiswa perlu menentukan dulu peran `PCG` sebelum memilih teknik generate.

### Transisi ke Slide Berikutnya

Setelah kita tahu apakah `PCG` bersifat necessary atau optional, langkah berikutnya adalah memahami bagaimana output `PCG` dapat dikendalikan, yaitu melalui konsep deterministic dan stochastic.

---

## Slide 039 - Deterministic vs Stochastic

### Narasi

Pada slide ini kita membedakan dua cara sistem PCG menghasilkan konten: **deterministic** dan **stochastic**.

**Deterministic** berarti prosesnya dapat diprediksi. Jika input dan parameter sama, output selalu sama. Dalam PCG, input bisa berupa `seed`, ukuran map, aturan dungeon, atau konfigurasi enemy placement.

Contoh sederhana:

```text
Seed 123 + parameter sama = output sama
```

Artinya, jika kita menjalankan generator dengan `seed 123` dan aturan yang sama, layout dungeon, posisi loot, atau variasi dekorasi akan terbentuk identik. Sifat ini penting untuk debugging, testing, dan reproduksi bug.

**Stochastic** berbeda karena menggunakan randomness. Hasilnya bervariasi dari satu run ke run lain. Namun, stochastic tidak selalu berarti tidak bisa diulang. Selama randomness dikendalikan oleh `seed`, sistem tetap dapat dibuat **reproducible**.

Dalam praktik PCG game, kita jarang memilih salah satu secara ekstrem. Sistem biasanya memadukan:

- aturan **deterministic** untuk menjaga konsistensi, keseimbangan, dan batasan desain,
- variasi **stochastic** untuk memberi rasa baru, kejutan, dan replayability.

Intuisi praktisnya: deterministic memberi "kerangka yang aman", stochastic memberi "variasi yang hidup". Misalnya, generator dungeon dapat memastikan setiap ruangan terhubung dan ada jalur valid, lalu memilih bentuk ruangan atau posisi item secara acak.

Sebelum lanjut, mahasiswa perlu memahami bahwa `seed` bukan sekadar angka acak. `seed` adalah kontrol reproduksi. Dengan `seed` yang sama, stochastic dapat menghasilkan konten yang sama, sehingga sistem tetap bisa diuji meskipun hasilnya tampak acak.

### Inti yang Harus Ditekankan

- **Deterministic** menghasilkan output sama untuk input dan parameter yang sama.
- **Stochastic** menghasilkan variasi, tetapi tetap bisa reproducible jika menggunakan `seed`.
- PCG game biasanya menggabungkan aturan deterministic dan variasi stochastic agar konten konsisten sekaligus bervariasi.

### Transisi ke Slide Berikutnya

Setelah memahami bagaimana hasil PCG bisa dikendalikan dan divariasikan, langkah berikutnya adalah melihat siapa yang menginisiasi proses generation: apakah sistem berjalan otomatis, atau ada kolaborasi dengan designer.

---

## Slide 040 - Automatic vs Mixed-Initiative PCG

### Narasi

Setelah memahami **deterministic** dan **stochastic**, kita beralih ke pertanyaan lain: siapa yang mengendalikan proses pembuatan konten? Pada **PCG**, ada dua pendekatan utama, yaitu **Automatic PCG** dan **Mixed-Initiative PCG**.

**Automatic PCG** adalah sistem yang menghasilkan konten secara mandiri setelah parameter diberikan. Generator langsung membuat hasil akhir tanpa campur tangan designer saat proses generation berlangsung.

Pendekatan ini cocok untuk konten yang membutuhkan variasi cepat, misalnya level `runtime`, dungeon sederhana, atau penempatan objek yang berbeda setiap kali game dijalankan. Kelebihannya adalah proses cepat dan mudah diotomasi, tetapi aturan pembatas tetap diperlukan agar hasil tetap playable.

**Mixed-Initiative PCG** adalah pendekatan kolaboratif antara sistem dan designer. Sistem tidak langsung menentukan hasil akhir, tetapi membantu designer dalam membuat konten.

Alurnya biasanya:

1. Sistem menghasilkan beberapa kandidat konten, misalnya beberapa layout dungeon.
2. Designer memilih kandidat yang paling sesuai atau melakukan edit.
3. Sistem melengkapi detail yang tersisa, seperti penempatan item, pintu, atau dekorasi.

Pendekatan ini memberi kontrol lebih besar kepada designer, sehingga hasil akhir lebih mudah disesuaikan dengan tujuan desain, keseimbangan, dan kualitas produksi.

Dalam `Unity`, **Mixed-Initiative PCG** dapat dibangun menggunakan `custom editor tool` yang menampilkan hasil generator dan memungkinkan designer memilih atau mengedit sebelum disimpan. Untuk praktikum awal, pendekatan yang lebih sederhana adalah `runtime automatic PCG`, karena lebih mudah diimplementasikan dan langsung terlihat hasilnya saat game berjalan.

Yang perlu dipahami mahasiswa adalah bahwa pilihan antara **automatic** dan **mixed-initiative** bukan soal mana yang lebih baik, melainkan soal kebutuhan: kecepatan dan variasi, atau kontrol desain dan kualitas hasil.

### Inti yang Harus Ditekankan

- **Automatic PCG** menghasilkan konten secara mandiri setelah parameter diberikan.
- **Mixed-Initiative PCG** melibatkan sistem dan designer secara kolaboratif.
- **Automatic** cocok untuk variasi `runtime` dan implementasi awal.
- **Mixed-Initiative** cocok untuk kontrol desain, editing, dan kualitas konten.
- Dalam `Unity`, mixed-initiative dapat memakai `custom editor tool`, tetapi praktikum awal cukup `runtime automatic PCG`.

### Transisi ke Slide Berikutnya

Setelah membahas siapa yang mengendalikan proses generation, langkah berikutnya adalah melihat apakah konten yang dihasilkan bersifat umum atau menyesuaikan kondisi pemain.

---

## Slide 041 - Generic vs Adaptive PCG

### Narasi

Setelah membahas apakah PCG dijalankan secara **automatic** atau **mixed-initiative**, kita masuk ke dimensi lain yang penting: apakah konten yang dihasilkan memperhatikan kondisi **player** tertentu atau tidak. Dimensi ini disebut **Generic vs Adaptive PCG**.

**Generic PCG** adalah sistem yang membuat konten tanpa membaca atau menyesuaikan kondisi player. Aturan generasi tetap berlaku untuk semua player, meskipun player tersebut memiliki gaya bermain, kemampuan, atau kebutuhan yang berbeda.

Contoh sederhana:

- `dungeon random` yang sama untuk semua player.
- `item random` yang muncul tanpa melihat inventory player.
- `enemy spawn` yang tidak berubah berdasarkan kemampuan player.

Secara praktis, generic PCG lebih mudah dibuat karena generator tidak perlu menerima banyak data player. Ia cukup menjalankan aturan acak atau aturan desain yang sudah ditentukan.

**Adaptive PCG** berbeda. Sistem ini membuat konten dengan memperhatikan kondisi player. Artinya, output PCG dapat berubah karena ada umpan balik dari perilaku atau status player.

Contoh adaptive PCG:

- `enemy spawn` menyesuaikan `playerSkill`.
- `loot` menyesuaikan kebutuhan player, misalnya player kekurangan healing item.
- `level difficulty` meningkat bertahap sesuai progres player.

Perbedaan konseptualnya bisa dilihat dari arah alurnya. **Generic PCG** bekerja seperti sistem terbuka: input aturan masuk, konten keluar, tetapi kondisi player tidak menjadi bagian dari proses. **Adaptive PCG** bekerja seperti sistem tertutup: kondisi player dibaca, lalu digunakan untuk memengaruhi konten yang dihasilkan.

Dalam konteks Unity, generic PCG bisa cukup menggunakan `Random` atau `seed` untuk menghasilkan layout, item, atau spawn point. Adaptive PCG biasanya membutuhkan variabel tambahan seperti `playerHealth`, `playerInventory`, `killCount`, atau `difficultyScore` yang kemudian dibaca oleh generator.

Hal yang harus dipahami mahasiswa sebelum lanjut adalah bahwa **generic vs adaptive** bukan soal siapa yang membuat konten, tetapi apakah konten tersebut menyesuaikan player atau tidak. Dimensi ini juga menjadi pintu menuju konsep **DDA** pada pertemuan berikutnya, tetapi di sini kita hanya membahas sisi PCG-nya.

### Inti yang Harus Ditekankan

- **Generic PCG** menghasilkan konten tanpa memperhatikan kondisi player tertentu.
- **Adaptive PCG** menghasilkan konten berdasarkan kondisi player, seperti skill, kebutuhan loot, atau difficulty.
- Perbedaan ini berbeda dari **automatic vs mixed-initiative**: yang satu membahas peran designer, yang lain membahas adaptasi terhadap player.

### Transisi ke Slide Berikutnya

Setelah memahami perbedaan generic dan adaptive, slide berikutnya akan merangkum seluruh dimensi PCG dalam satu taxonomy ringkas, sehingga mahasiswa bisa melihat posisi praktikum dalam keseluruhan klasifikasi.

---

## Slide 042 - PCG Taxonomy Ringkas

### Narasi

Slide ini memberikan **kerangka singkat** untuk memahami **Procedural Content Generation** atau **PCG**. Tujuannya bukan memperkenalkan satu algoritma tertentu, melainkan memberi mahasiswa cara mendeskripsikan sistem PCG secara konsisten. Dengan kerangka ini, kita bisa membandingkan desain level, spawn musuh, penempatan item, atau variasi lingkungan tanpa harus langsung masuk ke implementasi yang rumit.

Tabel pada slide membagi PCG ke dalam beberapa dimensi desain. Dimensi-dimensi ini membantu kita menjawab pertanyaan praktis: kapan konten dibuat, seberapa penting konten itu, bagaimana variasi dihasilkan, dan siapa yang mengendalikan prosesnya.

- **Kapan dan seberapa penting konten dibuat**
  - `Offline` berarti konten dibuat sebelum permainan berjalan, misalnya level yang sudah disimpan.
  - `Online` berarti konten dibuat saat permainan berjalan, misalnya spawn musuh atau variasi rintangan.
  - `Necessary` berarti konten dibutuhkan agar permainan bisa berjalan.
  - `Optional` berarti konten menambah variasi, tetapi tidak selalu menentukan kelangsungan permainan.

- **Bagaimana variasi dihasilkan**
  - `Deterministic` menghasilkan output yang sama jika input dan kondisi sama.
  - `Stochastic` melibatkan unsur acak, tetapi tetap bisa dikendalikan.
  - `Constructive` membangun konten secara langsung, misalnya menyusun tile atau menempatkan objek.
  - `Generate-and-Test` membuat beberapa kandidat lalu memilih yang memenuhi aturan.

- **Siapa yang mengendalikan dan untuk siapa konten dibuat**
  - `Automatic` berarti sistem berjalan tanpa campur tangan manusia saat runtime.
  - `Mixed-Initiative` berarti designer atau pemain ikut memengaruhi hasil.
  - `Generic` berarti konten tidak menyesuaikan pemain tertentu.
  - `Adaptive` berarti konten menyesuaikan kondisi pemain, misalnya skill atau kebutuhan.

Pada praktikum Pertemuan 9, kita memilih kombinasi yang ringan dan mudah diuji:

```text
Online
Optional
Stochastic with Seed
Constructive + Simple Validation
Automatic
Generic
```

Pilihan ini memiliki alasan desain yang jelas.

1. `Online` membuat konten bisa dibuat saat permainan berjalan, sehingga cocok untuk spawn atau variasi level sederhana.
2. `Optional` menjaga agar sistem tidak membebani inti permainan; jika gagal, permainan tetap bisa berjalan.
3. `Stochastic with Seed` memberi variasi, tetapi tetap dapat diulang karena nilai acak dikendalikan oleh `seed`.
4. `Constructive + Simple Validation` berarti kita membangun konten terlebih dahulu, lalu memeriksa aturan dasar seperti titik spawn yang valid atau area yang dapat dicapai.
5. `Automatic` membuat proses berjalan tanpa intervensi manual saat runtime.
6. `Generic` berarti konten tidak perlu menyesuaikan pemain tertentu pada tahap ini.

Kombinasi ini penting karena PCG tidak hanya soal "membuat acak". Konten yang dihasilkan akan memengaruhi perilaku game, misalnya jalur NPC, titik spawn musuh, penempatan item, atau validasi area yang bisa dijelajahi. Jika hasil PCG tidak tervalidasi, pemain bisa bertemu dengan rintangan yang tidak bisa dilewati atau musuh yang muncul di lokasi yang tidak masuk akal.

Sebelum lanjut, mahasiswa perlu memahami bahwa **taxonomy PCG** adalah alat desain. Kita tidak memilih satu istilah saja, tetapi memilih kombinasi dimensi yang sesuai dengan tujuan permainan, kompleksitas sistem, dan kebutuhan pengujian.

### Inti yang Harus Ditekankan

- **PCG taxonomy** adalah kerangka untuk mendeskripsikan sistem PCG, bukan satu algoritma tunggal.
- Praktikum memilih kombinasi ringan: `Online`, `Optional`, `Stochastic with Seed`, `Constructive + Simple Validation`, `Automatic`, dan `Generic`.
- `Seed` dan validasi sederhana penting agar hasil acak tetap dapat diuji, dapat diulang, dan aman untuk spawn atau pathfinding.
- `Adaptive` belum menjadi fokus utama di sini; tahap ini masih menggunakan konten `Generic`.

### Transisi ke Slide Berikutnya

Setelah kita memiliki kerangka untuk memilih jenis sistem PCG, langkah berikutnya adalah melihat apa saja konten yang bisa dihasilkan oleh PCG, mulai dari ruang, entitas, aturan, hingga variasi visual.

---

## Slide 043 - Jenis Konten yang Dapat Dibuat dengan PCG

### Narasi

Pada slide ini, kita melihat ruang lingkup konten yang dapat dihasilkan oleh **PCG**. Poin utamanya adalah bahwa **PCG** tidak terbatas pada pembuatan level. Ia dapat menghasilkan berbagai elemen yang membentuk pengalaman bermain.

```text
Game Content
├── Space
│   ├── Level
│   ├── Dungeon
│   └── Terrain
├── Entities
│   ├── Enemy
│   ├── Item
│   └── NPC
├── Rules
│   ├── Quest
│   ├── Objective
│   └── Challenge
└── Aesthetic
    ├── Decoration
    ├── Vegetation
    └── Visual variation
```

Cabang pertama adalah **Space**. Konten ini berupa `level`, `dungeon`, dan `terrain`. Secara intuitif, ini adalah struktur dunia tempat pemain dan agent bergerak. Bentuk ruang akan memengaruhi pergerakan, jarak, jalur, dan strategi. Dalam konteks game, `terrain` yang berbeda dapat mengubah kebutuhan **pathfinding** dan **steering**.

Cabang kedua adalah **Entities**. Di sini **PCG** dapat membuat `enemy`, `item`, dan `NPC`. Objek-objek ini penting karena dapat berinteraksi dengan pemain atau dengan sistem kecerdasan game. `enemy` dan `NPC` dapat memiliki perilaku, misalnya berpindah, menyerang, menghindar, atau mengikuti tujuan. `item` dapat menjadi target yang dicari atau sumber reward.

Cabang ketiga adalah **Rules**. **PCG** juga dapat menghasilkan `quest`, `objective`, dan `challenge`. Artinya, generator tidak hanya membuat objek, tetapi juga dapat membentuk tujuan bermain. Tujuan ini dapat memengaruhi **decision making** pada agent, karena agent perlu memilih tindakan yang sesuai dengan tujuan yang tersedia.

Cabang terakhir adalah **Aesthetic**. Konten seperti `decoration`, `vegetation`, dan `visual variation` tidak selalu mengubah aturan inti, tetapi sangat penting untuk kejelasan visual, suasana, dan pengalaman bermain. Dalam beberapa kasus, elemen estetika juga dapat menjadi obstacle atau penanda area, sehingga tetap berhubungan dengan pergerakan agent.

Untuk pertemuan ini, fokusnya dibatasi pada **spawning** dan **random level sederhana**. Dengan pembatasan ini, mahasiswa dapat memahami bagaimana konten dibuat secara otomatis, terkontrol, dan dapat divalidasi. Pendekatan yang digunakan adalah **stochastic with seed**, sehingga hasil acak tetap dapat diulang dan diuji.

Sebelum lanjut, hal yang perlu dipahami adalah bahwa **PCG** menghasilkan konten dalam empat kelompok besar. Setiap kelompok memiliki peran berbeda: **Space** membentuk dunia, **Entities** membentuk objek interaktif, **Rules** membentuk tujuan, dan **Aesthetic** membentuk tampilan. Pemahaman ini penting karena **spawning** dan **random level sederhana** akan menjadi dasar praktikum.

### Inti yang Harus Ditekankan

- **PCG** dapat menghasilkan konten dalam empat kelompok: **Space**, **Entities**, **Rules**, dan **Aesthetic**.
- Konten hasil **PCG** menjadi dasar bagi perilaku agent, **pathfinding**, **steering**, **finite state machine**, **behavior tree**, dan **decision making**.
- Fokus pertemuan adalah **spawning** dan **random level sederhana** dengan pendekatan **stochastic with seed**.

### Transisi ke Slide Berikutnya

Setelah memahami jenis konten yang dapat dibuat, langkah berikutnya adalah melihat bagaimana objek seperti `enemy`, `item`, atau `decoration` dapat dimunculkan secara otomatis melalui **procedural spawning**.

---

## Slide 044 - Procedural Spawning

### Narasi

Pada slide ini, kita masuk ke salah satu bentuk PCG yang paling mudah diamati, yaitu **procedural spawning**. Secara sederhana, **procedural spawning** adalah proses memunculkan objek secara otomatis berdasarkan aturan.

Mekanisme ini penting karena dunia game tidak harus diisi sepenuhnya secara manual. Sistem dapat menentukan objek apa yang muncul, berapa jumlahnya, dan di mana objek tersebut boleh berada. Dengan cara ini, game dapat tetap terasa hidup, bervariasi, dan seimbang tanpa membuat pemain mengalami konten yang sama persis di setiap sesi.

Objek yang dapat di-spawn biasanya mencakup:

- `enemy`,
- `item`,
- `obstacle`,
- `collectible`,
- `power-up`,
- `decoration`,
- `resource`.

Setiap objek memiliki peran berbeda dalam gameplay. `enemy` memengaruhi tantangan dan perilaku NPC, `item` serta `collectible` memengaruhi eksplorasi, `power-up` memengaruhi kemampuan pemain, `obstacle` memengaruhi jalur gerak, sedangkan `decoration` dan `resource` dapat memperkuat nuansa dunia atau mendukung sistem permainan.

Contoh pada slide menunjukkan pola aturan yang umum:

- Spawn 20 `coin` di area map.
- Spawn 5 `enemy` di luar `safe zone`.
- Spawn 3 `health pack` di lokasi acak.

Dari contoh tersebut, mahasiswa perlu melihat bahwa spawning bukan sekadar "menaruh objek secara acak". Ada tiga komponen penting: **jumlah**, **jenis objek**, dan **batasan lokasi**. Jumlah menentukan kepadatan, jenis objek menentukan efek gameplay, dan batasan lokasi menentukan apakah objek muncul di tempat yang masuk akal bagi pemain.

Sebelum lanjut ke detail teknis, hal yang harus dipahami adalah bahwa spawning adalah bentuk **rule-based content generation**. Aturan dapat berupa jumlah tertentu, zona aman, area map, atau lokasi acak yang masih berada dalam batasan desain. Dengan aturan ini, sistem dapat menghasilkan variasi tanpa membuat objek muncul secara tidak masuk akal.

### Inti yang Harus Ditekankan

- **Procedural spawning** adalah pemuatan objek secara otomatis berdasarkan aturan, bukan sekadar acak tanpa kontrol.
- Objek yang di-spawn dapat berupa `enemy`, `item`, `obstacle`, `collectible`, `power-up`, `decoration`, dan `resource`.
- Setiap aturan spawning biasanya menentukan **jumlah**, **jenis objek**, dan **lokasi/batasan area**.
- Spawning memengaruhi gameplay, tantangan, eksplorasi, dan perilaku NPC karena objek yang muncul menjadi bagian dari lingkungan yang harus direspons pemain.

### Transisi ke Slide Berikutnya

Setelah memahami apa yang di-spawn dan mengapa spawning perlu diatur, langkah berikutnya adalah menentukan di mana objek boleh muncul. Slide berikutnya akan membahas **spawn area**, yaitu area yang menjadi batasan lokasi untuk memunculkan objek.

---

## Slide 045 - Spawn Area

### Narasi

Pada slide ini kita membahas **spawn area**, yaitu area yang boleh digunakan untuk memunculkan objek secara prosedural. Setelah pada slide sebelumnya kita memahami apa saja yang dapat di-spawn, seperti enemy, item, obstacle, atau collectible, maka langkah berikutnya adalah menentukan **di mana objek tersebut boleh muncul**.

Secara intuitif, spawn area dapat dipahami sebagai **ruang legal** atau **zona penempatan**. Tanpa spawn area, objek bisa muncul di posisi yang tidak masuk akal, misalnya di luar map, di dalam dinding, di bawah tanah, atau di lokasi yang tidak sesuai dengan desain level. Dengan spawn area, sistem spawning menjadi lebih terkontrol, lebih mudah diuji, dan lebih konsisten secara gameplay.

Bentuk spawn area tidak selalu harus kotak sederhana. Beberapa bentuk yang umum digunakan adalah:

- **Rectangle**: area berbentuk kotak, paling mudah karena cukup membatasi rentang nilai pada sumbu tertentu.
- **Circle**: area melingkar, cocok untuk memunculkan objek di sekitar titik pusat.
- **Polygon**: area berbentuk banyak sisi, berguna jika spawn harus mengikuti bentuk ruangan atau jalur.
- **Volume**: area tiga dimensi, penting jika objek boleh muncul pada ketinggian tertentu.
- **Zone**: area logis, misalnya area pertempuran, area aman, atau area item.
- **Grid region**: area berbasis sel grid, cocok untuk game berbasis grid atau penempatan yang rapi.

Contoh paling sederhana adalah spawn area berbentuk persegi pada sumbu `x` dan `z`:

```text
x = -10 sampai 10
z = -10 sampai 10
```

Artinya, setiap posisi spawn harus berada di dalam kotak tersebut. Nilai `x` tidak boleh kurang dari `-10` dan tidak boleh lebih dari `10`. Hal yang sama berlaku untuk nilai `z`.

Dalam Unity, contoh implementasinya dapat ditulis seperti berikut:

```csharp
float x = Random.Range(-10f, 10f);
float z = Random.Range(-10f, 10f);
Vector3 position = new Vector3(x, 0f, z);
```

Pada kode tersebut, `Random.Range` digunakan untuk menghasilkan nilai acak dalam rentang tertentu. Variabel `x` menyimpan posisi acak pada sumbu X, sedangkan variabel `z` menyimpan posisi acak pada sumbu Z. Nilai `0f` pada sumbu Y digunakan agar objek berada pada bidang dasar, misalnya di atas ground.

Selanjutnya, `Vector3 position = new Vector3(x, 0f, z);` menggabungkan ketiga nilai tersebut menjadi satu posisi tiga dimensi. Posisi ini kemudian dapat digunakan untuk memunculkan objek, misalnya melalui `Instantiate` atau penempatan prefab di scene.

Urutan eksekusinya cukup sederhana:

1. Sistem memilih nilai `x` secara acak.
2. Sistem memilih nilai `z` secara acak.
3. Sistem membentuk posisi `Vector3` dari nilai `x`, `y`, dan `z`.
4. Objek ditempatkan pada posisi tersebut.

Hasil yang diharapkan adalah objek muncul secara acak, tetapi tetap berada di dalam area yang telah ditentukan. Untuk bentuk area yang lebih kompleks, seperti circle, polygon, atau volume, prinsip dasarnya tetap sama: sistem memilih atau menghasilkan kandidat posisi, kemudian memastikan posisi tersebut berada di dalam area spawn.

Poin penting yang perlu dipahami mahasiswa adalah bahwa **spawn area hanya menentukan ruang yang boleh digunakan**. Area spawn menjawab pertanyaan “di mana objek boleh muncul?”, tetapi belum menjawab pertanyaan seperti “apakah objek boleh muncul di dekat player?”, “apakah objek boleh muncul di dalam obstacle?”, atau “berapa banyak objek yang boleh muncul dalam satu area?”. Pembahasan tersebut akan masuk ke konsep spawn rule pada slide berikutnya.

### Inti yang Harus Ditekankan

- **Spawn area** adalah batas ruang yang boleh digunakan untuk memunculkan objek secara prosedural.
- Bentuk spawn area dapat berupa **rectangle**, **circle**, **polygon**, **volume**, **zone**, atau **grid region**.
- Contoh Unity menggunakan `Random.Range` untuk memilih nilai `x` dan `z` dalam rentang tertentu, lalu membentuk posisi dengan `Vector3`.
- Spawn area menentukan **ruang penempatan**, tetapi belum menentukan aturan tambahan seperti jarak player, obstacle, jumlah objek, atau waktu spawn.

### Transisi ke Slide Berikutnya

Setelah spawn area ditentukan, langkah berikutnya adalah memberi aturan agar objek tidak muncul di tempat yang tidak sesuai. Pada slide berikutnya kita akan membahas **spawn rule**, yaitu aturan yang membatasi dan mengarahkan proses pemunculan objek secara lebih spesifik.

---

## Slide 046 - Spawn Rule

### Narasi

Pada slide ini, kita membahas **Spawn Rule**, yaitu aturan yang mengatur pemunculan objek dalam game. Jika **spawn area** menentukan wilayah yang boleh digunakan, maka **spawn rule** menentukan batasan perilaku di dalam wilayah tersebut. Aturan ini penting karena spawning tidak hanya soal memilih posisi acak, tetapi juga menjaga pengalaman bermain tetap masuk akal.

Intuisi praktisnya sederhana: sistem spawning yang baik harus terasa adil dan terkontrol. Jika musuh muncul terlalu dekat dengan `player`, pemain bisa merasa tidak adil. Jika item muncul melayang di udara, dunia game menjadi tidak konsisten. Jika terlalu banyak musuh muncul dalam satu zona, ritme permainan bisa rusak. Karena itu, **spawn rule** berfungsi sebagai pengatur keseimbangan.

Contoh aturan pada slide dapat dibaca sebagai kondisi yang harus dipenuhi sebelum objek muncul:

```text
Enemy tidak boleh spawn di dekat player.
Enemy tidak boleh spawn di dalam obstacle.
Item harus spawn di atas ground.
Enemy maksimal 3 per zone.
Power-up hanya muncul setelah waktu tertentu.
```

Setiap baris tersebut mewakili jenis batasan yang berbeda. Batasan jarak menjaga fairness, batasan lingkungan menjaga konsistensi dunia, batasan jumlah menjaga keseimbangan, dan batasan waktu menjaga pacing. Dalam implementasi, aturan-aturan ini biasanya menjadi kondisi yang dicek sebelum objek dibuat atau diaktifkan.

Dengan adanya **spawn rule**, procedural spawning menjadi lebih terarah. Sistem tidak lagi hanya memilih titik secara acak, tetapi memilih titik yang sesuai dengan konteks gameplay. Hal ini sangat relevan untuk perilaku NPC, penempatan item, dan pengelolaan zona, karena setiap objek yang muncul harus mendukung tujuan desain, bukan sekadar memenuhi kebutuhan teknis.

Hal yang harus dipahami sebelum lanjut adalah bahwa **spawn rule** adalah lapisan aturan di atas spawn area. Spawn area menjawab pertanyaan “di mana yang boleh?”, sedangkan spawn rule menjawab pertanyaan “boleh atau tidak, dan dalam kondisi apa?”. Pemahaman ini menjadi dasar untuk mengecek posisi kandidat secara lebih rinci.

### Inti yang Harus Ditekankan

- **Spawn rule** adalah aturan yang membatasi pemunculan objek.
- Aturan ini menjaga fairness, konsistensi, keseimbangan, dan pacing permainan.
- Spawn rule membuat spawning acak menjadi lebih terarah dan sesuai desain.
- Spawn area menentukan wilayah, sedangkan spawn rule menentukan kondisi pemunculan.

### Transisi ke Slide Berikutnya

Setelah aturan pemunculan dipahami, langkah berikutnya adalah memastikan posisi kandidat benar-benar memenuhi syarat sebelum objek muncul.

---

## Slide 047 - Spawn Validation

### Narasi

Setelah aturan spawn didefinisikan, langkah berikutnya adalah **spawn validation**. Validasi ini berfungsi sebagai pengecekan terakhir sebelum objek benar-benar dipunculkan ke dunia game. Tujuannya adalah memastikan posisi kandidat tidak hanya memenuhi aturan, tetapi juga aman secara spasial dan gameplay.

Dalam sistem spawning, posisi acak sering kali belum tentu valid. Dunia game memiliki banyak kondisi yang berubah-ubah, seperti posisi player, objek yang sudah ada, obstacle, dan area yang bisa dilalui. Karena itu, sistem perlu memeriksa posisi kandidat terhadap state dunia saat itu.

Proses validasi biasanya dilakukan secara berurutan:

1. **Cek area spawn** — posisi harus berada di dalam area yang diizinkan.
2. **Cek NavMesh** — posisi harus berada di atas `NavMesh` agar NPC dapat bergerak dan melakukan pathfinding.
3. **Cek jarak player** — posisi tidak boleh terlalu dekat dengan player agar tidak terasa tidak adil atau mengganggu.
4. **Cek obstacle** — posisi tidak boleh berada di dalam atau menabrak obstacle.
5. **Cek jarak objek lain** — posisi tidak boleh terlalu dekat dengan objek lain agar tidak terjadi tumpang tindih atau perilaku aneh.

Di Unity, validasi ini dapat didukung oleh beberapa API, seperti `Physics.CheckSphere`, `Physics.OverlapSphere`, `NavMesh.SamplePosition`, dan `LayerMask`. API-API ini membantu sistem mengecek kondisi spasial secara cepat saat runtime.

`LayerMask` sangat penting dalam proses ini. Tanpa `LayerMask`, query fisika mungkin memeriksa semua collider di scene, termasuk objek yang tidak relevan. Dengan `LayerMask`, sistem hanya mengecek layer yang memang perlu dicek, misalnya obstacle, objek spawn, atau area tertentu. Hal ini membuat validasi lebih efisien dan lebih akurat.

Hasil dari validasi menentukan apakah posisi dapat digunakan. Jika semua cek lolos, objek dapat dipunculkan. Jika salah satu cek gagal, sistem spawning sebaiknya mencoba posisi lain, mencari posisi terdekat yang valid, atau menggunakan fallback. Tanpa validasi yang baik, NPC bisa muncul di tempat yang salah, terjebak, tidak bisa bergerak, atau membuat pengalaman bermain menjadi tidak konsisten.

### Inti yang Harus Ditekankan

- **Spawn validation** adalah pengecekan akhir untuk memastikan posisi spawn layak digunakan.
- Validasi mencakup area spawn, `NavMesh`, jarak player, obstacle, dan jarak antarobjek.
- `LayerMask` penting agar query hanya memeriksa objek yang relevan.
- Jika validasi gagal, sistem spawning perlu mencoba posisi lain atau melakukan fallback.

### Transisi ke Slide Berikutnya

Setelah memahami apa saja yang perlu divalidasi, kita akan mulai dari salah satu API yang paling sering dipakai untuk mengecek ruang kosong, yaitu `Physics.CheckSphere`.

---

## Slide 048 - Physics.CheckSphere

### Narasi

Pada tahap spawning, kita sering mendapat posisi acak yang secara matematis berada di area yang diizinkan, tetapi secara fisika masih bisa berada di dalam dinding, batu, atau objek lain. Untuk itu, **`Physics.CheckSphere`** menjadi alat yang sederhana dan cepat untuk memvalidasi apakah ruang di sekitar posisi tersebut masih kosong.

Secara intuitif, **`Physics.CheckSphere`** seperti menempatkan bola tak kasat mata pada posisi kandidat spawn. Jika bola itu menyentuh collider yang termasuk dalam `obstacleMask`, maka posisi dianggap tidak aman.

```csharp
bool blocked = Physics.CheckSphere(
    position,
    checkRadius,
    obstacleMask
);
```

Dalam potongan kode ini, `position` adalah titik pusat bola yang akan dicek, biasanya posisi acak hasil pencarian area spawn. `checkRadius` menentukan seberapa besar ruang kosong yang dibutuhkan, dan sebaiknya disesuaikan dengan ukuran objek yang akan di-spawn. `obstacleMask` adalah `LayerMask` yang membatasi collider mana saja yang dianggap penghalang, sehingga objek seperti player, ground, atau trigger tertentu dapat diabaikan bila memang tidak menghalangi spawn.

Hasil fungsi ini berupa nilai `bool`. Jika `blocked == true`, artinya ada collider yang berpotongan dengan bola cek, sehingga posisi tidak valid dan sebaiknya ditolak atau dicoba posisi lain. Jika `blocked == false`, posisi dianggap cukup kosong untuk melanjutkan proses spawning.

Fungsi ini sangat berguna untuk beberapa kebutuhan praktis:

- mencegah spawn di dalam obstacle,
- mencegah objek saling bertumpuk,
- mengecek ruang kosong sebelum objek diinstansiasi.

Yang perlu dipahami mahasiswa adalah **`Physics.CheckSphere`** bukan pengganti seluruh validasi spawn. Ia hanya menjawab satu pertanyaan penting: apakah ada tabrakan fisik pada radius tertentu? Untuk validasi yang lebih lengkap, kita tetap perlu memastikan posisi berada di area yang benar, berada di atas NavMesh bila NPC perlu bergerak, dan tidak terlalu dekat dengan player atau objek lain.

### Inti yang Harus Ditekankan

- **`Physics.CheckSphere`** mengecek apakah bola dengan radius tertentu di posisi tertentu berpotongan dengan collider pada `obstacleMask`.
- `blocked == true` berarti posisi spawn tidak valid karena ada obstacle atau objek lain yang menghalangi.
- `checkRadius` harus disesuaikan dengan ukuran objek spawn agar validasi realistis.
- `obstacleMask` penting untuk memilih layer collider yang benar-benar dianggap penghalang.

### Transisi ke Slide Berikutnya

Setelah memastikan posisi tidak bertabrakan dengan obstacle, langkah berikutnya adalah memastikan posisi tersebut berada di area yang dapat dilalui oleh NPC, khususnya ketika spawning dilakukan pada lingkungan 3D yang menggunakan NavMesh.

---

## Slide 049 - NavMesh.SamplePosition untuk Spawn

### Narasi

Pada tahap spawning, posisi acak yang dihasilkan belum tentu bisa digunakan oleh objek yang harus bergerak di dunia game. Jika objek tersebut adalah NPC, musuh, atau agen yang bergantung pada **pathfinding**, posisinya harus berada di area yang dapat dilalui. Di sinilah `NavMesh.SamplePosition()` berperan.

`NavMesh.SamplePosition()` digunakan ketika spawning dilakukan pada area 3D yang memiliki **NavMesh**. Fungsinya adalah mencari titik valid di sekitar posisi acak yang diberikan, lalu mengembalikan titik tersebut jika ditemukan. Dengan kata lain, fungsi ini membantu memastikan spawn tidak jatuh di luar jalur navigasi.

Contoh implementasinya adalah sebagai berikut:

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

Dalam potongan kode tersebut, `randomPosition` adalah posisi awal yang ingin divalidasi. `out hit` digunakan untuk menyimpan hasil pencarian dalam bentuk `NavMeshHit`. `sampleRadius` menentukan seberapa jauh pencarian titik valid dilakukan di sekitar posisi awal. Sementara itu, `NavMesh.AllAreas` menyatakan bahwa pencarian dilakukan pada seluruh area NavMesh yang tersedia.

Jika fungsi mengembalikan `true`, maka `hit.position` berisi posisi yang aman dan dapat digunakan sebagai `spawnPosition`. Posisi ini berada di atas NavMesh, sehingga objek yang di-spawn memiliki kemungkinan lebih besar untuk bergerak, berpatroli, mengejar, atau mengikuti jalur tanpa masalah navigasi.

Jika fungsi mengembalikan `false`, artinya tidak ada titik valid yang ditemukan dalam radius pencarian. Dalam praktik, kondisi ini biasanya ditangani dengan mencoba posisi acak lain, memperbesar `sampleRadius`, atau memilih fallback spawn yang sudah diketahui valid.

Sebelum lanjut, mahasiswa perlu memahami bahwa `NavMesh.SamplePosition()` bukan pengganti pengecekan tabrakan, tetapi pelengkap dari validasi spawn. `Physics.CheckSphere` memastikan area kosong dari obstacle, sedangkan `NavMesh.SamplePosition()` memastikan posisi berada di area yang dapat dilalui.

### Inti yang Harus Ditekankan

- `NavMesh.SamplePosition()` digunakan untuk memvalidasi posisi spawn pada area 3D yang memiliki **NavMesh**.
- `sampleRadius` menentukan jarak pencarian titik valid di sekitar `randomPosition`.
- Jika hasil `true`, `hit.position` adalah posisi spawn yang aman untuk objek yang bergantung pada navigasi.
- Jika hasil `false`, posisi acak tidak memiliki titik NavMesh valid dalam radius yang diberikan.
- Fungsi ini melengkapi validasi spawn: `Physics.CheckSphere` mengecek ruang kosong, sedangkan `NavMesh.SamplePosition()` mengecek area yang dapat dilalui.

### Transisi ke Slide Berikutnya

Setelah posisi spawn dinyatakan valid, langkah berikutnya adalah menentukan objek apa yang akan dibuat pada posisi tersebut. Pada slide berikutnya, kita akan membahas penggunaan **Object Prefab** sebagai template objek yang di-spawn.

---

## Slide 050 - Object Prefab

### Narasi

Dalam alur **Procedural Content Generation** atau **PCG**, sistem tidak hanya menentukan *di mana* objek muncul, tetapi juga *objek apa* yang akan dibuat. Dalam Unity, objek yang di-spawn biasanya berupa **prefab**.

**Prefab** adalah template objek yang sudah disiapkan di Project. Template ini bisa berupa:

- `enemyPrefab`
- `itemPrefab`
- `obstaclePrefab`
- `roomPrefab`
- `tilePrefab`

Prefab penting karena PCG dapat membuat banyak objek dari satu template yang sama, tanpa perlu membuat setiap objek secara manual.

Dengan cara ini, keputusan prosedural dan representasi objek terpisah. Sistem PCG memilih jenis objek dan posisi spawn, lalu Unity membuat instance objek dari prefab tersebut.

Contoh pemanggilannya:

```csharp
Instantiate(enemyPrefab, spawnPosition, Quaternion.identity);
```

Pada kode tersebut:

1. `enemyPrefab` adalah referensi ke prefab yang akan dibuat.
2. `spawnPosition` adalah posisi di mana objek akan muncul.
3. `Quaternion.identity` berarti objek dibuat tanpa rotasi awal.
4. `Instantiate` membuat objek baru di scene dari template prefab.

Jika `enemyPrefab` sudah memiliki komponen seperti controller, health, animasi, atau perilaku NPC, komponen tersebut ikut dibuat bersama objek. Setelah objek muncul, sistem permainan dapat langsung menggunakan objek tersebut untuk update, collision, pathfinding, atau interaksi.

Hasil yang diharapkan adalah objek yang konsisten, mudah dikelola, dan dapat dibuat dalam jumlah banyak. Mahasiswa perlu memahami bahwa prefab bukan sekadar model visual, melainkan template lengkap yang berisi struktur objek dan perilaku awal.

### Inti yang Harus Ditekankan

- **Prefab** adalah template objek Unity yang dapat di-instantiate berkali-kali.
- `Instantiate()` membuat objek baru dari prefab pada posisi dan rotasi tertentu.
- PCG menggunakan prefab untuk memisahkan **keputusan pembuatan konten** dari **objek yang sebenarnya dibuat**.
- Prefab dapat memuat komponen perilaku, sehingga NPC atau item langsung siap digunakan setelah spawn.

### Transisi ke Slide Berikutnya

Selanjutnya, kita akan melihat bagaimana level sederhana dapat dibangun secara prosedural menggunakan grid, lalu objek-objek seperti floor, wall, start, goal, enemy, dan item ditempatkan di dalamnya.

---

## Slide 051 - Procedural Level Sederhana

### Narasi

Pada slide ini kita melihat bentuk paling dasar dari **Procedural Content Generation** untuk level. Level tidak dibuat manual satu per satu, tetapi direpresentasikan sebagai **grid** yang dapat diproses oleh program.

Grid ini menggunakan simbol sederhana:

```text
0 = floor
1 = wall
S = start
G = goal
```

Dalam contoh visual, `#` dipakai sebagai penanda **wall**, sedangkan titik `.` menunjukkan **floor**. Simbol `S` dan `G` menandai posisi awal dan tujuan.

Contoh gridnya:

```text
S . . # .
. # . # .
. # . . .
. . # # .
. . . . G
```

Secara konseptual, grid adalah **peta dunia** yang sangat ringkas. Setiap sel memiliki arti: bisa dilalui, menjadi penghalang, atau menjadi titik penting. Dari data ini, sistem dapat membangun level di Unity.

Alurnya dapat dipahami sebagai berikut:

1. Program membaca grid.
2. Setiap sel dipetakan ke jenis objek: `floor`, `wall`, `start`, `goal`, `enemy`, atau `item`.
3. Unity menampilkan objek-objek tersebut di scene.
4. Level menjadi lingkungan yang dapat dipakai oleh agen, NPC, atau sistem pathfinding.

Bagian penting yang harus diperhatikan mahasiswa adalah bahwa grid bukan hanya gambar. Grid adalah **data struktur** yang menentukan apakah agen dapat bergerak, di mana NPC muncul, dan bagaimana pathfinding mencari rute dari `S` ke `G`.

Dengan representasi ini, level sederhana sudah cukup untuk menunjukkan hubungan antara **content generation** dan perilaku game. Level yang dihasilkan menjadi environment bagi agen; `S` dan `G` memberi tujuan; `wall` membatasi ruang gerak; `enemy` dan `item` memberi interaksi.

Sebelum lanjut, mahasiswa perlu memahami bahwa level prosedural yang baik harus tetap **playable** dan konsisten. Representasi grid membantu kita memeriksa hal itu karena setiap sel dapat dibaca, divalidasi, dan diubah secara sistematis.

### Inti yang Harus Ditekankan

- **Grid** adalah representasi sederhana level yang mudah diproses program.
- Simbol seperti `S`, `G`, `#`, dan `.` menentukan **floor**, **wall**, **start**, dan **goal**.
- Unity dapat menampilkan level dari grid dengan memetakan setiap sel ke objek atau tile.
- Level ini menjadi **environment** untuk NPC, pathfinding, dan interaksi game.
- Representasi grid penting karena memudahkan validasi dan pengembangan level prosedural.

### Transisi ke Slide Berikutnya

Setelah grid dasar terbentuk, langkah berikutnya adalah membuat variasi level secara acak. Namun, variasi acak perlu dikendalikan agar level tetap bisa dimainkan.

---

## Slide 052 - Random Level dengan Probability

### Narasi

Pada slide ini kita masuk ke cara paling sederhana untuk membuat level acak: **probabilitas per cell**. Intuisinya, setiap sel pada grid diberi kesempatan kecil untuk menjadi dinding. Jika peluangnya kecil, misalnya `wallProbability = 0.25`, maka sekitar seperempat sel diharapkan menjadi `wall` dan sisanya `floor`.

Pendekatan ini berbeda dari level manual. Di level manual, desainer menentukan posisi dinding secara sadar. Di pendekatan probabilistik, sistem membuat keputusan lokal untuk setiap cell, sehingga hasil bisa berbeda setiap kali level dibuat.

Pseudocode dasarnya adalah:

```text
for each cell:
    if random < wallProbability:
        cell = wall
    else:
        cell = floor
```

Urutan eksekusinya sederhana:

1. Sistem mengambil satu cell.
2. Sistem menghasilkan nilai `random` antara 0 dan 1.
3. Jika nilai itu lebih kecil dari `wallProbability`, cell ditandai sebagai `wall`.
4. Jika tidak, cell menjadi `floor`.
5. Proses diulang untuk semua cell.

Hasil yang diharapkan adalah grid yang tampak acak dan bervariasi. Dalam konteks game, grid ini bisa menjadi dasar untuk tilemap, penempatan obstacle, atau area yang tidak bisa dilewati. Jika ada NPC atau player yang bergerak, cell `wall` akan memengaruhi pathfinding dan steering karena menjadi area yang harus dihindari.

Namun, masalah utamanya adalah keputusan per cell bersifat **lokal** dan tidak menjamin struktur level secara keseluruhan. Beberapa kemungkinan masalah:

- `start` dan `goal` bisa berada di area yang terputus oleh dinding.
- Dinding bisa terlalu rapat sehingga jalur menjadi sempit atau tidak ada.
- Level bisa terlihat acak tetapi tidak **playable**.

Karena itu, setelah grid dibuat, kita perlu **validation**. Validasi memeriksa apakah level masih bisa dimainkan, misalnya apakah ada jalur dari `start` ke `goal`. Jika tidak, level bisa dibuat ulang, diperbaiki, atau parameter `wallProbability` disesuaikan.

Sebelum lanjut, mahasiswa perlu memahami bahwa random level dengan probabilitas adalah langkah awal, bukan solusi final. Ia berguna untuk variasi cepat, tetapi kualitas level tetap bergantung pada aturan pembatasan dan pengecekan.

### Inti yang Harus Ditekankan

- **Random per cell** menggunakan `wallProbability` untuk menentukan peluang sebuah cell menjadi `wall`.
- Pseudocode hanya melakukan keputusan lokal: jika `random < wallProbability`, cell menjadi `wall`, selain itu `floor`.
- Hasil acak bisa tidak playable karena `start` dan `goal` bisa terputus atau dinding terlalu banyak.
- **Validation** diperlukan untuk memastikan level masih bisa dimainkan sebelum digunakan.

### Transisi ke Slide Berikutnya

Karena pendekatan probabilitas per cell bisa menghasilkan level yang terlalu acak, pada slide berikutnya kita akan melihat cara yang lebih terarah, yaitu **Random Walk Level**, yang membangun jalur dari titik awal sehingga bentuk level lebih organik.

---

## Slide 053 - Random Walk Level

### Narasi

Pada slide ini kita beralih dari pendekatan yang menentukan setiap cell secara acak ke pendekatan yang membangun level dari sebuah jalur. Ide utamanya adalah **random walk**, yaitu proses di mana agen bergerak satu langkah demi satu langkah dengan arah yang dipilih secara acak. Dalam konteks PCG, agen ini bukan NPC yang sedang bermain, melainkan generator yang bertugas membentuk lantai dari dinding.

Intuisi praktisnya sederhana: jika kita hanya melempar peluang wall/floor pada setiap cell, hasilnya bisa berupa bintik-bintik acak yang sulit dimainkan. Dengan random walk, kita mulai dari satu titik yang pasti, misalnya posisi tengah, lalu setiap langkah yang diambil langsung menandai cell sebagai `floor`. Karena setiap cell yang dibuat terhubung dengan langkah sebelumnya, bentuk level cenderung berupa lorong atau ruang yang saling berhubungan.

Alur prosesnya dapat ditulis sebagai berikut:

```text
Start dari posisi tengah
Ulangi beberapa langkah:
    pilih arah acak
    bergerak satu cell
    jadikan cell sebagai floor
```

Urutan eksekusinya penting:

1. Generator memilih posisi awal.
2. Generator mengulang proses selama sejumlah langkah.
3. Pada setiap iterasi, generator memilih arah acak, bergerak satu cell, lalu menandai cell tersebut sebagai `floor`.

Hasil yang diharapkan adalah bentuk yang lebih **organik** dibandingkan grid yang sepenuhnya acak. Pola yang terbentuk sering menyerupai gua sederhana, lorong berkelok, atau ruang kecil yang bercabang. Karena bentuknya berasal dari pergerakan, level lebih mudah dibayangkan sebagai ruang yang bisa dijelajahi pemain atau NPC.

Hubungannya dengan AI game juga cukup jelas. Level yang dihasilkan random walk dapat menjadi environment untuk **pathfinding**, karena area `floor` yang terbentuk sudah memiliki jalur yang terhubung. NPC yang bergerak di dalamnya dapat menggunakan grid ini sebagai peta, dan algoritma pencarian jalur dapat bekerja pada cell yang valid. Namun, generator tetap perlu memperhatikan batas grid dan aturan desain agar hasil tidak terlalu sempit, terlalu panjang, atau keluar dari area yang diizinkan.

Sebelum lanjut, mahasiswa perlu memahami bahwa random walk adalah contoh **constructive PCG**. Artinya, level tidak dibuat dengan memilih setiap cell secara independen, melainkan dibangun secara bertahap oleh proses yang menghasilkan struktur. Poin penting yang harus diingat adalah: random walk mengurangi masalah keterputusan antar area, tetapi tetap menghasilkan variasi acak yang perlu dikendalikan melalui parameter seperti jumlah langkah dan aturan arah.

### Inti yang Harus Ditekankan

- **Random walk** membangun level dengan cara bergerak acak dari titik awal dan menandai cell yang dilalui sebagai `floor`.
- Pendekatan ini menghasilkan bentuk yang lebih **organik** dan lebih cocok untuk cave sederhana dibandingkan random per cell.
- Random walk adalah contoh **constructive PCG**, karena struktur level dibuat secara bertahap, bukan dipilih secara independen untuk setiap cell.
- Hasilnya lebih mudah terhubung, tetapi tetap perlu dikendalikan dengan parameter seperti jumlah langkah, arah yang diizinkan, dan batas grid.

### Transisi ke Slide Berikutnya

Setelah memahami cara membuat jalur acak yang sederhana, kita akan melanjutkan ke metode yang lebih terstruktur, yaitu **Room and Corridor Level**, di mana level dibangun dari beberapa ruang yang kemudian dihubungkan oleh koridor.

---

## Slide 054 - Room and Corridor Level

### Narasi

Pada slide ini kita membahas **Room and Corridor Level**, yaitu metode **constructive PCG** yang membangun level dari unit ruang dan lorong. Berbeda dengan random walk yang bergerak sel demi sel, pendekatan ini lebih terstruktur karena level dibentuk dari `room` terlebih dahulu, lalu dihubungkan oleh `corridor`.

Intuisi praktisnya adalah seperti membuat dungeon sederhana. `Room` berfungsi sebagai area terbuka, sedangkan `corridor` menjadi jalur penghubung. Dengan struktur ini, level tidak hanya acak, tetapi memiliki ruang yang dapat dikenali dan jalur yang dapat dilalui.

Langkah utamanya dapat dilihat pada pseudocode berikut:

```text
1. Buat beberapa room
2. Tempatkan room secara acak
3. Hubungkan room dengan corridor
4. Letakkan start di room pertama
5. Letakkan goal di room terakhir
```

Urutan eksekusinya penting:

1. Sistem membuat beberapa `room`.
2. Setiap `room` ditempatkan pada posisi acak.
3. `room` yang sudah ada dihubungkan dengan `corridor`.
4. Titik `start` diletakkan pada `room` pertama.
5. Titik `goal` diletakkan pada `room` terakhir.

Visual pada slide menunjukkan tiga ruang, yaitu `R1`, `R2`, dan `R3`. `R1` terhubung ke `R2`, kemudian `R2` terhubung ke `R3`. Diagram ini membantu kita melihat **topologi level** sebelum level dirender menjadi grid penuh.

Yang perlu dipahami mahasiswa adalah bahwa metode ini menghasilkan struktur level yang lebih mudah dikendalikan. `start` dan `goal` menjadi acuan penting untuk navigasi, sementara `room` dan `corridor` menentukan bentuk ruang yang dapat dilalui.

### Inti yang Harus Ditekankan

- **Room and Corridor Level** adalah metode **constructive PCG** yang membangun level dari `room` dan `corridor`.
- `start` dan `goal` ditempatkan pada `room` pertama dan terakhir untuk memberi tujuan navigasi.
- Diagram `R1`, `R2`, dan `R3` menunjukkan hubungan antar-ruang, bukan hanya tampilan visual.

### Transisi ke Slide Berikutnya

Setelah memahami struktur abstrak `room` dan `corridor`, langkah berikutnya adalah melihat bagaimana grid hasil generation dikonversi menjadi elemen visual di Unity.

---

## Slide 055 - Tile-Based Generation di Unity

### Narasi

Slide ini menjelaskan tahap **materialisasi grid** dalam **Procedural Content Generation**. Pada tahap sebelumnya, level mungkin sudah direpresentasikan sebagai grid logis, misalnya cell berisi floor, wall, start, goal, atau spawn point. Di Unity, representasi tersebut belum terlihat sebagai objek 3D. Karena itu, kita perlu mengubah setiap nilai grid menjadi **prefab tile** yang dapat dirender dan berinteraksi.

Pendekatan yang digunakan adalah **tile-based generation**. Artinya, setiap jenis sel grid dipetakan ke prefab tertentu. Contoh pemetaan yang umum adalah:

- `FloorTile` untuk lantai yang dapat dilalui.
- `WallTile` untuk dinding yang menghalangi gerak.
- `StartTile` untuk posisi awal agen atau pemain.
- `GoalTile` untuk tujuan level.
- `EnemySpawnPoint` untuk penempatan NPC musuh.
- `ItemSpawnPoint` untuk penempatan item.

Dengan cara ini, generator tidak perlu membangun geometri level dari nol. Generator cukup membaca data grid dan memanggil objek prefab yang sudah disiapkan.

Alur dasarnya dapat ditulis sebagai berikut:

```text
Baca grid
Untuk setiap cell:
    jika floor → Instantiate FloorTile
    jika wall  → Instantiate WallTile
```

Dalam implementasi Unity, langkah `Instantiate` berarti membuat instance prefab di scene. Untuk setiap cell, generator memeriksa nilai atau tipe sel, lalu memilih prefab yang sesuai. Setelah prefab diinstantiate, posisi objek harus disetel agar sesuai dengan posisi sel tersebut dalam grid.

Perlu dipahami bahwa tahap ini masih berada pada level **pembuatan objek dari data grid**. Setiap cell grid akan dikonversi menjadi posisi dunia, tetapi detail perhitungan koordinat grid ke `Vector3` Unity akan dibahas pada slide berikutnya. Untuk slide ini, yang penting adalah mahasiswa memahami bahwa PCG menghasilkan struktur level, dan Unity mengubah struktur tersebut menjadi objek nyata di scene.

Dari sisi desain game, tile-based generation memudahkan pembuatan level yang konsisten, cepat, dan mudah divariasikan. Prefab juga membantu menjaga perilaku objek tetap seragam, misalnya semua `EnemySpawnPoint` dapat dikenali oleh sistem spawn, dan semua `ItemSpawnPoint` dapat digunakan untuk menempatkan item secara konsisten.

### Inti yang Harus Ditekankan

- **Tile-based generation** mengubah grid logis menjadi objek Unity melalui prefab tile.
- Setiap jenis sel grid dipetakan ke prefab tertentu, seperti `FloorTile`, `WallTile`, `StartTile`, `GoalTile`, `EnemySpawnPoint`, dan `ItemSpawnPoint`.
- Proses utamanya adalah membaca grid, memeriksa tipe cell, lalu memanggil `Instantiate` untuk membuat objek di scene.
- Tahap ini menghasilkan level yang dapat dirender dan berinteraksi, tetapi konversi koordinat grid ke posisi dunia masih dibahas terpisah.

### Transisi ke Slide Berikutnya

Setelah prefab tile dibuat, langkah berikutnya adalah menentukan di mana setiap tile harus diletakkan. Untuk itu, kita perlu mengubah koordinat grid menjadi posisi dunia Unity, yang akan dibahas pada slide berikutnya.

---

## Slide 056 - Grid Coordinate ke World Position

### Narasi

Pada slide ini, kita membahas langkah penting setelah grid dibuat: **mengubah koordinat grid menjadi posisi dunia di Unity**. Grid biasanya menggunakan koordinat 2D, yaitu `x` dan `y`. Namun, Unity 3D menggunakan sistem koordinat 3D, yaitu `x`, `y`, dan `z`. Untuk tilemap yang berada di lantai, sumbu `y` pada grid biasanya dipetakan ke sumbu `z` pada dunia Unity.

Intuisi praktisnya adalah: **grid adalah representasi logis**, sedangkan **world position adalah representasi visual dan spasial di scene Unity**. Jika konversi ini tidak konsisten, tile yang di-instantiate, spawn point, NPC, dan node pathfinding bisa berada di posisi yang tidak sejajar. Akibatnya, agent bisa salah target, tile bisa tumpang tindih, atau pathfinding bisa menghasilkan jalur yang tidak sesuai dengan tampilan visual.

Contoh konversinya adalah sebagai berikut:

```csharp
Vector3 worldPosition =
    new Vector3(x * tileSize, 0f, y * tileSize);
```

Pada kode ini, `x` dan `y` adalah koordinat grid. Nilai `x * tileSize` menjadi posisi `x` di dunia Unity. Nilai `y * tileSize` menjadi posisi `z` di dunia Unity. Nilai `0f` digunakan untuk posisi `y` dunia, karena tile diletakkan pada bidang lantai.

Jika `tileSize = 2`, maka konversinya menjadi:

- grid `(0, 0)` → world `(0, 0, 0)`
- grid `(1, 0)` → world `(2, 0, 0)`
- grid `(0, 1)` → world `(0, 0, 2)`

Artinya, setiap perpindahan satu sel ke kanan meningkatkan posisi `x` dunia sebesar `tileSize`. Setiap perpindahan satu sel ke bawah atau ke depan meningkatkan posisi `z` dunia sebesar `tileSize`.

Urutan eksekusinya cukup sederhana:

1. Ambil koordinat grid `x` dan `y`.
2. Kalikan masing-masing dengan `tileSize`.
3. Buat objek `Vector3` dengan format `x dunia`, `y dunia`, `z dunia`.
4. Gunakan posisi tersebut untuk menempatkan tile, spawn point, atau node AI.

Konversi ini sangat penting untuk Game AI. Banyak sistem pathfinding bekerja menggunakan koordinat grid, tetapi transformasi objek di Unity menggunakan world position. Jika kedua sistem ini tidak menggunakan pemetaan yang sama, NPC bisa berjalan ke posisi yang salah, agent bisa menabrak dinding visual, atau spawn point bisa berada di luar area yang seharusnya.

Sebelum lanjut, mahasiswa perlu memahami bahwa **grid coordinate bukan world position**. Keduanya harus dihubungkan dengan aturan yang konsisten, terutama nilai `tileSize` dan pemetaan sumbu. Pemahaman ini menjadi dasar sebelum grid dikembangkan menjadi struktur data yang lebih lengkap.

### Inti yang Harus Ditekankan

- **Grid coordinate** menggunakan `x, y`, sedangkan **world position Unity** untuk lantai menggunakan `x, z`.
- `tileSize` berfungsi sebagai skala pengubah satuan grid menjadi satuan dunia.
- Posisi `y` dunia biasanya `0f` karena tile berada pada bidang lantai.
- Konversi yang konsisten diperlukan agar tile, spawn point, NPC, dan pathfinding berada pada ruang yang sama.

### Transisi ke Slide Berikutnya

Setelah koordinat grid dapat dikonversi menjadi posisi dunia, langkah berikutnya adalah menentukan struktur data grid yang menyimpan informasi setiap sel, seperti jenis tile dan properti yang dibutuhkan oleh sistem PCG.

---

## Slide 057 - Data Structure untuk Grid

### Narasi

Setelah grid coordinate dapat dikonversi ke world position, langkah berikutnya adalah menentukan bagaimana data level disimpan. Dalam PCG, grid bukan hanya tampilan visual, tetapi representasi logis lingkungan yang dipakai oleh generator, renderer, dan sistem game.

Struktur paling sederhana adalah `enum` untuk memberi makna pada setiap sel.

```csharp
public enum TileType
{
    Floor,
    Wall,
    Start,
    Goal
}
```

Dengan `TileType`, kode tidak lagi bergantung pada angka mentah. `Floor` berarti area yang bisa dilalui, `Wall` berarti penghalang, sedangkan `Start` dan `Goal` menandai titik penting untuk gameplay dan validasi.

Untuk menyimpan banyak sel, kita bisa memakai array dua dimensi:

```csharp
TileType[,] grid;
```

Struktur ini ringan dan mudah diakses dengan `grid[x, y]`. Cocok untuk level sederhana yang hanya membutuhkan jenis tile. Namun, jika setiap sel perlu menyimpan informasi tambahan, array enum saja bisa terasa terbatas.

Alternatif yang lebih fleksibel adalah class `Cell`:

```csharp
public class Cell
{
    public Vector2Int gridPosition;
    public bool walkable;
    public TileType type;
}
```

Di sini, `gridPosition` menyimpan koordinat grid, `walkable` menyatakan apakah sel dapat dilewati, dan `type` menyimpan kategori tile. Struktur ini memudahkan pengembangan karena kita bisa menambah field lain bila diperlukan, misalnya biaya gerak, status visited, atau referensi objek Unity.

Urutan pemakaiannya cukup jelas: definisikan `TileType`, alokasikan grid, isi nilai sel, lalu gunakan data tersebut untuk rendering, validasi, dan pencarian jalur.

Pilihan struktur data memengaruhi beberapa hal penting:

- **Kemudahan iterasi**: loop `x` dan `y` untuk mengisi atau memeriksa seluruh grid.
- **Kemudahan validasi**: mengecek apakah `Start` dan `Goal` berada di area `walkable`.
- **Kemudahan pathfinding**: setiap sel dapat dipandang sebagai node graph.
- **Kemudahan rendering**: koordinat grid dapat dikonversi ke world position untuk menempatkan tile atau prefab.

Intuisi praktisnya, grid adalah fondasi level. Jika struktur datanya rapi, proses generate, simpan, validasi, dan tampilkan menjadi lebih konsisten. Mahasiswa perlu memahami bahwa `TileType[,]` dan `Cell` bukan sekadar pilihan gaya coding, tetapi keputusan desain yang memengaruhi skalabilitas sistem game.

Sebelum lanjut, pastikan mahasiswa paham perbedaan antara representasi sederhana dan representasi berbasis objek. Representasi sederhana lebih cepat dibuat, sedangkan representasi berbasis objek lebih mudah dikembangkan untuk kebutuhan gameplay dan perilaku karakter.

### Inti yang Harus Ditekankan

- `TileType` memberi nama semantik pada sel grid, sehingga kode lebih jelas dan mudah dirawat.
- `TileType[,] grid` adalah struktur ringan untuk menyimpan jenis tile pada koordinat grid.
- Class `Cell` lebih fleksibel karena dapat menyimpan `gridPosition`, `walkable`, `type`, dan data tambahan lain.
- Struktur data grid menjadi dasar untuk PCG, rendering, validasi, dan pathfinding.

### Transisi ke Slide Berikutnya

Setelah struktur grid siap, langkah berikutnya adalah memastikan level yang dihasilkan benar-benar dapat dimainkan. Pada slide berikutnya, kita akan melihat bagaimana pathfinding digunakan untuk memvalidasi apakah ada jalur dari `Start` ke `Goal`.

---

## Slide 058 - Reuse Materi Pathfinding

### Narasi

Pada slide ini, kita melihat bagaimana **Procedural Content Generation** tidak berhenti pada proses membuat level. Setelah level dihasilkan, kita perlu memastikan level tersebut **playable**. Intuisi praktisnya: level yang terlihat rapi belum tentu bisa dilalui dari `Start` ke `Goal`. Karena itu, kita memakai **pathfinding** sebagai alat validasi.

Slide ini mengulang materi pathfinding, tetapi dengan peran baru. Pathfinding bukan hanya untuk NPC bergerak, melainkan menjadi **penguji hasil PCG**. Level yang dihasilkan dapat dipandang sebagai **graph**, di mana tile atau node yang bisa dilalui menjadi simpul, dan hubungan antar tile menjadi edge. Dengan representasi ini, algoritma seperti `BFS` atau `A*` dapat memeriksa apakah ada rute yang valid.

Contoh alur yang ditampilkan pada slide adalah sebagai berikut:

```text
Setelah level dibuat:
    jalankan BFS/A*
    cek Start ke Goal
```

Urutan eksekusinya cukup sederhana:

1. Level hasil PCG sudah tersedia.
2. Sistem menjalankan algoritma pathfinding dari `Start` ke `Goal`.
3. Jika algoritma menemukan path, level dinyatakan valid.
4. Jika tidak ada path, level dianggap gagal dan sistem melakukan generate ulang.

Keputusan validasi ini dapat diringkas:

```text
Jika path ada:
    level valid

Jika tidak ada path:
    generate ulang
```

Bagian penting dari proses ini adalah **feedback loop**. PCG menghasilkan kandidat level, pathfinding menguji kelayakan, dan hasil uji menentukan apakah level diterima atau dibuat ulang. Dengan cara ini, kualitas level tidak hanya bergantung pada aturan pembuatan, tetapi juga pada kemampuan agen untuk menyelesaikan level tersebut.

Integrasi yang ingin dipahami mahasiswa adalah hubungan empat komponen:

- **PCG** sebagai pembuat konten level.
- **Graph** sebagai representasi struktur level.
- **Pathfinding** sebagai mekanisme pencarian rute.
- **Validation** sebagai penjamin bahwa level dapat dimainkan.

Sebelum lanjut, mahasiswa perlu memahami bahwa validasi pathfinding adalah langkah minimum untuk memastikan level tidak rusak secara struktural. Level yang valid berarti ada setidaknya satu jalur dari `Start` ke `Goal`, sehingga agen atau pemain memiliki kemungkinan menyelesaikan level.

### Inti yang Harus Ditekankan

- PCG tidak hanya membuat level, tetapi juga perlu memvalidasi hasil yang dibuat.
- Pathfinding seperti `BFS` atau `A*` dapat digunakan untuk mengecek apakah ada jalur dari `Start` ke `Goal`.
- Jika path ditemukan, level valid; jika tidak, level harus di-generate ulang.
- Proses ini menunjukkan integrasi antara PCG, graph, pathfinding, dan validation.

### Transisi ke Slide Berikutnya

Setelah level dipastikan valid, langkah berikutnya adalah mengatur kualitas pengalaman bermain. Pada slide berikutnya, kita akan membahas bagaimana PCG dapat mengendalikan **difficulty** melalui parameter seperti jumlah enemy, jarak start-goal, jumlah obstacle, dan kepadatan ruangan.

---

## Slide 059 - Difficulty dalam PCG

### Narasi

**Difficulty** dalam **PCG** bukan hanya membuat level secara acak, tetapi mengatur seberapa menantang level yang dihasilkan.

Intuisi praktisnya: pemain menilai kesulitan dari keseimbangan antara ancaman dan sumber daya. Jika ancaman terlalu besar atau sumber daya terlalu sedikit, level terasa berat. Jika sebaliknya, level terasa ringan.

PCG dapat mengatur kesulitan melalui parameter generasi. Parameter ini menentukan kondisi awal yang dialami pemain.

Contoh parameter yang dapat diatur:

- `enemyCount` atau jumlah enemy
- `startGoalDistance` atau jarak start-goal
- `obstacleCount` atau jumlah obstacle
- `resourceCount` atau jumlah resource
- `enemyType` atau jenis enemy
- `levelSize` atau ukuran level
- `roomDensity` atau kepadatan ruangan

Setiap parameter memengaruhi pengalaman bermain. `enemyCount` dan `enemyType` memengaruhi tekanan dari NPC. `startGoalDistance` dan `levelSize` memengaruhi durasi eksplorasi. `obstacleCount` dan `roomDensity` memengaruhi ruang gerak serta kemungkinan jalur yang tersedia. `resourceCount` memengaruhi kemampuan pemain bertahan atau menyelesaikan tantangan.

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

Potongan ini menunjukkan bahwa kesulitan dapat dikendalikan secara eksplisit. Level mudah memberi margin lebih besar: pemain punya lebih banyak sumber daya dan ruang gerak. Level sulit memperkecil margin: ancaman lebih banyak, sumber daya lebih terbatas, dan jalur lebih sempit.

Dalam konteks perilaku NPC dan sistem permainan, parameter kesulitan juga memengaruhi **decision making** NPC. Misalnya, jumlah dan jenis enemy menentukan seberapa sering NPC berinteraksi dengan pemain. Ukuran level dan kepadatan ruangan memengaruhi **pathfinding** serta **steering** karena ruang gerak lebih terbatas. Namun, level yang sulit tetap harus dapat dimainkan; validasi seperti pathfinding dari `Start` ke `Goal` tetap penting agar pemain tidak terjebak.

Sebelum lanjut, mahasiswa perlu memahami bahwa **difficulty** adalah target desain, bukan hasil samping dari keacakan. PCG yang baik memilih parameter secara terukur sehingga level tetap adil, dapat dimainkan, dan sesuai target pengalaman.

### Inti yang Harus Ditekankan

- **Difficulty** dalam PCG diatur melalui parameter generasi, bukan hanya keacakan.
- Parameter seperti `enemyCount`, `resourceCount`, `obstacleCount`, `levelSize`, dan `roomDensity` memengaruhi tantangan, ruang gerak, dan keseimbangan level.
- Level sulit harus tetap valid dan dapat dimainkan, misalnya dengan memastikan jalur dari `Start` ke `Goal` tersedia.

### Transisi ke Slide Berikutnya

Setelah kita memahami cara PCG mengatur tingkat kesulitan, langkah berikutnya adalah melihat bagaimana variasi konten yang dihasilkan PCG dapat menjaga **replayability** agar game tetap menarik dimainkan berulang.

---

## Slide 060 - PCG dan Replayability

### Narasi

Slide ini membahas **replayability**, yaitu alasan mengapa pemain masih tertarik memainkan game berulang kali. Jika konten game selalu sama, pemain dapat dengan cepat menghafal pola dan kehilangan rasa tantangan.

**PCG** membantu **replayability** karena variasi dapat dihasilkan setiap kali game dijalankan. Variasi ini dapat muncul pada beberapa aspek:

- `level` bisa berubah,
- `spawn` bisa berbeda,
- `loot` bisa bervariasi,
- `challenge` bisa berubah,
- `player` tidak selalu menghafal pola.

Variasi tersebut membuat setiap sesi permainan terasa berbeda. Pemain tidak hanya mengingat posisi musuh atau jalur aman, tetapi harus menyesuaikan strategi setiap kali.

Dalam konteks perilaku game, variasi konten juga memengaruhi perilaku `NPC` dan tantangan yang dihadapi pemain. Misalnya, posisi `spawn` yang berbeda dapat mengubah tekanan yang diterima pemain, sementara variasi `loot` dan `challenge` dapat memengaruhi keputusan pemain dalam menyelesaikan level.

Namun, **replayability** tidak otomatis baik hanya karena konten berubah. **PCG** tetap harus menghasilkan konten yang **adil**, **dapat dimainkan**, **menarik**, dan **tidak terlalu acak**. Jika variasi terlalu liar, pemain bisa merasa permainan tidak adil atau level sulit diselesaikan.

Sebelum lanjut, mahasiswa perlu memahami bahwa **PCG** bukan sekadar membuat sesuatu secara acak. Tujuannya adalah menciptakan variasi yang tetap menjaga pengalaman bermain tetap menyenangkan dan masuk akal.

### Inti yang Harus Ditekankan

- **Replayability** adalah kemampuan game tetap menarik dimainkan berulang kali.
- **PCG** meningkatkan **replayability** melalui variasi `level`, `spawn`, `loot`, dan `challenge`.
- Variasi membuat `player` tidak hanya menghafal pola, tetapi tetap perlu berpikir dan beradaptasi.
- **PCG** harus tetap menghasilkan konten yang **adil**, **dapat dimainkan**, **menarik**, dan **tidak terlalu acak**.

### Transisi ke Slide Berikutnya

Setelah memahami bahwa variasi penting untuk **replayability**, langkah berikutnya adalah melihat bagaimana **designer** tetap memegang kendali agar variasi tersebut tidak keluar dari aturan desain.

---

## Slide 061 - PCG dan Designer Control

### Narasi

**PCG yang baik tidak berarti menyerahkan seluruh desain kepada keacakan.** Ia tetap harus berada di bawah kendali **designer**, karena game membutuhkan konsistensi tujuan, keseimbangan, dan pengalaman yang dapat dimainkan.

Intuisinya sederhana: **designer menentukan aturan main**, sedangkan algoritma PCG bertugas mencari variasi yang masih memenuhi aturan tersebut. Dengan cara ini, hasil generation bisa berbeda antar sesi, tetapi tidak keluar dari desain yang diinginkan.

Beberapa contoh aturan yang bisa ditetapkan designer antara lain:

- `enemy_count <= 10` agar jumlah musuh tidak berlebihan.
- `boss_at_end == true` agar boss selalu berada di akhir level.
- `start_area_safe == true` agar area awal tidak langsung berbahaya.
- `rare_item_rate` dijaga rendah agar item langka tetap bernilai.
- `room_count >= 3` agar level memiliki struktur minimal.
- `main_path_valid == true` agar jalur utama dapat dilalui.

Dalam implementasi, aturan ini biasanya menjadi **parameter** atau **constraint** yang diperiksa saat generation berlangsung. Algoritma dapat menghasilkan kandidat level, lalu melakukan **validasi** terhadap setiap aturan. Jika kandidat gagal, sistem bisa memperbaiki layout, mencoba ulang, atau menolak hasil tersebut.

Hal ini penting karena PCG yang tidak terkendali dapat menghasilkan level yang tidak adil, tidak dapat dimainkan, atau membosankan. Misalnya, aturan `main_path_valid == true` berkaitan langsung dengan **pathfinding**: jika jalur dari titik awal ke tujuan tidak valid, agent atau pemain tidak akan bisa mencapai area berikutnya.

Sebelum lanjut, mahasiswa perlu memahami bahwa PCG bukan sekadar "acak". Ia adalah **generation yang dibatasi**, di mana variasi muncul di dalam ruang solusi yang sudah ditentukan oleh designer.

### Inti yang Harus Ditekankan

- **Designer control** berarti PCG bekerja berdasarkan aturan, parameter, dan constraint yang jelas.
- Variasi boleh ada, tetapi hasil harus tetap **playable**, **fair**, dan sesuai desain.
- Validasi aturan seperti jumlah musuh, posisi boss, area awal, dan jalur utama adalah bagian penting dari PCG yang bertanggung jawab.

### Transisi ke Slide Berikutnya

Setelah aturan desain ditetapkan, langkah berikutnya adalah memastikan hasil generation benar-benar dapat diperiksa ketika terjadi masalah. Untuk itu, kita akan masuk ke topik debugging PCG.

---

## Slide 062 - PCG dan Debugging

### Narasi

Procedural Content Generation atau **PCG** menghasilkan konten game secara otomatis, seperti level, spawn musuh, atau penempatan item. Masalah utamanya adalah hasil bisa berubah setiap kali program dijalankan. Jika perubahan itu tidak terkendali, developer sulit mengetahui apakah bug berasal dari logika generation, parameter, atau kondisi scene.

Karena itu, prinsip pertama debugging PCG adalah **reproducibility**: hasil harus bisa diulang. Dengan `seed`, generator acak dapat menghasilkan urutan angka yang sama setiap kali dijalankan. Artinya, jika `seed` sama dan parameter tidak berubah, level yang dihasilkan seharusnya sama. Ini penting untuk membandingkan dua versi algoritma, memeriksa regresi, atau menunjukkan bug kepada tim.

Namun, `seed` saja belum cukup. Mahasiswa perlu menampilkan informasi yang menjelaskan proses generation. Beberapa data yang sebaiknya dicatat adalah:

- `seed` yang digunakan,
- parameter penting seperti `maxAttempts`, jumlah musuh, atau ukuran grid,
- jumlah percobaan spawn yang dilakukan,
- jumlah objek yang berhasil spawn,
- posisi yang gagal validasi,
- path dari `start` ke `goal`,
- grid hasil generation.

Data ini membantu menjawab pertanyaan praktis: apakah level tidak valid karena path terputus? Apakah spawn gagal karena terlalu dekat dengan player? Apakah validasi menolak posisi tertentu? Dengan log yang jelas, debugging tidak lagi bergantung pada tebakan.

Selain log teks, **debug visual** sangat membantu. Dalam scene Unity-like, kita dapat menampilkan warna tile berdasarkan tipe atau status validasi, gizmos untuk `spawn radius`, garis path, dan label `seed`. Visual ini membuat proses yang sebelumnya abstrak menjadi terlihat. Misalnya, tile merah bisa menandakan posisi gagal validasi, garis cyan menunjukkan path yang ditemukan, dan label seed memudahkan replikasi hasil.

Intuisi praktisnya adalah: sebelum memperbaiki kode, amati input dan output generation. Jika level tidak bisa dimainkan, periksa apakah `start` dan `goal` terhubung. Jika NPC muncul terlalu dekat, periksa `spawn radius` dan aturan jarak. Jika konten terlalu acak, periksa parameter dan `seed`. Dengan cara ini, mahasiswa belajar menelusuri sistem, bukan sekadar mencari satu baris kode yang salah.

Untuk materi Game Cerdas, debugging PCG juga berkaitan dengan kontrol designer. Aturan seperti batas jumlah musuh, area aman, atau jalur valid hanya berguna jika bisa diverifikasi. Debugging yang baik memungkinkan designer melihat apakah algoritma masih mematuhi aturan, sekaligus memberi ruang variasi. Jadi, yang harus dipahami sebelum lanjut adalah: PCG yang baik bukan hanya menghasilkan variasi, tetapi juga bisa diuji, dilihat, dan direproduksi.

### Inti yang Harus Ditekankan

- **Reproducibility** adalah dasar debugging PCG; gunakan `seed` agar hasil bisa diulang.
- Tampilkan data penting: `seed`, parameter, jumlah percobaan, objek berhasil spawn, posisi gagal validasi, path `start-goal`, dan grid hasil.
- Gunakan **debug visual** seperti warna tile, gizmos `spawn radius`, garis path, dan label `seed` agar proses generation mudah diamati.
- Debugging PCG bertujuan membuat sistem generation dapat diuji, diverifikasi, dan dikontrol oleh designer.

### Transisi ke Slide Berikutnya

Setelah memahami cara membuat PCG lebih mudah di-debug, langkah berikutnya adalah mengenali kesalahan umum yang sering terjadi ketika sistem generation dirancang tanpa kontrol, validasi, atau observasi yang memadai.

---

## Slide 063 - Kesalahan Umum PCG

### Narasi

PCG yang baik tidak hanya menghasilkan variasi, tetapi menghasilkan variasi yang **terkendali**, **dapat diuji**, dan **aman untuk gameplay**. Kesalahan umum biasanya muncul ketika proses generation hanya dianggap selesai setelah objek muncul, padahal hasil belum tentu valid, konsisten, atau bisa dikendalikan.

Sepuluh kesalahan pada slide ini dapat dibaca sebagai empat kelompok masalah:

- **Reproducibility**: random dianggap cukup, tidak menggunakan `seed`, dan tidak menyimpan `seed` untuk debugging.
- **Validasi dan batasan**: tidak melakukan validation, tidak memberi batas `maxAttempts`, spawn terlalu dekat dari `player`, dan level tidak memiliki jalan dari `start` ke `goal`.
- **Desain dan kontrol**: terlalu banyak parameter tanpa struktur, serta konten sulit dikontrol designer.
- **Observability**: tidak ada debug visual untuk melihat apa yang sebenarnya terjadi saat generation.

Pada kelompok pertama, masalah utamanya adalah hasil yang tidak bisa diulang. Jika `seed` tidak digunakan, dua kali generation bisa menghasilkan layout berbeda, sehingga sulit mengetahui apakah perubahan disebabkan oleh algoritma, parameter, atau sekadar kebetulan. Menyimpan `seed` membuat mahasiswa bisa membandingkan beberapa hasil, mencari bug, dan menjelaskan perilaku generation secara konsisten.

Pada kelompok kedua, generation harus melewati aturan sebelum dianggap berhasil. Validasi memastikan objek tidak muncul di posisi yang tidak valid, misalnya di dalam dinding, di luar area, atau terlalu dekat dengan `player`. Batas `maxAttempts` penting agar proses tidak terus mencoba tanpa henti ketika kondisi sulit terpenuhi. Selain itu, level yang dihasilkan harus memiliki path dari `start` ke `goal`; tanpa path yang valid, pathfinding bisa gagal, NPC tidak dapat mencapai target, dan tujuan permainan menjadi tidak tercapai.

Pada kelompok ketiga, parameter yang banyak tidak selalu berarti sistem lebih fleksibel. Jika parameter tidak memiliki struktur, rentang nilai, atau hubungan yang jelas, designer akan kesulitan mengatur kesulitan, kepadatan, dan fairness konten. PCG yang baik memberi designer kontrol yang bermakna, bukan sekadar banyak angka acak yang harus ditebak.

Pada kelompok terakhir, debug visual bukan sekadar tambahan. Warna tile, garis path, label `seed`, dan indikator posisi spawn membantu mahasiswa melihat langsung apakah generation berhasil, di mana validasi gagal, dan bagaimana hubungan antar objek. Tanpa visualisasi, debugging hanya mengandalkan log teks yang sering kali tidak cukup untuk memahami masalah spasial.

### Inti yang Harus Ditekankan

- Gunakan `seed` agar hasil PCG dapat diulang, dibandingkan, dan di-debug.
- Setiap hasil generation harus melewati validasi: posisi valid, jarak aman, dan path `start` ke `goal` tersedia.
- Parameter harus terstruktur dan dapat dikontrol designer, bukan sekadar banyak nilai acak.
- Debug visual adalah bagian penting dari desain PCG, terutama untuk melihat masalah spasial dan kegagalan validasi.

### Transisi ke Slide Berikutnya

Setelah memahami kesalahan umum yang sering terjadi, kita lanjut ke gambaran praktikum pertemuan 9, yaitu membangun procedural spawning atau random level sederhana dengan `seed`, validasi, dan visualisasi hasil di Unity.

---

## Slide 064 - Praktikum Pertemuan 9: Gambaran Umum

### Narasi

Pada slide ini, kita memasuki bagian praktikum Pertemuan 9. Fokusnya adalah gambaran umum kegiatan yang akan dilakukan, bukan langsung masuk ke kode lengkap. Praktikum yang direncanakan adalah **Procedural Spawning** atau **Random Level Sederhana**. Tujuannya agar mahasiswa dapat melihat bagaimana konten game dibuat secara prosedural dengan aturan yang masih sederhana dan mudah dikontrol.

Intuisi praktisnya adalah begini: sebuah game tidak selalu membutuhkan level atau objek yang dibuat sepenuhnya manual. Dengan **random generation**, sistem dapat menghasilkan posisi spawn, variasi objek, atau susunan sederhana secara otomatis. Namun, random saja tidak cukup. Mahasiswa perlu memahami peran `seed` agar hasil generation dapat diulang, dibandingkan, dan di-debug. Jika `seed` sama, hasil seharusnya sama; jika `seed` berbeda, hasil dapat berbeda.

Target umum praktikum ini meliputi beberapa kemampuan dasar:

- memahami **random generation** dalam konteks game,
- menggunakan `seed` untuk mengontrol hasil acak,
- membuat **spawn procedural** untuk objek sederhana,
- membuat aturan **validasi** sederhana agar hasil tidak melanggar batas tertentu,
- menampilkan hasil generation di **Unity**,
- membandingkan beberapa `seed` berbeda untuk melihat pengaruhnya terhadap hasil.

Pada tahap ini, mahasiswa tidak perlu langsung membangun sistem PCG yang kompleks. Yang penting adalah membangun dasar yang benar: generation yang dapat diulang, hasil yang dapat divisualisasikan, dan aturan validasi yang sederhana. Detail teknis, struktur komponen, dan langkah implementasi akan dibahas pada modul praktikum terpisah.

### Inti yang Harus Ditekankan

- Praktikum ini berfokus pada **Procedural Spawning** dan **Random Level Sederhana**.
- `seed` penting karena membuat hasil generation dapat diulang dan dibandingkan.
- Validasi sederhana diperlukan agar hasil acak tetap masuk akal dan tidak melanggar aturan dasar.
- Hasil generation harus dapat dilihat di **Unity** agar mahasiswa dapat mengamati efek perubahan parameter.

### Transisi ke Slide Berikutnya

Setelah gambaran umum ini, kita akan masuk ke pilihan praktikum pertama, yaitu **Procedural Spawning**, yang akan membahas target dan komponen dasar yang dibutuhkan untuk membuat objek muncul secara prosedural.

---

## Slide 065 - Pilihan Praktikum A: Procedural Spawning

### Narasi

Pilihan praktikum ini berfokus pada **procedural spawning**, yaitu cara membuat objek seperti `enemy` atau `item` muncul secara acak di dalam area tertentu.

Intuisi pentingnya adalah: **acak saja tidak cukup**. Dalam game, spawn harus tetap masuk akal, tidak membuat pemain kebingungan, tidak muncul di dalam dinding, dan tidak terlalu dekat dengan pemain.

Target utama praktikum ini adalah:

- spawn `enemy` atau `item` secara acak,
- membatasi posisi spawn di dalam `spawn area`,
- menjaga jarak minimum dari `player`,
- melakukan `obstacle check` agar objek tidak muncul di area terhalang,
- menggunakan `prefab` sebagai template objek,
- menggunakan `seed` agar hasil generation bisa diulang.

Dalam konteks sistem game, ini adalah bentuk **decision making sederhana**: sistem memilih posisi spawn berdasarkan aturan, bukan sekadar angka acak.

Komponen yang perlu disiapkan antara lain:

- `Spawner.cs` sebagai script pengendali spawning,
- `enemy prefab` dan `item prefab`,
- `spawn area` sebagai batas wilayah spawn,
- `obstacle layer` untuk mendeteksi area yang tidak boleh ditempati,
- `player reference` untuk menghitung jarak minimum.

Alur kerja yang perlu dipahami mahasiswa adalah:

1. Tetapkan `seed` agar proses acak dapat direproduksi.
2. Ambil posisi acak di dalam `spawn area`.
3. Periksa jarak posisi tersebut terhadap `player`.
4. Jika jarak terlalu dekat, tolak posisi tersebut.
5. Periksa apakah posisi tersebut berada di area `obstacle layer`.
6. Jika valid, `instantiate` prefab pada posisi tersebut.
7. Jika tidak valid, ulangi pencarian posisi dengan batas percobaan tertentu.

Dengan alur ini, mahasiswa tidak hanya belajar membuat objek muncul secara acak, tetapi juga belajar **validasi** dan **reproducibility**. Dua hal ini penting karena perilaku game harus bisa diuji, dibandingkan, dan dikembangkan secara konsisten.

### Inti yang Harus Ditekankan

- **Procedural spawning** adalah kombinasi antara random generation dan aturan validasi.
- `seed` membuat hasil spawn bisa diulang dan dibandingkan.
- `min distance` dan `obstacle check` menjaga spawn tetap aman dan masuk akal.
- `prefab`, `spawn area`, `obstacle layer`, dan `player reference` adalah komponen utama implementasi.

### Transisi ke Slide Berikutnya

Setelah memahami cara spawn objek secara procedural, pilihan berikutnya akan memperluas ide yang sama ke pembuatan level sederhana berbasis grid.

---

## Slide 066 - Pilihan Praktikum B: Random Level Sederhana

### Narasi

Pada slide ini, kita membahas **Pilihan Praktikum B: Random Level Sederhana**. Berbeda dengan spawning objek di area yang sudah ada, praktikum ini fokus pada **Procedural Content Generation** untuk membuat **grid level** secara otomatis. Level menjadi bagian dari lingkungan game, sehingga memengaruhi pergerakan pemain, NPC, dan proses **pathfinding**.

Intuisi utamanya adalah level direpresentasikan sebagai **grid data** dua dimensi. Setiap sel grid dapat menjadi **floor** atau **wall**. Dengan menggunakan **seed**, proses acak menjadi dapat diulang: seed yang sama menghasilkan susunan level yang sama, sedangkan seed yang berbeda menghasilkan level baru. Hal ini penting untuk debugging, pengujian, dan eksperimen desain game.

Komponen utama praktikum ini adalah `LevelGenerator.cs`, `floor prefab`, `wall prefab`, `start/goal marker`, `grid data`, `seed`, dan `validation`. `LevelGenerator.cs` bertugas menyimpan aturan pembuatan level, sedangkan prefab digunakan untuk menampilkan hasil grid ke scene. `grid data` adalah representasi logis level sebelum diinstantiate, sehingga kita bisa memvalidasi level sebelum objek benar-benar dibuat.

Alur kerja yang perlu dipahami adalah sebagai berikut:

1. Tentukan ukuran grid dan `seed`.
2. Buat `grid data` untuk setiap sel.
3. Tentukan `wall` dan `floor` secara procedural, misalnya berdasarkan probabilitas sederhana.
4. Pilih posisi `start` dan `goal` yang valid.
5. Lakukan **validasi path sederhana** untuk memastikan `start` dapat terhubung ke `goal`.
6. `Instantiate` tile prefab sesuai isi grid.
7. Spawn pemain di `start` dan tampilkan `goal`.

Validasi path adalah bagian penting karena level yang acak belum tentu layak dimainkan. Tanpa validasi, pemain atau agent bisa terjebak karena `start` dan `goal` terpisah oleh `wall`. Untuk praktikum sederhana, validasi dapat dilakukan dengan pengecekan konektivitas dasar, tanpa perlu langsung membangun algoritma pathfinding lengkap.

Hasil yang diharapkan adalah level sederhana yang berubah sesuai `seed`. Jika `seed` tetap, susunan `wall`, `floor`, `start`, dan `goal` tetap sama. Jika `seed` diganti, level akan berbeda, tetapi tetap mengikuti aturan yang sama. Ini menunjukkan bahwa PCG bukan sekadar membuat acak tanpa aturan, melainkan menghasilkan variasi yang masih terkendali.

Dalam implementasi, mahasiswa perlu memperhatikan beberapa hal: posisi `start` dan `goal` tidak boleh berada di `wall`, jumlah `wall` tidak boleh terlalu banyak sehingga level tidak bisa dilalui, dan koordinat grid harus konsisten saat `Instantiate` prefab. Dengan menjaga level tetap sederhana, fokus praktikum tetap pada konsep generation, validasi, dan reproduktibilitas.

### Inti yang Harus Ditekankan

- **Random level sederhana** dibuat dari `grid data` yang menentukan `wall` dan `floor`.
- `seed` membuat hasil PCG dapat diulang dan mudah diuji.
- **Validasi path** memastikan `start` dan `goal` terhubung sebelum level diinstantiate.
- `LevelGenerator.cs` memisahkan logika pembuatan level dari tampilan prefab di scene.

### Transisi ke Slide Berikutnya

Setelah memahami cara generator level bekerja, slide berikutnya akan menunjukkan bagaimana komponen-komponen ini disusun dalam struktur scene praktikum.

---

## Slide 067 - Struktur Scene Praktikum

### Narasi

Pada slide ini kita membahas **struktur scene** untuk praktikum **Procedural Content Generation** atau PCG. Tujuan utamanya adalah menyiapkan organisasi scene di Unity agar konten yang dibuat secara prosedural dapat disimpan, dipanggil, dan diuji dengan rapi.

```text
PCGDemoScene
├── PCGManager
├── Player
├── Camera
├── Ground / Tiles
├── Enemy Prefabs
├── Item Prefabs
└── Debug UI
```

Scene utama `PCGDemoScene` berfungsi sebagai wadah praktikum. Komponen di dalamnya memiliki peran yang berbeda:

- `PCGManager`: komponen pusat yang mengatur proses pembuatan konten, seperti spawning atau pembuatan level.
- `Player`: agen utama yang akan berinteraksi dengan konten yang dihasilkan.
- `Camera`: menampilkan scene dan membantu mahasiswa mengamati hasil PCG.
- `Ground / Tiles`: area dasar tempat tile atau objek hasil generasi diletakkan.
- `Enemy Prefabs` dan `Item Prefabs`: template objek yang dapat diinstantiate secara prosedural.
- `Debug UI`: tampilan bantu untuk melihat status, seed, jumlah objek, atau pesan error selama praktikum.

Pemisahan ini penting karena objek yang dibuat secara prosedural sebaiknya tidak dicampur dengan objek statis secara sembarangan. Dengan struktur yang jelas, mahasiswa dapat membedakan mana objek yang sudah ada di scene, mana yang dibuat saat runtime, dan mana yang hanya menjadi referensi prefab.

```text
SpawnArea
├── EnemySpawn
├── ItemSpawn
└── Obstacle
```

Untuk **procedural spawning**, struktur `SpawnArea` digunakan sebagai batas wilayah tempat objek dapat muncul. Anak-anaknya seperti `EnemySpawn`, `ItemSpawn`, dan `Obstacle` berfungsi sebagai penanda atau area spawn. Dengan cara ini, logika spawning tidak perlu menaruh objek secara manual satu per satu, tetapi cukup memilih titik atau area yang sudah tersedia di scene.

```text
GeneratedLevel
├── FloorTiles
├── WallTiles
├── Start
└── Goal
```

Untuk **random level**, struktur `GeneratedLevel` menjadi container utama hasil generasi. `FloorTiles` dan `WallTiles` berisi tile yang diinstantiate dari prefab berdasarkan data grid. `Start` dan `Goal` adalah marker penting yang menandai posisi awal dan tujuan, sehingga level yang dihasilkan dapat langsung digunakan untuk pergerakan player atau validasi path sederhana.

Secara keseluruhan, struktur scene ini menjadi fondasi sebelum masuk ke pengaturan parameter. Mahasiswa perlu memahami bahwa PCG di Unity bukan hanya soal membuat objek muncul, tetapi juga soal bagaimana scene, prefab, manager, dan area spawn saling terhubung.

### Inti yang Harus Ditekankan

- `PCGManager` adalah pusat kontrol proses PCG di scene.
- Prefab seperti `Enemy Prefabs` dan `Item Prefabs` adalah template objek yang dapat diinstantiate secara prosedural.
- `SpawnArea` memisahkan wilayah spawning dari objek yang benar-benar dibuat saat runtime.
- `GeneratedLevel` menjadi container untuk hasil random level, termasuk `FloorTiles`, `WallTiles`, `Start`, dan `Goal`.
- Struktur scene yang rapi memudahkan debugging, pengujian, dan pengembangan praktikum PCG.

### Transisi ke Slide Berikutnya

Setelah struktur scene dipahami, langkah berikutnya adalah menentukan parameter apa saja yang akan mengatur proses PCG, baik untuk spawning maupun random level.

---

## Slide 068 - Parameter Praktikum

### Narasi

Pada slide ini kita membahas **parameter** yang menjadi kendali utama praktikum **Procedural Content Generation** atau PCG. Parameter ini penting karena PCG tidak hanya menghasilkan konten secara acak, tetapi juga harus dapat dikendalikan, diuji, dan dibandingkan hasilnya.

```text
seed
enemyCount
itemCount
spawnAreaSize
minDistanceFromPlayer
spawnCheckRadius
maxAttempts
```

Untuk **procedural spawning**, parameter di atas mengatur bagaimana musuh dan item muncul di dalam scene.

- `seed` digunakan untuk membuat hasil acak dapat direproduksi. Dengan `seed` yang sama, sistem seharusnya menghasilkan pola spawn yang sama.
- `enemyCount` dan `itemCount` menentukan jumlah objek yang akan muncul.
- `spawnAreaSize` menentukan luas area yang boleh digunakan untuk spawning.
- `minDistanceFromPlayer` menjaga agar objek tidak muncul terlalu dekat dengan player.
- `spawnCheckRadius` menentukan seberapa besar area yang diperiksa sebelum titik spawn dianggap aman.
- `maxAttempts` menjadi batas percobaan agar proses spawning tidak terus berjalan tanpa hasil yang valid.

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

Untuk **random level**, parameter ini mengatur pembentukan layout level secara prosedural.

- `seed` kembali menjadi kunci utama untuk reproduksi hasil.
- `mapWidth` dan `mapHeight` menentukan ukuran grid level.
- `tileSize` menentukan ukuran satu tile dalam satuan dunia game.
- `wallProbability` mengatur seberapa sering tile menjadi dinding.
- `startPosition` dan `goalPosition` menentukan titik awal dan tujuan level.
- `maxGenerationAttempts` menjadi batas percobaan ketika hasil level perlu diperiksa ulang atau dianggap tidak valid.

Parameter ini sebaiknya dapat diubah melalui **Unity Inspector** karena akan memudahkan mahasiswa melakukan pengujian cepat. Dengan Inspector, nilai parameter dapat diubah tanpa harus membuka kode setiap kali, sehingga mahasiswa dapat langsung melihat dampaknya terhadap spawning atau pembentukan level.

Sebelum lanjut ke tahap percobaan, mahasiswa perlu memahami bahwa parameter PCG bukan hanya angka teknis. Parameter ini juga memengaruhi pengalaman bermain, keseimbangan spawn, dan apakah level yang dihasilkan dapat dimainkan dengan baik.

### Inti yang Harus Ditekankan

- `seed` membuat hasil procedural dapat diulang dan dibandingkan secara konsisten.
- Parameter spawning mengatur jumlah, area, jarak aman, dan batas percobaan munculnya objek.
- Parameter random level mengatur ukuran grid, kepadatan dinding, posisi awal-tujuan, dan batas regenerasi.
- Parameter sebaiknya dapat diubah melalui **Unity Inspector** agar pengujian lebih cepat dan mudah diamati.

### Transisi ke Slide Berikutnya

Dengan parameter ini, kita sudah memiliki dasar untuk mencoba berbagai variasi nilai dan mengamati bagaimana hasilnya memengaruhi spawning serta pembentukan level.

---

## Slide 069 - Eksperimen Mahasiswa

### Narasi

Pada slide ini, mahasiswa diajak melakukan **eksperimen praktis** terhadap sistem **Procedural Content Generation** yang telah dibangun. Tujuannya bukan menambah fitur baru, tetapi memahami bagaimana setiap parameter memengaruhi hasil generation. Intuisi utamanya adalah: PCG yang baik bukan sekadar acak, melainkan **acak yang terkontrol** dan dapat dijelaskan.

Eksperimen pertama yang paling penting adalah mengubah `seed`. Nilai `seed` menentukan urutan hasil acak. Jika `seed` sama, sistem seharusnya menghasilkan posisi, jumlah, atau layout yang sama. Jika `seed` berbeda, hasil akan berbeda. Hal ini membantu mahasiswa memahami **reproduktibilitas**, yaitu kemampuan mengulang hasil generation untuk debugging, perbandingan, atau berbagi level.

Selanjutnya, mahasiswa dapat mencoba parameter spawn seperti `enemyCount`, `spawnAreaSize`, dan `minDistanceFromPlayer`. Parameter ini memengaruhi **keamanan player** dan **kerumitan gameplay**. Jika `enemyCount` terlalu besar, game bisa terasa menantang atau tidak adil. Jika `spawnAreaSize` terlalu kecil, sistem mungkin sulit menemukan posisi valid. Jika `minDistanceFromPlayer` terlalu besar, area spawn menjadi terbatas dan proses generation bisa gagal atau memakan waktu lebih lama.

Untuk level generation, mahasiswa dapat mengubah `wallProbability` dan membandingkan level yang valid dengan level yang tidak valid. `wallProbability` menentukan seberapa banyak dinding muncul pada grid. Nilai kecil membuat level lebih terbuka, sedangkan nilai besar membuat level lebih sempit dan sulit dilalui. Membandingkan hasil valid dan tidak valid membantu mahasiswa memahami peran **validation**, yaitu proses memeriksa apakah `startPosition` dapat mencapai `goalPosition` dan apakah objek spawn berada pada posisi yang benar.

Eksperimen berikutnya berkaitan dengan **debugging** dan **variasi konten**. Menampilkan `seed` pada UI membuat mahasiswa dapat mencatat hasil generation dan mengujinya kembali. Membuat `spawn table` sederhana membantu mengatur distribusi `enemy`, `item`, atau objek lain secara lebih terstruktur. Membuat `random item rarity` menambah variasi item, tetapi tetap perlu dibatasi agar hasil tidak terlalu acak dan sulit diprediksi.

Cara terbaik melakukan eksperimen ini adalah **mengubah satu parameter pada satu waktu**, lalu mengamati hasilnya. Mahasiswa dapat mencatat nilai parameter, hasil generation, dan perilaku game. Dengan cara ini, mahasiswa tidak hanya melihat bahwa hasil berubah, tetapi juga memahami **mengapa** hasil berubah.

### Inti yang Harus Ditekankan

- `seed` adalah kunci **reproduktibilitas**; seed yang sama harus menghasilkan generation yang sama.
- Parameter seperti `enemyCount`, `spawnAreaSize`, dan `minDistanceFromPlayer` memengaruhi **keamanan player** dan **kelayakan spawn**.
- `wallProbability` memengaruhi struktur level, sementara **validation** memastikan level dapat dimainkan.
- Menampilkan `seed`, membuat `spawn table`, dan mengatur `item rarity` membantu sistem PCG menjadi lebih mudah diuji dan lebih menarik.
- Eksperimen yang baik dilakukan dengan mengubah satu parameter pada satu waktu dan membandingkan hasilnya.

### Transisi ke Slide Berikutnya

Setelah mahasiswa mencoba berbagai parameter, langkah berikutnya adalah menilai apakah hasil generation benar-benar valid, stabil, dan layak dimainkan. Pada slide berikutnya, kita akan membahas evaluasi hasil PCG.

---

## Slide 070 - Evaluasi Hasil PCG

### Narasi

Pada tahap ini, mahasiswa tidak lagi hanya membuat level atau spawn secara acak, tetapi mulai menilai apakah hasil **Procedural Content Generation** sudah layak digunakan dalam game. Evaluasi penting karena PCG yang baik bukan sekadar menghasilkan variasi, melainkan menghasilkan variasi yang **dapat dikontrol**, **dapat diuji**, dan **aman dimainkan**.

Intuisi praktisnya adalah: hasil PCG harus bisa dipertanggungjawabkan. Jika seed sama menghasilkan layout yang sama, sistem dapat diuji ulang. Jika objek spawn berada di posisi valid, player tidak mengalami bug. Jika jalur dari `start` ke `goal` tersedia, gameplay tidak macet.

Sepuluh pertanyaan pada slide dapat dibaca sebagai checklist evaluasi:

1. **Reproducibility**: apakah seed yang sama menghasilkan hasil yang sama?
2. **Spatial validity**: apakah objek spawn berada pada posisi valid?
3. **Player safety**: apakah enemy terlalu dekat dengan player?
4. **Distribution**: apakah item tersebar dengan baik?
5. **Connectivity**: apakah level memiliki path dari `start` ke `goal`?
6. **Controlled randomness**: apakah hasil terlalu acak atau masih terkontrol?
7. **Tunability**: apakah parameter mudah diatur?
8. **Robustness**: apakah sistem memiliki batas `maxAttempts`?
9. **Debuggability**: apakah debug seed tersedia?
10. **Playability**: apakah hasil generation menarik untuk dimainkan?

Dari sisi implementasi, beberapa poin ini saling terkait. Seed yang sama harus menghasilkan urutan random yang sama, sehingga posisi spawn, probability wall, rarity item, dan layout level dapat dibandingkan. Validasi posisi biasanya dilakukan dengan cek batas area, overlap, `NavMesh`, atau jarak minimum dari player. Validasi jalur biasanya memastikan bahwa `start` dan `goal` berada pada area yang dapat dicapai, bukan hanya secara visual terlihat terhubung.

Batas `maxAttempts` penting untuk mencegah proses generation berjalan terlalu lama ketika banyak percobaan gagal. Jika sistem terus mencoba tanpa batas, game bisa freeze atau memakan resource berlebihan. Debug seed juga penting karena ketika ada bug, mahasiswa dapat mereproduksi level yang sama dan memeriksa parameter apa yang menyebabkan masalah.

Sebelum lanjut, mahasiswa perlu memahami bahwa PCG yang baik tidak hanya menghasilkan banyak variasi, tetapi juga menghasilkan variasi yang **valid**, **reproducible**, dan **playable**. Tanpa evaluasi, sistem hanya terlihat bekerja, tetapi belum tentu aman untuk NPC, pathfinding, atau gameplay.

### Inti yang Harus Ditekankan

- Seed yang sama harus menghasilkan hasil yang sama, sehingga PCG dapat diuji dan di-debug.
- Hasil generation harus divalidasi: posisi spawn valid, jarak enemy aman, item tersebar, dan path `start` ke `goal` tersedia.
- Randomness harus terkontrol melalui parameter, `maxAttempts`, dan debug seed agar sistem tidak tidak stabil.
- Kualitas akhir PCG tidak hanya teknis, tetapi juga gameplay: hasil harus menarik dan layak dimainkan.

### Transisi ke Slide Berikutnya

Setelah hasil PCG dievaluasi, langkah berikutnya adalah melihat bagaimana level atau konten yang dihasilkan dapat terhubung dengan sistem pathfinding, navigation, movement, decision, dan tactical.

---

## Slide 071 - Hubungan PCG dengan Materi Sebelumnya

### Narasi

Pada slide ini, kita melihat posisi **PCG** dalam keseluruhan sistem **Game AI**. **PCG** bukan materi yang berdiri sendiri, tetapi berfungsi sebagai **penghasil konten** untuk sistem AI lainnya. Konten yang dihasilkan bisa berupa layout level, posisi spawn, jalur, obstacle, item, atau area taktis.

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

Daftar tersebut menunjukkan hubungan antara **PCG** dan sistem AI yang sudah dibahas sebelumnya.

- **Pathfinding**: setelah level dihasilkan, sistem perlu memastikan ada jalur valid dari `start` ke `goal`. Jika tidak ada jalur, level harus diperbaiki atau digenerate ulang.
- **Navigation**: posisi `spawn` harus berada pada area yang dapat dilalui, misalnya pada `NavMesh`. Jika posisi spawn tidak valid, NPC bisa terjebak atau tidak muncul dengan benar.
- **Movement AI**: NPC menggunakan level yang dihasilkan untuk bergerak, menghindari obstacle, mengikuti jalur, atau melakukan steering sederhana.
- **Decision AI**: enemy mengambil keputusan berdasarkan kondisi level, seperti jarak ke player, posisi aman, atau target yang terlihat.
- **Tactical AI**: fitur taktis seperti `cover`, chokepoint, atau posisi strategis dapat dibuat secara procedural agar perilaku enemy lebih bervariasi.

Dari sisi implementasi, alurnya adalah **PCG menghasilkan konten**, lalu sistem AI melakukan **validasi** dan **memanfaatkan konten tersebut** untuk perilaku in-game. Artinya, kualitas PCG sangat memengaruhi kualitas perilaku AI.

Hal penting yang harus dipahami mahasiswa adalah bahwa **PCG** dan **Game AI** saling melengkapi. Jika `seed` sama, hasil level dapat direproduksi, sehingga perilaku AI juga dapat diuji secara konsisten. Jika level tidak valid, sistem AI akan gagal bekerja dengan baik meskipun algoritmanya sudah benar.

### Inti yang Harus Ditekankan

- **PCG** adalah sumber konten bagi sistem **Game AI**, bukan materi terpisah.
- Hasil PCG harus divalidasi oleh **pathfinding**, **navigation**, dan sistem AI lainnya.
- Kualitas level procedural memengaruhi perilaku NPC, enemy, dan pengalaman bermain.
- `seed` penting untuk reproduksi hasil dan pengujian perilaku AI.

### Transisi ke Slide Berikutnya

Setelah memahami hubungan PCG dengan materi sebelumnya, kita lanjut ke slide berikutnya untuk melihat bagaimana PCG akan diperdalam pada materi level dan dungeon generation.

---

## Slide 072 - Hubungan PCG dengan Materi Berikutnya

### Narasi

Slide ini berfungsi sebagai penanda arah materi. Pada pertemuan ke-9, kita sudah membangun **dasar konsep PCG**, yaitu bagaimana konten game dapat dihasilkan secara prosedural dengan menggunakan **randomness**, **controlled randomness**, **seed**, **parameter**, **constraint**, dan aturan validasi.

Materi berikutnya akan memperdalam PCG ke arah `Level & Dungeon Generation`. Artinya, konsep yang sudah kita pelajari akan diterapkan untuk menghasilkan ruang permainan, seperti level, dungeon, atau area yang dapat dimainkan oleh pemain dan agen game.

Topik lanjutan yang akan dibahas dapat dilihat sebagai keluarga metode pembangkitan level:

- **grid-based generation**, yaitu pembuatan level berbasis sel atau grid.
- **random walk**, yaitu pembentukan ruang melalui langkah acak yang dikendalikan.
- **BSP**, yaitu metode pembagian ruang secara rekursif.
- **cellular automata**, yaitu pembentukan pola dari aturan lokal antar sel.
- **constraint-based generation**, yaitu pembangkitan konten dengan batasan desain yang lebih eksplisit.
- **procedural dungeon**, yaitu penerapan metode-metode tersebut untuk membuat dungeon yang dapat dimainkan.

Penting dipahami bahwa topik-topik ini bukan materi terpisah dari PCG, melainkan teknik untuk menghasilkan level yang valid, konsisten, dan sesuai tujuan desain. Level yang dihasilkan juga menjadi lingkungan bagi sistem AI lain, seperti spawning NPC, pathfinding, navigation, dan perilaku taktis agen.

Sebelum lanjut, mahasiswa perlu membawa pemahaman bahwa PCG yang baik bukan sekadar menghasilkan bentuk acak, tetapi menghasilkan konten yang memenuhi **constraint**, **parameter**, dan **tujuan desain**. Pertemuan 9 memberi fondasi konsep; pertemuan berikutnya memberi bentuk penerapan PCG untuk level dan dungeon.

### Inti yang Harus Ditekankan

- Pertemuan 9 adalah **dasar konsep PCG**, bukan implementasi level lengkap.
- Materi berikutnya akan membahas PCG untuk `Level & Dungeon Generation`.
- Topik lanjutan seperti **grid-based generation**, **random walk**, **BSP**, **cellular automata**, dan **constraint-based generation** adalah metode pembangkitan level.
- PCG menghasilkan lingkungan yang dapat mendukung sistem AI lain, seperti spawning, pathfinding, dan NPC behavior.

### Transisi ke Slide Berikutnya

Dengan memahami posisi materi ini, kita dapat menutup pertemuan dengan merangkum seluruh konsep PCG yang sudah dibahas.

---

## Slide 073 - Ringkasan Materi

### Narasi

Slide ini menutup pertemuan dengan merangkum alur konsep **Procedural Content Generation** atau **PCG** yang telah dibahas. Intinya, PCG adalah cara sistem membuat konten game secara otomatis, misalnya level, spawn musuh, atau variasi lingkungan, tanpa membuat semuanya secara manual. Dalam konteks **Game Cerdas**, PCG berhubungan erat dengan desain perilaku agen, karena konten yang dihasilkan harus tetap masuk akal, dapat dimainkan, dan mendukung keputusan NPC atau player.

Kita mulai dari **randomness**, yaitu sumber variasi. Namun, PCG yang baik tidak memakai acak murni. Acak perlu dikendalikan oleh **probability**, **weighted random**, dan **parameter PCG** agar hasil tetap sesuai tujuan desain. Misalnya, musuh sulit tidak muncul terlalu sering, atau fitur level tertentu memiliki peluang lebih besar. Di sinilah `seed` berperan penting: dengan `seed` yang sama, proses acak dapat menghasilkan konten yang sama, sehingga sistem menjadi **reproducible**. Reproducibility sangat berguna untuk debugging, testing, dan memastikan bug dapat ditemukan kembali.

Setelah memahami dasar acak terkendali, kita masuk ke cara membangun konten. Ada **constructive PCG**, yaitu konten dibangun langkah demi langkah hingga memenuhi aturan. Ada juga **generate-and-test PCG**, yaitu sistem membuat kandidat lalu mengujinya dengan **validation rules**. Validasi memastikan hasil tidak rusak, tidak mustahil, tidak terlalu sulit, dan tetap dapat dimainkan. Untuk konten seperti level sederhana atau **procedural spawning**, validasi bisa memeriksa jarak spawn, keterjangkauan, atau konsistensi aturan desain.

Sebagai penutup, mahasiswa perlu melihat PCG sebagai satu **taxonomy** yang bisa dipilih sesuai kebutuhan: acak sederhana, acak berbobot, berbasis aturan, berbasis parameter, atau berbasis validasi. Poin terpenting adalah PCG bukan sekadar membuat sesuatu secara acak, tetapi membuat variasi yang terukur, dapat diuji, dan tetap melayani pengalaman bermain.

### Inti yang Harus Ditekankan

- **PCG** adalah pembuatan konten game secara otomatis, bukan sekadar random murni.
- **Controlled randomness** menggunakan **probability**, **weighted random**, dan **parameter PCG** agar hasil tetap sesuai desain.
- `seed` dan **reproducibility** membuat hasil acak dapat diulang, sehingga mudah diuji dan diperbaiki.
- **Constructive PCG** membangun konten secara bertahap, sedangkan **generate-and-test PCG** membuat kandidat lalu memvalidasinya.
- **Validation rules** menjaga konten tetap valid, aman, dan dapat dimainkan.
- **Procedural spawning** dan **random level sederhana** adalah contoh penerapan PCG yang harus tetap memperhatikan aturan desain.

### Transisi ke Slide Berikutnya

Dengan ringkasan ini, kita siap membahas pertanyaan diskusi untuk menguji pemahaman tentang mengapa PCG perlu dikendalikan, bagaimana `seed` membantu debugging, serta kapan pendekatan constructive atau generate-and-test lebih tepat digunakan.

---

## Slide 074 - Pertanyaan Diskusi

### Narasi

Slide ini digunakan untuk menguji apakah mahasiswa sudah memahami inti **Procedural Content Generation** atau masih melihatnya sebagai sekadar **random**. Sepuluh pertanyaan di slide ini sebaiknya tidak dijawab satu per satu secara hafalan, tetapi dikelompokkan menjadi beberapa tema: **controlled randomness**, **reproducibility**, **metode PCG**, **validasi**, dan **replayability**.

- **Random vs controlled randomness**: PCG yang baik menggunakan `seed`, parameter, dan constraint agar hasil acak tetap sesuai tujuan desain.
- **Seed dan reproducibility**: `seed` membuat urutan acak dapat diulang, sehingga `debugging`, testing, dan reproduksi bug menjadi lebih mudah.
- **Constructive vs generate-and-test**: `constructive` membangun konten yang valid secara langsung, sedangkan `generate-and-test` membuat kandidat lalu memeriksa aturan; pendekatan ini sering lebih aman ketika aturan validasi kompleks.
- **Validasi dan spawning**: `validation` memastikan level dapat dimainkan; `pathfinding` dapat membantu mengecek keterjangkauan; `spawn enemy` perlu `min distance` agar adil.
- **Keamanan implementasi**: `maxAttempts` mencegah loop tak terbatas ketika posisi valid tidak ditemukan.

Dalam diskusi, mahasiswa perlu menjelaskan bahwa PCG bukan hanya membuat variasi, tetapi menjaga agar variasi tersebut tetap **playable**, **fair**, dan **consistent**. Jika sebuah sistem spawning menghasilkan posisi yang tidak valid, masalahnya biasanya ada pada aturan validasi, parameter spawn, atau fallback ketika `maxAttempts` tercapai.

### Inti yang Harus Ditekankan

- **PCG** adalah acak yang dikendalikan oleh aturan, parameter, dan tujuan desain.
- `seed` dan **reproducibility** penting untuk debugging dan pengujian.
- **Constructive** dan **generate-and-test** memiliki trade-off antara efisiensi dan kemudahan validasi.
- **Validation** dan `pathfinding` membantu memastikan konten procedural tetap dapat dimainkan.
- `maxAttempts` dan aturan `min distance` menjaga sistem spawning tetap aman dan adil.

### Transisi ke Slide Berikutnya

Selanjutnya, kita akan menerapkan konsep ini dalam latihan sederhana: merancang sistem procedural spawning dengan aturan validasi, `seed`, dan penanganan kasus ketika posisi valid tidak ditemukan.

---

## Slide 075 - Latihan Konsep

### Narasi

Slide ini meminta mahasiswa merancang **procedural spawning** sederhana. Fokus utamanya bukan sekadar menghasilkan posisi acak, tetapi memastikan setiap posisi yang dihasilkan memenuhi aturan desain. Dalam konteks game, spawning yang buruk dapat membuat musuh muncul terlalu dekat dengan pemain, item tertanam di dalam dinding, atau hasil yang tidak bisa diuji ulang.

Spesifikasi pada slide memberikan empat batasan penting:

- Spawn **10 enemy** dan **5 item** di arena.
- `enemy` tidak boleh muncul dalam **radius 5** dari `player`.
- `item` tidak boleh muncul di dalam `obstacle`.
- Gunakan `seed` agar hasil dapat diulang.

Intuisi praktisnya adalah: **random** hanya menentukan kandidat posisi, sedangkan **validasi** menentukan apakah kandidat itu boleh dipakai. `seed` membuat urutan angka acak menjadi deterministik, sehingga jika `seed` sama dan aturan sama, hasil spawning juga sama. Ini penting untuk debugging, pengujian, dan reproduksi masalah.

Parameter yang dibutuhkan dapat dikelompokkan sebagai berikut:

- `seed`: sumber determinisme untuk `Random` atau `RNG`.
- `enemyCount = 10` dan `itemCount = 5`: jumlah entitas yang harus di-spawn.
- `playerPosition`: posisi pemain saat spawning dievaluasi.
- `enemyMinDistance = 5`: jarak minimum antara `enemy` dan `player`.
- `obstacles`: daftar area terlarang, misalnya kotak, lingkaran, atau tile.
- `arenaBounds`: batas area spawning agar posisi tetap berada di dalam arena.
- `maxAttempts`: batas percobaan pencarian posisi valid untuk mencegah loop tak terbatas.

Aturan validasi harus diperiksa sebelum posisi disimpan. Untuk `enemy`, posisi harus berada di dalam arena dan jaraknya ke `player` harus lebih besar atau sama dengan `enemyMinDistance`. Untuk `item`, posisi harus berada di dalam arena dan tidak berada di dalam `obstacle`. Dengan aturan ini, sistem tidak hanya menghasilkan posisi acak, tetapi juga posisi yang aman untuk gameplay.

Struktur data yang cocok adalah daftar spawn terpisah untuk setiap tipe entitas. Misalnya:

- `List<EnemySpawn> enemySpawns`
- `List<ItemSpawn> itemSpawns`
- Struktur `SpawnPoint` yang menyimpan `position`, `type`, dan `id` jika diperlukan.

Pendekatan ini memudahkan iterasi, rendering, dan debugging karena `enemy` dan `item` memiliki aturan validasi yang berbeda.

Untuk debug, mahasiswa dapat menampilkan informasi visual dan log sederhana:

- Gambar lingkaran radius 5 di sekitar `player` sebagai zona terlarang untuk `enemy`.
- Gambar `obstacle` dengan warna berbeda.
- Tandai posisi kandidat yang gagal validasi dengan warna merah.
- Tandai posisi valid dengan warna hijau atau cyan.
- Cetak `seed`, jumlah spawn yang berhasil, jumlah percobaan, dan pesan gagal jika ada.

Debug visual sangat membantu karena mahasiswa dapat melihat langsung mengapa suatu posisi ditolak.

Jika posisi valid tidak ditemukan, sistem tidak boleh memaksa spawn pada posisi yang melanggar aturan. Langkah yang aman adalah berhenti setelah `maxAttempts` tercapai, mencatat kegagalan, dan melanjutkan dengan jumlah spawn yang berhasil. Contoh perilaku:

1. Coba cari posisi valid sebanyak `maxAttempts`.
2. Jika ditemukan, simpan ke daftar spawn.
3. Jika tidak ditemukan, catat `spawnFailed` dan lanjut ke entitas berikutnya.
4. Jika semua entitas gagal, tampilkan peringatan bahwa arena terlalu kecil atau aturan terlalu ketat.

Pendekatan ini menjaga konsistensi sistem dan memudahkan mahasiswa menganalisis penyebab kegagalan.

Pseudocode sederhana untuk alur spawning dapat ditulis sebagai berikut:

```text
rng = new RNG(seed)
enemySpawns = []
itemSpawns = []

for i = 0 to enemyCount - 1:
    pos = findValidPosition(rng, type = ENEMY)
    if pos != null:
        enemySpawns.add(pos)
    else:
        log("Enemy spawn gagal")

for i = 0 to itemCount - 1:
    pos = findValidPosition(rng, type = ITEM)
    if pos != null:
        itemSpawns.add(pos)
    else:
        log("Item spawn gagal")
```

Fungsi `findValidPosition` bertugas menghasilkan kandidat posisi acak, lalu memeriksa aturan validasi. Jika kandidat valid, fungsi mengembalikan posisi. Jika kandidat tidak valid, fungsi mencoba lagi sampai `maxAttempts` habis. Urutan eksekusi ini penting karena memisahkan **generasi kandidat** dan **penerimaan posisi**, sehingga sistem tidak langsung percaya pada hasil random.

Yang harus dipahami mahasiswa sebelum lanjut adalah: **procedural spawning** adalah kombinasi antara random, aturan validasi, dan mekanisme fallback. Tanpa `seed`, hasil sulit diulang. Tanpa validasi, spawn bisa merusak gameplay. Tanpa `maxAttempts`, sistem bisa terjebak loop tak terbatas.

### Inti yang Harus Ditekankan

- **Seed** membuat spawning deterministik dan mudah diuji.
- **Validasi** memastikan `enemy` tidak terlalu dekat dengan `player` dan `item` tidak berada di dalam `obstacle`.
- **`maxAttempts`** mencegah pencarian posisi valid berjalan tanpa batas.
- Struktur data spawn sebaiknya dipisah per tipe entitas agar aturan validasi lebih jelas.
- Debug visual membantu mahasiswa melihat zona terlarang, posisi valid, dan posisi yang ditolak.

### Transisi ke Slide Berikutnya

Setelah memahami cara spawning entitas dengan aturan validasi, langkah berikutnya adalah merancang level grid acak yang tetap memiliki path dari start ke goal. Pada slide berikutnya, kita akan membahas representasi grid, probability wall, validasi path, dan algoritma pathfinding yang dapat digunakan untuk memastikan level tersebut layak dimainkan.

---

## Slide 076 - Latihan Konsep Random Level

### Narasi

Slide ini mengajak mahasiswa merancang **random level grid** sederhana sebagai latihan **Procedural Content Generation** berbasis **generate-and-test**. Intinya, sistem tidak hanya menebar wall secara acak, tetapi juga memastikan hasil akhirnya tetap dapat dimainkan: harus ada **path** dari **start** ke **goal**.

Secara intuitif, level acak memberi variasi, tetapi tanpa aturan validasi hasilnya bisa tidak masuk akal. Mahasiswa perlu membayangkan grid 20 x 20 sebagai papan permainan: satu titik awal di kiri bawah, satu titik tujuan di kanan atas, dan sebagian sel menjadi wall.

Spesifikasi yang harus dipenuhi adalah:

```text
Ukuran map 20 x 20.
Start di kiri bawah.
Goal di kanan atas.
Wall muncul dengan probability tertentu.
Level harus memiliki path dari start ke goal.
```

Alur perancangan yang perlu dipahami adalah sebagai berikut:

1. **Representasi grid**
   Gunakan array dua dimensi, misalnya `grid[20][20]`, di mana setiap sel menyimpan status seperti `EMPTY`, `WALL`, `START`, atau `GOAL`. Koordinat bisa memakai `x` untuk kolom dan `y` untuk baris. Jika `y = 0` dianggap bawah, maka `start` dapat berada di `(0, 0)` dan `goal` di `(19, 19)`.

2. **Generate wall**
   Untuk setiap sel selain `start` dan `goal`, lempar nilai acak. Jika nilai acak lebih kecil dari `wallProbability`, sel menjadi `WALL`; selain itu tetap `EMPTY`. Contoh sederhana:

   ```text
   for y = 0 sampai 19:
       for x = 0 sampai 19:
           jika (x, y) bukan start dan bukan goal:
               grid[y][x] = WALL jika random() < wallProbability
               grid[y][x] = EMPTY selain itu
   ```

   Nilai `wallProbability` menjadi parameter desain. Nilai terlalu kecil membuat level terlalu kosong, sedangkan nilai terlalu besar membuat level sulit atau sering tidak valid.

3. **Validasi path**
   Setelah grid terbentuk, jalankan pencarian jalur dari `start` ke `goal`. Validasi ini penting karena wall acak bisa memotong semua jalur. Jika ada jalur, level dinyatakan valid; jika tidak, level harus diperbaiki atau dibuat ulang.

4. **Algoritma pathfinding**
   Untuk grid 20 x 20, **BFS** atau **DFS** sudah cukup untuk memeriksa ketercapaian. Jika mahasiswa ingin menampilkan jalur terpendek untuk debug atau perilaku NPC, `A*` bisa digunakan. Pada konteks latihan ini, tujuan utamanya adalah memastikan `goal` dapat dicapai, bukan mengoptimalkan jalur.

5. **Penanganan level tidak valid**
   Strategi paling sederhana adalah **generate-and-test**: buat level, uji path, dan jika gagal, buat ulang level. Untuk menghindari percobaan tak terbatas, batasi jumlah retry. Jika level tetap tidak valid, turunkan `wallProbability`, ubah seed, atau buat jalur aman terlebih dahulu sebelum menaburkan wall tambahan.

Hal yang harus ditekankan pada mahasiswa adalah bahwa **randomness** saja tidak cukup. PCG yang baik menggabungkan **randomness**, **constraint**, dan **validation**. Wall acak memberi variasi, tetapi aturan pathfinding memastikan level tetap playable.

### Inti yang Harus Ditekankan

- Gunakan **grid 2D** sebagai representasi level, dengan status sel yang jelas seperti `EMPTY`, `WALL`, `START`, dan `GOAL`.
- Wall dibuat dengan **controlled randomness** menggunakan `wallProbability`, bukan acak tanpa aturan.
- Validasi level dilakukan dengan **pathfinding** dari `start` ke `goal`, misalnya **BFS** untuk ketercapaian atau `A*` untuk jalur terpendek.
- Jika level tidak valid, gunakan strategi **generate-and-test**, retry terbatas, penyesuaian parameter, atau perbaikan jalur.
- PCG bukan sekadar acak; ia membutuhkan **constraint** dan **validation** agar hasil tetap dapat dimainkan.

### Transisi ke Slide Berikutnya

Selanjutnya, kita masuk ke penutup praktikum pertemuan ini, di mana latihan random spawning dan random level akan dirangkum menjadi fokus praktikum: random generation, seed, prefab spawning, validation, parameter tuning, dan debug visual. Setelah itu, materi akan berlanjut ke PCG for Level & Dungeon Generation yang memperdalam teknik generation level berbasis grid dan dungeon.

---

## Slide 077 - Penutup

### Narasi

Pertemuan ini kita akhiri dengan menegaskan bahwa **Procedural Content Generation** atau **PCG** bukan sekadar membuat konten secara acak. PCG adalah cara sistem menghasilkan variasi konten game dengan **algoritma**, **randomness**, **aturan desain**, dan **validasi**. Tujuannya adalah menjaga agar hasil yang dihasilkan tetap **dapat dimainkan**, konsisten dengan desain level, dan mampu meningkatkan **replayability** karena pemain dapat mengalami konfigurasi yang berbeda pada setiap sesi.

Praktikum detail untuk pertemuan ini akan dibuat pada modul terpisah:

```text
Procedural Spawning
/
Random Level Sederhana
```

Fokus praktikum adalah:

- **random generation** untuk menghasilkan elemen level atau objek secara prosedural,
- penggunaan `seed` agar hasil dapat diulang dan mudah diuji,
- `prefab spawning` untuk menempatkan objek game ke scene secara dinamis,
- `validation` untuk memastikan hasil generation memenuhi syarat, misalnya path dari start ke goal tetap tersedia,
- `parameter tuning` untuk mengatur probabilitas, ukuran map, jumlah objek, atau tingkat kesulitan,
- `debug visual` agar mahasiswa dapat melihat proses generation dan menemukan masalah secara langsung.

Poin penting yang harus dibawa mahasiswa adalah bahwa **randomness** memberi variasi, tetapi **constraint** membuat konten tetap masuk akal dan dapat dimainkan. Tanpa validasi, hasil acak dapat menghasilkan level yang tidak valid, objek yang menabrak, atau path yang terputus. Oleh karena itu, PCG yang baik selalu menggabungkan kebebasan generasi dengan aturan desain yang jelas.

### Inti yang Harus Ditekankan

- **PCG** adalah kombinasi antara algoritma, randomness, aturan desain, dan validasi.
- `seed` penting untuk **reproducibility**, pengujian, dan debugging.
- Hasil procedural harus divalidasi agar tetap **playable** dan sesuai desain.
- `parameter tuning` dan `debug visual` membantu mahasiswa memahami dampak perubahan parameter terhadap hasil generation.

### Transisi ke Slide Berikutnya

Selanjutnya, materi akan berlanjut ke **PCG for Level & Dungeon Generation**, yang akan memperdalam generation level berbasis grid, dungeon, dan teknik procedural lain.
