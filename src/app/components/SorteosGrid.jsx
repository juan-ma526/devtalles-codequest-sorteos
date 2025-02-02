import { Navbar } from "./Navbar";
import { Sorteo } from "./Sorteo";

export const SorteosGrid = ({ sorteos }) => {
  return (
    <>
      <Navbar />
      <div className={`${sorteos.length !== 0 ? "bg-purple-200 py-16" : "hidden"} `}>
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-black mb-8 ">Todos nuestros sorteos</h2>
          <div className="flex flex-wrap justify-center items-center gap-4">
            {sorteos.map((sorteo) => (
              <Sorteo key={sorteo.id} sorteo={sorteo} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
