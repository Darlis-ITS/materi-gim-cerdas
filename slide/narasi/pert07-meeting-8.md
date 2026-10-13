# Narasi Game Cerdas - Pertemuan 07

## Game AI Integration & Tactical AI

Sumber: markdown/pert07.md

---

## Slide 001 - Cover

### Narasi

Selamat datang kembali pada mata kuliah **Game Cerdas**, khususnya **Pertemuan 7** dengan topik **Game AI Integration & Tactical AI**. Pada pertemuan ini, fokus kita bukan lagi mempelajari satu komponen secara terpisah, tetapi bagaimana berbagai komponen dalam perilaku `NPC` dapat digabungkan menjadi sistem yang lebih utuh. Tujuannya adalah agar `NPC` tidak hanya bergerak atau mengambil keputusan secara sederhana, tetapi mampu bertindak lebih taktis dalam situasi permainan.

Topik yang akan kita bahas meliputi **Perception**, **Memory**, **Target Selection**, **Cover**, **Tactical Positioning**, **Coordination antar-agent**, serta **Squad / Enemy AI sederhana**. Komponen-komponen ini akan menjadi dasar untuk membangun perilaku kelompok, misalnya satu tim `enemy` yang mampu memilih target, mencari posisi aman, menjaga jarak, dan bekerja sama dengan `agent` lain. Perlu diperhatikan bahwa praktikum untuk **Squad / Enemy AI sederhana** akan dibuat terpisah, sehingga pertemuan ini lebih menekankan pada konsep integrasi dan alur pengambilan keputusan.

Sebelum masuk ke pembahasan teknis, mahasiswa perlu memahami bahwa perilaku taktis dalam game biasanya tidak muncul dari satu sistem tunggal. Perilaku tersebut merupakan hasil kombinasi dari persepsi terhadap lingkungan, memori tentang keadaan sebelumnya, keputusan memilih target, pemilihan posisi, dan koordinasi antar-`agent`. Dengan memahami hubungan antar-komponen ini, mahasiswa akan lebih siap membangun sistem `NPC` yang lebih realistis dan terstruktur.

### Inti yang Harus Ditekankan

- Fokus pertemuan ini adalah **integrasi komponen Game AI** menjadi perilaku yang lebih taktis.
- `NPC` perlu mampu melakukan **Perception**, **Memory**, **Target Selection**, **Cover**, **Tactical Positioning**, dan **Coordination antar-agent**.
- Praktikum **Squad / Enemy AI sederhana** akan dibuat terpisah, tetapi konsepnya menjadi dasar perilaku kelompok `enemy`.

### Transisi ke Slide Berikutnya

Sebelum kita membahas integrasi komponen pada pertemuan ini, kita akan meninjau kembali beberapa materi penting yang telah dipelajari dari pertemuan sebelumnya.

---

## Slide 002 - Review Pertemuan Sebelumnya

### Narasi

Sebelum kita membahas **Game AI Integration & Tactical AI**, kita perlu meninjau kembali komponen-komponen yang sudah dipelajari sampai **Pertemuan 6**. Peninjauan ini penting karena materi pertemuan ini tidak berdiri sendiri, melainkan menggabungkan beberapa kemampuan dasar **Game AI** menjadi satu sistem perilaku yang lebih utuh.

```text
Pertemuan 2
Perception + Memory + Decision

Pertemuan 3
Movement AI + Steering

Pertemuan 4
Pathfinding + Navigation

Pertemuan 5
Finite State Machine

Pertemuan 6
Behavior Tree + Utility-Based AI
```

Dari ringkasan tersebut, kita dapat melihat bahwa setiap pertemuan sebelumnya membahas satu lapisan kemampuan **agent** dalam game.

- **Pertemuan 2** membahas bagaimana agent dapat **menerima informasi**, **menyimpan informasi**, dan **mengambil keputusan** berdasarkan keadaan.
- **Pertemuan 3** membahas bagaimana agent bergerak secara lebih natural melalui **Movement AI** dan **Steering**.
- **Pertemuan 4** membahas bagaimana agent menemukan rute menuju tujuan melalui **Pathfinding** dan **Navigation**.
- **Pertemuan 5** membahas **Finite State Machine** sebagai cara sederhana mengatur transisi perilaku agent.
- **Pertemuan 6** membahas **Behavior Tree** dan **Utility-Based AI** sebagai pendekatan pengambilan keputusan yang lebih fleksibel dan terstruktur.

Intinya, sampai pertemuan sebelumnya kita sudah memiliki “bagian-bagian” dari perilaku **NPC**. Ada kemampuan untuk melihat, mengingat, memutuskan, bergerak, menavigasi, dan memilih perilaku. Namun, bagian-bagian itu belum tentu bekerja sebagai satu sistem taktis.

Pada **Pertemuan 7**, fokusnya bergeser dari mempelajari komponen satu per satu ke **integrasi komponen**. Artinya, kita akan melihat bagaimana **Perception**, **Memory**, **Decision Making**, **Target Selection**, **Tactical Positioning**, **Navigation**, **Movement**, dan **Coordination** saling terhubung.

Yang harus dipahami mahasiswa sebelum lanjut adalah: **Tactical AI** bukan sekadar membuat NPC bergerak atau menyerang. Tactical AI adalah hasil dari kombinasi beberapa sistem yang bekerja bersama, sehingga NPC dapat memilih target, mencari posisi aman, bergerak menuju posisi tersebut, dan berkoordinasi dengan agent lain.

### Inti yang Harus Ditekankan

- Materi pertemuan sebelumnya adalah **fondasi komponen Game AI**, bukan sistem taktis yang sudah lengkap.
- **Perception**, **Memory**, **Decision**, **Movement**, **Pathfinding**, **FSM**, **Behavior Tree**, dan **Utility-Based AI** adalah bagian yang akan diintegrasikan.
- Pertemuan 7 berfokus pada **integrasi** dan **koordinasi** agar NPC dapat berperilaku lebih taktis.
- Mahasiswa perlu memahami bahwa perilaku taktis muncul dari **alur kerja antar komponen**, bukan dari satu komponen saja.

### Transisi ke Slide Berikutnya

Setelah meninjau kembali komponen-komponen tersebut, langkah berikutnya adalah melihat posisi materi pertemuan ini dalam alur sistem **Game AI**. Kita akan melihat bagaimana komponen-komponen itu tersusun menjadi pipeline perilaku yang lebih utuh.

---

## Slide 003 - Posisi Materi Pertemuan 7

### Narasi

Pada slide ini, kita menandai **posisi materi** Pertemuan 7. Jika pertemuan sebelumnya membahas komponen Game AI satu per satu, maka materi hari ini berada pada tahap **integrasi**. Artinya, kita tidak lagi melihat `Perception`, `Memory`, `Decision Making`, atau `Navigation` sebagai modul yang berdiri sendiri, tetapi sebagai bagian dari satu alur perilaku NPC yang saling terhubung.

Diagram pada slide menunjukkan urutan utama sistem AI yang akan kita integrasikan:

1. `Perception` — NPC mengamati lingkungan dan objek di sekitarnya.
2. `Memory` — NPC menyimpan informasi penting, misalnya posisi terakhir player.
3. `Decision Making` — NPC memilih tindakan berdasarkan informasi yang tersedia.
4. `Target Selection` — NPC menentukan target yang akan dikejar, diserang, atau dihindari.
5. `Tactical Positioning` — NPC memilih posisi yang menguntungkan secara taktis.
6. `Navigation` — NPC mencari jalur menuju posisi atau target yang dipilih.
7. `Movement` — NPC mengeksekusi gerakan berdasarkan hasil navigasi.
8. `Coordination` — beberapa NPC menyelaraskan perilaku mereka satu sama lain.

Alur ini penting karena perilaku NPC yang realistis tidak lahir dari satu kemampuan saja. NPC harus mampu **menerima informasi**, **mengolah informasi**, **mengambil keputusan**, lalu **mengeksekusi gerakan** secara konsisten. Jika salah satu tahap lemah, perilaku akhir akan terasa tidak natural, misalnya NPC yang bisa bergerak tetapi tidak tahu harus ke mana, atau NPC yang bisa memilih target tetapi tidak mampu mencapai target tersebut.

### Inti yang Harus Ditekankan

- Materi Pertemuan 7 berada pada tahap **integrasi komponen AI**, bukan pengenalan komponen baru.
- Alur utama sistem NPC bergerak dari `Perception` hingga `Coordination`.
- Setiap komponen harus saling memberi data agar NPC dapat menghasilkan **perilaku taktis**.
- Mahasiswa perlu memahami bahwa Game AI yang baik adalah sistem, bukan kumpulan fungsi terpisah.

### Transisi ke Slide Berikutnya

Dengan posisi materi ini, kita dapat melihat bahwa integrasi bukan sekadar menggabungkan beberapa modul, tetapi memastikan setiap modul bekerja pada tempat dan waktu yang tepat. Selanjutnya, kita akan membahas mengapa integrasi ini penting untuk menghasilkan NPC yang lebih realistis.

---

## Slide 004 - Mengapa Game AI Perlu Integrasi?

### Narasi

**Sistem perilaku** yang baik tidak cukup dibangun dari satu modul saja. **NPC** yang terasa hidup harus mampu menggabungkan beberapa kemampuan dalam satu alur perilaku.

Secara intuitif, enemy yang realistis tidak hanya “bergerak ke player”. Ia perlu **melihat player**, **mengingat posisi terakhir player**, **memilih target**, **mencari cover**, **bergerak ke posisi taktis**, **menyerang saat aman**, dan **bekerja sama dengan enemy lain**.

Dalam praktik, `perception` memberi data posisi player, `memory` menyimpan konteks terakhir, `decision making` memilih target atau niat, `navigation` dan `movement` mengeksekusi posisi taktis, sementara `coordination` menyelaraskan beberapa NPC.

Jika hanya satu kemampuan yang aktif, NPC akan terasa sederhana dan mudah diprediksi.

- Hanya `Seek` → NPC cenderung menabrak obstacle karena tidak ada perencanaan jalur.
- Hanya `NavMesh` → NPC bisa berjalan, tetapi tidak punya strategi tempur.
- Hanya `FSM` → NPC berpindah state, tetapi tidak otomatis taktis jika data pendukung tidak ada.
- Hanya `Behavior Tree` → struktur keputusan berguna, tetapi tetap membutuhkan `perception` dan `memory` agar keputusan bermakna.

Artinya, **integrasi** bukan sekadar memasang banyak komponen. Integrasi berarti setiap komponen saling memberi input dan output yang konsisten.

Sebelum lanjut, mahasiswa perlu memahami bahwa **perilaku taktis** muncul ketika NPC tidak hanya bergerak, tetapi memilih **posisi**, **target**, dan **waktu aksi** berdasarkan informasi yang dimilikinya.

### Inti yang Harus Ditekankan

- **NPC realistis** membutuhkan kombinasi `perception`, `memory`, `decision making`, `navigation`, `movement`, dan `coordination`.
- Satu komponen saja tidak cukup: `Seek`, `NavMesh`, `FSM`, atau `Behavior Tree` hanya menjadi bagian dari sistem yang lebih besar.
- **Integrasi** berarti setiap komponen saling memberi data sehingga NPC dapat berperilaku taktis, bukan sekadar bereaksi.

### Transisi ke Slide Berikutnya

Setelah memahami alasan integrasi, slide berikutnya akan merumuskan capaian pembelajaran yang harus dikuasai mahasiswa pada pertemuan ini.

---

## Slide 005 - Capaian Pembelajaran Pertemuan

### Narasi

Slide ini menjadi **peta kompetensi** untuk pertemuan ke-7. Fokusnya bukan sekadar mengenal satu modul perilaku NPC, tetapi memahami bagaimana berbagai kemampuan tersebut bekerja bersama dalam **Game AI Integration** dan **Tactical AI**.

Capaian tersebut dapat dibaca sebagai satu alur perilaku NPC:

1. **Pemahaman integrasi** — mahasiswa mampu menjelaskan bagaimana `perception`, `memory`, `decision`, `navigation`, dan `movement` saling terhubung.
2. **Pemahaman taktik** — mahasiswa mampu menjelaskan `target selection`, `cover`, `cover point`, `tactical positioning`, dan `coordination` antar-agent.
3. **Kemampuan desain** — mahasiswa mampu merancang sistem sederhana, misalnya memilih target, mencari cover, atau mengatur posisi squad.
4. **Kesiapan implementasi Unity** — mahasiswa mampu mengidentifikasi komponen `Unity` yang relevan serta memahami batasan praktikum dan arah pengembangan lanjut.

Dengan capaian ini, mahasiswa tidak lagi memandang NPC sebagai objek yang hanya bergerak, tetapi sebagai agen yang mengamati, mengingat, memutuskan, bergerak, dan berkoordinasi. Poin penting sebelum lanjut adalah memahami bahwa **Tactical AI** muncul dari kombinasi keputusan dan navigasi, bukan dari satu `state` pada `FSM` atau satu cabang `Behavior Tree` saja.

### Inti yang Harus Ditekankan

- Capaian utama adalah memahami **integrasi** modul perilaku NPC, bukan hanya satu kemampuan tunggal.
- Rantai perilaku inti: `perception` → `memory` → `decision` → `navigation` → `movement`.
- **Tactical AI** mencakup `target selection`, `cover`, `cover point`, `tactical positioning`, dan `coordination`.
- Mahasiswa perlu mampu mendesain sistem sederhana dan mengidentifikasi komponen `Unity` yang dibutuhkan.
- Batasan praktikum harus dipahami agar tidak langsung mengharapkan NPC yang sempurna.

### Transisi ke Slide Berikutnya

Setelah capaian pembelajaran ini jelas, kita masuk ke definisi **Game AI Integration** dan modul-modul yang akan digabungkan menjadi satu sistem perilaku NPC.

---

## Slide 006 - Apa Itu Game AI Integration?

### Narasi

**Game AI Integration** adalah proses menggabungkan berbagai modul perilaku menjadi satu sistem `NPC` yang utuh. Intuisi pentingnya adalah: satu modul saja tidak cukup. `NPC` yang hanya bisa `pathfinding` akan bergerak, tetapi belum tentu tahu kapan harus menyerang, mundur, atau membantu teman.

Modul yang dapat digabungkan biasanya meliputi:

```text
Sensor
Memory
Decision Making
Pathfinding
Steering
Animation
Combat
Communication
Squad Coordination
```

Setiap modul memiliki peran berbeda. `Sensor` membaca lingkungan, `Memory` menyimpan informasi penting, `Decision Making` memilih tindakan, `Pathfinding` menentukan rute, `Steering` mengatur gerak halus, `Animation` menampilkan aksi, `Combat` menangani serangan, `Communication` dan `Squad Coordination` membantu kerja sama antar `NPC`.

Tujuan integrasi bukan hanya membuat `NPC` "bisa bergerak", tetapi membuat `NPC` dapat:

```text
mengamati
memahami
memilih
bergerak
bertindak
berkoordinasi
```

Alur sederhananya dapat dilihat sebagai pipeline:

`Sensor` → `Memory` → `Decision Making` → `Pathfinding` → `Steering` → `Animation` / `Combat` / `Communication` / `Squad Coordination`

Pada alur ini, input dari lingkungan masuk ke `Sensor`, lalu disimpan atau difilter oleh `Memory`. Setelah itu, `Decision Making` memilih `state` atau `action` yang sesuai. Hasil keputusan diteruskan ke `Pathfinding` dan `Steering` agar `NPC` bergerak secara wajar, lalu ditampilkan melalui `Animation` atau tindakan seperti `Combat`.

Yang harus dipahami mahasiswa adalah bahwa integrasi berarti **alur data dan tanggung jawab antar modul harus jelas**. Jika `Decision Making` memilih "mundur", tetapi `Pathfinding` tidak menemukan rute aman, atau `Steering` tidak menghindari dinding, perilaku `NPC` akan terasa patah. Jadi, kualitas sistem perilaku tidak hanya ditentukan oleh satu modul, tetapi oleh cara modul-modul tersebut saling terhubung.

### Inti yang Harus Ditekankan

- **Game AI Integration** adalah penyatuan modul perilaku menjadi satu sistem `NPC` yang koheren.
- Modul utama mencakup `Sensor`, `Memory`, `Decision Making`, `Pathfinding`, `Steering`, `Animation`, `Combat`, `Communication`, dan `Squad Coordination`.
- Tujuan akhir bukan sekadar gerak, tetapi `NPC` dapat mengamati, memahami, memilih, bergerak, bertindak, dan berkoordinasi.
- Integrasi yang baik membutuhkan alur data yang jelas dari persepsi menuju keputusan, lalu menuju gerakan dan tindakan.

### Transisi ke Slide Berikutnya

Setelah memahami bagaimana modul perilaku digabungkan, kita akan masuk ke jenis keputusan yang lebih situasional, yaitu **Tactical AI**, yang menentukan tindakan berdasarkan kondisi medan, posisi, dan risiko.

---

## Slide 007 - Apa Itu Tactical AI?

### Narasi

**Tactical AI** adalah bentuk perilaku NPC yang mengambil keputusan berdasarkan **situasi taktis** di lingkungan game. Artinya, NPC tidak hanya bereaksi terhadap satu kondisi sederhana, tetapi menilai beberapa faktor sekaligus sebelum memilih tindakan.

Secara intuitif, bayangkan musuh dalam game tembak atau strategi. Musuh yang baik tidak selalu langsung mengejar pemain. Ia bisa mundur ke **cover**, menunggu jarak aman, atau memilih posisi yang lebih menguntungkan. Perilaku seperti ini membuat NPC terasa lebih hidup dan sulit diprediksi.

Faktor yang biasanya dipertimbangkan oleh **Tactical AI** meliputi:

- `position player` dan `position enemy`
- `distance` atau jarak antar agent
- `line of sight`
- `cover`
- `health`
- `ally count` atau jumlah teman
- `safe position`
- `attack opportunity`
- `risk`

Faktor-faktor ini menjadi input untuk **decision making**. Dari hasil penilaian, NPC dapat memilih target, mencari posisi aman, bergerak ke sisi tertentu, atau menahan serangan.

Dalam implementasi game, keputusan taktis biasanya terhubung dengan modul lain. **Pathfinding** membantu NPC mencari jalur menuju cover atau posisi flank. **Steering** mengatur pergerakan halus agar NPC tidak menabrak objek atau bergerak tidak natural. **Animation** dan **combat** kemudian mengeksekusi aksi yang sudah dipilih.

Contoh sederhana:

```text
Enemy tidak langsung menyerang,
tetapi mencari cover terlebih dahulu.
```

Pada contoh ini, NPC menilai bahwa menyerang langsung memiliki risiko tinggi. Maka ia memilih tindakan yang lebih aman, yaitu mencari **cover** sebelum melanjutkan interaksi dengan pemain.

Contoh lain:

```text
Enemy A menekan player,
Enemy B bergerak ke samping untuk flank.
```

Di sini, dua NPC tidak bertindak secara independen. Ada koordinasi taktis: satu agent memberikan tekanan, sementara agent lain mencari peluang dari sisi yang lebih menguntungkan. Pola ini menunjukkan bahwa **Tactical AI** tidak hanya soal satu NPC, tetapi juga hubungan antar agent.

Hal penting yang harus dipahami mahasiswa adalah bahwa **Tactical AI** bersifat **situasional**, **spasial**, dan **berisiko**. NPC menilai posisi, jarak, peluang, dan ancaman sebelum bertindak. Pemahaman ini menjadi dasar sebelum membandingkan perilaku taktis dengan decision AI dasar.

### Inti yang Harus Ditekankan

- **Tactical AI** mengambil keputusan berdasarkan situasi taktis, bukan hanya satu kondisi sederhana.
- NPC mempertimbangkan posisi, jarak, `line of sight`, `cover`, `health`, jumlah teman, posisi aman, peluang menyerang, dan risiko.
- Keputusan taktis biasanya menghasilkan aksi seperti mencari cover, memilih target, bergerak flank, atau berkoordinasi dengan agent lain.

### Transisi ke Slide Berikutnya

Setelah memahami apa yang dinilai oleh **Tactical AI**, kita lanjut ke slide berikutnya untuk membandingkannya dengan **Decision AI Dasar** dan melihat perbedaan cara pengambilan keputusan yang lebih sederhana.

---

## Slide 008 - Tactical AI vs Decision AI Dasar

### Narasi

Pada slide ini, kita membandingkan dua tingkat pengambilan keputusan yang sering muncul dalam perilaku NPC. **Decision AI Dasar** biasanya bekerja seperti aturan sederhana: kondisi lingkungan dipetakan langsung ke satu state atau action.

```text
Jika player terlihat → Chase
Jika player dekat → Attack
Jika HP rendah → Flee
```

Pada pola ini, agent hanya membaca kondisi lokal seperti `visible`, `distance`, dan `health`. Keputusan yang dihasilkan cepat, mudah diuji, dan cocok untuk prototipe awal. Namun, perilaku yang muncul cenderung reaktif dan mudah diprediksi karena agent belum memikirkan posisi, risiko, atau lingkungan secara lebih luas.

**Tactical AI** tidak berhenti pada pemilihan state. Ketika player terlihat, agent melakukan rangkaian pertimbangan taktis sebelum memilih tindakan.

```text
Jika player terlihat:
    pilih target
    cari cover terdekat
    cek line of sight
    pilih posisi menyerang
    koordinasi dengan agent lain
```

Urutan ini penting karena menunjukkan bahwa keputusan taktis bukan hanya “apa yang dilakukan”, tetapi juga “di mana harus berada” dan “bagaimana bekerja sama”. `cover` membantu mengurangi risiko, `line of sight` menentukan apakah posisi aman atau memungkinkan menyerang, sedangkan koordinasi membuat beberapa agent tidak hanya bergerak sendiri-sendiri.

Perbedaan utamanya dapat dilihat dari ruang keputusan:

- **Decision AI Dasar**: memilih state dari kondisi sederhana.
- **Tactical AI**: menilai posisi, risiko, target, dan hubungan antar-agent.
- **Decision AI Dasar**: cocok untuk perilaku reaktif.
- **Tactical AI**: cocok untuk perilaku yang terasa lebih sadar lingkungan.

Dalam implementasi, Decision AI dasar sering direpresentasikan sebagai `FSM` atau aturan `if-else` sederhana. Tactical AI biasanya membutuhkan informasi spasial tambahan, seperti titik `cover`, jalur menuju posisi, dan status agent lain. Artinya, keputusan akhir masih berupa action, tetapi proses sebelum action menjadi lebih kaya.

Sebelum lanjut ke contoh perilaku, mahasiswa perlu memahami bahwa pendekatan taktis tidak selalu berarti sistem yang sangat kompleks. Yang penting adalah agent mulai mempertimbangkan lingkungan dan risiko, bukan hanya merespons player secara langsung.

### Inti yang Harus Ditekankan

- **Decision AI Dasar** memetakan kondisi sederhana ke state seperti `Chase`, `Attack`, dan `Flee`.
- **Tactical AI** mempertimbangkan `target`, `cover`, `line of sight`, posisi menyerang, dan koordinasi antar-agent.
- Perbedaan utamanya ada pada kedalaman pertimbangan: memilih state versus menilai situasi taktis.
- Tactical AI membuat NPC terasa lebih sadar lingkungan karena keputusan dipengaruhi posisi, risiko, dan kerja sama.

### Transisi ke Slide Berikutnya

Dengan perbedaan ini, kita dapat melihat contoh perilaku taktis yang lebih konkret, seperti mengambil cover, menyerang dari sisi, mundur, atau berkoordinasi dalam kelompok.

---

## Slide 009 - Contoh Perilaku Taktis

### Narasi

Slide ini memperkenalkan **perilaku taktis** yang dapat dimiliki oleh `NPC` atau `agent` dalam game. Perilaku ini membuat lawan tidak hanya bereaksi dengan satu aturan sederhana, tetapi memilih tindakan yang sesuai dengan situasi.

```text
Take Cover
Flanking
Suppressing Fire
Retreat
Group Attack
Ambush
Guard Area
Search Last Known Position
Call Backup
Target Prioritization
```

Secara intuitif, perilaku taktis membantu agent membuat keputusan yang lebih realistis, misalnya mencari perlindungan, memilih target, atau bekerja sama dengan agent lain.

- `Take Cover`: agent mencari posisi aman saat berada dalam bahaya.
- `Flanking`: agent bergerak ke sisi atau belakang target agar serangan lebih efektif.
- `Suppressing Fire`: agent menahan lawan agar lawan sulit bergerak bebas.
- `Retreat`: agent mundur ketika kondisi terlalu lemah.
- `Group Attack`: beberapa agent menyerang target secara bersama.
- `Ambush`: agent menunggu di posisi tersembunyi lalu menyerang saat target lewat.
- `Guard Area`: agent menjaga wilayah atau titik tertentu.
- `Search Last Known Position`: agent mencari lokasi terakhir target terlihat.
- `Call Backup`: agent meminta bantuan agent lain.
- `Target Prioritization`: agent memilih target yang paling penting atau paling lemah.

Tidak semua perilaku ini harus diimplementasikan dalam praktikum. Tujuannya adalah memberi gambaran bahwa perilaku taktis dapat berkembang dari aturan sederhana menjadi kombinasi beberapa keputusan.

Untuk pertemuan ini, fokus pada **versi sederhana**:

```text
Perception
Memory
Target Selection
Cover
Tactical Positioning
Coordination
```

Enam komponen ini menjadi dasar yang mudah dipahami, diuji, dan dikembangkan.

- `Perception`: agent mengetahui keadaan sekitar, misalnya posisi player, jarak, atau target yang terlihat.
- `Memory`: agent menyimpan informasi penting, seperti lokasi terakhir target atau kondisi agent sendiri.
- `Target Selection`: agent menentukan target mana yang harus dikejar atau diserang.
- `Cover`: agent memilih posisi aman untuk mengurangi risiko.
- `Tactical Positioning`: agent mengatur posisi agar serangan lebih efektif dan risiko lebih kecil.
- `Coordination`: beberapa agent bekerja sama, misalnya tidak semua menyerang dari arah yang sama.

Sebelum lanjut, mahasiswa perlu memahami bahwa perilaku taktis bukan sekadar daftar aksi. Perilaku ini muncul dari kombinasi informasi yang diterima, keputusan yang dibuat, dan posisi agent di lingkungan game. Jika komponen ini sudah jelas, implementasi sederhana akan lebih mudah diuji dan dikembangkan.

### Inti yang Harus Ditekankan

- **Perilaku taktis** membuat agent memilih tindakan berdasarkan situasi, bukan hanya satu aturan tetap.
- Contoh perilaku seperti `Take Cover`, `Flanking`, `Retreat`, dan `Group Attack` menunjukkan variasi keputusan yang realistis.
- Fokus praktikum adalah **versi sederhana**: `Perception`, `Memory`, `Target Selection`, `Cover`, `Tactical Positioning`, dan `Coordination`.
- Setiap komponen memiliki peran berbeda dan saling mendukung agar perilaku agent lebih terukur.

### Transisi ke Slide Berikutnya

Setelah perilaku taktis ini dipahami, langkah berikutnya adalah menyusunnya ke dalam struktur sistem yang lebih rapi, sehingga setiap bagian dapat diuji dan dikembangkan secara terpisah.

---

## Slide 010 - Arsitektur Tactical Enemy AI

### Narasi

Slide ini memperkenalkan **arsitektur Tactical Enemy**. Tujuannya adalah menunjukkan bahwa perilaku musuh yang taktis sebaiknya tidak ditulis sebagai satu blok logika besar, tetapi dipecah menjadi beberapa modul yang saling bekerja sama.

```text
Enemy Agent
├── Perception System
├── Memory System
├── Decision System
├── Target Selection
├── Tactical Positioning
├── Navigation System
├── Combat System
└── Coordination System
```

Struktur ini menggambarkan satu `Enemy Agent` sebagai sistem, bukan sekadar objek yang bergerak. Setiap cabang memiliki tanggung jawab berbeda, sehingga perilaku akhir muncul dari kombinasi antar modul.

Jika dilihat sebagai diagram, input utama adalah data lingkungan, proses terjadi di setiap modul, dan output akhirnya berupa `action` musuh.

Secara konsep, setiap modul dapat dipahami sebagai berikut:

- **Perception** — `Perception System` menerima input dari lingkungan, seperti posisi `player`, visibilitas, atau ancaman.
- **Memory** — `Memory System` menyimpan informasi penting, misalnya `lastKnownPosition`, target terakhir, atau status ancaman.
- **Decision** — `Decision System` menentukan `action` berikutnya berdasarkan data yang sudah diterima dan disimpan.
- **Target Selection** — modul ini memilih target yang paling relevan, misalnya target terdekat, paling terlihat, atau paling mengancam.
- **Tactical Positioning** — modul ini memilih posisi taktis, seperti `cover`, posisi serang, atau posisi mundur.
- **Navigation** — `Navigation System` mengubah keputusan menjadi gerakan nyata melalui `pathfinding`, `steering`, atau `avoidance`.
- **Combat** — `Combat System` mengatur aksi tempur, seperti menyerang, menahan, atau bertahan.
- **Coordination** — `Coordination System` membantu beberapa musuh bekerja sama, misalnya membagi target atau memanggil bantuan.

Pembagian modul ini penting karena memudahkan pengembangan. Jika musuh tidak bergerak dengan benar, kita bisa memeriksa `Navigation System`. Jika musuh lupa posisi `player`, kita bisa memeriksa `Memory System`. Jika musuh memilih target yang salah, kita bisa memeriksa `Target Selection`. Dengan cara ini, debugging dan pengujian menjadi lebih terarah.

Dalam praktik, arsitektur seperti ini juga memudahkan integrasi antar sistem. Modul keputusan dapat menggunakan aturan sederhana atau struktur keputusan yang sudah ada. Modul navigasi dapat terhubung ke `pathfinding`. Modul koordinasi dapat membaca data dari agen lain. Yang terpenting, setiap modul tetap memiliki input, proses, dan output yang jelas.

Sebelum lanjut, mahasiswa perlu memahami bahwa slide ini baru membahas **pembagian tanggung jawab**, bukan urutan eksekusi lengkap. Arsitektur ini menjadi dasar untuk memahami bagaimana setiap modul dipanggil dan bagaimana data mengalir antar modul.

### Inti yang Harus Ditekankan

- **Arsitektur modular** membuat Tactical Enemy lebih mudah diuji, diperbaiki, dan dikembangkan.
- Setiap modul memiliki peran berbeda: **perception**, **memory**, **decision**, **target selection**, **positioning**, **navigation**, **combat**, dan **coordination**.
- Perilaku taktis muncul dari kombinasi antar modul, bukan dari satu script besar.
- Pemahaman ini menjadi dasar untuk membahas alur eksekusi Tactical Enemy.

### Transisi ke Slide Berikutnya

Setelah memahami pembagian modul, langkah berikutnya adalah melihat bagaimana modul-modul tersebut bekerja secara berurutan dalam satu alur Tactical Enemy.

---

## Slide 011 - Alur Tactical AI

### Narasi

Setelah arsitektur modular pada slide sebelumnya, kita perlu melihat bagaimana modul-modul itu bekerja sebagai satu alur. **Alur Tactical** adalah urutan proses yang membuat NPC dapat merespons lingkungan secara lebih masuk akal. Alur ini bukan hanya daftar langkah sekali jalan, tetapi siklus yang terus dievaluasi selama permainan berjalan.

```text
1. Sense
2. Remember
3. Evaluate
4. Select Target
5. Choose Tactical Action
6. Move / Navigate
7. Attack / Defend
8. Coordinate
```

Makna praktisnya adalah: NPC tidak langsung menyerang, tetapi terlebih dahulu membaca situasi, menyimpan informasi penting, menilai ancaman, lalu memilih tindakan.

Urutan ini dapat dibaca sebagai berikut:

1. **Sense** — NPC menerima informasi dari lingkungan, misalnya player terlihat atau ada suara.
2. **Remember** — Informasi penting disimpan, seperti posisi terakhir player atau target yang sedang dikejar.
3. **Evaluate** — NPC menilai kondisi: apakah player dekat, apakah ancaman tinggi, apakah posisi aman.
4. **Select Target** — NPC memilih target berdasarkan prioritas, jarak, visibilitas, atau tingkat ancaman.
5. **Choose Tactical Action** — NPC menentukan perilaku, misalnya `attack`, `retreat`, `takeCover`, atau `defend`.
6. **Move / Navigate** — NPC bergerak menuju target, cover, atau posisi taktis menggunakan pathfinding atau steering.
7. **Attack / Defend** — NPC mengeksekusi aksi combat atau pertahanan.
8. **Coordinate** — Beberapa NPC menyelaraskan perilaku agar tidak semua bergerak atau menyerang secara bersamaan.

Contoh alur sederhana:

```text
Enemy melihat player
        ↓
Menyimpan posisi player
        ↓
Memilih player sebagai target
        ↓
Mencari cover
        ↓
Bergerak ke cover
        ↓
Menyerang dari cover
```

Contoh ini menunjukkan hubungan antara **perception**, **memory**, **decision**, dan **action**. Ketika player terlihat, posisi player disimpan. Setelah itu, NPC memilih player sebagai target, mencari cover, bergerak ke cover, lalu menyerang. Pola ini membuat perilaku NPC terasa lebih terencana, bukan sekadar berjalan ke player.

Yang perlu dipahami mahasiswa adalah bahwa alur ini bersifat **siklus**. Setiap langkah dapat diperbarui oleh data baru. Jika player berpindah, posisi yang diingat dapat berubah. Jika cover tidak tersedia, aksi taktis dapat berubah dari `takeCover` menjadi `retreat` atau `attack`. Karena itu, alur tactical membantu kita melihat bagaimana modul arsitektur saling terhubung menjadi perilaku yang utuh.

### Inti yang Harus Ditekankan

- **Alur tactical** adalah pipeline berulang: `sense`, `remember`, `evaluate`, `selectTarget`, `chooseAction`, `move`, `attack/defend`, `coordinate`.
- **Memory** penting agar NPC tidak kehilangan konteks, misalnya posisi terakhir player atau target yang sedang dipilih.
- **Decision** menentukan aksi taktis, bukan hanya memilih target; aksi bisa berupa menyerang, mundur, mencari cover, atau berkoordinasi.
- Alur ini membantu menghubungkan modul arsitektur menjadi perilaku NPC yang lebih konsisten dan mudah dianalisis.

### Transisi ke Slide Berikutnya

Selanjutnya, kita akan masuk ke bagian pertama dari alur ini, yaitu **Perception**, untuk memahami dari mana NPC mendapatkan informasi sebelum mengambil keputusan.

---

## Slide 012 - Perception dalam Tactical AI

### Narasi

Pada slide ini kita fokus pada **Perception** dalam konteks taktis. Secara sederhana, perception adalah cara NPC memperoleh informasi dari lingkungan sebelum mengambil keputusan. Tanpa perception, agent tidak tahu apakah player terlihat, ada suara, atau sedang menerima damage. Ia hanya bisa bergerak berdasarkan aturan statis.

Dalam alur taktis yang sudah dibahas sebelumnya, perception berperan sebagai **input utama**. Setelah NPC melakukan sense, data perception inilah yang kemudian disimpan, dievaluasi, lalu digunakan untuk memilih target dan aksi taktis. Jadi perception bukan sekadar “melihat”, tetapi proses mengubah kondisi lingkungan menjadi data yang dapat diproses oleh sistem keputusan.

Sumber perception dapat berasal dari beberapa hal:

- **Jarak** antara NPC dan player atau objek lain.
- **Field of view** untuk membatasi arah pandang NPC.
- **Raycast** untuk mengecek apakah ada penghalang di antara NPC dan target.
- **Trigger collider** untuk mendeteksi objek yang masuk ke area tertentu.
- **Suara** atau noise yang dihasilkan player.
- **Damage event** ketika NPC terkena serangan.
- **Komunikasi antar-agent** untuk berbagi informasi, misalnya posisi player yang diketahui satu NPC.

Data hasil perception biasanya disimpan sebagai variabel atau flag sederhana. Contoh:

```text
canSeePlayer
distanceToPlayer
playerVisible
heardNoise
tookDamage
enemyNearby
coverAvailable
```

Variabel seperti `canSeePlayer` atau `playerVisible` membantu sistem mengetahui apakah target dapat diamati. Nilai `distanceToPlayer` memberi informasi seberapa dekat ancaman. `heardNoise` memungkinkan NPC bereaksi terhadap suara meskipun player tidak terlihat. `tookDamage` memicu respons defensif atau pengejaran. `enemyNearby` dan `coverAvailable` membantu NPC menilai situasi taktis.

Intuisi praktisnya, perception menentukan kualitas perilaku NPC. Jika data perception terlalu sederhana, NPC akan terasa bodoh atau tidak responsif. Jika data terlalu lengkap dan langsung diproses tanpa batas, NPC bisa terasa terlalu pintar atau tidak realistis. Karena itu, desain perception harus disesuaikan dengan genre dan tujuan gameplay.

Dalam implementasi game, data perception sering menjadi jembatan antara lingkungan dan sistem keputusan. Nilai-nilai tersebut dapat dibaca oleh **finite state machine**, **behavior tree**, atau sistem steering untuk memilih state, action, atau arah gerak. Misalnya, jika `tookDamage` bernilai benar, NPC dapat berpindah ke state defensif. Jika `canSeePlayer` dan `coverAvailable` bernilai benar, NPC dapat memilih aksi mencari cover.

Yang perlu dipahami sebelum lanjut adalah bahwa perception adalah tahap awal dari sistem taktis. Ia menyediakan fakta, bukan keputusan. Keputusan seperti memilih target, mencari cover, atau menyerang akan dibahas pada tahap evaluasi dan aksi. Pada slide berikutnya, kita akan memperdalam salah satu sumber perception, yaitu **perception visual**, yang melibatkan jarak pandang, sudut pandang, dan line of sight.

### Inti yang Harus Ditekankan

- **Perception** adalah proses NPC memperoleh informasi dari lingkungan sebelum mengambil keputusan.
- Sumber perception mencakup jarak, field of view, raycast, trigger collider, suara, damage event, dan komunikasi antar-agent.
- Data perception seperti `canSeePlayer`, `distanceToPlayer`, `heardNoise`, dan `tookDamage` menjadi input utama untuk evaluasi, target selection, dan pemilihan aksi taktis.
- Perception mengubah kondisi lingkungan menjadi data yang dapat diproses oleh sistem keputusan, tetapi tidak langsung menentukan keputusan akhir.

### Transisi ke Slide Berikutnya

Setelah memahami peran perception sebagai input utama, kita akan masuk ke bagian yang lebih spesifik, yaitu **perception visual**, yang membahas bagaimana NPC menentukan apakah player terlihat berdasarkan jarak, sudut pandang, dan line of sight.

---

## Slide 013 - Perception Visual

### Narasi

**Perception visual** adalah bentuk persepsi NPC yang paling dekat dengan pengalaman pemain: musuh “melihat” pemain seperti mata manusia atau kamera. Dalam konteks perilaku game, kemampuan ini menjadi dasar NPC yang lebih realistis, karena NPC tidak bisa langsung mengetahui posisi pemain tanpa ada sumber informasi.

Secara intuitif, visual perception dapat dibayangkan sebagai **cone pandang** dari posisi NPC. Cone ini memiliki dua batas utama: seberapa jauh NPC bisa melihat, dan seberapa lebar sudut pandangnya. Jika pemain berada di luar jarak atau di belakang NPC, maka pemain belum tentu terlihat, meskipun posisinya masih dekat.

Diagram pada slide menunjukkan hubungan antara **Enemy** dan **Player** melalui **vision cone**. Arah cone biasanya mengikuti arah hadap NPC, misalnya `transform.forward`. Posisi pemain perlu diperiksa terhadap tiga hal: jarak, sudut pandang, dan apakah ada penghalang di antara keduanya.

```text
Player berada dalam jarak
DAN dalam sudut pandang
DAN tidak tertutup obstacle
```

Ketiga kondisi ini penting karena masing-masing mewakili batasan yang berbeda. **Jarak** membatasi seberapa jauh NPC dapat melihat. **Sudut pandang** membatasi arah pandang NPC. **Line of sight** memastikan NPC tidak bisa melihat menembus dinding, pohon, atau obstacle lain.

Dalam Unity, pemeriksaan visual perception biasanya menggunakan kombinasi beberapa API:

- `Vector3.Distance` untuk menghitung jarak antara posisi NPC dan pemain.
- `Vector3.Angle` untuk memeriksa apakah pemain berada di dalam sudut pandang NPC.
- `Physics.Raycast` untuk mengecek apakah ada obstacle yang menghalangi pandangan.
- `LayerMask` untuk menentukan objek mana yang dianggap sebagai target dan objek mana yang dianggap sebagai penghalang.

Urutan pemeriksaan yang umum adalah:

1. Cek jarak dengan `Vector3.Distance`.
2. Cek sudut pandang dengan `Vector3.Angle`.
3. Cek line of sight dengan `Physics.Raycast`, dengan bantuan `LayerMask` untuk memisahkan target dan obstacle.

Pendekatan ini membantu NPC tetap responsif tanpa melakukan raycast berlebihan untuk target yang jelas-jelas terlalu jauh atau berada di belakangnya.

Sebelum masuk ke detail parameter FOV, mahasiswa perlu memahami bahwa **perception visual bukan sekadar “melihat”**, melainkan proses pengambilan keputusan berbasis data lingkungan. Data hasil pemeriksaan ini kemudian menjadi input untuk perilaku taktis NPC, misalnya mengejar, berhenti, mencari cover, atau melaporkan posisi pemain.

### Inti yang Harus Ditekankan

- **Perception visual** membutuhkan tiga syarat utama: jarak, sudut pandang, dan line of sight.
- NPC tidak melihat ke segala arah; pandangannya dibatasi oleh **vision range**, **vision angle**, dan **obstacle**.
- Dalam Unity, kombinasi `Vector3.Distance`, `Vector3.Angle`, `Physics.Raycast`, dan `LayerMask` menjadi dasar implementasi visual perception.
- Hasil perception visual menjadi input penting untuk perilaku taktis NPC, bukan sekadar efek visual.

### Transisi ke Slide Berikutnya

Setelah memahami konsep dasar visual perception, kita akan memperjelas bagaimana area pandang NPC didefinisikan secara lebih formal melalui **Field of View**.

---

## Slide 014 - Field of View

### Narasi

**Field of View** atau **FOV** adalah area pandang yang dimiliki agent dalam game. Konsep ini penting karena NPC tidak seharusnya mengetahui posisi pemain hanya karena pemain ada di dunia, tetapi harus ada batasan pandang yang realistis.

Dalam implementasi sederhana, FOV biasanya dikendalikan oleh beberapa parameter utama:

```text
viewRadius
viewAngle
targetMask
obstacleMask
```

- `viewRadius` menentukan jarak maksimum agent dapat melihat.
- `viewAngle` menentukan lebar sudut pandang agent.
- `targetMask` menentukan objek apa saja yang bisa dianggap target, misalnya pemain atau NPC lain.
- `obstacleMask` menentukan objek apa saja yang dapat menghalangi pandangan, misalnya dinding, pintu, atau terrain.

Logika FOV dapat dipahami sebagai pipeline keputusan:

1. Cek apakah target berada dalam `viewRadius`.
2. Jika ya, cek apakah target berada dalam `viewAngle`.
3. Jika ya, cek apakah pandangan ke target tidak terhalang obstacle.
4. Jika semua kondisi terpenuhi, target dianggap terlihat.

```text
Jika target berada dalam radius
    cek sudut pandang

Jika target berada dalam sudut
    cek line of sight dengan raycast

Jika tidak tertutup obstacle
    target terlihat
```

Secara intuitif, FOV membuat perilaku enemy lebih masuk akal. Tanpa FOV, enemy bisa langsung mengejar pemain dari arah belakang, dari jarak jauh, atau dari balik dinding. Dengan FOV, agent hanya bereaksi terhadap target yang benar-benar berada di area pandangnya.

FOV juga menjadi dasar dari **perception** dan **decision making** pada NPC. Agent yang melihat target dapat berpindah state, misalnya dari `patrol` ke `chase`, atau memicu perilaku seperti `alert`, `attack`, atau `investigate`. Jadi FOV bukan sekadar bentuk kerucut di layar, tetapi mekanisme yang menghubungkan posisi agent, lingkungan, dan respons perilaku.

Sebelum lanjut, mahasiswa perlu memahami bahwa FOV adalah gabungan dari **jarak**, **sudut**, dan **halangan**. Parameter `targetMask` dan `obstacleMask` juga penting karena menentukan objek mana yang relevan untuk dilihat dan objek mana yang dapat memblokir pandangan.

### Inti yang Harus Ditekankan

- **FOV** adalah area pandang agent yang membatasi apa yang bisa dilihat NPC.
- Parameter utama adalah `viewRadius`, `viewAngle`, `targetMask`, dan `obstacleMask`.
- Logika FOV berjalan bertahap: cek radius, lalu sudut, lalu line of sight.
- FOV membuat enemy tidak mengetahui semua objek dan perilaku NPC lebih realistis.
- Hasil dari FOV memengaruhi state dan keputusan agent, misalnya `patrol`, `chase`, atau `alert`.

### Transisi ke Slide Berikutnya

Selanjutnya kita akan memperdalam **Line of Sight**, yaitu bagian dari FOV yang menentukan apakah pandangan agent ke target benar-benar terhalang oleh obstacle.

---

## Slide 015 - Line of Sight

### Narasi

**Line of Sight** atau LOS adalah tahap penting setelah **Field of View**. Pada slide sebelumnya, kita sudah membahas bahwa agent memiliki `viewRadius` dan `viewAngle`. Namun, hanya berada dalam radius dan sudut pandang saja belum cukup untuk memastikan target benar-benar terlihat.

Alasannya sederhana: di lingkungan game, biasanya ada dinding, pilar, pintu, atau objek lain yang dapat menghalangi pandangan. Karena itu, **Line of Sight** berfungsi untuk mengecek apakah ada **obstacle** di antara mata agent dan target.

Contoh intuitifnya adalah seperti ini:

```text
Enemy ● ──── █ Wall █ ──── ● Player
```

Meskipun player berada di dalam radius pandang enemy, jika ada dinding di antara keduanya, maka player tidak seharusnya terlihat. Inilah yang membuat perilaku NPC terasa lebih realistis dan tidak “melihat menembus tembok”.

Alur pemeriksaan LOS biasanya mengikuti tiga langkah:

1. Tentukan titik awal pandangan, misalnya `eyePosition`.
2. Buat arah ray menuju target, misalnya `directionToTarget`.
3. Jalankan raycast dan periksa apakah ray mengenai obstacle sebelum mencapai target.

Dalam Unity, hal ini sering diimplementasikan menggunakan `Physics.Raycast`. Contoh dasarnya adalah:

```csharp
Physics.Raycast(
    eyePosition,
    directionToTarget,
    out hit,
    viewDistance,
    obstacleMask
);
```

Pada potongan kode ini, `eyePosition` adalah titik awal ray, biasanya posisi mata atau sensor agent. `directionToTarget` adalah arah dari agent menuju target. `hit` digunakan untuk menyimpan informasi mengenai objek yang mengenai ray. `viewDistance` membatasi jarak maksimum raycast, dan `obstacleMask` menentukan layer atau tipe objek apa saja yang dianggap penghalang.

Jika raycast mengenai obstacle, maka target dianggap tidak terlihat. Sebaliknya, jika raycast tidak mengenai obstacle, atau hanya mengenai target, maka target dapat dianggap terlihat. Dalam implementasi yang lebih lengkap, biasanya kita juga membandingkan jarak `hit` dengan jarak ke target untuk memastikan obstacle benar-benar berada di antara agent dan target.

Poin penting yang harus dipahami mahasiswa adalah bahwa **LOS bukan sekadar fitur visual**, tetapi bagian dari sistem **perception** agent. Perception menentukan apa yang diketahui agent, dan apa yang diketahui agent akan memengaruhi keputusan berikutnya, misalnya apakah agent harus mengejar, waspada, atau tetap dalam state idle.

### Inti yang Harus Ditekankan

- **Line of Sight** adalah pengecekan apakah pandangan agent ke target terhalang oleh obstacle.
- LOS melengkapi **Field of View** dengan memastikan target tidak hanya dekat dan dalam sudut pandang, tetapi juga benar-benar terlihat.
- Implementasi umum di Unity menggunakan `Physics.Raycast` dengan parameter seperti `eyePosition`, `directionToTarget`, `viewDistance`, dan `obstacleMask`.
- Jika ray mengenai obstacle sebelum target, maka target dianggap **tidak terlihat**.
- LOS penting agar NPC tidak berperilaku tidak realistis, seperti melihat player dari balik dinding.

### Transisi ke Slide Berikutnya

Setelah membahas bagaimana agent “melihat” target secara visual, kita akan lanjut ke bentuk persepsi lain yang tidak bergantung pada pandangan, yaitu **Perception Non-Visual**, seperti suara, damage, dan alert antar-agent.

---

## Slide 016 - Perception Non-Visual

### Narasi

Pada slide ini kita memperluas cara NPC memperoleh informasi. Sebelumnya kita sudah membahas **Line of Sight**, yaitu apakah pandangan NPC ke player terhalang obstacle. Namun dalam game, NPC tidak selalu perlu melihat langsung untuk bereaksi.

Intuisinya sederhana: bayangkan NPC berada di ruangan gelap. Jika terdengar suara tembakan, NPC tetap bisa tahu bahwa ada ancaman di dekatnya. Persepsi non-visual membuat NPC mampu merespons kejadian yang tidak terlihat, sehingga perilaku game terasa lebih hidup dan taktis.

Beberapa bentuk persepsi non-visual yang perlu dipahami:

- **Hearing** — NPC dapat mendengar suara dari player atau lingkungan. Contoh: player menembak, lalu enemy mendengar suara dan mengubah state dari `patrol` menjadi `alert` atau `investigate`.
- **Damage Detection** — NPC yang terkena damage dapat mengetahui arah ancaman. Ini biasanya memicu respons yang lebih kuat, misalnya `combat`, `cover`, atau `retaliate`.
- **Shared Alert** — satu NPC yang melihat player dapat memberi tahu NPC lain. Dengan ini, sekelompok enemy bisa ikut waspada meskipun tidak semuanya melihat player.
- **Trigger Zone** — area tertentu dapat memicu reaksi ketika player masuk. Contoh: alarm menyala, enemy berubah state, atau dialog dimulai.
- **Noise Event** — kejadian yang menghasilkan suara, seperti tembakan, langkah, ledakan, atau pintu. Event ini biasanya membawa data seperti `position`, `intensity`, `type`, dan `duration`.

Dari contoh di slide, alurnya dapat dipahami sebagai berikut:

```text
Player menembak
    ↓
Noise Event
    ↓
Enemy mendengar suara
    ↓
Enemy mengubah state: patrol → alert
```

Artinya, sumber informasi tidak hanya datang dari mata NPC, tetapi juga dari kejadian di lingkungan. `Noise event` bisa dideteksi oleh satu enemy, lalu `shared alert` membuat enemy lain ikut bereaksi. `Damage detection` memberi informasi yang lebih langsung karena ancaman sudah mengenai NPC. `Trigger zone` memberi reaksi berbasis posisi, bukan berbasis pandangan.

Poin penting yang harus dipahami mahasiswa adalah bahwa persepsi non-visual adalah bagian dari **decision making** NPC. Tanpa mekanisme ini, NPC hanya akan bereaksi ketika player terlihat. Dengan mekanisme ini, NPC dapat berkoordinasi, mengejar sumber suara, atau bertahan setelah terkena damage.

### Inti yang Harus Ditekankan

- NPC tidak hanya bergantung pada **Line of Sight**; **hearing**, **damage detection**, **shared alert**, **trigger zone**, dan **noise event** memperluas sumber informasi.
- Persepsi non-visual biasanya berupa **event** yang memicu perubahan state atau koordinasi antar-agent.
- Mahasiswa perlu memahami bahwa `noise`, `damage`, dan `shared alert` adalah input perilaku taktis, bukan sekadar efek visual.

### Transisi ke Slide Berikutnya

Setelah NPC menerima informasi non-visual, pertanyaan berikutnya adalah bagaimana informasi itu disimpan ketika player tidak lagi terlihat. Pada slide berikutnya, kita akan membahas **Memory** dalam perilaku taktis.

---

## Slide 017 - Memory dalam Tactical AI

### Narasi

**Memory** dalam perilaku taktis NPC adalah kemampuan agen untuk menyimpan informasi penting yang pernah diterima dari lingkungan.

Intuisi praktisnya sederhana: NPC tidak harus selalu bereaksi hanya terhadap apa yang terlihat sekarang. Jika player baru saja terlihat lalu menghilang, NPC sebaiknya tetap mengingat lokasi terakhir, arah suara, atau sumber ancaman.

Data memory biasanya berupa variabel sederhana yang disimpan pada agen. Contoh field yang relevan:

```text
lastKnownPlayerPosition
lastSeenTime
lastHeardPosition
knownTargets
dangerPositions
recentDamageSource
currentCoverPoint
assignedRole
```

Setiap field memiliki peran berbeda.

- `lastKnownPlayerPosition` dan `lastSeenTime` membantu NPC menilai apakah informasi masih segar.
- `lastHeardPosition` berguna ketika NPC tidak melihat player tetapi mendengar suara.
- `knownTargets` dan `dangerPositions` mendukung keputusan prioritas ancaman.
- `recentDamageSource` membantu NPC mencari sumber tembakan atau serangan.
- `currentCoverPoint` dan `assignedRole` menjaga perilaku tetap konsisten dalam formasi atau tugas.

Tanpa memory, perilaku NPC terasa reaktif dan mudah diprediksi. Jika player tertutup tembok, NPC langsung kehilangan konteks dan kembali ke perilaku default seperti patrol.

Dengan memory, NPC dapat mempertahankan tujuan sementara. Misalnya, enemy menuju posisi terakhir player, lalu mencari di area tersebut. Perilaku ini membuat NPC terasa lebih waspada dan lebih sulit dihindari.

Dalam implementasi, memory biasanya menjadi input untuk sistem keputusan seperti finite state machine, behavior tree, atau steering behavior. Memory tidak menentukan seluruh perilaku, tetapi memberi data yang membuat transisi state dan pemilihan action lebih masuk akal.

Sebelum lanjut, mahasiswa perlu memahami bahwa memory adalah lapisan informasi, bukan perilaku itu sendiri. Memory menyimpan fakta; perilaku NPC muncul ketika fakta tersebut diproses oleh sistem keputusan.

### Inti yang Harus Ditekankan

- **Memory** membuat NPC mempertahankan informasi penting setelah target tidak terlihat.
- Data memory seperti `lastKnownPlayerPosition`, `lastSeenTime`, dan `lastHeardPosition` menjadi dasar perilaku search, chase, dan alert.
- Memory membantu NPC memilih action yang lebih kontekstual, bukan hanya kembali ke perilaku default.
- Memory adalah data pendukung keputusan, bukan pengganti sistem perilaku seperti FSM, behavior tree, atau steering.

### Transisi ke Slide Berikutnya

Selanjutnya, kita akan fokus pada salah satu data memory yang paling sering dipakai, yaitu **Last Known Position**, dan bagaimana data tersebut digunakan untuk perilaku pencarian.

---

## Slide 018 - Last Known Position

### Narasi

**Last Known Position** adalah posisi terakhir target yang masih diketahui oleh NPC.

Konsep ini penting karena dalam game, target seperti player tidak selalu terlihat terus-menerus. Player bisa bergerak ke balik tembok, keluar dari pandangan, atau bersembunyi. Tanpa data ini, NPC akan langsung kehilangan konteks dan kembali ke perilaku awal, misalnya patrol.

Dengan **Last Known Position**, NPC tetap memiliki informasi terakhir tentang di mana target terakhir kali terlihat. Informasi ini menjadi dasar perilaku yang lebih natural, terutama dalam game taktis, stealth, atau combat.

Contoh alurnya adalah sebagai berikut:

1. Enemy melihat player di titik A.
2. Player bergerak dan menghilang dari pandangan enemy.
3. Enemy tidak langsung kembali patrol.
4. Enemy menuju titik A.
5. Setelah sampai di titik A, enemy melakukan pencarian di area sekitar.

Data inti yang biasanya disimpan adalah:

```csharp
Vector3 lastKnownPlayerPosition;
float lastSeenTime;
```

`lastKnownPlayerPosition` menyimpan koordinat terakhir tempat target terlihat. `lastSeenTime` menyimpan waktu terakhir ketika target masih terlihat atau diketahui posisinya.

Dalam implementasi game, data ini biasanya diperbarui ketika NPC berhasil melihat target. Misalnya, ketika target berada dalam jangkauan pandangan, NPC menyimpan posisi target ke `lastKnownPlayerPosition` dan mencatat waktu ke `lastSeenTime`.

Ketika target hilang, NPC dapat menggunakan data tersebut untuk mengambil keputusan. Jika target masih terlihat, NPC bisa langsung mengejar target. Jika target tidak terlihat, NPC dapat beralih ke perilaku mencari berdasarkan **Last Known Position**.

Hubungan konsep ini dengan sistem perilaku NPC cukup luas:

- **Pathfinding**: NPC dapat menjadikan `lastKnownPlayerPosition` sebagai tujuan waypoint.
- **Steering**: NPC dapat bergerak menuju titik terakhir yang diketahui.
- **Finite State Machine**: NPC dapat memiliki state seperti `Chase`, `LostTarget`, `MoveToLastKnownPosition`, dan `Search`.
- **Behavior Tree**: NPC dapat memiliki node untuk bergerak ke posisi terakhir, lalu melakukan pencarian.
- **Decision Making**: NPC memilih perilaku berdasarkan apakah target masih terlihat atau hanya diketahui posisinya terakhir.

Secara praktis, **Last Known Position** membuat NPC terasa lebih “mengingat” keberadaan player. NPC tidak langsung lupa ketika player hilang sejenak, tetapi tetap melakukan respons yang masuk akal.

Hal yang perlu dipahami mahasiswa sebelum lanjut adalah bahwa **Last Known Position** bukan berarti NPC akan mengejar titik tersebut selamanya. Data ini hanya menjadi dasar perilaku sementara. Kapan data ini masih dianggap valid akan dibahas pada materi berikutnya.

### Inti yang Harus Ditekankan

- **Last Known Position** adalah posisi terakhir target yang diketahui NPC.
- Data ini membuat NPC tidak langsung lupa ketika target hilang dari pandangan.
- `lastKnownPlayerPosition` dan `lastSeenTime` adalah dua data inti yang biasanya disimpan.
- Konsep ini mendukung perilaku seperti chase, search, dan pencarian area.
- NPC dapat menggunakan data ini untuk pathfinding, steering, state machine, atau behavior tree.

### Transisi ke Slide Berikutnya

Setelah memahami apa itu **Last Known Position**, langkah berikutnya adalah menentukan kapan informasi tersebut masih dianggap valid. Kita akan membahas bagaimana NPC dapat “melupakan” target setelah waktu tertentu lewat.

---

## Slide 019 - Memory Timeout

### Narasi

**Memory Timeout** adalah aturan yang membatasi seberapa lama NPC mengingat informasi tentang target.

Pada slide sebelumnya, kita sudah membahas **Last Known Position**. Di sini kita menambahkan batas waktu: informasi posisi terakhir tidak boleh dipakai selamanya.

```text
if Time.time - lastSeenTime > memoryDuration:
    forget target
```

Pseudocode ini sederhana, tetapi penting. `Time.time` adalah waktu berjalan game, `lastSeenTime` adalah waktu terakhir NPC melihat target, dan `memoryDuration` adalah durasi validitas memori.

Jika selisih waktu melebihi batas, NPC melakukan `forget target`. Artinya, referensi target, posisi terakhir, atau status mengejar bisa direset.

Tujuan utama:

- NPC tidak terus mengejar informasi lama.
- Perilaku NPC lebih natural.
- Sistem tidak terlalu agresif.

Dalam perilaku game, timeout biasanya memicu transisi state, misalnya dari `chase` ke `search` atau `patrol`.

Sebelum lanjut, mahasiswa perlu memahami bahwa memory bukan data statis. Memory harus punya masa berlaku agar keputusan NPC tetap masuk akal.

### Inti yang Harus Ditekankan

- **Memory Timeout** membatasi validitas informasi target.
- `Time.time - lastSeenTime > memoryDuration` adalah kondisi dasar untuk melupakan target.
- Timeout membuat NPC berhenti mengejar data lama dan kembali ke perilaku yang lebih wajar.

### Transisi ke Slide Berikutnya

Setelah satu NPC memiliki aturan melupakan target, kita akan melihat bagaimana beberapa NPC dapat berbagi informasi melalui **Shared Memory**.

---

## Slide 020 - Shared Memory

### Narasi

Pada slide ini kita membahas **Shared Memory** dalam konteks squad. Intuisinya sederhana: jika satu NPC melihat player, informasi itu tidak harus berhenti pada NPC tersebut. Informasi dapat dibagikan ke anggota squad lain, sehingga kelompok musuh tampak lebih terkoordinasi.

Alur yang ditampilkan pada slide dapat dibaca sebagai proses distribusi informasi:

1. **Enemy A** melihat player.
2. Enemy A menyimpan atau mengirim informasi ke memori bersama squad.
3. **Enemy B** dan **Enemy C** membaca informasi tersebut dan mengetahui posisi player.

Data yang biasanya disimpan pada shared memory dapat berupa:

```text
sharedTarget
sharedLastKnownPosition
alertLevel
enemyWhoSpottedPlayer
```

Variabel `sharedTarget` menandai target yang sedang diburu. `sharedLastKnownPosition` menyimpan posisi terakhir yang diketahui, sehingga squad tetap bisa bergerak ke lokasi terakhir meskipun target sudah tidak terlihat. `alertLevel` menyimpan tingkat kewaspadaan bersama, sedangkan `enemyWhoSpottedPlayer` mencatat siapa yang pertama kali melihat player.

Dalam implementasi game, shared memory dapat dianggap sebagai papan informasi bersama untuk satu squad. Setiap NPC tetap memiliki persepsi sendiri, tetapi mereka juga dapat membaca data bersama. Dengan cara ini, satu NPC tidak perlu melihat player secara langsung untuk bereaksi; ia cukup menggunakan informasi yang sudah dibagikan oleh rekan satu squad.

Hal penting yang harus dipahami mahasiswa adalah bahwa shared memory membuat perilaku kelompok lebih koheren. Tanpa shared memory, setiap NPC mungkin bertindak seperti individu yang tidak saling tahu. Dengan shared memory, squad dapat bergerak ke posisi yang sama, menjaga jarak, atau merespons ancaman secara lebih natural.

Namun, shared memory juga harus dikelola dengan baik. Jika informasi tidak diperbarui atau tidak kadaluarsa, squad bisa terus mengejar posisi lama. Karena itu, data seperti `sharedLastKnownPosition` perlu dihubungkan dengan mekanisme waktu atau validitas memori, seperti yang sudah dibahas pada memory timeout.

### Inti yang Harus Ditekankan

- **Shared memory** memungkinkan satu NPC yang melihat player membagikan informasi ke seluruh squad.
- Data bersama seperti `sharedTarget`, `sharedLastKnownPosition`, `alertLevel`, dan `enemyWhoSpottedPlayer` membantu squad berperilaku lebih terkoordinasi.
- Shared memory tidak menghilangkan persepsi individu, tetapi menambah lapisan informasi bersama yang membuat respons kelompok lebih natural.

### Transisi ke Slide Berikutnya

Setelah memahami bagaimana informasi dibagikan antar NPC, langkah berikutnya adalah melihat bagaimana tingkat kewaspadaan squad dikelola. Slide berikutnya akan membahas **Alert System** sebagai cara NPC atau squad berpindah antar kondisi kewaspadaan.

---

## Slide 021 - Alert System

### Narasi

**Alert system** adalah mekanisme yang mengatur **tingkat kewaspadaan** NPC atau squad terhadap ancaman. Intuisi praktisnya sederhana: sebelum NPC memutuskan ke mana bergerak atau menyerang siapa, sistem perlu tahu apakah NPC sedang santai, curiga, mencari, atau sudah bertempur.

Level kewaspadaan biasanya disusun dari kondisi yang lebih tenang menuju kondisi yang lebih agresif:

```text
Calm
Suspicious
Alert
Combat
```

Makna tiap level dapat dipahami sebagai berikut:

1. `Calm` → NPC melakukan **patrol biasa** dan tidak fokus pada player.
2. `Suspicious` → NPC **mencurigai suara atau posisi** tertentu, lalu bergerak untuk memeriksa.
3. `Alert` → NPC **mencari target** berdasarkan informasi terakhir yang diketahui.
4. `Combat` → NPC sudah **mengunci target** dan melakukan serangan atau pengejaran.

Dalam implementasi, `alertLevel` dapat menjadi variabel penting di blackboard atau shared memory. Jika satu anggota squad melihat player, nilai `alertLevel` dapat berubah dan disebarkan ke anggota lain, sehingga seluruh squad tidak lagi berperilaku acak.

Alert system dapat dibangun dengan beberapa pendekatan:

- **FSM** → setiap level menjadi state, dan transisi terjadi saat ada event seperti mendengar suara, melihat player, atau kehilangan target.
- **Behavior Tree** → node memeriksa kondisi kewaspadaan lalu memilih perilaku patrol, investigate, search, atau attack.
- **Utility AI** → setiap level diberi skor berdasarkan jarak, `visibility`, ancaman, dan waktu sejak terakhir melihat target.

Yang harus dipahami mahasiswa adalah bahwa alert system bukan sekadar daftar label. Ia adalah **filter perilaku** yang menentukan kapan NPC boleh bergerak dari mode pasif ke mode agresif.

### Inti yang Harus Ditekankan

- **Alert system** mengatur **tingkat kewaspadaan** NPC atau squad.
- Level umum: `Calm`, `Suspicious`, `Alert`, `Combat`.
- Transisi antar level biasanya dipicu oleh **suara**, `visibility`, **posisi terakhir target**, atau **hilangnya target**.
- Pendekatan implementasi dapat berupa **FSM**, **Behavior Tree**, atau **Utility AI**.
- Variabel seperti `alertLevel` membantu NPC berperilaku lebih konsisten dan terkoordinasi.

### Transisi ke Slide Berikutnya

Setelah NPC tahu berada di level kewaspadaan mana, langkah berikutnya adalah menentukan target mana yang harus difokuskan. Itulah yang akan dibahas pada **Target Selection**.

---

## Slide 022 - Target Selection

### Narasi

**Target Selection** adalah proses di mana NPC menentukan target mana yang paling relevan untuk diserang, dikejar, atau diprioritaskan. Dalam game dengan banyak target, NPC tidak bisa sekadar memilih musuh pertama yang terlihat.

```text
Target mana yang harus difokuskan?
```

Pertanyaan ini menentukan apakah perilaku NPC terasa masuk akal atau hanya reaktif secara acak.

Faktor yang biasanya dipertimbangkan:

- `jarak` ke target,
- `visibility` atau apakah target terlihat,
- `health` target,
- `threat level` target,
- `role` target,
- apakah target sedang menyerang,
- `prioritas objektif` dalam misi.

Secara intuitif, NPC perlu menilai target berdasarkan kombinasi faktor tersebut, bukan hanya satu faktor tunggal.

```text
Pilih player yang paling dekat
atau player dengan threat tertinggi.
```

Contoh ini menunjukkan bahwa target selection dapat berupa aturan sederhana, tetapi tetap harus konsisten dengan peran NPC.

Sebelum lanjut, mahasiswa perlu memahami bahwa target selection adalah bagian dari **decision making** NPC, bukan sekadar pencarian musuh terdekat. Ia menentukan fokus perilaku NPC dan memengaruhi kesan kecerdasan squad di dalam game.

### Inti yang Harus Ditekankan

- **Target Selection** adalah proses memilih target yang paling relevan untuk diserang atau dikejar.
- Keputusan dapat didasarkan pada `jarak`, `visibility`, `health`, `threat level`, `role`, status menyerang, dan `prioritas objektif`.
- Target selection membantu NPC berperilaku lebih masuk akal, terutama ketika ada banyak target.

### Transisi ke Slide Berikutnya

Selanjutnya kita akan melihat mengapa target selection penting bagi dinamika gameplay dan perilaku squad.

---

## Slide 023 - Mengapa Target Selection Penting?

### Narasi

Pada slide ini kita melihat alasan mendasar mengapa **target selection** menjadi bagian penting dari perilaku NPC. Slide sebelumnya sudah memperkenalkan faktor-faktor yang bisa dipertimbangkan, tetapi di sini kita fokus pada dampaknya terhadap kualitas gameplay. Tanpa proses pemilihan target yang jelas, banyak `enemy` akan bergerak ke arah yang sama, misalnya semua mengejar pemain yang paling dekat atau pemain yang pertama kali terlihat. Akibatnya, formasi `squad` menjadi kaku, beberapa target yang lebih berbahaya tidak mendapat perhatian, dan pemain merasa lawan tidak memiliki strategi.

Dalam game dengan banyak agen, **target selection** membantu mendistribusikan perhatian antar-agent. Setiap `enemy` dapat memiliki prioritas berbeda sesuai role-nya. Misalnya:

- `enemy melee` memilih target yang dekat agar bisa menyerang secara efektif.
- `enemy ranged` memilih target yang terlihat dan berada dalam jangkauan.
- `enemy support` memilih `ally` yang lemah untuk disembuhkan atau didukung.

Dengan pembagian target seperti ini, `squad` tidak lagi terlihat seperti sekumpulan NPC yang bergerak acak, tetapi seperti tim yang memiliki tujuan. Hal ini membuat gameplay lebih dinamis karena pemain harus membaca pola serangan, mengatur jarak, dan memilih kapan harus menarik perhatian lawan.

Dari sisi desain game, **target selection** juga memengaruhi rasa tantangan. Jika semua musuh fokus pada satu pemain, pemain bisa merasa terlalu dominan atau terlalu mudah menghindari serangan. Sebaliknya, jika musuh memilih target berdasarkan jarak, ancaman, dan kondisi tim, pemain akan merasakan tekanan yang lebih seimbang. Oleh karena itu, target selection bukan hanya masalah teknis, tetapi juga alat untuk membentuk pengalaman bermain.

Sebelum lanjut ke metode sederhana, mahasiswa perlu memahami bahwa pemilihan target yang baik harus sesuai konteks role dan tujuan agen. Tidak semua `enemy` harus memilih target dengan cara yang sama. Prinsip utamanya adalah membuat keputusan yang masuk akal, konsisten, dan mendukung dinamika permainan.

### Inti yang Harus Ditekankan

- **Target selection** mencegah semua `enemy` mengejar target yang sama.
- Pembagian target membuat `squad` terlihat lebih cerdas dan hidup.
- Role `enemy` menentukan prioritas target yang masuk akal.
- Kualitas **target selection** memengaruhi dinamika gameplay dan tantangan.

### Transisi ke Slide Berikutnya

Setelah memahami mengapa **target selection** penting, kita akan mulai dari metode paling sederhana, yaitu memilih target terdekat, beserta kelebihan dan keterbatasannya.

---

## Slide 024 - Target Selection Sederhana

### Narasi

Pada slide ini kita masuk ke implementasi paling dasar dari **target selection**, yaitu memilih target berdasarkan jarak. Setelah slide sebelumnya menjelaskan mengapa pemilihan target penting, di sini kita melihat bentuk paling sederhana yang bisa langsung dipraktikkan.

Intuisi praktisnya sederhana: jika sebuah `enemy` harus memilih satu target dari beberapa kandidat, maka target terdekat sering menjadi pilihan yang paling mudah dan paling cepat dihitung. Pendekatan ini cocok untuk praktikum awal karena logikanya jelas, tidak banyak parameter, dan mudah diuji di scene Unity.

Pseudocode berikut menunjukkan cara kerja metode ini:

```text
bestTarget = null
bestDistance = infinity

for each target:
    distance = Distance(enemy, target)

    if distance < bestDistance:
        bestDistance = distance
        bestTarget = target
```

Urutan eksekusinya dimulai dengan menyiapkan dua variabel pembantu. `bestTarget` diisi `null` karena belum ada target yang terpilih, sedangkan `bestDistance` diisi `infinity` agar jarak pertama yang dihitung pasti lebih kecil.

Selanjutnya, sistem melakukan iterasi untuk setiap kandidat target. Pada setiap langkah, `Distance(enemy, target)` menghitung jarak antara posisi `enemy` dan posisi `target`. Jika jarak tersebut lebih kecil dari `bestDistance`, maka `bestDistance` diperbarui dan `bestTarget` diganti dengan target yang lebih dekat.

Setelah seluruh kandidat diperiksa, `bestTarget` berisi target dengan jarak minimum. Nilai inilah yang kemudian bisa digunakan oleh perilaku `enemy`, misalnya untuk bergerak menuju target, menyerang, atau memperbarui referensi target pada `NavMeshAgent`.

Kelebihan metode ini adalah **mudah**, **cepat**, dan **cocok untuk praktikum awal**. Mahasiswa dapat langsung melihat perubahan perilaku NPC ketika ada beberapa target di sekitar. Namun, metode ini juga memiliki keterbatasan.

Keterbatasan utamanya adalah metode ini hanya melihat jarak, tanpa mempertimbangkan faktor lain seperti ancaman, visibilitas, atau tujuan misi. Akibatnya, `enemy` mungkin memilih target yang dekat tetapi tidak terlihat, tidak berbahaya, atau tidak relevan dengan objective.

Sebelum lanjut, mahasiswa perlu memahami bahwa target selection bukan sekadar memilih objek terdekat. Ia adalah bagian dari keputusan perilaku agent, dan kualitas keputusan akan memengaruhi kesan squad, dinamika gameplay, dan rasa hidup NPC.

### Inti yang Harus Ditekankan

- **Target selection sederhana** memilih target berdasarkan jarak terdekat.
- Pseudocode menggunakan `bestTarget` dan `bestDistance` untuk menyimpan kandidat terbaik selama iterasi.
- Metode ini cepat dan mudah diimplementasikan, tetapi belum mempertimbangkan **ancaman**, **visibility**, atau **objective**.

### Transisi ke Slide Berikutnya

Jika hanya jarak digunakan, hasilnya masih terlalu sederhana. Pada slide berikutnya, kita akan melihat bagaimana target dapat diberi skor agar pemilihan menjadi lebih kontekstual.

---

## Slide 025 - Target Selection dengan Score

### Narasi

Pada slide ini kita meningkatkan cara agen memilih target. Pada pendekatan sebelumnya, agen cukup memilih target terdekat. Cara itu mudah, tetapi kurang realistis karena jarak saja tidak selalu menentukan target yang paling penting. Di sini kita memperkenalkan **skor target**, yaitu nilai numerik yang menggambarkan seberapa layak suatu target dipilih.

Intuisi praktisnya sederhana: setiap target tidak lagi dinilai hanya satu hal, melainkan beberapa hal sekaligus. Agen menghitung nilai untuk setiap kandidat target, lalu memilih target dengan nilai tertinggi. Dengan cara ini, keputusan agen menjadi lebih mirip perilaku karakter yang “memilih sasaran” berdasarkan situasi, bukan sekadar jarak.

Rumus dasarnya dapat ditulis sebagai:

```text
targetScore =
distanceScore
+
visibilityScore
+
threatScore
```

Artinya, skor total target berasal dari gabungan beberapa komponen. Komponen ini bisa disesuaikan dengan kebutuhan game. Yang penting, setiap komponen memberi sinyal yang berbeda tentang kualitas target.

Beberapa faktor yang bisa digunakan adalah:

- `distanceScore`: semakin dekat target, semakin tinggi nilainya. Faktor ini menjaga agen tetap efisien dan tidak mengejar target yang terlalu jauh.
- `visibilityScore`: target yang terlihat mendapat nilai tinggi, sedangkan target yang tidak terlihat mendapat nilai rendah. Faktor ini membuat agen tidak memilih sasaran yang tidak bisa diamati.
- `threatScore`: target yang sedang menyerang atau berpotensi membahayakan agen mendapat nilai tinggi. Faktor ini membuat agen lebih responsif terhadap ancaman.

Dengan menggabungkan faktor-faktor tersebut, agen tidak lagi hanya bereaksi terhadap satu informasi. Misalnya, target A mungkin lebih dekat, tetapi tidak terlihat dan tidak mengancam. Target B mungkin sedikit lebih jauh, tetapi terlihat dan sedang menyerang. Dalam situasi seperti itu, target B dapat memiliki skor lebih tinggi dan lebih layak dipilih.

Pendekatan ini mirip dengan konsep **utility**, yaitu menilai pilihan berdasarkan nilai kegunaan atau keuntungan relatif. Dalam konteks game, utility membantu agen membuat keputusan yang lebih halus dan kontekstual. Mahasiswa perlu memahami bahwa skor bukan sekadar angka acak, melainkan representasi dari prioritas perilaku agen.

Sebelum lanjut, hal penting yang harus dipahami adalah: target selection dengan score mengubah masalah “pilih satu target” menjadi masalah “berapa nilai kegunaan setiap target”. Skor total menjadi dasar keputusan, dan setiap faktor dapat diberi arti berbeda sesuai desain game.

### Inti yang Harus Ditekankan

- **Skor target** adalah cara menilai kelayakan target berdasarkan beberapa faktor, bukan hanya jarak.
- `targetScore` dapat dibentuk dari gabungan `distanceScore`, `visibilityScore`, dan `threatScore`.
- Target dengan **skor tertinggi** dipilih sebagai target utama.
- Pendekatan ini membuat keputusan agen lebih kontekstual dan mirip konsep **utility**.

### Transisi ke Slide Berikutnya

Setelah memahami bahwa target dapat dinilai dengan skor, langkah berikutnya adalah memberi bobot pada setiap faktor agar skor menjadi lebih terukur dan konsisten.

---

## Slide 026 - Target Score Contoh

### Narasi

Pada slide ini, kita melihat contoh konkret bagaimana **target score** dirumuskan dari beberapa faktor. Intuisinya sederhana: NPC tidak memilih target hanya karena satu alasan, tetapi karena kombinasi alasan yang diberi bobot. Faktor yang lebih penting mendapat bobot lebih besar.

Tabel pada slide menunjukkan tiga faktor: **Distance**, **Visibility**, dan **Threat**. Bobotnya masing-masing adalah `0.4`, `0.4`, dan `0.2`. Artinya, jarak dan visibilitas dianggap sama pentingnya, sedangkan ancaman sedikit lebih kecil pengaruhnya.

```text
score =
0.4 * distanceScore
+ 0.4 * visibilityScore
+ 0.2 * threatScore
```

Rumus ini bekerja seperti penjumlahan berbobot. Setiap faktor biasanya sudah dinormalisasi ke rentang yang konsisten, misalnya `0` sampai `1`. Semakin tinggi nilai faktor, semakin besar kontribusi faktor tersebut terhadap `score` akhir.

Jika target tidak terlihat, `visibilityScore` dapat dibuat sangat rendah atau `0`. Dampaknya, `score` target tersebut turun secara signifikan meskipun jaraknya dekat atau ancamannya tinggi. Dengan cara ini, NPC cenderung mengabaikan target yang tidak dapat diamati.

Secara praktis, pendekatan ini membantu NPC berperilaku lebih masuk akal. NPC tidak selalu menyerang target terdekat, tetapi memilih target yang dekat, terlihat, dan relevan secara taktis.

### Inti yang Harus Ditekankan

- **Bobot** menentukan seberapa besar pengaruh tiap faktor terhadap keputusan NPC.
- `distanceScore`, `visibilityScore`, dan `threatScore` sebaiknya memiliki skala yang konsisten agar penjumlahan berbobot masuk akal.
- Jika target tidak terlihat, `visibilityScore` yang rendah atau `0` membuat target tersebut kurang diprioritaskan.
- **Target score** adalah cara sederhana untuk mengubah beberapa pertimbangan menjadi satu nilai yang bisa dibandingkan.

### Transisi ke Slide Berikutnya

Setelah NPC tahu target mana yang paling layak dipilih, langkah berikutnya adalah mempertimbangkan posisi aman saat menghadapi target tersebut. Pada slide berikutnya, kita akan membahas **cover** dalam tactical AI.

---

## Slide 027 - Cover dalam Tactical AI

### Narasi

**Cover** adalah posisi yang memberi perlindungan bagi NPC terhadap serangan target. Intuisi praktisnya sederhana: NPC tidak selalu harus bergerak langsung ke arah player. Jika ada dinding atau obstacle di antara keduanya, NPC dapat memanfaatkan posisi tersebut untuk mengurangi risiko terkena serangan.

```text
Enemy ●     Wall ███     Player ●
```

Pada diagram ini, **enemy** berada di balik **wall**. Karena wall menghalangi pandangan, **player** tidak memiliki `line of sight` langsung ke enemy. Dalam konteks target score, kondisi seperti ini biasanya menurunkan nilai `visibilityScore`, karena target tidak terlihat atau hanya terlihat sebagian.

**Cover** biasanya digunakan oleh:

- **enemy shooter**, yang ingin menyerang dari posisi aman,
- **stealth NPC**, yang ingin menghindari deteksi,
- **tactical squad**, yang bergerak dan bertahan sebagai kelompok,
- **survival NPC**, yang perlu bertahan hidup di lingkungan berbahaya.

Dengan adanya cover, combat menjadi lebih **tactical**. NPC tidak hanya berlari ke player, tetapi dapat memilih untuk menahan posisi, bergerak ke sisi wall, atau menyerang ketika risiko terkena serangan lebih rendah. Perilaku ini membuat interaksi NPC terasa lebih terencana dan sesuai dengan desain game.

Yang perlu dipahami sebelum lanjut adalah bahwa **cover** pada slide ini masih bersifat relasional: ia muncul dari posisi NPC, posisi target, dan obstacle di antara keduanya. Cover belum tentu berupa titik yang sudah diberi nama atau disimpan sebagai objek. Pemahaman ini penting agar mahasiswa tidak langsung menganggap cover sebagai data tetap, padahal ia bisa berubah setiap kali posisi atau lingkungan berubah.

### Inti yang Harus Ditekankan

- **Cover** adalah posisi perlindungan, bukan sekadar tempat berdiri.
- Cover bergantung pada **line of sight**, obstacle, dan posisi relatif antara NPC dan target.
- Cover membuat perilaku NPC lebih **tactical** karena NPC dapat memilih posisi aman sebelum menyerang atau bertahan.
- Cover berbeda dari **cover point**, yang akan dibahas sebagai titik berlindung yang sudah ditentukan.

### Transisi ke Slide Berikutnya

Setelah memahami cover sebagai kondisi posisi yang melindungi NPC, langkah berikutnya adalah melihat bagaimana cover direpresentasikan secara eksplisit dalam game sebagai **cover point**.

---

## Slide 028 - Cover Point

### Narasi

Pada slide ini kita memperjelas konsep **Cover Point** sebagai elemen konkret dari perilaku taktis NPC. Jika **cover** adalah kondisi perlindungan terhadap serangan, maka **cover point** adalah titik spesifik yang sudah ditentukan sebagai tempat berlindung.

Intuisi praktisnya adalah NPC tidak hanya mencari “area aman” secara abstrak, tetapi bergerak menuju titik yang sudah dipetakan di scene. Titik ini dapat berada di balik dinding, di sudut ruangan, atau di belakang objek yang menghalangi **line of sight** dari player.

Contoh scene pada slide menunjukkan dua titik perlindungan:

```text
CoverPoint A ●
Wall █–ˆ█–ˆ█–ˆ█
CoverPoint B ●
```

Dalam contoh ini, **CoverPoint A** dan **CoverPoint B** berada di sisi yang berbeda dari **Wall**. Jika NPC berada di salah satu titik tersebut, player tidak selalu memiliki pandangan langsung ke NPC. Kondisi inilah yang membuat titik tersebut layak dijadikan **cover point**.

Dalam Unity, **cover point** dapat dibuat sebagai:

- **Empty GameObject** yang ditempatkan di posisi perlindungan.
- Komponen custom, misalnya:

```csharp
CoverPoint.cs
```

Pendekatan **Empty GameObject** cocok untuk kebutuhan sederhana karena posisi titik dapat dibaca dari transform objek. Komponen custom lebih berguna ketika NPC membutuhkan data tambahan untuk menilai kualitas perlindungan dan status penggunaan titik.

Data penting yang biasanya dimiliki oleh **cover point** adalah:

- `position`, yaitu lokasi titik perlindungan di scene.
- `direction`, yaitu arah yang sebaiknya dihadap oleh NPC saat berada di titik tersebut.
- `occupied status`, yaitu status apakah titik sudah ditempati oleh agent lain.
- `cover quality`, yaitu nilai kualitas perlindungan yang diberikan oleh titik tersebut.
- `exposure to target`, yaitu seberapa terbuka posisi NPC terhadap target atau player.

Data `position` dan `direction` membantu NPC tidak hanya sampai ke titik, tetapi juga berdiri dengan orientasi yang masuk akal. Data `occupied status` mencegah beberapa NPC berebut ke titik yang sama. Sementara itu, `cover quality` dan `exposure to target` menjadi dasar penilaian apakah titik tersebut benar-benar aman atau masih terlalu berisiko. Dengan data ini, **cover point** mengubah perlindungan dari konsep spasial menjadi informasi yang dapat diproses oleh sistem perilaku NPC.

Sebelum lanjut, mahasiswa perlu memahami bahwa **cover point** bukan sekadar marker visual. Ia adalah representasi data perilaku: posisi, orientasi, status, kualitas, dan tingkat keterpaparan. Pemahaman ini menjadi dasar untuk tahap berikutnya, yaitu bagaimana NPC memilih cover point yang paling tepat.

### Inti yang Harus Ditekankan

- **Cover Point** adalah titik perlindungan yang sudah ditentukan, bukan hanya konsep cover secara umum.
- Dalam Unity, cover point dapat diimplementasikan sebagai **Empty GameObject** atau komponen custom seperti `CoverPoint.cs`.
- Data penting cover point meliputi `position`, `direction`, `occupied status`, `cover quality`, dan `exposure to target`.
- Cover point memungkinkan NPC bergerak dan berperilaku taktis dengan data yang dapat diproses oleh sistem AI.

### Transisi ke Slide Berikutnya

Setelah cover point tersedia sebagai data perilaku, langkah berikutnya adalah menentukan bagaimana NPC memilih titik perlindungan yang paling sesuai.

---

## Slide 029 - Cover Selection

### Narasi

Pada slide ini, kita membahas **Cover Selection**, yaitu proses NPC memilih titik berlindung yang paling sesuai dari beberapa `coverPoint` yang tersedia.

Slide sebelumnya sudah menjelaskan apa itu **Cover Point**. Sekarang fokusnya bergeser: bukan lagi mendefinisikan titik, tetapi menilai titik mana yang sebaiknya dipilih oleh NPC.

Intuisi pentingnya adalah bahwa NPC tidak cukup hanya memilih cover yang paling dekat. NPC harus memilih cover yang membuat posisinya lebih aman, tetapi tetap memungkinkan untuk menyerang atau bertahan.

Faktor yang perlu dipertimbangkan antara lain:

- **Jarak ke `enemy`**: cover yang terlalu jauh membuat NPC lambat merespons ancaman.
- **Jarak ke `player`**: cover yang terlalu dekat bisa membuat NPC mudah terdeteksi atau terjebak.
- **Perlindungan dari `player`**: cover harus mampu mengurangi paparan NPC terhadap pandangan atau serangan `player`.
- **Status `occupied`**: cover yang sudah ditempati agent lain biasanya tidak ideal, karena bisa menyebabkan NPC bertumpuk atau saling menghalangi.
- **Kemampuan menyerang dari cover**: cover yang terlalu aman tetapi menutupi jalur serangan bisa membuat NPC terlalu pasif.
- **Kualitas cover**: nilai `coverQuality` membantu membedakan cover yang kuat, lemah, atau hanya perlindungan parsial.

Contoh sederhana dari slide dapat dibaca sebagai aturan praktis:

```text
Cover terbaik =
dekat dengan enemy
+
terlindung dari player
+
tidak ditempati
```

Artinya, pilihan cover yang baik biasanya berada di tengah: cukup dekat untuk tetap relevan secara taktis, cukup terlindungi untuk mengurangi risiko, dan masih tersedia untuk digunakan.

Dalam konteks perilaku NPC, proses ini menghasilkan kandidat cover yang layak. Setelah kandidat terpilih, NPC biasanya akan bergerak menuju titik tersebut, lalu menyesuaikan orientasi atau `direction` agar tetap bisa memantau lawan.

Hal yang harus dipahami mahasiswa sebelum lanjut adalah bahwa **Cover Selection** adalah tahap penilaian, bukan tahap pembuktian. Pada tahap ini, NPC memilih berdasarkan faktor taktis. Apakah cover benar-benar menghalangi pandangan atau serangan akan dibahas pada tahap validasi.

### Inti yang Harus Ditekankan

- **Cover Selection** adalah proses memilih `coverPoint` yang paling sesuai berdasarkan situasi taktis.
- Faktor utama meliputi jarak, perlindungan, status `occupied`, kemampuan menyerang, dan `coverQuality`.
- Cover terbaik tidak selalu yang paling aman, tetapi yang menyeimbangkan keamanan, jarak, dan kesempatan menyerang.
- Hasil dari tahap ini adalah kandidat cover yang layak, sebelum dilakukan validasi lebih lanjut.

### Transisi ke Slide Berikutnya

Setelah NPC memilih kandidat cover, langkah berikutnya adalah memastikan cover tersebut benar-benar melindungi. Pada slide berikutnya, kita akan membahas bagaimana validasi dilakukan dengan raycast untuk memeriksa apakah ada obstacle di antara NPC dan target.

---

## Slide 030 - Cover Validation dengan Raycast

### Narasi

Pada tahap ini, kita masuk ke **validasi cover** setelah NPC memiliki kandidat titik cover. Intuisinya sederhana: titik cover hanya berguna jika ada **obstacle** yang memisahkan NPC dari ancaman. Jika dari titik tersebut NPC masih terlihat langsung oleh player, maka titik itu tidak bisa dianggap melindungi.

Secara visual, hubungan antara cover, dinding, dan player dapat digambarkan seperti ini:

```text
CoverPoint ●   Wall ███   Player ●
```

Artinya, **CoverPoint** berada di sisi yang terlindungi oleh dinding. Jika NPC berada di titik tersebut, pandangan atau tembakan dari player terhalang oleh obstacle.

Validasi dilakukan dengan **raycast** dari posisi cover menuju target. Arah raycast adalah dari `coverPosition` ke posisi player atau target yang sedang dianalisis.

```text
CoverPoint → Player
```

Urutan prosesnya:

1. Ambil posisi kandidat cover.
2. Hitung arah dari cover ke player.
3. Jalankan raycast sejauh jarak ke player.
4. Periksa apakah ray mengenai obstacle.
5. Jika mengenai obstacle, cover dianggap **valid**.
6. Jika tidak mengenai obstacle, cover dianggap **tidak melindungi**.

Dalam Unity, validasi ini dapat dilakukan dengan `Physics.Raycast`. Fungsi ini menembakkan garis virtual ke arah tertentu dan mendeteksi apakah ada objek collider di sepanjang jalur tersebut.

```csharp
Physics.Raycast(
    coverPosition,
    directionToTarget,
    out hit,
    distanceToTarget,
    obstacleMask
);
```

Parameter `coverPosition` adalah titik awal raycast, yaitu posisi kandidat cover. Parameter `directionToTarget` adalah arah menuju player atau target. Variabel `hit` menyimpan hasil tabrakan, termasuk apakah ray mengenai collider dan di mana titik tabrakan terjadi. Parameter `distanceToTarget` membatasi panjang raycast agar hanya memeriksa area antara cover dan target. Parameter `obstacleMask` memastikan raycast hanya bereaksi terhadap layer obstacle, bukan terhadap NPC, player, atau objek lain yang tidak relevan.

Jika `hit` bernilai `true`, artinya ada obstacle di antara cover dan player. Kondisi ini menunjukkan bahwa cover memberikan perlindungan. Jika `hit` bernilai `false`, artinya jalur dari cover ke player terbuka, sehingga cover tidak valid untuk melindungi NPC.

Validasi dengan raycast penting karena pemilihan cover tidak boleh hanya berdasarkan jarak atau skor heuristik. Tanpa validasi, NPC bisa memilih titik yang terlihat aman secara numerik tetapi sebenarnya masih terekspos. Dengan raycast, sistem cover menjadi lebih realistis dan sesuai dengan geometri level.

Sebelum lanjut, mahasiswa perlu memahami bahwa **cover validation** adalah langkah verifikasi spasial. Langkah ini memastikan bahwa kandidat cover benar-benar terhalang oleh obstacle, bukan hanya dekat dengan dinding atau dekat dengan musuh.

### Inti yang Harus Ditekankan

- **Cover valid** hanya jika ada obstacle di antara NPC dan target.
- Raycast dilakukan dari `coverPosition` ke `directionToTarget` dengan batas `distanceToTarget`.
- `Physics.Raycast` digunakan untuk memeriksa apakah jalur cover ke player terhalang oleh obstacle.
- Jika ray mengenai obstacle, cover dianggap melindungi; jika tidak, cover tidak valid.
- `obstacleMask` penting agar raycast hanya memeriksa layer obstacle yang relevan.

### Transisi ke Slide Berikutnya

Setelah cover dinyatakan valid secara spasial, masih ada satu kondisi penting yang perlu diperiksa: apakah cover tersebut sudah digunakan oleh NPC lain. Pada slide berikutnya, kita akan membahas **Occupied Cover** dan aturan agar posisi taktis tidak menumpuk.

---

## Slide 031 - Occupied Cover

### Narasi

Setelah kita memastikan bahwa sebuah **cover point** benar-benar melindungi NPC dari target, ada satu masalah praktis yang sering muncul: banyak NPC bisa memilih cover yang sama. Tanpa aturan tambahan, seluruh anggota squad mungkin bergerak ke satu titik perlindungan yang sama, sehingga formasi menjadi tidak realistis dan posisi taktis menjadi kurang efektif.

Untuk mengatasi hal ini, kita memperkenalkan konsep **occupied cover**. Intinya sederhana: sebuah cover point sebaiknya tidak dipakai oleh banyak NPC sekaligus. Jika cover sudah ditempati, cover tersebut tidak boleh lagi dipilih oleh NPC lain.

Data minimum yang bisa digunakan adalah:

```csharp
bool isOccupied;
GameObject occupiedBy;
```

Variabel `isOccupied` berfungsi sebagai penanda apakah cover sedang dipakai. Variabel `occupiedBy` menyimpan referensi objek NPC yang sedang menempati cover tersebut. Referensi ini berguna untuk debugging, misalnya kita ingin melihat NPC mana yang sedang berada di cover tertentu, atau untuk memastikan cover dilepas ketika NPC berpindah.

Aturan pemilihannya bisa dinyatakan sebagai:

```text
Jika cover sudah ditempati:
    jangan pilih cover tersebut
```

Dalam alur pemilihan cover, NPC biasanya memiliki beberapa kandidat cover yang sudah valid. Setelah itu, kandidat yang `isOccupied` bernilai `true` harus disaring. Dengan cara ini, NPC hanya memilih dari cover yang masih tersedia.

Manfaat dari aturan ini cukup penting:

- enemy tidak menumpuk di satu titik,
- squad terlihat lebih realistis,
- posisi taktis lebih tersebar,
- perilaku NPC lebih mudah dikendalikan secara visual.

Dalam implementasi Unity, setiap komponen cover point dapat menyimpan status occupied. Ketika NPC memilih cover, nilai `isOccupied` diubah menjadi `true` dan `occupiedBy` diisi dengan `gameObject` NPC tersebut. Ketika NPC meninggalkan cover, mati, atau berpindah ke cover lain, status tersebut harus dikembalikan menjadi `false` dan referensi `occupiedBy` dibersihkan.

Hal yang harus dipahami mahasiswa sebelum lanjut adalah: **occupied cover bukan tentang seberapa bagus cover tersebut**, tetapi tentang apakah cover tersebut masih tersedia. Konsep ini menjadi dasar penting sebelum kita menilai kualitas cover secara lebih lanjut.

### Inti yang Harus Ditekankan

- **Occupied cover** adalah status ketersediaan sebuah cover point.
- Gunakan `isOccupied` dan `occupiedBy` untuk mencegah banyak NPC memilih cover yang sama.
- Cover yang sudah ditempati harus difilter dari kandidat sebelum NPC memilih posisi.
- Aturan ini membuat distribusi NPC lebih realistis dan taktis.

### Transisi ke Slide Berikutnya

Setelah cover dinyatakan valid dan tersedia, langkah berikutnya adalah menilai kualitas cover tersebut, misalnya berdasarkan perlindungan, jarak, dan sudut tembak.

---

## Slide 032 - Cover Quality

### Narasi

Pada slide sebelumnya, kita sudah membahas bahwa satu **cover point** sebaiknya tidak digunakan oleh banyak NPC sekaligus. Ide utamanya adalah mencegah NPC menumpuk di posisi yang sama. Sekarang kita melangkah lebih jauh: tidak semua cover sama kualitasnya. Dalam permainan taktis, NPC tidak hanya perlu menemukan cover yang tersedia, tetapi juga memilih cover yang paling menguntungkan.

Intuisi sederhananya adalah begini. Cover yang dekat, aman, dan masih memungkinkan NPC menembak biasanya lebih baik daripada cover yang jauh, terlalu tertutup, atau sudah dipakai NPC lain. Dengan kata lain, cover bukan hanya kondisi **ada** atau **tidak ada**, tetapi bisa diberi nilai atau skor.

Slide ini memberikan contoh kategori kualitas cover:

```text
High Cover
Low Cover
Weak Cover
Strong Cover
```

Kategori ini membantu kita memahami bahwa cover bisa berbeda tingkat perlindungan dan kegunaannya. Dalam implementasi sederhana, kategori seperti ini bisa dijadikan dasar pemberian skor. Misalnya, **strong cover** atau **high cover** dapat diberi nilai lebih tinggi, sedangkan **weak cover** atau **low cover** diberi nilai lebih rendah.

Selanjutnya, slide memberikan rumus sederhana untuk menilai cover:

```text
coverScore =
protectionScore
+
distanceScore
+
shootingAngleScore
-
occupiedPenalty
```

Rumus ini menunjukkan bahwa kualitas cover dapat dihitung dari beberapa faktor. `protectionScore` menggambarkan seberapa baik cover melindungi NPC dari serangan. `distanceScore` menilai seberapa dekat cover dengan posisi NPC atau target. `shootingAngleScore` menilai apakah NPC masih memiliki sudut tembak yang baik dari cover tersebut. Sementara itu, `occupiedPenalty` mengurangi skor jika cover sudah ditempati NPC lain, sehingga NPC cenderung memilih posisi yang lebih kosong.

Untuk praktikum sederhana, kita tidak perlu langsung membuat sistem yang terlalu kompleks. Cukup gunakan tiga hal utama:

- **jarak** ke cover,
- **validasi raycast** untuk memastikan cover benar-benar menghalangi atau posisi masih valid,
- **occupied status** untuk mengetahui apakah cover sudah dipakai NPC lain.

Ketiga komponen ini sudah cukup untuk membuat NPC memilih cover yang lebih masuk akal. Misalnya, NPC akan memilih cover yang dekat, tidak terhalang oleh objek yang tidak valid, dan belum ditempati NPC lain.

Yang perlu dipahami mahasiswa sebelum lanjut adalah bahwa **cover quality** adalah bagian dari proses pengambilan keputusan NPC. Cover score menjadi input untuk memilih posisi yang lebih baik. Dengan cara ini, perilaku NPC tidak lagi sekadar bergerak ke cover terdekat, tetapi memilih cover yang lebih aman, lebih strategis, dan lebih realistis.

### Inti yang Harus Ditekankan

- **Cover quality** membuat NPC memilih cover berdasarkan nilai, bukan hanya keberadaan cover.
- Skor cover dapat dihitung dari perlindungan, jarak, sudut tembak, dan penalti jika sudah ditempati.
- Untuk praktikum sederhana, cukup gunakan **jarak**, **validasi raycast**, dan **occupied status**.

### Transisi ke Slide Berikutnya

Setelah NPC mampu menilai kualitas cover, langkah berikutnya adalah memperluas cara NPC memilih posisi yang menguntungkan. Pada slide berikutnya, kita akan membahas **Tactical Positioning**, yaitu proses memilih posisi taktis yang tidak terbatas pada cover, tetapi juga mencakup jarak, sudut serangan, dan hubungan dengan target.

---

## Slide 033 - Tactical Positioning

### Narasi

Setelah kita memahami bahwa **cover** memiliki kualitas, langkah berikutnya adalah memikirkan bagaimana **agent** memilih posisi yang menguntungkan. **Tactical Positioning** adalah proses memilih posisi yang menguntungkan untuk agent, bukan sekadar bergerak menuju target atau berdiri di titik terdekat.

Intuisi praktisnya sederhana: agent yang baik tidak hanya tahu harus ke mana, tetapi juga tahu dari mana ia harus menyerang atau bertahan. Posisi yang baik membuat agent tetap efektif, mengurangi risiko terkena serangan, dan mendukung tujuan tim.

Tujuan utama dari positioning ini biasanya mencakup beberapa hal:

- aman dari serangan,
- dekat dengan target,
- memiliki `lineOfSight`,
- tidak terlalu dekat dengan teman,
- dapat menyerang dari sudut yang baik.

Dalam implementasi, posisi taktis dapat direpresentasikan sebagai `waypoint`, `node`, `area`, atau `state` dalam sistem perilaku. Agent dapat mengevaluasi beberapa kandidat posisi, lalu memilih yang paling sesuai berdasarkan jarak, visibilitas, keamanan, dan kebutuhan misi. Setelah posisi terpilih, `pathfinding` atau `steering` dapat digunakan untuk mencapai posisi tersebut.

Contoh posisi taktis yang umum adalah:

- di balik cover,
- di sisi samping target,
- menjaga jarak optimal,
- mengepung target,
- menjaga pintu atau area penting.

Poin penting yang harus dipahami mahasiswa adalah bahwa posisi taktis tidak ditentukan oleh satu faktor saja. Agent harus menyeimbangkan beberapa kepentingan, misalnya tetap dekat target tetapi tidak berdiri di area terbuka, atau menjaga jarak dari teman agar tidak saling menghalangi. Karena itu, keputusan posisi sering menjadi bagian dari `decision making` dalam `FSM`, `behavior tree`, atau sistem perilaku lainnya.

Sebelum lanjut, pastikan mahasiswa memahami bahwa **tactical positioning** adalah tahap penilaian posisi, bukan hanya pergerakan. Pergerakan baru terjadi setelah posisi yang menguntungkan dipilih.

### Inti yang Harus Ditekankan

- **Tactical positioning** adalah proses memilih posisi yang menguntungkan, bukan sekadar bergerak ke target.
- Posisi dinilai dari beberapa faktor: keamanan, jarak, `lineOfSight`, jarak antar agent, dan sudut serangan.
- Implementasinya dapat menggunakan `waypoint`, `node`, `area`, `pathfinding`, `steering`, `FSM`, atau `behavior tree`.

### Transisi ke Slide Berikutnya

Selanjutnya, kita akan melihat mengapa posisi terdekat belum tentu posisi terbaik, dan bagaimana posisi taktis sering menjadi kompromi antara beberapa faktor.

---

## Slide 034 - Posisi Taktis vs Posisi Terdekat

### Narasi

Pada slide ini kita membedakan dua konsep penting dalam perilaku NPC: **posisi terdekat** dan **posisi taktis**. Posisi terdekat biasanya mudah dihitung, misalnya titik yang paling dekat dengan target berdasarkan jarak atau biaya pergerakan. Namun, dalam game, jarak saja tidak cukup untuk menilai kualitas posisi.

Contoh sederhananya adalah sebagai berikut:

```text
Enemy memilih posisi terdekat
tetapi terbuka terhadap serangan player.
```

Kondisi ini sering terjadi jika NPC hanya bergerak ke titik terdekat tanpa menilai lingkungan. Akibatnya, musuh bisa tampak "ceroboh": ia mendekat ke player, tetapi langsung berada di area terbuka, tidak punya cover, atau mudah ditembak dari beberapa sisi.

Karena itu, perilaku taktis tidak hanya menjawab pertanyaan "di mana titik terdekat?", tetapi juga menilai apakah posisi tersebut layak digunakan. Beberapa pertanyaan yang biasanya dipertimbangkan adalah:

- Apakah posisi aman?
- Apakah posisi punya `line of sight`?
- Apakah posisi terlalu dekat?
- Apakah posisi ditempati agent lain?
- Apakah posisi mendukung `squad`?

Dalam implementasi sederhana, sistem biasanya memiliki beberapa kandidat posisi di sekitar target. Setiap kandidat kemudian diberi skor berdasarkan jarak, keamanan, visibilitas, overlap dengan agent lain, dan kontribusi terhadap formasi tim. Posisi yang dipilih bukan selalu yang paling dekat, melainkan yang memiliki skor terbaik.

Intuisi praktisnya adalah **posisi terbaik sering merupakan kompromi**. Agent mungkin memilih posisi yang sedikit lebih jauh agar aman, atau posisi yang tidak ideal dari segi jarak tetapi memberikan sudut serangan yang lebih baik. Dengan cara ini, NPC tidak hanya bergerak secara mekanis, tetapi menunjukkan perilaku yang lebih masuk akal dan lebih mirip pemain manusia.

Sebelum lanjut, mahasiswa perlu memahami bahwa `tactical positioning` bukan sekadar "bergerak ke target". Ia adalah proses evaluasi multi-kriteria yang melibatkan jarak, keamanan, visibilitas, dan koordinasi antar-agent. Pemahaman ini menjadi dasar untuk menentukan posisi yang benar-benar berguna dalam situasi permainan.

### Inti yang Harus Ditekankan

- **Posisi terdekat belum tentu posisi terbaik**; jarak saja bisa membuat NPC terekspos atau berperilaku tidak masuk akal.
- Perilaku taktis menilai posisi berdasarkan kriteria seperti keamanan, `line of sight`, jarak, okupansi, dan dukungan `squad`.
- Posisi terbaik biasanya merupakan **kompromi** dari beberapa faktor, bukan hanya titik terdekat dari target.

### Transisi ke Slide Berikutnya

Dengan memahami bahwa posisi taktis adalah hasil penilaian multi-kriteria, kita dapat melanjutkan ke slide berikutnya untuk membahas **Attack Position**, yaitu posisi yang memungkinkan NPC menyerang target dengan aman dan sesuai jangkauan serangannya.

---

## Slide 035 - Attack Position

### Narasi

Kita sudah melihat bahwa posisi terdekat belum tentu posisi terbaik. Pada slide ini, kita memfokuskan pada **attack position**, yaitu posisi yang memungkinkan NPC benar-benar dapat menyerang target.

Intuisi praktisnya sederhana: NPC yang dekat tetapi tidak punya jalur pandang, terjebak di sudut, atau menghalangi agent lain akan terasa tidak masuk akal. Karena itu, posisi menyerang harus dinilai sebagai satu paket kondisi, bukan hanya jarak.

Kriteria utama **attack position** adalah:

- **Target terlihat**: NPC harus memiliki `line of sight` atau kondisi visibilitas yang cukup.
- **Jarak sesuai `attack range`**: posisi tidak boleh terlalu jauh atau terlalu dekat untuk tipe serangan.
- **Tidak terlalu terekspos**: posisi sebaiknya memberi perlindungan atau mengurangi risiko serangan balik.
- **Agent dapat mencapai posisi tersebut**: posisi harus `reachable` melalui pathfinding atau steering yang valid.
- **Tidak menghalangi agent lain**: posisi tidak boleh membuat agent lain kehilangan ruang gerak.

Untuk enemy `ranged`, attack position biasanya menekankan keseimbangan jarak dan perlindungan:

```text
jarak sedang + line of sight + cover
```

Artinya, NPC `ranged` tidak selalu harus menempel target. Ia memilih posisi yang cukup dekat untuk menyerang, tetapi tetap memiliki `cover` dan jalur pandang.

Untuk enemy `melee`, fokusnya berbeda:

```text
jarak dekat + jalur bebas
```

NPC `melee` harus berada dalam jarak serangan dan memiliki ruang gerak yang cukup agar tidak terjebak, tidak menabrak hambatan, dan tidak menghalangi agent lain.

Secara implementasi, attack position dapat dipandang sebagai hasil evaluasi beberapa kondisi: visibilitas, jarak, keamanan, ketercapaian, dan ruang bersama. Jika salah satu kondisi gagal, posisi tersebut sebaiknya tidak dipilih.

Yang perlu dipahami sebelum lanjut: **attack position** bukan sekadar “pilih titik terdekat”. Ia adalah keputusan taktis yang menghubungkan perilaku NPC dengan lingkungan, pathfinding, dan tipe serangan. Pemahaman ini penting karena kualitas combat sering ditentukan oleh posisi yang dipilih sebelum aksi menyerang dieksekusi.

### Inti yang Harus Ditekankan

- **Attack position** adalah posisi yang memungkinkan NPC menyerang target secara valid.
- Posisi harus memenuhi `line of sight`, `attack range`, keamanan, ketercapaian, dan tidak menghalangi agent lain.
- Enemy `ranged` cenderung memilih jarak sedang dengan `cover`, sedangkan enemy `melee` membutuhkan jarak dekat dan jalur bebas.
- **Attack position** adalah keputusan taktis, bukan sekadar titik terdekat.

### Transisi ke Slide Berikutnya

Jika **attack position** menentukan dari mana NPC menyerang, maka langkah berikutnya adalah mempertimbangkan dari arah mana serangan itu datang. Pada slide berikutnya, kita akan membahas **flanking** sebagai taktik untuk membuat combat lebih dinamis.

---

## Slide 036 - Flanking

### Narasi

Slide ini membahas **Flanking**, yaitu taktik di mana NPC menyerang dari sisi samping atau belakang target, bukan hanya dari depan. Konsep ini penting karena dalam combat, posisi relatif terhadap player menentukan seberapa besar tekanan yang dirasakan. Jika semua musuh datang dari arah yang sama, player cukup menghadap satu sisi. Namun, jika ada musuh yang datang dari samping atau belakang, player harus membagi perhatian dan lebih sering berputar atau mundur.

Hubungannya dengan slide sebelumnya adalah sebagai berikut. **Attack position** menjawab pertanyaan: dari mana NPC bisa menyerang dengan aman? **Flanking** menjawab pertanyaan lanjutan: dari arah mana NPC sebaiknya mendekati target agar serangan lebih efektif? Jadi, attack position adalah syarat lokal untuk menyerang, sedangkan flanking adalah keputusan taktis untuk memilih arah pendekatan.

Contoh sederhananya dapat dilihat pada ilustrasi berikut:

```text
        Enemy B
           ●
           |
Enemy A ●-- Player ●
```

Pada gambar ini, `Enemy A` berada di depan `Player` dan menyerang secara frontal. `Enemy B` bergerak ke sisi kanan `Player`. Garis vertikal menunjukkan arah ancaman dari samping. Secara perilaku, `Enemy B` tidak perlu langsung menyerang dari depan; ia cukup menuju titik di sisi player, lalu menyerang setelah posisi tersebut aman.

Tujuan utama flanking adalah:

- memecah perhatian player,
- membuat combat lebih dinamis,
- mencegah semua enemy berkumpul di satu arah.

Dengan cara ini, player tidak hanya menghadapi satu vektor serangan, tetapi beberapa vektor sekaligus. Dalam desain game, hal ini membuat pertempuran terasa lebih hidup dan menuntut player untuk mengelola posisi, bukan hanya menekan tombol serangan.

Dari sisi implementasi, flanking biasanya menjadi bagian dari perilaku NPC yang lebih besar. NPC perlu memilih titik flank, bergerak ke titik tersebut menggunakan pathfinding, lalu beralih ke mode menyerang ketika jarak dan `line of sight` sudah memenuhi. Pada slide ini, kita belum menghitung titik flank secara matematis; yang perlu dipahami dulu adalah mengapa arah samping atau belakang lebih efektif daripada serangan frontal.

Sebelum lanjut, mahasiswa perlu menangkap satu intuisi penting: flanking bukan sekadar “musuh bergerak ke samping”. Flanking adalah keputusan taktis yang mengubah tekanan combat. Jika semua musuh hanya mengejar target dari depan, combat menjadi datar. Jika ada musuh yang flank, player harus merespons ancaman dari lebih dari satu arah.

### Inti yang Harus Ditekankan

- **Flanking** adalah taktik menyerang dari sisi samping atau belakang target.
- Tujuannya memecah perhatian player dan membuat combat lebih dinamis.
- Flanking melengkapi **attack position**: attack position menentukan titik aman menyerang, flanking menentukan arah pendekatan.
- Dalam implementasi, NPC biasanya memilih titik flank, bergerak ke sana, lalu menyerang; perhitungan titik flank dibahas pada slide berikutnya.

### Transisi ke Slide Berikutnya

Setelah memahami tujuan taktis dari flanking, kita lanjut ke cara sederhana menentukan posisi flank, yaitu menghitung titik di sisi player dan mengecek validitasnya di NavMesh.

---

## Slide 037 - Flanking Sederhana

### Narasi

Pada slide ini kita masuk ke implementasi sederhana dari **flanking**. Intuisinya, musuh tidak perlu selalu datang dari depan. Cukup geser posisi target ke sisi kanan atau kiri player, lalu bergerak ke titik tersebut.

Cara paling praktis adalah memakai vektor kanan player. Dalam Unity, `player.right` memberikan arah kanan relatif terhadap orientasi player. Jika player berputar, arah kanan ikut berubah, sehingga posisi flank tetap mengikuti sisi player. Asumsi di sini adalah `player` merujuk pada `Transform`.

```csharp
Vector3 right = player.right;
Vector3 flankPosition =
    player.position + right * flankDistance;
```

Baris pertama mengambil arah kanan player. Baris kedua menggeser posisi player sejauh `flankDistance` ke arah kanan. Hasilnya adalah titik flank di sisi kanan player.

Untuk sisi kiri, cukup ubah tanda offset:

```csharp
Vector3 flankPosition =
    player.position - right * flankDistance;
```

Perhatikan bahwa `flankDistance` adalah parameter desain. Jarak terlalu kecil membuat flank kurang terlihat, sedangkan jarak terlalu besar bisa membuat musuh terlalu jauh atau tidak natural.

Setelah titik flank dihitung, langkah penting berikutnya adalah memastikan titik tersebut valid di `NavMesh`. Posisi hasil offset mungkin berada di dinding, area tidak bisa jalan, atau di luar area yang bisa dijangkau pathfinding.

Urutan prosesnya bisa dilihat sebagai:

1. Ambil `player.right` sebagai arah lateral.
2. Hitung `flankPosition` di sisi kanan atau kiri player.
3. Validasi `flankPosition` terhadap `NavMesh`.
4. Jika valid, jadikan titik tersebut sebagai target pergerakan musuh.
5. Jika tidak valid, cari alternatif posisi flank atau fallback ke posisi aman.

Dalam konteks perilaku game, titik flank ini biasanya menjadi **waypoint** sebelum musuh menyerang. Misalnya dalam FSM, musuh bisa berpindah ke state `MoveToFlank`, lalu setelah sampai atau mendekati titik tersebut, masuk ke state `Attack`. Dengan cara ini, perilaku musuh terasa lebih taktis tanpa perlu sistem flanking yang rumit.

Yang perlu dipahami mahasiswa adalah bahwa flanking sederhana ini berbasis **offset vektor**, bukan pencarian taktik global. Kelebihannya mudah diimplementasi dan mudah di-tune. Batasannya, hasil bisa kurang baik jika lingkungan kompleks, player sering berputar, atau titik flank sering tidak valid.

### Inti yang Harus Ditekankan

- **Flanking sederhana** dilakukan dengan menggeser posisi player ke arah `player.right` atau ke arah sebaliknya.
- `flankDistance` menentukan seberapa jauh posisi flank dari player, sehingga perlu di-tune agar natural.
- Posisi flank harus divalidasi di `NavMesh` sebelum dijadikan target pathfinding.
- Titik flank berfungsi sebagai **waypoint** taktis, bukan pengganti seluruh sistem combat.

### Transisi ke Slide Berikutnya

Setelah musuh bisa memilih posisi flank yang valid, pembahasan berikutnya adalah bagaimana musuh menjaga jarak yang tepat saat menyerang, terutama untuk enemy ranged.

---

## Slide 038 - Maintain Distance

### Narasi

Slide ini membahas **Maintain Distance**, yaitu aturan jarak tempur untuk **enemy ranged**. Intuisinya sederhana: musuh yang menyerang dari jarak jauh tidak selalu harus mendekati player. Ia perlu berada pada jarak yang cukup untuk menembak efektif, tetapi tidak terlalu dekat sehingga mudah terkena serangan jarak dekat atau kehilangan ruang manuver.

Secara perilaku, kita dapat membagi keputusan menjadi tiga kondisi berdasarkan jarak antara enemy dan player:

- `too far` → enemy bergerak mendekat.
- `ideal range` → enemy menyerang atau menjaga posisi.
- `too close` → enemy mundur atau mencari jarak yang lebih aman.

Parameter yang mengatur perilaku ini adalah:

- `minCombatDistance`: batas bawah jarak aman. Jika jarak lebih kecil dari nilai ini, enemy dianggap terlalu dekat.
- `maxCombatDistance`: batas atas jarak efektif. Jika jarak lebih besar dari nilai ini, enemy perlu mendekat.
- `idealCombatDistance`: titik atau rentang jarak yang paling diinginkan untuk menyerang.

Dalam implementasi sederhana, logikanya dapat ditulis sebagai berikut:

```text
distance = jarak(enemy, player)

if distance > maxCombatDistance:
    approach(player)
elif distance < minCombatDistance:
    retreat()
else:
    attack()
```

Urutan eksekusinya dimulai dari perhitungan jarak, lalu perbandingan terhadap threshold, dan akhirnya pemilihan aksi. Jika terlalu jauh, target pergerakan bisa berupa posisi player atau titik di sepanjang jalur menuju player. Jika terlalu dekat, target mundur bisa berupa titik yang menjauh dari player dan tetap valid di `NavMesh`. Jika berada pada rentang ideal, enemy dapat berhenti, menjaga jarak, atau melakukan serangan.

Dari sisi desain game, perilaku ini membuat **enemy ranged** terasa lebih realistis. Tanpa aturan jarak, musuh akan terus mengejar player seperti musuh melee, sehingga kehilangan karakter sebagai penembak. Dengan `Maintain Distance`, enemy dapat mempertahankan tekanan dari jarak yang aman, memberi player ruang untuk bergerak, dan menciptakan dinamika tempur yang lebih seimbang.

Dalam konteks **NPC behavior**, aturan ini dapat dimasukkan ke dalam **state machine**, **steering behavior**, atau sistem keputusan sederhana. State yang umum adalah `Approach`, `Attack`, dan `Retreat`. Transisi antar state ditentukan oleh jarak, sehingga perilaku enemy menjadi responsif terhadap posisi player.

Sebelum lanjut, mahasiswa perlu memahami bahwa jarak tempur bukan hanya nilai visual, melainkan parameter perilaku yang memengaruhi navigasi, serangan, dan keseimbangan game. Nilai `minCombatDistance`, `maxCombatDistance`, dan `idealCombatDistance` dapat disesuaikan untuk menghasilkan musuh yang agresif, defensif, atau seimbang.

### Inti yang Harus Ditekankan

- **Enemy ranged** memiliki jarak ideal tempur, sehingga tidak selalu mengejar player.
- Tiga kondisi utama: terlalu jauh → mendekat, jarak ideal → menyerang, terlalu dekat → mundur.
- Parameter `minCombatDistance`, `maxCombatDistance`, dan `idealCombatDistance` mengatur transisi perilaku.
- Implementasi dapat berupa state machine, steering, atau target navigasi pada `NavMesh`.

### Transisi ke Slide Berikutnya

Setelah enemy tahu kapan harus mendekat, menyerang, atau mundur, langkah berikutnya adalah memilih posisi yang paling menguntungkan. Pada slide berikutnya, kita akan melihat bagaimana posisi dapat dinilai menggunakan skor, sehingga enemy tidak hanya menjaga jarak, tetapi juga memilih titik yang lebih baik secara taktis.

---

## Slide 039 - Tactical Position Score

### Narasi

Setelah membahas jarak ideal, langkah berikutnya adalah menentukan posisi mana yang sebaiknya dipilih oleh NPC. Pada slide ini, kita tidak lagi hanya bertanya “apakah NPC harus mendekat atau mundur?”, tetapi “ke titik mana NPC sebaiknya bergerak?”. Pendekatan yang digunakan adalah memberi nilai atau skor pada beberapa **posisi kandidat**, lalu memilih posisi dengan **skor tertinggi** sebagai tujuan gerak.

Intuisi praktisnya sederhana: posisi yang baik biasanya bukan satu-satunya posisi paling dekat ke target. Posisi yang baik adalah posisi yang menguntungkan secara taktis, misalnya terlindung, masih bisa melihat target, berada pada jarak yang aman, dan tidak menumpuk dengan NPC lain.

```text
positionScore =
coverScore
+
lineOfSightScore
+
distanceScore
+
separationScore
```

Rumus ini menunjukkan bahwa `positionScore` dibangun dari beberapa komponen. Setiap komponen menilai satu aspek taktis dari posisi yang sedang diperiksa.

- `coverScore`: menilai apakah posisi tersebut terlindung, misalnya berada di balik obstacle atau area yang mengurangi risiko terkena serangan.
- `lineOfSightScore`: menilai apakah target masih terlihat dari posisi tersebut, sehingga NPC tetap bisa menyerang atau memantau pemain.
- `distanceScore`: menilai apakah posisi tersebut berada pada jarak yang sesuai, tidak terlalu dekat dan tidak terlalu jauh.
- `separationScore`: menilai apakah posisi tersebut tidak terlalu dekat dengan NPC lain, sehingga kelompok NPC tidak saling menumpuk.

Urutan pemakaiannya dalam perilaku NPC dapat dilihat sebagai berikut:

1. Sistem mengumpulkan beberapa posisi kandidat di sekitar NPC atau sekitar target.
2. Untuk setiap posisi, sistem menghitung `coverScore`, `lineOfSightScore`, `distanceScore`, dan `separationScore`.
3. Nilai-nilai tersebut digabungkan menjadi `positionScore`.
4. Posisi dengan `positionScore` tertinggi dipilih sebagai tujuan navigasi.
5. NPC kemudian bergerak ke posisi tersebut menggunakan pathfinding atau steering.

Kelebihan pendekatan skor adalah NPC tidak terjebak pada aturan biner. Misalnya, jika posisi A dekat target tetapi tidak terlindung, dan posisi B sedikit lebih jauh tetapi memiliki cover, sistem dapat memilih posisi B jika `coverScore` lebih besar. Dengan cara ini, perilaku NPC terasa lebih memilih posisi, bukan sekadar mengejar.

Yang perlu dipahami mahasiswa sebelum lanjut: **Tactical Position Score** adalah mekanisme penilaian lokal untuk memilih tujuan. Ia bekerja di level keputusan posisi, bukan di level koordinasi antar NPC. Faktor `separationScore` hanya membantu NPC tidak menumpuk dengan teman, tetapi belum mengatur peran seperti flank, cover, atau tekanan dari arah berbeda.

### Inti yang Harus Ditekankan

- `positionScore` adalah cara memilih **posisi terbaik** dari beberapa posisi kandidat.
- Skor total berasal dari `coverScore`, `lineOfSightScore`, `distanceScore`, dan `separationScore`.
- Posisi dengan skor tertinggi menjadi target navigasi untuk pathfinding atau steering.
- Pendekatan ini membuat NPC memilih posisi secara taktis, bukan hanya bergerak langsung ke target.

### Transisi ke Slide Berikutnya

Setelah satu NPC dapat memilih posisi berdasarkan skor, langkah berikutnya adalah melihat bagaimana beberapa NPC mengatur perilaku mereka agar tidak saling menumpuk dan bisa bekerja sama.

---

## Slide 040 - Coordination Antar-Agent

### Narasi

**Coordination antar-agent** adalah kemampuan beberapa NPC untuk bekerja sama sebagai satu kelompok, bukan sekadar menjalankan perilaku masing-masing secara terpisah. Dalam konteks game, satu agent mungkin sudah mampu melihat target, memilih jalur, dan bergerak menuju posisi yang menguntungkan. Namun, jika banyak agent mengambil keputusan secara independen, hasil akhirnya bisa tidak efektif.

Tanpa coordination, perilaku kelompok sering kali menjadi repetitif. Misalnya, semua enemy bergerak ke arah player dari jalur yang sama, memilih target yang sama, dan akhirnya menumpuk di satu titik.

```text
Semua enemy mengejar player dari arah yang sama
dan saling menumpuk.
```

Kondisi ini membuat kelompok NPC terlihat kaku. Player juga menjadi lebih mudah menghadapi mereka karena tekanan datang dari satu pola yang sama.

Dengan coordination, setiap agent dapat memiliki peran atau niat taktis yang berbeda. Contoh sederhana:

```text
Enemy A menekan dari depan
Enemy B flank dari kiri
Enemy C mengambil cover
```

Peran-peran ini membuat kelompok enemy terasa lebih hidup. `Enemy A` memberi tekanan langsung, `Enemy B` membuka sisi lemah player, dan `Enemy C` menjaga posisi aman untuk bertahan atau mendukung serangan.

Coordination bukan berarti setiap agent harus memiliki perilaku yang sangat kompleks. Yang penting adalah adanya pembagian tugas atau pembagian ruang gerak. Dengan begitu, kelompok NPC dapat menghasilkan tekanan taktis yang lebih variatif.

Secara desain, coordination mengubah tujuan perilaku dari “agent mencapai target” menjadi “kelompok menciptakan situasi yang menguntungkan”. Artinya, keputusan satu agent tidak hanya mempertimbangkan posisinya sendiri, tetapi juga posisi dan peran agent lain.

Sebelum lanjut, mahasiswa perlu memahami bahwa coordination adalah lapisan perilaku kelompok. Ia berada di atas perilaku individu seperti pathfinding, steering, atau state machine. Tanpa lapisan ini, banyak NPC yang bergerak secara benar secara individual, tetapi salah secara kelompok.

### Inti yang Harus Ditekankan

- **Coordination** membuat beberapa NPC bekerja sama, bukan hanya bergerak sendiri-sendiri.
- Tanpa coordination, agent sering memilih **target, jalur, atau cover yang sama**, sehingga terjadi penumpukan.
- Dengan coordination, agent dapat membagi peran seperti **tekanan depan**, **flank**, dan **cover**.
- Coordination membuat kelompok NPC terlihat lebih cerdas dan gameplay menjadi lebih menantang.

### Transisi ke Slide Berikutnya

Selanjutnya, kita akan melihat contoh masalah yang muncul ketika coordination tidak ada, serta bentuk-bentuk solusi yang biasanya digunakan untuk memperbaiki perilaku kelompok NPC.

---

## Slide 041 - Masalah Tanpa Koordinasi

### Narasi

Pada slide ini kita mengamati masalah yang muncul ketika beberapa NPC sudah mampu bergerak menuju pemain, tetapi belum bekerja sama.

```text
Enemy ●—●—● → Player
```

Diagram ini menunjukkan tiga enemy yang bergerak ke arah `Player` dari jalur yang hampir sama. Arah panah menandakan tujuan bersama, sedangkan titik-titik enemy menunjukkan posisi yang saling berdekatan.

Intuisi praktisnya adalah: **keputusan lokal yang benar belum tentu menghasilkan perilaku grup yang baik**. Setiap enemy mungkin sudah memilih target yang valid, menghitung path yang valid, dan bergerak dengan kecepatan yang wajar. Namun, karena tidak ada aturan bersama, mereka tetap menumpuk di satu titik.

Akibatnya, perilaku kelompok menjadi kurang natural dan kurang menantang:

- enemy menumpuk di depan `Player`,
- satu enemy dapat menghalangi enemy lain,
- semua memilih target yang sama,
- semua memilih cover yang sama,
- gameplay terasa repetitif dan mudah diprediksi.

Masalah ini penting karena bukan hanya soal tampilan. Jika semua enemy menumpuk, pemain dapat mengalahkannya dengan satu serangan area, atau enemy justru saling memblokir sehingga tidak ada tekanan taktis. Dalam desain game, kelompok NPC yang baik harus terasa seperti satu tim, bukan kumpulan agen yang berjalan sendiri-sendiri.

Untuk mengurangi masalah ini, ada beberapa arah solusi yang bisa digunakan:

- `role assignment`: memberi peran berbeda, misalnya satu enemy menyerang, satu menyamping, satu menjaga cover.
- `cover reservation`: memastikan satu titik cover tidak dipakai oleh banyak enemy sekaligus.
- `target distribution`: membagi target agar tidak semua enemy mengejar objek yang sama.
- `separation`: menambahkan gaya atau aturan agar enemy tidak saling menempel.
- `shared memory`: menyimpan informasi penting yang bisa dibaca oleh beberapa enemy.
- `group alert`: menyebarkan status bahaya atau peringatan ke anggota kelompok.

Hal yang harus dipahami sebelum lanjut adalah bahwa **koordinasi bukan satu algoritma tunggal**, melainkan kombinasi aturan, pembagian peran, dan data bersama. Mahasiswa perlu membedakan antara perilaku individu dan perilaku kelompok: individu bisa memilih path, tetapi kelompok perlu mengatur siapa melakukan apa, di mana, dan kapan.

### Inti yang Harus Ditekankan

- Tanpa koordinasi, NPC bisa terlihat "cerdas" secara individu tetapi buruk secara kelompok.
- Masalah utama adalah penumpukan, target yang sama, cover yang sama, dan gameplay yang kurang menantang.
- Solusinya melibatkan pembagian peran, pembagian target, reservasi cover, separation, dan data bersama.
- Koordinasi membuat kelompok NPC terasa lebih natural, taktis, dan sulit diprediksi pemain.

### Transisi ke Slide Berikutnya

Setelah kita memahami masalahnya, langkah berikutnya adalah melihat bagaimana data bersama dapat disimpan agar beberapa NPC bisa mengambil keputusan yang lebih selaras.

---

## Slide 042 - Shared Blackboard

### Narasi

Setelah melihat masalah ketika banyak enemy bergerak tanpa koordinasi, slide ini memperkenalkan **shared blackboard** sebagai cara memberi squad satu sumber informasi bersama.

**Shared blackboard** dapat dipahami sebagai papan data bersama yang menyimpan keadaan penting bagi seluruh anggota squad. Data ini tidak perlu diulang di setiap agent, karena setiap agent dapat membaca kondisi yang sama pada waktu yang relevan.

```text
sharedTarget
lastKnownTargetPosition
alertLevel
assignedCoverPoints
squadMembers
squadLeader
attackSlots
```

Beberapa field penting pada blackboard tersebut adalah:

- `sharedTarget`: target yang sedang menjadi perhatian squad.
- `lastKnownTargetPosition`: posisi terakhir target yang diketahui.
- `alertLevel`: tingkat kewaspadaan squad.
- `assignedCoverPoints`: titik cover yang sudah diambil atau dialokasikan.
- `squadMembers`: daftar anggota squad.
- `squadLeader`: anggota yang berperan sebagai pemimpin.
- `attackSlots`: slot atau kesempatan serangan yang tersedia.

Keunggulan utama **shared blackboard** adalah setiap agent membaca data yang sama, tetapi tetap dapat memiliki keputusan lokal. Misalnya, `Enemy A` dapat melihat `sharedTarget` dan memilih jalur pendekatan, sementara `Enemy B` melihat `assignedCoverPoints` lalu memilih cover yang belum digunakan. Dengan cara ini, squad tetap terkoordinasi tanpa membuat semua agent melakukan aksi yang persis sama.

Struktur pada slide menunjukkan hubungan antara blackboard dan anggota squad:

```text
SquadBlackboard
    ↑
Enemy A
Enemy B
Enemy C
```

Diagram ini berarti `Enemy A`, `Enemy B`, dan `Enemy C` terhubung ke satu `SquadBlackboard` yang sama. Mereka tidak perlu menyimpan informasi penting secara terpisah, karena konteks squad tersedia di satu tempat. Hasil yang diharapkan adalah perilaku squad lebih rapi, target tidak selalu diserang dari arah yang sama, dan penggunaan cover tidak saling bertabrakan.

Sebelum lanjut ke pembagian peran, mahasiswa perlu memahami bahwa **shared blackboard** bukan pengganti keputusan lokal. Blackboard menyediakan informasi bersama, sedangkan setiap agent tetap menentukan aksi berdasarkan data tersebut dan kondisi individunya.

### Inti yang Harus Ditekankan

- **Shared blackboard** adalah struktur data bersama untuk squad.
- Data seperti `sharedTarget`, `alertLevel`, dan `assignedCoverPoints` membantu koordinasi antar-agent.
- Setiap agent membaca data yang sama, tetapi tetap dapat mengambil keputusan lokal.
- Blackboard mengurangi masalah perilaku yang sama, menumpuk, atau saling menghalangi.

### Transisi ke Slide Berikutnya

Setelah squad memiliki data bersama melalui **shared blackboard**, langkah berikutnya adalah membagi tugas secara lebih jelas. Pada slide berikutnya, kita akan membahas **role assignment**, yaitu cara memberi peran berbeda kepada setiap agent agar squad memiliki pembagian tugas yang lebih efektif.

---

## Slide 043 - Role Assignment

### Narasi

Pada tahap ini, kita membahas **role assignment** untuk agent dalam satu squad. Intinya, setiap agent dapat diberi peran yang berbeda, sehingga perilaku mereka tidak lagi seragam.

```text
Leader
Attacker
Flanker
Support
Guard
Scout
```

Role ini menggambarkan tugas utama agent. `Leader` dapat menjadi acuan kelompok, `Attacker` fokus menyerang, `Flanker` mencari posisi menyamping, `Support` membantu, `Guard` menjaga, dan `Scout` mengamati area.

Untuk praktikum sederhana, cukup gunakan tiga role:

```text
Attacker
Flanker
CoverAgent
```

Pembagian ini sudah cukup untuk menunjukkan perbedaan perilaku. `Attacker` bergerak ke target, `Flanker` mencari posisi menyamping, dan `CoverAgent` menjaga posisi aman sambil menembak.

Tanpa role, semua agent cenderung membaca situasi yang sama dan mengambil aksi yang sama. Akibatnya, mereka bisa mengejar target yang sama, menempati posisi yang sama, atau menembak dari sudut yang sama.

Dengan role, setiap agent tetap dapat membaca data bersama, tetapi keputusan lokalnya dibatasi oleh tugasnya. Dalam implementasi sederhana, role dapat disimpan sebagai variabel `role` pada agent, lalu dibaca saat memilih aksi.

Sebelum lanjut, mahasiswa perlu memahami bahwa role bukan pengganti **decision making** atau mekanisme perilaku dasar. Role adalah label tugas yang memengaruhi pilihan aksi, sementara eksekusi perilaku tetap dilakukan oleh sistem agent.

### Inti yang Harus Ditekankan

- **Role assignment** membuat agent dalam squad memiliki tugas yang berbeda.
- Role membantu mencegah semua agent melakukan aksi yang sama.
- Untuk praktikum sederhana, `Attacker`, `Flanker`, dan `CoverAgent` sudah cukup.
- Role memengaruhi keputusan lokal agent, tetapi tidak menggantikan mekanisme perilaku dasar.

### Transisi ke Slide Berikutnya

Selanjutnya, kita akan melihat contoh pembagian role sederhana pada beberapa agent, serta cara menentukan role secara manual atau otomatis.

---

## Slide 044 - Role Assignment Sederhana

### Narasi

Pada slide ini kita melihat contoh sederhana dari **role assignment** pada beberapa enemy. Tujuannya bukan hanya memberi nama, tetapi membagi tanggung jawab agar kelompok NPC tidak bergerak dengan cara yang sama.

```text
Enemy 1 → Attacker
Enemy 2 → Flanker Left
Enemy 3 → Flanker Right
Enemy 4 → Cover Shooter
```

Contoh di atas menunjukkan pembagian tugas yang sederhana. `Enemy 1` berperan sebagai `Attacker`, yaitu agent yang lebih fokus menyerang target. `Enemy 2` dan `Enemy 3` menjadi `Flanker Left` dan `Flanker Right`, sehingga mereka dapat datang dari sisi kiri dan kanan. `Enemy 4` menjadi `Cover Shooter`, yaitu agent yang memberi tekanan dari posisi yang lebih aman.

Pembagian seperti ini penting karena tanpa role, semua agent cenderung melakukan aksi yang sama, misalnya hanya mengejar target. Hasilnya, perilaku kelompok NPC terasa monoton dan mudah diprediksi. Dengan role, setiap agent memiliki tujuan yang sedikit berbeda, sehingga serangan terlihat lebih terkoordinasi.

Role dapat ditentukan dengan beberapa cara:

- **manual dari Inspector**, yaitu developer memilih role untuk setiap enemy secara langsung;
- **otomatis saat game mulai**, misalnya berdasarkan urutan spawn atau aturan sederhana;
- **berdasarkan jarak**, misalnya agent yang dekat dengan target mendapat role yang lebih agresif;
- **berdasarkan health**, misalnya kondisi agent digunakan sebagai kriteria tambahan;
- **berdasarkan weapon type**, misalnya senjata jarak jauh lebih cocok untuk role penembak cover.

Untuk praktikum, cara **manual dari Inspector** biasanya paling mudah. Mahasiswa dapat langsung melihat efek role pada perilaku enemy tanpa harus membangun logika penentuan role terlebih dahulu. Cara otomatis tetap dapat dikembangkan, tetapi untuk tahap awal, stabilitas dan kejelasan lebih penting.

Dalam implementasi sederhana, role biasanya disimpan sebagai variabel pada komponen agent, misalnya `role`. Nilai `role` ini kemudian dapat dibaca oleh sistem perilaku NPC untuk memilih aksi yang sesuai. Dengan demikian, role menjadi jembatan antara desain karakter dan perilaku yang muncul di dalam game.

### Inti yang Harus Ditekankan

- **Role assignment** membuat banyak agent berperilaku seperti tim, bukan hanya kumpulan individu yang sama.
- Contoh `Attacker`, `Flanker Left`, `Flanker Right`, dan `Cover Shooter` menunjukkan koordinasi sederhana yang mudah dipahami.
- Untuk praktikum, penentuan role **manual dari Inspector** adalah pilihan paling praktis karena mudah diuji dan tidak menambah kompleksitas.
- Kriteria seperti jarak, health, dan weapon type dapat menjadi dasar pengembangan role otomatis di tahap berikutnya.

### Transisi ke Slide Berikutnya

Setelah setiap enemy memiliki role, langkah berikutnya adalah menentukan posisi di mana enemy tersebut harus bergerak atau berdiri. Di slide berikutnya, kita akan membahas **Attack Slot** sebagai posisi taktis sederhana di sekitar target.

---

## Slide 045 - Attack Slot

### Narasi

**Attack slot** adalah posisi virtual di sekitar target yang dapat ditempati oleh musuh. Intuisinya sederhana: jika semua musuh bergerak langsung ke `player`, mereka akan menumpuk di satu titik. Dengan slot, setiap musuh memiliki titik tujuan yang berbeda, sehingga formasi serangan menjadi lebih rapi.

Slide menampilkan empat slot di sekitar `player`:

```text
        Slot 1
          ●

Slot 2 ● Player ● Slot 3

          ●
        Slot 4
```

Dalam diagram ini, `player` berada di tengah, sedangkan `Slot 1`, `Slot 2`, `Slot 3`, dan `Slot 4` mewakili posisi taktis di sekelilingnya. Posisi ini dapat dianggap sebagai **tactical position sederhana**, yaitu titik yang diinginkan oleh agent sebelum atau saat menyerang.

Manfaat utama attack slot adalah:

- musuh tidak menumpuk di satu titik,
- serangan terlihat lebih terkoordinasi,
- `player` dapat dikepung dari beberapa arah.

Secara perilaku, attack slot memberi musuh tujuan spasial yang jelas. Setelah sebuah slot dipilih, agent dapat bergerak ke titik tersebut menggunakan pathfinding atau steering, lalu melakukan aksi menyerang dari posisi yang lebih aman atau lebih efektif.

Yang perlu dipahami sebelum lanjut: attack slot baru menjawab **di mana** musuh ingin berada. Belum menjawab **bagaimana** memastikan dua musuh tidak memilih slot yang sama.

### Inti yang Harus Ditekankan

- **Attack slot** adalah titik taktis di sekitar target yang digunakan untuk mengatur posisi musuh.
- Slot membantu mencegah tumpukan musuh dan membuat serangan terlihat lebih terkoordinasi.
- Slot adalah posisi yang diinginkan, bukan jaminan kepemilikan; koordinasi antar-agent masih perlu aturan tambahan.

### Transisi ke Slide Berikutnya

Setelah memahami bahwa slot adalah posisi yang diinginkan, masalah berikutnya adalah bagaimana memastikan dua musuh tidak memilih slot yang sama. Pada slide berikutnya, kita akan membahas **Slot Reservation**.

---

## Slide 046 - Slot Reservation

### Narasi

Setelah kita memahami **attack slot**, muncul masalah praktis yang sering terjadi dalam perilaku NPC: beberapa enemy dapat memilih posisi yang sama pada saat yang bersamaan. Jika tidak dikendalikan, hasil akhirnya adalah enemy menumpuk di satu titik, serangan menjadi tidak rapi, dan player tidak benar-benar dikepung.

Untuk mengatasi hal ini, kita memperkenalkan **slot reservation**. Intinya, sebuah slot tidak hanya dianggap “kosong” atau “terisi”, tetapi juga dapat **dipesan** oleh satu agent terlebih dahulu. Dengan cara ini, agent lain tahu bahwa slot tersebut sedang dalam proses diambil, meskipun agent yang memesan belum sampai ke posisinya.

Data yang dibutuhkan cukup sederhana:

```text
slot.isReserved
slot.reservedBy
```

`slot.isReserved` menandakan apakah slot sedang dipesan atau tidak.  
`slot.reservedBy` menyimpan identitas agent yang memesan slot tersebut, misalnya `enemy_1`, `enemy_2`, atau `agent_id`.

Aturan dasarnya adalah:

```text
Jika slot kosong:
    agent boleh memilih slot

Jika slot sudah reserved:
    agent cari slot lain
```

Secara eksekusi, alurnya bisa dipahami seperti ini:

1. Agent mencari daftar **attack slot** yang valid di sekitar target.
2. Agent memeriksa status setiap slot.
3. Jika `slot.isReserved` bernilai `false`, agent boleh memilih slot tersebut.
4. Agent kemudian menandai slot sebagai reserved dan mengisi `slot.reservedBy` dengan identitas dirinya.
5. Jika `slot.isReserved` bernilai `true`, agent melewatkan slot itu dan memilih slot lain.

Konsep ini mirip dengan **occupied cover**. Dalam cover, sebuah posisi perlindungan tidak bisa dipakai oleh banyak agent sekaligus. Begitu juga di sini, satu **tactical position** sebaiknya hanya dimiliki oleh satu agent pada satu waktu.

Manfaatnya bukan hanya visual. Dengan reservation, perilaku kelompok enemy menjadi lebih stabil: tidak ada dua agent yang berebut posisi yang sama, formasi serangan lebih tersebar, dan keputusan tiap agent menjadi lebih mudah diprediksi. Hal ini juga membantu saat debugging, karena kita bisa melihat slot mana yang sudah diklaim dan oleh siapa.

Sebelum lanjut, mahasiswa perlu memahami bahwa **reservation** adalah bentuk sederhana dari **resource ownership** dalam game. Agent tidak hanya bereaksi terhadap posisi, tetapi juga terhadap status kepemilikan posisi tersebut.

### Inti yang Harus Ditekankan

- **Slot reservation** mencegah dua enemy memilih attack slot yang sama.
- Status slot perlu disimpan melalui `slot.isReserved` dan `slot.reservedBy`.
- Agent harus memeriksa status slot sebelum memilih posisi.
- Konsep ini mirip dengan **occupied cover**, yaitu satu posisi taktis hanya boleh dimiliki satu agent.
- Reservation membuat formasi enemy lebih rapi, terkoordinasi, dan mudah di-debug.

### Transisi ke Slide Berikutnya

Setelah posisi taktis dapat diklaim oleh masing-masing enemy, langkah berikutnya adalah membuat kelompok enemy terasa saling berkomunikasi. Untuk itu, kita akan masuk ke konsep **group alert**, di mana satu enemy yang melihat player dapat memicu respons dari enemy lain.

---

## Slide 047 - Group Alert

### Narasi

Pada slide ini kita membahas **Group Alert**, yaitu mekanisme yang membuat satu enemy dapat memberi tahu enemy lain dalam satu kelompok.

Intuisi praktisnya sederhana: dalam game, NPC tidak seharusnya selalu berperilaku seperti individu yang terpisah. Jika satu enemy melihat `player`, enemy lain dalam squad juga sebaiknya bereaksi, meskipun mereka tidak melihat `player` secara langsung.

```text
Enemy A melihat player
        ↓
Squad alert = Combat
        ↓
Enemy B dan C ikut bergerak ke posisi taktis
```

Alur di atas menunjukkan tiga tahap penting. Pertama, `Enemy A` mendeteksi `player`. Kedua, status squad berubah menjadi `Combat`. Ketiga, `Enemy B` dan `Enemy C` ikut bereaksi dengan bergerak ke `posisi taktis`.

Perbedaannya bisa dilihat dari dua kondisi berikut:

- **Tanpa group alert**: hanya enemy yang melihat `player` yang bereaksi.
- **Dengan group alert**: seluruh squad terasa saling berkomunikasi dan bergerak sebagai satu kelompok.

Yang perlu dipahami mahasiswa adalah bahwa **group alert** mengubah deteksi individu menjadi respons kolektif. Mekanisme ini penting agar squad NPC terasa lebih koheren, lebih taktis, dan tidak hanya bereaksi secara acak.

### Inti yang Harus Ditekankan

- **Group alert** membuat satu deteksi dari satu agent memengaruhi seluruh squad.
- Status bersama seperti `squad alert = Combat` menentukan perilaku kolektif NPC.
- Tanpa group alert, squad terlihat tidak saling berkomunikasi.
- Dengan group alert, squad terasa lebih taktis dan responsif terhadap `player`.

### Transisi ke Slide Berikutnya

Setelah memahami efek dari group alert, kita akan lanjut ke slide berikutnya untuk melihat bagaimana komunikasi antar-agent dapat dibuat secara lebih eksplisit.

---

## Slide 048 - Communication Event

### Narasi

Pada slide ini kita masuk ke mekanisme teknis dari group alert: bagaimana satu agent menyampaikan informasi ke agent lain. Intuisinya, komunikasi antar NPC bisa dibayangkan seperti pesan radio singkat: “player terlihat di sini”, “butuh backup”, “target hilang”, atau “cover sudah dipakai”. Pesan ini tidak harus berupa percakapan visual, tetapi berupa **event** yang bisa diproses oleh sistem keputusan.

Event penting karena membuat agent tidak perlu saling memeriksa satu per satu secara terus-menerus. Agent yang melihat player cukup memicu event, lalu sistem atau agent lain yang tertarik dapat merespons. Pola ini membantu perilaku kelompok terasa lebih koheren, terutama ketika beberapa enemy harus bergerak ke posisi taktis, menjaga jarak, atau mencari cover.

Contoh event yang bisa digunakan antara lain:

- `OnPlayerSpotted(playerPosition)`
- `OnNeedBackup()`
- `OnTargetLost(lastKnownPosition)`
- `OnCoverOccupied(coverPoint)`

Setiap event membawa data minimal yang dibutuhkan penerima. `OnPlayerSpotted` membawa posisi player, `OnTargetLost` membawa `lastKnownPosition`, dan `OnCoverOccupied` membawa `coverPoint`. Dengan data ini, agent lain dapat memperbarui target, memilih jalur, atau menghindari posisi yang sudah digunakan.

Dalam praktikum sederhana, komunikasi tidak harus langsung memakai event system yang kompleks. Bisa dibuat dengan method langsung:

```csharp
squadManager.ReportPlayerSeen(playerPosition);
```

Cara ini mudah dipahami karena satu agent memanggil fungsi pada objek pengatur kelompok. Namun, cara ini mulai kurang fleksibel jika jumlah agent bertambah atau jika kita ingin agent lain bisa mendengarkan laporan tanpa mengetahui siapa yang mengirim.

Alternatif lain adalah menggunakan shared data:

```csharp
squadBlackboard.lastKnownPlayerPosition = player.position;
```

Pendekatan ini mirip **blackboard**, yaitu tempat data bersama yang bisa dibaca dan ditulis oleh beberapa agent. Agent yang melihat player menulis posisi terakhir, lalu agent lain membaca data tersebut saat membuat keputusan. Cara ini berguna untuk koordinasi dasar, tetapi perlu hati-hati agar data tidak saling menimpa tanpa aturan.

Yang harus dipahami mahasiswa sebelum lanjut adalah bahwa komunikasi antar-agent adalah lapisan koordinasi. Event atau shared data memungkinkan NPC tidak lagi bereaksi secara isolasi, tetapi bisa membentuk perilaku kelompok. Pada tahap ini, fokusnya adalah menyampaikan informasi penting: posisi player, kebutuhan backup, target hilang, dan status cover.

### Inti yang Harus Ditekankan

- **Communication event** adalah cara agent menyampaikan informasi penting ke agent lain tanpa harus saling memeriksa secara langsung.
- Event seperti `OnPlayerSpotted`, `OnNeedBackup`, `OnTargetLost`, dan `OnCoverOccupied` membawa data yang dibutuhkan untuk keputusan berikutnya.
- Implementasi sederhana bisa memakai method langsung atau shared data, tetapi event system lebih fleksibel untuk kelompok yang lebih besar.
- Shared data seperti `squadBlackboard.lastKnownPlayerPosition` membantu agent membaca kondisi kelompok, tetapi perlu dikelola agar konsisten.

### Transisi ke Slide Berikutnya

Setelah kita memahami bagaimana informasi bisa dikirim antar-agent, langkah berikutnya adalah melihat siapa yang mengelola data kelompok tersebut. Pada slide berikutnya, kita akan membahas **Squad Manager** sebagai objek yang menyimpan member, target bersama, alert level, dan laporan dari agent.

---

## Slide 049 - Squad Manager

### Narasi

**Squad Manager** adalah objek yang berfungsi sebagai pusat data untuk sekelompok agent dalam game. Dalam skenario bertempur, beberapa enemy tidak cukup hanya bergerak berdasarkan informasi pribadinya. Mereka perlu berbagi informasi, misalnya posisi target terakhir, tingkat kewaspadaan, atau cover mana yang sudah digunakan.

Tugas utama **Squad Manager** adalah mengelola data kelompok, bukan mengendalikan semua detail perilaku setiap agent. Secara konsep, ia menyimpan beberapa hal penting:

- daftar member squad,
- **shared target** atau target bersama,
- **alert level** atau tingkat kewaspadaan kelompok,
- pembagian **role** antar-agent,
- **cover/slot reservation** untuk menghindari beberapa agent memilih cover yang sama,
- penerimaan laporan dari agent, misalnya posisi musuh terakhir atau kebutuhan bantuan.

Struktur logisnya dapat dibayangkan seperti berikut:

```text
SquadManager
├── Enemy A
├── Enemy B
└── Enemy C
```

Dalam konteks Unity, `SquadManager` dapat menjadi GameObject atau komponen yang memegang referensi ke beberapa enemy agent. Struktur ini menunjukkan bahwa `SquadManager` berada di atas sebagai koordinator, sementara `Enemy A`, `Enemy B`, dan `Enemy C` adalah anggota kelompok yang dapat melaporkan keadaan dan membaca data bersama.

Poin penting yang perlu dipahami adalah batas tanggung jawabnya. **Squad Manager** tidak harus menentukan setiap langkah kecil dari setiap enemy. Ia cukup menyediakan data bersama dan aturan koordinasi dasar. Misalnya, ia dapat mencatat bahwa satu cover sudah dipakai, sehingga enemy lain tidak memilih cover yang sama. Namun, keputusan lokal seperti kapan mundur, kapan menyerang, atau bagaimana bergerak menuju posisi tetap dapat dilakukan oleh masing-masing agent.

Secara praktis, keberadaan **Squad Manager** membuat perilaku kelompok terasa lebih rapi dan meyakinkan. Tanpa objek seperti ini, beberapa enemy mungkin akan bergerak ke cover yang sama, kehilangan informasi posisi target, atau tidak memiliki pembagian peran yang jelas. Dengan data bersama, kelompok dapat menunjukkan koordinasi sederhana, misalnya satu agent menjaga sisi kiri, satu agent mencari posisi lebih aman, dan satu agent tetap mengawasi target terakhir.

Sebelum lanjut, mahasiswa perlu memahami bahwa di sini terjadi pemisahan antara **data kelompok** dan **keputusan lokal**. `SquadManager` menyimpan informasi yang dimiliki bersama, sedangkan agent tetap memiliki perilaku individual. Pemahaman ini penting karena nanti kita akan membedakan keputusan yang diambil oleh satu agent dengan keputusan yang mempertimbangkan seluruh squad.

### Inti yang Harus Ditekankan

- **Squad Manager** adalah pusat data kelompok, bukan pengendali semua detail perilaku agent.
- Ia menyimpan informasi bersama seperti member, **shared target**, **alert level**, **role**, dan **cover/slot reservation**.
- Agent tetap dapat mengambil keputusan lokal, tetapi menggunakan data bersama dari `SquadManager` agar koordinasi kelompok lebih rapi.

### Transisi ke Slide Berikutnya

Setelah memahami peran `SquadManager` sebagai penyimpan data bersama, langkah berikutnya adalah membandingkan keputusan yang diambil oleh satu agent dengan keputusan yang mempertimbangkan seluruh squad.

---

## Slide 050 - Local Decision vs Group Decision

### Narasi

Setelah **Squad Manager** menyimpan data kelompok, langkah berikutnya adalah memahami di mana keputusan diambil. Dalam sistem taktis, keputusan dapat bersifat **Local Decision** atau **Group Decision**. Perbedaan ini menentukan apakah setiap agen bertindak berdasarkan informasi pribadinya, atau berdasarkan rencana bersama yang dikelola oleh kelompok.

**Local Decision** berarti setiap `enemy` atau `agent` mengambil keputusan sendiri. Keputusan ini biasanya didasarkan pada sensor lokal, jarak, ancaman, dan kondisi pribadi agen.

```text
Enemy memilih cover terdekat untuk dirinya sendiri.
```

Keputusan lokal mudah diimplementasikan dan cukup cepat karena tidak menunggu data dari pihak lain. Namun, jika banyak agen menggunakan logika yang sama, hasilnya bisa saling bertabrakan: beberapa agen memilih `cover` yang sama, bergerak ke posisi yang sama, atau meninggalkan celah taktis.

**Group Decision** berarti keputusan mempertimbangkan keadaan seluruh `squad`. Di sini, `SquadManager` dapat menyimpan `shared target`, `alert level`, `role`, dan daftar `cover` yang masih tersedia.

```text
Squad membagi cover agar tidak dipakai bersamaan.
```

Dengan keputusan kelompok, agen tidak lagi hanya bertanya, “cover mana yang dekat untuk saya?”, tetapi juga, “cover mana yang masih kosong dan sesuai dengan peran saya?”. Pendekatan ini menghasilkan koordinasi yang lebih rapi, tetapi membutuhkan mekanisme berbagi data yang jelas.

Dalam praktik, keduanya sering digabungkan. `Agent` tetap memiliki perilaku lokal untuk reaksi cepat, misalnya menghindari tembakan atau memilih jalur terdekat. Sementara itu, `SquadManager` mengatur data bersama, misalnya cadangan `cover`, pembagian `role`, dan target yang sedang dikejar.

```text
Agent: saya butuh cover.
SquadManager: cover A sudah dipakai, gunakan cover B.
```

Model hybrid ini penting karena sistem taktis yang baik membutuhkan dua hal sekaligus: respons individual yang cepat dan koordinasi kelompok yang konsisten.

Sebelum lanjut, mahasiswa perlu memahami bahwa **Local Decision** dan **Group Decision** bukan pilihan yang saling meniadakan. Local decision memberi otonomi pada agen, sedangkan group decision memberi struktur pada kelompok. Kesalahan umum adalah membuat semua keputusan terpusat sehingga sistem menjadi lambat, atau membuat semua keputusan lokal sehingga perilaku NPC terlihat kacau.

### Inti yang Harus Ditekankan

- **Local Decision** adalah keputusan per agen berdasarkan informasi lokal, seperti jarak, ancaman, dan kebutuhan pribadi.
- **Group Decision** adalah keputusan berbasis `squad` yang mempertimbangkan `role`, `shared target`, `alert level`, dan sumber daya bersama seperti `cover`.
- Implementasi yang baik biasanya **hybrid**: agen tetap bereaksi secara lokal, tetapi `SquadManager` mengatur alokasi dan koordinasi kelompok.
- Tanpa koordinasi, keputusan lokal dapat menyebabkan konflik posisi, duplikasi peran, atau perilaku NPC yang tidak natural.

### Transisi ke Slide Berikutnya

Setelah memahami siapa yang mengambil keputusan, langkah berikutnya adalah melihat bagaimana keputusan taktis tersebut dieksekusi melalui struktur perilaku, yaitu integrasi dengan Behavior Tree.

---

## Slide 051 - Integrasi dengan Behavior Tree

### Narasi

Pada slide ini, kita melihat bagaimana **Behavior Tree** dapat menjadi pengatur aksi untuk agent taktis. Data taktis seperti posisi cover, kondisi tertembak, line of sight, dan peran squad tidak cukup hanya dihitung; data itu perlu diubah menjadi keputusan aksi yang konsisten. **Behavior Tree** membantu mengorganisasi keputusan tersebut menjadi struktur cabang yang mudah dibaca dan mudah diuji.

Intuisi praktisnya sederhana: agent tidak perlu mengevaluasi semua kemungkinan sekaligus. Ia cukup mengecek kondisi dari prioritas tertinggi ke prioritas terendah. Jika kondisi untuk satu aksi terpenuhi, agent menjalankan aksi itu. Jika tidak terpenuhi, ia mencoba cabang berikutnya.

```text
Root
 └─ Selector
     ├─ Sequence: Take Cover
     │   ├─ Is Under Fire?
     │   ├─ Has Valid Cover?
     │   └─ Move To Cover
     │
     ├─ Sequence: Attack
     │   ├─ Has Line Of Sight?
     │   └─ Shoot Target
     │
     ├─ Sequence: Flank
     │   ├─ Role Is Flanker?
     │   └─ Move To Flank Position
     │
     └─ Patrol
```

Struktur di atas menunjukkan bahwa `Root` memiliki satu `Selector`. `Selector` mengevaluasi anak-anaknya dari atas ke bawah. Setiap `Sequence` menjalankan anak-anaknya secara berurutan. Jika satu kondisi gagal, seluruh `Sequence` gagal dan `Selector` melanjutkan ke cabang berikutnya.

Urutan eksekusinya dapat dipahami sebagai berikut:

1. `Root` memanggil `Selector`.
2. `Selector` mencoba `Sequence: Take Cover`.
   - Jika `Is Under Fire?` benar dan `Has Valid Cover?` benar, agent menjalankan `Move To Cover`.
   - Jika salah satu kondisi gagal, agent tidak mengambil cover dan mencoba cabang berikutnya.
3. `Selector` mencoba `Sequence: Attack`.
   - Jika `Has Line Of Sight?` benar, agent menjalankan `Shoot Target`.
   - Jika tidak ada line of sight, agent tidak menembak dan mencoba cabang berikutnya.
4. `Selector` mencoba `Sequence: Flank`.
   - Jika `Role Is Flanker?` benar, agent menjalankan `Move To Flank Position`.
   - Jika peran agent bukan flanker, cabang ini dilewati.
5. Jika semua cabang sebelumnya gagal, agent menjalankan `Patrol` sebagai perilaku dasar.

Dari sisi input, node-node kondisi membaca data taktis yang sudah tersedia pada agent. Data tersebut dapat berupa hasil persepsi lokal, hasil perhitungan squad, atau data lingkungan. Prosesnya adalah pengecekan kondisi dan pemilihan cabang. Outputnya adalah satu aksi yang dipilih pada tick tersebut, misalnya `Move To Cover`, `Shoot Target`, `Move To Flank Position`, atau `Patrol`.

Poin penting yang perlu dipahami mahasiswa adalah bahwa **Behavior Tree** bukan sumber data taktis. Ia tidak menghitung cover mana yang paling aman, tidak menghitung jarak tembakan, dan tidak menentukan skor prioritas secara numerik. Peran utamanya adalah mengatur urutan keputusan: kondisi apa yang dicek, aksi apa yang dijalankan, dan bagaimana fallback jika kondisi tidak terpenuhi.

Dengan struktur ini, perilaku agent menjadi lebih mudah dikendalikan. Desainer dapat memprioritaskan `Take Cover` di atas `Attack`, atau sebaliknya, hanya dengan mengubah urutan cabang pada `Selector`. Hal ini membuat perilaku taktis lebih mudah diuji, lebih mudah dibaca, dan lebih mudah disesuaikan dengan kebutuhan game.

### Inti yang Harus Ditekankan

- **Behavior Tree** berfungsi sebagai pengatur aksi taktis, bukan sebagai penghitung data taktis.
- `Selector` memilih cabang berdasarkan prioritas, sedangkan `Sequence` memastikan semua kondisi dalam satu aksi terpenuhi.
- Node kondisi seperti `Is Under Fire?`, `Has Valid Cover?`, `Has Line Of Sight?`, dan `Role Is Flanker?` membaca data taktis yang sudah tersedia.
- `Patrol` berperan sebagai fallback ketika tidak ada aksi taktis lain yang dapat dijalankan.
- Urutan cabang menentukan prioritas perilaku agent, sehingga perubahan urutan dapat mengubah karakter agent secara signifikan.

### Transisi ke Slide Berikutnya

Selanjutnya, kita akan melihat pendekatan lain di mana aksi taktis tidak dipilih hanya berdasarkan urutan prioritas, tetapi berdasarkan skor yang dihitung dari kondisi agent dan lingkungan. Pendekatan ini memungkinkan agent memilih aksi yang paling masuk akal secara dinamis.

---

## Slide 052 - Integrasi dengan Utility AI

### Narasi

Pada slide ini kita melihat bagaimana **Utility AI** dapat digunakan untuk mendukung **Tactical AI**. Ide utamanya adalah agen tidak hanya memilih satu aturan yang paling prioritas, tetapi menilai beberapa kemungkinan aksi secara bersamaan berdasarkan kondisi saat ini. Dengan cara ini, perilaku agen menjadi lebih adaptif karena keputusan bergantung pada situasi lingkungan, bukan hanya pada urutan aturan yang tetap.

Aksi taktis yang dapat dinilai antara lain:

- `Attack`
- `Take Cover`
- `Flank`
- `Retreat`
- `Call Backup`
- `Patrol`

Setiap aksi tersebut tidak langsung dijalankan. Sistem terlebih dahulu menghitung **skor** untuk masing-masing aksi. Skor ini menunjukkan seberapa masuk akal atau seberapa tepat aksi tersebut dilakukan pada kondisi tertentu.

Contoh perhitungan skornya adalah sebagai berikut:

```text
TakeCoverScore =
lowHealthScore × exposedScore × coverAvailableScore
```

```text
AttackScore =
lineOfSightScore × distanceScore × confidenceScore
```

Pada rumus `TakeCoverScore`, agen akan cenderung memilih `Take Cover` jika beberapa kondisi mendukung secara bersamaan. Misalnya, kesehatan agen rendah, agen sedang terekspos, dan tersedia tempat berlindung. Jika salah satu faktor tersebut tidak mendukung, skor `Take Cover` akan menurun.

Sementara itu, `AttackScore` bergantung pada apakah target terlihat, jarak yang cukup ideal, dan tingkat keyakinan agen untuk menyerang. Jika target tidak terlihat atau jarak terlalu jauh, skor `Attack` akan rendah meskipun agen masih dalam kondisi sehat.

Proses pengambilan keputusan secara umum dapat dipahami sebagai berikut:

1. Sistem membaca kondisi agen dan lingkungan.
2. Setiap aksi taktis diberi skor berdasarkan kondisi tersebut.
3. Skor dari semua aksi dibandingkan.
4. Aksi dengan skor tertinggi dipilih sebagai perilaku yang paling masuk akal.
5. Aksi terpilih kemudian dieksekusi oleh sistem perilaku agen.

Pendekatan ini membantu mahasiswa memahami bahwa **Utility AI** tidak hanya menghasilkan nilai, tetapi juga menjadi dasar perbandingan antar aksi. Hasil yang diharapkan adalah agen dapat berpindah perilaku secara lebih halus dan kontekstual, misalnya dari `Patrol` ke `Take Cover` saat terancam, atau dari `Take Cover` ke `Attack` saat kondisi menjadi lebih aman.

Sebelum lanjut, hal penting yang perlu dipahami adalah bahwa skor aksi bersifat relatif terhadap kondisi saat itu. Tidak ada satu aksi yang selalu benar secara mutlak. Yang penting adalah bagaimana sistem menilai kondisi, menghitung skor, lalu memilih aksi yang paling sesuai.

### Inti yang Harus Ditekankan

- **Utility AI** menilai beberapa aksi taktis berdasarkan kondisi agen dan lingkungan.
- Skor aksi dihitung dari faktor-faktor seperti kesehatan, eksposur, jarak, line of sight, dan ketersediaan cover.
- Aksi terpilih adalah yang memiliki skor tertinggi, sehingga perilaku agen menjadi lebih kontekstual dan adaptif.

### Transisi ke Slide Berikutnya

Setelah memahami cara skor dihitung, kita akan melanjutkan ke contoh nilai skor yang lebih konkret untuk melihat bagaimana aksi terpilih ditentukan secara langsung.

---

## Slide 053 - Tactical Utility Example

### Narasi

Pada slide ini kita menguji **utility scoring** dalam satu situasi taktis yang sederhana. Tujuannya bukan hanya memilih aksi, tetapi menunjukkan bagaimana kondisi dunia diterjemahkan menjadi nilai kelayakan.

```text
Health = rendah
Player terlihat = ya
Cover tersedia = ya
Jarak = sedang
```

Kondisi ini menggambarkan agent yang sedang dalam tekanan. `Health = rendah` membuat kebutuhan perlindungan meningkat. `Player terlihat = ya` menunjukkan ancaman aktif. `Cover tersedia = ya` membuka opsi perlindungan. `Jarak = sedang` membuat serangan masih mungkin, tetapi tidak lagi menjadi pilihan paling aman.

```text
Attack     = 0.55
Take Cover = 0.88
Flank      = 0.40
Retreat    = 0.70
Patrol     = 0.05
```

Skor di atas menunjukkan derajat kelayakan tiap aksi. `Take Cover` mendapat skor tertinggi karena kombinasi **health rendah**, **terlihat**, dan **cover tersedia** sangat mendukung perlindungan. `Retreat` juga cukup tinggi, tetapi kalah karena cover tersedia lebih tepat daripada mundur tanpa posisi aman. `Attack` masih mungkin karena jarak sedang dan player terlihat, namun tidak cukup kuat untuk mengalahkan kebutuhan bertahan. `Patrol` sangat rendah karena situasi sudah bersifat konfrontatif.

```text
Take Cover
```

Aksi yang dipilih adalah `Take Cover` karena memiliki **skor tertinggi**. Proses ini menghasilkan **decision making** yang jelas: sistem taktis tidak langsung menentukan jalur, tetapi memilih niat perilaku terlebih dahulu.

Intuisi praktisnya adalah utility scoring membantu agent memilih perilaku yang paling masuk akal secara kontekstual. Mahasiswa perlu memahami bahwa skor bukan sekadar angka acak, melainkan hasil dari kondisi dunia. Jika `Health` naik, `Cover tersedia` hilang, atau `Jarak` berubah, urutan skor bisa berubah dan aksi terpilih pun bisa berbeda.

### Inti yang Harus Ditekankan

- **Utility scoring** mengubah kondisi dunia menjadi nilai kelayakan untuk tiap aksi.
- `Take Cover` terpilih karena skornya tertinggi pada kondisi `Health = rendah`, `Player terlihat = ya`, dan `Cover tersedia = ya`.
- Hasil dari tahap ini adalah **pilihan aksi**, bukan pergerakan fisik; pergerakan akan dibahas pada integrasi berikutnya.

### Transisi ke Slide Berikutnya

Setelah `Take Cover` dipilih, langkah berikutnya adalah bagaimana agent benar-benar bergerak ke posisi cover. Slide berikutnya membahas integrasi dengan NavMesh.

---

## Slide 054 - Integrasi dengan NavMesh

### Narasi

Pada slide ini, kita melihat titik temu antara **keputusan taktis** dan **pergerakan NPC**. Modul taktis bertugas memilih posisi yang dianggap menguntungkan, misalnya cover point. Setelah posisi itu dipilih, tugasnya selesai. Yang menjalankan pergerakan adalah sistem **NavMesh**.

Secara intuitif, kita bisa memisahkan dua peran: bagian yang memutuskan **di mana NPC harus berada**, dan bagian yang memastikan NPC benar-benar bisa bergerak ke sana. Pemisahan ini membuat desain lebih rapi karena keputusan taktis tidak perlu memahami detail pergerakan secara langsung.

Contoh alurnya adalah sebagai berikut:

```text
Sistem taktis memilih cover point
        ↓
NavMeshAgent.SetDestination(coverPoint.position)
        ↓
Agent bergerak ke cover
```

Pada potongan kode Unity di bawah, `agent` biasanya merujuk pada komponen `NavMeshAgent`. Variabel `selectedCover` adalah posisi yang sudah dipilih oleh sistem taktis.

```csharp
agent.SetDestination(selectedCover.position);
```

Panggilan `SetDestination` memberi tahu Unity bahwa agent harus bergerak menuju posisi tersebut. Unity kemudian menghitung path di atas NavMesh dan menggerakkan agent secara otomatis.

Yang perlu dipahami mahasiswa adalah bahwa `SetDestination` tidak cukup hanya menerima koordinat sembarang. Koordinat itu harus berada di area yang bisa dilalui. Jika posisi cover berada di luar NavMesh, di dalam dinding, atau di titik yang tidak valid, pergerakan agent bisa gagal atau tidak sesuai harapan.

Karena itu, untuk posisi acak taktis, kita perlu melakukan cek **validitas**. Fungsi `NavMesh.SamplePosition()` digunakan untuk memastikan posisi yang diinginkan benar-benar berada di atas NavMesh. Dengan validasi ini, sistem taktis dapat memilih posisi yang aman dan dapat dieksekusi oleh agent.

Sebelum lanjut, pastikan mahasiswa memahami dua hal: **keputusan posisi** dan **eksekusi pergerakan** adalah dua tahap yang berbeda, dan integrasi keduanya dilakukan melalui `SetDestination` dengan posisi yang valid.

### Inti yang Harus Ditekankan

- **Sistem taktis** memilih posisi, sedangkan **NavMesh** menjalankan pergerakan.
- `agent.SetDestination(...)` adalah titik integrasi antara keputusan posisi dan pergerakan agent.
- Posisi acak atau taktis perlu divalidasi dengan `NavMesh.SamplePosition()` agar berada di atas NavMesh.

### Transisi ke Slide Berikutnya

Selanjutnya, kita akan membahas cara menggunakan `NavMesh.SamplePosition` untuk memastikan posisi yang dipilih benar-benar valid sebelum diberikan ke agent.

---

## Slide 055 - NavMesh.SamplePosition

### Narasi

Pada slide ini kita fokus pada `NavMesh.SamplePosition`, yaitu fungsi di Unity untuk memastikan bahwa posisi yang ingin digunakan agent benar-benar berada di atas **NavMesh** yang valid.

Intuisi praktisnya adalah: agent tidak boleh selalu diberi tujuan sembarangan. Jika posisi berada di luar area yang bisa dilalui, agent bisa gagal bergerak, berhenti di tempat, atau menuju titik yang tidak masuk akal. Karena itu, sebelum posisi taktis dikirim ke `NavMeshAgent`, kita perlu melakukan validasi.

`NavMesh.SamplePosition` mencari titik valid terdekat dari posisi yang diinginkan. Fungsi ini menerima posisi awal, radius pencarian, dan area mask. Jika titik valid ditemukan dalam radius tersebut, fungsi mengembalikan `true` dan mengisi objek `NavMeshHit` dengan data posisi yang valid.

Contoh implementasinya adalah sebagai berikut:

```csharp
NavMeshHit hit;

if (NavMesh.SamplePosition(
        desiredPosition,
        out hit,
        2f,
        NavMesh.AllAreas))
{
    Vector3 validPosition = hit.position;
}
```

Dalam potongan kode ini, `desiredPosition` adalah posisi yang ingin kita gunakan, misalnya posisi flank, flee, atau titik patrol acak. Nilai `2f` adalah radius pencarian dalam satuan dunia, sedangkan `NavMesh.AllAreas` berarti pencarian dilakukan pada semua area NavMesh. Jika kondisi `if` bernilai `true`, gunakan `hit.position` sebagai tujuan yang aman. Jika bernilai `false`, artinya tidak ada titik valid yang ditemukan dan kita perlu memilih titik lain atau memperbesar radius.

Fungsi ini penting untuk beberapa situasi:

- **flank position**, yaitu posisi menyamping untuk menyerang atau menghindari garis pandang langsung;
- **flee destination**, yaitu tujuan saat agent harus mundur atau kabur;
- **tactical point**, yaitu titik strategis yang dipilih berdasarkan kondisi permainan;
- **random patrol point**, yaitu titik patroli acak agar pergerakan agent tidak terlihat kaku.

Tanpa validasi, agent bisa diberi tujuan di luar NavMesh. Akibatnya, pergerakan menjadi tidak stabil dan perilaku taktis yang sudah dipilih sebelumnya tidak bisa dijalankan dengan baik. Perlu diingat bahwa `NavMesh.SamplePosition` bukan pengganti pathfinding; fungsi ini hanya memastikan posisi tujuan valid sebelum agent bergerak.

Sebelum lanjut, mahasiswa perlu memahami bahwa urutan yang benar adalah: pilih posisi taktis, validasi posisi tersebut dengan `NavMesh.SamplePosition`, lalu gunakan `hit.position` sebagai tujuan yang aman untuk pergerakan.

### Inti yang Harus Ditekankan

- `NavMesh.SamplePosition` digunakan untuk mencari **posisi valid** di atas NavMesh.
- Parameter radius, misalnya `2f`, menentukan seberapa jauh Unity boleh mencari titik valid dari posisi yang diinginkan.
- Jika fungsi mengembalikan `true`, gunakan `hit.position` sebagai tujuan yang aman.
- Jika fungsi mengembalikan `false`, posisi yang diinginkan tidak valid dan perlu penanganan cadangan.
- Validasi ini penting untuk flank, flee, tactical point, dan random patrol point.

### Transisi ke Slide Berikutnya

Setelah posisi taktis berhasil divalidasi, langkah berikutnya adalah bagaimana agent benar-benar bergerak menuju titik tersebut. Pada slide berikutnya, kita akan membahas integrasi dengan movement dan steering, termasuk peran `NavMeshAgent`, local avoidance, rotasi, dan animasi.

---

## Slide 056 - Integrasi dengan Movement dan Steering

### Narasi

Pada slide ini, kita beralih dari **pemilihan posisi taktis** ke **eksekusi gerak**. Jika langkah sebelumnya memastikan agent memiliki titik tujuan yang valid, maka langkah ini menjawab pertanyaan praktis: bagaimana agent benar-benar bergerak menuju titik tersebut dan melakukan aksi yang sesuai.

Dalam implementasi Unity-like, komponen utama yang sering digunakan adalah `NavMeshAgent`. Komponen ini menangani **pathfinding global**, yaitu mencari rute di atas NavMesh dari posisi agent ke posisi taktis yang sudah dipilih. Inputnya adalah target position, prosesnya adalah pencarian path dan pembaruan posisi, sedangkan outputnya adalah agent yang bergerak menuju titik tujuan.

Namun, path global saja belum cukup. Di lingkungan game, agent bisa bertemu obstacle dinamis, NPC lain, atau ruang sempit. Di sinilah **steering** atau **local avoidance** berperan. Steering menyesuaikan `velocity` agent secara lokal agar gerakan tetap natural dan tidak menabrak objek di sekitarnya. Dengan kombinasi pathfinding dan steering, perpindahan agent terasa lebih stabil.

Setelah agent bergerak, orientasi tubuh juga harus disesuaikan. Biasanya, agent perlu **menghadap target** sebelum melakukan `attack`, `defend`, atau `aim`. Ini dapat dilakukan dengan memperbarui `transform.rotation` atau menggunakan interpolasi rotasi agar perputaran tidak kaku. Tanpa orientasi yang benar, NPC bisa terlihat bergerak ke arah yang salah meskipun posisinya sudah tepat.

Bagian terakhir dari alur ini adalah **animation** sebagai penanda state. Agent yang sedang bergerak dapat menampilkan `walk` atau `run`, sedangkan agent yang siap menyerang dapat menampilkan `attack`. Pada slide ini, animation cukup dipahami sebagai bagian dari integrasi perilaku; detail parameter dan kontrol animasi akan dibahas pada slide berikutnya.

Alur integrasinya dapat dilihat sebagai berikut:

```text
Tactical Position Selected
        ↓
Navigation
        ↓
Movement
        ↓
Face Target
        ↓
Attack / Defend
```

Alur ini menunjukkan pemisahan tanggung jawab yang penting: **decision layer** memilih posisi taktis, **navigation** mencari rute, **movement** menjalankan perpindahan, **orientation** menyesuaikan arah tubuh, dan **action** mengeksekusi perilaku akhir seperti `attack` atau `defend`.

### Inti yang Harus Ditekankan

- **Posisi taktis** adalah input, sedangkan **movement** adalah eksekusi yang membuat keputusan benar-benar terlihat di scene.
- `NavMeshAgent` menangani **pathfinding global**, steering menangani **local avoidance**, dan rotation memastikan agent **menghadap target** dengan natural.
- Alur yang runtut adalah: pilih posisi taktis, navigasi, bergerak, hadap target, lalu lakukan `attack` atau `defend`.

### Transisi ke Slide Berikutnya

Setelah agent dapat bergerak dan menghadap target dengan benar, perilaku taktis perlu didukung oleh animasi yang sesuai. Pada slide berikutnya, kita akan membahas integrasi dengan Animation.

---

## Slide 057 - Integrasi dengan Animation

### Narasi

Setelah sistem taktis memilih posisi dan movement menjalankan perpindahan, langkah berikutnya adalah membuat perilaku itu terlihat jelas melalui **animasi**. Dalam game, animasi bukan hanya hiasan visual, tetapi cara NPC menunjukkan apa yang sedang ia lakukan.

Contoh animasi yang umum digunakan adalah:

- `idle`
- `walk`
- `run`
- `crouch`
- `aim`
- `shoot`
- `reload`
- `hit`
- `death`

Animasi ini membantu pemain memahami kondisi NPC, misalnya apakah NPC sedang bergerak, bersembunyi, menembak, atau menerima damage.

Dalam Unity, perilaku taktis dapat dikaitkan dengan **Animator** melalui parameter. Sistem keputusan seperti **FSM**, **Behavior Tree**, atau **Utility** dapat mengubah parameter Animator agar animasi yang tampil sesuai dengan kondisi NPC.

Contoh sederhana:

```csharp
animator.SetBool("IsInCover", true);
animator.SetBool("IsMoving", agent.velocity.magnitude > 0.1f);
animator.SetTrigger("Shoot");
```

Pada potongan kode di atas, `animator.SetBool("IsInCover", true)` menandakan NPC sedang berada di posisi cover. Parameter `IsMoving` diisi berdasarkan `agent.velocity.magnitude`, yaitu besarnya kecepatan NPC. Nilai ambang `0.1f` digunakan agar animasi tidak berubah-ubah hanya karena gerakan sangat kecil. Sementara itu, `animator.SetTrigger("Shoot")` memicu animasi menembak sekali, biasanya untuk aksi yang bersifat sementara.

Urutan kerja yang perlu dipahami adalah sebagai berikut:

1. Sistem taktis menentukan kondisi NPC.
2. Kondisi tersebut diubah menjadi parameter Animator.
3. Animator memilih atau transisi ke animasi yang sesuai.
4. NPC menampilkan perilaku yang lebih mudah dibaca oleh pemain.

Untuk praktikum sederhana, animasi tidak harus lengkap. Mahasiswa dapat menggunakan animasi minimal atau placeholder, selama alur parameter dari logika perilaku ke Animator sudah benar. Yang penting adalah memahami bahwa **animasi adalah antarmuka visual dari keputusan perilaku NPC**.

### Inti yang Harus Ditekankan

- **Animasi** membuat perilaku taktis NPC terlihat dan mudah dipahami.
- Parameter Animator seperti `IsInCover`, `IsMoving`, dan `Shoot` menghubungkan logika perilaku dengan tampilan visual.
- `agent.velocity.magnitude > 0.1f` digunakan untuk mendeteksi gerakan yang cukup berarti.
- `SetTrigger` cocok untuk aksi sekali jalan seperti menembak atau reload.
- Pada tahap awal, animasi placeholder sudah cukup selama alur integrasinya benar.

### Transisi ke Slide Berikutnya

Setelah animasi dapat dikaitkan dengan kondisi NPC, langkah berikutnya adalah melihat contoh state taktis sederhana yang sering dipakai untuk membantu debugging, label UI, dan pemilihan mode animasi.

---

## Slide 058 - Tactical AI State Contoh

### Narasi

Pada slide ini kita melihat `state` sederhana untuk perilaku taktis. Meskipun keputusan NPC dapat dibuat dengan **Behavior Tree** atau **Utility**, `state` tetap berguna sebagai label perilaku yang mudah dibaca.

`State` ini tidak harus menjadi satu-satunya mesin keputusan. Ia bisa menjadi representasi tingkat tinggi dari apa yang sedang dilakukan `agent`.

Contoh `state` taktis:

```text
Patrol
Alert
Combat
TakeCover
Attack
Flank
Retreat
Search
```

Makna singkatnya:

- `Patrol`: `agent` bergerak rutin tanpa ancaman aktif.
- `Alert`: `agent` curiga dan mulai mengamati.
- `Combat`: `agent` terlibat pertempuran.
- `TakeCover`: `agent` mencari perlindungan.
- `Attack`: `agent` melakukan serangan.
- `Flank`: `agent` bergerak menyamping untuk posisi lebih aman.
- `Retreat`: `agent` mundur karena kondisi tidak menguntungkan.
- `Search`: `agent` mencari target atau area yang hilang.

`State` ini sangat berguna untuk `debugging`, `UI label`, `animation mode`, dan `behavior monitoring`. Misalnya, saat `agent` bergerak ke cover, kita bisa menampilkan label `TakeCover` di layar atau memilih animasi yang sesuai.

Penting untuk dipahami bahwa **tidak semua keputusan harus murni FSM**. `State` bisa dihasilkan dari hasil evaluasi **Behavior Tree**, **Utility**, atau sistem taktis lainnya. Dengan kata lain, `state` dapat menjadi lapisan observasi, bukan pengganti seluruh arsitektur keputusan.

Dalam implementasi Unity, `state` biasanya disimpan sebagai variabel di komponen `agent`, lalu diperbarui ketika perilaku berubah. Ini memudahkan pengembang melihat kondisi `agent` secara langsung tanpa harus menelusuri seluruh logika keputusan.

### Inti yang Harus Ditekankan

- **State** adalah label perilaku tingkat tinggi yang membantu membaca kondisi `agent`.
- `State` dapat dipakai untuk `debugging`, `UI`, animasi, dan `behavior monitoring`.
- **Behavior Tree** atau **Utility** tetap bisa menjadi mesin keputusan utama.
- `State` tidak harus berarti seluruh sistem menggunakan **FSM** penuh.

### Transisi ke Slide Berikutnya

Setelah memahami `state` sebagai label perilaku, selanjutnya kita akan melihat bagaimana data mengalir dari persepsi hingga aksi taktis.

---

## Slide 059 - Tactical AI Data Flow

### Narasi

Slide ini menunjukkan **alur data taktis** yang menghubungkan apa yang dilihat NPC dengan gerakan dan aksi tempurnya. Alur ini penting karena perilaku taktis tidak muncul dari satu fungsi tunggal, melainkan dari rangkaian komponen yang saling memberi data.

```text
Perception System
    ↓
Memory System
    ↓
Tactical Evaluator
    ↓
Decision System
    ↓
Navigation Target
    ↓
NavMeshAgent
    ↓
Combat Action
    ↓
Squad Manager
```

Baca alur ini dari atas ke bawah sebagai **pipeline**: input lingkungan masuk, diproses, lalu keluar sebagai keputusan dan aksi.

1. `Perception System` mengumpulkan data mentah, seperti posisi musuh, jarak, garis pandang, ancaman, dan status squad.
2. `Memory System` menyimpan informasi penting agar NPC tidak langsung “lupa” ketika target terhalang sesaat.
3. `Tactical Evaluator` menilai opsi taktis, misalnya menyerang, mencari cover, flank, atau mundur.
4. `Decision System` memilih satu perilaku atau state yang paling sesuai berdasarkan hasil evaluasi.
5. `Navigation Target` menentukan titik tujuan, seperti posisi cover, jalur flank, atau titik serang.
6. `NavMeshAgent` mengeksekusi pergerakan di atas `NavMesh`, termasuk pathfinding dan avoidance.
7. `Combat Action` menjalankan aksi tempur, seperti aim, fire, reload, atau animasi serangan.
8. `Squad Manager` mengoordinasikan beberapa agent agar tidak semua NPC melakukan hal yang sama pada target yang sama.

Dalam implementasi Unity, alur ini membantu memisahkan **persepsi**, **memori**, **keputusan**, **navigasi**, dan **aksi**. Jika satu bagian rusak, gejalanya bisa terlihat di bagian lain. Misalnya, `NavMeshAgent` berhenti di titik yang salah bukan karena pathfinding rusak, tetapi karena `Navigation Target` menerima data yang tidak valid.

Setiap frame atau interval tertentu, sistem ini memperbarui data secara bertahap:

1. `Perception System` memperbarui informasi lingkungan.
2. `Memory System` memperbarui data yang relevan.
3. `Tactical Evaluator` dan `Decision System` menghitung perilaku yang dipilih.
4. `Navigation Target` memperbarui tujuan pergerakan.

Penting untuk dipahami bahwa **tidak semua bagian harus dihitung dengan frekuensi yang sama**. Pergerakan bisa lebih sering diperbarui daripada keputusan taktis, tetapi pada slide ini kita fokus pada urutan alur datanya, bukan detail frekuensinya.

### Inti yang Harus Ditekankan

- **Tactical data flow** adalah pipeline dari persepsi, memori, evaluasi, keputusan, navigasi, aksi, hingga koordinasi squad.
- `Memory System` membuat perilaku NPC lebih stabil karena keputusan tidak hanya bergantung pada data sesaat.
- `NavMeshAgent` dan `Combat Action` adalah dua output berbeda: satu mengatur pergerakan, satu mengatur aksi tempur.
- `Squad Manager` penting agar beberapa NPC berperilaku sebagai tim, bukan sebagai agent yang saling meniru.

### Transisi ke Slide Berikutnya

Setelah memahami alur datanya, langkah berikutnya adalah menentukan kapan setiap bagian sebaiknya dihitung, karena tidak semua keputusan taktis perlu diproses setiap frame.

---

## Slide 060 - Decision Interval

### Narasi

Dalam pipeline taktis, ada perbedaan penting antara **update yang harus halus** dan **keputusan yang boleh diskret**. Tidak semua bagian dari perilaku NPC perlu dihitung setiap frame. Jika semua keputusan taktis dievaluasi setiap frame, sistem bisa menjadi boros komputasi dan perilaku NPC menjadi tidak stabil.

Contoh pengaturan interval yang umum adalah sebagai berikut:

```text
Movement update     : setiap frame
Perception update   : 5–10 kali/detik
Tactical decision   : 2–5 kali/detik
Path recalculation  : sesuai kebutuhan
```

`Movement update` biasanya tetap dilakukan setiap frame karena berhubungan langsung dengan pergerakan visual NPC. Komponen seperti `NavMeshAgent` membutuhkan update posisi dan arah yang cukup halus agar NPC tidak terlihat melompat atau bergerak tidak natural.

`Perception update` tidak perlu setiap frame. Sistem persepsi cukup berjalan beberapa kali per detik, misalnya 5–10 kali per detik. Pada tahap ini, NPC memperbarui informasi lingkungan seperti posisi target, jarak, ancaman, atau kondisi sekitar.

`Tactical decision` biasanya lebih jarang lagi, misalnya 2–5 kali per detik. Keputusan taktis mencakup pemilihan aksi, target, posisi cover, atau perubahan perilaku. Jika keputusan ini dihitung terlalu sering, NPC bisa sering mengganti rencana dan terlihat tidak konsisten.

`Path recalculation` dilakukan sesuai kebutuhan, bukan pada interval tetap. Path baru dihitung ketika target berubah, jalur tidak valid, atau NPC perlu menuju posisi baru. Dengan cara ini, sistem navigasi tidak terus-menerus menghitung path yang sebenarnya masih bisa digunakan.

Manfaat utama dari **decision interval** adalah:

- performa lebih baik karena komputasi keputusan taktis tidak dilakukan setiap frame,
- action lebih stabil karena NPC tidak terus-menerus mengganti keputusan,
- perilaku NPC terasa lebih masuk akal karena ada jeda yang wajar sebelum memilih aksi baru.

Sebelum lanjut, mahasiswa perlu memahami bahwa **frekuensi update** adalah bagian dari desain perilaku NPC. Keputusan yang terlalu cepat dihitung bisa membuat NPC terlalu reaktif, sedangkan keputusan yang terlalu lambat bisa membuat NPC terlihat bodoh atau lambat merespons.

### Inti yang Harus Ditekankan

- Tidak semua keputusan taktis perlu dihitung setiap frame.
- `movement update` harus halus, sedangkan `perception update` dan `tactical decision` cukup menggunakan interval.
- Interval yang tepat membuat NPC lebih stabil, lebih hemat komputasi, dan perilakunya lebih konsisten.

### Transisi ke Slide Berikutnya

Setelah memahami kapan keputusan boleh ditunda, langkah berikutnya adalah menentukan kondisi apa yang memaksa NPC untuk mengevaluasi ulang keputusan taktisnya.

---

## Slide 061 - Tactical Re-evaluation

### Narasi

Setelah NPC membuat keputusan taktis, dunia game tidak berhenti. Posisi target, kondisi medan, dan status tim bisa berubah. Karena itu, NPC perlu melakukan **tactical re-evaluation**, yaitu proses memeriksa kembali apakah keputusan yang sedang dijalankan masih masuk akal.

Intuisi praktisnya sederhana: NPC tidak boleh terus-terusan menghitung ulang setiap frame, tetapi juga tidak boleh kaku sampai situasi sudah berubah. Re-evaluasi yang baik membuat NPC terasa responsif, namun tetap stabil.

Beberapa kondisi yang biasanya memicu evaluasi ulang adalah:

- `target` berpindah jauh dari posisi terakhir.
- `cover` yang dipakai tidak lagi aman atau tidak lagi menghalangi ancaman.
- `health` NPC berubah signifikan, misalnya turun drastis.
- `squad member` mati atau keluar dari formasi.
- `player` masuk ke `attack range`.
- `line of sight` berubah, misalnya NPC kehilangan atau mendapatkan pandangan ke target.
- `cover` yang sedang dipakai ditempati `agent` lain.

Masalahnya, jika semua kondisi ini dicek terlalu sering, NPC bisa menjadi tidak stabil. Ia akan sering mengubah arah, sering berhenti, sering pindah cover, dan akhirnya terasa “berpikir” terlalu cepat. Dalam game, perilaku seperti ini justru mengurangi kesan cerdas karena NPC tampak gugup atau tidak konsisten.

Untuk itu, evaluasi ulang perlu dikendalikan dengan beberapa mekanisme:

- `timer`: evaluasi dilakukan pada interval tertentu, bukan setiap frame.
- `threshold`: perubahan harus melewati batas tertentu sebelum dianggap penting.
- `event trigger`: evaluasi dipicu oleh kejadian penting, misalnya terkena damage atau target muncul.
- `minimum action duration`: NPC diberi waktu minimum untuk menyelesaikan aksi sebelum boleh mengganti keputusan.

Dengan kombinasi ini, NPC tetap mampu menyesuaikan diri terhadap perubahan situasi, tetapi tidak terus-menerus membatalkan aksi yang sedang dijalankan. Mahasiswa perlu memahami bahwa kualitas perilaku taktis tidak hanya ditentukan oleh “apa yang dipilih”, tetapi juga oleh “kapan keputusan itu boleh dievaluasi ulang”.

Sebelum lanjut, hal penting yang harus dipahami adalah: re-evaluasi taktis adalah mekanisme pengendalian stabilitas. Tanpa pengendalian, NPC bisa terlalu reaktif; terlalu kaku, NPC bisa terlihat bodoh karena tidak menyesuaikan diri.

### Inti yang Harus Ditekankan

- **Tactical re-evaluation** adalah proses NPC memeriksa kembali keputusan taktisnya ketika kondisi berubah.
- Pemicu evaluasi meliputi perubahan `target`, `cover`, `health`, `squad member`, `attack range`, `line of sight`, dan okupansi `cover`.
- Evaluasi yang terlalu sering membuat NPC tidak stabil, sering berubah pikiran, dan sulit diprediksi.
- Gunakan `timer`, `threshold`, `event trigger`, dan `minimum action duration` untuk menjaga keseimbangan antara responsif dan stabil.

### Transisi ke Slide Berikutnya

Selanjutnya, kita akan melihat contoh konkret bagaimana alur taktis ini bekerja ketika musuh melihat player, menerima damage, lalu memilih dan bergerak ke cover.

---

## Slide 062 - Example: Enemy Takes Cover

### Narasi

Slide ini memperlihatkan contoh perilaku musuh yang mengambil **cover** ketika menghadapi player. Intuisi praktisnya sederhana: musuh tidak selalu bergerak atau menyerang secara langsung; ia perlu mencari posisi yang lebih aman sebelum melanjutkan serangan. Contoh ini membantu mahasiswa melihat bagaimana beberapa komponen perilaku NPC dirangkai menjadi satu alur yang bisa diamati di dalam game.

Alur yang ditampilkan adalah sebagai berikut:

```text
Enemy melihat player
        ↓
Enemy menerima damage
        ↓
Enemy mencari cover valid
        ↓
Enemy memilih cover terdekat
        ↓
Enemy bergerak ke cover
        ↓
Enemy menyerang dari cover
```

Arah alur ini penting karena menunjukkan hubungan antara **input**, **proses**, dan **output**. Input awal berasal dari **perception**, yaitu kemampuan musuh mengenali player. Setelah itu, event `damage` menjadi pemicu perubahan perilaku. Proses utama terjadi pada **cover selection**, di mana musuh menilai posisi mana yang valid dan mana yang paling dekat. Output akhirnya adalah gerakan menuju cover dan aksi menyerang dari posisi tersebut.

Komponen **perception** dan **memory** berperan di bagian awal. `perception` memberi musuh informasi tentang keberadaan player, sedangkan `memory` membantu musuh mempertahankan konteks, misalnya target yang sedang dihadapi dan kondisi yang memicu keputusan. Tanpa memory, musuh bisa kehilangan arah setelah satu frame atau satu event selesai diproses.

**Cover selection** adalah inti dari contoh ini. Musuh tidak cukup hanya bergerak ke titik mana pun; ia harus memilih cover yang **valid** dan **terdekat**. Validitas cover biasanya berkaitan dengan posisi yang melindungi musuh dari serangan player, sedangkan kriteria terdekat membuat perilaku lebih efisien dan mudah diprediksi. Di sini mahasiswa perlu memahami bahwa pemilihan cover bukan sekadar geometri, tetapi juga keputusan perilaku yang memengaruhi rasa aman dan agresivitas NPC.

Gerakan ke cover didukung oleh `NavMeshAgent`. Komponen ini memungkinkan musuh bergerak di atas pathfinding yang tersedia, bukan sekadar mengubah posisi secara manual. Setelah sampai di cover, musuh beralih ke **combat action**, yaitu menyerang dari posisi yang telah dipilih. Dengan urutan ini, perilaku musuh terasa lebih koheren: melihat, terdampak, mencari perlindungan, bergerak, lalu menyerang.

Sebelum lanjut, mahasiswa perlu menangkap bahwa contoh ini adalah pola dasar perilaku taktis. Pola yang sama bisa dikembangkan untuk NPC lain, selama ada sumber informasi, kriteria keputusan, mekanisme gerak, dan aksi yang jelas.

### Inti yang Harus Ditekankan

- **Perception** dan **memory** menyediakan informasi dan konteks bagi musuh.
- **Cover selection** menentukan posisi yang valid dan terdekat.
- `NavMeshAgent` menangani pergerakan menuju cover.
- **Combat action** menjadi hasil akhir setelah musuh berada di posisi aman.

### Transisi ke Slide Berikutnya

Setelah musuh dapat mengambil cover secara individual, contoh berikutnya akan menunjukkan bagaimana beberapa musuh dalam squad bisa bekerja sama melalui role Flanker.

---

## Slide 063 - Example: Simple Flanker

### Narasi

Slide ini membahas contoh perilaku **flanking** yang sederhana pada satu anggota squad. Intuisinya adalah: musuh yang hanya bergerak lurus ke `player` terasa datar, tetapi musuh yang mencoba mendekati dari sisi akan terasa lebih taktis.

Alur pada slide dapat dibaca sebagai berikut:

1. **Squad melihat `player`** sehingga kondisi tempur aktif.
2. Enemy dengan `role` `Flanker` menjadi aktif.
3. Sistem menghitung posisi di sisi `player`.
4. Posisi tersebut divalidasi dengan `NavMesh`.
5. Enemy bergerak ke posisi flank.
6. Enemy menyerang dari sisi.

Poin penting pertama adalah `Flanker` sebagai **role**. Role ini membedakan perilaku satu enemy dengan enemy lain. Dalam implementasi sederhana, role bisa berupa flag, parameter, atau state pada NPC. Ketika role `Flanker` aktif, agent tidak lagi memilih target posisi yang sama dengan enemy biasa.

Poin penting kedua adalah perhitungan posisi flank. Posisi ini biasanya dihitung relatif terhadap `player`, misalnya ke arah kiri atau kanan dari garis pandang `player`. Tujuannya adalah mendapatkan posisi yang lebih menguntungkan untuk menyerang, tanpa harus menunggu algoritma yang rumit.

Poin penting ketiga adalah validasi `NavMesh`. Posisi hasil hitung belum tentu bisa dijangkau karena bisa berada di dinding, air, atau area tanpa path. Karena itu, sebelum enemy bergerak, posisi harus dicek apakah valid di `NavMesh`. Dalam konteks Unity, ini berkaitan dengan penggunaan `NavMeshAgent` dan pengecekan posisi yang dapat dijangkau, misalnya melalui `NavMesh.SamplePosition`.

Setelah posisi valid, `NavMeshAgent` dapat diarahkan ke titik flank. Setelah sampai atau mendekati posisi tersebut, enemy melakukan aksi `attack` dari sisi. Perilaku ini masih sederhana, tetapi sudah menggabungkan **perception**, **role**, **pathfinding**, dan **combat action** menjadi satu alur yang masuk akal.

Sebelum lanjut, mahasiswa perlu memahami bahwa peningkatan kesan kecerdasan pada game sering datang dari keputusan lokal yang tepat. Satu perilaku kecil, seperti memilih posisi flank yang valid, sudah cukup membuat squad terasa lebih responsif dan taktis.

### Inti yang Harus Ditekankan

- `Flanker` adalah **role** yang membedakan perilaku satu enemy dalam squad.
- Posisi flank dihitung relatif terhadap `player`, bukan sekadar titik acak.
- Validasi `NavMesh` penting agar enemy tidak menuju posisi yang tidak bisa dijangkau.
- Perilaku sederhana tetap bisa meningkatkan kesan taktis pada squad.

### Transisi ke Slide Berikutnya

Jika satu enemy sudah bisa flank, langkah berikutnya adalah mengatur beberapa enemy dengan role yang berbeda agar bekerja bersama. Slide berikutnya akan membahas contoh coordinated attack.

---

## Slide 064 - Example: Coordinated Attack

### Narasi

Slide ini melanjutkan contoh sebelumnya, tetapi fokusnya bergeser dari satu NPC yang melakukan flank menjadi **serangan terkoordinasi** oleh beberapa NPC. Intuisi pentingnya adalah: musuh tidak perlu menjadi sangat kompleks secara individual; mereka cukup memiliki **peran berbeda** dan **informasi bersama** agar pertempuran terasa lebih hidup.

Slide menampilkan pembagian peran sebagai berikut:

```text
Enemy A = attacker
Enemy B = flanker
Enemy C = cover shooter
```

Peran ini menentukan **apa yang dilakukan** oleh masing-masing NPC. `attacker` bertugas menekan dari depan, `flanker` mencari posisi samping, dan `cover shooter` menjaga jarak sambil menembak dari posisi aman.

Perilaku yang dihasilkan dapat dilihat pada alur berikut:

```text
Enemy A mendekat dari depan
Enemy B bergerak ke samping
Enemy C mengambil cover dan menembak
```

Ketiga aksi ini terjadi secara paralel, tetapi tetap terarah. `Enemy A` membuat tekanan utama, `Enemy B` mengurangi rasa aman pemain, dan `Enemy C` memberikan tekanan jarak jauh. Hasilnya, pemain tidak hanya menghadapi satu ancaman, melainkan **kombinasi ancaman** yang saling melengkapi.

Koordinasi ini tidak muncul hanya karena setiap NPC bergerak sendiri. Ada beberapa mekanisme yang bisa digunakan:

- `role`: menentukan tugas utama NPC, misalnya menyerang, menyamping, atau menembak dari cover.
- `shared target`: semua NPC yang terlibat menyerang target yang sama, sehingga tekanan terarah.
- `shared alert`: status waspada disebarkan, sehingga NPC lain ikut bereaksi terhadap ancaman.
- `attack slot`: mengatur giliran atau jumlah NPC yang boleh menyerang, agar tidak semua menyerang sekaligus.
- `cover reservation`: NPC yang sudah memakai satu cover menandai cover tersebut, sehingga NPC lain memilih cover berbeda.

Dari sisi implementasi, pola seperti ini sering cocok dengan **finite state machine** atau **behavior tree**. Setiap NPC dapat memiliki state seperti `Alert`, `Attack`, `Flank`, dan `Cover`. Keputusan untuk pindah state dipengaruhi oleh data bersama, misalnya target yang sama atau status alert yang sama. Pergerakan ke posisi flank atau cover biasanya didukung pathfinding dan steering, tetapi pada slide ini yang utama adalah bagaimana peran dan data bersama mengatur aksi.

Yang perlu dipahami mahasiswa sebelum lanjut adalah bahwa koordinasi bukan sekadar membuat banyak NPC bergerak. Koordinasi adalah **pembagian tugas**, **penghindaran konflik**, dan **sinkronisasi informasi**. Jika semua NPC menyerang dari posisi yang sama, atau semua NPC berebut satu cover, perilaku akan terasa kacau. Sebaliknya, jika peran dan slot serangan diatur dengan jelas, pertempuran akan terasa lebih taktis meskipun logikanya masih sederhana.

### Inti yang Harus Ditekankan

- Koordinasi serangan dibangun dari **peran** yang jelas: `attacker`, `flanker`, dan `cover shooter`.
- Data bersama seperti `shared target` dan `shared alert` membuat beberapa NPC bergerak menuju tujuan yang sama.
- `attack slot` dan `cover reservation` mencegah konflik, sehingga musuh tidak menumpuk di satu posisi atau satu target secara tidak terkendali.

### Transisi ke Slide Berikutnya

Setelah memahami contoh serangan terkoordinasi ini, langkah berikutnya adalah melihat bagaimana pola taktis seperti cover, flank, suppress, dan target selection diterapkan pada genre game yang berbeda.

---

## Slide 065 - Tactical AI dalam Game Genre

### Narasi

Slide ini membahas bagaimana **tactical behavior** pada NPC tidak selalu sama di setiap genre. Konsep taktis yang sama, seperti memilih target, memilih posisi aman, atau bekerja sama dengan sekutu, dapat berubah bentuk tergantung aturan dan tujuan utama game.

Dalam genre **Shooter**, perilaku taktis biasanya berfokus pada pertempuran langsung. NPC perlu memutuskan kapan harus menggunakan `cover`, kapan harus `flank`, kapan harus `suppress`, dan kapan harus `retreat`.

- `cover` membantu NPC mengurangi risiko terkena tembakan.
- `flank` memberi sudut serangan yang lebih menguntungkan.
- `suppress` membatasi pergerakan pemain.
- `retreat` digunakan ketika NPC terlalu lemah atau posisinya tidak aman.

Pada genre **RTS**, fokus taktis bergeser ke level kelompok. Unit tidak hanya bertindak sendiri, tetapi juga sebagai bagian dari formasi.

- `formation` menjaga kelompok tetap rapi dan mudah dikendalikan.
- `target priority` menentukan unit mana yang harus diserang lebih dulu.
- `group movement` membuat kelompok bergerak sebagai satu kesatuan.
- `focus fire` memusatkan serangan pada satu target agar cepat dikalahkan.

Pada genre **Stealth**, taktik tidak selalu berupa serangan. NPC lebih banyak mengamati dan merespons informasi yang terbatas.

- `patrol` adalah perilaku dasar NPC saat tidak ada ancaman.
- `suspicion` muncul ketika NPC melihat atau mendengar sesuatu yang mencurigakan.
- `search` dilakukan untuk mencari sumber suara atau objek yang terlihat.
- `alert propagation` menyebarkan informasi bahaya ke NPC lain di sekitar.

Pada genre **RPG**, perilaku taktis sering dikaitkan dengan peran dalam tim.

- `tank/healer/damage role` menentukan fungsi NPC dalam pertempuran.
- `target selection` memilih musuh yang paling sesuai dengan peran NPC.
- `retreat` menjaga NPC tetap hidup untuk mendukung tim.
- `support ally` membantu sekutu, misalnya dengan menyembuhkan atau melindungi.

Hal penting yang harus dipahami mahasiswa adalah bahwa **tactical behavior** bukan sekadar daftar aksi, tetapi hasil dari keputusan yang diprioritaskan berdasarkan genre. Aksi seperti `cover`, `target selection`, atau `retreat` dapat muncul di banyak genre, tetapi artinya berbeda tergantung konteks.

Sebelum lanjut ke praktikum, mahasiswa perlu mampu mengaitkan aksi taktis dengan struktur perilaku NPC, misalnya state, prioritas keputusan, dan koordinasi antar NPC.

### Inti yang Harus Ditekankan

- **Tactical behavior** berbeda penekanannya di setiap genre, tetapi menggunakan prinsip dasar yang mirip.
- Genre **Shooter**, **RTS**, **Stealth**, dan **RPG** memiliki fokus taktis yang berbeda: pertempuran langsung, kontrol kelompok, deteksi ancaman, dan peran tim.
- Mahasiswa harus memahami bahwa aksi taktis seperti `cover`, `target selection`, `retreat`, dan `alert propagation` perlu diprioritaskan sesuai konteks game.

### Transisi ke Slide Berikutnya

Setelah memahami bentuk taktis pada beberapa genre, slide berikutnya akan mengarahkan konsep ini ke desain praktikum sederhana, yaitu squad enemy AI yang dapat mendeteksi pemain, berbagi informasi, memilih target, dan mengambil posisi taktis.

---

## Slide 066 - Desain Praktikum Pertemuan 7

### Narasi

Slide ini menetapkan **desain praktikum** untuk pertemuan ke-7. Fokusnya bukan membangun sistem taktis yang rumit, melainkan membuat **squad enemy sederhana** yang dapat menunjukkan perilaku dasar: mendeteksi pemain, berbagi informasi, memilih target, mengambil cover, dan menjaga posisi agar tidak menumpuk.

Secara intuitif, setiap `enemy` tidak bekerja sepenuhnya sendiri. Ketika satu `enemy` melihat `player`, informasi tersebut sebaiknya diteruskan ke seluruh squad. Dengan cara ini, squad dapat masuk ke mode **alert** secara konsisten, bukan hanya satu musuh yang bereaksi. Pola ini penting karena dalam game, perilaku NPC yang meyakinkan sering datang dari koordinasi kelompok, bukan hanya kemampuan individu.

Target perilaku yang harus dicapai dalam praktikum ini adalah:

- beberapa `enemy` berada dalam satu squad;
- `enemy` dapat mendeteksi `player`;
- informasi posisi atau status `player` dibagikan antar `enemy`;
- `enemy` memilih target yang akan dihadapi;
- `enemy` mengambil **cover sederhana**;
- `enemy` memilih posisi taktis yang masuk akal;
- `enemy` tidak menumpuk di posisi yang sama.

Dari sisi implementasi, target ini dapat dipetakan ke beberapa keputusan sederhana. `enemy` perlu memiliki data tentang `player`, misalnya posisi terakhir yang terlihat atau status terdeteksi. `enemy` juga perlu aturan untuk memilih target, misalnya target terdekat atau target yang paling mengancam. Untuk cover, `enemy` dapat memilih titik perlindungan yang memblokir garis pandang atau menjauhkan diri dari bahaya. Untuk posisi taktis, squad perlu aturan **spacing** atau jarak minimum agar musuh tidak saling menutupi.

Poin penting yang harus dipahami mahasiswa sebelum masuk ke modul praktikum adalah bahwa praktikum ini menguji **integrasi perilaku**, bukan hanya satu fungsi kecil. Deteksi, berbagi informasi, pemilihan target, cover, dan spacing harus bekerja bersama. Jika satu bagian tidak konsisten, misalnya semua `enemy` memilih cover yang sama, maka perilaku squad akan terlihat tidak natural.

Detail teknis dan langkah implementasi sengaja tidak dibahas di slide ini. Slide ini berfungsi sebagai **kerangka target** yang akan dikembangkan pada modul praktikum terpisah.

### Inti yang Harus Ditekankan

- Praktikum ini berfokus pada **squad enemy sederhana**, bukan sistem taktis lengkap.
- Informasi `player` sebaiknya dibagikan agar seluruh squad dapat bereaksi secara konsisten.
- Pemilihan cover dan posisi taktis harus mencegah `enemy` menumpuk di satu titik.
- Target perilaku harus menjadi acuan utama sebelum masuk ke detail implementasi.

### Transisi ke Slide Berikutnya

Setelah target perilaku squad ditetapkan, langkah berikutnya adalah melihat rencana scene praktikum yang akan digunakan untuk membangun lingkungan uji.

---

## Slide 067 - Rencana Scene Praktikum

### Narasi

Slide ini memetakan **komponen scene** yang akan digunakan dalam praktikum. Tujuannya bukan langsung membahas logika perilaku, tetapi memastikan lingkungan sudah memiliki elemen yang cukup untuk mendukung deteksi, koordinasi, dan pemilihan posisi.

```text
Ground
Player
Enemy Squad
Cover Points
Obstacles
Squad Manager
Main Camera
Debug UI
```

Komponen-komponen ini membentuk ruang uji yang sederhana namun fungsional. `Ground` menjadi dasar navigasi, `Player` menjadi objek yang harus dideteksi, dan `Enemy Squad` berisi beberapa agent yang akan berperilaku sebagai satu kelompok. `Cover Points` menyediakan posisi taktis, sedangkan `Obstacles` membatasi jalur dan memengaruhi garis pandang.

`Squad Manager` berperan sebagai koordinator. Ia dapat menyimpan informasi bersama, misalnya apakah squad sudah dalam keadaan waspada, posisi player yang diketahui, dan cover mana yang masih tersedia. Dengan adanya koordinator ini, beberapa enemy tidak perlu bekerja sepenuhnya secara terpisah; mereka dapat berbagi hasil deteksi dan membagi posisi.

`Main Camera` dan `Debug UI` penting untuk observasi. Mahasiswa perlu melihat bagaimana squad merespons player, apakah ada enemy yang memilih cover yang sama, dan apakah informasi deteksi benar-benar dibagikan. Tanpa visualisasi debug, kesalahan kecil pada posisi atau status squad akan sulit dilacak.

```text
Cover A ●     Wall ████       Cover B ●

Enemy 1 ●       Enemy 2 ●       Enemy 3 ●

                 Player ●
```

Diagram ini menunjukkan hubungan spasial yang ingin dibangun. Ada dua area cover, yaitu `Cover A` dan `Cover B`, dengan dinding atau obstacle di tengah. Tiga enemy ditempatkan pada posisi awal yang berbeda, sementara player berada di area depan. Susunan ini membantu mahasiswa memahami bahwa pemilihan posisi bukan hanya soal bergerak ke player, tetapi juga soal mencari tempat yang aman dan tidak bertumpuk.

Sebelum masuk ke aturan perilaku, mahasiswa perlu memahami bahwa scene ini menyediakan **data dasar** untuk pengambilan keputusan: posisi player, keberadaan cover, hambatan, dan status squad. Jika elemen ini tidak tersedia dengan benar, perilaku yang dirancang nanti akan sulit diuji secara konsisten.

### Inti yang Harus Ditekankan

- Scene praktikum harus menyediakan komponen minimal yang jelas: `Ground`, `Player`, `Enemy Squad`, `Cover Points`, `Obstacles`, `Squad Manager`, `Main Camera`, dan `Debug UI`.
- `Cover Points` dan `Obstacles` menentukan pilihan posisi taktis serta memengaruhi garis pandang, bukan sekadar dekorasi.
- `Squad Manager` menjadi pusat koordinasi agar beberapa enemy dapat berbagi informasi dan memilih posisi tanpa menumpuk.
- Diagram menunjukkan hubungan spasial antara player, enemy, cover, dan obstacle yang harus dapat dibaca oleh sistem perilaku.

### Transisi ke Slide Berikutnya

Setelah scene dan komponennya jelas, langkah berikutnya adalah merancang perilaku enemy yang akan dijalankan di dalam scene ini.

---

## Slide 068 - Rencana Behavior Enemy

### Narasi

Pada slide ini kita merancang **perilaku dasar enemy** dalam scene praktikum. Intuisinya sederhana: enemy tidak harus selalu menyerang. Ia perlu memilih tindakan yang masuk akal berdasarkan apa yang diketahui, posisi cover, jarak, dan kondisi dirinya.

Pseudocode perilaku yang direncanakan adalah:

```text
Jika player tidak diketahui:
    Patrol / Guard

Jika player terlihat oleh salah satu enemy:
    Squad Alert

Jika cover tersedia:
    Move To Cover

Jika line of sight ke player:
    Attack

Jika role flanker:
    Move To Flank Position

Jika HP rendah:
    Retreat
```

Secara konseptual, blok ini menggambarkan **alur keputusan** yang dievaluasi setiap `Update` atau `FixedUpdate` pada agent. Input utamanya adalah data persepsi dan kondisi internal: apakah player terlihat, apakah ada `cover`, apakah `line of sight` terbuka, apakah `role` agent adalah `flanker`, dan apakah `HP` rendah. Outputnya adalah satu `action` yang dipilih, misalnya `Patrol`, `SquadAlert`, `MoveToCover`, `Attack`, `MoveToFlank`, atau `Retreat`.

Urutan kondisi penting karena menentukan prioritas. Jika player belum diketahui, enemy tetap melakukan `Patrol` atau `Guard` agar scene tidak kosong dan pemain dapat mengamati perilaku dasar. Begitu salah satu enemy melihat player, squad dapat masuk `SquadAlert`. Setelah itu, keputusan taktis seperti `MoveToCover` dan `Attack` menjadi lebih relevan. Jika agent memiliki `role` `flanker`, ia tidak selalu bergerak ke cover yang sama, melainkan mencari posisi flank. Jika `HP` rendah, `Retreat` menjadi prioritas keselamatan.

Dalam implementasi, pola ini bisa direpresentasikan sebagai **FSM**, di mana setiap kondisi memicu transisi antar state. State yang mungkin adalah `Patrol`, `Alert`, `Cover`, `Attack`, `Flank`, dan `Retreat`. Kelebihannya mudah dibaca dan cocok untuk perilaku yang relatif stabil. Namun, jika aturan mulai bercabang dan saling memengaruhi, **Behavior Tree** dapat membantu menyusun node kondisi, node aksi, dan node komposit secara lebih modular. Pendekatan berbasis utilitas juga bisa dipakai dengan memberi skor pada setiap aksi, lalu memilih aksi dengan skor tertinggi.

Yang perlu dipahami mahasiswa sebelum lanjut adalah bahwa perilaku ini bukan sekadar daftar `if`. Ia adalah **model keputusan** yang menghubungkan persepsi, memori squad, dan aksi motorik. `MoveToCover` membutuhkan pencarian titik cover yang valid, `Attack` membutuhkan validasi `line of sight`, dan `Retreat` membutuhkan arah aman. Dengan kata lain, perilaku taktis hanya terasa benar jika didukung data scene yang konsisten.

### Inti yang Harus Ditekankan

- **Perilaku enemy** dirancang sebagai pilihan `action` berdasarkan kondisi: player diketahui, cover tersedia, `line of sight`, `role`, dan `HP`.
- Urutan kondisi menunjukkan **prioritas keputusan**, bukan sekadar daftar aturan yang dieksekusi acak.
- Implementasi dapat menggunakan **FSM**, **Behavior Tree**, atau pendekatan berbasis utilitas, tergantung kompleksitas dan kebutuhan modularitas.
- Perilaku taktis seperti `MoveToCover`, `Attack`, dan `Retreat` harus terhubung dengan data scene: cover, obstacle, squad, dan kondisi agent.

### Transisi ke Slide Berikutnya

Setelah perilaku dasar direncanakan, langkah berikutnya adalah memecah tanggung jawab perilaku tersebut ke dalam struktur script yang lebih rapi, agar logika persepsi, memori, taktik, combat, dan debug tidak menumpuk dalam satu komponen.

---

## Slide 069 - Rencana Script Praktikum

### Narasi

Slide ini menampilkan **rencana struktur script** untuk praktikum. Fokusnya bukan isi logika satu per satu, tetapi cara kerja sistem kecerdasan game dipecah menjadi beberapa file yang lebih mudah dikelola.

```text
Scripts/
├── EnemyPerception.cs
├── EnemyMemory.cs
├── EnemyTacticalAI.cs
├── EnemyCombat.cs
├── EnemyHealth.cs
├── CoverPoint.cs
├── SquadManager.cs
├── SquadBlackboard.cs
├── SimplePlayerController.cs
└── DebugAIInfo.cs
```

Struktur ini mengikuti prinsip **single responsibility**, yaitu satu script hanya menangani satu tanggung jawab utama. Dengan cara ini, kode tidak menumpuk dalam satu file besar yang sulit dibaca, diuji, dan diperbaiki.

Secara umum, alur kerja dapat dilihat sebagai berikut:

1. `EnemyPerception.cs` mengumpulkan informasi dari lingkungan.
2. `EnemyMemory.cs` menyimpan informasi penting yang masih relevan.
3. `EnemyTacticalAI.cs` merencanakan perilaku taktis berdasarkan informasi tersebut.
4. `EnemyCombat.cs` mengeksekusi aksi tempur yang sudah dipilih.
5. `DebugAIInfo.cs` membantu menampilkan status untuk pengujian.

Beberapa script lain mendukung kebutuhan lingkungan dan koordinasi. `EnemyHealth.cs` mengelola kondisi unit, `CoverPoint.cs` mewakili titik perlindungan, `SquadManager.cs` dan `SquadBlackboard.cs` membantu koordinasi antar enemy dalam satu squad, sedangkan `SimplePlayerController.cs` menyediakan player sederhana untuk pengujian.

Sebelum masuk ke detail implementasi, mahasiswa perlu memahami bahwa pemisahan script ini membuat proses debugging lebih jelas. Jika perilaku tidak sesuai, kita bisa mengecek apakah masalah ada pada deteksi, penyimpanan informasi, keputusan taktis, eksekusi aksi, atau data yang dibagikan antar squad.

### Inti yang Harus Ditekankan

- Struktur script menunjukkan **arsitektur modular** untuk praktikum.
- Setiap script memiliki **tanggung jawab berbeda** agar kode lebih rapi dan mudah diuji.
- Alur data penting: persepsi, memori, keputusan taktis, aksi tempur, dan debug.
- Slide ini adalah **peta kerja**, bukan detail isi tiap script.

### Transisi ke Slide Berikutnya

Setelah struktur ini dipahami, pembahasan akan masuk ke script pertama, yaitu `EnemyPerception.cs`, untuk melihat informasi apa yang dikumpulkan dan data apa yang dihasilkan.

---

## Slide 070 - EnemyPerception.cs

### Narasi

Pada slide ini kita masuk ke salah satu komponen paling dasar dalam sistem cerdas musuh, yaitu **perception** atau persepsi. Komponen ini diwakili oleh `EnemyPerception.cs`. Tugasnya bukan membuat musuh bergerak, menyerang, atau memilih strategi, tetapi hanya menjawab satu pertanyaan penting: **apakah musuh bisa melihat player saat ini?**

Dalam desain sistem cerdas game, **perception** berperan seperti indra. Ia membaca kondisi dunia sekitar agent, lalu mengubahnya menjadi data sederhana yang bisa dipakai oleh sistem keputusan. Dengan pemisahan ini, kode menjadi lebih rapi: sensor tidak bercampur dengan perilaku.

Tugas utama `EnemyPerception.cs` adalah:

- mendeteksi keberadaan player,
- mengecek jarak antara enemy dan player,
- mengecek apakah player berada di **field of view** enemy,
- mengecek apakah ada **line of sight** yang tidak terhalang.

Alurnya bisa dipahami sebagai pipeline sederhana:

1. Ambil posisi enemy dan posisi player.
2. Hitung jarak keduanya.
3. Cek apakah player berada di arah pandang yang diizinkan.
4. Cek apakah garis pandang dari enemy ke player tidak terhalang dinding, objek, atau collider lain.
5. Jika semua kondisi terpenuhi, tandai player sebagai terlihat.

Data output yang dihasilkan adalah:

```text
canSeePlayer
distanceToPlayer
visibleTarget
```

Variabel `canSeePlayer` biasanya bertipe `bool`. Nilai `true` berarti enemy sedang melihat player. Nilai `false` berarti player tidak terlihat, entah karena terlalu jauh, berada di belakang, atau terhalang.

Variabel `distanceToPlayer` menyimpan jarak numerik antara enemy dan player. Data ini berguna untuk sistem keputusan, misalnya menentukan apakah player masih dalam jarak waspada, jarak kejar, atau jarak aman.

Variabel `visibleTarget` biasanya menyimpan referensi ke player, misalnya `Transform`, jika player terlihat. Jika tidak terlihat, nilainya bisa `null`. Dengan demikian, sistem lain tidak perlu mencari ulang target yang sedang terlihat.

Dalam implementasi Unity, komponen ini biasanya bekerja dengan data posisi dari `Transform`, menghitung jarak menggunakan `Vector3.Distance`, mengecek sudut pandang menggunakan `Vector3.Angle`, dan mengecek penghalang menggunakan `Physics.Linecast` atau `Raycast`. Intinya, `EnemyPerception.cs` hanya membaca dunia, bukan mengubah perilaku.

Poin penting yang harus dipahami mahasiswa adalah: **perception tidak memutuskan aksi**. Ia tidak memilih apakah enemy harus `chase`, `attack`, `alert`, atau `return`. Keputusan itu menjadi tugas decision system, misalnya finite state machine, behavior tree, atau sistem utilitas. `EnemyPerception.cs` hanya menyediakan fakta: player terlihat atau tidak, berapa jaraknya, dan siapa target yang terlihat.

Pemisahan ini sangat penting dalam praktik. Jika perception langsung menentukan aksi, kode akan sulit dikembangkan. Misalnya, kita ingin menambah kondisi baru seperti suara, cahaya, atau jarak pendengaran. Dengan arsitektur yang benar, kita cukup memperluas data persepsi, lalu decision system yang menentukan perilaku berdasarkan data tersebut.

### Inti yang Harus Ditekankan

- `EnemyPerception.cs` adalah komponen **sensor** untuk enemy, bukan komponen keputusan.
- Perception mengecek **jarak**, **field of view**, dan **line of sight** untuk menentukan apakah player terlihat.
- Output utamanya adalah `canSeePlayer`, `distanceToPlayer`, dan `visibleTarget`.
- Data ini dipakai oleh decision system untuk memilih perilaku seperti waspada, mengejar, atau kembali.
- Jangan mencampur logika persepsi dengan logika aksi agar sistem lebih modular dan mudah dikembangkan.

### Transisi ke Slide Berikutnya

Setelah enemy tahu apakah player sedang terlihat, masalah berikutnya adalah apa yang terjadi ketika player menghilang. Pada slide berikutnya, kita akan membahas `EnemyMemory.cs`, yaitu komponen yang menyimpan informasi terakhir tentang posisi player agar enemy tetap bisa bereaksi meskipun player sudah tidak terlihat.

---

## Slide 071 - EnemyMemory.cs

### Narasi

Setelah `EnemyPerception.cs` menentukan apakah player terlihat, sistem musuh membutuhkan cara untuk mengingat informasi tersebut. **`EnemyMemory.cs`** berperan sebagai penyimpanan kondisi terakhir yang diketahui musuh tentang player.

Tugas utamanya adalah:

- menyimpan `lastKnownPlayerPosition`, yaitu posisi terakhir player yang terlihat.
- menyimpan `lastSeenTime`, yaitu waktu terakhir musuh melihat player.
- menentukan `hasValidMemory`, yaitu apakah informasi yang tersimpan masih layak digunakan.

Data ini penting karena player tidak selalu berada dalam **field of view** atau **line of sight**. Jika player bergerak ke balik dinding, musuh tidak bisa langsung kehilangan konteks. Dengan memory, musuh dapat tetap menuju posisi terakhir player sebelum player menghilang.

Secara alur, ketika `canSeePlayer` bernilai benar, sistem memperbarui `lastKnownPlayerPosition` dan `lastSeenTime`. Ketika player tidak terlihat, sistem tidak langsung menghapus informasi. Sistem memeriksa apakah `lastSeenTime` masih berada dalam batas waktu yang dianggap valid. Jika masih valid, `hasValidMemory` menjadi benar dan musuh dapat menggunakan `lastKnownPlayerPosition` sebagai target sementara.

Jika waktu sudah melewati batas, `hasValidMemory` menjadi salah. Artinya, musuh tidak lagi yakin posisi terakhir tersebut masih relevan. Pada tahap ini, musuh dapat berhenti mengejar, kembali ke posisi awal, atau melakukan perilaku lain yang didukung oleh sistem keputusan.

Yang perlu dipahami mahasiswa adalah bahwa **memory bukan pengganti perception**. Perception menyediakan fakta saat ini, sedangkan memory menyediakan konteks historis singkat. Memory juga bukan pengganti **decision system**. Memory hanya memberi data tambahan agar keputusan musuh lebih stabil dan tidak terlalu reaktif.

Dalam implementasi, `lastKnownPlayerPosition` biasanya disimpan sebagai posisi dunia, `lastSeenTime` sebagai nilai waktu, dan `hasValidMemory` sebagai hasil evaluasi. Dengan pola ini, musuh dapat menunjukkan perilaku “mencari” atau “menunggu” di posisi terakhir player tanpa harus terus-menerus mengandalkan deteksi langsung.

### Inti yang Harus Ditekankan

- `EnemyMemory.cs` menyimpan `lastKnownPlayerPosition`, `lastSeenTime`, dan `hasValidMemory`.
- Memory membuat musuh tetap dapat bereaksi terhadap posisi terakhir player meskipun player tidak terlihat.
- Validitas memory ditentukan oleh waktu terakhir melihat player.
- Memory melengkapi perception, tetapi tidak menggantikan decision system.

### Transisi ke Slide Berikutnya

Setelah musuh memiliki informasi posisi terakhir player, langkah berikutnya adalah menentukan tempat perlindungan. `CoverPoint.cs` akan membahas bagaimana musuh menyimpan dan memilih posisi cover saat membutuhkan perlindungan.

---

## Slide 072 - CoverPoint.cs

### Narasi

Pada slide ini, kita membahas `CoverPoint.cs`, yaitu komponen yang merepresentasikan **titik cover** dalam lingkungan permainan. Dalam perilaku taktis, cover bukan sekadar koordinat di peta, melainkan sumber daya yang dapat dipilih, digunakan, dan dilepaskan oleh NPC. Dengan memodelkan cover sebagai objek tersendiri, keputusan pergerakan menjadi lebih terstruktur karena setiap titik memiliki status dan nilai yang dapat dievaluasi.

Secara intuitif, ketika enemy merasa terancam atau membutuhkan perlindungan, ia tidak cukup hanya bergerak ke titik acak. Ia perlu memilih cover yang aman, belum dipakai, dan sesuai dengan kondisi pertempuran. `CoverPoint` menyediakan data dasar untuk proses pemilihan tersebut.

Data yang disimpan pada `CoverPoint` adalah sebagai berikut:

- `bool isOccupied` menunjukkan apakah cover sedang ditempati.
- `occupiedBy` menyimpan referensi enemy yang sedang menggunakan cover tersebut.
- `float coverQuality` menyimpan kualitas cover, misalnya tingkat perlindungan atau keamanannya.
- `Transform coverTransform` menyimpan posisi cover di scene sebagai target pergerakan.

Hubungan data ini dengan perilaku game cukup penting. `coverTransform` menjadi tujuan pergerakan enemy ketika memilih perlindungan. `coverQuality` membantu enemy membandingkan beberapa titik cover dan memilih yang paling menguntungkan. Sementara itu, `isOccupied` dan `occupiedBy` mencegah banyak enemy menumpuk di titik yang sama, sehingga distribusi NPC di medan pertempuran menjadi lebih rapi.

Yang perlu dipahami sebelum lanjut adalah bahwa `CoverPoint` adalah abstraksi lingkungan untuk **decision making** taktis. Ia memungkinkan enemy melakukan pemilihan berbasis status dan skor, bukan hanya mengikuti pathfinding ke titik tetap. Konsep ini menjadi dasar sebelum perilaku individu dikoordinasikan dalam kelompok.

### Inti yang Harus Ditekankan

- `CoverPoint` memodelkan titik perlindungan sebagai objek dengan status dan kualitas.
- `isOccupied` dan `occupiedBy` menjaga agar satu cover tidak digunakan bersamaan oleh banyak enemy.
- `coverQuality` membantu enemy memilih cover yang lebih aman atau lebih menguntungkan.
- `coverTransform` menjadi target posisi untuk pergerakan NPC.

### Transisi ke Slide Berikutnya

Setelah memahami bagaimana satu titik cover direpresentasikan dan dipilih, langkah berikutnya adalah melihat bagaimana beberapa enemy dikoordinasikan melalui `SquadManager.cs`.

---

## Slide 073 - SquadManager.cs

### Narasi

**SquadManager** adalah komponen yang berperan sebagai pusat koordinasi sederhana untuk sekelompok musuh dalam sistem Game AI. Komponen ini tidak langsung menentukan aksi individual seperti menyerang atau mundur, tetapi menyediakan data bersama yang dapat dibaca oleh anggota squad.

```text
List<EnemyTacticalAI> members
Transform sharedTarget
Vector3 sharedLastKnownPosition
SquadAlertLevel alertLevel
```

Data utama pada `SquadManager` dapat dipahami sebagai berikut:

- `members`: daftar anggota squad yang dikelola, biasanya berupa referensi ke objek `EnemyTacticalAI`.
- `sharedTarget`: target bersama yang sedang diperhatikan squad, misalnya posisi player atau objek penting.
- `sharedLastKnownPosition`: posisi terakhir player yang diketahui oleh squad, berguna ketika player tidak lagi terlihat.
- `alertLevel`: tingkat kewaspadaan squad, yang dapat memengaruhi seberapa agresif atau waspada perilaku musuh.

Peran penting `SquadManager` adalah membuat beberapa musuh tidak berperilaku sepenuhnya terpisah. Ketika satu anggota squad melihat player, informasi tersebut dapat disimpan sebagai data bersama. Anggota lain kemudian dapat menggunakan `sharedLastKnownPosition` untuk bergerak ke area yang sama, melakukan pencarian, atau menjaga posisi.

Alur koordinasi sederhana dapat dibayangkan seperti ini:

1. Satu atau lebih anggota squad mendeteksi player.
2. Anggota tersebut mengirim laporan ke `SquadManager`.
3. `SquadManager` memperbarui `sharedTarget`, `sharedLastKnownPosition`, atau `alertLevel`.
4. Anggota squad lain membaca data bersama tersebut untuk menyesuaikan perilaku mereka.

Selain berbagi informasi posisi, `SquadManager` juga menjadi dasar untuk mengatur pembagian cover atau role. Dengan mengetahui daftar `members`, sistem dapat menghindari situasi di mana semua musuh memilih cover yang sama atau semua melakukan aksi yang identik.

Sebelum lanjut ke perilaku individual, mahasiswa perlu memahami bahwa `SquadManager` adalah lapisan koordinasi. Ia menyediakan konteks bersama, sedangkan keputusan taktis individual biasanya dilakukan oleh agen musuh itu sendiri.

### Inti yang Harus Ditekankan

- **SquadManager** berfungsi sebagai pusat data bersama untuk koordinasi squad.
- `members`, `sharedTarget`, `sharedLastKnownPosition`, dan `alertLevel` adalah data inti yang memungkinkan musuh berbagi kesadaran.
- Komponen ini membantu musuh bergerak lebih terkoordinasi, bukan sekadar bereaksi secara individual.
- Pembagian cover atau role dapat dimulai dari data anggota squad yang disimpan di `SquadManager`.

### Transisi ke Slide Berikutnya

Setelah squad memiliki data bersama, langkah berikutnya adalah melihat bagaimana satu musuh individual membaca data tersebut dan mengubahnya menjadi keputusan taktis.

---

## Slide 074 - EnemyTacticalAI.cs

### Narasi

Slide ini membahas komponen musuh taktis yang menjadi pusat keputusan perilaku satu musuh.

Fokus utamanya adalah mengubah informasi lingkungan menjadi aksi yang dapat dieksekusi. Komponen ini tidak hanya bergerak, tetapi memilih perilaku berdasarkan kondisi saat ini.

Alur kerja dasarnya adalah:

1. Membaca **perception**, misalnya apakah musuh melihat pemain atau mendeteksi ancaman.
2. Membaca **memory**, misalnya posisi terakhir pemain yang terlihat.
3. Membaca **shared squad data** dari `SquadManager`, seperti target bersama, level alert, dan peran dalam squad.
4. Memilih satu **aksi taktis** yang paling sesuai.
5. Memilih posisi tujuan, misalnya cover atau posisi flank.
6. Memberi perintah gerak ke `NavMeshAgent`.

Aksi taktis adalah pilihan perilaku utama musuh. Beberapa contoh yang dibahas pada slide adalah:

- `Patrol`
- `MoveToCover`
- `Attack`
- `Flank`
- `Retreat`
- `Search`

Setiap aksi memiliki tujuan berbeda. `Patrol` menjaga musuh tetap aktif saat tidak ada ancaman. `MoveToCover` membuat musuh mencari posisi aman. `Attack` digunakan ketika musuh sudah cukup dekat atau yakin pada target. `Flank` membantu musuh mendekati dari sisi yang lebih menguntungkan. `Retreat` dipakai saat posisi terlalu berisiko. `Search` digunakan ketika target hilang tetapi masih ada indikasi keberadaan pemain.

Setelah aksi dipilih, komponen ini menerjemahkan keputusan menjadi posisi tujuan. Posisi ini kemudian diberikan ke `NavMeshAgent` agar musuh bergerak di atas NavMesh.

Di sinilah hubungan antara keputusan taktis dan pathfinding terlihat jelas. Keputusan menentukan “ke mana” dan “mengapa”, sedangkan `NavMeshAgent` menentukan “bagaimana” musuh bergerak. Hasilnya, musuh tidak bergerak acak, tetapi perilakunya berubah sesuai kondisi.

Yang perlu dipahami mahasiswa adalah bahwa komponen ini berada di lapisan keputusan. Ia mengubah data menjadi perilaku yang dapat diamati di scene.

### Inti yang Harus Ditekankan

- Komponen musuh taktis membaca **perception**, **memory**, dan **shared squad data** sebelum memilih aksi.
- Aksi taktis seperti `Patrol`, `MoveToCover`, `Attack`, `Flank`, `Retreat`, dan `Search` adalah pilihan perilaku utama musuh.
- Keputusan aksi harus diterjemahkan menjadi posisi tujuan, lalu diberikan ke `NavMeshAgent` untuk dieksekusi.
- Komponen ini menjadi penghubung antara data squad, kondisi pemain, dan gerak musuh di scene.

### Transisi ke Slide Berikutnya

Setelah musuh memilih aksi dan bergerak, kita perlu cara untuk mengamati keputusan tersebut secara langsung. Slide berikutnya akan membahas komponen debug yang menampilkan perilaku, target, cover, dan kondisi musuh secara visual.

---

## Slide 075 - DebugAIInfo.cs

### Narasi

Setelah agent taktis mampu membaca persepsi, memilih aksi, memilih cover, dan memberi perintah ke `NavMeshAgent`, masalah berikutnya adalah bagaimana kita tahu keputusan itu benar. Slide ini membahas `DebugAIInfo.cs`, yaitu komponen diagnostik yang menampilkan kondisi internal agent pada saat runtime.

Intuisi praktisnya sederhana: perilaku yang tampak aneh biasanya berasal dari salah satu bagian pipeline, misalnya persepsi, memori, pemilihan target, pemilihan cover, atau jarak. Debug mengubah variabel internal menjadi informasi yang bisa dilihat, sehingga kita tidak perlu menebak.

Informasi yang ditampilkan pada slide ini adalah:

```text
Current Action
Current Role
Can See Player
Has Memory
Selected Cover
Target
Distance to Target
Alert Level
```

Daftar ini penting karena masing-masing baris mewakili satu pertanyaan diagnostik.

- `Current Action` menunjukkan aksi yang sedang dijalankan, misalnya `Patrol`, `Attack`, `MoveToCover`, atau `Flank`.
- `Current Role` menunjukkan peran agent dalam squad, misalnya penyerang, flanker, atau penjaga.
- `Can See Player` menunjukkan hasil persepsi, yaitu apakah player sedang terlihat.
- `Has Memory` menunjukkan apakah agent masih mengingat posisi terakhir player.
- `Selected Cover` menunjukkan cover yang sedang dipilih.
- `Target` menunjukkan objek yang sedang menjadi target.
- `Distance to Target` menunjukkan jarak agent ke target.
- `Alert Level` menunjukkan tingkat kewaspadaan agent.

Selain teks, slide ini juga menekankan visual debug:

- garis dari agent ke `Target`,
- garis dari agent ke `Selected Cover`,
- radius vision,
- label `state`/`action`,
- warna gizmos berbeda untuk role berbeda.

Garis ke target membantu melihat apakah agent benar-benar mengarah ke objek yang dimaksud. Garis ke cover membantu menilai apakah cover yang dipilih masuk akal. Radius vision menunjukkan batas persepsi. Label dan warna membuat perbedaan role lebih mudah dibaca saat banyak agent bergerak bersamaan.

Hubungan dengan perilaku game juga penting. Jika `Can See Player` bernilai `true` tetapi `Current Action` masih `Patrol`, maka masalahnya mungkin ada pada keputusan, bukan persepsi. Jika `Has Memory` bernilai `true` tetapi `Target` tidak berubah, maka perlu diperiksa bagaimana memori diperbarui. Jika `Distance to Target` sudah dekat tetapi agent tidak menyerang, maka perlu diperiksa kondisi jarak serangan atau prioritas aksi. Dengan cara ini, debug menjadi jembatan antara kode dan perilaku yang terlihat di scene.

Yang harus dipahami mahasiswa sebelum lanjut adalah bahwa debug bukan sekadar menampilkan teks. Debug adalah cara membaca alasan perilaku agent. Mahasiswa perlu mampu menghubungkan setiap informasi dengan bagian perilaku yang sedang diperiksa, sehingga masalah bisa ditemukan lebih cepat.

### Inti yang Harus Ditekankan

- `DebugAIInfo.cs` berfungsi menampilkan kondisi internal agent taktis secara langsung.
- Informasi seperti `Current Action`, `Can See Player`, `Has Memory`, `Selected Cover`, dan `Alert Level` membantu mendiagnosis perilaku agent.
- Visual debug berupa garis, radius vision, label, dan warna gizmos membuat perilaku lebih mudah dipahami.
- Debug membantu mahasiswa menghubungkan keputusan internal dengan hasil perilaku yang terlihat di scene.

### Transisi ke Slide Berikutnya

Setelah memahami informasi apa yang perlu diamati, langkah berikutnya adalah melihat parameter apa yang memengaruhi perilaku tersebut, sehingga mahasiswa bisa menghubungkan hasil debug dengan tuning perilaku agent.

---

## Slide 076 - Parameter Praktikum

### Narasi

Pada slide ini kita membahas **parameter praktikum** yang menjadi dasar pengaturan perilaku musuh. Nilai-nilai ini menentukan seberapa cepat musuh menyadari pemain, seberapa jauh musuh menyerang, seberapa sering musuh mengevaluasi keputusan, dan bagaimana musuh memilih posisi aman.

```text
viewRadius = 12
viewAngle = 90
memoryDuration = 5
attackRange = 8
idealCombatDistance = 6
coverSearchRadius = 15
flankDistance = 5
decisionInterval = 0.3
safeDistance = 12
```

Secara intuitif, parameter ini dapat dibaca sebagai **pengatur kepribadian musuh**. Dengan arsitektur perilaku yang sama, perubahan nilai kecil dapat menghasilkan musuh yang terasa agresif, hati-hati, suka menyelinap, atau lebih menjaga posisi.

Parameter persepsi meliputi:

- `viewRadius = 12`: jarak maksimum musuh dapat melihat pemain.
- `viewAngle = 90`: sudut pandang musuh dalam derajat.
- `memoryDuration = 5`: durasi musuh mengingat posisi terakhir pemain setelah kehilangan pandangan.

Parameter pertempuran meliputi:

- `attackRange = 8`: jarak maksimum untuk menyerang.
- `idealCombatDistance = 6`: jarak ideal saat bertempur.
- `safeDistance = 12`: jarak yang dianggap aman dari ancaman.

Parameter gerak dan `cover` meliputi:

- `coverSearchRadius = 15`: radius pencarian titik `cover`.
- `flankDistance = 5`: jarak lateral untuk melakukan flanking.

Parameter keputusan:

- `decisionInterval = 0.3`: interval evaluasi perilaku, misalnya setiap 0,3 detik.

Hubungan antarparameter ini penting. Jika `viewRadius` besar tetapi `decisionInterval` besar, musuh mungkin melihat pemain lebih awal tetapi bereaksi lebih lambat. Jika `attackRange` lebih besar dari `idealCombatDistance`, musuh cenderung menyerang dari jarak yang lebih jauh. Jika `safeDistance` besar, musuh akan lebih sering mundur atau mencari `cover`.

Parameter tuning dapat menghasilkan tipe perilaku yang berbeda:

- **Enemy agresif**: `attackRange` besar, `safeDistance` kecil, `decisionInterval` kecil.
- **Enemy defensif**: `safeDistance` besar, `coverSearchRadius` besar, `attackRange` lebih terbatas.
- **Enemy flanker**: `flankDistance` besar, `idealCombatDistance` sedang.
- **Enemy penjaga**: `memoryDuration` besar, `safeDistance` besar, `viewRadius` cukup besar.

Sebelum lanjut, mahasiswa perlu memahami bahwa parameter bukan sekadar angka. Nilai ini memengaruhi `state`, `action`, pencarian `cover`, `steering`, dan urutan keputusan musuh. Pengujian di `Unity` harus dilakukan dengan mengamati perubahan perilaku, bukan hanya mengubah nilai secara acak.

### Inti yang Harus Ditekankan

- Parameter menentukan **persepsi**, **pertempuran**, **gerak**, dan **frekuensi keputusan** musuh.
- Nilai seperti `viewRadius`, `attackRange`, `safeDistance`, dan `decisionInterval` harus dipahami sebagai satu sistem, bukan variabel terpisah.
- Parameter tuning dapat menghasilkan **enemy agresif**, **defensif**, **flanker**, atau **penjaga** dengan arsitektur perilaku yang sama.
- Perubahan parameter harus diuji dan diamati melalui perilaku nyata di scene, misalnya garis target, `cover`, dan `state` musuh.

### Transisi ke Slide Berikutnya

Setelah memahami parameter dasar, langkah berikutnya adalah melakukan eksperimen: mengubah jumlah musuh, `cover`, `role`, persepsi, interval keputusan, dan strategi pemilihan `cover` untuk membandingkan perilaku individual dan squad.

---

## Slide 077 - Eksperimen Mahasiswa

### Narasi

Slide ini mengajak mahasiswa melakukan **eksperimen** setelah parameter dasar perilaku sudah dipahami. Tujuannya bukan sekadar mengubah angka, tetapi mengamati bagaimana perubahan kecil memengaruhi **perilaku NPC** dalam lingkungan taktis.

Setiap eksperimen sebaiknya dilakukan dengan **kontrol sederhana**: ubah satu variabel, jalankan, amati, lalu catat hasilnya. Dengan cara ini mahasiswa dapat membedakan pengaruh **jumlah enemy**, **jumlah cover point**, dan **shared memory** terhadap kualitas keputusan.

Beberapa hal yang dapat dicoba:

- **Mengubah jumlah enemy** untuk melihat apakah perilaku squad menjadi lebih ramai, lebih taktis, atau justru saling mengganggu.
- **Mengubah jumlah cover point** untuk mengamati apakah NPC memiliki pilihan posisi yang cukup atau terlalu banyak.
- **Mengaktifkan atau menonaktifkan `sharedMemory`** untuk membandingkan squad yang berbagi informasi dengan squad yang bertindak secara individual.
- **Mengubah `role` enemy** untuk melihat perbedaan perilaku antara enemy yang agresif, defensif, penjaga, atau flanker.
- **Mengubah `viewRadius`** untuk melihat seberapa cepat NPC mendeteksi player dan seberapa sering mereka kehilangan target.
- **Mengubah `decisionInterval`** untuk mengamati apakah keputusan terlalu lambat, terlalu cepat, atau terlalu sering berubah.

Untuk pemilihan cover, mahasiswa dapat membandingkan dua pendekatan. Pendekatan pertama adalah memilih **cover terdekat**, yang lebih sederhana tetapi belum tentu aman. Pendekatan kedua adalah memilih **cover terbaik berdasarkan skor**, misalnya skor yang mempertimbangkan jarak, keamanan, dan ketersediaan posisi.

Eksperimen **flanking** menjadi penting karena menunjukkan bahwa satu enemy tidak harus selalu bergerak lurus ke player. Enemy yang berperan sebagai flanker dapat bergerak ke sisi player, sehingga squad memiliki tekanan dari lebih dari satu arah.

Perbandingan **enemy individual** versus **squad coordinated** adalah inti dari eksperimen ini. Mahasiswa perlu mengamati apakah squad yang terkoordinasi terlihat lebih taktis, lebih stabil, dan lebih konsisten dalam memilih posisi serta membagi peran.

Sebelum lanjut ke evaluasi, mahasiswa perlu memahami bahwa eksperimen ini menghasilkan **perilaku yang dapat diamati**, bukan hanya perubahan parameter. Yang penting adalah melihat apakah NPC dapat mendeteksi player, mengingat posisi terakhir, berbagi informasi, memilih cover yang valid, membedakan peran, dan bergerak secara taktis sebagai satu squad.

### Inti yang Harus Ditekankan

- Eksperimen dilakukan untuk **mengamati perubahan perilaku**, bukan hanya mengubah parameter.
- Perubahan `viewRadius`, `decisionInterval`, `role`, dan `sharedMemory` dapat memengaruhi **kualitas keputusan NPC**.
- Pemilihan cover dapat dibandingkan antara **cover terdekat** dan **cover terbaik berdasarkan skor**.
- Peran **flanker** membantu squad menekan player dari sisi, bukan hanya dari depan.
- Perbandingan **individual** dan **squad coordinated** menunjukkan pentingnya koordinasi dalam perilaku taktis.

### Transisi ke Slide Berikutnya

Setelah mahasiswa mencoba berbagai eksperimen, langkah berikutnya adalah menilai apakah perilaku squad benar-benar bekerja sesuai harapan. Kita akan masuk ke evaluasi perilaku squad untuk memeriksa deteksi, memori, pembagian informasi, pemilihan cover, perbedaan peran, dan kestabilan keputusan.

---

## Slide 078 - Evaluasi Perilaku Squad

### Narasi

Setelah mahasiswa melakukan eksperimen pada perilaku enemy, langkah berikutnya adalah **evaluasi perilaku squad**. Tujuannya bukan hanya melihat apakah agent bergerak, tetapi apakah sistem taktis menghasilkan perilaku yang koheren, stabil, dan terasa taktis. Evaluasi ini penting karena kualitas squad tidak cukup diukur dari satu agent yang benar, melainkan dari interaksi antar agent dalam satu kelompok.

Beberapa hal yang perlu diperiksa:

1. **Perception dan memory**: Apakah enemy dapat mendeteksi player? Jika player berada di dalam `viewRadius` dan tidak terhalang, agent seharusnya memperbarui posisi player. Jika player hilang dari pandangan, agent perlu menyimpan `lastKnownPosition` agar tetap dapat bereaksi berdasarkan informasi terakhir.

2. **Shared memory**: Informasi player tidak hanya milik satu enemy. Jika satu agent melihat player, posisi tersebut sebaiknya dibagikan ke squad melalui struktur bersama seperti `sharedMemory`. Dengan cara ini, enemy lain dapat bergerak ke posisi yang relevan meskipun tidak melihat player secara langsung.

3. **Pilihan cover**: Enemy harus memilih `coverPoint` yang valid, artinya cover tersebut melindungi dari arah player dan dapat dicapai. Yang penting juga adalah koordinasi: dua enemy sebaiknya tidak memilih cover yang sama. Jika semua agent berkumpul di satu titik, squad menjadi kurang taktis dan lebih mudah diprediksi.

4. **Role dan flanking**: Peran atau `role` enemy perlu terlihat berbeda. Misalnya, satu enemy dapat bertindak sebagai `flanker` yang bergerak ke sisi player, sementara enemy lain menjaga posisi atau menyerang dari cover. Flanker harus memberikan tekanan dari arah berbeda, bukan hanya bergerak ke samping tanpa tujuan.

5. **Stabilitas keputusan**: Mahasiswa perlu mengecek apakah keputusan terlalu sering berubah. Jika `decisionInterval` terlalu pendek atau logika skor tidak stabil, agent dapat terus-menerus mengganti `target`, `coverPoint`, atau `action`. Perilaku seperti itu membuat squad terlihat kacau. Sebaliknya, keputusan yang stabil akan membuat perilaku squad terasa lebih taktis.

Sebagai penutup, evaluasi ini diarahkan pada satu pertanyaan besar: apakah perilaku squad terlihat lebih taktis dibanding enemy individual? Taktis di sini berarti squad dapat berbagi informasi, memilih posisi yang aman, membagi peran, dan tetap mampu menyerang dari cover. Jika hasil evaluasi menunjukkan pola yang konsisten, sistem taktis sudah berjalan dengan baik. Jika tidak, mahasiswa perlu menelusuri bagian yang bermasalah, mulai dari perception, memory, cover selection, role, hingga interval keputusan.

### Inti yang Harus Ditekankan

- Evaluasi perilaku squad dilakukan pada **perception**, **memory**, **shared memory**, **cover selection**, **role**, dan **stabilitas keputusan**.
- `lastKnownPosition` penting agar enemy tetap bereaksi setelah player hilang dari pandangan.
- `sharedMemory` membuat squad dapat berkoordinasi, bukan hanya bergerak berdasarkan informasi individual.
- Cover harus valid dan tidak dipilih berulang oleh banyak enemy; koordinasi posisi adalah bagian dari perilaku taktis.
- `flanker` harus terlihat jelas perannya, yaitu bergerak ke sisi player untuk memberikan tekanan dari arah berbeda.
- Keputusan yang terlalu sering berubah membuat squad tidak stabil; `decisionInterval` dan logika skor perlu diatur dengan baik.

### Transisi ke Slide Berikutnya

Setelah mahasiswa memahami cara mengevaluasi perilaku squad, langkah berikutnya adalah mengenali kesalahan umum yang sering muncul dalam sistem taktis, sehingga masalah pada perilaku squad dapat dideteksi dan diperbaiki lebih cepat.

---

## Slide 079 - Kesalahan Umum Tactical AI

### Narasi

Setelah slide sebelumnya kita memeriksa apakah squad berperilaku taktis, slide ini membantu kita mengenali **gejala kegagalan** yang sering muncul saat mengimplementasikan sistem taktis. Tujuannya bukan mencari satu baris kode yang salah, tetapi melatih mahasiswa membaca perilaku agent dari luar: apakah musuh terlihat bodoh, tidak konsisten, atau saling mengganggu?

Dalam sistem game, perilaku NPC biasanya berasal dari beberapa lapisan: **perception**, **memory**, **decision**, **action**, dan **movement**. Jika lapisan ini tidak dipisahkan dengan jelas, satu kesalahan kecil bisa menyebar ke seluruh squad. Misalnya, `perception` yang salah membuat `decision` salah, lalu `action` menghasilkan gerakan yang tidak masuk akal.

Kesalahan umum pada sistem taktis dapat dikelompokkan sebagai berikut:

- **Cover selection yang buruk**: semua enemy memilih `coverPoint` yang sama, atau memilih cover yang tidak benar-benar melindungi dari posisi player. Akibatnya squad terlihat menumpuk dan mudah diprediksi.
- **Decision yang tidak stabil**: enemy terlalu sering mengganti `target` atau `action`. Perilaku ini membuat NPC terlihat panik, padahal masalahnya sering ada pada prioritas keputusan atau interval evaluasi yang terlalu pendek.
- **Memory dan shared data yang tidak sehat**: `lastKnownPosition` atau `sharedMemory` tidak pernah dibersihkan, sehingga squad terus mengejar informasi lama. Data bersama yang basi membuat keputusan taktis menjadi tidak relevan.
- **Perception dan decision tercampur**: satu script besar menangani deteksi, penilaian, dan eksekusi. Ini menyulitkan debugging, karena sulit menentukan apakah masalah ada pada input sensor, logika pilihan, atau eksekusi gerakan.
- **Implementasi Unity yang rapuh**: `Raycast` mengenai layer yang salah, misalnya karena `layerMask` tidak diatur dengan benar, agent mengejar posisi yang tidak valid di `NavMesh`, atau agent saling menumpuk karena tidak ada aturan jarak antar agent.
- **Tidak ada debug visual**: tanpa visualisasi `lastKnownPosition`, garis pandang, cover yang dipilih, atau `state` agent, mahasiswa hanya menebak-nebak penyebab perilaku.

Poin penting yang harus dipahami mahasiswa adalah bahwa **kesalahan sistem taktis sering terlihat seperti masalah perilaku, padahal sumbernya ada pada arsitektur data atau pipeline keputusan**. Sebelum menambah aturan baru, kita perlu memastikan bahwa input perception benar, memory masih valid, pilihan cover masuk akal, dan keputusan tidak berubah-ubah tanpa alasan.

Dengan kata lain, slide ini menjadi checklist diagnostik. Jika squad berperilaku aneh, mahasiswa tidak perlu langsung menulis logika baru; cukup periksa apakah salah satu dari sepuluh gejala ini sedang terjadi.

### Inti yang Harus Ditekankan

- **Sistem taktis yang buruk biasanya bukan karena satu fungsi, tetapi karena pipeline perception-memory-decision-action tidak sehat.**
- **Cover, target, dan action harus dipilih dengan alasan yang stabil, konsisten, dan dapat diverifikasi.**
- **Shared memory dan `lastKnownPosition` harus memiliki aturan pembaruan atau penghapusan agar tidak basi.**
- **Debug visual adalah bagian dari desain sistem, bukan sekadar tambahan.**

### Transisi ke Slide Berikutnya

Setelah kita mengenali kesalahan umum, langkah berikutnya adalah membuat sistem yang lebih efisien, terutama ketika jumlah agent bertambah.

---

## Slide 080 - Optimasi Tactical AI

### Narasi

Setelah membahas kesalahan umum pada perilaku taktis, langkah berikutnya adalah menjaga agar perilaku tersebut tetap stabil ketika jumlah agent meningkat. **Perilaku taktis** dapat menjadi mahal karena setiap agent biasanya melakukan beberapa hal sekaligus: memeriksa lingkungan, memilih cover, memutuskan target, dan memperbarui path. Jika semua hal itu dilakukan setiap frame untuk banyak agent, biaya komputasi bisa meningkat cepat.

Intuisi praktisnya sederhana: **jangan semua agent melakukan semua hal setiap frame**. Sistem taktis yang baik perlu memilih kapan harus memperbarui informasi, seberapa dalam pencarian dilakukan, dan data apa yang bisa dibagikan antar agent. Dengan cara ini, NPC tetap terlihat responsif tanpa membebani runtime.

Beberapa strategi optimasi utama adalah:

- **Update `perception` tidak setiap frame**: gunakan `perceptionInterval` atau `Time.time` agar agent hanya mengecek lingkungan pada interval tertentu.
- **Update `tactical decision` dengan interval**: keputusan seperti pindah cover atau ganti target tidak perlu dievaluasi setiap frame; cukup pada `decisionInterval`.
- **Batasi jumlah cover yang dicek**: gunakan `maxCoverChecks` agar agent tidak memeriksa semua cover point di sekitar.
- **Gunakan radius pencarian**: `searchRadius` membatasi area pencarian sehingga raycast atau query tidak terlalu luas.
- **Gunakan `layerMask`**: `Physics.Raycast` atau query lain hanya mengecek layer yang relevan, misalnya obstacle atau cover, bukan semua objek.
- **Cache `cover points`**: simpan hasil pencarian cover dalam `coverCache` agar tidak dihitung ulang jika lingkungan tidak berubah.
- **Hindari `path recalculation` terlalu sering**: `NavMeshAgent` sebaiknya tidak dipaksa menghitung path baru setiap frame; gunakan `repathInterval` atau perbarui hanya jika target/posisi berubah signifikan.
- **Gunakan `SquadManager` untuk data bersama**: informasi seperti target bersama, ancaman, atau posisi squad bisa disimpan di satu tempat agar tidak setiap agent menghitung ulang.

Dari sisi desain, optimasi ini tidak berarti agent menjadi kurang cerdas. Yang berubah adalah **frekuensi** dan **cakupan evaluasi**. Agent tetap bisa memilih cover, mengejar target, atau kembali ke formasi; hanya saja keputusan tersebut diambil pada waktu yang lebih rasional. Ini penting agar mahasiswa tidak salah paham: optimasi bukan menghapus logika, tetapi mengatur kapan logika dijalankan.

```csharp
if (Time.time >= nextDecisionTime)
{
    EvaluateTacticalDecision();
    nextDecisionTime = Time.time + decisionInterval;
}
```

Potongan kode ini menunjukkan pola interval yang sederhana. `Time.time` menyimpan waktu berjalan, `nextDecisionTime` menentukan kapan keputusan berikutnya boleh dilakukan, dan `decisionInterval` mengatur seberapa sering keputusan dievaluasi. Urutan eksekusinya adalah: cek waktu, jalankan evaluasi jika sudah waktunya, lalu tunda waktu evaluasi berikutnya. Pola ini bisa diterapkan pada `perception`, pemilihan cover, atau state dalam FSM, tanpa mengubah logika perilaku secara besar-besaran.

Untuk praktikum kecil, implementasi sederhana sudah cukup. Mahasiswa tidak perlu langsung membangun sistem optimasi yang kompleks. Yang penting adalah memahami bahwa masalah performa biasanya muncul ketika `raycast`, pencarian cover, `path recalculation`, dan data bersama tidak dikendalikan. Jika jumlah agent masih sedikit, prioritas utama adalah kejelasan alur keputusan, bukan optimasi ekstrem.

### Inti yang Harus Ditekankan

- **Biaya performa** muncul karena banyak agent melakukan `perception`, pencarian cover, keputusan, dan `path recalculation` secara bersamaan.
- **Interval dan batas pencarian** seperti `perceptionInterval`, `decisionInterval`, `maxCoverChecks`, dan `searchRadius` membantu mengurangi kerja yang tidak perlu.
- **`layerMask` dan cache** membuat query lebih cepat karena hanya mengecek objek relevan dan tidak menghitung ulang data yang masih valid.
- **`SquadManager`** berguna untuk berbagi data antar agent, sehingga squad bisa berperilaku lebih koheren tanpa duplikasi perhitungan.

### Transisi ke Slide Berikutnya

Setelah memahami cara menjaga performa sistem taktis, langkah berikutnya adalah melihat bagaimana seluruh komponen yang sudah dipelajari sebelumnya saling terhubung. Slide berikutnya akan merangkum integrasi dari `perception`, movement, pathfinding, FSM, behavior tree, utility, hingga perilaku taktis sebagai satu alur yang lebih utuh.

---

## Slide 081 - Integrasi dengan Pertemuan Sebelumnya

### Narasi

Slide ini berfungsi sebagai titik temu dari seluruh modul yang sudah kita bangun. Selama beberapa pertemuan, kita tidak langsung membuat satu sistem perilaku yang rumit, tetapi menyusun komponen-komponen dasar terlebih dahulu. Pendekatan ini penting karena perilaku yang meyakinkan dalam game biasanya lahir dari kombinasi beberapa subsistem, bukan dari satu fungsi tunggal.

```text
Pertemuan 2:
Perception + Memory

Pertemuan 3:
Movement + Steering

Pertemuan 4:
Pathfinding + NavMesh

Pertemuan 5:
FSM

Pertemuan 6:
Behavior Tree + Utility AI

Pertemuan 7:
Integration + Tactical AI
```

Alur di atas menunjukkan bahwa setiap pertemuan menambah satu lapisan kemampuan pada agent. **`Perception`** dan **`Memory`** memberi agent kemampuan mengetahui lingkungan dan mengingat informasi penting. **`Movement`** dan **`Steering`** membantu agent bergerak secara halus, bukan sekadar berpindah posisi secara tiba-tiba. **`Pathfinding`** dan **`NavMesh`** menyediakan cara agent mencari rute yang valid di lingkungan game.

Setelah agent mampu melihat, mengingat, bergerak, dan mencari rute, kita masuk ke lapisan pengambilan keputusan. **`FSM`** memberi struktur keputusan yang sederhana dan mudah diuji. **`Behavior Tree`** dan **`Utility`** memperluas kemampuan keputusan menjadi lebih fleksibel, terutama ketika beberapa tindakan harus dipilih berdasarkan prioritas atau skor. Pada pertemuan ketujuh, semua lapisan ini disatukan ke dalam konteks taktis.

Inti dari slide ini adalah bahwa pertemuan ketujuh bukan topik baru yang berdiri sendiri. Ia menjadi jembatan dari perilaku individual menuju perilaku kelompok. Agent tidak lagi hanya bereaksi untuk dirinya sendiri, tetapi mulai berinteraksi dengan squad, berbagi informasi, dan memilih posisi yang lebih taktis. Pemahaman ini penting sebelum kita melihat arsitektur lengkap pada slide berikutnya.

### Inti yang Harus Ditekankan

- Pertemuan 7 mengintegrasikan **`Perception`**, **`Memory`**, **`Movement`**, **`Steering`**, **`Pathfinding`**, **`FSM`**, **`Behavior Tree`**, dan **`Utility`** menjadi satu sistem perilaku yang koheren.
- Setiap komponen memiliki peran berbeda: persepsi memberi input, memori menyimpan konteks, steering dan pathfinding mengatur gerak, sedangkan decision system mengatur pilihan tindakan.
- Fokus utama pertemuan ini adalah transisi dari agent individual ke agent kelompok, dengan dasar taktis yang sudah dioptimasi pada slide sebelumnya.

### Transisi ke Slide Berikutnya

Dengan fondasi integrasi ini, kita lanjut ke contoh arsitektur lengkap enemy squad untuk melihat bagaimana komponen-komponen tersebut disusun dalam struktur yang siap diimplementasikan.

---

## Slide 082 - Contoh Arsitektur Lengkap Enemy Squad

### Narasi

Slide ini memperlihatkan **arsitektur lengkap** untuk sebuah **enemy squad** dalam game. Tujuannya bukan hanya membuat satu `Enemy Agent` bergerak, tetapi membuat beberapa agen dapat bekerja sebagai kelompok yang tetap punya perilaku individu.

```text
SquadManager
├── Shared Blackboard
├── Role Assignment
├── Cover Reservation
└── Alert System

Enemy Agent
├── Perception
├── Memory
├── Tactical Decision
├── NavMeshAgent
├── Combat
└── Debug Visual
```

Dari diagram, ada dua lapisan utama. Lapisan pertama adalah `SquadManager`, yang menangani informasi dan aturan bersama. Lapisan kedua adalah `Enemy Agent`, yang menangani perilaku tiap agen.

Tanggung jawab `SquadManager` dapat dilihat dari empat komponen:

- `Shared Blackboard`: tempat menyimpan data bersama, misalnya posisi ancaman, target terakhir, atau status squad.
- `Role Assignment`: menentukan peran tiap agen, seperti agen yang menyerang, menahan, atau bergerak ke posisi lain.
- `Cover Reservation`: mencatat posisi perlindungan yang sedang dipakai, sehingga beberapa agen tidak menumpuk di titik yang sama.
- `Alert System`: menyebarkan peringatan ketika ada ancaman baru, sehingga squad dapat bereaksi lebih cepat.

Di sisi `Enemy Agent`, setiap agen memiliki alur internal:

1. `Perception` membaca lingkungan, misalnya musuh terlihat, jarak, arah, atau bahaya.
2. `Memory` menyimpan informasi penting yang masih relevan, seperti posisi terakhir musuh atau status squad.
3. `Tactical Decision` memilih tindakan yang paling sesuai berdasarkan data lokal dan data bersama.
4. `NavMeshAgent` mengeksekusi pergerakan di atas pathfinding atau navigasi.
5. `Combat` menangani aksi menyerang atau bertahan.
6. `Debug Visual` membantu pengembang melihat apa yang sedang dipikirkan atau dilakukan agen.

Alur utamanya cukup jelas. Agen menerima input dari lingkungan, menyimpannya ke `Memory`, lalu `Tactical Decision` memutuskan tindakan. Keputusan itu kemudian dieksekusi oleh `NavMeshAgent` dan `Combat`. Sementara itu, `SquadManager` menyediakan konteks bersama agar keputusan individu tidak bertabrakan dengan keputusan agen lain.

Intuisi praktisnya adalah: **perilaku individu** dan **koordinasi kelompok** harus dipisahkan. Jika semua keputusan dibuat di satu tempat, sistem akan sulit dikembangkan. Jika semua keputusan dibuat lokal, squad akan tampak tidak terkoordinasi. Arsitektur ini mencoba menyeimbangkan keduanya.

Sebelum lanjut, mahasiswa perlu memahami tiga hal:

- `SquadManager` bukan pengganti keputusan agen, tetapi penyedia data bersama.
- `Shared Blackboard` membuat agen bisa berbagi informasi tanpa saling memanggil secara langsung.
- `Cover Reservation` dan `Role Assignment` adalah bentuk koordinasi sederhana yang mencegah konflik posisi dan tugas.

### Inti yang Harus Ditekankan

- **Enemy Squad** membutuhkan dua lapisan: `SquadManager` untuk koordinasi kelompok dan `Enemy Agent` untuk perilaku individu.
- `Shared Blackboard`, `Role Assignment`, `Cover Reservation`, dan `Alert System` membuat squad bisa berbagi informasi dan membagi tugas.
- `Perception`, `Memory`, `Tactical Decision`, `NavMeshAgent`, dan `Combat` membentuk alur keputusan dan eksekusi di tiap agen.
- Arsitektur ini membantu agen bereaksi secara individu, tetap terkoordinasi, dan memilih posisi yang lebih taktis.

### Transisi ke Slide Berikutnya

Dengan arsitektur ini, kita sudah melihat bagaimana komponen-komponen sebelumnya dirangkai menjadi satu sistem squad. Selanjutnya, kita akan merangkum seluruh materi agar mahasiswa dapat melihat hubungan antara perception, memory, decision, positioning, navigation, dan koordinasi.

---

## Slide 083 - Ringkasan Materi

### Narasi

Slide ini menjadi penutup materi hari ini. Tujuannya bukan menambah topik baru, tetapi membantu mahasiswa melihat keseluruhan alur dari perilaku agen hingga kerja sama tim. Diagram yang ditampilkan menunjukkan bahwa materi ini bergerak dari kemampuan dasar agen menuju sistem taktis yang lebih kompleks.

Secara garis besar, topik yang dibahas dapat dikelompokkan menjadi dua lapisan:

- **Lapisan agen individual**: `Perception`, `Memory`, `Target Selection`, `Cover`, `Cover Point`, `Cover Selection`, `Tactical Positioning`, dan `Flanking`. Kelompok ini menjelaskan bagaimana satu agen dapat mengamati lingkungan, mengingat informasi, memilih target, mencari posisi aman, dan memperbaiki sudut serangan.
- **Lapisan squad**: `Coordination`, `Shared Blackboard`, `Squad Manager`, `Role Assignment`, `Attack Slot`, dan `Squad / Enemy System`. Kelompok ini menjelaskan bagaimana beberapa agen dapat berbagi informasi, membagi peran, mengatur slot serangan, dan menghindari konflik posisi.

Kalimat kunci dari slide ini adalah bahwa perilaku taktis tidak muncul dari satu komponen saja. Ia muncul dari integrasi antara **perception**, **memory**, **decision**, **positioning**, **navigation**, dan **koordinasi antar-agent**. Dengan cara pandang ini, mahasiswa tidak perlu melihat setiap istilah sebagai fitur terpisah, melainkan sebagai bagian dari satu sistem yang saling mendukung.

Sebelum lanjut, hal yang perlu dipahami adalah bahwa kualitas perilaku taktis bergantung pada hubungan antar-komponen. Jika agen tidak memiliki `Memory`, keputusannya akan mudah berulang. Jika squad tidak memiliki `Shared Blackboard`, koordinasi akan lemah. Jika `Role Assignment` dan `Attack Slot` tidak diatur, beberapa agen dapat berebut posisi yang sama.

### Inti yang Harus Ditekankan

- Perilaku taktis adalah hasil **integrasi**, bukan satu algoritma tunggal.
- `Perception`, `Memory`, `Target Selection`, `Cover`, dan `Tactical Positioning` membentuk kemampuan dasar agen.
- `Shared Blackboard`, `Squad Manager`, `Role Assignment`, dan `Attack Slot` membentuk kemampuan kerja sama squad.
- `Flanking` dan `Cover Selection` membuat perilaku musuh terasa lebih taktis dan tidak sekadar mengejar pemain.

### Transisi ke Slide Berikutnya

Setelah ringkasan ini, kita akan menguji pemahaman melalui pertanyaan diskusi. Pertanyaan-pertanyaan tersebut akan membantu memperjelas alasan di balik setiap komponen, mulai dari pentingnya `Memory`, validasi `Cover`, manfaat `Shared Blackboard`, hingga peran `Behavior Tree` dan `utility-based decision` dalam memilih tindakan taktis.

---

## Slide 084 - Pertanyaan Diskusi

### Narasi

Slide ini digunakan untuk menguji apakah mahasiswa sudah melihat **Tactical AI** sebagai satu sistem yang saling terhubung, bukan kumpulan fitur yang berdiri sendiri. Sepuluh pertanyaan di slide ini sengaja disusun agar mahasiswa menghubungkan kembali **perception**, **memory**, **decision**, **positioning**, dan **coordination** yang baru saja dirangkum.

Pertanyaan pertama dan kedua mengajak mahasiswa membedakan antara **mengetahui target** dan **memilih target**. `target detection` adalah proses mengenali bahwa ada objek yang relevan, misalnya player atau musuh lain, berdasarkan sensor atau data dunia. `target selection` adalah keputusan taktis untuk menentukan target mana yang paling layak ditembak, dikejar, atau diabaikan berdasarkan jarak, ancaman, prioritas, dan `memory` agent.

Pertanyaan ketiga dan keempat membahas **cover** sebagai keputusan spasial. Cover tidak cukup hanya dekat atau terlihat aman; ia harus divalidasi dengan `raycast` untuk memastikan tidak ada garis tembak yang terbuka ke player. Jika dua `enemy` memilih `cover` yang sama, mereka bisa menumpuk, saling menghalangi, dan membuat formasi squad terlihat tidak natural. Oleh karena itu, pemilihan cover perlu mempertimbangkan jarak antar-agent dan ketersediaan posisi.

Pertanyaan kelima sampai ketujuh mengarah pada **koordinasi squad**. `shared blackboard` memungkinkan agent menyimpan dan membaca informasi bersama, seperti posisi terakhir player, ancaman, atau status serangan. `local decision` adalah keputusan yang diambil satu agent berdasarkan kondisi dirinya, sedangkan `group decision` adalah keputusan yang mempertimbangkan peran dan tujuan squad. `role assignment` membuat squad lebih menarik karena setiap `agent` memiliki perilaku berbeda, misalnya attacker, flanker, atau cover shooter, sehingga interaksi antar-enemy terasa lebih hidup.

Pertanyaan terakhir membahas **mekanisme pengambilan keputusan**. `decision interval` penting agar agent tidak terus-menerus menghitung keputusan setiap frame, yang bisa membuat perilaku tidak stabil dan mahal secara komputasi. `Behavior Tree` cocok untuk Tactical AI karena dapat menyusun `action` taktis secara hierarkis, misalnya cari cover, pilih target, lalu serang. `Utility AI` berguna ketika beberapa action taktis harus dibandingkan berdasarkan skor, sehingga agent memilih action dengan nilai utilitas tertinggi pada kondisi saat itu.

Sebelum lanjut, mahasiswa perlu memahami bahwa Tactical AI yang baik tidak hanya membuat satu enemy bergerak cerdas, tetapi membuat sekelompok enemy saling melengkapi, tidak menumpuk, dan tetap responsif terhadap perubahan situasi.

### Inti yang Harus Ditekankan

- **Memory** membuat Tactical AI mampu mengingat informasi masa lalu, bukan hanya bereaksi pada frame saat ini.
- **Target detection** dan **target selection** adalah dua tahap berbeda: deteksi mengenali target, seleksi memilih target yang paling relevan.
- **Cover** harus divalidasi secara spasial, misalnya dengan `raycast`, dan dipilih agar tidak membuat agent menumpuk.
- **Shared blackboard**, **role assignment**, dan **group decision** membantu squad berperilaku terkoordinasi, bukan sekadar banyak agent yang bergerak sendiri.
- **Behavior Tree** dan **Utility AI** adalah dua cara berbeda untuk memilih `action` taktis: satu berbasis struktur keputusan, satu berbasis penilaian skor.

### Transisi ke Slide Berikutnya

Setelah pertanyaan ini dibahas, kita akan masuk ke latihan konsep: merancang squad enemy sederhana dengan tiga `agent` yang memiliki peran berbeda, lalu menentukan data, cover, target, dan koordinasi yang dibutuhkan.

---

## Slide 085 - Latihan Konsep

### Narasi

Slide ini mengajak mahasiswa merancang **squad enemy** sederhana yang terdiri dari tiga agent. Tujuannya bukan membuat sistem yang rumit, tetapi melatih cara menghubungkan **perception**, **memory**, **role**, **cover**, **target selection**, dan **coordination** dalam satu desain yang bisa diimplementasikan.

```text
Enemy 1: Attacker
Enemy 2: Flanker
Enemy 3: Cover Shooter
```

Tiga role ini mewakili pola taktis dasar: satu agent memberi tekanan langsung, satu agent mencari posisi samping, dan satu agent bertahan dari posisi aman. Mahasiswa perlu menentukan data apa yang dibaca agent, data apa yang disimpan, dan bagaimana keputusan dibuat agar squad tidak bergerak seperti satu objek tunggal.

Untuk menjawab latihan ini, gunakan delapan keputusan berikut:

1. **Data perception**  
   Agent perlu membaca informasi lingkungan yang relevan, misalnya `playerPosition`, `distanceToPlayer`, `lineOfSight`, `visibleCoverPoints`, `enemyPositions`, dan `threatLevel`. Data ini menjadi input keputusan, bukan sekadar posisi player.

2. **Data memory**  
   Agent harus menyimpan informasi penting, seperti `lastKnownPlayerPosition`, `lastSeenTime`, `assignedCoverPoint`, `currentTarget`, `role`, dan `squadStatus`. Memory membuat agent tetap bertindak masuk akal meskipun player hilang dari pandangan.

3. **Role masing-masing enemy**  
   - `Attacker`: mendekati player dan memberi tekanan langsung.  
   - `Flanker`: mencari posisi samping atau belakang untuk mengurangi risiko player.  
   - `Cover Shooter`: memilih cover, menembak dari posisi aman, dan berpindah cover bila perlu.

4. **Cara memilih cover**  
   Cover dipilih berdasarkan jarak, validitas, dan kesesuaian role. Cover harus bisa dijangkau, tidak sedang dipakai agent lain, dan mampu memblokir `lineOfSight` dari player. Untuk `Cover Shooter`, cover lebih penting daripada jarak dekat.

5. **Cara memilih target**  
   Squad sebaiknya memiliki `sharedTarget` agar tidak saling bertentangan. Target dapat dipilih berdasarkan jarak, visibilitas, ancaman, atau prioritas role. `Attacker` bisa memilih target terdekat, sedangkan `Flanker` bisa memilih target yang memberi peluang posisi samping.

6. **Cara mencegah enemy menumpuk**  
   Gunakan aturan **separation** dan **role offset**. Setiap agent harus memiliki `desiredSeparation`, cover yang berbeda, atau posisi tujuan yang tidak sama. Jika dua agent ingin cover yang sama, agent yang lebih dekat atau lebih sesuai role mendapat prioritas.

7. **Cara squad berbagi informasi player**  
   Gunakan struktur bersama seperti `sharedBlackboard` atau `squadData`. Di dalamnya bisa disimpan `lastKnownPlayerPosition`, `squadTarget`, `coverOccupied`, dan `threatLevel`. Setiap agent membaca dan memperbarui data ini secara terbatas.

8. **Action utama setiap role**  
   - `Attacker`: `moveToPlayer`, `attack`, `reposition` bila terlalu dekat.  
   - `Flanker`: `findFlankPosition`, `moveToFlank`, `attack` bila posisi aman.  
   - `Cover Shooter`: `selectCover`, `moveToCover`, `shootFromCover`, `switchCover`.

Dengan rancangan ini, mahasiswa dapat melihat bahwa **tactical squad** tidak selalu membutuhkan algoritma besar. Yang penting adalah data yang tepat, memory yang jelas, pembagian role yang konsisten, dan koordinasi yang sederhana.

### Inti yang Harus Ditekankan

- **Perception** adalah input: agent harus tahu posisi player, jarak, visibilitas, cover, dan posisi agent lain.
- **Memory** membuat agent tetap konsisten: simpan `lastKnownPlayerPosition`, `assignedCoverPoint`, dan `currentTarget`.
- **Role** menentukan perilaku: `Attacker` menekan, `Flanker` mencari sisi, `Cover Shooter` bertahan dari cover.
- **Coordination** mencegah konflik: gunakan `sharedBlackboard`, `sharedTarget`, dan aturan `desiredSeparation`.
- Desain harus bisa diuji: setiap keputusan harus menghasilkan action yang jelas dan tidak menumpuk.

### Transisi ke Slide Berikutnya

Setelah latihan ini, mahasiswa sudah memiliki kerangka squad sederhana yang bisa dijadikan dasar praktikum. Selanjutnya kita menutup pertemuan dengan gambaran topik praktikum dan arah integrasi movement, navigation, perception, dan decision making.

---

## Slide 086 - Penutup

### Narasi

Kita menutup pertemuan ini dengan menempatkan kembali **sistem taktis** sebagai satu kesatuan, bukan kumpulan aturan yang berdiri sendiri. Intuisi pentingnya adalah: perilaku taktis yang baik biasanya lahir dari **perception**, **memory**, dan **decision making** yang saling terhubung. Agent tidak perlu langsung memakai algoritma yang rumit; yang lebih penting adalah data yang tepat, aturan yang jelas, dan koordinasi antar-agent yang konsisten.

Praktikum detail akan dibuat terpisah dengan topik:

```text
Squad / Enemy AI Sederhana
```

Fokus praktikum ini adalah membangun dasar yang bisa langsung diuji di Unity, yaitu:

- **perception** untuk mengetahui posisi player atau ancaman,
- **memory** untuk menyimpan informasi penting,
- **shared target** agar squad memiliki tujuan yang sama,
- **cover point** untuk memilih posisi perlindungan,
- **tactical positioning** agar agent tidak menumpuk,
- **coordination antar-agent** agar peran saling melengkapi,
- `Unity NavMeshAgent` untuk movement dan navigation yang stabil.

Setelah praktikum ini, rencana pembelajaran berikutnya masuk ke:

```text
UTS / Mini Project
```

Pada tahap itu, mahasiswa diharapkan mengintegrasikan **movement**, **navigation**, **perception**, dan **decision making** menjadi satu sistem yang bisa berjalan dalam scene game. Jadi, pertemuan ini bukan sekadar teori; ia menjadi jembatan menuju implementasi yang lebih utuh.

Sebagai penekanan terakhir, **sistem taktis** dapat dimulai dari aturan sederhana yang terintegrasi dengan baik: melihat target, mengingat posisi, memilih cover, mengambil posisi, dan berbagi informasi dengan agent lain. Urutan pembelajaran yang disarankan juga menegaskan bahwa fondasi seperti **perception** dan **memory** harus kuat sebelum masuk ke koordinasi squad yang lebih kompleks.

### Inti yang Harus Ditekankan

- **Sistem taktis** lebih penting sebagai sistem yang terintegrasi daripada sebagai satu algoritma yang rumit.
- Fondasi utama adalah **perception**, **memory**, **shared target**, **cover point**, **tactical positioning**, dan **coordination antar-agent**.
- Praktikum akan berfokus pada `Squad / Enemy AI Sederhana` dengan dukungan `Unity NavMeshAgent`.
- Tahap berikutnya adalah `UTS / Mini Project` yang mengintegrasikan movement, navigation, perception, dan decision making.

### Transisi ke Slide Berikutnya

Dengan penutup ini, kita siap melangkah ke praktikum terpisah dan kemudian ke UTS / Mini Project, di mana seluruh komponen yang sudah dibahas akan diuji sebagai satu sistem game cerdas yang lebih utuh.
