import React, { useState } from 'react';
import Img1 from '../../assets/images/CTA/Img1.png';
import Bg1 from '../../assets/images/CTA/Circle.png';

const CTA = () => {
    const [showModal, setShowModal] = useState(false);
    const [formData, setFormData] = useState('');
    const [formArray, setFormArray] = useState([]);


    const saveNews = () => {
        fetch('/v1/public/email/subscribe', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*'
          },
          body: JSON.stringify({
            allow_interests: formArray,
            email: formData 
          }),
        })
          .then((res) => res.json())
          .then((result) => setData(result.rows))
          .catch((error) => console.log())
      }

    const handleSubmit = (event) => {
        event.preventDefault()
        saveNews() 
        setShowModal(false)
    }

    
    const handleChange = (event) => {
        setFormData(event.target.value)
    }

    const handleCheck = (event) => {
        var formArray_array = [...formArray];
        if (event.target.checked) {
          formArray_array = [...formArray, event.target.value];
        } else {
          formArray_array.splice(formArray.indexOf(event.target.value));
        }
        setFormArray(formArray_array);
      
      };
  





  return (
    <>
        <section class="relative py-[50px] mx-auto w-5/6" id='CTA' style={{ backgroundColor: "#4E5DFF", backgroundImage: `url(${Bg1})`, backgroundSize: 'cover', borderRadius: 40, height: 360 }}>
        <div class="container ">
            <div class="-mx-4 flex">
                <div class="w-full mx-auto px-4">
                    <div class="mx-auto font-blueberry max-w-[600px] text-center">
                        <h1 class="font-blueberry mb-3 text-[40px] max-md:text-[28px]  font-semibold leading-tight text-white max-sm:text-[24px]">
                            Gimana, mau mulai hari ini?
                        </h1>
                        <p class="mb-8 text-lg text-white font-blueberrymd">
                            Ikuti terus info terbaru tentang diskon, event, dan banyak lainnya lewat newsletter hanya untuk kamu!
                        </p>
                        <a href="javascript:void(0)" type='button' onClick={() => setShowModal(true)} class="text-primary w-80 font-blueberrymd inline-block rounded-lg border border-white px-8 py-3 mt-12 text-center text-base font-semibold bg-white">
                            Berlangganan Sekarang
                        </a>
                    </div>
                    
                </div>
            </div>
        </div>
        <div class="absolute top-0 left-0 -z-10 flex h-full w-full items-center justify-between space-x-5 md:space-x-8 lg:space-x-14">
        </div>
    </section>

    {showModal ? (
            <>  
                <div className="fixed inset-0 z-10 overflow-y-auto">
                    <div className="fixed inset-0 w-full h-full bg-black opacity-60" onClick={() => setShowModal(false)}></div>
                    
                    <div class="max-sm:w-80 max-w-md mx-auto mt-24 md:h-auto">
                        <div class="relative bg-white rounded-lg shadow">
                            <img src={Img1} className="mx-auto pt-10" alt="" srcset="" />
                            <button type="button" class="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-200 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-300 dark:hover:text-white" data-modal-toggle="authentication-modal" onClick={() => setShowModal()}>
                                <svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                                <span class="sr-only">Close modal</span>
                            </button>
                            <div class="px-6 py-6 lg:px-8">
                                <h3 class="font-blueberry mb-4 text-4xl font-bold text-center">Tetap Terhubung</h3>
                                <p className='text-center'>Berbagai acara, diskon, dan informasi terbaru bisa kamu dapatkan lewat newsletter Dimulai.</p>
                                <form class="space-y-6" action="#">
                                    <div>
                                        <input type="email" name="email" id="email" defaultValue={formData} onChange={handleChange} class="mt-4 bg-gray-50 border border-gray-200 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="Masukkan email aktifmu" required />
                                    </div>
                                    <div class="flex justify-between">
                                        <div class="flex items-start">
                                            <div class="flex items-center h-5">
                                                <input id="allow_interests" name='allow_interests' type="checkbox" onChange={handleCheck} value={'0'} class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-600 dark:border-gray-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800" required />
                                            </div>
                                            <label for="remember" class="font-blueberrymd ml-2 text-sm">Informasi, pembaruan, dan promosi dari Dimulai.</label>
                                        </div>
                                    </div>
                                    <div class="flex justify-between">
                                        <div class="flex items-start">
                                            <div class="flex items-center h-5">
                                                <input id="allow_interests" type="checkbox" onChange={handleCheck} value={"1"} class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-600 dark:border-gray-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800" required />
                                            </div>
                                            <label for="remember" class="font-blueberrymd ml-2 text-sm">Webinar dan acara yang akan diselenggarakan Dimulai.</label>
                                        </div>
                                    </div>
                                    <div class="flex justify-between">
                                        <div class="flex items-start">
                                            <div class="flex items-center h-5">
                                                <input id="allow_interests" type="checkbox" onChange={handleCheck} value={"2"} class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-600 dark:border-gray-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800" required />
                                            </div>
                                            <label for="remember" class="font-blueberrymd ml-2 text-sm">Konten terbaru dan Book of the Week.</label>
                                        </div>
                                    </div>
                                    <hr />
                                    <div class="flex justify-between">
                                        <div class="flex items-start">
                                            <div class="flex items-center h-5">
                                                <input id="remember" type="checkbox" value="" class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-600 dark:border-gray-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800" required />
                                            </div>
                                            <label for="remember" class="font-blueberrymd ml-2 text-sm">Dengan mendaftar newsletter ini, saya telah menyetujui <span className='font-bold'> Syarat dan Ketentuan </span> yang berlaku.</label>
                                        </div>
                                    </div>
                                        <button type="submit" onClick={handleSubmit} class="w-full text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">Berlangganan Sekarang</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        ) : null}
    </>


  )
}

export default CTA