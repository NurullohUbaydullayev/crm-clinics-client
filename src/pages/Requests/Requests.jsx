import "./Requests.css";
import React, { useEffect, useState } from "react";
import moment from "moment";

const Requests = () => {
  const token = window.localStorage.getItem("auth_token");
  const [requests, setRequests] = useState([]);

  useEffect(async () => {
    moment.locale("uz-latn");
    const res = await fetch(`http://localhost:9000/users/orders`, {
      method: "GET",
      headers: { "Content-Type": "application/json", token: token },
    });
    const data = await res.json();
    setRequests(data);
  }, []);
  return (
    <>
      <div>
        <ul className="requests">
          {requests.length > 0 &&
            requests.map(row => (
              <li className="request" key={row.request_id}>
                <p>
                  Order time:{" "}
                  {moment(`${row.request_time}`).locale("uz-latn").format("LLL")}
                </p>
                <p>Order number: {row.request_order}</p>
                <p>User name: {row.user_name}</p>
                <p>User phone: {row.user_phone}</p>
                <p>{row.is_approved ? "Tasdiqlandi!!!" : "Tasdiqlanmagan"}</p>
              </li>
            ))}
        </ul>
      </div>
    </>
  );
};

export default Requests;
