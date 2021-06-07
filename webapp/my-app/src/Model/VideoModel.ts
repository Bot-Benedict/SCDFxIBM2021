type VideoFeed = {
    cameraId: number,
    location: string | null,
    event: string | null, 
    time: Date | null, 
    videoAssetPath: string
};

export default VideoFeed;