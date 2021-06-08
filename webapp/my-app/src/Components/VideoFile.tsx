import React from 'react';
import CSS from 'csstype';

type VideoFileProp = {
    assetPath: string,
    offset: number
}



export default function VideoFile(props: VideoFileProp){

    var videoElement: any = null;
    const setVideoReference = (element: any) => {
        videoElement = element;
    };

    React.useEffect(() => {
        setTimeout(() => {
            if (videoElement) {
                videoElement.currentTime = props.offset;
            }
        }, 500);
    });

    return(
        <video style={mainComponentStyle} autoPlay controls ref={setVideoReference}>
            <source src={props.assetPath} type="video/mp4"/>
        </video>
    );
}

const mainComponentStyle: CSS.Properties = {
    backgroundColor: "black",
    height: "500px",
    width: "500px"
}


  