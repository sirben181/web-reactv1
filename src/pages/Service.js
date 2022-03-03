import React,{useState} from 'react'
import  './service.css'
const Service = () => {
    const[posts,setPosts]=useState([
        {id:1,
        title:"hello there how are you doing there",
         body:"this is  the best thing that we can do the best thing that we can do to ourselves"
        },
        {id:2,
        title:"welcome here this is the best thing you can do over here",
         body:"bienvidos amigos"},
         {
             id:3,
             title:"where are u doing these things over here",
             body:"this is the thing we are supposed to do the things "
         }
    ])
    const [loading,setLoading]=useState(false)
    const [currentPage,setCurrentPage]=useState(1)
    
   
    return (
        <div className="service_container">
            <div className='services_wrapper'>
                
            </div>

      </div>
      
    )
}

export default Service
