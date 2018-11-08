import React, {Component} from 'react';
import {Row, Col} from 'reactstrap';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Contact from './components/Contact';
import Home from './components/Home';
import Info from './components/Info';
import Svg from './components/Svg';
import Svg2 from './components/Svg2';
import Scale from './components/Scale';
import GenericBarchart from './components/GenericBarchart';
import Dashboard from './components/Dashboard';
import PieChartSpace from './components/PieChartSpace';

import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      toHome: false,
      toInfo: false,
      toSvg: false,
      toSvg2: false,
      toScale: false,
      toBarchart: false,
      toPiechart: false,
      toDashboard: false
    };
  }

  onRouteChanged() {
    console.log('ROUTE CHANGED');
  }

  render() {
    return (
      <Router>
        <div className="App">
          <header className="App-header">
            <Row>
              <Col>
                <h1>Meetup JS Don't Panic</h1>
                <p>14 novembre 2018</p>
              </Col>
              <Col xs="3">
                <Contact />
              </Col>
            </Row>
          </header>
          <Route exact path="/" component={Home} />
          <Route exact path="/info" component={Info} />
          <Route exact path="/svg" component={Svg} />
          <Route exact path="/svg2" component={Svg2} />
          <Route exact path="/scale" component={Scale} />
          <Route exact path="/barchart" component={GenericBarchart} />
          <Route exact path="/piechart" component={PieChartSpace} />
          <Route exact path="/dashboard" component={Dashboard} />
          <div />
        </div>
      </Router>
    );
  }
}

export default App;
