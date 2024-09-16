import React from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';

const Layout = () => {
    const location = useNavigate();
    const showNavbar = !['/landing', '/welcome'].includes(location.pathname);

    return (
        <div className="app-container">
            
            {/* Page content */}
            <div className="content">
                <Outlet />
            </div>
            {/* Conditional Navbar */}
            {showNavbar && <Navbar />}
        </div>
    );
};

export default Layout;
