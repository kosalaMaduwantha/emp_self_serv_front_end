
import Navbar from './components/NavBar';
import { Routes, Route} from "react-router-dom";
import Home from './components/Home';
import EmployeeDetails from './components/EmployeeDetails';
//import { Container, Col, Row } from 'react-bootstrap';
import React, { useEffect, useState } from "react";
import axios from "axios";

function App() {

  const [data,setData] = useState([0]);


  useEffect(() => {
    axios.get(`http://127.0.0.1:8000/api/employee/3`)
    .then(result => setData(result.data));
    console.log(data)
  }, []);

  return (
    
      <>
      
      <Routes>
        <Route path='/' element={<Navbar/>}>
          <Route index element={<Home />} />
          <Route path='/employeeDetails' element={<EmployeeDetails details={data} />} />

        </Route>
      </Routes>

      

      </>
    
  );
}

export default App;
