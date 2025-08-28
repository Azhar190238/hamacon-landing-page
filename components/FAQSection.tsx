"use client";
import { useState } from "react";
import { FaMinus, FaPlus } from "react-icons/fa";

const FAQsSection = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      question: "What services do Boparai Concreting offer?",
      answer:
        "Boparai Concreting is your go-to for all things concrete! We specialise in everything from slab concreting, site cuts, and site cleans to driveways, excavation, concrete edging, repairs, grinding, resurfacing, ready mix concrete, reinforcing and more. Whatever your concreting needs, we’ve got you covered.",
    },
    {
      question: "How experienced is Boparai Concreting?",
      answer:
        "Our team has years of experience in the concreting industry, delivering projects of all sizes with precision, professionalism, and quality workmanship.",
    },
    {
      question:
        "How does Boparai Concreting ensure project completion within the agreed time frame?",
      answer:
        "We pride ourselves on efficient project management and open communication, ensuring every project is completed within the agreed timeframe without compromising on quality.",
    },
    {
      question: "Can I request a quote from Boparai Concreting?",
      answer:
        "Yes, you can easily request a free quote by contacting us directly or through our website. We’ll assess your requirements and provide a detailed and transparent estimate.",
    },
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faqs" className="w-full bg-[#FFEB99] py-16 font-sans">
      <div className="max-w-4xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-12">
          <span className="bg-black text-white text-xs font-bold px-3 py-1 rounded">
            FAQ AND HELP
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mt-4">
            FREQUENTLY ASKED QUESTIONS 🤔
          </h2>
        </div>

        {/* FAQs */}
        <div className="bg-white/40 rounded-md divide-y divide-gray-300 shadow-md">
          {faqs.map((faq, index) => (
            <div key={index}>
              <button
                className="w-full flex justify-between items-center p-5 text-left text-lg font-semibold text-gray-900"
                onClick={() => toggleFAQ(index)}
              >
                <span>
                  {index + 1}. {faq.question}
                </span>
                {openIndex === index ? (
                  <FaMinus className="text-gray-800" />
                ) : (
                  <FaPlus className="text-gray-800" />
                )}
              </button>
              {openIndex === index && (
                <div className="px-5 pb-5 text-gray-700 bg-white/60">
                  <p>{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Contact Section */}
        <div className="text-center mt-12">
          <h3 className="text-2xl font-bold mb-4">HAVE ANOTHER QUESTION?</h3>
          <div className="flex flex-col md:flex-row justify-center items-center gap-4">
            <a
              href="tel:+61498994149"
              className="bg-white border border-gray-300 px-6 py-3 rounded-md shadow-sm text-gray-900 font-semibold flex items-center gap-2 hover:bg-gray-100"
            >
              📞 +61 498 994 149
            </a>
            <a
              href="#quote"
              className="bg-black text-white px-6 py-3 rounded-md shadow-sm font-semibold flex items-center gap-2 hover:bg-gray-800"
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

export default FAQsSection;
