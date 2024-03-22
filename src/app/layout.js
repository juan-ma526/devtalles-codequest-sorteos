import { Roboto } from "next/font/google";
import "./globals.css";
import { UserContextProvider } from "./context/userContext";

const inter = Roboto({ subsets: ["latin"], weight: "500" });

export const metadata = {
  title: "Devtalles - Codequest | Sorteos",
  description: "Devtalles - Codequest | Sorteos",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <UserContextProvider>
        <body className={`${inter.className} m-auto w-full`}>{children}</body>
      </UserContextProvider>
    </html>
  );
}
