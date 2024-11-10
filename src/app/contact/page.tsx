import Image from "next/image";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FaGithub, FaYoutube, FaInstagram, FaLinkedin, FaPhone, FaEnvelope } from "react-icons/fa";


import { faHtml5, faCss3, faJs, faReact, faNode, faGit } from "@fortawesome/free-brands-svg-icons";
import Footer from "@/components/footer/page";

const Page = () => {
  return (
    <div className="flex flex-col">
      
      <div className="flex flex-col lg:flex-row justify-between bg-gray-100 p-4">
        
        <div className="bg-gray-400 h-auto lg:w-[400px] flex flex-col items-center p-6 rounded-lg lg:ml-10">
          <div className="rounded-full p-4 mb-4">
            <Image
              src="/images (1).jpeg"
              width={150}
              height={150}
              alt="website image"
              className="rounded-full"
            />
          </div>
          <div className="bg-white text-center w-full max-w-md p-4">
            <h2 className="text-2xl font-semibold mb-6">Contact Us</h2>
            <form>
              <label className="block text-lg mb-2" htmlFor="name">
                Full Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Enter your name"
                required
                className="w-full p-2 mb-4 border border-gray-300 rounded-md"
              />

              <label className="block text-lg mb-2" htmlFor="email">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Enter your email"
                required
                className="w-full p-2 mb-4 border border-gray-300 rounded-md"
              />

              <label className="block text-lg mb-2" htmlFor="message">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                placeholder="Write your message"
                required
                className="w-full p-2 mb-4 border border-gray-300 rounded-md"
              />
              <div>
                <button
                  type="submit"
                  className="w-full p-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>

       
        <div className="flex flex-col justify-center items-center bg-white h-auto p-4 lg:w-[1000px]">
          <h1 className="text-lg font-bold text-center mb-6">Feel free to Contact me</h1>
          <p className="text-lg text-center mb-8">
            Feel free to reach out with any questions or comments! I will get back to you as soon as possible.
          </p>
          <p className="text-center max-w-3xl mx-auto mb-6">
            Thank you for visiting our website! We value your feedback and are always happy to assist you.
            Whether you have a question about our services or need help with a project, we are here to help.
          </p>
          <div className="flex justify-center space-x-8 text-3xl mb-6">
            <FontAwesomeIcon icon={faHtml5} />
            <FontAwesomeIcon icon={faCss3} />
            <FontAwesomeIcon icon={faJs} />
            <FontAwesomeIcon icon={faReact} />
            <FontAwesomeIcon icon={faNode} />
            <FontAwesomeIcon icon={faGit} />
          </div>
          <Image
            src="/HILmr.png"
            width={600}
            height={600}
            alt="website image"
            className="mb-4"
          />
        </div>
      </div>

      
      <div className="w-full bg-black p-6 flex flex-col items-center text-white">
        <h1 className="text-2xl mb-4">Comments</h1>
        <form className="w-full max-w-md mb-6">
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Enter your email"
            required
            className="w-full p-3 mb-4 border border-gray-300 rounded-md"
          />
          <textarea
            id="message"
            name="message"
            placeholder="Write your message"
            required
            className="w-full p-3 mb-4 border border-gray-300 rounded-md"
          />
          <button
            type="submit"
            className="w-full p-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
          >
            Submit
          </button>
        </form>
        <div className="flex space-x-6 text-xl mb-6">
          <FaGithub className="hover:scale-125 text-blue-500 transition-transform" />
          <FaYoutube className="hover:scale-125 text-blue-500 transition-transform" />
          <FaInstagram className="hover:scale-125 text-blue-500 transition-transform" />
          <FaLinkedin className="hover:scale-125 text-blue-500 transition-transform" />
        </div>

       
        <div className="flex space-x-6 text-lg mb-6">
          <div className="flex items-center space-x-2">
            <FaPhone />
            <span>Phone: 03886998989</span>
          </div>
          <div className="flex items-center space-x-2">
            <FaEnvelope />
            <span>Email: madiha123@gmail.com</span>
          </div>
        </div>

       
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
          <div className="text-center">HTML & CSS Fundamentals</div>
          <div className="text-center">JavaScript for Beginners</div>
          <div className="text-center">Advanced JavaScript</div>
          <div className="text-center">Responsive Web Design</div>
          <div className="text-center">Frontend Development with React</div>
          <div className="text-center">Building Web Apps with Next.js</div>
          <div className="text-center">Web Accessibility Best Practices</div>
          <div className="text-center">Tailwind CSS: From Basics to Advanced</div>
          <div className="text-center">Full Stack Development with MERN</div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Page;
