"use client";
import { useCurrentUser } from "@/hooks/use-current-user";
import React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../dropdown-menu";
import { Avatar, AvatarFallback } from "../avatar";
import { AvatarImage } from "@radix-ui/react-avatar";
import { FaUser } from "react-icons/fa";
import { LogoutButton } from "./logout-boutton";
import { ExitIcon } from "@radix-ui/react-icons";

export const UserButton: React.FC<{}> = () => {
  const user = useCurrentUser();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <Avatar>
          <AvatarImage src={user?.image ?? ""} />

          <AvatarFallback className="bg-sky-500">
            <FaUser className="text-white" />
          </AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-40">
        <LogoutButton>
          <DropdownMenuItem>
            <ExitIcon className="h-4 w-4 mr-2" />
            Logout
          </DropdownMenuItem>
        </LogoutButton>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
