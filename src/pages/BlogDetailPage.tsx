import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { ArrowLeft } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { blogPosts } from './BlogPage';

const BlogDetailPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const post = blogPosts.find(post => post.id === id);

  if (!post) {
    return <div>Post not found</div>;
  }

  return (
    <>
      <Helmet>
        <title>{post.title} - Sayge Technology</title>
        <meta name="description" content={post.excerpt} />
      </Helmet>

      <Header />

      <main className="min-h-screen bg-white">
        <article className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <button
              onClick={() => navigate('/blog')}
              className="flex items-center text-sm text-gray-600 hover:text-blue-600 transition-colors mb-8 group"
            >
              <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
              Back to Blog
            </button>

            <div className="flex items-center space-x-2 text-sm mb-4">
              <span className="text-blue-600 font-medium">{post.category}</span>
              <span className="text-gray-300">•</span>
              <span className="text-gray-500">{post.readTime}</span>
            </div>

            <h1 className="text-3xl font-bold text-gray-900 mb-4">{post.title}</h1>

            <div className="flex items-center space-x-4 text-sm mb-8 pb-8 border-b border-gray-100">
              <span className="text-gray-600 font-medium">{post.author}</span>
              <span className="text-gray-400">{post.date}</span>
            </div>

            {/* Blog Content */}
            <div className="prose prose-lg prose-blue">
              {post.id === '2' ? (
                <>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    Flutter has become the go-to framework for modern cross-platform mobile development, offering a rich UI experience and robust performance. However, ensuring long-term scalability requires strategic planning and adherence to architectural best practices. Drawing from over a decade of mobile architecture expertise, this guide provides insights into building Flutter applications that scale effectively, maintain performance, and remain easy to extend.
                  </p>

                  <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">1. Architecting for Scalability</h2>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    A solid architectural foundation is critical for scalable applications. Leveraging well-defined patterns such as Clean Architecture or MVVM ensures separation of concerns and modular design. Flutter's state management solutions—Provider, Riverpod, Bloc, and Redux—allow for predictable data flow, making complex applications easier to manage and scale.
                  </p>

                  <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">2. Optimizing State Management</h2>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    Efficient state management is key to preventing unnecessary re-renders and optimizing app performance. Understanding state lifecycles, minimizing widget rebuilds, and using dependency injection effectively (e.g., with Riverpod or Bloc) ensures a responsive and high-performing app, even under heavy usage.
                  </p>

                  <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">3. Leveraging Modular Development</h2>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    Modular development enhances maintainability and accelerates feature delivery. Structuring applications into feature-based modules allows independent teams to work in parallel while maintaining a loosely coupled system. This approach also facilitates microfrontend-like architectures, supporting rapid scalability.
                  </p>

                  <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">4. Handling Network and API Calls Efficiently</h2>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    Scalable applications require resilient network layers. Implementing best practices such as request caching, background data synchronization, and efficient pagination with Dio or Retrofit prevents unnecessary API calls and enhances performance under high loads.
                  </p>

                  <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">5. Implementing Lazy Loading and Code Splitting</h2>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    Adopting lazy loading mechanisms for UI components and deferring resource-heavy computations improve app responsiveness. Code splitting helps optimize memory utilization by dynamically loading dependencies only when needed, reducing initial load times and improving user experience.
                  </p>

                  <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">6. Ensuring Responsive UI and Adaptive Layouts</h2>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    Scaling an application means supporting a diverse range of devices and screen sizes. Using Flutter's MediaQuery, LayoutBuilder, and dynamic scaling techniques ensures that UI components adapt seamlessly across mobile, tablet, and web environments, maintaining a consistent UX.
                  </p>

                  <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">7. Automated Testing and CI/CD Pipelines</h2>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    Enterprise-scale applications demand robust testing and deployment pipelines. Implementing comprehensive test coverage (unit, widget, and integration tests) combined with automated CI/CD pipelines using GitHub Actions, Bitrise, or Codemagic ensures high reliability and rapid iterations without compromising quality.
                  </p>

                  <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">8. Monitoring, Observability, and Performance Optimization</h2>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    Continuous monitoring is essential for maintaining application stability at scale. Leveraging Firebase Performance Monitoring, Sentry, and structured logging enables proactive detection of performance bottlenecks and anomalies. Profiling with Flutter DevTools helps optimize CPU, memory, and GPU usage.
                  </p>

                  <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Conclusion</h2>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    Scalability in Flutter applications is not merely a technical challenge—it requires foresight, discipline, and adherence to architectural best practices. By leveraging modular design, efficient state management, and robust CI/CD pipelines, developers can future-proof their applications for evolving business needs and increased user demands.
                  </p>

                  <p className="text-gray-600 leading-relaxed mb-6 italic">
                    Are you leading a large-scale Flutter project? Share your insights and strategies in the comments!
                  </p>
                </>
              ) : post.id === '1' ? (
                <>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    Artificial Intelligence (AI) is revolutionizing the software development industry, shaping the way applications are built, deployed, and maintained. As AI continues to evolve, its role in software development will only expand, offering developers new tools to enhance productivity, efficiency, and innovation.
                  </p>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    One of the most significant contributions of AI in software development is code generation and automation. Tools like GitHub Copilot and ChatGPT assist developers by suggesting code snippets, debugging errors, and even writing entire functions. This automation reduces development time and minimizes human errors, enabling teams to focus on more complex problem-solving.
                  </p>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    AI is also transforming software testing and quality assurance. Traditional testing methods are time-consuming and require continuous updates. AI-powered testing tools can automatically generate test cases, identify patterns, predict potential failures, and ensure high-quality software with minimal human intervention. This results in faster software releases and improved reliability.
                  </p>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    Another crucial area where AI is making an impact is predictive analytics and maintenance. AI-driven monitoring tools can analyze vast amounts of data to predict system failures before they occur. This proactive approach enhances application performance, reduces downtime, and improves user experience.
                  </p>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    In addition, AI is playing a vital role in natural language processing (NLP) and user experience design. AI-driven chatbots and virtual assistants provide seamless interaction between users and software, making applications more intuitive and accessible.
                  </p>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    Beyond these advancements, AI is also fostering the development of low-code and no-code platforms, enabling non-technical users to create applications with minimal coding expertise. These platforms use AI-driven automation to assist users in designing, testing, and deploying software, democratizing software development and making it accessible to a broader audience.
                  </p>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    AI is further revolutionizing cybersecurity in software development. By leveraging AI-powered security tools, organizations can detect and respond to threats in real-time, ensuring robust protection against cyberattacks. AI-based anomaly detection and predictive threat modeling help in fortifying software applications against vulnerabilities and breaches.
                  </p>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    Despite its many benefits, integrating AI into software development comes with challenges. Ethical AI usage, bias mitigation, and data privacy concerns are crucial factors that need to be addressed. Companies must implement transparent AI policies and ensure responsible AI usage to avoid unintended consequences.
                  </p>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    The future of AI in software development is promising, with continued advancements poised to reshape the industry. As AI evolves, developers will be empowered to build smarter, more efficient, and innovative software solutions, driving the next wave of technological transformation. Keeping up with AI trends, learning new tools, and adapting to AI-driven methodologies will be crucial for developers and organizations to stay competitive in this dynamic landscape.
                  </p>
                </>
              ) : (
                <p className="text-gray-600 leading-relaxed mb-6">
                  {post.excerpt}
                </p>
              )}
            </div>
          </motion.div>
        </article>
      </main>

      <Footer />
    </>
  );
};

export default BlogDetailPage;
