export const USER_ROLE = {
  SUPER_ADMIN: "super_admin",
  ADMIN: "admin",
  DOCTOR: "doctor",
  PATIENT: "patient",
};

export type UserRole = keyof typeof USER_ROLE;
