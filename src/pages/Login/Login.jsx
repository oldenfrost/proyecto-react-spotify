import { useNavigate, useLocation } from "react-router-dom";
import React, { useState, useContext } from "react";

import { Form,Checkbox } from "antd";
import { SpotifyFilled, LoadingOutlined } from "@ant-design/icons";

import { AuthContext } from "../../utilities/AuthContext";
import CustomButton from "../../components/CustomButton";
import CustomInput from "../../components/CustomInput";
import CustomAlert from "../../components/CustomAlert";
import { loginUser } from "../../services/LoginService";

const Login = () => {
  const [alert, setAlert] = useState({ type: "", message: "", visible: false });

  const [loading, setLoading] = useState(false);

  const { login } = useContext(AuthContext);

  const navigate = useNavigate();

  const location = useLocation();
  const from = location.state?.from?.pathname || "/Dashboard/SearchTrack";

  const onFinish = async (values) => {
    setLoading(true);

    try {
      const data = await loginUser(values.correo, values.password);
      login(data.accessToken, data.username);

      navigate(from, {
        replace: true,
        state: {},
      });
    } catch (error) {
      setAlert({
        type: "error",
        message: error.message,
        visible: true,
      });
    } finally {
      setLoading(false);
    }
  };

  const onFinishFailed = (errorInfo) => {
    const messages = errorInfo.errorFields
      .map((field) => field.errors)
      .flat()
      .join(" ");
    setAlert({
      type: "error",
      message: messages,
      visible: true,
    });
  };

  return (
    <div className="w-screen h-screen p-0 m-0 flex items-center justify-center bg-gradient-to-b from-neutral-800 via-stone-950 to-black">
      <div className="w-full h-screen sm:max-w-md xl:max-w-2xl sm:h-auto xl:h-[800px] bg-gradient-to-b from-neutral-950 to-neutral-900 p-10 rounded-lg flex flex-col items-center justify-center">
        <SpotifyFilled className="text-white text-5xl mb-4" />
        <h2 className="text-2xl text-white font-semibold text-center mb-6">
          Spotify
        </h2>
        <div className="w-full h-[0.1px] bg-gray-400 mb-6"></div>

        <CustomAlert
          message={alert.message}
          type={alert.type}
          onClose={() => setAlert({ ...alert, visible: false })}
          className=" w-full mb-6 bg-red-600 !text-white border-transparent "
          visible={alert.visible}
        />

        <Form
          name="login-form"
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          layout="vertical"
          className="w-full flex flex-col items-center"
        >
          <CustomInput
            divClass="flex flex-col items-center w-[310px] !text-white"
            name="correo"
            divInputClass="flex flex-col items-center w-[310px]"
            labelClass="mb-2 !text-white text-start w-full"
            inpClass="w-full h-10 !bg-transparent !text-white  !border-white"
            label="Email o nombre de usuario"
            isPassword={false}
            rules={[
              { required: true, message: "Por favor, ingrese su usuario" },
              {
                type: "text",
                message: "Por favor, ingrese un usuario válido.",
              },
            ]}
          />

          <CustomInput
            divClass="flex flex-col items-center w-auto"
            name="password"
            divInputClass="flex flex-col items-center w-[310px]"
            labelClass="mb-2 text-white text-start w-full"
            inpClass="w-full h-10 !bg-transparent !text-white  !border-white"
            label="Contraseña"
            isPassword={true}
            rules={[
              { required: true, message: "Por favor, ingrese su contraseña." },
              {
                min: 6,
                message: "La contraseña debe de ser mayor 6 caracteres.",
              },
            ]}
          />

          <Form.Item className="mt-6">
            <CustomButton
              text={loading ? <LoadingOutlined /> : "Iniciar sesión"}
              className="!bg-green-500 !text-black !text-lg 
             hover:!bg-green-400 focus:!bg-green-400 
             !border-none h-10 w-[310px] rounded-3xl 
             !font-bold transform transition 
             duration-300 hover:scale-110"
              htmlType="submit"
            />
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};
export default Login;
