import React from 'react';
import AppHeader from '../Components/Header';
import VideoFile from '../Components/VideoFile';
import VideoFeed from '../Model/VideoModel';
import { sleep } from '../Util/utilFunctions';
import CSS from 'csstype';

type EmergencyProps = {
    videoFeeds: VideoFeed[]
}

export default function Emergency(props: EmergencyProps){
    const mapEmergencyList = props.videoFeeds.map((emergencyItem) => {
        return <div>List Of Emergency</div>
    });

    const [backgroundColour, setBackgroundColor] = React.useState(backgroundRed);

    async function triggerColorBlink() {
        for (var i = 0; i < 10; i++) {
            setBackgroundColor((i % 2 === 0) ? "white" : backgroundRed);
            await sleep(0.5);
        }
    }

    React.useEffect(() => {
        setTimeout(() => {
            triggerColorBlink();
        }, 1000);
    }, []);

    return(
        <div style={{...mainComponentStyle, backgroundColor: backgroundColour}}>
            <AppHeader />
            <VideoFile assetPath="/sweesen/videos/fire.mp4" offset={10} />
            <VideoFile assetPath="/sweesen/videos/fire.mp4" offset={20} />
            <div style={listComponentStyle}>
                {mapEmergencyList}
            </div>
        </div>
    );
}
const backgroundRed = "#ffa8a8";

const mainComponentStyle: CSS.Properties = { 
    minHeight: "100vh"
};

const listComponentStyle: CSS.Properties = {
    margin: "50px"
}



  