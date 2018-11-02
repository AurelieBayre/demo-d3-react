import React, { Component } from 'react'
import * as d3 from 'd3'

export default class Reusable extends Component {
  componentDidMount() {
    this.drawChart();
  }
    
  drawChart() {
    const data = this.props.data
    
    const svg = d3.select('#chartSpace')
    .append('svg')
    .attr('width', this.props.width)
    .attr('height', this.props.height)
    .style('margin-left', 100)
                  
    svg.selectAll('rect')
      .data(data)
      .enter()
      .append('rect')
      .attr('x', (d, i) => i * 70)
      .attr('y', (d, i) => 300 - 10 * d)
      .attr('width', 65)
      .attr('height', (d, i) => d * 10)
      .attr('fill', this.props.color)
  }
        
  render(){
    return <div>Réutilisable avec des props</div>
  }
}
    
