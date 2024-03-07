"use client";

import { admin } from "@/actions/admin";
import FormSuccess from "@/components/form-success";
import { RoleGate } from "@/components/ui/auth/role-gate";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { UserRole } from "@prisma/client";
import React from "react";
import { toast } from "sonner";

const AdminPage = () => {
  const onServerActionClick = () => {
    admin().then((res) => {
      if (res.error) {
        toast.error(res.error);
      }

      if (res.success) {
        toast.success(res.success);
      }
    });
  };

  const onApiRouteClick = () => {
    fetch("/api/admin").then((res) => {
      if (res.ok) {
        toast.success("You are an admin");
      } else {
        toast.error("You are not an admin");
      }
    });
  };

  return (
    <Card className="w-[600px]">
      <CardHeader className="text-2xl font-semibold text-center">
        <p>🔑 Admin</p>
      </CardHeader>
      <CardContent className="space-y-4">
        <RoleGate allowedRole={UserRole.ADMIN}>
          <FormSuccess message="You are an admin" />
        </RoleGate>
        <section className="flex flex-row items-center justify-between rounded-lg border p-3 font-medium">
          <p className="text-sm font-medium">Admin-only API Route</p>
          <Button onClick={onApiRouteClick}>Click to test</Button>
        </section>
        <section className="flex flex-row items-center justify-between rounded-lg border p-3 font-medium">
          <p className="text-sm font-medium">Admin-only Server Action</p>
          <Button onClick={onServerActionClick}>Click to test</Button>
        </section>
      </CardContent>
    </Card>
  );
};

export default AdminPage;
