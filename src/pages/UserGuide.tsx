import React from 'react';
import { Book, Search, Lightbulb, Wrench, HelpCircle, Video } from 'lucide-react';
import { Link } from 'react-router-dom';

const UserGuide = () => {
  return (
    <div className="pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-extrabold text-gray-900 dark:text-white sm:text-5xl">
            User Guide
          </h1>
          <p className="mt-4 text-xl text-gray-600 dark:text-gray-400">
            Everything you need to know about Finacco Connect
          </p>
        </div>

        {/* Quick Links */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {quickLinks.map((link, index) => (
            <Link
              key={index}
              to={link.to}
              className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 group hover:scale-105"
            >
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-lg flex items-center justify-center group-hover:rotate-12 transition-transform duration-300">
                  <link.icon className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                    {link.title}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{link.description}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Main Content */}
        <div className="space-y-12">
          {sections.map((section, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 group"
            >
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-lg flex items-center justify-center group-hover:rotate-12 transition-transform duration-300">
                  <section.icon className="h-6 w-6 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                  {section.title}
                </h2>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                {section.topics.map((topic, topicIndex) => (
                  <div
                    key={topicIndex}
                    className="bg-gray-50 dark:bg-gray-700 rounded-xl p-6 group-hover:translate-x-2 transition-transform duration-300"
                  >
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                      {topic.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 mb-4">{topic.description}</p>
                    <Link
                      to={topic.link}
                      className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 flex items-center"
                    >
                      Learn more
                      <HelpCircle className="ml-2 h-4 w-4" />
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const quickLinks = [
  {
    title: 'Video Tutorials',
    description: 'Watch step-by-step guides',
    icon: Video,
    to: '/tutorials',
  },
  {
    title: 'Sample Templates',
    description: 'Download ready-to-use templates',
    icon: Book,
    to: '/templates',
  },
  {
    title: 'FAQs',
    description: 'Find quick answers',
    icon: HelpCircle,
    to: '/faq',
  },
];

const sections = [
  {
    title: 'Getting Started',
    icon: Lightbulb,
    topics: [
      {
        title: 'Installation Guide',
        description: 'Learn how to install and set up Finacco Connect',
        link: '/docs/installation',
      },
      {
        title: 'First Steps',
        description: 'Essential configuration and initial setup',
        link: '/docs/first-steps',
      },
    ],
  },
  {
    title: 'Basic Features',
    icon: Wrench,
    topics: [
      {
        title: 'Excel Templates',
        description: 'Create and customize Excel templates',
        link: '/docs/templates',
      },
      {
        title: 'Data Import',
        description: 'Import data from Excel to Tally',
        link: '/docs/import',
      },
    ],
  },
  {
    title: 'Advanced Topics',
    icon: Search,
    topics: [
      {
        title: 'Custom Mappings',
        description: 'Create advanced data mapping rules',
        link: '/docs/mappings',
      },
      {
        title: 'Automation',
        description: 'Automate routine import tasks',
        link: '/docs/automation',
      },
    ],
  },
];

export default UserGuide;