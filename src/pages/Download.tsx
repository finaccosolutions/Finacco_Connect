import React from 'react';
import { Download, Monitor, Cpu, Database } from 'lucide-react';

const DownloadPage = () => {
  return (
    <div className="pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-extrabold text-gray-900 dark:text-white sm:text-5xl">
            Download Finacco Connect
          </h1>
          <p className="mt-4 text-xl text-gray-600 dark:text-gray-400">
            Get started with seamless Tally Prime data management
          </p>
        </div>

        <div className="mt-12">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8">
            <div className="flex flex-col items-center">
              <Download className="h-16 w-16 text-blue-600 mb-6" />
              <a
                href="https://finaccosolutions.com/connect/download/Finacco_Setup.exe"
                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
              >
                <Download className="mr-2 h-5 w-5" />
                Download Now
              </a>
              <p className="mt-4 text-sm text-gray-500 dark:text-gray-400">
                Version 1.2.0.0 | Windows x64
              </p>
            </div>

            <div className="mt-12">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                System Requirements
              </h2>
              <div className="grid gap-6 md:grid-cols-3">
                {requirements.map((req, index) => (
                  <div
                    key={index}
                    className="flex items-start space-x-4 p-4 bg-gray-50 dark:bg-gray-700 rounded-lg"
                  >
                    <req.icon className="h-6 w-6 text-blue-600 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-gray-900 dark:text-white">
                        {req.title}
                      </h3>
                      <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
                        {req.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const requirements = [
  {
    title: 'Operating System',
    description: 'Windows 10 or later (64-bit)',
    icon: Monitor,
  },
  {
    title: 'Processor & RAM',
    description: 'Intel Core i3 or better, 4GB RAM for best performance',
    icon: Cpu,
  },
  {
    title: 'Software',
    description: 'Tally Prime',
    icon: Database,
  },
];

export default DownloadPage;