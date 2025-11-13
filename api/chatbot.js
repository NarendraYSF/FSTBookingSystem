// api/chatbot.js - Vercel Serverless Function
// This file should be saved as: api/chatbot.js

export default function handler(req, res) {
    // Set CORS headers
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    
    // Handle OPTIONS request
    if (req.method === 'OPTIONS') {
      return res.status(200).end();
    }
    
    // Only allow POST
    if (req.method !== 'POST') {
      return res.status(405).json({ 
        success: false, 
        error: 'Method not allowed' 
      });
    }
    
    const { message } = req.body;
    
    if (!message) {
      return res.status(400).json({
        success: false,
        error: 'Message is required'
      });
    }
    
    const response = getChatbotResponse(message);
    
    return res.status(200).json({
      success: true,
      response
    });
  }
  
  function getChatbotResponse(message) {
    const lowerMessage = message.toLowerCase();
    
    const responses = {
      'hello': 'Halo! Bagaimana saya bisa membantu Anda hari ini?',
      'hi': 'Hai! Saya di sini untuk membantu Anda dengan pertanyaan tentang FST UIN Jakarta.',
      'help': 'Saya dapat membantu Anda dengan informasi tentang UIN Jakarta, FST, program studi, fasilitas, pendaftaran, dan lainnya. Apa yang ingin Anda ketahui?',
      
      // UIN Jakarta
      'uin': 'UIN Syarif Hidayatullah Jakarta adalah universitas Islam negeri terkemuka di Indonesia yang didirikan pada tahun 1957, awalnya sebagai IAIN. Pada tahun 2002 berubah status menjadi UIN. Memiliki visi menjadi universitas Islam riset terdepan di Asia Tenggara. Kampus utama seluas 140 hektar berlokasi di Ciputat, Tangerang Selatan. UIN Jakarta memiliki 12 fakultas dengan lebih dari 40.000 mahasiswa aktif.',
      'uin_history': 'Sejarah UIN Jakarta dimulai dari tahun 1957 sebagai Akademi Dinas Ilmu Agama (ADIA). Tahun 1960 menjadi Institut Agama Islam Negeri (IAIN) Syarif Hidayatullah. Pada 20 Mei 2002, berubah status menjadi Universitas Islam Negeri (UIN) Syarif Hidayatullah Jakarta melalui Keputusan Presiden No. 31 Tahun 2002. Transformasi ini menandai perluasan cakupan keilmuan dari agama menjadi multidisiplin.',
      'uin_vision': 'Visi UIN Jakarta: Menjadi Universitas Islam Bertaraf Internasional yang Unggul, Kompetitif, dan Berkarakter Islami. Misi: 1) Menyelenggarakan pendidikan tinggi Islam yang berkualitas, 2) Mengembangkan penelitian dan publikasi ilmiah bertaraf internasional, 3) Mengabdi kepada masyarakat, 4) Membangun kerjasama strategis nasional dan internasional.',
      'uin_campus': 'UIN Jakarta memiliki 2 kampus utama: 1) Kampus I Ciputat seluas 140 hektar - pusat administrasi dan fakultas umum. 2) Kampus II Pesanggrahan - khusus Fakultas Kedokteran dan Ilmu Kesehatan. Fasilitas lengkap: perpustakaan pusat 5 lantai dengan koleksi 100.000+ buku, masjid, asrama, gedung olahraga, klinik kesehatan, bank, ATM, dan food court.',
      'uin_faculties': 'UIN Jakarta memiliki 12 fakultas: 1) Adab dan Humaniora, 2) Dakwah dan Ilmu Komunikasi, 3) Syariah dan Hukum, 4) Ilmu Tarbiyah dan Keguruan, 5) Ushuluddin, 6) Ekonomi dan Bisnis, 7) Sains dan Teknologi, 8) Psikologi, 9) Ilmu Sosial dan Politik, 10) Kedokteran dan Ilmu Kesehatan, 11) Dirasat Islamiyah, 12) Ilmu Keislaman.',
      
      // FST
      'fst': 'Fakultas Sains dan Teknologi (FST) UIN Jakarta didirikan tahun 2006 sebagai fakultas ke-7. FST mengintegrasikan ilmu sains dan teknologi dengan nilai-nilai Islam (islamisasi sains). Memiliki 6 program studi terakreditasi Unggul: Teknik Informatika, Sistem Informasi, Matematika, Fisika, Kimia, dan Biologi. Saat ini FST memiliki 2000+ mahasiswa aktif dan 100+ dosen berkualifikasi S2/S3.',
      'fst_vision': 'Visi FST: Menjadi Fakultas Sains dan Teknologi yang Unggul dan Kompetitif di Tingkat ASEAN pada tahun 2025. Misi: 1) Menyelenggarakan pendidikan berbasis riset dan teknologi, 2) Mengembangkan ilmu pengetahuan melalui penelitian berkualitas, 3) Mengintegrasikan sains dengan nilai-nilai keislaman, 4) Membangun kemitraan strategis dengan industri dan lembaga internasional.',
      'fst_achievements': 'Prestasi FST: 1) Semua prodi terakreditasi Unggul (A) BAN-PT, 2) Sertifikasi ISO 9001:2015, 3) Mahasiswa juara berbagai kompetisi nasional/internasional, 4) Publikasi ilmiah terindeks Scopus dan Web of Science, 5) Kerjasama dengan 50+ industri dan universitas luar negeri, 6) Lulusan bekerja di perusahaan multinasional (Google, Microsoft, Tokopedia, dll).',
      'fst_research': 'Riset unggulan FST: 1) Kecerdasan Buatan dan Machine Learning, 2) Cyber Security dan Blockchain, 3) Bioteknologi dan Biomedis, 4) Material Science dan Nanoteknologi, 5) Energi Terbarukan, 6) Kimia Farmasi dan Analitik, 7) Matematika Terapan dan Pemodelan. FST memiliki 15+ pusat riset dengan dana penelitian miliaran rupiah per tahun.',
      'fst_lecturers': 'FST memiliki 100+ dosen berkualitas: 70% lulusan S3 dari universitas ternama dalam/luar negeri (ITB, UI, UGM, Malaysia, Australia, Jepang). Banyak dosen aktif melakukan penelitian dengan publikasi internasional. Dosen juga praktisi yang berpengalaman di industri teknologi, memastikan pembelajaran yang aplikatif dan relevan dengan kebutuhan industri.',
      'why_fst': 'Alasan memilih FST UIN Jakarta: 1) Integrasi sains-teknologi dengan nilai Islam untuk karakter unggul, 2) Akreditasi Unggul (A) semua prodi, 3) Dosen berkualitas S2/S3 dari universitas ternama, 4) Laboratorium modern lengkap, 5) Biaya kuliah terjangkau (UKT mulai 400rb-4jt) dengan banyak beasiswa, 6) Lokasi strategis Jakarta dengan akses mudah, 7) Jaringan alumni luas di berbagai industri, 8) Program magang dan job fair rutin, 9) Suasana akademik Islami yang kondusif.',
      
      // Programs
      'programs': 'FST memiliki 6 program studi terakreditasi Unggul: 1) Teknik Informatika (S1 & S2) - Software Engineering, AI, Cyber Security, Game Development. 2) Sistem Informasi (S1) - Business Intelligence, ERP, IT Management. 3) Matematika (S1 & S2) - Matematika Komputasi, Statistika, Aktuaria. 4) Fisika (S1 & S2) - Material Science, Instrumentasi, Fisika Medis. 5) Kimia (S1 & S2) - Kimia Analitik, Farmasi, Biokimia. 6) Biologi (S1 & S2) - Bioteknologi, Mikrobiologi, Ekologi.',
      'informatika': 'Program Studi Teknik Informatika: Akreditasi Unggul (A). Fokus: Software Engineering, Artificial Intelligence, Cyber Security, Data Science, Mobile & Web Development, Game Development. Fasilitas: Lab komputer 200+ unit, Lab IoT, Lab Multimedia. Kerjasama dengan Google, Microsoft, Oracle, Cisco. Lulusan menjadi Software Engineer, Data Scientist, IT Consultant, Game Developer dengan gaji awal 5-15 juta.',
      'sistem_informasi': 'Program Studi Sistem Informasi: Akreditasi Unggul (A). Fokus: Business Process, System Analysis, Enterprise Resource Planning (ERP), Business Intelligence, IT Project Management, E-Business. Fasilitas: Lab ERP (SAP), Lab Business Intelligence. Lulusan menjadi System Analyst, Business Analyst, IT Manager, ERP Consultant di berbagai perusahaan dengan gaji awal 5-12 juta.',
      'matematika': 'Program Studi Matematika: Akreditasi Unggul (A). Fokus: Matematika Terapan, Matematika Komputasi, Statistika, Pemodelan Matematika, Aktuaria, Riset Operasi. Fasilitas: Lab Komputasi Matematika, Software: Matlab, R, Python. Lulusan menjadi Data Analyst, Aktuaris, Peneliti, Dosen, Financial Analyst di perbankan, asuransi, dan lembaga riset.',
      'fisika': 'Program Studi Fisika: Akreditasi Unggul (A). Fokus: Fisika Material, Instrumentasi Elektronika, Fisika Komputasi, Fisika Medis, Energi Terbarukan. Fasilitas: Lab Fisika Modern, Lab Material, Lab Elektronika, Lab Komputasi. Lulusan menjadi Research Scientist, Quality Control Engineer, Instrument Engineer, Medical Physicist di industri manufaktur, rumah sakit, dan lembaga riset.',
      'kimia': 'Program Studi Kimia: Akreditasi Unggul (A). Fokus: Kimia Analitik, Kimia Organik, Kimia Farmasi, Biokimia, Kimia Material, Kimia Lingkungan. Fasilitas: Lab Kimia Analitik, Lab Organik, Lab Instrumen (HPLC, GC-MS, FTIR, UV-Vis). Lulusan menjadi Chemist, Quality Control, R&D Scientist, Formulator di industri farmasi, kosmetik, makanan, dan laboratorium analisis.',
      'biologi': 'Program Studi Biologi: Akreditasi Unggul (A). Fokus: Bioteknologi, Mikrobiologi, Biologi Molekuler, Ekologi, Konservasi, Biosains. Fasilitas: Lab Mikrobiologi, Lab Bioteknologi, Lab Biologi Molekuler, Herbarium, Green House. Lulusan menjadi Biotechnologist, Microbiologist, Environmental Consultant, Quality Assurance di industri farmasi, pertanian, lingkungan, dan penelitian.',
      
      // Other responses...
      'facilities': 'Fasilitas FST lengkap dan modern: 1) 15+ Laboratorium spesialis per prodi, 2) Ruang kelas ber-AC dengan proyektor, 3) 2 Ruang teater kapasitas 75-150 orang, 4) Ruang meeting & seminar, 5) Perpustakaan FST dengan koleksi 5000+ buku, 6) Wi-Fi kampus kecepatan tinggi, 7) Masjid, 8) Kantin & cafeteria, 9) Area parkir luas, 10) Sistem reservasi online untuk semua fasilitas.',
      'contact': 'Hubungi FST UIN Jakarta: Email: fst@apps.uinjkt.ac.id | Telepon: (021) 740-1925 | Fax: (021) 740-1926 | WhatsApp: 0812-xxxx-xxxx | Website: fst.uinjkt.ac.id | Alamat: Gedung FST UIN Jakarta, Jl. Ir. H. Juanda No. 95, Ciputat, Tangerang Selatan, Banten 15412. Jam operasional: Senin-Jumat 08:00-16:00 WIB. Sabtu-Minggu tutup.',
      'admission': 'Pendaftaran FST melalui 3 jalur: 1) SNBP (Seleksi Nasional Berdasarkan Prestasi) - jalur undangan berdasarkan prestasi rapor dan portofolio. 2) SNBT (Seleksi Nasional Berbasis Tes) - ujian tertulis nasional. 3) Mandiri UIN Jakarta - ujian mandiri dengan passing grade lebih fleksibel. Persyaratan: Lulusan SMA/MA jurusan IPA, nilai rapor minimal 75, lulus tes masuk. Pendaftaran: Januari-Mei. Info: pmb.uinjkt.ac.id',
      'default': 'Terima kasih atas pertanyaan Anda. Saya di sini untuk membantu dengan informasi tentang FST UIN Jakarta. Apakah ada hal spesifik yang ingin Anda ketahui tentang program studi, fasilitas, atau layanan kami?'
    };
    
    // Keyword detection
    if (/(halo|hai|hello|hi)/i.test(lowerMessage)) {
      return responses.hello;
    } else if (/(bantuan|help|tolong)/i.test(lowerMessage)) {
      return responses.help;
    } else if (/sejarah uin|history uin/i.test(lowerMessage)) {
      return responses.uin_history;
    } else if (/visi uin|misi uin/i.test(lowerMessage)) {
      return responses.uin_vision;
    } else if (/kampus uin|lokasi uin/i.test(lowerMessage)) {
      return responses.uin_campus;
    } else if (/fakultas uin|jurusan uin/i.test(lowerMessage)) {
      return responses.uin_faculties;
    } else if (/uin jakarta|uin syarif|(apa itu.*uin)/i.test(lowerMessage)) {
      return responses.uin;
    } else if (/visi fst|misi fst/i.test(lowerMessage)) {
      return responses.fst_vision;
    } else if (/prestasi fst|achievement/i.test(lowerMessage)) {
      return responses.fst_achievements;
    } else if (/(riset|penelitian)/i.test(lowerMessage)) {
      return responses.fst_research;
    } else if (/dosen fst|pengajar/i.test(lowerMessage)) {
      return responses.fst_lecturers;
    } else if (/(apa itu.*fst)|fakultas sains/i.test(lowerMessage)) {
      return responses.fst;
    } else if (/teknik informatika|informatika/i.test(lowerMessage)) {
      return responses.informatika;
    } else if (/sistem informasi/i.test(lowerMessage)) {
      return responses.sistem_informasi;
    } else if (/matematika|mathematics/i.test(lowerMessage)) {
      return responses.matematika;
    } else if (/fisika|physics/i.test(lowerMessage)) {
      return responses.fisika;
    } else if (/kimia|chemistry/i.test(lowerMessage)) {
      return responses.kimia;
    } else if (/biologi|biology/i.test(lowerMessage)) {
      return responses.biologi;
    } else if (/(fasilitas|ruang)/i.test(lowerMessage)) {
      return responses.facilities;
    } else if (/(kontak|contact|hubungi)/i.test(lowerMessage)) {
      return responses.contact;
    } else if (/(pendaftaran|daftar|admission)/i.test(lowerMessage)) {
      return responses.admission;
    } else if (/(program|studi|jurusan)/i.test(lowerMessage)) {
      return responses.programs;
    } else if (/(kenapa|mengapa|alasan|memilih fst)/i.test(lowerMessage)) {
      return responses.why_fst;
    } else {
      return responses.default;
    }
  }