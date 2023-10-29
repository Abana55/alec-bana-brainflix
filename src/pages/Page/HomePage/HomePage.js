import "./HomePage.scss";
import Main from "../../../components/Main/Main";
import Header from "../../../components/Header/Header";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import Video from '../../../components/Video/Video';
import VideoDetails from '../../../components/VideoDetails/VideoDetails';
import Comments from '../../../components/Comments/Comments';
import Videos from '../../../components/Videos/Videos';

function HomePage() {
  //
  let apiKey = "f19305d5-5cbd-49ac-8870-e288c3efefea";
  const { idFromParams } = useParams();

  const [videos, setVideos] = useState([]);

  let blackVidId = null;

  if (videos.length > 0) {
    blackVidId = videos[0].id;
  }

  let vidToDisplay = idFromParams ?? blackVidId;

  const filteredVideo = videos.filter((video) => video.id !== vidToDisplay);

  useEffect(() => {
    async function pullVideo() {
      try {
        const response = await axios.get(
          `https://project-2-api.herokuapp.com/videos/?api_key=${apiKey}`
        );
        setVideos(response.data);
      } catch (error) {}
      pullVideo();
    }
  }, []);

  return (
    <>
      <Header />
      <main>
        {/* <Video videoInfo={vidToDisplay.image} /> */}
        <section className="main">
          <section className="main__box">
            {/* <VideoDetails videoInfo={vidToDisplay} />
            <Comments videoInfo={vidToDisplay} /> */}
          </section>
          <Videos videos={filteredVideo} onVideoselect={vidToDisplay} />
        </section>
      </main>
    </>
  );
}

export default HomePage;
