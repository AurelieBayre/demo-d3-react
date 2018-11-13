import React, {Component} from 'react';
import {Container} from 'reactstrap';

import {getNewPageInfo, toNewPage} from '../modules/arrowNavigator';

export default class Intro extends Component {
  render() {
    const pages = this.props.pages;
    const newPage = getNewPageInfo(pages);
    const redirectToNewPage = toNewPage('', newPage);

    return redirectToNewPage ? (
      redirectToNewPage
    ) : (
      <Container className="fluid">
        <h1>Intro à D3.js</h1>
        <div className="info">
          <h2>D3 = Data Driven Document</h2>
          {/* <p className="main-text">
            Créateurs : Mike Bostock, Jeffrey Heer, Vadim Ogievetsky <br />
            Première version : 2011
          </p> */}
          <ul>
            <li>D3 repose sur la techno SVG.</li>
            <li>Il est étroitement lié au DOM.</li>
          </ul>
        </div>
      </Container>
    );
  }
}
