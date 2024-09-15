import React from 'react'

export default function Home() {
  return (
    <div>
         <div className="min-h-screen flex flex-col items-center text-white bg-slate-950 justify-center no-scroll p-6">
        <h1 className="text-3xl text-amber-600 font-bold mb-8  responsive-text">Welcome</h1>

        <div className="flex flex-col items-center text-center justify-center font-extrabold p-3 space-y-4 max-w-lg">
          <p className="responsive-text">Join us on this exciting journey.<br /> Mine <br /><span className='md:text-lg text-xxs'> Multi-Layered Autonomous Blockcahain Utility Token</span>  <br /> $MCT <br /> Join the evolution</p>
        </div>

        <button
          onClick=""
          className="outline outline-amber-600  text-amber-600 my-20 py-2 px-16 rounded-full hover:bg-gray-800 "
        > <span className='text-xl px-2 font-extrabold yeseva-one-regular'>
            Start
          </span>

        </button>
      </div>
    </div>
  )
}


// import React, { useState, useEffect } from 'react';
// import { intervalToDuration } from 'date-fns';
// import { logo2, ton, ethereum } from "../assets/image";
// import axios from 'axios';

// const MiningPage = () => {
//     const [profile, setProfile] = useState({
//         username: 'John Doe',
//         level: 1, // Default level
//         profilePicture: 'https://img.icons8.com/color/96/000000/user.png', // Default profile picture
//     });
//     const [miningProgress, setMiningProgress] = useState(0);
//     const [mctBalance, setMctBalance] = useState(0);
//     const [tonBalance, setTonBalance] = useState(0.5);
//     const [ethBalance, setEthBalance] = useState(0.003);
//     const [speed, setSpeed] = useState(0.008);
//     const [timer, setTimer] = useState(8 * 60 * 60 * 1000);
//     const [miningCycleEnd] = useState(Date.now() + 70 * 24 * 60 * 60 * 1000);
//     const [isMining, setIsMining] = useState(false);


//     // Fetch user data from the backend on component mount
//     useEffect(() => {
//         const fetchUserProfile = async () => {
//             try {
//                 const response = await axios.get('/api/user/profile'); // Replace with actual API endpoint
//                 setProfile({
//                     username: response.data.username || 'John Doe',
//                     level: response.data.level || 1,
//                     profilePicture: response.data.profilePicture || 'https://img.icons8.com/color/96/000000/user.png',
//                 });
//                 setMiningCycleEnd(response.data.miningCycleEnd || (Date.now() + 70 * 24 * 60 * 60 * 1000)); // Fetch mining cycle end
//             } catch (error) {
//                 console.error('Error fetching user profile:', error);
//             }
//         };

//         fetchUserProfile();
//     }, []);


//     useEffect(() => {
//         const interval = setInterval(() => {
//             if (miningCycleEnd > Date.now()) {
//                 setMiningProgress((prev) => Math.min(prev + (100 / (70 * 24)), 100));
//                 setTimer((prev) => prev - 1000);
//             } else {
//                 setIsMining(false);
//                 setTimer(0);
//             }
//         }, 1000);

//         return () => clearInterval(interval);
//     }, [miningCycleEnd]);

//     // Function to format the time duration as numbers only
//     const formatTimeAsNumbers = (start, end) => {
//         const { days, hours, minutes, seconds } = intervalToDuration({ start, end });
//         return `${String(days).padStart(2, '0')}:${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
//     };

//     const { hours, minutes, seconds } = intervalToDuration({ start: 0, end: timer });

//     const handleClaim = () => {
//         if (!isMining) {
//             // Simulate a successful API response
//             const simulatedResponse = {
//                 newBalance: mctBalance + speed, // Simulate the new balance after mining
//             };

//             setIsMining(true);
//             setTimer(8 * 60 * 60 * 1000); // Reset timer to 8 hours
//             setMctBalance(simulatedResponse.newBalance); // Update MCT balance

//             // Console message for development purposes
//             console.log('Claim simulated: New balance is', simulatedResponse.newBalance);

//             // When the API is ready, uncomment this block to use the actual backend
//             /*
//             try {
//               const response = await axios.post('/api/mining/claim', { speed });
//               setIsMining(true);
//               setTimer(8 * 60 * 60 * 1000); // Reset timer to 8 hours
//               setMctBalance(response.data.newBalance); // Update MCT balance from backend response
//             } catch (error) {
//               console.error('Error claiming tokens:', error);
//             }
//             */
//         }
//     };


//     return (
//         <div className="min-h-scree flex flex-col items-center justify-center text-gray-800 p-4 relative">
//             <div className="absolute top-4 left-4 flex items-center space-x-3">
//                 <img
//                     src={profile.profilePicture}
//                     alt="Profile"
//                     className="w-14 h-14 rounded-full md:w-16 md:h-16 shadow-lg border-2 border-yellow-600"
//                 />
//                 <div className='Lilita-One'>
//                     <p className="text-sm mt-5 font-bold text-amber-500 md:text-lg">Level {profile.level}</p>
//                     <p className="text-xs md:text-sm text-white">{profile.username}</p>
//                 </div>
//             </div>

//             <div className="text-center mt-24 mb-8  Lilita-One ">
//                 <p className="text-xl text-amber-500 md:text-xl">
//                     {formatTimeAsNumbers(Date.now(), miningCycleEnd)}
//                 </p>
//             </div>

//             <div className="shadow-amber-300 shadow-md rounded-xl border-2 border-amber-500 p-6 max-w-md w-full relative">
//                 <div className="flex flex-col items-center space-y-4 mb-6">
//                     <div className="flex justify-between w-full  space-x-4  squada-one-regular">
//                         <div className="text-center text-white">
//                             <p className="text-xl font-bold">
//                                 <img
//                                     src={logo2}
//                                     alt="Telegram Logo"
//                                     className="w-12 h-12 mb-2"
//                                 />
//                             </p>
//                             <p className="text-lg">{mctBalance.toFixed(4)}</p>
//                         </div>
//                         <div className="text-center text-white">
//                             <p className="text-xl font-bold">
//                                 <img
//                                     src={ton}
//                                     alt="Telegram Logo"
//                                     className="w-12 h-12 mb-2"
//                                 />
//                             </p>
//                             <p className="text-lg">{tonBalance.toFixed(4)}</p>
//                         </div>
//                         <div className="text-center text-white">
//                             <p className="text-xl font-bold">
//                                 <img
//                                     src={ethereum}
//                                     alt="Telegram Logo"
//                                     className="w-12 h-12 mb-2"
//                                 />
//                             </p>
//                             <p className="text-lg">{ethBalance.toFixed(4)}</p>
//                         </div>
//                     </div>
//                 </div>

//                 <div className="text-center Lilita-One">
//                     <p className="text-amber-500">Speed: <span className="text-white">{speed} / 8 hours</span></p>

//                 </div>
//             </div>
//             <p className=" text-white mt-12">
//                 {`${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`}
//             </p>
//             <div className="relative h-5 mt-4 mb-8 shadow-md shadow-amber-500 bg-gray-300 rounded-full w-full max-w-md">
//                 <div
//                     className="absolute top-0 left-0 h-5 bg-gray-900 rounded-full transition-all duration-500"
//                     style={{ width: `${miningProgress}%` }}
//                 ></div>
//             </div>

//             <div className="text-center">
//                 <button
//                     onClick={handleClaim}
//                     className="outline outline-amber-500  text-white  my-2 py-2 px-16 rounded-full transition duration-300"
//                 > <span className='text-xl px-2 font-extrabold yeseva-one-regular'>
//                         {isMining ? 'Claim' : 'Start'}
//                     </span>

//                 </button>
//             </div>

//             <div className="flex justify-between w-full  space-x-4 mt-10 p-5 squada-one-regular">
//                 <div className="text-center text-white">
//                     <p className="text-xl font-bold">
//                         <img
//                             src={logo2}
//                             alt="Telegram Logo"
//                             className="w-12 h-12 mb-2"
//                         />
//                     </p>
//                     <p className="text-lg">Tasks</p>
//                 </div>
//                 <div className="text-center text-white">
//                     <p className="text-xl font-bold">
//                         <img
//                             src={ton}
//                             alt="Telegram Logo"
//                             className="w-12 h-12 mb-2"
//                         />
//                     </p>
//                     <p className="text-lg">Team</p>
//                 </div>
//                 <div className="text-center text-white">
//                     <p className="text-xl font-bold">
//                         <img
//                             src={ethereum}
//                             alt="Telegram Logo"
//                             className="w-12 h-12 mb-2"
//                         />
//                     </p>
//                     <p className="text-lg">Boost</p>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default MiningPage;
