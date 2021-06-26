window.addEventListener('DOMContentLoaded', event => {

    // Navbar shrink function
    var navbarShrink = () => {
        const navbarCollapsible = document.body.querySelector('#main-menu');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
        }
    };

    // Shrink the navbar 
    navbarShrink();

    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarShrink);
});

// Activate Owl Carousel
$(document).ready(() => {
    $('.owl-carousel.owl-carousel-team').owlCarousel({
        loop: true,
        dots: true,
        items: 1,
        animateOut: 'fadeOut',
        animateIn: 'fadeIn'
    });
    $('.owl-carousel.owl-carousel-review').owlCarousel({
        loop: true,
        dots: true,
        items: 1
    });
});
