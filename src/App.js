import React from "react";
//import logo from './logo.svg';
import "./App.css";
import Layout from "@/layout";
import { HashRouter as Router, Route } from "react-router-dom";
import Login from '@/page/Login'

function App() {
  return (
    <div className="App">
      <Router>
        <Route exact path="/login" component={Login} />
        <Route path="/" component={Layout} />
      </Router>
    </div>
  );
}

export default App;
