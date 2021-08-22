window.addEventListener('DOMContentLoaded', event => {
    // Initializing AOS
    AOS.init();

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
// LookBook
$('.header-collapse-link').click(function (e) {
    let text = $(this).text();
    if (text === "HAIR-UP/AVANT GARDE") {
        text = "HAIR";
    }
    $('.lookbook_all').removeClass("d-none");
    $('.lookbook').addClass("d-none");
    $('html, body').animate({
        scrollTop: $("#" + text).offset().top - 79
    }, 750);

});
// Services
$('.prices-row-1 .card-row').click(function (e) {
    $('.prices-row-2').toggleClass("d-none");
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
changeBgColorOnScroll(".timeline-circle", 50, "#000", "#f86624");
changeBgColorOnScroll(".timeline-box", 38, "#f86624", "#e5e5e5", ".timeline-box-arrow");

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
changeBgColorOfTimelineLine(".timeline-line", 50);

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
