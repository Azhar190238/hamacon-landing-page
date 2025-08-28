import CommonHeader from "@/components/CommonHeader";
import Image from "next/image";
const services = [
  {
    image: "/services/basements/1.jpg",
    title: "Shotcrete Walls",
    description:
      "Shotcrete walls offer durable, quick-application concrete solutions for structural support and slope stabilization.",
  },
  {
    image: "/services/basements/2.jpg",
    title: "Basement Footings",
    description:
      "Basement footings provide a strong foundation, supporting the structure and preventing settling or shifting.",
  },
  {
    image: "/services/basements/3.jpeg",
    title: "Concrete Reinforced Columns",
    description:
      "Concrete reinforced columns provide strong structural support, enhancing building stability, durability, and load-bearing capacity.",
  },
  {
    image: "/services/basements/4.jpg",
    title: "Basement Concrete Slab",
    description:
      "Basement concrete slab provides a strong, durable foundation for supporting structures and resisting ground moisture.",
  },
  {
    image: "/services/basements/5.jpg",
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
        <div className="grid grid-cols-1 sm:grid-cols-2 !mx-auto lg:grid-cols-3 gap-6 mb-12">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-4 border relative z-20 rounded-xl shadow-md overflow-hidden hover:shadow-xl transition"
            >
              {/* Image */}
              <Image
                src={service.image}
                alt={service.title}
                width={500}
                height={500}
                className="w-full h-48 object-cover rounded-[12px]"
              />
              {/* Content */}
              <div className="py-6">
                <h3 className="text-xl font-bold text-center text-[#000] mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-800 text-center">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
