# Game Cerdas — Pertemuan 5
## Finite State Machine (FSM)
**Program Studi S1 Teknik Informatika — Semester 7**  
**Tools:** Unity 6 + C#  
**Posisi materi:** Lanjutan dari Pertemuan 4 — Pathfinding & Navigation

---

# Slide 1 — Cover

## Finite State Machine (FSM)

**Game Cerdas — Pertemuan 5**

Pokok bahasan:
- State
- Transition
- Condition
- Hierarchical FSM
- Desain perilaku NPC
- Implementasi konsep FSM pada Unity

Praktikum yang akan dibuat terpisah:
- **Enemy AI: Patrol → Chase → Attack → Flee**

> Fokus pertemuan ini adalah memahami bagaimana NPC dapat berpindah perilaku secara terstruktur berdasarkan kondisi di dalam game.

---

# Slide 2 — Review Pertemuan 4

Pada Pertemuan 4 kita mempelajari **Pathfinding & Navigation**.

Materi utama:
- Graph
- Waypoint
- BFS
- Dijkstra
- A*
- Heuristic
- Navigation Mesh
- Unity NavMesh

Contoh alur:

```text
NPC ingin menuju target
        ↓
Pathfinding mencari jalur
        ↓
Navigation mengikuti jalur
        ↓
Movement menggerakkan NPC
```

Pertemuan 5 melanjutkan bagian:

```text
Bagaimana NPC memutuskan perilaku apa yang sedang aktif?
```

---

# Slide 3 — Posisi FSM dalam Game AI

Arsitektur Game AI:

```text
Perception
    ↓
Memory
    ↓
Decision Making
    ↓
Pathfinding / Navigation
    ↓
Movement / Steering
    ↓
Action / Animation
```

FSM berada pada bagian:

```text
Decision Making
```

FSM menentukan perilaku aktif NPC, misalnya:

```text
Patrol
Chase
Attack
Flee
```

Pathfinding dan movement menjalankan keputusan tersebut.

---

# Slide 4 — Mengapa NPC Perlu Decision Making?

NPC tidak cukup hanya bergerak.

NPC perlu menentukan:

```text
Kapan patroli?
Kapan mengejar?
Kapan menyerang?
Kapan kabur?
Kapan kembali?
```

Contoh:

```text
Jika player tidak terlihat
    → Patrol

Jika player terlihat
    → Chase

Jika player cukup dekat
    → Attack

Jika HP rendah
    → Flee
```

Tanpa decision making, NPC akan terlihat kaku dan tidak responsif.

---

# Slide 5 — Capaian Pembelajaran Pertemuan

Setelah pertemuan ini, mahasiswa diharapkan mampu:

1. Menjelaskan konsep Finite State Machine.
2. Menjelaskan komponen state, transition, dan condition.
3. Mendesain FSM untuk perilaku NPC.
4. Membaca diagram FSM sederhana.
5. Membedakan state aktif dan event pemicu.
6. Menjelaskan kelebihan dan keterbatasan FSM.
7. Menjelaskan konsep hierarchical FSM.
8. Menghubungkan FSM dengan perception, pathfinding, movement, dan animation.
9. Merancang FSM untuk Enemy AI: Patrol → Chase → Attack → Flee.

---

# Slide 6 — Apa Itu Finite State Machine?

**Finite State Machine** atau **FSM** adalah model komputasi yang terdiri dari sejumlah state terbatas.

Pada satu waktu, sistem hanya berada pada satu state aktif.

Contoh sederhana:

```text
NPC State:
- Patrol
- Chase
- Attack
- Flee
```

Jika state aktif adalah:

```text
Chase
```

maka perilaku yang dijalankan adalah perilaku mengejar target.

---

# Slide 7 — Inti FSM

FSM memiliki tiga komponen utama:

```text
State
Transition
Condition
```

Penjelasan:

```text
State      = kondisi/perilaku aktif
Transition = perpindahan dari satu state ke state lain
Condition  = syarat yang memicu transition
```

Contoh:

```text
State awal: Patrol

Condition:
Player terlihat

Transition:
Patrol → Chase
```

---

# Slide 8 — Contoh FSM Sangat Sederhana

```text
       Player terlihat
Patrol ─────────────→ Chase

       Player hilang
Chase ──────────────→ Patrol
```

Makna:
- NPC melakukan patrol selama player tidak terlihat.
- Jika player terlihat, NPC berpindah ke Chase.
- Jika player hilang, NPC kembali Patrol.

FSM membantu perilaku NPC menjadi lebih jelas dan mudah dikontrol.

---

# Slide 9 — State

**State** adalah perilaku atau mode aktif NPC.

Contoh state pada enemy:

```text
Idle
Patrol
Alert
Chase
Attack
Search
Flee
Dead
```

Setiap state biasanya memiliki:
- aksi ketika masuk state,
- aksi selama state aktif,
- aksi ketika keluar state.

Struktur umum:

```text
OnEnter()
OnUpdate()
OnExit()
```

---

# Slide 10 — State dalam Konteks NPC

Contoh state dan perilaku:

| State | Perilaku |
|---|---|
| Idle | Diam atau animasi santai |
| Patrol | Bergerak antar waypoint |
| Chase | Mengejar player |
| Attack | Menyerang player |
| Flee | Menjauh dari player |
| Search | Mencari posisi terakhir player |
| Dead | Tidak aktif / mati |

State membuat perilaku NPC terorganisasi.

---

# Slide 11 — State Aktif

Dalam FSM, hanya satu state utama yang aktif pada satu waktu.

Contoh:

```text
currentState = Patrol
```

Artinya:
- NPC sedang menjalankan logika Patrol.
- Logika Chase belum aktif.
- Logika Attack belum aktif.
- Logika Flee belum aktif.

Jika kondisi berubah:

```text
currentState = Chase
```

maka perilaku NPC berubah.

---

# Slide 12 — Transition

**Transition** adalah perpindahan dari satu state ke state lain.

Contoh:

```text
Patrol → Chase
```

Transition terjadi karena kondisi tertentu.

Contoh:

```text
Jika player terlihat:
    Patrol → Chase
```

Transition harus dirancang dengan jelas agar NPC tidak berpindah state secara kacau.

---

# Slide 13 — Condition

**Condition** adalah syarat yang menentukan apakah transition terjadi.

Contoh condition:

```text
playerVisible == true
distanceToPlayer < attackRange
health < lowHealthThreshold
playerLost == true
```

Dalam Unity, condition biasanya dihitung dari:
- jarak,
- raycast,
- trigger collider,
- health,
- timer,
- line of sight,
- input event,
- animation event.

---

# Slide 14 — Contoh Condition Berbasis Jarak

NPC menyerang jika player cukup dekat.

```csharp
float distance =
    Vector3.Distance(transform.position, player.position);

if (distance <= attackRange)
{
    ChangeState(EnemyState.Attack);
}
```

Konsep:

```text
distanceToPlayer <= attackRange
        ↓
Chase → Attack
```

Jarak sering menjadi condition paling sederhana dalam FSM game.

---

# Slide 15 — Contoh Condition Berbasis Perception

NPC mengejar jika dapat melihat player.

```text
canSeePlayer == true
```

Contoh:

```csharp
if (canSeePlayer)
{
    ChangeState(EnemyState.Chase);
}
```

`canSeePlayer` dapat berasal dari:
- jarak,
- field of view,
- raycast,
- layer mask.

Ini menghubungkan FSM dengan sistem perception dari pertemuan sebelumnya.

---

# Slide 16 — Diagram FSM Enemy Sederhana

```text
                 player terlihat
        ┌─────────────────────────┐
        │                         ▼
     Patrol ───────────────────→ Chase
        ▲                         │
        │                         │ player dekat
        │                         ▼
        └────────────────────── Attack
            player hilang /
            selesai menyerang
```

State:
- Patrol
- Chase
- Attack

Condition:
- player terlihat,
- player dekat,
- player hilang.

---

# Slide 17 — FSM untuk Enemy AI Praktikum

Praktikum pertemuan ini akan menggunakan alur:

```text
Patrol → Chase → Attack → Flee
```

Penjelasan singkat:

```text
Patrol:
Enemy berjalan antar waypoint.

Chase:
Enemy mengejar player.

Attack:
Enemy menyerang jika player dekat.

Flee:
Enemy kabur jika HP rendah.
```

Detail implementasi teknis akan dibuat di modul praktikum terpisah.

---

# Slide 18 — State Patrol

**Patrol** adalah state ketika NPC berjalan mengikuti rute tertentu.

Contoh:

```text
Waypoint A → Waypoint B → Waypoint C → Waypoint A
```

Perilaku:
- bergerak menuju waypoint saat ini,
- jika sampai, pilih waypoint berikutnya,
- tetap memantau player.

Transition umum:
- Patrol → Chase jika player terlihat.
- Patrol → Flee jika HP rendah.

---

# Slide 19 — Patrol dengan Waypoint

Struktur scene:

```text
W1 ● ───── ● W2
 |          |
 |          |
W4 ● ───── ● W3
```

NPC bergerak:

```text
W1 → W2 → W3 → W4 → W1
```

Dalam Unity, waypoint bisa dibuat dengan:

```text
Empty GameObject
```

lalu disimpan dalam array:

```csharp
Transform[] patrolPoints;
```

---

# Slide 20 — State Chase

**Chase** adalah state ketika NPC mengejar player.

Perilaku:
- menentukan posisi player sebagai target,
- bergerak menuju player,
- terus memperbarui posisi tujuan,
- memeriksa jarak serang.

Transition umum:
- Chase → Attack jika player masuk attack range.
- Chase → Patrol/Search jika player hilang.
- Chase → Flee jika HP rendah.

Dalam Unity, Chase dapat memakai:
- `NavMeshAgent.SetDestination(player.position)`,
- steering Arrive,
- movement custom.

---

# Slide 21 — State Attack

**Attack** adalah state ketika NPC menyerang player.

Perilaku:
- berhenti atau mengurangi gerakan,
- menghadap player,
- memainkan animasi attack,
- mengurangi health player,
- menunggu cooldown attack.

Transition umum:
- Attack → Chase jika player keluar attack range.
- Attack → Flee jika HP rendah.
- Attack → Patrol/Search jika player hilang.

Parameter penting:
- attack range,
- attack damage,
- attack cooldown,
- animation duration.

---

# Slide 22 — State Flee

**Flee** adalah state ketika NPC menjauh dari player atau menuju area aman.

Perilaku:
- memilih arah menjauh dari player,
- menuju safe point,
- menghindari obstacle,
- berhenti jika sudah aman.

Transition umum:
- Flee → Patrol jika sudah aman.
- Flee → Chase jika health pulih atau bantuan datang.
- Flee → Dead jika health habis.

Flee membuat NPC terlihat lebih adaptif daripada enemy yang selalu menyerang.

---

# Slide 23 — Condition untuk Flee

Contoh condition:

```text
health <= lowHealthThreshold
```

Contoh Unity:

```csharp
if (health <= lowHealthThreshold)
{
    ChangeState(EnemyState.Flee);
}
```

Contoh parameter:

```text
Max Health = 100
Low Health Threshold = 30
```

Jika health enemy turun sampai 30 atau kurang:

```text
Enemy mulai kabur
```

---

# Slide 24 — Prioritas Transition

Transition dapat saling bertabrakan.

Contoh:
- player terlihat,
- player dekat,
- health rendah.

Pertanyaan:

```text
Harus Chase, Attack, atau Flee?
```

Solusi:

```text
Gunakan prioritas.
```

Contoh prioritas:

```text
1. Dead
2. Flee
3. Attack
4. Chase
5. Patrol
```

Jika HP rendah, Flee lebih penting daripada Attack.

---

# Slide 25 — Contoh Prioritas Condition

```text
Jika health <= 0
    → Dead

Else jika health <= lowHealthThreshold
    → Flee

Else jika player dalam attackRange
    → Attack

Else jika player terlihat
    → Chase

Else
    → Patrol
```

Urutan evaluasi sangat penting.

Jika condition tidak diprioritaskan, NPC dapat berpindah state dengan perilaku tidak logis.

---

# Slide 26 — State Transition Table

FSM dapat dirancang dalam bentuk tabel.

| Current State | Condition | Next State |
|---|---|---|
| Patrol | Player terlihat | Chase |
| Chase | Player dekat | Attack |
| Chase | Player hilang | Patrol |
| Attack | Player menjauh | Chase |
| Attack | HP rendah | Flee |
| Flee | Sudah aman | Patrol |
| Any | HP habis | Dead |

Transition table membantu sebelum menulis kode.

---

# Slide 27 — Diagram FSM Praktikum

```text
                 player terlihat
        ┌─────────────────────────┐
        │                         ▼
     Patrol ───────────────────→ Chase
        ▲                         │
        │                         │ player dekat
        │                         ▼
        │                      Attack
        │                         │
        │                         │ HP rendah
        │                         ▼
        └────────────────────── Flee
              sudah aman
```

Tambahan transition:

```text
Dari state mana pun:
HP <= 0 → Dead
```

---

# Slide 28 — FSM dan Game Loop

FSM berjalan di dalam game loop.

Contoh:

```text
Update()
    ↓
Baca sensor
    ↓
Evaluasi transition
    ↓
Jalankan state aktif
```

Pola umum:

```csharp
void Update()
{
    UpdatePerception();
    EvaluateTransitions();
    UpdateCurrentState();
}
```

Urutan ini membantu memisahkan:
- sensor,
- decision,
- action.

---

# Slide 29 — Implementasi FSM Sederhana dengan Enum

Cara paling sederhana:

```csharp
public enum EnemyState
{
    Patrol,
    Chase,
    Attack,
    Flee,
    Dead
}
```

Variabel state:

```csharp
private EnemyState currentState;
```

Update:

```csharp
switch (currentState)
{
    case EnemyState.Patrol:
        UpdatePatrol();
        break;

    case EnemyState.Chase:
        UpdateChase();
        break;

    case EnemyState.Attack:
        UpdateAttack();
        break;

    case EnemyState.Flee:
        UpdateFlee();
        break;
}
```

Cocok untuk praktikum awal.

---

# Slide 30 — Kelebihan Enum FSM

Kelebihan:
- mudah dibuat,
- mudah dibaca,
- cocok untuk jumlah state sedikit,
- cocok untuk pembelajaran,
- tidak membutuhkan banyak file.

Kekurangan:
- switch-case dapat menjadi panjang,
- sulit jika state sangat banyak,
- sulit jika tiap state kompleks,
- kurang modular.

Untuk praktikum ini, enum FSM masih sangat tepat.

---

# Slide 31 — ChangeState()

Agar perpindahan state lebih rapi, gunakan fungsi khusus:

```csharp
void ChangeState(EnemyState newState)
{
    if (currentState == newState)
        return;

    ExitState(currentState);
    currentState = newState;
    EnterState(newState);
}
```

Manfaat:
- menghindari perubahan state sembarangan,
- dapat memanggil `OnExit`,
- dapat memanggil `OnEnter`,
- memudahkan debug.

---

# Slide 32 — EnterState dan ExitState

Contoh:

```csharp
void EnterState(EnemyState state)
{
    switch (state)
    {
        case EnemyState.Patrol:
            agent.speed = patrolSpeed;
            break;

        case EnemyState.Chase:
            agent.speed = chaseSpeed;
            break;

        case EnemyState.Attack:
            agent.isStopped = true;
            break;
    }
}
```

`EnterState()` cocok untuk:
- mengatur speed,
- mengatur animasi,
- mengatur target,
- reset timer.

---

# Slide 33 — Update State

Setiap state punya fungsi update sendiri.

```csharp
void UpdatePatrol()
{
    MoveToCurrentWaypoint();

    if (CanSeePlayer())
    {
        ChangeState(EnemyState.Chase);
    }
}
```

Contoh Chase:

```csharp
void UpdateChase()
{
    MoveToPlayer();

    if (IsPlayerInAttackRange())
    {
        ChangeState(EnemyState.Attack);
    }
}
```

Dengan pola ini, kode lebih mudah dibaca.

---

# Slide 34 — FSM Berbasis Class

Untuk FSM yang lebih kompleks, setiap state dapat dibuat sebagai class.

Contoh:

```text
EnemyStateBase
├── PatrolState
├── ChaseState
├── AttackState
└── FleeState
```

Setiap class memiliki:

```csharp
Enter()
Update()
Exit()
```

Pendekatan ini lebih modular, tetapi lebih panjang untuk praktikum awal.

---

# Slide 35 — Perbandingan Enum FSM dan Class FSM

| Aspek | Enum FSM | Class FSM |
|---|---|---|
| Kemudahan | Sangat mudah | Lebih kompleks |
| Jumlah file | Sedikit | Lebih banyak |
| Cocok untuk | Praktikum awal | Project lebih besar |
| Modularitas | Rendah-sedang | Tinggi |
| Skalabilitas | Terbatas | Lebih baik |

Untuk Pertemuan 5:
- konsep diajarkan dengan diagram dan enum,
- pengembangan lanjut dapat diarahkan ke class FSM.

---

# Slide 36 — Transition yang Terlalu Cepat

Masalah umum FSM:

```text
Patrol ↔ Chase ↔ Patrol ↔ Chase
```

NPC berpindah state terlalu cepat karena condition berubah-ubah.

Contoh:
- player tepat di batas vision range,
- raycast kadang melihat kadang tidak,
- jarak tepat di attack range.

Akibat:
- NPC terlihat bergetar perilakunya,
- animasi kacau,
- movement tidak stabil.

---

# Slide 37 — Solusi: Hysteresis

**Hysteresis** berarti menggunakan batas masuk dan keluar yang berbeda.

Contoh:

```text
Masuk Chase jika jarak < 10
Keluar Chase jika jarak > 13
```

Bukan:

```text
Chase jika jarak < 10
Patrol jika jarak >= 10
```

Dengan hysteresis, state lebih stabil.

Contoh:
- attackRange = 2
- stopAttackRange = 3

---

# Slide 38 — Solusi: Timer

Gunakan timer agar state tidak langsung berubah.

Contoh:

```text
Player hilang
    ↓
Tunggu 2 detik
    ↓
Baru kembali Patrol
```

Contoh variabel:

```csharp
float lostPlayerTimer;
float lostPlayerDelay = 2f;
```

Timer membuat NPC terlihat lebih natural karena tidak langsung lupa.

---

# Slide 39 — Search sebagai State Tambahan

Sebelum kembali Patrol, NPC dapat masuk state Search.

```text
Chase
  ↓ player hilang
Search
  ↓ tidak ditemukan
Patrol
```

State Search:
- menuju posisi terakhir player,
- berputar mencari player,
- menunggu beberapa detik,
- kembali patrol jika gagal.

Ini membuat NPC lebih cerdas daripada langsung kembali patrol.

---

# Slide 40 — FSM dengan Search

```text
Patrol ── player terlihat ──→ Chase
  ▲                           │
  │                           │ player hilang
  │                           ▼
  └──── tidak ditemukan ─── Search
                              │
                              │ player terlihat lagi
                              ▼
                            Chase
```

Search menghubungkan konsep:
- perception,
- memory,
- navigation,
- FSM.

Untuk praktikum kali ini, Search bisa dijadikan pengembangan opsional.

---

# Slide 41 — Hierarchical FSM

**Hierarchical FSM** adalah FSM yang memiliki state besar dan sub-state.

Contoh:

```text
Combat
├── Chase
├── Attack
└── Flee
```

Daripada semua state berada pada level yang sama, beberapa state dikelompokkan.

Struktur:

```text
Enemy AI
├── Normal
│   ├── Idle
│   └── Patrol
│
└── Combat
    ├── Chase
    ├── Attack
    └── Flee
```

---

# Slide 42 — Mengapa Hierarchical FSM Dibutuhkan?

FSM sederhana dapat menjadi rumit jika state terlalu banyak.

Contoh:

```text
Idle
Patrol
Alert
Chase
Attack
Reload
TakeCover
Flee
Search
Dead
Stunned
```

Semakin banyak state, transition semakin sulit dikelola.

Hierarchical FSM membantu:
- mengelompokkan state,
- mengurangi transition berulang,
- membuat desain lebih rapi,
- memisahkan perilaku umum dan khusus.

---

# Slide 43 — Contoh Hierarchical FSM Enemy

```text
Enemy FSM
│
├── Alive
│   │
│   ├── Patrol Mode
│   │   ├── Idle
│   │   └── Patrol
│   │
│   └── Combat Mode
│       ├── Chase
│       ├── Attack
│       └── Flee
│
└── Dead
```

Transition global:

```text
Alive → Dead
jika health <= 0
```

Transition ini berlaku dari semua sub-state dalam Alive.

---

# Slide 44 — Keuntungan Hierarchical FSM

Contoh tanpa hierarchy:

```text
Idle → Dead
Patrol → Dead
Chase → Dead
Attack → Dead
Flee → Dead
Search → Dead
```

Dengan hierarchy:

```text
Alive → Dead
```

Karena semua state aktif berada di bawah Alive.

Manfaat:
- transition lebih sedikit,
- mudah menambahkan state baru,
- perilaku global lebih rapi.

---

# Slide 45 — State Global

Beberapa condition berlaku dari state mana pun.

Contoh:
- HP habis → Dead
- HP rendah → Flee
- terkena stun → Stunned
- game paused → Pause
- cutscene aktif → Disabled

Dalam implementasi sederhana:

```csharp
if (health <= 0)
{
    ChangeState(EnemyState.Dead);
    return;
}
```

Condition global biasanya diperiksa sebelum condition khusus state.

---

# Slide 46 — Desain Perilaku NPC

Langkah desain FSM NPC:

```text
1. Tentukan tujuan NPC
2. Daftar perilaku utama
3. Tentukan state
4. Tentukan condition
5. Buat diagram transition
6. Tentukan prioritas transition
7. Tentukan parameter
8. Implementasikan
9. Debug dan tuning
```

FSM sebaiknya didesain sebelum coding.

Diagram yang jelas akan mengurangi error implementasi.

---

# Slide 47 — Langkah 1: Tentukan Tujuan NPC

Pertanyaan:

```text
NPC ini berperan sebagai apa?
```

Contoh:
- guard,
- monster,
- animal,
- boss,
- civilian,
- ally,
- turret,
- merchant.

Peran menentukan state.

Enemy agresif berbeda dengan enemy defensif.

Civilian berbeda dengan guard.

---

# Slide 48 — Langkah 2: Daftar Perilaku

Untuk enemy praktikum:

```text
Patrol
Chase
Attack
Flee
Dead
```

Perilaku tambahan opsional:
- Idle,
- Alert,
- Search,
- Return,
- Stunned.

Mulai dari state sedikit terlebih dahulu.

Tambahkan state jika perilaku sudah stabil.

---

# Slide 49 — Langkah 3: Tentukan Condition

Contoh condition untuk enemy:

```text
canSeePlayer
distanceToPlayer <= attackRange
distanceToPlayer > attackRange
health <= lowHealthThreshold
health <= 0
distanceToPlayer >= safeDistance
```

Condition harus dapat dihitung oleh script.

Jika condition terlalu abstrak, implementasi menjadi sulit.

---

# Slide 50 — Langkah 4: Buat Diagram

Diagram membantu melihat alur.

```text
Patrol
  │ player terlihat
  ▼
Chase
  │ player dekat
  ▼
Attack
  │ HP rendah
  ▼
Flee
  │ aman
  ▼
Patrol
```

Diagram juga membantu mengecek:
- apakah ada state yang tidak bisa dicapai,
- apakah ada state tanpa jalan keluar,
- apakah transition masuk akal.

---

# Slide 51 — Langkah 5: Tentukan Parameter

Contoh parameter:

```text
visionRange
visionAngle
attackRange
attackCooldown
patrolSpeed
chaseSpeed
fleeSpeed
lowHealthThreshold
safeDistance
lostPlayerDelay
```

Parameter sebaiknya dapat diubah di Inspector:

```csharp
[SerializeField] private float visionRange = 10f;
[SerializeField] private float attackRange = 2f;
```

Ini memudahkan tuning.

---

# Slide 52 — FSM dan Unity Inspector

Gunakan `SerializeField` agar parameter muncul di Inspector.

```csharp
[SerializeField] private float patrolSpeed = 2f;
[SerializeField] private float chaseSpeed = 4f;
[SerializeField] private float attackRange = 2f;
[SerializeField] private float lowHealthThreshold = 30f;
```

Keuntungan:
- mudah eksperimen,
- tidak perlu mengubah kode,
- dosen dapat memberi tugas tuning parameter,
- mahasiswa memahami efek parameter terhadap gameplay.

---

# Slide 53 — FSM dan NavMeshAgent

FSM dapat mengatur `NavMeshAgent`.

Contoh:

```text
Patrol:
agent.SetDestination(currentWaypoint.position)

Chase:
agent.SetDestination(player.position)

Attack:
agent.isStopped = true

Flee:
agent.SetDestination(safePoint.position)
```

Dengan demikian:
- FSM memutuskan state,
- NavMeshAgent menjalankan navigation.

---

# Slide 54 — FSM dan Steering

Jika tidak memakai NavMesh, FSM dapat mengatur steering.

Contoh:

```text
Patrol:
Arrive(currentWaypoint)

Chase:
Arrive(player)

Attack:
Stop and face player

Flee:
Flee(player)
```

FSM tidak harus bergantung pada NavMesh.

FSM dapat dipasangkan dengan:
- Transform movement,
- Rigidbody movement,
- steering behavior,
- NavMeshAgent.

---

# Slide 55 — FSM dan Animation

Setiap state dapat memicu animasi.

Contoh:

```text
Patrol → Walk animation
Chase  → Run animation
Attack → Attack animation
Flee   → Run/Flee animation
Dead   → Death animation
```

Dalam Unity, biasanya menggunakan:

```text
Animator
Animator Controller
Animation Parameter
```

Contoh:

```csharp
animator.SetBool("IsChasing", true);
animator.SetTrigger("Attack");
```

Untuk praktikum awal, animasi dapat dibuat sederhana atau opsional.

---

# Slide 56 — FSM dan Debugging

FSM harus mudah dilihat saat runtime.

Contoh debug:

```csharp
Debug.Log("Current State: " + currentState);
```

Atau tampilkan di atas NPC:

```text
Enemy
State: Chase
HP: 45
```

Visual debugging dapat menampilkan:
- state aktif,
- vision range,
- attack range,
- destination,
- waypoint,
- line of sight.

---

# Slide 57 — Debug Visual dengan Gizmos

Contoh:

```csharp
void OnDrawGizmosSelected()
{
    Gizmos.color = Color.yellow;
    Gizmos.DrawWireSphere(transform.position, visionRange);

    Gizmos.color = Color.red;
    Gizmos.DrawWireSphere(transform.position, attackRange);
}
```

Gizmos membantu mahasiswa melihat:
- radius deteksi,
- radius serangan,
- safe distance,
- waypoint,
- arah pandang.

Dalam Game AI, debug visual sangat penting.

---

# Slide 58 — Kesalahan Umum pada FSM

1. Terlalu banyak state sejak awal.
2. Transition tidak jelas.
3. Condition saling bertabrakan.
4. Tidak ada prioritas.
5. State berpindah terlalu cepat.
6. Tidak ada debug state.
7. Semua logika ditulis dalam satu fungsi besar.
8. Tidak memisahkan perception dan decision.
9. Attack tidak memiliki cooldown.
10. Flee tidak memiliki kondisi selesai.

---

# Slide 59 — Masalah: State Explosion

**State explosion** terjadi ketika jumlah state dan transition menjadi terlalu banyak.

Contoh:

```text
Idle
Patrol
Walk
Run
Chase
Attack
Reload
TakeCover
Flee
Heal
Stunned
Dead
```

Jika semua state saling terhubung, diagram menjadi sulit dikontrol.

Solusi:
- gunakan hierarchical FSM,
- gunakan Behavior Tree,
- gunakan Utility AI,
- pecah sistem menjadi beberapa FSM kecil.

---

# Slide 60 — FSM vs Behavior Tree

FSM:
- mudah dipahami,
- bagus untuk perilaku sederhana,
- transition harus didefinisikan eksplisit.

Behavior Tree:
- lebih modular,
- umum dipakai untuk AI game kompleks,
- cocok untuk perilaku bercabang.

Pertemuan 5 fokus FSM karena ini adalah fondasi decision making.

Pertemuan berikutnya dapat memperluas ke Behavior Tree dan Utility AI.

---

# Slide 61 — FSM vs Utility AI

FSM memilih state berdasarkan transition.

```text
Jika condition terpenuhi
    pindah state
```

Utility AI memilih aksi berdasarkan skor.

```text
Attack = 0.8
Flee   = 0.9
Patrol = 0.2

Pilih Flee
```

FSM cocok untuk:
- state jelas,
- perilaku mudah dipetakan,
- enemy sederhana-menengah.

Utility AI cocok untuk:
- banyak pilihan aksi,
- perilaku lebih fleksibel.

---

# Slide 62 — Studi Kasus Enemy AI

Spesifikasi enemy:

```text
Enemy berpatroli di area.
Jika melihat player, enemy mengejar.
Jika cukup dekat, enemy menyerang.
Jika HP rendah, enemy kabur.
Jika HP habis, enemy mati.
```

State:

```text
Patrol
Chase
Attack
Flee
Dead
```

Condition:

```text
canSeePlayer
distanceToPlayer <= attackRange
health <= lowHealthThreshold
health <= 0
distanceToPlayer >= safeDistance
```

---

# Slide 63 — Alur Enemy AI

```text
Start
  ↓
Patrol
  ↓ canSeePlayer
Chase
  ↓ inAttackRange
Attack
  ↓ healthLow
Flee
  ↓ safe
Patrol
```

Dari semua state:

```text
health <= 0
    ↓
Dead
```

FSM ini cukup sederhana tetapi sudah memperlihatkan decision making dasar.

---

# Slide 64 — Patrol Detail

Pada Patrol:
- enemy bergerak ke waypoint,
- jika sampai waypoint, pilih waypoint berikutnya,
- tetap memeriksa player.

Pseudocode:

```text
UpdatePatrol:
    MoveTo(currentWaypoint)

    if reached waypoint:
        select next waypoint

    if canSeePlayer:
        ChangeState(Chase)

    if health low:
        ChangeState(Flee)
```

---

# Slide 65 — Chase Detail

Pada Chase:
- enemy mengejar player,
- destination diperbarui,
- jarak ke player dicek.

Pseudocode:

```text
UpdateChase:
    MoveTo(player.position)

    if health low:
        ChangeState(Flee)

    else if distanceToPlayer <= attackRange:
        ChangeState(Attack)

    else if player lost:
        ChangeState(Patrol or Search)
```

---

# Slide 66 — Attack Detail

Pada Attack:
- enemy berhenti,
- menghadap player,
- menyerang dengan cooldown.

Pseudocode:

```text
UpdateAttack:
    FacePlayer()

    if health low:
        ChangeState(Flee)

    else if distanceToPlayer > attackRange:
        ChangeState(Chase)

    else if attackCooldown ready:
        AttackPlayer()
```

Attack perlu cooldown agar damage tidak terjadi setiap frame.

---

# Slide 67 — Flee Detail

Pada Flee:
- enemy menjauh dari player,
- menuju safe point,
- atau bergerak ke arah berlawanan dari player.

Pseudocode:

```text
UpdateFlee:
    fleeDirection = position - player.position
    destination = position + fleeDirection.normalized * fleeDistance

    MoveTo(destination)

    if distanceToPlayer >= safeDistance:
        ChangeState(Patrol)
```

Jika memakai NavMesh, safe destination harus berada di area NavMesh.

---

# Slide 68 — Dead Detail

Pada Dead:
- enemy berhenti bergerak,
- collider bisa dinonaktifkan,
- animasi death dimainkan,
- script AI dapat dihentikan.

Pseudocode:

```text
EnterDead:
    agent.isStopped = true
    collider.enabled = false
    animator.SetTrigger("Dead")
```

State Dead biasanya merupakan final state.

---

# Slide 69 — Praktikum Pertemuan 5: Gambaran Umum

Judul praktikum:

## Enemy AI: Patrol → Chase → Attack → Flee

Target praktikum:
- membuat enemy dengan beberapa state,
- membuat transition berdasarkan kondisi,
- menggunakan waypoint untuk patrol,
- menggunakan jarak/perception untuk chase,
- menggunakan attack range dan cooldown,
- menggunakan health threshold untuk flee.

Detail teknis dan langkah-langkah implementasi akan dibuat dalam modul praktikum terpisah.

---

# Slide 70 — Scene Praktikum yang Direncanakan

Komponen scene:

```text
Ground
Player
Enemy
Patrol Waypoints
Obstacle
Safe Point
Main Camera
```

Diagram:

```text
W1 ● ─────── ● W2

        Enemy ●

            █ Obstacle

Player ●                  Safe ●
```

Enemy akan:
1. patrol antar waypoint,
2. chase player jika terdeteksi,
3. attack jika dekat,
4. flee ke area aman jika HP rendah.

---

# Slide 71 — Script yang Direncanakan

Struktur script:

```text
Scripts/
├── EnemyFSM.cs
├── EnemyPerception.cs
├── EnemyHealth.cs
├── PlayerHealth.cs
└── SimplePlayerController.cs
```

`EnemyFSM.cs`
- mengatur state dan transition.

`EnemyPerception.cs`
- mendeteksi player.

`EnemyHealth.cs`
- menyimpan health enemy.

`PlayerHealth.cs`
- menerima damage.

`SimplePlayerController.cs`
- menggerakkan player untuk pengujian.

---

# Slide 72 — Parameter Praktikum

Contoh parameter:

```text
patrolSpeed = 2
chaseSpeed = 4
fleeSpeed = 5
visionRange = 10
attackRange = 2
attackDamage = 10
attackCooldown = 1.5
maxHealth = 100
lowHealthThreshold = 30
safeDistance = 12
```

Mahasiswa dapat melakukan eksperimen dengan mengubah parameter ini.

Tujuannya adalah memahami pengaruh parameter terhadap perilaku NPC.

---

# Slide 73 — Eksperimen Praktikum

Mahasiswa dapat mencoba:

1. Memperbesar vision range.
2. Memperkecil attack range.
3. Mengubah patrol speed dan chase speed.
4. Mengubah low health threshold.
5. Membuat enemy lebih agresif.
6. Membuat enemy lebih defensif.
7. Menambahkan Search state.
8. Menambahkan Alert state.
9. Menghubungkan FSM dengan NavMeshAgent.
10. Menampilkan state aktif di UI/debug log.

---

# Slide 74 — Evaluasi Perilaku NPC

Pertanyaan evaluasi:

1. Apakah enemy patrol dengan benar?
2. Apakah enemy mengejar saat player terlihat?
3. Apakah enemy menyerang hanya saat player dekat?
4. Apakah attack memiliki cooldown?
5. Apakah enemy kabur saat HP rendah?
6. Apakah enemy kembali patrol setelah aman?
7. Apakah perpindahan state stabil?
8. Apakah ada state yang tidak pernah aktif?
9. Apakah debug state mudah dibaca?
10. Apakah parameter mudah dituning?

---

# Slide 75 — Ringkasan Materi

Hari ini kita mempelajari:

```text
Finite State Machine
│
├── State
├── Transition
├── Condition
├── State Diagram
├── Transition Table
├── Enter / Update / Exit State
├── Enum FSM
├── Class-based FSM
├── Hierarchical FSM
├── Priority Transition
├── Hysteresis
├── Timer
└── NPC Behavior Design
```

FSM adalah salah satu fondasi paling penting dalam Game AI.

---

# Slide 76 — Hubungan dengan Pertemuan Sebelumnya

```text
Pertemuan 2
Perception + Memory
        ↓
Pertemuan 3
Movement + Steering
        ↓
Pertemuan 4
Pathfinding + Navigation
        ↓
Pertemuan 5
Decision Making dengan FSM
```

Gabungan:

```text
NPC melihat player
        ↓
FSM memilih Chase
        ↓
NavMesh mencari jalur
        ↓
Movement mengikuti jalur
        ↓
NPC menyerang jika dekat
```

---

# Slide 77 — Pertanyaan Diskusi

1. Mengapa FSM cocok untuk enemy AI sederhana?
2. Apa perbedaan state dan condition?
3. Mengapa transition perlu prioritas?
4. Apa yang terjadi jika state berpindah terlalu cepat?
5. Mengapa Attack perlu cooldown?
6. Kapan enemy sebaiknya Flee?
7. Apa manfaat hierarchical FSM?
8. Kapan FSM mulai menjadi sulit digunakan?
9. Bagaimana FSM berhubungan dengan NavMeshAgent?
10. Bagaimana cara membuat NPC terlihat lebih natural dengan FSM?

---

# Slide 78 — Latihan Konsep

Buat rancangan FSM untuk NPC berikut:

```text
NPC penjaga menjaga pintu.
Jika player mendekat, NPC memberi peringatan.
Jika player tetap mendekat, NPC menyerang.
Jika player pergi, NPC kembali menjaga pintu.
Jika NPC terluka parah, NPC memanggil bantuan.
```

Tentukan:
1. State apa saja yang dibutuhkan?
2. Condition apa yang memicu transition?
3. State mana yang memiliki prioritas tertinggi?
4. Apakah perlu hierarchical FSM?

---

# Slide 79 — Penutup

## Pertemuan Berikutnya

Materi berikutnya akan melanjutkan decision making ke pendekatan yang lebih fleksibel.

Topik lanjutan:
- Behavior Tree,
- Selector,
- Sequence,
- Decorator,
- Utility-Based AI,
- scoring action,
- perbandingan FSM, BT, dan Utility AI.

Praktikum detail untuk Pertemuan 5 akan dibuat terpisah:

```text
Enemy AI:
Patrol → Chase → Attack → Flee
```

---

# Catatan Pembelajaran

Urutan pembelajaran yang disarankan:

```text
1. Review pathfinding dan navigation
2. Jelaskan kebutuhan decision making
3. Perkenalkan FSM dengan contoh sederhana
4. Jelaskan state, transition, condition
5. Gunakan diagram Patrol → Chase
6. Tambahkan Attack
7. Tambahkan Flee karena HP rendah
8. Bahas prioritas transition
9. Bahas masalah state switching cepat
10. Perkenalkan hierarchical FSM
11. Hubungkan FSM dengan NavMeshAgent dan Animator
12. Tutup dengan gambaran praktikum
```

Penekanan penting:

> FSM bukan hanya teknik coding, tetapi cara berpikir untuk mendesain perilaku NPC secara terstruktur, mudah diuji, dan mudah dikembangkan.

