import Image from "next/image";
import perfilMartin from "../assets/perfil.jpeg";
import perfilFran from "../assets/perfilFran.jpeg";
import perfilDebi from "../assets/perfilDebi.jpeg";

import Link from "next/link";
export const Team = () => {
  return (
    <div id="Team" className="bg-purple-950 text-white mt-20">
      <div className="text-center py-10">
        <h5 className="text-blue-400">Team</h5>
        <h1 className="text-4xl w-96 mx-auto leading-normal font-bold mb-12">Developers</h1>
        <div className="flex flex-col md:flex-row max-w-5xl mx-auto gap-8">
          <div className="bg-white/10 p-8 rounded-xl mix-blend-luminosity">
            <Image className="h-20 mx-auto rounded-full" src={perfilMartin} alt="imagen" width={75} height={75} />
            <h4 className="uppercase text-xl font-bold">Martin Perez</h4>
            <p className="text-sm leading-7 my-3 font-light opacity-50">
              Soy un desarrollador fullstack apasionado con experiencia en Next.js, React, Tailwind CSS, Node.js,
              Express y bases de datos como MongoDB y PostgreSQL. He contribuido al desarrollo tanto del backend como
              del frontend en esta aplicacion, aplicando todo lo aprendido a lo largo de mi carrera. ¡Estoy emocionado
              por seguir creciendo y enfrentar nuevos desafíos!
            </p>
            <Link href="https://portfolio-juan-ma526.vercel.app/">
              <button className="bg-purple-500 py-2.5 px-8 rounded-full hover:bg-white hover:text-black">
                Portfolio
              </button>
            </Link>
          </div>
          <div className="bg-white/10 p-8 rounded-xl mix-blend-luminosity">
            <Image
              className="h-20 mx-auto bg-cover rounded-full"
              src={perfilFran}
              alt="imagen"
              width={75}
              height={75}
            />
            <h4 className="uppercase text-xl font-bold">Fran</h4>
            <p className="text-sm leading-7 my-3 font-light opacity-50">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt labore sapiente sit aliquam quia
              reprehenderit animi quidem voluptas tempora, dolorem sequi nisi distinctio deleniti assumenda veniam
              corporis iste? Omnis, neque.
            </p>
          </div>
          <div className="bg-white/10 p-8 rounded-xl mix-blend-luminosity">
            <Image
              className="h-20 mx-auto bg-cover rounded-full"
              src={perfilDebi}
              alt="imagen"
              width={75}
              height={75}
            />
            <h4 className="uppercase text-xl font-bold">Debora Guardado</h4>
            <p className="text-sm leading-7 my-3 font-light opacity-50">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt labore sapiente sit aliquam quia
              reprehenderit animi quidem voluptas tempora, dolorem sequi nisi distinctio deleniti assumenda veniam
              corporis iste? Omnis, neque.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
