import { motion } from 'framer-motion';
import Layout from '../components/Layout';
import SEO from '../components/SEO';

const TermsOfServicePage = () => {
  return (
    <Layout>
      <SEO
        title="Terms of Service | Sayge"
        description="Terms and conditions governing your use of Sayge's website and services."
        type="website"
        url="https://sayge.tech/terms-of-service"
      />
      <main className="min-h-screen bg-white pt-32 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="prose prose-lg max-w-none"
          >
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Terms of Service</h1>
            <p className="text-gray-500 text-sm">
              Last updated: {new Date('2025-10-02').toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
              })}
            </p>
            
            <section className="mt-8">
              <h2>1. Acceptance of Terms</h2>
              <p>
                By accessing or using our website, you agree to be bound by these Terms of Service and our 
                Privacy Policy. If you do not agree with any part of these terms, you must not use our website.
              </p>
            </section>

            <section className="mt-8">
              <h2>2. Use of Website</h2>
              <p>You agree to use our website only for lawful purposes and in accordance with these Terms. You agree not to:</p>
              <ul>
                <li>Use the website in any way that violates any applicable laws or regulations</li>
                <li>Engage in any conduct that restricts or inhibits anyone's use of the website</li>
                <li>Attempt to gain unauthorized access to any portion of the website</li>
                <li>Use the website for any commercial purpose without our express written consent</li>
              </ul>
            </section>

            <section className="mt-8">
              <h2>3. Intellectual Property</h2>
              <p>
                The website and its entire contents, features, and functionality are owned by Sayge and are 
                protected by copyright, trademark, and other intellectual property laws. You may not reproduce, 
                distribute, modify, or create derivative works of any content without our express written permission.
              </p>
            </section>

            <section className="mt-8">
              <h2>4. Links to Third-Party Websites</h2>
              <p>
                Our website may contain links to third-party websites. We are not responsible for the content 
                or practices of any third-party websites. Your interactions with such websites are solely 
                between you and the third party.
              </p>
            </section>

            <section className="mt-8">
              <h2>5. Limitation of Liability</h2>
              <p>
                In no event shall Sayge be liable for any indirect, incidental, special, consequential, or 
                punitive damages arising out of or relating to your use of the website.
              </p>
            </section>

            <section className="mt-8">
              <h2>6. Changes to Terms</h2>
              <p>
                We reserve the right to modify these Terms at any time. We will provide notice of any material 
                changes by posting the updated Terms on our website.
              </p>
            </section>

            <section className="mt-8">
              <h2>7. Contact Us</h2>
              <p>
                If you have any questions about these Terms of Service, please contact us at:
                <br />
                <a href="mailto:humans@sayge.in" className="text-blue-600 hover:underline">
                  humans@sayge.in
                </a>
              </p>
            </section>
          </motion.div>
        </div>
      </main>
    </Layout>
  );
};

export default TermsOfServicePage;
