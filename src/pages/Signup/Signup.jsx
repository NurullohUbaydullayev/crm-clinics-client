import "./Signup.css";
import { NavLink, useNavigate } from "react-router-dom";
import { useEffect, useRef, useState } from "react";

const SignUp = () => {
  const navigate = useNavigate();
  const nameInputEl = useRef(null);
  const loginInputEl = useRef(null);
  const passwordInputEl = useRef(null);
  const phoneInputEl = useRef(null);
  const [warning, setWarning] = useState("");

  useEffect(() => {}, [warning]);

  const handleSubmit = async e => {
    e.preventDefault();

    const res = await fetch("http://localhost:9000/newUser", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        userName: nameInputEl.current.value,
        userLogin: loginInputEl.current.value,
        userPassword: passwordInputEl.current.value,
        userPhone: phoneInputEl.current.value,
      }),
    });

    if (res.status == 200) {
      navigate("/login");
    } else {
      setWarning("Something is incorrect, please try again");
    }

    const data = await res.json();
  };

  return (
    <>
      <div className="signup">
        <div className="container">
          <h2>Sign Up</h2>
          <form className="signup__form" onSubmit={handleSubmit}>
            <input
              ref={nameInputEl}
              className="signup__input"
              type="text"
              placeholder="Your name..."
              required
            />
            <input
              ref={loginInputEl}
              className="signup__input"
              type="text"
              placeholder="Login..."
              required
            />
            <input
              ref={passwordInputEl}
              className="signup__input"
              type="password"
              placeholder="Password..."
              required
            />
            <input
              ref={phoneInputEl}
              className="signup__input"
              type="tel"
              placeholder="Phone number..."
              required
            />
            <button className="submit__btn" type="submit">
              Submit
            </button>
          </form>

          <h3>{warning}</h3>

          <h3 className="signup__warn">
            If you have already account, please go to{" "}
            <NavLink to="/login">Log in</NavLink>
          </h3>
        </div>
      </div>
    </>
  );
};

export default SignUp;
