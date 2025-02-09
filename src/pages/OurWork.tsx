import React from 'react';
import { motion } from 'framer-motion';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Helmet } from 'react-helmet-async';

interface Project {
  title: string;
  description: string;
  category: string;
  image: string;
}

const projects: Project[] = [
  {
    title: 'EdTech Platform',
    description: 'Modern learning management system with interactive features and real-time collaboration',
    category: 'EdTech',
    image: 'https://images.unsplash.com/photo-1501504905252-473c47e087f8?auto=format&fit=crop&w=800&q=80',
  },
  {
    title: 'Financial Management Suite',
    description: 'Comprehensive fintech solution for digital banking and payment processing',
    category: 'FinTech',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80',
  },
  {
    title: 'Enterprise Resource Planning',
    description: 'Scalable ERP system for streamlined business operations',
    category: 'ERP',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=800&q=80',
  },
  {
    title: 'Learning Management System',
    description: 'Feature-rich LMS for educational institutions',
    category: 'LMS',
    image: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=800&q=80',
  },
  {
    title: 'Breed Management Platform',
    description: 'Specialized software for animal breeding and genetics tracking',
    category: 'Breed Management',
    image: 'https://images.unsplash.com/photo-1599443015574-be5fe8a05783?auto=format&fit=crop&w=800&q=80',
  },
  {
    title: 'Point of Sale System',
    description: 'Modern POS solution with inventory management',
    category: 'POS',
    image: 'https://images.unsplash.com/photo-1556742393-d75f468bfcb0?auto=format&fit=crop&w=800&q=80',
  },
  {
    title: 'On-Demand Services Platform',
    description: 'Marketplace connecting service providers with customers',
    category: 'On-Demand Services',
    image: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=800&q=80',
  },
  {
    title: 'Custom Enterprise Solutions',
    description: 'Tailored in-house applications for specific business needs',
    category: 'Custom Apps',
    image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=80',
  },
  {
    title: 'HR Management Suite',
    description: 'Comprehensive human resources management system',
    category: 'HR Apps',
    image: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=800&q=80',
  },
];

const OurWork: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Our Work | Sayge</title>
        <meta name="description" content="Explore our portfolio of successful projects including EdTech, FinTech, ERPs, and custom solutions." />
      </Helmet>
      <Header />
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
            Our Work
          </h1>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className="group h-full bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <div className="relative overflow-hidden">
                  <div
                    className="h-60 bg-gray-200 bg-cover bg-center transform transition-transform duration-700 group-hover:scale-110"
                    style={{ backgroundImage: `url(${project.image})` }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-0 group-hover:opacity-60 transition-opacity duration-300" />
                </div>
                <div className="p-6 relative">
                  <div className="text-sm font-semibold text-blue-600 uppercase tracking-wider mb-2 flex items-center">
                    <span className="w-2 h-2 bg-blue-600 rounded-full mr-2" />
                    {project.category}
                  </div>
                  <h2 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                    {project.title}
                  </h2>
                  <p className="text-gray-600 text-sm">
                    {project.description}
                  </p>
                  <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="text-blue-600 text-sm font-medium flex items-center">
                      Learn More
                      <svg className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
    <Footer />
    </>
  );
};

export default OurWork;
