import "./Header.css";
import { NavLink } from "react-router-dom";

// Images
import Logo from "../../Assets/Images/logo.png";

const Header = () => {
  return (
    <>
      <header className="header">
        <NavLink className="header__logo" to="/">
          <img
            className="header__logo-img"
            src={Logo}
            alt="Logo"
            width="160"
            height="40"
          />
        </NavLink>

        <nav className="header__nav">
          <ul className="header_nav-list">
            <li className="header__list-item">
              <NavLink className="header__link" to="/">
                Home
              </NavLink>
            </li>

            <li className="header__list-item">
              <NavLink className="header__link" to="/signup">
                Sign up
              </NavLink>
            </li>

            <li className="header__list-item">
              <NavLink className="header__link" to="/login">
                Log in
              </NavLink>
            </li>

            <li className="header__list-item">
              <NavLink className="header__link" to="/profile">
                Profile
              </NavLink>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Header;
