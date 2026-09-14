# MODUL PRAKTIKUM 13  
# MACHINE LEARNING FOR GAMES  
## Implementasi Q-Learning Grid Agent pada Unity 6

**Mata Kuliah:** Game Cerdas  
**Program Studi:** S1 Teknik Informatika  
**Semester:** 7  
**Tools:** Unity 6 + C#  
**Nama Project:** `GameAI_13_QLearningGrid`  
**Nama Scene:** `QLearningGridScene`

---

# 1. Tujuan Praktikum

Pada praktikum ini mahasiswa akan membuat sebuah **Grid World** sederhana di Unity yang berisi:

- Agent,
- Start,
- Goal,
- Cell normal,
- Obstacle,
- sistem reward,
- Q-table,
- algoritma Q-Learning,
- epsilon-greedy,
- training episode,
- visualisasi proses belajar,
- dan mode inference setelah training selesai.

Agent pada awalnya bergerak relatif acak. Setelah menjalani banyak episode, nilai pada Q-table berubah dan agent secara bertahap mempelajari kebijakan atau **policy** untuk mencapai Goal.

---

# 2. Capaian Pembelajaran Praktikum

Setelah menyelesaikan praktikum, mahasiswa diharapkan mampu:

1. Menjelaskan konsep **Reinforcement Learning**.
2. Menjelaskan hubungan antara **Agent** dan **Environment**.
3. Menentukan **state** suatu permasalahan sederhana.
4. Menentukan **action space** agent.
5. Merancang sistem **reward dan penalty**.
6. Mengimplementasikan **Q-table** menggunakan C#.
7. Mengimplementasikan algoritma **Q-Learning**.
8. Mengimplementasikan metode **epsilon-greedy**.
9. Menjelaskan perbedaan **exploration** dan **exploitation**.
10. Menjalankan training berbasis episode.
11. Mengamati perubahan perilaku agent selama training.
12. Menggunakan hasil training sebagai policy pada mode inference.
13. Menganalisis pengaruh parameter Q-Learning.
14. Membandingkan Q-Learning dengan algoritma pathfinding seperti A*.

---

# 3. Gambaran Praktikum

Environment yang dibuat berupa grid sederhana, misalnya:

```text
S . . . .
. # . # .
. # . . .
. . # . .
. . . . G
```

Keterangan:

```text
S = Start
G = Goal
# = Obstacle
. = Cell normal
```

Agent memiliki empat action:

```text
0 = Up
1 = Down
2 = Left
3 = Right
```

Reward yang digunakan:

```text
Goal             = +1.0
Menabrak obstacle = -1.0
Keluar grid       = -1.0
Setiap langkah    = -0.01
```

Dengan reward tersebut, agent diharapkan belajar:

```text
Hindari obstacle
        +
Hindari langkah tidak perlu
        +
Temukan Goal
        ↓
Jalur relatif pendek menuju Goal
```

---

# 4. Mengapa Memilih Q-Learning Grid World?

Untuk Pertemuan 13, **Q-Learning Grid World adalah pilihan praktikum terbaik**.

Alasannya:

- implementasinya relatif sederhana,
- tidak membutuhkan Python,
- tidak membutuhkan training framework eksternal,
- seluruh proses dapat dilakukan menggunakan C#,
- Q-table dapat dilihat secara langsung,
- state dan action mudah dipahami,
- perubahan policy mudah divisualisasikan,
- reward design dapat dieksperimenkan,
- sangat cocok untuk pengantar Reinforcement Learning.

Unity ML-Agents tetap diperkenalkan pada materi, tetapi implementasi ML-Agents akan lebih tepat digunakan pada praktikum Pertemuan 14.

---

# 5. Konsep Dasar Sebelum Praktikum

## 5.1 Reinforcement Learning

**Reinforcement Learning (RL)** adalah metode pembelajaran di mana Agent belajar melalui interaksi dengan Environment.

Alurnya:

```text
Agent mengamati State
        ↓
Agent memilih Action
        ↓
Environment berubah
        ↓
Agent menerima Reward
        ↓
Agent mengamati State berikutnya
        ↓
Agent memperbarui pengetahuan
```

Secara sederhana:

```text
State → Action → Reward → Next State
```

---

# 6. Istilah Penting Reinforcement Learning

## 6.1 Agent

**Agent** adalah objek yang belajar mengambil keputusan.

Pada praktikum:

```text
Agent = GameObject berbentuk Capsule/Cube
```

Agent akan berpindah dari satu cell menuju cell lainnya.

---

## 6.2 Environment

**Environment** adalah dunia tempat agent melakukan interaksi.

Pada praktikum:

```text
Environment = Grid World
```

Environment menentukan:

- cell yang tersedia,
- obstacle,
- posisi start,
- posisi goal,
- reward,
- hasil action.

---

## 6.3 State

**State** adalah representasi keadaan agent.

Dalam praktikum ini:

```text
State = posisi cell agent
```

Jika grid berukuran:

```text
5 × 5
```

maka terdapat maksimal:

```text
25 state
```

Misalnya:

```text
(0,0) → State 0
(1,0) → State 1
(2,0) → State 2
...
```

---

## 6.4 Action

**Action** adalah keputusan yang dapat dilakukan agent.

Action:

```text
Up
Down
Left
Right
```

Jumlah action:

```text
4
```

---

## 6.5 Reward

Reward adalah feedback numerik kepada agent.

Contoh:

```text
Goal              +1.00
Obstacle          -1.00
Keluar grid       -1.00
Langkah biasa     -0.01
```

Reward positif menunjukkan hasil yang diinginkan.

Penalty atau reward negatif menunjukkan hasil yang tidak diinginkan.

---

## 6.6 Episode

**Episode** adalah satu percobaan lengkap.

Contoh:

```text
Episode dimulai
↓
Agent ditempatkan di Start
↓
Agent bergerak
↓
Agent mencapai Goal / gagal / step maksimum tercapai
↓
Episode selesai
↓
Environment di-reset
↓
Episode berikutnya dimulai
```

---

## 6.7 Policy

**Policy** adalah strategi agent dalam memilih action.

Setelah Q-Learning selesai, policy sederhana adalah:

```text
Pada state tertentu:
pilih action dengan Q-value terbesar
```

---

# 7. Q-Table

Q-Learning menyimpan:

```text
Q(State, Action)
```

Misalnya:

| State | Up | Down | Left | Right |
|---|---:|---:|---:|---:|
| S0 | 0.20 | -0.10 | -0.30 | 0.60 |
| S1 | 0.10 | 0.30 | 0.00 | 0.70 |
| S2 | -0.10 | 0.40 | 0.20 | 0.10 |

Jika berada pada `S0`:

```text
Up    = 0.20
Down  = -0.10
Left  = -0.30
Right = 0.60
```

Maka action terbaik:

```text
Right
```

---

# 8. Formula Q-Learning

Formula dasarnya:

```text
Q(s,a) ← Q(s,a) + α [r + γ max Q(s',a') - Q(s,a)]
```

Keterangan:

```text
s  = state sekarang
a  = action
r  = reward
s' = state berikutnya
α  = learning rate
γ  = discount factor
```

---

# 9. Makna Formula Secara Intuitif

Tidak perlu memandang formula Q-Learning hanya sebagai rumus matematika.

Intinya adalah:

```text
Nilai lama
+
koreksi berdasarkan
reward sekarang
+
kemungkinan reward masa depan
```

Jika suatu action memberikan hasil yang bagus:

```text
Q-value meningkat
```

Jika hasilnya buruk:

```text
Q-value menurun
```

Setelah dilakukan berulang kali:

```text
Q-table
    ↓
menyimpan pengalaman agent
    ↓
membentuk policy
```

---

# 10. Learning Rate

Parameter:

```text
alpha / α
```

Menentukan seberapa besar informasi baru memengaruhi nilai lama.

Contoh:

```text
learningRate = 0.2
```

Interpretasi:

- nilai kecil → belajar lambat tetapi stabil,
- nilai besar → belajar cepat tetapi dapat berubah drastis.

Rekomendasi praktikum:

```text
0.1 – 0.5
```

Gunakan:

```text
0.2
```

sebagai nilai awal.

---

# 11. Discount Factor

Parameter:

```text
gamma / γ
```

Mengatur pentingnya reward masa depan.

Gunakan:

```text
discountFactor = 0.9
```

Nilai tinggi berarti agent mempertimbangkan konsekuensi jangka panjang.

---

# 12. Exploration dan Exploitation

## Exploration

Agent mencoba action yang belum tentu terbaik.

Tujuan:

```text
mencari pengalaman baru
```

---

## Exploitation

Agent menggunakan pengetahuan yang sudah dipelajari.

Tujuan:

```text
memilih action dengan Q-value terbesar
```

Kedua proses perlu diseimbangkan.

---

# 13. Epsilon-Greedy

Kita menggunakan strategi:

```text
epsilon-greedy
```

Misalnya:

```text
epsilon = 0.30
```

Artinya:

```text
30% → memilih action random
70% → memilih action terbaik
```

Pada training:

```text
epsilon
↓
secara bertahap dikurangi
```

Contoh:

```text
0.80
0.79
0.78
...
0.10
```

Agent menjadi semakin sedikit melakukan eksplorasi setelah memiliki cukup pengalaman.

---

# 14. Struktur Project Unity

Buat project:

```text
GameAI_13_QLearningGrid
```

Gunakan template:

```text
Universal 3D
```

atau:

```text
3D Core
```

Keduanya dapat digunakan.

Untuk praktikum sederhana, **3D Core sudah mencukupi**.

---

# 15. Struktur Folder

Pada `Assets`, buat:

```text
Assets/
│
├── Scenes/
│   └── QLearningGridScene.unity
│
├── Scripts/
│   ├── GridCell.cs
│   ├── GridWorld.cs
│   ├── QTable.cs
│   ├── QLearningAgent.cs
│   ├── TrainingManager.cs
│   └── QLearningDebugUI.cs
│
├── Materials/
│   ├── NormalCell.mat
│   ├── StartCell.mat
│   ├── GoalCell.mat
│   ├── ObstacleCell.mat
│   └── Agent.mat
│
└── Prefabs/
    └── GridCell.prefab
```

---

# 16. Istilah Teknis Unity yang Digunakan

## 16.1 Scene

**Scene** adalah satu dunia atau level Unity.

Dalam praktikum:

```text
QLearningGridScene
```

menyimpan semua GameObject.

---

## 16.2 GameObject

GameObject adalah objek dasar di Unity.

Contoh:

```text
Agent
GridWorld
Goal
Main Camera
Directional Light
Canvas
```

---

## 16.3 Component

Component memberi fungsi kepada GameObject.

Contoh:

```text
Transform
Mesh Renderer
Collider
Script
Camera
```

---

## 16.4 Transform

`Transform` menentukan:

```text
Position
Rotation
Scale
```

Semua GameObject Unity memiliki Transform.

Dalam praktikum, Transform terutama digunakan untuk memindahkan agent ke cell tertentu.

---

## 16.5 MonoBehaviour

Script Unity biasanya diturunkan dari:

```csharp
MonoBehaviour
```

Contoh:

```csharp
public class GridWorld : MonoBehaviour
```

Dengan MonoBehaviour, script dapat:

- dipasang sebagai Component,
- menggunakan `Start()`,
- menggunakan `Update()`,
- menjalankan Coroutine,
- mengakses Inspector.

---

## 16.6 SerializeField

Contoh:

```csharp
[SerializeField] private int width = 5;
```

`SerializeField` membuat private field tetap dapat muncul di Inspector.

Keuntungannya:

```text
encapsulation tetap terjaga
+
parameter dapat diubah dari Inspector
```

---

## 16.7 Inspector

Inspector adalah panel Unity untuk melihat dan mengubah Component serta parameter suatu GameObject.

Parameter Q-Learning akan dibuat agar dapat diubah melalui Inspector.

---

## 16.8 Prefab

Prefab adalah template GameObject yang dapat digunakan berulang.

Kita dapat membuat:

```text
GridCell.prefab
```

kemudian menghasilkan seluruh grid dari prefab yang sama.

---

## 16.9 Coroutine

Coroutine memungkinkan fungsi berjalan secara bertahap selama beberapa frame.

Contoh:

```csharp
IEnumerator TrainingLoop()
```

Coroutine cocok digunakan agar pergerakan agent dapat divisualisasikan tanpa membuat Unity Editor membeku.

---

## 16.10 IEnumerator

Method Coroutine menggunakan tipe:

```csharp
IEnumerator
```

dan dapat berhenti sementara melalui:

```csharp
yield return new WaitForSeconds(...)
```

---

## 16.11 Vector2Int

`Vector2Int` menyimpan dua bilangan integer.

Contoh:

```csharp
Vector2Int position = new Vector2Int(2, 3);
```

Sangat cocok untuk koordinat grid:

```text
x = 2
y = 3
```

---

## 16.12 Dictionary

`Dictionary<TKey,TValue>` menyimpan pasangan:

```text
key → value
```

Kita dapat menggunakannya untuk mencari cell berdasarkan koordinat.

---

## 16.13 Random.value

Unity menyediakan:

```csharp
Random.value
```

yang menghasilkan angka antara:

```text
0 sampai 1
```

Digunakan untuk epsilon-greedy.

---

# 17. Membuat Scene

Buat scene baru:

```text
File
→ New Scene
```

Simpan:

```text
Assets/Scenes/QLearningGridScene.unity
```

---

# 18. Membuat GridCell

Buat:

```text
GameObject
→ 3D Object
→ Cube
```

Rename:

```text
GridCell
```

Set Scale:

```text
X = 0.95
Y = 0.10
Z = 0.95
```

Tujuannya agar terdapat sedikit jarak antar-cell.

Drag ke folder:

```text
Assets/Prefabs/
```

untuk membuat:

```text
GridCell.prefab
```

Kemudian hapus instance GridCell dari scene.

---

# 19. Script GridCell.cs

Buat:

```text
Assets/Scripts/GridCell.cs
```

Isi:

```csharp
using UnityEngine;

public class GridCell : MonoBehaviour
{
    public enum CellType
    {
        Normal,
        Start,
        Goal,
        Obstacle
    }

    [SerializeField] private Vector2Int gridPosition;
    [SerializeField] private CellType cellType;

    public Vector2Int GridPosition => gridPosition;
    public CellType Type => cellType;

    public void Initialize(Vector2Int position, CellType type)
    {
        gridPosition = position;
        cellType = type;
        name = $"Cell_{position.x}_{position.y}_{type}";
    }

    public void SetType(CellType newType)
    {
        cellType = newType;
    }

    public bool IsObstacle()
    {
        return cellType == CellType.Obstacle;
    }

    public bool IsGoal()
    {
        return cellType == CellType.Goal;
    }
}
```

---

# 20. Penjelasan GridCell

## enum

```csharp
public enum CellType
```

`enum` menyediakan daftar nilai terbatas.

Dalam kasus ini:

```text
Normal
Start
Goal
Obstacle
```

Lebih aman dibanding menggunakan string seperti:

```text
"normal"
"goal"
"obstacle"
```

karena risiko typo lebih kecil.

---

# 21. Membuat GridWorld

Buat Empty GameObject:

```text
GameObject
→ Create Empty
```

Rename:

```text
GridWorld
```

Reset Transform:

```text
Position = 0,0,0
Rotation = 0,0,0
Scale    = 1,1,1
```

---

# 22. Script GridWorld.cs

Buat:

```text
Assets/Scripts/GridWorld.cs
```

Isi:

```csharp
using System.Collections.Generic;
using UnityEngine;

public class GridWorld : MonoBehaviour
{
    [Header("Grid Settings")]
    [SerializeField] private int width = 5;
    [SerializeField] private int height = 5;
    [SerializeField] private float cellSize = 1.2f;

    [Header("References")]
    [SerializeField] private GridCell cellPrefab;

    [Header("Special Positions")]
    [SerializeField] private Vector2Int startPosition = new Vector2Int(0, 0);
    [SerializeField] private Vector2Int goalPosition = new Vector2Int(4, 4);

    [Header("Obstacles")]
    [SerializeField] private List<Vector2Int> obstaclePositions =
        new List<Vector2Int>();

    private Dictionary<Vector2Int, GridCell> cells =
        new Dictionary<Vector2Int, GridCell>();

    public int Width => width;
    public int Height => height;
    public Vector2Int StartPosition => startPosition;
    public Vector2Int GoalPosition => goalPosition;

    private void Awake()
    {
        GenerateGrid();
    }

    private void GenerateGrid()
    {
        cells.Clear();

        for (int y = 0; y < height; y++)
        {
            for (int x = 0; x < width; x++)
            {
                Vector2Int gridPosition = new Vector2Int(x, y);

                GridCell.CellType type = GridCell.CellType.Normal;

                if (gridPosition == startPosition)
                {
                    type = GridCell.CellType.Start;
                }
                else if (gridPosition == goalPosition)
                {
                    type = GridCell.CellType.Goal;
                }
                else if (obstaclePositions.Contains(gridPosition))
                {
                    type = GridCell.CellType.Obstacle;
                }

                Vector3 worldPosition = GridToWorld(gridPosition);

                GridCell cell = Instantiate(
                    cellPrefab,
                    worldPosition,
                    Quaternion.identity,
                    transform
                );

                cell.Initialize(gridPosition, type);
                cells.Add(gridPosition, cell);
            }
        }
    }

    public Vector3 GridToWorld(Vector2Int position)
    {
        return new Vector3(
            position.x * cellSize,
            0f,
            position.y * cellSize
        );
    }

    public bool IsInsideGrid(Vector2Int position)
    {
        return position.x >= 0 &&
               position.x < width &&
               position.y >= 0 &&
               position.y < height;
    }

    public bool IsObstacle(Vector2Int position)
    {
        if (!cells.ContainsKey(position))
            return false;

        return cells[position].IsObstacle();
    }

    public bool IsGoal(Vector2Int position)
    {
        return position == goalPosition;
    }

    public int PositionToState(Vector2Int position)
    {
        return position.y * width + position.x;
    }

    public int StateCount()
    {
        return width * height;
    }
}
```

---

# 23. Mengatur GridWorld di Inspector

Pasang:

```text
GridWorld.cs
```

pada GameObject `GridWorld`.

Set:

```text
Width       = 5
Height      = 5
Cell Size   = 1.2

Start Position
X = 0
Y = 0

Goal Position
X = 4
Y = 4
```

Drag:

```text
GridCell.prefab
```

ke:

```text
Cell Prefab
```

---

# 24. Menambahkan Obstacle

Pada Inspector:

```text
Obstacle Positions
Size = 4
```

Contoh:

```text
Element 0 = (1,1)
Element 1 = (1,2)
Element 2 = (2,3)
Element 3 = (3,1)
```

Pastikan:

```text
Start != Obstacle
Goal  != Obstacle
```

---

# 25. Memberi Warna Cell

Untuk tahap pertama, semua cell dapat menggunakan material yang sama.

Setelah algoritma berfungsi, material dapat diperluas menjadi:

```text
Normal   = abu-abu
Start    = biru
Goal     = hijau
Obstacle = merah/hitam
```

Visualisasi bukan bagian inti Q-Learning, tetapi sangat membantu proses belajar.

---

# 26. Membuat QTable.cs

Buat:

```text
Assets/Scripts/QTable.cs
```

Script ini **tidak perlu** diturunkan dari MonoBehaviour karena hanya berfungsi sebagai class data.

```csharp
using UnityEngine;

public class QTable
{
    private float[,] values;

    private int stateCount;
    private int actionCount;

    public QTable(int states, int actions)
    {
        stateCount = states;
        actionCount = actions;

        values = new float[stateCount, actionCount];
    }

    public float GetValue(int state, int action)
    {
        return values[state, action];
    }

    public void SetValue(int state, int action, float value)
    {
        values[state, action] = value;
    }

    public float GetMaxValue(int state)
    {
        float maxValue = values[state, 0];

        for (int action = 1; action < actionCount; action++)
        {
            if (values[state, action] > maxValue)
            {
                maxValue = values[state, action];
            }
        }

        return maxValue;
    }

    public int GetBestAction(int state)
    {
        int bestAction = 0;
        float bestValue = values[state, 0];

        for (int action = 1; action < actionCount; action++)
        {
            if (values[state, action] > bestValue)
            {
                bestValue = values[state, action];
                bestAction = action;
            }
        }

        return bestAction;
    }

    public void Reset()
    {
        values = new float[stateCount, actionCount];
    }

    public void PrintState(int state)
    {
        string output = $"State {state}: ";

        for (int action = 0; action < actionCount; action++)
        {
            output += $"A{action}={values[state, action]:F3} ";
        }

        Debug.Log(output);
    }
}
```

---

# 27. Mengapa QTable Bukan MonoBehaviour?

Class:

```csharp
QTable
```

tidak membutuhkan:

- GameObject,
- Transform,
- Update,
- Inspector,
- Coroutine.

Karena itu lebih tepat dibuat sebagai class C# biasa.

Ini juga memperkenalkan prinsip:

```text
Logic tidak harus selalu menjadi MonoBehaviour.
```

---

# 28. Membuat Agent

Buat:

```text
GameObject
→ 3D Object
→ Capsule
```

Rename:

```text
Agent
```

Set Scale, misalnya:

```text
X = 0.45
Y = 0.45
Z = 0.45
```

Posisi sementara:

```text
0, 0.5, 0
```

Tambahkan material agar mudah terlihat.

---

# 29. Mendefinisikan Action

Kita gunakan enum:

```csharp
public enum AgentAction
{
    Up = 0,
    Down = 1,
    Left = 2,
    Right = 3
}
```

Mapping:

```text
Up    → z + 1
Down  → z - 1
Left  → x - 1
Right → x + 1
```

---

# 30. Script QLearningAgent.cs

Buat:

```text
Assets/Scripts/QLearningAgent.cs
```

Isi:

```csharp
using UnityEngine;

public class QLearningAgent : MonoBehaviour
{
    public enum AgentAction
    {
        Up = 0,
        Down = 1,
        Left = 2,
        Right = 3
    }

    [Header("References")]
    [SerializeField] private GridWorld gridWorld;

    [Header("Visual")]
    [SerializeField] private float agentHeight = 0.6f;

    private Vector2Int currentPosition;

    public Vector2Int CurrentPosition => currentPosition;

    public void ResetAgent()
    {
        currentPosition = gridWorld.StartPosition;
        UpdateWorldPosition();
    }

    public Vector2Int GetNextPosition(AgentAction action)
    {
        Vector2Int direction = Vector2Int.zero;

        switch (action)
        {
            case AgentAction.Up:
                direction = Vector2Int.up;
                break;

            case AgentAction.Down:
                direction = Vector2Int.down;
                break;

            case AgentAction.Left:
                direction = Vector2Int.left;
                break;

            case AgentAction.Right:
                direction = Vector2Int.right;
                break;
        }

        return currentPosition + direction;
    }

    public void MoveTo(Vector2Int position)
    {
        currentPosition = position;
        UpdateWorldPosition();
    }

    private void UpdateWorldPosition()
    {
        Vector3 worldPosition =
            gridWorld.GridToWorld(currentPosition);

        worldPosition.y = agentHeight;

        transform.position = worldPosition;
    }
}
```

---

# 31. Fungsi QLearningAgent

Script ini mempunyai tanggung jawab sederhana:

```text
menyimpan posisi agent
menghitung posisi berdasarkan action
memindahkan agent
reset ke Start
```

Perhatikan bahwa script ini **belum melakukan learning**.

Learning nantinya ditempatkan pada:

```text
TrainingManager
```

Pembagian tanggung jawab seperti ini membuat kode lebih mudah dipahami.

---

# 32. Menghubungkan GridWorld

Pada GameObject `Agent`:

```text
Add Component
→ QLearningAgent
```

Drag:

```text
GridWorld
```

ke field:

```text
Grid World
```

Set:

```text
Agent Height = 0.6
```

---

# 33. Membuat TrainingManager

Buat Empty GameObject:

```text
GameObject
→ Create Empty
```

Rename:

```text
TrainingManager
```

---

# 34. Script TrainingManager.cs

Buat:

```text
Assets/Scripts/TrainingManager.cs
```

Isi:

```csharp
using System.Collections;
using UnityEngine;

public class TrainingManager : MonoBehaviour
{
    [Header("References")]
    [SerializeField] private GridWorld gridWorld;
    [SerializeField] private QLearningAgent agent;

    [Header("Q-Learning Parameters")]
    [Range(0f, 1f)]
    [SerializeField] private float learningRate = 0.2f;

    [Range(0f, 1f)]
    [SerializeField] private float discountFactor = 0.9f;

    [Range(0f, 1f)]
    [SerializeField] private float epsilon = 0.8f;

    [Range(0f, 1f)]
    [SerializeField] private float epsilonDecay = 0.995f;

    [Range(0f, 1f)]
    [SerializeField] private float minEpsilon = 0.05f;

    [Header("Reward")]
    [SerializeField] private float goalReward = 1.0f;
    [SerializeField] private float obstaclePenalty = -1.0f;
    [SerializeField] private float outOfBoundsPenalty = -1.0f;
    [SerializeField] private float stepPenalty = -0.01f;

    [Header("Training")]
    [SerializeField] private int totalEpisodes = 500;
    [SerializeField] private int maxStepsPerEpisode = 100;
    [SerializeField] private float stepDelay = 0.02f;
    [SerializeField] private bool trainOnStart = true;

    private const int ACTION_COUNT = 4;

    private QTable qTable;

    private int currentEpisode;
    private int currentStep;
    private float episodeReward;

    public int CurrentEpisode => currentEpisode;
    public int CurrentStep => currentStep;
    public float EpisodeReward => episodeReward;
    public float CurrentEpsilon => epsilon;

    private void Start()
    {
        qTable = new QTable(
            gridWorld.StateCount(),
            ACTION_COUNT
        );

        agent.ResetAgent();

        if (trainOnStart)
        {
            StartCoroutine(TrainingLoop());
        }
    }

    private IEnumerator TrainingLoop()
    {
        for (currentEpisode = 1;
             currentEpisode <= totalEpisodes;
             currentEpisode++)
        {
            yield return StartCoroutine(RunEpisode());

            epsilon = Mathf.Max(
                minEpsilon,
                epsilon * epsilonDecay
            );
        }

        Debug.Log("Training selesai.");

        yield return StartCoroutine(RunInferenceEpisode());
    }

    private IEnumerator RunEpisode()
    {
        agent.ResetAgent();

        currentStep = 0;
        episodeReward = 0f;

        while (currentStep < maxStepsPerEpisode)
        {
            currentStep++;

            int currentState =
                gridWorld.PositionToState(
                    agent.CurrentPosition
                );

            int action = ChooseAction(currentState);

            QLearningAgent.AgentAction selectedAction =
                (QLearningAgent.AgentAction)action;

            Vector2Int nextPosition =
                agent.GetNextPosition(selectedAction);

            float reward;
            bool episodeDone;

            EvaluateAction(
                nextPosition,
                out reward,
                out episodeDone
            );

            int nextState = currentState;

            if (gridWorld.IsInsideGrid(nextPosition) &&
                !gridWorld.IsObstacle(nextPosition))
            {
                agent.MoveTo(nextPosition);

                nextState =
                    gridWorld.PositionToState(
                        agent.CurrentPosition
                    );
            }

            UpdateQValue(
                currentState,
                action,
                reward,
                nextState,
                episodeDone
            );

            episodeReward += reward;

            if (stepDelay > 0f)
            {
                yield return new WaitForSeconds(stepDelay);
            }
            else
            {
                yield return null;
            }

            if (episodeDone)
            {
                break;
            }
        }

        Debug.Log(
            $"Episode {currentEpisode} | " +
            $"Steps: {currentStep} | " +
            $"Reward: {episodeReward:F3} | " +
            $"Epsilon: {epsilon:F3}"
        );
    }

    private int ChooseAction(int state)
    {
        if (Random.value < epsilon)
        {
            return Random.Range(0, ACTION_COUNT);
        }

        return qTable.GetBestAction(state);
    }

    private void EvaluateAction(
        Vector2Int nextPosition,
        out float reward,
        out bool done)
    {
        done = false;

        if (!gridWorld.IsInsideGrid(nextPosition))
        {
            reward = outOfBoundsPenalty;
            done = true;
            return;
        }

        if (gridWorld.IsObstacle(nextPosition))
        {
            reward = obstaclePenalty;
            done = true;
            return;
        }

        if (gridWorld.IsGoal(nextPosition))
        {
            reward = goalReward;
            done = true;
            return;
        }

        reward = stepPenalty;
    }

    private void UpdateQValue(
        int state,
        int action,
        float reward,
        int nextState,
        bool terminal)
    {
        float oldQ =
            qTable.GetValue(state, action);

        float futureQ =
            terminal
                ? 0f
                : qTable.GetMaxValue(nextState);

        float target =
            reward +
            discountFactor * futureQ;

        float newQ =
            oldQ +
            learningRate * (target - oldQ);

        qTable.SetValue(
            state,
            action,
            newQ
        );
    }

    private IEnumerator RunInferenceEpisode()
    {
        Debug.Log("Memulai inference...");

        agent.ResetAgent();

        for (int step = 0;
             step < maxStepsPerEpisode;
             step++)
        {
            int state =
                gridWorld.PositionToState(
                    agent.CurrentPosition
                );

            int action =
                qTable.GetBestAction(state);

            QLearningAgent.AgentAction selectedAction =
                (QLearningAgent.AgentAction)action;

            Vector2Int nextPosition =
                agent.GetNextPosition(selectedAction);

            if (!gridWorld.IsInsideGrid(nextPosition) ||
                gridWorld.IsObstacle(nextPosition))
            {
                Debug.LogWarning(
                    "Inference memilih posisi tidak valid."
                );

                yield break;
            }

            agent.MoveTo(nextPosition);

            yield return new WaitForSeconds(0.25f);

            if (gridWorld.IsGoal(nextPosition))
            {
                Debug.Log(
                    $"Inference mencapai goal dalam {step + 1} langkah."
                );

                yield break;
            }
        }

        Debug.LogWarning(
            "Inference tidak mencapai goal."
        );
    }

    public void PrintCurrentStateQValues()
    {
        int state =
            gridWorld.PositionToState(
                agent.CurrentPosition
            );

        qTable.PrintState(state);
    }
}
```

---

# 35. Mengatur TrainingManager di Inspector

Pasang script:

```text
TrainingManager.cs
```

pada GameObject:

```text
TrainingManager
```

Set references:

```text
Grid World → GridWorld
Agent      → Agent
```

Parameter awal yang direkomendasikan:

```text
Learning Rate          = 0.20
Discount Factor        = 0.90

Epsilon                = 0.80
Epsilon Decay          = 0.995
Min Epsilon            = 0.05

Goal Reward            = 1.00
Obstacle Penalty       = -1.00
Out Of Bounds Penalty  = -1.00
Step Penalty           = -0.01

Total Episodes         = 500
Max Steps Per Episode  = 100
Step Delay             = 0.02
Train On Start         = true
```

---

# 36. Memahami ChooseAction()

Bagian:

```csharp
if (Random.value < epsilon)
{
    return Random.Range(0, ACTION_COUNT);
}
```

berarti:

```text
Exploration
```

Sedangkan:

```csharp
return qTable.GetBestAction(state);
```

berarti:

```text
Exploitation
```

Inilah implementasi epsilon-greedy.

---

# 37. Memahami UpdateQValue()

Kode:

```csharp
float target =
    reward +
    discountFactor * futureQ;
```

merepresentasikan:

```text
r + γ max Q(s',a')
```

Kemudian:

```csharp
float newQ =
    oldQ +
    learningRate * (target - oldQ);
```

merepresentasikan:

```text
Q(s,a) + α[target - Q(s,a)]
```

Dengan demikian kode tersebut merupakan implementasi langsung formula Q-Learning.

---

# 38. Terminal State

Jika:

```text
Goal
Obstacle
Out of Bounds
```

terjadi, episode selesai.

Pada terminal state:

```csharp
futureQ = 0f;
```

karena tidak ada lagi reward masa depan setelah episode selesai.

---

# 39. Menempatkan Kamera

Contoh untuk grid 5×5:

```text
Main Camera Position:
X = 2.4
Y = 8
Z = -3
```

Rotation:

```text
X = 55
Y = 0
Z = 0
```

Atur hingga seluruh grid terlihat.

Alternatif yang lebih mudah adalah kamera top-down.

Contoh:

```text
Position:
X = 2.4
Y = 9
Z = 2.4

Rotation:
X = 90
Y = 0
Z = 0
```

---

# 40. Menjalankan Praktikum Pertama Kali

Tekan:

```text
Play
```

Yang seharusnya terjadi:

```text
Episode 1
Agent bergerak cukup acak
↓
Episode reset
↓
Episode 2
↓
...
↓
Q-value berubah
↓
Epsilon semakin kecil
↓
Training selesai
↓
Inference dijalankan
```

---

# 41. Apa yang Perlu Diamati?

Pada awal training:

```text
Agent bergerak acak.
Agent sering salah.
Agent menabrak obstacle.
Agent keluar grid.
```

Setelah banyak episode:

```text
Agent lebih sering memilih arah menuju Goal.
Kesalahan berkurang.
Policy menjadi lebih stabil.
```

---

# 42. Console Unity

Buka:

```text
Window
→ General
→ Console
```

Contoh output:

```text
Episode 1 | Steps: 4 | Reward: -1.030 | Epsilon: 0.800

Episode 20 | Steps: 18 | Reward: 0.830 | Epsilon: 0.727

Episode 100 | Steps: 9 | Reward: 0.920 | Epsilon: 0.487

Episode 500 | Steps: 8 | Reward: 0.930 | Epsilon: 0.066

Training selesai.

Inference mencapai goal dalam 8 langkah.
```

Nilainya dapat berbeda karena proses Q-Learning bersifat stokastik.

---

# 43. Mengapa Hasil Setiap Training Bisa Berbeda?

Karena terdapat:

```text
Random action
```

pada proses exploration.

Akibatnya:

```text
urutan pengalaman
dan
nilai Q
```

dapat sedikit berbeda setiap training.

Ini normal pada Reinforcement Learning.

---

# 44. Membuat Debug UI

Agar praktikum lebih mudah diamati, tambahkan UI.

Buat:

```text
GameObject
→ UI
→ Canvas
```

Kemudian tambahkan TextMeshPro Text.

Jika Unity meminta:

```text
Import TMP Essentials
```

pilih:

```text
Import TMP Essentials
```

Rename Text:

```text
TrainingInfoText
```

---

# 45. Istilah TextMeshPro

**TextMeshPro/TMP** adalah sistem teks Unity dengan kualitas rendering dan pengaturan yang lebih baik dibanding sistem teks lama.

Namespace yang digunakan:

```csharp
using TMPro;
```

---

# 46. Script QLearningDebugUI.cs

Buat:

```text
Assets/Scripts/QLearningDebugUI.cs
```

Isi:

```csharp
using TMPro;
using UnityEngine;

public class QLearningDebugUI : MonoBehaviour
{
    [SerializeField] private TrainingManager trainingManager;
    [SerializeField] private QLearningAgent agent;
    [SerializeField] private TMP_Text infoText;

    private void Update()
    {
        if (trainingManager == null ||
            agent == null ||
            infoText == null)
        {
            return;
        }

        infoText.text =
            $"Q-LEARNING TRAINING\n" +
            $"Episode : {trainingManager.CurrentEpisode}\n" +
            $"Step    : {trainingManager.CurrentStep}\n" +
            $"Reward  : {trainingManager.EpisodeReward:F3}\n" +
            $"Epsilon : {trainingManager.CurrentEpsilon:F3}\n" +
            $"Agent   : {agent.CurrentPosition}";
    }
}
```

---

# 47. Menyiapkan Debug UI

Pasang:

```text
QLearningDebugUI.cs
```

ke Canvas atau Empty GameObject:

```text
DebugUI
```

Drag references:

```text
Training Manager
Agent
Info Text
```

Sekarang informasi training akan terlihat langsung di Game View.

---

# 48. Hasil Debug UI

Contoh:

```text
Q-LEARNING TRAINING

Episode : 128
Step    : 7
Reward  : -0.060
Epsilon : 0.422
Agent   : (3, 2)
```

Visualisasi semacam ini sangat membantu dalam praktikum Reinforcement Learning.

---

# 49. Training Cepat vs Training Visual

Ada dua kebutuhan berbeda.

## Training Visual

Gunakan:

```text
Step Delay = 0.05
```

Tujuan:

```text
mahasiswa dapat melihat agent bergerak
```

---

## Training Cepat

Gunakan:

```text
Step Delay = 0
```

Training berlangsung jauh lebih cepat.

Namun script saat ini tetap menjalankan:

```csharp
yield return null;
```

sehingga training tidak langsung mengunci Editor dalam satu frame.

---

# 50. Mode Training dan Inference

## Training

Pada training:

```text
epsilon > 0
Q-table diperbarui
Agent exploration + exploitation
```

---

## Inference

Pada inference:

```text
epsilon tidak digunakan
Q-table tidak diperbarui
Agent selalu memilih best action
```

Kode:

```csharp
qTable.GetBestAction(state);
```

digunakan untuk memilih policy yang telah dipelajari.

---

# 51. Perbedaan Training dan Inference

| Aspek | Training | Inference |
|---|---|---|
| Tujuan | Belajar | Menggunakan hasil belajar |
| Exploration | Ya | Tidak |
| Q-table diubah | Ya | Tidak |
| Agent dapat acak | Ya | Tidak |
| Digunakan saat belajar | Ya | Tidak |
| Digunakan pada behavior final | Tidak selalu | Ya |

---

# 52. Eksperimen 1 — Mengubah Epsilon

Coba:

```text
epsilon = 0.0
```

Apa yang terjadi?

Agent hampir tidak melakukan exploration.

Masalah:

```text
semua Q-value awal = 0
```

Agent dapat terus memilih action pertama jika tidak memperoleh pengalaman yang cukup.

---

Kemudian coba:

```text
epsilon = 1.0
```

Agent selalu melakukan exploration di awal.

Bandingkan hasilnya.

---

# 53. Eksperimen 2 — Epsilon Decay

Coba:

```text
epsilonDecay = 1.0
```

Artinya epsilon tidak berkurang.

Bandingkan dengan:

```text
epsilonDecay = 0.99
```

atau:

```text
0.995
```

Pertanyaan:

> Mengapa exploration sebaiknya dikurangi setelah agent memiliki cukup pengalaman?

---

# 54. Eksperimen 3 — Step Penalty

Coba:

```text
stepPenalty = 0
```

Kemudian:

```text
stepPenalty = -0.01
```

Lalu:

```text
stepPenalty = -0.1
```

Analisis pengaruhnya terhadap panjang jalur.

Step penalty kecil mendorong agent mencapai goal menggunakan lebih sedikit langkah.

---

# 55. Eksperimen 4 — Learning Rate

Bandingkan:

```text
0.05
0.2
0.5
0.9
```

Perhatikan:

- kecepatan perubahan Q-value,
- stabilitas policy,
- jumlah episode hingga agent terlihat konsisten.

---

# 56. Eksperimen 5 — Discount Factor

Bandingkan:

```text
gamma = 0.1
gamma = 0.5
gamma = 0.9
gamma = 0.99
```

Pada Goal yang membutuhkan beberapa langkah, nilai gamma tinggi umumnya membuat reward Goal lebih efektif menyebar ke state-state sebelumnya.

---

# 57. Eksperimen 6 — Mengubah Obstacle

Tambahkan obstacle baru.

Contoh:

```text
(1,0)
(1,1)
(1,2)
(3,2)
(3,3)
```

Pastikan Goal masih memiliki jalur yang dapat dicapai.

Jalankan training kembali.

Perhatikan apakah policy berubah.

---

# 58. Eksperimen 7 — Grid Lebih Besar

Ubah:

```text
Width  = 10
Height = 10
```

Goal:

```text
(9,9)
```

Jumlah state menjadi:

```text
10 × 10 = 100 state
```

Bandingkan dengan grid 5×5:

```text
25 state
```

Pertanyaan:

> Apakah jumlah episode yang sama masih cukup?

Eksperimen ini menunjukkan awal dari **state-space problem**.

---

# 59. State-Space Problem

Jika jumlah state bertambah besar:

```text
jumlah isi Q-table juga bertambah
```

Misalnya:

```text
Grid 5 × 5
25 state × 4 action
= 100 Q-value
```

Sedangkan:

```text
Grid 100 × 100
10.000 state × 4 action
= 40.000 Q-value
```

Jika state juga mencakup:

```text
health
enemy position
ammo
distance
status
```

jumlah kemungkinan state dapat meningkat sangat besar.

Inilah salah satu alasan Q-table klasik kurang cocok untuk game yang kompleks.

---

# 60. Discretization

Q-Learning klasik biasanya membutuhkan state diskrit.

Misalnya distance sebenarnya:

```text
2.1
2.2
2.3
...
```

Dapat dikategorikan menjadi:

```text
Near
Medium
Far
```

Contoh:

```csharp
if (distance < 3f)
    state = Near;
else if (distance < 8f)
    state = Medium;
else
    state = Far;
```

Proses tersebut disebut:

```text
Discretization
```

---

# 61. Reward Design

Reward merupakan bagian kritis RL.

Reward praktikum:

```text
Goal            +1.0
Obstacle        -1.0
Out of Bounds   -1.0
Step            -0.01
```

Interpretasinya:

```text
Goal
→ sangat baik

Obstacle
→ sangat buruk

Keluar grid
→ sangat buruk

Langkah
→ sedikit buruk
```

Akibatnya agent didorong untuk:

```text
mencapai goal
+
menghindari kesalahan
+
mengurangi jumlah langkah
```

---

# 62. Reward Hacking

**Reward hacking** terjadi jika agent menemukan cara memperoleh reward yang secara matematis bagus tetapi tidak sesuai tujuan designer.

Contoh buruk:

```text
+0.1 setiap kali berada dekat Goal
```

tetapi:

```text
Goal hanya memberi +0.5
```

Agent mungkin belajar:

```text
bolak-balik dekat Goal
```

karena mendapatkan lebih banyak reward daripada menyelesaikan episode.

Pelajaran:

> Reward mendefinisikan tujuan agent. Kesalahan reward design dapat menghasilkan behavior yang tidak diinginkan.

---

# 63. Penambahan Maksimum Step

Parameter:

```text
maxStepsPerEpisode
```

penting untuk mencegah episode berlangsung selamanya.

Misalnya agent:

```text
berputar-putar
atau
tidak pernah mencapai goal
```

Jika:

```text
maxStepsPerEpisode = 100
```

episode otomatis berakhir setelah 100 step.

---

# 64. Troubleshooting — Grid Tidak Muncul

Periksa:

1. `GridCell.prefab` sudah dibuat.
2. `Cell Prefab` pada GridWorld sudah terisi.
3. Script `GridWorld.cs` terpasang.
4. Tidak ada error merah di Console.
5. Camera menghadap ke posisi grid.

---

# 65. Troubleshooting — Agent Tidak Terlihat

Periksa:

```text
Agent Height
Camera
Scale Agent
Material Agent
GridWorld reference
```

Pastikan Agent berada sedikit di atas permukaan cell.

Contoh:

```text
Agent Height = 0.6
```

---

# 66. Troubleshooting — NullReferenceException

Contoh error:

```text
NullReferenceException
```

Biasanya berarti reference Inspector belum diisi.

Periksa:

```text
TrainingManager
├── Grid World
└── Agent

QLearningAgent
└── Grid World

QLearningDebugUI
├── Training Manager
├── Agent
└── Info Text
```

---

# 67. Troubleshooting — Agent Tidak Pernah Sampai Goal

Periksa:

1. Goal tidak tertutup seluruhnya oleh obstacle.
2. Start bukan obstacle.
3. Goal bukan obstacle.
4. Koordinat obstacle benar.
5. Total episode cukup.
6. Epsilon tidak terlalu rendah dari awal.
7. Step maksimum tidak terlalu kecil.
8. Reward goal cukup positif.

Coba:

```text
Total Episodes = 1000
```

jika environment lebih sulit.

---

# 68. Troubleshooting — Agent Tetap Acak Setelah Training

Periksa:

```text
epsilonDecay
learningRate
reward design
jumlah episode
```

Pastikan epsilon turun.

Contoh:

```text
Initial epsilon = 0.8
Minimum epsilon = 0.05
```

---

# 69. Troubleshooting — Agent Selalu Memilih Up

Jika seluruh Q-value masih:

```text
0
```

fungsi:

```csharp
GetBestAction()
```

akan mengembalikan action pertama.

Karena itu exploration melalui epsilon sangat penting pada awal training.

---

# 70. Pengembangan Opsional — Tombol Start Training

Mahasiswa yang sudah menyelesaikan bagian dasar dapat menambahkan:

```text
Button Start Training
Button Reset Q-Table
Button Run Inference
Button Print Q-Table
```

Dengan demikian training tidak harus otomatis berjalan melalui:

```text
trainOnStart
```

---

# 71. Pengembangan Opsional — Policy Arrow

Setiap cell dapat menampilkan:

```text
↑
↓
←
→
```

sesuai action dengan Q-value terbesar.

Misalnya setelah training:

```text
→ → ↓ ↓ ↓
↑ # → # ↓
↑ # → → ↓
↑ ← # → ↓
→ → → → G
```

Visualisasi ini disebut:

```text
policy visualization
```

dan sangat direkomendasikan untuk demonstrasi kelas.

---

# 72. Pengembangan Opsional — Warna Berdasarkan Q-Value

Cell juga dapat diberi intensitas berdasarkan Q-value terbaik.

Contoh:

```text
nilai tinggi
→ cell semakin terang

nilai rendah
→ cell semakin gelap
```

Hal ini membantu mahasiswa memahami bagaimana reward Goal menyebar ke state-state sebelumnya.

---

# 73. Pengembangan Opsional — Grafik Reward

Simpan total reward setiap episode:

```text
Episode
Reward
```

Kemudian buat grafik:

```text
Reward
  ↑
  │              ______
  │          ___/
  │      ___/
  │_____/______________→ Episode
```

Jika training berhasil, reward rata-rata biasanya menunjukkan kecenderungan membaik.

---

# 74. Q-Learning vs A*

Q-Learning bukan pengganti A*.

| Aspek | A* | Q-Learning |
|---|---|---|
| Kategori | Pathfinding | Reinforcement Learning |
| Training | Tidak | Ya |
| Input utama | Graph + heuristic | Reward + pengalaman |
| Output | Path | Policy |
| Trial-and-error | Tidak | Ya |
| Deterministik | Lebih mudah | Tidak selalu |
| Cocok untuk pathfinding murni | Sangat cocok | Tidak selalu |
| Tujuan pembelajaran RL | Tidak | Sangat cocok |

---

# 75. Mengapa Tidak Menggunakan A* pada Praktikum Ini?

Karena tujuan praktikum bukan:

```text
menemukan algoritma tercepat menuju Goal
```

melainkan:

```text
memahami bagaimana agent belajar melalui reward
```

A* mengetahui struktur graph dan mencari jalur.

Q-Learning memperoleh policy melalui pengalaman.

---

# 76. Hubungan dengan Praktikum Sebelumnya

Praktikum sebelumnya banyak menggunakan:

```text
developer menentukan aturan
```

Contoh:

```text
FSM
Behavior Tree
Utility AI
Pathfinding
DDA
Player Modeling
```

Pada praktikum ini mulai diperkenalkan:

```text
Learning-Based AI
```

di mana keputusan diperoleh melalui pengalaman.

---

# 77. Hubungan dengan Pertemuan 12

Pertemuan 12 memperkenalkan:

```text
Gameplay Data
↓
Metrics
↓
Player Model
↓
Adaptation
```

Pertemuan 13 memperluas konsep data-driven system ke:

```text
Agent
↓
Interaction
↓
Reward
↓
Learning
↓
Policy
```

Keduanya menunjukkan bahwa Game AI tidak selalu harus ditulis sepenuhnya sebagai aturan eksplisit.

---

# 78. Hubungan dengan Pertemuan 14

Praktikum ini menjadi dasar memahami:

```text
Agent
Observation
Action
Reward
Episode
Policy
Training
Inference
```

Konsep yang sama akan digunakan kembali pada:

```text
Unity ML-Agents
```

pada pertemuan berikutnya.

Perbedaannya:

```text
Q-Learning sekarang:
Q-table sederhana

ML-Agents berikutnya:
policy dapat dipelajari menggunakan
algoritma dan model yang lebih kompleks
```

---

# 79. Rekomendasi Alur Pelaksanaan di Laboratorium

## Tahap A — Konsep

Durasi awal praktikum:

```text
State
Action
Reward
Episode
Q-table
Epsilon
```

---

## Tahap B — Environment

Mahasiswa membuat:

```text
GridWorld
GridCell
Start
Goal
Obstacle
```

---

## Tahap C — Agent

Mahasiswa membuat:

```text
QLearningAgent
```

dan memeriksa pergerakan antar-cell.

---

## Tahap D — Q-Table

Mahasiswa mengimplementasikan:

```text
GetValue
SetValue
GetMaxValue
GetBestAction
```

---

## Tahap E — Training

Implementasikan:

```text
Episode
Epsilon-Greedy
Reward
Q Update
```

---

## Tahap F — Observasi

Amati:

```text
Episode
Step
Reward
Epsilon
```

---

## Tahap G — Inference

Setelah training:

```text
agent menggunakan best action
```

---

## Tahap H — Eksperimen

Mahasiswa mengubah:

```text
epsilon
alpha
gamma
reward
obstacle
```

kemudian menganalisis hasil.

---

# 80. Parameter Rekomendasi Final

Untuk praktikum standar:

```text
Grid:
5 × 5

Learning Rate:
0.20

Discount Factor:
0.90

Initial Epsilon:
0.80

Epsilon Decay:
0.995

Minimum Epsilon:
0.05

Goal Reward:
+1.00

Obstacle Penalty:
-1.00

Out-of-Bounds Penalty:
-1.00

Step Penalty:
-0.01

Episodes:
500–1000

Maximum Steps:
100
```

Konfigurasi tersebut merupakan titik awal, bukan satu-satunya konfigurasi benar.

---

# 81. Eksperimen Wajib Mahasiswa

Lakukan minimal tiga eksperimen.

## Eksperimen A

```text
epsilon:
0.1
0.5
0.9
```

Analisis exploration.

---

## Eksperimen B

```text
learningRate:
0.1
0.5
0.9
```

Analisis kecepatan pembelajaran.

---

## Eksperimen C

```text
stepPenalty:
0
-0.01
-0.1
```

Analisis panjang jalur.

---

# 82. Data yang Dicatat

Untuk setiap eksperimen, catat:

| Parameter | Episode | Step Akhir | Reward | Epsilon Akhir | Berhasil? |
|---|---:|---:|---:|---:|---|
| Konfigurasi 1 | | | | | |
| Konfigurasi 2 | | | | | |
| Konfigurasi 3 | | | | | |

Mahasiswa kemudian membandingkan hasilnya.

---

# 83. Pertanyaan Analisis

Jawab pertanyaan berikut:

1. Apa yang dimaksud dengan state dalam praktikum?
2. Mengapa posisi agent digunakan sebagai state?
3. Berapa jumlah state pada grid 5×5?
4. Apa saja action yang tersedia?
5. Mengapa Goal diberi reward positif?
6. Mengapa obstacle diberi penalty?
7. Apa fungsi step penalty?
8. Apa fungsi learning rate?
9. Apa fungsi discount factor?
10. Apa fungsi epsilon?
11. Mengapa epsilon dikurangi selama training?
12. Apa perbedaan exploration dan exploitation?
13. Apa isi Q-table?
14. Bagaimana agent memilih action saat inference?
15. Mengapa Q-Learning membutuhkan episode berulang?
16. Mengapa hasil setiap training dapat sedikit berbeda?
17. Apa yang terjadi jika epsilon selalu nol?
18. Apa yang terjadi jika epsilon selalu satu?
19. Mengapa Q-Learning kurang cocok untuk state yang sangat besar?
20. Apa perbedaan Q-Learning dengan A*?

---

# 84. Tugas Pengembangan

Pilih minimal satu:

### Pilihan A
Tambahkan Policy Arrow.

### Pilihan B
Tambahkan tombol:

```text
Start Training
Reset
Run Inference
```

### Pilihan C
Tambahkan jumlah Goal yang berhasil dicapai.

### Pilihan D
Tambahkan total reward rata-rata per 10 episode.

### Pilihan E
Ubah grid menjadi:

```text
8 × 8
```

dan analisis kebutuhan episode.

### Pilihan F
Tambahkan dua jenis obstacle dengan penalty berbeda.

---

# 85. Checklist Keberhasilan Praktikum

- [ ] Project Unity dapat dibuka tanpa compilation error.
- [ ] Scene `QLearningGridScene` berhasil dibuat.
- [ ] Grid World muncul.
- [ ] Start dan Goal memiliki posisi berbeda.
- [ ] Obstacle berhasil ditempatkan.
- [ ] Agent muncul di posisi Start.
- [ ] Agent dapat melakukan empat action.
- [ ] Q-table berhasil dibuat.
- [ ] Epsilon-greedy berhasil dijalankan.
- [ ] Reward Goal diberikan.
- [ ] Penalty obstacle diberikan.
- [ ] Step penalty bekerja.
- [ ] Episode berhasil di-reset.
- [ ] Q-value diperbarui.
- [ ] Epsilon berkurang selama training.
- [ ] Informasi training terlihat di Console/UI.
- [ ] Agent menunjukkan perubahan perilaku setelah training.
- [ ] Mode inference dapat dijalankan.
- [ ] Agent dapat mencapai Goal menggunakan policy hasil training.
- [ ] Mahasiswa melakukan eksperimen parameter.
- [ ] Mahasiswa dapat menjelaskan hasil eksperimen.

---

# 86. Kesimpulan Praktikum

Pada praktikum ini telah dibuat sistem:

```text
Grid World
    ↓
Agent
    ↓
State
    ↓
Action
    ↓
Reward
    ↓
Q-Learning
    ↓
Q-Table
    ↓
Policy
    ↓
Inference
```

Hal penting yang harus dipahami adalah bahwa Agent **tidak diberikan jalur menuju Goal secara langsung**.

Agent belajar melalui:

```text
trial
↓
error
↓
reward
↓
update Q-value
↓
pengalaman berulang
```

Dengan demikian, praktikum ini memperlihatkan perbedaan mendasar antara:

```text
Rule-Based AI
```

dan:

```text
Learning-Based AI
```

---

# 87. Rekomendasi Akhir Praktikum Pertemuan 13

## Praktikum Utama

**Q-Learning Grid Agent**

Pilihan ini paling direkomendasikan karena:

- langsung berhubungan dengan materi kuliah,
- mudah dijalankan di Unity 6,
- tidak membutuhkan Python,
- tidak bergantung pada package ML tambahan,
- mudah di-debug,
- mudah dipresentasikan di kelas,
- memperlihatkan Q-table secara nyata,
- memperlihatkan exploration dan exploitation,
- sangat baik sebagai dasar menuju Unity ML-Agents.

---

# 88. Nama Project yang Direkomendasikan

## Pilihan utama

```text
GameAI_13_QLearningGrid
```

Nama ini paling saya rekomendasikan karena:

```text
GameAI
```

menunjukkan domain mata kuliah,

```text
13
```

menunjukkan nomor praktikum/pertemuan,

dan:

```text
QLearningGrid
```

menunjukkan implementasi utama project.

Alternatif nama:

```text
GameAI_QLearningGridWorld
SmartGame_QLearningAgent
RL_GridWorld_Unity
GameAI13_RLGridAgent
LearningAgent_GridWorld
```

Untuk konsistensi dengan project praktikum satu semester, gunakan:

```text
GameAI_13_QLearningGrid
```

---

# 89. Struktur Akhir Hierarchy

Hierarchy yang direkomendasikan:

```text
QLearningGridScene
│
├── Main Camera
├── Directional Light
│
├── GridWorld
│   ├── Cell_0_0_Start
│   ├── Cell_1_0_Normal
│   ├── ...
│   └── Cell_4_4_Goal
│
├── Agent
│
├── TrainingManager
│
└── Canvas
    ├── Panel
    └── TrainingInfoText
```

Cell akan menjadi child `GridWorld` secara otomatis karena dibuat melalui:

```csharp
Instantiate(
    cellPrefab,
    worldPosition,
    Quaternion.identity,
    transform
);
```

Parameter:

```text
transform
```

di sini berarti GameObject tempat script GridWorld dipasang menjadi parent object baru.

---

# 90. Struktur Script Akhir

```text
Scripts/
│
├── GridCell.cs
│   └── Menyimpan informasi masing-masing cell
│
├── GridWorld.cs
│   └── Membuat dan mengelola environment grid
│
├── QTable.cs
│   └── Menyimpan nilai Q(state, action)
│
├── QLearningAgent.cs
│   └── Mengelola posisi dan movement agent
│
├── TrainingManager.cs
│   └── Menjalankan algoritma Q-Learning
│
└── QLearningDebugUI.cs
    └── Menampilkan informasi proses training
```

Arsitektur tersebut sengaja memisahkan:

```text
Environment
Agent
Learning Data
Training Logic
Visualization
```

agar setiap tanggung jawab mudah dipahami mahasiswa.

---

# 91. Konsep yang Harus Dikuasai Setelah Praktikum

Mahasiswa tidak cukup hanya mendapatkan agent yang bisa mencapai Goal.

Mahasiswa harus dapat menjelaskan:

```text
Mengapa agent belajar?
```

Jawabannya bukan:

```text
karena Unity otomatis mencari jalur
```

melainkan:

```text
karena setiap interaksi menghasilkan reward,
reward digunakan untuk memperbarui Q-value,
Q-value menyimpan estimasi kualitas action,
dan policy akhirnya memilih action dengan
Q-value terbesar.
```

Inilah inti Praktikum 13.

---

# 92. Persiapan Menuju Praktikum 14

Setelah memahami Q-Learning sederhana, mahasiswa telah mengenal konsep:

```text
Agent
Environment
Observation/State
Action
Reward
Episode
Policy
Training
Inference
Exploration
```

Pada Praktikum 14, konsep tersebut dapat diterapkan menggunakan:

```text
Unity ML-Agents
```

untuk melatih agent pada environment Unity yang lebih kompleks.

Dengan demikian urutan pembelajaran menjadi:

```text
Pertemuan 13
Q-Learning sederhana
        ↓
memahami konsep RL
        ↓
Pertemuan 14
Unity ML-Agents
        ↓
training agent yang lebih kompleks
```

Ini merupakan urutan praktikum yang paling direkomendasikan agar mahasiswa memahami **konsep terlebih dahulu sebelum menggunakan framework Machine Learning**.