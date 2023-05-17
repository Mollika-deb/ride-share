

const Form = () => {
    return (
        <div className="lg:flex lg:items-center text-center lg:justify-between bg-primary-500 lg:py-10 py-5 lg:px-16 rounded-md lg:mx-32 mx-5  my-10 px-6">
            <p className="lg:text-2xl font-semibold lg:mb-0 mb-4 text-white">Let's go. Get a link  to download <br /> the app</p>
           <div>
           <input className="bg-white lg:px-32 px-5 py-5 justify-start rounded-md" type="text" placeholder="Enter mobile phone number"/>
           <button className=" bg-black items-center gap-3 py-5 ml-5 px-10 mt-5 rounded-md text-white font-bold">APPLY TO DRIVE</button>
           </div>
        </div>



        


    //     <div className="lg:flex lg:items-center lg:justify-between bg-primary-500 lg:py-10 px-16 rounded-md lg:mx-32 mx-5 my-10">
    //     <p className="lg:text-2xl font-semibold text-white">Let's go. Get a link to download the app</p>
    //     <div className="flex flex-col lg:flex-row lg:items-center">
    //       <input className="bg-white lg:px-32 px-5 py-5 justify-start rounded-md mb-5 lg:mb-0 lg:mr-5" type="text" placeholder="Enter mobile phone number" />
    //       <button className="bg-black items-center gap-3 py-5 px-10 rounded-md text-white font-bold">APPLY TO DRIVE</button>
    //     </div>
    //   </div>

    )
};

export default Form;