import React from 'react';
import { Link } from 'react-router-dom';

const MainMenu = () => {
  return <div>
    <Link to="/">
      <button>Intro</button>
    </Link>
    <Link to="/about">
      <button>About</button>
    </Link>
    <Link to="/info">
      <button>info</button>
    </Link>
    <Link to="/svg">
      <button>svg</button>
    </Link>
    <Link to="/svg2">
      <button>svg 2</button>
    </Link>
    <Link to="/echelle">
      <button>echelles</button>
    </Link>
    <Link to="/bulle">
      <button>bulle info</button>
    </Link>
    <Link to="/react-barchart">
      <button>react barchart</button>
    </Link>
    
  </div>
}

export default MainMenu