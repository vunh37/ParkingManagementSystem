import React from "react";
import "./MainContent.scss";
import { Outlet } from "react-router-dom";
const MainContent: React.FC<any> = (props: any) => {
  return (
    <div className="main-content">
      {/* <HeaderBar /> */}
      <div id="detail" style={{ width: "100%", height: "100%" }}>
        <Outlet />
      </div>
    </div>
  );
};

export default React.memo(MainContent);
