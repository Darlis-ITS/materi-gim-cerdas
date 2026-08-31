# Narasi Game Cerdas - Pertemuan 00

## Rencana Pembelajaran, CPMK, dan Ringkasan Materi Semester

Sumber: markdown/pert00.md

---

## Slide 001 - Cover

### Narasi

Selamat datang di mata kuliah **Game Cerdas** untuk **S1 Teknik Informatika Semester 7**. Pertemuan 0 ini bukan materi teknis yang langsung masuk ke algoritma, melainkan **orientasi awal** agar mahasiswa memahami arah pembelajaran, target kompetensi, dan ekspektasi selama satu semester. Pada slide ini, kita melihat gambaran umum mata kuliah, tujuan pembelajaran, **CPMK**, rencana pembelajaran, alur materi, praktikum, proyek, dan sistem penilaian.

Mata kuliah ini dirancang agar mahasiswa tidak hanya memahami konsep **Game AI** secara teori, tetapi juga mampu menerapkannya dalam konteks pengembangan game. Selama semester, pembahasan akan bergerak dari pemahaman dasar perilaku agen, pengambilan keputusan, hingga implementasi dalam `Unity`. Mahasiswa akan mengikuti alur yang terstruktur: memahami materi, mencoba praktikum, mengerjakan **UTS Mini Project**, dan akhirnya membangun **UAS Intelligent Game Project**.

Dengan memahami slide pembuka ini, mahasiswa diharapkan memiliki peta belajar yang jelas: apa yang harus dipelajari, bagaimana materi saling terhubung, dan bagaimana penilaian dilakukan. Hal ini penting karena mata kuliah Game Cerdas menuntut kombinasi antara pemahaman konsep, keterampilan implementasi, dan kemampuan merancang perilaku game yang masuk akal.

### Inti yang Harus Ditekankan

- **Pertemuan 0** adalah orientasi untuk memahami arah, target, dan ekspektasi mata kuliah.
- Mata kuliah menekankan keseimbangan antara **teori Game AI**, **praktikum `Unity`**, dan **proyek**.
- Mahasiswa perlu memahami alur pembelajaran dari konsep dasar menuju **UTS Mini Project** dan **UAS Intelligent Game Project**.

### Transisi ke Slide Berikutnya

Setelah memahami gambaran umum pertemuan ini, kita lanjut ke identitas mata kuliah untuk melihat jenjang, beban, tools utama, dan karakter pembelajaran Game Cerdas.

---

## Slide 002 - Identitas Mata Kuliah

### Narasi

Pada slide ini, kita menegaskan **identitas mata kuliah** **Game Cerdas** agar mahasiswa memahami posisi dan arah pembelajaran selama satu semester. Mata kuliah ini berada pada jenjang **S1 Teknik Informatika**, Semester 7, dengan beban **3 SKS**. Angka ini penting karena menunjukkan bahwa mata kuliah ini tidak hanya bersifat teori, tetapi juga menuntut waktu untuk praktik, eksperimen, dan pengembangan proyek.

**Tools utama** yang digunakan adalah `Unity Game Engine` dan `C#`. Artinya, mahasiswa akan belajar konsep **Game AI** secara langsung melalui implementasi. Setiap ide, seperti perilaku NPC, pengambilan keputusan, pergerakan, atau adaptasi level, akan diwujudkan dalam bentuk kode dan scene game. Dengan demikian, mahasiswa tidak hanya memahami konsep secara abstrak, tetapi juga melihat bagaimana konsep tersebut bekerja di dalam engine.

Model pembelajaran yang digunakan adalah **teori + demo + praktikum + project**. Karakter utama mata kuliah ini adalah berbasis implementasi, berorientasi gameplay, menggunakan `Unity`, menggabungkan **AI klasik** dan **AI modern**, serta menghasilkan **mini game cerdas** sebagai proyek akhir. Mahasiswa perlu memahami bahwa keberhasilan mata kuliah ini tidak diukur hanya dari kemampuan menjawab soal, tetapi juga dari kemampuan membangun sistem AI yang dapat dijalankan, diuji, dan dikembangkan.

### Inti yang Harus Ditekankan

- Mata kuliah ini bersifat **aplikatif**, bukan hanya teori.
- `Unity` dan `C#` adalah lingkungan utama untuk implementasi.
- Beban **3 SKS** mencerminkan keseimbangan antara konsep, praktik, dan proyek.
- Mahasiswa akan menggabungkan **AI klasik** dan **AI modern** dalam konteks game.
- Hasil akhir yang diharapkan adalah **mini game cerdas** yang dapat dimainkan.

### Transisi ke Slide Berikutnya

Setelah identitas mata kuliah jelas, langkah berikutnya adalah memahami fokus utama pembelajaran, yaitu bagaimana AI digunakan untuk membuat game menjadi lebih responsif, menarik, adaptif, dan menantang.

---

## Slide 003 - Fokus Mata Kuliah

### Narasi

Pada slide ini, kita menegaskan arah mata kuliah. **Game Cerdas** bukan sekadar kuliah teori; ia berfokus pada penerapan **sistem cerdas** dalam game agar pengalaman bermain menjadi lebih **responsif**, **menarik**, **adaptif**, dan **menantang**.

Fokus utamanya dapat dirumuskan sebagai berikut:

```text
Bagaimana sistem cerdas digunakan untuk membuat game
lebih responsif, menarik, adaptif, dan menantang.
```

Dalam perkuliahan, mahasiswa akan melihat bagaimana `NPC` tidak hanya diam atau bergerak acak, tetapi mampu:

- mendeteksi `player` melalui jarak, kondisi, atau aturan tertentu,
- memilih `state` dan `action` yang sesuai,
- bergerak menuju target dengan `pathfinding` atau `steering`,
- mengambil keputusan menggunakan `FSM` atau `behavior tree`,
- membangun level secara prosedural agar dunia lebih bervariasi,
- menyesuaikan `difficulty` berdasarkan performa `player`,
- belajar dari lingkungan menggunakan `ML-Agents` di `Unity`.

Poin penting yang harus dipahami sebelum lanjut: fokus kita adalah **implementasi**. Setiap konsep akan dikaitkan dengan perilaku `NPC`, desain gameplay, dan praktikum `Unity` + `C#`. Jadi, mahasiswa tidak hanya menghafal istilah, tetapi mampu menjelaskan bagaimana sebuah `agent` membaca keadaan, memilih tindakan, dan memengaruhi pengalaman bermain.

### Inti yang Harus Ditekankan

- Fokus utama adalah penerapan **sistem cerdas** dalam game, bukan hanya teori.
- Perilaku `NPC` mencakup deteksi, gerak, keputusan, adaptasi, dan pembelajaran.
- Konsep akan diimplementasikan dalam `Unity` dengan `C#`, termasuk penggunaan `ML-Agents` untuk `agent` yang belajar.

### Transisi ke Slide Berikutnya

Setelah fokus ini jelas, kita akan melihat mengapa game cerdas penting: game modern membutuhkan `NPC` yang responsif, dunia yang hidup, dan gameplay yang adaptif.

---

## Slide 004 - Mengapa Game Cerdas Penting?

### Narasi

Slide ini menjawab pertanyaan dasar: mengapa mata kuliah **Game Cerdas** perlu dipelajari? Dalam pengembangan game modern, kualitas visual saja tidak cukup untuk membuat pemain tetap betah. Sebuah game juga harus terasa hidup, karena pemain tidak hanya menonton aset grafis, tetapi berinteraksi dengan dunia yang merespons tindakannya.

Kebutuhan itu muncul pada beberapa sisi penting. Misalnya, `NPC` harus mampu merespons kehadiran `player`, `enemy` harus memberikan tantangan yang berarti, dunia harus terasa hidup, `level` harus bervariasi, `gameplay` harus adaptif, dan sistem game perlu memahami performa `player`.

Di sinilah peran **Game AI** menjadi penting. Ia membantu menciptakan pengalaman yang:

- **menarik**
- **menantang**
- **tidak monoton**
- **dinamis**
- **believable**
- **menyenangkan**

Tanpa perilaku yang masuk akal, game dapat terasa kaku, mudah diprediksi, atau tidak adil bagi pemain.

Sebelum masuk ke prinsip utama, mahasiswa perlu memahami bahwa tujuan utama **Game Cerdas** bukan hanya membuat sistem yang kompleks, tetapi membuat pengalaman bermain menjadi lebih hidup dan bermakna. Pemahaman ini akan menjadi dasar ketika kita membahas bagaimana perilaku game mendukung desain pengalaman bermain.

### Inti yang Harus Ditekankan

- Game modern membutuhkan perilaku yang hidup, bukan hanya visual yang bagus.
- Kebutuhan utama meliputi `NPC` yang responsif, `enemy` yang menantang, dunia yang terasa hidup, `level` yang bervariasi, `gameplay` yang adaptif, dan pemahaman terhadap performa `player`.
- **Game AI** berperan menciptakan pengalaman yang menarik, menantang, tidak monoton, dinamis, believable, dan menyenangkan.

### Transisi ke Slide Berikutnya

Setelah memahami mengapa **Game Cerdas** penting, kita lanjut ke prinsip utama yang akan menjadi tolok ukur dalam merancang perilaku game yang baik.

---

## Slide 005 - Prinsip Utama Mata Kuliah

### Narasi

Pada slide ini kita menetapkan prinsip utama yang akan menjadi dasar seluruh pembahasan mata kuliah. Prinsip ini penting karena menentukan cara kita menilai sistem AI dalam game: bukan dari seberapa “pintar” modelnya, tetapi dari seberapa baik sistem tersebut mendukung pengalaman bermain.

```text
Game AI bukan hanya membuat AI yang paling pintar,
tetapi membuat AI yang mendukung pengalaman bermain.
```

Dalam konteks akademik, AI sering diarahkan untuk menghasilkan solusi yang optimal, akurat, atau sesuai benchmark. Namun dalam game, tujuan utamanya berbeda. Sistem AI harus menghasilkan perilaku `NPC`, `enemy`, atau `agent` yang terasa hidup, masuk akal, dan sesuai dengan desain gameplay. Misalnya, musuh yang mengejar pemain tidak harus selalu menemukan jalur paling sempurna, tetapi harus terasa responsif, tidak terlalu mudah, dan tidak membuat pemain merasa diperlakukan tidak adil.

Intuisi praktisnya adalah: sebelum memilih algoritma, kita perlu memahami perilaku apa yang ingin dirasakan pemain. Algoritma seperti pathfinding, finite state machine, behavior tree, steering, atau decision making adalah alat untuk mencapai perilaku tersebut, bukan tujuan akhir. Jika perilaku yang dihasilkan membuat pemain frustrasi, bosan, atau merasa game tidak adil, maka sistem tersebut belum berhasil meskipun secara teknis terlihat canggih.

AI dalam game harus memenuhi beberapa sifat utama:

- **Terasa masuk akal**: perilaku `NPC` harus sesuai dengan konteks dunia game, sehingga pemain dapat memprediksi dan meresponsnya.
- **Memberi tantangan**: AI harus mampu menciptakan tekanan atau kesulitan yang sesuai dengan level permainan.
- **Tetap adil**: pemain harus merasa bahwa kekalahan atau kesulitan berasal dari desain game, bukan dari AI yang “curang”.
- **Dapat dikontrol designer**: desainer game perlu bisa mengatur perilaku AI melalui parameter, state, action, atau aturan yang jelas.
- **Dapat di-debug**: ketika perilaku AI tidak sesuai, tim pengembang harus bisa melacak penyebab masalahnya.
- **Efisien secara performa**: AI harus berjalan dalam batas waktu frame yang wajar, terutama pada game real-time.
- **Menyenangkan untuk player**: hasil akhirnya harus memperkuat fun, fairness, dan believability dari gameplay.

Mahasiswa perlu memahami prinsip ini sebelum lanjut ke topik teknis. Dengan prinsip ini, kita tidak akan menilai sistem AI hanya dari kompleksitas algoritmanya, tetapi dari kontribusinya terhadap pengalaman bermain.

### Inti yang Harus Ditekankan

- Game AI dinilai dari **pengalaman bermain**, bukan dari kecerdasan absolut atau akurasi formal.
- AI harus terasa **masuk akal**, **adil**, **menantang**, **dapat dikontrol**, **dapat di-debug**, dan **efisien**.
- Algoritma AI adalah **alat desain** untuk mendukung perilaku `NPC`, `enemy`, atau `agent` yang sesuai dengan gameplay.

### Transisi ke Slide Berikutnya

Dengan prinsip ini sebagai dasar, kita dapat membedakan cara berpikir Game AI dari Academic AI, yang akan dibahas pada slide berikutnya.

---

## Slide 006 - Game AI vs Academic AI

### Narasi

Slide ini membedakan dua orientasi utama dalam membangun sistem kecerdasan untuk game. **Academic AI** biasanya diukur dari kualitas solusi: apakah hasilnya optimal, akurat, atau benar secara formal. Sistem ini boleh menggunakan model yang kompleks dan proses yang panjang, karena sering kali dievaluasi secara offline atau pada benchmark tertentu.

**Game AI** memiliki orientasi yang berbeda. Yang paling penting bukan hanya “pintar”, tetapi apakah perilaku tersebut mendukung **gameplay experience**. NPC yang bergerak, mengejar, atau menyerang harus terasa masuk akal, adil, dan menyenangkan bagi pemain. Karena itu, keputusan harus bisa dibuat dalam **real-time**, biasanya dalam satu frame atau budget waktu yang sangat ketat.

Perbedaan ini membuat Game AI lebih pragmatis. Sebuah perilaku `patrol`, `chase`, atau `attack` tidak selalu harus menghasilkan solusi global yang sempurna. Yang lebih penting adalah perilaku itu mudah dibaca, dapat dikontrol designer, mudah di-debug, dan tidak merusak performa game. Hal yang sama berlaku untuk fitur seperti `PCG` atau `DDA`: tujuannya bukan sekadar menghasilkan output yang benar secara formal, tetapi menjaga permainan tetap menarik dan seimbang.

Sebagai mahasiswa, hal yang harus dipahami adalah bahwa kualitas Game AI tidak selalu diukur dengan akurasi matematis. Kita perlu menilai dari sisi pengalaman bermain: apakah NPC terasa hidup, apakah tantangan tetap fair, apakah designer dapat mengatur perilaku, dan apakah sistem tetap stabil saat dijalankan di engine seperti Unity.

### Inti yang Harus Ditekankan

- **Academic AI** berfokus pada optimalitas, akurasi, dan kebenaran formal.
- **Game AI** berfokus pada pengalaman bermain, fairness, believability, dan kontrol designer.
- Game AI harus berjalan **real-time**, sehingga solusi pragmatis sering lebih penting daripada solusi sempurna.
- Contoh perilaku seperti `patrol`, `chase`, `attack`, `PCG`, dan `DDA` dinilai dari playability, bukan hanya formal correctness.

### Transisi ke Slide Berikutnya

Setelah memahami bahwa Game AI bersifat pragmatis dan berorientasi pada pengalaman bermain, kita akan masuk ke kerangka besar Game AI untuk melihat bagaimana lingkungan, persepsi, memori, keputusan, dan aksi saling terhubung.

---

## Slide 007 - Kerangka Besar Game AI

### Narasi

Slide ini memberikan **kerangka besar** yang membantu kita membaca banyak sistem perilaku dalam game. Intinya, perilaku NPC atau agent tidak muncul dari satu fungsi tunggal, melainkan dari **siklus berulang** antara dunia game dan keputusan yang diambil.

```text
Environment
    ↓
Perception
    ↓
Memory / State
    ↓
Decision
    ↓
Action
    ↓
Environment
```

Secara intuitif, **`Environment`** adalah keadaan dunia game: posisi player, posisi NPC, objek, bahaya, item, atau kondisi level. Dari lingkungan itu, sistem melakukan **`Perception`**, yaitu proses membaca informasi yang relevan. Perception tidak selalu berarti “melihat” secara visual; bisa berupa deteksi jarak, area trigger, data inventory, atau status kesehatan.

Selanjutnya, informasi yang sudah dipersepsikan disimpan atau dirangkum ke dalam **`Memory / State`**. State penting karena perilaku agent tidak selalu reaktif sekali; agent perlu mengingat posisi terakhir player, target yang sedang dikejar, atau kondisi apakah ia sedang patroli, terkejut, atau menyerang. Tanpa state, perilaku akan terasa tidak konsisten.

Dari state tersebut, sistem masuk ke tahap **`Decision`**. Di sinilah agent memilih tindakan yang paling sesuai. Decision dapat diimplementasikan dengan berbagai cara, misalnya **FSM**, **behavior tree**, **utility-based selection**, atau aturan sederhana. Yang penting untuk dipahami: decision bukan sekadar “pilih aksi”, tetapi memilih aksi berdasarkan konteks, prioritas, dan batasan real-time.

Hasil decision adalah **`Action`**, yaitu perilaku yang dieksekusi oleh agent, seperti bergerak, mengejar, menyerang, bersembunyi, atau memanggil bantuan. Action kemudian mengubah **`Environment`**, sehingga siklus dimulai kembali. Inilah yang membuat perilaku agent terasa hidup: ia terus merespons perubahan dunia.

Contoh pada slide menunjukkan alur sederhana:

```text
Player masuk area pandang NPC
        ↓
NPC melihat player
        ↓
NPC menyimpan posisi player
        ↓
NPC memilih CHASE
        ↓
NPC mengejar player
```

Dalam contoh ini, **`Perception`** terjadi ketika player masuk area pandang. **`Memory / State`** muncul saat NPC menyimpan posisi player. **`Decision`** adalah pemilihan state atau aksi `CHASE`. **`Action`** adalah NPC bergerak mengejar player. Setelah itu, posisi player berubah, sehingga NPC harus memperbarui persepsi dan keputusan pada frame berikutnya.

Kerangka ini penting karena menjadi bahasa umum untuk membahas topik berikutnya. Baik pathfinding, steering, FSM, behavior tree, maupun adaptive behavior, semuanya dapat dibaca sebagai bagian dari loop: bagaimana agent membaca dunia, menyimpan konteks, memutuskan, lalu bertindak.

### Inti yang Harus Ditekankan

- **Sistem perilaku game bersifat siklikal**: agent terus membaca `Environment`, memperbarui state, memutuskan, dan mengeksekusi `Action`.
- **`Perception` menentukan apa yang bisa diketahui agent**; jika player tidak terdeteksi, agent tidak bisa memilih `CHASE` secara rasional.
- **`Memory / State` membuat perilaku konsisten** dan memungkinkan transisi antar perilaku seperti patrol, alert, chase, attack.
- **`Decision` adalah inti perilaku**; implementasinya bisa berupa aturan, FSM, behavior tree, atau utility, tetapi tujuannya memilih aksi yang sesuai konteks.
- **`Action` mengubah lingkungan**, sehingga loop harus berjalan terus untuk menghasilkan perilaku yang responsif dan believable.

### Transisi ke Slide Berikutnya

Dengan kerangka umum ini, kita bisa melihat bagaimana mata kuliah Game Cerdas disusun: dari fondasi agent, navigasi, decision making, hingga adaptasi dan pembelajaran.

---

## Slide 008 - Peta Besar Mata Kuliah

### Narasi

Slide ini menunjukkan **peta besar mata kuliah Game Cerdas**. Tujuannya bukan menjelaskan satu algoritma secara detail, tetapi memberi gambaran keseluruhan topik yang akan kita pelajari. Peta ini membantu mahasiswa melihat bahwa sistem cerdas dalam game bukan satu teknik tunggal, melainkan kumpulan kemampuan yang saling terhubung: dari memahami lingkungan, bergerak secara otonom, mengambil keputusan, hingga menghasilkan konten dan menyesuaikan diri dengan pemain.

Peta ini terbagi menjadi beberapa klaster utama.

- **Fundamentals** menjadi dasar: konsep dasar **Game Cerdas**, **Intelligent Agent**, dan **Perception**. Di sini mahasiswa memahami bagaimana agen mengamati lingkungan dan mengubah informasi menjadi kondisi internal.
- **Autonomous Agent** membahas kemampuan gerak dan navigasi, seperti `Steering`, `Navigation`, dan `Pathfinding`. Klaster ini penting untuk membuat NPC bergerak natural, menghindari rintangan, dan menuju target.
- **Decision Making** adalah inti perilaku agen, mencakup `FSM`, `Behavior Tree`, `Utility`, dan `Tactical`. Bagian ini menentukan kapan NPC menyerang, mundur, mengejar, atau melakukan aksi lain.
- **Content Intelligence** memperkenalkan `PCG`, yaitu cara sistem membantu menghasilkan atau memvariasikan konten game secara prosedural.
- **Adaptive Game** membahas `DDA` dan `Player Modeling`, di mana game dapat menyesuaikan tantangan berdasarkan perilaku pemain.
- **Learning** menutup peta dengan `Reinforcement Learning` dan `Unity ML-Agents`, sebagai pendekatan di mana agen dapat belajar dari pengalaman.

Secara praktis, peta ini dapat dibaca sebagai lapisan kemampuan. Lapisan pertama adalah dasar agen dan persepsi. Lapisan berikutnya adalah gerak dan navigasi. Setelah agen bisa bergerak, ia perlu mengambil keputusan. Setelah keputusan terbentuk, sistem dapat diperluas dengan konten dinamis, adaptasi pemain, dan pembelajaran. Urutan ini penting karena implementasi game cerdas di Unity biasanya dibangun bertahap: mulai dari agen sederhana, lalu ditambah navigasi, perilaku, dan akhirnya sistem yang lebih adaptif.

Sebelum masuk ke alur semester, mahasiswa perlu memahami bahwa setiap klaster pada peta ini akan menjadi modul pembelajaran. Tidak semua topik akan dibahas dengan kedalaman yang sama, tetapi semuanya berkontribusi pada kemampuan akhir: merancang dan mengimplementasikan agen cerdas dalam game.

### Inti yang Harus Ditekankan

- **Peta besar** menunjukkan bahwa Game Cerdas terdiri dari beberapa klaster: **Fundamentals**, **Autonomous Agent**, **Decision Making**, **Content Intelligence**, **Adaptive Game**, dan **Learning**.
- **Fundamentals** dan **Autonomous Agent** menjadi dasar agar agen dapat memahami lingkungan dan bergerak secara otonom.
- **Decision Making** adalah bagian penting untuk membentuk perilaku NPC, seperti `FSM`, `Behavior Tree`, `Utility`, dan `Tactical`.
- `PCG`, `DDA`, `Player Modeling`, `Reinforcement Learning`, dan `Unity ML-Agents` memperluas kemampuan game menjadi lebih dinamis, adaptif, dan berbasis pembelajaran.

### Transisi ke Slide Berikutnya

Setelah memahami peta besar ini, kita akan melihat bagaimana klaster-klaster tersebut disusun menjadi alur materi semester, dari fondasi Game Cerdas hingga proyek game cerdas akhir.

---

## Slide 009 - Alur Materi Semester

### Narasi

Pada slide ini, kita melihat **alur materi semester** sebagai satu jalur pembelajaran yang runtut. Alur ini menunjukkan bahwa Game Cerdas tidak diajarkan sebagai kumpulan topik terpisah, tetapi sebagai proses membangun kemampuan **Game AI** secara bertahap.

```text
Game AI Fundamentals
        ↓
Movement & Navigation
        ↓
Decision Making
        ↓
PCG
        ↓
DDA & Player Modeling
        ↓
Learning-Based Game AI
        ↓
Final Intelligent Game Project
```

Secara konseptual, alur ini bergerak dari **dasar perilaku agent** menuju **sistem cerdas yang lebih kompleks dan adaptif**. Tahapan utamanya dapat dipahami sebagai berikut:

1. **Game AI Fundamentals** menjadi fondasi untuk memahami agent, environment, `perception`, `state`, dan `action`.
2. **Movement & Navigation** membahas cara NPC bergerak, menghindari rintangan, dan memilih jalur, termasuk **steering** dan **pathfinding**.
3. **Decision Making** membahas bagaimana agent memilih perilaku, misalnya melalui **FSM**, **behavior tree**, atau aturan keputusan.
4. **PCG** memperluas cakupan dari perilaku agent ke pembuatan konten game secara prosedural.
5. **DDA & Player Modeling** membahas game yang menyesuaikan diri terhadap pemain, misalnya menyesuaikan tantangan atau pengalaman bermain.
6. **Learning-Based Game AI** memperkenalkan agent yang dapat belajar dari lingkungan atau interaksi.
7. **Final Intelligent Game Project** menjadi tahap integrasi, di mana mahasiswa menerapkan beberapa komponen dalam satu game.

Desain alur ini penting karena mahasiswa tidak hanya diminta memahami konsep, tetapi juga mampu mengimplementasikan **Game AI** dalam **Unity**. Setiap fase sebelumnya menjadi prasyarat bagi fase berikutnya, sehingga pada akhir semester mahasiswa diharapkan mampu membangun sistem game cerdas yang lebih utuh, bukan hanya satu teknik terisolasi.

### Inti yang Harus Ditekankan

- Alur materi semester bersifat **bertahap**: dari fondasi, pergerakan, pengambilan keputusan, konten, adaptasi, pembelajaran, hingga proyek akhir.
- Setiap fase membangun kemampuan sebelumnya, sehingga mahasiswa perlu memahami **agent**, `perception`, `state`, dan `action` sebelum masuk ke sistem yang lebih kompleks.
- Tujuan akhir bukan hanya teori, tetapi **implementasi Game AI di Unity** dalam proyek yang terintegrasi.

### Transisi ke Slide Berikutnya

Setelah memahami alur besar semester, kita akan masuk ke fase pertama, yaitu **Fundamentals of Game AI**, untuk membangun dasar perilaku agent sebelum membahas pergerakan, navigasi, dan pengambilan keputusan.

---

## Slide 010 - Fase 1: Fundamentals of Game AI

### Narasi

Pada fase pertama, minggu 1–2, kita membangun fondasi kecerdasan dalam game. Fokusnya bukan langsung membuat NPC yang rumit, tetapi memahami bagaimana sebuah karakter dapat mengamati lingkungan, menyimpan kondisi, memilih perilaku, dan mengeksekusi aksi. Intuisi praktisnya sederhana: perilaku NPC yang baik dimulai dari alur yang jelas, yaitu membaca data, membuat keputusan, lalu bertindak.

Konsep utamanya adalah **intelligent agent** yang berinteraksi dengan **environment**. Agent dapat berupa NPC guard, musuh, atau karakter non-player. Environment adalah seluruh kondisi yang dapat memengaruhi agent, misalnya posisi player, objek di scene, timer, atau status game. Dalam Unity, environment sering direpresentasikan melalui posisi `Transform`, tag, layer, atau variabel global.

Bagian pertama dari alur adalah **perception**. Perception adalah proses agent membaca lingkungan. Contoh sederhana adalah NPC guard yang mendeteksi player berdasarkan jarak, line of sight, atau trigger. Data hasil perception dapat disimpan sebagai variabel seperti `distanceToPlayer`, `canSeePlayer`, atau `lastKnownPosition`. Dalam implementasi, pembacaan ini biasanya dilakukan pada **update loop**, misalnya `Update()`, sehingga agent dapat merespons perubahan lingkungan secara berkala.

Setelah data dibaca, agent menyimpannya ke dalam **state**. State adalah kondisi internal yang menentukan perilaku saat ini, misalnya `idle`, `patrol`, `alert`, atau `chase`. State penting karena membuat perilaku NPC dapat dijelaskan, diuji, dan dikontrol. Tanpa state yang jelas, NPC akan sulit diprediksi karena tidak ada kondisi yang menjadi dasar keputusan.

Selanjutnya, agent melakukan **decision** dan menghasilkan **action**. Decision adalah proses memilih perilaku berdasarkan state dan aturan yang telah dirancang. Action adalah eksekusi nyata dalam game, misalnya bergerak ke posisi tertentu, berhenti, memutar karakter, atau memanggil animasi. Dalam Unity, action biasanya terhubung ke komponen seperti `CharacterController`, `Animator`, atau `Transform`.

Alur utamanya dapat diringkas sebagai berikut:

```text
Perception → Decision → Action
```

Alur ini menjadi dasar **arsitektur modular** untuk kecerdasan game. Artinya, sensor, memori, aturan keputusan, dan eksekusi aksi dapat dikembangkan sebagai bagian yang terpisah. Modularitas memudahkan debugging, pengujian, dan pengembangan fitur lanjutan tanpa merusak seluruh sistem.

Pada praktikum minggu 1–2, mahasiswa akan melakukan **setup Unity project**, membuat **NPC Detector**, dan membangun **NPC Guard** yang berbasis sensor, memory, dan decision. NPC Detector bertugas membaca lingkungan, misalnya mendeteksi player. Memory menyimpan informasi penting, seperti posisi terakhir player atau status alarm. Decision kemudian menentukan perilaku guard berdasarkan data tersebut.

Sebelum lanjut, mahasiswa perlu memahami bahwa fondasi ini menentukan kualitas sistem yang akan dibangun berikutnya. Jika perception tidak jelas, state tidak akan akurat. Jika state tidak terdefinisi, decision menjadi tidak konsisten. Jika action tidak terkontrol, perilaku NPC akan sulit diprediksi.

### Inti yang Harus Ditekankan

- **Perception** adalah membaca lingkungan, misalnya posisi player, jarak, atau line of sight.
- **State** adalah kondisi internal agent, misalnya `idle`, `patrol`, `alert`, atau `chase`.
- **Decision** adalah proses memilih perilaku berdasarkan state dan aturan.
- **Action** adalah eksekusi nyata dalam game, seperti bergerak, berhenti, atau memanggil animasi.
- **Arsitektur modular** membantu memisahkan sensor, memori, keputusan, dan aksi agar mudah dikembangkan.

### Transisi ke Slide Berikutnya

Setelah fondasi agent, environment, perception, state, dan action dipahami, kita akan masuk ke fase berikutnya yang membahas cara NPC bergerak, menavigasi, dan mengambil keputusan secara lebih sistematis.

---

## Slide 011 - Fase 2: Classical Game AI

### Narasi

Pada slide ini kita memasuki **Fase 2: Classical Game AI**, yang berlangsung pada **Minggu 3–7**. Fase ini adalah inti dari kecerdasan klasik dalam game, karena di sinilah NPC mulai memiliki kemampuan yang lebih utuh: bergerak sendiri, mencari jalan, memahami lingkungan, memilih tindakan, dan berperilaku secara taktis.

Fase ini membangun dari fondasi yang sudah dibahas sebelumnya, yaitu agent, environment, perception, state, action, dan `update loop`. Namun, pada fase ini kita tidak lagi berhenti pada satu siklus sederhana. Kita mulai memecah perilaku NPC menjadi beberapa lapisan yang lebih realistis dan lebih mudah dikendalikan.

```text
Movement
   ↓
Navigation
   ↓
Perception
   ↓
Decision Making
   ↓
Tactical Behavior
```

Diagram ini menunjukkan urutan konsep yang perlu dipahami. Urutan ini bersifat konseptual, bukan berarti NPC harus menyelesaikan satu tahap sebelum tahap berikutnya. Dalam praktik, semua lapisan ini saling terhubung di dalam `update loop` game.

- **Movement** adalah kemampuan dasar NPC untuk bergerak secara otonom. Di sini kita membahas **steering behavior**, yaitu aturan gerak yang membuat NPC dapat mengejar, menghindari, atau menyesuaikan arah dengan lebih halus.
- **Navigation** adalah kemampuan NPC untuk mencapai target melalui lingkungan yang memiliki rintangan. Konsep utamanya adalah **pathfinding** dan `NavMesh`, yaitu representasi area yang bisa dilalui serta perhitungan rute dari posisi awal ke posisi tujuan.
- **Perception** adalah cara NPC memperoleh informasi dari lingkungan, misalnya keberadaan pemain, jarak, arah, atau objek penting. Informasi ini menjadi bahan utama sebelum NPC mengambil keputusan.
- **Decision Making** adalah proses memilih tindakan berikutnya. Teknik klasik yang dibahas meliputi `FSM`, `Behavior Tree`, dan `utility`. Masing-masing memiliki cara berbeda dalam mengatur logika perilaku: state diskrit, tugas hierarkis, atau pemilihan berdasarkan skor.
- **Tactical Behavior** adalah lapisan perilaku yang lebih tinggi, di mana NPC tidak hanya memilih satu aksi, tetapi menyesuaikan perilakunya dengan konteks game, misalnya memilih perilaku yang sesuai dengan situasi yang sedang terjadi.

Yang perlu dipahami mahasiswa adalah bahwa **kecerdasan klasik game** biasanya bersifat modular, eksplisit, dan mudah dianalisis. Pergerakan bersifat kontinu, navigasi menghasilkan rute, perception menyediakan input, decision making memilih perilaku, dan tactical behavior mengatur kebijakan tingkat atas. Pemisahan ini penting agar NPC tidak hanya “bergerak”, tetapi juga “bertindak” secara masuk akal.

Dalam konteks Unity, mahasiswa akan melihat bagaimana komponen seperti `NavMesh` dan `NavMeshAgent` membantu proses navigasi, sementara logika perilaku dapat dibangun melalui `state`, `task`, atau `utility score`. Tujuan utama fase ini adalah membentuk pola pikir: perilaku NPC adalah hasil dari beberapa subsistem yang bekerja bersama, bukan satu fungsi tunggal yang rumit.

### Inti yang Harus Ditekankan

- **Fase 2** adalah inti kecerdasan klasik game: NPC bergerak, menavigasi, mempersepsikan, memutuskan, dan berperilaku taktis.
- **Movement** dan **Navigation** berbeda: movement mengatur gerak langsung, navigation menentukan rute menuju target.
- **Perception** adalah jembatan antara lingkungan dan keputusan; tanpa input yang tepat, keputusan NPC tidak akan masuk akal.
- `FSM`, `Behavior Tree`, dan `utility` adalah teknik decision making dengan struktur dan kecocokan yang berbeda.
- Perilaku NPC yang baik berasal dari arsitektur modular yang jelas, bukan dari satu logika monolitik.

### Transisi ke Slide Berikutnya

Setelah mahasiswa memahami bagaimana NPC klasik bergerak, menavigasi, dan mengambil keputusan, kita akan beralih ke **Fase 3: Procedural Content Generation**. Di fase berikutnya, fokusnya bergeser dari perilaku agent ke cara membuat konten game secara otomatis, tetap terkontrol, dan playable.

---

## Slide 012 - Fase 3: Procedural Content Generation

### Narasi

Selanjutnya kita masuk ke **Fase 3: Procedural Content Generation** pada minggu 9–10. Fase ini membahas cara game membuat konten secara otomatis, bukan hanya menyiapkan konten yang sudah dibuat manual. Konten yang dimaksud bisa berupa **random level**, **procedural dungeon**, atau **procedural spawning** untuk objek, musuh, dan item.

Inti dari fase ini adalah **randomness** yang tetap **terkontrol**. Jika kita hanya memakai acak tanpa aturan, hasil yang muncul bisa tidak konsisten atau tidak bisa dimainkan. Karena itu, konsep **seed** menjadi penting. Dengan `seed` yang sama, sistem dapat menghasilkan konten yang sama pula, sehingga prosesnya bisa diuji, dibandingkan, dan direproduksi.

```text
seed
  ↓
aturan / constraints
  ↓
candidate content
  ↓
generate-and-test
  ↓
content playable
```

Dalam praktik, ada dua pendekatan utama yang perlu dipahami. **Constructive PCG** membangun konten secara bertahap berdasarkan aturan, misalnya menyusun ruangan, koridor, atau titik spawn satu per satu. **Generate-and-test** membuat beberapa kandidat konten, lalu mengujinya terhadap syarat tertentu, seperti apakah level bisa dilalui, apakah spawn masuk akal, dan apakah konten tidak melanggar batas desain.

Untuk **procedural spawning**, sistem tidak sekadar menempatkan objek secara acak. Penempatan harus mendukung pengalaman bermain: musuh tidak muncul di tempat yang mustahil, item tidak menumpuk di satu titik, dan area tetap terasa seimbang. Untuk **random level** dan **procedural dungeon**, hasil acak harus tetap menghasilkan struktur yang **playable**, artinya dapat dinavigasi, tidak terputus, dan sesuai tujuan level.

Sebelum lanjut, mahasiswa perlu memahami bahwa PCG bukan hanya “membuat acak”. Yang lebih penting adalah bagaimana acak dibatasi oleh aturan, bagaimana `seed` menjaga konsistensi, dan bagaimana hasil akhir tetap valid untuk gameplay. Pemahaman ini akan menjadi dasar ketika konten yang dihasilkan nanti digunakan oleh sistem navigasi, perilaku NPC, atau mekanisme game lainnya.

### Inti yang Harus Ditekankan

- **PCG** adalah proses pembuatan konten game secara otomatis, seperti level, dungeon, dan spawn.
- **`seed`** membuat hasil acak dapat direproduksi dan diuji secara konsisten.
- **`constructive PCG`** membangun konten secara bertahap, sedangkan **`generate-and-test`** membuat kandidat lalu memvalidasinya.
- Hasil PCG harus **terkontrol** dan **playable**, bukan hanya acak.

### Transisi ke Slide Berikutnya

Setelah konten dapat dibuat secara otomatis dan tetap playable, langkah berikutnya adalah membuat game yang dapat menyesuaikan diri terhadap performa dan gaya bermain pemain.

---

## Slide 013 - Fase 4: Adaptive Game AI

### Narasi

Pada fase ini, kita beralih dari konten yang dihasilkan secara prosedural ke sistem yang **menyesuaikan diri** terhadap pemain. Jika fase sebelumnya menekankan pembuatan level atau spawning yang terkontrol, maka fase ini menekankan **responsivitas**: game tidak hanya menyajikan tantangan, tetapi juga mengamati bagaimana pemain menghadapi tantangan tersebut.

**Dynamic Difficulty Adjustment** adalah inti dari fase ini. Tujuannya bukan membuat game selalu mudah atau selalu sulit, tetapi menjaga **challenge curve** agar pemain tetap terlibat. Jika pemain terlalu sering gagal, game dapat mengurangi tekanan; jika pemain terlalu cepat menyelesaikan tantangan, game dapat meningkatkan tuntutan.

Untuk melakukan penyesuaian, sistem perlu membaca sinyal dari pemain. Sinyal ini biasanya disebut `player telemetry`, misalnya tingkat keberhasilan, waktu penyelesaian, jumlah kematian, penggunaan item, atau pola keputusan. Dari data tersebut, game dapat membentuk beberapa komponen penting:

- `skill estimation`: perkiraan kemampuan pemain saat ini.
- `play style`: pola cara pemain bermain, misalnya agresif, defensif, eksploratif, atau cepat.
- `player profile`: gabungan kemampuan dan gaya bermain yang digunakan sebagai dasar keputusan adaptasi.

Selanjutnya, `difficulty model` menerjemahkan profil pemain menjadi parameter yang dapat diubah. Parameter ini bisa berupa jumlah `enemy`, intensitas serangan, ketersediaan `health item`, atau laju spawning. `adaptation policy` menentukan aturan atau strategi penyesuaian: kapan harus menurunkan kesulitan, seberapa besar penurunannya, dan kapan kembali menaikkan. Secara konseptual, `adaptation policy` adalah bentuk decision making yang berbasis data pemain.

Contoh sederhana pada slide dapat dibaca sebagai berikut:

```text
Player kesulitan
    ↓
enemy sedikit dikurangi
health item lebih sering muncul
```

Alur contoh tersebut dapat dipahami dalam tiga tahap:

1. **Input**: sistem mendeteksi bahwa pemain mengalami kesulitan.
2. **Proses**: `difficulty model` menilai bahwa tantangan saat ini terlalu tinggi.
3. **Output**: parameter game disesuaikan, misalnya `enemy` sedikit dikurangi dan `health item` lebih sering muncul.

Perubahan ini sebaiknya dilakukan secara bertahap agar pemain tidak merasa game tiba-tiba berubah tanpa alasan. Yang perlu dipahami mahasiswa adalah bahwa adaptasi bukan sekadar "membuat game lebih mudah". Adaptasi yang baik harus tetap terasa adil, tidak merusak desain tantangan, dan tidak membuat pemain kehilangan rasa pencapaian. Data telemetri harus bermakna, kebijakan adaptasi harus terukur, dan perubahan parameter harus konsisten dengan tujuan pengalaman bermain.

### Inti yang Harus Ditekankan

- **Dynamic Difficulty Adjustment** bertujuan menjaga keseimbangan antara tantangan dan kemampuan pemain.
- `player telemetry` menjadi dasar untuk membentuk `skill estimation`, `play style`, dan `player profile`.
- `difficulty model` dan `adaptation policy` menerjemahkan profil pemain menjadi perubahan parameter game yang terkontrol.
- Penyesuaian harus bertahap, adil, dan tetap menjaga rasa pencapaian pemain.

### Transisi ke Slide Berikutnya

Setelah game mampu membaca dan menyesuaikan diri berdasarkan data pemain, langkah berikutnya adalah mempelajari bagaimana sistem dapat belajar dari pengalaman. Pada fase berikutnya, kita akan masuk ke pendekatan **Learning-Based**, di mana keputusan tidak hanya diatur oleh aturan, tetapi juga dapat dipelajari dari interaksi dengan lingkungan.

---

## Slide 014 - Fase 5: Learning-Based Game AI

### Narasi

Pada fase ini, mahasiswa berpindah dari aturan yang ditulis manual menuju sistem yang dapat **belajar dari data atau pengalaman**. Dalam konteks game, pendekatan ini penting karena perilaku NPC tidak selalu bisa didefinisikan penuh oleh desainer. Ada situasi yang terlalu banyak, terlalu dinamis, atau bergantung pada gaya pemain. Karena itu, sistem pembelajaran memberi peluang untuk membuat agent yang menyesuaikan perilaku berdasarkan umpan balik dari lingkungan.

Secara konseptual, ada dua jalur utama yang perlu dipahami. **Supervised learning** bekerja dari data berlabel, misalnya mempelajari pola dari contoh yang sudah diberi jawaban. **Reinforcement learning** bekerja dari pengalaman: agent mencoba tindakan, menerima **reward**, lalu memperbaiki kebijakan tindakannya. Untuk game, reinforcement learning sering lebih relevan karena perilaku NPC dapat dievaluasi dari hasil interaksi, seperti bertahan hidup, mengejar target, menghindari bahaya, atau membantu pemain.

Inti dari reinforcement learning adalah siklus **state-action-reward**. Agent mengamati **observation** dari lingkungan, memilih **action** berdasarkan **policy**, lalu lingkungan memberikan **reward** dan state berikutnya. Proses ini berulang dalam satu **episode**, yaitu satu rangkaian pengalaman dari awal hingga selesai. Jika episode selesai, agent dapat memulai episode baru dengan kondisi awal yang serupa.

```text
for episode in training:
    obs = environment.observe(agent)
    action = policy.select_action(obs)
    next_obs, reward, done = environment.step(action)
    policy.update(obs, action, reward, next_obs, done)
```

Pseudocode di atas menggambarkan alur dasar. `obs` adalah informasi yang diterima agent, misalnya posisi, jarak ke target, atau kondisi lingkungan. `policy` adalah aturan atau model yang menentukan tindakan apa yang sebaiknya dipilih. `reward` adalah sinyal umpan balik yang menunjukkan apakah tindakan itu menguntungkan. `policy.update` menunjukkan bahwa agent tidak hanya memilih tindakan, tetapi juga memperbaiki cara memilih tindakan di masa depan.

Dalam **Q-learning**, agent mempelajari nilai untuk pasangan state dan action, yang sering disebut **Q-value**. Nilai ini menggambarkan seberapa baik suatu tindakan pada kondisi tertentu. Jika Q-value untuk tindakan tertentu tinggi, agent cenderung memilih tindakan itu ketika berada pada state yang sama. Q-learning memberi intuisi yang jelas: agent belajar memperkirakan konsekuensi dari setiap pilihan, bukan sekadar mengikuti aturan tetap.

**Unity ML-Agents** adalah lingkungan kerja yang membantu mahasiswa menerapkan konsep ini dalam Unity. Di dalamnya, agent dapat diletakkan pada GameObject, menerima observation dari scene, memilih action, dan berinteraksi dengan environment. Konsep penting yang harus dipahami adalah `agent`, `observation`, `action`, `reward`, `episode`, dan `policy`. Mahasiswa tidak perlu langsung memahami semua detail matematis, tetapi harus mampu menjelaskan bagaimana perubahan reward memengaruhi perilaku agent.

**PPO** dapat diperkenalkan secara konseptual sebagai metode yang memperbarui policy berdasarkan pengalaman. PPO digunakan untuk melatih agent agar memilih tindakan yang menghasilkan reward lebih baik, dengan cara menyesuaikan probabilitas tindakan secara bertahap. Pada level kuliah, yang penting adalah memahami bahwa PPO adalah salah satu teknik policy optimization yang umum dipakai dalam ML-Agents, bukan sekadar algoritma yang harus dihafal.

Sebelum lanjut, mahasiswa perlu memahami bahwa learning-based approach berbeda dari FSM atau behavior tree. FSM dan behavior tree mengandalkan struktur keputusan yang dirancang manusia. Learning-based approach memungkinkan sistem menemukan pola dari data atau pengalaman. Namun, pendekatan ini juga menuntut desain reward yang baik, karena reward yang salah dapat menghasilkan perilaku yang tidak diinginkan.

### Inti yang Harus Ditekankan

- **Supervised learning** belajar dari data berlabel, sedangkan **reinforcement learning** belajar dari pengalaman dan reward.
- Siklus utama reinforcement learning adalah **observation → action → reward → policy update**.
- `Q-learning` mempelajari nilai tindakan pada state tertentu, sedangkan `PPO` memperbarui policy secara konseptual berdasarkan pengalaman.
- **Unity ML-Agents** menghubungkan konsep `agent`, `observation`, `action`, `reward`, `episode`, dan `policy` ke dalam implementasi game.
- Desain `reward` sangat menentukan perilaku agent; reward yang buruk dapat menghasilkan perilaku yang tidak sesuai tujuan.

### Transisi ke Slide Berikutnya

Setelah memahami bagaimana agent dapat belajar dari pengalaman, langkah berikutnya adalah mengintegrasikan kemampuan ini ke dalam proyek akhir. Pada fase berikutnya, fokus akan bergeser ke pengembangan final project, termasuk evaluasi, debugging, dan demonstrasi sistem pembelajaran dalam mini game Unity.

---

## Slide 015 - Fase 6: Final Project Development

### Narasi

Slide ini menutup rangkaian materi dengan **Fase 6: Final Project Development**. Pada minggu ke-15 dan ke-16, mahasiswa tidak lagi mempelajari satu teknik secara terpisah, tetapi mengintegrasikan seluruh kemampuan yang sudah dibangun sebelumnya ke dalam satu produk akhir. Fokusnya adalah menghasilkan **mini game Unity** yang benar-benar dapat dimainkan, memiliki perilaku agen yang jelas, dapat didemokan, dan dapat dijelaskan secara teknis.

Target akhir yang harus dicapai adalah:

```text
mini game Unity yang playable
+
memiliki AI yang jelas
+
dapat didemokan
+
dapat dijelaskan secara teknis
```

Artinya, proyek akhir tidak dinilai hanya dari visual atau gameplay, tetapi juga dari kualitas sistem kecerdasan buatan di dalamnya. Mahasiswa perlu menunjukkan bahwa agen dalam permainan tidak sekadar bergerak, tetapi memiliki **perilaku yang dapat dijelaskan**, **alur keputusan yang masuk akal**, dan **mekanisme yang bisa diuji**.

Fokus utama fase ini meliputi:

- **AI Director** sebagai pengatur tingkat tinggi yang mengontrol pacing, event, atau tantangan.
- **Adaptive systems** yang menyesuaikan pengalaman pemain berdasarkan kondisi permainan.
- **Emergent behavior** yang muncul dari interaksi beberapa aturan sederhana.
- **Debugging Game AI** untuk menemukan kesalahan pada state, path, sensor, atau keputusan agen.
- **Evaluasi Game AI** untuk menilai apakah perilaku agen sesuai tujuan desain.
- **Integrasi AI dalam proyek akhir** dengan menggabungkan pathfinding, FSM, behavior tree, steering, decision making, atau learning agent bila digunakan.
- **Presentasi final project** untuk menjelaskan arsitektur, keputusan teknis, dan hasil demo.

Dalam konteks Unity, **AI Director** dapat dipahami sebagai komponen yang berada di atas perilaku agen individual. Jika agen menggunakan `NavMeshAgent`, `FiniteStateMachine`, `BehaviorTree`, atau `UtilityAI`, maka AI Director membantu menentukan kapan tantangan meningkat, kapan event tertentu muncul, atau bagaimana ritme permainan dijaga. Komponen ini tidak menggantikan logika agen, tetapi mengoordinasikan beberapa sistem agar pengalaman bermain terasa lebih hidup dan terarah.

**Adaptive systems** dan **emergent behavior** juga perlu diperlakukan sebagai bagian dari desain, bukan sekadar efek samping. Sistem adaptif dapat mengubah parameter permainan, seperti jumlah musuh, kecepatan spawn, atau target skor, berdasarkan kondisi pemain. Sementara itu, emergent behavior muncul ketika beberapa aturan sederhana berinteraksi dan menghasilkan perilaku yang tidak diprogram secara eksplisit. Mahasiswa perlu mampu mengamati perilaku tersebut, lalu memutuskan apakah perilaku itu memperkuat desain atau justru perlu dibatasi.

Proses pengembangan proyek akhir sebaiknya dilakukan secara terstruktur:

1. Finalisasi cakupan fitur agar proyek tetap playable.
2. Integrasi komponen AI ke dalam scene dan gameplay.
3. Debugging perilaku agen, pathfinding, state, sensor, dan keputusan.
4. Evaluasi melalui playtest, log, metrik sederhana, atau observasi perilaku.
5. Penyiapan demo dan penjelasan teknis untuk presentasi.

Pada tahap **debugging Game AI**, mahasiswa perlu memeriksa apakah masalah berasal dari input, logika, atau eksekusi. Misalnya, agen tidak bergerak bisa disebabkan oleh pathfinding yang gagal, state yang tidak berubah, sensor yang salah membaca objek, atau parameter steering yang tidak seimbang. Jika proyek menggunakan learning agent, mahasiswa juga perlu memeriksa `observation`, `action`, `reward`, dan episode untuk memastikan agent belajar sesuai tujuan.

**Evaluasi Game AI** bukan hanya memastikan program berjalan tanpa error. Mahasiswa perlu menilai apakah agen berperilaku sesuai peran, apakah keputusan agen dapat dipertanggungjawabkan, dan apakah sistem AI mendukung gameplay. Evaluasi dapat dilakukan dengan playtest, pengamatan manual, log keputusan, atau metrik sederhana seperti keberhasilan mencapai target, konsistensi perilaku, dan respons terhadap perubahan kondisi.

Sebelum masuk ke pembahasan capaian pembelajaran, mahasiswa harus memahami bahwa proyek akhir adalah bukti integrasi seluruh materi. Yang penting bukan hanya membuat game yang selesai, tetapi menunjukkan bahwa setiap perilaku agen memiliki alasan teknis, dapat didemokan, dan dapat dijelaskan dengan bahasa yang jelas.

### Inti yang Harus Ditekankan

- Proyek akhir harus menghasilkan **mini game Unity yang playable**, bukan sekadar prototipe tidak lengkap.
- AI dalam proyek harus **jelas, terintegrasi, dan dapat dijelaskan secara teknis**.
- **AI Director**, adaptive systems, dan emergent behavior harus dipahami sebagai bagian dari desain pengalaman bermain.
- **Debugging** dan **evaluasi** adalah tahap penting untuk memastikan perilaku agen benar dan sesuai tujuan.
- Presentasi final harus mampu menunjukkan demo, arsitektur, keputusan teknis, dan keterbatasan sistem.

### Transisi ke Slide Berikutnya

Setelah memahami target dan fokus proyek akhir, kita akan melihat bagaimana seluruh kemampuan ini dipetakan ke dalam capaian pembelajaran mata kuliah.

---

## Slide 016 - CPMK Mata Kuliah

### Narasi

Slide ini merangkum **CPMK Mata Kuliah**, yaitu capaian yang diharapkan setelah mahasiswa menyelesaikan seluruh rangkaian pembelajaran Game Cerdas. CPMK bukan daftar topik yang harus dihafal, melainkan kompetensi yang harus dapat ditunjukkan mahasiswa melalui penjelasan, implementasi, dan integrasi teknik **Game AI** dalam proyek permainan.

Secara keseluruhan, CPMK ini bergerak dari pemahaman konsep menuju penerapan praktis. Mahasiswa diharapkan tidak hanya mampu menjelaskan arsitektur `intelligent agent`, tetapi juga membangun perilaku agen yang dapat bergerak, bernavigasi, mempersepsikan lingkungan, dan mengambil keputusan.

Berikut adalah tujuh capaian utama yang menjadi arah pembelajaran:

1. **Menjelaskan konsep dan arsitektur kecerdasan buatan dalam permainan komputer**, termasuk peran agen, lingkungan, persepsi, keputusan, dan aksi.
2. **Mengimplementasikan `autonomous movement`, `navigation`, `perception`, dan `pathfinding`** agar agen dapat bergerak dan merespons lingkungan secara mandiri.
3. **Merancang perilaku agen menggunakan `FSM`, `Behavior Tree`, dan `Utility-Based AI`** untuk menghasilkan perilaku yang terstruktur, mudah dikontrol, dan dapat dikembangkan.
4. **Mengembangkan konten permainan secara prosedural menggunakan `Procedural Content Generation`** sehingga konten dapat dihasilkan secara sistematis dan bervariasi.
5. **Merancang sistem permainan adaptif menggunakan `Dynamic Difficulty Adjustment` dan `Player Modeling`** agar pengalaman bermain dapat disesuaikan dengan kondisi pemain.
6. **Menjelaskan serta mengimplementasikan konsep dasar `learning-based Game AI` menggunakan `Unity ML-Agents`** sebagai pengenalan pada agen yang belajar dari interaksi.
7. **Mengintegrasikan beberapa teknik Game AI ke dalam permainan interaktif menggunakan Unity**, sehingga komponen AI tidak berdiri sendiri tetapi membentuk pengalaman bermain yang koheren.

Poin penting yang harus dipahami mahasiswa adalah bahwa ketujuh CPMK ini saling terhubung. Konsep dasar pada CPMK 1 menjadi fondasi untuk implementasi perilaku, navigasi, dan pengambilan keputusan. Sementara itu, teknik seperti `FSM`, `Behavior Tree`, `Procedural Content Generation`, `Dynamic Difficulty Adjustment`, dan `Unity ML-Agents` akan digunakan untuk membangun sistem yang lebih kompleks. Pada akhirnya, mahasiswa diharapkan mampu mengintegrasikan berbagai teknik tersebut ke dalam satu permainan yang playable, dapat didemokan, dan dapat dijelaskan secara teknis.

### Inti yang Harus Ditekankan

- **CPMK** adalah capaian kompetensi, bukan sekadar daftar materi.
- Mahasiswa harus mampu menjelaskan, mengimplementasikan, merancang, dan mengintegrasikan teknik **Game AI**.
- Kompetensi bergerak dari konsep dasar, perilaku agen, konten prosedural, sistem adaptif, hingga `learning-based Game AI`.
- Unity digunakan sebagai platform integrasi untuk membangun permainan interaktif yang dapat didemokan.

### Transisi ke Slide Berikutnya

Selanjutnya, kita akan membahas **CPMK 1** secara lebih detail, yaitu kemampuan menjelaskan konsep dan arsitektur **Game AI**, mulai dari definisi, tujuan, hingga peran `intelligent agent`, `environment`, `perception`, `decision`, dan `action` dalam sistem permainan.

---

## Slide 017 - CPMK 1

### Narasi

Slide ini membahas **CPMK 1**, yaitu kemampuan mahasiswa dalam menjelaskan konsep dan arsitektur **Game AI**. Fokus utamanya bukan langsung membuat sistem yang rumit, melainkan membangun kerangka berpikir yang benar tentang bagaimana agen dalam permainan dapat berperilaku secara cerdas, terarah, dan konsisten.

**Game AI** adalah teknik yang digunakan untuk membuat agen dalam game, misalnya NPC, mampu merespons lingkungan, mengambil keputusan, dan melakukan aksi. Tujuannya bukan membuat agen benar-benar “pintar” dalam arti akademik, tetapi membuat agen terasa hidup, responsif, dan mendukung pengalaman bermain.

Perbedaan penting yang perlu dipahami adalah **game AI vs academic AI**. Dalam akademik, AI sering diarahkan untuk mencari solusi optimal atau general. Sementara dalam game, AI lebih menekankan pada perilaku yang **playable**, **predictable**, **performant**, dan sesuai desain permainan. Karena itu, banyak solusi game AI menggunakan pendekatan sederhana, heuristik, atau aturan yang terbatas, asalkan hasilnya terasa natural dan tidak membebani performa.

Konsep intinya adalah **intelligent agent**. Agen ini berinteraksi dengan **environment**, yaitu dunia permainan, pemain, NPC lain, objek, dan aturan yang berlaku. Agar agen dapat bertindak, ia membutuhkan beberapa komponen utama:

- **Perception**: proses agen menerima informasi dari lingkungan, misalnya jarak pemain, arah pandang, kondisi kesehatan, atau kejadian tertentu.
- **Memory**: penyimpanan informasi penting, misalnya posisi terakhir pemain terlihat atau status alarm NPC.
- **Decision**: proses memilih perilaku berdasarkan hasil persepsi dan memori, misalnya tetap patroli, mengejar, atau menyerang.
- **Action**: eksekusi perilaku yang mengubah keadaan agen atau lingkungan, misalnya bergerak, berhenti, berbicara, atau menyerang.

Komponen-komponen ini biasanya berjalan dalam **update loop**, yaitu siklus berulang yang terjadi setiap frame atau tick permainan. Alurnya sederhana: agen membaca lingkungan, memproses informasi, memilih keputusan, lalu melakukan aksi. Dalam arsitektur yang baik, bagian-bagian ini dibuat **modular** agar mudah dikembangkan, diuji, dan dipelihara.

Sebagai contoh, **NPC Guard** dapat bekerja seperti ini: sensor mendeteksi pemain, memori menyimpan posisi terakhir pemain terlihat, modul keputusan memilih apakah NPC harus patroli, mengejar, atau kembali ke pos, lalu modul aksi menjalankan gerakan atau respons yang sesuai. Contoh ini membantu mahasiswa melihat bahwa perilaku NPC bukan sekadar skrip tunggal, melainkan hasil dari rangkaian komponen yang saling terhubung.

### Inti yang Harus Ditekankan

- **CPMK 1** adalah fondasi konseptual sebelum masuk ke implementasi teknis.
- **Game AI** tidak harus optimal secara akademik; yang penting perilaku agen terasa masuk akal, stabil, dan mendukung gameplay.
- Agen cerdas dalam game dibangun dari **perception**, **memory**, **decision`, dan **action** yang berjalan dalam **update loop**.
- **Modular architecture** penting agar perilaku NPC lebih mudah dikembangkan, di-debug, dan dikombinasikan dengan teknik lain.

### Transisi ke Slide Berikutnya

Setelah konsep agen, lingkungan, dan arsitektur perilaku dipahami, pembahasan berikutnya akan masuk ke **CPMK 2**, yaitu mengimplementasikan kemampuan agen dalam bergerak, menavigasi, mempersepsikan lingkungan, dan mencari jalur, mulai dari **steering behavior**, waypoint, **NavMesh**, hingga konsep pathfinding seperti **A\***.

---

## Slide 018 - CPMK 2

### Narasi

Pada **CPMK 2**, fokus kita bergeser dari memahami konsep menjadi **mengimplementasikan perilaku agent** yang benar-benar bergerak di dunia game. Mahasiswa diharapkan mampu membuat agent yang tidak hanya diam, tetapi dapat **bergerak secara autonomous**, mengenali lingkungan, memilih arah, dan mencari jalur menuju target.

Intuisi praktisnya adalah: agent yang baik harus mampu menjawab pertanyaan sederhana, seperti “ke mana saya bergerak sekarang?” dan “bagaimana saya sampai ke sana?”. Untuk itu, slide ini menekankan empat kemampuan utama:

- **movement**, yaitu kemampuan agent mengubah posisi atau orientasi secara mandiri;
- **navigation**, yaitu kemampuan memilih rute atau mengikuti titik-titik tertentu;
- **perception**, yaitu kemampuan agent mengetahui informasi lingkungan seperti posisi target atau jarak;
- **pathfinding**, yaitu kemampuan mencari jalur yang valid dari posisi awal ke tujuan.

Salah satu cara paling umum untuk membuat gerakan terasa natural adalah **steering behavior**. Steering behavior bekerja dengan menyesuaikan kecepatan atau arah agent secara bertahap, sehingga NPC tidak bergerak seperti teleport atau patah-patah. Beberapa contoh yang perlu dipahami adalah:

- `Seek`: agent bergerak menuju target;
- `Flee`: agent menjauh dari target;
- `Arrive`: agent mendekati target lalu melambat saat hampir tiba;
- `Patrol`: agent mengikuti rangkaian titik atau jalur tertentu;
- `Chase`: agent mengejar target dengan memperbarui arah secara terus-menerus.

Peran **perception** sangat penting karena tanpa informasi yang tepat, steering dan pathfinding tidak akan menghasilkan perilaku yang masuk akal. Agent perlu tahu posisi target, jarak, atau keberadaan rintangan sebelum memutuskan apakah harus `Seek`, `Flee`, `Arrive`, atau `Chase`. Dengan kata lain, perception adalah input yang mengubah data lingkungan menjadi keputusan gerak.

Untuk navigasi yang lebih kompleks, agent dapat menggunakan **waypoint** atau **NavMesh**. Waypoint adalah titik-titik yang diikuti agent, sedangkan `NavMesh` adalah representasi area yang dapat dilalui di dalam engine seperti Unity. Dengan `NavMesh`, agent tidak perlu menghitung setiap jalur secara manual karena engine dapat membantu menemukan rute yang valid di atas permukaan yang sudah dipetakan.

Konsep **pathfinding** perlu dipahami sebagai proses pencarian jalur dari posisi awal ke tujuan. Beberapa algoritma dasar yang sering muncul adalah:

- `BFS`: pencarian jalur pada grid tanpa bobot, cocok untuk memahami konsep eksplorasi sistematis;
- `Dijkstra`: pencarian jalur terpendek pada graph berbobot, tetapi tidak menggunakan heuristik;
- `A*`: pencarian jalur yang lebih efisien karena menggabungkan biaya jalur sejauh ini dengan estimasi jarak ke tujuan.

Dalam implementasi praktis, mahasiswa juga perlu memahami komponen seperti `NavMeshAgent`. Komponen ini memungkinkan agent bergerak di atas `NavMesh`, mengikuti jalur yang ditemukan, dan menyesuaikan gerakannya terhadap target atau rintangan. Poin pentingnya bukan sekadar memanggil komponen, tetapi memahami hubungan antara **perception**, **steering**, **pathfinding**, dan **movement** sebagai satu sistem perilaku agent.

Sebelum lanjut ke topik berikutnya, mahasiswa perlu memastikan bahwa mereka dapat membedakan **steering behavior** dan **pathfinding**. Steering lebih bersifat lokal dan responsif, sedangkan pathfinding lebih bersifat global dan menghasilkan rute. Keduanya saling melengkapi: pathfinding memberi tahu “rute mana yang harus diikuti”, sedangkan steering membantu agent bergerak mulus mengikuti rute tersebut.

### Inti yang Harus Ditekankan

- **CPMK 2** berfokus pada implementasi agent yang mampu bergerak, mengenali lingkungan, dan mencari jalur.
- **Steering behavior** seperti `Seek`, `Flee`, `Arrive`, `Patrol`, dan `Chase` membuat gerakan NPC terasa lebih natural.
- **Perception** adalah input penting yang menentukan apakah agent mengejar, menghindari, atau mendekati target.
- **Pathfinding** seperti `BFS`, `Dijkstra`, dan `A*` membantu agent menemukan jalur dari posisi awal ke tujuan.
- `NavMesh` dan `NavMeshAgent` adalah contoh implementasi praktis untuk navigasi agent di lingkungan game.

### Transisi ke Slide Berikutnya

Setelah agent mampu bergerak, mengenali target, dan mencari jalur, pertanyaan berikutnya adalah: perilaku mana yang harus dipilih pada kondisi tertentu? Pada slide berikutnya, kita akan masuk ke **CPMK 3** tentang merancang **decision making agent** menggunakan **Finite State Machine**, **Behavior Tree**, dan pendekatan **Utility-Based**.

---

## Slide 019 - CPMK 3

### Narasi

Pada bagian ini, kita masuk ke **CPMK 3**, yaitu kemampuan mahasiswa untuk **merancang decision making agent**. Fokusnya bukan lagi bagaimana agent bergerak, tetapi bagaimana agent menentukan **action** yang paling sesuai berdasarkan kondisi lingkungan. Dalam game, keputusan ini menentukan apakah NPC akan berpatroli, mengejar, menyerang, atau mundur.

Contoh sederhana yang ditampilkan adalah alur perilaku musuh:

```text
Enemy:
Patrol → Chase → Attack → Flee
```

Alur ini dapat dibaca sebagai **Finite State Machine** sederhana. Agent memiliki beberapa state, yaitu `Patrol`, `Chase`, `Attack`, dan `Flee`. Perpindahan antar state terjadi ketika kondisi tertentu terpenuhi, misalnya target terlihat, jarak dekat, atau kesehatan rendah.

Dalam **Finite State Machine**, perilaku agent didefinisikan melalui state dan transisi. Kelebihannya mudah dipahami dan mudah di-debug, tetapi jika jumlah kondisi bertambah, transisi bisa menjadi banyak dan sulit dikelola.

Pendekatan lain adalah **Behavior Tree**. Behavior Tree menyusun perilaku dalam struktur pohon, di mana node dapat berupa kondisi, aksi, atau pengatur alur seperti selector dan sequence. Pendekatan ini cocok untuk perilaku NPC yang lebih kompleks karena memungkinkan hierarki keputusan, misalnya memilih antara menyerang, mengambil cover, atau mencari bantuan.

Pendekatan ketiga adalah **Utility-Based** decision making. Pada pendekatan ini, setiap action diberi skor berdasarkan kondisi agent dan lingkungan. Action dengan skor tertinggi dipilih sebagai perilaku berikutnya.

Contoh utility decision making pada slide adalah:

```text
Attack Score = 0.75
Flee Score = 0.90
Take Cover Score = 0.60

Action dipilih = Flee
```

Pada contoh ini, `Flee` memiliki skor tertinggi, yaitu `0.90`, sehingga agent memilih untuk mundur. Skor ini biasanya dihitung dari faktor seperti jarak ke musuh, kesehatan, jumlah musuh, atau ancaman yang diterima.

Tiga pendekatan ini memiliki karakter berbeda:

- **Finite State Machine** cocok untuk perilaku yang jelas dan terbatas.
- **Behavior Tree** cocok untuk perilaku hierarkis yang mudah disusun.
- **Utility-Based** cocok untuk perilaku yang lebih adaptif karena keputusan dihasilkan dari penilaian skor.

Yang perlu dipahami mahasiswa sebelum lanjut adalah bahwa decision making agent bukan sekadar memilih action, tetapi menentukan **kapan** action tersebut dipilih. Mahasiswa perlu mampu merancang kondisi, prioritas, dan mekanisme pemilihan perilaku yang membuat NPC terasa lebih responsif dan masuk akal.

### Inti yang Harus Ditekankan

- **CPMK 3** berfokus pada **decision making agent**, yaitu kemampuan NPC memilih perilaku berdasarkan kondisi.
- **Finite State Machine** menggunakan state dan transisi, seperti `Patrol`, `Chase`, `Attack`, dan `Flee`.
- **Behavior Tree** menyusun perilaku dalam struktur pohon untuk keputusan yang lebih hierarkis.
- **Utility-Based** memilih action dengan skor tertinggi, misalnya `Flee` jika `Flee Score` lebih besar.
- Mahasiswa perlu memahami hubungan antara kondisi lingkungan, prioritas perilaku, dan action yang dipilih.

### Transisi ke Slide Berikutnya

Setelah agent dapat mengambil keputusan, langkah berikutnya adalah memahami bagaimana lingkungan atau konten game dapat dibuat secara prosedural. Pada slide berikutnya, kita akan masuk ke **CPMK 4** tentang **Procedural Content Generation**.

---

## Slide 020 - CPMK 4

### Narasi

**CPMK 4** berfokus pada **Procedural Content Generation** atau **PCG**. Intinya, konten game tidak selalu dibuat manual satu per satu, tetapi dapat dihasilkan oleh algoritma.

Dalam konteks game, PCG membantu menciptakan variasi level, penempatan objek, spawn NPC, atau struktur dungeon secara otomatis. Mahasiswa perlu memahami bahwa PCG bukan sekadar "acak tanpa aturan", melainkan proses acak yang dikendalikan oleh aturan, parameter, dan batasan desain.

Komponen utama yang harus dipahami adalah:

- **randomness**: sumber variasi dalam proses generasi.
- `seed`: nilai awal yang membuat hasil acak dapat diulang.
- **procedural spawning**: penempatan objek atau entitas secara algoritmik.
- **random level**: pembuatan variasi level dari aturan tertentu.
- **dungeon generation**: pembuatan ruang, koridor, dan struktur area.
- **grid-based generation**: generasi berbasis sel atau grid.
- **random walk**: metode pembentukan jalur atau ruang melalui langkah acak.
- `BSP`: pembagian area secara rekursif untuk membentuk ruang.
- **cellular automata**: aturan sel yang berkembang menjadi pola.
- **constraint-based generation**: generasi dengan batasan agar konten tetap layak dimainkan.

Contoh sederhana dari slide adalah:

```text
Seed 12345 menghasilkan dungeon A
Seed 54321 menghasilkan dungeon B
Seed 12345 menghasilkan dungeon A lagi
```

Contoh ini menunjukkan sifat penting PCG: **determinisme**. Jika `seed` sama dan aturan generasi sama, hasil yang dihasilkan juga sama. Hal ini berguna untuk debugging, replikasi level, multiplayer, atau pengujian konsistensi.

Secara praktis, alur PCG biasanya dimulai dari input parameter, misalnya `seed`, ukuran grid, jumlah ruang, dan batasan desain. Algoritma kemudian memproses parameter tersebut menjadi struktur level, misalnya grid, ruang, koridor, atau titik spawn. Output akhirnya adalah konten game yang dapat langsung digunakan oleh sistem lain, seperti pathfinding, spawning, atau interaksi NPC.

Sebelum lanjut, mahasiswa perlu memahami bahwa PCG adalah fondasi untuk membuat konten yang skalabel dan bervariasi. Konten yang dihasilkan kemudian dapat menjadi lingkungan tempat NPC bergerak, objek muncul, atau tantangan disusun.

### Inti yang Harus Ditekankan

- PCG adalah generasi konten game secara algoritmik, bukan acak tanpa kontrol.
- `seed` membuat hasil generasi dapat direproduksi secara konsisten.
- Metode seperti `BSP`, **cellular automata**, dan **constraint-based generation** membantu menghasilkan konten yang bervariasi namun tetap layak dimainkan.
- Output PCG dapat menjadi dasar untuk spawning, level, dungeon, dan interaksi entitas dalam game.

### Transisi ke Slide Berikutnya

Setelah konten dapat dihasilkan secara prosedural, langkah berikutnya adalah membuat sistem yang dapat menyesuaikan diri dengan kondisi pemain. Pada slide berikutnya, kita akan membahas CPMK 5, yaitu perancangan sistem adaptif yang merespons performa pemain.

---

## Slide 021 - CPMK 5

### Narasi

Pada slide ini, fokusnya adalah **CPMK 5**, yaitu kemampuan mahasiswa merancang **sistem adaptif** dalam game. Sistem adaptif bukan sekadar membuat level sulit atau mudah secara tetap, tetapi membuat game yang dapat membaca kondisi pemain dan menyesuaikan tantangan secara dinamis. Intuisi praktisnya adalah game yang baik tidak memaksa semua pemain mengalami kurva kesulitan yang sama, melainkan memberi respons terhadap cara pemain bermain.

Konsep utamanya adalah **Dynamic Difficulty Adjustment** atau **DDA**. DDA bekerja dengan mengamati **player performance**, misalnya tingkat keberhasilan, waktu menyelesaikan tugas, jumlah kematian, atau seberapa cepat pemain menguasai musuh. Data tersebut dapat disebut **player telemetry**, yaitu informasi perilaku pemain yang dikumpulkan selama permainan. Dari data itu, sistem dapat melakukan **skill estimation** untuk memperkirakan kemampuan pemain, serta mengenali **play style** seperti agresif, defensif, eksploratif, atau cepat.

Hasil observasi tersebut kemudian dirangkum menjadi **player profile**. Profil ini membantu game memahami apakah pemain sedang terlalu dominan, kesulitan, atau berada pada zona tantangan yang tepat. Berdasarkan profil tersebut, sistem memilih **adaptation policy**, yaitu aturan atau strategi penyesuaian. Policy ini menentukan parameter apa yang diubah, seberapa besar perubahan, dan kapan perubahan itu diterapkan.

Implementasinya dapat dilakukan dengan **difficulty multiplier**, yaitu nilai pengali yang memengaruhi parameter game. Misalnya, multiplier dapat mengubah jumlah musuh, kecepatan musuh, damage, atau frekuensi item. Dalam konteks game, sistem adaptif dapat dianggap sebagai bagian dari **decision making** yang tidak hanya mengatur perilaku NPC, tetapi juga mengatur lingkungan permainan agar tetap menantang dan menyenangkan.

Urutan prosesnya dapat dilihat sebagai berikut:

1. Kumpulkan **player telemetry** dari aktivitas pemain.
2. Lakukan **skill estimation** untuk memperkirakan kemampuan pemain.
3. Susun **player profile** berdasarkan kemampuan dan **play style**.
4. Terapkan **adaptation policy** melalui **difficulty multiplier**.

Contoh pada slide menunjukkan dua aturan sederhana:

```text
Jika player terlalu dominan:
    spawn enemy lebih cepat

Jika player kesulitan:
    health item lebih sering muncul
```

Pada aturan pertama, jika pemain terlalu dominan, sistem meningkatkan tekanan dengan `spawn enemy` lebih cepat. Tujuannya menjaga agar pemain tidak merasa permainan terlalu mudah. Pada aturan kedua, jika pemain kesulitan, sistem memberikan bantuan dengan membuat `health item` lebih sering muncul. Urutan eksekusinya adalah sistem membaca data pemain, menilai kondisi, memilih aturan adaptasi, lalu mengubah parameter runtime. Hasil yang diharapkan adalah pengalaman bermain yang lebih seimbang, tidak terlalu frustrasi, dan tidak terlalu membosankan.

Mahasiswa perlu memahami bahwa adaptasi yang baik harus halus dan dapat dijelaskan. Jika perubahan terlalu drastis, pemain dapat merasa game tidak adil. Oleh karena itu, penting untuk menentukan ambang batas, batas perubahan, dan jenis parameter yang boleh disesuaikan. Konsep ini menjadi dasar sebelum membahas pendekatan yang lebih kompleks, di mana sistem belajar dari data dan pengalaman.

### Inti yang Harus Ditekankan

- **CPMK 5** menekankan perancangan **sistem adaptif** yang menyesuaikan kondisi game berdasarkan data pemain.
- **Dynamic Difficulty Adjustment** menggunakan **player telemetry**, **skill estimation**, **play style**, dan **player profile** untuk memilih **adaptation policy**.
- **difficulty multiplier** adalah mekanisme praktis untuk mengubah parameter seperti `spawn enemy`, `health item`, atau tantangan lain secara dinamis.
- Adaptasi harus menjaga keseimbangan antara tantangan dan kenyamanan pemain, bukan sekadar membuat game lebih sulit atau lebih mudah.

### Transisi ke Slide Berikutnya

Setelah memahami bagaimana sistem dapat menyesuaikan tantangan berdasarkan perilaku pemain, langkah berikutnya adalah melihat pendekatan learning-based, di mana sistem tidak hanya mengikuti aturan manual, tetapi juga dapat belajar dari interaksi dengan lingkungan.

---

## Slide 022 - CPMK 6

### Narasi

Pada CPMK 6, mahasiswa diharapkan mampu menjelaskan dan mencoba **sistem pembelajaran berbasis data** untuk game. Setelah sebelumnya membahas sistem yang menyesuaikan kondisi berdasarkan data pemain, langkah berikutnya adalah memahami bagaimana sebuah `agent` dapat belajar dari pengalaman, bukan hanya dari aturan yang ditulis manual.

**Supervised learning** adalah pendekatan di mana model dilatih menggunakan data yang sudah memiliki label. Dalam konteks game, pendekatan ini dapat digunakan ketika kita memiliki contoh yang sudah dikategorikan, misalnya data perilaku atau hasil klasifikasi yang sudah diberi target. Namun, untuk perilaku `agent` yang harus berkembang melalui interaksi dengan lingkungan, pendekatan yang lebih relevan adalah **reinforcement learning**.

Dalam **reinforcement learning**, `agent` belajar dengan cara mencoba `action` di lingkungan tertentu. Setiap tindakan menghasilkan `reward`, yaitu sinyal yang menunjukkan apakah tindakan tersebut menguntungkan atau tidak. Tujuan `agent` bukan hanya mendapatkan `reward` instan, tetapi memaksimalkan total `reward` dalam jangka panjang.

Konsep inti yang harus dipahami adalah:

- `observation`: data mentah yang diterima `agent` dari lingkungan, misalnya posisi, sensor, atau kondisi game.
- `state`: representasi dari `observation` yang digunakan untuk mengambil keputusan.
- `action`: pilihan yang dapat dilakukan `agent`, misalnya bergerak, berputar, menyerang, atau berhenti.
- `reward`: umpan balik numerik dari lingkungan.
- `episode`: satu rangkaian interaksi dari awal sampai selesai, misalnya dari spawn sampai mencapai target atau kalah.
- `policy`: strategi atau fungsi yang memetakan `state` ke `action`.

Alur dasar reinforcement learning dapat dilihat sebagai:

```text
observation → state → policy → action → reward → state baru
```

Proses ini berulang sampai `episode` berakhir. `agent` yang baik akan memiliki `policy` yang semakin tepat karena belajar dari `reward` yang diterima.

**Q-learning** adalah salah satu metode reinforcement learning yang mempelajari nilai dari pasangan `state` dan `action`. Nilai ini sering disebut `Q(s,a)`, yaitu estimasi seberapa baik `agent` berada di `state` tertentu dan melakukan `action` tertentu. Dengan nilai `Q` yang sudah cukup baik, `agent` dapat memilih `action` yang diperkirakan menghasilkan `reward` terbesar.

Dalam praktikum, contoh sederhana adalah **Q-Learning grid agent**. `agent` berada di grid, `state`-nya bisa berupa posisi `agent`, `action`-nya adalah arah gerakan, dan `reward` diberikan ketika `agent` mencapai target atau ketika `agent` bergerak mendekati target. Contoh lain adalah `agent` di **Unity** `ML-Agents` yang belajar mencapai target. Di sini, Unity menyediakan lingkungan game, `agent` menerima `observation`, memilih `action`, dan menerima `reward` sampai `episode` selesai.

**PPO** atau Proximal Policy Optimization dipahami secara konseptual sebagai metode yang melatih `policy` secara langsung. Berbeda dengan Q-learning yang fokus pada nilai `state-action`, PPO lebih berfokus pada memperbaiki strategi `agent` agar stabil selama proses pembelajaran. Dalam Unity `ML-Agents`, PPO sering digunakan ketika `agent` memiliki ruang `action` yang lebih kompleks atau membutuhkan pembelajaran yang lebih halus.

Sebelum lanjut, mahasiswa perlu memastikan bahwa perbedaan antara `observation`, `state`, `action`, `reward`, `episode`, dan `policy` sudah jelas. Pemahaman ini penting karena semua praktikum berikutnya akan dibangun di atas loop pembelajaran yang sama.

### Inti yang Harus Ditekankan

- **Supervised learning** menggunakan data berlabel, sedangkan **reinforcement learning** belajar dari interaksi dan `reward`.
- Loop utama reinforcement learning adalah `observation`, `state`, `policy`, `action`, `reward`, dan `episode`.
- **Q-learning** memperkirakan nilai `Q(s,a)` untuk memilih `action` yang menguntungkan.
- **Unity** `ML-Agents` adalah lingkungan untuk melatih `agent` dalam game, dengan contoh `agent` grid dan `agent` mencapai target.
- **PPO** dipahami secara konseptual sebagai metode pelatihan `policy` yang stabil, bukan sebagai detail implementasi lengkap.

### Transisi ke Slide Berikutnya

Setelah konsep pembelajaran ini dipahami, langkah berikutnya adalah mengintegrasikan komponen-komponen tersebut ke dalam mini game yang playable, bukan sekadar demo algoritma, lengkap dengan player, NPC, navigation, decision making, dan kondisi menang atau kalah.

---

## Slide 023 - CPMK 7

### Narasi

Slide ini membahas **CPMK 7**, yaitu kemampuan mengintegrasikan kecerdasan game ke dalam **game interaktif**. Pada tahap ini, mahasiswa tidak lagi hanya memahami satu komponen perilaku, tetapi mulai merangkai beberapa bagian menjadi satu pengalaman bermain yang utuh.

Intuisi praktisnya adalah: dari eksperimen kecil, mahasiswa harus mampu membangun **mini game** yang bisa dimainkan. Artinya, setiap sistem harus saling terhubung dan memberikan umpan balik yang jelas kepada pemain.

Komponen utama yang diharapkan muncul dalam mini game ini meliputi:

- `player controller` untuk menggerakkan pemain.
- `NPC` atau enemy yang memiliki perilaku responsif.
- `navigation` agar agen dapat berpindah posisi secara masuk akal.
- `decision making` agar perilaku agen berubah sesuai situasi.
- `gameplay objective` yang memberi tujuan bermain.
- `UI` untuk menampilkan informasi penting.
- `win/lose condition` yang menentukan akhir permainan.
- **debug perilaku** untuk memeriksa apakah sistem berjalan sesuai desain.
- **visual asset** yang layak agar game mudah dipahami.
- **dokumentasi** dan **evaluasi** sebagai bagian dari proses pengembangan.

Target utama slide ini dapat diringkas sebagai berikut:

```text
bukan sekadar demo algoritma,
tetapi mini game yang playable.
```

Artinya, keberhasilan tidak diukur hanya dari satu fungsi yang berjalan, tetapi dari apakah pemain dapat memahami tujuan, berinteraksi dengan dunia, dan merasakan konsekuensi dari keputusan yang dibuat.

Sebelum lanjut, mahasiswa perlu memahami bahwa integrasi adalah tahap di mana kualitas desain, keterbacaan perilaku, dan stabilitas sistem menjadi sama pentingnya dengan logika internal. Jika satu bagian tidak jelas, misalnya tujuan permainan atau umpan balik `UI`, maka pengalaman bermain akan terasa patah meskipun setiap komponen secara teknis sudah ada.

### Inti yang Harus Ditekankan

- **CPMK 7** menekankan integrasi, bukan sekadar implementasi satu perilaku.
- Mini game harus memiliki tujuan, interaksi, dan kondisi menang/kalah yang jelas.
- `player controller`, `NPC`, `navigation`, dan `decision making` harus saling terhubung.
- **debug**, **visual asset**, **dokumentasi**, dan **evaluasi** adalah bagian penting dari hasil akhir.

### Transisi ke Slide Berikutnya

Setelah memahami capaian integrasi ini, slide berikutnya akan memetakan bagaimana seluruh materi dan praktikum tersebut disusun dalam rencana pembelajaran semester.

---

## Slide 024 - Rencana Pembelajaran Semester

### Narasi

Slide ini menyajikan **Rencana Pembelajaran Semester** untuk tahap awal mata kuliah **Game Cerdas**. Tabel ini bukan sekadar daftar materi, tetapi alur pembelajaran dari konsep dasar menuju praktikum **Unity** yang dapat diamati langsung.

Fokus minggu 1 sampai 4 adalah membangun fondasi perilaku agen game: apa itu **Game AI**, bagaimana **agent** berinteraksi dengan **environment**, bagaimana agen bergerak, dan bagaimana agen memilih rute.

1. **Minggu 1 — Introduction to Intelligent Games & Game AI**  
   Mahasiswa memahami definisi **Game AI**, tujuan AI dalam game, **game loop**, **agent**, **environment**, serta pola `perception → decision → action`. Praktikum berupa setup project **Unity** dan pembuatan `NPC Detector`, sehingga mahasiswa mulai melihat bagaimana agen dapat "mengetahui" keberadaan objek lain.

2. **Minggu 2 — AI Architecture & Game Agent**  
   Pembahasan masuk ke arsitektur agen: **state**, sensor/perception, actuator/action, update loop, dan modular architecture. Praktikumnya adalah `NPC Guard` yang mendeteksi player berdasarkan jarak atau `FOV`. Tujuannya agar mahasiswa memahami bahwa perilaku NPC tidak muncul tiba-tiba, tetapi dibangun dari data input dan kondisi state.

3. **Minggu 3 — Movement AI & Steering Behaviors**  
   Mahasiswa mempelajari perilaku gerak lokal seperti `seek`, `flee`, `arrive`, `pursue`, `evade`, `wander`, obstacle avoidance, `separation`, dan `cohesion`. Targetnya adalah autonomous moving agents, yaitu agen yang dapat bergerak secara mandiri dan responsif terhadap lingkungan.

4. **Minggu 4 — Pathfinding & Navigation**  
   Pembahasan beralih ke navigasi global: `graph`, `waypoint`, `BFS`, `Dijkstra`, `A*`, `heuristic`, dan `NavMesh`. Praktikumnya adalah implementasi `A*` sederhana dan penggunaan **Unity NavMesh**, sehingga mahasiswa dapat membedakan antara "bergerak ke arah target" dan "menemukan rute yang valid".

Sebelum lanjut, mahasiswa perlu memahami bahwa **movement AI** biasanya menangani perilaku lokal, sedangkan **pathfinding** menangani pemilihan rute. Keduanya sering digabungkan dalam NPC yang mampu mendeteksi, bergerak, dan menavigasi lingkungan.

### Inti yang Harus Ditekankan

- **Game AI** dibangun dari **agent** yang menjalankan siklus `perception → decision → action` di dalam **game loop**.
- **Steering behaviors** menghasilkan gerak lokal yang natural, seperti `seek`, `flee`, `arrive`, `separation`, dan `cohesion`.
- **Pathfinding** menghasilkan rute global menggunakan struktur seperti `graph`, `waypoint`, `A*`, dan `NavMesh`.
- Praktikum **Unity** harus menghasilkan NPC yang dapat dideteksi, bergerak, dan menavigasi, bukan hanya objek statis.

### Transisi ke Slide Berikutnya

Setelah fondasi agent, movement, dan navigation ini terbentuk, pembahasan berikutnya akan melanjutkan rencana minggu 5 sampai 8, yaitu decision making dengan **Finite State Machine**, **Behavior Tree**, integrasi AI taktis, dan mini project.

---

## Slide 025 - Rencana Pembelajaran Semester Lanjutan 1

### Narasi

Slide ini melanjutkan peta pembelajaran semester dari minggu 5 sampai minggu 8. Fokusnya adalah bagaimana NPC tidak hanya bergerak dan mencari jalur, tetapi juga memilih perilaku yang sesuai dengan situasi.

Tabel pada slide ini menunjukkan empat tahap berikutnya:

1. **Minggu 5 — Finite State Machine**  
   Mahasiswa akan mempelajari `state`, `transition`, dan `condition` sebagai cara menyusun perilaku NPC yang diskrit. Contoh yang diberikan adalah alur musuh: `Patrol` → `Chase` → `Attack` → `Flee`. Intuisi pentingnya adalah: FSM mudah dipahami, mudah di-debug, dan cocok untuk perilaku yang bisa dipetakan ke beberapa kondisi jelas.

2. **Minggu 6 — Behavior Tree & Utility-Based Decision**  
   Setelah FSM, mahasiswa diperkenalkan pada struktur keputusan yang lebih fleksibel. `Selector`, `Sequence`, dan `Decorator` membantu menyusun perilaku hierarkis, sementara utility-based decision memilih aksi berdasarkan `score` atau prioritas. Intuisinya: Behavior Tree cocok untuk alur keputusan yang terstruktur, sedangkan utility cocok untuk memilih tindakan yang paling relevan dari beberapa kemungkinan.

3. **Minggu 7 — Integrasi Sistem Cerdas & Tactical Decision**  
   Pada tahap ini, komponen-komponen sebelumnya mulai digabungkan. Mahasiswa akan melihat bagaimana `perception`, `memory`, `target selection`, `cover`, `tactical positioning`, dan `coordination` bekerja bersama dalam satu sistem NPC. Tujuannya adalah membuat perilaku yang lebih koheren, misalnya musuh yang tidak hanya mengejar, tetapi juga memilih posisi atau bekerja sama dalam kelompok.

4. **Minggu 8 — UTS / Mini Project**  
   Minggu ini menjadi titik integrasi. Mahasiswa diharapkan menggabungkan movement, navigation, perception, dan decision menjadi satu mini game dengan NPC yang bisa bereaksi secara utuh. Ini bukan materi baru, tetapi pengujian apakah konsep-konsep sebelumnya sudah bisa dirangkai menjadi sistem yang berjalan.

Sebelum lanjut, mahasiswa perlu memahami perbedaan utama antara FSM dan Behavior Tree: FSM lebih sederhana untuk perilaku diskrit, sedangkan Behavior Tree lebih kuat untuk keputusan berlapis. Mereka juga perlu menyadari bahwa decision module harus terhubung dengan movement dan navigation, bukan berdiri sendiri.

### Inti yang Harus Ditekankan

- Minggu 5 sampai 8 adalah fase dari perilaku dasar menuju keputusan NPC yang lebih kompleks dan terintegrasi.
- **Finite State Machine** memberi struktur `state` dan `transition` yang sederhana, sedangkan **Behavior Tree** dan utility decision memberi alternatif keputusan yang lebih fleksibel.
- **Mini project** menuntut mahasiswa menghubungkan `perception`, `movement`, `navigation`, dan `decision` menjadi satu sistem NPC yang utuh.

### Transisi ke Slide Berikutnya

Dengan memahami fase ini, mahasiswa sudah memiliki dasar untuk membangun NPC yang bisa bergerak, memilih target, dan mengambil keputusan. Selanjutnya, kita akan masuk ke topik lanjutan semester, yaitu procedural content generation, dynamic difficulty adjustment, dan player modeling.

---

## Slide 026 - Rencana Pembelajaran Semester Lanjutan 2

### Narasi

Slide ini melanjutkan peta pembelajaran dari minggu 9 sampai minggu 12. Fokusnya bergeser dari **perilaku NPC** yang sudah dibangun ke sistem yang membuat konten dan pengalaman bermain menjadi lebih dinamis.

Empat minggu ini membentuk satu alur: **membuat konten secara prosedural**, lalu **menyesuaikan tantangan** berdasarkan pemain.

1. **Minggu 9 — Procedural Content Generation**  
   Mahasiswa memahami konsep dasar **PCG**, yaitu menghasilkan konten game secara algoritmik. Istilah penting yang harus dipahami adalah `randomness`, `seed`, serta perbedaan **constructive** dan **generate-and-test**. Target Unity-nya adalah procedural spawning atau level acak sederhana.

2. **Minggu 10 — PCG for Level & Dungeon Generation**  
   Pembahasan masuk ke teknik pembuatan level: `grid`, `random walk`, `BSP`, `cellular automata`, dan `constraint-based generation`. Mahasiswa perlu melihat bahwa dungeon bukan sekadar acak, tetapi hasil dari aturan, batasan, dan validasi bentuk ruang.

3. **Minggu 11 — Dynamic Difficulty Adjustment**  
   Sistem game mulai membaca performa pemain dan menyesuaikan tantangan. Konsep utamanya adalah **difficulty model**, **adaptive gameplay**, dan `rubber banding`. Targetnya adalah musuh atau tantangan yang berubah sesuai kemampuan pemain.

4. **Minggu 12 — Player Modeling & Adaptive Game**  
   Mahasiswa mempelajari cara merekam `telemetry`, memperkirakan `skill estimation`, mengenali `play style`, membangun `player profile`, lalu merancang `adaptation policy`. Ini menjadi dasar sistem adaptif yang lebih sadar terhadap pemain.

Sebelum lanjut, mahasiswa perlu memahami bahwa konten prosedural dan adaptasi pemain bukan dua hal terpisah. PCG memberi variasi konten, sedangkan player modeling memberi dasar untuk menyesuaikan pengalaman.

### Inti yang Harus Ditekankan

- **PCG** mengubah konten dari statis menjadi prosedural dengan aturan, `seed`, dan validasi.
- Level generation menggunakan teknik seperti `grid`, `random walk`, `BSP`, `cellular automata`, dan `constraint-based generation`.
- **Dynamic Difficulty Adjustment** menggunakan performa pemain untuk mengatur tantangan, misalnya melalui `rubber banding`.
- **Player modeling** merekam `telemetry`, `skill estimation`, `play style`, `player profile`, dan `adaptation policy`.

### Transisi ke Slide Berikutnya

Setelah memahami konten prosedural dan adaptasi pemain, pertemuan berikutnya masuk ke **machine learning** untuk game, yaitu sistem yang belajar dari state, action, dan reward.

---

## Slide 027 - Rencana Pembelajaran Semester Lanjutan 3

### Narasi

Slide ini melanjutkan peta pembelajaran semester dengan fokus pada tahap akhir: mahasiswa tidak hanya memahami teknik **Game AI**, tetapi juga mampu membangun, melatih, dan mengevaluasi sistem cerdas dalam proyek game.

Empat minggu terakhir disusun sebagai alur yang bertahap:

1. **Minggu 13 — Machine Learning for Games**: mahasiswa diperkenalkan pada **machine learning** untuk game, terutama perbedaan **supervised learning** dan **reinforcement learning**, serta konsep dasar `state-action-reward` dan `Q-learning`.
2. **Minggu 14 — Reinforcement Learning with Unity ML-Agents**: fokus bergeser ke implementasi praktis menggunakan `Unity ML-Agents`, dengan komponen utama seperti `agent`, `observation`, `action`, `reward`, `episode`, dan `policy`, serta pengenalan konseptual `PPO`.
3. **Minggu 15 — Advanced Game AI & Final Project Development**: mahasiswa mengintegrasikan berbagai teknik kecerdasan game ke dalam proyek akhir, termasuk `AI Director`, sistem adaptif, perilaku emergen, `debugging`, dan evaluasi kualitas sistem cerdas.
4. **Minggu 16 — UAS — Intelligent Game Project**: tahap akhir berupa presentasi, demo, dan evaluasi terhadap perilaku cerdas serta gameplay dari game yang dikembangkan.

Poin penting yang harus dipahami mahasiswa adalah bahwa tahap ini bukan sekadar menambah algoritma baru, tetapi melatih kemampuan untuk memilih teknik yang tepat, menghubungkan perilaku NPC dengan tujuan desain game, dan membuktikan bahwa sistem cerdas benar-benar berfungsi dalam konteks permainan.

### Inti yang Harus Ditekankan

- Minggu 13–14 adalah transisi dari **Game AI berbasis aturan** menuju **agent yang belajar** melalui lingkungan.
- `Unity ML-Agents` menjadi jembatan antara konsep `reinforcement learning` dan implementasi nyata dalam game.
- Minggu 15 menekankan integrasi, `debugging`, dan evaluasi, bukan hanya membangun satu teknik secara terpisah.
- Minggu 16 menuntut mahasiswa menunjukkan bahwa sistem cerdas yang dibangun memiliki dampak nyata pada gameplay.

### Transisi ke Slide Berikutnya

Setelah peta pembelajaran semester ini jelas, kita kembali ke pertemuan pertama untuk membangun fondasi awal: apa itu **Game AI**, bagaimana `agent` berinteraksi dengan `environment`, dan bagaimana perilaku NPC dimulai dari deteksi sederhana.

---

## Slide 028 - Pertemuan 1 Ringkas

### Narasi

Slide ini merangkum **pertemuan pertama** pada mata kuliah Game Cerdas. Fokusnya adalah membangun pemahaman awal tentang **Game AI**, yaitu pendekatan kecerdasan buatan yang digunakan untuk membuat perilaku dalam game menjadi lebih hidup, responsif, dan menantang. Pada tahap ini, mahasiswa tidak langsung masuk ke algoritma kompleks, tetapi memahami dasar-dasar yang akan menjadi fondasi seluruh materi semester.

Beberapa konsep utama yang perlu dipahami adalah:

- **Game AI** adalah cabang dari kecerdasan buatan yang berfokus pada perilaku agen dalam lingkungan game.
- **Tujuan AI dalam game** bukan hanya menyelesaikan masalah secara optimal, tetapi menciptakan pengalaman bermain yang menyenangkan, konsisten, dan mudah dikendalikan.
- **AI vs academic AI** menunjukkan perbedaan penting: academic AI sering mengejar solusi umum dan optimal, sedangkan game AI lebih menekankan performa, rasa, dan keterlihatan perilaku.
- **game loop** adalah siklus utama game yang terus berjalan setiap frame, tempat pemrosesan input, simulasi, dan perilaku agen terjadi.
- **agent** adalah entitas yang dapat bertindak, misalnya NPC atau player, sedangkan **environment** adalah dunia game beserta aturan, objek, dan agen lain yang memengaruhi keputusan.
- **perception–decision–action** adalah pola dasar perilaku agen: agen mengamati keadaan, membuat keputusan, lalu melakukan aksi.

Praktikum pada pertemuan ini berupa **Setup Unity Project** dan pembuatan **NPC Detector sederhana**. Targetnya adalah:

```text
NPC dapat mendeteksi player berdasarkan jarak.
```

Secara praktis, target ini berarti NPC akan memeriksa posisi `player` dan `npc`, menghitung jarak di antara keduanya, lalu menandai bahwa player terdeteksi jika jarak tersebut berada di bawah nilai ambang tertentu. Konsep sederhana ini menjadi pintu masuk menuju perilaku yang lebih kompleks, seperti penjagaan, pengejaran, dan pencarian.

### Inti yang Harus Ditekankan

- **Game AI** berfokus pada perilaku agen dalam game, bukan hanya penyelesaian masalah secara akademik.
- Tujuan utama AI dalam game adalah membuat NPC terasa hidup, menantang, dan konsisten tanpa membebani performa.
- **game loop** adalah tempat perilaku agen diperbarui setiap frame.
- Pola dasar perilaku agen adalah **perception–decision–action**.
- Praktikum awal menggunakan deteksi jarak sebagai dasar sederhana sebelum masuk ke arsitektur agen yang lebih lengkap.

### Transisi ke Slide Berikutnya

Dengan memahami dasar Game AI dan pola perilaku agen, pertemuan berikutnya akan memperluas konsep ini menjadi arsitektur agen yang lebih terstruktur, termasuk bagaimana sensor, memori, keputusan, dan aksi saling terhubung dalam satu sistem perilaku.

---

## Slide 029 - Pertemuan 2 Ringkas

### Narasi

Slide ini memperdalam cara sebuah NPC dibangun sebagai **intelligent agent**. Agent bukan sekadar objek yang bergerak, tetapi entitas yang mampu membaca lingkungan, menyimpan informasi, memilih perilaku, lalu mengeksekusi tindakan.

**Sensor** adalah bagian yang menerima data mentah dari lingkungan. Dalam praktikum NPC Guard, data ini bisa berupa jarak ke player, arah pandangan, `FOV`, dan hasil `Line of Sight`. Data mentah ini belum cukup untuk membuat keputusan.

**Perception** bertugas mengubah data mentah menjadi informasi yang bermakna. Contoh hasilnya adalah: player terlihat, player berada dalam kerucuan pandangan, player terhalang dinding, atau player tidak terlihat lagi.

**Memory** membuat perilaku NPC lebih natural. Tanpa memory, NPC bisa terus-menerus panik atau lupa ke mana player terakhir terlihat. Variabel seperti `lastKnownPosition`, durasi pencarian, atau cooldown deteksi membantu agent mempertahankan konteks.

**Decision** adalah tahap pemilihan perilaku. Pada praktikum ini, keputusan sederhana dapat berupa:

- `PATROL` jika tidak ada target yang terlihat.
- `CHASE` jika player terlihat dan berada dalam kondisi deteksi.
- `SEARCH` jika player hilang dari pandangan, tetapi posisi terakhir masih diingat.

**Action** adalah eksekusi dari keputusan tersebut. Action bisa berupa bergerak menuju target, berputar menghadap player, berhenti, atau kembali ke jalur patroli.

Alur utamanya mengikuti **update loop** yang berjalan setiap frame atau tick:

1. Agent membaca sensor.
2. Agent memproses perception.
3. Agent memilih decision berdasarkan memory dan kondisi.
4. Agent menjalankan action.

Struktur ini disebut **modular agent architecture** karena setiap bagian bisa dikembangkan dan diuji secara terpisah. Mahasiswa perlu memahami bahwa deteksi NPC tidak cukup hanya berdasarkan jarak. Kombinasi jarak, `FOV`, dan `Line of Sight` membuat perilaku guard lebih masuk akal.

Praktikum NPC Guard menjadi dasar untuk memahami bagaimana perilaku sederhana dapat disusun menjadi sistem yang lebih kompleks. Mahasiswa harus mampu menjelaskan peran sensor, perception, memory, decision, dan action sebelum melanjutkan ke gerakan yang lebih halus.

### Inti yang Harus Ditekankan

- **Intelligent agent** terdiri dari sensor, perception, memory, decision, dan action.
- Deteksi NPC Guard perlu menggabungkan jarak, `FOV`, dan `Line of Sight`.
- Memory seperti `lastKnownPosition` membuat NPC tidak kehilangan konteks saat player hilang.
- `PATROL`, `CHASE`, dan `SEARCH` adalah state dasar yang membentuk perilaku guard.
- **Modular agent architecture** memudahkan mahasiswa memahami, menguji, dan mengembangkan perilaku NPC.

### Transisi ke Slide Berikutnya

Setelah agent mampu memilih perilaku berdasarkan persepsi dan memory, langkah berikutnya adalah membuat gerakan agent lebih halus dan responsif. Slide berikutnya akan membahas cara agent bergerak menuju target, menghindari halangan, dan membentuk perilaku kawanan sederhana.

---

## Slide 030 - Pertemuan 3 Ringkas

### Narasi

Slide ini merangkum pertemuan ketiga dengan fokus pada **Movement** dan **Steering Behaviors**. Setelah agent mampu memilih perilaku berdasarkan kondisi lingkungan, langkah berikutnya adalah membuat gerakannya terasa natural di ruang permainan.

Intuisi praktisnya adalah: agent tidak hanya perlu tahu **ke mana harus pergi**, tetapi juga **bagaimana bergerak ke sana**. **Steering behavior** bekerja sebagai aturan lokal yang menghasilkan arah atau gaya gerak, misalnya mendekati `target`, menjauh dari `threat`, atau menyesuaikan posisi dengan `neighbor`.

Perilaku dasar yang dipelajari meliputi:

- `Seek`: agent bergerak menuju `target`.
- `Flee`: agent menjauh dari `threat` atau titik yang tidak diinginkan.
- `Arrive`: agent mendekati `target` dengan perlambatan agar berhenti secara halus.
- `Pursue`: agent mengejar `target` yang bergerak.
- `Evade`: agent menghindar dari `threat` yang bergerak.
- `Wander`: agent bergerak acak terbatas agar tidak terlihat statis.

Untuk interaksi banyak agent, slide juga membahas:

- `Obstacle Avoidance`: agent menghindari rintangan di dekatnya.
- `Separation`: agent menjaga jarak agar tidak bertumpuk dengan `neighbor`.
- `Cohesion`: agent cenderung bergerak ke pusat kelompok.
- `Alignment`: agent menyelaraskan arah geraknya dengan `neighbor`.

Dalam praktikum, mahasiswa membangun **autonomous moving agents** yang dapat bergerak menuju `target`, menghindar, dan membentuk **perilaku kawanan sederhana**. Poin penting yang harus dipahami adalah bahwa perilaku ini bersifat **lokal** dan **reaktif**: agent memutuskan gerak berdasarkan `target`, `threat`, rintangan, atau posisi agent lain pada saat itu.

Sebelum lanjut, mahasiswa perlu melihat bahwa `Seek`, `Flee`, dan `Arrive` adalah perilaku dasar yang sering dikombinasikan. `Pursue` dan `Evade` memperluas perilaku dasar dengan memperkirakan gerak `target` atau `threat`. Sementara `Separation`, `Cohesion`, dan `Alignment` menjadi dasar perilaku kawanan.

### Inti yang Harus Ditekankan

- **Steering behavior** adalah aturan gerak lokal yang membuat agent bergerak natural, bukan sekadar berpindah posisi secara instan.
- `Seek`, `Flee`, dan `Arrive` adalah perilaku dasar; `Pursue` dan `Evade` memperluasnya untuk `target` atau `threat` yang bergerak.
- `Separation`, `Cohesion`, dan `Alignment` adalah komponen utama perilaku kawanan sederhana.
- Perilaku ini bersifat reaktif terhadap lingkungan dan agent lain, sehingga cocok untuk gerakan NPC atau agent yang otonom.

### Transisi ke Slide Berikutnya

Setelah agent mampu bergerak secara lokal, pertanyaan berikutnya adalah bagaimana agent menemukan rute menuju tujuan di lingkungan yang lebih kompleks. Pertemuan berikutnya akan membahas **Pathfinding & Navigation** sebagai dasar penentuan rute agent.

---

## Slide 031 - Pertemuan 4 Ringkas

### Narasi

Pada pertemuan ini, fokusnya adalah **pathfinding** dan **navigation**, yaitu cara agen dalam game menemukan rute yang masuk akal dari posisi awal ke target. Sebelum membahas algoritma, mahasiswa perlu memahami intuisi praktis: agen tidak hanya “bergerak lurus”, tetapi harus memilih jalur berdasarkan lingkungan, biaya, dan tujuan. Dalam game, kemampuan ini menentukan apakah NPC terasa natural, efisien, dan dapat diandalkan.

Landasan representasi ruang adalah **graph**. Komponen utamanya adalah:

- **node**: titik penting, misalnya posisi agen, waypoint, atau simpul peta.
- **edge**: hubungan antar node yang menyatakan jalur yang bisa dilalui.
- **waypoint**: titik navigasi yang membantu agen bergerak melewati area tertentu.

Dengan graph, masalah “bagaimana sampai ke sana” berubah menjadi masalah pencarian jalur antar node.

Algoritma pencarian jalur yang dibahas bergerak dari yang sederhana ke yang lebih efisien. **BFS** cocok untuk graph tanpa bobot atau ketika semua langkah dianggap sama. **Dijkstra** memperhitungkan biaya antar node, sehingga mampu menemukan jalur terpendek pada graph berbobot. **A*** menambahkan **heuristic**, yaitu estimasi jarak dari node ke target, agar pencarian lebih terarah.

Konsep penting dalam A* adalah:

```text
f(n) = g(n) + h(n)
```

Dalam rumus tersebut:

- `g(n)` adalah biaya nyata dari titik awal sampai node `n`.
- `h(n)` adalah estimasi biaya dari node `n` ke target.
- `f(n)` adalah total nilai yang digunakan untuk memilih node berikutnya yang paling menjanjikan.

Heuristic yang baik membuat pencarian lebih cepat, tetapi jika terlalu optimis atau tidak konsisten, hasil jalur dapat berubah atau tidak optimal.

Dalam konteks Unity, **NavMesh** adalah representasi area yang bisa dilalui agen. NavMesh biasanya dibangun dari geometri level, lalu agen seperti `NavMeshAgent` dapat bergerak menuju target dengan memanfaatkan data navigasi tersebut. Praktikum pada pertemuan ini menekankan tiga hal:

1. Membuat **A*** sederhana untuk memahami proses pencarian jalur.
2. Menggunakan **Unity NavMesh** agar agen dapat bergerak di lingkungan 3D.
3. Mengarahkan `NavMeshAgent` menuju target dan mengamati perilaku navigasinya.

Yang harus dipahami mahasiswa sebelum lanjut adalah bahwa pathfinding menjawab pertanyaan “ke mana agen harus bergerak”, tetapi belum sepenuhnya menjawab “kapan agen harus memilih perilaku tertentu”. Pemahaman tentang graph, biaya, heuristic, dan NavMesh menjadi dasar untuk perilaku NPC yang lebih kompleks.

### Inti yang Harus Ditekankan

- **Graph** adalah abstraksi lingkungan untuk pencarian jalur, dengan **node**, **edge**, dan **waypoint**.
- **BFS**, **Dijkstra**, dan **A*** memiliki perbedaan utama pada penanganan bobot dan penggunaan **heuristic**.
- Rumus `f(n) = g(n) + h(n)` menunjukkan bahwa A* menyeimbangkan biaya nyata dan estimasi menuju target.
- **Unity NavMesh** dan `NavMeshAgent` adalah implementasi praktis agar agen dapat bergerak menuju target di level game.

### Transisi ke Slide Berikutnya

Setelah agen mampu menemukan rute, langkah berikutnya adalah mengatur kapan agen berpindah perilaku, misalnya dari bergerak menuju target ke perilaku lain. Pertemuan berikutnya akan membahas **Finite State Machine** sebagai dasar desain perilaku NPC.

---

## Slide 032 - Pertemuan 5 Ringkas

### Narasi

Pada slide ini, kita masuk ke **Finite State Machine** atau **FSM**. Intuisi awalnya sederhana: NPC tidak perlu “berpikir” secara bebas; ia cukup memiliki beberapa **state** perilaku, dan pada satu waktu hanya satu state yang aktif.

Setiap **state** mewakili mode perilaku NPC, misalnya `PATROL`, `CHASE`, `ATTACK`, atau `FLEE`. **Transition** adalah aturan perpindahan antar state, sedangkan **condition** adalah kondisi yang memicu perpindahan tersebut, seperti jarak pemain, status serangan, atau nilai kesehatan.

Contoh alur perilaku musuh dapat dibaca dari diagram berikut:

```text
PATROL
   ↓ player detected
CHASE
   ↓ in range
ATTACK
   ↓ low health
FLEE
```

Alur ini menunjukkan bahwa NPC mulai dalam state `PATROL`. Jika kondisi `player detected` terpenuhi, NPC berpindah ke `CHASE`. Jika pemain sudah berada dalam jangkauan, yaitu `in range`, NPC masuk ke `ATTACK`. Jika kesehatan NPC rendah, yaitu `low health`, NPC berpindah ke `FLEE`.

Dalam desain yang lebih besar, **hierarchical FSM** membantu mengelompokkan state-state kecil ke dalam state induk. Misalnya, state `COMBAT` dapat memuat sub-state `CHASE`, `ATTACK`, dan `FLEE`. Pendekatan ini membuat perilaku NPC lebih rapi, mudah dibaca, dan tidak langsung menjadi terlalu rumit.

Praktikum pada pertemuan ini berfokus pada perilaku musuh sederhana: `PATROL` → `CHASE` → `ATTACK` → `FLEE`. Mahasiswa perlu memahami bahwa kekuatan FSM terletak pada kejelasan aturan: state apa yang aktif, kondisi apa yang memicu perubahan, dan state apa yang menjadi tujuan berikutnya.

Sebelum lanjut, mahasiswa harus paham bahwa FSM sangat cocok untuk perilaku yang diskrit dan mudah didefinisikan, tetapi akan terasa terbatas jika banyak kondisi harus dibandingkan secara bersamaan.

### Inti yang Harus Ditekankan

- **FSM** terdiri dari **state**, **transition**, dan **condition**.
- Pada satu waktu, NPC hanya berada dalam **satu state aktif**.
- Transisi harus jelas: dari state apa, karena kondisi apa, ke state apa.
- **Hierarchical FSM** digunakan untuk mengelompokkan perilaku agar lebih rapi.
- Contoh perilaku musuh: `PATROL` → `CHASE` → `ATTACK` → `FLEE`.

### Transisi ke Slide Berikutnya

Setelah memahami cara NPC berpindah antar state menggunakan FSM, slide berikutnya akan memperluas cara NPC memilih perilaku ketika banyak kondisi harus dibandingkan secara bersamaan, yaitu melalui Behavior Tree dan Utility-Based Decision.

---

## Slide 033 - Pertemuan 6 Ringkas

### Narasi

Pada pertemuan ini, mahasiswa melangkah dari struktur keputusan berbasis state menuju dua pendekatan yang lebih fleksibel: **Behavior Tree** dan **utility-based decision**. Jika FSM cocok untuk perilaku yang jelas dan diskrit, Behavior Tree membantu menyusun perilaku yang lebih kompleks dengan struktur pohon yang mudah dibaca dan dikembangkan.

Intuisi utamanya adalah: NPC tidak lagi hanya berpindah antar state, tetapi mengevaluasi rangkaian kondisi dan aksi secara bertingkat. Setiap evaluasi, pohon diperiksa dari akar ke daun, lalu menghasilkan keputusan perilaku yang paling sesuai dengan situasi saat itu.

**Behavior Tree** terdiri dari beberapa jenis node:

- **`Selector`**: memilih salah satu cabang yang berhasil, mirip logika OR.
- **`Sequence`**: menjalankan cabang secara berurutan dan berhenti jika ada yang gagal, mirip logika AND.
- **`Decorator`**: memodifikasi perilaku node di bawahnya, misalnya mengulang, membalik, atau membatasi waktu.
- **`Leaf node`**: node terminal yang biasanya berupa `condition` atau `action`.

Sebagai contoh, pohon perilaku NPC dapat disusun seperti ini:

```text
Selector
├── Sequence
│   ├── Condition: enemy in range
│   └── Action: Attack
├── Sequence
│   ├── Condition: health low
│   └── Action: Flee
└── Action: Patrol
```

Artinya, NPC pertama-tama memeriksa apakah musuh berada dalam jangkauan. Jika ya, NPC menyerang. Jika tidak, NPC memeriksa apakah kesehatan rendah. Jika kondisi itu terpenuhi, NPC melarikan diri. Jika keduanya tidak terpenuhi, NPC kembali melakukan `Patrol`.

Pendekatan lain adalah **utility-based decision**. Di sini, setiap kandidat perilaku diberi skor berdasarkan konteks game. Skor biasanya berasal dari variabel seperti jarak musuh, kesehatan, aggro, atau ancaman. Perilaku dengan skor tertinggi dipilih sebagai keputusan.

Contoh sederhana pada slide:

```text
Attack = 0.75
Flee   = 0.90
Patrol = 0.10

Dipilih: Flee
```

Pada contoh tersebut, `Flee` memiliki skor tertinggi, sehingga NPC memilih perilaku melarikan diri. Skor ini dapat berubah setiap frame atau setiap interval keputusan. Misalnya, jika kesehatan NPC membaik atau musuh menjauh, skor `Attack` atau `Patrol` dapat meningkat.

Perbedaan konseptualnya penting:

- **Behavior Tree** lebih deterministik, modular, dan mudah di-debug karena alur keputusan terlihat sebagai struktur pohon.
- **Utility-based decision** lebih fleksibel untuk prioritas yang halus, karena perilaku tidak harus dipilih secara hitam-putih, melainkan berdasarkan skor.
- Dalam praktik, keduanya sering digabungkan: Behavior Tree mengatur struktur perilaku, sementara utility digunakan untuk memilih cabang atau `action` yang paling relevan.

Untuk praktikum, mahasiswa dapat membuat NPC sederhana yang menggunakan Behavior Tree atau utility-based decision. Fokusnya bukan membuat sistem yang rumit, tetapi memastikan mahasiswa memahami cara node dievaluasi, cara skor dihitung, dan bagaimana keputusan tersebut mengubah perilaku NPC di scene.

Sebelum lanjut, mahasiswa perlu memahami tiga hal: cara kerja `selector`, `sequence`, dan `leaf node`; cara `condition` memicu `action`; serta cara skor utility menentukan pilihan perilaku.

### Inti yang Harus Ditekankan

- **Behavior Tree** menyusun perilaku NPC melalui node `selector`, `sequence`, `decorator`, `condition`, dan `action`.
- **Utility-based decision** memilih perilaku berdasarkan skor, bukan hanya kondisi biner.
- Contoh skor menunjukkan bahwa perilaku dengan nilai tertinggi, seperti `Flee = 0.90`, akan dipilih.
- Kedua pendekatan membantu NPC mengambil keputusan yang lebih natural dan mudah dikembangkan.

### Transisi ke Slide Berikutnya

Setelah mahasiswa memahami cara satu NPC memilih perilaku, slide berikutnya akan membahas bagaimana beberapa NPC diintegrasikan ke dalam sistem yang lebih besar, termasuk koordinasi dan penempatan taktis.

---

## Slide 034 - Pertemuan 7 Ringkas

### Narasi

Slide ini merangkum **Pertemuan 7** dengan fokus **Game AI Integration & Tactical AI**. Pada tahap ini, mahasiswa tidak lagi mempelajari satu kemampuan agen secara terpisah, tetapi mulai menggabungkan **perception**, **memory**, **decision making**, dan **movement** menjadi satu perilaku NPC yang lebih utuh. Intuisi pentingnya adalah: agen cerdas dalam game harus mampu membaca situasi, mengingat informasi penting, memilih target, lalu mengambil posisi taktis yang masuk akal.

Komponen utama yang perlu dipahami adalah:

- **Integration** (`integration`): menyatukan modul AI menjadi satu alur perilaku, misalnya dari deteksi musuh hingga memilih aksi.
- **Perception & memory** (`perception`, `memory`): agen mengetahui apa yang terlihat atau diketahui, serta menyimpan informasi seperti posisi terakhir musuh atau ancaman yang pernah terlihat.
- **Target selection, cover, tactical positioning** (`target_selection`, `cover`, `tactical_positioning`): agen memilih target yang paling relevan, mencari **cover** untuk mengurangi risiko, dan memilih posisi yang menguntungkan seperti flank atau sudut aman.
- **Coordination antar-agent** (`coordination`): beberapa NPC tidak hanya bertindak sendiri, tetapi saling membagi peran agar serangan atau pertahanan lebih efektif.

Contoh pada slide menunjukkan pola sederhana: `Enemy A` menyerang dari depan, `Enemy B` flank dari samping, dan `Enemy C` mengambil cover. Pola ini menunjukkan bahwa **tactical AI** bukan hanya soal satu agen bergerak, tetapi soal pembagian peran dalam kelompok. Dalam praktikum **squad/enemy AI sederhana**, mahasiswa diharapkan dapat membuat beberapa NPC yang bekerja sama, misalnya satu agen menyerang, satu agen memposisikan diri, dan satu agen bertahan atau mencari cover.

### Inti yang Harus Ditekankan

- **Integration** adalah tahap menyatukan kemampuan agen menjadi perilaku utuh, bukan sekadar menjalankan satu aksi.
- **Tactical AI** mencakup `target_selection`, `cover`, dan `tactical_positioning` agar NPC tidak hanya bergerak, tetapi mengambil keputusan posisi.
- **Coordination antar-agent** membuat squad AI lebih realistis karena agen membagi peran.
- Contoh `Enemy A`, `Enemy B`, dan `Enemy C` menunjukkan pola sederhana: attack, flank, cover.

### Transisi ke Slide Berikutnya

Dengan memahami integrasi dan taktik kelompok, mahasiswa siap melanjutkan ke **UTS / Mini Project**, di mana konsep-konsep ini akan diuji melalui mini game yang mengintegrasikan movement, navigation, perception, dan decision making.

---

## Slide 035 - Pertemuan 8 Ringkas

### Narasi

Pada slide ini, kita merangkum pertemuan ke-8 yang berfokus pada **UTS / Mini Project**. Fokusnya adalah membuat mini game yang mengintegrasikan beberapa kemampuan dasar perilaku NPC, bukan hanya membuat satu fitur saja.

Target utamanya adalah:

```text
Mini game dengan NPC cerdas.
```

Untuk mencapai target tersebut, mahasiswa perlu menghubungkan empat komponen utama:

1. `movement` — NPC dapat bergerak secara wajar, misalnya mengejar, mundur, atau berpindah posisi.
2. `navigation` — NPC dapat memilih jalur menuju target atau area tertentu, bukan hanya bergerak lurus tanpa pertimbangan.
3. `perception` — NPC dapat mendeteksi kondisi sekitar, seperti jarak pemain, arah, atau situasi aman dan berbahaya.
4. `decision making` — NPC dapat memilih aksi berdasarkan hasil persepsi, misalnya menyerang, bersembunyi, patroli, atau kembali ke posisi awal.

Beberapa contoh mini game yang bisa dipilih adalah:

- `stealth mini game`, di mana NPC menjaga area dan bereaksi terhadap pemain yang mendekat.
- `enemy patrol challenge`, di mana NPC patroli, menemukan pemain, lalu mengejar atau kembali ke rute.
- `dungeon combat kecil`, di mana NPC bergerak di ruang terbatas dan memilih target atau posisi.
- `survival arena sederhana`, di mana NPC bertahan, mengejar, atau menghindari kondisi tertentu.

Yang harus dipahami mahasiswa sebelum melanjutkan adalah bahwa mini project ini menjadi titik integrasi. Komponen seperti `movement`, `navigation`, `perception`, dan `decision making` tidak berdiri sendiri. Mereka harus saling terhubung: NPC bergerak, mengamati lingkungan, lalu mengambil keputusan, dan keputusan itu kembali memengaruhi gerakannya. Dengan cara ini, perilaku NPC terasa lebih hidup dan konsisten dalam konteks game.

### Inti yang Harus Ditekankan

- Mini project UTS menguji integrasi `movement`, `navigation`, `perception`, dan `decision making` dalam satu mini game.
- NPC harus berperilaku secara koheren: bergerak, mengamati lingkungan, lalu memilih aksi yang sesuai.
- Contoh seperti `stealth`, `patrol`, `dungeon combat`, dan `survival arena` membantu mahasiswa melihat penerapan konsep dalam skenario yang jelas.

### Transisi ke Slide Berikutnya

Setelah mini project ini, kita akan beralih ke topik pembuatan konten secara prosedural, di mana fokusnya bukan hanya perilaku NPC, tetapi juga cara game menghasilkan elemen seperti spawn atau level secara sistematis.

---

## Slide 036 - Pertemuan 9 Ringkas

### Narasi

Selanjutnya kita masuk ke topik **Procedural Content Generation** atau **PCG**. Topik ini penting karena game tidak selalu harus membuat seluruh konten secara manual. Dengan PCG, game dapat menghasilkan konten secara otomatis, misalnya posisi spawn, variasi level, atau penempatan objek, selama masih mengikuti aturan yang sudah ditentukan.

Inti dari PCG adalah **randomness** yang terkendali. Randomness memberi variasi, tetapi jika hanya acak tanpa aturan, hasilnya bisa tidak masuk akal atau tidak bisa dimainkan. Karena itu, kita perlu **rule** dan **constraint**. Rule menentukan apa yang boleh dihasilkan, sedangkan constraint membatasi hasil agar tetap sesuai tujuan game.

Untuk memastikan hasil yang konsisten, kita menggunakan `seed`. Nilai `seed` berfungsi sebagai titik awal proses acak. Jika `seed` sama, hasil `random` yang dihasilkan juga sama. Inilah yang disebut **reproducibility**. Reproducibility sangat berguna untuk pengujian, debugging, berbagi level, dan memastikan bahwa hasil yang sama dapat dipanggil kembali.

Konsep penting yang harus dipahami mahasiswa adalah:

```text
Randomness + Rule + Constraint + Validation
```

Alurnya dapat dipahami sebagai berikut:

1. **Randomness** memberikan variasi.
2. **Rule** menentukan cara konten dibentuk.
3. **Constraint** membatasi hasil agar tetap valid.
4. **Validation** memeriksa apakah hasil akhir bisa digunakan.

Ada dua pendekatan dasar yang perlu dibedakan, yaitu **constructive PCG** dan **generate-and-test**.

- **Constructive PCG** membangun konten secara bertahap berdasarkan aturan, sehingga hasilnya lebih mudah dikendalikan.
- **Generate-and-test** membuat kandidat konten terlebih dahulu, lalu mengujinya. Jika kandidat tidak memenuhi syarat, sistem dapat mencoba lagi atau memperbaiki hasilnya.

**PCG taxonomy** membantu kita mengelompokkan pendekatan PCG berdasarkan cara konten dibuat, tingkat kontrol yang dibutuhkan, dan kebutuhan validasi. Tidak ada satu pendekatan yang selalu terbaik; pemilihan pendekatan bergantung pada jenis konten, tujuan game, dan batasan performa.

Pada praktikum, mahasiswa akan mencoba **procedural spawning** dan **random level sederhana**. Tujuannya bukan membuat level yang sangat kompleks, tetapi memahami bagaimana `seed`, aturan spawn, constraint, dan validation bekerja bersama. Hasil yang diharapkan adalah konten yang berbeda untuk `seed` berbeda, tetapi tetap playable dan sesuai aturan game.

### Inti yang Harus Ditekankan

- **PCG** bukan sekadar acak, melainkan **randomness** yang dikendalikan oleh **rule**, **constraint**, dan **validation**.
- `seed` penting untuk **reproducibility**, sehingga hasil yang sama dapat dihasilkan kembali dari kondisi awal yang sama.
- **Constructive PCG** membangun konten secara bertahap, sedangkan **generate-and-test** membuat kandidat lalu mengujinya.
- **PCG taxonomy** membantu memilih pendekatan yang sesuai dengan kebutuhan konten dan batasan game.
- Praktikum berfokus pada **procedural spawning** dan **random level sederhana** sebagai dasar penerapan PCG.

### Transisi ke Slide Berikutnya

Setelah memahami dasar PCG, pertemuan berikutnya akan memperdalam penerapan PCG untuk level dan dungeon, di mana hasil yang diharapkan adalah konten yang berbeda untuk `seed` berbeda tetapi tetap playable.

---

## Slide 037 - Pertemuan 10 Ringkas

### Narasi

Pada slide ini, mahasiswa melihat penerapan **PCG** secara lebih konkret untuk **level** dan **dungeon**. Jika pertemuan sebelumnya menekankan konsep dasar seperti `randomness`, `seed`, dan `reproducibility`, maka pertemuan ini memindahkan konsep tersebut ke bentuk ruang permainan. Intuisi pentingnya adalah: generator tidak hanya membuat pola acak, tetapi harus menghasilkan lingkungan yang koheren, dapat dijelajahi, dan tetap sesuai dengan aturan game.

Pendekatan yang dibahas dimulai dari representasi level. **Grid-based generation** menggunakan sel-sel `grid` sebagai dasar pembuatan `tile`, `wall`, `floor`, atau `room`. Representasi ini penting karena memudahkan integrasi dengan sistem game seperti penempatan objek, `spawn`, dan pergerakan karakter. Setelah itu, beberapa teknik generasi diperkenalkan sebagai cara membentuk struktur level.

- `random walk`: agen bergerak secara acak di grid dan meninggalkan jejak, sehingga cocok untuk membuat lorong atau maze sederhana.
- `BSP`: ruang dibagi secara rekursif menjadi beberapa area, lalu area tersebut dihubungkan, sehingga menghasilkan dungeon dengan ruang yang lebih terstruktur.
- `cellular automata`: aturan lokal diterapkan pada sel berdasarkan tetangganya, sehingga menghasilkan bentuk gua atau ruang yang lebih organik.
- `constraint-based generation`: generator dibatasi oleh aturan seperti ukuran minimum, jarak antar-ruang, konektivitas, dan lokasi `spawn`.
- `dungeon validation`: hasil generasi diperiksa agar tetap `playable`, misalnya semua area penting dapat dicapai dan tidak ada layout yang mustahil.

Dalam praktikum, mahasiswa mengimplementasikan **procedural dungeon/level di Unity**. Fokusnya bukan hanya membuat level yang terlihat berbeda, tetapi memastikan bahwa perbedaan tersebut tetap aman untuk dimainkan. Targetnya dapat dirumuskan sebagai berikut:

```text
Dungeon berbeda untuk seed berbeda,
tetapi tetap playable.
```

Artinya, `seed` menentukan urutan hasil acak, sehingga seed yang sama dapat menghasilkan dungeon yang sama, sementara seed yang berbeda menghasilkan layout yang berbeda. Namun, sebelum level dianggap valid, generator perlu melakukan validasi terhadap konektivitas, batas area, dan kondisi permainan. Dengan cara ini, PCG tidak berhenti pada visual acak, tetapi menjadi alat desain yang membantu membuat variasi level secara konsisten.

### Inti yang Harus Ditekankan

- **PCG dungeon** bukan sekadar acak, tetapi kombinasi antara aturan, batasan, dan validasi.
- Metode seperti `random walk`, `BSP`, dan `cellular automata` menghasilkan karakter level yang berbeda.
- `seed` membuat hasil dapat direproduksi, tetapi `playability` tetap harus dijaga.
- Praktikum Unity menekankan generator yang menghasilkan dungeon berbeda namun tetap bisa dimainkan.

### Transisi ke Slide Berikutnya

Setelah level dapat dibuat secara prosedural, pertemuan berikutnya akan membahas bagaimana game dapat menyesuaikan tantangan secara dinamis melalui **Dynamic Difficulty Adjustment**.

---

## Slide 038 - Pertemuan 11 Ringkas

### Narasi

Slide ini merangkum pertemuan 11 tentang **Dynamic Difficulty Adjustment**, yaitu mekanisme di mana game menyesuaikan tingkat kesulitan secara dinamis berdasarkan kondisi pemain. Intuisi utamanya sederhana: tantangan yang baik tidak harus tetap sama sepanjang waktu. Sistem game dapat mengamati **player performance**, lalu mengubah parameter gameplay agar pemain tidak terlalu mudah menang atau terlalu sulit bertahan.

Dalam praktik, DDA bekerja seperti loop adaptasi:

1. Sistem mengamati `player_performance`.
2. Sistem memperbarui `difficulty_model`.
3. Sistem memilih parameter yang diubah, misalnya `spawn_rate`, `enemy_damage`, atau `enemy_speed`.
4. Sistem mengamati kembali respons pemain.

Poin utama yang perlu dipahami adalah:

- **player performance** sebagai input utama untuk menilai kondisi pemain.
- **difficulty model** sebagai representasi internal tentang seberapa sulit situasi saat ini.
- **adaptive gameplay** sebagai hasil perubahan parameter yang dirasakan pemain.
- **rubber banding** sebagai strategi menjaga jarak agar pemain tidak terlalu dominan atau terlalu tertinggal.
- **parameter adaptation** sebagai mekanisme teknis yang mengubah nilai gameplay secara runtime.

Contoh pada slide menunjukkan dua arah adaptasi:

```text
Player dominan
    ↓
spawn musuh lebih cepat

Player kesulitan
    ↓
musuh lebih lemah
```

Artinya, jika pemain terlalu kuat, sistem dapat meningkatkan tekanan dengan `spawn` musuh lebih cepat. Jika pemain kesulitan, sistem dapat menurunkan kekuatan musuh agar pemain masih memiliki peluang. Yang penting, perubahan ini harus terasa natural, tidak tiba-tiba, dan tidak merusak keseimbangan game.

Untuk praktikum, mahasiswa diminta membuat game yang otomatis menyesuaikan musuh berdasarkan performa player. Fokusnya bukan membuat sistem yang sangat kompleks, tetapi membangun loop sederhana: amati performa, evaluasi kondisi, ubah parameter, lalu amati kembali. Loop ini menjadi dasar banyak mekanisme adaptif dalam desain game.

Sebelum lanjut, mahasiswa perlu memahami bahwa DDA berbeda dari sekadar membuat musuh lebih kuat atau lebih lemah secara manual. DDA adalah proses adaptif yang bergantung pada kondisi pemain. Jika tidak ada observasi dan model kesulitan, perubahan parameter hanya menjadi tuning statis.

### Inti yang Harus Ditekankan

- DDA menggunakan **player performance** sebagai sinyal untuk menyesuaikan tantangan.
- **difficulty model** membantu sistem menilai apakah pemain dominan, kesulitan, atau seimbang.
- **rubber banding** menjaga ritme permainan agar tidak terlalu mudah atau terlalu sulit.
- **parameter adaptation** adalah cara teknis mengubah gameplay secara runtime.
- Praktikum menekankan loop adaptasi sederhana: amati, evaluasi, ubah parameter, amati kembali.

### Transisi ke Slide Berikutnya

Setelah memahami bagaimana game dapat menyesuaikan kesulitan secara dinamis, pertemuan berikutnya akan membahas bagaimana sistem membangun model pemain yang lebih terstruktur dari data gameplay.

---

## Slide 039 - Pertemuan 12 Ringkas

### Narasi

Pada pertemuan ini, fokusnya adalah membangun **player model** yang menjadi dasar perilaku adaptif dalam game. Pertemuan sebelumnya sudah membahas penyesuaian kesulitan, tetapi di sini kita melangkah lebih dalam: sistem tidak hanya bereaksi pada skor menang-kalah, melainkan memahami pola bermain pemain. Dengan model pemain yang baik, keputusan NPC, tantangan, dan parameter game dapat dibuat lebih relevan.

**Player telemetry** adalah data mentah yang direkam selama gameplay. Data ini bisa berupa posisi, waktu, input, kondisi karakter, interaksi dengan musuh, dan hasil aksi. Contoh variabel yang sering dipakai:

- `position`
- `health`
- `damage_dealt`
- `damage_taken`
- `kill_count`
- `death_count`
- `resource_collected`
- `time_survived`
- `movement_speed`
- `input_frequency`

Telemetry sendiri belum cukup. Data mentah perlu diolah menjadi **gameplay metrics**, yaitu ukuran yang lebih bermakna untuk menilai perilaku pemain. Beberapa metrik penting antara lain:

- `accuracy`
- `aggression_rate`
- `risk_score`
- `exploration_score`
- `consistency`
- `response_time`

Dari metrik tersebut, sistem dapat melakukan **skill estimation**, yaitu memperkirakan kemampuan pemain berdasarkan bukti perilaku. Estimasi ini tidak harus langsung berupa angka tunggal; bisa berupa kategori seperti `Low`, `Medium`, atau `High`. Yang penting, estimasi harus dapat dijelaskan oleh data yang direkam.

Selanjutnya, sistem dapat mengidentifikasi **play style**, yaitu pola perilaku dominan pemain. Seorang pemain bisa bermain agresif, defensif, eksploratif, atau hati-hati. Identifikasi gaya bermain membantu sistem memilih respons yang sesuai, bukan hanya menaikkan atau menurunkan kesulitan secara umum.

**Player profile** adalah ringkasan dari estimasi skill dan gaya bermain. Profil ini menjadi representasi sederhana tentang pemain yang dapat dibaca oleh sistem adaptif. Contoh profil sederhana:

```text
Skill: Medium
Style: Aggressive
Explorer Score: Low
Risk Score: High
```

Profil ini berarti pemain memiliki kemampuan sedang, cenderung menyerang lebih dulu, jarang melakukan eksplorasi, dan berani mengambil risiko. Dengan profil tersebut, sistem dapat memilih respons yang lebih spesifik, misalnya menyesuaikan pola serangan NPC, memilih target yang lebih menantang, atau memberikan tantangan yang sesuai dengan gaya bermain.

**Adaptation policy** adalah aturan atau kebijakan yang mengubah perilaku game berdasarkan player profile. Pada tahap ini, kebijakan masih dapat dibuat secara eksplisit, misalnya menggunakan aturan berbasis ambang batas atau bobot metrik. Alur dasarnya dapat dipahami sebagai berikut:

1. Rekam **player telemetry**.
2. Olah telemetry menjadi **gameplay metrics**.
3. Estimasi skill dan gaya bermain.
4. Susun **player profile**.
5. Terapkan **adaptation policy** untuk mengubah parameter game atau perilaku NPC.

Dalam praktikum, mahasiswa akan merekam gameplay metrics dan membuat player model sederhana. Tujuan utamanya bukan langsung membuat sistem yang kompleks, tetapi memahami bagaimana data pemain dapat diubah menjadi keputusan yang memengaruhi pengalaman bermain.

Sebelum lanjut, hal yang perlu dipahami adalah bahwa player model bukan sekadar label statis. Model ini harus dibangun dari data yang konsisten, metrik yang jelas, dan aturan adaptasi yang dapat diuji. Jika metrik tidak bermakna, profil akan menyesatkan. Jika adaptation policy tidak terukur, perilaku game akan terasa tidak konsisten.

### Inti yang Harus Ditekankan

- **Player telemetry** adalah data mentah; **gameplay metrics** adalah ukuran yang sudah diolah.
- **Skill estimation** dan **play style** membantu sistem memahami kemampuan serta pola perilaku pemain.
- **Player profile** menjadi representasi ringkas yang dapat digunakan untuk mengambil keputusan adaptif.
- **Adaptation policy** menentukan bagaimana profil pemain diterjemahkan menjadi perubahan perilaku game atau NPC.
- Praktikum ini menekankan alur sederhana: rekam data, hitung metrik, buat profil, lalu terapkan kebijakan adaptasi.

### Transisi ke Slide Berikutnya

Setelah kita memiliki cara untuk memodelkan pemain secara sederhana, pertemuan berikutnya akan memperluas cara sistem belajar dan mengambil keputusan, termasuk pendekatan machine learning untuk game.

---

## Slide 040 - Pertemuan 13 Ringkas

### Narasi

Slide ini merangkum pertemuan ke-13 dengan fokus **Machine Learning for Games**. Pada pertemuan ini, mahasiswa diperkenalkan pada dua jalur utama pembelajaran mesin yang relevan dengan game: **supervised learning** dan **reinforcement learning**. **Supervised learning** biasanya digunakan ketika tersedia data berlabel, misalnya untuk mengklasifikasikan pola keputusan atau memprediksi hasil tertentu. **Reinforcement learning** lebih cocok untuk perilaku agen yang harus belajar dari interaksi langsung dengan lingkungan.

Dalam konteks game, inti dari **reinforcement learning** adalah hubungan antara `state`, `action`, dan `reward`. `state` menggambarkan kondisi lingkungan saat ini, `action` adalah pilihan yang dapat dilakukan agen, dan `reward` adalah umpan balik yang menunjukkan apakah tindakan itu menguntungkan. Konsep ini dapat diringkas sebagai berikut:

```text
Agent belajar dari reward.
```

Artinya, agen tidak langsung diberi aturan lengkap, tetapi memperbarui perilakunya berdasarkan pengalaman. **Q-learning** adalah salah satu metode sederhana untuk memahami proses ini, karena agen belajar memperkirakan nilai tindakan terbaik pada setiap `state`. Praktikum yang direkomendasikan adalah membuat **Q-learning sederhana** atau mengenal `ML-Agents` sebagai dasar penerapan agen belajar dalam lingkungan game.

Sebelum lanjut ke pertemuan berikutnya, mahasiswa perlu memahami bahwa **machine learning** dalam game bukan sekadar menambah model, tetapi mengubah cara NPC atau agen membuat keputusan: dari aturan tetap menjadi perilaku yang dapat diperbarui berdasarkan data atau pengalaman. Pemahaman tentang `state`, `action`, dan `reward` menjadi fondasi penting untuk membahas penerapan **reinforcement learning** yang lebih konkret.

### Inti yang Harus Ditekankan

- **Supervised learning** dan **reinforcement learning** memiliki cara belajar yang berbeda: yang pertama menggunakan data berlabel, yang kedua menggunakan pengalaman dan `reward`.
- Dalam **reinforcement learning**, perilaku agen dibentuk oleh hubungan `state`, `action`, dan `reward`.
- **Q-learning** memberikan intuisi dasar tentang bagaimana agen memperkirakan tindakan terbaik pada setiap kondisi.
- Praktikum sederhana seperti **Q-learning** atau pengenalan `ML-Agents` membantu mahasiswa melihat penerapan konsep dalam lingkungan game.

### Transisi ke Slide Berikutnya

Setelah memahami dasar **machine learning** dan **reinforcement learning**, pertemuan berikutnya akan membahas penerapan **reinforcement learning** dengan `Unity ML-Agents`, termasuk alur agen belajar di lingkungan game.

---

## Slide 041 - Pertemuan 14 Ringkas

### Narasi

Pada pertemuan ini, fokusnya adalah **Reinforcement Learning with Unity ML-Agents**. Setelah sebelumnya kita membahas dasar machine learning untuk game, sekarang kita masuk ke bentuk pembelajaran yang sangat relevan untuk perilaku agen dalam lingkungan interaktif. Intuisinya sederhana: agen tidak langsung diberi aturan lengkap, tetapi belajar dari pengalaman. Ia mencoba, menerima umpan balik, lalu memperbaiki keputusan berikutnya.

Dalam Unity ML-Agents, unit utama yang kita amati adalah `Agent`. `Agent` ini berada di lingkungan game dan memiliki beberapa komponen penting:

- `Observation`: informasi yang diterima agen dari lingkungan, misalnya posisi, jarak ke target, atau status arena.
- `Action`: keputusan yang dapat dilakukan agen, misalnya bergerak ke kiri, kanan, maju, atau berputar.
- `Reward`: nilai umpan balik yang menunjukkan apakah tindakan agen mendekati tujuan.
- `Episode`: satu rangkaian interaksi dari awal hingga selesai, misalnya dari spawn sampai mencapai target atau waktu habis.
- `Policy`: strategi yang digunakan agen untuk memilih `Action` berdasarkan `Observation`.

Contoh sederhana yang ditampilkan pada slide adalah:

```text
Agent belajar mencapai target di arena.
```

Contoh ini menggambarkan skenario dasar: agen berada di arena, mengamati lingkungannya, memilih tindakan, lalu menerima `Reward` jika semakin dekat atau berhasil mencapai target. Dari banyak `Episode`, agen secara bertahap memperbaiki `Policy`-nya.

Peran `PPO` di sini perlu dipahami secara konseptual. `PPO` adalah metode untuk memperbarui `Policy` berdasarkan pengalaman agen. Mahasiswa tidak perlu langsung masuk ke rumus yang rumit, tetapi perlu memahami bahwa `PPO` membantu agen belajar memilih tindakan yang menghasilkan `Reward` lebih baik, sambil tetap stabil selama proses `training`.

Ada dua kondisi penting yang harus dibedakan: `training` dan `inference`. Pada `training`, agen masih belajar, `Policy` diperbarui, dan performa bisa berubah dari waktu ke waktu. Pada `inference`, agen menggunakan `Policy` yang sudah dilatih untuk bermain di game tanpa memperbarui strategi lagi. Dalam praktik Unity, ini berarti kita bisa melatih agen di editor atau environment, lalu menggunakan hasil latihannya untuk perilaku NPC atau karakter yang lebih adaptif.

Sebelum lanjut, mahasiswa perlu menguasai loop utama: `Observation` masuk, `Policy` memilih `Action`, lingkungan memberi `Reward`, lalu proses diulang dalam `Episode`. Jika loop ini sudah jelas, praktikum training agent menjadi lebih mudah dipahami.

### Inti yang Harus Ditekankan

- `Agent`, `Observation`, `Action`, `Reward`, `Episode`, dan `Policy` adalah konsep inti dalam reinforcement learning untuk game.
- `PPO` dipahami sebagai metode pembaruan `Policy` secara konseptual, bukan sekadar nama algoritma.
- `training` adalah proses belajar, sedangkan `inference` adalah penggunaan strategi yang sudah dilatih.
- Contoh “agent mencapai target di arena” membantu membayangkan bagaimana perilaku agen terbentuk dari pengalaman, bukan dari aturan yang ditulis manual.

### Transisi ke Slide Berikutnya

Setelah mahasiswa memahami cara agent belajar melalui Unity ML-Agents, pembahasan berikutnya akan melangkah ke sistem game yang lebih kompleks dan pengembangan proyek akhir, di mana kemampuan ini dapat diintegrasikan ke dalam desain game yang lebih utuh.

---

## Slide 042 - Pertemuan 15 Ringkas

### Narasi

Pada pertemuan ini, fokus bergeser dari satu teknik **Game AI** menjadi **sistem Game AI yang lebih utuh**. Setelah mahasiswa memahami dasar agent, reward, policy, dan training pada pertemuan sebelumnya, tahap berikutnya adalah memastikan perilaku sistem tidak hanya berjalan, tetapi juga stabil, dapat dijelaskan, dan siap dimasukkan ke dalam proyek akhir.

Konsep utama yang perlu dipahami adalah **AI Director**, **adaptive systems**, dan **emergent behavior**. **AI Director** berperan seperti pengatur pengalaman game di level sistem, misalnya mengatur intensitas, urutan kejadian, atau tekanan gameplay. **Adaptive systems** berarti sistem dapat menyesuaikan diri terhadap kondisi pemain, misalnya progres, gaya bermain, atau tingkat kesulitan. **Emergent behavior** muncul ketika beberapa aturan sederhana saling berinteraksi dan menghasilkan perilaku yang tidak diprogram secara eksplisit, tetapi tetap masuk akal.

Untuk proyek akhir, mahasiswa juga perlu menguasai **debugging Game AI** dan **evaluasi Game AI**. Debugging membantu menemukan masalah pada `state`, `decision`, `path`, atau `reward` yang tidak terlihat saat gameplay. Evaluasi memastikan sistem berperilaku sesuai desain, tidak terjebak, tidak terlalu mudah atau terlalu sulit, dan dapat dijelaskan secara arsitektural.

Praktikum pada pertemuan ini adalah **integrasi Game AI dalam proyek akhir**. Target yang harus dicapai adalah `Project siap dipresentasikan pada UAS.` Artinya, seluruh komponen sudah teruji, terdokumentasi, dan siap didemokan.

### Inti yang Harus Ditekankan

- **AI Director** mengatur pengalaman game di level sistem, bukan hanya perilaku satu NPC.
- **Adaptive systems** dan **emergent behavior** membuat sistem terasa lebih hidup karena dapat menyesuaikan diri dan menghasilkan interaksi yang tidak diprediksi secara eksplisit.
- **Debugging** dan **evaluasi** adalah bagian penting agar sistem dapat dijelaskan, diuji, dan diperbaiki.
- Proyek akhir harus mencapai target: **Game AI terintegrasi, dapat dimainkan, dan siap dipresentasikan pada UAS**.

### Transisi ke Slide Berikutnya

Setelah sistem di proyek akhir sudah terintegrasi dan dievaluasi, langkah berikutnya adalah mempresentasikan hasilnya pada UAS, termasuk demo gameplay, demo `debug mode`, penjelasan arsitektur, dan refleksi pengembangan.

---

## Slide 043 - Pertemuan 16 Ringkas

### Narasi

Slide ini menjelaskan pelaksanaan **UAS** untuk mata kuliah **Game Cerdas**. Berbeda dari ujian berbasis soal, UAS di sini berbentuk penilaian **Intelligent Game Project**, yaitu proyek mini game yang dibangun dengan `Unity` dan memiliki perilaku AI yang dapat ditunjukkan secara langsung.

Fokus utama UAS adalah membuktikan bahwa proyek tidak hanya berjalan, tetapi juga dapat **dijelaskan**, **dijalankan**, **diuji**, dan **dievaluasi**. Dengan kata lain, mahasiswa tidak cukup menampilkan gameplay; mahasiswa juga harus mampu menunjukkan bagaimana sistem AI mengambil keputusan dan bagaimana perilaku tersebut memengaruhi pengalaman bermain.

Komponen yang dinilai pada UAS meliputi:

- **Presentasi proyek akhir**: menjelaskan tujuan game, ruang lingkup, fitur AI, dan kontribusi sistem kecerdasan dalam gameplay.
- **Demo gameplay**: menunjukkan `NPC`, `pathfinding`, `decision making`, atau perilaku agent lain dalam konteks permainan yang dapat dimainkan.
- **Demo AI debug mode**: menampilkan informasi internal seperti `state`, `path`, `action`, atau `score` agar proses pengambilan keputusan dapat diamati.
- **Evaluasi AI**: membahas kualitas perilaku, stabilitas, responsivitas, bug, edge case, dan hasil pengujian.
- **Penjelasan arsitektur sistem**: menjelaskan bagaimana komponen game dan komponen AI terhubung, termasuk alur data, `state`, `action`, dan interaksi antar agent.
- **Refleksi pengembangan**: menceritakan proses pengembangan, tantangan, perbaikan, dan pembelajaran selama membangun proyek.

Target UAS dapat dirumuskan sebagai berikut:

```text
Mini game Unity dengan AI yang dapat dimainkan,
dijelaskan, diuji, dan dievaluasi.
```

Artinya, keberhasilan proyek tidak hanya diukur dari apakah game dapat dijalankan, tetapi juga dari kemampuan mahasiswa menjelaskan alasan di balik perilaku AI, menunjukkan bukti pengujian, dan menilai apakah perilaku tersebut sesuai tujuan desain.

Sebelum lanjut, mahasiswa perlu memahami bahwa **AI dalam game** harus bersifat **observable**, **testable**, dan **explainable**. Debug mode, visualisasi `state`, dan evaluasi perilaku menjadi bagian penting dari proyek, bukan sekadar tambahan teknis.

### Inti yang Harus Ditekankan

- UAS adalah penilaian **proyek akhir**, bukan hanya presentasi teori.
- Mini game harus memiliki AI yang **dapat dimainkan**, **dijelaskan**, **dijalankan**, **diuji**, dan **dievaluasi**.
- **AI debug mode** penting untuk menunjukkan proses internal seperti `state`, `path`, `action`, atau `score`.
- Penjelasan arsitektur harus menunjukkan hubungan antara gameplay, `NPC`, `decision making`, dan sistem AI.
- Refleksi pengembangan menunjukkan kemampuan mahasiswa menganalisis proses, masalah, dan perbaikan proyek.

### Transisi ke Slide Berikutnya

Setelah memahami format dan target UAS, kita akan meninjau kembali komponen praktikum `Unity` yang menjadi fondasi pengembangan proyek sepanjang semester.

---

## Slide 044 - Komponen Praktikum Unity

### Narasi

Slide ini menyajikan **komponen praktikum Unity** yang akan dibangun mahasiswa selama semester. Daftar ini perlu dibaca sebagai **peta kompetensi**, bukan sekadar daftar fitur. Setiap komponen mewakili satu kemampuan sistem: menyiapkan proyek, membaca keadaan, bergerak, mengambil keputusan, berinteraksi dengan dunia, dan beradaptasi.

```text
Unity Project Setup
Player Controller
NPC Detector
NPC Guard
Steering Agents
NavMeshAgent
A* Grid Pathfinding
FSM Enemy
Behavior Tree NPC
Utility AI
Squad AI
PCG Spawner
Procedural Dungeon
DDA Manager
Player Telemetry
Q-Learning Agent
Unity ML-Agents
```

Untuk memudahkan pemahaman, komponen tersebut dapat dikelompokkan menjadi beberapa lapisan:

1. **Fondasi proyek dan agen**
   - `Unity Project Setup` menjadi dasar scene, object, dan alur kerja Unity.
   - `Player Controller` memberi perilaku pemain, sehingga agen lain punya target dan referensi interaksi.

2. **Persepsi dan telemetri**
   - `NPC Detector` memungkinkan agen mendeteksi keberadaan pemain atau objek tertentu.
   - `Player Telemetry` mengumpulkan data perilaku pemain, seperti posisi, jarak, atau pola interaksi, untuk dipakai oleh sistem yang lebih adaptif.

3. **Pergerakan dan pathfinding**
   - `Steering Agents` menghasilkan gerakan yang lebih halus dan responsif.
   - `NavMeshAgent` digunakan untuk pergerakan berbasis navigasi mesh.
   - `A* Grid Pathfinding` cocok untuk lingkungan grid atau dungeon berbasis sel.

4. **Pengambilan keputusan**
   - `FSM Enemy` memperkenalkan perilaku berbasis state, misalnya idle, chase, attack, patrol.
   - `Behavior Tree NPC` memberi struktur keputusan yang lebih hierarkis dan mudah dikembangkan.
   - `Utility AI` memungkinkan agen memilih tindakan berdasarkan skor atau prioritas.

5. **Integrasi NPC dan dunia**
   - `NPC Guard` menjadi contoh integrasi sederhana: deteksi, pergerakan, dan keputusan untuk menjaga area.
   - `Squad AI` memperluas perilaku dari satu agen menjadi kelompok.
   - `PCG Spawner` dan `Procedural Dungeon` membuat lingkungan atau penempatan agen dapat dihasilkan secara prosedural.

6. **Adaptasi dan pembelajaran**
   - `DDA Manager` menyesuaikan tingkat kesulitan atau parameter permainan berdasarkan kondisi.
   - `Q-Learning Agent` memperkenalkan pendekatan pembelajaran berbasis reward.
   - `Unity ML-Agents` menjadi wadah untuk eksperimen agen yang belajar dari interaksi.

Yang perlu ditekankan adalah **alur data** antar komponen. Deteksi menghasilkan informasi, pergerakan memakai informasi itu, keputusan menentukan aksi, dan telemetri dapat memengaruhi adaptasi. Mahasiswa tidak cukup hanya membuat satu komponen berjalan; mereka harus mampu menjelaskan **input, proses, dan output** dari setiap bagian.

Sebelum lanjut, mahasiswa perlu memahami bahwa `NPC Guard` adalah titik integrasi awal: komponen sederhana ini sudah menggabungkan persepsi, pathfinding, dan state machine. Pemahaman ini akan menjadi dasar ketika komponen yang lebih kompleks, seperti behavior tree, utility, squad, dan learning agent, dibahas lebih dalam.

### Inti yang Harus Ditekankan

- Komponen praktikum membentuk **pipeline perilaku agen**: setup, persepsi, pergerakan, keputusan, integrasi dunia, dan adaptasi.
- `NPC Guard` adalah contoh integrasi awal antara `NPC Detector`, pathfinding, dan `FSM Enemy`.
- Mahasiswa harus mampu menjelaskan **input, proses, dan output** setiap komponen, bukan hanya menjalankan script.
- Perbedaan konsep penting: `Steering Agents`, `NavMeshAgent`, `A* Grid Pathfinding`; `FSM Enemy`, `Behavior Tree NPC`, `Utility AI`; serta `DDA Manager` dan `Q-Learning Agent`.

### Transisi ke Slide Berikutnya

Setelah komponen praktikum ini dipahami sebagai satu sistem, slide berikutnya akan membahas **tools dan skill teknis** yang digunakan untuk membangunnya, seperti Unity, C#, komponen Unity, debugging, parameter tuning, dan dokumentasi.

---

## Slide 045 - Tools dan Skill Teknis

### Narasi

Pada slide ini, kita membahas **tools** dan **skill teknis** yang akan menjadi dasar praktik mahasiswa. Tujuan utamanya bukan sekadar mengenal perangkat lunak, tetapi memahami bagaimana setiap komponen digunakan untuk membangun perilaku NPC yang dapat diamati, diuji, dan diperbaiki.

Secara intuitif, Unity menyediakan “tubuh” dan “lingkungan” bagi agent game. **GameObject** adalah entitas utama, sedangkan **Component** adalah bagian yang memberi kemampuan. `Transform` menentukan posisi, rotasi, dan skala. `Rigidbody` memberi respons fisika, `Collider` menentukan area tabrakan, dan `Raycast` membantu NPC “melihat” objek di sekitarnya. `LayerMask` penting agar interaksi hanya terjadi pada objek yang relevan, misalnya pemain, musuh, atau dinding.

Untuk pergerakan dan navigasi, `NavMeshAgent` menjadi komponen penting karena memungkinkan NPC bergerak di atas grid navigasi. `Gizmos` membantu visualisasi garis, raycast, atau area deteksi langsung di Scene View. `UI Debug` berguna untuk menampilkan state, parameter, atau hasil keputusan NPC selama gameplay. `ScriptableObject` bersifat opsional dan dapat dipakai untuk menyimpan data konfigurasi, seperti parameter musuh atau perilaku NPC, tanpa harus menuliskannya langsung di script. `Unity ML-Agents` juga opsional untuk eksplorasi agent yang belajar dari lingkungan, tetapi penggunaannya tidak wajib pada tahap awal.

Skill teknis yang harus dibiasakan meliputi:

- **scripting**, untuk mengubah logika perilaku menjadi kode C# yang dapat dieksekusi Unity;
- **debugging**, untuk menemukan kesalahan pada state, sensor, pergerakan, atau keputusan NPC;
- **parameter tuning**, untuk menyesuaikan kecepatan, jangkauan deteksi, agresi, atau bobot perilaku;
- **gameplay testing**, untuk memastikan NPC berperilaku wajar dan tidak merusak pengalaman bermain;
- **dokumentasi**, untuk mencatat keputusan desain, parameter penting, dan hasil pengujian agar mudah dikembangkan.

Mahasiswa perlu memahami bahwa tools ini saling terhubung. Misalnya, NPC yang menggunakan `Raycast` dan `LayerMask` dapat mendeteksi pemain, lalu `NavMeshAgent` membawanya mendekat, sementara `UI Debug` membantu melihat apakah deteksi dan keputusan tersebut berjalan sesuai harapan.

### Inti yang Harus Ditekankan

- **Unity 6** dan **C#** adalah lingkungan utama untuk membangun, menguji, dan memperbaiki perilaku NPC.
- Komponen seperti `GameObject`, `Component`, `Transform`, `Rigidbody`, `Collider`, `Raycast`, dan `LayerMask` menjadi dasar interaksi antara NPC dan lingkungan.
- `NavMeshAgent`, `Gizmos`, dan `UI Debug` membantu pergerakan, visualisasi, serta observasi perilaku NPC secara langsung.
- Skill seperti scripting, debugging, parameter tuning, gameplay testing, dan dokumentasi menentukan kualitas hasil praktikum.

### Transisi ke Slide Berikutnya

Setelah tools dan skill teknis ini dipahami, mahasiswa akan menggunakannya dalam UTS mini project, yaitu membangun mini game kecil dengan NPC cerdas yang memiliki tujuan gameplay, pergerakan, dan kondisi menang/kalah.

---

## Slide 046 - UTS Mini Project

### Narasi

Selanjutnya, kita masuk ke bagian evaluasi tengah semester. Pada pertemuan ini, UTS tidak dirancang sebagai ujian tertulis biasa, tetapi sebagai **mini project** yang menuntut mahasiswa membangun sebuah sistem kecil yang bisa langsung diamati perilakunya.

Target utamanya adalah:

```text
Mini game kecil dengan NPC cerdas.
```

Artinya, mahasiswa tidak cukup hanya membuat objek bergerak atau menampilkan teks. Mahasiswa harus membuat **NPC** yang memiliki perilaku yang terasa lebih hidup, yaitu mampu membaca situasi, bergerak, mengambil keputusan, dan memengaruhi hasil permainan.

Minimal, project ini harus mengintegrasikan beberapa komponen berikut:

- **perception**: NPC harus mampu mengetahui informasi dari lingkungan, misalnya posisi pemain, jarak, objek yang terlihat, atau kondisi tertentu.
- **movement/navigation**: NPC harus bisa berpindah posisi secara masuk akal, baik dengan mekanisme gerak sederhana, pathfinding, atau pendekatan lain yang sesuai.
- **decision making**: NPC harus memiliki logika untuk memilih tindakan, misalnya mengejar, menghindar, menjaga area, atau menyerang.
- **gameplay objective**: ada tujuan permainan yang jelas, bukan hanya NPC bergerak tanpa arah.
- **win/lose condition**: ada kondisi menang dan kalah yang bisa diuji secara nyata.
- **debug sederhana**: mahasiswa perlu menyediakan cara untuk melihat apa yang sedang dilakukan NPC, misalnya log, indikator visual, atau panel debug ringan.

Intuisi praktisnya adalah: project ini harus terasa seperti **gameplay loop** kecil. Pemain melakukan sesuatu, NPC merespons, lalu hasil dari interaksi tersebut menentukan apakah pemain menang atau kalah. Di sinilah konsep perilaku cerdas mulai terlihat sebagai sistem, bukan sekadar animasi atau script terpisah.

Beberapa contoh project yang bisa dipilih antara lain:

- **stealth guard game**, di mana NPC penjaga mencari atau mengejar pemain yang terdeteksi.
- **survival arena**, di mana NPC bertahan, menyerang, atau menghindari bahaya.
- **dungeon enemy**, di mana musuh memiliki perilaku berbeda tergantung jarak atau kondisi.
- **robot arena**, di mana robot mengambil keputusan berdasarkan sensor atau lingkungan.
- **chase/escape game**, di mana ada kejar-kejaran antara pemain dan NPC.

Penting untuk dipahami bahwa skala project ini memang **mini**. Mahasiswa tidak perlu membuat game besar, tetapi harus menunjukkan bahwa komponen perilaku cerdas sudah terintegrasi dan bisa diuji. Fokusnya adalah pada **perilaku NPC**, **keterhubungan antar sistem**, dan **bukti bahwa game bisa dimainkan**.

### Inti yang Harus Ditekankan

- UTS berupa **mini project**, bukan hanya ujian tertulis.
- Target utama adalah **mini game kecil dengan NPC cerdas**.
- Project harus mengintegrasikan `perception`, `movement/navigation`, `decision making`, `gameplay objective`, `win/lose condition`, dan `debug sederhana`.
- Skala boleh kecil, tetapi perilaku NPC harus jelas, teruji, dan memengaruhi gameplay.

### Transisi ke Slide Berikutnya

Setelah memahami bentuk project yang diharapkan, slide berikutnya akan membahas bagaimana project ini dinilai, termasuk komponen-komponen yang menjadi fokus penilaian.

---

## Slide 047 - Komponen Penilaian UTS

### Narasi

Slide ini menjelaskan **komponen penilaian UTS**. Setelah mini project UTS ditetapkan sebagai mini game dengan NPC cerdas, mahasiswa perlu memahami bahwa nilai tidak hanya ditentukan oleh satu fitur, tetapi oleh **integrasi beberapa komponen AI** dalam satu permainan.

Rekomendasi penilaian dapat dibaca sebagai berikut:

- `Perception system` — 15%: menilai apakah NPC mampu mendeteksi pemain, objek, atau kondisi lingkungan sebagai dasar perilaku.
- `Movement / navigation` — 20%: menilai apakah NPC dapat berpindah secara masuk akal, misalnya mengikuti path, menghindari hambatan, atau mendekati target.
- `Decision making` — 25%: menilai apakah NPC dapat memilih `state` atau `action` yang sesuai dengan situasi, sehingga perilakunya tidak hanya acak atau statis.
- `Correctness` — 15%: menilai apakah implementasi benar, stabil, dan tidak memiliki error fatal yang merusak alur game.
- `Gameplay` — 15%: menilai apakah mini game memiliki tujuan, kondisi menang/kalah, dan pengalaman bermain yang jelas.
- `Dokumentasi` — 10%: menilai apakah mahasiswa dapat menjelaskan desain, keputusan teknis, dan hasil implementasi secara rapi.

Secara bobot, **decision making** menjadi komponen terbesar karena merupakan inti perilaku NPC. **Movement / navigation** juga penting karena keputusan AI harus terlihat dalam pergerakan yang masuk akal. Sementara itu, `perception system`, `correctness`, `gameplay`, dan `dokumentasi` memastikan sistem AI tidak hanya ada secara teknis, tetapi juga dapat dimainkan, dijelaskan, dan dipertanggungjawabkan.

Yang harus dipahami mahasiswa adalah UTS menilai **integrasi materi Minggu 1–7**. Artinya, komponen AI tidak dinilai sebagai potongan terpisah. Jika NPC dapat melihat, bergerak, dan mengambil keputusan, tetapi tidak terhubung dengan tujuan game, integrasinya belum kuat. Sebaliknya, implementasi yang sederhana tetapi stabil, konsisten, dan mendukung gameplay lebih baik daripada fitur rumit yang tidak berfungsi.

Sebelum lanjut, pastikan mahasiswa memahami bahwa bobot penilaian adalah panduan untuk memprioritaskan pekerjaan: bangun perilaku NPC yang dapat mengambil keputusan, pastikan pergerakan dan persepsinya mendukung keputusan tersebut, lalu jaga agar game tetap benar, dapat dimainkan, dan terdokumentasi dengan baik.

### Inti yang Harus Ditekankan

- `Decision making` memiliki bobot terbesar karena menjadi inti perilaku NPC.
- `Movement / navigation` dan `perception system` harus mendukung keputusan AI, bukan hanya berjalan atau mendeteksi tanpa tujuan.
- `Correctness`, `gameplay`, dan `dokumentasi` menilai kesiapan mini game: stabil, dapat dimainkan, dan dapat dijelaskan.
- UTS menilai **integrasi materi Minggu 1–7**, bukan satu komponen AI yang berdiri sendiri.

### Transisi ke Slide Berikutnya

Setelah memahami komponen penilaian UTS, langkah berikutnya adalah melihat cakupan UAS final project, yaitu mini game yang menggabungkan beberapa komponen Game AI secara lebih lengkap.

---

## Slide 048 - UAS Final Project

### Narasi

Slide ini memposisikan **UAS Final Project** sebagai **Intelligent Game Project**. Mahasiswa tidak lagi dinilai hanya dari satu komponen, tetapi dari kemampuan membangun **mini game Unity** yang playable dan memperlihatkan beberapa sistem kecerdasan game yang saling terhubung.

Intuisi praktisnya adalah: final project harus terasa seperti game, bukan kumpulan eksperimen terpisah. Setiap komponen harus masuk ke loop permainan, memengaruhi perilaku NPC, navigasi, tantangan, atau pengalaman pemain.

Contoh pertama menunjukkan struktur proyek yang bisa dipilih:

```text
Game
├── NPC
│   └── Behavior Tree
├── Procedural Level
│   └── PCG
└── Adaptive Difficulty
    └── DDA
```

Pada struktur ini, `Game` adalah akar sistem. Cabang `NPC` menggunakan `Behavior Tree` untuk mengatur keputusan NPC. Cabang `Procedural Level` menggunakan `PCG` untuk menghasilkan level secara prosedural. Cabang `Adaptive Difficulty` menggunakan `DDA` untuk menyesuaikan tingkat kesulitan selama permainan berjalan.

Contoh kedua menunjukkan kombinasi lain yang lebih berfokus pada perilaku musuh dan eksplorasi:

```text
Game
├── Enemy FSM
├── NavMesh / A*
├── Player Modeling
└── Procedural Dungeon
```

Di sini, `Enemy FSM` mengatur state musuh, `NavMesh / A*` menangani pergerakan dan pencarian jalur, `Player Modeling` membantu sistem memahami pola pemain, dan `Procedural Dungeon` menyediakan variasi lingkungan permainan.

Sebelum lanjut, mahasiswa perlu memahami bahwa pilihan komponen bukan sekadar daftar fitur. Yang penting adalah **integrasi**: bagaimana keputusan NPC, jalur gerak, level yang dihasilkan, dan penyesuaian kesulitan bekerja bersama dalam satu playable level.

### Inti yang Harus Ditekankan

- **UAS Final Project** adalah mini game Unity yang mengintegrasikan beberapa komponen kecerdasan game.
- Setiap komponen harus memengaruhi gameplay, bukan hanya ada sebagai modul terpisah.
- Contoh struktur menunjukkan bahwa proyek bisa dibangun dari kombinasi `Behavior Tree`, `PCG`, `DDA`, `Enemy FSM`, `NavMesh / A*`, `Player Modeling`, atau `Procedural Dungeon`.
- Fokus utama adalah **playable**, **terintegrasi**, dan **dapat dijelaskan secara teknis**.

### Transisi ke Slide Berikutnya

Setelah memahami gambaran umum final project, slide berikutnya akan merinci requirement minimal yang harus dipenuhi agar proyek dapat dinilai secara konsisten.

---

## Slide 049 - Requirement Final Project

### Narasi

Slide ini menetapkan **requirement final project** yang harus dipenuhi mahasiswa. Fokusnya adalah memastikan project tidak hanya berupa kumpulan scene atau script, tetapi menjadi **mini game Unity** yang **playable**, dapat diuji, dan memiliki komponen **Game AI** yang terlihat jelas.

Requirement ini sebaiknya dibaca sebagai **batas minimum**, bukan target maksimal. Artinya, mahasiswa tidak perlu membuat game besar, tetapi harus menyelesaikan satu lingkup kecil dengan kualitas yang stabil.

Secara garis besar, requirement dapat dikelompokkan menjadi tiga bagian.

- **Game inti**: `1 playable level`, `1 player controller`, `win condition`, `lose condition`, `UI`, `audio atau visual feedback`, dan `asset non-default Unity`.
- **Sistem perilaku**: `beberapa NPC/enemy`, `minimal 3 AI behavior`, `navigation/pathfinding`, dan `decision making`.
- **Fitur lanjutan dan evaluasi**: `1 fitur advanced` dari `PCG`, `DDA`, `Player Modeling`, `Tactical AI`, atau `ML-Agent`, serta `AI debug mode`.

Bagian **game inti** penting karena menjadi dasar penilaian. Tanpa `playable level` dan `player controller`, komponen perilaku tidak dapat diuji secara bermakna. `win condition` dan `lose condition` membuat game memiliki tujuan yang jelas, sedangkan `UI` dan `audio atau visual feedback` membantu pemain memahami apa yang sedang terjadi di dalam game. `asset non-default Unity` juga menjadi penanda bahwa project sudah dikembangkan sebagai karya, bukan hanya template bawaan.

Bagian **sistem perilaku** adalah inti dari mata kuliah Game Cerdas. `beberapa NPC/enemy` menunjukkan bahwa game memiliki agen yang dapat berinteraksi dengan pemain. `minimal 3 AI behavior` berarti mahasiswa harus menampilkan perilaku yang berbeda dan dapat diamati, misalnya perilaku dasar yang berubah sesuai kondisi game. `navigation/pathfinding` memastikan agen dapat bergerak di environment, sedangkan `decision making` menjelaskan bagaimana agen memilih perilaku atau tindakan pada suatu keadaan.

Fitur **advanced** dipilih satu, tetapi harus terintegrasi dengan game, bukan sekadar ditempelkan. Misalnya, jika memilih `PCG`, fitur tersebut harus memengaruhi level atau lingkungan yang dimainkan. Jika memilih `DDA`, fitur tersebut harus mengubah tantangan berdasarkan kondisi pemain. Jika memilih `Player Modeling`, `Tactical AI`, atau `ML-Agent`, fitur tersebut harus terlihat dalam perilaku agen atau strategi game.

`AI debug mode` adalah requirement yang sering dianggap sepele, tetapi sangat penting. Mode ini memungkinkan mahasiswa dan penguji melihat state, keputusan, target, path, atau parameter perilaku secara langsung. Dengan debug mode, project tidak hanya dinilai dari tampilan akhir, tetapi juga dari proses pengambilan keputusan yang terjadi di balik layar.

Sebelum lanjut, mahasiswa perlu memahami bahwa final project yang baik adalah project yang **selesai**, **playable**, dan **dapat dijelaskan**. Skala kecil yang stabil lebih bernilai daripada game besar yang tidak dapat dijalankan atau tidak memiliki bukti perilaku yang jelas.

### Inti yang Harus Ditekankan

- Final project harus memenuhi **requirement minimum**, bukan sekadar ide besar.
- Game harus **playable**: ada `playable level`, `player controller`, `win condition`, `lose condition`, `UI`, dan feedback.
- Sistem perilaku harus terlihat jelas: `NPC/enemy`, `minimal 3 AI behavior`, `navigation/pathfinding`, dan `decision making`.
- Satu fitur `advanced` harus dipilih dan terintegrasi, bukan hanya disebutkan.
- `AI debug mode` wajib ada untuk membuktikan bahwa perilaku dan keputusan dapat diamati.

### Transisi ke Slide Berikutnya

Setelah requirement minimum dipahami, langkah berikutnya adalah memilih topik yang realistis. Slide berikutnya akan memberikan contoh topik final project yang dapat dijadikan acuan, dengan prinsip bahwa satu level kecil yang selesai dan playable lebih penting daripada game besar yang tidak stabil.

---

## Slide 050 - Contoh Topik Final Project

### Narasi

Slide ini memberikan **contoh topik final project** yang bisa dipilih mahasiswa. Tujuannya bukan untuk membatasi ide, tetapi menunjukkan bahwa final project yang baik harus memiliki **scope kecil**, **alur permainan jelas**, dan **AI yang dapat didemonstrasikan secara stabil**.

Beberapa contoh yang ditampilkan adalah:

- **Stealth Infiltration**: fokus pada NPC yang melakukan patroli, deteksi pemain, dan perubahan perilaku saat curiga atau mengejar.
- **Tactical Outpost Defense**: fokus pada pertahanan, pemilihan target, formasi, dan respons terhadap gelombang serangan.
- **Procedural Dungeon Hunter**: fokus pada level yang dihasilkan secara prosedural, penempatan NPC, dan pathfinding di layout yang berubah.
- **Robot Arena Adaptive Combat**: fokus pada combat agent yang dapat menyesuaikan strategi, seperti menyerang, menghindar, atau mengejar.
- **Zombie Extraction**: fokus pada perilaku kerumunan, pursuit, dan objective extraction yang tetap playable.
- **Wildlife Ecosystem**: fokus pada agent otonom yang bergerak, mencari sumber daya, atau berinteraksi dalam lingkungan.
- **Alien Colony Defense**: fokus pada pertahanan koloni, prioritas ancaman, dan koordinasi NPC.
- **Heist Escape**: fokus pada perencanaan rute, interaksi dengan guard, dan kondisi escape yang jelas.

Prinsip utama yang harus dipahami adalah:

```text
Satu level kecil tetapi selesai dan playable
lebih baik daripada game besar tetapi tidak stabil.
```

Artinya, final project tidak dinilai dari seberapa besar dunia game-nya, tetapi dari seberapa jelas **AI behavior** yang dibangun dan seberapa stabil implementasinya. Mahasiswa perlu memilih topik yang memungkinkan adanya **player controller**, **NPC/enemy**, **navigation/pathfinding**, **decision making**, dan minimal satu fitur advanced yang bisa diuji dalam satu level.

Dari sisi desain, topik yang baik biasanya memiliki **win condition** dan **lose condition** yang sederhana. Misalnya, pemain berhasil keluar, bertahan sampai waktu tertentu, atau mengalahkan musuh. Dengan kondisi menang-kalah yang jelas, dosen dan mahasiswa dapat menilai apakah AI benar-benar memengaruhi gameplay, bukan hanya menjadi latar belakang visual.

Sebelum memilih topik, mahasiswa sebaiknya memetakan fitur AI yang ingin ditunjukkan. Jika memilih stealth, fokuskan pada `perception` dan `alert state`. Jika memilih defense, fokuskan pada `target selection` dan `formation`. Jika memilih procedural dungeon, fokuskan pada `PCG` dan `pathfinding`. Jika memilih arena combat, fokuskan pada `steering` dan `adaptive behavior`. Dengan pemetaan ini, scope final project menjadi lebih realistis dan mudah diuji.

### Inti yang Harus Ditekankan

- Pilih **satu topik** yang bisa dibuat menjadi **satu level playable**, bukan banyak sistem yang setengah jadi.
- Pastikan topik mendukung implementasi **NPC behavior**, **pathfinding**, **decision making**, dan minimal satu fitur advanced.
- **Win condition** dan **lose condition** harus jelas agar AI dapat dievaluasi secara langsung.
- Stabilitas dan kejelasan gameplay lebih penting daripada skala dunia game.

### Transisi ke Slide Berikutnya

Setelah memahami contoh topik dan prinsip scope final project, kita lanjut ke komposisi penilaian mata kuliah untuk melihat bagaimana setiap komponen pembelajaran memberikan bobot terhadap capaian pembelajaran.

---

## Slide 051 - Komposisi Penilaian Mata Kuliah

### Narasi

Slide ini menjelaskan **komposisi penilaian** mata kuliah Game Cerdas. Tujuannya agar mahasiswa memahami bahwa nilai tidak hanya ditentukan oleh satu ujian akhir, tetapi oleh rangkaian proses belajar yang bertahap. Penilaian dirancang untuk menyeimbangkan pemahaman konsep, kemampuan implementasi, konsistensi praktikum, dan kualitas pengembangan project.

Rekomendasi komposisi yang ditampilkan adalah:

| Komponen | Bobot |
|---|---:|
| Tugas / Praktikum | 25% |
| Kuis / Konsep | 10% |
| UTS Mini Project | 20% |
| Progress Final Project | 10% |
| UAS Final Project | 35% |
| **Total** | **100%** |

Secara konseptual, komposisi ini membagi penilaian menjadi dua kelompok besar. Kelompok pertama menilai **proses belajar harian dan pemahaman dasar**, yaitu tugas, praktikum, dan kuis konsep. Kelompok kedua menilai **kemampuan membangun dan menyelesaikan project**, yaitu mini project pada UTS, progress final project, dan final project pada UAS. Pembagian ini penting karena mata kuliah ini tidak hanya menuntut hafalan teori, tetapi juga kemampuan menerapkannya ke dalam sistem game yang dapat dijalankan.

Perlu dipahami bahwa bobot terbesar diberikan pada **UAS Final Project** sebesar `35%`. Artinya, kualitas akhir project menjadi penentu utama. Namun, project yang baik tidak muncul tiba-tiba; ia dibangun dari praktikum, tugas, kuis, dan progress yang terukur. Karena itu, mahasiswa perlu menjaga konsistensi sejak awal semester. Penilaian juga memperhatikan aspek **presentasi**, karena mahasiswa harus mampu menjelaskan keputusan desain, alur kerja, dan hasil implementasi secara jelas.

### Inti yang Harus Ditekankan

- Nilai mata kuliah ini ditentukan oleh **kombinasi proses dan hasil**, bukan hanya ujian akhir.
- **Tugas, praktikum, kuis, mini project, progress, dan final project** memiliki peran berbeda dalam menilai pemahaman dan kemampuan implementasi.
- Bobot terbesar ada pada **UAS Final Project**, tetapi kualitas project sangat bergantung pada konsistensi kerja sejak awal semester.
- Mahasiswa harus mampu menjelaskan **mengapa solusi yang dipilih** dan bagaimana implementasinya bekerja dalam konteks game.

### Transisi ke Slide Berikutnya

Setelah memahami bagaimana penilaian disusun, langkah berikutnya adalah memahami standar kerja yang diharapkan dalam setiap praktikum.

---

## Slide 052 - Ekspektasi Praktikum

### Narasi

Pada slide ini, kita membahas **ekspektasi praktikum** untuk mata kuliah Game Cerdas. Praktikum bukan sekadar latihan mengetik kode, tetapi ruang untuk membuktikan bahwa mahasiswa memahami perilaku sistem game yang dibangun.

Setiap praktikum sebaiknya memiliki komponen berikut:

- `project Unity` yang dapat dijalankan.
- `script` yang dapat dijelaskan oleh mahasiswa.
- `parameter` yang dapat diubah untuk melihat pengaruhnya terhadap perilaku.
- `debug visual` agar proses pengambilan keputusan terlihat.
- `screenshot` atau `video demo` sebagai bukti hasil.
- `laporan singkat` yang menjelaskan apa yang dibangun.
- `analisis hasil` yang menunjukkan mengapa perilaku muncul.

Poin penting yang harus dipahami adalah: **menjalankan kode saja tidak cukup**. Mahasiswa harus mampu menjelaskan alasan di balik keputusan yang diambil oleh sistem.

```text
Mengapa AI mengambil keputusan tertentu?
```

Pertanyaan ini menjadi inti praktikum. Jika mahasiswa menggunakan `state`, `action`, `parameter`, atau logika sederhana, ia harus mampu menelusuri alurnya. Misalnya, mengapa karakter bergerak ke titik tertentu, mengapa berhenti, mengapa memilih aksi tertentu, atau mengapa nilai parameter tertentu mengubah hasil.

Dengan cara ini, praktikum menjadi bukti bahwa mahasiswa tidak hanya menyalin implementasi, tetapi benar-benar memahami hubungan antara kode, perilaku, dan hasil visual di game.

### Inti yang Harus Ditekankan

- Praktikum harus menghasilkan `project Unity` yang berjalan, bukan hanya file kode.
- Mahasiswa harus mampu menjelaskan `script`, `parameter`, dan alasan keputusan sistem.
- `debug visual`, demo, laporan, dan analisis hasil menjadi bagian penting penilaian.
- Fokus utama adalah memahami **mengapa** perilaku muncul, bukan hanya **apa** yang terjadi.

### Transisi ke Slide Berikutnya

Setelah memahami ekspektasi praktikum, kita lanjut ke ekspektasi project, yaitu bagaimana hasil kerja mahasiswa harus berkembang menjadi game yang lebih utuh, playable, dan memiliki AI yang dapat dijelaskan.

---

## Slide 053 - Ekspektasi Project

### Narasi

Pada tahap project, mahasiswa tidak lagi dinilai hanya dari satu script atau satu perilaku NPC yang berhasil. Yang dinilai adalah apakah game sudah menjadi **produk yang bisa dimainkan** dan apakah **sistem keputusan** di dalamnya dapat diamati, dijelaskan, dan diuji.

Project yang baik harus memiliki `gameplay loop` yang jelas. Artinya, pemain tahu apa yang harus dilakukan, apa umpan balik dari lingkungannya, dan bagaimana `win/lose condition` terjadi. Dalam konteks game cerdas, loop ini penting karena perilaku agen harus terasa masuk akal di tengah tujuan permainan, bukan sekadar berjalan di tempat atau melakukan aksi teknis yang tidak terhubung dengan desain.

Beberapa indikator utama project yang baik:

- **Playable**: game dapat dijalankan dari awal sampai akhir, bukan hanya scene pengujian.
- **Gameplay loop**: ada tujuan, aksi pemain, respons lingkungan, dan konsekuensi.
- **Perilaku agen yang terlihat**: NPC atau agen menunjukkan keputusan yang dapat diamati, misalnya mengejar, menghindar, mencari target, atau memilih aksi berdasarkan kondisi.
- **Bukan hanya demo teknis**: project harus terasa seperti game, bukan hanya kumpulan fungsi atau test scene.
- **Visual cukup menarik dan asset konsisten**: presentasi membantu pemain memahami dunia game dan peran agen di dalamnya.
- **UI jelas**: pemain tahu status, tujuan, atau kondisi penting.
- **Win/lose condition**: ada batas keberhasilan dan kegagalan.
- **Debug mode**: ada cara untuk melihat kondisi internal agen, seperti `state`, `target`, jarak, atau `path`.
- **Dokumentasi arsitektur**: mahasiswa mampu menjelaskan bagaimana keputusan dibuat, bukan hanya menunjukkan hasil akhir.

Sebaliknya, project yang buruk biasanya terlalu ambisius sehingga tidak selesai, atau hanya menampilkan asset visual tanpa perilaku yang dapat dijelaskan. Masalah utamanya bukan pada kualitas grafis, melainkan pada ketiadaan **decision-making** yang dapat dipertanggungjawabkan. Jika mahasiswa tidak bisa menjelaskan mengapa agen memilih suatu aksi, maka project belum menunjukkan pemahaman terhadap game cerdas.

Sebelum lanjut, mahasiswa perlu memahami bahwa project bukan sekadar kumpulan fitur. Yang penting adalah **konsistensi antara desain game, perilaku agen, dan penjelasan teknis**. Project yang lebih kecil tetapi selesai, dapat dimainkan, dan perilakunya dapat dijelaskan jauh lebih baik daripada project besar yang tidak bisa dianalisis.

### Inti yang Harus Ditekankan

- Project harus **playable** dan memiliki `gameplay loop` yang jelas.
- Perilaku agen harus **terlihat**, **dapat diamati**, dan **dapat dijelaskan** melalui keputusan yang masuk akal.
- Project yang baik bukan hanya demo teknis atau asset visual, tetapi menunjukkan `win/lose condition`, **UI**, dan `debug mode`.
- Dokumentasi harus menjelaskan **arsitektur keputusan**, bukan hanya daftar fitur.

### Transisi ke Slide Berikutnya

Setelah memahami standar project, langkah berikutnya adalah melihat bagaimana mahasiswa dapat membuktikan bahwa keputusan agen benar-benar dapat diamati. Untuk itu, kita masuk ke pentingnya `debug mode` sebagai alat untuk melihat `state`, `target`, `path`, dan kondisi internal agen.

---

## Slide 054 - Pentingnya Debug Mode

### Narasi

**Debug mode** adalah alat observasi untuk melihat apa yang sedang terjadi di dalam perilaku NPC, bukan hanya apa yang terlihat di layar. Tanpa debug mode, mahasiswa hanya melihat hasil akhir: NPC bergerak, menyerang, atau berhenti. Dengan debug mode, mahasiswa dapat memeriksa alasan di balik perilaku tersebut.

Mode ini penting karena perilaku NPC biasanya berasal dari banyak komponen yang bekerja bersamaan. Beberapa hal yang dapat dilihat antara lain:

- **State** dan **target** untuk mengetahui keputusan utama NPC.
- **Path**, **FOV**, dan **last known position** untuk memeriksa pergerakan serta persepsi.
- **Utility score**, **difficulty multiplier**, **seed PCG**, dan **reward RL** untuk melihat bobot keputusan, tingkat kesulitan, variasi prosedural, dan sinyal pembelajaran.

Contoh tampilan debug sederhana:

```text
Enemy01
State: CHASE
Target: Player
Can See: TRUE
Distance: 6.2
Path: Active
```

Pada contoh tersebut, `Enemy01` adalah objek NPC yang sedang diamati. Nilai `State: CHASE` menunjukkan bahwa NPC berada pada kondisi mengejar, misalnya dalam **FSM** atau node **behavior tree**. `Target: Player` menunjukkan objek yang sedang diprioritaskan, sedangkan `Can See: TRUE` menunjukkan bahwa NPC berhasil mendeteksi pemain dalam jangkauan **FOV**. `Distance: 6.2` memberi informasi jarak, dan `Path: Active` menunjukkan bahwa **pathfinding** sedang berjalan.

Dengan informasi ini, mahasiswa dapat menilai apakah perilaku NPC sesuai desain. Misalnya, jika `State: CHASE` tetapi `Can See: FALSE`, ada kemungkinan logika persepsi atau transisi state perlu diperiksa. Jika `Path: Active` tetapi NPC tidak bergerak, masalah mungkin ada pada steering, obstacle avoidance, atau eksekusi path.

Sebelum lanjut, mahasiswa perlu memahami bahwa debug mode bukan sekadar tampilan tambahan. Debug mode adalah bukti internal dari proses keputusan NPC. Ia membantu penilaian, troubleshooting, dan penjelasan arsitektur perilaku dalam project.

### Inti yang Harus Ditekankan

- **Debug mode** membuat perilaku NPC dapat diamati, dijelaskan, dan diuji.
- Informasi seperti `state`, `target`, `path`, `FOV`, dan `distance` membantu melacak keputusan NPC.
- Debug mode penting untuk menilai apakah NPC berperilaku sesuai desain, bukan hanya bergerak.

### Transisi ke Slide Berikutnya

Setelah memahami cara mengamati perilaku NPC melalui debug mode, langkah berikutnya adalah memahami bagaimana algoritma, implementasi, gameplay, dan pengalaman pemain saling terhubung dalam belajar game cerdas.

---

## Slide 055 - Prinsip Belajar Game AI

### Narasi

Slide ini menegaskan cara berpikir utama dalam mata kuliah **Game Cerdas**. Belajar **Game AI** bukan hanya menghafal algoritma, tetapi membangun hubungan antara **Algorithm**, **Implementation**, **Gameplay**, dan **Player Experience**.

Alur pada slide dapat dibaca sebagai berikut:

```text
Algorithm
    ↓
Implementation
    ↓
Gameplay
    ↓
Player Experience
```

Artinya, proses pembelajaran tidak berhenti pada satu tahap saja.

1. **Algorithm** — memilih pendekatan yang sesuai untuk perilaku agent, misalnya **pathfinding**, **decision making**, atau perilaku NPC berbasis `state`.
2. **Implementation** — menerjemahkan pendekatan tersebut menjadi kode, parameter, `state`, `action`, target, dan komponen game yang dapat dijalankan.
3. **Gameplay** — mengamati bagaimana perilaku agent memengaruhi interaksi dengan pemain, tantangan, ritme, dan keseimbangan permainan.
4. **Player Experience** — menilai apakah perilaku tersebut terasa hidup, adil, menantang, atau justru membingungkan.

Intuisi praktisnya sederhana: agent yang “benar secara kode” belum tentu menghasilkan pengalaman bermain yang baik. Misalnya, agent yang mampu menghitung path menuju pemain, tetapi terus-menerus menabrak dinding, berhenti tidak wajar, atau mengejar pemain tanpa alasan, akan merusak **gameplay** meskipun program berjalan tanpa error.

Karena itu, mahasiswa tidak cukup hanya:

- memahami rumus,
- menulis script,
- membuat NPC bergerak.

Yang lebih penting adalah memahami bagaimana **perilaku agent** memengaruhi **gameplay**. Setiap perubahan parameter, `state`, target, atau keputusan agent harus dikaitkan dengan efeknya terhadap pemain. Dengan cara ini, mahasiswa dapat menilai kualitas perilaku game secara lebih utuh, bukan hanya dari apakah script berjalan.

### Inti yang Harus Ditekankan

- Belajar **Game AI** berarti menghubungkan **Algorithm**, **Implementation**, **Gameplay**, dan **Player Experience**.
- Kode yang benar secara teknis belum tentu menghasilkan perilaku NPC yang baik secara desain.
- Mahasiswa harus mampu menilai dampak keputusan agent terhadap pengalaman pemain, bukan hanya melihat apakah script berjalan.

### Transisi ke Slide Berikutnya

Setelah memahami prinsip belajar ini, kita akan melihat bagaimana **Unity** berperan sebagai media untuk mengimplementasikan, memvisualisasikan, dan menguji perilaku agent secara langsung.

---

## Slide 056 - Peran Unity dalam Mata Kuliah

### Narasi

Pada slide ini, kita memosisikan **Unity** sebagai ruang kerja utama dalam mata kuliah. Unity bukan hanya tempat membuat scene, tetapi juga menjadi tempat mahasiswa menguji, mengamati, dan memperbaiki perilaku agent secara langsung.

Peran Unity dalam pembelajaran ini dapat dilihat dari beberapa fungsi utama:

- **media implementasi** untuk menjalankan algoritma dan perilaku game;
- **simulator agent** untuk melihat agent bergerak, memilih aksi, dan bereaksi terhadap environment;
- **tools visualisasi** untuk menampilkan elemen yang biasanya tidak terlihat, seperti `FOV`, `path`, atau status agent;
- **environment untuk eksperimen** agar mahasiswa bisa mencoba parameter, aturan, dan skenario berbeda;
- **platform final project** untuk menghasilkan karya yang dapat dimainkan dan dievaluasi.

Intuisi praktisnya sederhana: perilaku agent baru benar-benar dipahami ketika mahasiswa bisa melihat dampaknya di scene. Jika hanya membaca kode, mahasiswa mungkin tahu apa yang ditulis, tetapi belum tentu tahu apa yang terjadi saat game berjalan.

Contoh visualisasi yang dimaksud dapat dilihat pada potongan berikut:

```text
FOV terlihat dengan Gizmos
Path terlihat di scene
NPC mengejar player
Dungeon terbentuk otomatis
DDA berubah saat player bermain
```

Pada contoh pertama, `FOV` atau field of view dapat ditampilkan menggunakan `Gizmos` agar mahasiswa melihat area yang dianggap terlihat oleh agent. Ini membantu memahami konsep perception sebelum masuk ke detail perhitungan.

Contoh kedua, `path` yang terlihat di scene menunjukkan hasil pathfinding. Mahasiswa dapat memeriksa apakah rute yang dihasilkan masuk akal, apakah agent melewati obstacle yang tidak perlu, atau apakah path berubah ketika environment berubah.

Contoh ketiga, `NPC` yang mengejar `player`, memperlihatkan hubungan antara keputusan agent dan gerakan di scene. Perilaku ini bisa berasal dari aturan sederhana atau mekanisme gerak yang lebih kompleks, tetapi yang penting mahasiswa dapat mengamati kapan agent mulai mengejar, berhenti, atau mengubah target.

Contoh keempat dan kelima menunjukkan bahwa Unity juga mendukung eksperimen yang lebih luas. `Dungeon` yang terbentuk otomatis memperlihatkan proses procedural generation, sedangkan `DDA` yang berubah saat `player` bermain memperlihatkan bagaimana parameter game dapat menyesuaikan diri dengan kondisi permainan.

Dengan Unity, mahasiswa tidak hanya menulis perilaku, tetapi juga bisa melihat, menguji, dan memperbaiki perilaku tersebut secara langsung. Inilah yang membuat Unity menjadi bagian penting dari alur belajar: dari konsep, ke implementasi, lalu ke hasil yang dapat diamati.

### Inti yang Harus Ditekankan

- **Unity** berperan sebagai media implementasi, simulator agent, tools visualisasi, environment eksperimen, dan platform final project.
- Visualisasi seperti `Gizmos`, `FOV`, `path`, dan perilaku `NPC` membantu mahasiswa memahami apa yang sebenarnya terjadi di scene.
- Mahasiswa harus terbiasa membaca hasil visual sebagai umpan balik untuk memperbaiki algoritma, parameter, dan desain perilaku.

### Transisi ke Slide Berikutnya

Setelah memahami Unity sebagai tempat perilaku agent dapat dijalankan dan diamati, slide berikutnya akan membahas peran C# dalam mata kuliah, yaitu bahasa yang digunakan untuk menulis perilaku tersebut secara lebih detail.

---

## Slide 057 - Peran C dalam Mata Kuliah

### Narasi

Pada slide ini, kita melihat peran **C#** sebagai bahasa utama untuk mengimplementasikan perilaku game di Unity. Setelah Unity dipahami sebagai media simulasi dan visualisasi, **C#** menjadi lapisan logika yang membuat setiap komponen benar-benar berjalan.

Intuisi pentingnya adalah: konsep seperti **perception**, **state**, dan **pathfinding** baru terasa nyata ketika ada script yang membaca data, mengambil keputusan, lalu mengubah perilaku objek di scene.

Peran **C#** dalam mata kuliah ini meliputi:

- **Behavior script**: menulis logika NPC atau agent.
- **Input**: membaca aksi player atau event environment.
- **Perception**: menghitung jarak, arah, field of view, atau kondisi lingkungan.
- **State**: mengatur transisi perilaku, misalnya `idle`, `chase`, `attack`, `patrol`.
- `NavMeshAgent`: memanggil dan mengatur pergerakan berbasis pathfinding.
- **Procedural generator**: membuat konten level atau dungeon secara otomatis.
- **Skill score** dan `reward`: menghitung nilai performa atau umpan balik gameplay.
- **Debug UI**: menampilkan state, path, atau parameter penting agar mudah diamati.

Urutan kerja umumnya sederhana: script membaca input atau data lingkungan, kemudian menghitung kondisi, lalu memilih state atau action, memanggil komponen pergerakan, dan menampilkan hasil untuk debugging. Alur ini membuat mahasiswa bisa melihat hubungan antara kode dan perilaku yang muncul di game.

Kemampuan scripting sangat penting karena mahasiswa tidak hanya perlu menjalankan kode, tetapi juga memodifikasi parameter, menemukan bug, dan mengevaluasi apakah perilaku agent sudah sesuai desain. Tanpa kemampuan ini, mahasiswa hanya menjadi pengguna kode, bukan perancang perilaku game.

### Inti yang Harus Ditekankan

- **C#** adalah lapisan implementasi yang menghubungkan konsep perilaku game dengan objek Unity.
- Script **C#** berperan dalam input, perception, state, pathfinding, generator, reward, dan debug UI.
- Mahasiswa perlu mampu membaca, memodifikasi, dan debug script agar bisa mendesain perilaku game, bukan hanya menyalin kode.

### Transisi ke Slide Berikutnya

Dengan memahami peran **C#** sebagai alat implementasi, kita lanjut ke alur belajar praktis yang membantu mahasiswa memahami konsep, pseudocode, implementasi, dan evaluasi secara bertahap.

---

## Slide 058 - Alur Belajar Praktis

### Narasi

Slide ini menekankan cara belajar yang diharapkan dalam mata kuliah Game Cerdas. Setiap topik tidak cukup hanya dipahami sebagai definisi, tetapi harus dilalui sebagai proses desain sistem perilaku dalam game.

```text
Konsep
    ↓
Diagram
    ↓
Pseudocode
    ↓
Implementasi Unity
    ↓
Eksperimen parameter
    ↓
Debug
    ↓
Evaluasi gameplay
```

Alur ini penting karena perilaku NPC, pathfinding, decision making, steering, atau sistem adaptif biasanya tidak langsung benar saat pertama kali ditulis. Mahasiswa perlu membangun pemahaman dari abstrak menuju implementasi yang bisa diuji.

Urutan yang disarankan adalah:

1. **Konsep**: pahami masalah yang ingin diselesaikan, misalnya kapan agent bergerak, berhenti, menyerang, atau memilih jalur.
2. **Diagram**: gambarkan alur keputusan, state, action, atau hubungan antar komponen agar logika terlihat jelas.
3. **Pseudocode**: tulis logika secara sederhana sebelum masuk ke syntax `C#`.
4. **Implementasi Unity**: terjemahkan pseudocode menjadi script, komponen, atau sistem yang berjalan di editor.
5. **Eksperimen parameter**: ubah nilai seperti kecepatan, jarak deteksi, cooldown, atau bobot keputusan untuk melihat dampaknya.
6. **Debug**: amati perilaku agent, log, visualisasi state, atau jalur agar masalah bisa dilacak.
7. **Evaluasi gameplay**: nilai apakah perilaku tersebut terasa masuk akal, menantang, dan sesuai tujuan desain.

Dengan alur ini, mahasiswa tidak hanya menyalin kode. Mahasiswa belajar mendesain perilaku yang bisa dijelaskan, diuji, dan dikembangkan.

### Inti yang Harus Ditekankan

- Pahami **konsep** sebelum menulis kode.
- Gunakan **diagram** dan **pseudocode** untuk merancang logika perilaku.
- Implementasi di `Unity` harus diikuti **eksperimen parameter**, **debug**, dan **evaluasi gameplay**.
- Tujuan akhir bukan sekadar kode berjalan, tetapi perilaku agent yang dapat dijelaskan dan ditingkatkan.

### Transisi ke Slide Berikutnya

Setelah alur belajar ini dipahami, kita akan melihat kompetensi akhir yang diharapkan dari mahasiswa pada akhir semester.

---

## Slide 059 - Kompetensi Akhir Mahasiswa

### Narasi

Slide ini menjadi penanda **kompetensi akhir** mahasiswa pada mata kuliah Game Cerdas. Pada akhir semester, mahasiswa tidak hanya diharapkan memahami konsep, tetapi juga mampu menghasilkan **Intelligent Game Project** yang berjalan di Unity.

```text
mendesain
mengimplementasikan
men-debug
mengevaluasi
dan mempresentasikan
Game AI dalam Unity.
```

Kelima kemampuan ini membentuk satu siklus kerja yang utuh. Mahasiswa harus mampu **mendesain** perilaku agen, menentukan state, keputusan, dan alur navigasi. Setelah itu, mahasiswa **mengimplementasikan** desain tersebut dalam bentuk komponen Unity, script, dan sistem interaksi yang dapat dijalankan.

Tahap berikutnya adalah **men-debug**. Dalam game, AI yang salah tidak selalu langsung terlihat sebagai error; kadang hanya muncul sebagai perilaku NPC yang aneh, pathfinding yang tidak masuk akal, atau keputusan yang tidak sesuai konteks. Karena itu, mahasiswa perlu mampu memeriksa log, state, parameter, dan hasil eksekusi untuk menemukan akar masalah.

Setelah sistem berjalan, mahasiswa harus **mengevaluasi** kualitas AI berdasarkan gameplay, bukan hanya keberhasilan kode. Evaluasi dapat mencakup kelancaran pergerakan, kecerdasan keputusan, responsivitas terhadap pemain, stabilitas sistem, dan kontribusi AI terhadap pengalaman bermain.

Output akhir yang diharapkan adalah **Intelligent Game Project** yang menggabungkan beberapa konsep, misalnya:

- `agent`,
- `movement`,
- `navigation`,
- `decision`,
- `PCG`,
- `adaptive system`,
- atau `ML`.

Penggabungan konsep ini tidak harus semuanya, tetapi mahasiswa perlu menunjukkan bahwa pilihan konsep tersebut saling mendukung dan dapat dijelaskan alasannya.

### Inti yang Harus Ditekankan

- Kompetensi akhir adalah siklus: **mendesain**, **mengimplementasikan**, **men-debug**, **mengevaluasi**, dan **mempresentasikan**.
- Output akhir bukan sekadar kode, tetapi **Intelligent Game Project** yang terintegrasi di Unity.
- Project dapat menggabungkan `agent`, `movement`, `navigation`, `decision`, `PCG`, `adaptive system`, atau `ML` sesuai kebutuhan desain.
- Mahasiswa harus mampu menjelaskan alasan desain, proses debug, dan hasil evaluasi AI.

### Transisi ke Slide Berikutnya

Dengan memahami kompetensi akhir ini, kita akan menutup pertemuan 0 dengan ringkasan cakupan materi semester dan target utama pembelajaran.

---

## Slide 060 - Penutup Pertemuan 0

### Narasi

Slide ini berfungsi sebagai **penutup pertemuan pertama** untuk membantu mahasiswa melihat gambaran besar mata kuliah **Game Cerdas**. Pada tahap ini, dosen tidak perlu menjelaskan detail teknis, tetapi perlu menegaskan bahwa seluruh materi akan diarahkan pada satu tujuan: mahasiswa mampu membangun **game Unity** yang memiliki perilaku cerdas, terintegrasi, dan dapat dievaluasi.

Materi semester akan bergerak dari fondasi menuju penerapan yang lebih kompleks. Topik yang akan dibahas meliputi:

- `Game AI Fundamentals`
- `Movement & Navigation`
- `Decision Making`
- `Procedural Content Generation`
- `Dynamic Difficulty Adjustment`
- `Player Modeling`
- `Machine Learning for Games`
- `Unity ML-Agents`
- `Final Intelligent Game Project`

Alur ini penting karena mahasiswa tidak hanya mempelajari satu teknik, tetapi belajar mengombinasikan beberapa kemampuan: **agent** yang bergerak, **navigation** yang masuk akal, **decision making** yang sesuai konteks, konten yang dapat dihasilkan secara prosedural, serta sistem yang mampu menyesuaikan diri dengan pemain.

Target utama mata kuliah ini adalah menghasilkan **game Unity** dengan perilaku cerdas yang **nyata, menarik, terintegrasi, dapat dijelaskan, dan dapat dievaluasi**. Artinya, mahasiswa tidak cukup membuat karakter yang bergerak atau memilih aksi secara acak. Mahasiswa juga harus mampu menjelaskan mengapa perilaku tersebut muncul, bagaimana perilaku itu mendukung **gameplay**, dan bagaimana hasilnya dapat diuji atau diperbaiki.

Catatan pembelajaran pada slide ini menegaskan bahwa mata kuliah ini bukan hanya tentang mempelajari algoritma, tetapi tentang membangun sistem cerdas yang benar-benar bekerja di dalam game. Oleh karena itu, **debugging**, **evaluasi**, dan **iterasi** menjadi bagian penting dari proses belajar. Mahasiswa diharapkan terbiasa mengamati perilaku, menemukan masalah, memperbaiki logika, dan menilai apakah sistem tersebut memberikan pengalaman bermain yang lebih baik.

### Inti yang Harus Ditekankan

- Mata kuliah **Game Cerdas** berfokus pada penerapan perilaku cerdas dalam **game Unity**, bukan hanya teori algoritma.
- Materi akan bergerak dari **fundamental** menuju **project akhir** yang menggabungkan movement, navigation, decision, PCG, adaptive system, atau machine learning.
- Hasil akhir harus **dapat dijelaskan dan dievaluasi**, sehingga mahasiswa memahami alasan di balik perilaku yang muncul.
- **Debugging** dan **evaluasi** adalah bagian inti dari pembelajaran, karena perilaku game sering kali baru terlihat benar setelah diuji dalam konteks gameplay.

### Transisi ke Slide Berikutnya

Karena ini merupakan **penutup pertemuan**, tidak ada materi baru yang dilanjutkan. Sesi dapat ditutup dengan pengingat bahwa mahasiswa perlu menyiapkan mindset untuk membangun **Intelligent Game Project** secara bertahap, dimulai dari konsep dasar menuju integrasi sistem yang lebih kompleks.
