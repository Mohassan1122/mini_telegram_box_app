import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

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
    <div className="min-h-screen flex flex-col items-center justify-center bg-green-50 p-6">
      <h1 className="text-3xl font-bold text-green-900 mb-4">Welcome New User!</h1>
      <p className="text-lg text-green-700 mb-4">We are excited to have you onboard. Your mining will start shortly.</p>
    </div>
  );
};

export default WelcomePage;
