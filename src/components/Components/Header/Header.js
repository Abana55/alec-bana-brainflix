import './Header.scss';
import brainLogo from '../../../assets/Logo/BrainFlix-logo.svg';


function Header(props) {
    return (
        <header className="header">
            <img src={brainLogo} alt="logo for BrainFlix"/>
            <nav className="header__links header__links--left">
                <form>
                    <input>
                    </input>
                </form>
                nav
            </nav>
            <div className="header__logo">
                {props.logo}
            </div>
            <div className="header__links header__links--right">
                <input className="search" placeholder="Search..." />
                <p className="lastPressed"></p>
            </div>
        </header>
    );
}

export default Header;
