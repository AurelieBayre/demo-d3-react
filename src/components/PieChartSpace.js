import React, {Component} from 'react';

import {getNewPageInfo, toNewPage} from '../modules/arrowNavigator'

import Pie from './Pie';

export default class GenericBarchart extends Component {
  state = {
    data: [{name: "codewars", value:20},
    {name: "side project", value:30},
    {name: "sport", value:10},
    {name: "socialisation", value:10},
    {name: "lecture", value:15},
    {name: "cuisine", value:15}
  ],
    width: 300,
    height: 300,
    id: 'pie'
  };

  render() {
    const pages = this.props.pages;
    const newPage = getNewPageInfo(pages)
    const redirectToNewPage = toNewPage("piechart",newPage)

    return redirectToNewPage ? redirectToNewPage : (
      <div id={`pie-${this.state.id}`}>
        <Pie
          id={this.state.id}
          data={this.state.data}
          width={this.state.width}
          height={this.state.height}
        />
      </div>
    );
  }
}
