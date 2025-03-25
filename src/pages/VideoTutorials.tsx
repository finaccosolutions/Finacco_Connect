import React from 'react';
import { Play, Clock, Tag, Star } from 'lucide-react';

const VideoTutorials = () => {
  return (
    <div className="pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-extrabold text-gray-900 dark:text-white sm:text-5xl">
            Video Tutorials
          </h1>
          <p className="mt-4 text-xl text-gray-600 dark:text-gray-400">
            Learn Finacco Connect through our comprehensive video guides
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

        {/* Video Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {tutorials.map((tutorial, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg group hover:shadow-2xl transition-all duration-300 hover:scale-105"
            >
              {/* Thumbnail */}
              <div className="relative">
                <img
                  src={tutorial.thumbnail}
                  alt={tutorial.title}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <Play className="h-12 w-12 text-white" />
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-center space-x-2 mb-3">
                  <Tag className="h-4 w-4 text-blue-600" />
                  <span className="text-sm text-blue-600 dark:text-blue-400">
                    {tutorial.category}
                  </span>
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  {tutorial.title}
                </h3>
                
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  {tutorial.description}
                </p>

                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2 text-gray-500 dark:text-gray-400">
                    <Clock className="h-4 w-4" />
                    <span className="text-sm">{tutorial.duration}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Star className="h-4 w-4 text-yellow-400" />
                    <span className="text-sm text-gray-600 dark:text-gray-400">
                      {tutorial.rating}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const categories = [
  'All Tutorials',
  'Getting Started',
  'Basic Features',
  'Advanced Topics',
  'Tips & Tricks',
];

const tutorials = [
  {
    title: 'Quick Start Guide',
    description: 'Learn the basics of Finacco Connect in under 10 minutes',
    thumbnail: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    category: 'Getting Started',
    duration: '8:45',
    rating: '4.9',
  },
  {
    title: 'Creating Custom Templates',
    description: 'Master the art of creating and customizing Excel templates',
    thumbnail: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    category: 'Basic Features',
    duration: '12:30',
    rating: '4.8',
  },
  {
    title: 'Advanced Data Mapping',
    description: 'Learn advanced techniques for complex data mapping scenarios',
    thumbnail: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    category: 'Advanced Topics',
    duration: '15:20',
    rating: '4.7',
  },
  {
    title: 'Automation Workflows',
    description: 'Set up automated import processes for recurring tasks',
    thumbnail: 'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    category: 'Advanced Topics',
    duration: '18:15',
    rating: '4.9',
  },
  {
    title: 'Error Handling',
    description: 'Learn how to troubleshoot and resolve common issues',
    thumbnail: 'https://images.unsplash.com/photo-1517292987719-0369a794ec0f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    category: 'Tips & Tricks',
    duration: '10:45',
    rating: '4.8',
  },
  {
    title: 'Best Practices',
    description: 'Essential tips for efficient data management',
    thumbnail: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    category: 'Tips & Tricks',
    duration: '14:30',
    rating: '4.9',
  },
];

export default VideoTutorials;