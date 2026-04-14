function Footer() {
  return (
   <div class="bg-grey">
    <div class="footer-top">
        <div class="container">
            <div class="row gy-5">
                <div class="col-lg-3 col-sm-6 ">
                    <a th:href="@{#}"><img src="src/public/images/logo_foter.png" width="150" height="150"/></a>
                    <p class="footer">Discover a full spectrum of services at TechTune Motors.</p>
                    <div>
                        <a href="#"><i class="ri-twitter-fill"></i></a>
                        <a href="#"><i class="ri-instagram-fill"></i></a>
                        <a href="#"><i class="ri-github-fill"></i></a>
                        <a href="#"><i class="ri-whatsapp-fill"></i></a>
                    </div>
                </div>
                <div class="col-lg-3 col-sm-6 ">
                    <h5>SERVICES</h5>
                    <div class="line"></div>
                    <ul class="footer">
                        <li><a href="#">Air Conditioning</a></li>
                        <li><a href="#">Automotive Filters</a></li>
                        <li><a href="#">Electrical Systems</a></li>
                        <li><a href="#">Brake Repairs</a></li>
                    </ul>
                </div>
                <div class="col-lg-3 col-sm-6 ">
                    <h5>ABOUT</h5>
                    <div class="line"></div>
                    <ul class="footer">
                        <li><a href="#">Blog</a></li>
                        <li><a href="#">Services</a></li>
                        <li><a href="#">Testimonials</a></li>
                        <li><a href="#">Others</a></li>
                    </ul>
                </div>
                <div class="col-lg-3 col-sm-6">
                    <h5>CONTACT US</h5>
                    <div class="line"></div>
                    <ul class="footer">
                        <li>Techno Tune Motors</li>
                        <li>Rajarajeshwari Nagar, Bangalore - 560098 (Near Double Road Essar Petrol Bunk)</li>
                        <li>techtunemotors3@gmail.com</li>
                        <li>+91 8884622068</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
    <div class="footer-bottom">
        <div class="container">
            <div class="row justify-content-between">
                <div class="col-auto">
                    <p class="mb-0">&copy 2024 All rights reserved</p>
                </div>
                <div class="col-auto">
                    <p class="mb-0">Designed by <a th:href="@{#}">RAFIYA</a></p>
                </div>
            </div>
        </div>
    </div>
</div>

  );
}

export default Footer;