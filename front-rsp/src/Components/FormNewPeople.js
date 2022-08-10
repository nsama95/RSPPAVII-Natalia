import React, { useState} from "react";
import PeopleService from "../Services/PeopleService";
import { useNavigate, NavLink } from "react-router-dom";
import "./Component.css";

const FormNewPeople = () => {
  const nav = useNavigate();
  const [nombre, setNombre] = useState("");
  const [color_pelo, setColor_pelo] = useState("");
  const [color_ojos, setColor_ojos] = useState("");
  const [altura, setAltura] = useState("");

 const us = {
    nombre: nombre,
    color_pelo: color_pelo,
    color_ojos:color_ojos,
    altura:altura
  };

  //enviar los datos

  const handlerSubmit = async (e) => {
    //evita su compartamiento por defecto que hace un post a la pagina al action
    e.preventDefault();
    if (nombre.trim() === "" || color_pelo.trim() === "" || color_ojos.trim() === "" || altura.trim() === "") {
      alert("Datos incompletos");
      return;
    }
console.log(us);
    try {
      await PeopleService.newPeople(us).then(
        (res) => {
        alert("Se creo personajes.");
        nav("/Listado");
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
            <h3> Crear personaje </h3>
            <div >
              <input
                name="nombre"
                placeholder="Ingrese nombre"
                onChange={(e) => setNombre(e.target.value)}
                value={nombre}
              />
            </div>
            <div >
              <input
                name="color_pelo"
                placeholder="Ingrese color de pelo"
                onChange={(e) => setColor_pelo(e.target.value)}
                value={color_pelo}
              />

            </div>
            <div >
              <input
                name="color_ojos"
                placeholder="Ingrese color de ojos"
                onChange={(e) => setColor_ojos(e.target.value)}
                value={color_ojos}
              />
 
            </div>
            <div >
              <input
                name="altura"
                placeholder="Ingrese altura"
                onChange={(e) => setAltura(e.target.value)}
                value={altura}
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
           Crear
          </button>

          <br></br><br></br>
        </div>
      </form>
    </div>
  );
};

export default FormNewPeople;
