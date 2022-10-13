import React from 'react';

const Sidebar = ({sidebar}) => {
    return (
        <div>
      <nav className="navbar d-md-block d-lg-none fixed-top mobile-navbar"><button className="navbar-toggler mr-auto" type="button" data-toggle="collapse" data-target="#mobileNavbarSupportedContent" aria-controls="mobileNavbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span className="nav-btn">Menu</span></button>
        <div className="collapse navbar-collapse order-1" id="mobileNavbarSupportedContent">
          <ul className="navbar-nav mr-auto"></ul>
        </div>
      </nav>
      <nav className="sidebar" data-simplebar>
        <div className="sidebar-header"><a href="#home" data-scroll><img className="img-fluid sidebar-avatar" src={sidebar.profile_url} alt="Profile avatar"/></a><span className="sidebar-name">{sidebar.first_name}&nbsp;{sidebar.last_name}</span>
          <p className="sidebar-status">Available for work</p>
        </div>
        <div className="sidebar-menu">
          <ul className="list-unstyled list-menu">
            <li><a className="nav-link" href="#home-area" data-scroll>Home</a></li>
            <li><a className="nav-link" href="#about-area" data-scroll>About</a></li>
            <li><a className="nav-link" href="#services-area" data-scroll>Services</a></li>
            <li><a className="nav-link" href="#portfolio-area" data-scroll>Projects</a></li>
            <li><a className="nav-link" href="#hire-area" data-scroll>Hire me</a></li>

            <li><a className="nav-link" href="#testimonials-area" data-scroll>Clients</a></li>

            <li><a className="nav-link" href="#contact-area" data-scroll>Contact</a></li>
          </ul>
        </div>
      </nav>
    <div className="sections-wrapper">
    </div>
    </div>
    );
}

export default Sidebar;
