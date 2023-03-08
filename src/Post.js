import React, { forwardRef }  from 'react'
import "./Post.css"
import VerifiedUserIcon from '@material-ui/icons/VerifiedUser';
import { Avatar} from '@material-ui/core';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import RepeatIcon from '@material-ui/icons/Repeat';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import PublishIcon from '@material-ui/icons/Publish';

 const Post = forwardRef( ({
    displayName,
    userName,
    varified,
    text,
    image,
    avatar
 },ref) => {
  return (
    <div className='postMain ' ref={ref}>
        <div className='post_avatar'>
           <Avatar src={avatar} /> 
        </div>
        <div className='postBody'>
            <div className='postHeader'>
                <div className='postHeaderText'>
                    <h3>{displayName}{" "} <span className='postSpecialName'>
                       { varified && <VerifiedUserIcon className='postBatch'/>}{userName}</span></h3>
                </div>
            </div>    
                <div className='postheaderDiscription'>
                    <p>{text}</p>
                </div>
                <img src={image} alt='no pic found' />
                <div className='postFooter'>
                    <ChatBubbleOutlineIcon fontSize='small' />
                    <RepeatIcon fontSize='small' />
                    <FavoriteBorderIcon fontSize='small' />
                    <PublishIcon fontSize='small'/>
                </div>
        </div>
    </div>
  )
})

export default Post;