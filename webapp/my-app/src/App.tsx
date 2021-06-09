import React, {useState, useEffect} from 'react';
import './App.css';
import videoFeedsDatabase from './videoFeedDatabase.json';
import Emergency from './Containers/Emergency';
import NonEmergency from './Containers/NonEmergency';
import VideoFeed from './Model/VideoModel';
import 'semantic-ui-css/semantic.min.css';



function App() {
  const [incidentList, setIncidentList] = useState<VideoFeed[]>([]);

  useEffect(() => {
    startTriggeringAPICalls();
  }, []);

  if (incidentList.length !== 0) {
    return <NonEmergency eventDetectedHandler={(cameraId) => console.log("need to set state, append to incident list using this camera id")}/>;
  }
  return <Emergency videoFeeds={incidentList}/>;


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
