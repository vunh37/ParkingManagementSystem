import React from "react";
import CustomInput from "../common/CustomInput";

export const Staticstic = () => {
  return (
    <div className="row">
      <h4>Thống kê/ Xuất báo cáo</h4>
      <form action="" className="form row">
        <div className="form-group col-md-2">
          <label htmlFor="">Thống kê theo</label>
          <select name="" id="" className="form-select ">
            <option value="1">Ngày</option>
            <option value="2">Tháng</option>
            <option value="3">Năm</option>
          </select>
        </div>
        <div className="form-group col-md-3">
          <CustomInput
            value=""
            onChangeHandle={() => {}}
            name=""
            label="Ngày"
            type="date"
          />
        </div>
        <div className="form-group col-md-3">
          <CustomInput
            value=""
            onChangeHandle={() => {}}
            name=""
            label="Tháng"
            type="number"
          />
        </div>
        <div className="form-group col-md-2">
          <CustomInput
            value=""
            type="number"
            onChangeHandle={() => {}}
            name=""
            label="Năm"
          />
        </div>
        <div className="form-group col-md-2" style={{ position: "relative" }}>
          <button
            className="btn btn-primary"
            style={{ position: "absolute", bottom: "0" }}
          >
            Thống kê
          </button>
        </div>
      </form>
    </div>
  );
};

export default React.memo(Staticstic);
