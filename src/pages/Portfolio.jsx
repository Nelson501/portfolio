import { ComputerDoc } from "./Portfolio/ComputerDoc"
import { FoodRecipe } from "./Portfolio/FooRecipe"
import { WebDeveloper } from "./Portfolio/WebDeveloper"
import { FoodApp } from "./Portfolio/FoodApp"
import { TodoList } from "./Portfolio/TodoList"
import { FormUpdate } from "./Portfolio/formUpdate"

export const Portfolio = ()=>{
    return <div className="grid md:grid-cols-2 w-[80%] h-full justify-center items-center">
        <div className="my-[8%] md:my-[4%]">
            <WebDeveloper/>
        </div>

        <div className= "my-[8%] md:my-[4%] ">
            <ComputerDoc />
        </div>

        <div className="my-[8%] md:my-[4%]">
            <FoodRecipe/>
        </div>

        <div className="my-[8%] md:my-[4%]">
            <FoodApp/>
        </div>

        <div className="my-[8%] md:my-[4%]">
            <FormUpdate/>
        </div>

        <div className="my-[8%] md:my-[4%]">
            <TodoList/>
        </div>
    
    </div>

}