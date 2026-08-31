# Game Cerdas — Pertemuan 14
## Reinforcement Learning with Unity ML-Agents

**Program Studi S1 Teknik Informatika**  
**Tools:**  Unity 6 + Unity ML-Agents + C#  
**Posisi materi:**  Lanjutan Pertemuan 13 — Machine Learning for Games

---

# Slide 1 — Cover

## Reinforcement Learning with Unity ML-Agents

**Game Cerdas — Pertemuan 14**  
Pokok bahasan:
- Agent
- Observation
- Action
- Reward
- Episode
- Policy
- PPO secara konseptual
- Unity ML-Agents workflow

Praktikum yang akan dibuat terpisah: **Training agent menggunakan Unity ML-Agents**  
> Fokus pertemuan ini adalah memahami bagaimana Unity dapat digunakan sebagai environment untuk melatih agent berbasis Reinforcement Learning.

---

# Slide 2 — Review Pertemuan 13

Pada Pertemuan 13 kita mempelajari:

```text
Machine Learning for Games
├�”€─ Supervised Learning
├�”€─ Reinforcement Learning
├�”€─ State
├�”€─ Action
├�”€─ Reward
├�”€─ Q-Learning
└�”€─ Unity ML-Agents Introduction
```

Inti Reinforcement Learning:

```text
Agent mencoba action
        ↓
Environment berubah
        ↓
Agent menerima reward
        ↓
Agent belajar policy
```

Pertemuan 14 memperdalam implementasi RL menggunakan Unity ML-Agents.

---

# Slide 3 — Posisi Pertemuan 14 dalam Rencana Pembelajaran

Alur pembelajaran:

```text
Pertemuan 13
Machine Learning for Games
        ↓
Pertemuan 14
Reinforcement Learning with Unity ML-Agents
        ↓
Pertemuan 15
Advanced Game AI & Final Project Development
        ↓
Pertemuan 16
UAS Intelligent Game Project
```

Pertemuan 14 merupakan pengantar praktis menuju:

```text
Learning-Based Agent di Unity
```

---

# Slide 4 — Mengapa Unity ML-Agents?

Unity ML-Agents memungkinkan Unity digunakan sebagai environment training.

Dengan ML-Agents, mahasiswa dapat:
- membuat agent di Unity,
- mendefinisikan observation,
- mendefinisikan action,
- memberikan reward,
- menjalankan episode,
- melatih policy,
- menggunakan model hasil training di game.

Unity menjadi simulator untuk Reinforcement Learning.

---

# Slide 5 — Rule-Based AI vs ML-Agents

## Rule-Based AI

Developer menulis aturan.

```text
Jika target terlihat:
    kejar target
```

## ML-Agents

Developer mendefinisikan:
- apa yang diamati agent,
- action apa yang dapat dilakukan,
- reward apa yang baik/buruk.

Agent belajar sendiri melalui training.

```text
Observation + Action + Reward
        ↓
Training
        ↓
Policy
```

---

# Slide 6 — Kapan Unity ML-Agents Cocok?

Unity ML-Agents cocok untuk:
- agent belajar mencapai target,
- agent menghindari obstacle,
- robot balancing,
- NPC belajar navigasi sederhana,
- agent belajar strategi sederhana,
- eksperimen RL dalam environment visual,
- simulasi perilaku.

Untuk Game Cerdas S1, ML-Agents cocok sebagai pengenalan konsep RL modern, bukan menggantikan FSM/BT/NavMesh sepenuhnya.

---

# Slide 7 — Kapan ML-Agents Tidak Perlu?

ML-Agents tidak selalu diperlukan.

Untuk kasus berikut, teknik klasik lebih praktis:
- patrol sederhana,
- chase player,
- attack dengan jarak,
- pathfinding ke target,
- decision tree sederhana,
- tactical AI yang perlu kontrol penuh.

Jika behavior bisa dibuat jelas dengan FSM, Behavior Tree, Utility AI, dan NavMesh, maka ML-Agents mungkin terlalu kompleks.

---

# Slide 8 — Capaian Pembelajaran Pertemuan

Setelah pertemuan ini, mahasiswa diharapkan mampu:

1. Menjelaskan konsep Unity ML-Agents.
2. Menjelaskan agent, environment, observation, action, reward, episode, dan policy.
3. Menjelaskan workflow training agent di Unity.
4. Menjelaskan Behavior Parameters dan Decision Requester.
5. Menjelaskan peran reward design dalam training.
6. Menjelaskan PPO secara konseptual.
7. Mendesain environment training sederhana.
8. Menjelaskan proses training dan inference.
9. Mengidentifikasi masalah umum dalam training RL.
10. Merancang praktikum training agent menggunakan Unity ML-Agents.

---

# Slide 9 — Apa Itu Unity ML-Agents?

**Unity ML-Agents** adalah toolkit yang memungkinkan pengembangan dan pelatihan agent cerdas di Unity menggunakan machine learning.

Komponen utama:
- Unity environment,
- agent script,
- observation,
- action,
- reward,
- trainer,
- policy model.

ML-Agents biasanya menggunakan training pipeline berbasis Python untuk melatih policy.

Setelah training, model dapat digunakan kembali di Unity.

---

# Slide 10 — Konsep Dasar Reinforcement Learning

Reinforcement Learning terdiri dari:

```text
Agent
Environment
State / Observation
Action
Reward
Policy
Episode
```

Loop:

```text
Agent mengamati environment
        ↓
Agent memilih action
        ↓
Environment berubah
        ↓
Agent menerima reward
        ↓
Agent memperbaiki policy
```

Tujuan agent:

```text
memaksimalkan total reward
```

---

# Slide 11 — Agent

**Agent** adalah entitas yang belajar mengambil keputusan.

Dalam Unity:
- agent biasanya berupa GameObject,
- memiliki script turunan dari `Agent`,
- dapat menerima observation,
- dapat mengeluarkan action,
- menerima reward,
- menjalankan episode.

Contoh agent:
- robot,
- karakter,
- mobil,
- drone,
- NPC,
- bola,
- unit game.

---

# Slide 12 — Environment

**Environment** adalah dunia tempat agent belajar.

Dalam Unity, environment dapat berupa:
- arena,
- level,
- grid world,
- maze,
- platform,
- racing track,
- combat arena.

Environment menyediakan:
- kondisi awal,
- target,
- obstacle,
- aturan reward,
- kondisi selesai episode.

Contoh:

```text
Agent harus mencapai target di arena
tanpa jatuh atau menabrak obstacle.
```

---

# Slide 13 — Agent dan Environment dalam Unity

Struktur scene sederhana:

```text
TrainingArea
├�”€─ Ground
├�”€─ Agent
├�”€─ Target
├�”€─ Obstacle
└�”€─ Boundary
```

Agent:
- membaca posisi target,
- memilih arah gerak,
- bergerak,
- mendapat reward jika berhasil,
- episode di-reset jika gagal.

Environment perlu didesain agar agent dapat belajar dari banyak percobaan.

---

# Slide 14 — Observation

**Observation** adalah informasi yang diberikan kepada agent.

Observation menjawab:

```text
Apa yang diketahui agent tentang environment?
```

Contoh:
- posisi agent,
- posisi target,
- arah ke target,
- jarak ke target,
- velocity agent,
- raycast sensor,
- posisi obstacle,
- health,
- ammo.

Observation sangat memengaruhi kemampuan belajar agent.

---

# Slide 15 — Observation Harus Relevan

Observation yang baik:
- cukup untuk menyelesaikan tugas,
- tidak terlalu sedikit,
- tidak terlalu berlebihan,
- mudah dipelajari,
- memiliki skala nilai yang wajar.

Contoh buruk:

```text
Agent harus mencapai target,
tetapi tidak diberi posisi target.
```

Agent sulit belajar.

Contoh baik:

```text
Agent diberi posisi target relatif terhadap dirinya.
```

---

# Slide 16 — Absolute vs Relative Observation

## Absolute Observation

```text
Agent position = (10, 0, 3)
Target position = (15, 0, 8)
```

## Relative Observation

```text
Direction to target = target position - agent position
```

Relative observation sering lebih berguna karena agent belajar hubungan antar objek, bukan posisi dunia tertentu.

Contoh Unity:

```csharp
Vector3 toTarget = target.position - transform.position;
sensor.AddObservation(toTarget);
```

---

# Slide 17 — Observation di Unity ML-Agents

Method:

```csharp
public override void CollectObservations(VectorSensor sensor)
{
    sensor.AddObservation(transform.localPosition);
    sensor.AddObservation(target.localPosition);
}
```

Contoh tambahan:

```csharp
sensor.AddObservation(rb.linearVelocity);
sensor.AddObservation(distanceToTarget);
```

Observation harus konsisten jumlah dan urutannya.

Jika jumlah observation berubah-ubah, training akan bermasalah.

---

# Slide 18 — Vector Observation

Vector observation adalah observation berupa angka.

Contoh:

```text
Agent X
Agent Z
Target X
Target Z
Velocity X
Velocity Z
Distance
```

Vector observation cocok untuk:
- posisi,
- velocity,
- health,
- distance,
- boolean,
- skor.

Untuk praktikum awal, vector observation sudah cukup.

---

# Slide 19 — Ray Observation

Ray observation menggunakan sensor ray untuk mendeteksi objek.

Contoh:
- obstacle di depan,
- wall di samping,
- target terlihat atau tidak,
- jarak ke objek.

Ray sensor cocok untuk:
- navigasi,
- obstacle avoidance,
- agent yang tidak diberi koordinat lengkap,
- simulasi perception.

Unity ML-Agents menyediakan Ray Perception Sensor.

---

# Slide 20 — Visual Observation

Visual observation menggunakan kamera sebagai input.

Agent belajar dari image.

Contoh:
- agent melihat layar,
- agent belajar dari visual seperti manusia,
- game berbasis pixel/image.

Namun visual observation lebih berat:
- training lebih lama,
- model lebih kompleks,
- butuh lebih banyak data.

Untuk praktikum awal, gunakan vector observation.

---

# Slide 21 — Action

**Action** adalah perintah yang dikeluarkan agent ke environment.

Action menjawab:

```text
Apa yang dapat dilakukan agent?
```

Contoh:
- bergerak maju,
- bergerak mundur,
- belok kiri,
- belok kanan,
- lompat,
- menyerang,
- memilih skill,
- memilih target.

Action harus sesuai dengan kontrol yang ingin dipelajari agent.

---

# Slide 22 — Continuous Action

Continuous action memiliki nilai real.

Contoh:

```text
moveX = -1.0 sampai 1.0
moveZ = -1.0 sampai 1.0
```

Cocok untuk:
- movement halus,
- kontrol robot,
- kendaraan,
- steering.

Unity:

```csharp
float moveX = actions.ContinuousActions[0];
float moveZ = actions.ContinuousActions[1];
```

---

# Slide 23 — Discrete Action

Discrete action memilih dari daftar aksi.

Contoh:

```text
0 = diam
1 = maju
2 = mundur
3 = kiri
4 = kanan
```

Cocok untuk:
- grid movement,
- action selection,
- skill selection,
- keputusan taktis.

Unity:

```csharp
int action = actions.DiscreteActions[0];
```

---

# Slide 24 — Continuous vs Discrete Action

| Aspek | Continuous | Discrete |
|---|---|---|
| Output | nilai real | pilihan kategori |
| Cocok untuk | movement halus | pilihan aksi |
| Contoh | moveX, moveZ | Attack, Flee, Jump |
| Training | bisa lebih kompleks | lebih mudah dipahami |
| Praktikum awal | cocok untuk movement arena | cocok untuk grid/action |

Untuk agent mencapai target di arena 3D, continuous action sering digunakan.

---

# Slide 25 — Action di Unity ML-Agents

Method:

```csharp
public override void OnActionReceived(ActionBuffers actions)
{
    float moveX = actions.ContinuousActions[0];
    float moveZ = actions.ContinuousActions[1];

    Vector3 move = new Vector3(moveX, 0f, moveZ);
    rb.AddForce(move * moveSpeed);
}
```

Action dari model diterjemahkan menjadi gerakan GameObject.

---

# Slide 26 — Reward

**Reward** adalah feedback angka yang diberikan kepada agent.

Reward menjawab:

```text
Apakah action agent baik atau buruk?
```

Contoh:
- mencapai target → reward positif,
- jatuh → reward negatif,
- menabrak obstacle → reward negatif,
- bergerak mendekati target → reward kecil positif,
- terlalu lama → penalty kecil.

Reward menentukan perilaku yang akan dipelajari agent.

---

# Slide 27 — Reward Design

Reward design adalah bagian paling penting dalam RL.

Reward harus:
- mencerminkan tujuan game,
- tidak terlalu ambigu,
- tidak membuka celah reward hacking,
- cukup sering agar agent belajar,
- tidak membuat agent mengambil shortcut aneh.

Contoh reward sederhana:

```text
+1.0 jika mencapai target
-1.0 jika jatuh
-0.01 setiap step
```

---

# Slide 28 — Sparse Reward

Sparse reward diberikan hanya saat event besar.

Contoh:

```text
+1 jika mencapai target
0 selain itu
```

Kelebihan:
- sederhana,
- jelas.

Kekurangan:
- agent sulit belajar jika target jarang tercapai,
- training bisa lama.

Sparse reward cocok untuk environment sangat sederhana.

---

# Slide 29 — Dense Reward

Dense reward diberikan lebih sering.

Contoh:

```text
+0.01 jika mendekati target
-0.01 jika menjauh
```

Kelebihan:
- agent mendapat feedback lebih sering,
- training bisa lebih cepat.

Kekurangan:
- reward design lebih sulit,
- bisa menyebabkan behavior yang tidak diinginkan.

Untuk praktikum, kombinasi sparse + penalty step sudah cukup.

---

# Slide 30 — Reward Hacking

Reward hacking terjadi ketika agent memaksimalkan reward dengan cara yang tidak sesuai tujuan.

Contoh:
- agent berputar untuk mendapat reward kecil,
- agent menghindari goal karena reward lain lebih mudah,
- agent menabrak object tertentu jika reward salah,
- agent diam jika penalty gerak terlalu besar.

Solusi:
- uji reward,
- debug behavior,
- hindari reward yang kontradiktif,
- buat kondisi episode jelas.

---

# Slide 31 — AddReward dan SetReward

Unity ML-Agents menyediakan:

```csharp
AddReward(value);
SetReward(value);
```

## AddReward

Menambahkan reward ke reward saat ini.

```csharp
AddReward(0.1f);
```

## SetReward

Mengganti reward saat ini dengan nilai baru.

```csharp
SetReward(1.0f);
```

Untuk praktikum awal, `AddReward()` sering lebih mudah dipahami.

---

# Slide 32 — Episode

**Episode** adalah satu percobaan belajar.

Contoh episode:
- agent mulai dari posisi awal,
- agent bergerak mencari target,
- episode selesai jika target dicapai,
- episode selesai jika agent jatuh,
- episode selesai jika step maksimum tercapai.

Setelah episode selesai:
- environment di-reset,
- agent mencoba lagi,
- training berlanjut.

---

# Slide 33 — OnEpisodeBegin()

Method:

```csharp
public override void OnEpisodeBegin()
{
    transform.localPosition = GetRandomStartPosition();
    target.localPosition = GetRandomTargetPosition();
    rb.linearVelocity = Vector3.zero;
    rb.angularVelocity = Vector3.zero;
}
```

Fungsi:
- reset agent,
- reset target,
- reset velocity,
- reset environment.

Episode reset harus konsisten agar training stabil.

---

# Slide 34 — EndEpisode()

Episode diakhiri dengan:

```csharp
EndEpisode();
```

Contoh:

```csharp
if (reachedTarget)
{
    AddReward(1.0f);
    EndEpisode();
}

if (fellOffPlatform)
{
    AddReward(-1.0f);
    EndEpisode();
}
```

Setelah `EndEpisode()`, ML-Agents akan memanggil `OnEpisodeBegin()` untuk episode berikutnya.

---

# Slide 35 — Max Step

Max Step membatasi panjang episode.

Contoh:

```text
Max Step = 500
```

Jika agent tidak berhasil setelah 500 decision step, episode selesai.

Manfaat:
- mencegah episode terlalu lama,
- mempercepat training,
- memberi batas eksplorasi.

Jika max step terlalu pendek, agent tidak punya cukup waktu belajar.

Jika terlalu panjang, training lambat.

---

# Slide 36 — Policy

**Policy** adalah strategi agent dalam memilih action berdasarkan observation.

Dalam ML-Agents, policy dihasilkan dari training.

Contoh:

```text
Observation:
target berada di kanan

Policy:
pilih action bergerak ke kanan
```

Policy adalah hasil akhir pembelajaran.

Setelah training selesai, policy dapat digunakan dalam mode inference.

---

# Slide 37 — Training vs Inference

## Training

Agent masih belajar.

Ciri:
- model diperbarui,
- reward dicatat,
- banyak episode,
- eksplorasi masih terjadi.

## Inference

Agent menggunakan model hasil training.

Ciri:
- model tidak diperbarui,
- agent menjalankan policy,
- cocok untuk game final,
- behavior lebih stabil.

Unity ML-Agents dapat menggunakan model hasil training di Behavior Parameters.

---

# Slide 38 — Behavior Parameters

`Behavior Parameters` adalah komponen penting pada agent.

Mengatur:
- Behavior Name,
- Observation space,
- Action space,
- Model,
- Behavior Type,
- Team ID,
- inference device.

Behavior Type:
- Default,
- Heuristic Only,
- Inference Only.

Untuk training, biasanya gunakan `Default`.

---

# Slide 39 — Decision Requester

`Decision Requester` menentukan kapan agent meminta keputusan/action.

Contoh:
- setiap 5 physics step,
- setiap 1 step,
- secara manual.

Jika terlalu sering:
- training bisa mahal,
- agent terlalu reaktif.

Jika terlalu jarang:
- agent kurang responsif.

Untuk praktikum awal, Decision Period sederhana sudah cukup.

---

# Slide 40 — Heuristic()

`Heuristic()` digunakan untuk kontrol manual.

Contoh:
- WASD menggerakkan agent,
- testing environment,
- membandingkan manusia dengan model,
- memastikan action mapping benar.

Contoh:

```csharp
public override void Heuristic(in ActionBuffers actionsOut)
{
    var continuousActions = actionsOut.ContinuousActions;
    continuousActions[0] = Input.GetAxis("Horizontal");
    continuousActions[1] = Input.GetAxis("Vertical");
}
```

Sebelum training, heuristic sangat berguna untuk debugging.

---

# Slide 41 — PPO secara Konseptual

**PPO** adalah singkatan dari**Proximal Policy Optimization**.

PPO adalah algoritma reinforcement learning yang umum digunakan dalam Unity ML-Agents.

Secara konsep, PPO:
- belajar policy dari pengalaman agent,
- mencoba meningkatkan policy secara bertahap,
- menjaga perubahan policy agar tidak terlalu ekstrem,
- cocok untuk banyak tugas continuous dan discrete control.

Mahasiswa tidak perlu menghafal matematika PPO secara mendalam pada pengantar ini.

---

# Slide 42 — Mengapa PPO Digunakan?

PPO populer karena:
- relatif stabil,
- dapat digunakan untuk continuous action,
- dapat digunakan untuk discrete action,
- cocok untuk simulasi Unity,
- menjadi default yang baik untuk banyak kasus ML-Agents.

PPO tidak mencari path seperti A*.  
PPO belajar policy melalui banyak percobaan dan reward.

---

# Slide 43 — PPO vs Q-Learning

| Aspek | Q-Learning | PPO |
|---|---|---|
| Representasi | Q-table | policy neural network |
| State | biasanya diskrit | bisa kontinu/kompleks |
| Action | sederhana | discrete/continuous |
| Skala | kecil | lebih besar |
| Implementasi | mudah ditulis manual | melalui trainer |
| Cocok untuk | grid world kecil | Unity simulation |

Q-learning cocok untuk memahami dasar RL.  
PPO cocok untuk training agent di Unity ML-Agents.

---

# Slide 44 — Policy Network

Dalam PPO, policy biasanya direpresentasikan oleh neural network.

Input:

```text
Observation
```

Output:

```text
Action
```

Contoh:

```text
Observation:
arah target, velocity agent, jarak

Policy Network:
menghasilkan moveX dan moveZ
```

Training menyesuaikan bobot network agar reward meningkat.

---

# Slide 45 — Reward dan PPO

PPO tidak tahu tujuan game kecuali dari reward.

Jika reward buruk, policy yang dipelajari juga buruk.

Contoh:

```text
Reward benar:
+1 mencapai target
-1 jatuh
-0.01 setiap step

Reward buruk:
+1 bergerak cepat tanpa tujuan
```

Agent akan belajar apa pun yang memaksimalkan reward.

Karena itu reward design tetap sangat penting.

---

# Slide 46 — Training Workflow ML-Agents

Workflow umum:

```text
1. Buat scene Unity
2. Buat Agent script
3. Tentukan observation
4. Tentukan action
5. Tentukan reward
6. Tentukan episode reset
7. Tambahkan Behavior Parameters
8. Tambahkan Decision Requester
9. Jalankan training
10. Gunakan model hasil training
```

Praktikum detail akan menjelaskan langkah teknisnya.

---

# Slide 47 — Contoh Tugas Agent

Tugas sederhana:

```text
Agent harus mencapai target di arena.
```

Observation:
- posisi relatif target,
- velocity agent.

Action:
- moveX,
- moveZ.

Reward:
- +1 jika mencapai target,
- -1 jika jatuh,
- -0.01 setiap step.

Episode:
- selesai saat target tercapai,
- selesai saat agent jatuh,
- selesai saat max step tercapai.

---

# Slide 48 — Scene Training Sederhana

Struktur:

```text
TrainingArea
├�”€─ Ground
├�”€─ Agent
├�”€─ Target
├�”€─ Wall / Obstacle
├�”€─ Boundary
└�”€─ Camera
```

Agar training lebih cepat, dapat dibuat beberapa environment paralel:

```text
TrainingArea_1
TrainingArea_2
TrainingArea_3
...
```

Banyak area paralel mempercepat pengumpulan pengalaman.

---

# Slide 49 — Parallel Training Areas

Dalam Unity, environment dapat diduplikasi.

Manfaat:
- agent mengumpulkan pengalaman lebih banyak,
- training lebih cepat,
- variasi posisi lebih banyak,
- model belajar lebih general.

Contoh:

```text
16 arena training
dengan agent dan target masing-masing
```

Setiap arena menjalankan episode sendiri.

---

# Slide 50 — Randomization dalam Training

Agar agent tidak menghafal satu kondisi, gunakan randomization.

Contoh:
- posisi start random,
- posisi target random,
- obstacle random,
- ukuran arena sedikit bervariasi.

Manfaat:
- agent belajar generalisasi,
- tidak hanya menghafal posisi,
- lebih kuat saat inference.

Namun randomization jangan terlalu sulit di awal training.

---

# Slide 51 — Curriculum Learning

**Curriculum learning** berarti training dimulai dari tugas mudah lalu bertahap lebih sulit.

Contoh:

```text
Tahap 1:
target dekat, tanpa obstacle

Tahap 2:
target lebih jauh

Tahap 3:
tambahkan obstacle

Tahap 4:
arena lebih kompleks
```

Konsep ini mirip proses belajar manusia.

Tidak wajib untuk praktikum awal, tetapi penting untuk tugas yang sulit.

---

# Slide 52 — Observation Design Example

Untuk agent mencapai target:

Observation minimal:

```text
targetPosition - agentPosition
agentVelocity
```

Contoh:

```csharp
Vector3 toTarget = target.position - transform.position;

sensor.AddObservation(toTarget.normalized);
sensor.AddObservation(toTarget.magnitude);
sensor.AddObservation(rb.linearVelocity);
```

Observation ini memberi agent informasi arah, jarak, dan gerak saat ini.

---

# Slide 53 — Action Design Example

Untuk agent bergerak di bidang XZ:

```text
Action 0 = moveX
Action 1 = moveZ
```

Unity:

```csharp
float moveX = actions.ContinuousActions[0];
float moveZ = actions.ContinuousActions[1];

Vector3 force = new Vector3(moveX, 0f, moveZ);
rb.AddForce(force * moveForce);
```

Jika agent terlalu sulit dikontrol, action dapat disederhanakan menjadi discrete movement.

---

# Slide 54 — Reward Design Example

Contoh reward:

```csharp
if (distanceToTarget < 1.0f)
{
    AddReward(1.0f);
    EndEpisode();
}

if (transform.localPosition.y < -1f)
{
    AddReward(-1.0f);
    EndEpisode();
}

AddReward(-0.001f);
```

Penalty kecil setiap step mendorong agent mencapai target lebih cepat.

---

# Slide 55 — Reward Shaping

Reward shaping adalah menambahkan reward tambahan agar agent lebih mudah belajar.

Contoh:

```text
Jika agent mendekati target:
    reward kecil positif

Jika agent menjauh:
    reward kecil negatif
```

Namun hati-hati:
- jangan membuat agent hanya mengejar reward kecil,
- jangan sampai agent tidak menyelesaikan tujuan utama.

Reward utama tetap harus jelas.

---

# Slide 56 — Measuring Training Progress

Selama training, lihat:
- cumulative reward,
- episode length,
- success rate,
- loss / learning curve,
- behavior agent di scene.

Indikasi training membaik:
- reward rata-rata naik,
- episode lebih pendek,
- success rate naik,
- agent bergerak lebih terarah.

Jika reward tidak naik, kemungkinan:
- observation kurang,
- reward salah,
- action sulit,
- environment terlalu sulit.

---

# Slide 57 — Training Configuration

ML-Agents menggunakan file konfigurasi training.

Konsep parameter:
- trainer type,
- batch size,
- buffer size,
- learning rate,
- beta,
- epsilon,
- network settings,
- max steps.

Untuk pengantar, mahasiswa cukup memahami bahwa konfigurasi mengatur proses training.

Detail teknis akan diberikan dalam modul praktikum.

---

# Slide 58 — Behavior Name

Behavior Name harus konsisten antara:
- Unity Behavior Parameters,
- konfigurasi trainer,
- command training.

Contoh:

```text
Behavior Name: MoveToTarget
```

Jika nama tidak cocok, trainer tidak mengenali agent dengan benar.

Ini salah satu error umum saat menggunakan ML-Agents.

---

# Slide 59 — Model Output

Setelah training selesai, sistem menghasilkan model.

Model digunakan oleh Unity agent.

Alur:

```text
Training selesai
        ↓
Model file dihasilkan
        ↓
Pasang model ke Behavior Parameters
        ↓
Set Behavior Type ke Inference Only
        ↓
Agent menjalankan policy
```

Model adalah hasil belajar agent.

---

# Slide 60 — Inference dalam Game

Saat inference:
- agent tidak lagi training,
- action dihasilkan dari policy model,
- reward tidak harus digunakan untuk belajar,
- behavior lebih stabil.

Namun reward dan episode masih dapat dipakai untuk:
- evaluasi,
- reset environment,
- scoring,
- debugging.

Inference adalah mode yang mendekati penggunaan dalam game final.

---

# Slide 61 — Common Training Problems

Masalah umum:
1. Agent tidak bergerak.
2. Agent bergerak acak terus.
3. Agent jatuh terus.
4. Reward tidak naik.
5. Agent mengeksploitasi reward.
6. Training sangat lama.
7. Behavior tidak general.
8. Observation kurang.
9. Action mapping salah.
10. Episode reset tidak benar.

---

# Slide 62 — Problem: Agent Tidak Belajar

Penyebab:
- reward terlalu jarang,
- reward salah,
- observation tidak cukup,
- action tidak memengaruhi environment,
- target terlalu sulit dicapai,
- episode terlalu pendek,
- physics tidak stabil.

Solusi:
- sederhanakan environment,
- cek heuristic,
- tambahkan reward shaping,
- validasi action,
- tampilkan debug observation,
- mulai dari task yang mudah.

---

# Slide 63 — Problem: Reward Naik tapi Behavior Buruk

Penyebab:
- reward dapat dieksploitasi,
- agent mendapat reward tanpa menyelesaikan tujuan,
- penalty tidak tepat,
- reward shaping terlalu dominan.

Contoh:

```text
Agent bergerak bolak-balik
karena mendapat reward mendekati target,
tetapi tidak pernah mencapai target.
```

Solusi:
- perbaiki reward,
- berikan reward utama lebih besar,
- beri penalty waktu,
- akhiri episode dengan jelas.

---

# Slide 64 — Problem: Agent Menghafal

Agent mungkin hanya belajar posisi tertentu.

Penyebab:
- start selalu sama,
- target selalu sama,
- obstacle selalu sama.

Solusi:
- randomize start,
- randomize target,
- randomize obstacle,
- gunakan beberapa training area,
- evaluasi pada scene berbeda.

Generalization penting agar agent tidak hanya hafal environment training.

---

# Slide 65 — ML-Agents vs NavMeshAgent

| Aspek | ML-Agents | NavMeshAgent |
|---|---|---|
| Cara kerja | belajar dari reward | pathfinding/navigation |
| Perlu training | ya | tidak |
| Kontrol designer | lebih sulit | lebih mudah |
| Cocok untuk | perilaku belajar | navigasi praktis |
| Debug | lebih sulit | lebih jelas |
| Output | policy | path movement |

Untuk navigasi biasa, NavMeshAgent lebih praktis.

ML-Agents cocok untuk belajar perilaku yang sulit ditulis aturan eksplisit.

---

# Slide 66 — ML-Agents vs Behavior Tree

| Aspek | ML-Agents | Behavior Tree |
|---|---|---|
| Decision | dipelajari | dirancang manual |
| Debug | sulit | relatif mudah |
| Kontrol | rendah-sedang | tinggi |
| Adaptasi | melalui training | melalui node/condition |
| Cocok untuk | agent learning | NPC behavior modular |

Behavior Tree cocok untuk production AI yang perlu mudah dikontrol.  
ML-Agents cocok untuk eksperimen learning-based behavior.

---

# Slide 67 — Integrasi ML-Agents dengan Game AI Klasik

ML-Agents dapat digabung dengan sistem klasik.

Contoh:
- FSM menentukan mode besar,
- ML policy mengontrol movement,
- NavMesh menentukan path global,
- Utility AI memilih kapan menggunakan ML agent,
- Behavior Tree mengatur high-level behavior.

Contoh:

```text
Behavior Tree
└�”€─ Chase Player
    └�”€─ ML-Agent controls local movement
```

ML tidak harus menggantikan seluruh AI.

---

# Slide 68 — Contoh Penggunaan dalam Game

Contoh sederhana:
- agent belajar mengambil item,
- agent belajar menghindari obstacle,
- enemy belajar menjaga jarak,
- robot belajar bergerak ke target,
- drone belajar mengikuti player,
- companion belajar mendekati ally.

Untuk tugas praktikum, fokus pada:

```text
Move to Target
Avoid Obstacle
Reach Goal
```

---

# Slide 69 — Desain Praktikum Pertemuan 14

Judul praktikum:

## Training Agent Menggunakan Unity ML-Agents

Target:
- membuat training environment sederhana,
- membuat Agent script,
- menentukan observation,
- menentukan action,
- menentukan reward,
- menjalankan episode,
- melakukan training,
- menggunakan model hasil training untuk inference.

Detail langkah teknis akan dibuat pada modul praktikum terpisah.

---

# Slide 70 — Rekomendasi Praktikum

Rekomendasi utama:

```text
Agent belajar mencapai target di arena
```

Alasan:
- sederhana,
- visual,
- reward mudah dipahami,
- cocok untuk ML-Agents introduction,
- observation dan action tidak terlalu kompleks.

Pengembangan opsional:
- tambahkan obstacle,
- random target,
- random start,
- multi-agent training area,
- reward shaping.

---

# Slide 71 — Scene Praktikum

Struktur scene:

```text
MLAgents_MoveToTarget
├�”€─ TrainingArea
│   ├�”€─ Ground
│   ├�”€─ Agent
│   ├�”€─ Target
│   ├�”€─ Wall / Obstacle
│   └�”€─ Boundary
│
├�”€─ Main Camera
└�”€─ Debug UI
```

Agent:
- bergerak di atas ground,
- mencari target,
- mendapat reward,
- episode reset setelah berhasil/gagal.

---

# Slide 72 — Script Praktikum

Script yang direncanakan:

```text
Scripts/
├�”€─ MoveToTargetAgent.cs
├�”€─ TrainingAreaManager.cs
├�”€─ TargetRandomizer.cs
├�”€─ ObstacleRandomizer.cs
└�”€─ MLAgentDebugUI.cs
```

Script utama:

```text
MoveToTargetAgent.cs
```

berisi:
- `OnEpisodeBegin()`
- `CollectObservations()`
- `OnActionReceived()`
- `Heuristic()`

---

# Slide 73 — Parameter Praktikum

Parameter:

```text
moveForce
targetReward
fallPenalty
stepPenalty
maxStep
targetSpawnRadius
agentSpawnRadius
decisionPeriod
```

Contoh:

```text
moveForce = 10
targetReward = +1
fallPenalty = -1
stepPenalty = -0.001
maxStep = 500
decisionPeriod = 5
```

Parameter dapat diubah untuk eksperimen.

---

# Slide 74 — Observation Praktikum

Observation minimal:

```text
direction to target
distance to target
agent velocity
```

Contoh:

```text
toTarget.x
toTarget.z
distance
velocity.x
velocity.z
```

Tambahan opsional:
- obstacle ray sensor,
- posisi relatif obstacle,
- apakah agent menyentuh ground.

Observation harus cukup agar agent dapat belajar mencapai target.

---

# Slide 75 — Action Praktikum

Action continuous:

```text
moveX
moveZ
```

Atau action discrete:

```text
0 = diam
1 = maju
2 = mundur
3 = kiri
4 = kanan
```

Rekomendasi:
- gunakan continuous action untuk arena 3D sederhana,
- gunakan discrete action jika ingin lebih mudah dianalisis.

---

# Slide 76 — Reward Praktikum

Reward dasar:

```text
+1.0 mencapai target
-1.0 jatuh keluar arena
-0.001 setiap step
```

Opsional reward shaping:

```text
+ kecil jika mendekati target
- kecil jika menjauh dari target
```

Namun jangan membuat reward shaping terlalu dominan.

Reward utama tetap:

```text
mencapai target
```

---

# Slide 77 — Episode Praktikum

Episode dimulai:
- agent di-reset ke posisi awal/random,
- target ditempatkan random,
- velocity agent di-reset.

Episode berakhir:
- agent mencapai target,
- agent jatuh,
- max step tercapai.

Alur:

```text
OnEpisodeBegin()
    ↓
Agent bergerak
    ↓
Reward diberikan
    ↓
EndEpisode()
    ↓
Reset lagi
```

---

# Slide 78 — Eksperimen Mahasiswa

Mahasiswa dapat mencoba:

1. Mengubah reward target.
2. Mengubah step penalty.
3. Mengubah max step.
4. Mengubah decision period.
5. Mengubah observation.
6. Menambahkan obstacle.
7. Menambahkan ray sensor.
8. Membuat target random.
9. Membuat beberapa training area.
10. Membandingkan heuristic control dan trained policy.

---

# Slide 79 — Evaluasi Praktikum

Pertanyaan evaluasi:

1. Apakah agent menerima observation yang cukup?
2. Apakah action memengaruhi movement dengan benar?
3. Apakah reward diberikan pada kondisi yang tepat?
4. Apakah episode reset dengan benar?
5. Apakah cumulative reward meningkat?
6. Apakah agent berhasil mencapai target?
7. Apakah agent hanya menghafal posisi?
8. Apakah model hasil training dapat digunakan untuk inference?
9. Apakah training stabil?
10. Apa perbedaan behavior sebelum dan sesudah training?

---

# Slide 80 — Debug Praktikum

Debug yang disarankan:
- garis agent ke target,
- jarak ke target,
- reward terakhir,
- cumulative reward,
- episode count,
- success count,
- fail count,
- current behavior mode,
- velocity agent,
- target position.

Dengan debug visual, mahasiswa lebih mudah memahami proses training.

---

# Slide 81 — Hubungan dengan Materi Sebelumnya

Unity ML-Agents menghubungkan banyak materi:

```text
Pertemuan 3
Movement

Pertemuan 4
Navigation

Pertemuan 11
DDA dan reward/adaptasi

Pertemuan 12
Player modeling dan data

Pertemuan 13
RL, state, action, reward

Pertemuan 14
Training policy di Unity
```

ML-Agents adalah contoh nyata learning-based Game AI.

---

# Slide 82 — Hubungan dengan Proyek Akhir

Untuk proyek akhir, ML-Agents dapat digunakan sebagai fitur advanced.

Contoh:
- companion agent belajar mengikuti player,
- drone belajar menghindari obstacle,
- robot belajar mencapai target,
- enemy belajar menjaga jarak,
- agent belajar mengambil resource.

Namun, mahasiswa tidak wajib menggunakan ML-Agents jika scope terlalu besar.

Proyek akhir tetap boleh menggunakan FSM, BT, Utility AI, PCG, dan DDA.

---

# Slide 83 — Ringkasan Materi

Hari ini kita mempelajari:

```text
Reinforcement Learning with Unity ML-Agents
│
├�”€─ Agent
├�”€─ Environment
├�”€─ Observation
├�”€─ Action
├�”€─ Reward
├�”€─ Episode
├�”€─ Policy
├�”€─ Training
├�”€─ Inference
├�”€─ Behavior Parameters
├�”€─ Decision Requester
├�”€─ Heuristic
├�”€─ PPO Concept
├�”€─ Reward Design
└�”€─ Training Agent in Unity
```

Konsep kunci:

> Dalam Unity ML-Agents, developer tidak menulis aturan perilaku secara langsung, tetapi mendesain environment, observation, action, dan reward agar agent dapat belajar policy melalui training.

---

# Slide 84 — Pertanyaan Diskusi

1. Apa perbedaan agent dan environment?
2. Mengapa observation sangat penting?
3. Apa bedanya continuous action dan discrete action?
4. Mengapa reward design sulit?
5. Apa itu episode?
6. Apa itu policy?
7. Mengapa training berbeda dari inference?
8. Mengapa PPO cocok untuk Unity ML-Agents?
9. Apa risiko reward hacking?
10. Kapan ML-Agents lebih cocok daripada NavMeshAgent?

---

# Slide 85 — Latihan Konsep Observation

Untuk agent yang harus mengambil item dan menghindari obstacle, tentukan observation yang diperlukan.

Pertanyaan:
1. Apakah agent perlu posisi item?
2. Apakah agent perlu posisi obstacle?
3. Apakah cukup menggunakan arah relatif?
4. Apakah perlu velocity?
5. Apakah perlu ray sensor?
6. Observation mana yang terlalu berlebihan?

---

# Slide 86 — Latihan Konsep Reward

Rancang reward untuk agent berikut:

```text
Agent harus mencapai target.
Agent harus menghindari obstacle.
Agent harus selesai secepat mungkin.
```

Tentukan:
1. Reward mencapai target.
2. Penalty menabrak obstacle.
3. Penalty setiap step.
4. Apakah perlu reward mendekati target?
5. Bagaimana mencegah reward hacking?
6. Kapan episode selesai?

---

# Slide 87 — Latihan Konsep Praktikum

Rancang environment ML-Agents sederhana.

Spesifikasi:

```text
Arena 10 x 10
Agent mulai di posisi random
Target muncul random
Jika agent mencapai target, reward +1
Jika agent jatuh, reward -1
Setiap step, penalty kecil
```

Tentukan:
1. GameObject yang diperlukan.
2. Observation.
3. Action.
4. Reward.
5. Episode reset.
6. Debug UI.

---

# Slide 88 — Penutup

## Praktikum Pertemuan 14

Praktikum detail akan dibuat pada modul terpisah:

```text
Training agent menggunakan Unity ML-Agents
```

Fokus praktikum:
- membuat training scene,
- membuat Agent script,
- menentukan observation,
- menentukan action,
- menentukan reward,
- menjalankan episode,
- training model,
- inference model.

Materi berikutnya:

```text
Advanced Game AI & Final Project Development
```

---

# Catatan Pembelajaran

Urutan pembelajaran yang disarankan:

```text
1. Review RL dari Pertemuan 13
2. Perkenalkan Unity ML-Agents sebagai environment RL
3. Jelaskan agent dan environment
4. Jelaskan observation dan action
5. Jelaskan reward dan episode
6. Jelaskan policy, training, dan inference
7. Jelaskan Behavior Parameters dan Decision Requester
8. Jelaskan PPO secara konseptual
9. Tunjukkan contoh MoveToTarget Agent
10. Tutup dengan gambaran praktikum training agent
```

Penekanan penting:

> Kunci ML-Agents bukan hanya menjalankan training, tetapi merancang observation, action, reward, dan episode dengan benar. Jika desain environment salah, agent akan belajar perilaku yang salah pula.
