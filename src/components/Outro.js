import React, {Component} from 'react';
import {Row, Col} from 'reactstrap';

import {getNewPageInfo, toNewPage} from '../modules/arrowNavigator';

export default class Outro extends Component {
  componentDidMount() {
    this.header = document.getElementsByTagName('header')[0];
    this.headerDisplay = this.header.style.display;
    this.header.style.display = 'none';
  }

  componentWillUnmount() {
    this.header.style.display = this.headerDisplay;
  }

  render() {
    const pages = this.props.pages;
    const newPage = getNewPageInfo(pages);
    const redirectToNewPage = toNewPage('outro', newPage);

    return redirectToNewPage ? (
      redirectToNewPage
    ) : (
      <Row className="row-outro">
        <Col xs="6" className="col-border left-col">
          <div className="left-side">
            <h2>Merci !</h2>
            <p>
              @AurelieBayre
              <br />
              #100JoursDeCode
            </p>
            <a
              href="https://github.com/AurelieBayre/demo-d3-react"
              target="_blank"
              rel="noopener noreferrer"
            >
              Voir ce repo
            </a>
          </div>
        </Col>
        <Col xs="6" className="right-col">
          <div className="right-side">
            <h2>Ressources</h2>
            <p>
              <h3>Les incontournables :</h3>
              <a href="https://d3js.org/">Le site D3.js</a>
              <br />
              <a href="https://bost.ocks.org/mike/">Le blog du boss</a>
              <br />
              <h3>Des exemples animés :</h3>
              <a href="http://ghv.artzub.com/#repo=demo-d3-react&climit=100&user=aureliebayre">
                Stats github
              </a>
              <br />
              <a href="http://d3.artzub.com/wbca/">Transactions World Bank</a>
              <h3>Les notions : </h3>
              <a href="https://d3indepth.com/scales/">Les échelles</a>
              <br />
              <a href="https://www.sitepoint.com/a-beginners-guide-to-data-binding-in-d3-js/">
                Le data binding
              </a>
              <br />
              <a href="https://www.smashingmagazine.com/2014/11/styling-and-animating-svgs-with-css/">
                Les SVG
              </a>
            </p>
          </div>
        </Col>
      </Row>
    );
  }
}
