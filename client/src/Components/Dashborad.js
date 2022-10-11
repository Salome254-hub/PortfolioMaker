import React from 'react';

const Dashborad = () => {
    return(
              <div class="col-12">
                <form class="contact-form" id="contact-form" action="http://likeabawz.dk/exill/demo/codex/template/php/contact.php">
                  <div class="row">
                  <div class="col-12 col-md-6 form-group"><input class="form-control" id="contact-name" type="text" name="name" placeholder="Firstname" required=""/></div>
                    <div class="col-12 col-md-6 form-group"><input class="form-control" id="contact-email" type="email" name="email" placeholder="Lastname" required=""/></div>
                    <div class="col-12 col-md-6 form-group"><input class="form-control" id="contact-email" type="email" name="email" placeholder="Email" required=""/></div>
                    <div class="col-12 col-md-6 form-group"><input class="form-control" id="contact-email" type="email" name="email" placeholder="Profile pic" required=""/></div>
                    <div class="col-12 col-md-6 form-group"><input class="form-control" id="contact-name" type="text" name="name" placeholder="Title" required=""/></div>
                    <div class="col-12 col-md-6 form-group"><input class="form-control" id="contact-email" type="email" name="email" placeholder="age" required=""/></div>
                    <div class="col-12 form-group"><input class="form-control" id="contact-subject" type="text" name="subject" placeholder="location" required=""/></div>
                    <div class="col-12 col-md-6 form-group"><input class="form-control" id="contact-email" type="email" name="email" placeholder="Description" required=""/></div>
                    <div class="col-12 form-group"><input class="form-control" id="contact-subject" type="text" name="subject" placeholder="Phone number" required=""/></div>
                    <div class="col-12 form-group"><input class="form-control" id="contact-subject" type="text" name="subject" placeholder="linkedin" required=""/></div>
                    <div class="col-12 form-group"><input class="form-control" id="contact-subject" type="text" name="subject" placeholder="Github" required=""/></div>
                   
                    <div class="col-12 col-md-6 form-group"><input class="form-control" id="contact-name" type="text" name="name" placeholder="Service Title" required=""/></div>
                    <div class="col-12 col-md-6 form-group"><input class="form-control" id="contact-email" type="text" name="text" placeholder="Description" required=""/></div>

                    <div class="col-12 form-group"><input class="form-control" id="contact-subject" type="text" name="subject" placeholder="Project Title" required=""/></div>
                    <div class="col-12 form-group"><input class="form-control" id="contact-subject" type="text" name="subject" placeholder="Project link" required=""/></div>
                    <div class="col-12 form-group"><input class="form-control" id="contact-subject" type="text" name="subject" placeholder="image url" required=""/></div>

                    
                   
                   
                   
                    
                    <div class="col-12 form-group form-message"><textarea class="form-control" id="contact-message" name="message" placeholder="Description" rows="5" required=""></textarea></div>
                    <div class="col-12 form-submit"><button class="btn button-main button-scheme" id="contact-submit" type="submit">Submit</button>
                      <p class="contact-feedback"></p>
                    </div>
                  </div>
                </form>
              </div>
            
        
    );
}

export default Dashborad;
