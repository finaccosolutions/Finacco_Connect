import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleQuestion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="pt-24 pb-16">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-extrabold text-gray-900 dark:text-white sm:text-5xl">
            Frequently Asked Questions
          </h1>
          <p className="mt-4 text-xl text-gray-600 dark:text-gray-400">
            Everything you need to know about Finacco Connect
          </p>
        </div>

        <div className="mt-12 space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 group"
            >
              <button
                className="w-full px-6 py-4 flex justify-between items-center focus:outline-none group-hover:bg-gray-50 dark:group-hover:bg-gray-700 transition-all duration-300"
                onClick={() => toggleQuestion(index)}
              >
                <span className="text-lg font-medium text-gray-900 dark:text-white">
                  {faq.question}
                </span>
                {openIndex === index ? (
                  <ChevronUp className="h-5 w-5 text-gray-500" />
                ) : (
                  <ChevronDown className="h-5 w-5 text-gray-500" />
                )}
              </button>
              {openIndex === index && (
                <div className="px-6 pb-4">
                  <p className="text-gray-600 dark:text-gray-400">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const faqs = [
  {
    question: "What is Finacco Connect?",
    answer: "Finacco Connect is a software solution that simplifies data management between Excel and Tally Prime. It allows you to import vouchers and masters seamlessly, customize Excel templates, and manage your data efficiently.",
  },
  {
    question: "How do I install Finacco Connect?",
    answer: "Download the software from our website, run the installer, and follow the setup wizard. Make sure you have Tally Prime installed before setting up Finacco Connect.",
  },
  {
    question: "Can I customize the Excel template?",
    answer: "Yes, you can fully customize your Excel templates. Choose specific columns from available Tally options, remove unnecessary columns, and save your customizations for future use.",
  },
  {
    question: "What happens if I make a mistake during import?",
    answer: "Finacco Connect includes an undo feature that allows you to reverse any import. This helps you correct mistakes quickly without affecting your Tally data.",
  },
  {
    question: "Do I need to create ledgers manually?",
    answer: "No, Finacco Connect can automatically create ledgers during the import process if they don't exist in Tally. You can also select from existing ledgers using the dropdown feature.",
  },
  {
    question: "Is my data secure during the import process?",
    answer: "Yes, Finacco Connect maintains data integrity throughout the import process. It works directly with your local Tally installation and doesn't store any sensitive information.",
  },
];

export default FAQ;