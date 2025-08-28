"use client";
import { useState } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    service: "",
    message: "",
  });

  const [status, setStatus] = useState({
    loading: false,
    success: null,
    error: null,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ loading: true, success: null, error: null });

    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));

      // In real case, call your backend API:
      // await fetch("/api/contact", { method: "POST", body: JSON.stringify(formData) });

      setStatus({
        loading: false,
        success: "Your message has been sent successfully!",
        error: null,
      });
      setFormData({
        name: "",
        phone: "",
        email: "",
        service: "",
        message: "",
      });
    } catch (err) {
      setStatus({
        loading: false,
        success: null,
        error: "Something went wrong. Please try again.",
      });
    }
  };

  return (
    <section
      id="contact-form"
      className="py-24 bg-white text-black font-opensans"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-stretch">
       
          <div className="w-full shadow-lg rounded-xl overflow-hidden border border-gray-200">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3311.0132512999585!2d151.03100617644193!3d-33.91505852145752!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b12bc106e955555%3A0x427fbdeadc77de3e!2sLevel%204%2C%20Suite%204%2F402-410%20Chapel%20Rd%2C%20Bankstown%20NSW%202200%2C%20Australia!5e0!3m2!1sen!2sbd!4v1754239933956!5m2!1sen!2sbd"
              className="w-full h-full"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          <div>
            <h3 className="text-3xl md:text-4xl font-bold mb-6 font-anton uppercase">
              Contact <span className="text-[#233A98]">ABCON</span>
            </h3>
            <p className="text-gray-600 mb-8">
              Got a project in mind or need expert advice? Call us at{" "}
              <span className="font-semibold text-[#233A98]">
                (02) 9675 7731
              </span>
              or fill out the form below — we’ll respond promptly.
            </p>

            <form onSubmit={handleSubmit} className="space-y-6">
              {["name", "phone", "email"].map((field) => (
                <div key={field}>
                  <label
                    htmlFor={field}
                    className="block text-sm font-medium mb-1 capitalize"
                  >
                    {field}
                  </label>
                  <input
                    type={
                      field === "email"
                        ? "email"
                        : field === "phone"
                        ? "tel"
                        : "text"
                    }
                    name={field}
                    id={field}
                    value={formData[field]}
                    onChange={handleInputChange}
                    className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#233A98]"
                    required
                  />
                </div>
              ))}
              <div>
                <label
                  htmlFor="service"
                  className="block text-sm font-medium mb-1"
                >
                  Select Service
                </label>
                <select
                  name="service"
                  id="service"
                  value={formData.service}
                  onChange={handleInputChange}
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#233A98]"
                  required
                >
                  <option value="">Choose a service</option>
                  <option value="Building Design">Building Design</option>
                  <option value="Structural Engineering">
                    Structural Engineering
                  </option>
                  <option value="Civil Engineering">Civil Engineering</option>
                  <option value="Servey and Site Analysis">
                    Servey and Site Analysis
                  </option>
                  <option value="Certifications and Approvals">Certifications and Approvals</option>
                </select>
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium mb-1"
                >
                  Message
                </label>
                <textarea
                  name="message"
                  id="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={4}
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#233A98]"
                  required
                />
              </div>
              <button
                type="submit"
                disabled={status.loading}
                className="relative inline-block px-8 py-4 bg-[#233A98] text-white font-bold rounded-lg overflow-hidden transition-all duration-300 hover:bg-[#1d2f7a] disabled:opacity-60"
              >
                {status.loading ? "Sending..." : "Submit"}
              </button>
              {status.success && (
                <p className="text-green-600 text-sm">{status.success}</p>
              )}
              {status.error && (
                <p className="text-red-600 text-sm">{status.error}</p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
