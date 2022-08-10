import React , {useState}from "react";
import { Card,ListGroup } from "react-bootstrap";
import { NavLink,useNavigate} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import FormUpdatePeople from "./FormUpdatePeople";
import PeopleService from "../Services/PeopleService";
const CardPeople = (prop) => {
  const nav = useNavigate();
  const [show, setShow] = useState(false);
  const handleClose = () => {
    setShow(false);
} 
const handleShow = () => {
  setShow(true);
} 
const deletPeople = async (e, people) => {
  console.log(people)
  try {
      await PeopleService.deletePeople(people).then(
          () => {
              alert("Se elimino el registro");
              nav(0);
          },
          (error) => {
          alert(error.response.data.message)
          }
      );
  } catch(err) {
      console.log(err);
  }
}

  return (
    
   
    <div className={show ? "col-9 ":"col-6"}>
 
      <Card
      bg={'Secondary'.toLowerCase()}
      key={'Secondary'}
      text={'Secondary'.toLowerCase() === 'light' ? 'dark' : 'white'}
      style={{ width: '18rem' }}
      >
        <Card.Body >
          <Card.Title>{prop.nombre}</Card.Title>
          <ListGroup >
            <ListGroup.Item action variant="dark" >Color de pelo: {prop.color_pelo}</ListGroup.Item>
            <ListGroup.Item action variant="dark"  >Color de ojo: {prop.color_ojos}</ListGroup.Item>
            <ListGroup.Item action variant="dark" >Altura: {prop.altura}</ListGroup.Item>
            <br></br>
            <ButtonGroup>
            <Button
            type="submit"
            className="btn btn-dark"
            text='white'
            onClick={e => handleShow(e)}
          >
         
              Modificar
           
          </Button>
          {' '}
          <Button  
            type="submit"
            text='white'
            className="btn btn-danger"
         
            onClick={e=>deletPeople(e,prop)}
          >
           Eliminar
          </Button>
          </ButtonGroup>
          </ListGroup>
          
        </Card.Body>
      </Card>
      <br/>
      {show ?
      <>
     <alert className='alerrt' variant= 'secondary'show={show} onHide={handleClose}  >
     <div >
        <FormUpdatePeople data={prop} idPeople={prop.id}></FormUpdatePeople>
         <Button type="submit"
            text='white'
            className="btn btn-danger"
            onClick={handleClose} style={{right:'-38.6%',position:'relative',top:'190px',width: '23%',height:'45px'}}>
               <NavLink
              to="/Alta"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              Cancelar
            </NavLink>
           
         </Button>
         </div>
     </alert>
  
     </>
     :
     <>
      </>}
      
    </div>
    
  
  );
};
export default CardPeople;
