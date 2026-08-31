# Narasi Game Cerdas - Pertemuan 14

## Reinforcement Learning with Unity ML-Agents

Sumber: markdown/pert14.md

---

## Slide 001 - Cover

### Narasi

Selamat datang di Pertemuan 14 mata kuliah Game Cerdas. Pada pertemuan ini kita akan membahas **Reinforcement Learning with `Unity ML-Agents`**, yaitu pendekatan di mana **Agent** belajar mengambil keputusan melalui interaksi dengan lingkungan permainan. Fokus utamanya bukan langsung membuat agent yang sempurna, tetapi memahami bagaimana **Unity** dapat berperan sebagai `environment` yang menyediakan keadaan, menerima aksi, dan memberi umpan balik berupa reward.

Dalam konteks perilaku agent dalam game, mahasiswa perlu melihat hubungan antara **Agent**, **Observation**, **Action**, **Reward**, **Episode**, dan **Policy**. Agent mengamati keadaan lingkungan, memilih aksi, lalu lingkungan berubah dan memberikan reward. Proses berulang ini membentuk episode, sementara policy adalah strategi yang dipelajari agent untuk memilih aksi yang lebih baik seiring waktu. Pada slide ini, `PPO` hanya diperkenalkan secara konseptual sebagai salah satu algoritma policy optimization yang umum digunakan dalam reinforcement learning.

Agenda pertemuan ini juga mencakup `Unity ML-Agents` workflow, yaitu alur kerja untuk menyiapkan scene, komponen agent, observation, action, reward, dan proses training. Perlu ditegaskan bahwa praktikum terpisah akan membahas **Training agent menggunakan `Unity ML-Agents`**, sehingga pertemuan ini lebih menekankan pemahaman konsep dan arsitektur sebelum masuk ke implementasi teknis.

### Inti yang Harus Ditekankan

- **Unity** dapat berfungsi sebagai `environment` untuk reinforcement learning, bukan hanya sebagai platform rendering.
- Konsep inti yang harus dipahami adalah **Agent**, **Observation**, **Action**, **Reward**, **Episode**, dan **Policy**.
- `PPO` diperkenalkan secara konseptual sebagai algoritma yang membantu agent memperbaiki policy berdasarkan pengalaman.
- `Unity ML-Agents` workflow menjadi dasar untuk menghubungkan perilaku game dengan proses training agent.
- Praktikum training agent akan dibahas terpisah, sehingga fokus saat ini adalah memahami alur dan peran tiap komponen.

### Transisi ke Slide Berikutnya

Sebelum masuk ke konsep RL dengan `Unity ML-Agents`, kita akan meninjau kembali materi Pertemuan 13 untuk memastikan dasar machine learning, reinforcement learning, dan pengenalan `Unity ML-Agents` sudah terhubung dengan pembahasan hari ini.

---

## Slide 002 - Review Pertemuan 13

### Narasi

Slide ini menjadi titik awal sebelum masuk ke implementasi Unity ML-Agents. Pada pertemuan sebelumnya, kita sudah membangun peta besar **Machine Learning for Games**, yaitu dari **Supervised Learning** hingga **Reinforcement Learning**, serta istilah dasar seperti `State`, `Action`, `Reward`, `Q-Learning`, dan pengantar Unity ML-Agents.

Inti dari **Reinforcement Learning** adalah proses belajar melalui interaksi berulang. Agent tidak langsung diberi jawaban yang benar, tetapi mencoba `action`, lingkungan berubah, agent menerima `reward`, lalu `policy` diperbarui.

```text
Agent mencoba action
        ↓
Environment berubah
        ↓
Agent menerima reward
        ↓
Agent belajar policy
```

Alur ini penting karena nanti di Unity, scene game akan berperan sebagai environment, objek yang dikendalikan sebagai agent, input yang bisa dipilih sebagai action, dan skor atau kondisi menang-kalah sebagai reward.

### Inti yang Harus Ditekankan

- **Reinforcement Learning** belajar dari interaksi, bukan dari dataset label seperti supervised learning.
- Komponen minimum yang harus dipahami adalah `State`, `Action`, `Reward`, dan `policy`.
- Unity ML-Agents akan menjadi tempat konsep ini diwujudkan sebagai environment yang bisa dijalankan dan diamati.

### Transisi ke Slide Berikutnya

Setelah mengingat kembali konsep dasar tersebut, kita lanjut ke posisi pertemuan ini dalam alur pembelajaran, agar mahasiswa melihat bahwa materi ini adalah jembatan menuju praktik learning-based agent di Unity.

---

## Slide 003 - Posisi Pertemuan 14 dalam Rencana Pembelajaran

### Narasi

Slide ini menunjukkan posisi **Pertemuan 14** dalam alur pembelajaran mata kuliah **Game Cerdas**. Pertemuan ini berada pada titik penting karena menjadi jembatan dari pemahaman konseptual menuju praktik implementasi.

Alur pembelajaran dapat dibaca sebagai berikut:

1. **Pertemuan 13** membahas dasar-dasar **Machine Learning for Games**, termasuk konsep **Reinforcement Learning**.
2. **Pertemuan 14** memperdalam penerapan **Reinforcement Learning with Unity ML-Agents**.
3. **Pertemuan 15** melanjutkan ke **Advanced Game AI** dan pengembangan **Final Project**.
4. **Pertemuan 16** digunakan untuk **UAS Intelligent Game Project**.

Dengan posisi ini, **Pertemuan 14** bukan sekadar lanjutan teori, tetapi menjadi pengantar praktis menuju **learning-based agent di Unity**. Mahasiswa perlu memahami bahwa pertemuan ini mempersiapkan cara kerja agent yang belajar melalui interaksi dengan lingkungan game.

Sebelum masuk ke materi berikutnya, mahasiswa harus menyadari bahwa pertemuan ini menjadi fondasi untuk proyek akhir. Setelah konsep dasar **Reinforcement Learning** dipahami, langkah selanjutnya adalah melihat bagaimana konsep tersebut dapat diimplementasikan dalam lingkungan game.

### Inti yang Harus Ditekankan

- **Pertemuan 14** adalah titik transisi dari konsep **Reinforcement Learning** ke implementasi praktis di Unity.
- Alur pembelajaran bergerak dari konsep dasar, menuju praktik, kemudian pengembangan proyek, dan evaluasi akhir.
- Fokus pertemuan ini adalah pengantar menuju **learning-based agent** yang dapat belajar dalam lingkungan game.

### Transisi ke Slide Berikutnya

Setelah memahami posisi pertemuan ini dalam alur pembelajaran, langkah berikutnya adalah melihat mengapa **Unity ML-Agents** digunakan sebagai platform untuk membangun dan melatih agent dalam lingkungan Unity.

---

## Slide 004 - Mengapa Unity ML-Agents?

### Narasi

Kita sudah melihat posisi pertemuan ini sebagai pengantar praktis menuju **learning-based agent** di Unity. Pada slide ini, fokusnya adalah alasan mengapa **Unity ML-Agents** menjadi pilihan yang relevan untuk materi Game Cerdas.

Secara intuitif, Unity sering kita anggap sebagai engine untuk membangun scene, rendering, dan interaksi pemain. Namun, dalam konteks **reinforcement learning**, Unity dapat berperan sebagai **environment** atau simulator tempat agent belajar. `ML-Agents` menjadi jembatan antara scene Unity dan proses training, sehingga perilaku agent tidak hanya ditulis manual, tetapi dapat dilatih dari interaksi dengan environment.

Dalam reinforcement learning, agent belajar melalui tiga hal utama: **observation**, **action**, dan **reward**. Di Unity, `observation` bisa berupa posisi, jarak, sensor, atau state objek di scene. `action` bisa berupa gerakan, rotasi, lompat, atau perintah lain yang dapat dilakukan agent. `reward` adalah sinyal numerik yang menunjukkan apakah hasil tindakan agent baik atau buruk. Dengan kombinasi ini, agent dapat mencoba berbagai perilaku selama `episode`.

`ML-Agents` memungkinkan mahasiswa melakukan alur kerja berikut:

- membuat `agent` di Unity,
- mendefinisikan `observation` yang akan dibaca agent,
- mendefinisikan `action` yang dapat dilakukan agent,
- memberikan `reward` untuk perilaku yang diinginkan,
- menjalankan `episode` secara berulang,
- melatih `policy` dari data interaksi,
- menggunakan model hasil training kembali di dalam game.

Inti dari alur ini adalah **Unity menjadi simulator untuk reinforcement learning**. Mahasiswa tidak perlu membangun environment dari nol di luar Unity; scene, objek, fisika, dan logika game yang sudah ada dapat dimanfaatkan sebagai ruang belajar bagi agent. Hal ini penting karena kualitas `observation`, `action`, dan `reward` akan sangat memengaruhi kualitas `policy` yang dihasilkan.

Sebelum lanjut, mahasiswa perlu memahami bahwa `policy` adalah hasil belajar agent yang memetakan `observation` menjadi `action`. `policy` bukan sekadar aturan tetap yang ditulis developer, melainkan model yang terbentuk dari proses training. Karena itu, desain environment, batas episode, dan skema reward harus dibuat dengan jelas agar agent belajar perilaku yang sesuai tujuan game.

### Inti yang Harus Ditekankan

- Unity `ML-Agents` menjadikan Unity sebagai **environment** untuk reinforcement learning.
- Agent belajar melalui `observation`, `action`, dan `reward` yang didefinisikan di scene Unity.
- Alur kerja mencakup pembuatan agent, training `policy`, dan penggunaan model di game.
- Kualitas desain `observation`, `action`, dan `reward` menentukan kualitas perilaku agent.

### Transisi ke Slide Berikutnya

Setelah memahami alasan pemilihan Unity `ML-Agents`, langkah berikutnya adalah membandingkan pendekatan rule-based dengan `ML-Agents`, terutama dari sisi cara developer menentukan perilaku agent.

---

## Slide 005 - Rule-Based AI vs ML-Agents

### Narasi

Pada slide ini kita membandingkan dua cara membangun perilaku agent di game: **Rule-Based AI** dan **ML-Agents**. Intinya, pada pendekatan berbasis aturan, developer secara eksplisit menulis logika keputusan. Agent tidak “belajar” dari pengalaman; ia hanya menjalankan aturan yang sudah ditentukan.

Contoh sederhana dalam rule-based AI adalah:

```text
Jika target terlihat:
    kejar target
```

Artinya, developer menentukan kondisi `target terlihat` dan konsekuensinya `kejar target`. Jika kondisi tidak terpenuhi, agent tidak melakukan aksi tersebut. Pola ini mudah dipahami, mudah di-debug, dan cocok untuk perilaku yang jelas serta terbatas.

Namun, ketika situasi game menjadi lebih kompleks, aturan manual bisa menjadi sulit dipertahankan. Developer harus memikirkan banyak kondisi, prioritas, dan kombinasi perilaku. Di sinilah pendekatan berbasis pembelajaran seperti **ML-Agents** mulai relevan.

Dalam **ML-Agents**, developer tidak langsung menulis “jika A maka B”. Developer mendefinisikan ruang interaksi agent dengan lingkungan:

- **observation**: apa yang diamati agent,
- **action**: apa yang dapat dilakukan agent,
- **reward**: sinyal baik/buruk untuk mendorong perilaku yang diinginkan.

Setelah itu, agent dilatih melalui banyak episode. Prosesnya dapat digambarkan sebagai:

```text
Observation + Action + Reward
        ↓
Training
        ↓
Policy
```

Pada tahap **training**, agent mencoba berbagai action berdasarkan observation. Reward memberi umpan balik apakah perilaku tersebut mendekati tujuan. Hasil akhirnya adalah **policy**, yaitu strategi yang dipelajari agent untuk memilih action berdasarkan keadaan.

Perbedaan utamanya terletak pada sumber perilaku. Pada **Rule-Based AI**, perilaku berasal dari aturan yang ditulis developer. Pada **ML-Agents**, perilaku berasal dari proses pembelajaran terhadap lingkungan. Rule-based lebih deterministik dan mudah dikendalikan, sedangkan ML-Agents lebih fleksibel untuk masalah di mana aturan sulit ditulis secara lengkap.

Sebelum lanjut, mahasiswa perlu memahami bahwa ML-Agents bukan sekadar “membuat NPC pintar”. Ia adalah framework untuk melatih agent dalam environment Unity menggunakan **reinforcement learning**. Jadi, yang kita desain bukan hanya aksi, tetapi juga **observation**, **action space**, dan **reward** yang memungkinkan agent belajar.

### Inti yang Harus Ditekankan

- **Rule-Based AI** menggunakan aturan eksplisit yang ditulis developer, misalnya `Jika target terlihat: kejar target`.
- **ML-Agents** menggunakan pendekatan pembelajaran: agent belajar dari **observation**, **action**, dan **reward**.
- Hasil training ML-Agents adalah **policy**, yaitu strategi yang dipilih agent berdasarkan keadaan lingkungan.
- Rule-based lebih mudah dikendalikan dan di-debug; ML-Agents lebih cocok ketika perilaku sulit didefinisikan dengan aturan manual.

### Transisi ke Slide Berikutnya

Setelah memahami perbedaan konsepnya, langkah berikutnya adalah menentukan kapan pendekatan ML-Agents benar-benar cocok digunakan dalam proyek Game Cerdas.

---

## Slide 006 - Kapan Unity ML-Agents Cocok?

### Narasi

Slide ini membantu mahasiswa menentukan **kapan Unity ML-Agents masuk akal** digunakan. Setelah slide sebelumnya membedakan pendekatan berbasis aturan dengan pendekatan pembelajaran, fokusnya sekarang adalah pemilihan teknik. **Unity ML-Agents** paling relevan ketika perilaku agent lebih baik diperoleh dari percobaan berulang daripada ditulis sebagai aturan eksplisit.

Intuisi praktisnya sederhana: gunakan **ML-Agents** jika kita dapat mendefinisikan apa yang diamati agent, `action` apa yang tersedia, dan `reward` apa yang menunjukkan keberhasilan. Dalam skenario seperti itu, agent tidak perlu diberi arahan langkah demi langkah; ia belajar membentuk `policy` dari interaksi dengan environment.

Beberapa kasus yang cocok untuk **Unity ML-Agents** antara lain:

- **Agent belajar mencapai target**: agent diberi `reward` ketika mendekati atau mencapai target, dan penalti jika terlalu lama atau gagal.
- **Agent menghindari obstacle**: agent belajar memilih gerakan yang aman, misalnya `reward` untuk bergerak tanpa tabrakan.
- **Robot balancing**: agent belajar menjaga keseimbangan dari sensor atau `state` lingkungan, cocok untuk kontrol kontinu.
- **NPC belajar navigasi sederhana**: agent dapat belajar bergerak menuju area tertentu dalam environment terbatas.
- **Agent belajar strategi sederhana**: agent memilih `action` berdasarkan `state` yang terbatas, misalnya menyerang, mundur, atau menunggu.
- **Eksperimen RL dalam environment visual**: mahasiswa dapat melihat proses training secara langsung di Unity.
- **Simulasi perilaku**: environment dapat digunakan untuk menguji perilaku yang muncul dari interaksi agent dengan lingkungan.

Penting untuk menekankan bahwa **ML-Agents** bukan pengganti total teknik klasik. Untuk mata kuliah Game Cerdas S1, pendekatan ini paling tepat sebagai **pengenalan konsep RL modern**. Mahasiswa perlu memahami bahwa agent belajar dari `observation`, `action`, dan `reward`, tetapi hasil belajar biasanya probabilistik dan perlu dievaluasi. Jika perilaku bisa dibuat jelas, deterministik, dan mudah dikontrol, teknik seperti `FSM`, `Behavior Tree`, atau `NavMesh` sering kali lebih praktis.

Jadi, sebelum lanjut, mahasiswa harus bisa membedakan dua hal: **kapan pembelajaran lebih berguna** dan **kapan aturan manual lebih efisien**. Slide ini memberi gambaran kasus yang cocok, sementara batasannya akan dibahas lebih lanjut.

### Inti yang Harus Ditekankan

- **Unity ML-Agents** cocok ketika perilaku agent sulit ditulis sebagai aturan, tetapi `reward` dan environment dapat didefinisikan dengan jelas.
- Contoh kasus yang relevan: mencapai target, menghindari obstacle, balancing, navigasi sederhana, strategi sederhana, eksperimen visual, dan simulasi perilaku.
- Untuk Game Cerdas S1, **ML-Agents** berfungsi sebagai pengenalan RL modern, bukan menggantikan `FSM`, `Behavior Tree`, atau `NavMesh` sepenuhnya.

### Transisi ke Slide Berikutnya

Setelah memahami kasus yang cocok, kita perlu melihat batasannya: kapan **ML-Agents** justru tidak perlu dan teknik klasik lebih praktis.

---

## Slide 007 - Kapan ML-Agents Tidak Perlu?

### Narasi

Pada slide ini, kita membalik sudut pandang dari pembahasan sebelumnya. **ML-Agents** bukan solusi default untuk semua perilaku agent. Pertanyaan desain yang penting adalah: apakah perilaku yang diinginkan sudah bisa dinyatakan dengan aturan yang jelas? Jika ya, teknik klasik sering lebih praktis dan lebih mudah dikendalikan.

Intuisi praktisnya adalah **ML-Agents** membawa biaya tambahan. Ada proses training, desain reward, observasi, action space, episode, dan hasil yang probabilistik. Untuk perilaku sederhana, biaya ini bisa tidak sebanding dengan manfaat yang diperoleh.

Kasus yang biasanya tidak memerlukan **ML-Agents** antara lain:

- **patrol sederhana**, misalnya agent bergerak antar waypoint;
- **chase player**, misalnya agent mengikuti target dengan `NavMeshAgent` atau steering;
- **attack dengan jarak**, misalnya cek jarak lalu eksekusi action;
- **pathfinding ke target**, misalnya menggunakan `NavMesh` atau `NavMeshAgent`;
- **decision tree sederhana**, misalnya cabang kondisi yang sudah jelas;
- **perilaku taktis yang perlu kontrol penuh**, misalnya desainer ingin hasil deterministik dan mudah di-debug.

Teknik klasik seperti `FSM`, `Behavior Tree`, utility-based decision, dan `NavMesh` sering sudah cukup untuk perilaku yang bisa dirumuskan secara eksplisit. Keunggulannya adalah perilaku lebih stabil, lebih mudah diuji, dan lebih mudah disesuaikan oleh tim desain.

Jika behavior bisa dibuat jelas dengan `FSM`, `Behavior Tree`, utility-based decision, dan `NavMesh`, maka **ML-Agents** mungkin terlalu kompleks. Mahasiswa perlu memahami bahwa memilih teknik bukan soal mana yang lebih modern, tetapi mana yang memenuhi kebutuhan desain, mudah diuji, dan dapat dikendalikan.

Poin penting sebelum lanjut adalah membedakan perilaku yang **skripable** dan perilaku yang perlu belajar dari lingkungan. Untuk perilaku skripable, gunakan teknik klasik. Untuk perilaku yang sulit dirumuskan aturan, baru pertimbangkan **ML-Agents**.

### Inti yang Harus Ditekankan

- **ML-Agents** bukan default untuk perilaku sederhana.
- Teknik klasik lebih praktis untuk patrol, chase, attack, pathfinding, decision sederhana, dan kontrol penuh.
- Jika perilaku bisa dinyatakan dengan `FSM`, `Behavior Tree`, utility-based decision, dan `NavMesh`, **ML-Agents** bisa terlalu kompleks.
- Keputusan desain harus mempertimbangkan kejelasan, stabilitas, kemudahan debugging, dan kebutuhan produksi.

### Transisi ke Slide Berikutnya

Setelah memahami batas penggunaan **ML-Agents**, slide berikutnya akan merangkum capaian pembelajaran pertemuan ini, termasuk konsep agent, environment, reward, policy, dan praktikum sederhana.

---

## Slide 008 - Capaian Pembelajaran Pertemuan

### Narasi

Slide ini merangkum **capaian pembelajaran** pertemuan ke-14. Setelah mengikuti materi, mahasiswa diharapkan tidak hanya hafal istilah, tetapi mampu menjelaskan bagaimana **Unity ML-Agents** bekerja dalam konteks pengembangan game.

Secara garis besar, capaian ini dapat dikelompokkan menjadi tiga lapisan:

- **Pemahaman konsep dasar**: mahasiswa mampu menjelaskan `agent`, `environment`, `observation`, `action`, `reward`, `episode`, dan `policy` sebagai elemen inti dari reinforcement learning.
- **Pemahaman proses dan arsitektur**: mahasiswa mampu menjelaskan workflow training, peran `Behavior Parameters`, `Decision Requester`, desain `reward`, serta konsep dasar `PPO` dan proses `inference`.
- **Kemampuan praktis**: mahasiswa mampu mendesain `environment` training sederhana, mengidentifikasi masalah umum saat training, dan merancang praktikum menggunakan Unity ML-Agents.

Dengan capaian ini, mahasiswa memiliki dasar yang cukup untuk membedakan kapan pendekatan klasik masih lebih praktis dan kapan model pembelajaran perlu digunakan.

### Inti yang Harus Ditekankan

- Capaian utama bukan sekadar mengenal Unity ML-Agents, tetapi memahami alur dari `observation` menuju `action` dan `reward`.
- Mahasiswa harus mampu menghubungkan konsep `policy`, `reward design`, dan `training pipeline` dengan perilaku agent di Unity.
- Kemampuan praktis diarahkan pada desain `environment` sederhana, identifikasi masalah training, dan perancangan praktikum yang terukur.

### Transisi ke Slide Berikutnya

Selanjutnya, kita mulai dari definisi **Unity ML-Agents** dan komponen utamanya, agar capaian pembelajaran ini dapat dijelaskan secara lebih konkret.

---

## Slide 009 - Apa Itu Unity ML-Agents?

### Narasi

**Unity ML-Agents** adalah toolkit yang memungkinkan pengembangan dan pelatihan **agent cerdas** di Unity menggunakan **machine learning**. Dalam konteks game, toolkit ini menjadi jembatan antara dunia game yang dibangun di Unity dan proses pembelajaran yang biasanya dijalankan di luar Unity.

Secara intuitif, Unity menyediakan **environment** berupa scene, objek, fisika, dan aturan interaksi. Agent kemudian ditempatkan di dalam environment tersebut untuk mengamati keadaan, memilih tindakan, dan menerima umpan balik. Dengan cara ini, perilaku agent tidak hanya ditulis manual, tetapi dapat dilatih berdasarkan pengalaman.

Komponen utama yang perlu dipahami adalah:

- **Unity environment**: lingkungan game tempat agent berinteraksi.
- `agent script`: komponen yang menghubungkan agent dengan sistem ML-Agents.
- `observation`: data yang diterima agent dari environment.
- `action`: pilihan tindakan yang dapat dilakukan agent.
- `reward`: sinyal umpan balik yang menunjukkan kualitas tindakan.
- `trainer`: proses pelatihan yang memperbarui kebijakan agent.
- `policy model`: model hasil pelatihan yang digunakan agent untuk mengambil keputusan.

Dalam alur pelatihan, Unity menjalankan environment dan mengirim `observation` ke sistem pelatihan. `trainer` yang biasanya berbasis Python kemudian memproses data tersebut dan menghasilkan `action` yang dikirim kembali ke Unity. Environment lalu berubah, `reward` diberikan, dan proses ini berulang hingga `policy model` menjadi lebih baik.

Setelah pelatihan selesai, `policy model` dapat digunakan kembali di Unity. Artinya, agent tidak lagi membutuhkan proses pelatihan yang berat saat game berjalan; agent cukup memuat model hasil pelatihan dan mengambil keputusan berdasarkan `observation` yang diterima.

Poin penting yang harus dipahami mahasiswa adalah bahwa **Unity ML-Agents** bukan hanya sekadar script tambahan di Unity. Toolkit ini mendefinisikan hubungan antara environment, agent, `observation`, `action`, `reward`, dan `policy model`. Jika komponen-komponen ini tidak dirancang dengan jelas, proses pelatihan akan sulit menghasilkan perilaku yang diinginkan.

### Inti yang Harus Ditekankan

- **Unity ML-Agents** menghubungkan Unity dengan pipeline pelatihan machine learning.
- Komponen utamanya adalah environment, `agent script`, `observation`, `action`, `reward`, `trainer`, dan `policy model`.
- Training biasanya menggunakan pipeline berbasis Python, sedangkan Unity berperan sebagai environment.
- Hasil training berupa `policy model` yang dapat dimuat kembali di Unity untuk inferensi.

### Transisi ke Slide Berikutnya

Setelah memahami apa itu Unity ML-Agents dan komponen utamanya, langkah berikutnya adalah memahami konsep dasar reinforcement learning yang menjadi dasar perilaku agent.

---

## Slide 010 - Konsep Dasar Reinforcement Learning

### Narasi

Slide ini menjelaskan kerangka dasar **Reinforcement Learning** sebagai model belajar berbasis interaksi. Sebelum membahas detail Unity ML-Agents, mahasiswa perlu memahami bahwa proses belajar terjadi karena agent terus mencoba, menerima umpan balik, dan memperbaiki perilakunya.

```text
Agent
Environment
State / Observation
Action
Reward
Policy
Episode
```

Istilah-istilah ini membentuk satu sistem yang saling terhubung:

- **Agent** adalah entitas yang membuat keputusan.
- **Environment** adalah dunia atau aturan tempat agent berinteraksi.
- **State / Observation** adalah informasi yang diketahui agent pada suatu saat.
- **Action** adalah pilihan yang dilakukan agent.
- **Reward** adalah umpan balik numerik dari lingkungan.
- **Policy** adalah cara agent memilih action berdasarkan observation.
- **Episode** adalah satu rangkaian interaksi dari awal hingga selesai.

Dalam konteks game, hubungan ini dapat dibayangkan sebagai karakter yang belajar bergerak di scene. Karakter melihat posisi, jarak, atau kondisi tertentu, lalu memilih gerakan. Scene dan aturan fisika kemudian mengubah keadaan, dan sistem memberi reward jika perilaku tersebut mendekati tujuan.

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

Alur ini penting karena menunjukkan bahwa belajar tidak terjadi sekali, melainkan melalui loop:

1. Agent membaca `State / Observation`.
2. Agent memilih `Action` berdasarkan `Policy`.
3. `Environment` merespons dan berubah.
4. Agent menerima `Reward`.
5. Agent memperbarui `Policy` agar keputusan berikutnya lebih baik.

```text
memaksimalkan total reward
```

Tujuan utama agent bukan hanya mendapat reward di satu langkah, tetapi memaksimalkan **total reward** sepanjang episode. Reward yang baik biasanya dirancang agar agent belajar perilaku yang diinginkan, misalnya mendekati target, menghindari rintangan, atau menyelesaikan tugas dengan efisien.

Sebelum lanjut, hal yang harus dipahami adalah bahwa `Policy` adalah inti dari pembelajaran. Agent tidak sekadar menjalankan skenario manual, tetapi membentuk strategi berdasarkan pengalaman.

### Inti yang Harus Ditekankan

- **Reinforcement Learning** adalah proses belajar melalui interaksi berulang antara `Agent` dan `Environment`.
- `Action` dipilih berdasarkan `Policy`, lalu menghasilkan perubahan lingkungan dan `Reward`.
- `Reward` adalah sinyal belajar, bukan tujuan satu langkah; yang dioptimalkan adalah total reward.
- `Episode` memberi struktur percobaan agar agent dapat belajar dari awal hingga akhir.

### Transisi ke Slide Berikutnya

Dengan kerangka ini, kita sudah tahu apa saja yang terlibat dalam proses belajar. Selanjutnya, kita akan fokus pada `Agent`, yaitu entitas yang dalam Unity biasanya diwakili oleh GameObject dan script yang menerima observation, mengeluarkan action, serta menerima reward.

---

## Slide 011 - Agent

### Narasi

**Agent** adalah pusat keputusan dalam reinforcement learning. Ia bukan sekadar objek yang bergerak di dalam game, melainkan entitas yang mengamati situasi, memilih tindakan, dan menerima konsekuensi dari tindakan tersebut. Dalam konteks game, agent dapat berupa karakter yang belajar menghindari rintangan, NPC yang belajar merespons pemain, atau unit yang belajar strategi sederhana.

Dalam Unity, agent biasanya diimplementasikan sebagai `GameObject` yang memiliki script turunan dari `Agent`. Artinya, agent tidak harus menjadi seluruh objek; ia adalah bagian dari objek yang bertanggung jawab atas perilaku belajar. `GameObject` menyediakan posisi, transformasi, dan interaksi dengan scene, sedangkan komponen agent menyediakan antarmuka untuk proses pengambilan keputusan.

Secara praktis, agent memiliki beberapa peran utama:

- menerima `observation` dari environment,
- memilih `action` berdasarkan policy yang sedang dipelajari,
- menerima `reward` sebagai umpan balik,
- menjalankan satu `episode` sampai kondisi selesai.

Peran ini membuat agent menjadi penghubung antara dunia game dan proses pembelajaran.

`Observation` adalah informasi yang dilihat oleh agent. Dalam game, observasi bisa berupa jarak ke target, posisi obstacle, kecepatan, atau status kesehatan. Agent tidak perlu memahami seluruh scene secara eksplisit; ia hanya membutuhkan informasi yang relevan untuk mengambil keputusan.

`Action` adalah keputusan yang dieksekusi oleh agent. Contoh action bisa berupa `move`, `jump`, `turn`, `shoot`, atau `idle`. Setiap action mengubah kondisi environment, dan perubahan itu akan kembali menjadi observasi baru. Dengan cara ini, agent belajar dari konsekuensi tindakannya.

`Reward` adalah sinyal numerik yang menunjukkan apakah tindakan agent mendekati tujuan. Reward tidak harus selalu positif; agent juga bisa menerima reward negatif untuk perilaku yang tidak diinginkan. Tujuan jangka panjang agent adalah memperbaiki policy agar total reward selama episode menjadi lebih besar.

Contoh agent dalam game sangat beragam: robot, karakter, mobil, drone, NPC, bola, atau unit game. Intinya, selama entitas tersebut dapat mengamati lingkungan, memilih tindakan, dan menerima umpan balik, ia dapat berperan sebagai agent dalam reinforcement learning.

### Inti yang Harus Ditekankan

- **Agent** adalah entitas pembuat keputusan, bukan sekadar objek visual.
- Dalam Unity, agent umumnya berupa komponen script turunan `Agent` pada `GameObject`.
- Agent berinteraksi melalui `observation`, `action`, `reward`, dan `episode`.
- Tujuan agent adalah memperbaiki policy untuk memaksimalkan total reward.

### Transisi ke Slide Berikutnya

Setelah memahami siapa yang belajar, langkah berikutnya adalah memahami di mana agent belajar. Slide berikutnya akan membahas **environment**, yaitu dunia atau arena yang menyediakan kondisi, aturan, dan tantangan bagi agent.

---

## Slide 012 - Environment

### Narasi

**Environment** adalah ruang atau dunia tempat **agent** berinteraksi dan belajar. Dalam konteks Game Cerdas, environment bukan sekadar latar visual, melainkan sistem yang menentukan apa yang dapat diamati agent, apa yang dapat dilakukan agent, dan bagaimana konsekuensi dari setiap tindakan tersebut.

Dalam Unity, environment dapat berupa:

- arena,
- level,
- grid world,
- maze,
- platform,
- racing track,
- combat arena.

Bentuk environment ini menentukan jenis perilaku yang akan dilatih. Misalnya, maze mendorong agent belajar **pathfinding**, racing track mendorong agent belajar **steering** dan pengendalian kecepatan, sedangkan combat arena dapat mendorong agent belajar **decision making** dalam situasi yang lebih dinamis.

Environment menyediakan komponen penting bagi proses pembelajaran, yaitu:

- kondisi awal,
- target,
- obstacle,
- aturan `reward`,
- kondisi selesai `episode`.

Komponen-komponen ini menjadi dasar bagi agent untuk memahami apa yang harus dicapai, apa yang harus dihindari, dan kapan satu percobaan dianggap selesai.

Contoh sederhana:

```text
Agent harus mencapai target di arena
tanpa jatuh atau menabrak obstacle.
```

Pada contoh ini, **target** menjadi tujuan utama, **obstacle** menjadi batasan, dan aturan `reward` memberi sinyal apakah agent bergerak ke arah yang benar atau tidak. Jika agent mencapai target, episode dapat dianggap berhasil. Jika agent jatuh atau menabrak obstacle, episode dapat di-reset agar agent mencoba lagi.

Dari sisi desain game, environment menentukan ruang keputusan agent. Semakin jelas target, obstacle, dan aturan `reward`, semakin mudah agent membentuk perilaku yang diinginkan. Environment juga memengaruhi apa yang dapat dibaca agent sebagai `observation`, misalnya posisi target, jarak ke obstacle, atau status jatuh.

Sebelum lanjut, mahasiswa perlu memahami bahwa environment adalah “aturan main” bagi learning agent. Agent tidak belajar dari instruksi eksplisit, tetapi dari interaksi berulang dengan environment.

### Inti yang Harus Ditekankan

- **Environment** adalah dunia simulasi tempat agent belajar dan berinteraksi.
- Environment menyediakan kondisi awal, target, obstacle, aturan `reward`, dan kondisi selesai `episode`.
- Desain environment menentukan kualitas sinyal pembelajaran dan perilaku yang dapat dibentuk agent.

### Transisi ke Slide Berikutnya

Setelah memahami peran environment sebagai ruang belajar, langkah berikutnya adalah melihat bagaimana agent dan environment disusun dalam scene Unity.

---

## Slide 013 - Agent dan Environment dalam Unity

### Narasi

Pada slide ini kita masuk ke representasi konkret dari **agent** dan **environment** dalam Unity. Setelah sebelumnya kita memahami bahwa **environment** adalah dunia tempat agent belajar, sekarang kita melihat bagaimana dunia itu disusun sebagai scene Unity yang sederhana namun sudah cukup untuk proses belajar.

Struktur scene yang ditampilkan adalah sebagai berikut:

```text
TrainingArea
├── Ground
├── Agent
├── Target
├── Obstacle
└── Boundary
```

Dalam struktur ini, `TrainingArea` berfungsi sebagai root atau wadah utama scene. Di dalamnya terdapat beberapa objek yang memiliki peran berbeda. `Ground` menjadi area dasar tempat agent berada. `Agent` adalah entitas yang akan belajar. `Target` adalah tujuan yang ingin dicapai. `Obstacle` adalah hambatan yang membuat tugas tidak sepele. `Boundary` adalah batas area agar agent tidak bergerak keluar dari ruang belajar.

Peran **agent** di sini sangat penting. Agent bukan sekadar objek yang diam, tetapi entitas yang melakukan keputusan. Dalam contoh sederhana ini, agent melakukan beberapa hal:

1. membaca posisi target,
2. memilih arah gerak,
3. bergerak,
4. mendapat reward jika berhasil,
5. episode di-reset jika gagal.

Urutan ini menunjukkan pola dasar belajar berbasis percobaan. Agent tidak langsung tahu cara terbaik menuju target. Ia mencoba, melihat hasil, lalu memperbaiki perilakunya melalui banyak episode. Jika agent berhasil mencapai target, ia mendapat reward. Jika gagal, misalnya menabrak obstacle atau keluar dari boundary, episode di-reset agar agent dapat mencoba lagi dari kondisi awal.

Di sinilah peran **environment** menjadi sangat menentukan. Environment tidak hanya berupa visual scene, tetapi juga aturan permainan. `Target` memberi tujuan, `Obstacle` memberi tantangan, `Boundary` memberi batasan, dan mekanisme reward serta reset memberi sinyal apakah tindakan agent berhasil atau gagal. Jika environment didesain terlalu ambigu, agent akan kesulitan memahami apa yang harus dilakukan. Sebaliknya, jika environment konsisten dan jelas, agent dapat belajar lebih cepat.

Sebagai intuisi praktis, bayangkan scene ini seperti arena latihan. Agent adalah pemain yang sedang belajar, target adalah bendera yang harus diraih, obstacle adalah rintangan, dan boundary adalah pagar arena. Setiap episode adalah satu kali percobaan. Semakin banyak percobaan yang dilakukan dengan aturan yang jelas, semakin baik agent memahami hubungan antara tindakan dan hasilnya.

### Inti yang Harus Ditekankan

- `TrainingArea` adalah struktur scene utama yang memuat `Ground`, `Agent`, `Target`, `Obstacle`, dan `Boundary`.
- `Agent` adalah entitas yang melakukan keputusan: membaca target, memilih arah, bergerak, dan menerima reward.
- `Environment` menyediakan tujuan, hambatan, batas area, reward, dan reset episode.
- Desain environment harus konsisten dan jelas agar agent dapat belajar dari banyak percobaan.

### Transisi ke Slide Berikutnya

Setelah kita memahami struktur agent dan environment dalam Unity, langkah berikutnya adalah menentukan apa yang diketahui agent dari environment. Informasi inilah yang disebut **observation**, dan kualitasnya sangat memengaruhi kemampuan agent untuk belajar.

---

## Slide 014 - Observation

### Narasi

Pada slide ini kita membahas **Observation** dalam **Unity ML-Agents**. Observation adalah informasi yang diberikan kepada agent tentang keadaan environment. Dengan kata lain, observation adalah data yang bisa dibaca agent sebelum ia memilih tindakan.

Observation menjawab pertanyaan sederhana:

```text
Apa yang diketahui agent tentang environment?
```

Pertanyaan ini penting karena agent tidak selalu mengetahui seluruh isi dunia secara langsung. Agent hanya dapat belajar dan bertindak berdasarkan informasi yang tersedia. Jika agent ingin bergerak ke target, ia harus diberi data yang cukup, misalnya posisi target, jarak ke target, atau arah ke target.

Dalam scene sederhana, observation dapat berupa:

- `posisi agent`
- `posisi target`
- `arah ke target`
- `jarak ke target`
- `velocity agent`
- `raycast sensor`
- `posisi obstacle`
- `health`
- `ammo`

Setiap nilai tersebut menjadi bagian dari input keputusan agent. Misalnya, `jarak ke target` membantu agent memahami seberapa dekat ia dengan tujuan. `arah ke target` membantu agent memilih aksi gerak yang lebih tepat. `raycast sensor` membantu agent mengenali adanya obstacle di depan sebelum ia bergerak.

Observation sangat memengaruhi kemampuan belajar agent. Jika observation terlalu sedikit, agent tidak memiliki cukup informasi untuk belajar. Jika observation terlalu banyak atau tidak relevan, agent dapat kesulitan menemukan pola penting. Karena itu, observation bukan sekadar daftar data, melainkan bagian dari desain perilaku agent.

Sebelum lanjut, mahasiswa perlu memahami bahwa observation adalah jembatan antara environment dan keputusan agent. Environment menyediakan keadaan dunia, agent membaca keadaan itu melalui observation, lalu memilih `action` berdasarkan apa yang ia ketahui.

### Inti yang Harus Ditekankan

- **Observation** adalah informasi yang diketahui agent tentang environment.
- Observation menentukan seberapa baik agent dapat belajar dan mengambil keputusan.
- Contoh observation meliputi posisi, arah, jarak, velocity, sensor, obstacle, health, dan ammo.
- Observation harus dirancang sebagai input yang bermakna bagi perilaku agent, bukan sekadar data mentah.

### Transisi ke Slide Berikutnya

Setelah memahami apa itu observation, langkah berikutnya adalah menilai apakah observation tersebut sudah cukup dan relevan untuk tugas yang diberikan.

---

## Slide 015 - Observation Harus Relevan

### Narasi

Pada slide ini, kita membahas kualitas **observation** yang diberikan kepada **agent**. Observation bukan sekadar kumpulan data yang dikirim ke agent, tetapi informasi yang harus cukup untuk membantu agent mengambil **action** yang tepat. Dalam reinforcement learning, agent belajar dari hubungan antara **observation**, **action**, dan **reward**. Jika observation tidak relevan, agent akan kesulitan memahami mengapa suatu action menghasilkan reward tertentu.

Observation yang baik perlu memenuhi beberapa kriteria penting:

- **Cukup untuk menyelesaikan tugas**, artinya agent memiliki informasi yang dibutuhkan untuk membuat keputusan.
- **Tidak terlalu sedikit**, karena agent tidak bisa belajar jika informasi penting tidak tersedia.
- **Tidak terlalu berlebihan**, karena data yang tidak relevan dapat membuat proses belajar menjadi lebih lambat atau tidak stabil.
- **Mudah dipelajari**, artinya pola dalam observation dapat dipahami oleh algoritma pembelajaran.
- **Memiliki skala nilai yang wajar**, sehingga nilai yang terlalu besar atau terlalu kecil tidak mengganggu proses optimasi.

Kita bisa melihat contoh buruknya. Misalnya, agent diberi tugas untuk mencapai target, tetapi observation yang diberikan tidak memuat posisi target.

```text
Agent harus mencapai target,
tetapi tidak diberi posisi target.
```

Dalam kondisi ini, agent tidak memiliki dasar yang cukup untuk memilih arah gerak. Agent mungkin hanya melihat posisi dirinya sendiri, kecepatan, atau kondisi internal, tetapi tidak tahu ke mana harus bergerak. Akibatnya, agent akan belajar dengan sangat lambat, bahkan mungkin tidak berhasil menemukan strategi yang baik.

Sebaliknya, contoh yang lebih baik adalah memberikan informasi posisi target relatif terhadap agent.

```text
Agent diberi posisi target relatif terhadap dirinya.
```

Dengan informasi ini, agent dapat memahami arah dan jarak menuju target. Agent tidak perlu mengetahui seluruh posisi dunia secara detail; yang penting adalah informasi yang relevan untuk keputusan yang harus diambil. Dalam konteks Unity ML-Agents, ini berarti **sensor** atau sistem observation harus dirancang sedemikian rupa agar memberikan data yang benar-benar dibutuhkan agent.

Secara intuitif, observation dapat dibayangkan seperti informasi yang diterima pemain dalam game. Jika pemain tidak diberi petunjuk arah, peta, atau posisi target, pemain juga akan kesulitan mencapai tujuan. Begitu pula dengan agent berbasis reinforcement learning. Semakin relevan observation, semakin mudah agent belajar. Sebaliknya, jika observation terlalu banyak berisi data yang tidak penting, agent bisa “bingung” karena harus memproses banyak sinyal yang tidak membantu.

Sebelum lanjut ke pembahasan berikutnya, mahasiswa perlu memahami bahwa desain observation adalah bagian penting dari desain agent. Kita tidak boleh hanya memikirkan reward atau action, tetapi juga memastikan agent “melihat” hal yang tepat. Observation yang relevan adalah fondasi agar agent dapat belajar perilaku yang berguna dalam environment.

### Inti yang Harus Ditekankan

- **Observation harus relevan** dengan tugas yang harus diselesaikan oleh agent.
- Observation yang terlalu sedikit membuat agent tidak memiliki informasi cukup, sedangkan observation yang terlalu banyak dapat memperlambat pembelajaran.
- Nilai observation sebaiknya memiliki **skala yang wajar** agar mudah dipelajari oleh algoritma.
- Contoh penting: jika agent harus mencapai target, maka informasi posisi atau arah target harus tersedia.

### Transisi ke Slide Berikutnya

Setelah memahami bahwa observation harus relevan, kita akan melihat dua bentuk penyajian informasi yang umum digunakan, yaitu **absolute observation** dan **relative observation**, serta mengapa relative observation sering lebih berguna dalam banyak situasi game.

---

## Slide 016 - Absolute vs Relative Observation

### Narasi

Pada slide ini kita membandingkan dua cara memberi informasi posisi kepada **agent** dalam lingkungan game.

**Absolute observation** memberi koordinat dunia secara langsung.

```text
Agent position = (10, 0, 3)
Target position = (15, 0, 8)
```

Dengan cara ini, agent tahu posisi dirinya dan posisi target dalam ruang dunia. Informasi ini berguna jika tugas memang bergantung pada koordinat global, misalnya agent harus menuju titik tertentu di peta.

**Relative observation** memberi hubungan antar objek, bukan koordinat mutlak.

```text
Direction to target = target position - agent position
```

Dari contoh sebelumnya, arah ke target adalah:

```text
(15, 0, 8) - (10, 0, 3) = (5, 0, 5)
```

Artinya, target berada 5 unit ke arah positif X dan 5 unit ke arah positif Z relatif terhadap agent. Agent tidak perlu mengetahui koordinat dunia secara eksplisit; ia cukup memahami bahwa target berada di arah tertentu dari dirinya.

Relative observation sering lebih berguna karena agent belajar **hubungan antar objek**, bukan posisi dunia tertentu. Pola yang dipelajari lebih mudah dipindahkan ke situasi lain, misalnya target berpindah tempat atau agent memulai dari posisi berbeda.

Dalam konteks perilaku NPC, cara ini cocok untuk tugas seperti mengejar target, menjaga jarak, atau mengarahkan gerak ke objek tertentu. Agent lebih fokus pada "target di mana relatif terhadap saya" daripada "target berada di koordinat berapa".

Contoh implementasi di Unity:

```csharp
Vector3 toTarget = target.position - transform.position;
sensor.AddObservation(toTarget);
```

Pada potongan kode ini:

- `target.position` adalah posisi dunia objek target.
- `transform.position` adalah posisi dunia agent.
- `target.position - transform.position` menghasilkan vektor arah dari agent menuju target.
- `sensor.AddObservation(toTarget)` menambahkan vektor tersebut sebagai observation yang akan digunakan agent.

Hasilnya, agent menerima informasi spasial yang langsung relevan: arah dan jarak relatif ke target. Ini lebih ringkas dan lebih bermakna untuk keputusan gerak dibandingkan memberi dua koordinat mutlak secara terpisah.

Sebelum lanjut, mahasiswa perlu memahami bahwa pilihan observation menentukan apa yang bisa dipelajari agent. Observation yang relevan membantu agent memahami tugas; observation yang tidak relevan atau terlalu global dapat membuat pembelajaran menjadi kurang efektif.

### Inti yang Harus Ditekankan

- **Absolute observation** memberi koordinat dunia, misalnya posisi agent dan posisi target secara terpisah.
- **Relative observation** memberi vektor hubungan antar objek, misalnya `target.position - transform.position`.
- Relative observation sering lebih berguna untuk perilaku spasial karena agent belajar arah dan jarak relatif, bukan koordinat mutlak.
- Observation harus mendukung tugas: jika tugas bergantung pada titik global, absolute bisa diperlukan; jika tugas bergantung pada hubungan antar objek, relative biasanya lebih baik.

### Transisi ke Slide Berikutnya

Selanjutnya kita akan melihat bagaimana observation dikumpulkan secara eksplisit di Unity ML-Agents, termasuk pentingnya menjaga jumlah dan urutan observation tetap konsisten selama proses pembelajaran.

---

## Slide 017 - Observation di Unity ML-Agents

### Narasi

Dalam Unity ML-Agents, **observation** adalah data yang dibaca **agent** dari environment untuk memahami keadaan saat ini. Slide ini membahas cara mengumpulkan data tersebut melalui method `CollectObservations`.

```csharp
public override void CollectObservations(VectorSensor sensor)
{
    sensor.AddObservation(transform.localPosition);
    sensor.AddObservation(target.localPosition);
}
```

Method ini dipanggil oleh ML-Agents pada setiap langkah simulasi. `sensor` berfungsi sebagai wadah untuk menyimpan nilai yang akan dikirim ke proses training.

Pada potongan kode di atas, agent menambahkan dua informasi:

- `transform.localPosition` menunjukkan posisi agent di scene.
- `target.localPosition` menunjukkan posisi target yang ingin dicapai.

Dengan informasi ini, agent dapat mengetahui posisi dirinya dan posisi target dalam koordinat scene.

Contoh tambahan:

```csharp
sensor.AddObservation(rb.linearVelocity);
sensor.AddObservation(distanceToTarget);
```

Nilai `rb.linearVelocity` memberi tahu agent seberapa cepat dan ke arah mana agent bergerak. Nilai `distanceToTarget` memberi tahu agent seberapa dekat atau jauh target dari posisi agent.

Kedua nilai ini berguna karena agent tidak hanya perlu tahu posisi, tetapi juga dinamika gerak dan jarak.

Hal penting yang harus dipahami mahasiswa adalah **konsistensi observation**. Jumlah dan urutan nilai yang ditambahkan ke `sensor` harus tetap sama selama training.

Jika jumlah observation berubah-ubah, proses training akan bermasalah karena ukuran input tidak stabil. Jika urutan berubah, agent bisa salah memahami arti setiap nilai.

Intuisi praktisnya adalah: observation harus relevan, stabil, dan cukup untuk membantu agent mengambil keputusan.

### Inti yang Harus Ditekankan

- `CollectObservations` adalah method utama untuk mengumpulkan state environment.
- `sensor.AddObservation` digunakan untuk menambah nilai numerik ke observation.
- Posisi, kecepatan, dan jarak adalah contoh observation yang umum digunakan.
- Jumlah dan urutan observation harus konsisten agar training berjalan benar.

### Transisi ke Slide Berikutnya

Setelah memahami cara mengumpulkan observation di Unity ML-Agents, langkah berikutnya adalah melihat bentuk umum observation berupa kumpulan angka, yaitu **vector observation**.

---

## Slide 018 - Vector Observation

### Narasi

Pada slide ini kita fokus pada **vector observation**, yaitu bentuk observation yang paling sederhana dalam Unity ML-Agents. Secara konsep, vector observation adalah kumpulan **angka** yang menggambarkan kondisi agent dan lingkungan pada satu langkah. Angka-angka ini kemudian menjadi input bagi model pembelajaran untuk memilih aksi.

Contoh vektor yang umum digunakan:

```text
Agent X
Agent Z
Target X
Target Z
Velocity X
Velocity Z
Distance
```

Dalam implementasi, nilai-nilai ini biasanya ditambahkan melalui `sensor.AddObservation(...)` di method `CollectObservations`. Urutan sangat penting: jika urutan atau jumlah berubah, model akan salah membaca makna setiap angka.

Vector observation cocok untuk data numerik seperti:

- posisi,
- velocity,
- health,
- distance,
- boolean,
- skor.

Untuk nilai boolean, kita biasanya merepresentasikannya sebagai `0` atau `1`. Untuk nilai seperti health atau distance, sebaiknya dinormalisasi agar berada pada rentang yang stabil, misalnya 0 sampai 1, supaya proses training lebih konsisten.

Dari sisi desain game, vector observation memberi intuisi praktis: agent “tahu” keadaan numerik lingkungannya secara langsung. Misalnya, agent dapat melihat posisi target, jarak ke target, dan kecepatan dirinya, lalu belajar bergerak menuju target atau menghindari keadaan buruk. Pendekatan ini mudah dipahami dan mudah diuji untuk praktikum awal.

Namun, vector observation memiliki batas. Ia paling baik digunakan ketika informasi yang dibutuhkan memang tersedia sebagai data numerik. Jika agent perlu “melihat” lingkungan seperti sensor, misalnya mendeteksi obstacle di depan atau apakah target terlihat, kita akan membutuhkan bentuk observation lain.

### Inti yang Harus Ditekankan

- **Vector observation** adalah observation numerik yang menjadi input agent.
- Jumlah dan urutan nilai harus **konsisten** agar model tidak salah interpretasi.
- Cocok untuk posisi, velocity, health, distance, boolean, dan skor.
- Untuk praktikum awal, vector observation sudah cukup untuk membangun perilaku dasar agent.

### Transisi ke Slide Berikutnya

Setelah memahami observation berbasis angka, kita akan melanjutkan ke **ray observation**, yaitu cara agent memperoleh informasi lingkungan melalui sensor ray, seperti mendeteksi obstacle, dinding, atau target yang terlihat.

---

## Slide 019 - Ray Observation

### Narasi

**Ray observation** adalah cara agent memperoleh informasi lingkungan dengan memancarkan garis sensor ke arah tertentu.

Bayangkan agent tidak selalu mengetahui posisi semua objek secara eksak. Ia hanya bisa merasakan apa yang berada di sekitarnya, seperti sensor jarak dekat. Dalam konteks game, ini mirip dengan **laser scanner** atau **sonar** sederhana.

Pada slide ini, ray observation digunakan untuk mendeteksi objek melalui **ray**. Setiap ray dikirim dari posisi agent ke arah tertentu, misalnya ke depan, kiri, kanan, atau belakang.

Jika ray mengenai objek, sensor dapat menghasilkan informasi seperti:

- ada **obstacle** di depan,
- ada **wall** di samping,
- **target** terlihat atau tidak,
- **jarak** ke objek yang mengenai ray.

Dengan cara ini, agent tidak perlu diberi koordinat lengkap. Agent cukup membaca hasil sensor untuk memilih `action`.

Alur dasarnya dapat dipahami sebagai berikut:

1. Agent berada di lingkungan game dengan posisi dan orientasi tertentu.
2. `Ray Perception Sensor` memancarkan sejumlah ray ke arah yang telah ditentukan.
3. Setiap ray diperiksa apakah mengenai objek di sekitarnya.
4. Hasil deteksi diubah menjadi nilai observation, misalnya `hit`, `distance`, atau status objek.
5. Nilai tersebut digunakan agent untuk memilih `action`, seperti maju, belok, atau berhenti.

Dalam Unity ML-Agents, komponen yang digunakan adalah `Ray Perception Sensor`. Komponen ini membantu menyederhanakan pembuatan sensor berbasis ray, sehingga mahasiswa dapat fokus pada perilaku agent, bukan hanya logika deteksi manual.

Perbedaan penting dengan **vector observation** adalah sumber informasinya. Vector observation biasanya berupa angka yang sudah tersedia, seperti posisi, kecepatan, atau jarak. Ray observation lebih menekankan **perception**: agent "melihat" lingkungan melalui ray, bukan hanya membaca data global.

Untuk praktikum, ray observation sangat berguna untuk:

- navigasi,
- obstacle avoidance,
- agent yang tidak diberi koordinat lengkap,
- simulasi perception yang lebih realistis.

Sebelum lanjut, mahasiswa perlu memahami bahwa ray observation memberikan pandangan lokal dari posisi agent. Jumlah dan arah ray menentukan seberapa banyak informasi yang diterima agent. Jika arah ray tidak mencakup area penting, agent bisa kehilangan informasi tentang objek di sekitarnya.

### Inti yang Harus Ditekankan

- **Ray observation** adalah sensor berbasis garis yang mendeteksi objek di sekitar agent.
- Hasilnya biasanya berupa informasi lokal seperti `hit`, `distance`, dan keberadaan **target** atau **obstacle**.
- Ray observation cocok untuk **navigasi** dan **obstacle avoidance**, terutama ketika agent tidak diberi koordinat lengkap.
- Dalam Unity ML-Agents, gunakan `Ray Perception Sensor` untuk membangun sensor ini.

### Transisi ke Slide Berikutnya

Setelah memahami sensor berbasis ray, kita akan melanjutkan ke bentuk observation yang lebih visual, yaitu **visual observation**, di mana agent belajar dari input kamera.

---

## Slide 020 - Visual Observation

### Narasi

Pada slide ini kita membahas **visual observation**, yaitu cara agent memperoleh informasi dari environment melalui **kamera**. Berbeda dengan **ray observation** yang menghasilkan nilai seperti jarak atau keberadaan objek, visual observation menggunakan **image** sebagai input utama.

Intuisi praktisnya sederhana: agent “melihat” layar game seperti manusia. Ia menerima frame visual, lalu belajar mengenali pola dari gambar tersebut. Pola itu bisa berupa posisi target, bentuk objek, warna, gerakan, atau perubahan tampilan lingkungan.

Dalam alur observasi, prosesnya bisa dipahami sebagai berikut:

1. `camera` menangkap frame dari environment.
2. Frame tersebut menjadi `image` yang masuk ke agent.
3. Agent memproses `image` untuk memahami keadaan lingkungan.
4. Hasil pemahaman itu digunakan untuk menentukan perilaku berikutnya.

Namun, visual observation memiliki konsekuensi teknis yang cukup besar. Dibandingkan observasi berbasis nilai vektor atau ray, observasi visual biasanya lebih berat karena datanya lebih kompleks.

Beberapa hal yang perlu diperhatikan:

- `training` biasanya lebih lama.
- `model` yang digunakan lebih kompleks.
- Agent membutuhkan lebih banyak `data` untuk belajar pola visual.
- Proses debugging juga bisa lebih sulit karena input berupa gambar, bukan angka sederhana.

Untuk praktikum awal, pendekatan yang lebih praktis adalah menggunakan **vector observation** atau **ray observation**. Pendekatan tersebut lebih ringan, lebih cepat diuji, dan lebih mudah dipahami mahasiswa. Visual observation tetap penting untuk dipahami, terutama ketika kita ingin membuat agent yang berperilaku lebih mirip pemain manusia karena belajar dari tampilan visual.

### Inti yang Harus Ditekankan

- **Visual observation** menggunakan `camera` dan `image` sebagai input agent.
- Agent belajar dari pola visual seperti posisi, bentuk, warna, dan gerakan.
- Pendekatan ini lebih berat karena `training` lebih lama, `model` lebih kompleks, dan kebutuhan `data` lebih besar.
- Untuk praktikum awal, **vector observation** atau **ray observation** lebih mudah dan lebih efisien.

### Transisi ke Slide Berikutnya

Setelah agent memahami apa yang dilihat dari environment, langkah berikutnya adalah menentukan apa yang akan dilakukan. Pada slide berikutnya, kita akan membahas **Action**, yaitu perintah yang dapat dikeluarkan agent untuk memengaruhi environment.

---

## Slide 021 - Action

### Narasi

**Action** adalah perintah yang dikeluarkan oleh `agent` ke `environment`. Dalam konteks game, action dapat dipahami sebagai keputusan yang diambil agent untuk memengaruhi dunia game.

Action menjawab pertanyaan utama:

```text
Apa yang dapat dilakukan agent?
```

Beberapa contoh action yang umum dalam game adalah:

- `move_forward`
- `move_back`
- `turn_left`
- `turn_right`
- `jump`
- `attack`
- `select_skill`
- `select_target`

Setiap action mewakili satu kemungkinan perilaku yang bisa dipilih agent. Kumpulan semua action yang tersedia disebut **action space**. Action space menentukan batas kemampuan yang bisa dipelajari agent.

Action harus sesuai dengan kontrol yang ingin dipelajari agent. Jika kita ingin agent belajar bergerak, maka action harus memuat perintah gerak. Jika kita ingin agent belajar menyerang, maka action harus memuat perintah serangan. Jika kita ingin agent memilih target, maka action harus memuat pilihan target.

Secara praktis, action adalah jembatan antara keputusan agent dan perilaku nyata di game. Agent menghasilkan action, lalu `environment` mengeksekusi action tersebut. Hasil eksekusi ini akan memengaruhi state game berikutnya, seperti posisi agent, posisi musuh, kesehatan, atau kondisi lingkungan.

Sebelum lanjut, mahasiswa perlu memahami bahwa desain action sangat penting. Action yang terlalu sedikit membuat perilaku agent terbatas. Action yang tidak sesuai dengan tujuan game membuat agent sulit belajar perilaku yang diinginkan.

### Inti yang Harus Ditekankan

- **Action** adalah keluaran keputusan dari `agent` ke `environment`.
- **Action space** menentukan apa saja yang bisa dilakukan agent.
- Action harus dirancang sesuai kontrol dan tujuan perilaku yang ingin dipelajari.
- Action yang jelas memudahkan `environment` mengeksekusi perilaku agent secara konsisten.

### Transisi ke Slide Berikutnya

Setelah memahami bahwa action adalah perintah yang bisa dilakukan agent, kita lanjut ke bentuk nilai action, khususnya **continuous action** yang menggunakan nilai real untuk menghasilkan gerakan atau kontrol yang lebih halus.

---

## Slide 022 - Continuous Action

### Narasi

Pada slide sebelumnya kita sudah melihat bahwa **action** adalah perintah yang diberikan agent ke environment. Sekarang kita memperjelas salah satu bentuk action, yaitu **continuous action**.

**Continuous action** adalah aksi yang nilainya berupa angka real, bukan pilihan dari daftar terbatas. Artinya, agent tidak hanya memilih “maju” atau “mundur”, tetapi dapat menentukan seberapa besar dan ke arah mana gerakan dilakukan.

Contoh sederhana:

```text
moveX = -1.0 sampai 1.0
moveZ = -1.0 sampai 1.0
```

Nilai `moveX` dan `moveZ` dapat berada di rentang tertentu, misalnya dari `-1.0` sampai `1.0`. Nilai `0.0` bisa berarti tidak bergerak, nilai positif bisa berarti arah tertentu, dan nilai negatif bisa berarti arah sebaliknya.

Bentuk continuous action ini cocok untuk perilaku yang membutuhkan kontrol halus, seperti:

- movement halus,
- kontrol robot,
- kendaraan,
- steering.

Dalam Unity ML-Agents, nilai continuous action biasanya dibaca dari array `actions.ContinuousActions`. Potongan kode yang relevan adalah:

```csharp
float moveX = actions.ContinuousActions[0];
float moveZ = actions.ContinuousActions[1];
```

Tujuan kode ini adalah mengambil nilai aksi yang dihasilkan agent. `actions.ContinuousActions[0]` digunakan sebagai `moveX`, sedangkan `actions.ContinuousActions[1]` digunakan sebagai `moveZ`. Nilai tersebut kemudian dapat diteruskan ke sistem gerak, misalnya untuk mengatur kecepatan, arah, atau parameter steering.

Yang perlu dipahami mahasiswa adalah bahwa continuous action memberi ruang keputusan yang lebih luas. Agent dapat menghasilkan gerakan yang lebih natural, tetapi juga membutuhkan desain ruang aksi dan normalisasi nilai yang tepat agar pembelajaran tetap stabil.

### Inti yang Harus Ditekankan

- **Continuous action** menggunakan nilai real, bukan pilihan diskrit.
- Rentang nilai seperti `-1.0` sampai `1.0` memungkinkan kontrol arah dan intensitas gerakan.
- Cocok untuk movement halus, robot, kendaraan, dan steering.
- Di Unity, nilai dibaca melalui `actions.ContinuousActions[i]`.
- Nilai aksi harus diterjemahkan ke perilaku game atau environment agar agent benar-benar bergerak.

### Transisi ke Slide Berikutnya

Setelah memahami bahwa continuous action menghasilkan nilai real, kita akan membandingkannya dengan bentuk aksi lain, yaitu **discrete action**, yang memilih salah satu opsi dari daftar aksi yang sudah didefinisikan.

---

## Slide 023 - Discrete Action

### Narasi

Pada slide ini kita beralih dari **continuous action** ke **discrete action**. Jika continuous action menghasilkan nilai real, discrete action menghasilkan **pilihan kategori** dari sejumlah aksi yang sudah didefinisikan. Intuisi praktisnya: agent tidak menentukan "berapa besar" gerakan, tetapi memilih "aksi apa" yang akan dilakukan.

Contoh pada slide menunjukkan lima aksi:

```text
0 = diam
1 = maju
2 = mundur
3 = kiri
4 = kanan
```

Setiap angka bukan nilai posisi, melainkan **indeks aksi**. Agent belajar memetakan keadaan lingkungan ke salah satu indeks tersebut. Dalam konteks game, ini sangat cocok untuk **grid movement**, **skill selection**, atau **keputusan taktis** seperti memilih `attack`, `flee`, atau `jump`.

Di Unity ML-Agents, aksi diskrit dibaca melalui `actions.DiscreteActions`. Potongan kode yang relevan adalah:

```csharp
int action = actions.DiscreteActions[0];
```

Tujuan kode ini adalah mengambil aksi pertama yang dipilih agent. `actions` adalah objek yang berisi output keputusan agent, `DiscreteActions` adalah array aksi diskrit, dan `[0]` menunjuk aksi pertama. Nilai `action` kemudian biasanya dibandingkan dengan indeks aksi yang sudah didefinisikan.

Urutan eksekusinya sederhana:

1. Agent mengamati state lingkungan.
2. Model memilih salah satu aksi diskrit.
3. Kode membaca `actions.DiscreteActions[0]`.
4. Nilai `action` diterjemahkan menjadi perilaku nyata, misalnya `diam`, `maju`, atau `kiri`.

Hasil yang diharapkan adalah perilaku agent yang **jelas dan mudah diuji**. Karena setiap aksi memiliki arti tunggal, mahasiswa dapat langsung melihat apakah agent memilih aksi yang benar pada situasi tertentu. Pendekatan ini juga mudah dihubungkan dengan **Finite State Machine** atau **behavior tree**, di mana keputusan agent dapat berupa transisi antar state atau pemilihan node aksi.

Sebelum lanjut, mahasiswa perlu memahami bahwa discrete action bukan berarti agent tidak bisa bergerak halus. Artinya, ruang keputusannya dibatasi menjadi **pilihan aksi yang terdefinisi**. Ini membuat training lebih mudah dipahami, terutama untuk praktikum awal berbasis grid atau pemilihan aksi.

### Inti yang Harus Ditekankan

- **Discrete action** memilih dari daftar aksi, bukan menghasilkan nilai real.
- Nilai seperti `0`, `1`, `2` adalah **indeks aksi** yang harus dipetakan ke perilaku game.
- Kode `int action = actions.DiscreteActions[0];` mengambil aksi diskrit pertama dari output agent.
- Cocok untuk **grid movement**, **skill selection**, dan keputusan taktis yang jelas.

### Transisi ke Slide Berikutnya

Setelah memahami bagaimana discrete action bekerja, kita akan membandingkannya langsung dengan continuous action untuk menentukan kapan masing-masing lebih cocok digunakan.

---

## Slide 024 - Continuous vs Discrete Action

### Narasi

Kita sudah membahas **discrete action** sebagai aksi yang dipilih dari daftar kategori. Pada slide ini, kita membandingkannya dengan **continuous action** agar mahasiswa bisa memilih bentuk aksi yang sesuai dengan perilaku agent di game.

Perbedaan utamanya ada pada **bentuk output**. **Discrete action** menghasilkan pilihan kategori, misalnya `0 = diam`, `1 = maju`, `2 = mundur`. **Continuous action** menghasilkan nilai real yang bisa berubah halus, misalnya `moveX` dan `moveZ` yang menentukan arah dan kekuatan gerakan.

Dari sisi desain game, **discrete action** cocok untuk keputusan yang jelas dan terbatas, seperti memilih skill, memilih arah grid, atau memilih perilaku taktis. **Continuous action** lebih cocok untuk gerakan di ruang 3D, terutama ketika agent harus bergerak menuju target yang posisinya tidak terbatas pada beberapa pilihan.

Tabel pada slide ini menekankan konsekuensi praktisnya. **Continuous action** sering menghasilkan gerakan yang lebih halus dan natural, tetapi proses training bisa lebih kompleks karena ruang aksinya lebih luas. **Discrete action** lebih mudah dipahami dan lebih stabil untuk praktikum awal, terutama untuk grid movement atau action selection.

Untuk kasus agent yang harus mencapai target di arena 3D, **continuous action** sering digunakan karena agent perlu mengatur arah dan intensitas gerakan secara bertahap. Dengan nilai seperti `moveX` dan `moveZ`, agent dapat menyesuaikan gerakan ke kiri, kanan, maju, atau mundur tanpa harus memilih satu kategori saja.

Sebelum lanjut, hal penting yang harus dipahami adalah: pilihan **action space** memengaruhi perilaku agent, kesulitan training, dan hasil visual gerakan di game. Mahasiswa perlu mengenali kapan gerakan halus lebih penting, dan kapan pilihan aksi yang terbatas sudah cukup.

### Inti yang Harus Ditekankan

- **Continuous action** menghasilkan nilai real, sedangkan **discrete action** menghasilkan pilihan kategori.
- **Continuous action** cocok untuk movement halus di arena 3D, sedangkan **discrete action** cocok untuk grid, skill, dan keputusan taktis.
- **Continuous action** bisa lebih kompleks dalam training, sedangkan **discrete action** lebih mudah dipahami untuk praktikum awal.
- Untuk agent yang mengejar target di arena 3D, **continuous action** sering lebih sesuai.

### Transisi ke Slide Berikutnya

Setelah memahami perbedaan bentuk output dan kecocohannya, slide berikutnya akan menunjukkan bagaimana nilai continuous action diterjemahkan menjadi gerakan GameObject di Unity.

---

## Slide 025 - Action di Unity ML-Agents

### Narasi

Pada slide ini, kita melihat bagaimana **action** yang dihasilkan oleh model diterjemahkan menjadi perilaku nyata di Unity. Sebelumnya kita sudah membedakan continuous dan discrete action; di sini fokusnya adalah implementasi continuous action untuk gerakan agent.

Dalam Unity ML-Agents, method yang menerima action adalah `OnActionReceived`. Method ini dipanggil setiap kali agent menerima keputusan dari model. Parameter `ActionBuffers actions` berisi output action yang siap digunakan.

```csharp
public override void OnActionReceived(ActionBuffers actions)
{
    float moveX = actions.ContinuousActions[0];
    float moveZ = actions.ContinuousActions[1];

    Vector3 move = new Vector3(moveX, 0f, moveZ);
    rb.AddForce(move * moveSpeed);
}
```

Urutan eksekusinya dapat dipahami sebagai berikut:

1. Model menghasilkan nilai continuous action.
2. `OnActionReceived` menerima nilai tersebut melalui `actions`.
3. `actions.ContinuousActions[0]` dibaca sebagai `moveX`.
4. `actions.ContinuousActions[1]` dibaca sebagai `moveZ`.
5. Kedua nilai tersebut dibentuk menjadi `Vector3` pada sumbu horizontal.
6. `rb.AddForce` menerapkan gaya pada `Rigidbody` GameObject.

Bagian penting dari kode ini adalah `moveX` dan `moveZ` yang mewakili arah gerak pada sumbu X dan Z. Nilai `0f` pada sumbu Y menjaga agent tetap bergerak di bidang horizontal, sesuai kebutuhan agent yang berjalan di arena 3D.

Penggunaan `rb.AddForce` penting karena gerakan tidak langsung dipindahkan, tetapi diberikan sebagai gaya. Artinya, hasil gerak akan dipengaruhi oleh fisika Unity, seperti massa, drag, dan interaksi dengan environment. Variabel `moveSpeed` berfungsi sebagai skala agar output model dapat disesuaikan dengan kecepatan yang diinginkan.

Secara praktis, potongan kode ini menjadi jembatan antara keputusan agent dan gerakan visual di scene. Jika action bernilai positif atau negatif pada sumbu X dan Z, agent akan bergerak ke arah yang sesuai. Jika action mendekati nol, gaya yang diterapkan kecil sehingga agent cenderung melambat atau berhenti.

Sebelum lanjut, mahasiswa perlu memahami bahwa action bukan sekadar angka. Action adalah perintah yang harus diterjemahkan ke dalam perubahan state environment. Tanpa terjemahan ini, model tidak akan menghasilkan perilaku yang terlihat di game.

### Inti yang Harus Ditekankan

- `OnActionReceived` adalah method yang menerjemahkan **action** menjadi aksi di Unity.
- `ContinuousActions` digunakan untuk gerakan halus, seperti `moveX` dan `moveZ`.
- `Vector3` mengubah nilai action menjadi arah gerak pada ruang 3D.
- `rb.AddForce` menerapkan gaya pada `Rigidbody`, sehingga gerakan dipengaruhi fisika.
- `moveSpeed` menjadi skala pengendali agar output model sesuai kebutuhan game.

### Transisi ke Slide Berikutnya

Setelah action diterjemahkan menjadi gerakan, langkah berikutnya adalah menilai apakah gerakan tersebut baik atau buruk. Penilaian itu dilakukan melalui **reward**, yang akan kita bahas pada slide berikutnya.

---

## Slide 026 - Reward

### Narasi

Setelah `action` diterjemahkan menjadi gerakan `GameObject`, langkah berikutnya adalah menilai apakah gerakan itu membawa agent lebih dekat ke tujuan. Di sinilah **reward** berperan.

**Reward** adalah feedback angka yang diberikan kepada agent. Angka ini bukan perintah langsung, melainkan sinyal kualitas terhadap `action` yang baru saja dilakukan.

```text
Apakah action agent baik atau buruk?
```

Intuisi praktisnya, reward seperti skor yang membuat agent tahu apakah perilakunya perlu diulang atau dihindari. Jika reward positif, agent cenderung mengulangi pola `action` yang menghasilkan keadaan tersebut. Jika reward negatif, agent belajar mengurangi kemungkinan pola yang sama.

Contoh sederhana:

- mencapai target → reward positif,
- jatuh → reward negatif,
- menabrak obstacle → reward negatif,
- bergerak mendekati target → reward kecil positif,
- terlalu lama → penalty kecil.

Reward kecil yang diberikan setiap step juga penting. Tanpa sinyal kecil, agent hanya belajar dari kejadian besar seperti menang atau jatuh, sehingga proses belajar bisa lambat dan tidak stabil.

Dalam konteks Unity ML-Agents, reward menjadi jembatan antara perilaku agent dan tujuan game. `Action` mengubah posisi atau kecepatan agent, environment merespons, lalu reward menilai hasil interaksi tersebut. Nilai reward inilah yang digunakan oleh proses pembelajaran untuk memperbaiki keputusan agent pada step berikutnya.

Hal yang harus dipahami mahasiswa sebelum lanjut adalah bahwa reward tidak hanya menentukan “apa yang benar”, tetapi juga membentuk strategi yang akan ditemukan agent. Reward yang terlalu jarang, terlalu besar, atau tidak sesuai tujuan dapat membuat agent belajar perilaku yang tidak diinginkan.

### Inti yang Harus Ditekankan

- **Reward** adalah feedback numerik yang menilai kualitas `action` agent.
- Reward positif mendorong perilaku, reward negatif atau penalty mengurangi perilaku.
- Reward kecil per step membantu agent belajar secara bertahap.
- Reward menentukan perilaku yang akan dipelajari agent, bukan hanya hasil akhir.

### Transisi ke Slide Berikutnya

Setelah memahami apa itu reward, langkah berikutnya adalah merancang reward agar benar-benar mengarahkan agent ke perilaku yang diinginkan.

---

## Slide 027 - Reward Design

### Narasi

Pada slide ini, kita masuk ke **Reward Design**, yaitu cara merancang sinyal reward agar agent belajar perilaku yang benar. Slide sebelumnya sudah menjelaskan bahwa reward adalah feedback angka. Sekarang fokusnya bukan sekadar memberi angka, tetapi memastikan angka tersebut mengarahkan agent ke tujuan game.

Intuisi praktisnya sederhana: reward adalah "kompas" bagi agent. Jika reward dirancang dengan baik, agent akan tahu mana tindakan yang mendekati tujuan dan mana yang harus dihindari. Jika reward terlalu kabur, agent bisa menemukan perilaku yang secara angka menguntungkan, tetapi secara desain game tidak diinginkan.

Beberapa syarat penting dalam **reward design** adalah:

- **Mencerminkan tujuan game**, misalnya mencapai target, bertahan hidup, atau menyelesaikan tugas.
- **Tidak terlalu ambigu**, sehingga agent tidak bingung membedakan tindakan baik dan buruk.
- **Tidak membuka celah reward hacking**, yaitu perilaku yang mengeksploitasi reward tanpa benar-benar menyelesaikan tujuan.
- **Cukup sering diberikan**, agar agent mendapat umpan balik selama proses belajar.
- **Tidak mendorong shortcut aneh**, misalnya agent belajar cara yang tidak realistis atau tidak sesuai desain.

Contoh reward sederhana yang bisa digunakan:

```text
+1.0 jika mencapai target
-1.0 jika jatuh
-0.01 setiap step
```

Dalam contoh ini, `+1.0` memberi sinyal keberhasilan utama, `-1.0` memberi penalti kegagalan, dan `-0.01` setiap step mendorong agent untuk menyelesaikan tugas dengan efisien. Urutan penerapannya biasanya dimulai dari reward kecil per step, lalu ditambah reward event ketika kondisi tertentu terjadi. Dengan cara ini, agent tidak hanya belajar "apa yang harus dilakukan", tetapi juga "seberapa cepat dan aman melakukannya".

Hal yang harus dipahami mahasiswa sebelum lanjut adalah bahwa perubahan kecil pada reward dapat mengubah perilaku yang dipelajari. Nilai terlalu besar bisa membuat agent terlalu fokus pada satu event, sedangkan nilai terlalu kecil bisa membuat pembelajaran lambat. Karena itu, **reward design** bukan sekadar menulis angka, tetapi merancang perilaku agent secara sengaja.

### Inti yang Harus Ditekankan

- **Reward design** menentukan apakah agent belajar perilaku yang sesuai tujuan game.
- Reward harus jelas, sering, dan tidak membuka celah **reward hacking**.
- Contoh `+1.0`, `-1.0`, dan `-0.01` menunjukkan kombinasi reward keberhasilan, kegagalan, dan efisiensi.

### Transisi ke Slide Berikutnya

Selanjutnya kita akan melihat kasus khusus ketika reward hanya diberikan pada event besar, yaitu **sparse reward**, dan bagaimana hal itu memengaruhi proses belajar agent.

---

## Slide 028 - Sparse Reward

### Narasi

Pada slide ini kita membahas **sparse reward**, yaitu skema reward yang hanya diberikan ketika **event penting** terjadi. Dalam konteks **Unity ML-Agents**, agent biasanya menerima sinyal `reward` setelah setiap `step`. Pada sparse reward, sebagian besar `step` bernilai `0`, dan nilai positif hanya muncul saat kondisi tertentu terpenuhi, misalnya agent mencapai target.

```text
+1 jika mencapai target
0 selain itu
```

Secara intuisi, sparse reward mirip dengan memberi hadiah hanya pada hasil akhir, bukan pada setiap kemajuan kecil. Jika agent berhasil mencapai target, ia mendapat `+1`. Jika belum, ia tidak mendapat reward apa pun. Pola ini membuat tujuan belajar menjadi sangat jelas: agent harus mencari cara untuk mencapai event tersebut.

Kelebihan sparse reward adalah **sederhana** dan **jelas**. Developer tidak perlu mendesain banyak nilai reward untuk setiap gerakan. Agent juga tidak mudah terpengaruh oleh sinyal kecil yang salah, karena reward utama hanya muncul pada event yang benar-benar penting.

Namun, sparse reward memiliki tantangan besar. Jika target jarang tercapai, agent bisa menghabiskan banyak episode tanpa mendapat feedback. Akibatnya, proses training bisa menjadi **lama** dan kurang stabil. Agent mungkin tidak tahu apakah pergerakannya sudah mendekati target atau masih jauh, karena hampir semua `step` bernilai `0`.

Oleh karena itu, sparse reward paling cocok untuk **environment yang sangat sederhana**, misalnya ruang kecil, target mudah terlihat, atau agent sering menemukan target secara acak. Untuk environment yang lebih kompleks, agent biasanya membutuhkan sinyal yang lebih sering agar bisa membentuk strategi secara bertahap.

Sebelum lanjut, mahasiswa perlu memahami bahwa sparse reward bukan salah secara konseptual. Ia hanya terbatas pada kecepatan dan kemudahan belajar. Reward yang jarang diberikan tetap valid, tetapi harus disesuaikan dengan kompleksitas environment dan kemampuan agent untuk menemukan event reward.

### Inti yang Harus Ditekankan

- **Sparse reward** hanya memberi nilai reward pada event besar, misalnya `+1` saat mencapai target.
- Sebagian besar `step` bernilai `0`, sehingga agent mendapat feedback yang jarang.
- Kelebihannya adalah desain reward yang **sederhana** dan **jelas**.
- Kekurangannya adalah training bisa **lama** jika target sulit atau jarang tercapai.
- Cocok untuk environment sederhana, bukan untuk environment kompleks tanpa bantuan sinyal tambahan.

### Transisi ke Slide Berikutnya

Setelah memahami keterbatasan sparse reward, kita akan melihat pendekatan lain yang memberi feedback lebih sering, yaitu **dense reward**, agar agent dapat belajar lebih cepat dari kemajuan kecil.

---

## Slide 029 - Dense Reward

### Narasi

**Dense Reward** adalah skema pemberian reward yang lebih sering dibandingkan **Sparse Reward**. Jika pada slide sebelumnya reward hanya muncul saat event besar, seperti mencapai target, maka di sini agent dapat menerima sinyal kecil pada hampir setiap langkah.

Intuisinya, dense reward seperti memberikan petunjuk arah yang lebih halus. Agent tidak hanya tahu “sudah sampai” atau “belum sampai”, tetapi juga mendapat umpan balik apakah posisinya semakin dekat atau semakin jauh dari tujuan.

Contoh sederhana:

```text
+0.01 jika mendekati target
-0.01 jika menjauh
```

Dalam contoh ini, nilai `+0.01` diberikan ketika agent bergerak lebih dekat ke `target`, sedangkan `-0.01` diberikan ketika agent bergerak menjauh. Besaran kecil ini penting agar agent tidak terlalu cepat meniru satu perilaku lokal, tetapi tetap belajar memperbaiki arah secara bertahap.

Kelebihan utama dense reward adalah agent mendapat **feedback** lebih sering. Hal ini biasanya membuat proses pembelajaran lebih cepat karena agent lebih sering tahu apakah tindakannya memperbaiki keadaan. Dalam konteks praktikum Unity ML-Agents, sinyal per langkah dapat membantu agent memahami hubungan antara `action`, perubahan posisi, dan hasil yang diinginkan.

Namun, dense reward juga memiliki kekurangan. **Reward design** menjadi lebih sulit karena kita harus menentukan besaran, kondisi, dan arah sinyal dengan hati-hati. Jika reward terlalu besar, agent bisa terjebak pada perilaku kecil yang menguntungkan secara lokal. Jika reward terlalu kecil, pembelajaran tetap lambat. Selain itu, sinyal yang tidak selaras dengan tujuan akhir dapat menyebabkan **behavior** yang tidak diinginkan.

Untuk praktikum, pendekatan yang cukup praktis adalah kombinasi **sparse reward** dan **penalty step**. Artinya, reward besar tetap diberikan saat target tercapai, sementara penalti kecil diberikan setiap `step` agar agent tidak diam terlalu lama atau bergerak tanpa arah.

Sebelum lanjut, mahasiswa perlu memahami bahwa reward bukan sekadar angka. Frekuensi reward, ukuran reward, dan keselarasan reward dengan tujuan perilaku sama pentingnya.

### Inti yang Harus Ditekankan

- **Dense reward** memberi sinyal lebih sering, biasanya setiap langkah atau setiap perubahan keadaan.
- Sinyal kecil seperti `+0.01` dan `-0.01` membantu agent belajar arah, tetapi harus dirancang dengan hati-hati.
- Kelebihan utama: **feedback** lebih sering dan pembelajaran bisa lebih cepat.
- Kekurangan utama: **reward design** lebih sulit dan dapat memicu perilaku yang tidak diinginkan.
- Untuk praktikum, kombinasi **sparse reward** dan **penalty step** sudah cukup untuk memulai.

### Transisi ke Slide Berikutnya

Jika reward dirancang tidak hati-hati, agent bisa menemukan cara untuk mendapatkan reward tinggi tanpa benar-benar menyelesaikan tujuan. Kondisi inilah yang akan kita bahas pada slide berikutnya sebagai **Reward Hacking**.

---

## Slide 030 - Reward Hacking

### Narasi

**Reward hacking** terjadi ketika agent berhasil meningkatkan nilai reward, tetapi perilakunya tidak sesuai tujuan yang kita inginkan. Dalam reinforcement learning, agent tidak memahami maksud di balik reward; agent hanya mencari cara paling efisien untuk memaksimalkan sinyal numerik.

Artinya, jika desain reward memiliki celah, agent akan menemukan celah itu. Perilaku yang tampak aneh biasanya bukan karena agent “salah belajar”, melainkan karena reward memberi insentif yang salah.

Intuisi praktisnya: reward seperti kompas. Jika kompas mengarah ke tempat yang salah, agent akan sampai ke tempat yang salah meskipun secara teknis ia berhasil.

Beberapa contoh yang sering muncul:

- agent berputar terus untuk mendapat reward kecil yang diberikan setiap rotasi.
- agent menghindari goal karena reward lain lebih mudah dicapai.
- agent menabrak object tertentu jika reward atau penalty ditempatkan tidak tepat.
- agent diam di tempat jika `penalty` untuk bergerak terlalu besar.

Contoh-contoh ini penting karena menunjukkan bahwa reward bukan hanya angka. Reward adalah definisi perilaku. Jika reward kontradiktif, agent akan memilih perilaku yang paling menguntungkan menurut reward, bukan perilaku yang paling masuk akal bagi pemain.

Dalam konteks game, masalah ini memengaruhi kualitas NPC, agent yang belajar, dan perilaku yang muncul di lingkungan simulasi. Agent bisa terlihat “pintar” dalam skor, tetapi gagal melakukan tugas utama seperti mencapai target, menghindari rintangan, atau menyelesaikan episode.

Solusinya bukan hanya menambah reward, tetapi memperbaiki desain reward. Beberapa langkah yang perlu dilakukan:

- uji reward dengan episode pendek dan sederhana.
- debug behavior agent secara visual, misalnya amati apa yang dilakukan agent setiap langkah.
- hindari reward yang saling bertentangan.
- buat kondisi episode jelas, seperti awal, tujuan, kegagalan, dan reset.

Sebelum lanjut, mahasiswa perlu memahami bahwa reward design adalah bagian dari desain perilaku. Reward yang baik harus konsisten, terukur, dan tidak memberi insentif untuk perilaku yang tidak diinginkan.

### Inti yang Harus Ditekankan

- **Reward hacking** adalah masalah desain reward, bukan semata masalah kemampuan agent.
- Agent akan memanfaatkan celah reward, jadi reward harus selaras dengan perilaku yang diinginkan.
- Debug perilaku agent sama pentingnya dengan mengatur nilai reward.
- Kondisi episode yang jelas membantu mencegah perilaku ambigu atau tidak stabil.

### Transisi ke Slide Berikutnya

Setelah memahami risiko reward hacking, langkah berikutnya adalah melihat cara praktis memberikan reward di Unity ML-Agents, yaitu melalui `AddReward` dan `SetReward`.

---

## Slide 031 - AddReward dan SetReward

### Narasi

Pada slide ini, kita fokus pada dua cara memberi **reward** dalam Unity ML-Agents, yaitu `AddReward()` dan `SetReward()`. Reward adalah sinyal numerik yang digunakan agent untuk menilai kualitas tindakannya. Semakin baik sinyal ini dirancang, semakin mudah agent belajar perilaku yang diinginkan.

Unity ML-Agents menyediakan dua API utama:

```csharp
AddReward(value);
SetReward(value);
```

`AddReward()` berfungsi **menambahkan** nilai reward ke reward yang sedang berjalan. Contoh penggunaannya:

```csharp
AddReward(0.1f);
```

Cara ini cocok untuk reward kecil yang diberikan berulang kali, misalnya agent bergerak mendekati target, menghindari area berbahaya, atau mempertahankan posisi yang baik. Karena nilainya bersifat akumulatif, satu langkah agent dapat menerima beberapa `AddReward()` tanpa saling menghapus.

`SetReward()` berfungsi **mengganti** reward saat ini dengan nilai baru. Contoh penggunaannya:

```csharp
SetReward(1.0f);
```

Cara ini lebih cocok untuk reward yang bersifat final atau menentukan hasil akhir, misalnya agent berhasil mencapai target, atau kondisi gagal terpenuhi. Jika `SetReward()` dipanggil lebih dari satu kali, nilai yang terakhir diberikan akan menggantikan nilai sebelumnya, bukan menambahkannya.

Dalam alur sederhana, `AddReward()` dapat digunakan selama agent bergerak dan berinteraksi dengan `environment`, sedangkan `SetReward()` dapat digunakan saat kondisi akhir tercapai. Pola ini membantu mahasiswa memahami bahwa reward tidak selalu diberikan pada satu titik saja, tetapi dapat dibentuk secara bertahap sesuai perilaku yang ingin dilatih.

Untuk praktikum awal, `AddReward()` sering lebih mudah dipahami karena mahasiswa dapat memberi reward kecil secara bertahap. Misalnya, agent mendapat `AddReward(0.1f)` setiap kali jaraknya ke target berkurang, lalu mendapat reward lebih besar saat target tercapai. Cara ini membuat agent belajar secara bertahap, bukan hanya mengandalkan satu sinyal akhir.

Yang perlu dipahami mahasiswa adalah bahwa `AddReward()` dan `SetReward()` bukan sekadar fungsi matematika, tetapi bagian penting dari desain perilaku agent. Cara reward diberikan akan memengaruhi hasil belajar: reward yang terlalu besar bisa membuat agent mengejar sinyal yang salah, sedangkan reward yang terlalu kecil bisa membuat belajar lambat. Oleh karena itu, pemilihan nilai dan jenis reward harus konsisten dengan tujuan perilaku yang ingin dilatih.

### Inti yang Harus Ditekankan

- `AddReward()` **menambahkan** reward ke reward saat ini, cocok untuk reward kecil yang berulang.
- `SetReward()` **mengganti** reward saat ini, cocok untuk reward final atau kondisi akhir.
- `AddReward()` lebih aman untuk praktikum awal karena tidak menghapus reward lain yang sudah diberikan.
- Nilai reward memengaruhi perilaku agent, sehingga harus dirancang agar sesuai tujuan, bukan sekadar angka.

### Transisi ke Slide Berikutnya

Setelah memahami bagaimana reward diberikan, langkah berikutnya adalah memahami kapan reward tersebut dihitung dalam satu percobaan belajar, yaitu konsep **episode**.

---

## Slide 032 - Episode

### Narasi

Pada slide ini kita membahas konsep **Episode**. Dalam konteks **Unity ML-Agents**, episode dapat dipahami sebagai **satu percobaan belajar** yang dilakukan oleh **agent** di dalam **environment**.

Secara intuitif, episode mirip dengan satu ronde permainan. Agent memulai dari kondisi awal, kemudian melakukan serangkaian tindakan, dan akhirnya episode berhenti ketika salah satu kondisi selesai terpenuhi.

Contoh alur episode adalah sebagai berikut:

- Agent mulai dari posisi awal.
- Agent bergerak untuk mencari target.
- Episode selesai jika target berhasil dicapai.
- Episode selesai jika agent jatuh.
- Episode selesai jika jumlah langkah maksimum tercapai.

Kondisi selesai ini penting karena memberi batasan pada satu percobaan belajar. Tanpa batas, agent bisa terus bergerak tanpa ada titik akhir yang jelas. Dengan adanya kondisi selesai, proses belajar menjadi lebih terstruktur dan mudah dievaluasi.

Setelah episode selesai, lingkungan tidak langsung dibiarkan dalam kondisi terakhir. Lingkungan akan di-reset, agent mencoba lagi, dan proses training berlanjut ke episode berikutnya.

```text
Posisi awal
   ↓
Agent bertindak
   ↓
Episode selesai
   ↓
Environment di-reset
   ↓
Episode baru dimulai
```

Jadi, yang perlu dipahami mahasiswa adalah bahwa **episode bukan satu langkah**, melainkan **satu rangkaian langkah** dari awal sampai akhir. Konsep ini menjadi dasar penting sebelum kita masuk ke implementasi reset dan persiapan kondisi awal pada slide berikutnya.

### Inti yang Harus Ditekankan

- **Episode** adalah satu percobaan belajar yang terdiri dari banyak langkah.
- Episode dapat berakhir karena **target dicapai**, **agent jatuh**, atau **step maksimum tercapai**.
- Setelah episode selesai, **environment di-reset** dan training berlanjut ke episode berikutnya.

### Transisi ke Slide Berikutnya

Setelah memahami apa itu episode, langkah berikutnya adalah melihat bagaimana proses reset dilakukan secara konkret dalam kode, terutama melalui method `OnEpisodeBegin()`.

---

## Slide 033 - OnEpisodeBegin()

### Narasi

**OnEpisodeBegin()** adalah method yang dipanggil ketika sebuah episode mulai dijalankan. Dalam konteks Unity ML-Agents, method ini menjadi titik awal untuk menyiapkan ulang kondisi agent sebelum ia mulai belajar.

```csharp
public override void OnEpisodeBegin()
{
    transform.localPosition = GetRandomStartPosition();
    target.localPosition = GetRandomTargetPosition();
    rb.linearVelocity = Vector3.zero;
    rb.angularVelocity = Vector3.zero;
}
```

Method ini bekerja seperti proses reset awal pada satu episode. Ia memastikan agent tidak melanjutkan kondisi dari episode sebelumnya.

Ada empat hal penting yang dilakukan di sini:

- `transform.localPosition = GetRandomStartPosition();`  
  Posisi agent di-reset ke titik awal acak.

- `target.localPosition = GetRandomTargetPosition();`  
  Posisi target juga di-reset ke titik acak.

- `rb.linearVelocity = Vector3.zero;`  
  Kecepatan linier agent dinolkan.

- `rb.angularVelocity = Vector3.zero;`  
  Kecepatan rotasi agent juga dinolkan.

Intuisi praktisnya sederhana: setiap episode harus dimulai seperti “level baru”. Agent harus berada di posisi awal yang valid, target harus tersedia, dan fisika agent harus bersih dari sisa gerakan sebelumnya.

Jika `linearVelocity` tidak di-reset, agent bisa saja mulai episode dengan sisa momentum dari episode sebelumnya. Hal ini membuat kondisi awal tidak konsisten.

Jika `angularVelocity` tidak di-reset, agent bisa mulai dengan kondisi berputar atau miring. Ini juga dapat mengganggu perilaku belajar.

Oleh karena itu, **reset yang konsisten** sangat penting. Posisi boleh acak, tetapi prosedur reset harus sama setiap episode. Dengan begitu, agent belajar dari kondisi awal yang adil dan stabil.

Sebelum lanjut, mahasiswa perlu memahami bahwa `OnEpisodeBegin()` bukan sekadar memindahkan objek. Method ini menyiapkan seluruh kondisi awal environment agar proses training dapat berjalan dengan benar.

### Inti yang Harus Ditekankan

- **OnEpisodeBegin()** dipanggil saat episode dimulai.
- Method ini melakukan **reset agent**, **reset target**, dan **reset velocity**.
- `transform.localPosition` mengatur posisi awal agent.
- `target.localPosition` mengatur posisi target baru.
- `rb.linearVelocity` dan `rb.angularVelocity` harus dinolkan agar fisika agent bersih.
- Reset yang konsisten membuat **training stabil** dan perilaku agent lebih mudah dipelajari.

### Transisi ke Slide Berikutnya

Setelah episode dimulai dan kondisi awal di-reset, agent akan bergerak dan berinteraksi dengan environment. Namun, episode juga harus bisa diakhiri dengan benar. Untuk itu, slide berikutnya akan membahas `EndEpisode()` dan bagaimana episode ditutup ketika target tercapai atau agent jatuh.

---

## Slide 034 - EndEpisode()

### Narasi

Slide ini membahas cara sebuah episode dalam Unity ML-Agents diakhiri secara eksplisit oleh agent. Pada slide sebelumnya, `OnEpisodeBegin()` bertugas menyiapkan ulang posisi agent, target, dan kecepatan. Di sini, fokusnya adalah kondisi ketika episode tidak lagi boleh dilanjutkan, yaitu ketika agent mencapai target atau mengalami kegagalan.

Dalam ML-Agents, satu episode adalah satu percobaan lengkap dari awal sampai selesai. Episode dapat berakhir karena dua jenis alasan utama: kondisi terminal yang dipanggil oleh script, atau batas langkah maksimum. Pada slide ini yang dibahas adalah kondisi terminal, yaitu pemanggilan `EndEpisode()`.

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

Potongan kode ini menunjukkan dua contoh terminal condition. Jika `reachedTarget` bernilai `true`, agent diberi reward positif `1.0f` karena berhasil menyelesaikan tugas. Setelah itu, `EndEpisode()` dipanggil untuk menghentikan episode. Sebaliknya, jika `fellOffPlatform` bernilai `true`, agent diberi reward negatif `-1.0f` sebagai penalti kegagalan, lalu episode juga diakhiri.

Penting untuk memahami urutan eksekusinya. Pada setiap decision step, agent menerima observation, memilih action, lalu environment diperbarui. Setelah itu, script agent memeriksa apakah kondisi terminal terjadi. Jika terjadi, reward dicatat terlebih dahulu melalui `AddReward()`, kemudian `EndEpisode()` dipanggil. Reward ini menjadi sinyal pembelajaran untuk episode tersebut.

`EndEpisode()` tidak secara langsung melakukan reset. Ia hanya memberi tahu ML-Agents bahwa episode saat ini sudah selesai. Setelah episode berakhir, ML-Agents akan memanggil `OnEpisodeBegin()` untuk episode berikutnya. Dengan demikian, alur lengkapnya adalah:

1. Agent berjalan dalam episode.
2. Kondisi terminal diperiksa.
3. Reward diberikan jika perlu.
4. `EndEpisode()` dipanggil.
5. ML-Agents mengakhiri episode.
6. `OnEpisodeBegin()` dipanggil untuk reset episode baru.

Pola ini penting karena reward dan terminal condition harus konsisten. Jika agent berhasil tetapi episode tidak diakhiri, agent bisa terus berjalan dan reward menjadi tidak jelas. Jika agent gagal tetapi episode tidak diakhiri, agent mungkin terus berada dalam keadaan tidak valid. Konsistensi terminal condition membantu training lebih stabil.

Sebelum lanjut, mahasiswa perlu memahami bahwa `EndEpisode()` adalah penanda akhir episode yang dipicu oleh hasil agent, bukan sekadar reset manual. Ia bekerja berpasangan dengan `OnEpisodeBegin()`: satu mengakhiri, satu memulai ulang.

### Inti yang Harus Ditekankan

- `EndEpisode()` digunakan untuk mengakhiri episode secara eksplisit ketika kondisi terminal tercapai.
- Reward seperti `AddReward(1.0f)` atau `AddReward(-1.0f)` sebaiknya diberikan sebelum `EndEpisode()` dipanggil.
- Setelah `EndEpisode()`, ML-Agents akan memanggil `OnEpisodeBegin()` untuk memulai episode berikutnya.
- Kondisi terminal harus jelas dan konsisten agar proses pembelajaran agent stabil.

### Transisi ke Slide Berikutnya

Selanjutnya, kita akan melihat cara lain episode dapat berakhir, yaitu melalui `Max Step`, yang membatasi panjang episode ketika agent belum mencapai kondisi terminal.

---

## Slide 035 - Max Step

### Narasi

Pada slide ini kita membahas **Max Step**, yaitu batas maksimum jumlah **decision step** dalam satu episode. Dalam konteks ML-Agents, setiap langkah keputusan agent dihitung sebagai satu step. Jika episode belum berakhir karena kondisi sukses atau gagal, tetapi sudah mencapai batas ini, episode akan dihentikan secara paksa.

```text
Max Step = 500
```

Artinya, jika agent belum mencapai target dan belum jatuh setelah 500 langkah keputusan, episode dianggap selesai. Setelah itu, siklus episode berikutnya dapat dimulai, misalnya melalui `OnEpisodeBegin()`.

Intuisi praktisnya adalah **Max Step** berfungsi seperti timer atau batas waktu dalam game. Tanpa batas ini, agent bisa terus berjalan tanpa hasil yang berarti, misalnya berputar-putar di area yang sama. Dengan batas langkah, lingkungan pembelajaran menjadi lebih terstruktur dan proses evaluasi menjadi lebih konsisten.

Manfaat utama dari pengaturan `Max Step` adalah:

- mencegah episode berjalan terlalu lama,
- mempercepat proses training karena episode lebih cepat berganti,
- memberi batas eksplorasi yang jelas bagi agent.

Namun, nilai `Max Step` perlu dipilih dengan cermat. Jika terlalu pendek, agent tidak memiliki cukup waktu untuk menjelajahi lingkungan atau menemukan strategi yang baik. Sebaliknya, jika terlalu panjang, training menjadi lambat karena setiap episode memakan banyak langkah sebelum selesai.

Jadi, mahasiswa perlu memahami bahwa `Max Step` bukan sekadar angka konfigurasi, tetapi bagian dari desain lingkungan pembelajaran. Nilai ini memengaruhi seberapa cepat agent mendapat umpan balik, seberapa sering episode diulang, dan seberapa efisien proses pembelajaran berlangsung.

### Inti yang Harus Ditekankan

- **Max Step** membatasi panjang episode dalam jumlah **decision step**.
- Jika batas tercapai, episode berakhir meskipun agent belum berhasil atau gagal secara eksplisit.
- Nilai yang terlalu pendek dapat menghambat pembelajaran, sedangkan nilai yang terlalu panjang dapat memperlambat training.
- `Max Step` membantu menjaga eksplorasi tetap terkontrol dan proses training lebih efisien.

### Transisi ke Slide Berikutnya

Setelah episode dibatasi oleh `Max Step`, langkah berikutnya adalah memahami bagaimana agent memilih tindakan dari pengamatan yang diterimanya, yaitu konsep **Policy**.

---

## Slide 036 - Policy

### Narasi

Slide ini membahas **policy**, yaitu inti dari perilaku agent yang sudah belajar. Dalam reinforcement learning, agent tidak selalu mengikuti aturan manual yang ditulis satu per satu. Ia memiliki **policy** yang memetakan `observation` menjadi `action`.

Secara sederhana, **policy** menjawab pertanyaan: “Jika agent melihat situasi tertentu, `action` apa yang sebaiknya dilakukan?” Dalam konteks game, `observation` bisa berupa posisi target, dan `action` bisa berupa gerakan tertentu.

Contoh pada slide menunjukkan pola dasar:

```text
Observation:
target berada di kanan

Policy:
pilih action bergerak ke kanan
```

Artinya, agent tidak perlu diprogram dengan logika manual yang kaku untuk setiap situasi. Agent belajar dari pengalaman, lalu membentuk **policy** yang mampu memilih `action` yang lebih baik berdasarkan `observation` yang diterima.

Dalam `ML-Agents`, **policy** dihasilkan dari proses `training`. Selama `training`, agent mencoba berbagai `action` dan memperbaiki keputusan berdasarkan pengalaman di lingkungan.

Setelah `training` selesai, **policy** dapat dijalankan dalam mode `inference`. Pada tahap ini, agent tidak lagi belajar secara aktif, tetapi menggunakan strategi yang sudah terbentuk untuk mengambil keputusan.

Sebelum lanjut, mahasiswa perlu memahami bahwa **policy** bukan sekadar satu `action` tunggal. **Policy** adalah fungsi keputusan yang menghubungkan keadaan dengan pilihan tindakan. Semakin baik **policy**, semakin rasional dan efektif perilaku agent dalam lingkungan game.

### Inti yang Harus Ditekankan

- **Policy** adalah strategi agent untuk memilih `action` berdasarkan `observation`.
- Dalam `ML-Agents`, **policy** diperoleh dari `training`, bukan hanya aturan manual.
- **Policy** adalah hasil pembelajaran yang dapat digunakan dalam mode `inference`.
- Intuisi praktis: agent melihat keadaan, lalu memilih tindakan yang sudah dipelajarinya.

### Transisi ke Slide Berikutnya

Setelah memahami **policy** sebagai hasil pembelajaran, slide berikutnya akan membedakan `training` dan `inference`, sehingga mahasiswa bisa melihat kapan agent masih belajar dan kapan agent hanya menjalankan **policy**.

---

## Slide 037 - Training vs Inference

### Narasi

Pada slide ini kita membedakan dua kondisi utama ketika model digunakan dalam Unity ML-Agents: **Training** dan **Inference**. Keduanya sama-sama melibatkan `agent`, `observation`, dan `action`, tetapi perannya berbeda. **Training** adalah fase di mana `agent` masih belajar, sedangkan **Inference** adalah fase di mana `agent` menjalankan hasil belajar tersebut.

Intuisi praktisnya, **Training** mirip dengan sesi latihan. `Agent` mencoba berbagai `action`, lingkungan memberikan `reward`, dan model diperbarui agar keputusan berikutnya lebih baik. Karena masih ada proses penyesuaian, perilaku `agent` bisa berubah-ubah, tidak selalu konsisten, dan masih melakukan eksplorasi.

Ciri utama **Training** adalah:

- `model` masih diperbarui selama proses berjalan.
- `reward` dicatat dan digunakan untuk menilai kualitas `action`.
- proses biasanya melewati banyak `episode`.
- `agent` masih mengeksplorasi `action` yang belum pasti.

Sebaliknya, **Inference** adalah fase penggunaan model yang sudah selesai dilatih. Pada tahap ini, `model` tidak lagi diperbarui. `Agent` hanya membaca `observation` dari lingkungan, lalu memilih `action` berdasarkan `policy` yang sudah terbentuk. Karena modelnya tetap, perilaku `agent` cenderung lebih stabil dan lebih mudah diprediksi.

Ciri utama **Inference** adalah:

- `model` tidak diperbarui.
- `agent` menjalankan `policy` hasil training.
- cocok untuk `game` final atau runtime.
- perilaku lebih stabil dibanding fase training.

Hubungan keduanya penting untuk dipahami. **Training** menghasilkan `policy` atau model keputusan, sedangkan **Inference** memakai model tersebut untuk membuat `agent` bertindak di dalam `game`. Dalam Unity ML-Agents, model hasil training dapat digunakan melalui `Behavior Parameters`, tetapi detail komponen tersebut akan dibahas pada slide berikutnya.

Sebelum lanjut, mahasiswa perlu mengingat batasannya: jika `model` masih berubah dan `reward` masih dipakai, itu **Training**. Jika `model` sudah tetap dan `agent` hanya menjalankan `policy`, itu **Inference**. Pemahaman ini menentukan kapan kita melatih `agent` dan kapan kita memakai `agent` dalam `game` yang sudah jadi.

### Inti yang Harus Ditekankan

- **Training** adalah fase belajar: `model` diperbarui, `reward` dicatat, banyak `episode`, dan masih ada eksplorasi.
- **Inference** adalah fase penggunaan: `model` tetap, `agent` menjalankan `policy`, dan perilaku lebih stabil.
- `Training` menghasilkan model/policy, sedangkan `Inference` memakai model tersebut di dalam `game`.
- Untuk `game` final, biasanya yang dipakai adalah mode **Inference**, bukan **Training**.

### Transisi ke Slide Berikutnya

Setelah memahami kapan model dilatih dan kapan model dijalankan, langkah berikutnya adalah melihat tempat pengaturan model tersebut pada `agent`, yaitu `Behavior Parameters`.

---

## Slide 038 - Behavior Parameters

### Narasi

Pada slide ini, kita masuk ke komponen yang menentukan bagaimana agent dikonfigurasi sebelum menjalankan perilaku. `Behavior Parameters` dapat dipahami sebagai "kartu identitas" sekaligus "aturan main" bagi agent di dalam environment. Komponen ini membantu mahasiswa melihat bahwa perilaku agent tidak muncul begitu saja, tetapi bergantung pada konfigurasi yang jelas.

Secara intuitif, `Behavior Parameters` menjawab tiga pertanyaan penting: apa yang bisa dilihat agent, apa yang bisa dilakukan agent, dan bagaimana keputusan diambil. `Behavior Name` memberi nama perilaku, sehingga mudah dikenali saat ada beberapa agent atau beberapa policy dalam satu scene. `Observation space` menentukan bentuk data yang diterima agent, misalnya posisi, jarak, atau kondisi lingkungan. `Action space` menentukan pilihan tindakan yang dapat dieksekusi agent, seperti bergerak, berputar, atau melakukan aksi tertentu.

Selain itu, `Model` menjadi tempat model hasil training dipasang. Jika agent sudah dilatih, model ini digunakan untuk menjalankan policy di dalam game. `Behavior Type` menentukan mode perilaku agent. Ada tiga pilihan utama: `Default`, `Heuristic Only`, dan `Inference Only`. Untuk training, biasanya gunakan `Default` karena agent masih perlu berinteraksi dengan lingkungan dan proses pembelajaran dapat berjalan sesuai kebutuhan.

Secara sederhana, `Heuristic Only` berarti agent hanya menjalankan perilaku yang sudah ditulis, sedangkan `Inference Only` berarti agent hanya menggunakan model. Pilihan ini penting karena menentukan apakah agent sedang belajar, hanya menjalankan skenario, atau hanya memakai hasil training.

`Team ID` berguna ketika ada banyak agent yang bekerja dalam kelompok atau tim. Dengan identitas tim, perilaku multi-agent dapat diatur lebih rapi, misalnya untuk membedakan kelompok yang bersaing atau bekerja sama. `inference device` menentukan perangkat yang digunakan untuk menjalankan inferensi model, sehingga mahasiswa perlu memahami bahwa konfigurasi perangkat juga menjadi bagian dari pengaturan perilaku agent.

Yang harus dipahami sebelum lanjut adalah bahwa `Behavior Parameters` bukan sekadar daftar field. Komponen ini adalah jembatan antara environment, agent, dan model. Jika `Observation space` atau `Action space` tidak sesuai, agent tidak akan menerima informasi yang cukup atau tidak dapat memilih tindakan yang tepat. Jika `Behavior Type` salah, agent mungkin tidak menggunakan model hasil training atau tidak dapat belajar dengan baik.

### Inti yang Harus Ditekankan

- `Behavior Parameters` adalah komponen penting yang mengatur konfigurasi perilaku agent.
- `Observation space` dan `Action space` menentukan apa yang dilihat agent dan apa yang dapat dilakukan agent.
- `Model` digunakan untuk menjalankan policy hasil training, sedangkan `Behavior Type` menentukan mode perilaku.
- Untuk training, pilihan yang umum digunakan adalah `Default`.
- `Team ID` dan `inference device` membantu mengatur kerja multi-agent dan perangkat inferensi.

### Transisi ke Slide Berikutnya

Setelah kita memahami apa yang dikonfigurasi pada agent, langkah berikutnya adalah memahami kapan agent meminta keputusan. Pada slide berikutnya, kita akan membahas `Decision Requester`, yaitu komponen yang mengatur frekuensi agent meminta action.

---

## Slide 039 - Decision Requester

### Narasi

Pada slide ini kita membahas **Decision Requester**, yaitu komponen yang mengatur **kapan agent meminta keputusan** atau **action** dari model. Dalam simulasi game, agent tidak selalu perlu mengambil keputusan pada setiap frame. Simulasi berjalan dalam `physics step`, sedangkan permintaan keputusan biasanya lebih mahal karena melibatkan pemanggilan model atau perhitungan kebijakan.

Intuisi praktisnya sederhana: **Decision Requester** menentukan frekuensi permintaan keputusan. Jika agent meminta `action` setiap `1 physics step`, perilaku sangat cepat, tetapi biaya komputasi meningkat dan agent bisa menjadi terlalu reaktif. Jika agent meminta `action` setiap `5 physics step`, keputusan lebih jarang, sehingga lebih hemat dan perilaku lebih stabil, tetapi respons bisa terasa tertunda.

Beberapa mode yang perlu dipahami:

- **Setiap N `physics step`**: keputusan diminta secara berkala, misalnya setiap 5 langkah simulasi.
- **Setiap `1 physics step`**: keputusan diminta setiap langkah simulasi, cocok untuk kontrol sangat cepat tetapi lebih mahal.
- **Manual**: keputusan diminta secara eksplisit, misalnya untuk pengujian, debugging, atau kondisi khusus.

Dalam konteks **Unity ML-Agents**, pengaturan ini memengaruhi hubungan antara `agent`, `environment`, dan `model`. Agent tetap bergerak dan berinteraksi dengan lingkungan, tetapi model hanya dipanggil pada interval yang ditentukan. Ini penting agar training tidak terlalu berat dan perilaku agent tidak berubah-ubah secara berlebihan.

Untuk praktikum awal, mahasiswa cukup menggunakan **Decision Period** sederhana, misalnya setiap beberapa `physics step`. Nilai yang terlalu kecil dapat membuat training lambat dan agent sulit belajar karena terlalu banyak keputusan. Nilai yang terlalu besar dapat membuat agent lambat bereaksi terhadap perubahan lingkungan.

Sebelum lanjut, hal penting yang harus dipahami adalah: **Decision Requester bukan menentukan `action` apa yang diambil**, tetapi **kapan agent meminta `action`**. Pilihan `action` tetap ditentukan oleh model, heuristic, atau logika yang tersedia.

### Inti yang Harus Ditekankan

- **Decision Requester** mengatur **frekuensi permintaan keputusan**, bukan isi keputusan.
- Frekuensi terlalu tinggi membuat training lebih mahal dan agent terlalu reaktif.
- Frekuensi terlalu rendah membuat agent kurang responsif terhadap perubahan lingkungan.
- Untuk praktikum awal, **Decision Period** sederhana sudah cukup untuk memahami alur agent.

### Transisi ke Slide Berikutnya

Setelah memahami kapan agent meminta keputusan, langkah berikutnya adalah melihat bagaimana `action` dapat diberikan secara manual melalui `Heuristic()` sebelum model dilatih.

---

## Slide 040 - Heuristic()

### Narasi

Pada slide ini kita membahas `Heuristic()`, yaitu metode yang memungkinkan kita mengendalikan agent secara manual. Dalam Unity ML-Agents, metode ini berguna ketika kita ingin agent bergerak bukan karena model yang sudah belajar, tetapi karena input dari manusia.

Intuisi praktisnya sederhana: sebelum agent belajar, kita perlu memastikan bahwa lingkungan, reward, dan action space sudah benar. Jika agent tidak bergerak atau bergerak tidak sesuai arah, masalahnya mungkin bukan pada algoritma, tetapi pada pemetaan action.

`Heuristic()` biasanya dipanggil ketika agent meminta keputusan, sesuai dengan pengaturan `Decision Requester`. Di dalam metode ini, kita mengisi buffer action yang akan digunakan oleh agent.

Contoh pada slide menggunakan action continuous:

```csharp
public override void Heuristic(in ActionBuffers actionsOut)
{
    var continuousActions = actionsOut.ContinuousActions;
    continuousActions[0] = Input.GetAxis("Horizontal");
    continuousActions[1] = Input.GetAxis("Vertical");
}
```

Pada potongan kode ini, `actionsOut` adalah wadah untuk action yang akan dikirim ke agent. `continuousActions` adalah array action continuous. Nilai `Input.GetAxis("Horizontal")` biasanya diambil dari tombol A/D, sedangkan `Input.GetAxis("Vertical")` dari W/S. Nilai yang dihasilkan umumnya berada di sekitar -1 sampai 1.

Dengan cara ini, kita dapat melakukan beberapa hal penting:

- menggerakkan agent secara manual dengan WASD,
- menguji apakah environment merespons action dengan benar,
- membandingkan perilaku manusia dengan perilaku model,
- memastikan mapping action sudah sesuai.

Sebelum training dimulai, `Heuristic()` sangat berguna untuk debugging. Mahasiswa perlu memahami bahwa jika agent tidak bisa dikontrol manual, maka model yang dilatih nanti juga akan kesulitan belajar karena lingkungan atau action space belum valid.

### Inti yang Harus Ditekankan

- `Heuristic()` digunakan untuk kontrol manual agent.
- Metode ini mengisi action buffer, bukan mengganti seluruh logika agent.
- Pada contoh, `continuousActions[0]` dan `continuousActions[1]` dipetakan ke input horizontal dan vertikal.
- Heuristic sangat berguna untuk debugging environment, action mapping, dan reward sebelum training.

### Transisi ke Slide Berikutnya

Setelah kita memastikan agent bisa dikontrol secara manual dan lingkungan sudah valid, langkah berikutnya adalah memahami bagaimana agent belajar secara otomatis. Pada slide berikutnya, kita akan membahas PPO secara konseptual sebagai algoritma reinforcement learning yang umum digunakan dalam Unity ML-Agents.

---

## Slide 041 - PPO secara Konseptual

### Narasi

**PPO** adalah singkatan dari **Proximal Policy Optimization**. Dalam konteks **Unity ML-Agents**, PPO adalah salah satu algoritma **reinforcement learning** yang umum digunakan untuk melatih agent agar mampu mengambil keputusan berdasarkan pengalaman.

Inti dari PPO adalah **policy**. Policy dapat dipahami sebagai aturan keputusan agent: ketika agent menerima **observation** dari environment, policy menentukan **action** apa yang sebaiknya dilakukan. Action ini bisa berupa gerakan, rotasi, kecepatan, atau pilihan tindakan tertentu.

Secara sederhana, alur pembelajaran PPO dapat dibayangkan sebagai berikut:

1. Agent menerima **observation** dari environment.
2. **Policy** memilih **action** berdasarkan observation tersebut.
3. Environment memberikan **reward** dan observation baru.
4. PPO menggunakan pengalaman tersebut untuk memperbarui policy.

Kata **proximal** pada PPO penting karena algoritma ini menjaga agar perubahan policy tidak terlalu ekstrem. Jika policy diperbarui terlalu besar, perilaku agent bisa menjadi tidak stabil. Dengan pembatasan ini, PPO membantu agent belajar secara bertahap dan lebih konsisten.

PPO cocok untuk banyak jenis tugas, baik **continuous control** maupun **discrete control**. Contoh continuous control adalah mengatur arah gerak atau kecepatan agent. Contoh discrete control adalah memilih serangan, memilih item, atau memilih salah satu tindakan dari beberapa opsi.

Pada tahap pengantar ini, mahasiswa tidak perlu menghafal matematika PPO secara mendalam. Yang lebih penting adalah memahami bahwa PPO adalah metode untuk **mengoptimasi policy** berdasarkan pengalaman, reward, dan pembatasan perubahan agar agent belajar perilaku yang lebih baik.

### Inti yang Harus Ditekankan

- **PPO** adalah **Proximal Policy Optimization**, algoritma reinforcement learning yang umum dipakai di **Unity ML-Agents**.
- PPO belajar **policy** dari pengalaman agent, yaitu hubungan antara **observation**, **action**, dan **reward**.
- PPO menjaga perubahan policy agar tidak terlalu ekstrem sehingga pembelajaran lebih stabil.
- PPO cocok untuk tugas **continuous** dan **discrete control** dalam simulasi game.
- Mahasiswa cukup memahami konsepnya dulu, tanpa perlu menghafal rumus PPO secara mendalam.

### Transisi ke Slide Berikutnya

Selanjutnya, kita akan melihat mengapa PPO menjadi pilihan yang populer di Unity ML-Agents dan bagaimana posisinya dibandingkan dengan pendekatan berbasis pathfinding.

---

## Slide 042 - Mengapa PPO Digunakan?

### Narasi

Pada slide ini, kita tidak membahas rumus PPO secara mendalam. Fokusnya adalah memahami **mengapa PPO sering menjadi pilihan utama** ketika kita melatih agent di Unity ML-Agents.

PPO populer karena sifatnya yang **relatif stabil**. Dalam reinforcement learning, agent belajar dari banyak percobaan. Jika perubahan policy terlalu besar, agent bisa menjadi tidak konsisten atau sulit belajar. PPO dirancang agar pembaruan policy dilakukan secara bertahap, sehingga proses belajar lebih terkendali.

PPO juga fleksibel karena dapat digunakan untuk **continuous action** maupun **discrete action**.

- **Continuous action** cocok untuk kontrol gerak, misalnya kecepatan, arah, atau rotasi agent.
- **Discrete action** cocok untuk pilihan aksi yang terpisah, misalnya maju, mundur, belok kiri, atau belok kanan.

Fleksibilitas ini penting karena banyak tugas game memiliki kombinasi aksi yang tidak selalu berupa pilihan sederhana.

PPO juga cocok untuk **simulasi Unity** karena agent dapat belajar dari lingkungan yang kompleks, seperti posisi, kecepatan, jarak ke target, atau kondisi scene. Dalam Unity ML-Agents, agent menerima **observation**, memilih **action**, lalu menerima **reward**. PPO menggunakan pengalaman tersebut untuk memperbaiki policy secara bertahap.

Hal penting yang perlu dipahami adalah PPO **tidak mencari path seperti A\***. A\* adalah algoritma pathfinding yang mencari rute terbaik pada graph. PPO berbeda: ia belajar **policy** melalui banyak episode, trial and error, dan reward. Artinya, agent tidak diberi peta rute secara eksplisit, tetapi belajar perilaku yang menghasilkan reward lebih baik.

Karena alasan tersebut, PPO sering menjadi **default yang baik** untuk banyak kasus ML-Agents. Namun, ini tidak berarti PPO selalu paling tepat untuk semua masalah. Ia hanya menjadi pilihan yang praktis, stabil, dan mudah digunakan untuk banyak tugas game AI.

### Inti yang Harus Ditekankan

- **PPO dipilih karena relatif stabil** dan cocok untuk proses belajar yang bertahap.
- PPO mendukung **continuous action** dan **discrete action**, sehingga fleksibel untuk berbagai kontrol game.
- PPO cocok untuk **simulasi Unity** karena agent belajar dari observation, action, dan reward.
- PPO **bukan pathfinding**; ia belajar policy melalui banyak percobaan, bukan mencari rute seperti A\*.

### Transisi ke Slide Berikutnya

Setelah memahami mengapa PPO sering digunakan, langkah berikutnya adalah membandingkannya dengan pendekatan reinforcement learning yang lebih dasar, yaitu **Q-Learning**, agar mahasiswa dapat melihat perbedaan konsep, skala, dan kecocohannya untuk tugas game.

---

## Slide 043 - PPO vs Q-Learning

### Narasi

Pada slide ini kita membandingkan dua pendekatan dalam reinforcement learning: **Q-Learning** dan **PPO**. Perbandingan ini penting karena keduanya sama-sama belajar dari `reward`, tetapi cara merepresentasikan pengetahuan agent sangat berbeda.

**Q-Learning** adalah metode berbasis nilai. Agent menyimpan **Q-table** yang memetakan pasangan `state` dan `action` ke estimasi nilai jangka panjang. Intuisinya sederhana: agent belajar tabel “jika berada di `state` ini dan melakukan `action` ini, hasilnya seberapa baik”. Karena itu, Q-Learning sangat cocok untuk lingkungan kecil, diskrit, dan mudah dihitung, misalnya grid world sederhana.

Namun, Q-Learning memiliki keterbatasan ketika lingkungan membesar. Jika `state` menjadi banyak, kompleks, atau kontinu, ukuran Q-table bisa meledak. Dalam simulasi Unity, agent sering mengamati posisi, kecepatan, orientasi, jarak ke target, atau sensor lingkungan. Nilai-nilai tersebut biasanya kontinu, sehingga sulit dimasukkan ke tabel diskrit yang praktis.

**PPO** mengambil pendekatan yang berbeda. Alih-alih menyimpan tabel nilai, PPO belajar **policy** secara langsung. Policy ini biasanya direpresentasikan oleh neural network, sehingga mampu menangani `state` yang kompleks dan `action` yang dapat `discrete` maupun `continuous`. Dengan cara ini, agent tidak perlu menghitung semua kemungkinan `state` secara eksplisit; ia belajar pola perilaku yang menghasilkan `reward` lebih baik.

Secara praktis, Q-Learning sangat berguna untuk memahami dasar-dasar reinforcement learning. Mahasiswa dapat melihat bagaimana `reward`, `state`, dan `action` saling memengaruhi dalam lingkungan kecil. Sementara itu, PPO lebih cocok untuk training agent di **Unity ML-Agents**, terutama ketika perilaku agent harus belajar dari simulasi yang lebih realistis dan ruang keputusannya lebih besar.

Perlu ditegaskan bahwa PPO tidak bekerja seperti algoritma pathfinding seperti A*. PPO tidak mencari jalur optimal secara langsung, melainkan membentuk policy melalui banyak episode, observasi, dan `reward`. Hasilnya adalah perilaku yang muncul dari proses pembelajaran, bukan dari aturan jalur yang ditulis manual.

### Inti yang Harus Ditekankan

- **Q-Learning** menggunakan **Q-table** dan paling cocok untuk `state` serta `action` diskrit pada lingkungan kecil.
- **PPO** menggunakan **policy** berbasis neural network sehingga mampu menangani `state` kompleks dan `action` `discrete`/`continuous`.
- Q-Learning berguna untuk memahami dasar reinforcement learning; PPO lebih sesuai untuk simulasi agent di **Unity ML-Agents**.
- PPO belajar perilaku dari `reward`, bukan mencari path seperti A*.

### Transisi ke Slide Berikutnya

Setelah memahami mengapa PPO lebih sesuai untuk Unity ML-Agents, langkah berikutnya adalah melihat bagaimana policy dalam PPO direpresentasikan. Kita akan masuk ke **Policy Network**, yaitu komponen yang mengubah observasi menjadi keputusan `action`.

---

## Slide 044 - Policy Network

### Narasi

Pada slide ini kita membahas **policy network**, yaitu representasi kebijakan dalam PPO. Berbeda dengan Q-table, policy network berupa neural network yang belajar memetakan keadaan lingkungan ke keputusan gerak.

Intuisi praktisnya sederhana: agent tidak lagi memakai aturan `if-else` yang ditulis manual. Agent mengamati lingkungan, lalu network menghasilkan aksi yang dianggap paling menguntungkan berdasarkan pengalaman training.

```text
Observation:
arah target, velocity agent, jarak

Policy Network:
menghasilkan moveX dan moveZ
```

Pada contoh ini, `Observation` berisi informasi penting seperti arah target, kecepatan agent, dan jarak. Informasi ini biasanya disajikan sebagai vektor numerik yang bisa diproses oleh neural network. Dalam konteks Unity ML-Agents, nilai-nilai tersebut dapat diambil dari posisi agent, target, atau sensor lingkungan.

Output network berupa `moveX` dan `moveZ`, yang merupakan aksi kontinu. Nilai ini kemudian dapat digunakan untuk menggerakkan agent, misalnya melalui `Rigidbody` atau perubahan transformasi. Dengan cara ini, agent dapat belajar perilaku NPC yang lebih halus, seperti mengejar target sambil menyesuaikan arah dan kecepatan.

Tahap training PPO akan menyesuaikan bobot network agar aksi yang dihasilkan menghasilkan reward lebih tinggi. Pada slide ini, fokus utamanya adalah memahami bahwa policy network adalah fungsi yang dapat belajar, bukan aturan tetap.

Hal penting yang harus dipahami sebelum lanjut adalah kualitas `Observation` dan `Action`. Jika input tidak cukup informatif, network sulit belajar. Jika output tidak sesuai ruang aksi game, perilaku agent juga tidak akan masuk akal.

### Inti yang Harus Ditekankan

- **Policy network** adalah neural network yang memetakan `Observation` ke `Action`.
- Contoh: dari arah target, `velocity`, dan jarak, network menghasilkan `moveX` dan `moveZ`.
- Training PPO menyesuaikan bobot network berdasarkan reward, tetapi desain reward dibahas pada slide berikutnya.

### Transisi ke Slide Berikutnya

Dengan memahami policy network sebagai pemetaan dari observation ke action, kita lanjut ke peran reward dalam membentuk perilaku yang benar.

---

## Slide 045 - Reward dan PPO

### Narasi

Pada slide ini, kita fokus pada **reward** sebagai sinyal utama yang menentukan apa yang dipelajari oleh policy dalam PPO.

PPO tidak memiliki pemahaman langsung tentang tujuan game. Ia tidak tahu apa itu “menang”, “mencapai target”, atau “menghindari bahaya” kecuali jika tujuan tersebut diterjemahkan menjadi nilai reward.

Artinya, reward adalah bahasa antara desain game dan proses pembelajaran. Jika reward dirancang dengan benar, policy akan belajar perilaku yang sesuai. Jika reward salah, policy akan belajar perilaku yang tidak diinginkan.

Contoh reward yang baik:

```text
+1 mencapai target
-1 jatuh
-0.01 setiap step
```

Reward ini memberi sinyal yang jelas:

- `+1` mendorong agent untuk mencapai target.
- `-1` menghukum kondisi gagal, misalnya jatuh.
- `-0.01` setiap step mendorong agent menyelesaikan tugas dengan cepat, bukan berputar-putar tanpa tujuan.

Sebaliknya, contoh reward yang buruk:

```text
+1 bergerak cepat tanpa tujuan
```

Reward ini akan membuat agent belajar berlari cepat, tetapi tidak belajar mencapai target. Agent hanya memaksimalkan nilai yang diberikan, bukan memahami maksud desain.

Karena itu, **reward design** tetap sangat penting dalam reinforcement learning. Reward bukan sekadar angka, melainkan definisi operasional dari perilaku yang ingin kita ajarkan.

Sebelum lanjut, mahasiswa perlu memahami bahwa kualitas hasil pembelajaran sangat bergantung pada kualitas reward. Jika reward ambigu, kontradiktif, atau mudah dieksploitasi, policy akan menghasilkan perilaku yang aneh atau tidak berguna.

### Inti yang Harus Ditekankan

- **Reward** adalah satu-satunya sinyal tujuan yang digunakan PPO untuk menilai perilaku agent.
- Reward yang baik harus selaras dengan tujuan game, misalnya memberi reward untuk mencapai target dan memberi hukuman untuk gagal atau lambat.
- Agent akan belajar apa pun yang memaksimalkan reward, sehingga reward yang buruk akan menghasilkan policy yang buruk.
- **Reward design** adalah bagian penting dari desain perilaku agent, bukan sekadar detail teknis.

### Transisi ke Slide Berikutnya

Setelah memahami peran reward, langkah berikutnya adalah melihat bagaimana semua elemen ini disusun dalam alur kerja ML-Agents, mulai dari scene Unity, agent script, observation, action, reward, hingga proses training.

---

## Slide 046 - Training Workflow ML-Agents

### Narasi

Slide ini menunjukkan **workflow** umum dalam membangun agent yang belajar melalui Unity ML-Agents. Tujuannya adalah memberi gambaran besar sebelum masuk ke detail teknis: bagaimana scene game, definisi perilaku agent, dan proses training terhubung menjadi satu alur yang dapat dieksekusi.

Alur ini penting karena agent tidak cukup hanya diletakkan di scene. Agent harus tahu **apa yang dilihat**, **apa yang boleh dilakukan**, **apa yang membuatnya berhasil**, dan **kapan episode berakhir**.

1. **Buat scene Unity**  
   Scene menjadi lingkungan tempat agent berinteraksi.

2. **Buat Agent script**  
   Script ini menjadi jembatan antara objek game dan proses belajar.

3. **Tentukan observation**  
   `observation` adalah data yang dibaca agent, misalnya posisi, kecepatan, atau kondisi lingkungan.

4. **Tentukan action**  
   `action` adalah pilihan perilaku yang dapat dilakukan agent, misalnya bergerak, berputar, atau memilih gerakan tertentu.

5. **Tentukan reward**  
   `reward` memberi sinyal kualitas keputusan agent.

6. **Tentukan episode reset**  
   `episode reset` menandai kapan satu percobaan selesai dan agent mulai ulang.

7. **Tambahkan Behavior Parameters**  
   Komponen ini mengatur parameter perilaku dan proses belajar agent.

8. **Tambahkan Decision Requester**  
   Komponen ini memicu agent untuk mengambil keputusan pada kondisi atau interval tertentu.

9. **Jalankan training**  
   Agent berinteraksi dengan lingkungan, mengumpulkan pengalaman, dan memperbaiki keputusan yang diambil.

10. **Gunakan model hasil training**  
    Model yang sudah dilatih kemudian dipakai untuk menghasilkan keputusan saat game berjalan.

Praktikum detail akan menjelaskan langkah teknisnya, tetapi secara konseptual langkah 3 sampai 6 adalah bagian paling menentukan. Jika `observation` tidak cukup informatif, agent tidak bisa memahami keadaan. Jika `action` tidak sesuai dengan kemampuan gerak, agent tidak bisa mengeksekusi keputusan. Jika `reward` tidak mencerminkan tujuan, agent akan belajar perilaku yang salah. Jika `episode reset` tidak jelas, batas percobaan menjadi tidak konsisten.

Komponen `Behavior Parameters` dan `Decision Requester` berfungsi menghubungkan definisi perilaku tersebut dengan mekanisme belajar. Dengan kata lain, workflow ini bukan hanya daftar langkah, tetapi kontrak antara game dan agent: game menyediakan keadaan dan umpan balik, sedangkan agent menghasilkan keputusan berdasarkan keadaan tersebut.

Sebelum lanjut, mahasiswa perlu memahami bahwa training yang berhasil bergantung pada desain interaksi, bukan hanya pada model. Jika hasil training tidak sesuai, evaluasi pertama biasanya kembali ke `observation`, `action`, `reward`, dan `episode reset`.

### Inti yang Harus Ditekankan

- **Workflow ML-Agents** adalah pipeline dari scene Unity, definisi agent, proses training, hingga penggunaan model.
- `observation`, `action`, `reward`, dan `episode reset` adalah elemen utama yang menentukan kualitas perilaku agent.
- `Behavior Parameters` dan `Decision Requester` menghubungkan agent dengan pengaturan belajar dan pemicu pengambilan keputusan.
- Jika perilaku agent tidak sesuai, periksa kembali desain interaksi, bukan hanya model yang dilatih.

### Transisi ke Slide Berikutnya

Setelah alur kerja ini dipahami, slide berikutnya akan menunjukkan contoh tugas agent yang sederhana untuk melihat bagaimana `observation`, `action`, `reward`, dan episode diterapkan dalam satu skenario.

---

## Slide 047 - Contoh Tugas Agent

### Narasi

Pada slide ini kita melihat **contoh tugas agent** yang sederhana, tetapi sudah cukup untuk memperlihatkan bagaimana **reinforcement learning** bekerja dalam konteks game.

```text
Agent harus mencapai target di arena.
```

Secara intuitif, agent tidak diberi aturan eksplisit seperti "belok kiri, lalu maju". Agent belajar dari **pengalaman** di lingkungan. Lingkungan memberi informasi berupa **observation**, agent memilih **action**, lalu lingkungan memberi **reward** sebagai umpan balik. Proses ini berulang sampai agent menemukan strategi yang lebih baik.

Dalam tugas ini, **observation** yang diberikan kepada agent adalah:

- **posisi relatif target**, yaitu informasi arah dan jarak target terhadap posisi agent.
- **velocity agent**, yaitu kecepatan agent saat ini.

Observasi ini penting karena agent tidak perlu mengetahui seluruh dunia secara mutlak. Agent cukup memahami "target di mana" dan "saya sedang bergerak bagaimana". Dalam implementasi Unity, nilai-nilai ini biasanya dikirim ke agent melalui `Vector3`, `Vector2`, atau array numerik yang dapat diproses oleh model.

**Action** pada contoh ini adalah:

- `moveX`
- `moveZ`

Artinya agent dapat mengontrol gerakan pada sumbu horizontal, yaitu ke depan-belakang dan kiri-kanan. Pilihan action ini sederhana, tetapi sudah cukup untuk membuat agent belajar bergerak menuju target. Jika agent memilih `moveX` atau `moveZ` yang tepat, posisinya akan berubah, lalu observation berikutnya akan berubah juga.

**Reward** adalah sinyal pembelajaran. Pada slide ini reward didefinisikan sebagai:

- `+1` jika agent mencapai target.
- `-1` jika agent jatuh.
- `-0.01` setiap step.

Reward `+1` memberi sinyal bahwa tujuan utama tercapai. Reward `-1` memberi penalti jika agent keluar dari arena atau jatuh. Reward `-0.01` setiap step mendorong agent untuk menyelesaikan tugas secepat mungkin, bukan hanya bergerak tanpa arah. Kombinasi reward seperti ini membuat agent belajar tidak hanya "sampai", tetapi juga "sampai dengan efisien".

**Episode** adalah satu percobaan lengkap. Episode berakhir ketika:

- target tercapai,
- agent jatuh,
- atau `max step` tercapai.

Setelah episode berakhir, agent di-reset ke kondisi awal, lalu mencoba lagi. Inilah inti dari **trial and error** dalam reinforcement learning. Semakin banyak episode, semakin banyak pengalaman yang dikumpulkan, dan semakin baik model belajar memilih action yang menghasilkan reward lebih tinggi.

Sebelum lanjut, mahasiswa perlu memahami bahwa tugas agent ini bukan sekadar "agent bergerak". Yang penting adalah hubungan antara **observation**, **action**, **reward**, dan **episode**. Jika observation tidak cukup, agent tidak bisa membuat keputusan yang baik. Jika action terlalu kompleks, pembelajaran bisa menjadi sulit. Jika reward tidak dirancang dengan benar, agent bisa belajar perilaku yang tidak diinginkan.

### Inti yang Harus Ditekankan

- **Observation** memberi agent informasi yang cukup untuk mengambil keputusan, yaitu posisi relatif target dan velocity agent.
- **Action** berupa `moveX` dan `moveZ` adalah ruang keputusan sederhana untuk menggerakkan agent di arena.
- **Reward** dirancang agar agent belajar mencapai target, menghindari jatuh, dan menyelesaikan episode dengan cepat.
- **Episode** menandai satu siklus pembelajaran: mulai, bertindak, mendapat reward, berakhir, lalu reset.

### Transisi ke Slide Berikutnya

Setelah memahami apa yang harus dipelajari agent, langkah berikutnya adalah melihat bagaimana lingkungan training dibangun dalam scene Unity, termasuk area, agent, target, dan kemungkinan environment paralel.

---

## Slide 048 - Scene Training Sederhana

### Narasi

Pada slide ini, kita melihat **struktur scene training** yang paling sederhana untuk tugas agent mencapai target. Scene ini menjadi lingkungan tempat agent mengamati keadaan, mengambil tindakan, dan menerima reward.

Struktur dasarnya dapat dilihat sebagai berikut:

```text
TrainingArea
├── Ground
├── Agent
├── Target
├── Wall / Obstacle
├── Boundary
└── Camera
```

`TrainingArea` adalah ruang utama yang memuat seluruh elemen lingkungan. `Ground` menjadi permukaan tempat agent bergerak, sedangkan `Agent` adalah objek yang akan belajar mengambil keputusan. `Target` adalah tujuan yang harus dicapai, sesuai dengan tugas yang sudah dibahas sebelumnya.

`Wall / Obstacle` memberi batasan fisik agar agent tidak bergerak bebas tanpa hambatan. `Boundary` menjaga agar agent tetap berada dalam area yang valid. `Camera` membantu visualisasi proses training, terutama saat kita mengamati perilaku agent secara langsung.

Dalam konteks perilaku agent, scene ini menyediakan **observation**, **action**, dan **reward** secara implisit. Posisi relatif target dan velocity agent dapat menjadi observation, gerakan `moveX` dan `moveZ` menjadi action, sementara pencapaian target, jatuh, atau langkah yang terlalu lama menghasilkan reward.

Agar proses training lebih cepat, kita dapat menyiapkan beberapa environment paralel:

```text
TrainingArea_1
TrainingArea_2
TrainingArea_3
...
```

Setiap area paralel menjalankan episode sendiri secara bersamaan. Dengan begitu, agent dapat mengumpulkan pengalaman dari banyak situasi dalam waktu yang lebih singkat.

Intuisi praktisnya adalah: satu scene sederhana sudah cukup untuk memahami alur training, tetapi beberapa scene paralel membuat prosesnya lebih efisien. Mahasiswa perlu memahami bahwa struktur scene bukan sekadar susunan objek, melainkan representasi lingkungan yang akan digunakan agent untuk belajar.

### Inti yang Harus Ditekankan

- `TrainingArea` memuat komponen utama lingkungan: `Ground`, `Agent`, `Target`, `Wall / Obstacle`, `Boundary`, dan `Camera`.
- Scene sederhana ini menjadi dasar bagi agent untuk mengamati keadaan, mengambil action, dan menerima reward.
- Environment paralel memungkinkan beberapa episode berjalan bersamaan sehingga pengumpulan pengalaman lebih cepat.

### Transisi ke Slide Berikutnya

Selanjutnya, kita akan melihat bagaimana Unity dapat menduplikasi environment menjadi beberapa parallel training area, serta apa manfaatnya bagi proses training.

---

## Slide 049 - Parallel Training Areas

### Narasi

Pada slide sebelumnya, kita sudah melihat satu **scene training sederhana** yang berisi `Ground`, `Agent`, `Target`, `Wall`, `Boundary`, dan `Camera`. Struktur itu sudah cukup untuk memahami alur dasar, tetapi dalam praktik, satu arena saja membuat pengumpulan pengalaman relatif lambat. Pada slide ini, kita memperluas struktur tersebut dengan **parallel training areas**, yaitu beberapa environment yang diduplikasi dan dijalankan bersamaan.

Intuisi praktisnya sederhana. Jika satu `Agent` hanya berlatih di satu arena, maka dalam satu waktu ia hanya menghasilkan satu rangkaian pengalaman. Jika ada 16 arena, maka ada 16 `Agent` yang berlatih secara bersamaan. Setiap arena memiliki `Target`, batas, dan kondisi episode sendiri, sehingga data yang masuk ke proses training menjadi lebih banyak.

Contoh yang ditampilkan pada slide adalah:

```text
16 arena training
dengan agent dan target masing-masing
```

Artinya, bukan satu `Agent` yang mengendalikan 16 arena, melainkan setiap arena memiliki `Agent` sendiri. Dalam Unity, ini dapat dilakukan dengan menduplikasi scene, menginstansiasi beberapa `TrainingArea`, atau menyiapkan beberapa environment yang serupa.

Manfaat utama dari parallel training areas adalah:

- **Pengalaman lebih banyak**: setiap arena menghasilkan `observation`, `action`, dan `reward` sendiri.
- **Training lebih cepat**: jumlah sampel per satuan waktu meningkat, sehingga model dapat diperbarui lebih sering.
- **Variasi posisi lebih banyak**: jika posisi awal, target, atau layout sedikit berbeda antar arena, agent tidak hanya melihat satu konfigurasi.
- **Model belajar lebih general**: kebijakan yang dihasilkan tidak terlalu bergantung pada satu posisi atau satu episode tertentu.

Secara teknis, setiap arena menjalankan **episode** secara independen. Alurnya tetap sama: `reset`, `observation`, `action`, `reward`, hingga episode selesai. Namun, karena banyak arena berjalan bersamaan, sistem training dapat mengumpulkan pengalaman dari beberapa episode sekaligus. Ini meningkatkan **sample efficiency**, artinya agent membutuhkan lebih sedikit waktu nyata untuk mencapai perilaku yang diinginkan.

Hal penting yang harus dipahami mahasiswa adalah bahwa parallel training terutama meningkatkan **jumlah data pengalaman**, bukan otomatis mengubah kualitas perilaku. Jika semua arena identik dan deterministik, manfaat utamanya adalah kecepatan. Agar model benar-benar belajar generalisasi, variasi antar arena perlu dirancang dengan baik. Poin ini akan diperdalam pada slide berikutnya melalui randomization.

### Inti yang Harus Ditekankan

- **Parallel training areas** adalah duplikasi environment agar banyak `Agent` berlatih bersamaan.
- Setiap arena menjalankan `episode` sendiri dengan `observation`, `action`, dan `reward` yang independen.
- Manfaat utamanya adalah pengalaman lebih banyak, training lebih cepat, dan potensi generalisasi yang lebih baik.
- Parallelism meningkatkan jumlah data, tetapi variasi kondisi tetap perlu diperhatikan agar agent tidak hanya menghafal satu setup.

### Transisi ke Slide Berikutnya

Setelah kita memahami cara memperbanyak arena training, langkah berikutnya adalah memastikan variasi antar arena tidak hanya berupa jumlah, tetapi juga kondisi yang berbeda. Untuk itu, kita akan membahas randomization dalam training.

---

## Slide 050 - Randomization dalam Training

### Narasi

Pada slide ini kita membahas **randomization** dalam proses training `agent` di Unity ML-Agents. Intuisi utamanya sederhana: jika semua episode selalu dimulai dari kondisi yang sama, `agent` bisa saja belajar pola yang terlalu spesifik, bukan kemampuan yang bisa dipakai di banyak situasi.

Bayangkan `agent` selalu berada di posisi yang sama, `target` selalu berada di titik yang sama, dan `obstacle` juga tidak pernah berubah. Dalam kondisi seperti itu, `agent` mungkin hanya menghafal satu rute atau satu pola gerakan. Saat `inference`, jika posisi awal atau layout arena berubah, perilaku yang dihasilkan bisa menjadi tidak konsisten atau gagal.

Oleh karena itu, kita perlu memvariasikan kondisi lingkungan selama training. Beberapa contoh randomization yang umum digunakan adalah:

- posisi start `agent` diacak,
- posisi `target` diacak,
- `obstacle` diletakkan pada posisi yang berbeda,
- ukuran `arena` sedikit bervariasi.

Dengan variasi ini, `agent` dipaksa mencari strategi yang lebih umum. Ia tidak cukup hanya mengingat koordinat tertentu, tetapi harus memahami hubungan antara posisinya, posisi `target`, dan rintangan di sekitarnya.

Randomization juga membuat pengalaman belajar menjadi lebih kaya. Setiap episode menghasilkan situasi yang berbeda, sehingga model dapat melihat lebih banyak pola sebelum membentuk keputusan. Hal ini penting untuk perilaku NPC yang tetap masuk akal di banyak skenario, bukan hanya pada satu demo yang sudah diatur.

Namun, randomization tidak boleh langsung terlalu ekstrem. Jika di awal training posisi `target` terlalu jauh, `obstacle` terlalu banyak, atau arena terlalu besar, `agent` mungkin jarang mendapat reward. Akibatnya, proses belajar bisa menjadi lambat atau tidak stabil.

Karena itu, randomization sebaiknya disesuaikan dengan tahap pembelajaran. Di awal, variasi bisa dibuat kecil dan tugas masih cukup mudah. Seiring kemampuan `agent` membaik, variasi dapat ditingkatkan agar generalisasi semakin kuat.

### Inti yang Harus Ditekankan

- **Randomization** mencegah `agent` menghafal satu kondisi lingkungan.
- Variasi posisi start, `target`, `obstacle`, dan ukuran `arena` membantu model belajar **generalisasi**.
- Randomization yang terlalu sulit di awal dapat membuat training lambat atau tidak stabil.

### Transisi ke Slide Berikutnya

Setelah memahami pentingnya variasi lingkungan, langkah berikutnya adalah mengatur tingkat kesulitan secara bertahap. Pada slide berikutnya, kita akan membahas **curriculum learning**, yaitu cara memulai training dari tugas yang lebih mudah lalu meningkatkannya secara bertahap.

---

## Slide 051 - Curriculum Learning

### Narasi

Slide ini membahas **curriculum learning**, yaitu strategi pelatihan di mana agent tidak langsung dihadapkan pada kondisi paling sulit. Intuisinya sederhana: seperti melatih pemain atau NPC, kita mulai dari situasi yang masih bisa diselesaikan dengan mudah, lalu menaikkan tingkat kesulitan secara bertahap. Pendekatan ini membantu agent membangun perilaku dasar sebelum menghadapi lingkungan yang lebih kompleks.

Alasan pentingnya adalah bahwa jika tugas awal terlalu sulit, agent mungkin sulit menemukan pola yang benar. Dengan tahap yang lebih ringan, agent dapat memperoleh umpan balik yang lebih jelas, misalnya berhasil mencapai `target`, lalu memperkuat perilaku dasar seperti bergerak ke arah tujuan. Setelah perilaku dasar terbentuk, lingkungan dapat dibuat lebih menantang.

Contoh alurnya dapat dilihat sebagai berikut:

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

Pada **Tahap 1**, agent belajar hubungan antara gerakan dan reward karena `target` dekat dan tidak ada `obstacle`. Pada **Tahap 2**, jarak yang lebih jauh menuntut agent mempertahankan arah lebih lama. Pada **Tahap 3**, keberadaan `obstacle` memaksa agent menyesuaikan jalur, bukan hanya bergerak lurus. Pada **Tahap 4**, `arena` yang lebih kompleks melatih agent agar perilaku yang sudah terbentuk tetap berguna dalam variasi lingkungan yang lebih luas.

Hubungannya dengan randomization adalah keduanya membantu generalisasi, tetapi fokusnya berbeda. Randomization memberi variasi pada kondisi, sedangkan **curriculum learning** mengatur urutan tingkat kesulitan. Dalam praktikum Unity ML-Agents, tahap ini dapat diimplementasikan dengan mengubah parameter lingkungan secara bertahap, seperti jarak spawn `target`, jumlah `obstacle`, atau ukuran `arena`. Namun, untuk praktikum awal, teknik ini tidak wajib; ia menjadi lebih penting ketika tugas sudah sulit atau agent sulit belajar dari kondisi awal.

Yang perlu dipahami mahasiswa adalah bahwa **curriculum learning** bukan sekadar membuat game lebih sulit, melainkan merancang proses belajar agar agent tidak terjebak pada kegagalan berulang di awal training. Tujuannya adalah membuat sinyal pembelajaran lebih efektif: agent terlebih dahulu menguasai perilaku inti, lalu memperluasnya ke situasi yang lebih menantang.

### Inti yang Harus Ditekankan

- **Curriculum learning** adalah strategi training dari tugas mudah ke tugas yang lebih sulit secara bertahap.
- Contoh penerapannya: `target` dekat tanpa `obstacle`, lalu `target` lebih jauh, lalu tambahkan `obstacle`, lalu `arena` lebih kompleks.
- Teknik ini tidak wajib untuk praktikum awal, tetapi penting untuk tugas yang sulit karena membantu agent membangun perilaku dasar sebelum menghadapi kompleksitas.

### Transisi ke Slide Berikutnya

Setelah memahami cara mengatur tingkat kesulitan training, langkah berikutnya adalah memastikan agent menerima informasi yang cukup dari lingkungan. Slide berikutnya akan membahas contoh desain observation minimal agar agent dapat mengetahui arah, jarak, dan gerak saat ini.

---

## Slide 052 - Observation Design Example

### Narasi

Pada tahap ini, kita fokus pada **apa yang dilihat agent** sebelum ia mengambil keputusan. Dalam reinforcement learning, kualitas perilaku agent sangat bergantung pada **observation** yang diberikan. Observation bukan sekadar posisi agent di dunia, melainkan informasi yang cukup untuk agent menilai situasi dan memilih tindakan.

Untuk tugas sederhana berupa **mencapai target**, observation minimal dapat berupa vektor dari agent ke target dan kecepatan agent saat ini. Intuisinya: agent tidak perlu tahu koordinat absolut; ia perlu tahu **ke mana arah target**, **seberapa jauh target**, dan **bagaimana agent sedang bergerak**.

Contoh implementasinya:

```csharp
Vector3 toTarget = target.position - transform.position;

sensor.AddObservation(toTarget.normalized);
sensor.AddObservation(toTarget.magnitude);
sensor.AddObservation(rb.linearVelocity);
```

Urutan eksekusi code ini penting:

1. `toTarget` dihitung sebagai selisih posisi target dan posisi agent.
2. `toTarget.normalized` memberi arah menuju target dalam bentuk vektor satuan.
3. `toTarget.magnitude` memberi jarak dari agent ke target.
4. `rb.linearVelocity` memberi kecepatan agent saat ini.
5. Semua nilai tersebut dikirim sebagai observation melalui `sensor.AddObservation`.

Secara konsep, observation ini membentuk input agent. Arah membantu agent mengetahui harus bergerak ke mana. Jarak membantu agent menilai apakah target sudah dekat atau masih jauh. Kecepatan membantu agent memahami momentum, misalnya agent sedang melaju, melambat, atau berubah arah. Dengan informasi ini, agent dapat belajar kebijakan yang lebih stabil.

Hal yang harus dipahami mahasiswa adalah **observation design** harus proporsional dengan tugas. Terlalu sedikit informasi membuat agent sulit belajar. Terlalu banyak informasi yang tidak relevan dapat memperlambat pembelajaran. Untuk target-reaching sederhana, vektor relatif dan kecepatan biasanya sudah cukup.

### Inti yang Harus Ditekankan

- **Observation** adalah input yang digunakan agent untuk menilai keadaan lingkungan.
- Untuk mencapai target, informasi penting adalah **arah**, **jarak**, dan **kecepatan saat ini**.
- `toTarget.normalized` memberi arah, `toTarget.magnitude` memberi jarak, dan `rb.linearVelocity` memberi gerak agent.
- Observation sebaiknya relatif dan cukup, bukan sekadar menyalin semua data dunia.

### Transisi ke Slide Berikutnya

Setelah agent tahu apa yang dilihat, langkah berikutnya adalah menentukan **apa yang bisa dilakukan agent**. Pada slide berikutnya, kita akan membahas desain action untuk pergerakan agent.

---

## Slide 053 - Action Design Example

### Narasi

Setelah agent memiliki **observation** yang cukup untuk memahami posisi relatif terhadap target, langkah berikutnya adalah menentukan **action space**, yaitu pilihan tindakan yang dapat dilakukan agent.

Pada contoh ini, agent bergerak di bidang **XZ**, sehingga cukup menggunakan dua aksi kontinu:

- `Action 0 = moveX`
- `Action 1 = moveZ`

Intuisinya, agent tidak perlu mengetahui koordinat dunia secara absolut. Ia hanya perlu memutuskan seberapa kuat mendorong ke arah sumbu X dan sumbu Z.

```csharp
float moveX = actions.ContinuousActions[0];
float moveZ = actions.ContinuousActions[1];

Vector3 force = new Vector3(moveX, 0f, moveZ);
rb.AddForce(force * moveForce);
```

Baris `actions.ContinuousActions[0]` dan `actions.ContinuousActions[1]` membaca nilai aksi yang dihasilkan agent. Nilai tersebut biasanya berada pada rentang tertentu, misalnya `-1` sampai `1`, sehingga agent dapat memilih arah dan intensitas gerak.

`Vector3 force = new Vector3(moveX, 0f, moveZ);` membuat vektor gaya hanya pada bidang horizontal. Komponen `y` dibuat `0f` agar agent tidak melompat atau jatuh secara sengaja melalui action.

`rb.AddForce(force * moveForce);` menerjemahkan keputusan agent menjadi gaya fisika. `moveForce` menjadi parameter tuning: semakin besar nilainya, agent semakin responsif, tetapi juga bisa menjadi tidak stabil.

Desain action seperti ini cocok untuk kontrol halus, misalnya agent yang bisa berbelok sedikit demi sedikit. Namun, jika agent terlalu sulit dikontrol, action dapat disederhanakan menjadi **discrete movement**, misalnya hanya `moveForward`, `moveLeft`, `moveRight`, atau `moveBackward`.

Yang perlu dipahami mahasiswa: **observation** memberi informasi, **action** memberi kemampuan bertindak, dan kualitas keduanya menentukan apakah agent dapat belajar perilaku yang masuk akal.

### Inti yang Harus Ditekankan

- **Action space** menentukan pilihan yang dapat diambil agent.
- Pada contoh ini, dua aksi kontinu `moveX` dan `moveZ` cukup untuk gerak di bidang **XZ**.
- `rb.AddForce` mengubah keputusan agent menjadi gaya fisika yang memengaruhi gerak nyata.
- Jika kontrol terlalu sulit, action dapat disederhanakan menjadi **discrete movement**.

### Transisi ke Slide Berikutnya

Setelah agent tahu apa yang dilihat dan apa yang bisa dilakukan, langkah berikutnya adalah menentukan bagaimana perilakunya dinilai. Pada slide berikutnya, kita akan membahas **reward design** sebagai sinyal penguatan bagi agent.

---

## Slide 054 - Reward Design Example

### Narasi

Pada slide ini kita melihat bagaimana **reward** dirancang untuk agent yang bergerak menuju target. Dalam reinforcement learning, reward adalah sinyal umpan balik yang menentukan apakah perilaku agent dianggap baik atau buruk. Agent tidak diberi instruksi eksplisit untuk “pergi ke target”; ia belajar dari konsekuensi numerik yang diberikan lingkungan.

Contoh di bawah menunjukkan tiga jenis sinyal reward:

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

Bagian pertama memeriksa `distanceToTarget`. Jika jarak agent ke target kurang dari `1.0f`, agent dianggap berhasil. Kita memberi `AddReward(1.0f)` sebagai reward positif, lalu `EndEpisode()` untuk menutup episode. Artinya, episode ini selesai dengan hasil sukses, dan nilai reward positif menjadi sinyal kuat bahwa perilaku yang membawanya ke target adalah perilaku yang diinginkan.

Bagian kedua memeriksa `transform.localPosition.y`. Jika posisi vertikal agent kurang dari `-1f`, agent dianggap jatuh atau keluar dari area yang valid. Di sini diberikan `AddReward(-1.0f)` sebagai penalti, lalu `EndEpisode()`. Ini memberi tahu agent bahwa perilaku yang menyebabkan jatuh adalah perilaku buruk.

Baris terakhir, `AddReward(-0.001f)`, adalah penalti kecil yang diberikan setiap step selama episode masih berjalan. Nilai ini sengaja dibuat kecil agar tidak mendominasi reward keberhasilan atau kegagalan. Namun, karena diberikan terus-menerus, agent akan cenderung menyelesaikan tugas lebih cepat. Semakin lama agent bergerak tanpa mencapai target, semakin banyak penalti kecil yang terakumulasi.

Intuisi praktisnya adalah sebagai berikut:

- **Reward positif** diberikan saat tujuan utama tercapai.
- **Penalti besar** diberikan saat kegagalan serius, seperti jatuh.
- **Penalti kecil per step** mendorong efisiensi waktu.

Dengan desain seperti ini, agent tidak hanya belajar “mencapai target”, tetapi juga belajar “mencapai target dengan cara yang lebih cepat dan tidak jatuh”. Hal ini penting karena dalam game, perilaku NPC atau agent yang terlalu lambat, berputar-putar, atau sering gagal akan terasa tidak natural.

Sebelum lanjut, perlu dipahami bahwa reward bukan sekadar angka acak. Reward adalah bagian dari **desain perilaku agent**. Jika reward tidak jelas, agent bisa belajar perilaku yang tidak diinginkan. Jika reward terlalu besar atau terlalu kecil, proses belajar bisa menjadi lambat atau tidak stabil.

### Inti yang Harus Ditekankan

- `AddReward(1.0f)` adalah reward keberhasilan ketika `distanceToTarget < 1.0f`.
- `AddReward(-1.0f)` adalah penalti kegagalan ketika agent jatuh, yaitu `transform.localPosition.y < -1f`.
- `AddReward(-0.001f)` adalah penalti kecil per step untuk mendorong agent menyelesaikan tugas lebih cepat.
- `EndEpisode()` menandai akhir episode setelah kondisi sukses atau gagal terpenuhi.
- Reward harus dirancang agar tujuan utama tetap jelas dan perilaku agent sesuai dengan desain game.

### Transisi ke Slide Berikutnya

Setelah memahami contoh reward dasar, kita akan melihat bagaimana reward dapat diperhalus dengan **reward shaping**, yaitu menambahkan sinyal reward tambahan agar agent belajar lebih cepat tanpa mengubah tujuan utamanya.

---

## Slide 055 - Reward Shaping

### Narasi

Pada slide ini kita membahas **reward shaping**, yaitu strategi memberi **reward tambahan** yang kecil dan terarah agar `agent` lebih mudah menemukan perilaku yang diinginkan. Dalam reinforcement learning, `agent` belajar dari sinyal reward. Jika reward hanya diberikan saat tujuan utama tercapai, `agent` mungkin butuh waktu sangat lama untuk menemukan jalan ke sana. Reward shaping memberi petunjuk bertahap, misalnya memberi reward kecil positif ketika `agent` mendekati target dan reward kecil negatif ketika `agent` menjauh.

Intuisi praktisnya seperti memberi “jejak” kepada `agent`. Bayangkan `agent` harus menuju titik tertentu di scene Unity. Jika hanya ada reward besar saat tiba di target, `agent` bisa saja bergerak acak tanpa tahu apakah ia sedang mendekati atau menjauh. Dengan shaping, `agent` mendapat umpan balik setiap langkah: semakin dekat, semakin positif; semakin jauh, semakin negatif. Hal ini membantu `agent` membentuk kebijakan yang lebih terarah sejak awal training.

Dalam implementasi sederhana, shaping biasanya berupa fungsi jarak atau perubahan jarak terhadap target. Contoh konsepnya:

```text
Jika agent mendekati target:
    reward kecil positif

Jika agent menjauh:
    reward kecil negatif
```

Reward kecil ini biasanya jauh lebih kecil daripada reward utama. Tujuannya bukan menggantikan tujuan akhir, melainkan mempercepat eksplorasi. Dalam Unity ML-Agents, shaping sering diimplementasikan sebagai nilai kecil yang diberikan melalui `AddReward`, misalnya berdasarkan jarak `agent` ke target atau perubahan posisi `agent` dari satu langkah ke langkah berikutnya.

Namun, reward shaping harus dirancang dengan hati-hati. Jika reward tambahan terlalu besar, `agent` bisa saja hanya mengejar reward kecil tersebut, bukan menyelesaikan tugas utama. Akibatnya, `agent` mungkin terlihat meningkatkan skor, tetapi perilakunya tidak sesuai dengan tujuan desain game.

Karena itu, ada beberapa hal yang perlu dijaga:

- **Reward utama tetap harus jelas**, misalnya reward besar saat target tercapai atau episode selesai.
- **Reward shaping hanya sebagai pemandu**, bukan tujuan akhir.
- **Besaran reward harus proporsional**, sehingga `agent` tidak lebih tertarik pada reward kecil daripada tujuan utama.
- **Perilaku `agent` harus diamati**, bukan hanya angka reward, karena reward bisa naik sementara perilaku game tidak masuk akal.

Sebelum lanjut, mahasiswa perlu memahami bahwa reward shaping adalah alat bantu pembelajaran, bukan pengganti desain tujuan. Jika shaping terlalu kuat, `agent` mungkin terlihat “pintar” dalam meningkatkan skor, tetapi tidak benar-benar menyelesaikan misi. Jika shaping terlalu lemah, `agent` mungkin belajar lambat. Keseimbangan antara reward utama dan reward tambahan inilah yang menentukan apakah `agent` belajar perilaku yang diinginkan.

### Inti yang Harus Ditekankan

- **Reward shaping** adalah reward tambahan kecil yang membantu `agent` belajar lebih cepat.
- Shaping memberi umpan balik bertahap, misalnya reward positif saat mendekati target dan negatif saat menjauh.
- Reward utama tetap harus lebih penting daripada reward shaping.
- Jika shaping terlalu besar, `agent` bisa mengejar reward kecil dan tidak menyelesaikan tujuan utama.
- Desain reward harus selalu dicek dari perilaku `agent`, bukan hanya nilai reward.

### Transisi ke Slide Berikutnya

Setelah memahami bagaimana reward shaping memengaruhi pembelajaran `agent`, langkah berikutnya adalah mengamati apakah training benar-benar membaik. Pada slide berikutnya, kita akan melihat cara mengukur progres training, seperti perubahan reward, panjang episode, tingkat keberhasilan, dan perilaku `agent` di scene.

---

## Slide 056 - Measuring Training Progress

### Narasi

Pada slide ini, kita beralih dari proses **training** ke cara membaca apakah **agent** benar-benar belajar. Dalam konteks game, tidak cukup hanya melihat apakah program berjalan tanpa error. Yang lebih penting adalah apakah perilaku agent menjadi lebih masuk akal, lebih cepat mencapai tujuan, dan tidak lagi bergerak secara acak.

Selama training, ada beberapa indikator yang perlu diperhatikan. Indikator ini membantu kita menilai apakah agent sedang memperbaiki keputusan, atau justru masih terjebak pada perilaku yang tidak berguna.

Beberapa metrik utama yang perlu diamati adalah:

- **`cumulative reward`**: total reward yang diperoleh agent dalam satu episode. Jika rata-ratanya naik dari waktu ke waktu, itu biasanya berarti agent mulai menemukan perilaku yang lebih baik.
- **`episode length`**: panjang episode sebelum selesai. Jika tugasnya adalah mencapai target, episode yang lebih pendek sering menunjukkan bahwa agent menyelesaikan tugas lebih cepat. Namun, ini harus dibaca dengan hati-hati, karena episode pendek juga bisa terjadi jika agent berhenti terlalu awal.
- **`success rate`**: seberapa sering agent berhasil mencapai tujuan utama. Ini adalah indikator yang sangat penting karena reward saja tidak selalu menjamin bahwa tugas benar-benar selesai.
- **`loss` / learning curve**: gambaran bagaimana model internal agent menyesuaikan perkiraannya. Kurva yang mulai stabil atau menurun biasanya menunjukkan proses pembelajaran yang lebih terkendali.
- **behavior agent di scene**: pengamatan langsung di Unity. Agent yang belajar dengan baik biasanya bergerak lebih terarah, lebih konsisten, dan tidak lagi melakukan gerakan yang tidak relevan.

Indikasi bahwa training membaik biasanya terlihat dari beberapa pola sekaligus. Pola yang paling penting adalah **reward rata-rata naik**, **episode menjadi lebih pendek**, **success rate meningkat**, dan **agent bergerak lebih terarah**. Jika hanya satu indikator yang membaik tetapi perilaku agent masih tidak masuk akal, kita perlu lebih berhati-hati.

Sebaliknya, jika reward tidak naik atau bahkan stagnan, ada beberapa kemungkinan penyebab. Penyebab ini penting dipahami karena sering kali masalahnya bukan pada model, tetapi pada desain lingkungan atau sinyal pembelajaran.

Beberapa kemungkinan penyebab reward tidak naik adalah:

- **`observation` kurang**: agent tidak menerima informasi yang cukup untuk mengambil keputusan yang baik.
- **`reward` salah**: reward tidak mengarahkan agent ke tujuan utama, sehingga agent belajar perilaku yang tidak diinginkan.
- **`action` sulit**: ruang aksi yang diberikan terlalu terbatas atau tidak memungkinkan agent menyelesaikan tugas dengan mudah.
- **`environment` terlalu sulit**: lingkungan terlalu kompleks, terlalu banyak distraksi, atau target terlalu jauh sehingga agent sulit menemukan pola yang berguna.

Intuisi praktisnya adalah: kita tidak hanya bertanya “apakah reward naik?”, tetapi juga “apakah agent benar-benar menyelesaikan tugas dengan cara yang masuk akal?”. Dalam game, perilaku yang terlihat wajar di scene sering kali sama pentingnya dengan angka metrik.

### Inti yang Harus Ditekankan

- **`cumulative reward`**, **`episode length`**, **`success rate`**, **`loss`**, dan perilaku visual di scene adalah indikator utama untuk menilai progress training.
- Training yang baik biasanya ditandai oleh **reward rata-rata naik**, **episode lebih pendek**, **success rate naik**, dan gerakan agent yang lebih terarah.
- Jika reward tidak naik, periksa kemungkinan masalah pada **`observation`**, **`reward`**, **`action`**, atau tingkat kesulitan **`environment`**.

### Transisi ke Slide Berikutnya

Setelah kita memahami cara membaca progress training, langkah berikutnya adalah memahami bagaimana proses training itu diatur. Slide berikutnya akan membahas **Training Configuration**, yaitu file konfigurasi yang menentukan parameter penting dalam proses pembelajaran agent.

---

## Slide 057 - Training Configuration

### Narasi

Pada slide ini kita masuk ke bagian praktis dari **Reinforcement Learning** di **Unity ML-Agents**, yaitu bagaimana proses training diatur. ML-Agents tidak hanya mengandalkan agent yang berada di scene; ia juga membaca **file konfigurasi training**. File ini menentukan bagaimana agent belajar dari pengalaman, seberapa besar langkah pembelajaran dilakukan, dan sampai kapan proses training dijalankan.

Secara intuitif, konfigurasi training dapat dipahami seperti **setelan mesin pembelajaran**. Jika setelannya tidak sesuai, agent bisa belajar terlalu lambat, terlalu cepat, tidak stabil, atau tidak mampu mencapai perilaku yang diinginkan. Karena itu, konfigurasi menjadi bagian penting sebelum kita menilai apakah agent benar-benar belajar dengan baik.

Beberapa parameter utama yang perlu dikenali adalah:

- `trainer_type`: menentukan jenis algoritma atau trainer yang digunakan untuk pembelajaran.
- `batch_size`: mengatur jumlah sampel pengalaman yang digunakan dalam satu langkah update.
- `buffer_size`: mengatur kapasitas penyimpanan pengalaman sebelum diproses.
- `learning_rate`: mengatur seberapa besar perubahan parameter model pada setiap update.
- `beta`: parameter yang memengaruhi stabilitas atau keseimbangan proses pembelajaran, tergantung jenis trainer.
- `epsilon`: parameter yang berkaitan dengan eksplorasi atau ambang perilaku pembelajaran, tergantung jenis trainer.
- `network_settings`: mengatur arsitektur jaringan, seperti struktur layer atau ukuran model.
- `max_steps`: menentukan batas maksimum langkah training.

Untuk tahap pengantar, mahasiswa tidak perlu langsung menghafl nilai optimal dari setiap parameter. Yang lebih penting adalah memahami bahwa **konfigurasi training mengatur proses pembelajaran agent**. Parameter-parameter ini memengaruhi bagaimana agent memanfaatkan reward, memperbarui kebijakan, dan membentuk perilaku di environment.

Dalam konteks game AI, konfigurasi ini berkaitan langsung dengan kualitas perilaku agent yang dilatih. Misalnya, agent yang belajar bergerak menuju target, menghindari rintangan, atau memilih aksi tertentu akan sangat dipengaruhi oleh cara trainer memperbarui modelnya. Jika konfigurasi tidak sesuai, agent mungkin terlihat acak, lambat, atau tidak konsisten meskipun reward sudah diberikan.

Detail teknis seperti pemilihan nilai yang tepat, tuning parameter, atau perbandingan antar trainer akan dibahas lebih lanjut dalam **modul praktikum**. Pada pertemuan ini, fokus utamanya adalah membangun pemahaman awal bahwa training di ML-Agents tidak terjadi secara otomatis tanpa pengaturan; ia dikendalikan oleh konfigurasi yang menentukan arah dan proses pembelajaran.

### Inti yang Harus Ditekankan

- **ML-Agents menggunakan file konfigurasi training** untuk mengatur proses pembelajaran agent.
- Parameter seperti `batch_size`, `buffer_size`, `learning_rate`, `network_settings`, dan `max_steps` memengaruhi **kecepatan, stabilitas, dan hasil training**.
- Pada tahap pengantar, mahasiswa cukup memahami **peran konfigurasi**, bukan langsung menghafl nilai optimal; detail teknis dibahas di modul praktikum.

### Transisi ke Slide Berikutnya

Setelah memahami bahwa proses training diatur melalui konfigurasi, langkah berikutnya adalah memastikan agent dikenali dengan benar oleh trainer. Slide berikutnya akan membahas **Behavior Name** dan pentingnya konsistensi antara Unity, konfigurasi trainer, dan command training.

---

## Slide 058 - Behavior Name

### Narasi

Pada slide ini, fokusnya adalah **Behavior Name** dalam ML-Agents. Nama behavior bukan sekadar label tampilan; ia berfungsi sebagai **penghubung identitas** antara komponen di Unity dan proses training.

```text
Behavior Name: MoveToTarget
```

Nama ini harus konsisten di tiga tempat utama:

- **Unity Behavior Parameters** pada komponen agent,
- **konfigurasi trainer** yang menentukan parameter training,
- **command training** yang dijalankan untuk memulai proses belajar.

Jika ketiga nama tersebut sama, sistem dapat mencocokkan agent dengan trainer yang tepat. Sebaliknya, jika ada perbedaan kecil, misalnya `MoveToTarget` versus `MoveToTarget1`, trainer dapat gagal mengenali agent dengan benar.

Kesalahan ini termasuk **error umum** karena sering terlihat sepele. Mahasiswa perlu memahami bahwa konsistensi nama adalah prasyarat teknis sebelum training dapat berjalan lancar.

Sebelum lanjut, hal yang harus dipahami adalah: **Behavior Name** adalah kunci identifikasi, bukan sekadar penamaan. Tanpa konsistensi, konfigurasi training yang sudah dibahas sebelumnya tidak akan terhubung dengan agent yang benar.

### Inti yang Harus Ditekankan

- **Behavior Name** harus sama persis antara Unity, konfigurasi trainer, dan command training.
- Nama behavior berfungsi sebagai identitas agent untuk dikenali oleh trainer.
- Ketidakcocokan nama dapat menyebabkan trainer tidak mengenali agent dengan benar.
- Ini adalah error umum yang perlu dicek sebelum menjalankan training.

### Transisi ke Slide Berikutnya

Setelah nama behavior konsisten dan training dapat berjalan, langkah berikutnya adalah memahami apa yang dihasilkan setelah proses training selesai, yaitu model yang siap digunakan oleh agent di Unity.

---

## Slide 059 - Model Output

### Narasi

Setelah proses training selesai, hal penting yang perlu dipahami mahasiswa adalah bahwa sistem tidak langsung membuat agent menjadi mampu mengambil keputusan secara otomatis. Yang terjadi adalah sistem menghasilkan **Model Output**, yaitu hasil belajar dari agent selama proses training berlangsung. Model ini berisi **policy**, yaitu aturan keputusan yang memetakan observasi lingkungan ke `action` yang harus dilakukan oleh agent.

Dalam konteks game, policy inilah yang kemudian menentukan bagaimana agent, misalnya NPC, memilih perilaku berdasarkan keadaan yang dilihatnya. Jadi, model output bukan sekadar file tambahan, melainkan representasi dari kemampuan keputusan yang sudah terbentuk selama training.

Alur yang perlu diperhatikan adalah sebagai berikut:

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

Secara intuitif, model output bisa dibayangkan sebagai “otak” yang sudah dilatih. Selama training, agent mencoba berbagai `action`, menerima `reward`, dan memperbaiki policy-nya. Setelah proses tersebut selesai, hasil belajar disimpan sebagai `model file`. File ini kemudian dipasang ke `Behavior Parameters` pada agent di Unity.

Langkah pemasangan model ini penting karena tanpa model yang terpasang, agent tidak memiliki policy yang siap dijalankan. Selain itu, karena pada slide sebelumnya kita sudah menekankan pentingnya konsistensi `Behavior Name`, maka pemasangan model juga harus memperhatikan kesesuaian konfigurasi agar agent dapat mengenali model dengan benar.

Setelah model terpasang, `Behavior Type` perlu diarahkan ke `Inference Only`. Artinya, agent tidak lagi melakukan pembaruan parameter selama runtime. Agent hanya menggunakan model untuk mengambil keputusan. Ini berbeda dengan mode training, di mana agent masih belajar dari lingkungan. Pada tahap ini, fokus utamanya adalah menjalankan perilaku yang sudah terbentuk.

Yang harus ditekankan sebelum lanjut adalah bahwa model output adalah hasil akhir dari proses pembelajaran agent. Mahasiswa perlu memahami bahwa model ini menjadi dasar perilaku agent dalam game, terutama ketika agent mulai menjalankan policy berdasarkan kondisi lingkungan yang diberikan.

### Inti yang Harus Ditekankan

- **Model Output** adalah hasil belajar agent setelah training selesai.
- `model file` harus dipasang ke `Behavior Parameters` agar agent dapat menggunakan policy.
- `Behavior Type` perlu diset ke `Inference Only` agar agent menjalankan policy tanpa melakukan training lagi.
- Model menentukan bagaimana agent memilih `action` berdasarkan observasi lingkungan.

### Transisi ke Slide Berikutnya

Selanjutnya, kita akan melihat apa yang terjadi saat agent menjalankan model dalam mode inference di game, termasuk bagaimana `action` dihasilkan dan bagaimana `reward` serta episode masih dapat digunakan untuk evaluasi.

---

## Slide 060 - Inference dalam Game

### Narasi

Setelah model selesai dilatih dan dipasang pada `Behavior Parameters`, agent memasuki fase **inference**. Pada fase ini, agent tidak lagi memperbarui bobot model. Ia hanya membaca kondisi lingkungan, lalu meminta model memprediksi `action` yang harus dilakukan.

Artinya, proses belajar sudah berhenti. Model menjadi sumber keputusan. Agent mengamati `observation`, model menghasilkan `action`, lalu `action` tersebut dieksekusi di game. Alurnya sederhana:

1. Agent membaca `observation` dari lingkungan.
2. Model policy menghasilkan `action`.
3. `action` dikirim ke `Unity` untuk dijalankan.
4. Lingkungan berubah, lalu `observation` baru terbentuk.

Pada mode ini, `reward` tidak lagi dipakai untuk belajar. Namun `reward` masih bisa ada di runtime. Fungsinya berubah: bukan untuk memperbarui model, tetapi untuk membantu memahami perilaku agent.

`reward` dan `episode` masih berguna untuk beberapa hal:

- **Evaluasi**: melihat apakah agent mencapai tujuan.
- **Reset environment**: episode berakhir lalu agent mulai ulang.
- **Scoring**: mengukur performa agent.
- **Debugging**: memahami kenapa agent gagal atau terjebak.

Karena tidak ada update model, behavior cenderung lebih stabil dibanding saat training. Agent tidak lagi mencoba-coba secara agresif. Ia menjalankan policy yang sudah terbentuk. Ini penting karena mode inference mendekati penggunaan di game final, di mana model harus berjalan cepat, konsisten, dan tidak melakukan pembelajaran real-time.

Mahasiswa perlu memahami batasnya: inference tidak memperbaiki model. Jika model lemah, agent akan tetap lemah secara konsisten. Jadi sebelum menilai hasil akhir, pastikan training sudah cukup baik.

### Inti yang Harus Ditekankan

- **Inference** adalah eksekusi policy, bukan proses pembelajaran.
- `action` dihasilkan oleh model dari `observation` lingkungan.
- `reward` dan `episode` masih berguna untuk evaluasi, reset, scoring, dan debugging.
- Mode inference mendekati penggunaan model di game final.

### Transisi ke Slide Berikutnya

Jika behavior saat inference tidak sesuai harapan, biasanya kita perlu menelusuri masalah ke proses training. Selanjutnya, kita akan membahas masalah umum yang sering muncul saat training agent.

---

## Slide 061 - Common Training Problems

### Narasi

Pada tahap training, agent belum tentu langsung menunjukkan perilaku yang masuk akal. Masalah yang muncul sering kali bukan tanda bahwa model “gagal” secara mutlak, melainkan sinyal bahwa **loop pembelajaran** belum terbentuk dengan benar. Loop ini menghubungkan **Observation** dari environment, keputusan **Action** dari agent, perubahan environment, dan **Reward** yang kembali ke agent. Jika salah satu bagian tidak konsisten, gejala yang terlihat bisa sangat beragam.

Secara praktis, mahasiswa perlu membaca masalah training sebagai **diagnosis**, bukan sekadar daftar keluhan. Agent yang diam, bergerak acak, jatuh, atau tidak menaikkan reward biasanya menunjukkan adanya ketidakcocokan antara apa yang agent lihat, apa yang agent bisa lakukan, dan apa yang environment berikan sebagai umpan balik. Dalam konteks game, gejala ini membuat NPC tidak bisa berjalan, tidak bisa merespons lingkungan, atau justru menemukan celah skor yang tidak sesuai desain.

Sepuluh masalah umum pada slide ini dapat dipahami sebagai berikut:

1. **Agent tidak bergerak.** Ini sering terjadi jika **Action** tidak terhubung dengan komponen game, misalnya `Transform` atau `Rigidbody`, atau jika reward belum cukup mendorong agent untuk mencoba bergerak.
2. **Agent bergerak acak terus.** Perilaku acak dapat muncul ketika **Observation** tidak cukup, **Action space** terlalu besar, atau agent belum mendapat arah yang jelas dari reward.
3. **Agent jatuh terus.** Masalah ini biasanya terkait dengan physics, posisi awal, penalti jatuh, atau kurangnya informasi posisi dan kecepatan dalam **Observation**.
4. **Reward tidak naik.** Reward yang stagnan menunjukkan bahwa agent belum menemukan pola yang menguntungkan, atau sinyal reward belum membentuk perilaku yang jelas.
5. **Agent mengeksploitasi reward.** Agent dapat menemukan cara mendapatkan reward tanpa menyelesaikan tugas yang dimaksud. Ini sering disebut **reward hacking**, dan menandakan bahwa reward tidak selaras dengan tujuan desain.
6. **Training sangat lama.** Training yang lambat bisa disebabkan oleh episode yang panjang, environment yang berat, atau proses training yang tidak efisien.
7. **Behavior tidak general.** Agent mungkin terlihat berhasil pada satu kondisi, tetapi gagal ketika posisi, rintangan, atau parameter environment berubah.
8. **Observation kurang.** Jika agent tidak menerima informasi yang relevan, ia tidak dapat membuat keputusan yang tepat meskipun **Action space** sudah benar.
9. **Action mapping salah.** Agent mungkin menghasilkan action yang valid secara numerik, tetapi action tersebut tidak sesuai dengan gerakan atau perilaku yang diinginkan di Unity.
10. **Episode reset tidak benar.** Jika `Reset` tidak mengembalikan kondisi awal dengan konsisten, agent belajar dari kondisi yang tidak stabil dan evaluasi episode menjadi tidak dapat dipercaya.

Dalam diagnosis, mahasiswa sebaiknya tidak langsung mengubah model atau konfigurasi training. Langkah yang lebih aman adalah memeriksa urutan sebab-akibat: apakah **Observation** sudah cukup, apakah **Action** benar-benar memengaruhi environment, apakah **Reward** diberikan pada momen yang tepat, dan apakah **Episode** direset dengan benar. Dengan cara ini, masalah training dapat dilacak sebagai masalah desain lingkungan, bukan sekadar masalah algoritma.

Sebelum lanjut, hal penting yang harus dipahami adalah bahwa training yang sehat membutuhkan **umpan balik yang jelas**, **aksi yang dapat diamati**, dan **environment yang stabil**. Jika ketiga hal ini belum terpenuhi, perilaku agent yang aneh adalah hal yang wajar dan harus diperbaiki dari struktur pembelajaran, bukan hanya dari model.

### Inti yang Harus Ditekankan

- Masalah training biasanya merupakan gejala dari ketidakcocokan antara **Observation**, **Action**, **Reward**, **Episode**, dan **Reset**.
- Agent yang diam, acak, jatuh, atau mengeksploitasi reward menunjukkan bahwa loop pembelajaran belum valid.
- **Reward tidak naik** tidak selalu berarti model buruk; bisa jadi sinyal reward, observation, atau action yang salah.
- Diagnosis yang baik dimulai dari cek `Action mapping`, `Observation`, `Reward`, `Reset`, dan stabilitas environment.
- Behavior yang berhasil pada satu kondisi belum tentu **general**; perlu variasi lingkungan dan evaluasi yang konsisten.

### Transisi ke Slide Berikutnya

Setelah memahami gejala umum, kita akan masuk ke kasus yang paling sering muncul: agent tidak belajar. Pada slide berikutnya, kita akan menelusuri penyebab dan solusi praktisnya secara lebih fokus.

---

## Slide 062 - Problem: Agent Tidak Belajar

### Narasi

Pada slide ini, kita membahas satu masalah yang sering muncul saat melatih **agent** di Unity ML-Agents: **agent tidak belajar**. Artinya, setelah beberapa episode, perilaku agent tidak membaik secara konsisten. Agent mungkin tetap diam, bergerak acak, jatuh, atau tidak pernah mendekati tujuan. Yang perlu dipahami, masalah ini biasanya bukan berarti modelnya “bodoh”, tetapi sinyal pembelajaran yang diterima agent tidak cukup jelas, tidak valid, atau tidak konsisten.

Secara intuitif, agent belajar dari hubungan antara **observation**, **action**, dan **reward**. Jika agent tidak bisa melihat keadaan lingkungan yang relevan, jika aksi yang dipilih tidak mengubah lingkungan, atau jika reward tidak muncul pada saat yang tepat, agent tidak punya dasar untuk memperbaiki kebijakan. Dalam konteks game, ini seperti NPC yang tidak bisa belajar karena sensornya tidak membaca posisi target, tombol aksinya tidak terhubung, atau umpan balik dari dunia game tidak memberi tahu apakah perilakunya benar.

Penyebab umum yang perlu dicek adalah:

- **Reward terlalu jarang**: agent hanya mendapat umpan balik setelah waktu lama, sehingga sulit menghubungkan `action` dengan hasil.
- **Reward salah**: reward diberikan untuk perilaku yang tidak diinginkan, atau tidak mencerminkan tujuan sebenarnya.
- **Observation tidak cukup**: agent tidak menerima informasi penting, seperti posisi target, jarak, kecepatan, atau status lingkungan.
- **Action tidak memengaruhi environment**: `action` dipanggil, tetapi tidak mengubah `transform`, `velocity`, atau state dunia.
- **Target terlalu sulit dicapai**: jarak, kecepatan, atau aturan game membuat agent hampir tidak mungkin menemukan solusi.
- **Episode terlalu pendek**: agent belum sempat mengeksplorasi atau menerima reward sebelum episode berakhir.
- **Physics tidak stabil**: agent terjebak, jatuh, terdorong, atau mengalami perilaku fisika yang tidak konsisten.

Langkah praktis untuk menanganinya sebaiknya dilakukan secara terurut:

1. **Sederhanakan environment**: kurangi distraksi, objek, atau aturan yang membuat agent sulit menemukan pola.
2. **Cek heuristic reward**: pastikan reward benar-benar mengarahkan agent ke perilaku yang diinginkan.
3. **Tambahkan reward shaping**: beri reward kecil untuk kemajuan bertahap, misalnya mendekati target, lalu reward besar saat mencapai target.
4. **Validasi action**: pastikan setiap `action` benar-benar mengubah lingkungan, misalnya mengubah `velocity`, `transform`, atau state NPC.
5. **Tampilkan debug observation**: periksa apakah `observation` berubah sesuai keadaan dunia dan tidak berisi nilai yang rusak atau konstan.
6. **Mulai dari task yang mudah**: latih agent pada versi sederhana dulu, lalu tingkatkan kesulitan secara bertahap.

Dalam implementasi Unity, mahasiswa perlu memeriksa pipeline lengkap: apakah `observation` yang dikirim ke agent benar, apakah `action` diproses pada langkah yang tepat, apakah `reward` diberikan pada kondisi yang tepat, dan apakah `episode` di-reset dengan benar. Jika salah satu bagian ini tidak valid, agent akan belajar dari sinyal yang salah atau tidak belajar sama sekali.

Sebelum lanjut, hal penting yang harus dipahami adalah: **agent tidak belajar** sering kali adalah masalah desain lingkungan dan sinyal pembelajaran, bukan hanya masalah parameter model. Mahasiswa harus terbiasa melakukan debugging secara sistematis: periksa input, aksi, umpan balik, dan reset episode sebelum menyimpulkan bahwa model gagal.

### Inti yang Harus Ditekankan

- **Agent tidak belajar** berarti tidak ada peningkatan perilaku yang konsisten dari episode ke episode.
- Penyebab utama biasanya ada pada **reward**, **observation**, **action**, **environment**, atau **reset episode**.
- Solusi paling efektif adalah menyederhanakan task, memvalidasi pipeline, dan memberi **reward shaping** yang jelas.

### Transisi ke Slide Berikutnya

Jika masalah ini sudah teratasi, agent biasanya mulai menunjukkan peningkatan reward. Namun, ada kasus berikutnya yang lebih halus: reward naik, tetapi perilaku agent tidak benar atau tidak menyelesaikan tujuan. Kita akan membahasnya pada slide berikutnya.

---

## Slide 063 - Problem: Reward Naik tapi Behavior Buruk

### Narasi

Slide ini membahas masalah yang sering muncul setelah agent mulai mendapat reward: nilai reward naik, tetapi perilaku agent justru tidak masuk akal. Dalam reinforcement learning, agent tidak memahami tujuan secara semantik; agent hanya belajar memaksimalkan sinyal reward yang diberikan environment. Karena itu, jika reward dapat dieksploitasi, agent akan menemukan jalan pintas yang membuat skor naik tanpa menyelesaikan task yang sebenarnya.

Masalah ini sering disebut sebagai **reward hacking** atau **reward exploitation**. Agent bisa mendapat reward karena mendekati target, menyentuh area tertentu, atau menghindari penalty yang salah, tetapi tidak pernah mencapai tujuan akhir. Dalam konteks game, perilaku seperti ini membuat NPC atau agent terlihat “berhasil” secara metrik, tetapi gagal secara gameplay.

Contoh yang paling umum adalah:

```text
Agent bergerak bolak-balik
karena mendapat reward mendekati target,
tetapi tidak pernah mencapai target.
```

Pada contoh ini, reward untuk mendekati target terlalu besar atau terlalu sering diberikan, sehingga agent belajar bahwa “dekat” sudah cukup. Agent tidak perlu mencapai target, cukup berada di sekitar area reward. Akibatnya, episode bisa terus berjalan, reward naik, tetapi task tidak selesai.

Penyebabnya biasanya ada pada desain reward, bukan pada kemampuan agent. Beberapa pemicu utama adalah:

- reward dapat dieksploitasi oleh pola gerakan sederhana,
- agent mendapat reward tanpa menyelesaikan tujuan,
- `penalty` tidak tepat, misalnya terlalu lemah atau justru menghukum perilaku yang seharusnya benar,
- `reward shaping` terlalu dominan sehingga reward kecil menutupi reward utama.

`Reward shaping` memang berguna untuk memberi petunjuk, tetapi jika terlalu besar, agent akan mengejar petunjuk tersebut, bukan tujuan akhir. Misalnya, reward untuk bergerak ke arah target bisa lebih besar daripada reward untuk mencapai target. Akibatnya, agent berhenti di dekat target atau berputar-putar di sekitar area yang memberi reward.

Solusinya adalah memperbaiki struktur reward agar tujuan utama lebih kuat. Langkah yang perlu dipahami mahasiswa adalah:

1. Perbaiki reward utama, misalnya reward untuk mencapai target harus lebih besar daripada reward pendekatan.
2. Beri reward utama lebih besar agar agent terdorong menyelesaikan task, bukan hanya mendekati target.
3. Beri `penalty` waktu agar agent tidak diam atau bergerak bolak-balik tanpa menyelesaikan episode.
4. Akhiri episode dengan jelas, misalnya saat target tercapai, waktu habis, atau agent terjebak, sehingga agent belajar dari hasil akhir yang benar.

Dengan perbaikan ini, agent tidak lagi hanya mengejar angka reward, tetapi belajar perilaku yang sesuai tujuan game. Mahasiswa harus mengecek reward secara visual: tampilkan reward per langkah, cek episode, dan amati apakah perilaku agent benar-benar menyelesaikan task, bukan hanya menaikkan skor.

### Inti yang Harus Ditekankan

- **Reward naik tidak selalu berarti perilaku agent baik**; agent bisa mengeksploitasi `reward shaping`.
- **Reward utama harus lebih kuat** daripada reward pendekatan atau reward kecil yang dapat dieksploitasi.
- **Penalty waktu dan akhir episode yang jelas** membantu agent belajar menyelesaikan task, bukan terjebak di area reward.
- **Evaluasi perilaku agent secara visual**, bukan hanya dari nilai reward atau skor.

### Transisi ke Slide Berikutnya

Setelah reward diperbaiki, masalah berikutnya yang sering muncul adalah agent hanya belajar pola tertentu di environment yang sama. Pada slide berikutnya, kita akan membahas bagaimana agent bisa “menghafal” posisi, target, dan obstacle, serta mengapa generalization penting agar perilaku agent tetap baik di kondisi yang berbeda.

---

## Slide 064 - Problem: Agent Menghafal

### Narasi

Pada slide ini kita melihat masalah yang sering muncul ketika agent terlihat “pintar” di lingkungan training, tetapi sebenarnya hanya **menghafal** situasi tertentu.

Artinya, agent tidak selalu belajar kemampuan umum, seperti “bagaimana mencari target” atau “bagaimana menghindari rintangan”. Agent bisa saja hanya belajar pola khusus dari lingkungan yang selalu sama.

Masalah ini biasanya terjadi karena lingkungan training terlalu statis.

- Posisi `start` selalu sama.
- Posisi `target` selalu sama.
- Bentuk dan posisi `obstacle` selalu sama.

Jika semua elemen itu tidak berubah, agent dapat menemukan satu jalur atau satu kebiasaan yang menguntungkan, lalu mengulanginya terus.

Dalam istilah reinforcement learning, agent mungkin hanya membentuk **policy** yang cocok untuk satu konfigurasi lingkungan, bukan policy yang mampu beradaptasi.

Secara praktis, bayangkan agent seperti pemain yang hanya pernah berlatih di satu peta. Ia bisa sangat cepat di peta itu, tetapi ketika pindah ke peta lain, ia mungkin bingung karena tidak pernah belajar cara berpikir yang lebih umum.

Untuk mengurangi masalah ini, kita perlu membuat lingkungan training lebih bervariasi.

- Randomize posisi `start`.
- Randomize posisi `target`.
- Randomize posisi atau bentuk `obstacle`.
- Gunakan beberapa `training area` yang berbeda.
- Evaluasi agent pada `scene` yang tidak digunakan selama training.

Dengan variasi ini, agent dipaksa untuk belajar prinsip navigasi, bukan hanya menghafal satu rute.

Hal penting yang harus dipahami mahasiswa adalah: **generalization** sangat penting dalam Game AI. Agent yang baik bukan hanya agent yang mendapat reward tinggi di satu lingkungan, tetapi agent yang perilakunya tetap masuk akal ketika lingkungan berubah.

Sebelum lanjut, pastikan mahasiswa memahami bahwa masalah ini berbeda dari masalah reward yang salah. Pada slide sebelumnya, masalahnya adalah reward bisa dieksploitasi. Pada slide ini, reward mungkin sudah benar, tetapi agent tetap gagal karena lingkungannya terlalu sempit dan terlalu mudah dihafal.

### Inti yang Harus Ditekankan

- Agent bisa terlihat berhasil hanya karena **menghafal** lingkungan training.
- Penyebab utamanya adalah `start`, `target`, dan `obstacle` yang selalu sama.
- Solusinya adalah **randomisasi** dan variasi lingkungan selama training.
- Agent harus dievaluasi pada `scene` berbeda untuk menguji **generalization**.
- Tujuan akhirnya adalah agent yang belajar perilaku, bukan hanya menghafal satu konfigurasi.

### Transisi ke Slide Berikutnya

Setelah memahami bahwa agent perlu belajar secara umum dan tidak hanya menghafal lingkungan, kita akan membandingkan pendekatan ML-Agents dengan cara navigasi yang lebih konvensional, yaitu `NavMeshAgent`.

---

## Slide 065 - ML-Agents vs NavMeshAgent

### Narasi

Pada slide ini kita membandingkan dua pendekatan yang sering muncul dalam pengembangan game: **ML-Agents** dan `NavMeshAgent`. Keduanya bisa membuat karakter bergerak, tetapi logika di belakangnya sangat berbeda. `NavMeshAgent` bekerja berdasarkan **pathfinding** dan **navigation**: sistem menghitung rute pada navigasi mesh, lalu karakter mengikuti path tersebut. `ML-Agents` bekerja berdasarkan **learning from reward**: agent mencoba berbagai aksi, menerima sinyal `reward`, lalu membentuk **policy** yang memetakan keadaan lingkungan ke aksi yang dianggap baik.

Secara praktis, `NavMeshAgent` adalah pilihan yang lebih langsung untuk kebutuhan navigasi umum. Jika tujuan karakter hanya menuju target, menghindari obstacle, dan bergerak mulus di scene, `NavMeshAgent` biasanya lebih mudah dipasang, lebih mudah diuji, dan lebih mudah dipahami. Debugging-nya juga lebih jelas karena kita bisa melihat path, target, dan status navigasi. Untuk banyak NPC yang hanya perlu berpindah lokasi, pendekatan ini sering lebih efisien dan lebih stabil.

`ML-Agents` lebih cocok ketika perilaku yang diinginkan sulit ditulis sebagai aturan eksplisit. Misalnya, agent perlu belajar strategi bertahan, mengejar, menghindari bahaya, atau menyesuaikan perilaku berdasarkan kondisi yang kompleks. Di sini outputnya bukan sekadar path, melainkan **policy** yang dipelajari dari proses training. Karena perilaku muncul dari pembelajaran, hasilnya bisa lebih adaptif, tetapi juga lebih sulit dikontrol dan lebih sulit di-debug. Designer perlu memahami `reward`, `observation`, `action space`, dan proses training agar perilaku agent sesuai harapan.

Perbedaan penting yang harus dipahami mahasiswa adalah **tujuan penggunaan**. Untuk navigasi praktis, `NavMeshAgent` lebih unggul karena deterministik, mudah diatur, dan cocok untuk production. Untuk perilaku belajar yang tidak mudah dirancang manual, `ML-Agents` lebih relevan karena agent dapat menemukan strategi melalui trial, `reward`, dan evaluasi. Namun, `ML-Agents` tidak selalu lebih baik; ia lebih mahal secara proses, lebih sulit dikontrol, dan membutuhkan evaluasi yang hati-hati agar perilaku yang dipelajari benar-benar general, bukan hanya cocok untuk kondisi tertentu.

Sebelum lanjut, mahasiswa perlu menangkap bahwa memilih pendekatan bukan soal mana yang lebih canggih, tetapi mana yang sesuai kebutuhan. Jika masalahnya adalah "bagaimana karakter sampai ke titik tujuan dengan andal", gunakan `NavMeshAgent`. Jika masalahnya adalah "bagaimana karakter belajar perilaku yang sulit didefinisikan dengan aturan", gunakan `ML-Agents`. Pemahaman ini akan membantu kita menilai kapan learning-based behavior diperlukan dan kapan sistem navigasi konvensional sudah cukup.

### Inti yang Harus Ditekankan

- `NavMeshAgent` cocok untuk **navigasi praktis** karena berbasis **pathfinding**, mudah dikontrol, dan mudah di-debug.
- `ML-Agents` cocok untuk **perilaku belajar** karena menghasilkan **policy** dari `reward`, tetapi lebih sulit dikontrol dan diuji.
- Pilihan utama ditentukan oleh kebutuhan: rute yang andal versus perilaku yang sulit ditulis aturan eksplisit.

### Transisi ke Slide Berikutnya

Setelah memahami perbandingan dengan `NavMeshAgent`, kita akan melanjutkan ke perbandingan `ML-Agents` dengan **Behavior Tree**, yaitu pendekatan decision-making yang dirancang secara modular dan lebih mudah dikontrol oleh designer.

---

## Slide 066 - ML-Agents vs Behavior Tree

### Narasi

Pada slide ini kita membandingkan dua cara membuat keputusan untuk agen game: **ML-Agents** dan **Behavior Tree**. Keduanya bisa menghasilkan perilaku NPC, tetapi logika pembuatannya berbeda. **ML-Agents** membangun perilaku melalui proses pembelajaran, sedangkan **Behavior Tree** dibangun secara manual oleh desainer atau programmer.

Intuisi praktisnya: jika kita ingin NPC yang bisa menyesuaikan diri dengan situasi yang sulit dirumuskan aturan, **ML-Agents** memberi ruang untuk belajar dari `reward`. Jika kita ingin perilaku yang mudah dibaca, mudah diubah, dan mudah dikontrol di production, **Behavior Tree** biasanya lebih aman.

Perbedaan utamanya ada pada **decision**. Pada **ML-Agents**, keputusan diambil oleh `policy` yang telah dilatih. `policy` ini memetakan observasi lingkungan ke aksi, misalnya bergerak, menyerang, atau menghindar. Pada **Behavior Tree**, keputusan dibuat dari rangkaian `node`, `condition`, dan `action` yang disusun secara eksplisit.

Dari sisi **debug**, **Behavior Tree** relatif lebih mudah karena alur keputusannya terlihat: node mana yang aktif, kondisi mana yang gagal, dan action mana yang dijalankan. Pada **ML-Agents**, debug lebih sulit karena perilaku muncul dari hasil training; kita perlu memeriksa `reward`, observasi, distribusi aksi, dan kualitas `policy`, bukan hanya membaca aturan.

Dari sisi **kontrol**, **Behavior Tree** memberi kontrol tinggi karena desainer dapat mengatur prioritas, urutan, dan kondisi perilaku. **ML-Agents** memberi kontrol lebih rendah hingga sedang: kita bisa membentuk perilaku melalui `reward` dan parameter training, tetapi hasil akhirnya tidak selalu langsung terprediksi.

Untuk **adaptasi**, **ML-Agents** beradaptasi melalui training dan pengalaman di environment. **Behavior Tree** beradaptasi melalui perubahan `node`, `condition`, atau struktur pohon. Karena itu, **Behavior Tree** cocok untuk **NPC behavior modular** yang perlu stabil dan mudah dirawat. **ML-Agents** cocok untuk eksperimen **learning-based behavior**, terutama ketika aturan manual sulit menangkap variasi perilaku.

Sebelum lanjut, mahasiswa perlu memahami bahwa perbandingan ini bukan soal mana yang selalu lebih baik. **Behavior Tree** unggul untuk kontrol dan kejelasan, sedangkan **ML-Agents** unggul untuk perilaku yang dipelajari dari lingkungan. Pilihan yang tepat bergantung pada kebutuhan game, kompleksitas perilaku, dan kebutuhan production.

### Inti yang Harus Ditekankan

- **ML-Agents** membuat keputusan melalui `policy` yang dipelajari dari `reward`, sedangkan **Behavior Tree** membuat keputusan melalui `node` dan `condition` yang dirancang manual.
- **Behavior Tree** lebih mudah di-debug dan lebih mudah dikontrol, sehingga cocok untuk **NPC behavior modular** di production.
- **ML-Agents** lebih cocok untuk eksperimen **learning-based behavior**, terutama ketika perilaku sulit ditulis sebagai aturan eksplisit.
- Perbedaan utama bukan hanya teknis, tetapi juga cara desainer mengendalikan perilaku agen: struktur eksplisit versus pembelajaran dari lingkungan.

### Transisi ke Slide Berikutnya

Setelah memahami perbedaan antara **ML-Agents** dan **Behavior Tree**, langkah berikutnya adalah melihat bagaimana pendekatan berbasis pembelajaran ini dapat digabungkan dengan sistem game klasik, bukan sekadar dipilih sebagai pengganti satu sama lain.

---

## Slide 067 - Integrasi ML-Agents dengan Game AI Klasik

### Narasi

Slide ini menekankan bahwa **ML-Agents** tidak selalu harus menjadi satu-satunya penggerak perilaku dalam game. Dalam praktik, ia lebih kuat ketika digabungkan dengan arsitektur klasik yang sudah matang. Intuisinya sederhana: sistem yang dirancang manual cocok untuk keputusan besar yang harus dapat dikontrol, sedangkan **ML policy** cocok untuk keputusan lokal yang fleksibel dan bisa belajar dari lingkungan.

Dengan pendekatan hybrid, setiap komponen memiliki tanggung jawab yang jelas. **FSM** dapat menentukan mode besar, misalnya `idle`, `chase`, atau `attack`. **ML policy** kemudian mengontrol gerakan lokal, seperti arah, kecepatan, atau respons terhadap posisi player. **NavMesh** tetap digunakan untuk menentukan jalur global yang valid di level. **Utility** dapat menilai kapan agent sebaiknya memakai perilaku berbasis pembelajaran, misalnya ketika situasi cukup kompleks atau ketika kontrol manual kurang adaptif. **Behavior Tree** dapat mengatur perilaku tingkat tinggi, sehingga alur keputusan tetap terbaca dan mudah di-debug.

Contoh alurnya dapat dilihat pada diagram berikut:

```text
Behavior Tree
└── Chase Player
    └── ML-Agent controls local movement
```

Diagram ini menunjukkan bahwa keputusan besar masih berada di lapisan atas. Node `Chase Player` dipilih oleh struktur perilaku klasik. Setelah mode itu aktif, agent berbasis ML tidak mengambil alih seluruh sistem, tetapi hanya mengeksekusi gerakan lokal. Pola ini penting karena menjaga keseimbangan antara fleksibilitas pembelajaran dan stabilitas produksi.

Poin yang harus dipahami mahasiswa adalah bahwa integrasi ini bukan soal mengganti seluruh sistem, melainkan membagi tugas. Lapisan klasik menjaga konsistensi, kontrol, dan kemudahan debugging. Lapisan ML menambah kemampuan adaptif pada bagian yang memang membutuhkan respons dinamis. Dengan pembagian seperti ini, agent dapat tetap berperilaku masuk akal secara global, tetapi lebih halus atau responsif pada level lokal.

### Inti yang Harus Ditekankan

- **ML-Agents** dapat menjadi bagian dari arsitektur, bukan pengganti seluruh sistem.
- Sistem klasik seperti **FSM**, **NavMesh**, **utility**, dan **Behavior Tree** tetap berperan untuk kontrol, jalur, penilaian, dan alur perilaku.
- ML policy paling efektif untuk keputusan lokal, misalnya gerakan, respons, atau adaptasi terhadap situasi.
- Integrasi hybrid membantu menjaga perilaku agent tetap stabil, mudah dikontrol, dan lebih adaptif.

### Transisi ke Slide Berikutnya

Setelah memahami pola integrasinya, kita akan melihat contoh penggunaan yang lebih konkret dalam skenario game, agar mahasiswa dapat membayangkan bagaimana pembagian tugas ini diterapkan pada perilaku agent yang sederhana.

---

## Slide 068 - Contoh Penggunaan dalam Game

### Narasi

Pada slide ini, kita melihat contoh sederhana bagaimana agen belajar perilaku yang umum dalam game. Tujuannya bukan langsung membuat sistem yang rumit, tetapi memahami bahwa perilaku seperti mengambil item, menghindari rintangan, atau menjaga jarak dapat diformulasikan sebagai tugas pembelajaran.

Contoh-contoh tersebut mewakili pola perilaku NPC yang sering muncul:

- **agen belajar mengambil item** menunjukkan kemampuan menuju objek dan menyelesaikan tujuan.
- **agen belajar menghindari obstacle** menunjukkan kemampuan menyesuaikan gerakan terhadap lingkungan.
- **enemy belajar menjaga jarak** menunjukkan perilaku strategis, bukan hanya bergerak.
- **robot belajar bergerak ke target** menunjukkan kontrol gerak menuju posisi tertentu.
- **drone belajar mengikuti player** menunjukkan perilaku pengawalan atau *following*.
- **companion belajar mendekati ally** menunjukkan perilaku kelompok atau koordinasi sederhana.

Dalam Unity, contoh-contoh ini dapat dijadikan dasar latihan sederhana. Yang penting adalah mengenali bahwa setiap perilaku memiliki tujuan yang jelas, kondisi lingkungan yang memengaruhi keputusan, dan hasil yang dapat dinilai.

Untuk tugas praktikum, fokusnya disederhanakan menjadi tiga kemampuan dasar:

```text
Move to Target
Avoid Obstacle
Reach Goal
```

Tiga kemampuan ini menjadi fondasi karena banyak perilaku game yang lebih kompleks dapat dibangun dari kombinasi ketiganya. `Move to Target` melatih agen menuju posisi tertentu. `Avoid Obstacle` melatih agen tetap aman saat bergerak. `Reach Goal` melatih agen menyelesaikan tugas dengan mencapai kondisi akhir.

Sebelum lanjut, mahasiswa perlu memahami bahwa contoh sederhana ini bukan sekadar demo. Ia menjadi dasar untuk merancang lingkungan, memilih perilaku yang ingin dilatih, dan menilai apakah agen sudah belajar dengan benar.

### Inti yang Harus Ditekankan

- Contoh perilaku game seperti mengambil item, menghindari obstacle, menjaga jarak, dan mengikuti player dapat diformulasikan sebagai tugas pembelajaran agen.
- Fokus praktikum adalah tiga kemampuan dasar: `Move to Target`, `Avoid Obstacle`, dan `Reach Goal`.
- Ketiga kemampuan tersebut menjadi fondasi untuk perilaku yang lebih kompleks, karena banyak perilaku NPC dapat dibangun dari kombinasi menuju target, menghindari rintangan, dan mencapai tujuan.

### Transisi ke Slide Berikutnya

Setelah memahami contoh perilaku yang akan dilatih, langkah berikutnya adalah merancang praktikum secara lebih terstruktur.

---

## Slide 069 - Desain Praktikum Pertemuan 14

### Narasi

Pada slide ini, kita menetapkan **desain praktikum** untuk pertemuan 14. Fokus utamanya adalah menyiapkan alur kerja yang akan dilakukan mahasiswa, bukan langsung membahas detail implementasi. Dengan kata lain, slide ini menjadi peta sebelum masuk ke modul praktikum.

Judul praktikum adalah **Training Agent Menggunakan Unity ML-Agents**. Artinya, mahasiswa akan membangun sebuah **training environment** sederhana di Unity, lalu melatih agent agar mampu mengambil keputusan berdasarkan interaksi dengan lingkungan.

Target praktikum dapat dilihat sebagai alur berikut:

1. Membuat **training environment** sederhana.
2. Menambahkan komponen `Agent`.
3. Menentukan `observation` yang dibaca agent.
4. Menentukan `action` yang dapat dilakukan agent.
5. Menentukan `reward` sebagai umpan balik.
6. Menjalankan `episode` untuk mengumpulkan pengalaman.
7. Melakukan **training** agar perilaku agent meningkat.
8. Menggunakan model hasil **training** untuk **inference**.

Dalam alur tersebut, `observation` adalah informasi yang tersedia bagi agent, misalnya posisi relatif terhadap target atau jarak ke objek. `Action` adalah pilihan keputusan yang bisa diambil, misalnya bergerak maju, belok kiri, atau belok kanan. `Reward` adalah sinyal yang menilai kualitas keputusan, sehingga agent belajar memperkuat perilaku yang menghasilkan hasil lebih baik.

Yang harus dipahami mahasiswa sebelum lanjut adalah hubungan antara `observation`, `action`, dan `reward`. Jika `observation` tidak cukup, agent tidak bisa membuat keputusan yang tepat. Jika `action` terlalu kompleks, proses **training** menjadi sulit. Jika `reward` tidak jelas, agent tidak memiliki arah pembelajaran yang konsisten.

Detail langkah teknis akan dibahas pada modul praktikum terpisah. Oleh karena itu, slide ini cukup digunakan untuk memastikan mahasiswa memahami struktur umum praktikum: lingkungan, agent, sinyal pembelajaran, episode, **training**, dan penggunaan model.

### Inti yang Harus Ditekankan

- Praktikum berfokus pada **training agent** menggunakan **Unity ML-Agents**.
- Mahasiswa perlu memahami alur: environment, `Agent`, `observation`, `action`, `reward`, `episode`, **training**, dan **inference**.
- `Observation`, `action`, dan `reward` adalah inti desain pembelajaran agent.
- Detail teknis tidak dibahas di slide ini, tetapi akan berada pada modul praktikum terpisah.

### Transisi ke Slide Berikutnya

Setelah memahami desain umum praktikum, slide berikutnya akan merekomendasikan skenario utama yang paling cocok untuk pertemuan ini, yaitu agent belajar mencapai target di arena.

---

## Slide 070 - Rekomendasi Praktikum

### Narasi

Pada slide ini, kita memilih **Rekomendasi Praktikum** yang paling sesuai untuk pertemuan 14. Rekomendasi utamanya adalah:

```text
Agent belajar mencapai target di arena
```

Pilihan ini sengaja dibuat sederhana. Mahasiswa tidak langsung dihadapkan pada perilaku agent yang rumit, tetapi pada inti proses **learning agent** dalam Unity ML-Agents: agent mengamati lingkungan, memilih `action`, menerima `reward`, lalu episode diulang.

Alasan utama rekomendasi ini adalah:

- **Sederhana**: struktur scene dan logika agent mudah diikuti.
- **Visual**: mahasiswa dapat melihat langsung agent bergerak menuju target.
- **Reward mudah dipahami**: agent mendapat `reward` jika mendekati atau mencapai `Target`.
- **Cocok untuk pengenalan ML-Agents**: mahasiswa dapat memahami hubungan `observation`, `action`, `reward`, dan `episode` tanpa beban teknis yang terlalu berat.
- **Observation dan action tidak terlalu kompleks**: cukup posisi agent, posisi target, dan action gerak dasar.

Dengan rekomendasi ini, mahasiswa diharapkan memahami bahwa praktikum pertama bukan tentang membuat agent yang langsung sempurna, tetapi tentang membangun **loop pembelajaran** yang benar. Jika loop ini sudah berjalan, pengembangan berikutnya dapat dilakukan secara bertahap.

Pengembangan opsional yang dapat diberikan setelah dasar berhasil:

- tambahkan `obstacle` agar agent belajar menghindari rintangan;
- gunakan `random target` agar agent tidak hanya menghafal satu posisi;
- gunakan `random start` agar agent belajar dari berbagai kondisi awal;
- siapkan `multi-agent training area` jika ingin memperluas ke beberapa agent;
- terapkan `reward shaping` agar proses belajar lebih stabil dan lebih cepat.

Namun, untuk pertemuan ini, fokus utama tetap pada satu tugas yang jelas: agent belajar mencapai target di arena.

### Inti yang Harus Ditekankan

- Rekomendasi praktikum adalah **agent belajar mencapai target di arena** karena sederhana, visual, dan mudah dipahami.
- Mahasiswa harus memahami hubungan `observation`, `action`, `reward`, dan `episode` sebagai dasar **learning agent** di Unity ML-Agents.
- Pengembangan seperti `obstacle`, `random target`, `random start`, `multi-agent`, dan `reward shaping` bersifat opsional dan dilakukan setelah dasar berjalan.

### Transisi ke Slide Berikutnya

Setelah rekomendasi ini dipilih, slide berikutnya akan menunjukkan struktur scene praktikum, yaitu bagaimana `Agent`, `Target`, `Ground`, `Wall / Obstacle`, dan `Boundary` disusun dalam `MLAgents_MoveToTarget`.

---

## Slide 071 - Scene Praktikum

### Narasi

Slide ini menunjukkan **struktur scene** yang akan digunakan dalam praktikum **Reinforcement Learning with Unity ML-Agents**. Scene ini menjadi lingkungan tempat **agent** belajar bergerak menuju target.

```text
MLAgents_MoveToTarget
├── TrainingArea
│   ├── Ground
│   ├── Agent
│   ├── Target
│   ├── Wall / Obstacle
│   └── Boundary
│
├── Main Camera
└── Debug UI
```

`MLAgents_MoveToTarget` adalah nama scene utama. Di dalamnya terdapat `TrainingArea` yang berfungsi sebagai **ruang latihan** bagi agent. `TrainingArea` berisi seluruh objek penting yang membentuk lingkungan belajar, yaitu `Ground`, `Agent`, `Target`, `Wall / Obstacle`, dan `Boundary`.

`Ground` adalah permukaan tempat agent bergerak. `Agent` adalah objek yang akan dikendalikan oleh model ML-Agents. `Target` adalah tujuan yang harus dicapai agent. `Wall / Obstacle` digunakan untuk memberikan tantangan sederhana, misalnya menghalangi jalur langsung. `Boundary` berfungsi sebagai batas area agar agent tidak keluar dari ruang latihan.

`Main Camera` digunakan untuk menampilkan scene secara visual, sehingga mahasiswa dapat melihat proses belajar agent secara langsung. `Debug UI` digunakan untuk menampilkan informasi tambahan, misalnya status episode, reward, atau parameter latihan. Dengan adanya `Debug UI`, proses belajar menjadi lebih mudah dipantau.

Perilaku agent dalam scene ini mengikuti alur sederhana:

1. Agent berada di atas `Ground`.
2. Agent mengamati posisi dirinya dan posisi `Target`.
3. Agent memilih aksi untuk bergerak.
4. Agent mendapat **reward** jika mendekati atau mencapai target.
5. Episode direset setelah agent berhasil atau gagal.

Hal penting yang harus dipahami mahasiswa sebelum lanjut adalah bahwa scene ini sengaja dibuat **sederhana dan visual**. Lingkungan yang jelas membantu mahasiswa memahami hubungan antara **observation**, **action**, **reward**, dan **episode reset** tanpa harus langsung menghadapi masalah yang terlalu kompleks.

### Inti yang Harus Ditekankan

- `TrainingArea` adalah lingkungan utama tempat agent belajar.
- `Agent`, `Target`, `Ground`, dan `Boundary` membentuk ruang interaksi yang jelas.
- `Main Camera` dan `Debug UI` membantu visualisasi serta pemantauan proses belajar.
- Agent belajar melalui siklus: mengamati, bertindak, mendapat reward, lalu episode direset.

### Transisi ke Slide Berikutnya

Setelah struktur scene dipahami, langkah berikutnya adalah melihat script praktikum yang akan mengimplementasikan perilaku agent, pengelolaan area latihan, dan komponen pendukung lainnya.

---

## Slide 072 - Script Praktikum

### Narasi

Pada slide ini kita melihat **struktur script** yang akan digunakan dalam praktikum. Struktur ini penting karena menunjukkan pembagian tanggung jawab antar komponen dalam scene.

```text
Scripts/
├── MoveToTargetAgent.cs
├── TrainingAreaManager.cs
├── TargetRandomizer.cs
├── ObstacleRandomizer.cs
└── MLAgentDebugUI.cs
```

Setiap script memiliki peran berbeda. `MoveToTargetAgent.cs` adalah **script utama** yang mengatur perilaku agent. `TrainingAreaManager.cs` mengelola area latihan dan episode. `TargetRandomizer.cs` dan `ObstacleRandomizer.cs` membantu variasi lingkungan. `MLAgentDebugUI.cs` menampilkan informasi debug.

Script utama `MoveToTargetAgent.cs` berisi beberapa method penting:

```text
OnEpisodeBegin()
CollectObservations()
OnActionReceived()
Heuristic()
```

Method-method ini membentuk **siklus keputusan** agent.

1. `OnEpisodeBegin()` dipanggil saat episode dimulai. Method ini menyiapkan posisi awal, variabel, dan kondisi awal agent.
2. `CollectObservations()` mengumpulkan informasi lingkungan, misalnya posisi agent, posisi target, jarak, atau arah.
3. `OnActionReceived()` menerima aksi yang dipilih oleh agent, lalu menerjemahkannya menjadi gerakan atau perilaku di Unity.
4. `Heuristic()` menyediakan aturan dasar sebagai fallback atau bantuan awal, misalnya bergerak menuju target.

Intuisi praktisnya: agent tidak langsung “tahu” harus ke mana. Agent membaca **observasi**, memilih **aksi**, lalu lingkungan memberi **reward** atau penalti. Proses ini berulang sampai episode selesai.

Dalam konteks game, agent ini bisa dipandang sebagai **NPC** yang belajar mencari target. Script ini menjadi jembatan antara lingkungan Unity dan proses pengambilan keputusan. Tanpa `CollectObservations()`, agent tidak memiliki informasi. Tanpa `OnActionReceived()`, keputusan tidak menjadi gerakan. Tanpa `OnEpisodeBegin()`, episode tidak ter-reset dengan benar.

### Inti yang Harus Ditekankan

- `MoveToTargetAgent.cs` adalah script utama yang mengatur perilaku agent.
- `OnEpisodeBegin()`, `CollectObservations()`, `OnActionReceived()`, dan `Heuristic()` membentuk alur dasar agent.
- Script lain seperti `TrainingAreaManager.cs`, `TargetRandomizer.cs`, `ObstacleRandomizer.cs`, dan `MLAgentDebugUI.cs` mendukung lingkungan, variasi, dan debug.
- Observasi, aksi, dan reset episode adalah konsep kunci sebelum membahas parameter.

### Transisi ke Slide Berikutnya

Setelah struktur script dipahami, langkah berikutnya adalah mengatur **parameter** yang memengaruhi perilaku agent dan lingkungan.

---

## Slide 073 - Parameter Praktikum

### Narasi

Pada slide ini, kita membahas **parameter praktikum** yang mengatur perilaku agen dalam lingkungan Unity ML-Agents. Parameter ini penting karena menentukan seberapa kuat agen bergerak, bagaimana episode diakhiri, dan apa umpan balik yang diterima agen selama belajar.

```text
moveForce = 10
targetReward = +1
fallPenalty = -1
stepPenalty = -0.001
maxStep = 500
decisionPeriod = 5
```

Secara intuitif, parameter ini dapat dipandang sebagai “knob” pengatur eksperimen. Nilai yang terlalu besar atau terlalu kecil dapat membuat agen sulit belajar, bergerak tidak stabil, atau episode terlalu cepat berakhir.

Berikut makna parameter yang perlu dipahami:

- `moveForce`: besaran gaya yang diberikan saat agen memilih aksi. Nilai ini memengaruhi kecepatan dan kestabilan gerak.
- `targetReward`: reward positif ketika agen mencapai target. Nilai ini menjadi sinyal utama bahwa agen berhasil.
- `fallPenalty`: penalti negatif ketika agen jatuh atau keluar area. Parameter ini mendorong agen menghindari kondisi gagal.
- `stepPenalty`: penalti kecil setiap langkah. Tujuannya agar agen tidak hanya bergerak tanpa arah, tetapi menyelesaikan target secara efisien.
- `maxStep`: batas maksimum langkah dalam satu episode. Parameter ini mencegah episode berjalan terlalu lama.
- `targetSpawnRadius` dan `agentSpawnRadius`: radius spawn target dan agen. Nilai ini memengaruhi variasi posisi awal dan tingkat kesulitan.
- `decisionPeriod`: interval pengambilan keputusan agen. Semakin kecil, agen lebih sering memilih aksi; semakin besar, kontrol lebih jarang tetapi mungkin lebih hemat komputasi.

Dalam konteks reinforcement learning, parameter reward seperti `targetReward`, `fallPenalty`, dan `stepPenalty` membentuk **reward shaping**. Reward shaping menentukan apa yang dianggap berhasil oleh agen. Jika `targetReward` terlalu kecil dibanding `stepPenalty`, agen mungkin enggan bergerak. Sebaliknya, jika `stepPenalty` terlalu kecil, agen bisa bergerak terlalu lama tanpa tekanan untuk menyelesaikan episode.

Parameter `moveForce` dan `decisionPeriod` juga memengaruhi dinamika fisika game. `moveForce` yang terlalu besar dapat membuat agen melompat atau bergerak tidak terkendali, sedangkan `decisionPeriod` yang terlalu besar dapat membuat respons agen terasa lambat. Oleh karena itu, parameter ini perlu diuji secara bertahap.

Sebelum lanjut, mahasiswa perlu memahami bahwa parameter bukan sekadar angka di script. Parameter menentukan **kebijakan belajar**, **stabilitas episode**, dan **kesulitan lingkungan**. Perubahan kecil pada `stepPenalty` atau `maxStep` dapat mengubah hasil training secara signifikan.

### Inti yang Harus Ditekankan

- Parameter praktikum mengatur gerak, reward, penalti, durasi episode, dan spawn area.
- `targetReward`, `fallPenalty`, dan `stepPenalty` membentuk reward shaping yang menentukan apa yang dipelajari agen.
- `moveForce` dan `decisionPeriod` memengaruhi kestabilan gerak serta frekuensi pengambilan keputusan.
- `maxStep` dan radius spawn membantu mengendalikan panjang episode serta variasi posisi awal.
- Parameter dapat diubah untuk eksperimen, tetapi perlu diuji karena perubahan kecil dapat mengubah perilaku belajar.

### Transisi ke Slide Berikutnya

Setelah parameter dipahami, langkah berikutnya adalah menentukan apa yang dilihat agen melalui observation, karena parameter menentukan aturan belajar, sedangkan observation menentukan informasi yang digunakan agen untuk mengambil keputusan.

---

## Slide 074 - Observation Praktikum

### Narasi

Pada praktikum **Reinforcement Learning with Unity ML-Agents**, bagian yang sedang kita bahas adalah **observation**. Observation adalah informasi lingkungan yang diberikan kepada **agent** pada setiap langkah keputusan. Intuisinya sederhana: agent tidak dapat belajar mencapai target jika ia tidak tahu posisi target, jaraknya, atau keadaannya sendiri.

Observation minimal yang disarankan pada slide ini adalah:

```text
direction to target
distance to target
agent velocity
```

Dalam bentuk vektor praktis, nilainya dapat direpresentasikan sebagai:

```text
toTarget.x
toTarget.z
distance
velocity.x
velocity.z
```

Komponen `toTarget.x` dan `toTarget.z` memberi tahu **arah relatif** target terhadap agent pada bidang horizontal. Informasi ini penting karena agent perlu tahu ke mana harus bergerak, bukan hanya bahwa target ada.

Komponen `distance` memberi tahu **jarak** agent ke target. Nilai ini membantu agent menilai apakah ia sudah mendekati target atau masih jauh, sehingga perilaku menuju target menjadi lebih terarah.

Komponen `velocity.x` dan `velocity.z` memberi tahu **kecepatan** agent. Informasi ini berguna untuk memahami momentum gerak, mengurangi gerakan yang tidak stabil, dan membuat kontrol agent lebih halus.

Tambahan observation bersifat opsional dan hanya perlu ditambahkan jika lingkungan praktikum memang memilikinya:

- **obstacle ray sensor**, untuk mendeteksi rintangan di sekitar agent;
- **posisi relatif obstacle**, untuk membantu agent menghindari hambatan;
- **apakah agent menyentuh ground**, untuk kondisi jatuh atau ground check.

Prinsip utamanya adalah observation harus **cukup** agar agent dapat belajar mencapai target. Terlalu sedikit informasi membuat agent tidak dapat mengambil keputusan yang tepat, sedangkan informasi tambahan hanya berguna jika relevan dengan lingkungan yang sedang dibangun.

### Inti yang Harus Ditekankan

- **Observation** adalah input lingkungan yang dibaca oleh **agent**, bukan perintah gerak.
- Observation minimal yang disarankan adalah **arah target**, **jarak target**, dan **kecepatan agent**.
- Vektor `toTarget.x`, `toTarget.z`, `distance`, `velocity.x`, dan `velocity.z` sudah cukup untuk arena sederhana.
- Tambahan seperti obstacle ray sensor, posisi relatif obstacle, dan ground check bersifat opsional.
- Observation harus cukup agar agent dapat belajar mencapai target tanpa informasi yang tidak relevan.

### Transisi ke Slide Berikutnya

Setelah agent mengetahui apa yang diamati dari lingkungan, langkah berikutnya adalah menentukan apa yang dapat dilakukan oleh agent. Pada slide berikutnya kita akan membahas **action** praktikum, baik continuous maupun discrete.

---

## Slide 075 - Action Praktikum

### Narasi

Setelah observation memberi agent informasi tentang lingkungan, langkah berikutnya adalah menentukan **action**. Action adalah ruang keputusan yang dapat dipilih agent untuk memengaruhi pergerakannya. Intuisinya, action adalah "tombol kendali" yang tersedia bagi agent: agent tidak bisa melakukan apa pun di luar ruang action yang didefinisikan.

Pada praktikum ini, action dapat dirancang sebagai **continuous action**:

```text
moveX
moveZ
```

Artinya, agent menghasilkan nilai gerak pada sumbu `X` dan sumbu `Z`. Nilai tersebut dapat bervariasi, sehingga agent bisa bergerak ke depan, mundur, miring, atau menggabungkan dua arah sekaligus. Pendekatan ini cocok untuk arena 3D sederhana karena gerak yang dihasilkan terasa lebih halus dan lebih natural.

Alternatifnya, action dapat dibuat sebagai **discrete action**:

```text
0 = diam
1 = maju
2 = mundur
3 = kiri
4 = kanan
```

Pada pendekatan discrete, agent hanya memilih salah satu dari beberapa aksi yang sudah didefinisikan. Setiap angka mewakili perintah gerak tertentu. Karena pilihan action terbatas, perilaku agent lebih mudah diamati, diuji, dan dianalisis.

Perbedaan utama antara keduanya adalah sebagai berikut:

- **Continuous action** memberi ruang gerak yang lebih luas dan lebih halus, tetapi perilaku agent perlu diperiksa lebih teliti karena nilai action dapat berubah secara bertahap.
- **Discrete action** memberi pilihan yang terbatas dan lebih mudah dianalisis, tetapi gerak agent mungkin terasa lebih kaku karena hanya mengikuti arah yang sudah ditentukan.

Rekomendasi untuk praktikum ini adalah:

1. Gunakan **continuous action** jika arena 3D sederhana dan agent perlu bergerak lebih natural.
2. Gunakan **discrete action** jika tujuan utama adalah memahami alur keputusan agent dengan lebih mudah.

Yang harus dipahami mahasiswa sebelum lanjut adalah bahwa action bukan sekadar daftar gerakan. Action menentukan bagaimana agent mengubah kondisi lingkungannya. Setelah agent memilih action, lingkungan akan merespons, misalnya posisi agent berubah. Hasil dari perubahan tersebut kemudian akan dinilai pada tahap reward.

### Inti yang Harus Ditekankan

- **Action** adalah ruang keputusan yang dapat dipilih agent untuk memengaruhi pergerakannya.
- **Continuous action** seperti `moveX` dan `moveZ` cocok untuk arena 3D sederhana karena gerak lebih halus.
- **Discrete action** seperti `0 = diam`, `1 = maju`, dan seterusnya lebih mudah dianalisis karena pilihan terbatas.
- Pilihan action harus konsisten dengan observation dan tujuan agent mencapai target.

### Transisi ke Slide Berikutnya

Setelah ruang action ditentukan, langkah berikutnya adalah mendefinisikan **reward**, yaitu sinyal yang memberi tahu agent apakah tindakannya membawa hasil yang diinginkan.

---

## Slide 076 - Reward Praktikum

### Narasi

Pada slide ini kita membahas **reward** dalam praktikum. Reward adalah sinyal numerik yang diberikan kepada agent untuk menilai kualitas perilaku yang dilakukannya. Dalam pembelajaran penguatan, agent tidak diberi jawaban eksplisit, tetapi belajar dari reward yang diterima. Semakin besar total reward yang diperoleh, semakin baik strategi yang dipilih agent.

Reward dasar yang digunakan pada praktikum ini adalah:

```text
+1.0 mencapai target
-1.0 jatuh keluar arena
-0.001 setiap step
```

Reward ini memiliki tiga fungsi utama:

- `+1.0` diberikan ketika agent berhasil mencapai target. Ini adalah **reward utama** karena menyatakan bahwa tugas selesai.
- `-1.0` diberikan ketika agent jatuh keluar arena. Nilai ini negatif dan cukup besar agar agent belajar menghindari perilaku yang berbahaya atau gagal.
- `-0.001` diberikan setiap step. Ini adalah **step penalty** kecil yang mendorong agent menyelesaikan tugas secara efisien, bukan hanya diam atau bergerak tanpa tujuan.

Step penalty penting, tetapi nilainya harus tetap kecil. Jika penalti step terlalu besar, agent bisa menjadi terlalu takut untuk bergerak. Akibatnya, agent mungkin memilih diam karena diam dianggap lebih aman daripada mencoba bergerak. Sebaliknya, jika penalti step terlalu kecil, agent tidak memiliki tekanan untuk menyelesaikan tugas dengan cepat.

Selain reward dasar, kita juga dapat menambahkan **reward shaping** secara opsional:

```text
+ kecil jika mendekati target
- kecil jika menjauh dari target
```

Reward shaping berfungsi sebagai petunjuk tambahan. Misalnya, ketika agent mulai bergerak ke arah target, ia mendapat reward kecil. Jika agent bergerak menjauh, ia mendapat penalti kecil. Hal ini membantu agent belajar lebih cepat, terutama ketika reward utama berupa mencapai target masih jarang terjadi.

Namun, reward shaping tidak boleh terlalu dominan. Jika reward shaping lebih besar daripada reward utama, agent bisa saja hanya mengejar reward kecil tersebut tanpa benar-benar mencapai target. Misalnya, agent mungkin terus-menerus bergerak mendekati target tetapi tidak pernah menyentuhnya. Karena itu, reward utama tetap harus menjadi tujuan utama, yaitu:

```text
mencapai target
```

Dalam konteks Unity ML-Agents, reward biasanya diberikan pada momen tertentu, seperti saat agent menyentuh target, saat agent jatuh, atau setiap kali agent melakukan satu step. Mahasiswa perlu memahami bahwa reward bukan sekadar angka, tetapi merupakan desain perilaku. Reward menentukan apa yang dianggap berhasil, apa yang harus dihindari, dan bagaimana agent belajar mengambil keputusan.

Sebelum lanjut, hal yang penting untuk dipahami adalah bahwa reward harus seimbang. Reward utama harus jelas, reward kegagalan harus cukup kuat, dan reward shaping hanya boleh menjadi pendukung. Dengan desain reward yang baik, agent akan belajar mencapai target dengan cara yang lebih stabil dan efisien.

### Inti yang Harus Ditekankan

- Reward utama adalah `+1.0` saat agent **mencapai target**.
- Reward negatif ` -1.0` saat jatuh dan `-0.001` setiap step digunakan untuk menghindari kegagalan dan mendorong efisiensi.
- **Reward shaping** boleh digunakan, tetapi nilainya harus kecil dan tidak boleh mendominasi reward utama.
- Desain reward menentukan perilaku agent, bukan hanya memberi nilai pada hasil akhir.

### Transisi ke Slide Berikutnya

Setelah memahami bagaimana reward diberikan, langkah berikutnya adalah memahami kapan agent mulai dan mengakhiri satu percobaan. Slide berikutnya akan membahas **episode praktikum**, yaitu proses reset agent, penempatan target, kondisi berakhirnya episode, serta alur dari `OnEpisodeBegin()` hingga `EndEpisode()`.

---

## Slide 077 - Episode Praktikum

### Narasi

Pada slide ini, kita membahas **episode** dalam praktikum **Reinforcement Learning** dengan Unity ML-Agents. Episode dapat dipahami sebagai satu percobaan lengkap yang dilakukan oleh **agent** untuk menyelesaikan tugas, misalnya bergerak menuju target. Konsep ini penting karena agent tidak belajar dari satu langkah saja, melainkan dari rangkaian langkah yang membentuk satu pengalaman utuh.

Episode dimulai ketika fungsi `OnEpisodeBegin()` dipanggil. Pada tahap ini, lingkungan disiapkan kembali agar agent memulai dari kondisi awal yang konsisten. Beberapa hal yang biasanya direset adalah posisi agent, posisi target, dan kecepatan agent.

- Agent di-reset ke posisi awal atau posisi acak.
- Target ditempatkan secara acak.
- `velocity` agent di-reset agar tidak membawa momentum dari episode sebelumnya.

Reset ini penting karena setiap episode harus menjadi pengalaman baru. Jika agent masih membawa kecepatan atau posisi lama, perilaku yang dipelajari bisa menjadi tidak stabil dan sulit dianalisis.

Setelah episode dimulai, agent bergerak berdasarkan kebijakan yang dimilikinya. Pada setiap langkah, agent mengamati lingkungan, mengambil keputusan, lalu lingkungan memberikan umpan balik. Dalam konteks praktikum ini, umpan balik tersebut berupa reward yang sudah dibahas sebelumnya, tetapi fokus slide ini adalah alur episode, bukan detail nilai reward.

Episode berakhir ketika salah satu kondisi terminasi terpenuhi.

1. Agent berhasil mencapai target.
2. Agent jatuh keluar arena.
3. Jumlah langkah maksimum atau `max step` tercapai.

Ketika salah satu kondisi tersebut terjadi, fungsi `EndEpisode()` dipanggil. Fungsi ini menandai bahwa satu episode telah selesai, lalu lingkungan akan direset untuk memulai episode berikutnya.

Alur lengkapnya dapat dilihat sebagai berikut:

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

Alur ini menunjukkan bahwa proses pembelajaran terjadi secara berulang. Agent mulai dari kondisi awal, bergerak, menerima reward, lalu episode diakhiri. Setelah itu, agent direset dan mencoba lagi. Pengulangan inilah yang memungkinkan agent memperbaiki keputusannya seiring bertambahnya episode.

Secara intuitif, episode bisa dibayangkan seperti satu ronde permainan. Jika agent berhasil mencapai target, ronde selesai dengan hasil sukses. Jika agent jatuh, ronde selesai dengan kegagalan. Jika agent tidak mencapai target dalam batas langkah tertentu, ronde juga diakhiri agar proses tidak berjalan tanpa batas.

Hal yang perlu dipahami mahasiswa sebelum lanjut adalah bahwa **episode** adalah satuan pengalaman utama dalam reinforcement learning. Mahasiswa harus memahami kapan episode dimulai, apa yang direset, dan apa saja kondisi yang menyebabkan episode berakhir. Pemahaman ini menjadi dasar untuk mencoba variasi eksperimen pada slide berikutnya.

### Inti yang Harus Ditekankan

- **Episode** adalah satu percobaan lengkap yang dialami agent dalam menyelesaikan tugas.
- Episode dimulai dengan `OnEpisodeBegin()`, di mana posisi agent, target, dan `velocity` direset.
- Episode berakhir jika agent mencapai target, jatuh keluar arena, atau `max step` tercapai.
- `EndEpisode()` menandai akhir episode, lalu lingkungan direset untuk episode berikutnya.
- Pengulangan episode memungkinkan agent belajar dari pengalaman yang berulang dan terkendali.

### Transisi ke Slide Berikutnya

Setelah memahami alur episode, langkah berikutnya adalah mencoba variasi eksperimen untuk melihat bagaimana perubahan parameter memengaruhi perilaku agent.

---

## Slide 078 - Eksperimen Mahasiswa

### Narasi

Pada slide ini, mahasiswa tidak hanya menjalankan episode, tetapi melakukan **eksperimen** untuk melihat bagaimana perubahan lingkungan memengaruhi perilaku agent. Tujuannya adalah membangun intuisi: parameter yang tampak kecil, seperti nilai reward atau jumlah step, dapat mengubah cara agent belajar dan bergerak.

Sebelum mencoba, mahasiswa perlu memahami bahwa setiap perubahan harus diamati dari sisi **perilaku**, bukan hanya dari angka. Misalnya, agent mungkin lebih cepat, lebih ragu, lebih sering jatuh, atau hanya menghafal posisi target.

Berikut variasi yang dapat dicoba:

1. Mengubah **reward target** dengan `reward_target` untuk melihat apakah agent lebih termotivasi mencapai target.
2. Mengubah **step penalty** dengan `step_penalty` agar agent belajar bergerak efisien, bukan hanya diam atau bergerak tanpa arah.
3. Mengubah **max step** dengan `max_step` untuk mengatur batas episode dan mencegah agent terjebak terlalu lama.
4. Mengubah **decision period** dengan `decision_period` untuk melihat pengaruh frekuensi keputusan terhadap kelancaran gerakan.
5. Mengubah **observation** dengan `observation` agar mahasiswa memahami apa yang benar-benar dilihat agent.
6. Menambahkan **obstacle** dengan `obstacle` untuk meningkatkan kompleksitas lingkungan.
7. Menambahkan **ray sensor** dengan `ray_sensor` agar agent memiliki informasi lokal tentang hambatan di sekitarnya.
8. Membuat **target random** dengan `target_random` agar agent tidak hanya menghafal satu posisi.
9. Membuat beberapa **training area** dengan `training_area` untuk melatih agent menghadapi variasi lingkungan.
10. Membandingkan **heuristic control** dan **trained policy** dengan `heuristic_control` serta `trained_policy` untuk menilai apakah perilaku agent benar-benar hasil belajar.

Dalam praktik, perubahan sebaiknya dilakukan bertahap. Mahasiswa dapat mulai dari satu parameter, misalnya `reward_target`, lalu mengamati apakah agent lebih sering mendekati target. Setelah itu, tambahkan `step_penalty` atau `max_step` untuk melihat apakah agent menjadi lebih efisien. Jika lingkungan sudah stabil, baru tambahkan `obstacle`, `ray_sensor`, atau `target_random`.

Hal penting yang harus dipahami adalah hubungan antara **input**, **keputusan**, dan **hasil**. Jika `observation` kurang, agent tidak bisa mengambil keputusan yang baik. Jika `reward` tidak sesuai, agent mungkin belajar perilaku yang salah. Jika `max_step` terlalu pendek, agent belum sempat belajar. Jika `decision_period` terlalu jarang, gerakan bisa terasa kaku.

Eksperimen ini juga melatih mahasiswa berpikir seperti desainer game: setiap parameter bukan hanya angka, tetapi aturan perilaku. Dengan membandingkan `heuristic_control` dan `trained_policy`, mahasiswa dapat melihat perbedaan antara gerakan yang diprogram manual dan gerakan yang dihasilkan oleh policy yang telah dilatih.

### Inti yang Harus Ditekankan

- Eksperimen bertujuan memahami pengaruh `reward`, `step_penalty`, `max_step`, `decision_period`, dan `observation` terhadap perilaku agent.
- Tambahkan kompleksitas secara bertahap: `obstacle`, `ray_sensor`, `target_random`, dan beberapa `training_area`.
- Amati perubahan perilaku agent, bukan hanya nilai training.
- Bandingkan `heuristic_control` dan `trained_policy` untuk menilai apakah agent benar-benar belajar.

### Transisi ke Slide Berikutnya

Setelah mencoba variasi eksperimen ini, kita lanjut ke evaluasi praktikum untuk memeriksa apakah `observation`, `action`, `reward`, reset episode, dan hasil training sudah bekerja dengan benar.

---

## Slide 079 - Evaluasi Praktikum

### Narasi

Setelah mahasiswa melakukan eksperimen, slide ini menjadi titik pemeriksaan. Tujuannya bukan hanya melihat apakah agent berhasil, tetapi memastikan bahwa **sistem reinforcement learning** dalam Unity ML-Agents dibangun dengan benar. Jika salah satu komponen tidak berfungsi, hasil training bisa menyesatkan.

Evaluasi pertama adalah memeriksa **loop dasar agent**. Mahasiswa perlu memastikan bahwa `observation` yang diterima agent cukup untuk memahami lingkungan, misalnya posisi target, jarak, atau informasi sensor. Selanjutnya, `action` harus benar-benar memengaruhi movement agent. Jika action hanya berupa angka tetapi tidak mengubah velocity, rotasi, atau keputusan gerak, maka policy tidak memiliki kendali nyata terhadap lingkungan.

Selanjutnya, mahasiswa memeriksa **sinyal pembelajaran**. `reward` harus diberikan pada kondisi yang tepat, seperti mendekati target, mencapai target, atau terkena penalti. `episode reset` juga harus benar, karena reset yang salah membuat agent belajar dari kondisi yang tidak konsisten. Jika `cumulative reward` tidak meningkat atau agent tidak pernah mencapai target, biasanya ada masalah pada reward, observation, action, atau parameter training.

Hal penting berikutnya adalah membedakan **belajar yang benar** dengan **menghafal posisi**. Agent yang hanya berhasil pada satu posisi target belum tentu memiliki policy yang baik. Mahasiswa perlu mengecek apakah model hasil training dapat digunakan untuk `inference`, apakah training stabil, dan bagaimana perubahan behavior sebelum dan sesudah training. Perbandingan ini membantu mahasiswa melihat apakah policy benar-benar belajar, bukan sekadar mengikuti pola tertentu.

Sebelum lanjut, mahasiswa harus memahami bahwa evaluasi ini adalah dasar untuk debugging. Jawaban dari pertanyaan-pertanyaan ini akan menentukan apakah masalahnya ada pada setup agent, reward, reset, sensor, action mapping, atau proses training itu sendiri.

### Inti yang Harus Ditekankan

- **Observation** harus cukup agar agent dapat memahami target, obstacle, dan kondisi lingkungan.
- **Action** harus benar-benar memengaruhi movement atau keputusan agent.
- **Reward** dan **episode reset** harus konsisten agar sinyal pembelajaran tidak bias.
- **Cumulative reward** yang meningkat menunjukkan adanya proses belajar, tetapi harus dibarengi dengan keberhasilan mencapai target.
- Agent tidak boleh hanya menghafal posisi; policy harus dapat digunakan untuk **inference** dan menunjukkan perilaku yang lebih baik setelah training.

### Transisi ke Slide Berikutnya

Jika ada komponen yang belum berjalan dengan benar, langkah berikutnya adalah melakukan debug visual untuk melihat apa yang sebenarnya terjadi pada agent, target, reward, dan episode.

---

## Slide 080 - Debug Praktikum

### Narasi

Setelah melakukan evaluasi, langkah berikutnya adalah membuat proses **training** menjadi lebih mudah diamati. **Debug** di sini bukan hanya untuk mencari error, tetapi juga untuk membuat perilaku **agent** lebih transparan. Mahasiswa perlu melihat apa yang sedang dialami agent, apa yang sedang dilakukan agent, dan mengapa nilai **reward** berubah dari satu episode ke episode berikutnya.

Salah satu debug paling berguna adalah **garis dari agent ke target**. Garis ini memberi intuisi spasial yang sederhana: apakah agent sedang mendekat, menjauh, berputar, atau bergerak tidak konsisten. Jika garis tersebut memendek secara bertahap, mahasiswa dapat melihat bahwa agent mulai memahami hubungan antara posisi, **action**, dan target.

Selain garis visual, tampilkan juga nilai numerik seperti `distanceToTarget`, `lastReward`, `cumulativeReward`, `episodeCount`, `successCount`, dan `failCount`. Nilai-nilai ini membantu mahasiswa membedakan perilaku acak dari perilaku yang mulai terbentuk. Penurunan jarak dan kenaikan `cumulativeReward` adalah sinyal positif, tetapi harus dibaca bersama `successCount` dan `failCount` agar tidak menyesatkan.

Tambahkan pula `behaviorMode`, `velocity`, dan `targetPosition`. `behaviorMode` membantu melihat apakah agent sedang eksplorasi, mengejar target, atau berada pada kondisi gagal. `velocity` menunjukkan apakah **action** benar-benar memengaruhi movement. Sementara itu, `targetPosition` memastikan bahwa agent tidak bergerak menuju titik yang salah atau target yang tidak sesuai.

Dengan **debug visual**, mahasiswa tidak perlu menebak apakah training berjalan dengan benar. Mereka dapat melihat hubungan antara **observation**, **action**, **reward**, dan reset episode secara langsung. Hal ini penting karena praktikum yang bisa diamati akan lebih mudah dianalisis, lebih mudah diperbaiki, dan lebih mudah dipahami sebelum masuk ke hubungan dengan materi sebelumnya.

### Inti yang Harus Ditekankan

- **Debug visual** membuat proses training agent lebih mudah dipahami, terutama melalui garis agent ke target, `distanceToTarget`, `lastReward`, dan `cumulativeReward`.
- Metrik episode seperti `episodeCount`, `successCount`, dan `failCount` membantu menilai apakah pembelajaran mulai stabil atau masih bersifat kebetulan.
- `behaviorMode`, `velocity`, dan `targetPosition` membantu memastikan bahwa **action** benar-benar memengaruhi movement dan agent bergerak menuju target yang benar.

### Transisi ke Slide Berikutnya

Dengan debug yang jelas, mahasiswa dapat melihat lebih mudah bagaimana praktikum ini menghubungkan movement, navigation, reward, dan training policy di Unity.

---

## Slide 081 - Hubungan dengan Materi Sebelumnya

### Narasi

Slide ini menunjukkan bahwa **Unity ML-Agents** tidak berdiri sendiri, tetapi menjadi titik temu dari beberapa topik yang sudah dibahas sebelumnya. Secara sederhana, materi-materi sebelumnya menyediakan fondasi perilaku agen, sedangkan `Unity ML-Agents` memberikan cara untuk melatih kebijakan perilaku tersebut secara langsung di dalam game.

```text
Pertemuan 3  -> Movement
Pertemuan 4  -> Navigation
Pertemuan 11 -> DDA dan reward/adaptasi
Pertemuan 12 -> Player modeling dan data
Pertemuan 13 -> RL, state, action, reward
Pertemuan 14 -> Training policy di Unity
```

Hubungan tersebut dapat dibaca sebagai alur pembelajaran:

- **Movement** memberi dasar gerak agen, misalnya `velocity`, `move`, atau kontrol arah.
- **Navigation** membantu agen memahami lingkungan dan memilih jalur menuju target.
- **DDA dan reward/adaptasi** memberi ide bahwa perilaku game dapat menyesuaikan berdasarkan umpan balik.
- **Player modeling dan data** menunjukkan pentingnya mengamati pola pemain untuk menghasilkan respons yang lebih relevan.
- **RL, state, action, reward** menjadi inti dari pendekatan pembelajaran berbasis agen, di mana agen belajar memilih tindakan berdasarkan kondisi dan hasil yang diterima.
- **Training policy di Unity** adalah tahap implementasi, di mana kebijakan perilaku dilatih dan diuji langsung pada scene game.

Dengan demikian, mahasiswa perlu memahami bahwa `Unity ML-Agents` bukan sekadar fitur tambahan, melainkan bentuk nyata dari **learning-based game cerdas**. Sebelum masuk ke proyek akhir, hal penting yang harus tertanam adalah bahwa kualitas hasil pelatihan sangat bergantung pada desain `state`, `action`, dan `reward` yang konsisten dengan perilaku yang diinginkan.

### Inti yang Harus Ditekankan

- **Unity ML-Agents** menghubungkan movement, navigation, reward, player modeling, dan reinforcement learning menjadi satu alur implementasi.
- `state`, `action`, dan `reward` adalah komponen kunci yang menentukan apakah agen belajar perilaku yang benar.
- Training di Unity adalah tahap praktis yang menguji apakah konsep-konsep sebelumnya sudah dirancang dengan baik.

### Transisi ke Slide Berikutnya

Setelah melihat hubungan dengan materi sebelumnya, kita lanjut ke slide berikutnya untuk melihat bagaimana `Unity ML-Agents` dapat dimanfaatkan sebagai fitur advanced pada proyek akhir.

---

## Slide 082 - Hubungan dengan Proyek Akhir

### Narasi

Pada slide ini, kita melihat posisi `ML-Agents` dalam **proyek akhir**. Poin utamanya adalah: `ML-Agents` dapat menjadi **fitur advanced**, tetapi bukan kewajiban. Mahasiswa perlu menilai apakah ruang lingkup proyek sudah cukup untuk menambahkan agent yang belajar dari lingkungan.

Jika proyek memiliki ruang eksperimen, `ML-Agents` cocok untuk perilaku yang sulit dibuat dengan aturan manual. Beberapa contoh yang bisa dikembangkan adalah:

- `companion agent` belajar mengikuti player,
- `drone` belajar menghindari obstacle,
- `robot` belajar mencapai target,
- `enemy` belajar menjaga jarak,
- `agent` belajar mengambil resource.

Dalam contoh tersebut, perilaku tidak ditulis sebagai daftar aturan lengkap. Developer mendesain `environment`, `observation`, `action`, dan `reward`, lalu agent membentuk `policy` melalui proses `training`.

Namun, jika scope terlalu besar, mahasiswa tidak perlu memaksakan `ML-Agents`. Proyek akhir tetap sah dan kuat jika menggunakan pendekatan lain yang lebih terkontrol, misalnya `FSM`, `BT`, `utility`, `PCG`, atau `DDA`.

Pemilihan metode sebaiknya didasarkan pada perilaku yang ingin dihasilkan. Jika perilaku bersifat transisi `state` yang jelas, `FSM` atau `BT` sudah cukup. Jika perilaku membutuhkan penilaian beberapa opsi, `utility` dapat membantu. Jika proyek membutuhkan variasi konten atau adaptasi kesulitan, `PCG` dan `DDA` lebih relevan. Jika perilaku harus berkembang dari percobaan dan reward, barulah `ML-Agents` menjadi pilihan yang tepat.

Yang harus dipahami sebelum lanjut adalah: proyek akhir tidak dinilai dari penggunaan teknologi paling kompleks, tetapi dari kejelasan desain, konsistensi implementasi, dan hasil perilaku yang dapat dijelaskan. Jika memakai `ML-Agents`, mahasiswa perlu mampu menjelaskan agent, environment, observation, action, reward, dan hasil `policy` yang sudah dilatih.

### Inti yang Harus Ditekankan

- `ML-Agents` adalah **fitur advanced** untuk proyek akhir, bukan prasyarat utama.
- Contoh penerapannya meliputi `companion agent`, `drone`, `robot`, `enemy`, dan `agent` yang belajar mengambil resource.
- Jika scope terlalu besar, proyek tetap boleh menggunakan `FSM`, `BT`, `utility`, `PCG`, atau `DDA`.
- Pilihan metode harus sesuai dengan perilaku game, kompleksitas, dan kemampuan mahasiswa menjelaskan hasil.

### Transisi ke Slide Berikutnya

Setelah memahami posisi `ML-Agents` dalam proyek akhir, kita lanjut ke ringkasan materi untuk melihat kembali alur konsep utama yang telah dibahas.

---

## Slide 083 - Ringkasan Materi

### Narasi

Pada slide ini kita merangkum materi pertemuan 14 tentang **Reinforcement Learning with Unity ML-Agents**. Fokus utamanya adalah cara sebuah **`Agent`** belajar mengambil keputusan di dalam game, bukan sekadar menulis aturan perilaku secara manual. Dalam Unity ML-Agents, developer tidak langsung menentukan setiap perilaku NPC, tetapi mendesain **`Environment`**, **`Observation`**, **`Action`**, dan **`Reward`** agar **`Agent`** dapat membentuk **`Policy`** melalui **`Training`**.

Secara garis besar, alur pembelajaran dapat dipahami sebagai satu siklus:

1. **`Agent`** menerima **`Observation`** dari **`Environment`**.
2. **`Agent`** memilih **`Action`** berdasarkan **`Policy`** yang sedang dipelajari.
3. **`Environment`** merespons tindakan tersebut dan memberikan **`Reward`**.
4. Siklus ini berulang dalam satu **`Episode`** hingga **`Policy`** menjadi lebih baik.

Beberapa istilah lain yang perlu dipahami adalah **`Training`** dan **`Inference`**. **`Training`** adalah proses membentuk **`Policy`**, sedangkan **`Inference`** adalah penggunaan **`Policy`** tersebut saat game berjalan. Selain itu, **`Behavior Parameters`**, **`Decision Requester`**, dan **`Heuristic`** membantu mengatur kapan dan bagaimana **`Agent`** meminta keputusan. Sementara **`PPO Concept`**, **`Reward Design`**, dan **`Training Agent in Unity`** menjadi aspek praktis agar pembelajaran stabil dan bisa diterapkan dalam proyek Unity.

### Inti yang Harus Ditekankan

- Developer Unity ML-Agents mendesain **`Environment`**, **`Observation`**, **`Action`**, dan **`Reward`**, bukan menulis aturan perilaku satu per satu.
- Kualitas **`Observation`** dan **`Reward`** sangat menentukan apakah **`Agent`** belajar perilaku yang berguna.
- **`Training`** menghasilkan **`Policy`**, sedangkan **`Inference`** menjalankan **`Policy`** di runtime.
- **`Reward Design`** dan **`PPO Concept`** penting agar pembelajaran stabil dan tidak menghasilkan perilaku yang tidak diinginkan.

### Transisi ke Slide Berikutnya

Selanjutnya, kita akan menguji pemahaman melalui pertanyaan diskusi untuk memperjelas konsep-konsep yang baru saja dirangkum.

---

## Slide 084 - Pertanyaan Diskusi

### Narasi

Slide ini berfungsi sebagai ruang diskusi untuk menguji pemahaman mahasiswa terhadap struktur dasar Unity ML-Agents. Sepuluh pertanyaan pada slide ini sebaiknya tidak dibahas sebagai hafalan, tetapi sebagai tiga kelompok pemahaman:

- **Konsep dasar**: perbedaan `agent` dan `environment`, arti `observation`, `episode`, dan `policy`.
- **Desain pembelajaran**: perbedaan `continuous action` dan `discrete action`, kesulitan `reward design`, perbedaan `training` dan `inference`, serta alasan `PPO` cocok.
- **Penerapan**: risiko `reward hacking` dan kapan `ML-Agents` lebih tepat dibanding `NavMeshAgent`.

Pada kelompok pertama, mahasiswa perlu memastikan bahwa `agent` adalah entitas yang mengambil keputusan, sedangkan `environment` adalah dunia atau aturan yang memberi umpan balik. `observation` adalah informasi yang diterima agent, `action` adalah keputusan yang diambil, `reward` adalah sinyal kualitas, `episode` adalah satu percobaan lengkap, dan `policy` adalah strategi yang memetakan `observation` ke `action`.

Pada kelompok kedua, poin pentingnya adalah bahwa perilaku agent tidak muncul dari aturan yang ditulis langsung, tetapi dari desain ruang keputusan dan umpan balik. `observation` sangat penting karena menentukan apa yang bisa diketahui agent. `continuous action` dan `discrete action` berbeda pada ruang keputusan: yang pertama berupa nilai kontinu, sedangkan yang kedua berupa pilihan terbatas. `reward design` sulit karena reward yang salah dapat mengarahkan agent ke perilaku yang tidak diinginkan. `training` berbeda dari `inference` karena pada `training` policy diperbarui berdasarkan pengalaman, sedangkan pada `inference` policy hanya dijalankan. `PPO` cocok untuk `ML-Agents` karena mampu menangani berbagai jenis action dan memberikan proses pembelajaran yang relatif stabil.

Pada kelompok ketiga, mahasiswa perlu membandingkan pendekatan pembelajaran dengan pathfinding klasik. `NavMeshAgent` sangat cocok untuk pergerakan berbasis peta navigasi yang sudah ditentukan, tetapi perilakunya relatif terbatas pada aturan yang sudah diprogram. `ML-Agents` lebih cocok ketika perilaku perlu beradaptasi, belajar dari lingkungan, atau menangani keputusan yang sulit dirumuskan sebagai aturan tetap.

Sebelum lanjut, mahasiswa perlu memahami bahwa inti `ML-Agents` bukan sekadar membuat agent bergerak, tetapi mendesain `observation`, `action`, dan `reward` agar agent dapat menemukan `policy` yang berguna.

### Inti yang Harus Ditekankan

- `agent` dan `environment` adalah dua sisi interaksi: `agent` memutuskan, `environment` memberi hasil.
- `observation` menentukan batas pengetahuan agent; jika informasi penting tidak masuk, `policy` tidak bisa belajar dengan baik.
- `reward design` adalah inti kontrol perilaku; reward yang salah dapat menghasilkan `reward hacking`.
- `training` memperbarui `policy`, sedangkan `inference` hanya menjalankan `policy` yang sudah terlatih.
- `ML-Agents` dipilih untuk perilaku adaptif dan kompleks, sedangkan `NavMeshAgent` dipilih untuk pathfinding berbasis peta navigasi yang sudah terdefinisi.

### Transisi ke Slide Berikutnya

Setelah konsep-konsep ini jelas, kita akan masuk ke latihan konkret: menentukan `observation` yang tepat untuk agent yang harus mengambil item dan menghindari obstacle.

---

## Slide 085 - Latihan Konsep Observation

### Narasi

Slide ini mengajak mahasiswa merancang **observation** untuk agent sederhana yang harus mengambil **item** dan menghindari **obstacle**. Dalam penguatan, agent tidak melihat dunia secara utuh; ia hanya menerima informasi dari **environment** pada setiap `step`.

Observation yang baik harus menjawab satu pertanyaan praktis: informasi apa yang cukup agar **policy** agent dapat memilih aksi yang tepat? Jika terlalu sedikit, agent tidak tahu di mana `item` atau `obstacle`. Jika terlalu banyak, proses `training` menjadi lambat dan agent bisa belajar dari sinyal yang tidak penting.

Untuk skenario ini, kita bisa menilai setiap kandidat observation sebagai berikut:

1. **Posisi item** — diperlukan jika agent harus menuju target. Bisa berupa posisi absolut, jarak, atau vektor arah ke `item`.
2. **Posisi obstacle** — berguna jika obstacle bergerak atau agent perlu menghindari lebih dari satu rintangan. Untuk obstacle statis, cukup informasi lokal seperti jarak atau arah.
3. **Arah relatif** — sering lebih efisien daripada koordinat global. Agent cukup tahu “item di depan-kanan” dan “obstacle di depan-kiri”.
4. **Velocity** — perlu jika agent memiliki momentum, fisika, atau kecepatan berubah. Untuk grid sederhana, `velocity` bisa tidak diperlukan.
5. **Ray sensor** — berguna untuk mendeteksi obstacle di sekitar agent, misalnya melalui `raycast` ke beberapa arah. Ini memberi pandangan lokal tanpa memberikan peta lengkap.
6. **Observasi berlebihan** — contoh: semua koordinat obstacle, peta penuh, sensor visual resolusi tinggi, atau variabel yang tidak memengaruhi keputusan.

Hal penting yang harus dipahami mahasiswa adalah **cukup dan relevan**. Observation harus mendukung keputusan agent, konsisten antara `training` dan `inference`, serta tidak menambah beban komputasi tanpa manfaat. Dalam implementasi game, observation bisa berupa vektor, raycast, atau data sensor lain; pilihannya harus mengikuti kebutuhan perilaku, bukan sekadar menyalin semua data dunia.

Sebelum lanjut, mahasiswa perlu memastikan bahwa setiap observation memiliki alasan desain: apa keputusan yang dibantu, apa risiko jika dihilangkan, dan apakah informasi tersebut masih tersedia saat agent dijalankan di game.

### Inti yang Harus Ditekankan

- **Observation** adalah informasi yang diterima agent dari environment pada setiap `step`.
- Untuk mengambil item dan menghindari obstacle, agent biasanya perlu tahu **arah relatif** ke `item` dan **keberadaan obstacle** di sekitarnya.
- `velocity` dan `ray sensor` berguna hanya jika perilaku agent membutuhkan momentum atau deteksi lokal.
- Observation yang berlebihan membuat `training` lebih lambat dan bisa menyulitkan agent menemukan pola penting.

### Transisi ke Slide Berikutnya

Setelah menentukan apa yang dilihat agent, langkah berikutnya adalah menentukan apa yang membuat agent belajar: bagaimana reward dirancang agar agent mencapai target, menghindari obstacle, dan menyelesaikan episode dengan cepat.

---

## Slide 086 - Latihan Konsep Reward

### Narasi

Pada slide ini kita beralih dari **observation** ke **reward**. Jika observation menjawab pertanyaan “apa yang diketahui agent?”, maka reward menjawab pertanyaan “perilaku apa yang ingin kita bentuk?”. Dalam reinforcement learning, reward adalah sinyal numerik yang menjadi dasar agent menilai kualitas keputusan yang diambil.

```text
Agent harus mencapai target.
Agent harus menghindari obstacle.
Agent harus selesai secepat mungkin.
```

Tiga kalimat tersebut sebenarnya sudah cukup untuk merancang reward awal. Kita tidak perlu langsung membuat sistem yang rumit. Yang penting adalah setiap reward harus memiliki tujuan perilaku yang jelas.

Untuk kasus ini, kita bisa mulai dari tiga sinyal utama:

1. **Reward mencapai target**  
   Berikan reward positif saat agent benar-benar mencapai target. Nilainya harus cukup besar agar agent belajar bahwa mencapai target adalah tujuan utama. Dalam implementasi Unity ML-Agents, ini bisa diberikan melalui `SetReward(10f)` atau nilai positif lain yang sesuai skala.

2. **Penalty menabrak obstacle**  
   Berikan reward negatif saat agent menabrak obstacle. Nilainya harus cukup besar agar agent belajar menghindari tabrakan. Jika tabrakan dianggap kegagalan total, kita juga bisa langsung memanggil `EndEpisode()` setelah memberikan penalty.

3. **Penalty setiap step**  
   Berikan penalty kecil pada setiap langkah, misalnya `SetStepReward(-0.01f)`. Tujuannya adalah mendorong agent menyelesaikan tugas secepat mungkin. Tanpa penalty ini, agent mungkin bergerak lambat atau berputar-putar tanpa konsekuensi.

Pertanyaan berikutnya adalah apakah kita perlu **reward mendekati target**. Jawabannya: bisa, tetapi harus hati-hati. Reward mendekati target sering disebut **reward shaping**, yaitu memberikan sinyal tambahan agar agent lebih cepat belajar. Misalnya, jika jarak agent ke target berkurang, berikan reward kecil. Jika jarak bertambah, berikan penalty kecil.

Namun reward shaping dapat menimbulkan **reward hacking**. Agent mungkin menemukan cara untuk mendapatkan reward tanpa benar-benar menyelesaikan tugas. Contohnya, agent bisa berputar di dekat target, menghindari target, atau memanfaatkan celah perhitungan jarak. Untuk mencegahnya, kita perlu memastikan bahwa reward terbesar hanya diberikan saat target benar-benar dicapai, reward shaping tidak terlalu dominan, dan perilaku agent diuji secara langsung di environment.

Kapan episode selesai? Episode sebaiknya diakhiri ketika salah satu kondisi berikut terjadi:

- agent mencapai target,
- agent menabrak obstacle,
- agent keluar dari area permainan,
- waktu maksimum tercapai.

Dengan kata lain, episode adalah batas pengalaman belajar. Agent tidak boleh terus berjalan tanpa batas, karena reward dan perilaku harus dievaluasi dalam satu episode yang jelas.

Sebelum lanjut, mahasiswa perlu memahami bahwa reward bukan hanya angka positif dan negatif. Reward adalah cara kita mendefinisikan tujuan permainan. Jika reward salah, agent akan belajar perilaku yang salah.

### Inti yang Harus Ditekankan

- **Reward** adalah sinyal numerik yang membentuk perilaku agent.
- Reward utama harus diberikan saat **target dicapai**, obstacle ditabrak, dan setiap step berjalan.
- **Reward shaping** dapat membantu, tetapi berisiko menyebabkan **reward hacking**.
- Episode harus memiliki kondisi akhir yang jelas, misalnya target tercapai, tabrakan, keluar area, atau timeout.

### Transisi ke Slide Berikutnya

Setelah kita memahami cara merancang reward, langkah berikutnya adalah menggabungkan observation, action, reward, dan episode reset menjadi environment sederhana yang siap digunakan dalam praktikum.

---

## Slide 087 - Latihan Konsep Praktikum

### Narasi

Pada slide ini, kita masuk ke latihan konsep praktikum. Setelah sebelumnya membahas cara merancang **reward**, sekarang kita menggabungkan elemen tersebut ke dalam **environment** sederhana di Unity ML-Agents. Tujuannya bukan langsung membuat perilaku yang sempurna, tetapi memastikan mahasiswa bisa menentukan komponen dasar yang dibutuhkan agar agent dapat belajar dari interaksi dengan environment.

Spesifikasi yang diberikan adalah sebagai berikut:

```text
Arena 10 x 10
Agent mulai di posisi random
Target muncul random
Jika agent mencapai target, reward +1
Jika agent jatuh, reward -1
Setiap step, penalty kecil
```

Intuisi praktisnya sederhana: agent harus belajar bergerak menuju target, menghindari jatuh, dan menyelesaikan episode secepat mungkin. Jika desain environment sudah benar, perilaku yang muncul akan lebih mudah dianalisis. Jika ada komponen yang salah, misalnya observation tidak cukup atau reward tidak konsisten, agent akan belajar pola yang tidak diinginkan.

Untuk environment ini, GameObject yang diperlukan biasanya terdiri dari beberapa bagian utama:

- **Agent**: objek yang dikendalikan, misalnya kapsul atau bola.
- **Target**: objek tujuan yang muncul acak.
- **Arena**: batas area 10 x 10, bisa berupa dinding atau platform.
- **Sensor/observer**: komponen yang membaca posisi agent, target, dan kondisi lingkungan.
- **Debug UI**: panel sederhana untuk menampilkan reward, step, posisi, dan status episode.

**Observation** adalah informasi yang dilihat agent. Dalam kasus ini, observation minimal bisa berupa posisi relatif agent terhadap target, posisi agent terhadap tepi arena, dan status apakah agent masih berada di arena. Jika menggunakan vektor, misalnya `agentPosition`, `targetPosition`, dan `distanceToTarget`, agent dapat memahami arah yang harus ditempuh tanpa perlu melihat seluruh scene.

**Action** adalah keputusan yang bisa diambil agent. Untuk arena 2D sederhana, action bisa berupa:

1. Bergerak ke depan.
2. Bergerak ke belakang.
3. Belok kiri.
4. Belok kanan.
5. Diam.

Action harus diskrit dan mudah dipetakan ke transformasi agent, misalnya `transform.Translate` atau `transform.Rotate`. Semakin sederhana action space, semakin mudah mahasiswa memahami hubungan antara keputusan dan perilaku.

**Reward** mengikuti spesifikasi:

- `+1` jika agent mencapai target.
- `-1` jika agent jatuh.
- `penalty kecil` setiap step, misalnya `-0.001` atau `-0.01`.

Penalty setiap step penting agar agent tidak hanya diam atau bergerak tanpa tujuan. Namun nilainya harus cukup kecil agar agent tidak terlalu takut bergerak. Jika target tercapai, episode sebaiknya diakhiri dan reward positif diberikan. Jika agent jatuh, episode juga diakhiri dengan reward negatif.

**Episode reset** adalah proses mengembalikan kondisi environment ke awal setelah episode selesai. Saat reset, posisi agent dibuat random, target dibuat random, reward dikembalikan ke nol, dan step counter direset. Ini penting agar setiap episode menjadi sampel belajar yang baru, bukan pengulangan kondisi yang sama.

**Debug UI** membantu mahasiswa mengamati proses belajar. UI sederhana dapat menampilkan:

- posisi agent dan target,
- jarak agent ke target,
- reward kumulatif,
- jumlah step,
- status episode: berjalan, selesai, atau jatuh.

Dengan debug UI, mahasiswa bisa mengecek apakah agent benar-benar bergerak menuju target, apakah reward diberikan pada kondisi yang tepat, dan apakah episode reset berjalan dengan benar.

Sebelum lanjut, mahasiswa perlu memahami bahwa kunci dari environment ML-Agents bukan hanya membuat objek bergerak, tetapi merancang **observation**, **action**, **reward**, dan **episode reset** secara konsisten. Jika keempat bagian ini sudah jelas, implementasi script agent akan lebih mudah dan hasil belajar agent lebih dapat dijelaskan.

### Inti yang Harus Ditekankan

- Environment sederhana harus memiliki **agent**, **target**, **arena**, dan mekanisme **reset** yang jelas.
- **Observation** harus cukup untuk agent memahami posisi relatif terhadap target dan batas arena.
- **Action** harus diskrit, sederhana, dan mudah dipetakan ke gerakan agent.
- **Reward** harus mendorong pencapaian target, menghukum jatuh, dan memberi tekanan kecil untuk menyelesaikan episode cepat.
- **Debug UI** penting untuk memverifikasi perilaku agent sebelum proses pembelajaran dilakukan.

### Transisi ke Slide Berikutnya

Selanjutnya, kita akan menutup pertemuan ini dengan gambaran praktikum yang lebih detail, yaitu bagaimana spesifikasi environment ini akan diimplementasikan dalam modul praktikum untuk melatih dan menguji agent.

---

## Slide 088 - Penutup

### Narasi

Slide ini menutup pertemuan 14 dengan menegaskan bahwa inti **Unity ML-Agents** bukan hanya menjalankan proses **training**, tetapi merancang **environment** secara benar. Mahasiswa perlu memahami bahwa `observation`, `action`, `reward`, dan `episode` adalah fondasi perilaku agent. Jika desain environment salah, agent akan belajar perilaku yang salah pula.

Praktikum detail akan dibuat pada modul terpisah:

```text
Training agent menggunakan Unity ML-Agents
```

Fokus praktikum:

- membuat `training scene`,
- membuat `Agent` script,
- menentukan `observation`,
- menentukan `action`,
- menentukan `reward`,
- menjalankan `episode`,
- `training` model,
- `inference` model.

Sebagai penutup, urutan pembelajaran yang disarankan adalah:

1. Review **RL** dari pertemuan sebelumnya.
2. Memahami **agent** dan **environment**.
3. Merancang `observation`, `action`, `reward`, dan `episode`.
4. Memahami `policy`, `training`, dan `inference`.
5. Mengaitkan konsep dengan `Behavior Parameters`, `Decision Requester`, `PPO`, dan contoh `MoveToTarget Agent`.

Materi berikutnya akan mengarah ke:

```text
Advanced Game AI & Final Project Development
```

### Inti yang Harus Ditekankan

- Kunci **ML-Agents** adalah merancang `observation`, `action`, `reward`, dan `episode` dengan benar.
- Praktikum akan mencakup `training scene`, `Agent` script, `training` model, dan `inference` model.
- Desain environment yang salah akan menyebabkan agent belajar perilaku yang salah.
- Penutup ini menjadi jembatan menuju **Advanced Game AI & Final Project Development**.

### Transisi ke Slide Berikutnya

Dengan penutup ini, mahasiswa diharapkan siap melanjutkan ke **Advanced Game AI & Final Project Development**, di mana konsep reinforcement learning dan Unity ML-Agents akan dikembangkan lebih lanjut dalam proyek akhir.
