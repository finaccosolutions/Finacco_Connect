import React from 'react';
import { Check } from 'lucide-react';

const Pricing = () => {
  return (
    <div className="pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-extrabold text-gray-900 dark:text-white sm:text-5xl">
            Simple, Transparent Pricing
          </h1>
          <p className="mt-4 text-xl text-gray-600 dark:text-gray-400">
            Choose the plan that works best for your business
          </p>
        </div>

        <div className="mt-16 grid gap-8 lg:grid-cols-2 lg:gap-12">
          {plans.map((plan, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 hover:scale-105 group"
            >
              <div className="px-6 py-8">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                  {plan.name}
                </h3>
                <div className="mt-4">
                  <span className="text-4xl font-extrabold text-gray-900 dark:text-white">
                    {plan.price}
                  </span>
                  {plan.period && (
                    <span className="text-base font-medium text-gray-500 dark:text-gray-400">
                      {plan.period}
                    </span>
                  )}
                </div>
                <p className="mt-4 text-gray-600 dark:text-gray-400">
                  {plan.description}
                </p>
              </div>
              <div className="px-6 pt-6 pb-8">
                <ul className="space-y-4">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-lg flex items-center justify-center group-hover:rotate-12 transition-transform duration-300">
                        <Check className="h-4 w-4 text-white" />
                      </div>
                      <span className="ml-3 text-gray-600 dark:text-gray-400">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
                <div className="mt-8">
                  <a
                    href={plan.buttonLink}
                    className="block w-full bg-blue-600 text-white text-center px-4 py-2 rounded-md hover:bg-blue-700 transition-colors"
                  >
                    {plan.buttonText}
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const plans = [
  {
    name: 'Free Trial',
    price: 'Free',
    period: ' for 14 days',
    description: 'Perfect for testing out our features',
    features: [
      'Excel to Tally Import',
      'Basic Column Customization',
      'Standard Templates',
      'Email Support',
    ],
    buttonText: 'Start Free Trial',
    buttonLink: '/download',
  },
  {
    name: 'Premium',
    price: '₹',
    description: 'Full access to all features',
    features: [
      'All Free Trial Features',
      'Advanced Column Customization',
      'Custom Template Saving',
      'Priority Support',
      'Automatic Ledger Creation',
      'Unlimited Imports',
      'Lifetime Updates',
    ],
    buttonText: 'Buy Now',
    buttonLink: '/contact',
  },
];

export default Pricing;