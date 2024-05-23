'use client'
import Navbar from "@/components/Global/Navbar";
import Image from "next/image";
import {Button} from "@/components/ui/button";
import {useState} from "react";
import Link from "next/link"

export default function Home() {
  const [showUpload, setShowUpload] = useState(false);
  const FeatureContainer = ({ title, description, features }: { title: string, description: string, features: string[] }) => (
    <div className="max-w-lg mx-auto bg-blue-100 text-blue-900 rounded-lg p-8 shadow-lg">
      <h2 className="text-3xl font-bold text-center mb-4">{title}</h2>
      <p className="text-lg text-center mb-6">{description}</p>
      <ul className="flex flex-col gap-4 text-lg text-center">
        {features.map((feature, index) => (
          <li key={index}>{feature}</li>
          
        ))}
      </ul>
    </div>
  ); // Add closing parenthesis here

 
    
   
 
  return (
    
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <Navbar/>
        <section className="flex flex-col items-center justify-center gap-4 mt-[200px] ">
          <h1 className="text-5xl font-bold text-center">
            Welcome to <span className="text-blue-500">AirPure</span>
          </h1>
          <p className="text-xl text-center">
            The best air quality monitoring 
            
          solution in the market.
          </p>
          
        <Link href="/Upload">
          <Button  className="bg-blue-500 text-white px-4 py-2 rounded-md">
            Get Started &rarr;
          </Button>
          </Link>
        {/* ) */}
        </section>
        
        <section className="flex flex-col items-center justify-center min-h-screen p-8 bg-white">
        <h1 className="text-4xl font-bold text-center text-black/80 mb-8">Features</h1>
        <div id="container" className="grid grid-rows-1 gap-8 sm:grid-cols-2 md:grid-cols-3">
        <div className="w-full">
          <FeatureContainer
            title="Features 1"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla tincidunt, odio ac ultrices varius, metus justo tempus nunc, in ullamcorper sapien magna nec justo."
            features={[
              "Real-time air quality monitoring",
              "Historical data analysis",
              "Customizable alerts",
              "Mobile app integration",
            ]}
          />
        </div>
        <div className="w-full">
          <FeatureContainer
            title="Features 2"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla tincidunt, odio ac ultrices varius, metus justo tempus nunc, in ullamcorper sapien magna nec justo."
            features={[
              "Real-time air quality monitoring",
              "Historical data analysis",
              "Customizable alerts",
              "Mobile app integration",
            ]}
          />
        </div>
        <div className="w-full">
          <FeatureContainer
            title="Features 3"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla tincidunt, odio ac ultrices varius, metus justo tempus nunc, in ullamcorper sapien magna nec justo."
            features={[
              "Real-time air quality monitoring",
              "Historical data analysis",
              "Customizable alerts",
              "Mobile app integration",
            ]}
          />
        </div>
      </div>
    </section>
    <div className="flex flex-col lg:flex-row justify-between items-center text-black p-4 m-20">
      <div className="lg:w-1/2 lg:pr-4 mb-4 lg:mb-0">
        <h1 className="text-xl font-bold mb-2">Best Air Quality Index</h1>
        <p>Your content goes here. You can add paragraphs, lists, or any other HTML elements as needed.</p>
      </div>
      <div className="lg:w-1/2 flex justify-center">
        <div className="w-full lg:w-3/4">
          <Image
            src="/recruit.png"
            alt="Your Image"
            width={600}
            height={300}
            className="rounded"
          />
        </div>
      </div>
    </div>
    <div className="flex flex-col lg:flex-row justify-between items-center text-black p-4 m-20">
    <div className="lg:w-1/2 flex justify-center">
        <div className="w-full lg:w-3/4">
          <Image
            src="/recruit.png"
            alt="Your Image"
            width={600}
            height={300}
            className="rounded"
          />
        </div>
      </div>
      <div className="lg:w-1/2 lg:pr-4 mb-4 lg:mb-0">
        <h1 className="text-xl font-bold mb-2">Over 100 Datasets Present</h1>
        <p>Your content goes here. You can add paragraphs, lists, or any other HTML elements as needed.</p>
      </div>
      
    </div>
        <footer id="footer" className="flex items-center justify-center gap-4 ">
          <p className="text-lg font-bold">Made with ❤️ by</p>
          <Image
            src="/vercel.svg"
            width={10}
            height={15}
            alt="Vercel Logo"
          />
        </footer>
    </main>
  );
}
