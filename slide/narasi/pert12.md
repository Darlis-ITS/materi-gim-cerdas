# Narasi Game Cerdas - Pertemuan 12

## Player Modeling & Adaptive Game AI

Sumber: markdown/pert12.md

---

## Slide 001 - Cover

### Narasi

Selamat datang di **Pertemuan 12** mata kuliah **Game Cerdas**. Pada pertemuan ini, kita akan membahas **Player Modeling** dan sistem adaptif dalam game. Inti dari topik ini adalah bagaimana game tidak hanya menjalankan aturan statis, tetapi juga mengamati perilaku pemain melalui data yang dihasilkan selama bermain.

Data tersebut dapat berupa **player telemetry**, misalnya waktu menyelesaikan level, jumlah kesalahan, pola serangan, frekuensi penggunaan item, atau arah pergerakan pemain. Dari data itu, sistem dapat melakukan **skill estimation** untuk memperkirakan kemampuan pemain, mengenali **play style** seperti agresif, defensif, eksploratif, atau hati-hati, lalu menyusun **player profile** yang menggambarkan karakteristik pemain secara lebih utuh.

Dengan profil tersebut, game dapat menerapkan **adaptation policy** untuk menyesuaikan pengalaman bermain. Penyesuaian ini bisa berupa perubahan tantangan, bantuan, umpan balik, atau perilaku karakter non-pemain, tetapi pada pertemuan ini kita akan memahaminya dari sisi pemodelan pemain terlebih dahulu. Praktikum yang akan dibuat terpisah akan mengajak mahasiswa **merekam `gameplay metrics`** dan membuat **`player model` sederhana di `Unity`**, sehingga konsep ini tidak berhenti pada teori.

Sebelum masuk ke detail, hal penting yang harus dipahami adalah bahwa **player modeling** adalah dasar dari sistem adaptif: tanpa data yang bermakna dan representasi pemain yang jelas, penyesuaian pengalaman bermain akan menjadi kurang tepat.

### Inti yang Harus Ditekankan

- **Player telemetry** adalah sumber data utama untuk memahami perilaku pemain.
- **Skill estimation**, **play style**, dan **player profile** membantu mengubah data mentah menjadi representasi pemain yang dapat digunakan sistem.
- **Adaptation policy** adalah aturan atau strategi yang menentukan bagaimana informasi pemain digunakan untuk menyesuaikan pengalaman bermain.
- Praktikum akan berfokus pada **perekaman `gameplay metrics`** dan pembuatan **`player model` sederhana di `Unity`**.

### Transisi ke Slide Berikutnya

Sebelum membahas pemodelan pemain secara lebih dalam, kita akan meninjau kembali materi **Dynamic Difficulty Adjustment** dari pertemuan sebelumnya sebagai dasar konsep adaptasi dalam game.

---

## Slide 002 - Review Pertemuan 11

### Narasi

Slide ini menjadi pengingat singkat sebelum kita masuk ke materi baru. Pada Pertemuan 11, kita membahas **Dynamic Difficulty Adjustment** atau **DDA**. Intinya, DDA menggunakan data performa player untuk menyesuaikan tingkat kesulitan game secara dinamis.

Alurnya dapat dilihat sebagai umpan balik sederhana: game mengamati apakah player terlalu mudah menang atau terlalu sering kalah, lalu mengubah parameter tantangan.

```text
Player terlalu mudah menang
        ↓
Difficulty naik

Player sering kalah
        ↓
Difficulty turun
```

Parameter yang dapat diadaptasi biasanya berada pada sisi tantangan, misalnya:

- `enemy health`
- `enemy damage`
- `enemy speed`
- `spawn rate`
- `item drop`
- `enemy aggression`

Yang penting dipahami adalah bahwa DDA tidak hanya mengubah satu angka, tetapi dapat memengaruhi perilaku NPC, tekanan gameplay, dan keseimbangan pengalaman bermain. Namun, fokus DDA masih pada pertanyaan: apakah game saat ini terlalu sulit atau terlalu mudah? Di Pertemuan 12, kita memperluas pandangan tersebut dengan mulai membangun pemahaman tentang player itu sendiri.

### Inti yang Harus Ditekankan

- **DDA** menyesuaikan difficulty berdasarkan data performa player.
- Adaptasi dapat dilakukan pada parameter gameplay seperti `enemy health`, `spawn rate`, dan `enemy aggression`.
- DDA fokus pada keseimbangan tantangan, sedangkan **player modeling** fokus pada pemahaman karakteristik player.

### Transisi ke Slide Berikutnya

Setelah memahami bahwa DDA hanya menjawab apakah difficulty sudah tepat, kita lanjut ke pertanyaan yang lebih luas: bagaimana game mengenali pola bermain player? Pada slide berikutnya, kita akan melihat pergeseran dari DDA ke **player modeling**.

---

## Slide 003 - Dari DDA ke Player Modeling

### Narasi

Pada slide ini kita melangkah dari **Dynamic Difficulty Adjustment** ke **Player Modeling**. DDA adalah mekanisme adaptasi yang sudah kita bahas sebelumnya. Fokus utamanya adalah menjaga pengalaman bermain tetap seimbang berdasarkan sinyal performa pemain.

```text
Apakah game terlalu sulit atau terlalu mudah saat ini?
```

Pertanyaan ini penting, tetapi cakupannya masih terbatas. DDA biasanya bekerja pada parameter kesulitan, misalnya `enemy health`, `enemy damage`, `spawn rate`, atau `item drop`.

**Player Modeling** memperluas pertanyaan tersebut. Ia tidak hanya menilai apakah game terlalu sulit atau terlalu mudah, tetapi mencoba memahami pola bermain pemain secara lebih utuh.

```text
Player ini bermain seperti apa?
Seberapa ahli player ini?
Apa gaya bermainnya?
Apa preferensi tindakannya?
Adaptasi apa yang paling cocok?
```

Intuisi praktisnya bisa dibayangkan seperti perbedaan antara **termometer** dan **profil pemain**. Termometer hanya membaca satu nilai, misalnya suhu. Profil pemain menyimpan gambaran yang lebih kaya: kebiasaan, kekuatan, kelemahan, dan preferensi. Dalam konteks game, hal ini membantu sistem adaptif memilih respons yang lebih tepat, bukan sekadar menaikkan atau menurunkan `difficulty`.

Perbedaan utamanya dapat diringkas sebagai berikut:

- **DDA** fokus pada **difficulty**.
- **Player Modeling** fokus pada **pemahaman terhadap player**.
- DDA sering menjadi salah satu bentuk adaptasi.
- Player modeling menjadi dasar untuk memilih adaptasi yang lebih personal.

Sebelum lanjut, mahasiswa perlu memahami bahwa adaptasi game tidak selalu berarti mengubah kesulitan. Kadang pemain membutuhkan tantangan yang lebih besar, kadang membutuhkan bantuan, kadang membutuhkan variasi, dan kadang membutuhkan konten yang sesuai dengan gaya bermainnya. **Player model** membantu sistem mengenali kondisi tersebut.

Dalam implementasi sederhana, data perilaku pemain dapat dirangkum menjadi gambaran internal, misalnya estimasi keahlian, tingkat agresivitas, kecenderungan eksplorasi, atau preferensi tindakan. Gambaran inilah yang kemudian dapat digunakan oleh sistem adaptif untuk menyesuaikan perilaku game.

### Inti yang Harus Ditekankan

- **DDA** menjawab pertanyaan sempit: apakah game terlalu sulit atau terlalu mudah.
- **Player Modeling** menjawab pertanyaan yang lebih luas: bagaimana pemain bermain, seberapa ahli, dan apa preferensinya.
- DDA berfokus pada **difficulty**, sedangkan player modeling berfokus pada **pemahaman terhadap player**.
- Player model menjadi dasar untuk adaptasi yang lebih personal, bukan hanya penyesuaian kesulitan.

### Transisi ke Slide Berikutnya

Selanjutnya, kita akan melihat posisi materi ini dalam alur Game Cerdas, mulai dari PCG, procedural level, DDA, hingga player modeling dan adaptive gameplay.

---

## Slide 004 - Posisi Materi dalam Game Cerdas

### Narasi

Slide ini membantu mahasiswa melihat **posisi materi** dalam alur kuliah Game Cerdas. Pertemuan 12 berada setelah beberapa topik yang membangun dasar sistem konten dan adaptasi.

```text
Pertemuan 9
PCG

Pertemuan 10
Procedural Level / Dungeon

Pertemuan 11
Dynamic Difficulty Adjustment

Pertemuan 12
Player Modeling & Adaptive Game AI
```

Alur tersebut menunjukkan bahwa materi tidak berdiri sendiri. **PCG** memberi dasar pembuatan konten, **procedural level / dungeon** membentuk lingkungan bermain, dan **Dynamic Difficulty Adjustment** mulai menyesuaikan tingkat kesulitan. Pada pertemuan 12, fokusnya diperluas dari sekadar menyesuaikan difficulty menjadi memahami pola bermain player.

Hubungan teknisnya dapat dilihat dari pipeline berikut:

```text
Telemetry
    ↓
Player Model
    ↓
Adaptation Policy
    ↓
Adaptive Gameplay
```

Secara sederhana, alurnya adalah:

1. `Telemetry` mengumpulkan data perilaku player.
2. `Player Model` merangkum data tersebut menjadi representasi profil player.
3. `Adaptation Policy` menentukan strategi adaptasi yang tepat.
4. `Adaptive Gameplay` menghasilkan perubahan gameplay yang lebih personal.

Dengan demikian, **player modeling** menjadi dasar bagi game yang tidak hanya sulit atau mudah secara umum, tetapi mampu menyesuaikan diri terhadap gaya bermain masing-masing player.

### Inti yang Harus Ditekankan

- Materi ini berada setelah **PCG**, **procedural level / dungeon**, dan **Dynamic Difficulty Adjustment**.
- Fokus pertemuan 12 adalah memahami player, bukan hanya mengatur difficulty.
- Alur utama yang harus diingat adalah `Telemetry` → `Player Model` → `Adaptation Policy` → `Adaptive Gameplay`.

### Transisi ke Slide Berikutnya

Setelah posisi materi ini jelas, kita lanjut ke alasan mengapa player modeling penting dalam desain gameplay yang adaptif.

---

## Slide 005 - Mengapa Player Modeling Penting?

### Narasi

Slide ini menjawab pertanyaan dasar: mengapa kita perlu memodelkan pemain? Dalam game, setiap pemain tidak bermain dengan pola yang sama. Ada pemain yang cenderung **agresif**, ada yang **defensif**, ada yang **eksploratif**, ada yang cepat belajar, ada yang sering menghindari combat, ada yang suka mengumpulkan item, dan ada yang selalu mengambil risiko. Perbedaan ini bukan sekadar gaya bermain; ia memengaruhi pengalaman, kesulitan, dan motivasi pemain.

Intuisi praktisnya sederhana: jika game hanya memberikan tantangan yang sama untuk semua orang, sebagian pemain akan merasa terlalu mudah, sedangkan sebagian lain merasa terlalu sulit. Dengan `player modeling`, game dapat mengamati pola perilaku pemain dan membentuk gambaran internal tentang siapa yang sedang bermain. Gambaran ini bisa berupa preferensi, kemampuan, kebiasaan, atau tingkat kenyamanan terhadap risiko.

Setelah pola tersebut dikenali, game dapat melakukan penyesuaian yang lebih relevan. Misalnya, tantangan dapat dinaikkan atau diturunkan, reward dapat disesuaikan dengan minat pemain, `enemy behavior` dapat diubah agar lebih menantang atau lebih ramah, `hint` dapat diberikan pada saat yang tepat, dan `pacing` permainan dapat diatur agar pemain tidak bosan atau frustrasi.

Hubungannya dengan desain game cukup langsung. `Player modeling` membantu game menjadi lebih responsif terhadap manusia, bukan hanya terhadap input mekanik. Dalam konteks NPC atau enemy behavior, sistem adaptif dapat memilih respons yang berbeda berdasarkan profil pemain: pemain agresif mungkin mendapat musuh yang lebih cepat, pemain defensif mungkin mendapat tekanan yang lebih terukur, dan pemain eksploratif mungkin mendapat insentif untuk membuka area baru.

Yang perlu dipahami sebelum lanjut adalah bahwa `player modeling` bukan tentang membaca pikiran pemain secara sempurna. Ia adalah proses membangun model yang berguna dari perilaku yang dapat diamati. Model ini kemudian menjadi dasar bagi keputusan adaptif, sehingga game dapat memberi pengalaman yang lebih personal tanpa harus mengubah seluruh desain secara drastis.

Secara singkat, pentingnya `player modeling` terletak pada kemampuannya mengubah variasi perilaku pemain dari masalah desain menjadi peluang untuk meningkatkan **engagement**. Game yang dapat mengenali pola pemain dapat menyesuaikan tantangan, reward, `enemy behavior`, `hint`, dan `pacing` secara lebih tepat.

### Inti yang Harus Ditekankan

- `Player modeling` penting karena pemain memiliki gaya bermain yang berbeda: agresif, defensif, eksploratif, cepat belajar, menghindari combat, mengumpulkan item, atau suka mengambil risiko.
- Model pemain memungkinkan game menyesuaikan tantangan, reward, `enemy behavior`, `hint`, `pacing`, dan engagement secara lebih relevan.
- Tujuan utamanya bukan membaca pikiran pemain secara sempurna, tetapi membangun gambaran perilaku yang berguna untuk keputusan adaptif.

### Transisi ke Slide Berikutnya

Selanjutnya, kita akan melihat contoh konkret perbedaan pemain, yaitu player agresif, defensif, dan explorer, serta bagaimana game adaptif dapat merespons masing-masing profil secara berbeda.

---

## Slide 006 - Contoh Perbedaan Player

### Narasi

Pada slide ini, kita melihat **contoh konkret perbedaan player**. Tujuannya bukan memberi label secara kaku, tetapi menunjukkan bahwa gaya bermain dapat dikenali dari **pola perilaku** yang muncul selama gameplay.

**Player A — Aggressive** biasanya menunjukkan pola:

- sering menyerang,
- jarang mundur,
- `damage_dealt` tinggi,
- `damage_received` tinggi.

Secara intuitif, player ini cenderung mencari combat dan tidak takut mengambil risiko. Dalam sistem adaptif, pola seperti ini bisa menjadi sinyal bahwa player membutuhkan tantangan combat yang lebih konsisten, atau NPC yang tetap memberikan tekanan.

**Player B — Defensive** menunjukkan pola yang berbeda:

- sering menjaga jarak,
- menggunakan cover,
- `damage_received` rendah,
- `progress` lebih lambat.

Player ini lebih berhati-hati dan mengutamakan keselamatan. Dari sisi perilaku, `cover_usage`, `distance_to_enemy`, dan `progress_speed` bisa menjadi metrik yang relevan. Sistem adaptif dapat merespons dengan memberi ruang, peluang aman, atau tantangan yang tidak terlalu memaksa combat.

**Player C — Explorer** memiliki fokus yang lain:

- sering membuka area samping,
- mengumpulkan item,
- waktu bermain lebih lama,
- combat tidak selalu prioritas.

Pola ini menunjukkan ketertarikan pada eksplorasi, item, dan reward non-combat. Metrik seperti `area_explored`, `item_collected`, `play_time`, dan `combat_priority` dapat membantu mengenali player tipe ini.

Penting untuk dipahami bahwa **satu metrik tidak boleh diinterpretasikan secara tunggal**. Misalnya, `damage_received` tinggi pada player agresif bisa berarti ia banyak terlibat combat, sedangkan pada player defensif bisa berarti ia jarang terkena serangan karena menghindari bahaya. `progress` yang lambat juga tidak selalu berarti player kurang mampu; bisa jadi ia memilih strategi yang lebih aman atau sedang mengeksplorasi.

Karena itu, player modeling yang baik melihat **kombinasi metrik**, bukan satu angka saja. Pola perilaku inilah yang kemudian dapat dijadikan profil sederhana, lalu digunakan oleh sistem adaptif untuk menyesuaikan tantangan, reward, atau perilaku NPC.

Sebelum lanjut, mahasiswa perlu menangkap bahwa **play style adalah pola yang dapat diamati**, bukan sifat tetap. Data gameplay harus dibaca sebagai konteks, sehingga respons game tetap masuk akal dan tidak mengubah identitas game secara berlebihan.

### Inti yang Harus Ditekankan

- Perbedaan player terlihat dari **pola metrik**, bukan dari satu aksi atau satu statistik.
- **Agresif**, **defensif**, dan **eksploratif** adalah contoh play style yang dapat dikenali dari perilaku gameplay.
- Sistem adaptif harus merespons profil player dengan perubahan yang sesuai, seperti tantangan, reward, atau perilaku NPC.

### Transisi ke Slide Berikutnya

Dengan contoh perbedaan player ini, kita sudah melihat bagaimana perilaku player dapat dibedakan secara sederhana. Selanjutnya, kita akan merangkum capaian pembelajaran pertemuan agar mahasiswa memahami kompetensi yang harus dikuasai.

---

## Slide 007 - Capaian Pembelajaran Pertemuan

### Narasi

Pada slide ini, kita merangkum **capaian pembelajaran** pertemuan **Player Modeling & Adaptive Game AI**. Tujuannya bukan sekadar mengenal istilah, tetapi memahami alur kerja: bagaimana data dari pemain diubah menjadi model, lalu model tersebut digunakan oleh sistem untuk menyesuaikan perilaku game.

Secara garis besar, capaian ini dapat dibaca dalam empat kelompok:

1. **Pemahaman konsep dasar**  
   Mahasiswa mampu menjelaskan **player modeling**, `player telemetry`, dan contoh data yang direkam selama gameplay.

2. **Pengukuran dan estimasi**  
   Mahasiswa dapat menentukan `gameplay metrics` yang relevan, menjelaskan `skill estimation` sederhana, serta mengidentifikasi `play style` berdasarkan metrik tersebut.

3. **Profil dan adaptasi**  
   Mahasiswa mampu membuat `player profile` sederhana, menjelaskan `adaptation policy`, dan menghubungkan model pemain dengan **adaptive Game AI**.

4. **Implementasi dan tanggung jawab desain**  
   Mahasiswa dapat merancang sistem player modeling sederhana di `Unity`, sekaligus menjelaskan isu desain dan etika dalam penggunaan data pemain.

Dengan capaian ini, mahasiswa diharapkan tidak hanya memahami “apa” yang dilakukan sistem, tetapi juga “mengapa” data tertentu dipilih, bagaimana data itu diolah, dan bagaimana hasilnya memengaruhi perilaku game.

### Inti yang Harus Ditekankan

- **Player modeling** adalah representasi pemain yang dibangun dari data gameplay, bukan sekadar label statis.
- `Telemetry`, `metrics`, `skill estimation`, dan `play style` adalah dasar untuk membentuk `player profile`.
- `Player profile` harus dihubungkan dengan `adaptation policy` agar benar-benar memengaruhi **adaptive Game AI**.
- Implementasi di `Unity` perlu disertai pertimbangan desain dan etika penggunaan data pemain.

### Transisi ke Slide Berikutnya

Setelah capaian pembelajaran ini jelas, kita masuk ke pertanyaan mendasar: apa sebenarnya **player modeling** dan bentuk representasi apa yang dapat dibuat dari data pemain.

---

## Slide 008 - Apa Itu Player Modeling?

### Narasi

Pada slide ini kita membahas **Player Modeling**, yaitu proses membuat representasi atau model tentang player berdasarkan data gameplay.

Intuisi sederhananya, sistem game tidak perlu tahu siapa player secara personal. Yang penting adalah perilaku player yang bisa diamati: bagaimana player bergerak, memilih aksi, menghadapi musuh, mengambil risiko, dan merespons tantangan.

Data gameplay tersebut kemudian dirangkum menjadi atribut yang lebih bermakna. Atribut ini bisa menggambarkan:

- **performa**, misalnya keberhasilan menyelesaikan misi atau tingkat kematian;
- **skill**, misalnya konsistensi dalam menghindari bahaya;
- **gaya bermain**, misalnya agresif, defensif, atau eksploratif;
- **preferensi**, misalnya lebih suka combat, puzzle, atau dialog;
- **kebiasaan**, misalnya sering menggunakan item tertentu;
- **kecenderungan risiko**, misalnya sering mengambil jalur berbahaya;
- **respons terhadap difficulty**, misalnya cepat menyerah atau terus mencoba;
- **pola eksplorasi**, misalnya sering membuka area baru atau tetap di jalur utama.

Contoh representasinya bisa ditulis seperti ini:

```text
Player Profile:
Skill        = Medium
Play Style   = Aggressive
Risk Level   = High
Exploration  = Low
Preferred Action = Combat
```

Profil ini bukan sekadar daftar label. Ia adalah ringkasan perilaku yang bisa digunakan oleh sistem game. Misalnya, NPC dapat menyesuaikan cara menyerang, memberi tantangan yang lebih sesuai, atau menampilkan respons yang berbeda terhadap gaya bermain player.

Dalam konteks sistem adaptif, player model menjadi jembatan antara data gameplay dan keputusan sistem. Data mentah seperti waktu bertahan hidup, jumlah serangan, atau jarak tempuh diolah menjadi atribut profil. Atribut tersebut kemudian menjadi masukan bagi kebijakan adaptasi, misalnya penyesuaian difficulty, pemilihan strategi NPC, atau penyajian tantangan.

Yang perlu dipahami mahasiswa adalah bahwa player modeling bukan tentang membaca pikiran player. Ia adalah proses membangun gambaran yang berguna dari perilaku yang teramati. Model ini membantu game memahami pola player secara lebih terstruktur, sehingga perilaku sistem dapat terasa lebih responsif dan kontekstual.

Sebelum lanjut, pastikan mahasiswa memahami bahwa player model adalah representasi dari data gameplay, bukan data mentah itu sendiri. Representasi inilah yang akan menjadi dasar pembahasan berikutnya.

### Inti yang Harus Ditekankan

- **Player Modeling** adalah proses mengubah data gameplay menjadi representasi player yang dapat digunakan sistem.
- Model player biasanya berisi atribut seperti `Skill`, `Play Style`, `Risk Level`, `Exploration`, dan `Preferred Action`.
- Profil player bukan label tetap, melainkan ringkasan perilaku yang dapat memengaruhi keputusan sistem adaptif.
- Player model menjadi dasar bagi sistem untuk menyesuaikan difficulty, strategi NPC, atau pengalaman bermain.

### Transisi ke Slide Berikutnya

Setelah memahami apa itu player modeling, kita akan melihat bahwa model ini pada dasarnya adalah representasi estimasi dari perilaku player, bukan pengetahuan yang sempurna.

---

## Slide 009 - Player Model sebagai Representasi

### Narasi

Pada slide ini, kita perlu memahami bahwa **player model** bukan berarti sistem mengetahui player secara sempurna. Dalam konteks **Game AI**, player model adalah **representasi** atau gambaran internal tentang player yang dibangun berdasarkan data gameplay. Representasi ini penting karena NPC, sistem adaptif, atau mekanisme game tidak bisa membaca pikiran player secara langsung; mereka hanya bisa menafsirkan perilaku yang terlihat selama permainan berlangsung.

Artinya, player model pada dasarnya adalah **estimasi**. Sistem tidak menyatakan bahwa player “pasti” agresif, tetapi lebih tepat mengatakan bahwa berdasarkan pola yang diamati, sistem memperkirakan player memiliki kecenderungan agresif. Contoh sederhana yang ada di slide adalah:

```text
Jika player sering menyerang dan jarang mengambil cover,
maka sistem memperkirakan player memiliki gaya agresif.
```

Perhatikan bahwa kalimat ini bukan kesimpulan mutlak. Ia adalah interpretasi. Player mungkin saja sedang dalam situasi tertentu, sedang bereksperimen, atau hanya satu kali bermain dengan gaya berbeda. Karena itu, model player harus selalu dipandang sebagai gambaran yang bisa berubah.

Karena model bisa salah, player model yang baik sebaiknya memiliki beberapa sifat penting:

- **Diperbarui secara berkala**, sehingga model tidak membeku pada perilaku lama player.
- **Menggunakan beberapa `metrics`**, bukan hanya satu indikator saja.
- **Tidak mengambil kesimpulan dari satu kejadian**, karena satu kejadian bisa bersifat kebetulan.
- **Memiliki `confidence` atau tingkat keyakinan**, sehingga sistem tahu seberapa kuat suatu interpretasi.

Istilah `confidence` sangat penting di sini. Misalnya, jika player hanya sekali menyerang tanpa `cover`, sistem mungkin memberi label `aggressive` dengan `confidence` rendah. Namun, jika pola itu muncul berulang kali, `confidence` bisa meningkat. Dengan cara ini, sistem tidak langsung mengubah perilaku game secara drastis hanya karena satu kejadian.

Secara praktis, player model bisa dibayangkan seperti “bayangan” player dalam sistem. Bayangan itu membantu sistem memahami player, tetapi bayangan tersebut bisa kabur, berubah, atau bahkan salah. Oleh karena itu, mahasiswa perlu memahami bahwa player model adalah **abstraksi**, bukan data mentah. Data mentah adalah apa yang terjadi dalam gameplay, sedangkan player model adalah interpretasi dari data tersebut.

Sebelum lanjut, hal yang harus dipahami adalah: player model bukan kebenaran absolut, melainkan estimasi yang harus dikelola dengan hati-hati. Sistem game yang baik tidak langsung percaya penuh pada satu label player. Ia menimbang pola, memperbarui model, dan menjaga agar keputusan adaptif tetap masuk akal.

### Inti yang Harus Ditekankan

- **Player model adalah representasi**, bukan pengetahuan sempurna tentang player.
- Player model dibangun sebagai **estimasi** berdasarkan pola perilaku, bukan dari satu kejadian.
- Model yang baik harus **diperbarui**, menggunakan **beberapa `metrics`**, dan memiliki **`confidence`**.
- `confidence` penting agar sistem tidak terlalu cepat mengubah perilaku game berdasarkan data yang belum cukup kuat.

### Transisi ke Slide Berikutnya

Setelah memahami bahwa player model adalah estimasi yang bisa berubah, langkah berikutnya adalah melihat dari mana data mentah untuk membangun model tersebut berasal, yaitu melalui **player telemetry**.

---

## Slide 010 - Player Telemetry

### Narasi

**Player telemetry** adalah data gameplay yang direkam selama player bermain. Data ini biasanya berupa **event mentah** yang menggambarkan apa yang terjadi pada player di dalam game.

Dalam sistem game, telemetry berfungsi sebagai sumber informasi utama untuk memahami perilaku player. Tanpa data ini, sistem hanya bisa merespons berdasarkan aturan tetap, bukan berdasarkan pola bermain yang sebenarnya.

Contoh data telemetry yang umum direkam:

- `position` atau posisi player,
- `health` atau kondisi hidup,
- `damage taken` dan `damage dealt`,
- `kill` dan `death`,
- `play time` atau waktu bermain,
- `item collected`,
- `ability used`,
- `area explored`,
- `enemy encountered`,
- `objective completed`.

Penting untuk membedakan bahwa telemetry masih berupa **data mentah**, bukan kesimpulan. Misalnya, satu `damage event` tidak langsung berarti player sedang kesulitan. Sistem perlu mengumpulkan banyak event, lalu memprosesnya menjadi gambaran yang lebih bermakna.

Telemetry menjadi bahan mentah untuk membangun **player model**. Player model adalah estimasi tentang gaya bermain, kemampuan, atau preferensi player. Semakin lengkap dan konsisten data telemetry, semakin baik model tersebut dapat diperbarui.

Namun, pada slide ini kita belum membahas cara mengubah data mentah menjadi nilai terukur. Pengolahan telemetry menjadi metrik akan dibahas pada slide berikutnya.

### Inti yang Harus Ditekankan

- **Player telemetry** adalah data gameplay mentah yang direkam selama permainan.
- Telemetry berisi event seperti posisi, damage, kill, item, ability, area, dan objective.
- Telemetry adalah bahan dasar untuk membuat **player model**, bukan model itu sendiri.
- Data mentah perlu dikumpulkan dan diolah sebelum menjadi kesimpulan tentang player.

### Transisi ke Slide Berikutnya

Setelah memahami apa saja yang direkam sebagai telemetry, langkah berikutnya adalah membedakan data mentah tersebut dengan nilai yang sudah dihitung, yaitu metrik.

---

## Slide 011 - Telemetry vs Metrics

### Narasi

Pada slide ini kita membedakan dua istilah yang sering tertukar: **telemetry** dan **metrics**. Keduanya penting dalam player modeling, tetapi perannya berbeda. **Telemetry** adalah data mentah yang ditangkap selama player bermain, sedangkan **metrics** adalah nilai yang sudah dihitung dari data tersebut.

Secara intuitif, telemetry ibarat catatan kejadian di lapangan, sedangkan metrics ibarat statistik yang sudah dirangkum. Telemetry menjawab pertanyaan "apa yang terjadi?", sementara metrics membantu menjawab "seberapa sering, seberapa cepat, atau seberapa efektif?".

Contoh telemetry yang direkam dari gameplay adalah:

```text
Player position setiap 1 detik
Damage event
Attack event
Item pickup event
Death event
```

Data ini masih berupa kejadian mentah. Misalnya, game mencatat bahwa player menembak, terkena damage, mengambil item, atau mati. Belum ada kesimpulan langsung tentang gaya bermain player.

Metrics muncul ketika data mentah itu diolah menjadi angka yang bermakna. Contoh metrics yang umum adalah:

```text
Accuracy = hit / shot
Kill rate = kill / minute
Exploration ratio = visited area / total area
```

`Accuracy = hit / shot` menunjukkan ketepatan tembakan player. `Kill rate = kill / minute` menunjukkan seberapa efektif player menyelesaikan musuh dalam satuan waktu. `Exploration ratio = visited area / total area` menunjukkan seberapa luas area yang dijelajahi dibandingkan total area yang tersedia.

Perbedaan ini penting karena sistem adaptif dalam game tidak cukup hanya menyimpan semua data mentah. Sistem perlu metrik untuk menilai perilaku player, membandingkan sesi permainan, atau menyesuaikan tantangan, misalnya perilaku NPC atau tingkat kesulitan. Telemetry menjadi bahan mentah, sedangkan metrics menjadi sinyal yang lebih siap dipakai.

Sebelum lanjut, mahasiswa perlu memahami bahwa telemetry dan metrics bukan hal yang sama. Telemetry adalah data, metrics adalah informasi yang sudah diolah. Dalam alur implementasi, biasanya telemetry direkam terlebih dahulu, kemudian dihitung menjadi metrics.

### Inti yang Harus Ditekankan

- **Telemetry** adalah data mentah gameplay, seperti posisi, damage, attack, item pickup, dan death.
- **Metrics** adalah nilai hasil perhitungan dari telemetry, seperti `Accuracy`, `Kill rate`, dan `Exploration ratio`.
- Player modeling membutuhkan keduanya: telemetry sebagai bahan mentah, metrics sebagai informasi yang lebih siap digunakan untuk menilai perilaku player.

### Transisi ke Slide Berikutnya

Setelah memahami perbedaan antara data mentah dan nilai hasil olahan, langkah berikutnya adalah melihat bagaimana telemetry direkam secara event-based, yaitu dengan format kejadian yang lebih terstruktur.

---

## Slide 012 - Event-Based Telemetry

### Narasi

Pada slide ini, kita melihat cara merekam **telemetry** sebagai **event**. Event adalah kejadian diskrit yang terjadi pada waktu tertentu dan memiliki makna gameplay. Berbeda dengan data yang dicatat terus-menerus, event menandai momen penting seperti tembakan, damage, kematian, pengumpulan item, atau penyelesaian objective.

Contoh event yang umum digunakan:

- Aksi combat: `PlayerShot`, `PlayerHitEnemy`, `PlayerTookDamage`, `EnemyKilled`, `PlayerDied`
- Interaksi dunia: `ItemCollected`, `UsedHealthPotion`, `EnteredRoom`
- Progresi permainan: `ObjectiveCompleted`

Pemilihan event harus sederhana dan konsisten. Nama event sebaiknya menggambarkan kejadian, bukan perhitungan. Misalnya, `PlayerTookDamage` lebih tepat daripada `damageHigh`, karena yang dicatat adalah kejadian, bukan kesimpulan.

Format sederhana yang dapat digunakan adalah:

```text
Time, EventType, Value, Position
```

Field `Time` menunjukkan kapan kejadian terjadi, `EventType` menunjukkan jenis kejadian, `Value` menyimpan nilai numerik yang relevan, dan `Position` menyimpan koordinat kejadian. Struktur ini cukup untuk banyak analisis awal karena sudah memuat kapan, apa, seberapa besar, dan di mana.

Contoh baris event:

```text
12.5, PlayerTookDamage, 10, (5,0,8)
```

Baris ini berarti pada detik 12.5, player menerima damage sebesar 10 di posisi `(5,0,8)`. Dari satu baris seperti ini, sistem dapat mengetahui lokasi player saat terkena damage, besarnya damage, dan urutan kejadian dengan event lain.

Event-based telemetry sangat berguna untuk membangun **player model**. Dari kumpulan event, sistem dapat menghitung metrik seperti damage per menit, jumlah item yang digunakan, waktu penyelesaian objective, atau frekuensi kematian di area tertentu. Metrik tersebut membantu sistem memahami gaya bermain player: apakah agresif, hati-hati, sering eksplorasi, atau kesulitan di area tertentu.

Event juga dapat menjadi pemicu perilaku NPC dan **decision making** sistem adaptif. Misalnya, `PlayerDied` dapat memicu respawn atau penyesuaian kesulitan, `EnemyKilled` dapat memicu spawn musuh baru, dan `ObjectiveCompleted` dapat memicu fase permainan berikutnya. Dalam Unity, pencatatan event biasanya dilakukan pada momen callback seperti `OnTriggerEnter` atau saat game logic memanggil fungsi pencatatan. Yang penting adalah event tercatat pada waktu kejadian, bukan setelah data diolah.

Sebelum lanjut, mahasiswa perlu memahami bahwa event adalah bahan mentah yang bermakna. Event belum tentu langsung menjadi keputusan; ia perlu dikumpulkan, dihitung, dan diterjemahkan menjadi metrik atau sinyal perilaku.

### Inti yang Harus Ditekankan

- **Event** adalah kejadian diskrit yang bermakna, seperti `PlayerTookDamage`, `EnemyKilled`, dan `ObjectiveCompleted`.
- Format minimal yang praktis adalah `Time`, `EventType`, `Value`, dan `Position`.
- Event-based telemetry menjadi dasar untuk menghitung metrik dan membangun **player model**.
- Event dapat memicu **NPC behavior**, penyesuaian kesulitan, atau transisi fase permainan.
- Event berbeda dari data kontinu: event merekam momen kejadian, bukan sampling berkala.

### Transisi ke Slide Berikutnya

Setelah memahami event sebagai momen kejadian, kita akan melihat cara lain merekam telemetry, yaitu **continuous telemetry**, di mana data dicatat secara berkala untuk analisis pola spasial dan temporal.

---

## Slide 013 - Continuous Telemetry

### Narasi

**Telemetry kontinu** adalah cara merekam data permainan secara berkala, bukan hanya saat kejadian tertentu terjadi. Jika event-based menangkap momen seperti `PlayerDied` atau `EnemyKilled`, telemetry kontinu menangkap kondisi pemain dan lingkungan pada interval waktu tertentu. Pendekatan ini penting karena banyak perilaku tidak muncul sebagai satu event, melainkan sebagai perubahan bertahap: pemain bergerak, kesehatan menurun, jarak ke tujuan memendek, atau jumlah musuh berubah.

Contoh sederhana pada slide adalah merekam posisi pemain setiap 1 detik, kesehatan setiap 5 detik, jumlah musuh aktif, jarak ke objective, ruangan saat ini, dan tingkat kesulitan saat ini. Data semacam ini membentuk **time series**, yaitu rangkaian sampel yang memiliki urutan waktu. Dengan urutan waktu, kita bisa melihat pola, bukan hanya fakta tunggal.

```text
Setiap 1 detik:
record player position
record current health
record active enemy count
```

Potongan di atas menggambarkan proses sampling yang berulang. Dalam implementasi, biasanya ada timer atau update loop yang memicu pencatatan pada interval tertentu. Setiap sampel sebaiknya menyimpan waktu, nilai variabel, dan konteks minimal, misalnya posisi atau ruangan. Dengan begitu, satu baris data tidak hanya berisi angka, tetapi juga dapat dihubungkan dengan kondisi permainan saat itu.

Alur dasarnya dapat dipahami sebagai berikut:

1. Sistem menunggu interval sampling, misalnya 1 detik atau 5 detik.
2. Sistem membaca state permainan, seperti `player position`, `current health`, dan `active enemy count`.
3. Sistem menyimpan sampel ke log, database, atau buffer dengan timestamp.
4. Data yang terkumpul kemudian dianalisis untuk memahami pola perilaku pemain.

Keunggulan telemetry kontinu terletak pada kemampuannya menangkap **konteks temporal**. Event memberi tahu apa yang terjadi, sedangkan sampling berkala memberi tahu bagaimana keadaan berubah sebelum, selama, dan sesudah kejadian. Misalnya, jika pemain mati, event `PlayerDied` memberi tahu momen kematian, tetapi data posisi dan kesehatan beberapa detik sebelumnya membantu memahami apakah pemain terjebak, terlalu agresif, atau kekurangan sumber daya.

Data kontinu juga menjadi dasar untuk analisis yang lebih kaya. Beberapa contoh penggunaannya adalah:

- **Heatmap**: melihat area mana yang sering dikunjungi atau menjadi titik rawan.
- **Path analysis**: memahami rute yang dipilih pemain dari satu titik ke titik lain.
- **Pacing analysis**: menilai apakah permainan terlalu cepat, terlalu lambat, atau sulit di titik tertentu.
- **Exploration modeling**: memodelkan seberapa luas pemain menjelajah dan bagaimana ia memilih area baru.

Sebelum lanjut, hal penting yang harus dipahami adalah bahwa telemetry kontinu tidak berarti merekam semua data secara terus-menerus. Interval dan variabel yang dipilih harus sesuai tujuan analisis. Data yang terlalu sering atau terlalu banyak dapat membebani penyimpanan dan menyulitkan interpretasi. Oleh karena itu, langkah berikutnya adalah memilih metrik yang benar-benar relevan dengan gameplay dan tujuan praktikum.

### Inti yang Harus Ditekankan

- **Telemetry kontinu** merekam data pada interval waktu tertentu, berbeda dengan event-based yang merekam kejadian diskrit.
- Sampel berkala membentuk **time series** sehingga perubahan perilaku pemain dapat diamati secara temporal.
- Data seperti `player position`, `current health`, `active enemy count`, `distance to objective`, `current room`, dan `current difficulty` berguna untuk heatmap, path analysis, pacing analysis, dan exploration modeling.
- Interval dan variabel harus dipilih secara sadar agar data relevan, efisien, dan mudah dianalisis.

### Transisi ke Slide Berikutnya

Setelah memahami bahwa data dapat direkam secara berkala, langkah berikutnya adalah menentukan metrik mana yang paling relevan untuk praktikum sederhana, sehingga telemetry tidak menjadi tumpukan data yang sulit digunakan.

---

## Slide 014 - Telemetry yang Relevan untuk Game Cerdas

### Narasi

Telemetry yang relevan adalah data perilaku player yang benar-benar membantu sistem memahami kondisi permainan. Dalam praktikum sederhana, tujuan utamanya bukan mengumpulkan sebanyak mungkin data, tetapi memilih metrik yang bisa diukur, mudah diinterpretasi, dan mendukung keputusan **player modeling** serta **adaptive game**.

Slide ini menyajikan empat kelompok metrik yang umum dipakai:

```text
Combat Metrics
├── shots fired
├── shots hit
├── enemies killed
└── damage dealt

Survival Metrics
├── damage taken
├── health remaining
├── death count
└── healing used

Exploration Metrics
├── rooms visited
├── items collected
└── time spent exploring

Progress Metrics
├── objectives completed
├── time to complete
└── checkpoint reached
```

Kelompok **Combat Metrics** menggambarkan kemampuan bertarung player. Data seperti `shots fired`, `shots hit`, `enemies killed`, dan `damage dealt` dapat dipakai untuk menilai apakah player agresif, akurat, atau terlalu dominan. Informasi ini berguna bagi NPC atau sistem adaptif untuk menyesuaikan jarak, jumlah musuh, pola serangan, atau tingkat kesulitan.

Kelompok **Survival Metrics** menggambarkan tekanan bertahan hidup. Metrik seperti `damage taken`, `health remaining`, `death count`, dan `healing used` membantu sistem memahami apakah player kesulitan, terlalu sering mati, atau membutuhkan bantuan. Dari sini, game dapat memberikan checkpoint, healing, musuh yang lebih lemah, atau petunjuk tanpa mengubah seluruh desain.

Kelompok **Exploration Metrics** menggambarkan gaya menjelajah. Data seperti `rooms visited`, `items collected`, dan `time spent exploring` menunjukkan apakah player aktif mencari area, mengumpulkan item, atau cenderung cepat menuju tujuan. Metrik ini penting untuk pacing, penempatan item, dan perilaku NPC yang memberi petunjuk atau membuka area baru.

Kelompok **Progress Metrics** menggambarkan kemajuan player terhadap tujuan permainan. Metrik seperti `objectives completed`, `time to complete`, dan `checkpoint reached` membantu sistem menilai apakah player terlalu cepat, terlalu lambat, atau terjebak pada fase tertentu. Data ini sering menjadi dasar penyesuaian tantangan, unlock, atau pacing.

Poin penting yang harus dipahami mahasiswa adalah: tidak semua data perlu direkam. Telemetry yang baik dipilih sesuai gameplay dan pertanyaan desain yang ingin dijawab. Terlalu banyak data dapat membuat sistem sulit dianalisis, membebani penyimpanan, dan menghasilkan sinyal yang tidak berguna.

Sebelum lanjut, mahasiswa perlu melihat telemetry bukan hanya sebagai statistik akhir, tetapi sebagai **sinyal perilaku** yang dapat dibaca oleh sistem game untuk menyesuaikan pengalaman player.

### Inti yang Harus Ditekankan

- Telemetry yang relevan adalah data perilaku player yang mendukung **player modeling** dan **adaptive game**.
- Empat kelompok utama yang disarankan: **Combat Metrics**, **Survival Metrics**, **Exploration Metrics**, dan **Progress Metrics**.
- Pilih metrik sesuai gameplay; jangan merekam semua data hanya karena bisa direkam.
- Metrik yang baik harus membantu menjawab pertanyaan desain, misalnya apakah player terlalu kuat, terlalu lemah, terlalu cepat, atau terjebak.

### Transisi ke Slide Berikutnya

Setelah metrik yang relevan dipilih, langkah berikutnya adalah bagaimana data tersebut direkam secara praktis di Unity, misalnya melalui event seperti damage atau item pickup.

---

## Slide 015 - Telemetry di Unity

### Narasi

Setelah menentukan metrik yang relevan, langkah berikutnya adalah merekam metrik tersebut saat game berjalan. Dalam Unity, hal ini dilakukan melalui **script** yang mencatat event pada momen gameplay tertentu.

Pendekatan dasarnya adalah: ketika sesuatu terjadi di scene, misalnya pemain terkena damage atau mengambil item, script memanggil metode pencatatan. Dengan cara ini, data terbentuk otomatis dari perilaku game, bukan dari input manual.

Contoh event damage:

```csharp
public void TakeDamage(float amount)
{
    currentHealth -= amount;

    telemetry.RecordEvent(
        "PlayerTookDamage",
        amount,
        transform.position
    );
}
```

Fungsi `TakeDamage(float amount)` biasanya dipanggil ketika pemain menerima damage. Urutan eksekusinya penting:

1. `currentHealth -= amount;` memperbarui kondisi pemain.
2. `telemetry.RecordEvent(...)` mencatat event setelah kondisi tersebut terjadi.

Bagian penting dari event ini adalah:

- `PlayerTookDamage`: nama event yang menjelaskan jenis kejadian.
- `amount`: nilai damage yang diterima.
- `transform.position`: posisi pemain saat kejadian, sehingga data memiliki konteks spasial.

Data seperti ini berguna untuk memahami tekanan combat, misalnya apakah pemain sering terkena damage di area tertentu atau setelah waktu tertentu.

Contoh item pickup:

```csharp
telemetry.RecordEvent(
    "ItemCollected",
    itemValue,
    transform.position
);
```

Event `ItemCollected` mencatat bahwa pemain mengumpulkan item. Nilai `itemValue` dapat mewakili nilai item, dan `transform.position` menunjukkan lokasi kejadian. Event ini mendukung analisis eksplorasi dan progres, misalnya item apa yang sering diambil atau area mana yang jarang dijelajahi.

Untuk praktikum awal, telemetry dapat disimpan di **memory** selama permainan berlangsung. Artinya, data event cukup disimpan sementara di dalam komponen telemetry, lalu dapat digunakan untuk evaluasi sederhana.

Yang perlu dipahami mahasiswa adalah bahwa setiap event telemetry adalah satuan data kecil yang memiliki nama, nilai, dan posisi. Event-event ini kemudian menjadi bahan untuk player modeling dan perilaku game yang lebih adaptif.

### Inti yang Harus Ditekankan

- Telemetry di Unity dicatat melalui **script** pada momen gameplay, bukan hanya dari data statis.
- Event damage dan item pickup menunjukkan pola umum: nama event, nilai, dan posisi.
- `transform.position` penting karena memberi konteks spasial untuk analisis perilaku pemain.
- Untuk praktikum awal, data cukup disimpan di **memory** selama permainan.

### Transisi ke Slide Berikutnya

Setelah event dicatat, langkah berikutnya adalah memahami bagaimana event tersebut disimpan sebagai struktur data yang rapi.

---

## Slide 016 - Struktur Data Telemetry Event

### Narasi

Pada slide ini, kita membahas **struktur data** yang menjadi dasar pencatatan perilaku pemain. Setelah event seperti `PlayerTookDamage` atau `ItemCollected` dapat dipicu, langkah berikutnya adalah menyimpan event tersebut dalam bentuk yang konsisten. Struktur yang konsisten membuat data mudah dibaca, dihitung, dan ditampilkan kembali.

Contoh class sederhana:

```csharp
public class TelemetryEvent
{
    public float time;
    public string eventType;
    public float value;
    public Vector3 position;
}
```

Class `TelemetryEvent` menggambarkan satu kejadian. Setiap field memiliki peran:

- `time` menyimpan **waktu kejadian**, sehingga urutan event dapat dipulihkan.
- `eventType` menyimpan **jenis kejadian**, misalnya `PlayerTookDamage` atau `ItemCollected`.
- `value` menyimpan **nilai numerik** yang relevan, seperti jumlah damage atau nilai item.
- `position` menyimpan **lokasi kejadian** dalam dunia game menggunakan `Vector3`.

Dengan struktur ini, satu event tidak hanya berupa pesan teks, tetapi menjadi data terstruktur. Hal ini penting karena sistem **player modeling** membutuhkan informasi yang dapat diolah, bukan sekadar log yang sulit dibaca.

Untuk menyimpan banyak event, kita dapat menggunakan list:

```csharp
List<TelemetryEvent> events =
    new List<TelemetryEvent>();
```

List `events` menjaga urutan kejadian secara alami. Setiap kali event baru terjadi, objek `TelemetryEvent` dapat ditambahkan ke list. Dengan cara ini, game dapat mempertahankan riwayat perilaku pemain selama sesi berjalan.

Untuk praktikum awal, data cukup disimpan sementara di memory dan ditampilkan di UI. Pendekatan ini membantu mahasiswa memverifikasi bahwa event benar-benar tercatat, field terisi dengan benar, dan urutan kejadian sesuai harapan.

Untuk pengembangan lanjut, data dapat disimpan ke file. Namun, pada tahap ini fokus utama adalah memahami bentuk data, bukan memilih sistem penyimpanan yang kompleks.

### Inti yang Harus Ditekankan

- `TelemetryEvent` adalah **unit data** untuk satu kejadian telemetry.
- Field `time`, `eventType`, `value`, dan `position` membuat event dapat dianalisis secara temporal, kategorikal, numerik, dan spasial.
- `List<TelemetryEvent>` digunakan untuk menyimpan urutan event selama runtime.
- Untuk praktikum awal, penyimpanan sementara di memory dan tampilan UI sudah cukup untuk validasi.

### Transisi ke Slide Berikutnya

Setelah struktur event dipahami, langkah berikutnya adalah menentukan bagaimana data tersebut disimpan agar dapat bertahan setelah game berjalan atau siap dianalisis lebih lanjut.

---

## Slide 017 - Menyimpan Data Telemetry

### Narasi

Pada slide ini kita melangkah dari struktur event ke **penyimpanan data telemetry**. Setelah `TelemetryEvent` dibuat dan dikumpulkan dalam list, pertanyaan berikutnya adalah di mana data itu diletakkan agar bisa diamati, diuji, dan kemudian digunakan untuk analisis gameplay.

Pilihan penyimpanan yang umum adalah:

- **memory runtime**: data hidup selama sesi game berjalan, cocok untuk debug cepat.
- `PlayerPrefs`: cocok untuk nilai kecil yang perlu disimpan antar sesi, tetapi tidak ideal untuk banyak event.
- **JSON file**: struktur rapi dan mudah dibaca, cocok untuk log event.
- **CSV file**: mudah dibuka di spreadsheet, cocok untuk analisis sederhana.
- **database**: cocok untuk data besar, banyak sesi, atau sistem produksi.
- **analytics service**: cocok untuk monitoring skala nyata dan agregasi data.

Untuk praktikum Unity, pilihan paling sederhana adalah:

```text
runtime memory + debug UI
```

Artinya, data telemetry disimpan sementara di memori saat game berjalan, lalu ditampilkan pada UI debug. Alurnya cukup jelas:

`TelemetryEvent` → `List<TelemetryEvent>` → memory runtime → debug UI.

Pendekatan ini membantu mahasiswa memastikan pipeline dasar sudah benar. Mahasiswa dapat memeriksa apakah `time` terisi, `eventType` valid, `value` masuk akal, dan `position` sesuai dengan posisi player. Jika data di UI debug sudah konsisten, barulah langkah penyimpanan lanjutan perlu dipertimbangkan.

Opsional yang bisa ditambahkan adalah:

- export CSV setelah sesi selesai,
- simpan JSON untuk log yang lebih terstruktur,
- tampilkan ringkasan setelah game selesai.

Sebelum lanjut, mahasiswa perlu memahami bahwa penyimpanan bukan tujuan akhir. Tujuan utamanya adalah membuat data telemetry dapat dipercaya, mudah dibaca, dan siap diolah menjadi ukuran gameplay yang bermakna untuk pemodelan pemain dan adaptasi gameplay.

### Inti yang Harus Ditekankan

- Untuk praktikum awal, `runtime memory + debug UI` sudah cukup.
- Pilih penyimpanan sesuai kebutuhan: debug cepat, persistensi, analisis, atau skala produksi.
- Data harus tetap konsisten: `time`, `eventType`, `value`, dan `position` agar bisa diolah lebih lanjut.

### Transisi ke Slide Berikutnya

Setelah data telemetry dapat disimpan dan diamati, langkah berikutnya adalah mengubah event mentah menjadi **gameplay metrics**, seperti accuracy, kill rate, dan objective completion time.

---

## Slide 018 - Gameplay Metrics

### Narasi

**Gameplay metrics** adalah ukuran yang dihitung dari **telemetry** yang sudah dikumpulkan. Setelah data mentah seperti posisi, waktu, serangan, kematian, atau interaksi objek tersimpan, langkah berikutnya adalah mengubahnya menjadi angka yang lebih bermakna. Dengan kata lain, telemetry menjawab *apa yang terjadi*, sedangkan metrics membantu menjawab *seberapa baik, seberapa sering, atau seberapa konsisten* pemain melakukan sesuatu.

Contoh metrics yang umum digunakan:

- `accuracy`
- `kill rate`
- `damage per minute`
- `average health`
- `death count`
- `exploration ratio`
- `item usage rate`
- `objective completion time`

Metrics ini tidak hanya menjadi statistik akhir. Dalam konteks game adaptif, metrics berfungsi sebagai **fitur perilaku pemain** yang dapat dibaca oleh sistem game. Misalnya, nilai `death count` dan `average health` dapat memberi gambaran tekanan yang dirasakan pemain, sementara `exploration ratio` dapat menunjukkan seberapa luas pemain menjelajah area.

Penggunaan metrics juga berkaitan langsung dengan tujuan desain dan pengembangan:

- **skill estimation** untuk memperkirakan kemampuan pemain,
- **play style classification** untuk mengenali gaya bermain,
- **adaptive gameplay** untuk menyesuaikan tantangan atau bantuan,
- **balancing** untuk menilai apakah elemen game terlalu mudah atau sulit,
- **debugging** untuk menemukan masalah pada gameplay.

Secara praktis, metrics menjadi jembatan antara data mentah dan keputusan sistem. Jika sebuah game ingin menyesuaikan perilaku NPC, tingkat kesulitan, atau umpan balik pemain, metrics dapat menjadi input yang lebih stabil daripada membaca satu kejadian tunggal. Satu kali kematian mungkin hanya variasi, tetapi pola `death count`, `average health`, dan `objective completion time` dapat memberi sinyal yang lebih kuat.

Sebelum lanjut ke metrik yang lebih spesifik, mahasiswa perlu memahami bahwa metrics harus **konsisten**, **terukur**, dan **relevan** dengan tujuan game. Metrics yang baik bukan sekadar angka yang banyak, tetapi angka yang dapat diinterpretasikan untuk memahami pemain dan memperbaiki pengalaman bermain.

### Inti yang Harus Ditekankan

- **Gameplay metrics** adalah hasil olahan dari **telemetry**, bukan data mentah.
- Metrics membantu sistem game memahami kemampuan, gaya bermain, dan kondisi pemain.
- Metrics dapat dipakai untuk **skill estimation**, **play style classification**, **adaptive gameplay**, **balancing**, dan **debugging**.
- Interpretasi metrics harus melihat pola, bukan hanya satu kejadian.

### Transisi ke Slide Berikutnya

Selanjutnya kita akan memperdalam salah satu kelompok metrics yang paling sering digunakan, yaitu **combat metrics**, yang fokus pada ukuran pertempuran seperti akurasi, efektivitas serangan, dan frekuensi menyerang.

---

## Slide 019 - Combat Metrics

### Narasi

**Combat metrics** adalah kelompok metrik yang fokus pada interaksi tempur antara player dan musuh. Setelah metrik gameplay umum, slide ini memperkecil perhatian pada perilaku yang terjadi saat combat: menembak, menyerang, membunuh, dan menerima damage.

Secara intuitif, combat metrics menjawab dua pertanyaan utama: *seberapa efektif player dalam pertempuran?* dan *seberapa agresif gaya mainnya?* Jawaban ini penting karena sistem adaptif, NPC, atau mekanisme balancing dapat menggunakan nilai tersebut untuk menilai skill player dan menyesuaikan tantangan.

Rumus yang ditampilkan adalah:

```text
Accuracy = shotsHit / shotsFired
KillRate = enemiesKilled / playTime
DamageEfficiency = damageDealt / damageTaken
AttackFrequency = attacksPerformed / playTime
```

Setiap metrik memiliki makna yang berbeda:

- **Accuracy** = `shotsHit / shotsFired`. Metrik ini mengukur proporsi tembakan yang mengenai target. Nilai tinggi menunjukkan kontrol tembakan yang baik, sedangkan nilai rendah dapat mengindikasikan kesulitan aim, senjata yang sulit dikendalikan, atau gaya main yang lebih berhati-hati.
- **KillRate** = `enemiesKilled / playTime`. Metrik ini mengukur jumlah musuh yang dikalahkan per satuan waktu. Nilai tinggi menunjukkan combat yang efektif, tetapi perlu dibaca bersama konteks jumlah musuh, tingkat kesulitan, dan durasi permainan.
- **DamageEfficiency** = `damageDealt / damageTaken`. Metrik ini membandingkan damage yang diberikan dengan damage yang diterima. Nilai tinggi berarti player mampu menghasilkan damage besar dengan risiko damage yang relatif kecil, sehingga dapat dianggap kuat dalam pertempuran.
- **AttackFrequency** = `attacksPerformed / playTime`. Metrik ini mengukur seberapa sering player melakukan serangan. Nilai tinggi menunjukkan gaya main agresif, sedangkan nilai rendah dapat menunjukkan gaya main defensif atau menunggu.

Dalam konteks player modeling, keempat metrik ini dapat menjadi fitur untuk **skill estimation** dan **play style classification**. Misalnya, player dengan `Accuracy` tinggi dan `KillRate` tinggi dapat dipandang sebagai player yang kompeten dalam combat. Player dengan `AttackFrequency` tinggi tetapi `DamageEfficiency` rendah mungkin agresif namun kurang efektif. Informasi semacam ini dapat dipakai oleh sistem adaptif untuk menyesuaikan perilaku musuh, misalnya mengubah agresivitas NPC, kecepatan respawn, atau tingkat damage.

Yang perlu dipahami sebelum lanjut adalah bahwa combat metrics tidak berdiri sendiri. Nilai seperti `KillRate` atau `AttackFrequency` bergantung pada `playTime`, mode permainan, dan jumlah musuh. Oleh karena itu, metrik ini sebaiknya diinterpretasikan sebagai gambaran perilaku tempur, bukan satu-satunya penentu kemampuan player.

### Inti yang Harus Ditekankan

- **Combat metrics** mengukur aspek tempur: akurasi, efektivitas kill, rasio damage, dan frekuensi serangan.
- `Accuracy` dan `KillRate` lebih menekankan **keberhasilan combat**, sedangkan `DamageEfficiency` dan `AttackFrequency` membantu membaca **kekuatan** dan **gaya agresif** player.
- Metrik ini berguna untuk player modeling, klasifikasi gaya main, dan penyesuaian tantangan dalam game adaptif.
- Interpretasi harus memperhatikan konteks waktu, mode permainan, dan jumlah musuh agar tidak menyimpulkan kemampuan player secara keliru.

### Transisi ke Slide Berikutnya

Setelah memahami seberapa efektif dan agresif player dalam combat, langkah berikutnya adalah melihat seberapa baik player bertahan. Slide berikutnya akan membahas **Survival Metrics**, yaitu metrik yang fokus pada kesehatan, damage yang diterima, kematian, dan penggunaan healing.

---

## Slide 020 - Survival Metrics

### Narasi

Pada slide ini kita masuk ke **survival metrics**, yaitu ukuran yang menggambarkan seberapa baik pemain bertahan dalam tekanan permainan. Berbeda dengan combat metrics yang fokus pada efektivitas menyerang, survival metrics lebih menekankan kondisi pemain setelah menerima serangan, mengelola risiko, dan mempertahankan hidup. Dalam konteks **sistem adaptif** pada game cerdas, metrik ini menjadi sinyal penting untuk menilai apakah tantangan yang diberikan sudah sesuai dengan kemampuan pemain.

Contoh survival metrics yang dapat digunakan adalah:

```text
HealthRatio = currentHealth / maxHealth
DamageTakenRate = damageTaken / playTime
DeathCount = totalDeaths
HealingUsage = healingItemsUsed
```

Secara intuitif, metrik-metrik ini membantu sistem memahami apakah pemain sedang dalam kondisi aman, tertekan, atau kesulitan. `HealthRatio` menunjukkan proporsi nyawa yang tersisa. Nilai yang tinggi berarti pemain masih memiliki ruang untuk bertahan, sedangkan nilai yang rendah menandakan pemain sudah mendekati batas risiko. `DamageTakenRate` mengukur seberapa sering atau seberapa besar pemain menerima kerusakan per satuan waktu. Jika nilainya tinggi, pemain sering menjadi target serangan atau kurang mampu menghindari bahaya.

`DeathCount` adalah indikator yang lebih langsung. Semakin tinggi jumlah kematian, semakin kuat sinyal bahwa pemain mengalami kesulitan. Dalam desain game, metrik ini sering digunakan untuk memicu penyesuaian, misalnya mengurangi agresivitas NPC, menurunkan jumlah musuh, atau memberi bantuan tambahan. `HealingUsage` menunjukkan seberapa sering pemain menggunakan item penyembuhan. Nilai tinggi dapat diartikan bahwa pemain sering berada dalam kondisi kritis, tetapi juga bisa menunjukkan bahwa pemain aktif mengelola sumber daya.

Untuk **NPC behavior** dan **decision making**, survival metrics dapat menjadi input bagi sistem adaptif. Misalnya, jika `DamageTakenRate` dan `DeathCount` meningkat, musuh dapat mengurangi frekuensi serangan, memberi jeda, atau menurunkan damage. Sebaliknya, jika `HealthRatio` tetap tinggi dan `HealingUsage` rendah, sistem dapat meningkatkan tantangan agar pemain tetap terlibat. Dengan cara ini, game tidak hanya mengandalkan parameter statis, tetapi dapat merespons kondisi pemain secara lebih dinamis.

Yang perlu dipahami mahasiswa adalah bahwa survival metrics tidak berdiri sendiri. Metrik ini sebaiknya dibaca bersama konteks gameplay, seperti fase level, jenis musuh, dan tujuan pemain. Satu nilai `HealingUsage` tinggi bisa berarti pemain kesulitan, tetapi juga bisa berarti pemain sedang dalam fase yang memang menuntut pengelolaan kesehatan. Oleh karena itu, interpretasi metrik harus selalu mempertimbangkan situasi permainan, bukan hanya angka tunggal.

### Inti yang Harus Ditekankan

- **Survival metrics** mengukur kemampuan pemain bertahan, bukan hanya kemampuan menyerang.
- `HealthRatio`, `DamageTakenRate`, `DeathCount`, dan `HealingUsage` memberi sinyal berbeda tentang risiko, kesulitan, dan penggunaan sumber daya.
- Metrik ini dapat menjadi input untuk **sistem adaptif**, misalnya menyesuaikan agresivitas NPC, jumlah musuh, atau tingkat kesulitan.
- Interpretasi harus kontekstual; angka tunggal perlu dibaca bersama fase permainan dan perilaku pemain.

### Transisi ke Slide Berikutnya

Setelah memahami bagaimana pemain bertahan, langkah berikutnya adalah melihat bagaimana pemain bergerak dan memanfaatkan ruang permainan. Pada slide berikutnya, kita akan membahas **exploration metrics** untuk menilai seberapa aktif pemain menjelajah area, mengumpulkan item, dan mengunjungi wilayah di luar jalur utama.

---

## Slide 021 - Exploration Metrics

### Narasi

Pada slide ini kita membahas **exploration metrics**, yaitu ukuran yang membantu sistem memahami seberapa jauh pemain menjelajahi dunia game. Dalam konteks **player modeling**, metrik ini penting karena perilaku eksplorasi memberi sinyal apakah pemain sedang mencari konten, memahami lingkungan, atau hanya mengejar objective utama. Informasi ini dapat dipakai oleh sistem adaptif untuk menyesuaikan tantangan, memberi petunjuk, atau mengatur perilaku NPC.

Contoh metrik yang ditampilkan adalah:

```text
ExplorationRatio = visitedRooms / totalRooms
ItemCollectionRatio = collectedItems / totalItems
OptionalAreaVisit = optionalRoomsVisited
TimeInSideAreas = timeSpentOutsideMainPath
```

Secara sederhana, rumus ini menghitung proporsi ruang atau item yang sudah diakses pemain. `visitedRooms` dan `totalRooms` menunjukkan seberapa banyak area yang telah dikunjungi. `collectedItems` dan `totalItems` menunjukkan seberapa banyak resource atau item yang berhasil dikumpulkan. `optionalRoomsVisited` mencatat area opsional yang tidak selalu diperlukan untuk menyelesaikan misi. `timeSpentOutsideMainPath` mengukur berapa lama pemain berada di luar jalur utama.

Interpretasi metrik ini penting untuk membaca gaya bermain:

- **Exploration ratio tinggi** menunjukkan pemain cenderung eksploratif dan ingin memahami dunia game.
- **Item collection ratio tinggi** menunjukkan pemain tertarik mencari resource, loot, atau perlengkapan.
- **Optional area sering dikunjungi** menunjukkan pemain tidak hanya fokus pada objective utama, tetapi juga memperhatikan konten tambahan.
- **Time in side areas tinggi** menunjukkan pemain menghabiskan banyak waktu di area samping, misalnya untuk mencari item, menyelesaikan side quest, atau menghindari jalur utama.

Dalam implementasi game, metrik ini biasanya dihitung dari data runtime seperti posisi pemain, daftar room yang sudah dibuka, item yang sudah dikumpulkan, dan timer aktivitas. Data tersebut dapat disimpan sebagai feature player model. Jika sistem adaptif ingin memberi bantuan, misalnya NPC memberikan petunjuk arah atau peta terbuka lebih banyak, metrik eksplorasi bisa menjadi salah satu sinyal. Jika pemain terlalu cepat melewati area utama dan jarang membuka ruang opsional, sistem dapat menilai bahwa pemain lebih fokus pada progresi.

Sebelum lanjut, mahasiswa perlu memahami bahwa exploration metrics bukan sekadar angka, melainkan representasi perilaku pemain. Angka yang sama bisa memiliki arti berbeda tergantung desain level, jumlah item, dan tujuan misi. Karena itu, metrik ini harus dibaca bersama konteks game, bukan berdiri sendiri.

### Inti yang Harus Ditekankan

- **Exploration metrics** mengukur seberapa jauh pemain menjelajahi area, item, dan konten opsional.
- Metrik seperti `ExplorationRatio` dan `ItemCollectionRatio` membantu sistem mengenali gaya bermain pemain.
- Data eksplorasi dapat menjadi input untuk sistem adaptif, misalnya menyesuaikan petunjuk, tantangan, atau perilaku NPC.
- Interpretasi metrik harus mempertimbangkan konteks level dan desain game, bukan hanya nilai absolut.

### Transisi ke Slide Berikutnya

Setelah kita melihat bagaimana pemain menjelajahi dunia, langkah berikutnya adalah memahami seberapa besar risiko yang diambil pemain. Pada slide berikutnya, kita akan membahas **Risk Metrics**, yaitu ukuran kecenderungan pemain mengambil keputusan yang berisiko.

---

## Slide 022 - Risk Metrics

### Narasi

**Risk Metrics** adalah cara mengukur seberapa besar kecenderungan player mengambil risiko saat bermain. Konsep ini penting dalam **player modeling** karena perilaku player tidak hanya terlihat dari seberapa jauh ia menjelajah, tetapi juga dari seberapa berani ia menghadapi kondisi yang merugikan.

Dalam konteks game, risiko biasanya muncul dari tindakan yang dapat meningkatkan peluang player kalah atau mengalami kerugian. Beberapa contoh yang bisa diamati:

- menyerang saat **health** rendah,
- mendekati **enemy** yang lebih kuat,
- masuk ke area yang ditandai berbahaya,
- jarang memakai **healing item**,
- melawan banyak **enemy** sekaligus.

Tindakan-tindakan ini tidak selalu salah. Namun, jika terjadi berulang, sistem adaptif dapat membaca pola tersebut sebagai sinyal bahwa player memiliki gaya bermain agresif, kurang hati-hati, atau sedang mencoba strategi tertentu.

Contoh sederhana untuk menghitung risiko adalah:

```text
RiskScore =
lowHealthCombatTime / totalCombatTime
```

Variabel `lowHealthCombatTime` adalah total durasi player berada dalam kondisi combat ketika `health` berada di bawah ambang tertentu. Variabel `totalCombatTime` adalah total durasi combat player selama periode pengamatan. Hasilnya berada pada rentang `0.0` sampai `1.0`.

Urutan penghitungannya cukup sederhana:

1. Deteksi apakah player sedang berada dalam kondisi combat.
2. Periksa nilai `health` player.
3. Jika `health` berada di bawah ambang, tambahkan durasi tersebut ke `lowHealthCombatTime`.
4. Tambahkan seluruh durasi combat ke `totalCombatTime`.
5. Hitung rasio `lowHealthCombatTime / totalCombatTime`.

Jika `RiskScore` tinggi, artinya player sering bertarung saat kondisi `health` rendah. Nilai ini bisa digunakan untuk menyesuaikan perilaku NPC, misalnya membuat enemy lebih agresif, memberikan tantangan tambahan, atau menyediakan bantuan yang lebih jelas. Jika `RiskScore` rendah, player cenderung bermain lebih hati-hati dan sistem dapat mengurangi tekanan agar player tidak merasa terlalu mudah.

Yang perlu dipahami mahasiswa adalah bahwa **risk score** bukan label mutlak. Satu metrik saja tidak cukup untuk menilai player secara utuh. Risk metrics harus dibaca bersama metrik lain, seperti exploration metrics, survival, dan combat performance, agar interpretasinya lebih akurat.

### Inti yang Harus Ditekankan

- **Risk Metrics** mengukur kecenderungan player mengambil risiko, bukan hanya menghitung satu kejadian berbahaya.
- `RiskScore = lowHealthCombatTime / totalCombatTime` memberi gambaran seberapa sering player bertarung saat `health` rendah.
- Nilai `RiskScore` yang tinggi menunjukkan pola bermain yang lebih agresif atau berisiko, dan dapat menjadi input untuk sistem adaptif.
- Interpretasi risk metrics harus dikaitkan dengan konteks game dan metrik lain agar tidak menyesatkan.

### Transisi ke Slide Berikutnya

Setelah kita memahami bagaimana risiko player dapat diukur, langkah berikutnya adalah menggabungkan beberapa metrik untuk memperkirakan kemampuan player secara lebih utuh.

---

## Slide 023 - Skill Estimation

### Narasi

**Skill estimation** adalah proses memperkirakan kemampuan pemain berdasarkan data perilaku yang sudah diukur.

Intuisi praktisnya sederhana: game tidak perlu tahu "seberapa jago" pemain secara mutlak. Yang penting adalah sistem dapat membaca pola bermain, lalu menyesuaikan tantangan, bantuan, atau perilaku NPC agar tetap menarik.

Skill tidak selalu cocok direpresentasikan sebagai satu angka absolut. Seorang pemain bisa kuat dalam combat tetapi lemah dalam survival, atau cepat mencapai objective tetapi jarang menjelajah. Karena itu, estimasi skill sebaiknya dipandang sebagai profil kemampuan, bukan label tunggal.

Beberapa dimensi yang dapat digunakan antara lain:

- **survival**, yaitu kemampuan bertahan hidup dan mengelola kondisi kritis;
- **combat**, yaitu efektivitas dalam pertempuran;
- **movement**, yaitu kualitas navigasi, menghindar, dan kontrol karakter;
- **exploration**, yaitu kecenderungan menjelajah area atau sumber daya;
- **objective efficiency**, yaitu kecepatan dan ketepatan menyelesaikan tujuan;
- **learning speed**, yaitu seberapa cepat pemain memperbaiki strategi setelah gagal.

Untuk praktikum, representasi skill dapat dibuat sederhana terlebih dahulu. Misalnya menggunakan kategori:

```text
Low
Medium
High
```

Atau menggunakan nilai kontinu:

```text
SkillScore = 0.0 sampai 1.0
```

Kategori berguna untuk keputusan cepat, misalnya memilih level kesulitan NPC. Nilai kontinu berguna bila nanti ingin menggabungkan beberapa metrik menjadi satu skor yang lebih halus.

Yang harus dipahami sebelum lanjut adalah bahwa skill estimation bukan sekadar memberi nilai pemain. Ia adalah dasar bagi sistem game untuk membuat keputusan adaptif: apakah NPC harus lebih agresif, apakah petunjuk perlu diberikan, apakah tantangan perlu dinaikkan atau diturunkan.

### Inti yang Harus Ditekankan

- **Skill estimation** memperkirakan kemampuan pemain dari metrik perilaku, bukan dari asumsi tunggal.
- Skill bersifat **multidimensi**, sehingga bisa berbeda antara survival, combat, movement, exploration, objective efficiency, dan learning speed.
- Untuk praktikum, skill dapat direpresentasikan sebagai kategori `Low`, `Medium`, `High` atau sebagai `SkillScore` dalam rentang `0.0` sampai `1.0`.

### Transisi ke Slide Berikutnya

Setelah kita memahami bahwa skill dapat dilihat dari beberapa dimensi, langkah berikutnya adalah merangkum dimensi tersebut menjadi satu skor sederhana yang mudah digunakan oleh sistem game.

---

## Slide 024 - Skill Score Sederhana

### Narasi

**Skill score sederhana** adalah cara ringkas untuk mengubah beberapa indikator kemampuan pemain menjadi satu nilai yang mudah dibandingkan. Nilai ini berguna ketika sistem game ingin menilai apakah pemain sedang kesulitan, bermain stabil, atau sudah sangat mahir.

Rumus yang ditampilkan pada slide adalah:

```text
SkillScore =
0.35 × combatScore
+ 0.30 × survivalScore
+ 0.20 × progressScore
+ 0.15 × resourceScore
```

Rumus ini menggunakan **weighted sum**, yaitu penjumlahan berbobot. Setiap komponen seperti `combatScore`, `survivalScore`, `progressScore`, dan `resourceScore` dianggap sudah berada pada skala yang sama, yaitu **0 sampai 1**. Karena semua nilai dinormalisasi, hasil akhir `SkillScore` juga tetap berada pada rentang yang sama.

Bobot pada rumus menunjukkan prioritas desain. Nilai `combatScore` diberi bobot terbesar, yaitu `0.35`, karena dalam contoh ini kemampuan tempur dianggap paling berpengaruh terhadap penilaian skill. `survivalScore` berada di urutan berikutnya dengan bobot `0.30`, lalu `progressScore` dengan `0.20`, dan `resourceScore` dengan `0.15`. Total bobotnya adalah `1.00`, sehingga rumus tetap konsisten sebagai rata-rata berbobot.

Urutan prosesnya dapat dipahami sebagai berikut:

1. Kumpulkan metrik pemain dari gameplay.
2. Normalisasi setiap metrik menjadi nilai `0.0` sampai `1.0`.
3. Kalikan setiap nilai dengan bobotnya.
4. Jumlahkan hasil perkalian tersebut.
5. Gunakan nilai akhir untuk menginterpretasikan skill pemain.

Interpretasi nilai `SkillScore` pada slide adalah:

```text
0.00 – 0.39 = Low Skill
0.40 – 0.69 = Medium Skill
0.70 – 1.00 = High Skill
```

Artinya, nilai rendah menunjukkan pemain masih perlu dukungan lebih, nilai menengah menunjukkan kemampuan yang seimbang, dan nilai tinggi menunjukkan pemain yang sudah sangat kompeten.

Sebelum melanjutkan, mahasiswa perlu memahami bahwa `SkillScore` bukan pengganti analisis detail. Ia adalah **ringkasan numerik** yang membantu sistem mengambil keputusan, misalnya menyesuaikan tantangan, memberi umpan balik, atau memilih perilaku NPC yang lebih responsif.

### Inti yang Harus Ditekankan

- `SkillScore` adalah **weighted sum** dari beberapa sub-score yang sudah dinormalisasi.
- Bobot menentukan prioritas: `combatScore` paling besar, diikuti `survivalScore`, `progressScore`, dan `resourceScore`.
- Rentang `0.00` sampai `1.00` memudahkan interpretasi sebagai **Low**, **Medium**, atau **High Skill**.
- Nilai ini berguna sebagai dasar penilaian kemampuan pemain, bukan sebagai satu-satunya ukuran kualitas pemain.

### Transisi ke Slide Berikutnya

Setelah memahami bentuk umum `SkillScore`, langkah berikutnya adalah melihat bagaimana salah satu komponennya, yaitu `combatScore`, dihitung secara lebih spesifik.

---

## Slide 025 - Combat Score

### Narasi

**Combat Score** adalah ukuran kemampuan pemain dalam pertempuran. Intuisinya, skor ini tidak hanya melihat berapa banyak musuh yang dikalahkan, tetapi juga seberapa efisien dan tepat pemain menggunakan tembakan. Dengan cara ini, sistem dapat membedakan pemain yang sering menang karena musuh lemah dari pemain yang benar-benar memiliki akurasi dan kontrol yang baik.

Rumus yang digunakan adalah kombinasi dua metrik utama:

```text
combatScore =
0.6 × accuracy
+ 0.4 × normalizedKillRate
```

Bobot `accuracy` dibuat lebih besar karena akurasi mencerminkan kualitas keputusan dan kemampuan menembak. `normalizedKillRate` tetap penting, tetapi dinormalisasi agar tidak bias oleh tingkat kesulitan musuh.

Metrik `accuracy` dihitung dari rasio tembakan yang mengenai target terhadap total tembakan yang dilepaskan:

```text
accuracy = shotsHit / shotsFired
```

Nilai ini berada pada rentang 0 sampai 1. Semakin banyak tembakan yang tepat sasaran, semakin tinggi nilai `accuracy`.

Metrik `normalizedKillRate` membandingkan kill rate pemain dengan baseline yang diharapkan:

```text
normalizedKillRate = killRate / expectedKillRate
```

`expectedKillRate` berfungsi sebagai acuan agar skor tidak melonjak hanya karena musuh terlalu mudah. Jika pemain mencapai kill rate di atas acuan, nilai ini dapat melebihi 1, sehingga perlu dibatasi.

Untuk menjaga konsistensi, hasil akhir diberi **clamp** dengan nilai maksimal `1.0`. Dalam Unity, hal ini dapat dilakukan dengan:

```csharp
float score = Mathf.Clamp01(value);
```

Fungsi `Mathf.Clamp01(value)` memastikan nilai di bawah 0 menjadi 0 dan nilai di atas 1 menjadi 1. Dengan demikian, `combatScore` selalu berada pada skala yang sama dengan komponen skill score lainnya.

Urutan perhitungan yang perlu dipahami mahasiswa adalah:

1. Kumpulkan data pertempuran seperti `shotsHit`, `shotsFired`, `killRate`, dan `expectedKillRate`.
2. Hitung `accuracy` sebagai rasio tembakan yang berhasil.
3. Hitung `normalizedKillRate` dengan membandingkan kill rate terhadap acuan.
4. Gabungkan kedua nilai dengan bobot 0.6 dan 0.4.
5. Clamp hasil akhir ke rentang 0 sampai 1.

Hasil yang diharapkan adalah metrik yang stabil, mudah dibandingkan antar pemain, dan dapat menjadi input untuk sistem adaptif game. Nilai `combatScore` yang tinggi dapat digunakan untuk menilai kemampuan pertempuran pemain, misalnya sebagai dasar penyesuaian perilaku NPC atau tingkat tantangan, tanpa langsung mengubah seluruh skill score.

### Inti yang Harus Ditekankan

- `combatScore` mengukur kualitas pertempuran, bukan hanya jumlah kill.
- `accuracy` diberi bobot lebih besar karena mencerminkan ketepatan dan efisiensi tembakan.
- `normalizedKillRate` perlu baseline `expectedKillRate` agar tidak bias oleh musuh yang terlalu mudah.
- Gunakan `Mathf.Clamp01(value)` agar skor tetap berada pada rentang 0 sampai 1.

### Transisi ke Slide Berikutnya

Setelah memahami cara menghitung kemampuan pertempuran, langkah berikutnya adalah menilai kemampuan bertahan hidup pemain melalui **Survival Score**, yang memperhatikan rasio kesehatan, penghindaran damage, dan penalti kematian.

---

## Slide 026 - Survival Score

### Narasi

Pada slide ini kita membahas **Survival Score**, yaitu ukuran kemampuan pemain bertahan dalam permainan. Secara intuitif, skor ini menjawab pertanyaan sederhana: apakah pemain masih mampu menjaga nyawanya, menghindari bahaya, dan tidak sering mati? Dalam konteks **player modeling**, survival score menjadi sinyal penting untuk memahami gaya bermain dan tingkat kesulitan yang dibutuhkan pemain.

Rumus utamanya adalah:

```text
survivalScore =
0.5 × healthRatio
+ 0.3 × damageAvoidanceScore
+ 0.2 × deathPenaltyScore
```

Komponen ini dipilih agar survival score tidak hanya bergantung pada satu hal.

- **healthRatio** mengukur kondisi kesehatan pemain saat ini, misalnya `currentHealth / maxHealth`.
- **damageAvoidanceScore** mengukur seberapa baik pemain menghindari damage.
- **deathPenaltyScore** memberikan penalti jika pemain sering mati.

Untuk damage avoidance, slide memberikan bentuk:

```text
damageAvoidanceScore = 1 - normalizedDamageTaken
```

Artinya, semakin kecil damage yang diterima pemain, semakin tinggi nilai avoidance. Jika `normalizedDamageTaken` mendekati `0.0`, maka `damageAvoidanceScore` mendekati `1.0`. Sebaliknya, jika damage yang diterima tinggi, nilai ini turun.

Untuk death penalty, bentuknya adalah:

```text
deathPenaltyScore = 1 - normalizedDeathCount
```

Di sini, `normalizedDeathCount` mewakili frekuensi kematian yang sudah dinormalisasi. Semakin sering pemain mati, semakin kecil `deathPenaltyScore`, sehingga **survival score** ikut menurun.

Dalam implementasi game, nilai-nilai ini biasanya dinormalisasi ke rentang `0.0` sampai `1.0` agar bisa digabungkan secara adil. Setelah itu, bobot `0.5`, `0.3`, dan `0.2` menentukan kontribusi masing-masing komponen. Bobot `0.5` untuk `healthRatio` menunjukkan bahwa kondisi nyawa saat ini diberi pengaruh paling besar.

Dalam sistem **adaptive game AI**, survival score dapat digunakan untuk menyesuaikan perilaku NPC atau tingkat kesulitan. Misalnya, jika survival score rendah, sistem dapat mengurangi agresi musuh, memberi petunjuk, atau menyesuaikan spawn musuh. Namun, nilai ini sebaiknya tidak dijadikan satu-satunya ukuran kemampuan pemain, karena pemain mungkin memilih gaya bermain yang lebih defensif atau agresif.

Sebelum lanjut, mahasiswa perlu memahami bahwa survival score adalah salah satu dimensi player modeling. Ia membantu sistem memahami aspek bertahan hidup, tetapi masih perlu dikombinasikan dengan aspek lain untuk mendapatkan gambaran skill yang lebih utuh.

### Inti yang Harus Ditekankan

- **Survival score** mengukur kemampuan pemain bertahan melalui `healthRatio`, `damageAvoidanceScore`, dan `deathPenaltyScore`.
- Semakin sering pemain mati atau menerima damage, nilai survival score semakin rendah.
- Skor ini berguna sebagai input **player modeling** dan **adaptive game AI**, tetapi bukan satu-satunya indikator skill.

### Transisi ke Slide Berikutnya

Setelah memahami bagaimana survival score menilai kemampuan bertahan pemain, kita lanjut ke **Progress Score** untuk melihat bagaimana kemajuan pemain dalam menyelesaikan objective dievaluasi.

---

## Slide 027 - Progress Score

### Narasi

Pada slide ini kita membahas **Progress Score**, yaitu metrik untuk mengukur seberapa jauh pemain bergerak menuju tujuan dalam permainan. Metrik ini penting karena sistem adaptif tidak hanya perlu tahu apakah pemain masih bertahan, tetapi juga apakah pemain mampu menyelesaikan tantangan secara efektif.

Contoh perhitungannya dapat ditulis sebagai berikut:

```text
progressScore =
0.6 × objectiveCompletionRatio
+
0.4 × timeEfficiencyScore
```

`objectiveCompletionRatio` menggambarkan seberapa besar tujuan telah diselesaikan. Nilainya bisa berasal dari progres quest, jumlah checkpoint yang dilewati, atau kemajuan menuju objective utama. Sementara itu, `timeEfficiencyScore` menilai apakah waktu yang digunakan masih wajar dibandingkan baseline yang diharapkan.

Bobot `0.6` pada `objectiveCompletionRatio` menunjukkan bahwa penyelesaian tujuan lebih penting daripada kecepatan. Pemain yang lambat tetapi tetap menyelesaikan objective masih dapat memperoleh skor yang cukup tinggi. Bobot `0.4` pada `timeEfficiencyScore` tetap relevan untuk membedakan pemain yang efisien dari pemain yang terlalu lama tanpa alasan jelas.

Secara praktis, nilai `progressScore` dapat digunakan oleh NPC atau sistem adaptif untuk menyesuaikan pacing permainan. Misalnya, jika skor rendah, sistem dapat memberikan petunjuk, mengurangi hambatan, atau menyesuaikan tingkat kesulitan. Jika skor tinggi, sistem dapat menambah tantangan agar pemain tetap terlibat.

Namun, perlu hati-hati. Skor yang rendah tidak selalu berarti pemain kurang terampil. Ada beberapa kemungkinan:

- pemain sedang mengeksplorasi area,
- pemain memilih gaya bermain yang lebih hati-hati,
- pemain sengaja menambah tantangan,
- pemain belum memahami objective, bukan tidak mampu.

Karena itu, `progressScore` sebaiknya dipandang sebagai **sinyal**, bukan vonis akhir tentang skill pemain. Estimasi kemampuan pemain yang baik harus mempertimbangkan beberapa metrik dan konteks perilaku, bukan hanya waktu penyelesaian.

### Inti yang Harus Ditekankan

- **Progress Score** mengukur kemajuan pemain terhadap objective, bukan hanya kemampuan bertahan.
- `objectiveCompletionRatio` memiliki bobot lebih besar karena menyelesaikan tujuan lebih penting daripada sekadar cepat.
- `timeEfficiencyScore` membantu menilai efisiensi waktu, tetapi tidak boleh menjadi satu-satunya dasar menilai skill.
- Pemain yang lambat bisa saja sedang mengeksplorasi, bermain hati-hati, atau memilih tantangan tambahan.
- Skor ini sebaiknya digunakan sebagai salah satu input untuk penyesuaian gameplay, bukan kesimpulan tunggal.

### Transisi ke Slide Berikutnya

Karena `progressScore` dapat dipengaruhi oleh gaya bermain dan konteks pemain, kita perlu melihat mengapa estimasi skill tidak selalu mudah dan bagaimana beberapa metrik perlu dipadukan sebelum sistem mengambil keputusan.

---

## Slide 028 - Skill Estimation Tidak Selalu Mudah

### Narasi

**Skill estimation** adalah proses memperkirakan kemampuan pemain dari perilaku yang dapat diamati. Dalam sistem adaptif, estimasi ini biasanya dipakai untuk menyesuaikan tantangan, memberi bantuan, atau mengatur perilaku NPC. Namun, estimasi ini bukan pengukuran langsung. Ia hanya inferensi dari data seperti waktu penyelesaian, damage, item, dan pilihan pemain.

Masalah utamanya adalah satu perilaku bisa memiliki banyak penjelasan. Misalnya, pemain yang bergerak lambat belum tentu kurang terampil. Ia mungkin sedang **eksplorasi**, mencari jalur alternatif, atau menikmati dunia permainan. Jika sistem hanya membaca waktu sebagai sinyal skill, maka pemain eksploratif bisa salah dinilai.

Contoh lain juga penting untuk dipahami:

- Pemain sering menerima `damage` karena gaya bermain agresif, bukan karena tidak mampu menghindari serangan.
- Pemain tidak mengambil item karena item tersebut tidak sesuai kebutuhan strateginya.
- Pemain sengaja memilih tantangan tambahan, sehingga performa terlihat lebih buruk dari kemampuan sebenarnya.

Karena itu, satu metrik saja tidak cukup. Sistem sebaiknya menggunakan beberapa metrik yang saling melengkapi, misalnya `progressScore`, `damageTaken`, `itemPickup`, dan `challengeModifier`. Dengan beberapa metrik, sistem dapat membedakan apakah masalahnya ada pada kemampuan, preferensi, atau kondisi permainan.

Selain itu, estimasi skill perlu memperhatikan **window waktu**. Perilaku pemain bisa berubah-ubah dalam beberapa menit. Jika sistem terlalu cepat menyimpulkan dari satu kejadian, hasilnya bisa tidak stabil. Pendekatan yang lebih aman adalah mengamati rentang waktu tertentu, memberi bobot pada perilaku terbaru, dan menahan perubahan estimasi sampai bukti cukup kuat.

Poin penting berikutnya adalah memisahkan **skill** dan **play style**. Skill berkaitan dengan seberapa baik pemain mengeksekusi tindakan, misalnya timing, akurasi, atau pengambilan keputusan. Play style berkaitan dengan kecenderungan cara bermain, misalnya agresif, defensif, eksploratif, atau berhati-hati. Dua pemain dengan skill yang sama bisa menunjukkan pola perilaku yang sangat berbeda.

Sebelum lanjut, mahasiswa perlu memahami bahwa skill estimation sebaiknya dipandang sebagai **estimasi probabilistik**, bukan label pasti. Sistem adaptif harus siap revisi ketika bukti baru muncul, dan tidak boleh langsung mengubah pengalaman pemain hanya karena satu metrik terlihat aneh.

### Inti yang Harus Ditekankan

- **Skill estimation** bisa salah jika hanya mengandalkan satu metrik, terutama waktu atau damage.
- Gunakan beberapa metrik dan **window waktu** agar estimasi lebih stabil dan tidak terlalu reaktif.
- Pisahkan **skill** sebagai kemampuan eksekusi dari **play style** sebagai kecenderungan cara bermain.

### Transisi ke Slide Berikutnya

Karena skill dan play style sering tertukar, slide berikutnya akan menjelaskan **play style** sebagai konsep terpisah yang membantu sistem memahami preferensi pemain, bukan hanya tingkat kemampuannya.

---

## Slide 029 - Play Style

### Narasi

Pada slide ini kita membahas **play style**, yaitu kecenderungan cara player bermain. **Play style** bukan ukuran seberapa baik player bermain, melainkan gambaran tentang pola perilaku yang sering ia tunjukkan selama bermain. Dalam konteks **adaptive game AI**, pemahaman ini penting karena sistem tidak hanya perlu tahu apakah player kuat atau lemah, tetapi juga bagaimana ia memilih untuk bermain.

Secara intuitif, **play style** menjawab pertanyaan: "Bagaimana cara player bermain?" Misalnya, ada player yang cenderung menyerang lebih dulu, ada yang lebih memilih bertahan, dan ada yang lebih suka menjelajahi area sebelum menyelesaikan misi utama. Perbedaan ini membentuk pengalaman bermain yang unik, meskipun tujuan akhirnya bisa sama.

Contoh **play style** yang umum antara lain:

- `aggressive`: player cenderung menyerang lebih dulu dan mengambil risiko tinggi.
- `defensive`: player lebih berhati-hati, menjaga jarak, dan menunggu momen yang aman.
- `explorer`: player sering menjelajahi area, mencari jalur tersembunyi, atau membuka konten tambahan.
- `speedrunner`: player berusaha menyelesaikan permainan secepat mungkin.
- `collector`: player lebih fokus mengumpulkan item, artefak, atau konten opsional.
- `stealthy`: player menghindari deteksi dan lebih memilih jalur tersembunyi.
- `tactical`: player menggunakan posisi, timing, atau strategi tertentu secara sadar.
- `risk-taker`: player sering mengambil keputusan berisiko tinggi demi hasil yang lebih besar.
- `cautious`: player bermain hati-hati dan cenderung menghindari bahaya.

Poin penting yang harus dipahami adalah **play style berbeda dari skill**. Skill berkaitan dengan kualitas eksekusi, sedangkan play style berkaitan dengan pilihan gaya bermain. Karena itu, dua player dapat memiliki gaya yang sama tetapi kemampuan yang berbeda.

Sebagai contoh:

- Player dapat memiliki **high skill** tetapi bermain `aggressive`.
- Player dapat memiliki **low skill** tetapi tetap bermain `aggressive`.
- Player dapat memiliki **high skill** tetapi memilih gaya `defensive`.
- Player dapat menjadi `explorer` tetapi memiliki kemampuan combat yang lemah.

Dalam implementasi game, **play style** biasanya tidak selalu dideklarasikan secara eksplisit oleh player. Sistem dapat mengamati pola perilakunya, seperti frekuensi menyerang, jarak tempuh, penggunaan jalur tersembunyi, pengumpulan item, atau cara menghadapi musuh. Informasi ini kemudian dapat digunakan oleh **adaptive game AI** untuk menyesuaikan perilaku NPC, tingkat tantangan, atau respons lingkungan.

Sebelum lanjut, mahasiswa perlu memahami bahwa **play style** bersifat deskriptif dan relatif. Ia bukan label tetap, bukan pula pengganti penilaian skill. Play style membantu sistem memahami "bagaimana" player bermain, sementara skill membantu sistem memahami "seberapa baik" player bermain.

### Inti yang Harus Ditekankan

- **Play style** adalah kecenderungan cara player bermain, bukan ukuran kualitas bermain.
- Play style dapat berupa `aggressive`, `defensive`, `explorer`, `speedrunner`, `collector`, `stealthy`, `tactical`, `risk-taker`, atau `cautious`.
- Play style dapat dikombinasikan dengan level skill yang berbeda, misalnya `high skill aggressive` atau `low skill defensive`.
- Dalam **adaptive game AI**, play style membantu sistem memahami pola perilaku player untuk menyesuaikan respons NPC atau lingkungan.

### Transisi ke Slide Berikutnya

Selanjutnya, kita akan membandingkan **skill** dan **play style** secara lebih eksplisit, karena keduanya menjawab pertanyaan yang berbeda: seberapa baik player bermain dan bagaimana cara player bermain.

---

## Slide 030 - Skill vs Play Style

### Narasi

Pada slide ini, kita membedakan dua konsep yang sering tertukar dalam **player modeling**: **skill** dan **play style**. Keduanya penting karena memberi gambaran berbeda tentang pemain.

**Skill** menjawab pertanyaan:

```text
Seberapa baik player bermain?
```

Artinya, `skill` berkaitan dengan kualitas eksekusi: akurasi, timing, pengelolaan sumber daya, kemampuan membaca situasi, dan konsistensi keputusan.

**Play style** menjawab pertanyaan:

```text
Bagaimana cara player bermain?
```

Artinya, `play style` berkaitan dengan pola pilihan perilaku: apakah pemain cenderung menyerang, bertahan, menjelajah, mengumpulkan, atau mengambil risiko.

Contoh pada slide menunjukkan bahwa dua pemain bisa memiliki `skill` yang sama tetapi `play style` yang berbeda:

```text
Player A:
Skill = High
Style = Aggressive

Player B:
Skill = High
Style = Defensive

Player C:
Skill = Medium
Style = Explorer
```

Dari contoh ini, mahasiswa perlu memahami bahwa `high skill` tidak otomatis berarti agresif. Seorang pemain `high skill` bisa bermain `defensive` dengan sangat baik, misalnya dengan memanfaatkan jarak, timing, dan posisi. Sebaliknya, pemain `medium skill` bisa tetap menjadi `explorer` karena fokusnya bukan pada combat, melainkan pada penemuan konten.

Dalam **adaptasi game**, kedua dimensi ini dapat digunakan bersama. `Skill` membantu sistem menilai seberapa menantang respons yang perlu diberikan, sedangkan `play style` membantu sistem memilih jenis tantangan yang sesuai. Misalnya, NPC dapat memberi tekanan taktis pada pemain agresif, atau mendorong pemain defensif untuk lebih berinteraksi.

Sebelum lanjut, poin penting yang harus dipahami adalah:

- **Skill** adalah ukuran kualitas bermain.
- **Play style** adalah ukuran pola perilaku bermain.
- Keduanya dapat dikombinasikan untuk membentuk profil pemain yang lebih akurat.
- Adaptasi tidak cukup hanya melihat satu dimensi saja.

### Inti yang Harus Ditekankan

- **Skill** menjawab "seberapa baik", sedangkan **play style** menjawab "bagaimana cara".
- Pemain dengan `skill` yang sama dapat memiliki `play style` yang berbeda, misalnya `aggressive`, `defensive`, atau `explorer`.
- **Adaptasi dalam game** dapat mempertimbangkan keduanya untuk menyesuaikan tantangan dan perilaku NPC.

### Transisi ke Slide Berikutnya

Setelah memahami perbedaan antara `skill` dan `play style`, kita akan masuk ke salah satu gaya bermain yang paling umum, yaitu **aggressive play style**, beserta ciri dan metrik yang dapat digunakan untuk mengenalinya.

---

## Slide 031 - Aggressive Play Style

### Narasi

Pada slide ini kita membahas salah satu profil **play style** yang paling mudah dikenali, yaitu **agresif**. Setelah slide sebelumnya membedakan **skill** dan **play style**, fokus sekarang adalah bagaimana gaya bermain agresif dapat diidentifikasi dari perilaku nyata player dalam game.

Intuisi awalnya sederhana: player agresif adalah player yang cenderung **memulai kontak**, **mempertahankan tekanan**, dan **tidak banyak menunggu**. Dalam konteks **player modeling**, pola ini penting karena NPC atau sistem adaptif dapat membaca perilaku tersebut untuk menyesuaikan respons, misalnya menjadi lebih waspada, memberi ruang, atau meningkatkan tantangan.

Ciri-ciri agresif biasanya terlihat dari beberapa pola perilaku:

- **attack frequency** tinggi,
- sering mendekati enemy,
- **damage dealt** tinggi,
- sering engage combat,
- waktu idle rendah,
- **cover usage** rendah.

Pola ini tidak harus muncul semua secara sempurna. Yang penting adalah kecenderungan: player lebih sering memilih **action** yang mendekatkan diri ke lawan dan meningkatkan intensitas pertempuran.

Untuk mengukur hal tersebut, slide memberikan beberapa metrik:

```text
AttackFrequency
CombatEngagementRate
AverageDistanceToEnemy
DamageDealtRate
```

Setiap metrik memberi sudut pandang berbeda. `AttackFrequency` menunjukkan seberapa sering player menyerang. `CombatEngagementRate` menunjukkan seberapa sering player berada dalam kondisi bertempur. `AverageDistanceToEnemy` menunjukkan jarak rata-rata terhadap lawan. `DamageDealtRate` menunjukkan seberapa besar kontribusi damage yang diberikan dalam waktu tertentu.

Interpretasi utamanya adalah:

```text
Jika attack tinggi dan jarak ke enemy rendah,
player cenderung agresif.
```

Artinya, agresif tidak cukup diukur dari damage saja. Player yang damage tinggi tetapi selalu menjaga jarak mungkin tidak agresif. Sebaliknya, player yang sering menyerang dan tetap berada dekat enemy menunjukkan pola keputusan yang lebih agresif.

Dalam implementasi sederhana, metrik ini dapat dihitung dari data perilaku seperti frekuensi serangan, durasi combat, jarak terhadap enemy, dan jumlah damage yang diberikan. Nilai tersebut kemudian dapat menjadi input untuk **player modeling**, sehingga sistem adaptif dapat mengklasifikasikan gaya bermain player dan menyesuaikan perilaku NPC secara lebih natural.

Sebelum lanjut, mahasiswa perlu memahami bahwa **agresif** adalah pola perilaku, bukan satu metrik tunggal. Penilaian yang baik biasanya mempertimbangkan beberapa metrik sekaligus, dalam rentang waktu yang cukup, agar tidak salah menyimpulkan dari satu momen pertempuran.

### Inti yang Harus Ditekankan

- **Agresif** ditandai oleh kombinasi perilaku: sering menyerang, dekat dengan enemy, banyak engage combat, dan jarang idle atau menggunakan cover.
- Metrik utama adalah `AttackFrequency`, `CombatEngagementRate`, `AverageDistanceToEnemy`, dan `DamageDealtRate`.
- Interpretasi agresif paling kuat ketika **attack tinggi** dan **jarak ke enemy rendah**, bukan hanya damage tinggi saja.
- Metrik ini dapat menjadi dasar **player modeling** untuk menyesuaikan perilaku NPC atau sistem adaptif dalam game.

### Transisi ke Slide Berikutnya

Setelah memahami bagaimana gaya agresif dikenali, kita akan membandingkannya dengan gaya **defensif** pada slide berikutnya, yang ditandai dengan menjaga jarak, menggunakan cover, dan mengurangi risiko combat langsung.

---

## Slide 032 - Defensive Play Style

### Narasi

Slide ini membahas **Defensive Play Style**, yaitu pola perilaku pemain yang cenderung mengutamakan keselamatan, jarak, dan posisi yang aman. Dalam **player modeling**, gaya ini tidak ditentukan dari satu kejadian, tetapi dari pola telemetri selama beberapa waktu. Intuisinya sederhana: pemain defensif biasanya tidak memburu pertempuran, melainkan memilih kapan dan di mana harus bertempur.

Secara perilaku, ciri utamanya dapat dilihat dari beberapa hal berikut:

- **menjaga jarak** dari lawan,
- **sering menggunakan cover** untuk mengurangi risiko terkena serangan,
- **menghindari combat langsung** ketika posisi tidak menguntungkan,
- **damage taken rendah** karena pemain lebih berhati-hati,
- **attack lebih hati-hati**, misalnya menyerang hanya saat ada peluang,
- **retreat lebih sering** setelah kontak atau ketika tekanan meningkat.

Metrik yang relevan untuk mengukur gaya ini adalah:

```text
AverageDistanceToEnemy
CoverUsageTime
DamageTakenRate
RetreatFrequency
```

Setiap metrik memberi sudut pandang yang berbeda. `AverageDistanceToEnemy` menunjukkan seberapa jauh pemain mempertahankan posisi dari lawan. `CoverUsageTime` mengukur seberapa sering pemain berada di balik perlindungan. `DamageTakenRate` menggambarkan seberapa sering pemain menerima serangan. `RetreatFrequency` menangkap kecenderungan mundur setelah kontak atau ketika tekanan meningkat.

Interpretasi dasar dapat dirumuskan sebagai berikut:

```text
Jika cover usage tinggi dan damage taken rendah,
player cenderung defensif.
```

Rumusan ini penting karena menggabungkan dua sinyal: perilaku posisi dan hasil pertempuran. Pemain yang sering memakai cover tetapi tetap menerima banyak damage belum tentu defensif; ia mungkin hanya berada di posisi buruk. Sebaliknya, pemain yang jarang memakai cover tetapi damage taken rendah bisa saja agresif atau memiliki kemampuan tinggi. Oleh karena itu, interpretasi sebaiknya dilakukan secara relatif terhadap baseline pemain atau sesi.

Dalam konteks **adaptive game behavior**, hasil klasifikasi ini dapat dipakai untuk menyesuaikan tekanan yang diberikan oleh NPC atau sistem permainan. Jika pemain terdeteksi defensif, game dapat membuka peluang untuk mengambil risiko, misalnya dengan memberi ruang, memperpanjang cooldown musuh, atau membuat musuh lebih mudah diprediksi. Tujuannya bukan mengubah gaya pemain secara paksa, tetapi menjaga keseimbangan antara tantangan dan kenyamanan.

Sebelum lanjut, mahasiswa perlu memahami bahwa **defensive** bukan berarti pasif. Pemain defensif tetap dapat menyerang, tetapi dengan seleksi target, waktu, dan posisi yang lebih hati-hati. Poin penting yang harus dikuasai adalah membaca metrik secara gabungan, bukan hanya satu angka, serta memahami bahwa gaya bermain dapat berubah seiring fase permainan.

### Inti yang Harus Ditekankan

- **Defensive play style** ditandai oleh jarak aman, penggunaan cover, retreat yang lebih sering, dan damage taken yang rendah.
- Gaya ini sebaiknya diukur dari metrik gabungan: `AverageDistanceToEnemy`, `CoverUsageTime`, `DamageTakenRate`, dan `RetreatFrequency`.
- Interpretasi harus dilakukan secara relatif dan kontekstual, bukan hanya berdasarkan satu metrik tunggal.
- Hasil player modeling dapat digunakan untuk menyesuaikan tekanan NPC atau perilaku game agar tetap seimbang dengan gaya pemain.

### Transisi ke Slide Berikutnya

Setelah memahami gaya agresif dan defensif yang berfokus pada pertempuran, slide berikutnya akan memperluas player modeling ke perilaku non-kombat, yaitu **Explorer Play Style**, di mana fokusnya adalah eksplorasi area, pengumpulan item, dan interaksi dengan konten opsional.

---

## Slide 033 - Explorer Play Style

### Narasi

Pada slide ini kita membahas **Explorer Play Style**, yaitu gaya bermain di mana pemain lebih banyak menghabiskan waktu untuk menjelajah dunia daripada langsung menyelesaikan tujuan utama. Gaya ini penting dalam **player modeling** karena memberi sinyal bahwa pemain mungkin menikmati penemuan, pengumpulan item, dan interaksi dengan ruang permainan.

Ciri utama yang perlu diperhatikan adalah:

- banyak area dikunjungi,
- item collection tinggi,
- sering masuk optional room,
- waktu bermain lebih lama,
- objective tidak selalu langsung diselesaikan.

Intuisi praktisnya: pemain explorer tidak selalu “lambat” atau “bingung”. Ia mungkin sedang memilih pengalaman yang lebih luas, misalnya mencari rahasia, mengumpulkan item, atau memahami layout level. Karena itu, interpretasi gaya bermain harus melihat **pola ruang dan interaksi**, bukan hanya durasi.

Untuk mengukur gaya ini, kita dapat memakai beberapa metrik:

```text
ExplorationRatio
ItemCollectionRatio
OptionalRoomVisitRate
TimeInNonObjectiveArea
```

`ExplorationRatio` menggambarkan seberapa besar area yang sudah dikunjungi dibanding area yang tersedia. `ItemCollectionRatio` menunjukkan seberapa banyak item yang dikumpulkan dibanding item yang dapat dikumpulkan. `OptionalRoomVisitRate` mengukur seberapa sering pemain masuk ke ruang opsional. `TimeInNonObjectiveArea` mengukur waktu yang dihabiskan di luar area tujuan utama.

Interpretasi dasarnya adalah:

```text
Jika banyak area dikunjungi dan banyak item diambil,
player cenderung explorer.
```

Dalam konteks sistem adaptif, metrik ini dapat membantu **decision making** NPC atau mekanisme permainan menyesuaikan diri. Misalnya, jika pemain sering menjelajah, sistem dapat memberikan petunjuk yang lebih halus, membuka reward eksplorasi, atau menjaga pacing agar pemain tidak merasa kehilangan tujuan utama. Di sisi lain, jika pemain terlalu lama menjelajah dan mulai kehilangan arah, sistem dapat menampilkan penanda tujuan atau hint ringan.

Yang harus dipahami mahasiswa sebelum lanjut adalah bahwa **gaya bermain adalah pola perilaku**, bukan label tetap. Seorang pemain bisa menjadi explorer di satu level, lalu berubah menjadi speedrunner di level berikutnya. Oleh karena itu, player modeling harus menggunakan metrik yang dapat diukur, dibandingkan, dan diperbarui secara berkala.

### Inti yang Harus Ditekankan

- **Explorer Play Style** ditandai oleh banyak area dikunjungi, item collection tinggi, dan sering masuk optional room.
- Metrik utama: `ExplorationRatio`, `ItemCollectionRatio`, `OptionalRoomVisitRate`, `TimeInNonObjectiveArea`.
- Interpretasi gaya bermain harus berbasis pola ruang dan interaksi, bukan hanya waktu bermain.
- Sistem adaptif dapat menggunakan sinyal ini untuk menyesuaikan hint, reward, pacing, dan perilaku NPC.

### Transisi ke Slide Berikutnya

Setelah memahami pemain yang cenderung menjelajah, kita lanjut ke gaya yang berlawanan: **Speedrunner Play Style**, di mana pemain fokus pada penyelesaian objective dengan waktu secepat mungkin.

---

## Slide 034 - Speedrunner Play Style

### Narasi

**Speedrunner** adalah gaya bermain yang ditandai oleh fokus kuat pada penyelesaian tujuan utama. Mahasiswa dapat membayangkannya sebagai pemain yang tidak terlalu tertarik menjelajah semua sudut, tetapi lebih memilih jalur yang paling cepat menuju objective. Dalam konteks **player modeling**, pola ini penting karena menunjukkan bahwa pemain memiliki preferensi terhadap efisiensi waktu dan kejelasan tujuan.

Ciri-ciri utama yang perlu diperhatikan adalah:

- langsung menuju objective,
- waktu completion rendah,
- area optional sedikit,
- item collection rendah,
- combat dihindari jika tidak perlu.

Pola ini tidak selalu berarti pemain kurang kompeten. Bisa jadi pemain sudah memahami struktur level, memiliki strategi rute, atau memang memilih tantangan berupa kecepatan. Karena itu, interpretasi harus dilakukan berdasarkan beberapa metrik sekaligus, bukan hanya satu indikator.

Metrik yang digunakan pada slide ini adalah:

```text
CompletionTime
ObjectiveFocusRatio
ExplorationRatio
CombatAvoidanceRate
```

Setiap metrik memberi sudut pandang berbeda. `CompletionTime` mengukur seberapa cepat pemain menyelesaikan tujuan. `ObjectiveFocusRatio` menunjukkan seberapa besar aktivitas pemain diarahkan ke objective. `ExplorationRatio` menggambarkan seberapa banyak pemain menjelajah area non-objective. `CombatAvoidanceRate` menunjukkan seberapa sering pemain menghindari pertempuran ketika ada pilihan lain.

Interpretasi dasarnya dapat diringkas sebagai berikut:

```text
Jika waktu cepat dan eksplorasi rendah,
player cenderung speedrunner.
```

Artinya, sistem adaptif tidak perlu hanya melihat durasi. Sistem juga perlu memeriksa apakah pemain benar-benar fokus pada objective, bukan hanya cepat karena kebingungan atau karena level terlalu mudah. Kombinasi `CompletionTime` rendah, `ObjectiveFocusRatio` tinggi, `ExplorationRatio` rendah, dan `CombatAvoidanceRate` tinggi akan memperkuat klasifikasi **speedrunner**.

Dalam implementasi game, hasil klasifikasi ini dapat dipakai untuk menyesuaikan perilaku NPC, penempatan enemy, atau pacing level. Misalnya, jika pemain terdeteksi sebagai speedrunner, sistem dapat membuat objective lebih jelas, mengurangi detour yang tidak perlu, atau menyesuaikan tekanan combat agar pemain tetap dapat menyelesaikan tujuan dengan cepat. Hal ini membantu menjaga pengalaman bermain tetap sesuai dengan preferensi pemain.

Sebelum lanjut, mahasiswa perlu memahami bahwa **speedrunner** bukan sekadar "pemain cepat". Ia adalah pola perilaku yang terbentuk dari kombinasi waktu, fokus tujuan, eksplorasi, dan penghindaran combat. Pemahaman ini menjadi dasar untuk membangun model pemain yang lebih akurat dan responsif.

### Inti yang Harus Ditekankan

- **Speedrunner** ditandai oleh fokus pada objective, waktu penyelesaian rendah, dan eksplorasi minimal.
- Metrik utama adalah `CompletionTime`, `ObjectiveFocusRatio`, `ExplorationRatio`, dan `CombatAvoidanceRate`.
- Klasifikasi harus menggunakan kombinasi metrik, bukan hanya satu nilai, agar interpretasi lebih stabil.
- Gaya bermain ini dapat menjadi input untuk sistem adaptif yang menyesuaikan pacing, NPC behavior, dan tekanan combat.

### Transisi ke Slide Berikutnya

Setelah memahami pemain yang mengutamakan kecepatan dan efisiensi, kita akan melihat gaya bermain lain yang justru ditandai oleh keterlibatan dengan risiko, yaitu **Risk-Taker Play Style**.

---

## Slide 035 - Risk-Taker Play Style

### Narasi

Slide ini membahas salah satu profil pemain yang penting dalam **player modeling**, yaitu **risk-taker**. Secara intuitif, pemain tipe ini tidak selalu menghindari bahaya, tetapi justru sering memilih situasi yang memiliki potensi kerugian tinggi. Dalam konteks sistem adaptif, perilaku ini perlu dikenali karena memengaruhi cara NPC, musuh, atau lingkungan game merespons pemain.

Ciri utama **risk-taker** dapat dilihat dari pola keputusan yang berani. Pemain tipe ini cenderung:

- **bertarung saat `health` rendah**,
- **menghadapi banyak `enemy` sekaligus**,
- **jarang menggunakan `healing`**,
- **memilih jalur berbahaya**,
- **sering mengambil `reward` berisiko**.

Pola ini menunjukkan bahwa pemain tidak hanya mengukur keberhasilan dari hasil akhir, tetapi juga dari tantangan yang dihadapi. Dalam desain game, tindakan seperti ini bisa muncul karena pemain ingin menguji batas kemampuan, mengejar `reward` besar, atau menikmati sensasi tekanan.

Untuk menangkap perilaku tersebut secara kuantitatif, slide memberikan beberapa metrik:

```text
LowHealthCombatTime
EnemyClusterEngagement
HealingDelay
DangerAreaTime
```

Metrik `LowHealthCombatTime` mengukur seberapa lama pemain tetap bertempur ketika kondisi `health`-nya rendah. Nilai yang tinggi menunjukkan pemain tidak segera mundur atau mencari perlindungan. Metrik `EnemyClusterEngagement` menggambarkan seberapa sering pemain terlibat dengan kelompok musuh yang besar. Metrik `HealingDelay` menunjukkan jeda waktu sebelum pemain menggunakan `healing` setelah menerima `damage`. Semakin panjang jeda ini, semakin besar kemungkinan pemain memilih bertahan dalam tekanan. Metrik `DangerAreaTime` mengukur waktu yang dihabiskan pemain di area berisiko tinggi, seperti zona musuh kuat, jebakan, atau jalur yang tidak aman.

Interpretasi penting dari profil ini adalah bahwa **risk-taker tidak selalu buruk**. Dalam banyak kasus, pemain yang terlihat agresif dan nekat sebenarnya memiliki kemampuan tinggi. Mereka mungkin sudah memahami pola musuh, mengetahui posisi item, atau sengaja memilih jalur sulit untuk mendapatkan `reward` lebih besar. Karena itu, sistem adaptif tidak boleh langsung menganggap pemain risk-taker sebagai pemain yang gagal atau perlu diselamatkan.

Dari sisi perilaku NPC, pengenalan profil ini membantu game menyesuaikan respons secara lebih masuk akal. Misalnya, musuh dapat lebih sering melakukan flanking, memanfaatkan jarak, atau memberikan tekanan bertahap ketika pemain terus memilih situasi berbahaya. Tujuannya bukan membuat game terasa tidak adil, tetapi menjaga keseimbangan antara tantangan dan kemampuan pemain. Dengan cara ini, pemain yang berani tetap mendapat pengalaman yang menegangkan, tetapi tidak langsung dihukum secara berlebihan.

Sebelum lanjut ke klasifikasi, mahasiswa perlu memahami bahwa profil pemain dibangun dari **pola perilaku**, bukan dari satu tindakan tunggal. Satu kali bertempur saat `health` rendah belum tentu membuat pemain menjadi risk-taker. Yang penting adalah konsistensi metrik dan konteks keputusan pemain. Pemahaman ini menjadi dasar untuk membedakan pemain yang benar-benar mencari risiko dari pemain yang hanya sedang dalam situasi darurat.

### Inti yang Harus Ditekankan

- **Risk-taker** adalah pemain yang sering memilih tindakan dengan potensi kerugian tinggi, seperti bertempur saat `health` rendah atau masuk area berbahaya.
- Metrik seperti `LowHealthCombatTime`, `EnemyClusterEngagement`, `HealingDelay`, dan `DangerAreaTime` membantu mengenali pola tersebut secara kuantitatif.
- Profil ini tidak selalu negatif; pemain risk-taker bisa saja ahli, percaya diri, atau memang mencari tantangan.
- Sistem adaptif harus merespons perilaku ini dengan penyesuaian yang seimbang, bukan dengan hukuman yang membuat pengalaman bermain tidak adil.

### Transisi ke Slide Berikutnya

Setelah memahami ciri dan metrik dari satu profil pemain, langkah berikutnya adalah melihat bagaimana beberapa profil tersebut dapat dikelompokkan secara lebih sistematis.

---

## Slide 036 - Play Style Classification

### Narasi

Pada slide ini kita masuk ke tahap **klasifikasi play style**. Setelah metrik perilaku pemain dikumpulkan, langkah berikutnya adalah mengubah metrik tersebut menjadi label gaya bermain yang mudah digunakan oleh sistem game.

Intuisi praktisnya sederhana: pemain yang sering menyerang dan tetap dekat dengan musuh cenderung **Aggressive**, pemain yang banyak menjelajah dan mengumpulkan item cenderung **Explorer**, sedangkan pemain yang sering memakai cover dan menerima damage rendah cenderung **Defensive**.

Contoh rule sederhana yang dapat digunakan:

```text
if attackFrequency tinggi
and averageDistanceToEnemy rendah:
    style = Aggressive

if explorationRatio tinggi
and itemCollection tinggi:
    style = Explorer

if coverUsage tinggi
and damageTaken rendah:
    style = Defensive
```

Dalam potongan aturan di atas, setiap kondisi memeriksa dua sinyal perilaku. `attackFrequency` dan `averageDistanceToEnemy` menggambarkan intensitas serta keberanian pemain dalam pertempuran. `explorationRatio` dan `itemCollection` menggambarkan kecenderungan pemain untuk mengeksplorasi dunia. `coverUsage` dan `damageTaken` menggambarkan strategi bertahan.

Urutan eksekusinya dapat dipahami sebagai berikut:

1. Sistem membaca nilai metrik pemain.
2. Sistem membandingkan nilai tersebut dengan ambang batas atau kondisi rule.
3. Jika satu rule terpenuhi, sistem memberi label `style` yang sesuai.
4. Label tersebut dapat dipakai untuk menyesuaikan perilaku NPC, tantangan, atau feedback game.

Untuk praktikum, **rule-based classification** sudah cukup karena mudah diimplementasikan, mudah diuji, dan mudah dijelaskan. Mahasiswa perlu memahami bahwa klasifikasi ini bukan sekadar memberi nama gaya, tetapi menjadi dasar bagi sistem game untuk mengambil keputusan adaptif.

Yang penting dipahami sebelum lanjut adalah bahwa rule sederhana ini menghasilkan label tunggal berdasarkan kondisi yang paling jelas. Dalam praktik, satu pemain bisa menunjukkan lebih dari satu gaya, tetapi pada tahap ini kita fokus pada cara dasar mengubah metrik menjadi kategori.

### Inti yang Harus Ditekankan

- **Play style classification** mengubah metrik perilaku menjadi label gaya bermain.
- Rule sederhana dapat menggunakan kombinasi metrik seperti `attackFrequency`, `averageDistanceToEnemy`, `explorationRatio`, `itemCollection`, `coverUsage`, dan `damageTaken`.
- Untuk praktikum, pendekatan rule-based sudah cukup karena mudah diimplementasikan dan mudah dianalisis.
- Hasil klasifikasi dapat menjadi input bagi sistem adaptif, misalnya penyesuaian perilaku NPC atau tingkat tantangan.

### Transisi ke Slide Berikutnya

Namun, dalam permainan nyata, pemain tidak selalu masuk ke satu gaya saja. Karena itu, pada slide berikutnya kita akan melihat bagaimana model dapat menyimpan beberapa skor style sekaligus, sehingga klasifikasi menjadi lebih fleksibel dan lebih dekat dengan perilaku pemain yang sebenarnya.

---

## Slide 037 - Multi-Label Play Style

### Narasi

Pada slide ini kita melangkah dari klasifikasi **play style tunggal** ke **multi-label play style**. Pada slide sebelumnya, pemain dapat diberi satu label berdasarkan aturan sederhana, misalnya `Aggressive`, `Explorer`, atau `Defensive`. Namun dalam praktik, perilaku pemain jarang benar-benar satu dimensi. Seorang pemain bisa menyerang dengan agresif di satu momen, tetapi juga sering menjelajah area baru di momen lain. Karena itu, model yang hanya menyimpan satu label sering kali terlalu kaku.

Contoh multi-label yang ditampilkan pada slide adalah sebagai berikut:

```text
Aggressive + Explorer
Defensive + Collector
Speedrunner + High Skill
Risk-Taker + Aggressive
```

Setiap kombinasi menunjukkan bahwa pemain dapat memiliki beberapa karakter perilaku secara bersamaan. Misalnya, `Aggressive + Explorer` menggambarkan pemain yang sering menyerang musuh tetapi juga aktif menjelajah peta. `Defensive + Collector` menggambarkan pemain yang cenderung bertahan sambil mengumpulkan item. `Speedrunner + High Skill` menggambarkan pemain yang bermain cepat dan memiliki kemampuan kontrol yang tinggi. `Risk-Taker + Aggressive` menggambarkan pemain yang suka mengambil risiko dan bermain ofensif.

Karena pemain dapat memiliki beberapa gaya sekaligus, model tidak perlu memaksa pemain masuk ke satu kategori saja. Sebagai gantinya, model dapat menyimpan beberapa skor style. Contoh penyimpanannya adalah sebagai berikut:

```text
AggressiveScore = 0.75
ExplorerScore   = 0.60
DefensiveScore  = 0.20
SpeedScore      = 0.35
```

Dalam contoh ini, `AggressiveScore` adalah yang tertinggi, sehingga **style dominan** pemain adalah `Aggressive`. Namun, `ExplorerScore` yang cukup tinggi tetap penting karena menunjukkan bahwa pemain juga memiliki kecenderungan eksploratif. Dengan cara ini, sistem perilaku NPC dapat membaca profil pemain secara lebih halus, bukan hanya sebagai satu label tunggal.

Secara praktis, pendekatan multi-label memberi ruang bagi sistem game untuk membuat respons yang lebih kontekstual. Jika `AggressiveScore` tinggi, NPC dapat memilih strategi bertahan jarak jauh atau menggunakan serangan area. Jika `ExplorerScore` juga tinggi, NPC dapat menyesuaikan perilaku dengan menjaga area penting atau memberikan tantangan eksplorasi. Jika `DefensiveScore` rendah, NPC tidak perlu terlalu sering menggunakan pola perlindungan yang berlebihan. Dengan kata lain, beberapa skor style membantu NPC memahami pola pemain secara lebih realistis.

Hal penting yang harus dipahami mahasiswa sebelum lanjut adalah bahwa **multi-label play style** adalah cara merepresentasikan profil pemain, bukan encore aturan klasifikasi tunggal. Pada tahap ini, kita baru membahas bahwa pemain dapat memiliki beberapa skor style dan bahwa style dominan ditentukan oleh skor tertinggi. Cara menghitung skor tersebut dari metrik gameplay akan dibahas pada slide berikutnya.

### Inti yang Harus Ditekankan

- Pemain tidak selalu memiliki satu **play style** tunggal; perilaku pemain dapat berupa kombinasi beberapa gaya.
- Model dapat menyimpan beberapa skor style, seperti `AggressiveScore`, `ExplorerScore`, `DefensiveScore`, dan `SpeedScore`.
- **Style dominan** adalah style dengan skor tertinggi, tetapi skor lain tetap penting untuk menggambarkan profil pemain secara lebih lengkap.

### Transisi ke Slide Berikutnya

Selanjutnya, kita akan melihat bagaimana skor style tersebut dapat dihitung dari metrik gameplay, sehingga nilai seperti `AggressiveScore` dan `ExplorerScore` tidak hanya disimpan, tetapi juga memiliki dasar perhitungan yang jelas.

---

## Slide 038 - Play Style Score

### Narasi

Setelah kita melihat bahwa player dapat memiliki beberapa play style secara bersamaan, langkah berikutnya adalah menghitung seberapa kuat setiap style tersebut muncul. Pada slide ini, kita fokus pada **Play Style Score**, yaitu nilai numerik yang menggambarkan kecenderungan perilaku player terhadap satu gaya tertentu.

Intuisi praktisnya sederhana: skor bukan label ya/tidak, melainkan derajat. Jika `AggressiveScore` bernilai tinggi, artinya perilaku agresif cukup dominan, tetapi player tetap bisa memiliki skor style lain yang lebih rendah.

Setiap skor dihitung dari beberapa **metrics** perilaku player. Metrics ini biasanya berasal dari data gameplay, misalnya frekuensi menyerang, rasio eksplorasi, penggunaan cover, atau item yang dikumpulkan. Agar bobotnya konsisten, metrics umumnya dinormalisasi ke rentang 0 sampai 1.

```text
AggressiveScore =
0.5 * attackFrequencyScore
+ 0.3 * closeCombatScore
+ 0.2 * damageDealtScore

ExplorerScore =
0.6 * explorationRatio
+ 0.4 * itemCollectionRatio

DefensiveScore =
0.5 * coverUsageScore
+ 0.3 * distanceScore
+ 0.2 * damageAvoidanceScore
```

Untuk `AggressiveScore`, bobot terbesar diberikan pada `attackFrequencyScore` karena frekuensi menyerang adalah indikator paling langsung dari gaya agresif. `closeCombatScore` memperkuat sinyal bahwa player memilih pertarungan jarak dekat, sedangkan `damageDealtScore` menambah bukti bahwa player aktif menghasilkan dampak.

Untuk `ExplorerScore`, `explorationRatio` menjadi komponen utama karena gaya eksplorasi terutama terlihat dari seberapa banyak area yang dijelajahi. `itemCollectionRatio` menjadi pelengkap, karena player eksploratif sering mengumpulkan item atau objek di lingkungan.

Untuk `DefensiveScore`, `coverUsageScore` menjadi bobot terbesar karena penggunaan cover adalah tanda perilaku bertahan. `distanceScore` menangkap kecenderungan menjaga jarak, dan `damageAvoidanceScore` memperkuat sinyal bahwa player berusaha menghindari risiko.

Yang harus dipahami mahasiswa adalah bahwa rumus ini adalah **weighted sum**. Bobot menentukan seberapa penting setiap metrics untuk satu style. Jika bobot diubah, interpretasi skor juga berubah. Karena itu, nilai skor harus selalu dibaca bersama konteks metrics dan desain game, bukan sebagai angka mutlak.

### Inti yang Harus Ditekankan

- **Play Style Score** adalah nilai numerik yang menunjukkan seberapa kuat player menunjukkan satu gaya bermain.
- Skor dihitung menggunakan **weighted sum** dari beberapa metrics perilaku player.
- Bobot seperti `0.5`, `0.3`, dan `0.2` menentukan seberapa penting setiap metrics untuk style tersebut.
- Skor bersifat **multi-label**, sehingga player dapat memiliki beberapa style dengan kekuatan yang berbeda.

### Transisi ke Slide Berikutnya

Setelah skor style dihitung, langkah berikutnya adalah merangkum berbagai nilai tersebut ke dalam satu struktur yang lebih mudah digunakan oleh sistem adaptif, yaitu **Player Profile**.

---

## Slide 039 - Player Profile

### Narasi

Pada slide ini, kita masuk ke tahap berikutnya setelah menghitung skor gaya bermain. **Player Profile** adalah ringkasan informasi tentang pemain yang telah disaring dari data permainan. Ia bukan sekadar daftar angka mentah, tetapi representasi ringkas yang menggambarkan kemampuan, gaya, dan kecenderungan pemain pada suatu kondisi tertentu.

```text
Player Profile
├── Skill Level: Medium
├── Skill Score: 0.62
├── Primary Style: Aggressive
├── Aggressive Score: 0.78
├── Explorer Score: 0.25
├── Defensive Score: 0.30
├── Risk Score: 0.65
└── Recommended Adaptation: Stronger tactical enemy
```

Secara alur, profil ini memiliki tiga tahap yang penting:

1. **Input**: data aksi pemain dikumpulkan sebagai `telemetry`.
2. **Proses**: `metrics` dihitung, skor ditimbang, dan gaya bermain diklasifikasikan.
3. **Output**: struktur profil dihasilkan, termasuk `Recommended Adaptation`.

Dari struktur ini, kita dapat melihat bahwa profil pemain memuat dua jenis informasi. Informasi pertama bersifat **deskriptif**, seperti `Skill Level: Medium` dan `Primary Style: Aggressive`, yang membantu sistem memahami pemain secara cepat. Informasi kedua bersifat **kuantitatif**, seperti `Skill Score`, `Aggressive Score`, `Explorer Score`, `Defensive Score`, dan `Risk Score`, yang memberi bobot numerik untuk pengambilan keputusan.

Beberapa bagian penting dalam profil ini adalah:

- `Skill Level` dan `Skill Score` menggambarkan kemampuan pemain, misalnya dari akurasi, kelancaran, atau keberhasilan menyelesaikan tantangan.
- `Primary Style` menunjukkan gaya dominan yang dipilih sistem berdasarkan skor gaya bermain.
- `Aggressive Score`, `Explorer Score`, dan `Defensive Score` memberi gambaran keseimbangan gaya bermain, bukan hanya satu label.
- `Risk Score` menunjukkan seberapa besar pemain cenderung mengambil risiko, misalnya menyerang lebih dulu atau masuk ke area berbahaya.
- `Recommended Adaptation` adalah hasil interpretasi profil oleh sistem adaptif, misalnya menyiapkan musuh yang lebih taktis.

Dalam konteks **sistem game cerdas**, player profile berfungsi sebagai jembatan antara data pemain dan perilaku NPC. Data mentah seperti jumlah serangan, jarak tempuh, penggunaan cover, atau item yang dikumpulkan tidak selalu langsung digunakan oleh NPC. Sistem biasanya mengubah data tersebut menjadi metrik, lalu merangkumnya menjadi profil. Profil inilah yang kemudian dapat dibaca oleh modul adaptasi, difficulty manager, behavior tree, finite state machine, atau sistem decision making lainnya.

Intuisi praktisnya adalah: **profil membuat sistem game bisa "membaca" pemain tanpa harus memproses seluruh riwayat aksi setiap saat**. Jika profil menunjukkan pemain agresif dan berisiko, sistem dapat menyesuaikan musuh agar lebih taktis. Jika profil menunjukkan pemain defensif, sistem dapat mengubah tekanan, pola serangan, atau tantangan lingkungan. Dengan cara ini, sistem tidak hanya bereaksi terhadap satu aksi, tetapi terhadap pola perilaku pemain.

Sebelum lanjut, mahasiswa perlu memahami bahwa player profile adalah **hasil agregasi**, bukan data tunggal. Ia berasal dari `telemetry` dan `metrics` yang dikumpulkan selama permainan. Artinya, kualitas profil bergantung pada kualitas metrik, cara penimbangan skor, dan konsistensi interpretasi. Jika metrik tidak jelas, profil akan menyesatkan sistem adaptasi.

### Inti yang Harus Ditekankan

- **Player Profile** adalah ringkasan terstruktur tentang kemampuan, gaya, dan risiko pemain.
- Profil menggabungkan informasi kategori seperti `Skill Level` dengan skor numerik seperti `Skill Score` dan `Risk Score`.
- Profil dihasilkan dari `telemetry` dan `metrics`, bukan dari satu aksi pemain saja.
- `Recommended Adaptation` menunjukkan bahwa profil dapat menjadi dasar keputusan sistem adaptif, misalnya menyesuaikan perilaku musuh.
- Dalam sistem game cerdas, profil berperan sebagai input ringkas untuk modul decision making, difficulty adaptation, atau perilaku NPC.

### Transisi ke Slide Berikutnya

Setelah memahami bentuk player profile, langkah berikutnya adalah membedakan profil yang dihitung untuk satu sesi permainan dengan profil yang dibangun dari banyak sesi. Pada slide berikutnya, kita akan membahas **profile sementara** dan **profile jangka panjang**, serta mengapa praktikum dapat dimulai dari profile sementara.

---

## Slide 040 - Profile Sementara dan Jangka Panjang

### Narasi

Setelah mahasiswa memahami bahwa **Player Profile** adalah ringkasan kondisi player, langkah berikutnya adalah membedakan **dua cakupan waktu** dalam profil tersebut. **Profile sementara** adalah profil yang hidup hanya selama satu sesi permainan. Profil ini menggambarkan kondisi player saat ini, misalnya `skill` pada level yang sedang dimainkan, `style` dalam satu `run`, atau performa pada `wave` terakhir. Karena datanya berasal dari sesi yang sama, profil ini cepat berubah dan sangat berguna untuk menyesuaikan kesulitan secara langsung.

Sebaliknya, **profile jangka panjang** adalah profil yang dibangun dari banyak sesi. Profil ini menangkap pola yang lebih stabil, seperti gaya bermain umum, perkembangan `skill` dari waktu ke waktu, dan preferensi terhadap `game mode` tertentu. Profil jangka panjang tidak dimaksudkan untuk membaca keadaan sesaat, melainkan untuk memahami kecenderungan player secara lebih luas. Dalam sistem adaptif, profil ini dapat menjadi dasar rekomendasi yang lebih konsisten, misalnya menjaga tantangan tetap seimbang meskipun player sudah bermain berulang kali.

Perbedaan utamanya terletak pada **stabilitas** dan **tujuan penggunaan**. `sessionProfile` bersifat reaktif dan mudah dipengaruhi oleh kondisi level, `randomness`, atau performa sesaat. `longTermProfile` lebih lambat berubah karena menggabungkan banyak observasi, sehingga lebih cocok untuk preferensi jangka panjang. Mahasiswa perlu memahami bahwa satu profil tidak selalu menggantikan profil lain; keduanya bisa digunakan bersama, dengan bobot berbeda tergantung kebutuhan adaptasi.

Untuk praktikum, fokus utama cukup menggunakan **profile sementara**. Alasannya sederhana: data satu sesi lebih mudah dikumpulkan, lebih mudah diuji, dan langsung terlihat dampaknya pada perilaku NPC atau penyesuaian tantangan. Dengan `sessionProfile`, mahasiswa dapat mengamati bagaimana perubahan `skill score` atau `style score` memengaruhi keputusan adaptasi tanpa perlu membangun penyimpanan data antar sesi.

Hal penting yang harus dipahami sebelum lanjut adalah **cakupan data** dan **keputusan adaptasi**. Jika sistem ingin menyesuaikan kesulitan pada `wave` berikutnya, gunakan profil sementara. Jika sistem ingin mengingat preferensi player dari sesi ke sesi, gunakan profil jangka panjang. Pemahaman ini menjadi dasar sebelum membahas bagaimana profil tersebut diperbarui secara berkala.

### Inti yang Harus Ditekankan

- **Profile sementara** dihitung dari satu sesi dan menggambarkan kondisi player saat ini.
- **Profile jangka panjang** dihitung dari banyak sesi dan menggambarkan pola bermain yang lebih stabil.
- Untuk praktikum, gunakan `sessionProfile` karena lebih sederhana, mudah diuji, dan langsung memengaruhi adaptasi.
- Kedua profil memiliki peran berbeda: profil sementara untuk respons cepat, profil jangka panjang untuk preferensi yang lebih konsisten.

### Transisi ke Slide Berikutnya

Setelah memahami jenis profil yang digunakan, langkah berikutnya adalah membahas bagaimana profil tersebut diperbarui agar tetap relevan selama permainan berlangsung.

---

## Slide 041 - Updating Player Profile

### Narasi

**Player profile** bukan data statis yang hanya diisi saat pemain pertama kali masuk. Ia adalah representasi yang terus berubah karena pemain dapat belajar, mengganti strategi, atau mengalami kondisi berbeda dari satu fase ke fase berikutnya. Karena itu, sistem adaptif perlu memiliki mekanisme **updating player profile** agar keputusan yang diambil tetap relevan.

Slide ini menekankan alur utama dari pengumpulan data sampai penerapan adaptasi.

```text
Record telemetry
      ↓
Calculate metrics
      ↓
Estimate skill
      ↓
Classify play style
      ↓
Update player profile
      ↓
Apply adaptation
```

Alur ini dapat dibaca sebagai pipeline dengan arah dari atas ke bawah. Input awalnya adalah **telemetri**, yaitu data mentah dari permainan. Prosesnya mengubah data mentah menjadi informasi yang lebih bermakna, lalu menghasilkan **player profile** yang siap digunakan. Output akhirnya adalah **adaptasi**, misalnya perubahan perilaku NPC, tingkat tantangan, atau respons sistem terhadap pemain.

Setiap tahap memiliki peran yang berbeda:

1. `record_telemetry` mengumpulkan data mentah, seperti posisi, waktu bertahan, jumlah serangan, hasil objective, atau interaksi dengan NPC.
2. `calculate_metrics` mengubah data mentah menjadi metrik yang lebih stabil, misalnya rasio keberhasilan, kecepatan penyelesaian, atau frekuensi mengambil risiko.
3. `estimate_skill` menilai kemampuan pemain berdasarkan metrik tersebut.
4. `classify_play_style` mengelompokkan pola bermain, seperti agresif, defensif, eksploratif, atau hati-hati.
5. `update_player_profile` menyimpan hasil estimasi ke profil pemain.
6. `apply_adaptation` menggunakan profil terbaru untuk menyesuaikan perilaku sistem.

Perlu diperhatikan bahwa **update** tidak harus dilakukan setiap frame. Jika terlalu sering, sistem bisa menjadi tidak stabil karena bereaksi terhadap fluktuasi sesaat. Jika terlalu jarang, adaptasi bisa terasa lambat. Oleh karena itu, slide memberikan beberapa pilihan waktu update:

- setiap 10 detik,
- setiap wave,
- setiap room,
- setelah objective selesai,
- setelah player mati.

Pilihan ini menunjukkan bahwa granularitas update bergantung pada jenis permainan dan tujuan adaptasi. Untuk permainan berbasis wave, update per wave sering lebih alami. Untuk permainan berbasis room atau objective, update setelah fase selesai biasanya lebih stabil karena data lebih lengkap.

Sebelum lanjut, mahasiswa perlu memahami bahwa inti slide ini bukan sekadar menghitung angka, tetapi memastikan **player profile** selalu cukup segar untuk mendukung keputusan adaptif. Profil yang tidak diperbarui akan membuat sistem menilai pemain berdasarkan kondisi lama, sehingga responsnya bisa tidak tepat.

### Inti yang Harus Ditekankan

- **Player profile** harus diperbarui secara berkala atau pada momen penting agar tetap merepresentasikan perilaku pemain terkini.
- Alur update bergerak dari **telemetri** ke **metrik**, lalu ke estimasi **skill** dan **play style**, sebelum akhirnya profil diperbarui dan adaptasi diterapkan.
- Waktu update perlu dipilih sesuai konteks permainan: terlalu sering membuat sistem tidak stabil, terlalu jarang membuat adaptasi lambat.

### Transisi ke Slide Berikutnya

Setelah kita memahami bagaimana profil pemain diperbarui, muncul pertanyaan berikutnya: seberapa yakin sistem terhadap profil tersebut? Slide berikutnya akan membahas **confidence** dalam player model, yaitu ukuran keyakinan sistem terhadap hasil estimasi yang sedang digunakan.

---

## Slide 042 - Confidence dalam Player Model

### Narasi

Setelah sistem memperbarui **player profile**, ada satu hal penting yang perlu dinilai: seberapa layak profil tersebut digunakan untuk mengambil keputusan. **Confidence** adalah ukuran keyakinan sistem terhadap model player yang sedang dibangun. Confidence bukan nilai skill atau style pemain, melainkan penilaian internal tentang apakah data yang tersedia sudah cukup untuk membuat adaptasi.

Intuisinya sederhana. Jika sistem baru mengamati sedikit aksi pemain, `confidence` harus rendah. Jika sistem sudah mengumpulkan banyak data, `confidence` dapat meningkat. Dalam konteks game, hal ini penting karena adaptasi yang terlalu cepat terhadap data sedikit dapat membuat sistem salah menilai pemain.

```text
Jika data masih sedikit:
    confidence rendah

Jika data sudah banyak:
    confidence lebih tinggi
```

Contoh pada slide menunjukkan situasi yang sangat umum:

```text
Player baru bermain 20 detik.
Belum cukup data untuk menyimpulkan style.
```

Dalam 20 detik pertama, pemain mungkin masih mencoba kontrol, membaca tutorial, atau bermain secara eksperimental. Jika sistem langsung menyimpulkan bahwa pemain tersebut agresif, defensif, atau lemah, hasilnya bisa menyesatkan. Karena itu, `confidence` rendah menjadi sinyal bahwa sistem sebaiknya menunggu data lebih lanjut sebelum membuat kesimpulan kuat.

Secara praktis, `confidence` dapat dipikirkan sebagai nilai antara `0` dan `1`, atau sebagai kategori `low`, `medium`, dan `high`. Nilai rendah berarti sistem sebaiknya hanya melakukan adaptasi kecil atau menunda perubahan besar. Nilai tinggi berarti sistem boleh lebih percaya pada estimasi `skill` dan `style` yang telah terbentuk.

Untuk praktikum sederhana, tidak wajib menghitung confidence secara formal. Namun konsep ini penting karena membantu membedakan antara “sistem belum tahu” dan “sistem sudah tahu”. Tanpa confidence, sistem bisa salah menginterpretasi perilaku awal pemain sebagai pola permanen.

Yang perlu dipahami sebelum lanjut adalah bahwa confidence berfungsi sebagai pengaman keputusan adaptif. Semakin rendah confidence, semakin konservatif respons sistem terhadap perubahan difficulty, strategi NPC, atau perilaku lawan. Semakin tinggi confidence, semakin besar ruang bagi sistem untuk menyesuaikan permainan berdasarkan profil pemain.

### Inti yang Harus Ditekankan

- **Confidence** adalah ukuran keyakinan sistem terhadap model player, bukan nilai skill atau style itu sendiri.
- Data sedikit menghasilkan `confidence` rendah; data banyak memungkinkan `confidence` lebih tinggi.
- Jika `confidence` rendah, sistem sebaiknya beradaptasi secara konservatif dan menunggu data lebih lanjut.

### Transisi ke Slide Berikutnya

Jika confidence rendah karena data belum cukup, ada situasi khusus ketika sistem bahkan belum memiliki data sama sekali. Kondisi inilah yang akan kita bahas pada slide berikutnya sebagai **cold start problem**.

---

## Slide 043 - Cold Start Problem

### Narasi

Pada awal sesi bermain, sistem player modeling sering menghadapi kondisi yang disebut **cold start**. Kondisi ini muncul ketika game belum memiliki data yang cukup tentang pemain.

```text
Game belum tahu skill atau style player.
```

Secara intuitif, situasi ini mirip dengan NPC yang baru bertemu pemain tanpa riwayat interaksi. Jika sistem langsung membuat kesimpulan kuat, misalnya menganggap pemain sangat agresif atau sangat lemah, respons game bisa terasa tidak adil.

Oleh karena itu, **DDA** dan **player modeling** perlu lebih hati-hati di awal permainan. Tujuannya bukan menghentikan adaptasi, tetapi membuat adaptasi tetap aman, wajar, dan tidak merusak pengalaman bermain.

Beberapa cara yang umum digunakan untuk menangani cold start adalah:

- Mulai dengan `profile default` yang netral, misalnya tingkat kesulitan standar dan perilaku NPC yang seimbang.
- Gunakan `tutorial performance` sebagai sinyal awal, karena tahap tutorial biasanya memberikan data yang lebih terkontrol.
- Gunakan pilihan `difficulty` awal dari pemain sebagai petunjuk eksplisit tentang ekspektasi tantangan.
- Lakukan adaptasi secara perlahan, misalnya hanya menyesuaikan satu parameter kecil pada satu waktu.
- Tunggu data cukup sebelum menyimpulkan `skill` atau `style` pemain secara definitif.

Dalam implementasi sederhana, game dapat mempertahankan `confidence` rendah selama fase awal. Selama `confidence` masih rendah, sistem sebaiknya hanya melakukan penyesuaian kecil atau menahan perubahan besar sampai bukti perilaku pemain semakin jelas.

Yang perlu dipahami mahasiswa sebelum lanjut adalah: cold start bukan berarti sistem tidak boleh beradaptasi. Yang penting adalah membedakan antara **sinyal awal yang kuat** dan **kesimpulan jangka panjang yang belum cukup didukung data**.

### Inti yang Harus Ditekankan

- **Cold start** terjadi ketika sistem belum memiliki data player yang cukup.
- Respons awal harus konservatif agar game tidak salah menilai `skill` atau `style` pemain.
- `profile default`, `tutorial performance`, dan pilihan `difficulty` dapat menjadi sumber sinyal awal.
- Adaptasi sebaiknya dilakukan bertahap dan menunggu data yang cukup sebelum kesimpulan kuat.

### Transisi ke Slide Berikutnya

Setelah memahami bagaimana menangani kondisi tanpa data, langkah berikutnya adalah menentukan aturan yang mengatur game harus menyesuaikan apa ketika model player sudah tersedia.

---

## Slide 044 - Adaptation Policy

### Narasi

**Adaptation policy** adalah aturan yang menentukan bagaimana game merespons **player model**.

Player model memberi gambaran tentang pemain, tetapi gambaran itu tidak otomatis mengubah gameplay. Game tetap membutuhkan aturan yang menerjemahkan hasil model menjadi tindakan nyata.

Player model menjawab pertanyaan:

```text
Player seperti apa?
```

Adaptation policy menjawab pertanyaan:

```text
Game harus menyesuaikan apa?
```

Perbedaan ini penting karena model pemain bersifat deskriptif, sedangkan policy bersifat preskriptif.

Contoh sederhana dapat ditulis sebagai berikut:

```text
Jika player aggressive:
    munculkan enemy yang menggunakan cover

Jika player explorer:
    tambahkan reward di area samping

Jika player low skill:
    kurangi enemy damage
```

Tujuan contoh ini adalah menunjukkan bagaimana kondisi pemain dipetakan ke perubahan gameplay.

Urutan eksekusinya sederhana:

1. Game membaca hasil **player model**.
2. Sistem memilih aturan adaptasi yang sesuai.
3. Game menerapkan `action` ke parameter gameplay.

Pada contoh di atas, kondisi pemain menjadi pemicu keputusan adaptasi.

- Jika pemain `aggressive`, enemy dapat beralih ke perilaku defensif, misalnya mencari cover dan menghindari duel terbuka.
- Jika pemain `explorer`, game dapat menambah `reward` di area samping agar eksplorasi terasa lebih bernilai.
- Jika pemain `low skill`, game dapat menurunkan `enemy damage` agar tantangan tetap dapat dihadapi.

Secara desain, adaptation policy membantu menjaga keseimbangan antara kesulitan, imbalan, dan pengalaman pemain.

Aturan ini juga menjadi jembatan antara data pemain dan perilaku NPC, karena hasil model diterjemahkan menjadi state, action, atau parameter gameplay yang dapat dieksekusi sistem.

Sebelum lanjut, mahasiswa perlu memahami bahwa adaptation policy bukan sekadar label pemain, melainkan keputusan adaptasi yang mengubah pengalaman bermain.

### Inti yang Harus Ditekankan

- **Player model** menjawab "player seperti apa", sedangkan **adaptation policy** menjawab "game harus menyesuaikan apa".
- Adaptation policy memetakan hasil model ke perubahan gameplay, misalnya perilaku enemy, reward, atau damage.
- Model pemain tidak langsung mengubah game; policy yang menentukan tindakan adaptasi.

### Transisi ke Slide Berikutnya

Setelah memahami peran adaptation policy, kita akan membandingkan player model dan adaptation policy secara lebih eksplisit pada slide berikutnya.

---

## Slide 045 - Player Model vs Adaptation Policy

### Narasi

Pada slide ini, kita memisahkan dua lapisan penting dalam sistem adaptif: **player model** dan **adaptation policy**. Pemisahan ini penting karena banyak mahasiswa cenderung menganggap profil pemain langsung mengubah game. Padahal, yang mengubah gameplay adalah kebijakan adaptasi, bukan profilnya sendiri.

**Player model** adalah data dan interpretasi tentang pemain. Model ini biasanya dibangun dari observasi perilaku, lalu diringkas menjadi state yang dapat dibaca oleh sistem. Contoh sederhana:

```text
Skill = Medium
Style = Explorer
Risk = Low
```

Variabel seperti `skill`, `style`, dan `risk` tidak otomatis mengubah level atau musuh. Mereka hanya menyatakan: pemain sedang berada pada kondisi tertentu.

**Adaptation policy** adalah aturan keputusan yang menerjemahkan player model menjadi tindakan. Jika model menyatakan pemain adalah explorer dengan risiko rendah, policy dapat memilih tindakan seperti:

```text
Tambahkan optional reward
Kurangi enemy rush
Berikan clue ke area rahasia
```

Di sinilah perubahan gameplay terjadi. Policy menentukan apakah game memberi reward, mengubah tekanan musuh, atau menampilkan petunjuk.

Perbedaan konseptualnya dapat diringkas sebagai berikut:

- **Player model**: menjawab "pemain seperti apa?"
- **Adaptation policy**: menjawab "game harus melakukan apa?"

Dengan kata lain, player model adalah input interpretatif, sedangkan adaptation policy adalah mekanisme keputusan. Tanpa player model, policy tidak memiliki dasar personal. Tanpa adaptation policy, player model hanya menjadi profil yang tidak berdampak pada pengalaman bermain.

Dalam implementasi, pola ini membantu menjaga desain tetap rapi. Sistem tidak perlu langsung mengubah `enemy rush` setiap kali pemain gagal. Sistem cukup memperbarui `risk` atau `skill`, lalu policy memutuskan apakah perlu mengurangi tekanan, memberi `clue`, atau menambahkan `optional reward`. Pendekatan ini membuat adaptasi lebih terukur dan mudah diuji.

Sebelum lanjut, mahasiswa perlu memahami bahwa **player model tidak langsung mengubah game**. Yang menentukan perubahan gameplay adalah **adaptation policy**. Pemahaman ini menjadi dasar untuk membahas di mana saja adaptasi dapat diterapkan.

### Inti yang Harus Ditekankan

- **Player model** adalah representasi data dan interpretasi tentang pemain, misalnya `skill`, `style`, dan `risk`.
- **Adaptation policy** adalah aturan keputusan yang mengubah player model menjadi tindakan gameplay.
- Player model tidak langsung mengubah game; adaptation policy yang menentukan perubahan gameplay.

### Transisi ke Slide Berikutnya

Setelah memahami bahwa player model dan adaptation policy adalah dua lapisan yang berbeda, kita akan melihat jenis adaptasi yang dapat diterapkan pada sistem game.

---

## Slide 046 - Jenis Adaptasi

### Narasi

Pada slide ini kita memetakan **di mana adaptasi dapat diterapkan** dalam game. Setelah player model menghasilkan interpretasi dan adaptation policy memilih perubahan, langkah berikutnya adalah menentukan lapisan sistem yang akan diubah. Adaptasi tidak selalu berarti menaikkan atau menurunkan difficulty secara global; ia bisa menyentuh perilaku NPC, lingkungan, bantuan pemain, atau sumber daya gameplay.

```text
Enemy AI
├── agresivitas
├── taktik
├── jumlah
└── tipe enemy

Level / PCG
├── layout
├── item placement
├── enemy placement
└── reward

Guidance
├── hint
├── objective marker
└── tutorial prompt

Resource
├── health drop
├── ammo drop
└── power-up
```

Pohon ini menunjukkan empat kanal utama. Masing-masing kanal memiliki efek berbeda terhadap pengalaman pemain, sehingga adaptation policy harus memilih kanal yang paling sesuai dengan tujuan desain.

- **Enemy AI** adalah adaptasi pada perilaku lawan. Parameter seperti `agresivitas`, `taktik`, `jumlah`, dan `tipe enemy` dapat mengubah cara NPC mengejar, menyerang, mundur, atau bekerja sama. Dalam implementasi, perubahan ini sering terlihat pada state machine, behavior tree, pathfinding, steering, atau parameter `NavMeshAgent` di Unity.

- **Level / PCG** adalah adaptasi pada lingkungan permainan. `layout`, `item placement`, `enemy placement`, dan `reward` menentukan seberapa mudah pemain menemukan jalur, menghadapi bahaya, atau memperoleh imbalan. Kanal ini cocok untuk menyesuaikan tantangan tanpa mengubah aturan dasar game.

- **Guidance** adalah adaptasi pada dukungan navigasi dan pembelajaran. `hint`, `objective marker`, dan `tutorial prompt` membantu pemain memahami tujuan, mengurangi kebingungan, atau mempercepat pemahaman mekanisme. Kanal ini lebih memengaruhi kognisi pemain daripada kekuatan lawan.

- **Resource** adalah adaptasi pada dukungan gameplay. `health drop`, `ammo drop`, dan `power-up` dapat membuat permainan terasa lebih aman atau lebih menantang. Perubahan di sini sering terasa langsung karena memengaruhi kelangsungan hidup dan kemampuan pemain.

Yang perlu dipahami sebelum lanjut adalah bahwa keempat kanal ini bukan pengganti adaptation policy. Player model memberi gambaran tentang pemain, adaptation policy melakukan decision making adaptasi, dan slide ini menunjukkan **target perubahan** yang bisa dipilih. Dengan memahami kanal-kanal ini, mahasiswa dapat melihat bahwa adaptasi game bersifat berlapis dan dapat dikombinasikan secara selektif.

### Inti yang Harus Ditekankan

- Adaptasi dapat dilakukan pada **Enemy AI**, **Level / PCG**, **Guidance**, dan **Resource**.
- Setiap kanal memengaruhi pengalaman pemain dengan cara berbeda: perilaku lawan, lingkungan, bantuan navigasi, atau sumber daya.
- Adaptasi bukan satu parameter difficulty, melainkan kombinasi target yang dipilih oleh adaptation policy.
- Mahasiswa perlu membedakan antara **data pemain**, **keputusan adaptasi**, dan **lokasi perubahan gameplay**.

### Transisi ke Slide Berikutnya

Setelah mengetahui di mana adaptasi dapat diterapkan, langkah berikutnya adalah melihat bagaimana nilai skill pemain diterjemahkan menjadi perubahan konkret pada kanal-kanal tersebut.

---

## Slide 047 - Adaptasi Berdasarkan Skill

### Narasi

Dalam konteks player modeling, **skill** menjadi salah satu sinyal penting untuk menyesuaikan pengalaman bermain. Intuisinya sederhana: pemain yang masih belajar perlu bantuan agar tidak frustrasi, sedangkan pemain yang sudah mahir perlu tantangan agar tetap terlibat.

```text
Low Skill:
enemy damage turun
health drop naik
hint lebih sering

Medium Skill:
difficulty normal

High Skill:
enemy lebih agresif
elite enemy muncul
resource lebih terbatas
```

Pada kondisi `Low Skill`, sistem dapat menurunkan `enemy damage`, menaikkan `health drop`, dan menampilkan `hint` lebih sering. Efeknya, pemain mendapat lebih banyak kesempatan untuk memahami pola serangan, posisi aman, dan cara menyelesaikan masalah.

Pada kondisi `Medium Skill`, game mempertahankan `difficulty normal`. Ini menjadi baseline yang seimbang: tantangan cukup untuk menjaga ketegangan, tetapi tidak terlalu berat sehingga pemain masih dapat berkembang.

Pada kondisi `High Skill`, sistem dapat membuat musuh lebih agresif, memunculkan `elite enemy`, dan membatasi `resource`. Dengan cara ini, pemain ahli tetap perlu membaca situasi, mengelola risiko, dan mengambil keputusan yang lebih tepat.

Yang penting dipahami, adaptasi ini bukan sekadar menaikkan atau menurunkan angka kesulitan. Tujuannya adalah menjaga **fairness**: pemain merasa tantangan sesuai kemampuannya, bukan merasa game sengaja menyulitkan atau terlalu mudah.

Sebelum lanjut, mahasiswa perlu menangkap tiga hal utama:

- **Skill** menjadi sinyal untuk memilih tingkat kesulitan.
- Parameter yang diubah biasanya berupa `enemy damage`, `health drop`, `hint`, `aggressiveness`, `elite enemy`, dan `resource`.
- Hasil yang diharapkan adalah pengalaman bermain yang tetap menantang, membantu, dan adil.

### Inti yang Harus Ditekankan

- **Adaptasi berdasarkan skill** menyesuaikan tekanan game dengan kemampuan pemain.
- `Low Skill` cenderung mendapat bantuan lebih banyak, `Medium Skill` mendapat baseline normal, dan `High Skill` mendapat tantangan lebih tinggi.
- Tujuan akhirnya adalah menjaga **fairness**, bukan hanya mengubah angka kesulitan.

### Transisi ke Slide Berikutnya

Setelah melihat bagaimana skill memengaruhi tingkat kesulitan, langkah berikutnya adalah melihat bagaimana gaya bermain pemain memengaruhi jenis tantangan yang diberikan.

---

## Slide 048 - Adaptasi Berdasarkan Play Style

### Narasi

Slide ini membahas **adaptasi berdasarkan play style**, yaitu cara sistem game menyesuaikan tantangan terhadap gaya bermain pemain, bukan hanya tingkat kemahirannya. Pada slide sebelumnya, kita sudah melihat penyesuaian berdasarkan **skill**, misalnya menurunkan damage musuh untuk pemain yang kesulitan atau menambah elite enemy untuk pemain ahli. Fokus di sini bergeser ke **pola perilaku**: bagaimana pemain memilih untuk menyerang, bertahan, atau menjelajah.

Intuisi praktisnya adalah: pemain yang terus menyerang tidak selalu perlu diberi musuh yang lebih kuat, tetapi perlu diberi **counterplay** yang memaksa mereka berpikir. Pemain yang terlalu bertahan tidak selalu perlu diberi musuh lebih agresif, tetapi perlu diberi **motivasi untuk bergerak**. Pemain yang banyak menjelajah perlu diberi **reward eksplorasi** agar gaya bermainnya terasa dihargai. Dengan cara ini, game tetap terasa hidup dan responsif terhadap keputusan pemain.

Contoh pada slide membagi tiga gaya utama:

```text
Aggressive Player:
- Tambahkan enemy yang menjaga jarak.
- Tambahkan musuh dengan cover.
- Berikan reward untuk combo.

Defensive Player:
- Tambahkan objective yang mendorong bergerak.
- Gunakan enemy flanker.
- Berikan reward untuk bertahan tanpa damage.

Explorer Player:
- Tambahkan item rahasia.
- Tambahkan optional room.
- Tambahkan lore atau reward eksplorasi.
```

Untuk **aggressive player**, sistem dapat memperkenalkan musuh yang tidak mudah didekati, misalnya musuh yang menggunakan `cover` atau menjaga jarak. Tujuannya bukan membuat pemain kalah, tetapi mengurangi efektivitas serangan buta. Pada saat yang sama, `reward` untuk `combo` tetap diberikan agar gaya agresif yang terukur tetap dihargai. Ini penting agar pemain tidak merasa gaya bermainnya dihukum, melainkan ditantang untuk lebih presisi.

Untuk **defensive player**, masalah utamanya adalah pemain bisa bertahan terlalu lama dan membuat tempo permainan melambat. Solusinya adalah menambahkan `objective` yang mendorong pemain bergerak, misalnya target yang harus dicapai atau posisi yang harus diamankan. Musuh `flanker` juga berguna karena memaksa pemain memperhatikan sisi lain, bukan hanya posisi aman. `Reward` untuk bertahan tanpa damage tetap penting agar pemain yang bermain hati-hati tidak merasa dirugikan.

Untuk **explorer player**, adaptasi berfokus pada **konten dunia**. Menambahkan `item rahasia`, `optional room`, atau `lore` membuat pemain yang mencari-cari merasa usahanya berbuah. Ini juga mendukung desain dunia yang lebih kaya, karena pemain yang berbeda dapat menemukan nilai berbeda dari lingkungan yang sama. Dalam konteks perilaku NPC dan lingkungan, ini berarti game tidak hanya menyesuaikan parameter kesulitan, tetapi juga menyesuaikan **apa yang tersedia** dan **apa yang dihargai**.

Yang perlu dipahami mahasiswa adalah bahwa adaptasi berdasarkan play style bukan sekadar menambah atau mengurangi angka. Ia melibatkan **klasifikasi perilaku**, **pilihan counterplay**, dan **desain reward**. Sistem harus mengamati pola pemain, lalu memilih respons yang sesuai: musuh yang menjaga jarak, musuh yang menyergap, target yang memaksa bergerak, atau konten eksplorasi yang memberi imbalan. Jika responsnya salah, pemain bisa merasa game tidak adil atau tidak memahami gaya bermainnya.

### Inti yang Harus Ditekankan

- **Play style** adalah pola perilaku pemain, seperti agresif, defensif, atau eksploratif, yang berbeda dari tingkat skill.
- Adaptasi yang baik memberi **counterplay** dan **reward**, bukan hanya menaikkan atau menurunkan kesulitan.
- Untuk pemain agresif, musuh dapat menggunakan `cover`, menjaga jarak, atau memberi `reward combo`.
- Untuk pemain defensif, gunakan `objective` dan `flanker` agar pemain tetap bergerak, sambil memberi `reward` bertahan.
- Untuk pemain eksploratif, tambahkan `item rahasia`, `optional room`, `lore`, atau reward eksplorasi.

### Transisi ke Slide Berikutnya

Setelah memahami tiga gaya utama secara umum, kita akan masuk lebih dalam ke kasus **aggressive player**, yaitu bagaimana pola serangan yang tinggi dapat direspons dengan perilaku musuh yang lebih spesifik.

---

## Slide 049 - Adaptasi untuk Aggressive Player

### Narasi

Pada bagian ini, kita fokus pada satu kasus adaptasi: pemain yang bermain sangat agresif. Dalam konteks **Game Cerdas**, sistem perlu mengenali pola perilaku pemain, lalu menyesuaikan perilaku NPC atau musuh agar tantangan tetap seimbang.

Indikator yang digunakan dapat dilihat dari beberapa metrik perilaku:

```text
attackFrequency tinggi
closeCombat tinggi
damageDealt tinggi
```

Metrik ini memberi gambaran bahwa pemain sering menyerang, cenderung berada dekat musuh, dan menghasilkan damage besar. Dari sisi **player modeling**, nilai-nilai ini menjadi sinyal bahwa pemain memilih gaya bermain berisiko tinggi dan cepat.

Adaptasi yang diberikan tidak selalu berupa menaikkan statistik musuh secara langsung. Yang lebih penting adalah mengubah **perilaku NPC** agar agresivitas pemain tetap dihargai, tetapi tidak menjadi satu-satunya cara menang.

Beberapa bentuk adaptasi yang dapat dilakukan:

- musuh menggunakan `cover` untuk mengurangi efektivitas serangan jarak dekat,
- musuh menjaga jarak agar pemain tidak selalu bisa langsung menyerang,
- musuh melakukan `flank` untuk memaksa pemain membaca posisi,
- musuh diberi `shield` agar pemain perlu strategi atau timing yang lebih baik,
- sistem tetap memberikan `reward combo` atau `fast kill` agar gaya agresif terasa memuaskan.

Secara teknis, adaptasi ini dapat dipetakan ke sistem **decision making** NPC. Misalnya, jika nilai agresivitas pemain melewati ambang tertentu, perilaku musuh dapat beralih dari mode menyerang langsung ke mode bertahan, menjaga jarak, atau mencari posisi flank. Dalam implementasi sederhana, perubahan ini dapat dikendalikan oleh **state** pada **FSM**, node pada **behavior tree**, atau aturan pada sistem steering.

Intuisi praktisnya adalah: musuh tidak perlu menjadi lebih “kuat” secara buta. Musuh cukup menjadi lebih **responsif** terhadap gaya bermain pemain. Dengan begitu, pemain agresif tetap bisa menang melalui skill, timing, dan eksekusi, tetapi tidak bisa hanya mengandalkan maju terus tanpa strategi.

Tujuan utama adaptasi ini adalah menjaga tiga hal:

- **gameplay tetap menantang**,
- **gaya agresif tetap dihargai**,
- pemain tidak merasa menang hanya karena terus menyerang tanpa membaca situasi.

Sebelum lanjut, mahasiswa perlu memahami bahwa adaptasi untuk pemain agresif bukan berarti menghukum agresivitas. Justru sistem harus memberi counterplay yang adil, sekaligus mempertahankan reward untuk pemain yang mampu mengeksekusi serangan dengan cepat dan tepat.

### Inti yang Harus Ditekankan

- Agresivitas pemain dapat dideteksi dari metrik seperti `attackFrequency`, `closeCombat`, dan `damageDealt`.
- Adaptasi terbaik bukan selalu menaikkan damage musuh, tetapi mengubah perilaku NPC: `cover`, menjaga jarak, `flank`, `shield`, dan `reward combo`.
- Tujuan adaptasi adalah menjaga tantangan, menghargai gaya bermain agresif, dan mencegah strategi “maju terus” menjadi satu-satunya cara menang.

### Transisi ke Slide Berikutnya

Setelah memahami bagaimana sistem menyesuaikan diri terhadap pemain agresif, langkah berikutnya adalah melihat kasus sebaliknya: bagaimana adaptasi dilakukan ketika pemain bermain lebih defensif dan cenderung menghindari risiko.

---

## Slide 050 - Adaptasi untuk Defensive Player

### Narasi

Setelah membahas pemain agresif, kita beralih ke profil yang sering muncul di game: pemain yang bermain hati-hati. Pemain seperti ini tidak selalu lemah; ia mungkin sedang menghitung risiko, menunggu momen, atau mengandalkan posisi. Karena itu, sistem tidak boleh langsung menganggapnya sebagai pemain yang perlu "dihukum" dengan musuh lebih kuat.

Sinyal utama biasanya terlihat dari metrik perilaku:

```text
coverUsage tinggi
distanceToEnemy tinggi
damageTaken rendah
progress lambat
```

`coverUsage` menunjukkan pemain sering berlindung. `distanceToEnemy` menunjukkan ia menjaga jarak. `damageTaken rendah` menunjukkan ia berhasil menghindari kontak. `progress lambat` menunjukkan tempo permainan menurun. Keempat sinyal ini perlu dibaca bersama, bukan sebagai label tunggal.

Intuisi praktisnya: jika pemain terus bertahan, tekanan yang efektif bukan sekadar menambah damage musuh. Yang lebih baik adalah mengubah bentuk tekanan. Sistem dapat membuat pemain harus bergerak, membuka posisi, atau mengambil keputusan baru. Dengan cara ini, gaya defensif tetap dihargai, tetapi permainan tidak menjadi statis.

Adaptasi yang bisa dilakukan antara lain:

- **Objective mendorong movement**, misalnya target yang harus dijangkau, musuh yang muncul di sisi lain, atau timer yang membuat pemain tidak bisa terus menunggu.
- **Enemy mencoba flank**, sehingga pendekatan tidak selalu frontal dan pemain harus memperhatikan sudut serangan.
- **Enemy memaksa reposition**, misalnya dengan menutup jalur, menggunakan area denial, atau memaksa pemain keluar dari cover.
- **Reward clean play**, seperti bonus untuk menyelesaikan area dengan damage rendah atau posisi yang tepat.
- **Tidak selalu menaikkan damage enemy**, karena menaikkan stat secara langsung bisa terasa tidak adil dan tidak melatih pemain.

Dari sisi implementasi, perilaku ini dapat diatur oleh state machine atau behavior tree. Agent musuh dapat memilih state `flank`, `pressure`, atau `reposition` berdasarkan metrik pemain. Pathfinding dan steering membantu mencari sudut pendekatan yang masuk akal, bukan hanya jalur terpendek. Hasil yang diharapkan adalah pemain defensif tetap merasa aman, tetapi tetap harus aktif membaca situasi.

Yang harus dipahami mahasiswa sebelum lanjut: adaptasi untuk pemain defensif adalah soal **pacing** dan **keputusan bermakna**, bukan sekadar menaikkan kesulitan. Sistem harus membedakan antara pemain yang hati-hati dan pemain yang terjebak, lalu merespons dengan perubahan perilaku, bukan hanya perubahan angka.

### Inti yang Harus Ditekankan

- Pemain defensif ditandai oleh `coverUsage` tinggi, `distanceToEnemy` tinggi, `damageTaken` rendah, dan `progress` lambat.
- Adaptasi terbaik adalah mendorong movement, flank, dan reposition, bukan selalu menaikkan damage musuh.
- Reward clean play penting agar gaya hati-hati tetap dihargai.
- Tujuan utama adalah menjaga pacing dan membuat defensive play tetap menarik.

### Transisi ke Slide Berikutnya

Setelah memahami cara sistem merespons pemain yang berhati-hati, kita lanjut ke profil lain: pemain yang lebih banyak mengeksplorasi area, mengumpulkan item, dan mencari konten opsional.

---

## Slide 051 - Adaptasi untuk Explorer Player

### Narasi

Slide ini membahas bagaimana **sistem adaptif** merespons pemain yang cenderung **explorer**. Dalam konteks **player modeling**, sistem tidak hanya memantau kemenangan atau kekalahan, tetapi juga membaca pola perilaku yang menunjukkan ketertarikan pada dunia game.

Indikator utama yang dapat digunakan adalah:

```text
explorationRatio tinggi
itemCollection tinggi
optionalRoomVisit tinggi
```

`explorationRatio` menggambarkan seberapa sering pemain meninggalkan jalur utama untuk memeriksa area lain. `itemCollection` menunjukkan kebiasaan mengumpulkan objek, sementara `optionalRoomVisit` menandakan bahwa pemain tertarik pada ruang opsional, cabang peta, atau konten di luar rute inti.

Jika ketiga sinyal ini konsisten, sistem dapat menyimpulkan bahwa pemain sedang mencari pengalaman eksploratif. Adaptasi yang diberikan bukan menaikkan kesulitan secara langsung, tetapi memperkaya dunia dengan konten yang relevan.

Adaptasi untuk **Explorer Player** dapat berupa:

- menambahkan **collectible** di area yang sering dijelajahi,
- membuka **secret room** atau jalur tersembunyi,
- menyisipkan **optional challenge** yang tidak memblokir progres utama,
- memberikan **reward eksplorasi** yang jelas, seperti item atau konten tambahan,
- menambahkan **lore object** yang memperdalam narasi dunia.

Pendekatan ini penting karena eksplorasi hanya terasa bermakna jika pemain mendapat umpan balik. Tanpa reward atau konsekuensi, ruang tambahan hanya menjadi area kosong. Dengan adaptasi, sistem mengubah rasa penasaran menjadi motivasi bermain.

Dari sisi desain, adaptasi ini juga meningkatkan **replayability**. Pemain yang merasa dunia game responsif terhadap gaya mainnya cenderung ingin kembali untuk menemukan konten lain. Di sisi sistem, ini menunjukkan bahwa **player model** tidak hanya digunakan untuk penyesuaian kesulitan, tetapi juga untuk personalisasi konten, penempatan objek, dan pengalaman naratif.

Sebelum lanjut, mahasiswa perlu memahami bahwa adaptasi untuk explorer berbeda dengan adaptasi untuk pemain defensif. Fokusnya bukan membuat pemain lebih agresif, melainkan menghargai gaya bermain yang mencari, mengumpulkan, dan memahami dunia.

### Inti yang Harus Ditekankan

- **Explorer Player** ditandai oleh `explorationRatio`, `itemCollection`, dan `optionalRoomVisit` yang tinggi.
- Adaptasi utama adalah memperkaya konten: collectible, secret room, optional challenge, reward, dan lore object.
- Tujuannya membuat eksplorasi terasa bermakna dan meningkatkan **replayability**.
- **Player model** di sini berfungsi untuk personalisasi pengalaman, bukan hanya menaikkan atau menurunkan kesulitan.

### Transisi ke Slide Berikutnya

Jika explorer adalah pemain yang ingin menemukan lebih banyak, maka speedrunner adalah pemain yang ingin menyelesaikan lebih cepat. Pada slide berikutnya, kita akan melihat bagaimana sistem adaptif merespons gaya bermain cepat tanpa memaksa pemain melakukan eksplorasi.

---

## Slide 052 - Adaptasi untuk Speedrunner

### Narasi

Pada slide ini kita melihat bagaimana **sistem adaptif** merespons pemain yang bermain cepat. Berbeda dengan pemain eksploratif, **speedrunner** biasanya tidak menghabiskan waktu untuk mencari item atau ruangan opsional. Sinyal utamanya adalah nilai `completionTime` yang rendah, `exploration` yang rendah, dan `objective focus` yang tinggi.

```text
completionTime rendah
exploration rendah
objective focus tinggi
```

Dari sisi perilaku, pemain seperti ini cenderung ingin mencapai tujuan utama secepat mungkin. Karena itu, game tidak boleh memperlambat alurnya dengan konten yang tidak relevan. Adaptasi yang tepat adalah membuat sistem game mendukung gaya bermain cepat, bukan menghakimi pemain karena tidak mengeksplorasi.

Adaptasi untuk **speedrunner** dapat dilakukan melalui beberapa tindakan:

- tampilkan **`timer`** agar pemain sadar terhadap waktu dan progresnya;
- beri **`rank`** sebagai umpan balik performa, misalnya kategori waktu atau pencapaian;
- sediakan **`shortcut challenge`** yang memberi tantangan tanpa memaksa pemain meninggalkan jalur utama;
- kurangi **`dialog panjang`** atau cutscene yang mengganggu ritme;
- tambahkan **`reward waktu cepat`** agar kecepatan terasa dihargai.

Secara teknis, variabel-variabel seperti `completionTime`, `exploration`, dan `objective focus` dapat menjadi input model pemain. Sistem kemudian memilih kebijakan adaptasi yang sesuai. Dalam konteks game, ini bisa berupa penyesuaian UI, panjang dialog, spawn tantangan opsional, atau pemberian reward. Intinya, adaptasi ini mengubah perilaku sistem game agar lebih responsif terhadap gaya bermain pemain.

Yang perlu dipahami mahasiswa adalah bahwa **speedrunner** bukan sekadar pemain yang cepat. Ia adalah pemain dengan preferensi tujuan yang kuat dan toleransi rendah terhadap hambatan. Karena itu, adaptasi yang baik harus menjaga kecepatan, memberi umpan balik, dan memberikan penghargaan terhadap efisiensi waktu.

### Inti yang Harus Ditekankan

- Sinyal utama speedrunner adalah `completionTime` rendah, `exploration` rendah, dan `objective focus` tinggi.
- Adaptasi harus mendukung kecepatan, bukan memaksa eksplorasi atau menambah hambatan.
- Umpan balik seperti `timer`, `rank`, dan `reward waktu cepat` membuat gaya speed play terasa dihargai.

### Transisi ke Slide Berikutnya

Setelah kita melihat contoh adaptasi untuk satu tipe pemain, langkah berikutnya adalah menyusun aturan adaptasi secara lebih sistematis. Pada slide berikutnya, kita akan melihat bagaimana berbagai tipe pemain dan tindakan adaptasinya dapat dirangkum dalam policy table.

---

## Slide 053 - Policy Table

### Narasi

Slide ini memperkenalkan **Policy Table** sebagai cara paling praktis untuk merangkum hasil **player modeling** menjadi keputusan adaptasi. Intuisinya sederhana: setelah sistem mengenali tipe pemain, game perlu tahu tindakan apa yang harus dilakukan. Policy table menjawab pertanyaan itu dalam bentuk tabel, bukan langsung dalam algoritma.

Kolom pertama berisi **Player Model**, yaitu label perilaku pemain yang sudah diestimasi. Label ini bisa berupa `Low Skill`, `High Skill`, `Aggressive`, `Defensive`, `Explorer`, atau `Speedrunner`. Kolom kedua berisi **Adaptasi**, yaitu perubahan konkret yang diberikan game, misalnya parameter musuh, reward, spawn, atau elemen tantangan.

Secara konseptual, tabel ini tidak perlu dibaca sebagai daftar panjang. Ia menunjukkan pola bahwa adaptasi bisa berupa **bantuan**, **peningkatan tantangan**, **reward**, atau **perubahan perilaku NPC**. Misalnya, pemain yang kesulitan mendapat dukungan, pemain yang mahir mendapat tantangan lebih, dan pemain dengan gaya tertentu mendapat respons yang sesuai.

Dalam konteks **Game AI**, policy table berperan sebagai lapisan kebijakan. Ia belum menentukan bagaimana aturan dieksekusi, tetapi menentukan apa yang harus dilakukan ketika suatu player model terdeteksi. Lapisan ini kemudian dapat dihubungkan ke sistem seperti **rule-based adaptation**, **FSM**, **behavior tree**, atau sistem parameter musuh.

Untuk desain game, tabel ini sangat berguna karena membuat adaptasi menjadi eksplisit. Desainer dan programmer dapat memeriksa apakah setiap tipe pemain mendapat respons yang masuk akal. Tabel juga membantu prototipe awal karena mudah diubah, diuji, dan dibandingkan sebelum dijadikan kode yang lebih kompleks.

Sebelum lanjut, mahasiswa perlu memahami bahwa **player model** adalah input, **adaptasi** adalah output, dan policy table adalah bentuk deklaratif dari kebijakan. Dengan kata lain, slide ini menjawab “apa yang harus dilakukan game?”, sedangkan slide berikutnya akan membahas “bagaimana aturan itu dijalankan?”.

### Inti yang Harus Ditekankan

- **Policy table** adalah tabel kebijakan yang memetakan **player model** ke **adaptasi** game.
- Tabel ini membantu desain dan implementasi awal karena adaptasi menjadi eksplisit, mudah diuji, dan tidak langsung terikat pada satu algoritma.
- Dalam **Game AI**, tabel ini berfungsi sebagai lapisan kebijakan yang dapat dihubungkan ke sistem keputusan seperti rule-based adaptation, FSM, atau behavior tree.

### Transisi ke Slide Berikutnya

Setelah kita tahu bentuk kebijakan adaptasinya, langkah berikutnya adalah melihat bagaimana tabel ini diubah menjadi aturan yang dapat dieksekusi oleh sistem game.

---

## Slide 054 - Rule-Based Adaptation

### Narasi

**Rule-Based Adaptation** adalah pendekatan paling sederhana untuk membuat game menyesuaikan diri dengan pemain. Intuisinya, game membaca profil pemain, lalu menjalankan seperangkat aturan berbentuk **if-then**. Jika kondisi tertentu terpenuhi, game melakukan satu tindakan adaptasi tertentu.

Pendekatan ini sangat cocok untuk memahami dasar **adaptive game** karena logikanya transparan. Mahasiswa dapat melihat langsung hubungan antara **player model** dan perubahan perilaku game. Misalnya, jika pemain dianggap kurang terampil, game memberikan bantuan. Jika pemain sering menyerang, game menyiapkan musuh yang lebih menantang.

Pseudocode pada slide menunjukkan tiga aturan sederhana:

```text
if skillLevel == Low:
    IncreaseHealthDrop()

if playStyle == Aggressive:
    EnableFlankerEnemy()

if playStyle == Explorer:
    SpawnSecretReward()
```

Variabel `skillLevel` dan `playStyle` biasanya merupakan hasil dari **player model**. Nilai-nilai ini menggambarkan kondisi pemain pada saat tertentu. Setiap blok `if` memeriksa satu aspek perilaku atau kemampuan pemain. Jika kondisi bernilai benar, sistem memanggil fungsi adaptasi yang sesuai.

Urutan eksekusinya cukup sederhana:

1. Sistem memeriksa apakah `skillLevel == Low`.
2. Jika benar, sistem memanggil `IncreaseHealthDrop()`.
3. Sistem kemudian memeriksa apakah `playStyle == Aggressive`.
4. Jika benar, sistem memanggil `EnableFlankerEnemy()`.
5. Sistem memeriksa apakah `playStyle == Explorer`.
6. Jika benar, sistem memanggil `SpawnSecretReward()`.

Perlu diperhatikan bahwa aturan-aturan ini tidak harus saling eksklusif. Dalam implementasi sederhana, beberapa aturan dapat aktif bersamaan. Misalnya, pemain yang agresif sekaligus penjelajah dapat memicu `EnableFlankerEnemy()` dan `SpawnSecretReward()` pada saat yang sama.

Dalam konteks game, pendekatan ini dapat dilihat sebagai lapisan keputusan sederhana. **Player model** menghasilkan state pemain, aturan memetakan state tersebut ke action, dan action mengubah lingkungan game. Pola ini mirip dengan cara kerja sistem keputusan sederhana pada NPC, di mana kondisi tertentu memicu respons tertentu.

Kelebihan pendekatan ini adalah:

- mudah dibuat,
- mudah dipahami,
- mudah diuji,
- cocok untuk praktikum,
- transparan bagi desainer dan programmer.

Namun, pendekatan ini juga memiliki kekurangan:

- bisa kaku,
- sulit menangani kombinasi perilaku yang kompleks,
- membutuhkan banyak aturan jika game memiliki banyak variabel,
- perubahan kecil pada aturan dapat menghasilkan perubahan perilaku yang tajam.

Karena itu, **Rule-Based Adaptation** sangat baik sebagai langkah awal. Mahasiswa perlu memahami bahwa pendekatan ini bukan selalu yang paling canggih, tetapi sangat berguna untuk membangun dasar sistem adaptif yang dapat dijelaskan, diuji, dan dikembangkan.

### Inti yang Harus Ditekankan

- **Rule-Based Adaptation** menggunakan aturan `if-then` untuk memetakan kondisi pemain ke tindakan adaptasi.
- Variabel seperti `skillLevel` dan `playStyle` berasal dari **player model**, sedangkan fungsi seperti `IncreaseHealthDrop()` adalah bentuk **action** game.
- Pendekatan ini mudah dibuat dan mudah dipahami, tetapi dapat menjadi kaku dan sulit diperluas jika aturan semakin banyak.

### Transisi ke Slide Berikutnya

Setelah memahami aturan biner yang sederhana, kita akan melihat cara yang lebih halus dengan menggunakan skor, sehingga adaptasi tidak hanya terjadi secara ya atau tidak, tetapi dapat dipengaruhi oleh bobot perilaku pemain.

---

## Slide 055 - Score-Based Adaptation

### Narasi

Pada slide ini kita beralih dari **adaptasi berbasis aturan** ke **adaptasi berbasis skor**. Pada pendekatan aturan, keputusan biasanya bersifat biner: jika kondisi terpenuhi, maka perilaku tertentu diaktifkan. Pada pendekatan skor, sistem menilai perilaku pemain dengan nilai numerik, lalu menggunakan nilai tersebut untuk mengatur peluang atau intensitas perilaku NPC.

Artinya, adaptasi tidak lagi hanya berupa “ya” atau “tidak”, tetapi bisa menjadi lebih bertahap. Misalnya, NPC tidak langsung selalu melakukan flanker, tetapi peluangnya meningkat seiring dengan meningkatnya skor agresivitas pemain.

Contoh pertamanya adalah peluang NPC melakukan flanker:

```text
flankerChance =
    aggressiveScore * 0.5
    + highSkillScore * 0.5
```

Pada rumus ini, `flankerChance` dihitung dari dua sumber nilai, yaitu `aggressiveScore` dan `highSkillScore`. Bobot `0.5` menunjukkan bahwa kedua skor tersebut memberikan kontribusi yang seimbang. Jika `aggressiveScore` tinggi, peluang flanker meningkat. Jika `highSkillScore` juga tinggi, peluangnya meningkat lagi.

Kelebihan utama dari pendekatan ini adalah perilakunya lebih halus. Sistem tidak perlu langsung mengubah mode NPC secara mendadak. Sebaliknya, perubahan kecil pada skor pemain dapat menghasilkan perubahan kecil pada perilaku NPC. Ini membuat adaptasi terasa lebih natural dan tidak terlalu “melompat”.

Contoh kedua adalah peluang bantuan berupa drop kesehatan:

```text
healthDropChance =
    baseDropChance
    + (1 - skillScore) * assistBonus
```

Pada rumus ini, `baseDropChance` adalah peluang dasar untuk memberikan bantuan. Nilai `(1 - skillScore)` bekerja sebagai pembalik: semakin rendah `skillScore`, semakin besar nilai `(1 - skillScore)`. Akibatnya, pemain dengan skill rendah akan menerima bantuan lebih besar. Sebaliknya, pemain dengan skill tinggi akan menerima bantuan lebih sedikit.

Yang perlu dipahami mahasiswa adalah bahwa **score-based adaptation** mengubah keputusan adaptif menjadi perhitungan berbasis nilai. Skor-skor seperti `aggressiveScore`, `highSkillScore`, dan `skillScore` menjadi representasi perilaku pemain yang bisa digabungkan dengan bobot. Dengan cara ini, sistem dapat menyesuaikan tantangan atau bantuan secara lebih proporsional, bukan hanya berdasarkan satu aturan sederhana.

### Inti yang Harus Ditekankan

- **Score-based adaptation** menggunakan nilai numerik untuk menghasilkan perilaku adaptif yang lebih halus daripada aturan biner.
- `flankerChance` meningkat ketika `aggressiveScore` dan `highSkillScore` tinggi, sehingga NPC bisa lebih sering melakukan flanker secara bertahap.
- `healthDropChance` menggunakan `(1 - skillScore)` agar pemain dengan skill rendah menerima bantuan lebih besar.
- Bobot seperti `0.5` dan nilai `assistBonus` menjadi parameter desain yang dapat disetel untuk mengatur seberapa kuat adaptasi terjadi.

### Transisi ke Slide Berikutnya

Setelah memahami bahwa skor dapat membuat adaptasi lebih halus, kita perlu memperhatikan satu hal penting: skor tidak boleh berubah terlalu cepat. Jika sistem langsung mengubah profil pemain dari satu kejadian singkat, adaptasi bisa menjadi tidak stabil.

---

## Slide 056 - Adaptasi Jangan Terlalu Cepat

### Narasi

Sama seperti DDA, **player modeling** perlu stabil. Sistem adaptif harus membaca gaya bermain pemain, tetapi tidak boleh bereaksi terlalu cepat terhadap satu kejadian singkat. Jika profil pemain berubah hanya karena momen sesaat, perilaku NPC atau tingkat kesulitan bisa terasa melompat tanpa alasan yang masuk akal.

Contoh masalahnya adalah:

```text
Player menyerang terus selama 10 detik
langsung dianggap aggressive.
```

Sepuluh detik serangan bisa saja hanya terjadi karena satu pertempuran, satu fase tutorial, atau satu momen frustrasi. Jika sistem langsung menaikkan `aggressiveScore` dan mengubah perilaku NPC, pemain akan merasa game bereaksi berlebihan terhadap satu tindakan sesaat.

Solusinya adalah membuat estimasi profil lebih stabil. Beberapa cara yang perlu dipahami adalah:

- gunakan **evaluation window**, yaitu rentang waktu atau jumlah kejadian yang diamati sebelum profil diperbarui;
- gunakan **moving average** agar nilai seperti `aggressiveScore` berubah secara halus, bukan melompat;
- tunggu data cukup sebelum mengubah profil;
- gunakan **confidence** untuk menilai apakah bukti perilaku sudah cukup kuat;
- jangan mengubah profil terlalu sering.

Intuisi praktisnya sederhana: **player profile** harus menggambarkan pola, bukan satu snapshot. Misalnya, pemain yang menyerang terus selama beberapa menit dalam banyak situasi lebih layak dianggap agresif daripada pemain yang hanya menyerang cepat selama sepuluh detik. Dengan smoothing dan confidence, sistem dapat membedakan antara perilaku sementara dan preferensi yang konsisten.

Hal ini penting sebelum masuk ke desain adaptasi yang lebih lanjut. Jika adaptasi terlalu cepat, NPC bisa berubah-ubah, pemain kehilangan rasa kendali, dan game terasa tidak natural. Jadi, mahasiswa perlu memahami bahwa kecepatan adaptasi harus dikendalikan dengan mekanisme estimasi yang stabil.

### Inti yang Harus Ditekankan

- **Player modeling** harus stabil dan tidak boleh bereaksi berlebihan terhadap satu kejadian singkat.
- Gunakan **evaluation window**, **moving average**, data yang cukup, dan **confidence** agar profil pemain merepresentasikan pola.
- Profil yang tidak stabil akan membuat perilaku NPC atau adaptasi game terasa melompat dan tidak natural.

### Transisi ke Slide Berikutnya

Setelah memahami bahwa adaptasi tidak boleh terlalu cepat, langkah berikutnya adalah memastikan adaptasi juga tidak terlalu kuat, agar game tetap terasa mendukung pemain, bukan memaksa gaya bermainnya.

---

## Slide 057 - Adaptasi Jangan Terlalu Kuat

### Narasi

Pada slide ini kita membahas batas kedua dari adaptasi berbasis `player model`: **intensitas adaptasi**. Setelah sistem dapat mengenali pola pemain, bukan berarti sistem boleh mengubah pengalaman secara drastis. Adaptasi yang terlalu kuat dapat membuat pemain merasa **dikendalikan**, bukan dibantu.

Masalahnya muncul ketika game mengubah aturan atau tekanan permainan terlalu jauh hanya karena satu sinyal `player model`. Akibatnya:

- pemain merasa **gaya bermainnya dihukum**,
- game terasa **tidak natural**,
- pemain kehilangan `agency`,
- keputusan pemain tidak lagi terasa bermakna.

Contoh buruknya dapat dilihat pada alur berikut:

```text
Player suka eksplorasi
    ↓
game mengunci semua objective utama
dan memaksa eksplorasi terus
```

Dalam contoh ini, `player model` mungkin benar bahwa pemain menikmati eksplorasi. Namun respons game terlalu ekstrem: semua `objective` utama dikunci dan pemain dipaksa terus mengeksplorasi. Padahal eksplorasi seharusnya menjadi **pilihan**, bukan paksaan.

Prinsip yang harus dipahami mahasiswa adalah **adaptasi harus mendukung, bukan memaksa**. Sistem dapat memberikan `nudge`, menyesuaikan tantangan, atau membuka opsi yang sesuai dengan gaya bermain pemain. Tetapi sistem tetap harus mempertahankan ruang keputusan pemain. Dalam implementasi, ini berarti membatasi seberapa besar perubahan parameter game dan menjaga konsistensi dengan tujuan pemain.

Sebelum lanjut ke konsep berikutnya, mahasiswa perlu mengingat bahwa `player model` bukan perintah mutlak. Data `player model` adalah masukan untuk menyesuaikan perilaku game, tetapi desain adaptasi harus tetap menjaga pengalaman bermain tetap adil, natural, dan memberikan `agency` kepada pemain.

### Inti yang Harus Ditekankan

- **Adaptasi terlalu kuat** membuat pemain merasa dikendalikan dan kehilangan `agency`.
- `player model` boleh memengaruhi perilaku game, tetapi tidak boleh menghapus pilihan pemain.
- Adaptasi yang baik bersifat **mendukung**, **terbatas**, dan tetap menjaga pengalaman bermain terasa natural.

### Transisi ke Slide Berikutnya

Setelah memahami bahwa adaptasi harus kuat secukupnya, kita lanjut ke konsep **Adaptive Game AI**, yaitu bagaimana sistem adaptif menggunakan `player model` untuk menyesuaikan perilaku game.

---

## Slide 058 - Adaptive Game AI

### Narasi

Slide ini menjelaskan **Adaptive Game AI** sebagai konsep payung. Intinya, sistem ini tidak hanya bereaksi terhadap input pemain saat ini, tetapi juga menyesuaikan perilaku berdasarkan **player model** yang telah dibangun. Dengan kata lain, game mengamati pola pemain, menyimpan ringkasan perilaku tersebut, lalu menggunakan ringkasan itu untuk mengubah tantangan, bantuan, atau isi permainan.

Kita dapat membayangkannya sebagai alur sederhana:

```text
Perilaku player
   ↓
player_model
   ↓
Adaptive Game AI
   ↓
respons game yang berbeda
```

Pada alur ini, **player modeling** berfungsi sebagai sumber data. Data tersebut bisa berupa gaya bermain, tingkat kesulitan, frekuensi penggunaan strategi tertentu, atau kebutuhan pemain terhadap bantuan. Namun, data ini belum cukup jika tidak ada sistem yang membacanya. Di sinilah **Adaptive Game AI** berperan: ia mengubah data menjadi keputusan yang memengaruhi pengalaman bermain.

Contoh penggunaannya tidak terbatas pada satu komponen. Beberapa bentuk adaptasi yang dapat muncul adalah:

- **enemy** memilih taktik berbeda,
- **NPC companion** memberi bantuan sesuai kebutuhan,
- **game director** mengatur `spawn`,
- **level generator** membuat konten sesuai `style`,
- **tutorial** memberi `hint` sesuai kesulitan player.

Poin penting yang harus dipahami adalah bahwa setiap komponen tersebut dapat membaca bagian yang berbeda dari `player_model`. Misalnya, tutorial mungkin membaca indikator kesulitan, sedangkan game director membaca pola kematian atau tempo permainan. Dengan cara ini, adaptasi tidak perlu dilakukan secara global sekaligus; ia dapat diterapkan secara bertahap pada sistem yang paling relevan.

Adaptasi yang baik juga harus menjaga **agency** pemain. Sistem boleh menyesuaikan tantangan, tetapi tidak boleh membuat pemain merasa dikendalikan atau dihukum karena gaya bermainnya. Jadi, fungsi utama **Adaptive Game AI** adalah membuat game terasa lebih responsif dan personal, bukan memaksa pemain mengikuti satu cara bermain tertentu.

Sebelum lanjut, mahasiswa perlu mengingat tiga hal: **player model** adalah data, **adaptive game AI** adalah pengguna data, dan adaptasi harus tetap berada dalam batas yang mendukung pengalaman bermain. Setelah gambaran umum ini dipahami, kita dapat memperdalam salah satu pengguna utama data player model, yaitu adaptasi pada enemy.

### Inti yang Harus Ditekankan

- **Adaptive Game AI** adalah sistem yang menyesuaikan perilaku berdasarkan **player model**.
- **Player modeling** menyediakan data; **adaptive game AI** menggunakan data tersebut untuk menghasilkan respons game.
- Adaptasi dapat terjadi di banyak lapisan, seperti enemy, NPC companion, game director, level generator, dan tutorial.
- Tujuan adaptasi adalah membuat game lebih responsif dan personal, bukan menghilangkan agency pemain.

### Transisi ke Slide Berikutnya

Setelah memahami gambaran umum **Adaptive Game AI**, kita akan masuk ke contoh yang paling langsung dirasakan pemain, yaitu **Adaptive Enemy AI**, di mana enemy menyesuaikan perilaku terhadap pola bermain player.

---

## Slide 059 - Adaptive Enemy AI

### Narasi

**Adaptive Enemy AI** adalah bentuk adaptasi yang paling langsung dirasakan oleh pemain. Pada slide ini, fokusnya bukan lagi pada konsep umum **Adaptive Game AI**, tetapi pada bagaimana **enemy** dapat menyesuaikan perilaku, jarak, agresi, dan pilihan taktik berdasarkan pola bermain pemain.

Secara intuitif, enemy yang adaptif tidak hanya bereaksi terhadap posisi pemain saat ini. Enemy juga membaca kebiasaan pemain, misalnya apakah pemain sering menyerang dari jarak dekat, sering bersembunyi, sering menghindar, atau sering berada dalam kondisi **low health**. Dari pola tersebut, enemy dapat mengubah strategi yang dianggap paling efektif.

Contoh sederhana dapat dilihat pada blok berikut:

```text
Player sering menyerang jarak dekat:
    enemy menjaga jarak

Player sering bersembunyi:
    enemy mencari dan flank

Player sering lari:
    enemy mencoba intercept

Player sering low health:
    enemy mengurangi aggression
```

Blok ini menunjukkan hubungan antara **player model** dan **tactic** yang dipilih enemy.

- Jika pemain sering menyerang jarak dekat, enemy dapat memilih **maintain distance** agar tidak mudah terkena serangan.
- Jika pemain sering bersembunyi, enemy dapat melakukan **search** dan **flank** untuk memaksa pemain keluar dari posisi aman.
- Jika pemain sering lari, enemy dapat mencoba **intercept** jalur pergerakan pemain.
- Jika pemain sering berada dalam kondisi **low health**, enemy dapat menurunkan `aggression` agar tidak terlalu agresif dan memberi ruang pada dinamika permainan.

Dalam implementasi, adaptasi ini tidak harus selalu menggunakan arsitektur AI yang baru. Adaptasi dapat dilakukan melalui beberapa mekanisme yang sudah umum digunakan dalam game AI.

- `FSM parameter`: mengubah nilai ambang batas atau parameter state, misalnya jarak aman, durasi tunggu, atau level agresi.
- `Behavior Tree condition`: menambahkan kondisi baru pada node, misalnya `playerOftenHides` atau `playerLowHealth`, sehingga cabang perilaku tertentu lebih sering dieksekusi.
- `Utility AI weights`: mengubah bobot aksi berdasarkan player model, sehingga aksi yang lebih sesuai dengan gaya pemain mendapat prioritas lebih tinggi.
- `NavMesh positioning`: memilih posisi di `NavMesh` yang mendukung taktik tertentu, seperti menjaga jarak, menutup jalur, atau melakukan flank.

Hal penting yang harus dipahami mahasiswa adalah bahwa adaptasi pada enemy bukan berarti enemy harus selalu menang atau selalu lebih kuat. Tujuan utamanya adalah membuat perilaku enemy terasa lebih responsif, lebih konsisten, dan lebih sesuai dengan gaya bermain pemain. Dengan cara ini, pemain merasa bahwa enemy “memahami” perilakunya, bukan sekadar bergerak berdasarkan aturan tetap.

Sebelum lanjut, mahasiswa perlu menyadari bahwa adaptasi ini bergantung pada data player model yang cukup. Tanpa data tentang kebiasaan pemain, enemy hanya bisa bereaksi terhadap kondisi saat ini, bukan menyesuaikan diri terhadap pola bermain yang lebih panjang.

### Inti yang Harus Ditekankan

- **Adaptive Enemy AI** membuat enemy menyesuaikan taktik berdasarkan pola bermain pemain.
- Adaptasi dapat berupa perubahan jarak, agresi, pencarian, flank, intercept, atau posisi di `NavMesh`.
- Implementasi dapat dilakukan melalui `FSM parameter`, `Behavior Tree condition`, `Utility AI weights`, atau `NavMesh positioning`.
- Tujuan adaptasi bukan membuat enemy selalu menang, tetapi membuat perilaku enemy lebih responsif dan terasa lebih cerdas.

### Transisi ke Slide Berikutnya

Setelah memahami bahwa enemy dapat menyesuaikan taktik berdasarkan player model, slide berikutnya akan membahas bagaimana adaptasi tersebut dapat diterapkan secara lebih halus ketika enemy menggunakan **Utility AI**.

---

## Slide 060 - Adaptive Utility AI

### Narasi

Pada slide ini, kita masuk ke bentuk adaptasi yang lebih halus dibanding aturan perilaku yang kaku. Jika enemy menggunakan **Utility**, maka setiap aksi tidak lagi dipilih hanya berdasarkan kondisi ya/tidak, tetapi berdasarkan **bobot** yang dapat berubah. Bobot ini menggambarkan seberapa cocok suatu aksi dengan situasi saat ini.

Intuisi praktisnya: enemy tidak sekadar “melakukan X jika Y”. Enemy menilai beberapa opsi sekaligus, misalnya `TakeCover`, `MaintainDistance`, `Flank`, `Rush`, `Attack`, lalu memilih yang nilainya paling tinggi. Jika gaya bermain player berubah, bobot opsi juga berubah.

Contoh pada slide dapat dibaca sebagai aturan penyesuaian:

```text
Jika player aggressive:
    TakeCoverWeight naik
    MaintainDistanceWeight naik

Jika player defensive:
    FlankWeight naik
    RushWeight naik

Jika player low skill:
    AttackWeight turun
    DelayBeforeAttack naik
```

Dalam implementasi, setiap `*Weight` dapat dianggap sebagai variabel yang memengaruhi skor aksi. Misalnya, ketika player sering menyerang, sistem menaikkan `TakeCoverWeight` dan `MaintainDistanceWeight`, sehingga opsi bertahan dan menjaga jarak lebih mungkin terpilih. Sebaliknya, jika player terlalu defensif, `FlankWeight` dan `RushWeight` dinaikkan agar enemy mencari celah atau menekan posisi player.

Bagian penting yang harus dipahami mahasiswa adalah bahwa adaptasi di sini bersifat **kontinu** dan **berbasis nilai**. Tidak harus ada state baru untuk setiap gaya player. Cukup ubah parameter bobot, lalu sistem memilih aksi dengan skor tertinggi. Pendekatan ini membuat perilaku enemy terasa lebih responsif, tetapi tetap dapat dikontrol oleh desainer.

Perlu juga diperhatikan bahwa `DelayBeforeAttack` bukan hanya bobot aksi, tetapi parameter waktu. Jika player dinilai kurang terampil, nilai ini dinaikkan agar enemy tidak menyerang terlalu cepat. Efeknya, player mendapat ruang belajar, sementara enemy tetap terlihat cerdas karena menyesuaikan tekanan.

Sebelum lanjut, pastikan mahasiswa memahami tiga hal: player model menghasilkan sinyal, sinyal tersebut mengubah bobot, dan bobot menentukan aksi yang dipilih. Dengan alur ini, enemy dapat merespons gaya bermain player tanpa harus menulis banyak aturan terpisah.

### Inti yang Harus Ditekankan

- **Utility** memilih aksi berdasarkan bobot, bukan hanya kondisi biner.
- Player model dapat mengubah `TakeCoverWeight`, `FlankWeight`, `AttackWeight`, dan parameter lain.
- Adaptasi membuat enemy merespons gaya player: agresif, defensif, atau tingkat keterampilan.
- `DelayBeforeAttack` menunjukkan bahwa adaptasi bisa berupa perubahan parameter waktu, bukan hanya pilihan aksi.

### Transisi ke Slide Berikutnya

Setelah enemy menyesuaikan perilaku melalui bobot, player model juga dapat memengaruhi dunia yang dihasilkan, seperti ruang, item, dan tantangan. Pada slide berikutnya, kita akan melihat bagaimana adaptasi ini diterapkan ke **PCG**.

---

## Slide 061 - Adaptive PCG

### Narasi

Pada slide ini, kita melangkah dari penyesuaian keputusan agen ke penyesuaian **konten game**. **Player model** tidak hanya dipakai untuk memilih aksi agen; ia juga dapat menjadi input bagi **PCG**, yaitu prosedur yang menghasilkan konten secara otomatis.

Intuisi praktisnya sederhana: dua pemain dengan gaya berbeda seharusnya tidak selalu menerima dunia yang sama. Pemain yang sering menjelajah dapat diberi ruang tambahan, sementara pemain yang sering menyerang dapat diberi lebih banyak kesempatan bertempur.

```text
Explorer:
    tambah optional room
    tambah collectible

Aggressive:
    tambah combat room
    tambah enemy encounter

Low Skill:
    kurangi trap
    tambah health item

High Skill:
    tambah elite enemy
    tambah branching challenge
```

Potongan aturan di atas menunjukkan pola umum **adaptive PCG**. Setiap baris memetakan profil pemain ke parameter konten. Profil seperti `Explorer`, `Aggressive`, `Low Skill`, dan `High Skill` berfungsi sebagai kondisi. Nilai yang diubah adalah parameter generator, misalnya `optional room`, `collectible`, `combat room`, `enemy encounter`, `trap`, `health item`, `elite enemy`, dan `branching challenge`.

Urutan prosesnya dapat dipahami sebagai berikut:

1. Sistem memperbarui **player model** berdasarkan perilaku pemain.
2. Generator konten membaca profil tersebut.
3. Parameter PCG disesuaikan, misalnya menambah ruang, mengurangi jebakan, atau menambah musuh.
4. Konten baru dihasilkan dengan parameter yang sudah disesuaikan.

Hubungan dengan desain game terletak pada **feedback loop**. Jika pemain agresif sering mendapat `combat room`, ia akan lebih sering menguji strategi tempur. Jika pemain kurang terampil mendapat lebih banyak `health item` dan lebih sedikit `trap`, tekanan permainan menjadi lebih ramah. Jika pemain terampil mendapat `elite enemy` dan `branching challenge`, pengalaman tetap menantang.

Yang perlu dipahami mahasiswa adalah bahwa **adaptive PCG** bukan sekadar membuat konten acak. Konten yang dihasilkan harus tetap memiliki tujuan desain: menjaga keterlibatan, menyesuaikan kesulitan, dan membuat pengalaman terasa lebih personal. Dengan cara ini, materi PCG sebelumnya terhubung langsung dengan **player modeling**.

### Inti yang Harus Ditekankan

- **Player model** dapat menjadi input untuk **PCG**, sehingga konten game menyesuaikan profil pemain.
- Profil pemain memengaruhi parameter konten seperti `optional room`, `collectible`, `combat room`, `enemy encounter`, `trap`, `health item`, `elite enemy`, dan `branching challenge`.
- Penyesuaian konten harus menjaga keseimbangan pengalaman, bukan hanya mengubah nilai parameter secara ekstrem.

### Transisi ke Slide Berikutnya

Setelah konten dapat menyesuaikan diri dengan pemain, langkah berikutnya adalah memberikan bantuan langsung kepada pemain, yaitu **adaptive guidance**.

---

## Slide 062 - Adaptive Guidance

### Narasi

Slide ini melanjutkan ide bahwa **player model** tidak hanya dipakai untuk mengubah level, tetapi juga untuk mengatur **bantuan yang diberikan game** kepada pemain.

Intuisinya sederhana: jika game tahu pemain sedang kesulitan, game dapat menampilkan petunjuk yang tepat. Jika pemain sudah lancar, game dapat menahan diri agar tidak membuat pengalaman terasa terlalu mudah atau terlalu diarahkan.

Alurnya dapat dipahami sebagai berikut:

1. Game mengamati perilaku pemain, misalnya sering tersesat, sering mati pada musuh tertentu, atau jarang memakai kemampuan.
2. Perilaku tersebut diubah menjadi **player model** yang ringkas.
3. Sistem adaptif memutuskan jenis bantuan yang paling relevan.
4. Bantuan ditampilkan secara halus, misalnya marker, hint, atau reminder.

Contoh pada slide dapat dibaca sebagai aturan adaptasi:

```text
Player sering tersesat:
    tampilkan objective marker

Player sering mati pada enemy tertentu:
    tampilkan combat hint

Player tidak menggunakan ability:
    tampilkan tutorial reminder
```

Dalam implementasi, aturan seperti ini biasanya menjadi bagian dari **decision making** sederhana. Game tidak selalu menampilkan semua bantuan sekaligus. Ia memilih satu atau beberapa sinyal yang paling sesuai dengan kondisi pemain saat itu.

Hal penting yang harus dipahami mahasiswa adalah **keseimbangan**. Guidance yang terlalu agresif dapat mengurangi rasa eksplorasi, mengurangi tantangan, dan membuat pemain merasa dikendalikan. Sebaliknya, guidance yang terlalu sedikit dapat membuat pemain frustrasi.

Karena itu, desain adaptive guidance harus memperhatikan **timing**, **frekuensi**, dan **tingkat intrusi**. Bantuan sebaiknya muncul pada momen yang tepat, tidak memotong alur, dan tetap memberi ruang bagi pemain untuk menemukan solusinya sendiri.

### Inti yang Harus Ditekankan

- **Adaptive guidance** adalah bentuk adaptasi yang memengaruhi bantuan, bukan hanya konten level.
- Player model digunakan untuk memilih jenis bantuan: `objective marker`, `combat hint`, atau `tutorial reminder`.
- Sistem harus selektif agar tidak mengganggu eksplorasi dan rasa pencapaian pemain.

### Transisi ke Slide Berikutnya

Setelah memahami bagaimana model pemain dapat memicu bantuan adaptif, kita akan masuk ke praktikum untuk melihat bagaimana data gameplay sederhana dapat diukur, dirangkum, dan dijadikan dasar player model yang bisa dipakai dalam sistem adaptif.

---

## Slide 063 - Praktikum Pertemuan 12: Gambaran Umum

### Narasi

Pada praktikum pertemuan ini, mahasiswa akan membangun **model pemain sederhana** dari data yang dihasilkan saat bermain. Fokusnya bukan membuat sistem yang rumit, tetapi memahami alur dasar: game merekam peristiwa, peristiwa diolah menjadi metrik, metrik digunakan untuk menilai kemampuan, dan hasil penilaian membentuk profil pemain.

Intuisi praktisnya adalah begini. Saat pemain bergerak, menyerang, mengambil item, atau menyelesaikan objective, game dapat mencatat peristiwa tersebut sebagai `telemetry`. Dari peristiwa itu, kita menghitung `gameplay_metrics` seperti jumlah serangan, damage, waktu bertahan, atau item yang diambil. Metrik tersebut kemudian dirangkum menjadi `skill_score` dan `play_style`, misalnya pemain agresif, defensif, eksploratif, atau lambat. Hasil akhir adalah `player_profile` yang dapat ditampilkan di `UI` dan digunakan untuk adaptasi sederhana.

Target praktikum ini dapat dilihat sebagai tahapan berikut:

1. Merekam `telemetry` sederhana dari aktivitas pemain.
2. Menghitung `gameplay_metrics` dari data yang terekam.
3. Membuat `skill_score` untuk menilai kemampuan pemain.
4. Mengklasifikasikan `play_style` berdasarkan pola perilaku.
5. Membuat `player_profile` yang merepresentasikan pemain.
6. Menampilkan profil tersebut di `UI`.
7. Menggunakan profil untuk **adaptasi sederhana** pada game.

Poin penting yang harus dipahami sebelum lanjut adalah bahwa data mentah tidak langsung menjadi profil. Data perlu diolah menjadi metrik yang bermakna, lalu diinterpretasikan menjadi penilaian. Jika metrik tidak jelas, profil juga tidak akan berguna. Praktikum ini sengaja dibuat sederhana agar mahasiswa dapat melihat hubungan antara data, metrik, dan perilaku adaptif game.

Detail teknis dan langkah implementasi akan dibahas pada modul praktikum terpisah, sehingga pada slide ini kita cukup memahami gambaran umum dan tujuan akhir yang ingin dicapai.

### Inti yang Harus Ditekankan

- Praktikum ini berfokus pada **model pemain sederhana**, bukan sistem adaptasi yang kompleks.
- Alur utama adalah: `telemetry` → `gameplay_metrics` → `skill_score` → `play_style` → `player_profile` → `UI` → **adaptasi sederhana**.
- Data mentah harus diolah menjadi metrik yang bermakna sebelum digunakan untuk menilai pemain.
- Profil pemain berguna untuk menampilkan informasi dan menjadi dasar adaptasi perilaku game.

### Transisi ke Slide Berikutnya

Setelah memahami target praktikum, langkah berikutnya adalah memilih bentuk game sederhana yang cocok untuk merekam data tersebut. Pada slide berikutnya, kita akan melihat contoh game praktikum yang disarankan beserta jenis data yang dapat dicatat.

---

## Slide 064 - Game Praktikum yang Disarankan

### Narasi

Pada slide ini, kita menentukan bentuk game yang paling praktis untuk praktikum **player modeling** dan **sistem adaptif**. Opsi yang disarankan adalah game sederhana seperti:

```text
Arena Survival
Dungeon Room Combat
```

Pilihan ini bukan karena game-nya harus menarik secara produksi, tetapi karena strukturnya mudah diamati. Mahasiswa dapat membuat loop yang jelas: pemain melakukan aksi, lingkungan memberi respons, dan sistem mencatat kejadian penting. Loop seperti ini penting karena model pemain tidak bisa dibangun dari data yang terlalu terbuka atau terlalu sedikit.

Intuisi praktisnya adalah memilih game yang memiliki **perilaku berulang** dan **kejadian yang bisa diukur**. Jika game terlalu bebas, data menjadi sulit diinterpretasi. Jika game terlalu statis, tidak ada variasi perilaku untuk dimodelkan. Dengan arena survival atau dungeon room combat, mahasiswa sudah memiliki ruang gerak, ancaman, item, dan tujuan yang cukup untuk menghasilkan pola bermain yang berbeda.

Perilaku pemain yang perlu didukung oleh game praktikum antara lain:

- **bergerak** di dalam arena atau ruangan,
- **menyerang enemy** untuk menghasilkan interaksi combat,
- **mengambil item** sebagai sinyal preferensi atau kebutuhan,
- **menyelesaikan objective** sebagai indikator progress.

Keempat perilaku ini penting karena masing-masing memberi jenis sinyal yang berbeda. Gerakan menunjukkan eksplorasi atau avoidance, serangan menunjukkan agresivitas, pengambilan item menunjukkan prioritas, dan penyelesaian objective menunjukkan kemampuan mencapai tujuan.

Sistem praktikum juga perlu merekam data mentah dari perilaku tersebut. Data yang disarankan meliputi:

- `damage`,
- `kill`,
- `item`,
- `room visited`,
- `waktu`,
- `health`,
- `attack count`.

Poin penting di sini adalah data ini masih berupa **telemetry**, bukan metrik akhir. Artinya, setiap kejadian perlu dicatat dengan konteks yang cukup, misalnya kapan terjadi, pada kondisi apa, dan terhadap objek apa. Tanpa konteks, angka seperti `damage` atau `attack count` belum cukup untuk menjelaskan gaya bermain pemain.

Setelah data mentah tersedia, langkah berikutnya adalah merangkumnya menjadi **player model sederhana**. Model ini bisa berupa profil singkat yang menggambarkan kecenderungan pemain, misalnya lebih agresif, lebih hati-hati, lebih eksploratif, atau lebih fokus pada progress. Namun pada slide ini, fokus utamanya adalah memastikan mahasiswa memilih game yang mampu menghasilkan data yang cukup dan konsisten.

Sebelum lanjut, mahasiswa perlu memahami tiga hal: bentuk game yang dipilih harus sederhana tetapi cukup dinamis, setiap perilaku pemain harus bisa dipetakan ke kejadian yang bisa direkam, dan data mentah harus disimpan dengan struktur yang rapi agar bisa diolah menjadi profil pemain.

### Inti yang Harus Ditekankan

- Gunakan game sederhana seperti `Arena Survival` atau `Dungeon Room Combat` karena loop permainannya mudah diamati.
- Pastikan player dapat bergerak, menyerang enemy, mengambil item, dan menyelesaikan objective.
- Sistem merekam data mentah: `damage`, `kill`, `item`, `room visited`, `waktu`, `health`, `attack count`.
- Data tersebut adalah telemetry untuk player model sederhana, bukan metrik final.

### Transisi ke Slide Berikutnya

Setelah bentuk game dan data yang perlu direkam sudah jelas, pembahasan berikutnya adalah memilih metrik praktikum yang akan dihitung dari data tersebut.

---

## Slide 065 - Metrics Praktikum

### Narasi

Pada slide ini, kita masuk ke bagian **metrics praktikum**. Setelah sistem game merekam peristiwa seperti `damage`, `kill`, `item`, `room visited`, `health`, dan `attack count`, langkah berikutnya adalah memilih metrik yang benar-benar berguna untuk membangun **player model**.

Metrik yang disarankan dapat dilihat pada daftar berikut:

```text
Accuracy
Kill Rate
Damage Taken
Health Ratio
Item Collection
Room Exploration
Attack Frequency
Low Health Combat Time
Completion Time
```

Daftar ini tidak harus digunakan semuanya. Dalam praktikum, mahasiswa sebaiknya memilih metrik yang sesuai dengan tujuan game dan perilaku yang ingin dimodelkan.

Secara konseptual, metrik ini dapat dikelompokkan menjadi empat kelompok utama:

- **Combat metric**: mengukur kemampuan bertarung, misalnya `Kill Rate`, `Attack Frequency`, dan `Accuracy`.
- **Survival metric**: mengukur kemampuan bertahan, misalnya `Damage Taken`, `Health Ratio`, dan `Low Health Combat Time`.
- **Exploration metric**: mengukur seberapa aktif pemain menjelajah, misalnya `Room Exploration` dan `Item Collection`.
- **Progress metric**: mengukur penyelesaian tujuan, misalnya `Completion Time`.

Untuk praktikum yang sederhana, minimal empat kelompok ini perlu ada. Dengan kombinasi tersebut, sistem dapat membedakan pemain yang agresif, defensif, eksploratif, atau cepat menyelesaikan objective.

Hal penting yang harus dipahami mahasiswa adalah bahwa metrik bukan sekadar angka. Setiap metrik harus memiliki definisi yang jelas, satuan yang konsisten, dan cara perhitungan yang dapat dijelaskan. Misalnya, `Kill Rate` bisa dihitung dari jumlah `kill` dibagi waktu aktif atau jumlah kesempatan menyerang, sedangkan `Health Ratio` bisa dihitung dari `health` saat ini dibagi `health` maksimum.

Setelah metrik dihitung, nilai-nilai tersebut akan menjadi bahan untuk membuat **player profile** pada slide berikutnya.

### Inti yang Harus Ditekankan

- Tidak semua metrik harus digunakan; pilih metrik yang relevan dengan game dan tujuan praktikum.
- Minimal gunakan empat kelompok: **combat metric**, **survival metric**, **exploration metric**, dan **progress metric**.
- Setiap metrik harus memiliki definisi, satuan, dan rumus perhitungan yang jelas.
- Metrik menjadi dasar untuk membangun **player model** dan **player profile**.

### Transisi ke Slide Berikutnya

Setelah metrik dipilih dan dihitung, langkah berikutnya adalah merangkumnya menjadi profil pemain yang lebih mudah dibaca, seperti `Skill Score`, `Aggressive Score`, dan `Dominant Style`.

---

## Slide 066 - Player Profile Praktikum

### Narasi

Setelah metrik praktikum dikumpulkan, langkah berikutnya adalah merangkumnya menjadi **Player Profile**. Profil ini berfungsi sebagai representasi ringkas tentang gaya bermain mahasiswa, sehingga sistem AI game dapat memahami pola perilaku pemain tanpa harus memproses seluruh metrik secara langsung.

Contoh profil yang ditampilkan pada slide adalah sebagai berikut:

```text
Skill Score: 0.68
Skill Level: Medium

Aggressive Score: 0.74
Defensive Score: 0.30
Explorer Score: 0.55
Risk Score: 0.62

Dominant Style: Aggressive
```

Profil ini sebaiknya dipahami sebagai hasil normalisasi dari beberapa metrik perilaku. Setiap nilai biasanya berada pada rentang `0` sampai `1`, di mana nilai lebih tinggi menunjukkan kecenderungan perilaku yang lebih kuat.

- `Skill Score` menggambarkan kemampuan umum pemain, misalnya dari hasil combat, survival, dan progress.
- `Skill Level` adalah interpretasi kategori dari `Skill Score`, seperti `Low`, `Medium`, atau `High`.
- `Aggressive Score` menunjukkan kecenderungan pemain untuk menyerang lebih sering atau mengambil inisiatif dalam pertempuran.
- `Defensive Score` menunjukkan kecenderungan pemain untuk bertahan, menjaga jarak, atau mengelola kondisi kesehatan.
- `Explorer Score` menunjukkan seberapa aktif pemain menjelajah area, mengumpulkan item, atau mencari konten tambahan.
- `Risk Score` menunjukkan seberapa besar pemain mengambil risiko, misalnya tetap bertempur saat kondisi lemah.

`Dominant Style` adalah label utama yang dipilih dari beberapa score tersebut. Pada contoh ini, `Aggressive Score` memiliki nilai tertinggi, sehingga sistem memberi label `Aggressive`. Label ini berguna karena memudahkan sistem AI mengambil keputusan adaptif yang lebih sederhana, misalnya menyesuaikan perilaku NPC atau tantangan game.

Penting untuk dicatat bahwa profil ini bukan sekadar data statistik. Profil ini adalah **input keputusan** bagi sistem adaptif. Dengan profil, game dapat membedakan pemain yang agresif, defensif, eksploratif, atau berisiko, lalu menyesuaikan pengalaman bermain secara lebih personal.

Profil juga ditampilkan di UI agar mahasiswa dan dosen dapat melihat hasil model secara transparan. Hal ini membantu proses evaluasi praktikum karena mahasiswa dapat memahami bagaimana perilakunya diubah menjadi profil, dan dosen dapat memantau apakah model player modeling bekerja sesuai harapan.

Sebelum lanjut ke adaptasi, mahasiswa perlu memahami bahwa profil ini masih bersifat deskriptif. Artinya, profil menjelaskan “siapa” pemain berdasarkan perilakunya, tetapi belum menjelaskan “apa yang dilakukan game” sebagai respons.

### Inti yang Harus Ditekankan

- **Player Profile** adalah ringkasan terstruktur dari metrik perilaku pemain.
- Nilai seperti `Skill Score`, `Aggressive Score`, `Defensive Score`, `Explorer Score`, dan `Risk Score` sebaiknya dipahami sebagai hasil normalisasi perilaku.
- `Dominant Style` adalah label utama yang membantu sistem AI memilih respons adaptif yang lebih sederhana.
- Tampilan profil di UI penting untuk transparansi, evaluasi, dan pemahaman mahasiswa terhadap hasil model.
- Profil ini menjadi dasar sebelum sistem game melakukan adaptasi terhadap gaya bermain pemain.

### Transisi ke Slide Berikutnya

Setelah profil pemain terbentuk, langkah berikutnya adalah menggunakan profil tersebut untuk menyesuaikan perilaku game. Pada slide berikutnya, kita akan melihat contoh adaptasi sederhana berdasarkan `Skill Level` dan gaya bermain pemain.

---

## Slide 067 - Adaptasi Praktikum

### Narasi

Setelah mahasiswa melihat contoh **Player Profile** pada slide sebelumnya, langkah berikutnya adalah memahami bagaimana profil tersebut digunakan untuk mengubah permainan. Intuisinya sederhana: game tidak hanya mencatat gaya bermain pemain, tetapi juga memberi respons yang terasa natural. Jika pemain terlihat kesulitan, game bisa memberi bantuan. Jika pemain terlihat kuat, game bisa menambah tantangan. Jika gaya bermain pemain agresif, perilaku musuh bisa disesuaikan agar interaksi tetap menarik.

Aturan adaptasi pada praktikum ini dibuat sederhana dan mudah diuji:

```text
Jika Skill Low:
    tambah health item

Jika Skill High:
    tambah enemy elite

Jika Aggressive:
    enemy menjaga jarak

Jika Explorer:
    spawn bonus item di optional area

Jika Defensive:
    enemy mencoba flank
```

Secara konseptual, aturan ini adalah bentuk **decision making** sederhana berbasis kondisi. Setiap kondisi membaca nilai dari profil pemain, lalu memicu satu perubahan parameter game. Misalnya, kondisi `Skill Low` dapat meningkatkan ketersediaan `health item`, sehingga pemain yang kurang terampil mendapat peluang bertahan hidup lebih besar. Kondisi `Skill High` dapat menambah `enemy elite`, sehingga pemain yang kuat mendapat tantangan lebih berat.

Untuk gaya bermain, adaptasi tidak selalu mengubah statistik pemain, tetapi bisa mengubah perilaku NPC. Jika profil menunjukkan `Aggressive`, musuh dapat memilih strategi menjaga jarak agar pemain tidak mudah menyerang dari dekat. Jika profil menunjukkan `Explorer`, game dapat menaruh `bonus item` di `optional area` untuk mendorong eksplorasi. Jika profil menunjukkan `Defensive`, musuh dapat mencoba `flank` agar pemain yang bermain hati-hati tetap mendapat tekanan dari sisi.

Dalam konteks **Game AI**, adaptasi seperti ini menghubungkan **player modeling** dengan **dynamic difficulty adjustment**. Profil pemain menjadi input, aturan adaptasi menjadi proses, dan perubahan parameter game menjadi output. Perubahan ini dapat berupa jumlah item, jenis musuh, posisi spawn, atau perilaku NPC. Mahasiswa perlu memahami bahwa adaptasi yang baik tidak terasa seperti manipulasi kasar, tetapi seperti game yang responsif terhadap gaya bermain.

Untuk praktikum, penting membatasi scope. Tidak perlu mengaktifkan semua aturan sekaligus. Cukup pilih 1–2 adaptasi yang paling mudah diukur, misalnya `Skill Low` menambah `health item` dan `Skill High` menambah `enemy elite`. Dengan scope kecil, mahasiswa dapat fokus pada alur data: profil dibaca, kondisi dicek, parameter game diubah, lalu efeknya terlihat dalam gameplay.

### Inti yang Harus Ditekankan

- **Adaptasi** adalah respons game terhadap **player profile**, bukan sekadar tampilan statistik.
- Aturan adaptasi dapat mengubah **parameter game** seperti item, musuh, spawn, atau perilaku NPC.
- Untuk praktikum, pilih 1–2 adaptasi agar mudah diuji, di-debug, dan dijelaskan.
- Fokus utama adalah alur: profil pemain → kondisi adaptasi → perubahan gameplay.

### Transisi ke Slide Berikutnya

Setelah aturan adaptasi dipahami, langkah berikutnya adalah melihat bagaimana aturan tersebut diletakkan dalam struktur scene praktikum, termasuk komponen mana yang membaca profil dan komponen mana yang mengubah parameter game.

---

## Slide 068 - Struktur Scene Praktikum

### Narasi

Pada slide ini, kita melihat **struktur scene** yang akan digunakan dalam praktikum **pemodelan pemain dan adaptasi game**. Scene ini bukan hanya berisi objek visual, tetapi juga menjadi tempat komponen gameplay, observasi, dan sistem adaptif saling terhubung.

```text
PlayerModelingDemo
├── GameManager
├── TelemetryManager
├── PlayerModelManager
├── AdaptationManager
├── Player
├── EnemySpawner
├── Items
├── Rooms / Arena
└── Debug UI
```

Secara konsep, scene ini membagi tanggung jawab menjadi beberapa bagian:

- `GameManager`: koordinator utama permainan, misalnya mengatur state global, kondisi menang/kalah, atau alur praktikum.
- `TelemetryManager`: mengumpulkan **event gameplay** yang terjadi selama pemain bermain.
- `PlayerModelManager`: mengubah event tersebut menjadi **metrik** dan **profil pemain**.
- `AdaptationManager`: membaca profil pemain untuk menyesuaikan parameter game.
- `Player`, `EnemySpawner`, `Items`, dan `Rooms / Arena`: objek gameplay yang menghasilkan event dan dapat dipengaruhi oleh adaptasi.
- `Debug UI`: menampilkan nilai metrik, profil, dan hasil adaptasi agar mudah diverifikasi.

Alur data pada praktikum ini sebaiknya dibuat **satu arah**:

```text
Gameplay Event
    ↓
TelemetryManager
    ↓
PlayerModelManager
    ↓
AdaptationManager
    ↓
Game Parameter berubah
```

Artinya, ketika pemain melakukan aksi seperti menyerang, menghindari musuh, mengambil item, atau menjelajah area, aksi tersebut direkam sebagai **gameplay event**. `TelemetryManager` mengumpulkan event tersebut. `PlayerModelManager` kemudian menghitung pola perilaku, misalnya apakah pemain cenderung agresif, defensif, atau eksploratif. `AdaptationManager` menggunakan hasil tersebut untuk mengubah parameter, seperti menambah item kesehatan, memunculkan musuh elite, atau mengubah perilaku musuh.

Penting untuk dipahami bahwa struktur ini menjaga **pemisahan tanggung jawab**. Sistem adaptasi tidak perlu membaca input pemain secara langsung, dan perilaku musuh tidak perlu mengetahui seluruh detail internal model pemain. Cukup membaca parameter yang sudah diadaptasi. Dengan cara ini, praktikum lebih mudah diuji, lebih mudah di-debug, dan lebih mudah dikembangkan.

### Inti yang Harus Ditekankan

- **Scene praktikum** memisahkan peran: `GameManager`, `TelemetryManager`, `PlayerModelManager`, dan `AdaptationManager` masing-masing memiliki tanggung jawab berbeda.
- **Data flow** harus jelas dan satu arah: `Gameplay Event` → `TelemetryManager` → `PlayerModelManager` → `AdaptationManager` → perubahan parameter game.
- `Debug UI` penting untuk memastikan bahwa **player model** dan **adaptasi** bekerja sesuai harapan, bukan sekadar berjalan tanpa bisa diverifikasi.
- Struktur scene yang rapi membantu menjaga **scope praktikum** tetap terkendali dan memudahkan mahasiswa memahami hubungan antara observasi, pemodelan, dan adaptasi.

### Transisi ke Slide Berikutnya

Setelah struktur scene dipahami, langkah berikutnya adalah melihat bagaimana komponen-komponen ini diimplementasikan dalam script. Kita akan memetakan `TelemetryManager`, `PlayerModelManager`, `AdaptationManager`, dan komponen pendukung lainnya ke file script yang akan digunakan dalam praktikum.

---

## Slide 069 - Struktur Script Praktikum

### Narasi

Setelah struktur scene, kita masuk ke struktur script. Slide ini menunjukkan file C# yang akan dipakai dalam praktikum **Player Modeling & Adaptive Game AI**.

```text
Scripts/
├── TelemetryManager.cs
├── TelemetryEvent.cs
├── GameplayMetrics.cs
├── PlayerModel.cs
├── PlayerModelManager.cs
├── AdaptationManager.cs
├── PlayerHealth.cs
├── PlayerCombat.cs
├── EnemyAI.cs
├── EnemySpawner.cs
└── PlayerModelDebugUI.cs
```

Pembagian file ini penting karena sistem adaptive game AI tidak cukup dibuat dalam satu script. Setiap script memiliki tanggung jawab yang berbeda.

Secara garis besar, script dapat dikelompokkan menjadi empat area utama:

- **Telemetry**: `TelemetryManager.cs`, `TelemetryEvent.cs`, dan `GameplayMetrics.cs` bertugas menangkap kejadian gameplay, menyimpan event, lalu merangkumnya menjadi metrik.
- **Player profile**: `PlayerModel.cs` dan `PlayerModelManager.cs` digunakan untuk merepresentasikan dan memperbarui profil pemain.
- **Adaptation policy**: `AdaptationManager.cs` bertugas mengubah parameter game berdasarkan profil pemain.
- **Gameplay dan observasi**: `PlayerHealth.cs`, `PlayerCombat.cs`, `EnemyAI.cs`, `EnemySpawner.cs`, dan `PlayerModelDebugUI.cs` menyediakan perilaku game serta tampilan debug.

Intuisi praktisnya adalah alur data bergerak dari kejadian di game, menuju metrik, lalu ke model pemain, dan akhirnya ke keputusan adaptasi. Dengan pemisahan script seperti ini, mahasiswa dapat melihat mana bagian yang hanya mengumpulkan data, mana bagian yang menilai pemain, dan mana bagian yang mengubah gameplay.

Hal yang harus dipahami sebelum lanjut adalah bahwa **telemetry**, **metrics**, **player profile**, dan **adaptation policy** adalah empat lapisan yang berbeda. Telemetry tidak boleh langsung mengubah kesulitan game. Metrics tidak boleh langsung menentukan profil final tanpa aturan. Adaptasi juga harus berbasis model pemain yang sudah diperbarui. Pemisahan ini membuat sistem lebih mudah diuji, di-debug, dan dikembangkan.

### Inti yang Harus Ditekankan

- Struktur script menunjukkan pemisahan tanggung jawab: **telemetry**, **metrics**, **player model**, dan **adaptation**.
- `TelemetryManager.cs`, `TelemetryEvent.cs`, dan `GameplayMetrics.cs` fokus pada pengumpulan dan ringkasan data gameplay.
- `PlayerModel.cs` dan `PlayerModelManager.cs` merepresentasikan profil pemain, sedangkan `AdaptationManager.cs` mengubah parameter game berdasarkan profil tersebut.
- Script gameplay seperti `PlayerHealth.cs`, `PlayerCombat.cs`, `EnemyAI.cs`, dan `EnemySpawner.cs` menjadi sumber event dan objek yang diamati.
- `PlayerModelDebugUI.cs` membantu mahasiswa memverifikasi apakah data telemetry, profil, dan adaptasi berjalan sesuai harapan.

### Transisi ke Slide Berikutnya

Selanjutnya kita akan masuk ke `TelemetryManager.cs`, yaitu script pertama yang bertugas menerima event gameplay dan menyediakan data dasar untuk metrics.

---

## Slide 070 - TelemetryManager.cs

### Narasi

Setelah struktur script praktikum, kita masuk ke salah satu komponen paling dasar, yaitu `TelemetryManager.cs`. Komponen ini berperan sebagai **penerima data gameplay** yang akan dipakai oleh sistem adaptif.

Tugas utamanya adalah **menerima event gameplay** dari berbagai sumber, misalnya serangan pemain, pemain terkena damage, musuh dikalahkan, item dikumpulkan, atau pemain masuk ke ruangan baru.

Contoh event yang dapat diterima:

- `PlayerAttack`
- `PlayerHit`
- `PlayerTookDamage`
- `EnemyKilled`
- `ItemCollected`
- `RoomEntered`

Setelah event diterima, `TelemetryManager` **menyimpan event** tersebut. Penyimpanan ini penting karena data gameplay biasanya datang secara berurutan dan perlu diproses lebih lanjut.

Selain menyimpan, komponen ini juga dapat **menghitung data dasar**, seperti jumlah event atau nilai sederhana yang masih mentah. Data dasar ini kemudian **disediakan untuk metrics**, bukan langsung diubah menjadi keputusan.

Batas tanggung jawabnya harus jelas: `TelemetryManager` **tidak mengambil keputusan adaptasi**. Ia tidak menentukan apakah difficulty dinaikkan, NPC dibuat lebih agresif, atau strategi permainan diubah. Peran itu berada di sistem yang lebih tinggi.

Intuisi praktisnya, `TelemetryManager` ibarat **sensor** dalam sistem adaptif. Jika event tidak lengkap, tidak konsisten, atau tidak tercatat dengan benar, maka metrik dan model pemain yang dibangun di belakangnya juga akan kurang dapat diandalkan.

Sebelum lanjut, mahasiswa perlu memahami bahwa `TelemetryManager` adalah **lapisan observasi**, bukan lapisan penilaian. Ia menjawab pertanyaan "apa yang terjadi di gameplay?", bukan "apa yang harus dilakukan sistem?".

### Inti yang Harus Ditekankan

- `TelemetryManager` adalah **penerima dan penyimpan event gameplay**.
- Event seperti `PlayerAttack`, `PlayerHit`, `EnemyKilled`, `ItemCollected`, dan `RoomEntered` menjadi bahan dasar data.
- Komponen ini **menghitung data dasar** dan menyediakan data untuk metrics.
- `TelemetryManager` **tidak mengambil keputusan adaptasi**; ia hanya menyediakan observasi.

### Transisi ke Slide Berikutnya

Setelah event gameplay diterima dan disimpan, langkah berikutnya adalah mengubah data dasar tersebut menjadi metrik yang lebih bermakna. Pada slide berikutnya, kita akan membahas `GameplayMetrics.cs`, yaitu komponen yang menghitung metrics dari telemetry.

---

## Slide 071 - GameplayMetrics.cs

### Narasi

Pada slide ini kita membahas **GameplayMetrics.cs**, yaitu lapisan yang mengubah **event gameplay** menjadi **metrik** yang lebih bermakna. Pada slide sebelumnya, **TelemetryManager** bertugas mengumpulkan dan menyimpan event seperti `PlayerAttack`, `EnemyKilled`, dan `RoomEntered`. Sekarang, tugasnya bukan lagi mencatat apa yang terjadi, tetapi merangkum pola perilaku player dalam bentuk angka.

Intuisi praktisnya sederhana: event adalah **fakta mentah**, sedangkan metrik adalah **ringkasan statistik**. Misalnya, satu event `PlayerAttack` hanya menunjukkan bahwa player menyerang. Namun, jika event tersebut dihitung dalam beberapa menit terakhir, kita bisa mengetahui apakah player sering menyerang, jarang menyerang, atau sedang berada dalam fase agresif.

Contoh metrik yang dapat dihitung adalah sebagai berikut:

```text
accuracy
killRate
damageTakenRate
explorationRatio
itemCollectionRatio
attackFrequency
```

Beberapa metrik tersebut memiliki arti yang cukup jelas:

- `accuracy` menunjukkan seberapa sering serangan player mengenai target.
- `killRate` menggambarkan frekuensi eliminasi musuh, misalnya per waktu atau per kesempatan.
- `damageTakenRate` menggambarkan seberapa sering atau seberapa berat player menerima damage.
- `explorationRatio` menunjukkan proporsi area atau ruang yang dijelajahi player.
- `itemCollectionRatio` menunjukkan proporsi item yang berhasil dikumpulkan.
- `attackFrequency` menunjukkan seberapa sering player melakukan serangan.

Dalam alur sistem, **GameplayMetrics** berada di antara **TelemetryManager** dan **PlayerModelManager**. Alurnya dapat dipahami sebagai berikut:

1. **Input**: event gameplay yang sudah dikumpulkan oleh `TelemetryManager`.
2. **Proses**: agregasi, perhitungan rasio, normalisasi, dan pembaruan nilai metrik.
3. **Output**: nilai metrik yang siap digunakan oleh `PlayerModelManager`.

Penting untuk dipahami bahwa metrik ini **belum menjadi keputusan**. Metrik hanya menyediakan gambaran kuantitatif tentang perilaku player. Misalnya, nilai `accuracy` yang tinggi dan `damageTakenRate` yang rendah dapat menjadi sinyal bahwa player memiliki kemampuan tempur yang baik. Namun, keputusan akhir tentang bagaimana NPC menyesuaikan diri akan dilakukan oleh lapisan model player berikutnya.

Sebelum lanjut, mahasiswa perlu memahami bahwa **GameplayMetrics** adalah sumber fitur numerik yang stabil, terukur, dan dapat dijelaskan. Kualitas metrik sangat memengaruhi kualitas model player, karena metrik yang terlalu kasar atau terlalu bising dapat membuat sistem adaptif salah membaca gaya bermain player.

### Inti yang Harus Ditekankan

- **GameplayMetrics.cs** mengubah event mentah menjadi metrik gameplay yang lebih bermakna.
- Metrik seperti `accuracy`, `killRate`, `damageTakenRate`, `explorationRatio`, `itemCollectionRatio`, dan `attackFrequency` berfungsi sebagai **fitur numerik** perilaku player.
- Metrik bukan keputusan adaptasi; metrik adalah **input** untuk `PlayerModelManager`.
- Perhitungan metrik perlu memperhatikan **waktu pengamatan**, **normalisasi**, dan **stabilitas nilai** agar tidak terlalu bising.

### Transisi ke Slide Berikutnya

Setelah metrik gameplay tersedia, langkah berikutnya adalah merangkum metrik tersebut menjadi representasi player yang lebih ringkas. Pada slide berikutnya, kita akan membahas **PlayerModel.cs**, yaitu struktur data yang menyimpan hasil model player.

---

## Slide 072 - PlayerModel.cs

### Narasi

Pada slide ini kita melihat struktur data yang menyimpan hasil pemodelan pemain. Setelah metrik gameplay dihitung, sistem membutuhkan representasi yang lebih ringkas dan mudah dibaca oleh komponen lain. **`PlayerModel`** berperan sebagai wadah profil pemain, bukan sebagai tempat perhitungan utama.

```csharp
public float skillScore;
public string skillLevel;

public float aggressiveScore;
public float defensiveScore;
public float explorerScore;
public float riskScore;

public string dominantStyle;
```

Tujuan utama struktur ini adalah menyimpan **profil pemain** dalam bentuk yang stabil dan mudah digunakan. Nilai numerik berguna untuk perbandingan, sedangkan nilai teks berguna untuk pengambilan keputusan yang lebih sederhana.

Field-field ini dapat dibaca sebagai berikut:

- `skillScore` dan `skillLevel` menggambarkan kemampuan pemain secara kuantitatif dan kualitatif.
- `aggressiveScore`, `defensiveScore`, `explorerScore`, dan `riskScore` menggambarkan dimensi **gaya bermain** pemain.
- `dominantStyle` berfungsi sebagai ringkasan gaya utama pemain.

Dalam konteks perilaku NPC atau penyesuaian tantangan, profil ringkas seperti ini dapat menjadi dasar keputusan yang lebih cepat dan konsisten. Sistem dapat membaca nilai-nilai tersebut untuk menyesuaikan respons gameplay terhadap karakteristik pemain.

Yang perlu dipahami mahasiswa adalah bahwa **`PlayerModel`** adalah **representasi**, bukan **proses**. Struktur ini tidak menghitung metrik, tidak menentukan skor, dan tidak memperbarui dirinya sendiri secara mandiri. Ia menyimpan hasil yang kemudian dapat dibaca oleh komponen lain.

Hasil yang diharapkan dari struktur ini adalah profil pemain yang ringkas, konsisten, dan mudah diuji. Dengan profil yang jelas, komponen lain dapat mengambil keputusan berdasarkan data yang sudah diringkas, bukan berdasarkan metrik mentah yang lebih kompleks.

### Inti yang Harus Ditekankan

- **`PlayerModel`** adalah struktur data yang menyimpan profil pemain secara ringkas.
- `skillScore`, `skillLevel`, dan skor gaya bermain menjadi dasar untuk memahami karakteristik pemain.
- `dominantStyle` berfungsi sebagai ringkasan gaya utama yang mudah digunakan oleh komponen lain.
- Struktur ini tidak menghitung metrik; ia hanya menyimpan hasil yang siap dibaca.

### Transisi ke Slide Berikutnya

Setelah struktur profil ini tersedia, langkah berikutnya adalah memahami bagaimana profil tersebut diisi dan diperbarui. Pada slide berikutnya, kita akan melihat **`PlayerModelManager.cs`** yang bertanggung jawab mengisi dan memperbarui struktur ini.

---

## Slide 073 - PlayerModelManager.cs

### Narasi

Pada slide ini, fokusnya adalah **PlayerModelManager.cs**, yaitu komponen yang bertanggung jawab mengolah data gameplay menjadi profil player. Jika **PlayerModel** adalah wadah penyimpanan hasil model, maka **PlayerModelManager** adalah proses yang mengisi wadah tersebut.

Tugas utamanya adalah membaca **gameplay metrics**, menghitung **skill score**, menghitung **play style score**, menentukan **dominant style**, lalu memperbarui **PlayerModel**. Dengan kata lain, manager ini mengubah perilaku yang teramati menjadi representasi yang lebih ringkas dan dapat digunakan oleh sistem game.

Alur kerjanya dapat dilihat sebagai pipeline berikut:

```text
Metrics
  ↓
Calculate Skill
  ↓
Calculate Style Scores
  ↓
Update Profile
```

Urutan proses ini penting:

1. **Metrics** menjadi input awal, yaitu data hasil interaksi player dengan game.
2. **Calculate Skill** menilai kemampuan player secara umum, misalnya dari keberhasilan, konsistensi, atau tingkat kesulitan yang dihadapi.
3. **Calculate Style Scores** menilai kecenderungan gaya bermain, seperti agresif, defensif, eksploratif, atau berani mengambil risiko.
4. **Update Profile** menyimpan hasil perhitungan ke dalam **PlayerModel**, termasuk nilai `skillScore`, `skillLevel`, `dominantStyle`, dan skor gaya bermain.

Intuisi praktisnya adalah **PlayerModelManager** tidak langsung mengubah perilaku NPC atau parameter game. Ia hanya membuat profil player menjadi lebih jelas. Profil inilah yang kemudian bisa dibaca oleh sistem lain untuk mengambil keputusan adaptasi.

Hal yang harus dipahami mahasiswa adalah pemisahan tanggung jawab: **PlayerModelManager** menangani pemodelan, sedangkan adaptasi dilakukan oleh komponen lain. Pemisahan ini membuat arsitektur lebih rapi, mudah diuji, dan tidak mengacaukan logika gameplay.

### Inti yang Harus Ditekankan

- **PlayerModelManager** adalah pengolah data, bukan penyimpan data.
- Input utamanya adalah **gameplay metrics**, output utamanya adalah **PlayerModel** yang diperbarui.
- Alur utama: metrik → skill score → style scores → profil player.
- Manager ini belum mengubah parameter game; ia hanya menyiapkan profil yang dapat digunakan untuk adaptasi.

### Transisi ke Slide Berikutnya

Setelah profil player tersedia, langkah berikutnya adalah membaca profil tersebut untuk menentukan adaptasi. Pada slide berikutnya, kita akan melihat **AdaptationManager.cs**, yang mengubah **PlayerModel** menjadi perubahan parameter game.

---

## Slide 074 - AdaptationManager.cs

### Narasi

Slide ini membahas `AdaptationManager.cs`, yaitu komponen yang mengubah hasil pemodelan pemain menjadi perubahan nyata di dalam game. Jika `PlayerModelManager` bertugas menghitung profil pemain, maka `AdaptationManager` bertugas mengambil profil tersebut dan memutuskan bagaimana game harus menyesuaikan diri.

Secara sederhana, alurnya adalah:

1. membaca `PlayerModel`
2. menentukan adaptasi
3. mengubah parameter game

Contoh pseudocode pada slide:

```text
if skillLevel == Low:
    healthDropChance += 0.1

if dominantStyle == Aggressive:
    enableTacticalEnemy = true
```

Baris pertama menunjukkan bahwa jika `skillLevel` bernilai `Low`, nilai `healthDropChance` dinaikkan sebesar `0.1`. Ini adalah bentuk adaptasi ringan: game mengubah parameter yang memengaruhi pengalaman pemain, misalnya peluang munculnya bantuan kesehatan. Poin pentingnya bukan angka `0.1`, melainkan adanya aturan yang mengubah parameter runtime berdasarkan model pemain.

Baris kedua menunjukkan adaptasi berbasis gaya bermain. Jika `dominantStyle` adalah `Aggressive`, maka `enableTacticalEnemy` diaktifkan. Artinya, perilaku musuh atau NPC dapat diubah menjadi lebih taktis, misalnya lebih responsif terhadap gaya bermain pemain. Di sini `AdaptationManager` tidak hanya mengubah angka, tetapi juga dapat mengaktifkan mode perilaku AI.

`AdaptationManager` dapat dipahami sebagai implementasi dari **adaptation policy**. Policy ini adalah aturan yang memetakan hasil model pemain ke tindakan adaptasi. Inputnya adalah `PlayerModel`, prosesnya adalah evaluasi kondisi seperti `skillLevel` dan `dominantStyle`, dan outputnya adalah perubahan parameter game atau perilaku NPC.

Mahasiswa perlu memahami bahwa adaptasi yang baik harus terukur dan tidak mengganggu keseimbangan game. Perubahan parameter sebaiknya dilakukan secara bertahap, dapat diuji, dan tetap konsisten dengan tujuan desain. Tanpa tahap ini, player model hanya menjadi data, bukan pengalaman bermain yang berubah.

### Inti yang Harus Ditekankan

- `AdaptationManager` membaca `PlayerModel`, bukan menghitung metrik dari nol.
- Ia menerapkan **adaptation policy** dengan memetakan `skillLevel` dan `dominantStyle` ke perubahan gameplay.
- Contoh parameter seperti `healthDropChance` dan `enableTacticalEnemy` menunjukkan adaptasi bisa berupa perubahan angka atau perubahan perilaku NPC.
- Peran utamanya adalah membuat game responsif terhadap pemain, bukan sekadar menyimpan profil pemain.

### Transisi ke Slide Berikutnya

Setelah memahami bagaimana adaptasi diterapkan, langkah berikutnya adalah mengamati hasilnya secara langsung. Slide berikutnya membahas Debug UI Praktikum, yang menampilkan metrik, skor, gaya dominan, dan adaptasi aktif agar mahasiswa dapat menilai apakah sistem player modeling benar-benar bekerja.

---

## Slide 075 - Debug UI Praktikum

### Narasi

Pada slide ini, kita membahas **Debug UI** untuk praktikum. Fungsinya bukan sekadar menampilkan angka, tetapi memberi dosen dan mahasiswa cara menilai apakah **player model** benar-benar menangkap perilaku pemain.

Tanpa debug UI, perubahan profil pemain hanya terasa samar. Mahasiswa mungkin bermain agresif, defensif, atau banyak eksplorasi, tetapi sulit membuktikan bahwa sistem adaptasi merespons dengan benar.

Debug UI sebaiknya menampilkan metrik seperti berikut:

```text
Shots Fired
Shots Hit
Accuracy
Kills
Damage Taken
Rooms Visited
Items Collected
Skill Score
Skill Level
Aggressive Score
Explorer Score
Dominant Style
Current Adaptation
```

Metrik ini dapat dikelompokkan menjadi beberapa bagian penting:

- **Combat feedback**: `Shots Fired`, `Shots Hit`, `Accuracy`, `Kills`, dan `Damage Taken` membantu menilai kemampuan tempur serta gaya bermain pemain.
- **Exploration feedback**: `Rooms Visited` menunjukkan seberapa aktif pemain menjelajah area.
- **Collection feedback**: `Items Collected` menunjukkan apakah pemain cenderung mengumpulkan item atau mengabaikannya.
- **Modeling output**: `Skill Score`, `Skill Level`, `Aggressive Score`, `Explorer Score`, dan `Dominant Style` adalah hasil pemrosesan dari metrik mentah.
- **Adaptation output**: `Current Adaptation` menunjukkan keputusan sistem adaptasi yang sedang aktif.

Alurnya sederhana. Data gameplay masuk ke sistem, kemudian diolah menjadi skor dan profil. Dari profil tersebut, sistem menentukan gaya dominan dan menampilkan adaptasi yang sedang berlaku. Dengan alur ini, mahasiswa dapat melihat hubungan sebab-akibat antara perilaku pemain dan respons game.

Hal yang perlu dipahami sebelum lanjut adalah bahwa debug UI bukan tambahan kosmetik. Ia adalah alat validasi. Jika `Accuracy` naik tetapi `Skill Score` tidak berubah, berarti ada masalah pada perhitungan. Jika pemain banyak menjelajah tetapi `Explorer Score` tetap rendah, berarti bobot atau aturan pemodelan perlu diperiksa.

### Inti yang Harus Ditekankan

- Debug UI berfungsi sebagai **jendela observasi** untuk menilai apakah player model bekerja.
- Metrik harus mencakup data mentah, skor turunan, gaya dominan, dan adaptasi aktif.
- Tanpa debug UI, sulit membedakan antara perilaku pemain yang berubah dan sistem adaptasi yang tidak berfungsi.

### Transisi ke Slide Berikutnya

Setelah memahami metrik apa yang perlu ditampilkan, langkah berikutnya adalah melakukan eksperimen langsung dengan berbagai gaya bermain.

---

## Slide 076 - Eksperimen Mahasiswa

### Narasi

Slide ini mengajak mahasiswa melakukan **eksperimen terkontrol** untuk menguji apakah **player profile** benar-benar mengikuti perilaku pemain. Tujuannya bukan hanya melihat angka berubah, tetapi memahami apakah perubahan tersebut masuk akal, konsisten, dan dapat digunakan oleh sistem adaptif.

Sebelum mencoba, mahasiswa perlu menyiapkan kondisi awal: nilai profile, `skillScore`, `aggressiveScore`, `explorerScore`, `itemCollection`, `dominantStyle`, dan `currentAdaptation` dicatat terlebih dahulu. Dengan begitu, setiap eksperimen bisa dibandingkan secara jelas.

Eksperimen perilaku dapat dilakukan sebagai berikut:

1. Bermain **agresif** dan amati apakah `aggressiveScore` atau `dominantStyle` bergeser ke arah agresif.
2. Bermain **defensif** dan amati apakah profile berubah menjadi lebih hati-hati atau berbeda dari sesi agresif.
3. Melakukan **eksplorasi** lebih banyak dan amati apakah `explorerScore` naik.
4. Menghindari pengumpulan item dan amati apakah `itemCollection` atau metrik terkait tetap rendah.

Eksperimen parameter berguna untuk memahami sensitivitas model:

5. Mengubah **bobot skill score** untuk melihat seberapa cepat `skillScore` naik atau turun.
6. Mengubah **aturan play style** untuk menguji apakah klasifikasi `dominantStyle` masih sesuai.
7. Mengubah **adaptation policy** untuk melihat bagaimana sistem menyesuaikan diri terhadap profile yang sama.

Eksperimen validasi membantu mahasiswa menilai kualitas model secara lebih objektif:

8. Membandingkan beberapa **play session** untuk melihat konsistensi profile.
9. Menyimpan profile ke **JSON** agar data dapat diperiksa, dibandingkan, atau digunakan ulang.
10. Menghubungkan profile dengan `DDA` untuk melihat apakah adaptasi kesulitan mengikuti gaya bermain pemain.

Contoh penyimpanan profile sederhana dapat berupa:

```json
{
  "skillScore": 0.64,
  "aggressiveScore": 0.72,
  "explorerScore": 0.38,
  "itemCollection": 0.21,
  "dominantStyle": "aggressive",
  "adaptation": "normal"
}
```

Potongan data ini penting karena profile bukan hanya label, melainkan kumpulan nilai yang dapat diuji. Jika pemain agresif tetapi `aggressiveScore` tidak berubah, atau pemain eksploratif tetapi `explorerScore` tetap rendah, maka ada masalah pada metrik, bobot, aturan, atau policy adaptasi.

Yang harus dipahami mahasiswa adalah bahwa eksperimen ini menjadi jembatan antara **player modeling** dan **adaptasi game**. Profile yang baik harus mencerminkan perilaku, mudah dibaca, stabil terhadap variasi kecil, dan cukup responsif terhadap perubahan gaya bermain.

### Inti yang Harus Ditekankan

- Eksperimen dilakukan untuk menguji apakah **player profile** berubah secara masuk akal.
- Perilaku agresif, defensif, eksplorasi, dan pengumpulan item harus menghasilkan perbedaan yang terlihat pada metrik.
- Perubahan bobot, aturan play style, dan `adaptation policy` membantu mahasiswa memahami sensitivitas sistem.
- Perbandingan beberapa sesi dan penyimpanan `JSON` penting untuk validasi dan debugging.
- Profile sebaiknya dapat menjadi input bagi `DDA` tanpa membuat adaptasi terasa tidak konsisten.

### Transisi ke Slide Berikutnya

Setelah eksperimen dilakukan, langkah berikutnya adalah mengevaluasi apakah data, metrik, profile, dan adaptasi benar-benar bekerja dengan baik.

---

## Slide 077 - Evaluasi Praktikum

### Narasi

Slide ini menjadi **checkpoint** setelah mahasiswa membangun sistem **player modeling** dan **sistem adaptif**. Tujuannya bukan hanya memastikan program berjalan, tetapi memastikan sistem benar-benar memahami perilaku pemain. Secara intuitif, jika data yang masuk salah, maka profil pemain yang dihasilkan juga salah, dan adaptasi yang diberikan bisa terasa tidak masuk akal.

Alur yang dievaluasi mengikuti pipeline: **telemetry** dari game -> **metrics** -> **player profile** -> **adaptation policy** -> perubahan perilaku game. Karena itu, pertanyaan evaluasi harus dibaca sebagai pemeriksaan tahap demi tahap, bukan sekadar daftar fitur.

Beberapa aspek utama yang perlu dicek:

1. **Kualitas data**: apakah `telemetry` tercatat dengan benar dan `metrics` dihitung dari data yang tepat?
2. **Validitas profil**: apakah `skill score` masuk akal dan `play style` sesuai cara bermain pemain?
3. **Stabilitas model**: apakah `player profile` berubah secara stabil, bukan terlalu cepat menyimpulkan dari sedikit data?
4. **Kesesuaian adaptasi**: apakah adaptasi sesuai profil dan terasa membantu, bukan mengganggu?
5. **Keterbacaan sistem**: apakah `UI debug` mudah dibaca dan sistem dapat dikembangkan lebih lanjut?

Dalam praktik, mahasiswa perlu membandingkan beberapa sesi bermain. Misalnya, pemain agresif seharusnya menghasilkan profil yang berbeda dari pemain defensif. Jika profil tidak berubah, model mungkin terlalu lambat. Jika profil berubah setiap detik, model mungkin terlalu sensitif.

Hal penting yang harus dipahami sebelum lanjut adalah bahwa **player model** bukan nilai final, melainkan estimasi yang terus diperbarui. Karena itu, evaluasi harus menilai apakah estimasi tersebut dapat dipercaya, dapat dijelaskan, dan dapat digunakan untuk mengambil keputusan adaptasi yang wajar.

### Inti yang Harus Ditekankan

- Evaluasi praktikum adalah validasi pipeline: `telemetry`, `metrics`, `player profile`, dan `adaptation policy`.
- Data yang salah akan menghasilkan profil dan adaptasi yang salah, meskipun kode berjalan tanpa error.
- Profil pemain harus stabil, masuk akal, dan tidak terlalu cepat menyimpulkan dari data sedikit.
- Adaptasi harus sesuai profil dan tetap terasa membantu, bukan mengganggu pengalaman bermain.
- `UI debug` penting untuk memeriksa apakah sistem benar-benar memahami pemain.

### Transisi ke Slide Berikutnya

Setelah kita mengevaluasi apakah sistem berjalan dengan benar, langkah berikutnya adalah mengenali pola kesalahan umum yang sering muncul dalam **player modeling**, sehingga mahasiswa dapat memperbaiki desain dan implementasinya secara lebih terarah.

---

## Slide 078 - Kesalahan Umum Player Modeling

### Narasi

Setelah kita memeriksa apakah telemetry, metrics, dan profile pemain tercatat dengan benar, langkah berikutnya adalah mengenali pola kegagalan yang sering muncul. Player modeling bukan sekadar mengumpulkan angka dari gameplay. Tujuannya adalah mengubah perilaku pemain menjadi **profile** yang cukup stabil, dapat dijelaskan, dan dapat dipakai oleh sistem adaptif untuk menyesuaikan tantangan, perilaku `NPC`, atau bantuan dalam game.

Intuisi praktisnya sederhana: jika model pemain salah, adaptasi akan terasa aneh. Pemain bisa merasa game tiba-tiba terlalu sulit, terlalu mudah, atau seolah membaca pikirannya. Karena itu, kesalahan pada tahap pememodelan sering berdampak langsung pada pengalaman bermain, bukan hanya pada nilai metrik di balik layar.

Sepuluh kesalahan pada slide ini dapat dibaca sebagai daftar pemeriksaan. Setiap poin menunjukkan bagian mana dari pipeline player modeling yang perlu diperbaiki.

1. **Mengambil kesimpulan dari data terlalu sedikit.**  
   Sampel awal biasanya berisik. Pemain mungkin belum memahami kontrol, sedang mencoba-coba, atau hanya bermain sebentar. Karena itu, `profile` tidak boleh terkunci hanya dari beberapa aksi. Sistem perlu memiliki minimum sample, confidence, atau smoothing sebelum mengubah perilaku game.

2. **Mencampur skill dan play style.**  
   `skill_score` dan `play_style` adalah dua hal yang berbeda. Skill menggambarkan kemampuan pemain, misalnya akurasi, kecepatan reaksi, atau kemampuan bertahan. Play style menggambarkan preferensi, misalnya `aggressive`, `cautious`, atau `explorer`. Pemain bisa memiliki skill tinggi tetapi bermain hati-hati, atau skill rendah tetapi sangat agresif.

3. **Menggunakan metric yang tidak sesuai genre.**  
   Metric harus mencerminkan inti tantangan game. Untuk game tembak, akurasi dan waktu reaksi bisa relevan. Untuk puzzle, tingkat penyelesaian dan jumlah kesalahan lebih penting. Untuk racing, konsistensi jalur atau waktu lap lebih bermakna daripada metrik yang tidak terhubung dengan tujuan utama game.

4. **Tidak menormalisasi metric.**  
   Metrik mentah sering memiliki skala berbeda. Satu metrik bisa bernilai 0 sampai 100, metrik lain 0 sampai 1000. Jika tidak dinormalisasi, satu metrik bisa mendominasi profile. Normalisasi seperti `min-max`, `z-score`, atau percentile membantu sistem membandingkan metrik secara adil.

5. **Tidak menampilkan debug profile.**  
   Jika profile tidak bisa dilihat, kita tidak bisa memverifikasi apakah model bekerja dengan benar. `debug_profile` sebaiknya menampilkan nilai seperti `skill_score`, `aggression`, `risk`, `sample_count`, dan `confidence`. Dengan debug, mahasiswa dapat memeriksa apakah perubahan profile sesuai dengan perilaku pemain.

6. **Adaptasi terlalu kuat.**  
   Perubahan yang terlalu besar membuat pemain merasa game tidak adil. Jika `skill_score` naik sedikit tetapi kesulitan langsung melonjak, pengalaman bermain bisa terasa kasar. Adaptasi sebaiknya bertahap, terbatas, dan tetap memberi ruang bagi pemain untuk merasa mengendalikan permainan.

7. **Adaptasi terlalu sering berubah.**  
   Jika sistem terus-menerus mengubah tantangan, pemain akan merasa game tidak stabil. Perilaku adaptif perlu memiliki `cooldown`, hysteresis, atau smoothing agar perubahan hanya terjadi ketika ada bukti yang cukup, bukan karena fluktuasi kecil dari satu metrik.

8. **Player model tidak pernah diperbarui.**  
   Profile yang statis akan cepat usang. Pemain bisa belajar, berubah strategi, atau bermain dengan gaya berbeda. Model perlu diperbarui secara bertahap, misalnya dengan `decay` atau time-weighted update, sehingga tetap responsif tetapi tidak terlalu mudah berubah.

9. **Data telemetry terlalu banyak tetapi tidak digunakan.**  
   Banyak data tidak otomatis menghasilkan model yang baik. Jika telemetry tidak dipetakan ke dimensi profile dan action adaptasi, data hanya menjadi beban. Setiap metrik perlu memiliki peran yang jelas: metrik mana yang memperbarui `skill_score`, metrik mana yang memperbarui `play_style`, dan metrik mana yang memicu perubahan perilaku `NPC`.

10. **Tidak ada adaptation policy yang jelas.**  
   Sistem adaptif perlu memiliki aturan yang jelas. Misalnya, jika `skill_score` tinggi dan `aggression` tinggi, `NPC` bisa meningkatkan kecepatan reaksi. Jika `skill_score` rendah dan `risk` tinggi, game bisa memberi petunjuk tambahan. Tanpa `adaptation_policy`, adaptasi akan terasa acak dan sulit diuji.

Yang perlu dipahami mahasiswa sebelum lanjut adalah bahwa player model yang baik harus **observable**, **explainable**, dan **gradual**. Mahasiswa harus bisa menelusuri alur: data mentah menjadi metrik, metrik menjadi profile, profile memicu action adaptasi, dan action tersebut dapat diuji melalui debug.

### Inti yang Harus Ditekankan

- Player model harus membedakan **skill** dan **play style** karena keduanya memengaruhi adaptasi dengan cara yang berbeda.
- Metrics harus sesuai genre, dinormalisasi, dan didukung `debug_profile` agar model dapat diverifikasi.
- Adaptasi harus bertahap, terbatas, dan diatur oleh `adaptation_policy` yang jelas, bukan perubahan mendadak atau terlalu sering.

### Transisi ke Slide Berikutnya

Setelah memahami kesalahan teknis dalam pemodelan pemain, kita perlu membahas batas yang lebih luas: etika dan privasi. Karena telemetry adalah data perilaku, kita harus menentukan data apa yang layak direkam, disimpan, dan digunakan.

---

## Slide 079 - Isu Etika dan Privasi

### Narasi

Pada tahap **player modeling**, **telemetri pemain** bukan sekadar angka teknis. Ia adalah **data perilaku** yang menggambarkan bagaimana pemain mengambil keputusan, bergerak, gagal, dan menyesuaikan diri dengan lingkungan game. Karena data ini bisa dipakai untuk menyesuaikan tantangan atau respons sistem game, kita perlu memperlakukannya dengan hati-hati.

Sebelum data dipakai untuk adaptasi, ada beberapa pertanyaan yang harus dijawab:

- **Data apa yang direkam?** Hanya metrik yang benar-benar relevan dengan tujuan desain, misalnya `gameplay metrics`, bukan data yang berlebihan.
- **Apakah data disimpan?** Penyimpanan harus jelas: lokal, sementara, atau persisten.
- **Apakah data dikirim ke server?** Jika dikirim, perlu ada alasan teknis yang kuat dan batasannya harus dipahami.
- **Apakah pemain diberi tahu?** Transparansi penting agar pemain memahami bahwa perilakunya diamati untuk keperluan game.
- **Apakah data digunakan secara adil?** Data tidak boleh dipakai untuk memanipulasi, merugikan, atau membatasi pilihan pemain secara tidak wajar.

Dalam praktikum, pendekatan yang paling aman adalah menyimpan data secara **lokal**, tidak meminta **data pribadi**, dan membatasi fokus pada **metrik gameplay**. Dengan cara ini, eksperimen tetap bisa dilakukan tanpa menambah risiko privasi yang tidak perlu.

Prinsip utamanya dapat diringkas sebagai berikut:

```text
Rekam data seperlunya untuk tujuan desain game.
```

Artinya, setiap variabel telemetri harus memiliki alasan desain yang jelas. Jika data tidak membantu memahami perilaku pemain atau tidak mendukung keputusan adaptasi, sebaiknya tidak direkam.

### Inti yang Harus Ditekankan

- **Telemetri pemain** adalah **data perilaku**, bukan sekadar log teknis.
- Data harus direkam, disimpan, dikirim, dan digunakan dengan **batas yang jelas**.
- Dalam praktikum, gunakan **data lokal**, hindari **data pribadi**, dan fokus pada **metrik gameplay**.
- Prinsip utama: **rekam data seperlunya** untuk tujuan desain game.

### Transisi ke Slide Berikutnya

Setelah membahas batas etika dan privasi, langkah berikutnya adalah memastikan bahwa adaptasi yang dibangun juga **adil** bagi pemain.

---

## Slide 080 - Player Modeling dan Fairness

### Narasi

Slide ini membahas **fairness** dalam adaptasi game. **Player modeling** bukan hanya mengukur seberapa ahli seorang pemain, tetapi juga memahami gaya bermainnya: apakah pemain lebih agresif, defensif, eksploratif, atau membutuhkan ruang belajar. Tujuannya adalah membuat game menyesuaikan diri secara adil, bukan membuat pemain merasa dihukum atau dibantu secara berlebihan.

Intuisi praktisnya sederhana: adaptasi yang baik menjaga **challenge** dan **agency**. Jika pemain sudah kuat, tantangan boleh dinaikkan melalui variasi, tempo, atau pola perilaku NPC, bukan dengan membuat musuh terasa tidak wajar. Jika pemain masih belajar, game boleh memberi bantuan, tetapi bantuan itu harus tetap membiarkan pemain mengambil keputusan.

Beberapa contoh masalah yang perlu dihindari:

- pemain ahli terus dihukum dengan enemy yang terlalu kuat,
- pemain eksploratif dipaksa terus eksplorasi,
- pemain defensif selalu diserang dari flank,
- pemain low skill terlalu banyak dibantu sehingga game kehilangan tantangan.

Masalah ini muncul ketika adaptasi hanya mengejar satu metrik, misalnya `difficulty`, tanpa memperhatikan konteks perilaku. Dalam sistem game, `player_model` sebaiknya menjadi input yang memengaruhi `enemy_behavior`, `level_flow`, `reward`, dan `feedback`, tetapi tetap dibatasi oleh aturan desain. Dengan begitu, perubahan yang dirasakan pemain masih masuk akal dan tidak terasa seperti sistem yang melawan.

Adaptasi yang baik memiliki empat arah utama:

- mendukung gaya bermain,
- menjaga tantangan,
- tidak memaksa,
- tetap memberi agency.

Dalam implementasi, `player_model` dapat menjadi sinyal untuk `FSM`, `behavior tree`, `utility`, `steering`, atau `pathfinding`. Misalnya, jika pemain sering bertahan, NPC tidak perlu selalu melakukan flank; sistem bisa memberi ruang, menyesuaikan tempo, atau menawarkan jalur alternatif. Jika pemain sering mengambil risiko, game bisa memberi konsekuensi yang lebih jelas tanpa menghilangkan peluang untuk pulih.

Sebelum lanjut, mahasiswa perlu memahami bahwa player modeling yang adil bukan berarti membuat semua pemain mengalami hal yang sama. Yang penting adalah sistem adaptif mengenali perbedaan perilaku, lalu meresponsnya dengan cara yang tetap menghormati pilihan pemain.

### Inti yang Harus Ditekankan

- **Adaptasi yang adil** menjaga **challenge** dan **agency**, bukan menghukum atau membantu berlebihan.
- **Player model** harus mendukung gaya bermain: ahli, eksploratif, defensif, atau low skill.
- Implementasi adaptasi perlu batas: `player_model` memengaruhi perilaku game, tetapi tidak menghilangkan pilihan pemain.

### Transisi ke Slide Berikutnya

Setelah memahami prinsip fairness, kita akan melihat bagaimana player model menjadi titik temu dari berbagai sistem yang sudah dibahas sebelumnya.

---

## Slide 081 - Hubungan dengan Materi Sebelumnya

### Narasi

Slide ini berfungsi sebagai **peta integrasi** sebelum kita membahas adaptasi yang lebih personal. Intuisi utamanya sederhana: **player model** bukan modul terpisah, melainkan **sumber data** yang dapat dipakai oleh banyak sistem game.

`player model` dibangun dari sinyal perilaku pemain, lalu menjadi input untuk keputusan NPC, konten, dan difficulty. Dengan kata lain, ia menghubungkan pengamatan terhadap pemain dengan perilaku yang dihasilkan game.

- `perception` dan `memory` menyediakan data dasar tentang pemain.
- `FSM`, `Behavior Tree`, dan `Utility AI` memakai data tersebut untuk memilih perilaku atau prioritas aksi.
- `PCG` dapat menyesuaikan konten yang dihasilkan berdasarkan profil pemain.
- `DDA` dapat mengatur tingkat kesulitan agar tetap menantang dan sesuai gaya bermain.

Poin penting yang harus dipahami: kualitas adaptasi game sangat bergantung pada kualitas `player model`. Jika model tidak akurat, keputusan NPC, konten yang dihasilkan, dan penyesuaian difficulty juga akan meleset.

### Inti yang Harus Ditekankan

- **Player model** adalah input lintas sistem, bukan fitur berdiri sendiri.
- `perception`, `memory`, `FSM`, `Behavior Tree`, `Utility AI`, `PCG`, dan `DDA` saling terhubung melalui model pemain.
- Akurasi `player model` menentukan apakah adaptasi game terasa personal, adil, dan tidak memaksa.

### Transisi ke Slide Berikutnya

Setelah memahami posisi `player model` sebagai pusat integrasi, kita akan melihat bagaimana konsep ini dapat dikembangkan dengan **machine learning**, sekaligus batasannya dalam praktikum awal.

---

## Slide 082 - Hubungan dengan Materi Berikutnya

### Narasi

Slide ini berfungsi sebagai penanda batas pembahasan. Setelah kita membahas **player modeling** dan **adaptive game**, materi berikutnya dalam rencana pembelajaran adalah **Machine Learning for Games**.

Hubungannya cukup langsung: player modeling yang kita bangun sekarang dapat menjadi dasar untuk pengembangan yang lebih lanjut menggunakan **machine learning**. Data seperti `telemetry`, `gameplay metrics`, `skill score`, dan `play style` dapat menjadi fitur untuk model yang lebih otomatis.

Beberapa arah pengembangan yang mungkin muncul adalah:

- **klasifikasi play style** untuk mengenali apakah pemain cenderung `aggressive`, `defensive`, atau `explorer`;
- **prediksi churn** untuk memperkirakan kemungkinan pemain berhenti bermain;
- **prediksi skill** untuk memperbarui estimasi kemampuan pemain;
- **rekomendasi difficulty** untuk menyesuaikan tantangan;
- **clustering player** untuk mengelompokkan pemain dengan pola bermain serupa.

Namun, untuk mata kuliah ini, praktikum awal cukup menggunakan **rule-based modeling** dan **score-based modeling**. Alasannya, pendekatan ini lebih mudah dipahami, diuji, dan dijelaskan secara transparan. Mahasiswa dapat melihat bagaimana aturan atau skor mengubah `player profile`, lalu bagaimana profil tersebut memengaruhi perilaku NPC, musuh, konten adaptif, atau kebijakan kesulitan.

Sebelum lanjut ke materi berikutnya, yang penting dipahami adalah bahwa player modeling bukan sekadar mengumpulkan data, tetapi mengubah data menjadi keputusan desain dan perilaku game yang lebih personal.

### Inti yang Harus Ditekankan

- **Machine Learning for Games** adalah lanjutan alami dari player modeling, tetapi bukan fokus praktikum awal.
- Contoh pengembangan machine learning meliputi `klasifikasi play style`, `prediksi churn`, `prediksi skill`, `rekomendasi difficulty`, dan `clustering player`.
- Untuk praktikum awal, **rule-based** dan **score-based modeling** sudah cukup karena lebih transparan, mudah diuji, dan mudah dihubungkan dengan `adaptive enemy` atau `adaptive PCG`.

### Transisi ke Slide Berikutnya

Dengan memahami batas ini, kita dapat kembali merangkum seluruh alur materi hari ini: dari telemetri, metrik, estimasi skill, profil pemain, hingga kebijakan adaptasi yang membentuk pengalaman bermain yang lebih personal.

---

## Slide 083 - Ringkasan Materi

### Narasi

Slide ini menjadi penutup dari materi **player modeling** dan **sistem adaptif game**. Intinya, kita tidak hanya mengumpulkan data pemain, tetapi mengubah data tersebut menjadi **pemahaman tentang cara bermain** yang dapat dipakai oleh game untuk menyesuaikan pengalaman. Dengan kata lain, player modeling adalah jembatan antara perilaku pemain dan sistem adaptif di dalam game.

Alur utamanya dapat dilihat dari pohon materi: data dimulai dari **Player Telemetry** dan **Telemetry Event**, kemudian diolah menjadi **Gameplay Metrics**. Dari metrik tersebut, sistem melakukan **Skill Estimation** dan menghasilkan **Skill Score**, serta mengidentifikasi **Play Style** seperti **Aggressive**, **Defensive**, atau **Explorer**. Hasil-hasil ini digabungkan menjadi **Player Profile** yang dilengkapi **Confidence** dan penanganan **Cold Start**. Setelah profil terbentuk, **Adaptation Policy** menentukan bagaimana game mengubah perilaku, misalnya melalui **adaptive enemy behavior** atau **adaptive PCG**, lalu diimplementasikan dalam **Unity Player Modeling Architecture**.

```text
Telemetry Event
  -> Gameplay Metrics
  -> Skill Estimation / Play Style
  -> Player Profile + Confidence
  -> Adaptation Policy
  -> Adaptive Enemy Behavior / Adaptive PCG
```

Yang perlu ditekankan, player model tidak boleh dibuat terlalu cepat atau terlalu kaku. **Confidence** membantu sistem tahu seberapa yakin ia terhadap profil pemain, sementara **Cold Start** menjelaskan cara menangani pemain baru yang datanya masih sedikit. **Adaptation Policy** juga penting karena ia mengatur batas dan cara perubahan: game tidak boleh langsung mengubah kesulitan secara ekstrem hanya dari beberapa event.

### Inti yang Harus Ditekankan

- **Player modeling** mengubah data gameplay menjadi pemahaman tentang **skill** dan **play style** pemain.
- Alur utamanya adalah `telemetry event` -> `gameplay metrics` -> `skill score` / `play style` -> `player profile` -> `adaptation policy`.
- **Confidence** dan **cold start** penting agar model tidak menyimpulkan profil pemain terlalu cepat.
- **Adaptation policy** menentukan bagaimana profil pemain memengaruhi **enemy behavior**, **difficulty**, atau **PCG**.
- **Unity Player Modeling Architecture** menjadi wadah implementasi agar data, model, dan perilaku game dapat terhubung di runtime.

### Transisi ke Slide Berikutnya

Setelah ringkasan ini, kita akan menguji pemahaman melalui beberapa pertanyaan diskusi yang membandingkan konsep-konsep kunci, seperti perbedaan **DDA** dan player modeling, hubungan **telemetry** dengan **metrics**, serta cara memilih metrik yang sesuai untuk genre tertentu.

---

## Slide 084 - Pertanyaan Diskusi

### Narasi

Slide ini digunakan untuk memastikan mahasiswa tidak hanya menghafal istilah, tetapi dapat membedakan fungsi masing-masing komponen dalam materi **player modeling** dan sistem adaptif game. Kita tidak menambah materi baru; tugasnya adalah menguji pemahaman sebelum masuk ke latihan.

Fokus diskusi dapat dikelompokkan sebagai berikut:

- **DDA vs player modeling**: **DDA** adalah kebijakan penyesuaian tantangan, sedangkan **player modeling** adalah proses membangun representasi tentang player. Player model bisa menjadi input DDA, tetapi keduanya bukan hal yang sama.
- **Telemetry vs metrics**: `telemetry` adalah data mentah atau event yang dikumpulkan, misalnya posisi, aksi, dan hasil interaksi. `metrics` adalah nilai yang sudah diolah, diringkas, dan dapat diinterpretasi, misalnya tingkat keberhasilan atau frekuensi perilaku.
- **Skill vs play style**: `skill` menggambarkan kemampuan player, sedangkan `play style` menggambarkan preferensi perilaku, seperti agresif, defensif, atau explorer. Keduanya tidak boleh dicampur karena adaptasi yang salah bisa membuat game terasa tidak adil atau tidak sesuai gaya bermain.
- **Metrics per genre**: untuk game survival, metrik yang relevan biasanya terkait bertahan hidup, misalnya `health remaining`, `damage taken`, `time survived`, dan `death count`. Untuk game stealth, metrik yang relevan biasanya terkait terdeteksi atau tidak, misalnya `detection count`, `stealth duration`, `noise level`, atau `failed ambush`.
- **Mengenali player agresif dan explorer**: player agresif dapat dikenali dari frekuensi serangan yang tinggi, kemauan mengambil risiko, dan sedikit mundur. Player explorer dapat dikenali dari cakupan area yang dikunjungi, interaksi dengan konten opsional, dan waktu yang dihabiskan menjelajah.
- **Keterbatasan player model**: player model tidak boleh disimpulkan terlalu cepat karena data awal bisa sedikit, berisik, atau belum stabil. Diperlukan `confidence` dan mekanisme `cold start` agar game tidak salah menilai player di awal.
- **Adaptation policy dan perilaku musuh**: `adaptation policy` menentukan bagaimana model player digunakan untuk mengubah perilaku game. Dalam perilaku musuh, model player dapat memengaruhi agresivitas, keputusan menyerang atau mundur, target prioritas, dan parameter `behavior tree` atau `state machine`.

Pertanyaan-pertanyaan pada slide ini sebaiknya dibahas dengan contoh konkret, bukan hanya definisi. Mahasiswa perlu memahami bahwa player modeling bukan sekadar mengumpulkan data, tetapi mengubah data menjadi keputusan yang aman, adil, dan sesuai konteks gameplay.

### Inti yang Harus Ditekankan

- **Player modeling** adalah representasi player; **DDA** adalah kebijakan penyesuaian yang bisa memakai representasi tersebut.
- `telemetry` adalah data mentah, sedangkan `metrics` adalah nilai yang sudah diolah dan dapat diinterpretasi.
- `skill` dan `play style` harus dipisahkan agar adaptasi game tidak bias.
- Player model harus dibangun secara bertahap dengan mempertimbangkan `confidence`, `cold start`, dan perubahan perilaku player.
- `adaptation policy` adalah jembatan antara model player dan perubahan perilaku game, termasuk perilaku musuh.

### Transisi ke Slide Berikutnya

Setelah konsep-konsep ini jelas, kita akan masuk ke latihan **Skill Estimation** untuk game arena survival. Di sana, mahasiswa akan mulai menerapkan metrik dan `skill score` secara praktis.

---

## Slide 085 - Latihan Konsep Skill Estimation

### Narasi

Pada slide ini kita berlatih merancang **skill estimation** untuk game arena survival. Tujuannya adalah mengubah data permainan menjadi nilai kemampuan pemain yang dapat dibandingkan, diuji, dan digunakan oleh sistem game. Skill estimation tidak sama dengan menilai gaya bermain; ia menjawab pertanyaan seberapa mampu pemain menyelesaikan tantangan, bukan bagaimana pemain memilih bermain.

Data yang tersedia adalah:

```text
health remaining
damage taken
enemy killed
accuracy
time survived
death count
```

Secara intuitif, pemain yang terampil biasanya tidak hanya banyak membunuh musuh, tetapi juga mampu bertahan lebih lama, menembak lebih akurat, dan mengurangi jumlah kematian. Dalam arena survival, `time survived` sering menjadi sinyal penting karena menunjukkan kemampuan bertahan hidup, sementara `accuracy` menunjukkan kualitas eksekusi. `enemy killed` memberi sinyal ofensif, tetapi harus dibaca bersama `death count` agar pemain yang agresif dan cepat mati tidak otomatis dinilai lebih tinggi.

Untuk latihan ini, metrik yang digunakan dapat dipilih sebagai berikut:

- `accuracy`: mengukur efektivitas tembakan atau serangan.
- `time survived`: mengukur ketahanan pemain dalam arena.
- `enemy killed`: mengukur kontribusi ofensif.
- `death count`: mengukur frekuensi kegagalan, sehingga nilainya lebih baik jika kecil.
- `damage taken`: mengukur kerentanan pemain, sehingga nilainya lebih baik jika kecil.
- `health remaining`: mengukur kondisi akhir sesi, berguna jika data akhir sesi tersedia.

Karena setiap metrik memiliki satuan dan rentang yang berbeda, kita perlu melakukan normalisasi. Untuk metrik yang sudah berada dalam rentang tetap, misalnya `accuracy` dari 0 sampai 100, nilai dapat langsung dibagi dengan rentangnya. Untuk metrik seperti `time survived`, `enemy killed`, `damage taken`, dan `death count`, kita dapat menggunakan normalisasi minimum-maksimum:

```text
norm(x) = (x - min) / (max - min)
```

Untuk metrik yang lebih kecil lebih baik, seperti `death count` dan `damage taken`, kita balik nilainya:

```text
norm_inverse(x) = 1 - norm(x)
```

Jika `max` sama dengan `min`, nilai dapat ditetapkan 0 atau 0.5 agar tidak terjadi pembagian nol.

Rumus skill score yang sederhana dapat menggunakan **weighted sum**. Setiap metrik diberi bobot sesuai peran pentingnya, lalu dijumlahkan menjadi skor 0 sampai 100:

```text
skill_score = 100 * (
  0.30 * norm(accuracy)
+ 0.20 * norm(time_survived)
+ 0.15 * norm(enemy_killed)
+ 0.15 * norm_inverse(death_count)
+ 0.10 * norm_inverse(damage_taken)
+ 0.10 * norm(health_remaining)
)
```

Bobot ini tidak bersifat mutlak. Dosen dan mahasiswa dapat mengubahnya untuk melihat bagaimana perubahan bobot memengaruhi hasil. Yang penting, total bobot tetap 1.00 agar skor tetap berada dalam rentang yang konsisten.

Batas kategori dapat ditetapkan sebagai berikut:

- **Low**: `skill_score` kurang dari 40.
- **Medium**: `skill_score` antara 40 sampai 69.
- **High**: `skill_score` 70 atau lebih.

Batas ini cocok untuk latihan awal dan mudah dijelaskan.

Contoh interpretasi: pemain dengan `accuracy` tinggi, `time survived` panjang, `death count` rendah, dan `damage taken` terkendali akan cenderung mendapat skor **High**, meskipun jumlah `enemy killed` tidak terbesar. Sebaliknya, pemain dengan banyak `enemy killed` tetapi sering mati, kurang akurat, dan bertahan singkat dapat berada di kategori **Medium** atau **Low**. Interpretasi seperti ini membantu kita memahami bahwa skill estimation harus membaca pola keseluruhan, bukan satu metrik tunggal.

Sebelum lanjut, mahasiswa perlu memahami beberapa hal penting:

- Skill estimation adalah estimasi berbasis data, bukan label pasti.
- Metrik harus relevan dengan tujuan game dan tidak boleh dicampur dengan preferensi gaya bermain.
- Normalisasi dan bobot sangat memengaruhi hasil, sehingga desain rumus harus bisa dijelaskan alasannya.

### Inti yang Harus Ditekankan

- **Skill estimation** mengubah data permainan menjadi nilai kemampuan yang dapat dibandingkan, bukan sekadar menghitung kill.
- Normalisasi diperlukan karena `accuracy`, `time survived`, `death count`, dan metrik lain memiliki satuan serta arah yang berbeda.
- Rumus skill score sebaiknya menggunakan **weighted sum** dengan bobot yang dapat dijelaskan, lalu dipetakan ke kategori **Low**, **Medium**, dan **High**.
- Interpretasi hasil harus melihat pola keseluruhan, misalnya pemain yang bertahan lama dan akurat dapat lebih terampil daripada pemain yang banyak kill tetapi cepat mati.

### Transisi ke Slide Berikutnya

Setelah kita memahami cara menilai kemampuan pemain, langkah berikutnya adalah membedakan kemampuan dari gaya bermain. Pada slide berikutnya, kita akan merancang klasifikasi play style untuk tiga kategori, yaitu agresif, defensif, dan eksploratif.

---

## Slide 086 - Latihan Konsep Play Style

### Narasi

Pada slide ini, kita beralih dari estimasi kemampuan pemain ke pengenalan **play style**. Tujuannya bukan menilai pemain “baik” atau “buruk”, tetapi memahami **pola perilaku** yang paling sering ditunjukkan pemain selama bermain.

```text
Aggressive
Defensive
Explorer
```

Ketiga gaya ini mewakili cara pemain berinteraksi dengan lingkungan game. **Aggressive** menunjukkan pemain yang sering menyerang dan mengambil risiko. **Defensive** menunjukkan pemain yang menjaga keselamatan dan menghindari bahaya. **Explorer** menunjukkan pemain yang lebih banyak menjelajah, mengumpulkan informasi, atau mencari area baru.

Untuk gaya **Aggressive**, metrik yang relevan bisa berupa:

- `damage_dealt`
- `combat_time`
- `enemy_killed`
- `attack_frequency`
- `distance_to_enemy`
- `risk_taken`

Metrik-metrik ini membantu sistem mengenali apakah pemain cenderung menyerang lebih dulu, bertahan dalam pertempuran, atau mengejar musuh secara aktif.

Untuk gaya **Defensive**, metrik yang relevan bisa berupa:

- `health_remaining`
- `healing_used`
- `retreat_frequency`
- `distance_from_enemy`
- `survival_time`
- `damage_avoided`

Sementara itu, untuk gaya **Explorer**, metrik yang relevan bisa berupa:

- `map_coverage`
- `new_areas_visited`
- `items_collected`
- `path_length`
- `time_away_from_main_objective`
- `curiosity_score`

Penentuan **dominant style** biasanya dilakukan dengan menghitung skor untuk setiap gaya. Setiap metrik dinormalisasi terlebih dahulu agar skala metrik tidak saling mendominasi. Setelah itu, metrik diberi bobot sesuai relevansinya terhadap gaya tersebut.

```text
style_score = Σ (weight_i × normalized_metric_i)
```

Gaya dengan skor tertinggi dapat dianggap sebagai gaya dominan. Namun, jika dua gaya memiliki skor yang sangat dekat, sistem tidak boleh langsung memilih secara acak.

Jika dua gaya sama kuat, ada beberapa cara yang bisa digunakan:

1. Gunakan **jendela waktu terakhir** untuk melihat gaya mana yang lebih baru muncul.
2. Gunakan **margin threshold**, misalnya jika selisih skor di bawah nilai tertentu, pemain diberi label **hybrid**.
3. Gunakan **confidence score** berdasarkan konsistensi metrik.
4. Gunakan konteks situasi, misalnya pemain sedang menjelajah karena sedang mencari jalur, bukan karena gaya dasarnya explorer.

Hal yang harus dipahami mahasiswa sebelum lanjut adalah bahwa **play style classifier** menghasilkan profil perilaku, bukan satu-satunya dasar adaptasi. Profil ini kemudian bisa digunakan untuk menyesuaikan perilaku NPC, tingkat tantangan, atau respons lingkungan.

### Inti yang Harus Ditekankan

- **Play style** menggambarkan pola perilaku pemain, bukan hanya tingkat kemampuannya.
- Setiap gaya membutuhkan metrik yang berbeda: **Aggressive** fokus pada serangan dan risiko, **Defensive** fokus pada keselamatan, **Explorer** fokus pada penjelajahan.
- Dominant style ditentukan melalui **normalisasi**, **pembobotan**, dan **perhitungan skor**.
- Jika dua gaya sama kuat, perlu mekanisme tie-breaker seperti **recency**, **threshold**, atau label **hybrid**.

### Transisi ke Slide Berikutnya

Setelah gaya dominan pemain berhasil diidentifikasi, langkah berikutnya adalah menentukan bagaimana sistem adaptif merespons profil tersebut.

---

## Slide 087 - Latihan Adaptation Policy

### Narasi

Pada latihan ini, kita sudah memiliki profil pemain yang dihasilkan dari metrics sebelumnya. Profil ini bukan tujuan akhir, melainkan input untuk **adaptation policy**, yaitu aturan yang menentukan bagaimana gameplay berubah agar tetap menantang dan adil.

```text
Skill Level: High
Dominant Style: Aggressive
Explorer Score: Low
Risk Score: High
```

Profil ini menggambarkan pemain yang percaya diri, sering memilih konfrontasi, kurang mengeksplorasi, dan bersedia mengambil risiko. Intuisi praktisnya: sistem adaptasi tidak perlu membuat pemain merasa "dihukum", tetapi bisa memberikan tantangan yang sesuai dengan cara mainnya.

Untuk merancang policy, kita jawab lima pertanyaan berikut.

1. **Enemy behavior**: NPC dapat dibuat lebih proaktif. Dalam `FSM` atau behavior tree, state seperti `Patrol`, `Engage`, `Flank`, dan `Retreat` bisa diberi bobot berbeda. Misalnya, `Flank` lebih sering muncul, `Engage` lebih agresif, dan `Retreat` hanya saat `health` rendah.
2. **Resource**: Resource bisa diubah menjadi high-risk high-reward. Pickup bernilai tinggi ditempatkan dekat area berbahaya, sementara resource aman dikurangi. Tujuannya bukan membuat pemain kekurangan, tetapi membuat keputusan risiko lebih bermakna.
3. **PCG level**: Tidak selalu perlu mengubah seluruh level. Perubahan bisa dilakukan secara lokal: kepadatan musuh, variasi musuh, penempatan hazard, jalur patroli, atau titik spawn. Ini menjaga fairness karena pemain masih memiliki ruang untuk membaca pola.
4. **Fairness**: Adaptasi harus gradual. Gunakan `cooldown`, batas atas dan bawah difficulty, serta hindari perubahan mendadak setelah satu kesalahan. Pemain harus tetap merasa memiliki kendali atas hasil gameplay.
5. **Debug info**: Tampilkan profil aktif, confidence, perubahan terakhir, `cooldown`, dan event log. Contoh: `Skill: High`, `Style: Aggressive`, `Adaptation: +10% enemy aggression`, `Cooldown: 30s`.

Yang perlu dipahami mahasiswa sebelum lanjut: adaptation policy bukan sekadar menaikkan difficulty. Ia adalah terjemahan dari player model ke keputusan desain yang dapat diuji, dipantau, dan dikoreksi.

### Inti yang Harus Ditekankan

- **Adaptation policy** mengubah profil pemain menjadi perubahan gameplay yang terukur dan terkontrol.
- Perubahan harus **gradual**, **adil**, dan tetap menjaga **player agency**.
- **Debug info** penting untuk memastikan adaptasi tidak bias, tidak terlalu agresif, dan mudah divalidasi.

### Transisi ke Slide Berikutnya

Dengan policy ini, kita sudah memiliki gambaran bagaimana profil pemain diterjemahkan ke perubahan gameplay. Selanjutnya kita masuk ke penutup pertemuan dan gambaran praktikum, yaitu merekam telemetry, menghitung metrics, membuat player model sederhana, dan menyiapkan debug UI.

---

## Slide 088 - Penutup

### Narasi

Slide ini menjadi penutup pertemuan ke-12 tentang **Player Modeling** dan sistem adaptif dalam game. Poin utamanya adalah bahwa **player modeling** bukan sekadar mengumpulkan data dari pemain. Yang lebih penting adalah memilih data yang relevan, mengolahnya menjadi **metrics**, menyimpulkan model pemain secara hati-hati, lalu menggunakannya untuk menyesuaikan gameplay agar tetap adil dan menyenangkan.

Untuk praktikum, detail akan dibuat pada modul terpisah dengan fokus:

```text
Merekam gameplay metrics
dan membuat player model sederhana di Unity
```

Fokus praktikum yang perlu dipahami mahasiswa:

- `telemetry event`: data mentah yang direkam saat gameplay berlangsung.
- `metrics calculation`: proses mengubah data mentah menjadi ukuran yang bermakna.
- `skill estimation`: memperkirakan kemampuan pemain berdasarkan pola bermain.
- `play style classification`: mengidentifikasi gaya bermain, misalnya agresif, defensif, atau eksploratif.
- `player profile`: ringkasan model pemain yang dapat digunakan sistem game.
- `adaptation policy`: aturan perubahan perilaku game berdasarkan `player profile`.
- `debug UI`: tampilan diagnostik untuk memeriksa apakah adaptasi berjalan benar.

Urutan pembelajaran yang disarankan:

1. Review **DDA** dari pertemuan sebelumnya.
2. Pahami bahwa **DDA** hanya salah satu bagian dari sistem adaptif game.
3. Kenalkan **player telemetry**.
4. Bedakan `telemetry` dan `metrics`.
5. Bahas `skill estimation`.
6. Bedakan **skill** dan **play style**.
7. Bahas `player profile`.
8. Perkenalkan `adaptation policy`.
9. Hubungkan player model dengan perilaku NPC, PCG, dan DDA.
10. Tutup dengan gambaran praktikum di `Unity`.

Sebagai penekanan akhir, mahasiswa perlu mengingat bahwa kualitas player model ditentukan oleh **relevansi data**, **kehati-hatian interpretasi**, dan **keadilan adaptasi**. Data yang terlalu banyak tidak selalu menghasilkan model yang lebih baik; yang penting adalah data tersebut benar-benar mendukung keputusan gameplay yang lebih baik.

### Inti yang Harus Ditekankan

- **Player modeling** adalah proses memilih, mengolah, dan menafsirkan data pemain, bukan sekadar merekam semua data.
- `telemetry` adalah data mentah, sedangkan `metrics` adalah hasil olahan yang dapat digunakan untuk memahami pemain.
- `skill estimation` dan `play style classification` adalah dua aspek berbeda yang perlu dipisahkan dalam `player profile`.
- `adaptation policy` harus menjaga gameplay tetap adil, menyenangkan, dan dapat diuji melalui `debug UI`.
- Praktikum di `Unity` menjadi langkah konkret untuk menghubungkan konsep player model dengan implementasi game.

### Transisi ke Slide Berikutnya

Dengan penutup ini, pertemuan ke-12 selesai. Materi berikutnya akan memasuki `Machine Learning for Games`, yang akan memperluas cara sistem game belajar dan menyesuaikan diri terhadap pemain.
