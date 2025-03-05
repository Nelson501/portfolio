import { IMAGES } from "../../pics/img"

export const TodoList = ()=>{
    const TodoList = "https://github.com/Nelson501/Todo-list/watchers"
    const gitUrl = ""
    return <div className="flex flex-col h-[20%] justify-center items-center">
    <div className="flex flex-col w-[40%] h-[20%] border-md">
        <img src={IMAGES.TodoList} alt="web" className="h-[20%] border-2 rounded-lg" />
        <p className="flex flex-col items-center text-white text-[1rem] mt-4 font-serif font-bold italic w-full h-full"> Todo List </p>
    </div>

    <div className="flex flex-row justify-center  items-center mt-6">
        <div className="flex flex-col mx-4 bg-black px-4 py-1 border-b-2 rounded-lg font-serif hover:bg-cyan-800 corsor-pointer italic shadow-white shadow-sm ">
            <a href={TodoList}>Click Me</a>
        </div>
        <div className="flex flex-col mx-4 bg-cyan-950 px-4 py-1 border-b-2 rounded-lg font-serif hover:bg-cyan-800 corsor-pointer italic shadow-white shadow-sm">
            <a href={gitUrl}>Github</a>
        </div>

    </div>
    </div>
}