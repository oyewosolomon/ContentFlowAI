import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Brain, Target, Globe, Zap, 
  CheckCircle, ArrowRight, PlayCircle,
  BarChart, MessageSquare, Settings,
  ChevronDown
} from 'lucide-react';


const Testimonials = () => {
  const testimonials = [
    {
      quote: "ContentFlow AI has transformed our content creation process. We're now producing 10x more content with half the team.",
      author: "Sarah Johnson",
      role: "Content Director",
      company: "Global Media Corp"
    },
    {
      quote: "The AI-powered translations are incredibly accurate. We've expanded to 15 new markets in just 6 months.",
      author: "Michael Chen",
      role: "Marketing Lead",
      company: "Tech Innovations"
    },
    {
      quote: "The audience targeting features have improved our engagement rates by 300%. It's been a game-changer.",
      author: "Emma Rodriguez",
      role: "Digital Strategy Head",
      company: "Creative Agency Pro"
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-indigo-50 to-purple-50">
      <div className="container mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">Trusted by Industry Leaders</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            See what our customers have to say about ContentFlow AI
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-xl p-8 shadow-lg"
            >
              <div className="mb-4">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-yellow-400">★</span>
                ))}
              </div>
              <p className="text-gray-600 mb-6 italic">"{testimonial.quote}"</p>
              <div>
                <p className="font-semibold">{testimonial.author}</p>
                <p className="text-gray-500 text-sm">{testimonial.role}</p>
                <p className="text-gray-500 text-sm">{testimonial.company}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
