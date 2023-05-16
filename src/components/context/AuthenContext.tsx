import React, { useEffect, useState } from "react";
import { USER_INFO_KEY } from "../constant/constants";

interface IAuthenContext {
  userID: number;
  userName: string;
  onLogin?: (userName: string, password: string) => void;
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
  const onLogin = (userName: string, password: string) => {
    if (userName == "vu" && password == "123") {
      alert("login thanh cong");
      localStorage.setItem(
        USER_INFO_KEY,
        JSON.stringify({ userID: 1, userName: "v" })
      );
      setUserInfor({ userName: userName, userID: 1 });
    }
  };

  const onLogOut = () => {
    setUserInfor({ ...userInfo, userID: -1 });
  };

  // useEffect(() => {
  //   try {
  //     const userInfor: any = JSON.parse(
  //       localStorage.getItem(USER_INFO_KEY) || ""
  //     );
  //     if (userInfor) {
  //       setUserID(userInfor?.userI);
  //       setUserName(userInfor?.userName);
  //     }
  //   } catch (error) {}
  // }, []);

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
