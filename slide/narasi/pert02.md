# Narasi Game Cerdas - Pertemuan 02

## AI Architecture & Game Agent

Sumber: markdown/pert02.md

---

## Slide 001 - Cover

### Narasi

Selamat datang pada **Pertemuan 2** mata kuliah **Game Cerdas**. Pada pertemuan ini, kita akan membahas **arsitektur game cerdas dan perilaku game agent**, yaitu cara membangun agen dalam game sebagai sistem yang dapat mengamati lingkungan, menyimpan informasi, membuat keputusan, dan melakukan tindakan.

Fokus utama slide ini adalah memahami bahwa agen game tidak bekerja sebagai satu blok tunggal, melainkan sebagai **sistem modular**. Modul-modul tersebut saling terhubung dalam `update` loop yang berjalan setiap frame, sehingga perilaku NPC terasa hidup, responsif, dan dapat dikembangkan secara bertahap.

Pokok bahasan yang akan kita lalui meliputi:

- **Intelligent Agent**
- **State**
- **Sensor / Perception**
- **Actuator / Action**
- **Update Loop**
- **Modular Game Architecture**
- **Memory**
- **Decision**
- **Field of View**
- **Line of Sight**
- **NavMesh-based action**

Praktikum pada pertemuan ini adalah **NPC Guard: Sensor + Memory + Decision**. Melalui praktikum ini, mahasiswa diharapkan dapat melihat bagaimana informasi dari `Sensor` disimpan ke `Memory`, kemudian diproses menjadi `Decision`, dan akhirnya menghasilkan `Action` yang dapat dieksekusi oleh agen.

### Inti yang Harus Ditekankan

- Game agent adalah sistem modular yang menerima **perception**, menyimpan **memory**, melakukan **decision**, lalu menghasilkan **action**.
- `update` loop adalah tempat seluruh proses tersebut berjalan secara berulang setiap frame.
- Konsep seperti **Field of View**, **Line of Sight**, dan `NavMesh` akan membantu agen bergerak dan bertindak secara lebih realistis.
- Praktikum **NPC Guard** menjadi jembatan dari konsep ke implementasi sederhana.

### Transisi ke Slide Berikutnya

Sebelum kita membangun arsitektur modular yang lebih lengkap, kita akan meninjau kembali dasar perilaku agen dari pertemuan pertama, khususnya alur sederhana dari environment ke action.

---

## Slide 002 - Review Pertemuan 1

### Narasi

Sebelum masuk ke arsitektur yang lebih lengkap, kita perlu mengingat kembali dasar yang sudah dibahas pada Pertemuan 1. Inti dari Game AI adalah bagaimana sebuah **agent** berinteraksi dengan **environment** melalui alur sederhana: menerima informasi, memproses informasi, lalu menghasilkan tindakan.

```text
Environment
    ↓
Perception
    ↓
Decision
    ↓
Action
```

Alur ini penting karena hampir semua perilaku NPC dibangun dari pola yang sama. **Perception** adalah tahap di mana agent membaca kondisi dunia, misalnya posisi player. **Decision** adalah tahap di mana agent memilih state atau perilaku berdasarkan hasil perception. **Action** adalah tahap di mana agent mengeksekusi perilaku tersebut, misalnya tetap diam atau waspada.

Pada praktikum pertama, kita membangun **NPC Detector** dengan perilaku yang masih sangat sederhana. Jika player masih jauh, NPC berada pada state `IDLE`. Jika player masuk ke dalam `Detection Radius`, NPC berpindah ke state `ALERT`.

```text
Player jauh
    ↓
IDLE

Player masuk Detection Radius
    ↓
ALERT
```

Perception pada praktikum itu juga masih sangat dasar, karena hanya menggunakan `Vector3.Distance()` untuk mengukur jarak antara NPC dan player. Artinya, keputusan NPC belum mempertimbangkan arah pandangan, penghalang, atau ingatan terakhir tentang posisi player.

Meskipun sederhana, praktikum ini sudah menunjukkan pola penting: **perception** menghasilkan data, **decision** mengubah data menjadi state, dan **action** membuat state terlihat sebagai perilaku di game.

### Inti yang Harus Ditekankan

- Dasar Game AI adalah alur **Environment → Perception → Decision → Action**.
- **NPC Detector** hanya membedakan kondisi player jauh dan player dekat.
- State `IDLE` dan `ALERT` dipilih berdasarkan hasil perception sederhana.
- `Vector3.Distance()` digunakan untuk mengukur jarak, tetapi belum cukup untuk perilaku NPC yang lebih realistis.

### Transisi ke Slide Berikutnya

Dengan dasar ini, kita akan melihat bagaimana NPC Detector dikembangkan menjadi NPC Guard yang tidak hanya mengecek jarak, tetapi juga mempertimbangkan pandangan, penghalang, dan ingatan tentang posisi terakhir player.

---

## Slide 003 - Dari NPC Detector ke NPC Guard

### Narasi

Pada slide ini kita menaikkan level praktikum dari NPC yang hanya “terdeteksi” menjadi NPC yang bisa menjaga area. Pada praktikum pertama, pertanyaan utamanya sederhana: apakah player cukup dekat? Jawaban itu cukup untuk membuat NPC berubah dari `IDLE` ke `ALERT`, tetapi belum cukup untuk membuat NPC berperilaku seperti penjaga yang masuk akal.

Perbedaan utamanya ada pada jumlah pertanyaan yang dijawab oleh sistem. Detector hanya memeriksa jarak, misalnya dengan `Vector3.Distance()`. Guard perlu memeriksa beberapa kondisi sekaligus:

```text
Apakah Player cukup dekat?
Apakah Player berada di depan NPC?
Apakah pandangan terhalang?
Apa posisi terakhir Player?
Apa yang harus dilakukan setelah kehilangan target?
```

Secara intuitif, NPC guard tidak boleh langsung mengejar hanya karena player berada di radius tertentu. Jika player ada di belakang NPC, NPC sebaiknya tidak langsung bereaksi. Jika ada dinding atau objek yang menghalangi pandangan, NPC juga perlu tahu apakah ia benar-benar melihat player atau hanya mencurigai keberadaan player. Jika player menghilang, NPC tidak boleh diam selamanya; ia perlu mengingat posisi terakhir dan mencari di sekitar area itu.

Perilaku akhir yang ingin kita bangun dapat dilihat sebagai alur state sederhana:

```text
PATROL
   ↓
CHASE
   ↓
SEARCH
   ↓
PATROL
```

State `PATROL` adalah kondisi normal ketika NPC tidak melihat ancaman. Ketika player memenuhi syarat deteksi, misalnya dekat, berada di depan, dan tidak terhalang, NPC berpindah ke `CHASE`. Pada state `CHASE`, NPC bergerak menuju player atau posisi terakhir yang diketahui. Jika player hilang terlalu lama, NPC berpindah ke `SEARCH`, yaitu mencari di sekitar posisi terakhir. Setelah pencarian selesai dan tidak menemukan player, NPC kembali ke `PATROL`.

Yang perlu dipahami mahasiswa sebelum masuk ke detail implementasi adalah: guard bukan sekadar “jarak plus chase”. Guard adalah kombinasi dari **perception**, **memori target**, **keputusan**, dan **perilaku setelah target hilang**. Perception menentukan apakah player terlihat. Memori target menyimpan posisi terakhir. Keputusan menentukan state mana yang aktif. Perilaku menentukan apa yang dilakukan NPC pada setiap state.

Dengan memahami alur `PATROL`, `CHASE`, dan `SEARCH`, mahasiswa akan lebih mudah melihat bahwa satu NPC membutuhkan beberapa tanggung jawab yang berbeda. Ini menjadi dasar untuk bertanya: bagaimana cara menyusun logika tersebut agar tidak menjadi satu blok yang sulit dirawat?

### Inti yang Harus Ditekankan

- Praktikum 1 hanya menjawab pertanyaan jarak: apakah player cukup dekat?
- Praktikum 2 memperluas pertanyaan menjadi jarak, arah depan, halangan pandangan, posisi terakhir, dan perilaku setelah kehilangan target.
- Alur perilaku guard yang utama adalah `PATROL` → `CHASE` → `SEARCH` → `PATROL`.
- NPC guard membutuhkan **perception**, **memori target**, **keputusan state**, dan **aksi perilaku** yang terpisah secara konseptual.

### Transisi ke Slide Berikutnya

Jika semua logika guard ini ditulis dalam satu script besar, sistem akan cepat sulit dibaca dan dikembangkan. Karena itu, slide berikutnya akan membahas mengapa kita perlu arsitektur yang memisahkan tanggung jawab.

---

## Slide 004 - Mengapa Perlu Arsitektur AI?

### Narasi

Pada slide sebelumnya, NPC guard sudah tidak lagi hanya mengecek jarak. Ia mulai mempertimbangkan arah pandangan, halangan, posisi terakhir target, dan perilaku setelah kehilangan target. Jika semua logika itu ditulis dalam satu script besar, sistem akan cepat menjadi sulit dikendalikan.

```text
Detect Player
Move NPC
Remember Target
Attack
Patrol
Search
Play Animation
Sound
Debug
```

Daftar di atas menunjukkan banyak tanggung jawab yang bercampur dalam satu tempat. Ada logika deteksi, pergerakan, ingatan, serangan, perilaku, animasi, suara, dan pemecahan masalah. Dalam praktik, hal ini membuat kode sulit:

- dibaca,
- diuji,
- diperbaiki,
- dikembangkan,
- digunakan kembali.

Intuisinya sederhana: satu script besar seperti satu orang yang mengerjakan semua tugas sekaligus. Ketika satu bagian berubah, bagian lain ikut terpengaruh. Misalnya, memperbaiki logika `CHASE` bisa tanpa sengaja mengganggu `PATROL`, `SEARCH`, atau animasi.

Solusinya adalah **Modular Game AI Architecture**. Artinya, logika dipisah menjadi beberapa bagian yang memiliki tanggung jawab jelas.

```text
Modular Game AI Architecture
```

Setiap modul hanya fokus pada satu hal. Modul deteksi menentukan apakah target terlihat. Modul gerak mengubah posisi NPC. Modul ingatan menyimpan informasi target terakhir. Modul perilaku memilih `PATROL`, `CHASE`, atau `SEARCH`. Modul animasi dan suara hanya menjalankan efek yang sesuai. Dengan cara ini, perubahan pada satu bagian tidak langsung merusak bagian lain.

Sebelum lanjut, mahasiswa perlu memahami bahwa arsitektur modular bukan soal menambah fitur baru. Ia adalah cara mengatur logika agar perilaku NPC lebih mudah dipahami, diuji, dan dikembangkan.

### Inti yang Harus Ditekankan

- Satu script besar membuat logika NPC sulit dibaca, diuji, diperbaiki, dikembangkan, dan digunakan kembali.
- **Modular Game AI Architecture** memisahkan tanggung jawab: deteksi, gerak, ingatan, perilaku, animasi, suara, dan debug.
- Modularitas membantu mahasiswa memperbaiki satu perilaku tanpa mengganggu perilaku lain.
- Arsitektur adalah cara mengatur logika, bukan sekadar menambah kompleksitas.

### Transisi ke Slide Berikutnya

Setelah memahami mengapa logika perlu dipisahkan menjadi modul, kita lanjut ke capaian pembelajaran pertemuan ini.

---

## Slide 005 - Capaian Pembelajaran Pertemuan

### Narasi

Slide ini berfungsi sebagai **peta kompetensi** pertemuan. Mahasiswa tidak diharapkan menghafal istilah, tetapi mampu menjelaskan bagaimana sebuah **intelligent agent** dalam game mengamati lingkungan, menyimpan informasi, lalu memilih aksi.

Capaian pertemuan ini dapat dikelompokkan menjadi tiga bagian utama:

1. **Konsep dasar agent**: memahami hubungan antara agent dan environment, serta peran `state` sebagai kondisi internal, `sensor` / `perception`, dan `actuator` / `action`.
2. **Mekanisme perilaku**: memahami `update loop`, `memory`, dan `decision` sebagai proses pemilihan behavior.
3. **Desain implementasi**: mampu merancang **arsitektur game agent** yang modular dan menghubungkannya dengan `NPC_Guard` di Unity.

Sebelum masuk ke definisi formal, mahasiswa perlu menyadari bahwa konsep-konsep ini menjadi dasar untuk membangun NPC yang tidak hanya bergerak, tetapi juga bisa merespons situasi. Dengan capaian ini, mahasiswa memiliki arah yang jelas sebelum membahas definisi **intelligent agent** secara lebih rinci.

### Inti yang Harus Ditekankan

- Capaian utama adalah **memahami hubungan agent dan environment**, bukan sekadar mengenal istilah.
- `state`, `sensor`, `actuator`, `memory`, dan `decision` harus dipahami sebagai bagian dari **sistem perilaku** yang saling terhubung.
- **Arsitektur game agent** yang modular penting agar logika NPC mudah dibaca, diuji, dan dikembangkan.
- `NPC_Guard` di Unity menjadi konteks praktis untuk menghubungkan konsep agent dengan implementasi game.

### Transisi ke Slide Berikutnya

Dengan peta capaian ini, kita mulai dari konsep paling dasar: apa yang dimaksud dengan **intelligent agent**, dan bagaimana agent tersebut berinteraksi dengan environment dalam game.

---

## Slide 006 - Apa Itu Intelligent Agent?

### Narasi

**Intelligent Agent** adalah entitas dalam game yang tidak hanya menjadi objek statis, tetapi mampu **mengamati environment**, **mengolah informasi**, **mengambil keputusan**, lalu **melakukan aksi**.

```text
mengamati environment
        ↓
menyimpan / mengolah informasi
        ↓
mengambil keputusan
        ↓
melakukan aksi
```

Alur ini menjadi cara berpikir dasar untuk memahami perilaku karakter dalam game. Agent tidak bekerja secara acak; ia merespons keadaan yang ada di sekitarnya.

Secara praktis, prosesnya dapat dipahami sebagai berikut:

1. **Mengamati environment**  
   Agent membaca kondisi dunia game, misalnya posisi pemain, keadaan objek, atau situasi sekitar.

2. **Menyimpan / mengolah informasi**  
   Informasi yang diamati kemudian disimpan atau diolah agar agent dapat memahami konteks saat ini.

3. **Mengambil keputusan**  
   Berdasarkan informasi yang sudah diolah, agent memilih perilaku yang paling sesuai.

4. **Melakukan aksi**  
   Keputusan tersebut diwujudkan menjadi tindakan nyata, misalnya bergerak, berhenti, mengejar, atau melakukan respons tertentu.

Dalam game, agent dapat berupa berbagai entitas, seperti:

- `enemy`
- `guard`
- `companion`
- `robot`
- `animal`
- `vehicle`
- `NPC civilian`

Pada praktikum, kita menyederhanakan konsep ini menjadi satu contoh konkret:

```text
Agent = NPC_Guard
```

Artinya, `NPC_Guard` bukan hanya karakter yang berdiri di scene, tetapi entitas yang memiliki proses mengamati, mengolah, memutuskan, dan bertindak. Pemahaman ini penting sebelum kita membahas struktur lengkap dari agent.

### Inti yang Harus Ditekankan

- **Intelligent Agent** adalah entitas yang mengamati environment, mengolah informasi, mengambil keputusan, dan melakukan aksi.
- Dalam game, agent dapat berupa `enemy`, `guard`, `companion`, `robot`, `animal`, `vehicle`, atau `NPC civilian`.
- Pada praktikum, `NPC_Guard` digunakan sebagai contoh agent untuk memahami konsep ini secara konkret.

### Transisi ke Slide Berikutnya

Setelah memahami apa itu intelligent agent, langkah berikutnya adalah melihat struktur dasar yang membentuk proses tersebut secara lebih sistematis.

---

## Slide 007 - Struktur Dasar Intelligent Agent

### Narasi

Slide ini memperkenalkan **struktur dasar** dari sebuah **intelligent agent**. Struktur ini menjadi kerangka utama untuk memahami bagaimana agent dalam game membaca keadaan, menyimpan informasi, membuat keputusan, dan melakukan aksi.

```text
             ENVIRONMENT
                  │
                  ▼
              SENSOR
                  │
                  ▼
             PERCEPTION
                  │
                  ▼
              MEMORY
                  │
                  ▼
             DECISION
                  │
                  ▼
              ACTION
                  │
                  ▼
             ACTUATOR
                  │
                  ▼
             ENVIRONMENT
```

Secara intuitif, model ini dapat dipahami sebagai **siklus kontrol**. Agent tidak hanya bereaksi sekali, tetapi terus-menerus berinteraksi dengan lingkungannya. Setiap aksi yang dilakukan dapat mengubah keadaan lingkungan, dan perubahan itu kembali dibaca oleh agent pada siklus berikutnya.

Alur utama pada diagram dapat dijelaskan sebagai berikut:

1. `ENVIRONMENT` adalah sumber keadaan yang dibaca agent.
2. `SENSOR` menangkap sinyal atau informasi dari lingkungan.
3. `PERCEPTION` mengolah sinyal tersebut menjadi informasi yang bermakna.
4. `MEMORY` menyimpan informasi penting untuk digunakan pada keputusan berikutnya.
5. `DECISION` memilih tindakan yang paling sesuai berdasarkan informasi yang tersedia.
6. `ACTION` adalah tindakan yang akan dilakukan agent.
7. `ACTUATOR` menerjemahkan tindakan tersebut menjadi perubahan nyata di lingkungan.
8. `ENVIRONMENT` kembali berubah, lalu siklus dimulai ulang.

Dalam konteks game, struktur ini membantu kita memahami perilaku agent secara sistematis. Agent tidak “tahu” apa yang terjadi secara langsung; ia membaca lingkungan melalui sensor, menginterpretasikannya, lalu memilih tindakan. Misalnya, agent dapat memutuskan untuk bergerak, berhenti, atau kembali ke posisi semula berdasarkan perubahan keadaan di sekitarnya.

Peran `PERCEPTION` penting karena sensor saja belum cukup. Sensor menghasilkan data mentah, sedangkan `PERCEPTION` mengubah data tersebut menjadi pemahaman yang dapat digunakan untuk mengambil keputusan. Tanpa tahap ini, agent hanya menerima sinyal tanpa makna.

Peran `MEMORY` juga menentukan kualitas perilaku agent. Agent yang hanya mengandalkan input saat ini cenderung bersifat reaktif. Dengan `MEMORY`, agent dapat mengingat keadaan sebelumnya, posisi penting, atau hasil keputusan terdahulu, sehingga perilakunya menjadi lebih konsisten dan terarah.

Sebelum melanjutkan, mahasiswa perlu memahami bahwa struktur ini adalah **model umum**, bukan satu-satunya implementasi. Dalam praktik, komponen-komponen ini dapat diwujudkan dengan berbagai cara, tetapi alur dasarnya tetap sama: membaca lingkungan, memproses informasi, memutuskan, lalu bertindak.

### Inti yang Harus Ditekankan

- **Intelligent agent** bekerja dalam bentuk **siklus**, bukan proses sekali jalan.
- `SENSOR`, `PERCEPTION`, dan `MEMORY` menentukan kualitas informasi yang digunakan agent.
- `DECISION` adalah inti dari perilaku agent karena menentukan tindakan yang akan diambil.
- `ACTUATOR` menghubungkan keputusan agent dengan perubahan nyata di `ENVIRONMENT`.

### Transisi ke Slide Berikutnya

Setelah memahami struktur dasar agent, langkah berikutnya adalah memisahkan dua sisi utama dalam interaksi tersebut: apa yang menjadi **agent** dan apa yang menjadi **environment**.

---

## Slide 008 - Agent vs Environment

### Narasi

Pada slide ini kita memisahkan dua hal yang paling penting dalam perilaku NPC: **agent** dan **environment**.

**Agent** adalah objek yang mengambil keputusan. Dalam konteks game, agent biasanya adalah karakter yang dikendalikan oleh sistem, misalnya `NPC_Guard`. Agent inilah yang menentukan apakah NPC akan berdiri, bergerak, mengejar, atau kembali ke titik patroli.

**Environment** adalah semua hal di luar agent yang dapat memengaruhi keputusannya. Environment tidak selalu berupa karakter lain; ia juga mencakup elemen dunia yang relatif tetap.

Contoh environment pada slide ini:

- `Player`
- `Wall`
- `Ground`
- `Patrol Point`
- `NavMesh`
- `obstacle`

Perbedaan utamanya adalah: **agent** adalah pihak yang bertindak, sedangkan **environment** adalah kondisi yang dibaca dan memengaruhi tindakan tersebut.

Dalam praktik, agent tidak serta-merta mengetahui seluruh isi dunia. Agent membaca environment melalui **sensor**. Sensor berfungsi sebagai batas informasi yang diterima agent. Dengan cara ini, perilaku NPC menjadi lebih realistis karena NPC hanya bereaksi terhadap apa yang dapat ia amati, bukan terhadap seluruh data dunia secara langsung.

Pemisahan ini penting karena memudahkan kita merancang logika agent: kita bisa mengubah environment, misalnya memindahkan `Player` atau menambah `obstacle`, lalu melihat bagaimana keputusan `NPC_Guard` berubah.

### Inti yang Harus Ditekankan

- **Agent** adalah pengambil keputusan, contohnya `NPC_Guard`.
- **Environment** adalah semua hal di luar agent yang dapat memengaruhinya, seperti `Player`, `Wall`, `Ground`, `Patrol Point`, `NavMesh`, dan `obstacle`.
- Agent tidak membaca dunia secara langsung tanpa batas; ia menggunakan **sensor** untuk memperoleh informasi dari environment.
- Pemisahan agent dan environment membantu kita memahami bahwa perilaku NPC bergantung pada informasi yang tersedia, bukan pada pengetahuan sempurna tentang dunia.

### Transisi ke Slide Berikutnya

Setelah memahami batas antara agent dan environment, langkah berikutnya adalah melihat environment pada praktikum secara lebih konkret, yaitu elemen apa saja yang benar-benar digunakan dan bagaimana informasi tertentu saja yang diterima oleh NPC melalui sensor.

---

## Slide 009 - Environment pada Praktikum

### Narasi

Pada slide ini kita membatasi pengertian **environment** ke dalam konteks praktikum. Artinya, lingkungan yang akan dibaca oleh NPC tidak dibahas sebagai dunia game secara utuh, tetapi sebagai elemen-elemen yang benar-benar tersedia dalam scene praktikum.

```text
Ground
Wall
Player
Patrol Points
NavMesh
```

Elemen-elemen ini penting karena menjadi dasar perilaku NPC. `Ground` menentukan area yang dapat dilalui, `Wall` menjadi batas atau obstacle, `Player` adalah objek yang dapat memengaruhi keputusan NPC, `Patrol Points` menjadi target pergerakan saat NPC tidak sedang mengejar, dan `NavMesh` menjadi representasi area yang dapat dinavigasi untuk pathfinding.

Intuisi praktisnya adalah NPC tidak perlu mengetahui seluruh dunia secara sempurna. Dalam game, agent biasanya bekerja dengan informasi terbatas. Ia tidak membaca seluruh scene secara langsung, melainkan hanya menerima data tertentu melalui **sensor**.

```text
CanSeePlayer
LastKnownPosition
DistanceToPlayer
```

`CanSeePlayer` memberi tahu apakah NPC sedang melihat player. `LastKnownPosition` menyimpan posisi terakhir player yang diketahui NPC, sehingga ketika player hilang dari pandangan, NPC masih bisa menuju titik terakhir yang terlihat. `DistanceToPlayer` membantu NPC menilai seberapa dekat player, sehingga perilaku seperti waspada, mengejar, atau kembali patroli dapat disesuaikan.

Dengan cara ini, environment tidak hanya berupa objek di scene, tetapi juga menjadi sumber informasi yang memengaruhi keputusan agent. Mahasiswa perlu memahami bahwa perilaku NPC yang “cerdas” dalam praktikum dibangun dari keterbatasan informasi yang masuk, bukan dari pengetahuan sempurna tentang dunia.

### Inti yang Harus Ditekankan

- **Environment** pada praktikum terdiri dari `Ground`, `Wall`, `Player`, `Patrol Points`, dan `NavMesh`.
- NPC tidak mengetahui seluruh dunia secara sempurna; ia hanya menerima informasi tertentu melalui **sensor**.
- Data sensor seperti `CanSeePlayer`, `LastKnownPosition`, dan `DistanceToPlayer` menjadi dasar keputusan perilaku NPC.

### Transisi ke Slide Berikutnya

Setelah environment dan sensor dipahami, langkah berikutnya adalah menentukan kondisi internal NPC. Pada slide berikutnya, kita akan membahas **State**, yaitu mode perilaku yang menjelaskan apa yang sedang dilakukan NPC pada saat tertentu.

---

## Slide 010 - State

### Narasi

**State** adalah kondisi internal atau mode perilaku agent. Dalam konteks NPC, state memberi label sederhana tentang perilaku yang sedang aktif pada saat itu.

Intuisi praktisnya, state bukan informasi dunia yang lengkap. State lebih seperti status internal agent: “NPC sedang berada dalam mode apa?” Status ini biasanya dihasilkan dari hasil evaluasi sensor, aturan, atau keputusan perilaku.

Contoh state pada guard:

```text
PATROL
CHASE
SEARCH
```

Setiap state menjawab pertanyaan:

```text
Apa yang sedang dilakukan NPC sekarang?
```

State sering menjadi dasar arsitektur perilaku, misalnya pada **Finite State Machine** atau cabang pada **behavior tree**. Dengan state, sistem perilaku tidak perlu selalu menghitung seluruh kemungkinan dari awal; ia cukup tahu mode aktif, lalu memilih aksi yang sesuai.

State penting karena:

- **decision**: state membantu menentukan aksi berikutnya,
- **debugging**: developer dapat melihat mode NPC saat terjadi masalah,
- **animation**: state dapat dipetakan ke animasi yang sesuai,
- **movement settings**: state memengaruhi kecepatan, rotasi, atau target gerak,
- **behavior transition**: state menjadi dasar aturan perpindahan perilaku.

Sebelum lanjut, mahasiswa perlu memahami bahwa state adalah kondisi internal, bukan sensor. Sensor memberi informasi seperti `CanSeePlayer`, sedangkan state adalah kesimpulan perilaku agent berdasarkan informasi tersebut.

### Inti yang Harus Ditekankan

- **State** adalah kondisi internal atau mode perilaku agent.
- State menjawab: `Apa yang sedang dilakukan NPC sekarang?`
- State mendukung decision, debugging, animation, movement settings, dan behavior transition.

### Transisi ke Slide Berikutnya

Setelah memahami state sebagai label perilaku, slide berikutnya akan menjelaskan bagaimana state internal menentukan kondisi konkret NPC, misalnya `Current State = PATROL` dan `Current State = CHASE`.

---

## Slide 011 - State sebagai Internal Condition

### Narasi

Pada slide ini, kita memperjelas bahwa **state** bukan hanya label perilaku, tetapi **internal condition** yang menentukan bagaimana agent berperilaku pada saat itu.

```text
Current State = PATROL
```

Artinya, NPC sedang berada dalam kondisi patroli. Secara praktis, kondisi ini biasanya menghasilkan perilaku berikut:

- NPC bergerak antar `waypoint`.
- NPC memakai `patrol speed`.
- NPC belum mengejar `Player`.

Dengan kata lain, `PATROL` bukan sekadar nama, melainkan kumpulan aturan perilaku yang sedang aktif.

```text
Current State = CHASE
```

Artinya, NPC sedang berada dalam kondisi mengejar. Perilaku yang muncul menjadi berbeda:

- NPC mengejar `Player`.
- NPC memakai `chase speed`.
- `destination` NPC mengikuti posisi `Player`.

Perbedaan ini penting karena satu agent dapat memiliki banyak state, tetapi hanya satu state yang aktif sebagai kondisi internal saat ini.

Dalam implementasi, nilai `Current State` sering menjadi sumber keputusan kecil untuk komponen lain. Misalnya, sistem gerak bisa memilih kecepatan, sistem animasi bisa memilih clip, dan sistem target bisa memilih `waypoint` atau `Player`.

Jadi, ketika mahasiswa melihat NPC bergerak lambat dan berpindah titik, hal pertama yang perlu dicek adalah apakah `Current State` masih `PATROL`. Jika NPC seharusnya mengejar tetapi tidak mengejar, cek apakah `Current State` sudah berubah menjadi `CHASE`.

### Inti yang Harus Ditekankan

- **State** adalah kondisi internal agent yang sedang aktif.
- `PATROL` dan `CHASE` menghasilkan perilaku gerak, kecepatan, dan target yang berbeda.
- `Current State` membantu memahami, menguji, dan debugging perilaku NPC.
- State menentukan perilaku saat ini, bukan langsung menentukan kapan perilaku akan berubah.

### Transisi ke Slide Berikutnya

Setelah memahami bahwa state menentukan perilaku NPC pada saat ini, langkah berikutnya adalah melihat bagaimana state dapat berpindah dari satu kondisi ke kondisi lain.

---

## Slide 012 - State Transition

### Narasi

Slide ini membahas **State Transition**, yaitu cara sebuah state dalam agen game berubah menjadi state lain. Pada slide sebelumnya kita sudah melihat bahwa `Current State = PATROL` atau `CHASE` menentukan perilaku NPC. Sekarang kita fokus pada apa yang menyebabkan state tersebut bergeser.

Intuisi praktisnya, state tidak boleh berpindah hanya karena waktu berjalan atau karena kode memilih secara acak. Perpindahan harus memiliki alasan yang dapat dijelaskan: agen melihat sesuatu, kehilangan target, atau menunggu terlalu lama. Dalam arsitektur perilaku game, alasan ini biasanya berasal dari **perception** dan **memory**.

Diagram pada slide menunjukkan alur sederhana:

```text
PATROL
   │ Player terlihat
   ▼
CHASE
   │ Player menghilang
   ▼
SEARCH
   │ timeout
   ▼
PATROL
```

Urutan transisinya dapat dibaca sebagai:

1. NPC berada di `PATROL`.
2. Jika `Player terlihat`, NPC masuk ke `CHASE`.
3. Jika `Player menghilang`, NPC masuk ke `SEARCH`.
4. Jika `timeout` terpenuhi, NPC kembali ke `PATROL`.

Perhatikan bahwa setiap panah bukan sekadar perubahan label, melainkan **kondisi transisi**. Kondisi transisi adalah aturan yang diperiksa oleh agen, misalnya hasil sensor, jarak, line of sight, atau data yang disimpan sebelumnya. Dalam implementasi, kondisi ini bisa berupa nilai variabel, hasil fungsi deteksi, atau flag yang di-update setiap frame.

Hubungan dengan **memory** penting karena beberapa transisi tidak cukup hanya melihat kondisi saat ini. Contoh: NPC perlu tahu bahwa pemain baru saja menghilang, bukan hanya tidak terlihat sekarang. Jika pemain tidak terlihat sejak lama, NPC mungkin sudah seharusnya berada di `SEARCH` atau kembali `PATROL`. Jadi, state transition yang baik menggunakan data masa lalu untuk menghindari perilaku aneh, seperti NPC terus mengejar target yang sudah lama tidak terlihat.

Sebelum lanjut, mahasiswa perlu memahami bahwa **state adalah kondisi internal**, sedangkan **transition adalah aturan perpindahan**. State menentukan apa yang sedang dilakukan agen, sementara transition menentukan kapan agen boleh berhenti melakukan hal itu dan beralih ke perilaku lain. Pemahaman ini menjadi dasar untuk membahas bagaimana keputusan memilih state berikutnya.

### Inti yang Harus Ditekankan

- **State transition** adalah aturan perpindahan state yang dipicu oleh kondisi, bukan terjadi secara acak.
- **Perception** dan **memory** menjadi sumber data untuk menentukan apakah transisi valid.
- Alur `PATROL` → `CHASE` → `SEARCH` → `PATROL` menunjukkan perilaku NPC yang responsif, terkontrol, dan dapat dijelaskan.

### Transisi ke Slide Berikutnya

Selanjutnya kita akan melihat bagaimana keputusan memilih state berikutnya, karena transisi pada dasarnya adalah hasil dari aturan decision yang mengevaluasi kondisi agen.

---

## Slide 013 - State dan Decision

### Narasi

Pada slide sebelumnya, kita melihat bahwa state dapat berpindah karena kondisi tertentu. Sekarang kita fokus pada **decision**, yaitu proses memilih **state berikutnya** yang akan dijalankan oleh agent.

Decision bukan sekadar perpindahan acak. Decision adalah aturan yang memetakan kondisi lingkungan dan memori agent ke satu pilihan state. Dalam arsitektur game agent, keputusan ini biasanya dievaluasi secara periodik, misalnya setiap frame atau setiap tick, sehingga perilaku NPC dapat menyesuaikan dengan situasi terbaru.

```text
State berikutnya apa?
```

Pertanyaan ini menjadi inti dari decision. Agent harus menentukan state mana yang paling sesuai berdasarkan informasi yang dimilikinya.

Contoh rule yang sederhana adalah sebagai berikut:

```text
IF Player terlihat
    CHASE

ELSE IF Player baru hilang
    SEARCH

ELSE
    PATROL
```

Aturan ini menunjukkan pola decision yang umum pada NPC. Jika `Player terlihat`, agent memilih `CHASE` karena tujuan terdekat adalah mengejar pemain. Jika `Player baru hilang`, agent memilih `SEARCH` untuk mencari kemungkinan posisi pemain. Jika kedua kondisi tidak terpenuhi, agent kembali ke `PATROL` sebagai perilaku default.

Perhatikan bahwa `Player baru hilang` bukan hanya kondisi visual sesaat. Kondisi ini biasanya membutuhkan **memory**, misalnya waktu terakhir pemain terlihat, posisi terakhir, atau status pencarian. Dengan memory, agent tidak langsung kembali ke `PATROL` begitu pemain keluar dari pandangan, tetapi tetap melakukan pencarian selama batas waktu tertentu.

**State** adalah hasil dari decision. Setelah state terpilih, agent tidak langsung melakukan semua perilaku sekaligus. Sebaliknya, **action** akan menjalankan behavior yang sesuai dengan state tersebut.

- `CHASE`: action biasanya berupa pergerakan atau steering menuju pemain.
- `SEARCH`: action biasanya berupa pergerakan ke beberapa titik pencarian.
- `PATROL`: action biasanya berupa menyusuri waypoint atau area patroli.

Dengan cara ini, arsitektur agent menjadi lebih rapi: decision memilih state, state menentukan konteks perilaku, dan action mengeksekusi perilaku tersebut. Mahasiswa perlu memahami bahwa keputusan yang baik bergantung pada kondisi yang jelas, urutan evaluasi yang benar, dan data yang cukup. Jika kondisi tumpang tindih, aturan harus disusun dengan prioritas yang tepat agar agent tidak beralih state secara tidak konsisten.

### Inti yang Harus Ditekankan

- **Decision** menentukan **state berikutnya** yang akan dijalankan oleh agent.
- Decision biasanya berupa aturan berbasis kondisi, bukan perpindahan acak.
- `CHASE`, `SEARCH`, dan `PATROL` dipilih berdasarkan kondisi seperti `Player terlihat` dan `Player baru hilang`.
- **State** adalah hasil keputusan, sedangkan **action** menjalankan behavior sesuai state tersebut.
- Kondisi seperti `Player baru hilang` menunjukkan pentingnya **memory** agar perilaku agent tetap masuk akal.

### Transisi ke Slide Berikutnya

Setelah memahami bagaimana agent memilih state berdasarkan decision, langkah berikutnya adalah melihat dari mana informasi untuk decision tersebut berasal. Pada slide berikutnya, kita akan membahas **sensor** sebagai bagian agent yang memperoleh informasi dari environment.

---

## Slide 014 - Sensor

### Narasi

Pada slide ini kita membahas **Sensor**, yaitu bagian dari agent yang bertugas memperoleh informasi dari environment. Dalam game, agent tidak bisa mengambil keputusan hanya dari data internal; ia harus “membaca” dunia di sekitarnya. Sensor menjadi lapisan awal yang mengubah kondisi lingkungan menjadi data yang dapat diproses oleh logika perilaku.

Beberapa contoh sensor yang umum digunakan adalah:

- **vision**, untuk mengetahui apakah objek terlihat.
- **hearing**, untuk mendeteksi suara atau kejadian di sekitar.
- **touch**, untuk mengetahui apakah ada kontak fisik.
- **damage**, untuk membaca kondisi agent ketika terkena serangan.
- **distance**, untuk mengukur jarak ke objek tertentu.
- **proximity**, untuk mengetahui apakah objek berada di dekat agent.
- `raycast`, untuk memeriksa apakah ada penghalang di antara agent dan objek.
- `trigger`, untuk mendeteksi ketika objek masuk atau keluar area tertentu.

Dalam praktikum, komponen yang bertanggung jawab pada perception biasanya diberi nama:

```text
NPCSensor.cs
```

Nama ini penting karena menunjukkan bahwa sensor bukan sekadar data statis, melainkan komponen aktif yang membaca lingkungan dan menyediakan nilai untuk logika perilaku.

Hubungannya dengan slide sebelumnya sangat jelas. Decision membutuhkan fakta, bukan asumsi. Jika rule menyatakan `IF Player terlihat THEN CHASE`, maka sensorlah yang menentukan apakah nilai `playerVisible` bernilai `true` atau `false`. Dengan kata lain, sensor menyediakan input, decision mengubah input menjadi state, dan action menjalankan state tersebut.

Secara intuitif, sensor dapat dibayangkan sebagai mata, telinga, dan “kulit” NPC. Tanpa sensor, NPC hanya bergerak sesuai skrip tanpa memahami situasi. Dengan sensor, NPC dapat berpindah dari `PATROL` ke `CHASE` ketika pemain mendekat, atau ke `SEARCH` ketika pemain menghilang. Kualitas sensor juga memengaruhi perilaku: sensor yang terlalu sensitif membuat NPC mudah terpancing, sedangkan sensor yang terlambat membuat NPC tampak tidak responsif.

Sebelum lanjut, mahasiswa perlu memahami bahwa sensor bukan pengganti decision. Sensor hanya menjawab pertanyaan seperti “apakah ada objek di dekat NPC?” atau “apakah pemain berada dalam area tertentu?”. Keputusan apa yang harus dilakukan tetap menjadi tugas modul decision. Pada pembahasan berikutnya, kita akan memperdalam salah satu jenis sensor, yaitu sensor visual, yang biasanya melibatkan beberapa tahap pemeriksaan.

### Inti yang Harus Ditekankan

- **Sensor** adalah lapisan perception yang membaca environment.
- Sensor mengubah kondisi dunia menjadi data seperti jarak, kedekatan, kerusakan, atau area `trigger`.
- `NPCSensor.cs` menyediakan input untuk decision, bukan mengambil keputusan.
- Decision membutuhkan fakta sensor untuk memilih state seperti `CHASE`, `SEARCH`, atau `PATROL`.
- Sensor visual akan dibahas lebih detail pada slide berikutnya.

### Transisi ke Slide Berikutnya

Setelah memahami peran sensor secara umum, kita masuk ke sensor visual. Di sana kita akan melihat bagaimana pertanyaan “apakah player benar-benar terlihat?” dijawab melalui beberapa tahap pemeriksaan.

---

## Slide 015 - Sensor Visual

### Narasi

**Sensor visual** adalah cara agent menilai apakah objek tertentu, misalnya Player, benar-benar terlihat dari posisi dan arah NPC.

Intuisinya sederhana: NPC tidak bisa melihat apa yang terlalu jauh, apa yang berada di belakangnya, atau apa yang tertutup dinding. Karena itu, sensor visual tidak cukup hanya menghitung jarak.

Slide ini merangkum tiga tahap utama:

```text
1. Distance Check
2. Field of View Check
3. Line of Sight Check
```

Ketiga tahap ini menjawab satu pertanyaan penting:

```text
Apakah Player benar-benar terlihat?
```

Urutan tahapannya penting karena setiap tahap menyaring kemungkinan dengan biaya komputasi yang berbeda.

1. **Distance Check**  
   Tahap ini memeriksa apakah Player berada dalam jarak maksimum yang bisa dilihat NPC. Jika jaraknya terlalu jauh, sensor visual dapat langsung menyatakan Player tidak terlihat tanpa memeriksa tahap berikutnya.

2. **Field of View Check**  
   Tahap ini memeriksa apakah Player berada di dalam area pandangan NPC. Area pandangan biasanya berupa kerucut di depan NPC. Jika Player berada di belakang NPC atau di luar sudut pandang, Player dianggap tidak terlihat.

3. **Line of Sight Check**  
   Tahap ini memeriksa apakah ada penghalang di antara NPC dan Player. Penghalang bisa berupa dinding, pintu, objek, atau elemen lingkungan lainnya. Jika ada penghalang, Player tidak terlihat meskipun jaraknya dekat dan berada di depan NPC.

Alur sederhananya dapat dibayangkan seperti ini:

```text
Player -> Distance Check -> Field of View Check -> Line of Sight Check -> terlihat?
```

Jika salah satu tahap gagal, hasil akhirnya adalah Player tidak terlihat. Jika ketiganya berhasil, Player dianggap benar-benar terlihat oleh NPC.

Dalam perilaku game, hasil sensor visual ini menjadi dasar keputusan NPC. NPC yang tidak melihat Player dapat tetap melakukan aktivitas biasa, sedangkan NPC yang melihat Player dapat mengubah perilaku menjadi waspada, mengejar, atau merespons.

Sebelum lanjut, mahasiswa perlu memahami bahwa sensor visual adalah proses bertahap, bukan satu pemeriksaan tunggal. Jarak, arah pandangan, dan penghalang adalah tiga syarat yang saling melengkapi.

### Inti yang Harus Ditekankan

- **Distance Check** memastikan Player berada dalam jarak yang cukup dekat.
- **Field of View Check** memastikan Player berada di dalam area pandangan NPC.
- **Line of Sight Check** memastikan tidak ada penghalang antara NPC dan Player.

### Transisi ke Slide Berikutnya

Setelah tiga tahap sensor visual ini, data mentah tentang jarak, sudut pandang, dan penghalang perlu diubah menjadi informasi yang lebih sederhana untuk agent. Pada slide berikutnya, kita akan membahas **Perception**, yaitu hasil sensing yang dapat langsung dibaca oleh NPC.

---

## Slide 016 - Perception

### Narasi

**Perception** adalah lapisan informasi yang dihasilkan dari proses sensing. Dalam konteks perilaku agent, agent tidak selalu perlu memahami seluruh data mentah dari lingkungan; yang penting adalah kesimpulan yang bisa langsung dipakai untuk mengambil keputusan.

Contoh paling sederhana adalah variabel `CanSeePlayer`. Nilai ini bisa berupa:

```text
CanSeePlayer = true
```

atau:

```text
CanSeePlayer = false
```

Artinya, agent sudah tahu apakah player terlihat atau tidak, tanpa harus menghitung ulang jarak, sudut pandang, atau raycast setiap kali.

Perception berfungsi menyederhanakan data sensor menjadi informasi bermakna. Sensor mungkin menghasilkan banyak nilai, misalnya jarak, arah, dan hasil raycast. Namun untuk perilaku NPC, sering kali cukup satu kesimpulan: player terlihat atau tidak.

Dengan cara ini, `NPCBrain` tidak perlu menghitung `FOV` sendiri. `NPCBrain` cukup membaca:

```text
sensor.CanSeePlayer
```

Ini membuat arsitektur lebih rapi. Sensor bertugas mengumpulkan dan memproses data, sedangkan brain bertugas menggunakan informasi tersebut untuk memilih state, action, atau perilaku berikutnya.

Secara praktis, pola ini membantu memisahkan tanggung jawab. Jika logika visibilitas berubah, misalnya karena ada occlusion, parameter `FOV`, atau kondisi lingkungan, perubahan cukup dilakukan di sisi sensor. `NPCBrain` tetap bisa bekerja dengan interface yang sama.

Sebelum lanjut, mahasiswa perlu memahami bahwa **perception** bukan sekadar data sensor. Perception adalah hasil interpretasi yang sudah siap dipakai oleh agent. Ini penting karena perilaku NPC sering bergantung pada keputusan sederhana seperti `CanSeePlayer`, bukan pada detail perhitungan sensor.

### Inti yang Harus Ditekankan

- **Perception** adalah informasi hasil sensing yang sudah dapat digunakan agent.
- Contoh penting adalah `CanSeePlayer = true` atau `CanSeePlayer = false`.
- `NPCBrain` tidak perlu menghitung `FOV` sendiri; cukup membaca `sensor.CanSeePlayer`.
- Perception menyederhanakan data sensor menjadi kesimpulan bermakna untuk decision making.

### Transisi ke Slide Berikutnya

Selanjutnya kita akan membedakan lebih tegas antara **sensor** sebagai mekanisme memperoleh data dan **perception** sebagai kesimpulan dari data tersebut.

---

## Slide 017 - Sensor vs Perception

### Narasi

Pada slide ini kita membedakan dua hal yang sering dianggap sama: **sensor** dan **perception**. Dalam arsitektur agent game, keduanya berada pada lapisan yang berbeda. Sensor bertugas mengumpulkan atau menghitung data mentah dari lingkungan, sedangkan perception bertugas mengubah data tersebut menjadi kesimpulan yang bisa langsung dipakai oleh logika agent.

Secara praktis, **sensor** adalah mekanisme pengukuran. Contoh sensor yang umum digunakan dalam game adalah menghitung `distance` antara NPC dan player, menghitung `angle` atau arah relatif, serta menjalankan `raycast` untuk memeriksa apakah ada objek yang menghalangi pandangan. Data ini masih berupa nilai numerik atau hasil geometris, belum tentu langsung menjadi keputusan perilaku.

**Perception** adalah hasil interpretasi dari data sensor. Misalnya, setelah data jarak, sudut pandang, dan hasil raycast diproses, agent dapat menyimpulkan:

```text
Player terlihat
```

atau dalam bentuk variabel:

```text
CanSeePlayer = true
```

Perbedaan ini penting karena membuat desain agent lebih modular. `NPCBrain` tidak perlu tahu bagaimana jarak dihitung atau bagaimana raycast dijalankan. Ia cukup membaca nilai perception yang sudah disaring, misalnya `sensor.CanSeePlayer`.

Struktur alurnya dapat dilihat sebagai berikut:

```text
Distance
+
FOV
+
Raycast
    ↓
CanSeePlayer
```

Pada diagram ini, `Distance`, `FOV`, dan `Raycast` adalah input sensor. Prosesnya menggabungkan ketiga informasi tersebut untuk menentukan apakah player berada dalam jangkauan, berada dalam sudut pandang, dan tidak terhalang. Outputnya adalah `CanSeePlayer`, yaitu kesimpulan yang siap digunakan untuk memilih perilaku, seperti mengejar, waspada, atau tetap diam.

Hal yang harus dipahami mahasiswa sebelum lanjut adalah bahwa **sensor** menghasilkan data, sedangkan **perception** menghasilkan makna. Jika semua logika sensor dicampur ke dalam perilaku agent, sistem akan sulit diuji dan sulit dikembangkan. Dengan memisahkan keduanya, kita bisa mengganti mekanisme sensor tanpa mengubah keputusan agent, atau menambah sensor baru tanpa merusak logika perilaku.

### Inti yang Harus Ditekankan

- **Sensor** adalah mekanisme memperoleh data: `distance`, `angle`, `raycast`.
- **Perception** adalah kesimpulan dari data sensor, misalnya `CanSeePlayer = true`.
- `NPCBrain` sebaiknya membaca hasil perception, bukan menghitung detail sensor secara langsung.
- Pemisahan sensor dan perception membuat arsitektur agent lebih modular, mudah diuji, dan mudah dikembangkan.

### Transisi ke Slide Berikutnya

Setelah memahami bahwa perception adalah kesimpulan dari data sensor, kita akan masuk ke pemeriksaan pertama yang paling sederhana: apakah player berada dalam jarak pandang yang diizinkan, yaitu `viewRadius`.

---

## Slide 018 - Distance Check

### Narasi

Pada slide ini kita masuk ke tahap paling awal dalam proses persepsi NPC: **Distance Check**. Intuisi praktisnya sederhana: sebelum NPC menghitung arah pandang atau mengambil keputusan, kita perlu tahu apakah player masih berada dalam jarak yang mungkin bisa dilihat. Jika player sudah berada jauh di luar `viewRadius`, NPC tidak perlu memproses data sensor lain.

Dalam konteks game AI, pemeriksaan ini berfungsi sebagai **filter awal** yang murah dan cepat. `viewRadius` dapat dipahami sebagai batas jangkauan visual NPC. Nilai ini biasanya diatur sebagai parameter agar perilaku NPC bisa disesuaikan dengan desain level, jenis musuh, atau kebutuhan performa.

Kode konsepnya menunjukkan urutan perhitungan yang penting:

```csharp
Vector3 directionToPlayer =
    player.position - transform.position;

float distanceToPlayer =
    directionToPlayer.magnitude;

if (distanceToPlayer > viewRadius)
    return;
```

Baris pertama menghitung **vektor arah** dari posisi NPC ke posisi player. `transform.position` merepresentasikan posisi NPC, sedangkan `player.position` adalah posisi player. Selisih keduanya menghasilkan `directionToPlayer`, yaitu vektor yang menunjuk ke arah player.

Baris kedua menghitung `distanceToPlayer` menggunakan `magnitude`. Nilai ini adalah panjang vektor, atau jarak Euclidean antara NPC dan player. Dengan nilai ini, kita mendapatkan besaran jarak tanpa perlu mengetahui arah secara eksplisit.

Baris ketiga melakukan perbandingan. Jika `distanceToPlayer` lebih besar dari `viewRadius`, fungsi langsung `return`. Artinya, proses persepsi dihentikan lebih awal karena player dianggap berada di luar jangkauan. Dalam istilah slide, hasilnya adalah: **Player tidak terlihat**.

Poin penting yang harus dipahami mahasiswa adalah bahwa `distance check` bukan kesimpulan akhir bahwa player benar-benar terlihat. Ia hanya menjawab satu pertanyaan sensor: apakah player berada dalam radius yang memungkinkan? Jika jawabannya ya, proses persepsi dapat dilanjutkan ke tahap berikutnya, misalnya pemeriksaan arah pandang. Jika jawabannya tidak, NPC tidak perlu melakukan perhitungan tambahan.

Secara implementasi di Unity, pola ini sering digunakan karena `Vector3` dan `magnitude` mudah dihitung, serta `return` awal membantu menjaga alur kode tetap rapi. Mahasiswa perlu memperhatikan bahwa `viewRadius` harus dipilih secara sadar: terlalu kecil membuat NPC terlalu lambat bereaksi, terlalu besar membuat NPC seolah bisa melihat dari jarak yang tidak wajar.

### Inti yang Harus Ditekankan

- **Distance Check** adalah pemeriksaan awal untuk memastikan player berada dalam `viewRadius`.
- `directionToPlayer` dihitung dari selisih posisi player dan NPC, lalu `magnitude` menghasilkan jarak.
- Jika jarak melebihi `viewRadius`, proses persepsi dihentikan dengan `return` dan player dianggap tidak terlihat.
- Pemeriksaan ini bersifat murah dan penting untuk efisiensi, tetapi belum menjawab apakah player benar-benar terlihat secara visual.

### Transisi ke Slide Berikutnya

Meskipun distance check sudah cukup untuk memfilter player yang terlalu jauh, jarak saja tidak cukup untuk menentukan apakah player benar-benar terlihat oleh NPC. Karena itu, pada slide berikutnya kita akan membahas mengapa diperlukan **Field of View** agar NPC hanya bereaksi terhadap player yang berada di arah pandangnya.

---

## Slide 019 - Mengapa Distance Saja Tidak Cukup?

### Narasi

Pada slide sebelumnya, kita sudah melihat pemeriksaan jarak menggunakan `distanceToPlayer` dan `viewRadius`. Pemeriksaan ini penting karena menjadi langkah awal untuk mengetahui apakah player berada dalam jangkauan NPC.

Namun, jarak saja tidak cukup. Nilai `distanceToPlayer` hanya memberi tahu **seberapa jauh** player dari NPC, tetapi tidak memberi tahu **di mana** player berada relatif terhadap arah pandang NPC.

Masalahnya, jarak adalah nilai skalar. Artinya, player yang berada di depan NPC dan player yang berada di belakang NPC bisa memiliki jarak yang sama.

Contoh sederhana:

```text
PLAYER ← NPC → PLAYER
```

Dalam dua situasi ini, jarak ke player mungkin sama. Tetapi secara visual, NPC tidak seharusnya melihat player yang berada di belakangnya.

Karena itu, **distance check** hanya berfungsi sebagai filter awal. Ia membantu menyaring player yang terlalu jauh, tetapi belum cukup untuk menentukan apakah player benar-benar terlihat.

Untuk membuat perilaku NPC lebih realistis, kita perlu menambahkan konsep **Field of View** atau `FOV`. Konsep ini akan membatasi pandangan NPC berdasarkan arah, bukan hanya jarak.

Sebelum lanjut, mahasiswa perlu memahami bahwa visibilitas NPC bukan hanya soal radius, melainkan kombinasi antara jarak dan arah pandang.

### Inti yang Harus Ditekankan

- `distanceToPlayer` hanya mengukur **jarak**, bukan **arah**.
- Player di depan dan di belakang NPC dapat memiliki jarak yang sama, tetapi tidak selalu terlihat.
- **Distance check** adalah syarat awal, bukan keputusan akhir.
- Untuk perilaku NPC yang lebih natural, diperlukan **Field of View** atau `FOV`.

### Transisi ke Slide Berikutnya

Selanjutnya, kita akan mendefinisikan **Field of View** secara lebih formal, sehingga NPC hanya bereaksi terhadap player yang berada di area pandang yang benar.

---

## Slide 020 - Field of View

### Narasi

Pada slide ini kita memperkenalkan **Field of View** atau **FOV** sebagai cara agent menentukan area yang dianggapnya terlihat.

FOV bukan sekadar jarak. Ia adalah **area sudut pandang** agent, biasanya berbentuk cone di sekitar arah hadap NPC.

Parameter utama yang perlu dipahami adalah:

```text
viewRadius
viewAngle
```

`viewRadius` menentukan seberapa jauh agent dapat melihat. `viewAngle` menentukan seberapa lebar sudut pandang agent.

Contoh pada slide:

```text
View Radius = 8
View Angle = 90°
```

Artinya, NPC hanya menganggap player terlihat jika player berada **sejauh 8 unit** dan berada **di dalam cone sekitar 90°** dari arah hadap NPC.

Intuisi praktisnya:

- Jika player berada di depan NPC tetapi terlalu jauh, player tidak terlihat.
- Jika player berada dekat tetapi di belakang NPC, player juga tidak terlihat.
- Jika player berada dalam jarak dan sudut yang sesuai, player dianggap terlihat.

Dengan FOV, perilaku NPC menjadi lebih masuk akal secara visual. NPC tidak lagi "tahu" posisi player hanya karena koordinatnya dekat, tetapi karena player berada di area yang benar-benar bisa dilihat.

Sebelum lanjut, mahasiswa perlu memahami bahwa FOV adalah **filter persepsi** sederhana: ia menggabungkan **jarak** dan **sudut** untuk menentukan apakah target berada dalam pandangan agent.

### Inti yang Harus Ditekankan

- **Field of View** adalah area sudut pandang agent, bukan hanya jarak.
- `viewRadius` menentukan batas jarak pandang, sedangkan `viewAngle` menentukan lebar sudut pandang.
- Contoh `View Radius = 8` dan `View Angle = 90°` berarti NPC melihat sejauh 8 unit dalam cone sekitar 90°.
- Player hanya dianggap terlihat jika berada di dalam jarak dan sudut FOV.

### Transisi ke Slide Berikutnya

Selanjutnya kita akan melihat FOV secara visual, yaitu bagaimana cone 90° terbagi menjadi batas kiri dan kanan sekitar ±45° dari arah hadap NPC.

---

## Slide 021 - FOV secara Visual

### Narasi

Pada slide ini, kita melihat **Field of View** bukan lagi sebagai dua parameter, tetapi sebagai **kerucut pandangan** yang dimiliki NPC.

```text
             +45°
               /
              /
             /
NPC ───────→
             \
              \
               \
             -45°
```

Garis panah dari NPC menunjukkan **arah hadap**. Jika `viewAngle` bernilai `90°`, maka pandangan NPC tidak menyebar ke seluruh sisi, melainkan membentuk sudut total `90°` di depan NPC.

Karena sudut itu dibagi simetris ke kiri dan kanan, batas atas dan bawah menjadi sekitar `+45°` dan `-45°`. Dengan kata lain, NPC hanya menganggap objek terlihat jika objek berada di dalam kerucut tersebut.

Secara intuitif, ini penting untuk perilaku NPC:

- NPC tidak melihat ke belakang secara otomatis.
- NPC tidak melihat ke samping terlalu lebar.
- Player yang berada di luar sudut pandangan tidak dianggap terlihat, meskipun jaraknya masih dekat.

Dalam konteks `viewRadius` dan `viewAngle`, visual ini membantu kita memahami bahwa **visibilitas** biasanya ditentukan oleh dua syarat sekaligus: jarak dan sudut. Pada slide ini, fokus utamanya adalah syarat sudut, yaitu apakah posisi player berada di dalam kerucut pandangan NPC.

Untuk implementasi di Unity, arah hadap NPC biasanya diwakili oleh `transform.forward`. Visual kerucut ini menjadi dasar sebelum kita menghitung apakah posisi player berada di dalam batas sudut atau di luar batas sudut.

### Inti yang Harus Ditekankan

- `viewAngle = 90°` berarti total sudut pandangan NPC adalah `90°`.
- Batas kiri dan kanan pandangan adalah sekitar `±45°` dari arah hadap NPC.
- Player di luar kerucut pandangan tidak dianggap terlihat, meskipun masih berada di dekat NPC.
- Visual FOV membantu memahami bahwa NPC memiliki **arah hadap** dan **batas sudut** sebelum masuk ke perhitungan matematis.

### Transisi ke Slide Berikutnya

Setelah kita memahami bentuk visual FOV, langkah berikutnya adalah menghitung apakah posisi player benar-benar berada di dalam sudut pandangan NPC.

---

## Slide 022 - Menghitung Sudut

### Narasi

Pada slide ini kita masuk ke perhitungan teknis dari konsep **FOV** yang sudah dibahas sebelumnya. Intinya, NPC perlu mengetahui apakah posisi player berada di dalam **sudut pandang** yang dianggapnya terlihat.

Dalam Unity, sudut antara arah hadap NPC dan arah menuju player dapat dihitung dengan fungsi `Vector3.Angle`. Kode berikut menunjukkan cara menghitungnya:

```csharp
float angleToPlayer =
    Vector3.Angle(
        transform.forward,
        normalizedDirection
    );
```

Fungsi `Vector3.Angle` menerima dua vektor. Vektor pertama adalah `transform.forward`, yaitu arah depan GameObject NPC. Vektor kedua adalah `normalizedDirection`, yaitu arah dari NPC menuju player yang sudah dinormalisasi. Hasilnya adalah nilai sudut dalam derajat, biasanya antara 0 sampai 180.

Nilai `angleToPlayer` kemudian dibandingkan dengan setengah dari `viewAngle`:

```csharp
if (angleToPlayer > viewAngle / 2f)
    return;
```

Penyebabnya adalah `viewAngle` biasanya menyatakan total lebar pandangan, misalnya 90 derajat. Karena pandangan tersebar simetris di kiri dan kanan arah hadap, batasnya menjadi `viewAngle / 2f`. Jika `viewAngle` adalah 90, maka batasnya adalah 45 derajat.

Makna logika di atas adalah sebagai berikut:

- Jika `angleToPlayer` lebih kecil atau sama dengan setengah `viewAngle`, player masih berada di dalam area pandang NPC.
- Jika `angleToPlayer` lebih besar dari setengah `viewAngle`, player berada terlalu jauh dari arah hadap NPC.
- Pada kondisi itu, fungsi langsung `return`, sehingga player tidak dianggap terlihat.

Secara praktis, perhitungan ini memberi NPC kemampuan sederhana untuk membedakan "player ada di depan saya" dan "player ada di samping atau belakang saya". Perhitungan sudut ini menjadi dasar sebelum NPC melakukan respons lain, seperti mengejar, waspada, atau tetap diam.

Hal penting yang harus dipahami mahasiswa adalah urutan prosesnya:

1. Tentukan arah hadap NPC.
2. Tentukan arah dari NPC ke player.
3. Hitung sudut antara kedua arah tersebut.
4. Bandingkan sudut dengan setengah `viewAngle`.
5. Ambil keputusan apakah player terlihat atau tidak.

Dengan memahami urutan ini, mahasiswa tidak perlu menghafal kode secara utuh, tetapi bisa memahami bahwa inti masalahnya adalah **perbandingan sudut** antara arah hadap dan posisi player.

### Inti yang Harus Ditekankan

- `Vector3.Angle` menghitung sudut dalam derajat antara dua vektor.
- `transform.forward` mewakili arah hadap NPC.
- `normalizedDirection` mewakili arah dari NPC menuju player.
- `viewAngle / 2f` digunakan karena `viewAngle` adalah total lebar pandangan, bukan batas satu sisi.
- Jika sudut melebihi setengah `viewAngle`, player dianggap berada di luar **FOV** NPC.

### Transisi ke Slide Berikutnya

Setelah memahami cara menghitung sudut, langkah berikutnya adalah memahami apa yang dimaksud dengan `transform.forward` secara lebih detail, termasuk bagaimana arah hadap NPC dapat divisualisasikan.

---

## Slide 023 - transform.forward

### Narasi

**`transform.forward`** adalah properti Unity yang menyatakan arah depan sebuah `GameObject`. Dalam pengembangan NPC, properti ini menjadi acuan utama untuk mengetahui ke mana NPC sedang menghadap.

Bayangkan NPC sebagai karakter yang memiliki pandangan ke depan. Saat NPC bergerak, berputar, atau diarahkan oleh sistem, nilai `transform.forward` akan berubah mengikuti orientasi objek. Karena itu, arah ini bukan hanya visual, tetapi data penting untuk logika NPC.

Pada slide sebelumnya, kita sudah menghitung sudut antara arah hadap NPC dan arah menuju pemain. Di titik itulah `transform.forward` berperan sebagai salah satu input utama. Tanpa arah hadap yang benar, perhitungan sudut dan keputusan apakah pemain terlihat akan menjadi tidak konsisten.

```text
NPC → transform.forward
```

Artinya, NPC memiliki arah depan yang dapat dibaca secara programatik. Arah inilah yang kemudian digunakan untuk mengecek apakah pemain berada di dalam **FOV** atau **field of view** NPC.

Untuk memudahkan pengamatan, slide ini juga menyebut `DirectionMarker`. Marker ini berfungsi sebagai penanda visual agar arah hadap NPC lebih mudah dilihat, terutama saat orientasi NPC sulit dibaca dari bentuk kapsulnya.

Sebelum lanjut, mahasiswa perlu memahami bahwa `transform.forward` adalah dasar dari banyak perilaku NPC: deteksi pemain, keputusan melihat, animasi menghadap, dan validasi **FOV**.

### Inti yang Harus Ditekankan

- **`transform.forward`** adalah vektor arah depan `GameObject` dalam Unity.
- Untuk NPC, arah ini menjadi acuan utama dalam logika persepsi dan **FOV**.
- Perhitungan sudut pada slide sebelumnya bergantung pada `transform.forward` sebagai arah hadap NPC.
- `DirectionMarker` membantu memvisualisasikan orientasi NPC, tetapi konsep utamanya tetap `transform.forward`.

### Transisi ke Slide Berikutnya

Selanjutnya kita akan melihat `DirectionMarker` secara lebih detail, yaitu komponen visual yang ditambahkan untuk memastikan arah hadap NPC mudah diamati dan memudahkan debugging **FOV**.

---

## Slide 024 - Direction Marker

### Narasi

Pada slide ini kita melihat masalah visual yang sering muncul saat membuat NPC: bentuk NPC sering berupa **capsule** atau model sederhana yang tidak menunjukkan arah hadap secara jelas. Padahal dalam sistem permainan, arah hadap sangat penting karena banyak perilaku NPC bergantung pada **orientation**, misalnya melihat ke mana, mengejar, atau menentukan apakah target berada di depan.

Karena itu, kita menambahkan objek bernama `DirectionMarker` sebagai **child** dari GameObject NPC. Penempatan sebagai child penting karena marker akan mengikuti transformasi NPC, termasuk posisi, rotasi, dan scale. Dengan begitu, marker selalu berada di depan NPC sesuai `transform.forward`.

```text
NPC
 └── DirectionMarker
```

Tujuan utama `DirectionMarker` bukan untuk gameplay, tetapi untuk **debugging visual**. Marker membantu kita memastikan bahwa `transform.forward` benar-benar sesuai harapan. Jika NPC seharusnya menghadap ke target, tetapi marker masih menunjuk arah lain, berarti ada masalah pada rotasi, interpolasi, atau logika orientasi.

Dalam konteks **FOV** atau field of view, arah depan menjadi acuan utama. FOV biasanya dihitung relatif terhadap `transform.forward`. Jika arah hadap tidak jelas, mahasiswa akan kesulitan membedakan apakah NPC tidak melihat target karena target di luar FOV, atau karena orientasi NPC salah.

Dengan kata lain, `DirectionMarker` adalah alat diagnostik sederhana yang membuat perilaku NPC lebih mudah diamati. Debug visual sangat penting dalam pengembangan game karena banyak bug tidak terlihat dari kode saja, tetapi terlihat dari arah, posisi, atau hubungan antar objek di scene.

Sebelum lanjut ke mekanisme pandangan yang lebih kompleks, pastikan mahasiswa memahami bahwa **arah hadap** adalah dasar dari banyak keputusan NPC. Tanpa orientasi yang benar, perhitungan FOV, steering, atau perilaku melihat akan menjadi tidak konsisten.

### Inti yang Harus Ditekankan

- `DirectionMarker` adalah child NPC untuk memvisualisasikan **orientation** dan `transform.forward`.
- Marker membantu debugging FOV dan memastikan NPC menghadap sesuai logika.
- Debug visual penting karena perilaku NPC sering lebih mudah dipahami dari scene daripada hanya membaca kode.

### Transisi ke Slide Berikutnya

Setelah arah hadap NPC sudah jelas, langkah berikutnya adalah memeriksa apakah target benar-benar terlihat. Dalam slide berikutnya, kita akan membahas **Line of Sight**, karena berada dalam radius dan FOV belum cukup jika ada dinding atau obstacle di antara NPC dan Player.

---

## Slide 025 - Line of Sight

### Narasi

Pada slide sebelumnya kita sudah memastikan NPC memiliki arah yang benar melalui `DirectionMarker`. Sekarang kita masuk ke masalah yang lebih penting: apakah NPC benar-benar bisa melihat Player.

Dalam banyak sistem NPC, Player sering dianggap "terdeteksi" jika berada dalam dua syarat:

- berada dalam **radius deteksi**, dan
- berada dalam **Field of View** atau `FOV`.

Namun, dua syarat itu belum cukup.

```text
NPC ─── WALL ─── PLAYER
```

Pada diagram di atas, Player memang bisa berada di dalam radius dan di dalam `FOV`, tetapi ada **wall** di antara NPC dan Player. Dalam dunia game, wall adalah obstacle yang menghalangi pandangan. Jika NPC tidak memperhitungkan hal ini, NPC akan berperilaku tidak wajar: seolah bisa melihat menembus dinding.

Karena itu kita memperkenalkan konsep **Line of Sight**.

**Line of Sight** adalah garis lurus imajiner dari posisi mata NPC menuju posisi Player. Jika garis itu tidak terhalang obstacle, Player dianggap terlihat. Jika garis itu mengenai dinding, lantai, pintu tertutup, atau objek lain yang menghalangi, Player dianggap tidak terlihat.

Secara praktis, konsep ini mengubah deteksi NPC dari "berdasarkan jarak dan sudut" menjadi "berdasarkan visibilitas". Ini penting sebelum NPC mengambil keputusan seperti `chase`, `alert`, atau `attack`.

Yang perlu dipahami mahasiswa:

- **radius** menjawab "seberapa dekat".
- **FOV** menjawab "apakah di depan NPC".
- **Line of Sight** menjawab "apakah ada penghalang di antara keduanya".

Ketiganya bekerja sebagai filter bertingkat. Jika salah satu tidak terpenuhi, Player tidak dianggap terlihat.

Sebelum lanjut, pastikan mahasiswa memahami bahwa `Line of Sight` bukan pengganti radius atau `FOV`, melainkan lapisan tambahan yang membuat deteksi NPC lebih realistis.

### Inti yang Harus Ditekankan

- Player bisa berada dalam radius dan `FOV`, tetapi tetap tidak terlihat jika ada obstacle di antara NPC dan Player.
- **Line of Sight** adalah konsep garis pandang dari mata NPC ke Player.
- Konsep ini penting agar NPC tidak "melihat menembus dinding" dan keputusan perilaku NPC menjadi lebih masuk akal.
- Radius, `FOV`, dan `Line of Sight` adalah tiga filter deteksi yang saling melengkapi.

### Transisi ke Slide Berikutnya

Selanjutnya, kita akan melihat bagaimana konsep `Line of Sight` diimplementasikan di Unity menggunakan raycast, sehingga sistem bisa mengecek apakah garis pandang NPC ke Player terhalang obstacle atau tidak.

---

## Slide 026 - Raycast sebagai Line of Sight

### Narasi

Slide ini melanjutkan konsep **Line of Sight** dengan menunjukkan cara praktisnya di Unity.

Pada slide sebelumnya, kita sudah memahami bahwa jarak dan **FOV** saja tidak cukup. Jika ada dinding di antara NPC dan Player, pandangan harus terhalang.

Di Unity, hal ini biasanya dilakukan dengan **raycast**, yaitu garis imajiner yang ditembakkan dari satu titik ke arah target.

```csharp
Physics.Raycast()
```

Fungsi ini digunakan untuk mengecek apakah ada objek fisik di sepanjang garis pandangan.

Konsepnya dapat dilihat seperti berikut:

```text
Eye Position
    ↓
Ray menuju Player
    ↓
Apakah ray mengenai obstacle?
```

Titik awal raycast biasanya diletakkan pada **Eye Position**, yaitu posisi mata NPC. Arah raycast dihitung menuju posisi Player.

Jika raycast mengenai **obstacle**, misalnya dinding, maka Player dianggap tidak terlihat.

Jika raycast tidak mengenai obstacle, maka Player dianggap terlihat.

Dalam implementasi sederhana, hasilnya sering disimpan ke variabel seperti `CanSeePlayer`.

```csharp
Physics.Raycast(eyePosition, directionToPlayer, out RaycastHit hit, maxDistance);
```

Baris ini menembakkan ray dari `eyePosition` ke arah `directionToPlayer`. Jika `hit` bernilai `true`, berarti ada objek yang menghalangi pandangan.

Urutan eksekusinya penting:

1. Tentukan posisi mata NPC.
2. Hitung arah menuju Player.
3. Jalankan `Physics.Raycast()`.
4. Periksa apakah ray mengenai obstacle.
5. Tentukan nilai `CanSeePlayer`.

Dengan cara ini, NPC tidak hanya mengecek jarak, tetapi juga mengecek apakah jalur pandang benar-benar bebas.

Hal yang harus dipahami mahasiswa adalah bahwa raycast adalah **uji geometri berbasis fisika**, bukan sekadar perhitungan jarak.

Raycast membantu NPC berperilaku lebih masuk akal, misalnya berhenti mengejar jika Player berada di balik dinding.

### Inti yang Harus Ditekankan

- **Line of Sight** di Unity dapat diimplementasikan dengan `Physics.Raycast()`.
- Raycast dimulai dari **Eye Position** NPC dan diarahkan ke Player.
- Jika ray mengenai **obstacle**, Player dianggap tidak terlihat.
- Jika ray tidak terhalang, Player dianggap terlihat.
- Hasil raycast biasanya digunakan untuk menentukan nilai `CanSeePlayer`.

### Transisi ke Slide Berikutnya

Selanjutnya, kita akan melihat visualisasi dua situasi raycast: saat Player terlihat dan saat pandangan terhalang dinding.

---

## Slide 027 - Raycast Visual

### Narasi

Slide ini membantu kita membayangkan bagaimana **raycast** bekerja sebagai **line of sight** untuk NPC. Pada slide sebelumnya, kita sudah melihat bahwa Unity dapat memakai `Physics.Raycast()` untuk mengecek apakah ada garis pandang antara NPC dan player. Sekarang kita fokus pada dua situasi visual yang paling dasar.

Situasi pertama adalah ketika NPC dan player berada dalam ruang terbuka.

```text
NPC ───────── PLAYER
```

Jika raycast dari posisi NPC menuju player tidak mengenai objek penghalang, maka NPC dianggap dapat melihat player. Dalam logika game, nilai `CanSeePlayer` akan menjadi `true`.

Situasi kedua adalah ketika ada dinding di antara NPC dan player.

```text
NPC ─── WALL ─── PLAYER
```

Raycast akan mengenai dinding terlebih dahulu. Karena dinding menghalangi garis pandang, NPC tidak dapat melihat player, sehingga `CanSeePlayer` menjadi `false`.

Secara intuisi, raycast bekerja seperti “sinar penglihatan” yang dilempar dari NPC ke player. Jika sinar sampai ke player, player terlihat. Jika sinar berhenti di obstacle, player tersembunyi. Konsep ini penting karena perilaku NPC sering bergantung pada kondisi ini, misalnya NPC berhenti mengejar ketika player berada di balik dinding.

Sebelum masuk ke implementasi yang lebih rapi, mahasiswa perlu memahami bahwa hasil raycast bukan hanya soal jarak, tetapi juga soal **apakah ada objek yang menghalangi** di antara NPC dan player. Pemahaman ini menjadi dasar untuk membuat NPC yang lebih responsif dan masuk akal.

### Inti yang Harus Ditekankan

- Raycast visual menunjukkan dua kondisi dasar: **player terlihat** dan **player terhalang**.
- Jika ray tidak mengenai obstacle, `CanSeePlayer = true`.
- Jika ray mengenai wall atau obstacle, `CanSeePlayer = false`.
- Kondisi ini menjadi dasar perilaku NPC seperti mengejar, berhenti, atau kembali ke posisi awal.

### Transisi ke Slide Berikutnya

Setelah memahami dua situasi visual ini, langkah berikutnya adalah membuat raycast lebih selektif, yaitu dengan menentukan objek mana yang boleh dianggap sebagai penghalang.

---

## Slide 028 - Layer dan LayerMask

### Narasi

Pada slide sebelumnya, kita melihat bahwa NPC dapat menentukan apakah pemain terlihat atau terhalang dinding menggunakan raycast. Namun, dalam scene game yang lebih kompleks, tidak semua objek yang mengenai raycast harus diperlakukan sama. Di sinilah **Layer** berperan.

**Layer** adalah cara Unity mengelompokkan `GameObject` berdasarkan kategori. Pada praktikum ini, kita menggunakan dua kelompok sederhana:

- `Player Layer` untuk objek pemain.
- `Obstacle Layer` untuk objek penghalang.

Dengan pengelompokan ini, sistem AI tidak perlu menebak apakah objek yang mengenai raycast adalah pemain, dinding, dekorasi, atau objek lain.

`LayerMask` adalah mekanisme filter yang menentukan layer mana saja yang boleh dipertimbangkan oleh query tertentu, misalnya raycast. Dalam kode, kita dapat menuliskan:

```csharp
[SerializeField]
private LayerMask obstacleMask;
```

Atribut `[SerializeField]` membuat variabel ini dapat diatur di Inspector tanpa harus menjadi `public`. Nilai `obstacleMask` kemudian bisa diisi dengan layer-layer yang dianggap sebagai obstacle.

Ketika NPC melakukan raycast, `LayerMask` berfungsi seperti saringan. Raycast tetap dikirim ke scene, tetapi hanya objek yang berada pada layer yang dipilih oleh mask yang akan dianggap sebagai hasil. Jika mask hanya berisi `Obstacle Layer`, maka dinding atau rintangan dapat dideteksi sebagai penghalang, sementara objek lain diabaikan.

Pendekatan ini penting untuk perilaku NPC yang lebih rapi. NPC dapat membedakan:

- **Player**, untuk deteksi target atau kondisi `CanSeePlayer`.
- **Obstacle**, untuk mengetahui apakah pandangan terhalang.
- **Object lain**, yang tidak relevan dengan logika AI dan tidak perlu diproses.

Sebelum lanjut, mahasiswa perlu memahami bahwa layer bukan sekadar label visual. Layer adalah bagian dari filtering system, terutama untuk raycast, collision, dan proses lain yang membutuhkan pemisahan objek berdasarkan kategori.

### Inti yang Harus Ditekankan

- **Layer** digunakan untuk mengelompokkan `GameObject` agar sistem game dapat memfilter objek berdasarkan kategori.
- `LayerMask` menentukan layer mana saja yang boleh dipertimbangkan oleh raycast atau query lain.
- Dengan `Player Layer` dan `Obstacle Layer`, NPC dapat membedakan target, penghalang, dan objek lain secara lebih jelas.
- `[SerializeField]` memungkinkan `LayerMask` diatur di Inspector tanpa membuat variabel `public`.

### Transisi ke Slide Berikutnya

Setelah memahami bahwa layer berfungsi sebagai filter, kita perlu membedakan konsep ini dengan tag. Pada slide berikutnya, kita akan membahas **Tag vs Layer** dan kapan masing-masing lebih tepat digunakan.

---

## Slide 029 - Tag vs Layer

### Narasi

Pada slide ini kita membedakan dua mekanisme penting dalam Unity yang sering tertukar: **Tag** dan **Layer**. Keduanya bisa muncul pada GameObject yang sama, tetapi perannya berbeda. **Tag** menjawab pertanyaan “objek ini siapa?”, sedangkan **Layer** menjawab pertanyaan “objek ini boleh dilihat atau diproses oleh sistem apa?”.

**Tag** berfungsi sebagai identitas atau label logis. Dalam praktikum, kita menuliskan:

```text
Tag = Player
```

Artinya, GameObject tersebut diberi label logis `Player`. Informasi ini berguna ketika script perlu mengenali objek tertentu, misalnya NPC yang harus bereaksi terhadap pemain. Tag membantu logika game membedakan objek berdasarkan peran atau identitasnya.

**Layer** berfungsi sebagai filter. Layer tidak menjelaskan identitas objek secara langsung, tetapi menentukan objek mana yang boleh terlibat dalam proses tertentu, seperti `raycast`, `collision`, atau `camera culling`. Dalam praktikum kita menggunakan:

```text
Tag Player
Layer Player
Layer Obstacle
```

Di sini, `Tag Player` memberi identitas bahwa objek adalah pemain, sedangkan `Layer Player` dan `Layer Obstacle` membantu sistem memfilter interaksi.

Perbedaan utamanya bisa dilihat dari cara kerjanya. **Tag** cocok untuk pengecekan logis, misalnya “apakah objek ini pemain?”. **Layer** cocok untuk pemrosesan sistem, misalnya “raycast ini hanya boleh mengenai obstacle”, atau “camera ini tidak perlu merender layer tertentu”. Karena itu, `LayerMask` yang dibahas sebelumnya lebih berkaitan dengan layer, bukan tag.

Hal yang harus dipahami mahasiswa sebelum lanjut adalah bahwa satu GameObject bisa memiliki tag dan layer sekaligus. Misalnya objek pemain dapat memiliki `Tag = Player` dan `Layer = Player`. Tag membantu logika game mengenali objek, sedangkan layer membantu sistem memilih objek yang relevan untuk `raycast`, `collision`, atau `camera culling`. Kesalahan umum adalah menggunakan tag untuk filtering raycast atau menggunakan layer untuk identitas logis, padahal keduanya punya peran berbeda.

### Inti yang Harus Ditekankan

- **Tag** adalah identitas logis, contoh `Tag = Player`.
- **Layer** adalah filter untuk `raycast`, `collision`, dan `camera culling`.
- Satu GameObject dapat memiliki tag dan layer sekaligus, tetapi fungsinya berbeda.
- `LayerMask` bekerja berdasarkan layer, bukan tag.

### Transisi ke Slide Berikutnya

Setelah kita memahami cara memberi identitas dan memfilter objek, langkah berikutnya adalah menentukan dari mana NPC “melihat”. Pada slide berikutnya kita akan membahas **Eye Position**, yaitu posisi sensor visual yang membuat `Line of Sight` lebih realistis.

---

## Slide 030 - Eye Position

### Narasi

Pada slide ini kita membahas **Eye Position**, yaitu titik awal yang lebih tepat untuk pemeriksaan **Line of Sight** pada NPC.

Sebelumnya kita sudah menyiapkan `Tag` dan `Layer` agar objek dapat dikenali dan difilter. Sekarang fokusnya adalah **dari mana** raycast dilempar.

Secara umum, `transform.position` sering berada di pusat objek, misalnya di pinggang atau pusat kapsul karakter. Jika raycast selalu dimulai dari titik itu, hasil persepsi bisa tidak natural.

Karena itu, posisi mata dihitung dengan menggeser posisi objek ke atas:

```csharp
Vector3 eyePosition =
    transform.position +
    Vector3.up * eyeHeight;
```

Pada praktikum, nilai `eyeHeight` ditetapkan:

```text
Eye Height = 1.2
```

Artinya, titik sensor visual dianggap berada sekitar 1,2 unit di atas posisi dasar NPC, mendekati area kepala.

Secara eksekusi:

1. Ambil `transform.position` NPC.
2. Kalikan `Vector3.up` dengan `eyeHeight`.
3. Tambahkan hasil offset ke posisi awal.
4. Gunakan `eyePosition` sebagai titik awal raycast.

Dengan cara ini, **Line of Sight** lebih realistis karena NPC seolah melihat dari matanya, bukan dari pusat objek.

Hal penting yang harus dipahami: `eyePosition` bukan sekadar dekorasi visual, melainkan **origin sensor** yang memengaruhi apakah NPC dapat melihat pemain atau tidak.

### Inti yang Harus Ditekankan

- Raycast untuk persepsi sebaiknya dimulai dari **posisi mata**, bukan selalu dari `transform.position` pusat objek.
- `eyePosition` dibuat dengan offset vertikal: `transform.position + Vector3.up * eyeHeight`.
- Nilai `eyeHeight = 1.2` membuat sensor visual NPC berada di area kepala.
- Titik ini membuat **Line of Sight** lebih realistis dan konsisten dengan perilaku NPC.

### Transisi ke Slide Berikutnya

Setelah titik awal raycast ditentukan, kita akan melihat bagaimana hasil pemeriksaan tersebut dirangkum menjadi keputusan apakah NPC dapat melihat pemain.

---

## Slide 031 - Perception Result

### Narasi

Slide ini menjelaskan hasil akhir dari proses **perception** pada NPC. Setelah sensor visual memeriksa tiga kondisi, yaitu **Distance**, **FOV**, dan **Line of Sight**, sistem tidak lagi membahas detail geometri. Fokusnya adalah menghasilkan satu sinyal yang bisa digunakan oleh perilaku NPC.

Secara intuitif, NPC hanya perlu menjawab pertanyaan berikut:

1. Apakah pemain berada dalam jarak yang cukup dekat?
2. Apakah pemain berada di dalam **field of view**?
3. Apakah garis pandang dari posisi mata NPC ke pemain tidak terhalang?

Jika ketiga jawaban tersebut bernilai positif, maka sensor menghasilkan flag:

```csharp
CanSeePlayer = true;
```

Flag `CanSeePlayer` adalah **output utama sensor**. Nilai boolean ini menjadi representasi sederhana dari hasil persepsi: pemain terlihat atau tidak.

Dalam arsitektur perilaku game, flag seperti ini biasanya menjadi input untuk **finite state machine**, **behavior tree**, atau sistem keputusan lainnya. Dengan kata lain, NPC tidak perlu menghitung ulang jarak, sudut pandang, dan raycast setiap kali mengambil keputusan. Ia cukup membaca `CanSeePlayer`.

Hal penting yang harus dipahami mahasiswa adalah bahwa **perception result** berfungsi sebagai jembatan antara data dunia game dan perilaku agent. Nilai `true` berarti NPC memiliki dasar untuk beralih ke perilaku yang lebih responsif. Nilai `false` berarti NPC tetap berada pada perilaku default atau perilaku sebelumnya.

### Inti yang Harus Ditekankan

- **Perception result** adalah kesimpulan akhir dari pemeriksaan **Distance**, **FOV**, dan **Line of Sight**.
- `CanSeePlayer = true` adalah output sensor yang menyatakan pemain terlihat oleh NPC.
- Flag ini menjadi input penting bagi sistem keputusan NPC, seperti **FSM** atau **behavior tree**.
- Perilaku NPC berikutnya bergantung pada nilai `CanSeePlayer`, bukan pada detail pemeriksaan sensor secara langsung.

### Transisi ke Slide Berikutnya

Setelah NPC mengetahui bahwa pemain terlihat, pertanyaan berikutnya adalah bagaimana NPC tetap mengingat pemain ketika pemain menghilang. Slide berikutnya membahas **Memory** dan dampaknya terhadap perilaku NPC.

---

## Slide 032 - Memory

### Narasi

**Memory** adalah bagian penting dari arsitektur agen game karena NPC tidak hanya bereaksi terhadap apa yang terlihat sekarang, tetapi juga terhadap informasi yang pernah diperoleh sebelumnya.

Tanpa memory, perilaku NPC akan sangat dangkal. Saat **Player** terlihat, NPC masuk ke state `CHASE`. Namun begitu Player terhalang dinding atau keluar dari jangkauan sensor, NPC langsung kembali ke `PATROL`.

```text
Player terlihat -> CHASE
Player hilang -> lupa -> PATROL
```

Perilaku ini terasa tidak natural karena NPC seolah tidak pernah melihat Player sebelumnya.

Dengan memory, NPC menyimpan informasi penting dari masa lalu, misalnya posisi terakhir Player terlihat. Ketika Player hilang, NPC tidak langsung kembali patroli, tetapi bisa masuk ke state `SEARCH`.

```text
Player hilang -> ingat posisi terakhir -> SEARCH
```

Dalam konteks **Finite State Machine**, memory menjadi data yang menghubungkan antar state. State `CHASE` dapat menghasilkan informasi, state `SEARCH` dapat menggunakan informasi tersebut, dan state `PATROL` hanya dijalankan setelah pencarian gagal atau waktu pencarian habis.

Secara praktis, memory membuat NPC lebih believable. Ia bisa mengejar, mencari, dan baru kembali patroli setelah proses pencarian selesai.

Sebelum lanjut, mahasiswa perlu memahami bahwa memory bukan sekadar variabel data, tetapi mekanisme yang membuat keputusan NPC memiliki konteks waktu.

### Inti yang Harus Ditekankan

- **Memory** membuat NPC menyimpan informasi dari masa lalu, bukan hanya bereaksi terhadap persepsi saat ini.
- Tanpa memory, NPC akan langsung kembali `PATROL` setelah Player hilang, sehingga perilaku terasa tidak natural.
- Dengan memory, NPC dapat masuk ke state `SEARCH` berdasarkan posisi terakhir Player terlihat.
- Memory menjadi penghubung antar state dalam arsitektur NPC, terutama `CHASE`, `SEARCH`, dan `PATROL`.

### Transisi ke Slide Berikutnya

Selanjutnya kita akan melihat bentuk konkret memory dalam praktikum, yaitu variabel `lastKnownPosition` yang menyimpan posisi Player saat terakhir terlihat.

---

## Slide 033 - lastKnownPosition

### Narasi

Pada slide ini kita fokus pada salah satu bentuk **memory** yang paling sederhana namun sangat berguna dalam perilaku NPC, yaitu **lastKnownPosition**. Variabel ini merepresentasikan posisi terakhir Player yang berhasil diketahui oleh NPC sebelum Player menghilang dari jangkauan sensor.

Intuisi praktisnya begini: ketika Player masih terlihat, NPC bisa langsung bereaksi, misalnya mengejar. Namun begitu Player masuk balik dinding atau keluar dari area deteksi, NPC tidak serta-merta kehilangan arah. Ia masih bisa mengingat di mana Player terakhir kali terlihat, lalu menggunakan informasi itu untuk mencari.

Dalam implementasi praktikum, memory ini disimpan sebagai variabel `Vector3`:

```csharp
private Vector3 lastKnownPosition;
```

Variabel ini penting karena `Vector3` menyimpan koordinat posisi dalam ruang 3D, sehingga NPC dapat menggunakannya untuk pathfinding, steering, atau target pencarian.

Setiap kali Player terlihat, nilai `lastKnownPosition` diperbarui:

```csharp
lastKnownPosition =
    sensor.Player.position;
```

Urutan eksekusinya sederhana. Sensor NPC mendeteksi Player, lalu posisi Player saat itu dituliskan ke `lastKnownPosition`. Dengan begitu, nilai ini selalu mewakili **posisi terakhir yang valid** sebelum Player hilang.

Hubungannya dengan perilaku game sangat jelas. Jika NPC memiliki state atau node seperti `SEARCH`, maka `lastKnownPosition` bisa menjadi target yang dituju. Tanpa variabel ini, NPC hanya bisa kembali ke perilaku default seperti `PATROL` begitu Player tidak terlihat. Dengan variabel ini, NPC terasa lebih persisten dan lebih mirip agen yang memiliki ingatan.

Yang perlu dipahami mahasiswa adalah bahwa `lastKnownPosition` bukan sekadar data posisi, melainkan **state memory** yang memengaruhi keputusan NPC. Nilai ini akan menjadi dasar untuk menentukan apakah NPC masih punya informasi target atau tidak, dan hal itu akan dibahas lebih lanjut pada variabel validasi memory berikutnya.

### Inti yang Harus Ditekankan

- `lastKnownPosition` adalah memory posisi terakhir Player yang diketahui NPC.
- Nilai ini diperbarui hanya ketika Player terlihat melalui sensor.
- Variabel ini memungkinkan NPC melakukan perilaku pencarian yang lebih natural, bukan langsung lupa.
- `Vector3` menyimpan koordinat posisi yang dapat dipakai untuk pathfinding atau target perilaku.

### Transisi ke Slide Berikutnya

Setelah kita tahu posisi terakhir disimpan di mana, langkah berikutnya adalah memastikan apakah memory tersebut masih valid atau tidak. Untuk itu, kita akan membahas variabel `hasLastKnownPosition` yang menandai keberadaan informasi target pada NPC.

---

## Slide 034 - hasLastKnownPosition

### Narasi

Pada slide ini kita melihat variabel pendukung memory NPC:

```csharp
private bool hasLastKnownPosition;
```

Variabel ini bukan posisi, melainkan **penanda validitas** memory. `lastKnownPosition` menyimpan koordinat, sedangkan `hasLastKnownPosition` menyatakan apakah koordinat itu masih boleh dipakai.

Intuisi praktisnya sederhana: NPC tidak selalu tahu posisi Player. Jika Player belum pernah terlihat, atau informasi sudah dianggap tidak valid, NPC tidak boleh langsung mengejar posisi kosong atau nilai lama. Dengan flag ini, perilaku agent bisa lebih aman: cek dulu apakah memory ada, baru gunakan `lastKnownPosition`.

Arti nilainya dapat dibaca sebagai berikut:

- `true` → NPC masih memiliki posisi terakhir Player yang valid.
- `false` → NPC tidak memiliki informasi target yang bisa dipercaya.

Dalam alur perilaku, flag ini biasanya menjadi bagian dari **decision making** sederhana. Sebelum memilih aksi seperti `chase` atau `idle`, NPC dapat memeriksa `hasLastKnownPosition`. Jika `true`, NPC bisa memakai `lastKnownPosition` sebagai acuan. Jika `false`, NPC tidak perlu memproses posisi target dan dapat melakukan perilaku lain yang sesuai.

Poin penting yang harus dipahami: **memory tidak selalu berarti satu nilai posisi saja**. Memory yang berguna biasanya terdiri dari data dan status. `lastKnownPosition` adalah datanya, sedangkan `hasLastKnownPosition` adalah statusnya. Tanpa status, sistem bisa salah mengartikan nilai `Vector3` kosong atau nilai lama sebagai target yang masih valid.

Sebelum lanjut, mahasiswa perlu memahami bahwa variabel boolean ini membuat perilaku NPC lebih **terkendali** dan mudah diuji. Kita tidak hanya bertanya “di mana posisi terakhir?”, tetapi juga “apakah posisi terakhir itu masih boleh dipakai?”.

### Inti yang Harus Ditekankan

- `hasLastKnownPosition` adalah flag validitas memory, bukan posisi.
- `true` berarti `lastKnownPosition` masih dapat digunakan.
- `false` berarti NPC tidak memiliki informasi target yang valid.
- Memory yang baik biasanya menggabungkan data dan status.

### Transisi ke Slide Berikutnya

Setelah memahami bahwa memory perlu memiliki status validitas, langkah berikutnya adalah melihat bagaimana memory juga bisa menyimpan informasi waktu, yaitu `searchTimer`.

---

## Slide 035 - searchTimer sebagai Memory Temporal

### Narasi

Pada slide sebelumnya, kita sudah melihat bahwa NPC perlu tahu apakah masih memiliki informasi posisi terakhir Player. Informasi itu disimpan dalam `hasLastKnownPosition`. Namun, dalam game, informasi tidak hanya berupa “ada atau tidak”, tetapi juga “masih berlaku sampai kapan”. Di sinilah `searchTimer` berperan. Variabel ini membuat NPC memiliki **memory temporal**, yaitu ingatan yang dibatasi oleh waktu.

```csharp
private float searchTimer;
```

Secara sederhana, `searchTimer` adalah penghitung mundur yang menunjukkan berapa lama NPC masih akan mencari Player setelah kehilangan kontak. Nilai ini biasanya diisi ketika NPC berhenti melihat Player, misalnya ketika Player keluar dari pandangan, keluar dari deteksi, atau pindah ke area yang tidak bisa dideteksi.

Ketika Player hilang, nilai timer diinisialisasi:

```text
searchTimer = searchDuration
```

Artinya, NPC tidak langsung lupa. NPC diberi durasi pencarian tertentu. Selama `searchTimer` masih bernilai positif, NPC dapat tetap berada dalam perilaku mencari, misalnya bergerak ke `lastKnownPosition`, mengitari area, atau menunggu di titik terakhir yang diketahui.

Setiap frame, timer dikurangi:

```csharp
searchTimer -= Time.deltaTime;
```

`Time.deltaTime` penting karena membuat pengurangan waktu tidak bergantung pada kecepatan frame. Dengan cara ini, NPC akan mencari selama durasi yang sama meskipun game berjalan di 30 FPS, 60 FPS, atau lebih.

Dari sudut pandang perilaku game, `searchTimer` membantu NPC terasa lebih hidup. NPC tidak hanya “tahu” posisi terakhir Player, tetapi juga “mengingat” bahwa informasi itu akan kedaluwarsa. Jika timer habis, NPC dapat berpindah ke perilaku lain, misalnya kembali ke patrol, berhenti mencari, atau menunggu perintah baru.

Sebelum lanjut, mahasiswa perlu memahami bahwa `searchTimer` bukan sekadar angka. Ia adalah bagian dari **state memory** yang menentukan kapan NPC masih boleh memakai informasi lama. Konsep ini menjadi dasar untuk memahami bagaimana NPC membuat keputusan berdasarkan informasi yang terbatas dan berubah seiring waktu.

### Inti yang Harus Ditekankan

- `searchTimer` adalah **memory temporal** yang memberi batas waktu pada ingatan NPC.
- Nilai timer diisi saat Player hilang, lalu dikurangi setiap frame dengan `Time.deltaTime`.
- Selama timer masih positif, NPC dapat mempertahankan perilaku mencari berdasarkan `lastKnownPosition`.
- Jika timer habis, NPC dapat berpindah ke state lain karena informasi posisi terakhir dianggap tidak lagi valid.

### Transisi ke Slide Berikutnya

Jika `searchTimer` menunjukkan “berapa lama lagi NPC mencari”, maka pertanyaan berikutnya adalah: apa yang sebenarnya diketahui NPC setelah Player hilang? Di slide berikutnya, kita akan membahas **Belief State**, yaitu cara NPC memperkirakan kondisi dunia berdasarkan informasi terakhir yang dimilikinya.

---

## Slide 036 - Belief State

### Narasi

Pada slide ini kita masuk ke konsep penting dalam **perilaku agent game**: **Belief State**. Intuisi sederhananya, NPC tidak hidup dalam dunia yang selalu terlihat. Ia hanya tahu apa yang bisa ia **perceive** atau simpan dari pengalaman terakhir.

Ketika Player masih terlihat, posisi Player bisa menjadi informasi langsung. Namun setelah Player menghilang dari pandangan, NPC tidak lagi mengetahui posisi sebenarnya. Kondisi dunia yang benar mungkin sudah berubah, tetapi NPC tetap harus bertindak berdasarkan informasi yang dimilikinya.

```text
NPC tidak tahu posisi Player sekarang.
NPC hanya memiliki:
lastKnownPosition
```

Variabel `lastKnownPosition` inilah yang menjadi contoh sederhana **belief state**. Artinya, NPC menyimpan perkiraan: “Player terakhir kali terlihat di sini.” Perkiraan ini bukan kebenaran mutlak, melainkan representasi internal tentang dunia berdasarkan informasi terakhir.

Dalam konteks agent game, **belief state** membantu NPC tetap berperilaku masuk akal meskipun ada ketidakpastian. Tanpa belief state, NPC bisa langsung lupa posisi Player dan kembali ke perilaku default. Dengan belief state, NPC masih punya dasar untuk mencari, menunggu, atau kembali ke patroli.

Yang perlu dipahami mahasiswa adalah perbedaan antara **state dunia yang sebenarnya** dan **state yang diyakini agent**. Agent tidak selalu memiliki akses penuh ke dunia; ia bekerja dari **perception** dan **memory**. `lastKnownPosition` adalah bentuk memory spasial yang sederhana, sedangkan `searchTimer` yang dibahas sebelumnya adalah memory temporal. Keduanya bersama membentuk gambaran internal NPC tentang situasi.

Sebelum lanjut ke pemilihan perilaku, pastikan mahasiswa paham bahwa **belief state** adalah dasar penalaran agent. NPC tidak memilih perilaku berdasarkan dunia yang pasti, tetapi berdasarkan perkiraan yang ia miliki saat itu.

### Inti yang Harus Ditekankan

- **Belief state** adalah perkiraan kondisi dunia yang disimpan agent berdasarkan informasi terakhir.
- `lastKnownPosition` adalah contoh sederhana belief state spasial untuk NPC setelah Player hilang.
- NPC bertindak berdasarkan **perception** dan **memory**, bukan berdasarkan pengetahuan sempurna tentang dunia.
- Konsep ini membedakan **state dunia yang sebenarnya** dengan **state yang diyakini agent**.

### Transisi ke Slide Berikutnya

Setelah NPC memiliki belief state, langkah berikutnya adalah bagaimana ia menggunakan perkiraan itu untuk memilih perilaku.

---

## Slide 037 - Decision

### Narasi

**Decision** adalah tahap di mana NPC memilih perilaku yang akan dilakukan pada saat itu.

Dalam praktikum, perilaku yang tersedia adalah `PATROL`, `CHASE`, dan `SEARCH`.

Decision tidak bekerja dari tebak-tebakan. Ia menggunakan dua sumber informasi utama: **perception** dan **memory**.

`perception` adalah apa yang diketahui NPC sekarang, misalnya apakah player terlihat.

`memory` adalah informasi yang disimpan dari masa lalu, misalnya `lastKnownPosition` dan apakah pencarian sudah selesai.

Intuisi praktisnya sederhana: jika NPC melihat player, ia mengejar. Jika player baru saja hilang, ia mencari di sekitar posisi terakhir. Jika pencarian sudah selesai dan player tidak ditemukan, ia kembali patroli.

Aturan keputusan pada slide ini dapat ditulis sebagai berikut:

```text
Player terlihat?
    ↓
CHASE

Tidak terlihat tetapi baru hilang?
    ↓
SEARCH

Search selesai?
    ↓
PATROL
```

Alur ini dibaca dari atas ke bawah:

1. NPC memeriksa apakah player terlihat. Jika ya, perilaku yang dipilih adalah `CHASE`.
2. Jika player tidak terlihat tetapi baru saja hilang, perilaku yang dipilih adalah `SEARCH`.
3. Jika pencarian sudah selesai, perilaku yang dipilih adalah `PATROL`.

Dalam implementasi, aturan ini sering dipetakan ke **Finite State Machine** atau **behavior tree**. Setiap perilaku menjadi state atau node, dan kondisi seperti `CanSeePlayer` menjadi pemicu transisi.

Penting untuk dipahami bahwa `Decision` hanya memilih perilaku. Setelah perilaku dipilih, sistem lain seperti pathfinding atau steering baru menentukan cara NPC bergerak menuju target.

Sebelum lanjut, mahasiswa perlu memahami bahwa keputusan ini biasanya dievaluasi berulang kali setiap frame, bukan hanya sekali. Dengan begitu, NPC dapat merespons perubahan kondisi dunia secara cepat.

### Inti yang Harus Ditekankan

- **Decision** memilih behavior berdasarkan **perception** dan **memory**.
- Tiga behavior praktikum adalah `PATROL`, `CHASE`, dan `SEARCH`.
- Aturan dasar: player terlihat menuju `CHASE`, player baru hilang menuju `SEARCH`, search selesai menuju `PATROL`.
- Decision adalah tahap pemilihan perilaku, bukan tahap perhitungan pathfinding.

### Transisi ke Slide Berikutnya

Setelah memahami aturan dasar decision, kita perlu melihat bagaimana aturan ini diberi prioritas ketika beberapa kondisi terjadi bersamaan, terutama jika player muncul saat NPC sedang `SEARCH`.

---

## Slide 038 - Prioritas Decision

### Narasi

Pada slide ini, kita membahas **prioritas decision** dalam praktikum. Decision bukan hanya memilih salah satu behavior, tetapi memilih behavior yang paling tepat berdasarkan urutan kondisi.

```text
PRIORITAS 1
Player terlihat
→ CHASE

PRIORITAS 2
Player baru hilang
→ SEARCH

PRIORITAS 3
Search selesai
→ PATROL
```

Artinya, `CHASE` memiliki prioritas tertinggi. Jika `Player terlihat`, agent langsung memilih `CHASE`, meskipun sebelumnya sedang `SEARCH` atau `PATROL`.

Prioritas kedua adalah `SEARCH`. Kondisi ini dipakai ketika `Player baru hilang`, misalnya agent kehilangan target setelah sebelumnya melihatnya. Agent tidak langsung kembali `PATROL`, tetapi mencari di sekitar lokasi terakhir.

Prioritas ketiga adalah `PATROL`. Kondisi `Search selesai` menjadi fallback ketika tidak ada kondisi yang lebih penting. Agent kembali ke perilaku dasar, yaitu patroli.

Urutan ini penting karena menentukan perilaku agent saat beberapa kondisi terjadi bersamaan.

```text
CanSeePlayer = true
```

Jika `Player` muncul saat agent sedang `SEARCH`, maka nilai `CanSeePlayer` menjadi `true`. Karena `Player terlihat` adalah prioritas 1, agent segera kembali:

```text
CHASE
```

Dengan cara ini, perilaku agent terasa lebih responsif dan konsisten. Mahasiswa perlu memahami bahwa decision tidak cukup hanya memiliki aturan; aturan juga harus memiliki urutan pemeriksaan yang benar.

### Inti yang Harus Ditekankan

- **Prioritas decision** menentukan urutan pemeriksaan kondisi sebelum memilih behavior.
- `CHASE` adalah prioritas tertinggi karena `Player terlihat` adalah kondisi paling penting.
- `SEARCH` menjadi prioritas kedua untuk menangani `Player baru hilang`.
- `PATROL` menjadi prioritas ketiga sebagai perilaku default ketika `Search selesai`.
- Jika `CanSeePlayer = true` saat `SEARCH`, agent langsung beralih ke `CHASE`.

### Transisi ke Slide Berikutnya

Setelah memahami urutan prioritas, kita akan melihat mengapa urutan ini penting untuk menjaga perilaku agent tetap konsisten.

---

## Slide 039 - Why Priority Matters?

### Narasi

Pada slide ini, kita melihat mengapa **prioritas** penting dalam decision making NPC.

```text
NPC sedang SEARCH
tetapi Player tiba-tiba terlihat.
```

Situasi ini menunjukkan bahwa beberapa kondisi bisa benar pada waktu yang sama.

- NPC masih dalam state `SEARCH`.
- Kondisi `Search selesai` mungkin sudah terpenuhi.
- Kondisi `Player visible` juga menjadi true.

Jika aturan `Search selesai` diperiksa lebih dahulu, NPC bisa memutuskan kembali ke `PATROL`.

Hasilnya, NPC mengabaikan Player yang sebenarnya terlihat.

Perilaku ini terasa tidak natural dan tidak konsisten.

Dengan prioritas:

```text
Player visible
```

selalu menjadi keputusan utama.

Artinya, evaluasi kondisi dilakukan dari prioritas tertinggi ke terendah.

```text
if Player visible:
    CHASE
elif Search selesai:
    PATROL
else:
    SEARCH
```

Urutan ini memastikan kondisi yang paling penting tidak tertutup oleh kondisi lain.

Dalam konteks perilaku agent game, prioritas membuat NPC lebih **reaktif** terhadap perubahan environment.

NPC tidak lagi sekadar menjalankan state lama, tetapi menyesuaikan keputusan dengan informasi terbaru.

Hal ini penting sebelum action dieksekusi.

Keputusan yang benar akan menghasilkan perilaku yang lebih stabil dan mudah diprediksi.

### Inti yang Harus Ditekankan

- **Prioritas** menentukan urutan evaluasi kondisi pada NPC.
- Kondisi `Player visible` harus diperiksa lebih dahulu agar NPC tetap `CHASE`.
- Tanpa prioritas, NPC bisa kembali `PATROL` meskipun Player terlihat.
- Prioritas membuat behavior NPC lebih **konsisten** dan natural.

### Transisi ke Slide Berikutnya

Setelah keputusan diprioritaskan dengan benar, langkah berikutnya adalah memahami bagaimana keputusan tersebut dieksekusi melalui **Action**.

---

## Slide 040 - Action

### Narasi

**Action** adalah tahap eksekusi dari keputusan yang sudah diambil oleh agent. Dalam arsitektur perilaku game, keputusan biasanya berupa state atau perilaku, misalnya `PATROL`, `CHASE`, atau `SEARCH`. Namun keputusan itu belum mengubah posisi NPC sampai ada **action** yang menerjemahkannya menjadi perintah gerak.

Pada praktikum ini, action utama dilakukan melalui komponen `NavMeshAgent`. Komponen ini berperan sebagai penggerak berbasis pathfinding di Unity, sehingga agent dapat bergerak di atas `NavMesh` menuju target tertentu.

```text
PATROL
→ SetDestination(waypoint)

CHASE
→ SetDestination(player)

SEARCH
→ SetDestination(lastKnownPosition)
```

Dalam potongan di atas, `SetDestination` adalah perintah inti yang mengubah tujuan gerak agent.

- `PATROL` mengarahkan NPC ke `waypoint` tertentu, sehingga NPC bergerak rutin di area yang sudah ditentukan.
- `CHASE` mengarahkan NPC ke `player`, sehingga NPC mengejar pemain ketika kondisi tertentu terpenuhi.
- `SEARCH` mengarahkan NPC ke `lastKnownPosition`, sehingga NPC mencari lokasi terakhir pemain terlihat sebelum kehilangan kontak.

Urutan eksekusinya sederhana: sistem perilaku memilih state, lalu action memanggil `SetDestination` dengan target yang sesuai, kemudian `NavMeshAgent` menghitung jalur dan menggerakkan NPC. Hasil yang diharapkan adalah perilaku NPC yang konsisten: patroli tidak acak, pengejaran langsung menuju pemain, dan pencarian menuju lokasi terakhir yang diketahui.

Yang perlu dipahami mahasiswa adalah **action** bukan sekadar animasi atau perubahan label state. Action adalah jembatan antara keputusan logis dan perubahan posisi di environment. Jika action tidak benar, NPC bisa berhenti, bergerak ke titik yang salah, atau tidak merespons perubahan situasi.

### Inti yang Harus Ditekankan

- **Action** adalah eksekusi keputusan, bukan keputusan itu sendiri.
- Pada praktikum, action utama menggunakan `NavMeshAgent` dan perintah `SetDestination`.
- Setiap state memiliki target yang berbeda: `waypoint` untuk `PATROL`, `player` untuk `CHASE`, dan `lastKnownPosition` untuk `SEARCH`.
- Action yang benar membuat perilaku NPC konsisten dan dapat diamati di environment.

### Transisi ke Slide Berikutnya

Setelah action menentukan tujuan gerak, kita perlu melihat apa yang benar-benar menghasilkan perubahan di environment. Pada slide berikutnya, kita akan membahas **Actuator**, yaitu mekanisme yang menerjemahkan perintah menjadi perubahan nyata pada agent.

---

## Slide 041 - Actuator

### Narasi

Pada slide ini, kita memisahkan **actuator** dari **action**. Action adalah eksekusi keputusan, sedangkan **actuator** adalah mekanisme yang benar-benar menghasilkan perubahan di environment.

Dalam agent fisik, actuator bisa berupa motor, roda, atau lengan. Dalam game, actuator biasanya berupa komponen Unity yang mengubah state dunia, misalnya:

- `NavMeshAgent`
- `Transform`
- `Rigidbody`
- `Animator`
- weapon system

Intuisi pentingnya adalah: keputusan seperti `PATROL`, `CHASE`, atau `SEARCH` hanya menjadi perintah. Perintah itu baru berdampak ketika actuator menerapkannya. Misalnya, state `CHASE` memilih `SetDestination(player)`, tetapi yang benar-benar menggerakkan NPC adalah `NavMeshAgent`.

Pada praktikum, actuator utama adalah:

```text
Actuator utama = NavMeshAgent
```

Artinya, `NavMeshAgent` menjadi jembatan antara keputusan agent dan perubahan posisi di environment. Ketika `SetDestination` dipanggil, `NavMeshAgent` memanfaatkan pathfinding di NavMesh, lalu memperbarui gerak NPC secara bertahap. Ini penting karena mahasiswa perlu memahami bahwa action tidak selalu langsung mengubah dunia; ada mekanisme eksekusi yang mengatur kecepatan, arah, dan path.

Pemahaman ini membantu membangun arsitektur yang rapi: bagian decision memilih action, sedangkan actuator menerapkannya. Dengan pemisahan ini, perilaku NPC lebih mudah diuji, diganti, dan dikembangkan, misalnya saat menambahkan animasi, fisika, atau sistem senjata.

### Inti yang Harus Ditekankan

- **Actuator** adalah mekanisme yang menghasilkan perubahan nyata di environment.
- Dalam game, actuator dapat berupa `NavMeshAgent`, `Transform`, `Rigidbody`, `Animator`, atau weapon system.
- Pada praktikum, `NavMeshAgent` menjadi actuator utama karena menerjemahkan keputusan menjadi gerak NPC.

### Transisi ke Slide Berikutnya

Setelah memahami actuator sebagai pelaksana perubahan, kita lanjut ke arsitektur yang menghubungkan sensor, brain, dan actuator dalam satu alur perilaku NPC.

---

## Slide 042 - Sensor dan Actuator

### Narasi

Slide ini memperkenalkan **arsitektur agent** yang sederhana namun penting dalam Game Cerdas. Alih-alih menaruh semua logika dalam satu script, kita memisahkan agent menjadi tiga bagian utama: **sensor**, **brain**, dan **actuator**.

```text
SENSOR
mata NPC
    ↓
NPCSensor

BRAIN
memory + decision
    ↓
NPCBrain

ACTUATOR
gerakan NPC
    ↓
NavMeshAgent
```

Bagian pertama adalah **sensor**. Sensor bertugas membaca lingkungan dan mengubahnya menjadi informasi yang bisa digunakan oleh agent. Dalam konteks NPC, sensor bisa dianggap sebagai "mata" yang mengamati keadaan sekitar, misalnya keberadaan pemain atau perubahan kondisi lingkungan.

Bagian kedua adalah **brain**. Brain adalah pusat pemrosesan. Di sinilah agent menyimpan **memory** dan melakukan **decision making**. Memory membantu agent mengingat informasi penting, sedangkan decision menentukan apa yang harus dilakukan berdasarkan kondisi saat ini.

Bagian ketiga adalah **actuator**. Actuator adalah komponen yang mengeksekusi keputusan menjadi aksi nyata di dalam game. Pada praktikum, actuator utama adalah `NavMeshAgent`, yang mengubah keputusan "bergerak" menjadi pergerakan NPC di environment.

Pemisahan ini membuat sistem lebih mudah dipahami, lebih mudah diuji, dan lebih mudah dikembangkan. Mahasiswa perlu memahami bahwa **sensor** menyediakan input, **brain** memproses dan memutuskan, serta **actuator** menghasilkan output. Pola ini menjadi dasar bagi perilaku NPC yang lebih terstruktur, tanpa harus menulis semuanya dalam satu tempat.

### Inti yang Harus Ditekankan

- **Sensor** adalah input agent: membaca lingkungan dan mengubahnya menjadi data yang dapat diproses.
- **Brain** adalah pusat keputusan: menyimpan memory dan menentukan perilaku agent.
- **Actuator** adalah output agent: mengeksekusi keputusan menjadi aksi nyata, misalnya melalui `NavMeshAgent`.
- Arsitektur terpisah lebih mudah dibaca, di-debug, dan dikembangkan dibandingkan satu script besar.

### Transisi ke Slide Berikutnya

Setelah komponen agent sudah jelas, langkah berikutnya adalah memahami bagaimana komponen-komponen ini bekerja setiap frame melalui **update loop**.

---

## Slide 043 - Update Loop

### Narasi

Slide ini menekankan bahwa perilaku NPC tidak cukup dibangun sebagai satu fungsi yang berjalan sekali. Agent membutuhkan **update loop** agar dapat terus mengamati lingkungan, memperbarui informasi, dan memilih tindakan pada setiap frame.

Pada praktikum, alur tersebut terlihat dari dua komponen utama:

```text
NPCSensor.Update()
    ↓
DetectPlayer()

NPCBrain.Update()
    ↓
UpdateMemory()
    ↓
MakeDecision()
    ↓
ExecuteCurrentState()
```

Bagian pertama adalah sisi persepsi. `NPCSensor.Update()` dipanggil setiap frame, lalu `DetectPlayer()` memeriksa apakah pemain berada dalam jangkauan atau memenuhi kondisi tertentu. Hasilnya menjadi data baru yang bisa digunakan oleh komponen lain.

Bagian kedua adalah sisi pemrosesan. `NPCBrain.Update()` tidak langsung menghasilkan gerakan. Ia terlebih dahulu menjalankan `UpdateMemory()` untuk menyimpan atau memperbarui informasi hasil deteksi. Setelah itu, `MakeDecision()` memilih tindakan atau `state` yang sesuai berdasarkan memori tersebut.

Langkah terakhir adalah `ExecuteCurrentState()`. Fungsi ini menerjemahkan keputusan menjadi perilaku nyata yang sudah didefinisikan oleh `state`. Dengan kata lain, keputusan tidak langsung menjadi gerakan; keputusan dieksekusi melalui `state` yang sedang aktif.

Urutan ini penting karena setiap frame harus memiliki alur yang konsisten. Jika memori belum diperbarui sebelum keputusan dibuat, NPC bisa bertindak berdasarkan informasi lama. Jika eksekusi `state` dilakukan sebelum keputusan selesai, perilaku NPC bisa tidak sinkron dengan kondisi lingkungan.

Yang harus dipahami mahasiswa adalah bahwa update loop adalah "detak jantung" agent. Tanpa loop ini, NPC hanya bereaksi sekali atau tidak bereaksi sama sekali. Dengan loop yang jelas, perilaku NPC menjadi lebih mudah diuji, diperbaiki, dan dikembangkan.

### Inti yang Harus Ditekankan

- **Update loop** membuat agent terus berjalan setiap frame, bukan hanya satu kali.
- Alur praktikum: `NPCSensor` mendeteksi, `NPCBrain` memperbarui memori, membuat keputusan, lalu mengeksekusi `state`.
- Urutan `UpdateMemory()` → `MakeDecision()` → `ExecuteCurrentState()` penting agar keputusan menggunakan informasi terbaru.
- Pemisahan sensor dan brain membuat perilaku NPC lebih rapi, mudah dibaca, dan lebih mudah dikembangkan.

### Transisi ke Slide Berikutnya

Setelah melihat alur konkret pada praktikum, kita akan merangkumnya menjadi urutan konseptual yang lebih umum.

---

## Slide 044 - Update Order Konseptual

### Narasi

Slide ini menunjukkan **urutan konseptual** yang harus dipahami sebelum masuk ke implementasi. Intinya, agent game, misalnya NPC, tidak langsung bergerak; ia harus membaca lingkungan, menyimpan informasi, membuat keputusan, lalu melakukan aksi.

Urutan idealnya dapat diringkas sebagai berikut:

```text
1. Sense
2. Update Memory
3. Decide
4. Act
```

Secara lebih visual, alurnya membentuk loop:

```text
Environment
    ↓
Perception
    ↓
Memory
    ↓
Decision
    ↓
Action
    ↓
Environment berubah
```

Setiap tahap memiliki peran:

1. **Sense** — agent membaca kondisi lingkungan, misalnya posisi pemain, jarak, objek yang terlihat, atau event tertentu.
2. **Update Memory** — data hasil sensing disimpan menjadi informasi yang berguna, seperti target terakhir, ancaman, atau kondisi internal.
3. **Decide** — agent memilih `state` atau `action` berdasarkan memory dan aturan yang dimiliki, misalnya melalui aturan sederhana, state machine, atau perilaku berbasis tujuan.
4. **Act** — agent mengeksekusi keputusan, misalnya bergerak, menyerang, berhenti, atau memanggil bantuan.

Tahap **Decide** adalah titik penting karena di sinilah perilaku agent benar-benar terbentuk. Mahasiswa perlu memahami bahwa keputusan tidak muncul tiba-tiba; keputusan selalu bergantung pada hasil **Sense** dan **Update Memory** sebelumnya.

Tahap **Act** kemudian mengubah lingkungan. Karena lingkungan berubah, agent harus melakukan **Sense** lagi pada frame berikutnya. Inilah yang membuat alur menjadi loop, bukan proses sekali jalan.

Poin utama slide ini adalah **urutan sebab-akibat**: lingkungan memberi input, agent memproses melalui memory dan decision, lalu agent memberi output berupa aksi. Selama game aktif, loop ini terus berjalan.

### Inti yang Harus Ditekankan

- **Sense** adalah input dari lingkungan, bukan keputusan.
- **Memory** membuat perilaku agent konsisten dari satu frame ke frame berikutnya.
- **Decide** menghasilkan `state` atau `action` yang dipilih.
- **Act** mengubah lingkungan dan memulai siklus berikutnya.
- Urutan ini adalah dasar sebelum membahas pola populer seperti `Sense–Think–Act`.

### Transisi ke Slide Berikutnya

Setelah memahami urutan idealnya, kita akan melihat istilah populer yang sering dipakai untuk menggambarkan pola yang sama, yaitu `Sense–Think–Act`, serta kaitannya dengan komponen agent dalam praktikum.

---

## Slide 045 - Sense–Think–Act Loop

### Narasi

Slide ini memperkenalkan istilah yang paling sering dipakai saat membahas perilaku agen dalam game: **Sense–Think–Act Loop**. Istilah ini berguna karena memberi nama yang mudah diingat untuk tiga tahap utama yang terjadi berulang kali pada NPC atau agen interaktif.

```text
Sense
→ NPCSensor

Think
→ NPCBrain
   Memory + Decision

Act
→ NavMeshAgent
```

Pada tahap **Sense**, agen membaca kondisi lingkungan. Dalam praktikum, tahap ini dipetakan ke komponen `NPCSensor`. Sensor ini bertugas mengumpulkan informasi seperti jarak musuh, posisi target, atau kondisi sekitar yang relevan.

Tahap **Think** adalah proses internal agen. Komponen `NPCBrain` menjadi pusatnya, karena di dalamnya terdapat `Memory` dan `Decision`. `Memory` menyimpan informasi penting dari tahap sebelumnya, sedangkan `Decision` menentukan tindakan apa yang paling sesuai berdasarkan keadaan saat ini.

Tahap **Act** adalah eksekusi keputusan. Komponen `NavMeshAgent` biasanya digunakan untuk menjalankan gerakan atau navigasi, misalnya bergerak ke titik tertentu, mengejar target, atau kembali ke posisi awal. Dengan pemetaan ini, mahasiswa dapat melihat bahwa istilah umum **Sense–Think–Act** bukan sekadar konsep, tetapi dapat diwujudkan menjadi komponen yang jelas.

Pola ini penting karena menjadi dasar banyak arsitektur game cerdas. Selama game berjalan, ketiga tahap ini berulang: agen membaca lingkungan, memproses informasi, lalu bertindak, dan lingkungan berubah sebagai akibat dari tindakannya.

### Inti yang Harus Ditekankan

- **Sense** adalah tahap membaca lingkungan, dan dalam praktikum dapat diwakili oleh `NPCSensor`.
- **Think** adalah tahap pemrosesan internal, yang melibatkan `Memory` dan `Decision` di dalam `NPCBrain`.
- **Act** adalah tahap eksekusi, yang dapat diwakili oleh `NavMeshAgent` untuk gerakan atau navigasi.
- Loop ini berulang selama game aktif dan menjadi pola dasar perilaku agen.

### Transisi ke Slide Berikutnya

Setelah memahami nama umum **Sense–Think–Act Loop**, langkah berikutnya adalah melihat bagaimana komponen-komponen tersebut disusun menjadi arsitektur modular yang lebih rapi.

---

## Slide 046 - Modular Game AI Architecture

### Narasi

Pada slide ini kita melihat bagaimana pola **Sense–Think–Act** dapat diwujudkan sebagai **arsitektur modular**. Modular berarti satu NPC tidak dibuat sebagai satu skrip besar, tetapi dipisah menjadi beberapa komponen dengan tanggung jawab yang jelas.

Contoh struktur yang ditampilkan adalah:

```text
NPC_Guard
├── NPCSensor
├── NPCBrain
├── NavMeshAgent
└── DirectionMarker
```

Struktur ini menunjukkan bahwa `NPC_Guard` bukan satu entitas monolitik, melainkan gabungan dari beberapa bagian yang saling bekerja sama.

Peran masing-masing komponen dapat dipahami sebagai berikut:

- `NPCSensor`: bagian **perception**, yaitu komponen yang mengamati lingkungan dan mengubah informasi dunia menjadi data yang bisa diproses.
- `NPCBrain`: bagian **Think**, yaitu komponen yang menyimpan **memory**, melakukan **decision**, dan mengorkestrasi **action**.
- `NavMeshAgent`: bagian **Act** untuk **movement/navigation**, yaitu komponen yang menerjemahkan keputusan menjadi gerakan di `NavMesh`.
- `DirectionMarker`: komponen pendukung untuk menampilkan arah atau status NPC, biasanya membantu visualisasi dan debugging.

Alur datanya cukup jelas. `NPCSensor` membaca lingkungan, lalu mengirim data ke `NPCBrain`. `NPCBrain` memproses data tersebut, mengambil keputusan, dan memberikan perintah ke `NavMeshAgent`. `NavMeshAgent` kemudian mengeksekusi gerakan, misalnya menuju target, menjaga jarak, atau menghindari rintangan.

Poin penting yang harus dipahami mahasiswa adalah **pemisahan tanggung jawab**. Jika perilaku NPC ingin diubah, kita bisa fokus pada `NPCBrain`. Jika cara bergerak ingin diubah, kita bisa fokus pada `NavMeshAgent`. Jika cara NPC mengenali lingkungan ingin diubah, kita bisa fokus pada `NPCSensor`. Dengan cara ini, perubahan tidak selalu mengharuskan kita menulis ulang seluruh sistem NPC.

### Inti yang Harus Ditekankan

- **Modular** berarti fungsi perilaku NPC dipisah menjadi komponen dengan tanggung jawab yang jelas.
- `NPCSensor`, `NPCBrain`, dan `NavMeshAgent` memetakan pola **Sense–Think–Act** ke dalam struktur implementasi.
- Alur utama adalah: lingkungan → `NPCSensor` → `NPCBrain` → `NavMeshAgent` → gerakan NPC.
- `DirectionMarker` adalah komponen pendukung untuk visualisasi atau debugging, bukan pengganti logika utama.

### Transisi ke Slide Berikutnya

Selanjutnya, kita akan melihat mengapa pemisahan modular ini penting dalam pengembangan perilaku NPC, terutama untuk kemudahan pengembangan, pengujian, dan penggunaan ulang komponen.

---

## Slide 047 - Mengapa Modular?

### Narasi

Pada slide sebelumnya kita melihat bahwa `NPC_Guard` dapat dipisah menjadi `NPCSensor`, `NPCBrain`, `NavMeshAgent`, dan `DirectionMarker`. Pertanyaan penting sekarang adalah: mengapa pemisahan ini perlu dilakukan? Jawabannya sederhana: arsitektur modular membuat sistem perilaku game lebih mudah dikelola, dikembangkan, dan diuji.

Bayangkan jika seluruh perilaku NPC ditulis dalam satu script besar. Script itu harus membaca input sensor, menyimpan memori, memutuskan state, menghitung arah, dan menggerakkan karakter. Ketika satu bagian berubah, seluruh script menjadi berisiko. Sebaliknya, jika setiap fungsi berada pada modul yang jelas, perubahan pada satu bagian tidak langsung mengganggu bagian lain.

Keuntungan utama dari arsitektur modular adalah sebagai berikut:

- **Kode lebih mudah dibaca** karena setiap modul memiliki fokus yang jelas.
- **Sensor dapat diganti** tanpa mengubah logika keputusan secara keseluruhan.
- **Brain dapat dikembangkan** untuk mendukung `FSM`, behavior tree, atau strategi keputusan lain.
- **Movement dapat diganti** sesuai kebutuhan, misalnya dari `NavMeshAgent` ke sistem steering atau movement lain.
- **Debug lebih mudah** karena mahasiswa dapat memeriksa satu bagian pada satu waktu.
- **Komponen dapat dipakai ulang** untuk beberapa jenis NPC.
- **Pembagian tugas tim lebih mudah** karena setiap pengembang dapat fokus pada modul tertentu.

Contoh paling praktis adalah `NPCSensor`. Komponen ini dapat dipakai oleh guard, merchant, patrol drone, atau NPC lain yang membutuhkan persepsi lingkungan. Selama `NPCSensor` menghasilkan data yang konsisten, `NPCBrain` tidak perlu tahu apakah data itu berasal dari raycast, trigger, atau sistem deteksi lain.

Dengan cara ini, modularitas membantu mahasiswa memahami bahwa perilaku NPC bukan sekadar satu script yang membuat karakter bergerak. Perilaku NPC adalah sistem yang terdiri dari **perception**, **decision**, **action**, dan **movement**. Pemisahan ini membuat desain lebih rapi dan memungkinkan perilaku NPC dikembangkan secara bertahap.

Sebelum lanjut, hal yang perlu dipahami adalah: modular bukan hanya memisahkan file atau komponen. Modular berarti setiap bagian memiliki peran yang jelas, mudah dihubungkan, dan dapat diganti tanpa merusak keseluruhan sistem.

### Inti yang Harus Ditekankan

- Modularitas membuat **perception**, **decision**, dan **movement** dapat dikembangkan secara terpisah.
- Komponen seperti `NPCSensor` dapat dipakai ulang oleh berbagai jenis NPC.
- Arsitektur modular memudahkan **debug**, **penggantian komponen**, dan **pembagian tugas tim**.

### Transisi ke Slide Berikutnya

Setelah memahami manfaat modular, langkah berikutnya adalah memastikan setiap modul benar-benar memiliki tanggung jawab yang jelas. Prinsip ini akan dibahas pada slide berikutnya tentang **Separation of Responsibility**.

---

## Slide 048 - Separation of Responsibility

### Narasi

Setelah slide sebelumnya menunjukkan keuntungan modular, kita masuk ke prinsip yang membuatnya benar-benar berguna: **separation of responsibility**. Prinsip ini sederhana, tetapi sangat menentukan kualitas arsitektur perilaku NPC.

```text
Satu module
→ satu tanggung jawab utama
```

Artinya, setiap komponen harus memiliki satu tanggung jawab utama. Jika satu komponen mulai mengerjakan tugas komponen lain, kode akan cepat sulit dibaca, sulit diuji, dan sulit dikembangkan.

```text
NPCSensor
tidak memutuskan PATROL atau CHASE.

NPCBrain
tidak menghitung Raycast.

NavMeshAgent
tidak menentukan state.
```

Contoh pada slide ini penting untuk dipahami. `NPCSensor` bertugas mengamati lingkungan, misalnya apakah pemain terlihat atau berapa jaraknya. Namun sensor tidak boleh memutuskan apakah NPC harus `PATROL` atau `CHASE`. Keputusan itu adalah wilayah `NPCBrain`. Sebaliknya, `NPCBrain` tidak perlu menghitung detail `Raycast`; ia cukup memakai hasil yang diberikan sensor. `NavMeshAgent` juga tidak menentukan `state`; ia hanya mengeksekusi gerakan berdasarkan perintah yang diterima.

Pembagian ini memberi intuisi praktis yang jelas. Sensor seperti mata dan telinga NPC, brain seperti pusat perencanaan, dan `NavMeshAgent` seperti kaki yang menjalankan perintah. Mata tidak memilih strategi, kaki tidak memutuskan tujuan, dan pusat perencanaan tidak perlu tahu cara kerja detail sensor.

Jika tanggung jawab bercampur, perubahan kecil bisa berdampak luas. Misalnya, jika logika deteksi pemain diubah, kita harus memeriksa banyak tempat karena sensor, keputusan, dan gerakan saling tercampur. Dengan **separation of responsibility**, kita bisa mengganti sensor, menambah jenis NPC, atau memperbaiki gerakan tanpa merusak seluruh sistem.

Sebelum lanjut, mahasiswa perlu terbiasa bertanya: modul ini seharusnya menyimpan data apa, keputusan apa yang boleh diambil, dan keputusan apa yang harus didelegasikan ke modul lain. Kebiasaan ini akan membuat arsitektur lebih mudah dilacak dan lebih mudah dikembangkan.

### Inti yang Harus Ditekankan

- **Satu module** harus memiliki **satu tanggung jawab utama**.
- `NPCSensor` hanya mengumpulkan data lingkungan, tidak memilih `PATROL` atau `CHASE`.
- `NPCBrain` hanya membuat keputusan perilaku, tidak menangani detail sensor seperti `Raycast`.
- `NavMeshAgent` hanya mengeksekusi gerakan, tidak menentukan `state`.

### Transisi ke Slide Berikutnya

Dengan prinsip tanggung jawab yang terpisah, kita sudah siap melihat bagaimana data bergerak antar komponen. Pada slide berikutnya, kita akan memetakan alur data dari lingkungan, sensor, brain, hingga gerakan.

---

## Slide 049 - Data Flow Modular AI

### Narasi

Setelah kita memisahkan tanggung jawab antar komponen, langkah berikutnya adalah melihat bagaimana **alur data** bergerak dari lingkungan menuju gerakan NPC.

Slide ini menunjukkan **alur utama** arsitektur agen game yang modular:

```text
Environment
    ↓
NPCSensor
    ↓
CanSeePlayer
    ↓
NPCBrain
    ↓
Current State
    ↓
NavMeshAgent
    ↓
Movement
    ↓
Environment
```

Intuisi praktisnya sederhana: lingkungan memberikan keadaan, sensor mengubah keadaan menjadi **fakta sederhana**, otak mengambil **keputusan**, dan agen gerak melakukan **eksekusi**.

Alurnya dapat dibaca sebagai berikut:

1. `Environment` berisi posisi player, posisi NPC, dan kondisi dunia.
2. `NPCSensor` mengamati lingkungan dan menghasilkan informasi sederhana.
3. Hasil sensor diringkas menjadi `CanSeePlayer`, yaitu fakta biner: NPC melihat player atau tidak.
4. `NPCBrain` menerima fakta tersebut, lalu membandingkannya dengan **memori internal**.
5. `NPCBrain` menghasilkan `Current State`, yaitu perilaku yang sedang aktif.
6. `NavMeshAgent` menerjemahkan state menjadi tujuan atau gerakan.
7. `Movement` mengubah posisi NPC di dalam `Environment`, sehingga siklus kembali ke awal.

Poin penting di sini adalah `CanSeePlayer` bukan **keputusan**. Ia hanya **informasi sensor**.

Keputusan perilaku ada di `NPCBrain`.

`NPCBrain` juga menyimpan memori penting, misalnya:

- `lastKnownPosition`
- `searchTimer`

Memori ini berguna karena sensor hanya melihat kondisi saat ini, sedangkan otak perlu mengingat informasi sebelumnya.

Dengan `lastKnownPosition`, NPC dapat menuju posisi terakhir player terlihat.

Dengan `searchTimer`, NPC dapat menentukan berapa lama ia mencari sebelum mengubah perilaku.

Arsitektur ini menjadi mudah dilacak karena setiap panah memiliki **makna tunggal**.

Jika NPC tidak bergerak, kita bisa memeriksa apakah `CanSeePlayer` benar, apakah `Current State` sesuai, atau apakah `NavMeshAgent` menerima tujuan yang valid.

Jika NPC lupa posisi player, kita bisa memeriksa `lastKnownPosition` di `NPCBrain`.

Jika sensor salah, kita tidak perlu mengubah logika state, karena tanggung jawabnya sudah terpisah.

Sebelum lanjut ke perilaku berikutnya, mahasiswa perlu memahami bahwa `Current State` adalah **output keputusan**, bukan eksekusi gerak.

`NavMeshAgent` adalah **eksekutor gerak**, sedangkan `NPCBrain` adalah pengambil keputusan.

### Inti yang Harus Ditekankan

- **Alur data** bergerak dari `Environment` ke `NPCSensor`, lalu ke `NPCBrain`, dan akhirnya ke `NavMeshAgent`.
- `CanSeePlayer` adalah **fakta hasil sensor**, bukan keputusan perilaku.
- `NPCBrain` menyimpan **memori internal** seperti `lastKnownPosition` dan `searchTimer` untuk mendukung perilaku yang lebih konsisten.
- `Current State` menentukan perilaku aktif, sedangkan `NavMeshAgent` menerjemahkannya menjadi gerakan.
- Modularitas membuat sistem lebih mudah diuji, dilacak, dan diperbaiki.

### Transisi ke Slide Berikutnya

Dengan alur data ini sudah jelas, kita dapat masuk ke perilaku pertama yang biasanya menjadi default, yaitu state `PATROL`.

---

## Slide 050 - PATROL State

### Narasi

Pada slide ini kita membahas salah satu state penting dalam arsitektur AI NPC, yaitu **PATROL State**. State ini menggambarkan perilaku dasar NPC ketika tidak ada kondisi khusus yang memicu perilaku lain.

Intuisi sederhananya adalah NPC tidak hanya diam di tempat. Saat berada dalam state **PATROL**, NPC akan bergerak dari satu **Patrol Point** ke titik berikutnya. Perilaku ini membuat NPC terasa lebih hidup dan memberikan kesan bahwa dunia game memiliki aktivitas yang terus berjalan.

```csharp
agent.SetDestination(
    patrolPoints[patrolIndex].position
);
```

Potongan kode di atas menunjukkan action utama dari state **PATROL**. Di sini, `agent` biasanya merujuk pada komponen `NavMeshAgent` di Unity. Fungsi `SetDestination` digunakan untuk memberi tahu agent ke mana NPC harus bergerak. Nilai yang dikirim adalah posisi waypoint yang sedang dipilih, yaitu `patrolPoints[patrolIndex].position`.

Secara eksekusi, alurnya cukup sederhana:

1. NPC berada dalam state **PATROL**.
2. Sistem memilih satu waypoint berdasarkan `patrolIndex`.
3. Posisi waypoint tersebut diberikan ke `agent.SetDestination`.
4. `NavMeshAgent` kemudian menghitung dan menjalankan pergerakan NPC menuju titik tujuan.

Hasil yang diharapkan adalah NPC bergerak secara otomatis menuju titik patroli yang ditentukan. Jika waypoint sudah tercapai, sistem kemudian dapat memilih waypoint berikutnya, meskipun mekanisme pemilihan waypoint berikutnya akan dibahas lebih lanjut.

Slide ini juga menyebutkan:

```text
Patrol Speed = 2
```

Nilai ini menunjukkan kecepatan pergerakan NPC saat melakukan patroli. Dalam implementasi Unity, nilai seperti ini biasanya mengatur kecepatan `NavMeshAgent`, misalnya melalui properti `agent.speed`. Kecepatan ini penting karena memengaruhi bagaimana NPC terlihat bergerak: terlalu cepat bisa terasa tidak natural, sedangkan terlalu lambat bisa membuat NPC terasa pasif.

Peran **PATROL State** sangat penting dalam desain perilaku NPC. State ini menjadi **behavior default**, artinya perilaku standar yang dijalankan NPC ketika tidak ada kondisi lain yang lebih prioritas. Dalam arsitektur berbasis state machine, state seperti ini menjadi fondasi sebelum NPC beralih ke perilaku lain, misalnya mengejar, berhenti, atau mencari posisi terakhir pemain.

Sebelum lanjut, mahasiswa perlu memahami bahwa **PATROL** bukan sekadar perintah bergerak. Ia adalah state yang memiliki action, parameter, dan peran dalam alur perilaku NPC. Dengan memahami state ini, kita dapat melihat bagaimana perilaku sederhana dibangun dari komponen yang jelas: waypoint, agent, destination, dan kecepatan.

### Inti yang Harus Ditekankan

- **PATROL State** adalah perilaku default NPC untuk bergerak antar **Patrol Point**.
- Action utamanya adalah `agent.SetDestination(patrolPoints[patrolIndex].position)`.
- `patrolPoints` menyimpan daftar titik patroli, sedangkan `patrolIndex` menentukan waypoint yang sedang dipilih.
- `Patrol Speed = 2` mengatur kecepatan pergerakan NPC saat patroli.
- State ini menjadi dasar perilaku NPC sebelum beralih ke state lain.

### Transisi ke Slide Berikutnya

Setelah memahami apa yang dilakukan oleh **PATROL State**, kita akan melanjutkan ke mekanisme **Waypoint Patrol**, yaitu bagaimana NPC berpindah dari satu waypoint ke waypoint berikutnya secara berurutan.

---

## Slide 051 - Waypoint Patrol

### Narasi

Slide ini memperjelas bagaimana **Waypoint Patrol** bekerja. Intuisinya sederhana: NPC tidak hanya diam di satu titik, tetapi berjalan menyusuri beberapa titik yang sudah ditentukan, lalu mengulanginya secara berurutan.

```text
Point1
   ↓
Point2
   ↓
Point3
   ↓
Point4
   ↓
Point1
```

Diagram ini menunjukkan **urutan waypoint**. NPC bergerak dari `Point1` ke `Point2`, kemudian ke `Point3`, `Point4`, dan kembali ke `Point1`. Pola ini membuat gerakan NPC terasa lebih hidup daripada hanya bolak-balik di dua titik.

Dalam implementasi, NPC biasanya memiliki **current waypoint** atau indeks waypoint aktif. Setiap frame, NPC bergerak menuju waypoint tersebut. Setelah cukup dekat, sistem memeriksa kondisi:

```text
remainingDistance <= waypointTolerance
```

`waypointTolerance` adalah ambang batas jarak yang dianggap “sudah sampai”. Nilai ini penting karena NPC jarang berhenti tepat pada koordinat waypoint. Jika toleransi terlalu kecil, NPC bisa terlihat berhenti terlambat atau bergetar. Jika terlalu besar, NPC bisa langsung berpindah ke waypoint berikutnya sebelum benar-benar sampai.

Prosesnya dapat dipahami sebagai berikut:

1. NPC memilih waypoint aktif.
2. NPC bergerak menuju waypoint tersebut.
3. Sistem memeriksa `remainingDistance`.
4. Jika `remainingDistance <= waypointTolerance`, waypoint dianggap selesai.
5. NPC berpindah ke waypoint berikutnya.
6. Setelah `Point4`, NPC kembali ke `Point1` sehingga patroli menjadi siklus.

Yang perlu dipahami mahasiswa adalah **waypoint patrol** bukan sekadar daftar titik, tetapi **urutan perilaku** yang dikendalikan oleh kondisi jarak. Konsep ini menjadi dasar perilaku NPC yang lebih kompleks, seperti penjagaan area, patroli keamanan, atau pergerakan karakter di lingkungan game.

### Inti yang Harus Ditekankan

- **Waypoint** adalah titik-titik tujuan yang disusun menjadi urutan patroli.
- NPC berpindah waypoint ketika `remainingDistance <= waypointTolerance`.
- `waypointTolerance` menentukan seberapa dekat NPC harus berada sebelum dianggap sampai.
- Pola `Point1 → Point2 → Point3 → Point4 → Point1` membuat patroli bersifat siklik.
- Konsep ini menghubungkan pergerakan NPC dengan logika perilaku, bukan hanya animasi atau posisi.

### Transisi ke Slide Berikutnya

Selanjutnya kita akan melihat mengapa `remainingDistance` lebih tepat digunakan untuk menentukan NPC sudah sampai atau belum, terutama karena pergerakan NPC mengikuti path, bukan hanya jarak lurus.

---

## Slide 052 - NavMeshAgent.remainingDistance

### Narasi

Pada slide ini kita fokus pada properti `remainingDistance` dari `NavMeshAgent`. Properti ini menunjukkan **jarak path yang masih harus ditempuh** oleh agen menuju destination yang sedang aktif.

Artinya, nilai ini bukan jarak lurus dari posisi agen ke target, melainkan sisa panjang jalur yang sudah dihitung oleh sistem navigasi.

```csharp
if (!agent.pathPending &&
    agent.remainingDistance <= waypointTolerance)
{
    // pindah waypoint
}
```

Dalam potongan kode di atas, ada dua kondisi penting.

- `!agent.pathPending` memastikan path sudah selesai dihitung.
- `agent.remainingDistance <= waypointTolerance` memastikan agen sudah cukup dekat dengan destination berdasarkan jalur navigasi.

Urutan eksekusinya dapat dipahami sebagai berikut.

1. Agen memeriksa apakah path sedang diproses.
2. Jika path sudah siap, agen memeriksa sisa jarak path.
3. Jika sisa jarak berada di bawah `waypointTolerance`, agen dianggap sampai.
4. Sistem kemudian dapat memilih waypoint berikutnya.

Dengan cara ini, perilaku patrol menjadi lebih stabil karena keputusan "sampai" mengikuti jalur yang benar-benar akan ditempuh.

Mengapa ini lebih baik daripada menghitung jarak lurus? Karena `NavMeshAgent` bergerak mengikuti **path di NavMesh**, bukan garis lurus. Jika ada hambatan di lingkungan, jarak lurus bisa terlihat kecil, tetapi jarak path masih panjang.

Sebaliknya, jika path belum selesai dihitung, `remainingDistance` belum dapat diandalkan. Karena itu, pengecekan `pathPending` penting agar agen tidak membuat keputusan terlalu dini.

Sebelum lanjut, mahasiswa perlu memahami bahwa `remainingDistance` adalah ukuran **progress perjalanan di sepanjang path**, bukan posisi spasial biasa. Pemahaman ini penting untuk membuat NPC yang sampai dengan benar, terutama ketika lingkungan game memiliki banyak hambatan.

### Inti yang Harus Ditekankan

- `remainingDistance` adalah sisa jarak **path**, bukan jarak lurus.
- `pathPending` harus dicek agar keputusan diambil setelah path siap.
- `waypointTolerance` menentukan ambang batas agen dianggap sampai.
- Pendekatan ini membuat perilaku NPC lebih konsisten dengan hasil pathfinding.

### Transisi ke Slide Berikutnya

Setelah agen mampu menentukan kapan ia benar-benar sampai, kita lanjut ke state `CHASE`, yaitu perilaku mengejar target.

---

## Slide 053 - CHASE State

### Narasi

Pada slide ini kita membahas **CHASE State**, yaitu state di mana NPC beralih dari perilaku netral atau patrol menjadi mode mengejar pemain. Intuisi sederhananya: NPC “melihat” pemain, lalu tujuan gerakannya berubah menjadi posisi pemain.

Kondisi aktivasi state ini sangat sederhana:

```text
sensor.CanSeePlayer == true
```

`sensor.CanSeePlayer` adalah hasil dari sistem persepsi NPC. Nilai `true` berarti pemain berada dalam jangkauan sensor, misalnya dalam garis pandang atau area deteksi yang telah ditentukan.

Saat kondisi terpenuhi, NPC melakukan action utama:

```csharp
agent.SetDestination(
    sensor.Player.position
);
```

Perintah `SetDestination` memberi tahu `NavMeshAgent` bahwa target baru adalah posisi transform pemain. Karena `NavMeshAgent` bekerja berdasarkan path di NavMesh, NPC tidak bergerak lurus secara buta, tetapi mengikuti jalur yang valid di lingkungan game.

Poin penting berikutnya adalah bahwa destination ini diperbarui secara terus-menerus selama CHASE aktif. Artinya, setiap kali posisi pemain berubah, NPC dapat memperbarui targetnya sehingga NPC tetap mengejar, bukan hanya menuju posisi lama.

Untuk mendukung perilaku mengejar, kecepatan NPC dinaikkan:

```text
Chase Speed = 4
```

Nilai ini lebih tinggi daripada **Patrol Speed**, sehingga NPC terlihat lebih agresif dan responsif saat pemain terlihat. Perbedaan kecepatan ini membantu menciptakan kontras perilaku: saat patrol NPC bergerak santai, saat chase NPC mengejar.

Dalam konteks **Finite State Machine**, CHASE adalah state yang aktif berdasarkan kondisi sensor. Selama `sensor.CanSeePlayer` masih `true`, NPC tetap berada di CHASE. Jika kondisi berubah, state lain dapat diambil alih, misalnya state pencarian.

Sebelum lanjut, mahasiswa perlu memahami bahwa CHASE bukan sekadar “bergerak ke pemain”. CHASE adalah kombinasi antara **perception**, **decision**, dan **movement**: sensor mendeteksi pemain, state memilih perilaku mengejar, lalu `NavMeshAgent` mengeksekusi gerak melalui path.

### Inti yang Harus Ditekankan

- **CHASE State** aktif ketika `sensor.CanSeePlayer == true`.
- Action utamanya adalah `agent.SetDestination(sensor.Player.position)`.
- Destination diperbarui terus selama NPC tetap dalam state CHASE.
- `Chase Speed = 4` membuat NPC lebih cepat daripada saat patrol.
- CHASE menunjukkan pola dasar NPC yang reaktif: deteksi pemain, lalu mengejar melalui pathfinding.

### Transisi ke Slide Berikutnya

Jika pemain tidak lagi terlihat setelah NPC sempat mengejar, NPC tidak langsung berhenti. Pada slide berikutnya kita akan melihat bagaimana NPC beralih ke **SEARCH State** untuk menuju posisi terakhir pemain terlihat.

---

## Slide 054 - SEARCH State

### Narasi

**SEARCH State** adalah state yang membuat NPC tetap “mencari” setelah kehilangan kontak dengan Player. State ini penting karena NPC tidak langsung kembali ke perilaku netral begitu Player hilang dari pandangan.

Secara konseptual, SEARCH adalah transisi dari **CHASE** ke perilaku investigasi. Kondisi utamanya adalah:

- NPC sebelumnya berada di state `CHASE`.
- `sensor.CanSeePlayer` menjadi `false`.
- NPC memiliki `lastKnownPosition` yang valid.

`lastKnownPosition` adalah memori sederhana dari posisi terakhir Player terlihat. Nilai ini biasanya disimpan saat NPC masih melihat Player, misalnya saat NPC berada di state `CHASE`.

Action pada state ini sederhana:

```csharp
agent.SetDestination(
    lastKnownPosition
);
```

Perintah `agent.SetDestination(...)` memberi tahu sistem navigasi `agent` untuk bergerak menuju titik `lastKnownPosition`. Dengan demikian, NPC akan menuju lokasi terakhir Player terlihat, bukan diam di tempat atau langsung kembali ke rute patroli.

Intuisi praktisnya seperti penjaga yang mengejar pemain, lalu kehilangan jejak. Penjaga itu akan pergi ke tempat terakhir melihat pemain, karena kemungkinan besar pemain berada di sekitar area tersebut.

Dalam arsitektur **Finite State Machine**, SEARCH berfungsi sebagai state perantara antara `CHASE` dan perilaku pencarian yang lebih lanjut. State ini menjaga konsistensi perilaku NPC: NPC tetap responsif terhadap informasi terakhir yang dimilikinya.

Sebelum lanjut, mahasiswa perlu memahami bahwa `lastKnownPosition` adalah data penting yang menentukan kualitas perilaku NPC. Jika data ini tidak diperbarui dengan benar, NPC bisa menuju titik yang tidak relevan atau tidak bergerak sama sekali.

### Inti yang Harus Ditekankan

- **SEARCH** aktif setelah `CHASE` ketika Player tidak lagi terlihat.
- `lastKnownPosition` adalah posisi terakhir Player yang diketahui NPC.
- Action utama adalah `agent.SetDestination(lastKnownPosition)`.
- SEARCH membuat NPC bergerak menuju lokasi terakhir Player terlihat, bukan langsung berhenti atau kembali ke perilaku awal.

### Transisi ke Slide Berikutnya

Selanjutnya kita akan melihat bahwa SEARCH tidak hanya berarti NPC bergerak ke `lastKnownPosition`, tetapi juga memiliki perilaku lanjutan setelah sampai di lokasi tersebut.

---

## Slide 055 - SEARCH bukan Sekadar Diam

### Narasi

Pada slide ini, kita perlu meluruskan satu miskonsepsi umum: **SEARCH** bukan berarti NPC hanya berdiri diam menunggu. Dalam arsitektur perilaku NPC, **SEARCH** adalah state aktif yang memiliki tujuan, durasi, dan kondisi keluar.

Perilaku ini biasanya muncul setelah NPC kehilangan kontak dengan Player. Karena NPC masih menyimpan `lastKnownPosition`, ia tidak langsung kembali ke rutinitas. Ia melakukan pencarian terbatas di sekitar lokasi terakhir Player terlihat.

Alur perilaku **SEARCH** dapat dibaca sebagai berikut:

```text
Menuju lastKnownPosition
        ↓
Sampai tujuan
        ↓
Tunggu selama searchDuration
        ↓
Jika Player tidak ditemukan
        ↓
PATROL
```

Urutan prosesnya penting:

1. NPC bergerak menuju `lastKnownPosition`.
2. Setelah sampai, NPC tidak langsung kembali ke `PATROL`.
3. NPC menunggu selama `searchDuration`.
4. Jika Player tidak ditemukan selama durasi itu, NPC kembali ke `PATROL`.

Bagian penting dari perilaku ini adalah `searchDuration`. Parameter ini menentukan seberapa lama NPC tetap “curiga” setelah kehilangan Player. Jika nilainya terlalu pendek, NPC akan cepat kembali ke rutinitas. Jika nilainya terlalu panjang, NPC bisa terasa terlalu waspada atau sulit ditebak oleh Player.

Jika Player muncul kembali selama **SEARCH**, NPC tidak perlu menunggu sampai `searchDuration` habis. Perilaku berubah langsung ke **CHASE**:

```text
SEARCH
   ↓
CHASE
```

Artinya, **SEARCH** adalah state transisi yang sensitif terhadap kondisi lingkungan. Ia bukan state diam, tetapi state keputusan: NPC masih mencari, tetapi juga siap berubah perilaku jika Player terlihat lagi.

Sebelum lanjut, mahasiswa perlu memahami tiga hal: **SEARCH** memiliki tujuan spasial, memiliki batas waktu, dan memiliki dua jalur keluar utama, yaitu kembali ke `PATROL` atau beralih ke `CHASE`.

### Inti yang Harus Ditekankan

- **SEARCH** bukan idle; NPC tetap bergerak dan menunggu dengan tujuan tertentu.
- `lastKnownPosition` menjadi acuan spasial, sedangkan `searchDuration` menjadi acuan waktu.
- State **SEARCH** memiliki dua transisi penting: ke `PATROL` jika Player tidak ditemukan, dan ke `CHASE` jika Player terlihat kembali.

### Transisi ke Slide Berikutnya

Setelah memahami perilaku **SEARCH** sebagai state aktif, kita akan melihat seluruh hubungan antar state dalam satu diagram transisi.

---

## Slide 056 - State Transition Diagram

### Narasi

Slide ini menampilkan **State Transition Diagram** untuk perilaku NPC sederhana. Diagram ini penting karena menunjukkan bagaimana NPC berpindah dari satu mode perilaku ke mode perilaku lain berdasarkan kondisi yang terjadi di game.

```text
                   Player terlihat
          ┌───────────────────────────┐
          │                           ▼
       PATROL                      CHASE
          ▲                           │
          │                           │ Player hilang
          │                           ▼
          └─────────────────────── SEARCH
              Search timeout         │
                                     │ Player terlihat
                                     └────────→ CHASE
```

Dalam diagram ini, ada tiga state utama:

- `PATROL`: state default ketika NPC tidak sedang mengejar atau mencari player.
- `CHASE`: state aktif ketika player terlihat dan NPC berusaha mengejar.
- `SEARCH`: state aktif ketika player hilang dan NPC mencari di area terakhir kali player terlihat.

Transisi antar state terjadi karena adanya kondisi tertentu:

1. Dari `PATROL` ke `CHASE` jika `Player terlihat`.
2. Dari `CHASE` ke `SEARCH` jika `Player hilang`.
3. Dari `SEARCH` ke `PATROL` jika `Search timeout` terpenuhi.
4. Dari `SEARCH` ke `CHASE` jika `Player terlihat` kembali.

Perhatikan bahwa diagram ini menggambarkan **decision architecture** dari NPC. Artinya, perilaku NPC tidak hanya ditentukan oleh satu aksi, tetapi oleh struktur keputusan yang mengatur kapan NPC harus berpindah mode.

Dari sisi implementasi, diagram ini memberi tahu kita apa yang harus dicek setiap frame. Sistem NPC perlu memantau kondisi seperti visibilitas player, keberadaan target, dan timer pencarian. Jika kondisi terpenuhi, NPC melakukan transisi ke state berikutnya.

Hal penting yang harus dipahami adalah perbedaan antara **state** dan **transition**.

- **State** adalah mode perilaku NPC, misalnya `PATROL`, `CHASE`, atau `SEARCH`.
- **Transition** adalah aturan perpindahan antar state.
- **Condition** adalah input keputusan yang memicu transisi, misalnya `Player terlihat` atau `Search timeout`.

Dengan memahami diagram ini, mahasiswa dapat melihat bahwa NPC yang “cerdas” tidak selalu membutuhkan sistem yang sangat rumit. Pada tahap awal, perilaku yang konsisten dan mudah dibaca sudah sangat penting.

### Inti yang Harus Ditekankan

- **State Transition Diagram** menggambarkan aturan perpindahan perilaku NPC.
- Setiap state mewakili mode perilaku, seperti `PATROL`, `CHASE`, dan `SEARCH`.
- Transisi dipicu oleh kondisi, bukan hanya waktu atau gerakan.
- Diagram ini membantu memahami **decision architecture** sebelum masuk ke implementasi kode.

### Transisi ke Slide Berikutnya

Setelah aturan transisi dipahami, langkah berikutnya adalah melihat bagaimana transisi tersebut dikelola secara terpusat melalui fungsi `ChangeState()`.

---

## Slide 057 - ChangeState()

### Narasi

Pada slide ini kita masuk ke mekanisme praktis dari **state transition** yang sudah kita lihat pada diagram sebelumnya. Jika diagram menunjukkan *kapan* NPC berpindah state, maka di sini kita membahas *bagaimana* perpindahan itu dikelola dalam kode.

Dalam arsitektur **Finite State Machine**, perpindahan state sebaiknya tidak ditulis langsung di banyak tempat. Misalnya, satu state memanggil state lain, lalu state lain memanggil state lain lagi. Jika dibiarkan, logika transisi akan tersebar dan sulit dipelihara.

Karena itu, transisi dikelola oleh fungsi:

```csharp
ChangeState(newState);
```

Fungsi ini menjadi **titik pusat** untuk mengganti state NPC.

Tujuan utamanya adalah:

- **mencegah kode transition tersebar** di banyak state,
- **mencatat previous state** sebelum state berubah,
- **mencetak `Debug.Log`** agar perpindahan state mudah dipantau,
- **menjalankan logic saat state berubah**, misalnya inisialisasi perilaku baru atau pembersihan perilaku lama.

Dengan pendekatan ini, setiap perpindahan state memiliki jalur yang sama. Misalnya:

```text
Patrol -> Chase
Chase -> Search
Search -> Patrol
```

Artinya, ketika NPC berpindah dari `Patrol` ke `Chase`, bukan hanya nilai state yang berubah, tetapi juga ada proses terkontrol di balik perubahan tersebut.

Secara praktis, mahasiswa perlu memahami bahwa `ChangeState(newState)` adalah **gerbang transisi** dalam sistem state NPC. Ia membantu menjaga perilaku NPC tetap konsisten, mudah di-debug, dan lebih mudah dikembangkan.

### Inti yang Harus Ditekankan

- **`ChangeState(newState)`** adalah fungsi terpusat untuk mengelola perpindahan state.
- Fungsi ini membantu mencegah logika transisi tersebar di banyak tempat.
- Selain mengganti state, `ChangeState()` juga dapat mencatat **previous state**, mencetak log, dan menjalankan logika saat state berubah.
- Pola ini penting untuk NPC yang menggunakan **FSM**, karena transisi state harus terkontrol dan mudah dilacak.

### Transisi ke Slide Berikutnya

Setelah memahami bahwa `ChangeState()` menjadi pusat transisi, kita akan melihat salah satu bagian penting di dalamnya, yaitu bagaimana **`previousState`** disimpan dan mengapa nilai itu berguna untuk memahami perilaku NPC.

---

## Slide 058 - previousState

### Narasi

Setelah transisi state dikelola oleh `ChangeState(newState)`, ada satu bagian kecil yang membuat perilaku agent menjadi lebih mudah dibaca: `previousState`.

Variabel ini menyimpan **state sebelumnya** sebelum agent berpindah. Dengan kata lain, `previousState` memberi konteks pada perpindahan, bukan hanya menunjukkan state tujuan.

Bayangkan sebuah NPC guard yang bergerak dari mode `Patrol` ke mode `Chase`. Jika sistem hanya mencatat `Chase`, kita tahu agent sedang mengejar, tetapi tidak tahu dari mana ia datang. Dengan `previousState`, sistem dapat mencatat bahwa agent sebelumnya berada di `Patrol`.

Contoh log yang sederhana dapat ditulis seperti ini:

```text
NPC_Guard: Patrol -> Chase
```

Pada log tersebut, `NPC_Guard` adalah identitas agent, `Patrol` adalah state asal, dan `Chase` adalah state tujuan. Pola ini membuat alur perilaku agent lebih mudah diikuti.

Manfaat utama `previousState` adalah:

- **debug transisi**, karena kita dapat melacak urutan perpindahan state;
- **analisis behavior**, karena pola asal dan tujuan state dapat diamati;
- **mengetahui asal state**, sehingga logika berikutnya bisa membedakan konteks;
- **pengembangan lebih lanjut**, misalnya untuk mengatur perilaku khusus setelah state tertentu.

Dalam arsitektur state machine, `previousState` bukan pengganti `ChangeState(newState)`. Ia bekerja sebagai informasi tambahan yang membuat transisi menjadi lebih informatif dan lebih mudah dianalisis.

Sebelum lanjut, mahasiswa perlu memahami bahwa perilaku agent tidak hanya ditentukan oleh state saat ini, tetapi juga oleh **dari mana agent berpindah**.

### Inti yang Harus Ditekankan

- `previousState` menyimpan state sebelum transisi terjadi.
- Variabel ini membantu membaca alur perilaku agent, misalnya `Patrol -> Chase`.
- Manfaat utamanya adalah debug, analisis behavior, dan pengembangan logika lanjutan.
- `previousState` melengkapi mekanisme `ChangeState(newState)`, bukan menggantikan fungsi transisi.

### Transisi ke Slide Berikutnya

Setelah agent dapat berpindah state dengan konteks yang jelas, langkah berikutnya adalah bagaimana agent bergerak di lingkungan game. Di sinilah konsep `NavMesh` akan dibahas.

---

## Slide 059 - NavMesh

### Narasi

**NavMesh** adalah representasi digital dari area yang dapat dilalui oleh agent dalam game. Intuisi sederhananya, NavMesh memberi tahu sistem navigasi, “area mana yang boleh dimasuki NPC”. Dengan adanya NavMesh, NPC tidak lagi bergerak lurus menembus dinding atau area yang seharusnya tidak bisa dilalui.

Tanpa NavMesh, pergerakan agent sering kali tidak realistis. Agent mungkin mencoba menuju `destination` dengan garis lurus, lalu tersangkut di dinding atau melewati area non-walkable. NavMesh membantu agent:

- mencari jalur yang valid,
- menghindari area non-walkable,
- bergerak menuju `destination` secara lebih natural.

Dalam konteks perilaku agent, NavMesh menjadi dasar penting untuk **pathfinding** dan pergerakan NPC. Agent tidak perlu menghitung seluruh lingkungan secara manual; ia cukup bekerja pada area navigasi yang sudah didefinisikan. Hal ini membuat pergerakan NPC lebih stabil, mudah diuji, dan lebih sesuai dengan desain level.

Pada praktikum, komponen yang digunakan adalah:

- `NavMesh Surface`, untuk mendefinisikan area navigasi,
- `NavMesh Agent`, untuk membuat object dapat bergerak di atas area navigasi tersebut.

Hubungan keduanya penting: `NavMesh Surface` menyediakan data area yang bisa dilalui, sedangkan `NavMesh Agent` menjadi representasi agent yang memanfaatkan data tersebut untuk bergerak.

Sebelum lanjut, mahasiswa perlu memahami bahwa NavMesh bukan sekadar visualisasi lantai. NavMesh adalah data navigasi yang membatasi ruang gerak agent. Jika area penting tidak termasuk dalam NavMesh, agent tidak akan dapat melewati area tersebut meskipun secara visual terlihat bisa dilalui.

### Inti yang Harus Ditekankan

- **NavMesh** adalah representasi area yang dapat dilalui agent.
- NavMesh mencegah NPC bergerak menembus dinding atau area non-walkable.
- NavMesh mendukung proses **pathfinding** dan pergerakan menuju `destination`.
- `NavMesh Surface` mendefinisikan area navigasi, sedangkan `NavMesh Agent` membuat object dapat bergerak di area tersebut.
- Area yang tidak termasuk NavMesh tidak dapat digunakan agent untuk bergerak.

### Transisi ke Slide Berikutnya

Selanjutnya, kita akan melihat bagaimana `NavMesh Surface` bekerja sebagai object yang menghasilkan data navigasi dan menjadi dasar pergerakan agent.

---

## Slide 060 - NavMeshSurface

### Narasi

Pada slide ini kita fokus pada **NavMeshSurface**. Komponen ini penting karena ia menentukan **area mana saja yang bisa dilalui** oleh agent di dalam game.

Secara sederhana, **NavMeshSurface** adalah “pembuat peta navigasi”. Ia tidak langsung membuat NPC bergerak, tetapi ia menyiapkan **data NavMesh** yang akan digunakan oleh agent untuk mencari jalur.

Dalam struktur objek, komponen ini berada di bawah:

```text
Navigation
```

dan memiliki komponen:

```text
NavMesh Surface
```

Fungsi utama **NavMeshSurface** adalah:

- mendefinisikan area navigasi,
- menghasilkan data **NavMesh**,
- menjadi dasar pergerakan agent.

Intuisinya, **NavMeshSurface** seperti menentukan “lantai mana yang boleh dilalui”. Jika area tersebut tidak dimasukkan ke dalam navigasi, agent tidak akan menganggap area itu bisa ditempuh.

Hal yang sangat penting untuk dipahami adalah: **ground harus termasuk area navigasi**. Jika lantai atau ground tidak dibake atau tidak termasuk dalam area **NavMesh**, maka agent tidak akan bisa berjalan di atasnya, meskipun secara visual lantai terlihat ada di scene.

Jadi, sebelum agent bisa bergerak, kita harus memastikan bahwa **NavMeshSurface** sudah mencakup area yang benar. Setelah itu, data **NavMesh** yang dihasilkan dapat digunakan oleh agent untuk melakukan pergerakan.

### Inti yang Harus Ditekankan

- **NavMeshSurface** adalah komponen yang mendefinisikan area navigasi.
- Komponen ini menghasilkan **data NavMesh** yang menjadi dasar pergerakan agent.
- **Ground** harus termasuk dalam area navigasi agar agent dapat berjalan.
- Tanpa **NavMeshSurface** yang benar, agent tidak akan memiliki jalur yang valid untuk ditempuh.

### Transisi ke Slide Berikutnya

Setelah area navigasi dibuat oleh **NavMeshSurface**, langkah berikutnya adalah memberi kemampuan bergerak kepada NPC. Untuk itu, kita akan membahas **NavMeshAgent** pada slide berikutnya.

---

## Slide 061 - NavMeshAgent

### Narasi

Setelah **NavMeshSurface** menyediakan area yang dapat dilalui, komponen yang membuat NPC benar-benar bergerak adalah **NavMeshAgent**. Komponen ini biasanya dipasang pada GameObject NPC dan bertugas membaca data NavMesh untuk menentukan jalur, menjaga kecepatan, serta mengikuti path menuju titik tujuan.

Secara intuitif, **NavMeshAgent** dapat dipandang sebagai "sistem gerak" dari NPC. Ia tidak memutuskan kapan NPC harus mengejar, mundur, atau menyerang. Keputusan itu berada di lapisan perilaku, misalnya **NPCBrain**. Yang dilakukan **NavMeshAgent** adalah mengeksekusi perintah gerak setelah tujuan diberikan.

Parameter awal yang perlu diperhatikan adalah:

- **Speed**: kecepatan maksimum NPC saat bergerak.
- **Angular Speed**: kecepatan NPC berputar untuk menghadap arah gerak.
- **Acceleration**: seberapa cepat NPC mencapai kecepatan target.
- **Stopping Distance**: jarak di mana NPC berhenti sebelum mencapai tujuan.

Action utama yang sering digunakan adalah:

```csharp
agent.SetDestination(...);
```

Panggilan ini memberi tahu **NavMeshAgent** titik mana yang harus dituju. Setelah itu, agent akan menghitung atau mengikuti path di atas NavMesh, menyesuaikan orientasi, dan bergerak menuju posisi tersebut.

Penting untuk memahami bahwa **NPCBrain** hanya menentukan **destination**. Misalnya, brain memilih posisi player sebagai target. Namun, proses mencari path, menghindari hambatan, dan menggerakkan NPC adalah tanggung jawab **NavMeshAgent**. Pemisahan ini membuat arsitektur lebih rapi: satu bagian mengambil keputusan, bagian lain mengeksekusi gerak.

Sebelum lanjut, mahasiswa perlu mengingat bahwa **SetDestination** bukan pengganti logika perilaku. Ia hanya mengubah target gerak. Jika target tidak valid, NPC tidak berada di NavMesh, atau parameter gerak tidak sesuai, perilaku NPC akan terlihat tidak wajar.

### Inti yang Harus Ditekankan

- **NavMeshAgent** adalah komponen gerak NPC yang bekerja di atas data NavMesh.
- Parameter seperti `Speed`, `Angular Speed`, `Acceleration`, dan `Stopping Distance` memengaruhi cara NPC bergerak.
- `agent.SetDestination(...)` hanya memberi titik tujuan; **NPCBrain** menentukan tujuan, **NavMeshAgent** mengeksekusi pergerakan.
- Pemisahan antara keputusan dan eksekusi gerak membuat sistem perilaku NPC lebih modular dan mudah dikembangkan.

### Transisi ke Slide Berikutnya

Dengan memahami **NavMeshAgent** sebagai eksekutor gerak, kita akan masuk ke slide berikutnya untuk membedakan antara proses sensor/perception dan navigation, karena keduanya adalah masalah yang berbeda dalam arsitektur NPC.

---

## Slide 062 - Sensor dan Navigation Berbeda

### Narasi

Slide ini menegaskan bahwa **sensor** dan **navigation** bukan satu hal yang sama. Dalam arsitektur agent game, keduanya menjawab pertanyaan yang berbeda. **Perception** menjawab: `Apakah Player terlihat?` sedangkan **Navigation** menjawab: `Bagaimana mencapai target?` Pemisahan ini penting karena satu agent bisa saja melihat player, tetapi belum tentu bisa langsung bergerak ke sana. Ada proses deteksi, keputusan, lalu pergerakan.

Contoh alurnya dapat dibaca sebagai berikut:

```text
NPCSensor
→ Player terlihat

NPCBrain
→ CHASE

NavMeshAgent
→ mencari path menuju Player
```

Pada tahap pertama, `NPCSensor` memeriksa kondisi lingkungan. Ia tidak menentukan NPC harus melakukan apa, hanya menghasilkan fakta: player terlihat atau tidak. Fakta ini biasanya berasal dari radius pandangan, arah hadap, dan kemungkinan line of sight. Namun detail visualisasi sensor akan dibahas pada slide berikutnya.

Setelah sensor memberikan informasi, `NPCBrain` mengambil keputusan. Jika player terlihat dan memenuhi syarat, brain dapat mengubah state menjadi `CHASE`. Di sini terjadi pemisahan antara **apa yang diketahui** dan **apa yang dilakukan**. Brain tidak perlu menghitung path, cukup memilih perilaku yang sesuai.

Baru setelah keputusan dibuat, `NavMeshAgent` mengambil alih masalah pergerakan. Agent ini menerima destination, misalnya posisi player, lalu mencari path yang valid di NavMesh. Dengan cara ini, perubahan perilaku tidak langsung mengganggu sistem navigasi. Jika path tidak tersedia, masalahnya ada di navigation, bukan di sensor.

Intuisi praktisnya: **sensor** adalah mata agent, **brain** adalah keputusan, dan **navigation** adalah sistem pergerakan. Arsitektur modular membuat debugging lebih mudah. Jika NPC tidak mengejar, kita bisa cek apakah sensor gagal, brain tidak memilih `CHASE`, atau `NavMeshAgent` tidak menemukan path. Pemisahan ini juga memudahkan mengganti strategi: sensor yang sama bisa dipakai untuk state `CHASE`, `ALERT`, atau `PATROL`.

### Inti yang Harus Ditekankan

- **Perception** menjawab apakah player terlihat, sedangkan **navigation** menjawab bagaimana mencapai target.
- `NPCSensor` menghasilkan fakta, `NPCBrain` memilih state seperti `CHASE`, dan `NavMeshAgent` menghitung path.
- Arsitektur modular memudahkan debugging karena masalah sensor, keputusan, dan pergerakan dapat diperiksa secara terpisah.

### Transisi ke Slide Berikutnya

Setelah memahami bahwa sensor dan navigation adalah dua lapisan yang berbeda, langkah berikutnya adalah melihat bagaimana sensor divisualisasikan untuk debugging. Pada slide berikutnya, kita akan membahas gizmos yang membantu memastikan radius, sudut, arah hadap, dan line of sight bekerja dengan benar.

---

## Slide 063 - Gizmos untuk Sensor

### Narasi

Pada slide ini, kita melihat cara **menggambarkan sensor NPC** secara visual di editor. Dalam pengembangan game, sensor sering kali bekerja di balik layar: ia menghitung jarak, sudut, dan garis pandang. Tanpa visualisasi, mahasiswa atau developer bisa salah mengira NPC tidak melihat pemain karena logika sensor, padahal sebenarnya parameter radius atau arah hadap yang belum tepat.

Gizmo sensor biasanya ditampilkan sebagai elemen debug sederhana. Pada slide ini, **lingkaran kuning** mewakili `View Radius`, yaitu jarak maksimum NPC dapat mendeteksi pemain. **Garis kuning** menunjukkan batas `Field of View`, yaitu sudut pandang NPC. Sementara itu, **garis merah** menandakan bahwa pemain sedang terlihat, biasanya karena berada dalam radius, dalam sudut pandang, dan lolos dari pengecekan `Line of Sight`.

```text
Lingkaran kuning
= View Radius

Garis kuning
= batas Field of View

Garis merah
= Player terlihat
```

Visual ini membantu kita memeriksa empat hal penting:

- radius sensor sudah sesuai dengan desain gameplay,
- sudut `Field of View` tidak terlalu sempit atau terlalu lebar,
- arah hadap NPC benar mengikuti orientasi objek,
- `Line of Sight` bekerja dengan baik, misalnya terhalang dinding atau objek penghalang.

Dalam arsitektur agent, bagian sensor ini biasanya terpisah dari keputusan perilaku. Sensor menjawab pertanyaan **"apakah pemain terlihat?"**, sedangkan bagian otak atau perilaku NPC akan menentukan apa yang dilakukan setelah itu, misalnya `CHASE`, `ATTACK`, atau `PATROL`. Dengan memisahkan sensor dan perilaku, kita bisa debug lebih mudah: jika NPC tidak mengejar, kita bisa cek apakah masalahnya ada pada sensor, pathfinding, atau logika state.

Intuisi praktisnya adalah: **gizmo bukan sekadar dekorasi**, melainkan alat diagnostik. Saat NPC berperilaku aneh, langkah pertama yang sering dilakukan adalah melihat visual sensor. Jika lingkaran terlalu kecil, NPC mungkin tidak mendeteksi pemain. Jika garis `Field of View` tidak mengikuti arah NPC, ada masalah transform atau rotasi. Jika garis merah tidak muncul padahal pemain seharusnya terlihat, kemungkinan logika `Line of Sight` yang perlu diperiksa.

Sebelum lanjut ke visualisasi memori, mahasiswa perlu memahami bahwa sensor adalah **input persepsi** bagi agent. Tanpa sensor yang benar, perilaku cerdas NPC tidak akan bisa diuji secara konsisten.

### Inti yang Harus Ditekankan

- **Gizmo sensor** membantu debug `View Radius`, `Field of View`, arah hadap, dan `Line of Sight`.
- Warna gizmo memberi makna: kuning untuk parameter sensor, merah untuk kondisi pemain terlihat.
- Sensor adalah bagian **perception** yang terpisah dari keputusan perilaku NPC.

### Transisi ke Slide Berikutnya

Setelah sensor bisa divalidasi secara visual, langkah berikutnya adalah melihat apa yang terjadi ketika pemain tidak lagi terlihat. Pada slide berikutnya, kita akan membahas gizmo untuk memory, yaitu visualisasi `Last Known Position` yang membantu memahami apa yang masih diingat NPC.

---

## Slide 064 - Gizmos untuk Memory

### Narasi

Slide ini membahas visualisasi **memory** pada NPC. Setelah sensor memastikan NPC dapat melihat target, kita perlu memastikan NPC juga menyimpan informasi yang benar ketika target tidak lagi terlihat.

```text
Sphere magenta
= Last Known Position

Line dari NPC ke Last Known Position
```

`Sphere magenta` menandai **Last Known Position**, yaitu posisi terakhir target yang diketahui oleh NPC. Posisi ini biasanya diperbarui selama target masih terlihat oleh sensor, lalu tetap tersimpan ketika target hilang.

`Line` dari NPC ke `Last Known Position` membantu developer melihat hubungan spasial antara NPC dan memorinya. Dengan garis ini, kita bisa menilai apakah NPC masih menuju lokasi terakhir, apakah jaraknya terlalu jauh, atau apakah memori sudah tidak relevan lagi.

Visual ini penting karena **memory** adalah bagian dari internal state NPC. Banyak perilaku seperti mengejar, mencari, atau kembali patroli bergantung pada data ini. Jika `Last Known Position` salah, NPC bisa bergerak ke tempat yang salah meskipun logika perilaku sudah benar.

Dengan gizmo ini, mahasiswa dapat mengecek langsung:

- apakah `Last Known Position` ter-update saat target terlihat,
- apakah posisi terakhir tetap tersimpan saat target hilang,
- apakah NPC masih menggunakan memori yang valid,
- apakah garis ke memori menunjukkan arah dan jarak yang masuk akal.

### Inti yang Harus Ditekankan

- `Sphere magenta` adalah representasi visual dari **Last Known Position**.
- `Line` dari NPC ke memori membantu debugging jarak, arah, dan relevansi memori.
- Memory adalah internal state yang memengaruhi perilaku NPC, sehingga perlu divisualisasikan untuk troubleshooting.

### Transisi ke Slide Berikutnya

Setelah kita dapat melihat apa yang diingat NPC, langkah berikutnya adalah melihat fase perilaku NPC secara langsung melalui gizmo state.

---

## Slide 065 - Gizmos untuk State

### Narasi

Setelah kita melihat bagaimana **memory** divisualisasikan, langkah berikutnya adalah membuat **state** NPC terlihat langsung di scene. Dalam arsitektur perilaku game, perilaku NPC sering dimodelkan sebagai **Finite State Machine**, di mana setiap state mewakili mode perilaku yang sedang aktif.

Slide ini menggunakan warna sebagai indikator state:

```text
Hijau
= PATROL

Merah
= CHASE

Biru
= SEARCH
```

Warna ini memberi intuisi cepat:

- **Hijau** untuk `PATROL`: NPC sedang melakukan perilaku netral, misalnya bergerak di area tertentu.
- **Merah** untuk `CHASE`: NPC sedang mengejar target atau ancaman.
- **Biru** untuk `SEARCH`: NPC sedang mencari target yang sebelumnya terlihat atau hilang.

Dengan visual seperti ini, developer tidak perlu langsung membuka kode untuk mengetahui kondisi NPC. Cukup melihat warna gizmo di scene, kita sudah bisa menjawab pertanyaan dasar: **NPC sedang berada di state apa?**

Ini sangat penting dalam debugging. Banyak masalah perilaku NPC bukan berasal dari satu fungsi, tetapi dari salah satu dari tiga hal:

1. **Perception** tidak mendeteksi target.
2. **Decision** tidak melakukan transisi state yang benar.
3. **Action** dalam state tidak dieksekusi dengan baik.

Gizmo state membantu memisahkan masalah tersebut. Jika NPC berwarna `CHASE` tetapi tidak bergerak ke target, masalahnya mungkin ada pada steering, pathfinding, atau action. Jika NPC masih `PATROL` padahal target sudah dekat, masalahnya lebih mungkin ada pada kondisi transisi atau radius deteksi.

Perlu dipahami bahwa gizmo state menunjukkan **state saat ini**, bukan alasan lengkap mengapa state itu dipilih. Ia adalah alat observasi, bukan pengganti log keputusan. Namun, karena state adalah representasi perilaku yang paling mudah dilihat, gizmo ini menjadi pintu masuk debugging yang sangat praktis.

Dalam praktik pengembangan, warna state juga membantu perbandingan antar NPC. Jika satu NPC `CHASE` dan NPC lain `SEARCH`, developer dapat langsung melihat perbedaan respons terhadap kondisi lingkungan. Hal ini mempercepat iterasi desain, terutama saat menyetel parameter seperti jarak deteksi, waktu pencarian, atau aturan transisi.

### Inti yang Harus Ditekankan

- **Gizmo state** adalah visualisasi state aktif NPC, biasanya menggunakan warna atau ikon di scene.
- Warna membantu developer memahami perilaku NPC secara cepat tanpa membuka kode.
- State seperti `PATROL`, `CHASE`, dan `SEARCH` adalah mode perilaku dalam arsitektur perilaku game.
- Gizmo state menjawab pertanyaan **apa state NPC sekarang?**, bukan sepenuhnya **mengapa state itu dipilih?**.
- Visual debugging mengurangi waktu troubleshooting karena masalah dapat dipisahkan antara perception, decision, dan action.

### Transisi ke Slide Berikutnya

Setelah kita bisa melihat state NPC secara visual, langkah berikutnya adalah mengetahui kapan state tersebut berubah. Untuk itu, kita akan menggunakan console sebagai alat debug decision, di mana setiap transisi state dapat dicatat dan diperiksa.

---

## Slide 066 - Console sebagai Debug Decision

### Narasi

Pada slide ini kita melihat **Console** sebagai alat debug untuk **decision** agen game. Jika pada slide sebelumnya kita menggunakan **gizmos** untuk melihat state secara visual, maka console membantu menjawab pertanyaan waktu: **kapan** sebuah keputusan berubah.

Setiap kali agen mengalami **state change**, kita bisa mencatat transisinya ke console. Contoh log yang sederhana adalah:

```text
NPC_Guard: Patrol -> Chase
NPC_Guard: Chase -> Search
NPC_Guard: Search -> Patrol
```

Log ini penting karena perilaku NPC biasanya tidak hanya ditentukan oleh satu kondisi, tetapi oleh urutan keputusan. Dengan membaca console, mahasiswa dapat melihat apakah agen berpindah dari `Patrol` ke `Chase` pada waktu yang tepat, apakah `Chase` berubah ke `Search` setelah target hilang, atau apakah ada transisi yang terlalu cepat, terlalu lambat, atau tidak terjadi sama sekali.

Console menjawab:

```text
Kapan decision berubah?
```

Sementara **gizmos** menjawab:

```text
Apa kondisi spatial-nya?
```

Artinya, console memberi kita **timeline keputusan**, sedangkan gizmos memberi kita **konteks ruang** pada saat keputusan itu terjadi. Misalnya, jika NPC masuk ke `Chase`, console memberi tahu kapan transisi itu terjadi, sedangkan gizmos membantu melihat apakah NPC berada pada posisi yang relevan dengan state tersebut.

Kedua alat ini saling melengkapi. Console berguna untuk melacak **urutan state**, **event**, dan **timing**. Gizmos berguna untuk melihat **posisi**, **state visual**, dan **kondisi lingkungan**. Dalam praktik pengembangan game, kombinasi ini sangat membantu ketika perilaku NPC tampak aneh: kita bisa mengecek apakah masalahnya ada pada keputusan, kondisi spasial, atau transisi yang tidak sesuai.

Sebelum lanjut, mahasiswa perlu memahami bahwa debug decision bukan hanya melihat apakah agen bergerak, tetapi memahami **mengapa** dan **kapan** agen memilih state tertentu. Console menjadi bukti temporal dari proses decision making, terutama pada arsitektur berbasis state machine atau perilaku NPC yang berubah-ubah.

### Inti yang Harus Ditekankan

- **Console** digunakan untuk melacak **state change** dan **decision** agen secara temporal.
- Log seperti `NPC_Guard: Patrol -> Chase` membantu melihat **urutan keputusan** dan **timing transisi**.
- **Gizmos** menjawab kondisi spasial, sedangkan console menjawab kapan keputusan berubah.
- Keduanya saling melengkapi untuk debugging perilaku NPC yang lebih akurat.

### Transisi ke Slide Berikutnya

Setelah kita tahu kapan keputusan berubah dan apa kondisi spasialnya, langkah berikutnya adalah memahami parameter apa saja yang membentuk perilaku tersebut. Pada slide berikutnya, kita akan membahas **Parameter pada Praktikum**, mulai dari sensor, brain, hingga navigation.

---

## Slide 067 - Parameter AI pada Praktikum

### Narasi

Pada praktikum, parameter yang terlihat di editor bukan hanya angka teknis, tetapi **kendali perilaku NPC**. Parameter ini menentukan bagaimana agent menerima informasi, mengambil keputusan, dan mengeksekusi gerakan di dunia game.

Slide ini membagi parameter menjadi tiga kelompok utama:

- **Sensor**: menentukan apa yang bisa diketahui NPC.
- **Brain**: menentukan bagaimana NPC memilih perilaku.
- **Navigation**: menentukan bagaimana NPC bergerak.

```text
Sensor:
View Radius
View Angle
Eye Height
Obstacle Mask

Brain:
Waypoint Tolerance
Patrol Speed
Chase Speed
Search Duration
Search Tolerance

Navigation:
Agent Speed
Angular Speed
Acceleration
Stopping Distance
```

Kelompok **Sensor** mengatur persepsi NPC. `View Radius` menentukan jarak maksimum deteksi, `View Angle` menentukan lebar bidang pandang, `Eye Height` memengaruhi titik pandang, dan `Obstacle Mask` menentukan objek mana yang menghalangi pandangan. Parameter ini menjadi input penting sebelum NPC memutuskan apakah tetap `Patrol`, masuk `Chase`, atau beralih ke `Search`.

Kelompok **Brain** mengatur logika perilaku. `Waypoint Tolerance` menentukan seberapa dekat NPC dianggap sudah mencapai waypoint, `Patrol Speed` dan `Chase Speed` memengaruhi kecepatan pada state berbeda, `Search Duration` menentukan lama NPC mencari, dan `Search Tolerance` memengaruhi kondisi berhenti mencari. Parameter ini sangat dekat dengan **Finite State Machine** atau **behavior tree**, karena menentukan kapan transisi state terjadi dan bagaimana perilaku terlihat di gameplay.

Kelompok **Navigation** mengatur eksekusi gerak. `Agent Speed` menentukan kecepatan linear, `Angular Speed` menentukan kecepatan putar, `Acceleration` memengaruhi responsif gerak, dan `Stopping Distance` menentukan jarak berhenti. Parameter ini menghubungkan keputusan dari brain dengan pergerakan fisik, termasuk hasil pathfinding atau steering.

Intuisi praktisnya: satu parameter jarang bekerja sendiri. `View Radius` yang besar bisa membuat NPC sering masuk `Chase`, tetapi jika `Chase Speed` kecil, NPC tetap terlihat lambat mengejar. Sebaliknya, `Stopping Distance` yang terlalu besar dapat membuat NPC berhenti terlambat atau menabrak objek. Karena itu, mahasiswa perlu memahami peran parameter sebelum mencoba mengubah nilainya.

Sebelum lanjut, hal penting yang harus dipahami adalah bahwa parameter tuning bukan sekadar mencari nilai "paling cepat" atau "paling besar". Nilai yang baik adalah nilai yang membuat perilaku NPC sesuai desain gameplay.

### Inti yang Harus Ditekankan

- Parameter NPC dapat dikelompokkan menjadi **Sensor**, **Brain**, dan **Navigation**.
- **Sensor** menentukan apa yang bisa diketahui NPC, **Brain** menentukan keputusan perilaku, dan **Navigation** menentukan eksekusi gerak.
- Parameter seperti `View Radius`, `Chase Speed`, `Search Duration`, dan `Stopping Distance` memengaruhi perilaku secara langsung.
- Tuning parameter harus dilakukan dengan memahami peran masing-masing parameter, bukan hanya mencoba angka secara acak.

### Transisi ke Slide Berikutnya

Setelah memahami peran parameter, slide berikutnya akan menunjukkan contoh tuning dan bagaimana perubahan nilai tertentu memengaruhi perilaku NPC dalam gameplay.

---

## Slide 068 - AI Parameter Tuning

### Narasi

Setelah kita melihat daftar parameter pada slide sebelumnya, sekarang kita masuk ke inti praktisnya: **Parameter Tuning**. Parameter bukan sekadar angka di konfigurasi. Parameter adalah **pengatur perilaku** NPC.

```text
View Radius kecil
→ NPC sulit mendeteksi Player

View Angle besar
→ NPC lebih mudah melihat

Chase Speed tinggi
→ NPC lebih agresif

Search Duration tinggi
→ NPC lebih lama mencari
```

Contoh di atas menunjukkan hubungan langsung antara nilai parameter dan pengalaman bermain.

- `View Radius` menentukan **jarak deteksi**. Jika nilainya kecil, NPC hanya bereaksi saat player sudah dekat.
- `View Angle` menentukan **sebaran pandangan**. Semakin besar, semakin mudah NPC melihat player dari berbagai arah.
- `Chase Speed` memengaruhi **kecepatan mengejar**. Nilai tinggi membuat NPC terasa lebih agresif dan menekan player.
- `Search Duration` menentukan **lama NPC mencari** setelah kehilangan target. Nilai tinggi membuat NPC lebih persisten.

Poin penting yang harus dipahami mahasiswa adalah: **tidak ada satu nilai yang selalu terbaik**. Nilai yang cocok untuk satu mode permainan bisa terasa salah untuk mode lain.

Misalnya, untuk enemy yang berperan sebagai pengalih perhatian, nilai deteksi dan kecepatan bisa dibuat lebih rendah. Namun untuk boss atau enemy elite, parameter bisa dinaikkan agar terasa lebih menantang.

Karena itu, tuning harus dilakukan dengan **desain gameplay** sebagai acuan utama. Yang kita cari bukan hanya NPC yang “kuat”, tetapi NPC yang terasa sesuai perannya dalam permainan.

Dalam praktik, tuning biasanya dilakukan secara iteratif:

1. Tentukan peran NPC.
2. Atur parameter dasar.
3. Uji perilaku NPC terhadap player.
4. Amati apakah NPC terlalu mudah, terlalu agresif, atau tidak konsisten.
5. Ubah satu atau dua parameter secara bertahap.

Dengan cara ini, mahasiswa bisa melihat bagaimana perubahan kecil pada `View Radius`, `Chase Speed`, atau `Search Duration` dapat mengubah keseluruhan feel permainan.

Sebelum lanjut, mahasiswa perlu menyadari bahwa parameter yang terlalu ekstrem dapat membuat NPC terasa tidak wajar. Hal ini akan dibahas lebih lanjut pada slide berikutnya.

### Inti yang Harus Ditekankan

- Parameter adalah **pengatur perilaku**, bukan hanya setting teknis.
- `View Radius`, `View Angle`, `Chase Speed`, dan `Search Duration` memengaruhi deteksi, agresivitas, dan persistensi NPC.
- Tidak ada nilai universal; tuning harus disesuaikan dengan **desain gameplay** dan peran NPC.
- Proses tuning sebaiknya dilakukan secara **iteratif** dan berbasis pengamatan perilaku.

### Transisi ke Slide Berikutnya

Selanjutnya, kita akan melihat batas penting dari tuning parameter: bagaimana nilai yang terlalu ekstrem dapat membuat NPC terasa tidak adil bagi player.

---

## Slide 069 - Fairness melalui Parameter

### Narasi

Pada slide ini, kita membahas **fairness** dalam parameter perilaku NPC. Parameter yang membuat NPC sangat mampu secara teknis belum tentu menghasilkan pengalaman bermain yang menyenangkan. Masalahnya bukan hanya apakah NPC bisa menemukan pemain, tetapi apakah pemain masih memiliki ruang untuk berpikir, bergerak, dan mengambil keputusan.

Contoh parameter yang berpotensi tidak adil adalah sebagai berikut:

```text
View Angle = 360°
View Radius sangat besar
Chase Speed jauh lebih tinggi dari Player
Search Duration sangat lama
```

Secara teknis, nilai-nilai ini membuat NPC sangat kuat. Namun, secara desain, kombinasi ini dapat menghilangkan peluang pemain.

- `View Angle = 360°` berarti NPC tidak memiliki titik buta.
- `View Radius` yang sangat besar membuat NPC bisa mendeteksi pemain dari jarak yang terlalu jauh.
- `Chase Speed` yang jauh lebih tinggi dari pemain membuat pemain sulit kabur.
- `Search Duration` yang sangat lama membuat NPC terus mencari meskipun pemain sudah mencoba menghilang.

Akibatnya, pemain hampir tidak punya kesempatan untuk memutus pandangan, bersembunyi, atau memanfaatkan waktu. Tekanan yang seharusnya terasa menantang berubah menjadi frustrasi.

**Balancing** berarti mengatur parameter agar NPC tetap memberikan tekanan, tetapi tidak menutup semua opsi pemain. Parameter harus disesuaikan dengan kemampuan pemain, ukuran map, objektif misi, dan ritme permainan. Nilai yang cocok untuk satu level belum tentu cocok untuk level lain.

Sebelum melakukan tuning, mahasiswa perlu memahami bahwa parameter adalah keputusan desain, bukan sekadar angka. Nilai yang tampak wajar secara individual bisa menjadi tidak adil ketika digabungkan. Karena itu, pengujian harus dilakukan dari sudut pandang pemain: apakah pemain masih bisa menghindari deteksi, memutus kejaran, atau keluar dari area pencarian?

### Inti yang Harus Ditekankan

- **Fairness** bukan berarti NPC lemah, tetapi pemain masih memiliki peluang untuk menang atau bertahan.
- Ketidakadilan sering muncul dari **kombinasi parameter**, bukan satu parameter saja.
- `View Angle`, `View Radius`, `Chase Speed`, dan `Search Duration` harus diuji terhadap kemampuan pemain dan desain level.
- Tujuan balancing adalah menciptakan gameplay yang **menantang tetapi adil**.

### Transisi ke Slide Berikutnya

Setelah memahami bagaimana parameter memengaruhi fairness, kita akan masuk ke praktikum untuk melihat penerapan perilaku NPC secara konkret, yaitu agent guard yang memiliki sensor, memory, dan `decision`.

---

## Slide 070 - Praktikum Pertemuan 2

### Narasi

Pada slide ini, praktikum pertemuan kedua difokuskan pada implementasi arsitektur agent yang konkret: **NPC Guard** dengan tiga bagian utama, yaitu **Sensor**, **Memory**, dan **Decision**. Fokusnya bukan membuat NPC yang langsung kompleks, tetapi membangun perilaku yang mudah dijelaskan, diuji, dan dikembangkan.

Target behavior yang ingin dicapai adalah:

```text
PATROL
   │ Player terlihat
   ▼
CHASE
   │ Player menghilang
   ▼
SEARCH
   │
   ├─ Player ditemukan → CHASE
   │
   └─ Timeout → PATROL
```

Diagram ini menunjukkan alur perilaku guard dari kondisi awal hingga kembali ke perilaku normal. Secara sederhana, alurnya adalah:

1. Guard berada di state `PATROL` selama tidak ada ancaman.
2. Jika sensor mendeteksi `Player terlihat`, guard beralih ke `CHASE`.
3. Jika `Player menghilang`, guard masuk ke `SEARCH` untuk mencari kemungkinan posisi terakhir.
4. Jika `Player ditemukan` selama pencarian, guard kembali ke `CHASE`.
5. Jika `Timeout` tercapai, guard kembali ke `PATROL`.

Dalam arsitektur agent, ketiga komponen bekerja saling melengkapi. **Sensor** menyediakan informasi dari lingkungan, misalnya apakah player terlihat. **Memory** menyimpan kondisi penting, seperti lokasi terakhir player atau durasi pencarian. **Decision** menggunakan informasi tersebut untuk memilih state berikutnya.

Sebelum masuk ke struktur scene, mahasiswa perlu memahami bahwa perilaku NPC tidak hanya ditentukan oleh satu fungsi gerak, tetapi oleh kombinasi **persepsi**, **ingatan**, dan **keputusan**. Dengan memahami diagram ini, mahasiswa dapat melihat bagaimana state, kondisi transisi, dan timer membentuk perilaku yang lebih hidup dan dapat diprediksi.

### Inti yang Harus Ditekankan

- Praktikum ini membangun **NPC Guard** sebagai agent dengan **Sensor**, **Memory**, dan **Decision**.
- Perilaku utama terdiri dari `PATROL`, `CHASE`, dan `SEARCH`, dengan transisi yang dipicu oleh kondisi tertentu.
- `CHASE` terjadi ketika player terlihat, `SEARCH` terjadi ketika player menghilang, dan kembali ke `PATROL` jika `Timeout` tercapai.
- **Memory** penting agar NPC tidak hanya bereaksi sesaat, tetapi dapat mengingat kondisi terakhir dan menentukan keputusan berikutnya.

### Transisi ke Slide Berikutnya

Setelah target behavior dipahami, langkah berikutnya adalah melihat bagaimana perilaku ini diletakkan dalam struktur scene praktikum, termasuk komponen NPC, player, dan titik patrol.

---

## Slide 071 - Scene Praktikum

### Narasi

Scene praktikum ini adalah lingkungan kerja paling dasar untuk mengamati perilaku **NPC Guard** sebagai sebuah **agent**. Secara praktis, scene ini menyediakan tiga hal penting: lingkungan yang bisa dijelajahi, target yang bisa dideteksi, dan komponen agent yang akan mengambil keputusan.

Struktur utamanya dapat dilihat sebagai berikut:

```text
Scene
├── Ground
├── Navigation
│   └── NavMesh Surface
├── Player
│   └── PlayerController
├── NPC_Guard
│   ├── NavMeshAgent
│   ├── NPCSensor
│   ├── NPCBrain
│   └── DirectionMarker
├── Wall
└── PatrolPoints
    ├── Point1
    ├── Point2
    ├── Point3
    └── Point4
```

Bagian **Ground** dan **Wall** membentuk batas fisik lingkungan. **Ground** adalah permukaan tempat agent dan player bergerak, sedangkan **Wall** berfungsi sebagai penghalang yang membatasi area gerak. Tanpa elemen ini, perilaku penjagaan tidak akan terlihat jelas karena tidak ada ruang yang bisa dijelajahi.

**NavMesh Surface** berada di bawah **Navigation** dan menjadi dasar sistem **pathfinding**. Komponen ini menentukan area mana yang bisa dilalui oleh agent. Ketika **NPC_Guard** ingin berpindah dari satu titik ke titik lain, sistem navigasi akan menggunakan **NavMesh** untuk mencari jalur yang valid. Jadi, **NavMesh Surface** bukan sekadar visual, tetapi data penting yang menentukan apakah agent bisa bergerak ke suatu lokasi.

**Player** adalah objek yang menjadi target perhatian **NPC_Guard**. **PlayerController** memungkinkan player bergerak di dalam scene. Pergerakan player inilah yang kemudian dapat memicu perubahan perilaku guard, misalnya dari patroli menjadi mengejar atau mencari.

**PatrolPoints** berisi beberapa waypoint, yaitu `Point1`, `Point2`, `Point3`, dan `Point4`. Titik-titik ini menjadi tujuan gerak saat guard berada dalam mode patroli. Dengan adanya beberapa titik patroli, perilaku guard tidak hanya diam di satu tempat, tetapi bergerak mengikuti urutan lokasi yang sudah ditentukan.

Komponen inti dari agent berada di dalam **NPC_Guard**:

- `NavMeshAgent` digunakan untuk melakukan pergerakan berdasarkan jalur navigasi.
- `NPCSensor` bertugas mendeteksi keberadaan player berdasarkan jarak, arah, atau kondisi lingkungan.
- `NPCBrain` menjadi pusat pengambilan keputusan, yaitu menentukan state dan action yang harus dilakukan guard.
- `DirectionMarker` membantu visualisasi arah hadap atau arah deteksi guard, sehingga perilaku agent lebih mudah diamati saat praktikum.

Alur kerja scene ini dapat dipahami sebagai berikut: lingkungan menyediakan area gerak, **NavMesh** menyediakan jalur yang valid, **Player** memberikan stimulus, **NPCSensor** membaca kondisi sekitar, **NPCBrain** memutuskan perilaku, lalu `NavMeshAgent` mengeksekusi gerakan. Dengan memahami struktur scene ini, mahasiswa dapat melihat bahwa perilaku agent tidak muncul dari satu komponen saja, tetapi dari kerja sama antara lingkungan, navigasi, sensor, dan decision logic.

### Inti yang Harus Ditekankan

- Scene praktikum adalah lingkungan minimal yang menghubungkan **environment**, **navigation**, **player**, dan **agent**.
- `NavMesh Surface` menentukan area yang bisa dilalui, sehingga menjadi dasar pergerakan **NPC_Guard**.
- `NPCSensor`, `NPCBrain`, dan `NavMeshAgent` memiliki peran berbeda: deteksi, keputusan, dan eksekusi gerak.
- `PatrolPoints` menjadi target gerak saat guard melakukan patroli.
- Mahasiswa harus memahami bahwa perilaku agent dihasilkan dari alur data: lingkungan → sensor → keputusan → gerakan.

### Transisi ke Slide Berikutnya

Setelah struktur scene dipahami, langkah berikutnya adalah melihat script yang menghidupkan komponen-komponen tersebut, terutama `PlayerController`, `NPCSensor`, dan `NPCBrain`.

---

## Slide 072 - Script Praktikum

### Narasi

Pada slide ini kita beralih dari struktur scene ke **script praktikum**. Intuisi awalnya sederhana: sebuah agent dalam game perlu tahu posisi pemain, menilai apa yang bisa ia lihat, lalu memutuskan tindakan. Tiga script berikut membagi tanggung jawab tersebut agar tidak menjadi satu blok logika yang sulit dibaca.

```text
PlayerController.cs
NPCSensor.cs
NPCBrain.cs
```

Pembagian tanggung jawabnya dapat dilihat sebagai berikut:

```text
PlayerController
→ input dan movement Player

NPCSensor
→ distance + FOV + raycast

NPCBrain
→ memory + decision + state + action
```

`PlayerController` bertanggung jawab atas **input** dan **movement** Player. Script ini menjadi sumber perubahan posisi pemain. Dalam praktik, tugasnya sebaiknya dibatasi: membaca input, memperbarui posisi atau gerak, lalu membiarkan komponen lain membaca hasil perubahan tersebut.

`NPCSensor` bertanggung jawab atas **distance**, **FOV**, dan **raycast**. Artinya, sensor menilai apakah Player berada pada jarak yang relevan, berada di arah pandang NPC, dan tidak terhalang oleh lingkungan. Hasilnya adalah sinyal persepsi, bukan keputusan akhir.

`NPCBrain` bertanggung jawab atas **memory**, **decision**, **state**, dan **action**. Di sinilah NPC menyimpan informasi penting, memproses sinyal dari sensor, memilih kondisi yang sedang berlaku, lalu memicu tindakan yang sesuai.

Urutan eksekusi yang perlu dipahami mahasiswa adalah:

1. `PlayerController` memperbarui posisi atau gerak Player.
2. `NPCSensor` membaca posisi Player dan lingkungan, lalu menghasilkan sinyal persepsi.
3. `NPCBrain` memproses sinyal tersebut, memperbarui `state`, dan memilih `action`.

Dengan pembagian ini, perilaku NPC menjadi lebih mudah dikendalikan. NPC tidak hanya bergerak secara tetap, tetapi dapat merespons Player berdasarkan apa yang berhasil ia persepsikan.

### Inti yang Harus Ditekankan

- `PlayerController` hanya menangani **input** dan **movement** Player.
- `NPCSensor` menghasilkan informasi persepsi: **distance**, **FOV**, dan **raycast**.
- `NPCBrain` menjadi pusat **memory**, **decision**, `state`, dan `action`.
- Alur utama: Player bergerak → sensor menilai → brain memutuskan.

### Transisi ke Slide Berikutnya

Dengan pembagian script ini, kita sudah tahu siapa yang bergerak, siapa yang menilai, dan siapa yang memutuskan. Selanjutnya kita akan melihat bagaimana `NPCSensor` membangun lapisan persepsi secara lebih rinci.

---

## Slide 073 - Perception Praktikum

### Narasi

Pada slide ini, kita membahas **perception** dalam praktikum. Perception adalah tahap di mana NPC mengumpulkan informasi dari lingkungan sebelum mengambil keputusan. Tahap ini menentukan apakah NPC tahu bahwa pemain berada di dekatnya, berada di arah yang benar, dan tidak terhalang objek.

Perception pada praktikum ini menggunakan tiga lapisan pemeriksaan:

```text
Distance
   ↓
Field of View
   ↓
Line of Sight
   ↓
CanSeePlayer
```

Urutan ini penting karena setiap lapisan menyaring kondisi yang lebih spesifik.

- **Distance** memeriksa apakah pemain berada dalam jarak maksimum yang bisa dideteksi NPC.
- **Field of View** memeriksa apakah pemain berada di dalam arah pandang NPC, biasanya berupa cone atau sudut pandang.
- **Line of Sight** memeriksa apakah tidak ada dinding, objek, atau obstacle yang menghalangi pandangan NPC ke pemain.
- **CanSeePlayer** adalah hasil akhir dari seluruh pemeriksaan, biasanya berupa nilai `true` atau `false`.

Secara teknis, input yang dibutuhkan biasanya adalah posisi NPC, posisi pemain, arah transform NPC, dan layer mask untuk obstacle. Prosesnya berjalan bertahap: jika jarak sudah terlalu jauh, NPC tidak perlu memeriksa FOV. Jika pemain berada di belakang NPC, NPC tidak perlu melakukan pemeriksaan pandangan. Jika ada dinding di antara keduanya, NPC tidak dianggap melihat pemain meskipun jarak dan arah sudah memenuhi.

Pendekatan ini jauh lebih realistis dibanding praktikum pertama yang hanya menggunakan distance. Dengan hanya distance, NPC bisa "melihat" pemain dari belakang, dari jarak yang masih masuk radius, atau bahkan menembus dinding. Dengan tiga lapisan ini, perilaku NPC menjadi lebih masuk akal dan lebih mendekati cara karakter dalam game seharusnya merespons lingkungan.

Sebelum melanjutkan, mahasiswa perlu memahami bahwa perception bukan sekadar "NPC tahu posisi pemain". Perception adalah filter bertahap yang menghasilkan kondisi `CanSeePlayer`. Nilai inilah yang kemudian digunakan oleh bagian decision untuk memilih state atau action berikutnya.

### Inti yang Harus Ditekankan

- Perception adalah tahap awal NPC memperoleh informasi sebelum decision.
- Tiga lapisan utama adalah **Distance**, **Field of View**, dan **Line of Sight**.
- Hasil akhir perception adalah `CanSeePlayer`, yang menentukan apakah NPC benar-benar melihat pemain.
- Urutan pemeriksaan penting untuk efisiensi dan realisme perilaku NPC.

### Transisi ke Slide Berikutnya

Setelah NPC mengetahui apakah ia melihat pemain, langkah berikutnya adalah bagaimana NPC menyimpan informasi tersebut agar tidak langsung lupa.

---

## Slide 074 - Memory Praktikum

### Narasi

Pada slide ini kita membahas **Memory** dalam perilaku NPC. Setelah NPC mampu melakukan **perception**, yaitu melihat pemain berdasarkan jarak, field of view, dan line of sight, muncul masalah berikutnya: apa yang terjadi ketika pemain tiba-tiba tidak terlihat lagi?

Tanpa memory, NPC akan langsung “lupa” begitu pemain keluar dari pandangan. Perilakunya akan kembali ke kondisi default secara instan. Hal ini membuat NPC terasa kaku dan kurang believable.

Memory hadir untuk menjembatani **perception sekarang** dengan **decision berikutnya**. Dengan memory, NPC dapat menyimpan informasi terakhir yang diketahui, lalu menggunakan informasi itu untuk mengambil perilaku yang lebih masuk akal.

Variabel memory yang digunakan pada praktikum ini adalah:

```text
lastKnownPosition
hasLastKnownPosition
searchTimer
```

Masing-masing variabel memiliki peran penting:

- `lastKnownPosition` adalah posisi terakhir pemain yang berhasil dilihat oleh NPC.
- `hasLastKnownPosition` adalah penanda apakah NPC masih memiliki posisi terakhir yang valid untuk digunakan.
- `searchTimer` adalah timer yang menentukan berapa lama NPC akan mencari pemain sebelum akhirnya memutuskan bahwa pemain benar-benar hilang.

Secara intuitif, memory membuat NPC berperilaku seperti penjaga yang melihat pemain di suatu sudut, lalu pemain bersembunyi. NPC tidak langsung diam atau kembali patroli. NPC akan mengingat sudut terakhir yang dilihat, lalu mencari di sekitar posisi itu selama beberapa waktu.

Alur sederhana yang perlu dipahami adalah sebagai berikut:

1. Jika pemain terlihat, NPC memperbarui `lastKnownPosition`.
2. `hasLastKnownPosition` diaktifkan karena NPC memiliki informasi terakhir yang valid.
3. `searchTimer` direset agar waktu pencarian dimulai ulang.
4. Jika pemain tidak terlihat, NPC dapat menggunakan `lastKnownPosition` untuk melakukan **SEARCH**.
5. Jika `searchTimer` melewati batas waktu, `hasLastKnownPosition` dimatikan dan memory dianggap tidak lagi valid.

Poin pentingnya adalah memory tidak harus dibuat rumit. Untuk perilaku NPC yang lebih believable, cukup ada state sederhana yang menyimpan posisi terakhir, penanda validitas, dan timer pencarian.

Memory juga menjadi dasar penting sebelum kita masuk ke tahap decision. Tanpa memory, NPC tidak punya alasan untuk memilih perilaku pencarian. Dengan memory, NPC memiliki kondisi internal yang dapat digunakan untuk memutuskan perilaku berikutnya.

### Inti yang Harus Ditekankan

- **Memory** membuat NPC tidak langsung lupa posisi terakhir pemain.
- `lastKnownPosition`, `hasLastKnownPosition`, dan `searchTimer` adalah state minimal untuk perilaku **SEARCH**.
- Memory berfungsi sebagai jembatan antara hasil **perception** dan keputusan perilaku NPC berikutnya.
- Dengan memory, perilaku NPC menjadi lebih **believable** karena NPC dapat mencari sebelum kembali ke perilaku default.

### Transisi ke Slide Berikutnya

Setelah NPC memiliki memory, langkah berikutnya adalah menentukan aturan keputusan perilaku. Pada slide berikutnya, kita akan membahas bagaimana NPC memilih antara **CHASE**, **SEARCH**, dan **PATROL** berdasarkan kondisi yang tersedia.

---

## Slide 075 - Decision Praktikum

### Narasi

Pada slide ini kita masuk ke tahap **decision**, yaitu bagian di mana NPC menentukan perilaku apa yang harus dilakukan berdasarkan informasi yang dimilikinya. Setelah NPC memiliki hasil **perception**, misalnya apakah pemain terlihat, dan memiliki **memory**, misalnya posisi terakhir pemain yang diketahui, maka sistem perlu mengambil keputusan.

Aturan keputusan pada praktikum ini dapat ditulis sebagai berikut:

```text
IF Player terlihat
    CHASE

ELSE IF sebelumnya CHASE dan punya memory
    SEARCH

ELSE IF SEARCH selesai
    PATROL
```

Aturan ini menunjukkan urutan evaluasi yang sangat penting. Kondisi pertama adalah **pemain terlihat**. Jika kondisi ini benar, NPC langsung memilih perilaku `CHASE`. Artinya, NPC mengejar pemain karena pemain masih berada dalam jangkauan persepsinya.

Jika pemain tidak terlihat, sistem tidak langsung membuat NPC kembali ke perilaku default. Sistem memeriksa kondisi kedua: apakah NPC sebelumnya sedang `CHASE` dan masih memiliki memory? Jika ya, NPC beralih ke `SEARCH`. Di sinilah memory berperan. NPC tidak langsung lupa, tetapi mencoba mencari ke posisi terakhir pemain yang diketahui.

Jika pencarian selesai, misalnya `searchTimer` habis atau NPC memutuskan berhenti mencari, maka NPC kembali ke perilaku `PATROL`. Dengan demikian, perilaku NPC menjadi lebih terstruktur: mengejar jika pemain terlihat, mencari jika pemain hilang tetapi masih ada ingatan, lalu kembali patroli jika pencarian selesai.

Prioritas keputusan dapat diringkas sebagai berikut:

```text
Visible Player
> Search Memory
> Default Patrol
```

Prioritas ini menunjukkan bahwa **pemain yang terlihat** selalu lebih penting daripada memory. Memory lebih penting daripada perilaku default. Urutan ini penting agar NPC tidak berperilaku tidak konsisten, misalnya tetap mencari padahal pemain sudah terlihat, atau langsung lupa padahal baru saja kehilangan pemain.

Secara konseptual, aturan decision ini dapat dipandang sebagai aturan pemilihan state pada sistem perilaku NPC. State `CHASE`, `SEARCH`, dan `PATROL` dipilih berdasarkan kondisi persepsi dan memory. Keputusan ini kemudian akan menjadi dasar untuk eksekusi gerakan, tetapi detail eksekusi tersebut baru dibahas pada slide berikutnya.

### Inti yang Harus Ditekankan

- **Decision** adalah tahap di mana NPC memilih perilaku berdasarkan **perception** dan **memory**.
- Urutan `IF`, `ELSE IF`, dan `ELSE` menentukan prioritas perilaku: `CHASE` lebih utama daripada `SEARCH`, dan `SEARCH` lebih utama daripada `PATROL`.
- Memory membuat NPC tidak langsung lupa; NPC dapat melakukan `SEARCH` ke `lastKnownPosition` sebelum kembali ke `PATROL`.
- Prioritas keputusan penting agar perilaku NPC konsisten dan lebih believable.

### Transisi ke Slide Berikutnya

Setelah decision menentukan perilaku apa yang harus dilakukan, langkah berikutnya adalah mengubah keputusan tersebut menjadi gerakan nyata di dalam game. Pada slide berikutnya, kita akan membahas **Action Praktikum**, yaitu bagaimana perilaku `PATROL`, `CHASE`, dan `SEARCH` dieksekusi melalui tujuan pergerakan NPC.

---

## Slide 076 - Action Praktikum

### Narasi

Setelah **Decision** menentukan perilaku NPC, tahap berikutnya adalah **Action**. Action berfungsi menerjemahkan keputusan menjadi tujuan gerak yang bisa dieksekusi oleh sistem navigasi.

```text
PATROL
→ waypoint

CHASE
→ Player

SEARCH
→ lastKnownPosition
```

Pada praktikum ini, setiap action dipetakan ke satu target posisi:

- **PATROL** menggunakan `waypoint`, yaitu titik-titik yang sudah ditentukan di scene.
- **CHASE** menggunakan posisi `Player` sebagai target.
- **SEARCH** menggunakan `lastKnownPosition`, yaitu posisi terakhir pemain yang pernah terlihat.

Semua action ini dapat dieksekusi melalui API Unity yang sama, yaitu `NavMeshAgent.SetDestination()`. Artinya, NPC tidak perlu menghitung path secara manual di setiap action. Cukup berikan tujuan, lalu `NavMeshAgent` akan menangani pencarian path dan pergerakan di atas `NavMesh`.

Pemisahan ini penting secara arsitektur:

1. **Decision** memilih *ke mana* NPC harus pergi.
2. **Navigation** mengeksekusi *bagaimana* NPC bergerak ke tujuan tersebut.

Dengan pola ini, perilaku NPC menjadi lebih modular. Jika nanti logika decision diganti, bagian action tetap bisa digunakan selama outputnya berupa target posisi.

Sebelum lanjut, mahasiswa perlu memahami bahwa `SetDestination()` bukan pengganti decision. Ia hanya menerjemahkan keputusan menjadi perintah navigasi. Kualitas perilaku NPC tetap bergantung pada apakah decision memilih `waypoint`, `Player`, atau `lastKnownPosition` dengan benar.

### Inti yang Harus Ditekankan

- **Action** adalah penerjemah keputusan menjadi target navigasi.
- `PATROL`, `CHASE`, dan `SEARCH` memiliki target yang berbeda: `waypoint`, `Player`, dan `lastKnownPosition`.
- `NavMeshAgent.SetDestination()` adalah titik eksekusi bersama untuk semua action.
- **Decision** menentukan tujuan; **Navigation** mengeksekusi pergerakan.

### Transisi ke Slide Berikutnya

Selanjutnya, kita akan merangkum seluruh komponen menjadi arsitektur final praktikum, mulai dari sensor, brain, memory, decision, action, hingga `NavMeshAgent` yang kembali memengaruhi game world.

---

## Slide 077 - Arsitektur Final Praktikum

### Narasi

Pada slide ini, kita melihat **arsitektur final** praktikum sebagai satu alur sistem yang utuh. Intuisi praktisnya sederhana: NPC tidak langsung bergerak, tetapi terlebih dahulu **merasakan** dunia, lalu **memutuskan** apa yang harus dilakukan, dan baru kemudian **mengeksekusi** gerakan.

```text
GAME WORLD
    │
    ▼
NPCSensor
    │
    ├── Distance
    ├── FOV
    └── Raycast
    │
    ▼
CanSeePlayer
    │
    ▼
NPCBrain
    │
    ├── Memory
    │   └── lastKnownPosition
    │
    ├── Decision
    │   ├── PATROL
    │   ├── CHASE
    │   └── SEARCH
    │
    └── Action
        │
        ▼
NavMeshAgent
    │
    ▼
GAME WORLD
```

Alur dimulai dari `GAME WORLD`, yaitu lingkungan tempat NPC dan player berada. Lingkungan ini menjadi sumber data bagi `NPCSensor`. Sensor bertugas membaca kondisi sekitar, misalnya jarak, bidang pandang, dan hasil raycast. Dengan kata lain, sensor mengubah informasi dunia menjadi sinyal yang bisa diproses oleh NPC.

Hasil sensor kemudian disaring menjadi `CanSeePlayer`. Nilai ini penting karena menjadi batas antara NPC yang hanya berada di dekat player dan NPC yang benar-benar “melihat” player. Jika `CanSeePlayer` bernilai benar, NPC dapat masuk ke perilaku yang lebih responsif. Jika tidak, NPC tetap dapat menggunakan informasi lain, seperti `lastKnownPosition`, untuk menentukan perilaku berikutnya.

Bagian inti dari arsitektur ini adalah `NPCBrain`. Di dalamnya terdapat tiga komponen utama:

- `Memory`, yang menyimpan informasi penting seperti `lastKnownPosition`.
- `Decision`, yang memilih perilaku berdasarkan kondisi saat ini, yaitu `PATROL`, `CHASE`, atau `SEARCH`.
- `Action`, yang menerjemahkan keputusan menjadi perintah gerak.

Pemisahan ini membuat sistem lebih mudah dipahami dan dikembangkan. `Memory` membantu NPC tidak langsung “lupa” posisi terakhir player ketika player keluar dari pandangan. `Decision` menjadi pusat logika perilaku, sedangkan `Action` menjadi jembatan antara keputusan dan eksekusi.

Setelah keputusan dibuat, `Action` memanggil `NavMeshAgent` untuk mengeksekusi pergerakan. `NavMeshAgent` bertanggung jawab membawa NPC menuju tujuan yang dipilih, misalnya waypoint untuk `PATROL`, posisi player untuk `CHASE`, atau `lastKnownPosition` untuk `SEARCH`. Hasil akhirnya kembali memengaruhi `GAME WORLD`, karena posisi NPC berubah dan dapat mengubah kondisi sensor pada frame berikutnya.

Yang harus dipahami mahasiswa adalah bahwa arsitektur ini bersifat **siklus**, bukan satu arah. Setiap perubahan posisi NPC atau player dapat mengubah hasil sensor, lalu mengubah keputusan, lalu mengubah aksi, dan seterusnya. Pola inilah yang membuat NPC terasa lebih hidup dan reaktif.

### Inti yang Harus Ditekankan

- `NPCSensor` adalah tahap **perception**, yaitu membaca `Distance`, `FOV`, dan `Raycast` dari lingkungan.
- `CanSeePlayer` menjadi kondisi penting yang menentukan apakah NPC benar-benar melihat player.
- `NPCBrain` memisahkan `Memory`, `Decision`, dan `Action` agar perilaku NPC lebih modular dan mudah dikembangkan.
- `NavMeshAgent` adalah eksekutor gerak, sedangkan `Decision` hanya memilih tujuan perilaku.
- Arsitektur ini membentuk **siklus perilaku**: sensor → keputusan → aksi → perubahan dunia → sensor kembali.

### Transisi ke Slide Berikutnya

Dengan arsitektur final ini, kita sudah memiliki gambaran utuh bagaimana praktikum 2 bekerja. Selanjutnya, kita akan membandingkannya dengan praktikum 1 untuk melihat bagaimana sistem ini berkembang dari versi sederhana menjadi versi yang lebih modular dan reaktif.

---

## Slide 078 - Perbedaan Praktikum 1 dan Praktikum 2

### Narasi

Pada slide ini kita membandingkan dua tahap praktikum secara konseptual. Intinya, **Praktikum 1** adalah fondasi sederhana: NPC bereaksi terhadap jarak dan memberikan umpan balik visual. **Praktikum 2** mengembangkan fondasi tersebut menjadi perilaku NPC yang lebih utuh: NPC dapat melihat, mengingat, memutuskan, dan bergerak di dunia game.

Perbedaan pertama ada pada **perception**. Praktikum 1 hanya menggunakan `Distance`, sehingga NPC mengetahui keberadaan pemain hanya berdasarkan jarak. Praktikum 2 menambahkan `FOV` dan `Raycast`, sehingga NPC memiliki batas pandangan dan garis pandang. Ini penting karena dalam game, NPC tidak boleh selalu tahu posisi pemain hanya karena dekat; ia harus “melihat” secara spasial.

Perbedaan berikutnya ada pada **state** dan **memory**. Praktikum 1 menggunakan state sederhana seperti `IDLE` dan `ALERT`. Praktikum 2 memakai `PATROL`, `CHASE`, dan `SEARCH`, yang lebih dekat dengan perilaku NPC yang realistis. Tambahan `lastKnownPosition` membuat NPC tidak langsung kehilangan target saat pemain menghilang; ia bisa mengingat posisi terakhir yang terlihat lalu mencari di sekitar titik itu.

Perbedaan ketiga ada pada **navigation** dan **action**. Praktikum 1 hanya mengubah warna sebagai umpan balik visual. Praktikum 2 memakai `NavMeshAgent` sehingga NPC benar-benar bergerak di dunia game: patroli, mengejar, dan mencari. Dengan demikian, keputusan dari `NPCBrain` tidak hanya mengubah tampilan, tetapi menghasilkan perilaku yang bisa diamati di scene.

Dari sisi **architecture**, Praktikum 1 bersifat sederhana dan langsung. Praktikum 2 menjadi modular: sensor, otak, memori, keputusan, dan eksekusi dipisahkan. Pemisahan ini memudahkan debugging karena mahasiswa bisa memeriksa apakah masalah ada pada `FOV`, `LOS`, `memory`, atau `state`, bukan hanya radius dan state.

Sebelum lanjut, mahasiswa perlu memahami bahwa perbedaan ini bukan sekadar menambah fitur, tetapi perubahan cara kerja agent: dari reaksi sederhana menjadi perilaku berbasis persepsi, memori, keputusan, dan navigasi.

### Inti yang Harus Ditekankan

- Praktikum 1 adalah fondasi: `Distance`, state sederhana, dan umpan balik visual.
- Praktikum 2 mengembangkan NPC menjadi agent yang memiliki **perception**, **memory**, **decision**, dan **navigation**.
- `FOV` dan `Raycast` membuat NPC “melihat” secara spasial, bukan hanya bereaksi terhadap jarak.
- `lastKnownPosition` memberi NPC kemampuan mencari target setelah kehilangan pandangan.
- `NavMeshAgent` mengubah keputusan menjadi gerakan nyata di world.
- Arsitektur modular memudahkan debugging: `FOV`, `LOS`, `memory`, dan `state` bisa diperiksa terpisah.

### Transisi ke Slide Berikutnya

Setelah memahami perbedaan ini, kita masuk ke konsep modular yang harus benar-benar dipahami: apa yang dilihat `NPCSensor`, apa yang diingat `NPCBrain`, mengapa `Decision` mengubah state, dan bagaimana `NavMeshAgent` menjalankan gerakan NPC.

---

## Slide 079 - Konsep Modular yang Harus Dipahami

### Narasi

Pada slide ini, kita berhenti sejenak dari detail implementasi dan melihat **kerangka berpikir** yang harus dimiliki mahasiswa. Dalam praktikum ini, NPC tidak cukup hanya “bergerak” atau “mengubah warna”. Mahasiswa perlu bisa menjelaskan **mengapa** NPC melakukan sesuatu.

```text
NPCSensor
→ apa yang dilihat?

NPCBrain
→ apa yang diingat?

Decision
→ mengapa state berubah?

NavMeshAgent
→ bagaimana NPC bergerak?
```

Alur ini bisa dibaca sebagai **pipeline sederhana** dari perilaku NPC. `NPCSensor` adalah bagian **perception**, yaitu komponen yang menentukan apa yang bisa diketahui NPC dari lingkungan. Pada praktikum sebelumnya, ini bisa berupa jarak, tetapi pada pengembangan berikutnya bisa mencakup **FOV** dan **raycast** untuk mengecek apakah objek benar-benar terlihat.

`NPCBrain` adalah bagian **memory** atau penyimpanan informasi internal. Ia tidak hanya tahu apa yang sedang terjadi, tetapi juga menyimpan informasi penting seperti **last known position** atau kondisi terakhir yang diketahui NPC. Tanpa bagian ini, NPC akan sulit menunjukkan perilaku yang lebih masuk akal, misalnya mencari pemain setelah pemain menghilang.

`Decision` adalah bagian **decision making** atau logika perubahan state. Di sinilah mahasiswa harus bisa menjelaskan alasan transisi, misalnya dari `PATROL` ke `CHASE`, dari `CHASE` ke `SEARCH`, atau kembali ke `PATROL`. Ini bukan sekadar mengganti nilai state, tetapi menentukan **kapan** dan **mengapa** state berubah berdasarkan hasil sensor dan memory.

`NavMeshAgent` adalah bagian **navigation** atau eksekusi gerak. Setelah decision menentukan target atau mode perilaku, `NavMeshAgent` membantu NPC bergerak di atas NavMesh menuju posisi yang diinginkan. Jadi, jika NPC tidak bergerak sesuai target, masalahnya bisa ada pada decision, target yang salah, atau konfigurasi navigation.

Inti dari konsep modular adalah **pemisahan tanggung jawab**. Sensor tidak perlu mengurus gerak, brain tidak perlu menghitung raycast, decision tidak perlu mengatur pathfinding, dan `NavMeshAgent` tidak perlu memutuskan kapan NPC harus mengejar. Pemisahan ini membuat perilaku NPC lebih mudah diuji, di-debug, dan dikembangkan.

Jika mahasiswa hanya bisa menjalankan project tetapi tidak mampu menjelaskan alur **sensor → memory → decision → movement**, maka tujuan praktikum belum tercapai. Yang diharapkan bukan hanya NPC yang “berjalan”, tetapi mahasiswa yang memahami **arsitektur perilaku** di baliknya.

### Inti yang Harus Ditekankan

- `NPCSensor` menjawab pertanyaan **apa yang dilihat** oleh NPC.
- `NPCBrain` menjawab pertanyaan **apa yang diingat** oleh NPC.
- `Decision` menjawab pertanyaan **mengapa state berubah**.
- `NavMeshAgent` menjawab pertanyaan **bagaimana NPC bergerak**.
- Modularitas membuat perilaku NPC lebih mudah dipahami, diuji, dan dikembangkan.

### Transisi ke Slide Berikutnya

Setelah memahami empat komponen modular ini, langkah berikutnya adalah menguji apakah alur perilaku NPC benar-benar bekerja sesuai kondisi yang diharapkan.

---

## Slide 080 - Skenario Pengujian

### Narasi

Pada slide ini, fokusnya bukan lagi membuat NPC bergerak, tetapi memastikan bahwa **perilaku NPC** dapat dijelaskan secara konsisten. Mahasiswa perlu memperlakukan NPC sebagai sistem kecil yang terdiri dari `NPCSensor`, `NPCBrain`, `Decision`, dan `NavMeshAgent`. Jika salah satu bagian tidak berfungsi, NPC mungkin tetap bergerak, tetapi perilaku akhirnya tidak dapat dipertanggungjawabkan.

Skenario pengujian yang diberikan adalah minimal, artinya ini adalah batas bawah yang harus lulus sebelum masuk ke eksperimen parameter. Tujuannya adalah menutupi tiga hal penting: apakah NPC mampu **melihat target**, apakah **keputusan state** berubah pada kondisi yang tepat, dan apakah **gerakan NPC** mengikuti keputusan tersebut.

```text
1. Player jauh
→ PATROL

2. Player dekat tetapi di belakang
→ PATROL

3. Player di depan
→ CHASE

4. Player terhalang Wall
→ tidak terlihat

5. Player hilang saat CHASE
→ SEARCH

6. Player muncul saat SEARCH
→ CHASE

7. Search timeout
→ PATROL
```

Secara konseptual, skenario ini menguji transisi state pada **finite state machine** sederhana.

- Skenario 1 dan 2 menguji **batas persepsi**: player terlalu jauh atau berada di belakang NPC, maka NPC seharusnya tetap `PATROL`.
- Skenario 3 menguji **deteksi target**: player berada di depan dan terlihat, maka NPC seharusnya beralih ke `CHASE`.
- Skenario 4 menguji **line of sight**: meskipun player dekat, dinding menghalangi pandangan, sehingga NPC tidak boleh menganggap player terlihat.
- Skenario 5 menguji **kehilangan target**: jika player hilang saat NPC sedang mengejar, NPC harus masuk ke `SEARCH`.
- Skenario 6 menguji **pemulihan target**: jika player muncul kembali selama pencarian, NPC harus kembali ke `CHASE`.
- Skenario 7 menguji **timeout**: jika pencarian tidak menemukan player, NPC harus kembali ke `PATROL`.

Dalam praktik, mahasiswa sebaiknya tidak hanya melihat apakah NPC bergerak, tetapi juga mencatat state apa yang aktif pada setiap skenario. Jika NPC mengejar player yang seharusnya terhalang dinding, masalahnya kemungkinan ada pada sensor atau line of sight. Jika NPC tidak kembali ke `PATROL` setelah timeout, masalahnya ada pada logika state transition. Jika NPC sudah memutuskan `CHASE` tetapi tidak bergerak ke arah player, masalahnya ada pada `NavMeshAgent` atau tujuan gerak.

Hal yang harus dipahami sebelum lanjut adalah bahwa pengujian **sistematis** lebih penting daripada mencoba parameter secara acak. Dengan skenario minimal ini, mahasiswa dapat memisahkan masalah persepsi, masalah keputusan, dan masalah gerakan. Setelah ketujuh skenario ini lulus, barulah perubahan parameter dapat diinterpretasikan sebagai perubahan perilaku, bukan sebagai bug.

### Inti yang Harus Ditekankan

- Tujuh skenario minimal adalah dasar validasi **perilaku NPC**, bukan sekadar daftar fitur.
- Skenario tersebut menutupi jarak, sudut pandang, line of sight, kehilangan target, dan timeout.
- Jika hasil pengujian salah, mahasiswa perlu melacak komponen yang bertanggung jawab: sensor, decision, state, atau movement.
- Pengujian harus sistematis agar perubahan perilaku dapat dijelaskan, bukan hanya terlihat.

### Transisi ke Slide Berikutnya

Setelah skenario dasar ini lulus, langkah berikutnya adalah mencoba mengubah parameter perilaku dan mengamati bagaimana perubahan tersebut memengaruhi pengalaman bermain.

---

## Slide 081 - Eksperimen Parameter

### Narasi

Setelah skenario pengujian dipahami, langkah berikutnya adalah **eksperimen parameter**. Tujuannya bukan sekadar membuat NPC bergerak, tetapi melihat bagaimana nilai numerik dan bentuk lingkungan mengubah perilaku agen.

Pada slide ini, mahasiswa dapat mengubah beberapa parameter penting:

- `View Radius`
- `View Angle`
- `Player Speed`
- `Chase Speed`
- `Search Duration`
- `Obstacle layout`

Parameter ini menentukan apa yang bisa “dilihat” NPC, seberapa cepat NPC mengejar, berapa lama NPC mencari, dan bagaimana rintangan memengaruhi keputusan.

Intuisi praktisnya sederhana: **parameter adalah tuas desain**. Jika `View Radius` terlalu besar, NPC terasa terlalu cepat menyadari pemain. Jika `View Angle` terlalu sempit, NPC mungkin tidak melihat pemain yang berada di samping atau belakang. Jika `Chase Speed` lebih tinggi dari `Player Speed`, NPC akan mudah mengejar. Jika `Search Duration` terlalu pendek, NPC terlalu cepat menyerah. Jika `Obstacle layout` berubah, jalur dan visibilitas NPC ikut berubah.

Hubungan yang harus dipahami mahasiswa adalah:

```text
Parameter → Behavior → Gameplay
```

Artinya, perubahan kecil pada parameter dapat menghasilkan perubahan besar pada pengalaman bermain. Misalnya, NPC yang awalnya terasa adil bisa menjadi terlalu agresif, terlalu mudah dikalahkan, atau terasa tidak konsisten hanya karena satu nilai diubah.

Dalam konteks arsitektur agen game, parameter biasanya masuk ke komponen sensor, steering, state machine, atau behavior tree. `View Radius` dan `View Angle` memengaruhi deteksi. `Player Speed` dan `Chase Speed` memengaruhi steering dan pathfinding. `Search Duration` memengaruhi transisi state. `Obstacle layout` memengaruhi raycast, pathfinding, dan keputusan apakah NPC tetap mengejar atau mencari.

Sebelum lanjut, mahasiswa perlu terbiasa membaca perilaku dari parameter, bukan hanya melihat kode. Jika NPC tidak berperilaku seperti yang diharapkan, langkah pertama adalah memeriksa parameter sensor dan lingkungan, bukan langsung mengubah logika secara besar-besaran.

### Inti yang Harus Ditekankan

- **Parameter adalah bagian dari desain gameplay**, bukan hanya angka teknis.
- Perubahan `View Radius`, `View Angle`, `Chase Speed`, `Search Duration`, dan `Obstacle layout` dapat mengubah perilaku NPC secara signifikan.
- Mahasiswa harus mengamati hubungan **Parameter → Behavior → Gameplay** secara sistematis.
- Eksperimen sebaiknya dilakukan dengan mengubah satu parameter pada satu waktu agar efeknya mudah dipahami.

### Transisi ke Slide Berikutnya

Setelah parameter dipahami, kita akan masuk ke kegagalan umum pertama: NPC tidak melihat pemain. Di situ kita akan memeriksa sensor dan kondisi visibilitas secara lebih detail.

---

## Slide 082 - Common Failure 1: NPC Tidak Melihat Player

### Narasi

Pada slide ini kita membahas kegagalan umum pertama: **NPC tidak melihat Player**. Masalah ini sering muncul ketika NPC seharusnya mengejar, tetapi tetap diam atau tidak bereaksi. Intuisi pentingnya adalah: NPC tidak bisa mengambil keputusan jika **sensor** tidak menghasilkan informasi yang benar.

Sebelum memeriksa logika perilaku, kita perlu memastikan bahwa NPC benar-benar "melihat" Player. Dalam konteks ini, "melihat" bukan hanya soal jarak, tetapi juga sudut pandang, arah NPC, dan apakah ada penghalang di antara keduanya.

Periksa komponen berikut secara berurutan:

- `Player reference`: apakah NPC merujuk objek Player yang aktif?
- `View Radius`: apakah Player berada dalam jarak yang diizinkan?
- `View Angle`: apakah Player berada di bidang pandang NPC?
- arah NPC: apakah NPC menghadap ke arah yang sesuai?
- `obstacleMask`: apakah mask yang digunakan sesuai dengan layer penghalang?
- `Raycast`: apakah raycast dipanggil dari posisi dan arah yang benar?
- posisi Player: apakah posisi Player sudah valid dan ter-update?

Untuk mempercepat diagnosis, gunakan nilai debug:

```text
CanSeePlayer
```

Jika `CanSeePlayer` bernilai `false`, masalah biasanya ada pada **sensor**, bukan pada logika perilaku NPC. Artinya, NPC tidak menerima sinyal bahwa Player terlihat, sehingga perilaku seperti `chase` tidak akan aktif.

Urutan pemeriksaan yang praktis:

1. Pastikan `Player reference` tidak kosong.
2. Cek `View Radius` dan `View Angle`.
3. Cek arah NPC terhadap posisi Player.
4. Cek `Raycast` dan `obstacleMask`.
5. Amati nilai `CanSeePlayer` saat Player bergerak.

Dengan cara ini, mahasiswa dapat memisahkan masalah **perception** dari masalah **decision making**. Jika sensor sudah benar, barulah kita perlu memeriksa bagian perilaku NPC.

### Inti yang Harus Ditekankan

- **NPC tidak melihat Player** biasanya bermula dari sensor yang salah, bukan dari logika perilaku.
- Nilai `CanSeePlayer` adalah indikator utama: jika `false`, periksa `View Radius`, `View Angle`, arah NPC, `Raycast`, dan `obstacleMask`.
- Pastikan `Player reference` dan posisi Player valid sebelum menyalahkan perilaku NPC.

### Transisi ke Slide Berikutnya

Jika sensor sudah benar tetapi NPC tetap terlihat "melihat" melewati dinding, kita akan masuk ke kegagalan umum berikutnya: **NPC Melihat Lewat Wall**.

---

## Slide 083 - Common Failure 2: NPC Melihat Lewat Wall

### Narasi

Pada slide ini kita membahas kegagalan sensor yang berbeda dari kasus sebelumnya. Pada kegagalan pertama, NPC tidak melihat player karena referensi player, radius, sudut pandang, atau arah NPC belum benar. Pada kasus ini, masalahnya justru NPC bisa “melihat” player meskipun ada dinding di antara keduanya. Artinya, fungsi sensor seperti `CanSeePlayer` dapat mengembalikan nilai `true` secara keliru karena raycast tidak terhalang oleh objek yang seharusnya dianggap penghalang.

Intuisi praktisnya adalah begini: sensor NPC tidak cukup hanya mengukur jarak dan sudut pandang. Sensor juga harus tahu apa yang boleh menghalangi pandangan. Dalam game, dinding, pintu tertutup, atau objek solid biasanya harus menjadi penghalang. Jika dinding tidak dikenali sebagai penghalang, maka raycast akan menembus dinding dan NPC seolah memiliki pandangan menembus objek.

Periksa dua hal utama:

- `Wall Layer = Obstacle`
- `NPCSensor` memiliki `Obstacle Mask = Obstacle`

```text
Wall Layer = Obstacle
NPCSensor
Obstacle Mask = Obstacle
```

Artinya, dinding harus berada pada layer `Obstacle`, dan sensor NPC harus menggunakan mask yang sama saat melakukan raycast. **`LayerMask`** berfungsi sebagai filter: raycast hanya akan berinteraksi dengan objek yang layer-nya termasuk dalam mask tersebut. Jika layer dinding tidak sesuai, raycast akan melewati dinding karena dinding tidak dianggap sebagai collider yang relevan.

Hal lain yang sering terlewat adalah dinding harus memiliki **`Collider`**. Dalam banyak engine, raycast hanya berinteraksi dengan objek yang memiliki collider aktif. Jadi meskipun layer sudah benar, jika dinding hanya berupa visual tanpa collider, atau collider-nya tidak aktif, raycast tetap bisa menembusnya. Mahasiswa perlu memahami bahwa “melihat” dalam NPC biasanya bukan masalah grafis, melainkan masalah deteksi fisika: apakah raycast mengenai collider penghalang sebelum mencapai player.

Urutan pemeriksaan yang disarankan adalah:

1. Pastikan posisi player dan NPC tidak berada di dalam collider yang sama secara tidak wajar.
2. Pastikan dinding berada pada layer `Obstacle`.
3. Pastikan `NPCSensor` menggunakan `Obstacle Mask` yang mencakup layer `Obstacle`.
4. Pastikan dinding memiliki `Collider` aktif.
5. Uji dengan raycast debug: jika garis raycast berhenti di dinding, sensor sudah benar; jika garis menembus dinding, masalah ada pada layer, mask, atau collider.

Poin penting yang harus dipahami sebelum lanjut adalah bahwa sensor NPC adalah modul yang harus diuji secara terpisah. Jika sensor salah, keputusan NPC berikutnya akan salah meskipun logika decision sudah benar. Dalam arsitektur perilaku game, pemisahan antara sensor, decision, dan actuator membantu kita menemukan kegagalan dengan lebih cepat.

### Inti yang Harus Ditekankan

- NPC melihat lewat dinding biasanya bukan karena player tidak terdeteksi, tetapi karena **raycast tidak terfilter oleh penghalang**.
- **`LayerMask`** menentukan objek mana yang dianggap raycast sebagai penghalang; `Wall Layer = Obstacle` dan `Obstacle Mask = Obstacle` harus konsisten.
- Dinding harus memiliki **`Collider`** aktif agar raycast dapat berhenti dan sensor NPC tidak salah menyatakan player terlihat.
- Debugging sensor harus dilakukan sebelum menilai decision atau pergerakan NPC.

### Transisi ke Slide Berikutnya

Setelah sensor dan keputusan NPC sudah benar, masih ada kemungkinan NPC tetap tidak bergerak. Pada slide berikutnya, kita akan memeriksa sisi actuator, yaitu bagian yang mengubah keputusan menjadi gerakan nyata di dalam dunia game.

---

## Slide 084 - Common Failure 3: NPC Tidak Bergerak

### Narasi

Pada slide ini kita melihat kegagalan umum ketiga: **NPC tidak bergerak**. Masalah ini sering muncul ketika sensor sudah benar dan keputusan sudah benar, tetapi NPC tetap diam di tempat. Intuisinya, dalam arsitektur agen game ada tiga lapisan yang harus bekerja bersama: **sensor**, **decision**, dan **actuator**. Jika dua lapisan pertama sudah benar tetapi actuator gagal, perilaku akhir tetap salah.

Untuk NPC berbasis pathfinding di Unity, actuator biasanya berupa `NavMeshAgent` yang berjalan di atas `NavMesh`. Jadi, sebelum menyalahkan `state machine` atau `behavior tree`, periksa apakah agen benar-benar memiliki jalur yang bisa dieksekusi.

Periksa poin-poin berikut:

- `NavMesh` sudah dibuat dan mencakup area yang dibutuhkan.
- NPC berada di atas `NavMesh`, bukan melayang atau berada di area yang tidak valid.
- `NavMeshAgent` terpasang pada NPC dan tidak disabled.
- `destination` valid, bukan posisi yang tidak valid atau berada di luar `NavMesh`.
- `Patrol Point` berada di atas `NavMesh`, karena target patrol yang tidak valid membuat agent tidak punya tujuan yang bisa dicapai.

`NavMesh` adalah permukaan yang dapat dilalui. `NavMeshAgent` adalah komponen yang mengubah target menjadi gerakan. Jika `destination` berada di luar `NavMesh`, agent mungkin tidak menghasilkan path. Jika NPC tidak berada di atas `NavMesh`, agent tidak bisa mulai bergerak. Jika `Patrol Point` tidak valid, perilaku patrol gagal meskipun `state` sudah berubah.

Ini menunjukkan pentingnya **modular debugging**. Kita tidak langsung menguji seluruh sistem sekaligus. Kita isolasi masalahnya: apakah sensor melihat? apakah decision memilih `action` yang benar? apakah actuator mampu mengeksekusi `action` tersebut? Pada slide ini, fokusnya adalah actuator.

Hal yang harus dipahami mahasiswa sebelum lanjut adalah: cek visualisasi `NavMesh`, cek posisi NPC dan target, cek status `NavMeshAgent`, dan pastikan path bisa dibuat. Setelah actuator sehat, baru masalah perilaku seperti chase, search, atau patrol bisa dianalisis lebih dalam.

### Inti yang Harus Ditekankan

- NPC tidak bergerak sering bukan masalah decision, tetapi masalah **actuator**.
- Periksa `NavMesh`, posisi NPC, `NavMeshAgent`, `destination`, dan `Patrol Point`.
- Gunakan **modular debugging**: sensor, decision, actuator.

### Transisi ke Slide Berikutnya

Setelah memastikan NPC bisa bergerak, kita lanjut ke kegagalan berikutnya: `SEARCH` tidak bekerja. Di sana masalahnya bukan hanya pathfinding, tetapi memory seperti `lastKnownPosition` dan kondisi transisi `CHASE` ke `SEARCH`.

---

## Slide 085 - Common Failure 4: SEARCH Tidak Bekerja

### Narasi

State `SEARCH` sering dianggap otomatis bekerja ketika NPC kehilangan target. Padahal, `SEARCH` bukan sekadar label state; ia membutuhkan **memori posisi terakhir** yang valid. Jika NPC tidak menyimpan posisi terakhir pemain, maka saat masuk ke `SEARCH`, agen tidak memiliki tujuan untuk dikejar.

Dalam arsitektur perilaku berbasis state, transisi dari `CHASE` ke `SEARCH` biasanya terjadi ketika deteksi visual atau sensor berhenti aktif. Namun, transisi yang benar saja belum cukup. Jika data pendukung tidak terisi, perilaku NPC akan tampak “mati” atau tidak bergerak, meskipun state sudah berubah.

Periksa hal-hal berikut:

- `lastKnownPosition` sudah diisi saat NPC terakhir melihat target.
- `hasLastKnownPosition` bernilai `true` ketika memori posisi tersedia.
- `searchDuration` cukup lama agar NPC sempat menuju posisi terakhir.
- transisi `CHASE` → `SEARCH` benar-benar terjadi dan tidak tertimpa state lain.
- `NavMesh` memiliki path yang valid menuju `lastKnownPosition`.

Jika memori tidak terisi, kondisi yang terjadi adalah:

```text
SEARCH tidak punya target.
```

Artinya, NPC masuk ke state `SEARCH`, tetapi tidak ada koordinat tujuan yang bisa diberikan ke `NavMeshAgent`. Akibatnya, agen tidak bergerak, berhenti di tempat, atau hanya melakukan perilaku default tanpa arah.

Untuk debugging, mahasiswa perlu memeriksa nilai runtime, bukan hanya melihat nama state. Pastikan `lastKnownPosition` diperbarui pada saat yang tepat, misalnya ketika NPC masih mendeteksi pemain. Setelah itu, pastikan `NavMeshAgent` benar-benar menerima tujuan yang valid dan berada di area yang dapat dilalui.

Poin penting yang harus dipahami adalah: **state `SEARCH` bergantung pada memori agen**. Tanpa memori posisi terakhir, perilaku pencarian tidak dapat dieksekusi secara bermakna.

### Inti yang Harus Ditekankan

- `SEARCH` membutuhkan `lastKnownPosition` yang valid.
- `hasLastKnownPosition` harus benar agar state memiliki target.
- Transisi `CHASE` → `SEARCH` harus benar dan tidak menutupi masalah data.
- `NavMesh` harus memiliki path yang valid menuju posisi terakhir.
- Jika memori kosong, `SEARCH` tidak akan menghasilkan perilaku pencarian yang benar.

### Transisi ke Slide Berikutnya

Setelah memastikan state `SEARCH` memiliki target dan dapat dieksekusi, pembahasan berikutnya akan masuk ke tantangan pengembangan perilaku NPC, dengan tetap menggunakan arsitektur dasar yang sama.

---

## Slide 086 - Challenge Pengembangan

### Narasi

Slide ini membahas **tantangan pengembangan** setelah perilaku dasar NPC sudah berjalan. Poin utamanya adalah mahasiswa tidak perlu membangun sistem baru untuk setiap fitur tambahan. Cukup kembangkan perilaku yang sudah ada dengan tetap menjaga konsistensi state, sensor, `memory`, dan proses pengambilan keputusan.

Fitur yang dicontohkan bersifat opsional, tetapi sangat berguna untuk membuat NPC terasa lebih hidup. Beberapa contohnya adalah:

- NPC berhenti di `waypoint` dengan rapi.
- NPC melihat kiri-kanan saat berada di state `SEARCH`.
- Muncul indikator `!` saat NPC masuk state `CHASE`.
- Muncul indikator `?` saat NPC berada di state `SEARCH`.
- NPC memiliki `hearing sensor` untuk merespons suara.
- Ada beberapa guard yang saling berkoordinasi.
- Guard dapat berbagi peringatan melalui `shared alert`.

Secara konseptual, fitur-fitur ini berada pada lapisan yang berbeda. Pergerakan ke `waypoint` berkaitan dengan pathfinding dan steering. Gerakan melihat kiri-kanan lebih ke animasi atau perilaku lokal saat state tertentu aktif. Indikator `!` dan `?` berfungsi sebagai umpan balik visual, baik untuk pemain maupun untuk debugging. Sementara itu, `hearing sensor` menambah sumber input baru yang dapat memicu transisi state.

Poin penting yang harus dipahami mahasiswa adalah: **fitur tambahan tidak boleh merusak arsitektur dasar**. Jika NPC sudah memiliki state seperti `CHASE` dan `SEARCH`, maka pengembangan sebaiknya tetap mengikuti alur yang sama. Misalnya, suara yang terdengar tidak langsung membuat NPC bergerak asal-asalan, tetapi masuk ke proses sensor, kemudian memperbarui `memory`, lalu memicu transisi state yang sesuai.

Dengan cara ini, sistem tetap mudah dibaca, mudah diuji, dan mudah dikembangkan. Mahasiswa dapat memulai dari satu NPC, memperbaiki perilaku dasar, lalu menambahkan satu fitur kecil pada satu waktu. Pendekatan ini penting karena masalah pada perilaku game biasanya muncul ketika terlalu banyak perubahan dilakukan sekaligus.

### Inti yang Harus Ditekankan

- Pengembangan fitur tambahan harus tetap menggunakan **arsitektur dasar** yang sama.
- Setiap fitur sebaiknya dipisahkan: pergerakan, animasi, indikator visual, sensor, dan komunikasi antar NPC.
- Indikator `!` dan `?` membantu memahami state NPC secara visual.
- `hearing sensor` adalah contoh penambahan input baru yang dapat memicu transisi state.
- `multiple guards` dan `shared alert` menjadi dasar menuju perilaku kelompok, tetapi detailnya dibahas pada slide berikutnya.

### Transisi ke Slide Berikutnya

Setelah memahami bahwa fitur tambahan dapat dikembangkan tanpa mengubah arsitektur utama, langkah berikutnya adalah melihat apa yang terjadi ketika NPC tidak lagi tunggal. Pada slide berikutnya, kita akan membahas **multiple agents**, yaitu bagaimana beberapa guard dapat memiliki sensor, `memory`, dan state masing-masing.

---

## Slide 087 - Multiple Agents

### Narasi

Pada slide ini kita memperluas satu NPC menjadi beberapa **agent**. Jika satu guard sudah memiliki arsitektur perilaku dasar, maka ketika NPC diduplikasi, setiap duplikat tetap membawa struktur internal yang sama.

```text
NPC_Guard_A
NPC_Guard_B
NPC_Guard_C
```

Yang penting bukan hanya jumlah objeknya, tetapi setiap **agent** memiliki komponen internal yang terpisah:

- `sensor` sendiri untuk menerima informasi lingkungan,
- `memory` sendiri untuk menyimpan apa yang pernah dilihat atau diketahui,
- `brain` sendiri untuk memproses keputusan,
- `state` sendiri untuk menentukan perilaku saat ini.

Artinya, `NPC_Guard_A` tidak harus selalu mengikuti `NPC_Guard_B`. Jika satu guard melihat pemain, guard tersebut dapat masuk ke state `CHASE`, sementara guard lain masih berada di `PATROL` atau `SEARCH` jika belum menerima informasi.

```text
Setiap agent dapat mengambil keputusan secara independen.
```

Independensi ini penting karena game biasanya tidak hanya memiliki satu NPC. Dengan beberapa **agent**, perilaku dunia menjadi lebih hidup: satu agent dapat bereaksi lebih cepat, agent lain dapat tetap waspada, dan masing-masing tetap menjalankan logika perilakunya sendiri.

Hal yang harus dipahami mahasiswa sebelum lanjut adalah: duplikasi NPC bukan sekadar menambah objek, tetapi menambah satu unit perilaku lengkap. Selama setiap agent masih memiliki `sensor`, `memory`, `brain`, dan `state`, arsitektur dasar tetap berlaku.

### Inti yang Harus Ditekankan

- Setiap **agent** adalah unit perilaku mandiri, bukan sekadar salinan visual.
- Komponen `sensor`, `memory`, `brain`, dan `state` harus dimiliki secara terpisah oleh setiap agent.
- Keputusan dapat berbeda antar agent karena input dan state masing-masing berbeda.
- Konsep ini menjadi dasar menuju **multi-agent** dan perilaku taktis.

### Transisi ke Slide Berikutnya

Setelah kita memastikan beberapa agent dapat berjalan secara independen, langkah berikutnya adalah memperkaya jenis input yang diterima agent. Pada slide berikutnya, kita akan melihat bagaimana sensor pendengaran dapat menjadi bagian baru dari arsitektur yang sama.

---

## Slide 088 - Hearing sebagai Sensor Baru

### Narasi

Pada slide sebelumnya, setiap NPC sudah memiliki **sensor**, **memory**, **brain**, dan **state** sendiri. Pada slide ini, kita menambahkan satu jenis sensor baru, yaitu **hearing**.

Intuisi praktisnya adalah NPC tidak harus selalu melihat pemain untuk bereaksi. Jika pemain membuat suara, NPC dapat mendengar, mengingat posisi suara, lalu memutuskan untuk bergerak ke arah sumber suara.

Alur dasarnya adalah:

```text
Player menghasilkan suara
        ↓
NPC menerima hearing event
        ↓
NPC menyimpan sound position
        ↓
NPC menuju sumber suara
```

Proses ini tetap mengikuti pipeline utama:

1. **Sensor**: NPC menerima `hearing event` dari pemain, misalnya posisi suara, volume, atau jenis suara.
2. **Memory**: NPC menyimpan `sound position` ke variabel internal seperti `lastSoundPosition` atau `soundTime`.
3. **Decision**: NPC menilai informasi tersebut dan memilih state seperti `INVESTIGATE`, `CHASE`, atau `SEARCH`.
4. **Action**: NPC melakukan aksi, misalnya bergerak menuju `sound position`, menoleh ke arah suara, atau memperbarui target.

```text
Sensor
→ Memory
→ Decision
→ Action
```

Yang berubah adalah jenis sensor, bukan arsitektur agent. **Hearing** hanya menjadi input baru yang masuk ke struktur yang sama.

Hal yang harus dipahami sebelum lanjut adalah bahwa penambahan sensor memperkaya perilaku NPC tanpa membuat sistem menjadi tidak konsisten. Selama event didengar, disimpan, dievaluasi, dan diubah menjadi aksi, NPC tetap dapat berperilaku secara independen.

### Inti yang Harus Ditekankan

- **Hearing** adalah jenis sensor baru yang memungkinkan NPC bereaksi terhadap suara, bukan hanya penglihatan.
- Arsitektur tetap: **Sensor → Memory → Decision → Action**.
- `sound position` disimpan sebagai memory agar NPC dapat mengambil keputusan berdasarkan informasi suara.
- Keputusan NPC dapat berupa `INVESTIGATE`, `CHASE`, atau `SEARCH`, tergantung aturan perilaku.
- Penambahan sensor memperkaya perilaku NPC tanpa mengubah struktur dasar agent.

### Transisi ke Slide Berikutnya

Setelah NPC memutuskan untuk bergerak menuju sumber suara, pertanyaan berikutnya adalah bagaimana pergerakan itu dieksekusi secara halus dan realistis. Pada slide berikutnya, kita akan menghubungkan materi ini dengan pertemuan 3 yang membahas movement system, steering behavior, `Seek`, `Arrive`, `Wander`, dan obstacle avoidance.

---

## Slide 089 - Hubungan dengan Materi Pertemuan 3

### Narasi

Slide ini membantu mahasiswa melihat posisi materi hari ini dalam alur kuliah. Pertemuan 2 berfokus pada **apa yang dilakukan NPC** dalam situasi tertentu. Artinya, kita sudah membahas bagaimana agent memilih perilaku tingkat tinggi, misalnya `PATROL`, `CHASE`, atau `SEARCH`.

```text
Pertemuan 2: APA yang NPC lakukan?
Pertemuan 3: BAGAIMANA NPC bergerak?
```

Perbedaan ini penting. Pada pertemuan 2, fokusnya ada pada **decision** dan **behavior**: kapan NPC patroli, kapan mengejar, dan kapan mencari. Pada pertemuan 3, fokusnya bergeser ke **execution movement**: bagaimana NPC benar-benar berpindah posisi di environment agar perilaku tersebut terlihat natural.

Beberapa topik yang akan dibahas nanti antara lain:

- **movement system** sebagai eksekusi dari keputusan agent.
- **steering behavior** untuk mengarahkan kecepatan dan orientasi NPC.
- `Seek` untuk bergerak menuju target.
- `Arrive` untuk mendekati target dengan perlambatan.
- `Wander` untuk gerakan acak yang tetap terkontrol.
- **obstacle avoidance** agar NPC tidak menabrak objek.

Dengan cara ini, mahasiswa tidak perlu menganggap perilaku NPC sebagai satu blok tunggal. Perilaku seperti `CHASE` adalah keputusan, sedangkan `Seek` atau `Arrive` adalah cara keputusan itu dieksekusi pada level gerak.

### Inti yang Harus Ditekankan

- Pertemuan 2 menjawab **apa** yang dilakukan NPC, misalnya `PATROL`, `CHASE`, `SEARCH`.
- Pertemuan 3 menjawab **bagaimana** NPC bergerak, melalui movement, steering, dan obstacle avoidance.
- Decision memilih perilaku; movement system mengeksekusi perilaku tersebut.
- `Seek`, `Arrive`, `Wander`, dan obstacle avoidance adalah teknik gerak, bukan pengganti decision.

### Transisi ke Slide Berikutnya

Setelah posisi pertemuan ini jelas, kita masuk ke ringkasan materi untuk melihat seluruh komponen agent, sensor, memory, decision, action, dan contoh NPC guard dalam satu arsitektur.

---

## Slide 090 - Ringkasan Materi

### Narasi

Slide ini menutup pembahasan utama dengan menempatkan seluruh komponen yang sudah dibahas ke dalam satu **arsitektur agen** yang utuh. Peta konsep di bawah ini menunjukkan bahwa agen game bukan sekadar objek yang bergerak, melainkan sistem yang terus membaca lingkungan, menyimpan informasi, memilih perilaku, lalu mengeksekusi aksi.

```text
Game Agent
├── Intelligent Agent
├── Environment
├── State
├── Sensor
├── Perception
├── Memory
├── Decision
├── Action
├── Actuator
├── Update Loop
├── Modular Architecture
├── Distance
├── Field of View
├── Line of Sight
├── Raycast
├── LayerMask
├── NavMeshAgent
└── NPC Guard
```

Alur utamanya dapat dibaca sebagai pipeline: **Environment** memberikan kondisi dunia, **Sensor** menangkap data mentah, **Perception** mengubah data tersebut menjadi informasi yang bermakna, **Memory** menyimpan kondisi penting, **Decision** memilih perilaku yang sesuai, `action` menentukan perintah, dan **Actuator** menerjemahkan perintah menjadi gerakan atau perubahan di game. Dalam implementasi, `Raycast` dan `LayerMask` membantu mengecek **Line of Sight** atau objek yang boleh dideteksi, sedangkan `NavMeshAgent` berperan sebagai actuator yang mengikuti jalur berdasarkan keputusan agen.

Poin penting yang harus dipahami adalah **Modular Architecture**. Setiap bagian memiliki tanggung jawab yang jelas, sehingga perilaku NPC lebih mudah diuji, diubah, dan diperluas. Misalnya, `NPC Guard` tidak perlu mencampur logika jarak, visibilitas, dan gerakan dalam satu blok; ia dapat memisahkan deteksi, penyimpanan informasi, pemilihan `state`, dan eksekusi pergerakan. **Update Loop** memastikan seluruh proses ini berulang setiap frame atau interval tertentu, sehingga agen tetap responsif terhadap perubahan lingkungan.

Sebelum lanjut, pastikan mahasiswa memahami bahwa **Distance** saja tidak cukup untuk menentukan apakah agen harus bereaksi. Agen juga perlu memeriksa **Field of View** dan **Line of Sight**, serta menyimpan informasi terakhir yang diketahui agar perilakunya tetap konsisten ketika target hilang sesaat. Pemahaman ini menjadi dasar untuk membahas pertanyaan diskusi berikutnya.

### Inti yang Harus Ditekankan

- **Game Agent** adalah sistem modular yang terdiri dari sensor, perception, memory, decision, action, dan actuator.
- **Update Loop** membuat agen terus membaca lingkungan dan mengeksekusi perilaku secara berulang.
- **Distance**, **Field of View**, **Line of Sight**, `Raycast`, dan `LayerMask` membantu agen menentukan apa yang terlihat dan boleh dideteksi.
- **Memory** menjaga konsistensi perilaku ketika informasi lingkungan berubah atau target hilang sesaat.
- **Decision** memilih perilaku, sedangkan `action` adalah perintah yang dieksekusi oleh actuator.
- `NavMeshAgent` berfungsi sebagai actuator yang mengeksekusi pergerakan berdasarkan keputusan agen.
- **Modular Architecture** penting agar perilaku NPC seperti `NPC Guard` lebih mudah dikembangkan dan diuji.

### Transisi ke Slide Berikutnya

Dengan ringkasan ini, kita sudah memiliki peta besar arsitektur agen. Selanjutnya, kita akan menguji pemahaman melalui pertanyaan diskusi yang menelusuri kembali fungsi masing-masing komponen.

---

## Slide 091 - Pertanyaan Diskusi

### Narasi

Slide ini berfungsi sebagai **cek pemahaman** sebelum mahasiswa masuk ke latihan. Dua belas pertanyaan di sini bukan materi baru, tetapi cara untuk memastikan bahwa konsep **intelligent agent** sudah dipahami sebagai satu sistem, bukan istilah yang terpisah.

Inti yang harus terlihat dari jawaban mahasiswa adalah alur: **environment** memberi informasi, **sensor** membaca informasi itu, **perception** mengubahnya menjadi makna, **memory** menyimpan informasi penting, `state` menggambarkan kondisi saat ini, **decision** memilih perilaku, dan **actuator** menjalankan `action`.

Kita dapat membahas pertanyaan tersebut dalam beberapa kelompok:

- **Agent dan environment**: **agent** adalah entitas yang bertindak, sedangkan **environment** adalah segala hal di luar agent yang memengaruhi dan dipengaruhi oleh agent.
- **State dan memory**: `state` menggambarkan kondisi penting saat ini, misalnya posisi, target, atau status perilaku. **Memory** dibutuhkan agar agent tidak kehilangan informasi penting, misalnya `lastKnownPosition` saat target tidak terlihat lagi.
- **Sensor dan perception**: **sensor** menghasilkan data mentah seperti jarak, sudut, atau hasil `Raycast`. **Perception** menafsirkan data tersebut menjadi informasi yang bisa dipakai, misalnya “target terlihat” atau “target hilang”.
- **Distance, Field of View, dan Raycast**: `distance` hanya memberi tahu seberapa jauh objek, tetapi belum menjamin objek terlihat. **Field of View** membatasi arah pandang, sedangkan `Raycast` membantu memeriksa apakah ada penghalang di antara agent dan target.
- **Decision dan action**: **decision** memilih perilaku atau `state` berikutnya, sedangkan `action` adalah perintah nyata yang dijalankan, misalnya bergerak, berhenti, atau menyerang.
- **Architecture modular**: pemisahan sensor, memory, decision, dan actuator membuat perilaku lebih mudah diuji, di-debug, dan dikembangkan. `NavMeshAgent` dapat berperan sebagai **actuator** untuk eksekusi gerak di atas `NavMesh`.

Sebelum lanjut, mahasiswa perlu memastikan bahwa mereka bisa menjelaskan mengapa satu komponen tidak bisa berdiri sendiri. Misalnya, `Raycast` saja tidak cukup tanpa **Field of View**, dan `decision` tidak berguna jika tidak ada **actuator** yang mengeksekusi hasilnya.

### Inti yang Harus Ditekankan

- **Intelligent agent** adalah sistem yang membaca **environment**, menyimpan `state`, memilih **decision**, dan menjalankan `action`.
- **Sensor** menghasilkan data mentah, sedangkan **perception** mengubah data menjadi informasi yang dapat dipakai untuk keputusan.
- **Memory** penting agar agent dapat mengingat informasi penting seperti `lastKnownPosition` ketika target tidak lagi terlihat.
- **Decision** memilih perilaku, sedangkan `action` adalah eksekusi nyata yang dilakukan oleh **actuator** seperti `NavMeshAgent`.
- **Architecture modular** memudahkan pengembangan, pengujian, dan debug perilaku agent.

### Transisi ke Slide Berikutnya

Dengan dasar ini, kita lanjut ke latihan konsep untuk memetakan komponen-komponen tersebut pada kasus NPC Guard yang memiliki behavior `Patrol`, `Chase`, dan `Search`.

---

## Slide 092 - Latihan Konsep

### Narasi

Slide ini adalah latihan pemetaan arsitektur agent pada **NPC Guard**. Mahasiswa tidak diminta langsung menulis kode, tetapi diminta mengidentifikasi bagian-bagian penting dari perilaku NPC. Tujuannya adalah memastikan mahasiswa memahami alur informasi: apa yang ada di dunia, apa yang ditangkap sensor, apa yang disimpan sebagai memori, apa yang diputuskan, dan apa yang akhirnya dieksekusi sebagai gerakan.

```text
Patrol
Chase
Search
```

Tiga perilaku ini menjadi dasar skenario. **`Patrol`** adalah perilaku normal saat NPC tidak menemukan target. **`Chase`** adalah perilaku ketika NPC melihat Player dan ingin mengejarnya. **`Search`** adalah perilaku ketika NPC kehilangan Player tetapi masih mengingat posisi terakhir yang terlihat. Dengan tiga state ini, mahasiswa dapat melatih cara membedakan **state**, **decision**, **action**, dan **actuator**.

Sebelum mengisi jawaban, mahasiswa perlu melihat NPC Guard sebagai satu sistem yang utuh. Environment menyediakan informasi mentah. Sensor menangkap informasi tersebut. Perception mengubahnya menjadi data yang bisa digunakan. Memory menyimpan informasi penting. Decision memilih perilaku berikutnya. Action menghasilkan perintah gerak. Actuator mengeksekusi perintah tersebut di dalam game.

Sepuluh poin pada slide dapat diisi dengan alur berikut:

1. **Environment**  
   Environment adalah dunia game tempat NPC berada. Ini mencakup map, obstacle, Player, waypoint, dan area yang bisa dijelajahi. Environment bukan hanya Player, tetapi juga kondisi dunia yang memengaruhi pergerakan NPC.

2. **Sensor yang digunakan**  
   Sensor adalah cara NPC menangkap informasi dari environment. Untuk NPC Guard, sensor yang relevan biasanya adalah jarak, **Field of View**, dan **Raycast** untuk mengecek Line of Sight. Sensor memberi tahu NPC apakah Player berada di dekatnya, apakah Player berada di arah pandang, dan apakah ada penghalang di antara NPC dengan Player.

3. **Output perception**  
   Output perception adalah hasil olahan dari sensor. Data ini biasanya sudah lebih siap digunakan oleh decision. Contoh output perception adalah `playerDetected`, `distance`, `inFOV`, `hasLOS`, dan `targetPosition`. Jadi, sensor mungkin hanya menangkap jarak mentah, tetapi perception menghasilkan kesimpulan seperti “Player terlihat dan bisa dikejar”.

4. **Memory**  
   Memory dibutuhkan karena NPC tidak bisa hanya bereaksi pada kondisi saat ini. NPC perlu mengingat informasi penting, misalnya `lastKnownPosition`, `searchTimer`, `stateTimer`, atau `currentTarget`. Memory sangat penting untuk transisi dari `Chase` ke `Search`. Jika NPC kehilangan Player, NPC tetap bisa mencari ke posisi terakhir yang diketahui.

5. **State**  
   State adalah mode perilaku NPC. Pada latihan ini, state utamanya adalah `Patrol`, `Chase`, dan `Search`. State bukan perintah gerak, tetapi kondisi perilaku NPC. Misalnya, saat `Chase`, NPC sedang mengejar. Saat `Search`, NPC sedang mencari posisi terakhir. Saat `Patrol`, NPC kembali ke rute normal.

6. **Decision rule**  
   Decision rule adalah aturan untuk berpindah state. Aturan sederhana yang dapat dipahami adalah:
   - Jika Player terlihat, berada di dalam FOV, dan tidak terhalang, maka pindah ke `Chase`.
   - Jika NPC sedang `Chase` tetapi kehilangan Player, maka pindah ke `Search`.
   - Jika NPC sudah mencari dalam waktu tertentu tetapi tidak menemukan Player, maka kembali ke `Patrol`.

   Secara sederhana, aturan keputusan dapat dibayangkan sebagai:

   ```text
   if playerDetected and inFOV and hasLOS:
       state = Chase
   else if state == Chase and not playerDetected:
       state = Search
   else if state == Search and searchTimer > searchTime:
       state = Patrol
   ```

7. **Action**  
   Action adalah perintah yang dilakukan NPC berdasarkan state. Pada `Patrol`, action bisa berupa bergerak ke waypoint berikutnya. Pada `Chase`, action bisa berupa bergerak ke posisi Player. Pada `Search`, action bisa berupa bergerak ke `lastKnownPosition` lalu berhenti atau mencari di sekitar area tersebut. Action adalah hasil dari decision, bukan state itu sendiri.

8. **Actuator**  
   Actuator adalah komponen yang mengeksekusi action. Untuk NPC Guard, actuator utama biasanya adalah `NavMeshAgent`. Komponen ini menerima target posisi dan mengubahnya menjadi pergerakan di atas NavMesh. Actuator juga dapat melibatkan `Transform` untuk orientasi NPC, tetapi `NavMeshAgent` adalah bagian penting karena NPC harus bergerak secara natural di lingkungan game.

9. **Parameter perilaku**  
   Parameter perilaku adalah nilai yang mengatur seberapa sensitif atau seberapa cepat NPC bereaksi. Contoh parameter penting adalah `detectDistance`, `fovAngle`, `searchTime`, `patrolSpeed`, `chaseSpeed`, `waypoints`, dan `raycastLayerMask`. Parameter ini penting karena menentukan apakah NPC terlalu mudah terpicu, terlalu lambat bereaksi, atau terlalu agresif.

10. **Debug visual yang dibutuhkan**  
   Debug visual membantu mahasiswa melihat apa yang sedang dipikirkan NPC. Visual yang berguna antara lain:
   - Gizmos untuk FOV.
   - Garis Raycast untuk mengecek Line of Sight.
   - Marker untuk `lastKnownPosition`.
   - Label state saat ini, misalnya `Patrol`, `Chase`, atau `Search`.
   - Path atau waypoint yang sedang diikuti.
   - Log state untuk melihat perpindahan perilaku.

   Dengan debug visual, mahasiswa tidak hanya melihat NPC bergerak, tetapi juga memahami mengapa NPC berpindah dari satu state ke state lain.

Latihan ini penting karena banyak mahasiswa langsung fokus pada “NPC mengejar Player”, tetapi lupa bahwa perilaku tersebut dibangun dari beberapa lapisan yang berbeda. Jika sensor salah, perception salah. Jika memory tidak disimpan, NPC tidak bisa mencari. Jika decision rule tidak jelas, NPC akan berpindah state secara tidak wajar. Jika actuator tidak tepat, NPC tidak bergerak dengan benar.

### Inti yang Harus Ditekankan

- **State** seperti `Patrol`, `Chase`, dan `Search` adalah mode perilaku, bukan action. Action adalah perintah gerak yang dihasilkan dari state.
- **Memory** sangat penting, terutama `lastKnownPosition`, karena NPC harus bisa mencari target setelah kehilangan pandangan.
- **Decision rule** harus jelas: deteksi Player memicu `Chase`, kehilangan Player memicu `Search`, dan waktu pencarian habis memicu kembali ke `Patrol`.
- **Debug visual** seperti FOV, Raycast, marker `lastKnownPosition`, dan label state sangat penting untuk memahami perilaku NPC.

### Transisi ke Slide Berikutnya

Dengan latihan ini, mahasiswa sudah memiliki peta konsep untuk membangun NPC Guard secara utuh. Selanjutnya, kita akan masuk ke praktikum pertemuan 2, di mana mahasiswa akan menerapkan sensor, memory, dan decision pada NPC Guard, lalu melanjutkan ke materi movement dan steering behaviors.

---

## Slide 093 - Penutup

### Narasi

Setelah latihan konsep sebelumnya, slide penutup ini menegaskan arah praktikum Pertemuan 2. Fokus utamanya bukan membuat NPC Guard hanya mengejar Player, tetapi membangun **arsitektur game agent** yang utuh: informasi dari **environment** masuk melalui **sensor**, diubah menjadi **perception**, disimpan sebagai **memory**, digunakan oleh **decision**, lalu dieksekusi sebagai **action** oleh **actuator**.

```text
NPC Guard:
Sensor + Memory + Decision
```

Dalam praktikum, mahasiswa akan membangun NPC Guard dengan perilaku berikut:

- `PATROL` ketika tidak ada ancaman.
- Mendeteksi Player berdasarkan **jarak**.
- Memeriksa **FOV** dan **Line of Sight**, misalnya dengan `raycast`.
- Menjalankan `CHASE` jika Player terlihat.
- Menyimpan `Last Known Position` ketika Player hilang.
- Menjalankan `SEARCH` menuju posisi terakhir yang diketahui.
- Kembali ke `PATROL` jika pencarian selesai.
- Menampilkan `Gizmos` dan log state untuk debugging.

Alur ini perlu dijalankan berulang pada `update loop`, sehingga perilaku NPC terus menyesuaikan kondisi environment. Dengan arsitektur yang modular, mahasiswa dapat melihat setiap bagian secara terpisah: sensor membaca data, memory menyimpan konteks, decision memilih state, dan action menghasilkan gerakan atau perubahan perilaku.

### Inti yang Harus Ditekankan

- Praktikum fokus pada **alur agent**: environment, sensor, perception, memory, decision, action.
- NPC Guard harus menunjukkan state `PATROL`, `CHASE`, dan `SEARCH` secara jelas.
- Deteksi Player perlu mempertimbangkan **jarak**, **FOV**, dan **Line of Sight**.
- `Last Known Position` menjadi jembatan antara `CHASE` dan `SEARCH`.
- `Gizmos` dan log state membantu mahasiswa memahami perilaku NPC secara visual.

### Transisi ke Slide Berikutnya

Setelah arsitektur agent dan praktikum NPC Guard dipahami, pembahasan berikutnya akan masuk ke **Movement dan Steering Behaviors**, yaitu cara agent bergerak dan menyesuaikan arah secara lebih halus di environment.
