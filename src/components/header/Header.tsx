import React, { useState, useEffect, useRef } from "react";
import { MdVolumeOff, MdVolumeUp } from "react-icons/md";
import "./Header.css";
import confetti from 'canvas-confetti';

const Header: React.FC = () => {
  const [isMuted, setIsMuted] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  // Toggle mute state
  const toggleMute = () => {
    if (audioRef.current) {
      audioRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  // Function to launch confetti
  const launchConfetti = () => {
    confetti({
      particleCount: 200,
      spread: 80,
      origin: { y: 0.6 },
    });
  };

  // Play audio once the component is mounted and also launch confetti
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.play().catch((error) => {
        // Handle errors if audio play is blocked, for example, due to the browser's autoplay policy
        console.error("Error playing audio:", error);
      });
    }
    const interval = setInterval(launchConfetti, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
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
          <rect fill="url(#e813992c-7d03-4cc4-a2bd-151760b470a0)" width="100%" height="100%" strokeWidth={0} />
        </svg>
      </div>
      <audio ref={audioRef} src="/happy-bday.mp3" loop />
      <div className="header">
        <div className="header-content">
          <h1 className="mb-4 text-4xl font-extrabold uppercase leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
            Happy 19th <span className="text-[#7E3AF2] dark:text-blue-500">Birthday</span> love
          </h1>
          <p className="text-gray-800">
            I wish more than anything that I could be there with you today, celebrating side by side. Even from miles away, you’re always right here with me. 
            I hope your day is filled with all the love and happiness you deserve. Soon enough, I’ll be right there by your side again. Until then, know that my heart is with you, today and always. Love you endlessly.
          </p>
        </div>
      </div>
      <button onClick={toggleMute} className="mute-button">
        {isMuted ? <MdVolumeOff size={30} /> : <MdVolumeUp size={30} />}
      </button>
    </>
  );
};

export default Header;
