import React from 'react';
import './ImageSlider1.css';

const images = [
  
  'https://blog.saginfotech.com/wp-content/uploads/2018/12/gst-rate-slash.jpg',
  'https://www.gorefurbo.com/cdn/shop/collections/Refurbished_Mobile_Phones_1.jpg?v=1695978895',
  'https://www.91-cdn.com/hub/wp-content/uploads/2022/07/Top-laptop-brands-in-India-1200x675.jpg',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNTL1vtJx6dzNqoHuKeW3D4CtFMBjxau1sng&s'
];

const ImageSlider1 = () => {
  return (
    <div className="slider-container">
      <div className="slider">
        {images.map((image, index) => (
          <div className="slide" key={index}>
            <img src={image} alt={`Slide ${index + 1}`} />
          </div>
        ))}
      </div>
      <div className="navigation">
        {images.map((_, index) => (
          <button
            key={index}
            className="nav-button"
            // Add functionality if needed
          ></button>
        ))}
      </div>
    </div>
  );
};

export default ImageSlider1;
