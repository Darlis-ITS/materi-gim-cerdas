# MODUL PRAKTIKUM 10  
# PROCEDURAL DUNGEON GENERATION DENGAN BSP DI UNITY 6

**Mata Kuliah:** Game Cerdas  
**Program Studi:** S1 Teknik Informatika  
**Semester:** 7  
**Tools:** Unity 6 + C#  
**Materi:** PCG for Level & Dungeon Generation  
**Metode Utama:** Binary Space Partitioning (BSP)  
**Jenis Game:** 3D Top-Down Procedural Dungeon  

---

# 1. Tujuan Praktikum

Pada praktikum ini mahasiswa akan membangun sebuah **procedural dungeon generator** menggunakan teknik **Binary Space Partitioning (BSP)**.

Dungeon tidak dibuat secara manual satu per satu. Program akan:

1. membuat representasi level berbasis grid,
2. membagi area dungeon menggunakan BSP,
3. membuat room pada setiap area hasil pembagian,
4. menghubungkan room menggunakan corridor,
5. menentukan Start,
6. menentukan Goal,
7. menempatkan Enemy,
8. menempatkan Item,
9. membangun dungeon menjadi GameObject Unity,
10. menggunakan seed agar level dapat direproduksi,
11. melakukan validasi dasar dungeon.

Output akhirnya berupa dungeon 3D yang berbeda ketika seed berbeda tetapi menghasilkan dungeon yang sama ketika menggunakan seed yang sama.

---

# 2. Capaian Pembelajaran Praktikum

Setelah menyelesaikan praktikum, mahasiswa diharapkan mampu:

- memahami representasi level menggunakan grid,
- menjelaskan hubungan koordinat grid dan koordinat dunia Unity,
- memahami konsep procedural generation,
- memahami penggunaan random seed,
- menjelaskan Binary Space Partitioning,
- membuat pembagian ruang secara rekursif,
- membuat room pada leaf BSP,
- membuat corridor antar-room,
- menggunakan array dua dimensi sebagai representasi level,
- mengubah data dungeon menjadi GameObject,
- menggunakan Prefab untuk membangun level,
- menggunakan `Instantiate()`,
- menggunakan parent object untuk mengorganisasi object hasil generation,
- menentukan Start dan Goal,
- melakukan procedural enemy dan item placement,
- memahami konsep validasi dungeon,
- memahami hubungan PCG dengan Pathfinding dan Game AI.

---

# 3. Hasil Akhir Praktikum

Secara konseptual dungeon akan mempunyai struktur seperti:

```text
#################################
####......######........#########
####......######........#########
####......######........#########
####.........###........#########
###########..###........#########
###########..########.###########
######.......########.###########
######.......##.............#####
######......................#####
######.......##.............#####
#################################
```

Keterangan:

```text
# = Wall
. = Floor
S = Start
G = Goal
E = Enemy
I = Item
```

Di Unity, data tersebut kemudian divisualisasikan sebagai dungeon 3D menggunakan:

```text
Floor Prefab
Wall Prefab
Player
Goal
Enemy Prefab
Item Prefab
```

---

# 4. Mengapa Menggunakan BSP?

Materi Pertemuan 10 membahas beberapa metode:

- Grid-Based Generation
- Random Walk
- Binary Space Partitioning
- Cellular Automata
- Constraint-Based Generation

Untuk praktikum utama, metode yang direkomendasikan adalah:

## Binary Space Partitioning / BSP

BSP sangat sesuai untuk membuat:

```text
Room → Corridor → Room → Corridor → Room
```

dibandingkan Random Walk yang cenderung menghasilkan bentuk lebih organik.

Keuntungan BSP untuk praktikum:

1. konsep pembagian ruang terlihat jelas,
2. hasil dungeon relatif terstruktur,
3. setiap area dapat memiliki satu room,
4. room dapat dihubungkan dengan corridor,
5. konektivitas lebih mudah dikontrol,
6. Start dan Goal mudah ditempatkan,
7. mudah ditambahkan Enemy,
8. mudah ditambahkan Item,
9. kompatibel dengan konsep NavMesh,
10. mudah dikembangkan menjadi dungeon crawler.

---

# 5. Gambaran Arsitektur Sistem

Dungeon dibuat melalui pipeline:

```text
Seed
  ↓
Initialize Grid
  ↓
Create BSP Root
  ↓
Split Area Recursively
  ↓
Find Leaf Nodes
  ↓
Generate Rooms
  ↓
Generate Corridors
  ↓
Write Rooms to Grid
  ↓
Place Start & Goal
  ↓
Build 3D Level
  ↓
Place Player
  ↓
Place Enemy & Item
  ↓
Validation
```

Penting untuk memahami bahwa:

> PCG tidak berarti sekadar membuat sesuatu secara random.

Level tetap harus memiliki aturan agar dapat dimainkan.

---

# 6. Istilah Teknis yang Digunakan

## 6.1 GameObject

`GameObject` adalah objek dasar yang terdapat di dalam Scene Unity.

Contoh:

```text
Player
Enemy
Floor
Wall
Main Camera
DungeonGenerator
```

GameObject sendiri merupakan wadah yang dapat memiliki berbagai **Component**.

---

# 7. Component

Component memberikan fungsi pada GameObject.

Contoh:

```text
Transform
MeshRenderer
Collider
Rigidbody
MonoBehaviour Script
NavMeshAgent
```

Contoh sebuah Enemy:

```text
Enemy
├── Transform
├── MeshFilter
├── MeshRenderer
├── CapsuleCollider
├── NavMeshAgent
└── EnemyAI.cs
```

---

# 8. Transform

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

menunjukkan posisi GameObject pada dunia Unity.

Dalam praktikum ini, posisi tile dihitung dari koordinat grid.

---

# 9. Scene

Scene adalah ruang tempat GameObject sebuah level berada.

Scene praktikum:

```text
PCG_Dungeon_Scene
```

Di dalam Scene terdapat:

```text
DungeonGenerator
LevelRoot
Player
Main Camera
Directional Light
```

---

# 10. Prefab

**Prefab** adalah template GameObject yang dapat digunakan berulang kali.

Pada praktikum ini kita membutuhkan:

```text
FloorPrefab
WallPrefab
GoalPrefab
EnemyPrefab
ItemPrefab
```

Keuntungan Prefab:

- bentuk objek dibuat sekali,
- dapat digunakan berkali-kali,
- dapat di-spawn dari C#,
- perubahan Prefab dapat diterapkan secara konsisten.

---

# 11. Instantiate

`Instantiate()` digunakan untuk membuat salinan Object/Prefab saat program berjalan.

Contoh:

```csharp
Instantiate(floorPrefab, position, Quaternion.identity);
```

Artinya:

```text
buat sebuah FloorPrefab
pada position
tanpa rotasi tambahan
```

---

# 12. Quaternion.identity

Unity menggunakan `Quaternion` untuk menyimpan rotasi.

```csharp
Quaternion.identity
```

berarti:

```text
tidak ada rotasi tambahan
```

Untuk praktikum ini Floor dan Wall tidak memerlukan rotasi khusus.

---

# 13. Parent dan Child

GameObject dapat mempunyai hubungan hierarchy:

```text
LevelRoot
├── Floors
├── Walls
├── Enemies
└── Items
```

Dengan parent, hasil procedural generation tidak memenuhi root Scene dengan ratusan GameObject yang tidak terorganisasi.

---

# 14. SerializeField

Contoh:

```csharp
[SerializeField] private int mapWidth = 60;
```

`SerializeField` memungkinkan field `private` tetap ditampilkan di Inspector.

Dengan demikian mahasiswa dapat mengubah parameter:

```text
Map Width
Map Height
Minimum Leaf Size
Minimum Room Size
```

tanpa mengubah source code.

---

# 15. Array Dua Dimensi

Dungeon disimpan menggunakan:

```csharp
TileType[,] grid;
```

Ini disebut **two-dimensional array**.

Bayangkan seperti tabel:

```text
grid[x,y]
```

Misalnya:

```text
grid[10,15]
```

menunjukkan tile pada koordinat:

```text
x = 10
y = 15
```

---

# 16. Enum

Enum digunakan ketika suatu data mempunyai sejumlah pilihan yang jelas.

Contoh:

```csharp
public enum TileType
{
    Wall,
    Floor,
    Start,
    Goal
}
```

Daripada menggunakan:

```text
0
1
2
3
```

kode menjadi jauh lebih mudah dibaca.

---

# 17. Vector2Int

`Vector2Int` menyimpan dua angka integer.

Contoh:

```csharp
Vector2Int position = new Vector2Int(10, 20);
```

Sangat cocok untuk koordinat grid karena:

```text
x dan y berupa bilangan bulat
```

---

# 18. Vector3

Posisi GameObject Unity 3D menggunakan:

```csharp
Vector3
```

yang memiliki:

```text
x
y
z
```

Dungeon kita menggunakan:

```text
X = horizontal
Y = tinggi
Z = grid Y
```

Sehingga:

```text
grid (x,y)
```

diubah menjadi:

```text
world (x,0,z)
```

---

# 19. Seed

Seed adalah nilai awal generator angka pseudo-random.

Contoh:

```text
seed = 12345
```

Seed memungkinkan procedural generation menjadi **reproducible**:

```text
Seed sama
→ urutan random sama
→ dungeon sama
```

Sedangkan:

```text
Seed berbeda
→ dungeon berbeda
```

Ini sangat penting untuk debugging PCG.

---

# 20. Recursive Function

BSP menggunakan **rekursi**.

Recursive function adalah fungsi yang memanggil dirinya sendiri.

Contoh konsep:

```text
Split(area)
    ↓
Split(area kiri)
    ↓
Split(area kiri lagi)
```

Rekursi berhenti setelah ukuran area terlalu kecil untuk dibagi kembali.

---

# 21. Leaf pada BSP

BSP membentuk tree.

Contoh:

```text
Root
├── Left
│   ├── Leaf
│   └── Leaf
└── Right
    ├── Leaf
    └── Leaf
```

`Leaf` berarti node yang tidak dibagi lagi.

Room akan dibuat pada setiap Leaf.

---

# 22. Corridor

Corridor adalah jalur yang menghubungkan dua room.

Praktikum menggunakan:

```text
L-Shaped Corridor
```

Contoh:

```text
Room A ──────┐
             │
             │
             └──── Room B
```

---

# 23. Persiapan Project Unity

Gunakan:

```text
Unity 6
```

Buat project:

```text
Universal 3D
```

atau template 3D lain yang tersedia.

---

# 24. Nama Project yang Direkomendasikan

## Nama utama

```text
PCG_BSP_Dungeon
```

Nama ini paling direkomendasikan karena singkat dan menjelaskan:

```text
PCG = Procedural Content Generation
BSP = algoritma yang digunakan
Dungeon = hasil project
```

Alternatif:

```text
ProceduralDungeon_BSP
SmartDungeonGenerator
PCG_DungeonLab
ProceduralDungeonAI
GameCerdas_PCGDungeon
```

Untuk konsistensi praktikum kuliah saya merekomendasikan:

```text
GameCerdas_P10_PCG_BSP_Dungeon
```

---

# 25. Membuat Project

Di Unity Hub:

```text
New Project
```

Pilih:

```text
Universal 3D
```

Project Name:

```text
GameCerdas_P10_PCG_BSP_Dungeon
```

Klik:

```text
Create Project
```

---

# 26. Struktur Folder Project

Buat struktur:

```text
Assets/
│
├── Scenes/
│   └── PCG_Dungeon_Scene.unity
│
├── Scripts/
│   ├── PCG/
│   │   ├── TileType.cs
│   │   ├── DungeonRoom.cs
│   │   ├── BSPNode.cs
│   │   └── DungeonGenerator.cs
│   │
│   ├── Player/
│   │   └── SimplePlayerController.cs
│   │
│   └── Enemy/
│       └── SimpleEnemy.cs
│
├── Prefabs/
│   ├── Dungeon/
│   │   ├── FloorPrefab.prefab
│   │   ├── WallPrefab.prefab
│   │   └── GoalPrefab.prefab
│   │
│   ├── Characters/
│   │   ├── PlayerPrefab.prefab
│   │   └── EnemyPrefab.prefab
│   │
│   └── Items/
│       └── ItemPrefab.prefab
│
└── Materials/
    ├── FloorMaterial.mat
    ├── WallMaterial.mat
    ├── GoalMaterial.mat
    ├── EnemyMaterial.mat
    └── ItemMaterial.mat
```

---

# 27. Membuat Scene

Simpan Scene sebagai:

```text
PCG_Dungeon_Scene
```

Hierarchy awal:

```text
PCG_Dungeon_Scene
├── Main Camera
├── Directional Light
├── DungeonGenerator
└── LevelRoot
```

---

# 28. Membuat Floor Prefab

Pilih:

```text
GameObject
→ 3D Object
→ Cube
```

Rename:

```text
FloorPrefab
```

Transform:

```text
Position = (0, 0, 0)
Scale    = (1, 0.1, 1)
```

Cube sudah memiliki BoxCollider sehingga nantinya dapat diinjak Player.

Tambahkan material Floor.

Drag ke:

```text
Assets/Prefabs/Dungeon/
```

Setelah menjadi Prefab, hapus instance dari Scene.

---

# 29. Membuat Wall Prefab

Buat Cube.

Rename:

```text
WallPrefab
```

Transform:

```text
Scale = (1, 1, 1)
```

Material:

```text
WallMaterial
```

Drag ke:

```text
Assets/Prefabs/Dungeon/
```

---

# 30. Membuat Goal Prefab

Buat:

```text
3D Object → Cylinder
```

Rename:

```text
GoalPrefab
```

Gunakan scale kecil, misalnya:

```text
(0.4, 0.1, 0.4)
```

Letakkan visual Goal nantinya sedikit di atas Floor.

Gunakan material berbeda agar mudah terlihat.

---

# 31. Membuat TileType.cs

Buat:

```text
Assets/Scripts/PCG/TileType.cs
```

Isi:

```csharp
public enum TileType
{
    Wall,
    Floor,
    Start,
    Goal
}
```

## Penjelasan

`Wall`

```text
cell tidak dapat dilewati
```

`Floor`

```text
cell dapat dilewati
```

`Start`

```text
posisi awal player
```

`Goal`

```text
tujuan dungeon
```

---

# 32. Membuat DungeonRoom.cs

Buat:

```text
DungeonRoom.cs
```

Isi:

```csharp
using UnityEngine;

[System.Serializable]
public class DungeonRoom
{
    public int x;
    public int y;
    public int width;
    public int height;

    public DungeonRoom(int x, int y, int width, int height)
    {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
    }

    public Vector2Int Center
    {
        get
        {
            return new Vector2Int(
                x + width / 2,
                y + height / 2
            );
        }
    }
}
```

---

# 33. Penjelasan DungeonRoom

Class ini menyimpan sebuah rectangle Room.

Properti:

```text
x
y
width
height
```

Contoh:

```text
x      = 10
y      = 5
width  = 8
height = 6
```

berarti room berada dari:

```text
x = 10 sampai 17
y = 5 sampai 10
```

---

# 34. Property Center

Bagian:

```csharp
public Vector2Int Center
```

digunakan untuk mendapatkan titik tengah room.

Titik tengah sangat penting untuk:

- corridor,
- Start,
- Goal,
- enemy placement,
- item placement.

---

# 35. Membuat BSPNode.cs

Buat:

```text
BSPNode.cs
```

Isi:

```csharp
using UnityEngine;

public class BSPNode
{
    public int x;
    public int y;
    public int width;
    public int height;

    public BSPNode left;
    public BSPNode right;

    public DungeonRoom room;

    public BSPNode(int x, int y, int width, int height)
    {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
    }

    public bool IsLeaf
    {
        get
        {
            return left == null && right == null;
        }
    }
}
```

---

# 36. Struktur BSP

Satu `BSPNode` mewakili area rectangular.

Misalnya:

```text
Root
x = 1
y = 1
width = 58
height = 38
```

Kemudian Root dibagi:

```text
Root
├── left
└── right
```

Masing-masing dapat dibagi lagi.

---

# 37. Membuat DungeonGenerator.cs

Buat:

```text
DungeonGenerator.cs
```

Script ini menjadi controller utama procedural dungeon.

---

# 38. Header Script DungeonGenerator

Masukkan:

```csharp
using System.Collections.Generic;
using UnityEngine;

public class DungeonGenerator : MonoBehaviour
{
```

---

# 39. Parameter Dungeon

Tambahkan:

```csharp
[Header("Dungeon Size")]
[SerializeField] private int mapWidth = 60;
[SerializeField] private int mapHeight = 40;
[SerializeField] private float tileSize = 1f;

[Header("BSP Settings")]
[SerializeField] private int minLeafSize = 12;
[SerializeField] private int maxLeafSize = 20;

[Header("Room Settings")]
[SerializeField] private int minRoomSize = 5;
[SerializeField] private int roomMargin = 2;

[Header("Generation")]
[SerializeField] private int seed = 12345;
[SerializeField] private bool randomSeed = false;
```

---

# 40. Penjelasan Parameter

## mapWidth

Lebar dungeon.

```text
60 cell
```

## mapHeight

Tinggi dungeon.

```text
40 cell
```

## tileSize

Ukuran setiap cell di dunia Unity.

```text
1 unit
```

## minLeafSize

Ukuran minimum sebuah area BSP sebelum tidak boleh dibagi.

## maxLeafSize

Jika area lebih besar dari nilai ini, area sebaiknya dibagi kembali.

## minRoomSize

Ukuran minimum room.

## roomMargin

Jarak antara room dan batas Leaf.

---

# 41. Referensi Prefab

Tambahkan:

```csharp
[Header("Prefabs")]
[SerializeField] private GameObject floorPrefab;
[SerializeField] private GameObject wallPrefab;
[SerializeField] private GameObject goalPrefab;
[SerializeField] private GameObject playerPrefab;
[SerializeField] private GameObject enemyPrefab;
[SerializeField] private GameObject itemPrefab;
```

---

# 42. Spawn Settings

Tambahkan:

```csharp
[Header("Spawn Settings")]
[SerializeField] private int enemyCount = 8;
[SerializeField] private int itemCount = 5;
[SerializeField] private int safeRoomCount = 1;
```

`safeRoomCount` digunakan agar room awal tidak langsung berisi Enemy.

---

# 43. Internal Data

Tambahkan:

```csharp
private TileType[,] grid;

private BSPNode rootNode;

private List<BSPNode> leafNodes = new List<BSPNode>();
private List<DungeonRoom> rooms = new List<DungeonRoom>();

private Transform levelRoot;

private Vector2Int startPosition;
private Vector2Int goalPosition;
```

---

# 44. Fungsi Start

Tambahkan:

```csharp
private void Start()
{
    GenerateDungeon();
}
```

Dengan demikian dungeon langsung dihasilkan ketika tombol Play ditekan.

---

# 45. Fungsi GenerateDungeon

Tambahkan:

```csharp
public void GenerateDungeon()
{
    ClearDungeon();

    SetupSeed();

    InitializeGrid();

    CreateBSP();

    CreateRooms();

    CreateCorridors();

    PlaceStartAndGoal();

    BuildDungeon();

    SpawnGameplayObjects();

    Debug.Log("Dungeon generated with seed: " + seed);
}
```

Ini merupakan pipeline utama generator.

---

# 46. Setup Seed

Tambahkan:

```csharp
private void SetupSeed()
{
    if (randomSeed)
    {
        seed = System.DateTime.Now.GetHashCode();
    }

    Random.InitState(seed);
}
```

Jika:

```text
randomSeed = false
```

maka nilai Inspector dipakai.

Jika:

```text
randomSeed = true
```

program membuat seed baru.

---

# 47. Initialize Grid

Tambahkan:

```csharp
private void InitializeGrid()
{
    grid = new TileType[mapWidth, mapHeight];

    for (int x = 0; x < mapWidth; x++)
    {
        for (int y = 0; y < mapHeight; y++)
        {
            grid[x, y] = TileType.Wall;
        }
    }
}
```

Dungeon menggunakan pendekatan:

```text
Wall-First
```

Awalnya seluruh map adalah Wall.

Kemudian algoritma "mengukir" Floor.

---

# 48. Create BSP

Tambahkan:

```csharp
private void CreateBSP()
{
    rootNode = new BSPNode(
        1,
        1,
        mapWidth - 2,
        mapHeight - 2
    );

    leafNodes.Clear();

    SplitNode(rootNode);
}
```

Area dungeon tidak dimulai tepat pada koordinat 0 karena kita menyisakan boundary Wall.

---

# 49. SplitNode

Tambahkan:

```csharp
private void SplitNode(BSPNode node)
{
    if (node.width <= maxLeafSize &&
        node.height <= maxLeafSize)
    {
        leafNodes.Add(node);
        return;
    }

    bool splitHorizontal;

    if (node.width > node.height * 1.25f)
    {
        splitHorizontal = false;
    }
    else if (node.height > node.width * 1.25f)
    {
        splitHorizontal = true;
    }
    else
    {
        splitHorizontal = Random.value > 0.5f;
    }

    if (splitHorizontal)
    {
        SplitHorizontal(node);
    }
    else
    {
        SplitVertical(node);
    }
}
```

---

# 50. Mengapa Menggunakan Rasio?

Jika area terlalu lebar:

```text
████████████████████
```

lebih baik dipotong vertical.

Jika area terlalu tinggi:

```text
████
████
████
████
████
```

lebih baik dipotong horizontal.

Hal ini mencegah terbentuknya Leaf yang terlalu panjang.

---

# 51. Split Horizontal

Tambahkan:

```csharp
private void SplitHorizontal(BSPNode node)
{
    if (node.height < minLeafSize * 2)
    {
        leafNodes.Add(node);
        return;
    }

    int split = Random.Range(
        minLeafSize,
        node.height - minLeafSize
    );

    node.left = new BSPNode(
        node.x,
        node.y,
        node.width,
        split
    );

    node.right = new BSPNode(
        node.x,
        node.y + split,
        node.width,
        node.height - split
    );

    SplitNode(node.left);
    SplitNode(node.right);
}
```

---

# 52. Split Vertical

Tambahkan:

```csharp
private void SplitVertical(BSPNode node)
{
    if (node.width < minLeafSize * 2)
    {
        leafNodes.Add(node);
        return;
    }

    int split = Random.Range(
        minLeafSize,
        node.width - minLeafSize
    );

    node.left = new BSPNode(
        node.x,
        node.y,
        split,
        node.height
    );

    node.right = new BSPNode(
        node.x + split,
        node.y,
        node.width - split,
        node.height
    );

    SplitNode(node.left);
    SplitNode(node.right);
}
```

---

# 53. Visualisasi BSP

Misalnya area awal:

```text
+--------------------------------+
|                                |
|                                |
|                                |
|                                |
+--------------------------------+
```

Split:

```text
+---------------+----------------+
|               |                |
|               |                |
|               |                |
|               |                |
+---------------+----------------+
```

Split lagi:

```text
+-------+-------+----------------+
|       |       |                |
|       |       +---------+------+
|       |       |         |      |
|       |       |         |      |
+-------+-------+---------+------+
```

Setiap bagian akhir adalah Leaf.

---

# 54. CreateRooms

Tambahkan:

```csharp
private void CreateRooms()
{
    rooms.Clear();

    foreach (BSPNode leaf in leafNodes)
    {
        int maxWidth = leaf.width - roomMargin * 2;
        int maxHeight = leaf.height - roomMargin * 2;

        if (maxWidth < minRoomSize ||
            maxHeight < minRoomSize)
        {
            continue;
        }

        int roomWidth = Random.Range(
            minRoomSize,
            maxWidth + 1
        );

        int roomHeight = Random.Range(
            minRoomSize,
            maxHeight + 1
        );

        int maxXOffset =
            leaf.width - roomWidth - roomMargin;

        int maxYOffset =
            leaf.height - roomHeight - roomMargin;

        int roomX = leaf.x +
                    Random.Range(
                        roomMargin,
                        maxXOffset + 1
                    );

        int roomY = leaf.y +
                    Random.Range(
                        roomMargin,
                        maxYOffset + 1
                    );

        DungeonRoom room =
            new DungeonRoom(
                roomX,
                roomY,
                roomWidth,
                roomHeight
            );

        leaf.room = room;

        rooms.Add(room);

        CarveRoom(room);
    }
}
```

---

# 55. CarveRoom

Tambahkan:

```csharp
private void CarveRoom(DungeonRoom room)
{
    for (int x = room.x;
         x < room.x + room.width;
         x++)
    {
        for (int y = room.y;
             y < room.y + room.height;
             y++)
        {
            if (IsInsideGrid(x, y))
            {
                grid[x, y] = TileType.Floor;
            }
        }
    }
}
```

Room mengubah:

```text
Wall
```

menjadi:

```text
Floor
```

---

# 56. IsInsideGrid

Tambahkan utility:

```csharp
private bool IsInsideGrid(int x, int y)
{
    return x >= 0 &&
           x < mapWidth &&
           y >= 0 &&
           y < mapHeight;
}
```

Fungsi ini penting untuk menghindari:

```text
IndexOutOfRangeException
```

---

# 57. Membuat Corridor

Setelah room selesai dibuat, room masih terpisah.

Contoh:

```text
Room A


              Room B


      Room C
```

Kita harus menghubungkannya.

Untuk praktikum dasar kita menghubungkan room berdasarkan urutan list.

---

# 58. CreateCorridors

Tambahkan:

```csharp
private void CreateCorridors()
{
    if (rooms.Count < 2)
        return;

    for (int i = 0; i < rooms.Count - 1; i++)
    {
        Vector2Int from = rooms[i].Center;
        Vector2Int to = rooms[i + 1].Center;

        CreateLCorridor(from, to);
    }
}
```

---

# 59. Create L Corridor

Tambahkan:

```csharp
private void CreateLCorridor(
    Vector2Int from,
    Vector2Int to)
{
    bool horizontalFirst =
        Random.value > 0.5f;

    if (horizontalFirst)
    {
        CarveHorizontal(
            from.x,
            to.x,
            from.y
        );

        CarveVertical(
            from.y,
            to.y,
            to.x
        );
    }
    else
    {
        CarveVertical(
            from.y,
            to.y,
            from.x
        );

        CarveHorizontal(
            from.x,
            to.x,
            to.y
        );
    }
}
```

---

# 60. Corridor Horizontal

Tambahkan:

```csharp
private void CarveHorizontal(
    int x1,
    int x2,
    int y)
{
    int start = Mathf.Min(x1, x2);
    int end = Mathf.Max(x1, x2);

    for (int x = start; x <= end; x++)
    {
        if (IsInsideGrid(x, y))
        {
            grid[x, y] = TileType.Floor;
        }
    }
}
```

---

# 61. Corridor Vertical

Tambahkan:

```csharp
private void CarveVertical(
    int y1,
    int y2,
    int x)
{
    int start = Mathf.Min(y1, y2);
    int end = Mathf.Max(y1, y2);

    for (int y = start; y <= end; y++)
    {
        if (IsInsideGrid(x, y))
        {
            grid[x, y] = TileType.Floor;
        }
    }
}
```

---

# 62. Mengapa Corridor Berbentuk L?

Misalnya:

```text
A = (5,5)
B = (12,10)
```

Jalur:

```text
(5,5)
→ (12,5)
→ (12,10)
```

membentuk:

```text
A -------+
         |
         |
         B
```

Keuntungannya:

- mudah dibuat,
- selalu menghubungkan dua titik,
- tetap mengikuti grid,
- mudah dipahami mahasiswa.

---

# 63. Start dan Goal

Untuk versi awal:

```text
Start = center room pertama
Goal = center room terakhir
```

Tambahkan:

```csharp
private void PlaceStartAndGoal()
{
    if (rooms.Count == 0)
        return;

    startPosition = rooms[0].Center;
    goalPosition = rooms[rooms.Count - 1].Center;

    grid[startPosition.x, startPosition.y]
        = TileType.Start;

    grid[goalPosition.x, goalPosition.y]
        = TileType.Goal;
}
```

---

# 64. Versi Start–Goal yang Lebih Baik

Room terakhir belum tentu room terjauh.

Versi yang lebih baik adalah mencari:

```text
room yang paling jauh dari Start
```

Tambahkan:

```csharp
private DungeonRoom FindFarthestRoom(
    Vector2Int position)
{
    DungeonRoom farthest = rooms[0];
    float farthestDistance = 0f;

    foreach (DungeonRoom room in rooms)
    {
        float distance =
            Vector2Int.Distance(
                position,
                room.Center
            );

        if (distance > farthestDistance)
        {
            farthestDistance = distance;
            farthest = room;
        }
    }

    return farthest;
}
```

Lalu ubah:

```csharp
private void PlaceStartAndGoal()
{
    if (rooms.Count == 0)
        return;

    startPosition = rooms[0].Center;

    DungeonRoom farthestRoom =
        FindFarthestRoom(startPosition);

    goalPosition = farthestRoom.Center;

    grid[startPosition.x, startPosition.y]
        = TileType.Start;

    grid[goalPosition.x, goalPosition.y]
        = TileType.Goal;
}
```

Ini lebih direkomendasikan.

---

# 65. Mengubah Grid menjadi Scene Unity

Sekarang data seperti:

```text
Wall
Floor
Floor
Wall
Goal
```

belum mempunyai visual.

Kita perlu:

```text
Grid Data
↓
GameObject
```

---

# 66. Membuat LevelRoot

Tambahkan:

```csharp
private void CreateLevelRoot()
{
    GameObject root =
        new GameObject("GeneratedLevel");

    levelRoot = root.transform;
}
```

---

# 67. BuildDungeon

Tambahkan:

```csharp
private void BuildDungeon()
{
    CreateLevelRoot();

    for (int x = 0; x < mapWidth; x++)
    {
        for (int y = 0; y < mapHeight; y++)
        {
            Vector3 worldPosition =
                GridToWorld(x, y);

            switch (grid[x, y])
            {
                case TileType.Floor:
                case TileType.Start:
                case TileType.Goal:

                    Instantiate(
                        floorPrefab,
                        worldPosition,
                        Quaternion.identity,
                        levelRoot
                    );

                    break;
            }

            if (grid[x, y] == TileType.Wall &&
                IsWallVisible(x, y))
            {
                Instantiate(
                    wallPrefab,
                    worldPosition +
                    Vector3.up * 0.5f,
                    Quaternion.identity,
                    levelRoot
                );
            }

            if (grid[x, y] == TileType.Goal)
            {
                Instantiate(
                    goalPrefab,
                    worldPosition +
                    Vector3.up * 0.15f,
                    Quaternion.identity,
                    levelRoot
                );
            }
        }
    }
}
```

---

# 68. GridToWorld

Tambahkan:

```csharp
private Vector3 GridToWorld(int x, int y)
{
    return new Vector3(
        x * tileSize,
        0f,
        y * tileSize
    );
}
```

Ini merupakan salah satu konsep Unity terpenting dalam praktikum.

Grid:

```text
(x,y)
```

diubah ke World:

```text
(x,0,z)
```

---

# 69. Optimasi Wall

Tidak semua Wall perlu dibuat sebagai GameObject.

Wall yang sangat jauh dari Floor tidak akan terlihat.

Tambahkan:

```csharp
private bool IsWallVisible(int x, int y)
{
    for (int dx = -1; dx <= 1; dx++)
    {
        for (int dy = -1; dy <= 1; dy++)
        {
            int nx = x + dx;
            int ny = y + dy;

            if (!IsInsideGrid(nx, ny))
                continue;

            if (grid[nx, ny] != TileType.Wall)
                return true;
        }
    }

    return false;
}
```

Dengan ini hanya Wall yang berbatasan dengan area dungeon yang di-render.

---

# 70. Mengapa Optimasi Ini Penting?

Misalnya map:

```text
60 × 40 = 2400 cell
```

Jika semua Wall dibuat sebagai Cube, jumlah GameObject bisa menjadi sangat banyak.

Padahal Wall di area tertutup tidak terlihat dan tidak memiliki fungsi gameplay.

Prinsip penting PCG:

> Jangan hanya memikirkan generation algorithm. Perhatikan juga biaya visualisasi hasil generation.

---

# 71. Spawn Gameplay Objects

Tambahkan:

```csharp
private void SpawnGameplayObjects()
{
    SpawnPlayer();
    SpawnEnemies();
    SpawnItems();
}
```

---

# 72. Membuat Player

Buat:

```text
GameObject → 3D Object → Capsule
```

Rename:

```text
Player
```

Tambahkan:

```text
CharacterController
```

Buat Prefab:

```text
PlayerPrefab
```

---

# 73. SimplePlayerController

Buat:

```text
SimplePlayerController.cs
```

Isi:

```csharp
using UnityEngine;

[RequireComponent(typeof(CharacterController))]
public class SimplePlayerController : MonoBehaviour
{
    [SerializeField] private float moveSpeed = 5f;
    [SerializeField] private float gravity = -9.81f;

    private CharacterController controller;
    private Vector3 velocity;

    private void Awake()
    {
        controller =
            GetComponent<CharacterController>();
    }

    private void Update()
    {
        float horizontal =
            Input.GetAxisRaw("Horizontal");

        float vertical =
            Input.GetAxisRaw("Vertical");

        Vector3 move =
            new Vector3(
                horizontal,
                0f,
                vertical
            ).normalized;

        controller.Move(
            move *
            moveSpeed *
            Time.deltaTime
        );

        if (controller.isGrounded &&
            velocity.y < 0f)
        {
            velocity.y = -2f;
        }

        velocity.y +=
            gravity *
            Time.deltaTime;

        controller.Move(
            velocity *
            Time.deltaTime
        );
    }
}
```

---

# 74. Catatan Input Unity

Jika project menggunakan konfigurasi Input lama / compatibility input, script tersebut dapat menggunakan:

```text
Horizontal
Vertical
```

dengan kontrol default:

```text
W / S
A / D
Arrow Keys
```

Apabila project hanya menggunakan **Input System** baru, implementasi input perlu disesuaikan.

Untuk fokus Praktikum PCG, penggunaan input sederhana sudah mencukupi.

---

# 75. Spawn Player

Kembali ke `DungeonGenerator.cs`.

Tambahkan:

```csharp
private void SpawnPlayer()
{
    if (playerPrefab == null)
        return;

    Vector3 position =
        GridToWorld(
            startPosition.x,
            startPosition.y
        );

    Instantiate(
        playerPrefab,
        position + Vector3.up * 1f,
        Quaternion.identity
    );
}
```

Player muncul pada Start Room.

---

# 76. Membuat Enemy Prefab

Buat:

```text
Capsule
```

Rename:

```text
EnemyPrefab
```

Gunakan material berbeda.

Untuk Praktikum 10, Enemy belum harus memiliki AI kompleks.

Tujuan utama:

```text
procedural placement
```

---

# 77. SimpleEnemy

Opsional, buat:

```csharp
using UnityEngine;

public class SimpleEnemy : MonoBehaviour
{
    [SerializeField] private float rotationSpeed = 60f;

    private void Update()
    {
        transform.Rotate(
            Vector3.up,
            rotationSpeed * Time.deltaTime
        );
    }
}
```

Ini hanya agar Enemy mudah dikenali.

Mahasiswa dapat menggantinya dengan NPC AI dari praktikum sebelumnya.

---

# 78. Random Floor Position

Enemy harus spawn pada:

```text
Floor
```

bukan Wall.

Tambahkan:

```csharp
private Vector2Int GetRandomFloorPosition()
{
    for (int attempt = 0;
         attempt < 100;
         attempt++)
    {
        int x = Random.Range(1, mapWidth - 1);
        int y = Random.Range(1, mapHeight - 1);

        if (grid[x, y] == TileType.Floor)
        {
            return new Vector2Int(x, y);
        }
    }

    return startPosition;
}
```

---

# 79. Spawn Enemy

Tambahkan:

```csharp
private void SpawnEnemies()
{
    if (enemyPrefab == null)
        return;

    for (int i = 0; i < enemyCount; i++)
    {
        Vector2Int gridPosition =
            GetRandomFloorPosition();

        float distanceFromStart =
            Vector2Int.Distance(
                gridPosition,
                startPosition
            );

        if (distanceFromStart < 8f)
        {
            i--;
            continue;
        }

        Vector3 worldPosition =
            GridToWorld(
                gridPosition.x,
                gridPosition.y
            );

        GameObject enemy =
            Instantiate(
                enemyPrefab,
                worldPosition +
                Vector3.up * 1f,
                Quaternion.identity,
                levelRoot
            );

        enemy.name = "Enemy_" + i;
    }
}
```

---

# 80. Constraint pada Enemy

Perhatikan:

```csharp
if (distanceFromStart < 8f)
```

Ini merupakan contoh sederhana:

## Constraint-Based PCG

Aturannya:

```text
Enemy tidak boleh terlalu dekat dengan Start.
```

Random menentukan lokasi kandidat.

Constraint menentukan:

```text
lokasi tersebut boleh dipakai atau tidak.
```

---

# 81. Membuat Item Prefab

Buat:

```text
3D Object → Sphere
```

Rename:

```text
ItemPrefab
```

Scale:

```text
0.3
0.3
0.3
```

Tambahkan material.

Buat Prefab.

---

# 82. Spawn Item

Tambahkan:

```csharp
private void SpawnItems()
{
    if (itemPrefab == null)
        return;

    for (int i = 0; i < itemCount; i++)
    {
        Vector2Int gridPosition =
            GetRandomFloorPosition();

        Vector3 worldPosition =
            GridToWorld(
                gridPosition.x,
                gridPosition.y
            );

        GameObject item =
            Instantiate(
                itemPrefab,
                worldPosition +
                Vector3.up * 0.5f,
                Quaternion.identity,
                levelRoot
            );

        item.name = "Item_" + i;
    }
}
```

---

# 83. Clear Dungeon

Agar generator dapat dijalankan kembali, dungeon lama perlu dihapus.

Tambahkan:

```csharp
private void ClearDungeon()
{
    GameObject existing =
        GameObject.Find("GeneratedLevel");

    if (existing != null)
    {
        Destroy(existing);
    }

    GameObject oldPlayer =
        GameObject.FindWithTag("Player");

    if (oldPlayer != null)
    {
        Destroy(oldPlayer);
    }
}
```

PlayerPrefab sebaiknya diberi:

```text
Tag = Player
```

---

# 84. Menyiapkan DungeonGenerator di Inspector

Pilih:

```text
DungeonGenerator
```

Tambahkan component:

```text
DungeonGenerator.cs
```

Isi Inspector:

```text
Dungeon Size
    Map Width       = 60
    Map Height      = 40
    Tile Size       = 1

BSP Settings
    Min Leaf Size   = 12
    Max Leaf Size   = 20

Room Settings
    Min Room Size   = 5
    Room Margin     = 2

Generation
    Seed            = 12345
    Random Seed     = false

Spawn Settings
    Enemy Count     = 8
    Item Count      = 5
```

Drag Prefab:

```text
Floor Prefab → Floor Prefab
Wall Prefab  → Wall Prefab
Goal Prefab  → Goal Prefab
Player       → Player Prefab
Enemy        → Enemy Prefab
Item         → Item Prefab
```

---

# 85. Mengatur Kamera

Untuk top-down view, letakkan Main Camera kira-kira:

```text
Position:
X = mapWidth / 2
Y = 45
Z = mapHeight / 2
```

Rotation:

```text
X = 90
Y = 0
Z = 0
```

Jika dungeon terlalu besar, tingkatkan nilai Y.

---

# 86. Pengujian Pertama

Tekan:

```text
Play
```

Dungeon seharusnya menghasilkan:

```text
beberapa room
+
corridor
+
wall
+
player
+
goal
+
enemy
+
item
```

Periksa Console.

Output:

```text
Dungeon generated with seed: 12345
```

---

# 87. Pengujian Seed

Gunakan:

```text
Random Seed = false
Seed = 12345
```

Play.

Catat bentuk dungeon.

Stop.

Play lagi.

Dungeon seharusnya menghasilkan konfigurasi prosedural yang konsisten selama seluruh random sequence dan parameter generator juga sama.

Kemudian ubah:

```text
Seed = 999
```

Dungeon akan berubah.

---

# 88. Mengapa Seed Sangat Penting?

Bayangkan mahasiswa menemukan bug:

```text
Player terjebak
```

Jika tidak menggunakan seed:

```text
Run berikutnya dungeon sudah berubah.
```

Bug sulit direproduksi.

Dengan seed:

```text
Bug ditemukan pada Seed 64521.
```

Developer dapat menggunakan:

```text
Seed 64521
```

dan melihat layout yang sama kembali.

---

# 89. Debug Visualization dengan Gizmos

Tambahkan ke `DungeonGenerator.cs`:

```csharp
private void OnDrawGizmos()
{
    if (rooms == null)
        return;

    Gizmos.color = Color.yellow;

    foreach (DungeonRoom room in rooms)
    {
        Vector3 center =
            new Vector3(
                (room.x + room.width / 2f) * tileSize,
                0.2f,
                (room.y + room.height / 2f) * tileSize
            );

        Vector3 size =
            new Vector3(
                room.width * tileSize,
                0.2f,
                room.height * tileSize
            );

        Gizmos.DrawWireCube(
            center,
            size
        );
    }
}
```

---

# 90. Apa Itu Gizmos?

Gizmos adalah visual debugging di Unity Scene View.

Gizmos tidak menjadi bagian utama visual game.

Contoh kegunaan:

- melihat detection radius,
- melihat waypoint,
- melihat room boundary,
- melihat corridor,
- melihat sensor AI,
- melihat spawn point.

Pada praktikum ini:

```text
garis kuning = batas Room BSP
```

---

# 91. Validasi Dungeon

Dungeon procedural sebaiknya tidak langsung dianggap valid hanya karena terlihat benar.

Beberapa **hard constraint**:

```text
Room minimal satu.
Start tersedia.
Goal tersedia.
Start berada pada floor.
Goal berada pada floor.
Start dan Goal terhubung.
```

Beberapa **soft constraint**:

```text
Start dan Goal cukup jauh.
Jumlah Enemy tidak terlalu banyak.
Item tersebar.
Room tidak terlalu kecil.
Dungeon tidak terlalu linear.
```

---

# 92. Validasi Sederhana

Tambahkan:

```csharp
private bool ValidateDungeon()
{
    if (rooms == null || rooms.Count < 2)
    {
        Debug.LogWarning(
            "Dungeon invalid: jumlah room terlalu sedikit."
        );

        return false;
    }

    if (!IsInsideGrid(
            startPosition.x,
            startPosition.y))
    {
        return false;
    }

    if (!IsInsideGrid(
            goalPosition.x,
            goalPosition.y))
    {
        return false;
    }

    return true;
}
```

---

# 93. Validasi Konektivitas dengan BFS

Versi lebih baik menggunakan:

## Breadth-First Search

Tujuan:

```text
Mulai dari Start
↓
jelajahi seluruh Floor yang terhubung
↓
apakah Goal ditemukan?
```

Tambahkan:

```csharp
private bool HasPathToGoal()
{
    bool[,] visited =
        new bool[mapWidth, mapHeight];

    Queue<Vector2Int> queue =
        new Queue<Vector2Int>();

    queue.Enqueue(startPosition);

    visited[
        startPosition.x,
        startPosition.y
    ] = true;

    Vector2Int[] directions =
    {
        Vector2Int.up,
        Vector2Int.down,
        Vector2Int.left,
        Vector2Int.right
    };

    while (queue.Count > 0)
    {
        Vector2Int current =
            queue.Dequeue();

        if (current == goalPosition)
        {
            return true;
        }

        foreach (Vector2Int direction
                 in directions)
        {
            Vector2Int next =
                current + direction;

            if (!IsInsideGrid(
                    next.x,
                    next.y))
            {
                continue;
            }

            if (visited[
                    next.x,
                    next.y])
            {
                continue;
            }

            if (grid[
                    next.x,
                    next.y]
                == TileType.Wall)
            {
                continue;
            }

            visited[
                next.x,
                next.y
            ] = true;

            queue.Enqueue(next);
        }
    }

    return false;
}
```

---

# 94. Mengintegrasikan Validasi

Setelah:

```csharp
PlaceStartAndGoal();
```

tambahkan:

```csharp
if (!HasPathToGoal())
{
    Debug.LogWarning(
        "Dungeon tidak valid: Goal tidak dapat dicapai."
    );

    return;
}
```

Secara ideal pipeline menjadi:

```text
Generate
↓
Validate
↓
Build
```

bukan:

```text
Generate
↓
Build
↓
baru tahu salah
```

---

# 95. Hubungan dengan Materi Pathfinding

BFS pada praktikum ini bukan dipakai agar NPC bergerak.

BFS dipakai sebagai:

```text
PCG Validation Tool
```

Ini menunjukkan bahwa algoritma pathfinding dapat memiliki fungsi lain.

Materi pathfinding sebelumnya digunakan untuk:

```text
NPC mencari jalan
```

Sekarang digunakan untuk:

```text
Generator memeriksa apakah level dapat dimainkan
```

---

# 96. Constraint-Based Generation

Perhatikan struktur praktikum:

```text
BSP
↓
Generate Candidate
↓
Start / Goal
↓
Check Connectivity
↓
Check Enemy Distance
↓
Accept
```

Artinya BSP dapat digabungkan dengan:

```text
Constraint-Based Generation
```

BSP bertugas:

```text
menghasilkan layout
```

Constraint bertugas:

```text
menentukan apakah layout layak digunakan
```

---

# 97. Menambahkan Regeneration

Tambahkan:

```csharp
private void Update()
{
    if (Input.GetKeyDown(KeyCode.R))
    {
        seed++;
        GenerateDungeon();
    }
}
```

Ketika:

```text
R
```

ditekan:

```text
seed bertambah
↓
dungeon baru dibuat
```

Ini sangat berguna untuk demonstrasi di kelas.

---

# 98. Catatan Penting ClearDungeon

`Destroy()` tidak langsung menghancurkan Object pada baris kode tersebut; penghancuran dilakukan oleh Unity setelah siklus frame terkait.

Karena itu, jika fungsi regenerate dikembangkan lebih lanjut, mahasiswa sebaiknya memahami bahwa pengelolaan object runtime dan hierarchy perlu dilakukan dengan hati-hati.

Untuk praktikum dasar, pendekatan ini masih cukup.

---

# 99. Pengembangan: NavMesh

Dungeon ini dapat dikembangkan menggunakan:

```text
AI Navigation
```

Alur:

```text
Generate Dungeon
↓
Build NavMesh
↓
Spawn Enemy
↓
Enemy menggunakan NavMeshAgent
```

Secara arsitektur:

```text
Dungeon Generator
        │
        ↓
Generated Geometry
        │
        ↓
NavMeshSurface
        │
        ↓
NavMesh
        │
        ↓
Enemy NavMeshAgent
```

Bagian ini direkomendasikan sebagai **pengembangan lanjutan**, bukan keharusan minimum Praktikum 10.

---

# 100. Mengapa NavMesh Cocok untuk BSP?

Dungeon BSP menghasilkan:

```text
room rectangular
+
corridor
```

Sehingga area walkable relatif jelas.

Ini membuat BSP sangat mudah dikembangkan menjadi environment untuk:

```text
NPC Guard
FSM Enemy
Behavior Tree
Utility AI
Tactical AI
```

yang telah dipelajari pada pertemuan sebelumnya.

---

# 101. Hierarchy Akhir

Saat Play:

```text
PCG_Dungeon_Scene
│
├── Main Camera
├── Directional Light
├── DungeonGenerator
│
├── GeneratedLevel
│   ├── FloorPrefab(Clone)
│   ├── FloorPrefab(Clone)
│   ├── ...
│   ├── WallPrefab(Clone)
│   ├── ...
│   ├── GoalPrefab(Clone)
│   ├── Enemy_0
│   ├── Enemy_1
│   ├── ...
│   └── Item_0
│
└── PlayerPrefab(Clone)
```

---

# 102. Eksperimen 1 — Seed

Uji:

```text
Seed 100
Seed 200
Seed 300
Seed 400
Seed 500
```

Catat:

- jumlah room,
- bentuk room,
- panjang corridor,
- posisi Goal.

Pertanyaan:

> Mengapa hanya mengubah satu angka dapat menghasilkan dungeon yang berbeda?

---

# 103. Eksperimen 2 — Min Leaf Size

Uji:

```text
minLeafSize = 8
minLeafSize = 12
minLeafSize = 16
```

Amati:

```text
jumlah area BSP
jumlah room
ukuran room
```

Hipotesis:

```text
minLeafSize kecil
→ lebih banyak kemungkinan area kecil

minLeafSize besar
→ lebih sedikit area tetapi lebih besar
```

---

# 104. Eksperimen 3 — Room Margin

Bandingkan:

```text
roomMargin = 1
roomMargin = 2
roomMargin = 4
```

Perhatikan jarak room terhadap batas Leaf.

---

# 105. Eksperimen 4 — Ukuran Dungeon

Bandingkan:

```text
40 × 30
60 × 40
80 × 60
```

Perhatikan:

- jumlah tile,
- jumlah GameObject,
- waktu generation,
- ukuran dungeon.

---

# 106. Eksperimen 5 — Enemy Density

Bandingkan:

```text
Enemy Count = 5
Enemy Count = 10
Enemy Count = 20
```

Diskusikan:

> Apakah jumlah Enemy seharusnya menjadi angka absolut atau disesuaikan dengan luas Floor?

---

# 107. Pengembangan Enemy Density

Versi lebih baik:

```text
Enemy density =
jumlah enemy / jumlah floor
```

Contoh:

```text
1 enemy setiap 50 floor tile
```

Dengan demikian:

```text
Dungeon kecil → Enemy sedikit
Dungeon besar → Enemy lebih banyak
```

---

# 108. Eksperimen 6 — Start/Goal

Bandingkan:

## Strategi A

```text
First Room
→ Last Room
```

## Strategi B

```text
First Room
→ Geometrically Farthest Room
```

## Strategi C

```text
Start
→ Room dengan shortest-path distance terpanjang
```

Strategi C paling baik tetapi membutuhkan perhitungan graph/grid distance.

---

# 109. Kesalahan Umum 1

## Dungeon tidak muncul

Periksa:

```text
DungeonGenerator.cs sudah dipasang?
Prefab sudah dimasukkan Inspector?
Ada error di Console?
```

---

# 110. Kesalahan Umum 2

## NullReferenceException

Kemungkinan:

```text
floorPrefab kosong
wallPrefab kosong
playerPrefab kosong
```

Periksa Inspector.

---

# 111. Kesalahan Umum 3

## IndexOutOfRangeException

Penyebab umum:

```text
mengakses grid[x,y]
```

dengan:

```text
x < 0
atau
x >= mapWidth
```

Gunakan:

```csharp
IsInsideGrid()
```

sebelum mengakses cell ketika koordinat berpotensi keluar batas.

---

# 112. Kesalahan Umum 4

## Room terlalu sedikit

Periksa:

```text
Map terlalu kecil
Min Leaf Size terlalu besar
Max Leaf Size terlalu besar
Room Margin terlalu besar
```

---

# 113. Kesalahan Umum 5

## Dungeon terlalu padat

Kurangi:

```text
minRoomSize
```

atau tambah:

```text
roomMargin
```

---

# 114. Kesalahan Umum 6

## Corridor terlalu sempit

Versi kita menggunakan:

```text
corridorWidth = 1
```

Sebagai pengembangan, mahasiswa dapat membuat:

```text
corridorWidth = 2
```

atau:

```text
3
```

---

# 115. Corridor Width 2

Contoh modifikasi horizontal:

```csharp
private void CarveHorizontalWide(
    int x1,
    int x2,
    int y,
    int width)
{
    int start = Mathf.Min(x1, x2);
    int end = Mathf.Max(x1, x2);

    for (int x = start; x <= end; x++)
    {
        for (int offset = 0;
             offset < width;
             offset++)
        {
            int targetY = y + offset;

            if (IsInsideGrid(x, targetY))
            {
                grid[x, targetY]
                    = TileType.Floor;
            }
        }
    }
}
```

---

# 116. Pengembangan Boss Room

Goal Room dapat diubah menjadi:

```text
Boss Room
```

Strategi:

```text
Start Room
↓
hitung room terjauh
↓
Goal Room
↓
Boss Spawn
```

Constraint:

```text
Boss hanya boleh spawn di Goal Room.
```

---

# 117. Pengembangan Treasure

Treasure sebaiknya tidak sepenuhnya random.

Contoh rule:

```text
Treasure berada di room
yang tidak memiliki Start atau Goal.
```

Pengembangan lebih lanjut:

```text
Treasure ditempatkan pada dead-end.
```

Ini membuat exploration mempunyai reward.

---

# 118. Hard Constraint dan Soft Constraint

## Hard Constraint

Wajib benar.

Contoh:

```text
Start tersedia.
Goal tersedia.
Start–Goal memiliki path.
Player tidak spawn di Wall.
Enemy tidak spawn di Wall.
```

Jika gagal:

```text
Dungeon invalid.
```

## Soft Constraint

Lebih baik terpenuhi.

Contoh:

```text
Goal jauh dari Start.
Enemy tersebar merata.
Treasure ada di room samping.
Dungeon tidak terlalu linear.
```

---

# 119. Generate-and-Test

Dungeon generator profesional sering menggunakan pola:

```text
Generate
↓
Test
↓
Valid?
├── YES → Use
└── NO  → Regenerate
```

Untuk praktikum dapat dibuat:

```text
maxGenerationAttempts = 10
```

sehingga generator tidak mencoba tanpa batas.

---

# 120. Metrics Dungeon

Untuk tugas pengembangan, mahasiswa dapat mencatat:

```text
Room Count
Floor Count
Wall Count
Corridor Length
Start–Goal Distance
Enemy Count
Item Count
Floor Percentage
```

Contoh:

```text
Seed           : 12450
Rooms          : 8
Floor Tiles    : 620
StartGoalDist  : 47
Enemies        : 8
Items          : 5
```

---

# 121. Mengapa Metrics Penting?

Tanpa metrics mahasiswa hanya mengatakan:

```text
"Dungeon ini terlihat bagus."
```

Dengan metrics:

```text
Seed A
Path Length = 30

Seed B
Path Length = 65
```

Kita mempunyai data yang dapat dibandingkan.

PCG tidak hanya dapat dievaluasi secara visual tetapi juga secara kuantitatif.

---

# 122. Hubungan dengan Dynamic Difficulty Adjustment

Praktikum ini merupakan fondasi untuk materi berikutnya.

PCG dapat menerima parameter seperti:

```text
Enemy Count
Item Count
Dungeon Size
Room Count
Path Length
```

Kemudian DDA dapat mengubahnya.

Contoh:

```text
Player terlalu kuat

↓ 

enemyCount += 3
itemCount -= 1
dungeonSize meningkat
```

Atau:

```text
Player kesulitan

↓

enemyCount berkurang
itemCount bertambah
path lebih pendek
```

---

# 123. Perbandingan dengan Random Walk

## BSP

Hasil:

```text
Room
│
Corridor
│
Room
```

Karakter:

```text
Terstruktur
Rectangular
Mudah digunakan untuk combat room
```

## Random Walk

Hasil:

```text
jalur organik dan berliku
```

Karakter:

```text
Natural
Tidak terlalu terstruktur
Cocok untuk cave
```

---

# 124. Perbandingan dengan Cellular Automata

## BSP

Cocok:

```text
Dungeon
Building
Facility
Laboratory
RPG Room
```

## Cellular Automata

Cocok:

```text
Cave
Natural cavern
Underground environment
Alien nest
```

Cellular Automata membutuhkan perhatian lebih besar terhadap region yang terputus.

---

# 125. Rekomendasi Tingkat Praktikum

## Wajib

Mahasiswa harus menyelesaikan:

```text
Grid
Seed
BSP
Room
Corridor
Start
Goal
Floor
Wall
Player
Enemy Placement
Item Placement
```

## Pengembangan

Minimal satu:

```text
BFS Validation
NavMesh
Boss Room
Treasure Room
Runtime Regeneration
Dungeon Metrics
Improved Goal Placement
```

---

# 126. Tugas Eksperimen

Mahasiswa melakukan minimal **5 generation** menggunakan seed berbeda.

Contoh tabel:

| Seed | Rooms | Enemy | Item | Start–Goal Distance | Valid |
|---|---:|---:|---:|---:|---|
| 101 | ... | ... | ... | ... | Yes/No |
| 202 | ... | ... | ... | ... | Yes/No |
| 303 | ... | ... | ... | ... | Yes/No |
| 404 | ... | ... | ... | ... | Yes/No |
| 505 | ... | ... | ... | ... | Yes/No |

Kemudian mahasiswa menjelaskan:

1. pengaruh seed,
2. pengaruh parameter BSP,
3. kualitas struktur dungeon,
4. konektivitas,
5. variasi antar-level.

---

# 127. Pertanyaan Analisis

Jawab pada laporan:

1. Apa perbedaan random dan procedural generation?

2. Mengapa level procedural tidak cukup hanya menggunakan random?

3. Mengapa diperlukan seed?

4. Apa fungsi grid pada dungeon generator?

5. Mengapa BSP cocok untuk room-based dungeon?

6. Apa yang dimaksud Leaf dalam BSP?

7. Mengapa Room tidak dibuat memenuhi seluruh Leaf?

8. Apa fungsi corridor?

9. Mengapa corridor berbentuk L mudah digunakan?

10. Apa yang dimaksud hard constraint?

11. Apa yang dimaksud soft constraint?

12. Mengapa Enemy tidak boleh spawn dekat Start?

13. Mengapa level perlu divalidasi?

14. Bagaimana BFS dapat memvalidasi dungeon?

15. Apa keuntungan menggabungkan PCG dengan NavMesh dan AI?

---

# 128. Checklist Keberhasilan Praktikum

Dungeon dinyatakan berhasil jika:

- [ ] Project Unity berhasil berjalan.
- [ ] Dungeon dibuat secara procedural.
- [ ] Dungeon menggunakan grid.
- [ ] BSP membagi area dungeon.
- [ ] Room berhasil dibuat.
- [ ] Corridor berhasil menghubungkan room.
- [ ] Floor berhasil dibuat dari grid.
- [ ] Wall berhasil dibuat.
- [ ] Player muncul pada Start.
- [ ] Goal muncul pada lokasi valid.
- [ ] Enemy hanya muncul pada Floor.
- [ ] Enemy tidak terlalu dekat Start.
- [ ] Item muncul pada Floor.
- [ ] Seed dapat diubah.
- [ ] Seed berbeda menghasilkan variasi dungeon.
- [ ] Seed yang sama dapat digunakan untuk mereproduksi generation.
- [ ] Tidak muncul error pada Console.
- [ ] Dungeon dapat dimainkan.

---

# 129. Rekomendasi Pengembangan Terbaik

Setelah versi dasar berhasil, urutan pengembangan yang saya rekomendasikan:

```text
Tahap 1
BSP Dungeon
        ↓
Tahap 2
BFS Validation
        ↓
Tahap 3
Farthest Goal Placement
        ↓
Tahap 4
Enemy + Item Constraint
        ↓
Tahap 5
Runtime NavMesh
        ↓
Tahap 6
Enemy AI
        ↓
Tahap 7
Boss / Treasure Room
        ↓
Tahap 8
Dungeon Metrics
```

Urutan ini menjaga agar kompleksitas bertambah secara bertahap.

---

# 130. Rekomendasi Praktikum Utama

Dari teknik yang dibahas pada Pertemuan 10:

```text
Grid Random Fill
Random Walk
BSP
Cellular Automata
Constraint-Based Generation
```

pilihan yang paling sesuai untuk praktikum utama adalah:

# BSP ROOM–CORRIDOR DUNGEON + CONSTRAINT VALIDATION

Alasannya:

1. merepresentasikan materi PCG dengan jelas,
2. memperlihatkan hubungan data dan visual Unity,
3. hasil mudah diamati mahasiswa,
4. procedural tetapi tetap terstruktur,
5. mudah menjamin konektivitas,
6. mudah dikembangkan,
7. cocok untuk NavMesh,
8. cocok untuk NPC AI,
9. dapat menggunakan materi Pathfinding sebelumnya,
10. cocok menjadi dasar mini-project dungeon crawler.

---

# 131. Alternatif Praktikum yang Lebih Mudah

Jika waktu praktikum terbatas, gunakan:

# RANDOM WALK DUNGEON

Pipeline:

```text
Create Grid
↓
Fill Wall
↓
Start dari tengah
↓
Random Walk
↓
Carve Floor
↓
Pilih Floor terjauh sebagai Goal
↓
Spawn Enemy
↓
Build Level
```

Random Walk lebih mudah diimplementasikan tetapi tidak memberikan struktur room–corridor sejelas BSP.

---

# 132. Alternatif Praktikum Lanjutan

Untuk mahasiswa yang ingin tantangan lebih tinggi:

# HYBRID PROCEDURAL DUNGEON

Gunakan:

```text
BSP
↓
Room Generation
↓
L-Corridor
↓
Constraint Validation
↓
BFS Distance
↓
Boss Room
↓
Treasure Room
↓
Enemy Distribution
↓
Runtime NavMesh
↓
Enemy AI
```

Pendekatan ini sangat cocok dijadikan basis pengembangan project lebih besar.

---

# 133. Nama Project Final

## Rekomendasi utama

```text
GameCerdas_P10_PCG_BSP_Dungeon
```

## Nama Scene

```text
PCG_Dungeon_Scene
```

## Nama generator

```text
DungeonGenerator
```

## Nama root runtime

```text
GeneratedLevel
```

Nama project ini jelas menunjukkan:

```text
Game Cerdas
Pertemuan 10
Procedural Content Generation
Binary Space Partitioning
Dungeon
```

---

# 134. Kesimpulan

Pada praktikum ini mahasiswa tidak sekadar membuat dungeon acak.

Mahasiswa membangun sebuah pipeline:

```text
Representasi Data
        ↓
Procedural Algorithm
        ↓
Random Seed
        ↓
BSP Partitioning
        ↓
Room Generation
        ↓
Corridor Generation
        ↓
Constraint
        ↓
Validation
        ↓
Unity Scene Building
        ↓
Gameplay Object Placement
```

Konsep paling penting adalah:

```text
PCG ≠ Random
```

melainkan:

```text
PCG
=
Randomness
+
Algorithm
+
Rule
+
Constraint
+
Validation
+
Design Goal
```

Dungeon yang baik bukan dungeon yang sekadar berbeda setiap kali dibuat.

Dungeon yang baik harus:

```text
bervariasi
+
terhubung
+
dapat dimainkan
+
mempunyai tujuan
+
memiliki tantangan
+
dapat divalidasi
```

Dengan demikian, praktikum ini menjadi penghubung antara:

```text
PCG Fundamentals
Pathfinding
Game AI
Procedural Level Design
```

dan materi berikutnya:

```text
Dynamic Difficulty Adjustment
```