"use client";

const services = [
  {
    image: "/service1.jpg",
    title: "Boparai Basements",
    description:
      "Boparai Basements specializes in expert basement finishing, waterproofing, and renovation solutions for lasting comfort.",
  },
  {
    image: "/service2.jpg",
    title: "Boparai Excavation",
    description:
      "Boparai Excavation delivers reliable, efficient, and professional excavation services for residential and commercial projects.",
  },
  {
    image: "/service3.jpg",
    title: "Boparai Piling",
    description:
      "Boparai Piling delivers reliable, high-quality foundation solutions with advanced piling techniques and expert engineering services.",
  },
  {
    image: "/service4.jpg",
    title: "Demolition and Excavation",
    description:
      "Demolition and excavation ensure safe site preparation by clearing structures, debris, and land for new construction.",
  },
  {
    image: "/service5.jpg",
    title: "Raft Slab Concreting",
    description:
      "Expert raft slab concreting for stable, strong foundations on weak or uneven soil, ensuring durability and support.",
  },
  {
    image: "/service6.jpg",
    title: "Waffle Slab Concreting",
    description:
      "Ensure your Waffle slab project stands the test of time with our high-quality slab concreting.",
  },
  {
    image: "/service7.jpg",
    title: "Suspended Slab Concreting",
    description:
      "Professional suspended slab concreting for strong, elevated structures, ensuring stability and long-lasting support.",
  },
  {
    image: "/service8.jpg",
    title: "Landscaping",
    description:
      "Landscaping transforming outdoor spaces beautifully. Creating stunning landscapes with design, planting, and maintenance.",
  },
  {
    image: "/service9.jpg",
    title: "Crossover Footpath",
    description:
      "Providing high-quality crossover footpaths for smooth, safe vehicle and pedestrian access to properties and roads.",
  },
  {
    image: "/service10.jpg",
    title: "Retaining Walls",
    description:
      "Retaining walls provide structural support, prevent soil erosion, enhance landscaping, and add stability to outdoor spaces.",
  },
  {
    image: "/service11.jpg",
    title: "Dincel Walls",
    description:
      "Dincel walls provide durable, waterproof, and fire-resistant structural solutions with fast installation and long-lasting performance.",
  },
  {
    image: "/service12.jpg",
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
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white relative z-20 rounded-xl shadow-md overflow-hidden hover:shadow-xl transition"
            >
              {/* Image */}
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-48 object-cover"
              />
              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-sm">{service.description}</p>
              </div>
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

export default ServicesSection;
