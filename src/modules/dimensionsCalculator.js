const svgLength = (length, margin) => {
  return length + (margin * 2);
};

const rectangleYPosition = (svgHeight, rectangleHeight) => {
  return svgHeight - rectangleHeight;
};

const rectangleHeight = (gHeight, yValue) => {
  return gHeight - yValue;
};

export {svgLength, rectangleYPosition, rectangleHeight};
