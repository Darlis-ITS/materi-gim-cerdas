# MODUL PRAKTIKUM 09  
# PROCEDURAL CONTENT GENERATION (PCG)
## Seeded, Controlled, Weighted & Validated Procedural Spawning

**Mata Kuliah:** Game Cerdas  
**Program Studi:** S1 Teknik Informatika  
**Semester:** 7  
**Engine:** Unity 6  
**Bahasa Pemrograman:** C#  

---

# 1. Identitas Praktikum

## Nama Praktikum

**Procedural Content Generation — Smart Procedural Spawning**

## Nama Project Unity

```text
GameCerdas_P09_PCG_SmartSpawner
```

## Nama Scene

```text
PCG_SpawnArena
```

## Topik Utama

Praktikum ini mempelajari:

- Procedural Content Generation,
- randomness,
- controlled randomness,
- seed,
- reproducibility,
- procedural spawning,
- prefab,
- weighted random,
- probability,
- spawn area,
- spawn validation,
- Layer dan LayerMask,
- Physics.CheckSphere,
- minimum spawn distance,
- maximum generation attempts,
- parameter tuning,
- debug visualization.

---

# 2. Posisi Praktikum dalam Mata Kuliah

Pada praktikum sebelumnya mahasiswa lebih banyak membangun **AI untuk agent atau NPC**:

```text
Praktikum 1 : Perception
Praktikum 2 : Sensor + Memory + Decision
Praktikum 3 : Movement AI & Steering
Praktikum 4 : Pathfinding & Navigation
Praktikum 5 : Finite State Machine
Praktikum 6 : Behavior Tree & Utility AI
Praktikum 7 : Tactical AI Integration
Praktikum 8 : UTS / Mini Project
```

Pada Praktikum 9 fokus mulai bergeser dari:

```text
AI yang mengendalikan agent
```

menjadi:

```text
algoritma yang menghasilkan content game
```

Inilah konsep dasar:

```text
Procedural Content Generation
```

Praktikum ini sengaja **tidak langsung membuat procedural dungeon yang kompleks**, karena teknik:

- random walk,
- BSP,
- cellular automata,
- dungeon generation,
- constraint-based level generation,

lebih tepat diperdalam pada Pertemuan 10.

---

# 3. Tujuan Praktikum

Setelah menyelesaikan praktikum ini, mahasiswa diharapkan mampu:

1. Menjelaskan konsep Procedural Content Generation.
2. Membedakan random biasa dan controlled randomness.
3. Menggunakan `Random.Range()`.
4. Menggunakan seed dengan `Random.InitState()`.
5. Menjelaskan reproducibility.
6. Membuat spawn area procedural.
7. Membuat sistem procedural spawning.
8. Menggunakan prefab sebagai template content.
9. Menggunakan Layer dan LayerMask untuk filtering physics.
10. Menggunakan `Physics.CheckSphere()` untuk mengecek posisi spawn.
11. Menghindari spawn terlalu dekat dengan player.
12. Menghindari spawn di dalam obstacle.
13. Menghindari object procedural saling bertumpuk.
14. Mengimplementasikan weighted random.
15. Menggunakan `maxAttempts` sebagai pengaman algoritma.
16. Membuat parameter PCG dapat diatur melalui Inspector.
17. Membandingkan hasil generation menggunakan seed berbeda.
18. Melakukan debugging terhadap sistem procedural.

---

# 4. Gambaran Hasil Akhir

Setelah praktikum selesai, scene akan memiliki struktur seperti berikut:

```text
PCG_SpawnArena
│
├── Main Camera
├── Directional Light
│
├── Environment
│   ├── Ground
│   ├── Obstacle_01
│   ├── Obstacle_02
│   ├── Obstacle_03
│   └── Obstacle_04
│
├── Player
│
├── PCGManager
│
└── GeneratedObjects
    ├── Enemy...
    └── Item...
```

Ketika game dijalankan:

```text
PCGManager
     ↓
Initialize Seed
     ↓
Generate Enemy
     ↓
Generate Item
     ↓
Random Position
     ↓
Validation
     ├── terlalu dekat player? → gagal
     ├── mengenai obstacle? → gagal
     ├── terlalu dekat object lain? → gagal
     └── valid → Instantiate
```

---

# 5. Konsep Dasar PCG

Procedural Content Generation adalah proses menghasilkan content game menggunakan:

```text
Algorithm
+
Parameter
+
Randomness
+
Rules
+
Constraints
```

Contoh content yang dapat dihasilkan secara procedural:

- enemy,
- item,
- collectible,
- obstacle,
- vegetation,
- dungeon,
- terrain,
- quest,
- loot,
- level,
- decoration.

Pada praktikum ini content yang dihasilkan adalah:

```text
Enemy
dan
Item
```

---

# 6. PCG Bukan Random Murni

Misalnya kita membuat posisi:

```csharp
float x = Random.Range(-10f, 10f);
float z = Random.Range(-10f, 10f);
```

Secara teknis kita sudah mendapatkan posisi random.

Tetapi posisi tersebut mungkin:

- berada di dalam tembok,
- terlalu dekat player,
- berada di atas object lain,
- berada di luar area yang diinginkan.

Maka:

```text
Random Position
```

belum cukup.

PCG yang lebih baik menggunakan:

```text
Random Position
       +
Validation
       +
Constraint
```

---

# 7. Controlled Randomness

Pada praktikum ini kita menerapkan beberapa aturan.

## Aturan 1

Enemy tidak boleh muncul terlalu dekat dengan player.

```text
distance(spawn, player)
>=
minimumPlayerDistance
```

---

## Aturan 2

Enemy atau item tidak boleh berada di dalam obstacle.

Digunakan:

```csharp
Physics.CheckSphere()
```

---

## Aturan 3

Object procedural tidak boleh terlalu dekat dengan object procedural sebelumnya.

Digunakan:

```text
minimumSpacing
```

---

## Aturan 4

Pencarian posisi tidak boleh dilakukan tanpa batas.

Digunakan:

```text
maxAttemptsPerObject
```

---

# 8. Seed dan Reproducibility

Seed adalah nilai awal untuk generator pseudo-random.

Contoh:

```text
Seed = 12345
```

Jika:

- seed sama,
- urutan pemanggilan random sama,
- parameter sama,

maka hasil random dapat direproduksi.

Contoh:

```text
Seed 100
→ Layout A

Seed 200
→ Layout B

Seed 100
→ Layout A kembali
```

Hal ini sangat berguna untuk:

- debugging,
- testing,
- reproduksi bug,
- challenge seed,
- sharing procedural configuration.

Unity 6 menyediakan `Random.InitState(int seed)` untuk menginisialisasi state generator pseudo-random. Dokumentasi resmi Unity juga menjelaskan bahwa seed tertentu dapat digunakan untuk menghasilkan kembali pola pseudo-random yang sama.

---

# 9. Random.Range()

Unity menyediakan:

```csharp
Random.Range(min, max);
```

Contoh:

```csharp
float x = Random.Range(-10f, 10f);
```

dan:

```csharp
int index = Random.Range(0, 5);
```

Catatan penting:

### Integer

```csharp
Random.Range(0, 5)
```

menghasilkan:

```text
0
1
2
3
4
```

### Float

```csharp
Random.Range(0f, 5f)
```

menghasilkan nilai floating point pada rentang yang diberikan. Perbedaan perilaku batas integer dan float ini didokumentasikan pada Unity Scripting API.

---

# 10. Istilah Teknis Unity yang Digunakan

Sebelum implementasi, mahasiswa perlu memahami beberapa istilah berikut.

---

## 10.1 GameObject

`GameObject` adalah object dasar dalam sebuah Unity Scene.

Contoh:

```text
Player
Enemy
Camera
Light
Ground
Obstacle
```

GameObject menjadi container bagi berbagai Component.

---

## 10.2 Component

Component memberikan kemampuan kepada GameObject.

Contoh:

```text
Transform
Mesh Renderer
Collider
Rigidbody
Character Controller
Script
```

Contoh:

```text
Enemy
├── Transform
├── Mesh Renderer
├── Capsule Collider
└── EnemyAI.cs
```

---

## 10.3 Transform

Semua GameObject memiliki `Transform`.

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

---

## 10.4 Prefab

Prefab adalah template GameObject yang dapat digunakan kembali.

Contoh:

```text
Enemy_Red.prefab
Enemy_Blue.prefab
HealthPotion.prefab
Coin.prefab
```

PCG sangat sering menggunakan prefab karena algoritma dapat membuat object menggunakan:

```csharp
Instantiate(prefab);
```

`Instantiate` membuat salinan object/prefab pada runtime.

---

## 10.5 Collider

Collider menentukan area fisik object.

Contoh:

```text
Box Collider
Sphere Collider
Capsule Collider
Mesh Collider
```

Collider diperlukan agar Physics System mengetahui keberadaan object.

---

## 10.6 Layer

Layer adalah kategori GameObject.

Contoh:

```text
Default
Player
Obstacle
Enemy
Item
```

Layer terutama berguna untuk:

- collision filtering,
- raycast filtering,
- physics query filtering,
- camera culling.

Pada praktikum ini kita menggunakan layer:

```text
Obstacle
```

---

## 10.7 LayerMask

`LayerMask` digunakan script untuk memilih layer mana yang akan diperiksa.

Contoh:

```csharp
[SerializeField]
private LayerMask obstacleMask;
```

Di Inspector kita dapat menentukan bahwa:

```text
obstacleMask = Obstacle
```

---

## 10.8 SerializeField

Field:

```csharp
[SerializeField]
private float spawnRadius;
```

tetap `private`, tetapi dapat ditampilkan di Inspector.

Ini sangat berguna pada PCG karena parameter harus mudah di-tuning oleh designer.

---

## 10.9 Inspector

Inspector adalah panel Unity Editor untuk melihat dan mengubah:

- Transform,
- Component,
- Script parameter,
- Collider,
- Material,
- Layer,
- Tag.

PCG sebaiknya memiliki parameter generation pada Inspector agar mahasiswa dapat melakukan eksperimen tanpa mengubah source code.

---

## 10.10 Physics.CheckSphere

Digunakan untuk mengetahui apakah sebuah sphere virtual bertabrakan/overlap dengan Collider tertentu.

Contoh:

```csharp
bool blocked = Physics.CheckSphere(
    position,
    checkRadius,
    obstacleMask
);
```

Jika:

```text
blocked = true
```

berarti posisi tersebut tidak boleh digunakan.

Unity mendefinisikan `Physics.CheckSphere` sebagai physics query untuk memeriksa apakah ada collider yang overlap dengan sphere tertentu.

---

## 10.11 Instantiate

Digunakan untuk membuat instance GameObject saat game berjalan.

```csharp
Instantiate(
    enemyPrefab,
    spawnPosition,
    Quaternion.identity
);
```

---

## 10.12 Quaternion.identity

```csharp
Quaternion.identity
```

berarti object dibuat tanpa rotasi tambahan.

Secara sederhana:

```text
rotation = default
```

---

## 10.13 Gizmos

Gizmos adalah visual debugging di Scene View.

Dapat digunakan untuk menggambar:

- spawn area,
- detection radius,
- safe zone,
- waypoint,
- collider approximation.

Gizmos membantu developer memahami algoritma tanpa menjadi bagian visual final game.

---

# 11. Algoritma yang Akan Dibuat

Pseudocode utama:

```text
SET seed

FOR setiap enemy:
    attempt = 0

    WHILE attempt < maxAttempts:
        generate random position

        IF terlalu dekat player:
            reject

        ELSE IF mengenai obstacle:
            reject

        ELSE IF terlalu dekat object sebelumnya:
            reject

        ELSE:
            pilih enemy dengan weighted random
            spawn enemy
            simpan posisi
            selesai

        attempt++
```

Kemudian algoritma yang sama digunakan untuk item.

---

# 12. Persiapan Project Unity

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

Untuk praktikum ini **Universal 3D direkomendasikan** jika ingin hasil visual lebih menarik.

Nama project:

```text
GameCerdas_P09_PCG_SmartSpawner
```

Klik:

```text
Create Project
```

---

# 13. Membuat Struktur Folder

Pada panel Project:

```text
Assets
```

buat folder:

```text
Assets
│
├── Materials
├── Prefabs
│   ├── Enemies
│   └── Items
│
├── Scenes
├── Scripts
│
└── Settings
```

Tujuan:

- asset lebih rapi,
- prefab mudah ditemukan,
- script tidak bercampur,
- project mudah dikembangkan.

---

# 14. Menyimpan Scene

Simpan scene melalui:

```text
File
→ Save As
```

Nama:

```text
PCG_SpawnArena
```

Lokasi:

```text
Assets/Scenes/
```

---

# 15. Membuat Arena

## Langkah 1 — Ground

Pilih:

```text
Hierarchy
→ Create
→ 3D Object
→ Plane
```

Rename:

```text
Ground
```

Atur:

```text
Position
X = 0
Y = 0
Z = 0

Scale
X = 3
Y = 1
Z = 3
```

Plane default memiliki ukuran cukup besar setelah scale tersebut untuk arena praktikum.

---

# 16. Membuat Material Ground

Di:

```text
Assets/Materials
```

buat:

```text
M_Ground
```

Berikan warna sesuai keinginan.

Drag material ke:

```text
Ground
```

---

# 17. Membuat Player

Pilih:

```text
Hierarchy
→ 3D Object
→ Capsule
```

Rename:

```text
Player
```

Set posisi:

```text
Position
X = 0
Y = 1
Z = 0
```

---

# 18. Membuat Layer Player

Pilih GameObject:

```text
Player
```

Pada Inspector:

```text
Layer
→ Add Layer
```

Tambahkan:

```text
Player
Obstacle
```

Kembali pilih Player.

Set:

```text
Layer = Player
```

---

# 19. Membuat Player Material

Buat:

```text
M_Player
```

Berikan warna yang mudah dibedakan dari enemy.

Assign ke Player.

---

# 20. Membuat Player Controller

Agar praktikum dapat dijalankan secara mandiri, kita membuat controller sederhana.

Tambahkan:

```text
Character Controller
```

pada Player.

Kemudian buat script:

```text
SimplePlayerController.cs
```

di:

```text
Assets/Scripts/
```

Isi:

```csharp
using UnityEngine;

[RequireComponent(typeof(CharacterController))]
public class SimplePlayerController : MonoBehaviour
{
    [SerializeField] private float moveSpeed = 5f;

    private CharacterController controller;

    private void Awake()
    {
        controller = GetComponent<CharacterController>();
    }

    private void Update()
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

---

# 21. Fungsi Player Controller

Bagian:

```csharp
Input.GetAxisRaw("Horizontal")
```

membaca input horizontal.

Umumnya:

```text
A / Left Arrow  → -1
D / Right Arrow → 1
```

Sedangkan:

```csharp
Input.GetAxisRaw("Vertical")
```

umumnya:

```text
S / Down Arrow → -1
W / Up Arrow   → 1
```

---

## Catatan Input System

Jika project Unity menggunakan konfigurasi Input System baru dan script legacy Input Manager tidak aktif, atur Input Handling project sesuai konfigurasi praktikum atau gunakan controller dari praktikum sebelumnya.

Tujuan controller pada modul ini hanya agar Player dapat dipindah untuk mengamati safe spawn radius.

---

# 22. Membuat Obstacle

Buat:

```text
Hierarchy
→ 3D Object
→ Cube
```

Rename:

```text
Obstacle_01
```

Contoh posisi:

```text
X = 5
Y = 1
Z = 5
```

Scale:

```text
X = 3
Y = 2
Z = 1
```

---

# 23. Layer Obstacle

Set:

```text
Layer = Obstacle
```

Pastikan Cube memiliki:

```text
Box Collider
```

Tanpa Collider:

```text
Physics.CheckSphere
```

tidak dapat mendeteksi obstacle tersebut sebagai collider.

---

# 24. Duplikasi Obstacle

Buat beberapa obstacle.

Contoh:

```text
Obstacle_01 → ( 5, 1,  5)
Obstacle_02 → (-6, 1,  4)
Obstacle_03 → ( 5, 1, -6)
Obstacle_04 → (-4, 1, -5)
```

Silakan ubah ukuran masing-masing obstacle.

Tujuannya membuat arena memiliki area yang tidak boleh digunakan sebagai spawn point.

---

# 25. Struktur Environment

Buat Empty GameObject:

```text
Environment
```

Masukkan:

```text
Ground
Obstacle_01
Obstacle_02
Obstacle_03
Obstacle_04
```

menjadi child.

Hierarchy:

```text
Environment
├── Ground
├── Obstacle_01
├── Obstacle_02
├── Obstacle_03
└── Obstacle_04
```

---

# 26. Membuat Enemy Prefab Pertama

Buat:

```text
3D Object
→ Capsule
```

Rename:

```text
Enemy_Red
```

Atur ukuran misalnya:

```text
Scale
X = 0.8
Y = 0.8
Z = 0.8
```

Tambahkan material:

```text
M_Enemy_Red
```

---

# 27. Membuat Prefab

Drag:

```text
Enemy_Red
```

dari Hierarchy menuju:

```text
Assets/Prefabs/Enemies/
```

Sekarang GameObject tersebut menjadi prefab.

Hapus Enemy_Red dari scene.

---

# 28. Membuat Enemy Lain

Duplicate prefab atau buat object baru:

```text
Enemy_Blue
Enemy_Yellow
```

Gunakan material berbeda agar hasil weighted random mudah diamati.

Hasil:

```text
Prefabs/Enemies
├── Enemy_Red.prefab
├── Enemy_Blue.prefab
└── Enemy_Yellow.prefab
```

---

# 29. Membuat Item Prefab

Buat beberapa object sederhana.

Contoh:

```text
Item_Coin
Item_Health
Item_Rare
```

Bentuk dapat menggunakan:

```text
Sphere
Cube
Cylinder
```

Simpan sebagai prefab di:

```text
Assets/Prefabs/Items/
```

---

# 30. Konsep Weighted Random

Kita tidak ingin semua prefab memiliki kemungkinan sama.

Misalnya:

```text
Enemy             Weight

Enemy_Red          60
Enemy_Blue         30
Enemy_Yellow       10
```

Artinya secara statistik:

```text
Red lebih sering muncul
Blue lebih jarang
Yellow paling jarang
```

Ini disebut:

```text
Weighted Random
```

---

# 31. Membuat GeneratedObjects

Pada Hierarchy:

```text
Create Empty
```

Rename:

```text
GeneratedObjects
```

Tujuan:

semua object procedural menjadi child object ini.

Keuntungan:

- Hierarchy lebih rapi,
- object procedural mudah dihapus,
- mudah melakukan regenerate.

---

# 32. Membuat PCGManager

Buat Empty GameObject:

```text
PCGManager
```

Reset Transform:

```text
Position = (0,0,0)
Rotation = (0,0,0)
Scale    = (1,1,1)
```

---

# 33. Membuat Script Utama

Buat:

```text
Assets/Scripts/PCGSpawner.cs
```

Script ini menjadi inti praktikum.

---

# 34. Script PCGSpawner Lengkap

```csharp
using System.Collections.Generic;
using UnityEngine;

public class PCGSpawner : MonoBehaviour
{
    [System.Serializable]
    public class SpawnEntry
    {
        public string name;
        public GameObject prefab;

        [Min(0)]
        public int weight = 1;
    }

    [Header("Seed")]
    [SerializeField]
    private bool useRandomSeed = false;

    [SerializeField]
    private int seed = 12345;


    [Header("References")]
    [SerializeField]
    private Transform player;

    [SerializeField]
    private Transform generatedRoot;


    [Header("Spawn Area")]
    [SerializeField]
    private Vector2 spawnAreaSize =
        new Vector2(24f, 24f);

    [SerializeField]
    private float spawnY = 0.5f;


    [Header("Spawn Counts")]
    [SerializeField]
    private int enemyCount = 12;

    [SerializeField]
    private int itemCount = 8;


    [Header("Validation")]
    [SerializeField]
    private float minDistanceFromPlayer = 5f;

    [SerializeField]
    private float checkRadius = 0.75f;

    [SerializeField]
    private float minimumSpacing = 1.5f;

    [SerializeField]
    private LayerMask obstacleMask;

    [SerializeField]
    private int maxAttemptsPerObject = 50;


    [Header("Enemy Weighted Table")]
    [SerializeField]
    private SpawnEntry[] enemyEntries;


    [Header("Item Weighted Table")]
    [SerializeField]
    private SpawnEntry[] itemEntries;


    [Header("Runtime Debug")]
    [SerializeField]
    private int currentSeed;

    [SerializeField]
    private int successfulEnemySpawns;

    [SerializeField]
    private int successfulItemSpawns;

    [SerializeField]
    private int rejectedPositions;


    private readonly List<Vector3> usedPositions =
        new List<Vector3>();


    private void Start()
    {
        Generate();
    }


    private void Update()
    {
        if (Input.GetKeyDown(KeyCode.R))
        {
            Generate();
        }
    }


    public void Generate()
    {
        ClearGeneratedObjects();

        usedPositions.Clear();

        successfulEnemySpawns = 0;
        successfulItemSpawns = 0;
        rejectedPositions = 0;


        if (useRandomSeed)
        {
            seed = System.Environment.TickCount;
        }

        currentSeed = seed;

        Random.InitState(currentSeed);


        SpawnGroup(
            enemyEntries,
            enemyCount,
            true
        );

        SpawnGroup(
            itemEntries,
            itemCount,
            false
        );


        Debug.Log(
            $"PCG Generation Complete | " +
            $"Seed: {currentSeed} | " +
            $"Enemies: {successfulEnemySpawns}/{enemyCount} | " +
            $"Items: {successfulItemSpawns}/{itemCount} | " +
            $"Rejected Positions: {rejectedPositions}"
        );
    }


    private void SpawnGroup(
        SpawnEntry[] entries,
        int count,
        bool enemyGroup)
    {
        if (entries == null || entries.Length == 0)
        {
            Debug.LogWarning(
                "Spawn table kosong."
            );

            return;
        }


        for (int i = 0; i < count; i++)
        {
            bool spawned = false;


            for (
                int attempt = 0;
                attempt < maxAttemptsPerObject;
                attempt++)
            {
                Vector3 candidate =
                    GenerateRandomPosition();


                if (!IsPositionValid(candidate))
                {
                    rejectedPositions++;
                    continue;
                }


                GameObject selectedPrefab =
                    SelectWeightedPrefab(entries);


                if (selectedPrefab == null)
                {
                    Debug.LogWarning(
                        "Tidak ada prefab valid pada weighted table."
                    );

                    return;
                }


                GameObject spawnedObject =
                    Instantiate(
                        selectedPrefab,
                        candidate,
                        Quaternion.identity,
                        generatedRoot
                    );


                spawnedObject.name =
                    $"{selectedPrefab.name}_Generated_{i}";


                usedPositions.Add(candidate);


                if (enemyGroup)
                {
                    successfulEnemySpawns++;
                }
                else
                {
                    successfulItemSpawns++;
                }


                spawned = true;
                break;
            }


            if (!spawned)
            {
                Debug.LogWarning(
                    $"Gagal spawn object ke-{i}. " +
                    $"Tidak menemukan posisi valid setelah " +
                    $"{maxAttemptsPerObject} percobaan."
                );
            }
        }
    }


    private Vector3 GenerateRandomPosition()
    {
        float halfWidth =
            spawnAreaSize.x * 0.5f;

        float halfDepth =
            spawnAreaSize.y * 0.5f;


        float randomX =
            Random.Range(-halfWidth, halfWidth);

        float randomZ =
            Random.Range(-halfDepth, halfDepth);


        return transform.position +
            new Vector3(
                randomX,
                spawnY,
                randomZ
            );
    }


    private bool IsPositionValid(
        Vector3 candidate)
    {
        // Rule 1:
        // Jangan spawn terlalu dekat dengan player.
        if (player != null)
        {
            Vector3 playerFlat =
                new Vector3(
                    player.position.x,
                    candidate.y,
                    player.position.z
                );


            float distanceToPlayer =
                Vector3.Distance(
                    candidate,
                    playerFlat
                );


            if (distanceToPlayer <
                minDistanceFromPlayer)
            {
                return false;
            }
        }


        // Rule 2:
        // Jangan spawn di dalam obstacle.
        bool blocked =
            Physics.CheckSphere(
                candidate,
                checkRadius,
                obstacleMask,
                QueryTriggerInteraction.Ignore
            );


        if (blocked)
        {
            return false;
        }


        // Rule 3:
        // Jangan terlalu dekat dengan
        // procedural object sebelumnya.
        for (
            int i = 0;
            i < usedPositions.Count;
            i++)
        {
            float distance =
                Vector3.Distance(
                    candidate,
                    usedPositions[i]
                );


            if (distance < minimumSpacing)
            {
                return false;
            }
        }


        return true;
    }


    private GameObject SelectWeightedPrefab(
        SpawnEntry[] entries)
    {
        int totalWeight = 0;


        foreach (SpawnEntry entry in entries)
        {
            if (
                entry.prefab != null &&
                entry.weight > 0)
            {
                totalWeight += entry.weight;
            }
        }


        if (totalWeight <= 0)
        {
            return null;
        }


        int randomValue =
            Random.Range(0, totalWeight);


        int cumulativeWeight = 0;


        foreach (SpawnEntry entry in entries)
        {
            if (
                entry.prefab == null ||
                entry.weight <= 0)
            {
                continue;
            }


            cumulativeWeight +=
                entry.weight;


            if (
                randomValue <
                cumulativeWeight)
            {
                return entry.prefab;
            }
        }


        return null;
    }


    private void ClearGeneratedObjects()
    {
        if (generatedRoot == null)
        {
            return;
        }


        for (
            int i =
                generatedRoot.childCount - 1;
            i >= 0;
            i--)
        {
            GameObject child =
                generatedRoot
                    .GetChild(i)
                    .gameObject;

            child.SetActive(false);

            Destroy(child);
        }
    }


    private void OnGUI()
    {
        GUI.Box(
            new Rect(10, 10, 310, 130),
            "PCG Debug"
        );


        GUI.Label(
            new Rect(20, 40, 280, 20),
            $"Seed: {currentSeed}"
        );


        GUI.Label(
            new Rect(20, 60, 280, 20),
            $"Enemy: {successfulEnemySpawns}/{enemyCount}"
        );


        GUI.Label(
            new Rect(20, 80, 280, 20),
            $"Item: {successfulItemSpawns}/{itemCount}"
        );


        GUI.Label(
            new Rect(20, 100, 280, 20),
            $"Rejected: {rejectedPositions}"
        );


        GUI.Label(
            new Rect(20, 120, 280, 20),
            "Press R to regenerate"
        );
    }


    private void OnDrawGizmosSelected()
    {
        Gizmos.color = Color.cyan;


        Vector3 center =
            transform.position +
            Vector3.up * spawnY;


        Vector3 size =
            new Vector3(
                spawnAreaSize.x,
                0.1f,
                spawnAreaSize.y
            );


        Gizmos.DrawWireCube(
            center,
            size
        );


        if (player != null)
        {
            Gizmos.color = Color.red;

            Gizmos.DrawWireSphere(
                player.position,
                minDistanceFromPlayer
            );
        }
    }
}
```

---

# 35. Memahami SpawnEntry

Perhatikan:

```csharp
[System.Serializable]
public class SpawnEntry
{
    public string name;
    public GameObject prefab;
    public int weight = 1;
}
```

Class ini menyimpan:

```text
Nama
Prefab
Weight
```

Contoh:

```text
name   = Red Enemy
prefab = Enemy_Red
weight = 60
```

---

# 36. Mengapa Menggunakan System.Serializable?

Tanpa:

```csharp
[System.Serializable]
```

class `SpawnEntry` tidak otomatis ditampilkan sebagai struktur editable pada Inspector.

Dengan atribut tersebut kita dapat mengatur:

```text
Enemy Entries
    Element 0
        Name
        Prefab
        Weight

    Element 1
        Name
        Prefab
        Weight
```

Ini merupakan contoh **designer-friendly PCG parameterization**.

---

# 37. Header pada Inspector

Contoh:

```csharp
[Header("Seed")]
```

digunakan untuk membuat separator pada Inspector.

Tidak memengaruhi algoritma.

Tujuannya hanya meningkatkan keterbacaan parameter.

---

# 38. Min Attribute

```csharp
[Min(0)]
public int weight = 1;
```

digunakan agar Inspector tidak mudah menerima nilai weight negatif.

---

# 39. Bagian Seed

```csharp
[SerializeField]
private bool useRandomSeed = false;

[SerializeField]
private int seed = 12345;
```

Jika:

```text
useRandomSeed = false
```

maka script menggunakan seed dari Inspector.

Ini sangat berguna untuk:

```text
Debugging
Reproducibility
Experiment
```

---

# 40. Random Seed

Jika:

```text
useRandomSeed = true
```

script menjalankan:

```csharp
seed = System.Environment.TickCount;
```

Sehingga seed berubah antar-generation.

Kemudian:

```csharp
Random.InitState(currentSeed);
```

menginisialisasi generator random Unity.

---

# 41. Mengapa Seed Disimpan?

```csharp
currentSeed = seed;
```

bertujuan agar seed generation dapat:

- dilihat,
- dicatat,
- dilaporkan,
- diuji kembali.

Contoh:

```text
Mahasiswa menemukan spawn yang aneh.

Seed = 78321
```

Mahasiswa cukup memasukkan:

```text
78321
```

dan mencoba generation kembali.

---

# 42. GenerateRandomPosition()

Method:

```csharp
GenerateRandomPosition()
```

bertanggung jawab membuat posisi kandidat.

Pertama:

```csharp
float halfWidth =
    spawnAreaSize.x * 0.5f;
```

Jika:

```text
spawnAreaSize.x = 24
```

maka:

```text
halfWidth = 12
```

Random X menjadi:

```text
-12 sampai +12
```

---

# 43. Candidate Position

```csharp
return transform.position +
    new Vector3(
        randomX,
        spawnY,
        randomZ
    );
```

Posisi spawn dihitung relatif terhadap posisi:

```text
PCGManager
```

Keuntungannya:

jika PCGManager dipindahkan, spawn area ikut berpindah.

---

# 44. Validation Rule 1 — Player Safe Zone

Script:

```csharp
if (distanceToPlayer <
    minDistanceFromPlayer)
{
    return false;
}
```

Misalnya:

```text
minDistanceFromPlayer = 5
```

maka radius lima Unity unit di sekitar Player merupakan:

```text
Safe Zone
```

Object procedural tidak boleh muncul di area tersebut.

---

# 45. Mengapa Safe Zone Penting?

Tanpa safe zone:

```text
Enemy dapat muncul tepat di depan Player.
```

Secara teknis random benar.

Tetapi secara gameplay:

```text
hasil PCG terasa tidak adil.
```

Inilah contoh bahwa:

```text
Valid secara algoritmik
≠
baik secara game design
```

---

# 46. Validation Rule 2 — Obstacle

Kode:

```csharp
bool blocked =
    Physics.CheckSphere(
        candidate,
        checkRadius,
        obstacleMask,
        QueryTriggerInteraction.Ignore
    );
```

Script membuat sphere virtual pada candidate position.

Jika sphere menyentuh Collider pada:

```text
Obstacle Layer
```

maka:

```csharp
blocked == true
```

dan posisi ditolak.

---

# 47. checkRadius

Parameter:

```csharp
checkRadius
```

menentukan seberapa besar ruang kosong yang harus tersedia.

Contoh:

```text
checkRadius = 0.75
```

Semakin besar nilainya:

```text
spawn semakin jauh dari obstacle
```

tetapi semakin sulit menemukan posisi valid.

---

# 48. QueryTriggerInteraction.Ignore

Parameter:

```csharp
QueryTriggerInteraction.Ignore
```

berarti physics query mengabaikan Collider yang hanya bertindak sebagai Trigger.

Pada praktikum ini kita ingin memeriksa obstacle fisik.

---

# 49. Validation Rule 3 — Minimum Spacing

Posisi object yang sudah berhasil dibuat disimpan:

```csharp
usedPositions.Add(candidate);
```

Kemudian candidate baru dibandingkan terhadap seluruh posisi sebelumnya.

```csharp
if (distance < minimumSpacing)
{
    return false;
}
```

Tujuan:

```text
Enemy
Enemy
Enemy
```

tidak terkumpul tepat pada posisi yang hampir sama.

---

# 50. Mengapa Tidak Hanya Menggunakan Physics.CheckSphere?

Pada modul ini `Physics.CheckSphere` digunakan terutama untuk obstacle.

Jarak antar-object generated disimpan secara eksplisit melalui:

```text
usedPositions
```

Keuntungannya:

- algoritma lebih mudah dipahami,
- tidak tergantung physics synchronization untuk object yang baru dibuat,
- jelas memperlihatkan konsep validation berbasis data.

---

# 51. maxAttemptsPerObject

Bagian penting:

```csharp
for (
    int attempt = 0;
    attempt < maxAttemptsPerObject;
    attempt++)
```

Mengapa diperlukan?

Bayangkan parameter:

```text
Spawn Area sangat kecil
Obstacle sangat banyak
minimumSpacing sangat besar
enemyCount = 1000
```

Mungkin tidak tersedia posisi valid.

Tanpa batas percobaan:

```text
algoritma dapat terus mencoba.
```

Dengan:

```text
maxAttemptsPerObject = 50
```

algoritma menyerah setelah 50 percobaan.

---

# 52. Generate-and-Test

Bagian ini merupakan contoh sederhana:

```text
Generate Candidate
       ↓
Test Candidate
       ↓
Valid?
├── Ya → Use
└── Tidak → Generate lagi
```

Ini adalah:

```text
Generate-and-Test PCG
```

---

# 53. Constructive + Generate-and-Test

Praktikum ini sebenarnya menggunakan pendekatan hybrid.

### Constructive

Sistem langsung membuat content:

```text
enemy
item
```

berdasarkan jumlah yang diminta.

### Generate-and-Test

Setiap posisi yang dihasilkan diuji terlebih dahulu.

Sehingga pendekatannya:

```text
Constructive PCG
+
Simple Generate-and-Test
```

---

# 54. Weighted Random Algorithm

Misalnya:

```text
Red    = 60
Blue   = 30
Yellow = 10
```

Total:

```text
100
```

Sistem memilih:

```csharp
Random.Range(0, 100);
```

Kemungkinan sederhananya:

```text
0  – 59 → Red
60 – 89 → Blue
90 – 99 → Yellow
```

---

# 55. Kelebihan Weight Dibanding Probability Tetap

Kita tidak harus memasukkan:

```text
0.60
0.30
0.10
```

Weight dapat:

```text
6
3
1
```

dan tetap memiliki rasio yang sama.

Atau:

```text
600
300
100
```

Karena algoritma menggunakan:

```text
relative weight
```

bukan persentase absolut.

---

# 56. Mengatur Script pada PCGManager

Drag:

```text
PCGSpawner.cs
```

ke:

```text
PCGManager
```

Pada Inspector akan muncul beberapa bagian.

---

# 57. Mengisi References

Set:

```text
Player
→ drag Player dari Hierarchy

Generated Root
→ drag GeneratedObjects
```

---

# 58. Mengatur Spawn Area

Gunakan:

```text
Spawn Area Size
X = 24
Y = 24

Spawn Y = 0.5
```

Catatan:

`Vector2.y` pada parameter `spawnAreaSize` digunakan sebagai ukuran arah Z di dunia 3D.

---

# 59. Mengatur Spawn Count

Contoh:

```text
Enemy Count = 15

Item Count = 10
```

---

# 60. Mengatur Validation

Gunakan nilai awal:

```text
Min Distance From Player = 5

Check Radius = 0.75

Minimum Spacing = 1.5

Max Attempts Per Object = 50
```

---

# 61. Mengatur Obstacle Mask

Pada:

```text
Obstacle Mask
```

pilih:

```text
Obstacle
```

Ini sangat penting.

Jika tidak dipilih:

```text
Physics.CheckSphere
```

tidak akan memfilter obstacle sesuai yang diinginkan.

---

# 62. Mengatur Enemy Weighted Table

Set:

```text
Enemy Entries
Size = 3
```

### Element 0

```text
Name   = Common Red
Prefab = Enemy_Red
Weight = 60
```

### Element 1

```text
Name   = Uncommon Blue
Prefab = Enemy_Blue
Weight = 30
```

### Element 2

```text
Name   = Rare Yellow
Prefab = Enemy_Yellow
Weight = 10
```

---

# 63. Mengatur Item Weighted Table

Set:

```text
Item Entries
Size = 3
```

Contoh:

```text
Coin
Weight = 70

Health
Weight = 25

Rare
Weight = 5
```

---

# 64. Konfigurasi Seed Awal

Atur:

```text
Use Random Seed = false

Seed = 12345
```

---

# 65. Menjalankan Praktikum

Tekan:

```text
Play
```

Hasil yang diharapkan:

- enemy muncul,
- item muncul,
- tidak ada spawn di tengah obstacle,
- tidak ada spawn dalam safe radius Player,
- object tidak saling bertumpuk berlebihan,
- panel debug muncul,
- seed terlihat.

---

# 66. Debug Panel

Bagian kiri atas Game View akan menampilkan:

```text
PCG Debug

Seed: 12345
Enemy: 15/15
Item: 10/10
Rejected: 14

Press R to regenerate
```

---

# 67. Rejected Positions

Contoh:

```text
Rejected: 14
```

berarti generator pernah menemukan 14 candidate positions yang gagal karena:

- terlalu dekat player,
- terkena obstacle,
- terlalu dekat generated object lainnya.

Rejected bukan berarti bug.

Sebaliknya, ini menunjukkan:

```text
validation bekerja.
```

---

# 68. Uji Reproducibility

Sekarang lakukan eksperimen.

Set:

```text
Use Random Seed = false
Seed = 12345
```

Jalankan game.

Amati posisi enemy dan item.

Stop.

Play kembali.

Jika konfigurasi dan urutan generation sama:

```text
layout harus konsisten.
```

---

# 69. Uji Seed Berbeda

Ganti:

```text
Seed = 100
```

Play.

Kemudian:

```text
Seed = 200
```

Play.

Bandingkan hasil.

Mahasiswa seharusnya melihat:

```text
Seed berbeda
→ posisi dan pemilihan object berbeda
```

---

# 70. Tombol Regenerate

Pada runtime tekan:

```text
R
```

Jika:

```text
Use Random Seed = false
```

dan seed tetap sama:

hasil seharusnya kembali mengikuti urutan random yang sama.

Jika:

```text
Use Random Seed = true
```

seed baru akan digunakan.

---

# 71. Uji Player Safe Zone

Pilih PCGManager pada Scene View.

Karena:

```csharp
OnDrawGizmosSelected()
```

aktif, akan terlihat:

```text
wireframe spawn area
```

dan safe radius di sekitar Player.

Tekan:

```text
R
```

beberapa kali menggunakan random seed.

Pastikan enemy tidak berada di safe radius.

---

# 72. Uji Obstacle Validation

Tambahkan obstacle besar di tengah arena.

Set Layer:

```text
Obstacle
```

Pastikan ada Collider.

Generate ulang.

Object tidak seharusnya muncul menembus obstacle tersebut.

---

# 73. Eksperimen checkRadius

Bandingkan:

```text
checkRadius = 0.25
```

dengan:

```text
checkRadius = 2
```

Pertanyaan:

> Apa pengaruhnya terhadap jumlah rejected position?

Biasanya radius lebih besar membuat aturan menjadi lebih ketat.

---

# 74. Eksperimen minimumSpacing

Coba:

```text
minimumSpacing = 0.5
```

kemudian:

```text
minimumSpacing = 3
```

Bandingkan distribusi object.

---

# 75. Eksperimen maxAttempts

Gunakan:

```text
Enemy Count = 50

Minimum Spacing = 5

Max Attempts = 5
```

Kemungkinan beberapa enemy gagal dibuat.

Console akan menampilkan:

```text
Gagal spawn object...
```

Ini bukan error script.

Ini contoh:

```text
constraint terlalu ketat
```

---

# 76. Parameter Tuning

Dalam PCG, designer sering mencari keseimbangan antara:

```text
Variety
Constraint
Density
Fairness
Performance
```

Contoh:

Jika:

```text
enemyCount terlalu tinggi
```

generator kesulitan mencari ruang.

Jika:

```text
minimumSpacing terlalu rendah
```

object terlalu berdekatan.

Jika:

```text
minimumSpacing terlalu tinggi
```

jumlah spawn berhasil menurun.

---

# 77. Mengapa Parameter Diletakkan di Inspector?

Bayangkan designer ingin menguji:

```text
Enemy Count 10
Enemy Count 20
Enemy Count 50
```

Jika nilai ditulis langsung:

```csharp
int enemyCount = 10;
```

dan tidak expose ke Inspector, designer harus mengedit script.

Dengan:

```csharp
[SerializeField]
private int enemyCount;
```

designer cukup mengubah Inspector.

Inilah bentuk:

```text
designer control
```

dalam PCG.

---

# 78. Pengujian Weighted Random

Gunakan:

```text
Enemy Count = 100
```

Weight:

```text
Red    = 60
Blue   = 30
Yellow = 10
```

Generate beberapa kali.

Catat jumlah tiap jenis.

Hasil tidak harus persis:

```text
60
30
10
```

karena probability berlaku secara statistik.

Tetapi dalam jumlah sampel lebih besar distribusi biasanya mulai mendekati bobot relatif.

---

# 79. Eksperimen Weighted Random

Percobaan 1:

```text
Red    80
Blue   15
Yellow 5
```

Percobaan 2:

```text
Red    33
Blue   33
Yellow 34
```

Percobaan 3:

```text
Red    10
Blue   20
Yellow 70
```

Bandingkan bagaimana komposisi arena berubah.

---

# 80. PCG Taxonomy Praktikum Ini

Sistem yang dibuat dapat dikategorikan sebagai:

| Dimensi | Praktikum |
|---|---|
| Waktu generation | Online |
| Peran PCG | Optional |
| Randomness | Stochastic + Seed |
| Generation | Constructive |
| Validation | Generate-and-Test sederhana |
| Designer interaction | Automatic |
| Adaptasi player | Generic |

---

# 81. Mengapa Online PCG?

Karena content dibuat:

```text
ketika game berjalan
```

tepatnya ketika:

```csharp
Start()
```

memanggil:

```csharp
Generate();
```

---

# 82. Mengapa Stochastic?

Karena menggunakan:

```csharp
Random.Range()
```

sehingga terdapat variasi.

Tetapi variasi tersebut masih dapat direproduksi menggunakan:

```text
seed
```

---

# 83. Generic PCG

Generator belum mengubah difficulty berdasarkan skill player.

Artinya:

```text
Player A
Player B
Player C
```

dengan seed dan parameter sama akan mendapat aturan generation yang sama.

Ini disebut:

```text
Generic PCG
```

Pada pembahasan berikutnya, sistem seperti ini dapat dikembangkan menjadi:

```text
Adaptive PCG
```

yang berhubungan dengan Dynamic Difficulty Adjustment.

---

# 84. Visual Debugging dengan Gizmos

Method:

```csharp
OnDrawGizmosSelected()
```

digunakan agar debug hanya tampil saat PCGManager dipilih.

Spawn area digambar dengan:

```csharp
Gizmos.DrawWireCube()
```

Sedangkan safe zone Player:

```csharp
Gizmos.DrawWireSphere()
```

---

# 85. Kenapa Visual Debug Penting?

Tanpa Gizmo, developer hanya melihat:

```text
object muncul / object tidak muncul
```

Dengan Gizmo kita melihat:

```text
batas spawn
safe zone
hubungan posisi
```

Debug visual sangat membantu pada sistem AI dan PCG.

---

# 86. Kesalahan Umum 1 — Enemy Muncul di Obstacle

Periksa:

```text
Obstacle memiliki Collider?
```

dan:

```text
Layer obstacle sudah = Obstacle?
```

kemudian:

```text
PCGManager
→ Obstacle Mask
→ Obstacle
```

---

# 87. Kesalahan Umum 2 — Semua Spawn Gagal

Kemungkinan:

```text
Spawn area terlalu kecil
Minimum spacing terlalu besar
Safe zone terlalu besar
Obstacle terlalu banyak
checkRadius terlalu besar
```

Solusi:

longgarkan constraint.

---

# 88. Kesalahan Umum 3 — Prefab Tidak Muncul

Periksa:

```text
Enemy Entries
Item Entries
```

Pastikan setiap element memiliki:

```text
Prefab != None
Weight > 0
```

---

# 89. Kesalahan Umum 4 — Weighted Random Tidak Bekerja

Jika semua:

```text
Weight = 0
```

maka:

```csharp
totalWeight <= 0
```

dan generator tidak dapat memilih prefab.

Gunakan weight positif.

---

# 90. Kesalahan Umum 5 — Player Tidak Bergerak

Pastikan Player memiliki:

```text
Character Controller
SimplePlayerController
```

Jika Input API menghasilkan error, periksa konfigurasi Active Input Handling pada project atau gunakan Player Controller dari praktikum sebelumnya.

---

# 91. Kesalahan Umum 6 — Seed Sama tetapi Hasil Berbeda

Reproducibility membutuhkan:

```text
seed sama
parameter sama
urutan Random call sama
jumlah object sama
weighted table sama
```

Jika salah satu berubah, urutan penggunaan random dapat berubah sehingga layout berikutnya juga berubah.

---

# 92. Kesalahan Umum 7 — Object Terlihat Mengambang

Atur:

```text
spawnY
```

berdasarkan pivot prefab.

Contoh:

Capsule dengan pivot tengah mungkin membutuhkan:

```text
Y = 1
```

sedangkan sphere kecil mungkin hanya:

```text
Y = 0.5
```

Untuk project lebih lanjut dapat dibuat:

```text
ground sampling
```

atau masing-masing prefab mempunyai offset Y sendiri.

---

# 93. Challenge 1 — Random Rotation

Tambahkan rotasi Y random.

Ganti:

```csharp
Quaternion.identity
```

dengan misalnya:

```csharp
Quaternion rotation =
    Quaternion.Euler(
        0f,
        Random.Range(0f, 360f),
        0f
    );
```

Kemudian:

```csharp
Instantiate(
    selectedPrefab,
    candidate,
    rotation,
    generatedRoot
);
```

Cocok untuk:

- rock,
- vegetation,
- decoration.

---

# 94. Challenge 2 — Per-Prefab Spawn Height

Tambahkan pada `SpawnEntry`:

```csharp
public float yOffset;
```

Sehingga enemy dan item dapat memiliki ketinggian berbeda.

---

# 95. Challenge 3 — Spawn Zone

Buat dua PCGManager:

```text
EnemySpawner_North

EnemySpawner_South
```

dengan:

```text
spawn area
weight
enemy count
```

berbeda.

Contoh:

```text
North
→ enemy mudah

South
→ enemy langka lebih banyak
```

---

# 96. Challenge 4 — Difficulty Budget

Setiap enemy diberikan cost.

Contoh:

```text
Slime       = 1
Goblin      = 2
Skeleton    = 3
MiniBoss    = 8
```

Kemudian generator diberi:

```text
difficultyBudget = 20
```

Generator hanya boleh memilih kombinasi enemy sampai total cost mencapai budget.

Ini merupakan pengembangan dari:

```text
weighted random
```

menuju controlled procedural encounter generation.

---

# 97. Challenge 5 — NavMesh Validation

Untuk project yang menggunakan navigation, posisi random dapat diproyeksikan atau diperiksa ke NavMesh menggunakan:

```csharp
NavMesh.SamplePosition()
```

Unity 6 menyediakan `NavMesh.SamplePosition` untuk mencari posisi terdekat pada NavMesh dari posisi yang diberikan.

Konsep:

```text
Random Candidate
      ↓
NavMesh.SamplePosition
      ↓
Position on walkable NavMesh?
├── No  → reject
└── Yes → lanjut validation
```

Pengembangan ini sangat cocok untuk menghubungkan PCG dengan Praktikum 4 tentang:

```text
Pathfinding & Navigation
```

---

# 98. Mengapa NavMesh Tidak Dijadikan Bagian Wajib?

Tujuan utama Praktikum 9 adalah:

```text
PCG fundamentals
```

bukan kembali membahas navigation secara mendalam.

Karena itu:

```text
Physics.CheckSphere
+
Distance Validation
+
Seed
+
Weighted Random
```

sudah cukup sebagai requirement utama.

NavMesh dijadikan enhancement.

---

# 99. Challenge 6 — Spawn Statistik

Tambahkan penghitung:

```text
Jumlah Red
Jumlah Blue
Jumlah Yellow
```

Kemudian tampilkan pada debug panel.

Lakukan generation:

```text
100
500
1000
```

enemy.

Amati hubungan antara:

```text
Weight
```

dan:

```text
hasil statistik.
```

---

# 100. Challenge 7 — Seed History

Simpan beberapa seed terakhir:

```text
12345
71232
88501
```

Mahasiswa dapat memilih seed yang dianggap menghasilkan layout paling menarik.

Konsep ini menyerupai workflow designer:

```text
Generate
→ Evaluate
→ Select
```

---

# 101. Challenge 8 — Spawn Rarity

Ubah weighted table item:

```text
Common Coin       70
Health Potion     20
Rare Crystal       8
Legendary Gem      2
```

Tambahkan visual berbeda untuk menunjukkan rarity.

---

# 102. Analisis PCG

Setelah praktikum selesai, mahasiswa harus memahami bahwa sistem ini bukan sekadar:

```text
Random.Range()
```

melainkan pipeline:

```text
Parameters
     ↓
Seed
     ↓
Pseudo Random
     ↓
Candidate
     ↓
Validation
     ↓
Weighted Selection
     ↓
Instantiation
     ↓
Evaluation
```

---

# 103. Hubungan dengan Praktikum Sebelumnya

Sistem ini dapat digabungkan dengan:

## Movement AI

Enemy hasil procedural spawn dapat menggunakan:

```text
Seek
Flee
Arrive
Steering
```

---

## Navigation

Enemy dapat di-spawn pada NavMesh.

---

## FSM

Enemy procedural dapat memiliki state:

```text
Patrol
Chase
Attack
Search
```

---

## Behavior Tree

Prefab enemy dapat memiliki Behavior Tree.

---

## Utility AI

Enemy hasil procedural dapat memilih action berdasarkan utility score.

---

## Tactical AI

PCG dapat menghasilkan:

- enemy positions,
- tactical encounter composition,
- resource positions,
- cover distribution.

---

# 104. Hubungan dengan Pertemuan 10

Praktikum ini berfokus pada:

```text
Entity Generation
```

yaitu:

```text
Enemy
Item
```

Pertemuan berikutnya akan berpindah pada:

```text
Space Generation
```

yaitu:

```text
Level
Dungeon
Room
Corridor
Cave
```

Sehingga urutan pembelajaran menjadi jelas:

```text
Pertemuan 9
PCG Fundamental
+
Procedural Spawning

        ↓

Pertemuan 10
PCG Level & Dungeon Generation
```

---

# 105. Eksperimen Wajib Mahasiswa

Mahasiswa melakukan minimal lima eksperimen.

## Eksperimen 1 — Seed

Gunakan:

```text
Seed 100
Seed 200
Seed 300
```

Bandingkan hasil.

---

## Eksperimen 2 — Reproducibility

Gunakan:

```text
Seed 500
```

sebanyak tiga kali.

Apakah layout konsisten?

---

## Eksperimen 3 — Safe Radius

Bandingkan:

```text
3
5
8
```

untuk:

```text
minDistanceFromPlayer
```

---

## Eksperimen 4 — Density

Bandingkan:

```text
minimumSpacing = 0.5
1.5
3.0
```

---

## Eksperimen 5 — Weight

Bandingkan:

```text
60 : 30 : 10
```

dengan:

```text
33 : 33 : 34
```

---

# 106. Tabel Hasil Eksperimen

Mahasiswa dapat membuat tabel seperti:

| Seed | Enemy | Item | Rejected | Catatan |
|---:|---:|---:|---:|---|
| 100 | 15 | 10 | ... | ... |
| 200 | 15 | 10 | ... | ... |
| 300 | 15 | 10 | ... | ... |

Kemudian analisis:

- seed mana yang menghasilkan distribusi terbaik,
- seed mana yang menghasilkan rejection paling tinggi,
- apakah obstacle memengaruhi hasil,
- apakah constraint terlalu ketat.

---

# 107. Pertanyaan Analisis

Jawab pertanyaan berikut.

1. Mengapa PCG tidak sama dengan random murni?
2. Apa fungsi seed?
3. Apa yang dimaksud reproducibility?
4. Mengapa seed penting untuk debugging?
5. Apa fungsi `Random.InitState()`?
6. Apa fungsi `Random.Range()`?
7. Apa yang dimaksud controlled randomness?
8. Mengapa spawn membutuhkan validation?
9. Apa fungsi LayerMask?
10. Apa fungsi `Physics.CheckSphere()`?
11. Mengapa obstacle harus mempunyai Collider?
12. Apa fungsi `minimumSpacing`?
13. Apa fungsi `minDistanceFromPlayer`?
14. Mengapa diperlukan `maxAttemptsPerObject`?
15. Apa yang terjadi jika constraint terlalu ketat?
16. Apa itu weighted random?
17. Mengapa weighted random cocok untuk loot atau enemy selection?
18. Apa hubungan PCG dengan pathfinding?
19. Apa perbedaan constructive PCG dan generate-and-test?
20. Di bagian mana kedua konsep tersebut muncul pada praktikum ini?

---

# 108. Tugas Modifikasi

Modifikasi project agar memenuhi minimal tiga fitur berikut:

- random rotation,
- fourth enemy type,
- legendary item,
- minimum distance item dari enemy,
- enemy spawn zone berbeda,
- different weight per zone,
- NavMesh validation,
- spawn statistics,
- regeneration button UI,
- random seed history,
- difficulty budget.

---

# 109. Kriteria Keberhasilan Praktikum

Praktikum dianggap berhasil apabila:

- [ ] Project dapat dijalankan tanpa compile error.
- [ ] Enemy berhasil di-spawn secara procedural.
- [ ] Item berhasil di-spawn secara procedural.
- [ ] Spawn area dapat diubah melalui Inspector.
- [ ] Seed dapat ditentukan.
- [ ] Seed sama menghasilkan generation yang reproducible.
- [ ] Seed berbeda menghasilkan variasi.
- [ ] Enemy tidak muncul terlalu dekat Player.
- [ ] Object tidak muncul di dalam obstacle.
- [ ] Object tidak terlalu bertumpuk.
- [ ] Weighted random bekerja.
- [ ] `maxAttempts` digunakan.
- [ ] Debug seed ditampilkan.
- [ ] Rejected candidate dapat diamati.
- [ ] Spawn area terlihat melalui Gizmos.
- [ ] Mahasiswa mampu menjelaskan algoritma yang dibuat.

---

# 110. Rekomendasi Penilaian

## A. Implementasi Dasar — 40%

| Komponen | Bobot |
|---|---:|
| Project dan Scene benar | 5% |
| Procedural spawning | 10% |
| Seed | 10% |
| Enemy + item prefab | 10% |
| Inspector parameters | 5% |

---

## B. Controlled Randomness — 30%

| Komponen | Bobot |
|---|---:|
| Player safe distance | 10% |
| Obstacle validation | 10% |
| Minimum spacing | 5% |
| maxAttempts | 5% |

---

## C. PCG Tambahan — 15%

| Komponen | Bobot |
|---|---:|
| Weighted random | 10% |
| Debug visualization | 5% |

---

## D. Analisis — 15%

| Komponen | Bobot |
|---|---:|
| Eksperimen seed | 5% |
| Parameter tuning | 5% |
| Penjelasan hasil | 5% |

Total:

```text
100%
```

---

# 111. Rekomendasi Asset

Untuk tahap awal, primitive Unity sebaiknya digunakan terlebih dahulu agar mahasiswa fokus memahami algoritma.

Setelah algoritma berjalan, prefab dapat diganti dengan asset yang lebih menarik.

Contoh tema:

```text
Fantasy Arena
Sci-Fi Arena
Dungeon Encounter
Forest Survival
Alien Planet
Robot Training Ground
```

Contoh:

```text
Enemy_Red
```

dapat diganti menjadi:

```text
Goblin
Robot
Alien
Skeleton
```

tanpa mengubah algoritma PCG utama.

---

# 112. Rekomendasi Praktikum Terbaik

Dari dua pilihan materi:

```text
A. Procedural Spawning

B. Random Level Sederhana
```

**pilihan yang paling direkomendasikan untuk Praktikum 09 adalah A — Procedural Spawning**, tetapi ditingkatkan menjadi:

# Seeded, Weighted & Validated Procedural Spawning

Alasannya:

1. Fokus pada konsep fundamental PCG.
2. Seed mudah diamati.
3. Reproducibility mudah diuji.
4. Controlled randomness terlihat jelas.
5. Weighted random dapat dipraktikkan.
6. Validation dapat langsung diamati.
7. `Physics.CheckSphere` memperkenalkan physics query yang relevan.
8. LayerMask digunakan secara nyata.
9. `maxAttempts` mengajarkan robustness.
10. Scope masih dapat diselesaikan sebagai praktikum satu pertemuan.
11. Tidak terlalu tumpang tindih dengan materi PCG level/dungeon pada Pertemuan 10.

Dengan demikian urutan materi menjadi lebih baik:

```text
P09
PCG Fundamental
→ Procedural Entity Spawning

P10
PCG Level & Dungeon
→ Procedural Space Generation
```

---

# 113. Nama Project yang Direkomendasikan

## Pilihan Utama

```text
GameCerdas_P09_PCG_SmartSpawner
```

Nama ini direkomendasikan karena:

```text
GameCerdas
```

menunjukkan mata kuliah.

```text
P09
```

menunjukkan pertemuan/praktikum.

```text
PCG
```

menunjukkan konsep utama.

```text
SmartSpawner
```

menggambarkan bahwa spawner tidak hanya random, tetapi memiliki rules dan validation.

---

## Alternatif Nama

```text
GameCerdas_P09_ProceduralSpawnLab
```

atau:

```text
GameCerdas_P09_SeededSpawner
```

atau:

```text
GameCerdas_P09_PCGSpawnArena
```

Tetapi rekomendasi utama tetap:

# `GameCerdas_P09_PCG_SmartSpawner`

---

# 114. Nama Scene yang Direkomendasikan

```text
PCG_SpawnArena
```

Alternatif:

```text
PCG_Demo
ProceduralSpawnLab
SmartSpawnerDemo
```

Rekomendasi:

# `PCG_SpawnArena`

---

# 115. Kesimpulan

Pada praktikum ini mahasiswa tidak sekadar membuat object muncul secara acak.

Mahasiswa membangun pipeline:

```text
Seed
 ↓
Random Generation
 ↓
Candidate Position
 ↓
Validation
 ↓
Controlled Randomness
 ↓
Weighted Selection
 ↓
Prefab Instantiation
 ↓
Debugging
 ↓
Evaluation
```

Konsep paling penting yang harus dipahami adalah:

> **PCG yang baik bukan random murni. PCG adalah randomness yang dikendalikan oleh parameter, rule, constraint, validation, dan tujuan game design.**

Dengan pondasi ini mahasiswa siap memasuki materi berikutnya:

```text
PCG for Level & Dungeon Generation
```

dengan teknik yang lebih kompleks seperti:

```text
Grid-Based Generation
Random Walk
BSP
Cellular Automata
Constraint-Based Generation
```