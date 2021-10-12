/* eslint-disable @next/next/no-img-element */
const InfoImgReverse = () => {
  return (
    <section id="info_img_copy">
      <div className="container">
        <div className="row">
          <div className="col-md-4 py-5" data-aos="fade-right" data-aos-duration="750" data-aos-delay="500" data-aos-once="true">
            <img loading="lazy" src="./images/about/first_salon.png" alt="first_salon" className="img-fluid" />
          </div>
          <div className="col-md-8 py-5" data-aos="fade-left" data-aos-duration="750" data-aos-delay="500" data-aos-once="true">
            <h1 className="font-weight-700 mb-3">First Salon - Carlos Krappers</h1>
            <p className="font-1-3x">Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque mollitia non magnam autem nisi error doloribus nostrum! Distinctio blanditiis, eos maxime voluptates aspernatur, exercitationem pariatur reiciendis voluptatibus veritatis aliquid nam.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default InfoImgReverse
