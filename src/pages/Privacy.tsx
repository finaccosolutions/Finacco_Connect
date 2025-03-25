import React from 'react';
import { Lock, Shield, Eye, Database, Server, UserCheck } from 'lucide-react';

const Privacy = () => {
  return (
    <div className="pt-24 pb-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-extrabold text-gray-900 dark:text-white sm:text-5xl">
            Privacy Policy
          </h1>
          <p className="mt-4 text-xl text-gray-600 dark:text-gray-400">
            Your privacy is our top priority
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
              <div className="space-y-4">
                {section.content.map((item, idx) => (
                  <div
                    key={idx}
                    className="group-hover:translate-x-2 transition-transform duration-300"
                  >
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                      {item.subtitle}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 rounded-xl p-8">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Contact Us About Privacy
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            If you have any questions about our privacy practices, please don't hesitate to contact us:
          </p>
          <div className="space-y-2">
            <p className="text-gray-600 dark:text-gray-400">
              Email:{' '}
              <a
                href="mailto:support@finaccosolutions.com"
                className="text-blue-600 hover:underline"
              >
                support@finaccosolutions.com
              </a>
            </p>
            <p className="text-gray-600 dark:text-gray-400">
              Phone: +91 974 552 4438
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

const sections = [
  {
    title: 'Data Collection',
    icon: Database,
    content: [
      {
        subtitle: 'What We Collect',
        description: 'We collect basic account information, usage data, and any data you choose to import through our software.',
      },
      {
        subtitle: 'How We Use It',
        description: 'Your data is used solely for providing and improving our services, and to communicate important updates.',
      },
    ],
  },
  {
    title: 'Data Security',
    icon: Shield,
    content: [
      {
        subtitle: 'Protection Measures',
        description: 'We employ industry-standard encryption and security protocols to protect your data.',
      },
      {
        subtitle: 'Access Controls',
        description: 'Strict access controls and authentication measures are in place to prevent unauthorized access.',
      },
    ],
  },
  {
    title: 'Data Storage',
    icon: Server,
    content: [
      {
        subtitle: 'Local Processing',
        description: 'Your Tally data is processed locally on your machine and is never uploaded to our servers.',
      },
      {
        subtitle: 'Backup & Recovery',
        description: 'We recommend maintaining regular backups of your data according to your company\'s policies.',
      },
    ],
  },
  {
    title: 'User Rights',
    icon: UserCheck,
    content: [
      {
        subtitle: 'Your Controls',
        description: 'You have full control over your data, including the right to access, modify, or delete it.',
      },
      {
        subtitle: 'Data Portability',
        description: 'You can export your data at any time in standard formats.',
      },
    ],
  },
];

export default Privacy;