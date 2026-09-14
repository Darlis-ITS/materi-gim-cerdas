# MODUL PRAKTIKUM 12  
# Gameplay Metrics, Player Modeling & Adaptive Game AI

**Mata Kuliah:** Game Cerdas  
**Program Studi:** S1 Teknik Informatika  
**Tools:** Unity 6 + C#  
**Pertemuan:** 12  
**Topik:** Player Modeling & Adaptive Game AI

---

# 1. Judul Praktikum

## Gameplay Metrics & Simple Player Model

Pada praktikum ini mahasiswa membuat sebuah game arena sederhana yang mampu:

1. merekam aktivitas player,
2. mengubah aktivitas tersebut menjadi gameplay metrics,
3. memperkirakan skill player,
4. mengenali kecenderungan play style,
5. membuat player profile,
6. menampilkan profile secara real-time,
7. dan menggunakan player profile untuk melakukan adaptasi gameplay sederhana.

---

# 2. Nama Project Unity yang Direkomendasikan

Nama project yang paling direkomendasikan:

```text
GC12_AdaptivePlayerModeling
```

Alternatif:

```text
PlayerModelingArena
AdaptiveGameAI
AdaptivePlayerArena
GameplayTelemetryLab
SmartPlayerProfile
```

## Rekomendasi Utama

```text
GC12_AdaptivePlayerModeling
```

Alasannya:

- `GC12` menunjukkan Game Cerdas Praktikum 12.
- `AdaptivePlayerModeling` menjelaskan inti sistem.
- nama cukup pendek.
- mudah dibedakan dari project DDA pada Praktikum 11.
- masih relevan jika project dikembangkan lebih lanjut.

---

# 3. Hubungan dengan Praktikum 11

Pada Praktikum 11 mahasiswa mempelajari:

```text
Player Performance
       ↓
Dynamic Difficulty Adjustment
       ↓
Difficulty berubah
```

Pada Praktikum 12 sistem diperluas menjadi:

```text
Gameplay Event
      ↓
Telemetry
      ↓
Gameplay Metrics
      ↓
Player Model
      ↓
Skill + Play Style
      ↓
Adaptation Policy
      ↓
Adaptive Game AI
```

Perbedaan utamanya:

| Praktikum 11 | Praktikum 12 |
|---|---|
| Fokus pada difficulty | Fokus memahami karakteristik player |
| Mengukur apakah game terlalu sulit/mudah | Mengukur skill dan gaya bermain |
| Output berupa difficulty | Output berupa player profile |
| Adaptasi terutama difficulty | Adaptasi dapat memengaruhi AI, resource, level, reward |
| Model relatif sederhana | Model memiliki beberapa metrics |

---

# 4. Rekomendasi Bentuk Praktikum

## Pilihan terbaik: Adaptive Arena Survival

Mahasiswa membuat sebuah arena kecil dengan:

- Player.
- beberapa Enemy.
- Health Pickup.
- beberapa area eksplorasi.
- shooting sederhana.
- telemetry system.
- player modeling.
- debug UI.
- adaptive enemy parameter.

### Kenapa Arena Survival?

Arena Survival sangat cocok karena memberikan cukup banyak data:

```text
Combat
→ shooting
→ hit
→ kill
→ damage dealt

Survival
→ health
→ damage taken
→ death

Exploration
→ area visited
→ item collected

Progress
→ survival time
→ objective
```

Dengan satu scene sederhana mahasiswa sudah dapat mempelajari hampir seluruh konsep penting player modeling.

---

# 5. Scope yang Direkomendasikan

Jangan langsung membuat sistem terlalu kompleks.

Untuk praktikum ini cukup gunakan empat kelompok data:

```text
Combat Metric
Survival Metric
Exploration Metric
Progress Metric
```

Kemudian model player menghasilkan:

```text
Skill Score
Skill Level

Aggressive Score
Defensive Score
Explorer Score

Dominant Style
```

Adaptasi cukup menggunakan:

```text
Skill → Enemy Damage / Spawn Rate

Play Style → Enemy Speed / Bonus Reward
```

Ini merupakan kombinasi terbaik antara:

- konsep akademik,
- kemudahan implementasi,
- waktu praktikum,
- kemampuan debugging,
- dan hasil yang mudah diamati.

---

# 6. Tujuan Praktikum

Setelah praktikum mahasiswa diharapkan mampu:

1. memahami konsep player telemetry;
2. membedakan telemetry dan gameplay metrics;
3. menangkap event gameplay melalui script Unity;
4. menghitung metrics dari data permainan;
5. melakukan normalisasi nilai;
6. menghitung skill score;
7. menentukan skill level;
8. menghitung play style score;
9. menentukan dominant play style;
10. membuat player profile;
11. membuat adaptation policy sederhana;
12. mengubah parameter game berdasarkan player model;
13. menampilkan telemetry dan player profile melalui UI;
14. menguji kestabilan player model.

---

# 7. Konsep Utama

## 7.1 Player Telemetry

**Player Telemetry** adalah data yang direkam dari aktivitas player selama permainan.

Contoh:

```text
Player menembak
Player mengenai enemy
Player menerima damage
Enemy mati
Player mengambil item
Player masuk area tertentu
Player mati
```

Telemetry masih merupakan **data mentah**.

Contoh:

```text
Shots Fired = 20
Shots Hit = 12
Enemies Killed = 3
Damage Taken = 45
```

---

# 8. Telemetry vs Gameplay Metrics

Telemetry:

```text
Shots Fired = 20
Shots Hit = 12
```

Gameplay metric:

```text
Accuracy
= Shots Hit / Shots Fired
= 12 / 20
= 0.60
```

Jadi:

```text
Telemetry
    ↓
Calculation
    ↓
Metrics
```

Telemetry adalah **apa yang terjadi**.

Metrics adalah **informasi yang diperoleh dari apa yang terjadi tersebut**.

---

# 9. Player Modeling

Player Modeling merupakan proses membuat representasi tentang player berdasarkan data gameplay.

Contoh hasil:

```text
PLAYER PROFILE

Skill Score      : 0.67
Skill Level      : Medium

Aggressive Score : 0.73
Defensive Score  : 0.42
Explorer Score   : 0.31

Dominant Style   : Aggressive
```

Sistem tidak menyatakan bahwa player "pasti aggressive".

Sistem hanya melakukan **estimasi berdasarkan data yang tersedia**.

---

# 10. Skill dan Play Style Harus Dipisahkan

Ini merupakan konsep penting.

## Skill

Menjawab:

```text
Seberapa baik kemampuan player?
```

Contoh:

```text
Low
Medium
High
```

## Play Style

Menjawab:

```text
Bagaimana cara player bermain?
```

Contoh:

```text
Aggressive
Defensive
Explorer
```

Player dapat mempunyai kombinasi:

```text
High Skill + Aggressive

High Skill + Defensive

Medium Skill + Explorer

Low Skill + Aggressive
```

Karena itu damage received tinggi **tidak otomatis berarti player tidak terampil**.

Bisa saja player memang memilih bermain agresif.

---

# 11. Istilah Teknis Unity yang Digunakan

## GameObject

`GameObject` adalah objek dasar dalam Unity.

Contoh:

```text
Player
Enemy
Main Camera
GameManager
Canvas
HealthPickup
```

GameObject dapat memiliki beberapa Component.

---

# 12. Component

Component memberikan fungsi tertentu kepada GameObject.

Contoh:

```text
Player
├── Transform
├── CharacterController
├── PlayerMovement
├── PlayerHealth
└── PlayerShooter
```

Script C# yang dipasang pada GameObject juga merupakan Component.

---

# 13. MonoBehaviour

Sebagian besar script Unity diturunkan dari:

```csharp
MonoBehaviour
```

Contoh:

```csharp
public class PlayerHealth : MonoBehaviour
{
}
```

Dengan `MonoBehaviour`, script dapat menggunakan fungsi Unity seperti:

```text
Awake()
Start()
Update()
OnTriggerEnter()
OnCollisionEnter()
```

---

# 14. Transform

Setiap GameObject memiliki `Transform`.

Transform menyimpan:

```text
Position
Rotation
Scale
```

Contoh:

```csharp
transform.position
```

mengembalikan posisi GameObject.

---

# 15. CharacterController

`CharacterController` digunakan untuk menggerakkan karakter tanpa harus menggunakan simulasi fisika penuh Rigidbody.

Pada praktikum ini digunakan untuk movement sederhana Player.

Keuntungannya:

- mudah digunakan;
- gerakan stabil;
- tidak memerlukan konfigurasi Rigidbody;
- cocok untuk prototype.

---

# 16. Collider

Collider mendefinisikan area fisik sebuah GameObject.

Contoh:

```text
Box Collider
Sphere Collider
Capsule Collider
```

Collider digunakan untuk:

- collision,
- trigger,
- raycast detection.

---

# 17. Trigger

Collider dapat menggunakan:

```text
Is Trigger = true
```

Trigger tidak menghalangi movement tetapi dapat mendeteksi object yang masuk.

Digunakan untuk:

```text
Health Pickup
Exploration Zone
```

Callback:

```csharp
OnTriggerEnter(Collider other)
```

---

# 18. Raycast

**Raycast** adalah garis tak terlihat yang dikirim dari suatu posisi ke suatu arah untuk mendeteksi objek.

Dalam praktikum:

```text
Player
   ↓
Raycast
   ↓
Enemy
```

Raycast digunakan untuk shooting sederhana.

---

# 19. LayerMask

LayerMask digunakan untuk membatasi object apa saja yang boleh dideteksi oleh Raycast.

Misalnya:

```text
Layer:
Enemy
```

Raycast Player hanya akan memeriksa layer `Enemy`.

Ini membuat deteksi lebih efisien dan lebih terkontrol.

---

# 20. Prefab

Prefab adalah template GameObject yang dapat digunakan berulang kali.

Contoh:

```text
Enemy.prefab
HealthPickup.prefab
```

Prefab sangat penting untuk sistem:

```text
EnemySpawner
```

karena enemy dapat dibuat melalui:

```csharp
Instantiate()
```

---

# 21. Singleton

Pada praktikum digunakan pola sederhana Singleton untuk:

```text
TelemetryManager
PlayerModelManager
AdaptationManager
```

Tujuannya agar script lain mudah mengakses manager.

Contoh:

```csharp
TelemetryManager.Instance.RecordKill();
```

Untuk project produksi besar dapat digunakan sistem dependency atau event yang lebih terstruktur.

Untuk praktikum, Singleton cukup sederhana dan mudah dipahami.

---

# 22. Mathf.Clamp01()

Fungsi:

```csharp
Mathf.Clamp01(value)
```

membatasi nilai menjadi:

```text
0.0 sampai 1.0
```

Contoh:

```csharp
float score = Mathf.Clamp01(killRate / expectedKillRate);
```

Sangat penting dalam proses **normalisasi metric**.

---

# 23. TextMeshPro

TextMeshPro digunakan untuk menampilkan:

```text
Telemetry
Gameplay Metrics
Player Profile
Adaptation
```

Class yang digunakan:

```csharp
TMP_Text
```

Namespace:

```csharp
using TMPro;
```

---

# 24. Struktur Folder Project

Buat struktur:

```text
Assets/
│
├── Scenes/
│   └── PlayerModelingDemo.unity
│
├── Scripts/
│   ├── Core/
│   ├── Player/
│   ├── Enemy/
│   ├── Telemetry/
│   ├── PlayerModel/
│   ├── Adaptation/
│   ├── Items/
│   └── UI/
│
├── Prefabs/
│   ├── Enemy.prefab
│   └── HealthPickup.prefab
│
└── Materials/
```

---

# 25. Struktur Scene

Hierarchy yang direkomendasikan:

```text
PlayerModelingDemo
│
├── Systems
│   ├── GameManager
│   ├── TelemetryManager
│   ├── PlayerModelManager
│   ├── AdaptationManager
│   └── EnemySpawner
│
├── Player
│
├── Arena
│   ├── Floor
│   ├── Wall_North
│   ├── Wall_South
│   ├── Wall_East
│   └── Wall_West
│
├── ExplorationZones
│   ├── Zone_A
│   ├── Zone_B
│   ├── Zone_C
│   └── Zone_D
│
├── SpawnPoints
│
├── BonusReward
│
├── Main Camera
│
└── Canvas
    └── DebugPanel
```

---

# 26. Langkah 1 — Membuat Project

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
3D
```

Nama:

```text
GC12_AdaptivePlayerModeling
```

Kemudian klik:

```text
Create Project
```

---

# 27. Langkah 2 — Membuat Scene

Simpan scene sebagai:

```text
Assets/Scenes/PlayerModelingDemo.unity
```

Buat Floor:

```text
Hierarchy
→ Create
→ 3D Object
→ Plane
```

Rename:

```text
Floor
```

Scale misalnya:

```text
X = 3
Y = 1
Z = 3
```

---

# 28. Langkah 3 — Membuat Player

Buat:

```text
3D Object
→ Capsule
```

Rename:

```text
Player
```

Position:

```text
X = 0
Y = 1
Z = 0
```

Tambahkan:

```text
CharacterController
```

Tag:

```text
Player
```

---

# 29. PlayerMovement.cs

Buat:

```text
Assets/Scripts/Player/PlayerMovement.cs
```

```csharp
using UnityEngine;

public class PlayerMovement : MonoBehaviour
{
    [SerializeField] private float moveSpeed = 5f;

    private CharacterController controller;

    private void Awake()
    {
        controller = GetComponent<CharacterController>();
    }

    private void Update()
    {
        float horizontal = 0f;
        float vertical = 0f;

        if (Input.GetKey(KeyCode.A) ||
            Input.GetKey(KeyCode.LeftArrow))
            horizontal = -1f;

        if (Input.GetKey(KeyCode.D) ||
            Input.GetKey(KeyCode.RightArrow))
            horizontal = 1f;

        if (Input.GetKey(KeyCode.W) ||
            Input.GetKey(KeyCode.UpArrow))
            vertical = 1f;

        if (Input.GetKey(KeyCode.S) ||
            Input.GetKey(KeyCode.DownArrow))
            vertical = -1f;

        Vector3 direction =
            new Vector3(horizontal, 0f, vertical).normalized;

        controller.Move(
            direction * moveSpeed * Time.deltaTime
        );

        if (direction != Vector3.zero)
        {
            transform.forward = direction;
        }
    }
}
```

Pasang pada Player.

Player sekarang dapat dikontrol menggunakan:

```text
W A S D
```

atau:

```text
Arrow Keys
```

---

# 30. Penjelasan Time.deltaTime

`Time.deltaTime` adalah waktu antara frame sekarang dengan frame sebelumnya.

Digunakan agar movement:

```text
tidak bergantung pada FPS.
```

Contoh:

```csharp
moveSpeed * Time.deltaTime
```

Tanpa `Time.deltaTime`, komputer dengan FPS tinggi dapat membuat Player bergerak lebih cepat.

---

# 31. Langkah 4 — TelemetryManager

Buat:

```text
TelemetryManager.cs
```

```csharp
using System.Collections.Generic;
using UnityEngine;

public class TelemetryManager : MonoBehaviour
{
    public static TelemetryManager Instance { get; private set; }

    [Header("Combat")]
    public int shotsFired;
    public int shotsHit;
    public int enemiesKilled;
    public float damageDealt;

    [Header("Survival")]
    public float damageTaken;
    public int deathCount;

    [Header("Exploration")]
    public int itemsCollected;
    public int totalZones = 4;

    [Header("Progress")]
    public float playTime;
    public bool objectiveCompleted;

    private HashSet<string> visitedZones =
        new HashSet<string>();

    public int VisitedZoneCount => visitedZones.Count;

    private void Awake()
    {
        if (Instance != null && Instance != this)
        {
            Destroy(gameObject);
            return;
        }

        Instance = this;
    }

    private void Update()
    {
        playTime += Time.deltaTime;
    }

    public void RecordShot()
    {
        shotsFired++;
    }

    public void RecordHit()
    {
        shotsHit++;
    }

    public void RecordDamageDealt(float value)
    {
        damageDealt += value;
    }

    public void RecordDamageTaken(float value)
    {
        damageTaken += value;
    }

    public void RecordKill()
    {
        enemiesKilled++;
    }

    public void RecordDeath()
    {
        deathCount++;
    }

    public void RecordItem()
    {
        itemsCollected++;
    }

    public void RecordZone(string zoneID)
    {
        visitedZones.Add(zoneID);
    }

    public void CompleteObjective()
    {
        objectiveCompleted = true;
    }
}
```

Pasang script pada:

```text
Systems/TelemetryManager
```

---

# 32. Mengapa Menggunakan HashSet?

Digunakan:

```csharp
HashSet<string>
```

untuk menyimpan area yang sudah pernah dikunjungi.

Contoh:

```text
Player masuk Zone_A 10 kali
```

tetap dihitung:

```text
1 unique zone
```

Berbeda dengan `List`, HashSet tidak menyimpan nilai duplikat.

---

# 33. Langkah 5 — PlayerHealth

Buat:

```text
PlayerHealth.cs
```

```csharp
using UnityEngine;

public class PlayerHealth : MonoBehaviour
{
    public float maxHealth = 100f;
    public float currentHealth;

    public float HealthRatio =>
        currentHealth / maxHealth;

    private void Start()
    {
        currentHealth = maxHealth;
    }

    public void TakeDamage(float amount)
    {
        currentHealth -= amount;
        currentHealth =
            Mathf.Clamp(currentHealth, 0f, maxHealth);

        TelemetryManager.Instance
            .RecordDamageTaken(amount);

        if (currentHealth <= 0f)
        {
            Die();
        }
    }

    public void Heal(float amount)
    {
        currentHealth += amount;

        currentHealth =
            Mathf.Clamp(currentHealth, 0f, maxHealth);
    }

    private void Die()
    {
        TelemetryManager.Instance.RecordDeath();

        Debug.Log("Player died");

        currentHealth = maxHealth;
        transform.position = Vector3.zero;
    }
}
```

Pasang pada Player.

---

# 34. Health Ratio

Health Ratio dihitung:

```text
Current Health
--------------
Maximum Health
```

Contoh:

```text
Health = 75
Max = 100

HealthRatio = 0.75
```

Normalisasi otomatis menghasilkan rentang:

```text
0 – 1
```

---

# 35. Langkah 6 — Enemy

Buat Capsule.

Rename:

```text
Enemy
```

Tambahkan:

```text
Capsule Collider
EnemyHealth
EnemyAI
```

Buat Layer:

```text
Enemy
```

Assign Enemy ke Layer tersebut.

---

# 36. EnemyHealth.cs

```csharp
using UnityEngine;

public class EnemyHealth : MonoBehaviour
{
    public float maxHealth = 50f;

    private float currentHealth;

    private void Start()
    {
        currentHealth = maxHealth;
    }

    public void TakeDamage(float amount)
    {
        float actualDamage =
            Mathf.Min(amount, currentHealth);

        currentHealth -= actualDamage;

        TelemetryManager.Instance
            .RecordDamageDealt(actualDamage);

        if (currentHealth <= 0f)
        {
            TelemetryManager.Instance.RecordKill();

            Destroy(gameObject);
        }
    }
}
```

---

# 37. Langkah 7 — Player Shooting

Buat:

```text
PlayerShooter.cs
```

```csharp
using UnityEngine;

public class PlayerShooter : MonoBehaviour
{
    public float damage = 20f;
    public float range = 15f;
    public float fireCooldown = 0.35f;

    public LayerMask enemyLayer;

    private float nextFireTime;

    private void Update()
    {
        if (Input.GetKey(KeyCode.Space) &&
            Time.time >= nextFireTime)
        {
            Shoot();

            nextFireTime =
                Time.time + fireCooldown;
        }
    }

    private void Shoot()
    {
        TelemetryManager.Instance.RecordShot();

        Vector3 origin =
            transform.position + Vector3.up * 0.8f;

        Vector3 direction =
            transform.forward;

        if (Physics.Raycast(
            origin,
            direction,
            out RaycastHit hit,
            range,
            enemyLayer))
        {
            EnemyHealth enemy =
                hit.collider.GetComponent<EnemyHealth>();

            if (enemy != null)
            {
                TelemetryManager.Instance.RecordHit();

                enemy.TakeDamage(damage);
            }
        }

        Debug.DrawRay(
            origin,
            direction * range,
            Color.red,
            0.2f
        );
    }
}
```

Pasang pada Player.

Assign:

```text
Enemy Layer
```

ke field:

```text
Enemy Layer
```

---

# 38. Input Shooting

Kontrol praktikum:

```text
WASD / Arrow → Movement

SPACE → Attack
```

Tujuan penggunaan Space adalah agar praktikum fokus pada:

```text
AI + telemetry
```

dan tidak terlalu banyak waktu digunakan untuk membuat FPS controller.

---

# 39. Langkah 8 — Enemy AI

Buat:

```text
EnemyAI.cs
```

```csharp
using UnityEngine;

public class EnemyAI : MonoBehaviour
{
    public float baseMoveSpeed = 2f;
    public float baseDamage = 10f;
    public float attackRange = 1.5f;
    public float attackCooldown = 1.2f;

    private Transform player;
    private PlayerHealth playerHealth;

    private float nextAttackTime;

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
            Attack();
        }
    }

    private void MoveTowardsPlayer()
    {
        Vector3 direction =
            player.position - transform.position;

        direction.y = 0f;

        float multiplier = 1f;

        if (AdaptationManager.Instance != null)
        {
            multiplier =
                AdaptationManager.Instance.enemySpeedMultiplier;
        }

        transform.position +=
            direction.normalized
            * baseMoveSpeed
            * multiplier
            * Time.deltaTime;

        if (direction != Vector3.zero)
        {
            transform.forward =
                direction.normalized;
        }
    }

    private void Attack()
    {
        if (Time.time < nextAttackTime)
            return;

        float multiplier = 1f;

        if (AdaptationManager.Instance != null)
        {
            multiplier =
                AdaptationManager.Instance.enemyDamageMultiplier;
        }

        playerHealth.TakeDamage(
            baseDamage * multiplier
        );

        nextAttackTime =
            Time.time + attackCooldown;
    }
}
```

---

# 40. Apa yang Dilakukan Enemy?

Enemy hanya memiliki behavior sederhana:

```text
Player jauh
   ↓
Move toward Player

Player dekat
   ↓
Attack
```

AI sengaja sederhana karena fokus Praktikum 12 bukan membuat AI dasar lagi.

AI ini berfungsi sebagai **target adaptasi**.

---

# 41. Langkah 9 — Membuat Enemy Prefab

Drag GameObject:

```text
Enemy
```

dari Hierarchy ke:

```text
Assets/Prefabs/
```

Sekarang terdapat:

```text
Enemy.prefab
```

Hapus Enemy dari Scene jika ingin semua enemy dibuat melalui spawner.

---

# 42. Langkah 10 — EnemySpawner

Buat beberapa Empty GameObject:

```text
SpawnPoint_A
SpawnPoint_B
SpawnPoint_C
SpawnPoint_D
```

Letakkan mengelilingi arena.

Buat:

```text
EnemySpawner.cs
```

```csharp
using UnityEngine;

public class EnemySpawner : MonoBehaviour
{
    public GameObject enemyPrefab;
    public Transform[] spawnPoints;

    public float baseSpawnInterval = 5f;
    public int maxEnemies = 8;

    private float timer;

    private void Update()
    {
        timer += Time.deltaTime;

        float intervalMultiplier = 1f;

        if (AdaptationManager.Instance != null)
        {
            intervalMultiplier =
                AdaptationManager.Instance.spawnIntervalMultiplier;
        }

        float currentInterval =
            baseSpawnInterval * intervalMultiplier;

        if (timer >= currentInterval)
        {
            timer = 0f;
            TrySpawn();
        }
    }

    private void TrySpawn()
    {
        int enemyCount =
            GameObject.FindGameObjectsWithTag("Enemy").Length;

        if (enemyCount >= maxEnemies)
            return;

        if (spawnPoints.Length == 0)
            return;

        Transform point =
            spawnPoints[
                Random.Range(0, spawnPoints.Length)
            ];

        Instantiate(
            enemyPrefab,
            point.position,
            point.rotation
        );
    }
}
```

---

# 43. Tag Enemy

Jangan lupa memberikan:

```text
Tag = Enemy
Layer = Enemy
```

kepada Enemy Prefab.

Perbedaannya:

## Tag

Digunakan untuk identifikasi logis.

```csharp
FindGameObjectsWithTag("Enemy")
```

## Layer

Digunakan untuk filtering sistem seperti:

```text
Raycast
Collision
Camera
Physics
```

Dalam praktikum ini:

```text
Tag Enemy → menghitung enemy aktif

Layer Enemy → Raycast shooting
```

---

# 44. Langkah 11 — Exploration Zone

Buat Empty Object:

```text
Zone_A
```

Tambahkan:

```text
Box Collider
```

Centang:

```text
Is Trigger
```

Buat:

```text
ExplorationZone.cs
```

```csharp
using UnityEngine;

public class ExplorationZone : MonoBehaviour
{
    public string zoneID;

    private void OnTriggerEnter(Collider other)
    {
        if (!other.CompareTag("Player"))
            return;

        TelemetryManager.Instance
            .RecordZone(zoneID);
    }
}
```

Isi:

```text
Zone_A → zoneID = Zone_A
Zone_B → zoneID = Zone_B
Zone_C → zoneID = Zone_C
Zone_D → zoneID = Zone_D
```

---

# 45. Mengapa Zone Visit Berguna?

Zone visit memberikan telemetry untuk mengenali Player Explorer.

Misalnya:

```text
Total Zone = 4

Player mengunjungi:
Zone A
Zone B
Zone C

Exploration Ratio
= 3 / 4
= 0.75
```

Semakin tinggi nilai ini, semakin besar indikasi bahwa Player suka melakukan eksplorasi.

---

# 46. Langkah 12 — Health Pickup

Buat object misalnya:

```text
Sphere
```

Rename:

```text
HealthPickup
```

Centang Collider:

```text
Is Trigger
```

Script:

```csharp
using UnityEngine;

public class HealthPickup : MonoBehaviour
{
    public float healAmount = 25f;

    private void OnTriggerEnter(Collider other)
    {
        if (!other.CompareTag("Player"))
            return;

        PlayerHealth health =
            other.GetComponent<PlayerHealth>();

        if (health != null)
        {
            health.Heal(healAmount);

            TelemetryManager.Instance
                .RecordItem();

            Destroy(gameObject);
        }
    }
}
```

---

# 47. GameplayMetrics.cs

Sekarang data mentah akan diolah menjadi metrics.

Buat:

```text
GameplayMetrics.cs
```

```csharp
using System;
using UnityEngine;

[Serializable]
public class GameplayMetrics
{
    public float accuracy;
    public float killRate;

    public float normalizedKillRate;
    public float damageAvoidance;

    public float explorationRatio;
    public float itemCollectionScore;

    public float attackFrequency;
    public float normalizedAttackFrequency;

    public float progressScore;

    public float combatScore;
    public float survivalScore;
    public float resourceScore;

    public void Calculate(
        TelemetryManager telemetry,
        PlayerHealth playerHealth)
    {
        // ==========================
        // COMBAT
        // ==========================

        if (telemetry.shotsFired > 0)
        {
            accuracy =
                (float)telemetry.shotsHit
                / telemetry.shotsFired;
        }
        else
        {
            accuracy = 0f;
        }

        float minutes =
            Mathf.Max(
                telemetry.playTime / 60f,
                0.1f
            );

        killRate =
            telemetry.enemiesKilled / minutes;

        float expectedKillRate = 4f;

        normalizedKillRate =
            Mathf.Clamp01(
                killRate / expectedKillRate
            );

        attackFrequency =
            telemetry.shotsFired / minutes;

        float expectedAttackFrequency = 20f;

        normalizedAttackFrequency =
            Mathf.Clamp01(
                attackFrequency
                / expectedAttackFrequency
            );

        combatScore =
            0.6f * accuracy
            +
            0.4f * normalizedKillRate;

        // ==========================
        // SURVIVAL
        // ==========================

        float expectedDamage = 150f;

        float normalizedDamage =
            Mathf.Clamp01(
                telemetry.damageTaken
                / expectedDamage
            );

        damageAvoidance =
            1f - normalizedDamage;

        float deathPenalty =
            1f -
            Mathf.Clamp01(
                telemetry.deathCount / 3f
            );

        survivalScore =
            0.5f * playerHealth.HealthRatio
            +
            0.3f * damageAvoidance
            +
            0.2f * deathPenalty;

        // ==========================
        // EXPLORATION
        // ==========================

        if (telemetry.totalZones > 0)
        {
            explorationRatio =
                (float)telemetry.VisitedZoneCount
                / telemetry.totalZones;
        }

        // ==========================
        // RESOURCE
        // ==========================

        float expectedItems = 4f;

        itemCollectionScore =
            Mathf.Clamp01(
                telemetry.itemsCollected
                / expectedItems
            );

        resourceScore = itemCollectionScore;

        // ==========================
        // PROGRESS
        // ==========================

        float targetSurvivalTime = 120f;

        progressScore =
            Mathf.Clamp01(
                telemetry.playTime
                / targetSurvivalTime
            );

        if (telemetry.objectiveCompleted)
        {
            progressScore = 1f;
        }
    }
}
```

---

# 48. Apa Itu Normalisasi?

Metrics memiliki skala berbeda.

Misalnya:

```text
Accuracy      = 0.75
Kills/minute  = 4
Damage Taken  = 120
Shots/minute  = 25
```

Nilai tersebut tidak dapat langsung digabungkan.

Karena itu digunakan normalisasi:

```text
0.0 – 1.0
```

Contoh:

```text
Expected Kill Rate = 4

Player Kill Rate = 2

Normalized Kill Rate
= 2 / 4
= 0.5
```

---

# 49. Mengapa Expected Value Diperlukan?

Contoh:

```csharp
float expectedKillRate = 4f;
```

Nilai tersebut berfungsi sebagai **baseline**.

Artinya:

```text
4 kill/menit dianggap performa penuh pada metric tersebut.
```

Nilai ini bukan nilai universal.

Game berbeda membutuhkan baseline berbeda.

Mahasiswa justru dianjurkan melakukan eksperimen terhadap nilai ini.

---

# 50. Skill Estimation

Gunakan rumus:

```text
SkillScore =
0.35 Combat
+
0.30 Survival
+
0.20 Progress
+
0.15 Resource
```

Sesuai konsep player modeling, skill tidak ditentukan hanya dari satu metric.

---

# 51. PlayerModel.cs

```csharp
using System;

public enum SkillLevel
{
    Low,
    Medium,
    High
}

public enum PlayStyle
{
    Aggressive,
    Defensive,
    Explorer
}

[Serializable]
public class PlayerModel
{
    public float skillScore;
    public SkillLevel skillLevel;

    public float aggressiveScore;
    public float defensiveScore;
    public float explorerScore;

    public PlayStyle dominantStyle;
}
```

---

# 52. Mengapa Menggunakan Enum?

Daripada menggunakan:

```csharp
string skillLevel = "High";
```

lebih baik:

```csharp
SkillLevel.High
```

`enum` mengurangi risiko typo.

Contoh string:

```text
"High"
"HIGH"
"Hig"
```

dapat menyebabkan error logika.

Enum lebih aman dan terstruktur.

---

# 53. Langkah 13 — PlayerModelManager

Buat:

```text
PlayerModelManager.cs
```

```csharp
using UnityEngine;

public class PlayerModelManager : MonoBehaviour
{
    public static PlayerModelManager Instance
    {
        get;
        private set;
    }

    public GameplayMetrics metrics =
        new GameplayMetrics();

    public PlayerModel model =
        new PlayerModel();

    public PlayerHealth playerHealth;

    public float evaluationInterval = 10f;

    private float timer;

    private void Awake()
    {
        Instance = this;
    }

    private void Update()
    {
        timer += Time.deltaTime;

        if (timer >= evaluationInterval)
        {
            timer = 0f;

            EvaluatePlayer();
        }
    }

    public void EvaluatePlayer()
    {
        if (TelemetryManager.Instance == null ||
            playerHealth == null)
            return;

        metrics.Calculate(
            TelemetryManager.Instance,
            playerHealth
        );

        CalculateSkill();
        CalculatePlayStyle();
    }

    private void CalculateSkill()
    {
        model.skillScore =
            0.35f * metrics.combatScore
            +
            0.30f * metrics.survivalScore
            +
            0.20f * metrics.progressScore
            +
            0.15f * metrics.resourceScore;

        model.skillScore =
            Mathf.Clamp01(model.skillScore);

        if (model.skillScore < 0.4f)
        {
            model.skillLevel =
                SkillLevel.Low;
        }
        else if (model.skillScore < 0.7f)
        {
            model.skillLevel =
                SkillLevel.Medium;
        }
        else
        {
            model.skillLevel =
                SkillLevel.High;
        }
    }

    private void CalculatePlayStyle()
    {
        TelemetryManager telemetry =
            TelemetryManager.Instance;

        // Aggressive
        float damageScore =
            Mathf.Clamp01(
                telemetry.damageDealt / 300f
            );

        model.aggressiveScore =
            0.6f
            * metrics.normalizedAttackFrequency
            +
            0.4f
            * damageScore;

        // Defensive
        model.defensiveScore =
            0.6f
            * metrics.damageAvoidance
            +
            0.4f
            * playerHealth.HealthRatio;

        // Explorer
        model.explorerScore =
            0.7f
            * metrics.explorationRatio
            +
            0.3f
            * metrics.itemCollectionScore;

        DetermineDominantStyle();
    }

    private void DetermineDominantStyle()
    {
        float highest =
            model.aggressiveScore;

        model.dominantStyle =
            PlayStyle.Aggressive;

        if (model.defensiveScore > highest)
        {
            highest =
                model.defensiveScore;

            model.dominantStyle =
                PlayStyle.Defensive;
        }

        if (model.explorerScore > highest)
        {
            model.dominantStyle =
                PlayStyle.Explorer;
        }
    }
}
```

Pasang pada:

```text
PlayerModelManager
```

Assign:

```text
Player Health
```

dengan Player pada Inspector.

---

# 54. Evaluation Window

Perhatikan:

```csharp
evaluationInterval = 10f;
```

Player model tidak dihitung setiap frame.

Model diperbarui:

```text
setiap 10 detik
```

Ini merupakan bentuk sederhana dari:

**Evaluation Window**

Tujuannya agar model tidak berubah berdasarkan satu kejadian singkat.

Contoh buruk:

```text
Player menembak terus selama 2 detik

→ langsung dianggap aggressive
```

Dengan window, sistem mengamati pola yang lebih panjang.

---

# 55. Skill Level

Gunakan threshold:

```text
0.00 – 0.39
Low

0.40 – 0.69
Medium

0.70 – 1.00
High
```

Kode:

```csharp
if (skillScore < 0.4f)
    Low;
else if (skillScore < 0.7f)
    Medium;
else
    High;
```

Nilai threshold merupakan parameter desain.

Tidak ada nilai universal untuk seluruh game.

---

# 56. Play Style Classification

Praktikum menggunakan tiga style.

## Aggressive

Dipengaruhi oleh:

```text
Attack Frequency
Damage Dealt
```

## Defensive

Dipengaruhi oleh:

```text
Damage Avoidance
Remaining Health
```

## Explorer

Dipengaruhi oleh:

```text
Exploration Ratio
Item Collection
```

---

# 57. Catatan Penting tentang Model

Rumus praktikum merupakan:

```text
heuristic model
```

bukan model ilmiah universal.

Misalnya:

```text
Defensive Score tinggi
```

tidak membuktikan secara mutlak bahwa player adalah pemain defensif.

Sistem hanya mengatakan:

> Berdasarkan metrics yang dipilih, perilaku player lebih mirip kategori Defensive dibanding kategori lainnya.

Konsep ini penting agar mahasiswa memahami keterbatasan rule-based player modeling.

---

# 58. Langkah 14 — Adaptation Policy

Sekarang game akan merespons hasil player model.

Buat:

```text
AdaptationManager.cs
```

```csharp
using UnityEngine;

public class AdaptationManager : MonoBehaviour
{
    public static AdaptationManager Instance
    {
        get;
        private set;
    }

    public float enemyDamageMultiplier = 1f;
    public float enemySpeedMultiplier = 1f;
    public float spawnIntervalMultiplier = 1f;

    public GameObject explorerBonus;

    public string currentAdaptation =
        "Collecting player data";

    private float timer;

    public float adaptationInterval = 10f;

    private void Awake()
    {
        Instance = this;
    }

    private void Start()
    {
        if (explorerBonus != null)
        {
            explorerBonus.SetActive(false);
        }
    }

    private void Update()
    {
        timer += Time.deltaTime;

        if (timer >= adaptationInterval)
        {
            timer = 0f;

            ApplyAdaptation();
        }
    }

    private void ApplyAdaptation()
    {
        if (PlayerModelManager.Instance == null)
            return;

        PlayerModel model =
            PlayerModelManager.Instance.model;

        ResetParameters();

        ApplySkillAdaptation(model);
        ApplyStyleAdaptation(model);
    }

    private void ResetParameters()
    {
        enemyDamageMultiplier = 1f;
        enemySpeedMultiplier = 1f;
        spawnIntervalMultiplier = 1f;

        if (explorerBonus != null)
        {
            explorerBonus.SetActive(false);
        }
    }

    private void ApplySkillAdaptation(
        PlayerModel model)
    {
        switch (model.skillLevel)
        {
            case SkillLevel.Low:

                enemyDamageMultiplier = 0.75f;

                spawnIntervalMultiplier = 1.2f;

                currentAdaptation =
                    "Assist: lower enemy damage";

                break;

            case SkillLevel.Medium:

                currentAdaptation =
                    "Normal difficulty";

                break;

            case SkillLevel.High:

                enemyDamageMultiplier = 1.15f;

                spawnIntervalMultiplier = 0.85f;

                currentAdaptation =
                    "Challenge: stronger and faster spawning enemies";

                break;
        }
    }

    private void ApplyStyleAdaptation(
        PlayerModel model)
    {
        if (model.dominantStyle ==
            PlayStyle.Aggressive)
        {
            enemySpeedMultiplier *= 1.15f;

            currentAdaptation +=
                " | Aggressive response";
        }

        if (model.dominantStyle ==
            PlayStyle.Explorer)
        {
            if (explorerBonus != null)
            {
                explorerBonus.SetActive(true);
            }

            currentAdaptation +=
                " | Explorer bonus enabled";
        }

        if (model.dominantStyle ==
            PlayStyle.Defensive)
        {
            enemySpeedMultiplier *= 1.10f;

            currentAdaptation +=
                " | Defensive response";
        }
    }
}
```

---

# 59. Penjelasan Adaptation Policy

## Low Skill

```text
Enemy Damage ↓
Spawn Interval ↑
```

Enemy muncul lebih lambat dan damage lebih rendah.

---

## Medium Skill

```text
Normal
```

---

## High Skill

```text
Enemy Damage ↑
Spawn Interval ↓
```

Tantangan sedikit meningkat.

---

## Aggressive

```text
Enemy Speed ↑
```

Musuh lebih aktif merespons player agresif.

---

## Explorer

```text
Bonus Reward aktif
```

Game mendukung kecenderungan eksplorasi player.

---

# 60. Mengapa Adaptasi Tidak Dibuat Sangat Kuat?

Contoh yang tidak direkomendasikan:

```text
Low Skill:
enemy damage = 10%

High Skill:
enemy damage = 300%
```

Perubahan seperti ini mudah dirasakan sebagai:

```text
cheating
```

atau:

```text
punishment
```

Adaptasi sebaiknya relatif kecil dan halus.

---

# 61. Player Agency

**Player Agency** adalah kemampuan player untuk merasa bahwa:

```text
keputusan dan tindakannya tetap bermakna.
```

Adaptive Game AI sebaiknya:

```text
mendukung player
```

bukan:

```text
memaksa player mengikuti model.
```

Misalnya Player Explorer sebaiknya memperoleh kesempatan menemukan bonus.

Jangan langsung:

```text
memaksa seluruh objective menjadi exploration.
```

---

# 62. Langkah 15 — Explorer Bonus

Buat object:

```text
BonusReward
```

Letakkan di salah satu area samping arena.

Buat inactive:

```text
Inspector
→ uncheck GameObject
```

Drag ke:

```text
AdaptationManager
→ Explorer Bonus
```

Jika sistem mendeteksi:

```text
Dominant Style = Explorer
```

maka:

```text
BonusReward.SetActive(true)
```

---

# 63. Langkah 16 — Membuat Debug UI

Buat:

```text
Hierarchy
→ UI
→ Canvas
```

Kemudian:

```text
UI
→ Text - TextMeshPro
```

Jika Unity meminta:

```text
Import TMP Essentials
```

pilih:

```text
Import
```

Rename Text menjadi:

```text
PlayerModelDebugText
```

Letakkan di kiri atas.

---

# 64. PlayerModelDebugUI.cs

```csharp
using TMPro;
using UnityEngine;

public class PlayerModelDebugUI : MonoBehaviour
{
    public TMP_Text debugText;

    private void Update()
    {
        if (TelemetryManager.Instance == null ||
            PlayerModelManager.Instance == null)
            return;

        TelemetryManager t =
            TelemetryManager.Instance;

        GameplayMetrics m =
            PlayerModelManager.Instance.metrics;

        PlayerModel p =
            PlayerModelManager.Instance.model;

        string adaptation = "None";

        if (AdaptationManager.Instance != null)
        {
            adaptation =
                AdaptationManager.Instance
                .currentAdaptation;
        }

        debugText.text =
            "<b>TELEMETRY</b>\n" +
            $"Play Time: {t.playTime:F1}s\n" +
            $"Shots Fired: {t.shotsFired}\n" +
            $"Shots Hit: {t.shotsHit}\n" +
            $"Kills: {t.enemiesKilled}\n" +
            $"Damage Dealt: {t.damageDealt:F0}\n" +
            $"Damage Taken: {t.damageTaken:F0}\n" +
            $"Items: {t.itemsCollected}\n" +
            $"Zones: {t.VisitedZoneCount}/{t.totalZones}\n\n" +

            "<b>METRICS</b>\n" +
            $"Accuracy: {m.accuracy:F2}\n" +
            $"Kill Rate: {m.killRate:F2}/min\n" +
            $"Combat: {m.combatScore:F2}\n" +
            $"Survival: {m.survivalScore:F2}\n" +
            $"Exploration: {m.explorationRatio:F2}\n" +
            $"Progress: {m.progressScore:F2}\n\n" +

            "<b>PLAYER MODEL</b>\n" +
            $"Skill: {p.skillScore:F2}\n" +
            $"Skill Level: {p.skillLevel}\n" +
            $"Aggressive: {p.aggressiveScore:F2}\n" +
            $"Defensive: {p.defensiveScore:F2}\n" +
            $"Explorer: {p.explorerScore:F2}\n" +
            $"Dominant: {p.dominantStyle}\n\n" +

            "<b>ADAPTATION</b>\n" +
            adaptation;
    }
}
```

Pasang pada DebugPanel atau Canvas.

Assign:

```text
Debug Text
```

ke komponen TMP_Text.

---

# 65. Mengapa Debug UI Sangat Penting?

Player modeling sulit diuji jika mahasiswa hanya melihat gameplay.

Debug UI memperlihatkan:

```text
Input data
     ↓
Metrics
     ↓
Player model
     ↓
Adaptation
```

Mahasiswa dapat melihat langsung:

```text
Shots naik
→ Attack Frequency naik
→ Aggressive Score naik
→ Dominant Style berubah
→ Adaptation berubah
```

Ini sangat membantu pemahaman hubungan sebab-akibat.

---

# 66. Data Flow Keseluruhan

Arsitektur akhir:

```text
PLAYER ACTION
     │
     ▼
TelemetryManager
     │
     ▼
GameplayMetrics
     │
     ▼
PlayerModelManager
     │
     ├── Skill Estimation
     │
     └── Play Style Classification
     │
     ▼
PlayerModel
     │
     ▼
AdaptationManager
     │
     ├── Enemy Damage
     ├── Enemy Speed
     ├── Spawn Rate
     └── Bonus Reward
     │
     ▼
ADAPTIVE GAMEPLAY
```

---

# 67. Pembagian Tanggung Jawab Script

## TelemetryManager

Menjawab:

```text
Apa yang dilakukan Player?
```

---

## GameplayMetrics

Menjawab:

```text
Apa arti statistik dari data tersebut?
```

---

## PlayerModelManager

Menjawab:

```text
Seberapa terampil Player?

Bagaimana gaya bermain Player?
```

---

## PlayerModel

Menyimpan:

```text
representasi Player.
```

---

## AdaptationManager

Menjawab:

```text
Apa yang harus dilakukan game berdasarkan Player Model?
```

Pemisahan tanggung jawab ini penting untuk menghasilkan arsitektur program yang bersih.

---

# 68. Menguji Sistem — Test 1 Aggressive Player

Bermain dengan cara:

```text
sering menembak
aktif mengejar enemy
banyak melakukan damage
tidak banyak eksplorasi
```

Perhatikan:

```text
normalizedAttackFrequency ↑
damageDealt ↑

Aggressive Score ↑
```

Target hasil:

```text
Dominant Style:
Aggressive
```

---

# 69. Test 2 — Explorer Player

Bermain dengan:

```text
mengunjungi Zone A
mengunjungi Zone B
mengunjungi Zone C
mengunjungi Zone D

mengambil item
tidak terlalu fokus combat
```

Perhatikan:

```text
Exploration Ratio ↑
Item Collection ↑
Explorer Score ↑
```

Target:

```text
Dominant Style:
Explorer
```

Explorer bonus seharusnya aktif.

---

# 70. Test 3 — Defensive Player

Bermain:

```text
menjaga jarak
menghindari enemy
mengurangi damage received
mempertahankan health tinggi
```

Expected:

```text
Damage Avoidance ↑
Health Ratio ↑
Defensive Score ↑
```

Target:

```text
Dominant Style:
Defensive
```

---

# 71. Test 4 — Low Skill

Biarkan:

```text
sering terkena enemy
accuracy rendah
kill sedikit
```

Hasil yang diharapkan:

```text
Combat Score rendah
Survival Score turun
Skill Score turun
```

Kemudian:

```text
Skill Level = Low
```

Adaptasi:

```text
Enemy Damage ↓
Spawn lebih lambat
```

---

# 72. Test 5 — High Skill

Bermain dengan:

```text
accuracy tinggi
kill rate tinggi
health tetap tinggi
damage received rendah
```

Hasil:

```text
Skill Score ↑
```

Jika:

```text
Skill Score >= 0.70
```

maka:

```text
Skill Level = High
```

Adaptasi:

```text
Enemy Damage ↑ sedikit
Spawn lebih cepat
```

---

# 73. Cold Start Problem

Pada awal permainan hanya tersedia sedikit data.

Misalnya setelah:

```text
3 detik
```

data mungkin hanya:

```text
Shots = 2
Kills = 0
Zones = 0
```

Jika sistem langsung membuat kesimpulan, hasilnya tidak stabil.

Inilah:

## Cold Start Problem

---

# 74. Solusi Cold Start Sederhana

Tambahkan batas minimum waktu.

Pada:

```text
PlayerModelManager.cs
```

ubah awal `EvaluatePlayer()`:

```csharp
public void EvaluatePlayer()
{
    if (TelemetryManager.Instance == null ||
        playerHealth == null)
        return;

    if (TelemetryManager.Instance.playTime < 20f)
        return;

    metrics.Calculate(
        TelemetryManager.Instance,
        playerHealth
    );

    CalculateSkill();
    CalculatePlayStyle();
}
```

Dengan demikian:

```text
0 – 20 detik
```

digunakan sebagai fase pengumpulan data.

Adaptasi baru mulai setelah cukup data tersedia.

Ini **direkomendasikan**.

---

# 75. Confidence

Versi praktikum dasar tidak wajib menggunakan confidence.

Namun secara konsep dapat dibuat:

```text
Confidence
= Play Time / Minimum Reliable Time
```

Contoh:

```csharp
float confidence =
    Mathf.Clamp01(
        playTime / 60f
    );
```

Interpretasi:

```text
10 detik → confidence rendah

60 detik → confidence tinggi
```

---

# 76. Masalah Player Model Berubah Terlalu Cepat

Contoh:

```text
10 detik pertama:
Aggressive

10 detik berikutnya:
Defensive

10 detik berikutnya:
Aggressive
```

Profile menjadi tidak stabil.

Fenomena ini dapat disebut:

```text
oscillation
```

---

# 77. Solusi — Moving Average

Pengembangan lebih lanjut dapat menggunakan:

```text
New Score =
Old Score × 0.7
+
Measured Score × 0.3
```

Contoh:

```csharp
model.aggressiveScore =
    Mathf.Lerp(
        model.aggressiveScore,
        measuredAggressiveScore,
        0.3f
    );
```

`Mathf.Lerp()` dapat digunakan untuk membuat perubahan profile lebih halus.

Ini sangat direkomendasikan sebagai eksperimen lanjutan.

---

# 78. Adaptation Stability

Adaptasi sebaiknya:

```text
tidak berubah setiap frame.
```

Pada project ini digunakan:

```text
Adaptation Interval = 10 detik
```

Pilihan lain:

```text
setiap wave
setiap room
setelah objective
setelah player mati
```

Untuk game arena, interval waktu cukup sesuai.

---

# 79. Kesalahan Umum 1 — NullReferenceException

Contoh:

```text
NullReferenceException
PlayerModelManager
```

Periksa:

```text
Player Health
```

pada Inspector.

Pastikan Player sudah di-drag ke:

```text
PlayerModelManager
→ Player Health
```

---

# 80. Kesalahan Umum 2 — Shooting Tidak Mengenai Enemy

Periksa:

```text
Enemy mempunyai Collider?
Enemy mempunyai Layer = Enemy?
PlayerShooter EnemyLayer sudah di-assign?
Player menghadap Enemy?
Range cukup?
```

Gunakan:

```csharp
Debug.DrawRay()
```

dan lihat pada Scene View.

---

# 81. Kesalahan Umum 3 — Zone Tidak Terdeteksi

Periksa:

```text
Zone mempunyai Collider?
Is Trigger aktif?
Player Tag = Player?
```

Jika trigger tidak bekerja karena konfigurasi physics tertentu, tambahkan Rigidbody kinematic pada trigger object:

```text
Rigidbody
Use Gravity = false
Is Kinematic = true
```

---

# 82. Kesalahan Umum 4 — Enemy Tidak Spawn

Periksa:

```text
Enemy Prefab sudah di-assign?
Spawn Points sudah masuk array?
Enemy memiliki Tag Enemy?
Maximum enemy belum tercapai?
```

---

# 83. Kesalahan Umum 5 — Skill Selalu Rendah

Periksa nilai baseline:

```text
expectedKillRate
expectedDamage
expectedItems
targetSurvivalTime
```

Jika baseline tidak sesuai dengan gameplay, hasil metric juga tidak sesuai.

Ini menunjukkan bahwa player modeling memerlukan:

```text
calibration
```

---

# 84. Calibration

Calibration adalah proses menyesuaikan parameter model agar cocok dengan gameplay.

Contoh:

```text
Expected Kill Rate = 4
```

tetapi pada game sebenarnya Player normal hanya dapat:

```text
1 kill/menit
```

Maka hampir seluruh Player akan terlihat buruk.

Parameter seharusnya dikalibrasi berdasarkan hasil pengujian.

---

# 85. Eksperimen Mahasiswa 1

Ubah:

```csharp
expectedKillRate
```

dari:

```text
4
```

menjadi:

```text
2
```

Bandingkan:

```text
Normalized Kill Rate
Combat Score
Skill Score
```

Tuliskan pengaruhnya.

---

# 86. Eksperimen Mahasiswa 2

Ubah rumus:

```text
Combat Score
```

dari:

```text
60% Accuracy
40% Kill Rate
```

menjadi:

```text
30% Accuracy
70% Kill Rate
```

Pertanyaan:

> Player seperti apa yang sekarang lebih mudah memperoleh Combat Score tinggi?

---

# 87. Eksperimen Mahasiswa 3

Ubah interval:

```text
10 detik
```

menjadi:

```text
2 detik
```

Kemudian bandingkan kestabilan Player Model.

Pertanyaan:

> Apakah model menjadi lebih responsif atau justru terlalu mudah berubah?

---

# 88. Eksperimen Mahasiswa 4

Tambahkan style:

```text
Risk-Taker
```

Data yang dapat digunakan:

```text
Damage Taken
Health Ratio
Attack Frequency
```

Contoh rule:

```text
Attack tinggi
+
Damage Taken tinggi
+
Health rendah

→ Risk Score tinggi
```

---

# 89. Eksperimen Mahasiswa 5

Tambahkan:

```text
Player Profile JSON
```

Tujuannya:

```text
menyimpan hasil profile setelah sesi permainan.
```

Contoh informasi:

```json
{
  "skillScore": 0.68,
  "skillLevel": "Medium",
  "aggressiveScore": 0.74,
  "defensiveScore": 0.31,
  "explorerScore": 0.54,
  "dominantStyle": "Aggressive"
}
```

Ini dapat menjadi pengembangan untuk profile jangka panjang.

---

# 90. Praktikum Minimum yang Wajib Berhasil

Mahasiswa minimal harus menghasilkan:

- [ ] Player dapat bergerak.
- [ ] Player dapat menyerang.
- [ ] Enemy dapat mengejar Player.
- [ ] Enemy dapat menerima damage.
- [ ] Enemy dapat mati.
- [ ] Shots Fired tercatat.
- [ ] Shots Hit tercatat.
- [ ] Kill tercatat.
- [ ] Damage Taken tercatat.
- [ ] Zone visited tercatat.
- [ ] Item collected tercatat.
- [ ] Accuracy dihitung.
- [ ] Combat Score dihitung.
- [ ] Survival Score dihitung.
- [ ] Exploration Ratio dihitung.
- [ ] Skill Score dihitung.
- [ ] Skill Level ditentukan.
- [ ] Aggressive Score dihitung.
- [ ] Defensive Score dihitung.
- [ ] Explorer Score dihitung.
- [ ] Dominant Style ditentukan.
- [ ] Player Profile tampil di UI.
- [ ] Minimal satu adaptasi gameplay bekerja.

---

# 91. Challenge Tambahan

Untuk mahasiswa yang menyelesaikan bagian wajib lebih cepat:

### Challenge 1

Tambahkan:

```text
Risk Score
```

### Challenge 2

Tambahkan:

```text
Moving Average
```

untuk menstabilkan model.

### Challenge 3

Simpan profile:

```text
JSON
```

### Challenge 4

Buat grafik perubahan:

```text
Skill Score terhadap waktu
```

### Challenge 5

Integrasikan dengan DDA Praktikum 11.

### Challenge 6

Hubungkan player profile dengan Utility AI dari Praktikum 6.

---

# 92. Hubungan dengan Utility AI

Misalnya:

```text
Dominant Style = Aggressive
```

maka enemy dapat mengubah:

```text
TakeCover Weight ↑
MaintainDistance Weight ↑
```

Jika:

```text
Dominant Style = Defensive
```

maka:

```text
Flank Weight ↑
Approach Weight ↑
```

Dengan demikian Player Model menjadi input bagi AI decision system.

---

# 93. Hubungan dengan PCG

Player model juga dapat digunakan oleh Procedural Content Generation.

Contoh:

```text
Explorer
→ Optional Room ↑
→ Collectible ↑

Aggressive
→ Combat Room ↑

Low Skill
→ Trap ↓
→ Health Item ↑

High Skill
→ Elite Enemy ↑
```

Ini menghubungkan praktikum Player Modeling dengan Praktikum 9 dan Praktikum 10.

---

# 94. Hubungan dengan DDA

DDA dapat dianggap sebagai salah satu bentuk adaptation policy.

```text
Telemetry
     ↓
Player Model
     ↓
Skill Estimation
     ↓
DDA
```

Contoh:

```text
Skill = Low
→ Difficulty ↓

Skill = High
→ Difficulty ↑
```

Tetapi Player Modeling lebih luas karena juga menyimpan:

```text
Play Style
Exploration Preference
Risk Preference
```

---

# 95. Rekomendasi Implementasi Terbaik

Untuk Praktikum 12, implementasi yang paling disarankan adalah:

## Core

```text
TelemetryManager
GameplayMetrics
PlayerModel
PlayerModelManager
Debug UI
```

## Metrics

Gunakan empat kelompok:

```text
Combat
Survival
Exploration
Progress
```

## Player Model

Gunakan:

```text
Skill:
Low / Medium / High

Style:
Aggressive
Defensive
Explorer
```

## Adaptation

Gunakan maksimal dua mekanisme utama:

```text
Skill
→ enemy damage / spawn rate

Play Style
→ enemy response / explorer reward
```

Model ini cukup sederhana untuk dipahami mahasiswa tetapi tetap menunjukkan siklus Adaptive Game AI secara lengkap.

---

# 96. Mengapa Tidak Langsung Menggunakan Machine Learning?

Pada praktikum ini metode:

```text
Rule-Based
+
Score-Based
```

lebih direkomendasikan.

Alasannya:

1. setiap keputusan dapat dijelaskan;
2. mahasiswa dapat melihat hubungan metric dengan profile;
3. debugging jauh lebih mudah;
4. tidak membutuhkan dataset;
5. tidak membutuhkan training;
6. sesuai untuk memahami fondasi Player Modeling.

Machine Learning akan lebih tepat diperkenalkan setelah mahasiswa memahami:

```text
State
Data
Features
Metrics
Classification
Decision
```

yang menjadi fondasi menuju materi Pertemuan 13.

---

# 97. Pertanyaan Evaluasi Praktikum

1. Apa perbedaan telemetry dan metrics?
2. Mengapa telemetry merupakan data mentah?
3. Mengapa metric harus dinormalisasi?
4. Apa fungsi `Mathf.Clamp01()`?
5. Apa perbedaan skill dan play style?
6. Mengapa Player agresif belum tentu mempunyai skill rendah?
7. Mengapa Player Model tidak sebaiknya diperbarui setiap frame?
8. Apa fungsi evaluation window?
9. Apa itu cold start?
10. Mengapa adaptation policy perlu dipisahkan dari Player Model?
11. Apa fungsi `TelemetryManager`?
12. Apa fungsi `GameplayMetrics`?
13. Apa fungsi `PlayerModelManager`?
14. Apa fungsi `AdaptationManager`?
15. Mengapa debug UI penting?
16. Mengapa baseline metric perlu dikalibrasi?
17. Apa masalah jika adaptasi terlalu kuat?
18. Apa yang dimaksud player agency?
19. Bagaimana Player Model dapat digunakan oleh Utility AI?
20. Bagaimana Player Model dapat digunakan oleh PCG?

---

# 98. Tugas Analisis

Lakukan tiga sesi permainan:

```text
Session A
Bermain Aggressive

Session B
Bermain Defensive

Session C
Bermain Explorer
```

Catat:

| Metric | Aggressive | Defensive | Explorer |
|---|---:|---:|---:|
| Accuracy | | | |
| Kill Rate | | | |
| Damage Taken | | | |
| Exploration Ratio | | | |
| Item Score | | | |
| Skill Score | | | |
| Aggressive Score | | | |
| Defensive Score | | | |
| Explorer Score | | | |
| Dominant Style | | | |

Kemudian analisis:

1. Apakah classification sesuai dengan cara bermain?
2. Metric mana yang paling memengaruhi classification?
3. Apakah skill level sesuai pengamatan?
4. Apakah terdapat classification yang tidak masuk akal?
5. Parameter apa yang perlu diperbaiki?

---

# 99. Tugas Pengembangan

Pilih minimal satu:

```text
A. Menambahkan Risk-Taker Score

B. Menambahkan Moving Average

C. Menyimpan Player Profile ke JSON

D. Menambahkan adaptasi berdasarkan Explorer

E. Menghubungkan Skill Score dengan DDA

F. Menambahkan grafik Player Model

G. Menambahkan confidence score
```

---

# 100. Kesimpulan Praktikum

Pada praktikum ini dibangun sistem:

```text
Player
   ↓
Gameplay Activity
   ↓
Telemetry
   ↓
Metrics
   ↓
Skill Estimation
   ↓
Play Style Classification
   ↓
Player Profile
   ↓
Adaptation Policy
   ↓
Adaptive Game AI
```

Mahasiswa tidak hanya membuat game yang bereaksi terhadap kondisi dunia game.

Game mulai mempunyai kemampuan untuk:

> **mengamati pola perilaku player, membentuk representasi sederhana tentang player, dan menyesuaikan gameplay berdasarkan representasi tersebut.**

Inilah konsep inti:

# Player Modeling & Adaptive Game AI

---

# 101. Catatan Penting untuk Pengajar

Praktikum ini sebaiknya tidak dinilai berdasarkan apakah classifier selalu menghasilkan kategori yang "benar".

Justru diskusi terpenting berada pada:

```text
Mengapa sistem membuat kesimpulan tersebut?
```

Mahasiswa perlu memahami bahwa:

```text
Player Model
≠ fakta absolut tentang Player
```

melainkan:

```text
Player Model
=
estimasi berdasarkan telemetry,
metrics,
baseline,
formula,
dan aturan yang dirancang developer.
```

Karena itu kualitas Player Modeling sangat bergantung pada:

- pemilihan telemetry;
- relevansi metrics;
- normalisasi;
- weighting;
- evaluation window;
- calibration;
- stability;
- dan adaptation policy.

---

# 102. Rekomendasi Final Praktikum 12

## Nama Project

```text
GC12_AdaptivePlayerModeling
```

## Nama Scene

```text
PlayerModelingDemo
```

## Game

```text
Adaptive Arena Survival
```

## Model

```text
Rule-Based + Score-Based Player Modeling
```

## Skill

```text
Low
Medium
High
```

## Play Style

```text
Aggressive
Defensive
Explorer
```

## Metrics Minimum

```text
Accuracy
Kill Rate
Damage Taken
Health Ratio
Exploration Ratio
Item Collection
Attack Frequency
Progress
```

## Adaptasi Utama

```text
Skill
→ Enemy Damage + Spawn Rate

Play Style
→ Enemy Response + Explorer Reward
```

### Pilihan ini paling direkomendasikan

karena mencakup seluruh siklus Player Modeling tetapi masih cukup sederhana untuk diimplementasikan dan di-debug oleh mahasiswa dalam Unity 6.

---

# 103. Hasil Akhir yang Diharapkan

Saat game dijalankan, UI kira-kira menampilkan:

```text
TELEMETRY
Play Time       : 87.5 s
Shots Fired     : 42
Shots Hit       : 29
Kills           : 7
Damage Dealt    : 315
Damage Taken    : 63
Items           : 2
Zones           : 3 / 4

METRICS
Accuracy        : 0.69
Kill Rate       : 4.80/min
Combat          : 0.81
Survival        : 0.68
Exploration     : 0.75
Progress        : 0.73

PLAYER MODEL
Skill Score     : 0.72
Skill Level     : High

Aggressive      : 0.78
Defensive       : 0.53
Explorer        : 0.66

Dominant Style  : Aggressive

ADAPTATION
Challenge: stronger and faster spawning enemies
| Aggressive response
```

Dengan demikian mahasiswa dapat mengamati secara langsung:

```text
cara bermain
      ↓
mengubah telemetry
      ↓
mengubah metrics
      ↓
mengubah Player Model
      ↓
mengubah gameplay
```

Itulah tujuan utama Praktikum 12.