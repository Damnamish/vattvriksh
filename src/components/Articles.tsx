import React from 'react';
import { ExternalLink, Calendar, User, Tag } from 'lucide-react';

const Articles = () => {
  const articles = [
    {
      title: "Transforming Individuals and Teams Through Holistic, Heart-Centric Learning",
      summary: "Featured article on CEO Insights India discussing innovative approaches to leadership development and organizational transformation through engaging learning experiences.",
      author: "Mridula Sankhyayan",
      category: "Leadership Development",
      publication: "CEO Insights India",
      date: "2024",
      link: "https://www.ceoinsightsindia.com/leader/mridula-sankhyayan-transforming-individuals-and-teams-through-holistic-heartcentric-and-engaging-learning-experiences-cid-2267.html"
    },
    {
      title: "LD Leaders Need to Leverage FOMO to Encourage Life-Long Learning",
      summary: "Insights on how Learning & Development leaders can harness the Fear of Missing Out (FOMO) to create a culture of continuous learning and development in organizations.",
      author: "Mridula Sankhyayan",
      category: "Learning & Development",
      publication: "People Matters",
      date: "2023",
      link: "https://www.peoplematters.in/article/employee-skilling/ld-leaders-need-to-leverage-fomo-to-encourage-life-long-learning-mridula-sankhyayan-flipkart-19283"
    },
    {
      title: "Nurture Relationship to Build a Psychologically Safe Workplace",
      summary: "A comprehensive guide on creating psychologically safe work environments through relationship building, trust, and effective leadership practices.",
      author: "Mridula Sankhyayan",
      category: "Workplace Culture",
      publication: "Business Manager",
      date: "2023",
      link: "https://www.businessmanager.in/nurture-relationship-to-build-a-psychologically-safe-workplace/"
    },
    {
      title: "LinkedIn Professional Recommendations",
      summary: "View comprehensive professional recommendations and endorsements from colleagues, clients, and industry leaders highlighting Mridula's expertise in talent development.",
      author: "Various Industry Leaders",
      category: "Professional Network",
      publication: "LinkedIn",
      date: "Ongoing",
      link: "https://www.linkedin.com/in/mridulasankhyayan/details/recommendations/?detailScreenTabIndex=0"
    },
    {
      title: "Author Profile - Business Manager",
      summary: "Explore Mridula's complete collection of published articles and thought leadership pieces on Business Manager, covering various aspects of leadership and organizational development.",
      author: "Mridula Sankhyayan",
      category: "Author Profile",
      publication: "Business Manager",
      date: "Multiple Publications",
      link: "https://www.businessmanager.in/author/mridulasankhyayangmail-com/"
    }
  ];

  return (
    <section id="articles" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Published Articles</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Thought leadership articles and publications by Mridula Sankhyayan on leadership, 
            talent development, and organizational excellence.
          </p>
        </div>

        <div className="space-y-8">
          {articles.map((article, index) => (
            <article key={index} className="bg-gradient-to-r from-gray-50 to-blue-50 border border-gray-200 rounded-xl p-8 hover:shadow-lg transition-shadow">
              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
                <div className="flex-grow">
                  <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500 mb-4">
                    <div className="flex items-center space-x-1">
                      <Calendar size={16} />
                      <span>{article.date}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <User size={16} />
                      <span>{article.author}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Tag size={16} />
                      <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs">
                        {article.category}
                      </span>
                    </div>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-gray-900 mb-3 hover:text-blue-600 transition-colors">
                    {article.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {article.summary}
                  </p>
                  
                  <div className="text-sm text-gray-500 mb-4">
                    Published in: <span className="font-semibold text-gray-700">{article.publication}</span>
                  </div>
                </div>
                
                <div className="flex-shrink-0">
                  <a
                    href={article.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                  >
                    Read Article
                    <ExternalLink size={16} className="ml-2" />
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
            View All Articles
          </button>
        </div>
      </div>
    </section>
  );
};

export default Articles;