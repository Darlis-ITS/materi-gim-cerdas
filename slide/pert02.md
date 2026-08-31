# Game Cerdas — Pertemuan 2
## AI Architecture & Game Agent
**Program Studi S1 Teknik Informatika — Semester 7**  
**Tools:** Unity 6 + C#  
**Praktikum:** NPC Guard — Sensor + Memory + Decision

---

# Slide 1 — Cover

## AI Architecture & Game Agent

**Game Cerdas — Pertemuan 2**

Pokok bahasan:
- Intelligent Agent
- State
- Sensor / Perception
- Actuator / Action
- Update Loop
- Modular Game AI Architecture
- Memory
- Decision
- Field of View
- Line of Sight
- NavMesh-based action

Praktikum:
- **NPC Guard: Sensor + Memory + Decision**

> Fokus pertemuan ini adalah memahami bagaimana sebuah Game Agent dibangun sebagai sistem modular yang menerima informasi, menyimpan memory, mengambil keputusan, lalu melakukan action.

---

# Slide 2 — Review Pertemuan 1

Pada Pertemuan 1 kita mempelajari dasar Game AI.

Konsep utama:

```text
Environment
    ↓
Perception
    ↓
Decision
    ↓
Action
```

Praktikum pertama:

```text
NPC Detector
```

Behavior:

```text
Player jauh
    ↓
IDLE

Player masuk Detection Radius
    ↓
ALERT
```

Perception masih sangat sederhana:

```text
Vector3.Distance()
```

---

# Slide 3 — Dari NPC Detector ke NPC Guard

Praktikum 1 hanya menjawab:

```text
Apakah Player cukup dekat?
```

Praktikum 2 berkembang menjadi:

```text
Apakah Player cukup dekat?
Apakah Player berada di depan NPC?
Apakah pandangan terhalang?
Apa posisi terakhir Player?
Apa yang harus dilakukan setelah kehilangan target?
```

Behavior akhir:

```text
PATROL
   ↓
CHASE
   ↓
SEARCH
   ↓
PATROL
```

---

# Slide 4 — Mengapa Perlu Arsitektur AI?

Jika semua logika AI ditulis dalam satu script besar:

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

maka kode cepat menjadi sulit:
- dibaca,
- diuji,
- diperbaiki,
- dikembangkan,
- digunakan kembali.

Solusi:

```text
Modular Game AI Architecture
```

Setiap bagian memiliki tanggung jawab jelas.

---

# Slide 5 — Capaian Pembelajaran Pertemuan

Setelah pertemuan ini, mahasiswa diharapkan mampu:

1. Menjelaskan konsep intelligent agent.
2. Menjelaskan hubungan agent dan environment.
3. Menjelaskan state sebagai kondisi internal agent.
4. Menjelaskan sensor/perception.
5. Menjelaskan actuator/action.
6. Menjelaskan update loop Game AI.
7. Menjelaskan fungsi memory.
8. Menjelaskan decision sebagai pemilihan behavior.
9. Mendesain AI architecture yang modular.
10. Menghubungkan konsep tersebut dengan NPC Guard di Unity.

---

# Slide 6 — Apa Itu Intelligent Agent?

**Intelligent Agent** adalah entitas yang:

```text
mengamati environment
        ↓
menyimpan / mengolah informasi
        ↓
mengambil keputusan
        ↓
melakukan aksi
```

Dalam game, agent dapat berupa:
- enemy,
- guard,
- companion,
- robot,
- animal,
- vehicle,
- NPC civilian.

Pada praktikum:

```text
Agent = NPC_Guard
```

---

# Slide 7 — Struktur Dasar Intelligent Agent

Model dasar:

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

Ini adalah kerangka berpikir utama untuk Game Agent.

---

# Slide 8 — Agent vs Environment

## Agent

Objek yang mengambil keputusan.

Contoh:

```text
NPC_Guard
```

## Environment

Semua yang berada di luar agent dan dapat memengaruhinya.

Contoh:
- Player,
- Wall,
- Ground,
- Patrol Point,
- NavMesh,
- obstacle.

Agent membaca environment melalui sensor.

---

# Slide 9 — Environment pada Praktikum

Environment praktikum:

```text
Ground
Wall
Player
Patrol Points
NavMesh
```

NPC tidak perlu mengetahui seluruh dunia secara sempurna.

NPC hanya menerima informasi tertentu melalui sensor.

Contoh:

```text
CanSeePlayer
LastKnownPosition
DistanceToPlayer
```

---

# Slide 10 — State

**State** adalah kondisi internal atau mode perilaku agent.

Contoh state pada guard:

```text
PATROL
CHASE
SEARCH
```

Setiap state menjawab:

```text
Apa yang sedang dilakukan NPC sekarang?
```

State penting untuk:
- decision,
- debugging,
- animation,
- movement settings,
- behavior transition.

---

# Slide 11 — State sebagai Internal Condition

Contoh:

```text
Current State = PATROL
```

artinya NPC sedang:
- bergerak antar waypoint,
- memakai patrol speed,
- belum mengejar Player.

Jika:

```text
Current State = CHASE
```

artinya NPC:
- mengejar Player,
- memakai chase speed,
- destination mengikuti Player.

---

# Slide 12 — State Transition

State dapat berubah karena kondisi tertentu.

Contoh:

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

Transisi tidak terjadi secara acak.

Transisi dipicu oleh data perception dan memory.

---

# Slide 13 — State dan Decision

Decision menentukan:

```text
State berikutnya apa?
```

Contoh rule:

```text
IF Player terlihat
    CHASE

ELSE IF Player baru hilang
    SEARCH

ELSE
    PATROL
```

State adalah hasil keputusan.

Action kemudian menjalankan behavior sesuai state tersebut.

---

# Slide 14 — Sensor

**Sensor** adalah bagian agent yang memperoleh informasi dari environment.

Contoh sensor:
- vision,
- hearing,
- touch,
- damage,
- distance,
- proximity,
- raycast,
- trigger.

Dalam praktikum:

```text
NPCSensor.cs
```

bertanggung jawab pada perception.

---

# Slide 15 — Sensor Visual

Sensor visual dapat terdiri atas tiga tahap:

```text
1. Distance Check
2. Field of View Check
3. Line of Sight Check
```

Ketiganya menjawab pertanyaan:

```text
Apakah Player benar-benar terlihat?
```

Tidak cukup hanya memeriksa jarak.

---

# Slide 16 — Perception

**Perception** adalah informasi hasil sensing yang digunakan agent.

Contoh:

```text
CanSeePlayer = true
```

atau:

```text
CanSeePlayer = false
```

Perception menyederhanakan data sensor menjadi informasi bermakna.

NPCBrain tidak perlu menghitung FOV sendiri.

NPCBrain cukup membaca:

```text
sensor.CanSeePlayer
```

---

# Slide 17 — Sensor vs Perception

## Sensor

Mekanisme memperoleh data.

Contoh:
- hitung distance,
- hitung angle,
- raycast.

## Perception

Kesimpulan dari data sensor.

Contoh:

```text
Player terlihat
```

Struktur:

```text
Distance
+
FOV
+
Raycast
    ↓
CanSeePlayer
```

---

# Slide 18 — Distance Check

Pemeriksaan pertama:

```text
Apakah Player berada dalam viewRadius?
```

Kode konsep:

```csharp
Vector3 directionToPlayer =
    player.position - transform.position;

float distanceToPlayer =
    directionToPlayer.magnitude;

if (distanceToPlayer > viewRadius)
    return;
```

Jika terlalu jauh:

```text
Player tidak terlihat
```

---

# Slide 19 — Mengapa Distance Saja Tidak Cukup?

Jika hanya menggunakan distance:

```text
Player di depan NPC
dan
Player di belakang NPC
```

akan dianggap sama.

Contoh:

```text
PLAYER ← NPC → PLAYER
```

Padahal secara visual, NPC seharusnya hanya melihat ke arah tertentu.

Karena itu diperlukan:

```text
Field of View
```

---

# Slide 20 — Field of View

**Field of View (FOV)** adalah area sudut pandang agent.

Parameter:

```text
viewRadius
viewAngle
```

Contoh:

```text
View Radius = 8
View Angle = 90°
```

Berarti NPC melihat:
- sejauh 8 unit,
- dalam cone sekitar 90°.

---

# Slide 21 — FOV secara Visual

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

Jika:

```text
View Angle = 90°
```

maka batas kiri dan kanan sekitar:

```text
±45°
```

Player di luar sudut tidak dianggap terlihat.

---

# Slide 22 — Menghitung Sudut

Unity:

```csharp
float angleToPlayer =
    Vector3.Angle(
        transform.forward,
        normalizedDirection
    );
```

Kemudian:

```csharp
if (angleToPlayer > viewAngle / 2f)
    return;
```

Makna:

```text
Jika sudut Player terlalu jauh dari arah hadap NPC,
Player tidak terlihat.
```

---

# Slide 23 — transform.forward

`transform.forward` adalah arah depan GameObject.

Untuk NPC:

```text
DirectionMarker
```

digunakan agar arah hadap mudah terlihat.

Secara konsep:

```text
NPC → transform.forward
```

FOV dihitung terhadap arah tersebut.

---

# Slide 24 — Direction Marker

Capsule tidak selalu jelas menunjukkan arah depan.

Karena itu ditambahkan:

```text
DirectionMarker
```

sebagai child NPC.

Tujuan:
- menunjukkan orientation,
- membantu debugging FOV,
- memastikan `transform.forward` sesuai harapan.

Debug visual sangat penting dalam AI.

---

# Slide 25 — Line of Sight

Walaupun Player berada:
- dalam radius,
- dalam FOV,

belum tentu Player terlihat.

Contoh:

```text
NPC ─── WALL ─── PLAYER
```

Wall harus menghalangi pandangan.

Karena itu digunakan:

```text
Line of Sight
```

---

# Slide 26 — Raycast sebagai Line of Sight

Unity menggunakan:

```csharp
Physics.Raycast()
```

Konsep:

```text
Eye Position
    ↓
Ray menuju Player
    ↓
Apakah ray mengenai obstacle?
```

Jika ya:

```text
Player tidak terlihat
```

Jika tidak:

```text
Player terlihat
```

---

# Slide 27 — Raycast Visual

Situasi 1:

```text
NPC ───────── PLAYER
```

Ray tidak terhalang:

```text
CanSeePlayer = true
```

Situasi 2:

```text
NPC ─── WALL ─── PLAYER
```

Ray mengenai Wall:

```text
CanSeePlayer = false
```

---

# Slide 28 — Layer dan LayerMask

Layer membantu mengelompokkan GameObject.

Pada praktikum:

```text
Player Layer
Obstacle Layer
```

`LayerMask` digunakan agar Raycast hanya mempertimbangkan layer tertentu.

Contoh:

```csharp
[SerializeField]
private LayerMask obstacleMask;
```

Dengan begitu, NPC dapat membedakan:
- Player,
- obstacle,
- object lain.

---

# Slide 29 — Tag vs Layer

## Tag

Digunakan untuk identitas/logical label.

Contoh:

```text
Tag = Player
```

## Layer

Digunakan untuk filtering.

Contoh:
- raycast,
- collision,
- camera culling.

Pada praktikum:

```text
Tag Player
Layer Player
Layer Obstacle
```

keduanya memiliki fungsi berbeda.

---

# Slide 30 — Eye Position

Raycast sebaiknya tidak selalu dimulai dari center object.

Karena itu digunakan:

```csharp
Vector3 eyePosition =
    transform.position +
    Vector3.up * eyeHeight;
```

Parameter:

```text
Eye Height = 1.2
```

Makna:
- sensor visual dianggap berasal dari area kepala NPC.

Ini membuat Line of Sight lebih realistis.

---

# Slide 31 — Perception Result

Setelah tiga pemeriksaan:

```text
Distance
+
FOV
+
Line of Sight
```

jika semuanya lolos:

```csharp
CanSeePlayer = true;
```

Kesimpulan:

```text
CanSeePlayer
```

menjadi output utama sensor.

---

# Slide 32 — Memory

**Memory** memungkinkan NPC menyimpan informasi dari masa lalu.

Tanpa memory:

```text
Player terlihat
    ↓
CHASE

Player masuk balik Wall
    ↓
NPC langsung lupa
    ↓
PATROL
```

Behavior seperti ini terasa tidak natural.

Dengan memory:

```text
Player hilang
    ↓
NPC masih ingat posisi terakhir
    ↓
SEARCH
```

---

# Slide 33 — lastKnownPosition

Memory utama praktikum:

```csharp
private Vector3 lastKnownPosition;
```

Ketika Player terlihat:

```csharp
lastKnownPosition =
    sensor.Player.position;
```

Makna:

```text
NPC menyimpan posisi Player
saat terakhir terlihat.
```

---

# Slide 34 — hasLastKnownPosition

Variabel:

```csharp
private bool hasLastKnownPosition;
```

menunjukkan apakah NPC punya memory valid.

Contoh:

```text
true
→ NPC masih memiliki posisi terakhir Player

false
→ NPC tidak memiliki informasi target
```

Memory tidak selalu berarti satu nilai posisi saja.

---

# Slide 35 — searchTimer sebagai Memory Temporal

Memory praktikum juga memakai waktu:

```csharp
private float searchTimer;
```

Ketika Player hilang:

```text
searchTimer = searchDuration
```

Lalu berkurang:

```csharp
searchTimer -= Time.deltaTime;
```

Artinya agent menyimpan informasi:

```text
Berapa lama lagi harus mencari?
```

---

# Slide 36 — Belief State

NPC tidak selalu mengetahui kondisi dunia yang benar.

Setelah Player menghilang:

```text
NPC tidak tahu posisi Player sekarang.
```

NPC hanya memiliki:

```text
lastKnownPosition
```

Ini adalah bentuk sederhana:

```text
Belief State
```

atau perkiraan kondisi dunia berdasarkan informasi terakhir.

---

# Slide 37 — Decision

Decision adalah proses memilih behavior berdasarkan perception dan memory.

Dalam praktikum:

```text
PATROL
CHASE
SEARCH
```

Decision rule:

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

---

# Slide 38 — Prioritas Decision

Decision praktikum memiliki prioritas.

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

Urutan penting.

Jika Player muncul saat SEARCH:

```text
CanSeePlayer = true
```

maka agent segera kembali:

```text
CHASE
```

---

# Slide 39 — Why Priority Matters?

Contoh:

```text
NPC sedang SEARCH
tetapi Player tiba-tiba terlihat.
```

Jika aturan `Search selesai` diperiksa lebih dahulu, NPC mungkin kembali PATROL walaupun Player terlihat.

Dengan prioritas:

```text
Player visible
```

selalu menjadi keputusan utama.

Ini membuat behavior konsisten.

---

# Slide 40 — Action

**Action** adalah eksekusi keputusan.

Pada praktikum, action utama dilakukan melalui:

```text
NavMeshAgent
```

Contoh:

```text
PATROL
→ SetDestination(waypoint)

CHASE
→ SetDestination(player)

SEARCH
→ SetDestination(lastKnownPosition)
```

---

# Slide 41 — Actuator

**Actuator** adalah mekanisme yang benar-benar menghasilkan perubahan di environment.

Dalam agent fisik:
- motor,
- roda,
- lengan.

Dalam game:
- `NavMeshAgent`,
- `Transform`,
- `Rigidbody`,
- Animator,
- weapon system.

Pada praktikum:

```text
Actuator utama = NavMeshAgent
```

---

# Slide 42 — Sensor dan Actuator

Analogi:

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

Arsitektur ini lebih mudah dipahami daripada menaruh semuanya dalam satu script.

---

# Slide 43 — Update Loop

AI membutuhkan update loop.

Pada praktikum:

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

Ini menunjukkan alur agent setiap frame.

---

# Slide 44 — Update Order Konseptual

Urutan ideal:

```text
1. Sense
2. Update Memory
3. Decide
4. Act
```

Dalam bentuk:

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

Loop berlangsung terus selama game aktif.

---

# Slide 45 — Sense–Think–Act Loop

Istilah populer:

```text
Sense
Think
Act
```

Dalam praktikum:

```text
Sense
→ NPCSensor

Think
→ NPCBrain
   Memory + Decision

Act
→ NavMeshAgent
```

Ini adalah pola umum banyak Game AI architecture.

---

# Slide 46 — Modular Game AI Architecture

Arsitektur modular berarti fungsi AI dipisah menjadi bagian-bagian.

Contoh:

```text
NPC_Guard
├── NPCSensor
├── NPCBrain
├── NavMeshAgent
└── DirectionMarker
```

`NPCSensor`:
- perception.

`NPCBrain`:
- memory,
- decision,
- action orchestration.

`NavMeshAgent`:
- movement/navigation.

---

# Slide 47 — Mengapa Modular?

Keuntungan:
- kode lebih mudah dibaca,
- sensor dapat diganti,
- brain dapat dikembangkan,
- movement dapat diganti,
- debug lebih mudah,
- komponen dapat dipakai ulang,
- pembagian tugas tim lebih mudah.

Contoh:
- `NPCSensor` dapat dipakai oleh beberapa jenis NPC.

---

# Slide 48 — Separation of Responsibility

Prinsip:

```text
Satu module
→ satu tanggung jawab utama
```

Contoh:

```text
NPCSensor
tidak memutuskan PATROL atau CHASE.

NPCBrain
tidak menghitung Raycast.

NavMeshAgent
tidak menentukan state.
```

Setiap bagian fokus pada tugasnya.

---

# Slide 49 — Data Flow Modular AI

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

Memory berada di NPCBrain:

```text
lastKnownPosition
searchTimer
```

Arsitektur menjadi mudah dilacak.

---

# Slide 50 — PATROL State

Dalam PATROL:

```text
NPC bergerak antar Patrol Point.
```

Action:

```csharp
agent.SetDestination(
    patrolPoints[patrolIndex].position
);
```

Kecepatan:

```text
Patrol Speed = 2
```

State ini adalah behavior default.

---

# Slide 51 — Waypoint Patrol

Waypoint:

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

Ketika NPC mendekati waypoint:

```text
remainingDistance <= waypointTolerance
```

NPC berpindah ke waypoint berikutnya.

---

# Slide 52 — NavMeshAgent.remainingDistance

`remainingDistance` menunjukkan jarak path yang masih harus ditempuh.

Contoh:

```csharp
if (!agent.pathPending &&
    agent.remainingDistance <= waypointTolerance)
{
    // pindah waypoint
}
```

Ini lebih sesuai daripada hanya menghitung jarak lurus karena NavMeshAgent menggunakan path.

---

# Slide 53 — CHASE State

CHASE aktif saat:

```text
sensor.CanSeePlayer == true
```

Action:

```csharp
agent.SetDestination(
    sensor.Player.position
);
```

Destination diperbarui terus mengikuti Player.

Kecepatan:

```text
Chase Speed = 4
```

Lebih tinggi daripada Patrol Speed.

---

# Slide 54 — SEARCH State

SEARCH aktif ketika:
- sebelumnya NPC sedang CHASE,
- Player tidak lagi terlihat,
- NPC punya `lastKnownPosition`.

Action:

```csharp
agent.SetDestination(
    lastKnownPosition
);
```

NPC menuju lokasi terakhir Player terlihat.

---

# Slide 55 — SEARCH bukan Sekadar Diam

Behavior SEARCH:

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

Jika Player muncul kembali:

```text
SEARCH
   ↓
CHASE
```

---

# Slide 56 — State Transition Diagram

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

Diagram ini penting untuk memahami decision architecture.

---

# Slide 57 — ChangeState()

Transition dikelola oleh:

```csharp
ChangeState(newState);
```

Tujuan:
- mencegah kode transition tersebar,
- mencatat previous state,
- mencetak Debug.Log,
- menjalankan logic saat state berubah.

Contoh:

```text
Patrol -> Chase
Chase -> Search
Search -> Patrol
```

---

# Slide 58 — previousState

`previousState` menyimpan state sebelumnya.

Manfaat:
- debug transition,
- analisis behavior,
- mengetahui asal state,
- pengembangan lebih lanjut.

Contoh log:

```text
NPC_Guard: Patrol -> Chase
```

Transition lebih mudah dipahami.

---

# Slide 59 — NavMesh

**NavMesh** adalah representasi area yang dapat dilalui agent.

NPC tidak perlu bergerak lurus menembus wall.

NavMesh membantu agent:
- mencari jalur,
- menghindari area non-walkable,
- bergerak menuju destination.

Pada praktikum digunakan:
- NavMesh Surface,
- NavMesh Agent.

---

# Slide 60 — NavMeshSurface

Object:

```text
Navigation
```

memiliki:

```text
NavMesh Surface
```

Fungsi:
- mendefinisikan area navigasi,
- menghasilkan data NavMesh,
- menjadi dasar pergerakan agent.

Ground harus termasuk area navigasi.

---

# Slide 61 — NavMeshAgent

NPC memiliki:

```text
NavMesh Agent
```

Parameter awal:
- Speed,
- Angular Speed,
- Acceleration,
- Stopping Distance.

Action utama:

```csharp
agent.SetDestination(...)
```

NPCBrain hanya menentukan destination.

NavMeshAgent menangani pergerakan sepanjang path.

---

# Slide 62 — Sensor dan Navigation Berbeda

Perception:

```text
Apakah Player terlihat?
```

Navigation:

```text
Bagaimana mencapai target?
```

Ini dua masalah berbeda.

Contoh:

```text
NPCSensor
→ Player terlihat

NPCBrain
→ CHASE

NavMeshAgent
→ mencari path menuju Player
```

Arsitektur modular memisahkan keduanya.

---

# Slide 63 — Gizmos untuk Sensor

Debug visual sensor:

```text
Lingkaran kuning
= View Radius

Garis kuning
= batas Field of View

Garis merah
= Player terlihat
```

Tujuan:
- memastikan radius benar,
- memastikan sudut benar,
- memastikan arah hadap benar,
- memastikan Line of Sight bekerja.

---

# Slide 64 — Gizmos untuk Memory

Memory divisualisasikan dengan:

```text
Sphere magenta
= Last Known Position
```

dan:

```text
Line dari NPC ke Last Known Position
```

Visual ini membantu melihat:

```text
Apa yang “diingat” NPC?
```

Ini penting untuk debugging internal state.

---

# Slide 65 — Gizmos untuk State

Warna state:

```text
Hijau
= PATROL

Merah
= CHASE

Biru
= SEARCH
```

Dengan begitu developer dapat melihat state tanpa membuka kode.

Visual debugging mengurangi waktu troubleshooting.

---

# Slide 66 — Console sebagai Debug Decision

Setiap state change:

```text
NPC_Guard: Patrol -> Chase
NPC_Guard: Chase -> Search
NPC_Guard: Search -> Patrol
```

Console menjawab:

```text
Kapan decision berubah?
```

Gizmos menjawab:

```text
Apa kondisi spatial-nya?
```

Keduanya saling melengkapi.

---

# Slide 67 — Parameter AI pada Praktikum

Sensor:

```text
View Radius
View Angle
Eye Height
Obstacle Mask
```

Brain:

```text
Waypoint Tolerance
Patrol Speed
Chase Speed
Search Duration
Search Tolerance
```

Navigation:

```text
Agent Speed
Angular Speed
Acceleration
Stopping Distance
```

Parameter tuning memengaruhi behavior.

---

# Slide 68 — AI Parameter Tuning

Contoh:

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

Tidak ada satu nilai yang selalu terbaik.

Nilai harus sesuai desain gameplay.

---

# Slide 69 — Fairness melalui Parameter

AI kuat belum tentu menyenangkan.

Contoh tidak fair:

```text
View Angle = 360°
View Radius sangat besar
Chase Speed jauh lebih tinggi dari Player
Search Duration sangat lama
```

Player hampir tidak punya peluang.

Game AI perlu balancing agar tetap:
- menantang,
- tetapi adil.

---

# Slide 70 — Praktikum Pertemuan 2

Judul:

## NPC Guard: Sensor + Memory + Decision

Target behavior:

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

Praktikum mengimplementasikan arsitektur agent secara konkret.

---

# Slide 71 — Scene Praktikum

Struktur utama:

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

---

# Slide 72 — Script Praktikum

Script:

```text
PlayerController.cs
NPCSensor.cs
NPCBrain.cs
```

Tanggung jawab:

```text
PlayerController
→ input dan movement Player

NPCSensor
→ distance + FOV + raycast

NPCBrain
→ memory + decision + state + action
```

---

# Slide 73 — Perception Praktikum

Perception memiliki tiga lapisan:

```text
Distance
   ↓
Field of View
   ↓
Line of Sight
   ↓
CanSeePlayer
```

Ini jauh lebih realistis dibanding praktikum pertama yang hanya menggunakan distance.

---

# Slide 74 — Memory Praktikum

Memory:

```text
lastKnownPosition
hasLastKnownPosition
searchTimer
```

Tujuan:
- NPC tidak langsung lupa,
- NPC dapat melakukan SEARCH,
- behavior lebih believable.

Memory menjadi jembatan antara perception sekarang dan decision berikutnya.

---

# Slide 75 — Decision Praktikum

Decision rule:

```text
IF Player terlihat
    CHASE

ELSE IF sebelumnya CHASE dan punya memory
    SEARCH

ELSE IF SEARCH selesai
    PATROL
```

Prioritas:

```text
Visible Player
> Search Memory
> Default Patrol
```

---

# Slide 76 — Action Praktikum

Action:

```text
PATROL
→ waypoint

CHASE
→ Player

SEARCH
→ lastKnownPosition
```

Semua action menggunakan:

```text
NavMeshAgent.SetDestination()
```

Decision memilih tujuan.  
Navigation mengeksekusi movement.

---

# Slide 77 — Arsitektur Final Praktikum

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

---

# Slide 78 — Perbedaan Praktikum 1 dan Praktikum 2

| Aspek | Praktikum 1 | Praktikum 2 |
|---|---|---|
| Perception | Distance | Distance + FOV + Raycast |
| State | IDLE / ALERT | PATROL / CHASE / SEARCH |
| Memory | Tidak ada | Last Known Position |
| Navigation | Tidak ada | NavMeshAgent |
| Action | Ubah warna | Patrol / Chase / Search |
| Architecture | sederhana | modular |
| Debug | radius + state | FOV + LOS + memory + state |

Praktikum 2 adalah pengembangan langsung dari fondasi Praktikum 1.

---

# Slide 79 — Konsep Modular yang Harus Dipahami

Mahasiswa harus mampu menjelaskan:

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

Jika hanya bisa menjalankan project tetapi tidak memahami alur ini, tujuan praktikum belum tercapai.

---

# Slide 80 — Skenario Pengujian

Minimal uji:

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

Testing harus sistematis.

---

# Slide 81 — Eksperimen Parameter

Mahasiswa dapat mengubah:

```text
View Radius
View Angle
Player Speed
Chase Speed
Search Duration
Obstacle layout
```

Pertanyaan utama:

```text
Bagaimana parameter mengubah pengalaman bermain?
```

Ini melatih mahasiswa memahami hubungan:

```text
Parameter → Behavior → Gameplay
```

---

# Slide 82 — Common Failure 1: NPC Tidak Melihat Player

Periksa:
- Player reference,
- View Radius,
- View Angle,
- arah NPC,
- obstacleMask,
- Raycast,
- posisi Player.

Debug:

```text
CanSeePlayer
```

Jika `false`, masalah ada pada sensor.

---

# Slide 83 — Common Failure 2: NPC Melihat Lewat Wall

Periksa:

```text
Wall Layer = Obstacle
```

dan:

```text
NPCSensor
Obstacle Mask = Obstacle
```

Pastikan Wall mempunyai Collider.

LayerMask adalah bagian penting dari Raycast filtering.

---

# Slide 84 — Common Failure 3: NPC Tidak Bergerak

Periksa:
- NavMesh sudah dibuat,
- NPC berada di atas NavMesh,
- NavMeshAgent terpasang,
- destination valid,
- Patrol Point di atas NavMesh.

Sensor bisa benar, decision bisa benar, tetapi actuator tetap bisa gagal.

Ini menunjukkan pentingnya modular debugging.

---

# Slide 85 — Common Failure 4: SEARCH Tidak Bekerja

Periksa:
- `lastKnownPosition`,
- `hasLastKnownPosition`,
- `searchDuration`,
- transition CHASE → SEARCH,
- NavMesh path ke posisi terakhir.

Jika memory tidak terisi:

```text
SEARCH tidak punya target.
```

---

# Slide 86 — Challenge Pengembangan

Pengembangan opsional:
- NPC berhenti di waypoint,
- NPC melihat kiri-kanan saat SEARCH,
- indikator `!` saat CHASE,
- indikator `?` saat SEARCH,
- hearing sensor,
- multiple guards,
- shared alert.

Semua pengembangan tetap menggunakan arsitektur dasar yang sama.

---

# Slide 87 — Multiple Agents

Jika NPC diduplikasi:

```text
NPC_Guard_A
NPC_Guard_B
NPC_Guard_C
```

setiap agent memiliki:
- sensor sendiri,
- memory sendiri,
- brain sendiri,
- state sendiri.

Artinya:

```text
Setiap agent dapat mengambil keputusan secara independen.
```

Ini menjadi dasar menuju multi-agent dan tactical AI.

---

# Slide 88 — Hearing sebagai Sensor Baru

Jika ditambahkan hearing:

```text
Player menghasilkan suara
        ↓
NPC menerima hearing event
        ↓
NPC menyimpan sound position
        ↓
NPC menuju sumber suara
```

Architecture tetap:

```text
Sensor
→ Memory
→ Decision
→ Action
```

Hanya jenis sensor yang berubah.

---

# Slide 89 — Hubungan dengan Materi Pertemuan 3

Pertemuan 2 menjawab:

```text
APA yang NPC lakukan?
```

Contoh:
- PATROL,
- CHASE,
- SEARCH.

Pertemuan 3 akan lebih fokus pada:

```text
BAGAIMANA NPC bergerak?
```

melalui:
- movement AI,
- steering behavior,
- Seek,
- Arrive,
- Wander,
- obstacle avoidance.

---

# Slide 90 — Ringkasan Materi

Hari ini kita mempelajari:

```text
AI Architecture & Game Agent
│
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

Konsep utama:

> Game Agent yang baik dibangun sebagai sistem modular: sensor membaca environment, memory menyimpan informasi, decision memilih behavior, dan actuator mengeksekusi action.

---

# Slide 91 — Pertanyaan Diskusi

1. Apa yang dimaksud intelligent agent?
2. Apa perbedaan agent dan environment?
3. Apa fungsi state?
4. Apa perbedaan sensor dan perception?
5. Mengapa distance saja tidak cukup?
6. Apa fungsi Field of View?
7. Apa fungsi Raycast?
8. Mengapa memory dibutuhkan?
9. Apa fungsi lastKnownPosition?
10. Apa perbedaan decision dan action?
11. Mengapa architecture modular penting?
12. Apa fungsi NavMeshAgent sebagai actuator?

---

# Slide 92 — Latihan Konsep

Diberikan NPC Guard dengan behavior:

```text
Patrol
Chase
Search
```

Tentukan:

1. Environment.
2. Sensor yang digunakan.
3. Output perception.
4. Memory.
5. State.
6. Decision rule.
7. Action.
8. Actuator.
9. Parameter AI.
10. Debug visual yang dibutuhkan.

---

# Slide 93 — Penutup

## Praktikum Pertemuan 2

Praktikum:

```text
NPC Guard:
Sensor + Memory + Decision
```

Mahasiswa akan membangun NPC yang:
- patrol,
- mendeteksi Player dengan jarak,
- menggunakan FOV,
- menggunakan Line of Sight,
- mengejar Player,
- menyimpan Last Known Position,
- melakukan SEARCH,
- kembali PATROL,
- menampilkan Gizmos dan log state.

Materi berikutnya:

```text
Movement AI & Steering Behaviors
```

---

# Catatan Pembelajaran

Urutan pembelajaran yang disarankan:

```text
1. Review NPC Detector dari Pertemuan 1
2. Jelaskan intelligent agent dan environment
3. Jelaskan state
4. Jelaskan sensor dan perception
5. Bahas distance, FOV, dan raycast
6. Jelaskan memory dan lastKnownPosition
7. Jelaskan decision dan priority
8. Jelaskan actuator/action
9. Bahas update loop
10. Jelaskan modular architecture
11. Hubungkan langsung ke NPC Guard
12. Tutup dengan skenario testing praktikum
```

Penekanan penting:

> Pertemuan 2 bukan hanya tentang membuat guard mengejar Player. Fokus utamanya adalah memahami arsitektur Game Agent: bagaimana informasi mengalir dari environment ke sensor, disimpan sebagai memory, dipakai untuk decision, lalu dieksekusi sebagai action.
