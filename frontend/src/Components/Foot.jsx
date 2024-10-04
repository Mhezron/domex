import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4">About Domex</h3>
            <p className="text-gray-400">
              Domex is your trusted source for the latest financial news,
              market insights, and educational content on Forex trading. Stay
              updated with accurate information and expert analysis.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="/news" className="hover:text-blue-500">
                  Latest News
                </a>
              </li>
              <li>
                <a href="/about" className="hover:text-blue-500">
                  About Us
                </a>
              </li>
              <li>
                <a href="/services" className="hover:text-blue-500">
                  Services
                </a>
              </li>
              <li>
                <a href="/pricing" className="hover:text-blue-500">
                  Pricing
                </a>
              </li>
              <li>
                <a href="/forex" className="hover:text-blue-500">
                  Learn Forex
                </a>
              </li>
              <li>
                <a href="/tools" className="hover:text-blue-500">
                  Tools & Calculators
                </a>
              </li>
            </ul>
          </div>

          {/* Contact and Social Media */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact & Follow</h3>
            <p className="text-gray-400 mb-4">
              Reach out to us or follow us on social media for real-time
              updates.
            </p>
            <div className="flex space-x-4">
              {/* Social media icons */}
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-500">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M22.675 0h-21.35C.595 0 0 .595 0 1.325v21.351C0 23.404.595 24 1.325 24H12.82v-9.294H9.692v-3.62h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.465.099 2.797.143v3.24l-1.92.001c-1.506 0-1.798.716-1.798 1.765v2.31h3.595l-.468 3.621h-3.127V24h6.127c.73 0 1.324-.596 1.324-1.324V1.325C24 .595 23.405 0 22.675 0z"
                  />
                </svg>
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-500">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M23.643 4.937c-.835.371-1.732.623-2.675.734.963-.576 1.7-1.488 2.048-2.576-.902.534-1.897.922-2.958 1.131-.851-.907-2.066-1.476-3.408-1.476-2.626 0-4.751 2.126-4.751 4.751 0 .373.042.736.122 1.086-3.952-.198-7.457-2.09-9.804-4.968-.41.705-.646 1.528-.646 2.404 0 1.659.844 3.122 2.126 3.978-.785-.026-1.523-.24-2.167-.6v.061c0 2.317 1.65 4.251 3.837 4.692-.402.11-.826.17-1.263.17-.31 0-.611-.03-.906-.085.611 1.907 2.381 3.293 4.48 3.33-1.64 1.285-3.703 2.05-5.95 2.05-.387 0-.769-.023-1.146-.067 2.123 1.364 4.652 2.162 7.37 2.162 8.841 0 13.675-7.327 13.675-13.675l-.016-.623c.94-.68 1.758-1.53 2.4-2.498z"
                  />
                </svg>
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-500">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M22.23 0H1.77C.792 0 0 .774 0 1.728v20.543C0 23.226.792 24 1.77 24h20.46c.978 0 1.77-.774 1.77-1.728V1.728C24 .774 23.208 0 22.23 0zM7.12 20.452H3.547V9.07H7.12v11.382zm-1.787-13c-1.144 0-2.071-.936-2.071-2.073 0-1.136.927-2.071 2.071-2.071 1.137 0 2.071.935 2.071 2.071-.002 1.137-.934 2.073-2.071 2.073zm14.653 13H16.9v-5.764c0-1.373-.027-3.139-1.912-3.139-1.913 0-2.205 1.494-2.205 3.038v5.865H9.218V9.07h3.527v1.553h.05c.491-.928 1.693-1.905 3.484-1.905 3.725 0 4.41 2.451 4.41 5.638v6.095h-.002z"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 mt-8 pt-6 text-center">
          <p className="text-gray-400">
            &copy; {new Date().getFullYear()} Domex. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
