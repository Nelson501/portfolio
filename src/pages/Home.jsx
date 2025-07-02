export const Home = ()=>{
    return <>

    <div className="flex flex-cols justify-center items-center p-[50px]">
        {/* first section */}
        <div className="py-6 pr-[40px] text-white">

            <div className="text-cyan-800 text-[35px] font-bold w-full ">
                <h2>Nelson Adedayo</h2>
            </div>

            <span className="font-mono w-full">
                <h2 className="mt-4 sm:text-[30px]">I'm a Web</h2>
                <h2 className="sm:text-[30px] text-cyan-800">Developer &copy;</h2>
            </span>

            <div className="text-white font-mono leading-6 tracking-wide mt-8 w-full justify-center items-center">
                <p className="text-[20px]">I"m a front-end developer, I can provide clean code and pixel perfect design. I also make the webside more and more interactive with web animations. 
                A responsive design makes your website accessible to all users regardless of thier device.
                </p>
            </div>

            <div className="flex justify-center mt-10 w-[45%] lg:w-[25%] md:w-[30%] sm:px-0 py-2   bg-cyan-950 border-white border-2 rounded-md hover:bg-cyan-900 cursor-pointer font-serif shadow-md shadow-slate-400">Hire Me</div>

        </div>

        {/* second section */}
        <div className="hidden sm:flex p-2">
            <img src="/logo/img.jpg" alt="" />
        </div>
        


    </div>

    </>

}