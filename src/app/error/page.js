import { CardResponse } from "../components/CardResponse";
import wink from "../assets/wink.png";

export const metadata = {
  title: "Error Page",
  description: "Error Page, Indica el error en la inscripcion al sorteo",
};
export default function errorPage() {
  return (
    <CardResponse
      image={wink}
      title="¡Ya estabas registrado en el sorteo!"
      response="Tu Participacion sigue en curso"
    />
  );
}
