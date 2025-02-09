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
    image: '/images/projects/edtech.jpg',
  },
  {
    title: 'Financial Management Suite',
    description: 'Comprehensive fintech solution for digital banking and payment processing',
    category: 'FinTech',
    image: '/images/projects/fintech.jpg',
  },
  {
    title: 'Enterprise Resource Planning',
    description: 'Scalable ERP system for streamlined business operations',
    category: 'ERP',
    image: '/images/projects/erp.jpg',
  },
  {
    title: 'Learning Management System',
    description: 'Feature-rich LMS for educational institutions',
    category: 'LMS',
    image: '/images/projects/lms.jpg',
  },
  {
    title: 'Breed Management Platform',
    description: 'Specialized software for animal breeding and genetics tracking',
    category: 'Breed Management',
    image: '/images/projects/breed.jpg',
  },
  {
    title: 'Point of Sale System',
    description: 'Modern POS solution with inventory management',
    category: 'POS',
    image: '/images/projects/pos.jpg',
  },
  {
    title: 'On-Demand Services Platform',
    description: 'Marketplace connecting service providers with customers',
    category: 'On-Demand Services',
    image: '/images/projects/ondemand.jpg',
  },
  {
    title: 'Custom Enterprise Solutions',
    description: 'Tailored in-house applications for specific business needs',
    category: 'Custom Apps',
    image: '/images/projects/custom.jpg',
  },
  {
    title: 'HR Management Suite',
    description: 'Comprehensive human resources management system',
    category: 'HR Apps',
    image: '/images/projects/hr.jpg',
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
              <div className="h-full bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <div
                  className="h-60 bg-gray-200 bg-cover bg-center"
                  style={{ backgroundImage: `url(${project.image})` }}
                />
                <div className="p-6">
                  <div className="text-sm font-semibold text-blue-600 uppercase tracking-wider mb-2">
                    {project.category}
                  </div>
                  <h2 className="text-xl font-semibold text-gray-900 mb-2">
                    {project.title}
                  </h2>
                  <p className="text-gray-600 text-sm">
                    {project.description}
                  </p>
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
