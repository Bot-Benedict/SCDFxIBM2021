import React from 'react';
import VideoFeed from '../Model/VideoModel';
import EmergencyListItem from './../Components/EmergencyListItem';

type EmergencyProps = {
    videoFeeds: VideoFeed[]
}
interface functionProps {
    removeEmergencyItemHandler: ((cameraid: number) => void)
}

export default function Emergency(props: EmergencyProps & functionProps){
    const mapEmergencyList = props.videoFeeds.map((emergencyItem) => {
        return <EmergencyListItem videoFeed={emergencyItem} removeEmergencyItemHandler={props.removeEmergencyItemHandler}/>
    });
    return(
        <div>{mapEmergencyList}</div>
    );
}