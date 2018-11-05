import React, {Component} from 'react';
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
        <h1>Devinette : pourquoi obtient-on cela? </h1>
        <svg width="700" height="300">
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
        </svg>
      </div>
    );
  }
}
