import React from 'react';
import { Brain, Globe, Target } from 'lucide-react';

const team = [
  {
    name: 'Dr. Tarkan Temizoz',
    role: 'Chief Executive Officer',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80'
  },
  {
    name: 'Tolunay Alankaya',
    role: 'Chief Technology Officer',
    image: '/photos/tolunay.jpg'
  },
  {
    name: 'Katrina Anna Stiebrina',
    role: 'Head of AI Research',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80'
  },
  {
    name: 'Neslihan Cevik',
    role: 'Head of Operations',
    image: '/photos/neslihan.jpg'
  }
];

export default function About() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-[#FFF4B8] to-white pt-20 pb-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              Our Story
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              From historical inspiration to modern innovation, discover the
              journey of Wolfgang Consultancy.
            </p>
          </div>
        </div>
      </section>

      {/* History Section */}
      <section className="py-20 bg-white -mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                The Wolfgang Legacy
              </h2>
              <p className="text-gray-600 mb-6">
                Named after Wolfgang von Kempelen, we draw inspiration from a modern interpretation of his famous creation. Today, the term                     "Mechanical Turk" represents tasks that are too complex for machines, requiring human intelligence to solve. We've turned this concept on its head with ArT (Artificial Turk) - our innovative AI software that proves machines can now tackle these challenging business problems.
              </p>
              <p className="text-gray-600">
                While traditional Mechanical Turk systems rely on human intelligence for complex decision-making, our ArT software harnesses advanced AI to solve what was once thought impossible for machines. Through sophisticated algorithms and deep learning, we're demonstrating that artificial intelligence can now handle the intricate business challenges that previously required human intervention.

                This reversal represents more than just technological progress - it's a paradigm shift in how we approach complex business decisions. ArT stands as proof that AI has evolved to match and enhance human decision-making capabilities in even the most nuanced business scenarios.
              </p>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
                alt="Innovation History"
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-[#FAFAFA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-8 bg-white rounded-lg border border-gray-100">
              <Target className="h-12 w-12 text-[#FFD700] mb-4" />
              <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
              <p className="text-gray-600">
                To empower organizations with AI-driven decision-making tools
                that transform complex data into actionable insights.
              </p>
            </div>
            <div className="p-8 bg-white rounded-lg border border-gray-100">
              <Globe className="h-12 w-12 text-[#FFD700] mb-4" />
              <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
              <p className="text-gray-600">
                To be the global leader in AI-powered decision support systems,
                setting new standards for intelligent business operations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-white" id="team">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Meet Our Team
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our team of experts combines deep industry knowledge with
              cutting-edge AI expertise.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div key={index} className="text-center">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                <p className="text-gray-600">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-[#FAFAFA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Our Values
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              The principles that guide our innovation and service.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 text-center">
              <Brain className="h-12 w-12 text-[#FFD700] mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Innovation</h3>
              <p className="text-gray-600">
                Pushing the boundaries of what's possible with AI technology.
              </p>
            </div>
            <div className="p-6 text-center">
              <Target className="h-12 w-12 text-[#FFD700] mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Excellence</h3>
              <p className="text-gray-600">
                Delivering exceptional results through dedication and expertise.
              </p>
            </div>
            <div className="p-6 text-center">
              <Globe className="h-12 w-12 text-[#FFD700] mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Impact</h3>
              <p className="text-gray-600">
                Creating meaningful change in how businesses operate.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}