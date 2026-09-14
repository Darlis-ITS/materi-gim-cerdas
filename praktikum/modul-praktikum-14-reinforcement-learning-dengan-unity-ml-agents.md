# MODUL PRAKTIKUM 14  
# Reinforcement Learning dengan Unity ML-Agents

**Mata Kuliah:** Game Cerdas  
**Program Studi:** S1 Teknik Informatika  
**Semester:** 7  
**Tools:** Unity 6, Unity ML-Agents, C#, Python  
**Algoritma Training:** PPO — Proximal Policy Optimization  

---

# 1. Judul Praktikum

## Training Agent Menggunakan Unity ML-Agents

Pada praktikum ini mahasiswa akan membuat sebuah **learning agent** yang belajar bergerak menuju sebuah target pada arena 3D.

Agent tidak diberi aturan seperti:

```text
IF target di kanan
THEN bergerak ke kanan
```

Sebaliknya, agent hanya diberikan:

```text
Observation
    ↓
Policy
    ↓
Action
    ↓
Environment berubah
    ↓
Reward
    ↓
Training
```

Melalui ribuan percobaan, agent akan belajar sebuah **policy** untuk mencapai target dengan efektif.

Praktikum ini menerapkan langsung materi Pertemuan 14 mengenai Agent, Environment, Observation, Action, Reward, Episode, Policy, PPO, Behavior Parameters, Decision Requester, training, dan inference.

---

# 2. Rekomendasi Nama Project Unity

## Nama yang direkomendasikan

```text
GC14_MLAgents_MoveToTarget_PPO
```

### Alasan

- `GC14` → Game Cerdas Praktikum/Pertemuan 14.
- `MLAgents` → menggunakan Unity ML-Agents.
- `MoveToTarget` → menggambarkan tugas utama agent.
- `PPO` → algoritma Reinforcement Learning yang digunakan.

Alternatif nama yang lebih sederhana:

```text
GC14_MLAgents_MoveToTarget
```

atau:

```text
IntelligentAgentTraining
```

### Rekomendasi utama

Gunakan:

```text
GC14_MLAgents_MoveToTarget_PPO
```

karena paling jelas ketika seluruh project praktikum Game Cerdas dikumpulkan dalam satu semester.

---

# 3. Tujuan Praktikum

Setelah menyelesaikan praktikum ini mahasiswa diharapkan mampu:

1. Membuat environment Reinforcement Learning di Unity.
2. Membuat GameObject yang berfungsi sebagai ML-Agent.
3. Membuat class yang mewarisi `Agent`.
4. Mendefinisikan observation untuk agent.
5. Mendefinisikan continuous action.
6. Mendesain reward dan penalty.
7. Membuat mekanisme episode.
8. Melakukan randomisasi posisi agent dan target.
9. Menggunakan `Behavior Parameters`.
10. Menggunakan `Decision Requester`.
11. Menguji agent menggunakan `Heuristic()`.
12. Membuat konfigurasi PPO.
13. Menjalankan training menggunakan `mlagents-learn`.
14. Mengamati perkembangan cumulative reward.
15. Menghasilkan model hasil training.
16. Menggunakan model tersebut dalam mode inference.
17. Menjelaskan hubungan observation, action, reward, dan policy.

---

# 4. Gambaran Praktikum

Agent berada di sebuah platform.

```text
+--------------------------------------+
|                                      |
|              TARGET                  |
|                ●                     |
|                                      |
|                                      |
|       AGENT                          |
|         ●                            |
|                                      |
+--------------------------------------+
```

Tugas agent:

> Bergerak menuju target secepat mungkin tanpa jatuh dari arena.

Setiap episode:

```text
Agent ditempatkan random
        ↓
Target ditempatkan random
        ↓
Agent mengamati target
        ↓
Agent memilih arah bergerak
        ↓
Mencapai target?
   ├── Ya → Reward +1 → EndEpisode
   └── Tidak
           ↓
       Jatuh?
       ├── Ya → Reward -1 → EndEpisode
       └── Tidak → lanjut
```

---

# 5. Konsep Reinforcement Learning yang Digunakan

## 5.1 Agent

**Agent** adalah entitas yang belajar mengambil keputusan.

Pada praktikum:

```text
Agent = bola/capsule yang bergerak di arena
```

Di Unity, GameObject Agent akan memiliki:

- `Collider`
- `Rigidbody`
- `MoveToTargetAgent.cs`
- `Behavior Parameters`
- `Decision Requester`

Class agent dibuat dengan:

```csharp
public class MoveToTargetAgent : Agent
```

Artinya class tersebut mewarisi kemampuan dasar dari class `Agent` milik Unity ML-Agents.

---

# 6. Environment

Environment adalah dunia tempat agent belajar.

Environment praktikum terdiri dari:

```text
TrainingArea
├── Ground
├── Agent
├── Target
└── Camera
```

Environment menentukan:

- tempat agent bergerak;
- posisi target;
- batas arena;
- kondisi berhasil;
- kondisi gagal;
- kapan episode di-reset.

---

# 7. Observation

**Observation** adalah informasi yang diketahui agent.

Pertanyaan pentingnya adalah:

> Informasi apa yang dibutuhkan agent agar mampu mengambil keputusan?

Dalam praktikum ini agent memperoleh:

```text
1. arah relatif menuju target pada sumbu X
2. arah relatif menuju target pada sumbu Z
3. jarak menuju target
4. velocity agent pada X
5. velocity agent pada Z
```

Total:

```text
5 observation
```

---

# 8. Mengapa Menggunakan Posisi Relatif?

Kita tidak memberikan:

```text
Agent world position
Target world position
```

sebagai observation utama.

Sebaliknya:

```csharp
Vector3 toTarget =
    target.localPosition - transform.localPosition;
```

Dengan demikian agent belajar:

```text
"target berada di arah mana relatif terhadap saya?"
```

bukan:

```text
"target selalu berada pada koordinat tertentu"
```

Pendekatan ini membantu agent melakukan generalisasi ketika posisi awal dan target berubah.

---

# 9. Action

Action adalah hal yang dapat dilakukan agent.

Praktikum menggunakan **Continuous Action**.

Terdapat dua output:

```text
Action 0 → moveX
Action 1 → moveZ
```

Nilainya berada di sekitar rentang:

```text
-1 sampai +1
```

Contoh:

```text
moveX = +1
moveZ = 0
```

berarti bergerak ke kanan.

Sedangkan:

```text
moveX = 0
moveZ = +1
```

berarti bergerak maju.

Unity ML-Agents PPO mendukung continuous actions, dan dokumentasi ML-Agents menyatakan output continuous PPO dibatasi ke rentang `[-1,1]`.

---

# 10. Reward

Reward adalah feedback yang digunakan agent untuk mengetahui apakah perilakunya baik atau buruk.

Reward yang digunakan:

| Kondisi | Reward |
|---|---:|
| Mencapai target | `+1.0` |
| Jatuh dari arena | `-1.0` |
| Setiap decision step | `-0.001` |

Tujuan step penalty:

```text
Mendorong agent menyelesaikan tugas lebih cepat.
```

Agent yang berputar-putar terlalu lama akan mengumpulkan penalty lebih banyak.

Unity merekomendasikan reward per keputusan berada pada skala yang wajar dan umumnya sekitar `[-1,1]` agar training lebih stabil.

---

# 11. Episode

Episode adalah satu percobaan agent.

Contoh:

```text
EPISODE 1

Agent spawn
↓
bergerak
↓
jatuh
↓
reward -1
↓
EndEpisode()
```

Kemudian:

```text
EPISODE 2

Agent spawn kembali
↓
target pindah
↓
agent mencoba strategi lain
↓
target tercapai
↓
reward +1
↓
EndEpisode()
```

Proses tersebut terjadi berkali-kali selama training.

---

# 12. Policy

**Policy** dapat dipahami sebagai:

> Strategi agent dalam memilih action berdasarkan observation.

Secara sederhana:

```text
Observation
       ↓
Neural Network
       ↓
Action
```

Contoh policy yang akhirnya mungkin dipelajari:

```text
Target kanan → dorong ke kanan
Target depan → dorong ke depan
Terlalu cepat → kurangi gaya
```

Kita tidak menulis aturan tersebut secara manual.

Agent mempelajarinya melalui training.

---

# 13. PPO

PPO adalah singkatan dari:

## Proximal Policy Optimization

PPO merupakan algoritma Reinforcement Learning yang dapat digunakan oleh trainer ML-Agents.

Dalam praktikum ini mahasiswa **tidak perlu mengimplementasikan matematika PPO**.

Secara konseptual:

```text
Agent melakukan banyak percobaan
        ↓
Menghasilkan pengalaman
        ↓
Observation + Action + Reward
        ↓
PPO mengevaluasi policy
        ↓
Bobot neural network diperbaiki
        ↓
Policy baru
        ↓
Agent mencoba lagi
```

Tujuan PPO:

```text
Mencari policy yang menghasilkan
cumulative reward sebesar mungkin.
```

---

# 14. Software yang Diperlukan

Gunakan:

```text
Unity 6
Unity ML-Agents
Python
ML-Agents Python Trainer
Code Editor
```

Dokumentasi resmi ML-Agents saat ini mensyaratkan Unity `6000.0` atau lebih baru dan merekomendasikan Python `3.10.12`. Untuk menghindari konflik library Python, virtual environment juga direkomendasikan.

---

# 15. LANGKAH 1 — Membuat Project Unity

Buka:

```text
Unity Hub
```

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

Nama project:

```text
GC14_MLAgents_MoveToTarget_PPO
```

Klik:

```text
Create Project
```

---

# 16. LANGKAH 2 — Membuat Struktur Folder

Pada jendela `Project`, buat struktur:

```text
Assets
├── Scenes
├── Scripts
├── Materials
├── Prefabs
├── Models
└── MLConfigs
```

### Fungsi folder

**Scenes**

Menyimpan scene Unity.

**Scripts**

Menyimpan script C#.

**Materials**

Menyimpan material visual.

**Prefabs**

Menyimpan template GameObject.

**Models**

Menyimpan model ML hasil training.

**MLConfigs**

Menyimpan konfigurasi training `.yaml`.

---

# 17. LANGKAH 3 — Menyimpan Scene

Simpan scene sebagai:

```text
Assets/Scenes/MLAgents_MoveToTarget.unity
```

Gunakan:

```text
File → Save As
```

---

# 18. LANGKAH 4 — Instalasi Unity ML-Agents

Buka:

```text
Window
→ Package Manager
```

Cari package:

```text
ML Agents
```

Kemudian install package:

```text
com.unity.ml-agents
```

Unity mendistribusikan ML-Agents C# SDK sebagai package `com.unity.ml-agents`; dokumentasi resmi juga menyediakan opsi instalasi package lokal dari repository apabila package tidak tampil di registry.

> Catatan: jangan memaksakan nomor versi package dari modul apabila versi Unity yang dipakai laboratorium berbeda. Gunakan versi ML-Agents yang kompatibel dengan editor Unity 6 yang digunakan.

---

# 19. LANGKAH 5 — Menyiapkan Python Environment

## Pilihan yang direkomendasikan

Gunakan virtual environment.

Contoh menggunakan Conda:

```bash
conda create -n mlagents python=3.10.12
```

Aktifkan:

```bash
conda activate mlagents
```

Dokumentasi instalasi ML-Agents resmi merekomendasikan Python `3.10.12` serta Conda/Mamba atau virtual environment lain untuk mengisolasi dependency.

---

# 20. Instalasi Python ML-Agents

Cara yang paling aman untuk lingkungan praktikum adalah mengikuti package Python yang cocok dengan release ML-Agents yang digunakan.

Dokumentasi resmi saat ini merekomendasikan clone release stable:

```bash
git clone --branch release_22 https://github.com/Unity-Technologies/ml-agents.git
```

Masuk ke directory:

```bash
cd ml-agents
```

Kemudian:

```bash
python -m pip install ./ml-agents-envs
python -m pip install ./ml-agents
```

Validasi:

```bash
mlagents-learn --help
```

Jika help tampil, trainer telah terpasang.

---

# 21. LANGKAH 6 — Membuat TrainingArea

Pada Hierarchy:

```text
Create Empty
```

Rename:

```text
TrainingArea
```

Transform:

```text
Position = (0, 0, 0)
Rotation = (0, 0, 0)
Scale    = (1, 1, 1)
```

TrainingArea berfungsi sebagai parent environment.

---

# 22. Mengapa TrainingArea Penting?

Nanti seluruh posisi agent dan target menggunakan:

```text
localPosition
```

Dengan demikian TrainingArea dapat diduplikasi:

```text
TrainingArea_01
TrainingArea_02
TrainingArea_03
TrainingArea_04
...
```

tanpa merusak perhitungan posisi agent.

Hal ini sangat berguna untuk **parallel training**.

---

# 23. LANGKAH 7 — Membuat Ground

Klik kanan:

```text
TrainingArea
→ 3D Object
→ Cube
```

Nama:

```text
Ground
```

Transform:

```text
Position = (0, 0, 0)
Scale    = (10, 0.5, 10)
```

Dengan demikian arena kira-kira berukuran:

```text
10 × 10
```

Ground harus memiliki:

```text
Box Collider
```

yang otomatis dibuat oleh Unity.

---

# 24. Collider

**Collider** merupakan komponen yang menentukan bentuk fisik sebuah GameObject untuk collision detection.

Contohnya:

```text
Box Collider
Sphere Collider
Capsule Collider
Mesh Collider
```

Ground menggunakan:

```text
Box Collider
```

agar agent tidak jatuh menembus lantai.

---

# 25. LANGKAH 8 — Membuat Agent

Klik:

```text
TrainingArea
→ 3D Object
→ Sphere
```

atau Capsule.

Rename:

```text
Agent
```

Contoh Transform:

```text
Position = (0, 1, 0)
Scale    = (1, 1, 1)
```

Tambahkan komponen:

```text
Rigidbody
```

---

# 26. Rigidbody

`Rigidbody` membuat GameObject ikut dalam simulasi physics Unity.

Dengan Rigidbody, object dapat:

- menerima gaya;
- mengalami gravitasi;
- memiliki velocity;
- bertabrakan;
- bergerak melalui physics engine.

Pada agent kita akan menggunakan:

```csharp
rb.AddForce(...)
```

untuk menggerakkannya.

---

# 27. Konfigurasi Rigidbody Agent

Gunakan kira-kira:

```text
Mass             = 1
Linear Damping   = 0.5
Angular Damping  = 0.5
Use Gravity      = ON
```

Untuk agent berbentuk bola, rotation tidak menjadi masalah.

Jika menggunakan capsule/cube dan tidak ingin agent terguling, gunakan:

```text
Constraints
Freeze Rotation X
Freeze Rotation Z
```

---

# 28. LANGKAH 9 — Membuat Target

Klik:

```text
TrainingArea
→ 3D Object
→ Cylinder
```

Rename:

```text
Target
```

Transform contoh:

```text
Position = (3, 0.75, 3)
Scale    = (0.8, 0.25, 0.8)
```

Pastikan target mempunyai Collider.

Centang:

```text
Is Trigger = ON
```

---

# 29. Trigger

Collider normal menghasilkan collision fisik.

Sedangkan Collider dengan:

```text
Is Trigger = true
```

tidak digunakan sebagai penghalang fisik.

Collider tersebut menjadi area pendeteksi.

Kita dapat mendeteksinya melalui:

```csharp
OnTriggerEnter(Collider other)
```

---

# 30. LANGKAH 10 — Membuat Tag Target

Pilih GameObject:

```text
Target
```

Pada Inspector:

```text
Tag
→ Add Tag...
```

Buat tag:

```text
Target
```

Kembali ke GameObject Target.

Set:

```text
Tag = Target
```

---

# 31. Fungsi Tag

**Tag** adalah label untuk mengidentifikasi jenis GameObject.

Contoh:

```text
Player
Enemy
Target
Obstacle
Collectible
```

Script dapat mengeceknya:

```csharp
other.CompareTag("Target")
```

Ini lebih baik daripada membandingkan nama GameObject.

---

# 32. LANGKAH 11 — Membuat Script Agent

Buat:

```text
Assets/Scripts/MoveToTargetAgent.cs
```

Gunakan script berikut:

```csharp
using UnityEngine;
using Unity.MLAgents;
using Unity.MLAgents.Actuators;
using Unity.MLAgents.Sensors;
using UnityEngine.InputSystem;

public class MoveToTargetAgent : Agent
{
    [Header("References")]
    [SerializeField] private Transform target;

    [Header("Movement")]
    [SerializeField] private float moveForce = 10f;
    [SerializeField] private float maxSpeed = 5f;

    [Header("Spawn Area")]
    [SerializeField] private float spawnRange = 4f;

    [Header("Reward")]
    [SerializeField] private float targetReward = 1f;
    [SerializeField] private float fallPenalty = -1f;
    [SerializeField] private float stepPenalty = -0.001f;

    private Rigidbody rb;

    public override void Initialize()
    {
        rb = GetComponent<Rigidbody>();
    }

    public override void OnEpisodeBegin()
    {
        // Hentikan gerakan dari episode sebelumnya
        rb.linearVelocity = Vector3.zero;
        rb.angularVelocity = Vector3.zero;

        // Random posisi Agent
        transform.localPosition = new Vector3(
            Random.Range(-spawnRange, spawnRange),
            1f,
            Random.Range(-spawnRange, spawnRange)
        );

        // Random posisi Target
        target.localPosition = new Vector3(
            Random.Range(-spawnRange, spawnRange),
            0.75f,
            Random.Range(-spawnRange, spawnRange)
        );
    }

    public override void CollectObservations(VectorSensor sensor)
    {
        Vector3 toTarget =
            target.localPosition - transform.localPosition;

        float maxDistance = spawnRange * 2f * 1.414f;

        // Observation 1-2:
        // arah target pada bidang XZ
        Vector3 direction = toTarget.normalized;

        sensor.AddObservation(direction.x);
        sensor.AddObservation(direction.z);

        // Observation 3:
        // jarak target yang dinormalisasi
        sensor.AddObservation(
            Mathf.Clamp01(toTarget.magnitude / maxDistance)
        );

        // Observation 4-5:
        // kecepatan Agent
        sensor.AddObservation(
            Mathf.Clamp(rb.linearVelocity.x / maxSpeed, -1f, 1f)
        );

        sensor.AddObservation(
            Mathf.Clamp(rb.linearVelocity.z / maxSpeed, -1f, 1f)
        );
    }

    public override void OnActionReceived(ActionBuffers actions)
    {
        float moveX =
            Mathf.Clamp(actions.ContinuousActions[0], -1f, 1f);

        float moveZ =
            Mathf.Clamp(actions.ContinuousActions[1], -1f, 1f);

        Vector3 movement =
            new Vector3(moveX, 0f, moveZ);

        rb.AddForce(
            movement * moveForce,
            ForceMode.Force
        );

        // Batasi kecepatan horizontal
        Vector3 horizontalVelocity =
            new Vector3(
                rb.linearVelocity.x,
                0f,
                rb.linearVelocity.z
            );

        if (horizontalVelocity.magnitude > maxSpeed)
        {
            horizontalVelocity =
                horizontalVelocity.normalized * maxSpeed;

            rb.linearVelocity =
                new Vector3(
                    horizontalVelocity.x,
                    rb.linearVelocity.y,
                    horizontalVelocity.z
                );
        }

        // Penalty kecil agar Agent menyelesaikan tugas
        // secepat mungkin
        AddReward(stepPenalty);

        // Gagal jika jatuh dari platform
        if (transform.localPosition.y < -1f)
        {
            AddReward(fallPenalty);
            EndEpisode();
        }
    }

    private void OnTriggerEnter(Collider other)
    {
        if (other.CompareTag("Target"))
        {
            AddReward(targetReward);
            EndEpisode();
        }
    }

    public override void Heuristic(
        in ActionBuffers actionsOut)
    {
        ActionSegment<float> actions =
            actionsOut.ContinuousActions;

        float horizontal = 0f;
        float vertical = 0f;

        if (Keyboard.current != null)
        {
            if (Keyboard.current.aKey.isPressed ||
                Keyboard.current.leftArrowKey.isPressed)
            {
                horizontal = -1f;
            }

            if (Keyboard.current.dKey.isPressed ||
                Keyboard.current.rightArrowKey.isPressed)
            {
                horizontal = 1f;
            }

            if (Keyboard.current.sKey.isPressed ||
                Keyboard.current.downArrowKey.isPressed)
            {
                vertical = -1f;
            }

            if (Keyboard.current.wKey.isPressed ||
                Keyboard.current.upArrowKey.isPressed)
            {
                vertical = 1f;
            }
        }

        actions[0] = horizontal;
        actions[1] = vertical;
    }
}
```

---

# 33. Penjelasan Namespace

## UnityEngine

```csharp
using UnityEngine;
```

Menyediakan class dasar Unity seperti:

```text
Vector3
Transform
Rigidbody
Collider
Mathf
Random
```

---

## Unity.MLAgents

```csharp
using Unity.MLAgents;
```

Menyediakan:

```text
Agent
AddReward()
EndEpisode()
```

dan komponen utama ML-Agents.

---

## Unity.MLAgents.Sensors

```csharp
using Unity.MLAgents.Sensors;
```

Digunakan untuk:

```text
VectorSensor
```

yang menerima observation.

---

## Unity.MLAgents.Actuators

```csharp
using Unity.MLAgents.Actuators;
```

Digunakan untuk:

```text
ActionBuffers
ActionSegment
```

yang menyimpan action dari policy.

---

## UnityEngine.InputSystem

```csharp
using UnityEngine.InputSystem;
```

Digunakan hanya pada fungsi:

```text
Heuristic()
```

agar agent dapat dikendalikan manual dengan keyboard.

Jika package Input System belum tersedia:

```text
Window
→ Package Manager
→ Input System
→ Install
```

---

# 34. Initialize()

```csharp
public override void Initialize()
{
    rb = GetComponent<Rigidbody>();
}
```

Dipanggil saat ML-Agent diinisialisasi.

Tujuannya mengambil komponen:

```text
Rigidbody
```

dan menyimpannya pada:

```csharp
rb
```

---

# 35. OnEpisodeBegin()

Method:

```csharp
public override void OnEpisodeBegin()
```

dipanggil ketika episode baru dimulai.

Dokumentasi ML-Agents mendefinisikan `OnEpisodeBegin()` sebagai method yang dipanggil pada awal episode, sedangkan `CollectObservations()` dan `OnActionReceived()` menjalankan observation/action loop agent.

Dalam praktikum fungsi ini melakukan:

```text
Reset velocity
↓
Random posisi Agent
↓
Random posisi Target
```

---

# 36. Mengapa Velocity Harus Direset?

Jika tidak:

```text
Episode 1:
Agent bergerak cepat ke kanan
↓
EndEpisode
↓
Episode 2:
Agent masih membawa momentum
```

Hal tersebut membuat initial state setiap episode tidak konsisten.

Karena itu:

```csharp
rb.linearVelocity = Vector3.zero;
rb.angularVelocity = Vector3.zero;
```

---

# 37. Randomisasi

Kode:

```csharp
Random.Range(-spawnRange, spawnRange)
```

membuat posisi berubah setiap episode.

Tujuannya mencegah agent menghafal:

```text
"target selalu ada di kanan atas"
```

dan mendorong policy yang lebih general.

---

# 38. CollectObservations()

Method:

```csharp
public override void CollectObservations(
    VectorSensor sensor)
```

berfungsi menyediakan state informasi kepada policy.

Dokumentasi ML-Agents merekomendasikan `CollectObservations()` untuk data numerik/nonvisual dan mengharuskan jumlah serta struktur observation tetap konsisten.

---

# 39. Observation Praktikum

Observation yang kita kirim:

```text
direction.x
direction.z
distance
velocity.x
velocity.z
```

Sehingga:

```text
Vector Observation Space Size = 5
```

Ini penting.

Jika Inspector diset:

```text
Space Size = 6
```

sedangkan script menghasilkan:

```text
5
```

konfigurasi agent menjadi tidak sesuai.

---

# 40. Normalisasi Observation

Contoh:

```csharp
rb.linearVelocity.x / maxSpeed
```

bertujuan mengubah nilai ke rentang yang lebih terkontrol.

Alih-alih memberikan:

```text
velocity = 37.54
```

kita berusaha memberikan sekitar:

```text
-1 sampai +1
```

Observation yang memiliki skala nilai konsisten biasanya lebih mudah dipelajari oleh neural network.

---

# 41. OnActionReceived()

Method:

```csharp
public override void OnActionReceived(
    ActionBuffers actions)
```

dipanggil ketika policy menghasilkan action.

Kita membaca:

```csharp
actions.ContinuousActions[0]
actions.ContinuousActions[1]
```

sebagai:

```text
moveX
moveZ
```

---

# 42. Rigidbody.AddForce()

Kode:

```csharp
rb.AddForce(
    movement * moveForce,
    ForceMode.Force
);
```

memberikan gaya pada Rigidbody.

Ini berbeda dengan:

```csharp
transform.position += ...
```

karena `AddForce()` bekerja melalui physics engine.

Akibatnya agent memiliki:

- acceleration;
- momentum;
- velocity;
- collision response.

Hal ini membuat problem RL sedikit lebih menarik karena agent harus belajar mengendalikan momentum.

---

# 43. AddReward()

```csharp
AddReward(stepPenalty);
```

menambahkan reward pada agent.

Jika:

```text
stepPenalty = -0.001
```

maka agent mendapat sedikit penalty selama tugas belum selesai.

Jika target tercapai:

```csharp
AddReward(1f);
```

---

# 44. EndEpisode()

```csharp
EndEpisode();
```

mengakhiri episode sekarang.

Setelah episode selesai, ML-Agents akan memulai episode baru dan memanggil kembali:

```csharp
OnEpisodeBegin()
```

---

# 45. Heuristic()

`Heuristic()` memungkinkan manusia menggantikan policy ML sementara.

Gunanya adalah untuk memastikan:

```text
Apakah action mapping benar?
Apakah Agent bisa bergerak?
Apakah collision bekerja?
Apakah Target terdeteksi?
Apakah environment memang dapat diselesaikan?
```

Dokumentasi resmi menyatakan `Heuristic Only` membuat Agent menggunakan method `Heuristic()` sebagai sumber keputusannya.

---

# 46. LANGKAH 12 — Memasang Script Agent

Pilih:

```text
Agent
```

Drag:

```text
MoveToTargetAgent.cs
```

ke Inspector.

Pada field:

```text
Target
```

drag GameObject:

```text
Target
```

ke field tersebut.

Set:

```text
Move Force     = 10
Max Speed      = 5
Spawn Range    = 4
Target Reward  = 1
Fall Penalty   = -1
Step Penalty   = -0.001
```

---

# 47. LANGKAH 13 — Tambahkan Behavior Parameters

Pilih:

```text
Agent
```

Klik:

```text
Add Component
```

Cari:

```text
Behavior Parameters
```

Tambahkan.

Behavior Parameters menentukan policy, observation space, action space, model inference, dan Behavior Type agent.

---

# 48. Konfigurasi Behavior Parameters

Gunakan:

```text
Behavior Name:
MoveToTarget
```

### Vector Observation

```text
Space Size      = 5
Stacked Vectors = 1
```

### Actions

```text
Continuous Actions = 2
Discrete Branches  = 0
```

### Model

```text
None
```

selama training.

### Behavior Type

```text
Default
```

---

# 49. Behavior Name

Gunakan tepat:

```text
MoveToTarget
```

Nama ini nanti juga digunakan pada file:

```text
MoveToTarget.yaml
```

Jika Behavior Name pada Unity berbeda dengan konfigurasi trainer, trainer tidak akan menggunakan konfigurasi yang kita harapkan.

---

# 50. Behavior Type

Terdapat tiga mode penting.

## Default

```text
Training process tersedia
→ gunakan trainer

Training tidak tersedia + model tersedia
→ inference
```

Digunakan untuk training.

## Heuristic Only

```text
Gunakan Heuristic()
```

Digunakan untuk testing manual.

## Inference Only

```text
Gunakan trained model
```

Digunakan setelah training.

Behavior tersebut sesuai definisi resmi `Behavior Parameters`.

---

# 51. LANGKAH 14 — Tambahkan Decision Requester

Pada Agent:

```text
Add Component
→ Decision Requester
```

Set awal:

```text
Decision Period = 5
Take Actions Between Decisions = ON
```

---

# 52. Decision Requester

Agent tidak harus membuat keputusan pada setiap frame rendering.

`Decision Requester` menentukan kapan agent meminta keputusan dari policy. ML-Agents merekomendasikan mekanisme keputusan periodik terutama untuk simulasi berbasis physics.

Contoh:

```text
Decision Period = 5
```

berarti policy baru diminta secara periodik, sedangkan action dapat terus diterapkan di antara dua decision.

---

# 53. LANGKAH 15 — Mengatur Max Step

Pada komponen Agent/script ML-Agents biasanya terdapat parameter:

```text
Max Step
```

Set:

```text
Max Step = 500
```

Artinya episode memiliki batas maksimum.

Jika agent tidak berhasil dalam periode tersebut:

```text
episode selesai
↓
environment reset
```

Max Step mencegah episode berjalan tanpa batas.

---

# 54. LANGKAH 16 — Testing Heuristic

Sebelum melakukan machine learning, **wajib uji environment secara manual**.

Set:

```text
Behavior Type = Heuristic Only
```

Klik:

```text
Play
```

Kontrol Agent:

```text
W / ↑ = maju
S / ↓ = mundur
A / ← = kiri
D / → = kanan
```

Pastikan:

- agent dapat bergerak;
- agent tidak menembus ground;
- agent bisa jatuh;
- agent di-reset ketika jatuh;
- agent di-reset ketika mencapai target;
- posisi target berubah;
- posisi agent berubah.

---

# 55. Mengapa Heuristic Testing Penting?

Jangan langsung menyalahkan PPO jika agent tidak belajar.

Kesalahan mungkin berasal dari:

```text
Action salah
Collision salah
Target tidak memiliki Tag
Target bukan Trigger
Rigidbody salah
Observation salah
Episode tidak selesai
```

Jika manusia menggunakan action yang sama saja tidak dapat menyelesaikan environment, model RL juga akan kesulitan.

---

# 56. LANGKAH 17 — Kembalikan Behavior Type

Setelah testing berhasil:

```text
Behavior Type = Default
```

Jangan biarkan:

```text
Heuristic Only
```

ketika training.

---

# 57. LANGKAH 18 — Membuat Konfigurasi PPO

Buat file:

```text
MoveToTarget.yaml
```

Direkomendasikan ditempatkan pada folder yang mudah diakses trainer, misalnya:

```text
config/MoveToTarget.yaml
```

Isi awal:

```yaml
behaviors:
  MoveToTarget:
    trainer_type: ppo

    hyperparameters:
      batch_size: 1024
      buffer_size: 10240
      learning_rate: 3.0e-4
      beta: 5.0e-3
      epsilon: 0.2
      lambd: 0.95
      num_epoch: 3
      learning_rate_schedule: linear

    network_settings:
      normalize: false
      hidden_units: 128
      num_layers: 2

    reward_signals:
      extrinsic:
        gamma: 0.99
        strength: 1.0

    max_steps: 500000
    time_horizon: 64
    summary_freq: 10000
```

Ini merupakan konfigurasi awal untuk praktikum, bukan parameter universal terbaik untuk semua environment.

ML-Agents menggunakan file YAML untuk menentukan trainer dan hyperparameter; `mlagents-learn` adalah entry point resmi untuk training.

---

# 58. Penjelasan Trainer Type

```yaml
trainer_type: ppo
```

menentukan algoritma yang digunakan:

```text
Proximal Policy Optimization
```

---

# 59. Batch Size

```yaml
batch_size: 1024
```

Batch size adalah jumlah pengalaman yang diproses bersama dalam satu proses update.

Secara konseptual:

```text
pengalaman Agent
↓
dikumpulkan
↓
dibagi ke batch
↓
digunakan memperbarui network
```

---

# 60. Buffer Size

```yaml
buffer_size: 10240
```

Buffer adalah kumpulan pengalaman sebelum proses learning update.

Experience secara sederhana mengandung:

```text
Observation
Action
Reward
Next state / progression
```

---

# 61. Learning Rate

```yaml
learning_rate: 3.0e-4
```

Learning rate menentukan seberapa besar perubahan bobot neural network setiap proses pembelajaran.

Terlalu tinggi:

```text
Training dapat tidak stabil
```

Terlalu rendah:

```text
Learning sangat lambat
```

---

# 62. Hidden Units

```yaml
hidden_units: 128
```

Menentukan jumlah neuron pada hidden layer neural network.

---

# 63. Num Layers

```yaml
num_layers: 2
```

Menentukan jumlah hidden layer.

Untuk problem MoveToTarget sederhana:

```text
2 layer × 128 neuron
```

sudah menjadi starting point yang masuk akal.

---

# 64. Gamma

```yaml
gamma: 0.99
```

Gamma berkaitan dengan seberapa penting future reward.

Secara konsep:

```text
Gamma tinggi
→ Agent lebih mempertimbangkan reward masa depan
```

---

# 65. Max Steps Training

```yaml
max_steps: 500000
```

Jangan tertukar dengan:

```text
Agent Max Step = 500
```

Keduanya berbeda.

### Agent Max Step

Membatasi:

```text
panjang satu episode
```

### Trainer max_steps

Membatasi:

```text
keseluruhan proses training behavior
```

---

# 66. LANGKAH 19 — Memulai Training

Aktifkan environment Python:

```bash
conda activate mlagents
```

Kemudian:

```bash
mlagents-learn config/MoveToTarget.yaml --run-id=MoveToTarget_Run01
```

Jika training dilakukan langsung melalui Unity Editor, parameter `--env` tidak perlu diberikan. Dokumentasi resmi menyebutkan bahwa trainer akan meminta pengguna menekan Play di Unity ketika training melalui editor.

Terminal akan menampilkan pesan yang meminta Unity dijalankan.

---

# 67. LANGKAH 20 — Menjalankan Unity

Setelah trainer siap:

1. kembali ke Unity;
2. buka scene `MLAgents_MoveToTarget`;
3. pastikan `Behavior Type = Default`;
4. tekan:

```text
Play
```

Unity akan terhubung ke Python trainer.

---

# 68. Apa yang Terjadi Selama Training?

Secara berulang:

```text
CollectObservations()
        ↓
PPO policy
        ↓
OnActionReceived()
        ↓
Agent bergerak
        ↓
Reward
        ↓
Observation berikutnya
        ↓
...
```

Python mengumpulkan pengalaman dari agent.

Kemudian PPO memperbarui neural network.

---

# 69. Perilaku Agent pada Awal Training

Pada awal training biasanya agent akan:

- bergerak tidak terarah;
- jatuh;
- berputar;
- menjauh dari target;
- gagal berkali-kali.

Itu **normal**.

Agent belum mengetahui hubungan:

```text
Observation → Action → Reward
```

---

# 70. Perilaku Setelah Belajar

Jika training berjalan baik, perlahan agent mulai:

```text
bergerak ke arah target
↓
mengurangi gerakan acak
↓
mencapai target lebih sering
↓
menyelesaikan episode lebih cepat
```

---

# 71. Cumulative Reward

Salah satu indikator utama training:

```text
Cumulative Reward
```

Cumulative reward adalah total reward yang diperoleh agent dalam suatu episode/periode evaluasi.

Harapan umum:

```text
Awal:
reward rendah

↓ training

Tengah:
reward mulai meningkat

↓ training

Akhir:
reward relatif tinggi dan stabil
```

Namun reward tinggi **harus tetap diperiksa secara visual**.

Jangan hanya melihat angka.

---

# 72. Reward Hacking

Contoh:

Kita memberi reward:

```text
+0.01 setiap kali bergerak mendekati target
```

Tetapi tidak mendesainnya dengan baik.

Agent mungkin belajar:

```text
mendekat
↓
menjauh
↓
mendekat lagi
↓
mendapat reward berulang
```

tanpa menyelesaikan goal.

Itulah salah satu contoh:

## Reward Hacking

Karena itu modul dasar ini menggunakan reward sederhana:

```text
+1 goal
-1 jatuh
-0.001 waktu
```

---

# 73. LANGKAH 21 — Menghentikan Training

Di terminal gunakan:

```text
Ctrl + C
```

satu kali.

ML-Agents akan menyimpan hasil training.

Dokumentasi resmi menyatakan model, summary training, dan timer disimpan dalam:

```text
results/<run-id>
```

dan model final dihasilkan dalam format `.onnx`.

---

# 74. Hasil Training

Contoh:

```text
results/
└── MoveToTarget_Run01/
    ├── MoveToTarget.onnx
    ├── checkpoint...
    └── run_logs/
```

File paling penting untuk Unity:

```text
MoveToTarget.onnx
```

---

# 75. Apa Itu ONNX?

ONNX adalah format model neural network yang memungkinkan model hasil training digunakan kembali untuk inference.

Dalam praktikum:

```text
Training Python
        ↓
MoveToTarget.onnx
        ↓
Unity
        ↓
Behavior Parameters
        ↓
Inference
```

---

# 76. LANGKAH 22 — Import Model ke Unity

Copy:

```text
MoveToTarget.onnx
```

ke:

```text
Assets/Models/
```

Unity akan meng-import model tersebut.

---

# 77. LANGKAH 23 — Memasang Model

Pilih:

```text
Agent
```

Pada:

```text
Behavior Parameters
```

drag model:

```text
MoveToTarget.onnx
```

ke field:

```text
Model
```

Kemudian ubah:

```text
Behavior Type
```

menjadi:

```text
Inference Only
```

---

# 78. LANGKAH 24 — Testing Inference

Tekan:

```text
Play
```

Sekarang:

```text
Python trainer tidak diperlukan.
```

Flow berubah menjadi:

```text
Observation
      ↓
ONNX Policy Model
      ↓
Action
      ↓
Agent bergerak
```

Reward tidak diperlukan untuk memperbarui model pada inference. Dokumentasi ML-Agents menyatakan reward digunakan untuk RL training dan tidak digunakan oleh trained model untuk belajar ketika inference.

---

# 79. Training vs Inference

| Aspek | Training | Inference |
|---|---|---|
| Tujuan | belajar | menggunakan hasil belajar |
| Python trainer | diperlukan | tidak |
| Model berubah | ya | tidak |
| Reward digunakan belajar | ya | tidak |
| PPO | aktif training | tidak melakukan training |
| ONNX | dihasilkan | digunakan |
| Behavior Type | Default | Inference Only |

---

# 80. LANGKAH 25 — Membuat Parallel Training

Setelah satu arena bekerja sempurna, `TrainingArea` dapat dibuat sebagai Prefab.

Drag:

```text
TrainingArea
```

ke:

```text
Assets/Prefabs
```

Kemudian buat beberapa instance.

Contoh:

```text
TrainingArea_01
TrainingArea_02
TrainingArea_03
TrainingArea_04
TrainingArea_05
TrainingArea_06
TrainingArea_07
TrainingArea_08
```

Pisahkan secara fisik:

```text
Area 1 → (0,0,0)
Area 2 → (15,0,0)
Area 3 → (30,0,0)
Area 4 → (45,0,0)
...
```

---

# 81. Mengapa Parallel Training?

Semua agent dapat menggunakan:

```text
Behavior Name = MoveToTarget
```

Artinya pengalaman dari banyak agent digunakan untuk mempelajari policy yang sama.

Contoh:

```text
Agent 1 ─┐
Agent 2 ─┤
Agent 3 ─┼→ PPO → MoveToTarget Policy
Agent 4 ─┤
Agent 5 ─┘
```

Manfaatnya:

- pengalaman terkumpul lebih cepat;
- variasi episode lebih banyak;
- training lebih efisien.

---

# 82. Mengapa localPosition Digunakan?

Bayangkan:

```text
TrainingArea_01 position = (0,0,0)

TrainingArea_02 position = (20,0,0)
```

Jika script menggunakan:

```text
transform.position
```

agent pada area kedua memiliki world coordinate sekitar:

```text
X = 20
```

padahal secara lokal posisinya mungkin:

```text
X = 0
```

Dengan:

```text
localPosition
```

semua environment mempunyai sistem koordinat lokal yang seragam.

Ini penting untuk parallel environment.

---

# 83. Eksperimen 1 — Menghilangkan Step Penalty

Ubah:

```text
Step Penalty = 0
```

Train ulang:

```bash
mlagents-learn config/MoveToTarget.yaml --run-id=NoStepPenalty
```

Amati:

- apakah agent tetap mencapai target?
- apakah lebih lambat?
- apakah episode lebih panjang?

---

# 84. Eksperimen 2 — Penalty Terlalu Besar

Ubah:

```text
Step Penalty = -0.05
```

Pertanyaan:

> Apakah agent masih dapat belajar?

Diskusikan mengapa excessive negative reward dapat menghambat proses learning.

---

# 85. Eksperimen 3 — Observation Dikurangi

Hilangkan velocity observation.

Observation menjadi:

```text
direction.x
direction.z
distance
```

Maka:

```text
Space Size = 3
```

Train ulang.

Bandingkan dengan:

```text
Space Size = 5
```

Pertanyaan:

> Apakah velocity membantu agent mengendalikan momentum?

---

# 86. Eksperimen 4 — Decision Period

Bandingkan:

```text
Decision Period = 1
```

dengan:

```text
Decision Period = 5
```

dan:

```text
Decision Period = 10
```

Analisis:

- responsivitas agent;
- kestabilan movement;
- kecepatan training;
- kemampuan mencapai target.

---

# 87. Eksperimen 5 — Fixed Target

Nonaktifkan randomisasi Target.

Gunakan posisi:

```text
Target = (3, 0.75, 3)
```

Training.

Kemudian pindahkan target setelah model selesai.

Pertanyaan:

> Apakah agent mampu mencapai posisi target baru?

Eksperimen ini menunjukkan pentingnya:

```text
generalization
```

dan:

```text
environment randomization
```

---

# 88. Pengembangan Lanjutan — Obstacle

Setelah praktikum dasar berhasil, tambahkan:

```text
Cube
```

sebagai:

```text
Obstacle
```

Agent sekarang harus:

```text
mencapai target
+
menghindari obstacle
```

Namun observation sekarang mungkin belum cukup.

Agent mengetahui target tetapi:

```text
tidak mengetahui obstacle
```

Solusinya adalah menambahkan sensor.

---

# 89. Ray Perception Sensor

Salah satu pengembangan yang sesuai materi adalah:

```text
Ray Perception Sensor
```

Sensor tersebut memungkinkan agent mendeteksi:

- wall;
- obstacle;
- target;
- jarak objek.

Struktur:

```text
Agent
├── MoveToTargetAgent
├── Behavior Parameters
├── Decision Requester
└── Ray Perception Sensor
```

Untuk praktikum utama saya **tidak merekomendasikan langsung memakai Ray Sensor**, karena mahasiswa sebaiknya terlebih dahulu memahami vector observation.

---

# 90. Vector Observation vs Ray Observation

| Vector | Ray |
|---|---|
| angka eksplisit | perception berbasis ray |
| sederhana | lebih kompleks |
| training relatif mudah | observation lebih banyak |
| ideal untuk praktikum awal | ideal pengembangan |
| posisi/jarak/velocity | obstacle/wall/target |

---

# 91. Troubleshooting — Agent Tidak Bergerak

Periksa:

```text
Rigidbody terpasang?
```

Kemudian:

```text
Move Force > 0?
```

Periksa:

```text
Continuous Actions = 2?
```

Periksa:

```text
Decision Requester ada?
```

Periksa juga:

```text
Behavior Type
```

Jika inference:

```text
Model sudah dipasang?
```

---

# 92. Troubleshooting — IndexOutOfRangeException

Jika terjadi pada:

```csharp
actions.ContinuousActions[1]
```

kemungkinan:

```text
Continuous Actions bukan 2.
```

Set:

```text
Behavior Parameters
→ Actions
→ Continuous Actions = 2
```

---

# 93. Troubleshooting — Observation Tidak Cocok

Script menghasilkan:

```text
5 observation
```

Maka Inspector harus:

```text
Space Size = 5
```

Hitung:

```text
direction.x = 1
direction.z = 1
distance    = 1
velocity.x  = 1
velocity.z  = 1
----------------
TOTAL       = 5
```

---

# 94. Troubleshooting — Target Tidak Terdeteksi

Periksa target:

```text
Collider ada?
Is Trigger ON?
Tag = Target?
```

Periksa Agent:

```text
Collider ada?
Rigidbody ada?
```

Pastikan penulisan:

```csharp
CompareTag("Target")
```

sama persis.

---

# 95. Troubleshooting — Agent Tidak Reset Ketika Jatuh

Periksa:

```csharp
if (transform.localPosition.y < -1f)
```

Jika platform terlalu rendah, sesuaikan threshold.

Contoh:

```csharp
if (transform.localPosition.y < -2f)
```

---

# 96. Troubleshooting — mlagents-learn Tidak Dikenali

Pastikan virtual environment aktif:

```bash
conda activate mlagents
```

Lalu:

```bash
mlagents-learn --help
```

Jika tidak ditemukan, periksa kembali instalasi package Python ML-Agents.

---

# 97. Troubleshooting — Unity Tidak Terhubung ke Trainer

Urutan harus:

```text
1. Jalankan mlagents-learn
2. Tunggu pesan trainer
3. Buka Unity
4. Tekan Play
```

Pastikan:

```text
Behavior Type = Default
```

bukan:

```text
Heuristic Only
```

atau:

```text
Inference Only
```

---

# 98. Troubleshooting — Agent Bergerak Acak Terus

Kemungkinan:

1. Training masih terlalu awal.
2. Reward terlalu lemah.
3. Observation salah.
4. Action mapping salah.
5. Target sulit dicapai.
6. Agent terlalu cepat.
7. Episode terlalu pendek.
8. PPO belum memiliki cukup pengalaman.

Pertama-tama uji:

```text
Heuristic Only
```

Jika manual control berhasil, environment kemungkinan sudah benar.

---

# 99. Troubleshooting — Reward Naik tetapi Agent Aneh

Jangan langsung menyimpulkan model bagus hanya karena:

```text
Cumulative Reward ↑
```

Lihat agent secara visual.

Mungkin terjadi:

```text
Reward Hacking
```

Pertanyaan utama:

> Apakah agent benar-benar menyelesaikan tujuan yang kita inginkan?

---

# 100. Rekomendasi Praktikum Terbaik

Untuk Praktikum 14, saya merekomendasikan konfigurasi utama berikut:

```text
Environment:
Arena 3D sederhana

Agent:
Sphere dengan Rigidbody

Observation:
5 vector observations

Action:
2 continuous actions

Reward:
+1 target
-1 jatuh
-0.001 per decision

Episode:
Random Agent
Random Target
Max Step 500

Algorithm:
PPO

Decision Period:
5

Training:
500.000 max trainer steps
```

---

# 101. Mengapa Pilihan Ini Direkomendasikan?

## Pertama — Konsepnya lengkap

Dalam satu project mahasiswa mempraktikkan:

```text
Agent
Environment
Observation
Action
Reward
Episode
Policy
PPO
Training
Inference
```

## Kedua — Visual dan mudah diamati

Keberhasilan model dapat terlihat langsung:

```text
Agent bergerak menuju Target.
```

## Ketiga — Tidak terlalu kompleks

Kita belum membutuhkan:

- visual observation;
- multi-agent competition;
- self-play;
- curriculum;
- imitation learning;
- complex ray sensors.

## Keempat — Mudah dikembangkan

Setelah dasar berhasil dapat ditambah:

```text
Obstacle
Ray Sensor
Moving Target
Multiple Target
Parallel Arena
Curriculum
```

## Kelima — Cocok untuk membandingkan AI klasik dan learning AI

Mahasiswa dapat membandingkan:

```text
NavMeshAgent
vs
ML-Agent
```

Pada NavMesh:

```text
developer menentukan mekanisme navigasi.
```

Pada ML-Agent:

```text
developer mendesain observation,
action dan reward,
kemudian agent belajar policy.
```

---

# 102. Hal yang Tidak Direkomendasikan untuk Praktikum Pertama

Jangan langsung memulai dengan:

```text
Visual Observation
+
Camera Sensor
+
10 obstacle
+
moving target
+
multiple agents
+
self-play
```

Problem yang terlalu kompleks membuat mahasiswa sulit menentukan apakah kegagalan berasal dari:

```text
Observation?
Reward?
Action?
Environment?
Hyperparameter?
Sensor?
Physics?
```

Gunakan prinsip:

```text
Simple Environment
↓
Training berhasil
↓
Tambah kompleksitas bertahap
```

---

# 103. Tahapan Pengembangan yang Direkomendasikan

## Level 1 — Basic

```text
MoveToTarget
tanpa obstacle
```

## Level 2 — Randomization

```text
Random Agent
Random Target
```

## Level 3 — Obstacle

```text
Tambahkan obstacle
```

## Level 4 — Perception

```text
Ray Perception Sensor
```

## Level 5 — Parallel Training

```text
8–16 TrainingArea
```

## Level 6 — Advanced Experiment

```text
Moving Target
Curriculum
Reward Shaping
```

Dengan tahapan tersebut mahasiswa dapat memahami efek setiap perubahan.

---

# 104. Tugas Praktikum Mahasiswa

Mahasiswa wajib menghasilkan:

1. Project Unity yang dapat dijalankan.
2. TrainingArea.
3. Agent berbasis ML-Agents.
4. Random target.
5. Continuous action.
6. Vector observation.
7. Reward dan penalty.
8. Episode reset.
9. PPO configuration.
10. Minimal satu hasil training.
11. File `.onnx`.
12. Agent inference yang berhasil menuju target.

---

# 105. Eksperimen Wajib

Lakukan minimal dua training:

## Training A

```text
stepPenalty = -0.001
Decision Period = 5
```

## Training B

Ubah salah satu:

```text
stepPenalty
Decision Period
Observation
Max Step
```

Bandingkan hasilnya.

---

# 106. Data yang Dicatat

Buat tabel:

| Run | Observation | Reward | Decision Period | Hasil |
|---|---|---|---:|---|
| Run01 | Direction + Distance + Velocity | +1/-1/-0.001 | 5 | ... |
| Run02 | ... | ... | ... | ... |

Tambahkan:

```text
Waktu training:
Cumulative reward:
Perilaku:
Success rate:
Catatan:
```

---

# 107. Pertanyaan Analisis

Jawab pertanyaan berikut.

### 1.
Apa fungsi `Agent` dalam Unity ML-Agents?

### 2.
Apa perbedaan Agent dan Environment?

### 3.
Mengapa target diberikan sebagai posisi relatif?

### 4.
Mengapa velocity diberikan sebagai observation?

### 5.
Mengapa jumlah observation harus konsisten?

### 6.
Mengapa praktikum menggunakan Continuous Action?

### 7.
Apa fungsi `AddReward()`?

### 8.
Apa fungsi `EndEpisode()`?

### 9.
Apa akibatnya jika reward target terlalu kecil?

### 10.
Apa akibatnya jika step penalty terlalu besar?

### 11.
Mengapa posisi target di-random?

### 12.
Apa fungsi `Behavior Parameters`?

### 13.
Apa fungsi `Decision Requester`?

### 14.
Apa perbedaan `Default`, `Heuristic Only`, dan `Inference Only`?

### 15.
Apa fungsi `Heuristic()`?

### 16.
Apa yang dimaksud Policy?

### 17.
Apa fungsi PPO?

### 18.
Apa perbedaan training dan inference?

### 19.
Mengapa reward tinggi belum tentu berarti behavior agent benar?

### 20.
Apa yang dimaksud reward hacking?

---

# 108. Tantangan Tambahan

Bagi mahasiswa yang telah menyelesaikan praktikum dasar:

## Challenge 1

Tambahkan obstacle.

## Challenge 2

Tambahkan Ray Perception Sensor.

## Challenge 3

Berikan penalty ketika menabrak obstacle.

## Challenge 4

Buat moving target.

## Challenge 5

Buat 8 parallel training areas.

## Challenge 6

Bandingkan:

```text
Sparse Reward
vs
Reward Shaping
```

## Challenge 7

Uji model pada arena yang berbeda dari arena training.

---

# 109. Checklist Keberhasilan

- [ ] Project Unity dapat dibuka tanpa error.
- [ ] Package ML-Agents terpasang.
- [ ] Python ML-Agents trainer dapat dijalankan.
- [ ] TrainingArea dibuat.
- [ ] Ground mempunyai collider.
- [ ] Agent mempunyai Rigidbody dan Collider.
- [ ] Target mempunyai Collider `Is Trigger`.
- [ ] Tag `Target` sudah benar.
- [ ] `MoveToTargetAgent.cs` terpasang.
- [ ] Target reference sudah diisi.
- [ ] `Behavior Parameters` terpasang.
- [ ] Behavior Name adalah `MoveToTarget`.
- [ ] Vector Observation Space Size adalah `5`.
- [ ] Continuous Actions adalah `2`.
- [ ] `Decision Requester` terpasang.
- [ ] Max Step diatur.
- [ ] Heuristic dapat dikendalikan WASD.
- [ ] Agent reset ketika jatuh.
- [ ] Agent reset ketika mencapai target.
- [ ] Target di-random setiap episode.
- [ ] File PPO YAML tersedia.
- [ ] `mlagents-learn` berhasil tersambung ke Unity.
- [ ] Training berhasil berjalan.
- [ ] Model `.onnx` berhasil dihasilkan.
- [ ] Model dapat dimasukkan ke Unity.
- [ ] Behavior Type dapat dijalankan sebagai `Inference Only`.
- [ ] Trained agent mampu mencapai target.

---

# 110. Kesimpulan Praktikum

Praktikum ini memperlihatkan perbedaan mendasar antara AI berbasis aturan dengan learning-based AI.

Pada AI klasik developer dapat menulis:

```text
IF target berada di kanan
THEN bergerak ke kanan
```

Pada Unity ML-Agents developer tidak menentukan rule tersebut secara langsung.

Developer menentukan:

```text
Environment
+
Observation
+
Action
+
Reward
+
Episode
```

Kemudian:

```text
Agent
   ↓
mengalami banyak episode
   ↓
mengumpulkan reward
   ↓
PPO memperbaiki policy
   ↓
Agent belajar behavior
```

Konsep terpenting dari praktikum ini bukan sekadar:

```text
menjalankan mlagents-learn
```

melainkan memahami bahwa:

> **Kualitas perilaku agent sangat ditentukan oleh bagaimana developer mendesain observation, action, reward, dan episode.**

Jika observation tidak cukup:

```text
Agent tidak mengetahui informasi
yang diperlukan untuk memecahkan masalah.
```

Jika action salah:

```text
Agent tidak memiliki kontrol yang tepat.
```

Jika reward salah:

```text
Agent dapat mempelajari perilaku
yang berbeda dari tujuan developer.
```

Jika episode salah:

```text
Training menjadi tidak konsisten.
```

Karena itu workflow yang direkomendasikan adalah:

```text
Buat environment sederhana
        ↓
Validasi physics
        ↓
Validasi dengan Heuristic
        ↓
Validasi Observation
        ↓
Validasi Action
        ↓
Validasi Reward
        ↓
Training PPO
        ↓
Evaluasi behavior
        ↓
Export model
        ↓
Inference
        ↓
Tambah kompleksitas
```

---

# 111. Ringkasan Teknis

```text
PROJECT
GC14_MLAgents_MoveToTarget_PPO

SCENE
MLAgents_MoveToTarget

BEHAVIOR
MoveToTarget

AGENT
MoveToTargetAgent.cs

OBSERVATION
5 vector values

ACTION
2 continuous actions

REWARD
+1.0 target
-1.0 fall
-0.001 step

EPISODE
Goal / Fall / Max Step

MAX STEP
500

DECISION PERIOD
5

TRAINER
PPO

TRAINER MAX STEPS
500000

MODEL OUTPUT
MoveToTarget.onnx

TRAINING MODE
Default

DEBUG MODE
Heuristic Only

FINAL MODE
Inference Only
```

---

# 112. Alur Akhir Praktikum

```text
UNITY ENVIRONMENT
       │
       ├── Agent
       ├── Target
       └── Ground
             │
             ▼
     CollectObservations()
             │
             ▼
       PPO POLICY
             │
             ▼
      Continuous Action
        moveX / moveZ
             │
             ▼
      Rigidbody Movement
             │
             ▼
          REWARD
       ┌─────┴─────┐
       │           │
    Goal +1     Fall -1
       │           │
       └─────┬─────┘
             ▼
        EndEpisode()
             │
             ▼
        Random Reset
             │
             ▼
          TRAINING
             │
             ▼
       POLICY MODEL
             │
             ▼
    MoveToTarget.onnx
             │
             ▼
        INFERENCE
```

---

# Catatan Pengajar

Untuk pelaksanaan kuliah, urutan yang paling efektif adalah:

```text
1. Demonstrasikan agent dengan Heuristic.
2. Tunjukkan 5 observation yang digunakan.
3. Tunjukkan 2 continuous action.
4. Jelaskan reward +1, -1 dan -0.001.
5. Jalankan training.
6. Biarkan mahasiswa melihat agent bergerak acak.
7. Tunjukkan perkembangan behavior.
8. Pasang model ONNX.
9. Jalankan inference tanpa Python.
10. Baru lakukan eksperimen reward/observation.
```

Jangan memulai praktikum dengan obstacle atau Ray Sensor.

Target utama Praktikum 14 adalah memastikan mahasiswa benar-benar memahami hubungan:

```text
Observation
    ↓
Policy
    ↓
Action
    ↓
Reward
    ↓
Learning
```

Setelah hubungan tersebut dipahami, obstacle, Ray Perception Sensor, curriculum learning, dan parallel training dapat diberikan sebagai pengembangan.