
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Brain, Target, Globe, Zap, 
  CheckCircle, ArrowRight, PlayCircle,
  BarChart, MessageSquare, Settings,
  ChevronDown
} from 'lucide-react';

const Features = () => {
  const features = [
    {
      title: "AI Content Generation",
      description: "Generate high-quality content in seconds with advanced AI algorithms",
      icon: <Brain className="w-6 h-6 text-indigo-600" />
    },
    {
      title: "Real-time Analytics",
      description: "Track performance and engagement with detailed analytics",
      icon: <BarChart className="w-6 h-6 text-indigo-600" />
    },
    {
      title: "Workflow Automation",
      description: "Automate your content pipeline from creation to distribution",
      icon: <Settings className="w-6 h-6 text-indigo-600" />
    },
    {
      title: "Smart Optimization",
      description: "Optimize content for different platforms and audiences",
      icon: <Zap className="w-6 h-6 text-indigo-600" />
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">Powerful Features</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Everything you need to create and manage content at scale
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-white rounded-xl p-6 shadow-lg border border-gray-100"
            >
              <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
