import React, { useEffect, useState } from 'react'
import "./Feed.css"
 import Tweetbox  from './Tweetbox'
 import Post from './Post'
import db from './Firebase'
import FlipMove from "react-flip-move"
 const Feed = () => {
  const [posts,setPost]=useState([])

  useEffect(() => {
    db.collection("posts").onSnapshot((snapshot) =>
    setPost(snapshot.docs.map((doc) => doc.data()))
    );
  }, []);

  return (
    <div className='mainfeed'>
        <div className='feedHeader'>
          <h2>Home</h2> 
        </div>
        <Tweetbox />
        <FlipMove>
        {posts.map(post => (
          <Post 
          key={post.text}
          displayName={post.displayName}
          userName={post.userName}
          varified={post.varified}
          text={post.text}
          avatar={post.avatar}
          image={post.image}
          />
        ))}
        </FlipMove>
        {/* <Post 
          displayName="niyamath"
          userName="khan"
          varified={true}
          text="huraay"
          avatar="hhe"
          image="https://createcustomwishes.com/wp-content/uploads/2023/02/Animated-Ramadan-Kareem-Mubarak.gif"
          /> */}
        
    </div>
  )
}

export default Feed;