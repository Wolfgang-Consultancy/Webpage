import React from 'react';
import { Activity, Box, Brain, Cpu, GitBranch, Globe, MessageSquare, Shield, Sparkles, Zap } from 'lucide-react';

const features = [
  {
    icon: Brain,
    title: 'Autonomous AI Agents',
    description: 'Self-driving AI agents that identify problems and generate solutions without human expertise.'
  },
  {
    icon: MessageSquare,
    title: 'Advanced LLM Integration',
    description: 'Powered by state-of-the-art language models for natural business communication.'
  },
  {
    icon: Sparkles,
    title: 'Intelligent Optimization',
    description: 'Automated operations research methods for continuous business improvement.'
  },
  {
    icon: Shield,
    title: 'Enterprise Security',
    description: 'Bank-grade security protecting your sensitive business data.'
  },
  {
    icon: GitBranch,
    title: 'Seamless Integration',
    description: 'Easy connection with your existing business systems and data sources.'
  },
  {
    icon: Activity,
    title: 'Real-time Adaptation',
    description: 'Continuous learning and optimization based on your business dynamics.'
  }
];

export default function Product() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-[#FFF4B8] to-white pt-20 pb-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              Meet <span className="text-[#FFD700]">ArT</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Your autonomous AI business partner that identifies problems,
              generates solutions, and optimizes operations - all without
              requiring expert guidance.
            </p>
          </div>
          <div className="mt-12">
            <img
              src="https://images.unsplash.com/photo-1518432031352-d6fc5c10da5a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
              alt="ArT Platform Interface"
              className="rounded-lg shadow-2xl"
            />
          </div>
        </div>
      </section>

      {/* AI Capabilities Section */}
      <section className="py-20 bg-white -mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              AI-Powered Business Optimization
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              ArT combines advanced language models with operations research
              to deliver autonomous business optimization.
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

      {/* Language Model Section */}
      <section className="py-20 bg-[#FAFAFA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Advanced Language Understanding
              </h2>
              <p className="text-gray-600 mb-8">
                ArT leverages state-of-the-art language models to understand your
                business context, communicate naturally, and generate actionable
                insights without requiring human expertise.
              </p>
              <ul className="space-y-4">
                <li className="flex items-center space-x-3">
                  <Brain className="h-6 w-6 text-[#FFD700]" />
                  <span className="text-gray-700">Natural Business Communication</span>
                </li>
                <li className="flex items-center space-x-3">
                  <Sparkles className="h-6 w-6 text-[#FFD700]" />
                  <span className="text-gray-700">Contextual Understanding</span>
                </li>
                <li className="flex items-center space-x-3">
                  <Cpu className="h-6 w-6 text-[#FFD700]" />
                  <span className="text-gray-700">Automated Problem Solving</span>
                </li>
              </ul>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
                alt="AI Language Processing"
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-[#FFD700] to-[#FFF4B8] rounded-2xl p-12">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Transform Your Business with AI
              </h2>
              <p className="text-gray-800 mb-8 max-w-2xl mx-auto">
                Let our autonomous AI agents optimize your operations.
                No expertise required - just connect your data and watch the magic happen.
              </p>
              <button className="bg-black text-white px-8 py-3 rounded-md font-medium hover:bg-gray-800 transition-colors">
                Start Free Trial
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}