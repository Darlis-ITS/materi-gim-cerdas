# MODUL PRAKTIKUM 11  
# DYNAMIC DIFFICULTY ADJUSTMENT (DDA) DI UNITY 6

## Adaptive Enemy Difficulty — Arena Survival

**Mata Kuliah:** Game Cerdas  
**Program Studi:** S1 Teknik Informatika  
**Semester:** 7  
**Engine:** Unity 6  
**Bahasa Pemrograman:** C#  
**Topik:** Dynamic Difficulty Adjustment  
**Nama Project Unity yang direkomendasikan:**

```text
GC11_AdaptiveArenaDDA
```

Alternatif:

```text
AdaptiveEnemyArena
DynamicDifficultyArena
SmartDifficultySurvival
DDAEnemyChallenge
AdaptiveCombatArena
```

### Rekomendasi utama

```text
GC11_AdaptiveArenaDDA
```

Nama ini direkomendasikan karena:

- `GC11` menunjukkan Game Cerdas Praktikum/Pertemuan 11.
- `AdaptiveArena` menggambarkan jenis gameplay.
- `DDA` langsung menunjukkan teknologi utama yang dipelajari.
- mudah dibedakan dari project praktikum sebelumnya.

---

# 1. Tujuan Praktikum

Setelah menyelesaikan praktikum ini, mahasiswa diharapkan mampu:

1. Memahami prinsip **Dynamic Difficulty Adjustment (DDA)**.
2. Mengukur performa player berdasarkan data gameplay.
3. Melakukan normalisasi beberapa metrik performa.
4. Menggabungkan beberapa metrik menjadi `skillScore`.
5. Membuat `DifficultyManager`.
6. Mengubah `difficultyMultiplier` berdasarkan performa player.
7. Membatasi tingkat difficulty minimum dan maksimum.
8. Menggunakan evaluation window untuk mencegah perubahan difficulty terlalu cepat.
9. Mengadaptasi atribut enemy berdasarkan difficulty.
10. Mengadaptasi interval spawn musuh.
11. Membuat Debug UI untuk mengamati proses DDA.
12. Menguji apakah sistem DDA bekerja secara stabil.
13. Menjelaskan perbedaan antara difficulty statis dan difficulty adaptif.

---

# 2. Hasil Akhir Praktikum

Mahasiswa akan membuat game sederhana berbentuk:

# Adaptive Arena Survival

Player berada di dalam arena dan menghadapi enemy yang muncul secara berkala.

Player dapat:

- bergerak menggunakan WASD atau Arrow Key,
- mengarahkan karakter menggunakan mouse,
- menembak enemy,
- menerima damage,
- membunuh enemy.

Enemy dapat:

- mengejar player,
- menyerang ketika cukup dekat,
- menerima damage,
- mati,
- muncul secara berkala dari beberapa spawn point.

Sistem DDA kemudian akan:

```text
mengamati performa player
            ↓
menghitung skill score
            ↓
menentukan kondisi player
            ↓
mengubah difficulty multiplier
            ↓
mengubah karakteristik enemy/spawner
```

Contohnya:

```text
Player bermain sangat baik
        ↓
Skill Score tinggi
        ↓
Difficulty meningkat
        ↓
Enemy lebih kuat
Enemy muncul lebih cepat
```

Sedangkan:

```text
Player kesulitan
        ↓
Skill Score rendah
        ↓
Difficulty berkurang
        ↓
Enemy sedikit lebih lemah
Enemy muncul lebih lambat
```

---

# 3. Konsep Dasar Dynamic Difficulty Adjustment

## 3.1 Apa itu DDA?

**Dynamic Difficulty Adjustment** adalah teknik yang membuat game mengubah tingkat kesulitannya secara otomatis berdasarkan performa atau keadaan player.

Pada difficulty tradisional:

```text
Easy
Normal
Hard
```

player biasanya memilih difficulty sebelum permainan dimulai.

Pada DDA:

```text
Difficulty dapat berubah ketika game sedang dimainkan.
```

Contoh:

```text
Player terlalu mudah mengalahkan enemy
                ↓
Game meningkatkan tantangan
```

atau:

```text
Player berkali-kali menerima banyak damage
                ↓
Game mengurangi tantangan
```

---

# 4. Static Difficulty vs Dynamic Difficulty

## Static Difficulty

Contoh:

```text
Easy
Enemy HP = 70

Normal
Enemy HP = 100

Hard
Enemy HP = 150
```

Nilai tersebut relatif tetap selama permainan.

## Dynamic Difficulty

Contoh:

```text
Enemy HP =
baseHealth × difficultyMultiplier
```

Misalnya:

```text
difficultyMultiplier = 0.75
Enemy HP = 75
```

atau:

```text
difficultyMultiplier = 1.25
Enemy HP = 125
```

Difficulty berubah mengikuti performa player.

---

# 5. Konsep Sistem yang Akan Dibuat

Arsitektur praktikum:

```text
Player
  │
  │ gameplay metrics
  ↓
PlayerPerformanceTracker
  │
  │ Skill Score
  ↓
DifficultyManager
  │
  ├───────────────→ EnemySpawner
  │                    │
  │                    └── Spawn Interval
  │
  └───────────────→ Enemy
                       ├── Health
                       ├── Damage
                       └── Speed
```

Debug UI membaca:

```text
PlayerPerformanceTracker
DifficultyManager
EnemySpawner
PlayerHealth
```

dan menampilkannya ke layar.

---

# 6. Rekomendasi Desain DDA untuk Praktikum

Pada materi terdapat banyak parameter yang dapat diadaptasi:

- enemy health,
- enemy damage,
- movement speed,
- attack cooldown,
- detection radius,
- spawn interval,
- jumlah enemy,
- health drop,
- loot,
- dan sebagainya.

Namun untuk praktikum pertama tentang DDA, **jangan mengubah semua parameter sekaligus**.

## Pilihan terbaik

Gunakan tiga parameter utama:

```text
1. Enemy Health
2. Enemy Damage
3. Enemy Spawn Interval
```

Enemy speed dapat ikut berubah tetapi dengan pengaruh yang lebih kecil.

Alasannya:

- efek DDA mudah diamati,
- implementasinya sederhana,
- hasil eksperimen mudah dibandingkan,
- balancing tidak terlalu kompleks.

---

# 7. Model Difficulty yang Digunakan

Gunakan difficulty kontinu:

```text
difficultyMultiplier
```

Nilai awal:

```text
1.0
```

Batas:

```text
Minimum = 0.75
Maximum = 1.50
```

Langkah perubahan:

```text
0.05
```

Contoh:

```text
1.00
1.05
1.10
1.15
1.20
...
1.50
```

atau turun:

```text
1.00
0.95
0.90
0.85
0.80
0.75
```

---

# 8. Evaluation Window

Difficulty **tidak dievaluasi setiap frame**.

Gunakan:

```text
evaluationInterval = 30 detik
```

Alurnya:

```text
30 detik gameplay
      ↓
Kumpulkan data
      ↓
Hitung Skill Score
      ↓
Evaluasi Difficulty
      ↓
Reset data window tertentu
      ↓
30 detik berikutnya
```

Ini disebut:

**Evaluation Window**

Tujuannya:

- mengurangi perubahan difficulty berlebihan,
- menghindari oscillation,
- mengurangi efek satu kejadian ekstrem,
- menghasilkan difficulty yang lebih stabil.

---

# 9. Performance Metrics

Pada praktikum ini kita menggunakan:

```text
Health
Kills
Damage Taken
Accuracy
```

## 9.1 Health Score

```text
healthScore =
currentHealth / maxHealth
```

Contoh:

```text
currentHealth = 80
maxHealth = 100

healthScore = 0.8
```

---

## 9.2 Kill Score

```text
killScore =
killsInWindow / expectedKills
```

Nilai kemudian dibatasi:

```text
0 sampai 1
```

Misalnya target:

```text
expectedKills = 5
```

Player membunuh 4 enemy:

```text
killScore = 4 / 5
          = 0.8
```

---

## 9.3 Damage Score

Semakin banyak damage diterima, semakin kecil score.

```text
damageScore =
1 - damageTaken / maxExpectedDamage
```

Nilai dibatasi antara:

```text
0 sampai 1
```

---

## 9.4 Accuracy Score

```text
accuracyScore =
hitCount / shotCount
```

Contoh:

```text
10 tembakan
7 mengenai enemy

accuracyScore = 0.7
```

---

# 10. Skill Score

Semua metrik digabungkan.

Pada praktikum ini kita gunakan:

```text
Skill Score =
0.35 × healthScore
+
0.30 × killScore
+
0.20 × damageScore
+
0.15 × accuracyScore
```

Total bobot:

```text
0.35 + 0.30 + 0.20 + 0.15 = 1.0
```

Dengan demikian:

```text
0.0 <= SkillScore <= 1.0
```

Interpretasi:

| Skill Score | Kondisi |
|---:|---|
| < 0.35 | Player kesulitan |
| 0.35–0.75 | Kondisi relatif seimbang |
| > 0.75 | Player dominan |

---

# 11. Mengapa Accuracy Digunakan?

Materi kuliah juga memberikan contoh `survivalScore`.

Untuk praktikum ini, accuracy digunakan sebagai pengganti salah satu komponen temporal karena evaluation dilakukan secara periodik setiap 30 detik.

Accuracy memberi variasi data yang lebih mudah diamati ketika mahasiswa sedang bermain.

Mahasiswa tetap dapat melakukan eksperimen dengan mengganti accuracy menjadi:

```text
survivalScore
```

pada bagian tugas pengembangan.

---

# 12. Rule DDA

Gunakan aturan:

```text
Jika skillScore > 0.75
    difficulty += 0.05

Jika skillScore < 0.35
    difficulty -= 0.05

Selain itu
    difficulty tetap
```

Kemudian:

```text
difficulty =
Clamp(difficulty, 0.75, 1.50)
```

Contoh:

```text
Skill Score = 0.82

Difficulty:
1.00 → 1.05
```

30 detik kemudian:

```text
Skill Score = 0.79

Difficulty:
1.05 → 1.10
```

---

# 13. Struktur Folder Project

Buat folder:

```text
Assets/
│
├── Materials/
│
├── Prefabs/
│   ├── Player.prefab
│   └── Enemy.prefab
│
├── Scenes/
│   └── MainArena.unity
│
├── Scripts/
│   ├── Player/
│   │   ├── PlayerController.cs
│   │   ├── PlayerHealth.cs
│   │   └── PlayerShooter.cs
│   │
│   ├── Enemy/
│   │   ├── EnemyAI.cs
│   │   └── EnemyHealth.cs
│   │
│   ├── DDA/
│   │   ├── PlayerPerformanceTracker.cs
│   │   └── DifficultyManager.cs
│   │
│   ├── Gameplay/
│   │   └── EnemySpawner.cs
│   │
│   └── UI/
│       └── DDADebugUI.cs
│
└── UI/
```

---

# 14. Istilah Teknis Unity

Sebelum implementasi, pahami beberapa istilah berikut.

## GameObject

Objek dasar di dalam Scene Unity.

Contoh:

```text
Player
Enemy
Main Camera
Directional Light
GameManager
```

GameObject sendiri hanyalah container.

Fungsionalitasnya berasal dari **Component**.

---

## Component

Bagian yang memberikan kemampuan tertentu kepada GameObject.

Contoh:

```text
Transform
CharacterController
Collider
MeshRenderer
Script
```

---

## Transform

Setiap GameObject memiliki Transform.

Transform menyimpan:

```text
Position
Rotation
Scale
```

---

## Scene

Scene merupakan sebuah level atau lingkungan permainan.

Dalam praktikum:

```text
MainArena.unity
```

berisi seluruh objek arena.

---

## Prefab

Prefab adalah template GameObject yang dapat digunakan berulang kali.

Enemy dibuat sebagai Prefab karena:

```text
EnemySpawner
```

akan membuat banyak enemy selama permainan.

---

## Inspector

Panel Unity untuk:

- melihat Component,
- mengatur parameter,
- memasukkan reference,
- mengubah nilai public atau `[SerializeField]`.

---

## SerializeField

Contoh:

```csharp
[SerializeField] private float moveSpeed = 5f;
```

Variabel tetap `private`, tetapi nilainya muncul di Inspector.

Keuntungan:

- enkapsulasi tetap terjaga,
- designer dapat mengatur nilai tanpa mengubah kode.

---

## CharacterController

Component Unity untuk menggerakkan karakter tanpa menggunakan simulasi fisika Rigidbody penuh.

Pada praktikum:

```text
Player
```

menggunakan `CharacterController`.

---

## Collider

Collider menentukan area tabrakan.

Contoh:

```text
BoxCollider
CapsuleCollider
SphereCollider
```

---

## Coroutine

Coroutine memungkinkan proses berjalan bertahap berdasarkan waktu.

Contoh:

```csharp
IEnumerator SpawnRoutine()
```

dapat melakukan:

```text
spawn
wait
spawn
wait
...
```

---

## Time.deltaTime

Waktu antar-frame.

Digunakan agar movement tidak tergantung frame rate.

```csharp
position += direction * speed * Time.deltaTime;
```

---

## Mathf.Clamp

Membatasi nilai.

Contoh:

```csharp
difficultyMultiplier =
    Mathf.Clamp(
        difficultyMultiplier,
        0.75f,
        1.5f
    );
```

---

## Mathf.Clamp01

Membatasi nilai antara:

```text
0 dan 1
```

Sangat berguna untuk normalisasi.

---

## Instantiate

Membuat GameObject baru berdasarkan Prefab.

Contoh:

```csharp
Instantiate(enemyPrefab, position, rotation);
```

---

## Destroy

Menghapus GameObject.

```csharp
Destroy(gameObject);
```

---

# 15. Membuat Project

Buka Unity Hub.

Pilih:

```text
New Project
```

Gunakan template:

```text
Universal 3D
```

atau:

```text
3D Core
```

Untuk praktikum ini keduanya dapat digunakan.

Nama project:

```text
GC11_AdaptiveArenaDDA
```

Klik:

```text
Create Project
```

---

# 16. Pengaturan Input

Praktikum menggunakan input sederhana:

```text
Input.GetAxisRaw()
Input.GetMouseButtonDown()
```

Jika project menggunakan Input System baru, buka:

```text
Edit
→ Project Settings
→ Player
→ Active Input Handling
```

pilih:

```text
Both
```

Dengan demikian input klasik tetap dapat digunakan.

---

# 17. Membuat Arena

Buat:

```text
GameObject
→ 3D Object
→ Plane
```

Rename:

```text
ArenaFloor
```

Scale misalnya:

```text
X = 3
Y = 1
Z = 3
```

Tambahkan beberapa Cube sebagai dinding jika diperlukan.

Contoh hierarchy:

```text
MainArena
├── ArenaFloor
├── WallNorth
├── WallSouth
├── WallEast
└── WallWest
```

---

# 18. Membuat Player

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

Posisi:

```text
X = 0
Y = 1
Z = 0
```

Tambahkan:

```text
CharacterController
```

Hapus `CapsuleCollider` bawaan jika menggunakan CharacterController agar tidak ada collider ganda.

---

# 19. Script PlayerController.cs

Buat:

```text
Assets/Scripts/Player/PlayerController.cs
```

Isi:

```csharp
using UnityEngine;

[RequireComponent(typeof(CharacterController))]
public class PlayerController : MonoBehaviour
{
    [SerializeField] private float moveSpeed = 6f;

    private CharacterController controller;

    private void Awake()
    {
        controller = GetComponent<CharacterController>();
    }

    private void Update()
    {
        Move();
    }

    private void Move()
    {
        float horizontal = Input.GetAxisRaw("Horizontal");
        float vertical = Input.GetAxisRaw("Vertical");

        Vector3 direction =
            new Vector3(horizontal, 0f, vertical).normalized;

        controller.Move(
            direction * moveSpeed * Time.deltaTime
        );
    }
}
```

Pasang ke:

```text
Player
```

---

# 20. Penjelasan PlayerController

```csharp
[RequireComponent(typeof(CharacterController))]
```

memastikan GameObject memiliki `CharacterController`.

---

```csharp
Input.GetAxisRaw("Horizontal")
```

membaca:

```text
A / D
Left Arrow / Right Arrow
```

---

```csharp
Input.GetAxisRaw("Vertical")
```

membaca:

```text
W / S
Up Arrow / Down Arrow
```

---

```csharp
.normalized
```

mencegah movement diagonal menjadi lebih cepat.

---

# 21. Membuat PlayerHealth

Buat:

```text
PlayerHealth.cs
```

```csharp
using UnityEngine;

public class PlayerHealth : MonoBehaviour
{
    [SerializeField] private float maxHealth = 100f;

    private float currentHealth;

    public float CurrentHealth => currentHealth;
    public float MaxHealth => maxHealth;

    public bool IsDead => currentHealth <= 0f;

    private void Awake()
    {
        currentHealth = maxHealth;
    }

    public void TakeDamage(float damage)
    {
        if (IsDead)
            return;

        currentHealth -= damage;
        currentHealth =
            Mathf.Clamp(currentHealth, 0f, maxHealth);

        PlayerPerformanceTracker tracker =
            FindFirstObjectByType<PlayerPerformanceTracker>();

        if (tracker != null)
        {
            tracker.RegisterDamageTaken(damage);
        }

        if (currentHealth <= 0f)
        {
            Die();
        }
    }

    public void Heal(float amount)
    {
        currentHealth += amount;

        currentHealth =
            Mathf.Clamp(
                currentHealth,
                0f,
                maxHealth
            );
    }

    private void Die()
    {
        Debug.Log("Player died.");

        // Untuk praktikum sederhana:
        // isi kembali HP agar pengujian DDA dapat dilanjutkan.
        currentHealth = maxHealth;
    }
}
```

Pasang ke:

```text
Player
```

---

# 22. Catatan tentang FindFirstObjectByType

Kode:

```csharp
FindFirstObjectByType<PlayerPerformanceTracker>()
```

mencari object tertentu di Scene.

Untuk project praktikum kecil, pendekatan ini cukup sederhana.

Untuk game produksi besar lebih baik menggunakan:

- reference melalui Inspector,
- event,
- dependency injection,
- GameManager,
- atau sistem komunikasi lain.

---

# 23. Membuat PlayerPerformanceTracker

Buat:

```text
PlayerPerformanceTracker.cs
```

Script ini merupakan salah satu komponen paling penting.

Tugasnya:

```text
mencatat kills
mencatat damage
mencatat jumlah tembakan
mencatat hit
menghitung skill score
```

Gunakan:

```csharp
using UnityEngine;

public class PlayerPerformanceTracker : MonoBehaviour
{
    [Header("References")]
    [SerializeField] private PlayerHealth playerHealth;

    [Header("Normalization")]
    [SerializeField] private float expectedKills = 5f;
    [SerializeField] private float maxExpectedDamage = 60f;

    private int killsInWindow;
    private float damageTakenInWindow;

    private int shotsInWindow;
    private int hitsInWindow;

    private float lastSkillScore = 0.5f;

    public int KillsInWindow => killsInWindow;
    public float DamageTakenInWindow => damageTakenInWindow;

    public int ShotsInWindow => shotsInWindow;
    public int HitsInWindow => hitsInWindow;

    public float LastSkillScore => lastSkillScore;

    public void RegisterKill()
    {
        killsInWindow++;
    }

    public void RegisterDamageTaken(float damage)
    {
        damageTakenInWindow += damage;
    }

    public void RegisterShot()
    {
        shotsInWindow++;
    }

    public void RegisterHit()
    {
        hitsInWindow++;
    }

    public float CalculateSkillScore()
    {
        if (playerHealth == null)
            return 0.5f;

        float healthScore =
            playerHealth.CurrentHealth /
            playerHealth.MaxHealth;

        float killScore =
            Mathf.Clamp01(
                killsInWindow / expectedKills
            );

        float damageScore =
            1f -
            Mathf.Clamp01(
                damageTakenInWindow /
                maxExpectedDamage
            );

        float accuracyScore = 0.5f;

        if (shotsInWindow > 0)
        {
            accuracyScore =
                Mathf.Clamp01(
                    (float)hitsInWindow /
                    shotsInWindow
                );
        }

        lastSkillScore =
            0.35f * healthScore +
            0.30f * killScore +
            0.20f * damageScore +
            0.15f * accuracyScore;

        return Mathf.Clamp01(lastSkillScore);
    }

    public void ResetWindow()
    {
        killsInWindow = 0;
        damageTakenInWindow = 0f;

        shotsInWindow = 0;
        hitsInWindow = 0;
    }
}
```

---

# 24. Mengatur PlayerPerformanceTracker

Buat Empty GameObject:

```text
GameObject
→ Create Empty
```

Rename:

```text
PlayerPerformanceTracker
```

Tambahkan script:

```text
PlayerPerformanceTracker
```

Pada Inspector:

```text
Player Health
```

drag object:

```text
Player
```

ke field tersebut.

Atur:

```text
Expected Kills = 5
Max Expected Damage = 60
```

---

# 25. Membuat PlayerShooter

Buat child Player:

```text
Player
└── ShootOrigin
```

Posisikan di depan Player.

Buat:

```text
PlayerShooter.cs
```

```csharp
using UnityEngine;

public class PlayerShooter : MonoBehaviour
{
    [SerializeField] private Transform shootOrigin;
    [SerializeField] private float weaponDamage = 35f;
    [SerializeField] private float shootingRange = 25f;

    [SerializeField]
    private PlayerPerformanceTracker performanceTracker;

    private Camera mainCamera;

    private void Awake()
    {
        mainCamera = Camera.main;
    }

    private void Update()
    {
        AimAtMouse();

        if (Input.GetMouseButtonDown(0))
        {
            Shoot();
        }
    }

    private void AimAtMouse()
    {
        if (mainCamera == null)
            return;

        Ray ray =
            mainCamera.ScreenPointToRay(
                Input.mousePosition
            );

        Plane groundPlane =
            new Plane(
                Vector3.up,
                Vector3.zero
            );

        if (groundPlane.Raycast(ray, out float distance))
        {
            Vector3 targetPoint =
                ray.GetPoint(distance);

            Vector3 direction =
                targetPoint - transform.position;

            direction.y = 0f;

            if (direction.sqrMagnitude > 0.01f)
            {
                transform.forward =
                    direction.normalized;
            }
        }
    }

    private void Shoot()
    {
        performanceTracker?.RegisterShot();

        RaycastHit hit;

        if (Physics.Raycast(
            shootOrigin.position,
            shootOrigin.forward,
            out hit,
            shootingRange))
        {
            EnemyHealth enemyHealth =
                hit.collider.GetComponentInParent<EnemyHealth>();

            if (enemyHealth != null)
            {
                enemyHealth.TakeDamage(weaponDamage);

                performanceTracker?.RegisterHit();
            }
        }

        Debug.DrawRay(
            shootOrigin.position,
            shootOrigin.forward * shootingRange,
            Color.red,
            0.3f
        );
    }
}
```

Pasang script ke:

```text
Player
```

Assign:

```text
Shoot Origin
Performance Tracker
```

melalui Inspector.

---

# 26. Camera Arena

Posisikan Main Camera misalnya:

```text
Position:
X = 0
Y = 18
Z = -10

Rotation:
X = 55
Y = 0
Z = 0
```

Pastikan seluruh arena terlihat.

---

# 27. Membuat Enemy

Buat:

```text
GameObject
→ 3D Object
→ Capsule
```

Rename:

```text
Enemy
```

Tambahkan material berbeda agar mudah dikenali.

Pastikan terdapat Collider.

---

# 28. EnemyHealth.cs

Buat:

```csharp
using UnityEngine;

public class EnemyHealth : MonoBehaviour
{
    private float maxHealth;
    private float currentHealth;

    private PlayerPerformanceTracker tracker;

    public void Initialize(
        float health,
        PlayerPerformanceTracker performanceTracker)
    {
        maxHealth = health;
        currentHealth = maxHealth;

        tracker = performanceTracker;
    }

    public void TakeDamage(float damage)
    {
        currentHealth -= damage;

        if (currentHealth <= 0f)
        {
            Die();
        }
    }

    private void Die()
    {
        if (tracker != null)
        {
            tracker.RegisterKill();
        }

        Destroy(gameObject);
    }
}
```

Pasang ke:

```text
Enemy
```

---

# 29. EnemyAI.cs

Enemy akan melakukan AI sederhana:

```text
Find Player
     ↓
Move toward Player
     ↓
Jika dekat
     ↓
Attack
```

Buat:

```csharp
using UnityEngine;

public class EnemyAI : MonoBehaviour
{
    private Transform player;
    private PlayerHealth playerHealth;

    private float moveSpeed;
    private float damage;

    [SerializeField] private float attackRange = 1.5f;
    [SerializeField] private float attackCooldown = 1.5f;

    private float nextAttackTime;

    public void Initialize(
        Transform target,
        float speed,
        float attackDamage)
    {
        player = target;

        playerHealth =
            target.GetComponent<PlayerHealth>();

        moveSpeed = speed;
        damage = attackDamage;
    }

    private void Update()
    {
        if (player == null)
            return;

        float distance =
            Vector3.Distance(
                transform.position,
                player.position
            );

        if (distance > attackRange)
        {
            MoveTowardsPlayer();
        }
        else
        {
            AttackPlayer();
        }
    }

    private void MoveTowardsPlayer()
    {
        Vector3 direction =
            player.position -
            transform.position;

        direction.y = 0f;

        if (direction.sqrMagnitude > 0.01f)
        {
            transform.forward =
                direction.normalized;

            transform.position +=
                direction.normalized *
                moveSpeed *
                Time.deltaTime;
        }
    }

    private void AttackPlayer()
    {
        if (Time.time < nextAttackTime)
            return;

        nextAttackTime =
            Time.time + attackCooldown;

        if (playerHealth != null)
        {
            playerHealth.TakeDamage(damage);
        }
    }
}
```

---

# 30. Catatan Enemy Movement

Pada praktikum ini enemy bergerak langsung menggunakan:

```csharp
transform.position
```

Tujuannya agar fokus tetap pada DDA.

Untuk pengembangan lebih lanjut dapat diganti dengan:

```text
NavMesh
NavMeshAgent
FSM
Behavior Tree
Utility AI
```

Dengan demikian materi DDA dapat dihubungkan dengan praktikum AI sebelumnya.

---

# 31. Membuat DifficultyManager

Ini merupakan **pusat DDA**.

Buat:

```text
DifficultyManager.cs
```

```csharp
using System.Collections;
using UnityEngine;

public class DifficultyManager : MonoBehaviour
{
    [Header("References")]
    [SerializeField]
    private PlayerPerformanceTracker performanceTracker;

    [Header("Difficulty")]
    [SerializeField]
    private float difficultyMultiplier = 1f;

    [SerializeField]
    private float minDifficulty = 0.75f;

    [SerializeField]
    private float maxDifficulty = 1.50f;

    [SerializeField]
    private float adjustmentStep = 0.05f;

    [Header("Skill Threshold")]
    [SerializeField]
    private float lowerThreshold = 0.35f;

    [SerializeField]
    private float upperThreshold = 0.75f;

    [Header("Evaluation")]
    [SerializeField]
    private float evaluationInterval = 30f;

    private string lastAdjustment = "Stable";

    public float DifficultyMultiplier =>
        difficultyMultiplier;

    public string LastAdjustment =>
        lastAdjustment;

    public float EvaluationInterval =>
        evaluationInterval;

    private void Start()
    {
        StartCoroutine(EvaluationRoutine());
    }

    private IEnumerator EvaluationRoutine()
    {
        while (true)
        {
            yield return new WaitForSeconds(
                evaluationInterval
            );

            EvaluateDifficulty();
        }
    }

    private void EvaluateDifficulty()
    {
        if (performanceTracker == null)
            return;

        float skillScore =
            performanceTracker.CalculateSkillScore();

        if (skillScore > upperThreshold)
        {
            difficultyMultiplier +=
                adjustmentStep;

            lastAdjustment = "Increasing";
        }
        else if (skillScore < lowerThreshold)
        {
            difficultyMultiplier -=
                adjustmentStep;

            lastAdjustment = "Decreasing";
        }
        else
        {
            lastAdjustment = "Stable";
        }

        difficultyMultiplier =
            Mathf.Clamp(
                difficultyMultiplier,
                minDifficulty,
                maxDifficulty
            );

        Debug.Log(
            $"Skill Score: {skillScore:F2} | " +
            $"Difficulty: {difficultyMultiplier:F2} | " +
            $"Adjustment: {lastAdjustment}"
        );

        performanceTracker.ResetWindow();
    }

    public float GetEnemyHealth(float baseHealth)
    {
        return baseHealth *
               difficultyMultiplier;
    }

    public float GetEnemyDamage(float baseDamage)
    {
        float damageMultiplier =
            Mathf.Lerp(
                1f,
                difficultyMultiplier,
                0.5f
            );

        return baseDamage *
               damageMultiplier;
    }

    public float GetEnemySpeed(float baseSpeed)
    {
        float speedMultiplier =
            Mathf.Lerp(
                1f,
                difficultyMultiplier,
                0.25f
            );

        return baseSpeed *
               speedMultiplier;
    }

    public float GetSpawnInterval(
        float baseInterval)
    {
        return baseInterval /
               difficultyMultiplier;
    }
}
```

---

# 32. Memahami DifficultyManager

Bagian:

```csharp
difficultyMultiplier = 1f;
```

adalah difficulty awal.

---

Batas:

```csharp
minDifficulty = 0.75f;
maxDifficulty = 1.50f;
```

mencegah sistem menghasilkan difficulty ekstrem.

---

Langkah:

```csharp
adjustmentStep = 0.05f;
```

mencegah perubahan drastis.

---

Evaluation:

```csharp
evaluationInterval = 30f;
```

membuat DDA tidak mengevaluasi setiap frame.

---

# 33. Mengapa Damage dan Speed Tidak Dikalikan Penuh?

Health menggunakan:

```csharp
baseHealth * difficultyMultiplier
```

Namun damage menggunakan pengaruh yang lebih lembut:

```csharp
Mathf.Lerp(
    1f,
    difficultyMultiplier,
    0.5f
)
```

Speed lebih lembut lagi:

```csharp
Mathf.Lerp(
    1f,
    difficultyMultiplier,
    0.25f
)
```

Ini merupakan pilihan desain praktikum agar difficulty tidak meningkat terlalu agresif.

Jika seluruh parameter langsung dikalikan `1.5`, enemy dapat sekaligus:

```text
50% lebih kuat
50% lebih sakit
50% lebih cepat
50% lebih sering muncul
```

dan peningkatan sebenarnya akan terasa jauh lebih besar daripada sekadar 50%.

---

# 34. Membuat GameManager

Buat Empty GameObject:

```text
GameManager
```

Tambahkan:

```text
DifficultyManager
```

Assign:

```text
Performance Tracker
→ PlayerPerformanceTracker
```

Atur:

```text
Difficulty Multiplier = 1.00

Min Difficulty = 0.75
Max Difficulty = 1.50

Adjustment Step = 0.05

Lower Threshold = 0.35
Upper Threshold = 0.75

Evaluation Interval = 30
```

---

# 35. Membuat EnemySpawner

Buat:

```text
EnemySpawner.cs
```

```csharp
using System.Collections;
using UnityEngine;

public class EnemySpawner : MonoBehaviour
{
    [Header("References")]
    [SerializeField]
    private GameObject enemyPrefab;

    [SerializeField]
    private Transform player;

    [SerializeField]
    private Transform[] spawnPoints;

    [SerializeField]
    private DifficultyManager difficultyManager;

    [SerializeField]
    private PlayerPerformanceTracker performanceTracker;

    [Header("Base Enemy Settings")]
    [SerializeField]
    private float baseEnemyHealth = 100f;

    [SerializeField]
    private float baseEnemyDamage = 10f;

    [SerializeField]
    private float baseEnemySpeed = 3f;

    [Header("Spawner")]
    [SerializeField]
    private float baseSpawnInterval = 4.5f;

    [SerializeField]
    private int baseMaxEnemies = 5;

    public float CurrentSpawnInterval =>
        difficultyManager != null
        ? difficultyManager.GetSpawnInterval(
            baseSpawnInterval)
        : baseSpawnInterval;

    private void Start()
    {
        StartCoroutine(SpawnRoutine());
    }

    private IEnumerator SpawnRoutine()
    {
        while (true)
        {
            float interval =
                CurrentSpawnInterval;

            yield return new WaitForSeconds(
                interval
            );

            TrySpawnEnemy();
        }
    }

    private void TrySpawnEnemy()
    {
        if (enemyPrefab == null ||
            player == null ||
            spawnPoints.Length == 0)
        {
            return;
        }

        int enemyCount =
            GameObject.FindGameObjectsWithTag(
                "Enemy"
            ).Length;

        int maxEnemies =
            Mathf.RoundToInt(
                baseMaxEnemies *
                difficultyManager
                    .DifficultyMultiplier
            );

        if (enemyCount >= maxEnemies)
            return;

        int index =
            Random.Range(
                0,
                spawnPoints.Length
            );

        Transform spawnPoint =
            spawnPoints[index];

        GameObject enemy =
            Instantiate(
                enemyPrefab,
                spawnPoint.position,
                spawnPoint.rotation
            );

        EnemyHealth health =
            enemy.GetComponent<EnemyHealth>();

        EnemyAI ai =
            enemy.GetComponent<EnemyAI>();

        float healthValue =
            difficultyManager
                .GetEnemyHealth(
                    baseEnemyHealth
                );

        float damageValue =
            difficultyManager
                .GetEnemyDamage(
                    baseEnemyDamage
                );

        float speedValue =
            difficultyManager
                .GetEnemySpeed(
                    baseEnemySpeed
                );

        health.Initialize(
            healthValue,
            performanceTracker
        );

        ai.Initialize(
            player,
            speedValue,
            damageValue
        );
    }
}
```

---

# 36. Tag Enemy

Spawner menggunakan:

```csharp
FindGameObjectsWithTag("Enemy")
```

Karena itu buat Tag:

```text
Enemy
```

Caranya:

1. pilih Enemy,
2. pada Inspector cari `Tag`,
3. pilih `Add Tag`,
4. tambahkan:

```text
Enemy
```

5. kembali ke Enemy,
6. pilih Tag:

```text
Enemy
```

---

# 37. Fungsi Tag

**Tag** digunakan untuk memberi identitas logis pada GameObject.

Contohnya:

```text
Player
Enemy
Projectile
Pickup
Boss
```

Pada praktikum:

```text
Enemy
```

digunakan untuk menghitung jumlah musuh aktif.

Tag berbeda dengan nama GameObject.

Nama boleh:

```text
Enemy(Clone)
Enemy(Clone)
Enemy(Clone)
```

tetapi semuanya tetap memiliki:

```text
Tag = Enemy
```

---

# 38. Membuat Enemy Prefab

Setelah Enemy selesai:

drag:

```text
Enemy
```

dari Hierarchy menuju:

```text
Assets/Prefabs/
```

Unity akan membuat:

```text
Enemy.prefab
```

Kemudian hapus Enemy dari Scene.

Spawner sekarang yang bertanggung jawab membuat enemy.

---

# 39. Membuat Spawn Points

Buat Empty GameObject:

```text
SpawnPoints
```

Child:

```text
SpawnPoints
├── SpawnPoint1
├── SpawnPoint2
├── SpawnPoint3
└── SpawnPoint4
```

Letakkan di empat sisi arena.

Contoh:

```text
SpawnPoint1 = (-10, 1, 10)
SpawnPoint2 = (10, 1, 10)
SpawnPoint3 = (-10, 1, -10)
SpawnPoint4 = (10, 1, -10)
```

---

# 40. Membuat EnemySpawner Object

Buat:

```text
EnemySpawner
```

Tambahkan:

```text
EnemySpawner.cs
```

Assign:

```text
Enemy Prefab
→ Enemy.prefab

Player
→ Player

Difficulty Manager
→ GameManager

Performance Tracker
→ PlayerPerformanceTracker
```

Atur Spawn Points menjadi:

```text
Size = 4
```

masukkan keempat SpawnPoint.

Parameter awal:

```text
Base Enemy Health = 100

Base Enemy Damage = 10

Base Enemy Speed = 3

Base Spawn Interval = 4.5

Base Max Enemies = 5
```

---

# 41. Hierarchy Sementara

Scene sekarang kira-kira:

```text
MainArena
│
├── Main Camera
├── Directional Light
│
├── ArenaFloor
│
├── Player
│   └── ShootOrigin
│
├── GameManager
│
├── PlayerPerformanceTracker
│
├── EnemySpawner
│
└── SpawnPoints
    ├── SpawnPoint1
    ├── SpawnPoint2
    ├── SpawnPoint3
    └── SpawnPoint4
```

---

# 42. Pengujian Tahap Pertama

Tekan:

```text
Play
```

Periksa:

- player dapat bergerak,
- player dapat diarahkan dengan mouse,
- klik kiri menghasilkan tembakan,
- enemy muncul,
- enemy mengejar player,
- enemy dapat memberikan damage,
- player dapat menembak enemy,
- enemy dapat mati.

Jangan melanjutkan ke UI jika gameplay dasar belum berfungsi.

---

# 43. Membuat Debug UI

Debug UI sangat penting dalam praktikum DDA.

Tanpa Debug UI mahasiswa hanya melihat bahwa enemy berubah, tetapi sulit mengetahui:

```text
Mengapa difficulty berubah?
Skill score berapa?
Difficulty sekarang berapa?
```

---

# 44. Membuat Canvas

Pilih:

```text
GameObject
→ UI
→ Canvas
```

Rename:

```text
DebugCanvas
```

Tambahkan:

```text
UI
→ Text - TextMeshPro
```

Jika diminta:

```text
Import TMP Essentials
```

pilih:

```text
Import
```

Rename Text:

```text
DDADebugText
```

Posisikan di kiri atas.

---

# 45. TextMeshPro

**TextMeshPro** adalah sistem rendering text Unity yang memberikan kualitas dan kontrol lebih baik daripada komponen text lama.

TextMeshPro dapat mengatur:

- font,
- ukuran,
- alignment,
- spacing,
- material,
- rich text.

---

# 46. DDADebugUI.cs

Buat:

```csharp
using TMPro;
using UnityEngine;

public class DDADebugUI : MonoBehaviour
{
    [SerializeField]
    private TMP_Text debugText;

    [SerializeField]
    private PlayerHealth playerHealth;

    [SerializeField]
    private PlayerPerformanceTracker tracker;

    [SerializeField]
    private DifficultyManager difficultyManager;

    [SerializeField]
    private EnemySpawner enemySpawner;

    private void Update()
    {
        if (debugText == null ||
            playerHealth == null ||
            tracker == null ||
            difficultyManager == null ||
            enemySpawner == null)
        {
            return;
        }

        debugText.text =
            $"DDA DEBUG\n" +
            $"------------------------\n" +
            $"Health: " +
            $"{playerHealth.CurrentHealth:F0}/" +
            $"{playerHealth.MaxHealth:F0}\n" +

            $"Kills Window: " +
            $"{tracker.KillsInWindow}\n" +

            $"Damage Window: " +
            $"{tracker.DamageTakenInWindow:F0}\n" +

            $"Shots: " +
            $"{tracker.ShotsInWindow}\n" +

            $"Hits: " +
            $"{tracker.HitsInWindow}\n" +

            $"Skill Score: " +
            $"{tracker.LastSkillScore:F2}\n" +

            $"Difficulty: " +
            $"{difficultyManager.DifficultyMultiplier:F2}\n" +

            $"Spawn Interval: " +
            $"{enemySpawner.CurrentSpawnInterval:F2}s\n" +

            $"Adjustment: " +
            $"{difficultyManager.LastAdjustment}";
    }
}
```

---

# 47. Memasang DDADebugUI

Pasang script pada:

```text
DebugCanvas
```

Assign:

```text
Debug Text
→ DDADebugText

Player Health
→ Player

Tracker
→ PlayerPerformanceTracker

Difficulty Manager
→ GameManager

Enemy Spawner
→ EnemySpawner
```

---

# 48. Contoh Tampilan

Saat game berjalan:

```text
DDA DEBUG
------------------------
Health: 82/100
Kills Window: 4
Damage Window: 18
Shots: 12
Hits: 9
Skill Score: 0.72
Difficulty: 1.10
Spawn Interval: 4.09s
Adjustment: Increasing
```

---

# 49. Masalah LastSkillScore

Perhatikan bahwa:

```text
LastSkillScore
```

baru dihitung ketika evaluation berlangsung.

Jadi pada 30 detik pertama dapat terlihat:

```text
Skill Score = 0.50
```

Ini normal karena nilai awal didefinisikan:

```csharp
0.5f
```

---

# 50. Alur Lengkap Sistem

Game dimulai:

```text
difficulty = 1.0
```

EnemySpawner membaca difficulty:

```text
HP = 100
Damage = 10
Spawn Interval = 4.5 s
```

Player bermain selama 30 detik.

Tracker mencatat:

```text
Health
Kills
Damage
Shots
Hits
```

Setelah 30 detik:

```text
DifficultyManager
       ↓
CalculateSkillScore()
```

Misalnya:

```text
Skill Score = 0.81
```

Karena:

```text
0.81 > 0.75
```

maka:

```text
Difficulty:
1.00 → 1.05
```

Enemy baru selanjutnya menggunakan:

```text
HP = 105
Damage ≈ 10.25
Speed sedikit meningkat
Spawn interval ≈ 4.29s
```

---

# 51. Contoh Difficulty Meningkat

Misalnya:

```text
Difficulty = 1.25
```

Base enemy:

```text
Health = 100
Damage = 10
Speed = 3
Spawn Interval = 4.5
```

## Health

```text
100 × 1.25
= 125
```

## Damage

Damage menggunakan scaling lebih lembut:

```text
Multiplier kira-kira 1.125
```

sehingga:

```text
Damage ≈ 11.25
```

## Speed

Pengaruh speed hanya 25%.

Enemy tidak langsung menjadi terlalu cepat.

## Spawn interval

```text
4.5 / 1.25
= 3.6 detik
```

---

# 52. Contoh Difficulty Menurun

Misalnya:

```text
Difficulty = 0.80
```

Enemy menjadi lebih mudah.

Health:

```text
100 × 0.80 = 80
```

Spawn interval:

```text
4.5 / 0.80
= 5.625 detik
```

Enemy muncul lebih jarang.

---

# 53. Menguji DDA dengan Benar

Jangan hanya bermain secara normal.

Lakukan tiga skenario.

## Test A — Player Dominan

Lakukan:

- hindari damage,
- tembak enemy dengan akurat,
- bunuh enemy sebanyak mungkin.

Harapan:

```text
Skill Score > 0.75
Difficulty naik
```

---

## Test B — Player Kesulitan

Lakukan:

- biarkan enemy menyerang,
- sedikit membunuh enemy,
- sengaja banyak miss.

Harapan:

```text
Skill Score < 0.35
Difficulty turun
```

---

## Test C — Player Normal

Bermain biasa.

Harapan:

```text
0.35 <= Skill Score <= 0.75
Difficulty relatif tetap
```

---

# 54. Mempercepat Pengujian

30 detik cukup baik untuk gameplay, tetapi agak lama untuk debugging.

Saat pengembangan, sementara ubah:

```text
Evaluation Interval = 10
```

Setelah selesai debugging, kembalikan:

```text
30
```

---

# 55. DDA Oscillation

Perhatikan kemungkinan:

```text
Skill tinggi
↓
Difficulty naik
↓
Player mulai kesulitan
↓
Difficulty turun
↓
Player kembali dominan
↓
Difficulty naik
```

Jika terjadi terlalu sering, disebut:

**Oscillation**

---

# 56. Cara Mengurangi Oscillation

Praktikum sudah menggunakan beberapa mekanisme:

### 1. Evaluation Window

```text
30 detik
```

### 2. Tolerance Range

```text
0.35 – 0.75
```

tidak menyebabkan perubahan.

### 3. Adjustment Step

```text
0.05
```

perubahan sangat kecil.

### 4. Min/Max

```text
0.75 – 1.50
```

---

# 57. Tolerance atau Dead Zone

Rentang:

```text
0.35 <= SkillScore <= 0.75
```

dapat disebut:

```text
Tolerance Range
```

atau secara konsep kontrol:

```text
Dead Zone
```

Selama performance masih berada di zona ini:

```text
Difficulty tidak berubah.
```

Ini penting untuk menjaga kestabilan.

---

# 58. Smoothing

**Smoothing** berarti mencegah perubahan parameter terlalu mendadak.

Dalam praktikum, smoothing dilakukan secara sederhana melalui:

```text
evaluation interval
+
adjustment step kecil
+
tolerance
```

Sistem lebih lanjut dapat menggunakan:

```text
Moving Average
Exponential Moving Average
Rolling Window
```

---

# 59. Mengapa Tidak Mengevaluasi Setiap Frame?

Misalnya player terkena damage satu kali.

Jika DDA dievaluasi setiap frame:

```text
Damage terjadi
 ↓
Score turun
 ↓
Difficulty turun
```

beberapa frame berikutnya:

```text
Player membunuh enemy
 ↓
Score naik
 ↓
Difficulty naik
```

Hasilnya:

```text
difficulty tidak stabil
```

Karena itu DDA lebih baik bekerja pada:

```text
wave
room
checkpoint
atau time window
```

---

# 60. Parameter Adaptation

Praktikum sekarang mempunyai:

```text
DifficultyManager
   │
   ├── Enemy Health
   ├── Enemy Damage
   ├── Enemy Speed
   └── Spawn Interval
```

Inilah contoh:

**Parameter Adaptation**

Artinya sistem tidak perlu mengganti seluruh AI.

Cukup mengubah beberapa parameter gameplay.

---

# 61. Invisible Adaptation

Pada project saat ini, sebagian besar DDA bersifat:

```text
Invisible Adaptation
```

Player tidak diberitahu langsung bahwa:

```text
Enemy HP berubah dari 100 menjadi 105.
```

Namun Debug UI menampilkan data karena project ini digunakan untuk pembelajaran.

Pada game final Debug UI biasanya disembunyikan.

---

# 62. Diegetic Adaptation

Pengembangan lebih lanjut dapat membuat DDA terlihat lebih natural.

Contoh difficulty meningkat:

```text
"Enemy reinforcement incoming!"
```

Enemy tambahan masuk ke arena.

Difficulty turun:

```text
"Supply drone incoming!"
```

health pack muncul.

Dengan demikian adaptation memiliki alasan di dalam dunia game.

Ini disebut:

**Diegetic Adaptation**

---

# 63. Rubber Banding

Rubber banding adalah bentuk adaptasi yang membantu pihak yang tertinggal agar kompetisi tetap menarik.

Dalam arena survival konsep serupa dapat dibuat:

```text
Player health < 25%
        ↓
Health pickup chance meningkat
```

atau:

```text
Player kesulitan berat
        ↓
Enemy spawn sedikit diperlambat
```

Rubber banding harus digunakan secara hati-hati.

Jika terlalu kuat, player dapat merasa game memanipulasi hasil.

---

# 64. Rekomendasi Terbaik untuk Praktikum Ini

Untuk Praktikum 11, gunakan desain:

# Multi-Metric DDA + Continuous Difficulty Multiplier + Evaluation Window

Konfigurasi:

```text
Metrics:
Health
Kills
Damage Taken
Accuracy
```

Difficulty:

```text
Continuous multiplier
0.75 – 1.50
```

Adjustment:

```text
±0.05
```

Evaluation:

```text
setiap 30 detik
```

Parameter adaptation:

```text
Enemy Health
Enemy Damage
Enemy Speed ringan
Spawn Interval
```

Debug:

```text
wajib menggunakan Debug UI
```

---

# 65. Mengapa Pilihan Ini Direkomendasikan?

## Dibanding hanya Health

Jika hanya:

```text
if health < 30%
    difficulty turun
```

sistem terlalu sederhana.

Player ahli yang sengaja menggunakan gaya bermain berisiko bisa selalu dianggap buruk.

---

## Dibanding terlalu banyak metrics

Jika mahasiswa langsung menggunakan:

```text
health
kills
accuracy
death
resource
combo
dodge
time
distance
progress
ammo
```

sistem menjadi sulit di-debug.

Empat metrics sudah cukup untuk menjelaskan konsep.

---

## Dibanding Difficulty Level 1–5

Difficulty diskrit lebih mudah.

Namun multiplier kontinu:

```text
1.00
1.05
1.10
```

lebih baik untuk menunjukkan **parameter adaptation bertahap**.

---

# 66. Eksperimen 1 — Static vs Dynamic Difficulty

Nonaktifkan sementara:

```text
DifficultyManager
```

Gunakan:

```text
difficulty = 1.0
```

Mainkan game.

Kemudian aktifkan DDA.

Bandingkan:

```text
Static Difficulty
vs
Dynamic Difficulty
```

Diskusikan perubahan pengalaman bermain.

---

# 67. Eksperimen 2 — Adjustment Step

Uji:

```text
0.05
```

kemudian:

```text
0.20
```

Amati.

Pertanyaan:

- mana yang terasa lebih halus?
- mana yang lebih mudah mengalami perubahan ekstrem?

Harapan:

```text
0.05
```

lebih stabil.

---

# 68. Eksperimen 3 — Evaluation Interval

Bandingkan:

```text
5 detik
10 detik
30 detik
60 detik
```

Pertanyaan:

- apakah 5 detik terlalu reaktif?
- apakah 60 detik terlalu lambat?
- berapa interval yang paling cocok?

---

# 69. Eksperimen 4 — Single Metric

Ubah sementara skill score menjadi:

```csharp
lastSkillScore = healthScore;
```

Bandingkan dengan multi-metric.

Pertanyaan:

```text
Apakah health saja cukup
menggambarkan kemampuan player?
```

---

# 70. Eksperimen 5 — Enemy Health Saja

Nonaktifkan adaptasi:

```text
damage
speed
spawn interval
```

Adaptasikan hanya:

```text
Enemy Health
```

Bandingkan gameplay.

---

# 71. Eksperimen 6 — Spawn Interval Saja

Gunakan:

```text
Enemy stats tetap
```

tetapi:

```text
spawnInterval =
baseSpawnInterval /
difficultyMultiplier
```

Amati apakah perubahan difficulty masih terasa.

---

# 72. Eksperimen 7 — Difficulty Range

Bandingkan:

```text
0.75 – 1.50
```

dengan:

```text
0.25 – 3.00
```

Range kedua sengaja ekstrem.

Diskusikan mengapa DDA memerlukan:

```text
minimum
maximum
```

---

# 73. Eksperimen 8 — Threshold

Bandingkan:

```text
Lower = 0.35
Upper = 0.75
```

dengan:

```text
Lower = 0.49
Upper = 0.51
```

Rentang kedua sangat sempit.

Harapan:

```text
difficulty lebih sering berubah
```

sehingga risiko oscillation meningkat.

---

# 74. Tugas Pengembangan — Health Pickup Adaptif

Tambahkan:

```text
HealthPickup
```

Aturan:

```text
Difficulty rendah
        ↓
Health pickup lebih sering
```

atau:

```text
Player health rendah
        ↓
drop chance meningkat
```

Contoh desain:

```text
Base health drop chance = 10%

Difficulty 0.75
→ 20%

Difficulty 1.00
→ 10%

Difficulty 1.50
→ 5%
```

---

# 75. Tugas Pengembangan — Moving Average

Simpan beberapa `skillScore` terakhir:

```text
0.60
0.72
0.81
0.70
```

Kemudian hitung rata-rata.

```text
Average =
(0.60 + 0.72 + 0.81 + 0.70) / 4
```

Difficulty menggunakan rata-rata tersebut.

Bandingkan stabilitasnya dengan sistem awal.

---

# 76. Tugas Pengembangan — Threat Level

Tambahkan UI:

```text
Threat Level
```

Contoh:

```text
0.75 – 0.90
LOW

0.90 – 1.10
NORMAL

1.10 – 1.30
HIGH

1.30 – 1.50
EXTREME
```

---

# 77. Tugas Pengembangan — Visual Feedback

Gunakan warna pada Threat Level.

Contoh konsep:

```text
LOW       → hijau
NORMAL    → kuning
HIGH      → oranye
EXTREME   → merah
```

Tujuannya bukan hanya estetika, tetapi membantu mahasiswa melihat perubahan sistem.

---

# 78. Tugas Pengembangan — Wave-Based DDA

Saat ini DDA dievaluasi:

```text
setiap 30 detik
```

Modifikasi menjadi:

```text
Wave selesai
      ↓
Evaluate Performance
      ↓
Adjust Difficulty
      ↓
Start next wave
```

Metode ini sering lebih natural untuk game wave survival.

---

# 79. Tugas Pengembangan — Integrasi FSM

Jika menggunakan materi FSM sebelumnya:

```text
Enemy FSM
├── Chase
├── Attack
└── Retreat
```

DDA dapat mengubah:

```text
attackRange
attackCooldown
chaseSpeed
```

Difficulty tinggi:

```text
Attack lebih sering
Chase lebih cepat
```

---

# 80. Tugas Pengembangan — Behavior Tree

Jika enemy menggunakan Behavior Tree:

DDA dapat mengubah:

```text
Attack Cooldown
Condition Threshold
Action Parameter
```

Contoh:

```text
Difficulty rendah:
attackCooldown = 2.0

Normal:
attackCooldown = 1.5

Difficulty tinggi:
attackCooldown = 1.0
```

---

# 81. Tugas Pengembangan — Utility AI

Jika menggunakan Utility AI:

Difficulty dapat memengaruhi:

```text
attackWeight
fleeWeight
coverWeight
```

Difficulty tinggi:

```text
attackWeight meningkat
fleeWeight menurun
```

Enemy menjadi lebih agresif tanpa harus sekadar meningkatkan HP.

---

# 82. Tugas Pengembangan — Integrasi PCG

Hubungkan dengan Praktikum PCG.

Contoh:

```text
Difficulty tinggi
        ↓
Enemy count lebih banyak
Trap lebih banyak
Loot lebih sedikit
```

Difficulty rendah:

```text
Enemy lebih sedikit
Health item lebih banyak
```

Dengan demikian:

```text
DDA
↓
mengontrol
↓
PCG
```

---

# 83. Kesalahan Umum

## Error 1 — Enemy tidak muncul

Periksa:

```text
Enemy Prefab sudah diassign?
Spawn Point tersedia?
Player sudah diassign?
DifficultyManager sudah diassign?
```

---

## Error 2 — NullReferenceException

Biasanya terdapat field Inspector yang belum diisi.

Klik pesan error pada Console dan periksa object terkait.

---

## Error 3 — Enemy tidak bisa ditembak

Periksa:

```text
Enemy memiliki Collider?
EnemyHealth terpasang?
ShootOrigin menghadap ke depan?
```

---

## Error 4 — Kill tidak bertambah

Pastikan:

```text
EnemyHealth.Initialize()
```

menerima:

```text
PlayerPerformanceTracker
```

---

## Error 5 — Damage tidak tercatat

Pastikan enemy menyerang melalui:

```csharp
PlayerHealth.TakeDamage()
```

karena fungsi tersebut meneruskan informasi ke tracker.

---

## Error 6 — Difficulty tidak pernah berubah

Periksa:

```text
Skill score
Threshold
Evaluation interval
DifficultyManager aktif
PerformanceTracker reference
```

Sementara gunakan:

```text
Evaluation Interval = 10
```

untuk mempercepat pengujian.

---

## Error 7 — Enemy terlalu sulit

Jangan meningkatkan semua parameter terlalu agresif.

Kurangi:

```text
Damage scaling
Speed scaling
Base Max Enemies
```

---

## Error 8 — Difficulty selalu naik

Periksa normalization.

Jika:

```text
expectedKills
```

terlalu kecil, kill score akan selalu mendekati 1.

---

## Error 9 — Difficulty selalu turun

Mungkin:

```text
maxExpectedDamage
```

terlalu kecil.

Damage score akan cepat menjadi:

```text
0
```

---

# 84. Debugging dengan Console

`Debug.Log()` pada DifficultyManager menghasilkan:

```text
Skill Score: 0.78 |
Difficulty: 1.10 |
Adjustment: Increasing
```

Gunakan:

```text
Window
→ General
→ Console
```

untuk melihat log.

---

# 85. Inspector sebagai Balancing Tool

Jangan hard-code seluruh nilai.

Gunakan:

```csharp
[SerializeField]
```

untuk parameter:

```text
Base Enemy Health
Base Damage
Base Speed
Spawn Interval
Min Difficulty
Max Difficulty
Adjustment Step
Threshold
Evaluation Interval
```

Dengan demikian mahasiswa dapat melakukan eksperimen tanpa mengubah script.

---

# 86. Checklist Implementasi

- [ ] Project `GC11_AdaptiveArenaDDA` dibuat.
- [ ] Scene `MainArena` dibuat.
- [ ] Arena floor dibuat.
- [ ] Player dibuat.
- [ ] CharacterController terpasang.
- [ ] PlayerController berfungsi.
- [ ] Player dapat dikontrol WASD/Arrow.
- [ ] Player dapat diarahkan dengan mouse.
- [ ] Player dapat menembak.
- [ ] PlayerHealth berfungsi.
- [ ] Enemy prefab dibuat.
- [ ] EnemyAI berfungsi.
- [ ] EnemyHealth berfungsi.
- [ ] Enemy dapat menyerang player.
- [ ] Enemy dapat mati.
- [ ] Enemy memiliki Tag `Enemy`.
- [ ] Spawn points dibuat.
- [ ] EnemySpawner berfungsi.
- [ ] PlayerPerformanceTracker berfungsi.
- [ ] Kill tercatat.
- [ ] Damage tercatat.
- [ ] Shots tercatat.
- [ ] Hits tercatat.
- [ ] Skill score dapat dihitung.
- [ ] DifficultyManager dibuat.
- [ ] Difficulty memiliki min/max.
- [ ] Difficulty berubah bertahap.
- [ ] Evaluation window berfungsi.
- [ ] Enemy health adaptif.
- [ ] Enemy damage adaptif.
- [ ] Enemy speed adaptif secara ringan.
- [ ] Spawn interval adaptif.
- [ ] Debug UI dibuat.
- [ ] Skill score tampil.
- [ ] Difficulty multiplier tampil.
- [ ] Adjustment status tampil.
- [ ] Kondisi dominant player diuji.
- [ ] Kondisi struggling player diuji.
- [ ] Kondisi balanced diuji.

---

# 87. Pertanyaan Analisis Praktikum

Jawab setelah melakukan eksperimen.

1. Apa perbedaan static difficulty dan dynamic difficulty?
2. Mengapa performa player tidak sebaiknya diukur hanya dari health?
3. Mengapa metrik perlu dinormalisasi?
4. Apa fungsi `skillScore`?
5. Apa fungsi `difficultyMultiplier`?
6. Mengapa difficulty tidak boleh dievaluasi setiap frame?
7. Apa fungsi `evaluationInterval`?
8. Apa fungsi `adjustmentStep`?
9. Mengapa perlu `minDifficulty` dan `maxDifficulty`?
10. Apa yang dimaksud oscillation dalam DDA?
11. Bagaimana tolerance range mengurangi oscillation?
12. Mengapa seluruh parameter enemy sebaiknya tidak dinaikkan secara agresif sekaligus?
13. Mengapa Debug UI penting saat mengembangkan DDA?
14. Apa keuntungan menggunakan multi-metric dibanding single metric?
15. Apakah player yang sangat ahli seharusnya selalu diberi enemy yang semakin kuat?
16. Kapan DDA dapat dianggap tidak adil?
17. Apa hubungan DDA dengan rubber banding?
18. Bagaimana DDA dapat dikombinasikan dengan Behavior Tree?
19. Bagaimana DDA dapat dikombinasikan dengan Utility AI?
20. Bagaimana DDA dapat mengontrol PCG?

---

# 88. Tugas Eksperimen Mahasiswa

Lakukan minimal tiga konfigurasi.

## Konfigurasi A

```text
Evaluation = 10s
Step = 0.10
Range = 0.75–1.50
```

## Konfigurasi B

```text
Evaluation = 30s
Step = 0.05
Range = 0.75–1.50
```

## Konfigurasi C

```text
Evaluation = 60s
Step = 0.05
Range = 0.75–1.50
```

Catat:

```text
Skill Score
Difficulty
Enemy Spawn Interval
Pengalaman gameplay
```

Bandingkan kestabilannya.

---

# 89. Format Tabel Pengamatan

| Waktu | Skill Score | Difficulty | Spawn Interval | Adjustment |
|---|---:|---:|---:|---|
| 30 s | | | | |
| 60 s | | | | |
| 90 s | | | | |
| 120 s | | | | |
| 150 s | | | | |

Mahasiswa dapat menggunakan tabel ini sebagai data analisis.

---

# 90. Analisis Fairness

Setelah memainkan game, jawab:

```text
Apakah kenaikan difficulty terasa natural?
```

```text
Apakah player seperti dihukum karena bermain baik?
```

```text
Apakah penurunan difficulty terlalu mudah diketahui?
```

```text
Apakah kemenangan masih terasa berasal dari kemampuan player?
```

Ini penting karena DDA bukan hanya persoalan pemrograman.

DDA juga merupakan persoalan:

```text
Game Design
Player Experience
Fairness
Player Agency
```

---

# 91. Rekomendasi Parameter Awal Final

Gunakan konfigurasi berikut sebagai baseline:

```text
PLAYER
Max Health              = 100
Weapon Damage           = 35
Movement Speed          = 6

ENEMY
Base Health             = 100
Base Damage             = 10
Base Speed              = 3

SPAWNER
Base Spawn Interval     = 4.5
Base Max Enemies        = 5

PERFORMANCE
Expected Kills          = 5
Max Expected Damage     = 60

DDA
Initial Difficulty      = 1.00
Min Difficulty          = 0.75
Max Difficulty          = 1.50
Adjustment Step         = 0.05

SKILL THRESHOLD
Lower Threshold         = 0.35
Upper Threshold         = 0.75

EVALUATION
Evaluation Interval     = 30 seconds
```

Parameter ini bukan angka absolut yang harus selalu digunakan.

Mahasiswa diperbolehkan melakukan balancing berdasarkan hasil eksperimen.

---

# 92. Rekomendasi Arsitektur

Pembagian tanggung jawab script:

## PlayerPerformanceTracker

```text
Mengumpulkan data.
Tidak mengubah difficulty.
```

## DifficultyManager

```text
Menganalisis performance.
Mengelola difficulty.
Tidak melakukan spawning.
```

## EnemySpawner

```text
Membuat enemy.
Menggunakan difficulty.
Tidak menghitung skill score.
```

## EnemyAI

```text
Mengontrol perilaku enemy.
```

## DDADebugUI

```text
Menampilkan data.
Tidak mengubah gameplay.
```

Pemisahan ini penting karena menerapkan konsep:

**Separation of Concerns**

Setiap class mempunyai tanggung jawab yang jelas.

---

# 93. Mengapa Arsitektur Modular Penting?

Hindari membuat satu script:

```text
GameManager.cs
```

yang sekaligus:

```text
menggerakkan player
spawn enemy
menghitung HP
menghitung kill
menghitung difficulty
mengendalikan enemy
mengupdate UI
```

Walaupun mungkin berjalan, kode akan:

- sulit dibaca,
- sulit diuji,
- sulit dikembangkan,
- sulit di-debug.

Arsitektur modular membuat praktikum lebih dekat dengan praktik pengembangan game yang baik.

---

# 94. Konsep Feedback Loop

DDA merupakan sebuah:

**Feedback Loop**

```text
PLAYER ACTION
      ↓
GAMEPLAY DATA
      ↓
PERFORMANCE ANALYSIS
      ↓
DIFFICULTY ADJUSTMENT
      ↓
GAMEPLAY CHANGES
      ↓
PLAYER ACTION
      ↓
...
```

Ini adalah konsep penting dari adaptive game intelligence.

---

# 95. Hubungan dengan Pertemuan Sebelumnya

Praktikum sebelumnya membahas AI yang berfokus pada:

```text
NPC Intelligence
```

seperti:

```text
Perception
Movement
Pathfinding
FSM
Behavior Tree
Utility AI
Tactical AI
```

Kemudian PCG berfokus pada:

```text
Content Intelligence
```

Praktikum 11 mulai masuk ke:

```text
Adaptive Game Intelligence
```

Game tidak hanya membuat NPC cerdas.

Game juga:

```text
mengamati player
menganalisis player
menyesuaikan pengalaman bermain
```

---

# 96. Hubungan dengan Pertemuan 12

Praktikum 11 menggunakan data player untuk menjawab:

```text
"Bagaimana performa player sekarang?"
```

Pertemuan berikutnya tentang:

```text
Player Modeling & Adaptive Game AI
```

akan memperluas pertanyaan menjadi:

```text
"Player seperti apa yang sedang bermain?"
```

Misalnya:

```text
Beginner
Expert
Aggressive
Defensive
Explorer
Risk-taker
```

Dengan demikian:

```text
Performance Tracking
        ↓
DDA
        ↓
Player Modeling
        ↓
Adaptive Game AI
```

---

# 97. Ringkasan

Pada praktikum ini mahasiswa telah membangun:

```text
Adaptive Arena Survival
```

dengan sistem:

```text
Player
↓
Performance Tracking
↓
Normalization
↓
Skill Score
↓
Difficulty Manager
↓
Difficulty Multiplier
↓
Enemy Scaling
↓
Adaptive Spawn
↓
Gameplay Feedback
```

Komponen utama:

```text
PlayerPerformanceTracker
DifficultyManager
EnemySpawner
EnemyHealth
EnemyAI
DDADebugUI
```

Konsep utama:

```text
Player Performance
Multi-Metric Evaluation
Normalization
Skill Score
Difficulty Model
Adaptive Gameplay
Parameter Adaptation
Evaluation Window
Smoothing
Tolerance
Difficulty Bounds
Rubber Banding
Fairness
Player Agency
```

---

# 98. Kesimpulan

Dynamic Difficulty Adjustment bukan sekadar:

```text
"Jika player hebat, tambah HP musuh."
```

DDA merupakan sistem adaptif yang terdiri dari:

```text
Observe
   ↓
Measure
   ↓
Analyze
   ↓
Adapt
   ↓
Observe Again
```

Sistem yang baik harus:

- membaca performa player secara masuk akal,
- menggunakan metrik yang relevan,
- menormalisasi data,
- melakukan perubahan secara bertahap,
- memiliki minimum dan maksimum difficulty,
- tidak berubah terlalu sering,
- menjaga fairness,
- mempertahankan player agency,
- serta tetap membuat game terasa menantang dan menyenangkan.

Prinsip paling penting:

> **DDA yang baik tidak bertujuan membuat player selalu menang atau selalu kesulitan. DDA bertujuan menjaga tingkat tantangan tetap sesuai sehingga gameplay tetap menarik, stabil, dan terasa adil.**