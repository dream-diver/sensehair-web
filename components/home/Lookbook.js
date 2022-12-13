/* eslint-disable @next/next/no-img-element */
import Link from 'next/link'
import imageLookbook1 from '../../public/images/lookbook/Lookbook1.png'
import imageLookbook2 from '../../public/images/lookbook/Lookbook2.png'
import imageLookbook3 from '../../public/images/lookbook/Lookbook3.png'
import imageLookbook4 from '../../public/images/lookbook/Lookbook4.png'
import imageLookbook5 from '../../public/images/lookbook/Lookbook5.png'
import imageLookbook6 from '../../public/images/lookbook/Lookbook6.png'
import imageLookbook7 from '../../public/images/lookbook/Lookbook7.png'
import imageLookbook8 from '../../public/images/lookbook/Lookbook8.png'
import imageLookbook9 from '../../public/images/lookbook/Lookbook9.png'


const Lookbook = () => {
  const lookbookImages = [
    imageLookbook1,
    imageLookbook2,
    imageLookbook3,
    imageLookbook4,
    imageLookbook5,
    imageLookbook6,
    imageLookbook7,
    imageLookbook8,
    imageLookbook9
  ]

  return (
    <section id="lookbook">
      <div className="container">
        <div className="row">
          <div className="col py-5 text-center" data-aos="fade-up" data-aos-duration="1750" data-aos-delay="3000" data-aos-once="true">
            <h1 className="h1-margin-bottom font-weight-700">LOOKBOOK</h1>

            <div className="row">
              { lookbookImages.map((image, index) => (
                <div className="col-md-4 mb-3" key={ index }>
                  <img loading="lazy" src={ image.src } alt={ "Lookbook_" + index } className="img-fluid" />
                </div>
              )) }
            </div>

            <div className="w-100 d-flex flex-column align-items-center">
              <Link href="/lookbook">
                <button className="btn-find btn btn-lg btn-outline-dark rounded-0 font-weight-900 mb-3">SEE MORE</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Lookbook
