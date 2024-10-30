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
                  <h3 class="title-a">Get Involved</h3>
                  <p class="subtitle-a">
                  Your support is vital in making a difference! 
                  Whether you are an individual or an organization, there are many ways you can contribute
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
                    Join our team and support local projects, from tree planting to health campaigns.
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
                    <h2 class="s-title">	Donate</h2>
                    <p class="s-description text-center">
                    Help fund our reforestation, clean water, and healthcare programs.
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
                    <h2 class="s-title">Advocate</h2>
                    <p class="s-description text-center">
                    Spread the word about climate change and health equity in rural areas.
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
