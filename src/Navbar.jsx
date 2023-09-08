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
    <nav className="flex justify-between items-center bg-gray-800 py-2 px-[40px] sm:px-[50px] text-green-700">
        <span className="rounded-[50%]">

            <img className="w-[45px] h-[45px] md:[55px]" src="./logo/img2.jpg" alt="logo" /> 

        </span>

        <div className="sm:hidden" onClick={toggle}>
        <img src="./logo/burger.svg" alt="img" className="w-[20px]" />

        </div>
    
        <div className={` hidden sm:flex justify-around relative w-[500px] ` }>
            <Link className=" hover:text-white hover:bg-blue-700 p-1 rounded-md focus:text-white ition ease-in-out duration-700" to="/">Home</Link>
            <Link className=" hover:text-white hover:bg-blue-700 p-1 rounded-md focus:text-white transition ease-in-out duration-700" to="/contact">Contact</Link>
            <Link className="hover:text-white hover:bg-blue-700 p-1 rounded-md focus:text-white transition ease-in-out duration-700" to="/aboutUs">About Us</Link>
            <Link className="hover:text-white hover:bg-blue-700 p-1 rounded-md focus:text-white ition ease-in-out duration-700" to="services">Services</Link>
            <Link className="hover:text-white hover:bg-blue-700 p-1 rounded-md focus:text-white ition ease-in-out duration-700" to="skills">Skills</Link>
        </div>
    </nav>

    <div className={`mobile-menu flex flex-col items-center my-2 sm:hidden ${isMenuOpen? "hidden" : "block"}`}>
        {links.map((link)=> <Link className={`hover:text-white hover:bg-blue-700 p-1 rounded-md ${link === activeLink && "text-white"}`} onClick={()=>{ active(link);}}>{link}</Link>)}
           
    </div>
    </>
  

}
