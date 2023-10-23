import "./Comments.scss";
import avatar from "../../assets/Images/Mohan-muruge.jpg";

function Comments({ videoInfo }) {
  return (
    <section className="comment">
      <section>
      <p className="comment__counter">{videoInfo.comments.length} Comments</p>
      </section>
      <section className="comment__form">
        <img className="comment__user" alt="user profile" src={avatar} />
        <form className="comment__box">
          <section className="comment__conversation">
          <label className="comment__label">JOIN THE CONVERSATION</label>
          <input className="comment__input" placeholder="Add a new Comment"></input>
          </section>
          <button className="comment__button">COMMENT</button>
        </form>
      </section>
      <section className="comment__loop">
        {videoInfo.comments.map((comments) => (
          <section className="comment__section">
            <div className="comment__avatar"></div>
            <section className="comment__fill">
              <section className="comment__container">
                <h3 className="comment__name">{comments.name}</h3>
                <p className="comment__date">{new Date(comments.timestamp).toLocaleDateString()}</p>
              </section>
              <p className="comment__para">{comments.comment}</p>
            </section>
          </section>
        ))}
      </section>
    </section>
  );
}

export default Comments;
