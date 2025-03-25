import React from 'react';
import { Shield, Clock, FileText, AlertCircle } from 'lucide-react';

const Terms = () => {
  return (
    <div className="pt-24 pb-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-extrabold text-gray-900 dark:text-white sm:text-5xl">
            Terms of Service
          </h1>
          <p className="mt-4 text-xl text-gray-600 dark:text-gray-400">
            Last updated: March 15, 2024
          </p>
        </div>

        <div className="space-y-8">
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
              <div className="space-y-4 text-gray-600 dark:text-gray-400">
                {section.content.map((paragraph, idx) => (
                  <p key={idx} className="group-hover:translate-x-2 transition-transform duration-300">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-blue-50 dark:bg-blue-900/20 rounded-xl p-6">
          <div className="flex items-center space-x-4 mb-4">
            <AlertCircle className="h-6 w-6 text-blue-600" />
            <h2 className="text-xl font-bold text-blue-900 dark:text-blue-400">
              Questions About Our Terms?
            </h2>
          </div>
          <p className="text-blue-800 dark:text-blue-300">
            If you have any questions about these terms, please contact us at{' '}
            <a
              href="mailto:support@finaccosolutions.com"
              className="underline hover:text-blue-600 dark:hover:text-blue-400"
            >
              support@finaccosolutions.com
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

const sections = [
  {
    title: 'License & Usage',
    icon: Shield,
    content: [
      'By purchasing Finacco Connect, you are granted a non-exclusive, non-transferable license to use the software for your business purposes.',
      'This license is valid for the number of users specified in your subscription plan.',
      'You may not redistribute, sell, lease, license, or sublicense the software.',
    ],
  },
  {
    title: 'Updates & Support',
    icon: Clock,
    content: [
      'We provide regular updates to improve functionality and security.',
      'Technical support is available during business hours via email and phone.',
      'Premium support plans include priority response times and dedicated support channels.',
    ],
  },
  {
    title: 'Data & Privacy',
    icon: FileText,
    content: [
      'We respect your privacy and handle all data in accordance with our Privacy Policy.',
      'Your data remains your property and is never shared with third parties without consent.',
      'We implement industry-standard security measures to protect your information.',
    ],
  },
];

export default Terms;