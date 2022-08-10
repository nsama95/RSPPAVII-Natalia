import './App.css';
import { BrowserRouter , Route, Routes} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import HeaderSW from './Components/HeaderSW';
import {ListadoPerPage} from './Pages/ListadoPerPage';
import {UpdatePeoplePage} from './Pages/UpdatePeoplePage';
import {LoginPage} from './Pages/LoginPage';
import {RegistrerPage} from './Pages/RegistrerPage';
import {NewPeoplePage} from './Pages/NewPeoplePage';

function App() {
  return (
    <div >
      <BrowserRouter>
 
      <HeaderSW/>
      <Routes>
      <Route exact path="/"element={<LoginPage/>}/> 
      <Route path="/Listado" element={<ListadoPerPage/>}/>
      <Route path="/Alta" element={<NewPeoplePage/>}/>
      <Route path="/Modificar" element={<UpdatePeoplePage/>}/>

      <Route path="/Login" element={<LoginPage/>}/>
    
      
      <Route path="/Registrar" element={<RegistrerPage/>}/>

      </Routes>

      </BrowserRouter>
     
    </div>
  );
}

export default App;




