
import { TypewriterEffect } from '@/components/ui/typewrite'
import React from 'react'
import "tailwindcss/tailwind.css"
import Image from 'next/image'

const Upload = () => {
  return (
    <>
    
    <header className="fixed top-0 left-0 right-0 z-50 px-6 py-4 bg-gray-800 bg-opacity-90 backdrop-blur-lg flex items-center justify-center bg-primary-foreground">
  <h2 className="text-lg text-white font-semibold">Upload</h2>
</header>


<main className="flex flex-col items-center justify-center min-h-screen p-24">
  <section className="flex flex-col items-center justify-center gap-4">
    <h1 className="text-5xl font-bold text-center text-gray-800">Upload Your Data</h1>
    <p className="text-xl text-center text-gray-600">Start using AirPure by uploading your data</p>
    <div className="flex flex-col items-center justify-center gap-4">
      <label htmlFor="file-upload" className="cursor-pointer bg-blue-600 text-white px-4 py-2 rounded-lg transition duration-300 ease-in-out hover:bg-blue-700">
        Upload File
      </label>
      {/* <TypewriterEffect words={[
        { text: "Drag and Drop your file here", className: "text-gray-400" },
        { text: "Or click to browse", className: "text-gray-400" },

      ]}/> */}
       <Image className='absolute z-[-1]  object-cover' src="/recruit.png" alt="Image" width={200} height={150} />
      
      <input id="file-upload" type="file" accept="image/*" className="hidden" />
    </div>
  </section>
</main>
      
   </>

  )
}

export default Upload