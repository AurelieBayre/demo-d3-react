import React, {Component} from 'react';
import Reusable from './ReusableBarchart';
import {getNewPageInfo, toNewPage} from '../modules/arrowNavigator'


export default class GenericBarchart extends Component {
  state = {
    data: [12, 5, 49, 6, 25, 10],
    width: 700,
    height: 300,
    color: 'purple',
    id: 'basic'
  };

  render() {
    const pages = this.props.pages;
    const newPage = getNewPageInfo(pages)
    const redirectToNewPage = toNewPage("barchart",newPage)

    return redirectToNewPage ? redirectToNewPage : (
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
