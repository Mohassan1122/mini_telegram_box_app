import React, { useState, useEffect } from 'react';
import { intervalToDuration } from 'date-fns';

const MiningPage = () => {
    const [miningProgress, setMiningProgress] = useState(0);
    const [mctBalance, setMctBalance] = useState(0);
    const [tonBalance, setTonBalance] = useState(0.5);
    const [ethBalance, setEthBalance] = useState(0.003);
    const [speed, setSpeed] = useState(0.008);
    const [timer, setTimer] = useState(8 * 60 * 60 * 1000);
    const [miningCycleEnd] = useState(Date.now() + 70 * 24 * 60 * 60 * 1000);
    const [isMining, setIsMining] = useState(false);

    useEffect(() => {
        const interval = setInterval(() => {
            if (miningCycleEnd > Date.now()) {
                setMiningProgress((prev) => Math.min(prev + (100 / (70 * 24)), 100));
                setTimer((prev) => prev - 1000);
            } else {
                setIsMining(false);
                setTimer(0);
            }
        }, 1000);

        return () => clearInterval(interval);
    }, [miningCycleEnd]);

    const formatTimeAsNumbers = (start, end) => {
        const { days, hours, minutes, seconds } = intervalToDuration({ start, end });
        return `${String(days).padStart(2, '0')}:${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
    };

    const { hours, minutes, seconds } = intervalToDuration({ start: 0, end: timer });

    const handleClaim = () => {
        if (!isMining) {
            setIsMining(true);
            setTimer(8 * 60 * 60 * 1000);
            setMctBalance((prev) => prev + speed);
        }
    };

    return (
        <div className="min-h-scree flex flex-col items-center justify-center text-gray-800 p-4 relative">
            <div className="absolute top-4 left-4 flex items-center space-x-3">
                <img
                    src="https://img.icons8.com/color/96/000000/user.png"
                    alt="Profile"
                    className="w-14 h-14 rounded-full md:w-16 md:h-16 shadow-lg border-2 border-yellow-600"
                />
                <div>
                    <p className="text-sm mt-5 font-bold text-yellow-600 md:text-lg">Level 1</p>
                    <p className="text-xs md:text-sm text-white">Username</p>
                </div>
            </div>

            <div className="text-center mt-24 mb-8">
                <p className="text-lg text-yellow-600 md:text-xl">
                    {formatTimeAsNumbers(Date.now(), miningCycleEnd)}
                </p>
            </div>

            <div className="shadow-green-400 shadow rounded-xl border-2 border-yellow-600 p-6 max-w-md w-full relative">
                <div className="flex flex-col items-center space-y-4 mb-6">
                    <div className="flex justify-between w-full px-8">
                        <div className="text-center text-white">
                            <p className="text-xl font-bold">MCT</p>
                            <p className="text-lg">{mctBalance.toFixed(4)}</p>
                        </div>
                        <div className="text-center text-white">
                            <p className="text-xl font-bold">TON</p>
                            <p className="text-lg">{tonBalance.toFixed(4)}</p>
                        </div>
                        <div className="text-center text-white">
                            <p className="text-xl font-bold">ETH</p>
                            <p className="text-lg">{ethBalance.toFixed(4)}</p>
                        </div>
                    </div>
                </div>

                <div className="text-center mb-4">
                    <p className="text-base text-yellow-600">Speed: <span className="text-white">{speed} / 8 hours</span></p>
                    <p className="text-sm text-white mt-7">
                        {`${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`}
                    </p>
                </div>
            </div>

            <div className="relative h-5 mt-12 mb-8 shadow shadow-yellow-500 bg-gray-300 rounded-full w-full max-w-md">
                <div
                    className="absolute top-0 left-0 h-5 bg-gray-900 rounded-full transition-all duration-500"
                    style={{ width: `${miningProgress}%` }}
                ></div>
            </div>

            <div className="text-center">



                <button
                    onClick={handleClaim}
                    className="outline outline-amber-600  text-white  my-2 py-2 px-16 rounded-full transition duration-300"
                > <span className='text-xl px-2 font-extrabold yeseva-one-regular'>
                        {isMining ? 'Claim' : 'Start'}
                    </span>

                </button>


                {/* <button
                    onClick={handleClaim}
                    className="bg-yellow-500 text-white py-2 px-6 rounded-full hover:bg-yellow-400 transition duration-300"
                >
                    {isMining ? 'Claim' : 'Start'}
                </button> */}
            </div>
        </div>
    );
};

export default MiningPage;
