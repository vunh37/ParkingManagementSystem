import React from "react";
import "./HeaderBar.scss";
const HeaderBar: React.FC<any> = (props: any) => {
  return (
    <div className="header-bar">
      <div className="search">
        <form>
          <input></input>
        </form>
      </div>
      <div className="tool-bar"></div>
    </div>
  );
};

export default React.memo(HeaderBar);
