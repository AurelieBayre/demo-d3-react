import React, { Component } from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import MainMenu from './components/MainMenu'
import Home from './components/Intro'
import Info from './components/Info'
import Svg from './components/Svg'
import Svg2 from './components/Svg2'
import Scale from './components/Scale'
import GenericBarchart from './components/GenericBarchart'
import Dashboard from './components/Dashboard'
import PieChartSpace from './components/PieChartSpace'

import './App.css';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      toHome: false,
      toInfo: false,
      toSvg: false,
      toSvg2: false,
      toScale: false,
      toBarchart: false,
      toPiechart: false,
      toDashboard: false
    }
  }

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
            <Route exact path="/info" component={Info} />
            <Route exact path="/svg" component={Svg}/>
            <Route exact path="/svg2" component={Svg2}/>
            <Route exact path="/scale" component={Scale}/>
            <Route exact path="/barchart" component={GenericBarchart}/>
            <Route exact path="/piechart" component={PieChartSpace}/>
            <Route exact path="/dashboard" component={Dashboard}/>
          <div>
          </div>
        </div>
      </Router>
    );
  };
};

export default App;
