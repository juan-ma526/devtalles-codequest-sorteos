import Sorteos from "./components/Sorteos";

export default function Home() {

  const sorteos = [
   {
    id: '65f3a1d25323408e618ff80e',
    title: "Sorteo 1",
    description: "Obcaecati, quam? Eligendi, nulla numquam natus laborum porro at cum, consectetur ullam tempora ipsa iste officia sed officiis! Incidunt ea animi officiis.",
    createdAt: "",
   },
   {
    id: '65f3a2fd5323408e618ff80f',
    title: "Sorteo 2",
    description: "Obcaecati, quam? Eligendi, nulla numquam natus laborum porro at cum, consectetur ullam tempora ipsa iste officia sed officiis! Incidunt ea animi officiis.",
    createdAt: "",
   }

  ]
  return (
    <>
     <Sorteos sorteos={sorteos} />
    </>
  );
}
