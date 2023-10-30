import "./HomePage.scss";
import Header from "../../../components/Header/Header";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import VideoDetails from '../../../components/VideoDetails/VideoDetails';
import Comments from '../../../components/Comments/Comments';
import Videos from '../../../components/Videos/Videos';
import Video from "../../../components/Video/Video";

function HomePage() {
    const[displayedVid, setDisplayedVid] = useState([])
    const[videos, setVideos] = useState([])

    const filterVideos = videos.filter(video => video.id !== displayedVid.id)
    console.log('filtered videos: ', filterVideos)
    
  const handleSelectVideo = (video) => {
    setDisplayedVid(video)
  }
  

  let apiKey = "f19305d5-5cbd-49ac-8870-e288c3efefea";
  const { id } = useParams();
  useEffect(() => {
    async function meeple() {
      const response = await axios.get(`https://project-2-api.herokuapp.com/videos?api_key=${apiKey}`)
      setVideos(response.data)
      if (response.data.length > 0) {
        const firstVid = response.data[0].id;
        const responseFirstVid = await axios.get(`https://project-2-api.herokuapp.com/videos/${firstVid}?api_key=${apiKey}`)
        setDisplayedVid(responseFirstVid.data);
      }
    }
    meeple();
  },[])

  useEffect(() => {
    async function pullVideoById() {
        console.log('andrea')
      if(id && id !== displayedVid.id){
    const response =await axios.get(`https://project-2-api.herokuapp.com/videos/${id}?api_key=${apiKey}`)
        
     setDisplayedVid(response.data)
        
       
      }
    }
    pullVideoById();
  }, [id]);

  return (
    <>
      <Header />
      <main>
        <Video displayedVid={displayedVid} />
        <section className="main">
          <section className="main__box">
            <VideoDetails videoInfo={displayedVid} />
            <Comments comments={displayedVid?.comments || []} />
          </section>
          <Videos videos={filterVideos} onSelectVideo={handleSelectVideo}/>
        </section>
      </main>
    </>
  );
}

export default HomePage;
