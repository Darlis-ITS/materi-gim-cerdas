# Slide 1 — Cover

**Pertemuan ke-10**

## PCG for Level & Dungeon Generation

**Dr. Darlis Herumurti**

---

# Slide 2 — Dari PCG Dasar ke Level Generation

- Pertemuan sebelumnya membahas randomness, seed, reproducibility, dan generate-and-test.
- Pertemuan ini berfokus pada pembentukan ruang bermain: layout, room, corridor, start, dan goal.
- Level harus memiliki struktur dan konektivitas yang mendukung gameplay.

> PCG = Randomness + Rule + Constraint + Validation + Design Goal.

---

# Slide 3 — Mengapa Level Generation Penting?

- Layout memengaruhi navigasi, eksplorasi, strategi, pacing, dan tingkat kesulitan.
- Generasi prosedural menyediakan variasi level untuk meningkatkan replayability.
- Tujuan pembelajaran: memahami representasi grid, algoritma pembentuk layout, serta aturan penempatan konten.
- Hasil generation perlu dievaluasi agar bervariasi, terkontrol, dan dapat dimainkan.

---

# Slide 4 — Dungeon sebagai Ruang Gameplay

- **Struktur:** room, corridor, floor, wall, dan door.
- **Progres:** start, goal, boss room, serta akses menuju area berikutnya.
- **Tantangan dan resource:** enemy, trap, item, key, dan treasure.
- Susunan ruang mengatur urutan pengalaman: eksplorasi, pertempuran, reward, dan penyelesaian tujuan.

**Contoh alur:** start room → combat room → percabangan treasure → boss room.

---

# Slide 5 — Representasi Level sebagai Data

- **Grid:** cell menyimpan informasi ruang yang dapat atau tidak dapat dilalui.
- **Graph:** node mewakili room atau area; edge mewakili koneksi.
- **Room list dan prefab chunk:** menyimpan ruang atau modul yang akan disusun.
- Pisahkan data layout dari tampilan agar level dapat diperiksa sebelum dibangun menjadi scene.

**Representasi utama:** grid 2D, dengan tipe Wall, Floor, Start, Goal, EnemySpawn, dan ItemSpawn.

---

# Slide 6 — Koordinat Grid dan Dunia Unity

- Grid menggunakan indeks `(x, y)` untuk mengakses setiap cell.
- Level 3D dapat memetakan grid ke bidang XZ; sumbu Y menjadi ketinggian.
- `tileSize` menentukan jarak antarpusat cell dalam koordinat dunia.
- Marker start, goal, dan spawn tetap harus berada pada cell yang dapat dilalui.

```csharp
Vector3 worldPosition =
    new Vector3(x * tileSize, 0f, y * tileSize);
```

---

# Slide 7 — Pipeline Generasi Level

1. Tentukan seed, ukuran peta, parameter, dan tujuan desain.
2. Bentuk layout menggunakan algoritma generation.
3. Periksa konektivitas serta tentukan start dan goal.
4. Tempatkan enemy, item, dan elemen gameplay sesuai aturan.
5. Validasi hasil lengkap; lakukan repair atau regeneration jika gagal.
6. Bangun geometri dan siapkan navigasi.

**Seed yang sama menghasilkan layout yang sama jika algoritma, parameter, dan urutan penggunaan bilangan acak tetap sama.**

---

# Slide 8 — Inisialisasi Grid dan Random Fill

- **Mulai dari wall:** ukir floor untuk membentuk dungeon atau cave.
- **Mulai dari floor:** tambahkan wall dan obstacle untuk arena atau ruang terbuka.
- **Random fill:** tentukan tipe setiap cell berdasarkan peluang, misalnya `wallProbability = 0.35`.
- Random fill mudah dibuat, tetapi dapat menghasilkan ruang terputus dan layout tanpa struktur.

> Peluang wall mengatur kepadatan awal, bukan menjamin level dapat dimainkan.

---

# Slide 9 — Apa yang Harus Divalidasi?

- Start dan goal tersedia serta berada pada area yang dapat dilalui.
- Terdapat jalur dari start menuju goal; semua room wajib dapat dicapai.
- Luas floor dan lebar corridor memenuhi kebutuhan gameplay.
- Enemy dan item berada di lokasi valid serta mengikuti aturan jarak.
- Validasi menggunakan model gerak yang sesuai: 4 arah, 8 arah, graph, atau navigasi agent.

**BFS/flood fill:** keterjangkauan. **Dijkstra/A\*:** pencarian jalur dengan kebutuhan biaya atau heuristik.

---

# Slide 10 — Flood Fill dan BFS untuk Konektivitas

1. Mulai dari cell start yang valid.
2. Kunjungi tetangga yang dapat dilalui dan belum dikunjungi.
3. Ulangi hingga seluruh area terhubung selesai diperiksa.
4. Pastikan goal termasuk cell yang dikunjungi.

- Jumlah cell yang dikunjungi menunjukkan luas area yang terjangkau.
- Flood fill dapat diimplementasikan dengan BFS atau DFS.
- Pada grid dengan biaya langkah seragam, BFS juga menghitung jarak jalur terpendek dari start.

---

# Slide 11 — Random Walk: Mengukir Jejak Perjalanan

- Mulai dari satu cell, lalu bergerak ke tetangga dengan arah acak.
- Setiap cell yang dilalui diubah menjadi floor.
- Menghasilkan jalur berliku dan area organik untuk cave atau dungeon sederhana.
- Satu walker dengan langkah bersebelahan membentuk jejak yang terhubung, selama floor awal dan seluruh jejak dipertahankan.

**Arah dasar:** atas, bawah, kiri, dan kanan.

---

# Slide 12 — Algoritma Random Walk

```text
position = start
mark position as floor
repeat walkLength times:
    direction = random cardinal direction
    candidate = position + direction
    if candidate is inside allowed bounds:
        position = candidate
        mark position as floor
```

- Batas area menjaga walker tidak keluar grid.
- Kunjungan ulang cell tidak menambah luas floor.
- Jumlah langkah berbeda dari jumlah cell floor unik.

---

# Slide 13 — Parameter dan Multiple Walkers

- **Walk length:** jumlah langkah; langkah lebih panjang cenderung memperluas area, tetapi dapat mengunjungi ulang cell.
- **Walker count:** jumlah walker untuk memperkaya bentuk dan percabangan.
- **Boundary margin:** menjaga jarak floor dari tepi peta.
- **Target floor count:** menghentikan generation setelah luas floor yang diinginkan tercapai, dengan batas maksimum langkah.
- Walker yang dimulai di lokasi terpisah dapat menghasilkan region terputus; mulai dari floor yang terhubung atau tambahkan koneksi.

---

# Slide 14 — Memperbaiki Bentuk Random Walk

- Gunakan brush, misalnya area 3 × 3, untuk memperlebar jejak.
- Tambahkan room pada titik tertentu dan cabang menuju area eksplorasi.
- Tetapkan goal berdasarkan jarak jalur pada layout akhir.
- Periksa kembali konektivitas setelah smoothing atau perubahan bentuk.

**Kelebihan:** sederhana dan organik.  
**Keterbatasan:** kontrol bentuk rendah; hasil dapat terlalu sempit atau berliku.

---

# Slide 15 — BSP: Binary Space Partitioning

- BSP membagi area berbentuk rectangle menjadi dua bagian secara rekursif.
- Pembagian membentuk tree: root adalah seluruh peta; leaf adalah area yang tidak dibagi lagi.
- Room ditempatkan di dalam leaf, kemudian dihubungkan dengan corridor.
- Cocok untuk dungeon dengan ruang yang jelas dan struktur room–corridor.

**Urutan:** partisi ruang → bentuk room → hubungkan room → validasi.

---

# Slide 16 — Aturan Pembagian Ruang BSP

- Gunakan split vertikal atau horizontal.
- Area terlalu lebar dapat dipotong vertikal; area terlalu tinggi dapat dipotong horizontal.
- Jika proporsi seimbang, orientasi split dapat dipilih secara acak.
- Posisi split harus menyisakan dua child yang memenuhi ukuran minimum.
- Hentikan pembagian ketika batas kedalaman tercapai atau tidak ada split yang valid.

**Ukuran minimum harus cukup untuk room dan margin.**

---

# Slide 17 — Membuat Room di Dalam Leaf

- Tentukan lebar dan tinggi room dalam rentang ukuran yang diizinkan.
- Pastikan room sepenuhnya berada di dalam leaf.
- Sisakan margin untuk wall dan pemisahan antarruang.
- Variasikan posisi dan ukuran room untuk menghindari pola yang terlalu seragam.

**Parameter utama:** `minRoomSize`, `maxRoomSize`, dan `roomMargin`.

---

# Slide 18 — Menghubungkan Room pada BSP

- Proses tree dari bawah ke atas: hubungkan perwakilan room dari kedua subtree pada setiap node internal.
- Cara sederhana menggunakan corridor berbentuk L di antara pusat room.
- Corridor dapat dibuat horizontal lalu vertikal, atau sebaliknya.
- Tentukan lebar corridor sesuai ukuran player dan NPC.
- Jika setiap subtree terhubung dan setiap pasangan subtree disambungkan, seluruh room akan terhubung.

**Validasi akhir tetap diperlukan untuk mendeteksi kesalahan carving dan geometri.**

---

# Slide 19 — Kekuatan dan Batasan BSP

- **Kekuatan:** struktur room jelas, konektivitas mudah dikendalikan, serta penempatan start dan boss room lebih terarah.
- **Keterbatasan:** pola cenderung kotak dan membutuhkan struktur data rekursif.
- Variasi dapat ditambah melalui ukuran room, orientasi split, lebar corridor, dan koneksi tambahan.
- Cocok untuk dungeon crawler, tactical room combat, dan layout fasilitas stealth.

---

# Slide 20 — Cellular Automata untuk Cave

- Cellular automata memperbarui kondisi cell berdasarkan tetangganya.
- Mulai dari random fill wall dan floor.
- Terapkan aturan lokal berulang kali untuk membentuk area menyerupai cave.
- Bentuk organik muncul dari interaksi aturan sederhana di seluruh grid.

**Parameter utama:** peluang wall awal, aturan tetangga, dan jumlah iterasi.

---

# Slide 21 — Aturan Tetangga dan Pembaruan Cell

- Gunakan delapan tetangga di sekitar cell; cell pusat tidak ikut dihitung.
- Contoh aturan: jika jumlah tetangga wall ≥ 5, cell menjadi wall; selain itu menjadi floor.
- Tentukan perlakuan tepi, misalnya batas peta selalu wall.
- Semua cell membaca grid lama dan menulis hasil ke grid baru agar pembaruan serentak.
- Aturan ini merupakan contoh; threshold dan perlakuan cell dapat disesuaikan.

---

# Slide 22 — Iterasi Cellular Automata

```text
repeat smoothCount times:
    newGrid = empty grid
    for each cell:
        if cell is on boundary:
            newGrid[cell] = wall
        else:
            n = count 8 wall neighbors in old grid
            newGrid[cell] = wall if n >= 5 else floor
    grid = newGrid
```

- Iterasi mengubah bentuk dan kepadatan area; lebih banyak iterasi tidak selalu menghasilkan level lebih baik.
- Hasil perlu diperiksa karena aturan lokal tidak menjamin konektivitas global.

---

# Slide 23 — Menangani Region Cave yang Terputus

1. Temukan seluruh region floor dengan flood fill.
2. Ukur luas setiap region dan tentukan area yang dipertahankan.
3. Pilih strategi: pertahankan region terbesar, atau hubungkan region yang dipilih dengan corridor.
4. Tempatkan start dan goal pada area yang terhubung.
5. Validasi ulang setelah perubahan layout.

**Cellular automata unggul pada bentuk natural, tetapi memerlukan kontrol konektivitas.**

---

# Slide 24 — Parameter dan Constraint

- **Parameter** mengatur proses: ukuran peta, walk length, ukuran minimum room, dan peluang wall.
- **Constraint** menetapkan syarat hasil: goal terjangkau, room terhubung, dan zona start aman.
- Constraint dapat diterapkan saat generation maupun melalui pemeriksaan hasil.
- Constraint-based generation dapat melengkapi random walk, BSP, dan cellular automata.

> Algoritma membentuk ruang; constraint mengarahkannya pada kebutuhan gameplay.

---

# Slide 25 — Hard Constraint dan Soft Constraint

| Jenis | Makna | Contoh |
|---|---|---|
| Hard constraint | Wajib dipenuhi agar level diterima | Start terhubung ke goal; semua room wajib terjangkau; spawn berada di floor |
| Soft constraint | Preferensi yang diberi skor | Goal relatif jauh; reward berada di cabang; corridor tidak terlalu panjang |

- Prioritas constraint mengikuti tujuan desain game.
- Hanya kandidat yang lolos hard constraint yang dibandingkan dengan skor soft constraint.

---

# Slide 26 — Generate, Validate, Repair

1. Generate kandidat level.
2. Periksa hard constraint.
3. Jika gagal, lakukan repair atau generate ulang.
4. Nilai kandidat valid menggunakan soft constraint.
5. Pilih kandidat sesuai target kualitas atau anggaran pencarian.

**Contoh repair:** sambungkan region, lebarkan corridor, atau pindahkan spawn yang tidak valid.  
**Kontrol proses:** batasi percobaan dan sediakan fallback valid; repair tetap harus diuji ulang.

---

# Slide 27 — Penempatan Start dan Goal

- Pilih start pada floor atau room yang aman.
- Hitung jarak jalur ke area lain menggunakan BFS atau Dijkstra sesuai model biaya.
- Pilih goal yang terjangkau dan memenuhi target jarak atau progres.
- Jarak lurus tidak selalu mencerminkan jarak tempuh karena wall dan corridor.
- Goal terjauh dari satu start merupakan strategi sederhana; tidak selalu berarti pasangan titik dengan jarak terbesar di seluruh dungeon.

---

# Slide 28 — Penempatan Enemy, Item, dan Reward

- Sediakan zona aman di sekitar start; pertimbangkan jarak jalur untuk enemy placement.
- Sesuaikan kepadatan enemy dengan luas room dan peran ruang dalam gameplay.
- Letakkan resource sebelum tantangan dan reward setelah tantangan atau pada cabang eksplorasi.
- Dead-end dapat berisi treasure untuk memberi alasan mengeksplorasi.
- Key harus dapat diperoleh sebelum melewati locked door yang membutuhkannya; validasi progres selain konektivitas ruang.

---

# Slide 29 — Metrik Level dan Perkiraan Kesulitan

- **Struktur:** jumlah room, corridor, dead-end, dan branching factor.
- **Navigasi:** jarak jalur start–goal dan proporsi area yang terjangkau.
- **Kepadatan:** persentase floor serta enemy/item per luas area yang dapat dilalui.
- **Kesulitan:** kombinasi tipe enemy, trap, resource, panjang jalur, dan ketersediaan cover.
- Bandingkan metrik pada beberapa seed untuk melihat variasi dan kegagalan generator.

**Skor kesulitan merupakan perkiraan yang perlu dikalibrasi melalui pengujian gameplay.**

---

# Slide 30 — Memilih Teknik Generation

| Teknik | Cocok untuk | Kekuatan | Keterbatasan utama |
|---|---|---|---|
| Random fill | Layout awal atau eksperimen kepadatan | Sangat sederhana | Tidak menjamin struktur dan konektivitas |
| Random walk | Jalur berliku dan cave sederhana | Jejak terhubung dari satu walker | Bentuk sulit dikendalikan |
| BSP | Dungeon room–corridor | Pembagian ruang terstruktur | Bentuk cenderung kotak |
| Cellular automata | Cave natural | Bentuk organik dari aturan lokal | Region dapat terputus |
| Constraint-based | Kontrol aturan gameplay | Menguji atau mengarahkan hasil | Memerlukan constraint dan evaluasi yang tepat |

**Pilihan mengikuti bentuk ruang dan pengalaman bermain yang dituju.**

---

# Slide 31 — Hybrid Dungeon Generation

**Contoh kombinasi:**

1. Gunakan BSP untuk menentukan room.
2. Hubungkan room dengan corridor.
3. Tempatkan start, goal, enemy, dan item berdasarkan aturan.
4. Periksa jalur dan constraint gameplay; repair jika diperlukan.
5. Bangun level setelah data dinyatakan valid.

- Random walk dapat menambah area organik pada bagian tertentu.
- Setiap modifikasi layout perlu diikuti pemeriksaan konektivitas dan penempatan konten.

---

# Slide 32 — Dari Data ke Level Unity dan Navigasi

- Bangun tampilan dari grid melalui Tilemap 2D atau prefab modular 3D.
- Floor, wall, corner, door, dan prop perlu mengikuti ukuran serta titik sambung yang konsisten.
- Pisahkan generator data, pembangun geometri, dan penempatan objek agar mudah diperiksa.
- Untuk NPC, gunakan grid pathfinding, waypoint graph, atau NavMesh yang sesuai dengan level hasil generation.
- Jika memakai NavMesh saat runtime: bangun geometri → siapkan NavMesh → aktifkan agent pada posisi navigasi valid.

**Konektivitas data perlu sesuai dengan ruang gerak aktual player dan NPC.**

---

# Slide 33 — Debugging dan Kesalahan Umum

- Tampilkan seed, parameter, room bounds, corridor, start, goal, dan jalur utama.
- Gunakan warna, Gizmos, atau garis bantu untuk menandai region dan spawn yang gagal validasi.
- Periksa room tumpang tindih, corridor terputus, serta player/enemy berada di wall.
- Simpan konfigurasi seed yang gagal agar masalah dapat direproduksi.
- Waspadai generation tanpa batas percobaan dan level yang tampak berbeda tetapi memiliki pola gameplay seragam.

---

# Slide 34 — Ringkasan dan Hubungan dengan Game AI

- **Grid** menyediakan representasi; **random walk, BSP, dan cellular automata** membentuk layout.
- **Constraint, validasi, dan repair** menjaga keterjangkauan serta aturan gameplay.
- **Penempatan konten dan metrik** menghubungkan struktur ruang dengan pengalaman bermain.
- Dungeon menjadi lingkungan bagi movement, pathfinding, decision AI, dan tactical AI.
- Pada **Dynamic Difficulty Adjustment**, parameter generation dapat disesuaikan dengan kondisi player sambil tetap memenuhi constraint.

> Level prosedural yang baik bervariasi, dapat dimainkan, dan sesuai tujuan desain.

---

# Slide 35 — Penutup

## TERIMA KASIH
