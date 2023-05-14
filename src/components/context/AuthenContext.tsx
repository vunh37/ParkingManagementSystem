import React from "react";

const AuthenContext = React.createContext<boolean>(false);

export const App = (props: any) => {
  return (
    <AuthenContext.Provider value={true}>
      {props.children}
    </AuthenContext.Provider>
  );
};
