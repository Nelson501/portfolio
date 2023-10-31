import { useState } from "react"


export const CardHtml = () =>{

    const [openHtml, setOpenHtml] = useState(true)
    const[changeHtml, setChangeHtml] = useState("black")




    const haddleOpen = ()=>{
                setOpenHtml(!openHtml)

                setChangeHtml(changeHtml === "black"? "red": "black")

    }

    return<div className="flex flex-col font-serif">

            {/* first */}
            <div className={`flex flex-col justify-center items-center p-4 rounded-xl h-full`} style={{backgroundColor : changeHtml}}>
                <div className={`${openHtml? "hidden" : "block"}`}>
                    <h3 className="text-center text-[20px] font-bold">html</h3>
                    <p className="text-center italic mt-3">html simply means hypertext mark-up language</p>
                </div>
                <div onClick={haddleOpen} className="cursor-pointer mt-2 shadow-md shadow-blue-700 rounded-md"><img src="/app-logo/html.jpg" alt="" className="w-[80px] rounded-md" /></div>
            </div>

    </div>
}