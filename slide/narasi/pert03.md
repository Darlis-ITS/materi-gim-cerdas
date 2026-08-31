# Narasi Game Cerdas - Pertemuan 03

## Movement AI & Steering Behaviors

Sumber: markdown/pert03.md

---

## Slide 001 - Cover

### Narasi

Pada slide pembuka ini, kita memasuki topik **movement dan steering behaviors** untuk **Game Cerdas — Pertemuan 3**. Fokus utamanya adalah membuat agen atau NPC dapat bergerak secara **mandiri, responsif, halus, dan masuk akal** terhadap kondisi game world. Alih-alih hanya memindahkan objek secara manual, sistem gerak akan menghitung arah, kecepatan, dan koreksi posisi berdasarkan tujuan, rintangan, atau perilaku kelompok.

Dalam pertemuan ini, kita akan membahas beberapa perilaku gerak dasar seperti `Seek`, `Flee`, `Arrive`, `Pursue`, `Evade`, dan `Wander`. Kita juga akan melihat bagaimana `Obstacle Avoidance` membantu agen menghindari tabrakan, serta bagaimana `Separation`, `Alignment`, dan `Cohesion` membentuk gerak kelompok yang lebih natural. Selain itu, kita akan membedakan **kinematic movement** dan **dynamic movement**, karena keduanya memengaruhi cara objek bergerak dan berinteraksi dengan fisika.

Sebelum masuk ke detail, penting untuk memahami bahwa movement system bukan sekadar membuat objek berpindah. Ia adalah lapisan eksekusi yang mengubah keputusan agen menjadi gerak yang terlihat di layar. Dengan memahami konsep ini, mahasiswa akan lebih mudah menghubungkan perilaku NPC dengan sistem decision, state, dan action pada game.

### Inti yang Harus Ditekankan

- Fokus pertemuan: membuat agen bergerak **mandiri, responsif, halus, dan masuk akal** terhadap game world.
- Perilaku dasar yang akan dibahas: `Seek`, `Flee`, `Arrive`, `Pursue`, `Evade`, `Wander`, dan `Obstacle Avoidance`.
- Gerak kelompok: `Separation`, `Alignment`, dan `Cohesion` membantu membentuk perilaku swarm atau flock yang lebih natural.
- Pembedaan **kinematic movement** dan **dynamic movement** penting untuk memahami interaksi gerak dengan fisika.
- Implementasi dasar akan diarahkan pada `Unity 6` dan cara **menggabungkan steering behaviors**.

### Transisi ke Slide Berikutnya

Selanjutnya, kita akan menempatkan topik ini dalam alur game system, yaitu bagaimana keputusan agen diteruskan ke sistem movement dan action, sehingga jelas hubungan antara “apa yang dilakukan” dan “bagaimana agen bergerak untuk melakukannya”.

---

## Slide 002 - Posisi Materi dalam Game AI

### Narasi

Slide ini membantu mahasiswa melihat posisi **Movement AI & Steering Behaviors** dalam alur **Game AI** yang sudah dibangun pada pertemuan sebelumnya.

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

Alur ini menunjukkan bahwa perilaku agen tidak muncul dari satu bagian saja. **Perception** membaca dunia, **memory/state** menyimpan konteks, **decision** memilih tujuan, dan **action** mengubah perilaku agen di dunia game.

Pada pertemuan ini, fokus kita berada pada transisi dari `DECISION` ke `MOVEMENT / ACTION`.

```text
DECISION
   ↓
MOVEMENT / ACTION
```

Contoh sederhananya, NPC memutuskan **mengejar player**. Keputusan itu adalah hasil dari **Decision AI**, tetapi NPC masih perlu tahu bagaimana bergerak menuju player secara halus, responsif, dan masuk akal. Di sinilah **Movement AI** bekerja.

Secara konseptual:

- **Decision AI** menjawab: “Apa yang harus dilakukan?”
- **Movement AI** menjawab: “Bagaimana agen bergerak untuk melakukannya?”

Pemisahan ini penting karena gerakan yang natural biasanya bukan sekadar perpindahan posisi, melainkan eksekusi dari keputusan agen yang terus disesuaikan dengan kondisi dunia game.

### Inti yang Harus Ditekankan

- **Movement AI** berada pada bagian eksekusi dari alur **Game AI**, khususnya setelah `DECISION` dan sebagai bentuk `ACTION`.
- **Decision AI** menentukan tujuan atau niat agen, misalnya mengejar player.
- **Movement AI** menerjemahkan tujuan tersebut menjadi gerakan nyata, seperti arah, kecepatan, dan respons terhadap target.
- Posisi ini penting agar mahasiswa memahami steering behavior sebagai cara agen mengeksekusi keputusan, bukan sebagai gerakan acak.

### Transisi ke Slide Berikutnya

Dengan posisi materi yang sudah jelas, berikutnya kita akan melihat capaian pembelajaran pertemuan ini, yaitu kemampuan apa saja yang harus dimiliki mahasiswa setelah mempelajari movement AI dan steering behaviors.

---

## Slide 003 - Capaian Pembelajaran Pertemuan

### Narasi

Slide ini menjadi peta kompetensi untuk pertemuan ketiga. Tujuannya bukan hanya membuat objek bergerak di Unity, tetapi memahami bagaimana sebuah agen dapat bergerak secara lebih otonom, responsif, dan natural. Mahasiswa perlu melihat movement sebagai bagian dari sistem perilaku game: setelah agen memutuskan sesuatu, misalnya mengejar atau menghindar, sistem movement akan menentukan bagaimana keputusan itu dieksekusi dalam bentuk arah, kecepatan, orientasi, dan respons terhadap lingkungan.

Capaian pembelajaran pertemuan ini dapat dirangkum sebagai berikut:

1. **Membedakan movement biasa dan autonomous movement**  
   Movement biasa biasanya digerakkan oleh input pemain, animasi, atau script sederhana. Autonomous movement dihasilkan oleh sistem game yang menghitung target, aturan perilaku, dan kondisi lingkungan.

2. **Memahami kinematic movement dan dynamic movement**  
   Kinematic movement lebih menekankan perubahan posisi secara langsung, sedangkan dynamic movement melibatkan fisika, kecepatan, percepatan, dan respons gaya.

3. **Menggunakan `Vector3` untuk menghitung arah dan jarak**  
   `Vector3` menjadi dasar untuk menentukan posisi, arah gerak, jarak ke target, dan vektor steering.

4. **Mengimplementasikan steering behavior dasar**  
   Mahasiswa akan belajar perilaku dasar seperti `seek`, `flee`, `arrive`, `wander`, atau `obstacle avoidance` sebagai cara agen merespons lingkungan.

5. **Mengatur kecepatan, percepatan, rotasi, dan stopping distance**  
   Gerakan yang natural tidak hanya soal posisi akhir, tetapi juga bagaimana agen mempercepat, memperlambat, berputar, dan berhenti pada jarak yang tepat.

6. **Menggunakan sensor fisika Unity untuk obstacle avoidance sederhana**  
   Sensor seperti `Raycast`, `SphereCast`, atau `Physics.OverlapSphere` dapat digunakan untuk mendeteksi hambatan di depan agen.

7. **Menjelaskan prinsip flocking: `separation`, `alignment`, dan `cohesion`**  
   Flocking membantu banyak agen bergerak seperti kawanan, misalnya burung, ikan, atau drone, dengan menjaga jarak, menyelaraskan arah, dan tetap berkumpul.

8. **Menggabungkan beberapa steering behavior**  
   Gerakan yang lebih natural biasanya dihasilkan dari kombinasi beberapa perilaku, bukan satu perilaku tunggal.

Daftar capaian ini menunjukkan alur pembelajaran dari konsep dasar menuju implementasi. Mahasiswa diharapkan tidak hanya memahami rumus atau fungsi, tetapi juga memahami kapan setiap perilaku digunakan dan bagaimana perilaku tersebut memengaruhi pengalaman bermain.

### Inti yang Harus Ditekankan

- **Movement adalah eksekusi dari keputusan agen**, bukan sekadar animasi atau perpindahan posisi.
- **`Vector3` adalah fondasi utama** untuk menghitung arah, jarak, kecepatan, dan steering.
- **Steering behavior membuat gerakan lebih natural** karena agen merespons target, hambatan, dan agen lain secara dinamis.
- **Flocking adalah kombinasi perilaku kolektif** yang penting untuk banyak agen.
- **Sebelum masuk ke definisi Movement AI**, mahasiswa perlu memahami bahwa movement tidak selalu identik dengan pathfinding.

### Transisi ke Slide Berikutnya

Setelah capaian pembelajaran ini jelas, kita akan masuk ke definisi Movement AI secara lebih formal. Slide berikutnya akan menjelaskan apa yang diatur oleh Movement AI, mengapa Movement AI berbeda dari pathfinding, dan bagaimana Movement AI menjadi lapisan eksekusi dari perilaku agen dalam game.

---

## Slide 004 - Apa Itu Movement AI?

### Narasi

**Movement AI** adalah bagian dari Game AI yang mengatur bagaimana sebuah **agent** bergerak di dalam lingkungan. Agent bisa berupa NPC, kendaraan, drone, musuh, atau objek yang dikendalikan oleh sistem game.

Intuisi sederhananya, Movement AI tidak hanya menjawab “agent harus berada di mana?”, tetapi juga “bagaimana agent bergerak ke sana?”. Artinya, Movement AI memikirkan gaya gerak, bukan hanya posisi akhir.

Movement AI dapat menentukan beberapa hal penting:

- **arah gerak**,
- **kecepatan**,
- **percepatan**,
- **orientasi**,
- **respons terhadap target**,
- **respons terhadap obstacle**,
- **respons terhadap agent lain**.

Contoh paling sederhana adalah perilaku **`Seek`**. Dalam skenario ini, NPC melihat posisi player, lalu bergerak ke arah player.

```text
NPC melihat player
      ↓
Seek
      ↓
NPC bergerak menuju player
```

Pada contoh ini, inputnya adalah posisi player, prosesnya adalah perilaku `Seek`, dan outputnya adalah NPC bergerak mendekati player.

Contoh lain adalah **`Flee`**. Perilaku ini biasanya muncul ketika NPC merasa terlalu dekat dengan ancaman, misalnya player.

```text
NPC terlalu dekat dengan player
      ↓
Flee
      ↓
NPC menjauh dari player
```

Di sini, inputnya adalah jarak antara NPC dan player. Jika jarak terlalu dekat, perilaku `Flee` aktif, lalu NPC bergerak menjauh.

Dalam implementasi game, Movement AI sering menggunakan perhitungan vektor untuk menentukan arah, jarak, dan kecepatan. Misalnya, posisi agent dan target dapat dibandingkan menggunakan `Vector3`, lalu hasilnya digunakan untuk mengatur rotasi, kecepatan, atau percepatan agent.

Poin penting yang harus dipahami adalah **Movement AI bukan selalu pathfinding**. Movement AI lebih fokus pada gerak lokal dan respons langsung terhadap lingkungan, target, atau agent lain. Pathfinding biasanya membahas pencarian jalur dari posisi awal ke tujuan, tetapi itu akan kita bedah lebih lanjut pada slide berikutnya.

### Inti yang Harus Ditekankan

- **Movement AI** mengatur cara agent bergerak, bukan hanya menentukan posisi akhir.
- Output Movement AI meliputi **arah**, **kecepatan**, **percepatan**, **orientasi**, dan respons terhadap target, obstacle, atau agent lain.
- `Seek` dan `Flee` adalah contoh dasar Movement AI yang mengubah input lingkungan menjadi aksi gerak.
- Movement AI berbeda dari pathfinding: Movement AI mengatur **gerak lokal**, sedangkan pathfinding mengatur **jalur menuju tujuan**.

### Transisi ke Slide Berikutnya

Setelah memahami bahwa Movement AI adalah pengatur gerak lokal agent, kita lanjut ke slide berikutnya untuk membedakan **Movement AI** dan **Pathfinding** secara lebih jelas.

---

## Slide 005 - Movement AI vs Pathfinding

### Narasi

**Movement AI** dan **pathfinding** sering terdengar mirip, tetapi keduanya menjawab pertanyaan yang berbeda. **Movement AI** menjawab pertanyaan: “bagaimana agent bergerak sekarang?” sedangkan **pathfinding** menjawab pertanyaan: “jalur mana yang harus diikuti dari posisi awal ke tujuan?”

Pada slide ini, **Movement AI** dipahami sebagai kontrol **lokal** dan **jangka pendek**. Ia tidak selalu perlu mengetahui seluruh peta; ia cukup bereaksi terhadap target, obstacle, atau agent lain di sekitar. Contoh perilaku lokal yang umum adalah:

- `seek`
- `flee`
- `arrive`
- `wander`
- `obstacle avoidance`

Perilaku-perilaku ini biasanya menentukan arah gerak, kecepatan, atau respons agent pada kondisi tertentu. Misalnya, agent dapat mengejar target, menjauh dari ancaman, atau berhenti secara halus ketika mendekati tujuan.

**Pathfinding** lebih bersifat **global**. Ia menghitung urutan titik atau waypoint dari posisi awal ke tujuan. Bentuk sederhananya adalah:

```text
Start
  ↓
Waypoint A
  ↓
Waypoint B
  ↓
Goal
```

Artinya, pathfinding menghasilkan rencana rute, bukan langsung menentukan kecepatan atau arah gerak setiap frame. Ia membantu agent tahu “ke mana harus pergi” melalui lingkungan yang mungkin memiliki dinding, area terlarang, atau beberapa kemungkinan jalur.

Pada Unity, pembagiannya cukup jelas:

- **Steering behavior** biasanya dibuat melalui script sendiri, misalnya dengan menghitung `desiredVelocity`, `force`, atau perubahan `transform.position` secara manual.
- **Navigation/pathfinding** dapat menggunakan `NavMeshAgent`, yang membantu agent bergerak di atas `NavMesh` menuju target.

Namun, keduanya bukan pengganti satu sama lain. **Pathfinding** memberi tahu “menuju waypoint mana”, sedangkan **Movement AI** atau steering behavior membantu agent bergerak mulus, menghindari tabrakan, dan menyesuaikan kecepatan. Dalam game nyata, keduanya sering bekerja bersama.

Sebelum lanjut, mahasiswa perlu memahami bahwa:

- **Movement AI** = perilaku gerak lokal.
- **Pathfinding** = perhitungan rute global.
- Keduanya sering digunakan bersama untuk menghasilkan gerak NPC yang lebih natural.

### Inti yang Harus Ditekankan

- **Movement AI** mengatur gerak lokal jangka pendek, seperti `seek`, `flee`, `arrive`, `wander`, dan `obstacle avoidance`.
- **Pathfinding** menghitung rute global dari `Start` ke `Goal` melalui waypoint.
- Di Unity, steering behavior umumnya dibuat melalui script manual, sedangkan pathfinding dapat menggunakan `NavMeshAgent`.
- Keduanya sering dipakai bersama: pathfinding memberi rute, movement AI mengeksekusi gerak secara lokal.

### Transisi ke Slide Berikutnya

Setelah memahami perbedaan antara movement AI dan pathfinding, kita akan melihat bagaimana agent dapat mengambil keputusan dan bergerak sendiri, yaitu konsep **Autonomous Agent**.

---

## Slide 006 - Autonomous Agent

### Narasi

Slide ini memperkenalkan **Autonomous Agent**, yaitu objek dalam game yang dapat mengambil keputusan dan bergerak tanpa dikontrol langsung oleh player.

Intuisi pentingnya adalah agen tidak sekadar “bergerak ke titik tertentu”. Agen perlu **menyadari keadaan**, **memutuskan apa yang harus dilakukan**, lalu **menerjemahkan keputusan itu menjadi gerakan**.

Pada diagram, player berperan sebagai target. NPC agent kemudian melakukan alur berikut:

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

Alur ini menunjukkan bahwa perilaku agen biasanya bersifat **reaktif terhadap lingkungan**. Agen membaca informasi dari dunia game, lalu menghasilkan respons gerak yang sesuai.

Komponen umum sebuah autonomous agent dapat dilihat sebagai berikut:

- `Sensor`  
  Membaca informasi dari lingkungan, misalnya posisi target, jarak, atau keadaan sekitar.
- `Memory`  
  Menyimpan informasi penting yang dibutuhkan agen untuk mengambil keputusan.
- `Decision`  
  Menentukan tindakan apa yang harus dilakukan agen berdasarkan sensor dan memory.
- `Steering`  
  Menghasilkan keinginan gerak, misalnya arah dan kecepatan yang diinginkan.
- `Locomotion`  
  Menerjemahkan keinginan gerak tersebut menjadi gerakan fisik aktual di dunia game.

Perbedaan yang harus dipahami adalah **`Steering`** dan **`Locomotion`** tidak sama.

`Steering` lebih bersifat **keputusan gerak**. Ia menjawab pertanyaan: “Ke mana agen ingin bergerak, dan seberapa cepat?”

`Locomotion` lebih bersifat **eksekusi gerak**. Ia menjawab pertanyaan: “Bagaimana agen benar-benar bergerak di dunia game?”

Dengan pemisahan ini, sistem gerak agen menjadi lebih rapi. Keputusan tidak langsung bercampur dengan detail animasi, fisika, atau transformasi objek.

Sebelum lanjut, mahasiswa perlu memahami bahwa autonomous agent adalah **sistem perilaku**, bukan hanya objek yang berpindah posisi. Pola dasar yang harus diingat adalah:

1. Agen membaca lingkungan.
2. Agen menyimpan atau memproses informasi.
3. Agen mengambil keputusan.
4. Agen menghasilkan keinginan gerak.
5. Agen mengeksekusi gerakan tersebut.

### Inti yang Harus Ditekankan

- **Autonomous Agent** adalah objek yang dapat mengambil keputusan dan bergerak tanpa kontrol langsung player.
- Komponen utamanya meliputi `Sensor`, `Memory`, `Decision`, `Steering`, dan `Locomotion`.
- `Steering` menghasilkan **keinginan gerak**, sedangkan `Locomotion` menerjemahkannya menjadi **gerakan fisik aktual**.

### Transisi ke Slide Berikutnya

Untuk membuat perilaku gerak agen benar-benar dapat diimplementasikan, kita perlu memahami istilah dasar yang digunakan oleh sistem steering: `position`, `direction`, dan `velocity`. Slide berikutnya akan membahas ketiganya.

---

## Slide 007 - Istilah Penting: Position, Direction, Velocity

### Narasi

Sebelum membahas perilaku gerak NPC, kita perlu menyamakan istilah dasar yang sering muncul dalam movement dan steering. Tiga istilah ini menjadi fondasi karena hampir semua keputusan gerak dimulai dari posisi, arah, dan kecepatan.

**Position** adalah posisi objek di dunia. Dalam Unity, posisi ini biasanya dibaca melalui `transform.position`. Nilai ini menyatakan di mana objek berada pada suatu waktu.

```csharp
transform.position
```

`Position` bukan arah. Ia hanya titik koordinat. Jika agent berada di satu titik dan target berada di titik lain, kita masih perlu menghitung arah menuju target.

**Direction** adalah arah dari satu titik ke titik lain. Dalam kasus NPC yang mengejar target, arah dihitung dengan mengurangi posisi target dari posisi agent.

```csharp
Vector3 direction = target.position - transform.position;
```

Hasil dari operasi ini adalah vektor yang menunjuk dari agent ke target. Panjang vektor ini berkaitan dengan jarak, tetapi untuk gerak yang stabil kita biasanya hanya membutuhkan arahnya.

**Velocity** adalah arah sekaligus besar kecepatan. Ia menjawab dua hal sekaligus: ke mana objek bergerak dan seberapa cepat objek bergerak.

Secara sederhana, `velocity` dapat dibentuk dari `direction` yang sudah dinormalisasi, lalu dikalikan nilai kecepatan.

```csharp
Vector3 velocity = direction.normalized * moveSpeed;
```

`direction.normalized` membuat panjang arah menjadi satu, sehingga `moveSpeed` benar-benar menentukan kecepatan gerak. Tanpa normalisasi, objek yang jauh dari target akan menghasilkan vektor lebih besar dan bergerak tidak konsisten.

Urutan praktisnya adalah sebagai berikut:

1. Baca posisi agent dan target.
2. Hitung `direction` sebagai selisih posisi.
3. Normalisasi `direction` agar hanya berisi arah.
4. Kalikan dengan `moveSpeed` untuk mendapatkan `velocity`.
5. Gunakan `velocity` sebagai input gerak untuk agent.

Ketiga istilah ini penting karena banyak masalah movement muncul dari kebingungan antara posisi, arah, dan kecepatan. Mahasiswa perlu memahami bahwa `position` adalah lokasi, `direction` adalah arah menuju sesuatu, dan `velocity` adalah gerak yang siap diterapkan.

### Inti yang Harus Ditekankan

- `transform.position` menyatakan posisi objek di dunia.
- `target.position - transform.position` menghasilkan arah dari agent ke target.
- `direction.normalized * moveSpeed` menghasilkan `velocity` dengan arah yang benar dan kecepatan yang konsisten.

### Transisi ke Slide Berikutnya

Dengan istilah dasar ini, kita dapat melihat bagaimana Unity merepresentasikan posisi, arah, dan kecepatan melalui `Vector3` pada slide berikutnya.

---

## Slide 008 - Vector3 dalam Unity

### Narasi

Slide ini membahas **`Vector3`**, yaitu tipe data yang menjadi dasar hampir semua perhitungan posisi dan gerak dalam game 3D. Dalam konteks **Game AI**, `Vector3` bukan sekadar koordinat, tetapi representasi matematis dari **position**, **direction**, **velocity**, dan **acceleration**.

```csharp
Vector3 position;
Vector3 direction;
Vector3 velocity;
Vector3 acceleration;
```

Keempat variabel ini menunjukkan bahwa satu tipe data yang sama dapat digunakan untuk beberapa makna berbeda. `position` menyatakan di mana objek berada, `direction` menyatakan ke mana objek menghadap atau bergerak, `velocity` menyatakan arah sekaligus kecepatan, dan `acceleration` menyatakan perubahan kecepatan.

Properti penting pada `Vector3` adalah:

```csharp
direction.magnitude
direction.sqrMagnitude
direction.normalized
```

`magnitude` menghasilkan panjang vector. `sqrMagnitude` menghasilkan kuadrat panjang vector, yang sering lebih efisien jika hanya ingin membandingkan jarak. `normalized` menghasilkan **unit vector**, yaitu vector dengan panjang 1 yang hanya mempertahankan arah.

Contoh berikut menunjukkan cara mendapatkan vector dari posisi agent ke target:

```csharp
Vector3 toTarget = target.position - transform.position;

float distance = toTarget.magnitude;
Vector3 direction = toTarget.normalized;
```

Pada baris pertama, `toTarget` adalah selisih posisi target dan posisi agent. Artinya, vector tersebut menunjuk dari agent menuju target. Baris kedua menghitung jarak aktual menggunakan `magnitude`. Baris ketiga mengubah vector tersebut menjadi arah murni dengan `normalized`, sehingga panjangnya tidak lagi bergantung pada jarak.

Secara praktis, mahasiswa perlu memahami bahwa **arah** dan **jarak** adalah dua informasi yang berbeda. `toTarget` mengandung keduanya, tetapi `direction.normalized` hanya mengandung arah. Pemisahan ini penting karena perilaku gerak seperti mengejar, menghindar, atau berpindah state biasanya membutuhkan arah yang konsisten, bukan vector yang panjangnya berubah-ubah.

### Inti yang Harus Ditekankan

- **`Vector3`** adalah tipe data utama untuk posisi, arah, kecepatan, dan percepatan dalam Unity.
- **`magnitude`** digunakan untuk mengetahui panjang vector, sedangkan **`sqrMagnitude`** berguna untuk perbandingan jarak yang lebih hemat.
- **`normalized`** menghasilkan unit vector dengan panjang 1, sehingga hanya menyimpan arah.
- Selisih dua posisi, seperti `target.position - transform.position`, menghasilkan vector yang menunjuk dari agent ke target.

### Transisi ke Slide Berikutnya

Setelah memahami apa itu `Vector3` dan bagaimana `normalized` bekerja, kita akan melanjutkan ke perhitungan arah ke target secara lebih konkret menggunakan posisi agent dan target.

---

## Slide 009 - Menghitung Arah ke Target

### Narasi

Pada slide ini kita membahas langkah paling dasar dalam **movement system** untuk objek yang bergerak menuju suatu tujuan. Sebelum sebuah agent dapat bergerak, agent tersebut harus mengetahui **ke mana arah yang harus dituju**. Dalam konteks game, agent bisa berupa NPC, karakter, drone, kendaraan, atau objek lain yang memiliki posisi di ruang 3D. Target bisa berupa posisi tujuan, pemain, musuh, atau titik tertentu di scene.

Contoh sederhana yang ditampilkan pada slide adalah:

```text
Agent A = (2, 0, 2)
Target  = (7, 0, 5)
```

Arah dari agent menuju target dihitung dengan mengurangkan posisi target dari posisi agent. Secara matematis:

```text
Direction = Target - Agent
```

Dengan nilai tersebut:

```text
Direction = (7 - 2, 0 - 0, 5 - 2)
Direction = (5, 0, 3)
```

Vektor `(5, 0, 3)` ini menunjukkan arah sekaligus jarak dari agent ke target. Komponen `x` dan `z` menunjukkan pergeseran di bidang horizontal, sedangkan komponen `y` menunjukkan pergeseran vertikal. Dalam game 3D, informasi inilah yang menjadi dasar untuk menentukan ke mana agent harus menghadap atau bergerak.

Dalam Unity, perhitungan ini biasanya ditulis sebagai:

```csharp
Vector3 direction =
    target.position - transform.position;
```

Di sini, `target.position` adalah posisi target, sedangkan `transform.position` adalah posisi agent. Hasil pengurangan tersebut menghasilkan `Vector3` yang menunjuk dari posisi agent ke posisi target. Vektor ini belum tentu memiliki panjang satu, karena panjangnya bergantung pada jarak antara agent dan target.

Jika kita hanya membutuhkan **arah**, bukan jarak, maka vektor tersebut perlu dinormalisasi. Normalisasi mengubah panjang vektor menjadi satu tanpa mengubah arahnya. Dalam Unity, hal ini bisa dilakukan dengan:

```csharp
direction.Normalize();
```

atau langsung ditulis sebagai:

```csharp
Vector3 direction =
    (target.position - transform.position).normalized;
```

Hasil dari `.normalized` adalah **unit vector**. Unit vector sangat penting karena memberikan arah yang konsisten, terlepas dari jarak agent ke target. Misalnya, agent yang berada dekat target dan agent yang berada jauh dari target dapat memiliki arah yang sama, tetapi panjang vektor awalnya berbeda. Setelah dinormalisasi, panjangnya menjadi sama, yaitu satu.

Perlu diperhatikan satu kasus khusus: jika posisi agent dan target sama, maka hasil pengurangan adalah vektor nol. Dalam situasi tersebut, arah tidak terdefinisi secara berarti. Oleh karena itu, dalam implementasi yang lebih lanjut, biasanya perlu dicek apakah jarak antara agent dan target sudah sangat kecil sebelum melakukan normalisasi atau pergerakan.

Konsep menghitung arah ke target ini menjadi dasar hampir seluruh **steering behavior**. Perilaku seperti mengejar target, menjauh dari target, atau bergerak menuju titik tujuan semuanya membutuhkan vektor arah sebagai input awal. Tanpa arah yang benar, agent tidak dapat menentukan gerakan yang masuk akal.

### Inti yang Harus Ditekankan

- Arah ke target dihitung dengan **selisih posisi target dan posisi agent**.
- `target.position - transform.position` menghasilkan vektor yang menunjuk dari agent ke target.
- Vektor tersebut bisa digunakan sebagai **arah sekaligus jarak** sebelum dinormalisasi.
- `.normalized` menghasilkan **unit vector** yang hanya berisi arah, dengan panjang satu.
- Konsep ini menjadi dasar penting untuk **steering behavior** dan pergerakan agent.

### Transisi ke Slide Berikutnya

Setelah arah ke target berhasil dihitung, langkah berikutnya adalah mengubah arah tersebut menjadi gerakan nyata pada objek. Pada slide berikutnya, kita akan membahas bagaimana arah ini digunakan untuk memindahkan posisi agent secara langsung.

---

## Slide 010 - Kinematic Movement

### Narasi

Pada slide ini kita membahas **kinematic movement**, yaitu cara menggerakkan objek dengan mengubah posisi atau rotasinya secara langsung. Pendekatan ini sering menjadi langkah pertama ketika membangun perilaku agen dalam game, karena efeknya mudah dilihat dan mudah diuji.

Contoh utamanya adalah:

```csharp
transform.position +=
    direction * speed * Time.deltaTime;
```

Di sini, `direction` biasanya sudah berupa vektor arah yang dinormalisasi. Nilai `speed` menentukan seberapa cepat objek bergerak, sedangkan `Time.deltaTime` menjaga agar jarak yang ditempuh tetap konsisten meskipun frame rate berubah. Urutan eksekusinya sederhana: hitung arah, kalikan dengan kecepatan dan waktu frame, lalu tambahkan hasilnya ke posisi objek.

Beberapa karakteristik penting dari kinematic movement adalah:

- sederhana dan mudah dipahami,
- mudah dikontrol untuk demo atau prototipe,
- cocok untuk mempelajari dasar-dasar steering behavior,
- tidak selalu mengikuti simulasi fisika secara penuh.

Artinya, objek dapat berpindah posisi tanpa melalui proses fisika seperti gaya, tumbukan, atau perubahan kecepatan bertahap. Dalam Unity, cara ini biasanya dilakukan dengan mengubah `transform.position` secara langsung.

Contoh lain yang sering dipakai adalah:

```csharp
transform.Translate(
    Vector3.forward * speed * Time.deltaTime
);
```

Perintah `transform.Translate` menggeser objek relatif terhadap orientasi objek itu sendiri. Karena `Vector3.forward` mengikuti arah depan objek, objek akan bergerak maju sesuai rotasinya. Ini berguna untuk NPC yang berjalan mengikuti arah hadap, atau untuk demo sederhana di mana arah gerak dikendalikan oleh rotasi objek.

Hal yang perlu dipahami mahasiswa sebelum lanjut adalah bahwa kinematic movement bukan pengganti sistem gerak yang realistis. Ia sangat berguna untuk membangun intuisi tentang arah, kecepatan, dan kontrol, tetapi jika objek perlu berinteraksi dengan fisika, seperti tertabrak, meluncur, atau dipengaruhi gravitasi, pendekatan ini perlu dikombinasikan dengan sistem gerak yang lebih lengkap.

### Inti yang Harus Ditekankan

- **Kinematic movement** mengubah `transform.position` atau rotasi objek secara langsung.
- `Time.deltaTime` penting agar kecepatan gerak tidak bergantung pada frame rate.
- Pendekatan ini cocok untuk pembelajaran awal dan prototipe, tetapi tidak menggantikan simulasi fisika.

### Transisi ke Slide Berikutnya

Setelah objek dapat digerakkan secara langsung, langkah berikutnya adalah melihat bagaimana gerak menjadi lebih natural ketika kecepatan berubah secara bertahap melalui dynamic movement.

---

## Slide 011 - Dynamic Movement

### Narasi

Pada slide ini kita beralih dari **kinematic movement** ke **dynamic movement**. Jika pada pendekatan kinematik posisi objek dapat diubah secara langsung, maka pada pendekatan dinamis kita memperlakukan gerak sebagai hasil dari perubahan **kecepatan** yang dipengaruhi oleh **percepatan**.

Intuisi praktisnya adalah sebagai berikut: objek tidak langsung “melompat” ke kecepatan baru, melainkan kecepatan berubah secara bertahap. Hal ini membuat gerak NPC, kendaraan, atau agen game terasa lebih natural karena ada percepatan, perlambatan, dan perubahan arah yang lebih halus.

Model alurnya dapat dibaca sebagai pipeline sederhana:

1. **Acceleration** menentukan seberapa cepat kecepatan berubah.
2. **Velocity** menyimpan keadaan gerak saat ini.
3. **Position** diperbarui berdasarkan kecepatan tersebut.

Secara matematis, model sederhana yang digunakan adalah:

```text
velocity += acceleration × dt
position += velocity × dt
```

Di sini `dt` biasanya mewakili selang waktu antar frame, misalnya `Time.deltaTime` di Unity. Dengan memperbarui kecepatan terlebih dahulu, lalu memperbarui posisi, objek akan memiliki gerak yang lebih konsisten dari waktu ke waktu.

Contoh implementasinya adalah:

```csharp
velocity += acceleration * Time.deltaTime;
transform.position += velocity * Time.deltaTime;
```

Baris pertama memperbarui `velocity` berdasarkan `acceleration`. Baris kedua memindahkan objek sesuai `velocity` yang sudah diperbarui. Urutan ini penting karena posisi harus mengikuti kecepatan hasil perhitungan terbaru, bukan kecepatan lama.

Dalam konteks **steering behavior**, pendekatan dinamis ini menjadi dasar untuk perilaku seperti mengejar, menghindari rintangan, atau menjaga kecepatan. Karena kecepatan adalah state yang dapat diubah oleh beberapa perilaku, NPC dapat menghasilkan gerak yang lebih responsif dan lebih mudah dikombinasikan dengan keputusan agen.

Sebelum lanjut, mahasiswa perlu memahami bahwa **dynamic movement** bukan sekadar rumus, melainkan cara merepresentasikan gerak sebagai state yang berubah: `acceleration` memengaruhi `velocity`, dan `velocity` memengaruhi `position`. Pemahaman ini penting karena pada slide berikutnya kita akan melihat bagaimana pilihan komponen Unity memengaruhi cara gerak ini diterapkan.

### Inti yang Harus Ditekankan

- **Dynamic movement** menggunakan hubungan `acceleration` → `velocity` → `position`.
- Kecepatan tidak berubah instan, sehingga gerak NPC atau agen game terasa lebih halus.
- `dt` penting agar gerak tidak bergantung pada frame rate.
- Urutan update: perbarui `velocity` dulu, lalu perbarui `position`.
- Pendekatan ini menjadi dasar untuk steering behavior dan perilaku agen yang lebih natural.

### Transisi ke Slide Berikutnya

Setelah memahami model gerak dinamis, langkah berikutnya adalah melihat bagaimana model ini diterapkan di Unity, khususnya perbedaan antara menggunakan `Transform` dan `Rigidbody`.

---

## Slide 012 - Unity: Transform vs Rigidbody

### Narasi

Pada slide ini kita membandingkan dua cara memindahkan objek di Unity: **Transform** dan **Rigidbody**.

Setelah memahami dynamic movement, langkah berikutnya adalah memilih representasi gerak yang sesuai. Pilihan ini menentukan apakah objek hanya diposisikan secara manual, atau berinteraksi dengan sistem fisika Unity.

**Menggunakan Transform**

Cara paling sederhana adalah memindahkan `transform.position` secara langsung:

```csharp
transform.position += velocity * Time.deltaTime;
```

Pendekatan ini cocok untuk prototyping, objek nonfisika, kamera, UI, atau NPC yang hanya mengikuti path tanpa perlu collision yang akurat. Kelebihannya sederhana dan mudah dipahami.

Namun, jika objek memiliki collider dan berinteraksi dengan fisika, memindahkan `Transform` secara langsung dapat membuat sistem fisika tidak mengetahui perubahan posisi tersebut. Akibatnya, collision, trigger, dan respons gaya bisa menjadi tidak konsisten.

**Menggunakan Rigidbody**

Jika objek menggunakan fisika, gunakan `Rigidbody` sebagai sumber gerak. Contoh pemindahan yang lebih aman:

```csharp
rb.MovePosition(
    rb.position + velocity * Time.fixedDeltaTime
);
```

`MovePosition` memindahkan objek dengan cara yang lebih kompatibel dengan fisika, sehingga objek tidak terasa “teleport” dan tetap dapat berinteraksi dengan collider lain.

Alternatif lain adalah menerapkan percepatan:

```csharp
rb.AddForce(acceleration, ForceMode.Acceleration);
```

Pendekatan ini cocok untuk NPC yang dipengaruhi gravitasi, tumbukan, dorongan, atau perilaku dinamis lainnya. Di sini Unity yang mengintegrasikan percepatan menjadi kecepatan dan posisi melalui sistem fisika.

Dalam konteks steering behavior, keputusan ini penting. Agent yang hanya mengikuti target sederhana dapat memakai `Transform`, tetapi agent yang harus menabrak, mendorong, atau terdorong lingkungan perlu memakai `Rigidbody`.

Prinsip pentingnya: **jika objek memakai fisika Unity, hindari memindahkan `Transform` secara sembarangan**. Gunakan `Rigidbody` agar perilaku gerak, collision, dan interaksi antarobjek tetap konsisten.

### Inti yang Harus Ditekankan

- **Transform** adalah cara kinematik sederhana: ubah `transform.position` langsung, cocok untuk prototyping dan objek nonfisika.
- **Rigidbody** adalah cara fisika: gunakan `rb.MovePosition` atau `rb.AddForce` agar collision, gravitasi, dan interaksi tetap konsisten.
- Jika objek berinteraksi dengan fisika Unity, hindari memindahkan `Transform` secara sembarangan karena dapat menyebabkan perilaku fisika tidak stabil.

### Transisi ke Slide Berikutnya

Dengan memahami perbedaan `Transform` dan `Rigidbody`, kita perlu memilih loop update yang tepat. Selanjutnya kita bahas `Update()` dan `FixedUpdate()`, karena movement berbasis Transform dan fisika Unity memiliki pola pemanggilan yang berbeda.

---

## Slide 013 - Update() vs FixedUpdate()

### Narasi

Pada slide ini kita membedakan dua fungsi utama dalam loop Unity: `Update()` dan `FixedUpdate()`. Keduanya sering dipakai untuk gerakan NPC, tetapi memiliki peran yang berbeda.

**`Update()`** dipanggil sekali per rendered frame. Artinya, frekuensinya mengikuti frame rate perangkat. Fungsi ini cocok untuk membaca input, mengambil keputusan agen, melakukan perhitungan nonfisika, dan memindahkan objek berbasis `Transform`.

```csharp
void Update()
{
    Think();
    Move();
}
```

Dalam potongan kode di atas, `Think()` dapat mewakili proses memilih arah, target, atau perilaku NPC. `Move()` kemudian mengubah posisi objek, misalnya dengan `transform.position`. Karena `Update()` berjalan per frame, gerakan berbasis `Transform` harus tetap memperhatikan waktu agar kecepatannya konsisten.

**`FixedUpdate()`** dipanggil dengan timestep fisika yang tetap. Unity menggunakan interval ini untuk menghitung fisika, seperti gaya, kecepatan, dan tabrakan. Karena itu, `FixedUpdate()` lebih tepat untuk objek yang menggunakan `Rigidbody` atau gerakan berbasis fisika.

```csharp
void FixedUpdate()
{
    rb.AddForce(force);
}
```

Pada contoh ini, `rb` adalah referensi `Rigidbody`, sedangkan `force` adalah gaya yang diterapkan ke objek. Dengan menempatkan `AddForce` di `FixedUpdate()`, perhitungan fisika menjadi lebih stabil dan konsisten antar frame.

Prinsip umumnya dapat diringkas sebagai berikut:

```text
Transform movement → Update()
Rigidbody physics → FixedUpdate()
```

Secara praktis, alurnya bisa dipahami seperti ini:

1. `Update()` membaca kondisi, input, atau keputusan perilaku NPC.
2. Jika NPC bergerak dengan `Transform`, posisi diubah langsung di `Update()`.
3. Jika NPC bergerak dengan fisika, `Update()` dapat menyiapkan arah atau nilai gaya.
4. `FixedUpdate()` menerapkan gaya tersebut ke `Rigidbody`.
5. Sistem fisika Unity kemudian memperbarui posisi, kecepatan, dan interaksi tabrakan.

Hal penting yang harus dipahami mahasiswa adalah jangan mencampur kedua pendekatan secara sembarangan. Memindahkan `Rigidbody` melalui `Transform` di `Update()` dapat membuat interaksi fisika menjadi tidak konsisten, terutama pada frame rate yang berubah-ubah.

### Inti yang Harus Ditekankan

- `Update()` digunakan untuk logika per frame, input, keputusan agen, dan movement berbasis `Transform`.
- `FixedUpdate()` digunakan untuk fisika, `Rigidbody`, `AddForce`, dan movement berbasis gaya.
- `Transform movement` sebaiknya berada di `Update()`, sedangkan `Rigidbody physics` sebaiknya berada di `FixedUpdate()`.
- Jangan memindahkan `Rigidbody` secara langsung melalui `Transform` di `Update()` jika objek tersebut bergantung pada fisika Unity.

### Transisi ke Slide Berikutnya

Setelah memahami kapan logika dan fisika sebaiknya dijalankan, langkah berikutnya adalah membuat gerakan tidak bergantung pada frame rate dengan `Time.deltaTime`.

---

## Slide 014 - Time.deltaTime

### Narasi

Setelah memahami kapan `Update()` dan `FixedUpdate()` digunakan, langkah berikutnya adalah memastikan perhitungan gerakan benar-benar stabil. Dalam game loop, waktu antar frame tidak selalu sama. Frame rate bisa berubah karena perangkat, beban rendering, atau kondisi runtime.

Jika kita menulis:

```csharp
transform.position += direction * speed;
```

maka agent akan berpindah jarak yang sama setiap frame. Akibatnya, pada frame rate tinggi, agent bergerak lebih cepat karena lebih banyak frame diproses per detik. Pada frame rate rendah, agent bergerak lebih lambat.

Masalah ini penting untuk NPC, path following, avoidance, atau movement controller karena perilaku yang seharusnya konsisten bisa berubah hanya karena hardware berbeda.

Solusinya adalah menggunakan `Time.deltaTime`. Nilai ini menyatakan waktu sejak frame sebelumnya, dalam satuan detik. Dengan rumus:

```csharp
transform.position +=
    direction * speed * Time.deltaTime;
```

maka `speed` dapat dibaca sebagai jarak per detik, bukan jarak per frame.

Contoh:

```text
moveSpeed = 5
```

berarti agent bergerak sekitar:

```text
5 Unity units / second
```

Jika frame rate 60 FPS, `Time.deltaTime` sekitar 0,0167 detik, sehingga perpindahan per frame sekitar `5 * 0,0167`. Jika frame rate 30 FPS, `Time.deltaTime` sekitar 0,033 detik, sehingga perpindahan per frame menjadi dua kali lebih besar. Total jarak per detik tetap mendekati 5 unit.

Urutan eksekusinya sederhana:

1. `Update()` dipanggil setiap rendered frame.
2. `direction` menentukan arah gerak, biasanya sudah dinormalisasi.
3. `speed` menentukan magnitudo gerak per detik.
4. `Time.deltaTime` menyesuaikan jarak agar sesuai durasi frame.
5. Hasil perkalian ditambahkan ke `transform.position`.

Dengan cara ini, movement berbasis `Transform` menjadi frame-rate independent. Mahasiswa perlu memahami hal ini sebelum masuk ke perilaku yang lebih kompleks, karena banyak sistem gerak akan menghitung desired direction, desired velocity, atau force yang kemudian diintegrasikan terhadap waktu.

Untuk `Rigidbody` dan `AddForce`, pendekatan fisika tetap mengikuti `FixedUpdate()` dan timestep fisika. Namun untuk movement langsung pada `Transform`, `Time.deltaTime` adalah kunci agar kecepatan tidak bergantung pada frame rate.

### Inti yang Harus Ditekankan

- `Time.deltaTime` adalah durasi frame sebelumnya dalam satuan detik.
- Tanpa `Time.deltaTime`, kecepatan gerak bergantung pada frame rate.
- Dengan `Time.deltaTime`, `speed` berarti jarak per detik, misalnya `5` berarti `5 Unity units / second`.
- Movement berbasis `Transform` sebaiknya menggunakan `Time.deltaTime` agar konsisten di berbagai perangkat.
- Konsep ini menjadi dasar sebelum membahas steering behavior dan movement controller.

### Transisi ke Slide Berikutnya

Setelah gerakan dasar menjadi stabil terhadap frame rate, langkah berikutnya adalah menentukan arah dan gaya gerak yang lebih cerdas. Pada slide berikutnya, kita akan membahas **Steering Behavior** sebagai cara menghasilkan desired direction atau desired velocity untuk mengarahkan agent.

---

## Slide 015 - Steering Behavior

### Narasi

Pada slide ini kita masuk ke konsep penting dalam **movement AI**, yaitu **steering behavior**. Jika sebelumnya kita membahas bagaimana membuat gerakan agent tidak bergantung pada frame rate, maka di sini kita membahas bagaimana agent “memutuskan” ke mana ia harus bergerak.

**Steering behavior** menghasilkan **steering output** untuk mengarahkan agent. Output ini biasanya berupa arah yang diinginkan, kecepatan yang diinginkan, atau percepatan yang perlu diterapkan pada agent. Dengan kata lain, steering behavior tidak langsung memindahkan agent secara instan, tetapi memberikan instruksi gerak yang kemudian diproses oleh sistem pergerakan.

Model konseptualnya dapat dilihat sebagai alur berikut:

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

Alur ini penting karena menunjukkan bahwa ada pemisahan antara **pengambilan keputusan gerak** dan **eksekusi gerak**.

1. **Target / Environment** memberikan informasi seperti posisi target, posisi obstacle, posisi agent lain, atau kondisi lingkungan.
2. **Steering behavior** memproses informasi tersebut untuk menentukan respons gerak yang sesuai.
3. Hasilnya berupa **desired direction**, **desired velocity**, atau **acceleration**.
4. **Movement controller** menerjemahkan hasil tersebut menjadi perubahan posisi atau rotasi agent.
5. Akhirnya, agent bergerak di dalam scene.

Steering behavior dapat berbasis pada beberapa hal, antara lain:

- **posisi**, misalnya posisi agent dan posisi target;
- **velocity**, misalnya arah dan kecepatan agent saat ini;
- **jarak**, misalnya seberapa dekat agent dengan target atau obstacle;
- **obstacle**, misalnya dinding, rintangan, atau area yang tidak boleh dimasuki;
- **agent lain**, misalnya NPC lain yang perlu dijaga jaraknya agar tidak bertumpuk.

Intuisi praktisnya adalah ini: steering behavior membuat agent bergerak seperti makhluk yang “merasakan” lingkungan, bukan sekadar dipindah dari titik A ke titik B. Agent dapat menyesuaikan arah, melambat, menghindari rintangan, atau menjaga jarak dari agent lain berdasarkan informasi yang tersedia.

Yang harus dipahami mahasiswa sebelum lanjut adalah bahwa **steering behavior** adalah lapisan keputusan gerak. Ia berada di antara informasi lingkungan dan eksekusi pergerakan. Konsep ini menjadi dasar untuk perilaku gerak yang lebih spesifik, seperti mengejar target, menghindari obstacle, atau bergerak bersama kelompok.

### Inti yang Harus Ditekankan

- **Steering behavior** menghasilkan **steering output** seperti arah, kecepatan, atau percepatan yang diinginkan.
- Alur utamanya adalah: lingkungan/target → steering behavior → desired velocity/acceleration → movement controller → agent bergerak.
- Steering behavior dapat menggunakan informasi **posisi**, **velocity**, **jarak**, **obstacle**, dan **agent lain**.
- Konsep ini penting untuk membuat gerakan NPC lebih natural, responsif, dan tidak sekadar teleport.

### Transisi ke Slide Berikutnya

Setelah memahami alur umum steering behavior, kita akan masuk ke perilaku gerak pertama yang paling dasar, yaitu **Seek**, pada slide berikutnya.

---

## Slide 016 - Seek

### Narasi

Slide ini membahas **Seek**, salah satu perilaku gerak paling dasar dalam **steering behavior**. Intuisinya sederhana: agent selalu mencari arah menuju target, lalu bergerak dengan kecepatan maksimum yang diizinkan.

Secara matematis, arah gerak diperoleh dari selisih posisi target dan posisi agent:

```text
direction = targetPosition - agentPosition
```

Vektor ini menunjukkan "ke mana agent harus pergi". Namun vektor tersebut belum bisa langsung dipakai sebagai kecepatan, karena panjangnya bergantung pada jarak. Semakin jauh target, semakin besar nilai vektor, sehingga agent bisa bergerak tidak konsisten.

Karena itu, arah dinormalisasi terlebih dahulu:

```text
desiredVelocity = normalize(direction) × maxSpeed
```

`normalize(direction)` menghasilkan vektor satuan yang hanya menyimpan arah. Setelah itu dikalikan `maxSpeed`, sehingga agent bergerak dengan kecepatan tetap menuju target, terlepas dari jaraknya.

Contoh implementasi di Unity:

```csharp
Vector3 direction =
    (target.position - transform.position).normalized;

Vector3 velocity =
    direction * maxSpeed;

transform.position +=
    velocity * Time.deltaTime;
```

Urutan eksekusinya penting:

1. Ambil posisi target dan posisi agent.
2. Hitung vektor arah dari agent ke target.
3. Normalisasi vektor arah.
4. Kalikan dengan `maxSpeed` untuk mendapatkan `velocity`.
5. Tambahkan `velocity * Time.deltaTime` ke posisi agent.

`Time.deltaTime` membuat gerak tidak bergantung pada frame rate. Tanpa nilai ini, agent bisa bergerak terlalu cepat di frame yang lambat atau terlalu cepat/lambat tergantung perangkat.

Perilaku **Seek** cocok untuk beberapa situasi:

- mengejar player,
- menuju waypoint,
- menuju item,
- menuju titik tertentu.

Kelebihan utamanya adalah sederhana, mudah diuji, dan cocok sebagai dasar perilaku navigasi. Namun, karena agent selalu bergerak dengan kecepatan maksimum, perilaku ini belum cukup natural untuk semua kasus.

Sebelum lanjut, mahasiswa perlu memahami bahwa **Seek** menghasilkan arah dan kecepatan yang konsisten menuju target, tetapi belum menangani masalah berhenti, melambat, atau menghindari osilasi di sekitar target.

### Inti yang Harus Ditekankan

- **Seek** adalah perilaku dasar yang mengarahkan agent ke target.
- Arah dihitung dari `targetPosition - agentPosition`, lalu dinormalisasi.
- `desiredVelocity` dibuat dengan `normalize(direction) * maxSpeed`.
- `Time.deltaTime` penting agar gerak stabil dan tidak bergantung frame rate.
- **Seek** berguna untuk mengejar, menuju waypoint, item, atau titik tertentu.

### Transisi ke Slide Berikutnya

Karena **Seek** selalu bergerak dengan kecepatan maksimum, agent bisa melewati target atau bergerak bolak-balik di sekitar target. Pada slide berikutnya, kita akan membahas masalah pada **Seek** sederhana dan solusi seperti stopping distance, slowing radius, serta **Arrive behavior**.

---

## Slide 017 - Masalah pada Seek Sederhana

### Narasi

Setelah kita melihat bahwa `Seek` membuat agent bergerak menuju target, ada satu masalah penting yang sering muncul saat perilaku ini diterapkan langsung di game.

Inti masalahnya ada pada rumus dasar `Seek`. Agent menghitung arah ke target, lalu langsung diberi `desiredVelocity` sebesar `maxSpeed`. Artinya, selama target masih ada, agent selalu bergerak secepat mungkin.

Kondisi ini membuat agent tidak punya rencana untuk berhenti. Saat jarak ke target sudah sangat kecil, agent tetap mempertahankan kecepatan maksimum. Akibatnya, agent bisa melewati target, lalu di frame berikutnya arahnya berbalik, sehingga agent terlihat bolak-balik di sekitar titik tujuan.

Perilaku ini sering disebut **overshoot** dan **oscillation**. Dalam game, efeknya terlihat tidak natural: NPC mengejar player lalu bergetar di dekat player, enemy menuju waypoint lalu bergerak maju-mundur, atau agent menuju item lalu tidak pernah benar-benar berhenti dengan rapi.

Masalah ini bukan berarti `Seek` salah, tetapi `Seek` adalah perilaku dasar. Untuk perilaku yang lebih realistis, kita perlu memberi agent aturan tambahan tentang kapan harus mengurangi kecepatan dan kapan harus berhenti.

Solusi yang umum digunakan adalah:

- **stopping distance**: jarak minimum dari target tempat agent dianggap sudah sampai.
- **slowing radius**: area di sekitar target di mana agent mulai mengurangi kecepatan.
- **Arrive behavior**: perilaku yang menggabungkan `Seek` dengan logika perlambatan dan berhenti secara halus.

Secara intuitif, `Seek` menjawab pertanyaan “ke mana agent harus bergerak?”, sedangkan solusi di atas menjawab “seberapa cepat agent harus bergerak saat mendekati target?”. Pembedaan ini penting karena banyak masalah gerak NPC bukan berasal dari arah yang salah, tetapi dari kecepatan yang tidak diatur dengan baik.

Sebelum lanjut, mahasiswa perlu memahami bahwa perilaku gerak yang baik biasanya tidak hanya menentukan arah, tetapi juga mengatur magnitudo kecepatan berdasarkan jarak, kondisi lingkungan, dan tujuan perilaku. Dengan pemahaman ini, kita bisa melihat perilaku lain yang lebih sederhana secara matematis tetapi penting secara desain.

### Inti yang Harus Ditekankan

- `Seek` sederhana selalu menggunakan `maxSpeed`, sehingga agent tidak berhenti dengan halus.
- Masalah utamanya adalah **overshoot**, **oscillation**, dan gerak yang terlihat tidak natural.
- Solusi umum yang perlu dipahami adalah **stopping distance**, **slowing radius**, dan **Arrive behavior**.

### Transisi ke Slide Berikutnya

Setelah kita memahami kelemahan `Seek`, selanjutnya kita akan melihat perilaku kebalikannya, yaitu `Flee`, di mana agent bergerak menjauh dari ancaman.

---

## Slide 018 - Flee

### Narasi

Pada slide ini kita membahas **Flee**, salah satu perilaku steering yang paling dasar untuk membuat agent bergerak secara reaktif.

**Flee** adalah kebalikan dari **Seek**. Jika **Seek** membuat agent bergerak menuju target, maka **Flee** membuat agent bergerak menjauh dari ancaman.

```text
Seek : Agent bergerak menuju Target
Flee : Agent bergerak menjauh dari Threat
```

Intuisi praktisnya sederhana: agent tidak perlu menghitung jalur lengkap. Agent cukup mengetahui posisinya sendiri dan posisi ancaman, lalu bergerak ke arah yang berlawanan.

Contoh implementasinya dapat ditulis sebagai berikut:

```csharp
Vector3 direction =
    (transform.position - threat.position).normalized;

Vector3 velocity =
    direction * maxSpeed;
```

Pada potongan kode tersebut, `transform.position` adalah posisi agent, sedangkan `threat.position` adalah posisi ancaman. Hasil pengurangan `transform.position - threat.position` menghasilkan vektor yang mengarah dari ancaman ke agent.

Vektor itu kemudian dinormalisasi dengan `.normalized` agar panjangnya menjadi satu. Dengan begitu, `direction` hanya menyatakan arah, bukan jarak.

Selanjutnya, arah tersebut dikalikan dengan `maxSpeed` untuk menghasilkan `velocity`. Artinya, agent akan bergerak menjauh dengan kecepatan maksimum yang telah ditentukan.

Urutan eksekusinya adalah:

1. Ambil posisi agent dan posisi ancaman.
2. Hitung vektor dari ancaman ke agent.
3. Normalisasi vektor tersebut menjadi arah murni.
4. Kalikan arah dengan `maxSpeed` untuk mendapatkan kecepatan gerak.

Perilaku ini cocok untuk situasi di mana agent harus segera menghindar, misalnya:

- civilian menghindari monster,
- enemy lemah melarikan diri,
- prey menghindari predator,
- NPC menjauh dari ledakan.

Yang perlu dipahami mahasiswa adalah **Flee** bersifat lokal dan reaktif. Agent hanya bereaksi terhadap posisi ancaman saat ini, bukan merencanakan rute panjang. Karena itu, perilaku ini sering digunakan sebagai respons cepat sebelum perilaku lain mengambil alih.

### Inti yang Harus Ditekankan

- **Flee** adalah kebalikan dari **Seek**: agent bergerak menjauh dari ancaman, bukan menuju target.
- Arah utama dihitung dari `transform.position - threat.position`, lalu dinormalisasi menjadi `direction`.
- `velocity` dihasilkan dari `direction * maxSpeed`, sehingga agent bergerak menjauh dengan kecepatan maksimum.
- **Flee** adalah perilaku reaktif untuk menghindari ancaman, bukan pengganti pathfinding atau perencanaan jalur.

### Transisi ke Slide Berikutnya

Namun, jika **Flee** selalu aktif, agent akan terus berlari meskipun ancaman sudah berada jauh. Karena itu, slide berikutnya akan membahas cara membatasi perilaku ini menggunakan jarak ancaman.

---

## Slide 019 - Flee dengan Panic Distance

### Narasi

Pada slide sebelumnya, **Flee** dijelaskan sebagai gerakan menjauh dari ancaman. Namun dalam game, NPC yang selalu menjauh dari ancaman akan terlihat tidak natural dan dapat membuat perilaku game menjadi kacau. Oleh karena itu, kita perlu memberi batasan: agent hanya masuk ke perilaku **Flee** ketika ancaman sudah cukup dekat.

Batasan jarak ini disebut **panic distance**. Intuisi praktisnya sederhana: agent tidak panik saat ancaman masih jauh, tetapi langsung bereaksi saat ancaman masuk ke radius tertentu. Dengan cara ini, perilaku NPC lebih masuk akal dan juga lebih hemat karena tidak perlu menjalankan **Flee** terus-menerus.

Pada kode berikut, jarak antara agent dan ancaman dihitung setiap frame:

```csharp
float distance =
    Vector3.Distance(transform.position, threat.position);

if (distance < panicDistance)
{
    Flee();
}
```

Urutan eksekusinya adalah:

1. Ambil posisi agent melalui `transform.position`.
2. Ambil posisi ancaman melalui `threat.position`.
3. Hitung jarak keduanya dengan `Vector3.Distance`.
4. Jika `distance` lebih kecil dari `panicDistance`, panggil `Flee()`.
5. Jika `distance` lebih besar atau sama dengan `panicDistance`, agent tidak menjalankan **Flee** dan dapat kembali ke perilaku normal.

Istilah yang sering digunakan untuk parameter ini adalah:

- `panicDistance`
- `panicRadius`
- `threatRadius`

Ketiganya memiliki makna yang sama, yaitu radius di mana ancaman dianggap cukup dekat untuk memicu respons menjauh.

Hal penting yang harus dipahami mahasiswa adalah bahwa **panic distance** bukan hanya angka, tetapi parameter desain. Jika nilainya terlalu kecil, agent baru bereaksi saat ancaman sudah sangat dekat, sehingga bisa terlihat lambat atau tidak responsif. Jika nilainya terlalu besar, agent akan sering panik dan sulit kembali ke perilaku normal. Karena itu, nilai ini perlu diuji dan disesuaikan dengan kecepatan agent, kecepatan ancaman, serta skala scene.

Dalam arsitektur perilaku game, kondisi `distance < panicDistance` dapat dianggap sebagai syarat masuk ke state **Flee**. Ketika syarat tidak terpenuhi, agent dapat kembali ke state sebelumnya, misalnya idle, patrol, atau follow. Dengan demikian, perilaku menjauh menjadi lebih terkontrol dan tidak mendominasi seluruh perilaku NPC.

### Inti yang Harus Ditekankan

- **Flee** tidak selalu aktif; agent hanya menjauh ketika ancaman masuk ke radius tertentu.
- `panicDistance`, `panicRadius`, dan `threatRadius` adalah istilah untuk batas jarak ancaman.
- Di luar radius tersebut, agent dapat kembali ke perilaku normal.
- Nilai parameter ini memengaruhi responsivitas dan naturalitas NPC, sehingga perlu di-tune.

### Transisi ke Slide Berikutnya

Setelah agent tahu kapan harus berhenti panik dan kembali normal, kita akan melihat perilaku lain yang mengatur kecepatan agent saat mendekati tujuan, yaitu **Arrive**.

---

## Slide 020 - Arrive

### Narasi

Slide ini membahas **Arrive**, salah satu perilaku steering yang membuat agent tidak hanya bergerak menuju target, tetapi juga mengatur kecepatan berdasarkan jarak.

Intuisi praktisnya sederhana: ketika agent masih jauh, ia boleh bergerak cepat. Ketika sudah dekat, ia harus mulai melambat. Ketika berada di area berhenti, ia berhenti tepat di target. Pola ini membuat pergerakan NPC terasa lebih natural, karena tidak ada lagi kesan agent melaju penuh lalu tiba-tiba berhenti secara kaku.

Pada diagram, target berada di pusat. Di sekelilingnya ada tiga area:

```text
        Target
          ●
       STOP AREA
     ─────────────
       SLOW AREA
  ───────────────────
      FULL SPEED
```

Area **STOP AREA** adalah zona paling dalam. Jika agent berada di area ini, perilaku yang diharapkan adalah berhenti atau mendekati kecepatan nol. Area **SLOW AREA** adalah zona transisi. Di sini agent masih bergerak, tetapi kecepatannya mulai berkurang seiring jarak yang semakin kecil. Area **FULL SPEED** adalah zona luar, di mana agent dapat bergerak dengan kecepatan maksimum.

Parameter utama yang perlu dipahami adalah `maxSpeed`, `slowRadius`, dan `stopRadius`. `maxSpeed` menentukan kecepatan tertinggi agent ketika masih jauh. `slowRadius` menentukan batas area melambat. `stopRadius` menentukan batas area berhenti. Nilai-nilai ini sangat memengaruhi rasa gerak agent: terlalu kecil membuat agent berhenti mendadak, terlalu besar membuat agent terlalu lambat sejak jauh.

Secara konseptual, alurnya adalah: agent mengetahui posisi target, menghitung jarak ke target, lalu memilih kecepatan berdasarkan zona. Jika jarak masih besar, agent bergerak cepat. Jika jarak masuk ke `slowRadius`, agent menurunkan kecepatan. Jika jarak masuk ke `stopRadius`, agent berhenti. Prinsip ini penting karena **Arrive** bukan sekadar "menuju target", tetapi "menuju target dengan pengendalian kecepatan".

Sebelum masuk ke implementasi, mahasiswa perlu memahami bahwa **Arrive** adalah perilaku dasar untuk membuat agent berhenti dengan halus. Perilaku ini penting untuk pergerakan agent yang mendekati target secara natural.

### Inti yang Harus Ditekankan

- **Arrive** membuat agent melambat ketika mendekati target.
- Tiga area utama adalah **FULL SPEED**, **SLOW AREA**, dan **STOP AREA**.
- Parameter penting adalah `maxSpeed`, `slowRadius`, dan `stopRadius`.
- Tujuan perilaku ini adalah menghasilkan pergerakan yang lebih natural: jauh cepat, dekat melambat, sangat dekat berhenti.

### Transisi ke Slide Berikutnya

Setelah memahami konsep dan zona **Arrive**, langkah berikutnya adalah melihat bagaimana logika ini diimplementasikan dalam kode sederhana.

---

## Slide 021 - Implementasi Arrive

### Narasi

Pada slide ini kita melihat bagaimana konsep **Arrive** diterjemahkan menjadi logika sederhana dalam C# untuk Unity. Intuisinya, agent tidak lagi hanya bergerak lurus ke target dengan kecepatan penuh, tetapi menghitung jarak ke target dan menurunkan kecepatan secara bertahap.

Contoh implementasinya:

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

Urutan eksekusinya dapat dipahami sebagai berikut:

1. Hitung vektor `toTarget` dari posisi agent ke posisi target.
2. Ambil panjang vektor tersebut sebagai `distance`.
3. Jika `distance` sudah berada di dalam `stopRadius`, set `velocity` menjadi `Vector3.zero` sehingga agent berhenti.
4. Jika masih di luar `stopRadius`, tentukan `desiredSpeed`.
5. Jika `distance` berada di dalam `slowRadius`, kurangi kecepatan secara linier dengan `maxSpeed * (distance / slowRadius)`.
6. Jika di luar `slowRadius`, gunakan `maxSpeed`.
7. Arahkan `velocity` ke target dengan `toTarget.normalized`, lalu kalikan dengan `desiredSpeed`.

Bagian penting dari kode ini adalah `toTarget.normalized`. Nilai ini menghasilkan vektor satuan yang menunjukkan arah ke target, sehingga agent tetap bergerak menuju target, bukan hanya melambat tanpa arah.

Parameter `slowRadius` dan `stopRadius` menentukan karakter gerak. `stopRadius` adalah batas di mana agent berhenti, sedangkan `slowRadius` adalah zona di mana agent mulai mengurangi kecepatan. Semakin besar `slowRadius`, semakin awal agent melambat dan gerakannya terasa lebih halus.

Dalam konteks perilaku NPC, implementasi ini membuat pergerakan lebih natural. Agent tidak tiba-tiba berhenti tepat di depan target, tetapi melakukan deselerasi yang lebih mirip gerak fisik. Pola ini sering dipakai untuk pergerakan sederhana menuju target, atau sebagai perilaku dasar sebelum dikombinasikan dengan perilaku gerak lain.

Yang perlu dipahami mahasiswa adalah bahwa kode ini menghasilkan `velocity`, bukan langsung memindahkan agent. Dalam integrasi Unity, nilai `velocity` tersebut biasanya dipakai pada langkah pembaruan posisi agent. Selain itu, logika ini masih sederhana karena hanya mempertimbangkan jarak ke target.

### Inti yang Harus Ditekankan

- **Arrive** mengubah gerak agent dari "lari terus ke target" menjadi "lari, melambat, lalu berhenti".
- `distance` menentukan apakah agent berada di zona **stop**, **slow**, atau **full speed**.
- `toTarget.normalized` menjaga arah gerak tetap menuju target.
- `slowRadius` dan `stopRadius` adalah parameter utama untuk mengatur naturalness pergerakan.
- Kode ini menghasilkan `velocity` yang kemudian digunakan untuk memperbarui posisi agent.

### Transisi ke Slide Berikutnya

Setelah agent bergerak dan melambat dengan benar, langkah berikutnya adalah memastikan agent menghadap ke arah geraknya. Pada slide berikutnya kita akan membahas rotasi agent agar pergerakan terlihat lebih natural.

---

## Slide 022 - Rotasi Agent

### Narasi

Setelah agent memiliki kecepatan gerak, langkah berikutnya adalah membuat orientasinya mengikuti arah gerak. Tanpa rotasi, model NPC mungkin tetap menghadap ke depan meskipun posisinya sudah bergeser, sehingga pergerakan terlihat kaku dan tidak meyakinkan.

Intuisi praktisnya sederhana: **agent sebaiknya menghadap ke arah gerak**, bukan selalu menghadap ke target. Hal ini penting karena arah gerak dapat berubah akibat steering, penghindaran, atau perilaku arrive. Dengan mengikuti `velocity`, orientasi agent tetap konsisten dengan gerakan aktualnya.

```csharp
Vector3 direction = velocity.normalized;

Quaternion targetRotation =
    Quaternion.LookRotation(direction);

transform.rotation =
    Quaternion.Slerp(
        transform.rotation,
        targetRotation,
        turnSpeed * Time.deltaTime
    );
```

Pada potongan kode ini, `velocity.normalized` menghasilkan vektor satuan yang menunjukkan arah gerak saat ini. Vektor satuan penting karena `Quaternion.LookRotation` membutuhkan arah, bukan jarak. Arah ini menjadi dasar rotasi target. Arah ini valid selama `velocity` tidak nol; jika agent berhenti, rotasi biasanya dipertahankan.

`Quaternion.LookRotation(direction)` membuat rotasi baru di mana sumbu depan agent, yaitu `forward`, mengarah ke `direction`. Dalam Unity, `Quaternion` digunakan untuk merepresentasikan rotasi 3D secara konsisten dan mudah diinterpolasi.

Baris terakhir menggunakan `Quaternion.Slerp` untuk memutar agent secara halus dari rotasi lama menuju rotasi target. Parameter `turnSpeed * Time.deltaTime` mengatur seberapa cepat agent berputar dan membuatnya tidak bergantung pada frame rate. Jika rotasi langsung ditugaskan ke `targetRotation`, agent akan tampak "snap" atau berubah arah secara tiba-tiba.

Urutan eksekusinya dapat dipahami sebagai berikut:

1. Ambil arah gerak dari `velocity`.
2. Buat rotasi target yang menghadap ke arah tersebut.
3. Interpolasikan rotasi saat ini menuju rotasi target setiap frame.

Hasil yang diharapkan adalah NPC yang bergerak sambil berputar secara natural, misalnya saat berbelok, mendekati target, atau mengubah arah karena perilaku steering. Mahasiswa perlu memahami bahwa rotasi ini mengikuti **kecepatan aktual**, bukan posisi target secara langsung.

### Inti yang Harus Ditekankan

- **Rotasi agent mengikuti arah gerak**, sehingga orientasi model konsisten dengan `velocity`.
- `Quaternion.LookRotation` menghasilkan rotasi target yang menghadap ke arah tertentu.
- `Quaternion.Slerp` digunakan untuk membuat perputaran halus dan frame-rate independent.
- `turnSpeed` menentukan seberapa cepat agent berputar; nilai yang terlalu besar membuat gerakan terasa kaku.

### Transisi ke Slide Berikutnya

Setelah orientasi agent mengikuti arah gerak, kita perlu memperhatikan bahwa banyak game 3D ground-based hanya menggerakkan NPC pada bidang horizontal. Pada slide berikutnya, kita akan memisahkan gerak pada bidang XZ agar orientasi dan pergerakan tetap stabil di lantai.

---

## Slide 023 - Memisahkan Gerak pada Bidang XZ

### Narasi

Slide ini membahas satu keputusan penting dalam gerak NPC 3D: apakah arah gerak dihitung dalam ruang 3D penuh, atau diproyeksikan ke bidang lantai. Pada banyak game **top-down** atau **third-person**, karakter berjalan di permukaan tanah, sehingga gerak utama terjadi pada sumbu `X` dan `Z`. Sumbu `Y` biasanya ditangani oleh **ground snapping**, **physics**, atau **character controller** yang terpisah.

Masalah muncul ketika target berada sedikit lebih tinggi atau lebih rendah dari agent. Misalnya target berada di tangga kecil, animasi naik turun, atau posisi world yang tidak presisi. Jika kita langsung memakai vektor 3D, arah akan memiliki komponen vertikal. Akibatnya NPC bisa tampak menengadah, menunduk, atau berputar tidak natural hanya karena selisih elevasi kecil.

Solusinya adalah **memisahkan gerak horizontal dari elevasi**. Kita tetap menghitung vektor arah dari posisi agent ke posisi target, lalu menghapus komponen `Y`:

```csharp
Vector3 direction =
    target.position - transform.position;

direction.y = 0f;
```

Baris pertama membuat vektor yang menunjuk dari agent ke target. Baris kedua memaksa komponen vertikal menjadi nol, sehingga vektor hanya tersisa pada bidang `XZ`. Dengan cara ini, arah gerak menjadi horizontal dan sesuai dengan perilaku karakter yang berjalan di lantai.

Langkah ini penting sebelum vektor digunakan untuk **steering**, **rotasi**, atau **normalisasi**. Jika arah sudah horizontal, fungsi seperti `Quaternion.LookRotation(direction)` atau gerak berbasis `Vector3` akan menghasilkan orientasi yang lebih stabil. Untuk agent **ground-based**, elevasi bisa tetap diproses terpisah, misalnya dengan `CharacterController`, ground check, atau vertical velocity, tanpa mencampurnya ke arah horizontal.

Namun, aturan ini tidak berlaku untuk semua game. Jika karakter bisa terbang, melompat tinggi, memanjat, atau mengejar target di ruang 3D penuh, komponen `Y` mungkin tetap diperlukan. Kuncinya adalah memilih bidang gerak yang sesuai dengan desain: **ground movement** memakai `XZ`, **flying** memakai 3D penuh, atau sistem hybrid yang memisahkan horizontal dan vertikal.

Sebelum lanjut, mahasiswa perlu memahami bahwa `direction.y = 0f` bukan sekadar trik kecil, melainkan cara membatasi ruang keputusan agent. Dengan memproyeksikan arah ke bidang `XZ`, perilaku NPC menjadi lebih konsisten, lebih mudah diuji, dan lebih sesuai dengan ekspektasi pemain terhadap karakter yang berjalan di lantai.

### Inti yang Harus Ditekankan

- `direction.y = 0f` memproyeksikan arah gerak ke bidang `XZ`.
- Langkah ini mencegah NPC menengadah atau menunduk karena selisih elevasi kecil.
- Untuk **ground movement**, elevasi sebaiknya ditangani terpisah dari arah horizontal.
- Jangan memakai pendekatan ini untuk agent yang benar-benar bergerak di ruang 3D penuh tanpa penyesuaian.

### Transisi ke Slide Berikutnya

Setelah arah horizontal sudah bersih, langkah berikutnya adalah bagaimana agent mengejar target yang bergerak. Pada slide berikutnya, kita akan membedakan **Seek** dan **Pursue**, terutama bagaimana prediksi posisi target memengaruhi perilaku kejar.

---

## Slide 024 - Pursue

### Narasi

Pada perilaku gerak, **Seek** adalah dasar: agent bergerak menuju posisi target yang ada sekarang. Namun, jika target bergerak cepat, mengejar posisi sekarang sering membuat agent selalu terlambat.

**Pursue** memperbaiki masalah itu dengan memperkirakan di mana target akan berada beberapa waktu ke depan. Intuisinya sederhana: jangan hanya melihat posisi target saat ini, tetapi juga arah dan kecepatan target.

Formula dasarnya adalah:

```text
predictedPosition =
targetPosition + targetVelocity × predictionTime
```

Dalam formula ini, `targetPosition` adalah posisi target sekarang, `targetVelocity` adalah kecepatan target, dan `predictionTime` adalah estimasi waktu ke depan yang ingin diprediksi. Jika target diam, `targetVelocity` mendekati nol, sehingga `predictedPosition` hampir sama dengan `targetPosition`. Jika target bergerak, `predictedPosition` bergeser ke arah gerak target.

Setelah posisi prediksi terbentuk, agent tidak melakukan Seek ke posisi target asli, tetapi melakukan Seek ke `predictedPosition`. Dengan cara ini, arah gerak agent sudah “mengantisipasi” gerak target, sehingga perilaku mengejar menjadi lebih natural dan lebih efektif.

Poin penting yang harus dipahami sebelum lanjut adalah perbedaan konsep antara **Seek** dan **Pursue**. Seek memakai target sekarang, sedangkan Pursue memakai target masa depan yang diestimasi. Semakin baik estimasi kecepatan dan waktu prediksi, semakin baik kualitas pengejaran, terutama untuk target yang bergerak cepat.

### Inti yang Harus Ditekankan

- **Seek** menggunakan posisi target saat ini, sedangkan **Pursue** memperkirakan posisi target di masa depan.
- Formula utama: `predictedPosition = targetPosition + targetVelocity × predictionTime`.
- Agent melakukan **Seek** terhadap `predictedPosition`, bukan terhadap posisi target sekarang.
- Pursue sangat berguna ketika target bergerak cepat, karena agent dapat mengarah ke titik yang lebih mungkin ditempati target.

### Transisi ke Slide Berikutnya

Selanjutnya, kita akan melihat bagaimana konsep Pursue ini diimplementasikan dalam kode, termasuk cara menghitung `predictedPosition` dan menentukan arah gerak agent.

---

## Slide 025 - Implementasi Pursue

### Narasi

Slide ini membahas cara mengimplementasikan **Pursue** dalam kode. Ide utamanya sederhana: agen tidak hanya mengejar posisi target saat ini, tetapi memperkirakan posisi target beberapa langkah ke depan.

```csharp
Vector3 predictedPosition =
    target.position +
    targetVelocity * predictionTime;

Vector3 direction =
    (predictedPosition - transform.position).normalized;
```

Pada potongan kode di atas, `predictedPosition` adalah titik yang akan dibidik oleh agen. Nilai ini dibentuk dari posisi target sekarang ditambah perkalian kecepatan target dengan `predictionTime`. Semakin besar `predictionTime`, semakin jauh ke depan agen membidik.

Setelah titik prediksi diketahui, baris berikutnya menghitung `direction`. Arah ini berasal dari posisi agen, yaitu `transform.position`, menuju `predictedPosition`. Hasil `.normalized` membuat panjang vektor menjadi satu, sehingga bisa langsung dipakai sebagai arah gerak atau input steering.

Sumber `targetVelocity` dapat diambil dari komponen fisika target:

```csharp
Rigidbody targetRb;
Vector3 targetVelocity = targetRb.linearVelocity;
```

Jika target memiliki `Rigidbody`, kecepatan linearnya dapat dibaca langsung. Jika tidak, kecepatan dapat dihitung dari perubahan posisi antar-frame, misalnya dengan menyimpan posisi sebelumnya dan membagi selisih posisi dengan delta time.

Urutan eksekusi yang perlu dipahami mahasiswa adalah:

1. Ambil `target.position` dan `targetVelocity`.
2. Hitung `predictedPosition` menggunakan `predictionTime`.
3. Hitung `direction` dari posisi agen ke `predictedPosition`.
4. Gunakan `direction` untuk menggerakkan agen, misalnya sebagai arah `seek` atau input movement.

Dengan cara ini, agen tidak hanya mengikuti target dari belakang, tetapi mencoba memotong jalur target. Hasil yang diharapkan adalah agen lebih cepat bertemu target yang bergerak cepat, terutama jika `predictionTime` dipilih secara wajar.

Pursue cocok digunakan pada situasi seperti:

- predator mengejar mangsa,
- racing,
- missile guidance sederhana,
- enemy mengejar player yang bergerak cepat.

### Inti yang Harus Ditekankan

- **Pursue** adalah bentuk `seek` yang dibidik ke **posisi prediksi target**, bukan posisi target saat ini.
- Formula utamanya adalah `predictedPosition = target.position + targetVelocity * predictionTime`.
- `targetVelocity` dapat berasal dari `Rigidbody.linearVelocity` atau dihitung dari perubahan posisi antar-frame.
- `predictionTime` menentukan seberapa jauh ke depan agen membidik; nilai yang terlalu kecil membuat agen kurang memotong jalur, nilai yang terlalu besar dapat menyebabkan overshoot.
- Perilaku ini berguna untuk target cepat seperti predator, racing, missile sederhana, dan enemy yang mengejar player.

### Transisi ke Slide Berikutnya

Setelah agen tahu cara mengejar posisi prediksi, kita akan membalik logikanya: jika posisi prediksi itu adalah ancaman, agen harus bergerak menjauh. Itulah konsep **Evade**.

---

## Slide 026 - Evade

### Narasi

**Evade** adalah perilaku gerak yang membuat agen menjauh dari ancaman yang sedang bergerak. Intuisinya sederhana: jika kita melihat musuh datang, kita tidak hanya lari dari posisi musuh saat ini, tetapi memperkirakan ke mana musuh akan berada sebentar lagi.

Perbedaan utama **Evade** dengan **Flee** ada pada penggunaan prediksi. **Flee** biasanya bereaksi terhadap posisi ancaman saat ini, sehingga cocok untuk ancaman yang relatif diam atau lambat. **Evade** memperhitungkan kecepatan ancaman, sehingga lebih cocok untuk ancaman yang bergerak cepat.

Proses **Evade** dapat dipahami dalam tiga tahap:

1. Prediksi posisi ancaman di masa depan.
2. Hitung arah menjauh dari posisi prediksi tersebut.
3. Gerakkan agen ke arah yang menjauh.

Secara konseptual, posisi prediksi dapat ditulis sebagai `predictedThreatPosition = threat.position + threatVelocity * predictionTime`. Setelah itu, arah menghindar adalah arah dari posisi agen menuju titik yang berlawanan dengan posisi prediksi ancaman. Dalam implementasi, arah ini biasanya dinormalisasi lalu dikalikan dengan kecepatan maksimum agen.

Peran `predictionTime` penting. Nilai terlalu kecil membuat agen hanya bereaksi terhadap posisi ancaman saat ini, sehingga mirip **Flee**. Nilai terlalu besar membuat agen bereaksi berlebihan terhadap posisi yang belum tentu dicapai ancaman. Dalam praktik, nilai ini sering disetel berdasarkan jarak, kecepatan ancaman, dan responsivitas yang diinginkan.

**Evade** sangat berguna untuk NPC yang harus menghindari pengejar, kendaraan yang menghindar dari objek cepat, atau karakter yang kabur dari musuh yang mengejar. Perilaku ini membuat gerakan terlihat lebih natural karena agen tidak hanya “melihat” ancaman, tetapi juga memperkirakan arah ancaman akan datang.

Sebelum lanjut, mahasiswa perlu memahami bahwa **Evade** bukan sekadar gerak acak menjauh. Kuncinya ada pada prediksi posisi ancaman dan arah menjauh yang dihitung dari posisi prediksi tersebut. Pemahaman ini akan menjadi dasar untuk perilaku gerak lain yang lebih kompleks.

### Inti yang Harus Ditekankan

- **Evade** adalah kebalikan dari **Pursue**: agen bergerak menjauh dari posisi ancaman yang diprediksi.
- **Evade** lebih responsif daripada **Flee** karena memperhitungkan kecepatan ancaman.
- Tahap utama: prediksi posisi ancaman, hitung arah menjauh, lalu gerakkan agen.
- `predictionTime` menentukan seberapa jauh ke depan agen memperkirakan posisi ancaman.
- Perilaku ini penting untuk NPC yang kabur dari ancaman bergerak cepat.

### Transisi ke Slide Berikutnya

Setelah agen tahu cara menghindari ancaman yang bergerak, kita akan melihat perilaku yang lebih santai: **Wander**, yaitu gerak menjelajah tanpa tujuan spesifik.

---

## Slide 027 - Wander

### Narasi

**Wander** adalah perilaku gerak yang membuat agent tampak sedang menjelajah tanpa tujuan yang jelas. Dalam desain game, perilaku ini penting untuk NPC yang tidak sedang mengejar, menghindari, atau menjalankan misi tertentu. Jika kita hanya memilih arah acak setiap beberapa detik, gerak agent sering terlihat kaku, patah-patah, dan kurang natural.

Masalah utama dari **random direction** sederhana adalah perubahan arah yang terlalu tiba-tiba. Agent bisa langsung berbelok tajam, berhenti, atau bergerak ke arah yang tidak konsisten dengan orientasi tubuhnya. Untuk perilaku yang lebih halus, **Wander** menggunakan **target imajiner** yang berada di depan agent.

Target imajiner ini ditempatkan pada sebuah lingkaran kecil di depan arah gerak agent. Kita bisa membayangkannya seperti berikut:

```text
       Wander Circle
          ○
        × target
         \
Agent ● ───→ forward
```

Lingkaran ini bergerak mengikuti posisi agent, dan target di atasnya digeser sedikit secara acak setiap frame. Agent kemudian diarahkan menuju target tersebut. Karena pergeseran target kecil dan bertahap, arah gerak agent berubah secara halus, seolah-olah ia sedang mencari arah sendiri.

Intuisi praktisnya, **Wander** bukan sekadar memilih arah acak, tetapi membuat **perubahan arah acak yang dibatasi** di sekitar arah depan. Dengan cara ini, agent tetap memiliki orientasi yang koheren. Istilah seperti `forward` pada diagram membantu memahami bahwa target imajiner selalu berada di depan arah gerak, bukan di posisi acak yang bebas.

Perilaku ini biasanya dipakai untuk:

- **animal NPC** yang berkeliaran di lingkungan,
- **civilian idle movement** saat tidak ada interaksi,
- **ambient agents** yang membuat dunia terasa hidup.

Sebelum lanjut, mahasiswa perlu memahami bahwa **Wander** menghasilkan gerak yang lebih natural karena target acaknya berada di depan agent dan hanya bergeser sedikit. Hal ini membedakannya dari pilihan arah acak langsung yang cenderung kasar.

### Inti yang Harus Ditekankan

- **Wander** membuat agent bergerak seolah menjelajah tanpa tujuan spesifik.
- **Random direction** sederhana sering terlihat kasar karena perubahan arah terlalu tiba-tiba.
- **Steering Wander** menggunakan **target imajiner** pada lingkaran di depan agent.
- Target digeser sedikit secara acak setiap frame sehingga gerak lebih halus.
- Perilaku ini cocok untuk **animal NPC**, **civilian idle movement**, dan **ambient agents**.

### Transisi ke Slide Berikutnya

Setelah memahami konsep **Wander**, langkah berikutnya adalah melihat bagaimana perilaku ini diimplementasikan secara sederhana dalam kode, termasuk versi dasar dan versi yang lebih natural.

---

## Slide 028 - Implementasi Wander Sederhana

### Narasi

Slide ini menunjukkan cara paling sederhana untuk mengimplementasikan **wander** dalam game. Tujuannya bukan membuat gerak yang paling halus, tetapi memberi mahasiswa kerangka dasar: agent mengubah arah secara berkala, lalu bergerak mengikuti arah tersebut.

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

Dalam potongan kode ini, `wanderTimer` berkurang setiap frame menggunakan `Time.deltaTime`.

Saat `wanderTimer` mencapai nol atau kurang, agent memilih arah baru.

`Random.insideUnitCircle` menghasilkan titik acak di dalam lingkaran satuan, lalu `.normalized` mengubahnya menjadi arah.

Arah 2D tersebut dipetakan ke bidang X-Z dengan `new Vector3(random.x, 0f, random.y)`, sehingga cocok untuk agent yang bergerak di lantai game.

Variabel `wanderDirection` kemudian menjadi arah gerak yang akan dipakai agent sampai timer berikutnya.

`changeInterval` menentukan seberapa sering arah berubah. Nilai kecil membuat agent sering berbelok, sedangkan nilai besar membuat agent lebih lama berjalan lurus.

Secara perilaku, implementasi ini menghasilkan gerak acak yang masih bisa terlihat kaku karena arah berubah secara diskrit.

Untuk versi yang lebih natural, kita bisa menambahkan beberapa hal:

- gabungkan arah acak dengan `forward` agent,
- gunakan **circle offset** di depan agent,
- ubah sudut wander sedikit demi sedikit, bukan langsung memilih arah baru secara acak.

Pendekatan tersebut membuat agent tampak seperti sedang “menjelajah” dengan lebih halus, bukan sekadar berpindah arah secara tiba-tiba.

Sebelum lanjut, mahasiswa perlu memahami bahwa **wander** adalah perilaku dasar untuk NPC idle, ambient agent, atau animal yang tidak memiliki tujuan spesifik.

Yang penting adalah memahami hubungan antara timer, arah acak, dan `wanderDirection`.

### Inti yang Harus Ditekankan

- `wanderTimer` mengatur interval pergantian arah.
- `Random.insideUnitCircle.normalized` menghasilkan arah acak di bidang 2D.
- `wanderDirection` adalah arah gerak yang dipakai agent sampai timer berikutnya.
- Implementasi sederhana berguna untuk belajar, tetapi versi natural biasanya memakai forward, circle offset, dan perubahan sudut bertahap.

### Transisi ke Slide Berikutnya

Setelah agent bisa bergerak acak, masalah berikutnya adalah bagaimana ia tetap aman saat bertemu obstacle di depannya.

Slide berikutnya akan membahas **Obstacle Avoidance**, yaitu cara agent mendeteksi dan menghindari hambatan lokal.

---

## Slide 029 - Obstacle Avoidance

### Narasi

Pada slide ini kita membahas **obstacle avoidance**, yaitu kemampuan agent untuk menghindari rintangan lokal di sekitarnya. Intuisinya sederhana: agent tidak hanya bergerak menuju target, tetapi juga harus "melihat" area dekatnya dan menyesuaikan arah jika ada benda yang menghalangi. Perilaku ini penting karena pathfinding global sering kali hanya memberikan rute ideal, sementara di runtime bisa muncul obstacle dinamis, agent lain, atau perubahan lingkungan.

Di Unity, cara termudah untuk membangun kemampuan ini adalah menggunakan sensor berbasis fisika, yaitu `Physics.Raycast` dan `Physics.SphereCast`. `Physics.Raycast` bekerja seperti garis lurus yang ditembakkan dari posisi agent, sedangkan `Physics.SphereCast` lebih mirip bola yang bergerak, sehingga cocok untuk mendeteksi obstacle dengan toleransi bentuk yang lebih luas.

```text
Physics.Raycast
Physics.SphereCast
```

Diagram pada slide menunjukkan konsep dasarnya:

```text
        obstacle
         ███
Agent ● ───→ ray
          ↘ avoid
```

Arah panah menunjukkan sensor yang dikirim ke depan agent. Jika sensor mengenai obstacle, agent tidak perlu langsung berhenti; ia dapat menghitung arah menghindar. Salah satu data yang sangat berguna adalah `RaycastHit.normal`, yaitu arah permukaan obstacle yang terdeteksi. Normal ini membantu agent menentukan cara "meluncur" atau menyamping dari permukaan, bukan hanya menabrak.

Prosesnya dapat dipahami sebagai urutan berikut:

1. Kirim sensor dari posisi agent ke arah depan atau beberapa arah sekitar.
2. Jika sensor mengenai obstacle, ambil informasi hasil deteksi, misalnya `RaycastHit.normal`.
3. Hitung arah menghindar berdasarkan normal, posisi obstacle, atau arah yang aman.
4. Gabungkan arah menghindar dengan **desired movement** agent, lalu normalisasi dan batasi hasilnya agar gerak tetap stabil.

Poin penting yang harus dipahami mahasiswa adalah bahwa **obstacle avoidance** adalah perilaku reaktif lokal. Ia tidak menggantikan pathfinding, tetapi melengkapi pathfinding agar agent tetap bergerak wajar ketika rintangan muncul di dekatnya. Dengan kata lain, pathfinding menentukan "ke mana harus pergi", sedangkan obstacle avoidance menentukan "bagaimana melewati rintangan di depan".

Sebelum lanjut ke slide berikutnya, pastikan mahasiswa memahami bahwa deteksi obstacle dilakukan melalui sensor, bukan hanya logika jarak manual. Sensor ini memberi informasi kontak dengan collider, sehingga arah menghindar dapat dihitung secara lebih akurat. Detail parameter sensor akan dibahas lebih lanjut pada slide berikutnya.

### Inti yang Harus Ditekankan

- **Obstacle avoidance** adalah perilaku gerak lokal untuk menghindari rintangan dekat.
- `Physics.Raycast` dan `Physics.SphereCast` adalah cara praktis untuk membuat sensor obstacle di Unity.
- `RaycastHit.normal` membantu menghitung arah menghindar yang lebih natural.
- Arah menghindar harus digabungkan dengan **desired movement** agar agent tetap menuju tujuan.
- Perilaku ini melengkapi pathfinding, bukan menggantikan perencanaan rute global.

### Transisi ke Slide Berikutnya

Setelah memahami konsep sensor dan arah menghindar, kita akan masuk ke contoh implementasi `Physics.Raycast`, termasuk parameter penting dan visualisasi ray untuk memudahkan debugging.

---

## Slide 030 - Physics.Raycast

### Narasi

Pada slide ini, kita masuk ke implementasi konkret dari **sensor lokal** untuk agent. Setelah konsep obstacle avoidance, langkah praktis berikutnya adalah membuat agent dapat "melihat" ke depan menggunakan `Physics.Raycast`.

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

Secara sederhana, kode ini menembakkan garis virtual dari posisi agent ke arah hadap. Jika garis tersebut menyentuh collider dalam jarak `avoidDistance`, fungsi mengembalikan `true` dan mengisi objek `hit` dengan informasi hasil deteksi.

Parameter penting yang perlu dipahami:

- **`origin`**: titik awal raycast, biasanya `transform.position`.
- **`direction`**: arah raycast, biasanya `transform.forward`.
- **`maxDistance`**: jarak maksimum deteksi, di sini `avoidDistance`.
- **`layerMask`**: filter layer collider yang dianggap relevan, di sini `obstacleMask`.

Objek **`RaycastHit`** berguna karena menyimpan data hasil deteksi, seperti titik tabrakan, jarak, normal permukaan, dan collider yang terkena. Informasi ini dapat dipakai untuk menentukan arah menghindar atau menyesuaikan gerakan agent.

Untuk membantu debugging, kita dapat menampilkan raycast secara visual:

```csharp
Debug.DrawRay(
    transform.position,
    transform.forward * avoidDistance,
    Color.red
);
```

Garis merah ini menunjukkan jangkauan sensor. Dengan visualisasi ini, mahasiswa dapat memeriksa apakah arah sensor, jarak sensor, dan layer yang terdeteksi sudah sesuai dengan desain scene.

`Physics.Raycast` penting dalam **perception** dan **movement** karena memberikan cara yang ringan untuk mendeteksi obstacle lokal. Hasil deteksi dapat menjadi input untuk perilaku berikutnya, misalnya berhenti, berbelok, atau menghindari tabrakan.

Sebelum melanjutkan, pastikan mahasiswa memahami bahwa raycast tidak menggantikan pathfinding global. Raycast berfungsi sebagai **sensor lokal** untuk reaksi cepat terhadap obstacle di sekitar agent.

### Inti yang Harus Ditekankan

- `Physics.Raycast` adalah cara sederhana untuk membuat agent mendeteksi obstacle di depan.
- Parameter utama adalah `origin`, `direction`, `maxDistance`, dan `layerMask`.
- `RaycastHit` menyimpan informasi hasil deteksi yang dapat dipakai untuk perilaku avoidance.
- `Debug.DrawRay` membantu memvisualisasikan sensor dan memudahkan debugging.
- Raycast berperan sebagai sensor lokal, bukan pengganti pathfinding global.

### Transisi ke Slide Berikutnya

Selanjutnya kita akan membahas bagaimana `layerMask` membuat sensor lebih selektif, sehingga agent hanya mendeteksi collider yang memang dianggap obstacle.

---

## Slide 031 - LayerMask pada Sensor AI

### Narasi

Pada slide sebelumnya kita sudah melihat `Physics.Raycast` sebagai cara sederhana untuk mendeteksi objek di depan agent. Namun, dalam scene game, tidak semua collider yang disentuh raycast harus dianggap sebagai penghalang. Ada collider tanah, collider player, collider efek, collider dekorasi, dan collider obstacle. Jika sensor tidak diberi filter, agent bisa bereaksi terhadap objek yang sebenarnya tidak relevan.

Untuk itu, Unity menyediakan **LayerMask**. LayerMask adalah cara memilih beberapa layer collider secara bersamaan. Dalam Inspector, kita bisa menentukan layer mana saja yang dianggap masuk ke dalam mask. Contoh layer yang umum digunakan adalah:

- `Player`
- `Enemy`
- `Obstacle`
- `Ground`
- `Environment`

Dengan layer, kita bisa memisahkan peran objek. Misalnya, `Obstacle` dan `Environment` bisa dijadikan penghalang untuk pergerakan, sedangkan `Ground` mungkin tidak perlu dianggap obstacle jika raycast dilakukan secara horizontal.

Pada script, kita bisa menyimpan mask sebagai field:

```csharp
[SerializeField]
private LayerMask obstacleMask;
```

Atribut `[SerializeField]` membuat variabel private tetap bisa diatur dari Inspector. Ini penting karena desainer atau developer bisa mengganti layer yang dianggap obstacle tanpa mengubah kode.

Setelah mask disiapkan, kita cukup menambahkannya ke parameter `Physics.Raycast`:

```csharp
Physics.Raycast(
    origin,
    direction,
    out hit,
    distance,
    obstacleMask
);
```

Artinya, raycast hanya akan memeriksa collider yang layer-nya termasuk dalam `obstacleMask`. Collider di luar mask akan diabaikan. Variabel `hit` akan diisi jika raycast mengenai collider yang sesuai mask, sehingga kita bisa mengetahui objek yang terdeteksi dan jaraknya.

Secara praktis, ini membantu perilaku NPC atau agent menjadi lebih masuk akal. Agent tidak akan "menghindari" collider tanah, collider dekorasi, atau collider player jika layer tersebut tidak dimasukkan ke mask. Sebaliknya, jika kita ingin agent menghindari musuh, kita cukup menambahkan layer `Enemy` ke mask. Jadi, LayerMask bukan sekadar pengaturan teknis, tetapi bagian dari desain perilaku sensor.

Sebelum lanjut, hal penting yang harus dipahami adalah: **LayerMask memfilter objek berdasarkan layer collider**, bukan mengubah bentuk sensor. Bentuk sensor masih ditentukan oleh jenis cast, misalnya raycast. Nanti kita akan melihat bagaimana bentuk sensor itu bisa diperluas agar lebih sesuai dengan ukuran agent.

### Inti yang Harus Ditekankan

- **LayerMask** digunakan untuk memilih layer collider yang dianggap relevan oleh sensor.
- Tidak semua collider harus dianggap obstacle; layer membantu memisahkan `Player`, `Enemy`, `Obstacle`, `Ground`, dan `Environment`.
- `[SerializeField] private LayerMask obstacleMask;` memungkinkan mask diatur dari Inspector tanpa mengubah logika kode.
- Menambahkan `obstacleMask` ke `Physics.Raycast` membuat deteksi lebih terkontrol, efisien, dan mengurangi objek yang tidak relevan.
- LayerMask memfilter **objek**, bukan bentuk sensor; bentuk sensor masih dibahas pada slide berikutnya.

### Transisi ke Slide Berikutnya

Setelah kita tahu cara memfilter objek yang boleh dideteksi, langkah berikutnya adalah mempertimbangkan bentuk sensor itu sendiri. Raycast berupa garis sangat sederhana, tetapi agent dalam game biasanya memiliki lebar. Karena itu, kita akan membandingkan `Raycast` dan `SphereCast` untuk melihat kapan sensor dengan radius lebih cocok digunakan.

---

## Slide 032 - SphereCast vs Raycast

### Narasi

Pada slide ini kita membandingkan dua bentuk sensor yang sering dipakai dalam **movement** dan **steering behavior**: `Raycast` dan `SphereCast`. Keduanya digunakan untuk mendeteksi obstacle di depan agent, tetapi bentuk geometrinya berbeda.

`Raycast` bekerja seperti garis tipis yang ditembakkan dari satu titik ke arah tertentu.

```text
──────→
```

Karena sensornya berupa garis, `Raycast` sangat presisi tetapi tidak memiliki lebar. Jika garis tidak tepat mengenai collider, obstacle bisa tidak terdeteksi.

`SphereCast` berbeda karena sensornya memiliki **radius**.

```text
(====)→
```

Bentuk ini lebih cocok untuk agent karakter karena karakter tidak hanya berupa titik, tetapi memiliki ukuran tubuh. Dengan radius, sensor dapat mewakili area yang benar-benar dapat ditabrak oleh agent.

Contoh implementasinya:

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

Bagian penting dari `Physics.SphereCast` dapat dipahami sebagai berikut:

- `origin`: titik awal sensor, biasanya posisi agent.
- `agentRadius`: radius sensor yang merepresentasikan lebar agent.
- `transform.forward`: arah sensor, biasanya ke depan agent.
- `out hit`: hasil deteksi, seperti posisi tabrakan atau collider yang terkena.
- `avoidDistance`: jarak maksimum sensor.
- `obstacleMask`: filter layer agar hanya obstacle tertentu yang dideteksi.

Perbedaan konseptualnya sederhana: `Raycast` menjawab pertanyaan "apakah garis sensor menyentuh obstacle?", sedangkan `SphereCast` menjawab "apakah tubuh agent dengan radius tertentu akan menyentuh obstacle?".

Dalam praktik, pemilihan bentuk sensor memengaruhi kualitas avoidance. Jika sensor terlalu tipis, agent bisa terlihat menembus dinding atau objek. Jika sensor terlalu lebar, agent bisa menghindari terlalu dini atau bergerak terlalu hati-hati.

Sebelum lanjut, mahasiswa perlu memahami bahwa bentuk sensor menentukan bagaimana agent "melihat" lingkungan. Dari deteksi inilah steering behavior seperti avoidance atau koreksi jalur dapat dibangun.

### Inti yang Harus Ditekankan

- `Raycast` adalah sensor garis tanpa radius; presisi tetapi kurang merepresentasikan ukuran agent.
- `SphereCast` adalah sensor dengan radius; lebih cocok untuk karakter yang memiliki lebar.
- Parameter `agentRadius`, `transform.forward`, `avoidDistance`, dan `obstacleMask` menentukan area, arah, dan filter deteksi.
- Pemilihan bentuk sensor memengaruhi perilaku avoidance dan interaksi agent dengan lingkungan.

### Transisi ke Slide Berikutnya

Setelah memahami bahwa agent dapat menggunakan sensor berbentuk bola, langkah berikutnya adalah melihat bagaimana agent bereaksi terhadap agent lain yang terlalu dekat. Slide berikutnya membahas `Separation`, yaitu steering behavior yang membuat agent saling menjauh agar tidak bertumpuk.

---

## Slide 033 - Separation

### Narasi

**Separation** adalah perilaku dasar pada sistem steering yang menjaga agar agent tidak saling bertumpuk. Intuisinya sederhana: ketika dua agent berada terlalu dekat, masing-masing “merasakan” tetangga di sekitarnya dan menghasilkan gaya dorong ke arah yang menjauh. Dalam visual slide, agent `A` dan agent `B` yang berdekatan akan menghasilkan arah steering seperti panah `↙` dan `↘`, yaitu saling mendorong keluar dari zona dekat.

Perilaku ini penting untuk NPC, crowd, flock, squad, atau kelompok hewan dalam game. Tanpa separation, agent akan terlihat menempel, bergetar, atau saling menutupi, sehingga gerakan kelompok menjadi tidak natural. Separation membantu mempertahankan jarak personal antar-agent, terutama saat banyak agent bergerak di area yang sama.

Secara teknis, input utamanya adalah posisi agent dan posisi tetangga yang terdeteksi. Prosesnya menghitung vektor dari tetangga menuju agent, lalu menambahkan vektor tersebut ke `separationForce`. Konsep dasarnya dapat ditulis sebagai berikut:

```text
separationForce
    += agentPosition - neighborPosition
```

Vektor `agentPosition - neighborPosition` menunjukkan arah dari tetangga ke agent. Jika tetangga berada di depan agent, hasil vektor akan mendorong agent ke belakang; jika tetangga berada di samping, gaya akan mendorong ke sisi yang berlawanan. Dengan menjumlahkan kontribusi dari beberapa tetangga, agent memperoleh arah gabungan yang menjauhi kerumunan.

Biasanya, agent yang sangat dekat diberi pengaruh lebih besar daripada agent yang masih agak jauh. Artinya, gaya separation tidak hanya bergantung pada ada atau tidaknya tetangga, tetapi juga pada seberapa dekat tetangga tersebut. Prinsip ini membuat agent lebih responsif terhadap risiko tabrakan dan lebih tenang saat jarak masih aman.

Penerapan separation paling terasa pada:

- crowd,
- flock,
- squad,
- animal groups.

Pada kelompok besar, separation bekerja secara lokal: setiap agent hanya memperhatikan tetangga di sekitarnya, bukan seluruh kelompok. Pendekatan lokal ini efisien dan cukup untuk menghasilkan gerakan yang rapi, karena perilaku global muncul dari banyak keputusan lokal yang saling berinteraksi.

Sebelum lanjut, mahasiswa perlu memahami bahwa separation bukan pathfinding. Separation tidak mencari rute ke tujuan; ia hanya menghasilkan gaya korektif agar agent tidak terlalu dekat dengan tetangga. Pemahaman ini penting karena separation biasanya digabungkan dengan perilaku steering lain untuk membentuk gerakan kelompok yang lebih kompleks.

### Inti yang Harus Ditekankan

- **Separation** menghasilkan gaya menjauh ketika agent terlalu dekat dengan tetangga.
- Arah gaya berasal dari vektor `agentPosition - neighborPosition`, yaitu dari tetangga menuju agent.
- Tetangga yang lebih dekat biasanya memberikan pengaruh lebih besar pada `separationForce`.
- Separation bekerja secara lokal dan cocok untuk crowd, flock, squad, atau animal groups.
- Separation bukan pathfinding; ia hanya mengatur jarak antar-agent, bukan mencari rute ke tujuan.

### Transisi ke Slide Berikutnya

Setelah agent menjaga jarak agar tidak bertumpuk, langkah berikutnya adalah membuat mereka bergerak lebih seragam. Pada slide berikutnya, kita akan membahas **Alignment**, yaitu perilaku yang membuat agent menyesuaikan arah geraknya dengan arah rata-rata tetangga di sekitarnya.

---

## Slide 034 - Alignment

### Narasi

**Alignment** adalah aturan penting dalam perilaku kelompok agen, terutama dalam sistem **steering behaviors**. Jika **Separation** menjawab pertanyaan “bagaimana agent tidak saling bertabrakan?”, maka **Alignment** menjawab pertanyaan “bagaimana agent bergerak searah dengan kelompoknya?”.

Intuisinya sederhana. Bayangkan beberapa agent bergerak ke kanan:

```text
→ → →
  ↑
```

Agent yang arahnya masih ke atas akan melihat bahwa tetangga-tetangganya bergerak ke kanan. Agent itu tidak langsung meniru arah secara instan, tetapi menghasilkan **steering force** yang membuatnya perlahan menyesuaikan arah.

Konsep utamanya adalah menghitung rata-rata kecepatan tetangga:

```text
averageVelocity =
sum(neighborVelocity) / neighborCount
```

Di sini, `neighborVelocity` adalah vektor kecepatan dari agent-agent di sekitar, sedangkan `neighborCount` adalah jumlah agent yang masuk dalam radius pengamatan. Jika tidak ada tetangga, nilai rata-rata biasanya diabaikan atau dianggap nol.

Setelah `averageVelocity` diperoleh, agent tidak cukup hanya “mengarah” ke sana. Dalam implementasi steering, biasanya dilakukan langkah berikut:

1. Ambil `averageVelocity` sebagai arah yang diinginkan.
2. Ubah arah tersebut menjadi `desiredVelocity` dengan kecepatan maksimum agent.
3. Hitung `steering = desiredVelocity - currentVelocity`.
4. Batasi `steering` dengan `maxForce` agar gerakan tetap halus.

Dengan cara ini, agent tidak berubah arah secara kaku, tetapi melakukan manuver yang lebih natural. Hal ini penting untuk NPC seperti kawanan burung, ikan, kendaraan, atau kelompok karakter yang bergerak bersama.

Yang perlu dipahami mahasiswa adalah bahwa **Alignment** bekerja pada **velocity**, bukan posisi. **Separation** menggunakan posisi tetangga untuk menjauhkan agent, sedangkan **Alignment** menggunakan kecepatan tetangga untuk menyelaraskan arah. Parameter seperti radius tetangga, `maxSpeed`, dan `maxForce` akan sangat memengaruhi hasil akhir: radius terlalu kecil membuat kelompok tidak seragam, sedangkan `maxForce` terlalu besar membuat gerakan tampak kaku.

### Inti yang Harus Ditekankan

- **Alignment** membuat agent menyesuaikan arah geraknya dengan rata-rata arah tetangga.
- Rumus utamanya adalah `averageVelocity = sum(neighborVelocity) / neighborCount`.
- Agent tidak meniru arah secara instan, tetapi menghasilkan **steering force** untuk bergerak menuju arah rata-rata.
- **Alignment** bekerja pada **velocity**, berbeda dengan **Separation** yang bekerja pada posisi.
- Parameter radius, `maxSpeed`, dan `maxForce` menentukan seberapa natural gerakan kelompok.

### Transisi ke Slide Berikutnya

Setelah agent tahu harus bergerak searah dengan tetangga, masalah berikutnya adalah bagaimana mereka tetap berkumpul. Di slide berikutnya, kita akan membahas **Cohesion**, yaitu aturan yang membuat agent bergerak menuju pusat kelompok.

---

## Slide 035 - Cohesion

### Narasi

**Cohesion** adalah perilaku steering yang membuat agent bergerak menuju pusat kelompok. Intuisinya sederhana: setiap agent melihat posisi tetangga di sekitarnya, lalu tertarik ke titik tengah dari posisi tersebut. Perilaku ini penting agar kelompok NPC, swarm, burung, ikan, atau crowd tidak mudah tercerai saat bergerak.

Perhitungan cohesion dimulai dari posisi tetangga. Jika ada `neighborCount` tetangga, posisi rata-rata dihitung sebagai `center`.

```text
center =
sum(neighborPosition) / neighborCount
```

`center` bukan posisi fisik yang harus dihindari atau diikuti secara kaku. Ia adalah titik referensi yang menunjukkan ke mana kelompok sedang berkumpul.

Setelah `center` diketahui, agent menghitung arah tarikan ke pusat kelompok:

```text
cohesionDirection =
center - agentPosition
```

Arah ini menunjukkan vektor dari posisi agent menuju pusat kelompok. Dalam implementasi steering, arah ini biasanya dijadikan gaya atau desired velocity setelah dibatasi, sehingga agent tidak langsung melompat ke pusat, tetapi bergerak secara halus.

Tanpa **cohesion**, kelompok agent cenderung menyebar. Agent hanya mengikuti arah lokal atau bergerak bebas, sehingga formasi swarm atau crowd menjadi tidak konsisten. Cohesion memberikan efek "menjaga kebersamaan" tanpa perlu satu leader yang menentukan posisi.

Sebelum lanjut, mahasiswa perlu memahami bahwa cohesion bekerja berdasarkan **posisi tetangga**, bukan arah gerak. Ini berbeda dengan alignment yang menggunakan kecepatan atau arah tetangga. Cohesion menjawab pertanyaan "ke mana pusat kelompok?", sedangkan alignment menjawab "ke mana kelompok sedang bergerak?".

### Inti yang Harus Ditekankan

- **Cohesion** menarik agent menuju pusat kelompok berdasarkan posisi tetangga.
- `center` dihitung dari rata-rata `neighborPosition`, lalu `cohesionDirection` dihitung sebagai `center - agentPosition`.
- Perilaku ini menjaga swarm, flock, atau crowd tetap bersama dan mencegah kelompok tercerai.
- Cohesion berbeda dengan alignment: cohesion memakai posisi, alignment memakai arah atau kecepatan.

### Transisi ke Slide Berikutnya

Dengan cohesion sebagai perilaku yang menjaga kelompok tetap bersama, slide berikutnya akan menggabungkannya dengan separation dan alignment menjadi model **Boids / Flocking** yang lebih lengkap.

---

## Slide 036 - Boids / Flocking

### Narasi

Slide ini membahas **Boids / Flocking**, yaitu model perilaku kelompok yang sering digunakan untuk membuat `agent` bergerak seperti kawanan burung, sekolah ikan, atau formasi drone. Intuisi utamanya adalah: tidak ada satu pusat kendali yang memerintahkan seluruh kelompok. Setiap `agent` hanya mengamati `neighbor` di sekitarnya, lalu menyesuaikan gerak berdasarkan aturan lokal.

Diagram pada slide menunjukkan bahwa perilaku flocking terbentuk dari gabungan tiga perilaku dasar:

```text
SEPARATION
     +
ALIGNMENT
     +
COHESION
     ↓
FLOCKING
```

Secara sederhana, ketiga perilaku tersebut bekerja sebagai sumber koreksi arah atau `steering force` yang memengaruhi posisi dan kecepatan `agent` pada langkah berikutnya.

Interpretasi ketiganya dapat dipahami sebagai berikut:

- **Separation** → `agent` menjauh dari tetangga yang terlalu dekat, sehingga mencegah tabrakan atau tumpang tindih.
- **Alignment** → `agent` menyesuaikan arah geraknya dengan arah rata-rata tetangga, sehingga kelompok tampak bergerak seragam.
- **Cohesion** → `agent` tertarik ke pusat kelompok, sehingga anggota tidak mudah tercerai.

Dari sisi implementasi, alurnya biasanya seperti ini:

1. Ambil `neighbor` yang berada dalam radius tertentu.
2. Hitung `separation`, `alignment`, dan `cohesion` berdasarkan `position` dan `velocity` tetangga.
3. Gabungkan ketiga hasil tersebut menjadi arah gerak baru.
4. Batasi kecepatan atau gaya agar gerak tetap stabil dan natural.

Model ini berguna untuk banyak kasus game, misalnya burung, ikan, swarm, crowd sederhana, atau drone formation. Kelebihannya adalah perilaku kelompok muncul secara **emergent**: aturan per-`agent` sederhana, tetapi hasil akhirnya terlihat seperti koordinasi kelompok.

Sebelum lanjut, mahasiswa perlu memahami bahwa kualitas flocking sangat dipengaruhi oleh parameter seperti `neighborRadius`, `maxSpeed`, dan `maxForce`. Jika `separation` terlalu lemah, `agent` akan bertabrakan. Jika `cohesion` terlalu kuat, kelompok bisa menjadi terlalu padat. Jika `alignment` terlalu dominan, gerak bisa terlalu kaku.

### Inti yang Harus Ditekankan

- **Boids / Flocking** adalah model perilaku kelompok berbasis aturan lokal, bukan kontrol pusat.
- Tiga perilaku utama adalah **separation**, **alignment**, dan **cohesion**.
- Hasil flocking bersifat **emergent**: formasi kelompok muncul dari interaksi sederhana antar-`agent`.
- Implementasinya biasanya menghitung `steering force` dari tetangga dalam radius, lalu menggabungkannya untuk memperbarui gerak `agent`.
- Parameter seperti `neighborRadius`, `maxSpeed`, dan `maxForce` menentukan kualitas gerakan kelompok.

### Transisi ke Slide Berikutnya

Setelah memahami tiga perilaku dasar flocking, slide berikutnya akan membahas bagaimana beberapa `steering behavior` digabungkan untuk membentuk perilaku `agent` yang lebih kompleks.

---

## Slide 037 - Combining Steering Behaviors

### Narasi

Pada slide ini kita masuk ke tahap penting dalam **steering behavior**: bagaimana satu agent menggabungkan beberapa perilaku gerak sekaligus. Dalam game, satu NPC biasanya tidak hanya melakukan satu aksi sederhana. Ia bisa mengejar target, menghindari rintangan, dan menjaga jarak dari agent lain pada saat yang sama.

```text
Seek
+
Obstacle Avoidance
+
Separation
```

Ketiga behavior ini mewakili kebutuhan yang berbeda. **Seek** mengarahkan agent menuju target. **Obstacle Avoidance** membuat agent menghindari dinding, batu, atau objek yang menghalangi jalur. **Separation** menjaga agent tidak menabrak atau terlalu dekat dengan agent lain.

Intuisi praktisnya adalah: setiap behavior menghasilkan **steering force** tersendiri. Force tersebut bukan keputusan final, melainkan masukan yang akan digabungkan.

```text
finalSteering =
seek × seekWeight
+
avoidance × avoidanceWeight
+
separation × separationWeight
```

Prosesnya dapat dipahami sebagai berikut:

1. Hitung `seek` menuju target.
2. Hitung `avoidance` berdasarkan rintangan di depan agent.
3. Hitung `separation` berdasarkan posisi agent lain di sekitar.
4. Kalikan masing-masing force dengan bobotnya.
5. Jumlahkan menjadi satu `finalSteering`.

Bobot menentukan seberapa besar pengaruh setiap behavior. Contoh pada slide:

```text
Seek                1.0
Obstacle Avoidance  2.0
Separation          1.5
```

Di sini **Obstacle Avoidance** diberi bobot tertinggi. Artinya, jika agent mendekati rintangan, perilaku menghindari rintangan lebih kuat daripada mengejar target atau menjaga jarak. Ini penting agar NPC tidak terlihat kaku menabrak dinding hanya karena target berada di belakang rintangan.

Yang harus dipahami mahasiswa sebelum lanjut adalah: kombinasi behavior bukan sekadar menjumlahkan angka. Setiap behavior harus dihitung dalam ruang yang sama, biasanya sebagai vektor gaya atau percepatan. Jika satu behavior terlalu dominan, agent bisa kehilangan respons terhadap behavior lain. Sebaliknya, jika bobot terlalu seimbang, agent bisa bergerak ragu-ragu atau tidak natural.

Dalam konteks game, teknik ini membantu NPC bergerak lebih responsif terhadap lingkungan. Agent tidak hanya bergerak berdasarkan satu target, tetapi dapat menyesuaikan gerak secara lokal: mendekati target, menghindari obstacle, dan tetap terpisah dari agent lain.

### Inti yang Harus Ditekankan

- Satu agent dapat menggabungkan beberapa **steering behavior** menjadi satu gerak akhir.
- `finalSteering` dihitung sebagai **weighted sum** dari `seek`, `avoidance`, dan `separation`.
- Bobot behavior menentukan prioritas; **Obstacle Avoidance** biasanya diberi bobot lebih tinggi agar agent tidak menabrak rintangan.
- Setiap behavior menghasilkan force atau vektor yang harus digabungkan secara konsisten sebelum menjadi gerak agent.

### Transisi ke Slide Berikutnya

Selanjutnya, kita akan membahas **Weighted Blending** sebagai teknik konkret untuk menggabungkan beberapa steering behavior.

---

## Slide 038 - Weighted Blending

### Narasi

**Weighted blending** adalah cara paling sederhana untuk menggabungkan beberapa steering behavior menjadi satu gaya gerak akhir.

Ideanya, setiap behavior menghasilkan vektor gaya, lalu vektor itu diberi bobot sesuai kepentingannya.

```csharp
Vector3 steering =
    seekForce * seekWeight +
    avoidForce * avoidWeight +
    separationForce * separationWeight;
```

Pada potongan kode di atas, `seekForce`, `avoidForce`, dan `separationForce` adalah hasil dari masing-masing behavior. Variabel `seekWeight`, `avoidWeight`, dan `separationWeight` menentukan seberapa besar pengaruh behavior tersebut terhadap gerak agent.

Urutan eksekusinya cukup sederhana:

1. Hitung gaya dari setiap behavior.
2. Kalikan gaya dengan bobot masing-masing.
3. Jumlahkan semua gaya berbobot menjadi satu vektor `steering`.
4. Batasi besar vektor agar tidak melebihi `maxAcceleration`.

Setelah penjumlahan, gaya gabungan perlu dibatasi:

```csharp
steering =
    Vector3.ClampMagnitude(
        steering,
        maxAcceleration
    );
```

Fungsi `Vector3.ClampMagnitude` memastikan panjang vektor `steering` tidak lebih besar dari `maxAcceleration`. Hal ini penting karena agent tidak boleh dipercepat secara tidak realistis hanya karena beberapa behavior aktif bersamaan.

Dalam implementasi game, hasil vektor `steering` biasanya diberikan sebagai percepatan atau gaya tambahan pada agent. Agent kemudian bergerak sesuai kombinasi keinginan menuju target, menghindari rintangan, dan menjaga jarak dari agen lain.

Kelebihan teknik ini adalah sederhana, cepat dihitung, dan mudah diintegrasikan ke sistem steering yang sudah ada.

Namun, weighted blending memiliki masalah penting:

```text
dua behavior dapat saling membatalkan
```

Misalnya, `seek` mendorong agent ke depan, tetapi `avoidance` mendorong ke arah yang hampir berlawanan. Jika kedua vektor itu besar dan berlawanan, hasil penjumlahannya bisa menjadi sangat kecil. Akibatnya, agent bisa tampak ragu, berhenti, atau bergerak tidak sesuai prioritas yang diharapkan.

Karena itu, ketika perilaku tertentu harus menang secara tegas, misalnya menghindari tabrakan, kita perlu alternatif lain yang lebih berbasis prioritas.

### Inti yang Harus Ditekankan

- **Weighted blending** menggabungkan steering behavior dengan penjumlahan gaya berbobot.
- Bobot menentukan seberapa besar pengaruh setiap behavior terhadap gerak agent.
- `Vector3.ClampMagnitude` menjaga hasil gaya tetap berada di batas `maxAcceleration`.
- Kekurangan utama adalah behavior yang berlawanan dapat saling melemahkan atau membatalkan.
- Jika satu behavior harus selalu didahulukan, weighted blending tidak selalu cukup.

### Transisi ke Slide Berikutnya

Karena weighted blending bisa menghasilkan gaya yang saling meniadakan, slide berikutnya akan membahas **priority steering**, yaitu cara memilih behavior berdasarkan urutan prioritas yang lebih tegas.

---

## Slide 039 - Priority Steering

### Narasi

Setelah teknik **weighted blending** yang menjumlahkan beberapa gaya, kita masuk ke pendekatan yang lebih sederhana: **priority steering**.

Pada **priority steering**, perilaku tidak dihitung semuanya secara bersamaan. Sistem memeriksa perilaku satu per satu berdasarkan urutan prioritas. Perilaku yang paling penting diperiksa lebih dulu. Jika kondisi perilaku tersebut terpenuhi, perilaku itu langsung dipilih, dan perilaku di bawahnya tidak perlu dievaluasi.

Contoh urutan prioritas yang umum adalah:

1. `Obstacle Avoidance`
2. `Separation`
3. `Seek`
4. `Wander`

Urutan ini mencerminkan logika desain: NPC harus terlebih dahulu menghindari bahaya, lalu menjaga jarak dari tetangga, kemudian mengejar target, dan baru melakukan gerakan idle jika tidak ada tujuan lain.

Logika dasarnya dapat ditulis sebagai berikut:

```text
Jika obstacle terdeteksi:
    gunakan avoidance
Else jika neighbor terlalu dekat:
    gunakan separation
Else:
    gunakan seek/wander
```

Urutan eksekusi penting. Sistem mulai dari kondisi paling atas. Jika `obstacle terdeteksi` bernilai benar, output steering berasal dari `avoidance`. Jika tidak, sistem baru memeriksa `neighbor terlalu dekat`. Jika ini juga tidak terpenuhi, sistem jatuh ke perilaku default seperti `seek` atau `wander`.

Pendekatan ini sangat praktis untuk game karena mudah dibaca, mudah diuji, dan mudah disesuaikan. Developer bisa langsung melihat perilaku mana yang mendominasi dalam situasi tertentu. Jika NPC terlalu sering menghindar, kita bisa memeriksa threshold deteksi obstacle. Jika NPC terlalu kaku, kita bisa menyesuaikan kondisi `separation` atau `seek`.

Kelebihan utama **priority steering** adalah perilaku menjadi lebih tegas dan dapat diprediksi. Karena hanya satu perilaku yang aktif pada satu waktu, gaya dari perilaku lain tidak saling membatalkan. Namun, mahasiswa perlu memahami bahwa urutan prioritas adalah keputusan desain, bukan aturan teknis yang tetap. Urutan yang berbeda akan menghasilkan karakter NPC yang berbeda.

Sebelum melanjutkan, hal penting yang harus dipahami adalah: **priority steering** menghasilkan satu gaya steering atau keputusan gerak berdasarkan kondisi. Gaya atau kecepatan yang dihasilkan masih perlu dibatasi agar gerakan NPC tetap realistis.

### Inti yang Harus Ditekankan

- **Priority steering** memilih satu perilaku berdasarkan urutan prioritas, bukan menjumlahkan semua gaya.
- Urutan prioritas biasanya menempatkan `Obstacle Avoidance` di atas `Separation`, `Seek`, dan `Wander`.
- Logika `if-else` membuat perilaku NPC lebih mudah dipahami, di-debug, dan disesuaikan.
- Hasil steering dari perilaku terpilih masih perlu dibatasi agar gerakan agent tetap wajar.

### Transisi ke Slide Berikutnya

Setelah perilaku terpilih, vector gerak NPC masih bisa menjadi terlalu besar jika tidak dibatasi. Selanjutnya kita akan membahas bagaimana membatasi `velocity` dan `acceleration` menggunakan `maxSpeed` dan `maxAcceleration` agar movement NPC terasa lebih natural.

---

## Slide 040 - Membatasi Speed dan Acceleration

### Narasi

Pada slide sebelumnya kita sudah melihat bagaimana beberapa steering behavior dapat dipilih berdasarkan prioritas. Sekarang kita masuk ke bagian yang sering menentukan apakah movement NPC terasa natural atau tidak: **membatasi speed dan acceleration**.

Tanpa pembatasan, nilai `velocity` bisa terus bertambah setiap frame. Dalam simulasi game, hal ini membuat agent bergerak semakin cepat tanpa batas, melampaui lingkungan, atau bahkan menembus obstacle karena langkah per frame menjadi terlalu besar.

```csharp
velocity =
    Vector3.ClampMagnitude(
        velocity,
        maxSpeed
    );
```

Fungsi `Vector3.ClampMagnitude` memastikan panjang vektor `velocity` tidak melebihi `maxSpeed`. Jika `velocity` masih di bawah batas, nilainya tetap tidak berubah. Jika sudah melewati batas, vektor dipangkas ke panjang maksimum sambil tetap mempertahankan arah.

Untuk acceleration, kita melakukan hal yang serupa:

```csharp
acceleration =
    Vector3.ClampMagnitude(
        acceleration,
        maxAcceleration
    );
```

`maxAcceleration` membatasi seberapa cepat agent dapat mengubah `velocity`. Dengan batas ini, NPC tidak langsung melompat dari diam ke kecepatan penuh secara instan. Pergerakannya terasa lebih halus, seperti makhluk hidup atau kendaraan yang memiliki massa dan inersia.

Parameter penting agent:

- `maxSpeed`: kecepatan maksimum agent.
- `maxAcceleration`: batas perubahan kecepatan per waktu.
- `turnSpeed`: seberapa cepat agent dapat mengubah arah.
- `stopRadius`: jarak di mana agent berhenti mendekati target.
- `slowRadius`: jarak di mana agent mulai melambat sebelum berhenti.

Kelima parameter ini menentukan “karakter” movement NPC. Agent dengan `maxSpeed` tinggi dan `maxAcceleration` besar akan terasa agresif dan cepat. Agent dengan `turnSpeed` kecil akan terasa kaku atau berat. Agent dengan `stopRadius` terlalu kecil bisa terus-terusan mendekati target tanpa pernah benar-benar berhenti.

Sebelum lanjut, mahasiswa perlu memahami bahwa steering behavior bukan hanya soal memilih arah. Yang sama pentingnya adalah **mengontrol seberapa besar perubahan posisi dan kecepatan** yang diizinkan pada setiap langkah simulasi.

### Inti yang Harus Ditekankan

- `velocity` dan `acceleration` harus dibatasi agar movement NPC tetap stabil dan realistis.
- `Vector3.ClampMagnitude` menjaga panjang vektor tidak melewati batas `maxSpeed` atau `maxAcceleration`.
- Parameter seperti `maxSpeed`, `maxAcceleration`, `turnSpeed`, `stopRadius`, dan `slowRadius` membentuk karakter pergerakan agent.

### Transisi ke Slide Berikutnya

Setelah parameter movement didefinisikan, masalah berikutnya adalah bagaimana parameter tersebut dapat diatur dengan mudah saat testing. Pada slide berikutnya kita akan melihat cara membuat parameter seperti `maxSpeed` dapat diubah dari Inspector menggunakan `SerializeField`.

---

## Slide 041 - Inspector dan SerializeField

### Narasi

Pada bagian ini kita membahas cara membuat **parameter movement** lebih mudah diatur. Pada pembahasan sebelumnya, kita sudah melihat parameter seperti `maxSpeed` dan `maxAcceleration`. Jika semua nilai ditulis langsung di dalam kode, setiap percobaan tuning akan membuat kode berubah-ubah dan sulit dibandingkan.

Untuk itu, kita bisa menggunakan atribut **`[SerializeField]`** pada field `private`. Contoh penulisan yang relevan adalah:

```csharp
[SerializeField]
private float maxSpeed = 5f;
```

Field `maxSpeed` tetap `private`, sehingga tidak bisa diakses sembarangan dari script lain. Namun, atribut **`[SerializeField]`** memberi tahu Unity untuk menyimpan nilai tersebut dan menampilkannya di **Inspector**. Nilai awal `5f` menjadi default yang bisa langsung diubah saat menyiapkan objek di scene.

Keuntungan dari cara ini adalah:

- parameter dapat diubah langsung dari **Inspector**,
- tuning menjadi lebih cepat,
- tidak perlu mengubah kode untuk setiap eksperimen,
- nilai bisa disesuaikan per objek NPC.

Contoh kelompok parameter movement yang bisa dituning adalah:

```text
Movement
├── Max Speed
├── Max Acceleration
├── Turn Speed
├── Stop Radius
└── Slow Radius
```

Kelompok parameter ini menentukan karakter gerak NPC. `maxSpeed` membatasi kecepatan maksimum, `maxAcceleration` membatasi perubahan kecepatan, `turnSpeed` memengaruhi kelenturan arah, `stopRadius` menentukan jarak berhenti, dan `slowRadius` menentukan jarak mulai melambat. Mahasiswa perlu memahami bahwa perilaku movement tidak hanya ditentukan oleh logika, tetapi juga oleh nilai parameter yang dipilih.

**Tuning parameter** adalah bagian penting dalam pengembangan game. Nilai yang terlalu besar membuat NPC terasa kaku atau tidak natural, sedangkan nilai yang terlalu kecil bisa membuat respons lambat. Dengan **Inspector**, kita dapat mencoba beberapa kombinasi nilai secara cepat, mengamati hasilnya di scene, lalu memilih nilai yang paling sesuai.

### Inti yang Harus Ditekankan

- **`[SerializeField]`** memungkinkan field `private` tetap dapat dilihat dan diubah di **Inspector**.
- Parameter movement seperti `maxSpeed`, `maxAcceleration`, `turnSpeed`, `stopRadius`, dan `slowRadius` menjadi lebih mudah dituning.
- **Tuning parameter** adalah bagian penting dari desain perilaku NPC, bukan hanya penulisan logika.

### Transisi ke Slide Berikutnya

Setelah parameter movement dapat diatur melalui **Inspector**, langkah berikutnya adalah mengenal komponen Unity yang relevan untuk mendukung perilaku movement tersebut.

---

## Slide 042 - Komponen Unity yang Relevan

### Narasi

Sebelum menulis logika movement, mahasiswa perlu memahami komponen Unity yang menjadi dasar perilaku agent. Komponen ini menentukan bagaimana NPC bergerak, berinteraksi dengan dunia, dan bagaimana perilaku dapat diamati saat development.

- **`GameObject`** adalah unit dasar dalam scene. Setiap NPC, target, obstacle, atau player pada dasarnya adalah `GameObject`, sehingga menjadi identitas agent yang akan dikendalikan.

- **`Transform`** menyimpan `position`, `rotation`, dan `scale`. Untuk movement, `position` menentukan lokasi agent, `rotation` menentukan arah hadap, dan `scale` memengaruhi ukuran objek. Banyak perilaku steering membutuhkan data transform untuk menghitung arah dan orientasi.

- **`Rigidbody`** memberikan simulasi fisika. Komponen ini berguna jika movement perlu terasa realistis, misalnya dengan gaya, kecepatan, dan respons collision. Untuk NPC sederhana, movement juga dapat dilakukan dengan memperbarui `Transform` secara langsung.

- **`Collider`** mendefinisikan bentuk collision. Komponen ini penting untuk mencegah agent menembus objek dan untuk mendeteksi objek di sekitar agent. Dalam movement, collider dapat menjadi dasar deteksi obstacle atau sensor sederhana.

- **`MonoBehaviour`** adalah base class untuk script Unity. Di sinilah logika movement ditulis, misalnya update posisi, steering, atau perilaku berbasis sensor. `Update` biasanya digunakan untuk logika berbasis frame, sedangkan `FixedUpdate` lebih cocok untuk interaksi fisika.

- **`Layer` dan `LayerMask`** digunakan untuk filtering sensor atau collision. Dengan layer, agent dapat memilih objek mana yang boleh dideteksi atau ditabrak. Misalnya, NPC hanya mendeteksi target dan obstacle, bukan semua objek di scene.

- **`Gizmos`** digunakan untuk debug visual di `Scene View`. Komponen ini membantu mahasiswa melihat radius, sensor, target, atau area pengaruh agent secara langsung. Visual debugging penting karena perilaku movement sering kali sulit dipahami hanya dari angka di `Inspector`.

Dengan memahami komponen ini, mahasiswa dapat melihat movement sebagai sistem yang terdiri dari objek, transform, fisika, collision, script, dan visualisasi. Ini menjadi fondasi sebelum parameter movement dituning dan perilaku agent dibuat lebih kompleks.

### Inti yang Harus Ditekankan

- `GameObject` adalah unit dasar agent, target, obstacle, atau player dalam scene.
- `Transform` menyimpan `position`, `rotation`, dan `scale`, menjadi dasar movement dan orientasi.
- `Rigidbody` dan `Collider` menentukan interaksi fisika serta deteksi collision atau sensor.
- `MonoBehaviour` adalah tempat logika movement, steering, dan perilaku agent ditulis.
- `LayerMask` membantu memfilter objek yang boleh dideteksi atau ditabrak.
- `Gizmos` membantu memvisualisasikan state internal agent untuk debugging.

### Transisi ke Slide Berikutnya

Setelah komponen dasar ini dipahami, langkah berikutnya adalah membuat perilaku movement lebih mudah diamati. Slide berikutnya akan membahas debugging dengan `Gizmos`, terutama cara menampilkan radius atau area pengaruh agent di `Scene View`.

---

## Slide 043 - Debugging dengan Gizmos

### Narasi

Pada slide ini, kita membahas **debugging visual** untuk perilaku pergerakan agent dalam game. Dalam Movement AI, keputusan agent sering bergantung pada kondisi spasial, seperti jarak ke target, radius deteksi, atau area di mana agent harus melambat. Jika kondisi ini hanya disimpan sebagai nilai numerik di dalam script, mahasiswa akan kesulitan memahami mengapa agent bergerak seperti yang terlihat. **Gizmos** membantu menampilkan kondisi tersebut secara visual di Scene View.

Contoh yang ditampilkan adalah:

```csharp
void OnDrawGizmosSelected()
{
    Gizmos.DrawWireSphere(
        transform.position,
        slowRadius
    );
}
```

Metode `OnDrawGizmosSelected()` dipanggil oleh Unity ketika GameObject yang berisi script ini sedang dipilih. Di dalamnya, `Gizmos.DrawWireSphere()` menggambar bola kawat pada posisi `transform.position` dengan radius `slowRadius`. Artinya, mahasiswa dapat melihat langsung area di mana agent dianggap berada dalam kondisi **slow radius**.

Visualisasi seperti ini sangat berguna karena parameter pergerakan agent sering kali sulit diuji hanya dengan membaca nilai. Dengan gizmo, mahasiswa dapat memeriksa apakah radius terlalu kecil, terlalu besar, atau tidak sesuai dengan desain level. Beberapa hal yang dapat divisualisasikan antara lain:

- **detection radius**, yaitu area di mana agent dapat mendeteksi target atau ancaman;
- **panic radius**, yaitu area yang memicu perilaku panik atau respons cepat;
- **slow radius**, yaitu area di mana agent mulai mengurangi kecepatan;
- **obstacle sensor**, yaitu area sensor untuk mendeteksi rintangan;
- **target point**, yaitu titik tujuan yang sedang dikejar;
- **predicted position**, yaitu posisi yang diprediksi berdasarkan pergerakan target.

Poin penting yang harus dipahami mahasiswa adalah bahwa **state internal agent** perlu divisualisasikan agar perilaku agent dapat dianalisis. Debugging tidak hanya dilakukan dengan mencetak nilai ke console, tetapi juga dengan melihat representasi spasial dari keputusan agent. Dengan cara ini, mahasiswa dapat lebih mudah menghubungkan parameter script dengan perilaku yang muncul di scene.

### Inti yang Harus Ditekankan

- **Gizmos** adalah alat debug visual untuk menampilkan kondisi spasial agent di Scene View.
- `OnDrawGizmosSelected()` berguna untuk menampilkan visualisasi hanya ketika GameObject sedang dipilih.
- `Gizmos.DrawWireSphere()` dapat digunakan untuk menampilkan radius seperti `slowRadius`, detection radius, atau sensor.
- Visualisasi membantu mahasiswa memahami hubungan antara parameter script dan perilaku agent.
- State internal agent menjadi lebih mudah dianalisis jika divisualisasikan secara spasial.

### Transisi ke Slide Berikutnya

Setelah kita memahami cara memvisualisasikan radius dan sensor menggunakan Gizmos, langkah berikutnya adalah melihat bagaimana struktur script agent disusun agar perhitungan pergerakan, penerapan gerakan, dan rotasi dapat dipisahkan secara modular.

---

## Slide 044 - Contoh Struktur Script SteeringAgent

### Narasi

Slide ini menunjukkan contoh struktur script untuk **SteeringAgent** dalam Unity. Tujuannya bukan langsung membuat perilaku lengkap, tetapi memberikan kerangka kerja yang rapi untuk agen yang bergerak berdasarkan **steering behavior**.

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

Struktur ini penting karena memisahkan tiga tanggung jawab utama dalam pergerakan agen.

- **Perhitungan steering** dilakukan di `CalculateSteering()`.
- **Perubahan posisi** dilakukan di `ApplyMovement(steering)`.
- **Perubahan orientasi** dilakukan di `UpdateRotation()`.

Pemisahan ini membuat kode lebih **modular**. Jika nanti perilaku agen dikembangkan, misalnya dari seek menjadi arrive, atau ditambah obstacle avoidance, perubahan utama cukup dilakukan pada bagian perhitungan steering tanpa merusak logika movement dan rotation.

Variabel `target` digunakan sebagai referensi titik tujuan. `maxSpeed` membatasi kecepatan maksimum agen, sedangkan `turnSpeed` mengatur seberapa cepat agen berputar menuju arah tertentu. Variabel `velocity` dapat digunakan untuk menyimpan keadaan gerak internal agen, sehingga perilaku gerak tidak hanya bergantung pada posisi saat ini, tetapi juga pada arah dan kecepatan yang sedang dibangun.

Urutan eksekusi di `Update()` sangat penting:

1. `CalculateSteering()` menghasilkan vektor steering.
2. `ApplyMovement(steering)` mengubah posisi agen berdasarkan vektor tersebut.
3. `UpdateRotation()` menyesuaikan rotasi agen agar menghadap arah gerak.

Dengan urutan ini, agen tidak hanya berpindah posisi, tetapi juga memiliki orientasi yang konsisten. Dalam game, hal ini penting agar NPC terlihat natural, misalnya musuh yang mengejar pemain atau karakter yang bergerak menuju target.

Perlu dipahami bahwa `CalculateSteering()` pada contoh ini masih mengembalikan `Vector3.zero`. Artinya, script ini adalah **struktur dasar**, bukan perilaku gerak yang sudah berfungsi penuh. Mahasiswa harus memahami bahwa inti dari steering behavior terletak pada bagaimana vektor steering dihitung dari posisi agen, posisi target, kecepatan, dan batasan gerak.

### Inti yang Harus Ditekankan

- Struktur `SteeringAgent` memisahkan **steering**, **movement**, dan **rotation**.
- `CalculateSteering()` adalah tempat utama logika perilaku gerak seperti seek, arrive, atau wander.
- `maxSpeed` dan `turnSpeed` membantu mengontrol kecepatan dan naturalitas gerak agen.
- Pemisahan tanggung jawab membuat kode lebih mudah dikembangkan dan di-debug.
- Urutan `Update()` menentukan bagaimana agen bergerak dan menghadap arah yang benar.

### Transisi ke Slide Berikutnya

Setelah memahami struktur dasarnya, kita akan melihat implementasi sederhana dari perilaku **seek**, yaitu perilaku paling dasar sebelum dikembangkan menjadi arrive atau perilaku steering yang lebih kompleks.

---

## Slide 045 - Contoh Seek Agent Sederhana

### Narasi

Slide ini menunjukkan contoh paling dasar dari **seek behavior**, yaitu perilaku agen yang bergerak menuju target. Implementasi ini sengaja dibuat sederhana karena menjadi **baseline** sebelum kita menambahkan perilaku lain seperti **arrive**, **wander**, **avoidance**, atau steering yang lebih lengkap.

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

Tujuan utama script ini adalah membuat agen melakukan dua hal sekaligus: **bergerak ke arah target** dan **menghadapi target secara halus**. Kedua hal ini penting dalam game AI karena NPC tidak cukup hanya berpindah posisi; orientasi objek juga menentukan apakah perilaku tersebut terlihat natural.

Beberapa bagian penting yang perlu diperhatikan:

- `target` adalah objek yang ingin didekati oleh agen.
- `moveSpeed` mengatur seberapa cepat agen bergerak.
- `turnSpeed` mengatur seberapa cepat agen berputar menghadap target.
- `Update()` dijalankan setiap frame, sehingga perilaku agen terus diperbarui selama game berjalan.

Baris `if (target == null) return;` berfungsi sebagai proteksi sederhana. Jika target tidak ada, agen tidak melakukan perhitungan apa pun. Ini penting agar script tidak menghasilkan error atau perilaku yang tidak diinginkan.

Selanjutnya, arah gerakan dihitung dengan:

```csharp
Vector3 direction = target.position - transform.position;
```

Artinya, `direction` adalah vektor dari posisi agen menuju posisi target. Jika target berada di depan agen, vektor ini akan mengarah ke depan. Jika target berada di belakang, vektor ini akan mengarah ke belakang.

Kemudian dilakukan:

```csharp
direction.y = 0f;
```

Baris ini membuat gerakan hanya terjadi pada bidang horizontal. Dengan kata lain, agen bergerak seperti pada game top-down, side-scroller dengan sumbu X-Z, atau environment 3D yang tidak ingin agen naik-turun secara vertikal saat mengejar target.

Setelah itu, ada pengecekan:

```csharp
if (direction.sqrMagnitude < 0.001f)
    return;
```

Baris ini digunakan untuk menghentikan gerakan jika agen sudah sangat dekat dengan target. Di sini kita memakai `sqrMagnitude` sebagai cara praktis mengecek jarak. Untuk saat ini, yang penting dipahami adalah bahwa baris ini mencegah agen terus bergerak ketika jaraknya sudah hampir nol.

Selanjutnya:

```csharp
direction.Normalize();
```

`Normalize()` mengubah vektor arah menjadi vektor satuan. Artinya, panjang vektor menjadi 1, tetapi arahnya tetap sama. Ini penting karena setelah itu kita mengalikan arah dengan `moveSpeed`. Jika vektor tidak dinormalisasi, kecepatan agen bisa berubah-ubah tergantung jaraknya ke target.

Pergerakan posisi dilakukan dengan:

```csharp
transform.position += direction * moveSpeed * Time.deltaTime;
```

Baris ini memindahkan agen sedikit demi sedikit ke arah target. Penggunaan `Time.deltaTime` sangat penting karena membuat kecepatan agen tidak bergantung pada frame rate. Dengan kata lain, agen akan bergerak dengan kecepatan yang relatif konsisten meskipun game berjalan di 30 FPS, 60 FPS, atau 144 FPS.

Untuk rotasi, script menggunakan:

```csharp
Quaternion targetRotation = Quaternion.LookRotation(direction);
```

`Quaternion.LookRotation(direction)` menghasilkan rotasi yang membuat objek menghadap ke arah `direction`. Jika rotasi langsung diterapkan, agen akan langsung “melompat” menghadap target. Agar lebih halus, digunakan:

```csharp
transform.rotation = Quaternion.Slerp(
    transform.rotation,
    targetRotation,
    turnSpeed * Time.deltaTime
);
```

`Quaternion.Slerp` melakukan interpolasi rotasi secara halus. Semakin besar `turnSpeed`, semakin cepat agen berputar. Semakin kecil `turnSpeed`, semakin lambat dan lebih natural gerakan putarnya.

Secara konseptual, **seek** adalah perilaku paling dasar dalam steering behavior. Perilaku ini menjawab pertanyaan sederhana: “Ke mana agen harus bergerak?” Jawabannya adalah “ke arah target.” Namun, seek sederhana ini belum memiliki kemampuan untuk melambat saat mendekati target, berhenti dengan halus, menghindari rintangan, atau menyesuaikan kecepatan berdasarkan jarak.

Karena itu, script ini sebaiknya dipahami sebagai **fondasi**. Mahasiswa perlu memahami alur dasar berikut:

1. Ambil posisi target.
2. Hitung arah dari agen ke target.
3. Bersihkan sumbu Y jika gerakan hanya horizontal.
4. Cek apakah agen sudah terlalu dekat.
5. Normalisasi arah.
6. Geser posisi agen menggunakan `moveSpeed` dan `Time.deltaTime`.
7. Hitung rotasi target.
8. Haluskan rotasi menggunakan `Quaternion.Slerp`.

Dengan memahami baseline ini, mahasiswa akan lebih mudah memahami perilaku lanjutan seperti **arrive**, di mana agen tidak hanya bergerak ke target, tetapi juga melambat dan berhenti dengan lebih natural.

### Inti yang Harus Ditekankan

- **Seek** adalah perilaku dasar: agen bergerak dan menghadap ke target.
- `direction = target.position - transform.position` menghasilkan vektor arah dari agen ke target.
- `direction.y = 0f` membuat gerakan tetap berada pada bidang horizontal.
- `direction.Normalize()` memastikan arah menjadi vektor satuan sebelum dikalikan kecepatan.
- `Time.deltaTime` membuat pergerakan dan rotasi tidak bergantung pada frame rate.
- `Quaternion.Slerp` digunakan agar rotasi agen lebih halus dan natural.
- Script ini adalah **baseline** sebelum menambahkan **arrive**, **avoidance**, atau steering behavior yang lebih kompleks.

### Transisi ke Slide Berikutnya

Setelah baseline seek ini dipahami, kita akan melihat detail kecil yang penting pada baris pengecekan jarak: kenapa `sqrMagnitude` bisa menjadi pilihan yang lebih efisien daripada `magnitude` ketika banyak agen berjalan setiap frame.

---

## Slide 046 - Kenapa Menggunakan sqrMagnitude?

### Narasi

Slide ini membahas satu baris pengecekan jarak yang sering muncul pada movement agent:

```csharp
if (direction.magnitude < 0.01f)
```

Baris ini mudah dibaca, tetapi `magnitude` menghitung panjang vektor dengan akar kuadrat. Dalam Unity, `Vector3.magnitude` pada dasarnya menghitung:

```text
sqrt(x² + y² + z²)
```

Untuk kasus pengecekan jarak, akar kuadrat sering kali tidak diperlukan. Alternatifnya adalah:

```csharp
if (direction.sqrMagnitude < 0.0001f)
```

`Vector3.sqrMagnitude` hanya menghitung:

```text
x² + y² + z²
```

Perhatikan hubungannya. Jika ambang jaraknya `0.01f`, maka ambang jarak kuadratnya adalah:

```text
0.01f * 0.01f = 0.0001f
```

Jadi, kedua pengecekan di atas memiliki makna yang sama untuk membandingkan jarak, tetapi yang kedua menghindari operasi akar kuadrat.

Prinsip umumnya adalah:

```text
distance < radius
```

dapat dibandingkan sebagai:

```text
squaredDistance < radius * radius
```

Artinya, jika kita ingin agent berhenti ketika jarak ke target kurang dari `radius`, kita tidak perlu menghitung jarak sebenarnya. Cukup bandingkan `sqrMagnitude` dengan `radius * radius`.

```csharp
float radius = 0.1f;
float radiusSquared = radius * radius;

if (direction.sqrMagnitude < radiusSquared)
{
    // agent dianggap sudah sampai
}
```

Hal ini penting karena pengecekan jarak sering dilakukan berulang kali, misalnya setiap frame untuk banyak agent. Jika ada ratusan atau ribuan agent, operasi `sqrt` yang dilakukan terus-menerus dapat menambah beban perhitungan yang tidak diperlukan. `sqrMagnitude` lebih ringan karena hanya melakukan perkalian dan penjumlahan.

Namun, mahasiswa perlu memahami batasannya. `sqrMagnitude` sangat cocok untuk **perbandingan jarak**, seperti pengecekan arrival atau early return. Jika kita benar-benar membutuhkan nilai jarak dalam satuan dunia, maka `magnitude` tetap lebih tepat.

Poin yang harus diingat adalah: **jika hanya membandingkan, gunakan jarak kuadrat; jika butuh jarak nyata, gunakan magnitude.** Selain itu, ambang nilai harus disesuaikan. Mengganti `magnitude < 0.01f` dengan `sqrMagnitude < 0.01f` tidak sama, karena `0.01f` pada `sqrMagnitude` berarti jarak sekitar `sqrt(0.01f)`, yaitu sekitar `0.1f`.

### Inti yang Harus Ditekankan

- `Vector3.magnitude` menghitung panjang vektor dengan akar kuadrat.
- `Vector3.sqrMagnitude` menghitung kuadrat panjang vektor tanpa akar kuadrat.
- Untuk pengecekan jarak berulang, `sqrMagnitude` dapat mengurangi perhitungan yang tidak diperlukan.
- Perbandingan `distance < radius` dapat diubah menjadi `squaredDistance < radius * radius`.
- Jika mengganti `magnitude` dengan `sqrMagnitude`, ambang nilai juga harus dikuadratkan.
- Gunakan `magnitude` hanya jika nilai jarak sebenarnya benar-benar dibutuhkan.

### Transisi ke Slide Berikutnya

Setelah memahami cara membandingkan jarak secara efisien, kita akan melangkah ke perbandingan antara pendekatan custom steering dengan komponen bawaan Unity, yaitu `NavMeshAgent`, untuk melihat kapan masing-masing pendekatan lebih sesuai.

---

## Slide 047 - Steering vs NavMeshAgent

### Narasi

Pada slide ini kita membandingkan dua pendekatan untuk membuat agen bergerak dalam game: menggunakan komponen navigasi Unity atau menulis **steering** secara manual. Unity menyediakan beberapa komponen utama:

```text
NavMesh
NavMeshAgent
NavMeshSurface
```

`NavMesh` adalah data permukaan yang dapat dilalui agen, `NavMeshAgent` adalah komponen yang dipasang pada agen, dan `NavMeshSurface` adalah komponen pendukung untuk membuat atau mengelola `NavMesh`.

`NavMeshAgent` sudah menyediakan kemampuan navigasi yang cukup lengkap, antara lain:

- `pathfinding`,
- `speed`,
- `acceleration`,
- `angular speed`,
- `stopping distance`,
- `local obstacle avoidance`.

Artinya, jika kita hanya ingin NPC bergerak dari satu titik ke titik lain, `NavMeshAgent` dapat menangani pencarian rute dan pergerakan secara terintegrasi. Kita cukup menentukan tujuan, lalu komponen tersebut membantu agen mengikuti jalur yang tersedia di `NavMesh`.

Di sisi lain, **custom steering** memberikan kendali algoritmik yang lebih dalam. Dengan pendekatan ini, kita tidak hanya menyerahkan pergerakan kepada komponen, tetapi juga memahami bagaimana kecepatan, arah, percepatan, dan jarak berhenti dihitung. Hal ini memberi fleksibilitas ketika perilaku agen membutuhkan kontrol yang lebih spesifik, misalnya untuk menyesuaikan gaya gerak, respons terhadap rintangan, atau integrasi dengan sistem keputusan NPC.

Secara intuitif, `NavMeshAgent` dapat dipandang sebagai sistem navigasi siap pakai yang menggabungkan **pathfinding** dan **movement**. Sementara itu, steering adalah lapisan kontrol gerakan yang lebih rendah, di mana kita secara eksplisit mengatur bagaimana agen bergerak. Untuk pembelajaran, fokus pertemuan ini adalah memahami **konsep steering secara eksplisit**, bukan hanya memakai `NavMeshAgent` sebagai kotak hitam.

Hal penting yang harus dipahami sebelum lanjut adalah perbedaan antara “ke mana agen harus pergi” dan “bagaimana agen bergerak”. `NavMeshAgent` membantu menjawab keduanya secara praktis, tetapi steering membantu kita memahami mekanisme di baliknya.

### Inti yang Harus Ditekankan

- `NavMeshAgent` adalah komponen Unity yang menyediakan navigasi siap pakai berbasis `NavMesh`.
- `NavMeshAgent` sudah mencakup `pathfinding`, `speed`, `acceleration`, `angular speed`, `stopping distance`, dan `local obstacle avoidance`.
- Custom steering memberi kendali algoritmik, fleksibilitas, dan pemahaman internal terhadap pergerakan agen.
- Fokus slide ini adalah memahami **steering** secara eksplisit, bukan sekadar memakai komponen navigasi.

### Transisi ke Slide Berikutnya

Setelah memahami perbedaan konsepnya, selanjutnya kita akan melihat parameter `NavMeshAgent` yang mirip dengan konsep steering, seperti `Speed`, `Acceleration`, `Angular Speed`, `Stopping Distance`, dan `Obstacle Avoidance`.

---

## Slide 048 - Parameter NavMeshAgent yang Mirip Steering

### Narasi

Pada slide ini, kita melihat bahwa parameter bawaan `NavMeshAgent` sebenarnya sudah memuat banyak konsep yang sama dengan **steering behavior**. Jadi, ketika kita mengatur pergerakan agent di Unity, kita sedang menyentuh prinsip yang sama dengan sistem steering yang dibangun secara eksplisit.

Di Inspector `NavMeshAgent`, parameter yang sering muncul adalah:

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

Hubungan konsepnya dapat dibaca sebagai berikut:

```text
maxSpeed        -> Speed
maxAcceleration -> Acceleration
rotationRate    -> Angular Speed
arriveThreshold -> Stopping Distance
agentSize       -> Radius / Height
localAvoidance  -> Obstacle Avoidance
```

`Speed` menentukan kecepatan maksimum agent, `Acceleration` menentukan seberapa cepat agent mencapai kecepatan tersebut, dan `Angular Speed` menentukan seberapa cepat agent berputar. Ketiganya membentuk karakter dasar pergerakan: terlalu kecil membuat agent lambat, sedangkan terlalu besar dapat membuat gerakan terasa tidak natural atau tidak stabil.

`Stopping Distance` dan `Auto Braking` berkaitan dengan perilaku **arrive**. Agent perlu mulai melambat sebelum mencapai target agar tidak melewati target atau bergetar di sekitar titik akhir. `Stopping Distance` memberi jarak di mana agent mulai mengurangi kecepatan, sementara `Auto Braking` membantu proses pengereman secara otomatis.

`Radius` dan `Height` menggambarkan ukuran agent dalam ruang navigasi, sedangkan `Obstacle Avoidance` mewakili kemampuan **local avoidance**. Ukuran agent memengaruhi bagaimana sistem navigasi memperlakukan agent terhadap celah, rintangan, dan kepadatan lingkungan. Local avoidance sendiri bukan pathfinding global, tetapi respons terhadap objek yang ada di sekitar agent.

Poin penting yang harus dipahami mahasiswa adalah bahwa `NavMeshAgent` menyederhanakan banyak proses, tetapi parameter-parameternya tetap mencerminkan prinsip steering. Dengan memahami pemetaan ini, mahasiswa dapat men-debug pergerakan NPC, menyesuaikan perilaku agent, dan kemudian membangun custom steering dengan variabel yang lebih eksplisit.

### Inti yang Harus Ditekankan

- `Speed`, `Acceleration`, dan `Angular Speed` adalah padanan langsung dari batas kecepatan, percepatan, dan laju rotasi pada steering.
- `Stopping Distance` dan `Auto Braking` penting untuk perilaku arrive yang halus, bukan hanya untuk menghentikan agent secara tiba-tiba.
- `Radius`, `Height`, dan `Obstacle Avoidance` menunjukkan bahwa ukuran agent dan local avoidance juga menjadi bagian dari sistem navigasi.
- Memahami pemetaan ini membantu mahasiswa membaca `NavMeshAgent` sebagai sistem pergerakan yang dapat dianalisis, bukan sekadar komponen hitam.

### Transisi ke Slide Berikutnya

Setelah kita memahami parameter apa saja yang membentuk pergerakan agent, langkah berikutnya adalah melihat kesalahan umum saat mengimplementasi movement system. Kesalahan-kesalahan itu sering muncul ketika parameter, waktu, normalisasi, dan pembatasan velocity tidak ditangani dengan benar.

---

## Slide 049 - Kesalahan Umum Implementasi

### Narasi

Pada slide ini kita membahas **kesalahan umum implementasi** dalam pergerakan berbasis steering. Setelah memahami parameter `NavMeshAgent` yang mirip dengan konsep steering, langkah berikutnya adalah memastikan bahwa perilaku yang kita tulis benar-benar stabil saat dijalankan di runtime.

Kesalahan pada slide ini biasanya tidak terlihat sebagai error besar, tetapi menghasilkan gerakan NPC yang aneh: terlalu cepat, bergetar, menabrak, atau bereaksi terhadap objek yang tidak seharusnya. Karena itu, poin-poin berikut penting untuk dipahami sebelum masuk ke contoh kasus.

Berikut kesalahan yang paling sering muncul:

1. **Tidak menggunakan `Time.deltaTime`**  
   Gerakan menjadi tergantung frame rate. Jika frame rate tinggi, agent bergerak lebih cepat; jika frame rate rendah, agent bergerak lebih lambat. `Time.deltaTime` membantu membuat percepatan dan perpindahan tetap konsisten antar frame.

2. **Tidak melakukan normalize**  
   Arah yang dihasilkan dari selisih posisi biasanya memiliki panjang yang berubah-ubah. Jika vektor arah tidak dinormalisasi, kecepatan agent bisa berubah hanya karena jarak ke target. Untuk perilaku seperti `Seek` atau `Arrive`, arah sebaiknya dinormalisasi sebelum dikalikan kecepatan atau percepatan maksimum.

3. **Menggunakan `Seek` tanpa stopping distance**  
   `Seek` hanya mendorong agent menuju target, tetapi tidak memberi tahu agent kapan harus melambat. Akibatnya, NPC bisa bergetar atau berputar-putar di sekitar target. Untuk gerakan yang lebih halus, perlu konsep `Arrive` atau parameter stopping distance.

4. **Mengubah `Transform` pada `Rigidbody` dinamis**  
   Jika agent menggunakan fisika, mengubah posisi `Transform` secara langsung dapat melewati sistem fisika. Hal ini bisa menyebabkan tabrakan tidak konsisten, agent menembus collider, atau perilaku `Rigidbody` menjadi tidak stabil.

5. **Tidak membatasi velocity**  
   Jika gaya atau percepatan terus ditambahkan tanpa batas, `velocity` agent dapat semakin besar dari waktu ke waktu. Agent yang seharusnya memiliki kecepatan maksimum bisa bergerak jauh lebih cepat, terutama jika beberapa steering behavior bekerja bersamaan.

6. **Semua steering diberi bobot sama**  
   Jika semua perilaku diberi bobot yang sama, perilaku penting seperti obstacle avoidance bisa menjadi lemah. Dalam banyak kasus, keselamatan dan penghindaran rintangan harus diprioritaskan lebih tinggi daripada sekadar mengejar target.

7. **Tidak menggunakan `LayerMask`**  
   Sensor atau deteksi collider tanpa `LayerMask` bisa mendeteksi objek yang tidak relevan. Akibatnya, agent mungkin menghindari dinding, dekorasi, atau objek lain yang seharusnya tidak memengaruhi pergerakannya.

Dari daftar tersebut, ada pola umum yang perlu diperhatikan: pergerakan harus **frame-rate independent**, arah harus **dinormalisasi**, dan perilaku harus diberi **prioritas yang jelas**. Tanpa tiga hal ini, hasil visualnya bisa terlihat seperti bug, padahal masalahnya ada pada cara perilaku digabungkan.

Dalam implementasi Unity, mahasiswa perlu terbiasa memeriksa beberapa hal sederhana: apakah `Time.deltaTime` digunakan, apakah vektor arah dinormalisasi, apakah `velocity` dibatasi, apakah `Rigidbody` tidak diubah lewat `Transform` secara langsung, dan apakah sensor menggunakan `LayerMask` yang tepat. Pengecekan ini membantu menemukan masalah sebelum perilaku NPC menjadi sulit dianalisis.

Sebelum lanjut ke contoh kasus, pastikan mahasiswa memahami bahwa kesalahan implementasi sering muncul bukan karena satu fungsi salah, tetapi karena beberapa perilaku kecil saling berinteraksi. Jika satu perilaku tidak dibatasi atau tidak diberi bobot yang benar, perilaku lain bisa tertutup atau membuat gerakan menjadi tidak stabil.

### Inti yang Harus Ditekankan

- Gunakan `Time.deltaTime` agar pergerakan tidak bergantung pada frame rate.
- Normalisasi vektor arah agar kecepatan tidak berubah hanya karena jarak ke target.
- Tambahkan stopping distance atau perilaku `Arrive` agar NPC tidak bergetar di sekitar target.
- Jangan mengubah `Transform` langsung pada `Rigidbody` dinamis; batasi `velocity` agar agent tidak semakin cepat.
- Beri bobot prioritas pada steering behavior dan gunakan `LayerMask` agar sensor hanya mendeteksi objek yang relevan.

### Transisi ke Slide Berikutnya

Dengan memahami kesalahan umum ini, kita bisa melihat contoh kasus yang lebih konkret: enemy chase. Pada slide berikutnya, kita akan melihat bagaimana solusi minimal menggunakan `Seek` saja bisa menghasilkan masalah, lalu bagaimana kombinasi `Arrive`, obstacle avoidance, dan separation membuat pergerakan enemy lebih stabil.

---

## Slide 050 - Contoh Kasus: Enemy Chase

### Narasi

**Enemy Chase** adalah kebutuhan yang sering muncul dalam game: musuh harus mengejar pemain secara meyakinkan. Namun, dari sisi **Game AI**, mengejar bukan hanya berarti “bergerak ke arah target”. Pergerakan yang baik harus tetap memperhatikan lingkungan dan agen lain di sekitarnya.

Solusi paling sederhana adalah menggunakan perilaku **`Seek(Player)`**.

```text
Seek(Player)
```

Perilaku ini mengarahkan musuh ke posisi `Player` dengan kecepatan maksimum. Secara intuisi, ini sudah membuat musuh tampak mengejar. Namun, perilaku ini hanya melihat target, bukan kondisi di sekitar musuh.

Masalah yang muncul biasanya:

- musuh menabrak obstacle,
- musuh menumpuk dengan musuh lain,
- musuh tidak berhenti dengan baik saat sudah dekat target.

Masalah ini terjadi karena `Seek` tidak memiliki mekanisme perlambatan, penghindaran rintangan, atau penyebaran antar agen.

Solusi yang lebih baik adalah menggabungkan beberapa **steering behavior**:

```text
Arrive(Player)
+
Obstacle Avoidance
+
Separation
```

**`Arrive(Player)`** memperbaiki masalah berhenti. Ia tetap mengejar, tetapi mulai melambat ketika mendekati target. **`Obstacle Avoidance`** membantu musuh menghindari rintangan di lingkungan lokal. **`Separation`** membantu musuh menjaga jarak satu sama lain sehingga tidak menumpuk.

Secara implementasi, ketiga perilaku ini dapat dipandang sebagai vektor steering yang digabungkan:

```text
steering = Arrive(player)
         + ObstacleAvoidance()
         + Separation(neighbors)
```

Hasilnya, musuh bergerak menuju `player`, tetapi tetap mampu menghindari obstacle dan tidak saling menumpuk. Dalam Unity, hasil steering ini biasanya diterapkan pada `Rigidbody` melalui `velocity`, bukan dengan mengubah `Transform` secara langsung.

Yang harus dipahami mahasiswa adalah bahwa **Enemy Chase** bukan satu perilaku tunggal, melainkan komposisi beberapa perilaku pergerakan. Dengan kombinasi ini, NPC terlihat lebih natural: mengejar, melambat, menghindari tabrakan, dan tetap tersebar.

### Inti yang Harus Ditekankan

- **`Seek(Player)`** adalah solusi minimal, tetapi kurang aman untuk lingkungan yang berisi obstacle dan banyak enemy.
- **`Arrive(Player)`** menambahkan perlambatan agar musuh tidak terus bergetar atau melewati target.
- **`Obstacle Avoidance`** dan **`Separation`** membuat pergerakan lebih stabil dan tidak menumpuk.
- Perilaku steering digabungkan sebagai vektor, lalu diterapkan pada gerakan agen.
- Hasil yang diharapkan: enemy mengejar player secara meyakinkan, tetapi tetap menghindari tabrakan dan tumpang tindih.

### Transisi ke Slide Berikutnya

Setelah memahami bagaimana enemy mengejar player dengan kombinasi steering, kita akan melihat kasus **Animal NPC** yang membutuhkan perilaku berbeda tergantung jarak player.

---

## Slide 051 - Contoh Kasus: Animal NPC

### Narasi

Slide ini melanjutkan contoh perilaku agent dengan kasus **Animal NPC**. Bedanya dengan enemy chase, animal tidak bertujuan mengejar atau menyerang. Animal memiliki perilaku dasar yang tenang, tetapi berubah ketika player terlalu dekat.

Kebutuhan utama kasus ini adalah:

```text
Animal berjalan bebas
dan menghindari player.
```

Artinya, animal harus terlihat hidup di lingkungan, bergerak bebas, dan tetap mampu bereaksi terhadap ancaman dari player.

Perilaku animal dapat dibagi menjadi dua kondisi utama:

- **Normal**: animal menggunakan `Wander` ditambah `Obstacle Avoidance`.
- **Player dekat**: animal menggunakan `Flee` ditambah `Obstacle Avoidance`.

Pada kondisi normal, `Wander` memberi kesan animal berjalan tanpa tujuan yang kaku. `Obstacle Avoidance` tetap diperlukan agar animal tidak menabrak pohon, batu, dinding, atau objek lain di lingkungan.

Ketika player masuk ke radius tertentu, perilaku berubah menjadi `Flee`. `Flee` membuat animal bergerak menjauhi player, tetapi `Obstacle Avoidance` tetap aktif agar animal tidak langsung menabrak obstacle saat panik.

Keputusan perpindahan perilaku dapat digambarkan dengan diagram sederhana:

```text
distanceToPlayer < panicRadius ?
        │
    YES │ NO
        │
      Flee / Wander
```

Variabel `distanceToPlayer` adalah hasil **perception**, yaitu pengukuran jarak antara animal dan player. Variabel `panicRadius` adalah ambang batas yang menentukan kapan animal mulai panik. Jika jarak lebih kecil dari `panicRadius`, keputusan menghasilkan `Flee`. Jika tidak, keputusan menghasilkan `Wander`.

Setelah keputusan dibuat, sistem **movement** menerapkan steering behavior yang sesuai:

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

Di sini terlihat bahwa satu perilaku agent tidak selalu hanya satu steering behavior. Animal menggabungkan beberapa gaya gerak: gaya eksplorasi, gaya menghindari ancaman, dan gaya menghindari tabrakan.

Poin penting yang harus dipahami mahasiswa adalah bahwa kasus ini sudah menunjukkan pipeline kecil yang utuh: **perception** untuk membaca jarak, **decision** untuk memilih state, dan **movement** untuk menghasilkan gerak yang natural.

### Inti yang Harus Ditekankan

- Animal NPC memiliki dua state utama: `Wander` saat normal dan `Flee` saat player dekat.
- Keputusan didasarkan pada perbandingan `distanceToPlayer` dengan `panicRadius`.
- `Obstacle Avoidance` tetap aktif pada kedua kondisi agar animal tidak menabrak obstacle.
- Kasus ini menggabungkan **perception**, **decision**, dan **movement** dalam satu perilaku agent.

### Transisi ke Slide Berikutnya

Setelah memahami satu animal yang memilih perilaku berdasarkan jarak player, kita akan memperluas pembahasan ke banyak agent yang saling memengaruhi. Pada slide berikutnya, kita akan melihat **Flocking Agent**, di mana perilaku kelompok muncul dari interaksi antar agent.

---

## Slide 052 - Contoh Kasus: Flocking Agent

### Narasi

Pada slide ini kita melihat contoh kasus **flocking agent**. Bedanya dengan contoh sebelumnya adalah fokusnya bukan lagi satu NPC yang bereaksi terhadap player, melainkan banyak agent yang saling memengaruhi satu sama lain.

Intuisi praktisnya sederhana: setiap agent tidak perlu tahu bentuk kelompok secara keseluruhan. Agent hanya mengamati agent lain di sekitarnya, lalu menerapkan beberapa aturan lokal. Dari aturan lokal itulah muncul pola kelompok yang terlihat rapi dan natural.

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

Diagram di atas menunjukkan alur utama perilaku flocking.

1. **Neighbor Detection**  
   Agent mencari agent lain yang berada dalam radius tertentu. Radius ini biasanya disimpan pada parameter `neighborRadius`.

2. **Separation**  
   Agent menghindari agent lain yang terlalu dekat. Tujuannya agar tidak terjadi tumpang tindih atau benturan.

3. **Alignment**  
   Agent berusaha menyelaraskan arah atau kecepatan dengan rata-rata agent di sekitarnya.

4. **Cohesion**  
   Agent bergerak menuju pusat kelompok agent di sekitarnya.

5. **Combined Steering**  
   Ketiga gaya tersebut digabungkan menjadi satu gaya steering. Biasanya dilakukan dengan pembobotan, misalnya `separationWeight`, `alignmentWeight`, dan `cohesionWeight`.

6. **Movement**  
   Gaya steering yang sudah digabungkan digunakan untuk memperbarui posisi atau kecepatan agent.

Parameter penting yang perlu dipahami adalah:

```text
neighborRadius
separationRadius
separationWeight
alignmentWeight
cohesionWeight
maxSpeed
```

Parameter `neighborRadius` menentukan seberapa jauh agent melihat lingkungannya. Jika terlalu kecil, agent hanya bereaksi terhadap agent yang sangat dekat. Jika terlalu besar, agent akan terlalu banyak dipengaruhi oleh agent lain.

Parameter `separationRadius` menentukan jarak aman antar agent. Parameter ini biasanya lebih kecil dari `neighborRadius`, karena separation hanya aktif ketika agent sudah terlalu berdekatan.

Tiga parameter `separationWeight`, `alignmentWeight`, dan `cohesionWeight` menentukan keseimbangan perilaku kelompok.

- Jika `separationWeight` terlalu besar, kelompok cenderung tersebar.
- Jika `alignmentWeight` terlalu besar, agent cenderung bergerak searah seperti formasi yang kaku.
- Jika `cohesionWeight` terlalu besar, agent cenderung berkumpul rapat dan membentuk gumpalan.

Parameter `maxSpeed` membatasi kecepatan akhir agent. Ini penting agar gerakan tetap stabil dan tidak terlalu melompat-lompat.

Yang perlu ditekankan di sini adalah bahwa flocking tidak membutuhkan perintah eksplisit seperti “bentuk kelompok burung yang realistis”. Pola kelompok muncul dari kombinasi aturan sederhana yang diterapkan secara lokal oleh setiap agent.

Inilah yang membuat flocking menjadi contoh menarik dari **emergent behavior**. Mahasiswa perlu memahami bahwa perilaku kompleks dalam game sering kali tidak ditulis sebagai satu skenario besar, melainkan muncul dari interaksi banyak aturan kecil.

### Inti yang Harus Ditekankan

- Flocking dibangun dari interaksi lokal antar agent, bukan dari perintah global.
- Tiga aturan utama adalah **separation**, **alignment**, dan **cohesion**.
- Parameter seperti `neighborRadius`, `separationRadius`, dan berbagai `weight` menentukan karakter gerakan kelompok.
- Pola kelompok yang terlihat cerdas muncul dari kombinasi aturan sederhana, bukan dari skenario eksplisit.

### Transisi ke Slide Berikutnya

Setelah melihat bagaimana aturan lokal pada flocking menghasilkan pola kelompok, kita akan membahas konsepnya secara lebih umum pada slide berikutnya tentang **emergent behavior**.

---

## Slide 053 - Emergent Behavior

### Narasi

**Emergent behavior** adalah perilaku kompleks yang muncul dari aturan sederhana. Dalam konteks game cerdas, ini penting karena perilaku NPC atau agent tidak selalu harus ditulis sebagai satu skenario besar. Agent dapat memiliki aturan lokal yang sederhana, tetapi ketika banyak agent berinteraksi, muncul pola global yang sulit diprediksi hanya dari satu agent.

Pada flocking, setiap agent biasanya hanya mengikuti tiga aturan dasar:

```text
Separation
Alignment
Cohesion
```

Aturan-aturan ini tidak pernah secara eksplisit memerintahkan:

> “Bentuk kelompok burung yang realistis.”

Namun, ketika `separation`, `alignment`, dan `cohesion` bekerja bersama, agent-agent tersebut dapat membentuk kelompok yang bergerak rapi, menyebar saat terlalu dekat, dan mengikuti arah mayoritas. Inilah yang membuat perilaku kelompok terlihat cerdas meskipun tidak ada satu pun agent yang “memahami” bentuk kelompok secara keseluruhan.

Intuisi praktisnya adalah: kita tidak perlu menuliskan setiap gerakan burung, ikan, atau kendaraan satu per satu. Cukup memberi agent kemampuan untuk bereaksi terhadap tetangga terdekat, lalu membiarkan interaksi lokal menghasilkan perilaku global. Dalam implementasi sederhana, setiap agent menghitung gaya steering dari aturan-aturan tersebut, menggabungkannya, lalu menerapkannya pada `movement`.

Karakteristik ini menjadi salah satu kekuatan utama dalam game cerdas. Perilaku emergent membuat NPC crowd, swarm, atau kelompok agent terasa lebih hidup dan lebih mudah disesuaikan. Desainer dapat mengubah bobot aturan, radius persepsi, atau kecepatan maksimum, lalu mengamati perubahan pola kelompok tanpa harus menulis ulang seluruh perilaku.

Yang perlu dipahami mahasiswa sebelum lanjut adalah bahwa emergent behavior bukan hasil dari aturan yang rumit. Justru kekuatannya ada pada interaksi sederhana yang berulang. Jika satu aturan terlalu dominan, perilaku bisa menjadi kacau; jika terlalu lemah, kelompok tidak terbentuk. Karena itu, memahami hubungan antara aturan lokal dan pola global adalah dasar penting sebelum membahas sistem agent yang lebih besar.

### Inti yang Harus Ditekankan

- **Emergent behavior** adalah perilaku kompleks yang muncul dari aturan sederhana.
- Pada flocking, `separation`, `alignment`, dan `cohesion` tidak secara eksplisit memerintahkan bentuk kelompok, tetapi menghasilkan pola kelompok yang realistis.
- Agent tampak cerdas karena interaksi lokal antar agent menghasilkan perilaku global.
- Perilaku emergent penting dalam game cerdas karena membuat NPC, swarm, dan crowd lebih hidup serta lebih mudah disesuaikan.

### Transisi ke Slide Berikutnya

Setelah memahami bagaimana perilaku kompleks dapat muncul dari aturan sederhana, langkah berikutnya adalah melihat apa yang terjadi ketika jumlah agent bertambah. Pada slide berikutnya, kita akan membahas performa pada banyak agent dan mengapa pemeriksaan antar agent dapat menjadi masalah ketika jumlah agent meningkat.

---

## Slide 054 - Performa pada Banyak Agent

### Narasi

Pada slide ini kita masuk ke masalah praktis yang sering muncul ketika banyak NPC atau agent bergerak dalam satu scene. Jika ada `N agent` dan setiap agent memeriksa semua agent lain, jumlah pemeriksaan tumbuh sangat cepat.

```text
N agent
O(N²)
100 agent ≈ 10.000 pemeriksaan pair
```

Artinya, ketika jumlah agent bertambah dua kali lipat, jumlah pemeriksaan tidak bertambah dua kali, tetapi bisa bertambah sekitar empat kali. Dalam game, ini bisa membebani proses komputasi karena setiap agent mungkin perlu menghitung jarak, arah, atau pengaruh terhadap agent lain.

Intuisi pentingnya adalah: **bukan hanya logika perilaku yang harus benar, tetapi juga seberapa sering logika itu dijalankan**. Untuk flocking, misalnya, setiap agent tidak perlu tahu semua agent di seluruh dunia. Ia hanya perlu memperhatikan agent yang berada di sekitarnya.

Teknik optimasi yang umum digunakan antara lain:

- **neighbor radius**, yaitu membatasi agent hanya memeriksa agent dalam radius tertentu.
- **physics overlap**, yaitu memanfaatkan sistem fisika untuk mendeteksi agent yang saling berdekatan.
- **spatial partitioning**, yaitu membagi ruang menjadi wilayah-wilayah agar pencarian tetangga lebih cepat.
- `grid`, yaitu membagi area menjadi sel-sel dua dimensi.
- `quadtree` / `octree`, yaitu struktur pohon untuk ruang dua dimensi atau tiga dimensi.
- **update logika agent tidak setiap frame**, yaitu mengurangi frekuensi perhitungan yang berat.

Untuk praktikum berskala kecil, implementasi sederhana masih cukup. Namun, ketika jumlah agent meningkat, mahasiswa perlu mulai berpikir tentang **kompleksitas algoritma** dan **biaya per frame**.

Sebelum lanjut, hal yang harus dipahami adalah: performa sistem perilaku agent tidak hanya ditentukan oleh satu agent yang cerdas, tetapi juga oleh cara sistem menangani banyak agent secara bersamaan.

### Inti yang Harus Ditekankan

- `O(N²)` menjadi masalah utama ketika setiap agent memeriksa semua agent lain.
- **Spatial partitioning** seperti `grid`, `quadtree`, dan `octree` membantu mengurangi jumlah agent yang perlu diperiksa.
- **Neighbor radius** dan **physics overlap** adalah cara praktis untuk membatasi interaksi hanya pada agent yang relevan.
- Untuk skala kecil, implementasi sederhana masih layak, tetapi untuk banyak agent perlu optimasi.

### Transisi ke Slide Berikutnya

Setelah memahami bahwa jumlah pemeriksaan dapat meningkat sangat cepat, langkah berikutnya adalah mengatur seberapa sering logika perilaku benar-benar perlu dihitung. Slide berikutnya akan membahas **update rate sistem keputusan**, yaitu strategi mengurangi frekuensi perhitungan tanpa membuat perilaku NPC terasa tidak natural.

---

## Slide 055 - Update Rate AI

### Narasi

Slide ini membahas **update rate** untuk sistem agent dalam game.

Intuisinya, tidak semua proses keputusan harus dihitung setiap **frame render**. Gerak visual perlu halus, tetapi keputusan strategis atau sensor berat dapat dilakukan lebih jarang.

```csharp
if (Time.time >= nextThinkTime)
{
    Think();
    nextThinkTime =
        Time.time + thinkInterval;
}
```

Pada potongan kode ini, alurnya sederhana:

1. Cek apakah `Time.time >= nextThinkTime`.
2. Jika sudah waktunya, panggil `Think()` untuk memperbarui keputusan.
3. Set `nextThinkTime` menjadi `Time.time + thinkInterval`.

`Time.time` adalah waktu berjalan sejak game mulai, sedangkan `thinkInterval` menentukan jeda antar keputusan. Dengan cara ini, agent tidak terus-menerus menghitung keputusan yang sebenarnya belum perlu diperbarui.

Kita dapat memisahkan beberapa jenis update:

- **Movement update** : setiap frame, agar posisi dan orientasi agent tetap halus.
- **Decision update** : 5–10 kali per detik, cukup untuk mengubah target, `state`, atau prioritas.
- **Heavy sensor** : beberapa kali per detik, misalnya deteksi area, jarak, atau kondisi lingkungan yang lebih mahal.

Pemisahan ini penting karena biaya komputasi tidak selalu sama untuk semua proses. Pergerakan kecil bisa ringan, tetapi sensor atau evaluasi banyak pilihan bisa berat. Jika semua NPC melakukan semua hal setiap frame, beban komputasi dapat meningkat cepat.

Teknik ini sangat berguna ketika jumlah NPC besar. Agent tetap terlihat bergerak natural, tetapi keputusan tidak dihitung lebih sering dari yang dibutuhkan. Mahasiswa perlu memahami bahwa **update rate** adalah alat desain performa, bukan hanya detail teknis.

Sebelum lanjut, pahami bahwa steering dan movement biasanya butuh update frekuensi tinggi, sedangkan keputusan dapat dijadwalkan lebih rendah.

### Inti yang Harus Ditekankan

- Tidak semua proses keputusan harus dihitung setiap frame render.
- `Think()` dapat dijadwalkan dengan `nextThinkTime` dan `thinkInterval`.
- Movement, decision, dan heavy sensor dapat memiliki update rate berbeda.
- Teknik ini membantu menjaga performa saat banyak NPC berjalan bersamaan.

### Transisi ke Slide Berikutnya

Setelah memahami bagaimana mengatur frekuensi update, kita akan melihat hubungan materi hari ini dengan pertemuan berikutnya, yaitu bagaimana steering dan movement terhubung dengan pathfinding dan navigation.

---

## Slide 056 - Hubungan dengan Pertemuan Selanjutnya

### Narasi

Slide ini membantu mahasiswa melihat posisi materi hari ini dalam alur yang lebih besar. Materi yang sedang dibahas adalah **Steering** dan **Movement**, yaitu lapisan perilaku yang mengatur bagaimana sebuah agent bergerak secara lokal di dalam scene.

```text
Steering
   ↓
Movement
```

Artinya, fokus utama kita saat ini bukan memilih rute global, tetapi menghasilkan gerak yang halus, terarah, dan responsif terhadap kondisi sekitar.

Pertemuan berikutnya akan masuk ke **Pathfinding** dan **Navigation**. Di sini, sistem akan menentukan rute yang harus ditempuh agent dari posisi awal menuju target. Perbedaannya penting: **pathfinding menentukan ke mana lewatnya**, sedangkan **steering menentukan bagaimana bergeraknya**.

```text
Pathfinding
   ↓
Navigation
```

Dengan kata lain, pathfinding menghasilkan rencana perjalanan, sedangkan steering menerjemahkan rencana tersebut menjadi gerak nyata di dalam dunia game.

Ketika kedua bagian ini digabungkan, alurnya menjadi seperti berikut:

```text
A* / NavMesh
     ↓
Path / Waypoint
     ↓
Steering
     ↓
Local Movement
```

Alur ini menunjukkan bahwa sebuah agent biasanya tidak hanya “tahu” tujuan akhirnya, tetapi juga perlu bergerak dengan cara yang benar. `A*` atau `NavMesh` membantu menemukan rute, `Path` atau `Waypoint` menjadi panduan titik-titik yang harus dilewati, `Steering` mengatur arah, kecepatan, dan respons lokal, lalu `Local Movement` menerapkan hasil tersebut ke transformasi agent di Unity.

Sebelum lanjut, mahasiswa perlu memahami bahwa **pathfinding saja tidak cukup** untuk menghasilkan gerak yang natural. Rute yang benar tetap bisa terlihat kaku jika tidak ada steering yang mengatur arah, kecepatan, dan penghindaran lokal. Sebaliknya, steering juga tidak bisa bekerja optimal tanpa tujuan atau rute yang jelas.

### Inti yang Harus Ditekankan

- **Steering** mengatur cara agent bergerak secara lokal, seperti arah, kecepatan, dan respons terhadap lingkungan.
- **Pathfinding** menentukan rute global yang harus ditempuh agent menuju target.
- Dalam implementasi nyata, keduanya sering digabung menjadi alur: `A* / NavMesh` → `Path / Waypoint` → `Steering` → `Local Movement`.
- Mahasiswa harus memahami bahwa **rute yang benar** dan **gerak yang halus** adalah dua hal yang saling melengkapi.

### Transisi ke Slide Berikutnya

Setelah memahami hubungan antara steering, movement, pathfinding, dan navigation, kita lanjut ke rencana praktikum 3, di mana konsep-konsep ini akan mulai diimplementasikan dalam bentuk agent yang bergerak secara otonom.

---

## Slide 057 - Rencana Praktikum 3

### Narasi

Pada slide ini, kita memasuki rencana **Praktikum 3** yang berfokus pada pembuatan **autonomous steering agent** di Unity. Inti dari praktikum ini bukan hanya membuat NPC bergerak menuju suatu titik, tetapi membentuk perilaku gerak yang lebih natural dan responsif terhadap lingkungan.

Tujuan utama praktikum ini adalah mahasiswa dapat membuat agent Unity yang mampu:

1. bergerak menuju target,
2. berhenti dengan halus,
3. menghadap arah gerak,
4. menghindari obstacle sederhana,
5. berpindah ke `wander` ketika tidak memiliki target.

Perilaku utama yang akan dikombinasikan pada praktikum ini adalah:

```text
Seek / Arrive
+
Wander
+
Obstacle Avoidance
```

Perilaku `Seek / Arrive` digunakan ketika agent memiliki target. `Seek` membuat agent bergerak menuju target, sedangkan `Arrive` membantu agent melambat dan berhenti secara halus ketika mendekati target. Perilaku `Wander` digunakan ketika agent tidak memiliki target, sehingga agent tetap terlihat hidup dan tidak diam di satu tempat. Perilaku `Obstacle Avoidance` digunakan untuk menghindari obstacle sederhana secara lokal, misalnya dengan mengubah arah gerak ketika terdeteksi ada rintangan di depan.

Penting untuk dipahami bahwa praktikum ini membahas **steering behavior**, yaitu perilaku gerak lokal. Artinya, agent memutuskan **bagaimana bergerak** pada saat ini, bukan menentukan rute global dari titik awal ke titik tujuan. Dengan kata lain, steering membantu NPC bergerak lebih halus, lebih responsif, dan lebih mirip makhluk hidup yang bergerak di dalam scene.

Sebelum lanjut ke gambaran scene, mahasiswa perlu memahami bahwa praktikum ini akan menghasilkan NPC yang dapat bergerak menuju target, berhenti dengan halus, menghadap arah gerak, menghindari obstacle sederhana, dan tetap bergerak secara acak ketika tidak ada target. Detail langkah implementasi akan dibahas pada **Modul Praktikum 3** terpisah.

### Inti yang Harus Ditekankan

- Praktikum 3 bertujuan membuat **autonomous steering agent** di Unity.
- Agent harus mampu bergerak ke target, berhenti halus, menghadap arah gerak, menghindari obstacle, dan `wander` tanpa target.
- Behavior utama yang dikombinasikan adalah `Seek / Arrive`, `Wander`, dan `Obstacle Avoidance`.
- Steering behavior mengatur **gerak lokal** agent, bukan rute global.

### Transisi ke Slide Berikutnya

Selanjutnya, kita akan melihat gambaran scene praktikum, yaitu susunan GameObject seperti `Ground`, `Player`, `NPC`, `Obstacles`, dan `Main Camera`, serta bagaimana NPC akan menggunakan custom steering script di dalam scene tersebut.

---

## Slide 058 - Gambaran Scene Praktikum

### Narasi

Slide ini memperlihatkan **scene sederhana** yang akan digunakan pada praktikum. Tujuannya bukan membuat dunia game yang rumit, tetapi menyiapkan lingkungan minimal agar perilaku **steering agent** dapat diamati dengan jelas.

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

Dalam diagram tersebut, **NPC** adalah agen yang akan dikendalikan oleh script steering. **Player** berperan sebagai target yang dapat bergerak, sedangkan **Obstacle** menjadi penghalang sederhana yang harus dihindari. Garis diagonal menunjukkan arah hubungan spasial antara `NPC` dan `Player`, yaitu NPC perlu memahami posisi target relatif terhadap dirinya.

Hierarki scene yang direncanakan adalah:

```text
Scene
├── Ground
├── Player
├── NPC
├── Obstacles
└── Main Camera
```

- `Ground` memberi permukaan dasar agar posisi dan gerak agent dapat dibaca dalam ruang sederhana.
- `Player` menjadi sumber target atau referensi tujuan.
- `NPC` adalah objek utama yang akan menjalankan perilaku steering.
- `Obstacles` berisi penghalang yang memicu perilaku avoidance.
- `Main Camera` digunakan untuk mengamati hasil simulasi.

Poin penting yang harus dipahami sebelum lanjut adalah bahwa scene ini sengaja dibuat **modular dan minimal**. Dengan komponen yang terbatas, mahasiswa dapat fokus pada hubungan antara posisi `NPC`, target, dan obstacle, bukan pada detail visual atau sistem game lain.

### Inti yang Harus Ditekankan

- Scene praktikum adalah lingkungan minimal untuk menguji **steering behavior** pada `NPC`.
- `Player`, `Obstacles`, dan `NPC` memiliki peran berbeda: target, penghalang, dan agen yang bergerak.
- Hierarki scene harus dipahami karena setiap GameObject menjadi input bagi logika steering.
- Visualisasi sederhana membantu mahasiswa melihat hubungan spasial sebelum masuk ke script.

### Transisi ke Slide Berikutnya

Setelah struktur scene dipahami, langkah berikutnya adalah melihat script apa saja yang direncanakan untuk mendukung perilaku `NPC` tersebut.

---

## Slide 059 - Script yang Direncanakan pada Praktikum

### Narasi

Sebelum menulis kode, penting untuk melihat praktikum sebagai satu sistem kecil yang bisa dipisahkan menjadi beberapa tanggung jawab. Pendekatan ini membuat mahasiswa tidak langsung terjebak pada detail implementasi, tetapi memahami dulu bagian mana yang mengatur gerak, bagian mana yang membaca lingkungan, dan bagian mana yang membantu observasi.

Struktur script yang disarankan adalah:

```text
Scripts/
├── SimplePlayerController.cs
├── SteeringAgent.cs
├── SteeringSensor.cs
└── SteeringDebug.cs
```

Pemisahan ini mengikuti prinsip **modularitas**. Setiap script memiliki peran yang jelas, sehingga perubahan pada satu bagian tidak langsung membingungkan seluruh sistem. Dalam Unity, script-script ini dapat dipasang sebagai komponen pada `GameObject` `NPC` dan `Player`.

`SimplePlayerController.cs` berperan sebagai penggerak `Player`. Script ini tidak menjadi fokus utama praktikum, tetapi penting karena `Player` dapat menjadi target yang diikuti oleh `NPC`. Dengan adanya target yang bergerak, perilaku `NPC` menjadi lebih mudah diamati.

`SteeringAgent.cs` adalah inti dari perilaku gerak `NPC`. Script ini bertanggung jawab atas:

- `movement`, yaitu memperbarui posisi dan arah gerak berdasarkan kecepatan;
- `seek`, yaitu menghasilkan gaya atau arah menuju target;
- `arrive`, yaitu mengurangi kecepatan ketika `NPC` mendekati target;
- `wander`, yaitu menambahkan variasi kecil pada arah gerak agar `NPC` tidak terlihat diam atau kaku.

Secara intuitif, `SteeringAgent.cs` berfungsi seperti **otak gerak** untuk `NPC`. Ia membuat keputusan sederhana tentang ke mana `NPC` harus bergerak pada setiap langkah simulasi.

`SteeringSensor.cs` berperan seperti **mata** `NPC`. Script ini melakukan `obstacle detection`, yaitu mendeteksi keberadaan `Obstacle` di sekitar `NPC`. Informasi dari sensor ini kemudian dapat digunakan oleh `SteeringAgent.cs` untuk menghindari tabrakan atau menyesuaikan arah gerak.

`SteeringDebug.cs` digunakan untuk **visualisasi debug**. Script ini dapat menampilkan `gizmos`, garis sensor, arah target, kecepatan, atau gaya steering. Visualisasi ini sangat penting karena mahasiswa dapat melihat apa yang sebenarnya "dilihat" dan "diproses" oleh `NPC` saat berjalan.

Keputusan untuk membuat praktikum modular juga memiliki tujuan jangka panjang. Struktur yang sama dapat digunakan kembali pada pertemuan berikutnya, misalnya ketika perilaku `NPC` dikembangkan lebih lanjut atau ketika parameter gerak diuji secara sistematis.

### Inti yang Harus Ditekankan

- `SteeringAgent.cs` adalah **inti perilaku gerak** `NPC` karena mengatur `movement`, `seek`, `arrive`, dan `wander`.
- `SteeringSensor.cs` menyediakan informasi lingkungan melalui `obstacle detection`, sehingga `NPC` dapat merespons `Obstacle`.
- `SteeringDebug.cs` membantu mahasiswa mengamati perilaku `NPC` secara visual melalui `gizmos` atau debug visualization.
- Struktur **modular** membuat praktikum lebih mudah dipahami, diuji, dan dikembangkan kembali.

### Transisi ke Slide Berikutnya

Setelah struktur script dipahami, langkah berikutnya adalah mengamati bagaimana perubahan parameter memengaruhi gerak `NPC`.

---

## Slide 060 - Eksperimen yang Dapat Dilakukan

### Narasi

Setelah komponen `SteeringAgent`, `SteeringSensor`, dan visualisasi debug sudah berjalan, tahap berikutnya bukan menambah fitur baru, tetapi menguji bagaimana **parameter** memengaruhi gerak agen. Eksperimen ini penting karena perilaku yang terlihat natural biasanya tidak muncul dari satu nilai tunggal, melainkan dari keseimbangan beberapa nilai yang saling memengaruhi.

Slide ini menampilkan parameter yang dapat diubah:

```text
maxSpeed
turnSpeed
slowRadius
stopRadius
wanderStrength
sensorDistance
avoidanceWeight
```

Parameter pertama berkaitan dengan **gerak dasar**. `maxSpeed` menentukan seberapa cepat agen bergerak, sedangkan `turnSpeed` menentukan seberapa cepat arah agen berubah. Jika `maxSpeed` terlalu besar, agen bisa terasa melompat atau sulit dikendalikan. Jika `turnSpeed` terlalu kecil, belokan menjadi lambat dan kaku. Jika `turnSpeed` terlalu besar, gerakan bisa terasa tajam atau bergetar.

Parameter berikutnya berkaitan dengan perilaku **arrive**. `slowRadius` adalah jarak di mana agen mulai mengurangi kecepatan, sedangkan `stopRadius` adalah jarak di mana agen berhenti. Jika `slowRadius` terlalu kecil, agen baru melambat saat sudah dekat target. Jika `stopRadius` terlalu besar, agen berhenti terlalu jauh. Kombinasi keduanya menentukan apakah agen berhenti mulus atau berhenti mendadak.

Parameter `wanderStrength` memengaruhi seberapa kuat gerakan acak yang ditambahkan pada arah gerak. Nilai kecil membuat agen tetap stabil, sedangkan nilai besar membuat agen tampak gelisah atau terlalu acak. Untuk `sensorDistance` dan `avoidanceWeight`, keduanya menentukan seberapa jauh dan seberapa kuat agen bereaksi terhadap obstacle. Jarak sensor yang terlalu pendek membuat agen baru menghindar saat sudah dekat, sementara bobot avoidance yang terlalu besar dapat membuat gerakan tidak stabil.

Cara eksperimen yang disarankan adalah mengubah **satu parameter pada satu waktu**, lalu mengamati perubahan perilaku. Mahasiswa dapat memperhatikan:

- apakah agen bergerak terlalu cepat?
- apakah belokan terlalu tajam atau terlalu lambat?
- apakah agen masih menabrak obstacle?
- apakah agen berhenti terlalu jauh dari target?
- apakah gerakan wander terlalu acak?

Tujuan utama slide ini adalah memahami bahwa kualitas perilaku game sangat dipengaruhi oleh **parameter tuning**. Nilai yang baik tidak selalu sama untuk semua scene, ukuran agent, kecepatan target, atau jarak obstacle. Oleh karena itu, mahasiswa perlu melatih intuisi: nilai parameter bukan sekadar angka, tetapi alat desain untuk membentuk karakter gerak agen.

### Inti yang Harus Ditekankan

- **Parameter tuning** adalah bagian penting dari desain perilaku agen, bukan sekadar pengujian teknis.
- Ubah satu parameter pada satu waktu agar mahasiswa dapat melihat hubungan sebab-akibat.
- Perilaku yang baik biasanya berasal dari keseimbangan `maxSpeed`, `turnSpeed`, `slowRadius`, `stopRadius`, `wanderStrength`, `sensorDistance`, dan `avoidanceWeight`.

### Transisi ke Slide Berikutnya

Setelah memahami bagaimana parameter membentuk gerak agen, kita akan merangkum seluruh konsep movement yang telah dibahas pada pertemuan ini.

---

## Slide 061 - Ringkasan Pertemuan

### Narasi

Slide ini menjadi penutup materi **Movement AI** dengan merangkum alur konsep yang sudah kita bangun.

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

Peta ini menunjukkan bahwa gerakan NPC yang natural tidak datang dari satu aturan tunggal, melainkan dari lapisan yang saling melengkapi.

- **Vector & Velocity** menjadi dasar matematis untuk menentukan arah, kecepatan, dan perubahan posisi.
- **Kinematic Movement** dan **Dynamic Movement** membedakan cara agent bergerak: yang pertama lebih langsung, yang kedua lebih memperhatikan gaya, massa, dan respons fisika.
- **Seek**, **Flee**, **Arrive**, **Pursue**, **Evade**, dan **Wander** adalah perilaku dasar yang memberi tujuan, jarak aman, penghaluan, dan variasi gerak.
- **Obstacle Avoidance** membantu agent menghindari rintangan lokal tanpa harus menghitung rute penuh.
- **Separation**, **Alignment**, dan **Cohesion** membentuk perilaku kelompok yang lebih hidup.
- **Combining Steering** adalah tahap penting karena perilaku yang meyakinkan biasanya muncul dari penimbangan beberapa aturan sekaligus.

Kalimat kunci pada slide perlu benar-benar dipahami:

> Movement yang terlihat “cerdas” sering muncul dari kombinasi beberapa aturan sederhana.

Artinya, mahasiswa tidak perlu langsung mencari satu solusi kompleks. Yang lebih penting adalah memahami bagaimana aturan kecil dapat digabungkan, diberi bobot, dan diuji sampai menghasilkan gerakan yang stabil dan natural.

### Inti yang Harus Ditekankan

- **Movement AI** dibangun dari dasar vektor, kecepatan, dan aturan gerak yang dapat dikombinasikan.
- Perilaku seperti `Seek`, `Flee`, `Arrive`, `Pursue`, `Evade`, dan `Wander` bukan pengganti satu sama lain, tetapi memiliki konteks penggunaan yang berbeda.
- **Obstacle avoidance** dan perilaku kelompok seperti **separation**, **alignment**, **cohesion** membantu NPC bergerak lebih natural dalam lingkungan yang dinamis.
- Kualitas gerakan sangat bergantung pada **parameter tuning** dan pengujian visual, bukan hanya pada keberadaan satu fungsi gerak.

### Transisi ke Slide Berikutnya

Dengan peta besar ini, kita akan masuk ke pertanyaan diskusi untuk menguji apakah mahasiswa sudah memahami kapan setiap perilaku digunakan, apa yang terjadi jika parameter tidak seimbang, dan mengapa debugging visual penting dalam pengembangan perilaku game.

---

## Slide 062 - Pertanyaan Diskusi

### Narasi

Slide ini bukan materi baru, tetapi ruang diskusi untuk memastikan mahasiswa tidak hanya menghafal nama perilaku gerak, tetapi memahami kapan perilaku tersebut tepat digunakan. Setelah pertemuan ini, mahasiswa seharusnya mampu menjelaskan mengapa satu aturan gerak tidak cukup untuk NPC yang realistis.

Delapan pertanyaan pada slide dapat dibaca sebagai tiga kelompok: perilaku dasar, interaksi antar-agent, dan keputusan implementasi di Unity.

1. **`Seek` dan masalah berhenti.** `Seek` mendorong agent terus menuju `target`, sehingga jika target dekat, agent bisa melewati target atau bergetar di sekitar titik akhir. Untuk NPC yang harus berhenti, kita perlu `Arrive` atau aturan radius berhenti.
2. **`Flee` versus `Evade`.** `Flee` bereaksi terhadap posisi ancaman saat ini, sedangkan `Evade` memperkirakan posisi ancaman di masa depan. `Evade` lebih tepat ketika pengejar bergerak cepat dan bisa memotong jalur.
3. **Obstacle avoidance versus pathfinding.** Obstacle avoidance bersifat lokal: agent menghindari rintangan yang terlihat di dekatnya. Pathfinding bersifat global: agent mencari rute dari posisi awal ke tujuan melalui representasi ruang.
4. **`cohesion` terlalu kuat.** Jika `cohesion` dominan, agent akan berkumpul terlalu rapat, membentuk gumpalan, dan kehilangan pola gerak alami.
5. **`separation` terlalu lemah.** Jika `separation` lemah, agent saling tumpang tindih, menabrak, atau terlihat seperti satu objek besar.
6. **Kapan memakai `Rigidbody`.** Gunakan `Rigidbody` ketika gerakan harus berinteraksi dengan fisika: gravitasi, tumbukan, gaya, atau objek dinamis. Untuk gerakan sederhana yang dikontrol langsung, `transform.position` atau `velocity` kinematik bisa lebih stabil.
7. **Custom steering versus `NavMeshAgent`.** `NavMeshAgent` praktis, tetapi custom steering memberi kontrol lebih atas `velocity`, blending perilaku, aturan khusus, dan perilaku non-NavMesh.
8. **Visual debugging.** Visual debugging penting karena gerakan yang aneh sering disebabkan oleh `velocity` salah, target salah, raycast tidak mengenai, atau bobot perilaku tidak seimbang.

### Inti yang Harus Ditekankan

- `Seek` memberi arah, tetapi `Arrive` memberi kemampuan berhenti.
- `Flee` adalah reaksi langsung; `Evade` adalah antisipasi.
- Obstacle avoidance menyelesaikan masalah lokal, pathfinding menyelesaikan masalah rute global.
- Keseimbangan `cohesion` dan `separation` menentukan kualitas gerak berkelompok.
- `Rigidbody` dipilih jika fisika game memengaruhi gerakan.
- Custom steering berguna ketika `NavMeshAgent` tidak cukup fleksibel.
- Visual debugging membantu mahasiswa melihat apa yang sebenarnya dihitung oleh sistem gerak.

### Transisi ke Slide Berikutnya

Dengan diskusi ini, mahasiswa diharapkan siap menaikkan level pembahasan dari movement lokal ke navigasi global. Pertemuan berikutnya kita akan membahas pathfinding dan navigation, di mana agent tidak hanya bereaksi terhadap target atau rintangan, tetapi juga memilih rute yang masuk akal.

---

## Slide 063 - Penutup

### Narasi

Pertemuan ini ditutup dengan satu pesan utama: mahasiswa perlu memahami **movement secara algoritmik** sebelum menggunakan sistem navigasi tingkat tinggi seperti `NavMeshAgent`. Artinya, sebelum agen bergerak mengikuti rute, ia harus mampu menghitung `direction`, mengatur `velocity`, melakukan `rotation`, berhenti dengan halus, dan menghindari tabrakan. Pemahaman ini penting karena perilaku gerak yang terlihat sederhana sebenarnya dibangun dari kombinasi aturan keputusan yang jelas.

Urutan demo yang disarankan adalah sebagai berikut:

```text
1. Gerakkan object tanpa kontrol otomatis
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

Urutan ini menunjukkan evolusi dari gerak manual menjadi gerak otonom yang lebih realistis. Langkah awal membantu mahasiswa melihat bagaimana `Vector3` menentukan arah dan kecepatan. Setelah itu, `Seek` memberi dorongan menuju target, tetapi sering menimbulkan **overshoot** jika target dekat. `Arrive` memperbaiki masalah tersebut dengan memperlembat gerakan saat mendekati target. `Wander` menambah variasi perilaku, sementara `Raycast` atau `SphereCast` memungkinkan deteksi rintangan di depan. Terakhir, `Obstacle Avoidance` dan `Separation` membuat beberapa NPC tidak saling menumpuk dan dapat menghindari objek di sekitar mereka.

Dengan dasar ini, mahasiswa tidak hanya menggunakan `NavMeshAgent` sebagai komponen siap pakai, tetapi juga memahami apa yang terjadi di balik pergerakannya. Pertemuan berikutnya akan memperluas pemahaman ini ke **pathfinding**, yaitu cara agen memilih rute melalui graph, node, edge, dan algoritma pencarian seperti `BFS`, `Dijkstra`, dan `A*`.

### Inti yang Harus Ditekankan

- Pahami **movement secara algoritmik** terlebih dahulu sebelum memakai `NavMeshAgent`.
- Urutan demo menunjukkan evolusi dari gerak sederhana menjadi perilaku otonom yang lebih realistis.
- Pertemuan berikutnya membahas **pathfinding**: `graph representation`, `node`, `edge`, `BFS`, `Dijkstra`, `A*`, `heuristic`, `waypoint`, `NavMesh` di Unity, `NavMeshAgent`, dan integrasi pathfinding dengan **steering**.

### Transisi ke Slide Berikutnya

Setelah mahasiswa memahami dasar movement dan steering, langkah berikutnya adalah membahas bagaimana agen menentukan rute melalui `graph representation`, `node`, `edge`, dan algoritma pencarian, lalu menghubungkannya dengan `NavMesh` di Unity dan `NavMeshAgent`.
