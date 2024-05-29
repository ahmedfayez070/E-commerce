import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import SearchContextProvider from "@/context/SearchContext";
import ModalContextProvider from "@/context/ModalContext";
import Provider from "@/lib/react-query";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "E-commerce",
  description: "best e-commerce app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Provider>
          <SearchContextProvider>
            <ModalContextProvider>
              <Navbar />
              {children}
            </ModalContextProvider>
          </SearchContextProvider>
        </Provider>
      </body>
    </html>
  );
}
