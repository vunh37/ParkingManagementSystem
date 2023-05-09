import React, { useEffect, useRef, useState } from "react";
import SystemDateTime from "./SystemDateTime";
import "./SideBar.scss";
import Menu from "./Menu";
const SideBar: React.FC<any> = (props: any) => {
  const sideBarRef: any = useRef(null);
  const [showMenuTitle, setShowMenuTitle] = useState<boolean>(true);
  useEffect(() => {
    const observer = new ResizeObserver((element: any) => {
      if (element[0].contentRect.width <= 50) {
        setShowMenuTitle(false);
      } else {
        setShowMenuTitle(true);
      }
    });

    observer.observe(sideBarRef?.current as any);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div className="side-bar" ref={sideBarRef}>
      <div className="app-logo">
        <i className="fa-solid fa-square-parking"></i>
        {/* <i className="fa-solid fa-circle-parking"></i> */}
      </div>
      {/* <SystemDateTime /> */}
      <Menu showMenuTitle={showMenuTitle} />
    </div>
  );
};

export default React.memo(SideBar);
