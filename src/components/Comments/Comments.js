import './Comments.scss';
import avatar from '../../assets/Images/Mohan-muruge.jpg';

function Comments({videoInfo}) {

    return(
        <section className='comment'>
            <section className='comment__form'>
                <img className='comment__user' alt='user profile' src={avatar} />
                <form>
                    <label>JOIN THE CONVERSATION</label>
                    <input className='comment__input' placeholder="Add a new Comment"></input>
                    <button className='comment__button'>COMMENT</button>
                </form>
            </section>
            <section>
                {videoInfo.comments.map ((comments => 
                    <div>
                        <div>{comments.name}</div>
                        <div>{comments.timestamp}</div>
                        <div>{comments.comment}</div>
                    </div>
                ))}
                
            </section>
        </section>
    )
}


export default Comments;