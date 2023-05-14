import React from "react";
import SystemDateTime from "./SystemDateTime";
import path from "path";

export interface IMenuItemProp {
  iconString: string;
  title: string;
  isExpand: boolean;
  children: IMenuItemProp[];
  path: string;
  showMenuTitle: boolean;
}

const MenuItem: React.FC<any> = ({
  iconString,
  title,
  isExpand,
  children,
  path,
  showMenuTitle,
}: IMenuItemProp) => {
  return (
    <div className="menu-item">
      <div className="menu-item-header">
        <div className="menu-icon">
          <i className={iconString}></i>
        </div>
        {/* <p></p> */}
        <div className="menu-title">
          <a href={path}>{title}</a>
        </div>
      </div>
      <div className="menu-item-children">
        {children.map((item: IMenuItemProp, index: number) => {
          return <MenuItem key={item.title + index} {...item}></MenuItem>;
        })}
      </div>
    </div>
  );
};

export default React.memo(MenuItem);
