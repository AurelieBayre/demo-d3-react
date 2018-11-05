import React from 'react';
import Svg from './Svg';
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
    return (
      <div>
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
