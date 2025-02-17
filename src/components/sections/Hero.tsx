import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Globe, Brain, Target, X } from 'lucide-react';
import SignupModal from '../sections/SignupModal';


const Hero = () => {
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  const openVideo = () => setIsVideoOpen(true);
  const closeVideo = () => setIsVideoOpen(false);
  const [isSignupOpen, setIsSignupOpen] = useState(false);

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-800 overflow-hidden">
      {/* Animated background dots */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,_rgb(255_255_255_/_0.15)_1px,_transparent_0)] bg-[size:24px_24px]" />
      
      <div className="relative container mx-auto px-6 pt-32 pb-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-white space-y-8"
          >
            <h1 className="text-5xl md:text-6xl font-bold leading-tight">
              Transform Your Content
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">
                {" "}Creation{" "}
              </span>
              with AI
            </h1>
            
            <p className="text-xl text-gray-300">
              Produce 10,000+ pieces of optimized content monthly. Powered by AI, 
              translated into 20 languages, perfectly targeted for your audience.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button
              onClick={() => setIsSignupOpen(true)} 
              className="px-8 py-4 bg-gradient-to-r from-pink-500 to-violet-500 rounded-lg font-semibold text-white flex items-center gap-2 hover:opacity-90 transition-opacity">
                Get Started Free
                <ArrowRight className="w-5 h-5" />
              </button>
              
              <button 
                onClick={openVideo} 
                className="px-8 py-4 bg-white/10 backdrop-blur-sm rounded-lg font-semibold text-white flex items-center gap-2 hover:bg-white/20 transition-all"
              >
                Watch Demo
              </button>
            </div>
            <SignupModal 
            isOpen={isSignupOpen} 
            onClose={() => setIsSignupOpen(false)} 
          />
            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 pt-8">
              {[
                { value: "10K+", label: "Monthly Content" },
                { value: "20+", label: "Languages" },
                { value: "99%", label: "Accuracy" }
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                  className="text-center p-4 rounded-lg bg-white/5 backdrop-blur-sm"
                >
                  <div className="text-2xl font-bold">{stat.value}</div>
                  <div className="text-sm text-gray-300">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right content - Features */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="grid gap-6"
          >
            {[
              {
                icon: <Brain className="w-6 h-6" />,
                title: "AI-Powered Optimization",
                description: "Smart content generation with advanced AI algorithms"
              },
              {
                icon: <Globe className="w-6 h-6" />,
                title: "Multi-Language Support",
                description: "Instant translation into 20+ languages"
              },
              {
                icon: <Target className="w-6 h-6" />,
                title: "Audience Targeting",
                description: "Precise content tailoring for your target audience"
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.02 }}
                className="p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 flex items-start gap-4 hover:bg-white/10 transition-colors"
              >
                <div className="p-2 rounded-lg bg-gradient-to-r from-pink-500 to-violet-500">
                  {feature.icon}
                </div>
                <div>
                  <h3 className="text-white font-semibold text-lg">
                    {feature.title}
                  </h3>
                  <p className="text-gray-300 mt-1">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Video Modal */}
      {isVideoOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
        <div className="relative bg-black rounded-lg overflow-hidden max-w-4xl w-full">
          <button
            onClick={closeVideo}
            className="absolute top-2 right-2 text-white bg-gray-800 hover:bg-gray-700 rounded-full p-2 focus:outline-none"
          >
            X
          </button>
          <div className="w-full h-[70vh]">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/ScMzIvxBSi4"
              title="Demo Video"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      </div>
      )}
    </div>
  );
};

export default Hero
