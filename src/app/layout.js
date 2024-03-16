import { Inter } from "next/font/google";
import "./globals.css";
import { UserContextProvider } from "./context/userContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Devtalles - Codequest | Sorteos",
  description: "Devtalles - Codequest | Sorteos",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <UserContextProvider>
        <body className={inter.className}>{children}</body>
      </UserContextProvider>
    </html>
  );
}
