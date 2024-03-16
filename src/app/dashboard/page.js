import { Suspense } from "react";
import ListaSorteos from "./components/ListaSorteos";
import Loading from "../loading";

async function getSorteosList() {
  const res = await fetch(`http://localhost:3000/api/sorteo`, { cache: 'no-store' });

  if (!res.ok) {
    throw new Error("Failed to fetch data")
  }

  return res.json();
}

export default async function Dashboard() {
  const sorteos = await getSorteosList();
  return (
    <>
      <Suspense fallback={<Loading />}>
        <div className="w-full">
          <ListaSorteos sorteos={sorteos.sorteoData} />
        </div>
      </Suspense>
    </>
  );
}
