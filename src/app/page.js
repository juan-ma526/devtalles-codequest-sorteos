import Sorteos from "./components/Sorteos";

export default function Home() {

  const sorteos = [
   {
    id: 1,
    title: "Title 1",
    description: "Description test",
    createdAt: "",
   },
   {
    id: 2,
    title: "Title 1",
    description: "Description test",
    createdAt: "",
   }

  ]
  return (
    <>
     <Sorteos sorteos={sorteos} />
    </>
  );
}
