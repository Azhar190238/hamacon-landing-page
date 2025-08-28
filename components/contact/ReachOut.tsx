import Link from "next/link";
import { FaHardHat, FaPhoneAlt, FaRoad } from "react-icons/fa";

const ReachOut = () => {
  return (
    <section
      id="contact-info"
      className="py-24 bg-black text-white bg-cover bg-center bg-no-repeat relative"
      style={{
        backgroundImage: "url('/contact/contactbg.avif')",
      }}
    >
      <div className="absolute inset-0 bg-black/70"></div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-20">
          <span className="text-white font-bold tracking-widest uppercase text-sm mb-4 block font-opensans">
            Reach Out
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight font-anton uppercase">
            OUR CONTACT DETAILS
          </h2>
          <div className="w-24 h-1 bg-[#13008e] mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="space-y-4">
            <div className="flex justify-center">
              <div className="p-5 bg-[#13008e] rounded-full">
                <FaPhoneAlt className="text-3xl" />
              </div>
            </div>
            <h3 className="text-xl font-semibold font-opensans">Call Us</h3>
            <p className="text-gray-300 font-opensans">
              <Link
                href="tel:(02)87680561"
                className="hover:text-blue-400 transition-colors"
              >
                (02) 8768 0561
              </Link>
            </p>
          </div>
          <div className="space-y-4">
            <div className="flex justify-center">
              <div className="p-5 bg-[#13008e] rounded-full">
                <FaRoad className="text-3xl" />
              </div>
            </div>
            <h3 className="text-xl font-semibold font-opensans">Email Us</h3>
            <p className="text-gray-300 font-opensans">
              <Link
                href="mailto:info@abcon.com.au"
                className="hover:text-blue-400 transition-colors"
              >
                info@abcon.com.au
              </Link>
            </p>
          </div>
          <div className="space-y-4">
            <div className="flex justify-center">
              <div className="p-5 bg-[#13008e] rounded-full">
                <FaHardHat className="text-3xl" />
              </div>
            </div>
            <h3 className="text-xl font-semibold font-opensans">
              Office Location
            </h3>
            <p className="text-gray-300 font-opensans">
              Suite 4, Level 4 <br />
              402-410 Chapel Road <br />
              Bankstown, NSW 2200
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReachOut;
