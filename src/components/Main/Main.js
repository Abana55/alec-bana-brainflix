import VideoDescription from '../../data/video-details.json';
import SmallJson from '../../data/videos.json';
import './Main.scss';
import Video from '../Video/Video';
import VideoDetails from '../VideoDetails/VideoDetails';
import Comments from '../Comments/Comments';
import Videos from '../Videos/Videos';
import { useState } from 'react';


function Main() {

    const [videoInfo, setVideoInfo] = useState(VideoDescription[0]) 

    // const Compressvids = videoInfo.filter((SmallJson) => SmallJson.id !== videoInfo.id);

    return (
    <main>
        <Video videoInfo={videoInfo.image} />
        <VideoDetails videoInfo={videoInfo} />
        <Comments videoInfo={videoInfo}/>
    </main>
)};

export default Main