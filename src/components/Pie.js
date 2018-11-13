import React, {Component} from 'react';
import {
  pie,
  scaleOrdinal,
  quantize,
  interpolateSpectral,
  arc,
  select,
  event
} from 'd3';

export default class Pie extends Component {
  componentDidMount() {
    this.drawPieChart();
  }

  drawPieChart() {
    const data = this.props.data;
    const id = this.props.id;

    const myPie = pie().value(d => d.value);

    // D3 détermine les couleurs sur une échelle:
    const color = scaleOrdinal().range(
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

    const tooltip = select('#tooltip');

    g.selectAll('path')
      .data(arcs)
      .enter()
      .append('path')
      .attr('fill', (d, i) => color(i))
      .attr('stroke', 'white')
      .attr('d', myArc)
      .on('mousemove', d => {
        tooltip
          .style('position', 'absolute')
          .style('left', `${event.clientX}px`)
          .style('top', `${event.clientY}px`)
          .style('display', 'inline-block')
          .style('opacity', 0.9)
          .html(
            `<div> <strong>${d.data.name}</strong><br />Valeur : ${
              d.data.value
            }</div>`
          );
      })
      .on('mouseout', () => tooltip.style('display', 'none'));
  }

  render() {
    return <h3>{this.props.title}</h3>;
  }
}
