import './VideoDetails.scss';
import Likes from '../../assets/Icons/likes.svg';
import Views from '../../assets/Icons/views.svg';

function VideoDetails({videoInfo}){
    return(
        <section className='info'>
            <section>
                <h1 className='info__title'>{videoInfo.title}</h1>
            </section>
            <section>
                <p>{videoInfo.channel}</p>
                <p>{videoInfo.timestamp}</p>
                <img src={Views} alt="icon"/>
                <p>{videoInfo.views}</p>
                <img src={Likes} alt="icon"/>
                <p>{videoInfo.likes}</p>
            </section>
            <section>
                <p className='description'>{videoInfo.description}</p>
            </section>
        </section>

    )
}

export default VideoDetails;