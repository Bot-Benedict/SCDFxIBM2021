import React from 'react';
import CSS from 'csstype';
import ReactPlayer from "react-player";
import axios from 'axios';
import { sleep } from '../Util/utilFunctions';


type MonitoringVideoFileProp = {
    assetPath: string,
    offset: number,
    cameraId: number,
    eventDetectedHandler: (cameraId: number, offset: number, imageBlob: Blob, eventType: string, imageURL: string ) => void
}

export default function MonitoringVideoFile(props: MonitoringVideoFileProp){

    const currentVideoOffset: any = React.useRef(0);
    var videoElement: any = null;
    const [someState, setSomeState] = React.useState(false);
    const setVideoReference = (element: any) => {
        if (element) {
            videoElement = element.getInternalPlayer();
            captureFrameAndUploadToAPI();
        }
    };

    const captureFrameAndUploadToAPI = async () => {
        await sleep(props.cameraId % 10);
        console.log("uploading image??");
        while (true) {
            const frame: any = captureVideoFrame(videoElement);
            const formData = new FormData();
            const currentDateTime = Date.now().toString();
            if (!frame) {
                console.log(`frame: ${frame}`);
                await sleep(2);
                continue;
            }
            formData.append(
                "file",
                frame.blob,
                `feedImage-${props.cameraId}-${currentDateTime}.jpeg`
            );
            console.log(`feedImage-${props.cameraId}-${currentDateTime}.jpeg`);
            const header = {"Access-Control-Allow-Origin": "*"}
            const response = await axios.post("http://localhost:5000/uploader", formData, {headers: header});
            console.log(response.data);
            if (response.data === "none") {
                // do nothing
                console.log("it is none!!!!!!");
            } else {
                const event = response.data;
                console.log(event);
                const name = `feedImage-${props.cameraId}-${currentDateTime}.jpeg`;
                props.eventDetectedHandler(props.cameraId, currentVideoOffset.current, frame.blob, event, `//localhost:5000/${name}`);
                break;
            }

            //image url is: http://localhost:5000/static/`feedImage-${props.cameraId}-${currentDateTime}.jpeg`
            await sleep(3);
            currentVideoOffset.current = currentVideoOffset.current + 10;
        }
    }

    React.useEffect(() => {
        setTimeout(() => {
            setSomeState(true);
        }, 2000)
    });

    return (
        <ReactPlayer
            style={mainComponentStyle}
            ref={setVideoReference}
            className='react-player fixed-bottom'
            url={props.assetPath}
            controls={true}
            playing={true}
            muted={true}
            width={"match_parent"}
            config={{ file: { attributes: {
                crossorigin: 'anonymous'
            }}}}
        />
    );
}


const mainComponentStyle: CSS.Properties = {
    backgroundColor: "black",
    height: "500px",
    width: "500px"
}

function captureVideoFrame(video: any, format?: any, quality?: any) {
    if (typeof video === 'string') {
        video = document.getElementById(video);
    }

    format = format || 'jpeg';
    quality = quality || 0.92;

    if (!video || (format !== 'png' && format !== 'jpeg')) {
        return false;
    }

    var canvas: any = document.createElement("CANVAS");

    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;

    canvas.getContext('2d').drawImage(video, 0, 0);

    var dataUri = canvas.toDataURL('image/' + format, quality);
    var data = dataUri.split(',')[1];
    var mimeType = dataUri.split(';')[0].slice(5)

    var bytes = window.atob(data);
    var buf = new ArrayBuffer(bytes.length);
    var arr = new Uint8Array(buf);

    for (var i = 0; i < bytes.length; i++) {
        arr[i] = bytes.charCodeAt(i);
    }

    var blob = new Blob([ arr ], { type: mimeType });
    return { blob: blob, dataUri: dataUri, format: format };
};

  