import React from 'react';
import { CheckCircle } from 'lucide-react';

const features = [
  'In-depth requirement gathering',
  'Strict candidate selection and interviews',
  'Thorough background verification and checks',
  'Seamless onboarding experience',
];

const StaffingSolutions = () => {
  return (
    <section id="staffing-solutions" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-gray-900">Find the Perfect Candidate</h2>
            <p className="mt-4 text-lg text-gray-600">
              Our staffing solutions help product-based companies hire the best talent through
              rigorous shortlisting, background checks, and onboarding processes to ensure
              quality and reliability.
            </p>
            
            <div className="mt-8 space-y-4">
              {features.map((feature) => (
                <div key={feature} className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0" />
                  <span className="ml-3 text-gray-600">{feature}</span>
                </div>
              ))}
            </div>

            <button className="mt-8 bg-blue-600 text-white px-8 py-3 rounded-full hover:bg-blue-700 transition-colors">
              Get Staffing Solutions
            </button>
          </div>

          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=800&q=80"
              alt="Team meeting"
              className="rounded-lg shadow-xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default StaffingSolutions;