import React, { useState } from "react";
import "./css/login.css";
import axios from "axios";

const Login = () => {
  const [value, stateValues] = useState({
    username: "",
    clave: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault(); // Aquí está la corrección
    if (value.username.trim() === "" || value.clave.trim() === "") {
      alert("Por favor, rellena todos los campos.");
    } else {
      axios
        .post("http://localhost:3000/login", value)
        .then((data) => console.log(data))
        .catch((err) => console.log(err));
      console.log(value);
    }
  };

  return (
    <>
      <div className="container">
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <div className="input-field">
              <input
                type="text"
                name="username"
                onChange={(e) =>
                  stateValues({ ...value, username: e.target.value })
                }
              />
              <label htmlFor="username">Username</label>
            </div>
            <div className="input-field">
              <input
                type="password"
                name="password"
                onChange={(e) =>
                  stateValues({ ...value, clave: e.target.value })
                }
              />
              <label htmlFor="password">Password</label>

              <div className="button">
                <button type="submit">Enviar</button>
                <hr />
                <span>
                  ¿Olvidaste tu <a href="#">contraseña</a>?
                </span>
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default Login;
