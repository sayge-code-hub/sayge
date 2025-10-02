import { motion } from 'framer-motion';
import ContactForm from '../components/ContactForm';
import Layout from '../components/Layout';

const ContactPage = () => {
  return (
    <Layout>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
        className="min-h-screen pt-24 pb-16"
      >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl">Contact Us</h1>
          <p className="mt-4 text-xl text-gray-600">
            Ready to transform your ideas into reality? Get in touch with us.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">Get In Touch</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-medium text-gray-900">Email</h3>
                <a 
                  href="mailto:humans@sayge.com?subject=Let's%20Create%20Something%20Amazing%20Together!" 
                  className="text-blue-600 hover:text-blue-800 transition-colors"
                >
                  humans@sayge.com
                </a>
              </div>
              <div>
                <h3 className="text-lg font-medium text-gray-900">Phone</h3>
                <a 
                  href="tel:+918858506876" 
                  className="text-blue-600 hover:text-blue-800 transition-colors"
                >
                  +91 88585 06876
                </a>
              </div>
              <div>
                <h3 className="text-lg font-medium text-gray-900">Locations</h3>
                <p className="text-gray-600">Nagpur | Pune | California | Frankfurt</p>
              </div>
            </div>
          </div>
          
          <div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">Send Us a Message</h2>
            <ContactForm />
          </div>
        </div>
        </div>
      </motion.div>
    </Layout>
  );
};

export default ContactPage;
