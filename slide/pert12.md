# Game Cerdas — Pertemuan 12
## Player Modeling & Adaptive Game AI

**Program Studi S1 Teknik Informatika**  
**Tools:**  Unity 6 + C#  
**Posisi materi:**  Lanjutan Pertemuan 11 — Dynamic Difficulty Adjustment (DDA)

---

# Slide 1 — Cover

## Player Modeling & Adaptive Game AI

**Game Cerdas — Pertemuan 12**  
Pokok bahasan:
- Player telemetry
- Skill estimation
- Play style
- Player profile
- Adaptation policy
- Adaptive Game AI

Praktikum yang akan dibuat terpisah: **Merekam gameplay metrics dan membuat player model sederhana di Unity**  
> Fokus pertemuan ini adalah memahami bagaimana game dapat mengenali karakteristik player melalui data gameplay, lalu menggunakan informasi tersebut untuk menyesuaikan pengalaman bermain.

---

# Slide 2 — Review Pertemuan 11

Pada Pertemuan 11 kita mempelajari**Dynamic Difficulty Adjustment**.

DDA menggunakan data performa player untuk menyesuaikan difficulty.

Contoh:

```text
Player terlalu mudah menang
        ↓
Difficulty naik

Player sering kalah
        ↓
Difficulty turun
```

Parameter yang dapat diadaptasi:
- enemy health,
- enemy damage,
- enemy speed,
- spawn rate,
- item drop,
- enemy aggression.

Pertemuan 12 memperluas konsep tersebut.

---

# Slide 3 — Dari DDA ke Player Modeling

DDA biasanya menjawab:

```text
Apakah game terlalu sulit atau terlalu mudah saat ini?
```

Player Modeling menjawab pertanyaan yang lebih luas:

```text
Player ini bermain seperti apa?
Seberapa ahli player ini?
Apa gaya bermainnya?
Apa preferensi tindakannya?
Adaptasi apa yang paling cocok?
```

DDA fokus pada**difficulty**.  
Player Modeling fokus pada**pemahaman terhadap player**.

---

# Slide 4 — Posisi Materi dalam Game Cerdas

Alur materi:

```text
Pertemuan 9
PCG

Pertemuan 10
Procedural Level / Dungeon

Pertemuan 11
Dynamic Difficulty Adjustment

Pertemuan 12
Player Modeling & Adaptive Game AI
```

Hubungan:

```text
Telemetry
    ↓
Player Model
    ↓
Adaptation Policy
    ↓
Adaptive Gameplay
```

Player modeling menjadi dasar untuk game yang lebih personal dan adaptif.

---

# Slide 5 — Mengapa Player Modeling Penting?

Tidak semua player bermain dengan cara yang sama.

Contoh:
- ada player agresif,
- ada player defensif,
- ada player eksploratif,
- ada player yang cepat belajar,
- ada player yang sering menghindari combat,
- ada player yang suka mengumpulkan item,
- ada player yang selalu mengambil risiko.

Jika game dapat mengenali pola ini, game dapat:
- menyesuaikan tantangan,
- memberi reward yang lebih sesuai,
- mengubah enemy behavior,
- memberi hint secara tepat,
- mengatur pacing,
- meningkatkan engagement.

---

# Slide 6 — Contoh Perbedaan Player

## Player A — Aggressive

```text
Sering menyerang
Jarang mundur
Damage dealt tinggi
Damage received tinggi
```

## Player B — Defensive

```text
Sering menjaga jarak
Menggunakan cover
Damage received rendah
Progress lebih lambat
```

## Player C — Explorer

```text
Sering membuka area samping
Mengumpulkan item
Waktu bermain lebih lama
Combat tidak selalu prioritas
```

Game adaptif dapat merespons masing-masing player secara berbeda.

---

# Slide 7 — Capaian Pembelajaran Pertemuan

Setelah pertemuan ini, mahasiswa diharapkan mampu:

1. Menjelaskan konsep player modeling.
2. Menjelaskan player telemetry dan contoh data yang direkam.
3. Menentukan gameplay metrics yang relevan.
4. Menjelaskan skill estimation sederhana.
5. Mengidentifikasi play style berdasarkan metrics.
6. Membuat player profile sederhana.
7. Menjelaskan adaptation policy.
8. Menghubungkan player model dengan adaptive Game AI.
9. Merancang sistem player modeling sederhana di Unity.
10. Menjelaskan isu desain dan etika dalam penggunaan data player.

---

# Slide 8 — Apa Itu Player Modeling?

**Player Modeling** adalah proses membuat representasi atau model tentang player berdasarkan data gameplay.

Model ini dapat berisi:
- performa,
- skill,
- gaya bermain,
- preferensi,
- kebiasaan,
- kecenderungan risiko,
- respons terhadap difficulty,
- pola eksplorasi.

Contoh:

```text
Player Profile:
Skill        = Medium
Play Style   = Aggressive
Risk Level   = High
Exploration  = Low
Preferred Action = Combat
```

---

# Slide 9 — Player Model sebagai Representasi

Player model bukan berarti mengetahui player secara sempurna.

Player model adalah estimasi berdasarkan data.

Contoh:

```text
Jika player sering menyerang dan jarang mengambil cover,
maka sistem memperkirakan player memiliki gaya agresif.
```

Model bisa salah.

Karena itu player model sebaiknya:
- diperbarui secara berkala,
- menggunakan beberapa metrics,
- tidak mengambil kesimpulan dari satu kejadian,
- memiliki confidence atau tingkat keyakinan.

---

# Slide 10 — Player Telemetry

**Player telemetry** adalah data gameplay yang direkam selama player bermain.

Contoh:
- posisi player,
- health,
- damage taken,
- damage dealt,
- jumlah kill,
- jumlah death,
- waktu bermain,
- item collected,
- ability used,
- area explored,
- enemy encountered,
- objective completed.

Telemetry adalah bahan mentah untuk membuat player model.

---

# Slide 11 — Telemetry vs Metrics

## Telemetry

Data mentah dari gameplay.

Contoh:

```text
Player position setiap 1 detik
Damage event
Attack event
Item pickup event
Death event
```

## Metrics

Nilai yang sudah dihitung dari telemetry.

Contoh:

```text
Accuracy = hit / shot
Kill rate = kill / minute
Exploration ratio = visited area / total area
```

Telemetry adalah data.  
Metrics adalah informasi yang sudah diolah.

---

# Slide 12 — Event-Based Telemetry

Telemetry dapat direkam sebagai event.

Contoh event:
- `PlayerShot`
- `PlayerHitEnemy`
- `PlayerTookDamage`
- `EnemyKilled`
- `ItemCollected`
- `PlayerDied`
- `EnteredRoom`
- `UsedHealthPotion`
- `ObjectiveCompleted`

Format sederhana:

```text
Time, EventType, Value, Position
```

Contoh:

```text
12.5, PlayerTookDamage, 10, (5,0,8)
```

---

# Slide 13 — Continuous Telemetry

Selain event, data juga bisa direkam secara berkala.

Contoh:
- posisi player setiap 1 detik,
- health setiap 5 detik,
- jumlah enemy aktif,
- distance to objective,
- current room,
- current difficulty.

Contoh:

```text
Setiap 1 detik:
record player position
record current health
record active enemy count
```

Data ini berguna untuk:
- heatmap,
- path analysis,
- pacing analysis,
- exploration modeling.

---

# Slide 14 — Telemetry yang Relevan untuk Game Cerdas

Untuk praktikum sederhana, telemetry yang disarankan:

```text
Combat Metrics
├�”€─ shots fired
├�”€─ shots hit
├�”€─ enemies killed
└�”€─ damage dealt

Survival Metrics
├�”€─ damage taken
├�”€─ health remaining
├�”€─ death count
└�”€─ healing used

Exploration Metrics
├�”€─ rooms visited
├�”€─ items collected
└�”€─ time spent exploring

Progress Metrics
├�”€─ objectives completed
├�”€─ time to complete
└�”€─ checkpoint reached
```

Tidak perlu merekam semua data. Pilih yang sesuai gameplay.

---

# Slide 15 — Telemetry di Unity

Dalam Unity, telemetry dapat direkam melalui script.

Contoh event damage:

```csharp
public void TakeDamage(float amount)
{
    currentHealth -= amount;

    telemetry.RecordEvent(
        "PlayerTookDamage",
        amount,
        transform.position
    );
}
```

Contoh item pickup:

```csharp
telemetry.RecordEvent(
    "ItemCollected",
    itemValue,
    transform.position
);
```

Telemetry dapat disimpan di memory selama permainan.

---

# Slide 16 — Struktur Data Telemetry Event

Contoh class sederhana:

```csharp
public class TelemetryEvent
{
    public float time;
    public string eventType;
    public float value;
    public Vector3 position;
}
```

List event:

```csharp
List<TelemetryEvent> events =
    new List<TelemetryEvent>();
```

Untuk praktikum awal, data cukup disimpan sementara dan ditampilkan di UI.

Untuk pengembangan lanjut, data dapat disimpan ke file.

---

# Slide 17 — Menyimpan Data Telemetry

Pilihan penyimpanan:
- memory runtime,
- PlayerPrefs,
- JSON file,
- CSV file,
- database,
- analytics service.

Untuk praktikum Unity:

```text
runtime memory + debug UI
```

sudah cukup.

Opsional:
- export CSV,
- simpan JSON,
- tampilkan ringkasan setelah game selesai.

---

# Slide 18 — Gameplay Metrics

**Gameplay metrics** adalah ukuran yang dihitung dari telemetry.

Contoh:
- accuracy,
- kill rate,
- damage per minute,
- average health,
- death count,
- exploration ratio,
- item usage rate,
- objective completion time.

Metrics digunakan untuk:
- skill estimation,
- play style classification,
- adaptive gameplay,
- balancing,
- debugging.

---

# Slide 19 — Combat Metrics

Contoh combat metrics:

```text
Accuracy = shotsHit / shotsFired
KillRate = enemiesKilled / playTime
DamageEfficiency = damageDealt / damageTaken
AttackFrequency = attacksPerformed / playTime
```

Interpretasi:
- accuracy tinggi → kontrol baik,
- kill rate tinggi → combat efektif,
- damage efficiency tinggi → player kuat,
- attack frequency tinggi → player agresif.

---

# Slide 20 — Survival Metrics

Contoh survival metrics:

```text
HealthRatio = currentHealth / maxHealth
DamageTakenRate = damageTaken / playTime
DeathCount = totalDeaths
HealingUsage = healingItemsUsed
```

Interpretasi:
- damage taken tinggi → player sering terkena serangan,
- death count tinggi → player kesulitan,
- healing usage tinggi → player sering berada dalam risiko,
- health ratio tinggi → player bertahan baik.

---

# Slide 21 — Exploration Metrics

Contoh exploration metrics:

```text
ExplorationRatio = visitedRooms / totalRooms
ItemCollectionRatio = collectedItems / totalItems
OptionalAreaVisit = optionalRoomsVisited
TimeInSideAreas = timeSpentOutsideMainPath
```

Interpretasi:
- exploration ratio tinggi → player eksploratif,
- item collection tinggi → player suka mencari resource,
- optional area sering dikunjungi → player tidak hanya fokus objective utama.

---

# Slide 22 — Risk Metrics

Risk metrics mengukur kecenderungan player mengambil risiko.

Contoh:
- menyerang saat health rendah,
- mendekati enemy kuat,
- masuk area bahaya,
- jarang memakai healing item,
- sering melawan banyak enemy sekaligus.

Contoh sederhana:

```text
RiskScore =
lowHealthCombatTime / totalCombatTime
```

Jika player sering bertarung saat health rendah, risk score tinggi.

---

# Slide 23 — Skill Estimation

**Skill estimation** adalah proses memperkirakan kemampuan player berdasarkan metrics.

Skill bukan hanya satu angka absolut.

Skill bisa dilihat dari:
- survival,
- combat,
- movement,
- exploration,
- objective efficiency,
- learning speed.

Untuk praktikum, skill dapat dibuat sederhana:

```text
Low
Medium
High
```

atau:

```text
SkillScore = 0.0 sampai 1.0
```

---

# Slide 24 — Skill Score Sederhana

Contoh rumus:

```text
SkillScore =
0.35 Ã— combatScore
+
0.30 Ã— survivalScore
+
0.20 Ã— progressScore
+
0.15 Ã— resourceScore
```

Setiap score dinormalisasi 0 sampai 1.

Interpretasi:

```text
0.00 – 0.39 = Low Skill
0.40 – 0.69 = Medium Skill
0.70 – 1.00 = High Skill
```

---

# Slide 25 — Combat Score

Contoh:

```text
combatScore =
0.6 Ã— accuracy
+
0.4 Ã— normalizedKillRate
```

Accuracy:

```text
shotsHit / shotsFired
```

Normalized kill rate:

```text
killRate / expectedKillRate
```

Gunakan clamp:

```text
nilai maksimal = 1.0
```

Unity:

```csharp
float score = Mathf.Clamp01(value);
```

---

# Slide 26 — Survival Score

Contoh:

```text
survivalScore =
0.5 Ã— healthRatio
+
0.3 Ã— damageAvoidanceScore
+
0.2 Ã— deathPenaltyScore
```

Damage avoidance:

```text
1 - normalizedDamageTaken
```

Death penalty:

```text
1 - normalizedDeathCount
```

Semakin sering mati, survival score semakin rendah.

---

# Slide 27 — Progress Score

Contoh:

```text
progressScore =
0.6 Ã— objectiveCompletionRatio
+
0.4 Ã— timeEfficiencyScore
```

Jika player menyelesaikan objective dengan waktu wajar, progress score tinggi.

Namun harus hati-hati:
- player eksploratif mungkin lebih lambat,
- lambat bukan berarti tidak terampil,
- karena itu skill estimation sebaiknya tidak hanya berdasarkan waktu.

---

# Slide 28 — Skill Estimation Tidak Selalu Mudah

Skill estimation bisa salah.

Contoh:
- player bermain lambat karena eksplorasi,
- player sering menerima damage karena gaya agresif,
- player tidak mengambil item karena memang tidak butuh,
- player sengaja bermain dengan tantangan tambahan.

Karena itu:
- gunakan beberapa metrics,
- gunakan window waktu,
- jangan terlalu cepat menyimpulkan,
- pisahkan skill dan play style.

---

# Slide 29 — Play Style

**Play style** adalah kecenderungan cara player bermain.

Contoh play style:
- aggressive,
- defensive,
- explorer,
- speedrunner,
- collector,
- stealthy,
- tactical,
- risk-taker,
- cautious.

Play style berbeda dari skill.

Player bisa:
- high skill aggressive,
- low skill aggressive,
- high skill defensive,
- explorer tetapi combat lemah.

---

# Slide 30 — Skill vs Play Style

## Skill

Menjawab:

```text
Seberapa baik player bermain?
```

## Play Style

Menjawab:

```text
Bagaimana cara player bermain?
```

Contoh:

```text
Player A:
Skill = High
Style = Aggressive

Player B:
Skill = High
Style = Defensive

Player C:
Skill = Medium
Style = Explorer
```

Adaptasi dapat mempertimbangkan keduanya.

---

# Slide 31 — Aggressive Play Style

Ciri-ciri:
- attack frequency tinggi,
- sering mendekati enemy,
- damage dealt tinggi,
- sering engage combat,
- waktu idle rendah,
- cover usage rendah.

Metrics:

```text
AttackFrequency
CombatEngagementRate
AverageDistanceToEnemy
DamageDealtRate
```

Interpretasi:

```text
Jika attack tinggi dan jarak ke enemy rendah,
player cenderung agresif.
```

---

# Slide 32 — Defensive Play Style

Ciri-ciri:
- menjaga jarak,
- sering menggunakan cover,
- menghindari combat langsung,
- damage taken rendah,
- attack lebih hati-hati,
- retreat lebih sering.

Metrics:

```text
AverageDistanceToEnemy
CoverUsageTime
DamageTakenRate
RetreatFrequency
```

Interpretasi:

```text
Jika cover usage tinggi dan damage taken rendah,
player cenderung defensif.
```

---

# Slide 33 — Explorer Play Style

Ciri-ciri:
- banyak area dikunjungi,
- item collection tinggi,
- sering masuk optional room,
- waktu bermain lebih lama,
- objective tidak selalu langsung diselesaikan.

Metrics:

```text
ExplorationRatio
ItemCollectionRatio
OptionalRoomVisitRate
TimeInNonObjectiveArea
```

Interpretasi:

```text
Jika banyak area dikunjungi dan banyak item diambil,
player cenderung explorer.
```

---

# Slide 34 — Speedrunner Play Style

Ciri-ciri:
- langsung menuju objective,
- waktu completion rendah,
- area optional sedikit,
- item collection rendah,
- combat dihindari jika tidak perlu.

Metrics:

```text
CompletionTime
ObjectiveFocusRatio
ExplorationRatio
CombatAvoidanceRate
```

Interpretasi:

```text
Jika waktu cepat dan eksplorasi rendah,
player cenderung speedrunner.
```

---

# Slide 35 — Risk-Taker Play Style

Ciri-ciri:
- bertarung saat health rendah,
- menghadapi banyak enemy sekaligus,
- jarang menggunakan healing,
- memilih jalur berbahaya,
- sering mengambil reward berisiko.

Metrics:

```text
LowHealthCombatTime
EnemyClusterEngagement
HealingDelay
DangerAreaTime
```

Risk-taker tidak selalu buruk.

Bisa jadi player memang ahli dan suka tantangan.

---

# Slide 36 — Play Style Classification

Play style dapat diklasifikasikan dengan rule sederhana.

Contoh:

```text
if attackFrequency tinggi
and averageDistanceToEnemy rendah:
    style = Aggressive

if explorationRatio tinggi
and itemCollection tinggi:
    style = Explorer

if coverUsage tinggi
and damageTaken rendah:
    style = Defensive
```

Untuk praktikum, rule-based classification sudah cukup.

---

# Slide 37 — Multi-Label Play Style

Player tidak selalu hanya punya satu style.

Contoh:

```text
Aggressive + Explorer
Defensive + Collector
Speedrunner + High Skill
Risk-Taker + Aggressive
```

Karena itu model dapat menyimpan beberapa skor style.

Contoh:

```text
AggressiveScore = 0.75
ExplorerScore   = 0.60
DefensiveScore  = 0.20
SpeedScore      = 0.35
```

Style dominan adalah skor tertinggi.

---

# Slide 38 — Play Style Score

Contoh:

```text
AggressiveScore =
0.5 Ã— attackFrequencyScore
+
0.3 Ã— closeCombatScore
+
0.2 Ã— damageDealtScore
```

ExplorerScore:

```text
ExplorerScore =
0.6 Ã— explorationRatio
+
0.4 Ã— itemCollectionRatio
```

DefensiveScore:

```text
DefensiveScore =
0.5 Ã— coverUsageScore
+
0.3 Ã— distanceScore
+
0.2 Ã— damageAvoidanceScore
```

---

# Slide 39 — Player Profile

**Player Profile** adalah ringkasan informasi tentang player.

Contoh:

```text
Player Profile
├�”€─ Skill Level: Medium
├�”€─ Skill Score: 0.62
├�”€─ Primary Style: Aggressive
├�”€─ Aggressive Score: 0.78
├�”€─ Explorer Score: 0.25
├�”€─ Defensive Score: 0.30
├�”€─ Risk Score: 0.65
└�”€─ Recommended Adaptation: Stronger tactical enemy
```

Player profile adalah hasil dari telemetry dan metrics.

---

# Slide 40 — Profile Sementara dan Jangka Panjang

## Profile Sementara

Dihitung selama satu sesi permainan.

Contoh:
- skill dalam level ini,
- style dalam run ini,
- performa wave terakhir.

## Profile Jangka Panjang

Dihitung dari banyak sesi.

Contoh:
- gaya bermain umum,
- perkembangan skill,
- preferensi game mode.

Untuk praktikum, cukup gunakan profile sementara.

---

# Slide 41 — Updating Player Profile

Player profile perlu diperbarui.

Alur:

```text
Record telemetry
      ↓
Calculate metrics
      ↓
Estimate skill
      ↓
Classify play style
      ↓
Update player profile
      ↓
Apply adaptation
```

Update dapat dilakukan:
- setiap 10 detik,
- setiap wave,
- setiap room,
- setelah objective selesai,
- setelah player mati.

---

# Slide 42 — Confidence dalam Player Model

Confidence menunjukkan seberapa yakin sistem terhadap model.

Contoh:

```text
Jika data masih sedikit:
    confidence rendah

Jika data sudah banyak:
    confidence lebih tinggi
```

Contoh:

```text
Player baru bermain 20 detik.
Belum cukup data untuk menyimpulkan style.
```

Praktikum sederhana tidak wajib menggunakan confidence, tetapi konsep ini penting.

---

# Slide 43 — Cold Start Problem

Cold start terjadi ketika sistem belum punya data player.

Masalah:

```text
Game belum tahu skill atau style player.
```

Solusi:
- mulai dengan profile default,
- gunakan tutorial performance,
- gunakan pilihan difficulty awal,
- adaptasi secara perlahan,
- tunggu data cukup sebelum menyimpulkan.

DDA dan player modeling perlu hati-hati di awal permainan.

---

# Slide 44 — Adaptation Policy

**Adaptation policy** adalah aturan yang menentukan bagaimana game merespons player model.

Player model menjawab:

```text
Player seperti apa?
```

Adaptation policy menjawab:

```text
Game harus menyesuaikan apa?
```

Contoh:

```text
Jika player aggressive:
    munculkan enemy yang menggunakan cover

Jika player explorer:
    tambahkan reward di area samping

Jika player low skill:
    kurangi enemy damage
```

---

# Slide 45 — Player Model vs Adaptation Policy

## Player Model

Data dan interpretasi.

```text
Skill = Medium
Style = Explorer
Risk = Low
```

## Adaptation Policy

Keputusan adaptasi.

```text
Tambahkan optional reward
Kurangi enemy rush
Berikan clue ke area rahasia
```

Player model tidak langsung mengubah game.  
Adaptation policy yang menentukan perubahan gameplay.

---

# Slide 46 — Jenis Adaptasi

Adaptasi dapat dilakukan pada:

```text
Enemy AI
├�”€─ agresivitas
├�”€─ taktik
├�”€─ jumlah
└�”€─ tipe enemy

Level / PCG
├�”€─ layout
├�”€─ item placement
├�”€─ enemy placement
└�”€─ reward

Guidance
├�”€─ hint
├�”€─ objective marker
└�”€─ tutorial prompt

Resource
├�”€─ health drop
├�”€─ ammo drop
└�”€─ power-up
```

---

# Slide 47 — Adaptasi Berdasarkan Skill

Contoh:

```text
Low Skill:
enemy damage turun
health drop naik
hint lebih sering

Medium Skill:
difficulty normal

High Skill:
enemy lebih agresif
elite enemy muncul
resource lebih terbatas
```

Tujuan:
- membantu player kesulitan,
- memberi tantangan pada player ahli,
- tetap menjaga fairness.

---

# Slide 48 — Adaptasi Berdasarkan Play Style

Contoh:

## Aggressive Player

```text
Tambahkan enemy yang menjaga jarak.
Tambahkan musuh dengan cover.
Berikan reward untuk combo.
```

## Defensive Player

```text
Tambahkan objective yang mendorong bergerak.
Gunakan enemy flanker.
Berikan reward untuk bertahan tanpa damage.
```

## Explorer Player

```text
Tambahkan item rahasia.
Tambahkan optional room.
Tambahkan lore atau reward eksplorasi.
```

---

# Slide 49 — Adaptasi untuk Aggressive Player

Jika player sangat agresif:

```text
attackFrequency tinggi
closeCombat tinggi
damageDealt tinggi
```

Adaptasi:
- enemy menggunakan cover,
- enemy menjaga jarak,
- enemy melakukan flank,
- tambah shield enemy,
- reward combo atau fast kill.

Tujuan:
- gameplay tetap menantang,
- gaya agresif tetap dihargai,
- player tidak hanya menang dengan maju terus.

---

# Slide 50 — Adaptasi untuk Defensive Player

Jika player defensif:

```text
coverUsage tinggi
distanceToEnemy tinggi
damageTaken rendah
progress lambat
```

Adaptasi:
- objective mendorong movement,
- enemy mencoba flank,
- berikan enemy yang memaksa reposition,
- reward clean play,
- tidak selalu menaikkan damage enemy.

Tujuan:
- menjaga pacing,
- membuat defensive play tetap menarik,
- tidak menghukum gaya bermain hati-hati secara berlebihan.

---

# Slide 51 — Adaptasi untuk Explorer Player

Jika player explorer:

```text
explorationRatio tinggi
itemCollection tinggi
optionalRoomVisit tinggi
```

Adaptasi:
- tambahkan collectible,
- tambahkan secret room,
- tambahkan optional challenge,
- beri reward eksplorasi,
- tambahkan lore object.

Tujuan:
- game merespons ketertarikan player,
- eksplorasi terasa bermakna,
- replayability meningkat.

---

# Slide 52 — Adaptasi untuk Speedrunner

Jika player speedrunner:

```text
completionTime rendah
exploration rendah
objective focus tinggi
```

Adaptasi:
- tampilkan timer,
- beri rank,
- beri shortcut challenge,
- kurangi dialog panjang,
- tambahkan reward waktu cepat.

Tujuan:
- mendukung gaya cepat,
- tidak memaksa eksplorasi,
- membuat speed play terasa dihargai.

---

# Slide 53 — Policy Table

Adaptation policy dapat dibuat dalam tabel.

| Player Model | Adaptasi |
|---|---|
| Low Skill | turunkan damage enemy, tambah health drop |
| High Skill | tambah elite enemy, kurangi resource |
| Aggressive | enemy lebih taktis, tambah reward combo |
| Defensive | enemy flank, objective bergerak |
| Explorer | tambah secret reward |
| Speedrunner | tambah timer/rank |

Tabel memudahkan desain dan implementasi awal.

---

# Slide 54 — Rule-Based Adaptation

Pendekatan paling sederhana:

```text
if skillLevel == Low:
    IncreaseHealthDrop()

if playStyle == Aggressive:
    EnableFlankerEnemy()

if playStyle == Explorer:
    SpawnSecretReward()
```

Kelebihan:
- mudah dibuat,
- mudah dipahami,
- cocok untuk praktikum.

Kekurangan:
- bisa kaku,
- perlu banyak aturan jika game kompleks.

---

# Slide 55 — Score-Based Adaptation

Adaptasi dapat menggunakan skor.

Contoh:

```text
flankerChance =
aggressiveScore Ã— 0.5
+
highSkillScore Ã— 0.5
```

Jika aggressiveScore tinggi, peluang flanker meningkat.

Ini lebih halus daripada rule biner.

Contoh:

```text
healthDropChance =
baseDropChance
+
(1 - skillScore) Ã— assistBonus
```

Semakin rendah skill, semakin tinggi bantuan.

---

# Slide 56 — Adaptasi Jangan Terlalu Cepat

Sama seperti DDA, player modeling perlu stabil.

Masalah:

```text
Player menyerang terus selama 10 detik
langsung dianggap aggressive.
```

Solusi:
- gunakan evaluation window,
- gunakan moving average,
- tunggu data cukup,
- gunakan confidence,
- jangan mengubah profile terlalu sering.

Player profile harus merepresentasikan pola, bukan satu kejadian singkat.

---

# Slide 57 — Adaptasi Jangan Terlalu Kuat

Jika adaptasi terlalu kuat:
- player merasa dikendalikan,
- game terasa tidak natural,
- gaya bermain player terasa dihukum,
- player kehilangan agency.

Contoh buruk:

```text
Player suka eksplorasi
    ↓
game mengunci semua objective utama
dan memaksa eksplorasi terus
```

Adaptasi harus mendukung, bukan memaksa.

---

# Slide 58 — Adaptive Game AI

**Adaptive Game AI** adalah AI yang menyesuaikan perilaku berdasarkan player model.

Contoh:
- enemy memilih taktik berbeda,
- NPC companion memberi bantuan sesuai kebutuhan,
- game director mengatur spawn,
- level generator membuat konten sesuai style,
- tutorial memberi hint sesuai kesulitan player.

Player modeling memberi data.  
Adaptive Game AI menggunakan data tersebut.

---

# Slide 59 — Adaptive Enemy AI

Enemy dapat menyesuaikan diri terhadap player.

Contoh:

```text
Player sering menyerang jarak dekat:
    enemy menjaga jarak

Player sering bersembunyi:
    enemy mencari dan flank

Player sering lari:
    enemy mencoba intercept

Player sering low health:
    enemy mengurangi aggression
```

Adaptasi dapat dilakukan dengan:
- FSM parameter,
- Behavior Tree condition,
- Utility AI weights,
- NavMesh positioning.

---

# Slide 60 — Adaptive Utility AI

Jika enemy menggunakan Utility AI, player model dapat mengubah bobot.

Contoh:

```text
Jika player aggressive:
    TakeCoverWeight naik
    MaintainDistanceWeight naik

Jika player defensive:
    FlankWeight naik
    RushWeight naik

Jika player low skill:
    AttackWeight turun
    DelayBeforeAttack naik
```

Ini membuat enemy merespons gaya bermain player.

---

# Slide 61 — Adaptive PCG

Player model juga dapat memengaruhi PCG.

Contoh:

```text
Explorer:
    tambah optional room
    tambah collectible

Aggressive:
    tambah combat room
    tambah enemy encounter

Low Skill:
    kurangi trap
    tambah health item

High Skill:
    tambah elite enemy
    tambah branching challenge
```

Ini menghubungkan Pertemuan 9–10 dengan Player Modeling.

---

# Slide 62 — Adaptive Guidance

Game dapat memberi bantuan berdasarkan model.

Contoh:

```text
Player sering tersesat:
    tampilkan objective marker

Player sering mati pada enemy tertentu:
    tampilkan combat hint

Player tidak menggunakan ability:
    tampilkan tutorial reminder
```

Guidance harus hati-hati agar tidak mengganggu player yang ingin eksplorasi sendiri.

---

# Slide 63 — Praktikum Pertemuan 12: Gambaran Umum

Judul praktikum:

## Gameplay Metrics & Simple Player Model

Target:
- merekam telemetry sederhana,
- menghitung gameplay metrics,
- membuat skill score,
- mengklasifikasikan play style,
- membuat player profile,
- menampilkan profile di UI,
- menggunakan profile untuk adaptasi sederhana.

Detail teknis dan langkah implementasi akan dibuat pada modul praktikum terpisah.

---

# Slide 64 — Game Praktikum yang Disarankan

Praktikum dapat menggunakan game sederhana:

```text
Arena Survival
```

atau:

```text
Dungeon Room Combat
```

Player:
- bergerak,
- menyerang enemy,
- mengambil item,
- menyelesaikan objective.

Sistem merekam:
- damage,
- kill,
- item,
- room visited,
- waktu,
- health,
- attack count.

Kemudian membuat player model sederhana.

---

# Slide 65 — Metrics Praktikum

Metrics yang disarankan:

```text
Accuracy
Kill Rate
Damage Taken
Health Ratio
Item Collection
Room Exploration
Attack Frequency
Low Health Combat Time
Completion Time
```

Tidak semua harus digunakan.

Minimal untuk praktikum:
- combat metric,
- survival metric,
- exploration metric,
- progress metric.

---

# Slide 66 — Player Profile Praktikum

Contoh profile:

```text
Skill Score: 0.68
Skill Level: Medium

Aggressive Score: 0.74
Defensive Score: 0.30
Explorer Score: 0.55
Risk Score: 0.62

Dominant Style: Aggressive
```

Profile ditampilkan di UI agar mahasiswa dan dosen dapat melihat hasil model.

---

# Slide 67 — Adaptasi Praktikum

Adaptasi sederhana:

```text
Jika Skill Low:
    tambah health item

Jika Skill High:
    tambah enemy elite

Jika Aggressive:
    enemy menjaga jarak

Jika Explorer:
    spawn bonus item di optional area

Jika Defensive:
    enemy mencoba flank
```

Untuk praktikum, cukup pilih 1–2 adaptasi agar scope terkendali.

---

# Slide 68 — Struktur Scene Praktikum

Contoh scene:

```text
PlayerModelingDemo
├�”€─ GameManager
├�”€─ TelemetryManager
├�”€─ PlayerModelManager
├�”€─ AdaptationManager
├�”€─ Player
├�”€─ EnemySpawner
├�”€─ Items
├�”€─ Rooms / Arena
└�”€─ Debug UI
```

Data flow:

```text
Gameplay Event
    ↓
TelemetryManager
    ↓
PlayerModelManager
    ↓
AdaptationManager
    ↓
Game Parameter berubah
```

---

# Slide 69 — Struktur Script Praktikum

Script yang direncanakan:

```text
Scripts/
├�”€─ TelemetryManager.cs
├�”€─ TelemetryEvent.cs
├�”€─ GameplayMetrics.cs
├�”€─ PlayerModel.cs
├�”€─ PlayerModelManager.cs
├�”€─ AdaptationManager.cs
├�”€─ PlayerHealth.cs
├�”€─ PlayerCombat.cs
├�”€─ EnemyAI.cs
├�”€─ EnemySpawner.cs
└�”€─ PlayerModelDebugUI.cs
```

Fokus utama:
- telemetry,
- metrics,
- player profile,
- adaptation policy.

---

# Slide 70 — TelemetryManager.cs

Tugas:
- menerima event gameplay,
- menyimpan event,
- menghitung data dasar,
- menyediakan data untuk metrics.

Contoh event:
- PlayerAttack,
- PlayerHit,
- PlayerTookDamage,
- EnemyKilled,
- ItemCollected,
- RoomEntered.

TelemetryManager tidak mengambil keputusan adaptasi.

---

# Slide 71 — GameplayMetrics.cs

Tugas:
- menghitung metrics dari telemetry.

Contoh:

```text
accuracy
killRate
damageTakenRate
explorationRatio
itemCollectionRatio
attackFrequency
```

Metrics menjadi input untuk PlayerModelManager.

---

# Slide 72 — PlayerModel.cs

Tugas:
- menyimpan hasil model player.

Contoh data:

```csharp
public float skillScore;
public string skillLevel;

public float aggressiveScore;
public float defensiveScore;
public float explorerScore;
public float riskScore;

public string dominantStyle;
```

PlayerModel adalah representasi ringkas karakteristik player.

---

# Slide 73 — PlayerModelManager.cs

Tugas:
- membaca gameplay metrics,
- menghitung skill score,
- menghitung play style score,
- menentukan dominant style,
- memperbarui PlayerModel.

Alur:

```text
Metrics
  ↓
Calculate Skill
  ↓
Calculate Style Scores
  ↓
Update Profile
```

---

# Slide 74 — AdaptationManager.cs

Tugas:
- membaca PlayerModel,
- menentukan adaptasi,
- mengubah parameter game.

Contoh:

```text
if skillLevel == Low:
    healthDropChance += 0.1

if dominantStyle == Aggressive:
    enableTacticalEnemy = true
```

AdaptationManager adalah implementasi dari adaptation policy.

---

# Slide 75 — Debug UI Praktikum

Debug UI sebaiknya menampilkan:

```text
Shots Fired
Shots Hit
Accuracy
Kills
Damage Taken
Rooms Visited
Items Collected
Skill Score
Skill Level
Aggressive Score
Explorer Score
Dominant Style
Current Adaptation
```

Tanpa debug UI, sulit menilai apakah player model bekerja.

---

# Slide 76 — Eksperimen Mahasiswa

Mahasiswa dapat mencoba:

1. Bermain agresif dan melihat perubahan profile.
2. Bermain defensif dan melihat profile berbeda.
3. Banyak eksplorasi dan melihat explorer score naik.
4. Tidak mengambil item dan melihat item collection rendah.
5. Mengubah bobot skill score.
6. Mengubah aturan play style.
7. Mengubah adaptation policy.
8. Membandingkan hasil beberapa play session.
9. Menyimpan profile ke JSON.
10. Menghubungkan profile dengan DDA.

---

# Slide 77 — Evaluasi Praktikum

Pertanyaan evaluasi:

1. Apakah telemetry tercatat dengan benar?
2. Apakah metrics dihitung dari data yang tepat?
3. Apakah skill score masuk akal?
4. Apakah play style sesuai cara bermain?
5. Apakah player profile berubah secara stabil?
6. Apakah adaptasi sesuai profile?
7. Apakah UI debug mudah dibaca?
8. Apakah model terlalu cepat menyimpulkan?
9. Apakah adaptasi terasa membantu atau mengganggu?
10. Apakah sistem dapat dikembangkan lebih lanjut?

---

# Slide 78 — Kesalahan Umum Player Modeling

1. Mengambil kesimpulan dari data terlalu sedikit.
2. Mencampur skill dan play style.
3. Menggunakan metric yang tidak sesuai genre.
4. Tidak menormalisasi metric.
5. Tidak menampilkan debug profile.
6. Adaptasi terlalu kuat.
7. Adaptasi terlalu sering berubah.
8. Player model tidak pernah diperbarui.
9. Data telemetry terlalu banyak tetapi tidak digunakan.
10. Tidak ada adaptation policy yang jelas.

---

# Slide 79 — Isu Etika dan Privasi

Player telemetry adalah data perilaku.

Hal yang perlu diperhatikan:
- data apa yang direkam,
- apakah data disimpan,
- apakah data dikirim ke server,
- apakah player diberi tahu,
- apakah data digunakan secara adil.

Dalam praktikum:
- data cukup disimpan lokal,
- tidak perlu data pribadi,
- fokus pada gameplay metrics.

Prinsip:

```text
Rekam data seperlunya untuk tujuan desain game.
```

---

# Slide 80 — Player Modeling dan Fairness

Adaptasi harus adil.

Contoh masalah:
- player ahli selalu dihukum dengan enemy terlalu kuat,
- player eksploratif dipaksa eksplorasi terus,
- player defensif terus-menerus diserang flank,
- player low skill terlalu banyak dibantu sampai game tidak menantang.

Adaptasi yang baik:
- mendukung gaya bermain,
- menjaga tantangan,
- tidak memaksa,
- tetap memberi agency.

---

# Slide 81 — Hubungan dengan Materi Sebelumnya

Player modeling mengintegrasikan banyak materi:

```text
Pertemuan 2
Perception dan memory sebagai data AI

Pertemuan 5–6
FSM, Behavior Tree, Utility AI sebagai sistem decision

Pertemuan 9–10
PCG sebagai konten adaptif

Pertemuan 11
DDA sebagai adaptasi difficulty

Pertemuan 12
Player model sebagai dasar adaptasi personal
```

Player model dapat menjadi input untuk hampir semua sistem Game AI.

---

# Slide 82 — Hubungan dengan Materi Berikutnya

Materi berikutnya dalam rencana pembelajaran:

```text
Machine Learning for Games
```

Player modeling dapat dikembangkan dengan machine learning.

Contoh:
- klasifikasi play style,
- prediksi churn,
- prediksi skill,
- rekomendasi difficulty,
- clustering player.

Namun untuk mata kuliah ini, praktikum awal cukup menggunakan rule-based dan score-based modeling.

---

# Slide 83 — Ringkasan Materi

Hari ini kita mempelajari:

```text
Player Modeling & Adaptive Game AI
│
├�”€─ Player Telemetry
├�”€─ Telemetry Event
├�”€─ Gameplay Metrics
├�”€─ Skill Estimation
├�”€─ Skill Score
├�”€─ Play Style
├�”€─ Aggressive / Defensive / Explorer
├�”€─ Player Profile
├�”€─ Confidence
├�”€─ Cold Start
├�”€─ Adaptation Policy
├�”€─ Adaptive Enemy AI
├�”€─ Adaptive PCG
└�”€─ Unity Player Modeling Architecture
```

Konsep kunci:

> Player modeling membantu game memahami cara bermain player, lalu menggunakan pemahaman tersebut untuk menciptakan pengalaman yang lebih adaptif dan personal.

---

# Slide 84 — Pertanyaan Diskusi

1. Apa perbedaan DDA dan player modeling?
2. Apa perbedaan telemetry dan metrics?
3. Mengapa skill dan play style tidak boleh dicampur?
4. Metrics apa yang cocok untuk game survival?
5. Metrics apa yang cocok untuk game stealth?
6. Bagaimana cara mengenali player agresif?
7. Bagaimana cara mengenali player explorer?
8. Mengapa player model tidak boleh disimpulkan terlalu cepat?
9. Apa fungsi adaptation policy?
10. Bagaimana player model dapat memengaruhi enemy AI?

---

# Slide 85 — Latihan Konsep Skill Estimation

Rancang skill estimation untuk game arena survival.

Data yang tersedia:

```text
health remaining
damage taken
enemy killed
accuracy
time survived
death count
```

Tentukan:
1. Metrics yang digunakan.
2. Cara normalisasi.
3. Rumus skill score.
4. Batas Low, Medium, High.
5. Contoh interpretasi hasil.

---

# Slide 86 — Latihan Konsep Play Style

Rancang play style classifier untuk tiga style:

```text
Aggressive
Defensive
Explorer
```

Tentukan:
1. Metrics untuk aggressive.
2. Metrics untuk defensive.
3. Metrics untuk explorer.
4. Cara menentukan dominant style.
5. Cara menangani jika dua style sama kuat.

---

# Slide 87 — Latihan Adaptation Policy

Berdasarkan profile berikut:

```text
Skill Level: High
Dominant Style: Aggressive
Explorer Score: Low
Risk Score: High
```

Rancang adaptation policy:
1. Enemy behavior apa yang berubah?
2. Resource apa yang berubah?
3. Apakah PCG level perlu berubah?
4. Bagaimana menjaga adaptasi tetap adil?
5. Apa debug info yang perlu ditampilkan?

---

# Slide 88 — Penutup

## Praktikum Pertemuan 12

Praktikum detail akan dibuat pada modul terpisah:

```text
Merekam gameplay metrics
dan membuat player model sederhana di Unity
```

Fokus praktikum:
- telemetry event,
- metrics calculation,
- skill estimation,
- play style classification,
- player profile,
- adaptation policy,
- debug UI.

Materi berikutnya:

```text
Machine Learning for Games
```

---

# Catatan Pembelajaran

Urutan pembelajaran yang disarankan:

```text
1. Review DDA dari Pertemuan 11
2. Jelaskan bahwa DDA hanya bagian dari adaptive game
3. Perkenalkan player telemetry
4. Bedakan telemetry dan metrics
5. Bahas skill estimation
6. Bedakan skill dan play style
7. Bahas player profile
8. Perkenalkan adaptation policy
9. Hubungkan player model dengan enemy AI, PCG, dan DDA
10. Tutup dengan gambaran praktikum Unity
```

Penekanan penting:

> Player modeling bukan sekadar mengumpulkan data. Yang penting adalah memilih data yang relevan, mengolahnya menjadi metrics, menyimpulkan model secara hati-hati, lalu menggunakan model tersebut untuk adaptasi gameplay yang tetap adil dan menyenangkan.
