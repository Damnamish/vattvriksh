import React from 'react';
import { Play, ExternalLink, Youtube } from 'lucide-react';

const MediaSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Insights & Media</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover Mridula's thought leadership through interviews, articles, and presentations 
            on talent development and organizational transformation.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="relative group">
            <div className="bg-gradient-to-br from-red-500 to-red-600 rounded-2xl overflow-hidden shadow-2xl">
              <div className="aspect-video bg-black bg-opacity-20 flex items-center justify-center relative">
                <a
                  href="https://www.youtube.com/watch?v=l2kwSI78tcw"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute inset-0 flex items-center justify-center group-hover:bg-black group-hover:bg-opacity-30 transition-all"
                >
                  <div className="bg-white bg-opacity-90 rounded-full p-6 group-hover:bg-opacity-100 transition-all group-hover:scale-110">
                    <Play className="text-red-600 ml-1" size={48} fill="currentColor" />
                  </div>
                </a>
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="bg-black bg-opacity-70 rounded-lg p-4 text-white">
                    <h3 className="font-bold text-lg mb-1">Leadership Insights</h3>
                    <p className="text-sm opacity-90">Watch Mridula share her expertise on talent development</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-8">
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-6">Featured Content</h3>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Explore Mridula's insights on leadership development, talent management, 
                and organizational transformation through various media appearances and publications.
              </p>
            </div>

            <div className="space-y-6">
              <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-start justify-between">
                  <div>
                    <h4 className="text-xl font-bold text-gray-900 mb-2">Video Interview</h4>
                    <p className="text-gray-600 mb-4">
                      In-depth discussion on modern leadership challenges and solutions 
                      for today's dynamic business environment.
                    </p>
                    <a
                      href="https://www.youtube.com/watch?v=l2kwSI78tcw"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-700 transition-colors"
                    >
                      Watch on YouTube
                      <ExternalLink size={16} className="ml-2" />
                    </a>
                  </div>
                  <div className="bg-red-100 rounded-full p-3 flex-shrink-0">
                    <Play className="text-red-600" size={24} />
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-purple-50 to-pink-50 border border-purple-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-start justify-between">
                  <div>
                    <h4 className="text-xl font-bold text-gray-900 mb-2">CEO Insights Article</h4>
                    <p className="text-gray-600 mb-4">
                      Featured article on transforming individuals and teams through 
                      holistic, heart-centric learning experiences.
                    </p>
                    <a
                      href="https://www.ceoinsightsindia.com/leader/mridula-sankhyayan-transforming-individuals-and-teams-through-holistic-heartcentric-and-engaging-learning-experiences-cid-2267.html"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-purple-600 font-semibold hover:text-purple-700 transition-colors"
                    >
                      Read Article
                      <ExternalLink size={16} className="ml-2" />
                    </a>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-orange-50 to-yellow-50 border border-orange-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-start justify-between">
                  <div>
                    <h4 className="text-xl font-bold text-gray-900 mb-2">Goldman Sachs HCM Award</h4>
                    <p className="text-gray-600 mb-4">
                      Recognition for excellence in Human Capital Management and 
                      outstanding contributions to leadership development.
                    </p>
                    <a
                      href="https://www.goldmansachs.com/worldwide/india/careers/hcm-award"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-orange-600 font-semibold hover:text-orange-700 transition-colors"
                    >
                      Learn More
                      <ExternalLink size={16} className="ml-2" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Video Section */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-8">
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-6">More Insights</h3>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Continue exploring Mridula's expertise through additional video content 
                and her dedicated YouTube channel for ongoing learning and development insights.
              </p>
            </div>

            <div className="space-y-6">
              <div className="bg-gradient-to-r from-red-50 to-pink-50 border border-red-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-start justify-between">
                  <div>
                    <h4 className="text-xl font-bold text-gray-900 mb-2">Leadership Development Video</h4>
                    <p className="text-gray-600 mb-4">
                      Additional insights on leadership development strategies and 
                      organizational transformation approaches.
                    </p>
                    <a
                      href="https://www.youtube.com/watch?v=AGEUeZKC_yU"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-red-600 font-semibold hover:text-red-700 transition-colors"
                    >
                      Watch Video
                      <ExternalLink size={16} className="ml-2" />
                    </a>
                  </div>
                  <div className="bg-red-100 rounded-full p-3 flex-shrink-0">
                    <Play className="text-red-600" size={24} />
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-red-50 to-orange-50 border border-red-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-start justify-between">
                  <div>
                    <h4 className="text-xl font-bold text-gray-900 mb-2">YouTube Channel</h4>
                    <p className="text-gray-600 mb-4">
                      Subscribe to Mridula's YouTube channel for regular insights on 
                      leadership, talent development, and organizational excellence.
                    </p>
                    <a
                      href="https://www.youtube.com/c/MridulaSankhyayan"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-red-600 font-semibold hover:text-red-700 transition-colors"
                    >
                      Visit Channel
                      <ExternalLink size={16} className="ml-2" />
                    </a>
                  </div>
                  <div className="bg-red-100 rounded-full p-3 flex-shrink-0">
                    <Youtube className="text-red-600" size={24} />
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="relative group">
            <div className="bg-gradient-to-br from-red-500 to-red-600 rounded-2xl overflow-hidden shadow-2xl">
              <div className="aspect-video bg-black bg-opacity-20 flex items-center justify-center relative">
                <a
                  href="https://www.youtube.com/watch?v=AGEUeZKC_yU"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute inset-0 flex items-center justify-center group-hover:bg-black group-hover:bg-opacity-30 transition-all"
                >
                  <div className="bg-white bg-opacity-90 rounded-full p-6 group-hover:bg-opacity-100 transition-all group-hover:scale-110">
                    <Play className="text-red-600 ml-1" size={48} fill="currentColor" />
                  </div>
                </a>
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="bg-black bg-opacity-70 rounded-lg p-4 text-white">
                    <h3 className="font-bold text-lg mb-1">Leadership Development</h3>
                    <p className="text-sm opacity-90">Additional insights on organizational transformation</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MediaSection;