"use client";

import { useRouter } from "next/navigation";
import React from "react";

interface Props {
  children: React.ReactNode;
  mode?: "redirect" | "modal";
  asChild?: boolean;
}

const LoginButton: React.FC<Props> = ({
  children,
  mode = "redirect",
  asChild,
}) => {
  const router = useRouter();

  const onClick = () => {
    router.push("/auth/login");
  };

  if (mode === "modal") {
    <span onClick={onClick} className="cursor-pointer">
      TODO: IMPLEMENTATION
    </span>;
  }

  return (
    <span onClick={onClick} className="cursor-pointer">
      {children}
    </span>
  );
};

export default LoginButton;
