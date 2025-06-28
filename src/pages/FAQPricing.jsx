import React, { useState } from 'react';
import { FaChevronDown, FaChevronUp, FaComments } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

function FAQPricing() {
const navigate = useNavigate();
const [openIndex, setOpenIndex] = useState(null);

const toggle = (index) => {
    setOpenIndex(index === openIndex ? null : index);
};

const packages = [
    {
    title: "🌸 Seasonal Colour Analysis (1-to-1 / Small Group)",
    price: "RM 900 / pax",
    promo: "RM 750 / pax (Diwali Promo)",
    details: [
        "4 Season Colour Analysis + 24-colour chart",
        "Includes 7 days of free 1-on-1 consultation",
        "Identify Power Colour for confidence boost",
        "Special group rates for 2 pax and above"
    ]
    },
    {
    title: "🎨 Seasonal Colour Card",
    price: "RM 35",
    details: [
        "Pocket-sized colour swatch card",
        "Ideal for hair, makeup, scarf, outfit shopping",
        "Can be purchased after any colour analysis session",
    ]
    },
    {
    title: "🧰 Trainer Colour Tools",
    price: "RM 499",
    details: [
        "4 Seasons Colour Analysis Tools",
        "Designed for stylists and educators",
        "Durable board with visible seasonal hues"
    ]
    },
    {
    title: "📚 Train-the-Trainer: 12 Season + Face & Body Analysis",
    price: "RM 13,088",
    details: [
        "14 warm & cool drapes",
        "4 + 12 season cards + makeup guide set",
        "8 face shapes + 100 clothing cards",
        "Classes held in KK & Singapore (late 2024)"
    ]
    },
    {
    title: "💼 Image Consulting Packages",
    price: "From RM 1,200 to RM 7,399",
    details: [
        "12 Season Colour + Body & Face Analysis",
        "Capsule wardrobe planning",
        "Style etiquette + personal shopping guide",
        "3 tiers: Seasonal (RM1200), Style (RM3399), Branding (RM7399)"
    ]
    }
];

return (
    <div className="min-h-screen bg-soft p-8 font-body relative">
    <h2 className="text-3xl font-heading text-secondary text-center mb-6">Pricing & Packages</h2>

    <div className="max-w-5xl mx-auto space-y-4">
        {packages.map((pkg, index) => (
        <div key={index} className="bg-white p-5 rounded-xl shadow hover:shadow-md transition">
            <button
            onClick={() => toggle(index)}
            className="w-full flex justify-between items-center text-left font-semibold text-primary text-lg"
            >
            <span>{pkg.title}</span>
            {openIndex === index ? <FaChevronUp /> : <FaChevronDown />}
            </button>

            <p className="text-sm mt-1 text-gray-600 font-medium">{pkg.price}</p>
            {pkg.promo && (
            <p className="text-sm text-green-600 font-medium">⭐ {pkg.promo}</p>
            )}

            {openIndex === index && (
            <ul className="mt-3 list-disc pl-6 text-sm text-gray-700 space-y-1">
                {pkg.details.map((item, idx) => (
                <li key={idx}>{item}</li>
                ))}
            </ul>
            )}
        </div>
        ))}
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

export default FAQPricing;
