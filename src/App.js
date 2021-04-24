import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './Components/Home/Home/Home';
import Appointment from './Components/Appoinment/Appointment';
import Login from './Components/Login/Login';
import { createContext, useState } from 'react';
import PrivateRoute from './Components/Login/PrivateRoute/PrivateRoute';
import MainDash from './Components/DashBoard/MainDash/MainDash';
import DashBoardMain from './Components/DashBoard/DashBoardMain/DashBoardMain';
import Patients from './Components/DashBoard/Patients/Patients';
import AddDoctor from './Components/DashBoard/AddDoctor/AddDoctor';

export const UserContext=createContext();

function App() {
  const [loggedInUser,setLoggedInUser]=useState({})
  return (
    <UserContext.Provider value={[loggedInUser,setLoggedInUser]}>
    <Router>
      <Switch>
        <Route exact path="/">
          <Home/>
        </Route>
        <Route exact path="/home">
          <Home/>
        </Route>
        <PrivateRoute path="/appointment">
          <Appointment/>
        </PrivateRoute>
        <Route path="/login">
          <Login/>
        </Route>
        <Route path="/appointments">
          <MainDash/>
        </Route>
        <Route path="/dashboard">
          <DashBoardMain/>
        </Route>
        <Route path="/patients">
          <Patients/>
        </Route>
        <Route path="/addDoctor">
          <AddDoctor/>
        </Route>
      </Switch>
    </Router>
    </UserContext.Provider>
  );
}

export default App;
