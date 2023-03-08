import React, { useState } from 'react'
import "./Tweetbox.css"
import { Button , Avatar} from '@material-ui/core';
import db from './Firebase';
 const Tweetbox = () => {
  const [tweetMessage,setTweetMessage]=useState("")
  const [tweetImg,setTweetImage]=useState("")
  const sendTweet=e=>{
    e.preventDefault()

    db.collection("posts").add({
      displayName:"Afreeen",
      userName:"affu",
      varified:true,
      text:tweetMessage,
      image:tweetImg,
      avatar:
      "https://media.tenor.com/I4d1QyAghmUAAAAM/hooray-letsgo.gif"

    })
    setTweetMessage("")
    setTweetImage("")
  }
  return (
    <div className='tweetBox'>
        <form>
            <div className='tweetBox_input'>
                <Avatar src='https://cdn.antaranews.com/cache/730x487/2020/08/02/2020-07-06T143322Z_1594045997_CVMDIT1A68E839XA195X45EEX9B7EXF74E7847828C_RTRFIPP_4_COVER-SHOWBIZ.jpg' />
                <input value={tweetMessage}
                  onChange={e=>setTweetMessage(e.target.value)}
                placeholder="What's happening" type="text"/>
            </div>
                  <input className='tweetBox_inputImg' 
                    value={tweetImg}
                    onChange={e=>setTweetImage(e.target.value)}
                  placeholder="Enter Image Url" />
            <Button className='tweetBtn' onClick={sendTweet} type='submit'>Tweet</Button>
        </form>
    </div>
  )
}

export default Tweetbox;