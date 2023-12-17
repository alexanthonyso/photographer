import React, { useEffect, useState } from "react";
import "../styles/gallery.css";
import AOS from "aos";
import "aos/dist/aos.css";
import image1 from "../assets/img/img1.png";
import image2 from "../assets/img/img2.png";
import image3 from "../assets/img/img3.png";
import image4 from "../assets/img/img4.png";
import image5 from "../assets/img/img5.png";
import image6 from "../assets/img/img6.png";
import image7 from "../assets/img/img7.png";
import image8 from "../assets/img/img8.png";
import image9 from "../assets/img/img9.png";
import image10 from "../assets/img/img10.png";
import image11 from "../assets/img/img11.png";

const Gallery = () => {
  const imageUrls = [
    image1, image2, image3, image4, image5, image6, image7, image8, image9, image10, image11
  ];

  const animationClasses = [
    "fade-up", "fade-down", "fade-left", "fade-right", "zoom-in", "zoom-out",
    "flip-left", "flip-right", "flip-up", "flip-down", "slide-up"
    // Ajoutez d'autres classes AOS selon vos besoins
  ];

  const [hoveredImage, setHoveredImage] = useState(null);

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="gallery-container">
      {imageUrls.map((url, index) => (
        <div
          key={index}
          className={`image-container ${hoveredImage === index ? 'enlarge' : ''}`}
          data-aos={animationClasses[index]}
          data-aos-duration="3000"
        
        >
          <img src={url} alt={`Image ${index + 1}`} />
        </div>
      ))}
    </div>
  );
};

export default Gallery;
