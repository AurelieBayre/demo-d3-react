import React, {Component} from 'react';
import {
  scaleBand,
  scaleLinear,
  max,
  select,
  event,
  axisLeft,
  axisBottom
} from 'd3';
import { svgLength } from '../modules/dimensionsCalculator';

export default class Reusable extends Component {
  componentDidMount() {
    this.drawChart();
  }

  drawChart() {
    const data = this.props.data;
    const id = `#barchart-${this.props.id}`;
    const width = this.props.width;
    const height = this.props.height;

    const svgWidth = svgLength(width, 40);
    const svgHeight = svgLength(width, 40);

    const tooltip = select('#tooltip');

    const x = scaleBand()
      .rangeRound([0, this.props.width])
      .padding(0.1);

    const y = scaleLinear().rangeRound([this.props.height, 0]);

    x.domain(data.map((d, i) => d.name));
    y.domain([0, max(data, d => d.value)]);

    const svg = select(id)
      .append('svg')
      .attr('width', svgWidth)
      .attr('height', svgHeight)
      .append('g')
      .attr('transform', 'translate(20,20)');

    svg
      .selectAll('rect')
      .data(data)
      .enter()
      .append('rect')
      .attr('x', (d, i) => x(d.name))
      .attr('y', (d, i) => y(d.value))
      .attr('width', x.bandwidth())
      .attr('height', (d, i) => height - y(d.value))
      .attr('fill', this.props.color)
      .attr('class', 'rectangle')
      .on('mousemove', (d, i) => {
        tooltip
          .style('position', 'absolute')
          .style('left', `${event.clientX}px`)
          .style('top', `${event.clientY}px`)
          .style('display', 'inline-block')
          .style('opacity', 0.9)
          .html(
            `<div> <strong>${
              d.name === 'Mercredi'
                ? "Yeah! Mercredi! <br /> c'est le meetup JS Don't Panic!!!"
                : d.name
            }</strong><br />Valeur : ${d.value}</div>`
          );
      })
      .on('mouseout', () => tooltip.style('display', 'none'));

    // Représenter les axes X, Y
    svg
      .append('g')
      .attr('transform', 'translate(0,' + height + ')')
      .attr('class', 'x-axis');

    svg.append('g').attr('class', 'y-axis');

    svg.select('.x-axis').call(axisBottom(x));
    svg.select('.y-axis').call(axisLeft(y));
  }

  render() {
    return <h3>{this.props.title}</h3>;
  }
}
