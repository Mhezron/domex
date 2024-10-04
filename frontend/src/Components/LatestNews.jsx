// src/components/LatestNews.js
import React from 'react';

const newsArticles = [
  {
    title: "News Article 1",
    summary: "This is a brief summary of the news article.",
    image: "https://via.placeholder.com/400x300",
  },
  {
    title: "News Article 2",
    summary: "This is a brief summary of the news article.",
    image: "https://via.placeholder.com/400x300",
  },
  {
    title: "News Article 3",
    summary: "This is a brief summary of the news article.",
    image: "https://via.placeholder.com/400x300",
  },
  {
    title: "News Article 4",
    summary: "This is a brief summary of the news article.",
    image: "https://via.placeholder.com/400x300",
  },
];

const LatestNews = () => {
  return (
    <section className="mb-12">
      <h2 className="text-3xl font-bold text-gray-800 mb-6">Latest News</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {newsArticles.map((article, index) => (
          <div key={index} className="bg-white  overflow-hidden border border-gray-300">
            <img src={article.image} alt={article.title} className="w-full h-48 object-cover" />
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">{article.title}</h3>
              <p className="text-gray-600">{article.summary}</p>
              <a href="/" className="text-blue-600 hover:underline block mt-4">Read more →</a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default LatestNews;
