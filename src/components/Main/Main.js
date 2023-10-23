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
    const [videos, setVideos] = useState(VideoDescription)

    const compVids = videos.filter(video => video.id !== videoInfo.id);

    const handleVideoSelect = (video) => {setVideoInfo(video)};

    return (
    <main>
        <Video videoInfo={videoInfo.image} />
        <section className='main'>
            <section className='main__box'>
                <VideoDetails videoInfo={videoInfo} /> 
                <Comments videoInfo={videoInfo}/>
            </section>    
        <Videos videos={compVids} onVideoselect={handleVideoSelect}/>
        </section>
    </main>
)};

export default Main