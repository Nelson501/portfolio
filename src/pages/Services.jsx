export const Services = ()=>{
    return <div className="text-white p-4">

        <div className="flex w-[70%] sm:left-[28%] rounded-xl sm:w-[40%] relative left-[3.3rem] md:left-[27 rem] py-6 bg-white text-black justify-center items-center mt-6">
            <h1 className=" text-[20px] md:text-[40px]  font-bold">Our Services</h1>
        </div>

        {/* cards */}

        <div className="block sm:flex justify-around items-center p-3 mt-[30px]">

            <div className="flex flex-col my-10 mx-4 rounded-lg bg-red-600 p-2 justify-center items-center w-3/3">
                <div className="w-[50px] mb-3 flex flex-col justify-center items-center">
                    <img src="/logo/bars-solid.svg" alt="image" />
                </div>
                <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, ad. At tempore eaque vitae molestias ex quo expedita, soluta distinctio architecto rerum quam? Ullam, rerum nostrum ad ut id laboriosam.
                </p>
            </div>

            <div className="bg-blue-600 flex flex-col justify-center items-center my-10 mx-4 rounded-lg p-3 w-3/3">
                <div className="w-[50px] flex flex-col justify-center items-center mb-3">
                    <img src="/logo/user-solid.svg" alt="" />
                </div>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, iste aliquam! A iure quaerat facilis dolores, in eligendi hic rerum aspernatur provident tenetur animi accusamus asperiores nulla minima illum saepe.
                </p>
            </div>

            <div className="bg-green-600 flex flex-col my-10 mx-4 rounded-lg justify-center items-center p-3 m-2 w-3/3">
                <div className="w-[50px] mb-3 flex flex-col justify-center items-center">
                    <img src="/logo/light.png" alt="" />
                </div>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Provident sapiente animi corporis voluptatum adipisci consequatur eius. Assumenda ullam provident numquam, minus deleniti quasi voluptas, iusto soluta sit delectus veniam esse! card 3</p>
            </div>
        </div>

        {/* portfolio */}

        <div>
            {/* <span>Portfolio</span> */}
        </div>

        {/* react project */}
        <div>
            <div>
                
            </div>
        </div>

        <div></div>
    </div>
}