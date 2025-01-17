import React from 'react';
import { Building2, Factory, LineChart, ShoppingCart, Truck, Users } from 'lucide-react';

const industries = [
  {
    icon: Factory,
    title: 'Manufacturing',
    description: 'Optimize production lines and inventory management with AI-driven insights.'
  },
  {
    icon: Truck,
    title: 'Logistics',
    description: 'Enhance supply chain efficiency with predictive analytics and route optimization.'
  },
  {
    icon: ShoppingCart,
    title: 'Retail',
    description: 'Improve inventory forecasting and customer experience with smart analytics.'
  },
  {
    icon: Building2,
    title: 'Real Estate',
    description: 'Make data-driven property investment and management decisions.'
  }
];

export default function Solutions() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-[#FFF4B8] to-white pt-20 pb-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              Industry Solutions
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Discover how ArT can transform your industry with AI-powered
              decision making solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Industries Grid */}
      <section className="py-20 bg-white -mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {industries.map((industry, index) => (
              <div
                key={index}
                className="p-8 bg-white rounded-lg border border-gray-100 hover:border-[#FFD700] transition-colors"
              >
                <industry.icon className="h-12 w-12 text-[#FFD700] mb-4" />
                <h3 className="text-2xl font-semibold mb-4">{industry.title}</h3>
                <p className="text-gray-600 mb-6">{industry.description}</p>
                <button className="text-[#FFD700] font-medium hover:text-[#FFD700]/80 transition-colors">
                  Learn more →
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ROI Section */}
      <section className="py-20 bg-[#FAFAFA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Proven ROI Across Industries
              </h2>
              <p className="text-gray-600 mb-8">
                Our clients see significant returns on their investment through
                improved efficiency, reduced costs, and better decision making.
              </p>
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <LineChart className="h-8 w-8 text-[#FFD700]" />
                  <div>
                    <h4 className="font-semibold">30% Cost Reduction</h4>
                    <p className="text-gray-600">In supply chain operations</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <Users className="h-8 w-8 text-[#FFD700]" />
                  <div>
                    <h4 className="font-semibold">25% Productivity Increase</h4>
                    <p className="text-gray-600">In team performance</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
                alt="ROI Analytics"
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Implementation Process */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Implementation Process
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our streamlined implementation process ensures a smooth transition
              and quick time-to-value.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {['Discovery', 'Planning', 'Integration', 'Launch'].map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-12 h-12 bg-[#FFD700] rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-black font-bold">{index + 1}</span>
                </div>
                <h3 className="font-semibold mb-2">{step}</h3>
                <div className="h-1 bg-[#FFD700] mt-4"></div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}