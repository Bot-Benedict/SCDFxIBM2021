import React, {useState, useEffect} from 'react';
import './App.css';
import videoFeedsDatabase from './videoFeedDatabase.json';
import Emergency from './Containers/Emergency';
import NonEmergency from './Containers/NonEmergency';
import VideoFeed from './Model/VideoModel';
import 'semantic-ui-css/semantic.min.css';
import 'mapbox-gl/dist/mapbox-gl.css';
import StatisticDisplay from './Components/StatisticsDisplay';
import Header from "./Components/Header";

var something = true;

function App() {
  const [incidentList, setIncidentList] = useState<VideoFeed[]>([]);
  const [numIncidents, setNumIncidents] = useState<number>(7);

  const removeEmergencyItemHandler = async(cameraid:number) =>{
    setIncidentList(incidentList.slice().filter((item)=>item.cameraId!==cameraid));
    return;
  }

  useEffect(() => {
    // startTriggeringAPICalls();
  }, []);

  if (incidentList.length === 0) {
    return <NonEmergency eventDetectedHandler={(cameraId: number, offset: number, imageBlob: Blob, event: string, imageURL: string) => {
      const videoFeed = videoFeedsDatabase.videoFeed.filter((item)=>{
          return cameraId===item.cameraId;
      })[0];
      if (something) {
        setNumIncidents(numIncidents+1);
        videoFeed.imageURL = imageURL;
        videoFeed.event = event;
        videoFeed.timeoffset = offset;
        setIncidentList([...incidentList,videoFeed]);
        something = false;
      }
      //console.log("need to set state, append to incident list using this camera id")
    }}/>;
  }
  return (
    
      <Emergency videoFeeds={incidentList} removeEmergencyItemHandler={removeEmergencyItemHandler} numIncidents={numIncidents}/>
    
  );


  // async function startTriggeringAPICalls() {
  //   incidentList.forEach((item) => {
  //     // call api based on item id;
  //     // get the response item
  //     // if got event, append to the incidentlist
  //   });
  //   await sleep(10);
  //   startTriggeringAPICalls();
  // }
}

function sleep(s: number) {
  return new Promise(resolve => setTimeout(resolve, s * 1000));
}

export default App;
