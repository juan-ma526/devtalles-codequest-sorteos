import Sorteos from "./components/Sorteos";

async function getSorteosList() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/sorteo`, { cache: "no-store" });

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export default async function Home() {
  const sorteos = await getSorteosList();

  return (
    <>
      <Sorteos sorteos={sorteos.sorteoData} />
    </>
  );
}
