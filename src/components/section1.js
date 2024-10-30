import React, { useEffect, useRef, useState } from 'react';

const animateNumber = (start, end, duration, callback) => {
    let startTimestamp = null;
  
    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      const value = Math.floor(progress * (end - start) + start);
      callback(value);
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
  
    window.requestAnimationFrame(step);
  };
  
  // React component that animates the number when it enters the viewport
  const AnimatedNumber = ({ num }) => {
    const [count, setCount] = useState(0);
    const elementRef = useRef(null);
  
    useEffect(() => {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              // Only animate if it's not animated yet
              if (!elementRef.current._isAnimated) {
                elementRef.current._isAnimated = true;
                animateNumber(0, num, 3000, (value) => {
                  setCount(value);
                });
              }
            }
          });
        },
        { threshold: 0.1 } // Trigger when 10% of the element is visible
      );
  
      if (elementRef.current) {
        observer.observe(elementRef.current);
      }
  
      // Cleanup the observer on unmount
      return () => {
        if (elementRef.current) {
          observer.unobserve(elementRef.current);
        }
      };
    }, [num]);
  
    return (
      <div ref={elementRef} data-num={num}>
        {count.toLocaleString('en-US').split(",").map((n, idx) => (
          <span key={idx} className="count">
            {n}
          </span>
        ))}
      </div>
    );
  };

export default function SectionOne () {
    return (
      <div className="section-one mt-0">
        <div className="row g-1">
        <section id="service" class="services-mf route">
          <div className='container'>
          <div className="row">
            <div className="col-sm-12">
              <div className='title-box text-center'>
              <h1 class="title-a">Jirani Fund</h1>
              <br/>
              <p className='text-center '>
                At Jirani Fund, we are committed to building sustainable
                communities by addressing climate change, promoting
                environmental conservation, and improving access to essential
                healthcare in rural areas. Our mission is to empower people with
                the knowledge, tools, and resources they need to adapt to
                environmental challenges while ensuring their well-being.
              </p>
              </div>
              </div>
              </div>
              
                <div className="row g-3 align-items-center justify-content-center px-3">
                  <div className="col-md-3">
                    <img
                      src="./images/foodsecurity.jpg"
                      alt="image"
                      style={{
                        width: "200px",
                      }}
                    />
                  </div>
                  <div className="col-md-3">
                    <h4 style={{
                      fontWeight:"bold"
                    }}>Sustainable Agriculture</h4>
                    <p>
                      The fund supports farmers in adopting climate-smart
                      agricultural practices, such as agroforestry and organic
                      farming, which enhance soil fertility, reduce greenhouse
                      gas emissions, and increase crop resilience to erratic
                      weather patterns.
                    </p>
                  </div>
                  <div className="col-md-3">
                    <img
                      src="./images/climate_change.jpg"
                      alt="image"
                      style={{
                        width: "200px",
                      }}
                    />
                  </div>
                  <div className="col-md-3">
                    <h4 style={{
                      fontWeight:"bold"
                    }}>Reforestation Projects</h4>
                    <p>
                      Jirani Fund collaborates with local communities to plant
                      trees, restore degraded forests, and protect water
                      catchment areas. This effort helps to conserve
                      biodiversity, improve air quality, and regulate local
                      climate patterns.
                    </p>
                  </div>
                </div>
                <div className="row">
                  <div className='col-md-2 py-3'>
                    <h1 style={{
                        fontSize: "60px",
                        color:'green'
                      }}>Impact</h1>
                    </div>  
                    <div className='col-md-10'>
                        <div className='row'>
                  <div className="col-md-3">
                    <div className="cards-one">
                      {/* Animated number components */}
                      <h1 style={{
                        fontSize: "70px",
                        color:'green'
                      }}>
                        <AnimatedNumber num={2000} />
                      </h1>
                      <p>Acres of land Restored</p>
                    </div>
                  </div>
                  <div className="col-md-3">
                    <div className="cards-one">
                      {/* Animated number components */}
                      <h1 style={{
                        fontSize: "70px",
                        color:'green'
                      }}>
                        <AnimatedNumber num={1500} />
                      </h1>
                      <p>Tress Planted</p>
                    </div>
                  </div>
                  <div className='col-md-3'>
                  <div className="cards-one">
                      {/* Animated number components */}
                      <h1 style={{
                        fontSize: "70px",
                        color:'green'
                      }}>
                        <AnimatedNumber num={20000} />
                      </h1>
                      <p>HouseHolds Impacted</p>
                    </div>
                  </div>

                  <div className='col-md-3'>
                  <div className="cards-one">
                      {/* Animated number components */}
                      <h1 style={{
                        fontSize: "70px",
                        color:'green'
                      }}>
                        <AnimatedNumber num={1000} />
                      </h1>
                      <p>Farmers Trained</p>
                    </div>
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