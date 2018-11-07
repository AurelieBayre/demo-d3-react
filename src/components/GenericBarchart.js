import React, {Component} from 'react';
import Reusable from './ReusableBarchart';

export default class GenericBarchart extends Component {
  state = {
    data: [12, 5, 49, 6, 25, 10],
    width: 700,
    height: 300,
    color: 'purple',
    id: 'basic'
  };

  render() {
    return (
      <div id={`barchart-${this.state.id}`}>
        <Reusable
          id={this.state.id}
          data={this.state.data}
          width={this.state.width}
          height={this.state.height}
          color={this.state.color}
        />
      </div>
    );
  }
}
