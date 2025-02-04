import React from 'react';
import { motion } from 'framer-motion';
import { Target, Users, Award, Rocket } from 'lucide-react';

const Values = () => {
  const values = [
    {
      icon: Target,
      title: "Innovation First",
      description: "We stay ahead of the curve with cutting-edge solutions and forward-thinking approaches."
    },
    {
      icon: Users,
      title: "Client Partnership",
      description: "We build lasting relationships based on trust, transparency, and mutual success."
    },
    {
      icon: Award,
      title: "Excellence",
      description: "We maintain the highest standards in every project and deliverable."
    },
    {
      icon: Rocket,
      title: "Fast Delivery",
      description: "We believe in rapid, iterative development without compromising quality."
    }
  ];

  return (
    <section id="values" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Values</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Our core values guide everything we do, from how we develop solutions to how we interact with our clients.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex justify-center mb-4">
                <value.icon className="w-12 h-12 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
              <p className="text-gray-600">{value.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Values;
