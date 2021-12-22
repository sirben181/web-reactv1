import React from 'react'
import Navbar from './components/Navbar'
import {Route,Routes} from 'react-router-dom'
import Service from './pages/Service'
import Blog from './pages/Blog'
import About from './pages/About'
const App = () => {
    return (
        <div>
            <Navbar />
            <Routes >
                <Route to="/services" element={<Service />}/>
                <Route to="/blog" element={<Blog />}/>
                <Route to="/about" element={<About />}/>
            </Routes>


        </div>
    )
}

export default App
