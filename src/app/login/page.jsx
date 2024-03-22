import { Navbar } from "../components/Navbar";
import Login from "./components/Login";

export const metadata = {
  title: "Login Page",
  description: "Pagina para realizar el login del administrador",
};

export default function LoginPage() {
  return (
    <main>
      <Navbar />
      <Login />
    </main>
  );
}
