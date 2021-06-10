import React from 'react';
import CSS from 'csstype';
import ReactPlayer from "react-player";
import axios from 'axios';
import { sleep } from '../Util/utilFunctions';


type MonitoringVideoFileProp = {
    assetPath: string,
    offset: number,
    cameraId: number,
    eventDetectedHandler: (cameraId: number) => void
}

export default function MonitoringVideoFile(props: MonitoringVideoFileProp){

    var videoElement: any = null;
    const hasAlreadyOffset: any = React.useRef(false);
    const setVideoReference = (element: any) => {
        if (element) {
            videoElement = element.getInternalPlayer();
        }
    };

    const captureFrameAndUploadToAPI = async () => {
        while (true) {
            const frame: any = captureVideoFrame(videoElement);
            const formData = new FormData();
            formData.append(
                "file",
                frame.blob,
                `feedImage-${Date.now().toString()}.jpeg`
            );
            const header = {"Access-Control-Allow-Origin": "*"}
            await axios.post("http://localhost:5000/uploader", formData, {headers: header});
            await sleep(10);
        }
    }

    React.useEffect(() => {
        setTimeout(() => {
            if (videoElement && !hasAlreadyOffset.current) {
                videoElement.currentTime = props.offset;
                hasAlreadyOffset.current = true;
                captureFrameAndUploadToAPI();
            }
        }, 800);
        // setTimeout(() => {
        //     props.eventDetectedHandler(props.cameraId);
        // }, 10000)
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

  