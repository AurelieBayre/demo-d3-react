import React from 'react';
import Svg from './Svg';

import {Redirect} from 'react-router-dom';
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
    if (this.props.toSvg === true) {
      return <Redirect to="/svg" />;
    }
    if (this.props.toEchelle === true) {
      return <Redirect to="/scale" />;
    }

    return (
      <div
        // onKeyDown={e => this.setState(arrowNavigator(e, 'toSvg', 'toEchelle'))}
        // tabIndex="0"
      >
        <h1>Compter la hauteur à partir du bas</h1>
        <h2>hauteur du SVG - hauteur de la barre</h2>
        <svg width="700" height="300">
          {this.state.data.map((d, i) => (
            <rect
              key={i}
              className="bar"
              x={i * 55}
              y={300 - d.value * 20}
              width={50}
              height={d.value * 20}
              fill={d.color}
            />
          ))}
        </svg>
      </div>
    );
  }
}
