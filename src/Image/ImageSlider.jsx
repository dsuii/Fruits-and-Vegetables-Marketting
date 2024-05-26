import React, { useState, useEffect } from 'react';

const ImageSlider = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = [
    'Fresh Fruits And Vegetables.jpeg',
    'fruits.jpeg',
    
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 2000); 

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div>
      <img src={images[currentImageIndex]}  />
    </div>
  );
};

export default ImageSlider;