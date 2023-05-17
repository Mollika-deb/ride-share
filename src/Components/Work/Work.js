import Image from "next/image";
import img1 from '../../image/work-removebg-preview.png';

const Work = () => {
    return (
        <div className="lg:mx-32 mx-10">
            <div className="text-center items-center mt-32 ">
                <h1 className="lg:text-4xl text-2xl font-bold mb-5">HOW <span className="text-primary-500">TERE</span> WORKS</h1>
                <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Totam <br /> ducimus rerum distinctio architecto voluptatum? Dicta cupiditate, voluptatem<br /> similique quibusdam expedita enim.
                </p>
            </div>

            <div className="lg:flex items-center justify-end gap-10 mt-10 ">
           <div className="lg:text-right text-center">
           <div className="grid my-8 ">
               <div className="grid lg:justify-end justify-center">
               <p className="border-8 text-primary-500 text-4xl font-bold border-primary-500 rounded-full w-10 h-10 p-5 flex items-center justify-center">1</p>
               </div>
                <h1 className="text-xl font-bold my-3">REQUEST A RIDE</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium porro ipsa commodi quia voluptatem veniam!</p>
            </div>
            <div>
                <div className="grid lg:justify-end justify-center">
                <p className="border-8 text-primary-500 text-4xl font-bold border-primary-500 rounded-full w-10 h-10 p-5 flex items-center justify-center">3</p>
                </div>
                <h1 className="text-xl font-bold my-3">INSTANT NOTIFICATIONS</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium porro ipsa commodi quia voluptatem veniam!</p>
            </div>
           </div>
            <div className="lg:my-0 my-5">
                <Image src={img1}  height={1500}></Image>
            </div>
           <div>
           <div className="lg:text-left text-center">
           <div className="my-8">
                <div className="grid lg:justify-start justify-center">
                <p className="border-8 text-primary-500 text-4xl font-bold border-primary-500 rounded-full w-10 h-10 p-5 flex items-center justify-center ">2</p>
                </div>
                <h1 className="text-xl font-bold my-3">POST A RIDE</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium porro ipsa commodi quia voluptatem veniam!</p>
            </div>
            <div>
               <div className="grid lg:justify-start justify-center">
               <p className="border-8 text-primary-500 text-4xl font-bold border-primary-500 rounded-full w-10 h-10 p-5 flex items-center justify-center">4</p>
               </div>
                <h1 className="text-xl font-bold my-3">CASHLESS PAYMENT</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium porro ipsa commodi quia voluptatem veniam!</p>
            </div>
           </div>
           </div>

            </div>
        </div>
    );
};

export default Work;