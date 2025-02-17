import React from 'react';
import { ArrowRight } from 'lucide-react';

const CaseStudies = () => {
  const cases = [
    {
      city: "City X",
      achievement: "Reduced Wait Times by 25%",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&h=300&q=80"
    },
    {
      city: "City Y",
      achievement: "30% Lower Fuel Consumption",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&h=300&q=80"
    },
    {
      city: "City Z",
      achievement: "Enhanced Passenger Experience",
      image: "https://images.unsplash.com/photo-1509822929063-6b6cfc9b42f2?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&h=300&q=80"
    }
  ];

  return (
    <section id="case-studies" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">Smart Transit in Action</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {cases.map((study, index) => (
            <div key={index} className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <img src={study.image} alt={study.city} className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{study.city}</h3>
                <p className="text-gray-600 mb-4">{study.achievement}</p>
                <button className="text-blue-600 font-semibold hover:text-blue-700 flex items-center gap-2">
                  Read More <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;