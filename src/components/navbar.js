import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const [dropOpen, setDropOpen] = useState(false);

  const toggleButton = () => {
    setIsOpen(!isOpen);
  };
  const handleMouseEnter = () => {
    setDropOpen(true);
  };

  const handleMouseLeave = () => {
    setDropOpen(false);
  };  
 
  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container"onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}>
        <a className="navbar-brand" href="#" style={{paddingRight:'20px'}}>
          <img style={{width:'100px'}} src="./hesed/logo.png"/>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          onClick={toggleButton}
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className={`collapse navbar-collapse ${isOpen ? "show" : ""}`}>
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0"
      >
            <li className="nav-item">
              <div class="dropdown">
                <button className="dropbtn"  >Know us <i class="bi bi-chevron-down"></i></button>
                <div class="dropdown-content">
                  <a href="#">Mission and Vision</a>
                  <a href="#">Our history</a>
                  <a href="#">Affilitions</a>
                  <a href="#">Patnership and Cordinations</a>
                </div>
              </div>
            </li>
            <li className="nav-item">
            <div class="dropdown">
                <button class="dropbtn">What We Do <i class="bi bi-chevron-down"></i></button>
                <div class="dropdown-content">
                  <a href="#">Health</a>
                  <a href="#">Social Protection & Support</a>
                  <a href="#">Livelihoods</a>
                  <a href="#">Capacity Building</a>
                </div>
              </div>
            </li>
            <li className="nav-item">
            <div class="dropdown">
                <button class="dropbtn">Our Impact</button>
              </div>
            </li>
            <li className="nav-item">
            <div class="dropdown">
                <button class="dropbtn">Contact </button>
              </div>
            </li>
            <li>
            <div class="dropdown">
                <button class="dropbtn">Get Involved <i class="bi bi-chevron-down"></i></button>
                <div class="dropdown-content">
                  <a href="#">Volunteer</a>
                  <a href="#">How to Participate</a>
                  <a href="#">Afya Zaidi Project Consultancy</a>
                </div>
              </div>
            </li>
            <li>
            <button class="dropbtn">Contact</button>
            </li>
            <li>
            <button style={{backgroundColor:'red', borderRadius:'20px', padding:'10px 50px',}} class="dropbtn">Donate</button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
