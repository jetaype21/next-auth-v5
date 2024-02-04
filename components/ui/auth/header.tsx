import React from "react";
import { cn } from "@/lib/utils";
import { Poppins } from "next/font/google";

const font = Poppins({ subsets: ["latin"], weight: ["400", "500", "600"] });

interface Props {
  label: string;
}

export const Header: React.FC<Props> = ({ label }) => {
  return (
    <section className="w-full flex flex-col gap-y-4 items-center">
      <h2 className={cn("text-3xl font-semibold", font.className)}>🔐 Auth!</h2>
      <p className="text-muted-foreground text-sm">{label}</p>
    </section>
  );
};
