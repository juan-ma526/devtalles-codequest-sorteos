import Header from "./Header";
import Sorteo from "./Sorteo";

const Sorteos = ({ sorteos }) => {
  return (
    <>
      <Header />
      <div className={`${sorteos.length !== 0 ? "w-full flex py-16 bg-purple-200 min-h-[35rem]" : "hidden"}`}>
        <div className=" m-auto px-6 text-gray-500 md:px-12 xl:px-0">
          <div className="mx-auto grid gap-6 md:w-3/4 lg:w-full lg:grid-cols-3">
            {sorteos.map((sorteo) => (
              <Sorteo key={sorteo.id} sorteo={sorteo} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Sorteos;
