"use client";
import { FaStar } from "react-icons/fa";

const testimonials = [
  {
    title: "Very professional and always arrived on time",
    text: "Very professional and always arrived on time, they went above and beyond and did a magnificent job, did it in 2 days! I highly recommend them.",
    name: "Kassem C.",
    rating: 5,
    logo: "/google.png", // replace with your Google logo path
  },
  {
    title: "Very punctual and friendly",
    text: "Great job done by AMAR and his team. Very punctual and friendly. Went over and above to complete the job done on time and the finish is fantastic.",
    name: "Tee T.",
    rating: 5,
    logo: "/google.png",
  },
  {
    title: "The end result was excellent",
    text: "AMAR was very helpful in presenting ideas and explaining the work his team was doing. The end result was excellent. I would recommend Boparai Concreting.",
    name: "Omar C.",
    rating: 5,
    logo: "/google.png",
  },
];

const ReviewsSection = () => {
  return (
    <section id="reviews" className="w-full py-16 bg-white font-sans">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-12">
          <span className="bg-black text-white text-xs font-bold px-3 py-1 rounded">
            REVIEWS
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mt-4">
            WHY CUSTOMERS CHOOSE US
          </h2>
        </div>

        {/* Testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition"
            >
              <p className="text-lg font-semibold mb-3">
                <span className="text-2xl font-bold text-gray-800 mr-2">“</span>
                {t.title}
              </p>
              <hr className="my-3" />
              <p className="text-gray-600 leading-relaxed mb-4">{t.text}</p>
              {/* Stars */}
              <div className="flex items-center mb-4">
                {[...Array(t.rating)].map((_, i) => (
                  <FaStar key={i} className="text-yellow-500 mr-1" />
                ))}
              </div>
              <hr className="my-3" />
              {/* Reviewer */}
              <div className="flex justify-between items-center">
                <p className="font-bold">{t.name}</p>
                <img src={t.logo} alt="Google" className="w-16 h-auto" />
              </div>
            </div>
          ))}
        </div>

        {/* Contact Section */}
        <div className="text-center mt-12">
          <div className="flex flex-col md:flex-row justify-center items-center gap-4">
            <a
              href="tel:+61498994149"
              className="bg-white border border-gray-300 px-6 py-3 rounded-md shadow-sm text-gray-900 font-semibold flex items-center gap-2 hover:bg-gray-100"
            >
              📞 +61 498 994 149
            </a>
            <a
              href="#quote"
              className="bg-black text-white px-6 py-3 rounded-md shadow-sm font-semibold flex items-center gap-2 hover:bg-gray-800 border-2 border-yellow-500"
            >
              Get a FREE Quote 🚀
            </a>
          </div>
          <p className="mt-4 text-gray-800 font-semibold">
            100% Satisfaction 100% Success
          </p>
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;
