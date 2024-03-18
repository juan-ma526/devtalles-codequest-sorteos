import guitar from "../assets/guitar.png";
import { CardResponse } from "../components/CardResponse";

export const metadata = {
  title: "Succes Page",
  description: "Pagina para informar al usuario el registro exitoso",
};

export default function SuccesPage() {
  return (
    <CardResponse image={guitar} title="¡Gracias por participar en el sorteo!" response="Tu Registro fue Exitoso" />
  );
}
