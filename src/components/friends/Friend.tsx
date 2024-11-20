import React, { useState } from "react";
import "./Friend.css";

const Friend: React.FC = () => {
  const [showMore, setShowMore] = useState(false);

  const toggleCards = () => {
    setShowMore(!showMore);
  };

  return (
    <>
      <section id="greetings">
        <div className="greetings-title">
          <div className="greatings-title-content">
            <h1 className='dark:text-white" mb-4 text-4xl font-extrabold uppercase leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl'>
              <span className="text-[#F9E400]"> Message </span>{" "}
              <span className="text-[#7C00FE]">from your friends</span>
            </h1>
          </div>
        </div>
        <div className="friend-mes">
          <div className="friend-ms-content">
            <p className="mb-5 text-gray-900">
              Hey love, you might be wondering why this message is here or how I
              even got it. Well, let me tell you a little secrer. I reached out
              to your friend Mark for help. I know it’s a bit bold of me, but I
              just wanted to do something special to make you happy. Mark was
              kind enough to share this since he knows your best friend, and I
              thought it would mean a lot to include it here.
            </p>
            <p className="text-gray-900">
              I really wanted to add messages from all your friends, but I don’t
              know them well enough yet. Even so, I hope this small effort
              brings a smile to your face. You mean so much to me, and I’d do
              anything to see you happy. I love you, always!
            </p>
          </div>
        </div>
        <div className="friend-header">
          <div className="friend-image">
            <img src="/friend2.jpg" alt="" className="h-full" />
          </div>
          <div className="friend-content">
            <h1 className="mb-4 text-2xl font-semibold uppercase">
              happy mj daaay!
            </h1>
            <p className="mb-8 text-gray-900">
              jayieeee, happiest birthday! just want to say how grateful i am
              for you. you’ve been like a sister to me, and we’ve been through
              so much together church, school, life. even though we’re in
              different schools now and don’t hang out as much, you’ll always be
              one of my eternal best friends.
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

        <div className="friend-header">
          <div className="friend-content">
            <h1 className="mb-4 text-2xl font-extralight uppercase">
              HAPPIESTT BIRTHDAYY to the PINAKA GWAPA, PINAKA BUOTAN, PINAKA
              SEXY, PINAKA PRETTY, PINAKA THE BEST, TRUEST SOUL, BLUEPRINT,
              SHINING STAR, GIRL'S GIRL, MY BESTEST BEST FRIEND MJAAYYEEEE!!!🤍
            </h1>

            <p className="mb-8 text-gray-900">
              miss miss miss you sooo muchhh daeee 😭😭 and I'm so happy that
              you're turning 19!! still pretty parinnn!! pag minyo na uy
              HAHAHAHA charis but yeahh, dugay nata walay storya and chika and
              nagkita, miss na kay tika daee 😭 daghan jd kog mastorya nmo pero
              I'm sad nga dili ko ka celebrate sa imong birthdayy dihaa kay
              kabalo ka layoo jd kayko HAHAHAHAHA pero anywaysss, goodluck jud
              sa imong journey at this age, padayun lang sa imong dreamss, best
              moments, wishes and manifestations, imong mga lessons sa life, and
              mga best experiences nimo and so on and so forddddd!
            </p>
            <p className="mb-8 text-gray-900">
              Never listen to anyone that you CAN'T DO IT, because YOU CAN and
              YOU CAN TRY. Wag kang sumuko sa mga hardships and struggles nimo
              despite nga naglisud na ka diha sa imong COURSE 😭 but not just in
              that field but unta sa imong layfff!! NEVER BACK DOWN, NEVER
              WAHHTT!?!? HAHAHAHA pero yeah imissyouuu guyss kamong duha ka-mj
              HAHAHAHA unta maka laag npud ta (if possible and if naay time)
              HAHAHA basta HAPPY BIRTHDAYYY AGAINNN daedaee hope you enjoy
              yourrr dayy and celebrate it with your loved onesss HAHAHAHA
            </p>
            <p className="mb-8 text-gray-900">
              samantalang ako di man ko ka celebrate nmo kay hantud letter rpud
              ko BWAHAHAHA basta soon jd 😭 IMISSYOUUSOOMUCHH, ILOVEYOUUU daee,
              and Happiest birthday again² HAHAHA 😭🤍🤍
            </p>
            <p className="text-gray-900">- Ralph</p>
          </div>
          <div className="friend-image">
            <img src="/friend1.jpg" alt="" />
          </div>
        </div>

        <div className="friend-header">
          <div className="friend-image">
            <img src="/friend5.jpg" alt="" />
          </div>
          <div className="friend-content">
            <h1 className="mb-4 text-2xl font-semibold uppercase">
              Happy Birthday jiiii 🫶✨
            </h1>
            <p className="mb-7 text-gray-900">
              More birthdays to come, salamat kaau sa tanan HAHAHAHA ikaw baya
              jud mama nako sa tanan butang pagkuha requirements pagpa enroll ug
              unsa pa diha na wala ko kabalo 😭😆 Unta dijud ni maguba atong
              friendship bahalag maguba na imong nawng sa Aces laban gihapon ta
              duha pagkaon pud permi di raba ka mo kaon mo sulod ha 👊 Ingat
              permi jiii labyuuuuu again Happy birthday tiguwang naka pero putot
              gihapon 😙❤️ Librehan tika sa school pag magkita ta
            </p>
            <p className="text-gray-900">Mark 🫶✨</p>
          </div>
        </div>

        {/* Additional cards shown when 'showMore' is true */}
        {showMore && (
          <>
            <div className="friend-header">
              <div className="friend-content">
                <h1 className="mb-4 text-2xl font-semibold uppercase">
                  Happy Birthday lovelove
                </h1>
                <p className="mb-8 text-gray-900">
                  I just want to take a moment to tell you how proud I am of
                  you. Even though layo ta, I see your strength, your hard work,
                  and your determination to chase your dreams.
                </p>

                <p className="mb-8 text-gray-900">
                  I know the distance isn’t easy, but I believe in us, and I
                  believe in you. You’re capable of achieving so much, and I
                  can’t wait to see you reach every goal you set for yourself.
                  Whatever the future holds, know that I’ll always be here
                  cheering you on, supporting you, and loving you every step of
                  the way.
                </p>
                <p className="text-gray-900">Francisco</p>
                <p className="text-gray-900">Sorry naka uyab jud kag batig nawong ૮₍´˶• . • ⑅ ₎ა</p>
              </div>
              <div className="friend-image">
                <img src="/kboy2.png" alt="" />
              </div>
            </div>

            <div className="friend-header">
              <div className="friend-image">
                <img src="/kboy3.png" alt="" />
              </div>
              <div className="friend-content">
                <h1 className="mb-4 text-2xl font-semibold uppercase">
                 HAPPI BERTDAY AKO NASAD HEHE
                </h1>
                <p className="mb-8 text-gray-900">
                Good luck with your studies, my love! I know how hard you work, and I’m so proud of all the effort you put into achieving your dreams. If you ever need help, support, or just someone to talk to, please know that I’m always here for you, no matter what.
                </p>

                <p className="mb-8 text-gray-900">
                I’m so glad to have you in my life you’re truly a blessing, and I’ll always be cheering you on. Keep pushing forward and believe in yourself, because I believe in you with all my heart. You’ve got this, love!
                </p>
                <p className="text-gray-900">Kboy ˚˖𓍢ִ໋🌷͙֒✧🩷˚.🎀༘⋆</p>
              
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
      </section>
    </>
  );
};

export default Friend;
