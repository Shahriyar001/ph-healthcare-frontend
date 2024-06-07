import { USER_ROLE } from "@/constants/role";
import { DrawerItem, UserRole } from "@/types";
import {
  CalendarMonth,
  MedicalInformation,
  ReviewsOutlined,
} from "@mui/icons-material";

import DashboardIcon from "@mui/icons-material/Dashboard";
import GroupIcon from "@mui/icons-material/Group";
import PaidIcon from "@mui/icons-material/Paid";
import Person3Icon from "@mui/icons-material/Person3";

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
          icon: Person3Icon,
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

    case USER_ROLE.DOCTOR:
      roleMenus.push(
        {
          title: "Dashboard",
          path: `${role}`,
          icon: DashboardIcon,
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
        }
      );
      break;
    case USER_ROLE.PATIENT:
      roleMenus.push(
        {
          title: "Appointments",
          path: `${role}/appointments`,
          icon: CalendarMonth,
        },
        {
          title: "Prescription",
          path: `${role}/Prescription`,
          icon: DashboardIcon,
        },
        {
          title: "Payment History",
          path: `${role}/payment-history`,
          icon: PaidIcon,
        }
      );
      break;

    default:
      break;
  }

  return [...roleMenus];
};
