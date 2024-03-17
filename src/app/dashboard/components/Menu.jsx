"use client";
import Link from "next/link";
import MenuItem from "./MenuItem";
import { useRouter } from "next/navigation";
import { useContext } from "react";
import { UserContext } from "@/app/context/userContext";

const Menu = () => {
  const { user } = useContext(UserContext);
  const router = useRouter();

  const handleLogout = async () => {
    const res = await fetch(`/api/usuario/logout`, {
      method: "POST",
      headers: {
        "Content-Type": "Appplication/json",
      },
    });

    if (!res.ok) {
      throw new Error("Failed to logout data");
    }

    router.push("/login");
  };

  const routes = [
    {
      id: 1,
      route: "dashboard",
      name: "Sorteos",
    },
  ];

  return (
    <>
      <div
        id="menu"
        className={`${
          user ? "block" : "hidden"
        } bg-gray-900 min-h-screen z-10 text-slate-300 w-64 left-0 h-screen overflow-y-scroll`}
      >
        <div id="logo" className="my-4 px-6">
          <h1 className="text-lg md:text-2xl font-bold text-white">
            {" "}
            Admin <span className="text-purple-500">Dashboard</span>
          </h1>
          <p className="text-slate-500 text-sm">Manage your actions</p>
        </div>
        <div id="profile" className="px-6 py-10">
          <p className="text-slate-500">Welcome back</p>
        </div>
        <div id="nav" className="w-full px-6">
          {routes.map((item) => (
            <Link
              key={item.id}
              href={item.route}
              className="w-full px-2 inline-flex space-x-2 items-center border-b border-slate-700 py-3 hover:bg-purple-500 transition ease-linear duration-150"
            >
              <MenuItem item={item} />
            </Link>
          ))}

          <Link
            href={"/"}
            className="w-full px-2 inline-flex space-x-2 items-center border-b border-slate-700 py-3 hover:bg-purple-500 transition ease-linear duration-150"
          >
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
              </svg>
            </div>
            <div onClick={handleLogout} className="flex flex-col">
              <span className="text-lg font-bold leading-5 text-white">Log out</span>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Menu;
