function About() {
  return (
    <section id="about" className="section-padding">
      <div className="container">
        <div className="text-center">
          <h1>About Us</h1>
          <p>Tech Tune Motors ensures your driving comfort</p>
        </div>

        <div className="row align-items-center">
          <div className="col-lg-6">
            <img src="/src/public/images/imf.png" className="img-fluid" />
          </div>

          <div className="col-lg-5">
            <h3>Auto Services</h3>
            <p class="text-dark mb-4">Discover a full spectrum of services at TechTune Motors. From routine
                    maintenance to diagnostics, brakes, engine work, tires, and custom upgrades – we've got it all
                    covered. Our experienced team, quality parts, competitive pricing, and commitment to customer
                    satisfaction make us your go-to auto care partner. Contact us today!</p>

            <div class="d-flex pt-4 mb-3">
                    <div class="iconbox me-4">
                        <i class="ri-mail-send-fill"></i>
                    </div>
                    <div>
                        <h5 class="text-dark mt-3">techtunemotors3@gmail.com</h5>
                        <p class="text-dark">Send mail to us.</p>
                    </div>
                </div>
                <div class="d-flex pt-4 mb-3">
                    <div class="iconbox me-4">
                        <i class="ri-customer-service-line"></i>
                    </div>
                    <div>
                        <h5 class="text-dark mt-3">Customer Service</h5>
                        <p class="text-dark">Call us on +91 8884622068</p>
                    </div>
                </div>
                <div class="d-flex pt-4 mb-3">
                    <div class="iconbox me-4">
                        <i class="ri-map-pin-fill"></i>
                    </div>
                    <div>
                        <h5 class="text-dark mt-3">Location</h5>
                        <p class="text-dark">Rajarajeshwari Nagar, Bangalore - 560098 (Near Double Road Essar Petrol
                            Bunk)</p>
                    </div>
                    </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;