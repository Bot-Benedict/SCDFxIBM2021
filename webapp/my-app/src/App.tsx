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

function App() {
  const [incidentList, setIncidentList] = useState<VideoFeed[]>(videoFeedsDatabase.videoFeed);

  const removeEmergencyItemHandler = async(cameraid:number) =>{
    setIncidentList(incidentList.slice().filter((item)=>item.cameraId!==cameraid));
    return;
  }

  useEffect(() => {
    startTriggeringAPICalls();
  }, []);

  if (incidentList.length !== 0) {
    return <NonEmergency eventDetectedHandler={(cameraId) => console.log("need to set state, append to incident list using this camera id")}/>;
  }
  return (
    <div style={{backgroundColor:"red"}}>
      <Header/>
      <StatisticDisplay/>
      <Emergency videoFeeds={incidentList} removeEmergencyItemHandler = {removeEmergencyItemHandler}/>;
    </div>
  );


  async function startTriggeringAPICalls() {
    incidentList.forEach((item) => {
      // call api based on item id;
      // get the response item
      // if got event, append to the incidentlist
    });
    await sleep(10);
    startTriggeringAPICalls();
  }
}

function sleep(s: number) {
  return new Promise(resolve => setTimeout(resolve, s * 1000));
}

export default App;
