# Slide 0 — Pertemuan 8

## Ujian Tengah Semester

# Intelligent Game Mini Project

**Building a Playable Intelligent Game**

Integrasi Game AI Pertemuan 1–7 dalam mini game Unity yang utuh, dapat dimainkan, diamati, dan diuji.

**Mata Kuliah:** Game Cerdas  
**Program Studi:** S1 Teknik Informatika  
**Game Engine:** Unity 6 · C#

---

# Slide 1 — Bentuk UTS

UTS dilaksanakan dalam bentuk **mini project kelompok** menggunakan Unity 6 dan C#.

Setiap kelompok membuat satu **Playable Intelligent Game Vertical Slice**.

```text
PLAYABLE + INTELLIGENT + POLISHED
```

- **Playable:** memiliki gameplay loop, objective, dan kondisi akhir.
- **Intelligent:** AI memengaruhi tindakan NPC dan pengalaman bermain.
- **Polished:** environment, asset, UI, audio, dan feedback cukup layak.

Project bukan sekadar demo script atau scene berisi beberapa GameObject.

---

# Slide 2 — Apa Itu Vertical Slice?

**Vertical slice** adalah bagian kecil dari game yang sudah menunjukkan pengalaman bermain secara lengkap.

```text
Start
  ↓
Gameplay Loop
  ↓
AI Challenge
  ↓
Objective
  ↓
Win / Lose
```

Target durasi bermain sekitar **5–10 menit**.

> Satu level kecil yang selesai lebih baik daripada banyak level yang belum utuh.

---

# Slide 3 — Capaian Project UTS

Setelah menyelesaikan project, mahasiswa diharapkan mampu:

- merancang arsitektur agent yang jelas;
- menghubungkan perception, memory, dan decision making;
- menerapkan autonomous movement dan navigation;
- membuat perilaku taktis yang berdampak pada gameplay;
- mengintegrasikan AI dengan player, objective, UI, dan game state;
- menguji dan menjelaskan alasan di balik keputusan NPC;
- menghasilkan mini game yang stabil dan dapat dimainkan.

Pertanyaan utamanya:

> Bagaimana AI mengubah gameplay menjadi lebih menantang dan menarik?

---

# Slide 4 — Integrasi Materi Pertemuan 1–7

```text
P1  Introduction to Game AI
 ↓
P2  Agent Architecture: Perception + Memory
 ↓
P3  Movement & Steering
 ↓
P4  Pathfinding & Navigation
 ↓
P5  Finite State Machine
 ↓
P6  Behavior Tree / Utility AI
 ↓
P7  Tactical AI & Integration
```

Seluruh materi tidak harus berdiri sebagai fitur terpisah. Sistem harus terhubung menjadi satu alur perilaku NPC.

---

# Slide 5 — Arsitektur AI yang Diharapkan

```text
Environment / Player
         ↓
     Perception
         ↓
       Memory
         ↓
 Decision Making
         ↓
Movement & Navigation
         ↓
 Tactical Behavior
         ↓
      Gameplay
```

Contoh: NPC melihat player → menyimpan posisi terakhir → memilih `CHASE` → mencari jalur → mengejar → mengambil posisi menyerang.

AI yang baik harus **terlihat**, **dapat diuji**, dan **dapat dijelaskan**.

---

# Slide 6 — Ketentuan Kelompok

- Project dikerjakan oleh kelompok dengan **maksimal 3 mahasiswa**.
- Setiap anggota wajib berkontribusi pada aspek teknis.
- Pembagian tugas dapat disesuaikan dengan kebutuhan project.
- Semua anggota tetap harus memahami keseluruhan arsitektur AI dan gameplay.

Contoh pembagian:

| Peran | Fokus Utama |
|---|---|
| Anggota 1 | Perception, memory, decision making, AI debugging |
| Anggota 2 | Steering, NavMesh, waypoint, tactical positioning |
| Anggota 3 | Player, combat, UI, audio, level, integrasi sistem |

Saat demo, setiap anggota dapat diminta menjelaskan bagian AI tertentu.

---

# Slide 7 — Requirement Minimum

Setiap project wajib memiliki:

| Gameplay | Game AI | Presentasi Sistem |
|---|---|---|
| 1 playable level/arena | Perception system | UI sederhana |
| 1 player controller | Memory sederhana | Audio/visual feedback |
| Minimal 3 NPC/enemy | Movement/steering | Asset non-default |
| Objective yang jelas | Navigation/pathfinding | AI Debug Mode |
| Win condition | Decision making | Project stabil |
| Lose condition | Minimal 3 AI behaviors | Tanpa error merah |
| Gameplay loop | Minimal 1 tactical behavior | Siap dimainkan langsung |

---

# Slide 8 — Perception dan Memory

## Perception

NPC mendeteksi perubahan pada environment menggunakan satu atau beberapa mekanisme:

`Distance` · `Field of View` · `Raycast` · `Line of Sight` · `Hearing` · `Trigger`

## Memory

NPC menyimpan informasi yang masih diperlukan setelah stimulus tidak lagi terdeteksi:

`Last Known Position` · `Last Seen Time` · `Last Target` · `Alert Memory` · `Sound Position`

Contoh perilaku:

```text
Player terlihat → Chase
Player bersembunyi → Ingat posisi terakhir
NPC menuju posisi terakhir → Search
```

---

# Slide 9 — Movement, Navigation, dan Decision

## Movement / Steering

Minimal satu autonomous movement terlihat dalam gameplay, misalnya `Seek`, `Arrive`, `Pursue`, `Evade`, `Wander`, `Separation`, atau `Obstacle Avoidance`.

## Navigation / Pathfinding

NPC mencapai target melalui **Unity NavMesh**, waypoint, atau implementasi A*.

## Decision Making

Gunakan minimal salah satu:

- **Finite State Machine:** keputusan berdasarkan state dan transition;
- **Behavior Tree:** keputusan hierarkis melalui node;
- **Utility AI:** memilih aksi berdasarkan nilai kegunaan.

Ketiga bagian harus saling terhubung, bukan berjalan sebagai fitur yang terpisah.

---

# Slide 10 — Tactical Behavior

Setiap project menerapkan minimal satu perilaku taktis yang berdampak nyata pada gameplay.

Pilihan tactical behavior:

- mencari dan menggunakan **cover**;
- melakukan **flanking**;
- memilih target berdasarkan prioritas;
- menjaga jarak serang;
- retreat ketika kondisi tidak menguntungkan;
- menyebarkan shared alert;
- melakukan koordinasi kelompok;
- membagi role antar-NPC.

Contoh dampak nyata:

> Enemy tidak hanya mengejar player, tetapi memilih cover sementara enemy lain berpindah untuk melakukan flank.

---

# Slide 11 — Topik 1: Stealth Infiltration

## Intelligent Security Facility

Player menyusup ke fasilitas, mengambil objective, lalu mencapai extraction point tanpa tertangkap.

**Fokus AI:**

```text
Perception → Suspicion → Detection → Shared Alert
Patrol → Investigate → Chase → Search → Return
```

Komponen penting:

- guard dengan FOV dan line of sight;
- memory berupa last known position;
- patrol route dan search behavior;
- koordinasi pencarian atau shared alert;
- stealth objective dan extraction.

Environment: research facility, laboratory, military base, atau sci-fi facility.

---

# Slide 12 — Topik 2: Tactical Outpost Defense

## Intelligent Assault AI

Player mempertahankan outpost atau reactor dari beberapa wave enemy dengan role dan strategi berbeda.

**Fokus AI:**

```text
Enemy Roles + Target Selection + Cover + Flanking
             ↓
       Group Coordination
```

Komponen penting:

- enemy melee, ranged, support, atau elite;
- pemilihan target berdasarkan situasi;
- penggunaan cover dan jalur flank;
- decision making menggunakan FSM atau Utility AI;
- objective defense serta kondisi gagal yang jelas.

Environment: military outpost, desert camp, sci-fi base, atau industrial facility.

---

# Slide 13 — Topik 3: Dungeon Hunter

## Intelligent Enemy Dungeon

Player menjelajahi dungeon, mencari key atau artifact, melawan beberapa tipe enemy, lalu menghadapi Guardian.

**Fokus AI:**

```text
Melee AI + Ranged AI + Guardian AI
Navigation + Maintain Distance + Retreat
```

Komponen penting:

- tipe enemy memiliki role dan perilaku berbeda;
- melee mengejar dan menyerang dari dekat;
- ranged menjaga jarak dan memilih posisi;
- enemy dapat flee atau retreat pada kondisi tertentu;
- Guardian memiliki perubahan state atau pola serangan.

Environment: fantasy dungeon, crypt, cave, castle dungeon, atau ruins.

---

# Slide 14 — Topik 4: Zombie Extraction

## Survive and Escape

Player mencari resource atau mengaktifkan objective, bertahan dari zombie, lalu mencapai extraction zone.

**Fokus AI:**

```text
Wander → Detect → Seek / Pursue → Attack
        Vision + Hearing + Memory
```

Komponen penting:

- zombie bereaksi terhadap visual atau suara;
- last known position atau sound position;
- separation agar kelompok tidak saling bertumpuk;
- objective sebelum extraction terbuka;
- tekanan gameplay dari jumlah dan pergerakan zombie.

Environment: abandoned city, hospital, village, industrial zone, atau laboratory.

---

# Slide 15 — Topik 5: Robot Arena

## Intelligent Combat Bots

Player bertarung melawan beberapa robot dengan role dan strategi berbeda dalam arena futuristik.

**Fokus AI:**

```text
FSM / Utility AI
        ↓
Attack · Cover · Maintain Distance · Retreat
```

Komponen penting:

- combat bot dengan karakteristik berbeda;
- tactical decision berdasarkan health, jarak, dan ancaman;
- robot ranged menjaga jarak;
- robot bertahan mencari cover atau retreat;
- AI Debug menampilkan state atau utility score.

Environment: sci-fi arena, cyber arena, robot training facility, atau research lab.

---

# Slide 16 — Topik 6: MathGate Tactics

## Risk & Battle

Player memilih Math Gate yang mengubah stat sekaligus memberikan trade-off, kemudian melawan enemy dengan role AI berbeda.

Contoh gate:

```text
ATK ×2, HP −30%     atau     DEF ×2, ATK −20%
```

**Fokus gameplay dan AI:**

- player build melalui buff dan trade-off;
- enemy preview, threat level, dan potential reward;
- keputusan risk–reward sebelum pertarungan;
- role-based enemy AI dan tactical battle;
- statistik harus benar-benar memengaruhi hasil combat.

Environment: fantasy, sci-fi, dungeon, atau stylized battle arena.

---

# Slide 17 — Asset, Environment, dan Polishing

Primitive Unity boleh dipakai saat prototype, tetapi hasil final tidak boleh hanya berisi `Cube`, `Capsule`, `Sphere`, `Plane`, dan material default.

Gunakan asset yang mendukung pengalaman bermain:

- environment, karakter player, dan enemy;
- props dan animation;
- UI, sound effect, serta visual effect sederhana;
- lighting dan camera yang nyaman.

Pilih satu gaya visual yang konsisten, misalnya stylized low-poly, sci-fi, fantasy, atau military.

Asset dapat berasal dari Unity Asset Store, Kenney, itch.io, Mixamo, Poly Haven, sumber open-source, atau buatan sendiri. Pastikan lisensinya sesuai.

---

# Slide 18 — AI Debug Mode dan Pengujian

**AI Debug Mode wajib tersedia**, misalnya melalui tombol `F1`.

Informasi yang dapat ditampilkan:

- current state, target, dan destination;
- detection radius, FOV, serta raycast;
- current path dan waypoint;
- last known position;
- cover point atau flank position;
- utility score dan selected action.

Skenario uji utama:

```text
Di luar radius → Masuk FOV → Terlihat → Dikejar
       ↓
Bersembunyi di balik obstacle
       ↓
NPC menuju last known position → Search → Return
```

Debug harus membantu menjawab: **mengapa NPC mengambil keputusan tersebut?**

---

# Slide 19 — Deliverable dan Checklist Akhir

## Video Demo Penjelasan dan Uji Coba

Durasi yang disarankan **5–10 menit**, berisi:

1. identitas kelompok, nama project, dan topik;
2. gameplay, kontrol, objective, serta win/lose condition;
3. arsitektur perception–memory–decision–movement–tactical;
4. pengujian perception, memory, navigation, dan tactical behavior;
5. aktivasi AI Debug Mode dan penjelasan keputusan NPC;
6. hasil, keterbatasan, dan kontribusi setiap anggota.

## Checklist Sebelum Submit

- [ ] Game dapat dimainkan tanpa mengubah Inspector.
- [ ] Minimal 3 NPC dan 3 AI behaviors bekerja.
- [ ] Perception, memory, navigation, dan decision terintegrasi.
- [ ] Minimal 1 tactical behavior berdampak nyata.
- [ ] Objective, win, dan lose condition bekerja.
- [ ] AI Debug Mode dapat menjelaskan perilaku NPC.
- [ ] UI terbaca, asset layak, dan visual konsisten.
- [ ] Console tidak memiliki error merah.

> Buat satu mini game kecil yang selesai, menarik, dan menunjukkan integrasi Game AI Pertemuan 1–7 secara jelas.

