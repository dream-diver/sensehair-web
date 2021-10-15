import { useEffect } from "react";
import { FaArrowUp } from "react-icons/fa"
import { pxScrolled } from "./Helpers"

const ScrollToTop = () => {

  useEffect(() => {
    const visibleOnScroll = (selector) => {
      let percent = 0;
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

  }, [])

  const topOnClick = () => {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  }
  return (
    <section id="scroll-to-top">
      <button className="btn btn-dark" onClick={ topOnClick }>
        <FaArrowUp />
      </button>
    </section>
  )
}

export default ScrollToTop
