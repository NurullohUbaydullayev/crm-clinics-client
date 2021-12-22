import "./Home.css";
import { NavLink } from "react-router-dom";

// Images
import IntroImg from "../../Assets/Images/intro.png";

const HomePage = () => {
  return (
    <>
      <div className="intro">
        <div className="container">
          <div className="intro__left">
            <h1 className="intro__heading">Virtual healthcare for you</h1>
            <p className="intro__text">
              Trafalgar provides progressive, and affordable healthcare, accessible on
              mobile and online for everyone
            </p>
            <NavLink className="signup-link" to="signup">
              Sign Up
            </NavLink>
          </div>

          <img
            className="intro__img"
            src={IntroImg}
            alt="Intro Img"
            width="693"
            height="600"
          />
        </div>
      </div>
    </>
  );
};

export default HomePage;
