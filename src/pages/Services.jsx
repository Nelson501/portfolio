import { Portfolio } from "./Portfolio"
import { Link } from "react-router-dom"



export const Services = ()=>{

    return <div className="text-white p-4 flex flex-col justify-center items-center">

        <div className="flex flex-cols justify-center items-center uppercase py-6 text-white mt-6">
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
                        <p className="text-center">I'm a frontend web developer, I can create and maintain your websites and web applications. I craft custom solutions that align perfectly with your business goals</p>
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
                        <p className="">TROUBLESHOOTING:I repair fault computers such as replacing faulty RAM, hard drives keyboards
                        </p>
                        <p className="text-"><span className="font-bold">FORMAT:</span> remove viruses and malware, fixing boot error and prepare computer for a fresh operating system installation
                        </p>
                        <p className=""><span className="font-bold">SETUP:</span> Installing an operating system, installing necessary drivers and software and setting up user accounts and internet connections
                        </p>
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
                        <p className="text:red-500 text-white">I installs, maintains, and repairs electricaal systems in homes and residential buildings..
                            <p>.Installing eectrical fixtures like lights, sckets, and switches.</p>
                            <p>.Setting up household appliances and ensuring safety power supply.</p>
                            <p>.Fixing electrical faults and troubleshooting problems.
                            Ensuring safety compliance with local electricak codes and standards</p>
                        </p>
                    </div>
                </div>
            </div>

       </div>

        {/* portfolio */}
        <div className="flex flex-col justify-center items-center py-6 text-white  md:mt-[5rem] bg-cyan-950 p-4 rounded-lg shadow-lg shadow-cyan-900">
            <h1 className=" text-[25px] md:text-[40px]  font-bold uppercase font-serif">porfolio &copy;</h1>
        </div>

        
        <div className="flex flex-col justify-center items-center">
            <Portfolio/>
        </div>
        <div className="flex flex-col text-white items-center mt-10 bg-cyan-950 p-2">
            <Link to="/about">About</Link>
        </div>
    </div>
}
