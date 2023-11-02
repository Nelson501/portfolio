
import { Card } from "../Card"
export const Skills = ()=>{


    return <div className="flex flex-col justify-center items-center p-6">

        <div className="flex flex-col  bg-black  w-full justify-center items-center my-10">
            <div className="flex flex-col justify-center items-center bg-cyan-950 text-white py-3 px-6 w-[200px] md:w-[300px] lg:w-[400px] rounded-xl  border-b-2 border-white font-bold text-[30px] lg:text-[40px] uppercase">
                    My Skills
            </div>
        </div>

        {/* skills */}

        <div className="text-white">
            < Card />

         </div>

    </div>
}