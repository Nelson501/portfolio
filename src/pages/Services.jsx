// import { Portfolio } from "./Portfolio"
import { Link } from "react-router-dom"
import { Portfolio } from "./Portfolio"


export const Services = ()=>{

    return <div className="text-white p-4">

        <div className="flex flex-cols justify-center items-center w-[70%] sm:left-[28%] uppercase sm:w-[40%] relative left-[4.3rem] md:left-[27rem] py-6 text-white mt-6">
            <h1 className=" text-[25px] md:text-[40px]  font-bold">Our Services &copy;</h1>
        </div>

        {/* cards */}
        <div className="flex flex-col sm:flex-row mt-10">

            {/* fisrt card */}
            <div className="sm:w-1/3 mx-2 mb-10 sm:mb-4">
                <div className="flex flex-col bg-cyan-950 justify-center
                items-center p-8 border-b-4 border-white rounded-lg h-full"> 
                    <div className=" bg-blue-900 w-[80px] h-[80px] rounded-full flex flex-col justify-center items-center p-2">
                        <img src="/logo/bars-solid.svg" className="w-[40px] h-[40px]" alt="" />
                    </div>
                    <div className=" text-[15px] sm:text-[18px] font-mono font-bold uppercase
                    my-4 bg-blue-900 p-1 rounded-md" >Web Development</div>
                    <div>
                        <p className="text-center">I'm a frontend web developer, I can create and maintain your websites and web applications</p>
                    </div>
                </div>
            </div>

                {/* second card */}
            <div className="sm:w-1/3 mx-2 mb-10 sm:mb-4">
                <div className="flex flex-col bg-cyan-950 justify-center
                items-center p-8 border-b-4 border-white rounded-lg h-full"> 
                    <div className=" bg-blue-900 w-[80px] h-[80px] rounded-full flex flex-col justify-center items-center p-2">
                        <img src="/logo/user-solid.svg" className="w-[40px] h-[40px]" alt="" />
                    </div>
                    <div className=" text-[15px] sm:text-[18px] font-mono font-bold uppercase
                    my-4 bg-blue-900 p-1 rounded-md" >Computer Engineering</div>
                    <div>
                        <p className="text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam veniam, doloremque placeat ullam veritatis omnis commodi repellat tempore facere, nesciunt et deserunt laboriosam quo dolore deleniti odit itaque. Quam, repellat!</p>
                    </div>
                </div>
            </div>

            {/* third card */}
            <div className="sm:w-1/3 mx-2 mb-10 sm:mb-4">
                <div className="flex flex-col bg-cyan-950 justify-center
                items-center p-8 border-b-4 border-white rounded-lg h-full"> 
                    <div className=" bg-blue-900 w-[80px] h-[80px] rounded-full flex flex-col justify-center items-center p-2">
                        <img src="/logo/light.png" className="w-[40px] h-[40px]" alt="" />
                    </div>
                    <div className=" text-[15px] sm:text-[18px] font-mono font-bold uppercase
                    my-4 bg-blue-900 p-1
                     rounded-md" >Electrical Engineering</div>
                    <div>
                        <p className="text:red-500 text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam veniam, doloremque placeat ullam veritatis omnis commodi repellat tempore facere, nesciunt et deserunt laboriosam quo dolore deleniti odit itaque. Quam, repellat!</p>
                    </div>
                </div>
            </div>

       </div>

        {/* portfolio */}
        <div className="flex flex-col justify-center items-center w-[70%] sm:left-[28%] rounded-xl border-b-2 sm:w-[40%] relative left-[3.3rem] md:left-[22rem] py-6 text-white  md:mt-[5rem]">
            <h1 className=" text-[25px] md:text-[40px]  font-bold uppercase">porfolio &copy;</h1>
        </div>

        {/* <div className="flex flex-col justify-center items-center main-service mt-10">
            <div className="flex flex-col justify-center items-center">
                <Portfolio/>
            </div>
        </div> */}
        <div className="flex flex-col justify-center items-center">
            <Portfolio/>
        </div>
    </div>
}
