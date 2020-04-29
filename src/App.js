import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Switch, Route } from "react-router-dom";
import Login from './auth/Login'
import Signup from './auth/Signup'
import PrivateRoute from './utils/PrivateRoute'
import Profile from './auth/Profile'
import MasterForm from './components/masterForm'

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path='/register' component={MasterForm}/>
        <Route path="/login" component={Login}/>
        <Route path='/signup' component={Signup}/>
        <PrivateRoute path='/profile' component={Profile}/>
      </Switch>
    </div>
  );
}

export default App;
