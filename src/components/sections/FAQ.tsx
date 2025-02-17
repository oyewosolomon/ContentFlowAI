// FAQ Section (continued)
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Brain, Target, Globe, Zap, 
  CheckCircle, ArrowRight, PlayCircle,
  BarChart, MessageSquare, Settings,
  ChevronDown
} from 'lucide-react';



const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  
  const faqs = [
    {
      question: "How does the AI content generation work?",
      answer: "Our AI uses advanced natural language processing to generate high-quality content based on your inputs and requirements. It learns from your brand voice and style guidelines to ensure consistency."
    },
    {
      question: "Is the translated content accurate?",
      answer: "Yes, our AI translation system maintains 99% accuracy and is reviewed by native language experts. We also ensure cultural nuances are properly adapted for each target market."
    },
    {
      question: "Can I integrate ContentFlow AI with my existing tools?",
      answer: "Absolutely! We offer API access and native integrations with popular CMS platforms, marketing tools, and analytics services. Our team can help set up custom integrations if needed."
    },
    {
      question: "What kind of support do you provide?",
      answer: "We offer various support levels depending on your plan, ranging from email support to 24/7 dedicated support. Enterprise customers get a dedicated success manager."
    },
    {
      question: "How do you ensure content quality?",
      answer: "We use a combination of AI validation, human review processes, and quality metrics to ensure all content meets high standards. You can also set custom quality parameters."
    }
  ];

  return (
    <section className="py-24 bg-gray-50" id='faqs'>
      <div className="container mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">Frequently Asked Questions</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Got questions? We've got answers. If you can't find what you're looking for, reach out to our team.
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="mb-4"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full text-left p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200 focus:outline-none"
              >
                <div className="flex justify-between items-center">
                  <h3 className="text-lg font-semibold text-gray-900">
                    {faq.question}
                  </h3>
                  <motion.div
                    animate={{ rotate: openIndex === index ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <ChevronDown className="w-5 h-5 text-gray-500" />
                  </motion.div>
                </div>
                
                <motion.div
                  initial={false}
                  animate={{
                    height: openIndex === index ? "auto" : 0,
                    opacity: openIndex === index ? 1 : 0,
                    marginTop: openIndex === index ? 16 : 0
                  }}
                  transition={{ duration: 0.2 }}
                  className="overflow-hidden"
                >
                  <p className="text-gray-600">{faq.answer}</p>
                </motion.div>
              </button>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <h3 className="text-2xl font-semibold mb-4">
            Still have questions?
          </h3>
          <p className="text-gray-600 mb-8">
            Can't find the answer you're looking for? Our team is here to help.
          </p>
          <button className="px-8 py-4 bg-indigo-600 text-white rounded-lg font-semibold hover:bg-indigo-700 transition-colors">
            Contact Support
          </button>
        </motion.div>
      </div>
    </section>
  );
};

// Export all sections
export default FAQSection;