import './Header.scss';
import brainLogo from '../../assets/Logo/BrainFlix-logo.svg';
import avatar from '../../assets/Images/Mohan-muruge.jpg';

function Header() {
    return (
        <nav className="navi">
            <img className='navi__logo' alt='logo for brainflix' src={brainLogo}/>
            <div className='navi__block'>
                <div className='navi__box'>
                <form className='navi__form'>
                    <input className='navi__input'>
                    </input>
                </form>
                <img className='navi__user' alt='user profile' src={avatar}/>
                </div>
                <button className='navi__button'>UPLOAD</button>
            </div>
        </nav> 
    )
}

export default Header;