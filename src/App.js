import React from 'react'
import Navbar from './components/Navbar'
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom'
import Service from './pages/Service'
import Blog from './pages/Blog'
import About from './pages/About'
import Home from './pages/Home'
import Footer from './components/Footer'


const App = () => {
    return (
        
            <Router >
            <Navbar />
            <Routes >
                <Route path='/' element={<Home />}/>
                <Route path="/services" element={<Service />}/>
                <Route path="/blog" element={<Blog />}/>
                <Route path="/about" element={<About />}/>
            </Routes>
            <Footer />

            </Router>

         
        
    )
}

export default App
