import CommonHeader from "@/components/CommonHeader";
const services = [
  {
    image: "/service1.jpg",
    title: "Shotcrete Walls",
    description:
      "Shotcrete walls offer durable, quick-application concrete solutions for structural support and slope stabilization.",
  },
  {
    image: "/service2.jpg",
    title: "Basement Footings",
    description:
      "Basement footings provide a strong foundation, supporting the structure and preventing settling or shifting.",
  },
  {
    image: "/service3.jpg",
    title: "Concrete Reinforced Columns",
    description:
      "Concrete reinforced columns provide strong structural support, enhancing building stability, durability, and load-bearing capacity.",
  },
  {
    image: "/service4.jpg",
    title: "Basement Concrete Slab",
    description:
      "Basement concrete slab provides a strong, durable foundation for supporting structures and resisting ground moisture.",
  },
  {
    image: "/service5.jpg",
    title: "Suspended Slab",
    description:
      "A suspended slab is a reinforced concrete floor supported by beams, not resting on the ground.",
  },
];

export default function Services() {
  return (
    <main className=" font-sans">
      <CommonHeader
        heading="Boparai Basements"
        description="Boparai Basements"
      />
      <div className="max-w-7xl mx-auto px-6 lg:px-0 my-20">
        {/* Service Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 !mx-auto   lg:grid-cols-3 gap-8 mb-12">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white   relative z-20 rounded-xl shadow-md overflow-hidden hover:shadow-xl transition"
            >
              {/* Image */}
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-48 object-cover"
              />
              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-center text-gray-800 mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-sm text-center">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
