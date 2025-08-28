"use client";

import { FaClock, FaDollarSign, FaFileAlt } from "react-icons/fa";

const StatsSection = () => {
  const stats = [
    {
      value: "20",
      label: "Over 20 Years In Business",
      icon: null,
    },
    {
      value: null,
      label: "Fixed Price Promise",
      icon: <FaDollarSign className="text-yellow-500 text-4xl" />,
    },
    {
      value: null,
      label: "Custom Free Quotations",
      icon: <FaFileAlt className="text-yellow-500 text-4xl" />,
    },
    {
      value: null,
      label: "Timely Completion",
      icon: <FaClock className="text-yellow-500 text-4xl" />,
    },
  ];

  return (
    <section
      className="relative w-full py-16 text-center"
      style={{
        backgroundImage: "url('/hero-bg.jpg')", // replace with your background image
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Yellow Overlay */}
      <div className="absolute inset-0 bg-yellow-400 bg-opacity-80"></div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6">
        {/* Top Heading */}
        <div className="mb-12">
          <h1 className="text-3xl md:text-5xl font-extrabold text-gray-900 mb-4">
            Building Strong Foundations, One Slab at a Time
          </h1>
          <p className="text-lg md:text-2xl font-semibold text-gray-800">
            We specialise in delivering lasting foundations & transforming spaces
          </p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          {stats.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg p-8 flex flex-col items-center text-center hover:shadow-xl transition"
            >
              {item.value ? (
                <h2 className="text-5xl font-extrabold text-yellow-500 mb-2">
                  {item.value}
                </h2>
              ) : (
                <div className="mb-2">{item.icon}</div>
              )}
              <p className="text-lg font-semibold text-gray-800">
                {item.label}
              </p>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="flex flex-col md:flex-row justify-center items-center gap-4 mb-4">
            <a
              href="tel:+61498994149"
              className="bg-white border border-gray-300 px-6 py-3 rounded-md shadow-sm text-gray-900 font-semibold flex items-center gap-2 hover:bg-gray-100"
            >
              ☎️ +61 498 994 149
            </a>
            <a
              href="#quote"
              className="bg-black text-white px-6 py-3 rounded-md shadow-md font-semibold flex items-center gap-2 hover:bg-gray-800 border-2 border-yellow-500"
            >
              Get a FREE Quote 🚀
            </a>
          </div>
          <p className="text-lg font-semibold text-gray-900">
            100% Satisfaction 100% Success
          </p>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
