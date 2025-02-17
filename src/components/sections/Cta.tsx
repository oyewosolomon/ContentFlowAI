import React from 'react';

const CTA: React.FC = () => {
  return (
    <section className="relative h-96 flex items-center justify-center text-white overflow-hidden">
      {/* Background Image with Parallax */}
      <div
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{ backgroundImage: "url('/cta-background.jpg')" }}
      ></div>

      {/* Overlay */}
      <div className="absolute z-10 bg-gradient-to-r from-blue-600 to-indigo-700 w-full h-full"></div>

      {/* Content */}
      <div className="relative z-20 text-center px-6">
        <h2 className="text-3xl font-bold mb-6">Ready to Build Smarter?</h2>
        <p className="text-xl mb-8">
          Join thousands of construction professionals who trust BuildSmart Technologies.
        </p>
        <button className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-blue-50 hover:scale-105 transition-transform duration-300 shadow-lg animate-pulse">
          Request a Demo
        </button>
      </div>
    </section>
  );
};

export default CTA;