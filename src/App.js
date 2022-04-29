import React from 'react';
import Header from './components/Header';

import 'animate.css';
import Homepage from './components/homepage/Homepage';
import { Route, Routes } from 'react-router-dom';
import Login from './components/user-authentication/Login';
import Registration from './components/user-authentication/Registration';


const App = () => {
  return (
    <>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Homepage></Homepage>}></Route>
        <Route path='/home' element={<Homepage></Homepage>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/registration' element={<Registration></Registration>}></Route>
      </Routes>


    </>
  );
};

export default App;