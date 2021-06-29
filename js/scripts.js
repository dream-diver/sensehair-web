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

$(document).ready(() => {
    // Activate Owl Carousel on Team Section
    $('.owl-carousel.owl-carousel-team').owlCarousel({
        loop: true,
        dots: true,
        items: 1,
        animateOut: 'fadeOut',
        animateIn: 'fadeIn'
    });
    // Activate Owl Carousel on Review Section
    $('.owl-carousel.owl-carousel-review').owlCarousel({
        loop: true,
        dots: true,
        items: 1
    });
    // Language Dropdown Change Flag
    $('.language-dropdown .dropdown-item').click(function (e) {
        e.preventDefault();
        $(this).parent().siblings().removeClass('d-none');
        $(this).parent().addClass('d-none');
        let languageImg = $(this).children().clone();
        $(this).parents('.language-dropdown').children('.nav-link').html(languageImg);
    });
});
