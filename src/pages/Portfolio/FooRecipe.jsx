import { IMAGES } from "../../pics/img"

export const FoodRecipe = ()=>{
    const foodrecipeUrl = "https://github.com/Nelson501/Food-Recipe-store.git"
    const gitUrl = "food-recipe-store.vercel.app"
    return <div className="flex flex-col justify-center items-center">
    <div className="flex flex-col w-[40%] h-[40%] border-md">
        <img src={IMAGES.FoodRecipe} alt="Food Recipe" className="h-[20%] border-2 rounded-lg" />
        <p className="flex flex-col items-center mt-4 text-white 
        text-[1rem] font-serif font-bold italic w-full h-full">Food Recipe</p>
    </div>

    <div className="flex flex-row justify-center items-center mt-4">
        <div className="flex flex-col mx-3 bg-black px-4 py-1 border-b-2 rounded-lg font-serif hover:bg-cyan-800 corsor-pointer italic shadow-white shadow-sm">
            <a href={foodrecipeUrl}>Click Me</a>
        </div>
        <div className="flex flex-col mx-3 bg-cyan-950 px-4 py-1 border-b-2 rounded-lg font-serif hover:bg-cyan-800 corsor-pointer italic shadow-white shadow-sm">
            <a href={gitUrl}>Github</a>
        </div>

    </div>
    </div>
}