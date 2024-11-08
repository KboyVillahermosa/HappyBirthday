import React, { useState } from 'react';
import { Card } from 'flowbite-react';
import './Greatings.css';

const Greetings: React.FC = () => {
  // Separate states for each card's like toggle
  const [likeCard1, setLikeCard1] = useState(false);
  const [likeCard2, setLikeCard2] = useState(false);
  const [likeCard3, setLikeCard3] = useState(false);
  const [likeCard4, setLikeCard4] = useState(false);

  // Function to toggle like state for each card
  const handleLikeToggle = (cardNumber: number) => {
    switch (cardNumber) {
      case 1:
        setLikeCard1(prev => !prev);
        break;
      case 2:
        setLikeCard2(prev => !prev);
        break;
      case 3:
        setLikeCard3(prev => !prev);
        break;
      case 4:
        setLikeCard4(prev => !prev);
        break;
      default:
        break;
    }
  };

  return (
    <>
      <div className="greatings-header flex flex-wrap gap-4 justify-center">
        <div className="greatings-content">
          <Card className="max-w-sm w-full" imgSrc="/kboy.jpg" horizontal>
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Kboy Villahermosa
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">
              Happy Birthday love, I’m so proud of you always!
            </p>
            <div className="flex items-center justify-between mt-4">
              <button
                onClick={() => handleLikeToggle(1)}
                className={`text-2xl flex items-center space-x-2 transition-colors ${
                  likeCard1 ? 'text-pink-600' : 'text-gray-500'
                } hover:text-pink-800`}
              >
                ❤️
                <span className="text-sm font-medium">{likeCard1 ? 1 : 0}</span>
              </button>
            </div>
          </Card>
        </div>

        <div className="greatings-content">
          <Card className="max-w-sm w-full" imgSrc="/kboy.jpg" horizontal>
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Mark Twain
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">
              Hope you have the most wonderful birthday ever!
            </p>
            <div className="flex items-center justify-between mt-4">
              <button
                onClick={() => handleLikeToggle(2)}
                className={`text-2xl flex items-center space-x-2 transition-colors ${
                  likeCard2 ? 'text-pink-600' : 'text-gray-500'
                } hover:text-pink-800`}
              >
                ❤️
                <span className="text-sm font-medium">{likeCard2 ? 1 : 0}</span>
              </button>
            </div>
          </Card>
        </div>

        <div className="greatings-content">
          <Card className="max-w-sm w-full" imgSrc="/kboy.jpg" horizontal>
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Sarah Williams
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">
              Wishing you all the joy and happiness on your special day!
            </p>
            <div className="flex items-center justify-between mt-4">
              <button
                onClick={() => handleLikeToggle(3)}
                className={`text-2xl flex items-center space-x-2 transition-colors ${
                  likeCard3 ? 'text-pink-600' : 'text-gray-500'
                } hover:text-pink-800`}
              >
                ❤️
                <span className="text-sm font-medium">{likeCard3 ? 1 : 0}</span>
              </button>
            </div>
          </Card>
        </div>

        <div className="greatings-content">
          <Card className="max-w-sm w-full" imgSrc="/kboy.jpg" horizontal>
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              John Doe
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">
              May this year bring you countless blessings and endless joy!
            </p>
            <div className="flex items-center justify-between mt-4">
              <button
                onClick={() => handleLikeToggle(4)}
                className={`text-2xl flex items-center space-x-2 transition-colors ${
                  likeCard4 ? 'text-pink-600' : 'text-gray-500'
                } hover:text-pink-800`}
              >
                ❤️
                <span className="text-sm font-medium">{likeCard4 ? 1 : 0}</span>
              </button>
            </div>
          </Card>
        </div>
      </div>
    </>
  );
};

export default Greetings;
