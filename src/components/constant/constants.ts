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
  roleID: 1,
};

export const API_PREFIX = "http://localhost:8080/api/";

export const LOGIN_API_URL = "http://localhost:8080/api/login";

export const EMPLOYEE_API_ROOT = "http://localhost:8080/api/employee";

export const EMPLOYEE_API = {
  LIST: `${EMPLOYEE_API_ROOT}/list`,
  ADD: `${EMPLOYEE_API_ROOT}/add`,
  DELETE: `${EMPLOYEE_API_ROOT}/delete`,
  GET: `${EMPLOYEE_API_ROOT}`,
};

export const ROLE_API = {
  LIST: "http://localhost:8080/api/role/list",
};
