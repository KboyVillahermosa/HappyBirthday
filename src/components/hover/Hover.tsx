import React, { useState, useEffect } from 'react';

const Hover = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [visible, setVisible] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const images = [
    '/public/441380688_812233863886826_8870630713172442332_n.jpg',
    '/public/441387235_1485194498748739_6944457586635026638_n.jpg',
    '/public/441397840_360149953383672_4007691928379040380_n.jpg',
  ];

  const handleMouseMove = (event: React.MouseEvent) => {
    setVisible(true);
    setPosition({ x: event.clientX, y: event.clientY });
    setCurrentImage((prevImage) => (prevImage + 1) % images.length);
  };

  useEffect(() => {
    const timeout = setTimeout(() => setVisible(false), 1000);
    return () => clearTimeout(timeout);
  }, [currentImage]);

  return (
    <div
      className="relative h-screen w-screen bg-gray-100"
      onMouseMove={handleMouseMove}
    >
      {visible && (
        <img
          src={images[currentImage]}
          alt={`Hover Image ${currentImage + 1}`}
          className="absolute pointer-events-none transition-all duration-500 ease-in-out"
          style={{
            top: `${position.y}px`,
            left: `${position.x}px`,
            transform: 'translate(-50%, -50%) scale(0.8)',
            opacity: visible ? 1 : 0,
            borderRadius: '8px',
            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
          }}
        />
      )}
      <p className="text-center mt-5 text-xl">Move your mouse to see the images follow!</p>
    </div>
  );
};

export default Hover;
