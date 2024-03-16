import Image from "next/image";
import Link from "next/link";

export const CardResponse = ({ image, title, response }) => {
  return (
    <div className="bg-purple-200 h-screen flex items-center justify-center">
      <div className="bg-white flex gap-44 justify-center items-center w-[70rem] h-[30rem] rounded-3xl py-5 px-12 ">
        <Image src={image} alt="Imagen Astronauta" loading="lazy" width={300} height={200} />
        <div className="flex flex-col items-start gap-7">
          <p className="text-3xl font-black">{title}</p>
          <hr className=" m-auto text-center w-[80%] border-b-1 border-black"></hr>
          <div className="m-auto flex justify-center items-center text-center align-middle p-8 bg-gray-200 rounded-3xl text-2xl">
            <span>{response}</span>
          </div>
          <Link className="m-auto" href="/">
            <button className=" w-60 h-12 text-white bg-purple-600 rounded-full">Home Page</button>
          </Link>
          <p className="m-auto text-base align-middle">
            *Devtalles se reserva el derecho de admision, asi como de cualquier otro inconveniente
          </p>
        </div>
      </div>
    </div>
  );
};
