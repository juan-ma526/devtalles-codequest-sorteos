import { Suspense } from "react";
import ListaSorteos from "./components/ListaSorteos";
import { LoadingDev } from "../components/LoadingDev";

async function getSorteosList() {
  const res = await fetch(`${process.env.BACKEND_URL}/api/sorteo`, { cache: "no-store", credentials: "include" });

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export default async function Dashboard() {
  const sorteos = await getSorteosList();

  return (
    <div>
      <>
        <Suspense fallback={<LoadingDev />}>
          <div>
            <ListaSorteos sorteos={sorteos.sorteoData} />
          </div>
        </Suspense>
      </>
    </div>
  );
}
