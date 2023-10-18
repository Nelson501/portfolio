import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'
import { Navbar } from './Navbar';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Skills } from './pages/Skills';
import { Services } from './pages/Services';
import { Contact } from './pages/Contact';

function App(){
  return<div className='bg-black w-full'>
  <header className="">
    <Router>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/about' element={<About/>}/>
        <Route path='/skill' element={<Skills/>} />
        <Route path='services' element={<Services/>}/>
        <Route path='contact' element={<Contact/>} />
      </Routes>
    </Router>
  </header>
  </div>
}

export default App;