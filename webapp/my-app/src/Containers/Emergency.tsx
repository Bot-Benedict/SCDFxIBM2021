import React from 'react';
import VideoFeed from '../Model/VideoModel';

type EmergencyProps = {
    videoFeeds: VideoFeed[]
}

export default function Emergency(props: EmergencyProps){
    const mapEmergencyList = props.videoFeeds.map((emergencyItem) => {
        return <div>List Of Emergency</div>
    });
    return(
        <div>{mapEmergencyList}</div>
    );
}