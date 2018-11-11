import React, {Component} from 'react';

import Doughnut from './Doughnut';

export default class GenericBarchart extends Component {
  state = {
    data: [
      {name: 'codewars', value: 20},
      {name: 'side project', value: 30},
      {name: 'sport', value: 10},
      {name: 'socialisation', value: 10},
      {name: 'lecture', value: 15},
      {name: 'cuisine', value: 15}
    ],
    width: 300,
    height: 300,
    id: 'pie'
  };

  render() {
    return (
      <div id={`doughnut-${this.state.id}`}>
        <Doughnut
          id={this.state.id}
          data={this.state.data}
          width={this.state.width}
          height={this.state.height}
        />
        <div id="tooltip" />
      </div>
    );
  }
}
