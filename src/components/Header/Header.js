import './Header.scss';
import brainLogo from '../../assets/Logo/BrainFlix-logo.svg';
import avatar from '../../assets/Images/Mohan-muruge.jpg';

function Header() {
    return (
        <nav className="navi">
            <img alt='logo for brainflix' src={brainLogo}/>
            <div>
                <form>
                    <input>
                    </input>
                </form>
                <button>UPLOAD</button>
            </div>
            <img alt='user profile' src={avatar}/>
        </nav> 
    )
}

export default Header;