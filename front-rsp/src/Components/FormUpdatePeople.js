import React, { useState} from "react";
import PeopleService from "../Services/PeopleService";
import { useNavigate } from "react-router-dom";
import "./Component.css";

const FormNewPeople = (data,idPeople) => {
   
    console.log(data);
    console.log(data.idPeople);

  
  const nav = useNavigate();
  const [nombre, setNombre] = useState(data.nombre);
  const [color_pelo, setColor_pelo] = useState(data.color_pelo);
  const [color_ojos, setColor_ojos] = useState(data.color_ojos);
  const [altura, setAltura] = useState(data.altura);



 const us = {
    nombre: nombre,
    color_pelo: color_pelo,
    color_ojos:color_ojos,
    altura:altura,
    id:data.idPeople
  };
 

  
  const handlerSubmit = async (e) => {
    //evita su compartamiento por defecto que hace un post a la pagina al action
    e.preventDefault();

    if (nombre.trim() != null && color_pelo.trim() != null && color_ojos.trim() != null && altura.trim() != null) {

      try {
        console.log(us);
        await PeopleService.updatePeople(us).then(
          (res) => {
          alert("Se modifico el personajes.");
          nav(0);
          },
          (error) => {
            alert(error.res.data.message);
          }
        );
      } catch (err) {
        console.log(err);
      }
    }else{
        alert("completar campos.");
    }

  };

  return (
    <div className="contenedor-form">
      <form onSubmit={handlerSubmit}>
        <div className="wrapper">
          <div className="row">
            <h3> Modificar personaje </h3>
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
     

          <button
            type="submit"
            className="btn btn-secondary"
            style={{ width: "30vh" }}
            onClick={handlerSubmit}
          >
           Guardar cambios
          </button>

          <br></br><br></br>
        </div>
      </form>
    </div>
  );
};

export default FormNewPeople;