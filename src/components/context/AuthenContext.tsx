import React from "react";

const AuthenContext = React.createContext<boolean>(false);

export const App = (props: any) => {
  console.log("vao` app?");
  return (
    <AuthenContext.Provider value={true}>
      {props.children}
    </AuthenContext.Provider>
  );
};
