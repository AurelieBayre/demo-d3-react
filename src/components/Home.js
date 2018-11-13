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
        <h1>Meetup JS Don't Panic</h1>
        <p>14 novembre 2018</p>
        <h2>D3js</h2>
        <h3>Quelques notions à connaître pour débuter</h3>
       </Container>
    );
  }
}
