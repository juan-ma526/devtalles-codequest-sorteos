import { CardResponse } from "../components/CardResponse";
import death from "../assets/death.png";

export const metadata = {
  title: "Not found Page",
  description: "Pagina donde muestra porque el usuario no puede participar en el sorteo",
};

export default function userNotFoundPage() {
  return (
    <CardResponse
      image={death}
      title="¡Necesitas estar en el discord de Devtalles para participar!"
      response="No es posible realizar el registro"
    />
  );
}
