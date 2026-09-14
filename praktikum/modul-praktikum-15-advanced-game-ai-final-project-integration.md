# MODUL PRAKTIKUM 15
# Advanced Game AI & Final Project Integration

**Mata Kuliah:** Game Cerdas  
**Program Studi:** S1 Teknik Informatika  
**Semester:** 7  
**Tools:** Unity 6 + C#  
**Topik:** Advanced Game AI & Final Project Development  
**Praktikum:** Integrasi AI dalam Proyek Akhir

---

# 1. Judul Praktikum

## Adaptive Arena Director — Integrasi Advanced Game AI

Pada praktikum ini mahasiswa membangun sebuah **mini game arena survival** yang mengintegrasikan beberapa sistem Game AI yang telah dipelajari selama satu semester.

Sistem yang diintegrasikan:

```text
Player
   ↓
Game State / Player Performance
   ↓
AI Director
   ↓
Adaptive Difficulty / Intensity
   ↓
Enemy Spawner
   ↓
Enemy AI
   ├── Perception
   ├── Finite State Machine
   ├── NavMesh Navigation
   └── Combat
   ↓
Gameplay Result
   ↓
Performance Tracker
   └──────────────→ kembali ke AI Director
```

Game tidak hanya memiliki enemy yang mengejar player. Sistem global **AI Director** mengamati kondisi permainan dan secara dinamis menentukan kapan tekanan terhadap player perlu dinaikkan atau diturunkan.

---

# 2. Rekomendasi Nama Project Unity

## Nama utama yang direkomendasikan

```text
GC15_AdaptiveArenaDirector
```

Keterangan:

- `GC15` = Game Cerdas Praktikum/Pertemuan 15.
- `Adaptive` = gameplay dapat berubah berdasarkan kondisi player.
- `Arena` = scope permainan dibuat kecil dan realistis.
- `Director` = sistem utama menggunakan AI Director.

### Alternatif nama

```text
GC15_IntelligentArena
GC15_AdaptiveCombatArena
GC15_AIDirectorDemo
GC15_FinalAIIntegration
GC15_SmartSurvivalArena
```

### Rekomendasi terbaik

```text
GC15_AdaptiveArenaDirector
```

Nama tersebut paling jelas menggambarkan fitur teknis utama praktikum.

---

# 3. Konsep Game

Game yang dibuat adalah **3D Survival Arena** sederhana.

Player berada di sebuah arena dan harus bertahan hidup dari enemy yang datang secara bertahap.

Namun jumlah dan intensitas enemy tidak sepenuhnya tetap.

AI Director memperhatikan:

```text
Player Health
Kill Count
Enemy Count
Kill Rate
Time Since Last Spawn
Current Intensity
```

Kemudian menentukan:

```text
Spawn Enemy
Increase Pressure
Maintain Pressure
Decrease Pressure
Give Recovery Time
```

Contoh:

```text
Player health tinggi
+
player membunuh enemy dengan cepat
+
jumlah enemy sedikit
        ↓
AI Director meningkatkan intensity
        ↓
spawn enemy lebih cepat
```

Sebaliknya:

```text
Player health rendah
+
enemy masih banyak
        ↓
AI Director menurunkan pressure
        ↓
spawn ditunda
```

---

# 4. Mengapa Praktikum Ini Dipilih?

Praktikum ini direkomendasikan karena dapat menggabungkan beberapa materi sebelumnya sekaligus:

| Materi | Implementasi Praktikum |
|---|---|
| Perception | Enemy mendeteksi player |
| Memory/State | Enemy menyimpan state perilaku |
| Movement AI | Enemy bergerak menuju target |
| Navigation | NavMeshAgent |
| FSM | Patrol, Chase, Attack |
| Tactical/Integration | Beberapa enemy aktif bersamaan |
| DDA | Intensity menyesuaikan performa |
| Player Modeling sederhana | Kill rate dan health |
| AI Director | Mengatur tekanan global |
| Debugging AI | State, target, intensity, path |
| Evaluasi AI | Correctness, fairness, responsiveness |

Dengan demikian praktikum bukan pengulangan satu algoritma, melainkan latihan **integrasi sistem AI**.

---

# 5. Tujuan Praktikum

Setelah menyelesaikan praktikum mahasiswa mampu:

1. Mengintegrasikan beberapa komponen Game AI.
2. Membuat enemy AI menggunakan FSM.
3. Menggunakan NavMesh untuk navigasi NPC.
4. Mengimplementasikan perception sederhana.
5. Membuat sistem AI Director.
6. Membuat adaptive gameplay.
7. Mengukur performa player.
8. Mengatur intensitas gameplay.
9. Membuat Enemy Spawner adaptif.
10. Membuat AI Debug Mode.
11. Menampilkan internal state AI.
12. Melakukan pengujian AI.
13. Mengevaluasi correctness dan fairness.
14. Menjelaskan arsitektur AI.
15. Menggunakan desain modular untuk proyek akhir.

---

# 6. Hasil Akhir Praktikum

Setelah selesai, gameplay yang diharapkan:

```text
START
  ↓
Player masuk arena
  ↓
Enemy mulai muncul
  ↓
Enemy Patrol
  ↓
Player terlihat?
 ├── Tidak → Patrol
 └── Ya
       ↓
     Chase
       ↓
Dalam attack range?
 ├── Tidak → Chase
 └── Ya → Attack
```

Pada saat bersamaan:

```text
AI DIRECTOR
     ↓
Membaca kondisi game
     ↓
Menghitung intensity
     ↓
Player terlalu dominan?
     ↓ YA
Tambah tekanan
     ↓
Spawn lebih cepat / enemy lebih banyak
```

atau:

```text
Player tertekan?
     ↓ YA
Kurangi tekanan
     ↓
Delay spawning
```

---

# 7. Gameplay Loop

Gameplay loop utama:

```text
Move
 ↓
Find Enemy
 ↓
Fight Enemy
 ↓
Kill Enemy
 ↓
Director Evaluates Performance
 ↓
Difficulty / Intensity Changes
 ↓
New Enemy Encounter
 ↓
Survive
```

Kondisi menang:

```text
Survive selama 180 detik
```

Kondisi kalah:

```text
Player Health <= 0
```

Nilai tersebut dapat diubah sesuai kebutuhan.

---

# 8. Arsitektur Sistem

Gunakan struktur:

```text
GameManager
│
├── Player
│   ├── PlayerController
│   ├── PlayerHealth
│   └── PlayerCombat
│
├── AI Systems
│   ├── AIDirector
│   ├── EnemySpawner
│   └── AIDebugHUD
│
├── Enemies
│   └── Enemy
│       ├── EnemyAI
│       ├── EnemyHealth
│       └── NavMeshAgent
│
└── Environment
    ├── Ground
    ├── Obstacles
    ├── SpawnPoints
    └── PatrolPoints
```

---

# 9. Istilah Teknis Unity yang Digunakan

## 9.1 GameObject

GameObject merupakan objek dasar dalam sebuah scene Unity.

Contoh:

```text
Player
Enemy
Main Camera
Ground
GameManager
SpawnPoint
```

GameObject pada dasarnya menjadi tempat berbagai **Component** dipasang.

---

# 9.2 Component

Component memberikan kemampuan tertentu kepada GameObject.

Contoh:

```text
Transform
Collider
Rigidbody
NavMeshAgent
Camera
Script C#
```

Contoh:

```text
Enemy
├── Transform
├── Capsule Collider
├── NavMeshAgent
├── EnemyAI
└── EnemyHealth
```

---

# 9.3 Transform

Semua GameObject memiliki Transform.

Transform menyimpan:

```text
Position
Rotation
Scale
```

Contoh mengakses posisi:

```csharp
transform.position
```

---

# 9.4 Prefab

Prefab adalah template GameObject yang dapat digunakan berulang kali.

Enemy akan dibuat sebagai:

```text
Enemy.prefab
```

EnemySpawner kemudian dapat membuat beberapa instance dari prefab tersebut.

Keuntungan prefab:

- konfigurasi enemy cukup dilakukan sekali;
- dapat digunakan berulang;
- perubahan prefab dapat diterapkan pada banyak instance;
- cocok untuk spawning.

---

# 9.5 Tag

Tag digunakan untuk memberi identitas logis pada GameObject.

Pada praktikum:

```text
Player
```

Player diberi Tag:

```text
Player
```

Contohnya:

```csharp
GameObject.FindGameObjectWithTag("Player");
```

---

# 9.6 Layer

Layer digunakan untuk mengelompokkan GameObject terutama untuk:

```text
Physics
Raycast
Collision
Camera Culling
LayerMask
```

Buat layer:

```text
Player
Enemy
Obstacle
```

Perception enemy nantinya dapat menggunakan LayerMask agar pemeriksaan objek lebih terkontrol.

---

# 9.7 Collider

Collider menentukan area fisik sebuah GameObject.

Contoh:

```text
CapsuleCollider
BoxCollider
SphereCollider
```

Collider digunakan oleh sistem physics untuk mendeteksi tabrakan dan raycast.

---

# 9.8 CharacterController

CharacterController dapat digunakan untuk menggerakkan player tanpa harus membuat simulasi Rigidbody yang kompleks.

Pada praktikum ini CharacterController digunakan pada Player.

---

# 9.9 NavMesh

NavMesh adalah representasi area yang dapat dilalui agent.

Enemy menggunakan NavMesh agar dapat mencari jalur menuju player tanpa menembus obstacle.

---

# 9.10 NavMeshAgent

NavMeshAgent adalah Component untuk menggerakkan GameObject pada NavMesh.

Parameter penting:

```text
Speed
Angular Speed
Acceleration
Stopping Distance
Radius
Height
```

---

# 9.11 NavMeshSurface

NavMeshSurface digunakan untuk menentukan area scene yang akan dibangun menjadi data navigasi.

Setelah environment selesai:

```text
Bake NavMesh
```

agar enemy mengetahui area yang dapat dilewati.

---

# 9.12 LayerMask

LayerMask memungkinkan script memilih layer tertentu.

Contoh:

```csharp
[SerializeField] private LayerMask obstacleMask;
```

Raycast kemudian hanya memeriksa obstacle.

---

# 9.13 Raycast

Raycast adalah pemeriksaan berbentuk garis dari suatu titik menuju arah tertentu.

Dalam perception:

```text
Enemy
  ───────────────→ Player
        ray
```

Jika garis terhalang wall:

```text
Enemy → Wall → Player
```

maka player dianggap tidak terlihat.

---

# 9.14 SerializeField

Contoh:

```csharp
[SerializeField] private float viewDistance = 12f;
```

`SerializeField` membuat variabel private tetap dapat diedit melalui Inspector.

Ini berguna untuk parameter AI karena mahasiswa dapat melakukan tuning tanpa mengubah source code.

---

# 9.15 Inspector

Inspector adalah panel Unity untuk mengatur component dan parameter GameObject.

Contoh:

```text
Enemy AI
View Distance: 12
Attack Range: 2
Attack Damage: 10
Attack Cooldown: 1
```

---

# 9.16 Gizmos

Gizmos merupakan visualisasi bantu di Scene View.

Dalam praktikum digunakan untuk menampilkan:

```text
Detection Radius
Attack Range
Target Line
Spawn Radius
```

Gizmos sangat bermanfaat karena kondisi internal AI dapat dilihat secara visual.

---

# 9.17 Coroutine

Coroutine memungkinkan proses berlangsung selama beberapa frame.

Contoh:

```csharp
IEnumerator Example()
{
    yield return new WaitForSeconds(1f);
}
```

Namun pada praktikum utama director menggunakan timer berbasis `Time.deltaTime` agar aliran logika lebih mudah diamati mahasiswa.

---

# 9.18 Time.deltaTime

`Time.deltaTime` adalah waktu yang berlalu sejak frame sebelumnya.

Contoh:

```csharp
timer += Time.deltaTime;
```

Dengan demikian perhitungan waktu tidak bergantung langsung pada frame rate.

---

# 9.19 Singleton

Singleton adalah pola sederhana untuk menyediakan satu instance global sebuah manager.

Contoh:

```csharp
GameManager.Instance
AIDirector.Instance
```

Gunakan secara terbatas.

Untuk praktikum kecil pola ini mempermudah integrasi, tetapi pada proyek besar dependency injection atau reference yang eksplisit dapat menghasilkan struktur yang lebih terkontrol.

---

# 10. Persiapan Project

Buat project baru:

```text
GC15_AdaptiveArenaDirector
```

Gunakan template:

```text
Universal 3D
```

atau template 3D lain yang telah digunakan selama praktikum sebelumnya.

---

# 11. Struktur Folder

Buat folder:

```text
Assets
├── _Project
│   ├── Scenes
│   ├── Scripts
│   │   ├── Player
│   │   ├── Enemy
│   │   ├── AI
│   │   └── Managers
│   ├── Prefabs
│   │   ├── Characters
│   │   └── Environment
│   ├── Materials
│   ├── Models
│   ├── UI
│   └── Audio
```

Keuntungan struktur tersebut adalah script dan asset final project tidak bercampur dengan package atau asset eksternal.

---

# 12. Membuat Scene

Simpan scene:

```text
Assets/_Project/Scenes/Arena.unity
```

Hierarchy dasar:

```text
Arena
├── Environment
│   ├── Ground
│   ├── Wall_North
│   ├── Wall_South
│   ├── Wall_East
│   ├── Wall_West
│   └── Obstacles
│
├── Player
├── Main Camera
│
├── Navigation
│
├── SpawnPoints
│   ├── SpawnPoint_01
│   ├── SpawnPoint_02
│   ├── SpawnPoint_03
│   └── SpawnPoint_04
│
├── PatrolPoints
│
└── Systems
    ├── GameManager
    ├── EnemySpawner
    ├── AIDirector
    └── AIDebugHUD
```

---

# 13. Membuat Arena

Buat Ground:

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
X = 4
Y = 1
Z = 4
```

Tambahkan beberapa cube sebagai obstacle.

Contoh:

```text
Obstacle01
Obstacle02
Obstacle03
Obstacle04
```

Tujuan obstacle adalah agar pathfinding dan line-of-sight enemy dapat terlihat saat pengujian.

---

# 14. Menyiapkan Navigation

Pastikan sistem AI Navigation tersedia pada project.

Tambahkan NavMeshSurface pada GameObject:

```text
Navigation
```

Kemudian lakukan:

```text
Bake
```

Pastikan Ground menjadi area walkable.

Obstacle harus membentuk area yang tidak dapat dilewati.

Setelah bake berhasil, area navigasi akan terlihat pada Scene View saat visualisasi Navigation aktif.

---

# 15. Membuat Player

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

Tambahkan:

```text
CharacterController
PlayerController
PlayerHealth
PlayerCombat
```

Hapus CapsuleCollider bawaan jika menggunakan CharacterController agar tidak terdapat collider karakter yang tidak diperlukan.

---

# 16. Script PlayerController.cs

Buat:

```text
Assets/_Project/Scripts/Player/PlayerController.cs
```

Isi:

```csharp
using UnityEngine;

[RequireComponent(typeof(CharacterController))]
public class PlayerController : MonoBehaviour
{
    [Header("Movement")]
    [SerializeField] private float moveSpeed = 6f;

    [Header("Rotation")]
    [SerializeField] private Camera mainCamera;

    private CharacterController controller;

    private void Awake()
    {
        controller = GetComponent<CharacterController>();

        if (mainCamera == null)
            mainCamera = Camera.main;
    }

    private void Update()
    {
        Move();
        RotateTowardMouse();
    }

    private void Move()
    {
        float horizontal = Input.GetAxisRaw("Horizontal");
        float vertical = Input.GetAxisRaw("Vertical");

        Vector3 direction =
            new Vector3(horizontal, 0f, vertical).normalized;

        controller.Move(direction * moveSpeed * Time.deltaTime);
    }

    private void RotateTowardMouse()
    {
        if (mainCamera == null)
            return;

        Ray ray = mainCamera.ScreenPointToRay(Input.mousePosition);

        Plane groundPlane = new Plane(Vector3.up, transform.position);

        if (groundPlane.Raycast(ray, out float distance))
        {
            Vector3 target = ray.GetPoint(distance);
            Vector3 direction = target - transform.position;
            direction.y = 0f;

            if (direction.sqrMagnitude > 0.01f)
            {
                transform.forward = direction.normalized;
            }
        }
    }
}
```

---

# 17. Penjelasan PlayerController

## RequireComponent

```csharp
[RequireComponent(typeof(CharacterController))]
```

Memastikan GameObject memiliki CharacterController.

---

## Input.GetAxisRaw

```csharp
Input.GetAxisRaw("Horizontal")
Input.GetAxisRaw("Vertical")
```

Digunakan untuk membaca input movement tradisional:

```text
W / S
A / D
Arrow keys
```

Jika project menggunakan Input System baru, bagian input dapat diganti dengan sistem input yang telah digunakan pada praktikum sebelumnya.

---

## normalized

```csharp
direction.normalized
```

Mencegah gerakan diagonal menjadi lebih cepat dibandingkan gerakan horizontal/vertikal.

---

# 18. PlayerHealth.cs

Buat:

```text
PlayerHealth.cs
```

```csharp
using UnityEngine;

public class PlayerHealth : MonoBehaviour
{
    [SerializeField] private float maxHealth = 100f;

    public float CurrentHealth { get; private set; }

    public float MaxHealth => maxHealth;

    public float HealthNormalized =>
        maxHealth <= 0f ? 0f : CurrentHealth / maxHealth;

    private void Awake()
    {
        CurrentHealth = maxHealth;
    }

    public void TakeDamage(float amount)
    {
        if (GameManager.Instance != null &&
            GameManager.Instance.IsGameOver)
            return;

        CurrentHealth -= amount;
        CurrentHealth = Mathf.Clamp(CurrentHealth, 0f, maxHealth);

        if (CurrentHealth <= 0f)
        {
            if (GameManager.Instance != null)
                GameManager.Instance.PlayerDied();
        }
    }

    public void Heal(float amount)
    {
        CurrentHealth += amount;
        CurrentHealth = Mathf.Clamp(CurrentHealth, 0f, maxHealth);
    }
}
```

---

# 19. Normalized Value

Bagian:

```csharp
CurrentHealth / maxHealth
```

mengubah health menjadi rentang:

```text
0.0 – 1.0
```

Contoh:

```text
100 / 100 = 1.00
75 / 100  = 0.75
30 / 100  = 0.30
```

Normalized value sangat berguna untuk sistem adaptive karena tidak bergantung pada skala absolut.

---

# 20. Membuat PlayerCombat.cs

Player menggunakan raycast sederhana untuk menyerang enemy.

```csharp
using UnityEngine;

public class PlayerCombat : MonoBehaviour
{
    [SerializeField] private float attackRange = 20f;
    [SerializeField] private float damage = 25f;
    [SerializeField] private float fireCooldown = 0.25f;
    [SerializeField] private LayerMask hitMask;

    private float nextFireTime;

    private void Update()
    {
        if (GameManager.Instance != null &&
            GameManager.Instance.IsGameOver)
            return;

        if (Input.GetMouseButton(0) &&
            Time.time >= nextFireTime)
        {
            Shoot();
            nextFireTime = Time.time + fireCooldown;
        }
    }

    private void Shoot()
    {
        Vector3 origin =
            transform.position + Vector3.up * 0.8f;

        Vector3 direction = transform.forward;

        if (Physics.Raycast(
            origin,
            direction,
            out RaycastHit hit,
            attackRange,
            hitMask))
        {
            EnemyHealth enemy =
                hit.collider.GetComponentInParent<EnemyHealth>();

            if (enemy != null)
            {
                enemy.TakeDamage(damage);
            }
        }
    }

    private void OnDrawGizmosSelected()
    {
        Gizmos.DrawLine(
            transform.position + Vector3.up * 0.8f,
            transform.position +
            Vector3.up * 0.8f +
            transform.forward * attackRange
        );
    }
}
```

Set `hitMask` agar mencakup:

```text
Enemy
Obstacle
```

Dengan demikian tembakan tidak menembus wall.

---

# 21. Membuat Enemy

Buat Capsule baru:

```text
Enemy
```

Tambahkan:

```text
NavMeshAgent
EnemyAI
EnemyHealth
```

Layer:

```text
Enemy
```

Parameter NavMeshAgent awal:

```text
Speed             = 3.5
Angular Speed     = 360
Acceleration      = 8
Stopping Distance = 1.5
```

Kemudian jadikan prefab:

```text
Assets/_Project/Prefabs/Characters/Enemy.prefab
```

Hapus instance dari scene setelah prefab selesai.

---

# 22. Finite State Machine Enemy

Enemy menggunakan tiga state utama:

```text
PATROL
CHASE
ATTACK
```

Alurnya:

```text
          Player Seen
PATROL ───────────────→ CHASE
                          │
                          │ in attack range
                          ↓
                       ATTACK
                          │
                          │ player too far
                          ↓
                        CHASE

CHASE
  │
  │ player lost
  ↓
PATROL
```

---

# 23. Membuat EnemyAI.cs

```csharp
using UnityEngine;
using UnityEngine.AI;

[RequireComponent(typeof(NavMeshAgent))]
public class EnemyAI : MonoBehaviour
{
    public enum AIState
    {
        Patrol,
        Chase,
        Attack
    }

    [Header("Perception")]
    [SerializeField] private float viewDistance = 12f;
    [SerializeField] private float viewAngle = 120f;
    [SerializeField] private LayerMask obstacleMask;

    [Header("Combat")]
    [SerializeField] private float attackRange = 2f;
    [SerializeField] private float attackDamage = 10f;
    [SerializeField] private float attackCooldown = 1f;

    [Header("Patrol")]
    [SerializeField] private float patrolRadius = 7f;
    [SerializeField] private float patrolWaitTime = 2f;

    private NavMeshAgent agent;
    private Transform player;
    private PlayerHealth playerHealth;

    private AIState currentState;

    private float nextAttackTime;
    private float patrolTimer;

    private Vector3 patrolDestination;

    public AIState CurrentState => currentState;

    public Transform CurrentTarget => player;

    public NavMeshAgent Agent => agent;

    private void Awake()
    {
        agent = GetComponent<NavMeshAgent>();
    }

    private void Start()
    {
        GameObject playerObject =
            GameObject.FindGameObjectWithTag("Player");

        if (playerObject != null)
        {
            player = playerObject.transform;
            playerHealth =
                playerObject.GetComponent<PlayerHealth>();
        }

        ChangeState(AIState.Patrol);

        ChooseNewPatrolPoint();
    }

    private void Update()
    {
        if (GameManager.Instance != null &&
            GameManager.Instance.IsGameOver)
        {
            agent.isStopped = true;
            return;
        }

        bool playerVisible = CanSeePlayer();

        switch (currentState)
        {
            case AIState.Patrol:
                UpdatePatrol(playerVisible);
                break;

            case AIState.Chase:
                UpdateChase(playerVisible);
                break;

            case AIState.Attack:
                UpdateAttack(playerVisible);
                break;
        }
    }

    private void UpdatePatrol(bool playerVisible)
    {
        agent.isStopped = false;

        if (playerVisible)
        {
            ChangeState(AIState.Chase);
            return;
        }

        if (!agent.pathPending &&
            agent.remainingDistance <= agent.stoppingDistance + 0.2f)
        {
            patrolTimer += Time.deltaTime;

            if (patrolTimer >= patrolWaitTime)
            {
                ChooseNewPatrolPoint();
                patrolTimer = 0f;
            }
        }
    }

    private void UpdateChase(bool playerVisible)
    {
        if (player == null)
            return;

        agent.isStopped = false;

        float distance =
            Vector3.Distance(transform.position, player.position);

        if (!playerVisible)
        {
            ChangeState(AIState.Patrol);
            ChooseNewPatrolPoint();
            return;
        }

        if (distance <= attackRange)
        {
            ChangeState(AIState.Attack);
            return;
        }

        agent.SetDestination(player.position);
    }

    private void UpdateAttack(bool playerVisible)
    {
        if (player == null)
            return;

        float distance =
            Vector3.Distance(transform.position, player.position);

        if (!playerVisible || distance > attackRange)
        {
            ChangeState(AIState.Chase);
            return;
        }

        agent.isStopped = true;

        Vector3 direction =
            player.position - transform.position;

        direction.y = 0f;

        if (direction.sqrMagnitude > 0.01f)
        {
            transform.forward = direction.normalized;
        }

        if (Time.time >= nextAttackTime)
        {
            if (playerHealth != null)
            {
                playerHealth.TakeDamage(attackDamage);
            }

            nextAttackTime =
                Time.time + attackCooldown;
        }
    }

    private bool CanSeePlayer()
    {
        if (player == null)
            return false;

        Vector3 origin =
            transform.position + Vector3.up * 0.8f;

        Vector3 playerPosition =
            player.position + Vector3.up * 0.8f;

        Vector3 toPlayer =
            playerPosition - origin;

        float distance = toPlayer.magnitude;

        if (distance > viewDistance)
            return false;

        float angle =
            Vector3.Angle(transform.forward, toPlayer);

        if (angle > viewAngle * 0.5f)
            return false;

        if (Physics.Raycast(
            origin,
            toPlayer.normalized,
            distance,
            obstacleMask))
        {
            return false;
        }

        return true;
    }

    private void ChooseNewPatrolPoint()
    {
        Vector3 randomDirection =
            Random.insideUnitSphere * patrolRadius;

        randomDirection.y = 0f;

        Vector3 candidate =
            transform.position + randomDirection;

        if (NavMesh.SamplePosition(
            candidate,
            out NavMeshHit hit,
            patrolRadius,
            NavMesh.AllAreas))
        {
            patrolDestination = hit.position;

            if (agent.isOnNavMesh)
            {
                agent.SetDestination(patrolDestination);
            }
        }
    }

    private void ChangeState(AIState newState)
    {
        if (currentState == newState)
            return;

        AIState previousState = currentState;

        currentState = newState;

        if (AIDebugHUD.DebugEnabled)
        {
            Debug.Log(
                $"[{name}] State: " +
                $"{previousState} -> {newState}"
            );
        }
    }

    private void OnDrawGizmosSelected()
    {
        Gizmos.DrawWireSphere(
            transform.position,
            viewDistance
        );

        Gizmos.DrawWireSphere(
            transform.position,
            attackRange
        );

        Gizmos.DrawSphere(
            patrolDestination,
            0.2f
        );

        if (player != null)
        {
            Gizmos.DrawLine(
                transform.position + Vector3.up * 0.8f,
                player.position + Vector3.up * 0.8f
            );
        }
    }
}
```

---

# 24. Analisis Enemy Perception

Enemy hanya melihat player ketika seluruh syarat berikut terpenuhi:

```text
Distance valid
       ↓
Field of View valid
       ↓
Line of Sight tidak terhalang
       ↓
PLAYER VISIBLE
```

## Distance

```csharp
if (distance > viewDistance)
    return false;
```

Enemy tidak dapat mendeteksi objek yang terlalu jauh.

---

## Field of View

```csharp
Vector3.Angle(transform.forward, toPlayer)
```

menghitung sudut antara arah pandang enemy dan posisi player.

Misalnya:

```text
viewAngle = 120°
```

berarti:

```text
60° kiri
+
60° kanan
```

---

## Line of Sight

```csharp
Physics.Raycast(...)
```

digunakan untuk memastikan tidak ada obstacle antara enemy dan player.

Inilah yang mencegah enemy seolah-olah dapat melihat menembus dinding.

---

# 25. EnemyHealth.cs

```csharp
using UnityEngine;

public class EnemyHealth : MonoBehaviour
{
    [SerializeField] private float maxHealth = 50f;

    private float currentHealth;
    private bool dead;

    private void OnEnable()
    {
        currentHealth = maxHealth;
        dead = false;
    }

    public void TakeDamage(float amount)
    {
        if (dead)
            return;

        currentHealth -= amount;

        if (currentHealth <= 0f)
        {
            Die();
        }
    }

    private void Die()
    {
        dead = true;

        if (GameManager.Instance != null)
        {
            GameManager.Instance.RegisterKill();
        }

        if (EnemySpawner.Instance != null)
        {
            EnemySpawner.Instance.NotifyEnemyKilled(gameObject);
        }
        else
        {
            Destroy(gameObject);
        }
    }
}
```

---

# 26. Membuat Spawn Points

Di Hierarchy:

```text
SpawnPoints
├── SpawnPoint_01
├── SpawnPoint_02
├── SpawnPoint_03
├── SpawnPoint_04
└── SpawnPoint_05
```

Gunakan Empty GameObject.

Letakkan di beberapa sisi arena.

Prinsip penting:

```text
Jangan menempatkan spawn point tepat di dekat Player.
```

Spawn yang terlalu dekat dapat membuat AI terasa curang.

---

# 27. EnemySpawner.cs

```csharp
using System.Collections.Generic;
using UnityEngine;

public class EnemySpawner : MonoBehaviour
{
    public static EnemySpawner Instance { get; private set; }

    [SerializeField] private GameObject enemyPrefab;

    [SerializeField] private Transform[] spawnPoints;

    [SerializeField] private int hardEnemyLimit = 12;

    [SerializeField] private float minimumSpawnDistanceFromPlayer = 8f;

    private readonly List<GameObject> activeEnemies =
        new List<GameObject>();

    private Transform player;

    public int ActiveEnemyCount
    {
        get
        {
            CleanupList();
            return activeEnemies.Count;
        }
    }

    private void Awake()
    {
        Instance = this;
    }

    private void Start()
    {
        GameObject playerObject =
            GameObject.FindGameObjectWithTag("Player");

        if (playerObject != null)
            player = playerObject.transform;
    }

    public bool SpawnEnemy()
    {
        CleanupList();

        if (enemyPrefab == null)
            return false;

        if (activeEnemies.Count >= hardEnemyLimit)
            return false;

        Transform spawnPoint = FindValidSpawnPoint();

        if (spawnPoint == null)
            return false;

        GameObject enemy =
            Instantiate(
                enemyPrefab,
                spawnPoint.position,
                spawnPoint.rotation
            );

        activeEnemies.Add(enemy);

        return true;
    }

    private Transform FindValidSpawnPoint()
    {
        if (spawnPoints == null ||
            spawnPoints.Length == 0)
            return null;

        int startIndex =
            Random.Range(0, spawnPoints.Length);

        for (int i = 0; i < spawnPoints.Length; i++)
        {
            int index =
                (startIndex + i) % spawnPoints.Length;

            Transform candidate = spawnPoints[index];

            if (candidate == null)
                continue;

            if (player == null)
                return candidate;

            float distance =
                Vector3.Distance(
                    candidate.position,
                    player.position
                );

            if (distance >= minimumSpawnDistanceFromPlayer)
                return candidate;
        }

        return null;
    }

    public void NotifyEnemyKilled(GameObject enemy)
    {
        activeEnemies.Remove(enemy);

        Destroy(enemy);
    }

    private void CleanupList()
    {
        activeEnemies.RemoveAll(enemy => enemy == null);
    }
}
```

---

# 28. Mengapa Ada Hard Enemy Limit?

```csharp
hardEnemyLimit = 12;
```

AI Director sebaiknya tidak memiliki kebebasan tanpa batas.

Tanpa batasan dapat terjadi:

```text
Director ingin menambah pressure
        ↓
spawn terus
        ↓
20 enemy
        ↓
30 enemy
        ↓
performance turun
        ↓
game tidak fair
```

Hard limit adalah bentuk **constraint**.

Prinsip Advanced Game AI:

```text
Adaptive
≠
Unlimited
```

---

# 29. GameManager.cs

GameManager menyimpan state gameplay dan statistik player.

```csharp
using UnityEngine;
using UnityEngine.SceneManagement;

public class GameManager : MonoBehaviour
{
    public static GameManager Instance { get; private set; }

    [SerializeField] private float survivalDuration = 180f;

    private float gameTime;
    private int killCount;

    public bool IsGameOver { get; private set; }

    public bool PlayerWon { get; private set; }

    public float GameTime => gameTime;

    public float RemainingTime =>
        Mathf.Max(0f, survivalDuration - gameTime);

    public int KillCount => killCount;

    public float KillsPerMinute
    {
        get
        {
            if (gameTime <= 1f)
                return 0f;

            return killCount / (gameTime / 60f);
        }
    }

    private void Awake()
    {
        Instance = this;

        Time.timeScale = 1f;
    }

    private void Update()
    {
        if (IsGameOver)
        {
            if (Input.GetKeyDown(KeyCode.R))
                RestartScene();

            return;
        }

        gameTime += Time.deltaTime;

        if (gameTime >= survivalDuration)
        {
            WinGame();
        }
    }

    public void RegisterKill()
    {
        if (IsGameOver)
            return;

        killCount++;
    }

    public void PlayerDied()
    {
        if (IsGameOver)
            return;

        IsGameOver = true;
        PlayerWon = false;
    }

    private void WinGame()
    {
        IsGameOver = true;
        PlayerWon = true;
    }

    private void RestartScene()
    {
        SceneManager.LoadScene(
            SceneManager.GetActiveScene().buildIndex
        );
    }
}
```

---

# 30. Player Performance Metrics

AI Director membutuhkan informasi mengenai player.

Pada praktikum digunakan:

```text
HealthNormalized
KillsPerMinute
EnemyCount
```

Contoh interpretation:

```text
Health = 90%
Kills/minute = tinggi
Enemy count = rendah

→ player relatif dominan
```

Sebaliknya:

```text
Health = 20%
Enemy count = tinggi

→ player sedang tertekan
```

---

# 31. Konsep Intensity

Gunakan nilai intensity:

```text
0.0 ───────────────────── 1.0

Low                        High
```

Contoh:

```text
0.20 = Low
0.50 = Medium
0.85 = High
```

Intensity menjadi representasi internal mengenai besarnya tekanan gameplay yang ingin diberikan Director.

---

# 32. Membuat AIDirector.cs

```csharp
using UnityEngine;

public class AIDirector : MonoBehaviour
{
    public static AIDirector Instance { get; private set; }

    [Header("References")]
    [SerializeField] private PlayerHealth playerHealth;
    [SerializeField] private EnemySpawner enemySpawner;

    [Header("Director Timing")]
    [SerializeField] private float evaluationInterval = 2f;

    [Header("Spawn Timing")]
    [SerializeField] private float minimumSpawnInterval = 1.5f;
    [SerializeField] private float maximumSpawnInterval = 6f;

    [Header("Intensity")]
    [Range(0f, 1f)]
    [SerializeField] private float intensity = 0.3f;

    [SerializeField] private float intensityChangeSpeed = 0.1f;

    [Header("Target Enemy Count")]
    [SerializeField] private int minimumEnemies = 2;
    [SerializeField] private int maximumEnemies = 8;

    private float evaluationTimer;
    private float spawnTimer;

    private string lastDecision = "Initializing";

    public float Intensity => intensity;

    public string LastDecision => lastDecision;

    private void Awake()
    {
        Instance = this;
    }

    private void Start()
    {
        if (playerHealth == null)
        {
            GameObject player =
                GameObject.FindGameObjectWithTag("Player");

            if (player != null)
            {
                playerHealth =
                    player.GetComponent<PlayerHealth>();
            }
        }

        if (enemySpawner == null)
            enemySpawner = EnemySpawner.Instance;
    }

    private void Update()
    {
        if (GameManager.Instance == null ||
            GameManager.Instance.IsGameOver)
            return;

        evaluationTimer += Time.deltaTime;
        spawnTimer += Time.deltaTime;

        if (evaluationTimer >= evaluationInterval)
        {
            EvaluateGameState();

            evaluationTimer = 0f;
        }

        TrySpawn();
    }

    private void EvaluateGameState()
    {
        if (playerHealth == null ||
            enemySpawner == null ||
            GameManager.Instance == null)
            return;

        float health =
            playerHealth.HealthNormalized;

        float killRate =
            GameManager.Instance.KillsPerMinute;

        int enemyCount =
            enemySpawner.ActiveEnemyCount;

        // PLAYER SANGAT TERTEKAN
        if (health < 0.30f)
        {
            intensity -= intensityChangeSpeed;

            lastDecision =
                "Reduce pressure: player health low";
        }

        // PLAYER DOMINAN
        else if (
            health > 0.70f &&
            killRate >= 4f &&
            enemyCount <= 4)
        {
            intensity += intensityChangeSpeed;

            lastDecision =
                "Increase pressure: player dominant";
        }

        // ARENA TERLALU SEPI
        else if (
            health > 0.50f &&
            enemyCount < minimumEnemies)
        {
            intensity += intensityChangeSpeed * 0.5f;

            lastDecision =
                "Increase pressure: arena too quiet";
        }

        // ENEMY TERLALU BANYAK
        else if (enemyCount >= maximumEnemies)
        {
            intensity -= intensityChangeSpeed;

            lastDecision =
                "Reduce pressure: too many enemies";
        }

        else
        {
            intensity =
                Mathf.MoveTowards(
                    intensity,
                    0.5f,
                    intensityChangeSpeed * 0.25f
                );

            lastDecision =
                "Maintain balanced intensity";
        }

        intensity = Mathf.Clamp01(intensity);

        if (AIDebugHUD.DebugEnabled)
        {
            Debug.Log(
                $"[Director] {lastDecision} | " +
                $"Health={health:F2}, " +
                $"KPM={killRate:F2}, " +
                $"Enemies={enemyCount}, " +
                $"Intensity={intensity:F2}"
            );
        }
    }

    private void TrySpawn()
    {
        if (enemySpawner == null)
            return;

        int targetEnemyCount =
            Mathf.RoundToInt(
                Mathf.Lerp(
                    minimumEnemies,
                    maximumEnemies,
                    intensity
                )
            );

        if (enemySpawner.ActiveEnemyCount >= targetEnemyCount)
            return;

        float spawnInterval =
            Mathf.Lerp(
                maximumSpawnInterval,
                minimumSpawnInterval,
                intensity
            );

        if (spawnTimer >= spawnInterval)
        {
            bool spawned =
                enemySpawner.SpawnEnemy();

            if (spawned)
            {
                spawnTimer = 0f;
            }
        }
    }
}
```

---

# 33. Bagaimana AI Director Bekerja?

Pipeline:

```text
Collect Game State
       ↓
Health
Kill Rate
Enemy Count
       ↓
Evaluate
       ↓
Calculate Intensity
       ↓
Determine Target Enemy Count
       ↓
Determine Spawn Interval
       ↓
EnemySpawner
       ↓
Observe Result
```

---

# 34. Adaptive Rule 1 — Player Low Health

```csharp
if (health < 0.30f)
{
    intensity -= intensityChangeSpeed;
}
```

Interpretasi:

```text
Player Health < 30%
       ↓
Director menganggap player tertekan
       ↓
Intensity turun
       ↓
Target enemy berkurang
       ↓
Spawn interval menjadi lebih lama
```

Ini memberi player kesempatan recovery.

---

# 35. Adaptive Rule 2 — Player Dominan

```csharp
health > 0.70f
killRate >= 4f
enemyCount <= 4
```

Interpretasinya:

```text
Health tinggi
+
kill rate tinggi
+
enemy sedikit
       ↓
Player terlalu nyaman
       ↓
Director menaikkan intensity
```

---

# 36. Mengapa Tidak Langsung Mengubah Difficulty?

Contoh yang buruk:

```text
Player kill satu enemy
       ↓
Difficulty langsung +50%
```

Akibatnya perubahan terlalu mendadak.

Pada implementasi ini digunakan:

```csharp
intensity += intensityChangeSpeed;
```

sehingga perubahan lebih bertahap.

Konsep ini disebut **smoothing** atau gradual adjustment.

---

# 37. Mathf.Clamp01

```csharp
Mathf.Clamp01(intensity)
```

menjamin nilai selalu berada pada:

```text
0 <= intensity <= 1
```

Tanpa clamp dapat terjadi:

```text
Intensity = 1.4
Intensity = -0.2
```

yang dapat menyebabkan parameter adaptasi tidak sesuai desain.

---

# 38. Mathf.Lerp untuk Adaptive Parameter

Kode:

```csharp
Mathf.Lerp(
    maximumSpawnInterval,
    minimumSpawnInterval,
    intensity
);
```

Misalnya:

```text
maximumSpawnInterval = 6
minimumSpawnInterval = 1.5
```

Jika:

```text
Intensity = 0
```

maka interval mendekati:

```text
6 detik
```

Jika:

```text
Intensity = 1
```

maka interval mendekati:

```text
1.5 detik
```

Artinya:

```text
Intensity naik
     ↓
Spawn lebih sering
```

---

# 39. Target Enemy Count

Director juga menghitung:

```csharp
Mathf.Lerp(
    minimumEnemies,
    maximumEnemies,
    intensity
);
```

Contoh:

```text
minimumEnemies = 2
maximumEnemies = 8
```

Maka kira-kira:

```text
Intensity 0.0 → target 2
Intensity 0.5 → target 5
Intensity 1.0 → target 8
```

Dengan demikian adaptasi tidak hanya mengubah spawn speed tetapi juga jumlah tekanan aktif di arena.

---

# 40. Mengapa AI Director Lebih Baik daripada Spawner Biasa?

Spawner biasa:

```text
Setiap 3 detik
     ↓
Spawn enemy
```

Tidak peduli:

```text
Player hampir mati
Player sedang menang
Enemy masih banyak
Arena sedang kosong
```

AI Director:

```text
Observe
   ↓
Evaluate
   ↓
Decide
   ↓
Adapt
```

Game menjadi lebih responsif terhadap kondisi gameplay.

---

# 41. Membuat AI Debug Mode

Salah satu requirement penting praktikum adalah AI dapat dijelaskan.

Buat:

```text
AIDebugHUD.cs
```

---

# 42. AIDebugHUD.cs

```csharp
using UnityEngine;

public class AIDebugHUD : MonoBehaviour
{
    public static bool DebugEnabled { get; private set; }

    [SerializeField] private PlayerHealth playerHealth;

    private GUIStyle titleStyle;
    private GUIStyle textStyle;

    private void Start()
    {
        GameObject player =
            GameObject.FindGameObjectWithTag("Player");

        if (player != null && playerHealth == null)
        {
            playerHealth =
                player.GetComponent<PlayerHealth>();
        }

        titleStyle = new GUIStyle();
        titleStyle.fontSize = 20;
        titleStyle.fontStyle = FontStyle.Bold;
        titleStyle.normal.textColor = Color.white;

        textStyle = new GUIStyle();
        textStyle.fontSize = 16;
        textStyle.normal.textColor = Color.white;
    }

    private void Update()
    {
        if (Input.GetKeyDown(KeyCode.F1))
        {
            DebugEnabled = !DebugEnabled;
        }
    }

    private void OnGUI()
    {
        if (!DebugEnabled)
            return;

        GUI.Box(
            new Rect(10, 10, 430, 250),
            ""
        );

        GUI.Label(
            new Rect(25, 20, 350, 30),
            "AI DEBUG MODE",
            titleStyle
        );

        float health =
            playerHealth != null
                ? playerHealth.CurrentHealth
                : 0f;

        float intensity =
            AIDirector.Instance != null
                ? AIDirector.Instance.Intensity
                : 0f;

        string decision =
            AIDirector.Instance != null
                ? AIDirector.Instance.LastDecision
                : "-";

        int enemies =
            EnemySpawner.Instance != null
                ? EnemySpawner.Instance.ActiveEnemyCount
                : 0;

        int kills =
            GameManager.Instance != null
                ? GameManager.Instance.KillCount
                : 0;

        float kpm =
            GameManager.Instance != null
                ? GameManager.Instance.KillsPerMinute
                : 0f;

        string info =
            $"Player Health : {health:F0}\n" +
            $"Enemy Count   : {enemies}\n" +
            $"Kills         : {kills}\n" +
            $"Kills/Minute  : {kpm:F2}\n" +
            $"Intensity     : {intensity:F2}\n" +
            $"Director      : {decision}\n\n" +
            "F1 = Toggle Debug";

        GUI.Label(
            new Rect(25, 55, 390, 190),
            info,
            textStyle
        );
    }
}
```

---

# 43. Informasi Debug yang Ditampilkan

Saat F1 ditekan:

```text
AI DEBUG MODE

Player Health : 80
Enemy Count   : 4
Kills         : 7
Kills/Minute  : 5.20
Intensity     : 0.70

Director:
Increase pressure: player dominant
```

Data tersebut menjawab:

```text
Apa yang dilihat AI Director?
Apa keputusan Director?
Mengapa gameplay berubah?
```

Ini merupakan aspek penting **explainability**.

---

# 44. Membuat Game Status UI Sederhana

Tambahkan script berikut pada GameManager jika ingin HUD pengujian cepat:

```csharp
private void OnGUI()
{
    GUI.Box(
        new Rect(
            Screen.width - 230,
            10,
            220,
            100
        ),
        ""
    );

    GUI.Label(
        new Rect(
            Screen.width - 215,
            25,
            200,
            25
        ),
        $"Time: {RemainingTime:F0}"
    );

    GUI.Label(
        new Rect(
            Screen.width - 215,
            50,
            200,
            25
        ),
        $"Kills: {killCount}"
    );

    if (IsGameOver)
    {
        string message =
            PlayerWon
                ? "YOU SURVIVED!"
                : "GAME OVER";

        GUI.Box(
            new Rect(
                Screen.width / 2 - 150,
                Screen.height / 2 - 70,
                300,
                140
            ),
            message + "\n\nPress R to Restart"
        );
    }
}
```

Untuk final project sebenarnya, HUD player sebaiknya dibuat menggunakan Canvas/UI system agar visual lebih baik.

`OnGUI` di sini digunakan agar fokus praktikum tetap pada integrasi AI.

---

# 45. Menambahkan Debug State pada Enemy

Tambahkan script:

```text
EnemyDebugLabel.cs
```

```csharp
using UnityEngine;

public class EnemyDebugLabel : MonoBehaviour
{
    private EnemyAI enemyAI;

    private void Awake()
    {
        enemyAI = GetComponent<EnemyAI>();
    }

    private void OnGUI()
    {
        if (!AIDebugHUD.DebugEnabled ||
            enemyAI == null)
            return;

        Camera cam = Camera.main;

        if (cam == null)
            return;

        Vector3 screenPosition =
            cam.WorldToScreenPoint(
                transform.position +
                Vector3.up * 2.2f
            );

        if (screenPosition.z <= 0)
            return;

        Rect rect =
            new Rect(
                screenPosition.x - 60,
                Screen.height -
                screenPosition.y - 15,
                120,
                25
            );

        GUI.Label(
            rect,
            enemyAI.CurrentState.ToString()
        );
    }
}
```

Tambahkan pada prefab Enemy.

Saat debug aktif mahasiswa dapat melihat:

```text
Enemy01: PATROL
Enemy02: CHASE
Enemy03: ATTACK
```

secara langsung di Game View.

---

# 46. Kamera

Untuk praktikum ini gunakan kamera top-down/isometric sederhana.

Contoh posisi:

```text
Position:
X = 0
Y = 18
Z = -12

Rotation:
X = 55
Y = 0
Z = 0
```

Agar kamera mengikuti player, buat:

```text
CameraFollow.cs
```

```csharp
using UnityEngine;

public class CameraFollow : MonoBehaviour
{
    [SerializeField] private Transform target;

    [SerializeField] private Vector3 offset =
        new Vector3(0f, 18f, -12f);

    [SerializeField] private float smoothSpeed = 5f;

    private void LateUpdate()
    {
        if (target == null)
            return;

        Vector3 desiredPosition =
            target.position + offset;

        transform.position =
            Vector3.Lerp(
                transform.position,
                desiredPosition,
                smoothSpeed * Time.deltaTime
            );
    }
}
```

Assign Player ke:

```text
Target
```

---

# 47. Menghubungkan Semua Component

## Player

```text
Player
├── CharacterController
├── PlayerController
├── PlayerHealth
└── PlayerCombat
```

Tag:

```text
Player
```

---

## Enemy Prefab

```text
Enemy
├── NavMeshAgent
├── EnemyAI
├── EnemyHealth
└── EnemyDebugLabel
```

Layer:

```text
Enemy
```

---

## EnemySpawner

Inspector:

```text
Enemy Prefab:
Enemy.prefab

Spawn Points:
SpawnPoint_01
SpawnPoint_02
SpawnPoint_03
SpawnPoint_04

Hard Enemy Limit:
12

Minimum Spawn Distance:
8
```

---

## AIDirector

Assign:

```text
Player Health → Player
Enemy Spawner → EnemySpawner
```

Parameter awal:

```text
Evaluation Interval     = 2
Minimum Spawn Interval  = 1.5
Maximum Spawn Interval  = 6
Intensity               = 0.3
Intensity Change Speed  = 0.1
Minimum Enemies         = 2
Maximum Enemies         = 8
```

---

# 48. Layer Setup

Buat layer:

```text
Player
Enemy
Obstacle
```

Assign:

```text
Player → Player
Enemy → Enemy
Walls → Obstacle
Obstacle objects → Obstacle
```

Pada EnemyAI:

```text
Obstacle Mask = Obstacle
```

Pada PlayerCombat:

```text
Hit Mask =
Enemy + Obstacle
```

---

# 49. Urutan Pengujian yang Benar

Jangan langsung menguji seluruh sistem sekaligus.

Gunakan urutan berikut.

## Test 1 — Player

Pastikan:

```text
WASD bergerak
Mouse mengubah arah
```

---

## Test 2 — Navigation

Masukkan satu Enemy secara manual.

Pastikan:

```text
Enemy berada pada NavMesh
Enemy dapat berjalan
Enemy tidak menembus obstacle
```

---

## Test 3 — Perception

Posisikan player:

```text
di depan enemy
di belakang enemy
di balik wall
di luar detection range
```

Perhatikan perubahan perilaku.

---

## Test 4 — FSM

Aktifkan F1.

Pastikan urutan:

```text
PATROL
   ↓
CHASE
   ↓
ATTACK
```

berfungsi.

---

## Test 5 — Combat

Tembak enemy.

Pastikan:

```text
Enemy health turun
Enemy mati
Kill count bertambah
```

---

## Test 6 — Spawner

Jalankan:

```text
EnemySpawner.SpawnEnemy()
```

atau jalankan game bersama Director.

Pastikan enemy muncul dari spawn point.

---

## Test 7 — AI Director

Perhatikan:

```text
Intensity
Enemy Count
Kills/Minute
Director Decision
```

---

# 50. Skenario Pengujian AI Director

## Skenario A — Player Dominan

Usahakan:

```text
Health > 70%
Kill Rate > 4/min
Enemy <= 4
```

Hasil yang diharapkan:

```text
Director:
Increase pressure: player dominant

Intensity naik
Spawn interval turun
Enemy target naik
```

---

# 51. Skenario B — Player Low Health

Biarkan enemy menyerang sampai:

```text
Health < 30%
```

Hasil:

```text
Director:
Reduce pressure: player health low
```

Intensity turun.

---

# 52. Skenario C — Terlalu Banyak Enemy

Biarkan:

```text
Enemy Count >= Maximum Enemies
```

Director seharusnya tidak terus menambah tekanan.

---

# 53. Skenario D — Arena Sepi

Bunuh enemy hingga:

```text
Enemy Count < Minimum Enemies
```

dengan health player masih cukup tinggi.

Director secara perlahan menaikkan tekanan.

---

# 54. Konsep Feedback Loop

Sistem sekarang mempunyai feedback loop:

```text
Player Action
      ↓
Player Performance
      ↓
Performance Metrics
      ↓
AI Director
      ↓
Adaptation
      ↓
Enemy Pressure
      ↓
Player Action
```

Ini adalah karakteristik penting sebuah adaptive game system.

---

# 55. AI Director versus Enemy AI

## Enemy AI

Berpikir secara lokal:

```text
Apakah saya melihat player?
Apakah player dekat?
Haruskah saya menyerang?
```

## AI Director

Berpikir secara global:

```text
Apakah player terlalu nyaman?
Apakah permainan terlalu sulit?
Berapa banyak enemy yang seharusnya aktif?
Apakah perlu encounter berikutnya?
```

Dengan demikian:

```text
Enemy AI = local intelligence
AI Director = global gameplay intelligence
```

---

# 56. Menambahkan Emergent Behavior — Opsional

Untuk pengembangan lanjut, tambahkan beberapa enemy sekaligus.

Masing-masing hanya mempunyai aturan sederhana:

```text
Chase player
Avoid obstacle
NavMesh local avoidance
Attack ketika dekat
```

Interaksi beberapa agent dapat menghasilkan pola gameplay yang tidak sepenuhnya di-script.

Contohnya enemy dapat:

```text
datang dari arah berbeda,
memotong jalur player,
memaksa player berpindah posisi.
```

Namun jangan mengklaim setiap perilaku kelompok otomatis merupakan emergence yang baik.

Evaluasilah apakah pola tersebut benar-benar muncul dari interaksi rule dan memberi pengaruh pada gameplay.

---

# 57. Pengembangan Advanced — Recovery Event

AI Director dapat dikembangkan untuk memberi bantuan.

Contoh:

```text
Health < 20%
Enemy <= 3
        ↓
Spawn Health Pickup
```

Director tidak hanya mengatur enemy, tetapi dapat menjadi:

```text
Encounter Manager
Resource Manager
Tension Manager
```

---

# 58. Pengembangan Advanced — Enemy Aggression

Director juga dapat mengubah parameter global:

```text
Intensity 0.0–0.3
→ enemy aggression rendah

Intensity 0.3–0.7
→ normal

Intensity > 0.7
→ aggression tinggi
```

Contohnya:

```text
Attack cooldown
Movement speed
Detection range
```

Namun perubahan sebaiknya memiliki batas aman.

---

# 59. Hal yang Tidak Direkomendasikan

Jangan membuat adaptasi:

```text
Intensity naik
→ enemy damage menjadi 10x
```

atau:

```text
player bermain bagus
→ enemy muncul tepat di belakang player
```

Hal tersebut berisiko menghasilkan game yang terasa menghukum player.

Adaptive gameplay sebaiknya mempertahankan:

```text
Challenge
+
Fairness
+
Counterplay
```

---

# 60. Debugging AI

Jika Enemy tidak bergerak, periksa:

```text
[ ] NavMesh sudah di-bake
[ ] Enemy berada pada NavMesh
[ ] NavMeshAgent aktif
[ ] Destination berada pada NavMesh
[ ] Agent tidak isStopped
[ ] Obstacle tidak menutup semua jalan
```

---

# 61. Enemy Tidak Melihat Player

Periksa:

```text
[ ] Player menggunakan Tag Player
[ ] View Distance cukup besar
[ ] View Angle sesuai
[ ] Obstacle Mask benar
[ ] Enemy menghadap player
[ ] Wall tidak salah layer
```

---

# 62. Enemy Melihat Menembus Wall

Kemungkinan:

```text
Wall tidak berada pada Layer Obstacle
```

Pastikan:

```text
Wall
Layer = Obstacle
```

dan:

```text
EnemyAI
Obstacle Mask = Obstacle
```

---

# 63. Enemy Tidak Menyerang

Periksa:

```text
Attack Range
PlayerHealth
player reference
attack cooldown
distance
```

Aktifkan:

```text
F1
```

dan lihat apakah state berubah menjadi:

```text
ATTACK
```

---

# 64. Director Tidak Berubah

Periksa AI Debug Mode.

Lihat:

```text
Health
Kill Rate
Enemy Count
Intensity
Last Decision
```

Misalnya kill rate tidak pernah mencapai threshold:

```text
4 kills/minute
```

maka rule Player Dominant memang tidak akan aktif.

---

# 65. Director Spawn Terlalu Cepat

Atur:

```text
Minimum Spawn Interval
Maximum Spawn Interval
Maximum Enemies
Intensity Change Speed
```

Contoh lebih aman:

```text
Min Interval = 2
Max Interval = 7
Max Enemies  = 6
```

---

# 66. Debug Logging

Contoh log:

```text
[Enemy01] State: Patrol -> Chase

[Enemy01] State: Chase -> Attack

[Director]
Increase pressure: player dominant
Health=0.88
KPM=5.20
Enemies=3
Intensity=0.70
```

Log sangat membantu untuk mencari sebab suatu keputusan.

Namun hindari:

```csharp
Debug.Log(...)
```

setiap frame.

Lebih baik log hanya ketika terjadi perubahan state atau evaluasi berkala.

---

# 67. Parameter Tuning

Parameter awal bukan nilai mutlak.

Mahasiswa harus melakukan tuning.

Contoh:

| Parameter | Awal |
|---|---:|
| Enemy speed | 3.5 |
| View distance | 12 |
| View angle | 120 |
| Attack range | 2 |
| Attack cooldown | 1 |
| Player health | 100 |
| Enemy health | 50 |
| Player damage | 25 |
| Min enemies | 2 |
| Max enemies | 8 |
| Min spawn interval | 1.5 |
| Max spawn interval | 6 |
| Initial intensity | 0.3 |

Tujuan tuning adalah menemukan gameplay yang:

```text
tidak terlalu mudah
dan
tidak terlalu sulit
```

---

# 68. Evaluasi Correctness

Pertanyaan:

```text
Apakah AI bekerja sesuai spesifikasi?
```

Checklist:

```text
[ ] Enemy patrol
[ ] Enemy mendeteksi player
[ ] Enemy chase
[ ] Enemy attack
[ ] Enemy tidak melihat melalui wall
[ ] NavMesh bekerja
[ ] Enemy dapat mati
[ ] Kill tercatat
[ ] Director membaca metrics
[ ] Director mengubah intensity
[ ] Spawner mengikuti intensity
```

---

# 69. Evaluasi Robustness

Uji:

```text
Player berada di sudut arena
Player bersembunyi
Banyak enemy aktif
Enemy spawn dari berbagai titik
Player mati
Timer selesai
Obstacle berada di antara enemy dan player
```

AI harus tetap berada dalam state yang masuk akal.

---

# 70. Evaluasi Believability

Tanyakan:

```text
Apakah enemy terlihat mengetahui terlalu banyak?
```

Contoh AI lebih believable:

```text
Enemy hanya chase setelah player terlihat.
```

Contoh kurang believable:

```text
Enemy selalu mengetahui posisi player
meskipun player berada di balik dinding.
```

---

# 71. Evaluasi Fairness

Periksa:

```text
Apakah enemy spawn terlalu dekat?
Apakah player memiliki waktu bereaksi?
Apakah attack cooldown masuk akal?
Apakah pressure turun saat player kesulitan?
Apakah Director menaikkan difficulty secara bertahap?
```

---

# 72. Evaluasi Responsiveness

Catat waktu respons AI.

Contoh:

```text
Player terlihat
→ Enemy Chase

Player mendekat
→ Enemy Attack

Health player turun
→ Director menurunkan intensity
```

Director tidak perlu melakukan evaluasi setiap frame.

Pada praktikum:

```text
Evaluation Interval = 2 detik
```

cukup untuk memperlihatkan sistem adaptif tanpa membuat keputusan terlalu sering.

---

# 73. Evaluasi Explainability

Mahasiswa harus dapat menjelaskan contoh:

```text
Mengapa intensity sekarang 0.7?
```

Jawaban yang diharapkan:

```text
Health player 85%.
Kill rate 5.2 per minute.
Enemy yang aktif hanya tiga.

Karena kondisi Player Dominant terpenuhi,
AI Director meningkatkan intensity dari
0.6 menjadi 0.7.
```

Bukan:

```text
"Karena script-nya seperti itu."
```

---

# 74. Evaluasi Player Experience

Minta beberapa mahasiswa lain mencoba game.

Catat:

```text
Apakah game terlalu mudah?
Apakah game terlalu sulit?
Apakah perubahan difficulty terasa?
Apakah spawn terasa fair?
Apakah enemy terlalu cepat?
Apakah arena terlalu sempit?
```

---

# 75. Tabel Hasil Pengujian

Gunakan tabel seperti berikut:

| Test | Kondisi | Expected | Actual | Status |
|---|---|---|---|---|
| T01 | Player masuk FOV | Enemy Chase | Chase | Pass |
| T02 | Player di balik wall | Tidak terdeteksi | Tidak terdeteksi | Pass |
| T03 | Distance < attack range | Attack | Attack | Pass |
| T04 | Health < 30% | Intensity turun | 0.6 → 0.5 | Pass |
| T05 | Player dominan | Intensity naik | 0.5 → 0.6 | Pass |
| T06 | Enemy >= limit | Tidak spawn | Tidak spawn | Pass |

---

# 76. Pengujian Adaptive System

Lakukan minimal tiga sesi.

## Sesi 1 — Sengaja bermain buruk

Tujuan:

```text
Health rendah
Kill rate rendah
```

Catat:

```text
Average Intensity
Max Enemy Count
Result
```

---

## Sesi 2 — Bermain normal

Catat parameter yang sama.

---

## Sesi 3 — Bermain agresif

Usahakan kill rate tinggi.

Bandingkan.

Contoh hasil:

| Mode Bermain | Avg Intensity | Max Enemy | Hasil |
|---|---:|---:|---|
| Kesulitan | 0.32 | 4 | Survive |
| Normal | 0.51 | 5 | Survive |
| Dominan | 0.75 | 7 | Survive |

Jika nilai benar-benar berubah sesuai performa, adaptive system dapat diamati secara kuantitatif.

---

# 77. Diagram Arsitektur untuk Laporan

Gunakan diagram:

```text
                    ┌──────────────────┐
                    │      Player      │
                    └────────┬─────────┘
                             │
                             ↓
                    ┌──────────────────┐
                    │ Player Metrics   │
                    │ Health           │
                    │ Kill Rate        │
                    └────────┬─────────┘
                             │
                             ↓
                    ┌──────────────────┐
                    │   AI Director    │
                    │ Intensity Model  │
                    └────────┬─────────┘
                             │
               ┌─────────────┴────────────┐
               ↓                          ↓
      ┌─────────────────┐       ┌─────────────────┐
      │ Target Enemy    │       │ Spawn Interval  │
      │ Count           │       │                 │
      └────────┬────────┘       └────────┬────────┘
               └─────────────┬────────────┘
                             ↓
                    ┌──────────────────┐
                    │  Enemy Spawner   │
                    └────────┬─────────┘
                             ↓
                    ┌──────────────────┐
                    │     Enemy AI     │
                    │ Patrol           │
                    │ Chase            │
                    │ Attack           │
                    └────────┬─────────┘
                             ↓
                    ┌──────────────────┐
                    │    Gameplay      │
                    └──────────────────┘
```

---

# 78. Diagram Enemy AI

```text
              ┌─────────────┐
              │   PATROL    │
              └──────┬──────┘
                     │
                player seen
                     │
                     ↓
              ┌─────────────┐
        ┌────→│    CHASE    │←────┐
        │     └──────┬──────┘     │
        │            │            │
 player │       attack range      │ target
 lost   │            │            │ too far
        │            ↓            │
        │     ┌─────────────┐     │
        └─────│   ATTACK    │─────┘
              └─────────────┘
```

---

# 79. AI Debug Requirement

Saat F1 ditekan minimal tampilkan:

```text
GLOBAL AI
-------------------------
Health
Kill Count
Kill Rate
Enemy Count
Intensity
Director Decision
```

dan untuk enemy:

```text
PATROL
CHASE
ATTACK
```

Jika dikembangkan menjadi final project, tambahkan:

```text
Target
Path
FOV
Last Known Position
Utility Score
Difficulty Multiplier
PCG Seed
```

sesuai teknik AI yang digunakan kelompok.

---

# 80. Optimasi untuk Final Project

Jika jumlah enemy semakin banyak, hindari perhitungan mahal setiap frame.

Contoh yang dapat dikembangkan:

```text
Perception interval
Object pooling
Path update interval
Cached component references
Maximum active agent
Spatial filtering
```

Jangan melakukan optimasi kompleks sebelum terdapat masalah yang dapat diukur.

Prioritas:

```text
Correctness
→ Stability
→ Profiling
→ Optimization
```

---

# 81. Object Pooling sebagai Pengembangan

Pada contoh dasar digunakan:

```csharp
Instantiate()
Destroy()
```

karena lebih mudah dipahami.

Pada final project dengan spawn enemy sering, mahasiswa dapat mengubah sistem menjadi:

```text
Object Pool

Get Enemy
   ↓
Activate
   ↓
Enemy mati
   ↓
Reset
   ↓
Return to Pool
```

Sehingga GameObject dapat digunakan kembali.

---

# 82. Rekomendasi Polishing

Setelah AI stabil, mahasiswa dapat menambahkan:

```text
Character models
Animations
Particle effects
Hit effects
Sound effects
Background music
Health bar
Crosshair
Objective UI
Environment assets
Lighting
Post-processing
```

Tetapi jangan mendahulukan polish jika AI utama belum berjalan.

Urutan prioritas:

```text
1. Playable
2. AI working
3. AI integration
4. Debugging
5. Evaluation
6. Polish
```

---

# 83. Pengembangan ke Final Project

Praktikum ini dapat dijadikan kerangka final project.

Contohnya:

## Stealth Infiltration

Ganti arena combat menjadi:

```text
Guard Patrol
FOV
Memory
Search
Shared Alert
AI Director Alarm Level
```

---

## Tactical Shooter

Tambahkan:

```text
Cover
Flanking
Utility AI
Squad roles
AI Director
```

---

## Procedural Dungeon

Tambahkan:

```text
PCG
Seed
Dungeon validation
Adaptive spawning
Adaptive loot
Enemy AI
```

---

## Robot Arena

Tambahkan:

```text
Utility AI
Take Cover
Attack
Flee
Player Modeling
Adaptive Difficulty
AI Director
```

---

# 84. Minimum Requirement untuk Tugas Praktikum

Mahasiswa harus mengumpulkan project yang memiliki:

```text
[ ] Player playable
[ ] Arena navigable
[ ] Minimal 3 enemy aktif
[ ] Perception
[ ] FSM
[ ] NavMesh
[ ] Combat
[ ] EnemySpawner
[ ] AI Director
[ ] Adaptive intensity
[ ] Win condition
[ ] Lose condition
[ ] AI Debug Mode
[ ] Minimal 5 skenario pengujian
[ ] Dokumentasi arsitektur AI
```

---

# 85. Requirement Tambahan yang Direkomendasikan

Untuk nilai lebih tinggi:

```text
[ ] Health pickup adaptif
[ ] Enemy type berbeda
[ ] Tactical positioning
[ ] Player model
[ ] Object pooling
[ ] World-space AI state
[ ] Path visualization
[ ] Better UI
[ ] Animation
[ ] Audio/VFX
```

---

# 86. Tugas Analisis

Mahasiswa harus menjawab:

1. Apa perbedaan Enemy AI dan AI Director pada project?
2. Apa input AI Director?
3. Apa output AI Director?
4. Mengapa player health dinormalisasi?
5. Mengapa intensity dibatasi 0–1?
6. Apa fungsi evaluation interval?
7. Mengapa spawn point diberi minimum distance?
8. Apa fungsi hard enemy limit?
9. Bagaimana sistem menjaga fairness?
10. Bagaimana membuktikan adaptive system benar-benar bekerja?
11. Apa fungsi AI Debug Mode?
12. Apa kelemahan AI Director berbasis rule ini?
13. Apa yang akan terjadi jika threshold terlalu sensitif?
14. Parameter apa yang paling memengaruhi gameplay?
15. Bagaimana sistem ini dikembangkan untuk final project?

---

# 87. Tantangan Pengembangan 1 — Adaptive Health Pickup

Tambahkan:

```text
Health < 25%
        ↓
Director mengecek recovery cooldown
        ↓
Spawn health pickup
```

Namun beri cooldown agar health item tidak muncul terus-menerus.

---

# 88. Tantangan Pengembangan 2 — Enemy Type

Tambahkan:

```text
MeleeEnemy
FastEnemy
TankEnemy
```

Director menentukan komposisi berdasarkan intensity.

Contoh:

```text
Low:
80% melee
20% fast

Medium:
60% melee
30% fast
10% tank

High:
40% melee
40% fast
20% tank
```

Ini membuat intensity memengaruhi **jenis encounter**, bukan hanya jumlah enemy.

---

# 89. Tantangan Pengembangan 3 — Tension Curve

Tambahkan konsep target tension:

```text
0–30 sec  → Low
30–60 sec → Medium
60–90 sec → High
90–110    → Recovery
110–150   → High
150–180   → Final Peak
```

Lalu adaptive system mengombinasikan:

```text
Target Tension
+
Player Performance
```

Ini lebih dekat dengan konsep AI Director yang mengatur pacing.

---

# 90. Tantangan Pengembangan 4 — Last Known Position

Enemy saat kehilangan player jangan langsung Patrol.

Tambahkan:

```text
PATROL
CHASE
ATTACK
SEARCH
```

Alur:

```text
Player terlihat
→ simpan lastKnownPosition

Player hilang
→ Search lastKnownPosition

Tidak menemukan player
→ Patrol
```

Ini mengintegrasikan materi perception + memory.

---

# 91. Tantangan Pengembangan 5 — Tactical Enemy

Tambahkan state:

```text
TakeCover
Flank
Retreat
```

Gunakan:

```text
Health
distance
cover availability
director intensity
```

untuk menentukan aksi.

Dapat menggunakan FSM, Behavior Tree, atau Utility AI sesuai final project.

---

# 92. Tantangan Pengembangan 6 — Player Modeling

Tambahkan statistik:

```text
Aggression
Accuracy
Kill Rate
Damage Taken
Movement Activity
```

Kemudian klasifikasikan:

```text
Aggressive
Defensive
Struggling
Balanced
```

AI Director dapat memilih encounter berdasarkan profile.

---

# 93. Rubrik Penilaian Praktikum

| Komponen | Bobot |
|---|---:|
| Scene dan gameplay playable | 10% |
| Enemy Perception | 10% |
| FSM Enemy AI | 15% |
| Navigation/NavMesh | 10% |
| EnemySpawner | 10% |
| AI Director | 20% |
| Adaptive behavior | 10% |
| AI Debug Mode | 10% |
| Pengujian/evaluasi | 5% |
| **Total** | **100%** |

---

# 94. Kriteria Penilaian AI Director

### Sangat Baik

```text
Director membaca beberapa metrics,
adaptasi terlihat,
perubahan gradual,
fair,
debug jelas,
dan berdampak pada gameplay.
```

### Baik

```text
Director bekerja dan adaptive spawning terlihat,
tetapi evaluasi atau tuning masih sederhana.
```

### Cukup

```text
Director hanya mengubah satu parameter
dan pengaruh gameplay kurang jelas.
```

### Kurang

```text
Spawner sebenarnya statis
atau keputusan Director tidak dapat dibuktikan.
```

---

# 95. Checklist Sebelum Praktikum Dinyatakan Selesai

## Player

```text
[ ] Bisa bergerak
[ ] Bisa berputar
[ ] Bisa menyerang
[ ] Memiliki health
[ ] Bisa mati
```

## Enemy

```text
[ ] Patrol
[ ] Detect player
[ ] Chase
[ ] Attack
[ ] Bisa menerima damage
[ ] Bisa mati
```

## Navigation

```text
[ ] NavMesh baked
[ ] Enemy tidak menembus wall
[ ] Enemy dapat mencapai player
```

## Director

```text
[ ] Membaca player health
[ ] Membaca kill rate
[ ] Membaca enemy count
[ ] Mengubah intensity
[ ] Mengubah target enemy
[ ] Mengubah spawn interval
```

## Game

```text
[ ] Timer berjalan
[ ] Kill count berjalan
[ ] Win condition
[ ] Lose condition
[ ] Restart
```

## Debug

```text
[ ] F1 aktif/nonaktif
[ ] Intensity terlihat
[ ] Director decision terlihat
[ ] Enemy state terlihat
[ ] Log perubahan state tersedia
```

---

# 96. Kesalahan Umum

## Kesalahan 1

```text
Enemy tidak bergerak.
```

Penyebab umum:

```text
NavMesh belum bake.
```

---

## Kesalahan 2

```text
Player tidak ditemukan.
```

Periksa:

```text
Tag Player.
```

---

## Kesalahan 3

```text
Enemy melihat melalui wall.
```

Periksa:

```text
Obstacle Layer
Obstacle Mask
```

---

## Kesalahan 4

```text
Director selalu intensity tinggi.
```

Periksa threshold dan `intensityChangeSpeed`.

---

## Kesalahan 5

```text
Enemy spawn terus.
```

Periksa:

```text
targetEnemyCount
hardEnemyLimit
spawnTimer
```

---

## Kesalahan 6

```text
Game terlalu sulit.
```

Jangan langsung mengubah banyak parameter.

Ubah satu per satu:

```text
Enemy speed
→ spawn interval
→ enemy count
→ attack damage
```

kemudian uji kembali.

---

# 97. Prinsip Penting Praktikum

## Prinsip 1

```text
AI yang kompleks tidak selalu lebih baik.
```

AI sederhana tetapi terintegrasi dengan gameplay dapat menghasilkan sistem yang lebih baik daripada algoritma kompleks yang tidak selesai.

---

## Prinsip 2

```text
AI harus observable.
```

Mahasiswa harus dapat melihat:

```text
State
Input
Decision
Output
```

---

## Prinsip 3

```text
AI harus explainable.
```

Mahasiswa harus dapat menjawab:

```text
Mengapa AI melakukan tindakan tersebut?
```

---

## Prinsip 4

```text
Adaptation harus memiliki tujuan.
```

Bukan:

```text
Player bagus → hukum player.
```

Tetapi:

```text
Player dominan
→ tingkatkan challenge secara wajar
→ pertahankan engagement.
```

---

## Prinsip 5

```text
Constraint tetap diperlukan.
```

Adaptive AI harus memiliki:

```text
Minimum
Maximum
Cooldown
Threshold
Hard Limit
Fallback
```

---

# 98. Rekomendasi Implementasi Terbaik

Untuk Praktikum 15, implementasi yang paling direkomendasikan adalah:

```text
3D Survival Arena
+
Enemy FSM
+
Perception
+
NavMesh
+
AI Director
+
Adaptive Enemy Spawning
+
AI Debug Mode
```

### Alasannya

**Pertama — scope realistis.**

Arena kecil dapat selesai dalam satu sesi pengembangan dibandingkan membuat dungeon besar atau stealth game lengkap.

**Kedua — seluruh AI terlihat.**

Dosen dan mahasiswa dapat melihat:

```text
Patrol
Chase
Attack
Spawning
Intensity
Adaptive decision
```

secara langsung.

**Ketiga — mudah diuji.**

Kondisi player dapat dimanipulasi untuk menunjukkan keputusan AI Director.

**Keempat — mudah dikembangkan.**

Struktur project dapat dikembangkan menjadi:

```text
Utility AI
Behavior Tree
PCG
DDA
Player Modeling
ML-Agents
Tactical AI
```

**Kelima — sangat sesuai untuk persiapan final project.**

Praktikum mengajarkan bahwa sistem final bukan sekadar kumpulan script, melainkan:

```text
Input
↓
AI Decision
↓
Gameplay Action
↓
Feedback
↓
Evaluation
```

---

# 99. Scope yang Direkomendasikan

Untuk praktikum:

```text
1 arena
1 player
1 enemy prefab
3 enemy states
4–6 spawn points
1 AI Director
1 adaptive parameter model
1 debug mode
1 win condition
1 lose condition
```

Jangan menambah terlalu banyak fitur sebelum sistem tersebut stabil.

---

# 100. Pengembangan Menuju UAS

Setelah praktikum ini berhasil, kelompok dapat menggunakan kerangka yang sama untuk final project.

Target akhir:

```text
Playable Vertical Slice
        +
AI Integrated
        +
Advanced Feature
        +
Debug Mode
        +
Evaluation
        +
Polish
```

Contoh final architecture:

```text
                    GAME
                      │
          ┌───────────┴───────────┐
          ↓                       ↓
       Player                  AI World
                                  │
                 ┌────────────────┼───────────────┐
                 ↓                ↓               ↓
             Enemy AI        AI Director       PCG/DDA
                 │                │               │
           ┌─────┼─────┐          │               │
           ↓     ↓     ↓          ↓               ↓
      Perception FSM NavMesh   Intensity       Content
           │     │     │          │               │
           └─────┴─────┴──────────┴───────────────┘
                              │
                              ↓
                         GAMEPLAY
                              │
                              ↓
                         EVALUATION
```

---

# 101. Kesimpulan

Praktikum 15 menunjukkan perubahan cara berpikir dari:

```text
"Membuat script AI"
```

menjadi:

```text
"Membuat sistem Game AI."
```

Sistem yang dibuat mengintegrasikan:

```text
Perception
+
Decision Making
+
Navigation
+
Combat
+
Performance Tracking
+
Adaptive System
+
AI Director
+
Debugging
+
Evaluation
```

Enemy AI menangani keputusan pada tingkat individu, sedangkan AI Director menangani kondisi gameplay secara global.

Adaptive system menggunakan feedback dari performa player untuk menyesuaikan intensitas permainan.

AI Debug Mode memungkinkan mahasiswa melihat dan menjelaskan kondisi internal AI.

Dengan demikian project tidak hanya:

```text
AI berjalan
```

tetapi dapat menjawab:

```text
Apa yang AI lihat?
Apa yang AI putuskan?
Mengapa keputusan itu dibuat?
Apa pengaruhnya terhadap gameplay?
Apakah keputusan tersebut fair?
Bagaimana sistem tersebut diuji?
```

---

# 102. Rekomendasi Akhir

## Nama Project

```text
GC15_AdaptiveArenaDirector
```

## Judul Praktikum

```text
Adaptive Arena Director:
Integrasi Advanced Game AI untuk Final Project
```

## Teknik Utama

```text
Enemy FSM
Perception
NavMesh Navigation
Adaptive Enemy Spawning
AI Director
AI Debug Mode
```

## Fitur Advanced Utama

```text
AI Director berbasis Player Performance
```

## Alasan Pemilihan

Kombinasi tersebut memberikan keseimbangan terbaik antara:

```text
kompleksitas implementasi
+
cakupan materi
+
keterlihatan AI saat demo
+
kemudahan debugging
+
kemudahan evaluasi
+
potensi pengembangan Final Project
```

Pesan utama praktikum:

> **Game AI yang baik bukan AI dengan algoritma paling banyak, melainkan AI yang terintegrasi dengan gameplay, dapat diamati, dapat dijelaskan, dapat diuji, dan memberikan pengalaman bermain yang lebih baik.**