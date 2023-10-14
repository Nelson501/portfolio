import { NavBar} from './Navbar'
import { BrowserRouter as Router, Routes, Route }
from 'react-router-dom'
import { Home } from './pages/Home'
import { AboutUs} from './pages/AboutUs'
import { Skills } from './pages/Skills'
import { Services } from './pages/Services'
import './App.css'
import { Contact } from './pages/Contact'

function App() {

const myImage = "/logo/img.jpg"

  return <div className='w-full h-screen'>
    <header className=''>
    <Router> 
      <NavBar/>
      <Routes>
        <Route path="/" element ={<Home myImage={myImage}/>} />
        <Route path="/aboutUs"  element ={<AboutUs/>} />
        <Route path="/skills"  element ={<Skills/>} />
        <Route path="/services" element ={<Services/>} />
        <Route path="/contact" element ={<Contact/>} />
        <Route path='*' element= { <div className='flex  flex-col w-full h-screen justify-center items-center'><h1 className='text-red-700 text-[50px]'>Page not found!</h1></div>} />
      </Routes>
    </Router>
    
  </header>

  <main>
    <div></div>
    <div>
      <div></div>
      </div>

  </main>

  <footer>

  </footer>
  </div>
  


}

export default App