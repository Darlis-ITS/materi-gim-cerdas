# Narasi Game Cerdas - Pertemuan 15

## Advanced Game AI & Final Project Development

Sumber: markdown/pert15.md

---

## Slide 001 - Cover

### Narasi

Selamat datang pada **Pertemuan 15** mata kuliah **Game Cerdas**. Pertemuan ini berjudul **Advanced Game AI & Final Project Development**, dan menjadi titik di mana mahasiswa tidak lagi mempelajari satu teknik AI secara terpisah, tetapi mulai melihat bagaimana berbagai komponen tersebut bekerja bersama dalam satu sistem permainan yang utuh.

Pada pertemuan ini, kita akan membahas beberapa topik lanjutan, yaitu **AI Director**, **adaptive systems**, **emergent behavior**, **debugging Game AI**, **evaluasi Game AI**, serta **integrasi AI dalam proyek akhir**. Fokus utamanya adalah bagaimana mahasiswa mampu merancang, menguji, dan menilai perilaku AI dalam sebuah `mini game` yang dapat dimainkan, menarik, dan memiliki dasar evaluasi yang jelas.

Perlu dicatat bahwa praktikum **Integrasi AI dalam proyek akhir** akan dibuat terpisah. Dengan demikian, pertemuan ini berfungsi sebagai landasan konseptual dan teknis sebelum mahasiswa menyusun proyek akhir yang mengombinasikan teknik-teknik Game AI yang telah dipelajari sebelumnya.

### Inti yang Harus Ditekankan

- Pertemuan 15 adalah tahap integrasi, bukan pengenalan satu teknik baru.
- Mahasiswa perlu memahami bahwa perilaku AI game harus dapat **diuji**, **dibaca**, dan **dinilai** secara sistematis.
- Proyek akhir diharapkan menghasilkan `mini game` yang utuh, dapat dimainkan, dan memiliki evaluasi AI yang jelas.

### Transisi ke Slide Berikutnya

Selanjutnya, kita akan melihat posisi pertemuan ini dalam keseluruhan alur materi, agar mahasiswa memahami teknik apa saja yang akan diintegrasikan pada tahap final project.

---

## Slide 002 - Posisi Pertemuan 15

### Narasi

Slide ini menegaskan bahwa **Pertemuan 15** berada pada posisi yang berbeda dari pertemuan sebelumnya. Jika pertemuan-pertemuan awal membahas satu kemampuan AI secara terpisah, maka pertemuan ini menjadi **tahap persiapan final project**, yaitu saat mahasiswa mulai melihat seluruh teknik sebagai satu sistem yang harus bekerja bersama dalam game.

Secara garis besar, materi sebelumnya membentuk fondasi:

- `Pertemuan 1–2`: pengenalan AI dalam game, **perception**, dan **memory**.
- `Pertemuan 3`: **movement AI** dan **steering**.
- `Pertemuan 4`: **pathfinding** dan **navigation**.
- `Pertemuan 5`: **Finite State Machine**.
- `Pertemuan 6`: **Behavior Tree** dan **Utility AI**.
- `Pertemuan 7`: integrasi Game AI dan **tactical AI**.
- `Pertemuan 9–10`: **Procedural Content Generation**.
- `Pertemuan 11–12`: **DDA** dan **Player Modeling**.
- `Pertemuan 13–14`: **Machine Learning** dan `Unity ML-Agents`.

Daftar ini tidak perlu dihafal sebagai urutan hafalan, tetapi perlu dipahami sebagai **peta kompetensi**. Setiap topik memberi satu bagian dari perilaku agen: bagaimana NPC melihat lingkungan, memilih tujuan, bergerak, mengambil keputusan, beradaptasi, atau belajar. Pertemuan 15 menggabungkan semuanya agar mahasiswa siap merancang proyek akhir yang tidak hanya berisi potongan script, tetapi memiliki alur permainan yang koheren.

Sebelum lanjut, hal penting yang harus dipahami adalah bahwa **integrasi** lebih sulit daripada membangun satu teknik AI saja. Mahasiswa perlu mulai memikirkan bagaimana `state`, `path`, `decision`, `feedback`, dan `evaluasi` saling terhubung dalam satu mini game.

### Inti yang Harus Ditekankan

- **Pertemuan 15** adalah tahap persiapan final project, bukan topik baru yang berdiri sendiri.
- Materi sebelumnya membentuk fondasi: **perception**, **memory**, **steering**, **pathfinding**, **FSM**, **Behavior Tree**, **Utility AI**, **PCG**, **DDA**, **Player Modeling**, dan **Machine Learning**.
- Fokus utama pertemuan ini adalah **menggabungkan** berbagai teknik Game AI menjadi satu sistem yang siap diimplementasikan dalam proyek akhir.

### Transisi ke Slide Berikutnya

Setelah posisi pertemuan ini jelas, kita lanjut ke tujuan spesifik Pertemuan 15, yaitu bagaimana mahasiswa dipersiapkan untuk menyelesaikan proyek akhir Game Cerdas.

---

## Slide 003 - Tujuan Pertemuan 15

### Narasi

Pada pertemuan ini, tujuan utamanya adalah **mempersiapkan mahasiswa untuk menyelesaikan proyek akhir Game Cerdas**. Proyek akhir tidak cukup hanya berupa script AI yang berjalan di editor atau demo kecil. Mahasiswa perlu mengarahkan kerja mereka ke bentuk **mini game playable** yang bisa dimainkan, dinilai, dan dijelaskan secara akademik.

Artinya, hasil akhir harus menunjukkan bahwa **AI terlihat bekerja** di dalam gameplay. Misalnya, NPC tidak hanya bergerak, tetapi mengambil keputusan yang bisa diamati oleh pemain: mengejar, menghindar, memilih target, menyesuaikan perilaku, atau berkoordinasi dengan sistem lain. Selain itu, **gameplay harus menarik**, sehingga AI tidak hanya benar secara teknis, tetapi juga terasa masuk akal dan mendukung pengalaman bermain.

Agar proyek akhir dapat dipertanggungjawabkan, mahasiswa juga harus mampu menjelaskan **teknik AI yang digunakan**, **alasan desain**, **integrasi antar sistem**, dan **hasil evaluasi**. Penjelasan ini penting karena proyek akhir bukan hanya kumpulan fitur, tetapi bukti bahwa mahasiswa memahami bagaimana komponen seperti pathfinding, state machine, behavior tree, steering, atau learning agent bekerja bersama dalam satu game.

### Inti yang Harus Ditekankan

- Proyek akhir harus berupa **mini game playable**, bukan sekadar demo script.
- AI harus **terlihat bekerja** dan memengaruhi gameplay secara nyata.
- Mahasiswa harus mampu menjelaskan **teknik AI**, **alasan desain**, **integrasi sistem**, dan **evaluasi hasil**.

### Transisi ke Slide Berikutnya

Setelah memahami tujuan umum ini, kita akan melihat capaian pembelajaran yang lebih spesifik, yaitu kemampuan apa yang diharapkan mahasiswa miliki setelah pertemuan ini selesai.

---

## Slide 004 - Capaian Pembelajaran Pertemuan

### Narasi

Slide ini memetakan **capaian pembelajaran** yang harus dimiliki mahasiswa setelah pertemuan ke-15. Fokus utamanya bukan sekadar menambah satu teknik AI baru, tetapi menyiapkan mahasiswa untuk menyelesaikan **final project** yang playable, terintegrasi, dan dapat dijelaskan secara akademik.

Secara garis besar, capaian tersebut dapat dikelompokkan menjadi tiga kemampuan utama:

- **Memahami konsep Advanced Game AI**, termasuk peran `AI Director`, **adaptive systems**, dan **emergent behavior**.
- **Merancang dan menguji sistem AI**, mulai dari integrasi beberapa teknik AI, `debugging` secara sistematis, hingga evaluasi kualitas perilaku AI.
- **Menyiapkan final project**, termasuk penyusunan rencana kerja, penentuan **scope** yang realistis, dan demo yang dapat dinilai.

Dengan pemetaan ini, mahasiswa tidak hanya belajar satu teknik AI secara terpisah, tetapi juga memahami bagaimana konsep, implementasi, dan evaluasi proyek akhir saling terhubung.

### Inti yang Harus Ditekankan

- Capaian pertemuan ini adalah fondasi untuk **final project**, bukan sekadar daftar topik.
- Mahasiswa harus mampu menghubungkan konsep AI dengan **desain**, `debugging`, dan **evaluasi** game.
- **Scope** proyek akhir harus realistis, terukur, dan dapat didemonstrasikan.

### Transisi ke Slide Berikutnya

Setelah capaian pembelajaran dipahami, kita masuk ke pertanyaan mendasar: apa yang dimaksud dengan **Advanced Game AI** dalam konteks proyek akhir.

---

## Slide 005 - Apa Itu Advanced Game AI?

### Narasi

Pada slide ini, kita meluruskan makna **Advanced Game AI**. Istilah *advanced* tidak selalu berarti menggunakan algoritma paling rumit, model paling besar, atau sistem paling kompleks secara matematis. Dalam konteks game, yang lebih penting adalah bagaimana AI membantu **gameplay** terasa hidup, konsisten, dan dapat dikendalikan oleh desainer.

Slide ini merumuskan inti Advanced Game AI sebagai berikut:

```text
AI dirancang sebagai sistem yang terintegrasi,
dapat beradaptasi,
dapat diuji,
dan mendukung gameplay.
```

Rumusan ini penting karena AI game jarang berdiri sendiri. Perilaku `enemy`, `NPC`, `difficulty`, atau `dungeon` biasanya hasil dari beberapa keputusan yang saling terhubung. Jadi, fokusnya bukan hanya satu `action` seperti `chase`, tetapi bagaimana `action` tersebut dipilih, dikoreksi, dan dievaluasi dalam konteks permainan.

Secara praktis, advanced berarti AI tidak hanya “berjalan”, tetapi menghasilkan perilaku yang bermakna. Contohnya:

- `enemy` tidak hanya `chase`, tetapi memilih `cover` atau menyesuaikan jarak dengan `player`.
- `dungeon` tidak hanya `random`, tetapi tetap `playable` dan sesuai tujuan desain.
- `difficulty` tidak tetap, tetapi menyesuaikan kemampuan atau progres `player`.
- `NPC` tidak hanya individual, tetapi dapat berkoordinasi dengan `NPC` lain.
- `game` tidak hanya berjalan, tetapi dapat dievaluasi kualitas AI-nya.

Poin terakhir sering terlupakan. AI yang baik harus bisa diuji: apakah `enemy` terlalu agresif? Apakah `NPC` terjebak? Apakah `difficulty` terlalu cepat naik? Apakah `dungeon` menghasilkan tantangan yang adil? Dengan kata lain, Advanced Game AI bukan hanya soal “pintar”, tetapi juga soal **dapat diamati, diukur, dan diperbaiki**.

Sebelum lanjut, mahasiswa perlu memahami bahwa advanced adalah sifat **sistem**, bukan satu algoritma. Satu `state`, satu `pathfinding`, atau satu aturan sederhana bisa menjadi bagian dari sistem yang lebih besar. Yang harus dinilai adalah integrasi, adaptasi, dan dampaknya terhadap pengalaman bermain.

### Inti yang Harus Ditekankan

- **Advanced Game AI** berarti AI yang terintegrasi, adaptif, dapat diuji, dan mendukung `gameplay`.
- Kualitas AI game tidak diukur hanya dari kompleksitas algoritma, tetapi dari perilaku yang dihasilkan dan dampaknya terhadap desain.
- Contoh `enemy`, `dungeon`, `difficulty`, dan `NPC` menunjukkan bahwa AI harus bekerja sebagai sistem, bukan sekadar `action` tunggal.

### Transisi ke Slide Berikutnya

Selanjutnya, kita akan melihat bagaimana komponen-komponen AI yang sudah dipelajari sebelumnya berubah menjadi satu sistem yang saling terhubung dalam proyek akhir.

---

## Slide 006 - Dari Komponen ke Sistem

### Narasi

Pada slide ini, kita berpindah dari pemahaman **komponen** ke pemahaman **sistem**. Di awal semester, kita mempelajari bagian-bagian perilaku game satu per satu, misalnya:

- `Perception`
- `Movement`
- `Pathfinding`
- `FSM`
- `Behavior Tree`
- `Utility AI`
- `PCG`
- `DDA`
- `Player Modeling`
- `ML-Agents`

Setiap komponen itu penting, tetapi gameplay yang menarik tidak muncul hanya karena satu komponen bekerja. Gameplay muncul ketika komponen-komponen tersebut saling memberi informasi dan saling memengaruhi.

Dalam proyek akhir, mahasiswa tidak cukup membuat enemy bisa bergerak atau dungeon bisa dibuat acak. Yang harus dibangun adalah alur kerja yang utuh. Contoh alurnya dapat dilihat sebagai berikut:

```text
Player masuk dungeon procedural
        ↓
Enemy melihat player
        ↓
Behavior Tree memilih aksi
        ↓
NavMesh mengejar player
        ↓
DDA mengatur spawn berikutnya
        ↓
AI Director mengatur intensitas permainan
```

Alur ini menunjukkan bahwa ada **input**, **proses**, dan **output** yang saling terhubung. `Player` dan `dungeon procedural` menjadi konteks awal. `Enemy` menggunakan `Perception` untuk menyadari player. `Behavior Tree` kemudian memutuskan aksi yang paling sesuai. `NavMesh` menerjemahkan keputusan itu menjadi gerakan di dunia game. `DDA` dan `AI Director` menjaga agar permainan tetap menantang dan tidak monoton.

Yang harus dipahami mahasiswa sebelum lanjut adalah bahwa sistem yang baik bukan kumpulan script yang saling memanggil secara acak. Sistem yang baik memiliki alur data yang jelas, tanggung jawab modul yang mudah dipahami, dan perilaku yang bisa diuji. Dengan cara ini, ketika satu bagian berubah, mahasiswa bisa melacak pengaruhnya terhadap gameplay.

### Inti yang Harus Ditekankan

- Komponen perilaku game harus dilihat sebagai bagian dari **sistem**, bukan fitur yang berdiri sendiri.
- Pipeline menunjukkan alur dari **input** lingkungan, **proses** keputusan dan navigasi, hingga **output** perilaku gameplay.
- Proyek akhir menuntut integrasi yang bisa **diuji** dan **dilacak** dengan jelas.

### Transisi ke Slide Berikutnya

Selanjutnya, kita akan masuk ke **Integrasi Game AI**, yaitu bagaimana modul-modul perilaku game dihubungkan menjadi struktur sistem yang lebih rapi dan mudah dikembangkan.

---

## Slide 007 - Integrasi Game AI

### Narasi

Pada slide ini, kita masuk ke inti dari proyek akhir: **Integrasi Game AI**. Artinya, berbagai modul AI yang sudah kita pelajari tidak lagi berdiri sendiri, tetapi dihubungkan menjadi satu sistem yang saling memberi informasi.

```text
AI System
├── Perception
├── Memory
├── Decision
├── Navigation
├── Combat
├── Tactical Positioning
├── PCG
├── DDA
├── Player Modeling
└── Debug System
```

Struktur ini menunjukkan bahwa satu agen game biasanya tidak cukup hanya memiliki satu kemampuan. `Perception` bertugas membaca keadaan, misalnya posisi player, jarak, atau ancaman. `Memory` menyimpan informasi penting agar agen tidak selalu bereaksi seperti reset setiap frame. `Decision` menentukan pilihan aksi, misalnya mengejar, bertahan, atau menyerang. `Navigation` menerjemahkan keputusan menjadi gerakan yang valid di lingkungan, misalnya lewat `NavMesh` atau pathfinding.

Modul lain seperti `Combat`, `Tactical Positioning`, `PCG`, `DDA`, dan `Player Modeling` juga harus terhubung dengan alur yang sama. `Combat` tidak hanya menentukan damage, tetapi juga harus tahu kapan agen boleh menyerang berdasarkan keputusan dan posisi. `Tactical Positioning` membantu agen memilih tempat yang aman atau strategis. `PCG` dan `DDA` memengaruhi lingkungan dan tingkat kesulitan, sedangkan `Player Modeling` memberi konteks tentang perilaku player agar respons AI lebih kontekstual.

Yang perlu ditekankan adalah **tanggung jawab modul yang jelas**. Setiap modul sebaiknya memiliki satu tugas utama. Jika `Perception` sudah mendeteksi player, modul lain tidak perlu mendeteksi ulang dengan cara yang berbeda. Jika `Decision` sudah memilih aksi, `Navigation` dan `Combat` cukup mengeksekusi keputusan tersebut. Pembagian tanggung jawab yang jelas membuat sistem lebih mudah dikembangkan, diuji, dan diperbaiki.

Selain itu, **data flow** harus jelas. Data dari `Perception` masuk ke `Memory`, lalu diproses oleh `Decision`, kemudian diteruskan ke `Navigation`, `Combat`, atau modul lain. Alur ini penting agar perilaku NPC tidak acak. Dalam proyek akhir, mahasiswa perlu bisa menjelaskan: data apa yang dihasilkan, data apa yang dibutuhkan, dan modul mana yang mengubah keputusan agen.

Kriteria berikutnya adalah **parameter mudah dituning**. Nilai seperti jarak deteksi, kecepatan reaksi, bobut keputusan, atau ambang kesulitan sebaiknya bisa diatur tanpa mengubah logika inti. Ini penting karena perilaku AI jarang benar pada percobaan pertama. Dengan parameter yang jelas, mahasiswa bisa melakukan eksperimen: membuat NPC lebih agresif, lebih hati-hati, atau lebih responsif terhadap player.

Terakhir, sistem yang baik harus **debug mudah dibaca**. `Debug System` membantu mahasiswa melihat apa yang sedang dilakukan AI: apa yang dilihat agen, keputusan apa yang diambil, path mana yang dipilih, dan parameter apa yang sedang aktif. Tanpa debug yang baik, mahasiswa hanya melihat hasil akhir, misalnya NPC bergerak aneh, tetapi tidak tahu penyebabnya.

Sebelum lanjut, mahasiswa perlu memahami bahwa integrasi bukan sekadar menggabungkan banyak script. Integrasi adalah desain hubungan antar modul agar setiap komponen memberikan kontribusi yang jelas pada perilaku agen dan pengalaman bermain.

### Inti yang Harus Ditekankan

- **Integrasi Game AI** adalah proses menghubungkan modul AI seperti `Perception`, `Memory`, `Decision`, `Navigation`, `Combat`, `Tactical Positioning`, `PCG`, `DDA`, `Player Modeling`, dan `Debug System` menjadi satu alur kerja.
- Setiap modul harus memiliki **tanggung jawab yang jelas** agar tidak terjadi tumpang tindih logika dan perilaku NPC menjadi tidak konsisten.
- **Data flow** yang jelas penting untuk memastikan informasi dari lingkungan, memori, dan keputusan agen dapat diteruskan ke aksi yang benar.
- Sistem yang baik harus memiliki **parameter yang mudah dituning** dan **debug yang mudah dibaca**, karena perilaku AI perlu diuji, disesuaikan, dan dipahami secara sistematis.

### Transisi ke Slide Berikutnya

Jika semua modul ini sudah terhubung dengan baik, perilaku AI akan terasa lebih utuh. Namun, apa yang terjadi jika komponen AI dibuat terpisah tanpa desain integrasi yang jelas? Kita akan melihat masalah-masalah umum yang muncul ketika AI tidak terintegrasi dengan benar.

---

## Slide 008 - Masalah Jika AI Tidak Terintegrasi

### Narasi

Pada slide ini kita melihat sisi lain dari integrasi. Modul AI yang sudah dibuat tidak otomatis menghasilkan perilaku game yang baik. Jika setiap modul berjalan sendiri tanpa desain hubungan, hasilnya bisa menjadi NPC yang aneh, gameplay yang tidak seimbang, atau sistem yang tidak terasa oleh player.

Masalah utama biasanya muncul karena **data tidak mengalir menjadi keputusan**. Misalnya, NPC memiliki `Perception` sehingga bisa melihat player, tetapi tidak ada `Decision` yang mengubah hasil itu menjadi action. Dalam perilaku yang diharapkan, data persepsi seharusnya masuk ke `Behavior Tree` atau `FSM`, lalu memilih state seperti `Chase`, `Attack`, atau `Investigate`. Tanpa koneksi ini, NPC hanya diam, bergerak acak, atau tidak merespons ancaman.

Masalah berikutnya adalah **pergerakan tanpa tujuan**. NPC bisa memiliki `NavMesh` dan `NavMeshAgent`, tetapi `Navigation` hanya menjawab pertanyaan "bagaimana sampai ke titik tertentu", bukan "ke titik mana saya harus pergi". Jika tidak ada modul decision, tactical positioning, atau target yang dipilih oleh sistem, NPC bisa berjalan ke lokasi yang tidak relevan atau tidak pernah menggunakan pathfinding secara bermakna.

Masalah juga muncul pada **keseimbangan gameplay**. Enemy bisa dibuat kuat secara statistik, tetapi jika kekuatan itu tidak terhubung dengan `DDA`, `Player Modeling`, atau sistem difficulty, player tidak merasakan tantangan yang adil. Hasilnya, game bisa terasa terlalu mudah, terlalu sulit, atau tidak konsisten dari satu area ke area lain.

Pada konten prosedural, masalah integrasi sering terlihat pada **spawn yang tidak masuk akal**. Dungeon bisa dibuat secara prosedural, tetapi jika `PCG` tidak dikaitkan dengan `Navigation`, `difficulty`, dan `pacing`, enemy bisa muncul di tempat yang salah. Misalnya musuh muncul di area yang seharusnya aman, atau terlalu banyak di jalur yang tidak bisa dihindari.

Intinya, integrasi memastikan setiap komponen memberi kontribusi pada pengalaman bermain. Mahasiswa perlu memahami bahwa keberhasilan sistem game tidak diukur dari satu modul yang berjalan, tetapi dari apakah modul-modul itu saling mengirim data, mengambil keputusan, dan menghasilkan perilaku yang terasa hidup, konsisten, dan bisa di-tuning.

### Inti yang Harus Ditekankan

- **Integrasi** adalah cara membuat modul seperti `Perception`, `Decision`, `Navigation`, `DDA`, dan `PCG` bekerja sebagai satu sistem.
- Tanpa integrasi, NPC bisa memiliki kemampuan dasar tetapi tidak menunjukkan perilaku yang masuk akal.
- Masalah yang terlihat di gameplay sering berasal dari data yang tidak mengalir, keputusan yang tidak terhubung, atau parameter yang tidak saling menyesuaikan.

### Transisi ke Slide Berikutnya

Jika masalah ini terjadi karena komponen tidak saling terhubung, maka kita perlu melihat sistem yang mengatur pengalaman secara lebih global. Pada slide berikutnya, kita akan membahas **AI Director**, yaitu sistem yang mengamati kondisi permainan dan mengatur pacing, spawn, resource, serta tekanan pada player.

---

## Slide 009 - AI Director

### Narasi

Pada slide ini, kita membahas **AI Director** sebagai sistem yang mengatur pengalaman gameplay secara global. Ia tidak harus mengontrol satu **NPC** secara langsung, tetapi bekerja pada level yang lebih tinggi: membaca kondisi permainan, lalu memutuskan bagaimana suasana bermain harus dijaga.

Intuisi sederhananya, **AI Director** ibarat konduktor dalam orkestra. Ia tidak memainkan satu instrumen saja, tetapi memperhatikan tempo, tekanan, dan keseimbangan keseluruhan. Dalam game, “tempo” ini bisa berupa intensitas pertempuran, ketersediaan `resource`, atau jeda yang membuat `player` tidak terlalu tertekan.

Sistem ini biasanya mengamati kondisi permainan, kemudian mengatur beberapa hal penting:

- `intensitas` gameplay,
- `spawn enemy` atau gelombang musuh,
- `resource`,
- `pacing` atau alur permainan,
- `event`,
- tekanan pada `player`,
- `jeda aman`,
- `encounter` berikutnya.

Perhatikan bahwa output dari **AI Director** tidak selalu berupa gerakan satu musuh. Outputnya bisa berupa keputusan strategis, misalnya menambah satu wave kecil, membuka `event`, atau memberi ruang aman. Dengan cara ini, komponen perilaku lain tetap bekerja, tetapi arahnya selaras dengan pengalaman yang diinginkan.

Contoh sederhana:

```text
Player terlalu aman terlalu lama
        ↓
AI Director memunculkan enemy wave kecil
```

Dalam contoh ini, sistem tidak perlu memerintahkan setiap musuh secara detail. Ia cukup mengubah kondisi dunia, misalnya menambah musuh atau mengubah parameter `encounter`, lalu perilaku NPC yang ada akan merespons sesuai sistemnya.

Hal yang perlu dipahami sebelum lanjut adalah bahwa **AI Director** bersifat **global**. Ia memikirkan pengalaman `player` secara keseluruhan, bukan hanya satu entitas di layar. Pemahaman ini penting karena nanti kita akan membedakan peran ini dengan **Enemy AI**, yang lebih fokus pada perilaku individu musuh.

### Inti yang Harus Ditekankan

- **AI Director** mengatur gameplay secara global, bukan hanya mengontrol satu **NPC**.
- Ia mengamati kondisi permainan lalu menyesuaikan `intensitas`, `spawn enemy`, `resource`, `pacing`, `event`, tekanan, `jeda aman`, dan `encounter` berikutnya.
- Outputnya berupa keputusan strategis atau perubahan kondisi dunia, bukan selalu perilaku langsung satu musuh.

### Transisi ke Slide Berikutnya

Selanjutnya, kita akan membedakan **AI Director** dengan **Enemy AI** agar jelas mana yang mengatur pengalaman global dan mana yang mengatur perilaku individu musuh.

---

## Slide 010 - Perbedaan AI Director dan Enemy AI

### Narasi

Pada slide sebelumnya kita sudah melihat bahwa **AI Director** adalah sistem yang mengatur pengalaman gameplay secara global. Sekarang kita perlu membedakan sistem itu dengan **Enemy AI**, karena keduanya sering terlihat bekerja bersamaan tetapi memiliki ruang kendali yang berbeda.

**Enemy AI** bertugas mengatur perilaku satu unit musuh atau satu NPC secara lokal. Fokusnya adalah keputusan langsung yang dilakukan oleh enemy terhadap player atau lingkungan di sekitarnya.

Contoh perilaku enemy dapat ditulis sederhana seperti ini:

```text
Enemy melihat player → Chase
Enemy dekat → Attack
Enemy HP rendah → Flee
```

Dalam contoh tersebut, setiap baris menggambarkan respons lokal dari satu enemy. Jika player terlihat, enemy melakukan `Chase`. Jika jarak sudah dekat, enemy melakukan `Attack`. Jika kondisi enemy lemah, misalnya HP rendah, enemy dapat melakukan `Flee`. Keputusan ini biasanya bergantung pada data yang dekat dengan enemy itu sendiri, seperti jarak, target, kondisi HP, dan lingkungan sekitar.

Sementara itu, **AI Director** tidak fokus pada satu enemy. AI Director mengamati kondisi permainan secara keseluruhan, lalu mengatur pengalaman player dari level yang lebih tinggi.

Contoh kerja AI Director dapat dilihat seperti ini:

```text
Player terlalu dominan → tambah intensitas
Player terlalu tertekan → beri jeda
Player low health → munculkan resource
```

Di sini, AI Director tidak memerintahkan satu enemy untuk `Chase` atau `Attack`. AI Director menilai apakah player terlalu kuat, terlalu tertekan, atau membutuhkan bantuan. Setelah itu, sistem dapat menambah intensitas, memberi jeda, atau menyediakan resource. Artinya, output AI Director biasanya berupa perubahan kondisi permainan, bukan sekadar perilaku satu unit.

Perbedaan utamanya dapat dirangkum sebagai berikut:

- **Enemy AI bersifat lokal**: mengatur perilaku individu enemy atau NPC.
- **AI Director bersifat global**: mengatur ritme, tekanan, dan pengalaman gameplay secara keseluruhan.
- **Enemy AI menjawab pertanyaan**: “Apa yang harus dilakukan musuh ini sekarang?”
- **AI Director menjawab pertanyaan**: “Bagaimana pengalaman player harus dijaga agar tetap seimbang dan menarik?”

Dengan cara pandang ini, mahasiswa dapat melihat bahwa game AI tidak hanya berisi musuh yang bergerak atau menyerang. Ada lapisan keputusan yang lebih tinggi yang mengatur kapan tekanan meningkat, kapan player diberi ruang, dan kapan sumber daya muncul. Lapisan inilah yang membuat gameplay terasa lebih dinamis.

Sebelum lanjut, hal penting yang harus dipahami adalah batas tanggung jawab masing-masing sistem. **Enemy AI** menangani perilaku unit, sedangkan **AI Director** menangani pengalaman permainan. Jika batas ini jelas, desain sistem AI menjadi lebih rapi dan tidak saling tumpang tindih.

### Inti yang Harus Ditekankan

- **Enemy AI** mengatur perilaku lokal satu enemy atau NPC, seperti `Chase`, `Attack`, dan `Flee`.
- **AI Director** mengatur pengalaman game secara global, seperti intensitas, jeda, dan ketersediaan resource.
- Perbedaan utamanya ada pada ruang kendali: **Enemy AI bersifat lokal**, sedangkan **AI Director bersifat global**.

### Transisi ke Slide Berikutnya

Setelah kita membedakan ruang kerja keduanya, langkah berikutnya adalah melihat peran apa saja yang dapat dijalankan oleh **AI Director** dalam mengatur gameplay.

---

## Slide 011 - Peran AI Director

### Narasi

Slide ini menjelaskan **AI Director** sebagai sistem pengatur pengalaman bermain secara global. Jika perilaku NPC mengatur satu agen, AI Director mengamati kondisi player dan dunia, lalu menyesuaikan elemen gameplay agar tetap dinamis.

Peran AI Director dapat dilihat dari daftar berikut:

```text
Pacing Manager
Difficulty Manager
Encounter Manager
Spawn Controller
Resource Controller
Event Trigger
Tension Controller
```

Daftar ini menunjukkan bahwa AI Director tidak hanya “membuat musuh lebih kuat”, tetapi juga mengatur tempo, tantangan, pertemuan, spawn, sumber daya, peristiwa, dan tekanan permainan.

- **Pacing Manager** mengatur tempo permainan, misalnya kapan adegan menjadi cepat dan kapan player diberi ruang untuk bernapas.
- **Difficulty Manager** menyesuaikan tingkat tantangan agar player tidak merasa terlalu mudah atau terlalu tertekan.
- **Encounter Manager** mengatur pertemuan antara player dengan musuh, objek, atau situasi tertentu.
- **Spawn Controller** menentukan kapan dan di mana entity seperti musuh, item, atau obstacle muncul.
- **Resource Controller** mengatur ketersediaan sumber daya, seperti health, ammo, atau item penting.
- **Event Trigger** memicu peristiwa khusus yang mengubah alur atau suasana permainan.
- **Tension Controller** menjaga tekanan emosional player agar tetap seimbang.

Secara sederhana, alurnya adalah: sistem membaca kondisi player dan dunia, mengevaluasi apakah gameplay sudah seimbang, lalu melakukan penyesuaian. Penyesuaian ini bisa berupa menambah atau mengurangi musuh, membuka area baru, memberi item, atau memicu `event` tertentu.

Tujuan akhirnya adalah membuat pengalaman bermain tidak monoton. Dengan mengatur ritme tegang dan santai, player tetap terlibat, tantangan terasa bermakna, dan permainan terasa hidup.

### Inti yang Harus Ditekankan

- **AI Director** bekerja pada level pengalaman game, bukan hanya perilaku satu NPC.
- Perannya mencakup **pacing**, **difficulty**, **encounter**, **spawn**, **resource**, **event**, dan **tension**.
- Tujuannya menjaga gameplay tetap dinamis, seimbang, dan tidak monoton.
- Sistem ini membaca kondisi player dan dunia, lalu menyesuaikan elemen permainan.

### Transisi ke Slide Berikutnya

Setelah memahami peran AI Director, kita akan masuk ke salah satu aspek penting yang dikelolanya, yaitu **tension** dalam game.

---

## Slide 012 - Tension dalam Game

### Narasi

Pada slide ini, kita membahas **Tension** dalam game. **Tension** adalah tingkat tekanan yang dirasakan player saat bermain. Tekanan ini tidak selalu sama dengan tingkat kesulitan secara matematis, tetapi lebih berkaitan dengan bagaimana kondisi game membuat player merasa tertekan, waspada, atau terdesak.

Dalam konteks **Game AI**, **Tension** dapat dipandang sebagai sinyal penting yang bisa dipantau oleh sistem game. Sinyal ini membantu **AI Director** memahami apakah player sedang berada dalam kondisi aman, tertekan, atau terlalu tertekan. Dengan cara ini, game tidak hanya memberikan tantangan, tetapi juga mengatur pengalaman bermain secara lebih dinamis.

**Tension** dapat meningkat ketika beberapa kondisi tertentu terjadi. Beberapa contohnya adalah:

- `enemy` banyak, sehingga ancaman terhadap player meningkat.
- `health` rendah, sehingga player merasa lebih dekat dengan kekalahan.
- `ammo` sedikit, sehingga kemampuan bertahan player berkurang.
- `waktu` hampir habis, sehingga player harus bergerak lebih cepat.
- `objective` sulit, sehingga player merasa tertantang atau terdesak.
- `area` sempit, sehingga ruang gerak dan strategi player terbatas.
- `boss` muncul, sehingga intensitas pertempuran meningkat secara signifikan.

Di sisi lain, **Tension** dapat turun ketika kondisi game menjadi lebih aman atau lebih terkendali. Beberapa contohnya adalah:

- player berada di `area aman`.
- `resource` banyak, sehingga player merasa lebih siap.
- `enemy` sedikit, sehingga tekanan berkurang.
- `objective` selesai, sehingga tujuan utama tercapai.
- `checkpoint` tercapai, sehingga player mendapat rasa aman dan progres.

Peran **AI Director** di sini adalah mengatur **Tension** agar pengalaman bermain tetap seimbang. **AI Director** dapat membaca kondisi game, lalu melakukan tindakan seperti mengatur jumlah `enemy`, menyediakan `resource`, memicu `event`, atau memberikan momen istirahat. Tujuannya bukan hanya membuat game lebih sulit atau lebih mudah, tetapi menjaga ritme bermain agar tetap menarik.

Sebelum lanjut ke pembahasan berikutnya, mahasiswa perlu memahami bahwa **Tension** bukan sekadar perasaan player, melainkan kondisi yang dapat dimodelkan, dipantau, dan diatur oleh sistem game. Pemahaman ini penting karena **Tension** menjadi dasar bagi pengaturan pacing, intensitas, dan pengalaman bermain yang lebih hidup.

### Inti yang Harus Ditekankan

- **Tension** adalah tekanan yang dirasakan player, bukan hanya nilai kesulitan game.
- **Tension** dapat naik atau turun berdasarkan banyak kondisi, seperti `enemy`, `health`, `ammo`, `waktu`, `objective`, `area`, dan `boss`.
- **AI Director** dapat menggunakan **Tension** sebagai sinyal untuk mengatur gameplay agar tetap dinamis dan seimbang.

### Transisi ke Slide Berikutnya

Setelah memahami apa yang menyebabkan **Tension** naik dan turun, langkah berikutnya adalah melihat bagaimana **Tension** disusun sepanjang waktu dalam bentuk **Tension Curve**.

---

## Slide 013 - Tension Curve

### Narasi

Slide ini memperkenalkan **Tension Curve**, yaitu bentuk naik-turun intensitas yang dialami pemain selama bermain. Intuisi praktisnya sederhana: gameplay yang baik tidak selalu tegang, tetapi juga tidak selalu datar. Ia mengatur ritme, seperti musik yang memiliki bagian tenang, bagian menegangkan, dan bagian klimaks.

Contoh pada slide menunjukkan alur dasar:

```text
Low tension
    ↓
Enemy encounter
    ↓
High tension
    ↓
Reward / safe area
    ↓
Medium tension
    ↓
Boss encounter
```

Alur ini dibaca dari atas ke bawah sebagai urutan pengalaman, bukan sebagai kode program. Pemain mulai dari **low tension**, kemudian masuk ke **enemy encounter** yang menaikkan tekanan, lalu mencapai **high tension**. Setelah itu, sistem memberi **reward / safe area** agar pemain bisa pulih, sebelum masuk ke **medium tension** dan ditutup dengan **boss encounter** sebagai puncak tantangan.

Tujuan utama kurva ini adalah menjaga keseimbangan emosi pemain. Jika **tension** selalu tinggi, pemain bisa kelelahan, frustrasi, dan kehilangan motivasi. Sebaliknya, jika **tension** selalu rendah, pemain bisa bosan karena tidak ada tantangan yang berarti. Dengan kata lain, **tension curve** membantu game menjaga perhatian, memberi jeda, dan membangun antisipasi.

Dalam konteks game cerdas, kurva ini menjadi dasar bagi **sistem pengarah** untuk mengatur ritme permainan. Sistem tersebut dapat memperhatikan kondisi pemain, seperti kesehatan, sumber daya, atau jarak waktu sejak encounter terakhir, lalu menyesuaikan event, spawn musuh, atau item pemulihan. Perilaku NPC, event, dan spawn dapat dijadwalkan mengikuti kurva ini agar pengalaman bermain terasa lebih hidup dan terarah.

Yang harus dipahami mahasiswa sebelum lanjut adalah bahwa **tension** bukan hanya jumlah musuh. Ia adalah hasil gabungan dari tekanan, risiko, sumber daya, waktu, dan desain area. **Tension curve** adalah target pengalaman, sedangkan mekanisme game adalah cara untuk mewujudkan target tersebut.

### Inti yang Harus Ditekankan

- **Tension curve** adalah pola naik-turun intensitas yang menjaga pemain tetap terlibat.
- **High tension** perlu diselingi **reward / safe area** agar pemain tidak kelelahan.
- **Boss encounter** berfungsi sebagai puncak tantangan setelah fase pemulihan.
- **Sistem pengarah** dapat menggunakan kurva ini untuk mengatur ritme encounter, spawn, dan pemulihan.

### Transisi ke Slide Berikutnya

Setelah memahami bentuk kurva, langkah berikutnya adalah melihat bagaimana sistem pengarah sederhana mengambil keputusan berdasarkan kondisi pemain. Pada slide berikutnya, kita akan melihat contoh aturan dasar yang menghubungkan observasi pemain dengan aksi seperti spawn enemy atau menambah health item.

---

## Slide 014 - Contoh AI Director Sederhana

### Narasi

Slide ini menunjukkan contoh kecil dari **sistem director** yang mengatur pengalaman pemain secara global. Berbeda dengan perilaku NPC yang fokus pada satu agen, sistem ini bekerja di lapisan lebih tinggi. Ia mengamati kondisi permainan, lalu memutuskan kapan intensitas perlu dinaikkan atau diturunkan.

Sistem ini mengamati beberapa sinyal penting:

- `Player Health`
- `Enemy Count`
- `Time Since Last Encounter`
- `Player Skill Score`
- `Resource Amount`

Sinyal-sinyal ini menjadi dasar keputusan. Jika pemain masih sehat, jumlah musuh rendah, dan sudah lama tidak ada encounter, sistem dapat memilih untuk `spawn enemy`. Sebaliknya, jika `Player Health` rendah, sistem dapat `kurangi spawn` dan `tambah health item`.

```text
Jika enemy count rendah
dan player health tinggi
dan sudah lama tidak ada encounter:
    spawn enemy

Jika player health rendah:
    kurangi spawn
    tambah health item
```

Secara alur, contoh ini dapat dibaca sebagai **input**, **proses**, dan **output**. Input berupa metrik pemain dan kondisi dunia. Proses berupa aturan `jika-maka` yang sederhana. Output berupa aksi yang memengaruhi gameplay, seperti menambah musuh atau menyediakan item kesehatan.

Poin pentingnya adalah bahwa sistem director sederhana dapat dibangun dengan **rule-based logic**. Aturan yang jelas memudahkan mahasiswa memahami bagaimana keputusan global dibuat, sebelum nanti diperluas dengan lebih banyak kondisi, bobot, atau mekanisme adaptif.

Sebelum lanjut, mahasiswa perlu memahami bahwa sistem ini tidak hanya mengatur satu NPC. Ia mengatur ritme permainan secara keseluruhan: kapan pemain perlu tantangan, kapan perlu jeda, dan kapan bantuan perlu diberikan.

### Inti yang Harus Ditekankan

- **Sistem director** adalah lapisan keputusan global yang mengatur intensitas gameplay.
- Keputusan dibuat dari **input** seperti `Player Health`, `Enemy Count`, dan `Time Since Last Encounter`.
- Contoh ini menggunakan **rule-based logic** sederhana: jika kondisi tertentu terpenuhi, sistem melakukan aksi seperti `spawn enemy` atau `tambah health item`.
- Sistem ini berbeda dari perilaku NPC lokal; ia mengatur pengalaman pemain, bukan hanya satu agen.

### Transisi ke Slide Berikutnya

Pada slide berikutnya, kita akan memperluas contoh ini dengan melihat daftar data input yang dibutuhkan sistem director, mulai dari metrik pemain, state dunia, hingga state AI, agar keputusan globalnya lebih masuk akal.

---

## Slide 015 - AI Director Data Input

### Narasi

Pada slide ini, fokusnya adalah **data input** yang dibutuhkan oleh **sistem director**. Setelah contoh keputusan sederhana, langkah penting berikutnya adalah memahami apa saja yang dibaca sistem sebelum mengambil keputusan global. Tanpa data yang cukup, keputusan seperti menambah tekanan atau mengurangi spawn hanya akan terasa acak.

Data input dapat dikelompokkan menjadi tiga bagian utama:

```text
Player Metrics
├── health
├── damage taken
├── kill rate
├── death count
└── skill score

World State
├── enemy count
├── resource count
├── current room
├── objective status
└── time elapsed

AI State
├── alert level
├── active squads
├── difficulty multiplier
└── encounter intensity
```

Kelompok pertama, **Player Metrics**, menggambarkan kondisi dan kemampuan pemain. Nilai seperti `health`, `damage taken`, `kill rate`, `death count`, dan `skill score` membantu sistem menilai apakah pemain sedang kesulitan, menguasai permainan, atau berada dalam tekanan. Data ini penting karena keputusan global harus responsif terhadap pengalaman pemain, bukan hanya terhadap aturan statis.

Kelompok kedua, **World State**, menggambarkan kondisi dunia permainan pada saat itu. Nilai seperti `enemy count`, `resource count`, `current room`, `objective status`, dan `time elapsed` memberi konteks tentang apa yang sedang terjadi di level. Dengan data ini, sistem dapat membedakan situasi di mana pemain berada di ruangan kosong, sedang mengejar objective, atau sudah lama tidak mengalami encounter.

Kelompok ketiga, **state internal sistem**, menggambarkan kondisi perilaku NPC dan tekanan yang sedang berjalan. Nilai seperti `alert level`, `active squads`, `difficulty multiplier`, dan `encounter intensity` membantu sistem memahami seberapa aktif musuh, seberapa besar tekanan yang sedang diberikan, dan apakah ada squad yang sedang mengejar pemain. Data ini penting agar keputusan tidak bertentangan dengan perilaku NPC yang sudah ada.

Intuisi praktisnya adalah sistem director tidak mengambil keputusan dari satu nilai saja. Ia membaca kombinasi data dari pemain, dunia, dan state internal, lalu menilai apakah tekanan permainan perlu dinaikkan, dijaga, atau dikurangi. Inilah yang membuat keputusan global terasa lebih masuk akal dan adaptif.

Sebelum lanjut, mahasiswa perlu memahami bahwa **data input** adalah fondasi dari seluruh keputusan director. Jika data tidak lengkap atau tidak relevan, output keputusan akan sulit diprediksi dan sulit dianalisis.

### Inti yang Harus Ditekankan

- **Player Metrics** digunakan untuk menilai kondisi dan kemampuan pemain.
- **World State** digunakan untuk memahami konteks level, musuh, resource, objective, dan waktu.
- **State internal sistem** digunakan untuk mengetahui kondisi NPC, alert level, squad aktif, dan intensitas encounter.
- Keputusan global yang masuk akal membutuhkan kombinasi data, bukan satu metrik tunggal.

### Transisi ke Slide Berikutnya

Setelah memahami data apa saja yang dibaca, langkah berikutnya adalah melihat bentuk keputusan yang dihasilkan, yaitu output dari director.

---

## Slide 016 - AI Director Output

### Narasi

Setelah **Director** menerima data dari slide sebelumnya, langkah berikutnya adalah menerjemahkan data tersebut menjadi **output** yang dapat dieksekusi oleh sistem game. Output ini bukan sekadar pesan teks, melainkan **perintah global** yang memengaruhi suasana, ancaman, dan ritme permainan.

```text
Spawn Enemy
Spawn Item
Activate Event
Change Music Intensity
Change Enemy Aggression
Adjust Difficulty
Open / Close Encounter
Trigger Ambush
Reduce Pressure
```

Secara konseptual, daftar output ini dapat dikelompokkan menjadi beberapa fungsi:

- **Spawn Enemy** dan **Spawn Item** mengatur isi dunia, misalnya menambah musuh atau memberi item penunjang.
- **Activate Event** dan **Trigger Ambush** memicu momen khusus yang mengubah alur pengalaman pemain.
- **Change Music Intensity** memberi umpan balik atmosferik tanpa mengubah aturan gameplay secara langsung.
- **Change Enemy Aggression** dan **Adjust Difficulty** mengatur tekanan yang dirasakan pemain.
- **Open / Close Encounter** dan **Reduce Pressure** membantu mengontrol pacing, misalnya membuka pertempuran atau memberi jeda.

Intuisi pentingnya adalah Director tidak perlu mengatur setiap gerakan NPC secara detail. Director memberi **arah**, lalu sistem lain seperti `EnemySpawner`, `Utility AI`, atau sistem audio yang menerapkannya.

Contoh pertama:

```text
Director memberi perintah ke EnemySpawner:
Spawn 3 melee enemy di room berikutnya.
```

Perintah ini menunjukkan bahwa output Director dapat berupa perintah spawning yang terlokalisasi pada area tertentu, misalnya `room berikutnya`. Sistem `EnemySpawner` yang menerima perintah ini akan menentukan posisi, tipe musuh, dan waktu spawn yang sesuai.

Contoh kedua:

```text
Director menaikkan aggressionWeight pada Utility AI enemy.
```

Di sini, Director tidak langsung membuat musuh menyerang, tetapi mengubah **bobot keputusan** pada `Utility AI`. Nilai `aggressionWeight` yang lebih besar membuat aksi menyerang menjadi lebih mungkin dipilih, sehingga perilaku musuh berubah secara halus dan tetap konsisten dengan sistem keputusan yang sudah ada.

Yang harus dipahami mahasiswa adalah output Director harus **terukur**, **dapat diamati**, dan **tidak terlalu mendadak**. Jika Director terlalu sering mengubah tekanan, pemain bisa kehilangan rasa kendali. Sebaliknya, jika output terlalu sedikit, permainan terasa statis.

### Inti yang Harus Ditekankan

- **Output Director** adalah perintah global yang memengaruhi spawn, event, musik, agresi, difficulty, dan encounter.
- Director bekerja sebagai **pengatur ritme**, bukan pengendali langsung setiap perilaku NPC.
- Contoh `EnemySpawner` dan `aggressionWeight` menunjukkan bahwa output Director diteruskan ke sistem game yang lebih spesifik.
- Perubahan harus menjaga **pacing** dan **player agency**, agar permainan tetap menantang tetapi tidak terasa dipaksakan.

### Transisi ke Slide Berikutnya

Selanjutnya kita akan melihat bagaimana input dan output ini terhubung dalam satu alur kerja, yaitu **AI Director Pipeline**, mulai dari pengumpulan state, perhitungan intensitas, pemilihan aksi, hingga pengamatan hasil.

---

## Slide 017 - AI Director Pipeline

### Narasi

Slide ini menunjukkan **pipeline director**, yaitu urutan proses yang mengubah keadaan permainan menjadi keputusan yang dapat dieksekusi oleh sistem game.

```text
Collect Game State
        ↓
Calculate Tension / Intensity
        ↓
Compare with Target Intensity
        ↓
Choose Director Action
        ↓
Apply to Game Systems
        ↓
Observe Result
```

Alur ini penting karena director tidak bekerja sebagai satu fungsi tunggal yang langsung “memilih” sesuatu. Ia menjalankan **loop observasi-evaluasi-aksi** yang mirip dengan agent decision making dalam game.

Tahapan pipeline dapat dipahami sebagai berikut:

1. **Collect Game State**  
   Sistem mengumpulkan data mentah dari game, misalnya `playerHealth`, `enemyCount`, `objectiveProgress`, `timeSinceLastEvent`, atau `currentRoom`.

2. **Calculate Tension / Intensity**  
   Data mentah diubah menjadi nilai yang lebih mudah dibandingkan, misalnya `currentIntensity` atau `tensionScore`. Nilai ini mewakili seberapa menegangkan atau menantang situasi saat ini.

3. **Compare with Target Intensity**  
   Nilai saat ini dibandingkan dengan `targetIntensity` yang ditentukan oleh desain, difficulty, atau target pengalaman pemain.

4. **Choose Director Action**  
   Jika ada selisih, director memilih aksi yang sesuai, misalnya `spawnEnemy`, `activateEvent`, `changeMusicIntensity`, atau `adjustAggression`.

5. **Apply to Game Systems**  
   Aksi dikirim ke sistem yang relevan, seperti `EnemySpawner`, `AudioManager`, `EventSystem`, atau `DifficultyManager`.

6. **Observe Result**  
   Setelah aksi diterapkan, game state berubah dan pipeline berjalan kembali untuk mengevaluasi hasil.

Contoh pada slide menunjukkan keputusan yang proporsional:

```text
Current intensity = rendah
Target intensity = sedang
        ↓
Spawn small enemy wave
```

Artinya, jika intensitas masih rendah tetapi targetnya sedang, director tidak langsung membuat situasi ekstrem. Ia memilih aksi kecil yang menaikkan tekanan secara bertahap, misalnya memunculkan gelombang musuh kecil. Pola ini penting agar pengalaman pemain tetap terasa natural dan tidak tiba-tiba.

Dalam implementasi, mahasiswa perlu memahami bahwa pipeline ini adalah **closed-loop system**. Artinya, director tidak hanya membaca state sekali lalu berhenti. Ia terus mengamati hasil dari aksinya, lalu menyesuaikan keputusan berikutnya. Jika `spawn small enemy wave` membuat `currentIntensity` naik mendekati target, director bisa berhenti menambah tekanan atau memilih aksi yang lebih ringan.

Sebelum lanjut, hal yang harus dipahami adalah: **director mengubah keadaan game menjadi keputusan yang aman, terukur, dan dapat dieksekusi oleh sistem lain**. Keputusan ini biasanya berupa perintah atau parameter, bukan perubahan langsung pada seluruh game.

### Inti yang Harus Ditekankan

- **Pipeline director** adalah alur observasi, evaluasi, pemilihan aksi, eksekusi, dan observasi ulang.
- `tension` atau `intensity` adalah representasi abstrak dari game state, bukan data mentah seperti `playerHealth` atau `enemyCount`.
- Director memilih aksi yang **proporsional** dengan selisih antara `currentIntensity` dan `targetIntensity`.
- Output director adalah perintah ke sistem game, misalnya `EnemySpawner`, `AudioManager`, atau `EventSystem`.
- Pipeline bersifat **closed-loop**, sehingga keputusan berikutnya bergantung pada hasil aksi sebelumnya.

### Transisi ke Slide Berikutnya

Setelah memahami bagaimana pipeline director bekerja, langkah berikutnya adalah melihat bagaimana director dapat memanfaatkan **DDA** untuk menentukan target intensitas atau difficulty yang lebih dinamis.

---

## Slide 018 - AI Director dan DDA

### Narasi

Pada slide ini, kita melihat bagaimana **AI Director** dapat bekerja sama dengan **DDA**. DDA berperan sebagai mekanisme yang menentukan target kesulitan dinamis, sedangkan AI Director berperan sebagai lapisan pengatur yang menerjemahkan target tersebut menjadi perubahan nyata di dalam game.

Intuisi pentingnya adalah: DDA tidak langsung mengubah detail perilaku game. DDA lebih menjawab pertanyaan strategis:

```text
Seberapa sulit game sebaiknya?
```

Sementara AI Director menjawab pertanyaan eksekusi:

```text
Apa yang harus diubah untuk mencapai pengalaman itu?
```

Artinya, DDA menghasilkan target, misalnya nilai kesulitan tertentu. AI Director kemudian memilih aksi yang sesuai dengan kondisi pemain dan sistem game.

Contoh pada slide menunjukkan hubungan ini secara konkret:

```text
DDA:
difficultyMultiplier = 1.25

AI Director:
spawn enemy elite
kurangi health drop
aktifkan tactical squad
```

Di sini, `difficultyMultiplier = 1.25` dapat dipahami sebagai penanda bahwa game perlu dibuat sekitar 25 persen lebih sulit. Nilai ini bukan langsung menjadi perilaku musuh, tetapi menjadi input bagi AI Director.

AI Director kemudian menerjemahkan nilai tersebut menjadi beberapa tindakan:

- `spawn enemy elite`: menambah ancaman dengan musuh yang lebih kuat.
- `kurangi health drop`: membuat pemulihan pemain lebih terbatas.
- `aktifkan tactical squad`: membuat kelompok musuh berperilaku lebih terorganisir.

Tiga tindakan ini menunjukkan bahwa satu keputusan kesulitan dapat memengaruhi beberapa sistem sekaligus: musuh, item, dan perilaku NPC. Dalam konteks game, ini penting karena AI Director tidak hanya mengatur satu parameter, tetapi mengoordinasikan beberapa agen atau sistem agar pengalaman pemain berubah secara konsisten.

Yang perlu dipahami mahasiswa adalah perbedaan peran antara DDA dan AI Director. DDA menentukan **target pengalaman**, sedangkan AI Director menentukan **cara mencapai target tersebut**. Jika DDA hanya menaikkan angka kesulitan tanpa aksi yang jelas, efeknya bisa tidak terasa. Sebaliknya, AI Director tanpa target yang jelas dapat membuat perubahan yang tidak konsisten. Sebelum lanjut, pastikan mahasiswa memahami bahwa DDA dapat menjadi salah satu sumber keputusan bagi AI Director. Dalam implementasi sederhana, DDA dapat menghasilkan variabel seperti `difficultyMultiplier`, lalu AI Director membaca nilai tersebut dan memicu aksi yang relevan di game.

### Inti yang Harus Ditekankan

- **DDA** menjawab target kesulitan: seberapa sulit game sebaiknya.
- **AI Director** menjawab aksi: apa yang harus diubah untuk mencapai target tersebut.
- Contoh `difficultyMultiplier = 1.25` menunjukkan bahwa satu nilai DDA dapat diterjemahkan menjadi beberapa perubahan game.
- AI Director dapat memengaruhi beberapa sistem sekaligus, seperti spawn musuh, drop item, dan perilaku NPC.
- DDA dan AI Director bukan hal yang sama; DDA adalah sumber target, AI Director adalah eksekutor perubahan.

### Transisi ke Slide Berikutnya

Setelah memahami bahwa AI Director dapat memakai DDA sebagai sumber target kesulitan, selanjutnya kita akan melihat bagaimana AI Director juga dapat mengarahkan PCG, yaitu sistem yang menghasilkan konten game secara dinamis.

---

## Slide 019 - AI Director dan PCG

### Narasi

Pada slide ini, kita melihat peran **AI Director** ketika bekerja dengan **PCG**, yaitu **Procedural Content Generation**. PCG adalah sistem yang menghasilkan konten game secara prosedural, misalnya ruangan, jalur, item, atau encounter. AI Director tidak sekadar membuat konten; ia menentukan **kapan** dan **jenis konten apa** yang perlu muncul agar pengalaman pemain tetap sesuai dengan kondisi permainan.

Intuisi praktisnya sederhana: PCG menyediakan “bahan” konten, sedangkan AI Director menjadi pengatur arah. Jika pemain sedang eksplorasi, sistem dapat meminta PCG membuat ruangan opsional. Jika pemain terlihat sangat mahir, sistem dapat meminta tantangan yang lebih berat. Jika kesehatan pemain rendah, sistem dapat menyiapkan ruangan sumber daya. Jika ketegangan permainan terlalu rendah, sistem dapat memicu encounter yang lebih menegangkan.

Contoh logika pada slide dapat dibaca sebagai aturan keputusan:

```text
Jika player explorer:
    generate optional room

Jika player high skill:
    generate challenge room

Jika player low health:
    generate resource room

Jika tension terlalu rendah:
    generate ambush encounter
```

Dalam implementasi, alurnya biasanya berbentuk pipeline:

1. Sistem memantau kondisi pemain dan keadaan game, misalnya `playerState`, `skillScore`, `health`, atau `tension`.
2. AI Director mengevaluasi kondisi tersebut dan memilih target konten.
3. PCG menerima permintaan tersebut dan menghasilkan konten yang sesuai.
4. Konten tersebut dimasukkan ke dunia game, misalnya sebagai room baru, spawn point, atau encounter.

Perbedaan penting dengan DDA adalah fokusnya. DDA menjawab seberapa sulit game sebaiknya. AI Director menjawab apa yang harus diubah untuk mencapai pengalaman itu. PCG adalah salah satu saluran perubahan tersebut. Jadi, AI Director tidak hanya mengubah angka kesulitan, tetapi juga dapat mengubah struktur konten yang dihadapi pemain.

Untuk mahasiswa, hal yang perlu dipahami adalah bahwa PCG bukan pengganti keputusan desain. PCG menghasilkan variasi, tetapi AI Director menjaga variasi tersebut tetap bermakna. Tanpa AI Director, konten prosedural bisa muncul secara acak dan tidak sesuai konteks. Dengan AI Director, konten dapat terasa seperti respons terhadap perilaku pemain.

Yang perlu diingat adalah bahwa keputusan konten harus tetap menjaga keseimbangan game. PCG dapat membuat dunia lebih dinamis, tetapi AI Director memastikan konten yang muncul relevan dengan kondisi pemain, ritme permainan, dan tujuan pengalaman yang diinginkan.

### Inti yang Harus Ditekankan

- **PCG** menghasilkan konten, seperti room, encounter, atau resource.
- **AI Director** menentukan **kapan** dan **jenis konten** yang dibutuhkan.
- Alur utamanya: pantau kondisi pemain, evaluasi keputusan, minta PCG, lalu masukkan konten ke dunia game.
- PCG memberi variasi, AI Director memberi konteks dan tujuan.

### Transisi ke Slide Berikutnya

Setelah AI Director dapat mengarahkan konten yang dihasilkan PCG, langkah berikutnya adalah melihat bagaimana ia memengaruhi perilaku enemy secara global.

---

## Slide 020 - AI Director dan Enemy AI

### Narasi

Pada slide ini, kita melihat peran **AI Director** yang lebih luas: ia tidak hanya mengatur konten, tetapi juga dapat mengubah **perilaku enemy secara global**. Jika pada slide sebelumnya AI Director mengarahkan PCG untuk menghasilkan ruangan atau konten, maka di sini fokusnya adalah pada aturan perilaku musuh yang sedang berjalan di dalam game.

Intuisi praktisnya sederhana: musuh tidak harus selalu berperilaku sama. Ketika kondisi permainan berubah, misalnya intensitas meningkat, musuh bisa berubah dari sekadar patroli menjadi lebih agresif, lebih waspada, atau lebih taktis. Perubahan ini membuat dunia game terasa lebih responsif dan hidup.

```text
Intensity Low:
enemy patrol biasa

Intensity Medium:
enemy lebih sering mengejar

Intensity High:
enemy flanking dan cover aktif
```

Contoh di atas menunjukkan bahwa AI Director bekerja pada level kebijakan. Ia tidak perlu menulis ulang seluruh logika musuh, tetapi cukup memilih profil perilaku yang sesuai. Pada `Intensity Low`, musuh cenderung berada pada state `Patrol`. Pada `Intensity Medium`, transisi ke state `Chase` menjadi lebih sering. Pada `Intensity High`, musuh dapat menggunakan perilaku seperti `Flank` dan `UseCover`.

Parameter yang dapat diubah oleh AI Director meliputi:

- `spawn rate`: seberapa sering musuh baru muncul.
- `aggression`: seberapa cepat atau seberapa sering musuh menyerang.
- `detection range`: jarak di mana musuh dapat mendeteksi player.
- `attack cooldown`: jeda waktu antara serangan musuh.
- `squad alert level`: tingkat kewaspadaan sekelompok musuh.
- `elite enemy chance`: peluang munculnya musuh yang lebih kuat.

Parameter-parameter ini biasanya menjadi input bagi sistem enemy AI. Misalnya, nilai `detection range` memengaruhi kapan state `Patrol` beralih ke `Chase`. Nilai `aggression` dapat memengaruhi prioritas node pada behavior tree. Nilai `squad alert level` dapat membuat beberapa musuh bergerak bersama menuju posisi player. Sementara itu, perilaku seperti `Flank` dan `UseCover` dapat didukung oleh steering behavior atau rule-based decision making.

Urutan kerja yang perlu dipahami adalah sebagai berikut:

1. AI Director membaca kondisi permainan, misalnya level intensitas.
2. AI Director memilih profil parameter musuh.
3. Parameter tersebut diterapkan ke sistem enemy AI.
4. Enemy AI menjalankan perilaku sesuai state, action, atau rule yang tersedia.

Dengan cara ini, AI Director berperan sebagai pengatur global, sedangkan enemy AI tetap menjadi eksekutor perilaku. Mahasiswa perlu memahami bahwa perubahan perilaku musuh tidak selalu berarti mengganti seluruh arsitektur AI, tetapi sering kali cukup dengan mengubah parameter, threshold, atau prioritas perilaku.

### Inti yang Harus Ditekankan

- **AI Director** dapat mengubah perilaku enemy secara global, bukan hanya mengatur konten.
- Perubahan perilaku biasanya dilakukan melalui parameter seperti `spawn rate`, `aggression`, `detection range`, `attack cooldown`, `squad alert level`, dan `elite enemy chance`.
- Parameter tersebut memengaruhi sistem enemy AI seperti state, action, behavior tree, steering, atau rule-based decision making.
- AI Director menentukan kebijakan, sedangkan enemy AI menjalankan perilaku di dalam game.

### Transisi ke Slide Berikutnya

Setelah melihat contoh konkret pada enemy AI, kita akan melangkah ke konsep yang lebih umum, yaitu **adaptive systems**, yaitu sistem game yang berubah berdasarkan kondisi permainan atau player.

---

## Slide 021 - Adaptive Systems

### Narasi

Pada slide ini, kita masuk ke konsep **adaptive system** dalam game. Secara sederhana, **adaptive system** adalah sistem game yang tidak tetap, tetapi dapat berubah berdasarkan kondisi permainan atau perilaku player. Intuisinya, game tidak hanya menjalankan aturan yang sama dari awal sampai akhir, melainkan dapat “merasakan” situasi dan menyesuaikan pengalaman yang diberikan.

Perbedaan penting dengan sistem statis adalah adanya **responsivitas**. Dalam game statis, parameter seperti jumlah musuh, tingkat kesulitan, atau isi level biasanya sudah ditetapkan. Dalam adaptive system, parameter tersebut dapat dimodifikasi saat `runtime` agar lebih sesuai dengan kemampuan, gaya bermain, atau kebutuhan player.

Contoh adaptive systems yang umum dalam game antara lain:

- **DDA** atau `Dynamic Difficulty Adjustment`, yaitu penyesuaian tingkat kesulitan secara dinamis.
- `adaptive spawning`, yaitu penyesuaian jumlah, jenis, atau waktu munculnya entitas.
- `adaptive enemy behavior`, yaitu perilaku musuh yang berubah sesuai kondisi player atau situasi.
- `adaptive PCG`, yaitu penyesuaian konten yang dihasilkan secara prosedural.
- `adaptive hint`, yaitu bantuan atau petunjuk yang muncul sesuai kebutuhan player.
- `adaptive music`, yaitu musik yang berubah mengikuti suasana atau intensitas permainan.
- `adaptive loot`, yaitu penyesuaian item atau hadiah yang diterima player.
- `adaptive tutorial`, yaitu tutorial yang menyesuaikan tingkat penjelasan atau bantuan.

Perlu dipahami bahwa adaptive system tidak selalu berarti “membuat game lebih sulit”. Tujuannya adalah membuat pengalaman lebih **responsif terhadap player**. Misalnya, jika player terlalu cepat, sistem dapat menambah tantangan. Jika player kesulitan, sistem dapat memberi bantuan, mengurangi tekanan, atau menyesuaikan konten agar player tetap terlibat.

Dalam konteks Game Cerdas, adaptive system dapat dipandang sebagai bentuk **decision making** pada level sistem game. Sistem mengumpulkan informasi tentang kondisi permainan, lalu menentukan perubahan yang perlu dilakukan. Perubahan ini bisa memengaruhi NPC behavior, pathfinding, spawning, konten, audio, atau mekanisme permainan. Jadi, adaptive system bukan hanya milik satu komponen, tetapi dapat menjadi lapisan yang menghubungkan banyak sistem dalam game.

Sebelum lanjut, mahasiswa perlu menangkap dua hal utama. Pertama, adaptive system adalah **sistem yang berubah berdasarkan kondisi**. Kedua, tujuannya adalah meningkatkan pengalaman player melalui respons yang lebih tepat, bukan sekadar mengubah parameter secara acak.

### Inti yang Harus Ditekankan

- **Adaptive system** adalah sistem game yang berubah berdasarkan kondisi permainan atau player.
- Tujuannya membuat pengalaman game lebih **responsif**, relevan, dan seimbang.
- Contoh penerapannya meliputi **DDA**, `adaptive spawning`, `adaptive enemy behavior`, `adaptive PCG`, `adaptive hint`, `adaptive music`, `adaptive loot`, dan `adaptive tutorial`.
- Adaptive system dapat memengaruhi banyak aspek game, bukan hanya perilaku musuh.

### Transisi ke Slide Berikutnya

Setelah memahami apa itu adaptive system, langkah berikutnya adalah melihat bagaimana sistem tersebut bekerja secara terstruktur. Pada slide berikutnya, kita akan membahas alur kerja adaptasi yang menjelaskan cara sistem mengumpulkan informasi, mengambil keputusan, dan menilai dampaknya.

---

## Slide 022 - Adaptive System Pipeline

### Narasi

Slide ini menunjukkan bagaimana **adaptive system** bekerja sebagai satu alur, bukan sekadar fitur yang muncul tiba-tiba.

```text
Sense
    ↓
Model
    ↓
Decide
    ↓
Adapt
    ↓
Evaluate
```

Pipeline ini dapat dibaca sebagai arsitektur sederhana untuk sistem game yang responsif. Ia mirip cara **agent** mengambil keputusan, tetapi cakupannya bisa lebih luas: bukan hanya satu karakter, melainkan kondisi permainan secara global.

Tahapan utamanya adalah:

1. **Sense**: sistem mengumpulkan data dari permainan, misalnya performa player, waktu bertahan, frekuensi gagal, pola eksplorasi, atau status sumber daya.
2. **Model**: data tersebut diolah menjadi pemahaman kondisi, seperti player sedang kesulitan, progres terlalu lambat, atau tekanan permainan terlalu tinggi.
3. **Decide**: sistem menentukan bentuk adaptasi yang paling sesuai, misalnya menurunkan tekanan, menambah bantuan, atau mengubah prioritas konten.
4. **Adapt**: keputusan itu diterapkan ke sistem game, baik pada parameter, spawn, hint, resource, atau perilaku elemen lain.
5. **Evaluate**: sistem mengamati dampak perubahan, lalu data baru kembali masuk ke tahap `Sense` untuk siklus berikutnya.

Poin penting yang harus dipahami mahasiswa adalah bahwa adaptasi yang baik tidak cukup hanya “mengubah game”. Sistem harus tahu **mengapa** mengubah, **apa** yang diubah, dan **seberapa jauh** perubahan itu berdampak. Tanpa `Evaluate`, adaptasi bisa menjadi asal-asalan atau justru membuat pengalaman tidak konsisten.

Dalam konteks game cerdas, pipeline ini menjadi jembatan antara **decision making** dan **gameplay system**. Ia membantu kita melihat bahwa perilaku adaptif bukan hanya milik satu entitas dalam game, tetapi juga bisa menjadi lapisan sistem yang mengatur pengalaman player secara keseluruhan.

### Inti yang Harus Ditekankan

- **Adaptive system pipeline** adalah alur berulang: `Sense`, `Model`, `Decide`, `Adapt`, `Evaluate`.
- Pipeline ini mirip arsitektur agent, tetapi dapat diterapkan pada sistem game secara global.
- Tahap `Evaluate` penting agar adaptasi tidak asal berubah, tetapi benar-benar berdampak pada pengalaman player.

### Transisi ke Slide Berikutnya

Setelah memahami alurnya, kita lanjut ke bentuk konkret adaptasi dalam gameplay: apa saja elemen yang bisa diubah, dan bagaimana contoh sederhana adaptasi tersebut terlihat dalam permainan.

---

## Slide 023 - Adaptive Gameplay

### Narasi

**Adaptive gameplay** adalah kemampuan sistem game untuk menyesuaikan pengalaman bermain berdasarkan kondisi pemain. Penyesuaian ini tidak terbatas pada satu parameter, tetapi dapat menyentuh banyak lapisan gameplay secara bersamaan.

Elemen yang dapat diubah meliputi:

- `Difficulty`: tingkat kesulitan umum atau parameter tertentu.
- `Content`: urutan atau variasi konten yang disajikan.
- `Enemy Behavior`: pola gerak, agresivitas, atau kecepatan musuh.
- `Resource`: jumlah item, amunisi, atau bantuan yang tersedia.
- `Objective`: target atau prioritas misi.
- `Tutorial`: panduan yang muncul saat pemain membutuhkan.
- `Narrative`: penekanan cerita atau respons naratif.
- `Music`: suasana audio yang mendukung kondisi bermain.

Intuisi praktisnya sederhana: sistem mengamati sinyal perilaku pemain, lalu memilih perubahan yang paling sesuai. Sinyal tersebut bisa berupa kegagalan berulang, gaya eksplorasi, kecepatan penyelesaian, atau preferensi pemain. Setelah sinyal tersebut diproses, sistem menghasilkan keputusan adaptasi yang mengubah parameter game.

Contoh pertama terjadi ketika pemain sering gagal di combat. Sistem dapat memberikan lebih banyak `resource` dan membuat musuh berikutnya sedikit lebih lambat. Tujuannya bukan sekadar membuat game lebih mudah, tetapi menjaga agar pemain tetap bisa belajar tanpa frustrasi yang berlebihan.

```text
Player sering gagal di combat:
    game memberi lebih banyak resource
    enemy berikutnya sedikit lebih lambat
```

Contoh kedua terjadi ketika pemain bersifat eksploratif. Sistem dapat membuka `optional area` dan memberikan `collectible` tambahan. Dengan cara ini, gaya bermain pemain dihargai, dan dunia game terasa lebih hidup.

```text
Player eksploratif:
    game membuka optional area
    memberi collectible tambahan
```

Dalam implementasi, perubahan ini biasanya berupa parameter yang dapat dikendalikan oleh sistem adaptif. Misalnya, `enemySpeed`, `resourceDrop`, `unlockArea`, atau `musicLayer` dapat diubah berdasarkan kondisi pemain. Yang penting, perubahan tersebut harus terukur, konsisten, dan tidak membuat pemain merasa game berubah secara acak.

Sebelum lanjut, mahasiswa perlu memahami bahwa adaptive gameplay bukan sekadar menaikkan atau menurunkan nilai. Ia adalah respons desain terhadap perilaku pemain, dengan tujuan menjaga kenyamanan, keterlibatan, dan keseimbangan pengalaman bermain.

### Inti yang Harus Ditekankan

- **Adaptive gameplay** dapat mengubah banyak elemen: `Difficulty`, `Content`, `Enemy Behavior`, `Resource`, `Objective`, `Tutorial`, `Narrative`, dan `Music`.
- Adaptasi harus berbasis sinyal pemain, bukan perubahan acak.
- Contoh adaptasi yang baik membantu pemain tetap terlibat, misalnya menambah `resource` saat combat sulit atau membuka area baru bagi pemain eksploratif.

### Transisi ke Slide Berikutnya

Setelah kita melihat apa saja yang dapat diubah oleh adaptive gameplay, langkah berikutnya adalah memastikan setiap adaptasi memiliki tujuan desain yang jelas.

---

## Slide 024 - Adaptasi Harus Memiliki Tujuan

### Narasi

Pada slide ini, kita masuk ke prinsip penting dalam **adaptive gameplay**: sistem adaptif tidak boleh dibangun hanya karena teknologi memungkinkan. Setiap perubahan yang dilakukan game terhadap pemain harus memiliki **tujuan desain** yang jelas.

Tujuan desain inilah yang membedakan adaptasi yang baik dari sekadar reaksi otomatis. Beberapa tujuan yang umum adalah:

- menjaga **flow** pemain,
- mengurangi **frustrasi**,
- menambah **tantangan** secara proporsional,
- memperkuat **gaya bermain** pemain,
- menghindari **kebosanan**,
- memberi **variasi**,
- menjaga **fairness** atau rasa adil.

Dalam konteks perilaku NPC atau sistem keputusan, adaptasi yang baik membuat pemain merasa game “memahami” ritmenya, bukan merasa dihukum karena terlalu baik atau terlalu buruk. Misalnya, jika pemain sering gagal, sistem bisa memberi ruang belajar, bukan langsung memperberat keadaan.

Sebaliknya, adaptasi yang buruk biasanya terasa tidak masuk akal. Contoh berikut menunjukkan masalahnya:

```text
Game menaikkan enemy damage terus-menerus
hanya karena player menang.
```

Masalah pada contoh ini bukan hanya pada nilai `enemy damage`, tetapi pada **motivasi desain** di baliknya. Jika pemain menang, menaikkan kesulitan terus-menerus bisa membuat pemain merasa progresnya tidak dihargai. Adaptasi semacam ini berpotensi mengubah pengalaman bermain menjadi hukuman, bukan penyesuaian.

Karena itu, sebelum mahasiswa memilih bentuk adaptasi, tanyakan dulu: **adaptasi ini untuk apa?** Apakah untuk menjaga flow? Apakah untuk memberi variasi? Apakah untuk memperkuat identitas gaya bermain? Jika jawabannya tidak jelas, adaptasi tersebut sebaiknya tidak dimasukkan.

### Inti yang Harus Ditekankan

- **Adaptasi harus memiliki tujuan desain**, bukan sekadar kemampuan teknis.
- Tujuan adaptasi dapat berupa menjaga **flow**, mengurangi **frustrasi**, menambah tantangan, memberi variasi, atau menjaga **fairness**.
- Adaptasi yang baik mendukung **gameplay**, bukan membuat pemain merasa dihukum.

### Transisi ke Slide Berikutnya

Dengan memahami bahwa setiap adaptasi harus punya tujuan, kita dapat memilih bentuk adaptasi yang lebih terarah untuk final project.

---

## Slide 025 - Adaptive System dalam Final Project

### Narasi

Pada final project, **adaptive system** adalah mekanisme yang membuat game merespons kondisi pemain secara terukur. Intuisi praktisnya sederhana: game membaca sinyal dari pemain, lalu mengubah satu aspek gameplay agar pengalaman bermain tetap sesuai tujuan desain.

Slide memberikan beberapa pilihan bentuk adaptasi:

```text
DDA sederhana
Adaptive enemy spawn
Adaptive loot drop
Adaptive tactical aggression
Adaptive PCG room
Adaptive hint system
Player-profile based adjustment
```

Tidak semua bentuk ini harus diimplementasikan. Yang lebih penting adalah memilih **satu adaptive behavior** yang jelas, dapat dijelaskan, dan dampaknya bisa diamati.

Contoh yang paling mudah dipahami adalah **adaptive loot drop**. Jika pemain sering berada pada kondisi `low health`, sistem dapat meningkatkan `spawn chance` item kesehatan. Dengan cara ini, game tidak langsung menurunkan kesulitan secara drastis, tetapi memberikan bantuan yang lebih proporsional.

Secara umum, alur adaptasi dapat dipahami sebagai berikut:

1. Sistem membaca kondisi pemain, misalnya `health` atau frekuensi pemain berada dalam kondisi sulit.
2. Sistem menilai apakah kondisi tersebut sudah melewati batas tertentu.
3. Sistem mengubah parameter gameplay, seperti `spawn chance`, jumlah musuh, atau tingkat bantuan.
4. Perubahan dibatasi agar tetap terasa wajar dan tidak merusak fairness.

Mahasiswa perlu memahami bahwa adaptasi yang baik tidak boleh terasa seperti game “menghukum” atau “menangisi” pemain. Karena itu, setiap perubahan harus memiliki alasan desain yang jelas: sinyal apa yang dibaca, parameter apa yang diubah, dan mengapa perubahan itu mendukung gameplay.

Untuk final project, satu perilaku adaptif yang kuat lebih baik daripada banyak perilaku yang samar. Misalnya, `adaptive enemy spawn` dapat menyesuaikan tekanan musuh, `adaptive tactical aggression` dapat mengubah agresivitas NPC, `adaptive hint system` dapat menyesuaikan bantuan, atau `player-profile based adjustment` dapat menyesuaikan pengalaman berdasarkan pola bermain pemain. Yang dinilai bukan hanya adanya mekanisme, tetapi kejelasan tujuan, data yang digunakan, dan efeknya terhadap pengalaman bermain.

### Inti yang Harus Ditekankan

- Dalam final project, cukup ada **satu adaptive behavior** yang jelas, terukur, dan dapat dijelaskan.
- Adaptasi harus berbasis sinyal pemain, lalu mengubah parameter gameplay secara terbatas dan proporsional.
- Tujuan adaptasi adalah menjaga `flow`, fairness, dan tantangan, bukan sekadar membuat game berubah tanpa alasan desain.

### Transisi ke Slide Berikutnya

Setelah membahas adaptasi yang dirancang secara eksplisit, kita akan masuk ke perilaku yang muncul dari interaksi aturan sederhana, yaitu **emergent behavior**.

---

## Slide 026 - Emergent Behavior

### Narasi

**Emergent behavior** adalah perilaku kompleks yang muncul dari interaksi banyak agen yang mengikuti aturan sederhana. Dalam konteks game, perilaku ini sering muncul ketika setiap NPC, musuh, atau hewan hanya tahu aturan lokal, tetapi hasil kolektifnya terlihat seperti perilaku kelompok yang terorganisasi.

Intuisi praktisnya: kita tidak perlu menulis aturan besar seperti `buat formasi burung realistis`. Cukup beri setiap agen beberapa aturan sederhana, lalu biarkan interaksi antar agen menghasilkan pola yang lebih kompleks.

Contoh klasik adalah **flocking**:

```text
Separation + Alignment + Cohesion
        ↓
Flocking
```

Tiga aturan ini biasanya bekerja pada level individu:

- **Separation**: agen menjaga jarak agar tidak bertabrakan dengan agen terdekat.
- **Alignment**: agen menyesuaikan arah geraknya dengan arah rata-rata agen di sekitarnya.
- **Cohesion**: agen bergerak mendekati pusat kelompok agar tidak terpisah.

Tidak ada satu agen pun yang mengetahui formasi akhir. Tidak ada aturan eksplisit yang mengatakan `bentuk V`, `jaga jarak 2 meter`, atau `ikuti pemimpin`. Perilaku kelompok muncul karena setiap agen terus-menerus merespons lingkungan lokalnya.

Dalam implementasi game, aturan-aturan ini sering dihitung sebagai gaya steering atau vektor percepatan. Setiap frame, agen dapat menghitung pengaruh `separation`, `alignment`, dan `cohesion`, lalu menggabungkannya menjadi gerakan akhir. Hasilnya, kawanan burung atau kelompok NPC dapat terlihat hidup tanpa skenario perilaku yang ditulis secara manual.

Yang harus dipahami mahasiswa sebelum lanjut: **emergent behavior** bukan berarti perilaku acak. Ia muncul dari aturan yang konsisten, tetapi sulit diprediksi sepenuhnya karena bergantung pada interaksi banyak agen. Karena itu, dalam desain game, emergence perlu diuji dan dikontrol agar tetap mendukung gameplay.

### Inti yang Harus Ditekankan

- **Emergent behavior** muncul dari interaksi aturan sederhana, bukan dari aturan perilaku kompleks yang ditulis langsung.
- Contoh dasar adalah **flocking** dari kombinasi `Separation`, `Alignment`, dan `Cohesion`.
- Tidak ada aturan eksplisit untuk formasi akhir; pola kelompok muncul dari respons lokal setiap agen.
- Dalam sistem game, emergence sering dihasilkan melalui steering, interaksi antar agen, dan aturan lokal yang terus dievaluasi.

### Transisi ke Slide Berikutnya

Setelah memahami bagaimana perilaku kompleks dapat muncul dari aturan sederhana, kita lanjut ke slide berikutnya untuk melihat mengapa **emergent behavior** menarik dalam game dan bagaimana emergence perlu dikontrol agar tidak merusak gameplay.

---

## Slide 027 - Mengapa Emergent Behavior Menarik?

### Narasi

Pada slide sebelumnya, kita sudah melihat bahwa **emergent behavior** muncul dari interaksi aturan sederhana. Sekarang kita masuk ke pertanyaan desain: mengapa fenomena ini penting bagi game?

Intuisi utamanya sederhana: pemain tidak selalu perlu melihat sistem yang rumit. Mereka cukup merasakan dunia yang hidup. Ketika banyak `NPC` atau `agent` bergerak, bereaksi, dan saling memengaruhi, perilaku kelompok bisa terasa lebih natural daripada skenario yang diprogram satu per satu.

Beberapa contoh yang paling mudah dibayangkan:

- `enemy` mengepung `player` tanpa ada skenario eksplisit.
- `squad` terlihat bekerja sama karena tiap anggota menjaga jarak, mengikuti arah, dan tetap dekat.
- hewan membentuk kawanan.
- `zombie swarm` bergerak dinamis.
- `NPC` bereaksi terhadap bahaya.
- ekosistem `predator-prey` muncul dari aturan sederhana.

Yang menarik dari **emergence** adalah ia memberi **variasi** dan **kejutan**. Setiap sesi bermain bisa terasa berbeda, karena hasil perilaku tidak selalu identik. Bagi pemain, ini membuat game terasa lebih hidup dan lebih sulit diprediksi. Bagi desainer, ini adalah cara mendapatkan kompleksitas tanpa menulis ribuan aturan khusus.

Namun, emergent behavior tidak boleh dibiarkan sepenuhnya bebas. Jika perilaku yang muncul terlalu kacau, terlalu lambat, terlalu agresif, atau bertentangan dengan tujuan game, maka **gameplay** bisa rusak. Karena itu, emergence harus dikontrol melalui penyetelan parameter, batasan perilaku, prioritas aturan, dan pengujian.

Sebelum lanjut, mahasiswa perlu memahami dua hal penting:

- perilaku menarik bisa muncul dari aturan lokal yang sederhana;
- kemunculan perilaku baru bukan berarti sistem sudah benar, karena ia tetap harus diarahkan agar sesuai dengan pengalaman bermain yang diinginkan.

### Inti yang Harus Ditekankan

- **Emergent behavior** membuat game terasa lebih hidup karena perilaku kelompok muncul dari interaksi banyak `agent`.
- Emergence memberi **variasi** dan **kejutan**, tetapi harus dikontrol agar tidak merusak **gameplay**.
- Perilaku menarik bisa berasal dari aturan sederhana, bukan selalu dari sistem keputusan yang kompleks.

### Transisi ke Slide Berikutnya

Selanjutnya, kita akan melihat contoh konkret bagaimana aturan sederhana seperti `separation`, `alignment`, dan `cohesion` dapat menghasilkan perilaku kawanan yang terlihat natural.

---

## Slide 028 - Contoh Emergent Behavior dari Steering

### Narasi

Slide ini menunjukkan bagaimana **emergent behavior** dapat muncul dari **steering** yang sederhana. Intuisinya, setiap `agent` tidak perlu tahu rencana besar kelompok. Ia hanya mengikuti aturan lokal terhadap `neighbor` di sekitarnya.

Aturan dasarnya dapat ditulis sebagai berikut:

```text
Separation:
jangan terlalu dekat

Alignment:
ikuti arah kelompok

Cohesion:
tetap dekat kelompok
```

Tiga aturan ini bekerja pada tingkat lokal. `separation` menjaga `agent` agar tidak menabrak atau bertumpuk dengan `neighbor`. `alignment` membuat `agent` menyesuaikan arah geraknya dengan arah rata-rata `neighbor`. `cohesion` menarik `agent` agar tetap berada dekat pusat kelompok.

Alurnya cukup sederhana:

1. Setiap `agent` mendeteksi `neighbor` dalam radius tertentu.
2. Sistem menghitung gaya `separation`, `alignment`, dan `cohesion`.
3. Ketiga gaya tersebut digabungkan menjadi `steering force`.
4. `agent` memperbarui `velocity` dan `position` berdasarkan gaya tersebut.

Hasilnya:

```text
Agent bergerak seperti kawanan.
```

Perhatikan bahwa tidak ada satu `agent` pun yang menjadi pemimpin pusat. Tidak ada skenario panjang yang menentukan setiap langkah. Perilaku kelompok muncul karena banyak `agent` menjalankan aturan lokal yang sama.

Ini penting untuk desain perilaku NPC. Dalam game, perilaku seperti kawanan, swarm, atau kelompok yang bergerak dinamis dapat dibuat lebih ringan karena tidak membutuhkan keputusan kompleks untuk setiap `agent`. Yang dibutuhkan adalah aturan lokal, deteksi `neighbor`, dan kombinasi gaya yang stabil.

Sebelum lanjut, mahasiswa perlu memahami bahwa **emergence** bukan berarti perilaku acak. Emergence yang baik tetap harus bisa dikontrol, karena jika aturan lokal terlalu kuat atau terlalu lemah, hasil akhirnya bisa tidak stabil, terlalu menumpuk, atau bergerak tidak natural.

### Inti yang Harus Ditekankan

- **Steering** dapat menghasilkan perilaku kelompok dari aturan lokal sederhana.
- `separation`, `alignment`, dan `cohesion` masing-masing menjaga jarak, menyelaraskan arah, dan mempertahankan kekompakan kelompok.
- Perilaku emergent muncul dari interaksi banyak `agent`, bukan dari satu keputusan pusat yang kompleks.
- Aturan lokal harus seimbang agar hasil gerakan terlihat natural dan tetap terkendali.

### Transisi ke Slide Berikutnya

Selanjutnya, kita akan melihat contoh emergent behavior pada level squad, di mana aturan sederhana seperti memilih posisi, menjaga jarak, dan memilih target dapat menghasilkan perilaku taktis tanpa skenario yang rumit.

---

## Slide 029 - Emergent Behavior dari Squad AI

### Narasi

Slide ini melanjutkan ide **emergent behavior** dari level **steering** ke level **squad AI**. Fokusnya adalah bagaimana sekelompok **enemy** dapat terlihat taktis tanpa kita menulis satu skenario panjang yang mengatur setiap gerakan mereka.

Aturan yang diberikan tetap sederhana:

- setiap `enemy` memilih **cover kosong**,
- setiap `enemy` menjaga jarak dari teman,
- `flanker` memilih sisi `player`,
- `attacker` memilih `target` terdekat.

Intuisi praktisnya adalah begini: satu agen tidak perlu tahu seluruh rencana tim. Ia hanya perlu mengikuti beberapa aturan lokal yang masuk akal. Memilih **cover kosong** membuat agen tidak bertumpuk di satu titik. Menjaga jarak dari teman mencegah formasi menjadi sempit dan mudah dipukul sekaligus.

Dua aturan berikutnya memberi **peran** pada agen. `flanker` tidak hanya menyerang dari depan, tetapi mencari sisi `player` agar tekanan datang dari arah berbeda. `attacker` memilih `target` terdekat, sehingga ada agen yang fokus menyelesaikan musuh yang paling dekat. Kombinasi peran ini membuat kelompok terlihat seperti sedang membagi tugas.

Di sinilah **emergence** muncul. Tidak ada satu `scripted sequence` yang berkata: “agent A ke kiri, agent B ke kanan, agent C serang.” Yang ada hanya aturan lokal. Namun ketika banyak agen menjalankannya bersamaan, hasil globalnya adalah **enemy tersebar**, `player` merasa **dikepung**, dan squad terlihat **taktis**.

Dalam implementasi, aturan-aturan ini bisa direpresentasikan sebagai `state`, skor prioritas, atau node keputusan sederhana. Yang penting untuk dipahami mahasiswa adalah bahwa perilaku kelompok yang kompleks sering kali lebih mudah dikelola jika dibangun dari keputusan lokal yang jelas, terukur, dan mudah diuji.

Sebelum lanjut, pastikan mahasiswa menangkap bahwa **emergent behavior** bukan berarti perilaku acak. Ia muncul dari aturan yang konsisten, tetapi menghasilkan variasi yang sulit diprediksi hanya dari satu agen.

### Inti yang Harus Ditekankan

- **Emergent behavior** pada squad AI muncul dari aturan lokal sederhana yang dijalankan oleh banyak `enemy`.
- Peran seperti `flanker` dan `attacker` memberi variasi keputusan tanpa perlu skenario panjang.
- Hasil global yang diharapkan adalah penyebaran agen, rasa dikepung bagi `player`, dan kesan taktis pada squad.

### Transisi ke Slide Berikutnya

Setelah melihat emergence dari aturan agen, kita akan melangkah ke sumber variasi lain, yaitu **PCG**, di mana konten prosedural dapat menciptakan situasi combat yang berbeda.

---

## Slide 030 - Emergent Behavior dari PCG

### Narasi

Pada slide ini, kita melihat **emergent behavior** yang muncul dari kombinasi **Procedural Content Generation** atau **PCG** dengan perilaku agent. PCG adalah cara membuat konten game secara prosedural, misalnya bentuk dungeon, posisi spawn, penempatan item, atau susunan obstacle. Konten ini tidak selalu dibuat manual satu per satu, tetapi dihasilkan oleh aturan, parameter, atau proses acak yang terkontrol.

Intuisi praktisnya adalah begini: PCG menyediakan variasi "panggung", sedangkan agent menyediakan variasi "tindakan". Ketika panggung berubah, keputusan agent ikut berubah, dan hasil akhirnya bisa terasa baru meskipun tidak ada skenario yang ditulis secara eksplisit.

Beberapa contoh emergence dari PCG:

- **Dungeon random** dapat menciptakan situasi combat yang berbeda setiap kali pemain masuk.
- **Enemy spawn acak** dapat menghasilkan encounter yang unik, misalnya musuh muncul lebih dekat, lebih jauh, atau dari arah yang tidak biasa.
- **Item placement** dapat mengubah strategi pemain, karena posisi item memengaruhi keputusan mengambil, menghindari, atau memperebutkan.
- **Obstacle placement** dapat memengaruhi `pathfinding`, sehingga agent memilih rute yang berbeda dan pola pergerakan berubah.

Pada bagian `pathfinding`, perubahan posisi obstacle mengubah ruang yang bisa dilalui. Agent tidak perlu mengetahui seluruh desain level; cukup bereaksi terhadap informasi lokal seperti jarak, jalur, target, atau cover. Dari reaksi lokal ini, muncul pola global yang terasa taktis, misalnya musuh menyebar, memotong jalur, atau membentuk tekanan dari beberapa arah.

Yang perlu dipahami mahasiswa adalah bahwa emergence dari PCG bukan sekadar "acak". Acak yang baik harus tetap berada dalam batas desain agar gameplay tetap adil, bisa diuji, dan tidak menghasilkan situasi yang mustahil. Variasi konten dapat memperkuat aturan agent, tetapi juga dapat memperbesar efek dari keputusan yang salah.

Sebelum lanjut, pegang satu gagasan utama: **emergent behavior dari PCG** lahir dari interaksi antara konten yang dihasilkan secara prosedural dan keputusan agent yang berjalan di dalamnya.

### Inti yang Harus Ditekankan

- **PCG** menghasilkan variasi konten seperti dungeon, spawn, item, dan obstacle.
- Agent yang bereaksi terhadap konten tersebut dapat menghasilkan perilaku baru yang tidak ditulis manual.
- `pathfinding`, `spawn`, `item`, dan `obstacle` adalah contoh komponen yang menghubungkan konten prosedural dengan keputusan agent.
- Emergence harus tetap berada dalam batas desain agar tidak menjadi tidak adil atau sulit diuji.

### Transisi ke Slide Berikutnya

Karena emergence dapat menghasilkan situasi yang tidak terduga, slide berikutnya akan membahas risiko yang muncul ketika perilaku emergent tidak dibatasi dengan baik.

---

## Slide 031 - Risiko Emergent Behavior

_Belum ada narasi terpilih untuk slide ini._

---

## Slide 032 - Mendesain Emergence yang Terkontrol

### Narasi

**Emergence** dalam game bukan berarti membiarkan semua sistem berjalan bebas. Ia muncul ketika beberapa aturan sederhana berinteraksi dan menghasilkan perilaku yang lebih kompleks dari yang dirancang satu per satu.

Karena interaksi itu bisa tidak terduga, desainer perlu memberi **ruang aman** agar perilaku baru tetap sesuai tujuan gameplay. Prinsip utamanya adalah:

- **Mulai dari aturan sederhana** agar perilaku dasar mudah dipahami dan diuji.
- **Batasi parameter** agar agent tidak bergerak atau memilih aksi di luar batas desain.
- **Gunakan constraint** untuk menjaga situasi tetap adil dan dapat dibaca player.
- **Gunakan debug visual** agar alasan perilaku agent bisa diamati.
- **Test banyak skenario** untuk menemukan interaksi yang tidak terduga.
- **Beri fallback behavior** agar agent tetap aman ketika tidak ada aksi yang valid.
- **Jangan biarkan semua sistem bebas tanpa batas** karena hal itu bisa menghasilkan bug atau gameplay yang tidak stabil.

Dalam konteks NPC, aturan sederhana seperti `move`, `seek`, `flank`, `avoid`, atau `take cover` bisa saling berinteraksi. Jika tidak dibatasi, agent mungkin menghasilkan perilaku yang tampak cerdas tetapi merugikan player.

Contoh pada slide:

```text
Enemy boleh flank,
tetapi tidak boleh spawn terlalu dekat dari player.
```

Artinya, sistem boleh memilih taktik `flank`, tetapi ada **constraint** pada posisi awal atau jarak `spawn`. Constraint ini menjaga agar enemy tidak langsung mematikan player, sekaligus memberi ruang bagi player untuk membaca situasi.

**Debug visual** dan **fallback behavior** membuat desain ini bisa diuji. Visualisasi membantu melihat alasan perilaku agent, misalnya posisi, jalur, atau keputusan yang diambil. Jika tidak ada aksi yang memenuhi constraint, agent harus punya perilaku aman, misalnya tetap di posisi awal, mundur, atau menunggu.

Sebelum lanjut, mahasiswa perlu memahami bahwa **emergence yang baik** bukan hasil kebetulan. Ia dirancang melalui aturan sederhana, parameter terbatas, constraint, pengujian, dan perilaku cadangan.

### Inti yang Harus Ditekankan

- **Emergence terkontrol** adalah keseimbangan antara perilaku yang muncul dan batasan desain.
- **Constraint** menjaga agar agent tidak menghasilkan situasi tidak adil, terlalu sulit, atau sulit dibaca player.
- **Fallback behavior** memastikan agent tetap berperilaku aman ketika tidak ada aksi yang valid.
- **Debug visual** dan pengujian banyak skenario membantu memahami mengapa agent memilih perilaku tertentu.

### Transisi ke Slide Berikutnya

Jika constraint sudah dirancang, langkah berikutnya adalah memastikan perilaku agent benar-benar berjalan sesuai harapan. Untuk itu, kita akan masuk ke debugging perilaku agent, yaitu cara mencari dan memperbaiki masalah perilaku yang tidak selalu terlihat dari error code.

---

## Slide 033 - Debugging Game AI

### Narasi

Slide ini membahas **Debugging Game AI**, yaitu proses mencari, memahami, dan memperbaiki masalah pada perilaku AI dalam game. Berbeda dengan bug program biasa yang sering muncul sebagai error code, crash, atau pesan di console, masalah AI biasanya terlihat sebagai **perilaku yang salah** meskipun sistem secara teknis berjalan.

Intuisi pentingnya adalah: ketika AI berperilaku aneh, masalahnya sering bukan pada satu baris kode, tetapi pada **keputusan yang dihasilkan dari kombinasi state, input, parameter, dan sistem lain**. Misalnya, NPC tidak mengejar player bukan karena fungsi gerak rusak, tetapi karena target berubah, path tidak valid, utility score salah, atau state machine tidak berpindah seperti yang diharapkan.

Masalah AI sering tidak terlihat dari error code. Karena itu, debugging AI membutuhkan **visualisasi internal state**, yaitu kemampuan melihat apa yang sedang “dipikirkan” atau diproses oleh AI pada saat tertentu. Visualisasi ini membantu kita mengetahui state aktif, aksi terpilih, nilai utility, path yang sedang diikuti, steering force, atau kondisi agent.

Beberapa contoh masalah yang umum muncul dalam game AI adalah:

- `NPC` tidak mengejar `player`.
- `enemy` memilih `cover` yang salah.
- `agent` stuck di satu posisi.
- `DDA` tidak berubah meskipun kondisi player berubah.
- `BT` selalu gagal pada node tertentu.
- `Utility AI` memilih aksi yang tidak masuk akal.
- `NavMeshAgent` tidak bergerak meskipun destination sudah diset.

Untuk memahami masalah seperti ini, mahasiswa perlu membiasakan diri membaca perilaku AI dari **data internal**, bukan hanya dari hasil visual di layar. Contoh data yang penting diamati antara lain `currentState`, `selectedAction`, `utilityScore`, `target`, `distance`, `velocity`, `pathStatus`, `isStopped`, dan `destination`. Dengan data ini, kita bisa membedakan apakah masalahnya ada pada decision making, pathfinding, steering, state transition, atau parameter desain.

Sebelum masuk ke detail teknis, hal yang harus dipahami adalah: **debugging AI adalah proses observasi dan isolasi variabel**. Kita perlu melihat kondisi saat AI mengambil keputusan, membandingkan dengan kondisi yang diharapkan, lalu mencari titik di mana perilaku mulai menyimpang. Pendekatan ini penting karena perilaku AI sering bergantung pada banyak faktor sekaligus.

### Inti yang Harus Ditekankan

- **Debugging Game AI** berfokus pada perilaku, bukan hanya error code.
- Masalah AI sering muncul karena kombinasi **state, input, parameter, dan sistem lain**.
- **Visualisasi internal state** adalah kunci untuk memahami keputusan AI.
- Mahasiswa perlu mampu membaca data seperti `state`, `action`, `utility`, `path`, dan `agent status`.
- Debugging AI membutuhkan pendekatan observasi, reproduksi skenario, dan isolasi variabel.

### Transisi ke Slide Berikutnya

Setelah memahami bahwa debugging AI membutuhkan observasi terhadap perilaku dan state internal, kita akan masuk ke slide berikutnya untuk membahas mengapa debugging AI sering kali lebih sulit dibandingkan debugging sistem game yang lebih deterministik.

---

## Slide 034 - Mengapa Debugging AI Sulit?

### Narasi

Debugging AI sering terasa berbeda dari debugging bug biasa. Pada bug biasa, kita biasanya melihat pesan error, stack trace, atau fungsi yang gagal. Pada AI game, masalahnya sering berupa **perilaku yang salah** tanpa ada pesan error yang jelas.

Misalnya, NPC tidak mengejar, agent berhenti, atau enemy memilih aksi yang aneh. Masalahnya bukan selalu karena satu baris kode rusak, tetapi karena keputusan AI terbentuk dari banyak kondisi yang saling terhubung.

Beberapa alasan utama debugging AI sulit adalah:

1. **Behavior tergantung kondisi.** Perilaku NPC dipengaruhi oleh `state`, `target`, jarak, `health`, `path`, dan kondisi lingkungan. Jika salah satu kondisi berubah, keputusan bisa berubah juga.
2. **Banyak sistem terhubung.** Satu aksi NPC bisa melibatkan `NavMeshAgent`, `BehaviorTree`, `FSM`, steering, animasi, dan sistem keputusan. Bug bisa muncul di salah satu sistem, tetapi terlihat di sistem lain.
3. **Perubahan kecil memengaruhi keputusan.** Nilai threshold, `utility score`, weight, atau parameter kecil dapat mengubah pilihan aksi secara signifikan.
4. **Bug kadang hanya muncul pada `seed` tertentu.** Jika AI menggunakan acak, procedural generation, atau parameter yang berubah antar run, perilaku bisa berbeda setiap kali dijalankan.
5. **Emergent behavior tidak selalu mudah diprediksi.** Kombinasi beberapa sistem yang masing-masing tampak benar dapat menghasilkan perilaku yang tidak diharapkan.
6. **Tidak selalu ada error di console.** AI bisa berjalan tanpa exception, tetapi tetap menghasilkan keputusan yang salah.

Karena itu, AI perlu dibuat **observable**. Artinya, kita perlu bisa melihat alasan di balik perilaku NPC, bukan hanya melihat hasil akhirnya. Mahasiswa perlu memahami bahwa debugging AI bukan hanya mencari kode yang error, tetapi menelusuri **mengapa** agent mengambil keputusan tertentu.

Sebelum lanjut, hal penting yang harus dipahami adalah: perilaku AI yang sulit di-debug biasanya disebabkan oleh ketergantungan kondisi, interaksi antar sistem, dan kurangnya visibilitas internal.

### Inti yang Harus Ditekankan

- Bug AI sering berupa **perilaku salah**, bukan error runtime yang jelas.
- Penyebab bisa tersebar di banyak sistem: `state`, `target`, `path`, `condition`, `utility score`, dan `seed`.
- AI harus dibuat **observable** agar keputusan agent dapat ditelusuri dan dipahami.

### Transisi ke Slide Berikutnya

Setelah memahami mengapa debugging AI sulit, langkah berikutnya adalah membangun prinsip debugging yang benar: jangan hanya melihat apa yang NPC lakukan, tetapi lihat juga mengapa NPC melakukannya.

---

## Slide 035 - Prinsip Debugging Game AI

### Narasi

Setelah kita memahami bahwa perilaku NPC sering sulit dilacak, langkah berikutnya adalah membangun kebiasaan debugging yang benar. Prinsip utamanya bukan hanya memeriksa apakah NPC bergerak, menyerang, atau berhenti, tetapi memahami alasan di balik perilaku tersebut.

```text
Jangan hanya melihat apa yang NPC lakukan.
Lihat juga mengapa NPC melakukannya.
```

Perilaku NPC adalah hasil akhir dari banyak keputusan. Jika NPC tidak mengejar pemain, misalnya, masalahnya bisa berada pada `state` yang salah, `target` yang tidak terdeteksi, `path` yang terblokir, `condition` yang tidak terpenuhi, atau `utility score` yang memilih aksi lain. Karena itu, debugging harus dilakukan dengan cara mengamati alasan keputusan, bukan hanya mengamati gejala.

Dalam praktik, kita perlu membuat sistem perilaku menjadi **observable**. Artinya, setiap keputusan penting harus bisa ditelusuri melalui data yang relevan. Data ini membantu kita menjawab pertanyaan mendasar saat perilaku tidak sesuai harapan.

Beberapa pertanyaan yang harus bisa dijawab oleh sistem debug adalah:

- `state` apa yang sedang aktif?
- `target` siapa yang sedang diproses?
- `destination` di mana NPC seharusnya bergerak?
- `path` yang dihasilkan valid atau tidak?
- `condition` mana yang bernilai `true`?
- `utility score` berapa untuk setiap aksi?
- `reward` berapa yang diterima agent?
- `seed` apa yang digunakan untuk simulasi?

Pertanyaan-pertanyaan ini penting karena perilaku game sering bergantung pada kombinasi kondisi, bukan satu variabel tunggal. Dengan mengetahui `state`, `target`, dan `path`, kita bisa membedakan apakah masalah ada pada deteksi, navigasi, atau eksekusi aksi. Dengan mengetahui `condition`, `utility score`, dan `reward`, kita bisa memahami mengapa satu pilihan lebih diutamakan daripada pilihan lain. Dengan mengetahui `seed`, kita bisa mereproduksi situasi yang sama saat menguji perbaikan.

Prinsip ini juga membantu mahasiswa menghindari debugging yang hanya berbasis tebakan. Alih-alih mengubah parameter secara acak, kita bisa melihat bukti dari sistem: `state` mana yang berjalan, data mana yang masuk, dan keputusan mana yang dihasilkan. Kebiasaan ini akan menjadi dasar ketika nanti kita melihat bentuk konkret observasi untuk berbagai arsitektur perilaku.

### Inti yang Harus Ditekankan

- Debug perilaku NPC harus fokus pada **mengapa** perilaku terjadi, bukan hanya **apa** yang terlihat.
- Sistem perilaku perlu dibuat **observable** agar `state`, `target`, `destination`, `path`, `condition`, `utility score`, `reward`, dan `seed` bisa diperiksa.
- Data observasi membantu membedakan masalah pada deteksi, navigasi, pengambilan keputusan, atau reproduksi simulasi.

### Transisi ke Slide Berikutnya

Selanjutnya, kita akan melihat contoh konkret observasi state pada beberapa arsitektur perilaku, seperti FSM, behavior tree, dan utility-based decision making.

---

## Slide 036 - Debug State

### Narasi

Slide ini membahas **Debug State**, yaitu cara menampilkan kondisi internal perilaku NPC secara ringkas. Tujuannya bukan hanya melihat NPC bergerak, tetapi memahami **mengapa** NPC berada pada perilaku tertentu. Informasi debug state membantu memeriksa apakah logika perilaku berjalan sesuai desain.

Tiga bentuk debug state yang perlu dipahami adalah:

- **Finite State Machine**: menampilkan state aktif, state sebelumnya, alasan transisi, dan durasi state.
- **Behavior Tree**: menampilkan node yang sedang dieksekusi dan hasil evaluasi node.
- **Utility**: menampilkan skor setiap aksi serta aksi yang terpilih.

Untuk **Finite State Machine**, contohnya:

```text
Current State: Chase
Previous State: Patrol
Reason: Player Visible
Time in State: 4.2s
```

Bagian penting dari output ini adalah `Current State` dan `Previous State`. Keduanya menunjukkan posisi NPC dalam alur perilaku. `Reason` menjelaskan kondisi pemicu, misalnya `Player Visible`. `Time in State` membantu mengetahui apakah NPC terlalu cepat atau terlalu lama berada pada state tertentu. Hasil yang diharapkan adalah NPC berpindah dari `Patrol` ke `Chase` ketika pemain terlihat.

Untuk **Behavior Tree**, contohnya:

```text
Running Node: ChasePlayer
Attack Sequence: Failure
Reason: Player not in attack range
```

Di sini, `Running Node` menunjukkan node aktif, yaitu `ChasePlayer`. `Attack Sequence: Failure` memberi tahu bahwa sequence serangan gagal. `Reason` menjelaskan penyebab kegagalan, yaitu pemain berada di luar jangkauan serangan. Informasi ini penting karena behavior tree sering memiliki banyak node, dan tanpa debug state kita hanya melihat hasil akhir tanpa tahu node mana yang gagal. Hasil yang diharapkan adalah NPC tetap mengejar pemain selama belum berada dalam jarak serangan.

Untuk **Utility**, contohnya:

```text
Attack Score: 0.65
Flee Score: 0.20
TakeCover Score: 0.85
Selected: TakeCover
```

Pendekatan **Utility** memilih perilaku berdasarkan nilai skor. Pada contoh ini, `TakeCover` memiliki skor tertinggi, yaitu `0.85`, sehingga menjadi `Selected`. Mahasiswa perlu memperhatikan bahwa skor bukan hanya benar atau salah, tetapi menunjukkan seberapa kuat suatu perilaku dianggap sesuai dengan kondisi saat ini. Hasil yang diharapkan adalah NPC memilih berlindung karena kondisi saat ini lebih mendukung `TakeCover` daripada `Attack` atau `Flee`.

Dengan melihat ketiga bentuk debug state ini, mahasiswa dapat membedakan cara kerja **FSM**, **Behavior Tree**, dan **Utility**. FSM menekankan transisi state, Behavior Tree menekankan eksekusi node, dan Utility menekankan pemilihan berdasarkan skor.

Sebelum lanjut, mahasiswa harus memahami bahwa debug state adalah dasar untuk mendiagnosis perilaku NPC. Jika state salah, node gagal, atau skor tidak sesuai, maka perilaku game akan terasa tidak masuk akal.

### Inti yang Harus Ditekankan

- **Debug State** menampilkan kondisi internal perilaku NPC, bukan hanya gerakan NPC.
- Untuk **FSM**, perhatikan `Current State`, `Previous State`, `Reason`, dan `Time in State`.
- Untuk **Behavior Tree**, perhatikan `Running Node`, hasil sequence, dan alasan kegagalan.
- Untuk **Utility**, perhatikan skor setiap aksi dan aksi yang terpilih.
- Debug state membantu membedakan perilaku yang salah karena state, node, atau penilaian skor.

### Transisi ke Slide Berikutnya

Setelah memahami informasi apa yang perlu dibaca dari debug state, langkah berikutnya adalah menampilkan kondisi tersebut secara visual di scene, sehingga hubungan antara state, target, dan lingkungan NPC lebih mudah diperiksa.

---

## Slide 037 - Debug Visual dengan Gizmos

### Narasi

Slide ini membahas cara membuat perilaku agent terlihat secara visual di editor. Dalam pengembangan game, banyak masalah bukan berasal dari logika keputusan, tetapi dari parameter spasial yang tidak sesuai: jarak pandang terlalu kecil, area serangan tidak mencakup target, atau waypoint berada di posisi yang salah. **Gizmos** membantu kita memeriksa hal tersebut langsung di scene view.

Gunakan gizmo untuk menampilkan elemen spasial penting:

- **vision radius**
- **field of view**
- **attack range**
- **path**
- **waypoint**
- **target**
- **cover point**
- **last known position**
- **spawn area**
- **tactical slot**

Contoh paling sederhana adalah menampilkan radius pandangan:

```csharp
void OnDrawGizmosSelected()
{
    Gizmos.DrawWireSphere(transform.position, viewRadius);
}
```

Metode `OnDrawGizmosSelected()` dipanggil oleh editor ketika GameObject dipilih. `Gizmos.DrawWireSphere(transform.position, viewRadius);` menggambar bola kawat di posisi agent dengan radius `viewRadius`. Hasilnya, kita dapat melihat batas pandangan agent secara langsung.

Jika `viewRadius` terlalu kecil, target mungkin tidak pernah masuk area deteksi. Jika terlalu besar, agent bisa terlihat terlalu cepat bereaksi atau tidak realistis. Dengan visual ini, mahasiswa dapat menilai apakah parameter spasial sudah sesuai desain sebelum masuk ke logika yang lebih kompleks.

Untuk elemen lain, pola yang sama dapat diterapkan: garis untuk path, titik atau sphere kecil untuk waypoint, ray atau panah untuk target, area untuk spawn, dan marker untuk cover point. Tujuan utamanya bukan membuat visual indah, tetapi mempercepat diagnosa: apakah agent melihat, bergerak, menyerang, atau mengambil posisi sesuai yang diharapkan.

Sebelum lanjut ke debug area navigasi dan path, mahasiswa perlu memahami bahwa visual debug adalah lapisan pemeriksaan pertama. Jika parameter spasial sudah benar, barulah masalah pergerakan dan keputusan dapat dianalisis lebih fokus.

### Inti yang Harus Ditekankan

- **Gizmos** membuat parameter spasial agent terlihat langsung di editor, seperti `vision radius`, `attack range`, `path`, `waypoint`, `target`, `cover point`, `last known position`, `spawn area`, dan `tactical slot`.
- `OnDrawGizmosSelected()` hanya menggambar saat GameObject dipilih, sehingga scene tidak penuh objek debug yang tidak perlu.
- Visual debug membantu memisahkan masalah parameter spasial dari masalah logika keputusan atau pergerakan.

### Transisi ke Slide Berikutnya

Setelah parameter spasial dapat dilihat, langkah berikutnya adalah memeriksa apakah agent benar-benar berada di area navigasi yang valid dan path yang dihasilkan sesuai harapan. Hal itu akan dibahas pada slide berikutnya.

---

## Slide 038 - Debug NavMesh dan Path

### Narasi

Setelah slide sebelumnya membahas **Gizmos** secara umum, slide ini memfokuskan pada bagian yang paling sering bermasalah saat NPC bergerak, yaitu **NavMesh** dan **path**. Intuisi praktisnya, jika agent tidak bergerak, berhenti di tengah jalan, atau berhenti di posisi yang aneh, jangan langsung menyalahkan logika perilaku. Cek dulu apakah data navigasi dan parameter gerak sudah benar.

Hal pertama yang perlu dicek adalah apakah **agent** berada di atas **NavMesh** yang valid. `NavMesh` adalah permukaan yang bisa dilalui agent. Jika posisi agent tidak berada di atas NavMesh, agent tidak punya dasar untuk menghitung rute. Kondisi ini sering muncul setelah spawn, teleport, atau perubahan scene.

Selanjutnya, cek apakah **destination** valid. Destination harus berada di area yang bisa dijangkau dan tidak berada di posisi yang tidak valid. Jika destination tidak valid, path tidak akan terbentuk dengan benar. Mahasiswa perlu memahami bahwa masalah path sering bukan karena agent tidak mau bergerak, tetapi karena target tidak dapat dicapai.

Setelah itu, cek apakah **path** sudah **complete**. Status path memberi tahu apakah rute sedang dihitung, sudah lengkap, atau tidak lengkap. Path complete berarti agent punya rute penuh menuju tujuan. Path incomplete biasanya menandakan ada masalah pada NavMesh, obstacle, atau destination.

Obstacle juga perlu diperiksa. Jika ada objek yang memblokir jalur, agent bisa berhenti atau mencari rute lain. Namun, jika obstacle tidak terdeteksi dengan benar, agent bisa menabrak atau terjebak. Visualisasi **path corner** membantu melihat titik belok yang sebenarnya digunakan agent.

Parameter fisik agent juga menentukan perilaku. `radius` yang terlalu besar membuat agent dianggap lebih lebar dari jalur, sehingga path bisa dianggap tidak valid. `stoppingDistance` yang salah membuat agent berhenti terlalu jauh atau terlalu dekat dari tujuan. `velocity` agent membantu melihat apakah agent benar-benar bergerak atau hanya diam karena status path belum siap.

Untuk debug, tampilkan:

- **path corner**,
- **destination**,
- **status path**,
- **velocity agent**.

Dengan informasi ini, mahasiswa bisa membedakan masalah navigasi dari masalah perilaku. Jika path sudah benar tetapi agent tidak bertindak, masalah ada di logika perilaku. Jika path tidak benar, masalah ada pada NavMesh, target, atau parameter agent.

### Inti yang Harus Ditekankan

- Cek apakah agent berada di atas **NavMesh**, destination valid, path complete, obstacle tidak memblokir, `radius` wajar, dan `stoppingDistance` benar.
- Gunakan debug visual untuk menampilkan **path corner**, **destination**, **status path**, dan `velocity`.
- Pahami perbedaan masalah navigasi dan masalah perilaku sebelum memperluas debug ke sistem lain.

### Transisi ke Slide Berikutnya

Dengan dasar debug **NavMesh** dan **path** ini, kita lanjut ke slide berikutnya untuk membahas cara debug **PCG**, yaitu memastikan hasil generasi konten dapat diperiksa, direproduksi, dan divalidasi.

---

## Slide 039 - Debug PCG

### Narasi

Slide ini melanjutkan pembahasan debug dari **NavMesh** ke **PCG**. Jika debug NavMesh berfokus pada agent, destination, dan path, maka debug PCG berfokus pada konten yang dihasilkan secara prosedural sebelum agent mulai bergerak.

Dalam PCG, masalah sering muncul bukan hanya karena agent tidak bisa bergerak, tetapi karena level atau spawn yang dihasilkan tidak valid. Karena itu, kita perlu menampilkan informasi yang cukup untuk melacak proses generation.

Informasi debug yang penting antara lain:

- `seed`, karena nilai ini menentukan hasil generation yang deterministik.
- `parameter generation`, seperti ukuran map, jumlah room, atau aturan spawn.
- `jumlah room`, untuk memastikan layout tidak kosong atau tidak melebihi batas.
- `path start-goal`, untuk memastikan jalur dari titik awal ke tujuan benar-benar dapat dilalui.
- `posisi enemy`, agar spawn tidak berada di lokasi tidak valid atau menutupi jalur.
- `posisi item`, agar item tidak berada di luar area yang dapat diakses.
- `failed attempts`, untuk melihat apakah generator melakukan retry karena hasil sebelumnya gagal validasi.
- `validation result`, sebagai keputusan akhir apakah konten boleh digunakan atau harus diulang.

Contoh debug info yang dapat ditampilkan adalah:

```text
Seed: 12488
Room Count: 8
Valid Path: True
Enemy Spawned: 12
Generation Attempts: 3
```

Pada contoh ini, `Seed: 12488` memberi tahu kita hasil mana yang sedang diperiksa. `Room Count: 8` menunjukkan jumlah room yang berhasil dibuat. `Valid Path: True` menandakan jalur dari start ke goal dianggap valid. `Enemy Spawned: 12` memberi tahu jumlah enemy yang ditempatkan. `Generation Attempts: 3` menunjukkan generator mencoba tiga kali sebelum menghasilkan konten yang lolos validasi.

Intuisi praktisnya adalah: jika sebuah bug hanya muncul pada satu level, kita tidak bisa hanya melihat scene akhir. Kita perlu tahu apakah bug berasal dari `seed`, `parameter generation`, proses generation, validasi path, atau penempatan entity. Dengan `seed` yang sama dan parameter yang sama, hasil generation seharusnya dapat direproduksi.

Hal yang harus dipahami mahasiswa sebelum lanjut adalah bahwa debug PCG bukan hanya menampilkan angka, tetapi membangun jejak keputusan generator. Setiap nilai membantu menjawab pertanyaan: apakah konten dihasilkan? apakah konten valid? apakah entity ditempatkan di posisi yang benar? dan apakah jalur yang dibutuhkan agent tersedia?

### Inti yang Harus Ditekankan

- `seed` penting untuk reproduksi bug karena generation yang deterministik harus menghasilkan output yang sama dengan kondisi yang sama.
- Debug PCG perlu menampilkan `parameter generation`, `jumlah room`, `path start-goal`, `posisi enemy`, `posisi item`, `failed attempts`, dan `validation result`.
- `validation result` menjadi penentu apakah hasil generation boleh digunakan, ditolak, atau diulang.
- Informasi debug membantu membedakan masalah pada generation, validasi, pathfinding, atau penempatan entity.

### Transisi ke Slide Berikutnya

Setelah memahami cara melacak hasil generation, pembahasan berikutnya akan masuk ke debug DDA dan player modeling, yaitu nilai numerik yang menjelaskan keputusan adaptif sistem game.

---

## Slide 040 - Debug DDA dan Player Modeling

### Narasi

**Debug DDA** dan **Player Modeling** penting karena sistem adaptif tidak cukup hanya “berjalan”. Mahasiswa perlu melihat **mengapa** game mengubah tantangan atau menyesuaikan perilaku NPC. Nilai numerik menjadi bukti bahwa keputusan adaptif berasal dari data, bukan tebakan.

Untuk **DDA**, tampilkan nilai seperti berikut:

```text
Skill Score
Difficulty Multiplier
Adjustment Direction
Evaluation Timer
Enemy Parameter
```

Makna tiap nilai:

- `Skill Score` adalah estimasi kemampuan pemain, misalnya dari kematian, waktu menyelesaikan tahap, atau tingkat kesulitan yang berhasil dilewati.
- `Difficulty Multiplier` adalah faktor pengali yang diterapkan ke parameter musuh, seperti `health`, `damage`, atau `speed`.
- `Adjustment Direction` menunjukkan arah penyesuaian, misalnya naik, turun, atau tetap.
- `Evaluation Timer` menandai interval evaluasi, sehingga mahasiswa dapat memahami kapan sistem mengambil keputusan.
- `Enemy Parameter` adalah hasil akhir yang diterapkan ke NPC, sehingga perubahan DDA terlihat langsung di gameplay.

Alur yang perlu dipahami:

1. Sistem mengumpulkan data performa pemain.
2. `Skill Score` diperbarui berdasarkan data tersebut.
3. Sistem menentukan `Adjustment Direction`.
4. `Difficulty Multiplier` disesuaikan.
5. `Enemy Parameter` diperbarui untuk NPC berikutnya atau NPC aktif.

Dengan alur ini, mahasiswa dapat menjelaskan bahwa DDA bukan sekadar membuat musuh lebih kuat atau lebih lemah, tetapi mengubah parameter berdasarkan estimasi kemampuan pemain.

Untuk **Player Modeling**, tampilkan nilai seperti berikut:

```text
Aggressive Score
Explorer Score
Defensive Score
Dominant Style
Confidence
Current Adaptation
```

Makna tiap nilai:

- `Aggressive Score` mengukur kecenderungan pemain menyerang lebih dulu atau mengambil risiko.
- `Explorer Score` mengukur kecenderungan pemain menjelajah area, membuka jalur, atau mencari item.
- `Defensive Score` mengukur kecenderungan pemain bertahan, menghindari risiko, atau menunggu momen aman.
- `Dominant Style` adalah label utama yang dihasilkan dari perbandingan ketiga skor tersebut.
- `Confidence` menunjukkan seberapa kuat sistem mempercayai label gaya pemain saat ini.
- `Current Adaptation` menjelaskan penyesuaian yang sedang dilakukan, misalnya NPC lebih agresif, jalur lebih terbuka, atau tantangan defensif lebih sering muncul.

Alur player modeling juga perlu dipahami:

1. Sistem mengamati aksi pemain.
2. Skor perilaku diperbarui.
3. Sistem menentukan `Dominant Style`.
4. `Confidence` dihitung berdasarkan konsistensi perilaku.
5. `Current Adaptation` dipilih untuk menyesuaikan pengalaman pemain.

Debug nilai numerik membantu menjelaskan keputusan adaptif karena mahasiswa dapat membandingkan **input perilaku**, **perubahan skor**, dan **output penyesuaian**. Dalam praktik, nilai ini dapat dicatat ke konsol, ditampilkan di inspector, atau disimpan sebagai log untuk analisis setelah sesi permainan.

Hal yang harus dipahami sebelum lanjut adalah bahwa **DDA** dan **Player Modeling** memiliki fokus berbeda. DDA lebih menekankan penyesuaian tingkat kesulitan, sedangkan player modeling lebih menekankan pemahaman gaya bermain. Keduanya tetap membutuhkan state yang dapat diukur, aturan evaluasi yang jelas, dan nilai debug yang dapat ditelusuri.

### Inti yang Harus Ditekankan

- **DDA** mengubah tantangan berdasarkan `Skill Score`, `Difficulty Multiplier`, dan `Enemy Parameter`.
- **Player Modeling** mengidentifikasi gaya bermain melalui `Aggressive Score`, `Explorer Score`, `Defensive Score`, dan `Dominant Style`.
- Nilai numerik penting untuk menjelaskan **mengapa** sistem adaptif mengambil keputusan tertentu.
- `Confidence` dan `Current Adaptation` membantu memahami keandalan model dan tindakan yang sedang dilakukan.
- Debug yang baik memungkinkan mahasiswa menelusuri hubungan antara perilaku pemain, perubahan skor, dan penyesuaian gameplay.

### Transisi ke Slide Berikutnya

Setelah memahami debug sistem adaptif berbasis aturan dan model perilaku, pembahasan dilanjutkan ke debug sistem belajar, di mana perilaku tidak selalu dapat dijelaskan hanya dari satu aturan, sehingga statistik dan nilai observasi menjadi sangat penting.

---

## Slide 041 - Debug ML-Agents

### Narasi

Pada slide ini kita membahas cara men-debug agent yang menggunakan **ML-Agents**. Fokusnya bukan hanya melihat apakah agent bergerak, tetapi memahami mengapa agent memilih tindakan tertentu. Dalam konteks game, agent ini bisa menjadi NPC, musuh, atau karakter yang belajar dari lingkungan.

Intuisi praktisnya sederhana: jika perilaku agent tampak aneh, jangan langsung menyimpulkan bahwa modelnya buruk. Periksa dulu apakah **observasi** yang masuk sudah benar, apakah **reward** muncul pada momen yang tepat, dan apakah **action** yang dipilih masih masuk akal. Banyak masalah muncul karena input kosong, target hilang, atau reward tidak pernah terpicu.

Saat proses **training**, metrik yang perlu diperhatikan antara lain:

- `cumulative reward`: total reward yang diterima agent dalam satu episode, berguna untuk melihat tren pembelajaran.
- `episode count`: jumlah episode yang sudah berjalan, membantu menilai apakah perbaikan konsisten.
- `success rate`: proporsi episode yang berhasil mencapai tujuan.
- `fail count`: jumlah episode yang gagal, penting untuk melihat pola kegagalan.
- `observation values`: nilai input yang diterima agent, seperti jarak, posisi, atau status lingkungan.
- `action values`: nilai keputusan atau tindakan yang dihasilkan agent.
- `last reward`: reward terakhir yang diterima, membantu memahami pemicu keputusan.
- `episode length`: durasi episode, berguna untuk mendeteksi agent yang terlalu cepat menyerah atau terjebak.

Saat proses **inference**, yaitu ketika model sudah digunakan di runtime game, informasi yang perlu ditampilkan sedikit berbeda. Yang penting adalah:

- model aktif yang sedang dipakai,
- `behavior type` atau jenis perilaku yang sedang dijalankan,
- `target` yang sedang dikejar atau dipengaruhi,
- `reward event` yang baru saja terjadi.

Dengan informasi ini, kita bisa memastikan bahwa agent tidak hanya bergerak, tetapi juga menggunakan model yang benar dan menargetkan objek yang benar.

Perilaku model pembelajaran sulit dijelaskan langkah demi langkah seperti pada **FSM** atau **behavior tree**. Karena itu, debug statistik menjadi sangat penting. Statistik membantu kita menemukan masalah seperti observasi yang tidak berubah, reward yang tidak pernah terjadi, action yang tidak valid, atau episode yang berakhir terlalu cepat.

Sebelum lanjut, mahasiswa perlu memahami bahwa debug ML-Agents bukan hanya melihat angka akhir. Yang lebih penting adalah hubungan antara **observasi**, **reward**, dan **action** dalam satu episode. Jika hubungan ini sudah jelas, barulah kita bisa menilai apakah model belajar dengan baik atau masih ada masalah pada lingkungan game.

### Inti yang Harus Ditekankan

- Debug **ML-Agents** harus dilakukan dengan melihat metrik episode, observasi, reward, dan action, bukan hanya hasil visual.
- `observation values` dan `action values` membantu memastikan bahwa agent menerima input yang benar dan menghasilkan keputusan yang masuk akal.
- Saat inference, tampilkan model aktif, `behavior type`, `target`, dan `reward event` agar perilaku agent dapat ditelusuri.
- Statistik sangat penting karena perilaku model sulit dijelaskan secara langsung seperti pada sistem aturan biasa.

### Transisi ke Slide Berikutnya

Setelah metrik dan sinyal debug ini dipahami, langkah berikutnya adalah mencatat peristiwa penting ke dalam log, sehingga keputusan agent bisa ditelusuri tanpa membanjiri setiap frame.

---

## Slide 042 - Logging

### Narasi

Dalam pengembangan game cerdas, **logging** adalah cara mencatat kejadian penting selama permainan berjalan. Visualisasi membantu melihat perilaku secara langsung, tetapi log memberi jejak yang bisa dibaca, disimpan, dan diperiksa kembali.

Contoh log yang sederhana:

```text
[Enemy01] State changed: Patrol → Chase
Reason: Player detected

[Director] Spawn wave: intensity low
[PCG] Generated level seed 7821 valid true
[DDA] Difficulty 1.00 → 1.05
```

Baris pertama menunjukkan perubahan state NPC dari `Patrol` ke `Chase` karena `Player detected`. Ini sangat berguna untuk memahami keputusan perilaku, terutama jika NPC menggunakan state machine, behavior tree, atau sistem prioritas.

Baris berikutnya menunjukkan keputusan sistem lain: `Director` memicu gelombang dengan `intensity low`, `PCG` menghasilkan `seed 7821` dengan `valid true`, dan `DDA` menaikkan difficulty dari `1.00` menjadi `1.05`. Dengan log seperti ini, mahasiswa dapat melacak apakah perubahan perilaku, level, atau kesulitan terjadi pada waktu yang tepat.

Logging juga membantu saat presentasi. Dosen tidak hanya melihat demo, tetapi juga bukti bahwa sistem benar-benar mengambil keputusan. Saat troubleshooting, log membantu menemukan masalah seperti state yang tidak berubah, spawn yang gagal, seed tidak valid, atau difficulty yang tidak menyesuaikan.

Namun, log tidak boleh berlebihan. Jika setiap frame dicatat, performa bisa menurun dan informasi penting tenggelam. Sebaiknya log hanya event penting, misalnya perubahan state, spawn, validasi level, perubahan difficulty, atau error.

### Inti yang Harus Ditekankan

- **Logging** adalah bukti tertulis dari keputusan dan kejadian penting dalam game.
- Log yang baik membantu presentasi, debugging, dan evaluasi perilaku NPC atau sistem game.
- Hindari log berlebihan setiap frame; pilih event yang benar-benar penting agar performa tetap stabil.

### Transisi ke Slide Berikutnya

Setelah logging, langkah berikutnya adalah menyiapkan mode debug yang lebih interaktif, sehingga perilaku sistem cerdas dapat diamati secara langsung saat game berjalan.

---

## Slide 043 - AI Debug Mode

### Narasi

Pada tahap final project, mahasiswa sebaiknya menyediakan **AI Debug Mode** agar perilaku NPC tidak hanya terlihat dari hasilnya, tetapi juga dapat diperiksa dari alasan di baliknya. Mode ini membantu dosen dan mahasiswa melihat apa yang sedang diproses oleh sistem game saat NPC bergerak, mengejar, menghindari, atau memilih tindakan.

Contoh kontrol sederhana yang dapat digunakan:

```text
F1 = Toggle AI Debug
```

Tombol `F1` berfungsi sebagai saklar untuk menampilkan atau menyembunyikan informasi debug. Dengan cara ini, mahasiswa dapat membandingkan tampilan normal dan tampilan diagnostik tanpa mengubah alur permainan secara permanen.

Saat mode debug aktif, informasi yang ditampilkan sebaiknya bersifat visual dan ringkas. Beberapa elemen penting yang dapat ditampilkan antara lain:

- `state` NPC, misalnya `Patrol`, `Chase`, `Attack`, atau `Idle`
- `target` yang sedang diprioritaskan oleh NPC
- `path` hasil pathfinding yang sedang diikuti
- `FOV` atau area deteksi NPC
- `utility score` untuk menilai pilihan tindakan
- `difficulty` yang sedang diterapkan pada sistem permainan
- `seed` yang digunakan untuk variasi level, spawn, atau perilaku

Dengan menampilkan elemen-elemen tersebut, mahasiswa dapat menjelaskan hubungan antara input lingkungan, proses pengambilan keputusan, dan output perilaku NPC. Misalnya, jika NPC terlihat mengejar pemain, debug mode dapat menunjukkan bahwa `state` berubah menjadi `Chase` karena pemain masuk ke `FOV`, lalu `path` menuju `target` diperbarui. Jika NPC memilih tindakan tertentu, `utility score` dapat membantu menjelaskan mengapa tindakan itu lebih dipilih daripada tindakan lain.

**AI Debug Mode** juga membuat penilaian menjadi lebih objektif. Dosen tidak hanya menilai apakah NPC bergerak atau tidak, tetapi juga apakah perilaku tersebut masuk akal, konsisten, dan dapat dijelaskan. Hal ini penting karena sistem game yang baik tidak hanya berfungsi secara teknis, tetapi juga mendukung pengalaman bermain.

### Inti yang Harus Ditekankan

- **AI Debug Mode** sebaiknya tersedia pada final project sebagai alat observasi perilaku NPC.
- Tampilkan elemen penting secara visual: `state`, `target`, `path`, `FOV`, `utility score`, `difficulty`, dan `seed`.
- Mode ini membantu dosen menilai alasan perilaku, bukan hanya hasil akhir dari pergerakan atau keputusan NPC.

### Transisi ke Slide Berikutnya

Setelah mahasiswa dapat menampilkan alasan perilaku NPC melalui mode debug, langkah berikutnya adalah membahas bagaimana evaluasi dilakukan secara lebih menyeluruh, termasuk kualitas gameplay, stabilitas, dan pengalaman bermain.

---

## Slide 044 - Evaluasi Game AI

### Narasi

Pada tahap final project, pertanyaan paling sederhana adalah:

```text
Apakah AI berjalan?
```

Namun, jawaban “ya” belum cukup. Sistem yang hanya mampu bergerak, mengejar, atau berpindah `state` belum tentu menghasilkan pengalaman bermain yang baik. Mahasiswa perlu menilai apakah perilaku NPC benar-benar mendukung tujuan game, bukan sekadar berfungsi secara teknis.

Evaluasi yang lebih tepat dimulai dari pertanyaan yang lebih luas:

- Apakah perilaku NPC mendukung **gameplay**?
- Apakah keputusan NPC **masuk akal** bagi pemain?
- Apakah tingkat kesulitan terasa **menantang** tetapi tidak frustrasi?
- Apakah pemain dapat **memprediksi** pola tertentu tanpa membuat NPC terasa kaku?
- Apakah NPC tidak **curang**, misalnya selalu tahu posisi pemain atau menembus dinding?
- Apakah keputusan NPC **dapat dijelaskan** melalui data, log, atau visualisasi?
- Apakah perilaku NPC **stabil** dalam berbagai situasi, `seed`, dan kondisi runtime?

Pertanyaan ini penting karena sistem kecerdasan game tidak hanya dinilai dari sisi kode, tetapi juga dari pengalaman bermain. Dari sisi teknis, kita perlu melihat apakah `state`, `path`, `target`, `FOV`, `utility score`, `difficulty`, dan `seed` bekerja sesuai desain. Dari sisi pemain, kita perlu merasakan apakah NPC terasa hidup, adil, dan memberi tantangan yang bermakna.

Mode debug yang dibahas sebelumnya sangat membantu di sini. Dengan menampilkan `state`, `path`, `FOV`, `utility score`, dan parameter lain, dosen dan mahasiswa dapat menilai perilaku secara objektif. Tanpa visualisasi, penilaian sering hanya berdasarkan kesan: “NPC-nya aneh” atau “musuhnya terlalu kuat”. Dengan data, kita bisa melacak apakah masalah berasal dari pathfinding, decision making, steering, parameter difficulty, atau desain level.

Hal yang harus dipahami sebelum lanjut adalah bahwa evaluasi game AI bersifat **multidimensi**. Tidak cukup mengatakan sistem “berjalan” atau “tidak berjalan”. Mahasiswa perlu menyiapkan bukti: rekaman gameplay, log keputusan, parameter yang diuji, dan penjelasan mengapa perilaku tertentu dianggap baik atau buruk. Dengan cara ini, final project tidak hanya menjadi demo teknis, tetapi menjadi karya desain yang dapat dipertanggungjawabkan.

### Inti yang Harus Ditekankan

- Evaluasi game AI bukan hanya mengecek apakah NPC bergerak atau `state` berubah.
- Perilaku NPC harus dinilai dari **gameplay**, **tingkat tantangan**, **keadilan**, **prediktabilitas**, dan **stabilitas**.
- Penilaian perlu didukung bukti teknis, misalnya `state`, `path`, `FOV`, `utility score`, `difficulty`, dan `seed`.
- Mode debug membantu mengubah penilaian subjektif menjadi observasi yang lebih objektif.

### Transisi ke Slide Berikutnya

Selanjutnya, kita akan memecah pertanyaan evaluasi ini menjadi dimensi yang lebih terstruktur, agar mahasiswa memiliki kerangka yang jelas untuk menilai final project secara konsisten.

---

## Slide 045 - Dimensi Evaluasi Game AI

### Narasi

Setelah memahami bahwa evaluasi Game AI tidak berhenti pada pertanyaan apakah sistem berjalan, slide ini memperkenalkan **dimensi evaluasi** yang bisa digunakan sebagai kerangka penilaian. Dimensi-dimensi ini membantu mahasiswa melihat bahwa kualitas AI dalam game tidak hanya diukur dari keberhasilan eksekusi, tetapi juga dari dampaknya terhadap perilaku NPC, pengalaman pemain, dan stabilitas sistem.

```text
Correctness
Robustness
Believability
Challenge
Fairness
Responsiveness
Performance
Explainability
Player Experience
Integration
```

Dalam konteks Game AI, setiap dimensi memiliki fokus yang berbeda. **Correctness** berkaitan dengan apakah AI melakukan perilaku sesuai spesifikasi, misalnya NPC berpindah state, memilih path, atau menyerang pada kondisi yang tepat. **Robustness** menilai apakah sistem tetap stabil ketika input, lingkungan, atau kondisi game berubah. **Believability** menilai apakah perilaku NPC terasa masuk akal bagi pemain, bukan sekadar benar secara teknis.

Dimensi berikutnya juga penting untuk desain game. **Challenge** menilai apakah AI memberikan tingkat kesulitan yang sesuai. **Fairness** menilai apakah pemain dapat memahami pola AI dan tidak merasa diperlakukan tidak adil. **Responsiveness** menilai seberapa cepat dan tepat AI bereaksi terhadap aksi pemain atau perubahan lingkungan. **Performance** menilai efisiensi eksekusi, misalnya waktu update, penggunaan memori, dan dampak terhadap frame rate di Unity.

**Explainability** menilai apakah keputusan AI dapat dijelaskan, misalnya melalui log state, prioritas behavior tree, atau parameter steering. **Player Experience** menilai dampak keseluruhan terhadap rasa bermain, imersi, dan keterlibatan pemain. **Integration** menilai apakah AI menyatu dengan sistem lain seperti animasi, pathfinding, UI, audio, dan gameplay loop.

Penting untuk dipahami bahwa tidak semua proyek harus sempurna di semua dimensi. Yang lebih penting adalah mahasiswa mampu memilih dimensi yang relevan, memberikan bukti evaluasi, dan menjelaskan trade-off yang terjadi. Dengan kerangka ini, evaluasi Game AI menjadi lebih terstruktur sebelum masuk ke pembahasan dimensi yang lebih spesifik.

### Inti yang Harus Ditekankan

- **Dimensi evaluasi** adalah kerangka untuk menilai kualitas Game AI secara menyeluruh, bukan hanya apakah kode berjalan.
- Setiap dimensi memiliki fokus berbeda: **Correctness** untuk spesifikasi, **Robustness** untuk stabilitas, **Believability** untuk perilaku yang masuk akal, dan **Performance** untuk efisiensi eksekusi.
- Evaluasi yang baik harus jelas, terukur, dan mampu menjelaskan trade-off antar dimensi, terutama ketika AI digunakan dalam game yang kompleks.

### Transisi ke Slide Berikutnya

Selanjutnya kita akan membahas dimensi pertama, yaitu **Correctness**, yaitu bagaimana AI melakukan perilaku yang seharusnya sesuai spesifikasi sistem.

---

## Slide 046 - Correctness

### Narasi

Pada slide ini, kita membahas **Correctness** sebagai salah satu dimensi evaluasi sistem cerdas dalam game. Correctness bukan tentang membuat agent yang paling kompleks, tetapi memastikan bahwa agent **melakukan apa yang seharusnya** sesuai desain.

Intuisinya sederhana: jika pemain melihat perilaku NPC yang aneh, hal pertama yang perlu diperiksa adalah apakah perilaku itu memang sesuai aturan yang telah ditentukan. Misalnya, NPC yang seharusnya patroli tidak boleh menyerang dari jarak jauh, dan path yang dihasilkan tidak boleh memotong dinding.

Contoh perilaku yang dapat diperiksa pada slide ini adalah:

- NPC melakukan `patrol` sesuai urutan `waypoint`.
- NPC beralih ke `chase` hanya saat `player` terlihat.
- NPC melakukan `attack` hanya saat berada dalam `range` yang valid.
- `path` tidak melewati `wall` atau obstacle.
- `DDA` mengubah kesulitan sesuai performa pemain.
- `PCG` menghasilkan level yang valid dan dapat dimainkan.

```text
Apakah sistem memenuhi spesifikasi?
```

Pertanyaan ini menjadi inti evaluasi correctness. Spesifikasi dapat berupa kondisi masuk, aksi yang diizinkan, batasan jarak, aturan transisi `state`, atau validitas output. Dalam implementasi, mahasiswa perlu memeriksa apakah setiap `state`, `action`, dan `condition` bekerja sesuai desain, bukan hanya apakah sistem berjalan tanpa error.

Correctness penting karena menjadi dasar sebelum menilai dimensi lain. Jika perilaku dasar belum benar, maka evaluasi seperti robustness, believability, atau challenge belum dapat dilakukan secara adil. Mahasiswa perlu memahami bahwa correctness adalah bentuk verifikasi: membandingkan perilaku sistem dengan spesifikasi yang telah didefinisikan.

### Inti yang Harus Ditekankan

- **Correctness** berarti sistem melakukan perilaku yang sesuai spesifikasi.
- Evaluasi correctness berfokus pada kesesuaian `state`, `action`, `condition`, dan output.
- Contoh perilaku yang benar mencakup `patrol`, `chase`, `attack` dalam `range`, `path` valid, `DDA` sesuai performa, dan `PCG` menghasilkan level valid.
- Correctness adalah dasar sebelum menilai dimensi evaluasi lain.

### Transisi ke Slide Berikutnya

Setelah memastikan sistem melakukan apa yang seharusnya, langkah berikutnya adalah memeriksa apakah sistem tetap berjalan dengan baik ketika kondisi berubah. Pada slide berikutnya, kita akan membahas **Robustness**, yaitu kemampuan sistem untuk tetap stabil pada berbagai situasi.

---

## Slide 047 - Robustness

### Narasi

**Robustness** adalah kemampuan sistem AI game untuk tetap berjalan aman ketika kondisi dunia berubah atau input yang diharapkan tidak tersedia. Berbeda dengan **correctness**, yang menekankan apakah AI melakukan tindakan sesuai spesifikasi, robustness menekankan apakah AI tidak berhenti, error, atau berperilaku tidak terkendali ketika situasi menjadi tidak ideal.

Dalam game, kondisi tidak ideal sering muncul. Beberapa contoh penting adalah:

- **target hilang**, misalnya referensi `player` atau `enemy` sudah tidak aktif.
- **player mati**, sehingga tujuan `chase` atau `attack` tidak lagi valid.
- **path tidak ditemukan**, misalnya `NavMesh` terhalang atau target berada di area yang tidak bisa dijangkau.
- **cover penuh**, sehingga AI tidak bisa memilih posisi perlindungan.
- **seed PCG berbeda**, sehingga layout level berubah dari satu run ke run lain.
- **banyak enemy aktif**, sehingga beban keputusan dan steering meningkat.
- **difficulty berubah**, sehingga parameter perilaku perlu menyesuaikan.

AI yang robust biasanya memiliki **fallback**. Fallback adalah perilaku cadangan yang dijalankan ketika pilihan utama tidak bisa dieksekusi. Pada slide ini, contohnya adalah:

```text
Jika cover tidak ditemukan:
    gunakan fallback Chase atau Retreat.
```

Artinya, ketika AI ingin mencari cover tetapi tidak ada cover yang valid, sistem tidak boleh berhenti. AI dapat kembali ke perilaku yang lebih umum, misalnya `Chase` untuk tetap mendekati target, atau `Retreat` untuk menjaga jarak jika kondisi berbahaya. Pola ini penting karena perilaku game harus tetap stabil meskipun lingkungan berubah.

Secara implementasi, fallback dapat muncul di beberapa lapisan AI. Pada **finite state machine**, state `SearchCover` dapat memiliki transisi ke `Chase` atau `Retreat` jika kondisi gagal. Pada **behavior tree**, node `FindCover` dapat gagal dan memicu node cadangan. Pada **pathfinding**, jika `FindPath` tidak menghasilkan rute, AI dapat memilih target waypoint terdekat, menunggu, atau kembali ke posisi aman. Pada **steering**, jika target tidak valid, agent dapat berhenti, kembali ke posisi terakhir, atau menggunakan perilaku `idle`.

Hal yang harus dipahami mahasiswa adalah bahwa robustness bukan hanya soal “tidak error”. Robustness juga berarti AI tetap masuk akal secara operasional. Jika target hilang, AI sebaiknya tidak terus mengejar objek kosong. Jika path tidak ditemukan, AI sebaiknya tidak terjebak di satu titik. Jika banyak enemy aktif, sistem harus tetap bisa mengambil keputusan tanpa membuat game melambat atau berperilaku kacau.

Sebelum lanjut, mahasiswa perlu memastikan bahwa setiap perilaku utama memiliki kondisi gagal dan perilaku cadangan. Pertanyaan desainnya sederhana: apa yang dilakukan AI ketika input utama tidak tersedia, lingkungan berubah, atau pilihan terbaik tidak ada?

### Inti yang Harus Ditekankan

- **Robustness** berarti AI tetap berjalan pada berbagai kondisi, bukan hanya kondisi ideal.
- AI yang robust membutuhkan **fallback** ketika perilaku utama gagal, misalnya dari `FindCover` ke `Chase` atau `Retreat`.
- Fallback dapat diterapkan pada state machine, behavior tree, pathfinding, steering, atau parameter difficulty.
- Robustness menjaga AI tetap stabil, tidak error, dan tetap dapat dimainkan meskipun target, path, cover, atau lingkungan berubah.

### Transisi ke Slide Berikutnya

Setelah AI dipastikan tetap berjalan pada banyak kondisi, langkah berikutnya adalah memastikan perilakunya terasa wajar bagi player. Di slide berikutnya, kita akan membahas **believability**, yaitu bagaimana AI terlihat masuk akal meskipun tidak selalu optimal.

---

## Slide 048 - Believability

### Narasi

**Believability** adalah kualitas perilaku yang membuat pemain merasa agen di dalam game bertindak masuk akal. Fokusnya bukan pada apakah agen selalu menemukan solusi terbaik, tetapi apakah tindakannya terasa wajar dilihat dari informasi yang dimilikinya. Dalam konteks game, ini penting karena pemain menilai kualitas pengalaman dari rasa "hidup" yang ditunjukkan oleh **NPC**, **enemy**, atau **guard**.

Intuisi praktisnya sederhana: pemain tidak menuntut agen selalu sempurna, tetapi mereka cepat menyadari jika agen melakukan hal yang mustahil. Contoh paling umum adalah **perception** yang tidak realistis. Jika musuh dapat melihat pemain menembus tembok, pemain akan merasa ada bug, bukan tantangan. Sebaliknya, jika musuh hanya melihat dalam jangkauan tertentu dan terhalang oleh dinding, perilakunya terasa lebih kredibel.

Salah satu cara membangun believability adalah dengan memberi agen **memory** sederhana. Misalnya, ketika pemain menghilang dari pandangan, agen tidak langsung berhenti atau lupa. Ia bisa bergerak ke `lastKnownPosition` dan melakukan `search` di sekitar area tersebut. Pola ini membuat agen terasa seperti benar-benar mencari, bukan sekadar mengikuti skrip yang mati. Dalam implementasi, ini sering didukung oleh **state** seperti `Chase`, `Search`, dan `Lose`, atau oleh **behavior tree** yang memilih aksi berdasarkan hasil `perception`.

Hal lain yang perlu diperhatikan adalah **spatial behavior**. Agen tidak boleh menyerang dari jarak yang tidak masuk akal, dan anggota squad tidak boleh menumpuk di satu titik. Untuk itu, perilaku seperti `attackRange`, `avoidance`, dan `separation` membantu menjaga jarak antar agen tetap wajar. Dalam **steering behavior**, `separation` mencegah agen saling menutupi, sehingga formasi squad terlihat lebih natural dan tidak seperti objek yang menempel.

Poin penting yang harus dipahami mahasiswa adalah: **believability tidak sama dengan optimalitas**. Agen yang terlalu sempurna, misalnya selalu tahu posisi pemain, selalu memilih rute tercepat, dan tidak pernah melakukan kesalahan, justru bisa terasa tidak natural. Dalam desain game, sedikit keterbatasan informasi, jeda reaksi, atau prioritas yang masuk akal sering membuat pengalaman bermain lebih meyakinkan.

Sebelum lanjut, mahasiswa perlu membedakan antara **robustness** dan **believability**. Robustness memastikan sistem tetap berjalan ketika kondisi berubah, sedangkan believability memastikan perilaku yang dihasilkan terasa masuk akal bagi pemain. Keduanya saling melengkapi: sistem yang robust tetapi tidak believable akan terasa aneh, dan sistem yang believable tetapi tidak robust akan mudah rusak saat kondisi game berubah.

### Inti yang Harus Ditekankan

- **Believability** adalah rasa masuk akal dari perilaku agen, bukan jaminan bahwa agen selalu optimal.
- Pemain lebih mudah menerima agen yang terbatas informasi, memiliki `memory`, dan bergerak wajar daripada agen yang terlalu sempurna.
- Komponen seperti `perception`, `lastKnownPosition`, `search`, `attackRange`, dan `separation` membantu perilaku NPC terasa kredibel.
- Believability berbeda dari robustness: yang pertama fokus pada kesan natural, yang kedua fokus pada ketahanan sistem.

### Transisi ke Slide Berikutnya

Setelah perilaku agen terasa masuk akal, langkah berikutnya adalah memastikan perilaku tersebut juga memberikan tantangan yang tepat bagi pemain.

---

## Slide 049 - Challenge

### Narasi

Setelah membahas **believability**, kita masuk ke tujuan desain AI yang lain: **Challenge**.

**Challenge** berarti AI memberi tekanan yang cukup agar player merasa teruji, tetapi tidak sampai membuat permainan terasa tidak adil atau tidak menyenangkan.

Intuisi praktisnya sederhana:

- Jika AI terlalu lemah, player cepat selesai tanpa rasa pencapaian.
- Jika AI terlalu kuat, player gagal berulang kali dan kehilangan motivasi.

Kondisi terlalu mudah biasanya menghasilkan:

```text
player bosan
```

Sementara kondisi terlalu sulit biasanya menghasilkan:

```text
player frustrasi
```

Dalam game AI, challenge tidak hanya ditentukan oleh kekuatan musuh, tetapi juga oleh perilaku AI yang bisa dibaca dan direspons oleh player. Misalnya, kecepatan enemy, jarak serangan, pola pergerakan, penggunaan resource, dan seberapa sering AI memberi kesempatan player untuk counterplay.

Evaluasi challenge biasanya dilakukan dengan mengamati data gameplay. Beberapa pertanyaan penting yang perlu dijawab adalah:

- Berapa kali player kalah dalam satu fase atau level?
- Apakah enemy terlalu lambat sehingga player tidak merasa terancam?
- Apakah damage terlalu besar sehingga player tidak punya ruang untuk memperbaiki kesalahan?
- Apakah resource yang tersedia cukup untuk player bertahan atau menyerang?
- Apakah **DDA** bekerja dengan baik untuk menyesuaikan tingkat kesulitan?

**DDA** atau *dynamic difficulty adjustment* adalah mekanisme yang dapat mengubah parameter AI secara dinamis, misalnya kecepatan enemy, akurasi, jumlah resource, atau tingkat agresivitas, berdasarkan performa player.

Yang perlu dipahami mahasiswa adalah challenge bukan berarti membuat AI sekuat mungkin. AI yang terlalu sempurna sering kali membuat player merasa tidak punya kesempatan. Sebaliknya, challenge yang baik memberi sinyal yang jelas, memberi tekanan bertahap, dan memungkinkan player belajar dari kegagalan.

Sebelum lanjut, mahasiswa perlu memastikan bahwa parameter AI sudah bisa diukur dan diuji, bukan hanya dinilai secara subjektif.

### Inti yang Harus Ditekankan

- **Challenge** adalah keseimbangan antara tekanan dan kemampuan player.
- Terlalu mudah membuat player bosan, terlalu sulit membuat player frustrasi.
- Evaluasi challenge perlu memakai indikator gameplay seperti jumlah kekalahan, kecepatan enemy, damage, resource, dan efektivitas **DDA**.
- AI harus memberi tantangan yang bisa dibaca dan direspons, bukan sekadar kuat.

### Transisi ke Slide Berikutnya

Setelah challenge diatur, langkah berikutnya adalah memastikan tantangan itu terasa **fair**, karena AI boleh kuat tetapi harus memberi sinyal dan peluang counterplay bagi player.

---

## Slide 050 - Fairness

### Narasi

**Fairness** adalah kualitas pengalaman ketika pemain merasa lawan berperilaku adil. Konsep ini berbeda dari **challenge**. Challenge mengatur seberapa berat tekanan yang diberikan, sedangkan fairness mengatur apakah pemain memiliki informasi, waktu, dan kesempatan untuk merespons.

Dalam praktik, fairness sering gagal karena sistem lawan terlalu "mengetahui" atau terlalu cepat. Beberapa contoh yang perlu dihindari:

- `enemy` muncul tepat di belakang pemain tanpa peringatan.
- `enemy` dapat melihat atau menembak melewati dinding.
- `attack` tidak memiliki `cooldown`, sehingga pemain tidak sempat menghindar.
- tingkat kesulitan naik tiba-tiba tanpa sinyal visual atau audio.
- pemain tidak diberi `reactionWindow` yang cukup untuk melakukan counterplay.

Intuisi pentingnya: lawan boleh kuat, tetapi harus **terbaca**. Jika sebuah serangan memiliki `telegraph`, posisi spawn masuk akal, dan jeda antar aksi wajar, pemain dapat belajar pola dan mencari celah. Di sisi implementasi, fairness biasanya dijaga melalui batasan pada `lineOfSight`, `spawnPosition`, `cooldown`, `pathfinding`, dan `steering`.

Untuk perilaku NPC, state seperti `Spawn`, `Telegraph`, `Attack`, dan `Recover` sebaiknya tidak melompati aturan dasar. Misalnya, `enemy` tidak boleh berpindah ke posisi yang tidak dapat dicapai melalui jalur yang valid, dan tidak boleh menyerang jika `lineOfSight` terhalang. Dalam struktur seperti `FSM` atau `BehaviorTree`, setiap transisi state perlu dicek agar tidak menghasilkan aksi yang mustahil bagi pemain untuk diantisipasi.

Hal yang harus dipahami mahasiswa sebelum lanjut adalah bahwa fairness bukan hanya soal angka balance. Ia adalah **perceived fairness**: bagaimana pemain merasakan keadilan dari perilaku lawan. Sistem yang secara statistik seimbang tetap bisa terasa tidak adil jika pemain tidak diberi sinyal, pilihan, atau waktu untuk bereaksi.

### Inti yang Harus Ditekankan

- **Fairness** berbeda dari **challenge**: fairness menjaga pemain tetap punya peluang counterplay.
- Lawan boleh kuat, tetapi harus memberikan `telegraph`, `cooldown`, dan `reactionWindow`.
- Batasan `lineOfSight`, `spawnPosition`, `pathfinding`, dan `steering` adalah cara teknis menjaga perilaku lawan tetap adil.
- Dalam `FSM` atau `BehaviorTree`, transisi state harus dicek agar tidak menghasilkan aksi yang mustahil diantisipasi pemain.

### Transisi ke Slide Berikutnya

Setelah memastikan lawan terasa adil, langkah berikutnya adalah melihat bagaimana sistem menyesuaikan perilakunya ketika kondisi permainan berubah. Di situlah **responsiveness** menjadi penting, terutama agar perubahan perilaku tidak terjadi terlalu cepat atau terlalu sering.

---

## Slide 051 - Responsiveness

### Narasi

**Responsiveness** adalah kemampuan sistem perilaku dalam game untuk memberi reaksi yang **tepat waktu** terhadap perubahan kondisi. Bukan sekadar cepat, tetapi reaksi harus masuk akal, konsisten, dan dapat dibaca oleh pemain.

Intuisinya sederhana: pemain mengharapkan lawan bereaksi ketika terlihat, berhenti mengejar ketika hilang, dan menurunkan tekanan ketika pemain dalam kondisi lemah. Jika sistem terlalu lambat, terasa bodoh. Jika terlalu cepat dan berubah-ubah, terasa tidak stabil.

Beberapa contoh yang perlu dipahami:

- `chase` ketika pemain terlihat.
- `search` ketika pemain hilang dari pandangan.
- sistem director mengurangi tekanan saat `low_health`.
- squad menjadi `alert` ketika satu anggota melihat pemain.

Alurnya dapat dilihat sebagai pipeline keputusan:

1. Input: visibilitas, jarak, health, event squad, atau kondisi dunia.
2. Proses: evaluasi kondisi, timer, hysteresis, dan prioritas perilaku.
3. Output: perubahan `state`, `action`, atau parameter tekanan.

Masalah utama adalah **responsif berlebihan**. Jika sistem mengganti perilaku setiap frame, gerakan bisa bergetar, keputusan terasa acak, dan pemain kehilangan sinyal. Karena itu, gunakan **smoothing**, **timer**, dan `cooldown` agar perubahan perilaku terjadi secara halus dan dapat diprediksi.

Secara praktis, jangan langsung berpindah state begitu satu kondisi terpenuhi. Tambahkan durasi minimum, misalnya pemain harus terlihat selama beberapa detik sebelum `chase` aktif, atau `cooldown` setelah serangan sebelum serangan berikutnya. Dengan cara ini, sistem tetap responsif tetapi tidak reaktif secara berlebihan.

### Inti yang Harus Ditekankan

- Responsiveness berarti **reaksi tepat waktu**, bukan reaksi instan tanpa filter.
- Gunakan `timer`, `cooldown`, dan smoothing untuk mencegah perubahan perilaku yang terlalu cepat.
- Perubahan state harus memiliki alasan yang bisa dibaca pemain: terlihat, hilang, low health, atau event squad.
- Respons yang baik menjaga keseimbangan antara tantangan dan counterplay.

### Transisi ke Slide Berikutnya

Setelah perilaku dirancang agar responsif, kita perlu memastikan reaksi tersebut tidak membuat game berat. Slide berikutnya akan membahas **Performance**, yaitu cara menjaga update dan aktivitas perilaku tetap efisien.

---

## Slide 052 - Performance

### Narasi

Pada slide ini kita membahas **Performance**, yaitu bagaimana sistem AI dalam game tidak hanya harus benar secara perilaku, tetapi juga efisien secara komputasi. Dalam game, setiap keputusan AI biasanya dihitung berulang kali setiap frame atau setiap interval tertentu. Jika jumlah agent, sensor, pathfinding, atau proses runtime terlalu besar, frame rate bisa turun dan pengalaman bermain menjadi tidak stabil.

Intuisi pentingnya adalah: **AI yang cerdas tidak berarti AI yang terus-menerus menghitung**. Banyak perilaku NPC cukup diperbarui beberapa kali per detik, bukan setiap frame. Untuk enemy yang jauh dari player, update bisa dikurangi. Untuk pathfinding, tidak perlu dihitung ulang setiap frame jika lingkungan tidak berubah. Dengan cara ini, game tetap terasa responsif tanpa membebani CPU atau GPU.

Beberapa masalah umum yang perlu diwaspadai adalah:

- terlalu banyak **`raycast`** untuk deteksi pandangan atau pendengaran,
- **`pathfinding`** dijalankan terlalu sering,
- **`PCG runtime`** yang menghasilkan konten secara real-time terlalu berat,
- banyak enemy atau `agent` yang diupdate setiap frame, misalnya melalui fungsi `Update`,
- terlalu banyak **`debug log`** yang ditulis ke konsol,
- **`ML inference`** yang membutuhkan komputasi besar jika dijalankan terus-menerus.

Masalah-masalah ini biasanya tidak muncul karena satu fungsi saja, tetapi karena akumulasi dari banyak agent dan banyak proses yang berjalan bersamaan. Misalnya, jika ada banyak enemy dan masing-masing melakukan raycast, pathfinding, dan update steering setiap frame, beban komputasi bisa meningkat secara signifikan.

Strategi yang dapat digunakan antara lain:

- **`update interval`**, yaitu memperbarui AI dengan interval tertentu, misalnya beberapa kali per detik,
- **`spatial filtering`**, yaitu hanya memproses agent yang berada di sekitar player atau area aktif,
- **`object pooling`**, yaitu memakai ulang objek seperti projectile, effect, atau enemy spawn tanpa membuat dan menghapus objek terus-menerus,
- **membatasi jumlah `agent`** yang aktif secara bersamaan,
- **`cache data`**, yaitu menyimpan hasil perhitungan yang tidak sering berubah,
- **`profiling`**, yaitu mengukur bagian mana yang paling berat sebelum mengoptimasi.

Dalam praktik, urutan yang sehat adalah: **ukur dulu, baru optimasi**. Gunakan profiler untuk melihat apakah biaya terbesar berasal dari raycast, pathfinding, update agent, PCG, atau inference. Setelah itu, terapkan strategi yang paling tepat. Jangan langsung mengoptimasi semua bagian secara membabi buta, karena beberapa bagian mungkin tidak menjadi bottleneck.

Untuk mahasiswa, hal yang penting dipahami sebelum lanjut adalah bahwa performa adalah bagian dari desain AI, bukan sekadar masalah teknis di akhir. Keputusan seperti seberapa sering enemy melihat player, kapan pathfinding dijalankan ulang, dan berapa banyak agent yang aktif akan memengaruhi baik perilaku game maupun stabilitas frame rate.

### Inti yang Harus Ditekankan

- **Performance** adalah efisiensi komputasi AI, bukan hanya kecepatan satu fungsi.
- Hindari update, raycast, pathfinding, PCG, atau ML inference yang terlalu sering tanpa kebutuhan.
- Gunakan **`update interval`**, **`spatial filtering`**, **`object pooling`**, **`cache data`**, dan **`profiling`** sebagai strategi utama.
- Optimasi harus berbasis pengukuran, bukan tebakan.
- Performa AI harus dirancang sejak awal agar game tetap stabil dan perilaku NPC tetap konsisten.

### Transisi ke Slide Berikutnya

Setelah kita memastikan AI berjalan efisien, langkah berikutnya adalah memastikan keputusan AI dapat dijelaskan. Pada slide berikutnya, kita akan membahas **Explainability**, yaitu bagaimana mahasiswa dapat menunjukkan alasan di balik perilaku NPC atau agent dalam final project.

---

## Slide 053 - Explainability

### Narasi

**Explainability** adalah kemampuan sistem untuk menunjukkan alasan di balik sebuah keputusan. Dalam konteks perilaku game, hal ini penting karena mahasiswa tidak hanya membuat agent yang bergerak atau memilih aksi, tetapi juga harus mampu menjelaskan mengapa agent memilih aksi tersebut.

Contoh sederhana:

```text
Enemy memilih TakeCover karena:
health rendah,
player terlihat,
cover valid tersedia,
TakeCover score tertinggi.
```

Pada contoh ini, keputusan `TakeCover` bukan muncul secara tiba-tiba. Sistem mengevaluasi beberapa kondisi: `health` rendah, `player` terlihat, dan `cover` yang valid tersedia. Setelah itu, sistem membandingkan skor dari beberapa opsi perilaku. Karena `TakeCover` memiliki skor tertinggi, aksi tersebut dipilih.

Intuisi praktisnya adalah begini: jika perilaku agent tidak bisa dijelaskan, mahasiswa akan sulit memperbaiki bug, menyetel parameter, atau memastikan desain sesuai tujuan. Misalnya, jika musuh terlalu sering berlindung, mahasiswa perlu tahu apakah penyebabnya adalah nilai `health` terlalu cepat turun, deteksi `player` terlalu sensitif, atau skor `TakeCover` terlalu besar.

Untuk final project, mahasiswa harus bisa menjelaskan lima hal utama:

- **Input sistem**: data apa yang dibaca, misalnya `health`, jarak, visibilitas, posisi `cover`, atau status `player`.
- **Logika keputusan**: bagaimana data tersebut diolah, misalnya perbandingan skor, aturan `if-else`, state machine, atau evaluasi kondisi.
- **Parameter**: nilai yang memengaruhi keputusan, seperti threshold, bobot, radius, cooldown, atau prioritas aksi.
- **Output behavior**: perilaku yang muncul, misalnya `TakeCover`, `Chase`, `Attack`, `Flee`, atau `Patrol`.
- **Alasan desain**: mengapa perilaku tersebut dipilih, misalnya agar musuh terasa lebih realistis, memberi tekanan pada player, atau menjaga keseimbangan gameplay.

Dengan penjelasan seperti ini, perilaku agent menjadi lebih transparan. Mahasiswa tidak hanya mengatakan “musuh berlindung”, tetapi bisa menunjukkan rantai alasan: kondisi apa yang terdeteksi, aturan apa yang dijalankan, parameter apa yang memengaruhi, dan perilaku apa yang dihasilkan.

Sebelum lanjut, mahasiswa perlu memahami bahwa explainability bukan sekadar catatan tambahan. Ia membantu debugging, tuning, dan presentasi final project. Jika keputusan tidak bisa dijelaskan, sistem sulit dievaluasi dan sulit dikembangkan.

### Inti yang Harus Ditekankan

- **Explainability** berarti keputusan perilaku game dapat dijelaskan dengan alasan yang jelas.
- Contoh `TakeCover` menunjukkan hubungan antara input, evaluasi kondisi, skor, dan output perilaku.
- Final project harus menjelaskan input, logika keputusan, parameter, output behavior, dan alasan desain.

### Transisi ke Slide Berikutnya

Setelah kita bisa menjelaskan mengapa sistem mengambil keputusan tertentu, langkah berikutnya adalah menilai apakah keputusan tersebut menghasilkan pengalaman bermain yang baik.

---

## Slide 054 - Player Experience

### Narasi

Pada slide ini kita beralih dari **kebenaran teknis** ke **pengalaman pemain**. Sebuah sistem keputusan bisa berjalan benar, tetapi jika pemain tidak merasakan dampaknya, gameplay akan terasa datar.

```text
Apakah game terasa menyenangkan?
```

Pertanyaan ini menjadi tolok ukur utama. **AI yang benar secara logika** belum tentu menghasilkan **gameplay yang baik**. Yang dinilai bukan hanya apakah agent memilih `state` yang tepat, tetapi apakah pilihan itu terasa masuk akal, hidup, dan memberi tantangan.

Dalam konteks NPC, perilaku yang baik biasanya terbaca dari konsistensi antara situasi dan respons. `state` seperti `Alert`, `Chase`, atau `TakeCover` harus sesuai dengan `health`, `distance`, atau `threat`. `action` seperti bergerak, menghindar, atau menyerang harus menghasilkan **feedback** yang jelas. Jika NPC hanya bergerak berdasarkan `NavMeshAgent` tanpa alasan yang terbaca, pemain akan merasa perilaku itu acak.

Untuk menilai pengalaman pemain, kita bisa memperhatikan hal berikut:

- **Tujuan yang jelas**: pemain tahu apa yang harus dilakukan dan mengapa NPC berperilaku tertentu.
- **NPC terasa hidup**: keputusan tidak kaku, ada variasi, dan respons terhadap situasi terasa wajar.
- **Tantangan menarik**: pemain tidak terlalu mudah atau terlalu frustrasi; kesulitan muncul dari interaksi, bukan dari bug.
- **Adaptasi natural**: perubahan perilaku terasa seperti reaksi, bukan lompatan tiba-tiba.
- **Feedback yang jelas**: pemain bisa membaca apa yang terjadi, misalnya lewat `UI`, animasi, suara, atau perubahan posisi NPC.
- **Win/lose condition**: ada kondisi menang dan kalah yang bisa dipahami dan dirasakan dampaknya.

Apapun arsitektur yang dipakai, baik `FSM`, `behavior tree`, `steering`, atau `learning agent`, tujuan akhirnya sama: pemain harus merasakan perilaku yang bermakna. Dalam implementasi Unity, hal ini bisa terlihat dari `NavMeshAgent`, `Animator`, `UI`, atau event interaksi.

Sebelum masuk ke metode evaluasi, mahasiswa perlu memahami bahwa **player experience** adalah jembatan antara desain kecerdasan game dan desain gameplay. Jika perilaku agent tidak bisa dirasakan pemain, maka nilai teknisnya belum cukup.

### Inti yang Harus Ditekankan

- **Keberhasilan game tidak hanya diukur dari logika yang benar**, tetapi dari pengalaman yang dirasakan pemain.
- Perilaku NPC harus terasa **hidup, masuk akal, dan memberi tantangan**.
- Evaluasi player experience mencakup **tujuan, feedback, adaptasi, dan win/lose condition**.

### Transisi ke Slide Berikutnya

Setelah kita memahami apa yang harus dirasakan pemain, langkah berikutnya adalah menentukan cara menunjukkan dan menilai hasil final project secara terstruktur.

---

## Slide 055 - Metode Evaluasi Final Project

### Narasi

Pada tahap final project, evaluasi tidak cukup berhenti pada apakah game dapat dijalankan. Mahasiswa perlu menunjukkan bahwa sistem kecerdasan di dalamnya dapat dijelaskan, diuji, dan dipertanggungjawabkan secara teknis.

Metode evaluasi yang disarankan adalah:

1. **Demo gameplay langsung**  
   Mahasiswa menjalankan game dan menunjukkan perilaku NPC atau agent dalam situasi nyata.

2. **Penjelasan arsitektur AI**  
   Mahasiswa menjelaskan bagaimana keputusan dibuat, misalnya melalui `FSM`, `behavior tree`, `pathfinding`, `steering`, `decision making`, atau `learning agent` sesuai desain project.

3. **`AI Debug Mode`**  
   Mahasiswa menyiapkan mode debug yang menampilkan `state`, `action`, `target`, `path`, `vision range`, `health`, `utility score`, atau `steering force` yang sedang digunakan.

4. **Pengujian beberapa skenario**  
   Mahasiswa tidak hanya menampilkan satu kondisi, tetapi menguji beberapa situasi penting agar perilaku agent terlihat konsisten.

5. **Penjelasan parameter**  
   Mahasiswa menjelaskan parameter yang memengaruhi perilaku, seperti `aggression`, `fleeDistance`, `visionRange`, `pathCost`, atau `decisionThreshold`, serta alasan nilai yang dipilih.

6. **Penjelasan evaluasi**  
   Mahasiswa menjelaskan bagaimana kualitas sistem dinilai, misalnya dari konsistensi perilaku, stabilitas sistem, kemampuan adaptasi, dan dampaknya terhadap gameplay.

7. **Tanya jawab**  
   Mahasiswa menjawab pertanyaan dosen dan teman sekelas untuk menunjukkan pemahaman yang lebih dalam.

Inti dari metode ini adalah mahasiswa tidak hanya menyerahkan game, tetapi juga menunjukkan bagaimana AI bekerja di baliknya. Dengan cara ini, dosen dapat menilai apakah perilaku NPC memang dirancang secara sadar, bukan sekadar muncul secara kebetulan.

Hal yang perlu dipahami sebelum lanjut adalah bahwa evaluasi final project bersifat gabungan antara demonstrasi, penjelasan teknis, dan bukti pengujian. Mahasiswa harus siap menjelaskan hubungan antara parameter, keputusan AI, dan hasil gameplay yang terlihat.

### Inti yang Harus Ditekankan

- Final project dinilai dari **gameplay** dan **arsitektur AI**, bukan hanya tampilan akhir.
- **`AI Debug Mode`** membantu menunjukkan `state`, `action`, `path`, dan parameter yang sedang aktif.
- Mahasiswa harus mampu menjelaskan **skenario uji**, **parameter**, dan **evaluasi** secara runtut.

### Transisi ke Slide Berikutnya

Setelah metode evaluasi dipahami, langkah berikutnya adalah menyiapkan skenario uji yang konkret agar demo AI lebih terarah dan mudah dinilai.

---

## Slide 056 - Skenario Uji AI

### Narasi

Pada slide ini, kita beralih dari **metode evaluasi** ke **skenario uji AI**. Skenario uji adalah situasi permainan yang sengaja disiapkan untuk memperlihatkan bagaimana **NPC**, **enemy**, atau **agent** mengambil keputusan. Tujuannya bukan membuat demo menjadi lebih panjang, tetapi membuat perilaku AI terlihat jelas dan mudah dijelaskan.

Dengan skenario uji, mahasiswa tidak hanya menunjukkan bahwa game berjalan, tetapi juga menunjukkan bahwa AI merespons kondisi permainan. Misalnya, AI harus mampu membedakan antara **player terlihat**, **player tersembunyi**, **target hilang**, atau **peta berbeda**. Hal ini penting karena perilaku AI biasanya bergantung pada input seperti `vision range`, `wall`, `low health`, `target`, `cover point`, dan `seed PCG`.

Beberapa contoh skenario yang dapat disiapkan adalah:

- **Player masuk `vision range` enemy**: amati apakah enemy berubah state, melakukan deteksi, menghitung path, atau bergerak menuju player.
- **Player bersembunyi di balik `wall`**: amati apakah AI berhenti mengejar, mencari, atau kehilangan target karena pandangan terhalang.
- **Player `low health`**: amati apakah AI atau sistem game memberikan respons yang sesuai, misalnya perubahan prioritas atau tekanan.
- **Enemy kehilangan target**: amati perilaku pencarian, kembali ke posisi awal, atau kembali ke state idle.
- **`cover point` penuh**: amati bagaimana AI memilih cover, menghindari tabrakan, atau menyesuaikan pathfinding.
- **`seed PCG` berbeda**: amati apakah AI tetap konsisten dan mampu beradaptasi pada layout peta yang berbeda.
- **Player performa baik/buruk**: amati apakah ada penyesuaian kesulitan atau perubahan perilaku AI.
- **`AI Director` menaikkan intensitas**: amati perubahan tekanan atau perilaku AI yang diberikan ke player.

Skenario ini membantu demo menjadi lebih terarah. Saat dosen atau penguji melihat satu situasi, mahasiswa dapat menjelaskan apa yang seharusnya terjadi, parameter apa yang memengaruhi, dan bagaimana keputusan AI dihasilkan. Dengan cara ini, penjelasan arsitektur AI tidak berhenti pada teori, tetapi terhubung langsung dengan perilaku yang terlihat di layar.

Sebelum lanjut, mahasiswa perlu memahami bahwa **skenario uji** adalah alat bukti. Setiap skenario sebaiknya memiliki kondisi awal yang jelas, respons AI yang diharapkan, dan hasil yang dapat diamati. Jika skenario tidak disiapkan, demo berisiko menjadi gameplay acak yang tidak menunjukkan kemampuan AI secara spesifik.

### Inti yang Harus Ditekankan

- **Skenario uji** membuat demo AI lebih terarah, terukur, dan mudah dijelaskan.
- Setiap skenario harus menunjukkan **kondisi input**, **respons AI**, dan **hasil yang diharapkan**.
- Skenario membantu menguji deteksi, pathfinding, keputusan, adaptasi, dan penyesuaian intensitas.
- Demo yang baik tidak hanya menampilkan game berjalan, tetapi memperlihatkan alasan di balik perilaku AI.

### Transisi ke Slide Berikutnya

Setelah skenario uji disiapkan, langkah berikutnya adalah memastikan proyek akhir benar-benar berupa **mini game yang selesai**, bukan sekadar scene kosong berisi demo algoritma.

---

## Slide 057 - Final Project: Intelligent Game

### Narasi

Pada tahap ini, fokusnya bukan lagi pada satu algoritma yang berdiri sendiri, melainkan pada **proyek akhir** yang dapat dimainkan sebagai satu utuh. Proyek akhir sebaiknya berupa **mini game yang selesai**, artinya ada alur bermain yang jelas dari awal sampai akhir. Mahasiswa perlu melihat bahwa sistem kecerdasan NPC, kontrol pemain, antarmuka, dan kondisi kemenangan/kalah harus saling terhubung, bukan hanya ditampilkan sebagai potongan demo.

Intuisi praktisnya sederhana: jika mini game tidak bisa dimainkan dalam beberapa menit, maka sulit menilai apakah perilaku NPC benar-benar masuk akal dalam konteks permainan. Sebuah scene kosong yang hanya memuat satu algoritma mungkin berguna untuk eksperimen, tetapi belum menunjukkan kemampuan mengintegrasikan perilaku NPC, kontrol pemain, dan feedback ke dalam pengalaman bermain.

Ciri mini game yang baik dapat dilihat dari beberapa hal berikut:

- **Objective jelas**: pemain tahu apa yang harus dilakukan, misalnya bertahan, menyerang, mengumpulkan item, atau mencapai titik tertentu.
- **Kontrol player jelas**: input pemain konsisten dan mudah dipahami, sehingga perilaku NPC dapat diamati secara adil.
- **Enemy/NPC punya sistem kecerdasan**: NPC tidak hanya diam atau bergerak acak, tetapi memiliki perilaku yang dapat diamati, seperti mengejar, menghindari, atau merespons kondisi pemain.
- **Ada tantangan**: permainan harus memberi tekanan, misalnya jarak, waktu, sumber daya, atau keputusan pemain.
- **Ada `win/lose condition`**: ada batas keberhasilan dan kegagalan yang dapat diukur.
- **Ada feedback visual/audio**: pemain tahu apa yang terjadi, misalnya NPC terdeteksi, serangan berhasil, atau kondisi berubah.
- **Ada `UI`**: informasi penting seperti skor, nyawa, timer, atau status misi ditampilkan dengan jelas.
- **Ada `debug mode`**: dosen dan mahasiswa dapat memeriksa perilaku NPC, parameter sistem, atau kondisi internal secara lebih mudah.
- **Dapat dimainkan 5–10 menit**: durasi ini cukup untuk menunjukkan loop permainan, tetapi tetap realistis untuk dikerjakan kelompok.

Poin penting yang harus dipahami adalah bahwa **selesai** tidak berarti sempurna secara visual, tetapi berarti playable. Sebuah mini game sederhana dengan aset non-default, kontrol yang berfungsi, dan beberapa perilaku NPC yang konsisten lebih bernilai daripada scene besar yang tidak bisa dimainkan. Dalam konteks Game Cerdas, nilai utama proyek akhir terletak pada kemampuan mahasiswa membangun sistem yang dapat diuji, diamati, dan dijelaskan perilakunya.

Sebelum lanjut, mahasiswa perlu memastikan bahwa ide proyek sudah cukup kecil untuk diselesaikan, tetapi cukup lengkap untuk menunjukkan integrasi perilaku NPC, kontrol pemain, dan kondisi permainan. Proyek yang terlalu ambisius berisiko hanya menghasilkan potongan fitur, bukan game yang dapat didemokan.

### Inti yang Harus Ditekankan

- Proyek akhir harus berupa **mini game yang selesai**, bukan sekadar scene demo algoritma.
- Mini game yang baik memiliki **objective**, **kontrol**, **perilaku NPC**, **tantangan**, **`win/lose condition`**, **feedback**, **`UI`**, dan **`debug mode`**.
- Durasi **5–10 menit** menjadi target realistis agar proyek dapat dimainkan, diuji, dan didemokan.
- **`debug mode`** penting untuk menjelaskan dan memeriksa perilaku NPC secara akademik.
- Selesai berarti **playable dan terintegrasi**, meskipun visual atau mekanik masih sederhana.

### Transisi ke Slide Berikutnya

Setelah memahami bahwa proyek akhir harus berupa mini game yang selesai dan dapat dimainkan, langkah berikutnya adalah menetapkan batas minimum agar setiap kelompok memiliki standar yang jelas. Slide berikutnya akan membahas **minimum requirement final project** yang perlu dipenuhi.

---

## Slide 058 - Minimum Requirement Final Project

### Narasi

Slide ini menetapkan **minimum requirement** untuk proyek akhir. Tujuannya agar setiap kelompok memiliki standar dasar yang sama, sehingga mini game yang dihasilkan benar-benar dapat dimainkan, dinilai, dan menunjukkan adanya sistem kecerdasan yang terintegrasi. Daftar minimum yang disarankan adalah sebagai berikut:

```text
1 playable level
1 player controller
minimum 3 NPC/enemy
minimum 3 AI behaviors
perception system
navigation/pathfinding
decision making
1 tactical/adaptive/PCG feature
win condition
lose condition
UI
non-default visual assets
AI debug mode
```

Secara konsep, daftar ini membentuk satu alur permainan yang utuh. **playable level** menjadi lingkungan tempat interaksi terjadi, sedangkan **player controller** memastikan pemain dapat masuk ke dalam dunia game dan memberikan input. Tanpa keduanya, sistem kecerdasan tidak punya konteks untuk bereaksi.

Untuk bagian agent, kelompok perlu menyiapkan **minimum 3 NPC/enemy**. Jumlah ini penting karena satu agent saja tidak cukup untuk menunjukkan variasi perilaku. Dengan beberapa agent, mahasiswa dapat menguji apakah sistem dapat membedakan peran, jarak, prioritas, atau kondisi lingkungan.

Selanjutnya, **minimum 3 AI behaviors** memastikan agent tidak hanya melakukan satu gerakan berulang. Perilaku ini harus terhubung dengan **perception system**, **navigation/pathfinding**, dan **decision making**. Artinya, agent perlu mampu mengamati keadaan, memilih jalur atau gerakan yang masuk akal, lalu memutuskan tindakan berikutnya berdasarkan informasi yang tersedia.

**perception system** adalah dasar agar agent tidak “tahu” hal yang tidak seharusnya ia ketahui. **navigation/pathfinding** membuat gerakan agent terasa natural karena mengikuti lingkungan, bukan sekadar teleport ke posisi pemain. **decision making** kemudian menjadi pusat kontrol perilaku, misalnya memilih untuk bertahan, mengejar, menghindari, atau melakukan tindakan lain sesuai kondisi.

Selain sistem dasar, proyek akhir juga perlu memiliki **1 tactical/adaptive/PCG feature**. Fitur ini menjadi pembeda antara game sederhana dan game yang menunjukkan kemampuan desain kecerdasan lebih lanjut. Tidak perlu banyak fitur canggih, tetapi satu fitur saja harus benar-benar berfungsi dan terasa dalam gameplay.

Bagian akhir dari daftar ini berkaitan dengan kelengkapan produk. **win condition** dan **lose condition** memberi tujuan permainan. **UI** membantu pemain memahami status, skor, nyawa, atau informasi penting. **non-default visual assets** membuat game tidak terlihat seperti template kosong, sementara **AI debug mode** sangat penting untuk evaluasi karena memudahkan dosen dan mahasiswa melihat apa yang sedang dipikirkan atau dilakukan oleh agent.

Poin penting yang harus dipahami sebelum lanjut adalah: minimum requirement ini bukan sekadar checklist teknis, tetapi batas bawah agar proyek akhir dapat dinilai sebagai game yang utuh. Kelompok boleh memilih teknik yang sesuai dengan konsep game, tetapi semua komponen minimum harus tetap hadir dan saling terhubung.

### Inti yang Harus Ditekankan

- **Minimum requirement** adalah batas bawah, bukan target maksimal.
- Proyek harus memiliki **playable level**, **player controller**, **win condition**, **lose condition**, dan **UI** agar benar-benar dapat dimainkan.
- Minimal **3 NPC/enemy** dan **3 AI behaviors** diperlukan untuk menunjukkan variasi perilaku.
- **perception system**, **navigation/pathfinding**, dan **decision making** adalah inti dari agent yang masuk akal.
- Satu **tactical/adaptive/PCG feature** harus terintegrasi, bukan sekadar tambahan terpisah.
- **AI debug mode** penting untuk membuktikan bahwa perilaku agent dapat diamati dan dievaluasi.

### Transisi ke Slide Berikutnya

Setelah batas minimum proyek akhir jelas, langkah berikutnya adalah memilih teknik apa yang akan digunakan untuk membangun perilaku agent tersebut.

---

## Slide 059 - Teknik AI yang Bisa Digunakan

### Narasi

Pada slide ini, kita melihat daftar teknik yang dapat dipilih untuk final project. Poin utamanya bukan memilih semua teknik, tetapi memilih beberapa teknik yang **saling terhubung** dan sesuai dengan konsep game.

```text
Perception
Memory
Steering
NavMesh / A*
FSM
Behavior Tree
Utility AI
Tactical AI
PCG
DDA
Player Modeling
Q-Learning / ML-Agents
AI Director
```

Intuisi praktisnya adalah NPC yang terasa hidup biasanya memiliki alur dasar: ia **mendeteksi** lingkungan, **mengingat** informasi penting, **memutuskan** tindakan, lalu **bergerak** atau **bereaksi** terhadap hasil tindakannya. Daftar teknik di atas adalah bahan untuk membangun alur tersebut.

Kita bisa mengelompokkannya menjadi beberapa fungsi:

- **Perception & Memory**: `Perception` menentukan apa yang bisa diketahui NPC, misalnya pemain terlihat atau objek berada dalam jangkauan. `Memory` menyimpan informasi penting, seperti posisi terakhir pemain, ancaman, atau tujuan yang sedang dikejar.
- **Movement & Navigation**: `Steering` membantu NPC bergerak halus dan menghindari tabrakan lokal. `NavMesh` / `A*` digunakan untuk mencari jalur global dari posisi saat ini ke target.
- **Decision Making**: `FSM` cocok untuk perilaku berbasis state yang jelas. `Behavior Tree` cocok untuk keputusan hierarkis yang lebih fleksibel. `Utility AI` cocok ketika NPC harus memilih tindakan berdasarkan skor prioritas.
- **Tactical & Adaptive**: `Tactical AI` mendukung perilaku taktis seperti memilih posisi, target, atau kerja sama. `DDA` menyesuaikan kesulitan permainan. `Player Modeling` memperkirakan gaya atau kemampuan pemain. `AI Director` membantu mengatur prioritas kejadian atau momen penting dalam game.
- **Content & Learning**: `PCG` dapat menghasilkan konten prosedural, misalnya layout atau variasi level. `Q-Learning` / `ML-Agents` mewakili pendekatan learning agent, di mana perilaku dapat dipelajari dari interaksi dengan lingkungan.

Dalam implementasi, teknik-teknik ini sebaiknya tidak berdiri sendiri. Urutan proses yang sederhana dapat dilihat sebagai berikut:

1. `Perception` mengumpulkan data dari lingkungan.
2. `Memory` menyimpan data penting untuk keputusan berikutnya.
3. `Behavior Tree`, `FSM`, atau `Utility AI` memilih aksi.
4. `NavMesh` / `A*` dan `Steering` mengeksekusi gerakan.

Dengan alur seperti ini, mahasiswa dapat menjelaskan **mengapa** NPC melakukan sesuatu, bukan hanya **apa** yang dilakukan NPC.

Pesan terpenting dari slide ini adalah: **lebih baik sedikit teknik tetapi terintegrasi baik daripada banyak teknik tetapi tidak selesai**. Untuk final project, pilih teknik yang mendukung win condition, lose condition, dan pengalaman bermain yang ingin dibangun.

### Inti yang Harus Ditekankan

- Pilih beberapa teknik yang relevan, bukan semua teknik dari daftar.
- Pahami fungsi tiap teknik: `Perception` dan `Memory` untuk informasi, `Steering` dan `NavMesh` / `A*` untuk gerak, `FSM` / `Behavior Tree` / `Utility AI` untuk keputusan.
- Pastikan ada alur data yang jelas: input dari lingkungan, penyimpanan, keputusan, aksi, dan feedback.
- Teknik seperti `PCG`, `DDA`, `Player Modeling`, `Q-Learning` / `ML-Agents`, atau `AI Director` boleh dipilih jika konsep game mendukung dan integrasinya dapat diselesaikan.

### Transisi ke Slide Berikutnya

Setelah memahami menu teknik yang tersedia, kita akan melihat contoh kombinasi teknik untuk final project pada slide berikutnya.

---

## Slide 060 - Contoh Kombinasi AI Final Project

### Narasi

Slide ini menunjukkan **contoh kombinasi** yang bisa digunakan untuk final project. Tujuannya bukan menambah daftar teknik, tetapi membantu mahasiswa melihat bagaimana beberapa teknik saling bekerja dalam satu genre.

```text
Stealth Game:
Perception
Memory
FSM / Behavior Tree
NavMesh
Search last known position
Shared alert
AI Director

Dungeon Game:
PCG dungeon
NavMesh
Enemy FSM
Utility AI
DDA
Loot adaptation

Squad Shooter:
Perception
Target selection
Cover
Tactical positioning
Behavior Tree
Squad coordination
```

Pada **Stealth Game**, alur utamanya adalah deteksi dan respons. `Perception` menentukan apakah musuh melihat atau mendengar pemain. `Memory` menyimpan `last known position` ketika pemain menghilang. `FSM` atau `Behavior Tree` memilih state seperti `patrol`, `investigate`, `search`, atau `combat`. `NavMesh` membuat agent bergerak ke titik yang valid. `Shared alert` membuat satu musuh yang terkejut memberi tahu musuh lain. `AI Director` dapat mengatur ketegangan, misalnya menambah frekuensi patroli atau mengubah prioritas pencarian.

Untuk **Dungeon Game**, fokusnya adalah lingkungan yang berubah dan penyesuaian tantangan. `PCG dungeon` menghasilkan tata letak dungeon secara prosedural. `NavMesh` memastikan jalur tetap bisa dilalui setelah layout dibuat. `Enemy FSM` menangani perilaku dasar musuh, seperti `idle`, `chase`, `attack`, dan `flee`. `Utility AI` membantu memilih tindakan berdasarkan skor, misalnya jarak ke pemain, kesehatan, atau objek yang dekat. `DDA` menyesuaikan kesulitan, sedangkan `Loot adaptation` mengubah isi atau nilai loot agar pengalaman pemain tetap seimbang.

Pada **Squad Shooter**, yang penting adalah koordinasi antar agent. `Perception` memberi informasi tentang musuh dan bahaya. `Target selection` memilih target yang paling relevan. `Cover` dan `Tactical positioning` membuat agent mencari perlindungan atau posisi yang menguntungkan. `Behavior Tree` mengorganisasi keputusan menjadi struktur yang mudah di-debug. `Squad coordination` memastikan anggota tim tidak semua melakukan hal yang sama, misalnya satu menahan, satu flank, dan satu mendukung.

Intuisi praktisnya adalah: **kombinasi yang baik membentuk loop perilaku**, yaitu agent menerima input, menyimpan informasi, membuat keputusan, bergerak, lalu menyesuaikan diri. Mahasiswa tidak perlu memilih semua teknik dari satu contoh. Yang lebih penting adalah memilih beberapa teknik yang saling melengkapi dan bisa diuji dalam satu level kecil.

Sebelum lanjut, mahasiswa perlu memahami bahwa contoh ini adalah **pola desain**, bukan template wajib. Setiap final project harus menyesuaikan kombinasi dengan genre, tujuan gameplay, dan batasan waktu.

### Inti yang Harus Ditekankan

- **Kombinasi teknik** harus menjawab kebutuhan gameplay, bukan sekadar banyak fitur.
- Setiap teknik punya peran: `Perception` untuk input, `Memory` untuk konteks, `FSM`/`Behavior Tree` untuk keputusan, `NavMesh` untuk gerak, dan `DDA`/`Utility AI` untuk adaptasi.
- Stealth menekankan deteksi dan pencarian, dungeon menekankan lingkungan prosedural dan penyesuaian tantangan, squad shooter menekankan koordinasi tim.
- Pilih beberapa teknik yang terintegrasi dan bisa di-debug, bukan banyak sistem yang berdiri sendiri.

### Transisi ke Slide Berikutnya

Setelah melihat contoh kombinasi, langkah berikutnya adalah membatasi ruang lingkup agar final project tetap realistis dan selesai.

---

## Slide 061 - Scope Final Project

### Narasi

Pada tahap ini, mahasiswa perlu memahami bahwa keberhasilan proyek akhir tidak ditentukan oleh seberapa besar dunia game yang dibuat, tetapi oleh seberapa jelas dan stabil **sistem cerdas** yang dapat dijalankan. **Scope** yang realistis menjadi dasar agar tim tidak terjebak pada fitur yang tampak ambisius tetapi tidak selesai. Dalam konteks game, hal ini berarti memilih satu ruang bermain yang terbatas, satu tujuan gameplay yang jelas, dan satu perilaku **NPC** yang dapat diamati, diuji, dan diperbaiki.

Beberapa lingkup sebaiknya dihindari karena membutuhkan sumber daya, waktu, dan kompleksitas desain yang jauh melampaui skala proyek akhir.

- **Open world** besar.
- **Multiplayer online**.
- **RPG** penuh.
- Banyak level.
- **Inventory** kompleks.
- Cerita panjang.
- Terlalu banyak tipe enemy.
- `ML-Agents` kompleks tanpa waktu training yang memadai.

Masalahnya bukan pada fitur tersebut secara mutlak, tetapi pada efeknya terhadap pengembangan. Setiap fitur tambahan menambah kebutuhan desain, implementasi, pengujian, dan balancing. Jika scope terlalu luas, sistem utama seperti `NavMesh`, `FSM`, `Behavior Tree`, target selection, atau steering behavior menjadi tidak sempat dipertajam. Akibatnya, mahasiswa hanya memiliki banyak fitur setengah jadi, bukan satu pengalaman bermain yang utuh.

Fokus yang lebih tepat adalah membangun satu level kecil yang sudah selesai secara **gameplay**. Level ini tidak harus besar, tetapi harus memiliki alur yang jelas: pemain masuk, menghadapi tantangan, berinteraksi dengan NPC, dan mencapai kondisi menang atau kalah. Sistem cerdas pada level ini harus dapat dijelaskan secara konseptual dan teknis, misalnya bagaimana NPC memilih target, bergerak menuju posisi, berpindah `state`, atau merespons stimulus dari pemain.

Selain itu, visual cukup menarik dan **debug** tersedia menjadi bagian penting dari kualitas proyek. Visual tidak perlu setara game komersial, tetapi harus membantu mahasiswa dan penguji memahami apa yang sedang terjadi dalam scene. Debug yang baik memungkinkan perilaku NPC diamati, misalnya `state` aktif, target yang dipilih, `path` yang digunakan, atau keputusan yang diambil. Dengan demikian, proyek tidak hanya terlihat berjalan, tetapi juga dapat dijelaskan, diuji, dan diperbaiki.

### Inti yang Harus Ditekankan

- **Scope** final project harus realistis agar **sistem cerdas** dapat diselesaikan dan dijelaskan dengan baik.
- Hindari cakupan besar seperti **open world**, **multiplayer online**, **RPG** penuh, banyak level, **inventory** kompleks, cerita panjang, terlalu banyak enemy, atau `ML-Agents` kompleks tanpa waktu training.
- Fokus pada satu level kecil, perilaku **NPC** yang jelas, **gameplay** yang selesai, visual yang cukup menarik, dan **debug** yang tersedia.

### Transisi ke Slide Berikutnya

Setelah **scope** ditentukan secara realistis, langkah berikutnya adalah memakainya sebagai dasar untuk membangun satu potongan game yang utuh, yaitu **vertical slice**.

---

## Slide 062 - Vertical Slice

### Narasi

Untuk final project, pendekatan yang paling aman adalah membuat **vertical slice**. Artinya, tim tidak perlu membangun seluruh game, tetapi cukup menyelesaikan **satu bagian kecil** yang sudah memuat **elemen inti** dari pengalaman bermain. Intuisi praktisnya adalah: satu slice harus bisa dimainkan dari awal sampai akhir, menunjukkan tujuan, interaksi, tantangan, dan hasil yang jelas.

Contoh vertical slice yang sesuai:

- `satu dungeon level` dengan satu objective dan beberapa agen penantang.
- `satu arena survival` dengan durasi terbatas dan kondisi menang/kalah.
- `satu misi stealth` dengan area tertutup, deteksi, dan target.
- `satu outpost defense` dengan gelombang musuh dan struktur yang harus dijaga.
- `satu robot training arena` dengan lingkungan terkontrol untuk menguji perilaku agen.

Pilihan ini lebih baik daripada banyak fitur setengah jadi karena memudahkan integrasi, pengujian, dan presentasi. Dalam satu slice, mahasiswa dapat membuktikan bahwa **gameplay selesai**, **perilaku agen** dapat diamati, **navigasi** berfungsi, dan **feedback** kepada pemain cukup jelas. Jika satu slice sudah rapi, pengembangan lanjutan menjadi lebih terarah.

Sebelum lanjut, mahasiswa perlu memahami bahwa **vertical slice** bukan sekadar demo kecil, melainkan bukti bahwa arsitektur inti sudah bekerja. Fokusnya adalah kedalaman, bukan keluasan: satu level, satu loop permainan, dan satu set perilaku yang dapat dijelaskan.

### Inti yang Harus Ditekankan

- **Vertical slice** adalah satu bagian kecil game yang memuat semua elemen inti.
- Slice harus **selesai dimainkan**, bukan sekadar kumpulan fitur terpisah.
- Lebih baik **satu pengalaman utuh** daripada banyak fitur setengah jadi.
- Slice harus mudah diuji, didokumentasikan, dan dipresentasikan.

### Transisi ke Slide Berikutnya

Setelah menentukan bentuk final project sebagai vertical slice, langkah berikutnya adalah membagi tanggung jawab agar setiap anggota kelompok mengerjakan bagian yang saling melengkapi.

---

## Slide 063 - Pembagian Tugas Kelompok

### Narasi

Pada tahap final project, pembagian tugas bukan sekadar membagi file atau scene, tetapi membagi **tanggung jawab arsitektur**. Untuk kelompok tiga orang, setiap anggota memegang satu lapisan sistem yang saling terhubung, sehingga game tetap bisa berjalan sebagai satu utuh.

```text
Anggota 1: Perception, FSM / BT / utility-based decision, Memory, Target selection, debug state agent
Anggota 2: NavMesh / steering, Combat, Enemy movement, Spawner, PCG / level system
Anggota 3: Player controller, UI, Audio/VFX, Level design, Game manager, Final demo, Report
```

Pembagian ini dapat dibaca sebagai tiga lapisan:

- **Anggota 1 — Decision & Perception**: menangani `Perception`, `Memory`, `Target selection`, mesin keputusan seperti `FSM`, `BT`, atau `utility-based decision`, serta `debug state agent`. Peran ini memastikan agent atau NPC tidak hanya bereaksi acak, tetapi memiliki alasan yang bisa ditelusuri.
- **Anggota 2 — Navigation & Gameplay System**: menangani `NavMesh`, steering, `Enemy movement`, `Combat`, `Spawner`, serta `PCG` atau `level system`. Peran ini memastikan keputusan agent diterjemahkan menjadi gerakan, kemunculan, dan interaksi yang konsisten di dalam dunia.
- **Anggota 3 — Game Integration & Presentation**: menangani `Player controller`, `UI`, `Audio/VFX`, `Level design`, `Game manager`, `Final demo`, dan `Report`. Peran ini penting karena final project dinilai dari pengalaman bermain, kejelasan alur, dan kualitas penyajian, bukan hanya logika internal.

Meskipun tugasnya berbeda, semua anggota harus memahami **arsitektur keseluruhan**. Jika satu orang hanya mengerjakan `NavMesh` tanpa memahami `Perception` dan `Target selection`, agent bisa bergerak benar tetapi berperilaku tidak masuk akal. Sebaliknya, keputusan yang baik akan gagal jika `Spawner`, `Combat`, atau `Game manager` tidak terintegrasi dengan rapi.

Sebelum lanjut, mahasiswa perlu memahami bahwa final project yang baik dibangun dari **sistem yang saling membaca `state`**, bukan dari fitur yang berdiri sendiri. Pembagian tugas ini membantu tim bekerja paralel, tetapi tetap menjaga satu kontrak desain: apa yang dilihat agent, bagaimana agent memutuskan, bagaimana agent bergerak, dan bagaimana semua itu dirasakan pemain.

### Inti yang Harus Ditekankan

- Pembagian tugas kelompok sebaiknya mengikuti **lapisan sistem**: decision/perception, navigation/gameplay, dan integration/presentation.
- Setiap anggota harus bisa menjelaskan `state`, `action`, dan alur data dari perannya, bukan hanya mengerjakan komponen sendiri.
- Semua anggota perlu memahami **arsitektur keseluruhan** agar agent, level, `UI`, dan gameplay tetap konsisten.

### Transisi ke Slide Berikutnya

Setelah pembagian tugas jelas, langkah berikutnya adalah memastikan kualitas visual dan asset yang digunakan tidak membuat final project terlihat seperti prototipe kasar.

---

## Slide 064 - Asset dan Visual Quality

### Narasi

Pada tahap final project, kualitas visual bukan sekadar pelengkap, tetapi bagian dari cara mahasiswa menunjukkan bahwa sistem cerdas yang dibangun benar-benar terintegrasi ke dalam game. Jika proyek hanya berisi `cube`, `capsule`, `plane`, dan `material default`, mahasiswa akan kesulitan memperlihatkan perilaku NPC, feedback keputusan, atau atmosfer dunia game. Karena itu, final project sebaiknya menggunakan **asset** yang lebih representatif, seperti **character**, **environment**, **props**, **animation**, **UI**, **audio**, dan **VFX**.

Asset yang baik membantu pembacaan perilaku sistem cerdas. Misalnya, animasi karakter membuat transisi `state` lebih mudah dipahami, VFX memberi umpan balik saat serangan atau perubahan kondisi, dan UI membantu menampilkan informasi penting tanpa membebani `player`. Namun, pilihan asset tidak boleh asal banyak. Yang lebih penting adalah **konsistensi style**, misalnya **low poly**, **stylized fantasy**, **sci-fi**, **dungeon**, **post-apocalyptic**, atau **cartoon**. Satu style yang konsisten membuat game terasa seperti satu produk utuh, bukan kumpulan aset yang dipaksakan.

Sumber asset dapat dipilih dari beberapa kanal yang umum digunakan dalam pengembangan game. Mahasiswa dapat memanfaatkan `Unity Asset Store`, `Kenney`, `itch.io`, `Mixamo`, atau membuat asset sendiri. Untuk `Mixamo`, biasanya cocok untuk animasi karakter, sedangkan `Kenney` sering digunakan untuk asset 2D, UI, atau elemen sederhana yang cepat diintegrasikan. Yang perlu diperhatikan adalah lisensi, skala, format, dan kesesuaian dengan engine yang digunakan.

Sebelum lanjut ke pembahasan gameplay, mahasiswa perlu memastikan bahwa visual project sudah cukup komunikatif. Artinya, `player` atau penguji dapat melihat apa yang sedang dilakukan karakter, apa yang sedang dilakukan sistem cerdas, dan bagaimana dunia game merespons interaksi. Dengan visual yang rapi dan konsisten, sistem yang dibangun akan lebih mudah dinilai, diuji, dan dipresentasikan.

### Inti yang Harus Ditekankan

- Final project tidak disarankan hanya menggunakan `cube`, `capsule`, `plane`, dan `material default`.
- Gunakan **asset** yang mendukung komunikasi game: **character**, **environment**, **props**, **animation**, **UI**, **audio**, dan **VFX**.
- Pilih sumber asset yang sesuai, seperti `Unity Asset Store`, `Kenney`, `itch.io`, `Mixamo`, atau asset buatan sendiri.
- Pastikan **style visual** konsisten, misalnya **low poly**, **stylized fantasy**, **sci-fi**, **dungeon**, **post-apocalyptic**, atau **cartoon**.
- Visual yang baik membantu perilaku sistem cerdas lebih mudah dibaca, diuji, dan dipresentasikan.

### Transisi ke Slide Berikutnya

Setelah asset dan kualitas visual mulai terbentuk, langkah berikutnya adalah memastikan bahwa semua elemen tersebut masuk ke dalam alur permainan yang jelas, yaitu **gameplay loop**.

---

## Slide 065 - Gameplay Loop

### Narasi

**Gameplay loop** adalah inti dari sebuah final project. Tanpa loop, mahasiswa mungkin sudah membuat scene, karakter, dan sistem perilaku, tetapi pemain tidak memiliki alasan untuk terus bermain. Loop memberi struktur: pemain melakukan sesuatu, menghadapi tantangan, mendapat hasil, lalu bergerak ke tujuan berikutnya.

Contoh loop pada slide ini dapat dibaca sebagai alur utama:

```text
Explore
    ↓
Encounter enemy
    ↓
Use agent-driven challenge
    ↓
Collect reward
    ↓
Progress to objective
    ↓
Win / Lose
```

Alur ini penting karena setiap tahap menjadi **input** bagi tahap berikutnya. Secara praktis, loop ini bisa dipahami sebagai berikut:

1. `Explore` — pemain bergerak di environment, mencari area, musuh, atau tujuan.
2. `Encounter enemy` — pemain bertemu lawan atau situasi yang memicu keputusan.
3. `Use agent-driven challenge` — sistem perilaku lawan memberi tekanan, misalnya memilih `state`, `action`, atau respons terhadap pemain.
4. `Collect reward` — pemain mendapat hasil dari tantangan, seperti poin, item, atau kemajuan cerita.
5. `Progress to objective` — reward atau keputusan membawa pemain ke tujuan berikutnya.
6. `Win / Lose` — kondisi akhir yang menutup loop dan memberi makna pada permainan.

Tanpa loop yang jelas, proyek cenderung terasa seperti **demo teknis**: ada objek, ada animasi, ada sistem, tetapi tidak ada permainan yang bisa dirasakan. Mahasiswa perlu memastikan bahwa setiap sistem yang dibuat terhubung ke loop, bukan berdiri sendiri.

Sistem perilaku lawan harus mendukung loop tersebut. Artinya, lawan tidak cukup hanya diam atau bergerak acak. Lawan perlu memiliki respons yang membuat pemain harus berpikir, misalnya `detect`, `chase`, `attack`, `retreat`, atau `choose action`. Respons ini membuat tantangan terasa hidup dan memberi alasan bagi pemain untuk menggunakan strategi.

Sebelum lanjut, mahasiswa harus bisa menjawab pertanyaan sederhana: apa yang dilakukan pemain, apa yang dilakukan sistem, apa yang didapat pemain, dan bagaimana pemain tahu bahwa ia menang atau kalah. Jika jawaban ini belum jelas, final project belum memiliki struktur permainan yang utuh.

### Inti yang Harus Ditekankan

- **Gameplay loop** adalah struktur utama yang membuat final project terasa seperti game, bukan sekadar demo.
- Setiap tahap loop harus terhubung: `Explore`, `Encounter enemy`, tantangan, reward, progres, dan `Win / Lose`.
- Sistem perilaku lawan harus mendukung loop dengan memberi tantangan yang responsif dan bermakna.

### Transisi ke Slide Berikutnya

Setelah loop permainan terbentuk, tahap berikutnya adalah memastikan pemain dapat membaca apa yang terjadi dalam loop tersebut.

---

## Slide 066 - Feedback Player

### Narasi

Pada tahap final project, **feedback player** menjadi bagian penting dari desain game. Tanpa feedback, pemain tidak tahu apakah aksi yang dilakukan berhasil, musuh sedang apa, atau tujuan berikutnya berada di mana. Dalam konteks **Game Cerdas**, feedback bukan hanya soal tampilan, tetapi juga cara sistem AI berkomunikasi dengan pemain.

Secara sederhana, alurnya adalah:

```text
Player melakukan aksi
    ↓
Game / AI merespons
    ↓
Feedback ditampilkan
    ↓
Player memahami situasi
    ↓
Player mengambil keputusan berikutnya
```

Beberapa contoh feedback yang umum digunakan antara lain:

- **health bar** untuk menunjukkan kondisi pemain atau NPC.
- **enemy alert indicator** untuk memberi tahu bahwa musuh sedang waspada, mengejar, atau menyerang.
- **attack feedback** seperti animasi, efek partikel, atau getaran saat serangan terjadi.
- **damage number** untuk memperjelas hasil serangan.
- **sound effect** untuk memperkuat respons dari lingkungan atau karakter.
- **objective marker** untuk mengarahkan pemain ke tujuan.
- **win/lose screen** untuk menutup satu putaran gameplay.
- **AI state debug** untuk membantu pengembang melihat perilaku NPC.
- **minimap opsional** untuk membantu navigasi di area yang lebih besar.

Dalam implementasi Unity, feedback ini biasanya terhubung dengan komponen seperti `UI`, `Animator`, `AudioSource`, `ParticleSystem`, atau `Canvas`. Untuk NPC, feedback juga bisa berasal dari sistem AI, misalnya perubahan state pada **Finite State Machine**, aktivasi node pada **Behavior Tree**, atau perubahan target pada sistem **steering**. Dengan begitu, pemain dapat membaca perilaku AI tanpa harus memahami seluruh logika di baliknya.

Hal yang perlu dipahami mahasiswa adalah bahwa feedback yang baik harus **jelas**, **cepat**, dan **konsisten**. Jika musuh sedang dalam state `Chase`, pemain sebaiknya melihat indikator yang berbeda dari state `Idle`. Jika pemain terkena serangan, feedback harus muncul segera agar pemain dapat bereaksi. Feedback yang lambat atau ambigu akan membuat game terasa tidak adil, meskipun sistem AI di belakangnya sudah berjalan dengan benar.

Untuk final project, mahasiswa tidak perlu membuat semua jenis feedback sekaligus. Yang penting adalah memilih feedback yang mendukung **gameplay loop** dan membantu pemain memahami interaksi dengan NPC. Feedback juga menjadi dasar untuk evaluasi: apakah AI terasa hidup, apakah tantangan dapat dibaca, dan apakah pemain tahu apa yang harus dilakukan selanjutnya.

### Inti yang Harus Ditekankan

- **Feedback player** membantu pemain memahami hasil aksi, kondisi NPC, dan tujuan game.
- Feedback yang baik harus **jelas**, **cepat**, dan **konsisten** dengan perilaku AI.
- Dalam final project, feedback dapat berupa UI, efek visual, suara, marker, atau indikator state NPC.
- **AI state debug** penting untuk memastikan perilaku NPC berjalan sesuai desain, tetapi detailnya akan dibahas lebih lanjut.

### Transisi ke Slide Berikutnya

Setelah pemain mendapat feedback, pengembang juga perlu memastikan bahwa perilaku AI dapat diperiksa dan diuji. Oleh karena itu, langkah berikutnya adalah membahas **AI Debug Requirement**, yaitu fitur debug yang membantu melihat state, target, dan perilaku NPC secara lebih transparan.

---

## Slide 067 - AI Debug Requirement

### Narasi

Pada tahap final project, mahasiswa tidak cukup hanya membuat NPC yang bergerak atau menyerang. Sistem AI juga harus bisa diamati, dicek, dan dijelaskan. Karena itu, final project sebaiknya dilengkapi **mode debug** yang menampilkan kondisi internal AI secara real-time.

Mode debug penting karena perilaku AI sering kali tampak “aneh” saat gameplay: musuh tidak mengejar, target berganti terlalu cepat, pathfinding berhenti, atau keputusan berubah tanpa alasan jelas. Dengan debug, mahasiswa dapat melihat apa yang sebenarnya terjadi di balik layar.

Minimum informasi yang sebaiknya ditampilkan adalah:

- **state enemy**, misalnya `idle`, `patrol`, `chase`, `attack`, `flee`, atau `dead`.
- **target enemy**, yaitu objek yang sedang dipilih sebagai target.
- **vision range**, untuk melihat apakah player berada dalam jangkauan deteksi.
- **path/destination**, agar arah pergerakan dan tujuan NPC dapat diverifikasi.
- **current behavior**, misalnya `FSM`, `behavior tree`, `utility AI`, atau `steering` yang sedang aktif.
- **difficulty multiplier** jika ada, untuk menunjukkan pengaruh parameter kesulitan terhadap AI.
- **seed** jika ada PCG, agar hasil procedural dapat direproduksi dan dibandingkan.
- **utility score** jika ada Utility AI, untuk melihat nilai preferensi tiap aksi.

Informasi ini tidak harus ditampilkan semua secara permanen. Mahasiswa dapat memilih subset yang relevan, lalu menampilkannya melalui beberapa cara:

- **UI text** di layar, misalnya panel kecil di pojok.
- **world-space label** di atas NPC, misalnya nama state atau target.
- `Gizmos` di Unity, misalnya garis pandangan, area deteksi, atau path.
- **colored lines**, misalnya garis biru untuk path, merah untuk target, dan cyan untuk vision range.
- **console log terbatas**, misalnya log saat state berubah atau target berganti.

Yang perlu ditekankan adalah debug bukan sekadar “menampilkan angka”. Debug harus membantu mahasiswa menjawab pertanyaan: mengapa NPC melakukan tindakan tertentu? Apakah input sensor benar? Apakah keputusan yang diambil sesuai desain? Apakah parameter difficulty atau seed memengaruhi hasil secara konsisten?

Sebelum lanjut ke evaluasi, mahasiswa perlu memastikan bahwa AI final project tidak hanya berjalan, tetapi juga dapat dijelaskan. Jika perilaku AI tidak bisa diamati, maka sulit membuktikan bahwa sistem AI benar-benar memengaruhi gameplay.

### Inti yang Harus Ditekankan

- Final project sebaiknya memiliki **mode debug** agar perilaku AI dapat diamati dan divalidasi.
- Minimum debug mencakup `state enemy`, `target enemy`, `vision range`, `path/destination`, `current behavior`, serta parameter seperti `difficulty multiplier`, `seed`, atau `utility score` bila digunakan.
- Debug dapat ditampilkan lewat UI text, world-space label, `Gizmos`, colored lines, atau console log terbatas.
- Tujuan utama debug adalah menjelaskan alasan keputusan AI, bukan hanya menampilkan data mentah.

### Transisi ke Slide Berikutnya

Setelah mode debug tersedia, langkah berikutnya adalah menilai apakah AI final project benar-benar terintegrasi, dapat dijelaskan, dan memberi dampak nyata pada gameplay.

---

## Slide 068 - Evaluasi AI Final Project

### Narasi

**Evaluasi final project** menjadi tahap penting setelah mahasiswa membangun perilaku **agent** dalam game. Pada tahap ini, fokusnya bukan hanya memastikan program dapat berjalan tanpa error, tetapi memastikan bahwa perilaku yang dibuat benar-benar terasa dalam **gameplay**. Dengan kata lain, mahasiswa perlu membuktikan bahwa sistem kecerdasan yang diimplementasikan memiliki peran nyata, bukan sekadar script tambahan yang tidak memengaruhi pengalaman bermain.

Rubrik evaluasi dapat mencakup beberapa aspek berikut:

```text
AI correctness
AI integration
Decision making
Navigation/movement
Tactical/adaptive behavior
Debug visualization
Gameplay impact
Code structure
Polish
Presentation
```

Rubrik ini dapat dibaca sebagai tiga kelompok utama:

- **Correctness dan integration**: perilaku agent harus benar secara logika dan terhubung dengan sistem game, misalnya perubahan `state`, pemilihan `target`, atau eksekusi `action` yang sesuai desain.
- **Decision making, navigation/movement, dan tactical/adaptive behavior**: agent perlu menunjukkan alasan perilaku, seperti memilih jalur, menghindari rintangan, mengejar target, atau menyesuaikan strategi berdasarkan kondisi tertentu.
- **Debug visualization, gameplay impact, code structure, polish, dan presentation**: mahasiswa harus mampu menampilkan bukti perilaku, menjelaskan dampak gameplay, menjaga kualitas kode, serta mempresentasikan keputusan desain dengan jelas.

Aspek **gameplay impact** adalah kunci dari evaluasi ini. Perilaku agent tidak cukup hanya ada di balik kode; ia harus menghasilkan perubahan yang dapat diamati oleh player. Misalnya, musuh dapat memilih target yang lebih masuk akal, bergerak melalui jalur yang lebih natural, atau menjadi lebih menantang ketika kondisi game berubah. Jika perilaku tersebut tidak terlihat dampaknya, maka mahasiswa perlu meninjau ulang integrasi, parameter, atau desain perilaku itu sendiri.

Sebelum lanjut ke pembahasan rubrik yang lebih terukur, mahasiswa perlu memahami bahwa evaluasi final project bukan hanya soal ada atau tidaknya script. Yang dinilai adalah bukti bahwa perilaku agent **benar**, **terintegrasi**, **dapat dijelaskan**, dan **memberi dampak nyata** pada gameplay.

### Inti yang Harus Ditekankan

- Evaluasi final project harus membuktikan bahwa perilaku agent memberi dampak nyata pada gameplay, bukan hanya ada script yang tidak terlihat pengaruhnya.
- Rubrik mencakup kebenaran perilaku, integrasi, pengambilan keputusan, navigasi, perilaku taktis/adaptif, debug, dampak gameplay, struktur kode, polish, dan presentasi.
- Mahasiswa perlu menyiapkan bukti yang dapat diamati, misalnya perubahan `state`, pemilihan `target`, jalur pergerakan, atau respons agent terhadap kondisi game.

### Transisi ke Slide Berikutnya

Selanjutnya, kita akan melihat contoh rubrik penilaian yang lebih konkret, termasuk pembagian bobot untuk setiap komponen agar mahasiswa dapat memahami prioritas evaluasi final project.

---

## Slide 069 - Contoh Rubrik Penilaian

_Belum ada narasi terpilih untuk slide ini._

---

## Slide 070 - Dokumentasi Final Project

### Narasi

Dokumentasi final project berfungsi sebagai penjelasan sistem yang dibuat tim, bukan sekadar lampiran. Pembaca perlu memahami apa yang dibangun, bagaimana game berjalan, dan bagaimana perilaku agent dihasilkan oleh sistem yang dirancang.

Dokumentasi yang baik sebaiknya menjawab alur pemahaman berikut:

- **Konsep game**: genre, tujuan pemain, aturan dasar, dan nilai hiburan yang ingin dicapai.
- **Gameplay loop**: aktivitas berulang yang membuat pemain terus berinteraksi, seperti eksplorasi, pertempuran, penyelesaian tugas, atau pengumpulan sumber daya.
- **Teknik kecerdasan buatan**: jenis perilaku yang diimplementasikan, misalnya `pathfinding`, `FSM`, `Behavior Tree`, `steering`, `decision making`, atau `learning agent`.
- **Arsitektur sistem**: hubungan antar komponen, misalnya `Player`, `Perception`, `Memory`, `Behavior Tree`, `NavMeshAgent`, dan `Combat Action`.
- **Diagram alur**: visualisasi proses keputusan dan navigasi agar sistem mudah dibaca.
- **Parameter penting**: nilai yang memengaruhi perilaku, seperti jarak deteksi, kecepatan, agresi, cooldown, atau bobot keputusan.
- **Cara menjalankan game**: langkah instalasi, build, scene utama, atau konfigurasi awal.
- **Skenario uji**: kondisi yang diuji, misalnya musuh mengejar, menghindari rintangan, berpindah `state`, atau menyesuaikan kesulitan.
- **Hasil evaluasi**: bukti bahwa perilaku berjalan sesuai tujuan, termasuk observasi, log, atau perbandingan sebelum dan sesudah perbaikan.
- **Pembagian tugas**: kontribusi anggota tim agar tanggung jawab pengembangan jelas.

Yang perlu ditekankan adalah dokumentasi harus menjelaskan **mengapa** perilaku agent muncul, bukan hanya menyatakan bahwa agent bergerak atau menyerang. Jika ada `Behavior Tree`, jelaskan node apa yang aktif dan kapan berpindah. Jika ada `NavMeshAgent`, jelaskan bagaimana `target`, `speed`, dan `obstacle avoidance` bekerja. Jika ada `FSM`, jelaskan `state`, transisi, dan kondisi pemicunya.

Dokumentasi singkat tetapi jelas lebih baik daripada panjang namun tidak menjelaskan sistem. Fokusnya adalah membuat pembaca dapat memahami alur keputusan, melihat parameter yang relevan, dan menilai apakah perilaku yang dihasilkan sesuai dengan desain game.

### Inti yang Harus Ditekankan

- Dokumentasi final project harus menjelaskan konsep, `gameplay loop`, teknik kecerdasan buatan, arsitektur, diagram, parameter, cara menjalankan, skenario uji, hasil evaluasi, dan pembagian tugas.
- Penjelasan perilaku agent harus teknis dan dapat ditelusuri, bukan hanya klaim bahwa NPC “pintar”.
- Dokumentasi yang singkat, terstruktur, dan fokus pada sistem keputusan lebih bernilai daripada laporan panjang yang tidak menjelaskan mekanisme.

### Transisi ke Slide Berikutnya

Setelah memahami isi dokumentasi yang perlu disiapkan, kita lanjut ke bagian yang membuat dokumentasi lebih mudah dibaca, yaitu diagram yang wajib ada untuk menunjukkan alur sistem perilaku agent.

---

## Slide 071 - Diagram yang Wajib Ada

### Narasi

Pada slide ini, kita masuk ke bagian yang sering menentukan apakah sistem AI final project terlihat jelas atau tidak. Mahasiswa diminta memiliki **minimal satu diagram arsitektur AI** dalam dokumentasi. Diagram ini penting karena dosen atau penguji tidak selalu memiliki waktu untuk membaca seluruh kode, sehingga diagram menjadi cara tercepat untuk memahami bagaimana sistem AI dirancang.

Tujuan utama diagram arsitektur AI adalah menunjukkan **alur keputusan dan alur data** dari input hingga aksi NPC. Diagram yang baik tidak hanya berisi kotak-kotak, tetapi juga memperlihatkan hubungan antar komponen: siapa yang menerima data, siapa yang memproses, dan siapa yang mengeksekusi hasil keputusan.

Contoh diagram arsitektur AI dasar yang bisa digunakan adalah sebagai berikut:

```text
Player
  ↓
Enemy Perception
  ↓
Enemy Memory
  ↓
Behavior Tree
  ↓
NavMeshAgent
  ↓
Combat Action
```

Diagram ini menggambarkan alur perilaku musuh yang cukup umum dalam game. Komponen `Player` menjadi sumber input utama, misalnya posisi pemain, jarak, arah, atau status serangan. Data tersebut kemudian masuk ke `Enemy Perception`, yaitu bagian yang menentukan apa yang bisa diketahui musuh, seperti apakah pemain terlihat, berada di luar jangkauan, atau sedang menyerang.

Selanjutnya, hasil persepsi disimpan atau diproses oleh `Enemy Memory`. Komponen ini penting karena NPC tidak selalu harus bereaksi hanya berdasarkan kondisi saat ini. Misalnya, musuh bisa mengingat posisi terakhir pemain sebelum pemain menghilang dari pandangan. Setelah itu, keputusan perilaku diambil oleh `Behavior Tree`, yang menentukan apakah musuh harus mengejar, menyerang, mundur, atau melakukan aksi lain.

Jika keputusan berupa pergerakan, maka `NavMeshAgent` digunakan untuk menjalankan navigasi di atas `NavMesh`. Setelah itu, aksi akhir seperti `Combat Action` dapat dieksekusi, misalnya menyerang, membidik, atau melakukan animasi pertarungan. Dengan diagram seperti ini, penguji dapat melihat bahwa sistem AI tidak hanya “menggerakkan musuh”, tetapi memiliki alur yang terstruktur dari persepsi, memori, keputusan, navigasi, hingga aksi.

Jika final project menggunakan **Dynamic Difficulty Adjustment** atau DDA, maka diagram tambahan sangat membantu. Contoh alur DDA adalah sebagai berikut:

```text
Performance Tracker
  ↓
Difficulty Manager
  ↓
Enemy Spawner
  ↓
Enemy Parameters
```

Diagram DDA menunjukkan bahwa sistem tidak hanya mengatur perilaku NPC, tetapi juga menyesuaikan tingkat kesulitan berdasarkan performa pemain. `Performance Tracker` mengumpulkan data seperti skor, kematian, waktu bertahan, atau jumlah musuh yang dikalahkan. Data tersebut kemudian diproses oleh `Difficulty Manager` untuk menentukan apakah kesulitan perlu dinaikkan atau diturunkan.

Hasil keputusan dari `Difficulty Manager` kemudian diteruskan ke `Enemy Spawner`, yang mengatur jumlah, jenis, atau waktu kemunculan musuh. Akhirnya, `Enemy Parameters` dapat diubah, misalnya kecepatan musuh, damage, cooldown serangan, atau jumlah musuh yang muncul. Dengan diagram ini, dosen dapat memahami bahwa DDA bukan sekadar menambah musuh secara acak, tetapi ada mekanisme pengukuran dan penyesuaian yang jelas.

Yang harus dipahami mahasiswa adalah bahwa diagram ini menjadi bukti bahwa sistem AI memiliki **arsitektur**, bukan hanya kumpulan script yang saling memanggil tanpa struktur. Diagram yang baik membantu menjelaskan tanggung jawab tiap komponen, arah aliran data, dan titik di mana keputusan AI dibuat.

Sebelum lanjut ke presentasi, pastikan mahasiswa sudah bisa menjelaskan diagramnya dengan kalimat sederhana: apa input AI, apa yang diproses, apa keputusan yang diambil, dan apa aksi yang terjadi di game.

### Inti yang Harus Ditekankan

- **Minimal satu diagram arsitektur AI** wajib ada untuk menjelaskan sistem AI final project.
- Diagram harus menunjukkan **alur data dan alur keputusan**, bukan hanya daftar komponen.
- Komponen seperti `Enemy Perception`, `Enemy Memory`, `Behavior Tree`, `NavMeshAgent`, dan `Combat Action` membantu menjelaskan perilaku NPC secara bertahap.
- Jika ada DDA, diagram tambahan seperti `Performance Tracker` → `Difficulty Manager` → `Enemy Spawner` → `Enemy Parameters` sangat penting.
- Diagram membantu dosen memahami sistem AI dengan cepat dan menilai apakah arsitektur AI sudah terstruktur.

### Transisi ke Slide Berikutnya

Setelah diagram arsitektur AI siap, langkah berikutnya adalah menyusun presentasi final project agar alur penjelasan, demo gameplay, dan evaluasi AI dapat disampaikan secara runtut.

---

## Slide 072 - Presentasi Final Project

### Narasi

Pada slide ini, kita masuk ke bagian akhir pengembangan final project, yaitu cara mempresentasikan hasil kerja. Fokusnya bukan hanya menampilkan game, tetapi menjelaskan bagaimana sistem perilaku dibangun, diuji, dan dibuktikan.

Secara intuitif, presentasi yang baik harus menjawab tiga hal: **game ini tentang apa**, **bagaimana agen mengambil keputusan**, dan **apa bukti bahwa perilaku tersebut benar-benar berjalan**.

Struktur presentasi yang disarankan adalah:

```text
1. Judul dan anggota
2. Konsep game
3. Gameplay loop
4. Teknik AI yang digunakan
5. Arsitektur AI
6. Demo gameplay
7. Demo AI debug
8. Evaluasi / hasil pengujian
9. Kendala dan pengembangan
10. Kesimpulan
```

Struktur ini sebaiknya dibaca sebagai **alur argumentasi**, bukan sekadar daftar isi.

- **Identitas dan konsep**: bagian `Judul`, `anggota`, `Konsep game`, dan `Gameplay loop` memberi konteks awal. Mahasiswa perlu menjelaskan premis game dan aktivitas utama pemain secara singkat.
- **Teknik dan arsitektur**: bagian `Teknik AI yang digunakan` dan `Arsitektur AI` menjelaskan metode perilaku, misalnya state machine, behavior tree, steering, pathfinding, atau learning. Arsitektur sebaiknya didukung diagram alur dari persepsi, memori, keputusan, hingga aksi.
- **Demo dan debug**: bagian `Demo gameplay` menunjukkan game dapat dimainkan, sedangkan `Demo AI debug` memperlihatkan keputusan internal agen. Ini penting agar penguji tidak hanya melihat hasil akhir, tetapi juga proses di baliknya.
- **Evaluasi dan refleksi**: bagian `Evaluasi / hasil pengujian`, `Kendala dan pengembangan`, serta `Kesimpulan` menunjukkan bahwa mahasiswa mampu menilai kualitas sistem, memahami batasannya, dan merencanakan perbaikan.

Hal penting yang harus dipahami mahasiswa adalah bahwa **demo harus disiapkan dengan skenario yang jelas**. Demo bukan sekadar menjalankan game tanpa tujuan, tetapi menampilkan urutan kejadian yang bisa diamati: pemain melakukan aksi, agen merespons, keputusan terlihat, dan hasil perilaku dapat dijelaskan.

### Inti yang Harus Ditekankan

- Presentasi final project harus runtut: konsep, gameplay, teknik, arsitektur, demo, evaluasi, dan refleksi.
- Bagian teknis harus bisa dijelaskan dengan alur yang jelas: input, proses, output, dan hasil perilaku.
- Demo harus berbasis skenario, bukan sekadar menjalankan game tanpa tujuan.
- Setiap klaim teknis sebaiknya didukung bukti, misalnya diagram, log, debug view, atau hasil pengujian.

### Transisi ke Slide Berikutnya

Dengan struktur ini, kita sudah tahu apa saja yang harus ditampilkan dalam presentasi final project. Selanjutnya, kita akan melihat apa yang membuat demo menjadi baik, yaitu urutan kejadian yang memperlihatkan perilaku agen secara jelas dan mudah dipahami.

---

## Slide 073 - Demo yang Baik

_Belum ada narasi terpilih untuk slide ini._

---

## Slide 074 - Kriteria Project yang Baik

### Narasi

Setelah membahas bagaimana demo final project sebaiknya ditampilkan, kita perlu memahami apa yang membuat sebuah project dapat dinilai baik. Kriteria ini penting karena project yang baik tidak selalu berarti project dengan fitur paling banyak. Yang lebih penting adalah project tersebut dapat dimainkan, sistem kecerdasan buatan yang dibangun dapat diamati, dan mahasiswa mampu menjelaskan bagaimana agent mengambil keputusan.

**Scope realistis** adalah fondasi utama. Mahasiswa sebaiknya memilih masalah yang cukup jelas, misalnya NPC yang melakukan patrol, mengejar pemain, mencari posisi terakhir, atau menyesuaikan perilaku berdasarkan kondisi tertentu. Jika scope terlalu besar, project berisiko tidak selesai, tidak stabil, atau hanya menampilkan permukaan tanpa kedalaman. Lebih baik membangun satu sistem perilaku yang bisa dijelaskan secara utuh daripada banyak fitur yang tidak saling terhubung.

Sistem kecerdasan buatan harus **terlihat jelas** dalam gameplay. Artinya, perilaku NPC tidak hanya muncul sebagai gerakan visual, tetapi ada alasan di baliknya. Misalnya, NPC berpindah dari state `Patrol` ke `Chase` karena pemain masuk ke area deteksi, lalu berpindah ke `Search` setelah kehilangan target. Jika ada pathfinding, mahasiswa harus bisa menunjukkan bahwa NPC memilih rute berdasarkan lingkungan, bukan hanya bergerak lurus ke arah pemain.

Gameplay yang menyenangkan juga menjadi kriteria penting. Sistem kecerdasan buatan seharusnya mendukung pengalaman bermain, bukan hanya menjadi elemen teknis yang berdiri sendiri. Jika NPC terlalu mudah dikalahkan, terlalu lambat, atau berperilaku tidak konsisten, mahasiswa akan sulit menunjukkan bahwa sistem tersebut benar-benar bekerja. Karena itu, parameter seperti `moveSpeed`, `detectionRange`, `alertLevel`, dan `searchTime` sebaiknya dapat diubah agar perilaku agent bisa diuji dan disesuaikan.

Ketersediaan **debug mode** sangat menentukan kualitas project. Debug mode membantu mahasiswa menjelaskan keputusan agent secara transparan. Misalnya, debug dapat menampilkan state aktif, target yang sedang dikejar, posisi terakhir pemain, jalur yang dipilih, atau tingkat kewaspasan NPC. Tanpa debug, evaluator hanya melihat hasil akhir, tetapi tidak dapat memahami proses di baliknya.

Project yang buruk biasanya memiliki masalah konseptual yang sama: terlalu ambisius, tidak playable, sistem kecerdasan buatan tidak terlihat, hanya menampilkan asset visual, banyak bug, tidak memiliki debug, dan mahasiswa tidak mampu menjelaskan keputusan agent. Oleh karena itu, sebelum lanjut ke contoh project, mahasiswa perlu memastikan bahwa project mereka memenuhi kriteria dasar: playable, observable, tunable, dan dapat dijelaskan.

### Inti yang Harus Ditekankan

- Project yang baik harus **realistis scope**-nya dan tetap playable.
- Sistem kecerdasan buatan harus **terlihat jelas** melalui perilaku NPC, state, sensor, pathfinding, atau keputusan agent.
- **Debug mode** penting untuk menjelaskan proses decision-making, bukan hanya menampilkan hasil akhir.
- Parameter seperti `moveSpeed`, `detectionRange`, `alertLevel`, dan `searchTime` sebaiknya dapat diubah untuk tuning dan demonstrasi.
- Project yang buruk biasanya terlalu ambisius, tidak stabil, tidak playable, dan tidak dapat dijelaskan secara teknis.

### Transisi ke Slide Berikutnya

Dengan kriteria ini, kita dapat menilai apakah sebuah project layak dikembangkan lebih lanjut. Selanjutnya, kita akan melihat contoh project pertama yang menunjukkan beberapa kriteria tersebut secara lebih konkret.

---

## Slide 075 - Contoh Project 1: Stealth Infiltration

### Narasi

Slide ini memberi contoh project yang konkret setelah kriteria project yang baik. Contoh yang dipilih adalah **Stealth Infiltration**, yaitu project di mana pemain menyusup ke fasilitas, mengambil data, lalu keluar tanpa tertangkap.

```text
Player menyusup ke fasilitas,
mengambil data,
lalu keluar tanpa tertangkap.
```

Alur ini penting karena memberikan tujuan gameplay yang jelas. Pemain tidak hanya bergerak bebas, tetapi harus membaca perilaku guard, memilih waktu yang aman, dan menghindari deteksi. Dari sisi perilaku game, guard menjadi pusat pengalaman.

Komponen perilaku utama pada project ini dapat dilihat sebagai sistem guard:

- **`guard patrol`**: guard bergerak mengikuti rute atau area patroli.
- **`FOV + raycast`**: guard mendeteksi pemain berdasarkan bidang pandang dan garis pandang.
- **`last known position`**: guard mengingat posisi terakhir pemain terlihat.
- **`chase`**: guard mengejar pemain setelah mendeteksi.
- **`search`**: guard mencari di sekitar posisi terakhir jika kehilangan kontak.
- **`shared alert`**: guard lain dapat mengetahui adanya ancaman.
- **`AI Director alarm`**: sistem mengatur tingkat alarm atau ketegangan berdasarkan kondisi permainan.

Secara berurutan, perilaku guard yang paling penting dapat dibaca sebagai:

1. `patrol`
2. `detect`
3. `chase`
4. `search`
5. kembali ke `patrol`

Bagian `FOV + raycast` adalah inti perception. `FOV` menentukan arah dan jarak pandang guard, sedangkan `raycast` memastikan pemain benar-benar terlihat tanpa terhalang dinding, pintu, atau objek lain. Dengan kombinasi ini, guard tidak mendeteksi pemain hanya karena dekat, tetapi karena berada dalam area pandang yang valid.

Bagian `last known position`, `chase`, dan `search` menunjukkan memory dan respons taktis. Ketika pemain keluar dari pandangan, guard tidak langsung kembali ke patroli. Guard bergerak ke posisi terakhir yang diketahui, melakukan pencarian, lalu kembali ke perilaku normal jika tidak menemukan pemain. Pola ini membuat pemain merasa guard "mengingat" dan menantang.

Fitur advanced seperti `alert level`, `security camera`, dan `adaptive guard spawn` memperluas project dari satu guard menjadi sistem keamanan. `alert level` dapat menaikkan atau menurunkan respons guard. `security camera` menambah sumber deteksi selain guard. `adaptive guard spawn` memungkinkan jumlah atau posisi guard menyesuaikan dengan kondisi permainan, misalnya area yang sering dimasuki pemain.

Project ini cocok untuk menunjukkan empat hal penting: **perception**, **memory**, **navigation**, dan **tactical response**. Mahasiswa dapat melihat bagaimana guard menerima input dari lingkungan, menyimpan informasi, memilih tujuan gerak, dan mengubah perilaku berdasarkan ancaman. Selain itu, project ini relatif mudah di-debug karena `state` guard, area deteksi, dan parameter alarm dapat divisualisasikan.

### Inti yang Harus Ditekankan

- **Stealth Infiltration** adalah contoh project dengan scope terbatas tetapi perilaku game-nya terlihat jelas.
- Perilaku guard harus membentuk alur: `patrol`, `detect`, `chase`, `search`, lalu kembali ke `patrol`.
- `FOV + raycast` menjelaskan perception, sedangkan `last known position` menjelaskan memory.
- Fitur advanced seperti `alert level`, `security camera`, dan `adaptive guard spawn` menunjukkan bahwa sistem perilaku game dapat berupa jaringan, bukan hanya satu karakter.

### Transisi ke Slide Berikutnya

Setelah melihat contoh project stealth yang menekankan deteksi dan respons individu, slide berikutnya akan beralih ke **Tactical Outpost Defense**, di mana fokusnya adalah pertahanan, koordinasi squad, dan pengambilan keputusan taktis dalam skala yang lebih luas.

---

## Slide 076 - Contoh Project 2: Tactical Outpost Defense

### Narasi

Pada slide ini kita melihat **Contoh Project 2: Tactical Outpost Defense**. Konsep utamanya cukup sederhana: **player mempertahankan `outpost` dari `enemy squad`**. Berbeda dari project stealth yang menekankan kemampuan player untuk menghindari deteksi, project ini menekankan bagaimana **kelompok agen AI** berperilaku sebagai satu tim yang terkoordinasi.

Intuisi praktisnya adalah: **outpost defense** tidak cukup hanya membuat banyak musuh bergerak ke arah player. Yang membuat project ini menarik adalah **tactical AI** dan **coordination**. Musuh harus memilih target, mencari posisi aman, melakukan serangan dari sisi, dan menggunakan kemampuan tambahan pada waktu yang tepat. Jika semua musuh hanya bergerak frontal tanpa peran, gameplay akan terasa kaku dan kurang menantang.

Beberapa komponen AI utama yang perlu dipahami adalah:

- **`enemy squad`**: sekelompok agen AI yang memiliki tujuan bersama, yaitu menekan player atau merebut/menghancurkan `outpost`.
- **`target selection`**: proses memilih target prioritas, misalnya player, turret, generator, atau titik lemah pertahanan.
- **`cover`**: penggunaan posisi perlindungan untuk mengurangi risiko damage dan memberi jeda taktis.
- **`flanking`**: gerakan menyamping atau memutar posisi untuk menghindari tembakan frontal.
- **`utility decision`**: keputusan kapan agen menggunakan kemampuan tambahan, misalnya granat, smoke, heal, atau attack burst.
- **`DDA wave scaling`**: penyesuaian kesulitan gelombang musuh berdasarkan performa player.
- **`AI Director intensity`**: pengendalian intensitas tekanan gameplay secara runtime, misalnya jumlah musuh, agresivitas, atau frekuensi serangan.

Fitur advanced yang membedakan project ini dari enemy AI biasa adalah:

- **`role assignment`**: pembagian peran antar agen, misalnya attacker, flanker, support, atau objective holder.
- **`cover reservation`**: mekanisme agar beberapa agen tidak berebut satu titik `cover` yang sama.
- **`adaptive wave`**: perubahan komposisi atau karakter gelombang musuh berdasarkan kondisi player.

Dari sisi desain, project ini cocok untuk menunjukkan bahwa AI game tidak selalu harus menjadi satu agen yang pintar. Kadang, kekuatan AI justru datang dari **koordinasi banyak agen sederhana**. Misalnya, satu agen menarik perhatian player, agen lain mencari `cover`, dan agen ketiga melakukan `flanking`. Pola seperti ini membuat pertahanan player terasa lebih hidup dan menuntut respons strategis.

Sebelum lanjut, mahasiswa perlu memahami bahwa **tactical AI** bukan hanya soal musuh bergerak, tetapi soal **pilihan tindakan yang kontekstual**. Keputusan seperti memilih target, mengambil cover, atau menggunakan utility harus didasarkan pada keadaan dunia game: jarak, damage, posisi player, kondisi `outpost`, dan tekanan gelombang. Pemahaman ini penting karena project berikutnya akan menggabungkan AI dengan sistem yang lebih dinamis.

### Inti yang Harus Ditekankan

- **`Tactical Outpost Defense`** menekankan **koordinasi `enemy squad`**, bukan hanya perilaku satu agen.
- Komponen penting meliputi **`target selection`**, **`cover`**, **`flanking`**, dan **`utility decision`**.
- **`DDA wave scaling`** dan **`AI Director intensity`** digunakan untuk menjaga tekanan gameplay tetap seimbang.
- Fitur advanced seperti **`role assignment`** dan **`cover reservation`** membuat perilaku musuh lebih natural dan tidak saling bertumpuk.

### Transisi ke Slide Berikutnya

Setelah memahami bagaimana AI dapat bekerja sebagai tim dalam pertahanan outpost, kita akan lanjut ke project yang lebih menggabungkan sistem: **Procedural Dungeon Hunter**, di mana AI enemy, level procedural, dan adaptive system bertemu dalam satu gameplay loop.

---

## Slide 077 - Contoh Project 3: Procedural Dungeon Hunter

### Narasi

Pada slide ini kita membahas **Contoh Project 3: Procedural Dungeon Hunter**. Konsep utamanya singkat:

```text
Player menjelajahi dungeon procedural
dan mengalahkan boss.
```

Intuisi praktisnya adalah project ini menggabungkan tiga hal penting: lingkungan yang dihasilkan secara prosedural, perilaku musuh yang dapat dinavigasi, dan sistem yang menyesuaikan diri terhadap player. Alur utamanya dapat dilihat sebagai berikut:

1. **Seed** menghasilkan dungeon yang deterministik.
2. **Dungeon validation** memastikan layout tetap playable.
3. **Enemy spawn rule** menempatkan musuh secara terkontrol.
4. **Enemy FSM/BT** dan **NavMesh** mengatur perilaku serta pathfinding.
5. **Adaptive loot** dan **DDA enemy scaling** menyesuaikan reward dan kesulitan.
6. Player mencapai dan mengalahkan **boss**.

**PCG dungeon** membuat setiap dungeon dapat berbeda, tetapi tetap dapat diuji. Penggunaan `seed` penting karena dungeon yang sama dapat dihasilkan ulang dari seed yang sama. Hal ini memudahkan debugging, pengujian pathfinding, dan analisis spawn. **Dungeon validation** juga menjadi prasyarat penting karena dungeon yang dihasilkan harus memiliki jalur yang valid, posisi spawn yang masuk akal, dan area yang bisa dinavigasi.

Bagian enemy dibangun dengan **FSM/BT**. **Finite state machine** cocok untuk perilaku yang lebih sederhana dan mudah dibaca, misalnya state `idle`, `patrol`, `chase`, atau `attack`. **Behavior tree** cocok jika keputusan musuh perlu lebih modular dan dapat dikombinasikan. Sementara itu, **NavMesh** memastikan musuh tidak hanya tahu target, tetapi juga dapat menemukan jalur yang valid di dungeon yang dihasilkan. Dalam implementasi Unity-like, `NavMesh` menjadi data navigasi, dan komponen seperti `NavMeshAgent` membantu enemy bergerak mengikuti jalur.

Fitur advanced pada slide ini perlu dipahami sebagai satu paket. **Seed** membuat generasi dungeon dapat diulang. **Dungeon validation** menjaga kualitas layout. **Enemy spawn rule** memastikan musuh muncul sesuai desain, bukan secara acak tanpa kontrol. **Player model sederhana** menjadi dasar bagi sistem adaptif untuk menilai performa player, misalnya dari health, damage, waktu, atau progres.

**Adaptive loot** dan **DDA enemy scaling** membuat project ini lebih dari sekadar dungeon crawler biasa. Adaptive loot dapat menyesuaikan reward berdasarkan kondisi player, sedangkan DDA enemy scaling menyesuaikan kekuatan atau jumlah musuh berdasarkan performa. Kedua sistem ini membutuhkan data player yang cukup, sehingga **player model sederhana** menjadi bagian penting agar penyesuaian tidak dilakukan secara sembarangan.

Sebelum lanjut, mahasiswa perlu memahami:

- **PCG** harus menghasilkan dungeon yang tetap playable, bukan hanya layout acak.
- **Enemy behavior** harus terhubung dengan lingkungan dan pathfinding.
- **Adaptive system** harus berbasis data player, sehingga perubahan difficulty dan loot dapat dijelaskan secara desain.

### Inti yang Harus Ditekankan

- **Procedural Dungeon Hunter** menggabungkan **PCG dungeon**, **enemy behavior**, dan **adaptive system** dalam satu project.
- **Seed** dan **dungeon validation** penting agar dungeon dapat diuji, di-debug, dan tetap playable.
- **Enemy FSM/BT** menentukan perilaku musuh, sedangkan **NavMesh** memastikan musuh dapat bergerak dan mengejar target di dungeon yang valid.
- **Adaptive loot** dan **DDA enemy scaling** membuat game menyesuaikan reward dan kesulitan berdasarkan performa player.
- **Player model sederhana** menjadi dasar data untuk sistem adaptif, sehingga perubahan difficulty tidak sembarangan.

### Transisi ke Slide Berikutnya

Setelah memahami bagaimana dungeon procedural, enemy behavior, dan adaptive system dapat digabungkan, kita lanjut ke project berikutnya yang lebih fokus pada combat adaptif dalam arena, yaitu **Robot Arena Adaptive Combat**.

---

## Slide 078 - Contoh Project 4: Robot Arena Adaptive Combat

### Narasi

Slide ini memperkenalkan **Contoh Project 4: Robot Arena Adaptive Combat**. Konsep utamanya sederhana: `player` bertarung melawan robot dalam arena. Kesederhanaan ini disengaja, karena fokusnya bukan pada dunia besar atau banyak mekanik, melainkan pada bagaimana perilaku robot dibuat **terukur**, **bisa diamati**, dan **bisa menyesuaikan diri** terhadap performa pemain.

Dalam project ini, robot tidak cukup hanya memiliki state machine sederhana. Robot menggunakan **Utility AI**, yaitu pendekatan decision making yang menilai beberapa tindakan berdasarkan skor. Tindakan utama yang dibahas adalah `attack`, `flee`, dan `take_cover`. Setiap tindakan memiliki nilai utilitas yang berubah tergantung kondisi, misalnya jarak ke pemain, kesehatan robot, ancaman, dan keberadaan cover. Robot kemudian memilih tindakan dengan skor tertinggi.

Pendekatan ini memberi intuisi penting: perilaku robot tidak selalu harus dikunci dalam aturan biner. Dengan Utility AI, robot bisa tampak lebih "menghitung" karena beberapa perilaku dapat bersaing secara bersamaan. Misalnya, robot yang masih sehat cenderung memilih `attack`, tetapi ketika kesehatan menurun dan ancaman tinggi, skor `flee` atau `take_cover` bisa meningkat.

Selain perilaku individu, project ini juga memasukkan **adaptive difficulty**. Sistem ini memantau `player performance tracking`, misalnya tingkat kesulitan yang dirasakan pemain, jumlah kekalahan, atau pola permainan. Hasilnya digunakan untuk mengatur `difficulty multiplier`, sehingga robot tidak terasa terlalu lemah atau terlalu brutal. Ini penting agar pengalaman bermain tetap menantang tetapi tetap adil.

Komponen lain yang perlu dipahami adalah **AI Director wave control**. AI Director berperan mengatur gelombang pertempuran, misalnya kapan robot muncul, berapa jumlahnya, atau tipe robot apa yang dikirim. Dengan wave control, arena tidak hanya berisi satu robot statis, tetapi menjadi ruang pertempuran yang bisa berubah seiring waktu.

Fitur advanced pada project ini meliputi **robot personality**, `difficulty multiplier`, dan `debug score`. Robot personality bisa diwujudkan sebagai perbedaan bobot utilitas antar robot, misalnya robot agresif lebih mudah memilih `attack`, sementara robot defensif lebih mudah memilih `take_cover`. `debug score` sangat penting karena memungkinkan mahasiswa melihat skor setiap tindakan secara langsung, sehingga perilaku robot tidak lagi menjadi kotak hitam.

Sebelum lanjut, mahasiswa perlu memahami tiga hal utama: bagaimana Utility AI menilai tindakan, bagaimana adaptive difficulty mengubah parameter permainan, dan bagaimana debug score membantu analisis perilaku. Project ini cocok untuk scope kecil tetapi AI jelas, karena semua komponen bisa diuji dalam satu arena tanpa perlu membangun dunia yang besar.

### Inti yang Harus Ditekankan

- **Utility AI** menilai tindakan seperti `attack`, `flee`, dan `take_cover` berdasarkan skor, bukan hanya aturan if-else sederhana.
- **Adaptive difficulty** menggunakan `player performance tracking` untuk menyesuaikan `difficulty multiplier` agar tantangan tetap seimbang.
- **AI Director wave control** mengatur gelombang robot sehingga arena memiliki dinamika pertempuran yang lebih hidup.
- **Robot personality** dan `debug score` membantu mahasiswa memahami perbedaan perilaku serta menguji keputusan robot secara transparan.

### Transisi ke Slide Berikutnya

Setelah memahami bagaimana satu robot dapat mengambil keputusan dan menyesuaikan diri dalam arena, kita akan melangkah ke project yang lebih menekankan perilaku kelompok, yaitu ekosistem predator dan prey dengan emergent behavior.

---

## Slide 079 - Contoh Project 5: Wildlife Ecosystem

### Narasi

Slide ini memperkenalkan **Contoh Project 5: Wildlife Ecosystem**. Konsep utamanya adalah:

```text
Player mengamati ekosistem predator dan prey.
```

Berbeda dari proyek yang berfokus pada pertarungan langsung, proyek ini menempatkan pemain sebagai pengamat. Dunia game tetap aktif karena interaksi antar agen, bukan karena pemain selalu menjadi pusat aksi.

Inti perilaku yang perlu dipahami adalah **group behavior** pada prey. Prey tidak perlu dikendalikan satu per satu dengan skenario besar. Mereka cukup mengikuti aturan lokal sederhana, misalnya:

- `separation`: menjaga jarak agar tidak bertumpuk.
- `alignment`: mengikuti arah rata-rata kelompok.
- `cohesion`: bergerak menuju pusat kelompok.

Dari aturan lokal inilah muncul **emergent behavior**, yaitu pola besar yang tidak ditulis eksplisit oleh desainer.

Sementara itu, predator menggunakan **perception** untuk mendeteksi prey. Jika prey terlihat, predator dapat beralih ke `pursue`. Jika tidak, predator dapat kembali ke `patrol` atau `wander`. Prey juga menggunakan `perception` untuk memilih `flee` ketika predator mendekat.

Alur keputusan sederhana dapat dipahami sebagai berikut:

1. Agen membaca hasil `perception`.
2. Prey memilih `flee` jika predator terlihat, selain itu memilih `flock`.
3. Predator memilih `pursue` jika prey terlihat, selain itu memilih `patrol`.
4. Sistem `adaptive spawn` menjaga populasi agar ekosistem tetap seimbang.

Fitur advanced pada proyek ini adalah **ecosystem balance**, **player disturbance**, dan **adaptive spawn**. `ecosystem balance` menjaga agar predator dan prey tidak terlalu banyak atau terlalu sedikit. `player disturbance` membuat kehadiran pemain memengaruhi perilaku agen, misalnya prey kabur saat pemain mendekat. `adaptive spawn` menyesuaikan jumlah agen yang muncul berdasarkan kondisi simulasi.

Sebelum lanjut, mahasiswa perlu memahami bahwa proyek ini cocok untuk menunjukkan bagaimana perilaku sederhana pada level agen dapat menghasilkan dunia yang terasa hidup. Fokus utamanya bukan pada satu NPC yang pintar, melainkan pada interaksi kolektif antara predator, prey, dan lingkungan.

### Inti yang Harus Ditekankan

- **Wildlife Ecosystem** adalah contoh proyek untuk menunjukkan **emergent behavior** dari aturan lokal.
- **Perception** menjadi kunci perpindahan perilaku antara `flock`, `flee`, `pursue`, dan `patrol`.
- Fitur advanced seperti **ecosystem balance**, **player disturbance**, dan **adaptive spawn** membuat simulasi ekosistem lebih stabil dan interaktif.

### Transisi ke Slide Berikutnya

Setelah memahami contoh ekosistem predator dan prey ini, langkah berikutnya adalah membawa konsep perilaku tersebut ke dalam proyek akhir, mulai dari review desain, pengecekan perilaku utama, hingga penyusunan skenario demo.

---

## Slide 080 - Integrasi AI dalam Proyek Akhir

### Narasi

Pada pertemuan ini, fokusnya bukan lagi menambah banyak fitur baru, tetapi memastikan seluruh sistem AI yang sudah dibangun benar-benar **terintegrasi** dalam proyek akhir. Mahasiswa perlu memposisikan diri seperti tim produksi: dari desain awal, implementasi, hingga demo yang dapat dievaluasi.

Aktivitas utamanya adalah **review desain project** terlebih dahulu. Tujuannya memastikan arah permainan, peran AI, dan tujuan belajar masih konsisten. Setelah itu, mahasiswa memastikan **AI utama berjalan** sesuai desain, misalnya perilaku NPC, respons terhadap pemain, atau alur keputusan yang sudah direncanakan.

Selanjutnya, proyek perlu dilengkapi **debug mode** agar perilaku AI dapat diamati saat pengujian. Debug mode membantu mahasiswa melihat apa yang sedang dilakukan sistem, parameter apa yang memengaruhi keputusan, dan bagian mana yang perlu diperbaiki.

Selain itu, mahasiswa menyusun **skenario demo** yang jelas, mengecek **scope** agar tidak melebar, menata **parameter** agar perilaku terasa stabil, serta menyiapkan **evaluasi** untuk menilai apakah proyek sudah mencapai target. Detail teknis akan dibahas di modul praktikum terpisah, tetapi pada slide ini mahasiswa perlu memahami bahwa integrasi adalah tahap pematangan, bukan tahap menambah fitur tanpa arah.

### Inti yang Harus Ditekankan

- Proyek akhir harus diarahkan pada **integrasi**, bukan sekadar penambahan fitur.
- **AI utama** harus berjalan sesuai desain dan dapat diamati melalui **debug mode**.
- **Skenario demo**, **scope**, **parameter**, dan **evaluasi** menentukan kesiapan proyek akhir.

### Transisi ke Slide Berikutnya

Setelah memahami aktivitas integrasi ini, langkah berikutnya adalah mengecek satu per satu komponen yang harus siap melalui checklist integrasi AI.

---

## Slide 081 - Checklist Integrasi AI

### Narasi

**Checklist** ini berfungsi sebagai verifikasi akhir bahwa seluruh komponen perilaku dalam proyek sudah terhubung, bukan hanya berjalan terpisah. Dalam game, satu sistem yang tampak sederhana sebenarnya terdiri dari beberapa lapisan: pemain, agen, persepsi, keputusan, navigasi, interaksi, dan kondisi akhir. Jika salah satu lapisan tidak berfungsi, demo dapat gagal meskipun komponen lain terlihat benar.

Checklist berikut membantu mahasiswa memeriksa hal-hal yang wajib ada sebelum UAS:

```text
[ ] Player controller berjalan
[ ] Enemy/NPC aktif
[ ] Perception berjalan
[ ] Decision AI berjalan
[ ] Navigation berjalan
[ ] Combat/objective berjalan
[ ] Fitur advanced berjalan
[ ] Debug mode tersedia
[ ] Win/lose condition tersedia
[ ] Demo scenario siap
```

Setiap item mewakili satu titik integrasi. `Player controller` memastikan input, movement, collision, dan state pemain dapat diandalkan. `Enemy/NPC aktif` memastikan agen tidak mati, tidak null, dan tetap update. `Perception` memastikan agen dapat mengenali target, jarak, atau kondisi lingkungan yang relevan. `Decision AI` memastikan agen memilih `action` yang sesuai dengan `state` saat ini, misalnya mengejar, menghindar, menyerang, atau kembali ke posisi awal.

`Navigation` memastikan agen dapat menuju `destination` yang valid, baik melalui pathfinding, steering, atau kombinasi keduanya. `Combat/objective` memastikan interaksi inti game berjalan, seperti damage, attack, pickup, quest, atau tujuan misi. `Fitur advanced` memastikan kemampuan tambahan yang sudah di-scope tidak menjadi dead code atau fitur yang tidak terintegrasi.

`Debug mode tersedia` penting karena dosen dan mahasiswa perlu melihat apa yang sedang terjadi di dalam sistem, bukan hanya hasil visual. `Win/lose condition` memastikan game memiliki akhir yang jelas dan dapat dievaluasi. `Demo scenario siap` memastikan proyek dapat dijalankan ulang secara stabil, dengan parameter yang konsisten, dan menunjukkan perilaku inti secara jelas.

Sebelum lanjut, mahasiswa perlu memahami bahwa checklist ini bukan sekadar formalitas. Ia adalah bukti bahwa proyek sudah mencapai kondisi minimum: sistem berjalan, perilaku agen masuk akal, dan demo dapat dipertanggungjawabkan secara teknis.

### Inti yang Harus Ditekankan

- **Checklist memastikan integrasi end-to-end**, bukan hanya komponen AI yang berjalan terpisah.
- Setiap item mewakili lapisan penting: kontrol pemain, agen aktif, persepsi, keputusan, navigasi, interaksi, debug, kondisi akhir, dan demo.
- Proyek siap UAS jika demo stabil, perilaku agen dapat dijelaskan, dan parameter tidak error.

### Transisi ke Slide Berikutnya

Setelah memastikan komponen utama sudah terintegrasi, langkah berikutnya adalah memeriksa apakah perilaku tersebut dapat diamati dan didiagnosis. Slide berikutnya akan membahas checklist debug, yaitu cara memastikan state, target, path, dan log perubahan perilaku dapat dilihat dengan jelas.

---

## Slide 082 - Checklist Debug AI

### Narasi

Slide ini melanjutkan dari checklist integrasi. Jika slide sebelumnya memastikan fitur sudah ada dan berjalan, slide ini memastikan perilaku NPC **dapat diamati, didiagnosis, dan dijelaskan** saat demo atau penilaian.

Debug AI bukan hanya mencari error di `console`. Debug yang baik membuat mahasiswa bisa menjawab pertanyaan: mengapa NPC berhenti, mengapa NPC mengejar target yang salah, mengapa path tidak muncul, atau mengapa keputusan berubah.

Checklist ini dapat dibaca sebagai alat observasi:

- **State NPC terlihat**: jika perilaku dibangun dengan `FSM`, `behavior tree`, atau sistem prioritas, mahasiswa perlu melihat state aktif seperti `idle`, `patrol`, `chase`, `attack`, atau `flee`.
- **Target NPC terlihat**: target bisa berupa player, musuh, objective, waypoint, atau item; jika target salah, perilaku selanjutnya biasanya ikut salah.
- **Vision/FOV terlihat**: sistem `perception` menjadi transparan, termasuk jangkauan pandangan, sudut pandang, occlusion, dan apakah NPC benar-benar "melihat" player.
- **Path/destination terlihat**: penting untuk `pathfinding` dan `steering`; mahasiswa perlu melihat path, destination, waypoint, dan apakah path masih valid.
- **Utility score terlihat jika ada**: jika proyek menggunakan utility AI, skor action seperti `chase`, `attack`, `defend`, atau `flee` perlu bisa dilihat.
- **Difficulty terlihat jika ada DDA**: nilai difficulty perlu terlihat agar mahasiswa bisa menjelaskan bagaimana difficulty berubah berdasarkan performa player.
- **Seed terlihat jika ada PCG**: seed membuat konten prosedural dapat direproduksi, sehingga demo dan pengujian bisa menggunakan kondisi yang sama.
- **Log state change tersedia**: log yang baik mencatat waktu, state lama, state baru, dan alasan perubahan perilaku.
- **Error console bersih**: menunjukkan tidak ada runtime error, null reference, missing component, atau path invalid.
- **Demo dapat diulang**: skenario dapat dijalankan ulang dengan kondisi konsisten, misalnya seed sama, parameter sama, dan posisi awal sama.

Poin-poin ini bukan sekadar fitur tambahan. Debug yang baik membuat mahasiswa bisa menunjukkan bahwa perilaku NPC bukan hasil kebetulan, tetapi berasal dari sistem yang dapat dijelaskan.

Sebelum lanjut, mahasiswa perlu memahami bahwa debug AI adalah bagian dari desain, bukan tambahan akhir. AI yang tidak bisa diamati sulit dinilai, sulit dituning, dan sulit dijelaskan.

### Inti yang Harus Ditekankan

- **Debug AI** membuat perilaku NPC dapat dilihat, dipahami, dan dijelaskan.
- State, target, `FOV`, path, utility score, difficulty, dan seed harus bisa diobservasi.
- `Log state change` membantu melacak alasan perubahan perilaku NPC.
- Error console bersih dan demo yang dapat diulang menunjukkan kesiapan proyek untuk dinilai.

### Transisi ke Slide Berikutnya

Setelah perilaku AI dapat diamati dan didiagnosis, langkah berikutnya adalah menilai kualitasnya. Slide berikutnya akan membahas checklist evaluasi AI, yaitu bagaimana AI memenuhi spesifikasi, memberi tantangan yang adil, stabil, dan berdampak pada gameplay.

---

## Slide 083 - Checklist Evaluasi AI

### Narasi

Pada slide ini, kita memasuki tahap **evaluasi AI** untuk final project. Jika debug memastikan sistem berjalan, evaluasi menilai apakah perilaku AI sudah sesuai tujuan desain game.

Artinya, mahasiswa tidak hanya bertanya, “apakah NPC bergerak?” tetapi juga, “apakah NPC terasa masuk akal, menantang, dan mendukung gameplay?”

Checklist ini membantu menilai kualitas AI secara jujur:

- **AI memenuhi spesifikasi**: perilaku sesuai aturan desain, misalnya musuh hanya menyerang saat terlihat atau NPC hanya memilih `action` yang tersedia.
- **AI memberi tantangan**: pemain harus berpikir, bukan sekadar menang karena AI lemah.
- **AI tidak terlalu mudah atau sulit**: tingkat kesulitan terasa seimbang dan dapat dipahami pemain.
- **AI tidak curang**: AI tidak memakai informasi yang tidak seharusnya, tidak teleport, tidak exploit bug, dan tidak melanggar aturan game.
- **AI stabil**: tidak crash, tidak stuck, tidak error berulang, dan tetap berfungsi dalam kondisi normal.
- **AI bisa dijelaskan**: perilaku dapat dijelaskan melalui `state`, `target`, `path`, `utility score`, atau `parameter` yang digunakan.
- **AI berdampak pada gameplay**: keputusan AI mengubah pengalaman bermain, bukan hanya dekorasi.
- **AI diuji pada beberapa skenario**: misalnya pemain menyerang, pemain kabur, NPC bertemu musuh, atau kondisi map sempit.
- **Parameter sudah dituning**: nilai seperti jarak deteksi, kecepatan, damage, atau bobot utility sudah disesuaikan.
- **Ada catatan keterbatasan**: mahasiswa mengakui bagian yang belum sempurna, misalnya AI belum menangani situasi tertentu.

Poin penting dari slide ini adalah **evaluasi tidak harus sempurna, tetapi harus jujur dan jelas**. Dalam final project, penilaian tidak hanya melihat apakah AI bekerja, tetapi juga apakah mahasiswa mampu menjelaskan alasan di balik perilaku AI.

Sebelum lanjut, mahasiswa perlu memahami bahwa AI yang baik bukan AI yang paling kompleks, melainkan AI yang sesuai tujuan game, dapat diuji, dan dapat dijelaskan.

### Inti yang Harus Ditekankan

- Evaluasi AI menilai **kualitas perilaku**, bukan hanya apakah sistem berjalan.
- AI harus **menantang, stabil, tidak curang, dan berdampak pada gameplay**.
- Perilaku AI harus **dapat dijelaskan** melalui desain, parameter, dan hasil pengujian.
- Keterbatasan AI harus dicatat secara **jujur dan jelas**.

### Transisi ke Slide Berikutnya

Setelah kita tahu cara menilai kualitas AI, langkah berikutnya adalah mengelola risiko agar final project tetap bisa diselesaikan dengan baik.

---

## Slide 084 - Manajemen Risiko Final Project

### Narasi

Setelah checklist evaluasi, langkah berikutnya adalah **manajemen risiko** pada final project. Dalam pengembangan game, fitur yang banyak tidak selalu menghasilkan nilai baik jika game tidak bisa dimainkan secara stabil. Mahasiswa perlu memandang final project sebagai produk kecil yang harus bisa dipresentasikan, diuji, dan dijelaskan dengan jelas.

Risiko yang paling sering muncul adalah **scope terlalu besar**. Jika scope tidak dikendalikan, waktu habis untuk membuat banyak sistem, tetapi tidak ada satu pun yang selesai dengan rapi. Dalam konteks game, ini bisa berarti banyak `NPC`, banyak `state`, banyak `pathfinding`, atau banyak `behavior tree`, tetapi gameplay inti tidak berjalan mulus.

Risiko berikutnya berkaitan dengan **agent** dan sistem perilaku. Jika agent belum selesai, game bisa terasa kosong atau tidak menantang. Jika `enemy stuck`, pemain kehilangan fokus. Jika `training ML-Agents` terlalu lama, tim tidak punya waktu untuk menguji hasil. Jika `PCG` menghasilkan level rusak, gameplay bisa tidak adil atau tidak bisa dimainkan. Semua risiko ini menunjukkan bahwa sistem yang canggih harus tetap memiliki jalur aman.

Mitigasi pertama adalah membuat **`fallback`**. `fallback` adalah perilaku cadangan ketika sistem utama gagal. Misalnya, jika agent tidak bisa memilih aksi yang tepat, agent bisa kembali ke state sederhana seperti `idle`, `patrol`, atau `chase target`. Jika level hasil `PCG` tidak valid, game bisa memakai level manual yang sudah diuji. Jika `build error` muncul, tim harus punya versi terakhir yang masih bisa dijalankan.

Mitigasi berikutnya adalah menyiapkan **`demo scene`** dan **`debug mode`**. `demo scene` adalah scene khusus yang menunjukkan fitur utama secara stabil, bukan seluruh game yang belum rapi. `debug mode` membantu dosen dan tim melihat `state`, `parameter`, `path`, atau keputusan agent. Dengan `debug mode`, mahasiswa bisa menjelaskan mengapa agent bergerak, berhenti, menyerang, atau gagal.

Sebelum final, perlu dilakukan **`freeze fitur`**. Artinya, fitur baru tidak boleh ditambah lagi jika fitur inti belum stabil. Fokus beralih ke **polishing**: memperbaiki bug, memperjelas `objective`, memastikan `win/lose condition` jelas, dan membuat demo tidak crash. Polishing lebih penting daripada menambah fitur yang berisiko.

Poin penting yang harus dipahami mahasiswa adalah: final project dinilai dari **kejelasan**, **stabilitas**, dan kemampuan menjelaskan sistem, bukan dari jumlah fitur. Jika satu sistem gagal, tim harus bisa menunjukkan alternatif, alasan kegagalan, dan cara memperbaikinya.

### Inti yang Harus Ditekankan

- Risiko utama final project bukan hanya bug, tetapi **scope** yang tidak terkendali.
- Setiap sistem penting perlu punya **`fallback`** agar game tetap bisa dimainkan.
- **`demo scene`**, **`debug mode`**, dan **`freeze fitur`** membantu presentasi tetap stabil dan mudah dijelaskan.

### Transisi ke Slide Berikutnya

Dengan memahami risiko dan mitigasinya, langkah berikutnya adalah menentukan prioritas mana yang harus diselesaikan lebih dulu menjelang UAS.

---

## Slide 085 - Prioritas Menjelang UAS

### Narasi

Menjelang UAS, mahasiswa perlu menggeser fokus dari pengembangan fitur baru ke **penyempurnaan sistem inti**. Dalam final project Game Cerdas, nilai utama tidak hanya ditentukan oleh banyaknya perilaku NPC, tetapi oleh apakah project dapat dimainkan, diuji, dan dijelaskan secara konsisten.

Prioritas yang ditampilkan pada slide dapat dibaca sebagai urutan kesiapan project:

```text
1. Gameplay bisa dimainkan
2. AI utama berjalan
3. Win/lose condition jelas
4. Debug mode tersedia
5. Demo stabil
6. Visual cukup baik
7. Dokumentasi jelas
```

Poin pertama dan kedua menjadi fondasi. **Gameplay bisa dimainkan** berarti pemain dapat melakukan aksi dasar, berinteraksi dengan lingkungan, dan mencapai tujuan permainan. **AI utama berjalan** berarti perilaku inti NPC atau sistem AI sudah cukup stabil untuk menunjukkan **decision making** yang dirancang, misalnya bergerak menuju target, memilih `action`, atau beralih `state` sesuai kondisi.

Poin ketiga dan keempat berkaitan dengan evaluasi. **Win/lose condition jelas** memastikan game memiliki batas hasil yang dapat diukur, misalnya melalui `score`, `health`, `objective`, atau `timer`. **Debug mode tersedia** membantu mahasiswa memeriksa perilaku AI secara transparan, seperti menampilkan `state`, `target`, `path`, atau `cooldown`, sehingga keputusan NPC dapat dijelaskan, bukan hanya ditampilkan.

Poin kelima, keenam, dan ketujuh menentukan kesiapan presentasi. **Demo stabil** berarti project dapat dijalankan berulang kali tanpa error fatal, crash, atau NPC yang stuck. **Visual cukup baik** membantu pembacaan scene, tetapi tidak boleh menggantikan fungsi inti. **Dokumentasi jelas** menjadi bukti bahwa mahasiswa memahami desain AI, alur sistem, batasan project, dan cara menjalankan game.

Inti dari slide ini adalah **disiplin scope**. Jika fitur inti belum stabil, penambahan fitur besar baru berisiko membuat project tidak selesai. Mahasiswa sebaiknya memastikan satu atau dua perilaku AI utama berjalan dengan baik, dapat diuji, dan dapat dijelaskan, sebelum memperluas sistem.

### Inti yang Harus Ditekankan

- **Gameplay bisa dimainkan** adalah prioritas pertama karena menjadi dasar evaluasi seluruh sistem.
- **AI utama berjalan** harus cukup stabil untuk menunjukkan perilaku inti, bukan harus sempurna.
- **Win/lose condition** harus jelas agar hasil permainan dan pengaruh AI dapat dinilai.
- **Debug mode** membantu mahasiswa menjelaskan perilaku AI, `state`, `target`, atau keputusan NPC.
- **Demo stabil** lebih penting daripada fitur tambahan yang belum teruji.
- **Visual dan dokumentasi** penting, tetapi tidak boleh menggantikan stabilitas sistem inti.
- Jangan menambah fitur besar baru jika fitur inti belum stabil.

### Transisi ke Slide Berikutnya

Setelah memahami prioritas kesiapan project, kita akan masuk ke pertanyaan diskusi untuk menguji pemahaman mahasiswa tentang perbedaan sistem AI, emergent behavior, debugging AI, dan cara menghubungkan AI dengan gameplay loop.

---

## Slide 086 - Pertanyaan Diskusi

### Narasi

Pada slide ini, kita tidak menambah materi baru, tetapi menguji apakah mahasiswa sudah mampu membedakan konsep inti yang telah dibahas. Pertanyaan diskusi ini berfungsi sebagai cermin pemahaman: mahasiswa tidak cukup hanya menjawab, tetapi harus mampu menjelaskan alasan di balik setiap pilihan desain. Fokus utamanya adalah hubungan antara **sistem AI**, **perilaku NPC**, dan **pengalaman pemain** dalam game.

Pertanyaan pertama dan kedua mengajak kita memisahkan dua peran penting dalam desain game. **Enemy AI** biasanya mengurus perilaku agen lokal, misalnya NPC bergerak, menyerang, menghindari bahaya, atau memilih target. Sementara itu, **AI Director** bekerja pada level sistem, mengatur intensitas permainan, spawn musuh, item bantuan, atau tekanan agar pengalaman pemain tetap seimbang. Karena itu, **adaptive system** harus memiliki **tujuan desain** yang jelas, misalnya menjaga tension, mencegah pemain terlalu kuat, atau membuat sesi permainan terasa hidup dan responsif.

Pertanyaan ketiga dan keempat membahas **emergent behavior**, yaitu perilaku yang muncul dari interaksi aturan sederhana, bukan dari satu skenario yang ditulis manual. Contoh sederhananya bisa berupa NPC yang saling menghalangi jalur, pemain menemukan strategi baru dari kombinasi item, atau sistem steering yang menghasilkan formasi tak terduga. Namun, emergent behavior perlu dibatasi karena jika terlalu bebas, game bisa menjadi tidak adil, tidak konsisten, atau sulit di-debug.

Pertanyaan kelima sampai ketujuh menekankan bahwa **debugging AI** berbeda dari debugging error biasa. Error biasa sering bersifat deterministik: input tertentu menghasilkan crash tertentu. AI bisa menghasilkan perilaku yang sama dari kondisi berbeda, atau perilaku yang benar secara teknis tetapi salah secara desain. Indikator AI yang baik antara lain responsif, konsisten, mudah dipahami pemain, tidak terlalu mudah atau terlalu sulit, dan tidak merusak **gameplay loop**. Untuk **fairness AI**, kita perlu mengevaluasi apakah pemain punya kesempatan yang wajar, apakah AI tidak mengeksploitasi celah, dan apakah hasil permainan bisa dijelaskan oleh aturan yang terlihat.

Pertanyaan terakhir membantu mahasiswa menyiapkan **final project** secara realistis. **AI debug mode** penting karena dosen dan tim perlu melihat state, keputusan, sensor, path, atau parameter yang sedang dipakai. Scope yang realistis berarti memilih satu atau dua sistem AI yang bisa diuji, bukan banyak sistem yang setengah jadi. Yang paling penting adalah AI harus terhubung dengan **gameplay loop**: setiap keputusan AI harus memengaruhi aksi pemain, dan setiap aksi pemain harus memberi umpan balik yang bisa diproses oleh AI.

### Inti yang Harus Ditekankan

- **Enemy AI** mengurus perilaku agen, sedangkan **AI Director** mengatur pengalaman dan intensitas secara sistemik.
- **Emergent behavior** menarik, tetapi harus dibatasi agar game tetap adil, stabil, dan mudah di-debug.
- **Debugging AI** membutuhkan observasi state, keputusan, sensor, dan konteks, bukan hanya mencari baris error.
- AI yang baik harus terasa **responsif**, **konsisten**, **fair**, dan mendukung **gameplay loop**.
- Final project perlu **AI debug mode** dan scope realistis agar sistem AI bisa dibuktikan bekerja, bukan hanya terlihat ada.

### Transisi ke Slide Berikutnya

Setelah memahami pertanyaan diskusi ini, kita akan menerapkannya secara langsung pada latihan desain **AI Director** untuk game arena survival, di mana input kondisi permainan akan diubah menjadi keputusan seperti `spawn enemy`, `spawn health item`, atau perubahan intensitas.

---

## Slide 087 - Latihan Desain AI Director

### Narasi

Slide ini mengajak mahasiswa merancang **sistem direktur** untuk game arena survival. Fokusnya bukan membuat satu musuh bergerak, tetapi mengatur ritme permainan secara keseluruhan. Direktur berperan seperti konduktor: membaca kondisi arena, lalu memutuskan kapan tekanan dinaikkan, kapan bantuan diberikan, dan kapan momen penting dipicu.

Intuisi praktisnya adalah **tension** atau ketegangan gameplay. Jika pemain terlalu kuat, permainan terasa datar. Jika pemain terlalu tertekan, permainan terasa tidak adil. Tugas direktur adalah menjaga pengalaman tetap berada di zona yang menantang tetapi masih bisa dikendalikan.

Input yang diberikan pada slide adalah sinyal kondisi game:

```text
player health
enemy count
time since last wave
kill rate
difficulty multiplier
```

Sinyal ini menjadi dasar keputusan. `player health` menunjukkan kondisi pemain. `enemy count` menunjukkan kepadatan ancaman. `time since last wave` membantu mengatur jeda dan ritme. `kill rate` memberi gambaran apakah pemain sedang menguasai permainan atau kesulitan. `difficulty multiplier` menjadi faktor pengali yang mengubah ambang keputusan.

Output yang harus dihasilkan adalah aksi tingkat tinggi:

```text
spawn enemy
spawn health item
increase intensity
decrease intensity
trigger elite enemy
```

Aksi ini tidak langsung menentukan perilaku lokal NPC, tetapi mengubah keadaan arena. Misalnya, `spawn enemy` menambah tekanan, `spawn health item` memberi pemulihan, `increase intensity` memperketat aturan spawn, `decrease intensity` memberi ruang napas, dan `trigger elite enemy` menciptakan momen puncak.

Dalam latihan, mahasiswa perlu menentukan lima hal:

1. **Aturan direktur**: hubungan antara input dan output, misalnya ambang `player health`, batas `enemy count`, atau nilai `kill rate`.
2. **Target tension**: tingkat ketegangan yang ingin dijaga, bisa berupa nilai `0` sampai `1`, label `low`, `medium`, `high`, atau target dinamis.
3. **Kapan spawn dilakukan**: berdasarkan `time since last wave`, `enemy count`, dan target tension.
4. **Kapan bantuan diberikan**: biasanya saat `player health` turun melewati ambang tertentu, tetapi perlu dibatasi agar tidak membuat pemain terlalu aman.
5. **Debug info yang ditampilkan**: nilai input, target tension, aksi terakhir, cooldown, aturan yang aktif, dan perubahan `difficulty multiplier`.

Pendekatan yang baik adalah memulai dengan aturan sederhana, lalu menambah kondisi. Contoh alur berpikirnya:

- Jika `player health` rendah dan `kill rate` rendah, pertimbangkan `spawn health item` atau `decrease intensity`.
- Jika `player health` tinggi dan `kill rate` tinggi, pertimbangkan `increase intensity` atau `trigger elite enemy`.
- Jika `enemy count` sudah tinggi, tahan `spawn enemy` sampai jumlah musuh turun.
- Jika `time since last wave` melewati batas, pertimbangkan spawn baru untuk menjaga ritme.

Yang penting dipahami mahasiswa adalah **separasi tanggung jawab**. Direktur tidak perlu menghitung pathfinding atau memilih serangan musuh. Ia hanya mengubah kondisi global yang kemudian dibaca oleh sistem NPC, wave manager, atau gameplay loop. Dengan pemisahan ini, perilaku game lebih mudah diuji dan di-debug.

Sebelum lanjut, mahasiswa perlu memastikan bahwa setiap aksi direktur dapat dijelaskan: input apa yang memicu, output apa yang dihasilkan, dan bagaimana efeknya terhadap pengalaman pemain. Debug info yang jelas akan sangat membantu ketika perilaku permainan terasa terlalu mudah, terlalu sulit, atau tidak konsisten.

### Inti yang Harus Ditekankan

- **Sistem direktur** mengatur ritme dan tekanan, bukan perilaku lokal satu musuh.
- Input seperti `player health`, `enemy count`, `time since last wave`, `kill rate`, dan `difficulty multiplier` menjadi dasar keputusan.
- Output seperti `spawn enemy`, `spawn health item`, `increase intensity`, `decrease intensity`, dan `trigger elite enemy` mengubah keadaan arena.
- **Target tension** membantu menjaga keseimbangan antara tantangan dan fairness.
- Debug info wajib menampilkan nilai input, aturan aktif, aksi terakhir, dan cooldown agar sistem mudah dianalisis.

### Transisi ke Slide Berikutnya

Setelah desain direktur dirumuskan, langkah berikutnya adalah mengevaluasi proyek game secara menyeluruh: apa sistem utamanya, apa input dan outputnya, bagaimana pengaruhnya terhadap gameplay, serta bagaimana cara menguji dan memperbaikinya.

---

## Slide 088 - Latihan Evaluasi Game AI

### Narasi

Slide ini meminta mahasiswa memilih satu proyek game kelompok dan melakukan evaluasi terhadap **sistem AI** yang sudah dibangun. Tujuannya bukan hanya memastikan algoritma berjalan, tetapi menilai apakah perilaku agen game dapat dijelaskan, diamati, diuji, dan benar-benar memengaruhi pengalaman bermain.

Delapan pertanyaan pada slide dapat digunakan sebagai alur diagnosis:

1. **AI utama**: tentukan agen atau sistem yang menjadi fokus, misalnya `enemy`, `NPC`, `AI director`, atau sistem adaptif.
2. **Input AI**: identifikasi data yang dibaca, seperti `player health`, `enemy count`, `time since last wave`, `kill rate`, `difficulty multiplier`, `distance`, atau `state` agen.
3. **Output AI**: jelaskan tindakan yang dihasilkan, misalnya `move`, `attack`, `flee`, `spawn enemy`, `spawn health item`, `increase intensity`, `decrease intensity`, atau `trigger elite enemy`.
4. **Pengaruh gameplay**: hubungkan keputusan AI dengan tension, pacing, tantangan, dan keseimbangan permainan.
5. **Debug**: tunjukkan cara mengamati perilaku AI, misalnya melalui `debug log`, `AI debug mode`, visualisasi `state`, `decision`, atau `action`.
6. **Uji**: jelaskan skenario pengujian, kondisi ekstrem, pengulangan, dan indikator keberhasilan.
7. **Kelemahan AI**: identifikasi masalah nyata, seperti perilaku yang mudah ditebak, agen yang terjebak, keputusan tidak stabil, atau kesulitan menjelaskan alasan keputusan.
8. **Rencana perbaikan**: rumuskan perbaikan yang realistis, terukur, dan dapat diselesaikan sebelum UAS.

Latihan ini melatih mahasiswa berpikir seperti desainer dan pengembang game: tidak cukup membuat agen bergerak atau menyerang, tetapi harus bisa menjelaskan mengapa agen mengambil keputusan tertentu dan bagaimana keputusan itu membuat gameplay lebih menarik.

### Inti yang Harus Ditekankan

- Evaluasi Game AI harus menilai sistem secara utuh: **input**, **keputusan**, **output**, dampak gameplay, debug, uji, kelemahan, dan rencana perbaikan.
- AI yang baik tidak hanya berjalan, tetapi **dapat dijelaskan**, **dapat diamati**, **dapat diuji**, dan memperbaiki pengalaman bermain.
- Sebelum UAS, kelompok perlu memilih perbaikan yang **realistis**, **terukur**, dan berdampak langsung pada kualitas demo.

### Transisi ke Slide Berikutnya

Dengan evaluasi ini, kita siap merangkum seluruh konsep Advanced Game AI dan kaitannya dengan pengembangan proyek akhir.

---

## Slide 089 - Ringkasan Materi

### Narasi

Slide ini menjadi titik konsolidasi dari pertemuan **Advanced Game AI & Final Project Development**. Pada tahap ini, fokusnya bukan lagi menambah satu algoritma baru, tetapi memastikan seluruh komponen AI yang telah dibahas dapat **diintegrasikan**, **diuji**, dan **dijelaskan** dalam proyek akhir.

```text
Advanced Game AI & Final Project Development
├── Game AI Integration
├── AI Director
├── Adaptive Systems
├── Emergent Behavior
├── Debugging Game AI
├── Evaluasi Game AI
├── Final Project Scope
├── AI Debug Mode
├── Demo Preparation
└── Integrasi AI dalam Proyek Akhir
```

Struktur ini menunjukkan alur kerja final project: dari desain perilaku AI, sampai AI benar-benar terlihat memengaruhi `gameplay`.

- **Game AI Integration** menekankan bahwa AI tidak berdiri sendiri; ia harus terhubung dengan `NPC`, `pathfinding`, `FSM`, `behavior tree`, `steering`, atau sistem keputusan lain.
- **AI Director** dan **Adaptive Systems** membahas bagaimana game dapat mengatur intensitas, tantangan, atau respons AI terhadap kondisi pemain.
- **Emergent Behavior** mengingatkan bahwa perilaku menarik sering muncul dari interaksi beberapa sistem sederhana, bukan dari satu aturan besar.
- **Debugging Game AI** dan **Evaluasi Game AI** memastikan perilaku AI dapat diamati, diukur, dan diperbaiki.
- **Final Project Scope**, **AI Debug Mode**, dan **Demo Preparation** mengarahkan mahasiswa menyiapkan proyek yang stabil, terlihat jelas, dan dapat dipresentasikan.

Pesan utamanya adalah: **Game AI yang baik bukan hanya algoritma yang berjalan**, tetapi sistem yang terintegrasi dengan `gameplay`, dapat diuji, dapat dijelaskan, dan membuat pengalaman bermain lebih menarik.

### Inti yang Harus Ditekankan

- Final project harus menunjukkan AI yang **terintegrasi**, bukan sekadar komponen terpisah.
- AI harus dapat **diamati**, **di-debug**, dan **dievaluasi** selama demo.
- Perilaku AI harus benar-benar **mendukung gameplay** dan dapat dijelaskan secara teknis.

### Transisi ke Slide Berikutnya

Dengan ringkasan ini, kita beralih ke penutup untuk memastikan mahasiswa memahami kesiapan proyek akhir dan hal-hal yang perlu diperhatikan sebelum presentasi serta demo.

---

## Slide 090 - Penutup

### Narasi

Slide terakhir ini berfungsi sebagai **penutup** sekaligus **persiapan UAS** untuk mata kuliah Game Cerdas. Pada tahap ini, fokusnya bukan lagi menambah algoritma baru, tetapi memastikan bahwa seluruh konsep yang telah dipelajari dapat diintegrasikan ke dalam proyek akhir yang utuh, dapat didemokan, dan dapat dijelaskan secara teknis.

Final project harus menunjukkan bahwa **Game AI** tidak hanya ada sebagai komponen di balik layar, tetapi benar-benar memengaruhi pengalaman bermain. Sebagai acuan, proyek akhir sebaiknya memenuhi poin berikut:

```text
Game playable
AI terlihat bekerja
AI terintegrasi dengan gameplay
Debug mode tersedia
Evaluasi jelas
Demo stabil
```

Artinya, mahasiswa tidak cukup hanya menampilkan NPC yang bergerak atau state machine yang berjalan. Mahasiswa perlu menunjukkan bagaimana **AI** mendukung tujuan gameplay, bagaimana perilaku agen dapat diamati, dan bagaimana sistem tersebut dapat diuji. **Debug mode** menjadi penting karena membantu dosen dan mahasiswa melihat proses pengambilan keputusan, perubahan state, pathfinding, atau parameter adaptif secara lebih transparan.

Pertemuan berikutnya adalah **UAS — Intelligent Game Project**, di mana mahasiswa akan mempresentasikan dan mendemokan proyek akhir. Oleh karena itu, persiapan yang paling penting adalah memastikan demo berjalan stabil, penjelasan teknis jelas, dan integrasi AI dengan gameplay dapat dipertanggungjawabkan.

### Inti yang Harus Ditekankan

- Final project harus berupa **game playable**, bukan sekadar kumpulan algoritma.
- **AI harus terlihat bekerja** dan terintegrasi dengan gameplay.
- **Debug mode** membantu menjelaskan perilaku agen secara teknis.
- **Evaluasi** harus jelas, baik dari sisi gameplay maupun implementasi AI.
- **Demo stabil** menjadi kunci keberhasilan presentasi UAS.

### Transisi ke Slide Berikutnya

Dengan slide penutup ini, mahasiswa dapat langsung beralih ke persiapan **UAS — Intelligent Game Project** untuk mempresentasikan dan mendemokan proyek akhir yang telah dikembangkan.
