import { ILoginInfor } from "./interfaces";

export const LOGIN_INFOR_DEFAULT: ILoginInfor = {userName:"", password: ""};


export const REGEX_LOGIN_USER_NAME = /([A-Za-z0-9])\w+/;