# Slide 1 — Cover

## Game AI Integration & Tactical AI

**Game Cerdas — Pertemuan 7**

**Dr. Darlis Herumurti**

Departemen Teknik Informatika  
Institut Teknologi Sepuluh Nopember

---

# Slide 2 — Capaian Pembelajaran

Setelah pertemuan ini, diharapkan mampu:

- Menjelaskan hubungan perception, memory, decision, navigation, dan movement.
- Menjelaskan pemilihan target, cover, dan posisi taktis.
- Menganalisis koordinasi antar-agent melalui data bersama dan pembagian peran.
- Menjelaskan integrasi Tactical AI dengan Behavior Tree dan Utility AI.
- Mengidentifikasi masalah konsistensi informasi, stabilitas keputusan, dan performa.

---

# Slide 3 — Integrasi Komponen Game AI

Komponen dari pertemuan sebelumnya menjadi dasar perilaku taktis.

| Komponen | Kontribusi |
|---|---|
| Perception dan memory | Mengetahui situasi dan menyimpan informasi |
| Movement dan steering | Menggerakkan agent dan mengatur gerak lokal |
| Pathfinding dan navigation | Menentukan jalur menuju tujuan |
| Finite State Machine | Mengatur state dan transisi perilaku |
| Behavior Tree dan Utility AI | Mengatur eksekusi atau memilih aksi |

**Integrasi menyatukan komponen tersebut melalui pertukaran data dan pembagian tanggung jawab yang jelas.**

---

# Slide 4 — Game AI Integration

**Game AI Integration** adalah penggabungan modul AI menjadi sistem perilaku NPC yang utuh.

- Sensor menghasilkan informasi tentang lingkungan.
- Memory menyimpan informasi yang masih relevan.
- Decision system menentukan target dan tindakan.
- Navigation, movement, combat, dan animation menjalankan tindakan.
- Coordination menyelaraskan tindakan beberapa agent.

Contoh: NPC mendeteksi ancaman, mengingat lokasinya, memilih cover, bergerak, lalu menyerang saat kondisi memungkinkan.

---

# Slide 5 — Tactical AI

**Tactical AI** memilih tindakan berdasarkan posisi, peluang, dan risiko dalam situasi permainan.

| Aspek | Contoh pertimbangan |
|---|---|
| Ancaman | Target mana yang paling berbahaya? |
| Posisi | Di mana agent dapat menyerang dengan aman? |
| Kondisi agent | Apakah health dan kemampuan tempur mencukupi? |
| Lingkungan | Apakah tersedia cover dan jalur yang dapat dilalui? |
| Kelompok | Siapa menyerang, melakukan flank, atau bertahan? |

Contoh: satu enemy menekan dari depan sementara enemy lain mendekati sisi target.

---

# Slide 6 — Keputusan Dasar dan Keputusan Taktis

| Situasi | Respons dasar | Pertimbangan taktis |
|---|---|---|
| Target terlihat | Mengejar | Memilih target dan posisi pendekatan |
| Target dalam jangkauan | Menyerang | Memeriksa garis tembak dan keterpaparan |
| Health rendah | Menjauh | Memilih jalur mundur atau cover yang aman |
| Target menghilang | Mencari atau kembali patrol | Menggunakan memory dan informasi squad |

FSM, Behavior Tree, maupun Utility AI dapat mengatur perilaku taktis. Kualitas perilaku bergantung pada informasi dan aturan yang digunakan.

---

# Slide 7 — Arsitektur Modular Tactical AI

| Modul | Tanggung jawab |
|---|---|
| Perception | Mendeteksi target dan kejadian |
| Memory | Menyimpan posisi, waktu, dan informasi ancaman |
| Tactical decision | Memilih target, aksi, dan posisi |
| Navigation dan movement | Mencapai posisi tujuan |
| Combat dan animation | Menjalankan serta menampilkan aksi |
| Coordination | Membagikan informasi dan mengelola pembagian tugas |

Setiap modul memiliki input dan output yang jelas sehingga kesalahan lebih mudah ditelusuri.

---

# Slide 8 — Siklus Informasi dan Tindakan

1. **Mengamati:** sensor membaca keadaan lingkungan.
2. **Mengingat:** informasi baru memperbarui memory.
3. **Mengevaluasi:** agent menilai target, risiko, dan posisi.
4. **Memutuskan:** sistem memilih tindakan yang memenuhi kondisi.
5. **Bertindak:** agent bergerak, menyerang, atau bertahan.
6. **Mengevaluasi ulang:** hasil tindakan dan perubahan situasi menjadi masukan berikutnya.

**Koordinasi dapat terjadi sepanjang siklus**, misalnya saat melaporkan target atau memesan cover sebelum bergerak.

---

# Slide 9 — Perception Visual

Target terlihat apabila memenuhi tiga pemeriksaan:

- **Vision range:** target berada dalam jarak pengamatan.
- **Field of View (FOV):** target berada dalam sudut pandang agent.
- **Line of Sight (LOS):** tidak ada penghalang pandangan menuju target.

Pemeriksaan dimulai dari jarak dan sudut, kemudian dilanjutkan dengan uji penghalang.

Contoh: target dekat tetap tidak terlihat jika berada di belakang agent atau tertutup dinding.

---

# Slide 10 — Line of Sight dan Informasi Nonvisual

**LOS** menguji apakah jalur pandang dari mata agent menuju titik pengamatan target terhalang.

- Pemeriksaan penghalang dibatasi sampai posisi target.
- Penghalang di belakang target tidak boleh membatalkan visibility.
- Suara, damage event, dan laporan teman dapat memicu kewaspadaan tanpa kontak visual.
- Informasi nonvisual memiliki ketelitian berbeda dari pengamatan langsung.

Contoh: suara tembakan memberi petunjuk lokasi ancaman, tetapi belum memastikan bahwa target dapat ditembak.

---

# Slide 11 — Memory dan Last Known Position

**Memory** menyimpan informasi yang pernah diketahui agent.

| Data | Makna |
|---|---|
| Last known position | Posisi terakhir target yang diketahui |
| Last seen time | Waktu terakhir target terlihat |
| Last heard position | Lokasi sumber suara terakhir |
| Information source | Asal informasi, misalnya sensor atau laporan squad |

Ketika target menghilang, agent dapat menuju posisi terakhir dan mencari di sekitarnya.

**Posisi terakhir merupakan informasi historis, bukan jaminan posisi target saat ini.**

---

# Slide 12 — Masa Berlaku Memory dan Alert Level

Informasi menjadi kurang dapat diandalkan seiring waktu. **Memory timeout** membatasi masa berlakunya.

Contoh aturan: informasi kedaluwarsa jika waktu sejak pengamatan terakhir melebihi durasi memory.

| Alert level | Respons umum |
|---|---|
| Calm | Patrol atau guard |
| Suspicious | Memeriksa petunjuk suara atau kejadian |
| Alert | Mencari ancaman berdasarkan informasi yang tersedia |
| Combat | Menjalankan tindakan tempur |

Level kewaspadaan berubah mengikuti bukti baru dan hasil pencarian.

---

# Slide 13 — Target Selection

**Target selection** menentukan target yang paling relevan dari kandidat yang diketahui agent.

- Detection menghasilkan kandidat target.
- Validasi menyingkirkan kandidat yang tidak sesuai, misalnya sudah mati atau bukan lawan.
- Evaluasi mempertimbangkan jarak, visibility, ancaman, dan objektif.
- Pemilihan akhir menyesuaikan kemampuan dan peran agent.

Contoh: melee enemy mengutamakan lawan yang dapat didekati, sedangkan ranged enemy mempertimbangkan garis tembak.

---

# Slide 14 — Pemilihan Target Berbasis Skor

Target terdekat mudah dipilih, tetapi jarak saja belum mewakili ancaman atau peluang menyerang.

Contoh skor berbobot:

**S = 0,4D + 0,4V + 0,2T**

- **D:** skor kedekatan, semakin dekat semakin tinggi.
- **V:** skor visibility.
- **T:** skor tingkat ancaman.
- Setiap faktor menggunakan skala yang sebanding, misalnya 0–1.

Target dengan skor tertinggi menjadi pilihan. Bobot merupakan contoh desain yang dapat disesuaikan dengan peran agent.

---

# Slide 15 — Contoh Evaluasi dan Stabilitas Target

Contoh perhitungan dengan bobot pada slide sebelumnya:

| Target | D | V | T | Skor akhir |
|---|---:|---:|---:|---:|
| A | 0,9 | 1,0 | 0,4 | 0,84 |
| B | 0,5 | 1,0 | 0,9 | 0,78 |
| C | 0,8 | 0,0 | 0,7 | 0,46 |

- Target A memiliki skor tertinggi pada contoh ini.
- Target yang tidak terlihat masih dapat menjadi tujuan pencarian berdasarkan memory.
- Aksi menembak tetap membutuhkan pemeriksaan kondisi tembak.
- Selisih skor minimum atau waktu komitmen membantu mencegah pergantian target terlalu sering.

---

# Slide 16 — Cover dan Cover Point

**Cover** adalah perlindungan terhadap serangan dari arah ancaman tertentu.

**Cover point** adalah posisi kandidat tempat agent berlindung.

Data yang relevan:

- Posisi dan arah perlindungan.
- Tinggi serta kualitas penghalang.
- Status pemesanan atau penggunaan.
- Ketersediaan posisi mengintip atau menembak.

Cover yang aman dari satu arah dapat terbuka terhadap serangan dari arah lain.

---

# Slide 17 — Validasi Cover

Sebelum memilih cover, agent perlu memeriksa:

1. **Perlindungan:** terdapat penghalang yang relevan antara tubuh agent dan ancaman.
2. **Keterjangkauan:** agent mempunyai jalur menuju cover.
3. **Ketersediaan:** cover tidak sedang dipesan agent lain.
4. **Kegunaan:** posisi mendukung aksi bertahan atau menyerang berikutnya.

Raycast dapat membantu menguji perlindungan. Satu ray hanya menguji satu garis sehingga belum mewakili seluruh tubuh agent.

---

# Slide 18 — Pemilihan dan Reservasi Cover

Setelah menyaring kandidat valid, agent membandingkan kualitasnya.

**Skor cover = perlindungan + peluang menembak − biaya perjalanan − keterpaparan**

- Gunakan faktor yang dinormalisasi dan bobot sesuai kebutuhan.
- Reservasi cover dilakukan sebelum agent bergerak menuju posisi tersebut.
- Simpan identitas pemilik reservasi untuk mencegah konflik.
- Lepaskan reservasi saat agent pindah, mati, atau membatalkan aksi.

Cover terdekat dapat kalah dari cover yang sedikit lebih jauh tetapi lebih aman.

---

# Slide 19 — Tactical Positioning

**Tactical positioning** memilih posisi yang mendukung tujuan agent dalam situasi tertentu.

Faktor penilaian:

- Tingkat perlindungan terhadap ancaman.
- Jarak yang sesuai dengan kemampuan serangan.
- Line of sight dan sudut serang.
- Jalur yang dapat dilalui.
- Jarak terhadap teman dan kebutuhan squad.

Posisi terbaik merupakan kompromi antara keamanan, efektivitas serangan, dan biaya perpindahan.

---

# Slide 20 — Attack Position dan Jarak Tempur

**Attack position** memungkinkan agent menyerang dengan jangkauan serta garis tembak yang sesuai.

| Kondisi ranged enemy | Respons yang mungkin |
|---|---|
| Terlalu jauh | Mendekati posisi serang |
| Dalam rentang ideal dan LOS tersedia | Menyerang atau mempertahankan posisi |
| Terlalu dekat | Mundur ke posisi yang lebih aman |
| LOS terhalang | Berpindah atau mencari sudut tembak |

Pada cover penuh, agent mungkin perlu mengintip atau berpindah ke titik tembak. Perlindungan dan kemampuan menembak harus diperiksa secara terpisah.

---

# Slide 21 — Flanking

**Flanking** adalah pendekatan dari sisi samping atau belakang target untuk memperoleh sudut serang yang menguntungkan.

- Agent penekan mempertahankan perhatian target dari arah utama.
- Flanker memilih kandidat posisi di sisi lain.
- Posisi kandidat harus dapat dicapai dan mendukung serangan.
- Jalur pendekatan juga perlu mempertimbangkan risiko keterpaparan.

Posisi di samping target hanya menjadi kandidat flank. Keberhasilan taktik tetap bergantung pada arah ancaman, lingkungan, dan tindakan squad.

---

# Slide 22 — Skor Posisi Taktis

Contoh model penilaian:

**S = w₁C + w₂L + w₃D + w₄P − w₅R**

| Faktor | Arti |
|---|---|
| C | Kualitas perlindungan |
| L | Peluang memperoleh garis tembak |
| D | Kesesuaian dengan jarak tempur ideal |
| P | Pemisahan posisi terhadap teman |
| R | Risiko atau biaya perjalanan |

Kandidat harus memenuhi syarat dasar sebelum diberi skor. Bobot dapat berbeda untuk attacker, flanker, dan agent defensif.

---

# Slide 23 — Koordinasi Antar-Agent

**Koordinasi** menyelaraskan tindakan beberapa NPC agar mendukung tujuan kelompok.

| Masalah | Mekanisme koordinasi |
|---|---|
| Agent menumpuk pada satu posisi | Pembagian posisi dan separation |
| Beberapa agent memilih cover yang sama | Reservasi cover |
| Semua agent menjalankan tugas identik | Pembagian peran |
| Informasi ancaman tidak tersebar | Shared memory dan group alert |

Fokus pada target yang sama dapat menjadi taktik yang disengaja. Pembagian target bergantung pada kebutuhan squad.

---

# Slide 24 — Shared Blackboard dan Shared Memory

**Shared blackboard** menyimpan data yang dapat diakses anggota squad.

- Target bersama dan posisi terakhir yang diketahui.
- Waktu serta sumber laporan pengamatan.
- Alert level dan daftar anggota aktif.
- Pembagian peran, cover, dan attack slot.

Shared memory merupakan bagian informasi bersama tentang lingkungan dan ancaman.

Agent tetap menggunakan sensor lokal. Laporan teman tidak otomatis berarti target terlihat langsung oleh semua anggota.

---

# Slide 25 — Role Assignment

**Role assignment** membagi tanggung jawab agent dalam kelompok.

| Role | Tugas utama |
|---|---|
| Attacker | Memberi tekanan dari arah utama |
| Flanker | Mendekati sisi target |
| Cover shooter | Menyerang dari posisi terlindung |
| Support atau guard | Mendukung anggota atau menjaga area |

Peran dapat bersifat tetap atau berubah mengikuti jarak, health, kemampuan senjata, dan kebutuhan squad.

Perubahan peran perlu mempertimbangkan tugas yang sedang berjalan agar perilaku tetap stabil.

---

# Slide 26 — Attack Slot dan Reservation

**Attack slot** adalah posisi atau area di sekitar target yang dapat dialokasikan kepada agent.

- Squad menentukan kandidat slot yang dapat dicapai.
- Agent meminta slot yang sesuai dengan perannya.
- Reservasi mencatat agent pemilik slot.
- Agent lain memilih slot yang masih tersedia.
- Slot dievaluasi ulang saat target bergerak atau situasi berubah.

Reservasi mencegah perebutan tujuan. Local avoidance dan separation membantu mengurangi tabrakan selama perjalanan.

---

# Slide 27 — Komunikasi dan Group Alert

Agent dapat mengirim laporan ketika peristiwa penting terjadi.

| Peristiwa | Informasi yang dibagikan |
|---|---|
| Target terlihat | Identitas, posisi, dan waktu pengamatan |
| Target hilang | Posisi terakhir dan waktu terakhir terlihat |
| Membutuhkan bantuan | Lokasi ancaman dan kebutuhan dukungan |
| Cover dilepas | Identitas cover yang kembali tersedia |

Group alert meningkatkan kesiapan anggota squad. Penerima laporan memilih respons berdasarkan informasi yang tersedia dan keadaan lokalnya.

---

# Slide 28 — Squad Manager dan Keputusan Lokal

| Tingkat squad | Tingkat agent |
|---|---|
| Menyimpan data bersama | Mengamati lingkungan sekitar |
| Membagi peran dan target | Memilih aksi sesuai kondisi pribadi |
| Mengatur reservasi posisi | Menentukan gerak dan orientasi lokal |
| Menyebarkan laporan ancaman | Memeriksa kelayakan serangan |

**Squad Manager** mengelola koordinasi tanpa harus mengendalikan setiap detail gerakan.

Contoh: squad menugaskan flank, tetapi agent dapat membatalkannya jika jalur tidak tersedia atau keselamatannya terancam.

---

# Slide 29 — Integrasi dengan Behavior Tree

Behavior Tree mengatur urutan dan prioritas eksekusi aksi berdasarkan data taktis.

Contoh cabang pada **Selector prioritas**, dari prioritas tinggi ke rendah:

1. **Retreat:** kondisi kritis dan tersedia tujuan mundur.
2. **Take Cover:** terpapar ancaman dan tersedia cover valid.
3. **Flank:** memiliki peran flanker dan manuver masih diperlukan.
4. **Attack:** target memenuhi syarat serangan.
5. **Search:** memory target masih valid.
6. **Patrol:** tidak ada kebutuhan yang lebih mendesak.

Setiap cabang menggunakan Sequence untuk memeriksa kondisi lalu menjalankan aksi. Prioritas dan aturan interupsi menentukan kapan aksi dapat berganti.

---

# Slide 30 — Integrasi dengan Utility AI

Utility AI menilai kelayakan setiap aksi dan memilih skor tertinggi.

Contoh faktor:

- **Take Cover:** kebutuhan perlindungan, keterpaparan, dan ketersediaan cover.
- **Attack:** LOS, jarak efektif, dan kesiapan menyerang.
- **Flank:** peran agent, peluang sudut serang, dan keamanan jalur.
- **Retreat:** kondisi health dan besarnya ancaman.

Contoh skor ilustratif: Attack **0,55**, Take Cover **0,88**, Flank **0,40**, Retreat **0,70**.

Agent memilih **Take Cover**. Aksi yang tidak memenuhi syarat dasar dikeluarkan sebelum perbandingan skor.

---

# Slide 31 — Integrasi Navigation, Movement, dan Animation

- Tactical AI menetapkan posisi tujuan berdasarkan situasi.
- Navigation memeriksa serta mencari jalur menuju posisi tersebut.
- Movement menggerakkan agent dan menangani penghindaran lokal.
- Combat memeriksa jangkauan, garis tembak, dan kesiapan aksi.
- Animation menampilkan gerakan serta perubahan perilaku secara konsisten.

Dalam konteks NavMesh, posisi yang berada di permukaan navigasi belum tentu dapat dicapai dari posisi agent. Keterhubungan jalur tetap perlu diperiksa.

---

# Slide 32 — Stabilitas Keputusan dan Performa

Keputusan taktis dapat diperbarui secara berkala dan saat terjadi peristiwa penting.

- Gunakan interval untuk perception dan evaluasi taktis.
- Picu evaluasi ulang saat target berpindah, cover tidak aman, atau anggota squad gugur.
- Gunakan ambang perubahan skor dan durasi aksi minimum untuk mengurangi pergantian berulang.
- Izinkan kondisi darurat menghentikan aksi yang sedang berjalan.
- Batasi kandidat posisi, simpan data yang dapat digunakan ulang, dan hindari perhitungan jalur yang tidak diperlukan.

Frekuensi pembaruan menyeimbangkan respons, kestabilan perilaku, dan biaya komputasi.

---

# Slide 33 — Contoh Serangan Squad Terkoordinasi

Situasi: tiga enemy menghadapi target di area dengan beberapa penghalang.

| Agent | Peran | Tindakan |
|---|---|---|
| A | Attacker | Menekan target dari arah utama |
| B | Flanker | Mengambil jalur menuju sisi target |
| C | Cover shooter | Memesan cover dan menyerang saat garis tembak tersedia |

Pengamatan satu agent memperbarui informasi squad. Setiap agent memvalidasi posisi dan kelayakan aksinya sendiri.

Ketika target menghilang, squad menggunakan posisi terakhir untuk pencarian. Saat cover tidak aman atau anggota gugur, pembagian tugas dievaluasi ulang.

---

# Slide 34 — Ringkasan dan Evaluasi Tactical AI

**Tactical AI menghubungkan informasi, keputusan, posisi, dan koordinasi kelompok.**

- Perception dan memory menyediakan informasi yang memiliki sumber serta masa berlaku.
- Target selection dan positioning menyeimbangkan ancaman, peluang, dan risiko.
- Cover, role, dan reservasi membantu squad membagi ruang serta tugas.
- Behavior Tree atau Utility AI mengatur aksi yang dijalankan komponen navigasi dan combat.

Evaluasi utama: apakah keputusan sesuai informasi yang diketahui, posisi dapat dicapai, reservasi konsisten, dan pergantian aksi tetap stabil?

---

# Slide 35 — Penutup

## TERIMA KASIH
