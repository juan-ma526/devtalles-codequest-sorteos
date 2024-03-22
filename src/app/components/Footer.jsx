import { FaXTwitter, FaYoutube, FaLinkedinIn, FaDiscord, FaGlobe } from "react-icons/fa6";

const Footer = () => {
  return (
    <>
      <footer
        id="Contact"
        className="w-full h-[235px] mt-[92px] p-10 px-8 text-gray-700 bg-devtallesColorPlus border-t border-gray-200 shadow-sm body-font"
      >
        <div className="container flex flex-col items-start justify-between p-6 mx-auto md:flex-row">
          <div className="">
            <nav>
              <ul className="text-white flex gap-4 text-xs">
                <li>
                  <a href="https://cursos.devtalles.com/" target="_blank">
                    Devtalles
                  </a>
                </li>
                <li>
                  <a href="https://cursos.devtalles.com/pages/terminos-y-condiciones" target="_blank">
                    Términos y condiciones
                  </a>
                </li>
                <li>
                  <a href="https://cursos.devtalles.com/pages/politicas-de-privacidad" target="_blank">
                    Politicas de privacidad
                  </a>
                </li>
                <li>
                  <a href="https://cursos.devtalles.com/pages/preguntas-frecuentes" target="_blank">
                    FAQ
                  </a>
                </li>
                <li>
                  <a href="https://cursos.devtalles.com/pages/contactanos" target="_blank">
                    Contáctanos
                  </a>
                </li>
              </ul>
            </nav>
          </div>
          <div className="flex gap-2 text-white">
            <a href="https://twitter.com/DevTalles" target="_blank">
              <FaXTwitter />
            </a>
            <a href="https://www.youtube.com/c/FernandoHerreraCr" target="_blank">
              <FaYoutube />
            </a>
            <a href="https://www.linkedin.com/school/devtalles/" target="_blank">
              <FaLinkedinIn />
            </a>
            <a href="https://discord.com/invite/pBjEVYTC7t" target="_blank">
              <FaDiscord />
            </a>
            <a href="https://fernando-herrera.com/#/" target="_blank">
              <FaGlobe />
            </a>
          </div>
        </div>
        <hr className="border-t-1 border-gray-500 bg-gray-500" />
        <div className=" absolute text-white pt-4 text-xs w-11/12 right-0">
          <p className="lg:ml-24 sm:mt-8 ">
            Copyright © 2024 <b>devTalles.com</b> todos los derechos reservados
          </p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
