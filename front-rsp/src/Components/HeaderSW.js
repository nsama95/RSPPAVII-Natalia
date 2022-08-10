import React from "react";
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link,useNavigate} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
const HeaderSW = () => {
  const nav = useNavigate();
  const LogOutFunc = () => {
    localStorage.clear();
    nav("/Login");
  }

 
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark p-3">
      { 
      localStorage.getItem('token') ?
     <>
          <ul className="navbar-nav ml-auto">
            <li className="nav-item active">
              <Link className="navbar-brand" to="/Listado">
                Lista de personajes
              </Link>
            </li>
            <li className="nav-item active">
              <Link className="navbar-brand" to="/Alta">
                Alta 
              </Link>
            </li>
          </ul>
          <div className="collapse navbar-collapse" id="navbarNav">
          
          </div>
          <NavDropdown title='Logout' >
         <NavDropdown.Item onClick={LogOutFunc}>cerrar sesion</NavDropdown.Item>
       </NavDropdown>
       
          </>:
          <>
            <ul className="navbar-nav ml-auto">
              <li className="nav-item active">
                <Link className="navbar-brand" to="/Login">
                  Login
                </Link>
              </li>
            </ul>
           
            <ul className="navbar-nav ml-auto">
              <li className="nav-item active">
                <Link className="navbar-brand" to="/Registrar">
                  Registrar
                </Link>
              </li>
            </ul>
            </>
        
  }
      </nav>
     
    );
  }
  export default HeaderSW;
