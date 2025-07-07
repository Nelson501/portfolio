import FOODAPP from '../assets/foodApp.png'
import FORM from '../assets/form.png'
import INVENTORY from '../assets/engr.png'
import TODOLIST from '../assets/Todo-list.png'
import ECOMMERCE from '../assets/ecommerce.png'
import CALCULATOR from '../assets/calculator.png'
import STOPWATCH from '../assets/stopwatch.png'
import RPSGAME from '../assets/r-p-s-game.png'
import FOODRECIPE from '../assets/foodRecipe.png'
import MYFLYER from '../assets/myWeb.png'

export const Portfolio = ()=>{

    // food delivery
    const foodappLink = "www.computer.com"
    const githubFoodapp = 'git hub link'
    
    // form
    const formLink = "www.computer.com"
    const githubForm = 'git hub link'
    
    // inventory management
    const inventoryMgt = "www.computer.com"
    const githubInv = 'git hub link'

    // Todo List
    const todoListLink = "www.computer.com"
    const githubTodolist = 'git hub link'
   
    // Ecommerce
    const ecommerceLink = "www.computer.com"
    const githubEcom = 'git hub link'
   
    // Calculator
    const calculatorLink = "www.computer.com"
    const githubCal = 'git hub link'

    // Stop watch
    const stopwatchLink = "www.computer.com"
    const githubWatch = 'git hub link'

    // R-P-S Games
    const rpsLink = "www.computer.com"
    const githubRsp = 'git hub link'

    // Food Recipe
    const foodrecipeLink = "www.computer.com"
    const githubRecipe = 'git hub link'

    // My web Flyer
    const flyerLink = "www.computer.com"
    const githubFlyer = 'git hub link'


    return <div className="grid grid-cols-2 lg:grid-cols-3 mt-10 gap-10">
        {/* fist  */}
        <div className='flex flex-col '>
            <div className='flex flex-col justify-center items-center'>
                <img className='w-[200px] h-[200px] rounded-lg shadow-md shadow-yellow-500' src={FOODAPP} alt="" />
                <p className='mt-3 text-10 font-serif font-bold italic'>Food Delivery</p>
            </div>
            <div className='flex flex-row justify-center items-center mt-2 '>
                <div className='bg-cyan-950 hover:bg-cyan-800 cursor-pointer mr-2 shadow-sm shadow-yellow-900 px-3 py-2 rounded-md' >
                    <a className='font-serif font-bold text-[18px]' href={foodappLink}>Click Me</a>
                </div>
                <div className='bg-blue-950 hover:bg-blue-800 cursor-pointer mr-2 shadow-sm shadow-yellow-900 px-3 py-2 rounded-md'>
                    <a className='font-serif font-bold text-[18px]' href={githubFoodapp}>Github</a>
                </div >
            </div>
        </div>

        {/* second */}
        <div>
            <div className='flex flex-col justify-center items-center'>
                <img className='w-[200px] h-[200px] rounded-lg shadow-md shadow-yellow-500' src={FORM} alt="" />
                <p className='mt-3 text-10 font-serif font-bold italic'>Form Update</p>
            </div>
            <div className='flex flex-row justify-center items-center mt-2 '>
                <div className='bg-cyan-950 hover:bg-cyan-800 cursor-pointer mr-2 shadow-sm shadow-yellow-900 px-3 py-2 rounded-md' >
                    <a className='font-serif font-bold text-[18px]' href={formLink}>Click Me</a>
                </div>
                <div className='bg-blue-950 hover:bg-blue-800 cursor-pointer mr-2 shadow-sm shadow-yellow-900 px-3 py-2 rounded-md'>
                    <a className='font-serif font-bold text-[18px]' href={githubForm}>Github</a>
                </div >
            </div>
        </div>

        {/* Inventory management */}
        <div>
            <div className='flex flex-col justify-center items-center'>
                <img className='w-[200px] h-[200px] rounded-lg shadow-md shadow-yellow-500' src={INVENTORY} alt="" />
                <p className='mt-3 text-10 font-serif font-bold italic'>Inventor Mangement</p>
            </div>
            <div className='flex flex-row justify-center items-center mt-2 '>
                <div className='bg-cyan-950 hover:bg-cyan-800 cursor-pointer mr-2 shadow-sm shadow-yellow-900 px-3 py-2 rounded-md' >
                    <a className='font-serif font-bold text-[18px]' href={inventoryMgt}>Click Me</a>
                </div>
                <div className='bg-blue-950 hover:bg-blue-800 cursor-pointer mr-2 shadow-sm shadow-yellow-900 px-3 py-2 rounded-md'>
                    <a className='font-serif font-bold text-[18px]' href={githubInv}>Github</a>
                </div >
            </div>
        </div>

        {/* Todo List */}
        <div>
            <div className='flex flex-col justify-center items-center'>
                <img className='w-[200px] h-[200px] rounded-lg shadow-md shadow-yellow-500' src={TODOLIST} alt="" />
                <p className='mt-3 text-10 font-serif font-bold italic'>Todo List</p>
            </div>
            <div className='flex flex-row justify-center items-center mt-2 '>
                <div className='bg-cyan-950 hover:bg-cyan-800 cursor-pointer mr-2 shadow-sm shadow-yellow-900 px-3 py-2 rounded-md' >
                    <a className='font-serif font-bold text-[18px]' href={todoListLink}>Click Me</a>
                </div>
                <div className='bg-blue-950 hover:bg-blue-800 cursor-pointer mr-2 shadow-sm shadow-yellow-900 px-3 py-2 rounded-md'>
                    <a className='font-serif font-bold text-[18px]' href={githubTodolist}>Github</a>
                </div >
            </div>
        </div>

        {/* Ecommerce */}
        <div>
            <div className='flex flex-col justify-center items-center'>
                <img className='w-[200px] h-[200px] rounded-lg shadow-md shadow-yellow-500' src={ECOMMERCE} alt="" />
                <p className='mt-3 text-10 font-serif font-bold italic'>Ecommerce</p>
            </div>
            <div className='flex flex-row justify-center items-center mt-2 '>
                <div className='bg-cyan-950 hover:bg-cyan-800 cursor-pointer mr-2 shadow-sm shadow-yellow-900 px-3 py-2 rounded-md' >
                    <a className='font-serif font-bold text-[18px]' href={ecommerceLink}>Click Me</a>
                </div>
                <div className='bg-blue-950 hover:bg-blue-800 cursor-pointer mr-2 shadow-sm shadow-yellow-900 px-3 py-2 rounded-md'>
                    <a className='font-serif font-bold text-[18px]' href={githubEcom}>Github</a>
                </div >
            </div>
        </div>

        {/* Calculator */}
        <div>
            <div className='flex flex-col justify-center items-center'>
                <img className='w-[200px] h-[200px] rounded-lg shadow-md shadow-yellow-500' src={CALCULATOR} alt="" />
                <p className='mt-3 text-10 font-serif font-bold italic'>Calculator</p>
            </div>
            <div className='flex flex-row justify-center items-center mt-2 '>
                <div className='bg-cyan-950 hover:bg-cyan-800 cursor-pointer mr-2 shadow-sm shadow-yellow-900 px-3 py-2 rounded-md' >
                    <a className='font-serif font-bold text-[18px]' href={calculatorLink}>Click Me</a>
                </div>
                <div className='bg-blue-950 hover:bg-blue-800 cursor-pointer mr-2 shadow-sm shadow-yellow-900 px-3 py-2 rounded-md'>
                    <a className='font-serif font-bold text-[18px]' href={githubCal}>Github</a>
                </div >
            </div>
        </div>

        {/* Stop Watch */}
        <div>
            <div className='flex flex-col justify-center items-center'>
                <img className='w-[200px] h-[200px] rounded-lg shadow-md shadow-yellow-500' src={STOPWATCH} alt="" />
                <p className='mt-3 text-10 font-serif font-bold italic'>Rock-Paper_Scissors</p>
            </div>
            <div className='flex flex-row justify-center items-center mt-2 '>
                <div className='bg-cyan-950 hover:bg-cyan-800 cursor-pointer mr-2 shadow-sm shadow-yellow-900 px-3 py-2 rounded-md' >
                    <a className='font-serif font-bold text-[18px]' href={stopwatchLink}>Click Me</a>
                </div>
                <div className='bg-blue-950 hover:bg-blue-800 cursor-pointer mr-2 shadow-sm shadow-yellow-900 px-3 py-2 rounded-md'>
                    <a className='font-serif font-bold text-[18px]' href={githubWatch}>Github</a>
                </div >
            </div>
        </div>

        {/* Rock-Paper-Scissors */}
        <div>
            <div className='flex flex-col justify-center items-center'>
                <img className='w-[200px] h-[200px] rounded-lg shadow-md shadow-yellow-500' src={RPSGAME} alt="" />
                <p className='mt-3 text-10 font-serif font-bold italic'>Stop Watch</p>
            </div>
            <div className='flex flex-row justify-center items-center mt-2 '>
                <div className='bg-cyan-950 hover:bg-cyan-800 cursor-pointer mr-2 shadow-sm shadow-yellow-900 px-3 py-2 rounded-md' >
                    <a className='font-serif font-bold text-[18px]' href={rpsLink}>Click Me</a>
                </div>
                <div className='bg-blue-950 hover:bg-blue-800 cursor-pointer mr-2 shadow-sm shadow-yellow-900 px-3 py-2 rounded-md'>
                    <a className='font-serif font-bold text-[18px]' href={githubRsp}>Github</a>
                </div >
            </div>
        </div>

        {/* Food Recipie */}
        <div>
            <div className='flex flex-col justify-center items-center'>
                <img className='w-[200px] h-[200px] rounded-lg shadow-md shadow-yellow-500' src={FOODRECIPE} alt="" />
                <p className='mt-3 text-10 font-serif font-bold italic'>Food Recipe</p>
            </div>
            <div className='flex flex-row justify-center items-center mt-2 '>
                <div className='bg-cyan-950 hover:bg-cyan-800 cursor-pointer mr-2 shadow-sm shadow-yellow-900 px-3 py-2 rounded-md' >
                    <a className='font-serif font-bold text-[18px]' href={foodrecipeLink}>Click Me</a>
                </div>
                <div className='bg-blue-950 hover:bg-blue-800 cursor-pointer mr-2 shadow-sm shadow-yellow-900 px-3 py-2 rounded-md'>
                    <a className='font-serif font-bold text-[18px]' href={githubRecipe}>Github</a>
                </div >
            </div>
        </div>

        {/* My flyer */}
        <div>
            <div className='flex flex-col justify-center items-center'>
                <img className='w-[200px] h-[200px] rounded-lg shadow-md shadow-yellow-500' src={MYFLYER} alt="" />
                <p className='mt-3 text-10 font-serif font-bold italic'>My Flyer</p>
            </div>
            <div className='flex flex-row justify-center items-center mt-2 '>
                <div className='bg-cyan-950 hover:bg-cyan-800 cursor-pointer mr-2 shadow-sm shadow-yellow-900 px-3 py-2 rounded-md' >
                    <a className='font-serif font-bold text-[18px]' href={flyerLink}>Click Me</a>
                </div>
                <div className='bg-blue-950 hover:bg-blue-800 cursor-pointer mr-2 shadow-sm shadow-yellow-900 px-3 py-2 rounded-md'>
                    <a className='font-serif font-bold text-[18px]' href={githubFlyer}>Github</a>
                </div >
            </div>
        </div>
        
        
    </div>
}