import React, {Component} from 'react';
import Reusable from './ReusableBarchart';
import {getNewPageInfo, toNewPage} from '../modules/arrowNavigator';

export default class GenericBarchart extends Component {
  state = {
    data: [
      {name: 'Lundi', value: 65},
      {name: 'Mardi', value: 60},
      {name: 'Mercredi', value: 100},
      {name: 'Jeudi', value: 63},
      {name: 'Vendredi', value: 75},
      {name: 'Samedi', value: 80},
      {name: 'Dimanche', value: 90}
    ],
    width: 560,
    height: 250,
    color: 'purple',
    id: 'basic',
    title: "Motivation au cours de la semaine"
  };

  render() {
    const responsiveWidth = window.screen.width - 80;
    const pages = this.props.pages;
    const newPage = getNewPageInfo(pages);
    const redirectToNewPage = toNewPage('barchart', newPage);

    return redirectToNewPage ? (
      redirectToNewPage
    ) : (
      <div id={`barchart-${this.state.id}`}>
        <Reusable
          id={this.state.id}
          data={this.state.data}
          width={this.state.width > responsiveWidth ? responsiveWidth : this.state.width}
          height={this.state.height}
          color={this.state.color}
          // title={this.state.title}
        />
        <h3>{this.state.title}</h3>
        <div id="tooltip" className="tooltip" />
      </div>
    );
  }
}
