import React, { useState, useEffect, useRef } from "react";
import { NavLink, useNavigate } from "react-router-dom";

const LogIn = () => {
  const navigate = useNavigate();
  const loginInputEl = useRef(null);
  const passwordInputEl = useRef(null);
  const [warning, setWarning] = useState("");

  useEffect(() => {}, [warning]);

  const handleSubmit = async e => {
    e.preventDefault();

    const res = await fetch("http://localhost:9000/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        userLogin: loginInputEl.current.value,
        userPassword: passwordInputEl.current.value,
      }),
    });

    if (res.status == 400) {
      setWarning("Login or password is incorrect");
    }

    const { token } = await res.json();
    if (token) {
      window.localStorage.setItem("auth_token", token);
      navigate("/");
    }
  };

  return (
    <>
      <div className="signup">
        <div className="container">
          <h2>Sign Up</h2>
          <form className="signup__form" onSubmit={handleSubmit}>
            <input
              ref={loginInputEl}
              className="signup__input"
              type="text"
              placeholder="Your login..."
            />
            <input
              ref={passwordInputEl}
              className="signup__input"
              type="password"
              placeholder="Password..."
            />

            <button className="submit__btn" type="submit">
              Submit
            </button>
          </form>

          <h3 className="signup__warn">
            If you have not yet account, please go to{" "}
            <NavLink to="/signup">Sign Up</NavLink>
          </h3>
        </div>
      </div>
    </>
  );
};

export default LogIn;
