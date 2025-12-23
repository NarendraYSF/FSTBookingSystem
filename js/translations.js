// Translation System for FST Booking System
// Supported languages: Indonesian (id) and English (en)

const translations = {
    id: {
        // Navigation
        'nav.home': 'Home',
        'nav.about': 'About',
        'nav.contact': 'Contact',
        'nav.payment': 'Pembayaran',
        
        // Payment Page
        'payment.title': 'Informasi Pembayaran',
        'payment.breadcrumb': 'Pembayaran',
        'payment.for-non-institution': 'Untuk Pengguna Non-Institusi UIN Jakarta',
        'payment.subtitle': 'Berikut adalah informasi tarif dan metode pembayaran untuk reservasi ruangan bagi pengguna dari luar UIN Jakarta',
        'payment.per-hour': '/jam',
        'payment.book-now': 'Reservasi Sekarang',
        
        // Room Types (Payment)
        'payment.room.classroom': 'Ruang Kelas',
        'payment.room.lab': 'Laboratorium',
        'payment.room.theater': 'Ruang Teater',
        'payment.room.meeting': 'Ruang Meeting',
        
        // Capacity
        'payment.capacity.classroom': 'Kapasitas: 30-40 orang',
        'payment.capacity.lab': 'Kapasitas: 20-30 orang',
        'payment.capacity.theater': 'Kapasitas: 100-150 orang',
        'payment.capacity.meeting': 'Kapasitas: 15-25 orang',
        
        // Facilities
        'payment.facilities.projector': 'Proyektor & Layar',
        'payment.facilities.ac': 'AC & Sound System',
        'payment.facilities.wifi': 'WiFi Gratis',
        'payment.facilities.whiteboard': 'Whiteboard',
        'payment.facilities.equipment': 'Peralatan Lab Lengkap',
        'payment.facilities.assistant': 'Asisten Lab (Opsional)',
        'payment.facilities.dual-projector': 'Dual Proyektor',
        'payment.facilities.professional-sound': 'Sound System Profesional',
        'payment.facilities.lighting': 'Sistem Pencahayaan',
        'payment.facilities.mic': 'Microphone Wireless',
        'payment.facilities.meeting-table': 'Meja Meeting Besar',
        'payment.facilities.tv': 'TV LED 55"',
        'payment.facilities.coffee': 'Coffee & Tea Service',
        
        // Payment Methods
        'payment.methods.title': 'Metode Pembayaran',
        'payment.methods.bank-transfer': 'Transfer Bank',
        'payment.methods.bank-desc': 'Transfer ke rekening resmi FST UIN Jakarta',
        'payment.bank.name': 'Bank Mandiri',
        'payment.bank.account-number': 'No. Rekening: 1234567890',
        'payment.bank.account-name': 'a.n. FST UIN Jakarta',
        'payment.methods.ewallet': 'E-Wallet',
        'payment.methods.ewallet-desc': 'Bayar menggunakan GoPay, OVO, Dana, atau LinkAja',
        'payment.ewallet.name': 'a.n. FST UIN Jakarta',
        'payment.methods.cash': 'Tunai',
        'payment.methods.cash-desc': 'Bayar langsung di kasir FST',
        'payment.cash.location': 'Lokasi:',
        'payment.cash.address': 'Gedung FST Lantai 1',
        'payment.cash.hours': 'Senin - Jumat, 08:00 - 16:00',
        
        // Instructions
        'payment.instructions.title': 'Cara Melakukan Pembayaran',
        'payment.step1.title': 'Lakukan Reservasi',
        'payment.step1.desc': 'Isi formulir reservasi ruangan melalui website atau datang langsung ke kantor FST.',
        'payment.step2.title': 'Terima Konfirmasi',
        'payment.step2.desc': 'Anda akan menerima email konfirmasi dengan rincian pembayaran dan nomor invoice.',
        'payment.step3.title': 'Lakukan Pembayaran',
        'payment.step3.desc': 'Lakukan pembayaran sesuai metode yang dipilih maksimal 2x24 jam setelah konfirmasi.',
        'payment.step4.title': 'Upload Bukti Pembayaran',
        'payment.step4.desc': 'Upload bukti pembayaran melalui email atau WhatsApp admin untuk verifikasi.',
        
        // Notes
        'payment.notes.title': 'Catatan Penting:',
        'payment.notes.note1': 'Pembayaran harus dilakukan maksimal 2x24 jam setelah konfirmasi reservasi',
        'payment.notes.note2': 'Reservasi akan otomatis dibatalkan jika pembayaran tidak diterima dalam waktu yang ditentukan',
        'payment.notes.note3': 'Bukti pembayaran wajib dikirimkan untuk verifikasi',
        'payment.notes.note4': 'Pembatalan reservasi maksimal H-3 untuk pengembalian 50% dari total pembayaran',
        'payment.notes.note5': 'Untuk reservasi di hari yang sama, pembayaran harus dilakukan secara tunai',
        'payment.contact.title': 'Butuh Bantuan?',
        'payment.contact.desc': 'Hubungi kami untuk informasi lebih lanjut',
        'payment.contact-us': 'Hubungi Kami',
        
        // Reservation Form
        'reservation.title': 'Reservasi Ruangan',
        'reservation.date': 'Tanggal Reservasi',
        'reservation.start-time': 'Jam Mulai',
        'reservation.end-time': 'Jam Selesai',
        'reservation.room-type': 'Jenis Ruangan',
        'reservation.participants': 'Jumlah Peserta',
        'reservation.purpose': 'Tujuan Penggunaan',
        'reservation.button': 'Reservasi',
        'reservation.hour': 'Jam',
        'reservation.minute': 'Menit',
        
        // Room Types
        'room.select': 'Pilih Ruangan',
        'room.kelas-biasa': 'Ruang Kelas Biasa',
        'room.kelas-besar': 'Ruang Kelas Besar',
        'room.lab-mikro': 'Lab Mikrobiologi',
        'room.lab-komputer': 'Lab Komputer',
        'room.teater-besar': 'Ruang Teater Besar',
        'room.teater-double': 'Ruang Teater Double Proyektor',
        'room.meeting': 'Ruang Meeting',
        
        // Participants
        'participants.select': 'Pilih Jumlah',
        'participants.1-10': '1-10 orang',
        'participants.11-25': '11-25 orang',
        'participants.26-50': '26-50 orang',
        'participants.50+': '50+ orang',
        
        // Purpose
        'purpose.select': 'Pilih Tujuan',
        'purpose.kuliah': 'Kuliah',
        'purpose.seminar': 'Seminar',
        'purpose.rapat': 'Rapat',
        'purpose.presentasi': 'Presentasi',
        'purpose.workshop': 'Workshop',
        'purpose.lainnya': 'Lainnya',
        
        // About Page
        'about.title': 'Tentang FST',
        'about.breadcrumb': 'Tentang FST UIN Jakarta',
        'about.heading': 'Tentang FST UIN Jakarta',
        'about.intro': 'Fakultas Sains dan Teknologi (FST) UIN Syarif Hidayatullah Jakarta adalah pusat pendidikan, penelitian, dan inovasi di bidang sains dan teknologi.',
        'about.description': 'FST UIN Jakarta berkomitmen untuk mencetak lulusan yang unggul, berdaya saing global, dan berakhlak mulia dalam bidang sains dan teknologi.',
        'about.program-title': 'Program Studi',
        'about.program-desc': 'Berbagai program studi unggulan dalam bidang sains dan teknologi',
        'about.lab-title': 'Laboratorium',
        'about.lab-desc': 'Fasilitas laboratorium modern untuk mendukung kegiatan praktikum dan penelitian',
        'about.facility-title': 'Fasilitas Modern',
        'about.facility-desc': 'Ruang kelas, perpustakaan, dan fasilitas pendukung lainnya yang modern',
        'about.lecturer-title': 'Dosen Profesional',
        'about.lecturer-desc': 'Tim dosen yang berpengalaman dan berkompeten di bidangnya masing-masing',
        'about.more': 'Selengkapnya',
        
        // Specialization Section
        'spec.title': 'Keunggulan FST',
        'spec.heading': 'FST UIN Jakarta: Pusat Keunggulan dalam Pendidikan Sains dan Teknologi.',
        'spec.description': 'FST UIN Jakarta telah menjadi salah satu fakultas terkemuka dalam pengembangan sains dan teknologi di Indonesia. Dengan komitmen untuk menghasilkan lulusan yang berkualitas dan berdaya saing global, FST terus berinovasi dalam metode pembelajaran dan pengembangan fasilitas.',
        'spec.students': 'Mahasiswa Aktif',
        'spec.staff': 'Dosen & Staff',
        'spec.rooms': 'Ruang & Lab',
        'spec.program': 'Program Studi',
        'spec.lab': 'Laboratorium',
        'spec.library': 'Perpustakaan',
        'spec.meeting': 'Ruang Meeting',
        
        // Services Section
        'service.title': 'Layanan & Fasilitas',
        'service.education': 'Pendidikan Berkualitas',
        'service.education-desc': 'Program studi unggulan dengan kurikulum yang disesuaikan dengan kebutuhan industri.',
        'service.modern-lab': 'Laboratorium Modern',
        'service.modern-lab-desc': 'Fasilitas laboratorium yang dilengkapi dengan peralatan terkini untuk praktikum dan penelitian.',
        'service.digital-lib': 'Perpustakaan Digital',
        'service.digital-lib-desc': 'Koleksi buku dan jurnal digital yang lengkap untuk mendukung kegiatan akademik.',
        'service.meeting-room': 'Ruang Meeting',
        'service.meeting-room-desc': 'Fasilitas ruang meeting dan konferensi untuk kegiatan akademik dan non-akademik.',
        'service.internet': 'Internet & WiFi',
        'service.internet-desc': 'Koneksi internet cepat dan stabil tersedia di seluruh area kampus.',
        'service.reservation': 'Sistem Reservasi',
        'service.reservation-desc': 'Sistem reservasi ruangan online yang mudah dan efisien untuk mahasiswa dan staff.',
        'service.reserve-button': 'Reservasi Ruangan',
        
        // History Section
        'history.title': 'Sejarah FST UIN Jakarta',
        'history.1998.year': '1998-2000',
        'history.1998.title': 'Pendirian FST',
        'history.1998.desc': 'Fakultas Sains dan Teknologi UIN Syarif Hidayatullah Jakarta didirikan sebagai bagian dari transformasi IAIN menjadi UIN. FST menjadi pionir dalam mengintegrasikan sains dan teknologi dengan nilai-nilai Islam.',
        'history.2005.year': '2005-2010',
        'history.2005.title': 'Pengembangan Program Studi',
        'history.2005.desc': 'FST memperluas program studinya dengan menambahkan berbagai jurusan baru seperti Teknik Informatika, Sistem Informasi, dan program studi lainnya yang relevan dengan kebutuhan industri.',
        'history.2015.year': '2015-2020',
        'history.2015.title': 'Akreditasi & Pengakuan',
        'history.2015.desc': 'Semua program studi di FST berhasil mendapatkan akreditasi A dari BAN-PT. FST juga mendapatkan pengakuan internasional dan menjalin kerjasama dengan berbagai universitas di luar negeri.',
        'history.2020.year': '2020-Sekarang',
        'history.2020.title': 'Era Digital & Inovasi',
        'history.2020.desc': 'FST memasuki era digital dengan pengembangan sistem reservasi ruangan online, pembelajaran hybrid, dan berbagai inovasi teknologi untuk mendukung kegiatan akademik yang lebih efisien.',
        
        // Footer
        'footer.about-text': 'Fakultas Sains dan Teknologi (FST) UIN Syarif Hidayatullah Jakarta adalah pusat pendidikan, penelitian, dan inovasi di bidang sains dan teknologi yang berkomitmen mencetak lulusan unggul dan berdaya saing global.',
        'footer.contact': 'Informasi Kontak',
        'footer.address': 'Gedung FST UIN Jakarta, UIN Jakarta, Jl. Lkr. Kampus 1, Cempaka Putih, Ciputat Timur, South Tangerang City, Banten 15412',
        'footer.programs': 'Program Studi',
        'footer.facilities': 'Fasilitas',
        'footer.newsletter-title': 'Berlangganan Newsletter FST!',
        'footer.newsletter-desc': 'Dapatkan informasi terbaru tentang kegiatan akademik, penelitian, dan event di FST UIN Jakarta. Jangan lewatkan update penting dari kami.',
        'footer.newsletter-placeholder': 'MASUKKAN EMAIL ANDA',
        'footer.newsletter-button': 'Berlangganan',
        'footer.copyright': '© 2024 Fakultas Sains dan Teknologi UIN Syarif Hidayatullah Jakarta. All Rights Reserved. | Designed By Narendra Yusuf',
        
        // Majors
        'major.informatika': 'Teknik Informatika',
        'major.sistem-informasi': 'Sistem Informasi',
        'major.matematika': 'Matematika',
        'major.fisika': 'Fisika',
        'major.kimia': 'Kimia',
        'major.biologi': 'Biologi',
        
        // Facilities
        'facility.classroom': 'Ruang Kelas',
        'facility.lab': 'Laboratorium',
        'facility.theater': 'Ruang Teater',
        'facility.meeting': 'Ruang Meeting',
        'facility.library': 'Perpustakaan',
        'facility.wifi': 'Wi-Fi Kampus',
        
        // Welcome Section (Home)
        'welcome.subtitle': 'Selamat Datang di',
        'welcome.title': 'Sistem Reservasi Ruangan FST UIN Jakarta',
        'welcome.about-title': 'Tentang FST UIN Jakarta',
        'welcome.about-intro': 'Fakultas Sains dan Teknologi (FST) UIN Syarif Hidayatullah Jakarta adalah pusat pendidikan, penelitian, dan inovasi di bidang sains dan teknologi.',
        'welcome.about-desc': 'FST UIN Jakarta berkomitmen untuk mencetak lulusan yang unggul, berdaya saing global, dan berakhlak mulia. Dengan fasilitas modern, dosen profesional, serta lingkungan akademik yang kondusif, FST menjadi pilihan utama bagi calon ilmuwan dan teknolog muslim di Indonesia. Bergabunglah bersama kami untuk masa depan yang gemilang di dunia sains dan teknologi!',
        'welcome.read-more': 'Selengkapnya',
        'welcome.new-reservation': 'Reservasi Baru',
        
        // Rooms Section
        'rooms.title': 'Ruangan & Fasilitas FST',
        'rooms.desc': 'FST UIN Syarif Hidayatullah Jakarta menyediakan berbagai pilihan ruangan seperti ruang kelas, laboratorium, ruang teater, dan fasilitas lainnya yang modern dan nyaman untuk mendukung kegiatan akademik, riset, dan event kampus.',
        
        // Specialization Section (Home)
        'home.spec.title': 'Fasilitas Kampus',
        'home.spec.heading': 'Sistem reservasi ruangan terpadu untuk mendukung aktivitas akademik dan non-akademik.',
        'home.spec.description': 'Platform reservasi ruangan yang memudahkan mahasiswa, dosen, dan staff dalam memesan berbagai fasilitas kampus. Dikelola secara profesional dengan teknologi terkini untuk efisiensi maksimal dalam pengelolaan ruangan.',
        'home.spec.rooms-available': 'Ruang Tersedia',
        'home.spec.monthly-reservations': 'Reservasi Bulanan',
        'home.spec.service-hours': 'Jam Layanan',
        'home.spec.classroom': 'Ruang Kelas',
        'home.spec.library': 'Perpustakaan',
        'home.spec.conference': 'Ruang Konferensi',
        'home.spec.cafeteria': 'Cafeteria',
        
        // Services Section
        'services.title': 'Layanan Kami',
        'services.wifi': 'Free Wi-Fi',
        'services.wifi-desc': 'Koneksi internet cepat dan stabil tersedia di seluruh area hotel untuk kenyamanan tamu.',
        'services.meetings': 'Meetings & Events',
        'services.meetings-desc': 'Ruang meeting dan acara yang dilengkapi dengan peralatan modern untuk berbagai kebutuhan.',
        'services.booking': 'Online Booking',
        'services.booking-desc': 'Pemesanan ruangan online yang mudah dan cepat melalui website resmi kami.',
        'services.facilities': 'Sarana & Prasarana Terbaik',
        'services.facilities-desc': 'Fasilitas dan infrastruktur berkualitas tinggi untuk memastikan kenyamanan maksimal.',
        'services.reservation': 'Reservasi Sekarang',
        'services.reservation-desc': 'Layanan reservasi 24 jam untuk memudahkan tamu dalam memesan kamar kapan saja.',
        'services.staff': 'Staff Profesional',
        'services.staff-desc': 'Tim staff yang terlatih dan profesional siap melayani dengan ramah dan efisien.',
    },
    
    en: {
        // Navigation
        'nav.home': 'Home',
        'nav.about': 'About',
        'nav.contact': 'Contact',
        'nav.payment': 'Payment',
        
        // Payment Page
        'payment.title': 'Payment Information',
        'payment.breadcrumb': 'Payment',
        'payment.for-non-institution': 'For Non-UIN Jakarta Institution Users',
        'payment.subtitle': 'The following is pricing and payment method information for room reservations for users outside of UIN Jakarta',
        'payment.per-hour': '/hour',
        'payment.book-now': 'Book Now',
        
        // Room Types (Payment)
        'payment.room.classroom': 'Classroom',
        'payment.room.lab': 'Laboratory',
        'payment.room.theater': 'Theater Room',
        'payment.room.meeting': 'Meeting Room',
        
        // Capacity
        'payment.capacity.classroom': 'Capacity: 30-40 people',
        'payment.capacity.lab': 'Capacity: 20-30 people',
        'payment.capacity.theater': 'Capacity: 100-150 people',
        'payment.capacity.meeting': 'Capacity: 15-25 people',
        
        // Facilities
        'payment.facilities.projector': 'Projector & Screen',
        'payment.facilities.ac': 'AC & Sound System',
        'payment.facilities.wifi': 'Free WiFi',
        'payment.facilities.whiteboard': 'Whiteboard',
        'payment.facilities.equipment': 'Complete Lab Equipment',
        'payment.facilities.assistant': 'Lab Assistant (Optional)',
        'payment.facilities.dual-projector': 'Dual Projector',
        'payment.facilities.professional-sound': 'Professional Sound System',
        'payment.facilities.lighting': 'Lighting System',
        'payment.facilities.mic': 'Wireless Microphone',
        'payment.facilities.meeting-table': 'Large Meeting Table',
        'payment.facilities.tv': '55" LED TV',
        'payment.facilities.coffee': 'Coffee & Tea Service',
        
        // Payment Methods
        'payment.methods.title': 'Payment Methods',
        'payment.methods.bank-transfer': 'Bank Transfer',
        'payment.methods.bank-desc': 'Transfer to FST UIN Jakarta official account',
        'payment.bank.name': 'Bank Mandiri',
        'payment.bank.account-number': 'Account Number: 1234567890',
        'payment.bank.account-name': 'a.n. FST UIN Jakarta',
        'payment.methods.ewallet': 'E-Wallet',
        'payment.methods.ewallet-desc': 'Pay using GoPay, OVO, Dana, or LinkAja',
        'payment.ewallet.name': 'a.n. FST UIN Jakarta',
        'payment.methods.cash': 'Cash',
        'payment.methods.cash-desc': 'Pay directly at FST cashier',
        'payment.cash.location': 'Location:',
        'payment.cash.address': 'FST Building 1st Floor',
        'payment.cash.hours': 'Monday - Friday, 08:00 - 16:00',
        
        // Instructions
        'payment.instructions.title': 'How to Make Payment',
        'payment.step1.title': 'Make Reservation',
        'payment.step1.desc': 'Fill out the room reservation form through the website or come directly to the FST office.',
        'payment.step2.title': 'Receive Confirmation',
        'payment.step2.desc': 'You will receive a confirmation email with payment details and invoice number.',
        'payment.step3.title': 'Make Payment',
        'payment.step3.desc': 'Make payment according to the selected method within 2x24 hours after confirmation.',
        'payment.step4.title': 'Upload Payment Proof',
        'payment.step4.desc': 'Upload payment proof via email or WhatsApp admin for verification.',
        
        // Notes
        'payment.notes.title': 'Important Notes:',
        'payment.notes.note1': 'Payment must be made within 2x24 hours after reservation confirmation',
        'payment.notes.note2': 'Reservations will be automatically canceled if payment is not received within the specified time',
        'payment.notes.note3': 'Payment proof must be sent for verification',
        'payment.notes.note4': 'Reservation cancellation maximum D-3 for 50% refund of total payment',
        'payment.notes.note5': 'For same-day reservations, payment must be made in cash',
        'payment.contact.title': 'Need Help?',
        'payment.contact.desc': 'Contact us for more information',
        'payment.contact-us': 'Contact Us',
        
        // Reservation Form
        'reservation.title': 'Room Reservation',
        'reservation.date': 'Reservation Date',
        'reservation.start-time': 'Start Time',
        'reservation.end-time': 'End Time',
        'reservation.room-type': 'Room Type',
        'reservation.participants': 'Number of Participants',
        'reservation.purpose': 'Purpose',
        'reservation.button': 'Reserve',
        'reservation.hour': 'Hour',
        'reservation.minute': 'Minute',
        
        // Room Types
        'room.select': 'Select Room',
        'room.kelas-biasa': 'Regular Classroom',
        'room.kelas-besar': 'Large Classroom',
        'room.lab-mikro': 'Microbiology Lab',
        'room.lab-komputer': 'Computer Lab',
        'room.teater-besar': 'Large Theater',
        'room.teater-double': 'Double Projector Theater',
        'room.meeting': 'Meeting Room',
        
        // Participants
        'participants.select': 'Select Number',
        'participants.1-10': '1-10 people',
        'participants.11-25': '11-25 people',
        'participants.26-50': '26-50 people',
        'participants.50+': '50+ people',
        
        // Purpose
        'purpose.select': 'Select Purpose',
        'purpose.kuliah': 'Lecture',
        'purpose.seminar': 'Seminar',
        'purpose.rapat': 'Meeting',
        'purpose.presentasi': 'Presentation',
        'purpose.workshop': 'Workshop',
        'purpose.lainnya': 'Other',
        
        // About Page
        'about.title': 'About FST',
        'about.breadcrumb': 'About FST UIN Jakarta',
        'about.heading': 'About FST UIN Jakarta',
        'about.intro': 'Faculty of Science and Technology (FST) UIN Syarif Hidayatullah Jakarta is a center of education, research, and innovation in science and technology.',
        'about.description': 'FST UIN Jakarta is committed to producing excellent, globally competitive, and morally upright graduates in science and technology.',
        'about.program-title': 'Study Programs',
        'about.program-desc': 'Various excellent study programs in science and technology',
        'about.lab-title': 'Laboratory',
        'about.lab-desc': 'Modern laboratory facilities to support practicum and research activities',
        'about.facility-title': 'Modern Facilities',
        'about.facility-desc': 'Classrooms, libraries, and other modern supporting facilities',
        'about.lecturer-title': 'Professional Lecturers',
        'about.lecturer-desc': 'A team of experienced and competent lecturers in their respective fields',
        'about.more': 'Read More',
        
        // Specialization Section
        'spec.title': 'FST Excellence',
        'spec.heading': 'FST UIN Jakarta: Center of Excellence in Science and Technology Education.',
        'spec.description': 'FST UIN Jakarta has become one of the leading faculties in the development of science and technology in Indonesia. With a commitment to producing quality and globally competitive graduates, FST continues to innovate in learning methods and facility development.',
        'spec.students': 'Active Students',
        'spec.staff': 'Lecturers & Staff',
        'spec.rooms': 'Rooms & Labs',
        'spec.program': 'Study Programs',
        'spec.lab': 'Laboratory',
        'spec.library': 'Library',
        'spec.meeting': 'Meeting Room',
        
        // Services Section
        'service.title': 'Services & Facilities',
        'service.education': 'Quality Education',
        'service.education-desc': 'Excellent study programs with curriculum adapted to industry needs.',
        'service.modern-lab': 'Modern Laboratory',
        'service.modern-lab-desc': 'Laboratory facilities equipped with the latest equipment for practicum and research.',
        'service.digital-lib': 'Digital Library',
        'service.digital-lib-desc': 'Complete collection of digital books and journals to support academic activities.',
        'service.meeting-room': 'Meeting Room',
        'service.meeting-room-desc': 'Meeting and conference room facilities for academic and non-academic activities.',
        'service.internet': 'Internet & WiFi',
        'service.internet-desc': 'Fast and stable internet connection available throughout the campus area.',
        'service.reservation': 'Reservation System',
        'service.reservation-desc': 'Easy and efficient online room reservation system for students and staff.',
        'service.reserve-button': 'Reserve Room',
        
        // History Section
        'history.title': 'History of FST UIN Jakarta',
        'history.1998.year': '1998-2000',
        'history.1998.title': 'Establishment of FST',
        'history.1998.desc': 'Faculty of Science and Technology UIN Syarif Hidayatullah Jakarta was established as part of the transformation of IAIN to UIN. FST became a pioneer in integrating science and technology with Islamic values.',
        'history.2005.year': '2005-2010',
        'history.2005.title': 'Study Program Development',
        'history.2005.desc': 'FST expanded its study programs by adding various new majors such as Informatics Engineering, Information Systems, and other study programs relevant to industry needs.',
        'history.2015.year': '2015-2020',
        'history.2015.title': 'Accreditation & Recognition',
        'history.2015.desc': 'All study programs at FST successfully obtained A accreditation from BAN-PT. FST also gained international recognition and established cooperation with various universities abroad.',
        'history.2020.year': '2020-Present',
        'history.2020.title': 'Digital Era & Innovation',
        'history.2020.desc': 'FST entered the digital era with the development of online room reservation systems, hybrid learning, and various technological innovations to support more efficient academic activities.',
        
        // Footer
        'footer.about-text': 'Faculty of Science and Technology (FST) UIN Syarif Hidayatullah Jakarta is a center of education, research, and innovation in science and technology committed to producing excellent and globally competitive graduates.',
        'footer.contact': 'Contact Information',
        'footer.address': 'FST UIN Jakarta Building, UIN Jakarta, Jl. Lkr. Kampus 1, Cempaka Putih, Ciputat Timur, South Tangerang City, Banten 15412',
        'footer.programs': 'Study Programs',
        'footer.facilities': 'Facilities',
        'footer.newsletter-title': 'Subscribe to FST Newsletter!',
        'footer.newsletter-desc': 'Get the latest information about academic activities, research, and events at FST UIN Jakarta. Don\'t miss important updates from us.',
        'footer.newsletter-placeholder': 'ENTER YOUR EMAIL',
        'footer.newsletter-button': 'Subscribe',
        'footer.copyright': '© 2024 Faculty of Science and Technology UIN Syarif Hidayatullah Jakarta. All Rights Reserved. | Designed By Narendra Yusuf',
        
        // Majors
        'major.informatika': 'Informatics Engineering',
        'major.sistem-informasi': 'Information Systems',
        'major.matematika': 'Mathematics',
        'major.fisika': 'Physics',
        'major.kimia': 'Chemistry',
        'major.biologi': 'Biology',
        
        // Facilities
        'facility.classroom': 'Classroom',
        'facility.lab': 'Laboratory',
        'facility.theater': 'Theater Room',
        'facility.meeting': 'Meeting Room',
        'facility.library': 'Library',
        'facility.wifi': 'Campus Wi-Fi',
        
        // Welcome Section (Home)
        'welcome.subtitle': 'Welcome to',
        'welcome.title': 'FST UIN Jakarta Room Reservation System',
        'welcome.about-title': 'About FST UIN Jakarta',
        'welcome.about-intro': 'Faculty of Science and Technology (FST) UIN Syarif Hidayatullah Jakarta is a center of education, research, and innovation in science and technology.',
        'welcome.about-desc': 'FST UIN Jakarta is committed to producing excellent, globally competitive, and morally upright graduates. With modern facilities, professional lecturers, and a conducive academic environment, FST is the top choice for aspiring Muslim scientists and technologists in Indonesia. Join us for a brilliant future in science and technology!',
        'welcome.read-more': 'Read More',
        'welcome.new-reservation': 'New Reservation',
        
        // Rooms Section
        'rooms.title': 'Rooms & Facilities FST',
        'rooms.desc': 'FST UIN Syarif Hidayatullah Jakarta provides various room options such as classrooms, laboratories, theater rooms, and other modern and comfortable facilities to support academic activities, research, and campus events.',
        
        // Specialization Section (Home)
        'home.spec.title': 'Campus Facilities',
        'home.spec.heading': 'Integrated room reservation system to support academic and non-academic activities.',
        'home.spec.description': 'A room reservation platform that makes it easy for students, lecturers, and staff to book various campus facilities. Professionally managed with the latest technology for maximum efficiency in room management.',
        'home.spec.rooms-available': 'Available Rooms',
        'home.spec.monthly-reservations': 'Monthly Reservations',
        'home.spec.service-hours': 'Service Hours',
        'home.spec.classroom': 'Classroom',
        'home.spec.library': 'Library',
        'home.spec.conference': 'Conference Room',
        'home.spec.cafeteria': 'Cafeteria',
        
        // Services Section
        'services.title': 'Our Services',
        'services.wifi': 'Free Wi-Fi',
        'services.wifi-desc': 'Fast and stable internet connection available throughout the hotel area for guest convenience.',
        'services.meetings': 'Meetings & Events',
        'services.meetings-desc': 'Meeting and event rooms equipped with modern equipment for various needs.',
        'services.booking': 'Online Booking',
        'services.booking-desc': 'Easy and fast online room booking through our official website.',
        'services.facilities': 'Best Facilities & Infrastructure',
        'services.facilities-desc': 'High-quality facilities and infrastructure to ensure maximum comfort.',
        'services.reservation': 'Reserve Now',
        'services.reservation-desc': '24-hour reservation service to make it easy for guests to book rooms anytime.',
        'services.staff': 'Professional Staff',
        'services.staff-desc': 'Trained and professional staff team ready to serve friendly and efficiently.',
    }
};

// Language Management
class LanguageManager {
    constructor() {
        this.currentLang = localStorage.getItem('language') || 'id';
        this.init();
    }
    
    init() {
        // Set initial language
        this.setLanguage(this.currentLang);
        
        // Listen for language change events
        document.addEventListener('DOMContentLoaded', () => {
            this.updatePage();
        });
    }
    
    setLanguage(lang) {
        if (lang !== 'id' && lang !== 'en') {
            lang = 'id';
        }
        this.currentLang = lang;
        localStorage.setItem('language', lang);
        this.updatePage();
    }
    
    getLanguage() {
        return this.currentLang;
    }
    
    translate(key) {
        return translations[this.currentLang][key] || key;
    }
    
    updatePage() {
        // Update all elements with data-translate attribute
        const elements = document.querySelectorAll('[data-translate]');
        elements.forEach(element => {
            const key = element.getAttribute('data-translate');
            const translation = this.translate(key);
            
            // Handle different element types
            if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
                if (element.hasAttribute('placeholder')) {
                    element.placeholder = translation;
                } else {
                    element.value = translation;
                }
            } else if (element.tagName === 'OPTION') {
                element.textContent = translation;
            } else {
                element.textContent = translation;
            }
        });
        
        // Update language switcher buttons
        this.updateLanguageSwitcher();
    }
    
    updateLanguageSwitcher() {
        const langButtons = document.querySelectorAll('[data-lang]');
        langButtons.forEach(button => {
            const lang = button.getAttribute('data-lang');
            if (lang === this.currentLang) {
                button.classList.add('active');
            } else {
                button.classList.remove('active');
            }
        });
    }
    
    toggleLanguage() {
        const newLang = this.currentLang === 'id' ? 'en' : 'id';
        this.setLanguage(newLang);
    }
}

// Initialize Language Manager
const languageManager = new LanguageManager();

// Global function to change language
function changeLanguage(lang) {
    languageManager.setLanguage(lang);
}

// Global function to toggle language
function toggleLanguage() {
    languageManager.toggleLanguage();
}

