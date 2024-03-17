import Sorteos from "./components/Sorteos";

const getSorteosList = async () => {
  const res = await fetch(`/api/sorteo`, {
    cache: "no-store",
    method: "GET",
    headers: { "Content-Type": "application/json" },
  });

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
};

export default async function Home() {
  const sorteos = await getSorteosList();

  return (
    <>
      <Sorteos sorteos={sorteos.sorteoData} />
    </>
  );
}
