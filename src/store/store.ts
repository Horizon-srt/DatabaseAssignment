import { UserInfoProps } from "@/utils/appType";
import { useState } from "react"

export const Store = () => {
  const [loginState, setLoginState] = useState(false);
  const [userInfo, setUserInfo] = useState({} as UserInfoProps);

  return {
    loginState,
    setLoginState,
    userInfo,
    setUserInfo
  }
}