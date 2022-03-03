import React from 'react'
import './app.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom'
import Service from './pages/Service'
import Blog from './pages/Blog'
import About from './pages/About'
import Home from './pages/Home'


const App = () => {
    return (
        
        <Router >
            <div className='app'>
                 <Navbar />
                 <Routes >
                    <Route path='/' element={<Home />}/>
                    <Route path="/services" element={<Service />}/>
                    <Route path="/blog" element={<Blog />}/>
                    <Route path="/about" element={<About />}/>
                 </Routes>
                 <Footer />
             </div>
        </Router>
        
         
        
    )
}

export default App
