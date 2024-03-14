import Sorteos from "./components/Sorteos";

export default function Home() {

  const sorteos = [
   {
    id: 1,
    title: "Sorteo 1",
    description: "Obcaecati, quam? Eligendi, nulla numquam natus laborum porro at cum, consectetur ullam tempora ipsa iste officia sed officiis! Incidunt ea animi officiis.",
    createdAt: "",
   },
   {
    id: 2,
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
