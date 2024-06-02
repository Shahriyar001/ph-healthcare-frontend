import { authkey } from "@/constants/authKey";
import { setToLocalStorage } from "@/ulils/local.storage";

export const storeUserInfo = ({ accessToken }: { accessToken: string }) => {
  return setToLocalStorage(authkey, accessToken);
};
