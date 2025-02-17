import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Brain, Target, Globe, Zap, 
  CheckCircle, ArrowRight, PlayCircle,
  BarChart, MessageSquare, Settings,
  ChevronDown
} from 'lucide-react';

// How It Works Section
const HowItWorks = () => {
  const steps = [
    {
      title: "Upload Your Content",
      description: "Simply upload your content or create it directly in our editor",
      icon: <MessageSquare className="w-6 h-6" />
    },
    {
      title: "AI Optimization",
      description: "Our AI analyzes and optimizes your content for maximum impact",
      icon: <Brain className="w-6 h-6" />
    },
    {
      title: "Translation & Localization",
      description: "Automatically translate and adapt for 20+ languages",
      icon: <Globe className="w-6 h-6" />
    },
    {
      title: "Audience Targeting",
      description: "Deliver personalized content to your target segments",
      icon: <Target className="w-6 h-6" />
    }
  ];

  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">How It Works</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Transform your content workflow in four simple steps
          </p>
        </motion.div>

        <div className="grid md:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative"
            >
              <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
                <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center mb-4">
                  {step.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2">
                  <ArrowRight className="w-6 h-6 text-gray-400" />
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;