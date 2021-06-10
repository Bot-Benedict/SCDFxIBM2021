type VideoFeed = {
    cameraId: number,
    location: string | null,
    event: string | null, 
    time: string | null, 
    videoAssetPath: string,
    lat: number,
    long: number 
};

export default VideoFeed;