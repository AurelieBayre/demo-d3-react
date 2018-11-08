import React from 'react';
import {Link} from 'react-router-dom';

const MainMenu = () => {
  return (
    <div>
      <Link to="/">
        <button>Intro</button>
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
      <Link to="/scale">
        <button>echelle</button>
      </Link>
      <Link to="/barchart">
        <button>barchart</button>
      </Link>
      <Link to="/piechart">
        <button>pie</button>
      </Link>
      <Link to="/dashboard">
        <button>dashboard</button>
      </Link>
    </div>
  );
};

export default MainMenu;
