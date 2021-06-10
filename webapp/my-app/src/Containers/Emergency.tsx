import React from 'react';
import AppHeader from '../Components/Header';
import VideoFile from '../Components/VideoFile';
import VideoFeed from '../Model/VideoModel';
import { sleep } from '../Util/utilFunctions';
import CSS from 'csstype';
import EmergencyListItem from './../Components/EmergencyListItem';
import StatisticsDisplay from './../Components/StatisticsDisplay';

type EmergencyProps = {
    videoFeeds: VideoFeed[]
    numIncidents: number
}
interface functionProps {
    removeEmergencyItemHandler: ((cameraid: number) => void)
}

const Emergency = function(props: EmergencyProps & functionProps){
    const mapEmergencyList = props.videoFeeds.map((emergencyItem) => {
        return <EmergencyListItem videoFeed={emergencyItem} removeEmergencyItemHandler={props.removeEmergencyItemHandler}/>
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
            <AppHeader/>
            <StatisticsDisplay numIncidents={props.numIncidents}/>
            <div style={listComponentStyle}>
                {mapEmergencyList}
            </div>
        </div>
    );
}
// const backgroundRed = "#ffa8a8";
const backgroundRed = "#ff9191";

const mainComponentStyle: CSS.Properties = { 
    minHeight: "100vh"
};

const listComponentStyle: CSS.Properties = {
    //margin: "50px"
}

export default Emergency;





  