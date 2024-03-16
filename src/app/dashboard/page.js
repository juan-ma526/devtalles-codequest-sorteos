"use client"
import { Suspense, useContext } from "react";
import ListaSorteos from "./components/ListaSorteos";
import Loading from "../loading";
import { Page404 } from "../components/Page404";
import { UserContext } from "../context/userContext";

async function getSorteosList() {
  const res = await fetch(`${process.env.BACKEND_URL}/api/sorteo`, { cache: 'no-store' });

  if (!res.ok) {
    throw new Error("Failed to fetch data")
  }

  return res.json();
}

export default async function Dashboard() {
  const { user } = useContext(UserContext);
  const sorteos = await getSorteosList();
  const renderDontUser = () => <Page404 />;
  return <div>{user ? <>
    <Suspense fallback={<Loading />}>
      <div className="w-full">
        <ListaSorteos sorteos={sorteos.sorteoData} />
      </div>
    </Suspense>
  </> : renderDontUser()}</div>;
}

