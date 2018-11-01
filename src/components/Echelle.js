import React from 'react'
import * as d3 from "d3"

//nos données:
const data = [12, 5, 6, 6, 9, 10, 8] // tester en rajoutant des données pour voir comment le graphique s'adapte

const width = 700
const height = 300

// Attention voici les echelles ! On les définit pour chaque axe: x et y
const x = d3.scaleBand() // définition du type d'échelle
  .rangeRound([0, width]) //définition des limites de l'échelle
  .padding(0.1) // on rajoute du padding entre les barres

const y = d3.scaleLinear()
  .rangeRound([height, 0])

// Et il faut relier les axes aux données:
x.domain(data.map((d,i) => i))
y.domain([0, d3.max(data, d => d)])

export default () => (
     <div>
      <h1>Les échelles</h1>
    <svg width={width} height={height}>

      {data.map((d, i) => {
        console.log(i)
      return (
        <rect
          key={i}
          className="bar"
          x={x(i)}
          y={y(d)}
          width={x.bandwidth()}
          height={height - y(d)}
        />
      )}
      )}
      
    </svg>
    
    </div>
)

