"use client";

import { logout } from "@/actions/logout";
import { Button } from "@/components/ui/button";
import { useCurrentUser } from "@/hooks/use-current-user";

const SettingPage = () => {
  const user = useCurrentUser();

  const logoutClick = () => {
    logout();
  };

  return (
    <div>
      {/* {JSON.stringify(user, null, 2)} */}
      user
      <Button onClick={logoutClick}>Sign out</Button>
    </div>
  );
};

export default SettingPage;
