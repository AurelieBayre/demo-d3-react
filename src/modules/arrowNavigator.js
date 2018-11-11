import React from 'react';
import {Redirect} from 'react-router-dom'; 

const currentIndex = subArr => {
  return subArr[1] === true;
};

const getNewPageInfo = (arr) => {
    const newIndex = arr.findIndex(currentIndex);
    const page = arr[newIndex][0]
    const path = `/${page}`
    return {page, path}
}


const toNewPage = (oldPage, newPage) => {
    if (oldPage !== newPage.page) {
      return (<Redirect to={newPage.path} />)
    }
    else{
      return false;
    }
}

const colateralIndexes = (index, lastIndex) => {
  if (index === 0) {
    return {previous: lastIndex, next: index + 1};
  } else if (index === lastIndex) {
    return {
      previous: index - 1,
      next: 0
    };
  } else {
    return {previous: index - 1, next: index + 1};
  }
};

const arrowNavigator = (e, arr) => {
  const current = arr.findIndex(currentIndex);
  const previousAndNextIndex = colateralIndexes(current, arr.length - 1);
  
  if (e.keyCode === 39) {
    const newArr = arr.map((subArr,i) => i === current ? [subArr[0], false] 
      : i === previousAndNextIndex.next ? [subArr[0], true]
      : subArr)
    return newArr;
  }
  if (e.keyCode === 37) {
    const newArr = arr.map((subArr,i) => i === current ? [subArr[0], false] 
      : i === previousAndNextIndex.previous ? [subArr[0], true]
      : subArr)
    return newArr;
  }
  else{
    // Pour n'importe quelle autre touche sinon bug!
    return arr; 
  }
};

export {currentIndex, getNewPageInfo, toNewPage, arrowNavigator};
