
// import { Form } from "../Form/Form"
import { Footer } from "./Footer"
// import { IMAGES } from "../pics/imgs"



export const Contact = ()=>{
    return <div className="flex flex-col items-center">

        <div className="flex flex-col justify-center items-center bg-cyan-950 mt-10 py-2 px-8 rounded-lg border-b-2 borderwhite">
            <h1 className="text-[2rem] md:text-[3rem]  font-bold text-white font-serif">contact &copy;</h1>
        </div>

        <div className="text-white mt-[30px] flex flex-col justify-center items-center">
            <div className="flex gap-[2rem] fle-row justify-center mt-6 items-center">
                <div className="w-[30px]">
                    <img src="/media-logo/gmail.png" alt="" />
                </div>
                <a href="sunnynax01@gmail.com" className="">sunnynax01@gmail.com</a>
                
            </div>

            <div className="flex
             justify-center mt-6 items-center">
                <div className="w-[30px] bg-white p-1 rounded-lg mr-[80px]">
                    <img src="/media-logo/phone-solid.svg" alt="" />  
                </div>
                <a href="07045345605" className="text-[20px] ml-">07045345605</a>
            </div>
        </div>

        
        <div className=" mt-10 flex flex-col justify-center items-center">
            <form action="form" className="flex flex-col sm:flex-row">
                <input type="text"  placeholder="Enter Your name" className="m-2 p-2 w-full border-b-2 border-gray-700 rounded-lg bg-cyan-950 text-white "/>

                <input type="email"placeholder="Enter your email" className="m-2 p-2 w-full border-b-2 border-gray-700 rounded-lg bg-cyan-950 text-white"/>
            </form>

            <textarea name="text" id="name" cols="30" rows="10" className="mt-6 bg-cyan-950 p-2 text-white font-serif rounded-lg" placeholder="Message"></textarea>

            <div className="submit hover:bg-cyan-900 cursor-pointer shadow-sm shadow-slate-400 text-white my-10 px-6 py-3 bg-cyan-950 rounded-md font-bold ">Submit</div>
        
        </div>

        <div>
            <Footer/>
        </div>
    </div>
}