import "./Order.css";
import React, { useEffect, useRef, useState } from "react";
import { useNavigate, NavLink } from "react-router-dom";

const Profile = () => {
  const [message, setMessage] = useState("");
  const nameInput = useRef(null);
  const phoneNumberInput = useRef(null);
  const directionSelect = useRef(null);
  const [directions, setDirections] = useState([]);
  const navigate = useNavigate();
  const token = window.localStorage.getItem("auth_token");
  useEffect(async () => {
    if (token) {
      const res = await fetch("http://localhost:9000/directions", {
        method: "GET",
        headers: { "Content-Type": "application/json", token: token },
      });
      const data = await res.json();
      setDirections([...data]);
    } else {
      navigate("/login");
    }
  }, []);

  const handleOrderSubmit = async e => {
    e.preventDefault();
    console.log(
      nameInput.current.value,
      phoneNumberInput.current.value,
      directionSelect.current.value
    );
    const res = await fetch("http://localhost:9000/users/order", {
      method: "POST",
      headers: { "Content-Type": "application/json", token: token },
      body: JSON.stringify({
        userName: nameInput.current.value,
        userPhone: phoneNumberInput.current.value,
        serviceType: directionSelect.current.value,
      }),
    });
    const data = await res.json();
    if (data) {
      setMessage("Muvaffaqiyatli yuborildi");
    }
  };

  return (
    <>
      <div className="order-page">
        <div className="container">
          <NavLink to="/requests">My Requests</NavLink>
          <form className="order__form" onSubmit={handleOrderSubmit}>
            <input
              required
              ref={nameInput}
              className="order__input"
              type="text"
              placeholder="Your username..."
            />
            <input
              required
              ref={phoneNumberInput}
              className="order__input"
              type="tel"
              placeholder="Your phone number..."
            />

            <select ref={directionSelect} id="service_type">
              {directions.length > 0 &&
                directions.map(row => (
                  <option key={row.service_id} value={row.service_id}>
                    {row.service_name}
                  </option>
                ))}
            </select>

            <button className="order__submit" type="submit">
              Submit
            </button>
          </form>

          <h3>{message}</h3>
        </div>
      </div>
    </>
  );
};

export default Profile;
