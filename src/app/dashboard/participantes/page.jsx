import { LoadingDev } from "@/app/components/LoadingDev";
import { TableGrid } from "./components/TableGrid";

async function getParticipantesList() {
  const res = await fetch(`${process.env.BACKEND_URL}/api/participante`, {
    method: "GET",
    headers: {
      "Content-type": "application/json",
    },
    next: {
      revalidate: 0,
    },
    credentials: "include",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export default async function participantePage() {
  const participantes = await getParticipantesList();

  return (
    <div className="w-[398px] md:w-full bg-white mt-6 p-4 rounded-lg">
      <TableGrid participantes={participantes} />
    </div>
  );
}
