import Image from "next/image";
import Footer from "@/components/footer/page";
export default function Home() {
  return (
    <div className="overflow-hidden">
      <h1 className="text-2xl text-center font-bold mt-20 mb-8 animate-zoomInOut">
        Lets Build Something Amazing Together
      </h1>

      <div className="h-[80vh] bg-yellow-300 mt-20 flex items-center justify-center">
        <div className="max-w-[600px] h-[600px] bg-black rounded-full flex items-center justify-center">
          {/* Text Section */}
          <div className="flex flex-col w-1/2 text-white text-center items-center">
            <Image
              src="/0fbeb115f1e8d5e97afae7599424db0d.jpg"
              width={200}
              height={100}
              alt="image website"
              className="mr-[20px]"
            />
            <h2 className="text-2xl  mr-[50px] text-yellow-300 font-bold inline-block whitespace-nowrap overflow-hidden border-r-4 border-accent pr-2 animate-typing">
              I am Madiha Ayaz
            </h2>
            <p className="mt-4 py-[30px]">
              I am a passionate web developer with experience in creating responsive and engaging websites.
            </p>
          </div>
        </div>

        {/* Image Section */}
        <div className="w-1/2 flex justify-center">
          <Image
            src="/images.jpeg"
            width={600}
            height={500}
            alt="website image"
            className="ml-[10px]"
          />
        </div>
      </div>

      <div className="mt-12">
        <h3 className="text-3xl font-semibold mb-4 text-center animate-zoomInOut">
          Welcome to My Portfolio
        </h3>
        <div className="flex flex-col gap-6 p-[30px] max-w-[900px] text-center mx-auto bg-yellow-200">
          <p>
            I’m Madiha Ayaz, a web developer dedicated to crafting beautiful, responsive, and user-friendly websites that stand out.
            Take a look at my portfolio to see how I combine creativity and cutting-edge technology to deliver websites that not only look
            great but also provide an exceptional user experience.
          </p>
          <p>
            Let’s create something extraordinary together!
          </p>
        </div>
      </div>
      <Footer/>
    </div>
  );
}
