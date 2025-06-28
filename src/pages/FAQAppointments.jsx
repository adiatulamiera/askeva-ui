import React, { useState } from 'react';
import { FaChevronDown, FaChevronUp, FaComments } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

function FAQAppointments() {
const navigate = useNavigate();
const [openIndex, setOpenIndex] = useState(null);

const toggle = (index) => {
    setOpenIndex(index === openIndex ? null : index);
};

const faqs = [
    {
    q: "How do I book a session?",
    a: "You can book directly through our Instagram DM, WhatsApp, or our website if booking forms are available. Payment confirms your slot."
    },
    {
    q: "Can I reschedule my session?",
    a: "Yes, just contact us at least 24 hours before your appointment. We’ll help you find a new slot that suits you."
    },
    {
    q: "What if I need to cancel?",
    a: "Please inform us early. Refunds may not be guaranteed for last-minute cancellations but can be discussed on a case-by-case basis."
    },
    {
    q: "How do I know if my booking is confirmed?",
    a: "Once payment is received, we’ll send you a confirmation message with all the session details."
    },
    {
    q: "Can I bring someone with me?",
    a: "Of course! If you're booking a small group or duo session, let us know so we can prepare accordingly."
    }
];

return (
    <div className="min-h-screen bg-soft p-8 font-body relative">
    <h2 className="text-3xl font-heading text-secondary text-center mb-6">Appointments & Booking</h2>

    <div className="max-w-4xl mx-auto space-y-4">
        {faqs.map((item, index) => (
        <div key={index} className="bg-white p-5 rounded-xl shadow hover:shadow-md transition">
            <button
            onClick={() => toggle(index)}
            aria-expanded={openIndex === index}
            className="w-full flex justify-between items-center text-left font-semibold text-primary text-lg"
            >
            <span>{item.q}</span>
            {openIndex === index ? <FaChevronUp /> : <FaChevronDown />}
            </button>
            {openIndex === index && (
            <div className="mt-3 text-sm text-gray-700">
                <p>{item.a}</p>
            </div>
            )}
        </div>
        ))}
    </div>

    {/* ✅ Global WhatsApp CTA at bottom */}
    <div className="text-center mt-10">
        <p className="text-gray-800 font-medium mb-2">Ready to book your session?</p>
        <a
        href="https://wa.me/60162344208?text=Hi%2C%20I%20would%20like%20to%20book%20a%20colour%20consultation%20session."
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block bg-green-500 text-white px-6 py-3 rounded-lg shadow hover:bg-green-600 transition text-sm"
        >
        📲 Book via WhatsApp
        </a>
    </div>

    {/* 💬 Floating Chat Button */}
    <button
        onClick={() => navigate('/chat')}
        className="fixed bottom-6 right-6 bg-secondary text-white px-4 py-3 rounded-full shadow-lg flex items-center gap-2 hover:bg-pink-500 transition duration-200 z-50"
    >
        <FaComments />
        Chat with Eva
    </button>
    </div>
);
}

export default FAQAppointments;
    