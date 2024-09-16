import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { logo2, ton, ethereum } from "../assets/image";
import { FaTasks } from "react-icons/fa";
import { GiMining, GiTeamIdea } from "react-icons/gi";
import { SiBoosty, SiPowerfx } from "react-icons/si";


const Navbar = () => {
    const location = useLocation();

    return (
        // className={`grid mt-5 gap-3 ${
        //     isConsultationPage ? "lg:grid-cols-4" : "lg:grid-cols-2"
        //   } `}

        <nav className="fixed bottom-0 left-0 right-0 bg-gray-800 h-20 flex justify-around items-center">

            <Link to="/mining" className={location.pathname === '/mining' ? 'text-blue-300' : 'text-amber-500'}>
                <div className="flex flex-col items-center">
                    <span className={` ${location.pathname === "/mining" ? "border-blue-300" : "border-amber-500"} text-xl border-2 rounded-full p-2`}>
                        <GiMining />
                    </span>
                    <span className={` ${location.pathname === "/mining" ? "text-blue-300" : "text-white"}`}>Mining</span>
                </div>
            </Link>
            
            <Link to="/task" className={location.pathname === '/task' ? 'text-blue-500' : 'text-amber-500'}>
                <div className="flex flex-col items-center">
                    {/* <span>👤</span> */}
                    <span className={` ${location.pathname === "/task" ? "border-blue-300" : "border-amber-500"} text-xl border-2 rounded-full p-2`}><FaTasks /></span>
                    <span  className={` ${location.pathname === "/task" ? "text-blue-300" : "text-white"}`}>Task</span>
                </div>
            </Link>
            <Link to="/team" className={location.pathname === '/team' ? 'text-blue-500' : 'text-amber-500'}>
                <div className="flex flex-col items-center">
                    {/* <span>👤</span> */}
                    <span className={` ${location.pathname === "/team" ? "border-blue-300" : "border-amber-500"} text-xl border-2 rounded-full p-2`}><GiTeamIdea /></span>
                    <span  className={` ${location.pathname === "/team" ? "text-blue-300" : "text-white"}`}>Team</span>
                </div>
            </Link>
            <Link to="/boost" className={location.pathname === '/boost' ? 'text-blue-500' : 'text-amber-500'}>
                <div className="flex flex-col items-center">
                    {/* <span>👤</span> */}
                    <span className={` ${location.pathname === "/boost" ? "border-blue-300" : "border-amber-500"} text-xl border-2 rounded-full p-2`}><SiBoosty /></span>
                    <span  className={` ${location.pathname === "/boost" ? "text-blue-300" : "text-white"}`}>Boost</span>
                </div>
            </Link>
            <Link to="/leadership" className={location.pathname === '/leadership' ? 'text-blue-500' : 'text-amber-500'}>
                <div className="flex flex-col items-center">
                    {/* <span>👤</span> */}
                    <span className={` ${location.pathname === "/leadership" ? "border-blue-300" : "border-amber-500"} text-xl border-2 rounded-full p-2`}><SiPowerfx /></span>
                    <span  className={` ${location.pathname === "/leadership" ? "text-blue-300" : "text-white"}`}>Leadership</span>
                </div>
            </Link>
        </nav>
    );
};

export default Navbar;
// <div className="text-center text-white">

// <p className="text-sm font-bold">Tasks</p>
// </div>
// <div className="text-center text-white">
// <img
//     src={ton}
//     alt="Telegram Logo"
//     className="w-9 h-9"
// />
// <p className="text-sm font-bold">Team</p>
// </div>
// <div className="text-center text-white">
// <img
//     src={ethereum}
//     alt="Telegram Logo"
//     className="w-9 h-9"
// />
// <p className="text-sm font-bold">Boost</p>
// </div>
// <div className="text-center text-white">
// <img
//     src={ton}
//     alt="Telegram Logo"
//     className="w-9 h-9 ms-3"
// />
// <p className="text-sm font-bold">Leaderboard</p>
// </div>