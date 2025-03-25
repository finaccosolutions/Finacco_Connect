import React from 'react';
import { CheckCircle2 } from 'lucide-react';

const Features = () => {
  return (
    <div className="pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-extrabold text-gray-900 dark:text-white sm:text-5xl">
            Features
          </h1>
          <p className="mt-4 text-xl text-gray-600 dark:text-gray-400">
            Everything you need to manage your Tally Prime data efficiently
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 hover:shadow-2xl transition-all duration-300 hover:scale-105 group"
            >
              <div className="flex items-center mb-4 group-hover:translate-x-2 transition-transform duration-300">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-lg flex items-center justify-center group-hover:rotate-12 transition-transform duration-300">
                  <CheckCircle2 className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  {feature.title}
                </h3>
              </div>
              <p className="text-gray-600 dark:text-gray-400">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const features = [
  {
    title: 'Excel to Tally Import',
    description: 'Import vouchers and masters seamlessly into Tally Prime. Support for sales, purchases, expenses, income, and more.',
  },
  {
    title: 'Customizable Columns',
    description: 'Choose specific columns from available Tally options. Remove or reorder columns to match your needs.',
  },
  {
    title: 'Excel Template Creation',
    description: 'Create and save custom Excel templates with your preferred column selection for future use.',
  },
  {
    title: 'Smart Ledger Management',
    description: 'Select ledgers from existing options or let the system create them automatically during import.',
  },
  {
    title: 'Error-Free Integration',
    description: 'Smooth, intuitive interface ensures accurate data transfer between Excel and Tally.',
  },
  {
    title: 'Undo Functionality',
    description: 'Easily reverse imports with our undo feature to correct any mistakes quickly.',
  },
];

export default Features;