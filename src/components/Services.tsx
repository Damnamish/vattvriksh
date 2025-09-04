import React from 'react';
import { Users, Target, TrendingUp, Lightbulb, Shield, Zap } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Users,
      title: "Leadership Coaching",
      description: "Personalized coaching programs to develop effective leadership skills and drive organizational success.",
      color: "blue"
    },
    {
      icon: Target,
      title: "Talent Management",
      description: "Strategic talent management solutions to identify, develop, and retain top performers in your organization.",
      color: "green"
    },
    {
      icon: TrendingUp,
      title: "Performance Enhancement",
      description: "Tools and strategies to accelerate business performance and improve overall productivity.",
      color: "purple"
    },
    {
      icon: Lightbulb,
      title: "Training & Development",
      description: "Customized training programs designed to meet your organization's specific development needs.",
      color: "orange"
    },
    {
      icon: Shield,
      title: "Risk Management",
      description: "Talent-focused risk management strategies to ensure organizational resilience and continuity.",
      color: "red"
    },
    {
      icon: Zap,
      title: "Change Management",
      description: "Expert guidance through organizational changes with focus on people and talent retention.",
      color: "indigo"
    }
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      blue: "bg-blue-100 text-blue-600",
      green: "bg-green-100 text-green-600",
      purple: "bg-purple-100 text-purple-600",
      orange: "bg-orange-100 text-orange-600",
      red: "bg-red-100 text-red-600",
      indigo: "bg-indigo-100 text-indigo-600"
    };
    return colors[color as keyof typeof colors] || colors.blue;
  };

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive talent solutions customized to your organization's specific needs, 
            delivering visible, sustainable, and impactful results.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div key={index} className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow group">
                <div className={`rounded-full p-4 w-16 h-16 mb-6 flex items-center justify-center ${getColorClasses(service.color)}`}>
                  <IconComponent size={32} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>

        <div className="mt-16 text-center">
          <button className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
            Discuss Your Needs
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;