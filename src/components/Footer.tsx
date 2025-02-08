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
            <p className="mt-4 text-gray-400">
              Transforming ideas into innovative products, fast.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li><a href="/about" className="text-gray-400 hover:text-white">Blog</a></li>
              <li><a href="#careers" className="text-gray-400 hover:text-white">Careers</a></li>
              <li><a href="https://www.linkedin.com/company/sayge-it/"  className="text-gray-400 hover:text-white">LinkedIn</a></li>

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