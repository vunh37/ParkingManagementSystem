import React from "react";
import HeaderBar from "./HeaderBar";
import "./MainContent.scss";
import { Outlet } from "react-router-dom";
const MainContent: React.FC<any> = (props: any) => {
  return (
    <div className="main-content">
      <HeaderBar />
      <div id="detail">
        <Outlet />
      </div>
    </div>
  );
};

export default React.memo(MainContent);
