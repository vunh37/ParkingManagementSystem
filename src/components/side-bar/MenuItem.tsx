import React, { useState } from "react";
import SystemDateTime from "./SystemDateTime";
import path from "path";

export interface IMenuItemProp {
  iconString: string;
  title: string;
  children: IMenuItemProp[];
  path: string;
  showMenuTitle: boolean;
}

const MenuItem: React.FC<any> = ({
  iconString,
  title,
  children,
  path,
  showMenuTitle,
}: IMenuItemProp) => {
  const [expand, setExpand] = useState<boolean>(false);

  const handleExpand = () => {
    setExpand(!expand);
  };

  return (
    <div className="menu-item">
      <div className="menu-item-header">
        <div className="menu-icon">
          <i className={iconString}></i>
        </div>
        <div className="menu-title" onClick={handleExpand}>
          <a href={path}>{title}</a>
        </div>
      </div>
      {expand && (
        <div className="menu-item-children">
          {children.map((item: IMenuItemProp, index: number) => {
            return <MenuItem key={item.title + index} {...item}></MenuItem>;
          })}
        </div>
      )}
    </div>
  );
};

export default React.memo(MenuItem);
