import './Header.scss';
import brainLogo from '../../assets/Logo/BrainFlix-logo.svg';
import avatar from '../../assets/Images/Mohan-muruge.jpg';
import search from '../../assets/Icons/search.svg';

function Header() {
    return (
        <nav className="navi">
            <img className='navi__logo' alt='logo for brainflix' src={brainLogo}/>
            <div className='navi__block'>
                <div className='navi__box'>
                <img className='navi__icon' alt='search icon' src={search}/>
                <form className='navi__form'>
                    <input className='navi__input' >
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