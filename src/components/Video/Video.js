import './Video.scss';


function Video({videoInfo}) {
    return (
        <section className='hero'>
        <video className='hero__video' controls poster={videoInfo}></video>
        </section>
    )
}

export default Video;