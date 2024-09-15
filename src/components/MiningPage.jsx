
import React, { useState, useEffect } from 'react';
import { logo2, ton, ethereum } from "../assets/image";
import axios from 'axios';

const MiningPage = () => {
    // State for user profile and mining stats
    const [profile, setProfile] = useState({
        username: 'John Doe',
        level: 1,
        profilePicture: 'https://img.icons8.com/color/96/000000/user.png',
    });
    const [mctBalance, setMctBalance] = useState(0);
    const [tonBalance, setTonBalance] = useState(0.5);
    const [ethBalance, setEthBalance] = useState(0.003);
    const [speed, setSpeed] = useState(0.008);
    const [timer, setTimer] = useState(8 * 60 * 60 * 1000); // 8 hours in ms
    const [miningCycleEnd, setMiningCycleEnd] = useState(Date.now() + 70 * 24 * 60 * 60 * 1000); // 70 days in ms
    const [isMining, setIsMining] = useState(false);
    const [eightHourCountdown, setEightHourCountdown] = useState(null);
    const [miningProgress, setMiningProgress] = useState(0);





    // Fetch user data from the backend on component mount
   // Fetch user data from API (placeholder logic)
   const fetchUserProfile = async () => {
    try {
        // Simulate API call to fetch user profile
        const response = await axios.get('/api/user/profile'); // Replace with actual API
        setProfile({
            username: response.data.username || 'John Doe',
            level: response.data.level || 1,
            profilePicture: response.data.profilePicture || 'https://img.icons8.com/color/96/000000/user.png',
        });
    } catch (error) {
        console.error('Error fetching user profile:', error);
    }
};



    // Check for existing user-specific countdown from localStorage on mount
    useEffect(() => {
        fetchUserProfile(); // Fetch the user profile

        const storedStartTime = localStorage.getItem(`miningStartTime_${profile.username}`);
        if (storedStartTime) {
            const elapsedTime = Date.now() - parseInt(storedStartTime);
            const remainingTime = timer - elapsedTime;
            if (remainingTime > 0) {
                setEightHourCountdown(remainingTime);
                setIsMining(true);
            } else {
                setEightHourCountdown(0);
                setIsMining(false);
            }
        }
    }, [profile.username]);


    // Update mining progress every second
    useEffect(() => {
        const interval = setInterval(() => {
            if (miningCycleEnd > Date.now()) {
                setMiningProgress((prev) => Math.min(prev + (100 / (70 * 24 * 60 * 60)), 100)); // Increase progress gradually
            }
        }, 1000);

        return () => clearInterval(interval);
    }, [miningCycleEnd]);


    // Start the 8-hour countdown when "Mine" button is clicked
    useEffect(() => {
        if (isMining) {
            const countdown = setInterval(() => {
                setEightHourCountdown((prev) => {
                    if (prev <= 1000) {
                        clearInterval(countdown);
                        setIsMining(false);
                        setMiningProgress(100); // Fill the progress bar
                        return 0;
                    }
                    setMiningProgress(((8 * 60 * 60 * 1000 - prev) / (8 * 60 * 60 * 1000)) * 100); // Update progress
                    return prev - 1000;
                });
            }, 1000);

            return () => clearInterval(countdown);
        }
    }, [isMining]);

    // Format time from milliseconds to HH:MM:SS
    const formatTimeAsNumbers08 = (milliseconds) => {
        const totalSeconds = Math.floor(milliseconds / 1000);
        const hours = String(Math.floor(totalSeconds / 3600)).padStart(2, '0');
        const minutes = String(Math.floor((totalSeconds % 3600) / 60)).padStart(2, '0');
        const seconds = String(totalSeconds % 60).padStart(2, '0');

        return `${hours}:${minutes}:${seconds}`;
    };

    // Format time from milliseconds to DD:HH:MM:SS
    const formatTimeAsNumbers = (milliseconds) => {
        const totalSeconds = Math.floor(milliseconds / 1000);
        const days = Math.floor(totalSeconds / (3600 * 24));
        const hours = String(Math.floor((totalSeconds % (3600 * 24)) / 3600)).padStart(2, '0');
        const minutes = String(Math.floor((totalSeconds % 3600) / 60)).padStart(2, '0');
        const seconds = String(totalSeconds % 60).padStart(2, '0');

        return `${days}:${hours}:${minutes}:${seconds}`;
    };


    // Handle Claim logic
    const handleClaim = () => {
        if (!isMining) {
            // Simulate successful mining claim
            const simulatedResponse = { newBalance: mctBalance + speed };

            setIsMining(true);
            setEightHourCountdown(8 * 60 * 60 * 1000); // Reset timer to 8 hours
            setMctBalance(simulatedResponse.newBalance); // Update MCT balance

            const miningStartTime = Date.now();
            localStorage.setItem(`miningStartTime_${profile.username}`, miningStartTime); // Store mining start time for the user
            setEightHourCountdown(timer); // Start the 8-hour countdown
            setMiningProgress(0);

            // Log for development purposes
            console.log('Claim simulated: New balance is', simulatedResponse.newBalance);
            

            // Uncomment when API is ready
            /*
            try {
                const response = await axios.post('/api/mining/claim', { speed });
                setMctBalance(response.data.newBalance); // Update balance from backend response

                setIsMining(true);
                setEightHourCountdown(8 * 60 * 60 * 1000); // Reset timer to 8 hours
                setMctBalance(response.data.newBalance); // Update MCT balance from backend response
            } catch (error) {
                console.error('Error claiming tokens:', error);
            }
            */
        }
    };

    // 70-Day Mining Cycle Timer
    const miningCycleFormatted = miningCycleEnd
        ? formatTimeAsNumbers(miningCycleEnd - Date.now())
        : "70:00:00:00"; // Default to 70 days if undefined

    // 8-Hour Mining Countdown
    const eightHourFormatted = eightHourCountdown !== null && eightHourCountdown > 0
        ? formatTimeAsNumbers08(eightHourCountdown)
        : "08:00:00"; // Default to 8 hours if undefined or expired

    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gray-900 p-6 relative">
            {/* Profile Section */}
            <div className="absolute top-4 left-4 flex items-center space-x-3">
                <img
                    src={profile.profilePicture}
                    alt="Profile"
                    className="w-14 h-14 md:w-16 md:h-16 rounded-full border-2 border-amber-500 shadow-lg"
                />
                <div className="Lilita-One text-white">
                    <p className="text-sm md:text-lg font-bold text-amber-500">Level {profile.level}</p>
                    <p className="text-xs md:text-sm">{profile.username}</p>
                </div>
            </div>

            {/* Mining Cycle Countdown */}
            <div className="text-center mt-24 mb-8">
                <p className=" text-amber-50">{miningCycleFormatted}</p>
            </div>

            {/* Balance Card */}
            <div className="shadow-md rounded-xl border-2 border-amber-500 p-6 max-w-md w-full bg-gradient-to-r from-black via-slate-600 to-amber-800">
                <div className="flex justify-between text-center space-x-4 yeseva-one-regular">
                    <div className="text-white">
                        <img src={logo2} alt="MCT Logo" className="w-10 h-10 mb-2" />
                        <p className="text-sm">{mctBalance.toFixed(4)}</p>
                    </div>
                    <div className="text-white">
                        <img src={ton} alt="TON Logo" className="w-10 h-10 mb-2" />
                        <p className="text-sm">{tonBalance.toFixed(4)}</p>
                    </div>
                    <div className="text-white">
                        <img src={ethereum} alt="ETH Logo" className="w-10 h-10 mb-2" />
                        <p className="text-sm">{ethBalance.toFixed(4)}</p>
                    </div>
                </div>

                {/* Mining Speed */}
                <div className="text-center my-6 yeseva-one-regular text-amber-500">
                    <p>Rate: <span className="text-white">{speed} MCT / 8 hours</span></p>
                </div>
            </div>

            {/* 8-Hour Mining Timer */}
            <div className="mt-24">
                <p>{eightHourFormatted}</p>
            </div>

            {/* Progress Bar */}
            <div className="relative h-4 mt-6 mb-8 shadow-inner shadow-amber-500 bg-gray-600 rounded-full w-full max-w-md">
                <div
                    className="absolute top-0 left-0 h-4 bg-amber-500 rounded-full transition-all duration-300 flex items-center justify-center"
                    style={{ width: `${miningProgress}%` }}
                >
                    <span className="text-white text-xs font-bold">{Math.floor(miningProgress)}%</span>
                </div>
            </div>



            {/* Mine/Claim Button */}
            <button
                onClick={handleClaim}
                disabled={isMining}
                className=" outline outline-gray-700 text-gray-900 px-8 py-2 rounded-xl transition-all duration-300"
            >
                <span className="text-xl text-amber-500 px-14 font-bold yeseva-one-regular">
                    {isMining ? 'Claim' : 'Mine'}
                </span>
            </button>

            {/* Footer Navigation */}
            <div className="flex justify-between w-full mt-20 p-3 squada-one-regular">
                <div className="text-center text-white">
                    <img
                        src={logo2}
                        alt="Telegram Logo"
                        className="w-9 h-9"
                    />
                    <p className="text-sm font-bold">Tasks</p>
                </div>
                <div className="text-center text-white">
                    <img
                        src={ton}
                        alt="Telegram Logo"
                        className="w-9 h-9"
                    />
                    <p className="text-sm font-bold">Team</p>
                </div>
                <div className="text-center text-white">
                    <img
                        src={ethereum}
                        alt="Telegram Logo"
                        className="w-9 h-9"
                    />
                    <p className="text-sm font-bold">Boost</p>
                </div>
                <div className="text-center text-white">
                    <img
                        src={ton}
                        alt="Telegram Logo"
                        className="w-9 h-9 ms-3"
                    />
                    <p className="text-sm font-bold">Leaderboard</p>
                </div>
            </div>
        </div>
    );
};

export default MiningPage;
