import Marquee from 'react-fast-marquee'

export default function MemberDelta () {
  // Contoh data logo sekolah (nanti kamu bisa ganti pakai logo asli)
 const sekolah = [
  {
    nama: 'SMK Negeri 1 Bogor',
    logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8RgjanZB8qJe_m6F4oxQ95ucxXGl3RZvXAA&s'
  },
  {
    nama: 'SMK Negeri 2 Bogor',
    logo: 'https://pbs.twimg.com/profile_images/1597686320/50257_112019792778_7466805_n_400x400.jpg'
  },
  {
    nama: 'SMK Wikrama Bogor',
    logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQL5SxZ8tquxXkpux6Wm4C3RyVvPbz6Q3RSw&s'
  },
  {
    nama: 'SMK PGRI 1 Bogor',
    logo: 'https://tempatles.id/img/4logo-smks-pgri-1-gresik.png'
  },
  {
    nama: 'SMK Muhammadiyah 1 Bogor',
    logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsxcM-2tZTOUA4iKEnddtbwg3MVh6Q8W73xQ&s'
  },
  {
    nama: 'SMK Taruna Terpadu',
    logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSniRfrNj48dFQ6jlwGkFx2EufjkiCySklHTQ&s'
  },
  {
    nama: 'SMK Grafika Bogor',
    logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfbEIXj-ZiAQRsQiA54ZJNUtAUqtDyo6Xr6A&s'
  },
  {
    nama: 'SMK Pakuan',
    logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSFhG4z1WLPrv5nCa1Y95EQb7wI3eh2NLSdQ&s'
  },
  {
    nama: 'SMK Kosgoro',
    logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFqf9BSIDBmkFlpy_kLQWnsDD6u514Y8z1rQ&s'
  },
  {
    nama: 'SMK Bina Sejahtera 1',
    logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8_yKrRF0zBr6h2y6BvPSo5UuUnbewczTeRg&s'
  },
  {
    nama: 'SMK Bina Sejahtera 2',
    logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8_yKrRF0zBr6h2y6BvPSo5UuUnbewczTeRg&s'
  },
  {
    nama: 'SMK Bina Sejahtera 3',
    logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8_yKrRF0zBr6h2y6BvPSo5UuUnbewczTeRg&s'
  },
  {
    nama: 'SMK YPHB Bogor',
    logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnW09dDO5ih3CNFY9f_C44comkOcMK0wl57g&s'
  },
  {
    nama: 'SMK Tri Dharma 1',
    logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWZqhhTsx7Yuf4hKju0y1y16IeIlo2lEJtBw&s'
  },
  {
    nama: 'SMK Tri Dharma 2',
    logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSY-uiVUvNF-2o9NMxY5Lip8ouQF28d0N-h7g&s'
  },
  {
    nama: 'SMK Tunas Harapan',
    logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2q1AWiMxczeWtGBEFdKsR3-T9RjFQMUuhpQ&s'
  },
  {
    nama: 'SMK Pelita Ciampea',
    logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTYjk-J0MLvWAyT-pcXf96VPaL0lGF2wNDeQ&s'
  },
  {
    nama: 'SMK Kesehatan Bogor',
    logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkE2oJLvBh7AQTh4Qq2AlHXcLyLIL5eqOROA&s'
  },
  {
    nama: 'SMK Harapan Bangsa',
    logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQGqNKn_w_j4fuuCTIfWr025N46TRxJqwzvQ&s'
  },
  {
    nama: 'SMK Insan Kreatif',
    logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSG9IgxnftVkaE8JaF503AaJas1OSI6tvQbnw&s'
  },
  {
    nama: 'SMK Amanah Bangsa',
    logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcoxP-kuhalheP64z7x6yaO24vzTSyvxinGQ&s'
  },
  {
    nama: 'SMK Plus Bogor',
    logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAtvD3RQZs3KT6p4x-x7PG4Nji8irZF7rFmA&s'
  },
  {
    nama: 'SMK Mutiara Bangsa',
    logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-jrBMfS_7NdlRYG90FCMOdEsOAfyqpdvfDg&s'
  },
  {
    nama: 'SMK Cibinong',
    logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKC7UFj_jglEMXBWo_abDtBIG7nWwPXQbt3g&s'
  },
  {
    nama: 'SMK Tunas Jaya',
    logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSru8-MMEt716VnoUaDsY8aOTSgbH2EaYnQbw&s'
  },
  {
    nama: 'SMK Ar-Rahman',
    logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgqjJd-2VYORKe-K4W-9NHiMUcsmEc6uomIw&s'
  },
  {
    nama: 'SMK Putra Bangsa',
    logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQG02nMla1Htrq4IU97Xy9k_APEfoDk7wJHAg&s'
  },
  {
    nama: 'SMK Negeri 3 Bogor',
    logo: 'https://media.licdn.com/dms/image/v2/C560BAQHbFfkBojZDoQ/company-logo_200_200/company-logo_200_200/0/1630668796338?e=2147483647&v=beta&t=X2THifoAy0YCjnWXaKnWKOEwB5A9VrbLk2PP_Q6Ex9c'
  },
  {
    nama: 'SMK Negeri 4 Bogor',
    logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSleeh_e1h0Yhxx3wB7gqWggPKojtdTy4C8SA&s'
  },
  {
    nama: 'SMK Negeri 5 Bogor',
    logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKzn4Md-XGygYaYugKd39nCcQlNxjLWPOJcQ&s'
  },
  {
    nama: 'SMK Negeri 6 Bogor',
    logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkdO_Od31_km2sawYR56hayFSAMR2L3jzeiw&s'
  },
  {
    nama: 'SMK Negeri 7 Bogor',
    logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSM17rn-CBxH7gR08s_4Wu5friEb67WyNuIbA&s'
  },
  {
    nama: 'SMK Negeri 8 Bogor',
    logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0P6EymaK2devCo88s_ZdhWeyBiwcElC8xrA&s'
  },
  {
    nama: 'SMK Negeri 9 Bogor',
    logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIC94309AUZ5oeSfvlcfdESR_lQwbRZ44WEQ&s'
  },
  {
    nama: 'SMK Negeri 10 Bogor',
    logo: 'https://media.licdn.com/dms/image/v2/D560BAQGfvcTceGDlBg/company-logo_200_200/company-logo_200_200/0/1683457254156?e=2147483647&v=beta&t=f0dRIcImaTjm6kiO_bId3WMzv_xcp2DawutErv7FBns'
  },
  {
    nama: 'SMK Negeri 11 Bogor',
    logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-1Apgje6jHtoVYivSqo8-jkkiS_Ws6kVOxg&s'
  }
]


// Potong array jadi 5 grup, masing-masing 7 sekolah
const grouped = Array.from({ length: 5 }, (_, i) =>
  sekolah.slice(i * 7, i * 7 + 7)
)


  return (
    <section className='bg-[#f7f7f7] py-20 flex flex-col items-center text-center px-4 md:px-8 overflow-hidden w-full'>
  {/* Judul Elegan */}
  <div className='mb-10 w-full'>
<h2 className="text-3xl md:text-5xl font-light tracking-wide 
   text-gray-700 relative">
  <span className="bg-gradient-to-r from-gray-900 via-gray-700 to-gray-500 bg-clip-text text-transparent">
    Anggota Komunitas Kami
  </span>
</h2>
    <div className='h-[2px] z-0 w-24 mx-auto mt-4 bg-gradient-to-r from-gray-400 via-gray-800 to-gray-400 rounded-full'></div>
    <p className='text-gray-500 mt-4 text-sm md:text-lg italic px-2'>
      35 Sekolah Menengah Kejuruan Bogor yang berkolaborasi aktif.
    </p>
  </div>

  {/* 5 baris marquee */}
  <div className='flex flex-col gap-6 md:gap-8 w-full max-w-[100vw] overflow-hidden'>
    {grouped.map((row, i) => (
      <Marquee
        key={i}
        speed={40 + i * 5}
        gradient
        // gradientColor={[253, 250, 246]}
        direction={i % 2 === 0 ? 'left' : 'right'}
        pauseOnHover
      >
        {row.map((s, j) => (
          <div
            key={j}
            className='flex flex-col items-center justify-center mx-10'
          >
            <img
              src={s.logo}
              alt={s.nama}
              className='h-16 w-16 object-contain mb-2 drop-shadow-md transition-transform hover:scale-105'
              loading='lazy'
            />
            <p className='text-sm font-medium text-gray-700 whitespace-nowrap'>
              {s.nama}
            </p>
          </div>
        ))}
      </Marquee>
    ))}
  </div>
        </section>
  )

}
