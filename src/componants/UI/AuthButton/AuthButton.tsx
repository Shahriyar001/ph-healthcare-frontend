import { getUserInfo, removeUser } from "@/services/authservices";
import { Button } from "@mui/material";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";

const AuthButton = () => {
  const userInfo = getUserInfo();
  const router = useRouter();
  const handleLogOut = () => {
    removeUser();
    router.refresh();
  };
  return (
    <div>
      {userInfo?.userId ? (
        <Button color="error" onClick={handleLogOut}>
          LogOut
        </Button>
      ) : (
        <Button component={Link} href="/login">
          Login
        </Button>
      )}
    </div>
  );
};

export default AuthButton;
