import React, {Component} from 'react';
import {Container, Row, Col} from 'reactstrap';

import Reusable from './ReusableBarchart';
import Pie from './Pie';

export default class Dashboard extends Component {
  state = {
    motivation: {
      id: 'motivation',
      data: [12, 5, 6, 6, 9, 10],
      width: 200,
      height: 200,
      color: 'red'
    },
    activity: {
      id: 'activity',
      data: [3, 5, 4, 8, 9, 10, 7, 6, 15],
      width: 200,
      height: 200,
      color: 'blue'
    }
  };

  render() {
    return (
      <Container>
        <h1>Premier Dashboard!</h1>
        <Row>
          <h2>Motivation : </h2>
        </Row>
        <Row>
          <Col>
            <div id={this.state.motivation.id}>
              <Reusable
                id={this.state.motivation.id}
                data={this.state.motivation.data}
                width={this.state.motivation.width}
                height={this.state.motivation.height}
                color={this.state.motivation.color}
              />
            </div>
          </Col>
          <Col>
            <div id={`pie-${this.state.motivation.id}`}>
              <Pie
                id={this.state.motivation.id}
                data={this.state.motivation.data}
                width={this.state.motivation.width}
                height={this.state.motivation.height}
              />
            </div>
          </Col>
        </Row>
        <Row>
          <h2>Activité : </h2>
        </Row>
        <Row>
          <Col>
            <div id={this.state.activity.id}>
              <Reusable
                id={this.state.activity.id}
                data={this.state.activity.data}
                width={this.state.activity.width}
                height={this.state.activity.height}
                color={this.state.activity.color}
              />
            </div>
          </Col>
          <Col>
            <div id={`pie-${this.state.activity.id}`}>
              <Pie
                id={this.state.activity.id}
                data={this.state.activity.data}
                width={this.state.activity.width}
                height={this.state.activity.height}
              />
            </div>
          </Col>
        </Row>
      </Container>
    );
  }
}
