import Image from 'next/image'
import React from 'react'

const Login = () => {
  return (
    <main>
    <div className="bg-gray-100 flex justify-center items-center h-screen">
      <div className="flex justify-center items-center w-1/2 h-screen bg-purple-200">
        <Image src="/ISO-DUO.png" width={512} height={512} alt="Placeholder Image" className="!w-1/2 !h-1/2" />
      </div>
      <div className="lg:p-36 md:p-52 sm:20 p-8 w-full lg:w-1/2">
        <h1 className="text-2xl font-semibold mb-4">Login</h1>
        <form>
          <div className="mb-4">
            <label for="username" className="block text-gray-600">Email</label>
            <input
              type="email"
              id="username"
              name="username"
              className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-purple-500" autoComplete="off" />
          </div>
          <div className="mb-4">
            <label for="password" className="block text-gray-600">Password</label>
            <input type="password"
              id="password"
              name="password"
              className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-purple-500"
              autoComplete="off" />
          </div>
          <div className="mb-6 text-purple-500">
            <a href="#" className="!text-purple-500 hover:underline">Forgot Password?</a>
          </div>
          <button type="submit" className="bg-purple-500 hover:bg-purple-600 text-white font-semibold rounded-md py-2 px-4 w-full">Login</button>
        </form>
      </div>
    </div>
  </main>
  )
}

export default Login