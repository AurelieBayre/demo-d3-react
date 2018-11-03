import React, {Component} from 'react'
//import * as d3 from "d3";

export default class Svg extends Component {
  render() {
    const data = [12, 5, 6, 6, 9, 10, 8]
    return (
      <div>
        <h1>Devinette : pourquoi obtient-on cela? </h1>
        <svg width="700" height="300">
          {data.map((d, i) => (
            <rect
              key={i}
              className="bar"
              x={i * 70}
              y={d}
              width={25}
              height={d * 10}
            />
          ))}
        </svg>
      </div>
    )
  }
}
