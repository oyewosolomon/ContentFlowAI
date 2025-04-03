import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { 
  Brain, 
  BarChart, 
  Settings, 
  Zap 
} from 'lucide-react';

interface Feature {
  title: string;
  description: string;
  icon: React.ReactNode;
  image: string;
}

const Features: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  const features: Feature[] = [
    {
      title: "AI Content Generation",
      description: "Generate high-quality content in seconds with advanced AI algorithms",
      icon: <Brain className="w-6 h-6 text-indigo-600" />,
      image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80"
    },
    {
      title: "Real-time Analytics",
      description: "Track performance and engagement with detailed analytics",
      icon: <BarChart className="w-6 h-6 text-indigo-600" />,
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80"
    },
    {
      title: "Workflow Automation",
      description: "Automate your content pipeline from creation to distribution",
      icon: <Settings className="w-6 h-6 text-indigo-600" />,
      image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80"
    },
    {
      title: "Smart Optimization",
      description: "Optimize content for different platforms and audiences",
      icon: <Zap className="w-6 h-6 text-indigo-600" />,
      image: "https://images.unsplash.com/photo-1523961131990-5ea7c61b2107?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80"
    }
  ];

  return (
    <section className="py-24 bg-white" ref={containerRef}>
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

        <div className="relative h-[200vh] max-w-5xl mx-auto">
          <div className="sticky top-0 h-screen flex items-center justify-center">
            {features.map((feature, index) => {
              const start = index / features.length;
              const end = (index + 1) / features.length;
              
              const opacity = useTransform(
                scrollYProgress,
                [start, start + 0.1, end - 0.1, end],
                [0, 1, 1, 0]
              );
              
              const scale = useTransform(
                scrollYProgress,
                [start, start + 0.1, end - 0.1, end],
                [0.8, 1, 1, 0.8]
              );
              
              const y = useTransform(
                scrollYProgress,
                [start, start + 0.1, end - 0.1, end],
                [50, 0, 0, -50]
              );

              return (
                <motion.div
                  key={index}
                  style={{
                    opacity,
                    scale,
                    y,
                    zIndex: features.length - index
                  }}
                  className="absolute w-full max-w-3xl h-[500px]"
                >
                  <div className="relative w-full h-full bg-white rounded-2xl shadow-2xl overflow-hidden">
                    <motion.div 
                      className="absolute inset-0 bg-gray-100"
                      style={{
                        backgroundImage: `url(${feature.image})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                      }}
                    />
                    <div className="relative z-10 p-8 h-full flex flex-col justify-end bg-gradient-to-t from-black/80 via-black/50 to-transparent">
                      <div className="w-12 h-12 bg-indigo-600 rounded-full flex items-center justify-center mb-4">
                        {feature.icon}
                      </div>
                      <h3 className="text-7xl font-bold text-white mb-2">
                        {feature.title}
                      </h3>
                      <p className="text-gray-200 mb-6 text-2xl">
                        {feature.description}
                      </p>
                      <motion.div
                        className="w-full bg-indigo-600 h-1 rounded-full"
                        style={{
                          scaleX: useTransform(scrollYProgress, [start, end], [0, 1])
                        }}
                      />
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        <div className="flex justify-center mt-32 gap-4">
          {features.map((_, index) => {
            const start = index / features.length;
            const end = (index + 1) / features.length;
            
            return (
              <motion.div
                key={index}
                className="h-2 rounded-full bg-gray-300 relative overflow-hidden w-16"
              >
                <motion.div
                  className="absolute top-0 left-0 h-full bg-indigo-600 w-full"
                  style={{
                    scaleX: useTransform(scrollYProgress, [start, end], [0, 1])
                  }}
                />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;