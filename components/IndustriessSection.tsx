import Image from "next/image";
import Link from "next/link";
import {
  FaBuilding,
  FaHardHat,
  FaDraftingCompass,
  FaLandmark,
  FaTools,
  FaProjectDiagram,
} from "react-icons/fa";

const IndustriesSection = () => {
  const industries = [
    {
      name: "Building Design & Architecture",
      icon: <FaDraftingCompass className="text-3xl" />,
    },
    {
      name: "Civil Engineering",
      icon: <FaHardHat className="text-3xl" />,
    },
    {
      name: "Structural Engineering",
      icon: <FaBuilding className="text-3xl" />,
    },
    {
      name: "Government & Regulatory Approvals",
      icon: <FaLandmark className="text-3xl" />,
    },
    {
      name: "Site Survey & Analysis",
      icon: <FaTools className="text-3xl" />,
    },
    {
      name: "Project Planning & Management",
      icon: <FaProjectDiagram className="text-3xl" />,
    },
  ];

  return (
    <section className="py-24 bg-black text-white font-opensans">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Industries Header */}
        <div className="text-center mb-20">
          <span className="text-white font-bold tracking-widest uppercase text-sm mb-4 block">
            Our Expertise
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight font-anton uppercase">
            Industries We Serve
          </h2>
          <p className="text-lg text-gray-300 mb-8">
            Delivering innovative building design, civil and structural engineering solutions across residential, commercial, and industrial sectors in Sydney and NSW.
          </p>
          <div className="w-24 h-1 bg-[#13008e] mx-auto"></div>
        </div>

        {/* Industries Cards */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mb-24">
          {industries.map((industry, index) => (
            <div
              key={index}
              className="bg-black p-2 sm:p-8 text-center border border-gray-800 hover:border-[#13008e] transition-all duration-500 hover:shadow-lg hover:shadow-[#13008e]/20"
            >
              <div className="flex justify-center mb-6">
                <div className="p-5 bg-[#13008e] rounded-full">
                  {industry.icon}
                </div>
              </div>
              <h3 className="text-base sm:text-xl text-center font-semibold group-hover:text-[#13008e] transition-colors duration-300">
                {industry.name}
              </h3>
            </div>
          ))}
        </div>

        {/* Mission Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Side - Text Content */}
          <div className="relative">
            <div className="absolute -left-8 top-0 h-full w-1 bg-[#13008e]"></div>
            <h3 className="text-3xl md:text-4xl font-bold mb-8 font-anton uppercase">
              <span className="text-[#13008e]">Our Mission</span>: Excellence in Building Design and Engineering
            </h3>
            <h4 className="text-2xl font-semibold text-gray-300 mb-6">
              We deliver creative, compliant, and cost-effective solutions tailored to each client's unique vision and project requirements.
            </h4>
            <div className="space-y-5 text-gray-300 mb-10">
              <p className="leading-relaxed">
                At ABCON, our team of experienced engineers and designers collaborates closely with clients to overcome structural challenges and streamline approvals, ensuring your project progresses smoothly from concept to completion.
              </p>
              <p className="leading-relaxed">
                Utilizing the latest technologies and best practices, we ensure all designs are optimized for safety, functionality, and aesthetic appeal, backed by comprehensive site analysis and engineering expertise.
              </p>
            </div>
            <p className="text-gray-300 mb-8 text-lg">
              Discover how ABCON can bring your architectural and engineering project to life with precision and confidence.
            </p>
            <Link
              href="/about"
              className="inline-block px-10 py-4 bg-[#13008e] text-white font-bold hover:bg-white hover:text-[#13008e] transition-all duration-300 border border-[#13008e] group relative overflow-hidden"
            >
              <span className="relative z-10">Learn More About Us</span>
              <span className="absolute inset-0 bg-white scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500 z-0"></span>
            </Link>
          </div>

          {/* Right Side - Image */}
          <div className="relative h-[500px] border-4 border-[#13008e] shadow-xl lg:block hidden rounded-md overflow-hidden">
            <Image
              src="/hero/building.jpg" // Replace with relevant ABCON image if needed
              alt="ABCON Building Design Team"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-[#13008e]/20 mix-blend-multiply"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IndustriesSection;
