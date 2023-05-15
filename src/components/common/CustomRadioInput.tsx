import React from "react";
import { ICustomRadioInput } from "../constant/interfaces";

const CustomRadioInput = ({
  label,
  value,
  onChangeHandle,
  name,
  items,
}: ICustomRadioInput) => {
  return (
    <>
      <label htmlFor="">Giới tính</label>
      {items.map((item: string, index: number) => {
        return (
          <div className="form-check" key={item + index}>
            <input
              className="form-check-input"
              type="radio"
              name={name}
              checked={value === item}
              value={item}
              onChange={onChangeHandle}
            />
            <label className="form-check-label">{item}</label>
          </div>
        );
      })}
    </>
  );
};

export default React.memo(CustomRadioInput);
