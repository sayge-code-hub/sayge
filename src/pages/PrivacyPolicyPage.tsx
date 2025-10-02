import { motion } from 'framer-motion';
import Layout from '../components/Layout';
import SEO from '../components/SEO';

const PrivacyPolicyPage = () => {
  return (
    <Layout>
      <SEO
        title="Privacy Policy | Sayge"
        description="Learn how Sayge collects, uses, and protects your personal information."
        type="website"
        url="https://sayge.tech/privacy-policy"
      />
      <main className="min-h-screen bg-white pt-32 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="prose prose-lg max-w-none"
          >
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Privacy Policy</h1>
            <p className="text-gray-500 text-sm">
              Last updated: {new Date('2025-10-02').toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
              })}
            </p>
            
            <section className="mt-8">
              <h2>1. Information We Collect</h2>
              <p>
                We collect information that you provide directly to us, such as when you apply for a position, 
                contact us, or subscribe to our newsletter. This may include your name, email address, phone number, 
                and any other information you choose to provide.
              </p>
            </section>

            <section className="mt-8">
              <h2>2. How We Use Your Information</h2>
              <p>We may use the information we collect for various purposes, including to:</p>
              <ul>
                <li>Process and respond to your inquiries and applications</li>
                <li>Send you technical notices and support messages</li>
                <li>Improve our website and services</li>
                <li>Communicate with you about products, services, and events</li>
              </ul>
            </section>

            <section className="mt-8">
              <h2>3. Information Sharing</h2>
              <p>
                We do not sell or share your personal information with third parties except as described in this 
                Privacy Policy or with your consent. We may share information with service providers who perform 
                services on our behalf.
              </p>
            </section>

            <section className="mt-8">
              <h2>4. Data Security</h2>
              <p>
                We implement appropriate technical and organizational measures to protect your personal information 
                against unauthorized access, alteration, disclosure, or destruction.
              </p>
            </section>

            <section className="mt-8">
              <h2>5. Your Rights</h2>
              <p>
                You have the right to access, correct, or delete your personal information. You may also have the 
                right to object to or restrict certain processing activities.
              </p>
            </section>

            <section className="mt-8">
              <h2>6. Changes to This Policy</h2>
              <p>
                We may update this Privacy Policy from time to time. We will notify you of any changes by posting 
                the new Privacy Policy on this page.
              </p>
            </section>

            <section className="mt-8">
              <h2>7. Contact Us</h2>
              <p>
                If you have any questions about this Privacy Policy, please contact us at:
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

export default PrivacyPolicyPage;
