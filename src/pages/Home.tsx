import React from 'react';
import { Link } from 'react-router-dom';
import { Download, ArrowRight, CheckCircle2, FileSpreadsheet, MessageCircle, FileDown, Settings } from 'lucide-react';

const Home = () => {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-100 via-indigo-50 to-purple-50 dark:from-gray-900 dark:via-indigo-950 dark:to-purple-950 py-24">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-cyan-500 opacity-10"></div>
          <div className="absolute h-full w-full" style={{
            backgroundImage: "radial-gradient(circle at 1px 1px, rgba(0,0,0,0.1) 1px, transparent 0)",
            backgroundSize: "40px 40px"
          }}></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-12 lg:gap-8 flex flex-col-reverse lg:flex-row">
            <div className="text-center lg:text-left md:max-w-2xl md:mx-auto lg:col-span-6">
              <h1 className="text-3xl tracking-tight font-extrabold sm:text-4xl md:text-5xl lg:text-6xl mt-8 lg:mt-0">
                <span className="block text-gray-900 dark:text-white">Transform Your Financial Data</span>
              </h1>
              <p className="mt-3 text-sm sm:text-base text-gray-500 dark:text-gray-400 sm:mt-5 lg:text-lg xl:text-xl">
                Seamlessly integrate Excel with Tally Prime for efficient financial management
              </p>
              <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex items-center space-x-2 text-gray-600 dark:text-gray-300">
                  <CheckCircle2 className="h-5 w-5 text-emerald-500" />
                  <span>Automated Data Import</span>
                </div>
                <div className="flex items-center space-x-2 text-gray-600 dark:text-gray-300">
                  <CheckCircle2 className="h-5 w-5 text-emerald-500" />
                  <span>Smart Error Detection</span>
                </div>
                <div className="flex items-center space-x-2 text-gray-600 dark:text-gray-300">
                  <CheckCircle2 className="h-5 w-5 text-emerald-500" />
                  <span>Custom Templates</span>
                </div>
                <div className="flex items-center space-x-2 text-gray-600 dark:text-gray-300">
                  <CheckCircle2 className="h-5 w-5 text-emerald-500" />
                  <span>Real-time Sync</span>
                </div>
              </div>
              <div className="mt-8 sm:max-w-lg sm:mx-auto text-center lg:text-left">
                <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center lg:justify-start">
                  <Link
                    to="/download"
                    className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 transform hover:scale-105 transition-all w-full sm:w-auto"
                  >
                    <Download className="mr-2 h-5 w-5" />
                    Download Now
                  </Link>
                  <Link
                    to="/buy"
                    className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-gradient-to-r from-green-600 to-emerald-500 hover:from-green-700 hover:to-emerald-600 transform hover:scale-105 transition-all w-full sm:w-auto"
                  >
                    Buy Now
                  </Link>
                </div>
              </div>
            </div>
            <div className="mt-12 relative sm:max-w-lg sm:mx-auto lg:mt-0 lg:max-w-none lg:mx-0 lg:col-span-6 lg:flex lg:items-center">
              <img
                className="w-full rounded-lg shadow-xl"
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                alt="Data Management"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="relative group">
                {/* Decorative background */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-cyan-500/5 rounded-2xl transform group-hover:scale-105 transition-transform duration-300"></div>
                
                {/* Content */}
                <div className="relative p-6 text-center transform transition-all duration-300 group-hover:translate-y-[-5px]">
                  <div className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent mb-2 transform transition-all duration-300 group-hover:scale-110">
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400 font-medium">
                    {stat.label}
                  </div>
                  
                  {/* Decorative elements */}
                  <div className="absolute top-0 right-0 -mr-3 -mt-3 w-24 h-24 bg-gradient-to-br from-blue-500/10 to-cyan-500/10 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute bottom-0 left-0 -ml-3 -mb-3 w-24 h-24 bg-gradient-to-br from-blue-500/10 to-cyan-500/10 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="py-24 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 overflow-hidden">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-extrabold bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent sm:text-4xl">
              See It in Action
            </h2>
            <p className="mt-4 text-lg sm:text-xl text-gray-600 dark:text-gray-400">
              Watch how Finacco Connect transforms your financial workflow
            </p>
          </div>
          <div className="relative aspect-video rounded-xl overflow-hidden shadow-2xl transform hover:scale-[1.02] transition-all duration-300">
            <iframe
              className="absolute inset-0 w-full h-full"
              src="https://www.youtube.com/embed/your-video-id"
              title="Finacco Connect Demo"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-16 bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute h-full w-full" style={{
            backgroundImage: "radial-gradient(circle at 1px 1px, rgba(0,0,0,0.05) 1px, transparent 0)",
            backgroundSize: "40px 40px"
          }}></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-2xl sm:text-3xl font-extrabold bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent sm:text-4xl">
              How Finacco Connect Works
            </h2>
            <p className="mt-4 text-lg sm:text-xl text-gray-600 dark:text-gray-400">
              Simple steps to streamline your Tally Prime data management
            </p>
          </div>
          <div className="mt-16 grid gap-6 md:grid-cols-3">
            {steps.map((step, index) => (
              <div
                key={index}
                className="relative bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 transform transition-all duration-300 hover:scale-105 hover:shadow-xl group cursor-pointer overflow-hidden"
              >
                {/* Animated Background */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 to-cyan-500/5 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Decorative Elements */}
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-blue-600/10 to-cyan-500/10 rounded-bl-full transform translate-x-10 -translate-y-10 group-hover:translate-x-5 group-hover:-translate-y-5 transition-transform duration-300"></div>
                
                {/* Step Number */}
                <div className="relative mb-4">
                  <span className="absolute -left-2 -top-2 text-4xl font-bold text-blue-600/10 group-hover:text-blue-600/20 transition-colors duration-300">
                    {(index + 1).toString().padStart(2, '0')}
                  </span>
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-lg flex items-center justify-center transform group-hover:rotate-12 transition-transform duration-300">
                    <step.icon className="h-6 w-6 text-white" />
                  </div>
                </div>
                
                {/* Content */}
                <div className="relative">
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2 group-hover:translate-x-2 transition-transform duration-300">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed group-hover:translate-x-2 transition-transform duration-300 delay-75">
                    {step.description}
                  </p>
                </div>
                
                {/* Bottom Decoration */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 to-cyan-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
              </div>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <Link
              to="/how-it-works"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 transform hover:scale-105 transition-all"
            >
              Learn More
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-2xl sm:text-3xl font-extrabold bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent sm:text-4xl">
              Why Choose Finacco Connect?
            </h2>
          </div>
          <div className="mt-12 grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
            {features.map((feature, index) => (
              <div
                key={index}
                className="relative bg-gradient-to-br from-white to-gray-50 dark:from-gray-900 dark:to-gray-800 rounded-2xl shadow-lg p-6 transform transition-all duration-300 hover:scale-105 hover:shadow-xl group cursor-pointer overflow-hidden"
              >
                {/* Decorative Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 to-cyan-500/5 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Animated Corner Decoration */}
                <div className="absolute -top-10 -right-10 w-40 h-40 bg-gradient-to-br from-blue-600/10 to-cyan-500/10 rounded-full transform group-hover:scale-150 transition-transform duration-500"></div>
                
                {/* Icon Container */}
                <div className="relative mb-4">
                  <div className="w-14 h-14 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-xl flex items-center justify-center transform group-hover:rotate-12 transition-transform duration-300 shadow-lg">
                    <feature.icon className="h-8 w-8 text-white" />
                  </div>
                </div>
                
                {/* Content */}
                <div className="relative">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:translate-x-2 transition-transform duration-300">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {feature.description}
                  </p>
                </div>
                
                {/* Bottom Highlight */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 to-cyan-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom Navigation Panel */}
      <section className="bg-gradient-to-br from-gray-900 to-gray-800 dark:from-gray-950 dark:to-black text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-x-4 gap-y-8">
            {bottomPanels.map((panel, index) => (
              <div key={index} className="space-y-4 px-2">
                <div className="flex items-center space-x-2 mb-4">
                  <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-lg flex items-center justify-center transform transition-transform duration-300 group-hover:rotate-12">
                    <panel.icon className="h-5 w-5 text-white" />
                  </div>
                  <h3 className="text-base sm:text-lg font-bold text-white">
                    {panel.title}
                  </h3>
                </div>
                <ul className="space-y-3">
                  {panel.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <Link
                        to={link.to}
                        className="text-gray-400 hover:text-cyan-400 transition-colors duration-200 flex items-center group text-sm sm:text-base"
                      >
                        <span className="w-1 h-1 bg-gray-500 rounded-full mr-2 group-hover:bg-cyan-400 group-hover:w-2 transition-all duration-200"></span>
                        {link.text}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

const stats = [
  {
    value: '20+',
    label: 'Template Types',
  },
  {
    value: '100%',
    label: 'Tally Compatible',
  },
  {
    value: '<2min',
    label: 'Setup Time',
  },
  {
    value: 'Free',
    label: '14-Day Trial',
  },
];

const features = [
  {
    title: 'Excel to Tally Import',
    description: 'Import vouchers and masters seamlessly into Tally Prime with just a few clicks. Supports all voucher types.',
    icon: FileDown
  },
  {
    title: 'Customizable Columns',
    description: 'Choose specific columns and create custom Excel templates tailored to your needs. Save templates for future use.',
    icon: Settings
  },
  {
    title: 'Dropdown Ledger Selection',
    description: 'Select ledgers from existing options or let the system create them automatically. Smart ledger management.',
    icon: FileSpreadsheet
  },
  {
    title: 'Seamless Integration',
    description: 'Enjoy an intuitive interface designed for error-free data import and management. Real-time validation.',
    icon: MessageCircle
  },
];

const bottomPanels = [
  {
    title: 'Product',
    icon: FileSpreadsheet,
    links: [
      { text: 'Features', to: '/features' },
      { text: 'How It Works', to: '/how-it-works' },
      { text: 'Download', to: '/download' },
      { text: 'Pricing', to: '/pricing' },
    ],
  },
  {
    title: 'Support',
    icon: MessageCircle,
    links: [
      { text: 'FAQ', to: '/faq' },
      { text: 'Contact Us', to: '/contact' },
      { text: 'Documentation', to: '/docs' },
      { text: 'System Requirements', to: '/download#requirements' },
    ],
  },
  {
    title: 'Resources',
    icon: FileDown,
    links: [
      { text: 'User Guide', to: '/guide' },
      { text: 'Video Tutorials', to: '/tutorials' },
      { text: 'Sample Templates', to: '/templates' },
      { text: 'Updates', to: '/updates' },
    ],
  },
  {
    title: 'Company',
    icon: Settings,
    links: [
      { text: 'About Us', to: '/about' },
      { text: 'Terms of Service', to: '/terms' },
      { text: 'Privacy Policy', to: '/privacy' },
      { text: 'Login', to: '/login' },
    ],
  },
];

const steps = [
  {
    title: 'Launch & Connect',
    description: 'Open Finacco Connect, and it will instantly sync with your active Tally Prime company.',
    icon: CheckCircle2,
    image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
  },
  {
    title: 'Customize Your Excel',
    description: 'Choose the voucher type and select only the columns you need—fully customizable!',
    icon: CheckCircle2,
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
  },
  {
    title: 'Export Your Format',
    description: 'Generate a structured Excel template with your chosen columns, ready for data entry.',
    icon: CheckCircle2,
    image: 'https://images.unsplash.com/photo-1517292987719-0369a794ec0f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
  },
  {
    title: 'Smart Data Entry & Import',
    description: 'Enter data in Excel with dropdowns for Tally masters, then import it seamlessly into Tally Prime.',
    icon: CheckCircle2,
    image: 'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
  },
  {
    title: 'Error-Free Validation',
    description: 'Identify and fix errors before import—ensure accuracy with built-in validation checks.',
    icon: CheckCircle2,
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
  },
  {
    title: 'Undo & Reuse Templates',
    description: 'Modify or undo imports if needed. Save customized templates for future use and faster workflows.',
    icon: CheckCircle2,
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
  },
];

export default Home;