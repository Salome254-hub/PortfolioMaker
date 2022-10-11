import React from 'react';
import Logo from '../Images/logo.png'
import Port from '../Images/portfolio.svg'


const LandingPage = () => {
    return (
       
            <div>
                   <nav className="sidebar" data-simplebar>
                    <div className="sidebar-header"><a href="#home" data-scroll><img style={{ height: "65px", width: "65px", }} className="img-fluid sidebar-avatar no-border" src={Logo} alt="Profile avatar" /></a><span className="sidebar-name">PortMaker</span>
                        {/* <p className="sidebar-status">Available for work</p> */}
                    </div>
                    <div className="sidebar-menu">
                        <ul className="list-unstyled list-menu">
                            <li><a className="nav-link" href="#home-area" data-scroll>Log in</a></li>
                            <li><a className="nav-link" href="#home-area" data-scroll>Browse Porfolio</a></li>

                            <li><a className="nav-link " href="#about-area" data-scroll><small>© PortMaker 2022</small></a></li>

                        </ul>
                    </div>
                </nav>
             
                <section  class="single-section element-cover-bg hire-area" id="hire-area">
                    <div class="row">
                    <div class="col-lg-6">
                        <img src={{Port}} class="port"/>
                    </div>
                    <div class="col-lg-6">

</div>

                        </div>

                    </section>
    <div id="carouselExampleCaptions" class="carousel slide" data-ride="carousel">
  <ol class="carousel-indicators">
    <li data-target="#carouselExampleCaptions" data-slide-to="0" class="active"></li>
    <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
    <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
  </ol>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="https://images.unsplash.com/photo-1518655048521-f130df041f66?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cG9ydGZvbGlvJTIwYmFja2dyb3VuZHxlbnwwfHwwfHw%3D&w=1000&q=80" class="d-block w-100" alt="..."/>
      <div class="carousel-caption d-none d-md-block">
        <h5>First slide label</h5>
        <p>Some representative placeholder content for the first slide.</p>
      </div>
    </div>
    <div class="carousel-item">
      <img src="https://p4.wallpaperbetter.com/wallpaper/492/496/909/costume-law-lawyer-businessman-wallpaper-preview.jpg" class="d-block w-100" alt="..."/>
      <div class="carousel-caption d-none d-md-block">
        <h5>Second slide label</h5>
        <p>Some representative placeholder content for the second slide.</p>
      </div>
    </div>
    <div class="carousel-item">
      <img src="https://p4.wallpaperbetter.com/wallpaper/492/496/909/costume-law-lawyer-businessman-wallpaper-preview.jpg" class="d-block w-100" alt="..."/>
      <div class="carousel-caption d-none d-md-block">
        <h5>Third slide label</h5>
        <p>Some representative placeholder content for the third slide.</p>
      </div>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-target="#carouselExampleCaptions" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-target="#carouselExampleCaptions" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </button>
</div>
     </div>

       
    );
}

export default LandingPage;
