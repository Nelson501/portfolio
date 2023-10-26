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
            <div className={`flex flex-col justify-center items-center p-4 rounded-xl`} style={{backgroundColor : changeHtml}}>
                <div className={`${openHtml? "hidden" : "block"}`}>
                    <h3 className="text-center text-[20px] font-bold">html</h3>
                    <p className="text-center italic mt-3">html simply means hypertext mark-up language</p>
                </div>
                <div onClick={haddleOpen} className="cursor-pointer mt-2 bg-white"><img src="/logo/bars-solid.svg" alt="" className="w-[30px]" /></div>
            </div>

    </div>
}