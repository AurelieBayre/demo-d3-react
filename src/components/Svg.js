import React, {Component} from 'react';
import {getNewPageInfo, toNewPage} from '../modules/arrowNavigator'
import {svgLength, rectangleYPostition} from '../modules/dimensionsCalculator'

// Exemple juste avec react, sans D3:

export default class Svg extends Component {
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
      ]
    };
    this.changeData = this.changeData.bind(this);
  }

  changeData() {
    return [...this.state.data].map(obj => {
      const randomColor = Math.floor(Math.random() * 16777215).toString(16);
      return {
        value: Math.random() * 10,
        color: '#' + randomColor
      };
    });
  }

  svgMargin() {
    return 20;
  }
  svgWidth() {
    return svgLength(600, this.svgMargin());
  }

  svgHeight() {
    return svgLength(300, this.svgMargin());
  }

  componentDidMount() {
    this.interval = setInterval(() => {
      const newArray = this.changeData();
      this.setState({data: newArray});
    }, 3000);
  }


  componentWillUnmount() {
    clearInterval(this.interval);
    document.removeEventListener('keydown', this.onArrowRightOrLeft);
    this.setState({
      toInfo: false,
      toSvg2: false
    });
  }

  render() {
    const pages = this.props.pages;
    const newPage = getNewPageInfo(pages)
    const redirectToNewPage = toNewPage("svg",newPage)
  
      return redirectToNewPage ? redirectToNewPage : (
      <div onKeyDown={e => this.onArrowRightOrLeft(e)} tabIndex="0">
        <h2>Devinette : pourquoi obtient-on cela? </h2>
        <svg width={this.svgWidth()} height={this.svgHeight()}>
          <g transform={`translate(${this.svgMargin()},${this.svgMargin()})`}>
          {this.state.data.map((d, i) => (
            <rect
              key={i}
              className="bar"
              x={i * 55}
              y={0}
              width={50}
              height={d.value * 20}
              fill={d.color}
            />
          ))}
          </g>
        </svg>
      </div>
    );
  }
}
