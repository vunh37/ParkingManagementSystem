import React from "react";
import SystemDateTime from "./SystemDateTime";
import MenuItem, { IMenuItemProp } from "./MenuItem";
const MENU_ITEMS_LIST: any[] = [
  {
    iconString: "fa-solid fa-people-group",
    children: [
      {
        iconString: "icon",
        children: [],
        title: "Danh sach nhan vien",
        isExpand: true,
        path: "/parking-management/employee-list",
      },
      {
        iconString: "icon",
        children: [],
        title: "Them nhan vien nhan vien",
        isExpand: true,
        path: "/parking-management/employee-list",
      },
      {
        iconString: "icon",
        children: [],
        title: "Cap nhap nhan vien",
        isExpand: true,
        path: "/parking-management/employeeslist",
      },
    ],
    // path: "/parking-management/employeeslist",
    title: "Quản lí nhân viên",
    isExpand: true,
  },
  {
    iconString: "fa-solid fa-user-tag",
    children: [],
    title: "quản lí khách hàng",
    isExpand: true,
  },
  {
    iconString: "fa-solid fa-car-side",
    children: [],
    title: "quản lí xe ra/vào",
    isExpand: true,
  },
  {
    iconString: "fa-solid fa-file-invoice-dollar",
    children: [],
    title: "quản lí thu chi",
    isExpand: true,
  },
  {
    iconString: "fa-solid fa-chart-simple",
    children: [],
    title: "thống kê",
    isExpand: true,
  },
];

interface IMenuProps {
  showMenuTitle: boolean;
}

const Menu: React.FC<any> = (props: IMenuProps) => {
  return (
    <div className="menu">
      {MENU_ITEMS_LIST.map((item: IMenuItemProp) => {
        return (
          <MenuItem
            key={item.title}
            {...item}
            showMenuTitle={props.showMenuTitle}
          />
        );
      })}
    </div>
  );
};

export default React.memo(Menu);
