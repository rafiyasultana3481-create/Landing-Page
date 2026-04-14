function Contact() {
  return (
   <section id="contact" class="section-padding bg-dark">
    <div class="container">
        <div class="row">
            <div class="col-12 text-center">
                <div class="section-title">
                    <h1 class="display-4 fw-semibold text-white">Contact Us</h1>
                    <div class="line"></div>
                    <p class="text-white">Request a Call Back</p>
                </div>
            </div>
        </div>
        <div class="row justify-content-center">
            <div class="col-lg-8">
                <form th:action="@{/tech-tune-motors/contact-us}"  class="row g-3 p-lg-5 p-4 bg-white theme-shadow">
                    <div class="form-group col-lg-6 theme-shadow">
                        <input type="text" class="form-control"  placeholder="Enter First Name"/>
                    </div>
                    <div class="form-group col-lg-6 theme-shadow">
                        <input type="text" class="form-control" placeholder="Enter Last Name"/>
                    </div>
                    <div class="form-group col-lg-12 theme-shadow">
                        <input type="email" class="form-control" placeholder="Enter Email Address"/>
                    </div>
                    <div class="form-group col-lg-12 theme-shadow">
                        <input type="text" class="form-control" placeholder="Enter Subject"/>
                    </div>
                    <div class="form-group col-lg-12 theme-shadow">
                            <textarea name="message" class="form-control" placeholder="Enter your detailed query"
                                      rows="5"></textarea>
                    </div>
                    <div class="form-group col-lg-12 d-grid theme-shadow">
                        <button class="btn btn-brand">Submit</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</section>
  );
}

export default Contact;