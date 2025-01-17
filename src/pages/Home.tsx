import React from 'react';
import { ArrowRight, Brain, Cpu, LineChart, MessageSquare, Shield, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

const features = [
  {
    icon: Brain,
    title: 'Autonomous Problem Solving',
    description: 'Our AI agents autonomously identify business challenges and propose optimized solutions without requiring expert intervention.'
  },
  {
    icon: MessageSquare,
    title: 'Advanced Language Processing',
    description: 'Leveraging state-of-the-art language models to understand complex business contexts and communicate solutions effectively.'
  },
  {
    icon: Sparkles,
    title: 'Intelligent Optimization',
    description: 'Automated operations research methods that continuously improve business processes and decision-making.'
  }
];

export default function Home() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-[#FFF4B8] to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-28">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Meet <span className="text-[#FFD700]">ArT</span>
              <br />
              Your Autonomous AI Strategist
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Experience the future of business optimization with our self-driving AI agents.
              No experts needed – just connect ArT to your data and watch it transform your operations.
            </p>
            <div className="flex justify-center space-x-4">
              <button className="bg-[#FFD700] text-black px-8 py-3 rounded-md font-medium hover:bg-[#FFF4B8] transition-colors inline-flex items-center">
                Start Optimizing <ArrowRight className="ml-2 h-5 w-5" />
              </button>
              <Link
                to="/product"
                className="bg-white text-gray-900 px-8 py-3 rounded-md font-medium border border-gray-200 hover:border-[#FFD700] transition-colors"
              >
                See ArT in Action
              </Link>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white to-transparent"></div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Autonomous Business Intelligence
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              ArT combines advanced language models with operations research to deliver
              automated business optimization without requiring expert guidance.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="p-6 bg-white rounded-lg border border-gray-100 hover:border-[#FFD700] transition-colors"
              >
                <feature.icon className="h-12 w-12 text-[#FFD700] mb-4" />
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="bg-[#FAFAFA] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              How ArT Works
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our AI agents work autonomously to optimize your business operations
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="relative">
              <div className="bg-white p-6 rounded-lg border border-gray-100">
                <div className="w-12 h-12 bg-[#FFD700] rounded-full flex items-center justify-center mb-4">
                  <span className="font-bold">1</span>
                </div>
                <h3 className="font-semibold mb-2">Data Connection</h3>
                <p className="text-gray-600">Connect your business data sources</p>
              </div>
              <div className="hidden md:block absolute -right-8 top-1/2 transform -translate-y-1/2 z-10">
                <ArrowRight className="h-6 w-6 text-[#FFD700]" />
              </div>
            </div>
            <div className="relative">
              <div className="bg-white p-6 rounded-lg border border-gray-100">
                <div className="w-12 h-12 bg-[#FFD700] rounded-full flex items-center justify-center mb-4">
                  <span className="font-bold">2</span>
                </div>
                <h3 className="font-semibold mb-2">AI Analysis</h3>
                <p className="text-gray-600">ArT analyzes patterns and identifies opportunities</p>
              </div>
              <div className="hidden md:block absolute -right-8 top-1/2 transform -translate-y-1/2 z-10">
                <ArrowRight className="h-6 w-6 text-[#FFD700]" />
              </div>
            </div>
            <div className="relative">
              <div className="bg-white p-6 rounded-lg border border-gray-100">
                <div className="w-12 h-12 bg-[#FFD700] rounded-full flex items-center justify-center mb-4">
                  <span className="font-bold">3</span>
                </div>
                <h3 className="font-semibold mb-2">Solution Generation</h3>
                <p className="text-gray-600">Automated solution development and optimization</p>
              </div>
              <div className="hidden md:block absolute -right-8 top-1/2 transform -translate-y-1/2 z-10">
                <ArrowRight className="h-6 w-6 text-[#FFD700]" />
              </div>
            </div>
            <div>
              <div className="bg-white p-6 rounded-lg border border-gray-100">
                <div className="w-12 h-12 bg-[#FFD700] rounded-full flex items-center justify-center mb-4">
                  <span className="font-bold">4</span>
                </div>
                <h3 className="font-semibold mb-2">Continuous Improvement</h3>
                <p className="text-gray-600">Ongoing optimization and adaptation</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-[#FFD700] to-[#FFF4B8] rounded-2xl p-12 relative overflow-hidden">
            <div className="relative z-10">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Let AI Drive Your Business Forward
              </h2>
              <p className="text-gray-800 mb-8 max-w-2xl">
                Experience the power of autonomous business optimization. No experts required.
                Just connect your data and let ArT handle the rest.
              </p>
              <button className="bg-black text-white px-8 py-3 rounded-md font-medium hover:bg-gray-800 transition-colors">
                Start Free Trial
              </button>
            </div>
            <div className="absolute right-0 top-0 bottom-0 w-1/3 bg-gradient-to-l from-white/20 to-transparent"></div>
          </div>
        </div>
      </section>
    </div>
  );
}