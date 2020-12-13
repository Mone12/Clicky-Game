import logo from './logo.svg';

import React, { Component } from 'react';
import Nav from "./components/Nav";
import Jumbotron from "./components/jumbotron";
import Wrapper from "./components/Wrapper";
import Footer from "./components/Footer";
import './App.css';


class App extends Component {
  render() {
  return (
    <div className ="App">
      <Nav />
      <Jumbotron />
      <Wrapper />
      <Footer />
    </div>
  );
  }
}
export default App;
