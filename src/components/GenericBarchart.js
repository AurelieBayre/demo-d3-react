import React, {Component} from 'react'
import Reusable from './ReusableBarchart'

export default class GenericBarchart extends Component {
  
  state = {
    data: [12, 5, 6, 6, 9, 10],
    width: 700,
    height: 500
  }

  render() {
    return (
      <div id='chartSpace'>
        <Reusable data={this.state.data} width={this.state.width} height={this.state.height} />
      </div>
    );
  }
}
