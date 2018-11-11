import React from 'react';
import {getNewPageInfo, toNewPage} from '../modules/arrowNavigator'

const Info = (props) => {
  const pages = props.pages;
  const newPage = getNewPageInfo(pages)
  const redirectToNewPage = toNewPage("info",newPage)

    return redirectToNewPage ? redirectToNewPage : (
    <div>
      <h2>D3 = Data Driven Document</h2>
      <p>
        <strong>
          Comment créer des graphiques pour le web à partir d'un jeu de données
          ?
        </strong>
      </p>
      <p>
        Créateurs : Mike Bostock, Jeffrey Heer, Vadim Ogievetsky <br />
        Première version : 2011
      </p>
      <ul>
        <li>D3 repose sur la techno SVG.</li>
        <li>Il intéragit avec le DOM.</li>
        <li>Il calcule les proportions et les mises à l'échelle</li>
        <li>Il propose des fonctionnalités d'animation</li>
        <li>Son utilisation dépasse largement la pure création de graphiques</li>
      </ul>
    </div>
  );
};

export default Info;
