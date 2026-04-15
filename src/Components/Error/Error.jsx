import { Link } from "react-router-dom";
import { FaExclamationTriangle } from "react-icons/fa";

const Error = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-base-200 px-4">
      <div className="text-center max-w-md">
        
        
        <div className="flex justify-center mb-4 text-green-900 text-6xl">
          <FaExclamationTriangle />
        </div>

        
        <h1 className="text-5xl font-bold text-gray-800 mb-2">
          404
        </h1>

        
        <h2 className="text-xl font-semibold mb-2">
          Page Not Found
        </h2>

       
        <p className="text-gray-500 mb-6">
          Oops! The page you are looking for doesn’t exist or has been moved.
        </p>

        
        <Link
          to="/"
          className="btn bg-green-900 text-white px-6"
        >
          Go Back Home
        </Link>
      </div>
    </div>
  );
};

export default Error;