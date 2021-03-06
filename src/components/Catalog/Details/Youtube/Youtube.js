import React,{ useEffect, useState } from 'react';
import YouTube from 'react-youtube';

const Youtube = ({param}) => {
    
    const opts = {
        height: '365',
        width: '600',
        playerVars: {
          // https://developers.google.com/youtube/player_parameters
          autoplay: 1,
        },
      };
      const [strippedUrl, setStrippedUrl] = useState('')

    useEffect(()=> {
        if(param){
            let match = /v=(-?_?\w+-?_?\w+)&/ig.exec(param);
            if (match) {
              setStrippedUrl(match[1]);
            }
        }
    },[param])


      const onReady = (e) => {
        e.target.pauseVideo();
      }

    return(
        <YouTube videoId={strippedUrl} opts={opts} onReady={onReady} />
    )
    

}

export default Youtube;