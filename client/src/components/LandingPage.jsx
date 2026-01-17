import React from "react";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import {
  Brain,
  Lightbulb,
  Shield,
  MessageCircle,
  TrendingUp,
  BarChart3,
  Play,
  Check,
  Star,
  Facebook,
  Twitter,
  Instagram,
  Mail,
} from "lucide-react";

const LandingPage = () => {
  const navigate = useNavigate();
  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header/Navigation */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center">
              <span className="text-2xl font-bold text-gray-900">
                💰 FinanceAI
              </span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <button
                onClick={() => scrollToSection("features")}
                className="text-gray-600 hover:text-indigo-600 font-medium transition-colors"
              >
                Features
              </button>
              <button
                onClick={() => scrollToSection("how-it-works")}
                className="text-gray-600 hover:text-indigo-600 font-medium transition-colors"
              >
                How It Works
              </button>
              <button
                onClick={() => scrollToSection("pricing")}
                className="text-gray-600 hover:text-indigo-600 font-medium transition-colors"
              >
                Pricing
              </button>
              <button
                onClick={() => scrollToSection("about")}
                className="text-gray-600 hover:text-indigo-600 font-medium transition-colors"
              >
                About
              </button>
            </div>
            <div className="flex items-center space-x-4">
              <button
                onClick={() => navigate("/login")}
                className="text-gray-600 hover:text-indigo-600 font-medium transition-colors"
              >
                Sign In
              </button>
              <button
                onClick={() => navigate("/signup")}
                className="bg-linear-to-r from-indigo-600 to-purple-600 text-white px-6 py-2 rounded-lg font-semibold hover:shadow-lg transition-all duration-300"
              >
                Get Started
              </button>
            </div>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="bg-linear-to-br from-indigo-600 to-purple-700 py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
              Your AI Money Copilot
            </h1>
            <p className="text-xl sm:text-2xl text-indigo-100 mb-8 max-w-3xl mx-auto">
              Paste your SMS. Understand your money. No manual entry. Ever.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <button
                onClick={() => navigate("/signup")}
                className="bg-white text-indigo-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-50 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Get Started Free
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-indigo-600 transition-all duration-300 flex items-center justify-center gap-2">
                <Play size={20} />
                Watch Demo
              </button>
            </div>
            {/* Hero Image Placeholder */}
            <div className="max-w-4xl mx-auto bg-white/10 rounded-2xl p-8 backdrop-blur-sm">
              <div className="aspect-video bg-linear-to-br from-white/20 to-white/5 rounded-lg flex items-center justify-center">
                <span className="text-white/70 text-lg">Dashboard Mockup</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-16 sm:py-20 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Powerful Features for Smart Finance
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Experience the future of personal finance with AI-powered insights
              and automation.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 p-6">
              <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
                <Brain className="w-6 h-6 text-indigo-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                AI-Powered Parsing
              </h3>
              <p className="text-gray-600">
                Paste SMS or upload statements. Gemini AI extracts transactions
                automatically—no typing required.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 p-6">
              <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
                <Lightbulb className="w-6 h-6 text-indigo-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Smart Financial Insights
              </h3>
              <p className="text-gray-600">
                Get personalized spending analysis, pattern detection, and
                actionable recommendations powered by AI.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 p-6">
              <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
                <Shield className="w-6 h-6 text-indigo-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Fraud Detection
              </h3>
              <p className="text-gray-600">
                AI analyzes suspicious messages and protects you from financial
                scams and phishing attempts.
              </p>
            </div>

            {/* Feature 4 */}
            <div className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 p-6">
              <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
                <MessageCircle className="w-6 h-6 text-indigo-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Ask Anything
              </h3>
              <p className="text-gray-600">
                Chat with AI about your finances. Get instant answers grounded
                in your actual spending data.
              </p>
            </div>

            {/* Feature 5 */}
            <div className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 p-6">
              <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
                <BarChart3 className="w-6 h-6 text-indigo-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Health Tracking
              </h3>
              <p className="text-gray-600">
                Real-time financial health scoring with personalized improvement
                suggestions.
              </p>
            </div>

            {/* Feature 6 */}
            <div className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 p-6">
              <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
                <TrendingUp className="w-6 h-6 text-indigo-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Beautiful Dashboards
              </h3>
              <p className="text-gray-600">
                See your spending patterns through intuitive charts and
                categorized breakdowns.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-16 sm:py-20 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              How It Works
            </h2>
            <p className="text-xl text-gray-600">
              Three simple steps to transform your financial understanding
            </p>
          </div>
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16">
            {/* Step 1 */}
            <div className="text-center">
              <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">📱</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Paste SMS or Upload Statement
              </h3>
            </div>

            {/* Arrow */}
            <div className="hidden md:block text-indigo-600 text-2xl">→</div>

            {/* Step 2 */}
            <div className="text-center">
              <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🧠</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                AI Analyzes & Categorizes
              </h3>
            </div>

            {/* Arrow */}
            <div className="hidden md:block text-indigo-600 text-2xl">→</div>

            {/* Step 3 */}
            <div className="text-center">
              <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">✨</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Get Insights & Recommendations
              </h3>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof Section */}
      <section className="py-16 sm:py-20 lg:py-24 bg-linear-to-r from-indigo-600 to-purple-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 mb-8">
            <h3 className="text-2xl font-bold text-white mb-4">
              Powered by Google Gemini AI
            </h3>
            <p className="text-xl text-indigo-100">
              Built for India's Financial Future
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-white">
              <div className="text-3xl font-bold mb-2">10,000+</div>
              <div className="text-indigo-100">Transactions Analyzed</div>
            </div>
            <div className="text-white">
              <div className="text-3xl font-bold mb-2">95%</div>
              <div className="text-indigo-100">Scam Detection Accuracy</div>
            </div>
            <div className="text-white">
              <div className="text-3xl font-bold mb-2">₹2L+</div>
              <div className="text-indigo-100">Savings Identified</div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-16 sm:py-20 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Choose Your Plan
            </h2>
            <p className="text-xl text-gray-600">
              Start free and upgrade as you grow
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Free Plan */}
            <div className="bg-white rounded-xl shadow-lg p-8 text-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Free</h3>
              <div className="text-4xl font-bold text-gray-900 mb-2">
                ₹0<span className="text-lg font-normal">/month</span>
              </div>
              <ul className="text-left space-y-3 mb-8">
                <li className="flex items-center">
                  <Check className="w-5 h-5 text-green-500 mr-2" />
                  50 transactions/month
                </li>
                <li className="flex items-center">
                  <Check className="w-5 h-5 text-green-500 mr-2" />
                  Basic insights
                </li>
                <li className="flex items-center">
                  <Check className="w-5 h-5 text-green-500 mr-2" />
                  Scam detection
                </li>
              </ul>
              <button className="w-full bg-gray-100 text-gray-900 py-3 rounded-lg font-semibold hover:bg-gray-200 transition-colors">
                Get Started
              </button>
            </div>

            {/* Pro Plan */}
            <div className="bg-white rounded-xl shadow-lg p-8 text-center border-2 border-indigo-600 relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-indigo-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                Most Popular
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Pro</h3>
              <div className="text-4xl font-bold text-gray-900 mb-2">
                ₹99<span className="text-lg font-normal">/month</span>
              </div>
              <ul className="text-left space-y-3 mb-8">
                <li className="flex items-center">
                  <Check className="w-5 h-5 text-green-500 mr-2" />
                  Unlimited transactions
                </li>
                <li className="flex items-center">
                  <Check className="w-5 h-5 text-green-500 mr-2" />
                  Advanced AI insights
                </li>
                <li className="flex items-center">
                  <Check className="w-5 h-5 text-green-500 mr-2" />
                  Priority support
                </li>
                <li className="flex items-center">
                  <Check className="w-5 h-5 text-green-500 mr-2" />
                  CSV exports
                </li>
              </ul>
              <button
                onClick={() => navigate("/signup")}
                className="w-full bg-linear-to-r from-indigo-600 to-purple-600 text-white py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300"
              >
                Start Pro Trial
              </button>
            </div>

            {/* Business Plan */}
            <div className="bg-white rounded-xl shadow-lg p-8 text-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Business
              </h3>
              <div className="text-4xl font-bold text-gray-900 mb-2">
                ₹499<span className="text-lg font-normal">/month</span>
              </div>
              <ul className="text-left space-y-3 mb-8">
                <li className="flex items-center">
                  <Check className="w-5 h-5 text-green-500 mr-2" />
                  Everything in Pro
                </li>
                <li className="flex items-center">
                  <Check className="w-5 h-5 text-green-500 mr-2" />
                  Team collaboration
                </li>
                <li className="flex items-center">
                  <Check className="w-5 h-5 text-green-500 mr-2" />
                  API access
                </li>
                <li className="flex items-center">
                  <Check className="w-5 h-5 text-green-500 mr-2" />
                  Custom integrations
                </li>
              </ul>
              <button className="w-full bg-gray-100 text-gray-900 py-3 rounded-lg font-semibold hover:bg-gray-200 transition-colors">
                Contact Sales
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-2">
              <div className="text-2xl font-bold mb-4">💰 FinanceAI</div>
              <p className="text-gray-400 mb-4">
                Your AI-powered personal finance companion. Built with ❤️ in
                India.
              </p>
              <div className="flex space-x-4">
                <Facebook className="w-6 h-6 text-gray-400 hover:text-white cursor-pointer" />
                <Twitter className="w-6 h-6 text-gray-400 hover:text-white cursor-pointer" />
                <Instagram className="w-6 h-6 text-gray-400 hover:text-white cursor-pointer" />
                <Mail className="w-6 h-6 text-gray-400 hover:text-white cursor-pointer" />
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Product</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white">
                    Features
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Pricing
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Security
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    API
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white">
                    About
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Careers
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>© 2026 FinanceAI. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

LandingPage.propTypes = {
  // No props for this component
};

export default LandingPage;
