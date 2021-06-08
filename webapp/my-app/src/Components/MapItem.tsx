import { useState } from 'react';
import ReactMapGL, {Marker} from 'react-map-gl';
import Pin from "./../assets/pin-removebg.png";

//https://github.com/urbica/react-map-gl
export default function MapItem(){
    const [viewport, setViewport] = useState({
        width: 500,
        height: 500,
        latitude: 1.3371997449799862,
        longitude: 103.70782634967432,
        zoom: 15
      });
    
      return (
        <ReactMapGL {...viewport}
            mapboxApiAccessToken="pk.eyJ1Ijoia2x1bXB0ZWQiLCJhIjoiY2twbnloNTQzMWN5aTJ2cnhkbmR3MWE1dyJ9.mak9Yh7aiyOFi78f8lmFng"
            mapStyle='mapbox://styles/mapbox/light-v9'
            >
             <Marker latitude={viewport.latitude} longitude={viewport.longitude} offsetLeft={250} offsetTop={250}>
                <div style={{color:"red", fontWeight:"bold"}}>Emergency Point</div>
                <img src={Pin} style={{width:"20%",height:"20%"}} alt="pin" />
            </Marker>
        </ReactMapGL>
      );
}