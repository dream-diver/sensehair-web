/* eslint-disable @next/next/no-img-element */
import { useCallback, useEffect, useState } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import DotButton from '../slider/DotButton'
const Review = () => {
  const [viewportRef, embla] = useEmblaCarousel({ loop: true, skipSnaps: false })
  const [scrollSnaps, setScrollSnaps] = useState([]);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const scrollTo = useCallback((index) => embla && embla.scrollTo(index), [
    embla
  ]);

  const onSelect = useCallback(() => {
    if (!embla) return;
    setSelectedIndex(embla.selectedScrollSnap());
  }, [embla, setSelectedIndex]);

  useEffect(() => {
    if (!embla) return;
    onSelect();
    setScrollSnaps(embla.scrollSnapList());
    embla.on("select", onSelect);
  }, [embla, setScrollSnaps, onSelect]);

  return (
    <section id="review" className="text-center py-5">
      <h2 className="quotation" data-aos="fade-up" data-aos-duration="750" data-aos-delay="500" data-aos-once="true">
        “WE ARE HAPPY,<br />
        IF YOU ARE HAPPY”
      </h2>

      <div className="bg-light w-100 pt-5 pb-4">
        <h1 className="h1-margin-bottom font-weight-700" data-aos="fade-up" data-aos-duration="750" data-aos-delay="500" data-aos-once="true">REVIEWS</h1>
        <div className="embla">
          <div className="embla__viewport" ref={ viewportRef }>
            <div className="embla__container">



              <div className="embla__slide">
                <div className="container">
                  <div className="row mb-5">
                    <div className="col-6 col-md-4 offset-md-3">
                      <img loading="lazy" src="./images/rating.png" alt="rating" className="img-fluid" />
                    </div>
                    <div className="col text-start">
                      <h2 className="review-count d-inline-block font-weight-700 mb-0">658 reviews</h2>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-md-4">
                      <img loading="lazy" src="./images/image rvw.png" alt="image_rvw" className="img-fluid" />
                    </div>
                    <div className="col-md-8 d-flex align-items-center">
                      <p className="review-text mt-3">“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore cumsan lacus vel facilisis.”</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="embla__slide">
                <div className="container">
                  <div className="row mb-5">
                    <div className="col-6 col-md-4 offset-md-3">
                      <img loading="lazy" src="./images/rating.png" alt="rating" className="img-fluid" />
                    </div>
                    <div className="col text-start">
                      <h2 className="review-count d-inline-block font-weight-700 mb-0">658 reviews</h2>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-md-4">
                      <img loading="lazy" src="./images/image rvw.png" alt="image_rvw" className="img-fluid" />
                    </div>
                    <div className="col-md-8 d-flex align-items-center">
                      <p className="review-text">“Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, impedit!”</p>
                    </div>
                  </div>
                </div>
              </div>



            </div>
          </div>
        </div>
        <div className="embla__dots">
          { scrollSnaps.map((_, index) => (
            <DotButton
              key={ index }
              selected={ index === selectedIndex }
              onClick={ () => scrollTo(index) }
            />
          )) }
        </div>
      </div>
    </section>
  )
}

export default Review
