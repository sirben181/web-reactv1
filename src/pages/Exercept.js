import React, {useEffect,useState} from 'react'

import axios from 'axios'
import { Link } from 'react-router-dom';

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
      <div>{posts.map((post)=>{return <div className="excerpt_wrapper"
      key={post.id}>
          <h2>{post.title}</h2>
          <p>{post.body}</p>
          <span>{post.author}{post.date} </span>
          <Link to=''>
              <button className="primary_btn">Learn More</button>
          </Link>

      </div>})}</div>
  )
};

export default Exercept;
