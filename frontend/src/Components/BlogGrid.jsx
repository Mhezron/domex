import React from "react";

const blogPosts = [
  {
    title: "Stock Market Trends in 2024",
    description:
      "An analysis of the key trends shaping the stock market in 2024, including sectors to watch and economic indicators.",
    imageUrl: "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&q=80&w=400", // Actual image
    link: "/post/stock-market-trends-2024",
  },
  {
    title: "Cryptocurrency Regulation and Its Impact",
    description:
      "A look at how new regulations are affecting the cryptocurrency markets, with insights from industry experts.",
    imageUrl: "https://images.unsplash.com/photo-15https://e9df14d4d9d0.com/photos/a-person-holding-a-phone-mswEr8ji6BQ17632022625-96e3f1f41e95?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&q=80&w=400", // Actual image
    link: "/post/cryptocurrency-regulation-impact",
  },
  {
    title: "Forex Trading Strategies for Beginners",
    description:
      "Discover the top forex trading strategies for beginners to help navigate the complex foreign exchange market.",
    imageUrl: "https://images.unsplash.com/photo-1544148922-709ad0cb67ab?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&q=80&w=400", // Actual image
    link: "/post/forex-trading-strategies",
  },
  {
    title: "Understanding Bond Market Fluctuations",
    description:
      "This post breaks down bond market fluctuations and their impact on long-term investments and interest rates.",
    imageUrl: "https://images.unsplash.com/photo-1516498771281-6c33b6898e68?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&q=80&w=400", // Actual image
    link: "/post/bond-market-fluctuations",
  },
];

const BlogGrid = () => {
  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-left mb-12">
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
              className="bg-white border border-gray-200 rounded-md overflow-hidden hover:shadow-lg transition duration-300 ease-in-out cursor-pointer flex flex-col" // Use flex-col for vertical alignment
            >
              <img
                src={post.imageUrl}
                alt={post.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4 flex flex-col flex-grow"> {/* Added flex-grow to allow the content to fill the card */}
                <h3 className="text-lg font-bold text-gray-800 text-left flex-grow">
                  {post.title}
                </h3>
                <p className="mt-2 text-gray-600 text-left flex-grow">
                  {post.description}
                </p>
                <a
                  href={post.link}
                  className="mt-4 inline-block text-blue-600 hover:underline text-left"
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
