import React from 'react';
import { motion } from 'framer-motion';
import { Users, Target, Rocket, Award } from 'lucide-react';
import Layout from '../components/Layout';

// Import team member images
import team1 from '../assets/team/ceo.jpg';
import team2 from '../assets/team/laura.png';
import team3 from '../assets/team/aditya.png';
import team4 from '../assets/team/oliver.png';
import team5 from '../assets/team/joel.jpeg';


const AboutPage = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const teamMembers = [
    {
      name: "Gautam L.",
      role: "CEO",
      description: "A visionary leader with 15+ years in digital transformation.",
      image: team1
    },
    {
      name: "Aditya Verma",
      role: "CTO",
      description: "Expert in cutting-edge technologies with a focus on scalable architecture.",
      image: team3
    },
    {
      name: "Laura Rodriguez",
      role: "Head of HR",
      description: "Leads talent strategy and fosters workplace innovation.",
      image: team2
    },
    {
      name: "Michael Foster",
      role: "Lead AI Engineer",
      description: "Pioneering AI solutions with expertise in machine learning and neural networks.",
      image: team4
    },
    {
      name: "Joel Andriyas",
      role: "Technical Advisor & Cloud Architecture Lead",
      description: "Expert in designing scalable and secure cloud infrastructure solutions.",
      image: team5
    }
  ];

  const values = [
    {
      title: "Innovation First",
      description: "We constantly push boundaries to deliver cutting-edge solutions.",
      icon: Rocket
    },
    {
      title: "Client Success",
      description: "Your success is our success. We're committed to delivering exceptional results.",
      icon: Target
    },
    {
      title: "Excellence",
      description: "We maintain the highest standards in everything we do.",
      icon: Award
    }
  ];

  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">

      {/* Our Story Section */}
      <motion.section
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        className="py-16 bg-white"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeInUp} className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Story</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Founded with a vision to revolutionize how businesses leverage artificial intelligence, 
              Sayge has grown from a small startup to a leading force in AI solutions. We believe in 
              the power of innovation and the importance of making advanced technology accessible to businesses of all sizes.
            </p>
          </motion.div>
        </div>
      </motion.section>

      {/* Our Values */}
      <motion.section
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        className="py-16 bg-blue-50/30"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeInUp} className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Values</h2>
            <div className="grid md:grid-cols-3 gap-8 mt-12">
              {values.map((value, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2 }}
                  className="bg-white p-6 rounded-xl shadow-lg"
                >
                  <div className="flex justify-center mb-4">
                    <value.icon className="w-12 h-12 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Team Section */}
      <motion.section
        id="team"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        className="py-16 bg-white"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeInUp} className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Team</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-12">
              Meet the experts behind Sayge's success. Our diverse team brings together decades of experience in AI, software development, and business transformation.
            </p>
            <div className="grid md:grid-cols-3 gap-8">
              {teamMembers.map((member, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2 }}
                  className="bg-white rounded-xl shadow-lg overflow-hidden group"
                >
                  <div className="relative h-64 overflow-hidden">
                    <img 
                      src={member.image} 
                      alt={member.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
                    <p className="text-blue-600 mb-2">{member.role}</p>
                    <p className="text-gray-600">{member.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Contact Section */}
      <motion.section
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        className="py-16 bg-blue-50/30"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeInUp} className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Get in Touch</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8">
              Ready to transform your business with AI? We're here to help you succeed.
            </p>
            <button className="bg-blue-600 text-white px-8 py-3 rounded-full font-medium hover:bg-blue-700 transition-colors">
              Contact Us
            </button>
          </motion.div>
        </div>
      </motion.section>
      </div>
    </Layout>
  );
};

export default AboutPage;
