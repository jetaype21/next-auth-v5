"use client";

import { UserInfo } from "@/components/user-info";
import { useCurrentUser } from "@/hooks/use-current-user";
import React from "react";

const ClientComponent = () => {
  const user = useCurrentUser();

  return <UserInfo label="💻 Server component" user={user} />;
};

export default ClientComponent;
