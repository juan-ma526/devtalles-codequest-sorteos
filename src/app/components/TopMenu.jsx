"use client";
import Link from "next/link";
import { FaHome, FaUsers, FaClipboard } from "react-icons/fa";
import { AiOutlineLogout } from "react-icons/ai";
import { usePathname, useRouter } from "next/navigation";

export const TopMenu = () => {
  const pathname = usePathname();
  const router = useRouter();

  const handleLogout = async () => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/usuario/logout`, {
      method: "POST",
      headers: {
        "Content-Type": "Appplication/json",
      },
      credentials: "include",
    });

    if (!res.ok) {
      throw new Error("Failed to logout data");
    }

    router.push("/");
  };

  return (
    <div className="sticky z-10 top-0 h-16 border-b bg-white ">
      <div className="px-6 flex items-center justify-between space-x-4">
        <Link href="/">
          <button className="w-12 h-16 -mr-2 border-r text-black">
            <FaHome size={30} />
          </button>
        </Link>
        <div className="flex justify-center items-center space-x-2">
          <div hidden className="md:block"></div>
          <Link href="/dashboard">
            <button
              className={`flex items-center justify-center w-10 h-10 rounded-xl border bg-gray-100 focus:bg-gray-100 active:bg-gray-200 md:hidden ${
                pathname === "/dashboard" ? "bg-purple-700" : ""
              }`}
            >
              <FaClipboard />
            </button>
          </Link>
          <Link href="/dashboard/participantes">
            <button
              className={`flex items-center justify-center w-10 h-10 rounded-xl border bg-gray-100 focus:bg-gray-100 active:bg-gray-200 md:hidden ${
                pathname === "/dashboard/participantes" ? "bg-purple-700" : ""
              }`}
            >
              <FaUsers />
            </button>
          </Link>
          <button onClick={handleLogout} className="md:hidden">
            <AiOutlineLogout size={25} />
          </button>
        </div>
      </div>
    </div>
  );
};
