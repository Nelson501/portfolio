export const Footer = ()=>{
    return <>
    <div className="flex flex-col justify-center items-center bg-gray-800">
        <div className="flex flex-col justify-center items-center text-center">
            <h3 className="text-[25px] font-sans font-bold bg-gray-700 border-b-2 mt-4 p-2 rounded- uppercase text-gray-400 rounded-[10px]">Nelson Adedayo</h3>
            <p className="p-6 font-serif text-gray-300">For more <span className="uppercase text-cyan-200">React, Tailwind, and coding</span>  Tutorial and Job opportunities. Please click on the below link to subscribe to my channel, <span className="font-bold">2025</span> &trade;</p>
        </div>

        <div className="flex gap-4 mb-3 justify-center items-center">
            <div className="w-[30px] cursor-pointer"><a href="#"><img src="media-logo/facebook .svg" alt="" /></a></div>
            <div className="w-[25px] cursor-pointer"><a href="#"><img src="media-logo/linkedin.png" alt="" /></a></div>
            <div className="w-[25px]  cursor-pointer"><a href="#"><img src="media-logo/logo-white.png" alt="" /></a></div>
            <div className="w-[25px] rounded-xl cursor-pointer"><a href="#"><img src="media-logo/instagram.jpg" alt=""  className="rounded-sm"/></a></div>
        </div>
    </div>

    </>
}