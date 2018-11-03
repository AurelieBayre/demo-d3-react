import React from 'react';
import * as d3 from 'd3';

const data = [
  {
    jour: 'Lundi',
    niveau: 50
  },
  {
    jour: 'Mardi',
    niveau: 60
  },
  {
    jour: 'Mercredi',
    niveau: 100
  },
  {
    jour: 'Jeudi',
    niveau: 80
  },
  {
    jour: 'Vendredi',
    niveau: 70
  },
  {
    jour: 'Samedi',
    niveau: 80
  },
  {
    jour: 'Dimanche',
    niveau: 90
  }
];

const width = 700;
const height = 300;

// Attention voici les echelles ! On les définit pour chaque axe: x et y
const x = d3
  .scaleBand() // définition du type d'échelle
  .rangeRound([0, width]) // définition des limites de l'échelle
  .padding(0.1);

const y = d3.scaleLinear().rangeRound([height, 0]);

// Relier les axes aux données:
x.domain(data.map(d => d.jour));
y.domain([0, d3.max(data, d => d.niveau)]);

export default () => (
  <div>
    <h1>Les infobulles</h1>
    <svg width={width} height={height}>
      {data.map((d, i) => {
        console.log(i);
        return (
          <rect
            key={i}
            className="bar"
            x={x(d.jour)}
            y={y(d.niveau)}
            width={x.bandwidth()}
            height={height - y(d.niveau)}
          />
        );
      })}
    </svg>
  </div>
);
