/* eslint-disable @next/next/no-img-element */
const Reviews = () => {
  return (
    <section id="reviews">
      <div className="container">
        <div className="row">
          <div className="col py-5">
            <h1 className="font-weight-700 mb-5" data-aos="fade-up" data-aos-duration="750" data-aos-delay="500" data-aos-once="true">REVIEWS</h1>
            <div className="comment my-5">
              <h4 className="text-dark-50" data-aos="fade-up" data-aos-duration="750" data-aos-delay="600" data-aos-once="true">Lorem Ipsum</h4>
              <div className="d-flex" data-aos="fade-up" data-aos-duration="750" data-aos-delay="800" data-aos-once="true">
                <img loading="lazy" src="./images/about/stars.png" alt="stars" height="28px" className="me-3" />
                <p className="font-1-3x text-dark-50">2 days ago</p>
              </div>
              <p data-aos="fade-up" data-aos-duration="750" data-aos-delay="1000" data-aos-once="true">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum maxime, cum labore cumque repellat molestiae impedit numquam. Assumenda quaerat quasi temporibus, tempora molestiae, sit laudantium corporis, culpa maxime laboriosam sint!</p>
              <div className="d-flex align-items-center" data-aos="fade-up" data-aos-duration="750" data-aos-delay="1200" data-aos-once="true">
                <img loading="lazy" src="./images/about/user.png" alt="stars" height="46" className="me-3" />
                <p className="font-1-3x text-dark-50 mb-0">Profile</p>
              </div>
            </div>
            <div className="comment my-5">
              <h4 className="text-dark-50" data-aos="fade-up" data-aos-duration="750" data-aos-delay="600" data-aos-once="true">Lorem Ipsum</h4>
              <div className="d-flex" data-aos="fade-up" data-aos-duration="750" data-aos-delay="800" data-aos-once="true">
                <img loading="lazy" src="./images/about/stars.png" alt="stars" height="28px" className="me-3" />
                <p className="font-1-3x text-dark-50">2 days ago</p>
              </div>
              <p data-aos="fade-up" data-aos-duration="750" data-aos-delay="1000" data-aos-once="true">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum maxime, cum labore cumque repellat molestiae impedit numquam. Assumenda quaerat quasi temporibus, tempora molestiae, sit laudantium corporis, culpa maxime laboriosam sint!</p>
              <div className="d-flex align-items-center" data-aos="fade-up" data-aos-duration="750" data-aos-delay="1200" data-aos-once="true">
                <img loading="lazy" src="./images/about/user.png" alt="stars" height="46" className="me-3" />
                <p className="font-1-3x text-dark-50 mb-0">Profile</p>
              </div>
            </div>
            <button className="btn btn-light text-dark-50" data-aos="fade-up" data-aos-duration="750" data-aos-delay="750" data-aos-once="true">See More</button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Reviews
