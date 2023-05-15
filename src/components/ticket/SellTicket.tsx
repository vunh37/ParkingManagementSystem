import React, { useState } from "react";
import CustomInput from "../common/CustomInput";

const SellTicket = () => {
  const [customerName, setCustomerName] = useState<string>("");
  return (
    <div>
      <div className="sell-ticket mb-5">
        <h4>Bán vé</h4>
        <form>
          <div className="form-row row">
            <div className="col-md-6">
              <CustomInput
                value={customerName}
                name="customerName"
                onChangeHandle={(e: any) => setCustomerName(e.target.value)}
                label="Tên khách hàng"
              />
            </div>
          </div>
          <div className="form-row row">
            <div className="col-md-6">
              <div className="form-group">
                <label htmlFor="">Loại vé</label>
                <select className="form-select" value={""}>
                  <option value="1">Vé ngày</option>
                  <option value="1">Vé tháng</option>
                </select>
              </div>
            </div>
            <div className="col-md-6">
              <CustomInput
                value="10000"
                label="Giá tiền"
                name=""
                onChangeHandle={() => {}}
                disable={true}
              />
            </div>
          </div>
        </form>
      </div>
      <div className="extend-ticket">
        <h4>Gia hạn</h4>
        <form action="" className="form col-md-6">
          <CustomInput
            value={""}
            label="Nhập mã vé"
            name="ticketID"
            onChangeHandle={() => {}}
          />
          <div className="form-group mt-3 mb-5">
            <button className="btn btn-primary">Tìm thông tin vé</button>
          </div>
        </form>

        <form action="" className="form">
          <div className="form-row row ">
            <div className="col-md-4">
              <CustomInput
                label="Loại vé"
                name=""
                value="Vé ngày"
                onChangeHandle={() => {}}
                disable={true}
              />
            </div>
            <div className="col-md-4">
              <CustomInput
                label="Số tháng muốn gia hạn"
                name=""
                value="Vé ngày"
                type="number"
                onChangeHandle={() => {}}
                disable={false}
              />
            </div>
            <div className="col-md-4">
              <CustomInput
                label="Thành tiền"
                name=""
                value="100000"
                onChangeHandle={() => {}}
                disable={true}
              />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default React.memo(SellTicket);
