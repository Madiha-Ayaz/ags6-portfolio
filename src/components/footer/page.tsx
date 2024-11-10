import React from "react";

const page = () => {
  return (
  
  
    <footer className="bg-black text-white py-8 mt-12">
      <div className="container mx-auto px-4">

        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
    
          <div>
            <h3 className="text-lg font-semibold mb-4">About Us</h3>
            <p className="text-gray-400">
              We are a passionate web development agency, creating innovative digital solutions for your business.
            </p>
          </div>

        
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul>
              <li className="mb-2">
                <a href="mailto:info@example.com" className="text-gray-400 hover:text-accent transition">madiha123@gmail.com</a>
              </li>
              <li className="mb-2">
                <a href="tel:+1234567890" className="text-gray-400 hover:text-accent transition">065656565656</a>
              </li>
              <li className="mb-2">
                <p className="text-gray-400">1234 Website, Karachi, Pakistan</p>
              </li>
            </ul>
          </div>

        
          <div>
            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-accent transition">
                <i className="fab fa-twitter text-2xl"></i>
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-accent transition">
                <i className="fab fa-facebook text-2xl"></i>
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-accent transition">
                <i className="fab fa-linkedin text-2xl"></i>
              </a>
            </div>
          </div>
        </div>

      
        <div className="border-t border-gray-700 pt-6 text-center">
          <p className="text-gray-500">
            &copy; {new Date().getFullYear()} Your Company. All rights reserved.
          </p>
        </div>
      </div>
    </footer>





  );
};

export default page;
