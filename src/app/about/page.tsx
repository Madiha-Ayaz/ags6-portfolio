import React from 'react'
import Image from 'next/image'
import Footer from "@/components/footer/page";
const page = () => {
  return (
    <div>
    <div className="container mx-auto px-4 py-8 max-w-5xl">
    
     
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-800 animate-zoomInOut">About Me</h1>
        <p className="text-gray-600 mt-4">Iam a passionate web developer with a focus on creating dynamic and responsive designs.</p>
      </div>
    
   
      <div className="flex flex-col lg:flex-row items-center lg:space-x-8 mb-12">
        
        <div className="mb-6 lg:mb-0 lg:w-1/3">
          <Image src="/download (1).jpeg"  height={300} width={200} alt="Your photo" className="rounded-lg shadow-lg w-full h-auto object-cover"/>
        </div>
    
       
        <div className="lg:w-2/3 text-center lg:text-left">
          <h2 className="text-2xl font-semibold text-gray-800 inline-block whitespace-nowrap overflow-hidden border-r-4 border-accent pr-2 animate-typing">Hello! Iam Madiha Ayaz</h2>
          <p className="text-gray-600 mt-4">With a background in web development, I specialize in building user-friendly websites and applications. I’m experienced in modern frontend technologies, and I enjoy learning new frameworks and tools to keep my skills up-to-date.</p>
        </div>
      </div>
    
  
      <div className="mb-12 animate-">
        <h3 className="text-2xl font-semibold text-gray-800 text-center">Skills</h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 mt-6 text-center">
          <div className="bg-gray-400 p-4 rounded-lg shadow-md animate-bounceCustom ">HTML & CSS</div>
          <div className="bg-gray-300 p-4 rounded-lg shadow-md animate-bounceCustom">JavaScript</div>
          <div className="bg-gray-200 p-4 rounded-lg shadow-md animate-bounceCustom">React</div>
          <div className="bg-gray-100 p-4 rounded-lg shadow-md animate-bounceCustom">Next.js</div>
          <div className="bg-gray-400 p-4 rounded-lg shadow-md animate-bounceCustom">Tailwind CSS</div>
          <div className="bg-gray-300 p-4 rounded-lg shadow-md animate-bounceCustom">TypeScript</div>
          <div className="bg-gray-200 p-4 rounded-lg shadow-md animate-bounceCustom">Git & GitHub</div>
          <div className="bg-gray-100 p-4 rounded-lg shadow-md animate-bounceCustom">Responsive Design</div>
        </div>
      
    
      
      <div className="bg-gray-100 p-6 rounded-lg shadow-lg mt-10">
        <h3 className="text-2xl font-semibold text-gray-800 text-center">A Little More About Me</h3>
        <p className="text-gray-600 mt-4 text-center">Apart from coding, I enjoy exploring the latest tech trends, working on creative projects, and sharing knowledge with others. When I’m not at my computer, you’ll find me enjoying outdoor activities, reading, or learning new things to expand my horizons.</p>
      </div>
    
    </div>
    </div>
    <Footer/>
    </div>
  )
}

export default page;