import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import "animate.css/animate.min.css";
import "font-awesome/css/font-awesome.min.css";
import "./venobox/venobox.css";
import "./assets/css/style.css";
import "./assets/css/responsive.css";
import "./assets/css/coustom-animation.css";
import "./assets/css/bootstrap-icons.css";

const Header = () => {
  return (
    <>
      <div className="loader-wrapper">
        <span className="loader"></span>
        <div className="loder-section left-section"></div>
        <div className="loder-section right-section"></div>
      </div>

      <div className="header-area" id="sticky-header">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-3">
              <div className="header-logo">
                <a href="index.html">
                  <img src="assets/images/logo-1.png" alt="logo" />
                </a>
              </div>
            </div>
            <div className="col-lg-9">
              <div className="header-menu">
                <ul>
                  <li className="menu-item-has-children">
                    <a href="#">
                      Home<i className="fas fa-chevron-down"></i>
                    </a>
                    <ul className="sub-menu">
                      <li>
                        <a href="index.html">Home 1</a>
                      </li>
                      <li>
                        <a href="index-2.html">Home 2</a>
                      </li>
                      <li>
                        <a href="index-3.html">Home 3</a>
                      </li>
                    </ul>
                  </li>
                  <li className="menu-item-has-children">
                    <a href="#">
                      About<i className="fas fa-chevron-down"></i>
                    </a>
                    <ul className="sub-menu">
                      <li>
                        <a href="about-1.html">About Us 1</a>
                      </li>
                      <li>
                        <a href="about-2.html">About Us 2</a>
                      </li>
                    </ul>
                  </li>
                  <li className="menu-item-has-children">
                    <a href="#">
                      Service<i className="fas fa-chevron-down"></i>
                    </a>
                    <ul className="sub-menu">
                      <li>
                        <a href="service.html">Service</a>
                      </li>
                      <li>
                        <a href="service-details.html">Service Details</a>
                      </li>
                    </ul>
                  </li>
                  <li className="menu-item-has-children">
                    <a href="#">
                      Pages<i className="fas fa-chevron-down"></i>
                    </a>
                    <ul className="sub-menu">
                      <li>
                        <a href="about-1.html">About Us 1</a>
                      </li>
                      <li>
                        <a href="about-2.html">About Us 2</a>
                      </li>
                      <li>
                        <a href="service.html">Service</a>
                      </li>
                      <li>
                        <a href="service-details.html">Service Details</a>
                      </li>
                      <li>
                        <a href="project.html">Project</a>
                      </li>
                      <li>
                        <a href="project-details.html">Project Details</a>
                      </li>
                      <li>
                        <a href="team.html">Team</a>
                      </li>
                      <li>
                        <a href="careers.html">Careers</a>
                      </li>
                      <li>
                        <a href="pricing.html">Pricing</a>
                      </li>
                      <li>
                        <a href="faqs.html">Faqs</a>
                      </li>
                    </ul>
                  </li>
                  <li className="menu-item-has-children">
                    <a href="#">
                      Blog<i className="fas fa-chevron-down"></i>
                    </a>
                    <ul className="sub-menu">
                      <li>
                        <a href="blog-grid.html">Blog Grid</a>
                      </li>
                      <li>
                        <a href="blog-details.html">Blog Details</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="contact.html">Contact</a>
                  </li>
                </ul>
                <div className="header-search-icon search-box-outer">
                  <a href="#">
                    <i className="fa-solid fa-magnifying-glass"></i>
                  </a>
                </div>
                <div className="header-button">
                  <a href="contact.html">Get A Quote</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
