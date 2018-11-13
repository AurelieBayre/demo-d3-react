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
        <h1>D3.js</h1>
        <h2>Quelques notions à connaître pour débuter</h2>
       </Container>
    );
  }
}
