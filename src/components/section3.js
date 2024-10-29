import { Button } from "react-bootstrap";
import Card from "react-bootstrap/Card";

export default function SectionThree() {
  return (
    <div className="section-three">
      <div className="row g-1 ">
        <section id="service" class="services-mf route">
          <div class="container">
            <div class="row">
              <div class="col-sm-12">
                <div class="title-box text-center">
                  <h3 class="title-a">Services Offered</h3>
                  <p class="subtitle-a">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  </p>
                  <div class="line-mf"></div>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-md-4">
                <div class="service-box">
                  <div class="service-ico">
                    <span class="ico-circle">
                      <i class="bi bi-person-arms-up"></i>
                    </span>
                  </div>
                  <div class="service-content">
                    <h2 class="s-title">Volunteerism</h2>
                    <p className="s-description text-center">
                    You are most welcome to come and volunteer your time and skills.
                    </p>
                    <Button>Apply</Button>
                  </div>
                </div>
              </div>
              <div class="col-md-4">
                <div class="service-box">
                  <div class="service-ico">
                    <span class="ico-circle">
                      <i class="bi bi-gift"></i>
                    </span>
                  </div>
                  <div class="service-content">
                    <h2 class="s-title">In-Kind Support</h2>
                    <p class="s-description text-center">
                    You can donate farming tools and equipment to support the farmers.
                    </p>
                    <Button>Donate</Button>
                  </div>
                </div>
              </div>
              <div class="col-md-4">
                <div class="service-box">
                  <div class="service-ico">
                    <span class="ico-circle">
                      <i class="bi bi-currency-dollar"></i>
                    </span>
                  </div>
                  <div class="service-content">
                    <h2 class="s-title">Financial Support</h2>
                    <p class="s-description text-center">
                    You can also offer financial support to enable us run these programs
                    </p>
                    <Button>Donate</Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
