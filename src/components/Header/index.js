import Button from '../Button';
import logo from '../../assets/images/logo.svg';
import './index.css';

function Header() {
  return (
    <header className="header">
      <div className="container">
        <nav className="header__nav">
          <div>
            <img src={logo} alt="logo" />
          </div>
          <div>
            <Button>Start Now</Button>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Header;
