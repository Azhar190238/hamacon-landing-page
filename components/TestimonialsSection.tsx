"use client";
import Image from "next/image";
import { FaStar } from "react-icons/fa";
import { ShimmerButton } from "./magicui/shimmer-button";
import Link from "next/link";
import { PulsatingButton } from "./magicui/pulsating-button";
import AnimatedContent from "./ui/animatedContent";

const testimonials = [
  {
    title: "Very professional and always arrived on time",
    text: "Very professional and always arrived on time, they went above and beyond and did a magnificent job, did it in 2 days! I highly recommend them.",
    name: "Kassem C.",
    rating: 5,
    logo: "/others/google.png", // replace with your Google logo path
  },
  {
    title: "Very punctual and friendly",
    text: "Great job done by AMAR and his team. Very punctual and friendly. Went over and above to complete the job done on time and the finish is fantastic.",
    name: "Tee T.",
    rating: 5,
    logo: "/others/google.png",
  },
  {
    title: "The end result was excellent",
    text: "AMAR was very helpful in presenting ideas and explaining the work his team was doing. The end result was excellent. I would recommend Boparai Concreting.",
    name: "Omar C.",
    rating: 5,
    logo: "/others/google.png",
  },
];

const ReviewsSection = () => {
  return (
    <section id="reviews" className="w-full py-16 bg-white font-sans overflow-x-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-12">
          <AnimatedContent direction="horizontal" distance={100} reverse={true}>
            <span className="bg-black text-white text-xs font-bold px-3 py-1 rounded">
              REVIEWS
            </span>
          </AnimatedContent>
          <AnimatedContent direction="horizontal" distance={100} reverse={false}>
            <h2 className="text-3xl md:text-4xl lg:text-[40px] font-extrabold text-[#000] mt-4">
              WHY CUSTOMERS CHOOSE US
            </h2>
          </AnimatedContent>
        </div>

        {/* Testimonials */}
        <AnimatedContent direction="vertical" distance={100} reverse={false}>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, index) => (
            <div
              key={index}
              className="border border-gray-200 hover:scale-105 transition-all duration-500 rounded-lg p-6 shadow-sm hover:shadow-md"
            >
              <p className=" text-xl md:text-2xl lg:text-[28px] text-[#000] font-bold mb-3">
                <span className="text-2xl md:text-3xl font-bold mr-2">“</span>
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
                <p className="text-lg font-bold">{t.name}</p>
                <img src={t.logo} alt="Google" className="w-16 h-auto" />
              </div>
            </div>
          ))}
        </div>
        </AnimatedContent>

        <div className="text-center mt-12">
          <div className="flex flex-col md:flex-row justify-center items-center gap-4">
            <div className=" animate-bounce-slow">
              <a href="tel:+61498994149" className="">
                <ShimmerButton background="#FFA100" className="shadow-2xl">
                  <span>☎️</span>
                  <span className="whitespace-pre-wrap text-center  font-medium leading-none tracking-tight text-white dark:from-white dark:to-slate-900/10 lg:text-lg">
                    +61 498 994 149
                  </span>
                </ShimmerButton>
              </a>
            </div>
            <div className="animate-bounce-slow">
              <Link href="/#quote" className="text-white animate-accordion-up">
                <PulsatingButton>Get a FREE Quote 🚀</PulsatingButton>
              </Link>
            </div>
          </div>
           <AnimatedContent direction="vertical" distance={100} reverse={false}>
          <div className="flex items-center justify-center  mx-auto gap-3 pt-3">
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
          </AnimatedContent>
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;
