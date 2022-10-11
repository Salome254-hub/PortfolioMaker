import React from 'react';
import Signup_ from '../Images/signup.gif'
// import Logo from '../Images/logo.png';

const SignUp = () => {
    return (
        <section class="single-section contact-area alt-bg" id="contact-area">
        <div class="container">
          <div class="row">
            <div class="col-12">
              <div class="section-heading">
              <img src={ Signup_} class="logo" /><br /><br />
                            <h2 class="section-title">Sign Up</h2>
                          <p>Don't damage your job hunt before it starts. Using our handcrafted portfolio builder, you can create a professional portfolio.</p> 
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-12">
              <form class="contact-form" id="contact-form" action="http://likeabawz.dk/exill/demo/codex/template/php/contact.php">
                <div class="row">
                  <div class="col-12 col-md-6 form-group"><input class="form-control" id="contact-name" type="text" name="name" placeholder="First Name" required=""/></div>
                  <div class="col-12 col-md-6 form-group"><input class="form-control" id="contact-name" type="text" name="name" placeholder="Last Name" required=""/></div>
                  <div class="col-12 col-md-6 form-group"><input class="form-control" id="contact-email" type="email" name="email" placeholder="Email addres" required=""/></div>
                  <div class="col-12 col-md-6 form-group"><input class="form-control" id="contact-email" type="password" name="re-password" placeholder="Password" required=""/></div>
                  <div class="col-12 col-md-6 form-group"><input class="form-control" id="contact-email" type="password" name="re-password" placeholder="Repeat Password" required=""/></div>
                  <div class="col-12 col-md-6 form-group"><button class="btn button-main button-scheme mr-2" id="contact-submit" type="submit">Sign Up</button><button class="btn button-main button-scheme" id="contact-submit" type="submit">Log in</button></div>
                  <div class="col-12 form-submit">
                  <p class="contact-feedback"></p>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    );
}

export default SignUp;
