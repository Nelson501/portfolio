export const About = ()=>{
    return<>
    <div className="flex flex-col sm:flex-row p-6 text-white justify-center items-center w-full">
        {/* first section */}
        <div className="w-full p-6">
            <img src="/logo/img0.jpg" alt="Image"  className="rounded-[20%] opacity-90 w-full sm:h-[350px] md:h-[480px]"/>
        </div>
        {/* second section */}
        <div className=" block p-6 justify-center items-center">
            <span className="flex w-ull justify-center items-center border-b-2 border-white bg-cyan-950 rounded-lg"> <h1 className="text-white font-bold p-3 sm:text-[45px]">About Me</h1></span>

            <div className="flex w-full justify-center items-center mt-10 sm:text-[20px] text-[18px] font-mono">
                <h3>Developer & </h3>
                <h3 className="text-cyan-800 pl-2">  Designer &copy;</h3>
            </div>

            <div className="w-full justify-center items-center mt-4">
                <p className="w-full justify-center items-center text-lg text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, inventore corporis quaerat voluptas dolorem esse nostrum quia minus eum repellendus illum, vitae repudiandae, quod facere numquam fugiat! Laboriosam, sunt nam.
                </p>
            </div>

            <div className="flex justify-center mt-10 bg-cyan-950 w-[45%] relative left-[70px] py-2 text-[20px] sm:left-[180px] lg:left-[340px] font-serif border-2 border-white hover:bg-cyan-800 rounded-lg sm:w-[100px] cursor-pointer duration-300 shadow-md shadow-slate-400">Let's Talk</div>
        </div>

        
    </div>
    
    </>

}