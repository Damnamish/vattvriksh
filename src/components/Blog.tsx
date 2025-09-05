import React from 'react';
import { Calendar, User, ArrowRight } from 'lucide-react';

const Blog = () => {
  const blogPosts = [
    {
      title: "Leveraging FOMO for Continuous Learning in Organizations",
      preview: "How Learning & Development leaders can harness the Fear of Missing Out to create a culture of lifelong learning and professional growth.",
      author: "Mridula Sankhyayan",
      date: "March 20, 2024",
      category: "Learning & Development",
      readTime: "5 min read"
    },
    {
      title: "Creating Psychologically Safe Workplaces Through Relationships",
      preview: "Essential strategies for building trust and psychological safety in teams through nurturing meaningful workplace relationships.",
      author: "Mridula Sankhyayan",
      date: "March 15, 2024",
      category: "Workplace Culture",
      readTime: "7 min read"
    },
    {
      title: "Holistic Leadership Development: Beyond Traditional Approaches",
      preview: "Exploring heart-centric and engaging learning experiences that transform individuals and teams for sustainable organizational impact.",
      author: "Mridula Sankhyayan",
      date: "March 8, 2024",
      category: "Leadership Development",
      readTime: "6 min read"
    }
  ];

  return (
    <section id="blog" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Latest Insights</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Stay updated with the latest thoughts on leadership development, talent management, 
            and organizational transformation.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <article key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow group">
              <div className="h-48 bg-gradient-to-br from-blue-500 to-indigo-600"></div>
              <div className="p-6">
                <div className="flex items-center space-x-4 text-sm text-gray-500 mb-3">
                  <div className="flex items-center space-x-1">
                    <Calendar size={16} />
                    <span>{post.date}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <User size={16} />
                    <span>{post.author}</span>
                  </div>
                </div>
                <span className="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full mb-3">
                  {post.category}
                </span>
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                  {post.title}
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {post.preview}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">{post.readTime}</span>
                  <button className="flex items-center text-blue-600 font-semibold hover:text-blue-700 transition-colors group">
                    Read More
                    <ArrowRight size={16} className="ml-1 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
            View All Posts
          </button>
        </div>
      </div>
    </section>
  );
};

export default Blog;