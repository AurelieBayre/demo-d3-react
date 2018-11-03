import React from 'react';
import {scaleBand, scaleLinear, max} from 'd3';

const data = [12, 5, 6, 6, 9, 10, 8, 5, 6, 6, 9, 10, 8];

const width = 700;
const height = 300;

// Attention voici les echelles ! On les définit pour chaque axe: x et y
const x = scaleBand() // définition du type d'échelle
  .rangeRound([0, width]) //définition des limites de l'échelle
  .padding(0.1);

const y = scaleLinear().rangeRound([height, 0]);

// Et il faut relier les axes aux données:
x.domain(data.map((d, i) => i));
y.domain([0, max(data, d => d)]);

export default () => (
  <div>
    <h1>Les échelles</h1>
    <svg width={width} height={height}>
      {data.map((d, i) => {
        return (
          <rect
            key={i}
            className="bar"
            x={x(i)}
            y={y(d)}
            width={x.bandwidth()}
            /*
            littéralement largeur de bande aka largeur de la barre. 
            Elle est calculée en fonction du nombre d'items dans le dataset.
          */
            height={height - y(d)}
          />
        );
      })}
    </svg>
  </div>
);
