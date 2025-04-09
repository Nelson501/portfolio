
// import { Form } from "../Form/Form"
import { Footer } from "./Footer"
// import { IMAGES } from "../pics/imgs"



export const Contact = ()=>{
    return <div className="flex flex-col justify-center w-full">

        <div className="flex flex-col justify-center items-center w-[70%] sm:left-[28%] italic font-serif
         sm:w-[40%] relative left-[3.3rem] md:left-[27 rem] py-6 text-white justify-center items-center my-6 mt-10">
            <h1 className=" text-[20px] md:text-[40px]  font-bold">contact</h1>
        </div>

        <div className="text-white mt-[30px] flex flex-col justify-center items-center w-full">
            <div className="flex
             justify-center mt-6 items-center">
                <div className="w-[30px]">
                    <img src="/media-logo/gmail.png" alt="" />
                </div>
                <div className="ml-[30px] lg:ml-[80px]">
                    <a href="sunnynax01@gmail.com" className="">sunnynax01@gmail.com</a>
                    {/* <img src={IMAGES.git} alt="" /> */}
                </div>
            </div>

            <div className="flex
             justify-center mt-6 items-center">
                <div className="w-[30px] bg-white p-1 rounded-lg mr-[80px] md:mr[100px] lg:mr-[140px]">
                    <img src="/media-logo/phone-solid.svg" alt="" />
                </div>
                <div className="">
                    <a href="07045345605" className="text-[20px] ml-">07045345605</a>
                </div>
            </div>
        </div>

        {/* form */}
        {/* <Form/> */}
        <div className=" mt-10 flex flex-col justify-center items-center">
            <form action="form" className="flex flex-col sm:flex-row">
                <input type="text"  placeholder="Enter Your name" className="m-2 p-2 w-full border-b-2 border-gray-700 rounded-lg bg-cyan-950 text-white "/>

                <input type="email"placeholder="Enter your email" className="m-2 p-2 w-full border-b-2 border-gray-700 rounded-lg bg-cyan-950 text-white"/>
            </form>

            <textarea name="text" id="name" cols="30" rows="10" className="mt-6 bg-cyan-950 p-2 text-white font-serif rounded-lg" placeholder="Message"></textarea>

            <div className="submit hover:bg-cyan-900 cursor-pointer shadow-md shadow-slate-400 text-white my-10 px-6 py-3 bg-cyan-950 rounded-md font-bold ">Submit</div>
        
        </div>

        <div>
            <Footer/>
        </div>
    </div>
}