
"use client"
import React from 'react'
import "tailwindcss/tailwind.css"
import Image from 'next/image'
import { useState } from 'react'
const Upload = () => {
  const [aqi, setAqi] = useState(null);

  const handleFileUpload = async (e:any) => {
    const file = e.target.files[0];
    const formData = new FormData();
    formData.append('image', file);

    try {
      const response = await fetch('http://localhost:3000/upload', {
        method: 'POST',
        body: formData
      });
      const data = await response.json();
      setAqi(data.aqi); // Assuming the response contains the AQI value
    } catch (error) {
      console.error('Error uploading image:', error);
    }
  };
  return (
    <>
    
    <header className="fixed top-0 left-0 right-0 z-50 px-6 py-4 bg-gray-800 bg-opacity-90 backdrop-blur-lg flex items-center justify-center bg-primary-foreground">
  <h2 className="text-lg text-white font-semibold">Upload</h2>
</header>


<main className="flex flex-col items-center justify-center min-h-screen p-24">
  <section className="flex flex-col items-center justify-center gap-4">
    <h1 className="text-5xl font-bold text-center text-gray-800">Upload Your Data</h1>
    <p className="text-xl text-center text-gray-600">Start using AirPure by uploading your Image</p>
    <div className="flex flex-col items-center justify-center gap-4">
    
      <label htmlFor="file-upload" className="cursor-pointer bg-blue-600 text-white px-4 py-2 rounded-lg transition duration-300 ease-in-out hover:bg-blue-700">
        Upload File
      </label>
     
      {/* <TypewriterEffect words={[
        { text: "Drag and Drop your file here", className: "text-gray-400" },
        { text: "Or click to browse", className: "text-gray-400" },

      ]}/> */}
       <Image className='absolute z-[-2] top-[-8px] bottom-[-20px] left-[40px]  object-cover' src="/recruit.png" alt="Image" width={800} height={200} />
      
      <input id="file-upload" type="file" accept="image/*" className="hidden" />
      {aqi && (
              <div className="text-center text-lg font-semibold text-gray-800">
                AQI: {aqi}
              </div>
      )}
    </div>
  </section>
</main>
      
   </>

  )
}

export default Upload