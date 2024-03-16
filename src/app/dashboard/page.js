"use client";

import { Suspense, useContext, useEffect, useState } from "react";
import ListaSorteos from "./components/ListaSorteos";
import Loading from "../loading";
import { Page404 } from "../components/Page404";
import { UserContext } from "../context/userContext";

export default function Dashboard() {
  const { user } = useContext(UserContext);
  const [sorteos, setSorteos] = useState({});

  useEffect(() => {
    async function getSorteosList() {
      const res = await fetch(
        `http://localhost:3000/api/sorteo`,
        {
          method: "GET",
          headers: {
            "Content-type": "application/json",
          },
        },
        { cache: "no-store" }
      ).then((response) => response.json());
      console.log(res);
      setSorteos(res);
      if (!res.ok) {
        throw new Error("Failed to fetch data");
      }
    }

    getSorteosList();
  }, []);

  //const sorteos = await getSorteosList();
  const renderDontUser = () => <Page404 />;
  return (
    <div>
      {user ? (
        <>
          <Suspense fallback={<Loading />}>
            <div className="w-full">
              <ListaSorteos sorteos={sorteos.sorteoData} />
            </div>
          </Suspense>
        </>
      ) : (
        renderDontUser()
      )}
    </div>
  );
}
