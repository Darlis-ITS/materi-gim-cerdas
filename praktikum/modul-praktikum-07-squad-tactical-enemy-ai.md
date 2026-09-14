# MODUL PRAKTIKUM 07  
# SQUAD TACTICAL ENEMY AI  
## Game AI Integration & Tactical AI di Unity 6

**Mata Kuliah:** Game Cerdas  
**Pertemuan:** 7  
**Tools:** Unity 6 + C#  
**Topik:** Game AI Integration & Tactical AI  

---

# 1. Tujuan Praktikum

Pada praktikum ini mahasiswa akan membangun sebuah sistem **Squad Tactical Enemy AI** sederhana yang menggabungkan beberapa konsep AI yang telah dipelajari pada pertemuan sebelumnya.

NPC enemy tidak hanya mengejar Player, tetapi mampu:

1. mendeteksi Player menggunakan Field of View,
2. memeriksa Line of Sight,
3. menyimpan posisi terakhir Player,
4. berbagi informasi Player dengan anggota squad,
5. masuk ke kondisi alert ketika salah satu enemy melihat Player,
6. memilih posisi taktis sesuai role,
7. memilih dan melakukan reservasi Cover Point,
8. melakukan flanking,
9. menggunakan NavMesh untuk bergerak,
10. menghindari penggunaan cover yang sama,
11. mengevaluasi keputusan secara berkala,
12. menampilkan informasi AI untuk debugging.

Hasil akhir yang diharapkan:

```text
                    PLAYER
                      ●
                      |
             -------------------
             |        |        |
             |        |        |
        ATTACKER   FLANKER   COVER SHOOTER
            ●          ●           ●
            ↓          ↓           ↓
          depan       sisi       cover point
```

---

# 2. Nama Project Unity yang Direkomendasikan

## Pilihan utama

```text
TacticalSquadAI
```

Nama ini merupakan rekomendasi terbaik karena:

- singkat,
- jelas,
- langsung menggambarkan tujuan project,
- mudah dibedakan dari Praktikum 1–6,
- tetap relevan jika project dikembangkan lebih lanjut.

Nama folder project:

```text
GC07_TacticalSquadAI
```

Alternatif:

```text
SquadCombatAI
TacticalEnemyAI
EnemySquadAI
SmartCombatSquad
TacticalAgentSystem
```

### Rekomendasi

Gunakan:

```text
GC07_TacticalSquadAI
```

---

# 3. Hubungan Praktikum dengan Pertemuan Sebelumnya

Praktikum ini merupakan praktikum integrasi.

```text
Praktikum 2
Perception + Memory
        ↓
Praktikum 3
Movement AI
        ↓
Praktikum 4
NavMesh + Navigation
        ↓
Praktikum 5
Finite State Machine
        ↓
Praktikum 6
Behavior Tree / Utility AI
        ↓
PRAKTIKUM 7
TACTICAL AI INTEGRATION
```

Pada Praktikum 7, berbagai komponen tersebut tidak lagi berdiri sendiri.

Semua komponen bekerja dalam satu pipeline:

```text
Sense
  ↓
Remember
  ↓
Share Information
  ↓
Evaluate Situation
  ↓
Choose Tactical Action
  ↓
Choose Tactical Position
  ↓
Navigate
  ↓
Attack / Search
  ↓
Re-evaluate
```

---

# 4. Skenario Praktikum

Game sederhana menggunakan satu Player dan tiga Enemy.

Enemy terdiri dari:

| Enemy | Role | Perilaku |
|---|---|---|
| Enemy 1 | Attacker | mendekati Player dari depan |
| Enemy 2 | Flanker | bergerak ke sisi Player |
| Enemy 3 | Cover Shooter | mencari Cover Point |

Pada kondisi awal:

```text
Enemy = Guard / Idle
Player = bergerak bebas
Squad = Calm
```

Jika salah satu enemy melihat Player:

```text
Enemy melihat Player
        ↓
Enemy melapor ke SquadManager
        ↓
Shared Target diperbarui
        ↓
Squad masuk Alert
        ↓
Semua anggota squad bereaksi
```

Tetapi setiap anggota melakukan tindakan berbeda sesuai role.

---

# 5. Arsitektur AI

Gunakan struktur modular.

```text
SquadManager
│
├── Shared Target
├── Shared Last Known Position
├── Alert Status
└── Squad Members
       │
       ├── Enemy 1
       │   ├── EnemyPerception
       │   ├── EnemyMemory
       │   ├── EnemyTacticalAI
       │   └── NavMeshAgent
       │
       ├── Enemy 2
       │
       └── Enemy 3

CoverManager / Cover Points
│
├── CoverPoint_01
├── CoverPoint_02
├── CoverPoint_03
└── CoverPoint_04
```

Keuntungan pendekatan modular:

- mudah memahami tanggung jawab script,
- mudah debugging,
- mudah mengganti algoritma,
- mudah dikembangkan,
- menghindari satu script AI berukuran sangat besar.

---

# 6. Istilah Teknis Unity yang Digunakan

## 6.1 GameObject

`GameObject` adalah objek dasar dalam Unity.

Contoh:

```text
Player
Enemy
Wall
Ground
CoverPoint
SquadManager
```

GameObject sendiri tidak memiliki banyak fungsi sampai diberikan `Component`.

---

# 6.2 Component

Component memberikan kemampuan kepada GameObject.

Contoh:

```text
Enemy
├── Transform
├── Capsule Collider
├── NavMeshAgent
├── EnemyPerception
├── EnemyMemory
└── EnemyTacticalAI
```

Konsep penting Unity adalah:

> GameObject menjadi fungsional melalui kombinasi berbagai Component.

---

# 6.3 Transform

Setiap GameObject memiliki `Transform`.

Transform menyimpan:

```text
Position
Rotation
Scale
```

Contoh mengambil posisi:

```csharp
transform.position
```

Mengambil arah depan:

```csharp
transform.forward
```

Mengambil arah kanan:

```csharp
transform.right
```

---

# 6.4 MonoBehaviour

Sebagian besar script Unity dibuat dengan menurunkan class dari:

```csharp
MonoBehaviour
```

Contoh:

```csharp
public class EnemyPerception : MonoBehaviour
{
}
```

`MonoBehaviour` memungkinkan penggunaan fungsi Unity seperti:

```csharp
Start()
Update()
OnDrawGizmos()
Invoke()
Coroutine
```

---

# 6.5 Inspector

Inspector digunakan untuk mengubah parameter component tanpa mengubah kode.

Contoh:

```csharp
public float viewRadius = 12f;
```

Akan muncul sebagai parameter di Inspector.

Keuntungan:

- parameter mudah dituning,
- tidak perlu compile ulang hanya untuk mengubah angka.

---

# 6.6 SerializeField

Alternatif yang lebih baik:

```csharp
[SerializeField] private float viewRadius = 12f;
```

Field tetap `private`, tetapi muncul di Inspector.

Ini merupakan praktik yang lebih baik untuk menjaga encapsulation.

---

# 6.7 Layer

Layer digunakan untuk mengelompokkan GameObject.

Praktikum ini menggunakan:

```text
Player
Obstacle
Ground
Enemy
```

Layer sangat penting pada:

```text
Raycast
Collision
Physics Query
LayerMask
```

---

# 6.8 Tag

Tag digunakan untuk memberikan identitas logis kepada objek.

Contoh:

```text
Player
Enemy
```

Misalnya:

```csharp
CompareTag("Player")
```

Perbedaan utama:

```text
Tag   → identitas objek

Layer → filtering physics/rendering
```

---

# 6.9 LayerMask

`LayerMask` memungkinkan Raycast hanya mengecek layer tertentu.

Contoh:

```csharp
[SerializeField] LayerMask obstacleMask;
```

Dengan ini Raycast dapat dibuat hanya mendeteksi:

```text
Wall
Crate
Building
```

tanpa mengenai objek lain yang tidak relevan.

---

# 6.10 Physics.Raycast

Raycast dapat dibayangkan sebagai sinar tak terlihat.

```text
Enemy -------------------> Player
```

Raycast digunakan untuk memeriksa:

```text
Apakah ada obstacle antara Enemy dan Player?
```

Jika ada Wall:

```text
Enemy -------- █ WALL █ -------- Player
```

maka Line of Sight terhalang.

---

# 6.11 NavMesh

NavMesh adalah representasi area yang dapat dilalui agent.

```text
Area biru NavMesh
=
area yang dapat dilalui NPC
```

NavMesh digunakan untuk pathfinding.

---

# 6.12 NavMeshAgent

`NavMeshAgent` adalah component yang membuat NPC dapat bergerak menggunakan NavMesh.

Contoh:

```csharp
agent.SetDestination(targetPosition);
```

Unity kemudian menghitung jalur menuju target tersebut.

---

# 6.13 NavMesh.SamplePosition

Digunakan untuk mencari titik NavMesh yang valid di sekitar suatu posisi.

Contoh:

```csharp
NavMesh.SamplePosition(...)
```

Sangat penting untuk posisi flank karena titik hasil perhitungan matematis belum tentu berada di area yang bisa dijangkau.

---

# 6.14 Gizmos

Gizmos adalah visual debug yang muncul di Scene View.

Digunakan untuk melihat:

```text
Vision radius
Direction
Cover point
Selected target
Flank position
```

Gizmos tidak menjadi bagian gameplay ketika game dibuild.

---

# 7. Membuat Project

Buka Unity Hub.

Pilih:

```text
New Project
```

Template yang direkomendasikan:

```text
Universal 3D
```

atau:

```text
3D
```

Nama project:

```text
GC07_TacticalSquadAI
```

Klik:

```text
Create Project
```

---

# 8. Struktur Folder Project

Buat struktur:

```text
Assets/
│
├── Scenes/
│
├── Scripts/
│   ├── Player/
│   ├── AI/
│   └── Managers/
│
├── Prefabs/
│   ├── Enemy/
│   └── Environment/
│
├── Materials/
│
└── Models/
```

Simpan scene sebagai:

```text
Assets/Scenes/Praktikum07.unity
```

---

# 9. Membuat Scene

Buat:

```text
Ground
Player
Enemy_01
Enemy_02
Enemy_03
Wall_01
Wall_02
Wall_03
CoverPoint_01
CoverPoint_02
CoverPoint_03
CoverPoint_04
SquadManager
```

Contoh layout:

```text
       Cover01 ●        ● Cover02

          █████ WALL █████

 Enemy01 ●     Enemy02 ●     Enemy03 ●


                 PLAYER ●


          █████ WALL █████

       Cover03 ●        ● Cover04
```

---

# 10. Membuat Ground

Buat:

```text
GameObject
→ 3D Object
→ Plane
```

Rename:

```text
Ground
```

Scale misalnya:

```text
X = 3
Y = 1
Z = 3
```

---

# 11. Membuat Player

Buat:

```text
GameObject
→ 3D Object
→ Capsule
```

Rename:

```text
Player
```

Tag:

```text
Player
```

Layer:

```text
Player
```

---

# 12. Player Controller Sederhana

Buat:

```text
Scripts/Player/SimplePlayerController.cs
```

Isi:

```csharp
using UnityEngine;

public class SimplePlayerController : MonoBehaviour
{
    [SerializeField] private float moveSpeed = 5f;
    [SerializeField] private float rotationSpeed = 10f;

    private void Update()
    {
        float horizontal = Input.GetAxisRaw("Horizontal");
        float vertical = Input.GetAxisRaw("Vertical");

        Vector3 direction = new Vector3(
            horizontal,
            0f,
            vertical
        ).normalized;

        if (direction.sqrMagnitude > 0.01f)
        {
            transform.position +=
                direction * moveSpeed * Time.deltaTime;

            Quaternion targetRotation =
                Quaternion.LookRotation(direction);

            transform.rotation =
                Quaternion.Slerp(
                    transform.rotation,
                    targetRotation,
                    rotationSpeed * Time.deltaTime
                );
        }
    }
}
```

Pasang ke:

```text
Player
```

Kontrol:

```text
W / ↑ = maju
S / ↓ = mundur
A / ← = kiri
D / → = kanan
```

> Jika project menggunakan **Input System only**, aktifkan kompatibilitas input lama melalui Project Settings → Player → Active Input Handling → Both, atau implementasikan controller dengan package Input System.

---

# 13. Membuat Layer

Buka:

```text
Inspector
→ Layer
→ Add Layer
```

Buat:

```text
Player
Obstacle
Enemy
Ground
```

Atur:

```text
Player     → Player
Wall       → Obstacle
Enemy      → Enemy
Ground     → Ground
```

---

# 14. Membuat Obstacle

Gunakan beberapa Cube.

```text
GameObject
→ 3D Object
→ Cube
```

Rename:

```text
Wall_01
Wall_02
Wall_03
```

Layer:

```text
Obstacle
```

Pastikan mempunyai:

```text
BoxCollider
```

Collider dibutuhkan agar Raycast dapat mendeteksi wall.

---

# 15. Menyiapkan NavMesh

Pada Unity 6, workflow yang direkomendasikan menggunakan package:

```text
AI Navigation
```

Jika belum tersedia:

```text
Window
→ Package Manager
→ Unity Registry
→ AI Navigation
→ Install
```

---

# 16. NavMeshSurface

Buat Empty GameObject:

```text
Navigation
```

Tambahkan:

```text
NavMeshSurface
```

Kemudian lakukan bake NavMesh.

Pastikan Ground dan area navigasi masuk ke konfigurasi `NavMeshSurface`.

Klik:

```text
Bake
```

Area valid akan terlihat sebagai area NavMesh pada Scene View.

---

# 17. Membuat Enemy

Buat Capsule.

Rename:

```text
Enemy_01
```

Tambahkan:

```text
NavMeshAgent
```

Set parameter awal:

```text
Speed               = 3.5
Angular Speed       = 360
Acceleration        = 8
Stopping Distance   = 1.5
```

Duplicate menjadi:

```text
Enemy_02
Enemy_03
```

---

# 18. Membuat Sistem Perception

Buat:

```text
Scripts/AI/EnemyPerception.cs
```

Kode:

```csharp
using UnityEngine;

public class EnemyPerception : MonoBehaviour
{
    [Header("Target")]
    [SerializeField] private Transform player;

    [Header("Vision")]
    [SerializeField] private float viewRadius = 12f;

    [Range(0f, 360f)]
    [SerializeField] private float viewAngle = 90f;

    [SerializeField] private LayerMask obstacleMask;

    public bool CanSeePlayer { get; private set; }
    public float DistanceToPlayer { get; private set; }

    public Transform Player => player;

    private void Update()
    {
        CheckVision();
    }

    private void CheckVision()
    {
        if (player == null)
        {
            CanSeePlayer = false;
            return;
        }

        Vector3 directionToPlayer =
            player.position - transform.position;

        DistanceToPlayer = directionToPlayer.magnitude;

        if (DistanceToPlayer > viewRadius)
        {
            CanSeePlayer = false;
            return;
        }

        float angle =
            Vector3.Angle(
                transform.forward,
                directionToPlayer.normalized
            );

        if (angle > viewAngle * 0.5f)
        {
            CanSeePlayer = false;
            return;
        }

        Vector3 eyePosition =
            transform.position + Vector3.up * 1.5f;

        Vector3 targetPosition =
            player.position + Vector3.up;

        Vector3 rayDirection =
            targetPosition - eyePosition;

        float rayDistance =
            rayDirection.magnitude;

        bool blocked =
            Physics.Raycast(
                eyePosition,
                rayDirection.normalized,
                rayDistance,
                obstacleMask
            );

        CanSeePlayer = !blocked;
    }

    private void OnDrawGizmosSelected()
    {
        Gizmos.DrawWireSphere(
            transform.position,
            viewRadius
        );

        Vector3 leftBoundary =
            DirectionFromAngle(
                -viewAngle * 0.5f
            );

        Vector3 rightBoundary =
            DirectionFromAngle(
                viewAngle * 0.5f
            );

        Gizmos.DrawLine(
            transform.position,
            transform.position + leftBoundary * viewRadius
        );

        Gizmos.DrawLine(
            transform.position,
            transform.position + rightBoundary * viewRadius
        );
    }

    private Vector3 DirectionFromAngle(float angle)
    {
        float angleInRadians =
            (transform.eulerAngles.y + angle)
            * Mathf.Deg2Rad;

        return new Vector3(
            Mathf.Sin(angleInRadians),
            0f,
            Mathf.Cos(angleInRadians)
        );
    }
}
```

---

# 19. Penjelasan EnemyPerception

## `viewRadius`

```csharp
float viewRadius
```

Menentukan jarak maksimum penglihatan NPC.

---

## `viewAngle`

Misalnya:

```text
90°
```

NPC hanya dapat melihat dalam cone 90 derajat di depan.

---

## `Vector3.Angle`

```csharp
Vector3.Angle(a, b)
```

Menghitung sudut antara dua vector.

Digunakan untuk menentukan apakah Player berada dalam FOV.

---

## `Physics.Raycast`

Mengecek apakah ada obstacle antara enemy dan Player.

---

# 20. Konfigurasi Perception

Pada ketiga Enemy:

Tambahkan:

```text
EnemyPerception
```

Isi:

```text
Player        = Player
View Radius   = 12
View Angle    = 90
Obstacle Mask = Obstacle
```

---

# 21. Membuat Enemy Memory

Buat:

```text
Scripts/AI/EnemyMemory.cs
```

Kode:

```csharp
using UnityEngine;

public class EnemyMemory : MonoBehaviour
{
    [SerializeField] private float memoryDuration = 5f;

    public Vector3 LastKnownPlayerPosition { get; private set; }
    public float LastSeenTime { get; private set; }

    public bool HasValidMemory
    {
        get
        {
            return
                Time.time - LastSeenTime
                <= memoryDuration;
        }
    }

    public void Remember(Vector3 position)
    {
        LastKnownPlayerPosition = position;
        LastSeenTime = Time.time;
    }

    public void ClearMemory()
    {
        LastSeenTime =
            Time.time - memoryDuration - 1f;
    }
}
```

---

# 22. Fungsi Memory

Jika Player terlihat:

```text
Enemy melihat Player di posisi A
```

maka:

```csharp
memory.Remember(player.position);
```

Jika Player bersembunyi:

```text
Enemy tetap mengetahui posisi A
```

sampai:

```text
memoryDuration
```

berakhir.

---

# 23. Membuat Role Enemy

Buat:

```text
Scripts/AI/EnemyRole.cs
```

Kode:

```csharp
public enum EnemyRole
{
    Attacker,
    FlankerLeft,
    FlankerRight,
    CoverShooter
}
```

`enum` adalah tipe data yang menyediakan pilihan nilai yang terbatas.

Ini lebih aman daripada menggunakan string seperti:

```text
"attacker"
"flanker"
"cover"
```

---

# 24. Membuat Squad Manager

Buat:

```text
Scripts/Managers/SquadManager.cs
```

Kode:

```csharp
using UnityEngine;

public class SquadManager : MonoBehaviour
{
    [Header("Shared Tactical Data")]
    [SerializeField] private Transform sharedTarget;

    public Transform SharedTarget => sharedTarget;

    public Vector3 SharedLastKnownPosition
    {
        get;
        private set;
    }

    public bool IsAlert
    {
        get;
        private set;
    }

    public float LastReportTime
    {
        get;
        private set;
    }

    [SerializeField]
    private float sharedMemoryDuration = 8f;

    public void ReportPlayerSeen(
        Transform target,
        Vector3 position
    )
    {
        sharedTarget = target;

        SharedLastKnownPosition =
            position;

        LastReportTime =
            Time.time;

        IsAlert = true;
    }

    private void Update()
    {
        if (!IsAlert)
            return;

        if (Time.time - LastReportTime
            > sharedMemoryDuration)
        {
            IsAlert = false;
            sharedTarget = null;
        }
    }
}
```

---

# 25. Apa Fungsi SquadManager?

Tanpa `SquadManager`:

```text
Enemy A melihat Player
Enemy B tidak tahu apa-apa
Enemy C tidak tahu apa-apa
```

Dengan `SquadManager`:

```text
Enemy A melihat Player
       ↓
ReportPlayerSeen()
       ↓
SquadManager
       ↓
Enemy B dan C ikut mengetahui posisi Player
```

Konsep ini merupakan bentuk sederhana:

```text
Shared Blackboard
```

---

# 26. Local Memory vs Shared Memory

## Local Memory

```text
EnemyMemory
```

dimiliki masing-masing NPC.

Berisi apa yang diketahui oleh NPC itu sendiri.

---

## Shared Memory

```text
SquadManager
```

dimiliki squad.

Berisi informasi yang dibagikan ke seluruh squad.

---

# 27. Membuat Cover Point

Buat:

```text
Scripts/AI/CoverPoint.cs
```

Kode:

```csharp
using UnityEngine;

public class CoverPoint : MonoBehaviour
{
    public bool IsOccupied
    {
        get;
        private set;
    }

    public EnemyTacticalAI OccupiedBy
    {
        get;
        private set;
    }

    public bool TryReserve(
        EnemyTacticalAI enemy
    )
    {
        if (IsOccupied &&
            OccupiedBy != enemy)
        {
            return false;
        }

        IsOccupied = true;
        OccupiedBy = enemy;

        return true;
    }

    public void Release(
        EnemyTacticalAI enemy
    )
    {
        if (OccupiedBy != enemy)
            return;

        IsOccupied = false;
        OccupiedBy = null;
    }

    private void OnDrawGizmos()
    {
        Gizmos.DrawWireSphere(
            transform.position,
            0.35f
        );
    }
}
```

---

# 28. Cover Reservation

Tanpa reservation:

```text
Enemy A → Cover 1
Enemy B → Cover 1
Enemy C → Cover 1
```

Akibat:

```text
●●●
```

Enemy bertumpuk.

Dengan reservation:

```text
Enemy A → Cover 1
Enemy B → Cover 2
Enemy C → Cover 3
```

Konsep ini sangat penting dalam Multi-Agent AI.

---

# 29. Membuat Cover Points di Scene

Buat Empty GameObject:

```text
CoverPoints
```

Kemudian child:

```text
CoverPoint_01
CoverPoint_02
CoverPoint_03
CoverPoint_04
CoverPoint_05
CoverPoint_06
```

Tambahkan script:

```text
CoverPoint
```

Letakkan titik tersebut di belakang wall.

Contoh:

```text
Player ●

            ████████
      Cover ●

             Enemy ●
```

---

# 30. Cover Manager

Agar pencarian cover lebih rapi, buat:

```text
Scripts/Managers/CoverManager.cs
```

Kode:

```csharp
using UnityEngine;

public class CoverManager : MonoBehaviour
{
    [SerializeField]
    private CoverPoint[] coverPoints;

    [SerializeField]
    private LayerMask obstacleMask;

    public CoverPoint FindBestCover(
        EnemyTacticalAI enemy,
        Transform target
    )
    {
        CoverPoint bestCover = null;
        float bestScore = float.MinValue;

        foreach (CoverPoint cover in coverPoints)
        {
            if (cover == null)
                continue;

            if (cover.IsOccupied &&
                cover.OccupiedBy != enemy)
            {
                continue;
            }

            if (!IsProtectedFromTarget(
                cover.transform.position,
                target))
            {
                continue;
            }

            float enemyDistance =
                Vector3.Distance(
                    enemy.transform.position,
                    cover.transform.position
                );

            float score =
                1f / (1f + enemyDistance);

            if (score > bestScore)
            {
                bestScore = score;
                bestCover = cover;
            }
        }

        return bestCover;
    }

    private bool IsProtectedFromTarget(
        Vector3 coverPosition,
        Transform target
    )
    {
        if (target == null)
            return false;

        Vector3 origin =
            coverPosition + Vector3.up;

        Vector3 targetPosition =
            target.position + Vector3.up;

        Vector3 direction =
            targetPosition - origin;

        float distance =
            direction.magnitude;

        return Physics.Raycast(
            origin,
            direction.normalized,
            distance,
            obstacleMask
        );
    }
}
```

---

# 31. Penjelasan Cover Selection

Pada versi ini cover dipilih berdasarkan dua kondisi.

## Kondisi 1

Cover tidak sedang digunakan enemy lain.

```text
!IsOccupied
```

---

## Kondisi 2

Cover benar-benar terlindung dari Player.

Diperiksa menggunakan:

```text
Raycast Cover → Player
```

Jika Raycast mengenai obstacle:

```text
Valid Cover
```

---

# 32. Membuat CoverManager di Scene

Buat Empty:

```text
CoverManager
```

Tambahkan:

```text
CoverManager.cs
```

Masukkan seluruh Cover Point ke array:

```text
Cover Points
```

Set:

```text
Obstacle Mask = Obstacle
```

---

# 33. Tactical State

Buat enum tambahan:

```csharp
public enum TacticalState
{
    Guard,
    Attack,
    MoveToCover,
    Flank,
    Search
}
```

State ini berguna terutama untuk:

- debugging,
- mengetahui aksi yang sedang dilakukan,
- menghubungkan AI ke Animator kelak.

---

# 34. Membuat Enemy Tactical AI

Buat:

```text
Scripts/AI/EnemyTacticalAI.cs
```

Kode:

```csharp
using UnityEngine;
using UnityEngine.AI;

public enum TacticalState
{
    Guard,
    Attack,
    MoveToCover,
    Flank,
    Search
}

public class EnemyTacticalAI : MonoBehaviour
{
    [Header("Role")]
    [SerializeField]
    private EnemyRole role;

    [Header("References")]
    [SerializeField]
    private EnemyPerception perception;

    [SerializeField]
    private EnemyMemory memory;

    [SerializeField]
    private SquadManager squadManager;

    [SerializeField]
    private CoverManager coverManager;

    [SerializeField]
    private NavMeshAgent agent;

    [Header("Combat")]
    [SerializeField]
    private float attackRange = 8f;

    [SerializeField]
    private float idealCombatDistance = 6f;

    [Header("Flanking")]
    [SerializeField]
    private float flankDistance = 5f;

    [SerializeField]
    private float flankBackOffset = 1.5f;

    [Header("Decision")]
    [SerializeField]
    private float decisionInterval = 0.35f;

    public EnemyRole Role => role;

    public TacticalState CurrentState
    {
        get;
        private set;
    }

    private float nextDecisionTime;

    private CoverPoint selectedCover;

    private void Awake()
    {
        if (agent == null)
            agent = GetComponent<NavMeshAgent>();

        if (perception == null)
            perception = GetComponent<EnemyPerception>();

        if (memory == null)
            memory = GetComponent<EnemyMemory>();
    }

    private void Update()
    {
        UpdatePerceptionAndMemory();

        if (Time.time >= nextDecisionTime)
        {
            nextDecisionTime =
                Time.time + decisionInterval;

            EvaluateTacticalDecision();
        }

        FaceTargetWhenAppropriate();
    }

    private void UpdatePerceptionAndMemory()
    {
        if (perception == null)
            return;

        if (!perception.CanSeePlayer)
            return;

        Transform player =
            perception.Player;

        if (player == null)
            return;

        memory.Remember(player.position);

        squadManager.ReportPlayerSeen(
            player,
            player.position
        );
    }

    private void EvaluateTacticalDecision()
    {
        if (squadManager == null)
            return;

        Transform target =
            squadManager.SharedTarget;

        if (!squadManager.IsAlert)
        {
            SetGuard();
            return;
        }

        if (target != null)
        {
            switch (role)
            {
                case EnemyRole.Attacker:
                    HandleAttacker(target);
                    break;

                case EnemyRole.FlankerLeft:
                    HandleFlanker(target, -1f);
                    break;

                case EnemyRole.FlankerRight:
                    HandleFlanker(target, 1f);
                    break;

                case EnemyRole.CoverShooter:
                    HandleCoverShooter(target);
                    break;
            }

            return;
        }

        MoveToLastKnownPosition();
    }

    private void HandleAttacker(
        Transform target
    )
    {
        float distance =
            Vector3.Distance(
                transform.position,
                target.position
            );

        if (distance > idealCombatDistance)
        {
            CurrentState =
                TacticalState.Attack;

            agent.SetDestination(
                target.position
            );
        }
        else
        {
            CurrentState =
                TacticalState.Attack;

            agent.ResetPath();
        }
    }

    private void HandleCoverShooter(
        Transform target
    )
    {
        if (selectedCover == null)
        {
            selectedCover =
                coverManager.FindBestCover(
                    this,
                    target
                );

            if (selectedCover != null)
            {
                selectedCover.TryReserve(this);
            }
        }

        if (selectedCover != null)
        {
            CurrentState =
                TacticalState.MoveToCover;

            agent.SetDestination(
                selectedCover.transform.position
            );

            if (Vector3.Distance(
                transform.position,
                selectedCover.transform.position
                ) < 1.2f)
            {
                CurrentState =
                    TacticalState.Attack;

                agent.ResetPath();
            }
        }
        else
        {
            HandleAttacker(target);
        }
    }

    private void HandleFlanker(
        Transform target,
        float side
    )
    {
        CurrentState =
            TacticalState.Flank;

        Vector3 desiredPosition =
            target.position
            + target.right
              * flankDistance
              * side
            - target.forward
              * flankBackOffset;

        NavMeshHit hit;

        if (NavMesh.SamplePosition(
            desiredPosition,
            out hit,
            3f,
            NavMesh.AllAreas))
        {
            agent.SetDestination(
                hit.position
            );
        }
        else
        {
            agent.SetDestination(
                target.position
            );
        }
    }

    private void MoveToLastKnownPosition()
    {
        CurrentState =
            TacticalState.Search;

        agent.SetDestination(
            squadManager
                .SharedLastKnownPosition
        );
    }

    private void SetGuard()
    {
        CurrentState =
            TacticalState.Guard;

        agent.ResetPath();

        ReleaseCover();
    }

    private void FaceTargetWhenAppropriate()
    {
        Transform target =
            squadManager != null
            ? squadManager.SharedTarget
            : null;

        if (target == null)
            return;

        if (agent.velocity.sqrMagnitude > 0.1f)
            return;

        Vector3 direction =
            target.position - transform.position;

        direction.y = 0f;

        if (direction.sqrMagnitude < 0.01f)
            return;

        Quaternion targetRotation =
            Quaternion.LookRotation(direction);

        transform.rotation =
            Quaternion.Slerp(
                transform.rotation,
                targetRotation,
                6f * Time.deltaTime
            );
    }

    private void ReleaseCover()
    {
        if (selectedCover == null)
            return;

        selectedCover.Release(this);

        selectedCover = null;
    }

    private void OnDisable()
    {
        ReleaseCover();
    }
}
```

---

# 35. Penjelasan Tactical Decision

Script tidak menghitung keputusan setiap frame.

Digunakan:

```csharp
decisionInterval = 0.35f;
```

Artinya tactical decision dihitung sekitar:

```text
2–3 kali per detik
```

Sedangkan movement tetap dijalankan Unity setiap frame.

Keuntungannya:

- AI lebih stabil,
- mengurangi CPU workload,
- enemy tidak terlalu cepat berganti keputusan.

---

# 36. Kenapa Decision Tidak Setiap Frame?

Jika game berjalan 60 FPS:

```text
60 agent decision / detik
```

untuk setiap enemy.

Dengan:

```text
decisionInterval = 0.35
```

hanya sekitar:

```text
3 keputusan / detik
```

Perbedaannya sangat besar ketika terdapat banyak NPC.

---

# 37. Implementasi Role Attacker

Attacker memiliki perilaku:

```text
Player diketahui
       ↓
cek jarak
       ↓
terlalu jauh?
       ↓
YA → dekati Player
       ↓
jarak ideal?
       ↓
berhenti dan menghadap Player
```

Attacker berfungsi memberikan tekanan dari depan.

---

# 38. Implementasi Flanker

Flanker menghitung posisi di samping Player.

```csharp
target.right
```

menghasilkan arah kanan Player.

Flank kanan:

```text
Player + right × distance
```

Flank kiri:

```text
Player - right × distance
```

Kemudian:

```csharp
NavMesh.SamplePosition()
```

memastikan titik tersebut valid.

---

# 39. Mengapa NavMesh.SamplePosition Penting?

Perhitungan:

```text
Player Position + Right × 5
```

dapat menghasilkan posisi:

```text
di dalam wall
di atas meja
di luar map
di luar NavMesh
```

Karena itu posisi perlu divalidasi.

---

# 40. Implementasi Cover Shooter

Cover Shooter:

```text
Player diketahui
       ↓
FindBestCover()
       ↓
valid?
       ↓
reserve
       ↓
SetDestination()
       ↓
sampai cover
       ↓
menghadap Player
```

Jika cover tidak tersedia:

```text
fallback → Attacker
```

Fallback penting supaya AI tidak berhenti karena gagal menemukan tactical option.

---

# 41. Konfigurasi Enemy_01

Role:

```text
Attacker
```

Component:

```text
NavMeshAgent
EnemyPerception
EnemyMemory
EnemyTacticalAI
```

Pada `EnemyTacticalAI`:

```text
Role         = Attacker
SquadManager = SquadManager
CoverManager = CoverManager
```

---

# 42. Konfigurasi Enemy_02

Role:

```text
FlankerLeft
```

Parameter:

```text
Flank Distance    = 5
Flank Back Offset = 1.5
```

---

# 43. Konfigurasi Enemy_03

Role:

```text
CoverShooter
```

Pastikan mempunyai reference:

```text
CoverManager
```

---

# 44. Hasil Behavior

Jika Enemy 1 mendeteksi Player:

```text
Enemy 1
    ↓
SquadManager.ReportPlayerSeen()
    ↓
IsAlert = true
    ↓
SharedTarget = Player
```

Selanjutnya:

```text
Enemy 1 → menyerang dari depan

Enemy 2 → bergerak ke sisi Player

Enemy 3 → mencari cover
```

Ini merupakan bentuk koordinasi sederhana.

---

# 45. Menambahkan Attack Sederhana

Supaya hasil praktikum terlihat jelas, kita dapat menambahkan simulasi serangan tanpa projectile dahulu.

Buat:

```text
Scripts/AI/EnemyCombat.cs
```

Kode:

```csharp
using UnityEngine;

public class EnemyCombat : MonoBehaviour
{
    [SerializeField]
    private EnemyPerception perception;

    [SerializeField]
    private SquadManager squadManager;

    [SerializeField]
    private float attackRange = 8f;

    [SerializeField]
    private float fireInterval = 1f;

    private float nextFireTime;

    private void Update()
    {
        Transform target =
            squadManager.SharedTarget;

        if (target == null)
            return;

        float distance =
            Vector3.Distance(
                transform.position,
                target.position
            );

        if (distance > attackRange)
            return;

        if (!perception.CanSeePlayer)
            return;

        if (Time.time < nextFireTime)
            return;

        nextFireTime =
            Time.time + fireInterval;

        Fire();
    }

    private void Fire()
    {
        Debug.Log(
            name + " fires at Player"
        );
    }
}
```

Untuk praktikum awal, cukup tampilkan:

```text
Enemy_03 fires at Player
```

pada Console.

Tahap lanjutan dapat menggunakan projectile.

---

# 46. Menambahkan Visual Debug

Debugging merupakan bagian penting dalam Game AI.

Buat:

```text
Scripts/AI/EnemyDebugVisual.cs
```

Kode:

```csharp
using UnityEngine;

public class EnemyDebugVisual : MonoBehaviour
{
    [SerializeField]
    private EnemyTacticalAI tacticalAI;

    [SerializeField]
    private EnemyPerception perception;

    private void OnDrawGizmos()
    {
        if (tacticalAI == null)
            return;

        if (perception != null &&
            perception.Player != null)
        {
            Gizmos.DrawLine(
                transform.position
                + Vector3.up,
                perception.Player.position
                + Vector3.up
            );
        }
    }
}
```

---

# 47. Debug Inspector

Saat Play Mode, mahasiswa sebaiknya mengamati:

```text
EnemyPerception
├── Can See Player
└── Distance To Player

EnemyMemory
├── Last Known Player Position
├── Last Seen Time
└── Has Valid Memory

EnemyTacticalAI
├── Role
└── Current State

SquadManager
├── Shared Target
├── Shared Last Known Position
└── Is Alert
```

---

# 48. Urutan Pengujian

Jangan langsung menguji seluruh sistem.

Gunakan metode incremental testing.

---

# Test 1 — Player Controller

Pastikan:

```text
WASD / Arrow
```

dapat menggerakkan Player.

---

# Test 2 — NavMesh

Gunakan sementara:

```csharp
agent.SetDestination(player.position);
```

Pastikan Enemy dapat mencapai Player.

---

# Test 3 — Perception

Letakkan Player:

```text
di depan Enemy
```

Cek:

```text
CanSeePlayer = true
```

Pindahkan Player di belakang enemy.

Cek:

```text
CanSeePlayer = false
```

---

# Test 4 — Obstacle

Letakkan wall:

```text
Enemy → Wall → Player
```

Harus:

```text
CanSeePlayer = false
```

---

# Test 5 — Memory

Perlihatkan Player kepada Enemy.

Kemudian sembunyikan Player.

Periksa:

```text
LastKnownPlayerPosition
```

---

# Test 6 — Squad Alert

Biarkan hanya Enemy 1 melihat Player.

Periksa:

```text
SquadManager.IsAlert = true
```

Enemy 2 dan Enemy 3 harus ikut bereaksi.

---

# Test 7 — Attacker

Enemy 1 harus mendekati Player.

---

# Test 8 — Flanker

Enemy 2 harus bergerak ke sisi Player.

---

# Test 9 — Cover Shooter

Enemy 3 harus memilih posisi cover.

---

# Test 10 — Cover Reservation

Tambah dua Cover Shooter.

Pastikan keduanya tidak memilih Cover Point sama.

---

# 49. Parameter Rekomendasi

Gunakan baseline:

| Parameter | Nilai |
|---|---:|
| View Radius | 12 |
| View Angle | 90° |
| Memory Duration | 5 s |
| Shared Memory | 8 s |
| NavMesh Speed | 3.5 |
| Attack Range | 8 |
| Ideal Combat Distance | 6 |
| Flank Distance | 5 |
| Flank Back Offset | 1.5 |
| Decision Interval | 0.35 s |
| Fire Interval | 1 s |

---

# 50. Eksperimen 1 — View Radius

Ubah:

```text
12 → 6
```

Amati.

Kemudian:

```text
12 → 20
```

Bandingkan tingkat agresivitas enemy.

---

# 51. Eksperimen 2 — View Angle

Bandingkan:

```text
45°
90°
180°
360°
```

Pertanyaan:

> Apa dampaknya jika enemy memiliki FOV 360°?

---

# 52. Eksperimen 3 — Shared Memory

Nonaktifkan pelaporan:

```csharp
squadManager.ReportPlayerSeen(...)
```

Amati perbedaannya.

### Tanpa Shared Memory

Setiap NPC bergantung pada perception sendiri.

### Dengan Shared Memory

Satu enemy dapat memberi informasi kepada seluruh squad.

---

# 53. Eksperimen 4 — Jumlah Cover

Uji:

```text
3 Enemy
1 Cover
```

Kemudian:

```text
3 Enemy
6 Cover
```

Amati distribusi posisi.

---

# 54. Eksperimen 5 — Decision Interval

Bandingkan:

```text
0.1
0.35
1.0
2.0
```

Amati:

- responsiveness,
- kestabilan behavior,
- keterlambatan keputusan.

---

# 55. Eksperimen 6 — Squad Tanpa Role

Set ketiga enemy menjadi:

```text
Attacker
```

Amati hasilnya.

Kemungkinan:

```text
Enemy berkumpul dari arah sama.
```

Kemudian aktifkan:

```text
Attacker
Flanker
CoverShooter
```

Bandingkan perilaku squad.

---

# 56. Apa yang Sebenarnya Membuat AI Terlihat Cerdas?

Bukan karena satu algoritma yang sangat kompleks.

AI terlihat cerdas karena beberapa aturan sederhana saling bekerja sama.

```text
Perception
+
Memory
+
Shared Information
+
Role
+
Cover
+
Positioning
+
Navigation
=
Tactical Behavior
```

Ini merupakan konsep utama Praktikum 7.

---

# 57. Kesalahan Umum

## Enemy tidak bergerak

Periksa:

```text
NavMesh sudah Bake?
Enemy berada di NavMesh?
NavMeshAgent aktif?
```

---

## Enemy selalu melihat Player

Periksa:

```text
Obstacle Layer
Obstacle Mask
Collider Wall
```

---

## Enemy tidak melihat Player

Periksa:

```text
Player reference
View Radius
View Angle
Enemy orientation
```

---

## Flanker tidak bergerak

Periksa:

```text
NavMesh.SamplePosition
Flank Distance
NavMesh coverage
```

---

## Semua enemy memilih cover sama

Periksa:

```text
TryReserve()
IsOccupied
OccupiedBy
```

---

## Cover dianggap tidak valid

Periksa:

```text
Obstacle Mask
Collider
Posisi Cover Point
```

Cover Point harus benar-benar berada di sisi terlindung wall.

---

# 58. Kesalahan Raycast yang Sering Terjadi

Misalnya:

```text
Obstacle Mask = Nothing
```

Akibatnya:

```text
Raycast tidak pernah menemukan Wall.
```

Atau Wall tidak berada di Layer:

```text
Obstacle
```

Akibatnya sama.

---

# 59. Masalah Enemy Menumpuk

NavMeshAgent mempunyai fitur local avoidance.

Pastikan:

```text
Radius
Avoidance Priority
Obstacle Avoidance
```

tidak semuanya menggunakan konfigurasi yang terlalu ekstrem.

Tetapi perlu dipahami:

> Local avoidance tidak sama dengan Tactical Coordination.

Avoidance hanya membantu mencegah tabrakan lokal.

Role, Cover Reservation, dan Flanking yang membuat perilaku squad menjadi taktis.

---

# 60. NavMesh vs Tactical AI

Ini perbedaan penting.

## NavMesh

Menjawab:

```text
Bagaimana mencapai posisi?
```

## Tactical AI

Menjawab:

```text
Posisi mana yang sebaiknya dicapai?
```

Contoh:

```text
Tactical AI
→ pilih CoverPoint_04

NavMesh
→ cari jalur menuju CoverPoint_04
```

---

# 61. Perception vs Decision

## Perception

Menjawab:

```text
Apa yang diketahui NPC?
```

Contoh:

```text
Player terlihat.
Player berjarak 7 meter.
```

## Decision

Menjawab:

```text
Apa yang harus dilakukan NPC?
```

Contoh:

```text
Take Cover.
```

Jangan mencampur kedua tanggung jawab ini jika ingin membuat sistem AI modular.

---

# 62. Target Detection vs Target Selection

Ini juga berbeda.

## Target Detection

```text
Target apa yang dapat saya lihat?
```

## Target Selection

```text
Dari target yang saya ketahui,
mana yang harus saya prioritaskan?
```

Pada praktikum ini hanya terdapat satu Player sehingga target selection masih sederhana.

---

# 63. Pengembangan Target Selection

Jika terdapat banyak target:

```text
Player A
Player B
Companion
Turret
```

target dapat diberikan score:

```text
Score =
Distance
+
Visibility
+
Threat
```

Contoh:

```text
Player A = 0.82
Player B = 0.54
Turret   = 0.91
```

Maka:

```text
Target = Turret
```

Ini merupakan bentuk Utility-Based Target Selection.

---

# 64. Pengembangan Cover Scoring

Saat ini skor hanya berdasarkan jarak.

Versi lanjutan:

```text
CoverScore =
ProtectionScore
+
DistanceScore
+
AttackAngleScore
+
SeparationScore
-
OccupiedPenalty
```

Contoh bobot:

```text
Protection = 0.40
Distance   = 0.25
Attack LOS = 0.25
Separation = 0.10
```

---

# 65. Pengembangan dengan Behavior Tree

Praktikum dapat dikembangkan menjadi:

```text
ROOT
└── Selector
    │
    ├── Sequence
    │   ├── Is Low Health
    │   └── Retreat
    │
    ├── Sequence
    │   ├── Role = Cover Shooter
    │   ├── Has Cover
    │   └── Take Cover
    │
    ├── Sequence
    │   ├── Role = Flanker
    │   └── Flank
    │
    ├── Sequence
    │   ├── Can Attack
    │   └── Attack
    │
    └── Search
```

Dengan cara ini materi Pertemuan 6 terintegrasi langsung ke Pertemuan 7.

---

# 66. Pengembangan dengan Utility AI

Action:

```text
Attack
TakeCover
Flank
Search
Retreat
```

Contoh:

```text
AttackScore =
Visibility
×
DistanceFitness
```

```text
CoverScore =
Exposure
×
LowHealth
×
CoverAvailable
```

```text
FlankScore =
RoleMatch
×
TargetVisible
×
FlankPositionAvailable
```

Aksi tertinggi dipilih.

---

# 67. Pengembangan Retreat

Tambahkan:

```text
EnemyHealth
```

Jika:

```text
Health < 25%
```

NPC dapat memilih:

```text
Retreat
```

sehingga tidak seluruh enemy bertarung sampai mati tanpa mempertimbangkan kondisi.

---

# 68. Pengembangan Attack Slot

Buat titik di sekitar Player:

```text
           Slot 1
             ●

 Slot 2 ●   Player   ● Slot 3

             ●
           Slot 4
```

Setiap Enemy melakukan:

```text
Reserve Slot
```

sehingga mereka tidak berkumpul pada satu titik.

Konsep ini cocok untuk melee squad.

---

# 69. Pengembangan Group Alert

Dapat dibuat enum:

```csharp
public enum AlertLevel
{
    Calm,
    Suspicious,
    Alert,
    Combat
}
```

Contoh transisi:

```text
Calm
 ↓ noise
Suspicious
 ↓ player detected
Alert
 ↓ confirmed target
Combat
```

---

# 70. Pengembangan Search Behavior

Saat Player hilang:

```text
Player last seen
        ↓
SharedLastKnownPosition
        ↓
Enemy bergerak ke lokasi
        ↓
Search
```

Tahap lebih lanjut:

```text
Search beberapa titik di sekitar
Last Known Position.
```

---

# 71. Pengembangan Animation

Tambahkan Animator.

Parameter contoh:

```text
Speed
IsAlert
IsInCover
Attack
```

Kode:

```csharp
animator.SetFloat(
    "Speed",
    agent.velocity.magnitude
);
```

Serangan:

```csharp
animator.SetTrigger("Attack");
```

Dengan demikian tactical decision dapat terintegrasi dengan visual character.

---

# 72. Hierarchy Final

Contoh:

```text
Praktikum07
│
├── Navigation
│
│   └── NavMeshSurface
│
├── Environment
│   ├── Ground
│   ├── Wall_01
│   ├── Wall_02
│   └── Wall_03
│
├── Player
│
├── Squad
│   ├── Enemy_01_Attacker
│   ├── Enemy_02_Flanker
│   └── Enemy_03_CoverShooter
│
├── TacticalPoints
│   ├── CoverPoint_01
│   ├── CoverPoint_02
│   ├── CoverPoint_03
│   ├── CoverPoint_04
│   ├── CoverPoint_05
│   └── CoverPoint_06
│
├── Managers
│   ├── SquadManager
│   └── CoverManager
│
└── Main Camera
```

---

# 73. Script Final

Struktur:

```text
Scripts/
│
├── AI/
│   ├── EnemyRole.cs
│   ├── EnemyPerception.cs
│   ├── EnemyMemory.cs
│   ├── EnemyTacticalAI.cs
│   ├── EnemyCombat.cs
│   ├── EnemyDebugVisual.cs
│   └── CoverPoint.cs
│
├── Managers/
│   ├── SquadManager.cs
│   └── CoverManager.cs
│
└── Player/
    └── SimplePlayerController.cs
```

---

# 74. Checklist Implementasi

- [ ] Project `GC07_TacticalSquadAI` dibuat.
- [ ] Ground dibuat.
- [ ] Player dibuat.
- [ ] Player Controller berfungsi.
- [ ] Layer Player dibuat.
- [ ] Layer Enemy dibuat.
- [ ] Layer Obstacle dibuat.
- [ ] Wall mempunyai Collider.
- [ ] AI Navigation terpasang.
- [ ] NavMeshSurface dibuat.
- [ ] NavMesh berhasil di-Bake.
- [ ] Tiga Enemy dibuat.
- [ ] Enemy memiliki NavMeshAgent.
- [ ] EnemyPerception dipasang.
- [ ] EnemyMemory dipasang.
- [ ] SquadManager dibuat.
- [ ] Shared target berfungsi.
- [ ] Cover Points dibuat.
- [ ] CoverManager dibuat.
- [ ] EnemyTacticalAI dipasang.
- [ ] Enemy 1 ber-role Attacker.
- [ ] Enemy 2 ber-role Flanker.
- [ ] Enemy 3 ber-role Cover Shooter.
- [ ] Attacker mendekati Player.
- [ ] Flanker bergerak ke sisi Player.
- [ ] Cover Shooter mengambil cover.
- [ ] Cover reservation bekerja.
- [ ] Player yang terhalang wall tidak terlihat.
- [ ] Enemy menyimpan last known position.
- [ ] Squad dapat menerima shared information.
- [ ] Decision interval diterapkan.
- [ ] Debugging dilakukan melalui Scene dan Inspector.

---

# 75. Tugas Pengamatan Mahasiswa

Jawab pertanyaan berikut.

### 1.

Apa perbedaan:

```text
Perception
Memory
Decision
Navigation
```

dalam sistem yang dibuat?

### 2.

Mengapa `SquadManager` dibutuhkan?

### 3.

Apa yang terjadi jika shared information dimatikan?

### 4.

Mengapa Cover Point perlu memiliki status `Occupied`?

### 5.

Mengapa titik flank harus diperiksa dengan:

```csharp
NavMesh.SamplePosition()
```

### 6.

Apa perbedaan:

```text
NavMesh pathfinding
```

dan:

```text
Tactical positioning
```

### 7.

Mengapa tactical decision tidak sebaiknya dilakukan setiap frame?

### 8.

Apa perbedaan perilaku ketika semua Enemy adalah Attacker dibanding ketika role dibagi?

---

# 76. Tantangan Pengembangan

## Level 1 — Dasar

Tambahkan:

```text
Enemy_04
```

dengan role:

```text
FlankerRight
```

---

## Level 2 — Menengah

Tambahkan minimal:

```text
8 Cover Points
```

dan buat Cover Shooter memilih cover terbaik.

---

## Level 3 — Menengah

Tambahkan:

```text
Patrol
```

ketika squad belum Alert.

---

## Level 4 — Lanjut

Tambahkan:

```text
Search Last Known Position
```

setelah Player menghilang.

---

## Level 5 — Lanjut

Tambahkan `EnemyHealth` dan behavior:

```text
HP rendah
→ Retreat
```

---

## Level 6 — Advanced

Ganti decision system dengan:

```text
Behavior Tree
```

atau:

```text
Utility AI
```

dari Praktikum 6.

---

# 77. Pertanyaan Analisis

Bandingkan dua sistem:

## Sistem A

```text
Semua Enemy:
Chase Player
```

## Sistem B

```text
Enemy A → Attack
Enemy B → Flank
Enemy C → Cover
```

Analisis:

1. sistem mana yang terlihat lebih cerdas,
2. sistem mana yang lebih menantang,
3. sistem mana yang lebih mudah diprediksi,
4. apakah Tactical AI selalu berarti AI lebih sulit,
5. apakah AI yang terlalu optimal selalu membuat game lebih menyenangkan.

---

# 78. Catatan Penting tentang Game AI

Tujuan AI pada game bukan:

```text
membuat AI paling pintar.
```

Tujuannya adalah:

```text
menciptakan behavior yang
meyakinkan,
dapat dipahami,
menantang,
dan menyenangkan.
```

Enemy yang selalu memilih strategi sempurna justru dapat membuat game terasa tidak adil.

Karena itu Tactical AI sebaiknya tetap mempunyai:

```text
reaction delay
limited perception
memory timeout
role limitation
decision interval
```

---

# 79. Rekomendasi Praktikum Terbaik

Untuk Praktikum 07, konfigurasi yang paling direkomendasikan adalah:

```text
1 Player

3 Enemy
├── Attacker
├── Flanker
└── Cover Shooter

6 Cover Points

1 Squad Manager

1 Cover Manager

Perception:
FOV + Raycast

Memory:
Last Known Position

Coordination:
Shared Target

Navigation:
NavMeshAgent

Tactical Position:
Cover + Flanking
```

Konfigurasi ini memberikan keseimbangan terbaik antara:

```text
konsep AI
kompleksitas kode
visualisasi behavior
waktu praktikum
kemudahan debugging
```

---

# 80. Mengapa Ini Pilihan Terbaik?

## Tidak terlalu sederhana

Jika praktikum hanya membuat:

```text
Enemy melihat Player
→ semua mengejar
```

maka terlalu mirip dengan Praktikum 2–5.

---

## Tidak terlalu kompleks

Jika langsung membuat:

```text
full Behavior Tree
+
Utility AI
+
cover scoring
+
dynamic formation
+
suppression
+
attack slots
+
health
+
weapon AI
```

mahasiswa justru berfokus pada debugging sistem yang terlalu besar.

---

## Cukup menunjukkan Tactical AI

Dengan tiga role:

```text
Attacker
Flanker
Cover Shooter
```

mahasiswa langsung dapat **melihat perbedaan antara individual AI dan coordinated tactical AI**.

Ini sangat penting secara pedagogis.

---

# 81. Hasil Akhir yang Diharapkan

Pada awal scene:

```text
Enemy 1      Enemy 2      Enemy 3
   ●            ●            ●

           tidak mengetahui
               Player
```

Player kemudian masuk FOV Enemy 1:

```text
Player detected
       ↓
Squad Alert
```

Setelah itu:

```text
                 PLAYER
                   ●
                   ↑
                   │
               Attacker
                   ●


Flanker ●                     █ WALL █
                                   ●
                             Cover Shooter
```

Walaupun hanya Enemy 1 yang pertama kali mendeteksi Player, seluruh squad bereaksi.

Tetapi setiap Enemy menjalankan strategi berbeda.

---

# 82. Konsep yang Harus Dipahami Mahasiswa

Setelah menyelesaikan praktikum ini, mahasiswa seharusnya memahami bahwa:

```text
Perception
≠
Decision
```

```text
Decision
≠
Navigation
```

```text
Navigation
≠
Tactical Positioning
```

dan:

```text
Individual AI
≠
Squad AI
```

Tactical behavior muncul karena seluruh komponen tersebut terintegrasi.

---

# 83. Ringkasan

Praktikum 07 mengintegrasikan:

```text
Perception
│
├── Vision Radius
├── FOV
└── Raycast
        ↓
Memory
│
├── Last Known Position
└── Memory Timeout
        ↓
Squad Coordination
│
├── Shared Target
├── Shared Position
└── Alert
        ↓
Tactical Decision
│
├── Attacker
├── Flanker
└── Cover Shooter
        ↓
Tactical Positioning
│
├── Cover Selection
├── Cover Reservation
└── Flanking
        ↓
Navigation
│
├── NavMesh
├── NavMeshAgent
└── NavMesh.SamplePosition
        ↓
Combat Behavior
```

---

# 84. Kesimpulan

Praktikum ini menunjukkan satu prinsip utama dalam Game AI:

> **Perilaku AI yang tampak cerdas tidak selalu membutuhkan satu algoritma yang kompleks. Perilaku taktis dapat muncul dari integrasi beberapa sistem sederhana yang mempunyai tanggung jawab jelas.**

NPC dapat terlihat jauh lebih cerdas ketika mampu:

```text
melihat
→ mengingat
→ berbagi informasi
→ memilih aksi
→ memilih posisi
→ bergerak
→ bekerja sama
```

Inilah inti dari:

# Game AI Integration & Tactical AI

dan menjadi jembatan antara AI individual pada Praktikum 1–6 dengan sistem AI kelompok dan mini-project Game Cerdas berikutnya.