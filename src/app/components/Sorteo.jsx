"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

const Sorteo = ({ sorteo }) => {
  const router = useRouter();

  const handleClick = (id) => {
    router.push(
      "https://discord.com/oauth2/authorize?client_id=1217103195063717938&response_type=code&redirect_uri=http%3A%2F%2Flocalhost%3A3000%2Fapi%2Fauth%2Fdiscord%2Fredirect&scope=identify+guilds+email+connections+guilds.members.read+rpc.notifications.read&state=" + id
    );
  };
  return (
    <>
      <>
        <div className="flex flex-col bg-white rounded-2xl shadow-xl px-8 py-8 sm:px-8 lg:px-8">
          <div className="mb-12 space-y-4 h-30s">
            <h3 className="text-2xl font-semibold text-purple-900">{sorteo.name}</h3>
            <p className="mb-6 h-30">{sorteo.description}</p>
          </div>
          <button
            onClick={() => handleClick(sorteo.id)}
            className="px-8 py-4 text-xs font-bold text-white uppercase transition-all duration-150 bg-purple-500 rounded shadow outline-none active:bg-purple-600 hover:shadow-md focus:outline-none ease"
          >
            Participar
          </button>
          <Image
            height={600}
            width={900}
            alt={sorteo.title}
            src="/wink.png"
            className="w-2/3 ml-auto"
            loading="lazy"
          />
        </div>
      </>
    </>
  );
};

export default Sorteo;
