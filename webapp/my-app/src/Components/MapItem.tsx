import React, { useState } from 'react';
import ReactMapGL, {Marker} from 'react-map-gl';
import Pin from "./../assets/pin-removebg.png";

//https://github.com/urbica/react-map-gl
export default function MapItem(props:any){
    const [viewport, setViewport] = useState({
        width: 500,
        height: 500,
        latitude: props.lat,
        longitude: props.long,
        zoom: 15
      });

      return (
        <ReactMapGL 
            {...viewport}
            mapboxApiAccessToken="pk.eyJ1Ijoia2x1bXB0ZWQiLCJhIjoiY2twbnloNTQzMWN5aTJ2cnhkbmR3MWE1dyJ9.mak9Yh7aiyOFi78f8lmFng"
            mapStyle='mapbox://styles/mapbox/light-v9' style={{borderColor:"grey", borderWidth:"medium", borderStyle:"solid"}}
            >
              
             <Marker latitude={viewport.latitude} longitude={viewport.longitude} offsetLeft={250} offsetTop={250} 
              draggable={true} capturePointerMove={true} captureScroll={true}
             >
                <div style={{color:"red", fontWeight:"bold"}}>Emergency Point</div>
                <img src={Pin} style={{width:"20%",height:"20%",}} alt="pin" />
            </Marker>
        </ReactMapGL>
      );
}