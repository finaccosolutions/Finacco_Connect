import React from 'react';
import { RefreshCw, CheckCircle, AlertCircle, Calendar } from 'lucide-react';

const Updates = () => {
  return (
    <div className="pt-24 pb-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-extrabold text-gray-900 dark:text-white sm:text-5xl">
            Updates & Releases
          </h1>
          <p className="mt-4 text-xl text-gray-600 dark:text-gray-400">
            Stay up to date with the latest improvements and features
          </p>
        </div>

        <div className="space-y-12">
          {versions.map((version, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 group"
            >
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-lg flex items-center justify-center group-hover:rotate-12 transition-transform duration-300">
                    <RefreshCw className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                      Version {version.number}
                    </h2>
                    <div className="flex items-center space-x-2 mt-1">
                      <Calendar className="h-4 w-4 text-gray-500 dark:text-gray-400" />
                      <span className="text-sm text-gray-500 dark:text-gray-400">
                        {version.date}
                      </span>
                    </div>
                  </div>
                </div>
                <span className={`px-4 py-1 rounded-full text-sm ${
                  version.status === 'Latest'
                    ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200'
                    : 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-200'
                }`}>
                  {version.status}
                </span>
              </div>

              <div className="space-y-6">
                {version.categories.map((category, catIndex) => (
                  <div key={catIndex} className="space-y-4">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                      {category.title}
                    </h3>
                    <ul className="space-y-3">
                      {category.items.map((item, itemIndex) => (
                        <li
                          key={itemIndex}
                          className="flex items-start space-x-3 group-hover:translate-x-2 transition-transform duration-300"
                        >
                          {item.type === 'new' ? (
                            <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                          ) : (
                            <AlertCircle className="h-5 w-5 text-blue-500 flex-shrink-0 mt-0.5" />
                          )}
                          <span className="text-gray-600 dark:text-gray-400">
                            {item.description}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>

              {version.downloadLink && (
                <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-700">
                  <a
                    href={version.downloadLink}
                    className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-500 text-white rounded-lg hover:from-blue-700 hover:to-cyan-600 transform hover:scale-105 transition-all duration-300"
                  >
                    <RefreshCw className="h-5 w-5 mr-2" />
                    Download this version
                  </a>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const versions = [
  {
    number: '1.0.1',
    date: 'February 1, 2025',
    status: 'Latest',
    categories: [
      {
        title: 'New Features',
        items: [
          {
            type: 'new',
            description: 'Advanced template customization with drag-and-drop interface',
          },
          {
            type: 'new',
            description: 'Automated data validation rules',
          },
          {
            type: 'new',
            description: 'Bulk import functionality for multiple files',
          },
        ],
      },
      {
        title: 'Improvements',
        items: [
          {
            type: 'improvement',
            description: 'Enhanced performance for large data sets',
          },
          {
            type: 'improvement',
            description: 'Updated user interface for better accessibility',
          },
        ],
      },
    ],
    downloadLink: '#',
  },
  {
    number: '1.0.0',
    date: 'January 1, 2025',
    status: 'Stable',
    categories: [
      {
        title: 'Major Changes',
        items: [
          {
            type: 'new',
            description: 'Complete redesign of the user interface',
          },
          {
            type: 'new',
            description: 'New template management system',
          },
        ],
      },
      {
        title: 'Bug Fixes',
        items: [
          {
            type: 'improvement',
            description: 'Fixed memory usage issues with large files',
          },
          {
            type: 'improvement',
            description: 'Resolved compatibility issues with latest Tally version',
          },
        ],
      },
    ],
    downloadLink: '#',
  },
];

export default Updates;