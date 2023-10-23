import './Videos.scss';

function Videos({videos, onVideoselect}) {

    return (
        <section className='videos__container'>
        <h2 className='videos'>NEXT VIDEOS</h2>
        {videos.map(tehe => (
        <section className='videos__box' key={tehe.id} onClick={()=>onVideoselect(tehe)}>
            <img className='videos__img' src={tehe.image} alt='linked video thumbnails'/>
            <section className='videos__container-1'>
                <p className='videos__title'>{tehe.title}</p>
                <p className='videos__user'>{tehe.channel}</p>
            </section>
        </section>

        ))}
        </section>
    )
}

export default Videos