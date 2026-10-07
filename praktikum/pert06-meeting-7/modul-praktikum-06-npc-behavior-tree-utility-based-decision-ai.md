# MODUL PRAKTIKUM 06  
# GAME CERDAS

## NPC Behavior Tree & Utility-Based Decision AI

**Mata Kuliah:** Game Cerdas  
**Program Studi:** S1 Teknik Informatika  
**Semester:** 7  
**Tools:** Unity 6 + C#  
**Materi:** Behavior Tree & Utility-Based AI

---

# 1. Tujuan Praktikum

Pada praktikum ini mahasiswa akan membuat sebuah **NPC Enemy** yang mampu memilih perilaku berdasarkan kondisi lingkungan menggunakan **Behavior Tree (BT)**.

NPC memiliki empat perilaku utama:

```text
Flee
Attack
Chase
Patrol
```

Prioritas perilakunya adalah:

```text
Flee > Attack > Chase > Patrol
```

NPC akan:

1. melakukan **Patrol** ketika player tidak terlihat,
2. melakukan **Chase** ketika player terlihat tetapi masih jauh,
3. melakukan **Attack** ketika player terlihat dan berada dalam jarak serang,
4. melakukan **Flee** ketika health NPC rendah.

Setelah menyelesaikan praktikum, mahasiswa diharapkan mampu:

1. memahami konsep Behavior Tree;
2. memahami `Success`, `Failure`, dan `Running`;
3. membuat base node Behavior Tree;
4. membuat `Selector`;
5. membuat `Sequence`;
6. membuat `Condition Node`;
7. membuat `Action Node`;
8. memahami fungsi `Decorator`;
9. memahami konsep Blackboard;
10. menghubungkan Behavior Tree dengan `NavMeshAgent`;
11. menghubungkan perception dengan decision making;
12. membandingkan FSM dengan Behavior Tree;
13. memahami prinsip dasar Utility-Based AI;
14. melakukan debugging terhadap perilaku NPC.

---

# 2. Rekomendasi Praktikum

Materi Pertemuan 6 menyediakan dua alternatif:

```text
Pilihan A — NPC Behavior Tree

Pilihan B — NPC Utility-Based Decision
```

Untuk **Praktikum 06**, pilihan yang direkomendasikan adalah:

> **NPC dengan Behavior Tree sebagai praktikum utama.**

Sedangkan:

> **Utility-Based AI digunakan sebagai eksperimen/pengembangan lanjutan.**

Alasannya adalah karena mahasiswa pada Pertemuan 5 baru mempelajari FSM.

Dengan demikian perkembangan konsep decision making menjadi lebih jelas:

```text
Praktikum 05
Finite State Machine
        ↓
State + Transition
        ↓
Patrol → Chase → Attack → Flee

Praktikum 06
Behavior Tree
        ↓
Priority + Condition + Action
        ↓
Selector
├── Flee
├── Attack
├── Chase
└── Patrol
```

Mahasiswa dapat melihat bahwa **perilaku NPC sebenarnya sama**, tetapi **arsitektur decision making-nya berubah**.

Ini sangat baik untuk memahami mengapa Behavior Tree menjadi alternatif terhadap FSM ketika perilaku NPC semakin kompleks.

---

# 3. Nama Project yang Direkomendasikan

Nama project:

```text
GameCerdas_P06_BehaviorTreeAI
```

Alternatif:

```text
Praktikum06_BehaviorTreeAI
```

Nama scene:

```text
P06_BehaviorTree
```

---

# 4. Gambaran Hasil Akhir

Scene praktikum akan memiliki struktur:

```text
P06_BehaviorTree
│
├── Environment
│   ├── Ground
│   ├── Wall01
│   ├── Wall02
│   └── NavMeshSurface
│
├── Player
│
├── Enemy
│   ├── NavMeshAgent
│   └── EnemyBTController
│
├── PatrolPoints
│   ├── Waypoint01
│   ├── Waypoint02
│   ├── Waypoint03
│   └── Waypoint04
│
├── SafePoint
│
├── Main Camera
│
└── Directional Light
```

Behavior Tree NPC:

```text
Root
 └── Selector
      │
      ├── Sequence — Flee
      │    ├── Is Health Low?
      │    └── Flee
      │
      ├── Sequence — Attack
      │    ├── Can See Player?
      │    ├── In Attack Range?
      │    └── Cooldown
      │         └── Attack
      │
      ├── Sequence — Chase
      │    ├── Can See Player?
      │    └── Chase
      │
      └── Patrol
```

Urutan node pada Selector sangat penting karena menunjukkan **prioritas**.

---

# 5. Perbedaan dengan Praktikum FSM Sebelumnya

Pada FSM, kita berpikir:

```text
State aktif sekarang apa?
```

Contoh:

```text
PATROL
   ↓
CHASE
   ↓
ATTACK
```

Untuk pindah state diperlukan transition:

```text
Patrol → Chase
Chase → Attack
Attack → Chase
Chase → Patrol
Attack → Flee
Patrol → Flee
...
```

Semakin banyak state, semakin banyak kemungkinan transition.

Pada Behavior Tree kita berpikir:

```text
Perilaku dengan prioritas tertinggi
yang memenuhi kondisi sekarang apa?
```

Contoh:

```text
Selector
│
├── Flee?
├── Attack?
├── Chase?
└── Patrol
```

Tidak diperlukan transition eksplisit:

```text
Attack → Chase
Chase → Patrol
Patrol → Flee
```

Tree dievaluasi kembali dan memilih branch yang sesuai.

---

# 6. Istilah Teknis Penting

## 6.1 GameObject

`GameObject` adalah objek dasar dalam sebuah scene Unity.

Contoh:

```text
Player
Enemy
Ground
Wall
Waypoint
```

GameObject dapat memiliki berbagai **Component**.

Contoh:

```text
Enemy
├── Transform
├── Capsule Collider
├── NavMeshAgent
└── EnemyBTController
```

---

# 6.2 Component

Component memberikan fungsi tertentu kepada GameObject.

Contoh:

| Component | Fungsi |
|---|---|
| Transform | posisi, rotasi, scale |
| Collider | area collision |
| Rigidbody | simulasi fisika |
| NavMeshAgent | navigasi NPC |
| Script | perilaku custom |
| Animator | animasi |

---

# 6.3 Transform

Setiap GameObject memiliki `Transform`.

Transform menyimpan:

```text
Position
Rotation
Scale
```

Contoh:

```csharp
player.position
```

mengambil posisi player.

---

# 6.4 MonoBehaviour

`MonoBehaviour` adalah base class yang umum digunakan untuk script yang dipasang sebagai Component pada GameObject.

Contoh:

```csharp
public class EnemyBTController : MonoBehaviour
{
}
```

Karena mewarisi `MonoBehaviour`, script dapat menggunakan event Unity seperti:

```csharp
Start()
Update()
OnDrawGizmosSelected()
```

---

# 6.5 SerializeField

Contoh:

```csharp
[SerializeField]
private float visionRange = 10f;
```

`SerializeField` membuat private variable dapat ditampilkan dan diubah melalui **Inspector**.

Keuntungan:

```text
variable tetap private
+
nilai dapat diatur dari Unity Editor
```

---

# 6.6 Vector3

`Vector3` merepresentasikan nilai tiga dimensi:

```text
x
y
z
```

Contoh:

```csharp
Vector3 direction = player.position - transform.position;
```

Digunakan untuk:

- posisi;
- arah;
- kecepatan;
- jarak;
- perhitungan movement.

---

# 6.7 NavMesh

NavMesh adalah representasi area yang dapat dilalui agent.

Secara konsep:

```text
Geometry Scene
       ↓
Bake NavMesh
       ↓
Walkable Area
       ↓
NavMeshAgent bergerak di atas area tersebut
```

Unity 6 menggunakan paket AI Navigation untuk pembuatan dan pengelolaan NavMesh.

---

# 6.8 NavMeshSurface

`NavMeshSurface` menentukan permukaan yang digunakan untuk membuat NavMesh.

Prosesnya:

```text
Ground + Environment
        ↓
NavMeshSurface
        ↓
Bake
        ↓
NavMesh
```

Komponen ini dapat digunakan untuk menentukan geometri scene yang berpartisipasi dalam pembangunan NavMesh.

---

# 6.9 NavMeshAgent

`NavMeshAgent` adalah Component yang membuat NPC dapat bergerak menggunakan NavMesh.

Contoh:

```csharp
agent.SetDestination(player.position);
```

Artinya:

> meminta NavMeshAgent mencari path menuju posisi player.

`SetDestination()` memperbarui destination dan memicu perhitungan path oleh sistem navigasi.

Beberapa property penting:

```text
speed
angularSpeed
acceleration
stoppingDistance
isStopped
remainingDistance
pathPending
```

---

# 6.10 Layer

Layer digunakan untuk mengelompokkan GameObject.

Contoh:

```text
Default
Player
Enemy
Obstacle
Ground
```

Dalam praktikum ini Layer dapat digunakan agar Raycast atau sensor hanya memperhatikan objek tertentu.

---

# 6.11 LayerMask

`LayerMask` menentukan layer mana yang ingin diperiksa.

Contoh:

```csharp
[SerializeField]
private LayerMask obstacleMask;
```

Kita dapat memeriksa apakah ada obstacle antara NPC dengan player.

---

# 6.12 Raycast

Raycast adalah pengecekan menggunakan garis virtual.

Konsep:

```text
NPC Eye
   │
   │ Ray
   ↓
Player
```

Jika terdapat Wall:

```text
NPC Eye
   │
   ↓
 WALL
   X
Player
```

maka player dianggap terhalang.

Pada praktikum ini Raycast digunakan sebagai bagian dari **perception system**.

---

# 6.13 Field of View

Field of View atau FOV adalah sudut pandang NPC.

Contoh:

```text
       Player
         *
        /
       /
NPC  >
       \
        \
```

Misalnya:

```text
visionAngle = 90°
```

NPC hanya dapat melihat objek sekitar:

```text
45° kiri
+
45° kanan
```

---

# 6.14 Behavior Tree

Behavior Tree adalah struktur decision making berbentuk pohon.

Node dievaluasi dari atas ke bawah.

Contoh:

```text
Root
 └── Selector
      ├── Attack
      ├── Chase
      └── Patrol
```

---

# 6.15 Tick

`Tick()` berarti melakukan evaluasi sebuah node Behavior Tree.

Contoh:

```csharp
rootNode.Tick();
```

Pada setiap tick, node mengembalikan:

```text
Success
Failure
Running
```

---

# 6.16 Success

Berarti node selesai dan berhasil.

Contoh:

```text
Condition:
Player terlihat?

YES
↓
Success
```

---

# 6.17 Failure

Berarti kondisi tidak terpenuhi atau action gagal.

Contoh:

```text
Player terlihat?

NO
↓
Failure
```

---

# 6.18 Running

Berarti action belum selesai.

Contoh:

```text
Move to Player
      ↓
belum sampai
      ↓
Running
```

Status `Running` sangat penting karena banyak aktivitas di game membutuhkan beberapa frame.

---

# 6.19 Composite Node

Composite Node memiliki beberapa child.

Dua node terpenting:

```text
Selector
Sequence
```

---

# 6.20 Selector

Selector mencoba child berdasarkan urutan prioritas.

Konsep:

```text
Selector
├── Flee
├── Attack
├── Chase
└── Patrol
```

Cara berpikir:

```text
Coba Flee
   ↓ gagal
Coba Attack
   ↓ gagal
Coba Chase
   ↓ gagal
Patrol
```

Selector dapat dianalogikan dengan:

```text
OR
```

tetapi tetap memperhatikan status `Running`.

---

# 6.21 Sequence

Sequence memastikan child dijalankan dalam urutan dan semua syarat terpenuhi.

Contoh:

```text
Sequence Attack
├── CanSeePlayer
├── IsInAttackRange
└── Attack
```

Makna:

```text
Player terlihat
AND
Player dekat
THEN
Attack
```

Jika satu node `Failure`, Sequence langsung `Failure`.

---

# 6.22 Leaf Node

Leaf Node adalah node paling bawah.

Terdiri dari:

```text
Condition Node
Action Node
```

---

# 6.23 Condition Node

Condition Node melakukan pemeriksaan.

Contoh:

```text
CanSeePlayer?
HealthLow?
InAttackRange?
```

Biasanya return:

```text
true → Success
false → Failure
```

---

# 6.24 Action Node

Action Node melakukan tindakan.

Contoh:

```text
Patrol
Chase
Attack
Flee
```

Action dapat menghasilkan:

```text
Success
Failure
Running
```

---

# 6.25 Decorator

Decorator membungkus satu node dan memodifikasi cara node tersebut dieksekusi.

Contoh:

```text
Cooldown
 └── Attack
```

Decorator yang umum:

```text
Cooldown
Inverter
Repeat
Timeout
```

Dalam praktikum ini kita membuat:

```text
CooldownDecorator
```

untuk mencegah Attack terjadi setiap frame.

---

# 6.26 Blackboard

Blackboard adalah penyimpanan data bersama yang digunakan AI.

Contoh:

```text
Enemy Blackboard
├── Player
├── Health
├── Player Visible
├── Distance
├── Patrol Point
└── Safe Point
```

Secara arsitektur:

```text
Perception
     ↓
Blackboard
     ↓
Behavior Tree
     ↓
Action
```

Dalam implementasi praktikum sederhana ini data tersebut disimpan pada controller NPC agar struktur kode belum terlalu kompleks.

---

# 7. Persiapan Project

Buat project Unity:

```text
GameCerdas_P06_BehaviorTreeAI
```

Gunakan template:

```text
Universal 3D
```

atau template 3D yang digunakan pada praktikum sebelumnya.

Buat folder:

```text
Assets
├── Scenes
├── Scripts
│   ├── BehaviorTree
│   ├── AI
│   └── Player
├── Materials
└── Prefabs
```

Simpan scene:

```text
Assets/Scenes/P06_BehaviorTree.unity
```

---

# 8. Install AI Navigation

Buka:

```text
Window
→ Package Manager
```

Cari:

```text
AI Navigation
```

kemudian install.

AI Navigation adalah package Unity yang menyediakan sistem untuk membuat dan menggunakan NavMesh serta komponen terkait pathfinding.

---

# 9. Membuat Ground

Pilih:

```text
GameObject
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
```

Scale:

```text
X = 3
Y = 1
Z = 3
```

---

# 10. Membuat Obstacle

Tambahkan beberapa Cube:

```text
GameObject
→ 3D Object
→ Cube
```

Rename:

```text
Wall01
Wall02
Wall03
```

Letakkan pada beberapa posisi agar NPC harus mencari jalan mengelilingi obstacle.

Contoh:

```text
Wall01
Position = (0, 1, 3)
Scale    = (6, 2, 1)

Wall02
Position = (-4, 1, -2)
Scale    = (1, 2, 5)
```

---

# 11. Membuat Layer Obstacle

Buat Layer baru:

```text
Obstacle
```

Kemudian assign:

```text
Wall01 → Obstacle
Wall02 → Obstacle
Wall03 → Obstacle
```

Layer ini nanti digunakan sensor visibility NPC.

---

# 12. Membuat NavMesh

Buat Empty GameObject:

```text
GameObject
→ Create Empty
```

Rename:

```text
Navigation
```

Tambahkan:

```text
NavMeshSurface
```

Kemudian build/bake NavMesh dari Inspector.

NavMesh Surface digunakan untuk menentukan dan membangun NavMesh untuk agent yang bergerak pada scene.

Pastikan area Ground muncul sebagai area navigasi.

---

# 13. Membuat Player

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

Atur posisi awal:

```text
Position
X = 0
Y = 1
Z = 0
```

Buat layer:

```text
Player
```

dan assign Player ke layer tersebut.

---

# 14. Player Controller Sederhana

Buat:

```text
Assets/Scripts/Player/SimplePlayerController.cs
```

Isi:

```csharp
using UnityEngine;

public class SimplePlayerController : MonoBehaviour
{
    [SerializeField] private float moveSpeed = 5f;

    void Update()
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
            new Vector3(horizontal, 0f, vertical);

        if (direction.sqrMagnitude > 1f)
            direction.Normalize();

        transform.position +=
            direction * moveSpeed * Time.deltaTime;
    }
}
```

Pasang script ke:

```text
Player
```

> Jika project menggunakan Input System baru secara eksklusif, mahasiswa dapat memakai Player Controller dari praktikum sebelumnya. Script di atas dibuat sederhana agar fokus praktikum tetap pada Game AI.

---

# 15. Membuat Enemy

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

Atur:

```text
Position
X = 6
Y = 1
Z = 5
```

Berikan material yang berbeda dari Player.

---

# 16. Tambahkan NavMeshAgent

Pilih Enemy.

Tambahkan:

```text
Add Component
→ NavMeshAgent
```

Atur contoh:

```text
Speed             = 3
Angular Speed     = 360
Acceleration      = 8
Stopping Distance = 0
```

`NavMeshAgent` menyediakan fungsi yang memungkinkan agent bergerak mengikuti path pada NavMesh.

---

# 17. Membuat Waypoint Patrol

Buat Empty GameObject:

```text
PatrolPoints
```

Di dalamnya buat:

```text
Waypoint01
Waypoint02
Waypoint03
Waypoint04
```

Contoh posisi:

```text
Waypoint01 = (-7, 0, -7)
Waypoint02 = (-7, 0,  7)
Waypoint03 = ( 7, 0,  7)
Waypoint04 = ( 7, 0, -7)
```

Waypoint adalah posisi tujuan patrol NPC.

---

# 18. Membuat Safe Point

Buat Empty GameObject:

```text
SafePoint
```

Letakkan pada posisi jauh dari area tengah.

Contoh:

```text
Position
X = -10
Y = 0
Z = -10
```

Ketika health rendah, NPC akan menuju posisi ini.

---

# 19. Struktur Script Behavior Tree

Buat folder:

```text
Assets/Scripts/BehaviorTree
```

Kita akan membuat:

```text
BTNode.cs
SelectorNode.cs
SequenceNode.cs
ConditionNode.cs
ActionNode.cs
CooldownDecorator.cs
```

Kemudian:

```text
Assets/Scripts/AI/EnemyBTController.cs
```

Strukturnya:

```text
BTNode
│
├── SelectorNode
├── SequenceNode
├── ConditionNode
├── ActionNode
└── CooldownDecorator
```

---

# 20. Membuat NodeState

Buat:

```text
BTNode.cs
```

Isi:

```csharp
public enum NodeState
{
    Success,
    Failure,
    Running
}

public abstract class BTNode
{
    public abstract NodeState Tick();
}
```

Penjelasan:

```csharp
public enum NodeState
```

mendefinisikan kemungkinan status Behavior Tree.

Terdapat:

```text
Success
Failure
Running
```

Sedangkan:

```csharp
public abstract class BTNode
```

merupakan base class seluruh node.

Method:

```csharp
public abstract NodeState Tick();
```

memaksa semua node turunannya memiliki implementasi `Tick()`.

---

# 21. Apa Itu Abstract Class?

`abstract class` adalah class dasar yang belum mempunyai implementasi lengkap.

Contoh:

```text
BTNode
```

tidak mengetahui apakah dirinya Selector, Sequence, atau Action.

Class turunannya menentukan implementasinya:

```text
BTNode
   ↑
SelectorNode
SequenceNode
ActionNode
ConditionNode
```

Konsep ini disebut:

```text
Inheritance
```

atau pewarisan class.

---

# 22. Membuat SelectorNode

Buat:

```text
SelectorNode.cs
```

Isi:

```csharp
using System.Collections.Generic;

public class SelectorNode : BTNode
{
    private List<BTNode> children;

    public SelectorNode(List<BTNode> children)
    {
        this.children = children;
    }

    public override NodeState Tick()
    {
        foreach (BTNode child in children)
        {
            NodeState state = child.Tick();

            if (state == NodeState.Success)
                return NodeState.Success;

            if (state == NodeState.Running)
                return NodeState.Running;
        }

        return NodeState.Failure;
    }
}
```

---

# 23. Cara Kerja Selector

Misalnya:

```text
Selector
├── Flee
├── Attack
├── Chase
└── Patrol
```

Evaluasi:

```text
Flee?
 ↓ Failure

Attack?
 ↓ Failure

Chase?
 ↓ Running
```

Selector berhenti pada:

```text
Chase
```

dan menghasilkan:

```text
Running
```

Node Patrol tidak diperiksa pada tick tersebut.

---

# 24. Mengapa Urutan Selector Penting?

Misalnya:

```text
Selector
├── Patrol
├── Attack
├── Chase
└── Flee
```

Jika Patrol selalu `Running`, maka node setelah Patrol tidak pernah diperiksa.

Akibatnya:

```text
Enemy selalu Patrol
```

Karena itu branch paling penting harus ditempatkan lebih dahulu.

Untuk praktikum:

```text
1. Flee
2. Attack
3. Chase
4. Patrol
```

---

# 25. Membuat SequenceNode

Buat:

```text
SequenceNode.cs
```

Isi:

```csharp
using System.Collections.Generic;

public class SequenceNode : BTNode
{
    private List<BTNode> children;

    public SequenceNode(List<BTNode> children)
    {
        this.children = children;
    }

    public override NodeState Tick()
    {
        foreach (BTNode child in children)
        {
            NodeState state = child.Tick();

            if (state == NodeState.Failure)
                return NodeState.Failure;

            if (state == NodeState.Running)
                return NodeState.Running;
        }

        return NodeState.Success;
    }
}
```

---

# 26. Cara Kerja Sequence

Contoh:

```text
Attack Sequence
│
├── Can See Player?
├── In Attack Range?
└── Attack
```

Kondisi 1:

```text
Can See Player?
Success

In Attack Range?
Success

Attack
Success
```

Hasil:

```text
Sequence → Success
```

Kondisi 2:

```text
Can See Player?
Success

In Attack Range?
Failure
```

Sequence langsung:

```text
Failure
```

Attack tidak dijalankan.

---

# 27. Membuat ConditionNode

Buat:

```text
ConditionNode.cs
```

Isi:

```csharp
using System;

public class ConditionNode : BTNode
{
    private Func<bool> condition;

    public ConditionNode(Func<bool> condition)
    {
        this.condition = condition;
    }

    public override NodeState Tick()
    {
        return condition()
            ? NodeState.Success
            : NodeState.Failure;
    }
}
```

`Func<bool>` berarti node menerima fungsi yang menghasilkan:

```text
true
atau
false
```

Contoh:

```csharp
new ConditionNode(IsHealthLow)
```

Jika:

```csharp
IsHealthLow()
```

menghasilkan `true`, node return:

```text
Success
```

---

# 28. Membuat ActionNode

Buat:

```text
ActionNode.cs
```

Isi:

```csharp
using System;

public class ActionNode : BTNode
{
    private Func<NodeState> action;

    public ActionNode(Func<NodeState> action)
    {
        this.action = action;
    }

    public override NodeState Tick()
    {
        return action();
    }
}
```

Action menerima fungsi yang mengembalikan:

```text
Success
Failure
Running
```

Contoh:

```csharp
new ActionNode(ChasePlayer)
```

---

# 29. Membuat Cooldown Decorator

Buat:

```text
CooldownDecorator.cs
```

Isi:

```csharp
using UnityEngine;

public class CooldownDecorator : BTNode
{
    private BTNode child;
    private float cooldown;
    private float nextAllowedTime;

    public CooldownDecorator(
        BTNode child,
        float cooldown)
    {
        this.child = child;
        this.cooldown = cooldown;
        nextAllowedTime = 0f;
    }

    public override NodeState Tick()
    {
        if (Time.time < nextAllowedTime)
        {
            return NodeState.Running;
        }

        NodeState state = child.Tick();

        if (state == NodeState.Success)
        {
            nextAllowedTime =
                Time.time + cooldown;
        }

        return state;
    }
}
```

Struktur:

```text
CooldownDecorator
       │
       └── AttackAction
```

Jika Attack baru saja dilakukan:

```text
Attack
↓
Success
↓
Cooldown aktif
```

Selama cooldown:

```text
CooldownDecorator
↓
Running
```

Dengan demikian Attack tidak dilakukan pada setiap frame.

> Catatan: Framework Behavior Tree yang berbeda dapat mendefinisikan perilaku cooldown secara berbeda. Pada praktikum ini `Running` sengaja digunakan ketika menunggu cooldown agar branch Attack tetap menjadi perilaku aktif selama NPC masih memenuhi syarat menyerang.

---

# 30. Membuat EnemyBTController

Sekarang buat:

```text
Assets/Scripts/AI/EnemyBTController.cs
```

Script inilah yang:

- menyimpan parameter NPC;
- melakukan perception;
- membangun Behavior Tree;
- menjalankan Behavior Tree;
- menjalankan Patrol;
- menjalankan Chase;
- menjalankan Attack;
- menjalankan Flee.

---

# 31. Script EnemyBTController Lengkap

Gunakan:

```csharp
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.AI;

public class EnemyBTController : MonoBehaviour
{
    [Header("References")]
    [SerializeField] private Transform player;
    [SerializeField] private Transform[] patrolPoints;
    [SerializeField] private Transform safePoint;

    [Header("Perception")]
    [SerializeField] private float visionRange = 10f;
    [SerializeField] private float visionAngle = 90f;
    [SerializeField] private LayerMask obstacleMask;

    [Header("Combat")]
    [SerializeField] private float attackRange = 2f;
    [SerializeField] private float attackCooldown = 1.5f;
    [SerializeField] private int attackDamage = 10;

    [Header("Health")]
    [SerializeField] private int maxHealth = 100;
    [SerializeField] private int lowHealthThreshold = 30;

    [Header("Movement")]
    [SerializeField] private float patrolSpeed = 2f;
    [SerializeField] private float chaseSpeed = 4f;
    [SerializeField] private float fleeSpeed = 5f;

    [Header("Debug")]
    [SerializeField] private string currentAction = "None";

    private NavMeshAgent agent;
    private BTNode rootNode;

    private int currentHealth;
    private int currentPatrolIndex = 0;

    private void Awake()
    {
        agent = GetComponent<NavMeshAgent>();
        currentHealth = maxHealth;
    }

    private void Start()
    {
        BuildBehaviorTree();
    }

    private void Update()
    {
        if (rootNode != null)
        {
            rootNode.Tick();
        }
    }

    private void BuildBehaviorTree()
    {
        // ------------------------------
        // FLEE
        // ------------------------------

        BTNode fleeSequence =
            new SequenceNode(
                new List<BTNode>
                {
                    new ConditionNode(IsHealthLow),
                    new ActionNode(Flee)
                }
            );

        // ------------------------------
        // ATTACK
        // ------------------------------

        BTNode attackAction =
            new ActionNode(AttackPlayer);

        BTNode attackWithCooldown =
            new CooldownDecorator(
                attackAction,
                attackCooldown
            );

        BTNode attackSequence =
            new SequenceNode(
                new List<BTNode>
                {
                    new ConditionNode(CanSeePlayer),
                    new ConditionNode(IsPlayerInAttackRange),
                    attackWithCooldown
                }
            );

        // ------------------------------
        // CHASE
        // ------------------------------

        BTNode chaseSequence =
            new SequenceNode(
                new List<BTNode>
                {
                    new ConditionNode(CanSeePlayer),
                    new ActionNode(ChasePlayer)
                }
            );

        // ------------------------------
        // PATROL
        // ------------------------------

        BTNode patrolAction =
            new ActionNode(Patrol);

        // ------------------------------
        // ROOT SELECTOR
        // ------------------------------

        rootNode =
            new SelectorNode(
                new List<BTNode>
                {
                    fleeSequence,
                    attackSequence,
                    chaseSequence,
                    patrolAction
                }
            );
    }

    // ==================================================
    // CONDITIONS
    // ==================================================

    private bool IsHealthLow()
    {
        return currentHealth <= lowHealthThreshold;
    }

    private bool IsPlayerInAttackRange()
    {
        if (player == null)
            return false;

        float distance =
            Vector3.Distance(
                transform.position,
                player.position
            );

        return distance <= attackRange;
    }

    private bool CanSeePlayer()
    {
        if (player == null)
            return false;

        Vector3 eyePosition =
            transform.position
            + Vector3.up * 1.5f;

        Vector3 targetPosition =
            player.position
            + Vector3.up * 1f;

        Vector3 directionToPlayer =
            targetPosition - eyePosition;

        float distanceToPlayer =
            directionToPlayer.magnitude;

        // Player terlalu jauh.
        if (distanceToPlayer > visionRange)
            return false;

        // Player berada di luar Field of View.
        float angle =
            Vector3.Angle(
                transform.forward,
                directionToPlayer
            );

        if (angle > visionAngle * 0.5f)
            return false;

        // Periksa apakah ada obstacle.
        bool blocked =
            Physics.Raycast(
                eyePosition,
                directionToPlayer.normalized,
                distanceToPlayer,
                obstacleMask
            );

        return !blocked;
    }

    // ==================================================
    // ACTIONS
    // ==================================================

    private NodeState Patrol()
    {
        currentAction = "PATROL";

        if (patrolPoints == null ||
            patrolPoints.Length == 0)
        {
            return NodeState.Failure;
        }

        agent.isStopped = false;
        agent.speed = patrolSpeed;
        agent.stoppingDistance = 0.2f;

        Transform target =
            patrolPoints[currentPatrolIndex];

        agent.SetDestination(target.position);

        if (!agent.pathPending &&
            agent.remainingDistance <= 0.5f)
        {
            currentPatrolIndex++;

            if (currentPatrolIndex
                >= patrolPoints.Length)
            {
                currentPatrolIndex = 0;
            }
        }

        return NodeState.Running;
    }

    private NodeState ChasePlayer()
    {
        if (player == null)
            return NodeState.Failure;

        currentAction = "CHASE";

        agent.isStopped = false;
        agent.speed = chaseSpeed;
        agent.stoppingDistance =
            attackRange * 0.8f;

        agent.SetDestination(player.position);

        return NodeState.Running;
    }

    private NodeState AttackPlayer()
    {
        if (player == null)
            return NodeState.Failure;

        currentAction = "ATTACK";

        agent.isStopped = true;

        FacePlayer();

        Debug.Log(
            name
            + " attacks Player! Damage = "
            + attackDamage
        );

        PlayerHealth playerHealth =
            player.GetComponent<PlayerHealth>();

        if (playerHealth != null)
        {
            playerHealth.TakeDamage(
                attackDamage
            );
        }

        return NodeState.Success;
    }

    private NodeState Flee()
    {
        if (safePoint == null)
            return NodeState.Failure;

        currentAction = "FLEE";

        agent.isStopped = false;
        agent.speed = fleeSpeed;
        agent.stoppingDistance = 0.5f;

        agent.SetDestination(
            safePoint.position
        );

        if (!agent.pathPending &&
            agent.remainingDistance <= 0.7f)
        {
            agent.isStopped = true;

            return NodeState.Success;
        }

        return NodeState.Running;
    }

    private void FacePlayer()
    {
        Vector3 direction =
            player.position
            - transform.position;

        direction.y = 0f;

        if (direction.sqrMagnitude
            < 0.001f)
            return;

        Quaternion targetRotation =
            Quaternion.LookRotation(direction);

        transform.rotation =
            Quaternion.Slerp(
                transform.rotation,
                targetRotation,
                10f * Time.deltaTime
            );
    }

    // ==================================================
    // HEALTH
    // ==================================================

    public void TakeDamage(int damage)
    {
        currentHealth -= damage;

        currentHealth =
            Mathf.Clamp(
                currentHealth,
                0,
                maxHealth
            );

        Debug.Log(
            name
            + " Health = "
            + currentHealth
        );
    }

    [ContextMenu("Test Damage 25")]
    private void TestDamage25()
    {
        TakeDamage(25);
    }

    [ContextMenu("Reset Health")]
    private void ResetHealth()
    {
        currentHealth = maxHealth;
    }

    // ==================================================
    // GIZMOS
    // ==================================================

    private void OnDrawGizmosSelected()
    {
        // Vision Range
        Gizmos.DrawWireSphere(
            transform.position,
            visionRange
        );

        // Attack Range
        Gizmos.DrawWireSphere(
            transform.position,
            attackRange
        );

        // FOV direction
        Vector3 leftDirection =
            Quaternion.Euler(
                0,
                -visionAngle * 0.5f,
                0
            )
            * transform.forward;

        Vector3 rightDirection =
            Quaternion.Euler(
                0,
                visionAngle * 0.5f,
                0
            )
            * transform.forward;

        Gizmos.DrawRay(
            transform.position,
            leftDirection * visionRange
        );

        Gizmos.DrawRay(
            transform.position,
            rightDirection * visionRange
        );
    }
}
```

---

# 32. Memahami BuildBehaviorTree()

Bagian terpenting adalah:

```csharp
private void BuildBehaviorTree()
```

Di sinilah struktur tree dibuat.

Flee:

```text
Sequence
├── IsHealthLow
└── Flee
```

Attack:

```text
Sequence
├── CanSeePlayer
├── IsPlayerInAttackRange
└── Cooldown
     └── Attack
```

Chase:

```text
Sequence
├── CanSeePlayer
└── Chase
```

Patrol:

```text
Patrol
```

Semuanya kemudian masuk ke:

```text
Selector
```

sehingga tree keseluruhan menjadi:

```text
Root Selector
│
├── Flee Sequence
│
│   ├── Health Low?
│   └── Flee
│
├── Attack Sequence
│
│   ├── Can See Player?
│   ├── In Attack Range?
│   └── Cooldown
│       └── Attack
│
├── Chase Sequence
│
│   ├── Can See Player?
│   └── Chase
│
└── Patrol
```

---

# 33. Mengapa Flee Diletakkan Paling Atas?

Karena kita ingin health kritis menjadi kondisi darurat.

Misalnya:

```text
Health = 20
Player visible = true
Distance = 1 meter
```

Sebenarnya NPC memenuhi kondisi untuk Attack.

Namun tree memeriksa:

```text
Flee
```

lebih dahulu.

Karena:

```text
Health Low = Success
```

maka:

```text
Flee → Running
```

Selector berhenti mengevaluasi child berikutnya.

Akibatnya NPC:

```text
FLEE
```

bukan Attack.

---

# 34. Mengapa Attack Sebelum Chase?

Misalnya:

```text
Player visible = true
Distance = 1.5
attackRange = 2
```

Attack Sequence:

```text
Can See?
Success

In Range?
Success

Attack
Success
```

NPC menyerang.

Jika Chase ditempatkan sebelum Attack:

```text
Chase → Running
```

Selector akan berhenti di Chase sehingga Attack tidak pernah dievaluasi.

---

# 35. Cara Kerja Perception

Method:

```csharp
CanSeePlayer()
```

melakukan tiga pengecekan.

## 35.1 Distance

```csharp
if (distanceToPlayer > visionRange)
    return false;
```

Player harus berada dalam radius penglihatan.

---

## 35.2 Field of View

```csharp
float angle =
    Vector3.Angle(
        transform.forward,
        directionToPlayer
    );
```

Kemudian:

```csharp
if (angle > visionAngle * 0.5f)
    return false;
```

Jika:

```text
visionAngle = 90
```

maka NPC dapat melihat:

```text
45° kiri
45° kanan
```

---

## 35.3 Obstacle

```csharp
Physics.Raycast(...)
```

memeriksa apakah terdapat object Layer `Obstacle`.

Jika ada:

```text
NPC
 |
 | Ray
 ↓
Wall
 X
Player
```

maka:

```text
blocked = true
```

sehingga:

```csharp
return !blocked;
```

menghasilkan:

```text
false
```

Player tidak terlihat.

---

# 36. Membuat PlayerHealth

Buat:

```text
Assets/Scripts/Player/PlayerHealth.cs
```

Isi:

```csharp
using UnityEngine;

public class PlayerHealth : MonoBehaviour
{
    [SerializeField]
    private int maxHealth = 100;

    private int currentHealth;

    private void Start()
    {
        currentHealth = maxHealth;
    }

    public void TakeDamage(int damage)
    {
        currentHealth -= damage;

        currentHealth =
            Mathf.Clamp(
                currentHealth,
                0,
                maxHealth
            );

        Debug.Log(
            "Player Health = "
            + currentHealth
        );

        if (currentHealth <= 0)
        {
            Debug.Log("Player Dead");
        }
    }
}
```

Pasang pada:

```text
Player
```

---

# 37. Memasang EnemyBTController

Pilih:

```text
Enemy
```

Tambahkan:

```text
EnemyBTController
```

Isi Inspector.

## References

```text
Player       → Player
Safe Point   → SafePoint
```

Patrol Points:

```text
Size = 4

Element 0 = Waypoint01
Element 1 = Waypoint02
Element 2 = Waypoint03
Element 3 = Waypoint04
```

---

# 38. Mengatur Perception

Contoh:

```text
Vision Range = 10
Vision Angle = 90
Obstacle Mask = Obstacle
```

Makna:

```text
NPC melihat maksimal 10 unit
FOV NPC = 90°
Wall dapat menghalangi penglihatan
```

---

# 39. Mengatur Combat

Gunakan:

```text
Attack Range    = 2
Attack Cooldown = 1.5
Attack Damage   = 10
```

Artinya NPC dapat menyerang ketika:

```text
distance <= 2
```

dan attack berikutnya baru diperbolehkan setelah:

```text
1.5 detik
```

---

# 40. Mengatur Health

Gunakan:

```text
Max Health          = 100
Low Health Threshold = 30
```

NPC dianggap health rendah jika:

```text
Health <= 30
```

---

# 41. Mengatur Movement

Gunakan:

```text
Patrol Speed = 2
Chase Speed  = 4
Flee Speed   = 5
```

Secara gameplay:

```text
Patrol
pelan

Chase
lebih cepat

Flee
paling cepat
```

---

# 42. Pengujian 1 — Patrol

Jalankan game.

Letakkan Player jauh dari Enemy.

Expected behavior:

```text
Can See Player?
Failure
```

Attack gagal.

Chase gagal.

Selector akhirnya memilih:

```text
Patrol
```

Inspector menunjukkan:

```text
Current Action = PATROL
```

Enemy akan berpindah:

```text
Waypoint01
    ↓
Waypoint02
    ↓
Waypoint03
    ↓
Waypoint04
    ↓
Waypoint01
```

---

# 43. Pengujian 2 — Chase

Gerakkan Player hingga masuk:

```text
Vision Range
```

dan berada dalam FOV.

Tetapi pastikan Player masih lebih jauh daripada:

```text
Attack Range
```

Expected:

```text
Flee
Failure

Attack
Failure

Chase
Running
```

Current Action:

```text
CHASE
```

Enemy bergerak menuju Player.

---

# 44. Pengujian 3 — Attack

Dekatkan Player hingga:

```text
distance <= attackRange
```

Expected:

```text
Flee
Failure

Attack
Running / Success

Chase
tidak dievaluasi
```

Console:

```text
Enemy attacks Player!
```

Player Health akan berkurang.

---

# 45. Pengujian 4 — Cooldown

Biarkan Player berada dekat Enemy.

Tanpa cooldown, jika Attack dipanggil setiap frame pada 60 FPS:

```text
60 attack / detik
```

Ini tentu tidak sesuai gameplay.

Cooldown:

```text
Attack
↓
Success
↓
Cooldown 1.5 detik
↓
Attack lagi
```

Perhatikan Player Health pada Console.

---

# 46. Pengujian 5 — Obstacle

Letakkan Wall antara Enemy dengan Player.

Situasi:

```text
Enemy
   |
   |
 Wall
   |
   |
Player
```

Walaupun Player berada di:

```text
visionRange
```

NPC tidak boleh melihat Player karena Raycast terhalang obstacle.

NPC kembali:

```text
PATROL
```

atau perilaku lain sesuai kondisi health.

---

# 47. Pengujian 6 — Field of View

Letakkan Player di belakang Enemy.

Walaupun jaraknya dekat:

```text
Enemy >       Player
```

NPC seharusnya tidak melihat Player jika berada di luar FOV.

Pindahkan Player ke depan NPC.

NPC kemudian:

```text
CHASE
```

atau:

```text
ATTACK
```

---

# 48. Pengujian 7 — Flee

Untuk memudahkan test, script menyediakan:

```csharp
[ContextMenu("Test Damage 25")]
```

Saat game berjalan, gunakan menu context pada Component Enemy untuk memberikan damage secara bertahap.

Contoh:

```text
Health 100
↓
75
↓
50
↓
25
```

Ketika:

```text
Health = 25
```

sementara:

```text
Low Health Threshold = 30
```

maka:

```text
IsHealthLow()
→ true
```

Flee Sequence menjadi aktif.

Expected:

```text
Current Action = FLEE
```

NPC menuju:

```text
SafePoint
```

---

# 49. Analisis Behavior Tree Saat Flee

Misalnya:

```text
Health = 25
Player Visible = true
Distance = 1
```

Evaluasi tree:

```text
ROOT
 ↓
SELECTOR
 ↓
FLEE SEQUENCE
```

Condition:

```text
IsHealthLow?
```

hasil:

```text
Success
```

Action:

```text
Flee
```

hasil:

```text
Running
```

Sequence:

```text
Running
```

Selector:

```text
Running
```

Node:

```text
Attack
Chase
Patrol
```

tidak dievaluasi.

---

# 50. Menggunakan Gizmos untuk Debugging

Script menggunakan:

```csharp
OnDrawGizmosSelected()
```

Ketika Enemy dipilih pada Scene View, Unity menggambar visual helper.

`Gizmos.DrawSphere` dan fungsi Gizmos sejenis memang disediakan Unity untuk visualisasi/debugging di Scene View.

Dalam praktikum, Gizmos digunakan untuk melihat:

```text
Vision Range
Attack Range
FOV Boundary
```

Ini sangat membantu untuk menjawab pertanyaan:

```text
Mengapa NPC tidak melihat Player?
```

---

# 51. Debugging Current Action

Variable:

```csharp
[SerializeField]
private string currentAction;
```

akan muncul pada Inspector.

Nilainya:

```text
PATROL
CHASE
ATTACK
FLEE
```

Dengan demikian mahasiswa tidak hanya melihat movement, tetapi dapat mengetahui **keputusan AI yang sedang aktif**.

---

# 52. Urutan Debugging Jika NPC Tidak Bergerak

Jika Enemy tidak bergerak, periksa:

```text
1. Apakah AI Navigation sudah terpasang?
2. Apakah NavMesh sudah di-build?
3. Apakah Enemy berada di atas NavMesh?
4. Apakah Enemy memiliki NavMeshAgent?
5. Apakah waypoint berada pada area NavMesh?
6. Apakah field Player sudah diisi?
7. Apakah patrolPoints sudah diisi?
8. Apakah SafePoint berada pada area NavMesh?
9. Apakah Console memiliki error?
```

---

# 53. Jika NPC Tidak Melihat Player

Periksa:

```text
Vision Range
Vision Angle
Arah forward Enemy
Obstacle Mask
Posisi Player
```

Jika Enemy menghadap arah yang salah:

```text
transform.forward
```

juga akan menghadap arah yang salah.

Perhatikan panah biru Transform pada Scene View.

---

# 54. Jika NPC Menembus Wall

Pastikan:

```text
Wall memiliki Collider
```

dan:

```text
NavMesh dibangun dengan obstacle/environment
```

Pathfinding dan physics collision merupakan konsep berbeda.

NavMesh membantu agent mencari area navigasi, sementara Collider menangani collision fisik.

---

# 55. Jika Attack Terjadi Terlalu Cepat

Periksa:

```text
Attack Cooldown
```

Contoh:

```text
Attack Cooldown = 1.5
```

Jika terlalu cepat:

```text
2.0
```

Jika ingin enemy agresif:

```text
0.8
```

Parameter ini merupakan bagian dari:

```text
AI tuning
```

---

# 56. Arsitektur AI yang Dihasilkan

Praktikum ini sebenarnya menghasilkan pipeline:

```text
         PERCEPTION
              │
       CanSeePlayer()
              │
              ↓
     DATA / BLACKBOARD
              │
              ↓
       DECISION MAKING
              │
        Behavior Tree
              │
              ↓
           ACTION
    ┌─────────┼──────────┐
    ↓         ↓          ↓
 Patrol     Chase      Attack
              │
              ↓
         NAVIGATION
              │
         NavMeshAgent
              │
              ↓
          MOVEMENT
```

Dengan tambahan:

```text
Health
  ↓
Flee Decision
  ↓
SafePoint
```

Ini menunjukkan hubungan beberapa materi Game AI dalam satu NPC.

---

# 57. Eksperimen 1 — Mengubah Prioritas Selector

Ubah:

```text
Flee
Attack
Chase
Patrol
```

menjadi:

```text
Attack
Flee
Chase
Patrol
```

Kemudian uji kondisi:

```text
Health = 20
Player sangat dekat
```

Pertanyaan:

> Apakah Enemy masih Flee?

Expected:

```text
Attack lebih dahulu
```

Ini menunjukkan bahwa posisi child di Selector memiliki arti **priority**.

---

# 58. Eksperimen 2 — Menghilangkan Condition Attack Range

Ubah:

```text
Attack Sequence
├── Can See Player
├── In Attack Range
└── Attack
```

menjadi:

```text
Attack Sequence
├── Can See Player
└── Attack
```

Amati hasilnya.

NPC kemungkinan dapat melakukan Attack dari jarak sangat jauh.

Kesimpulan:

> Action Node membutuhkan Condition Node yang tepat.

---

# 59. Eksperimen 3 — Menghapus Cooldown

Ubah:

```text
Cooldown
└── Attack
```

menjadi langsung:

```text
Attack
```

Amati Console.

Kemungkinan:

```text
Attack
Attack
Attack
Attack
...
```

terjadi sangat cepat.

Mahasiswa dapat melihat langsung fungsi Decorator.

---

# 60. Eksperimen 4 — Enemy Aggressive

Gunakan:

```text
Vision Range = 15
Vision Angle = 150
Chase Speed  = 5
Attack Range = 2.5
Attack Cooldown = 0.8
Low Health Threshold = 15
```

Karakter NPC:

```text
lebih mudah melihat Player
lebih cepat mengejar
lebih sering menyerang
jarang kabur
```

---

# 61. Eksperimen 5 — Enemy Coward

Gunakan:

```text
Vision Range = 10
Vision Angle = 90
Chase Speed  = 3
Attack Cooldown = 2
Low Health Threshold = 70
Flee Speed = 6
```

Akibat:

```text
Enemy cepat memutuskan Flee
```

Ini menunjukkan bahwa perilaku AI tidak hanya berasal dari algoritma.

Perilaku juga sangat dipengaruhi oleh:

```text
parameter tuning
```

---

# 62. Tambahan: Konsep Blackboard yang Lebih Formal

Pada implementasi yang lebih besar kita dapat membuat:

```csharp
public class EnemyBlackboard
{
    public Transform player;

    public bool canSeePlayer;

    public float distanceToPlayer;

    public Vector3 lastSeenPosition;

    public int health;

    public bool healthLow;
}
```

Kemudian architecture:

```text
EnemyPerception
      ↓
EnemyBlackboard
      ↓
BehaviorTree
      ↓
Actions
```

Keuntungannya:

```text
Perception
tidak bercampur dengan
Decision Making
```

Untuk praktikum 06, struktur tersebut belum diwajibkan agar mahasiswa dapat terlebih dahulu memahami node Behavior Tree.

---

# 63. Pengembangan: Search Last Seen Position

Behavior Tree dapat diperluas menjadi:

```text
Root
 └── Selector
      │
      ├── Flee
      │
      ├── Attack
      │
      ├── Chase
      │
      ├── Search Last Position
      │
      └── Patrol
```

Perception menyimpan:

```text
lastSeenPosition
```

Ketika player menghilang:

```text
Chase gagal
↓
Search Last Position aktif
↓
Enemy menuju posisi terakhir Player
↓
kemudian kembali Patrol
```

Ini menggabungkan:

```text
Perception
+
Memory
+
Decision Making
+
Navigation
```

dan sangat cocok sebagai tugas bonus.

---

# 64. Bagian II — Memahami Utility-Based AI

Setelah Behavior Tree berhasil, mahasiswa melakukan eksperimen konsep Utility-Based AI.

Behavior Tree memilih berdasarkan:

```text
PRIORITAS
```

Contoh:

```text
Flee
Attack
Chase
Patrol
```

Sedangkan Utility AI memilih berdasarkan:

```text
SKOR
```

Contoh:

```text
Attack = 0.80
Chase  = 0.55
Flee   = 0.20
Patrol = 0.10
```

Maka:

```text
Attack
```

dipilih.

---

# 65. Perbedaan Konsep BT dan Utility AI

Behavior Tree:

```text
Apakah Flee memungkinkan?
↓
Tidak

Apakah Attack memungkinkan?
↓
Ya

Attack
```

Utility AI:

```text
Hitung semuanya

Attack = 0.75
Chase  = 0.45
Flee   = 0.90
Patrol = 0.10

Pilih nilai terbesar
↓
Flee
```

---

# 66. Utility Score

Utility AI biasanya menggunakan skor ter-normalisasi:

```text
0.0
sampai
1.0
```

Interpretasi sederhana:

```text
0.0
tidak penting

0.5
cukup penting

1.0
sangat penting
```

---

# 67. Flee Score

Misalnya:

```csharp
float healthPercent =
    (float)currentHealth / maxHealth;
```

Kemudian:

```csharp
float fleeScore =
    1f - healthPercent;
```

Contoh:

| Health | Flee Score |
|---:|---:|
| 100 | 0.00 |
| 80 | 0.20 |
| 60 | 0.40 |
| 40 | 0.60 |
| 20 | 0.80 |
| 10 | 0.90 |

Berbeda dengan Behavior Tree:

```text
Health <= 30?
YES / NO
```

Utility AI menghasilkan perubahan yang lebih bertahap.

---

# 68. Attack Score

Contoh:

```csharp
float distanceScore =
    1f -
    (distanceToPlayer / attackRange);

distanceScore =
    Mathf.Clamp01(distanceScore);
```

Jika Player semakin dekat:

```text
Attack Score
semakin tinggi
```

`Mathf.Clamp01()` memastikan nilai tetap:

```text
0 ≤ score ≤ 1
```

---

# 69. Visibility sebagai Faktor Wajib

Misalnya:

```csharp
float visibilityScore =
    CanSeePlayer() ? 1f : 0f;
```

Kemudian:

```csharp
attackScore =
    distanceScore
    * visibilityScore;
```

Jika Player tidak terlihat:

```text
visibilityScore = 0
```

Maka:

```text
attackScore = 0
```

meskipun jaraknya dekat.

---

# 70. Contoh Empat Utility Action

Gunakan:

```text
Attack
Chase
Flee
Patrol
```

Misalnya:

```text
Attack =
distanceScore
× visibilityScore

Chase =
visibilityScore
× distanceNeedScore

Flee =
lowHealthScore
× threatScore

Patrol =
0.1
```

`Patrol = 0.1` menjadi:

```text
default action
```

sehingga selalu terdapat minimal satu pilihan.

---

# 71. Pseudocode Utility Decision

```text
bestAction = null
bestScore = -1

for setiap action:

    hitung score

    jika score > bestScore:

        bestScore = score
        bestAction = action

jalankan bestAction
```

Contoh:

```text
Attack = 0.75
Chase  = 0.60
Flee   = 0.85
Patrol = 0.10
```

Maka:

```text
Selected Action = Flee
```

---

# 72. Masalah Utility AI: Action Switching

Misalnya:

Frame pertama:

```text
Attack = 0.51
Chase  = 0.50
```

Enemy:

```text
ATTACK
```

Frame berikut:

```text
Attack = 0.49
Chase  = 0.52
```

Enemy:

```text
CHASE
```

Berikutnya berubah lagi.

Hasilnya NPC dapat:

```text
Attack
Chase
Attack
Chase
Attack
...
```

secara sangat cepat.

---

# 73. Action Commitment

Salah satu solusi:

```text
minimumActionDuration
```

Contoh:

```text
1 detik
```

Jika NPC memilih Attack:

```text
ATTACK
↓
bertahan minimal 1 detik
↓
baru evaluasi kembali
```

Teknik ini disebut:

```text
Action Commitment
```

---

# 74. Hysteresis

Solusi lain adalah:

```text
Hysteresis
```

Contoh:

Current:

```text
Attack score = 0.60
```

Chase baru boleh menggantikannya jika:

```text
Chase > Attack + 0.15
```

Bukan hanya karena:

```text
Chase = 0.61
Attack = 0.60
```

Dengan demikian perubahan perilaku lebih stabil.

---

# 75. Rekomendasi Pembagian Praktikum

## Bagian Wajib

Mahasiswa wajib menyelesaikan:

```text
Behavior Tree Enemy
├── Selector
├── Sequence
├── Condition
├── Action
├── Cooldown Decorator
├── Patrol
├── Chase
├── Attack
└── Flee
```

Bobot utama praktikum sebaiknya berada di bagian ini.

---

## Bagian Eksperimen

Mahasiswa menganalisis:

```text
Utility-Based AI
```

dengan minimal menghitung:

```text
Attack Score
Chase Score
Flee Score
Patrol Score
```

---

## Bagian Bonus

Mahasiswa dapat memilih:

```text
A. Search Last Seen Position

B. Full Utility AI Controller

C. Behavior Tree + Utility AI

D. Animator Integration

E. Health Bar

F. On-screen BT Debugger
```

---

# 76. Kombinasi Behavior Tree + Utility AI

Untuk pengembangan lebih lanjut:

```text
Root
 └── Selector
      │
      ├── Emergency Sequence
      │   ├── Critical Health?
      │   └── Flee
      │
      ├── Combat Sequence
      │   ├── Can See Player?
      │   └── Utility Combat Selector
      │        ├── Attack
      │        ├── Chase
      │        └── Take Cover
      │
      └── Patrol
```

Pembagian tugas:

```text
Behavior Tree
↓
mengatur struktur besar

Utility AI
↓
memilih aksi terbaik
```

Pendekatan hybrid seperti ini memperlihatkan bahwa teknik Game AI tidak harus berdiri sendiri.

---

# 77. Tabel Perbandingan FSM, BT, dan Utility AI

| Aspek | FSM | Behavior Tree | Utility AI |
|---|---|---|---|
| Konsep utama | State | Tree | Score |
| Keputusan | Transition | Node evaluation | Highest score |
| Struktur | State diagram | Tree hierarchy | Action list |
| Condition | Transition condition | Condition node | Consideration |
| Prioritas | Transition logic | Urutan Selector | Score |
| Perilaku bertahap | Terbatas | Terbatas | Sangat baik |
| Modularitas | Sedang | Tinggi | Tinggi |
| Debug | Current state | Current node | Action score |
| Mudah untuk awal | Sangat | Cukup | Cukup |
| NPC kompleks | Bisa rumit | Cocok | Cocok |

---

# 78. Apa yang Harus Diamati Mahasiswa?

Mahasiswa tidak hanya diminta mendapatkan NPC yang bergerak.

Yang lebih penting adalah dapat menjelaskan:

```text
Mengapa NPC memilih action tersebut?
```

Misalnya:

### Kasus 1

```text
Health = 100
Player visible = false
```

Jawaban:

```text
PATROL
```

---

### Kasus 2

```text
Health = 100
Player visible = true
Distance = 6
```

Jawaban:

```text
CHASE
```

---

### Kasus 3

```text
Health = 100
Player visible = true
Distance = 1
```

Jawaban:

```text
ATTACK
```

---

### Kasus 4

```text
Health = 20
Player visible = true
Distance = 1
```

Jawaban:

```text
FLEE
```

Karena Flee mempunyai prioritas lebih tinggi daripada Attack.

---

# 79. Tugas Praktikum

## Tugas 1 — Implementasi Dasar

Implementasikan:

```text
SelectorNode
SequenceNode
ConditionNode
ActionNode
CooldownDecorator
```

---

## Tugas 2 — Enemy Behavior

Implementasikan:

```text
Patrol
Chase
Attack
Flee
```

---

## Tugas 3 — Perception

NPC harus memperhatikan:

```text
Vision Range
Field of View
Obstacle
```

---

## Tugas 4 — Navigation

NPC harus menggunakan:

```text
NavMeshAgent
```

untuk:

```text
Patrol
Chase
Flee
```

---

## Tugas 5 — Debug

Tampilkan:

```text
Current Action
```

minimal melalui Inspector atau Console.

---

## Tugas 6 — Analisis

Jelaskan perbedaan:

```text
FSM Praktikum 05

vs

Behavior Tree Praktikum 06
```

berdasarkan implementasi yang dibuat.

---

# 80. Tugas Pengembangan

Pilih minimal satu:

### A. Search Last Position

Tambahkan:

```text
Search
```

setelah kehilangan Player.

Tree:

```text
Flee
Attack
Chase
Search
Patrol
```

---

### B. Health Bar

Tampilkan health Enemy menggunakan UI.

---

### C. Animator

Hubungkan action dengan:

```text
Idle
Walk
Run
Attack
Flee
```

---

### D. Utility AI

Buat versi NPC yang memilih:

```text
Attack
Chase
Flee
Patrol
```

berdasarkan skor.

---

### E. Personality

Buat dua Enemy:

```text
AggressiveEnemy
CowardEnemy
```

dengan parameter berbeda.

---

# 81. Pertanyaan Analisis

Jawab pertanyaan berikut.

1. Apa fungsi `BTNode`?
2. Apa perbedaan `Success`, `Failure`, dan `Running`?
3. Apa fungsi Selector?
4. Mengapa urutan child pada Selector penting?
5. Apa fungsi Sequence?
6. Apa perbedaan Condition Node dan Action Node?
7. Mengapa Chase mengembalikan `Running`?
8. Mengapa Attack menggunakan Cooldown?
9. Apa fungsi Decorator?
10. Apa fungsi Blackboard?
11. Mengapa Perception sebaiknya dipisahkan dari Decision Making?
12. Mengapa Flee ditempatkan sebelum Attack?
13. Apa yang terjadi jika Patrol ditempatkan pertama pada Selector?
14. Apa perbedaan decision making FSM dan Behavior Tree?
15. Apa perbedaan Behavior Tree dan Utility AI?
16. Mengapa Utility AI memerlukan normalisasi skor?
17. Apa kegunaan default action pada Utility AI?
18. Mengapa Utility AI dapat mengalami rapid action switching?
19. Apa fungsi Action Commitment?
20. Kapan Utility AI lebih cocok dibanding Behavior Tree?

---

# 82. Checklist Pengujian

Sebelum praktikum dianggap selesai, pastikan:

- [ ] Project Unity dapat dijalankan tanpa compile error.
- [ ] AI Navigation telah terpasang.
- [ ] NavMesh telah dibuat.
- [ ] Enemy memiliki NavMeshAgent.
- [ ] Player dapat digerakkan.
- [ ] Enemy memiliki minimal empat waypoint.
- [ ] Enemy Patrol ketika Player tidak terlihat.
- [ ] Enemy Chase ketika Player terlihat.
- [ ] Enemy Attack ketika Player dekat.
- [ ] Enemy tidak melihat Player melalui obstacle.
- [ ] Enemy Flee ketika health rendah.
- [ ] Attack memiliki cooldown.
- [ ] Selector bekerja berdasarkan prioritas.
- [ ] Sequence berhenti jika condition gagal.
- [ ] Action yang membutuhkan waktu mengembalikan Running.
- [ ] Current Action dapat diamati.
- [ ] Vision Range dapat diamati dengan Gizmos.
- [ ] Attack Range dapat diamati.
- [ ] Tidak terdapat NullReferenceException.
- [ ] Mahasiswa memahami perbedaan BT dengan FSM.

---

# 83. Struktur Folder Akhir

Project sebaiknya memiliki struktur:

```text
Assets
│
├── Materials
│
├── Prefabs
│
├── Scenes
│   └── P06_BehaviorTree.unity
│
└── Scripts
    │
    ├── BehaviorTree
    │   ├── BTNode.cs
    │   ├── SelectorNode.cs
    │   ├── SequenceNode.cs
    │   ├── ConditionNode.cs
    │   ├── ActionNode.cs
    │   └── CooldownDecorator.cs
    │
    ├── AI
    │   └── EnemyBTController.cs
    │
    └── Player
        ├── SimplePlayerController.cs
        └── PlayerHealth.cs
```

Struktur folder yang rapi membantu mahasiswa memahami bahwa:

```text
Behavior Tree Framework
```

berbeda dengan:

```text
Enemy-specific AI
```

---

# 84. Kesalahan Umum

## Kesalahan 1

```text
Enemy selalu Patrol
```

Periksa urutan Selector.

Patrol harus berada paling akhir.

---

## Kesalahan 2

```text
Enemy tidak Chase
```

Periksa:

```text
Player reference
Vision Range
Vision Angle
Obstacle Mask
forward direction
```

---

## Kesalahan 3

```text
Enemy tidak bergerak
```

Periksa:

```text
NavMesh
NavMeshAgent
Waypoint
```

---

## Kesalahan 4

```text
Enemy Attack terus menerus
```

Periksa:

```text
CooldownDecorator
```

---

## Kesalahan 5

```text
Enemy Attack dari balik Wall
```

Periksa:

```text
Obstacle Layer
Obstacle Mask
Collider Wall
```

---

## Kesalahan 6

```text
NullReferenceException
```

Periksa Inspector:

```text
Player
Patrol Points
Safe Point
```

---

# 85. Konsep Utama yang Harus Dipahami

Mahasiswa sebaiknya tidak sekadar menyalin kode.

Hal yang harus benar-benar dipahami adalah:

```text
SELECTOR
=
memilih alternatif berdasarkan prioritas
```

```text
SEQUENCE
=
memastikan rangkaian kondisi/action berhasil
```

```text
CONDITION
=
memeriksa keadaan
```

```text
ACTION
=
melakukan sesuatu
```

```text
DECORATOR
=
memodifikasi perilaku satu child
```

```text
BLACKBOARD
=
menyimpan data yang digunakan AI
```

```text
UTILITY AI
=
memilih action berdasarkan skor
```

---

# 86. Alur Besar Praktikum

Secara konseptual, keseluruhan praktikum dapat diringkas:

```text
PLAYER
  ↓
PERCEPTION
  ↓
Can See Player?
Distance?
Health?
  ↓
DECISION MAKING
  ↓
BEHAVIOR TREE
  ↓
SELECTOR
  │
  ├── FLEE
  ├── ATTACK
  ├── CHASE
  └── PATROL
  ↓
NAVMESH AGENT
  ↓
NPC MOVEMENT
```

---

# 87. Hubungan Praktikum dengan Materi Sebelumnya

Urutan praktikum Game Cerdas sekarang membentuk pipeline pembelajaran yang cukup kuat:

```text
Praktikum 01
NPC Detector
↓
PERCEPTION

Praktikum 02
NPC Guard
↓
PERCEPTION + MEMORY + DECISION

Praktikum 03
Movement AI & Steering
↓
MOVEMENT

Praktikum 04
Pathfinding & Navigation
↓
NAVIGATION

Praktikum 05
Finite State Machine
↓
STATE-BASED DECISION MAKING

Praktikum 06
Behavior Tree & Utility AI
↓
MODULAR / SCORE-BASED
DECISION MAKING
```

Praktikum 06 dengan demikian bukan pengulangan dari Praktikum 05.

NPC memang masih dapat memiliki:

```text
Patrol
Chase
Attack
Flee
```

tetapi fokus pembelajaran berubah dari:

```text
APA perilakunya?
```

menjadi:

```text
BAGAIMANA struktur AI memilih perilaku tersebut?
```

---

# 88. Rekomendasi Final Praktikum

Untuk pelaksanaan perkuliahan, susunan yang paling direkomendasikan adalah:

## Praktikum Wajib

### NPC Behavior Tree

Implementasikan:

```text
Root
└── Priority Selector
    │
    ├── Flee Sequence
    │   ├── Health Low?
    │   └── Flee
    │
    ├── Attack Sequence
    │   ├── Can See Player?
    │   ├── In Attack Range?
    │   └── Cooldown
    │       └── Attack
    │
    ├── Chase Sequence
    │   ├── Can See Player?
    │   └── Chase
    │
    └── Patrol
```

Ini memberikan mahasiswa pengalaman langsung dengan seluruh konsep penting:

```text
Root
Selector
Sequence
Condition
Action
Decorator
Success
Failure
Running
Perception
NavMeshAgent
```

---

## Eksperimen Wajib

Mahasiswa menghitung Utility Score secara konseptual untuk:

```text
Attack
Chase
Flee
Patrol
```

dan membandingkan hasilnya dengan Behavior Tree.

---

## Pengembangan Opsional

Mahasiswa yang ingin mendapatkan pemahaman lebih lanjut dapat membuat:

```text
Behavior Tree + Utility AI
```

dengan Behavior Tree sebagai struktur besar dan Utility AI sebagai pemilih action combat.

---

# 89. Kesimpulan

Behavior Tree memberikan pendekatan decision making yang berbeda dari FSM.

Pada FSM:

```text
NPC berada pada sebuah state
dan berpindah melalui transition.
```

Pada Behavior Tree:

```text
NPC mengevaluasi struktur node
dan memilih perilaku berdasarkan
condition serta priority.
```

Selector digunakan untuk:

```text
memilih alternatif
```

Sequence digunakan untuk:

```text
menggabungkan syarat
```

Condition digunakan untuk:

```text
membaca keadaan
```

Action digunakan untuk:

```text
melakukan perilaku
```

Decorator digunakan untuk:

```text
memodifikasi eksekusi child
```

Blackboard digunakan untuk:

```text
menyimpan data AI
```

Sedangkan Utility AI memperkenalkan paradigma berbeda:

```text
bukan memilih berdasarkan
priority tetap,

tetapi memilih berdasarkan
utility score.
```

Dengan menyelesaikan praktikum ini, mahasiswa telah bergerak dari:

```text
rule sederhana
↓
FSM
↓
Behavior Tree
↓
Utility-Based Decision
```

dan mulai memahami bagaimana sistem decision making NPC yang lebih kompleks dapat dibangun secara modular di dalam game.