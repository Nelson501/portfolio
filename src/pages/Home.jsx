export const Home = ({myImage}) =>{
    return<>
    <div className="flex text-white  w-full h-screen justify-between items-center py-5 px-8 pl-[60px] sm:pl-[100px]">
        {/* first section */}
        <div className=" flex-col justify-center items-center mb-10">

            <div className="flex">
                <h1 className="text-blue-700 text-[20px] sm:text-[25px] md:text-[30px] lg:text-[40px] font-bold">Nelson Adedayo </h1>
            </div>
            
            <div className="mt-2 text-white font-mono text-20px sm:text-[25px] md:text-[30px]  italic">
                I'm a Web  <br/> <span className="text-blue-700">Developer </span> &copy;
            </div>
             
             <div className="justify-centers  leading-6 tracking-wider mt-6 sm:mt-8 ">
                <p className="relative justify-normal">I am a front-end developer. I can provide clean 
                    <br />code and pixel perfect design. I also make the website
                    <br /> more & more  interactive with web aminations.
                    <br /> A responsivedesign makes  your website accessible
                     to all users, regardless of their device.
                </p>

                <div className="mt-8 sm:mt-5 text-white bg-blue-700 hover:bg-blue-500 w-[100px] flex justify-center items-center p-1 rounded-md border-2 border-blue-700">Hire Me</div>
                </div>
    
        </div>
        {/* second sectiion */}
        <div className=" hidden  sm:flex w-[70%]  h-[90%] pl-4 justify-center items-center relative shadow-inner mb-[30px]">
            <img src={myImage} alt="image" className="w-[70%] h-[90%] pl-4 justify-center items-center relative"/>
        </div>
    </div>
    </>
}