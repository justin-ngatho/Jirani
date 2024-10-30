import React, {useEffect, useState} from "react";
import Button from 'react-bootstrap/Button'

export default function Hero ()
 {

  const [activeIndex, setActiveIndex] = useState(0);
  const carouselData = [
    {
      id: 1,
      imageUrl: "./images/home1.jpg",
      caption: 'Jirani Fund',
      captionText: 'is an organization dedicated to addressing the pressing challenges of climate change, environmental management, and improving access to health services in the rural parts of Western Kenya',
      buttonText: 'Core Values', // Button text
      buttonLink: '/learn-more'     

    },
    {
      id: 2,
      imageUrl: './images/home3.jpg',
      caption: 'Climate Change and Environmental Management',
      captionText: 'Jirani Fund is at the forefront to mitigate the adverse impacts of environmental degradation through community-based initiatives',
      buttonText: 'Featured Projects', // Button text
    buttonLink: '/learn-more' 

    },
    {
      id: 3,
      imageUrl: './images/home4.jpg',
      caption: 'Access to Health Services',
      captionText: 'In addition to its environmental efforts, Jirani Fund plays a pivotal role in improving access to health services in the rural parts of Western Kenya, where healthcare infrastructure is often lacking.',
      buttonText: 'Youth Programs', // Button text
    buttonLink: '/learn-more' 
    },
  ];

  const totalSlides = carouselData.length;

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex === totalSlides - 1 ? 0 : prevIndex + 1));
    }, 3000); // Set the autoplay interval (in milliseconds), here it's set to 3 seconds (3000ms)

    return () => {
      clearInterval(interval); // Clean up the interval when the component unmounts
    };
  }, [totalSlides]);

  return (
    <div id="autoplayCarousel" className="carousel slide" data-bs-ride="carousel">
      <div className="carousel-inner">
        {carouselData.map((slide, index) => (
          <div
            key={slide.id}
            className={`carousel-item ${index === activeIndex ? 'active' : ''}`}
          >
            <div className="img-container">
            <img src={slide.imageUrl} className="d-block w-100" alt={slide.caption}  />
            </div>
            
            <div className="carousel-caption">
              <h2>{slide.caption}</h2>
              <br/>
              <h4>{slide.captionText}</h4>
              <br/>
              <Button>{slide.buttonText}</Button> <br/>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
