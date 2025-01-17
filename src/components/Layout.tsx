import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { Brain, Menu, X } from 'lucide-react';

const navItems = [
  { title: 'Home', href: '/' },
  { title: 'Product', href: '/product' },
  { title: 'Solutions', href: '/solutions' },
  { title: 'About', href: '/about' },
];

export default function Layout() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <div className="min-h-screen bg-white">
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-sm z-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <NavLink to="/" className="flex items-center space-x-2">
                <Brain className="h-8 w-8 text-[#FFD700]" />
                <span className="font-bold text-xl">Wolfgang</span>
              </NavLink>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <NavLink
                  key={item.href}
                  to={item.href}
                  className={({ isActive }) =>
                    `text-sm font-medium transition-colors hover:text-[#FFD700] ${
                      isActive ? 'text-[#FFD700]' : 'text-gray-600'
                    }`
                  }
                >
                  {item.title}
                </NavLink>
              ))}
              <button className="bg-[#FFD700] text-black px-4 py-2 rounded-md font-medium hover:bg-[#FFF4B8] transition-colors">
                Get Demo
              </button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-600 hover:text-[#FFD700]"
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-b">
              {navItems.map((item) => (
                <NavLink
                  key={item.href}
                  to={item.href}
                  className={({ isActive }) =>
                    `block px-3 py-2 rounded-md text-base font-medium ${
                      isActive ? 'text-[#FFD700]' : 'text-gray-600 hover:text-[#FFD700]'
                    }`
                  }
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.title}
                </NavLink>
              ))}
              <button className="w-full mt-2 bg-[#FFD700] text-black px-4 py-2 rounded-md font-medium hover:bg-[#FFF4B8] transition-colors">
                Get Demo
              </button>
            </div>
          </div>
        )}
      </nav>

      <main className="pt-16">
        <Outlet />
      </main>

      <footer className="bg-[#FAFAFA] border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2">
                <Brain className="h-8 w-8 text-[#FFD700]" />
                <span className="font-bold text-xl">Wolfgang</span>
              </div>
              <p className="mt-4 text-sm text-gray-600">
                Revolutionizing decision-making through AI-powered solutions.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Product</h3>
              <ul className="space-y-2">
                <li><a href="/product" className="text-sm text-gray-600 hover:text-[#FFD700]">ArT Platform</a></li>
                <li><a href="/product#features" className="text-sm text-gray-600 hover:text-[#FFD700]">Features</a></li>
                <li><a href="/product#integrations" className="text-sm text-gray-600 hover:text-[#FFD700]">Integrations</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Company</h3>
              <ul className="space-y-2">
                <li><a href="/about" className="text-sm text-gray-600 hover:text-[#FFD700]">About Us</a></li>
                <li><a href="/about#team" className="text-sm text-gray-600 hover:text-[#FFD700]">Team</a></li>
                <li><a href="/solutions" className="text-sm text-gray-600 hover:text-[#FFD700]">Solutions</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Contact</h3>
              <ul className="space-y-2">
                <li><a href="mailto:contact@wolfgang.ai" className="text-sm text-gray-600 hover:text-[#FFD700]">contact@wolfgang.ai</a></li>
                <li><span className="text-sm text-gray-600">1234 AI Valley</span></li>
                <li><span className="text-sm text-gray-600">San Francisco, CA 94105</span></li>
              </ul>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-200">
            <p className="text-sm text-gray-600 text-center">
              © {new Date().getFullYear()} Wolfgang Consultancy. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}