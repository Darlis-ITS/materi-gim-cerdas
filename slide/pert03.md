# Game Cerdas — Pertemuan 3
## Movement AI & Steering Behaviors
**Program Studi S1 Teknik Informatika — Semester 7**  
**Tools:** Unity 6 + C#  
**Posisi materi:** Lanjutan dari Pertemuan 1 (Introduction to Game AI) dan Pertemuan 2 (AI Architecture & Game Agent)

---

# Slide 1 — Cover

## Movement AI & Steering Behaviors

**Game Cerdas — Pertemuan 3**

Topik utama:
- Autonomous movement
- Kinematic vs dynamic movement
- Seek, Flee, Arrive
- Pursue, Evade, Wander
- Obstacle Avoidance
- Separation, Alignment, Cohesion
- Combining Steering Behaviors
- Implementasi dasar pada Unity 6

> Fokus pertemuan ini adalah membuat agen dapat bergerak secara **mandiri, responsif, halus, dan masuk akal** terhadap kondisi game world.

---

# Slide 2 — Posisi Materi dalam Game AI

Pada dua pertemuan sebelumnya kita telah membangun kerangka:

```text
GAME WORLD
    ↓
PERCEPTION
    ↓
MEMORY / STATE
    ↓
DECISION
    ↓
ACTION
    ↓
GAME WORLD
```

Pada Pertemuan 3 kita fokus pada bagian:

```text
DECISION
   ↓
MOVEMENT / ACTION
```

Contoh:
- NPC memutuskan **mengejar player**
- Sistem movement menentukan **bagaimana NPC bergerak menuju player**

**Decision AI menjawab:** “Apa yang harus dilakukan?”  
**Movement AI menjawab:** “Bagaimana agen bergerak untuk melakukannya?”

---

# Slide 3 — Capaian Pembelajaran Pertemuan

Setelah pertemuan ini, mahasiswa diharapkan mampu:

1. Menjelaskan perbedaan movement biasa dan autonomous movement.
2. Menjelaskan konsep kinematic dan dynamic movement.
3. Menggunakan `Vector3` untuk menghitung arah dan jarak.
4. Mengimplementasikan beberapa steering behavior dasar.
5. Mengatur kecepatan, percepatan, rotasi, dan stopping distance.
6. Menggunakan sensor fisika Unity untuk obstacle avoidance sederhana.
7. Menjelaskan prinsip flocking: separation, alignment, cohesion.
8. Menggabungkan beberapa steering behavior untuk menghasilkan gerakan yang lebih natural.

---

# Slide 4 — Apa Itu Movement AI?

**Movement AI** adalah bagian dari Game AI yang mengatur bagaimana sebuah agent bergerak di dalam lingkungan.

Movement AI dapat menentukan:
- arah gerak,
- kecepatan,
- percepatan,
- orientasi,
- respons terhadap target,
- respons terhadap obstacle,
- respons terhadap agent lain.

Contoh movement AI:

```text
NPC melihat player
      ↓
Seek
      ↓
NPC bergerak menuju player
```

atau:

```text
NPC terlalu dekat dengan player
      ↓
Flee
      ↓
NPC menjauh dari player
```

Movement AI bukan selalu pathfinding.

---

# Slide 5 — Movement AI vs Pathfinding

## Movement AI

Mengatur gerakan lokal dalam jangka pendek.

Contoh:
- seek,
- flee,
- arrive,
- wander,
- obstacle avoidance.

## Pathfinding

Menghitung jalur dari posisi awal ke tujuan.

Contoh:

```text
Start
  ↓
Waypoint A
  ↓
Waypoint B
  ↓
Goal
```

Pada Unity:

- Steering behavior → biasanya dibuat melalui script sendiri.
- Navigation/pathfinding → dapat menggunakan `NavMeshAgent`.

Keduanya sering digunakan bersama.

---

# Slide 6 — Autonomous Agent

**Autonomous Agent** adalah objek yang dapat mengambil keputusan dan bergerak tanpa dikontrol langsung oleh player.

Contoh:

```text
Player
  │
  │ menjadi target
  ▼
NPC Agent
  │
  ├── membaca posisi target
  ├── menghitung arah
  ├── menentukan velocity
  └── bergerak
```

Komponen umum autonomous agent:

```text
Agent
├── Sensor
├── Memory
├── Decision
├── Steering
└── Locomotion
```

**Steering** menghasilkan keinginan gerak.  
**Locomotion** menerjemahkannya menjadi gerakan fisik aktual.

---

# Slide 7 — Istilah Penting: Position, Direction, Velocity

## Position

Posisi objek di dunia.

Unity:

```csharp
transform.position
```

## Direction

Arah dari satu titik ke titik lain.

```csharp
Vector3 direction = target.position - transform.position;
```

## Velocity

Arah sekaligus besar kecepatan.

Secara sederhana:

```text
velocity = direction × speed
```

Contoh Unity:

```csharp
Vector3 velocity = direction.normalized * moveSpeed;
```

---

# Slide 8 — Vector3 dalam Unity

`Vector3` adalah salah satu tipe data terpenting dalam pemrograman Game AI 3D.

Contoh:

```csharp
Vector3 position;
Vector3 direction;
Vector3 velocity;
Vector3 acceleration;
```

Properti penting:

```csharp
direction.magnitude
direction.sqrMagnitude
direction.normalized
```

Contoh:

```csharp
Vector3 toTarget = target.position - transform.position;

float distance = toTarget.magnitude;
Vector3 direction = toTarget.normalized;
```

`normalized` menghasilkan vector dengan panjang 1.

---

# Slide 9 — Menghitung Arah ke Target

Misalnya:

```text
Agent A = (2, 0, 2)
Target  = (7, 0, 5)
```

Maka:

```text
Direction = Target - Agent
```

Dalam Unity:

```csharp
Vector3 direction =
    target.position - transform.position;
```

Untuk menghasilkan arah unit:

```csharp
direction.Normalize();
```

atau:

```csharp
Vector3 direction =
    (target.position - transform.position).normalized;
```

Konsep ini menjadi dasar hampir seluruh steering behavior.

---

# Slide 10 — Kinematic Movement

**Kinematic movement** mengubah posisi atau rotasi objek secara langsung.

Contoh:

```csharp
transform.position +=
    direction * speed * Time.deltaTime;
```

Karakteristik:
- sederhana,
- mudah dikontrol,
- cocok untuk demo AI,
- tidak selalu mengikuti simulasi fisika.

Contoh lain:

```csharp
transform.Translate(
    Vector3.forward * speed * Time.deltaTime
);
```

Kinematic movement sering digunakan untuk pembelajaran awal steering behavior.

---

# Slide 11 — Dynamic Movement

Dynamic movement menggunakan konsep:

```text
Acceleration
    ↓
Velocity
    ↓
Position
```

Model sederhana:

```text
velocity += acceleration × dt
position += velocity × dt
```

Contoh:

```csharp
velocity += acceleration * Time.deltaTime;
transform.position += velocity * Time.deltaTime;
```

Dynamic movement menghasilkan perubahan gerak yang lebih halus karena kecepatan tidak berubah secara instan.

---

# Slide 12 — Unity: Transform vs Rigidbody

## Menggunakan Transform

Contoh:

```csharp
transform.position += velocity * Time.deltaTime;
```

Kelebihan:
- sederhana,
- mudah dipahami,
- cocok untuk prototyping.

## Menggunakan Rigidbody

Contoh:

```csharp
rb.MovePosition(
    rb.position + velocity * Time.fixedDeltaTime
);
```

atau menggunakan gaya:

```csharp
rb.AddForce(acceleration, ForceMode.Acceleration);
```

Jika objek menggunakan fisika Unity, hindari memindahkan `Transform` secara sembarangan karena dapat menyebabkan interaksi fisika tidak konsisten.

---

# Slide 13 — Update() vs FixedUpdate()

## `Update()`

Dipanggil sekali per rendered frame.

Cocok untuk:
- membaca input,
- logika AI,
- perhitungan nonfisika,
- movement berbasis Transform.

```csharp
void Update()
{
    Think();
    Move();
}
```

## `FixedUpdate()`

Dipanggil dengan timestep fisika tetap.

Cocok untuk:
- `Rigidbody`,
- `AddForce`,
- physics-based movement.

```csharp
void FixedUpdate()
{
    rb.AddForce(force);
}
```

Prinsip umum:

```text
Transform movement → Update()
Rigidbody physics → FixedUpdate()
```

---

# Slide 14 — Time.deltaTime

Tanpa `Time.deltaTime`:

```csharp
transform.position += direction * speed;
```

Gerakan akan tergantung frame rate.

Dengan:

```csharp
transform.position +=
    direction * speed * Time.deltaTime;
```

`speed` dapat dipahami sebagai satuan per detik.

Contoh:

```text
moveSpeed = 5
```

berarti kira-kira:

```text
5 Unity units / second
```

---

# Slide 15 — Steering Behavior

Steering behavior menghasilkan **steering output** untuk mengarahkan agent.

Model konseptual:

```text
Target / Environment
        ↓
Steering Behavior
        ↓
Desired Direction
        ↓
Desired Velocity / Acceleration
        ↓
Movement Controller
        ↓
Agent bergerak
```

Steering behavior dapat berbasis:
- posisi,
- velocity,
- jarak,
- obstacle,
- agent lain.

---

# Slide 16 — Seek

**Seek** membuat agent bergerak menuju target.

Rumus dasar:

```text
direction = targetPosition - agentPosition
```

Kemudian:

```text
desiredVelocity =
normalize(direction) × maxSpeed
```

Contoh Unity:

```csharp
Vector3 direction =
    (target.position - transform.position).normalized;

Vector3 velocity =
    direction * maxSpeed;

transform.position +=
    velocity * Time.deltaTime;
```

Seek cocok untuk:
- mengejar player,
- menuju waypoint,
- menuju item,
- menuju titik tertentu.

---

# Slide 17 — Masalah pada Seek Sederhana

Seek sederhana selalu bergerak dengan kecepatan maksimum.

Akibatnya:

```text
Agent →→→→→ Target
```

Ketika sampai target:
- dapat melewati target,
- bolak-balik,
- terlihat tidak natural.

Solusi yang umum:
- stopping distance,
- slowing radius,
- **Arrive behavior**.

---

# Slide 18 — Flee

**Flee** adalah kebalikan dari Seek.

Seek:

```text
Target - Agent
```

Flee:

```text
Agent - Threat
```

Contoh:

```csharp
Vector3 direction =
    (transform.position - threat.position).normalized;

Vector3 velocity =
    direction * maxSpeed;
```

Contoh penggunaan:
- civilian menghindari monster,
- enemy lemah melarikan diri,
- prey menghindari predator,
- NPC menjauh dari ledakan.

---

# Slide 19 — Flee dengan Panic Distance

NPC tidak perlu terus-menerus menjauh.

Tambahkan jarak ancaman:

```csharp
float distance =
    Vector3.Distance(transform.position, threat.position);

if (distance < panicDistance)
{
    Flee();
}
```

Istilah yang sering digunakan:
- `panicDistance`
- `panicRadius`
- `threatRadius`

Di luar radius ancaman, agent dapat kembali ke behavior normal.

---

# Slide 20 — Arrive

**Arrive** membuat agent melambat ketika mendekati target.

Tiga area:

```text
        Target
          ●
       STOP AREA
     ─────────────
       SLOW AREA
  ───────────────────
      FULL SPEED
```

Parameter utama:
- `maxSpeed`
- `slowRadius`
- `stopRadius`

Tujuan:

```text
jauh → cepat
dekat → melambat
sangat dekat → berhenti
```

---

# Slide 21 — Implementasi Arrive

Contoh logika sederhana:

```csharp
Vector3 toTarget =
    target.position - transform.position;

float distance = toTarget.magnitude;

if (distance <= stopRadius)
{
    velocity = Vector3.zero;
}
else
{
    float desiredSpeed = maxSpeed;

    if (distance < slowRadius)
    {
        desiredSpeed =
            maxSpeed * (distance / slowRadius);
    }

    velocity =
        toTarget.normalized * desiredSpeed;
}
```

Dengan Arrive, pergerakan terlihat lebih natural daripada Seek murni.

---

# Slide 22 — Rotasi Agent

Agent sebaiknya menghadap ke arah gerak.

Arah:

```csharp
Vector3 direction = velocity.normalized;
```

Rotasi target:

```csharp
Quaternion targetRotation =
    Quaternion.LookRotation(direction);
```

Rotasi halus:

```csharp
transform.rotation =
    Quaternion.Slerp(
        transform.rotation,
        targetRotation,
        turnSpeed * Time.deltaTime
    );
```

`Quaternion` digunakan Unity untuk merepresentasikan rotasi 3D.

---

# Slide 23 — Memisahkan Gerak pada Bidang XZ

Pada banyak game 3D top-down / third-person, NPC bergerak hanya di lantai.

Contoh:

```csharp
Vector3 direction =
    target.position - transform.position;

direction.y = 0f;
```

Tujuan:
- mencegah NPC menengadah,
- mencegah pengaruh beda elevasi kecil,
- menjaga orientasi tetap horizontal.

Ini umum pada AI karakter berbasis ground movement.

---

# Slide 24 — Pursue

Seek menggunakan **posisi target saat ini**.

Pursue mencoba memperkirakan **posisi target di masa depan**.

Formula sederhana:

```text
predictedPosition =
targetPosition + targetVelocity × predictionTime
```

Agent kemudian melakukan Seek terhadap predicted position.

Cocok untuk target yang bergerak cepat.

---

# Slide 25 — Implementasi Pursue

Contoh:

```csharp
Vector3 predictedPosition =
    target.position +
    targetVelocity * predictionTime;

Vector3 direction =
    (predictedPosition - transform.position).normalized;
```

Sumber `targetVelocity` dapat berasal dari:

```csharp
Rigidbody targetRb;
Vector3 targetVelocity = targetRb.linearVelocity;
```

atau dihitung dari perubahan posisi antar-frame.

Pursue cocok untuk:
- predator mengejar mangsa,
- racing AI,
- missile guidance sederhana,
- enemy mengejar player yang bergerak cepat.

---

# Slide 26 — Evade

**Evade** adalah kebalikan dari Pursue.

Agent menghindari posisi ancaman yang diprediksi.

Proses:

1. Prediksi posisi threat.
2. Hitung arah menjauh dari predicted position.
3. Bergerak ke arah tersebut.

Evade lebih cerdas daripada Flee untuk target yang bergerak cepat.

---

# Slide 27 — Wander

**Wander** menghasilkan gerak seolah-olah agent sedang menjelajah tanpa tujuan spesifik.

Random direction sederhana sering terlihat terlalu kasar.

Steering Wander yang lebih baik menggunakan target imajiner di depan agent.

```text
       Wander Circle
          ○
        × target
         \
Agent ● ───→ forward
```

Target pada lingkaran digeser sedikit secara random setiap frame.

Wander biasanya dipakai untuk:
- animal NPC,
- civilian idle movement,
- ambient agents.

---

# Slide 28 — Implementasi Wander Sederhana

Versi pembelajaran:

```csharp
wanderTimer -= Time.deltaTime;

if (wanderTimer <= 0f)
{
    Vector2 random =
        Random.insideUnitCircle.normalized;

    wanderDirection =
        new Vector3(random.x, 0f, random.y);

    wanderTimer = changeInterval;
}
```

Versi yang lebih natural:
- tambahkan arah forward agent,
- gunakan circle offset,
- ubah wander angle sedikit demi sedikit.

---

# Slide 29 — Obstacle Avoidance

Agent harus dapat menghindari obstacle lokal.

Salah satu cara termudah di Unity:

```text
Physics.Raycast
Physics.SphereCast
```

Konsep:

```text
        obstacle
         ███
Agent ● ───→ ray
          ↘ avoid
```

Jika sensor mendeteksi obstacle:
- hitung arah menghindar,
- dapat memanfaatkan `RaycastHit.normal`,
- gabungkan dengan desired movement.

---

# Slide 30 — Physics.Raycast

Contoh:

```csharp
RaycastHit hit;

if (Physics.Raycast(
        transform.position,
        transform.forward,
        out hit,
        avoidDistance,
        obstacleMask))
{
    Debug.Log("Obstacle detected");
}
```

Parameter penting:

```text
origin
direction
maxDistance
layerMask
```

Visualisasi:

```csharp
Debug.DrawRay(
    transform.position,
    transform.forward * avoidDistance,
    Color.red
);
```

Raycast sangat penting dalam perception dan movement AI.

---

# Slide 31 — LayerMask pada Sensor AI

Tidak semua collider harus dianggap obstacle.

Gunakan layer:

```text
Player
Enemy
Obstacle
Ground
Environment
```

Script:

```csharp
[SerializeField]
private LayerMask obstacleMask;
```

Kemudian:

```csharp
Physics.Raycast(
    origin,
    direction,
    out hit,
    distance,
    obstacleMask
);
```

Keuntungan:
- lebih terkontrol,
- lebih efisien,
- mengurangi deteksi objek yang tidak relevan.

---

# Slide 32 — SphereCast vs Raycast

`Raycast`:

```text
──────→
```

Sensor berupa garis.

`SphereCast`:

```text
(====)→
```

Sensor memiliki radius.

Untuk agent karakter, SphereCast sering lebih representatif karena agent memiliki lebar.

Contoh:

```csharp
Physics.SphereCast(
    origin,
    agentRadius,
    transform.forward,
    out hit,
    avoidDistance,
    obstacleMask
);
```

---

# Slide 33 — Separation

**Separation** menjaga jarak antar-agent.

Jika agent terlalu dekat:

```text
A ●  ● B
  ↙  ↘
```

mereka menghasilkan steering untuk saling menjauh.

Konsep:

```text
separationForce
    += agentPosition - neighborPosition
```

Biasanya agent yang sangat dekat diberi pengaruh lebih besar.

Digunakan pada:
- crowd,
- flock,
- squad,
- animal groups.

---

# Slide 34 — Alignment

**Alignment** membuat agent menyesuaikan arah geraknya dengan agent di sekitarnya.

```text
→ → →
  ↑
```

Agent yang arahnya berbeda akan mencoba mengikuti rata-rata arah kelompok.

Konsep:

```text
averageVelocity =
sum(neighborVelocity) / neighborCount
```

Kemudian agent menyesuaikan velocity ke arah rata-rata tersebut.

---

# Slide 35 — Cohesion

**Cohesion** membuat agent bergerak menuju pusat kelompok.

Hitung center:

```text
center =
sum(neighborPosition) / neighborCount
```

Kemudian:

```text
cohesionDirection =
center - agentPosition
```

Tanpa cohesion, kelompok mudah tercerai.

---

# Slide 36 — Boids / Flocking

Model flocking klasik menggunakan tiga behavior:

```text
SEPARATION
     +
ALIGNMENT
     +
COHESION
     ↓
FLOCKING
```

Interpretasi:

- **Separation** → jangan terlalu dekat.
- **Alignment** → bergerak searah.
- **Cohesion** → tetap bersama kelompok.

Contoh:
- burung,
- ikan,
- swarm,
- crowd sederhana,
- drone formation.

---

# Slide 37 — Combining Steering Behaviors

Satu agent sering membutuhkan lebih dari satu behavior.

Contoh:

```text
Seek
+
Obstacle Avoidance
+
Separation
```

Gabungan:

```text
finalSteering =
seek × seekWeight
+
avoidance × avoidanceWeight
+
separation × separationWeight
```

Contoh bobot:

```text
Seek                1.0
Obstacle Avoidance  2.0
Separation          1.5
```

Obstacle avoidance biasanya diberi prioritas tinggi.

---

# Slide 38 — Weighted Blending

Teknik sederhana:

```csharp
Vector3 steering =
    seekForce * seekWeight +
    avoidForce * avoidWeight +
    separationForce * separationWeight;
```

Kemudian batasi besar vector:

```csharp
steering =
    Vector3.ClampMagnitude(
        steering,
        maxAcceleration
    );
```

Masalah weighted blending:

```text
dua behavior dapat saling membatalkan
```

Karena itu alternatif lain adalah **priority steering**.

---

# Slide 39 — Priority Steering

Behavior diperiksa berdasarkan prioritas.

Contoh:

```text
1. Obstacle Avoidance
2. Separation
3. Seek
4. Wander
```

Logika:

```text
Jika obstacle terdeteksi:
    gunakan avoidance
Else jika neighbor terlalu dekat:
    gunakan separation
Else:
    gunakan seek/wander
```

Priority steering sering mudah dipahami dan praktis untuk game.

---

# Slide 40 — Membatasi Speed dan Acceleration

Tanpa batas:

```text
velocity → semakin besar
```

Gunakan:

```csharp
velocity =
    Vector3.ClampMagnitude(
        velocity,
        maxSpeed
    );
```

Acceleration:

```csharp
acceleration =
    Vector3.ClampMagnitude(
        acceleration,
        maxAcceleration
    );
```

Parameter penting agent:

```text
maxSpeed
maxAcceleration
turnSpeed
stopRadius
slowRadius
```

Parameter ini menentukan “karakter” movement NPC.

---

# Slide 41 — Inspector dan SerializeField

Daripada seluruh parameter sulit dituning, gunakan:

```csharp
[SerializeField]
private float maxSpeed = 5f;
```

Keuntungan:
- dapat diubah dari Inspector,
- mudah tuning,
- tidak perlu mengubah kode untuk setiap eksperimen.

Contoh kelompok parameter:

```text
Movement
├── Max Speed
├── Max Acceleration
├── Turn Speed
├── Stop Radius
└── Slow Radius
```

Tuning parameter adalah bagian penting dalam Game AI.

---

# Slide 42 — Komponen Unity yang Relevan

Untuk Movement AI, mahasiswa perlu mengenal:

### GameObject
Objek di dalam scene.

### Transform
Menyimpan:
- position,
- rotation,
- scale.

### Rigidbody
Memberikan simulasi fisika.

### Collider
Mendefinisikan bentuk collision.

### MonoBehaviour
Base class untuk script Unity.

### Layer / LayerMask
Digunakan untuk filtering sensor/collision.

### Gizmos
Digunakan untuk debug visual di Scene View.

---

# Slide 43 — Debugging dengan Gizmos

Visual debugging sangat membantu untuk Game AI.

Contoh:

```csharp
void OnDrawGizmosSelected()
{
    Gizmos.DrawWireSphere(
        transform.position,
        slowRadius
    );
}
```

Dapat digunakan untuk menampilkan:
- detection radius,
- panic radius,
- slow radius,
- obstacle sensor,
- target point,
- predicted position.

Game AI akan jauh lebih mudah dipahami jika state internal agent divisualisasikan.

---

# Slide 44 — Contoh Struktur Script SteeringAgent

Contoh struktur:

```csharp
public class SteeringAgent : MonoBehaviour
{
    [SerializeField] Transform target;
    [SerializeField] float maxSpeed = 5f;
    [SerializeField] float turnSpeed = 8f;

    private Vector3 velocity;

    void Update()
    {
        Vector3 steering = CalculateSteering();
        ApplyMovement(steering);
        UpdateRotation();
    }

    Vector3 CalculateSteering()
    {
        // Seek / Arrive / Wander / dll.
        return Vector3.zero;
    }
}
```

Pisahkan:
- perhitungan steering,
- movement,
- rotation.

Ini membuat kode lebih modular.

---

# Slide 45 — Contoh Seek Agent Sederhana

```csharp
using UnityEngine;

public class SeekAgent : MonoBehaviour
{
    [SerializeField]
    private Transform target;

    [SerializeField]
    private float moveSpeed = 4f;

    [SerializeField]
    private float turnSpeed = 8f;

    void Update()
    {
        if (target == null)
            return;

        Vector3 direction =
            target.position - transform.position;

        direction.y = 0f;

        if (direction.sqrMagnitude < 0.001f)
            return;

        direction.Normalize();

        transform.position +=
            direction * moveSpeed * Time.deltaTime;

        Quaternion targetRotation =
            Quaternion.LookRotation(direction);

        transform.rotation =
            Quaternion.Slerp(
                transform.rotation,
                targetRotation,
                turnSpeed * Time.deltaTime
            );
    }
}
```

Script ini merupakan baseline sebelum menambahkan Arrive dan behavior lain.

---

# Slide 46 — Kenapa Menggunakan sqrMagnitude?

Contoh:

```csharp
if (direction.magnitude < 0.01f)
```

`magnitude` menghitung akar kuadrat.

Alternatif:

```csharp
if (direction.sqrMagnitude < 0.0001f)
```

Untuk pengecekan jarak berulang pada banyak agent, `sqrMagnitude` dapat mengurangi perhitungan yang tidak diperlukan.

Prinsip:

```text
distance < radius
```

dapat dibandingkan sebagai:

```text
squaredDistance < radius²
```

---

# Slide 47 — Steering vs NavMeshAgent

Unity menyediakan:

```text
NavMesh
NavMeshAgent
NavMeshSurface
```

`NavMeshAgent` sudah memiliki:
- pathfinding,
- speed,
- acceleration,
- angular speed,
- stopping distance,
- local obstacle avoidance.

Sedangkan custom steering memberi:
- kendali algoritmik,
- fleksibilitas,
- pemahaman internal movement AI.

Pada pertemuan ini fokusnya adalah **konsep steering secara eksplisit**, bukan hanya memakai NavMeshAgent.

---

# Slide 48 — Parameter NavMeshAgent yang Mirip Steering

Pada Inspector `NavMeshAgent`:

```text
Speed
Angular Speed
Acceleration
Stopping Distance
Auto Braking
Radius
Height
Obstacle Avoidance
```

Hubungan konsep:

| Steering Concept | NavMeshAgent |
|---|---|
| maxSpeed | Speed |
| maxAcceleration | Acceleration |
| rotation rate | Angular Speed |
| arrive threshold | Stopping Distance |
| agent size | Radius / Height |
| local avoidance | Obstacle Avoidance |

Ini menunjukkan bahwa banyak konsep steering juga digunakan oleh sistem navigasi Unity.

---

# Slide 49 — Kesalahan Umum Implementasi

### 1. Tidak menggunakan `Time.deltaTime`
Gerakan tergantung frame rate.

### 2. Tidak melakukan normalize
Kecepatan berubah karena jarak.

### 3. Menggunakan Seek tanpa stopping distance
NPC bergetar di sekitar target.

### 4. Mengubah Transform pada Rigidbody dinamis
Fisika menjadi tidak konsisten.

### 5. Tidak membatasi velocity
Agent dapat semakin cepat.

### 6. Semua steering diberi bobot sama
Behavior penting seperti obstacle avoidance menjadi lemah.

### 7. Tidak menggunakan LayerMask
Sensor mendeteksi collider yang tidak relevan.

---

# Slide 50 — Contoh Kasus: Enemy Chase

Kebutuhan:

```text
Enemy mengejar Player
```

Solusi minimal:

```text
Seek(Player)
```

Masalah:
- enemy menabrak obstacle,
- menumpuk dengan enemy lain,
- tidak berhenti dengan baik.

Solusi yang lebih baik:

```text
Arrive(Player)
+
Obstacle Avoidance
+
Separation
```

Hasil: enemy bergerak menuju player tanpa mudah menabrak dan tanpa terlalu menumpuk.

---

# Slide 51 — Contoh Kasus: Animal NPC

Kebutuhan:

```text
Animal berjalan bebas
dan menghindari player.
```

Behavior:

```text
Normal:
Wander
+
Obstacle Avoidance

Player dekat:
Flee
+
Obstacle Avoidance
```

Decision:

```text
distanceToPlayer < panicRadius ?
        │
    YES │ NO
        │
      Flee / Wander
```

Ini sudah menggabungkan perception, decision, dan movement.

---

# Slide 52 — Contoh Kasus: Flocking Agent

Setiap agent mencari neighbor dalam radius tertentu.

```text
Neighbor Detection
       ↓
 ┌─────┼──────┐
 ↓     ↓      ↓
Sep   Align  Cohesion
 └─────┼──────┘
       ↓
Combined Steering
       ↓
Movement
```

Parameter:

```text
neighborRadius
separationRadius
separationWeight
alignmentWeight
cohesionWeight
maxSpeed
```

Flocking adalah contoh menarik dari **emergent behavior**.

---

# Slide 53 — Emergent Behavior

**Emergent behavior** adalah perilaku kompleks yang muncul dari aturan sederhana.

Pada flocking:

```text
Separation
Alignment
Cohesion
```

tidak pernah secara eksplisit memerintahkan:

> “Bentuk kelompok burung yang realistis.”

Namun kombinasi tiga aturan tersebut dapat menghasilkan pola kelompok yang terlihat cerdas.

Ini adalah salah satu karakteristik penting Game AI.

---

# Slide 54 — Performa pada Banyak Agent

Jika terdapat:

```text
N agent
```

dan setiap agent memeriksa semua agent lain:

```text
O(N²)
```

Contoh:

```text
100 agent
≈ 10.000 pemeriksaan pair
```

Teknik optimasi:
- neighbor radius,
- physics overlap,
- spatial partitioning,
- grid,
- quadtree / octree,
- update AI tidak setiap frame.

Untuk praktikum kecil, implementasi sederhana masih cukup.

---

# Slide 55 — Update Rate AI

Tidak semua AI harus dihitung setiap rendered frame.

Contoh:

```csharp
if (Time.time >= nextThinkTime)
{
    Think();
    nextThinkTime =
        Time.time + thinkInterval;
}
```

Misalnya:

```text
Movement update : setiap frame
Decision update : 5–10 kali/detik
Heavy sensor    : beberapa kali/detik
```

Teknik ini dapat meningkatkan performa ketika jumlah NPC besar.

---

# Slide 56 — Hubungan dengan Pertemuan Selanjutnya

Materi hari ini:

```text
Steering
   ↓
Movement
```

Pertemuan berikutnya:

```text
Pathfinding
   ↓
Navigation
```

Kemudian keduanya digabung:

```text
A* / NavMesh
     ↓
Path / Waypoint
     ↓
Steering
     ↓
Local Movement
```

Pathfinding menentukan **ke mana lewatnya**.  
Steering menentukan **bagaimana bergeraknya**.

---

# Slide 57 — Rencana Praktikum 3

## Praktikum 3 — Autonomous Steering Agent

Tujuan praktikum:

Mahasiswa membuat agent Unity yang dapat:

1. bergerak menuju target,
2. berhenti dengan halus,
3. menghadap arah gerak,
4. menghindari obstacle sederhana,
5. berpindah ke wander ketika tidak memiliki target.

Behavior utama:

```text
Seek / Arrive
+
Wander
+
Obstacle Avoidance
```

Detail langkah implementasi akan diberikan pada **Modul Praktikum 3** terpisah.

---

# Slide 58 — Gambaran Scene Praktikum

Scene sederhana:

```text
┌───────────────────────────────┐
│          Obstacle             │
│             ███               │
│                               │
│     NPC ●                     │
│        \                      │
│         \                     │
│          \                    │
│                     ● Player  │
│                               │
└───────────────────────────────┘
```

GameObject:

```text
Scene
├── Ground
├── Player
├── NPC
├── Obstacles
└── Main Camera
```

NPC akan menggunakan custom steering script.

---

# Slide 59 — Script yang Direncanakan pada Praktikum

Struktur yang disarankan:

```text
Scripts/
├── SimplePlayerController.cs
├── SteeringAgent.cs
├── SteeringSensor.cs
└── SteeringDebug.cs
```

`SteeringAgent.cs`
- movement,
- seek,
- arrive,
- wander.

`SteeringSensor.cs`
- obstacle detection.

`SteeringDebug.cs`
- gizmos / debug visualization.

Praktikum sengaja dibuat modular agar dapat digunakan lagi pada pertemuan berikutnya.

---

# Slide 60 — Eksperimen yang Dapat Dilakukan

Setelah sistem bekerja, mahasiswa dapat mengubah:

```text
maxSpeed
turnSpeed
slowRadius
stopRadius
wanderStrength
sensorDistance
avoidanceWeight
```

Amati:
- apakah agent terlalu cepat?
- apakah gerakan terlalu tajam?
- apakah agent masih menabrak?
- apakah berhenti terlalu jauh?
- apakah wander terlalu acak?

Tujuan eksperimen adalah memahami bahwa kualitas Game AI sangat dipengaruhi oleh **parameter tuning**.

---

# Slide 61 — Ringkasan Pertemuan

Hari ini kita mempelajari:

```text
Movement AI
│
├── Vector & Velocity
├── Kinematic Movement
├── Dynamic Movement
│
├── Seek
├── Flee
├── Arrive
├── Pursue
├── Evade
├── Wander
│
├── Obstacle Avoidance
│
├── Separation
├── Alignment
├── Cohesion
│
└── Combining Steering
```

Konsep kunci:

> Movement yang terlihat “cerdas” sering muncul dari kombinasi beberapa aturan sederhana.

---

# Slide 62 — Pertanyaan Diskusi

1. Mengapa Seek saja kurang cocok untuk NPC yang harus berhenti di dekat target?
2. Kapan Flee lebih tepat dibanding Evade?
3. Mengapa obstacle avoidance tidak sama dengan pathfinding?
4. Apa akibatnya jika cohesion terlalu kuat?
5. Apa akibatnya jika separation terlalu lemah?
6. Kapan sebaiknya menggunakan Rigidbody?
7. Apa kelebihan custom steering dibanding langsung menggunakan NavMeshAgent?
8. Mengapa visual debugging penting untuk Game AI?

---

# Slide 63 — Penutup

## Pertemuan Berikutnya

# Pathfinding & Navigation

Materi berikutnya:

- graph representation,
- node dan edge,
- BFS,
- Dijkstra,
- A*,
- heuristic,
- waypoint,
- Unity NavMesh,
- NavMeshAgent,
- integrasi pathfinding dengan steering.

---

# Catatan Pembelajaran

Materi Pertemuan 3 ini sengaja menekankan bahwa mahasiswa harus memahami **movement secara algoritmik terlebih dahulu** sebelum menggunakan sistem navigasi tingkat tinggi seperti `NavMeshAgent`.

Urutan demo pembelajaran yang disarankan:

```text
1. Gerakkan object tanpa AI
2. Hitung direction menggunakan Vector3
3. Implementasi Seek
4. Tambahkan rotation
5. Tunjukkan masalah overshoot
6. Ubah menjadi Arrive
7. Tambahkan Wander
8. Tambahkan Raycast/SphereCast
9. Tambahkan Obstacle Avoidance
10. Tunjukkan Separation pada beberapa NPC
```

Dengan urutan tersebut mahasiswa dapat melihat evolusi dari movement sederhana menjadi autonomous movement yang lebih realistis.
