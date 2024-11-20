import React, { useState } from "react";
import './Cakes.css'

const Cake: React.FC = () => {
  const [candlesLit, setCandlesLit] = useState(true);

  const blowOutCandles = () => {
    setCandlesLit(false);
  };

  return (
    <>
    <section id="cake">
     <div className="cake-title">
     <h1 className='mb-4 text-4xl font-extrabold uppercase leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white"'><span className='text-[#FFE700]'>Make </span> <span className='text-[#00FF9C]'>a</span> <span className='text-[#7E3AF2]'>Wish</span></h1>
     </div>
    <div className="cake mt-8">
      {/* Cake */}
      <div className="relative w-80 h-60">
        {/* Cake Base */}
        <div className="absolute bottom-0 bg-gradient-to-t from-yellow-400 to-yellow-300 w-full h-40 rounded-t-3xl shadow-lg"></div>
        {/* Frosting */}
        <div className="absolute bottom-36 bg-pink-200 w-72 h-8 rounded-t-full left-1/2 transform -translate-x-1/2"></div>
        {/* Second Layer */}
        <div className="absolute bottom-44 bg-gradient-to-t from-pink-400 to-pink-300 w-64 h-28 rounded-t-3xl left-1/2 transform -translate-x-1/2 shadow-md"></div>
        {/* Second Frosting */}
        <div className="absolute bottom-68 bg-pink-200 w-60 h-6 rounded-t-full left-1/2 transform -translate-x-1/2"></div>
        {/* Top Layer */}
        <div className="absolute bottom-72 bg-gradient-to-t from-pink-400 to-pink-300 w-48 h-16 rounded-t-3xl left-1/2 transform -translate-x-1/2 shadow-sm"></div>
        {/* Top Frosting */}
        <div className="absolute bottom-88 bg-pink-200 w-44 h-4 rounded-t-full left-1/2 transform -translate-x-1/2"></div>
        {/* Candles */}
        <div className="absolute bottom-80 left-1/2 transform -translate-x-1/2 flex space-x-4">
          {Array(5)
            .fill(0)
            .map((_, idx) => (
              <div
                key={idx}
                className="relative w-6 h-24 bg-blue-400 rounded-lg flex items-end shadow-md"
              >
                {/* Wax Drips */}
                <div className="absolute top-4 left-0 w-6 h-2 bg-blue-500 rounded-full"></div>
                <div className="absolute top-10 left-0 w-4 h-2 bg-blue-500 rounded-full"></div>
                {/* Flame */}
                {candlesLit && (
                  <div className="absolute top-[-12px] left-1/2 transform -translate-x-1/2 w-6 h-8 bg-gradient-to-t from-yellow-400 via-orange-400 to-red-500 rounded-full shadow-md animate-flicker"></div>
                )}
              </div>
            ))}
        </div>
      </div>
      {/* Message */}
      <p className="text-center font-semibold text-gray-800 mt-8 p-6 text-xl italic ">
        {candlesLit
          ? "Make a wish and blow out the candles! 🎂"
          : "Happy Birthday love sorry kani ra akoang cake mahatag sa karon i hope ma appreciate nimo love, I love you so much. Happy Birthday, I wish you all the happiness in the world! 🎉"}
      </p>
       <div className="image-blow">
        <div className="image-blow-content">
        {!candlesLit && <img src="/yea.gif" alt="Happy Birthday" className="mt-6"/>}
        </div>
        <div className="image-blow-content">
        {!candlesLit && <img src="/bdaygif.gif" alt="Happy Birthday" className="mt-6"/>}

        </div>
        <div className="image-blow-content">
        {!candlesLit && <img src="/cat.gif" alt="Happy Birthday" className="mt-6"/>}

        </div>
       </div>
      {/* Button */}
      <button
        className="px-4 py-2 mt-4 bg-[#7C00FE] text-white rounded-lg shadow-md"
        onClick={blowOutCandles}
      >
        Blow Out the Candles
      </button>
    </div>
    </section>
    </>
  );
};


export default Cake;
