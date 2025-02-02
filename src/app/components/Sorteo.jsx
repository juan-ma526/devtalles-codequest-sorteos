"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

export const Sorteo = ({ sorteo }) => {
  const router = useRouter();
  const fecha = sorteo.startDate.toString().split("T")[0];
  const handleClick = (id) => {
    router.push(
      "https://discord.com/oauth2/authorize?client_id=1217103195063717938&response_type=code&redirect_uri=https%3A%2F%2Fbackend-devtallessorteo.onrender.com%2Fapi%2Fauth%2Fdiscord%2Fredirect&scope=identify+email+guilds+connections+guilds.members.read+rpc.notifications.read&state=" +
        id
    );
  };

  return (
    <div className="bg-white flex flex-col justify-center gap-4 rounded-lg shadow-lg p-8 w-96 min-h-[590px]">
      <div className="relative overflow-hidden">
        <Image className="m-auto object-cover w-full h-full" src="/wink.png" alt="Product" width={150} height={150} />
        <div className="absolute inset-0 bg-purple-100 opacity-40"></div>
        <div
          className={`${sorteo.winner ? "absolute inset-0 flex flex-col gap-3 items-center justify-center" : "hidden"}`}
        >
          <span className="bg-purple-800 text-white py-2 px-6 rounded-full font-bold">Ganador</span>
          <span className="bg-purple-800 text-white py-2 px-6 rounded-full font-bold ">{sorteo.winner}</span>
        </div>
      </div>
      <h3 className="text-xl font-bold text-purple-900 mt-4">{sorteo.name}</h3>
      <p className="text-gray-500 text-sm mt-2">{sorteo.description}</p>
      <div className="flex items-center justify-between mt-4">
        <span className="text-purple-900  font-bold text-lg">{fecha}</span>
        <button
          onClick={() => handleClick(sorteo.id)}
          className={`${
            sorteo.winner ? "hidden" : "bg-purple-900 text-white py-2 px-4 rounded-full font-bold hover:bg-purple-400"
          }`}
        >
          Participar
        </button>
      </div>
    </div>
  );
};
