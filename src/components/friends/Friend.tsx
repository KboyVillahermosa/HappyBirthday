import React, { useState } from "react";
import "./Friend.css";

const Friend: React.FC = () => {
  const [showMore, setShowMore] = useState(false);

  const toggleCards = () => {
    setShowMore(!showMore);
  };

  return (
    <>
      <div className="friend-header">
        <div className="friend-image">
          <img src="/friend2.jpg" alt="" className="h-full" />
        </div>
        <div className="friend-content">
          <h1 className="mb-4 text-2xl font-semibold uppercase">
            happy mj daaay!
          </h1>
          <p className="mb-8 text-gray-900">
            jayieeee, happiest birthday! just want to say how grateful i am for
            you. you’ve been like a sister to me, and we’ve been through so much
            together church, school, life. even though we’re in different
            schools now and don’t hang out as much, you’ll always be one of my
            eternal best friends.
          </p>

          <p className="mb-8 text-gray-900">
            i pray you stay happy and keep reaching your dreams. you deserve all
            the good things in life. i miss you, let’s catch up soon! jewel is
            and will always be here for you. enjoy your day to the fullest! i
            love you so so much!
          </p>
          <p className="text-gray-900">love, jewel</p>
          <p className="text-gray-900">xoxo 💋</p>
        </div>
      </div>

      <div className="friend-header">
        <div className="friend-content">
          <h1 className="mb-4 text-2xl font-extralight uppercase">
          HAPPIESTT BIRTHDAYY to the PINAKA GWAPA, PINAKA BUOTAN, PINAKA SEXY,
            PINAKA PRETTY, PINAKA THE BEST, TRUEST SOUL, BLUEPRINT, SHINING
            STAR, GIRL'S GIRL, MY BESTEST BEST FRIEND MJAAYYEEEE!!!🤍
          </h1>
          

          <p className="mb-8 text-gray-900">
          miss miss miss you sooo muchhh daeee 😭😭 and I'm so happy that you're turning 19!! still pretty parinnn!! pag minyo na uy HAHAHAHA charis but yeahh, dugay nata walay storya and chika and nagkita, miss na kay tika daee 😭 daghan jd kog mastorya nmo pero I'm sad nga dili ko ka celebrate sa imong birthdayy dihaa kay kabalo ka layoo jd kayko HAHAHAHAHA pero anywaysss, goodluck jud sa imong journey at this age, padayun lang sa imong dreamss, best moments, wishes and manifestations, imong mga lessons sa life, and mga best experiences nimo and so on and so forddddd!
          </p>
          <p className="mb-8 text-gray-900">
          Never listen to anyone that you CAN'T DO IT, because YOU CAN and YOU CAN TRY. Wag kang sumuko sa mga hardships and struggles nimo despite nga naglisud na ka diha sa imong COURSE 😭 but not just in that field but unta sa imong layfff!! NEVER BACK DOWN, NEVER WAHHTT!?!? HAHAHAHA pero yeah imissyouuu guyss kamong duha ka-mj HAHAHAHA unta maka laag npud ta (if possible and if naay time) HAHAHA basta HAPPY BIRTHDAYYY AGAINNN daedaee hope you enjoy yourrr dayy and celebrate it with your loved onesss HAHAHAHA
          </p>
          <p className="mb-8 text-gray-900">
          samantalang ako di man ko ka celebrate nmo kay hantud letter rpud ko BWAHAHAHA basta soon jd 😭 IMISSYOUUSOOMUCHH, ILOVEYOUUU daee, and Happiest birthday again² HAHAHA 😭🤍🤍
          </p>
          <p className="text-gray-900">- Ralph</p>
        </div>
        <div className="friend-image">
          <img src="/friend1.jpg" alt="" />
        </div>
      </div>

      <div className="friend-header">
        <div className="friend-image">
          <img src="/friend3.jpg" alt="" />
        </div>
        <div className="friend-content">
          <h1 className="mb-4 text-2xl font-semibold uppercase">
            Happy Birthday
          </h1>
          <p className="mb-8 text-gray-900">
            jayieeee, happiest birthday! just want to say how grateful i am for
            you. you’ve been like a sister to me, and we’ve been through so much
            together church, school, life. even though we’re in different
            schools now and don’t hang out as much, you’ll always be one of my
            eternal best friends.
          </p>

          <p className="mb-8 text-gray-900">
            i pray you stay happy and keep reaching your dreams. you deserve all
            the good things in life. i miss you, let’s catch up soon! jewel is
            and will always be here for you. enjoy your day to the fullest! i
            love you so so much!
          </p>
          <p className="text-gray-900">love, jewel</p>
          <p className="text-gray-900">xoxo 💋</p>
        </div>
      </div>

      {/* Additional cards shown when 'showMore' is true */}
      {showMore && (
        <>
          <div className="friend-header">
            <div className="friend-content">
              <h1 className="mb-4 text-2xl font-semibold uppercase">
                happy mj daaay!
              </h1>
              <p className="mb-8 text-gray-900">
                jayieeee, happiest birthday! just want to say how grateful i am
                for you. you’ve been like a sister to me, and we’ve been through
                so much together—church, school, life. even though we’re in
                different schools now and don’t hang out as much, you’ll always
                be one of my eternal best friends.
              </p>

              <p className="mb-8 text-gray-900">
                i pray you stay happy and keep reaching your dreams. you deserve
                all the good things in life. i miss you, let’s catch up soon!
                jewel is and will always be here for you. enjoy your day to the
                fullest! i love you so so much!
              </p>
              <p className="text-gray-900">love, jewel</p>
              <p className="text-gray-900">xoxo 💋</p>
            </div>
            <div className="friend-image">
              <img src="/new1.jpg" alt="" />
            </div>
          </div>

          <div className="friend-header">
            <div className="friend-image">
              <img src="/new1.jpg" alt="" />
            </div>
            <div className="friend-content">
              <h1 className="mb-4 text-2xl font-semibold uppercase">
                happy mj daaay!
              </h1>
              <p className="mb-8 text-gray-900">
                jayieeee, happiest birthday! just want to say how grateful i am
                for you. you’ve been like a sister to me, and we’ve been through
                so much together—church, school, life. even though we’re in
                different schools now and don’t hang out as much, you’ll always
                be one of my eternal best friends.
              </p>

              <p className="mb-8 text-gray-900">
                i pray you stay happy and keep reaching your dreams. you deserve
                all the good things in life. i miss you, let’s catch up soon!
                jewel is and will always be here for you. enjoy your day to the
                fullest! i love you so so much!
              </p>
              <p className="text-gray-900">love, jewel</p>
              <p className="text-gray-900">xoxo 💋</p>
            </div>
          </div>
        </>
      )}

      {/* Button for toggling the cards */}
      <button
        onClick={toggleCards}
        className="see-more-btn mx-auto mt-4 block rounded-lg bg-[#7C00FE] px-4 py-2 text-white shadow-md"
      >
        {showMore ? "See Less" : "See More"}
      </button>
    </>
  );
};

export default Friend;
