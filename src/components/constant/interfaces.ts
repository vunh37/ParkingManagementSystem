export interface ICustomInput {
  name: string;
  value: string;
  type?: string;
  label: string;
  disable?: boolean;
  onChangeHandle: (e: any) => void;
}

export interface ICustomRadioInput {
  name: string;
  value: string;
  label: string;
  items: string[];
  onChangeHandle: (e: any) => void;
}

export interface ICustomTable {
  headers: string[];
  data: any[];
  deleteFunction: (id: number) => void;
  showFunction: (id: number) => void;
  editFunction?: (id: number) => void;
}

export interface IPerson {
  id?: number;
  name: string;
}

export interface ILoginInfor {
  userName: string;
  password: string;
}

export interface IEmployee {
  userName: string;
  dateOfBirth: string;
  address: string;
  email: string;
  gender: string;
  phoneNumber: string;
  password: string;
  fullName: string;
  roleID: number;
}

export interface IRole {
  roleID: number;
  roleName: string;
}

// export interface ITicket {
//   ticketId: string;
//   carPlateIn;
// }
