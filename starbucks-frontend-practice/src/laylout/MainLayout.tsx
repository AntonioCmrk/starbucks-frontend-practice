import { ReactNode, useState } from "react";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";

export const MainLayout = ({ children }: { children: ReactNode }) => {
  const [selectedPage, setSelectedPage] = useState<
    "menu" | "rewards" | "gift-cards"
  >("rewards");
  return (
    <div>
      <Navbar selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
      <main>{children}</main>
      <Footer />
    </div>
  );
};
