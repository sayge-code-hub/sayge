import { Link } from 'react-router-dom';
import whiteLogo from '../assets/logo/white logo.svg';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center">
            <img 
                src={whiteLogo} 
                alt="Sayge Logo" 
                className="h-10 w-auto filter brightness-100"
              />
            </div>
            <div className="mt-4 space-y-2">
              <p className="text-gray-400">
                Nagpur | Pune | California | Frankfurt
              </p>
              <p className="text-gray-400">
                <a 
                  href="mailto:humans@sayge.com?subject=Let's%20Create%20Something%20Amazing%20Together!&body=Hi%20Sayge%20Team,%0A%0AI'm%20interested%20in%20discussing%20a%20potential%20project.%20Looking%20forward%20to%20hearing%20from%20you!%0A%0ABest%20regards"
                  className="hover:text-white transition-colors"
                >
                  humans@sayge.com
                </a>
              </p>
              <p className="text-gray-400">
                <a 
                  href="tel:+918858506876" 
                  className="hover:text-white transition-colors"
                >
                  +91 88585 06876
                </a>
              </p>
            
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li><Link to="/sayge/careers" className="text-gray-400 hover:text-white transition-colors">Careers</Link></li>
              <li><Link to="/sayge/blog" className="text-gray-400 hover:text-white transition-colors">Blog</Link></li>
              <li><Link to="/sayge/contact" className="text-gray-400 hover:text-white transition-colors">Contact Us</Link></li>
              <li><a href="https://www.linkedin.com/company/sayge-it/"  className="text-gray-400 hover:text-white transition-colors">LinkedIn</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white">Privacy Policy</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Terms of Service</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Cookie Policy</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800">
          <p className="text-center text-gray-400">
            © {new Date().getFullYear()} Sayge. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;