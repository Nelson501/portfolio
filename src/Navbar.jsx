import { Link } from "react-router-dom"
import { useState } from "react"
export const NavBar = ()=>{
    const links = ["Home", "Contact", "About Us", "Services", "Skills"]
   
     const [activeLink, setActiveLink] = useState("")
     const[isMenuOpen, setIsMenuOpen] = useState(true)

     const active = (link)=>{
        console.log(link);
        setActiveLink(link)
     }

     const toggle = ()=>{
        setIsMenuOpen(!isMenuOpen)
     }
   

    return <>
    <nav className="flex justify-between items-center bg-blue-700 py-2 px-[40px] sm:px-[50px]">

        <span className="rounded-[50%]">
            <img className="md:w-[70px] md:h-[70px] w-[55px] h-[55px]  " src="./logo/c.png" alt="logo" /> 
        </span>

        <div className="sm:hidden flex text-blue-700 bg-white p-1 items-center rounded-md" onClick={toggle}>
            <h3 className="mr-[0.1rem] font-bold cursor-pointer ">Menu</h3>
        <img src="./logo/burger.svg" alt="img" className="w-[15px] text-blue-700 bg-white relative top-[0.1rem] cursor-pointer"/>

        </div>
    
        <div className="hidden sm:flex justify-around relative w-[500px] text-white">
            <Link className=" hover:text-blue-700 hover:bg-white p-1 rounded-md" to="/">Home</Link>
            <Link className=" hover:text-blue-700 hover:bg-white p-1 rounded-md" to="aboutUs">About Us</Link>
            <Link className="hover:text-blue-700 hover:bg-white p-1 rounded-md" to="skills">Skills</Link>
            <Link className="hover:text-blue-700 hover:bg-white p-1 rounded-md " to="services">Services</Link>
            <Link className="hover:text-blue-700 hover:bg-white p-1 rounded-md" to="contact">Contact</Link>
        </div>

    </nav>

    <div className={`mobile-menu flex flex-col p-2 my-2 bg-blue-600 w-[300px] ml-2 mt-[-5px] sm:hidden ${isMenuOpen? "hidden" : "block"}`}>

        <Link className="cursor-pointer hover:text-white hover:underline hover:underline-offset-1 p-1" to="/">Home</Link>
        <Link className=" hover:text-white hover:underline hover:underline-offset-1 p-1" to="aboutUs">About Us</Link>
        <Link className="hover:text-white  hover:underline hover:underline-offset-1 p-1" to="skills"> Skills</Link>
        <Link className="hover:text-white hover:underline hover:underline-offset-1 p-1" to="services">Services</Link>
        <Link className="hover:text-white hover:underline hover:underline-offset-1" to="contact">contact</Link>

{/* {links.map((link)=> <Link className={`hover:text-white hover:bg-blue-700 p-1 rounded-md ${link === activeLink && "text-white"}`} onClick={()=>{ active(link);}}>{link}</Link>)}  */}

    </div>
    
    </>
  

}
