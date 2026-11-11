# Game Cerdas — Pertemuan 9

## Procedural Content Generation (PCG)

**Program Studi S1 Teknik Informatika — Institut Teknologi Sepuluh Nopember**  
**Dosen:** Dr. Darlis Herumurti  
**Konteks implementasi:** Unity 6 + C#  
**Jumlah:** 45 slide, termasuk cover dan penutup. Rencana praktikum hanya pada Slide 43.

---

# Slide 1 — Cover

## Procedural Content Generation
### Algoritma, Randomness, dan Kontrol Desain

**Game Cerdas — Pertemuan 9**  
**Dr. Darlis Herumurti**  
Program Studi S1 Teknik Informatika — ITS

---

# Slide 2 — Dari Perilaku NPC ke Generasi Konten

- Pertemuan 1–7 membahas perception, movement, pathfinding, decision, dan tactical AI.
- Pertemuan 8 mengintegrasikan konsep tersebut melalui UTS / mini project.
- Pertemuan 9 memperkenalkan **Content Intelligence**: algoritma untuk menghasilkan konten game.
- PCG melengkapi AI perilaku: NPC mengambil keputusan di lingkungan yang dapat dibentuk secara procedural.

**Perluasan fokus:** dari cara agent bertindak menuju cara konten game dihasilkan.

---

# Slide 3 — Capaian Pembelajaran

Setelah pembelajaran, mampu:

1. Menjelaskan PCG dan perbedaannya dari random murni.
2. Menggunakan konsep probability, weighted random, seed, dan reproducibility.
3. Membandingkan constructive dan generate-and-test PCG.
4. Mengklasifikasikan PCG melalui beberapa dimensi taxonomy.
5. Merancang parameter, constraint, dan evaluasi untuk spawning atau level sederhana.

---

# Slide 4 — Mengapa PCG Dibutuhkan?

- Produksi level, musuh, item, dan dekorasi secara manual membutuhkan waktu.
- Banyak game memerlukan variasi konten untuk permainan berulang.
- PCG membantu memperluas variasi melalui algoritma dan aturan yang dapat digunakan kembali.
- Investasi awal tetap diperlukan untuk membangun generator, menguji hasil, dan melakukan tuning.

**Tujuan:** menghasilkan variasi yang sesuai dengan pengalaman bermain yang dirancang.

---

# Slide 5 — Definisi dan Ruang Lingkup PCG

**Procedural Content Generation** adalah pembuatan konten game secara otomatis menggunakan algoritma, dengan tingkat keterlibatan manusia yang dapat bervariasi.

| Kelompok konten | Contoh |
|---|---|
| Ruang | Level, dungeon, terrain, layout ruangan |
| Entitas | Enemy, item, NPC, resource |
| Tantangan dan tujuan | Quest, objective, encounter |
| Estetika | Vegetasi, dekorasi, variasi visual |

PCG tidak harus menggunakan machine learning dan tidak selalu membutuhkan randomness.

---

# Slide 6 — Contoh Penggunaan dalam Game

| Jenis game | Contoh konten procedural |
|---|---|
| Roguelike / dungeon crawler | Susunan ruangan dan encounter setiap run |
| Survival / sandbox | Terrain, vegetasi, dan distribusi resource |
| Endless runner | Susunan segmen lintasan dan obstacle |
| Loot-based RPG | Jenis, rarity, dan atribut item |
| Strategy | Peta, posisi awal, dan distribusi resource |

**Prinsip:** generator dipilih berdasarkan kebutuhan gameplay dan jenis kontennya.

---

# Slide 7 — Manual Content dan Procedural Content

| Aspek | Manual | Procedural |
|---|---|---|
| Cara produksi | Designer membuat konten langsung | Algoritma menghasilkan konten |
| Kontrol detail | Langsung pada setiap elemen | Melalui aturan dan parameter |
| Variasi | Bertambah melalui pekerjaan desain | Bertambah melalui proses generation |
| Biaya awal | Pembuatan konten | Pengembangan dan pengujian generator |
| Risiko kualitas | Tetap perlu playtesting | Perlu menguji banyak kemungkinan hasil |

Keduanya dapat dipadukan: ruangan buatan designer disusun secara procedural.

---

# Slide 8 — PCG Bukan Sekadar Random

PCG dapat memadukan:

- **Algoritma:** cara membangun konten.
- **Parameter:** pengendali ukuran, jumlah, dan kepadatan.
- **Randomness:** sumber variasi jika diperlukan.
- **Constraint:** syarat yang harus dipenuhi.
- **Validasi:** pemeriksaan hasil terhadap syarat desain.

**Contoh:** posisi enemy bervariasi, tetapi harus berada di area valid dan di luar zona aman player.

---

# Slide 9 — Randomness dalam Game

**Randomness** memberikan variasi pada hasil atau kejadian.

- Posisi enemy dan item.
- Pemilihan jenis musuh atau reward.
- Susunan obstacle dan bentuk level.
- Variasi event dan dekorasi.

Dalam perangkat lunak, variasi umumnya berasal dari **pseudorandom number generator (PRNG)**: urutan bilangan yang dihasilkan secara algoritmis.

**Perhatian:** hasil acak dapat berulang dan tidak otomatis tersebar merata dalam sampel kecil.

---

# Slide 10 — Rentang Nilai dan Posisi Acak

Konsep pemilihan nilai acak di Unity:

- `Random.Range(0, 5)` memilih integer 0, 1, 2, 3, atau 4.
- `Random.Range(0f, 5f)` memilih float pada rentang 0 hingga 5; batas atas dapat termasuk.
- Dua nilai acak untuk sumbu X dan Z dapat membentuk kandidat posisi di arena.

**Contoh area:** X antara −10 dan 10, Z antara −10 dan 10.

Posisi tersebut masih perlu diperiksa: mungkin berada di dalam obstacle, bertumpuk, atau terlalu dekat dengan player.

---

# Slide 11 — Controlled Randomness

**Controlled randomness** membatasi variasi acak melalui aturan desain.

| Elemen | Contoh batasan |
|---|---|
| Enemy | Di luar radius aman player |
| Item | Pada lokasi yang dapat diakses |
| Boss | Di area akhir dengan ruang yang memadai |
| Obstacle | Tidak memutus jalur utama |

Kandidat diterima jika memenuhi aturan; kandidat yang gagal ditolak, diperbaiki, atau diganti.

**Hasil yang diharapkan:** bervariasi sekaligus tetap sesuai tujuan gameplay.

---

# Slide 12 — Probability dan Distribusi Konten

Probability menentukan peluang pemilihan konten.

| Rarity item | Peluang |
|---|---:|
| Common | 70% |
| Rare | 25% |
| Legendary | 5% |

- Untuk pilihan yang saling eksklusif dan lengkap, total peluang adalah 100%.
- Peluang 5% tidak berarti tepat satu Legendary muncul setiap 20 percobaan.
- Distribusi aktual perlu diamati pada banyak percobaan.

---

# Slide 13 — Weighted Random

**Weighted random** memilih kandidat berdasarkan bobot relatif.

| Item | Bobot | Peluang |
|---|---:|---:|
| Coin | 70 | 70% |
| Potion | 20 | 20% |
| Sword | 8 | 8% |
| Legendary Gem | 2 | 2% |

**Peluang kandidat = bobot kandidat / total bobot.**

Bobot tidak harus berjumlah 100. Gunakan bobot nonnegatif dengan total lebih dari nol.

---

# Slide 14 — Randomness dan Fairness

Hasil acak dapat menghasilkan pengalaman yang terasa tidak adil:

- Reward buruk muncul berulang.
- Enemy kuat terkumpul di dekat start.
- Resource terlalu sedikit untuk menyelesaikan tantangan.

Cara mengendalikan:

- **Pity system:** meningkatkan peluang atau menjamin reward setelah kondisi tertentu.
- **Difficulty budget:** membatasi total kekuatan encounter.
- **Safe zone dan kuota:** mengatur jarak serta kepadatan konten.

Fairness perlu dievaluasi berdasarkan konteks gameplay dan playtesting.

---

# Slide 15 — Seed dan Reproducibility

**Seed** adalah nilai awal yang digunakan untuk menginisialisasi generator pseudorandom.

**Reproducibility** berarti hasil generation dapat diulang dalam kondisi yang sama.

- Seed 1001 dapat digunakan untuk mengulang konfigurasi level tertentu.
- Seed berbeda memberi kesempatan menghasilkan variasi lain; hasilnya tidak harus selalu berbeda.
- Pengulangan membutuhkan algoritma, parameter, urutan pemanggilan random, serta kondisi generator yang konsisten.

**Manfaat:** debugging, pengujian, berbagi level, dan challenge berbasis seed.

---

# Slide 16 — Pengelolaan Generator Random di Unity

| Pilihan | Karakteristik | Pertimbangan |
|---|---|---|
| `UnityEngine.Random` | State bersama; diinisialisasi melalui `Random.InitState(seed)` | Pemanggilan dari sistem lain dapat mengubah urutan |
| `System.Random` | Memiliki instance generator tersendiri | Memudahkan pemisahan urutan random per sistem |

- Pisahkan generator level, loot, atau dekorasi bila membutuhkan isolasi.
- Tetapkan urutan generation agar pengujian dapat diulang.
- Jangan mengasumsikan hasil identik lintas perubahan algoritma atau versi runtime tanpa pengujian.

---

# Slide 17 — Seed untuk Debugging dan Pengujian

**Kasus:** level dengan seed 8421 memiliki goal yang terisolasi.

1. Simpan seed, parameter, dan versi generator.
2. Jalankan ulang kondisi yang sama.
3. Tampilkan hasil grid dan jalur pemeriksaan.
4. Analisis penyebab kegagalan, lalu perbaiki aturan.

Uji ulang seed bermasalah setelah perbaikan dan periksa seed lain untuk menemukan kasus tambahan.

**Catatan:** pengulangan seed membantu diagnosis; perbaikan algoritma dapat mengubah hasil levelnya.

---

# Slide 18 — Parameter dan Kontrol Designer

| Tujuan desain | Contoh parameter |
|---|---|
| Mengatur jumlah konten | `enemyCount`, `itemCount` |
| Mengatur ruang | Ukuran arena, ukuran grid, ukuran tile |
| Menjaga keamanan spawn | Jarak minimum, radius pemeriksaan |
| Mengatur variasi | Bobot jenis enemy, peluang wall |
| Membatasi proses | `maxAttempts`, batas percobaan generation |

Parameter sebaiknya memiliki nama, rentang, dan dampak yang jelas.

**Designer menentukan ruang variasi; generator menghasilkan konten di dalamnya.**

---

# Slide 19 — Pipeline PCG

1. **Tentukan input:** tujuan desain, parameter, dan seed.
2. **Bangun kandidat:** posisi, grid, atau susunan ruangan.
3. **Validasi:** periksa constraint yang relevan.
4. **Tangani kegagalan:** tolak, perbaiki, atau gunakan fallback.
5. **Wujudkan konten:** tampilkan data sebagai objek game.
6. **Evaluasi:** ukur kualitas hasil dan biaya generation.

Pisahkan data konten dari visualisasi agar pemeriksaan dapat dilakukan sebelum objek ditampilkan.

---

# Slide 20 — Constructive PCG

**Constructive PCG** membangun konten secara langsung menggunakan aturan konstruksi.

Contoh:

1. Buat beberapa ruangan.
2. Hubungkan ruangan dengan koridor.
3. Tentukan start dan goal.
4. Tempatkan konten sesuai aturan.

Constraint dapat dipenuhi melalui cara membangun konten, misalnya setiap ruangan baru selalu dihubungkan ke ruangan sebelumnya.

---

# Slide 21 — Kekuatan dan Batas Constructive PCG

**Kekuatan:**

- Alur generation relatif mudah dipahami.
- Dapat memiliki biaya proses yang lebih terprediksi.
- Cocok untuk aturan yang dapat menjamin sifat tertentu sejak konstruksi.

**Batas:**

- Aturan yang lemah dapat menghasilkan pola berulang atau konten tidak valid.
- Constraint kompleks dapat menyulitkan desain generator.
- Keterhubungan level tidak otomatis menjamin keseimbangan gameplay.

**Kualitas hasil bergantung pada aturan konstruksinya.**

---

# Slide 22 — Generate-and-Test PCG

**Generate-and-test** membuat kandidat konten, lalu menguji kelayakannya.

1. Generate kandidat.
2. Periksa constraint.
3. Terima jika valid.
4. Jika gagal, buat kandidat lain hingga batas percobaan.

**Contoh:** buat grid acak, lalu periksa apakah start terhubung ke goal.

Hanya kandidat yang lolos pemeriksaan digunakan; proses tetap dapat gagal memperoleh kandidat valid.

---

# Slide 23 — Validation Rules dan Playability

| Aspek | Contoh pemeriksaan |
|---|---|
| Connectivity | Terdapat jalur start–goal |
| Accessibility | Item penting dapat dijangkau |
| Placement | Enemy di luar zona aman dan tidak bertumpuk |
| Composition | Jumlah item atau ruangan memenuhi kebutuhan |
| Resource | Resource mencukupi untuk mekanik yang digunakan |

**Playability** adalah kemampuan memainkan dan menyelesaikan konten sesuai aturan game.

Lolos satu pemeriksaan belum membuktikan seluruh aspek playability terpenuhi.

---

# Slide 24 — Validasi Level dengan Pathfinding

- Representasikan cell yang dapat dilalui sebagai graph.
- Jalankan **BFS** atau **A*** dari start menuju goal.
- Jika jalur tidak ditemukan, tolak atau perbaiki kandidat.
- Jika jalur ditemukan, lanjutkan pemeriksaan gameplay lainnya.

**BFS:** sesuai untuk pemeriksaan keterjangkauan pada grid tanpa bobot.

**A*:** sesuai ketika pencarian jalur memanfaatkan heuristik dan biaya pergerakan.

Jalur harus mengikuti aturan gerak game, termasuk ukuran agent dan akses yang tersedia.

---

# Slide 25 — Batas Percobaan dan Fallback

Constraint terlalu ketat dapat menyebabkan banyak kandidat ditolak.

- Gunakan `maxAttempts` untuk membatasi pencarian posisi.
- Gunakan batas percobaan terpisah untuk generation satu level.
- Catat alasan penolakan dan jumlah percobaan.
- Setelah batas tercapai, gunakan fallback yang telah ditentukan.

**Contoh fallback:** gunakan spawn point cadangan yang valid atau layout aman yang disiapkan sebelumnya.

Aturan keselamatan dan jalur wajib tetap harus dipenuhi oleh hasil yang digunakan.

---

# Slide 26 — Constructive vs Generate-and-Test

| Aspek | Constructive | Generate-and-Test |
|---|---|---|
| Mekanisme | Membangun berdasarkan aturan | Membangun kandidat lalu menguji |
| Pemenuhan constraint | Melalui desain konstruksi | Melalui pemeriksaan kandidat |
| Biaya proses | Bergantung algoritma konstruksi | Dipengaruhi biaya tes dan penolakan |
| Risiko utama | Aturan konstruksi tidak memadai | Kandidat valid sulit ditemukan |
| Pilihan penggunaan | Sifat penting dapat dibangun langsung | Kelayakan lebih mudah diuji setelah dibangun |

Tidak ada pendekatan yang selalu lebih unggul untuk semua kebutuhan.

---

# Slide 27 — Hybrid PCG

Pendekatan hybrid menggabungkan konstruksi langsung dan validasi.

**Contoh dungeon:**

1. Bangun room dan corridor agar struktur dasarnya terhubung.
2. Pilih start, goal, enemy, dan item.
3. Uji jarak, akses, clearance, dan aturan penempatan.
4. Perbaiki bagian yang gagal atau buat kandidat pengganti.

Tujuannya mengurangi penolakan yang tidak perlu sekaligus memeriksa syarat yang belum dijamin saat konstruksi.

---

# Slide 28 — Taxonomy PCG

Taxonomy mengelompokkan PCG berdasarkan karakteristik yang berbeda.

| Dimensi | Pilihan |
|---|---|
| Waktu generation | Online / Offline |
| Peran konten | Necessary / Optional |
| Sifat proses | Deterministic / Stochastic |
| Cara membangun | Constructive / Generate-and-Test |
| Keterlibatan designer | Automatic / Mixed-Initiative |
| Penyesuaian terhadap player | Generic / Adaptive |

Satu sistem PCG dapat memiliki karakteristik pada seluruh dimensi tersebut.

---

# Slide 29 — Online vs Offline PCG

| Online | Offline |
|---|---|
| Konten dihasilkan saat game berjalan | Konten dihasilkan sebelum digunakan dalam permainan |
| Contoh: segmen endless runner, loot saat encounter | Contoh: tool dungeon, batch level untuk diseleksi |
| Memerlukan perhatian pada waktu proses runtime | Memberi ruang untuk evaluasi dan penyuntingan sebelum distribusi |

**Pilihan desain:** kapan konten dibutuhkan, berapa biaya generation, dan apakah designer perlu meninjaunya terlebih dahulu?

---

# Slide 30 — Necessary vs Optional Content

- **Necessary:** konten yang dihasilkan diperlukan untuk progres atau fungsi inti game, seperti jalur utama dan objective wajib.
- **Optional:** konten tambahan yang dapat dilewati, seperti dekorasi atau hadiah bonus tertentu.
- Klasifikasi bergantung pada desain game, bukan semata-mata jenis objek.
- Item dapat menjadi necessary jika merupakan kunci wajib untuk membuka jalan.

**Implikasi:** konten necessary membutuhkan jaminan kelayakan yang sesuai dengan perannya dalam progres game.

---

# Slide 31 — Deterministic vs Stochastic

| Deterministic | Stochastic |
|---|---|
| Input dan kondisi yang sama menghasilkan output yang sama | Proses melibatkan pilihan acak |
| Contoh: penyusunan tile mengikuti aturan tetap | Contoh: pemilihan room berdasarkan bobot |

- Generator stochastic berbasis PRNG dapat dibuat reproducible melalui seed dan state yang terkendali.
- Reproducibility tidak berarti variasi acaknya hilang.
- Aturan tetap dan pilihan acak sering dipadukan dalam satu generator.

---

# Slide 32 — Automatic dan Mixed-Initiative; Generic dan Adaptive

| Dimensi | Pilihan pertama | Pilihan kedua |
|---|---|---|
| Keterlibatan designer | **Automatic:** sistem menghasilkan konten tanpa intervensi selama proses | **Mixed-initiative:** designer dan sistem bergantian mengusulkan atau mengubah konten |
| Penyesuaian player | **Generic:** tidak menggunakan karakteristik player tertentu | **Adaptive:** menggunakan informasi player untuk menyesuaikan konten |

Contoh mixed-initiative: generator menawarkan layout, designer mengedit, lalu sistem melengkapi.

Contoh adaptive: komposisi encounter diubah berdasarkan estimasi kemampuan player.

---

# Slide 33 — Procedural Spawning

**Procedural spawning** memunculkan objek secara otomatis berdasarkan aturan.

- **Apa:** enemy, item, resource, atau dekorasi.
- **Di mana:** area, zona, atau titik yang diizinkan.
- **Berapa:** jumlah, kuota, dan kepadatan.
- **Kapan:** awal level, interval, atau event tertentu.
- **Dengan syarat apa:** jarak aman, akses, dan ruang yang tersedia.

**Contoh:** tempatkan 5 enemy di arena tanpa memasuki safe zone player.

---

# Slide 34 — Area dan Validasi Spawn

Area spawn dapat berbentuk persegi panjang, lingkaran, volume, atau region grid.

Pemeriksaan kandidat:

1. Berada dalam batas area yang diizinkan.
2. Memiliki permukaan atau area navigasi yang sesuai.
3. Memenuhi jarak minimum dari player.
4. Memiliki ruang untuk ukuran objek.
5. Tidak bertumpuk dan tidak melampaui kuota zona.

**Catatan:** posisi yang valid secara koordinat belum tentu aman atau dapat diakses dalam gameplay.

---

# Slide 35 — Komponen Unity untuk Spawning

| Komponen / fitur | Peran konseptual |
|---|---|
| Prefab | Template enemy, item, dan objek lain |
| `Instantiate` | Membuat instance objek dari template |
| `Physics.CheckSphere` / `OverlapSphere` | Memeriksa collider pada area kandidat |
| `LayerMask` | Memilih layer yang diperiksa |
| `NavMesh.SamplePosition` | Mencari posisi NavMesh di sekitar kandidat |

Posisi NavMesh yang ditemukan perlu diperiksa kembali terhadap aturan spawn. Berada di NavMesh belum menjamin tersambung ke area player.

---

# Slide 36 — Representasi Level Berbasis Grid

- Level direpresentasikan sebagai kumpulan cell.
- Setiap cell menyimpan tipe, misalnya **Floor, Wall, Start, Goal**.
- Status walkable menentukan apakah cell dapat dilalui.
- Data grid digunakan untuk generation, validasi, dan penempatan objek.

| Representasi | Kegunaan |
|---|---|
| Array dua dimensi | Menyimpan tipe setiap cell |
| Enum tipe tile | Memberi nama kategori cell |
| Data cell tambahan | Menyimpan koordinat, biaya, atau informasi gameplay |

Pisahkan data level dari prefab visualnya.

---

# Slide 37 — Dari Grid ke Dunia Unity

Grid dua dimensi dapat dipetakan ke bidang XZ Unity.

**Posisi dunia = origin + (gridX × tileSize, 0, gridY × tileSize).**

Contoh dengan origin (0, 0, 0) dan `tileSize = 2`:

| Koordinat grid | Posisi dunia |
|---|---|
| (0, 0) | (0, 0, 0) |
| (1, 0) | (2, 0, 0) |
| (0, 1) | (0, 0, 2) |

Tipe cell menentukan objek yang ditampilkan; ukuran prefab dan collider perlu sesuai dengan ukuran tile.

---

# Slide 38 — Random Level dengan Peluang Wall

**Gagasan:** setiap cell yang memenuhi syarat memiliki peluang menjadi wall.

- Tentukan ukuran grid dan peluang wall, misalnya 0,25.
- Lindungi start dan goal agar tetap dapat dilalui.
- Pilih floor atau wall untuk cell lainnya.
- Uji keterhubungan dan aturan gameplay.

**Risiko:** area terisolasi, jalur buntu, atau ruang gerak terlalu sempit.

Peluang wall 0,25 menunjukkan peluang per cell; persentase wall aktual pada satu peta dapat berbeda.

---

# Slide 39 — Alternatif: Random Walk dan Room–Corridor

| Teknik | Cara membangun | Perhatian |
|---|---|---|
| Random walk | Bergerak acak dari titik awal dan mengubah cell yang dikunjungi menjadi floor | Kunjungan ulang dapat membatasi luas area yang terbentuk |
| Room–corridor | Membuat ruangan dan menghubungkannya melalui koridor | Perlu mengatur overlap, ukuran, dan koneksi |

Random walk berkesinambungan dapat membentuk area floor yang terhubung jika langkah mengikuti aturan adjacency yang sama dengan navigasi.

Room–corridor memberi kontrol yang lebih eksplisit terhadap struktur ruang.

---

# Slide 40 — Difficulty, Replayability, dan Adaptasi

- **Difficulty:** dipengaruhi jumlah dan jenis enemy, layout, resource, serta kombinasi antarunsur.
- **Replayability:** didukung variasi yang menghasilkan keputusan atau tantangan bermakna.
- Variasi visual saja belum tentu mengubah pengalaman bermain.
- Parameter yang berubah menurut progres tetap belum tentu menggunakan model kemampuan player.
- **Adaptive PCG** dapat memakai data player untuk menyesuaikan konten dan mendukung DDA.

**Tujuan:** variasi yang terukur, adil, dan relevan terhadap gameplay.

---

# Slide 41 — Evaluasi dan Debugging PCG

| Aspek | Bukti yang diperiksa |
|---|---|
| Reproducibility | Seed, parameter, dan hasil pada kondisi yang sama |
| Validitas | Proporsi kandidat yang lolos aturan |
| Efisiensi | Waktu generation dan jumlah percobaan |
| Variasi | Perbedaan layout, komposisi, atau jalur antar-seed |
| Gameplay | Akses, fairness, dan hasil playtesting |

Tampilkan seed, kandidat yang ditolak, radius spawn, dan jalur start–goal untuk membantu diagnosis.

Evaluasi banyak seed; satu hasil yang baik belum mewakili seluruh generator.

---

# Slide 42 — Integrasi dan Arah Pembelajaran Berikutnya

- **Pathfinding:** memeriksa keterjangkauan level hasil generation.
- **Navigation:** membantu pemilihan posisi spawn dan pergerakan NPC.
- **Movement dan Decision AI:** menjalankan perilaku agent di level procedural.
- **Tactical AI:** memanfaatkan ruang, cover, dan posisi hasil generation.

**Pertemuan berikutnya:** Level & Dungeon Generation, termasuk pendalaman grid, random walk, BSP, cellular automata, dan pendekatan berbasis constraint.

Pertemuan ini menjadi landasan konsep sebelum teknik generation level dibahas lebih jauh.

---

# Slide 43 — Ringkasan Rencana Praktikum

## Procedural Spawning / Random Level Sederhana

**Platform:** Unity 6 + C#.

| Pilihan | Target hasil |
|---|---|
| Procedural spawning | Enemy dan item muncul sesuai area, jarak aman, dan pemeriksaan obstacle |
| Random level sederhana | Grid floor–wall dengan start–goal yang terhubung |

**Komponen bersama:** seed, parameter yang dapat diubah, validasi, batas percobaan, dan debug visual.

**Pengujian inti:** ulangi seed yang sama, bandingkan beberapa seed, dan periksa penanganan kandidat tidak valid.

**Langkah teknis, kode lengkap, dan instruksi pengerjaan tersedia pada modul praktikum terpisah.**

---

# Slide 44 — Ringkasan Materi dan Refleksi

- PCG menghasilkan konten melalui algoritma dengan aturan dan tujuan desain.
- Randomness memberi variasi; probability dan bobot mengatur distribusinya.
- Seed membantu reproducibility ketika kondisi generator konsisten.
- Constructive membangun konten melalui aturan; generate-and-test menyaring kandidat melalui pengujian.
- Validasi, batas percobaan, fallback, dan evaluasi membantu menjaga kualitas hasil.

**Pertanyaan refleksi:** apakah level yang memiliki jalur start–goal sudah pasti adil dan menarik? Pemeriksaan apa lagi yang diperlukan?

---

# Slide 45 — Penutup

## TERIMA KASIH

**Dr. Darlis Herumurti**  
Game Cerdas — Pertemuan 9

**Variasi melalui algoritma. Kualitas melalui aturan, validasi, dan evaluasi.**
