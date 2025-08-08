import React from 'react';
import Link from 'next/link';
import SlideCarousel from './SlideCarousel';

const HeroSection: React.FC = () => {
  return (
    <section className="relative bg-gradient-to-br from-white via-taupe-50 to-taupe-100 min-h-screen flex items-center">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 pb-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-7xl font-bold text-taupe-900 leading-tight">
                Share Your
                <span className="block text-taupe-700">Travel Stories</span>
              </h1>
              <p className="text-xl text-taupe-700 leading-relaxed max-w-2xl">
                Embark on a journey through captivating stories and breathtaking destinations. 
                Connect with fellow travelers and preserve your most cherished memories.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                href="/post" 
                className="inline-flex items-center justify-center px-8 py-4 bg-taupe-900 text-taupe-50 font-semibold rounded-lg hover:bg-taupe-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                Start Writing
                <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
              <Link 
                href="/about" 
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-taupe-700 text-taupe-700 font-semibold rounded-lg hover:bg-taupe-700 hover:text-taupe-50 transition-all duration-300"
              >
                Learn More
              </Link>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap gap-8 pt-8 border-t border-taupe-200">
              <div className="text-center">
                <div className="text-3xl font-bold text-taupe-900">500+</div>
                <div className="text-sm text-taupe-600">Travel Stories</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-taupe-900">50+</div>
                <div className="text-sm text-taupe-600">Countries</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-taupe-900">10K+</div>
                <div className="text-sm text-taupe-600">Readers</div>
              </div>
            </div>
          </div>

          {/* Right Column - Carousel */}
          <div className="relative">
            <div className="relative z-10">
              {/* Carousel Container */}
              <div className="bg-gradient-to-br from-taupe-300 to-taupe-500 rounded-2xl p-6 shadow-2xl">
                <div className="text-center mb-4">
                  <h3 className="text-xl font-semibold text-taupe-900 mb-2">Featured Stories</h3>
                  <p className="text-sm text-taupe-700">Discover amazing destinations</p>
                </div>
                <SlideCarousel />
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 bg-taupe-100 rounded-lg p-4 shadow-lg">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-taupe-500 rounded-full"></div>
                  <span className="text-sm font-medium text-taupe-700">Live Stories</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2">
        <div className="flex flex-col items-center space-y-3">
          <div className="relative group">
            <span className="absolute inset-0 rounded-full bg-taupe-400/30 animate-ping"></span>
            <span className="relative flex items-center justify-center w-16 h-16 rounded-full bg-white/90 backdrop-blur border border-taupe-300 shadow-2xl transition-transform group-hover:scale-105">
              <svg className="w-8 h-8 text-taupe-700 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7"></path>
              </svg>
            </span>
          </div>
          <span className="text-base text-taupe-700 font-semibold tracking-wide animate-pulse">Scroll to explore</span>
        </div>
      </div>
    </section>
  );
};

export default HeroSection; 