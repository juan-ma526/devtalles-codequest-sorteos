import { TopMenu } from "../components/TopMenu";
import Menu from "./components/Menu";

export const metadata = {
  title: "Dashboard Page",
  description:
    "Dashboard Page,me permite crear, actualizar, eliminar, seleccionar un ganador de un sorteo o sorteos. Tambien puedo ver y eliminar participantes de sorteos.",
};

export default function layout({ children }) {
  return (
    <>
      <div className="flex bg-slate-100 overflow-y-scroll w-screen h-screen antialiased text-slate-300 selection:bg-purple-600 selection:text-white">
        <Menu />
        <div className="relative w-screen">
          <TopMenu />
          <div className="text-black px-2 mt-2">{children}</div>
        </div>
      </div>
    </>
  );
}
