const arrowNavigator = (e, previousPage, nextPage) => {
  console.log("KEY!   ", e.keyCode);
  if (e.keyCode === 39) {
    console.log({[nextPage]: true})
    return {[nextPage]: true}
  }
  if (e.keyCode === 37) {
    return {[previousPage]: true}
  }
}

export default arrowNavigator;