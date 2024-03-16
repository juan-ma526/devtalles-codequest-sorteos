import Link from "next/link";
import error from "../assets/404.png";
import Image from "next/image";

export const Page404 = () => {
  return (
    <div className="h-screen w-full flex flex-col justify-center items-center bg-purple-950">
      <Image src={error} alt="Imagen Error 404" loading="lazy" />
      <div className="bg-purple-500 px-2 text-sm rounded rotate-12 absolute">Page Not Found</div>
      <button className="mt-5">
        <div className="relative inline-block text-sm font-medium text-purple-500 group active:text-purple-500 focus:outline-none focus:ring">
          <span className="absolute inset-0 transition-transform translate-x-0.5 translate-y-0.5 bg-purple-500 group-hover:translate-y-0 group-hover:translate-x-0"></span>

          <span className="relative block px-8 py-3 bg-white border border-current font-extrabold">
            <Link href={"/"}>
              <span>Go Home</span>
            </Link>
          </span>
        </div>
      </button>
    </div>
  );
};
