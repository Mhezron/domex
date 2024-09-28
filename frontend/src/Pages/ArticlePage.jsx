import React, { useEffect } from 'react';

const ArticlePage = () => {

  // Scroll to the top when the component is mounted
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-gray-50">
      {/* Article Container */}
      <div className="max-w-screen-lg mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Article Header */}
        <header className="mb-8">
          <h1 className="text-5xl font-extrabold leading-tight text-gray-900">
            The Impact of Financial Markets on Global Economy
          </h1>
          <div className="mt-4 text-gray-600">
            <p>
              By <span className="font-semibold text-gray-800">John Doe</span> &bull; Updated Sep 20, 2024
            </p>
          </div>
        </header>

        {/* Main Content Section */}
        <div className="grid grid-cols-1 lg:grid-cols-4 lg:gap-12">
          {/* Main Article */}
          <article className="lg:col-span-3">
            {/* Hero Image */}
            <img
              src="https://via.placeholder.com/800x400"
              alt="Financial markets"
              className="w-full h-auto rounded-lg mb-6 shadow-lg"
            />

            {/* Article Text */}
            <div className="prose prose-lg prose-gray max-w-none">
              <p>
                Financial markets have a profound impact on the global economy. The flow of money between countries, the rise and fall of stock prices, and interest rates can all affect a country's economic growth and stability. Understanding how these markets work is key to navigating the global financial landscape.
              </p>

              <h2 className="text-3xl font-bold mt-8 mb-4">The Role of Stock Markets</h2>
              <p>
                Stock markets are where companies go to raise capital by selling shares of their company to the public. These markets allow businesses to grow and expand while giving investors a chance to participate in their success. Stock prices are influenced by a range of factors, from company earnings to geopolitical events.
              </p>

              <blockquote className="border-l-4 border-indigo-600 pl-4 italic text-gray-600 my-8">
                "A well-functioning stock market is essential for economic growth and capital formation. It provides businesses with the capital they need to innovate and expand."
              </blockquote>

              <h3 className="text-2xl font-semibold mt-6">Interest Rates and Bonds</h3>
              <p>
                Interest rates and bonds play a crucial role in financial markets. Central banks adjust interest rates to control inflation, and bond markets react to these adjustments. When interest rates rise, bond prices typically fall, affecting the yields that investors can earn.
              </p>

              <figure className="my-6">
                <img
                  src="https://via.placeholder.com/600x400"
                  alt="Interest rates and bond yields"
                  className="w-full h-auto rounded-lg shadow-lg"
                />
                <figcaption className="text-sm text-gray-500 text-center mt-2">
                  The relationship between interest rates and bond yields.
                </figcaption>
              </figure>

              <p>
                Understanding these mechanisms is crucial for investors looking to manage risk and return in their portfolios. With the right knowledge, one can use financial markets to build wealth and achieve financial goals.
              </p>

              <h3 className="text-2xl font-semibold mt-6">The Global Economic Impact</h3>
              <p>
                The interconnected nature of financial markets means that an event in one part of the world can have ripple effects globally. For instance, a financial crisis in one country can lead to lower demand for imports, affecting the economies of exporting nations. This is why understanding financial markets is important for policymakers, businesses, and investors alike.
              </p>

              <p>
                Ultimately, the global financial system is vast and complex, but its impact on the everyday lives of people cannot be overstated.
              </p>
            </div>

            {/* Author Section */}
            <div className="mt-12 border-t pt-8">
              <p className="text-sm text-gray-600">
                Written by <span className="font-semibold text-gray-800">John Doe</span>. John is a financial analyst with over 15 years of experience in global markets. His work has been featured in numerous financial publications.
              </p>
            </div>
          </article>

          {/* Sidebar */}
          <aside className="hidden lg:block lg:col-span-1">
            <div className="sticky top-24 space-y-6">
              {/* Featured Articles */}
              <section>
                <h4 className="text-lg font-semibold mb-4 text-gray-800">Featured Articles</h4>
                <ul className="space-y-4">
                  {['Understanding Bonds', 'Stock Market Tips', 'How Interest Rates Affect You'].map((article, index) => (
                    <li key={index} className="text-indigo-600 hover:underline">
                      <a href="/">{article}</a>
                    </li>
                  ))}
                </ul>
              </section>

              {/* Ad Section */}
              <div className="p-4 bg-gray-100 rounded-lg shadow-md">
                <h5 className="text-gray-800 font-semibold mb-2">Advertisement</h5>
                <div className="h-32 w-full bg-gray-300 rounded-lg flex items-center justify-center">
                  <span className="text-gray-600">Ad Space</span>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </div>

      {/* Footer Section */}
      <footer className="bg-gray-900 py-8">
        <div className="max-w-screen-lg mx-auto text-center text-gray-500">
          <p>&copy; 2024 Your Blog. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default ArticlePage;
