const svgLength = (length, margin) => {
  return length + margin;
}

const rectangleYPostition = (svgHeight, rectangleHeight) => {
  return svgHeight - rectangleHeight;
}

export {svgLength, rectangleYPostition};