import { useState } from "react"


export const CardTypeScript = () =>{

    const [openTypeScript, setOpenTypeScript] = useState(true)
    const[changeTypeScript, setChangeTypeScript] = useState("black")




    const haddleOpen = ()=>{
                setOpenTypeScript(!openTypeScript)
                setChangeTypeScript(changeTypeScript === "black"? "indigo": "black")

    }

    return<div className="flex flex-col font-serif">

    
            <div className={`flex flex-col justify-center items-center p-4 rounded-xl`} style={{backgroundColor : changeTypeScript}}>
                <div className={`${openTypeScript? "hidden" : "block"}`}>
                    <h3 className="text-center text-[20px] font-bold">TypeScript</h3>
                    <p className="text-center italic mt-3">html simply means casecading stylesheet</p>
                </div>
                <div onClick={haddleOpen} className="cursor-pointer mt-2 bg-white"><img src="/logo/bars-solid.svg" alt="" className="w-[30px]" /></div>
            </div>

    </div>
}