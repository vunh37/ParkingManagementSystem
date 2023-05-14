import React from "react";
import { ICustomInput } from "../constant/interfaces";

const CustomInput = ({
  label,
  value,
  onChangeHandle,
  type,
  name,
}: ICustomInput) => {
  return (
    <div className="form-group">
      <label>{label}</label>
      <input
        name={name}
        type={type ? type : "text"}
        className="form-control"
        value={value}
        onChange={onChangeHandle}
      ></input>
    </div>
  );
};

export default React.memo(CustomInput);
