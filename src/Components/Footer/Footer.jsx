import { FaFacebookF, FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-green-900 text-white py-16">
      <div className="max-w-5xl mx-auto text-center px-4">
        
       
        <h1 className="text-4xl font-bold mb-2">KeenKeeper</h1>

       
        <p className="text-sm text-gray-200 mb-6">
          Your personal shelf of meaningful connections. Browse, tend, and nurture
          the relationships that matter most.
        </p>

        
        <p className="mb-3 text-sm">Social Links</p>

        <div className="flex justify-center gap-3 mb-8">
          <button className="bg-white text-black w-8 h-8 flex items-center justify-center rounded-full">
            <FaGithub size={14} />
          </button>
          <button className="bg-white text-black w-8 h-8 flex items-center justify-center rounded-full">
            <FaFacebookF size={14} />
          </button>
          <button className="bg-white text-black w-8 h-8 flex items-center justify-center rounded-full">
            <FaXTwitter size={14} />
          </button>
        </div>

        
        <div className="flex flex-col md:flex-row justify-between items-center text-xs text-gray-300 border-t border-gray-400 pt-4">
          <p>© 2026 KeenKeeper. All rights reserved.</p>

          <div className="flex gap-4 mt-2 md:mt-0">
            <span className="cursor-pointer hover:underline">Privacy Policy</span>
            <span className="cursor-pointer hover:underline">Terms of Service</span>
            <span className="cursor-pointer hover:underline">Cookies</span>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;