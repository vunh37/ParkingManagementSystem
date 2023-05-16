import { useContext, useState } from "react";
import "./Login.scss";
import CustomInput from "../common/CustomInput";
import { ILoginInfor } from "../constant/interfaces";
import {
  LOGIN_INFOR_DEFAULT,
  REGEX_LOGIN_USER_NAME,
} from "../constant/constants";
import { userInfo } from "os";
import { AuthenContext } from "../context/AuthenContext";

const Login = () => {
  const { onLogin } = useContext(AuthenContext);
  const [loginInfor, setLoginInfor] = useState<ILoginInfor>({
    ...LOGIN_INFOR_DEFAULT,
  });
  const [loginErrorMessage, setLoginErrorMessage] = useState<ILoginInfor>({
    ...LOGIN_INFOR_DEFAULT,
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const errorMsg: ILoginInfor = { userName: "", password: "" };
    const { userName, password } = loginInfor;
    if (userName == "" || password == "") {
      alert("Xin vui lòng nhập đầy đủ Tên đăng nhập và mật khẩu");
      return;
    }

    if (!REGEX_LOGIN_USER_NAME.test(userName)) {
      alert("Tên không được chứa kí tự đặc biệt!");
      return;
    }
    if (onLogin) {
      onLogin(userName, password);
    }
  };

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setLoginInfor({ ...loginInfor, [name]: value });
  };

  return (
    <div className="login-container">
      <form onSubmit={handleSubmit} className="login-form">
        <div>
          <h1>Login</h1>
        </div>
        <CustomInput
          value={loginInfor.userName}
          label="UserName"
          onChangeHandle={handleChange}
          name="userName"
        />

        <CustomInput
          value={loginInfor.password}
          label="Password"
          onChangeHandle={handleChange}
          name="password"
          type="password"
        />

        <button
          type="submit"
          className="btn btn-primary"
          style={{ display: "block", margin: "0 auto" }}
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
