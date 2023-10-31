import { useState } from "react"


export const CardBootstrap = () =>{

    const [openBootstrap, setOpenbootstrap] = useState(true)
    const[changeBootstrap, setChangeBootstrap] = useState("black")




    const haddleOpen = ()=>{
                setOpenbootstrap(!openBootstrap)
                setChangeBootstrap(changeBootstrap === "black"? "green": "black")

    }

    return<div className="flex flex-col font-serif">

    
            <div className={`flex flex-col justify-center items-center p-4 rounded-xl h-full`} style={{backgroundColor : changeBootstrap}}>
                <div className={`${openBootstrap? "hidden" : "block"}`}>
                    <h3 className="text-center text-[20px] font-bold">Bootstrap</h3>
                    <p className="text-center italic mt-3">html simply means casecading stylesheet</p>
                </div>
                <div onClick={haddleOpen} className="cursor-pointer mt-2 bg-white shadow-md shadow-blue-700 rounded-md"><img src="/app-logo/bootstrap.jpg" alt="" className="w-[80px] h-[80px] rounded-md" /></div>
            </div>

    </div>
}