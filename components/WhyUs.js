/* eslint-disable @next/next/no-img-element */
const WhyUs = () => {
  return (
    <section id="why-us" className="pt-5">
      <div className="container">
        <div className="row pt-5">
          <div className="col py-5 text-center">
            <h1 className="h1-margin-bottom font-weight-700">Why Choose Sense Hair</h1>
            <div className="row">
              <div className="col-md-4 mb-3">
                <img loading="lazy" src="./images/icon 1.png" alt="icon 1" />
                <h2 className="text-primary mt-3 mb-4">Advice</h2>
                <p>Aan de hand van jouw wensen geven wij advies over welk kapsel en haarlengte het beste past bij je gezicht. En onze kleurspecialisten geven jou de juiste kleuradvies.</p>
              </div>
              <div className="col-md-4 mb-3">
                <img loading="lazy" src="./images/icon 2.png" alt="icon 2" />
                <h2 className="text-primary mt-3 mb-4">EXPERIENCE</h2>
                <p>Al 20 jaar knippen, verfen en stylen wij mannen als vrouwen. Onze stylisten zijn opgeleid aan … en zijn op de hoogte van de laatste technieken en trends. Vertrouw op onze award winnende team.</p>
              </div>
              <div className="col-md-4 mb-3">
                <img loading="lazy" src="./images/icon 3.png" alt="icon 3" />
                <h2 className="text-primary mt-3 mb-4">TRANSPARENT PRICES</h2>
                <p>Jouw wensen en haartype bepalen de precieze prijs van de behandeling, . Wij bieden volledige transparantie hierover voordat we beginnen.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default WhyUs
