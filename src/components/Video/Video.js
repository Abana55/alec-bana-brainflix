import './Video.scss';


function Video({displayedVid}) {
    return (
        <section className='hero'>
        <video className='hero__video' controls poster={displayedVid.image}></video>
        </section>
    )
}

export default Video;