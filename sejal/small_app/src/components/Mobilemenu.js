// MobileMenu.js
import React from "react";

function MobileMenu() {
  return (
    <div className="mobile-menu-area sticky d-sm-block d-md-block d-lg-none">
      <div className="mobile-menu">
        <nav className="header-menu">
          <ul className="nav_scroll">
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
            {/* Repeat similar structure for other menu items */}
            {/* <li className="menu-item-has-children">
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
                  <a href="project-details.html">Project Details </a>
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
                  <a href="blog-details.html">Blog Details </a>
                </li>
              </ul>
            </li>
            <li>
              <a href="contact.html">Contact</a>
            </li> */}
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default MobileMenu;
