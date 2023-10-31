import { useState } from "react"


export const Cardtailwind = () =>{

    const [openTailwind, setOpenTailwind] = useState(true)
    const[changeTailwind, setChangeTailwind] = useState("black")




    const haddleOpen = ()=>{
                setOpenTailwind(!openTailwind)
                setChangeTailwind(changeTailwind === "black"? "purple": "black")

    }

    return<div className="flex flex-col font-serif">

    
            <div className={`flex flex-col justify-center items-center p-4 rounded-xl h-full`} style={{backgroundColor : changeTailwind}}>
                <div className={`${openTailwind? "hidden" : "block"}`}>
                    <h3 className="text-center text-[20px] font-bold">Tailwind</h3>
                    <p className="text-center italic mt-3">html simply means casecading stylesheet</p>
                </div>
                <div onClick={haddleOpen} className="cursor-pointer mt-2 shadow-md shadow-blue-700 rounded-md"><img src="/app-logo/tailwind.jpg" alt="" className="w-[80px] rounded-md" /></div>
            </div>

    </div>
}