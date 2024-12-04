import Link from 'next/link';
import { FiMail, FiLinkedin } from 'react-icons/fi';
import { FaTelegram } from 'react-icons/fa';

const Contact = () => {
  return (
    <section id="contact" className="py-16 bg-black-1000">
      <div className="container mx-auto px-4 text-center md:text-left">
        <h2 className="text-3xl font-bold text-center mb-8">Contact Me</h2>
        <div className="flex flex-col items-center md:flex-row md:justify-center gap-8">
          <Link 
            href="mailto:alexander.karadyaur@gmail.com" 
            className="flex items-center gap-2 hover:text-blue-600"
          >
            <FiMail size={20} />
            <span>alexander.karadyaur@gmail.com</span>
          </Link>
          <Link 
            href="https://t.me/karadyauran" 
            className="flex items-center gap-2 hover:text-blue-600"
          >
            <FaTelegram size={20} />
            <span>@karadyauran</span>
          </Link>
          <Link 
            href="https://linkedin.com/in/karadyauran" 
            className="flex items-center gap-2 hover:text-blue-600"
          >
            <FiLinkedin size={20} />
            <span>karadyauran</span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Contact;