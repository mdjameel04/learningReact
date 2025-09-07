import React, { useState } from "react";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", form);
    alert("Thank you for contacting us! We will get back to you soon.");
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <div className="p-10 max-w-5xl mx-auto">
      {/* Heading */}
      <h1 className="text-3xl font-bold text-blue-600 text-center">Contact Us</h1>
      <p className="text-center mt-3 text-gray-600">
        Have questions or need assistance? Feel free to reach out!
      </p>

      {/* Contact Section */}
      <div className="grid md:grid-cols-2 gap-8 mt-10">
        {/* Form */}
        <form onSubmit={handleSubmit} className="bg-white p-6 rounded-xl shadow-lg">
          <div className="mb-4">
            <label className="block text-gray-600 font-medium">Name</label>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-600 font-medium">Email</label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-600 font-medium">Message</label>
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              rows="4"
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full py-3 bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-indigo-700 transition"
          >
            Send Message
          </button>
        </form>

        {/* Info Section */}
        <div className="bg-white p-6 rounded-xl shadow-lg">
          <h2 className="text-xl font-semibold text-blue-600">Hotel Info</h2>
          <p className="mt-2 text-gray-600">
            📍 Address: Banjara Hills, Hyderabad, Telangana  
          </p>
          <p className="mt-2 text-gray-600">📞 Phone: +91 98765 43210</p>
          <p className="mt-2 text-gray-600">✉️ Email: contact@myhotel.com</p>

          {/* Map */}
          <div className="mt-6 rounded-lg overflow-hidden shadow-md">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.2299986666843!2d78.48667181538212!3d17.385044888075665!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb97542f7d8e6d%3A0x4d78e0d9373e3f97!2sHyderabad%2C%20Telangana!5e0!3m2!1sen!2sin!4v1704711111111!5m2!1sen!2sin"
              width="100%"
              height="250"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;


