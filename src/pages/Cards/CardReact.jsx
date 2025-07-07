import { useState } from "react"


export const CardReact = () =>{

    const [openReact, setOpenReact] = useState(true)
    const[changeReact, setChangeReact] = useState("black")




    const haddleOpen = ()=>{
                setOpenReact(!openReact)
                setChangeReact(changeReact === "black"? "wheat": "black")

    }

    return<div className="flex flex-col font-serif">

    
            <div className={`flex flex-col justify-center items-center p-4 rounded-xl h-full`} style={{backgroundColor : changeReact}}>
                <div className={`${openReact? "hidden" : "block"}`}>
                    <h3 className="text-center text-[20px] font-bold">React Js</h3>
                    <p className="text-center italic mt-3">React is a Javascript library used for building user interfaces, especially single-page applications.</p>
                </div>
                <div onClick={haddleOpen} className="cursor-pointer mt-2 shadow-md shadow-blue-700 rounded-md"><img src="/app-logo/react.jpg" alt="" className="w-[80px]" /></div>
            </div>

    </div>
}