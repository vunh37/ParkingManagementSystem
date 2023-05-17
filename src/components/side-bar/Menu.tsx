import React from "react";
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
        title: "Thêm nhân viên",
        isExpand: true,
        path: "/parking-management/add-employee",
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
    children: [
      {
        iconString: "icon",
        children: [],
        title: "Danh sách khách hàng",
        isExpand: true,
        path: "/parking-management/customer-list",
      },
      {
        iconString: "icon",
        children: [],
        title: "Them khách hàng",
        isExpand: true,
        path: "/parking-management/add-customer",
      },
      {
        iconString: "icon",
        children: [],
        title: "Cập nhập",
        isExpand: true,
        path: "/parking-management/customer",
      },
    ],
    title: "quản lí khách hàng",
    isExpand: true,
  },
  {
    iconString: "fa-solid fa-car-side",
    children: [],
    title: "quản lí xe ra/vào",
    isExpand: true,
    path: "/parking-management/parking",
  },
  {
    iconString: "fa-solid fa-file-invoice-dollar",
    children: [
      {
        iconString: "icon",
        children: [],
        title: "Bán/Gia Hạn vé",
        isExpand: true,
        path: "/parking-management/sell-ticket",
      },
      {
        iconString: "icon",
        children: [],
        title: "Danh sách vé",
        isExpand: true,
        path: "/parking-management/add-customer",
      },
    ],
    title: "quản lí thu chi",
    isExpand: true,
  },
  {
    iconString: "fa-solid fa-chart-simple",
    children: [],
    title: "thống kê",
    isExpand: true,
    path: "/parking-management/statistic",
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
