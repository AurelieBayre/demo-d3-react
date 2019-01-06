import React, {Component} from 'react';
import {Container, Row, Col} from 'reactstrap';

import {getNewPageInfo, toNewPage} from '../modules/arrowNavigator';
import {responsiveWidth} from '../modules/dimensionsCalculator';

import Reusable from './ReusableBarchart';
import Pie from './Pie';
import Doughnut from './Doughnut';

export default class Dashboard extends Component {
  state = {
    motivation: {
      id: 'motivation',
      data: [
        {name: 'Lundi', value: 65},
        {name: 'Mardi', value: 50},
        {name: 'Mercredi', value: 100},
        {name: 'Jeudi', value: 85},
        {name: 'Vendredi', value: 70},
        {name: 'Samedi', value: 95},
        {name: 'Dimanche', value: 90}
      ],
      color: 'rgb(209, 60, 75)',
      title: 'Variation de la motivation au cours de la semaine'
    },
    activity: {
      id: 'activity',
      data: [
        {name: 'codewars', value: 20},
        {name: 'side project', value: 30},
        {name: 'sport', value: 10},
        {name: 'socialisation', value: 10},
        {name: 'lecture', value: 15},
        {name: 'cuisine', value: 15}
      ],
      color: 'rgb(66, 136, 181)',
      title: 'Temps passé par activité'
    }
  };

  componentDidMount() {
    this.header = document.getElementsByTagName('header')[0];
    this.headerDisplay = this.header.style.display;
    this.header.style.display = 'none';
  }

  componentWillUnmount() {
    this.header.style.display = this.headerDisplay;
  }

  render() {
    const pages = this.props.pages;
    const newPage = getNewPageInfo(pages);
    const redirectToNewPage = toNewPage('dashboard', newPage);
    const mobileWidth = window.screen.width - 80
    const width = responsiveWidth(400, mobileWidth);
    const height = 180;

    return redirectToNewPage ? (
      redirectToNewPage
    ) : (
      <Container>
        <Row className="dashboard">
          <Col>
            <h3 className="text-center">
              Motivation selon les jours de la semaine
            </h3>
            <div id={`barchart-${this.state.motivation.id}`}>
              <Reusable
                id={this.state.motivation.id}
                data={this.state.motivation.data}
                width={width}
                height={height}
                color={this.state.motivation.color}
              />
            </div>
            <div id={`doughnut-${this.state.motivation.id}`}>
              <Doughnut
                id={this.state.motivation.id}
                data={this.state.motivation.data}
                width={width}
                height={height}
              />
            </div>
          </Col>
          <Col>
            <h3>Temps passé par activité </h3>
            <div id={`barchart-${this.state.activity.id}`}>
              <Reusable
                id={this.state.activity.id}
                data={this.state.activity.data.sort(
                  (a, b) => b.value - a.value
                )}
                width={width}
                height={height}
                color={this.state.activity.color}
              />
            </div>
            <div id={`pie-${this.state.activity.id}`}>
              <Pie
                id={this.state.activity.id}
                data={this.state.activity.data}
                width={width}
                height={height}
              />
            </div>
          </Col>
        </Row>
        <div id="tooltip" className="tooltip" />
      </Container>
    );
  }
}
