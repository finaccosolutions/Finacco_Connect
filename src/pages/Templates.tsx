import React from 'react';
import { FileDown, FileText, Download, Star } from 'lucide-react';

const Templates = () => {
  return (
    <div className="pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-extrabold text-gray-900 dark:text-white sm:text-5xl">
            Sample Templates
          </h1>
          <p className="mt-4 text-xl text-gray-600 dark:text-gray-400">
            Download ready-to-use Excel templates for various business needs
          </p>
        </div>

        {/* Categories */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category, index) => (
            <button
              key={index}
              className="px-6 py-2 rounded-full bg-white dark:bg-gray-800 shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105 text-gray-700 dark:text-gray-300"
            >
              {category}
            </button>
          ))}
        </div>

        {/* Templates Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {templates.map((template, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-lg group hover:shadow-2xl transition-all duration-300 hover:scale-105"
            >
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-lg flex items-center justify-center group-hover:rotate-12 transition-transform duration-300">
                    <FileText className="h-6 w-6 text-white" />
                  </div>
                  <div className="flex items-center space-x-1">
                    <Star className="h-4 w-4 text-yellow-400" />
                    <span className="text-sm text-gray-600 dark:text-gray-400">
                      {template.rating}
                    </span>
                  </div>
                </div>

                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  {template.title}
                </h3>

                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  {template.description}
                </p>

                <div className="space-y-3">
                  <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                    <FileDown className="h-4 w-4 mr-2" />
                    Downloads: {template.downloads}
                  </div>
                  <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                    <Star className="h-4 w-4 mr-2" />
                    Compatibility: {template.compatibility}
                  </div>
                </div>

                <button className="mt-6 w-full bg-gradient-to-r from-blue-600 to-cyan-500 text-white px-4 py-2 rounded-lg flex items-center justify-center group-hover:from-blue-700 group-hover:to-cyan-600 transition-all duration-300">
                  <Download className="h-5 w-5 mr-2" />
                  Download Template
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const categories = [
  'All Templates',
  'Sales Vpucher',
  'Purchase Voucher',
  'Stock Items',
  'Ledger Mater',
  'Custom',
];

const templates = [
  {
    title: 'Sales Invoice Template',
    description: 'Complete sales invoice template with tax calculations and item details',
    downloads: '',
    compatibility: 'All Versions',
    rating: '',
  },
  {
    title: 'Purchase Invoice Template',
    description: 'Standardized purchase template',
    downloads: '',
    compatibility: 'All Versions',
    rating: '',
  },
  {
    title: 'Stock Item Master',
    description: 'Create stock items',
    downloads: '',
    compatibility: 'All Versions',
    rating: '',
  },
  {
    title: 'Journal Entries',
    description: 'Multi-entry journal voucher template with automatic balancing',
    downloads: '',
    compatibility: 'All Versions',
    rating: '',
  },
  {
    title: 'Payment Voucher',
    description: 'Payment voucher template with multiple payment modes',
    downloads: '',
    compatibility: 'All Versions',
    rating: '',
  },
  {
    title: 'Custom Template Builder',
    description: 'Start with a blank template and customize as needed',
    downloads: '',
    compatibility: 'All Versions',
    rating: '',
  },
];

export default Templates;