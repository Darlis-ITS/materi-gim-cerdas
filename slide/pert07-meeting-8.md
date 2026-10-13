# Game Cerdas — Pertemuan 7
## Game AI Integration & Tactical AI

**Program Studi S1 Teknik Informatika**  
**Tools:**  Unity 6 + C#  
**Posisi materi:**  Lanjutan dari Pertemuan 6 — Behavior Tree & Utility-Based AI

---

# Slide 1 — Cover

## Game AI Integration & Tactical AI

**Game Cerdas — Pertemuan 7**  
Topik bahasan:
- Perception
- Memory
- Target Selection
- Cover
- Tactical Positioning
- Coordination antar-agent
- Squad / Enemy AI sederhana

Praktikum yang akan dibuat terpisah: **Squad / Enemy AI sederhana**  
> Fokus pertemuan ini adalah mengintegrasikan berbagai komponen Game AI agar NPC tidak hanya bergerak atau mengambil keputusan sendiri, tetapi dapat bertindak lebih taktis dan bekerja dalam kelompok.

---

# Slide 2 — Review Pertemuan Sebelumnya

Sampai Pertemuan 6, kita telah mempelajari beberapa komponen penting Game AI.

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

Pertemuan 7 menggabungkan beberapa komponen tersebut menjadi sistem AI yang lebih lengkap.

---

# Slide 3 — Posisi Materi Pertemuan 7

Materi hari ini berada pada tahap integrasi.

```text
Perception
    ↓
Memory
    ↓
Decision Making
    ↓
Target Selection
    ↓
Tactical Positioning
    ↓
Navigation
    ↓
Movement
    ↓
Coordination
```

Jika pertemuan sebelumnya membahas komponen satu per satu, maka pertemuan ini membahas:

> Bagaimana komponen AI tersebut bekerja bersama untuk menghasilkan perilaku taktis.

---

# Slide 4 — Mengapa Game AI Perlu Integrasi?

NPC yang baik tidak hanya membutuhkan satu kemampuan.

Contoh enemy yang lebih realistis harus dapat:

```text
Melihat player
Mengingat posisi terakhir player
Memilih target
Mencari posisi cover
Bergerak ke posisi taktis
Menyerang saat aman
Bekerja sama dengan enemy lain
```

Jika hanya memiliki satu kemampuan, NPC terlihat sederhana.

Contoh:
- hanya Seek → NPC menabrak obstacle,
- hanya NavMesh → NPC berjalan tetapi tidak punya strategi,
- hanya FSM → NPC berpindah state tetapi tidak taktis,
- hanya Behavior Tree → butuh data perception dan memory agar berguna.

---

# Slide 5 — Capaian Pembelajaran Pertemuan

Setelah pertemuan ini, mahasiswa diharapkan mampu:

1. Menjelaskan konsep integrasi Game AI.
2. Menjelaskan hubungan perception, memory, decision, navigation, dan movement.
3. Menjelaskan konsep Tactical AI dalam game.
4. Mendesain sistem target selection sederhana.
5. Menjelaskan konsep cover dan cover point.
6. Mendesain tactical positioning sederhana.
7. Menjelaskan prinsip coordination antar-agent.
8. Merancang Squad / Enemy AI sederhana di Unity.
9. Mengidentifikasi komponen Unity yang dibutuhkan untuk implementasi Tactical AI.
10. Menjelaskan batasan praktikum dan pengembangan lanjut.

---

# Slide 6 — Apa Itu Game AI Integration?

**Game AI Integration** adalah proses menggabungkan berbagai modul AI menjadi satu sistem perilaku NPC yang utuh.

Modul yang dapat digabungkan:

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

Tujuannya bukan hanya membuat NPC “bisa bergerak”, tetapi membuat NPC dapat:

```text
mengamati
memahami
memilih
bergerak
bertindak
berkoordinasi
```

---

# Slide 7 — Apa Itu Tactical AI?

**Tactical AI** adalah AI yang mengambil keputusan berdasarkan situasi taktis di lingkungan game.

Tactical AI mempertimbangkan:
- posisi player,
- posisi enemy,
- jarak,
- line of sight,
- cover,
- health,
- jumlah teman,
- posisi aman,
- peluang menyerang,
- risiko terkena serangan.

Contoh:

```text
Enemy tidak langsung menyerang,
tetapi mencari cover terlebih dahulu.
```

atau:

```text
Enemy A menekan player,
Enemy B bergerak ke samping untuk flank.
```

---

# Slide 8 — Tactical AI vs Decision AI Dasar

## Decision AI Dasar

```text
Jika player terlihat → Chase
Jika player dekat → Attack
Jika HP rendah → Flee
```

## Tactical AI

```text
Jika player terlihat:
    pilih target
    cari cover terdekat
    cek line of sight
    pilih posisi menyerang
    koordinasi dengan agent lain
```

Decision AI dasar memilih state.  
Tactical AI mempertimbangkan posisi, risiko, dan kerja sama.

---

# Slide 9 — Contoh Perilaku Taktis

Contoh perilaku Tactical AI dalam game:

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

Tidak semua harus diimplementasikan dalam praktikum.

Untuk pertemuan ini, fokus pada versi sederhana:

```text
Perception
Memory
Target Selection
Cover
Tactical Positioning
Coordination
```

---

# Slide 10 — Arsitektur Tactical Enemy AI

Contoh arsitektur:

```text
Enemy Agent
├�”€─ Perception System
├�”€─ Memory System
├�”€─ Decision System
├�”€─ Target Selection
├�”€─ Tactical Positioning
├�”€─ Navigation System
├�”€─ Combat System
└�”€─ Coordination System
```

Setiap modul memiliki tugas berbeda.

Tujuan desain modular:
- mudah diuji,
- mudah diperbaiki,
- mudah dikembangkan,
- tidak semua logika ditulis dalam satu script besar.

---

# Slide 11 — Alur Tactical AI

Alur umum:

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

Contoh:

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

---

# Slide 12 — Perception dalam Tactical AI

**Perception** adalah kemampuan NPC untuk mendapatkan informasi dari lingkungan.

Sumber perception:
- jarak,
- field of view,
- raycast,
- trigger collider,
- suara,
- damage event,
- komunikasi antar-agent.

Contoh data perception:

```text
canSeePlayer
distanceToPlayer
playerVisible
heardNoise
tookDamage
enemyNearby
coverAvailable
```

Perception adalah input utama Tactical AI.

---

# Slide 13 — Perception Visual

Perception visual biasanya membutuhkan:
- vision range,
- vision angle,
- line of sight.

Contoh:

```text
Enemy
  \      vision cone
   \    /
    \  /
   Player
```

Condition:

```text
Player berada dalam jarak
DAN dalam sudut pandang
DAN tidak tertutup obstacle
```

Unity dapat menggunakan:
- `Vector3.Distance`
- `Vector3.Angle`
- `Physics.Raycast`
- `LayerMask`

---

# Slide 14 — Field of View

Field of View atau FOV adalah area pandang agent.

Parameter:

```text
viewRadius
viewAngle
targetMask
obstacleMask
```

Logika:

```text
Jika target berada dalam radius
    cek sudut pandang

Jika target berada dalam sudut
    cek line of sight dengan raycast

Jika tidak tertutup obstacle
    target terlihat
```

FOV membuat enemy tidak dapat melihat ke segala arah secara tidak realistis.

---

# Slide 15 — Line of Sight

**Line of Sight** menentukan apakah pandangan enemy ke target terhalang obstacle.

Contoh:

```text
Enemy ● ─�”€─�”€─�”€─ █ Wall █ ─�”€─�”€─�”€─ ● Player
```

Hasil:

```text
Player tidak terlihat
```

Unity:

```csharp
Physics.Raycast(
    eyePosition,
    directionToTarget,
    out hit,
    viewDistance,
    obstacleMask
);
```

Jika ray mengenai obstacle, maka target dianggap tidak terlihat.

---

# Slide 16 — Perception Non-Visual

Selain melihat, NPC juga dapat menerima informasi lain.

Contoh:

```text
Hearing
Damage Detection
Shared Alert
Trigger Zone
Noise Event
```

Contoh:
- player menembak → enemy mendengar suara,
- enemy terkena damage → enemy tahu arah ancaman,
- satu enemy melihat player → enemy lain ikut alert.

Ini penting untuk coordination antar-agent.

---

# Slide 17 — Memory dalam Tactical AI

**Memory** menyimpan informasi yang pernah diketahui NPC.

Contoh data memory:

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

Memory membuat NPC tidak langsung “lupa” ketika player hilang dari pandangan.

Tanpa memory:

```text
Player tertutup tembok
    ↓
Enemy langsung kembali patrol
```

Dengan memory:

```text
Enemy menuju posisi terakhir player
dan mencari di area tersebut.
```

---

# Slide 18 — Last Known Position

**Last Known Position** adalah posisi terakhir target yang diketahui NPC.

Contoh:

```text
Enemy melihat player di titik A
Player menghilang
Enemy menuju titik A
Enemy mencari player
```

Data:

```csharp
Vector3 lastKnownPlayerPosition;
float lastSeenTime;
```

Penggunaan:
- search behavior,
- chase ke posisi terakhir,
- komunikasi antar-agent,
- target prediction sederhana.

---

# Slide 19 — Memory Timeout

Memory tidak harus berlaku selamanya.

Contoh:

```text
Jika player tidak terlihat selama 5 detik,
memory dianggap tidak valid.
```

Pseudocode:

```text
if Time.time - lastSeenTime > memoryDuration:
    forget target
```

Tujuan:
- NPC tidak terus mengejar informasi lama,
- perilaku lebih natural,
- sistem tidak terlalu agresif.

---

# Slide 20 — Shared Memory

Pada squad AI, informasi dapat dibagikan.

Contoh:

```text
Enemy A melihat player
        ↓
Enemy A memberi informasi ke squad
        ↓
Enemy B dan C mengetahui posisi player
```

Shared memory dapat menyimpan:

```text
sharedTarget
sharedLastKnownPosition
alertLevel
enemyWhoSpottedPlayer
```

Ini membuat kelompok enemy tampak lebih terkoordinasi.

---

# Slide 21 — Alert System

Alert system adalah tingkat kewaspadaan NPC atau squad.

Contoh level:

```text
Calm
Suspicious
Alert
Combat
```

Makna:
- Calm → patrol biasa,
- Suspicious → cek suara/posisi,
- Alert → mencari target,
- Combat → menyerang target.

Alert system dapat berbasis FSM, Behavior Tree, atau Utility AI.

---

# Slide 22 — Target Selection

**Target Selection** adalah proses memilih target yang paling relevan untuk diserang atau dikejar.

Dalam game dengan banyak target, NPC harus memilih:

```text
Target mana yang harus difokuskan?
```

Faktor:
- jarak,
- visibility,
- health target,
- threat level,
- role target,
- apakah target sedang menyerang,
- prioritas objektif.

Contoh:

```text
Pilih player yang paling dekat
atau player dengan threat tertinggi.
```

---

# Slide 23 — Mengapa Target Selection Penting?

Tanpa target selection:
- semua enemy mengejar target yang sama,
- enemy mengabaikan target berbahaya,
- squad terlihat tidak cerdas,
- gameplay kurang dinamis.

Dengan target selection:
- enemy dapat memilih target yang masuk akal,
- target dapat dibagi antar-agent,
- squad terlihat lebih hidup.

Contoh:

```text
Enemy melee memilih target dekat.
Enemy ranged memilih target terlihat.
Enemy support memilih ally yang lemah.
```

---

# Slide 24 — Target Selection Sederhana

Metode paling sederhana:

```text
Pilih target terdekat
```

Pseudocode:

```text
bestTarget = null
bestDistance = infinity

for each target:
    distance = Distance(enemy, target)

    if distance < bestDistance:
        bestDistance = distance
        bestTarget = target
```

Kelebihan:
- mudah,
- cepat,
- cocok untuk praktikum awal.

Kekurangan:
- tidak mempertimbangkan ancaman,
- tidak mempertimbangkan visibility,
- tidak mempertimbangkan objective.

---

# Slide 25 — Target Selection dengan Score

Target dapat diberi skor.

Contoh:

```text
targetScore =
distanceScore
+
visibilityScore
+
threatScore
```

Target dengan skor tertinggi dipilih.

Faktor contoh:

```text
distanceScore:
semakin dekat semakin tinggi

visibilityScore:
terlihat = tinggi
tidak terlihat = rendah

threatScore:
target yang menyerang enemy bernilai tinggi
```

Ini mirip konsep Utility AI.

---

# Slide 26 — Target Score Contoh

Contoh score:

| Faktor | Bobot |
|---|---:|
| Distance | 0.4 |
| Visibility | 0.4 |
| Threat | 0.2 |

Rumus:

```text
score =
0.4 Ã— distanceScore
+
0.4 Ã— visibilityScore
+
0.2 Ã— threatScore
```

Jika target tidak terlihat, visibilityScore dapat dibuat sangat rendah atau nol.

---

# Slide 27 — Cover dalam Tactical AI

**Cover** adalah posisi yang dapat melindungi NPC dari serangan target.

Contoh:

```text
Enemy ●     Wall █�–ˆ█�–ˆ█     Player ●
```

Jika enemy berada di balik wall, player tidak memiliki line of sight langsung.

Cover biasanya digunakan oleh:
- enemy shooter,
- stealth AI,
- tactical squad,
- survival NPC.

Cover membuat combat lebih taktis daripada hanya berlari ke arah player.

---

# Slide 28 — Cover Point

**Cover Point** adalah titik yang sudah ditentukan sebagai tempat berlindung.

Contoh scene:

```text
CoverPoint A ●
Wall █�–ˆ█�–ˆ█�–ˆ█
CoverPoint B ●
```

Dalam Unity, cover point dapat dibuat sebagai:

```text
Empty GameObject
```

atau komponen custom:

```csharp
CoverPoint.cs
```

Data cover point:
- position,
- direction,
- occupied status,
- cover quality,
- exposure to target.

---

# Slide 29 — Cover Selection

NPC perlu memilih cover yang baik.

Faktor:
- jarak ke enemy,
- jarak ke player,
- apakah cover melindungi dari player,
- apakah sudah ditempati agent lain,
- apakah masih bisa menyerang dari cover,
- kualitas cover.

Contoh:

```text
Cover terbaik =
dekat dengan enemy
+
terlindung dari player
+
tidak ditempati
```

---

# Slide 30 — Cover Validation dengan Raycast

Cover dianggap valid jika obstacle berada di antara NPC dan target.

Contoh:

```text
CoverPoint ●   Wall █�–ˆ█   Player ●
```

Raycast:

```text
CoverPoint → Player
```

Jika ray mengenai obstacle:

```text
cover valid
```

Jika ray langsung ke player:

```text
cover tidak melindungi
```

Unity:

```csharp
Physics.Raycast(
    coverPosition,
    directionToTarget,
    out hit,
    distanceToTarget,
    obstacleMask
);
```

---

# Slide 31 — Occupied Cover

Cover point sebaiknya tidak dipakai banyak NPC sekaligus.

Data:

```csharp
bool isOccupied;
GameObject occupiedBy;
```

Aturan:

```text
Jika cover sudah ditempati:
    jangan pilih cover tersebut
```

Manfaat:
- enemy tidak menumpuk,
- squad terlihat lebih realistis,
- posisi taktis lebih tersebar.

---

# Slide 32 — Cover Quality

Cover dapat memiliki kualitas.

Contoh:

```text
High Cover
Low Cover
Weak Cover
Strong Cover
```

Skor cover:

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

Untuk praktikum sederhana, cukup gunakan:
- jarak,
- validasi raycast,
- occupied status.

---

# Slide 33 — Tactical Positioning

**Tactical Positioning** adalah proses memilih posisi yang menguntungkan untuk agent.

Tujuannya:
- aman dari serangan,
- dekat dengan target,
- memiliki line of sight,
- tidak terlalu dekat dengan teman,
- dapat menyerang dari sudut baik.

Contoh posisi taktis:
- di balik cover,
- di sisi samping target,
- menjaga jarak optimal,
- mengepung target,
- menjaga pintu/area.

---

# Slide 34 — Posisi Taktis vs Posisi Terdekat

Posisi terdekat belum tentu posisi terbaik.

Contoh:

```text
Enemy memilih posisi terdekat
tetapi terbuka terhadap serangan player.
```

Tactical AI mempertimbangkan:

```text
Apakah posisi aman?
Apakah posisi punya line of sight?
Apakah posisi terlalu dekat?
Apakah posisi ditempati agent lain?
Apakah posisi mendukung squad?
```

Jadi posisi terbaik sering merupakan kompromi.

---

# Slide 35 — Attack Position

Attack position adalah posisi dari mana NPC dapat menyerang target.

Kriteria:
- target terlihat,
- jarak sesuai attack range,
- tidak terlalu terekspos,
- agent dapat mencapai posisi tersebut,
- tidak menghalangi agent lain.

Untuk enemy ranged:

```text
jarak sedang + line of sight + cover
```

Untuk enemy melee:

```text
jarak dekat + jalur bebas
```

---

# Slide 36 — Flanking

**Flanking** adalah taktik menyerang dari sisi samping atau belakang target.

Contoh:

```text
Enemy A menyerang dari depan
Enemy B bergerak ke sisi kanan player
```

Ilustrasi:

```text
        Enemy B
           ●
           |
Enemy A ●-- Player ●
```

Tujuan:
- memecah perhatian player,
- membuat combat lebih dinamis,
- mencegah semua enemy berkumpul di satu arah.

---

# Slide 37 — Flanking Sederhana

Cara sederhana menentukan posisi flank:

```text
Ambil arah dari enemy ke player
Hitung arah kanan/kiri player
Buat titik flank di sisi player
```

Unity:

```csharp
Vector3 right = player.right;
Vector3 flankPosition =
    player.position + right * flankDistance;
```

Untuk sisi kiri:

```csharp
Vector3 flankPosition =
    player.position - right * flankDistance;
```

Kemudian cek apakah posisi tersebut valid di NavMesh.

---

# Slide 38 — Maintain Distance

Enemy tidak selalu harus mendekat terus.

Untuk ranged enemy, ada jarak ideal.

Contoh:

```text
too far     → mendekat
ideal range → serang
too close   → mundur
```

Parameter:

```text
minCombatDistance
maxCombatDistance
idealCombatDistance
```

Behavior ini membuat enemy ranged lebih realistis.

---

# Slide 39 — Tactical Position Score

Posisi dapat diberi skor.

Contoh:

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

Faktor:

```text
coverScore:
apakah posisi terlindung?

lineOfSightScore:
apakah target terlihat?

distanceScore:
apakah jarak ideal?

separationScore:
apakah tidak terlalu dekat dengan teman?
```

Skor tertinggi dipilih sebagai tujuan navigasi.

---

# Slide 40 — Coordination Antar-Agent

**Coordination antar-agent** adalah kemampuan beberapa NPC untuk bekerja sama.

Tanpa coordination:

```text
Semua enemy mengejar player dari arah yang sama
dan saling menumpuk.
```

Dengan coordination:

```text
Enemy A menekan dari depan
Enemy B flank dari kiri
Enemy C mengambil cover
```

Coordination membuat kelompok enemy terlihat lebih cerdas.

---

# Slide 41 — Masalah Tanpa Koordinasi

Contoh masalah:

```text
Enemy ●�—●�—● → Player
```

Akibat:
- enemy menumpuk,
- saling menghalangi,
- semua memilih target sama,
- semua memilih cover sama,
- gameplay kurang menarik.

Solusi:
- role assignment,
- cover reservation,
- target distribution,
- separation,
- shared memory,
- group alert.

---

# Slide 42 — Shared Blackboard

Untuk squad, dapat digunakan shared blackboard.

Data bersama:

```text
sharedTarget
lastKnownTargetPosition
alertLevel
assignedCoverPoints
squadMembers
squadLeader
attackSlots
```

Setiap agent membaca data yang sama, tetapi tetap dapat memiliki keputusan lokal.

Struktur:

```text
SquadBlackboard
    ↑
Enemy A
Enemy B
Enemy C
```

---

# Slide 43 — Role Assignment

Setiap agent dapat diberi role.

Contoh:

```text
Leader
Attacker
Flanker
Support
Guard
Scout
```

Untuk praktikum sederhana:

```text
Attacker
Flanker
CoverAgent
```

Role membantu membagi tugas.

Tanpa role, semua agent cenderung melakukan aksi yang sama.

---

# Slide 44 — Role Assignment Sederhana

Contoh pembagian:

```text
Enemy 1 → Attacker
Enemy 2 → Flanker Left
Enemy 3 → Flanker Right
Enemy 4 → Cover Shooter
```

Role dapat ditentukan:
- manual dari Inspector,
- otomatis saat game mulai,
- berdasarkan jarak,
- berdasarkan health,
- berdasarkan weapon type.

Untuk praktikum, role manual lebih mudah.

---

# Slide 45 — Attack Slot

Attack slot adalah posisi di sekitar target yang dapat ditempati enemy.

Contoh:

```text
        Slot 1
          ●

Slot 2 ● Player ● Slot 3

          ●
        Slot 4
```

Manfaat:
- enemy tidak menumpuk,
- serangan terlihat terkoordinasi,
- player dikepung dari beberapa arah.

Attack slot dapat dianggap sebagai tactical position sederhana.

---

# Slide 46 — Slot Reservation

Agar dua enemy tidak memilih slot yang sama, gunakan reservation.

Data:

```text
slot.isReserved
slot.reservedBy
```

Aturan:

```text
Jika slot kosong:
    agent boleh memilih slot

Jika slot sudah reserved:
    agent cari slot lain
```

Konsep ini mirip occupied cover.

---

# Slide 47 — Group Alert

Group alert membuat satu enemy dapat memberi tahu enemy lain.

Contoh:

```text
Enemy A melihat player
        ↓
Squad alert = Combat
        ↓
Enemy B dan C ikut bergerak ke posisi taktis
```

Tanpa group alert:
- hanya enemy yang melihat player bereaksi.

Dengan group alert:
- squad terasa saling berkomunikasi.

---

# Slide 48 — Communication Event

Komunikasi antar-agent dapat dibuat melalui event.

Contoh:

```text
OnPlayerSpotted(playerPosition)
OnNeedBackup()
OnTargetLost(lastKnownPosition)
OnCoverOccupied(coverPoint)
```

Dalam praktikum sederhana, komunikasi bisa dibuat dengan method langsung:

```csharp
squadManager.ReportPlayerSeen(playerPosition);
```

atau shared data:

```csharp
squadBlackboard.lastKnownPlayerPosition = player.position;
```

---

# Slide 49 — Squad Manager

**Squad Manager** adalah objek yang mengelola data kelompok.

Tugas:
- menyimpan daftar member,
- menyimpan shared target,
- menyimpan alert level,
- mengatur role,
- mengatur cover/slot reservation,
- menerima laporan dari agent.

Struktur Unity:

```text
SquadManager
├�”€─ Enemy A
├�”€─ Enemy B
└�”€─ Enemy C
```

Squad Manager tidak harus mengontrol semua detail, cukup mengelola koordinasi dasar.

---

# Slide 50 — Local Decision vs Group Decision

## Local Decision

Setiap enemy mengambil keputusan sendiri.

Contoh:

```text
Enemy memilih cover terdekat untuk dirinya sendiri.
```

## Group Decision

Keputusan mempertimbangkan squad.

Contoh:

```text
Squad membagi cover agar tidak dipakai bersamaan.
```

Praktikum dapat menggabungkan keduanya:
- agent tetap memiliki AI lokal,
- squad manager mengatur data bersama.

---

# Slide 51 — Integrasi dengan Behavior Tree

Behavior Tree dapat menggunakan data tactical.

Contoh:

```text
Root
 └�”€─ Selector
      ├�”€─ Sequence: Take Cover
      │    ├�”€─ Is Under Fire?
      │    ├�”€─ Has Valid Cover?
      │    └�”€─ Move To Cover
      │
      ├�”€─ Sequence: Attack
      │    ├�”€─ Has Line Of Sight?
      │    └�”€─ Shoot Target
      │
      ├�”€─ Sequence: Flank
      │    ├�”€─ Role Is Flanker?
      │    └�”€─ Move To Flank Position
      │
      └�”€─ Patrol
```

Behavior Tree menjadi pengatur aksi taktis.

---

# Slide 52 — Integrasi dengan Utility AI

Utility AI juga cocok untuk Tactical AI.

Aksi:

```text
Attack
Take Cover
Flank
Retreat
Call Backup
Patrol
```

Score:

```text
TakeCoverScore =
lowHealthScore Ã— exposedScore Ã— coverAvailableScore
```

```text
AttackScore =
lineOfSightScore Ã— distanceScore Ã— confidenceScore
```

Utility AI dapat memilih aksi paling masuk akal berdasarkan kondisi.

---

# Slide 53 — Tactical Utility Example

Contoh skor:

```text
Health = rendah
Player terlihat = ya
Cover tersedia = ya
Jarak = sedang
```

Skor:

```text
Attack     = 0.55
Take Cover = 0.88
Flank      = 0.40
Retreat    = 0.70
Patrol     = 0.05
```

Aksi dipilih:

```text
Take Cover
```

Karena skor tertinggi.

---

# Slide 54 — Integrasi dengan NavMesh

Tactical AI memilih posisi.

NavMesh menjalankan pergerakan.

Contoh:

```text
Tactical AI memilih cover point
        ↓
NavMeshAgent.SetDestination(coverPoint.position)
        ↓
Agent bergerak ke cover
```

Unity:

```csharp
agent.SetDestination(selectedCover.position);
```

Untuk posisi acak taktis, perlu cek validitas:

```csharp
NavMesh.SamplePosition()
```

---

# Slide 55 — NavMesh.SamplePosition

`NavMesh.SamplePosition` digunakan untuk menemukan posisi valid di atas NavMesh.

Contoh:

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

Penting untuk:
- flank position,
- flee destination,
- tactical point,
- random patrol point.

Tanpa validasi, agent bisa diberi tujuan di luar NavMesh.

---

# Slide 56 — Integrasi dengan Movement dan Steering

Setelah posisi taktis dipilih, movement menjalankan perpindahan.

Contoh:
- NavMeshAgent untuk pathfinding,
- steering untuk local avoidance,
- rotation untuk menghadap target,
- animation untuk walk/run/attack.

Alur:

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

---

# Slide 57 — Integrasi dengan Animation

Perilaku taktis perlu didukung animasi.

Contoh animasi:
- idle,
- walk,
- run,
- crouch,
- aim,
- shoot,
- reload,
- hit,
- death.

FSM/BT/Utility AI dapat mengubah parameter Animator:

```csharp
animator.SetBool("IsInCover", true);
animator.SetBool("IsMoving", agent.velocity.magnitude > 0.1f);
animator.SetTrigger("Shoot");
```

Untuk praktikum sederhana, animasi dapat dibuat minimal atau menggunakan placeholder.

---

# Slide 58 — Tactical AI State Contoh

Walaupun menggunakan BT/Utility, state sederhana tetap berguna.

Contoh tactical state:

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

State ini dapat digunakan untuk:
- debugging,
- UI label,
- animation mode,
- behavior monitoring.

Tidak semua keputusan harus murni FSM.

---

# Slide 59 — Tactical AI Data Flow

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

Setiap frame atau interval tertentu:
- perception diperbarui,
- memory diperbarui,
- keputusan dihitung,
- tujuan navigation diperbarui.

---

# Slide 60 — Decision Interval

Tidak semua keputusan taktis harus dihitung setiap frame.

Contoh:

```text
Movement update     : setiap frame
Perception update   : 5–10 kali/detik
Tactical decision   : 2–5 kali/detik
Path recalculation  : sesuai kebutuhan
```

Manfaat:
- performa lebih baik,
- action lebih stabil,
- NPC tidak terlalu sering berubah pikiran.

---

# Slide 61 — Tactical Re-evaluation

NPC perlu mengevaluasi ulang keputusan jika:
- target berpindah jauh,
- cover tidak lagi aman,
- health berubah,
- squad member mati,
- player masuk attack range,
- line of sight berubah,
- cover ditempati agent lain.

Namun evaluasi terlalu sering membuat NPC tidak stabil.

Gunakan:
- timer,
- threshold,
- event trigger,
- minimum action duration.

---

# Slide 62 — Example: Enemy Takes Cover

Alur:

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

Komponen:
- perception,
- memory,
- cover selection,
- NavMeshAgent,
- combat action.

---

# Slide 63 — Example: Simple Flanker

Alur:

```text
Squad melihat player
        ↓
Enemy dengan role Flanker aktif
        ↓
Hitung posisi di sisi player
        ↓
Validasi dengan NavMesh
        ↓
Bergerak ke posisi flank
        ↓
Serang dari sisi
```

Ini membuat squad terasa lebih cerdas meskipun logikanya sederhana.

---

# Slide 64 — Example: Coordinated Attack

Alur:

```text
Enemy A = attacker
Enemy B = flanker
Enemy C = cover shooter
```

Perilaku:

```text
Enemy A mendekat dari depan
Enemy B bergerak ke samping
Enemy C mengambil cover dan menembak
```

Koordinasi dapat dibuat dengan:
- role,
- shared target,
- shared alert,
- attack slot,
- cover reservation.

---

# Slide 65 — Tactical AI dalam Game Genre

## Shooter

- cover,
- flank,
- suppress,
- retreat.

## RTS

- formation,
- target priority,
- group movement,
- focus fire.

## Stealth

- patrol,
- suspicion,
- search,
- alert propagation.

## RPG

- tank/healer/damage role,
- target selection,
- retreat,
- support ally.

---

# Slide 66 — Desain Praktikum Pertemuan 7

Praktikum:

## Squad / Enemy AI Sederhana

Target:
- beberapa enemy dalam satu squad,
- enemy dapat mendeteksi player,
- informasi player dibagikan,
- enemy memilih target,
- enemy mengambil cover sederhana,
- enemy memilih posisi taktis,
- enemy tidak menumpuk di posisi yang sama.

Detail teknis dan langkah implementasi dibuat pada modul praktikum terpisah.

---

# Slide 67 — Rencana Scene Praktikum

Komponen scene:

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

Diagram:

```text
Cover A ●     Wall █�–ˆ█       Cover B ●

Enemy 1 ●       Enemy 2 ●       Enemy 3 ●

                 Player ●
```

Tujuan:
- enemy mendeteksi player,
- squad masuk mode alert,
- enemy memilih cover/posisi masing-masing.

---

# Slide 68 — Rencana Behavior Enemy

Behavior sederhana:

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

Ini dapat diimplementasikan dengan FSM, Behavior Tree, atau Utility AI.

---

# Slide 69 — Rencana Script Praktikum

Struktur script yang disarankan:

```text
Scripts/
├�”€─ EnemyPerception.cs
├�”€─ EnemyMemory.cs
├�”€─ EnemyTacticalAI.cs
├�”€─ EnemyCombat.cs
├�”€─ EnemyHealth.cs
├�”€─ CoverPoint.cs
├�”€─ SquadManager.cs
├�”€─ SquadBlackboard.cs
├�”€─ SimplePlayerController.cs
└�”€─ DebugAIInfo.cs
```

Setiap script memiliki tanggung jawab berbeda agar kode tidak menumpuk dalam satu file.

---

# Slide 70 — EnemyPerception.cs

Tugas:
- mendeteksi player,
- mengecek jarak,
- mengecek field of view,
- mengecek line of sight.

Data output:

```text
canSeePlayer
distanceToPlayer
visibleTarget
```

Perception tidak memutuskan aksi.

Perception hanya menyediakan informasi untuk decision system.

---

# Slide 71 — EnemyMemory.cs

Tugas:
- menyimpan posisi terakhir player,
- menyimpan waktu terakhir melihat player,
- menentukan apakah memory masih valid.

Data:

```text
lastKnownPlayerPosition
lastSeenTime
hasValidMemory
```

Memory membuat enemy dapat mencari posisi terakhir player walaupun player tidak terlihat.

---

# Slide 72 — CoverPoint.cs

Tugas:
- menyimpan posisi cover,
- menyimpan status apakah cover ditempati,
- menyimpan kualitas cover.

Data:

```text
bool isOccupied
EnemyTacticalAI occupiedBy
float coverQuality
Transform coverTransform
```

CoverPoint dipilih oleh enemy ketika membutuhkan perlindungan.

---

# Slide 73 — SquadManager.cs

Tugas:
- menyimpan daftar anggota squad,
- menyimpan target bersama,
- menyimpan alert level,
- mengatur pembagian cover/role,
- menerima laporan player terlihat.

Data:

```text
List<EnemyTacticalAI> members
Transform sharedTarget
Vector3 sharedLastKnownPosition
SquadAlertLevel alertLevel
```

SquadManager adalah pusat koordinasi sederhana.

---

# Slide 74 — EnemyTacticalAI.cs

Tugas:
- membaca perception,
- membaca memory,
- membaca shared squad data,
- memilih aksi taktis,
- memilih cover,
- memilih posisi flank,
- memberi perintah ke NavMeshAgent.

Contoh action:
- Patrol,
- MoveToCover,
- Attack,
- Flank,
- Retreat,
- Search.

---

# Slide 75 — DebugAIInfo.cs

Debug sangat penting.

Informasi yang ditampilkan:

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

Visual:
- garis ke target,
- garis ke cover,
- radius vision,
- label state/action,
- warna gizmos berbeda untuk role berbeda.

---

# Slide 76 — Parameter Praktikum

Contoh parameter:

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

Parameter tuning dapat menghasilkan perilaku berbeda.

Contoh:
- enemy agresif,
- enemy defensif,
- enemy flanker,
- enemy penjaga.

---

# Slide 77 — Eksperimen Mahasiswa

Mahasiswa dapat mencoba:

1. Mengubah jumlah enemy.
2. Mengubah jumlah cover point.
3. Mengaktifkan atau menonaktifkan shared memory.
4. Mengubah role enemy.
5. Mengubah view radius.
6. Mengubah decision interval.
7. Membuat enemy memilih cover terdekat.
8. Membuat enemy memilih cover terbaik berdasarkan skor.
9. Membuat satu enemy flanking.
10. Membandingkan enemy individual vs squad coordinated.

---

# Slide 78 — Evaluasi Perilaku Squad

Pertanyaan evaluasi:

1. Apakah enemy dapat mendeteksi player?
2. Apakah enemy menyimpan last known position?
3. Apakah informasi player dibagikan ke squad?
4. Apakah enemy memilih cover yang valid?
5. Apakah dua enemy tidak memilih cover yang sama?
6. Apakah role enemy terlihat berbeda?
7. Apakah flanker bergerak ke sisi player?
8. Apakah enemy tetap dapat menyerang dari cover?
9. Apakah keputusan terlalu sering berubah?
10. Apakah perilaku squad terlihat lebih taktis?

---

# Slide 79 — Kesalahan Umum Tactical AI

1. Semua enemy memilih cover yang sama.
2. Enemy memilih cover yang tidak melindungi dari player.
3. Enemy terlalu sering mengganti target.
4. Enemy terlalu sering mengganti aksi.
5. Enemy mengejar posisi yang tidak valid di NavMesh.
6. Perception dan decision dicampur dalam satu script besar.
7. Shared memory tidak pernah dihapus.
8. Raycast mendeteksi layer yang salah.
9. Agent saling menumpuk.
10. Tidak ada debug visual.

---

# Slide 80 — Optimasi Tactical AI

Tactical AI dapat menjadi mahal jika banyak agent.

Optimasi:
- update perception tidak setiap frame,
- update tactical decision dengan interval,
- batasi jumlah cover yang dicek,
- gunakan radius pencarian,
- gunakan layer mask,
- cache cover points,
- hindari path recalculation terlalu sering,
- gunakan squad manager untuk data bersama.

Untuk praktikum kecil, implementasi sederhana sudah cukup.

---

# Slide 81 — Integrasi dengan Pertemuan Sebelumnya

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

Pertemuan 7 adalah jembatan dari AI individual menuju AI kelompok.

---

# Slide 82 — Contoh Arsitektur Lengkap Enemy Squad

```text
SquadManager
├�”€─ Shared Blackboard
├�”€─ Role Assignment
├�”€─ Cover Reservation
└�”€─ Alert System

Enemy Agent
├�”€─ Perception
├�”€─ Memory
├�”€─ Tactical Decision
├�”€─ NavMeshAgent
├�”€─ Combat
└�”€─ Debug Visual
```

Dengan arsitektur ini, enemy dapat:
- bereaksi secara individu,
- tetap berbagi informasi dengan squad,
- memilih posisi lebih taktis.

---

# Slide 83 — Ringkasan Materi

Hari ini kita mempelajari:

```text
Game AI Integration & Tactical AI
│
├�”€─ Perception
├�”€─ Memory
├�”€─ Target Selection
├�”€─ Cover
├�”€─ Cover Point
├�”€─ Cover Selection
├�”€─ Tactical Positioning
├�”€─ Flanking
├�”€─ Coordination
├�”€─ Shared Blackboard
├�”€─ Squad Manager
├�”€─ Role Assignment
├�”€─ Attack Slot
└�”€─ Squad / Enemy AI
```

Konsep utama:

> Tactical AI muncul dari integrasi perception, memory, decision, positioning, navigation, dan koordinasi antar-agent.

---

# Slide 84 — Pertanyaan Diskusi

1. Mengapa Tactical AI membutuhkan memory?
2. Apa perbedaan target selection dan target detection?
3. Mengapa cover perlu divalidasi dengan raycast?
4. Mengapa dua enemy tidak sebaiknya memilih cover yang sama?
5. Apa manfaat shared blackboard?
6. Apa perbedaan local decision dan group decision?
7. Bagaimana role assignment membuat squad lebih menarik?
8. Mengapa decision interval penting?
9. Bagaimana Behavior Tree dapat digunakan untuk Tactical AI?
10. Bagaimana Utility AI dapat memilih action taktis terbaik?

---

# Slide 85 — Latihan Konsep

Rancang squad enemy sederhana dengan tiga agent:

```text
Enemy 1: Attacker
Enemy 2: Flanker
Enemy 3: Cover Shooter
```

Tentukan:
1. Data perception yang dibutuhkan.
2. Data memory yang disimpan.
3. Role masing-masing enemy.
4. Cara memilih cover.
5. Cara memilih target.
6. Cara mencegah enemy menumpuk.
7. Cara squad berbagi informasi player.
8. Action utama setiap role.

---

# Slide 86 — Penutup

## Praktikum Pertemuan 7

Praktikum detail akan dibuat terpisah dengan topik:

```text
Squad / Enemy AI Sederhana
```

Fokus praktikum:
- perception,
- memory,
- shared target,
- cover point,
- tactical positioning,
- coordination antar-agent,
- Unity NavMeshAgent.

Materi berikutnya dalam rencana pembelajaran akan masuk ke:

```text
UTS / Mini Project
```

yang mengintegrasikan movement, navigation, perception, dan decision making.

---

# Catatan Pembelajaran

Urutan pembelajaran yang disarankan:

```text
1. Review komponen Game AI dari pertemuan sebelumnya
2. Jelaskan kebutuhan integrasi AI
3. Perkenalkan Tactical AI
4. Bahas perception dan memory sebagai dasar
5. Bahas target selection
6. Bahas cover dan cover point
7. Bahas tactical positioning
8. Bahas coordination antar-agent
9. Jelaskan Squad Manager dan shared blackboard
10. Hubungkan dengan Behavior Tree / Utility AI
11. Berikan gambaran praktikum Squad / Enemy AI sederhana
```

Penekanan penting:

> Tactical AI bukan berarti algoritma yang sangat kompleks. Tactical AI dapat dimulai dari aturan sederhana yang terintegrasi dengan baik: melihat target, mengingat posisi, memilih cover, mengambil posisi, dan berbagi informasi dengan agent lain.

