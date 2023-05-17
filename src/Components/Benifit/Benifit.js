import Image from 'next/image';
import img3 from '../../image/cs-support-removebg-preview.png';
import img2 from '../../image/money_removebg-preview.png';
import img1 from '../../image/time-removebg-preview.png';
const Benifit = () => {
    return (
        <div className="mt-32 lg:mx-32 mx-10">
            <div>
                <h1 className="lg:text-4xl text-2xl font-bold mb-5 text-center"><span className="text-primary-500">TERE</span> BENEFITS</h1>
            </div>

          <div className='lg:flex lg:gap-36 bg-white rounded-md lg:px-32 lg:justify-between justify-center lg:py-5 p-5 mt-10 items-center lg:w-5/6 w-full'>
          <div className=''>
                <div className="flex gap-10 lg:items-center justify-cent">
                    <h1 className="text-6xl font-semibold text-primary-500" >01.</h1>
                    <p className="lg:text-3xl text-2xl font-bold pb-5">Flexible <br /> working hours</p>
                </div>
                <p>you can decide when, and how much time <br /> you want to drive</p>
            </div>
            <div >
                <Image height={200} src={img1}></Image>
            </div>
          </div>
          <div className='flex gap-36 bg-white rounded-md px-32 py-5 mt-10 items-center w-5/6 ml-auto justify-between'>

<div >
  <Image height={200} src={img2}></Image>
</div>

<div className=''>
  <div className="flex gap-10 items-center">
    <h1 className="text-5xl font-semibold text-primary-500" >02.</h1>
    <p className="text-3xl font-bold pb-5"> Earnings</p>
  </div>
  <p>By dreiving with TERE you can <br /> earn more</p>
</div>
         
</div>

          <div className='flex gap-36 bg-white rounded-md px-32 justify-between py-5 mt-10 items-center w-11/12'>
          <div className=''>
                <div className="flex gap-10 items-center">
                    <h1 className="text-5xl font-semibold text-primary-500" >03.</h1>
                    <p className="text-3xl font-bold pb-5">Customer <br /> support 24/7</p>
                </div>
                <p>you can decide when, and how much time <br /> you want to drive</p>
            </div>
            <div >
                <Image height={200} src={img3}></Image>
            </div>
          </div>
        </div>
    );
};

export default Benifit;