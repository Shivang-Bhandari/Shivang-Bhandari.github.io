import React, { useState } from 'react';
import {themes, ThemeContext} from './ThemeContext'; 
import Sidebar from './components/Sidebar'
import './App.scss';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      theme: themes.light
    };

    this.toggleTheme  = () => {
      const currentTheme = this.state.theme;
      const themeToBeApplied = this.state.theme === themes.light ? themes.dark : themes.light;
      this.setState({
        theme: themeToBeApplied
      }, console.log('theme has been toggled', this.state.theme));
    }
  }



  render() {
    return (
      <div className="App">
        <Sidebar />
      </div>
    );
  }
}

export default App;
