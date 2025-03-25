import React from 'react';
import { Book, Search, Code, Terminal, Database, Settings, ArrowRight } from 'lucide-react';

const Documentation = () => {
  return (
    <div className="pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-extrabold text-gray-900 dark:text-white sm:text-5xl">
            Documentation
          </h1>
          <p className="mt-4 text-xl text-gray-600 dark:text-gray-400">
            Comprehensive guides and technical documentation
          </p>
        </div>

        {/* Search Bar */}
        <div className="max-w-2xl mx-auto mb-16">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search documentation..."
              className="w-full pl-12 pr-4 py-3 rounded-xl bg-white dark:bg-gray-800 shadow-lg focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 outline-none transition-shadow duration-300"
            />
          </div>
        </div>

        {/* Documentation Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {sections.map((section, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-lg group hover:shadow-2xl transition-all duration-300 hover:scale-105"
            >
              <div className="p-6">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-lg flex items-center justify-center mb-6 group-hover:rotate-12 transition-transform duration-300">
                  <section.icon className="h-6 w-6 text-white" />
                </div>

                <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                  {section.title}
                </h2>

                <p className="text-gray-600 dark:text-gray-400 mb-6">
                  {section.description}
                </p>

                <ul className="space-y-3">
                  {section.topics.map((topic, topicIndex) => (
                    <li
                      key={topicIndex}
                      className="group/item hover:bg-gray-50 dark:hover:bg-gray-700 rounded-lg transition-colors duration-300"
                    >
                      <a
                        href={topic.link}
                        className="flex items-center justify-between p-2"
                      >
                        <span className="text-gray-700 dark:text-gray-300">
                          {topic.title}
                        </span>
                        <ArrowRight className="h-4 w-4 text-gray-400 group-hover/item:text-blue-500 transform group-hover/item:translate-x-1 transition-all duration-300" />
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Quick Help */}
        <div className="mt-16 bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-gray-800 dark:to-gray-700 rounded-2xl p-8">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Need Help?
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mb-6">
            Can't find what you're looking for? Our support team is here to help.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="/contact"
              className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-300"
            >
              Contact Support
            </a>
            <a
              href="/faq"
              className="inline-flex items-center px-6 py-3 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-300"
            >
              View FAQs
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

const sections = [
  {
    title: 'Getting Started',
    description: 'Essential information to get up and running quickly',
    icon: Book,
    topics: [
      { title: 'Installation Guide', link: '/docs/installation' },
      { title: 'Quick Start Tutorial', link: '/docs/quick-start' },
      { title: 'System Requirements', link: '/docs/requirements' },
    ],
  },
  {
    title: 'Core Concepts',
    description: 'Understanding the fundamental concepts and architecture',
    icon: Code,
    topics: [
      { title: 'Data Structure', link: '/docs/data-structure' },
      { title: 'Template System', link: '/docs/templates' },
      { title: 'Integration Basics', link: '/docs/integration' },
    ],
  },
  {
    title: 'Advanced Features',
    description: 'Detailed documentation of advanced functionality',
    icon: Terminal,
    topics: [
      { title: 'Custom Mappings', link: '/docs/mappings' },
      { title: 'Automation Rules', link: '/docs/automation' },
      { title: 'Error Handling', link: '/docs/error-handling' },
    ],
  },
  {
    title: 'Data Management',
    description: 'Learn about data handling and organization',
    icon: Database,
    topics: [
      { title: 'Data Import/Export', link: '/docs/data-transfer' },
      { title: 'Backup & Recovery', link: '/docs/backup' },
      { title: 'Data Validation', link: '/docs/validation' },
    ],
  },
  {
    title: 'Configuration',
    description: 'Customize and configure the software',
    icon: Settings,
    topics: [
      { title: 'General Settings', link: '/docs/settings' },
      { title: 'User Preferences', link: '/docs/preferences' },
      { title: 'Advanced Config', link: '/docs/advanced-config' },
    ],
  },
];

export default Documentation;