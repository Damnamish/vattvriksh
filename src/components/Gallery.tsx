import React from 'react';
import { Calendar, MapPin, Users } from 'lucide-react';

const Gallery = () => {
  const galleryItems = [
    {
      title: "Leadership Workshop 2024",
      description: "Interactive leadership development session with senior executives",
      date: "March 2024",
      location: "Mumbai",
      participants: "25 Leaders",
      category: "Workshop",
      image: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    {
      title: "Talent Management Summit",
      description: "Annual summit on talent development strategies and best practices",
      date: "February 2024",
      location: "Delhi",
      participants: "150 Professionals",
      category: "Summit",
      image: "https://images.pexels.com/photos/1181533/pexels-photo-1181533.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    {
      title: "Executive Coaching Retreat",
      description: "Intensive coaching retreat for C-suite executives",
      date: "January 2024",
      location: "Goa",
      participants: "12 Executives",
      category: "Retreat",
      image: "https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    {
      title: "Team Building Workshop",
      description: "Collaborative team building and performance enhancement session",
      date: "December 2023",
      location: "Bangalore",
      participants: "40 Team Members",
      category: "Workshop",
      image: "https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    {
      title: "Leadership Masterclass",
      description: "Advanced leadership skills development masterclass",
      date: "November 2023",
      location: "Pune",
      participants: "30 Leaders",
      category: "Masterclass",
      image: "https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    {
      title: "Organizational Development Conference",
      description: "Conference on modern organizational development practices",
      date: "October 2023",
      location: "Chennai",
      participants: "200 Attendees",
      category: "Conference",
      image: "https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=800"
    }
  ];

  const getCategoryColor = (category: string) => {
    const colors = {
      Workshop: "bg-blue-100 text-blue-800",
      Summit: "bg-purple-100 text-purple-800",
      Retreat: "bg-green-100 text-green-800",
      Masterclass: "bg-orange-100 text-orange-800",
      Conference: "bg-red-100 text-red-800"
    };
    return colors[category as keyof typeof colors] || "bg-gray-100 text-gray-800";
  };

  return (
    <section id="gallery" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Event Gallery</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore our workshops, retreats, and conferences where leaders come together 
            to learn, grow, and transform their organizations.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {galleryItems.map((item, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow group">
              <div className="h-48 relative overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black bg-opacity-20 group-hover:bg-opacity-10 transition-all"></div>
                <div className="absolute top-4 left-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getCategoryColor(item.category)}`}>
                    {item.category}
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                  {item.title}
                </h3>
                
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {item.description}
                </p>
                
                <div className="space-y-2 text-sm text-gray-500">
                  <div className="flex items-center space-x-2">
                    <Calendar size={16} />
                    <span>{item.date}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <MapPin size={16} />
                    <span>{item.location}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Users size={16} />
                    <span>{item.participants}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Join Our Next Event</h3>
            <p className="text-gray-600 mb-6">
              Stay updated on upcoming workshops, retreats, and conferences. 
              Be part of a community of leaders committed to excellence.
            </p>
            <button className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
              View Upcoming Events
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;