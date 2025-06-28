import React from 'react';
import { Link } from 'react-router-dom';
import { FaPalette, FaTags, FaCalendarAlt } from 'react-icons/fa';

function FAQCategories() {
  const categories = [
    { name: 'Services', icon: <FaPalette />, path: '/faq/services' },
    { name: 'Pricing', icon: <FaTags />, path: '/faq/pricing' }, // TODO: Create this route
    { name: 'Appointments', icon: <FaCalendarAlt />, path: '/faq/appointments' }, // TODO: Create this route
  ];

  return (
    <div className="min-h-screen bg-soft p-8 font-body">
      <h2 className="text-3xl font-heading text-center text-secondary mb-6">FAQ Categories</h2>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {categories.map((cat, index) => (
          <Link
            key={index}
            to={cat.path}
            className="bg-white p-6 rounded-xl shadow hover:shadow-xl hover:bg-gray-100 text-center transition duration-200 group"
          >
            <div className="flex flex-col items-center justify-center space-y-2">
              <div className="text-3xl text-secondary group-hover:text-primary">{cat.icon}</div>
              <div className="text-xl font-semibold">{cat.name}</div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default FAQCategories;
