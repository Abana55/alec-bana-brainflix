import './Videos.scss';

function Videos({compVids}) {

    return (
        <>
        <h2 className='videos'>NEXT VIDEOS</h2>
        {compVids.map((tehe) =>
        <section className='videos__box'>
            <img className='videos__img' src={tehe.image} alt='linked video thumbnails'/>
            <section className='videos__container'>
                <p className='videos__title'>{tehe.title}</p>
                <p className='videos__user'>{tehe.channel}</p>
            </section>
        </section>

        )}
        </>
    )
}

export default Videos