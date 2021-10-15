window.addEventListener('DOMContentLoaded', event => {
  // Initializing AOS
  AOS.init();
});


// Detect Element In Viewport Or Not For Image Background Section
const inViewport = (element, percent) => {
  // Get the elements position relative to the viewport
  var bb = element.getBoundingClientRect();
  // Check if the element is outside the viewport
  // Then invert the returned value because you want to know the opposite
  return !(bb.top > innerHeight - (window.innerHeight / (100 / (100 - percent))));
}

const changeBgColorOnScroll = (selector, percent, color1, color2, innerElementsSelector = false) => {
  // Element Section
  var elements = Array.from(document.querySelectorAll(selector));
  // Inner Element Section
  if (innerElementsSelector) {
    var innerElements = Array.from(document.querySelectorAll(selector.concat(" ").concat(innerElementsSelector)));
  }
  // Listen for the scroll event
  document.addEventListener('scroll', event => {
    // Check the viewport status
    elements.map((item, index) => {
      if (item) {
        item.style.transition = 'all 250ms ease-in-out';
        if (inViewport(item, percent)) {
          item.style.backgroundColor = color1;
          if (innerElementsSelector) {
            innerElements[index].style.backgroundColor = color1;
          }
        } else {
          item.style.backgroundColor = color2;
          if (innerElementsSelector) {
            innerElements[index].style.backgroundColor = color2;
          }
        }
      }
    });
  })
}
changeBgColorOnScroll(".timeline-circle", 80, "#000", "#ffb86f");
changeBgColorOnScroll(".timeline-box", 68, "#ffb86f", "#e5e5e5", ".timeline-box-arrow");

const pxScrolled = (element, percent) => {
  // Get the elements position relative to the viewport
  var bb = element.getBoundingClientRect();
  // Check if the element is outside the viewport
  // Then invert the returned value because you want to know the opposite
  return -(bb.top - (innerHeight - (window.innerHeight / (100 / (100 - percent)))));
}

const changeBgColorOfTimelineLine = (selector, percent) => {
  // Element Section
  var elements = Array.from(document.querySelectorAll(selector));
  // Inner Element Section
  var innerElements = Array.from(document.querySelectorAll(".timeline-line-hover"));
  // Listen for the scroll event
  document.addEventListener('scroll', event => {
    // Check the viewport status
    elements.map((item, index) => {
      if (item) {
        item.style.transition = 'all 250ms ease-in-out';
        if (pxScrolled(item, percent) > 0) {
          innerElements[index].style.height = pxScrolled(item, percent).toString(10).concat("px");
        } else {
          innerElements[index].style.height = "0";
        }
      }
    });
  })
}
changeBgColorOfTimelineLine(".timeline-line", 80);

const visibleOnScroll = (selector) => {
  percent = 0;
  // Element Section
  var element = document.querySelector(selector);
  var htmlElement = document.querySelector("html");
  // Listen for the scroll event
  document.addEventListener('scroll', event => {
    // Check the viewport status
    if (element) {
      if (pxScrolled(htmlElement, percent) > 350) {
        element.style.transition = 'opacity 750ms ease-in-out';
        element.style.opacity = '1';
      } else {
        element.style.opacity = '0';
      }
    }
  })
};

visibleOnScroll("#scroll-to-top");

const topOnClick = (selector) => {
  // Element Section
  var element = document.querySelector(selector);
  // Listen for the click event
  element.addEventListener('click', event => {
    // Check the viewport status
    if (element) {
      document.body.scrollTop = 0; // For Safari
      document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
    }
  });
}
topOnClick("#scroll-to-top .btn");
