import React from 'react';

const Home = () => {
    return (
       <section class="home-area element-cover-bg" id="home-area" style={{ backgroundImage: `url("https://cdn.mind-diagnostics.org/uploads/mind-diagnostics/images/image/url/loving-someone-you-cant-have-how-to-let-go-1_.jpg.jpg")` }}>
        <div class="container h-100">
          <div class="row h-100 align-items-center justify-content-center">
            <div class="col-12 col-lg-8 home-content text-center">
              <h1 class="home-name">Alex <span>Smith</span></h1>
              <h4 class="cd-headline clip home-headline">I’m a <span class="cd-words-wrapper single-headline"><b class="is-visible">Developer</b><b>Designer</b><b>Freelancer</b></span></h4>
            </div><a href="#about-area" data-scroll>
              <div class="home-mouse">
                <div class="mouse-shape">
                  <div class="mouse-wheel"></div>
                </div>
              </div>
            </a>
          </div>
        </div>
      </section>
    );
}

export default Home;
