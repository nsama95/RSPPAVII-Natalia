import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import CardPeople from "./CardPeople"


const ListSW = () => {
  const [personajes, setPersonajes] = React.useState([]);
  React.useEffect(() => {
    obtenerDatosPer();
  }, []);

  const obtenerDatosPer = async () => {
    
    const data = await fetch(`http://localhost:3000/api/starwars/`,{method:'get', headers:{"Authorization" : "Bearer " +  localStorage.getItem("token")}});
    const personaje = await data.json();
    setPersonajes(personaje);
    console.log(personaje);
  };

 return (
    <div className="row">
      {personajes.map((item) => ( 
      <CardPeople 
      key={item.id}
      nombre=  {item.nombre}
      color_pelo={item.color_pelo}
      color_ojos= {item.color_ojos}
      altura= {item.altura}
     id={item.id}
      />
     
      ))} 
    
        </div>
        
      
  
  );
}
export default ListSW;