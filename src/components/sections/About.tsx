import React from 'react';

const AboutUs: React.FC = () => {
  // Random construction image from Unsplash
  const randomImageUrl = `https://source.unsplash.com/1600x900/?construction,architecture`;

  return (
    <section className="relative py-20">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{ backgroundImage: `url(${randomImageUrl})` }}
      >
        <div className="absolute inset-0 bg-blue-700 "></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-white animate-fade-in">
          About Us
        </h2>
        <div className="max-w-4xl mx-auto text-center text-white">
          <p className="text-xl mb-8 animate-fade-in-left">
            At <span className="font-semibold text-blue-300">BuildSmart Technologies</span>, our mission is to revolutionize the construction industry by providing innovative, data-driven solutions that empower teams to build smarter, faster, and more efficiently.
          </p>

          {/* Stats Section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white bg-opacity-10 p-6 rounded-lg backdrop-blur-sm hover:bg-opacity-20 transition duration-300">
              <h3 className="text-4xl font-bold text-blue-300">$5B+</h3>
              <p className="text-gray-200">Projects Managed Annually</p>
            </div>
            <div className="bg-white bg-opacity-10 p-6 rounded-lg backdrop-blur-sm hover:bg-opacity-20 transition duration-300">
              <h3 className="text-4xl font-bold text-blue-300">30%</h3>
              <p className="text-gray-200">Reduction in Project Delays</p>
            </div>
            <div className="bg-white bg-opacity-10 p-6 rounded-lg backdrop-blur-sm hover:bg-opacity-20 transition duration-300">
              <h3 className="text-4xl font-bold text-blue-300">100+</h3>
              <p className="text-gray-200">Global Clients</p>
            </div>
          </div>

          {/* Values and Mission Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white bg-opacity-10 p-6 rounded-lg backdrop-blur-sm hover:bg-opacity-20 transition duration-300">
              <h3 className="text-2xl font-semibold mb-4 text-blue-300">Our Mission</h3>
              <p className="text-gray-200">
                To empower construction teams with cutting-edge technology that simplifies project management, enhances collaboration, and delivers measurable results.
              </p>
            </div>
            <div className="bg-white bg-opacity-10 p-6 rounded-lg backdrop-blur-sm hover:bg-opacity-20 transition duration-300">
              <h3 className="text-2xl font-semibold mb-4 text-blue-300">Our Values</h3>
              <ul className="text-gray-200 list-disc list-inside">
                <li><span className="font-semibold">Innovation:</span> Constantly pushing the boundaries of technology.</li>
                <li><span className="font-semibold">Collaboration:</span> Working hand-in-hand with our clients.</li>
                <li><span className="font-semibold">Efficiency:</span> Maximizing resources to minimize waste.</li>
                <li><span className="font-semibold">Reliability:</span> Delivering on our promises, every time.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;