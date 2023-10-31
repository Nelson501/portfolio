import { useState } from "react"


export const CardPython = () =>{

    const [openPython, setOpenPython] = useState(true)
    const[changePython, setChangePython] = useState("black")




    const haddleOpen = ()=>{
                setOpenPython(!openPython)
                setChangePython(changePython === "black"? "pink": "black")

    }

    return<div className="flex flex-col font-serif">

    
            <div className={`flex flex-col justify-center items-center p-4 rounded-xl h-full`} style={{backgroundColor : changePython}}>
                <div className={`${openPython? "hidden" : "block"}`}>
                    <h3 className="text-center text-[20px] font-bold">Python</h3>
                    <p className="text-center italic mt-3">html simply means casecading stylesheet</p>
                </div>
                <div onClick={haddleOpen} className="cursor-pointer mt-2 shadow-md shadow-blue-700 rounded-md"><img src="/app-logo/python.svg" alt="" className="w-[80px] rounded-md" /></div>
            </div>

    </div>
}