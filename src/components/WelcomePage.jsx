import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { logo } from "../assets/image";

const WelcomePage = () => {
    const navigate = useNavigate();

    useEffect(() => {
        const timer = setTimeout(() => {
            // Automatically navigate to the mining page after 10 seconds
            navigate('/mining');
        }, 10000);

        return () => clearTimeout(timer);
    }, [navigate]);

    return (

        <div className="min-h-screen flex flex-col items-center text-center justify-center no-scroll p-8">
            {/* Logo */}
            <img
                src={logo}
                alt="Telegram Logo"
                className="w-24 h-24 mb-6 animate-spinSlow"
            />

            {/* Welcome Text */}
            <h1 className="text-2xl font-bold mb-8 responsive-text" style={{ color: '#f29b06' }} >
                Welcome John Doe!
            </h1>

            <p className="text-xl responsive-text my-20" style={{ color: '#f29b06' }}>We are excited to have you onboard. Your mining will start shortly.</p>



        </div>
    );
};

export default WelcomePage;
