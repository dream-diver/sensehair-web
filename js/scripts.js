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
    // Activate Owl Carousel on Services Section
    $('.owl-carousel.owl-carousel-services').owlCarousel({
        loop: true,
        dots: true,
        nav: true,
        items: 1,
        animateOut: 'fadeOut',
        animateIn: 'fadeIn'
    });
    // Activate Owl Carousel on Team Section
    $('.owl-carousel.owl-carousel-team').owlCarousel({
        loop: true,
        dots: true,
        items: 1,
        animateOut: 'fadeOut',
        animateIn: 'fadeIn'
    });
    // Activate Owl Carousel on Team Section
    $('.owl-carousel.owl-carousel-icons').owlCarousel({
        loop: true,
        items: 1.9,
        dots: false
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
const cardMen = document.querySelector('.card-men');
if (cardMen) {
    cardMen.addEventListener('click', () => {
        cardMen.classList.toggle('active');
        cardMen.children[0].classList.toggle('d-none');
        cardMen.children[1].classList.toggle('d-none');
    });
}
const cardRow = document.querySelectorAll('.prices-row-1 .card-row');
if (cardRow) {
    cardRow.forEach((card) => {
        card.addEventListener('click', function (event) {
            let cardActive = document.querySelectorAll('.card.active');
            if (cardActive.length !== 0) {
                console.log(cardActive);
                cardActive.forEach((activeCard) => {
                    activeCard.children[0].classList.toggle('d-none');
                    activeCard.children[1].classList.toggle('d-none');
                    activeCard.classList.toggle('active');
                })
            } else {
                card.children[0].classList.toggle('d-none');
                card.children[1].classList.toggle('d-none');
                card.classList.toggle('active');
            }
            if (document.querySelector('.prices-row-2').classList.contains("d-none")) {
                document.querySelector('.prices-row-2').classList.toggle("d-none");
                document.querySelector('.prices-row-2').scrollIntoView({
                    behavior: "smooth", block: "center", inline: "nearest"
                });
            } else {
                document.querySelector('.prices-row-2').classList.toggle("d-none");
            }
        });
    });
}

const priceModal = document.getElementById("priceModal");
if (priceModal) {
    priceModal.addEventListener('click', () => {
        setTimeout(() => {
            if (!priceModal.classList.contains("show")) {
                cardMen.children[0].classList.toggle("d-none");
                cardMen.children[1].classList.toggle("d-none");
                cardMen.classList.remove('active');
            }
        }, 300);
    });
}

// Career
const applyBtn = document.getElementById('apply_btn');
if (applyBtn) {
    applyBtn.addEventListener('click', function (event) {
        setTimeout(() => {
            let collapseApplicationForm = document.getElementById('collapseApplicationForm').getBoundingClientRect();
            document.body.scrollTop = document.body.scrollTop + collapseApplicationForm.y - 100; // For Safari
            document.documentElement.scrollTop = document.documentElement.scrollTop + collapseApplicationForm.y - 100; // For Chrome, Firefox, IE and Opera
        }, 150);
    });
}



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
