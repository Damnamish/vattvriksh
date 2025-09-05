import React from 'react';
import { ExternalLink, Award, BookOpen, Users, Globe, Trophy } from 'lucide-react';

const MridulaProfile = () => {
  const achievements = [
    {
      icon: Award,
      title: "WICCI Recognition",
      description: "Featured leader in Women's Indian Chamber of Commerce & Industry",
      link: "https://www.wicci.in/mridula-sankhyayan",
      color: "blue"
    },
    {
      icon: Users,
      title: "LSP Leadership",
      description: "Senior consultant and trainer with Learning Solutions Partnership",
      link: "https://www.lspleadership.com/our-people/mridula-sankhyayan",
      color: "green"
    },
    {
      icon: BookOpen,
      title: "CEO Insights Feature",
      description: "Transforming individuals and teams through holistic, heart-centric learning",
      link: "https://www.ceoinsightsindia.com/leader/mridula-sankhyayan-transforming-individuals-and-teams-through-holistic-heartcentric-and-engaging-learning-experiences-cid-2267.html",
      color: "purple"
    },
    {
      icon: Trophy,
      title: "Goldman Sachs HCM Award",
      description: "Recognition for excellence in Human Capital Management and leadership development",
      link: "https://www.goldmansachs.com/worldwide/india/careers/hcm-award",
      color: "orange"
    }
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      blue: "bg-blue-100 text-blue-600 border-blue-200 hover:bg-blue-200",
      green: "bg-green-100 text-green-600 border-green-200 hover:bg-green-200",
      purple: "bg-purple-100 text-purple-600 border-purple-200 hover:bg-purple-200",
      orange: "bg-orange-100 text-orange-600 border-orange-200 hover:bg-orange-200"
    };
    return colors[color as keyof typeof colors] || colors.blue;
  };

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Meet Mridula Sankhyayan</h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto">
            A recognized leader in talent development with extensive industry recognition 
            and thought leadership in transforming organizations through people-centric approaches.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h3 className="text-3xl font-bold text-gray-900 mb-6">Industry Recognition</h3>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Mridula's expertise in talent management and leadership development has earned 
              recognition from leading industry organizations and publications. Her holistic, 
              heart-centric approach to learning and development has transformed countless 
              individuals and teams across various industries.
            </p>
            
            <div className="space-y-6">
              {achievements.map((achievement, index) => {
                const IconComponent = achievement.icon;
                return (
                  <a
                    key={index}
                    href={achievement.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`block border-2 rounded-xl p-6 transition-all hover:shadow-lg group ${getColorClasses(achievement.color)}`}
                  >
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0">
                        <IconComponent size={32} />
                      </div>
                      <div className="flex-grow">
                        <div className="flex items-center justify-between">
                          <h4 className="text-xl font-bold text-gray-900 group-hover:text-gray-700">
                            {achievement.title}
                          </h4>
                          <ExternalLink size={20} className="text-gray-400 group-hover:text-gray-600" />
                        </div>
                        <p className="text-gray-600 mt-2 leading-relaxed">
                          {achievement.description}
                        </p>
                      </div>
                    </div>
                  </a>
                );
              })}
            </div>
          </div>
          
          <div className="space-y-8">
            {/* Professional Photo Placeholder */}
            <div className="bg-white rounded-2xl shadow-xl p-8 text-center">
              <div className="bg-gradient-to-br from-blue-100 to-indigo-100 rounded-full p-8 w-32 h-32 mx-auto mb-6 flex items-center justify-center">
                <Globe className="text-blue-600" size={64} />
              </div>
              <h4 className="text-2xl font-bold text-gray-900 mb-2">Mridula Sankhyayan</h4>
              <p className="text-gray-600 mb-4">Founder & Lead Consultant</p>
              <p className="text-sm text-gray-500">25+ Years of Excellence in Talent Development</p>
            </div>
            
            <div className="bg-white rounded-2xl shadow-xl p-8">
            <div className="text-center mb-8">
              <h4 className="text-2xl font-bold text-gray-900 mb-4">Thought Leadership</h4>
            </div>
            
            <blockquote className="text-lg text-gray-700 italic leading-relaxed mb-6 text-center">
              "Transforming individuals and teams through holistic, heart-centric, 
              and engaging learning experiences that create lasting organizational impact."
            </blockquote>
            
            <div className="grid grid-cols-2 gap-4 text-center">
              <div className="bg-blue-50 rounded-lg p-4">
                <div className="text-2xl font-bold text-blue-600">25+</div>
                <div className="text-sm text-gray-600">Years Experience</div>
              </div>
              <div className="bg-green-50 rounded-lg p-4">
                <div className="text-2xl font-bold text-green-600">100+</div>
                <div className="text-sm text-gray-600">Organizations</div>
              </div>
            </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MridulaProfile;