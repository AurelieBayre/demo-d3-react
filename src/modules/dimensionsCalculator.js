const responsiveWidth = (desktopWidth, mobileWidth ) => desktopWidth > mobileWidth ? 
  mobileWidth 
  : desktopWidth;

const svgLength = (length, margin) => {
  return length + (margin * 2);
};

const rectangleYPosition = (svgHeight, rectangleHeight) => {
  return svgHeight - rectangleHeight;
};

const rectangleHeight = (gHeight, yValue) => {
  return gHeight - yValue;
};

export {responsiveWidth, svgLength, rectangleYPosition, rectangleHeight};
