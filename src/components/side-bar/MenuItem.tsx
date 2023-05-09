import React from "react";
import SystemDateTime from "./SystemDateTime";

export interface IMenuItemProp {
  iconString: string;
  title: string;
  isExpand: boolean;
  children: IMenuItemProp[];
  showMenuTitle: boolean;
}

const MenuItem: React.FC<any> = ({
  iconString,
  title,
  isExpand,
  children,
  showMenuTitle,
}: IMenuItemProp) => {
  return (
    <div className="menu-item">
      <div className="menu-item-header">
        <div className="menu-icon">
          <i className={iconString}></i>
        </div>
        {/* <p></p> */}
        {showMenuTitle && <div className="menu-title">{title}</div>}
      </div>
      <div className="menu-item-children">
        {children.map((item: IMenuItemProp, index: number) => {
          return <MenuItem {...item}></MenuItem>;
        })}
      </div>
    </div>
  );
};

export default React.memo(MenuItem);
