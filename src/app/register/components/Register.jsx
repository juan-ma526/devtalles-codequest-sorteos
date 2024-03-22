"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/usuario/registro`, {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({ email, password, name }),
        credentials: "include",
      }).then((response) => response.json());

      if (response.error) {
        console.log(response.error);
        alert(response.error);
      } else {
        setEmail("");
        setPassword("");
        setEmail("");
        alert("Registro realizado con exito");
        router.push("/login");
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <main>
      <div className="pt-48 pb-56">
        <div className="flex bg-white rounded-lg shadow-2xl overflow-hidden mx-auto max-w-sm lg:max-w-4xl lg:shadow-lg">
          <div className="lg:flex lg:justify-center lg:items-center hidden  lg:w-1/2 bg-cover lg:bg-purple-200">
            <Image src="/ISO-DUO.png" width={312} height={312} alt="Placeholder Image" className="" />
          </div>
          <div className="w-full p-8 lg:w-1/2">
            <h2 className="text-2xl font-semibold text-gray-700 text-center">Devtalles</h2>
            <p className="text-xl text-gray-600 text-center">Bienvenido</p>
            <div className="mt-4 flex items-center justify-between">
              <span className="border-b w-1/5 lg:w-1/4"></span>
              <span href="#" className="text-xs text-center text-gray-500 uppercase">
                SignUp with email
              </span>
              <span className="border-b w-1/5 lg:w-1/4"></span>
            </div>
            <form onSubmit={handleSubmit}>
              <div className="mt-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">Email Address</label>
                <input
                  onChange={(e) => setEmail(e.target.value)}
                  className="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none"
                  type="email"
                />
              </div>
              <div className="mt-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">Name</label>
                <input
                  onChange={(e) => setName(e.target.value)}
                  className="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none"
                  type="text"
                />
              </div>
              <div className="mt-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">Password</label>
                <input
                  onChange={(e) => setPassword(e.target.value)}
                  className="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none"
                  type="password"
                />
              </div>
              <div className="mt-8">
                <button className="bg-purple-700 text-white font-bold py-2 px-4 w-full rounded hover:bg-gray-600">
                  Sign Up
                </button>
              </div>
              <div className="mt-4 flex items-center justify-between">
                <span className="border-b w-1/5 md:w-1/4"></span>
                <Link href="/login" className="text-xs text-gray-500 uppercase">
                  or go Sign In
                </Link>
                <span className="border-b w-1/5 md:w-1/4"></span>
              </div>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Register;
