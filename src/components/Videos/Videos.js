import Video from '../Video/Video';
import './Videos.scss';
import { Link } from 'react-router-dom';

function Videos({videos, onVideoselect}) {

    return (
        <section className='videos__container'>
        <h2 className='videos'>NEXT VIDEOS</h2>
        {videos.map(tehe => (
        <Link to={`/video/${Video.id}`}>
        <section className='videos__box' key={tehe.id} onClick={()=>onVideoselect(tehe)}/>
            <img className='videos__img' src={tehe.image} alt='linked video thumbnails'/>
            <section className='videos__container-1'>
                <p className='videos__title'>{tehe.title}</p>
                <p className='videos__user'>{tehe.channel}</p>
            </section>
            </Link>
            
        ))}
        </section>
    )
}

export default Videos