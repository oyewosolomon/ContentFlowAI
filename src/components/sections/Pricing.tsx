import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Brain, Target, Globe, Zap, 
  CheckCircle, ArrowRight, PlayCircle,
  BarChart, MessageSquare, Settings,
  ChevronDown
} from 'lucide-react';

const Pricing = () => {
  const [billingCycle, setBillingCycle] = useState('monthly');
  
  const plans = [
    {
      name: "Starter",
      monthlyPrice: 49,
      yearlyPrice: 39,
      features: [
        "1,000 pieces of content/month",
        "5 languages",
        "Basic analytics",
        "Email support"
      ]
    },
    {
      name: "Professional",
      monthlyPrice: 99,
      yearlyPrice: 79,
      popular: true,
      features: [
        "5,000 pieces of content/month",
        "10 languages",
        "Advanced analytics",
        "Priority support",
        "Custom workflows"
      ]
    },
    {
      name: "Enterprise",
      monthlyPrice: 199,
      yearlyPrice: 159,
      features: [
        "10,000+ pieces of content/month",
        "20 languages",
        "Custom analytics",
        "24/7 support",
        "API access",
        "Custom integrations"
      ]
    }
  ];

  return (
    <section className="py-24 bg-white" id='pricing'>
      <div className="container mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">Simple, Transparent Pricing</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
            Choose the perfect plan for your content needs
          </p>
          
          <div className="flex items-center justify-center gap-4 mb-8">
            <button
              onClick={() => setBillingCycle('monthly')}
              className={`px-4 py-2 rounded-lg ${
                billingCycle === 'monthly' 
                  ? 'bg-indigo-600 text-white' 
                  : 'bg-gray-100 text-gray-600'
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setBillingCycle('yearly')}
              className={`px-4 py-2 rounded-lg ${
                billingCycle === 'yearly' 
                  ? 'bg-indigo-600 text-white' 
                  : 'bg-gray-100 text-gray-600'
              }`}
            >
              Yearly (20% off)
            </button>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`relative bg-white rounded-xl p-8 ${
                plan.popular 
                  ? 'border-2 border-indigo-600 shadow-xl' 
                  : 'border border-gray-200 shadow-lg'
              }`}
            >
              {plan.popular && (
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <span className="bg-indigo-600 text-white px-4 py-1 rounded-full text-sm">
                    Most Popular
                  </span>
                </div>
              )}
              
              <h3 className="text-2xl font-bold mb-4">{plan.name}</h3>
              <div className="mb-6">
                <span className="text-4xl font-bold">
                  ${billingCycle === 'monthly' ? plan.monthlyPrice : plan.yearlyPrice}
                </span>
                <span className="text-gray-600">/month</span>
              </div>
              
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-indigo-600 mt-1" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              
              <button className={`w-full py-3 rounded-lg font-semibold ${
                plan.popular 
                  ? 'bg-indigo-600 text-white hover:bg-indigo-700' 
                  : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
              } transition-colors`}>
                Get Started
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
