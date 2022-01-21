import React, {useEffect,useState} from 'react'

import axios from 'axios'

const Exercept = () => {
    const [posts, setPosts] = useState([]);
    const getPosts= async()=>{
        const res= await axios.get('http://localhost:5000/posts')
        const data= await res.data
        setPosts(data)
        console.log(posts)
    }
    useEffect(()=>{
      getPosts();
    },[]);
  return (
      <div></div>
  )
};

export default Exercept;
