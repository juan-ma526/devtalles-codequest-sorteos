import Sorteos from "./components/Sorteos";

export default function Home() {

  const sorteos = [
   {
    id: 1,
    title: "Sorteo 1",
    description: "Description sorteo 1  test",
    createdAt: "",
   },
   {
    id: 2,
    title: "Sorteo 2",
    description: "Description sorteo  2  stest",
    createdAt: "",
   }

  ]
  return (
    <>
     <Sorteos sorteos={sorteos} />
    </>
  );
}
