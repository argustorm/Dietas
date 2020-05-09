import React, { Component } from 'react';


// Pages
import { Home } from './Pages/Home';
import { MenuPage } from './Pages/Menu';

// Styles
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'antd/dist/antd.css';


export class App extends Component {
  render() {
      const url = new URL(document.location)
      const hasHome = url.searchParams.has('home')
      const hasMenu = url.searchParams.has('menu')

      if (hasHome) {
        return <Home/>
      }
      if (hasMenu) {
        return <MenuPage/>
      }

      return (
      <div className="App">
        <Home/>
      </div>
    );
  }
}

export default App;
