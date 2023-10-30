import Video from "../Video/Video";
import "./Videos.scss";
import { Link } from "react-router-dom";

function Videos({ videos }) {
    console.log('something: ', videos)
    if (!videos) {
        return null; 
      }
  return (
    <section className="videos__container">
        <h2 className='videos'>NEXT VIDEOS</h2>
        {videos.map((displayedVid) => {
            return (
        
      <Link className="videos__link" to={`/videos/${displayedVid.id}`} key={displayedVid.id}>
        <section className="videos__box" key={displayedVid.id} />
        <img className="videos__img" src={displayedVid.image} alt="linked video thumbnails"
        />
        <section className="videos__container-1">
          <p className="videos__title">{displayedVid.title}</p>
          <p className="videos__user">{displayedVid.channel}</p>
        </section>
      </Link>
            );
            })}
    </section>
  );
}

export default Videos;
