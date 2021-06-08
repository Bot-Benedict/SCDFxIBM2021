import React from 'react';
import AppHeader from '../Components/Header';
import CSS from 'csstype';
import VideoFile from '../Components/VideoFile';

export default function NonEmergency(){
    return(
        <div style={mainComponentStyle}>
            <AppHeader />
            <VideoFile assetPath="/sweesen/videos/fire.mp4" offset={10} />
        </div>
    );
}

const mainComponentStyle: CSS.Properties = {
    backgroundColor: "#b3eb9b", 
    minHeight: `${window.innerHeight}`
};