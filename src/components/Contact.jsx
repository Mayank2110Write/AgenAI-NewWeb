import { useState } from "react";
import emailjs from "@emailjs/browser";
import { toast } from 'react-hot-toast';

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "", 
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const clearForm = () => {
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      message: ""
    });
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        process.env.VITE_SERVICE_ID,
        process.env.VITE_TEMPLATE_ID,
        {
          from_name: `${formData.firstName} ${formData.lastName}`,
          from_email: formData.email,
          phone: formData.phone,
          message: formData.message,
        },
        process.env.VITE_PUBLIC_KEY
      )
      .then(
        () => {
          toast.success('Message sent successfully!');
          clearForm();
        },
        (error) => {
          toast.error('Failed to send message. Please try again.');
          console.error('Error:', error);
        }
      );
  };

  return (
    <div className="bg-n-8 text-n-1 min-h-screen">
      <div className="container py-16 md:py-20 flex flex-col md:flex-row gap-12">
        <div className="md:w-1/2 flex flex-col justify-center">
          <h1 className="h2 mb-4">Get in touch with us</h1>
          <p className="body-2 text-n-4 mb-8">
            We're here to assist you. Our team will respond to your inquiry within one business day.
          </p>
        </div>

        <div className="md:w-1/2">
          <form onSubmit={handleSubmit} className="bg-n-7 p-6 sm:p-8 rounded-lg shadow-md">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
              <div>
                <label htmlFor="firstName" className="block text-sm font-semibold mb-1">First name *</label>
                <input
                  type="text"
                  name="firstName"
                  id="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 text-white bg-transparent rounded border border-n-4 focus:outline-none focus:border-color-1"
                  placeholder="First name"
                />
              </div>
              <div>
                <label htmlFor="lastName" className="block text-sm font-semibold mb-1">Last name *</label>
                <input
                  type="text"
                  name="lastName"
                  id="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 text-white bg-transparent rounded border border-n-4 focus:outline-none focus:border-color-1"
                  placeholder="Last name"
                />
              </div>
            </div>

            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-semibold mb-1">Business email *</label>
              <input
                type="email"
                name="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 text-white bg-transparent rounded border border-n-4 focus:outline-none focus:border-color-1"
                placeholder="Email"
              />
            </div>

            <div className="mb-4">
              <label htmlFor="phone" className="block text-sm font-semibold mb-1">Phone number</label>
              <div className="flex">
                <span className="inline-flex items-center px-3 rounded-l border border-r-0 border-n-4 bg-n-6 text-n-2 text-sm">+91</span>
                <input
                  type="tel"
                  name="phone"
                  id="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-3 py-2 text-white bg-transparent rounded-r border border-n-4 focus:outline-none focus:border-color-1"
                  placeholder="Phone number"
                />
              </div>
            </div>

            <div className="mb-4">
              <label htmlFor="message" className="block text-sm font-semibold mb-1">How can we help?</label>
              <textarea
                name="message"
                id="message"
                rows="4"
                value={formData.message}
                onChange={handleChange}
                className="w-full px-3 py-2 text-white bg-transparent rounded border border-n-4 focus:outline-none focus:border-color-1"
                placeholder=""
              />
            </div>

            <button
              type="submit"
              className="button relative inline-flex items-center justify-center h-11 px-7 text-n-1 bg-color-1 rounded font-semibold uppercase tracking-wider transition hover:bg-color-2"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;