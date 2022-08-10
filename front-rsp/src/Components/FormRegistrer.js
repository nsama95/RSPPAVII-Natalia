import React, { useState} from "react";
import UserService from "../Services/UserService";
import { useNavigate, NavLink } from "react-router-dom";
import "./Component.css";

const FormRegistrer = () => {
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
      await UserService.createUser(us).then(
        (res) => {
            alert("Cuenta creada exitosamente.");
            nav("/Login");
        },
        (error) => {
          alert(error.res.data.message);
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
            <h3> Registrar </h3>
            <div >
              <input
                name="username"
                placeholder="Ingrese nombre de usuario"
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
            Registrarse
          </button>

          
        </div>
      </form>
    </div>
  );
};

export default FormRegistrer;