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
        {value: 12, color: '#9400D3'},
        {value: 5, color: '#0000FF'},
        {value: 6, color: '#00c5ff'},
        {value: 6, color: '#00FF00'},
        {value: 9, color: '#FFFF00'},
        {value: 10, color: '#FF7F00'},
        {value: 8, color: '#FF0000'}
      ],
      width: 600,
      height: 300
    };
  }

  random(min, max) {
    return Math.floor(Math.random() * max) + min;
  }

  getDataCapValue(arr) {
    let maxValue = 0;
    arr.forEach(i => (maxValue = maxValue > i.value ? maxValue : i.value));
    return maxValue;
  }

  changeData = () => {
    let arr = [...this.state.data];
    let maxValue = this.getDataCapValue(arr);
    let dataIdx = this.random(0, arr.length - 1);
    arr[dataIdx].value += this.random(maxValue / 10, maxValue / 3);
    return arr;
  };

  addData(e) {
    e.preventDefault();
    let maxValue = this.getDataCapValue(this.state.data);
    const randomValue = this.random(maxValue / 3, maxValue);
    const randomColor = Math.floor(Math.random() * 16777215).toString(16);
    const newDataPoint = {
      value: randomValue,
      color: '#' + randomColor
    };
    this.setState({data: [...this.state.data, newDataPoint]});
  }

  componentDidMount() {
    this.interval = setInterval(() => {
      const newArray = this.changeData();
      this.setState({data: newArray});
    }, 400);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    const pages = this.props.pages;
    const newPage = getNewPageInfo(pages);
    const redirectToNewPage = toNewPage('scale', newPage);
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

    const y = scaleLinear().rangeRound([height, 0]); // D3 va s'occuper de ce problème d'inversion

    // Connection des données aux axes
    x.domain(data.map((d, i) => i));
    y.domain([0, max(data, d => d.value)]);

    return redirectToNewPage ? (
      redirectToNewPage
    ) : (
      <div>
        <Row>
          <Col xs="8">
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
            <h2>Les échelles</h2>
            <form onSubmit={e => this.addData(e)}>
              <div>
              </div>
              <button type="submit" className="enormous-button">Ajouter une valeur</button>
            </form>
          </Col>
        </Row>
      </div>
    );
  }
}
