import CommonHeader from "@/components/CommonHeader";
import Image from "next/image";
const services = [
  {
    image: "/services/piling/1.jpeg",
    title: "Bored Piles",
    description:
      "Bored piles provide strong deep foundations, ideal for heavy structures and challenging soil conditions.",
  },
  {
    image: "/services/piling/2.jpg",
    title: "Capping Beams",
    description:
      "Capping beams provide structural support, distribute loads evenly, and connect adjacent piles for foundation stability.",
  },
];
export default function CivilEngineering() {
  return (
    <>
      <CommonHeader heading="Boparai Pilling" description="Boparai Pilling" />
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
    </>
  );
}
