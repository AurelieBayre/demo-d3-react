import React, {Component} from 'react';
import {getNewPageInfo, toNewPage} from '../modules/arrowNavigator'

export default class Intro extends Component {
  
  render() {
    const pages = this.props.pages;
    const newPage = getNewPageInfo(pages)
    const redirectToNewPage = toNewPage("",newPage)
    
    return redirectToNewPage ? redirectToNewPage : (
      <div>
      <h1>D3js:</h1>
      <h2>
        Quelques notions à connaître pour débuter + des pistes pour une
        intégration avec React
      </h2>
      <p>durée: 20min</p>
    </div>
  );
}
}