
// import { Form } from "../Form/Form"

import { Footer } from "./Footer"

export const Contact = ()=>{
    return <div className="flex flex-col justify-center w-full">

        <div className="flex flex-col justify-center items-center w-[70%] sm:left-[28%] rounded-xl sm:w-[40%] relative left-[3.3rem] md:left-[27 rem] py-6 bg-white text-black justify-center items-center my-6 mt-10">
            <h1 className=" text-[20px] md:text-[40px]  font-bold">contact</h1>
        </div>

        <div className="text-white mt-[100px] flex flex-col justify-center items-center">
            <div className="flex
             justify-center mt-6 items-center">
                <div className="w-[30px]">
                    <img src="/media-logo/gmail.png" alt="" />
                    </div>
                <div className="ml-[60px]">
                    <a href="sunnynax01@gmail.com" className=""> sunnynax01@gmail.com</a>
                </div>
            </div>

            <div className="flex
             justify-center mt-6 items-center">
                <div className="w-[30px] bg-white p-1 rounded-lg">
                    <img src="/media-logo/phone-solid.svg" alt="" />
                    </div>
                <div className="ml-[140px]">
                    <a href="07045345605" className="">07045345605</a>
                </div>
            </div>
        </div>

        {/* form */}
        <div className="my-[100px] flex flex-col justify-center items-center">
            <img src="/app-logo/js.jpg" alt="" />
        </div>

        <div>
            <Footer/>
        </div>
    </div>
}