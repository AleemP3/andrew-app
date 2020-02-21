import React from 'react';
import './App.css';
import Home from "./components/Home"; 
import Login from "./components/Login";
import Navbar from "./components/Navbar"; 
import Journals from "./components/Journals"; 
import JournalForm from "./components/JournalForm";
import FetchUser from "./components/FetchUser"; 
import { Route, Switch } from "react-router-dom";



const App = () => {

  
  return(
    <>
      <FetchUser>
        <div>
          <div className="app-navbar-container">
            <Navbar />
          </div>
          <Switch>
            <Route exact path="/" component={Home} /> 
            <Route exact path="/login" component={Login} />
            <Route exact path="/journals" component={Journals} />
            <Route exact path="/journals/new" component={JournalForm} />
          </Switch>
        </div>
      </FetchUser>
    </>
  );
;}

export default App;
