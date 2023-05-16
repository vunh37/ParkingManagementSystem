import { IEmployee, ILoginInfor } from "./interfaces";

export const LOGIN_INFOR_DEFAULT: ILoginInfor = { userName: "", password: "" };

export const REGEX_LOGIN_USER_NAME = /([A-Za-z0-9])\w+/;

export const REGEX_CHECK_PHONE_NUMBER = /[0-9]{10,}/;

export const USER_INFO_KEY = "USER_INFOR_PARKING_MANAGEMENT";

export const EMPLOYEE_DEFAULT: IEmployee = {
  userName: "",
  dateOfBirth: "",
  address: "",
  email: "",
  gender: "",
  phoneNumber: "",
  password: "123",
  fullName: "",
  roleName: "",
};
