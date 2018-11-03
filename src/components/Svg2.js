import React, {Component} from 'react'
//import * as d3 from "d3";

export default class Svg2 extends Component {
  render() {
    const data = [12, 5, 6, 6, 9, 10, 8]
    return (
      <div>
        <h1>Compter la hauteur à partir du bas</h1>
        <h2>hauteur du SVG - hauteur de la barre</h2>
        <svg width="700" height="300">
          {data.map((d, i) => (
            <rect
              key={i}
              className="bar"
              x={i * 70}
              y={300 - d * 10}
              width={25}
              height={d * 10}
            />
          ))}
        </svg>
      </div>
    )
  }
}
