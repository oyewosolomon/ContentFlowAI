const Resources = () => {
  const impacts = [
    {
      title: "Environmental Benefits",
      items: [
        "30% reduction in fuel consumption",
        "Lower carbon emissions",
        "Reduced urban pollution"
      ]
    },
    {
      title: "Social Impact",
      items: [
        "Reduced congestion",
        "Improved public health",
        "Better air quality"
      ]
    }
  ];

  return (
    <section id="sustainability" className="py-20 bg-green-50">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-6">Contributing to Greener Cities</h2>
        <p className="text-xl text-center text-gray-600 mb-16 max-w-3xl mx-auto">
          Our commitment to sustainability drives every aspect of our solution, creating lasting positive impact for cities and their residents.
        </p>
        
        <div className="grid md:grid-cols-2 gap-12">
          {impacts.map((impact, index) => (
            <div key={index} className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">{impact.title}</h3>
              <ul className="space-y-4">
                {impact.items.map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <button className="px-8 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors">
            Learn More About Our Impact
          </button>
        </div>
      </div>
    </section>
  );
};

  export default Resources;