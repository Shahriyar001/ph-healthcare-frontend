"use client";
import DashboardDrawer from "@/componants/Dashboard/DashboardDrawer/DashboardDrawer";
import { isLoggedIn } from "@/services/authservices";
import { useRouter } from "next/navigation";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter();
  if (!isLoggedIn()) {
    return router.push("/login");
  }
  return <DashboardDrawer>{children}</DashboardDrawer>;
};

export default DashboardLayout;
