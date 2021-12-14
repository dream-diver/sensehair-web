import { useContext } from "react"
import { GlobalContext } from "../contexts/GlobalContext"

import imageStars from '../../public/images/about/stars.png'
import imageUser from '../../public/images/about/user.png'


/* eslint-disable @next/next/no-img-element */
const Reviews = () => {
  const [state] = useContext(GlobalContext)
  const reviews = [
    {
      title: state.text.aboutReview1Title,
      name: state.text.aboutReview1Name,
      text: state.text.aboutReview1Text,
    },
    {
      title: state.text.aboutReview2Title,
      name: state.text.aboutReview2Name,
      text: state.text.aboutReview2Text,
    },
    {
      title: state.text.aboutReview3Title,
      name: state.text.aboutReview3Name,
      text: state.text.aboutReview3Text,
    },
  ]
  return (
    <section id="reviews">
      <div className="container">
        <div className="row">
          <div className="col py-5">
            <h1 className="font-weight-700 mb-5" data-aos="fade-up" data-aos-duration="750" data-aos-delay="500" data-aos-once="true">REVIEWS</h1>
            { reviews.map((review, index) => (
              <div className="comment my-5" key={ index }>
                <h4 className="text-dark-50" data-aos="fade-up" data-aos-duration="750" data-aos-delay="600" data-aos-once="true">{ review.title }</h4>
                <div className="d-flex" data-aos="fade-up" data-aos-duration="750" data-aos-delay="800" data-aos-once="true">
                  <img loading="lazy" src={ imageStars.src } alt="stars" height="28px" className="me-3" />
                </div>
                <p className="mt-3" data-aos="fade-up" data-aos-duration="750" data-aos-delay="1000" data-aos-once="true">{ review.text }</p>
                <div className="d-flex align-items-center" data-aos="fade-up" data-aos-duration="750" data-aos-delay="1200" data-aos-once="true">
                  <img loading="lazy" src={ imageUser.src } alt="stars" height="46" className="me-3" />
                  <p className="font-1-3x text-dark-50 mb-0">{ review.name }</p>
                </div>
              </div>
            )) }

            <a href={ `https://www.treatwell.nl/${state.locale === "en" && "en/"}salon/sense-hair-by-carlos/#reviews` } target="_blank" rel="noreferrer" className="btn btn-light text-dark-50" data-aos="fade-up" data-aos-duration="750" data-aos-delay="750" data-aos-once="true">{ state.text.aboutReviewReadMore }</a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Reviews
