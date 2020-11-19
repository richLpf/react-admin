import React from "react";
//import logo from './logo.svg';
import "./App.css";
import LayoutComponent from "@/layout";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import Login from '@/page/Login'

function App() {
  return (
    <div className="App">
	    <Router>
	      <Switch>
	        <Route exact path="/login" component={Login} />
	        <Route path="/" component={LayoutComponent} />
	      </Switch>
	    </Router>
    </div>
  );
}

export default App;
