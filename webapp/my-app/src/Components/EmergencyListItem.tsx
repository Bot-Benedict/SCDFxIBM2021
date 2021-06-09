import React from 'react';
import VideoFeed from '../Model/VideoModel';
import Fire from './../assets/fire.jpg';
import MapItem from './MapItem';

type EmergencyListItemProps = {
    videoFeed: VideoFeed
}
export default function EmergencyListItem(){

//export default function EmergencyListItem(props: EmergencyListItemProps){
    return(
        <div className="card" style={{backgroundColor:"grey", margin:"70px", borderRadius:"10px", padding:"40px"}}>
            <div className="ui three stackable cards">
                <div style={{display:"flex", flexDirection:"row", margin:"0px", padding:"0px"}}>
                    <div className="card" style={{width:"300px", height:"300px"}}>
                        <div className="image" style={{width:"300px", height:"300px"}}>
                        <img src={Fire} alt="fire" style={{width:"300px", height:"300px"}}/>
                        </div>
                    </div>
                    <div className="card" style={{width:"300px", height:"300px"}}>
                        <div className="image" style={{width:"300px", height:"300px"}}>
                        <img src={Fire} alt="fire"style={{width:"300px", height:"300px"}} />
                        </div>
                    </div>
                </div>
                    <div className="card">
                        <div className="image">
                        <MapItem/>
                        </div>
                    </div>
            </div>
        </div>
    );
}