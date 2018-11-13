// Exemple juste avec react, sans D3:
import React, {Component} from 'react';
import {getNewPageInfo, toNewPage} from '../modules/arrowNavigator';
import {svgLength} from '../modules/dimensionsCalculator';

export default class Svg extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {value: 12, color: '#9400D3'},
        {value: 5, color: '#4B0082'},
        {value: 6, color: '#0000FF'},
        {value: 6, color: '#00FF00'},
        {value: 9, color: '#FFFF00'},
        {value: 10, color: '#FF7F00'},
        {value: 8, color: '#FF0000'}
      ]
    };
  }

  render() {
    const newPage = getNewPageInfo(this.props.pages);
    this.redirectToNewPage = toNewPage('svg', newPage);

    return this.redirectToNewPage ? (
      this.redirectToNewPage
    ) : (
      <div>
        <div className="svg-wrapper">
          <svg width={this.svgWidth()} height={this.svgHeight()}>
            <g transform={`translate(${this.margin()},${this.margin()})`}>
              {this.state.data.map((d, i) => (
                <rect
                  key={i}
                  x={i * 55}
                  y={0}
                  width={50}
                  height={d.value * 20}
                  fill={d.color}
                  className="bar"
                />
              ))}
            </g>
          </svg>
        </div>
      </div>
    );
  }

  changeData = () => {
    return [...this.state.data].map(obj => {
      return {
        value: Math.random() * 10,
        color: obj.color
      };
    });
  };

  margin = () => {
    return 40;
  };

  changeData = () => {
    return [...this.state.data].map(obj => {
      return {
        value: Math.random() * 10,
        color: obj.color
      };
    });
  };
  
  svgWidth = () => {
    return svgLength(600, this.margin());
  };

  svgHeight = () => {
    return svgLength(300, this.margin());
  };

  componentDidMount() {
    this.interval = setInterval(() => {
      const newArray = this.changeData();
      this.setState({data: newArray});
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
    this.setState({
      toInfo: false,
      toSvg2: false
    });
  }
}
