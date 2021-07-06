window.addEventListener('DOMContentLoaded', event => {

    // Navbar shrink function
    var navbarShrink = () => {
        const navbarCollapsible = document.body.querySelector('#main-menu');
        const navbarTopRow = document.body.querySelector('.top-row');
        const navbarBrandImage = document.body.querySelector('.navbar-brand-img');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink');
            navbarTopRow.classList.add('d-lg-block');
            navbarBrandImage.setAttribute("width", "121px");
        } else {
            navbarCollapsible.classList.add('navbar-shrink');
            navbarTopRow.classList.remove('d-lg-block');
            navbarBrandImage.setAttribute("width", "71px");

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
        // e.Prevent Default();
        $(this).parent().siblings().removeClass('d-none');
        $(this).parent().addClass('d-none');
        let languageImg = $(this).children().clone();
        $(this).parents('.language-dropdown').children('.nav-link').html(languageImg);
    });
});
// parallax carousel
$('.carousel-item>img').ready(() => {
    $('.carousel-item>img').each(function (index, value) {
        let imgSrc = $(this).attr('src');
        $(this).css({ "opacity": "0" });
        $(this).parent().css({ "background": `url('${imgSrc}') center no-repeat`, "background-size": "cover", "background-attachment": "fixed" });
    });
});
