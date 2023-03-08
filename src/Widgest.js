import React from 'react'
import "./Widgets.css"
import SearchIcon from '@material-ui/icons/Search';
import {TwitterTimelineEmbed ,
        TwitterTweetEmbed,
        TwitterShareButton} from "react-twitter-embed"

 const Widgest = () => {
  return (
    <div className='widgetsMain'>
        <div className='widgetsInput'>
            <SearchIcon className='widgetSearchIcon' />
             <input placeholder="search tweet" type="text" />
        </div>
        <div className='widgetsContiner'>
            {/* <h2>Hello whats happening</h2> */}
            {/* <TwitterTweetEmbed tweetId={'858551177860055040'} /> */}
            <TwitterTimelineEmbed
          sourceType="profile"
          screenName="Microsoft"
          options={{ height: 400 }}
        />

            <TwitterTimelineEmbed
          sourceType="profile"
          screenName="tcs"
          options={{ height: 400 }}
        />

        <TwitterShareButton
          url={"https://ne-np.facebook.com/Niyamathullah.khader"}
          options={{ text: "#reactjs is awesome", via: "NiyamathullahK4" }}
        />
        </div>
    </div> 
  )
}


export default Widgest;

// used react special library called REACR TWITTER EMBED