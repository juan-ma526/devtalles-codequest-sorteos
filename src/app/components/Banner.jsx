import Link from "next/link";

export const Banner = () => {
  return (
    <div className="mx-auto max-w-screen-lg mt-[92px] bg-purple-950 p-8 text-white md:flex md:items-center md:justify-around md:p-16 lg:rounded-xl">
      <div className="mr-10 mb-10 md:mb-0">
        <h2 className="mb-8 max-w-lg text-3xl font-bold sm:text-4xl">¡Explora nuestra comunidad!</h2>
        <ul className="flex max-w-xl flex-wrap gap-4">
          <li className="flex space-x-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="h-6 w-6 text-purple-300"
            >
              <path
                fillRule="evenodd"
                d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
                clipRule="evenodd"
              />
            </svg>
            <p className="text-gray-100">
              Conversa y debate con otros estudiantes sobre los cursos. Únete a nuestra comunidad en Discord.
            </p>
          </li>
        </ul>
      </div>
      <div className=" flex gap-4 whitespace-nowrap">
        <Link href="https://discord.com/invite/pBjEVYTC7t">
          <button className="focus:outline-4 rounded-xl bg-purple-500 px-4 py-3 font-medium text-white shadow-md outline-white transition hover:bg-white hover:text-black">
            Unete a Discord!
          </button>
        </Link>
        <Link href="https://cursos.devtalles.com/">
          <button className="focus:outline-4 rounded-xl bg-purple-500 px-4 py-3 font-medium text-white shadow-md outline-white transition hover:bg-white hover:text-black">
            Devtalles Web
          </button>
        </Link>
      </div>
    </div>
  );
};
