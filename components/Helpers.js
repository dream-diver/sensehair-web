export const pxScrolled = (element, percent) => {
  // Get the elements position relative to the viewport
  var bb = element.getBoundingClientRect();
  // Check if the element is outside the viewport
  // Then invert the returned value because you want to know the opposite
  return -(bb.top - (innerHeight - (window.innerHeight / (100 / (100 - percent)))));
}

// Detect Element In Viewport Or Not For Image Background Section
export const inViewport = (element, percent) => {
  // Get the elements position relative to the viewport
  var bb = element.getBoundingClientRect();
  // Check if the element is outside the viewport
  // Then invert the returned value because you want to know the opposite
  return !(bb.top > innerHeight - (window.innerHeight / (100 / (100 - percent))));
}
