import React from 'react';
import VideoFeed from '../Model/VideoModel';
import Fire from './../assets/fire.jpg';
import MapItem from './MapItem';
import './list.css';
import VideoFile from './VideoFile';

type EmergencyListItemProps = {
    videoFeed: VideoFeed
}
interface functionProps {
    removeEmergencyItemHandler: ((cameraid: number) => void)
}

function MyMapBox(props: any) {
    return (<MapItem long={props.long}
        lat={props.lat}
    />);
}

const MemoMyMapBox = React.memo(MyMapBox);

export default function EmergencyListItem(props: EmergencyListItemProps & functionProps){

    console.log("image url" + props.videoFeed.imageURL);
    const onClickButton = () =>{
        props.removeEmergencyItemHandler(props.videoFeed.cameraId);
    }

    const mapBox = () =>{
        return (<MapItem long={props.videoFeed.long}
            lat={props.videoFeed.lat}
        />);
    }

    var mapBoxMemo = React.memo(mapBox);

    return(
            <div className="container">
                <div>
                    <div style={{display:"flex", flexDirection:"row", margin:"0px", padding:"0px"}}>
                        <div className="card" style={{width:"300px", height:"300px", margin: "10px"}}>
                            <div className="image" style={{width:"300px", height:"300px"}}>
                            <VideoFile assetPath={props.videoFeed.videoAssetPath} offset={props.videoFeed.timeoffset}></VideoFile>
                            {/* <img src={Fire} alt="fire" style={{width:"300px", height:"300px", borderRadius:"10px", borderColor:"grey", borderWidth:"medium", borderStyle:"solid"}}/> */}
                            </div>
                        </div>
                        <div className="card" style={{width:"300px", height:"300px", margin: "10px", borderRadius:"10px"}}>
                            <div className="image" style={{width:"300px", height:"300px"}}>
                            <img src={props.videoFeed.imageURL} alt="fire" style={{width:"300px", height:"300px", borderRadius:"10px", borderColor:"grey", borderWidth:"medium", borderStyle:"solid"}} />
                            </div>
                        </div>
                    </div>
                    <div style={{margin: "10px", fontWeight:"bold", fontSize:"20px"}}>
                        <div><u>Camera ID</u></div> 
                        <p>{props.videoFeed.cameraId}</p>
                        <div><u>Location</u></div>
                        <p>{props.videoFeed.location}</p>
                        <div><u>Event</u></div>
                        <p>{props.videoFeed.event}</p>
                        <div><u>Timestamp</u></div>
                        <p>{props.videoFeed.time}</p>
                        <button className="ui primary button" style={{background:"red", width:"185%"}} onClick={onClickButton}>
                            Remove Event
                        </button>
                    </div>
                </div>
                <div className="card" style={{margin: "10px", borderRadius:"10px"}}>
                    <div className="image">
                        <MemoMyMapBox long={props.videoFeed.long} lat={props.videoFeed.lat} />
                    </div>
                </div>
            </div>
    );
}