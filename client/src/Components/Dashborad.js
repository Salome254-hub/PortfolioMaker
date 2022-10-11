import React from 'react';
import Message from '../Images/messages.svg';
import Visitors from '../Images/webvisitors.svg';
import Profile from '../Images/profile.svg';




const Dashborad = () => {
    return (
        <div>
            <div>
                <nav className="navbar d-md-block d-lg-none fixed-top mobile-navbar"><button className="navbar-toggler mr-auto" type="button" data-toggle="collapse" data-target="#mobileNavbarSupportedContent" aria-controls="mobileNavbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span className="nav-btn">Menu</span></button>
                    <div className="collapse navbar-collapse order-1" id="mobileNavbarSupportedContent">
                        <ul className="navbar-nav mr-auto"></ul>
                    </div>
                </nav>
                <nav className="sidebar" data-simplebar>
                    <div className="sidebar-header"><a href="#home" data-scroll><img style={{ height: "65px", width: "65px" }} className="img-fluid sidebar-avatar" src="https://www.pd.co.ke/wp-content/uploads/2022/06/PG-1-Wajackoyah%E2%88%9A-1200x900.jpg" alt="Profile avatar" /></a><span className="sidebar-name">Brian Koskei</span>
                        {/* <p className="sidebar-status">Available for work</p> */}
                    </div>
                    <div className="sidebar-menu">
                        <ul className="list-unstyled list-menu">
                            <li><a className="nav-link" href="#home-area" data-scroll>View Profile</a></li>

                            <li><a className="nav-link" href="#home-area" data-scroll>Modify Profile</a></li>
                            <li><a className="nav-link " href="#about-area" data-scroll>Log out</a></li>

                        </ul>
                    </div>
                </nav>
                <div className="sections-wrapper">
                </div>
            </div>
            <section class="single-section contact-area alt-bg" id="contact-area">
                <div class="container text-left">
                    <div class="row">
                        <div class="col-12">
                            <div class="section-heading">
                                <h2 class="section-title">Dashboard</h2>
                                <h6 class=" red_text">Feel free to contact me anytime</h6>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-12 col-lg-6 col-mg-6 col-sm-12">
                            <div class="contact-form mb-3" >
                                <div class="row">
                                    <div className='col-3 col-md-3 col-sm-6 col-lg-3 text-left red_line'>
                                        <img src={Profile} class="d_board"></img>
                                    </div>
                                    <div className='col-9 col-md-9 col-sm-6 col-lg-9  text-left'>
                                        <h6>Profile progress</h6>

                                        <h1>16%</h1>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-12 col-lg-6 col-mg-6 col-sm-12">
                            <div class="contact-form mb-3" >
                                <div class="row">
                                    <div className='col-3 col-md-3 col-sm-6 col-lg-3 text-left red_line'>
                                        <img src={Message} class="d_board"></img>
                                    </div>
                                    <div className='col-9 col-md-9 col-sm-6 col-lg-9  text-left'>
                                        <h4>Messages</h4>
                                        <h1>40</h1>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                                     {/* //PROFILE */}

                    <div class="row">
                        <div class="col-12">
                            <div class="level1">
                            <h6 className="text-white">User Details</h6>
                    <h6 className=" red_text text-white">Step 1</h6>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-12">
                            <form class="contact-form" id="contact-form" action="http://likeabawz.dk/exill/demo/codex/template/php/contact.php">
                                <div class="row">
                                    <div class="col-12 col-md-6 form-group"><input class="form-control" type="text" placeholder="First name" required="true" /></div>
                                    <div class="col-12 col-md-6 form-group"><input class="form-control" type="text" placeholder="Second name" required="true" /></div>
                                    <div class="col-12 col-md-6 form-group"><input class="form-control" type="text" placeholder="Phone number" required="true" /></div>

                                    <div class="col-12 col-md-6 form-group"><input class="form-control" type="email" placeholder="Email" required="true" /></div>
                                    <div class="col-12 col-md-6 form-group"><input class="form-control" type="number" placeholder="Age" required="true" /></div>
                                    <div class="col-12 col-md-6 form-group"><input class="form-control" type="text" placeholder="Location" required="true" /></div>
                                    <div class="col-12 col-md-6 form-group"><input class="form-control" type="text" placeholder="Profile pic url" required="true" /></div>
                                    <div class="col-12 col-md-6 form-group"><input class="form-control" type="text" placeholder="Your title" required="true" /></div>
                                    <div class="col-12 col-md-12 form-group"><textarea class="form-control" type="text" placeholder="Brief description about your profession." required="true" ></textarea></div>
                                    <div class="col-12 col-md-6 form-group"><input class="form-control" type="text" placeholder="Github link"  /></div>
                                    <div class="col-12 col-md-6 form-group"><input class="form-control" type="email" placeholder="Linkedin link"  /></div>

                                    <div class="col-12 form-submit"><button class="btn button-main button-scheme" id="contact-submit" type="submit">Submit/Next step</button>
                                        <p class="contact-feedback"></p>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                    
  {/* //PROFILE */}
  <div class="row mt-3">
                        <div class="col-12">
                            <div class="level2">
                            <h6 className="text-white">Projects</h6>
                    <h6 className=" red_text text-white">Step 2</h6>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-12">
                            <form class="contact-form" id="contact-form" action="http://likeabawz.dk/exill/demo/codex/template/php/contact.php">
                                <div class="row">
                                    <div class="col-12 col-md-6 form-group"><input class="form-control" type="text" placeholder="Title" required="true" /></div>
                                    <div class="col-12 col-md-6 form-group"><input class="form-control" type="text" placeholder="Description" required="true" /></div>
                                    
                                    <div class="col-12 col-md-6 form-group"><input class="form-control" type="text" placeholder="Image URL" required="true" /><img style={{ height: "40px", width: "40px" }} src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"/></div>


                                    <div class="col-12 form-submit"><button class="btn button-main button-scheme" id="contact-submit" type="submit">Submit/Next step</button>
                                        <p class="contact-feedback"></p>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                    
  {/* //PROFILE */}
  <div class="row mt-3">
                        <div class="col-12">
                            <div class="level1">
                            <h6 className="text-white">Services</h6>
                    <h6 className=" red_text text-white">Step 3</h6>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-12">
                            <form class="contact-form" id="contact-form" action="http://likeabawz.dk/exill/demo/codex/template/php/contact.php">
                                <div class="row">
                                    <div class="col-12 col-md-6 form-group"><input class="form-control" type="text" placeholder="Service type" required="true" /></div>
                                    <div class="col-12 col-md-6 form-group"><input class="form-control" type="text" placeholder="Description" required="true" /></div>
                                     <div class="col-12 form-submit"><button class="btn button-main button-scheme" id="contact-submit" type="submit">Submit/Next step</button>
                                        <p class="contact-feedback"></p>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>

                      {/* //PROFILE */}
  <div class="row mt-3">
                        <div class="col-12">
                            <div class="level2">
                            <h6 className="text-white">Projects</h6>
                    <h6 className=" red_text text-white">Step 2</h6>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-12">
                            <form class="contact-form" id="contact-form" action="http://likeabawz.dk/exill/demo/codex/template/php/contact.php">
                                <div class="row">
                                    <div class="col-12 col-md-6 form-group"><input class="form-control" type="text" placeholder="Title" required="true" /></div>
                                    <div class="col-12 col-md-6 form-group"><input class="form-control" type="text" placeholder="Description" required="true" /></div>
                                    
                                    <div class="col-12 col-md-6 form-group"><input class="form-control" type="text" placeholder="Image URL" required="true" /><img style={{ height: "40px", width: "40px" }} src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"/></div>


                                    <div class="col-12 form-submit"><button class="btn button-main button-scheme" id="contact-submit" type="submit">Submit/Next step</button>
                                        <p class="contact-feedback"></p>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>

                </div>
            </section >
        </div >
    );
}

export default Dashborad;
