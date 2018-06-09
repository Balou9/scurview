import React, { Component } from 'react';
import { Button } from '@material-ui/core';
import './App.css';

import { Form } from "./components/Form";
// import { Chart } from "./components/Chart"

class App extends Component {
  render() {
    return (
      <div className="App">
        <p className="App-intro">
          Scur View
        </p>
        <Form/>
      </div>
    );
  }
}

export default App;
