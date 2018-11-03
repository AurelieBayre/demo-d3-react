import React, {Component} from 'react';
import Pie from './Pie';

export default class GenericBarchart extends Component {
  state = {
    data: [12, 5, 49, 6, 25, 10],
    width: 300,
    height: 300,
    color: 'purple',
    id: 'pie'
  };

  render() {
    return (
      <div id={this.state.id}>
        <Pie
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
