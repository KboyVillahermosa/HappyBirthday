import React from "react";
import "./Message.css";

const KboyMessage: React.FC = () => {
  return (
    <>
    <section id="message">
      <div className="message-title">
        <h1 className='dark:text-white" mb-4 text-4xl font-extrabold uppercase leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl'>
         <span className="text-[#F9E400]"> My </span> <span className="text-[#7C00FE]"> Message </span>
        </h1>
      </div>
      <div className="message-header">
        <div className="message-content">
          <h3></h3>
          <p className="mb-5 text-gray-900">
            I know we’re miles apart today, but my heart is with you,
            celebrating every beautiful moment of your special day. You’re the
            most amazing person I’ve ever known, and I wish I could give you the
            world—everything you deserve and more.
          </p>

          <p className="mb-5 text-gray-900">
            I feel so sorry that I can’t shower you with grand gifts or
            surprises right now, but I hope you can see my heart in this website
            I made for you. It’s my way of showing how much you mean to me, even
            if I’m not physically there to hold your hand and make you feel as
            special as you truly are.
          </p>

          <p className="mb-5 text-gray-900">
            You inspire me every day to work harder and dream bigger. One day,
            I’ll be able to give you the life you deserve. Until then, please
            know that my love for you is infinite and my heart is always yours,
            no matter the distance.
          </p>
          <p className="mb-5 text-gray-900">
          I hope this day brings you nothing but joy and love, just like the happiness you’ve brought into my life. I love you so much! Happy Birthday again, my gorgeous girl! 💖
          </p>

          <p className=" text-gray-900">
          Always and forever,
          </p>
          <p className="mb-8 text-gray-900">
           Kboy Villahermosa
          </p>
        </div>
      </div>
      </section>
    </>
  );
};

export default KboyMessage;
