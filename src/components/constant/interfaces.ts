export interface ICustomInput {
    name: string,
    value: string,
    type?: string,
    label: string,
    onChangeHandle: (e: any) => void,
}

export interface ICustomTable {
    headers: string[],
    data: any[],
    deleteFunction?: (id: number) => void,
    showFunction?: (id: number) => void,
    editFunction?: (id: number) => void,
}


export interface IPerson {
    id?: number,
    name: string,
}

export interface ILoginInfor {
    userName: string,
    password: string,
}

