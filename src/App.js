import React from 'react';
import Header from './components/Header';

import 'animate.css';
import Homepage from './components/homepage/Homepage';
import { Route, Routes } from 'react-router-dom';
import Login from './components/user-authentication/Login';
import Registration from './components/user-authentication/Registration';
import Singleinventory from './components/Singleinventory';
import Managefruits from './components/Managefruits';
import Addfruits from './Addfruits';
import Privateroute from './components/user-authentication/Privateroute';
import Myitems from './components/Myitems';


const App = () => {
  return (
    <>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Homepage></Homepage>}></Route>
        <Route path='/home' element={<Homepage></Homepage>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/registration' element={<Registration></Registration>}></Route>
        <Route path='/myitems' element={<Myitems></Myitems>}></Route>

        <Route path='/inventory/:id' element={
          <Privateroute><Singleinventory></Singleinventory></Privateroute>
        }></Route>

        <Route path='/managefruits' element={
          <Privateroute>
            <Managefruits></Managefruits>
          </Privateroute>
        }></Route>

        <Route path='/addfruits' element={
          <Privateroute>
            <Addfruits></Addfruits>
          </Privateroute>
        }></Route>
      </Routes>


    </>
  );
};

export default App;