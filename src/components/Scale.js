import React, {Component} from 'react';
import {Row, Col} from 'reactstrap';
import {scaleBand, scaleLinear, max} from 'd3';

import {getNewPageInfo, toNewPage} from '../modules/arrowNavigator';
import {svgLength, rectangleHeight} from '../modules/dimensionsCalculator';

export default class Scale extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [
        {value: 12, color: '#40DA00'},
        {value: 5, color: '#C08503'},
        {value: 6, color: '#006069'},
        {value: 6, color: '#012450'},
        {value: 9, color: '#123456'},
        {value: 10, color: '#654321'},
        {value: 8, color: '#AAFF00'}
      ],
      width: 600,
      height: 300
    };
  }
  addData(e) {
    e.preventDefault();
    const randomValue = Math.random() * 20;
    const randomColor = Math.floor(Math.random() * 16777215).toString(16);
    const newDataPoint = {
      value: randomValue,
      color: '#' + randomColor
    };
    this.setState({data: [...this.state.data, newDataPoint]});
  }

  render() {
    const data = this.state.data;
    const width = this.state.width;
    const height = this.state.height;
    const margin = 20;
    const svgWidth = svgLength(width, margin);
    const svgHeight = svgLength(height, margin);
    // Définition des axes avec calcul des proportions
    const x = scaleBand()
      .rangeRound([0, width])
      .padding(0.1);

    const y = scaleLinear().rangeRound([height, 0]);

    // Connection des données aux axes
    x.domain(data.map((d, i) => i));
    y.domain([0, max(data, d => d.value)]);

    const pages = this.props.pages;
    const newPage = getNewPageInfo(pages);
    const redirectToNewPage = toNewPage('scale', newPage);

    return redirectToNewPage ? (
      redirectToNewPage
    ) : (
      <div>
        <h2>Les échelles</h2>
        <Row>
          <Col>
            <div className="svg-wrapper">
              <svg width={svgWidth} height={svgHeight}>
                <g transform={`translate(${margin},${margin})`}>
                  {data.map((d, i) => {
                    return (
                      <rect
                        key={i}
                        className="bar"
                        x={x(i)}
                        y={y(d.value)}
                        height={rectangleHeight(height, y(d.value))}
                        width={x.bandwidth()}
                        fill={d.color}
                      />
                    );
                  })}
                </g>
              </svg>
            </div>
          </Col>
          <Col xs="3">
            <form onSubmit={e => this.addData(e)}>
              <div>
                <label>Ajouter une valeur</label>
              </div>
              <button type="submit">Ajout</button>
            </form>
          </Col>
        </Row>
      </div>
    );
  }
}
