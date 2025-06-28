import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaComments } from 'react-icons/fa';

function Home() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 to-white flex flex-col justify-center items-center text-center px-6 py-12">
      <div className="bg-white p-8 rounded-2xl shadow-lg max-w-xl w-full">
        <div className="flex flex-col items-center space-y-4">
          <FaComments className="text-5xl text-secondary" />
          <h1 className="text-4xl font-heading text-primary">Welcome to AskEva</h1>
          <p className="text-lg text-gray-600 font-body">
            Your friendly AI color consultant — ask about services, get tips, and find your best palette 🌸
          </p>
          <button
            onClick={() => navigate('/chat')}
            className="mt-4 px-6 py-3 bg-primary text-white rounded-xl hover:bg-pink-500 transition duration-200 shadow"
          >
            💬 Start Chat
          </button>
        </div>
      </div>
    </div>
  );
}

export default Home;
