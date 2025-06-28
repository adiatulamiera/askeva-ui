import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaHome, FaComments, FaQuestionCircle, FaSignOutAlt } from 'react-icons/fa';

function Navbar() {
const location = useLocation();

const linkStyle = (path) =>
    `flex items-center gap-2 px-4 py-2 rounded-lg font-body transition ${
    location.pathname === path
        ? 'bg-primary text-white'
        : 'text-gray-700 hover:bg-soft'
    }`;

return (
    <nav className="sticky top-0 z-50 w-full bg-white shadow-md px-6 py-3 flex flex-col sm:flex-row justify-between items-start sm:items-center font-heading">
    <h1 className="text-xl text-primary font-bold mb-2 sm:mb-0">AskEva</h1>

    <div className="flex flex-col sm:flex-row sm:space-x-3 w-full sm:w-auto">
        <Link to="/" className={linkStyle('/')}>
        <FaHome /> Home
        </Link>

        <Link to="/chat" className={linkStyle('/chat')}>
        <FaComments /> Chat
        </Link>

        <div className="relative group">
        <div className="flex items-center gap-2 px-4 py-2 text-gray-700 hover:bg-soft rounded-lg cursor-pointer">
            <FaQuestionCircle /> FAQ
        </div>
        <div className="absolute hidden group-hover:flex flex-col bg-white shadow-md rounded-md top-full left-0 w-48 mt-1 z-10">
            <Link to="/faq" className="px-4 py-2 hover:bg-soft text-sm text-gray-700">All FAQs</Link>
            <Link to="/faq/services" className="px-4 py-2 hover:bg-soft text-sm text-gray-700">Services</Link>
            <Link to="/faq/pricing" className="px-4 py-2 hover:bg-soft text-sm text-gray-700">Pricing</Link>
            <Link to="/faq/appointments" className="px-4 py-2 hover:bg-soft text-sm text-gray-700">Appointments</Link>
        </div>
        </div>

        <Link to="/session-end" className={linkStyle('/session-end')}>
        <FaSignOutAlt /> End Session
        </Link>
    </div>
    </nav>
);
}

export default Navbar;
