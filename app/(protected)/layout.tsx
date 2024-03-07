import React from "react";
import { Navbar } from "./_components/navbar";

interface Props {
  children: React.ReactNode;
}

const ProtectedLayout: React.FC<Props> = ({ children }) => {
  return (
    <section className="h-full w-full flex flex-col gap-y-10 items-center justify-center bg-sky-500">
      <Navbar />
      {children}
    </section>
  );
};

export default ProtectedLayout;
