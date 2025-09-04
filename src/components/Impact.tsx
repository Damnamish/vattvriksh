import React from 'react';
import { TrendingDown, TrendingUp, Users, DollarSign, Shield, Star } from 'lucide-react';

const Impact = () => {
  const stats = [
    {
      icon: TrendingDown,
      value: "41%",
      label: "Lower turnover rates among high performers",
      color: "green"
    },
    {
      icon: DollarSign,
      value: "26%",
      label: "Higher median revenue per employee",
      color: "blue"
    },
    {
      icon: Shield,
      value: "28%",
      label: "Less likely to have major layoffs",
      color: "purple"
    },
    {
      icon: Users,
      value: "109%",
      label: "More capable of retaining high performers",
      color: "orange"
    },
    {
      icon: Star,
      value: "87%",
      label: "More capable of hiring the best people",
      color: "red"
    },
    {
      icon: TrendingUp,
      value: "144%",
      label: "Better at planning for future talent needs",
      color: "indigo"
    }
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      green: "bg-green-100 text-green-600 border-green-200",
      blue: "bg-blue-100 text-blue-600 border-blue-200",
      purple: "bg-purple-100 text-purple-600 border-purple-200",
      orange: "bg-orange-100 text-orange-600 border-orange-200",
      red: "bg-red-100 text-red-600 border-red-200",
      indigo: "bg-indigo-100 text-indigo-600 border-indigo-200"
    };
    return colors[color as keyof typeof colors] || colors.blue;
  };

  return (
    <section id="impact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Proven Impact</h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto mb-8">
            Research by The Talent Management Factbook® from Deloitte shows that organizations 
            investing in talent management and development achieve remarkable results.
          </p>
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 max-w-4xl mx-auto">
            <p className="text-lg text-blue-800 font-medium">
              Organizations that invest in Talent Management and Talent Development achieve 
              high levels of employee engagement and productivity.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <div key={index} className={`border-2 rounded-xl p-8 text-center hover:shadow-lg transition-shadow ${getColorClasses(stat.color)}`}>
                <div className="flex justify-center mb-4">
                  <IconComponent size={48} />
                </div>
                <div className="text-4xl font-bold mb-2">{stat.value}</div>
                <p className="text-gray-700 font-medium leading-relaxed">{stat.label}</p>
              </div>
            );
          })}
        </div>

        <div className="mt-16 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-12 text-center text-white">
          <h3 className="text-3xl font-bold mb-4">Ready to Transform Your Organization?</h3>
          <p className="text-xl mb-8 opacity-90">
            Join the ranks of enduring organizations that prioritize talent development 
            and achieve exceptional business results.
          </p>
          <button className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
            Start Your Journey
          </button>
        </div>
      </div>
    </section>
  );
};

export default Impact;