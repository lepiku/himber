export const website = {
  name: 'Maju Bersama Sewa Mobil',
  contact: {
    phone: '082112593113',
    email: 'herni.sasadara@gmail.com',
    address: `
      Ruko ARALIA Blok HY 36 No. 37 Harapan Indah 2, Pusaka Rakyat, Taruma Jaya,
      Kab. Bekasi, Jawa Barat
    `
  }
}

export const aboutUs = [
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
'
]

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
    price: 0,
    img: '/images/car-unit/mitsubishi-triton.png',
    photos: [
      {
        title: 'Depan',
        img: '/images/car-photo/toyota-zenix-2023-front.jpg'
      },
      {
        title: 'Kiri',
        img: '/images/car-photo/toyota-zenix-2023-left.jpg'
      },
      {
        title: 'Kanan',
        img: '/images/car-photo/toyota-zenix-2023-right.jpg'
      }
    ],
    desc: [
      ['Model', 'Toyota Kijang Innova Zenix (2023)'],
      ['Warna', 'Hitam'],
      ['Mesin', '?Bensin / Hybrid'],
      ['Penumpang', '2 Depan, 2 Tengah, 3 Belakang']
    ]
  },
  {
    name: 'Toyota Veloz (2023)',
    img: '/images/car-unit/mitsubishi-triton.png',
    price: 0,
    photos: [
      {
        title: 'Depan',
        img: '/images/car-photo/toyota-veloz-2023-front.jpg'
      },
      {
        title: 'Kanan',
        img: '/images/car-photo/toyota-veloz-2023-right.jpg'
      }
    ],
    desc: [
      ['Model', 'Toyota Veloz (2023)'],
      ['Warna', 'Putih'],
      ['Mesin', 'Bensin'],
      ['Penumpang', '?2 Depan, 2 Tengah, 2 Belakang']
    ]
  },
  {
    name: 'Toyota Hilux (2023)',
    img: '/images/car-unit/mitsubishi-triton.png',
    price: 0,
    photos: [
      {
        title: 'Depan Kiri',
        img: '/images/car-photo/toyota-hilux-2023-frontleft.jpg'
      }
    ],
    desc: [
      ['Model', 'Toyota Hilux (2023)'],
      ['Warna', 'Silver'],
      ['Mesin', 'Bensin'],
      ['Penumpang', '2 Depan, 3 Belakang']
    ]
  },
  {
    name: 'Mitsubishi Pajero Sport (2018)',
    img: '/images/car-unit/mitsubishi-triton.png',
    price: 0,
    photos: [
      {
        title: 'Depan',
        img: '/images/car-photo/mitsubishi-pajero-2018-front.jpg'
      },
      {
        title: 'Kiri',
        img: '/images/car-photo/mitsubishi-pajero-2018-left.jpg'
      },
      {
        title: 'Belakang',
        img: '/images/car-photo/mitsubishi-pajero-2018-back.jpg'
      }
    ],
    desc: [
      ['Model', 'Mitsubishi Pajero Sport (2018)'],
      ['Warna', 'Putih'],
      ['Mesin', '?4WD Diesel'],
      ['Penumpang', '?2 Depan, 3 Belakang']
    ]
  },
  {
    name: 'Jeep Rubicon',
    img: '/images/car-unit/mitsubishi-triton.png',
    price: 0,
    photos: [
      {
        title: 'Depan',
        img: '/images/car-photo/jeep-rubicon-front.jpg'
      },
      {
        title: 'Kiri',
        img: '/images/car-photo/jeep-rubicon-kiri.jpg'
      }
    ],
    desc: [
      ['Model', 'Jeep Rubicon'],
      ['Warna', '?Putih'],
      ['Mesin', '?Bensin'],
      ['Penumpang', '?2 Depan, 3 Belakang']
    ]
  },
  {
    name: 'Honda CRV',
    img: '/images/car-unit/mitsubishi-triton.png',
    price: 0,
    photos: [
      {
        title: 'Depan',
        img: '/images/car-photo/honda-crv-front.jpg'
      },
      {
        title: 'Kanan',
        img: '/images/car-photo/honda-crv-right.jpg'
      }
    ],
    desc: [
      ['Model', 'Honda CRV Black Edition'],
      ['Warna', 'Hitam'],
      ['Mesin', '?Bensin'],
      ['Penumpang', '?2 Depan, 3 Belakang']
    ]
  }
]
