import React from 'react'
import { BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Home from '../../Pages/Home';
import About from '../../Pages/About';
import Services from '../../Pages/Services';
import Schedule from '../../Pages/Schedule';
import Gallery from '../../Pages/Gallery';
import Blog from '../../Pages/Blog';
import Contact from '../../Pages/Contact';
import Navbar from '../Navbar';
export default function AppRoute() {
  return (
    <div>
<Router>
<Navbar/>  
  <Routes>
    <Route path="/" element={<Home/>} />
    <Route path="/about" element={<About/>} />
    <Route path="/services" element={<Services />} />
    <Route path="/schedule" element={<Schedule />} />
    <Route path="/gallery" element={<Gallery />} />
    <Route path="/blog" element={<Blog />} />
    <Route path="/contact" element={<Contact />} />
  </Routes>
</Router>
    </div>
  )
}
