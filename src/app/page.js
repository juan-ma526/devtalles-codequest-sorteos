import Sorteos from "./components/Sorteos";

async function getSorteosList() {
  const res = await fetch(`http://localhost:3000/api/sorteo`, { cache: 'no-store' });

  if (!res.ok) {
    throw new Error("Failed to fetch data")
  }

  return res.json();
}

export default async function Home() {

  // const sorteos = [
  //  {
  //   id: '65f3a1d25323408e618ff80e',
  //   title: "Sorteo 1",
  //   description: "Obcaecati, quam? Eligendi, nulla numquam natus laborum porro at cum, consectetur ullam tempora ipsa iste officia sed officiis! Incidunt ea animi officiis.",
  //   createdAt: "",
  //  },
  //  {
  //   id: '65f3a2fd5323408e618ff80f',
  //   title: "Sorteo 2",
  //   description: "Obcaecati, quam? Eligendi, nulla numquam natus laborum porro at cum, consectetur ullam tempora ipsa iste officia sed officiis! Incidunt ea animi officiis.",
  //   createdAt: "",
  //  }

  // ]

    
  const sorteos = await getSorteosList();

  return (
    <>
     <Sorteos sorteos={sorteos.sorteoData} />
    </>
  );
}
