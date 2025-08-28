import CommonHeader from "@/components/CommonHeader";
const services = [
  {
    image: "/service1.jpg",
    title: "Bored Piles",
    description:
      "Bored piles provide strong deep foundations, ideal for heavy structures and challenging soil conditions.",
  },
  {
    image: "/service2.jpg",
    title: "Capping Beams",
    description:
      "Capping beams provide structural support, distribute loads evenly, and connect adjacent piles for foundation stability.",
  },
];
export default function CivilEngineering() {
  return (
    <>
      <CommonHeader heading="Boparai Pilling" description="Boparai Pilling" />
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
                <p className="text-gray-600 text-sm text-center">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
