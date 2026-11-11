# Slide 01 — Dynamic Difficulty Adjustment & Player Modeling untuk Adaptive Game AI

**Game Cerdas**

**Pertemuan 11**

**Dr. Darlis Herumurti**

---

# Slide 02 — Tantangan yang sesuai dengan pemain

- Tantangan yang jauh di bawah kemampuan pemain dapat menimbulkan kebosanan.
- Tantangan yang jauh di atas kemampuan pemain dapat menimbulkan frustrasi.
- Ketika tantangan sebanding dengan kemampuan, pemain lebih mudah fokus dan menikmati permainan. Kondisi ini dikenal sebagai *flow*.
- Tingkat tantangan yang sesuai dapat berubah ketika pemain belajar atau menghadapi situasi baru.

---

# Slide 03 — Dua pertanyaan dalam game adaptif

| Konsep | Pertanyaan yang dijawab | Contoh |
|---|---|---|
| Dynamic Difficulty Adjustment (DDA) | Apakah tantangan perlu naik, turun, atau tetap? | Kurangi ukuran gelombang musuh saat pemain berulang kali gagal. |
| Player Modeling | Bagaimana pemain bermain dan seberapa baik performanya? | Pemain mahir bertahan dan sering menjelajahi ruang opsional. |
| Adaptation Policy | Respons apa yang dipilih game untuk kondisi atau profil itu? | Tambahkan hadiah eksplorasi dan pertahankan tingkat kesulitan. |

---

# Slide 04 — Kesulitan statis dan dinamis

- **Statis.** Tingkat kesulitan mengikuti pengaturan yang relatif tetap, misalnya Easy, Normal, atau Hard.
- **Dinamis.** Game menyesuaikan parameter saat permainan berlangsung berdasarkan data performa.
- Keduanya dapat dipadukan. Pilihan awal menetapkan kesulitan dasar, lalu DDA bekerja dalam rentang adaptasi yang dirancang.

---

# Slide 05 — Siklus umpan balik DDA

**Rekam data → ukur performa → tentukan penyesuaian → ubah parameter → amati respons.**

- Sistem mengevaluasi data dari satu jendela waktu, gelombang, atau ruang permainan.
- Perubahan diterapkan pada momen yang sesuai, misalnya sebelum gelombang musuh berikutnya.
- Respons pemain setelah perubahan menjadi masukan untuk evaluasi berikutnya.

---

# Slide 06 — Telemetri dan metrik gameplay

- **Telemetri** adalah catatan mentah. Data berbasis kejadian mencakup tembakan, hit, damage, dan pengambilan item. Data berkala dapat mencakup posisi dan HP.
- **Metrik** adalah ukuran yang dihitung dari catatan tersebut.
- Contoh metrik: akurasi = hit ÷ tembakan, kill rate = jumlah kill ÷ menit, cakupan eksplorasi = area dikunjungi ÷ area yang dapat dijelajahi.
- Waktu dan konteks pencatatan membantu sistem menafsirkan metrik, misalnya ruang atau gelombang tempat sebuah kejadian berlangsung.

---

# Slide 07 — Pilih metrik sesuai tujuan gameplay

| Dimensi | Contoh metrik |
|---|---|
| Pertempuran | Akurasi, kill per menit, damage yang diberikan |
| Bertahan hidup | HP tersisa, damage yang diterima, kematian atau retry |
| Progres | Objektif selesai, waktu penyelesaian, checkpoint tercapai |
| Eksplorasi dan risiko | Ruang opsional dikunjungi, waktu di zona berbahaya |
| Sumber daya | Amunisi tersisa, medkit yang dipakai |

Pada game stealth, jumlah deteksi lebih relevan daripada jumlah kill jika objektifnya melewati penjagaan secara diam-diam.

---

# Slide 08 — Normalisasi sebelum menggabungkan metrik

- Ubah metrik ke skala yang sama, misalnya 0–1, agar dapat digabung.
- **HP:** HP tersisa ÷ HP maksimum.
- **Akurasi:** jumlah hit ÷ jumlah tembakan. Jika pemain belum menembak, tandai metrik sebagai belum tersedia.
- **Damage diterima:** 1 − clamp(damage diterima ÷ batas acuan, 0, 1).
- Pada skor performa, arahkan setiap nilai sehingga skor yang lebih tinggi berarti performa lebih baik.

---

# Slide 09 — Skill score sebagai estimasi performa

Contoh bobot untuk satu gelombang di arena survival.

| Metrik yang dinormalisasi | Bobot | Skor contoh |
|---|---:|---:|
| HP tersisa | 0,35 | 0,80 |
| Kill | 0,30 | 0,70 |
| Damage diterima | 0,25 | 0,60 |
| Ketahanan hidup | 0,10 | 0,50 |

**Skill score = 0,35 × 0,80 + 0,30 × 0,70 + 0,25 × 0,60 + 0,10 × 0,50 = 0,69.**

---

# Slide 10 — Model kesulitan diskrit dan kontinu

| Model | Representasi | Contoh perubahan |
|---|---|---|
| Diskrit | Tingkat 1–5 dengan konfigurasi tiap tingkat | Naik dari Normal ke Hard |
| Kontinu | Pengali terhadap parameter dasar | Multiplier naik dari 1,00 ke 1,05 |

- Model diskrit memudahkan penelusuran perubahan per tingkat.
- Model kontinu mendukung penyesuaian kecil dengan langkah dan batas yang terkontrol.

---

# Slide 11 — Aturan naik, turun, atau tetap

Contoh aturan yang dievaluasi pada akhir gelombang.

| Skill score | Keputusan |
|---|---|
| Kurang dari 0,35 | Turunkan multiplier sebesar 0,05 |
| 0,35 hingga 0,75 | Pertahankan multiplier |
| Lebih dari 0,75 | Naikkan multiplier sebesar 0,05 |

Batasi multiplier pada **0,75–1,50**. Dengan aturan ini, skor **0,69** mempertahankan kesulitan saat ini.

---

# Slide 12 — Parameter yang dapat diadaptasi

- **Musuh:** HP, damage, kecepatan, jeda serangan, atau radius deteksi.
- **Spawner:** ukuran gelombang, interval kemunculan, atau jenis musuh.
- **Sumber daya:** peluang munculnya medkit atau amunisi.
- **Level:** kepadatan jebakan, rintangan, atau kompleksitas jalur.
- Pilih beberapa parameter yang paling langsung memengaruhi tantangan yang ingin disesuaikan.

---

# Slide 13 — Cara multiplier mengubah gameplay

Contoh dengan HP dasar 100, damage dasar 10, dan interval spawn dasar 4,5 detik.

| Multiplier | HP musuh | Damage musuh | Interval spawn |
|---:|---:|---:|---:|
| 0,75 | 75 | 7,5 | 6,0 detik |
| 1,00 | 100 | 10 | 4,5 detik |
| 1,25 | 125 | 12,5 | 3,6 detik |

HP dan damage dikalikan dengan multiplier. Interval spawn dibagi dengan multiplier agar musuh muncul lebih sering saat kesulitan naik.

---

# Slide 14 — Evaluasi berkala dan smoothing

- **Evaluation window** mengumpulkan data dalam rentang yang bermakna, misalnya 30 detik, satu gelombang, atau satu ruang.
- **Moving average** merata-ratakan beberapa pengukuran terbaru agar satu kejadian ekstrem memiliki pengaruh yang lebih kecil.
- **Cooldown** menetapkan jeda minimum antara dua penyesuaian.
- Rentang toleransi, langkah kecil, serta batas minimum dan maksimum membantu mengurangi perubahan kesulitan yang berulang naik dan turun.

---

# Slide 15 — Rubber banding

- *Rubber banding* memberi kesempatan mengejar ketika selisih antarpeserta terlalu besar.
- Pada game balap, kendaraan yang tertinggal dapat menerima sedikit bantuan akselerasi atau lawan AI dapat sedikit melambat.
- Besaran dan durasi bantuan memengaruhi persepsi keadilan. Bantuan berlebihan dapat mengurangi manfaat bermain dengan baik.

---

# Slide 16 — Bagaimana pemain melihat adaptasi?

| Bentuk | Contoh |
|---|---|
| Terlihat | Game menampilkan peringatan bahwa bala bantuan datang. |
| Tersamar | Jeda reaksi musuh bertambah sedikit. |
| Diegetik | Drone suplai menjatuhkan medkit sebagai bagian dari kejadian di dunia game. |

Adaptasi diegetik memberi alasan yang dapat dipahami pemain dan dapat diterapkan secara terlihat.

---

# Slide 17 — Dari performa ke profil pemain

- Sinyal performa terkini membantu DDA menentukan arah penyesuaian kesulitan.
- Player Modeling membentuk estimasi yang lebih luas, seperti skill, gaya bermain, kecenderungan mengambil risiko, dan preferensi.
- Profil yang lebih kaya memungkinkan game memilih respons berbeda untuk dua pemain dengan skill yang setara.

---

# Slide 18 — Skill dan gaya bermain

| Dimensi | Makna | Contoh indikator |
|---|---|---|
| Skill | Seberapa baik pemain menjalankan tugas | Akurasi, efisiensi, konsistensi menyelesaikan objektif |
| Gaya bermain | Bagaimana pemain biasanya bertindak | Frekuensi menyerang, penggunaan cover, kunjungan ke area opsional |

Dua pemain dengan skill tinggi bisa menggunakan strategi berbeda. Satu sering menyerang dari dekat, sementara yang lain memilih berlindung dan menunggu celah.

---

# Slide 19 — Membaca gaya dari pola tindakan

| Gaya | Indikator yang dapat diamati |
|---|---|
| Agresif | Sering memulai serangan dan mendekati musuh |
| Defensif | Sering memakai cover dan menjaga jarak |
| Eksploratif | Banyak mengunjungi jalur atau ruang opsional |
| Speedrunner | Cepat menuju objektif dan melewati aktivitas opsional |
| Pengambil risiko | Sering masuk area berbahaya atau bertarung saat HP rendah |

Gunakan beberapa indikator dan perhatikan konteks level sebelum menafsirkan sebuah pola.

---

# Slide 20 — Klasifikasi gaya dengan beberapa skor

- Aturan sederhana dapat mengubah kombinasi metrik menjadi skor untuk tiap gaya.
- Skor agresif dapat memakai frekuensi serangan dan proporsi pertempuran jarak dekat.
- Skor eksploratif dapat memakai cakupan area dan kunjungan ruang opsional.
- Satu pemain dapat memiliki beberapa gaya sekaligus. Simpan skor per gaya agar profil tidak kehilangan pola campuran.

---

# Slide 21 — Profil sementara dan jangka panjang

| Profil | Data | Penggunaan |
|---|---|---|
| Sementara | Satu sesi, level, atau beberapa gelombang terbaru | Mengikuti kondisi pemain saat ini |
| Jangka panjang | Beberapa sesi permainan | Mengamati perkembangan skill dan kebiasaan bermain |

Profil dapat memuat estimasi skill, skor tiap gaya, tingkat keyakinan, dan waktu pembaruan.

---

# Slide 22 — Cold start dan tingkat keyakinan

- *Cold start* terjadi ketika data pemain masih terlalu sedikit untuk membentuk estimasi yang andal.
- Mulai dari profil awal atau gunakan data dari tutorial dan pengaturan kesulitan pilihan pemain.
- Perbarui profil saat terkumpul kejadian yang cukup dan pola mulai konsisten.
- Gunakan penyesuaian konservatif ketika tingkat keyakinan rendah.

---

# Slide 23 — Konteks dapat mengubah arti metrik

- Waktu penyelesaian yang panjang dapat menandakan kesulitan atau eksplorasi yang disengaja.
- Damage yang rendah dapat mencerminkan pertahanan yang baik atau interaksi yang sedikit dengan musuh.
- Cek objektif, rute, dan jenis pertemuan dengan musuh sebelum mengubah profil.
- Gabungkan beberapa metrik dan amati polanya lintas evaluasi agar kesimpulan lebih kuat.

---

# Slide 24 — Adaptation policy menghubungkan profil dan tindakan

- **Masukan:** profil pemain, tingkat keyakinan, dan keadaan gameplay saat ini.
- **Keputusan:** pilih tindakan dengan aturan sederhana atau ambang skor.
- **Keluaran:** parameter yang diubah, kapan perubahan diterapkan, dan seberapa besar perubahan.
- Contoh: pemain eksploratif dengan pola yang konsisten dapat menemukan hadiah di ruang opsional berikutnya.

---

# Slide 25 — Contoh kebijakan adaptasi

| Kondisi atau profil | Respons game |
|---|---|
| Berulang kali gagal pada gelombang | Kurangi ukuran gelombang berikutnya. |
| Sering menyerang dari jarak dekat | Sebagian musuh berlindung atau menjaga jarak. |
| Sering bertahan di satu tempat | Letakkan objektif yang mendorong perpindahan. |
| Sering menjelajahi area opsional | Tambahkan ruang rahasia atau hadiah eksplorasi. |

Perubahan dapat menyasar tingkat kesulitan, perilaku musuh, atau jenis peluang yang tersedia bagi pemain.

---

# Slide 26 — Adaptasi perilaku musuh

- **FSM:** sesuaikan jarak deteksi atau ambang transisi menuju keadaan mengejar.
- **Behavior Tree:** sesuaikan kondisi, prioritas tindakan, atau jeda serangan.
- **Utility AI:** ubah bobot relatif untuk menyerang, berlindung, atau mundur.
- Contoh: saat pemain sering menyerang dari dekat, musuh dapat lebih sering memilih cover dan menjaga jarak.

---

# Slide 27 — Adaptasi konten dengan PCG

- DDA dapat menentukan target tantangan untuk konten yang akan dibangkitkan.
- Profil pemain dapat mengarahkan jenis konten, misalnya cabang opsional untuk pemain eksploratif.
- Parameter generator dapat mencakup jumlah musuh, distribusi loot, kepadatan jebakan, dan kompleksitas jalur.
- Validasi konektivitas dan syarat gameplay setelah konten dibangkitkan.

---

# Slide 28 — Adaptasi panduan dan sumber daya

- Pemain yang lama tertahan pada objektif dapat menerima petunjuk secara bertahap.
- Pemain yang sering bertahan dengan HP rendah dapat mendapat peluang medkit yang sedikit lebih tinggi.
- Bantuan dapat disampaikan melalui dialog NPC, penanda lingkungan, atau mekanisme suplai.
- Beri ruang bagi pemain untuk memilih cara menyelesaikan tantangan.

---

# Slide 29 — Arsitektur konseptual sistem adaptif

**Gameplay → pencatat telemetri → agregasi metrik → model pemain → pengelola adaptasi → gameplay.**

- Pengelola adaptasi dapat mengirim keputusan ke enemy AI, spawner, sistem loot, atau generator level.
- Di Unity, misalnya, `PerformanceTracker` mengirim skor ke `DifficultyManager`, lalu `EnemySpawner` membaca parameter untuk gelombang berikutnya.
- Riwayat keputusan dapat mencatat alasan perubahan, nilai sebelum dan sesudah, serta kondisi pemain saat evaluasi.

---

# Slide 30 — Keadilan, agency, dan transparansi

- **Keadilan.** Pastikan keterampilan tetap dihargai ketika game meningkatkan tantangan.
- **Player agency.** Pertahankan dampak keputusan pemain dan berikan pilihan cara menghadapi tantangan.
- **Transparansi.** Pertimbangkan isyarat yang dapat dipahami pemain, misalnya peringatan kedatangan bala bantuan.
- Batasi besaran dan frekuensi perubahan agar respons game terasa wajar.

---

# Slide 31 — Privasi dalam pencatatan telemetri

- Tentukan tujuan pengumpulan data sebelum memilih kejadian yang direkam.
- Catat data gameplay seperlunya dan hindari data pribadi yang tidak diperlukan.
- Tetapkan tempat penyimpanan, lama penyimpanan, dan pihak yang dapat mengakses data.
- Jelaskan kepada pemain jika perilaku bermain direkam dan digunakan untuk personalisasi.

---

# Slide 32 — Bagaimana menilai hasil adaptasi?

- Bandingkan mode adaptif dengan kesulitan statis pada skenario yang sebanding.
- Amati performa pemain, misalnya retry, waktu penyelesaian, atau pola progres.
- Periksa kestabilan sistem melalui riwayat multiplier dan frekuensi penyesuaian.
- Minta penilaian pemain tentang tantangan, keadilan, dan kendali. Metrik gameplay memberi petunjuk, sementara tanggapan pemain membantu menilai pengalaman yang dirasakan.

---

# Slide 33 — Satu skenario dari data hingga keputusan

1. Pemain menyelesaikan gelombang dan beberapa kali menjelajahi jalur samping.
2. Sistem menghitung skill score **0,69** dan melihat pola kunjungan ruang opsional yang konsisten.
3. Aturan DDA mempertahankan multiplier karena skor berada dalam rentang 0,35–0,75.
4. Kebijakan adaptasi menambahkan hadiah opsional di ruang berikutnya untuk merespons gaya eksploratif.
5. Sistem mengamati apakah pemain menjelajah dan tetap dapat menyelesaikan objektif utama.

---

# Slide 34 — Pertanyaan diskusi

- Dua pemain memiliki skill score yang sama. Kapan game sebaiknya memberi respons yang berbeda?
- Pemain lama berada di satu ruang. Data tambahan apa yang membedakan kesulitan dari eksplorasi?
- Pada kondisi apa rubber banding mulai terasa tidak adil?
- Bagaimana cara membuktikan bahwa adaptasi membantu pengalaman bermain?

---

# Slide 35 — Terima Kasih
