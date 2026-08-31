# Game Cerdas — Pertemuan 13
## Machine Learning for Games

**Program Studi S1 Teknik Informatika**  
**Tools:**  Unity 6 + C#  
**Posisi materi:**  Lanjutan Pertemuan 12 — Player Modeling & Adaptive Game AI

---

# Slide 1 — Cover

## Machine Learning for Games

**Game Cerdas — Pertemuan 13**  
Pokok bahasan:
- Machine Learning dalam game
- Supervised Learning
- Reinforcement Learning
- State, Action, Reward
- Q-Learning
- Penggunaan ML dalam game
- Pengenalan Unity ML-Agents

Praktikum yang akan dibuat terpisah: **Implementasi Q-Learning sederhana**
- atau**Unity ML-Agents Introduction**  
> Fokus pertemuan ini adalah memahami bagaimana machine learning dapat digunakan untuk membuat sistem game yang belajar dari data, pengalaman, dan interaksi.

---

# Slide 2 — Review Pertemuan 12

Pada Pertemuan 12 kita membahas**Player Modeling & Adaptive Game AI**.

Materi utama:
- player telemetry,
- gameplay metrics,
- skill estimation,
- play style,
- player profile,
- adaptation policy.

Alur:

```text
Gameplay Data
    ↓
Metrics
    ↓
Player Model
    ↓
Adaptation Policy
    ↓
Adaptive Gameplay
```

Pertemuan 13 melanjutkan gagasan belajar dari data, tetapi dengan pendekatan Machine Learning.

---

# Slide 3 — Posisi Materi dalam Rencana Pembelajaran

Sampai saat ini, kita sudah mempelajari:

```text
Rule-Based Game AI
├�”€─ Perception
├�”€─ Movement
├�”€─ Pathfinding
├�”€─ FSM
├�”€─ Behavior Tree
├�”€─ Utility AI
└�”€─ Tactical AI

Content & Adaptive AI
├�”€─ PCG
├�”€─ DDA
└�”€─ Player Modeling
```

Pertemuan 13 masuk ke:

```text
Learning-Based Game AI
```

AI tidak hanya mengikuti aturan yang ditulis developer, tetapi dapat belajar dari data atau pengalaman.

---

# Slide 4 — Mengapa Machine Learning untuk Game?

Machine Learning dapat digunakan untuk:
- membuat agent belajar dari pengalaman,
- memprediksi perilaku player,
- mengklasifikasikan play style,
- menyesuaikan difficulty,
- mengoptimalkan strategi NPC,
- menghasilkan konten adaptif,
- menganalisis data gameplay,
- menguji balancing game.

Namun, ML bukan selalu solusi terbaik.

Dalam banyak game, FSM, Behavior Tree, Utility AI, dan NavMesh tetap sangat penting.

---

# Slide 5 — Rule-Based AI vs Learning-Based AI

## Rule-Based AI

Developer menulis aturan eksplisit.

Contoh:

```text
Jika player terlihat
    Chase

Jika player dekat
    Attack

Jika HP rendah
    Flee
```

## Learning-Based AI

AI belajar dari data atau pengalaman.

Contoh:

```text
Agent mencoba banyak aksi.
Agent mendapat reward.
Agent belajar aksi mana yang lebih baik.
```

Rule-based AI lebih mudah dikontrol.  
Learning-based AI lebih adaptif, tetapi lebih sulit diprediksi.

---

# Slide 6 — Kapan ML Cocok Digunakan dalam Game?

ML cocok jika:
- aturan sulit ditulis manual,
- ada banyak data gameplay,
- agent perlu belajar strategi,
- sistem perlu mengenali pola player,
- environment dapat disimulasikan berulang,
- adaptasi membutuhkan prediksi.

Contoh:
- agent belajar mencapai target,
- bot belajar menghindari obstacle,
- sistem memprediksi player churn,
- model mengklasifikasikan play style,
- AI director menyesuaikan spawn.

---

# Slide 7 — Kapan ML Tidak Perlu Digunakan?

ML tidak selalu diperlukan.

Untuk banyak kasus, teknik klasik lebih praktis.

Contoh:
- patrol sederhana → FSM cukup,
- enemy chase → NavMesh + FSM cukup,
- target selection sederhana → Utility AI cukup,
- dungeon generator sederhana → PCG rule-based cukup.

ML dapat menjadi berlebihan jika:
- data sedikit,
- behavior harus sangat deterministik,
- debugging harus mudah,
- waktu development terbatas,
- tujuan bisa dicapai dengan aturan sederhana.

---

# Slide 8 — Capaian Pembelajaran Pertemuan

Setelah pertemuan ini, mahasiswa diharapkan mampu:

1. Menjelaskan peran machine learning dalam game.
2. Membedakan supervised learning dan reinforcement learning.
3. Menjelaskan konsep state, action, reward.
4. Menjelaskan konsep agent dan environment.
5. Menjelaskan prinsip dasar Q-learning.
6. Membaca Q-table sederhana.
7. Menjelaskan eksplorasi dan eksploitasi.
8. Menjelaskan penggunaan ML dalam game.
9. Menjelaskan gambaran Unity ML-Agents.
10. Merancang praktikum Q-learning sederhana atau pengenalan ML-Agents.

---

# Slide 9 — Apa Itu Machine Learning?

**Machine Learning** adalah pendekatan di mana sistem belajar pola dari data atau pengalaman.

Bukan selalu ditulis sebagai aturan eksplisit.

Contoh sederhana:

```text
Input data
    ↓
Model belajar pola
    ↓
Model membuat prediksi / keputusan
```

Dalam game, ML dapat digunakan untuk:
- prediksi,
- klasifikasi,
- kontrol agent,
- adaptasi gameplay,
- analisis player.

---

# Slide 10 — Tiga Kategori Umum Machine Learning

Kategori umum:

```text
Machine Learning
├�”€─ Supervised Learning
├�”€─ Unsupervised Learning
└�”€─ Reinforcement Learning
```

Pertemuan ini fokus pada:

```text
Supervised Learning
dan
Reinforcement Learning
```

Karena keduanya paling mudah dikaitkan dengan game.

---

# Slide 11 — Supervised Learning

**Supervised Learning** adalah pembelajaran dari data yang memiliki label.

Contoh data:

```text
Input: telemetry player
Label: play style
```

Contoh:

| Accuracy | Damage Taken | Exploration | Label |
|---:|---:|---:|---|
| 0.80 | 30 | 0.20 | Aggressive |
| 0.45 | 15 | 0.70 | Explorer |
| 0.60 | 10 | 0.30 | Defensive |

Model belajar memprediksi label dari input.

---

# Slide 12 — Contoh Supervised Learning dalam Game

Contoh penggunaan:
- klasifikasi play style,
- prediksi skill level,
- prediksi player akan menang/kalah,
- prediksi kemungkinan player berhenti bermain,
- deteksi cheater,
- prediksi kebutuhan hint,
- rekomendasi difficulty.

Contoh:

```text
Input:
accuracy, damage taken, exploration ratio

Output:
Aggressive / Defensive / Explorer
```

Ini berhubungan dengan Player Modeling pada Pertemuan 12.

---

# Slide 13 — Supervised Learning Pipeline

Pipeline:

```text
Collect Data
    ↓
Label Data
    ↓
Train Model
    ↓
Validate Model
    ↓
Use Model in Game
```

Contoh:

```text
Telemetry banyak player
    ↓
Label play style
    ↓
Train classifier
    ↓
Model memprediksi play style player baru
```

Dalam praktikum mata kuliah ini, supervised learning cukup dipahami secara konsep.

---

# Slide 14 — Kelebihan Supervised Learning

Kelebihan:
- cocok untuk prediksi dan klasifikasi,
- mudah dievaluasi dengan data test,
- berguna untuk player modeling,
- dapat menggunakan data gameplay nyata,
- output relatif mudah dipahami jika model sederhana.

Kekurangan:
- membutuhkan data berlabel,
- kualitas model tergantung kualitas data,
- tidak belajar langsung dari trial-error environment,
- tidak selalu cocok untuk kontrol agent real-time.

---

# Slide 15 — Reinforcement Learning

**Reinforcement Learning** atau**RL** adalah pembelajaran melalui interaksi dengan environment.

Agent mencoba aksi, menerima reward, lalu belajar strategi.

Alur:

```text
Agent
  ↓ action
Environment
  ↓ state + reward
Agent belajar
```

RL cocok untuk agent yang perlu belajar mengambil keputusan berurutan.

---

# Slide 16 — Contoh Reinforcement Learning dalam Game

Contoh:
- agent belajar mencapai target,
- NPC belajar menghindari obstacle,
- bot belajar memainkan mini game,
- karakter belajar bergerak,
- AI belajar strategi sederhana,
- agent belajar memilih aksi combat.

Contoh sederhana:

```text
Agent berada di grid.
Goal berada di titik tertentu.
Agent mendapat reward +1 jika mencapai goal.
Agent mendapat penalty -1 jika menabrak obstacle.
```

---

# Slide 17 — Supervised vs Reinforcement Learning

| Aspek | Supervised Learning | Reinforcement Learning |
|---|---|---|
| Data | Input + label | Interaksi agent-environment |
| Feedback | Label benar/salah | Reward |
| Tujuan | Prediksi / klasifikasi | Memilih aksi terbaik |
| Contoh game | klasifikasi play style | agent belajar mencapai goal |
| Tantangan | butuh data berlabel | training bisa lama |

Supervised learning belajar dari contoh.  
Reinforcement learning belajar dari pengalaman.

---

# Slide 18 — Agent dan Environment

Dalam RL, terdapat dua komponen utama:

```text
Agent
Environment
```

Agent:
- mengamati state,
- memilih action,
- menerima reward,
- memperbarui strategi.

Environment:
- menyediakan state,
- menerima action,
- menghitung reward,
- memperbarui kondisi dunia.

Contoh:

```text
Agent = NPC
Environment = level game
```

---

# Slide 19 — State

**State** adalah representasi kondisi yang diamati agent.

Contoh state pada grid:

```text
posisi agent
posisi goal
posisi obstacle
```

Contoh state pada combat:

```text
health agent
health enemy
distance to enemy
ammo
cover availability
```

State harus cukup informatif agar agent dapat mengambil keputusan.

---

# Slide 20 — State dalam Game

Contoh state sederhana untuk enemy:

```text
distanceToPlayer
health
canSeePlayer
isInCover
ammo
```

State dapat berupa:
- angka,
- kategori,
- boolean,
- vector,
- grid,
- image,
- sensor ray.

Untuk Q-learning sederhana, state biasanya dibuat diskrit.

Contoh:

```text
NearPlayer
FarFromPlayer
LowHealth
HighHealth
```

---

# Slide 21 — Action

**Action** adalah pilihan yang dapat dilakukan agent.

Contoh action pada grid:

```text
Move Up
Move Down
Move Left
Move Right
```

Contoh action pada enemy:

```text
Patrol
Chase
Attack
Flee
TakeCover
```

Contoh action pada robot:

```text
MoveForward
TurnLeft
TurnRight
Shoot
```

Action harus jelas dan dapat dieksekusi oleh environment.

---

# Slide 22 — Reward

**Reward** adalah nilai feedback yang diberikan kepada agent.

Reward memberi tahu apakah action baik atau buruk.

Contoh:

```text
+1.0 jika mencapai goal
-1.0 jika jatuh / mati
-0.1 jika menabrak obstacle
-0.01 setiap langkah
```

Reward adalah bagian sangat penting dalam RL.

Reward yang salah dapat membuat agent belajar perilaku yang tidak diinginkan.

---

# Slide 23 — State-Action-Reward Loop

Loop dasar RL:

```text
State saat ini
    ↓
Agent memilih action
    ↓
Environment berubah
    ↓
Agent menerima reward
    ↓
Agent mengamati state baru
    ↓
Agent memperbarui policy
```

Dalam bentuk:

```text
S_t → A_t → R_t → S_{t+1}
```

Artinya:
- state saat ini,
- action yang dipilih,
- reward yang diterima,
- state berikutnya.

---

# Slide 24 — Policy

**Policy** adalah strategi agent untuk memilih action berdasarkan state.

Contoh:

```text
Jika state = dekat goal
    pilih action menuju goal
```

Dalam RL, policy dapat dipelajari.

Policy menjawab:

```text
Dalam state ini, action apa yang sebaiknya dipilih?
```

Q-learning belajar nilai action, lalu memilih action dengan nilai tertinggi.

---

# Slide 25 — Episode

**Episode** adalah satu sesi percobaan agent.

Contoh:
- agent mulai dari posisi awal,
- agent bergerak,
- agent mencapai goal atau gagal,
- episode selesai.

Setelah episode selesai:
- environment di-reset,
- agent mencoba lagi,
- proses belajar berlanjut.

Dalam game:
- satu episode bisa satu level,
- satu match,
- satu percobaan mencapai target,
- satu wave survival.

---

# Slide 26 — Exploration vs Exploitation

Agent memiliki dua pilihan:

## Exploration

Mencoba aksi baru untuk mencari pengalaman.

```text
Mungkin action ini lebih baik?
```

## Exploitation

Menggunakan aksi yang sudah diketahui terbaik.

```text
Pilih action dengan nilai tertinggi.
```

Jika hanya eksploitasi, agent sulit menemukan strategi baru.  
Jika terlalu banyak eksplorasi, agent tampak acak.

---

# Slide 27 — Epsilon-Greedy

Epsilon-greedy adalah strategi sederhana.

```text
Dengan probabilitas epsilon:
    pilih action random

Selain itu:
    pilih action terbaik
```

Contoh:

```text
epsilon = 0.2
```

Artinya:
- 20% eksplorasi,
- 80% eksploitasi.

Selama training, epsilon bisa diturunkan.

```text
awal training: epsilon tinggi
akhir training: epsilon rendah
```

---

# Slide 28 — Q-Learning

**Q-learning** adalah algoritma reinforcement learning sederhana untuk belajar nilai action dalam state tertentu.

Q-learning menyimpan nilai:

```text
Q(state, action)
```

Makna:

```text
Seberapa baik memilih action tertentu pada state tertentu?
```

Nilai Q disimpan dalam tabel:

```text
Q-table
```

Q-learning cocok untuk pembelajaran dasar RL.

---

# Slide 29 — Q-Table

Contoh state dan action:

```text
State:
S0, S1, S2

Action:
Up, Down, Left, Right
```

Q-table:

| State | Up | Down | Left | Right |
|---|---:|---:|---:|---:|
| S0 | 0.2 | 0.1 | -0.1 | 0.5 |
| S1 | 0.0 | 0.3 | 0.2 | 0.1 |
| S2 | 0.8 | -0.2 | 0.0 | 0.4 |

Jika agent berada di S0, action terbaik adalah:

```text
Right
```

karena nilainya paling tinggi.

---

# Slide 30 — Q-Learning dalam Grid

Contoh environment:

```text
S . . .
. # . .
. # . G
. . . .
```

Keterangan:
- S = Start
- G = Goal
- # = Obstacle

Action:
- Up
- Down
- Left
- Right

Reward:
- +1 jika mencapai goal
- -1 jika menabrak obstacle
- -0.01 setiap langkah

Agent belajar jalur menuju goal.

---

# Slide 31 — Q-Learning Update Formula

Formula Q-learning:

```text
Q(s,a) ← Q(s,a) + Î± [ r + Î³ max Q(s',a') - Q(s,a) ]
```

Keterangan:
- `s` = state saat ini,
- `a` = action yang dipilih,
- `r` = reward,
- `s'` = state berikutnya,
- `Î±` = learning rate,
- `Î³` = discount factor.

Tidak perlu menghafal rumus secara matematis mendalam, tetapi perlu memahami maknanya.

---

# Slide 32 — Makna Formula Q-Learning

Intinya:

```text
Nilai action diperbarui berdasarkan:
reward sekarang
+
perkiraan keuntungan masa depan
```

Jika action menghasilkan reward baik:

```text
Q-value naik
```

Jika action menghasilkan reward buruk:

```text
Q-value turun
```

Agent secara bertahap belajar action yang lebih baik untuk setiap state.

---

# Slide 33 — Learning Rate

Learning rate biasanya ditulis:

```text
Î±
```

Learning rate menentukan seberapa besar update nilai Q.

Contoh:

```text
Î± = 0.1
```

Nilai kecil:
- belajar lebih pelan,
- lebih stabil.

Nilai besar:
- belajar lebih cepat,
- bisa tidak stabil.

Untuk praktikum, dapat digunakan:

```text
Î± = 0.1 sampai 0.5
```

---

# Slide 34 — Discount Factor

Discount factor biasanya ditulis:

```text
Î³
```

Discount factor menentukan seberapa penting reward masa depan.

Contoh:

```text
Î³ = 0.9
```

Jika Î³ tinggi:
- agent mempertimbangkan reward jangka panjang.

Jika Î³ rendah:
- agent lebih fokus reward langsung.

Untuk game dengan tujuan seperti mencapai goal, Î³ biasanya cukup tinggi.

---

# Slide 35 — Reward Design

Reward design sangat penting.

Contoh reward:

```text
+1.0 mencapai goal
-1.0 menabrak obstacle
-0.01 setiap langkah
```

Penalty setiap langkah mendorong agent mencari jalur lebih pendek.

Namun reward yang terlalu besar atau kecil dapat membuat training buruk.

Contoh buruk:

```text
+100 untuk mendekati goal setiap frame
```

Agent mungkin mengeksploitasi reward tanpa menyelesaikan tugas.

---

# Slide 36 — Reward Hacking

Reward hacking terjadi ketika agent menemukan cara mendapatkan reward yang tidak sesuai tujuan designer.

Contoh:
- agent berputar di area yang memberi reward kecil terus-menerus,
- agent menghindari goal karena reward per langkah lebih tinggi,
- agent melakukan aksi aneh yang memaksimalkan reward tetapi tidak menyelesaikan game.

Pelajaran:

```text
Reward harus mendeskripsikan tujuan dengan hati-hati.
```

---

# Slide 37 — Q-Learning Algorithm

Pseudocode:

```text
Initialize Q-table with zero

for each episode:
    reset environment
    state = start state

    while episode not done:
        choose action using epsilon-greedy
        perform action
        observe reward and nextState

        update Q(state, action)

        state = nextState
```

Setelah banyak episode, Q-table berisi nilai action yang lebih baik.

---

# Slide 38 — Training vs Inference

## Training

Agent masih belajar.

Ciri:
- banyak eksplorasi,
- Q-table diperbarui,
- agent sering mencoba action buruk.

## Inference

Agent menggunakan hasil belajar.

Ciri:
- eksplorasi rendah atau nol,
- memilih action terbaik,
- Q-table tidak berubah.

Dalam game final, biasanya agent menggunakan mode inference.

---

# Slide 39 — Q-Learning untuk Game Sederhana

Q-learning cocok untuk:
- grid world,
- maze kecil,
- agent mencari target,
- agent menghindari obstacle,
- turn-based decision sederhana,
- mini game dengan state diskrit.

Q-learning kurang cocok langsung untuk:
- state sangat besar,
- visual input kompleks,
- action continuous,
- environment 3D kompleks,
- banyak agent rumit.

Untuk kasus kompleks, digunakan Deep Reinforcement Learning.

---

# Slide 40 — Contoh Q-Learning Enemy

State sederhana:

```text
distanceToPlayer:
Near / Medium / Far

health:
Low / High
```

Action:

```text
Attack
Chase
Flee
TakeCover
```

Reward:
- +1 jika berhasil menyerang,
- -1 jika mati,
- +0.5 jika bertahan hidup,
- -0.2 jika terlalu jauh dari target.

Q-learning dapat mencoba belajar kapan menyerang atau kabur.

Namun untuk praktikum awal, grid world lebih aman dan jelas.

---

# Slide 41 — State Space Problem

Masalah Q-learning klasik:

```text
Jumlah state bisa sangat besar.
```

Contoh:
- posisi x,y besar,
- health banyak nilai,
- enemy banyak,
- item banyak,
- obstacle banyak.

Jika state terlalu banyak:
- Q-table menjadi besar,
- training lambat,
- memori besar.

Solusi:
- sederhanakan state,
- discretization,
- function approximation,
- neural network,
- ML-Agents / deep RL.

---

# Slide 42 — Discretization

Discretization mengubah nilai kontinu menjadi kategori.

Contoh:

```text
distance = 2.3
```

diubah menjadi:

```text
Near
```

Contoh:

```text
distance < 3       → Near
3 <= distance < 8  → Medium
distance >= 8      → Far
```

Dengan discretization, Q-learning lebih mudah diterapkan.

---

# Slide 43 — Penggunaan ML dalam Game

ML dalam game dapat digunakan untuk beberapa area.

```text
Machine Learning for Games
├�”€─ Agent Control
├�”€─ Player Modeling
├�”€─ Game Balancing
├�”€─ Content Generation
├�”€─ Animation
├�”€─ Matchmaking
├�”€─ Testing
└�”€─ Analytics
```

Tidak semua ML harus digunakan untuk NPC.

Banyak ML game justru digunakan untuk memahami player dan meningkatkan desain.

---

# Slide 44 — ML untuk Agent Control

Contoh:
- agent belajar mencapai target,
- agent belajar menghindari obstacle,
- robot belajar berjalan,
- enemy belajar strategi sederhana,
- bot belajar bermain mini game.

Kelebihan:
- dapat menemukan strategi baru,
- cocok untuk simulasi.

Kekurangan:
- training memerlukan waktu,
- debugging lebih sulit,
- behavior bisa tidak terduga.

---

# Slide 45 — ML untuk Player Modeling

Menggunakan telemetry player.

Contoh:
- klasifikasi play style,
- prediksi skill,
- prediksi kebutuhan bantuan,
- prediksi player akan gagal,
- segmentasi player.

Ini melanjutkan Pertemuan 12.

Contoh supervised learning:

```text
Input:
accuracy, death count, exploration ratio

Output:
Aggressive / Defensive / Explorer
```

---

# Slide 46 — ML untuk Game Balancing

ML dapat membantu balancing.

Contoh:
- memprediksi level terlalu sulit,
- mencari parameter enemy yang seimbang,
- menganalisis win rate,
- mengoptimalkan reward,
- menguji ribuan simulasi bot.

Dalam production game, analytics dan simulation sangat penting untuk balancing.

---

# Slide 47 — ML untuk Content Generation

ML juga dapat digunakan untuk PCG.

Contoh:
- menghasilkan level berdasarkan contoh,
- memprediksi kualitas level,
- memilih konten yang cocok untuk player,
- adaptive PCG,
- procedural animation.

Namun dalam mata kuliah ini, PCG yang dipelajari sebelumnya masih berbasis rule.

ML-based PCG adalah pengembangan lanjutan.

---

# Slide 48 — ML untuk Game Testing

ML/bot dapat digunakan untuk testing.

Contoh:
- bot mencoba menyelesaikan level,
- mencari bug navigasi,
- mendeteksi area tidak bisa dicapai,
- menemukan exploit,
- menguji balancing.

Agent learning dapat digunakan sebagai automated playtester.

Ini sangat berguna untuk game dengan banyak konten procedural.

---

# Slide 49 — Unity ML-Agents

**Unity ML-Agents** adalah toolkit Unity untuk melatih agent menggunakan machine learning, terutama reinforcement learning.

Konsep utama:
- Agent,
- Behavior Parameters,
- Observations,
- Actions,
- Rewards,
- Episodes,
- Training,
- Inference.

ML-Agents memungkinkan scene Unity menjadi environment training.

---

# Slide 50 — Arsitektur Unity ML-Agents

Konsep:

```text
Unity Environment
        ↓ observations
Agent
        ↓ actions
Unity Environment
        ↓ rewards
Training Algorithm
```

Agent berada di Unity.

Training biasanya berjalan dengan Python package ML-Agents.

Setelah training selesai, model dapat digunakan untuk inference di Unity.

---

# Slide 51 — Agent dalam ML-Agents

Agent adalah GameObject yang memiliki script turunan dari:

```csharp
Agent
```

Agent mendefinisikan:
- observations,
- actions,
- rewards,
- episode reset.

Method penting:
- `OnEpisodeBegin()`
- `CollectObservations()`
- `OnActionReceived()`
- `Heuristic()`

---

# Slide 52 — Observation

Observation adalah data yang diberikan kepada agent.

Contoh:
- posisi agent,
- posisi target,
- velocity,
- distance to goal,
- ray sensor,
- health,
- obstacle information.

Contoh:

```csharp
sensor.AddObservation(transform.localPosition);
sensor.AddObservation(target.localPosition);
```

Observation harus relevan dengan tugas agent.

---

# Slide 53 — Action dalam ML-Agents

Action adalah output dari model.

Contoh action diskrit:
- move forward,
- turn left,
- turn right,
- jump.

Contoh action kontinu:
- horizontal movement,
- vertical movement,
- rotation value.

Dalam Unity:

```text
OnActionReceived(ActionBuffers actions)
```

Agent membaca action lalu menggerakkan GameObject.

---

# Slide 54 — Reward dalam ML-Agents

Reward diberikan dengan:

```csharp
AddReward(value);
```

atau:

```csharp
SetReward(value);
```

Contoh:

```csharp
AddReward(1.0f);    // mencapai target
AddReward(-1.0f);   // jatuh
AddReward(-0.01f);  // penalty waktu
```

Reward menentukan apa yang dipelajari agent.

---

# Slide 55 — Episode dalam ML-Agents

Episode dimulai saat environment di-reset.

```csharp
public override void OnEpisodeBegin()
{
    // reset posisi agent dan target
}
```

Episode selesai dengan:

```csharp
EndEpisode();
```

Contoh:
- agent mencapai target,
- agent jatuh,
- waktu habis,
- agent menabrak obstacle.

---

# Slide 56 — Behavior Parameters

`Behavior Parameters` adalah komponen Unity untuk mengatur:
- behavior name,
- observation type,
- action type,
- action size,
- model,
- behavior type.

Behavior type:
- Default,
- Heuristic Only,
- Inference Only.

Untuk training, agent menggunakan behavior yang terhubung dengan trainer.

---

# Slide 57 — Heuristic Mode

Heuristic mode memungkinkan action dikontrol manual.

Contoh:
- WASD untuk menggerakkan agent,
- digunakan untuk testing,
- digunakan untuk membandingkan manusia vs model,
- dapat dipakai untuk imitation learning.

Dalam praktikum pengantar, heuristic berguna untuk memastikan environment bekerja sebelum training.

---

# Slide 58 — Training dan Model

Training menghasilkan model.

Alur:

```text
Unity Scene
    ↓
ML-Agents Trainer
    ↓
Agent mencoba banyak episode
    ↓
Model belajar policy
    ↓
Model disimpan
    ↓
Model digunakan di Unity
```

Model kemudian dipasang ke Behavior Parameters untuk inference.

---

# Slide 59 — Q-Learning vs ML-Agents

| Aspek | Q-Learning Sederhana | Unity ML-Agents |
|---|---|---|
| Kompleksitas | rendah | lebih tinggi |
| State | diskrit | bisa kontinu/kompleks |
| Implementasi | C# sederhana | Unity + Python trainer |
| Visualisasi | mudah untuk grid kecil | kuat untuk simulasi 3D |
| Cocok untuk | konsep dasar RL | agent game lebih realistis |
| Praktikum awal | sangat cocok | cocok untuk demo/pengenalan |

Untuk Pertemuan 13, keduanya dapat diperkenalkan.

---

# Slide 60 — Rekomendasi Praktikum

Untuk praktikum yang paling aman:

```text
Implementasi Q-Learning sederhana pada grid
```

Alasan:
- konsep RL terlihat jelas,
- tidak butuh setup Python,
- mudah dijelaskan,
- mudah divisualisasikan,
- cocok untuk memahami state-action-reward.

Alternatif:

```text
Unity ML-Agents Introduction
```

Cocok jika waktu dan setup lab mendukung.

---

# Slide 61 — Praktikum Opsi A: Q-Learning Grid Agent

Konsep:

```text
Agent belajar mencapai goal pada grid.
Obstacle memberi penalty.
Setiap langkah memberi penalty kecil.
Goal memberi reward besar.
```

Grid:

```text
S . . .
. # . .
. # . G
. . . .
```

Action:
- up,
- down,
- left,
- right.

Output:
- agent semakin cepat menemukan goal setelah banyak episode.

---

# Slide 62 — Komponen Praktikum Q-Learning

Script yang direncanakan:

```text
Scripts/
├�”€─ GridWorld.cs
├�”€─ QLearningAgent.cs
├�”€─ QTable.cs
├�”€─ GridCell.cs
├�”€─ TrainingManager.cs
└�”€─ QLearningDebugUI.cs
```

Komponen:
- grid,
- obstacle,
- start,
- goal,
- agent,
- reward system,
- Q-table,
- training loop,
- debug visualization.

---

# Slide 63 — Parameter Praktikum Q-Learning

Parameter:

```text
learningRate
discountFactor
epsilon
epsilonDecay
minEpsilon
episodeCount
maxStepsPerEpisode
stepPenalty
goalReward
obstaclePenalty
```

Contoh:

```text
learningRate = 0.2
discountFactor = 0.9
epsilon = 0.3
stepPenalty = -0.01
goalReward = +1
obstaclePenalty = -1
```

Mahasiswa dapat bereksperimen dengan parameter ini.

---

# Slide 64 — Debug Q-Learning

Debug yang perlu ditampilkan:
- episode saat ini,
- total reward,
- jumlah step,
- epsilon,
- posisi agent,
- action yang dipilih,
- Q-value tiap arah,
- policy arrow pada grid.

Contoh visual:

```text
↑  →  →  ↓
↑  #  →  ↓
↑  #  →  G
→  →  →  ↑
```

Visualisasi membuat proses belajar mudah dipahami.

---

# Slide 65 — Praktikum Opsi B: Unity ML-Agents Introduction

Konsep:

```text
Agent belajar mencapai target di arena sederhana.
```

Scene:
- plane,
- agent cube/robot,
- target,
- wall/obstacle opsional.

Reward:
- +1 mencapai target,
- -1 jatuh/keluar area,
- -0.01 setiap step.

Observation:
- posisi agent,
- posisi target,
- velocity agent.

Action:
- gerak kiri/kanan,
- gerak maju/mundur.

---

# Slide 66 — Komponen ML-Agents Praktikum

Komponen Unity:
- Agent GameObject,
- Target GameObject,
- Ground,
- Behavior Parameters,
- Decision Requester,
- Agent script,
- training configuration.

Method Agent:
- `OnEpisodeBegin()`
- `CollectObservations()`
- `OnActionReceived()`
- `Heuristic()`

Detail setup package dan training akan dijelaskan pada modul praktikum terpisah.

---

# Slide 67 — Rencana Scene Praktikum

Untuk Q-learning:

```text
QLearningGridScene
├�”€─ GridWorld
├�”€─ Agent
├�”€─ Goal
├�”€─ Obstacles
└�”€─ Debug UI
```

Untuk ML-Agents:

```text
MLAgentsIntroScene
├�”€─ Ground
├�”€─ LearningAgent
├�”€─ Target
├�”€─ Obstacles
├�”€─ Behavior Parameters
└�”€─ Training Area
```

Keduanya bertujuan memperlihatkan agent belajar dari interaksi.

---

# Slide 68 — Eksperimen Mahasiswa

Mahasiswa dapat mencoba:

1. Mengubah reward goal.
2. Mengubah penalty obstacle.
3. Mengubah penalty langkah.
4. Mengubah epsilon.
5. Mengubah learning rate.
6. Mengubah discount factor.
7. Menambahkan obstacle.
8. Membandingkan training awal dan akhir.
9. Mengamati policy yang terbentuk.
10. Membandingkan rule-based pathfinding dan learned behavior.

---

# Slide 69 — Evaluasi Praktikum

Pertanyaan evaluasi:

1. Apakah agent belajar dari episode?
2. Apakah reward memengaruhi perilaku agent?
3. Apakah epsilon memengaruhi eksplorasi?
4. Apakah Q-table berubah selama training?
5. Apakah agent menemukan jalur lebih baik?
6. Apakah reward design sudah tepat?
7. Apakah agent melakukan reward hacking?
8. Apakah training stabil?
9. Apakah hasil dapat dijelaskan?
10. Apa perbedaan hasil belajar dan pathfinding A*?

---

# Slide 70 — Q-Learning vs A*

Q-learning dan A* sama-sama bisa menghasilkan jalur, tetapi berbeda.

| Aspek | A* | Q-Learning |
|---|---|---|
| Jenis | algoritma pathfinding | reinforcement learning |
| Input | graph + heuristic | reward + pengalaman |
| Output | path langsung | policy hasil belajar |
| Perlu training | tidak | ya |
| Cocok untuk | jalur optimal eksplisit | belajar dari trial-error |
| Debug | relatif mudah | perlu analisis Q-value |

A* mencari jalur.  
Q-learning belajar kebijakan aksi.

---

# Slide 71 — Mengapa Belajar Q-Learning Jika Ada A*?

Pertanyaan penting:

```text
Jika A* bisa mencari path, mengapa belajar Q-learning?
```

Jawaban:
- Q-learning mengenalkan konsep RL,
- tidak hanya untuk path,
- dapat belajar dari reward,
- dapat digunakan untuk keputusan yang tidak mudah dirumuskan sebagai graph,
- menjadi dasar untuk memahami Deep RL dan ML-Agents.

Untuk pathfinding murni, A* tetap lebih praktis.

---

# Slide 72 — Integrasi ML dengan Game AI Klasik

ML tidak harus menggantikan Game AI klasik.

Contoh integrasi:

```text
FSM untuk mode besar
Behavior Tree untuk struktur behavior
Utility AI untuk memilih aksi
ML untuk mengatur parameter
NavMesh untuk movement
```

Contoh:

```text
Behavior Tree memilih "Combat"
Utility AI memilih "Take Cover"
ML model mengatur agresivitas enemy
NavMeshAgent bergerak ke cover
```

---

# Slide 73 — ML dan Player Modeling

Supervised learning dapat digunakan untuk player modeling.

Contoh:

```text
Input:
accuracy
damageTaken
roomsVisited
itemsCollected

Output:
playStyle
```

Model dapat menggantikan rule-based classifier.

Namun, untuk praktikum awal:
- rule-based classifier cukup,
- ML diperkenalkan sebagai pengembangan lanjut.

---

# Slide 74 — ML dan DDA

ML dapat membantu DDA.

Contoh:
- memprediksi player akan kalah,
- menyesuaikan difficulty sebelum frustrasi,
- mengatur spawn berdasarkan prediksi performa,
- memilih adaptasi yang paling efektif.

DDA berbasis rule:

```text
Jika health rendah, turunkan difficulty.
```

DDA berbasis prediksi:

```text
Model memprediksi player akan gagal dalam 30 detik.
Game memberi bantuan lebih awal.
```

---

# Slide 75 — ML dan PCG

ML dapat digunakan untuk mengevaluasi atau menghasilkan konten.

Contoh:
- model memprediksi apakah level terlalu sulit,
- model memilih dungeon seed yang cocok,
- generator belajar dari level buatan designer,
- adaptive content generation berdasarkan player profile.

Namun ini adalah topik lanjutan.

Pada mata kuliah ini, mahasiswa cukup memahami hubungan ML dengan PCG.

---

# Slide 76 — Risiko Penggunaan ML dalam Game

Risiko:
- sulit di-debug,
- hasil tidak selalu konsisten,
- butuh data atau training,
- bisa menghasilkan behavior aneh,
- sulit dikontrol designer,
- setup teknis lebih kompleks,
- performa training bisa mahal.

Karena itu ML sebaiknya digunakan ketika memang memberi manfaat yang jelas.

---

# Slide 77 — Explainability

Game AI perlu bisa dijelaskan, terutama untuk debugging dan desain.

FSM mudah dijelaskan:

```text
State = Chase karena player terlihat.
```

Utility AI cukup mudah dijelaskan:

```text
Attack score tertinggi.
```

ML lebih sulit:

```text
Model memilih action karena hasil training.
```

Untuk praktikum, debug Q-value atau reward history membantu menjelaskan perilaku agent.

---

# Slide 78 — ML untuk Pendidikan Game AI

Mengapa mahasiswa perlu belajar ML untuk game?

Karena ML memperkenalkan:
- agent yang belajar,
- reward-based behavior,
- trial and error,
- data-driven decision,
- adaptive systems,
- hubungan game dengan AI modern.

Tetapi mahasiswa juga harus memahami batasnya.

Game AI modern sering menggabungkan:
- algoritma klasik,
- rule-based AI,
- data-driven AI,
- ML.

---

# Slide 79 — Ringkasan Materi

Hari ini kita mempelajari:

```text
Machine Learning for Games
│
├�”€─ Rule-Based vs Learning-Based AI
├�”€─ Supervised Learning
├�”€─ Reinforcement Learning
├�”€─ Agent & Environment
├�”€─ State
├�”€─ Action
├�”€─ Reward
├�”€─ Policy
├�”€─ Episode
├�”€─ Exploration vs Exploitation
├�”€─ Epsilon-Greedy
├�”€─ Q-Learning
├�”€─ Q-Table
├�”€─ Reward Design
├�”€─ Unity ML-Agents
└�”€─ Praktikum Q-Learning / ML-Agents
```

Konsep kunci:

> Dalam reinforcement learning, agent belajar memilih aksi melalui pengalaman dan reward, bukan hanya mengikuti aturan eksplisit yang ditulis developer.

---

# Slide 80 — Pertanyaan Diskusi

1. Apa perbedaan rule-based AI dan learning-based AI?
2. Kapan ML cocok digunakan dalam game?
3. Apa perbedaan supervised learning dan reinforcement learning?
4. Apa yang dimaksud state?
5. Apa yang dimaksud action?
6. Mengapa reward sangat penting?
7. Apa fungsi epsilon dalam epsilon-greedy?
8. Apa isi Q-table?
9. Mengapa Q-learning kurang cocok untuk state sangat besar?
10. Apa perbedaan Q-learning dan A*?

---

# Slide 81 — Latihan Konsep Supervised Learning

Rancang supervised learning untuk klasifikasi play style.

Data input:

```text
accuracy
damageTaken
roomsVisited
itemsCollected
completionTime
attackFrequency
```

Label:

```text
Aggressive
Defensive
Explorer
Speedrunner
```

Tentukan:
1. Fitur input yang digunakan.
2. Label yang ingin diprediksi.
3. Contoh data training.
4. Bagaimana model digunakan dalam game.
5. Adaptasi apa yang dilakukan setelah style diprediksi.

---

# Slide 82 — Latihan Konsep Reinforcement Learning

Rancang RL environment sederhana.

Spesifikasi:

```text
Agent berada di grid 5x5.
Goal berada di pojok kanan atas.
Obstacle berada di beberapa cell.
Agent dapat bergerak atas, bawah, kiri, kanan.
```

Tentukan:
1. State.
2. Action.
3. Reward.
4. Kapan episode selesai.
5. Bagaimana agent belajar.
6. Apa yang ditampilkan di debug UI.

---

# Slide 83 — Latihan Reward Design

Untuk agent yang harus mencapai goal, tentukan reward.

Pertanyaan:
1. Reward apa untuk mencapai goal?
2. Penalty apa untuk menabrak obstacle?
3. Apakah perlu penalty setiap langkah?
4. Bagaimana mencegah agent berputar-putar?
5. Bagaimana memastikan agent mencari jalur pendek?
6. Apa risiko reward hacking?

---

# Slide 84 — Penutup

## Praktikum Pertemuan 13

Praktikum detail akan dibuat pada modul terpisah:

```text
Implementasi Q-Learning sederhana
atau
Unity ML-Agents Introduction
```

Rekomendasi utama:

```text
Q-Learning sederhana pada grid
```

karena lebih mudah dipahami dan langsung menunjukkan konsep:
- state,
- action,
- reward,
- Q-table,
- exploration,
- learning.

Materi berikutnya:

```text
Reinforcement Learning with Unity ML-Agents
```

---

# Catatan Pembelajaran

Urutan pembelajaran yang disarankan:

```text
1. Review Player Modeling sebagai data-driven AI
2. Jelaskan rule-based vs learning-based AI
3. Jelaskan supervised learning dengan contoh play style
4. Jelaskan reinforcement learning dengan agent-environment
5. Bahas state, action, reward
6. Jelaskan exploration vs exploitation
7. Jelaskan Q-table dan Q-learning
8. Tunjukkan contoh grid world
9. Perkenalkan Unity ML-Agents secara konseptual
10. Tutup dengan gambaran praktikum Q-learning / ML-Agents
```

Penekanan penting:

> Machine Learning dalam game bukan pengganti semua teknik Game AI. ML adalah alat tambahan yang sangat berguna ketika game membutuhkan pembelajaran dari data atau pengalaman, sedangkan teknik klasik tetap penting untuk kontrol, stabilitas, dan desain gameplay.
