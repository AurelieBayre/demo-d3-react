import React from 'react';
import Svg from './Svg';

import {getNewPageInfo, toNewPage} from '../modules/arrowNavigator';
import {rectangleYPosition} from '../modules/dimensionsCalculator';
export default class Svg2 extends Svg {
  componentDidMount() {
    this.interval = setInterval(() => {
      const newArray = this.changeData();
      this.setState({data: newArray});
    }, 3000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    const pages = this.props.pages;
    const newPage = getNewPageInfo(pages);
    const redirectToNewPage = toNewPage('svg2', newPage);

    return redirectToNewPage ? (
      redirectToNewPage
    ) : (
      <div>
        <h2>hauteur du SVG - hauteur de la barre</h2>
        <div className="svg-wrapper">
          <svg width={this.svgWidth()} height={this.svgHeight()}>
            <g transform={`translate(${this.margin()},${this.margin()})`}>
              {this.state.data.map((d, i) => (
                <rect
                  key={i}
                  className="bar"
                  x={i * 55}
                  y={rectangleYPosition(300, d.value * 20)}
                  width={50}
                  height={d.value * 20}
                  fill={d.color}
                />
              ))}
            </g>
          </svg>
        </div>
      </div>
    );
  }
}
