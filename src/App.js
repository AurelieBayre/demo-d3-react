import React, { Component } from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import MainMenu from './components/MainMenu'
import Home from './components/Intro'
import About from './components/About'
import Info from './components/Info'
import Svg from './components/Svg'
import Svg2 from './components/Svg2'
import Echelle from './components/Echelle'
import Tooltip from './components/Tooltip'
import Chart from './components/Chart'
import GenericBarchart from './components/GenericBarchart'

import './App.css';

class App extends Component {
  onRouteChanged() {
    console.log("ROUTE CHANGED");
  }

  render() {
    return (
      <Router>
        <div className="App">
          <header className="App-header">
            <MainMenu/>
            <p>
              Meetup JS Don't Panic - 14 novembre 2018
            </p>
          </header>
            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={About} />
            <Route exact path="/info" component={Info} />
            <Route exact path="/svg" component={Svg}/>
            <Route exact path="/svg2" component={Svg2}/>
            <Route exact path="/echelle" component={Echelle}/>
            <Route exact path="/bulle" component={Tooltip}/>
            <Route exact path="/react-barchart" component={Chart}/>
            <Route exact path="/reusable-react-barchart" component={GenericBarchart}/>
          <div>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
