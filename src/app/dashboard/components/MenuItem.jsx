"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const MenuItem = ({ item }) => {
  const pathname = usePathname();
  return (
    <>
      <li className="list-none">
        <Link
          href={item.path}
          className={`px-4 py-3 flex items-center space-x-4 rounded-md text-gray-600 group hover:bg-gradient-to-r hover:bg-purple-600 hover:text-white ${
            item.path === pathname ? "text-white bg-gradient-to-r from-purple-600 to-black" : ""
          } `}
        >
          {item.icon}
          <span className="group-hover:text-white">{item.name}</span>
        </Link>
      </li>
    </>
  );
};

export default MenuItem;
