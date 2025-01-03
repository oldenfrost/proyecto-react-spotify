import React, { useContext} from "react";

import { SpotifyFilled,CaretDownOutlined } from "@ant-design/icons";
import AsideBar from "../../components/AsideBar";
import { Dropdown } from 'antd';
import { Outlet,useNavigate  } from "react-router-dom";
import {AuthContext} from "../../utilities/AuthContext";



const Dashboard = () => {
  const { userData } = useContext(AuthContext);
  const navigate = useNavigate();
  const { logout } = useContext(AuthContext);

  const handleLogout = () => {
    logout()
    navigate('/');
  };

  const items = [
    {
      key: 'logout',
      label: 'Logout',
      onClick: handleLogout,
    },
  ];

  return (
    <>
      <div className="min-h-screen bg-black flex flex-col">
        <header className="flex items-center justify-between bg-black px-4 py-3">
          <div className="flex items-center">
            <SpotifyFilled className="text-white text-3xl mt-1 pl-2" />
          </div>

          <Dropdown menu={{ items }} trigger={['click']}>
          <h1 className="text-white text-xl font-semibold pr-5 cursor-pointer flex items-center">
            Welcome {userData.username}

            <CaretDownOutlined className="mt-2 ml-2" />
          </h1>
        </Dropdown>
        </header>
        <div className="flex flex-col sm:flex-row  pt-5 p-4">
          <AsideBar />
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default Dashboard;
