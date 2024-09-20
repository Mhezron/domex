import React from "react";

const blogPosts = [
  {
    title: "Stock Market Trends in 2024",
    description:
      "An analysis of the key trends shaping the stock market in 2024, including sectors to watch and economic indicators.",
    imageUrl: "https://via.placeholder.com/400x250",
    link: "/post/stock-market-trends-2024",
  },
  {
    title: "Cryptocurrency Regulation and Its Impact",
    description:
      "A look at how new regulations are affecting the cryptocurrency markets, with insights from industry experts.",
    imageUrl: "https://via.placeholder.com/400x250",
    link: "/post/cryptocurrency-regulation-impact",
  },
  {
    title: "Forex Trading Strategies for Beginners",
    description:
      "Discover the top forex trading strategies for beginners to help navigate the complex foreign exchange market.",
    imageUrl: "https://via.placeholder.com/400x250",
    link: "/post/forex-trading-strategies",
  },
  {
    title: "Understanding Bond Market Fluctuations",
    description:
      "This post breaks down bond market fluctuations and their impact on long-term investments and interest rates.",
    imageUrl: "https://via.placeholder.com/400x250",
    link: "/post/bond-market-fluctuations",
  },
];

const BlogGrid = () => {
  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-gray-900">
            Latest in Financial Markets
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Stay up to date with the latest trends, analysis, and strategies
            from experts in the financial world.
          </p>
        </div>

        {/* Blog Post Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {blogPosts.map((post, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-lg overflow-hidden"
            >
              <img
                src={post.imageUrl}
                alt={post.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-800">
                  {post.title}
                </h3>
                <p className="mt-4 text-gray-600">{post.description}</p>
                <a
                  href={post.link}
                  className="mt-6 inline-block text-blue-500 hover:text-blue-600 font-semibold"
                >
                  Read More
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogGrid;
