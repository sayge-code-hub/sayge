import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import ContactForm from '../components/ContactForm';
import Header from '../components/Header';
import Footer from '../components/Footer';

const ContactPage = () => {
  return (
    <>
      <Helmet>
        <title>Contact Us - Sayge Technology</title>
        <meta
          name="description"
          content="Get in touch with Sayge Technology. We're ready to help bring your ideas to life."
        />
      </Helmet>

      <Header />

      <main className="min-h-screen bg-white relative">
        <section className="pt-28 pb-12">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-left"
            >
              <h1 className="text-3xl font-bold text-gray-900 mb-1">
                Contact Us
              </h1>
              <p className="text-base text-gray-600">
                Ready to transform your ideas into reality? Get in touch with us.
              </p>
            </motion.div>
          </div>
        </section>

        <section className="py-8">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
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
        </section>
      </main>

      <Footer />
    </>
  );
};

export default ContactPage;
