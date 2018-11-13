import React, {Component} from 'react';
import {Container} from 'reactstrap';
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
import DoughnutSpace from './components/DoughnutSpace';
import Outro from './components/Outro';

import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pages: [
        ['', true],
        ['info', false],
        ['svg', false],
        ['svg2', false],
        ['scale', false],
        ['barchart', false],
        ['dashboard', false],
        ['outro', false]
      ]
    };
  }

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
          <Container fluid={true}>
            <header className="App-header">
              <Contact />
            </header>
            <Route
              exact
              path="/"
              render={() => <Home pages={this.state.pages} />}
            />
            <Route
              exact
              path="/info"
              render={() => <Info pages={this.state.pages} />}
            />
            <Route
              exact
              path="/svg"
              render={() => <Svg pages={this.state.pages} />}
            />
            <Route
              exact
              path="/svg2"
              render={() => <Svg2 pages={this.state.pages} />}
            />
            <Route
              exact
              path="/scale"
              render={() => <Scale pages={this.state.pages} />}
            />
            <Route
              exact
              path="/barchart"
              render={() => <GenericBarchart pages={this.state.pages} />}
            />
            <Route
              exact
              path="/dashboard"
              render={() => <Dashboard pages={this.state.pages} />}
            />
             <Route
              exact
              path="/outro"
              render={() => <Outro pages={this.state.pages} />}
            />
            {/* The routes below are acessible via the url but
            but I haven't included them in the arrow-navigation system. */}
            <Route
              exact
              path="/piechart"
              render={() => <PieChartSpace pages={this.state.pages} />}
            />
            <Route
              exact
              path="/doughnut"
              render={() => <DoughnutSpace />}
            />
          </Container>
        </div>
      </Router>
    );
  }
}

export default App;
