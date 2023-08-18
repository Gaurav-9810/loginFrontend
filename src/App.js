import logo from './logo.svg';
import './App.css';
import Login from './pages/Login';
import{BrowserRouter , Routes , Route } from 'react-router-dom';
import Regitser from './pages/Regitser';
import ShowData from './pages/ShowData';

import Show from './pages/Show';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />}/>
          <Route path="/register" element={<Regitser />} />
          <Route path="/show" element={<ShowData/>} />
          <Route path="show/:id" element={<Show/>} />
          
        
      </Routes>
    </BrowserRouter>
       
    </div>
  );
}

export default App;
