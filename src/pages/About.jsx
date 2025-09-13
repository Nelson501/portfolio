import { Link } from "react-router-dom"
export const About = ()=>{
    return<>
    <div className="flex flex-col lg:flex-row p-6 text-white justify-center items-center">
        {/* first section */}
        <div className="w-full p-6">
            <img src="/logo/img0.jpg" alt="Image"  className="rounded-[20%] opacity-90 w-full sm:h-[350px] md:h-[480px]"/>
        </div>

        {/* second section */}
        <div className="flex flex-col p-6 justify-center items-center">
            <span className="flex w-ull justify-center items-center border-b-2 border-white bg-cyan-950 rounded-lg"> <h1 className="text-white font-bold p-3 sm:text-[45px]">About Me</h1></span>

            <div className="flex w-full justify-center items-center mt-10 sm:text-[20px] text-[18px] font-mono">
                <h3>Developer & </h3>
                <h3 className="text-cyan-800 pl-2">  Designer &copy;</h3>
            </div>

            <div className="flex flex-col justify-center items-center mt-4">
                <p className="w-full justify-center items-center text-lg text-center">I'm a passionate Developer and Designer dedicated to turning ideas into powerful digital experiences that not only look beautiful but work flawlessly.
                <span className="">With a unique blend of technical expertise and creative version, i build modern websites, web applications, and user interfaces that are both visually engaging and highly functional. From sleek front-end designs to full-stack development. I craft custom solutions that align perfectly with your business goals &copy;</span>
                </p>
            </div>
            <div className="flex flex-col mt-10 bg-cyan-950 items-center p-2 rounded-lg border-b-2 hover:bg-cyan-900">
                <Link className="font-serif font-bold" to="#">Let's Talk</Link> 
            </div>
        </div>
        
    </div>
    
    </>

}