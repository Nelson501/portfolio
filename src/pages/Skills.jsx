import { Link } from "react-router-dom"
import { Card } from "../Card"
export const Skills = ()=>{


    return <div className="flex flex-col justify-center items-center p-6">

        <div className="flex flex-col w-full justify-center items-center my-10">
            <div className="flex flex-col justify-center items-center text-white font-serif py-3 px-6 w-[200px] md:w-[300px] lg:w-[400px] font-bold text-[25px] lg:text-[35px] uppercase">
                    My Skills
            </div>
        </div>

        {/* skills */}

        <div className="text-white">
            < Card />

         </div>

         <div className="flex flex-cols justify-center items-center text-white bg-cyan-950 mt-10 py-1 md: px-6 lg:px-8 border-b-4 border-white rounded-md md:w-[100px] lg:w-[120px]"> <Link to='/'>Home</Link></div>

    </div>
}