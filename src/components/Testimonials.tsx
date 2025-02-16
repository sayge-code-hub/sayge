import React, { useRef, useState } from 'react';
import { Star, ChevronLeft, ChevronRight, User } from 'lucide-react';

const scrollAmount = 800; // Amount to scroll on each button click

const testimonials = [
  {
    name: 'Jessica Lee',
    role: 'CEO, InnovateTech Solutions',
    content: "Sayge helped us overhaul our entire development process. Their cloud expertise slashed our deployment time by 60%, and our app’s performance improved dramatically.",
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80',
  },
  {
    name: 'Daniel Cruz',
    role: 'Founder, NextGen Labs',
    content: 'The team at Sayge provided invaluable technical guidance. Their recommendations on tech stack and scaling were crucial as we grew rapidly. They were the perfect partners.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80',
  },
  {
    name: 'Olivia Martin',
    role: 'Product Manager, CloudVision',
    content: 'Sayge’s staffing solutions were a lifesaver. They helped us find highly qualified developers quickly, and the whole hiring process was seamless. We built a great team, fast.',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=150&q=80',
  },
  {
    name: 'Ethan Parker',
    role: 'CTO, FinEdge Technologies',
    content: "The app Sayge developed for us exceeded all expectations. They delivered a top-tier financial app with robust security and a smooth user experience, something we couldn't have done without them.",
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=150&q=80',
  },
  {
    name: 'Simone J.',
    role: 'Head of Engineering, DataFlow Systems',
    content: 'The UI/UX overhaul by Sayge transformed our platform. The new design is clean, intuitive, and our users have had nothing but positive feedback. It’s made a big difference.',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80',
  },
  {
    name: 'Liam Gomez',
    role: 'Director of Operations, MedTech Solutions',
    content: "We needed a solution that was HIPAA-compliant and easy to use. Sayge delivered, making sure our app met strict healthcare regulations without compromising on user experience.",
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&q=80',
  },
  {
    name: 'Ava Simmons',
    role: 'VP of HR, SmartHire Solutions',
    content: 'We were struggling to find the right talent until we partnered with Sayge. Their staffing solutions brought in top-tier developers who fit perfectly into our team. The entire process was so smooth!',
    image: 'https://images.unsplash.com/photo-1501644356960-3fc4ec981225?auto=format&fit=crop&w=150&q=80',
  },
  {
    name: 'James Kelly',
    role: 'CTO, AutoDrive Innovations',
    content: "Sayge’s consulting team helped us refine our tech strategy, guiding us through tough decisions. Their experience in scaling products was invaluable, and it played a major role in our product’s success.",
    image: 'https://images.unsplash.com/photo-1502082981044-4a1a33068b50?auto=format&fit=crop&w=150&q=80',
  },
  {
    name: 'Chloe Davis',
    role: 'Lead Developer, PixelPerfect Studios',
    content: "The staff Sayge provided us was incredibly skilled. Their understanding of the latest technologies helped us accelerate our development process and stay ahead of the competition.",
    image: 'https://images.unsplash.com/photo-1506436822637-7a3878a5f6be?auto=format&fit=crop&w=150&q=80',
  },
];

const Testimonials = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const scrollLeft = container.scrollLeft + (direction === 'left' ? -scrollAmount : scrollAmount);
      container.scrollTo({
        left: scrollLeft,
        behavior: 'smooth'
      });
    }
  };
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900">What Our Clients Say</h2>
        </div>

        <div className="mt-16 relative">
          <div 
            ref={scrollContainerRef}
            className="overflow-x-auto pb-8 hide-scrollbar scroll-smooth"
            style={{
              msOverflowStyle: 'none', 
              scrollbarWidth: 'none',   
              overflow: 'hidden', 
            }}>
            <div className="grid grid-rows-2 grid-flow-col gap-8 w-max px-4">
              {testimonials.map((testimonial) => (
                <div
                  key={testimonial.name}
                  className="bg-gray-50 rounded-lg p-8 relative transform hover:scale-105 transition-transform duration-300 hover:shadow-xl w-[400px]"
                >
              <div className="flex items-center space-x-1 text-yellow-400 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-current" />
                ))}
              </div>
              <p className="text-gray-600 italic mb-6">{testimonial.content}</p>
              <div className="flex items-center">
                {
                testimonial.image ? (
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="h-12 w-12 rounded-full object-cover"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.style.display = 'none';
                      target.nextElementSibling?.classList.remove('hidden');
                    }}
                  />
                ) : null
                }
                <div className={`h-12 w-12 rounded-full bg-gray-200 flex items-center justify-center ${testimonial.image ? 'hidden' : ''}`}>
                  <User className="h-6 w-6 text-gray-500" />
                </div>
                <div className="ml-4">
                  <div className="font-medium text-gray-900">{testimonial.name}</div>
                  <div className="text-gray-600 text-sm">{testimonial.role}</div>
                </div>
              </div>
            </div>
          ))}
            </div>
          </div>
          {/* Scroll indicators */}
          <button
            onClick={() => scroll('left')}
            className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-2 shadow-lg transition-all duration-200 z-10"
            aria-label="Scroll left"
          >
            <ChevronLeft className="h-6 w-6 text-gray-600" />
          </button>
          <button
            onClick={() => scroll('right')}
            className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-2 shadow-lg transition-all duration-200 z-10"
            aria-label="Scroll right"
          >
            <ChevronRight className="h-6 w-6 text-gray-600" />
          </button>
          <div className="absolute left-0 top-0 w-20 bg-gradient-to-r from-white to-transparent h-full pointer-events-none" />
          <div className="absolute right-0 top-0 w-20 bg-gradient-to-l from-white to-transparent h-full pointer-events-none" />
        </div>
      </div>
    </section>
  );
};

export default Testimonials;