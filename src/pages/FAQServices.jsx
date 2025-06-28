import React, { useState } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

function FAQServices() {
  const [openIndex, setOpenIndex] = useState(null);

  const items = [
    { q: 'How does color analysis work?', a: 'We analyze your undertone, hair, and eye color to find your ideal seasonal palette.' },
    { q: 'Can I bring my clothes?', a: 'Yes! You’re encouraged to bring your personal items for better style advice.' },
    { q: 'Do you provide a swatch or palette?', a: 'Yes, you’ll receive a digital or physical guide depending on your package.' },
    { q: 'Can men do color analysis?', a: 'Absolutely! Our service is gender-inclusive and suitable for everyone.' },
    { q: 'Is this available online?', a: 'Yes, we offer virtual sessions via WhatsApp or Zoom.' }
  ];

  const toggle = (i) => {
    setOpenIndex(openIndex === i ? null : i);
  };

  return (
    <div className="min-h-screen bg-soft p-8 font-body">
      <h2 className="text-3xl font-heading text-center text-secondary mb-6">Service FAQs</h2>
      <div className="max-w-3xl mx-auto space-y-4">
        {items.map((item, i) => (
          <div key={i} className="bg-white p-4 rounded-xl shadow hover:shadow-md transition duration-200">
            <button
              onClick={() => toggle(i)}
              className="w-full flex justify-between items-center text-left font-semibold text-primary"
            >
              <span>{item.q}</span>
              {openIndex === i ? <FaChevronUp /> : <FaChevronDown />}
            </button>
            {openIndex === i && (
              <p className="mt-2 text-gray-600 text-sm">{item.a}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default FAQServices;
