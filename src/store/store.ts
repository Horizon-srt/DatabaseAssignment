import { UserInfoProps } from "@/utils/appType";
import { useState } from "react"

export const Store = () => {
  const [loginState, setLoginState] = useState(false);
  const [userInfo, setUserInfo] = useState({} as UserInfoProps);
  const [rootLogin, setRootLogin] = useState(false);

  const logout = () => {
    setLoginState(false);
    setUserInfo({} as UserInfoProps);
    setRootLogin(false);
  }

  return {
    loginState,
    setLoginState,
    userInfo,
    setUserInfo,
    rootLogin,
    setRootLogin,
    logout
  }
}