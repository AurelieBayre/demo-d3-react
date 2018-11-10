import React, {Component} from 'react';
import {Container, Row, Col} from 'reactstrap';
import {BrowserRouter as Router, Route} from 'react-router-dom';

import {arrowNavigator} from './modules/arrowNavigator';

import Contact from './components/Contact';
import Home from './components/Home';
import Info from './components/Info';
import Svg from './components/Svg';
import Svg2 from './components/Svg2';
import Scale from './components/Scale';
import GenericBarchart from './components/GenericBarchart';
import PieChartSpace from './components/PieChartSpace';
import Dashboard from './components/Dashboard';

import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pages: [
        ["", true],
        ["info", false],
        ["svg", false],
        ["svg2", false],
        ["scale", false],
        ["barchart", false],
        ["piechart", false],
        ["dashboard", false]
      ]
    };
  }

  // onRouteChanged() {
  //   console.log('ROUTE CHANGED');
  // }

  navigation(e) {
    const pages = this.state.pages;
    const newPages = arrowNavigator(e, pages);
    return newPages;
  }

  componentDidMount() {
    document.addEventListener('keydown', e => {
      const newPages = this.navigation(e);
      this.setState({pages: newPages});
    });
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
          <Container>

          <Route exact path="/" render={()=><Home pages={this.state.pages}/>} />
          <Route exact path="/info" render={()=><Info pages={this.state.pages}/>} />
          <Route exact path="/svg" render={()=><Svg pages={this.state.pages}/>} />
          <Route exact path="/svg2" render={()=><Svg2 pages={this.state.pages}/>} />
          <Route exact path="/scale" render={()=><Scale pages={this.state.pages}/>} />
          <Route exact path="/barchart" render={()=><GenericBarchart pages={this.state.pages}/>} />
          <Route exact path="/piechart" render={()=><PieChartSpace pages={this.state.pages}/>} />
          <Route exact path="/dashboard" render={()=><Dashboard pages={this.state.pages}/>} />
          </Container>
        </div>
      </Router>
    );
  }
}

export default App;
