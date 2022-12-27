import React from 'react'
import hape from '../../assets/hape.png'


export const Hero = () => {
  return (
    <div className=" flex xl:mb-auto xs:mb-10 xs:mt-10 flex-col items-center justify-center max-w-4xl px-4 pt-16 mx-auto sm:max-w-xl md:max-w-2xl lg:pt-32 md:px-8" id="Hero">
      <div className="max-w-full mb-10 mx-1 xs:text-center sm:text-center lg:max-w-2xl md:mb-12">
        <h2 className=" mb-6 xl:text-5xl xl:-ml-20 md:text-3xl md:w-full lg:text-4xl lg:w-full xs:w-[250px] font-semibold font-blueberry tracking-tight xl:w-[900px] mr-1 text-gray-900 xs:text-xl">
          <span className=" inline-block">
          </span>{' '}
          Mau ngembangin diri tiap hari?
        </h2>
        <p className="max-w-lg mb-6 lg:text-4xl lg:w-full md:text-3xl md:w-full  font-blueberry text-2xl font-semibold leading-none tracking-tight xl:text-5xl text-gray-900 sm:text-2xl xs:text-2xl md:mx-auto" >
        <span className='font-semibold' style={{ color: "#01C587"}}>#Dimulai</span> aja dulu!
        </p>
      </div>
      <div className="flex items-center sm:justify-center xs:pb-10">
          <a href="https://www.youtube.com/@dimulaiid" className="mr-3 transition duration-300 hover:shadow-lg">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Download_on_the_App_Store_Badge.svg/1000px-Download_on_the_App_Store_Badge.svg.png"
              className="object-cover object-top w-32 mx-auto"
              alt=""
            />
          </a>
          <a href="https://www.youtube.com/@dimulaiid" className="transition duration-300 hover:shadow-lg">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Google_Play_Store_badge_EN.svg/1000px-Google_Play_Store_badge_EN.svg.png"
              className="object-cover object-top w-32 mx-auto"
              alt=""
            />
          </a>
        </div>
    </div>
  );
};

export default Hero