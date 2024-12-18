export const website = {
  name: 'Sewa Doang',
  description:
    'Sewa Doang berawal dari usaha perorangan, kini CV Maju Bersama Rental menyediakan berbagai layanan.',
  contactUs: 'Hubungi Kami',
  contact: {
    name: 'Herni',
    phone: '082112593113',
    phoneText: '0821-1259-3113 (Herni)',
    email: 'herni.sasadara@gmail.com',
    address:
      'Ruko ARALIA Blok HY 36 No. 37 Harapan Indah 2, Pusaka Rakyat, Taruma Jaya, Kab. Bekasi, Jawa Barat',
  },
  socialMediaLinks: [
    // { title: 'Instagram', icon: 'mdi-instagram', href: '/' },
    // { title: 'Facebook', icon: 'mdi-facebook', href: '/' },
    { title: 'WhatsApp', icon: 'mdi-whatsapp', href: 'https://api.whatsapp.com/send?phone=6282112593113'  },
  ],
  services: 'Layanan',
  location: 'Lokasi',
}

export const sectionAboutUs = {
  title: 'Tentang Kami',
  header: 'Mengapa Sewa Doang?',
  text: 'Kami hadir sebagai solusi transportasi dan penyewaan alat berat sejak 2012. Berlokasi di Tarumajaya, Kab. Bekasi.',
  items: [
    'Layanan Terbaik',
    'Unit Berkualitas',
    'Nyaman dan Aman',
    'Pemesanan Cepat',
  ],
  buttonMore: 'Pelajari Lebih Lanjut',
}

export type Faq = {
  question: string
  answer: (
    | string
    | { type: 'list'; value: string[] }
    | { type: 'header'; value: string }
  )[]
}
export const sectionFaq = {
  title: 'FAQ',
  header: 'Frequently Asked Questions',
  text: 'Apa saja yang sering ditanyakan melalui WhatsApp dan media sosial kami.',
  buttonMore: 'Selengkapnya',

  questions: [
    {
      question: 'Ada layanan apa saja?',
      answer: [
        {
          type: 'list',
          value: [
            'Penyewaan mobil untuk kebutuhan perusahaan (mobil penumpang dan barang)',
            // 'Penyewaan alat berat seperti eskavator dan bulldozer',
            'Penyediaan jasa transportasi untuk sewa jangka pendek maupun jangka panjang',
            'Layanan dengan fokus pada kualitas, kenyamanan, keamanan, dan harga terbaik',
          ],
        },
      ],
    },
    {
      question: 'Syarat dan ketentuan Sewa Doang?',
      answer: [
        { type: 'header', value: 'Syarat' },
        {
          type: 'list',
          value: [
            'Sewa dapat digunakan oleh perusahaan atau perorangan',
            'Wajib menggunakan supir (tidak bisa lepas kunci)',
            'Mobil akan diantarkan ke lokasi yang telah ditentukan kostumer',
            'Pembayaran menggunakan transfer BCA atau langsung di muka',
          ],
        },
        { type: 'header', value: 'Ketentuan' },
        {
          type: 'list',
          value: [
            'Pemesanan untuk perorangan dibutuhkan data diri lengkap dengan KTP',
            'Untuk Perusahaan membutuhkan KTP penanggung jawab dengan data diri lengkap. Pembayaran dilakukan 50% di muka dari total pembayaran.',
          ],
        },
      ],
    },
    {
      question: 'Sewa Doang tersedia di lokasi mana saja?',
      answer: ['TODO'],
    },
    {
      question: 'Apakah ada batas jarak tempuh (km)?',
      answer: [
        'Tidak ada. Penyewaam bisa langsung hubungi WhatsApp atau media sosial kami!',
      ],
    },
    {
      question: 'Bagaimana cara memesan mobil?',
      answer: [
        // {
        //   type: 'list',
        //   value: [
        //     'Anda bisa langsung menuju media sosial kami atau WhatsApp dengan klik menu “Sewa” di bagian paling atas laman Web.',
        //     'SALAH: Atau isi form di laman awal web yang akan otomatis menuju ke admin kami dan penyewaan akan langsung di proses!',
        //   ],
        // },
        'Anda bisa langsung menuju media sosial kami atau WhatsApp dengan klik menu “Sewa” di bagian paling atas laman Web.',
      ],
    },
    {
      question: 'Bagaimana prosedur pembayaran sewa?',
      answer: ['Pembayaran dapat melewati transfer BCA atau bayar di muka.'],
    },
  ] as Faq[],
}

export const historyTexts = [
  'Perkembangan dan persaingan dunia bisnis yang makin pesat, menjadikan para \
  pelaku bisnis diharuskan memiliki mobilitas yang makin pesat, tidak hanya \
  tinggi namun juga efisien sekaligus juga efektif, sehingga kebutuhan akan \
  sarana transportasi yang tidak saja cepat namun aman dengan tingkat \
  kenyamanan sempurna sebagai suatu keharusan dan tidak dapat dihindari.',

  'Untuk itulah kami hadir sebagai partner dan solusi. Sejak 2012, berawal \
  dari usaha perorangan yang menyewakan mobil untuk perusahaan-perusahan, dan \
  seiring berjalannya waktu usaha kami mengalami perkembangan menjadi CV MAJU \
  BERSAMA RENTAL (tahun 2019) karena kami tidak saja menyediakan unit mobil \
  kami juga memenuhi permintaan dari client-client kami untuk menyediakan alat \
  berat berupa Escavator dan Bolduzer, dan saat ini kami berkedudukan di \
  Tarumajaya, Kab. Bekasi. Kami adalah perusahaan transportasi dan penyewaan \
  alat berat yang berdiri, tumbuh dengan senantiasa melakukan \
  improvisasi/peningkatan kualitas layanan sebagai jawaban tantangan dunia \
  usaha yang semakin kompleks. Kami bertujuan mendukung dan memenuhi semua \
  aktifitas transportasi dan penyewaan alat berat bagi perusahaan anda. baik \
  mobil penumpang maupun mobil barang. Karena melayani anda adalah sungguh \
  suatu kehormatan besar, maka demi kepuasan pelanggan, kami hanya menyediakan \
  unit mobil dengan standar kualitas, kenyamanan dan keamanan TERBAIK.',

  'Kami menyediakan jasa transportasi dengan harga terbaik untuk sewa jangka \
  pendek maupun jangka panjang. dan kami siap tumbuh berkembang bersama anda. \
',
]
export const aboutUs = {
  visionTitle: 'Visi',
  vision:
    'Menjadi perusahaan transportasi dan penyewaan alat berat terbaik yang mendukung kebutuhan bisnis dengan standar kualitas, kenyamanan, dan keamanan tinggi, serta terus berinovasi untuk menjawab tantangan dunia usaha yang semakin kompleks.',

  missionTitle: 'Misi',
  missions: [
    'Menyediakan solusi transportasi dan penyewaan alat berat yang efisien, efektif, dan aman.',
    'Memberikan layanan berkualitas tinggi dengan standar terbaik untuk mobil penumpang dan mobil barang.',
    'Mendukung kebutuhan transportasi perusahaan dengan harga kompetitif untuk sewa jangka pendek maupun jangka panjang.',
    'Berkomitmen untuk tumbuh dan berkembang bersama pelanggan melalui peningkatan kualitas layanan secara berkelanjutan.',
  ],

  moreQuestions: 'Masih Ada Pertanyaan?',
  contactUs: 'Kontak Kami',
}

export type Car = {
  name: string
  img: string
  price: number
  photos: CarPhoto[]
  desc: [string, string][]
}
type CarPhoto = { img: string; title: string }
export const cars: Car[] = [
  {
    name: 'Toyota Zenix (2023)',
    price: 600000,
    img: '/images/car-unit/toyota-zenix-2023.png',
    photos: [
      {
        title: 'Depan',
        img: '/images/car-photo/toyota-zenix-2023-front.jpg',
      },
      {
        title: 'Kiri',
        img: '/images/car-photo/toyota-zenix-2023-left.jpg',
      },
      {
        title: 'Kanan',
        img: '/images/car-photo/toyota-zenix-2023-right.jpg',
      },
    ],
    desc: [
      ['Model', 'Toyota Kijang Innova Zenix (2023)'],
      ['Warna', 'Hitam'],
      ['Mesin', 'Bensin (Pertalite)'],
      ['Penumpang', '2 Depan, 2 Tengah, 3 Belakang'],
    ],
  },
  {
    name: 'Toyota Veloz (2023)',
    img: '/images/car-unit/toyota-veloz-2023.png',
    price: 600000,
    photos: [
      {
        title: 'Depan',
        img: '/images/car-photo/toyota-veloz-2023-front.jpg',
      },
      {
        title: 'Kanan',
        img: '/images/car-photo/toyota-veloz-2023-right.jpg',
      },
    ],
    desc: [
      ['Model', 'Toyota Veloz (2023)'],
      ['Warna', 'Putih'],
      ['Mesin', 'Bensin (Pertalite)'],
      ['Penumpang', '2 Depan, 3 Tengah, 3 Belakang'],
    ],
  },
  {
    name: 'Toyota Hilux (2023)',
    img: '/images/car-unit/toyota-hilux-2023.png',
    price: 2500000,
    photos: [
      {
        title: 'Depan Kiri',
        img: '/images/car-photo/toyota-hilux-2023-frontleft.jpg',
      },
    ],
    desc: [
      ['Model', 'Toyota Hilux (2023)'],
      ['Warna', 'Silver'],
      ['Mesin', 'Bensin (Pertalite)'],
      ['Penumpang', '2 Depan, 3 Belakang'],
    ],
  },
  {
    name: 'Mitsubishi Pajero Sport (2018)',
    img: '/images/car-unit/mitsubishi-pajero-sport-2018.png',
    price: 2000000,
    photos: [
      {
        title: 'Depan',
        img: '/images/car-photo/mitsubishi-pajero-2018-front.jpg',
      },
      {
        title: 'Kiri',
        img: '/images/car-photo/mitsubishi-pajero-2018-left.jpg',
      },
      {
        title: 'Belakang',
        img: '/images/car-photo/mitsubishi-pajero-2018-back.jpg',
      },
    ],
    desc: [
      ['Model', 'Mitsubishi Pajero Sport (2018)'],
      ['Warna', 'Putih'],
      ['Mesin', '4WD Diesel (Dex / Dexlite)'],
      ['Penumpang', '2 Depan, 3 Tengah, 3 Belakang'],
    ],
  },
  {
    name: 'Jeep Rubicon',
    img: '/images/car-unit/jeep-rubicon.png',
    price: 20000000,
    photos: [
      {
        title: 'Depan',
        img: '/images/car-photo/jeep-rubicon-front.jpg',
      },
      {
        title: 'Kiri',
        img: '/images/car-photo/jeep-rubicon-left.jpg',
      },
    ],
    desc: [
      ['Model', 'Jeep Rubicon'],
      ['Warna', 'Silver'],
      ['Mesin', 'Bensin (Pertalite)'],
      ['Penumpang', '2 Depan, 3 Tengah'],
    ],
  },
  {
    name: 'Honda CRV',
    img: '/images/car-unit/honda-crv.png',
    price: 2000000,
    photos: [
      {
        title: 'Depan',
        img: '/images/car-photo/honda-crv-front.jpg',
      },
      {
        title: 'Kanan',
        img: '/images/car-photo/honda-crv-right.jpg',
      },
    ],
    desc: [
      ['Model', 'Honda CRV Black Edition'],
      ['Warna', 'Hitam'],
      ['Mesin', 'Bensin (Pertamax)'],
      ['Penumpang', '2 Depan, 3 Tengah, 3 Belakang'],
    ],
  },
]

export const messageTemplate = {
  navbar: () => 'Halo, Saya ingin menyewa mobil di SewaDoang, apakah bisa?',
  form: (name: string, location: string, date: string) =>
    'Halo, saya ingin menyewa mobil dengan identitas:\n' +
    '\n' +
    `Nama: ${name}\n` +
    `Lokasi: ${location}\n` +
    `Tanggal: ${date}`,
  car: (car: string) => `Halo, saya ingin menyewa mobil ${car}`,
  contactUs: () => 'Halo, Saya ingin menanyakan…',
}
