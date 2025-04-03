import React, { useRef, useState } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { 
  Upload, Brain, Globe, Target,
  ChevronRight, ArrowRightCircle
} from 'lucide-react';

const HowItWorks = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeStep, setActiveStep] = useState(0);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  const steps = [
    {
      title: "Upload Your Content",
      description: "Simply upload your content or create it directly in our editor",
      icon: <Upload className="w-6 h-6 text-indigo-600" />,
      color: "bg-indigo-100",
      accent: "from-indigo-100 to-indigo-50",
    },
    {
      title: "AI Optimization",
      description: "Our AI analyzes and optimizes your content for maximum impact",
      icon: <Brain className="w-6 h-6 text-purple-600" />,
      color: "bg-purple-100",
      accent: "from-purple-100 to-purple-50",
    },
    {
      title: "Translation & Localization",
      description: "Automatically translate and adapt for 20+ languages",
      icon: <Globe className="w-6 h-6 text-teal-600" />,
      color: "bg-teal-100",
      accent: "from-teal-100 to-teal-50",
    },
    {
      title: "Audience Targeting",
      description: "Deliver personalized content to your target segments",
      icon: <Target className="w-6 h-6 text-pink-600" />,
      color: "bg-pink-100",
      accent: "from-pink-100 to-pink-50",
    }
  ];

  // Desktop animations
  const stepProgress = steps.map((_, i) => {
    const start = i / steps.length;
    const end = (i + 1) / steps.length;
    return {
      opacity: useTransform(scrollYProgress, 
        [start, start + 0.2, end - 0.2, end],
        [0.3, 1, 1, 0.3]
      ),
      y: useTransform(scrollYProgress,
        [start, end],
        [i % 2 === 0 ? 30 : -30, 0]
      ),
      scale: useTransform(scrollYProgress,
        [start, start + 0.1, end - 0.1, end],
        [0.9, 1, 1, 0.9]
      )
    };
  });

  // Auto-advance for desktop
  React.useEffect(() => {
    const unsubscribe = scrollYProgress.on("change", (latest) => {
      const newStep = Math.min(
        steps.length - 1,
        Math.floor(latest * steps.length)
      );
      setActiveStep(newStep);
    });
    return () => unsubscribe();
  }, [scrollYProgress, steps.length]);

  return (
    <section className="py-24 bg-gradient-to-b from-gray-50 to-white" ref={containerRef}>
      <div className="container mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600">
            How It Works
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Transform your content workflow in four simple steps
          </p>
        </motion.div>

        {/* Desktop Timeline */}
        <div className="hidden lg:block relative h-[200vh]">
          <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden">
            <div className="w-full max-w-6xl px-12">
              {/* Animated background */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeStep}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                  className={`absolute inset-0 -z-10 bg-gradient-to-br ${steps[activeStep].accent} rounded-3xl opacity-20`}
                />
              </AnimatePresence>

              {/* Progress line with indicators */}
              <div className="relative h-2 bg-gray-200 rounded-full mb-16 mx-16">
                <motion.div 
                  className="absolute top-0 left-0 h-full bg-gradient-to-r from-indigo-500 to-pink-500 rounded-full"
                  style={{ scaleX: scrollYProgress }}
                />
                {steps.map((_, i) => (
                  <div 
                    key={i}
                    className={`absolute top-1/2 w-4 h-4 rounded-full -mt-1.5 -ml-2 transition-all duration-300 ${activeStep >= i ? 'bg-indigo-500 scale-125' : 'bg-gray-300'}`}
                    style={{ left: `${(i / (steps.length - 1)) * 100}%` }}
                  />
                ))}
              </div>

              {/* Steps grid */}
              <div className="grid grid-cols-4 gap-8 relative">
                {steps.map((step, index) => (
                  <motion.div
                    key={index}
                    style={{ 
                      opacity: stepProgress[index].opacity,
                      y: stepProgress[index].y,
                      scale: stepProgress[index].scale
                    }}
                    className="text-center"
                  >
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      className={`${step.color} w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg relative`}
                    >
                      {step.icon}
                      {activeStep === index && (
                        <motion.div 
                          className="absolute inset-0 rounded-2xl border-2 border-indigo-400"
                          initial={{ scale: 1.2, opacity: 0 }}
                          animate={{ scale: 1, opacity: 1 }}
                          transition={{ duration: 0.3 }}
                        />
                      )}
                    </motion.div>
                    <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                    <p className="text-gray-600">{step.description}</p>
                  </motion.div>
                ))}
              </div>

              {/* Current step highlight */}
              <AnimatePresence>
                {activeStep !== null && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="mt-12 text-center"
                  >
                    <div className="inline-flex items-center gap-2 px-6 py-3 bg-white rounded-full shadow-md">
                      <span className="font-medium text-indigo-600">
                        Current: {steps[activeStep].title}
                      </span>
                      <ArrowRightCircle className="text-indigo-400" />
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>

        {/* Mobile Steps */}
        <div className="lg:hidden space-y-6">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ 
                opacity: 1, 
                x: 0,
                transition: { delay: index * 0.1, duration: 0.5 }
              }}
              viewport={{ once: true, margin: "0px 0px -30px 0px" }}
              className="relative"
            >
              <div className="flex items-start gap-4 bg-white rounded-xl p-5 shadow-sm border border-gray-100">
                <div className={`${step.color} flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center mt-1`}>
                  {step.icon}
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-xs font-semibold text-indigo-600 px-2 py-1 bg-indigo-50 rounded-full">
                      STEP {index + 1}
                    </span>
                  </div>
                  <h3 className="text-lg font-semibold">{step.title}</h3>
                  <p className="text-gray-600 mt-2 text-sm">{step.description}</p>
                </div>
              </div>
              {index < steps.length - 1 && (
                <div className="absolute -bottom-5 left-14 w-0.5 h-5 bg-gray-200" />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;