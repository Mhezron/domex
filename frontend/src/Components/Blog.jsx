import React, { useState } from 'react';

// Static data for careers
const careerOptions = [
  "Accountant",
  "Financial Analyst",
  "Investment Banker",
  "Consultant",
  "Data Scientist",
  "Risk Manager",
];

// Reusable component for CareerCard
const CareerCard = ({ career }) => (
  <a
    className="block rounded-xl border border-gray-100 p-4 shadow-sm hover:border-gray-200 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring"
    href="/"
  >
    <span className="inline-block rounded-lg bg-gray-50 p-3">
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M12 14l9-5-9-5-9 5z"></path>
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
        ></path>
      </svg>
    </span>
    <h2 className="mt-2 font-bold text-gray-800">{career}</h2>
    <p className="hidden sm:block mt-1 text-sm text-gray-600">
      Explore a career as a {career.toLowerCase()} and understand the skillsets required.
    </p>
  </a>
);

// Modal component for Newsletter Signup
const NewsletterModal = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({ name: '', email: '' });
  const [error, setError] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email) {
      setError('Please fill in all fields.');
      return;
    }

    setError('');
    console.log('Form submitted:', formData);

    // Close the modal after submission
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-lg relative">
        <h2 className="text-2xl font-bold mb-4">Sign Up for Our Newsletter</h2>

        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2" htmlFor="name">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              className="w-full border px-3 py-2 rounded-md focus:outline-none focus:border-indigo-500"
              placeholder="Enter your name"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2" htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className="w-full border px-3 py-2 rounded-md focus:outline-none focus:border-indigo-500"
              placeholder="Enter your email"
            />
          </div>

          {error && <p className="text-red-500 text-sm">{error}</p>}

          <button
            type="submit"
            className="w-full bg-indigo-600 text-white py-2 rounded-md hover:bg-indigo-700 transition"
          >
            Subscribe
          </button>
        </form>

        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-400 hover:text-gray-600"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
    </div>
  );
};

// Main Blog component
const Blog = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="bg-gray-50 min-h-screen">
      <section className="pt-12 pb-4">
        <div className="max-w-screen-xl px-4 sm:px-6 lg:px-8 mx-auto">
          <div className="grid grid-cols-1 gap-y-8 lg:grid-cols-2 lg:items-center lg:gap-x-16">
            {/* Text Section */}
            <div className="text-center lg:text-left">
              <h2 className="text-3xl font-extrabold text-gray-900">Find Your Career Path</h2>
              <p className="mt-4 text-gray-600">
                Discover exciting career opportunities that match your interests and skills. Whether you're starting
                fresh or looking to switch paths, we've got the resources to guide you.
              </p>
              <button
                onClick={() => setIsModalOpen(true)}
                className="mt-8 inline-block rounded bg-blue-500 px-12 py-3 text-sm font-medium text-white transition hover:bg-blue-600 focus:outline-none focus:ring focus:ring-yellow-400"
              >
                Get Started Today
              </button>
            </div>

            {/* Grid of Career Options */}
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
              {careerOptions.map((career, index) => (
                <CareerCard key={index} career={career} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Modal Component */}
      <NewsletterModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
};

export default Blog;
