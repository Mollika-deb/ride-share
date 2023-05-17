import Image from "next/image";
import img1 from "../../image/hero-removebg-preview.png";
import img3 from "../../image/icons8-a-32.png";
import img2 from "../../image/icons8-google-play-32.png";

const Hero = () => {
    return (
        <div className="lg:flex  items-center lg:gap-x-24  lg:px-32 lg:py-32  bg-slate-100">
            <div className=" w-1/2">
                <div>
                <p className="text-4xl font-bold mb-7 font-mono">DOWNLOAD APP, <br /> SAVE MONEY, MAKE <br /> FRIENDS!</p>
                <p className="text-xl">Its simple and its free. play your part in reducing Carbon Footprint and help Mother Nature to sustain its beauty, So what are your waitingt for? <br /> Let's ride together.</p>
                </div>

                <div className="flex gap-5 ">
                    <div className=" flex bg-black items-center gap-3 py-3 px-7 mt-5 rounded-md">
                        <Image src={img2}></Image>
                        <button className="text-white font-bold">DOWNLOAD</button>
                    </div>
                    <div className=" flex bg-black items-center gap-3 py-3 px-7 mt-5 rounded-md">
                        <Image src={img3}></Image>
                        <button className="text-white font-bold">DOWNLOAD</button>
                    </div>
                </div>
            </div>
            <div className="w-1/2 h-full">
                <Image src={img1} ></Image>
            </div>
        </div>
    );
};

export default Hero;