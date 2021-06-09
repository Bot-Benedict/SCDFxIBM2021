import React from 'react';
import AppHeader from '../Components/Header';
import CSS from 'csstype';
import MonitoringVideoFile from '../Components/MonitoringVideoFile';
import videoFeedsDatabase from '../videoFeedDatabase.json';

type NonEmergencyProps = {
    eventDetectedHandler: (cameraId: number) => void
}

export default function NonEmergency(props: NonEmergencyProps){

    const cameraFeedList = videoFeedsDatabase.videoFeed.map(item => {
        return <div className="column">
            <div className="ui fluid card">
                <div>
                    <MonitoringVideoFile cameraId={item.cameraId} offset={10} assetPath={item.videoAssetPath} eventDetectedHandler={props.eventDetectedHandler}/>
                </div>
                <div className="content">
                    <a className="header">Camera ID: {item.cameraId}</a>
                    <p>{item.location}</p>
                </div>
            </div>
        </div>
    });

    return(
        <div style={mainComponentStyle}>
            <AppHeader />
            {/* <MonitoringVideoFile cameraId={0} offset={10} assetPath="/public/sweesen/videos/fire.mp4" eventDetectedHandler={() => {console.log("hey");}}/> */}
            <div style={centerCameraFeedsContainerStyle}>
                <div className="ui three column grid">
                    {cameraFeedList}
                </div>
            </div>
        </div>
    );
}

const mainComponentStyle: CSS.Properties = {
    backgroundColor: "#b3eb9b", 
    minHeight: "100vh"
};

const centerCameraFeedsContainerStyle: CSS.Properties = {
    height: "70%",
    top: "20%",
    margin: "100px"
}

const centerTextFontStyle: CSS.Properties = {
    textAlign: "center",
    fontSize: "40px"
}