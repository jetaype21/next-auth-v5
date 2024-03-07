import { ExtendUser } from "@/next-auth";
import { Card, CardContent, CardHeader } from "./ui/card";
import { Badge } from "./ui/badge";

interface IUserInfo {
  user?: ExtendUser;
  label: string;
}

export const UserInfo = ({ label, user }: IUserInfo) => {
  return (
    <Card className="w-[600px] shadow-md">
      <CardHeader>
        <p className="text-2xl font-semibold text-center">{label}</p>
      </CardHeader>
      <CardContent className="space-y-4">
        <section className="flex flex-row items-center justify-between rounded-lg p-3 border shadow-sm">
          <p className="text-sm font-medium">ID:</p>
          <p className="truncate text-xs max-w-[180px] font-mono bg-slate-100 rounded-md">
            {user?.id}
          </p>
        </section>
        <section className="flex flex-row items-center justify-between rounded-lg p-3 border shadow-sm">
          <p className="text-sm font-medium">Name:</p>
          <p className="truncate text-xs max-w-[180px] font-mono bg-slate-100 rounded-md">
            {user?.name}
          </p>
        </section>
        <section className="flex flex-row items-center justify-between rounded-lg p-3 border shadow-sm">
          <p className="text-sm font-medium">Email:</p>
          <p className="truncate text-xs max-w-[180px] font-mono bg-slate-100 rounded-md">
            {user?.email}
          </p>
        </section>
        <section className="flex flex-row items-center justify-between rounded-lg p-3 border shadow-sm">
          <p className="text-sm font-medium">Role:</p>
          <p className="truncate text-xs max-w-[180px] font-mono bg-slate-100 rounded-md">
            {user?.role}
          </p>
        </section>
        <section className="flex flex-row items-center justify-between rounded-lg p-3 border shadow-sm">
          <p className="text-sm font-medium">Two factor authentication:</p>
          <Badge variant={user?.isTwoFactorEnabled ? "success" : "destructive"}>
            {user?.isTwoFactorEnabled ? "ON" : "OFF"}
          </Badge>
        </section>
      </CardContent>
    </Card>
  );
};
