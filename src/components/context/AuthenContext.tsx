import React, { useState } from "react";
import { LOGIN_API_URL, USER_INFO_KEY } from "../constant/constants";

interface IAuthenContext {
  userID: number;
  userName: string;
  onLogin?: (userName: string, password: string) => any;
  onLogOut?: () => void;
}

export const AuthenContext = React.createContext<IAuthenContext>({
  userID: -1,
  userName: "",
});

const getUserIdFromLocalStorage = () => {
  let userId = 1;
  let userName = "";
  try {
    const userInfor: any = JSON.parse(
      localStorage.getItem(USER_INFO_KEY) || ""
    );

    if (userInfor) {
      userId = userInfor.userId;
      userName = userInfor.userName;
    }
  } catch (error) {}
  return { userID: userId, userName: userName };
};

export const App = (props: any) => {
  const [userInfo, setUserInfor] = useState<IAuthenContext>(
    getUserIdFromLocalStorage()
  );
  const onLogin = async (userName: string, password: string) => {
    try {
      const response = await fetch(LOGIN_API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          userName: userName.trim(),
          password: password.trim(),
        }),
      });
      const jsonData = await response.json();
      localStorage.setItem(USER_INFO_KEY, JSON.stringify({ ...jsonData }));
      return true;
    } catch (error) {
      return false;
    }
  };

  const onLogOut = () => {
    setUserInfor({ ...userInfo, userID: -1 });
  };

  const valueContext: IAuthenContext = {
    userID: userInfo.userID,
    userName: userInfo.userName,
    onLogin: onLogin,
    onLogOut: onLogOut,
  };

  return (
    <AuthenContext.Provider value={valueContext}>
      {props.children}
    </AuthenContext.Provider>
  );
};
