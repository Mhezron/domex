import React from "react";

const Blog = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      <section className="py-12">
        <div className="max-w-screen-xl px-4 sm:px-6 lg:px-8 mx-auto">
          <div className="grid grid-cols-1 gap-y-8 lg:grid-cols-2 lg:items-center lg:gap-x-16">
            {/* Text Section */}
            <div className="text-center lg:text-left">
              <h2 className="text-3xl font-bold sm:text-4xl">Find Your Career Path</h2>
              <p className="mt-4 text-gray-600">
                Discover exciting career opportunities that match your interests and skills.
                Whether you're starting fresh or looking to switch paths, we've got the resources to guide you.
              </p>
              <a
                href="/"
                className="mt-8 inline-block rounded bg-indigo-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-indigo-700 focus:outline-none focus:ring focus:ring-yellow-400"
              >
                Get Started Today
              </a>
            </div>

            {/* Grid of Career Options */}
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
              {[
                "Accountant",
                "Financial Analyst",
                "Investment Banker",
                "Consultant",
                "Data Scientist",
                "Risk Manager",
              ].map((career, index) => (
                <a
                  key={index}
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
                      <path d="M12 14l9-5-9-5-9 5 9 5z"></path>
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
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
