import React, { useState } from "react";
import CustomInput from "../common/CustomInput";
import "./Parking.scss";
const Parking = () => {
  const [ticketId, setTicketId] = useState<string>("");
  const [showParkingSpace, setShowParkingSpace] = useState<boolean>(false);
  const handleChangeTicketId = (e: any) => {
    setTicketId(e.target.value);
  };

  const handleShowParkingSpace = () => {
    setShowParkingSpace(!showParkingSpace);
  };
  return (
    <div className="parking-container">
      <h1 className="mb-5">Quản lí xe ra vào</h1>
      <form action="" className="form col-md-6">
        <CustomInput
          value={ticketId}
          label="Nhập mã vé"
          name="ticketID"
          onChangeHandle={handleChangeTicketId}
        />
        <div className="form-group mt-3 mb-5">
          <button className="btn btn-primary">Tìm thông tin đỗ xe</button>
        </div>
      </form>

      <div className="parking-detail row">
        <form action="form">
          <div className="row">
            <div className="col-md-6">
              <CustomInput
                value=""
                onChangeHandle={() => {}}
                name=""
                label="Biển số xe vào"
              ></CustomInput>
            </div>
            <div className="col-md-6">
              <CustomInput
                value=""
                onChangeHandle={() => {}}
                name=""
                label="Giờ vào"
                type="datetime-local"
              ></CustomInput>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6">
              <CustomInput
                value=""
                onChangeHandle={() => {}}
                name=""
                label="Biển số xe ra"
              ></CustomInput>
            </div>
            <div className="col-md-6">
              <CustomInput
                value=""
                onChangeHandle={() => {}}
                name=""
                label="Giờ ra"
                type="datetime-local"
              ></CustomInput>
            </div>
          </div>
        </form>
      </div>
      <div className="parking-space-detail mt-5">
        <h1>Quản lí vị trí để xe</h1>
        <p>
          Số chổ trống: {50}{" "}
          <button
            className="btn btn-info"
            type="button"
            onClick={handleShowParkingSpace}
          >
            Xem
          </button>
        </p>
      </div>
      {showParkingSpace && (
        <div className="parking-space-list">
          <div className="content"></div>
          <button className="btn btn-danger" onClick={handleShowParkingSpace}>
            Đóng
          </button>
        </div>
      )}
    </div>
  );
};

export default React.memo(Parking);
