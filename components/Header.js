const Header = () => {
  return (
    <header id="header" class="vh-100">
      <nav id="main-menu" class="navbar navbar-expand-lg navbar-dark">
        <div class="container">
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <a class="navbar-brand me-0" href="./index.html">
            <img loading="lazy" src="./images/logo2x.png" alt="logo2x" width="121px" class="navbar-brand-img d-inline-block align-text-top" />
          </a>

          <form class="d-flex d-lg-none">
            <button class="btn btn-sm btn-light rounded-0 font-weight-900">BOOK NOW</button>
          </form>

          <div class="w-100">
            <div class="top-row row mb-1 d-none d-lg-block">
              <div class="col d-flex">
                <ul id="top-menu" class="nav mx-auto mx-md-0 ms-md-auto">
                  <li class="nav-item">
                    <a class="nav-link text-primary" href="#"><i class="fas fa-phone-alt me-1"></i> +31 10 123 456 78</a>
                  </li>
                  <li class="language-dropdown nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="#" id="navbarLang" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                      <img loading="lazy" src="./images/english.png" width="40" alt="english" />
                    </a>
                    <ul class="dropdown-menu" aria-labelledby="navbarLang">
                      <li class="d-none">
                        <a class="dropdown-item" href="#">
                          <img loading="lazy" src="./images/english.png" width="40" alt="english" />
                        </a>
                      </li>
                      <li>
                        <a class="dropdown-item" href="#">
                          <img loading="lazy" src="./images/doutch.png" width="40" alt="doutch" />
                        </a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>

            <div class="row">
              <div class="col">
                <div class="collapse navbar-collapse" id="navbarNav">
                  <ul class="navbar-nav ms-auto">
                    <li class="nav-item">
                      <a class="nav-link active" href="./index.html">Home</a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" href="./about.html">About Us</a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" href="./services.html">Services</a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" href="./lookbook.html">Lookbook</a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" href="./career.html">Career</a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" href="./contact.html">Contact Us</a>
                    </li>
                  </ul>

                  <form class="d-none d-lg-flex ms-lg-2">
                    <button class="btn-book-now btn btn-sm btn-primary rounded-0 font-weight-900">
                      <img loading="lazy" src="./images/schedule.png" height="42" alt="schedule" />
                      <span>BOOK NOW</span>
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
      <div id="carouselHeader" class="carousel slide" data-bs-ride="carousel" data-bs-interval="false">
        <div class="carousel-indicators d-none">
          <button type="button" data-bs-target="#carouselHeader" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselHeader" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselHeader" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div class="carousel-inner">
          <div class="carousel-item active vh-100">
            <img loading="lazy" src="./images/banner1.png" alt="banner1" />
            <div class="carousel-caption">
              <h1 class="font-weight-600" data-aos="fade-up" data-aos-duration="750" data-aos-delay="500" data-aos-once="true">Only THE BEST TEAM FOR YOUR HAIR</h1>
              <p class="font-weight-600" data-aos="fade-up" data-aos-duration="750" data-aos-delay="600" data-aos-once="true">For fresh cuts, styling and coloring, our team is up to date with the latest trends and techniques. Your wishes are key by Sense Hair.</p>
              <button class="btn-book-now btn btn-primary rounded-0 font-weight-900 mx-auto" data-aos="fade-up" data-aos-duration="750" data-aos-delay="700" data-aos-once="true">
                <img loading="lazy" src="./images/schedule.png" height="43" alt="schedule" />
                <span>BOOK NOW</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
