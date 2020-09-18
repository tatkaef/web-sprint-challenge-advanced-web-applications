import React, { useState } from "react";
import AxiosWithAuth from "../utils/AxiosWithAuth";
import { useHistory } from "react-router-dom";

const Login = (props) => {
  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route
  const [form, setForm] = useState({
    username: "",
    password: "",
  });
  const history = useHistory();

  const hahdleSubmit = (e) => {
    e.preventDefault();
    AxiosWithAuth()
      .post("/api/login", form)
      .then((res) => {
        localStorage.setItem("token", res.data.payload);
        history.push("/colors");
        console.log("Login res:", res);
      })
      .catch((err) => console.log("Login error:", err));
  };

  return (
    <>
      <h1>Welcome to the Bubble App!</h1>
      <form onSubmit={hahdleSubmit}>
        <input
          onChange={(e) => setForm({ ...form, username: e.target.value })}
        />
        <input
          onChange={(e) => setForm({ ...form, password: e.target.value })}
        />
        <button type="submit">Login</button>
      </form>
    </>
  );
};

export default Login;
