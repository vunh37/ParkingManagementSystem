import React from "react";
import CustomTable from "../common/CustomTable";

const CustomersList = () => {
  const header = ["id", "name", "age"];
  const data: any[] = [{ id: 1, name: "vu", age: 20 }];
  return (
    <div>
      <CustomTable headers={header} data={data} />
    </div>
  );
};

export default React.memo(CustomersList);
