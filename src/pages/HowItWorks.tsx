import React from 'react';
import { FileText, Settings, FileDown, Upload, Undo2, Save, HelpCircle } from 'lucide-react';

const HowItWorks = () => {
  return (
    <div className="pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-extrabold text-gray-900 dark:text-white sm:text-5xl">
            How Finacco Connect Works
          </h1>
          <p className="mt-4 text-xl text-gray-600 dark:text-gray-400">
            Simple steps to streamline your Tally Prime data management
          </p>
        </div>

        <div className="space-y-24">
          {steps.map((step, index) => (
            <div key={index} className="relative group/panel">
              {/* Connector Line */}
              {index < steps.length - 1 && (
                <div className="absolute left-1/2 transform -translate-x-1/2 translate-y-full h-24 w-px bg-gradient-to-b from-blue-500 to-transparent group-hover/panel:from-cyan-500" />
              )}
              
              <div className="grid md:grid-cols-2 gap-8 items-center bg-white/50 dark:bg-gray-800/50 rounded-2xl p-8 transition-all duration-500 group-hover/panel:bg-white/80 dark:group-hover/panel:bg-gray-800/80 group-hover/panel:shadow-2xl group-hover/panel:scale-[1.02]">
                <div className={`space-y-6 ${index % 2 === 0 ? 'md:order-1' : 'md:order-2'} transition-all duration-500`}>
                  <div className="flex items-center space-x-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-lg flex items-center justify-center transform transition-all duration-500 group-hover/panel:rotate-12 group-hover/panel:scale-110">
                        <step.icon className="h-6 w-6 text-white" />
                      </div>
                    </div>
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white transition-all duration-500 group-hover/panel:translate-x-2">
                      Step {index + 1}: {step.title}
                    </h2>
                  </div>
                  
                  <p className="text-lg text-gray-600 dark:text-gray-400 transition-all duration-500 group-hover/panel:translate-x-2">
                    {step.description}
                  </p>
                  
                  <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 space-y-4 transition-all duration-500 group-hover/panel:shadow-lg group-hover/panel:bg-gray-100 dark:group-hover/panel:bg-gray-700">
                    <h3 className="font-semibold text-gray-900 dark:text-white">
                      Detailed Instructions:
                    </h3>
                    <ul className="space-y-3">
                      {step.instructions.map((instruction, idx) => (
                        <li key={idx} className="flex items-start space-x-3 transition-all duration-500 group-hover/panel:translate-x-2">
                          <HelpCircle className="h-5 w-5 text-blue-500 flex-shrink-0 mt-0.5 transition-transform duration-500 group-hover/panel:translate-x-1" />
                          <span className="text-gray-600 dark:text-gray-400">{instruction}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  {step.tips && (
                    <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-6 transition-all duration-500 group-hover/panel:shadow-lg group-hover/panel:bg-blue-100 dark:group-hover/panel:bg-blue-900/30">
                      <h3 className="font-semibold text-blue-900 dark:text-blue-400 mb-3">
                        Pro Tips:
                      </h3>
                      <ul className="space-y-2">
                        {step.tips.map((tip, idx) => (
                          <li key={idx} className="text-blue-800 dark:text-blue-300 text-sm transition-all duration-500 group-hover/panel:translate-x-2">
                            • {tip}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
                
                <div className={index % 2 === 0 ? 'md:order-2' : 'md:order-1'}>
                  <div className="relative">
                    <div className="absolute -inset-2 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-xl blur opacity-20 group-hover/panel:opacity-40 group-hover/panel:scale-105 transition-all duration-500"></div>
                    <img
                      src={step.image}
                      alt={step.title}
                      className="relative rounded-lg shadow-xl transform transition-all duration-500 group-hover/panel:scale-[1.02] group-hover/panel:shadow-2xl w-full"
                    />
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

const steps = [
  {
    title: 'Open Software & Tally',
    description: 'Start Finacco Connect and Tally Prime to establish a seamless connection.',
    icon: FileText,
    image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    instructions: [
      'Launch Tally Prime and keep it running in the background.',
      'Open Finacco Connect—it will automatically connect with Tally Prime.',
      'Check the bottom panel for the company name to confirm the connection.'
    ],
    tips: [
      'Keep Tally Prime open throughout the process',
      'Ensure your internet connection is active on the first launch'
    ]
  },
  {
    title: 'Customize Excel Template',
    description: 'Create your perfect Excel template by selecting the required voucher type and customizing the columns according to your needs.',
    icon: Settings,
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    instructions: [
      'At the top of the software, you will see all available voucher types.',
      'Select the voucher you need (Sales, Purchase, Journal, etc.).',
      'From the left panel, pick the column names you want to add to your Excel template.',
      'The selected columns will automatically appear in the right-side data grid.',
      'In the right-side data grid, you can reorder columns as needed by dragging them into your preferred position.'
    ],
    tips: [
      'Tick the checkbox in the left side panel for add data to template',
      'Uncheck the box to remove a column from the template',
      'Choose multiple voucher types if needed'
    ]
  },
  {
    title: 'Export Excel Format',
    description: 'Generate Excel sheets with your customized structure, ready for data entry. You can create multiple sheets for different voucher types at once.',
    icon: FileDown,
    image: 'https://images.unsplash.com/photo-1517292987719-0369a794ec0f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    instructions: [
      'Choose multiple voucher types if needed.',
      'Click "Export Excel Format" after customization',
      'Verify Template before exporting excel format'
    ],
    tips: [
      '"Export Excel Format" button is on right panel',
      'Confirm required check boxes are ticked'
    ]
  },
  {
    title: 'Fill & Import to Tally',
    description: 'Enter your data into the Excel template and import it directly into Tally Prime with just a few clicks.',
    icon: Upload,
    image: 'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    instructions: [
      'Fill in the required data following the column structure',
      'Save the completed Excel file',
      'Click "Open Excel File" in Finacco Connect',
      'Select excel file from the window',
      'Review the data preview before final import',
      'Click "Import to Tally" in Finacco Connect'
    ],
    tips: [
      '"Open Excel File" button is on right panel',
      '"Import to Tally" button is on right panel',
      'Keep a backup of your Tally data'
    ]
  },
  {
    title: 'Undo Option',
    description: 'Made a mistake? No problem! Use our powerful undo feature to reverse imports and make necessary corrections.',
    icon: Undo2,
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    instructions: [
      'Click "Undo Import" on the right panel',
      'Confirm the undo action',
      'Verify the changes in Tally Prime'
    ],
    tips: [
      'Review the import summary before confirming undo'
    ]
  },
  {
    title: 'Save Customization',
    description: 'Save time by storing your customized templates for future use, making regular imports faster and more efficient.',
    icon: Save,
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    instructions: [
      'Click "Save Template" after customization',
      'Give your template a descriptive name',
      'Access saved templates from the template library'
    ],
    tips: [
      'Use clear naming conventions for templates',
      'Regularly review and update saved templates'
    ]
  }
];

export default HowItWorks;