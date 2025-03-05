import { IMAGES } from "../../pics/img"

export const ComputerDoc = ()=>{
    const computerDoc = "www.website.com"
    const gitUrl = "www.github.com"
    return <div className="flex flex-col justify-center w-full h-full items-center">
    <div className="flex flex-col items-center justify-center w-[40%]  h-[60%] border-md">
        <img src={IMAGES.computerdoc} alt="web" className="h-[20%] border-2 rounded-lg" />

        <p className="flex flex-col items-center text-white text-[1rem] mt-4 font-serif font-bold italic w-full h-full">Computer Doctor</p>
    </div>

    <div className="flex flex-row justify-center items-center mt-4">
        <div className="flex flex-col mx-3 px-4 py-1 border-b-2 rounded-lg font-serif hover:bg-cyan-950 corsor-pointer italic shadow-sm shadow-white bg-black">
            <a href={computerDoc}>Click Me</a>
        </div>
        <div className="flex flex-col mx-3 bg-cyan-950 px-4 py-1 border-b-2 rounded-lg font-serif hover:bg-cyan-800 corsor-pointer italic shadow-sm shadow-white">
            <a href={gitUrl}>Github</a>
        </div>

    </div>
    </div>
}