import React, { useEffect, useState } from "react";
import "./EmloyeesList.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import CustomTable from "../common/CustomTable";
import fetchApi from "../constant/util";
import { EMPLOYEE_API, EMPLOYEE_API_ROOT } from "../constant/constants";
import { useNavigate } from "react-router-dom";

const EmployeesList = () => {
  const header = ["Mã nhân viên", "Họ và tên", "Địa chỉ"];
  const [data, setData] = useState<any[]>([]);
  const navigate = useNavigate();
  useEffect(() => {
    const fetchData = async () => {
      const result = await fetchApi(EMPLOYEE_API.LIST);
      console.log(result);
      setData([...result]);
    };

    fetchData();
  }, []);

  const onDelete = (index: number) => {
    fetch(EMPLOYEE_API.DELETE, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data[index][0]),
    })
      .then((response) => {
        if (response.ok) {
          alert("Xóa thành công");
          const clonedData = [...data];
          clonedData.splice(index);
          setData([...clonedData]);
        } else {
          alert("Xóa không thành công");
        }
      })
      .then((data) => {
        console.log(data); // In ra "Xoa thanh cong"
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const onShowDetail = (index: number) => {
    navigate(`/parking-management/employee/${data[index][0]}`);
  };

  return (
    <div>
      <h3 className="mb-5">Danh sách nhân viên</h3>
      <CustomTable
        headers={header}
        data={data}
        deleteFunction={onDelete}
        showFunction={onShowDetail}
      />
    </div>
  );
};

export default React.memo(EmployeesList);
