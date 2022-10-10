import React from 'react';

const Contact = () => {
    return (
        <div>
             <section class="single-section contact-area alt-bg" id="contact-area">
          <div class="container">
            <div class="row">
              <div class="col-12">
                <div class="section-heading">
                  <h2 class="section-title">Get in Touch</h2>
                  <p class="section-description">Feel free to contact me anytime</p>
                </div>
              </div>
            </div>
            <div class="row">
              
              <div class="col-12">
                <form class="contact-form" id="contact-form" action="http://likeabawz.dk/exill/demo/codex/template/php/contact.php">
                  <div class="row">
                    <div class="col-12 col-md-6 form-group"><input class="form-control" id="contact-name" type="text" name="name" placeholder="Name" required=""/></div>
                    <div class="col-12 col-md-6 form-group"><input class="form-control" id="contact-email" type="email" name="email" placeholder="Email" required=""/></div>
                    <div class="col-12 form-group"><input class="form-control" id="contact-subject" type="text" name="subject" placeholder="Subject" required=""/></div>
                    <div class="col-12 form-group form-message"><textarea class="form-control" id="contact-message" name="message" placeholder="Message" rows="5" required=""></textarea></div>
                    <div class="col-12 form-submit"><button class="btn button-main button-scheme" id="contact-submit" type="submit">Send message</button>
                      <p class="contact-feedback"></p>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
        </div>
    );
}

export default Contact;