import React, {Component} from 'react';
import { scaleBand, scaleLinear, max, select, event} from 'd3';

export default class Reusable extends Component {
  componentDidMount() {
    this.drawChart();
  }

  drawChart() {
    const data = this.props.data;
    const id = `#${this.props.id}`;

    const tooltip = select(id)
    .append('div')
    .attr('class', 'tooltip')

    const x = scaleBand()
      .rangeRound([0, this.props.width])
      .padding(0.1);

    const y = scaleLinear().rangeRound([this.props.height, 0]);

    x.domain(data.map((d, i) => i));
    y.domain([0, max(data, d => d)]);

    const svg = select(id)
      .append('svg')
      .attr('width', this.props.width)
      .attr('height', this.props.height)
      .style('margin-left', 100);

    svg
      .selectAll('rect')
      .data(data)
      .enter()
      .append('rect')
      .attr('x', (d, i) => x(i))
      .attr('y', (d, i) => y(d))
      .attr('width', x.bandwidth())
      .attr('height', (d, i) => this.props.height - y(d))
      .attr('fill', this.props.color)
      .attr('class', 'rectangle')
        .on('mousemove', (d, i)  => {		
          tooltip
              .style('position', 'absolute')
              .style('left', `${event.pageX +10}px` )
              .style('top', `${event.pageY}px`)
              .style('display', 'inline-block')
              .style('opacity', 0.9)		
              .html(`<div>${d}</div>`)		
          })					
        .on("mouseout", () =>	tooltip.style('display', 'none'));
  }

  render() {
    return <h3>Barchart</h3>;
  }
}
