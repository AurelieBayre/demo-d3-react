import React, {Component} from 'react';
import {Container, Row, Col} from 'reactstrap';

import {getNewPageInfo, toNewPage} from '../modules/arrowNavigator';

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

  render() {
    const pages = this.props.pages;
    const newPage = getNewPageInfo(pages);
    const redirectToNewPage = toNewPage('dashboard', newPage);

    return redirectToNewPage ? (
      redirectToNewPage
    ) : (
      <Container>
        <h2 className="text-center">
          Motivation selon les jours de la semaine :
        </h2>
        <Row>
          <Col className="motivation">
            <div id={`barchart-${this.state.motivation.id}`}>
              <Reusable
                id={this.state.motivation.id}
                data={this.state.motivation.data}
                width={400}
                height={200}
                color={this.state.motivation.color}
              />
            </div>
          </Col>
          <Col>
            <div id={`doughnut-${this.state.motivation.id}`}>
              <Doughnut
                id={this.state.motivation.id}
                data={this.state.motivation.data}
                width={200}
                height={200}
              />
            </div>
          </Col>
        </Row>
        <h2>Temps passé par activité : </h2>
        <Row className="activity">
          <Col>
            <div id={`pie-${this.state.activity.id}`}>
              <Pie
                id={this.state.activity.id}
                data={this.state.activity.data}
                width={200}
                height={200}
              />
            </div>
          </Col>
          <Col>
            <div id={`barchart-${this.state.activity.id}`}>
              <Reusable
                id={this.state.activity.id}
                data={this.state.activity.data.sort(
                  (a, b) => b.value - a.value
                )}
                width={400}
                height={200}
                color={this.state.activity.color}
              />
            </div>
          </Col>
        </Row>
        <div id="tooltip" className="tooltip" />
      </Container>
    );
  }
}
