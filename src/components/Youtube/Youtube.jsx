import React from "react";
import Bg1 from "../../assets/images/YoutubeDimulai/PreviewYoutube.png";

const Youtube = () => {
    return (
        <section class="max-h-screen-sm text-gray-800 background-radial-gradient" id="Youtube">
            <div class="px-6 py-12 md:px-12 text-center lg:text-left">
                <div class="container mx-auto">
                    <div class="ml-7 grid lg:grid-cols-2 gap-12 flex items-center" >
                            <div class="mt-12 ml-7 lg:mt-0">
                            <h1 class="font-blueberry text-2xl md:text-5xl xl:text-5xl font-bold tracking-tight mb-12">
                            <span style={{ color: "#01C587" }}>#Dimulai </span> dari nonton, <br className=""/> dan upgrade dirimu
                            </h1>
                            <p class="text-lg font-blueberrymd" >
                            Kamu bisa mulai upgrade diri kamu cuma dari nonton doang, loh! Yuk nikmati ratusan video seru dari dimulai.id
                            </p>
                            </div>
                        <div class=" lg:mb-0" >
                            <div class="embed-responsive embed-responsive-16by9 w-full relative h-full overflow-hidden rounded-b-3xl" style={{ backgroundImage: `url(${Bg1})`, height: "500px", backgroundPosition: "center",
   backgroundSize: "contain",
   backgroundRepeat: "no-repeat",}}>
                                <iframe class="embed-responsive-item  right-0  left-0 ml-7 w-[90%] mt-20" height="307px" style={{ borderRadius: 20 }}
                                src="https://www.youtube.com/embed/wnboAM2SFH8"
                                allowfullscreen="" data-gtm-yt-inspected-2340190_699="true" id="240632615"></iframe>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>  
    )
}

export default Youtube;