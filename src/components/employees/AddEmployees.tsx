import React, { useEffect, useState } from "react";
import "./AddEmployees.scss";
import CustomInput from "../common/CustomInput";
import { IEmployee, IRole } from "../constant/interfaces";
import { useParams } from "react-router-dom";
import {
  EMPLOYEE_API,
  EMPLOYEE_DEFAULT,
  REGEX_CHECK_PHONE_NUMBER,
  ROLE_API,
} from "../constant/constants";
import CustomRadioInput from "../common/CustomRadioInput";
import fetchApi from "../constant/util";

const AddEmployee = (props: any) => {
  const { mode } = props;

  const { employeeId } = useParams();

  const [employee, setEmployee] = useState<IEmployee>({ ...EMPLOYEE_DEFAULT });
  const [listRole, setListRole] = useState<any[]>([]);
  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setEmployee({ ...employee, [name]: value });
  };

  useEffect(() => {
    if (mode === "add") return;
    const fetchEmployee = async () => {
      const result = await fetchApi(`${EMPLOYEE_API.GET}/${employeeId}`);
      console.log(result);
    };
    fetchEmployee();
  }, []);

  useEffect(() => {
    const fetchListRole = async () => {
      const result = await fetchApi(ROLE_API.LIST);
      setListRole([...result]);
    };
    fetchListRole();
  }, []);

  const handleSubmitForm = (e: any) => {
    e.preventDefault();
    if (Object.values(employee).some((value: string) => value === "")) {
      alert("Vui lòng điền đầy đủ thông tin nhân viên");
      return;
    }

    if (!REGEX_CHECK_PHONE_NUMBER.test(employee.phoneNumber)) {
      alert("Vui lòng điền chính xác số điện thoại");
      return;
    }

    fetch(EMPLOYEE_API.ADD, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...employee }),
    });

    alert("Them nhan vien thanh cong");
  };
  return (
    <div className="add-employees-container">
      <h1 className="mb-5">Thêm nhân viên</h1>
      <form onSubmit={handleSubmitForm} className="add-form">
        <div className="form-row row">
          <div className="col-md-6">
            <CustomInput
              name="fullName"
              label="Họ và tên"
              value={employee.fullName}
              onChangeHandle={handleChange}
            />
          </div>
          <div className="col-md-6">
            <CustomRadioInput
              name="gender"
              label="Giới tính"
              value={employee.gender}
              onChangeHandle={handleChange}
              items={["Nam", "Nữ"]}
            />
          </div>
        </div>

        <div className="form-row row">
          <div className="col-md-6">
            <CustomInput
              name="dateOfBirth"
              label="Ngày sinh"
              value={employee.dateOfBirth}
              onChangeHandle={handleChange}
              type="date"
            />
          </div>
          <div className="col-md-6">
            <CustomInput
              name="phoneNumber"
              label="SĐT"
              value={employee.phoneNumber}
              onChangeHandle={handleChange}
              type="string"
            />
          </div>
        </div>

        <CustomInput
          name="address"
          label="Địa chỉ"
          value={employee.address}
          onChangeHandle={handleChange}
          type="string"
        />

        <div className="form-row row">
          <div className="col-md-6">
            <div className="form-group">
              <label htmlFor="">Cấp bậc</label>
              <select
                className="form-select"
                value={employee.roleID}
                name="roleID"
                onChange={handleChange}
              >
                {listRole.map((item: any, index: number) => {
                  return <option value={item[0]}>{item[1]}</option>;
                })}
              </select>
            </div>
          </div>
          <div className="col-md-6">
            <CustomInput
              name="email"
              label="Email"
              value={employee.email}
              onChangeHandle={handleChange}
              type="string"
            />
          </div>
        </div>

        <div className="form-row row">
          <div className="col-md-6">
            <CustomInput
              name="userName"
              label="Tên đăng nhập"
              value={employee.userName}
              onChangeHandle={handleChange}
              type="string"
            />
          </div>
          <div className="col-md-6">
            <CustomInput
              name="password"
              label="Password"
              value={employee.password}
              onChangeHandle={handleChange}
              type="string"
            />
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <button className="btn btn-primary" type="submit">
              Thêm nhân viên
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddEmployee;
