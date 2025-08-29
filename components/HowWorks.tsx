"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import Image from "next/image";

const steps = [
  {
    number: "01.",
    title: "Consult",
    description:
      "Give us a ring and have a chat with AMAR about your concreting project. We'll pop over to your place, check out what's needed and work together on ideas to give your space a concrete makeover.",
  },
  {
    number: "02.",
    title: "Quotation",
    description:
      "Following the consultation, we will provide you with a free detailed quote that breaks down all aspects of your concreting project. From materials to labor, every detail will be transparently outlined.",
  },
  {
    number: "03.",
    title: "Budget & Schedule",
    description:
      "Together, we'll work on a plan that not only meets your financial constraints but also adheres to a timeline that suits your convenience.",
  },
  {
    number: "04.",
    title: "Enjoy Your Concrete Transformation",
    description:
      "Once the details are in place and the plan is approved, our skilled crew gets to work. We will ensure a swift turnaround so you can begin enjoying your upgraded space sooner than you think.",
  },
];

const sliderImages = [
  "/others/1.jpeg",
  "/others/2.jpeg",
  "/others/3.jpeg",
  "/others/4.jpg",

];

const HowItWorks = () => {
  return (
    <section className="w-full py-16 bg-white font-sans">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Heading */}
        <div className="mb-10">
          <span className="bg-black text-white text-xs font-bold px-3 py-1 rounded">
            OUR PROCESS EXPLAINED
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mt-4">
            HOW IT WORKS
          </h2>
        </div>

        {/* Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          {/* Left Side Steps */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {steps.map((step, index) => (
              <div
                key={index}
                className="border border-gray-200 rounded-lg shadow-sm p-6 bg-white hover:shadow-lg transition"
              >
                <h3 className="text-2xl lg:text-4xl font-extrabold text-[#FFA100] mb-2">
                  {step.number}
                </h3>
                <h4 className="font-bold text-lg md:text-xl mb-2">{step.title}</h4>
                <p className="text-gray-600 leading-relaxed text-sm">
                  {step.description}
                </p>
              </div>
            ))}
          </div>

          {/* Right Side Swiper */}
          <div className="w-full">
            <Swiper
              modules={[Autoplay]}
              autoplay={{ delay: 2000, disableOnInteraction: false }}
             
              loop={true}
              className="rounded-lg shadow-md"
            >
              {sliderImages.map((img, index) => (
                <SwiperSlide key={index}>
                  <Image
                    src={img}
                    alt={`Slide ${index + 1}`}
                    width={1000}
                    height={1000}
                    className="w-full h-[400px] md:h-[500px] lg:h-[600px] object-cover rounded-lg"
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
