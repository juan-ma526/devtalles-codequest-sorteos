import { Banner } from "./components/Banner";
import Footer from "./components/Footer";
import { SorteosGrid } from "./components/SorteosGrid";
import { Team } from "./components/Team";

async function getSorteosList() {
  const res = await fetch(`${process.env.BACKEND_URL}/api/sorteo`, {
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

export default async function Home() {
  const sorteos = await getSorteosList();

  return (
    <>
      <SorteosGrid sorteos={sorteos.sorteoData} />
      <Banner />
      <Team />
      <Footer />
    </>
  );
}
