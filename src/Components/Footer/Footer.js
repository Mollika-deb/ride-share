import Image from "next/image";
import img2 from '../../image/icons8-a-32.png';
import img1 from '../../image/icons8-google-play-32.png';

const Footer = () => {
    return (
        <div className="mt-32 bg-white p-32">
            <div className="flex items-center justify-between   ">
            <div>
                <h1 className="text-4xl font-bold font-mono">tere</h1>
            </div>
            <div className="text-xl">
               <p className="font-semibold"> Be Our Friend</p>
               <p className="my-2">3, Season Park, Jakarta</p>
               <p>support@foodyar.co.id</p>
               <p className="my-2">021-1111-2222</p>
            </div>
            <div className="text-xl">
               <p className="font-semibold"> Be Our Friend</p>
               <p className="my-2">3, Season Park, Jakarta</p>
               <p>support@foodyar.co.id</p>
               <p className="my-2">021-1111-2222</p>
            </div>
            
            <div className=" flex bg-black items-center gap-3 py-3 px-7 mt-5 rounded-md">
                        <Image src={img1}></Image>
                        <button className="text-white font-bold">DOWNLOAD</button>
                    </div>
                    <div className=" flex bg-black items-center gap-3 py-3 px-7 mt-5 rounded-md">
                        <Image src={img2}></Image>
                        <button className="text-white font-bold">DOWNLOAD</button>
            </div>

            
           
        </div>
        <hr className=" my-10 w-full border-1 border-gray-300" />
      <div className="text-center">
      <span className="text-primary-500 text-center">All Rights Reserved by Codematics 2022</span>
      </div>
        </div>
      
    );
};

export default Footer;