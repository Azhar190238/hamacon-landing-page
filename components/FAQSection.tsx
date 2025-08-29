"use client";
import { useState } from "react";
import { FaMinus, FaPlus } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { ShimmerButton } from "./magicui/shimmer-button";

const FAQsSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "What services do Boparai Concreting offer?",
      answer:
        "Boparai Concreting is your go-to for all things concrete! We specialise in everything from slab concreting, site cuts, and site cleans to driveways, excavation, concrete edging, repairs, grinding, resurfacing, ready mix concrete, reinforcing and more. Whatever your concreting needs, we’ve got you covered.",
    },
    {
      question: "How experienced is Boparai Concreting?",
      answer:
        "Boasting more than two decades of expertise, Boparai Concreting has established itself as a prominent success in Melbourne. Our team is composed of highly skilled and certified professionals committed to providing exceptional concreting services.",
    },
    {
      question:
        "How does Boparai Concreting ensure project completion within the agreed time frame?",
      answer:
        "Led by AMAR, our team of dedicated professionals ensures timely project completion. No matter the size of the project, we focus on meeting deadlines and providing outstanding results at competitive rates",
    },
    {
      question: "Can I request a quote from Boparai Concreting?",
      answer:
        "Absolutely! Feel free to request a no-obligation FREE quote by filling in the form or by giving us a call to schedule a visit. Our team will come to your location, assess your needs in detail, and then provide you with a personalised quote for FREE!",
    },
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faqs" className="w-full bg-[#FFEB99] py-16 font-sans">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-12">
          <span className="bg-black text-white text-xs font-bold px-3 py-1 rounded">
            FAQ AND HELP
          </span>
          <h2 className="text-3xl md:text-4xl mx-auto lg:text-5xl txt-center max-w-[500px] font-extrabold text-gray-900 mt-4">
            FREQUENTLY ASKED QUESTIONS 🤔
          </h2>
        </div>

        {/* FAQs */}
        <div className="bg-transparent rounded-md divide-y divide-gray-300 shadow-md">
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

              <AnimatePresence initial={false}>
                {openIndex === index && (
                  <motion.div
                    key="content"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                    className="overflow-hidden px-5"
                  >
                    <div className="pb-5 text-gray-700">
                      <p>{faq.answer}</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>

        {/* Contact Section */}
        <div className="text-center mt-12">
          <h3 className="text-2xl font-bold mb-4">HAVE ANOTHER QUESTION?</h3>
          <div className="flex flex-col md:flex-row justify-center items-center gap-4">
           <div className=" animate-bounce-slow">
            <a
              href="tel:+61498994149"
              className=""
            >
              <ShimmerButton  background="#FFA100" className="shadow-2xl">
                <span>☎️</span>
                <span className="whitespace-pre-wrap text-center  font-medium leading-none tracking-tight text-white dark:from-white dark:to-slate-900/10 lg:text-lg">
                  +61 498 994 149
                </span>
              </ShimmerButton>
            </a>
          </div>
            <a
              href="#quote"
              className="bg-black text-white px-6 py-3 rounded-md shadow-sm font-semibold flex items-center gap-2 hover:bg-gray-800"
            >
              Get a FREE Quote 🚀
            </a>
          </div>
          <div className="flex items-center justify-center gap-3 pt-6">
            <div className="flex -space-x-2">
              <Image
                src="/hero/avatar1.jpg"
                alt="Customer"
                width={40}
                height={40}
                className="w-10 h-10 rounded-full border-2 border-white"
              />
              <Image
                src="/hero/avatar2.jpg"
                alt="Customer"
                width={40}
                height={40}
                className="w-10 h-10 rounded-full border-2 border-white"
              />
              <Image
                src="/hero/avatar3.jpeg"
                alt="Customer"
                width={40}
                height={40}
                className="w-10 h-10 rounded-full border-2 border-white"
              />
            </div>
            <span className="font-bold text-[#000]">
              100% Satisfaction • 100% Success
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQsSection;
