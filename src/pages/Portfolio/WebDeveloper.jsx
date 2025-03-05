import { IMAGES } from "../../pics/img"

export const WebDeveloper = ()=>{
    const siteUrl = "https://fronten-task1.vercel.app/"
    const gitUrl = "https://github.com/Nelson501/Fronten-task1.git"
    return <div className="flex flex-col justify-center items-center ">
    <div className="flex flex-col max-w:[10%] w-[30%] h-[30%] border-md">
        <img src={IMAGES.WebImage} alt="web" className="h-[20%] border-2 rounded-lg" />
        <p className="flex flex-col justify-center items-center text-white text-[1rem] font-serif font-bold italic  h-full ml-5 mt-4 w-full">My Frontend Page</p>
    </div>

    <div className="flex flex-row justify-center items-center mt-4">
        <div className="flex flex-col mx-3 bg-black px-4 py-1 border-b-2 rounded-lg font-serif hover:bg-cyan-800 corsor-pointer italic shadow-white shadow-sm">
            <a href={siteUrl}>Click Me</a>
        </div>
        <div className="flex flex-col mx-3 bg-cyan-950 px-4 py-1 border-b-2 rounded-lg font-serif hover:bg-cyan-800 corsor-pointer italic">
            <a href={gitUrl}>Github</a>
        </div>

    </div>
    </div>
}