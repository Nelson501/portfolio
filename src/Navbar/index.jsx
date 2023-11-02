import { useState } from "react"
import { Link } from "react-router-dom"
export const Navbar = ()=>{

    const[openMenu, setOpenMenu] = useState(true)

    
    const toggleMenu = ()=>{
        setOpenMenu(!openMenu)
    }
    

    return<>
    {/* <button onClick={toggleMenu}>togui</button> */}
    
    <nav className="flex items-center justify-between bg-cyan-950 px-6 py-3">

        <div className="w-[80px] sm:w-[120px]" >
            <img src="/logo/c.png" alt="logo" className="rounded-[50%]" />
        </div>

        <div className="flex w-[75px] rounded-lg p-2 bg-white items-center sm:hidden cursor-pointer " onClick={toggleMenu}>
            <h3 className="">Menu</h3>
            <img src="/logo/burger.svg" alt="burger" className="relative top-[0.07rem]  w-6" />
        </div>

        <div className="hidden sm:flex w-[70%] sm:w-[60%] justify-around text-white">
            <Link className="hover:bg-white hover:text-cyan-950 cursor-pointer p-1 rounded-md" to='/'>Home</Link>
            <Link className="hover:bg-white hover:-cyan-950 cursor-pointer p-1 rounded-md" to='about'>About</Link>
            <Link className="hover:bg-white hover:text-cyan-950 cursor-pointer p-1 rounded-md" to='services'>Services</Link>
            <Link className="hover:bg-white hover:text-cyan-950 cursor-pointer p-1 rounded-md" to='skill' >Skills</Link>
            <Link className="hover:bg-white hover:text-cyan-950 cursor-pointer p-1 rounded-md" to='contact'>Contact</Link>
        </div>
    </nav>

    <div className={`flex flex-col px-3 gap-3 text-white font-bold w-[60%] relative bottom-3 left-2 mt-4 italic sm:hidden rounded-md ${openMenu? "hidden" : "block"}`}>
            <Link className="hover:text-cyan-950 cursor-pointer p-1 rounded-md" to='/'>Home</Link>
            <Link className="hover:text-cyan-950 cursor-pointer p-1 rounded-md" to='about'>About</Link>
            <Link className="hover:text-cyan-950 cursor-pointer p-1 rounded-md" to='services'>Services</Link>
            <Link className="hover:text-cyan-950  cursor-pointer p-1 rounded-md" to='skill' >Skills</Link>
            <Link className="hover:text-cyan-950 cursor-pointer p-1 rounded-md" to='contact'>Contact</Link>
        </div>


    
    </>
}