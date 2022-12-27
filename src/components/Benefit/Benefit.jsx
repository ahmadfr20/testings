import React from 'react'
import buletb1 from '../../assets/buletb1.png'
import buletb2 from '../../assets/buletb2.png'
import buletb3 from '../../assets/buletb3.png'
import buletb4 from '../../assets/buletb4.png'

const Benefit = () => {
  return (
        <div class="bg-gray-100">
          <div class="container px-6 py-32 pb-32 mx-auto ">
              <h1 class="text-3xl font-blueberry text-center text-black lg:text-5xl ">Belajar setiap hari dan temukan </h1>
              <h1 class="text-3xl font-blueberry text-center text-black lg:text-5xl ">potensimu bareng <span className='font-bold' style={{ color: "#01C587"}}>#Dimulai</span></h1>
              <br />

              <p class="max-w-2xl font-blueberrymd mx-auto text-xl mt-4 text-center text-black xl:mt-6 ">
                  Dimulai berkomitmen memberikan kemudahan untuk belajar hal baru setiap hari dan menjadikannya kebiasaan.
              </p>
              <br />
              <br />

              <div class="grid grid-cols-1 w-full h-full gap-10 mt-6 xl:mt-12 md:grid-cols-2 lg:grid-cols-3" >
                  <div class="w-full h-full mb-8 p-12 bg-no-repeat bg-emerald-500 space-y-8 text-left rounded-large" style={{ backgroundImage: `url(${buletb1})` }}>
                  <span class="bg-emerald-600 font-blueberrymd text-white text-bold font-medium mr-2 px-4 py-3 rounded ">Rutinitas</span>

                      <h2 class="text-2xl font-blueberry text-white">
                          Belajar hal baru setiap hari.
                      </h2>

                      <p class=" text-lg text-white font-blueberrymd">Setiap hari adalah belajar. Dimulai memfasilitasimu dengan berbagai konten yang kaya akan ilmu untuk berkembang.</p>
                  </div>

                  <div class="w-full p-12 bg-no-repeat bg-emerald-500 space-y-8 text-left rounded-large " style={{ backgroundImage: `url(${buletb2})` }}>
                    <section class="bg-top-right" style={{ backgroundImage: `url(${buletb3})` }}></section>
                  <span class="bg-emerald-600 font-blueberrymd text-white text-bold font-medium mr-2 px-4 py-3 rounded ">Kebiasaan</span>

                      <h2 class="text-2xl font-blueberry text-white">
                      Rutinitas baru, kebiasaan baru.
                      </h2>

                      <p class="font-medium text-lg text-white font-blueberrymd">Belajar secara rutin setiap harinya dengan Dimulai, akan membantumu untuk menumbuhkan kebiasaan baru yang baik</p>
                  </div>
                  <div class="w-full p-12 bg-no-repeat bg-emerald-500 space-y-8 text-left rounded-large " style={{ backgroundImage: `url(${buletb4})` }}>
                  <span class="bg-emerald-600  text-white text-bold font-medium mr-2 px-4 py-3 rounded font-blueberrymd" >Progress</span>

                      <h2 class="text-2xl font-blueberry text-white">
                      Bikin gak nyadar udah belajar.
                      </h2>

                      <p class="font-medium text-lg text-white font-blueberrymd">Dengan cara belajar yang baru dan menyenangkan, kamu ga akan terbebani lagi untuk belajar dan mengembangkan diri</p>
                  </div>
              </div>
          </div>
    </div>
  )
}

export default Benefit