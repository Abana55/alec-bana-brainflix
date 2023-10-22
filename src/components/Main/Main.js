import VideoDescription from '../../data/video-details.json';
import smallJson from '../../data/videos.json';
import './Main.scss';
import Video from '../Video/Video';
import VideoDetails from '../VideoDetails/VideoDetails';
import Comments from '../Comments/Comments';
import Videos from '../Videos/Videos';
import { useState } from 'react';


function Main() {

    const [videoInfo, setVideoInfo] = useState(VideoDescription[0]) 

    const compVids = smallJson.filter((smallJson) => smallJson.id !== videoInfo.id);

    return (
    <main>
        <Video videoInfo={videoInfo.image} />
        <VideoDetails videoInfo={videoInfo} />
        <Comments videoInfo={videoInfo}/>
        <Videos compVids={compVids}/>
    </main>
)};

export default Main