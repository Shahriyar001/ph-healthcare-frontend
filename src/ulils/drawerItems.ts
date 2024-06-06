import { USER_ROLE } from "@/constants/role";
import { DrawerItem, UserRole } from "@/types";
import {
  CalendarMonth,
  MedicalInformation,
  ReviewsOutlined,
} from "@mui/icons-material";

import DashboardIcon from "@mui/icons-material/Dashboard";
import GroupIcon from "@mui/icons-material/Group";

export const drawerItems = (role: UserRole) => {
  const roleMenus: DrawerItem[] = [];

  switch (role) {
    case USER_ROLE.SUPER_ADMIN:
      roleMenus.push(
        {
          title: "Dashboard",
          path: `${role}`,
          icon: DashboardIcon,
        },
        {
          title: "Manage Users",
          path: `${role}/manage-users`,
          icon: GroupIcon,
        }
      );
      break;

    case USER_ROLE.ADMIN:
      roleMenus.push(
        {
          title: "Dashboard",
          path: `${role}`,
          icon: DashboardIcon,
        },
        {
          title: "Specialties",
          path: `${role}/specialties`,
          icon: TryIcon,
        },
        {
          title: "Doctors",
          path: `${role}/doctors`,
          icon: MedicalInformation,
        },
        {
          title: "Schedules",
          path: `${role}/Schedule`,
          icon: CalendarMonth,
        },
        {
          title: "Appointments",
          path: `${role}/appointments`,
          icon: CalendarMonth,
        },
        {
          title: "Reviews",
          path: `${role}/reviews`,
          icon: ReviewsOutlined,
        }
      );
      break;
  }

  return [...roleMenus];
};
