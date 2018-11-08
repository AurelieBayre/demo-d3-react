import React, {Component} from 'react';
import {
  pie,
  scaleOrdinal,
  quantize,
  interpolateSpectral,
  arc,
  select
} from 'd3';

export default class Pie extends Component {
  componentDidMount() {
    this.drawPieChart();
  }

  drawPieChart() {
    const data = this.props.data;
    const id = this.props.id;

    const myPie = pie()
      .sort(null)
      .value(d => d);

    const color = scaleOrdinal()
      .domain(data.map((d, i) => i))
      .range(
        quantize(t => interpolateSpectral(t * 0.8 + 0.1), data.length).reverse()
      );

    const arcs = myPie(data);

    const myArc = arc()
      .innerRadius(0)
      .outerRadius(Math.min(this.props.width, this.props.height) / 2 - 1);

    const svg = select(`#pie-${id}`)
      .append('svg')
      .attr('width', this.props.width + 40)
      .attr('height', this.props.height + 40);

    const g = svg
      .append('g')
      .attr(
        'transform',
        `translate(${this.props.width / 2 + 20},${this.props.height / 2 + 20})`
      );

    g.selectAll('path')
      .data(arcs)
      .enter()
      .append('path')
      .attr('fill', (d, i) => color(i))
      .attr('stroke', 'white')
      .attr('d', myArc);
  }

  render() {
    return <h3>Pie</h3>;
  }
}
