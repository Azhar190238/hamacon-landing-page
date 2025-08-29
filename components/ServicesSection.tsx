"use client";

import Image from "next/image";
import { ShimmerButton } from "./magicui/shimmer-button";

const services = [
  {
    image: "/services/1.jpg",
    title: "Boparai Basements",
    description:
      "Boparai Basements specializes in expert basement finishing, waterproofing, and renovation solutions for lasting comfort.",
  },
  {
    image: "/services/2.jpeg",
    title: "Boparai Excavation",
    description:
      "Boparai Excavation delivers reliable, efficient, and professional excavation services for residential and commercial projects.",
  },
  {
    image: "/services/3.jpg",
    title: "Boparai Piling",
    description:
      "Boparai Piling delivers reliable, high-quality foundation solutions with advanced piling techniques and expert engineering services.",
  },
  {
    image: "/services/4.jpeg",
    title: "Demolition and Excavation",
    description:
      "Demolition and excavation ensure safe site preparation by clearing structures, debris, and land for new construction.",
  },
  {
    image: "/services/5.jpg",
    title: "Raft Slab Concreting",
    description:
      "Expert raft slab concreting for stable, strong foundations on weak or uneven soil, ensuring durability and support.",
  },
  {
    image: "/services/6.jpeg",
    title: "Waffle Slab Concreting",
    description:
      "Ensure your Waffle slab project stands the test of time with our high-quality slab concreting.",
  },
  {
    image: "/services/7.jpeg",
    title: "Suspended Slab Concreting",
    description:
      "Professional suspended slab concreting for strong, elevated structures, ensuring stability and long-lasting support.",
  },
  {
    image: "/services/8.jpeg",
    title: "Landscaping",
    description:
      "Landscaping transforming outdoor spaces beautifully. Creating stunning landscapes with design, planting, and maintenance.",
  },
  {
    image: "/services/9.jpeg",
    title: "Crossover Footpath",
    description:
      "Providing high-quality crossover footpaths for smooth, safe vehicle and pedestrian access to properties and roads.",
  },
  {
    image: "/services/10.jpg",
    title: "Retaining Walls",
    description:
      "Retaining walls provide structural support, prevent soil erosion, enhance landscaping, and add stability to outdoor spaces.",
  },
  {
    image: "/services/11.jpg",
    title: "Dincel Walls",
    description:
      "Dincel walls provide durable, waterproof, and fire-resistant structural solutions with fast installation and long-lasting performance.",
  },
  {
    image: "/services/12.jpg",
    title: "Termite Protection",
    description:
      "Termite protection prevents structural damage by creating barriers, using treatments, and ensuring regular inspections for safety.",
  },
];

const ServicesSection = () => {
  return (
    <section className="pb-16 bg-gray-50 -mt-14">
      <div className="max-w-7xl mx-auto px-6">
        {/* Service Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white relative p-4 z-20 border rounded-xl shadow-md overflow-hidden hover:shadow-xl transition"
            >
              {/* Image */}
              <Image
                src={service.image}
                alt={service.title}
                height={500}
                width={500}
                className="w-full h-48 object-cover rounded-[10px]"
              />
              {/* Content */}
              <div className="py-6">
                <h3 className="text-xl text-center font-bold text-[#000] mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-800 text-center">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="flex flex-col md:flex-row justify-center items-center gap-4 mb-4">
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
            <a
              href="#quote"
              className="bg-black text-white px-6 py-3 rounded-md shadow-md font-semibold flex items-center gap-2 hover:bg-gray-800 border-2 border-yellow-500"
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

export default ServicesSection;
