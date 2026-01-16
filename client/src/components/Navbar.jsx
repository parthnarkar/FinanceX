import React from 'react';
import PropTypes from 'prop-types';

const Navbar = ({ onSignIn, onGetStarted }) => {
  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <span className="text-2xl font-bold text-gray-900">💰 FinanceAI</span>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection('features')}
              className="text-gray-600 hover:text-indigo-600 font-medium transition-colors"
            >
              Features
            </button>
            <button
              onClick={() => scrollToSection('how-it-works')}
              className="text-gray-600 hover:text-indigo-600 font-medium transition-colors"
            >
              How It Works
            </button>
            <button
              onClick={() => scrollToSection('pricing')}
              className="text-gray-600 hover:text-indigo-600 font-medium transition-colors"
            >
              Pricing
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="text-gray-600 hover:text-indigo-600 font-medium transition-colors"
            >
              About
            </button>
          </div>
          <div className="flex items-center space-x-4">
            <button
              onClick={onSignIn}
              className="text-gray-600 hover:text-indigo-600 font-medium transition-colors"
            >
              Sign In
            </button>
            <button
              onClick={onGetStarted}
              className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-6 py-2 rounded-lg font-semibold hover:shadow-lg transition-all duration-300"
            >
              Get Started
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
};

Navbar.propTypes = {
  onSignIn: PropTypes.func,
  onGetStarted: PropTypes.func
};

export default Navbar;