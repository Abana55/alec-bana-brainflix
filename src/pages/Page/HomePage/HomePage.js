import "./HomePage.scss";
import Header from "../../../components/Header/Header";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import VideoDetails from "../../../components/VideoDetails/VideoDetails";
import Comments from "../../../components/Comments/Comments";
import Videos from "../../../components/Videos/Videos";
import Video from "../../../components/Video/Video";

function HomePage() {
  const [displayedVid, setDisplayedVid] = useState([]);
  const [videos, setVideos] = useState([]);

  const { id } = useParams();

  let defaultVid = null;

  if (videos.length > 0) {
    defaultVid = videos[0].id;
  }
  let vidIdToDisplay = id ?? defaultVid;

  const filterVideos = videos.filter((video) => video.id !== vidIdToDisplay);
  const handleSelectVideo = (video) => {
    setDisplayedVid(video);
  };

  useEffect(() => {
    async function meeple() {
      const response = await axios.get(`http://localhost:8080/videos`);
      setVideos(response.data);
      if (response.data.length > 0) {
        const firstVid = response.data[0].id;
        const responseFirstVid = await axios.get(
          `http://localhost:8080/videos/${firstVid}`
        );
        setDisplayedVid(responseFirstVid.data);
      }
    }
    meeple();
  }, []);

  useEffect(() => {
    if (id) {
      const pullVideoById = async () => {
        const response = await axios.get(`http://localhost:8080/videos/${id}`);
        setDisplayedVid(response.data);
        console.log('fix' ,response.data)
      };
      pullVideoById();
    }
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
          <Videos videos={filterVideos} onSelectVideo={handleSelectVideo} />
        </section>
      </main>
    </>
  );
}

export default HomePage;
