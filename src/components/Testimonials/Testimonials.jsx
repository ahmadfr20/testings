import React from 'react'
import orang1 from '../../assets/images/Testimonial/orang1.png'
import orang2 from '../../assets/images/Testimonial/orang2.png'
import orang3 from '../../assets/images/Testimonial/orang3.png'
import orang4 from '../../assets/images/Testimonial/orang4.png'
import orang5 from '../../assets/images/Testimonial/orang5.png'
import orang6 from '../../assets/images/Testimonial/orang6.png'
import orang7 from '../../assets/images/Testimonial/orang7.png'
import bg1 from '../../assets/images/Testimonial/bg/1.png'
import bg2 from '../../assets/images/Testimonial/bg/2.png'
import { useState } from 'react'
import pojokatas from '../../assets/pojokatas.png'
import pojokbwh from '../../assets/pojokbawah.png'




const Testimonials = () => {

  const [isShown, setIsShown] = useState(false);
  const [isShown1, setIsShown1] = useState(false);
  const [isShown2, setIsShown2] = useState(false);
  const [isShown3, setIsShown3] = useState(false);
  const [isShown4, setIsShown4] = useState(false);
  const [isShown5, setIsShown5] = useState(false);
  const [isShown6, setIsShown6] = useState(false);


  return (
    <section class="flex bg-no-repeat w-full bg-[#9197ff]"  id='testimonials' style={{ backgroundImage: `url(${bg1})` }}>
      <div class="bg-no-repeat bg-right-bottom mx-auto w-full sm:py-24 lg:px-8" style={{ backgroundImage: `url(${bg2})` }}>
        <div class="mx-auto max-w-full text-center">
          <h2 class="text-5xl max-w-full text-white font-blueberry tracking-tight pb-4">
            Kata mereka tentang #Dimulai
          </h2>

          <p class="text-gring-offset-warm-gray-500 text-xl font-blueberrymd text-white mx-auto mt-4 max-w-xl xl:px-[0px] mb-20">
            Segera gunakan aplikasi kami supaya kamu juga bisa jadi orang hebat seperti mereka! Arahkan kursor pada foto di bawah untuk melihat apa yang mereka katakan.
          </p>
        </div>
        <div class="w-full mx-1 xl:px-20 xs:px-10 xs:pl-2 grid grid-rows-7 max-w-full grid-flow-col xs:mr-[360px]">
          <div>
            <ul>
              <li>
              <button class="flex-wrap row-end-3 row-span-2 " onMouseEnter={() => setIsShown(true)} onMouseLeave={() => setIsShown(false)}>
                <img src={orang1} class="ml-20 h-15 w-15 xs:ml-10" alt="Logo1" />
              </button>
              </li>
              <li>
                {isShown && (
                <div class='absolute font-blueberrymd w-full xs:w-[200px] md:w-[300px] sm:w-[300px] lg:w-[450px] xl:w-[500px] inline-block py-6 px-3 lg:h-[300px] md:h-[290px] sm:h-[290px] xl:h-[225px] text-black bg-white rounded-lg shadow-lg opacity-100 '>
                  <h1 class='text-md text-center font-medium'>"Aplikasinya mantul, sangat membantu dalam melakukan sebuah habit secara konsisten selama ini! kuy download, kalau gak download rugi deh kalian." </h1>
                  <br />
                  <h1 class='font-semibold text-center'>Isyana</h1>
                  <br />
                  <h1 class='text-center'>@Isyana</h1>
                </div>
                )}
              </li>
            </ul>
          </div>
          <div class="row-start-1 row-end-4">
          <div>
            <ul>
              <li>
              <button class="row-start-1 row-end-4 mt-[200px]" onMouseEnter={() => setIsShown1(true)} onMouseLeave={() => setIsShown1(false)}>
                <img src={orang2} class="ml-20 h-15 w-15 xs:ml-5" alt="Logo1" />
              </button>
              </li>
              <li>
                {isShown1 && (
              <div class='absolute font-blueberrymd w-full xs:w-[200px] md:w-[300px] sm:w-[300px] lg:w-[450px] xl:w-[500px] inline-block py-6 px-3  lg:h-[300px] md:h-[290px] sm:h-[290px] xl:h-[225px] text-black bg-white rounded-lg shadow-lg opacity-100'>
                <h1 class='text-md text-center font-medium'>"Aplikasinya mantul, sangat membantu dalam melakukan sebuah habit secara konsisten selama ini! kuy download, kalau gak download rugi deh kalian." </h1>
                <br />
                <h1 class='font-semibold text-center'>Isyana</h1>
                <br />
                <h1 class='text-center'>@Isyana</h1>
              </div>
                )}
              </li>
            </ul>
          </div>
          </div>
          <div class="row-end-3 row-span-2">
            <ul>
              <li>
                <button class="row-end-3 row-span-2 mt-1" onMouseEnter={() => setIsShown2(true)} onMouseLeave={() => setIsShown2(false)}>
                <img src={orang3} class="ml-20 h-15 w-15 xs:ml-2" alt="Logo1" />
                </button>
              </li>
              <li>
              {isShown2 && (
              <div class='absolute font-blueberrymd w-full xs:right-[1px] lg:right-[450px] sm:right-[100px] md:right-[450px] xl:right-[700px] xs:w-[200px] md:w-[300px] sm:w-[300px] lg:w-[450px] xl:w-[500px] inline-block py-6 px-3 lg:h-[300px] md:h-[290px] sm:h-[290px] xl:h-[225px] text-black bg-white rounded-lg shadow-lg opacity-100'>
                <h1 class='text-md text-center font-medium'>"Aplikasinya mantul, sangat membantu dalam melakukan sebuah habit secara konsisten selama ini! kuy download, kalau gak download rugi deh kalian." </h1>
                <br />
                <h1 class='font-semibold text-center'>Isyana</h1>
                <br />
                <h1 class='text-center'>@Isyana</h1>
              </div>
                )}
              </li>
            </ul>
          </div>

          <div class="row-start-1 row-end-4">
            <ul>
              <li>
                <button class="row-start-1 row-end-4 mt-[250px] flex hidden md:flex" onMouseEnter={() => setIsShown3(true)} onMouseLeave={() => setIsShown3(false)}>
                  <img src={orang4} class="ml-20 h-15 w-15" alt="Logo1" />
                </button>
              </li>
              <li>
              {isShown3 && (
              <div class='absolute font-blueberrymd inline-block py-6 px-3 w-[500px] lg:h-[300px] md:h-[290px] sm:h-[290px] xl:h-[225px] text-black bg-white rounded-lg shadow-lg opacity-100'>
                <h1 class='text-md text-center font-medium'>"Aplikasinya mantul, sangat membantu dalam melakukan sebuah habit secara konsisten selama ini! kuy download, kalau gak download rugi deh kalian." </h1>
                <br />
                <h1 class='font-semibold text-center'>Isyana</h1>
                <br />
                <h1 class='text-center'>@Isyana</h1>
              </div>
                )}
              </li>
            </ul>


          </div>
          <div class=" pl-0 mr-6 items-center">
            <ul class=''>
              <li><button class="row-span-3 row-end-1 mt-10 flex hidden md:flex" onMouseEnter={() => setIsShown4(true)} onMouseLeave={() => setIsShown4(false)}>
            <img src={orang5} class="ml-10  h-15 w-15" alt="Logo1" /></button></li>
              <li>
                {isShown4 && (
              <div class='absolute font-blueberrymd py-6 px-3 lg:right-[50px] lg:w-[500px] xl:w-[500px] lg:h-[300px] md:h-[290px] sm:h-[290px] xl:h-[225px] mb-20 text-black bg-white rounded-lg shadow-lg opacity-100'>
                <h1 class='text-md text-center font-medium'>"Aplikasinya mantul, sangat membantu dalam melakukan sebuah habit secara konsisten selama ini! kuy download, kalau gak download rugi deh kalian." </h1>
                <br />
                <h1 class='font-semibold text-center'>Isyana</h1>
                <br />
                <h1 class='text-center'>@Isyana</h1>
              </div>
              )}
              </li>
            </ul>
          </div>
          <div class="row-start-1 row-end-4 mt-20">
          <ul class=''>
              <li>
                <button class="row-start-1 row-end-4 flex hidden lg:flex overscroll-none" onMouseEnter={() => setIsShown5(true)} onMouseLeave={() => setIsShown5(false)}>
                  <img src={orang7} class="mt-[200px] mr-20 h-15 w-15" alt="Logo1" />
                </button>
              </li>
              <li>
                {isShown5 && (
                <div class='absolute inline-block font-blueberrymd py-6 px-3 w-[500px] lg:h-[300px] md:h-[290px] sm:h-[290px] xl:h-[225px] right-6 text-black bg-white rounded-lg shadow-lg opacity-100'>
                  <h1 class='text-md text-center font-medium'>"Aplikasinya mantul, sangat membantu dalam melakukan sebuah habit secara konsisten selama ini! kuy download, kalau gak download rugi deh kalian." </h1>
                  <br />
                  <h1 class='font-semibold text-center'>Isyana</h1>
                  <br />
                  <h1 class='text-center'>@Isyana</h1>
                </div>
                )}
              </li>
          </ul>


          </div>
          <div class="row-start-1 row-end-4 ">
          <ul class='max-w-full min-w-xs'>
              <li>
              <button class="row-start-1 row-end-4 flex hidden xl:flex" onMouseEnter={() => setIsShown6(true)} onMouseLeave={() => setIsShown6(false)}>
                <img src={orang6} class="" alt="Logo1" />
              </button>
              </li>
              <li>
              {isShown6 && (
              <div class='absolute font-blueberrymd py-6 px-3 w-[500px] lg:h-[300px] md:h-[290px] sm:h-[290px] xl:h-[225px] mb-20 right-[70px]  text-black bg-white rounded-lg shadow-lg opacity-100'>
                <h1 class='text-md text-center font-medium'>"Aplikasinya mantul, sangat membantu dalam melakukan sebuah habit secara konsisten selama ini! kuy download, kalau gak download rugi deh kalian." </h1>
                <br />
                <h1 class='font-semibold text-center'>Isyana</h1>
                <br />
                <h1 class='text-center'>@Isyana</h1>
              </div>
                )}
              </li>
          </ul>


          </div>
          
        </div>
      </div>
    </section>

  )
}

export default Testimonials