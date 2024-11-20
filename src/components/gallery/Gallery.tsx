import React from "react";

const Gallery: React.FC = () => {
  const compliments = [
    { text: "She is absolutely gorgeous!" },
    { text: "Her smile lights up my world." },
    { text: "She’s strong and inspiring." },
    { text: "She’s truly one of a kind." },
    { text: "Her beauty shines from within." },
    { text: "She’s amazing in every way." },
    { text: "Her confidence is contagious." },
    { text: "She’s a true gem." },
    { text: "She radiates love and positivity." },
    { text: "She is everything I could ask for." },
  ];
  

  // Define a list of colors
  const colors = [
    "#7C00FE", // Purple
    "#F5004F", // Red
    "#00FF9C", // Green
    "#FFE700", // Yellow
    "#FF7F50", // Coral (just an additional color if needed)
  ];

  return (
    <section className="dark:bg-gray-800 py-10 overflow-hidden" id="compliments">
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <svg
          aria-hidden="true"
          className="absolute left-[max(50%,25rem)] top-0 h-[64rem] w-[128rem] -translate-x-1/2 stroke-gray-200 [mask-image:radial-gradient(64rem_64rem_at_top,white,transparent)]"
        >
          <defs>
            <pattern
              x="50%"
              y={-1}
              id="e813992c-7d03-4cc4-a2bd-151760b470a0"
              width={200}
              height={200}
              patternUnits="userSpaceOnUse"
            >
              <path d="M100 200V.5M.5 .5H200" fill="none" />
            </pattern>
          </defs>
          <svg x="50%" y={-1} className="overflow-visible fill-gray-50">
            <path
              d="M-100.5 0h201v201h-201Z M699.5 0h201v201h-201Z M499.5 400h201v201h-201Z M-300.5 600h201v201h-201Z"
              strokeWidth={0}
            />
          </svg>
          <rect
            fill="url(#e813992c-7d03-4cc4-a2bd-151760b470a0)"
            width="100%"
            height="100%"
            strokeWidth={0}
          />
        </svg>
      </div>
      <div className="marquee-container">
        <div className="marquee-content p-3">
          {compliments.concat(compliments).map((compliment, index) => (
            <div
              key={index}
              className="flex items-center p-8 justify-center max-w-full sm:max-w-sm rounded-lg  shadow-lg mx-3 min-w-[250px] transition-transform duration-300 ease-in-out hover:scale-105"
              style={{ backgroundColor: colors[index % colors.length] }} // Assign color based on index
            >
              <p className="text-gray-900 dark:text-gray-200 text-lg font-semibold text-center">
                {compliment.text}
              </p>
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
            padding: 0 1rem;
          }
          .marquee-content {
            display: inline-flex;
            animation: marquee 20s linear infinite;
          }
        `}
      </style>
    </section>
  );
};

export default Gallery;
