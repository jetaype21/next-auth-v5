"use client";
import { UserButton } from "@/components/ui/auth/user-button";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

export const Navbar: React.FC<{}> = () => {
  const pathname = usePathname();

  return (
    <nav className="bg-secondary flex justify-between items-center rounded-xl p-4 w-[600px] shadow-sm">
      <section className="flex gap-x-2">
        <Button
          asChild
          variant={pathname === "/server" ? "default" : "outline"}
        >
          <Link href={"/server"}>Server</Link>
        </Button>
        <Button
          asChild
          variant={pathname === "/client" ? "default" : "outline"}
        >
          <Link href={"/client"}>Client</Link>
        </Button>
        <Button asChild variant={pathname === "/admin" ? "default" : "outline"}>
          <Link href={"/admin"}>Admin</Link>
        </Button>
        <Button
          asChild
          variant={pathname === "/settings" ? "default" : "outline"}
        >
          <Link href={"/settings"}>Settings</Link>
        </Button>
      </section>
      <UserButton />
    </nav>
  );
};
