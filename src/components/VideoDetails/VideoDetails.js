import './VideoDetails.scss';
import Likes from '../../assets/Icons/likes.svg';
import Views from '../../assets/Icons/views.svg';

function VideoDetails({videoInfo}){
    return(
        <section className='info'>
            <section>
                <h1 className='info__title'>{videoInfo.title}</h1>
            </section>
            <section className='info__section'>
                <section className='info__box'>
                    <p className='info__user'>By {videoInfo.channel}</p>
                    <p className='info__number'>{new Date(videoInfo.timestamp).toLocaleDateString()}</p>
                </section>
                <section className='info__box-2'>
                    <div className='info__data'>
                        <img className='info__icon-1' src={Views} alt="icon"/>
                        <p className='info__number'>{videoInfo.views}</p>
                    </div>
                    <div className='info__data'>
                        <img className='info__icon-2' src={Likes} alt="icon"/>
                        <p className='info__number'>{videoInfo.likes}</p>
                    </div>
                </section>
            </section>
            <section>
                <p className='info__description'>{videoInfo.description}</p>
            </section>
        </section>
    )
}

export default VideoDetails;