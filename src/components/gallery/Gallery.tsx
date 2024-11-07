import React from 'react';

const Gallery: React.FC = () => {
  const testimonials = [
    {
      name: "Alice Johnson",
      text: "This platform helped me advance my skills!",
      image: "https://via.placeholder.com/50",
    },
    {
      name: "Mark Twain",
      text: "Incredible resources and amazing community support.",
      image: "https://via.placeholder.com/50",
    },
    {
      name: "Sarah Williams",
      text: "A must-have tool for every developer.",
      image: "https://via.placeholder.com/50",
    },
    {
      name: "John Doe",
      text: "A fantastic experience that changed my career!",
      image: "https://via.placeholder.com/50",
    },
    {
      name: "Emily Smith",
      text: "Supportive community and great learning resources.",
      image: "https://via.placeholder.com/50",
    },
  ];

  return (
    <section className="dark:bg-gray-800 py-10 overflow-hidden">
      <div className="marquee-container">
        <div className="marquee-content">
          {testimonials.concat(testimonials).map((testimonial, index) => (
            <div
              key={index}
              className="flex items-center space-x-4 bg-white rounded-lg p-4 shadow-lg mx-4 transition-transform duration-300 ease-in-out"
            >
              <img
                src={testimonial.image}
                alt={`${testimonial.name}'s avatar`}
                className="w-12 h-12 rounded-full"
              />
              <div>
                <p className="text-gray-800 font-semibold">{testimonial.name}</p>
                <p className="text-gray-600 text-sm">{testimonial.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Inline CSS for the marquee effect */}
      <style>
        {`
          @keyframes marquee {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          .marquee-container {
            display: flex;
            overflow: hidden;
            white-space: nowrap;
            position: relative;
            width: 100%;
          }
          .marquee-content {
            display: inline-flex;
            animation: marquee 20s linear infinite; /* Adjust speed here */
          }
        `}
      </style>
    </section>
  );
};

export default Gallery;
