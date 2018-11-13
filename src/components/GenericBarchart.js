import React, {Component} from 'react';
import Reusable from './ReusableBarchart';
import {getNewPageInfo, toNewPage} from '../modules/arrowNavigator';
import { svgLength } from '../modules/dimensionsCalculator';

export default class GenericBarchart extends Component {
  state = {
    data: [
      {name: 'Lundi', value: 65},
      {name: 'Mardi', value: 60},
      {name: 'Mercredi', value: 100},
      {name: 'Jeudi', value: 85},
      {name: 'Vendredi', value: 70},
      {name: 'Samedi', value: 95},
      {name: 'Dimanche', value: 90}
    ],
    width: 600,
    height: 300,
    color: 'purple',
    id: 'basic',
    title: "Motivation au cours de la semaine"
  };

  render() {
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
          width={this.state.width}
          height={this.state.height}
          color={this.state.color}
          title={this.state.title}
        />
        <div id="tooltip" className="tooltip" />
      </div>
    );
  }
}
