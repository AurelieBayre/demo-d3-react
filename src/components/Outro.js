import React from 'react';
import {Row, Col} from 'reactstrap';

import {getNewPageInfo, toNewPage} from '../modules/arrowNavigator';

const Outro = props => {
  const pages = props.pages;
  const newPage = getNewPageInfo(pages);
  const redirectToNewPage = toNewPage('outro', newPage);

  return redirectToNewPage ? (
    redirectToNewPage
  ) : (
    <Row>
      <Col xs="5" className="left-side">
        
        <h2>Merci !</h2>
        <p>@AurelieBayre</p>
        <p>#100JoursDeCode</p>    
        <a href="https://github.com/AurelieBayre/demo-d3-react" target="_blank" rel="noopener noreferrer">Voir ce repo</a>
      </Col>
      <Col xs="7" className="col-text-vertical-alignment">
        <h2>Ressources</h2>
        <a href="https://d3js.org/">Le site D3.js</a>
        <br />
        <a href="https://bost.ocks.org/mike/">Le blog du boss</a>
        <br />
        <p>Des exemples animés:</p>
        <a href="http://ghv.artzub.com/#repo=demo-d3-react&climit=100&user=aureliebayre">stats github</a>
        <br />
        <a href="http://d3.artzub.com/wbca/">Transactions World Bank</a>
      </Col>
    </Row>
  );
};

export default Outro;
