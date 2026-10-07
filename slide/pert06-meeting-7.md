# Game Cerdas — Pertemuan 6
## Behavior Tree & Utility-Based AI

**Program Studi S1 Teknik Informatika**  
**Tools:**  Unity 6 + C#  
**Posisi materi:**  Lanjutan dari materi decision making NPC setelah FSM

---

# Slide 1 — Cover

## Behavior Tree & Utility-Based AI

**Game Cerdas — Pertemuan 6**  
Pokok bahasan:
- Behavior Tree
- Selector
- Sequence
- Decorator
- Leaf Node
- Action Node
- Condition Node
- Utility-Based AI
- Scoring Action
- NPC dengan Behavior Tree / Utility-Based Decision

Praktikum yang akan dibuat terpisah:
- NPC dengan Behavior Tree
- NPC dengan Utility-Based Decision

> Fokus pertemuan ini adalah memahami pendekatan decision making NPC yang lebih fleksibel dibanding FSM sederhana.

---

# Slide 2 — Review Materi Decision Making Sebelumnya

Pada materi sebelumnya, NPC dapat didesain menggunakan konsep state.

Contoh:

```text
Patrol → Chase → Attack → Flee
```

Pendekatan tersebut cocok untuk:
- perilaku sederhana,
- jumlah state terbatas,
- transisi yang jelas,
- enemy AI dasar.

Namun, ketika perilaku NPC semakin banyak, model state dapat menjadi sulit dikelola.

---

# Slide 3 — Masalah pada FSM Sederhana

FSM mudah dipahami, tetapi dapat menjadi rumit ketika state dan transition bertambah.

Contoh state:

```text
Idle
Patrol
Alert
Chase
Attack
Reload
TakeCover
Heal
Flee
Search
CallBackup
Dead
```

Masalah:
- transition semakin banyak,
- diagram sulit dibaca,
- banyak condition saling bertabrakan,
- perubahan kecil dapat memengaruhi banyak state.

Masalah ini sering disebut:

```text
state explosion
```

---

# Slide 4 — Alternatif Decision Making

Dalam Game AI, decision making tidak hanya dapat dibuat dengan FSM.

Beberapa pendekatan umum:

```text
Decision Making
├�”€─ Finite State Machine
├�”€─ Hierarchical FSM
├�”€─ Behavior Tree
├�”€─ Utility-Based AI
├�”€─ Goal-Oriented Action Planning
└�”€─ Machine Learning / Reinforcement Learning
```

Pertemuan ini fokus pada dua teknik penting:

```text
Behavior Tree
Utility-Based AI
```

---

# Slide 5 — Posisi Behavior Tree dan Utility AI

Arsitektur Game AI:

```text
Perception
    ↓
Memory / Blackboard
    ↓
Decision Making
    ├�”€─ FSM
    ├�”€─ Behavior Tree
    └�”€─ Utility AI
    ↓
Navigation / Pathfinding
    ↓
Movement / Steering
    ↓
Action / Animation
```

Behavior Tree dan Utility AI berada pada bagian:

```text
Decision Making
```

Keduanya menentukan aksi atau perilaku NPC berdasarkan kondisi game.

---

# Slide 6 — Capaian Pembelajaran Pertemuan

Setelah pertemuan ini, mahasiswa diharapkan mampu:

1. Menjelaskan konsep Behavior Tree.
2. Menjelaskan node utama pada Behavior Tree.
3. Membedakan selector, sequence, decorator, condition, dan action.
4. Membaca diagram Behavior Tree sederhana.
5. Mendesain Behavior Tree untuk perilaku NPC.
6. Menjelaskan konsep Utility-Based AI.
7. Menghitung skor aksi berdasarkan beberapa faktor.
8. Membandingkan FSM, Behavior Tree, dan Utility AI.
9. Merancang NPC dengan Behavior Tree atau Utility-Based Decision.

---

# Slide 7 — Apa Itu Behavior Tree?

**Behavior Tree** adalah struktur decision making berbentuk pohon yang digunakan untuk mengatur perilaku agent.

Behavior Tree terdiri dari node-node.

```text
Root
 └�”€─ Node
      ├�”€─ Node
      └�”€─ Node
```

Behavior Tree banyak digunakan dalam game karena:
- modular,
- mudah diperluas,
- lebih rapi untuk perilaku kompleks,
- mudah divisualisasikan,
- cocok untuk NPC yang memiliki banyak aksi.

---

# Slide 8 — Cara Membaca Behavior Tree

Behavior Tree biasanya dibaca dari:

```text
Root
  ↓
Child node
  ↓
Leaf node
```

Setiap node mengembalikan status:

```text
Success
Failure
Running
```

Makna:

| Status | Arti |
|---|---|
| Success | Node berhasil dijalankan |
| Failure | Node gagal dijalankan |
| Running | Node masih berjalan |

Status ini menentukan apakah tree lanjut ke node berikutnya atau berhenti.

---

# Slide 9 — Tiga Status Utama

## Success

Contoh:

```text
Condition: Player terlihat
Result: Success
```

## Failure

Contoh:

```text
Condition: Player terlihat
Result: Failure karena player tidak terlihat
```

## Running

Contoh:

```text
Action: Berjalan ke waypoint
Result: Running karena belum sampai
```

Status `Running` sangat penting untuk action yang butuh waktu.

---

# Slide 10 — Struktur Umum Behavior Tree

```text
Root
 └�”€─ Selector
      ├�”€─ Sequence: Attack
      │    ├�”€─ Can See Player?
      │    ├�”€─ In Attack Range?
      │    └�”€─ Attack Player
      │
      ├�”€─ Sequence: Chase
      │    ├�”€─ Can See Player?
      │    └�”€─ Chase Player
      │
      └�”€─ Patrol
```

Makna:
- jika bisa menyerang, attack,
- jika belum bisa menyerang tetapi melihat player, chase,
- jika tidak melihat player, patrol.

---

# Slide 11 — Root Node

**Root Node** adalah titik awal Behavior Tree.

Root biasanya memiliki satu child utama.

```text
Root
 └�”€─ Selector
```

Root menjalankan child-nya setiap update/tick.

Dalam implementasi Unity, root dapat dipanggil dari:

```csharp
void Update()
{
    tree.Tick();
}
```

atau dengan interval tertentu:

```text
Tick setiap 0.2 detik
```

---

# Slide 12 — Tick pada Behavior Tree

**Tick** adalah proses menjalankan Behavior Tree.

Setiap tick:
1. tree dimulai dari root,
2. node dievaluasi,
3. status dikembalikan,
4. action dijalankan jika memenuhi kondisi.

Contoh:

```text
Update()
    ↓
BehaviorTree.Tick()
    ↓
Root
    ↓
Selector
    ↓
Sequence / Action
```

BT tidak harus di-tick setiap frame, tergantung kebutuhan performa.

---

# Slide 13 — Jenis Node pada Behavior Tree

Jenis node utama:

```text
Behavior Tree Node
├�”€─ Composite Node
│   ├�”€─ Selector
│   └�”€─ Sequence
│
├�”€─ Decorator Node
│   ├�”€─ Inverter
│   ├�”€─ Repeat
│   └�”€─ Cooldown
│
└�”€─ Leaf Node
    ├�”€─ Condition
    └�”€─ Action
```

Composite mengatur alur.  
Decorator memodifikasi perilaku child.  
Leaf menjalankan pengecekan atau aksi nyata.

---

# Slide 14 — Composite Node

Composite node adalah node yang memiliki lebih dari satu child.

Dua composite paling penting:

```text
Selector
Sequence
```

Selector sering dipahami sebagai:

```text
OR
```

Sequence sering dipahami sebagai:

```text
AND
```

Namun, dalam Behavior Tree, keduanya juga memperhatikan status `Running`.

---

# Slide 15 — Selector

**Selector** mencoba child dari kiri ke kanan sampai ada yang berhasil.

```text
Selector
├�”€─ Attack
├�”€─ Chase
└�”€─ Patrol
```

Logika sederhana:

```text
Coba Attack
Jika gagal, coba Chase
Jika gagal, coba Patrol
```

Selector cocok untuk memilih prioritas aksi.

Aksi yang lebih penting biasanya ditempatkan di kiri.

---

# Slide 16 — Selector sebagai Priority Selector

Contoh:

```text
Selector
├�”€─ Flee
├�”€─ Attack
├�”€─ Chase
└�”€─ Patrol
```

Makna prioritas:

```text
1. Jika HP rendah → Flee
2. Jika bisa menyerang → Attack
3. Jika melihat player → Chase
4. Jika tidak ada kondisi khusus → Patrol
```

Selector membuat prioritas aksi lebih mudah dibanding banyak transition FSM.

---

# Slide 17 — Pseudocode Selector

```text
Selector:
    for each child:
        status = child.Tick()

        if status == Success:
            return Success

        if status == Running:
            return Running

    return Failure
```

Jika semua child gagal:

```text
Selector gagal
```

Jika salah satu child berhasil:

```text
Selector berhasil
```

Jika salah satu child masih berjalan:

```text
Selector Running
```

---

# Slide 18 — Sequence

**Sequence** menjalankan child dari kiri ke kanan sampai semuanya berhasil.

```text
Sequence
├�”€─ Can See Player?
├�”€─ In Attack Range?
└�”€─ Attack
```

Makna:

```text
Jika player terlihat
DAN player dalam jarak serang
MAKA attack
```

Jika salah satu child gagal, sequence langsung gagal.

Sequence cocok untuk membuat aksi bersyarat.

---

# Slide 19 — Sequence sebagai AND

Contoh:

```text
Sequence: Attack Player
├�”€─ Is Alive?
├�”€─ Can See Player?
├�”€─ Is In Attack Range?
└�”€─ Perform Attack
```

Makna:

```text
Enemy hidup
DAN melihat player
DAN player dekat
DAN attack dapat dilakukan
```

Jika salah satu condition gagal, action tidak dijalankan.

---

# Slide 20 — Pseudocode Sequence

```text
Sequence:
    for each child:
        status = child.Tick()

        if status == Failure:
            return Failure

        if status == Running:
            return Running

    return Success
```

Jika semua child success:

```text
Sequence berhasil
```

Jika ada satu child failure:

```text
Sequence gagal
```

---

# Slide 21 — Selector vs Sequence

| Node | Cara Berpikir | Berhenti Saat | Cocok Untuk |
|---|---|---|---|
| Selector | OR / pilih prioritas | Ada child success | Memilih aksi |
| Sequence | AND / urutan syarat | Ada child failure | Aksi bersyarat |

Contoh:

```text
Selector:
Attack atau Chase atau Patrol

Sequence:
Jika melihat player dan dekat, lakukan Attack
```

Selector memilih alternatif.  
Sequence memastikan semua syarat terpenuhi.

---

# Slide 22 — Leaf Node

Leaf node adalah node paling bawah.

Leaf node biasanya berupa:

```text
Condition Node
Action Node
```

Condition:
- mengecek kondisi,
- tidak melakukan aksi besar,
- menghasilkan Success/Failure.

Action:
- melakukan aksi,
- dapat menghasilkan Running,
- dapat memanggil movement, attack, animation, dll.

---

# Slide 23 — Condition Node

Condition node mengecek syarat.

Contoh:

```text
Can See Player?
Is Player In Range?
Is Health Low?
Has Ammo?
Is Cooldown Ready?
```

Contoh return:

```text
Can See Player?
    true  → Success
    false → Failure
```

Condition node sebaiknya singkat dan jelas.

---

# Slide 24 — Action Node

Action node menjalankan aksi.

Contoh:

```text
Patrol
Chase Player
Attack Player
Flee
Reload
Take Cover
Search Last Position
```

Action dapat mengembalikan:

```text
Success  → aksi selesai
Failure  → aksi gagal
Running  → aksi masih berjalan
```

Contoh:
- `Attack` bisa Success setelah animasi selesai.
- `MoveToTarget` Running selama belum sampai.
- `Flee` Running selama belum aman.

---

# Slide 25 — Decorator

**Decorator** adalah node yang memiliki satu child dan mengubah cara child tersebut dievaluasi.

Contoh decorator:
- Inverter,
- Repeater,
- Cooldown,
- Timeout,
- Until Success,
- Until Failure.

Struktur:

```text
Decorator
 └�”€─ Child Node
```

Decorator membantu membuat tree lebih fleksibel tanpa mengubah isi child.

---

# Slide 26 — Inverter Decorator

Inverter membalik status child:

```text
Success → Failure
Failure → Success
Running → Running
```

Contoh:

```text
Inverter
 └�”€─ Can See Player?
```

Makna:

```text
Jika tidak melihat player → Success
Jika melihat player → Failure
```

Berguna untuk condition negatif seperti:

```text
Player not visible
```

---

# Slide 27 — Cooldown Decorator

Cooldown membatasi seberapa sering action boleh dijalankan.

Contoh:

```text
Cooldown 1.5s
 └�”€─ Attack Player
```

Makna:
- attack tidak boleh terjadi setiap frame,
- attack hanya bisa dilakukan setelah cooldown selesai.

Tanpa cooldown:
```text
damage dapat terjadi terlalu cepat
```

Cooldown sangat penting untuk action seperti attack, heal, skill, dan special ability.

---

# Slide 28 — Repeat Decorator

Repeat membuat child dijalankan berulang.

Contoh:

```text
Repeat
 └�”€─ Patrol
```

Makna:
- patrol terus dijalankan,
- selama tidak ada behavior prioritas lebih tinggi.

Repeat sering dipakai untuk behavior default.

Namun dalam banyak implementasi sederhana, patrol cukup dibuat sebagai action yang mengembalikan `Running`.

---

# Slide 29 — Blackboard

**Blackboard** adalah tempat menyimpan data yang digunakan oleh Behavior Tree.

Contoh data:

```text
playerTransform
lastSeenPosition
canSeePlayer
distanceToPlayer
health
currentTarget
patrolPoint
```

Behavior Tree membaca dan menulis data melalui blackboard.

Blackboard membantu memisahkan:
- perception,
- memory,
- decision,
- action.

---

# Slide 30 — Contoh Blackboard Enemy

```text
Enemy Blackboard
├�”€─ Player Transform
├�”€─ Can See Player
├�”€─ Distance To Player
├�”€─ Last Seen Position
├�”€─ Health
├�”€─ Is Health Low
├�”€─ Attack Cooldown Ready
└�”€─ Current Patrol Point
```

Condition node membaca data:

```text
CanSeePlayerCondition
```

Action node menggunakan data:

```text
ChasePlayerAction
```

---

# Slide 31 — Behavior Tree Enemy Sederhana

```text
Root
 └�”€─ Selector
      ├�”€─ Sequence: Flee
      │    ├�”€─ Is Health Low?
      │    └�”€─ Flee From Player
      │
      ├�”€─ Sequence: Attack
      │    ├�”€─ Can See Player?
      │    ├�”€─ Is In Attack Range?
      │    └�”€─ Attack Player
      │
      ├�”€─ Sequence: Chase
      │    ├�”€─ Can See Player?
      │    └�”€─ Chase Player
      │
      └�”€─ Patrol
```

Prioritas:
1. Flee
2. Attack
3. Chase
4. Patrol

---

# Slide 32 — Membaca Tree Enemy

Jika HP rendah:

```text
Flee sequence sukses
NPC kabur
```

Jika HP normal dan player dekat:

```text
Flee gagal
Attack sequence sukses
NPC menyerang
```

Jika player terlihat tetapi belum dekat:

```text
Flee gagal
Attack gagal
Chase sukses
NPC mengejar
```

Jika player tidak terlihat:

```text
Flee gagal
Attack gagal
Chase gagal
Patrol dijalankan
```

---

# Slide 33 — Behavior Tree vs FSM

| Aspek | FSM | Behavior Tree |
|---|---|---|
| Struktur | State dan transition | Tree node |
| Fokus | State aktif | Evaluasi prioritas |
| Cocok untuk | Perilaku sederhana | Perilaku modular |
| Perubahan | Bisa memengaruhi banyak transition | Tambah node relatif mudah |
| Visual | Diagram state | Diagram pohon |
| Kompleksitas | Bisa state explosion | Tree bisa dalam tetapi modular |

Behavior Tree lebih nyaman untuk perilaku NPC yang banyak cabangnya.

---

# Slide 34 — Kelebihan Behavior Tree

Kelebihan:
- modular,
- mudah dibaca,
- mudah menambahkan behavior baru,
- cocok untuk prioritas aksi,
- condition dan action dapat dipakai ulang,
- lebih terstruktur untuk NPC kompleks.

Contoh menambah behavior:

```text
Tambahkan Heal sebelum Flee
Tambahkan Reload sebelum Attack
Tambahkan Search setelah Chase
```

Tidak harus mengubah banyak transition seperti FSM.

---

# Slide 35 — Kekurangan Behavior Tree

Kekurangan:
- tetap bisa menjadi besar,
- debugging perlu visualisasi,
- prioritas node harus hati-hati,
- action `Running` perlu ditangani benar,
- tree yang terlalu dalam sulit dibaca,
- tidak otomatis memilih aksi terbaik secara numerik.

Untuk perilaku yang membutuhkan perbandingan banyak skor, Utility AI bisa lebih cocok.

---

# Slide 36 — Kesalahan Umum Behavior Tree

1. Semua action diletakkan tanpa condition.
2. Selector tidak diurutkan berdasarkan prioritas.
3. Sequence terlalu panjang dan sulit dibaca.
4. Action tidak mengembalikan Running.
5. Cooldown attack tidak dibuat.
6. Blackboard tidak diperbarui.
7. Perception dicampur terlalu banyak di action.
8. Tree di-tick terlalu sering untuk NPC sangat banyak.
9. Tidak ada debug status node.
10. Node terlalu spesifik dan tidak reusable.

---

# Slide 37 — Implementasi Konsep BT di Unity

Struktur class sederhana:

```text
Node
├�”€─ SelectorNode
├�”€─ SequenceNode
├�”€─ ConditionNode
└�”€─ ActionNode
```

Status node:

```csharp
public enum NodeState
{
    Success,
    Failure,
    Running
}
```

Base node:

```csharp
public abstract class BTNode
{
    public abstract NodeState Tick();
}
```

Ini dapat dikembangkan menjadi Behavior Tree sederhana untuk praktikum.

---

# Slide 38 — Contoh Selector Node

```csharp
public class SelectorNode : BTNode
{
    private List<BTNode> children;

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

Selector memilih child pertama yang berhasil atau sedang berjalan.

---

# Slide 39 — Contoh Sequence Node

```csharp
public class SequenceNode : BTNode
{
    private List<BTNode> children;

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

Sequence berhasil hanya jika semua child berhasil.

---

# Slide 40 — Behavior Tree dan NavMeshAgent

Action node dapat memanggil `NavMeshAgent`.

Contoh:

```text
ChasePlayerAction
    ↓
agent.SetDestination(player.position)
```

Attack action:

```text
agent.isStopped = true
FacePlayer()
PlayAttackAnimation()
```

Patrol action:

```text
agent.SetDestination(currentWaypoint.position)
```

Behavior Tree menentukan aksi, NavMeshAgent menjalankan navigation.

---

# Slide 41 — Behavior Tree dan Perception

Perception memperbarui blackboard.

Contoh:

```csharp
blackboard.canSeePlayer = CanSeePlayer();
blackboard.distanceToPlayer =
    Vector3.Distance(transform.position, player.position);
```

Condition node cukup membaca:

```text
blackboard.canSeePlayer
blackboard.distanceToPlayer
blackboard.health
```

Dengan demikian, tree tidak perlu menghitung semua sensor secara langsung.

---

# Slide 42 — Behavior Tree dengan Memory

Memory dapat menyimpan:

```text
lastSeenPosition
lastHeardSoundPosition
lastKnownThreat
```

Contoh tree:

```text
Selector
├�”€─ Attack if visible and close
├�”€─ Chase if visible
├�”€─ Search Last Seen Position
└�”€─ Patrol
```

Jika player hilang:
- NPC menuju posisi terakhir,
- mencari sebentar,
- lalu kembali patrol.

Ini membuat NPC tampak lebih cerdas.

---

# Slide 43 — Behavior Tree untuk Praktikum

Praktikum yang direncanakan:

```text
NPC dengan Behavior Tree
```

Target perilaku:

```text
Jika HP rendah
    → Flee

Jika player terlihat dan dekat
    → Attack

Jika player terlihat tetapi jauh
    → Chase

Jika player tidak terlihat
    → Patrol
```

Detail teknis dan langkah implementasi akan dibuat di modul terpisah.

---

# Slide 44 — Bagian Kedua: Utility-Based AI

Selain Behavior Tree, pendekatan decision making lain adalah:

```text
Utility-Based AI
```

Utility AI tidak memilih aksi berdasarkan urutan prioritas tetap, tetapi berdasarkan skor.

Contoh:

```text
Attack = 0.75
Flee   = 0.90
Patrol = 0.10

Pilih Flee
```

NPC memilih aksi yang paling berguna pada kondisi saat itu.

---

# Slide 45 — Apa Itu Utility-Based AI?

**Utility-Based AI** adalah pendekatan decision making yang menghitung nilai utilitas untuk setiap aksi.

Aksi dengan skor tertinggi dipilih.

Konsep:

```text
Game State
    ↓
Evaluate Actions
    ↓
Score Each Action
    ↓
Choose Highest Score
    ↓
Execute Action
```

Utility AI cocok untuk situasi ketika NPC memiliki banyak pilihan dan perlu memilih yang paling relevan.

---

# Slide 46 — Contoh Utility AI Sederhana

NPC memiliki aksi:

```text
Attack
Flee
Heal
Patrol
Chase
```

Skor dihitung:

```text
Attack = 0.80
Flee   = 0.30
Heal   = 0.60
Patrol = 0.10
Chase  = 0.70
```

Aksi yang dipilih:

```text
Attack
```

Karena `Attack` memiliki skor tertinggi.

---

# Slide 47 — Scoring Action

Setiap aksi memiliki fungsi skor.

Contoh:

```text
Score Attack dipengaruhi oleh:
- jarak ke player,
- cooldown attack,
- health enemy,
- apakah player terlihat.
```

Contoh:

```text
Score Flee dipengaruhi oleh:
- health rendah,
- player dekat,
- jumlah musuh pendukung sedikit.
```

Aksi tidak hanya dipilih berdasarkan satu kondisi, tetapi kombinasi beberapa faktor.

---

# Slide 48 — Utility Score

Skor biasanya dinormalisasi dalam rentang:

```text
0.0 sampai 1.0
```

Makna:

```text
0.0 = tidak berguna
1.0 = sangat berguna
```

Contoh:

```text
Health penuh:
Flee score rendah

Health rendah:
Flee score tinggi
```

Utility score membuat perilaku lebih halus daripada condition biner.

---

# Slide 49 — Binary Decision vs Utility Decision

## Binary Condition

```text
Jika health < 30
    → Flee
```

Masalah:
- perubahan terjadi mendadak,
- hanya ada benar/salah.

## Utility Score

```text
Health 80 → Flee score 0.1
Health 50 → Flee score 0.4
Health 20 → Flee score 0.9
```

Perubahan perilaku dapat lebih bertahap.

---

# Slide 50 — Faktor dalam Utility AI

Faktor umum:

```text
Health
Distance to Player
Ammo
Cooldown
Cover Availability
Ally Nearby
Enemy Count
Threat Level
Objective Importance
Resource Availability
```

Setiap faktor dapat diubah menjadi skor.

Contoh:
- semakin rendah health, semakin tinggi skor flee,
- semakin dekat player, semakin tinggi skor attack,
- semakin jauh target, semakin rendah skor melee attack.

---

# Slide 51 — Response Curve

Utility AI sering menggunakan**response curve**.

Response curve mengubah input menjadi skor.

Contoh input:

```text
health percentage
```

Output:

```text
flee urgency
```

Ilustrasi:

```text
Health tinggi  → Flee score rendah
Health rendah  → Flee score tinggi
```

Dengan curve, perubahan skor dapat dibuat:
- linear,
- exponential,
- threshold,
- inverse,
- custom.

---

# Slide 52 — Contoh Skor Flee

Misalnya:

```text
healthPercent = currentHealth / maxHealth
```

Flee score:

```text
fleeScore = 1 - healthPercent
```

Contoh:

| Health | healthPercent | fleeScore |
|---|---:|---:|
| 100 | 1.0 | 0.0 |
| 70 | 0.7 | 0.3 |
| 40 | 0.4 | 0.6 |
| 10 | 0.1 | 0.9 |

Semakin rendah health, semakin tinggi keinginan untuk kabur.

---

# Slide 53 — Contoh Skor Attack

Attack dipengaruhi oleh jarak.

Misalnya:

```text
attackScore = 1 - (distance / attackMaxDistance)
```

Jika distance dibatasi antara 0 dan `attackMaxDistance`.

Contoh:

| Distance | Attack Score |
|---|---:|
| 1 | 0.9 |
| 3 | 0.7 |
| 6 | 0.4 |
| 10 | 0.0 |

Semakin dekat player, semakin tinggi skor attack.

---

# Slide 54 — Clamp pada Utility Score

Skor perlu dibatasi agar tetap di rentang 0 sampai 1.

Unity:

```csharp
float score = 1f - (distance / maxDistance);
score = Mathf.Clamp01(score);
```

`Mathf.Clamp01()` memastikan nilai:
- kurang dari 0 menjadi 0,
- lebih dari 1 menjadi 1.

Ini penting agar skor tidak keluar dari rentang yang diharapkan.

---

# Slide 55 — Menggabungkan Banyak Faktor

Aksi dapat memiliki banyak pertimbangan.

Contoh Attack:

```text
Attack Score =
distanceScore Ã— visibilityScore Ã— cooldownScore
```

Jika player tidak terlihat:

```text
visibilityScore = 0
```

maka:

```text
Attack Score = 0
```

Meskipun jarak dekat, NPC tidak menyerang jika tidak melihat player.

---

# Slide 56 — Weighted Sum

Cara lain adalah menjumlahkan skor dengan bobot.

Contoh:

```text
Attack Score =
0.5 Ã— distanceScore
+
0.3 Ã— visibilityScore
+
0.2 Ã— aggressionScore
```

Bobot menentukan pentingnya faktor.

Jumlah bobot sebaiknya mudah dipahami.

Contoh:
- distance lebih penting,
- visibility wajib,
- aggression menambah variasi perilaku.

---

# Slide 57 — Multiplicative Scoring

Multiplicative scoring menggunakan perkalian.

Contoh:

```text
Attack Score =
distanceScore
Ã—
visibilityScore
Ã—
cooldownScore
```

Kelebihan:
- jika satu faktor 0, skor menjadi 0,
- cocok untuk syarat wajib.

Kekurangan:
- skor mudah menjadi sangat kecil,
- perlu hati-hati jika terlalu banyak faktor.

---

# Slide 58 — Utility Action

Setiap action dapat memiliki:

```text
Name
Score Function
Execute Function
```

Contoh:

```text
Action: Attack
Score: CalculateAttackScore()
Execute: AttackPlayer()
```

Action lain:

```text
Action: Flee
Score: CalculateFleeScore()
Execute: FleeFromPlayer()
```

Utility AI memilih action dengan skor tertinggi.

---

# Slide 59 — Pseudocode Utility AI

```text
bestAction = null
bestScore = -infinity

for each action in actions:
    score = action.CalculateScore(context)

    if score > bestScore:
        bestScore = score
        bestAction = action

bestAction.Execute()
```

`context` dapat berisi:
- health,
- distance,
- visibility,
- cooldown,
- ammo,
- target position.

---

# Slide 60 — Contoh Utility AI Enemy

Aksi:

```text
Attack
Chase
Flee
Patrol
```

Skor:

```text
Attack = distanceScore Ã— visibilityScore Ã— cooldownScore
Chase  = visibilityScore Ã— farFromPlayerScore
Flee   = lowHealthScore Ã— threatNearScore
Patrol = defaultScore
```

Jika HP rendah dan player dekat:

```text
Flee score tinggi
```

Jika player terlihat dan dekat:

```text
Attack score tinggi
```

Jika tidak ada player:

```text
Patrol score menjadi pilihan default
```

---

# Slide 61 — Default Action

Utility AI perlu default action.

Contoh:

```text
Patrol Score = 0.1
```

Agar jika semua action lain rendah, NPC tetap melakukan sesuatu.

Tanpa default action:
- NPC bisa diam,
- tidak ada aksi yang dipilih,
- perilaku terlihat rusak.

Default action umum:
- idle,
- patrol,
- wander,
- guard position.

---

# Slide 62 — Masalah Switching Terlalu Cepat

Utility AI dapat menyebabkan aksi berubah terlalu sering.

Contoh:

```text
Attack score = 0.51
Chase score  = 0.50
```

Frame berikutnya:

```text
Attack score = 0.49
Chase score  = 0.52
```

NPC bisa terus berganti aksi.

Solusi:
- hysteresis,
- action commitment,
- cooldown decision,
- minimum action duration.

---

# Slide 63 — Action Commitment

Action commitment berarti NPC bertahan pada action tertentu selama waktu minimum.

Contoh:

```text
Jika memilih Attack,
jalankan minimal 1 detik
sebelum memilih action lain.
```

Manfaat:
- perilaku lebih stabil,
- animasi tidak terputus,
- action tidak berganti setiap frame.

Ini mirip konsep stabilisasi transition pada FSM.

---

# Slide 64 — Utility AI dan Personality

Utility AI mudah digunakan untuk membuat variasi kepribadian NPC.

Contoh:

```text
Aggressive Enemy
Attack weight tinggi
Flee weight rendah

Coward Enemy
Flee weight tinggi
Attack weight rendah

Defensive Enemy
TakeCover weight tinggi
```

Dengan parameter berbeda, behavior dasar sama dapat menghasilkan karakter yang berbeda.

---

# Slide 65 — Utility AI vs Behavior Tree

| Aspek | Behavior Tree | Utility AI |
|---|---|---|
| Dasar keputusan | Urutan prioritas node | Skor aksi |
| Cocok untuk | Logika terstruktur | Pilihan fleksibel |
| Output | Node/action yang berhasil | Action skor tertinggi |
| Mudah dibaca | Ya, secara visual | Ya, jika skor ditampilkan |
| Perilaku bertahap | Terbatas | Sangat baik |
| Risiko | Tree terlalu besar | Switching terlalu cepat |

Behavior Tree cocok untuk alur logika.  
Utility AI cocok untuk pemilihan aksi berbasis konteks.

---

# Slide 66 — FSM vs Behavior Tree vs Utility AI

| Teknik | Kekuatan | Kelemahan |
|---|---|---|
| FSM | Sederhana, jelas | Transition bisa banyak |
| Behavior Tree | Modular, visual | Tree bisa besar |
| Utility AI | Fleksibel, adaptif | Perlu desain skor |
| Hierarchical FSM | Rapi untuk state berlapis | Lebih kompleks dari FSM dasar |

Tidak ada satu teknik terbaik untuk semua kasus.

Pilih berdasarkan kebutuhan perilaku NPC.

---

# Slide 67 — Kapan Memakai Behavior Tree?

Behavior Tree cocok jika:
- NPC punya banyak aksi bersyarat,
- prioritas aksi jelas,
- perilaku dapat dipecah menjadi node,
- ingin struktur modular,
- ingin condition dan action reusable.

Contoh:
- guard AI,
- enemy shooter,
- boss pattern,
- companion AI,
- stealth game NPC.

---

# Slide 68 — Kapan Memakai Utility AI?

Utility AI cocok jika:
- banyak aksi mungkin dipilih,
- pilihan bergantung pada beberapa faktor,
- tidak ingin rule terlalu kaku,
- ingin perilaku lebih adaptif,
- ingin variasi personality.

Contoh:
- NPC combat tactical,
- simulation game,
- survival AI,
- strategy unit,
- AI director sederhana.

---

# Slide 69 — Kombinasi Behavior Tree dan Utility AI

Behavior Tree dan Utility AI dapat digabung.

Contoh:

```text
Behavior Tree
└�”€─ Selector
    ├�”€─ Emergency Sequence
    │   ├�”€─ Is Dying?
    │   └�”€─ Flee
    │
    └�”€─ Utility Selector
        ├�”€─ Attack
        ├�”€─ Chase
        ├�”€─ TakeCover
        └�”€─ Patrol
```

Behavior Tree mengatur struktur besar.  
Utility AI memilih aksi terbaik dalam bagian tertentu.

---

# Slide 70 — Contoh Kombinasi pada Enemy

```text
Root
 └�”€─ Selector
      ├�”€─ Sequence: Emergency
      │    ├�”€─ Health Critical?
      │    └�”€─ Flee
      │
      ├�”€─ Sequence: Combat
      │    ├�”€─ Can See Player?
      │    └�”€─ Utility Combat Decision
      │         ├�”€─ Attack
      │         ├�”€─ Chase
      │         └�”€─ Take Cover
      │
      └�”€─ Patrol
```

Dengan ini:
- kondisi darurat tetap diprioritaskan,
- aksi combat dipilih berdasarkan skor.

---

# Slide 71 — Unity Concepts yang Relevan

Untuk materi ini, mahasiswa perlu memahami:

```text
MonoBehaviour
Update()
SerializeField
Transform
Vector3
NavMeshAgent
Animator
Collider
Raycast
LayerMask
ScriptableObject
Debug.Log
Gizmos
```

Tambahan untuk struktur AI:
- enum status node,
- class inheritance,
- list child node,
- interface action,
- data context/blackboard.

---

# Slide 72 — ScriptableObject untuk Utility Action

Pada project yang lebih besar, action dapat dibuat sebagai `ScriptableObject`.

Keuntungan:
- data action dapat diatur dari Inspector,
- mudah membuat variasi action,
- reusable,
- designer-friendly.

Contoh konsep:

```text
AttackAction.asset
FleeAction.asset
HealAction.asset
PatrolAction.asset
```

Untuk praktikum awal, implementasi dapat dibuat lebih sederhana di script biasa.

---

# Slide 73 — Debugging Behavior Tree

Hal yang perlu dilihat:
- node mana yang sedang Running,
- node mana yang Success,
- node mana yang Failure,
- urutan evaluasi selector,
- condition mana yang gagal.

Contoh debug:

```text
Root/Selector/AttackSequence: Failure
Root/Selector/ChaseSequence: Running
Current Action: Chase
```

Visual debug sangat membantu karena tree dapat menjadi besar.

---

# Slide 74 — Debugging Utility AI

Utility AI sebaiknya menampilkan skor.

Contoh:

```text
Attack: 0.72
Chase : 0.65
Flee  : 0.20
Patrol: 0.10

Selected: Attack
```

Tanpa debug skor, sulit mengetahui mengapa NPC memilih aksi tertentu.

Debug dapat ditampilkan melalui:
- Console,
- UI text,
- gizmos,
- inspector custom,
- on-screen label.

---

# Slide 75 — Kesalahan Umum Utility AI

1. Skor tidak dinormalisasi.
2. Tidak ada default action.
3. Aksi berubah terlalu cepat.
4. Bobot tidak jelas.
5. Terlalu banyak faktor untuk satu action.
6. Faktor wajib tidak dibuat sebagai multiplier.
7. Tidak ada debug score.
8. Skor action tidak sesuai gameplay.
9. Action yang terpilih tidak dapat dieksekusi.
10. Tidak ada cooldown atau minimum duration.

---

# Slide 76 — Praktikum Pertemuan 6: Gambaran Umum

Judul praktikum:

## NPC dengan Behavior Tree / Utility-Based Decision

Rencana praktikum dapat dibuat dalam dua pilihan:

```text
Pilihan A:
NPC Behavior Tree

Pilihan B:
NPC Utility-Based Decision
```

Atau digabung:

```text
Behavior Tree sebagai struktur utama
Utility AI untuk memilih action combat
```

Detail teknis, script, dan langkah implementasi akan dibuat pada modul praktikum terpisah.

---

# Slide 77 — Rencana Praktikum Pilihan A: Behavior Tree

Target:
- membuat node dasar,
- membuat selector,
- membuat sequence,
- membuat condition node,
- membuat action node,
- membuat NPC dengan prioritas aksi.

Perilaku NPC:

```text
Flee jika HP rendah
Attack jika player dekat
Chase jika player terlihat
Patrol jika tidak ada target
```

Tree:

```text
Root
 └�”€─ Selector
      ├�”€─ Flee Sequence
      ├�”€─ Attack Sequence
      ├�”€─ Chase Sequence
      └�”€─ Patrol Action
```

---

# Slide 78 — Rencana Praktikum Pilihan B: Utility AI

Target:
- membuat daftar action,
- menghitung skor setiap action,
- memilih skor tertinggi,
- menjalankan action,
- menampilkan skor untuk debug.

Aksi:

```text
Attack
Chase
Flee
Patrol
```

Faktor:
- health,
- distance,
- visibility,
- cooldown.

Output:
- NPC memilih aksi berdasarkan kondisi game secara dinamis.

---

# Slide 79 — Rencana Scene Praktikum

Komponen scene:

```text
Ground
Player
NPC Enemy
Waypoint Patrol
Obstacle
Safe Point
Main Camera
Canvas Debug UI
```

NPC harus dapat:
- patrol ketika aman,
- chase jika melihat player,
- attack jika dekat,
- flee jika health rendah.

Perbedaannya:
- Behavior Tree memilih berdasarkan prioritas node.
- Utility AI memilih berdasarkan skor aksi.

---

# Slide 80 — Parameter Praktikum

Contoh parameter:

```text
visionRange = 10
attackRange = 2
attackCooldown = 1.5
maxHealth = 100
lowHealthThreshold = 30
safeDistance = 12
patrolSpeed = 2
chaseSpeed = 4
fleeSpeed = 5
```

Untuk Utility AI:

```text
attackWeight
fleeWeight
chaseWeight
patrolBaseScore
decisionInterval
minimumActionDuration
```

Parameter digunakan untuk tuning perilaku NPC.

---

# Slide 81 — Eksperimen Mahasiswa

Mahasiswa dapat mencoba:

1. Mengubah prioritas selector.
2. Menghapus condition tertentu dan mengamati efeknya.
3. Menambahkan cooldown decorator.
4. Menambahkan Search action.
5. Membandingkan BT dan Utility AI.
6. Mengubah bobot flee.
7. Mengubah bobot attack.
8. Menampilkan skor utility di UI.
9. Membuat enemy agresif dan coward.
10. Menggabungkan BT dengan Utility AI.

---

# Slide 82 — Evaluasi Perilaku NPC

Pertanyaan evaluasi:

1. Apakah NPC memilih aksi yang benar?
2. Apakah prioritas Behavior Tree sudah masuk akal?
3. Apakah sequence gagal ketika condition tidak terpenuhi?
4. Apakah selector memilih child berikutnya saat child sebelumnya gagal?
5. Apakah action Running ditangani dengan benar?
6. Apakah Utility AI memilih skor tertinggi?
7. Apakah skor sesuai dengan kondisi game?
8. Apakah NPC terlalu sering berganti aksi?
9. Apakah debug score/status mudah dibaca?
10. Apakah perilaku NPC terasa natural?

---

# Slide 83 — Studi Kasus Perbandingan

Kondisi:

```text
Health enemy = 20%
Player terlihat = Ya
Distance to player = dekat
Attack cooldown = ready
```

FSM:
```text
Jika HP rendah → Flee
```

Behavior Tree:
```text
Flee Sequence berada paling kiri
→ Flee dijalankan
```

Utility AI:
```text
Flee score = 0.90
Attack score = 0.75
→ Flee dipilih
```

Ketiga teknik dapat menghasilkan keputusan sama, tetapi cara berpikirnya berbeda.

---

# Slide 84 — Ringkasan Behavior Tree

Behavior Tree:
- berbentuk pohon,
- dimulai dari root,
- menggunakan node,
- menghasilkan Success, Failure, Running,
- selector memilih alternatif,
- sequence menjalankan urutan syarat,
- decorator memodifikasi child,
- leaf node berisi condition dan action.

Cocok untuk:
- NPC kompleks,
- perilaku modular,
- prioritas aksi yang jelas.

---

# Slide 85 — Ringkasan Utility-Based AI

Utility AI:
- menghitung skor setiap aksi,
- memilih aksi dengan skor tertinggi,
- menggunakan faktor seperti health, distance, visibility,
- dapat menghasilkan perilaku adaptif,
- cocok untuk NPC dengan banyak pilihan.

Konsep utama:

```text
Action Score
    ↓
Best Action
    ↓
Execute
```

Utility AI membuat keputusan tidak hanya benar/salah, tetapi berbasis tingkat kepentingan.

---

# Slide 86 — Perbandingan Akhir

```text
FSM
    cocok untuk state sederhana

Behavior Tree
    cocok untuk struktur perilaku modular

Utility AI
    cocok untuk memilih aksi berdasarkan skor
```

Dalam proyek game nyata, teknik ini sering digabung.

Contoh:

```text
FSM untuk mode besar
Behavior Tree untuk perilaku NPC
Utility AI untuk memilih aksi combat
```

---

# Slide 87 — Pertanyaan Diskusi

1. Mengapa Behavior Tree lebih modular dibanding FSM sederhana?
2. Apa perbedaan selector dan sequence?
3. Mengapa action node perlu status Running?
4. Apa fungsi decorator?
5. Apa fungsi blackboard?
6. Mengapa Utility AI membutuhkan normalisasi skor?
7. Kapan Utility AI lebih cocok daripada Behavior Tree?
8. Mengapa NPC Utility AI dapat berganti aksi terlalu cepat?
9. Bagaimana cara membuat enemy agresif dengan Utility AI?
10. Bagaimana cara menggabungkan Behavior Tree dan Utility AI?

---

# Slide 88 — Latihan Konsep

Rancang Behavior Tree untuk NPC berikut:

```text
NPC guard menjaga area.
Jika HP rendah, NPC kabur.
Jika melihat player dan player dekat, NPC menyerang.
Jika melihat player tetapi jauh, NPC mengejar.
Jika kehilangan player, NPC mencari posisi terakhir.
Jika tidak ada target, NPC patroli.
```

Tentukan:
1. Selector utama.
2. Sequence yang dibutuhkan.
3. Condition node.
4. Action node.
5. Decorator yang mungkin diperlukan.

---

# Slide 89 — Latihan Utility AI

Rancang Utility AI untuk enemy dengan aksi:

```text
Attack
Chase
Flee
Take Cover
Patrol
```

Tentukan:
1. Faktor apa saja yang memengaruhi setiap aksi?
2. Bagaimana rumus skor Attack?
3. Bagaimana rumus skor Flee?
4. Apa default action?
5. Bagaimana mencegah action switching terlalu cepat?

---

# Slide 90 — Penutup

## Materi Berikutnya

Topik berikutnya dalam rencana pembelajaran:

```text
Game AI Integration & Tactical AI
```

Materi lanjutan:
- integrasi perception,
- memory,
- decision,
- pathfinding,
- movement,
- tactical positioning,
- cover selection,
- koordinasi antar-agent.

Praktikum detail untuk materi ini akan dibuat terpisah:

```text
NPC dengan Behavior Tree / Utility-Based Decision
```

---

# Catatan Pembelajaran

Urutan pembelajaran yang disarankan:

```text
1. Review FSM dan masalah state explosion
2. Perkenalkan Behavior Tree sebagai alternatif
3. Jelaskan status Success, Failure, Running
4. Jelaskan selector sebagai prioritas
5. Jelaskan sequence sebagai syarat berurutan
6. Jelaskan decorator
7. Jelaskan blackboard
8. Bahas contoh enemy BT
9. Perkenalkan Utility AI
10. Jelaskan scoring action
11. Bandingkan FSM, BT, dan Utility AI
12. Tutup dengan gambaran praktikum
```

Penekanan penting:

> Behavior Tree membantu menyusun perilaku NPC secara modular, sedangkan Utility AI membantu NPC memilih aksi berdasarkan tingkat kepentingan pada kondisi saat itu.

