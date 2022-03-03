import React,{useState,useEffect} from 'react'
import  './service.css'
import Post from '../Post';
const Service = () => {
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
    return (
        <div className="service_container">
            <div className='services_wrapper'>
               <Post posts={currentPosts}
               />
            </div>

      </div>
      
    )
}

export default Service
