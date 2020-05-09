import React, { useState } from 'react';
// import {themes, ThemeContext} from './ThemeContext'; 
import Sidebar from './components/Sidebar';
import Home from './components/Home';
import './App.scss';

class App extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      // <ThemeContext.Provider value={{}}>
        <div className="App">
          <Sidebar />
          <Home />
        </div>
      // </ThemeContext.Provider>
    );
  }
}

export default App;
