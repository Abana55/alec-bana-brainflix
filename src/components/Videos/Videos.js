import './Videos.scss';

function Videos({compVids}) {

    return (
        <>
        <h2>NEXT VIDEOS</h2>
        {compVids.map((tehe) =>
        <section>
            <img src={tehe.image} alt='linked video thumbnails'/>
            <p>{tehe.title}</p>
            <p>{tehe.channel}</p>
        </section>

        )}
        </>
    )
}

export default Videos