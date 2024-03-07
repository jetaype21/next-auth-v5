"use client";

import FormError from "@/components/form-error";
import { useCurrenRole } from "@/hooks/use-current-role";
import { UserRole } from "@prisma/client";

interface IRoleGate {
  children: React.ReactNode;
  allowedRole: UserRole;
}

export const RoleGate = ({ allowedRole, children }: IRoleGate) => {
  const role = useCurrenRole();

  if (role !== allowedRole) {
    return <FormError message="You are not allowed to access this page" />;
  }

  return <>{children}</>;
};
