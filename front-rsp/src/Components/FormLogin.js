import React, { useState} from "react";
import UserService from "../Services/UserService";
import { useNavigate, NavLink } from "react-router-dom";
import "./Component.css";

const FormLogin = () => {
  const nav = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const us = {
    username: username,
    password: password,
  };

  //enviar los datos

  const handlerSubmit = async (e) => {
    //evita su compartamiento por defecto que hace un post a la pagina al action
    e.preventDefault();
    if (username.trim() === "" || password.trim() === "") {
      alert("Datos incompletos");
      return;
    }

    try {
      await UserService.getToken(us).then(
        (jwt) => {
          localStorage.setItem("token", jwt.token);
          nav("/Listado");
        },
        (error) => {
          alert(error.jwt.data.message);
        }
      );
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="contenedor-form">
      <form onSubmit={handlerSubmit}>
        <div className="wrapper">
          <div className="row">
            <h3> Iniciar sesion </h3>
            <div >
              <input
                name="username"
                placeholder="Ingrese su usuario"
                onChange={(e) => setUsername(e.target.value)}
                value={username}
              />
              <span className="toggle">
                <i className="fas fa-user"></i>
              </span>
            </div>
            <div >
              <input
                name="password"
                type="password"
                placeholder="Ingrese su contraseña"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
              />
            </div>
          </div>
          <br></br>

          <button
            type="submit"
            className="btn btn-secondary"
            style={{ width: "30vh" }}
            onClick={handlerSubmit}
          >
            Ingresar
          </button>

          <br></br><br></br>

          <button className="btn btn-success" style={{ width: "30vh" }}>
            <NavLink
              to="/registrar"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              Registrar
            </NavLink>
          </button>
        </div>
      </form>
    </div>
  );
};

export default FormLogin;
