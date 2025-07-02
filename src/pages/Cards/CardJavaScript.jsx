import { useState } from "react"


export const CardJavaScript = () =>{

    const [openJavaScript, setOpenJavaScript] = useState(true)
    const[changeJavaScript, setChangeJavaScript] = useState("black")




    const haddleOpen = ()=>{
                setOpenJavaScript(!openJavaScript)
                setChangeJavaScript(changeJavaScript === "black"? "gray": "black")

    }

    return<div className="flex flex-col font-serif">

    
            <div className={`flex flex-col justify-center items-center p-4 rounded-xl h-full`} style={{backgroundColor : changeJavaScript}}>
                <div className={`${openJavaScript? "hidden" : "block"}`}>
                    <h3 className="text-center text-[20px] font-bold">JavaScript</h3>
                    <p className="text-center italic mt-3">html simply means </p>
                </div>
                <div onClick={haddleOpen} className="cursor-pointer mt-2 shadow-md shadow-blue-700 rounded-md"><img src="/app-logo/js.jpg" alt="" className="w-[80px] rounded-md" /></div>
            </div>

    </div>
}