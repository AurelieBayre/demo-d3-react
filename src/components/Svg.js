import React, {Component} from 'react';
// Exemple juste avec react, sans D3:

export default class Svg extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {value: 12, color: '#000000'},
        {value: 5, color: '#000000'},
        {value: 6, color: '#000000'},
        {value: 6, color: '#000000'},
        {value: 9, color: '#000000'},
        {value: 10, color: '#000000'},
        {value: 8, color: '#000000'}
      ]
    };
  }
  getColor(arr) {
    const dataWithRandomColors = arr.map(obj => {
     const randomColor = Math.floor(Math.random() * 16777215).toString(16);
     return {value: obj.value,
            color: "#"+randomColor
      }
    })
    return dataWithRandomColors;
  };
  

  render() {
    const newData = this.getColor(this.state.data);
    return (
      <div>
        <h1>Devinette : pourquoi obtient-on cela? </h1>
        <svg width="700" height="300">
          {newData.map((d, i) => (
            <rect
              key={i}
              className="bar"
              x={i * 70}
              y={d.value}
              width={25}
              height={d.value * 10}
              fill={d.color}
            />
          ))}
        </svg>
      </div>
    );
  }
}
