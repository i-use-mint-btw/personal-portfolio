import { Github } from "lucide-react";
import { Link } from "wouter";

const Footer = () => {
  return (
    <footer className="bg-white dark:bg-gray-950 text-white py-10 transition-colors duration-300 shadow-2xl shadow-black">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <Link href="/" className="text-2xl font-bold text-secondary">
              &lt;<span className="text-primary dark:text-primary">Dev</span>
              <span className="dark:text-secondary">Portfolio</span>/&gt;
            </Link>
            <p className="mt-2 text-gray-400">
              Building the web, one project at a time.
            </p>
          </div>

          <div className="flex flex-col items-center md:items-end">
            <div className="flex space-x-4 mb-4">
              <a
                href="https://github.com/i-use-mint-btw"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-primary dark:hover:text-primary transition-colors"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5" />
              </a>
              {/*  <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-primary dark:hover:text-primary transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a 
                href="https://twitter.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-primary dark:hover:text-primary transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5" />
              </a> */}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
