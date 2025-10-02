import { motion } from 'framer-motion';
import Layout from '../components/Layout';
import SEO from '../components/SEO';

const CookiePolicyPage = () => {
  return (
    <Layout>
      <SEO
        title="Cookie Policy | Sayge"
        description="Learn how Sayge uses cookies and similar technologies on our website."
        type="website"
        url="https://sayge.tech/cookie-policy"
      />
      <main className="min-h-screen bg-white pt-32 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="prose prose-lg max-w-none"
          >
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Cookie Policy</h1>
            <p className="text-gray-500 text-sm">
              Last updated: {new Date('2025-10-02').toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
              })}
            </p>
            
            <section className="mt-8">
              <h2>1. What Are Cookies</h2>
              <p>
                Cookies are small text files that are placed on your computer or mobile device when you visit a website. 
                They are widely used to make websites work more efficiently and to provide information to the site owners.
              </p>
            </section>

            <section className="mt-8">
              <h2>2. How We Use Cookies</h2>
              <p>We use cookies for the following purposes:</p>
              <ul>
                <li>
                  <strong>Essential Cookies:</strong> These are necessary for the website to function and cannot be 
                  switched off in our systems.
                </li>
                <li>
                  <strong>Analytics Cookies:</strong> These allow us to count visits and traffic sources so we can 
                  measure and improve the performance of our site.
                </li>
                <li>
                  <strong>Preference Cookies:</strong> These enable the website to provide enhanced functionality 
                  and personalization.
                </li>
              </ul>
            </section>

            <section className="mt-8">
              <h2>3. Third-Party Cookies</h2>
              <p>
                We may use various third-party cookies to report usage statistics of the website and deliver 
                advertisements on and through the website, including:
              </p>
              <ul>
                <li>Google Analytics</li>
                <li>Other analytics and advertising partners</li>
              </ul>
            </section>

            <section className="mt-8">
              <h2>4. Managing Cookies</h2>
              <p>
                You can set or amend your web browser controls to accept or refuse cookies. If you choose to reject 
                cookies, you may still use our website though your access to some functionality and areas of our 
                website may be restricted.
              </p>
              <p className="mt-4">
                To find out more about how to manage and delete cookies, visit aboutcookies.org or allaboutcookies.org.
              </p>
            </section>

            <section className="mt-8">
              <h2>5. Changes to This Policy</h2>
              <p>
                We may update our Cookie Policy from time to time. We will notify you of any changes by posting 
                the new Cookie Policy on this page.
              </p>
            </section>

            <section className="mt-8">
              <h2>6. Contact Us</h2>
              <p>
                If you have any questions about our use of cookies, please contact us at:
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

export default CookiePolicyPage;
