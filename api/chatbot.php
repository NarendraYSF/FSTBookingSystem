<?php
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST');
header('Access-Control-Allow-Headers: Content-Type');

// Secure chatbot API endpoint
// All responses are hidden from client-side

function getChatbotResponse($message) {
    $lowerMessage = strtolower($message);
    
    $responses = [
        'hello' => 'Halo! Bagaimana saya bisa membantu Anda hari ini?',
        'hi' => 'Hai! Saya di sini untuk membantu Anda dengan pertanyaan tentang FST UIN Jakarta.',
        'help' => 'Saya dapat membantu Anda dengan informasi tentang UIN Jakarta, FST, program studi, fasilitas, pendaftaran, dan lainnya. Apa yang ingin Anda ketahui?',
        
        // UIN Jakarta - Extended
        'uin' => 'UIN Syarif Hidayatullah Jakarta adalah universitas Islam negeri terkemuka di Indonesia yang didirikan pada tahun 1957, awalnya sebagai IAIN. Pada tahun 2002 berubah status menjadi UIN. Memiliki visi menjadi universitas Islam riset terdepan di Asia Tenggara. Kampus utama seluas 140 hektar berlokasi di Ciputat, Tangerang Selatan. UIN Jakarta memiliki 12 fakultas dengan lebih dari 40.000 mahasiswa aktif.',
        'uin_history' => 'Sejarah UIN Jakarta dimulai dari tahun 1957 sebagai Akademi Dinas Ilmu Agama (ADIA). Tahun 1960 menjadi Institut Agama Islam Negeri (IAIN) Syarif Hidayatullah. Pada 20 Mei 2002, berubah status menjadi Universitas Islam Negeri (UIN) Syarif Hidayatullah Jakarta melalui Keputusan Presiden No. 31 Tahun 2002. Transformasi ini menandai perluasan cakupan keilmuan dari agama menjadi multidisiplin.',
        'uin_vision' => 'Visi UIN Jakarta: Menjadi Universitas Islam Bertaraf Internasional yang Unggul, Kompetitif, dan Berkarakter Islami. Misi: 1) Menyelenggarakan pendidikan tinggi Islam yang berkualitas, 2) Mengembangkan penelitian dan publikasi ilmiah bertaraf internasional, 3) Mengabdi kepada masyarakat, 4) Membangun kerjasama strategis nasional dan internasional.',
        'uin_campus' => 'UIN Jakarta memiliki 2 kampus utama: 1) Kampus I Ciputat seluas 140 hektar - pusat administrasi dan fakultas umum. 2) Kampus II Pesanggrahan - khusus Fakultas Kedokteran dan Ilmu Kesehatan. Fasilitas lengkap: perpustakaan pusat 5 lantai dengan koleksi 100.000+ buku, masjid, asrama, gedung olahraga, klinik kesehatan, bank, ATM, dan food court.',
        'uin_faculties' => 'UIN Jakarta memiliki 12 fakultas: 1) Adab dan Humaniora, 2) Dakwah dan Ilmu Komunikasi, 3) Syariah dan Hukum, 4) Ilmu Tarbiyah dan Keguruan, 5) Ushuluddin, 6) Ekonomi dan Bisnis, 7) Sains dan Teknologi, 8) Psikologi, 9) Ilmu Sosial dan Politik, 10) Kedokteran dan Ilmu Kesehatan, 11) Dirasat Islamiyah, 12) Ilmu Keislaman.',
        
        // FST - Extended
        'fst' => 'Fakultas Sains dan Teknologi (FST) UIN Jakarta didirikan tahun 2006 sebagai fakultas ke-7. FST mengintegrasikan ilmu sains dan teknologi dengan nilai-nilai Islam (islamisasi sains). Memiliki 6 program studi terakreditasi Unggul: Teknik Informatika, Sistem Informasi, Matematika, Fisika, Kimia, dan Biologi. Saat ini FST memiliki 2000+ mahasiswa aktif dan 100+ dosen berkualifikasi S2/S3.',
        'fst_vision' => 'Visi FST: Menjadi Fakultas Sains dan Teknologi yang Unggul dan Kompetitif di Tingkat ASEAN pada tahun 2025. Misi: 1) Menyelenggarakan pendidikan berbasis riset dan teknologi, 2) Mengembangkan ilmu pengetahuan melalui penelitian berkualitas, 3) Mengintegrasikan sains dengan nilai-nilai keislaman, 4) Membangun kemitraan strategis dengan industri dan lembaga internasional.',
        'fst_achievements' => 'Prestasi FST: 1) Semua prodi terakreditasi Unggul (A) BAN-PT, 2) Sertifikasi ISO 9001:2015, 3) Mahasiswa juara berbagai kompetisi nasional/internasional, 4) Publikasi ilmiah terindeks Scopus dan Web of Science, 5) Kerjasama dengan 50+ industri dan universitas luar negeri, 6) Lulusan bekerja di perusahaan multinasional (Google, Microsoft, Tokopedia, dll).',
        'fst_research' => 'Riset unggulan FST: 1) Kecerdasan Buatan dan Machine Learning, 2) Cyber Security dan Blockchain, 3) Bioteknologi dan Biomedis, 4) Material Science dan Nanoteknologi, 5) Energi Terbarukan, 6) Kimia Farmasi dan Analitik, 7) Matematika Terapan dan Pemodelan. FST memiliki 15+ pusat riset dengan dana penelitian miliaran rupiah per tahun.',
        'fst_lecturers' => 'FST memiliki 100+ dosen berkualitas: 70% lulusan S3 dari universitas ternama dalam/luar negeri (ITB, UI, UGM, Malaysia, Australia, Jepang). Banyak dosen aktif melakukan penelitian dengan publikasi internasional. Dosen juga praktisi yang berpengalaman di industri teknologi, memastikan pembelajaran yang aplikatif dan relevan dengan kebutuhan industri.',
        'why_fst' => 'Alasan memilih FST UIN Jakarta: 1) Integrasi sains-teknologi dengan nilai Islam untuk karakter unggul, 2) Akreditasi Unggul (A) semua prodi, 3) Dosen berkualitas S2/S3 dari universitas ternama, 4) Laboratorium modern lengkap, 5) Biaya kuliah terjangkau (UKT mulai 400rb-4jt) dengan banyak beasiswa, 6) Lokasi strategis Jakarta dengan akses mudah, 7) Jaringan alumni luas di berbagai industri, 8) Program magang dan job fair rutin, 9) Suasana akademik Islami yang kondusif.',
        
        // Programs
        'programs' => 'FST memiliki 6 program studi terakreditasi Unggul: 1) Teknik Informatika (S1 & S2) - Software Engineering, AI, Cyber Security, Game Development. 2) Sistem Informasi (S1) - Business Intelligence, ERP, IT Management. 3) Matematika (S1 & S2) - Matematika Komputasi, Statistika, Aktuaria. 4) Fisika (S1 & S2) - Material Science, Instrumentasi, Fisika Medis. 5) Kimia (S1 & S2) - Kimia Analitik, Farmasi, Biokimia. 6) Biologi (S1 & S2) - Bioteknologi, Mikrobiologi, Ekologi.',
        'informatika' => 'Program Studi Teknik Informatika: Akreditasi Unggul (A). Fokus: Software Engineering, Artificial Intelligence, Cyber Security, Data Science, Mobile & Web Development, Game Development. Fasilitas: Lab komputer 200+ unit, Lab IoT, Lab Multimedia. Kerjasama dengan Google, Microsoft, Oracle, Cisco. Lulusan menjadi Software Engineer, Data Scientist, IT Consultant, Game Developer dengan gaji awal 5-15 juta.',
        'sistem_informasi' => 'Program Studi Sistem Informasi: Akreditasi Unggul (A). Fokus: Business Process, System Analysis, Enterprise Resource Planning (ERP), Business Intelligence, IT Project Management, E-Business. Fasilitas: Lab ERP (SAP), Lab Business Intelligence. Lulusan menjadi System Analyst, Business Analyst, IT Manager, ERP Consultant di berbagai perusahaan dengan gaji awal 5-12 juta.',
        'matematika' => 'Program Studi Matematika: Akreditasi Unggul (A). Fokus: Matematika Terapan, Matematika Komputasi, Statistika, Pemodelan Matematika, Aktuaria, Riset Operasi. Fasilitas: Lab Komputasi Matematika, Software: Matlab, R, Python. Lulusan menjadi Data Analyst, Aktuaris, Peneliti, Dosen, Financial Analyst di perbankan, asuransi, dan lembaga riset.',
        'fisika' => 'Program Studi Fisika: Akreditasi Unggul (A). Fokus: Fisika Material, Instrumentasi Elektronika, Fisika Komputasi, Fisika Medis, Energi Terbarukan. Fasilitas: Lab Fisika Modern, Lab Material, Lab Elektronika, Lab Komputasi. Lulusan menjadi Research Scientist, Quality Control Engineer, Instrument Engineer, Medical Physicist di industri manufaktur, rumah sakit, dan lembaga riset.',
        'kimia' => 'Program Studi Kimia: Akreditasi Unggul (A). Fokus: Kimia Analitik, Kimia Organik, Kimia Farmasi, Biokimia, Kimia Material, Kimia Lingkungan. Fasilitas: Lab Kimia Analitik, Lab Organik, Lab Instrumen (HPLC, GC-MS, FTIR, UV-Vis). Lulusan menjadi Chemist, Quality Control, R&D Scientist, Formulator di industri farmasi, kosmetik, makanan, dan laboratorium analisis.',
        'biologi' => 'Program Studi Biologi: Akreditasi Unggul (A). Fokus: Bioteknologi, Mikrobiologi, Biologi Molekuler, Ekologi, Konservasi, Biosains. Fasilitas: Lab Mikrobiologi, Lab Bioteknologi, Lab Biologi Molekuler, Herbarium, Green House. Lulusan menjadi Biotechnologist, Microbiologist, Environmental Consultant, Quality Assurance di industri farmasi, pertanian, lingkungan, dan penelitian.',
        
        // Facilities
        'facilities' => 'Fasilitas FST lengkap dan modern: 1) 15+ Laboratorium spesialis per prodi, 2) Ruang kelas ber-AC dengan proyektor, 3) 2 Ruang teater kapasitas 75-150 orang, 4) Ruang meeting & seminar, 5) Perpustakaan FST dengan koleksi 5000+ buku, 6) Wi-Fi kampus kecepatan tinggi, 7) Masjid, 8) Kantin & cafeteria, 9) Area parkir luas, 10) Sistem reservasi online untuk semua fasilitas.',
        'laboratories' => 'Laboratorium FST: Teknik Informatika: Lab Programming, Lab Jaringan, Lab Multimedia, Lab IoT. Sistem Informasi: Lab ERP, Lab Database. Matematika: Lab Komputasi. Fisika: Lab Fisika Dasar, Lab Material, Lab Elektronika. Kimia: Lab Kimia Dasar, Lab Analitik, Lab Organik, Lab Instrumen. Biologi: Lab Mikrobiologi, Lab Bioteknologi, Lab Ekologi. Total nilai investasi laboratorium 10+ miliar rupiah.',
        'library' => 'Perpustakaan FST menyediakan: 1) Koleksi buku 5000+ judul (lokal & internasional), 2) Jurnal elektronik akses penuh (Scopus, IEEE, SpringerLink, dll), 3) Ruang baca ber-AC, 4) Akses komputer untuk pencarian online, 5) E-books dan E-journals, 6) Layanan peminjaman dan referensi, 7) Buka Senin-Jumat 08:00-16:00. Terintegrasi dengan Perpustakaan Pusat UIN Jakarta.',
        
        // Contact & Admission
        'contact' => 'Hubungi FST UIN Jakarta: Email: fst@apps.uinjkt.ac.id | Telepon: (021) 740-1925 | Fax: (021) 740-1926 | WhatsApp: 0812-xxxx-xxxx | Website: fst.uinjkt.ac.id | Alamat: Gedung FST UIN Jakarta, Jl. Ir. H. Juanda No. 95, Ciputat, Tangerang Selatan, Banten 15412. Jam operasional: Senin-Jumat 08:00-16:00 WIB. Sabtu-Minggu tutup.',
        'admission' => 'Pendaftaran FST melalui 3 jalur: 1) SNBP (Seleksi Nasional Berdasarkan Prestasi) - jalur undangan berdasarkan prestasi rapor dan portofolio. 2) SNBT (Seleksi Nasional Berbasis Tes) - ujian tertulis nasional. 3) Mandiri UIN Jakarta - ujian mandiri dengan passing grade lebih fleksibel. Persyaratan: Lulusan SMA/MA jurusan IPA, nilai rapor minimal 75, lulus tes masuk. Pendaftaran: Januari-Mei. Info: pmb.uinjkt.ac.id',
        'requirements' => 'Persyaratan masuk FST: 1) Lulusan SMA/MA/SMK jurusan IPA/Sains, 2) Nilai rapor semester 1-5 minimal 75, 3) Sehat jasmani dan rohani, 4) Lulus tes seleksi (SNBT/Mandiri), 5) Untuk Mandiri: Tes Potensi Akademik dan Tes Kemampuan Dasar Sains. Dokumen: Fotocopy ijazah/SKHUN, rapor, KTP/KK, pas foto, sertifikat prestasi (jika ada).',
        'booking' => 'Sistem Reservasi Fasilitas FST sangat mudah: 1) Login dengan akun (mahasiswa/dosen/staff), 2) Pilih jenis fasilitas (ruang kelas/lab/teater/meeting), 3) Pilih tanggal dan waktu (08:00-17:00, Senin-Jumat), 4) Isi jumlah peserta dan tujuan penggunaan, 5) Submit dan tunggu konfirmasi (max 24 jam). Status dapat dicek online. Untuk pertanyaan: hubungi admin di fst@apps.uinjkt.ac.id',
        'tuition' => 'Biaya kuliah FST sangat terjangkau dengan sistem UKT (Uang Kuliah Tunggal) kelompok I-VII: Rp 400.000 - Rp 4.000.000 per semester (disesuaikan kemampuan ekonomi). Beasiswa tersedia: 1) KIP Kuliah (full kuliah + biaya hidup), 2) Beasiswa Prestasi Akademik, 3) Beasiswa Tahfidz Al-Quran, 4) Beasiswa Atlet/Seni, 5) Beasiswa dari donatur/perusahaan. Total 40% mahasiswa FST menerima beasiswa.',
        'scholarship' => 'Beasiswa di FST: 1) KIP Kuliah - untuk ekonomi kurang mampu, cover penuh biaya kuliah + Rp 700rb/bulan. 2) Beasiswa Prestasi - untuk IPK > 3.5, potongan 50-100% UKT. 3) Beasiswa Tahfidz - minimal hafal 10 juz, potongan 50% UKT. 4) Beasiswa Atlet/Seni - juara kompetisi nasional/internasional. 5) Beasiswa Perusahaan - dari Telkom, BCA, Djarum, dll. Pendaftaran beasiswa buka setiap semester.',
        'accreditation' => 'Akreditasi FST: Semua 6 program studi terakreditasi Unggul (A) oleh BAN-PT dengan nilai 90+. FST juga tersertifikasi ISO 9001:2015 untuk sistem manajemen mutu pendidikan. Kualitas pendidikan setara dengan universitas terkemuka seperti ITB, UI, UGM. FST juga anggota APTIKOM (Asosiasi Perguruan Tinggi Informatika dan Komputer) dan organisasi profesi lainnya.',
        'career' => 'Prospek karir lulusan FST sangat luas: 1) Teknik Informatika/SI: Software Engineer, Data Scientist, IT Consultant, System Analyst, DevOps Engineer, Cyber Security Analyst (Gaji: 5-20 juta). 2) Matematika: Data Analyst, Aktuaris, Financial Analyst, Statistician (Gaji: 5-15 juta). 3) Fisika: Research Scientist, Quality Engineer, Instrumentation Engineer (Gaji: 5-12 juta). 4) Kimia: Quality Control, R&D Chemist, Formulator (Gaji: 5-12 juta). 5) Biologi: Biotechnologist, Microbiologist, Environmental Consultant (Gaji: 5-12 juta). Alumni bekerja di: Google, Microsoft, Tokopedia, Gojek, BCA, Mandiri, Pertamina, Unilever, dll.',
        'alumni' => 'Alumni FST sukses di berbagai bidang: 1) Industri IT: Google, Microsoft, Tokopedia, Gojek, Bukalapak, Traveloka, 2) Perbankan: BCA, Mandiri, BNI, BRI, 3) BUMN: Pertamina, Telkom, PLN, BPJS, 4) Multinasional: Unilever, Nestle, P&G, Samsung, 5) Startup founder dan entrepreneur, 6) Dosen dan peneliti di universitas terkemuka, 7) PNS dan ASN di kementerian/lembaga. Networking alumni kuat membantu mahasiswa mendapat pekerjaan.',
        'student_activities' => 'Kegiatan mahasiswa FST: 1) HIMAFI - Himpunan Mahasiswa Fisika, 2) HIMAKI - Himpunan Mahasiswa Kimia, 3) HIMABIO - Himpunan Mahasiswa Biologi, 4) HIMATIKA - Himpunan Mahasiswa Matematika, 5) HIMAFORSA - Himpunan Mahasiswa Informatika dan SI. Aktivitas: seminar, workshop, kompetisi, pengabdian masyarakat, study tour, gathering, pameran karya ilmiah.',
        'competitions' => 'Mahasiswa FST aktif di kompetisi: 1) Programming: ACM ICPC, Gemastik, Hackathon, 2) Data Science: Kaggle Competition, Data Mining Competition, 3) Karya Ilmiah: PIMNAS, PKM, LKTI, 4) Debat: National Science Debate, 5) Olimpiade: OSN, IMO, IPhO, IChO, IBO. Banyak mahasiswa juara tingkat nasional dan internasional dengan hadiah puluhan juta rupiah.',
        'international' => 'Program internasional FST: 1) Student Exchange ke Malaysia, Thailand, Turki, Korea Selatan (1 semester), 2) Short Course & Summer Program, 3) Joint Research dengan universitas luar negeri, 4) International Conference participation, 5) Dual Degree Program (sedang dipersiapkan). Kerjasama dengan 30+ universitas: University of Malaya, NUS, Chulalongkorn, dll.',
        
        'default' => 'Terima kasih atas pertanyaan Anda. Saya di sini untuk membantu dengan informasi tentang FST UIN Jakarta. Apakah ada hal spesifik yang ingin Anda ketahui tentang program studi, fasilitas, atau layanan kami?'
    ];
    
    // Keyword detection logic
    if (strpos($lowerMessage, 'halo') !== false || strpos($lowerMessage, 'hai') !== false || 
        strpos($lowerMessage, 'hello') !== false || strpos($lowerMessage, 'hi') !== false) {
        return $responses['hello'];
    } elseif (strpos($lowerMessage, 'bantuan') !== false || strpos($lowerMessage, 'help') !== false || 
              strpos($lowerMessage, 'tolong') !== false) {
        return $responses['help'];
    } 
    // UIN Jakarta
    elseif (strpos($lowerMessage, 'sejarah uin') !== false || strpos($lowerMessage, 'history uin') !== false) {
        return $responses['uin_history'];
    } elseif (strpos($lowerMessage, 'visi uin') !== false || strpos($lowerMessage, 'misi uin') !== false) {
        return $responses['uin_vision'];
    } elseif (strpos($lowerMessage, 'kampus uin') !== false || strpos($lowerMessage, 'lokasi uin') !== false) {
        return $responses['uin_campus'];
    } elseif (strpos($lowerMessage, 'fakultas uin') !== false || strpos($lowerMessage, 'jurusan uin') !== false) {
        return $responses['uin_faculties'];
    } elseif (strpos($lowerMessage, 'uin jakarta') !== false || strpos($lowerMessage, 'uin syarif') !== false || 
              (strpos($lowerMessage, 'apa itu') !== false && strpos($lowerMessage, 'uin') !== false)) {
        return $responses['uin'];
    }
    // FST
    elseif (strpos($lowerMessage, 'visi fst') !== false || strpos($lowerMessage, 'misi fst') !== false) {
        return $responses['fst_vision'];
    } elseif (strpos($lowerMessage, 'prestasi fst') !== false || strpos($lowerMessage, 'achievement') !== false) {
        return $responses['fst_achievements'];
    } elseif (strpos($lowerMessage, 'riset') !== false || strpos($lowerMessage, 'penelitian') !== false) {
        return $responses['fst_research'];
    } elseif (strpos($lowerMessage, 'dosen fst') !== false || strpos($lowerMessage, 'pengajar') !== false) {
        return $responses['fst_lecturers'];
    } elseif ((strpos($lowerMessage, 'apa itu') !== false && strpos($lowerMessage, 'fst') !== false) || 
              strpos($lowerMessage, 'fakultas sains') !== false) {
        return $responses['fst'];
    }
    // Programs
    elseif (strpos($lowerMessage, 'teknik informatika') !== false || strpos($lowerMessage, 'informatika') !== false) {
        return $responses['informatika'];
    } elseif (strpos($lowerMessage, 'sistem informasi') !== false) {
        return $responses['sistem_informasi'];
    } elseif (strpos($lowerMessage, 'matematika') !== false || strpos($lowerMessage, 'mathematics') !== false) {
        return $responses['matematika'];
    } elseif (strpos($lowerMessage, 'fisika') !== false || strpos($lowerMessage, 'physics') !== false) {
        return $responses['fisika'];
    } elseif (strpos($lowerMessage, 'kimia') !== false || strpos($lowerMessage, 'chemistry') !== false) {
        return $responses['kimia'];
    } elseif (strpos($lowerMessage, 'biologi') !== false || strpos($lowerMessage, 'biology') !== false) {
        return $responses['biologi'];
    }
    // Facilities
    elseif (strpos($lowerMessage, 'laboratorium') !== false || strpos($lowerMessage, 'lab ') !== false) {
        return $responses['laboratories'];
    } elseif (strpos($lowerMessage, 'perpustakaan') !== false || strpos($lowerMessage, 'library') !== false) {
        return $responses['library'];
    } elseif (strpos($lowerMessage, 'fasilitas') !== false || strpos($lowerMessage, 'ruang') !== false) {
        return $responses['facilities'];
    }
    // Admission
    elseif (strpos($lowerMessage, 'persyaratan') !== false || strpos($lowerMessage, 'syarat') !== false) {
        return $responses['requirements'];
    } elseif (strpos($lowerMessage, 'beasiswa') !== false || strpos($lowerMessage, 'scholarship') !== false) {
        return $responses['scholarship'];
    } elseif (strpos($lowerMessage, 'pendaftaran') !== false || strpos($lowerMessage, 'daftar') !== false || 
              strpos($lowerMessage, 'admission') !== false) {
        return $responses['admission'];
    }
    // Other
    elseif (strpos($lowerMessage, 'kontak') !== false || strpos($lowerMessage, 'contact') !== false || 
            strpos($lowerMessage, 'hubungi') !== false) {
        return $responses['contact'];
    } elseif (strpos($lowerMessage, 'pesan') !== false || strpos($lowerMessage, 'booking') !== false || 
              strpos($lowerMessage, 'reservasi') !== false) {
        return $responses['booking'];
    } elseif (strpos($lowerMessage, 'biaya') !== false || strpos($lowerMessage, 'ukt') !== false || 
              strpos($lowerMessage, 'kuliah') !== false) {
        return $responses['tuition'];
    } elseif (strpos($lowerMessage, 'akreditasi') !== false || strpos($lowerMessage, 'kualitas') !== false) {
        return $responses['accreditation'];
    } elseif (strpos($lowerMessage, 'alumni') !== false) {
        return $responses['alumni'];
    } elseif (strpos($lowerMessage, 'kerja') !== false || strpos($lowerMessage, 'karir') !== false || 
              strpos($lowerMessage, 'career') !== false) {
        return $responses['career'];
    } elseif (strpos($lowerMessage, 'kegiatan') !== false || strpos($lowerMessage, 'organisasi') !== false || 
              strpos($lowerMessage, 'himpunan') !== false) {
        return $responses['student_activities'];
    } elseif (strpos($lowerMessage, 'kompetisi') !== false || strpos($lowerMessage, 'lomba') !== false) {
        return $responses['competitions'];
    } elseif (strpos($lowerMessage, 'international') !== false || strpos($lowerMessage, 'luar negeri') !== false || 
              strpos($lowerMessage, 'exchange') !== false) {
        return $responses['international'];
    } elseif (strpos($lowerMessage, 'kenapa') !== false || strpos($lowerMessage, 'mengapa') !== false || 
              strpos($lowerMessage, 'alasan') !== false || strpos($lowerMessage, 'memilih fst') !== false) {
        return $responses['why_fst'];
    } elseif (strpos($lowerMessage, 'program') !== false || strpos($lowerMessage, 'studi') !== false || 
              strpos($lowerMessage, 'jurusan') !== false) {
        return $responses['programs'];
    } else {
        return $responses['default'];
    }
}

// Handle OPTIONS request for CORS
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

// Get POST data
$data = json_decode(file_get_contents('php://input'), true);
$message = $data['message'] ?? '';

if (empty($message)) {
    echo json_encode([
        'success' => false,
        'error' => 'Message is required'
    ]);
    exit;
}

// Get response
$response = getChatbotResponse($message);

echo json_encode([
    'success' => true,
    'response' => $response
]);
?>

