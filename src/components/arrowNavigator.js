const arrowNavigator = (e, previousPage, nextPage) => {
  if (e.keyCode === 39) {
    return {[nextPage]: true};
  }
  if (e.keyCode === 37) {
    return {[previousPage]: true};
  }
};

export default arrowNavigator;
