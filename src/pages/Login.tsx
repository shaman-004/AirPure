import React from 'react'
import "tailwindcss/tailwind.css"
type Props = {}
// function push(): void {
//     console.log(alert('Login succesfull!!'))
 
// }

function validateForm() {
    const emailInput = document.getElementById('email');
const emailError = document.getElementById('email-error');

if (emailInput && emailInput instanceof HTMLInputElement && emailError) {
    const email = emailInput.value.trim();
    if (!email || !email.includes('@')) {
        emailError.textContent = 'Please enter a valid email address.';
        emailError.classList.remove('hidden');
        return false; // Prevent form submission
    } else {
        emailError.classList.add('hidden');
        return true; // Allow form submission
    }
} else {
    // Handle missing elements
    console.error('Email input or error message element not found.');
    return false; // Prevent form submission
}

    
}

const Login = (props: Props) => {
  return (

    <div className="min-h-screen flex items-center justify-center bg-blue-500">
    <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-gray-700 shadow-2xl">
      <h1 className="text-4xl text-center text-blue-500 font-bold mb-8">Login</h1>
      <form>
        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email address</label>
          <input type="email" id="email" className="block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="example@example.com" />
          <p id="email-error" className="text-sm text-red-500 hidden"></p>
        </div>
        <div className="mb-4">
          <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
          <input type="password" id="password" className="block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="******"/>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <input id="remember" type="checkbox" className="w-4 h-4 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"/>
            <label htmlFor="remember" className="ml-2 block text-sm font-medium text-gray-700">Remember me</label>
          </div>
          <a href="#" className="text-sm text-blue-500 hover:underline">Forgot password?</a>
        </div>
        <button type="submit" className="w-full py-2 mt-4 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500">Login</button>
      </form>
     
      
    </div>
  </div>
  
  
  )
}

export default Login