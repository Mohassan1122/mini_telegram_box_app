import React from 'react';
import { useNavigate } from 'react-router-dom';
import { logo2 } from "../assets/image";

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
        <div className="min-h-screen flex flex-col items-center text-center justify-center no-scroll p-6">
            {/* Logo */}
            <img
                src={logo2}
                alt="Telegram Logo"
                className="w-44 h-44 mb-6"
            />

            {/* Welcome Text */}
            <h1 className="text-xl font-bold text-amber-500 yeseva-one-regular"  >
                MLAB's Communuty Token
            </h1>

            {/* Start Button */}
            <button
                onClick={handleStart}
                className="button my-14"
            >
                <span className="text-2xl px-2 font-extrabold yeseva-one-regular">
                    Start
                </span>
            </button>



        </div>
    );
};

export default LandingPage;
