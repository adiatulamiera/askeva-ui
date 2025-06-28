import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaRegSmileBeam } from 'react-icons/fa';

function SessionEnd() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 to-white flex flex-col items-center justify-center text-center p-8 font-body">
      <div className="bg-white shadow-lg rounded-2xl p-10 max-w-md w-full">
        <FaRegSmileBeam className="text-5xl text-secondary mb-4 mx-auto" />
        <h1 className="text-4xl font-heading text-secondary mb-3">Thank You! 🌸</h1>
        <p className="text-gray-700 mb-6">
          We hope you enjoyed your style session with <strong>AskEva</strong>.
          If you have more questions, we're always here to help!
        </p>
        <button
          onClick={() => navigate('/')}
          className="px-6 py-3 bg-primary text-white rounded-xl shadow hover:bg-pink-500 transition duration-200"
        >
          Start New Session
        </button>
      </div>
    </div>
  );
}

export default SessionEnd;
