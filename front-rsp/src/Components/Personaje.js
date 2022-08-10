import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import CardPeople from "./CardPeople";

const Personaje = () => {
    const [personaje, setPersonaje] = React.useState([]);
    React.useEffect(() => {
      obtenerPer();
    }, []);
  
    const obtenerPer = async () => {
        let min = 1;
        var max = 83;
        var rand = Math.floor(Math.random() * (max - min)) + min;
      const data = await fetch(`https://swapi.dev/api/people/${rand}`);
      const personaje = await data.json();
      setPersonaje(personaje);
    };
  
    return (

      <div >
        
        <CardPeople
        name=  {personaje.name}
        hair_color={personaje.hair_color}
        eye_color= {personaje.eye_color}
        height= {personaje.height}
        gender={personaje.gender}
        birth_year={personaje.birth_year}
      
        />
       
        )
      
          </div>
          
        
    
    );
  };
  export default Personaje;







