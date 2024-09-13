import React from 'react';
import { useNavigate } from 'react-router-dom';
import { logo } from "../assets/image";

const LandingPage = () => {
    const navigate = useNavigate();

    const handleStart = async () => {
        navigate('/welcome');
    }
    // Fetching the user's Telegram info from the server
    // try {
    //   const response = await fetch('/api/check-user', {
    //     method: 'POST',
    //     headers: {
    //       'Content-Type': 'application/json',
    //     },
    //     body: JSON.stringify({
    //       telegramUserId: "telegram-user-id", // replace with actual telegram user ID
    //     }),
    //   });

    //   const result = await response.json();

    //   if (!result.exists) {
    //     // If the user exists, navigate to the mining page
    // navigate('/mining');
    //   } else {
    //     // If the user is new, navigate to the welcome page
    //     navigate('/welcome');
    //   }
    // } catch (error) {
    //   console.error('Error:', error);
    // }
    //   };

    return (
        <div className="min-h-screen flex flex-col items-center text-center justify-center  p-6">
            {/* Logo */}
            <img
                src={logo}
                alt="Telegram Logo"
                className="w-24 h-24 mb-6 animate-spinSlow"
            />

            {/* Welcome Text */}
            <h1 className="text-xl font-bold mb-8 responsive-text" style={{ color: '#f29b06' }} >
                MLAB Communuty Token
            </h1>

            {/* Start Button */}
            <button
                onClick={handleStart}
                className="text-white font-bold my-20 py-4 px-20 rounded-full hover:bg-yellow-200 transition duration-300"
                style={{ backgroundColor: '#f29b06' }}
            >
                <span className="text-2xl px-2 font-extrabold yeseva-one-regular">
                    Start
                </span>
            </button>



        </div>
    );
};

export default LandingPage;
