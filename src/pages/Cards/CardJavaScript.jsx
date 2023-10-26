import { useState } from "react"


export const CardJavaScript = () =>{

    const [openJavaScript, setOpenJavaScript] = useState(true)
    const[changeJavaScript, setChangeJavaScript] = useState("black")




    const haddleOpen = ()=>{
                setOpenJavaScript(!openJavaScript)
                setChangeJavaScript(changeJavaScript === "black"? "gray": "black")

    }

    return<div className="flex flex-col font-serif">

    
            <div className={`flex flex-col justify-center items-center p-4 rounded-xl`} style={{backgroundColor : changeJavaScript}}>
                <div className={`${openJavaScript? "hidden" : "block"}`}>
                    <h3 className="text-center text-[20px] font-bold">JavaScript</h3>
                    <p className="text-center italic mt-3">html simply means casecading stylesheet</p>
                </div>
                <div onClick={haddleOpen} className="cursor-pointer mt-2 bg-white"><img src="/logo/bars-solid.svg" alt="" className="w-[30px]" /></div>
            </div>

    </div>
}