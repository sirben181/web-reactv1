import React, { useState } from 'react'
import './app.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom'
import Service from './pages/Service'
import Blog from './pages/Blog'
import About from './pages/About'
import Home from './pages/Home'


const App = () => {
    const[posts,setPosts]=useState([
        {id:1,
        title:"hello there how are you doing there",
         body:"this is  the best thing that we can do the best thing that we can do to ourselves"
        },
        {id:2,
        title:"welcome here this is the best thing you can do over here",
         body:"bienvidos amigos"
        },
         {
             id:3,
             title:"where are u doing these things over here",
             body:"this is the thing we are supposed to do the things "
         },  {
            id:4,
            title:"where are u doing these things over here",
            body:"this is the thing we are supposed to do the things "
        },
        {
            id:5,
            title:"where are u doing these things over here",
            body:"this is the thing we are supposed to do the things "
        },  {
            id:6,
            title:"where are u doing these things over here",
            body:"this is the thing we are supposed to do the things "
        },  {
            id:7,
            title:"where are u doing these things over here",
            body:"this is the thing we are supposed to do the things "
        },  {
            id:8,
            title:"where are u doing these things over here",
            body:"this is the thing we are supposed to do the things "
        },  {
            id:9,
            title:"where are u doing these things over here",
            body:"this is the thing we are supposed to do the things "
        },  {
            id:10,
            title:"where are u doing these things over here",
            body:"this is the thing we are supposed to do the things "
        },  {
            id:11,
            title:"where are u doing these things over here",
            body:"this is the thing we are supposed to do the things "
        },  {
            id:12,
            title:"where are u doing these things over here",
            body:"this is the thing we are supposed to do the things "
        }
    ])
    // const [loading,setLoading]=useState(false)
    const [currentPage,setCurrentPage]=useState(1)
    const [postsPerPage,setPostsPerPage]=useState(5)
    
   const indexOfLastPost=currentPage*postsPerPage;
   const indexOfFirstPost=indexOfLastPost-postsPerPage
   const currentPosts=posts.slice(indexOfFirstPost,indexOfLastPost)
 const paginate=(pageNumber)=>setCurrentPage(pageNumber)
    return (
        
        <Router >
            <div className='app'>
                 <Navbar />
                 <Routes >
                    <Route path='/' element={<Home />}/>
                    <Route path="/services" element={
                    <Service 
                    paginate={paginate}
                    posts={currentPosts}
                    postsPerPage={postsPerPage}
                    totalPosts={posts.length}
                    />}/>
                    <Route path="/blog" element={<Blog />}/>
                    <Route path="/about" element={<About />}/>
                 </Routes>
                 <Footer />
             </div>
        </Router>
        
         
        
    )
}

export default App
