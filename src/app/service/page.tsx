import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Footer from "@/components/footer/page";
const page = () => {
  return (
    <div><div className="container mx-auto px-4 py-8 max-w-5xl">
      
    {/* Header Section */}
    <div className="text-center mb-12">
      <h1 className="text-4xl font-bold text-gray-800 animate-zoomInOut">My Services</h1>
      <p className="text-gray-600 mt-4">
        Offering a range of services to help bring your web development projects to life.
      </p>
    </div>

    {/* Services Grid */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      
      {/* Service Card 1 */}
      <div className="bg-gray-200 p-6 rounded-lg shadow-lg text-center transform transition duration-300 ease-in-out hover:scale-95">
        <div className="mb-4 text-accent">
          <svg className="w-12 h-12 mx-auto" fill="currentColor" viewBox="0 0 24 24">
            <path d="..."></path> {/* Replace with your icon path */}
          </svg>
        </div>
        <h3 className="text-xl font-semibold text-gray-800">Web Development</h3>
        <p className="text-gray-600 mt-2">Building responsive and functional websites tailored to your needs.</p>
      </div>

      {/* Service Card 2 */}
      <div className="bg-gray-200 p-6 rounded-lg shadow-lg text-center transform transition duration-300 ease-in-out hover:scale-95">
        <div className="mb-4 text-accent">
          <svg className="w-12 h-12 mx-auto" fill="currentColor" viewBox="0 0 24 24">
            <path d="..."></path> {/* Replace with your icon path */}
          </svg>
        </div>
        <h3 className="text-xl font-semibold text-gray-800">UI/UX Design</h3>
        <p className="text-gray-600 mt-2">Creating intuitive and engaging user interfaces for a seamless experience.</p>
      </div>

      
      <div className="bg-gray-200 p-6 rounded-lg shadow-lg text-center transform transition duration-300 ease-in-out hover:scale-95">
        <div className="mb-4 text-accent">
          <svg className="w-12 h-12 mx-auto" fill="currentColor" viewBox="0 0 24 24">
            <path d="..."></path>
          </svg>
        </div>
        <h3 className="text-xl font-semibold text-gray-800">Frontend Frameworks</h3>
        <p className="text-gray-600 mt-2">Expertise in React, Next.js, and other modern frontend frameworks.</p>
      </div>

    </div>
  </div>
  <div className="container mx-auto px-4 py-8 max-w-5xl">
      
      
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-800 animate-zoomInOut">My Projects</h1>
        <p className="text-gray-600 mt-4">
          Here are some of the projects I have worked on. Click to explore more!
        </p>
      </div>

     
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        
       
        <div className="bg-white p-6 rounded-lg shadow-lg text-centertransform transition duration-300 ease-in-out hover:scale-95">
          <div className="mb-4">
            <Image src="/images (2).jpeg" alt="Project 1" width={200} height={200}className="w-full h-48 object-cover rounded-lg"/>
          </div>
          <h3 className="text-xl font-semibold text-gray-800">Project 1</h3>
          <p className="text-gray-600 mt-2">A dynamic website built with React and Next.js.</p>
          <a href="/projects/project1" className=" hover:underline mt-4 inline-block">
            <Link href="https://github.com/Madiha-Ayaz/currency-convertor-code.git">View Project</Link>
          </a>
        </div>

        
        <div className="bg-white p-6 rounded-lg shadow-lg text-center transform transition duration-300 ease-in-out hover:scale-95">
          <div className="mb-4">
            <Image src="/download (2).jpeg" alt="Project 2" width={200} height={200} className="w-full h-48 object-cover rounded-lg"/>
          </div>
          <h3 className="text-xl font-semibold text-gray-800">Project 2</h3>
          <p className="text-gray-600 mt-2">An e-commerce site with a modern UI built using React and Tailwind CSS.</p>
          <a href="/projects/project2" className=" hover:underline mt-4 inline-block">
          <Link href="https://github.com/Madiha-Ayaz/word-counter.git">View Project</Link>
           
          </a>
        </div>

       
        <div className="bg-white p-6 rounded-lg shadow-lg text-center transform transition duration-300 ease-in-out hover:scale-95">
          <div className="mb-4">
            <Image src="/download (3).jpeg" alt="Project 3"  width={200} height={200}className="w-full h-48 object-cover rounded-lg"/>
          </div>
          <h3 className="text-xl font-semibold text-gray-800">Project 3</h3>
          <p className="text-gray-600 mt-2">A portfolio website designed with a sleek, modern layout using Next.js.</p>
          <a href="/projects/project3" className=" hover:underline mt-4 inline-block">
          <Link href="https://github.com/Madiha-Ayaz/atmmachine.git">View Project</Link>
          </a>
        </div>
</div>
      </div>
      <Footer/>
</div>

  )
}

export default page