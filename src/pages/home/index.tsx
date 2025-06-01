import { TbMoneybag } from "react-icons/tb";
import { FaTruck } from "react-icons/fa";
import { LiaListOlSolid } from "react-icons/lia";
import { IoIosPeople } from "react-icons/io";
import { GrUserWorker } from "react-icons/gr";
import { PiScalesFill } from "react-icons/pi";

import { Button, Layout, Menu } from "antd";
import Logo from "../../assets/imges/mini-logo.png";

import AddDebtModal from "../../components/modals/add-debt-modal";
// import { useDispatch } from "react-redux";
import { Outlet, useNavigate } from "react-router-dom";
import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";

import { useState } from "react";
const { Header, Sider, Content } = Layout;

const HomePage = () => {
  const navigate = useNavigate();

  const [collapsed, setCollapsed] = useState(false);

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sider
        className="container hidden md:block "
        theme="light"
        trigger={null}
        collapsible
        collapsed={collapsed}
      >
        <div className="demo-logo-vertical mt-[20px] flex items-center justify-center">
          <img className="w-20 h-full" src={Logo} alt="Admin Panel Logo" />
          <h1
            className={`text-lg sm:text-xl font-[500]  ${
              collapsed ? "hidden" : "block"
            }`}
          >
            Jasur savdo
          </h1>
        </div>
        <Menu
          theme="light"
          mode="inline"
          defaultSelectedKeys={["1"]}
          className="mt-[40px]"
          items={[
            {
              key: "12",
              icon: <IoIosPeople className=" !text-[19px]" />,
              label: (
                <span className="font-[500] text-base sm:text-lg  ">Xalq</span>
              ),
              onClick: () => navigate("/"),
            },
            {
              key: "14",
              icon: <PiScalesFill className=" !text-[19px]" />,
              label: (
                <span className="font-[500] text-base sm:text-lg  ">Optom</span>
              ),
              onClick: () => navigate("/optom"),
            },
            {
              key: "2",
              icon: <FaTruck className="!text-[20px]" />,
              label: (
                <span className="font-[500] text-lg sm:text-xl  ">
                  Firmalar
                </span>
              ),
              onClick: () => navigate("/firms"),
            },
            {
              key: "3",
              icon: <LiaListOlSolid className=" !text-[20px]" />,
              label: (
                <span className="font-[500] text-lg sm:text-xl  ">Ro'yxat</span>
              ),
              onClick: () => navigate("/list"),
            },

            {
              key: "4",
              icon: <GrUserWorker className=" !text-[20px]" />,
              label: (
                <span className="font-[500] text-lg sm:text-xl  ">
                  Ishchilar
                </span>
              ),
              onClick: () => navigate("/employes"),
            },
          ]}
        />
      </Sider>

      {/* Mobile bottom navigation */}
      <div className="fixed bottom-0 left-0 w-full h-[60px] flex items-center overflow-x-scroll bg-white shadow-md  md:hidden z-50">
        <div className="w-[90%] m-auto flex  justify-between items-center">
          <div
            onClick={() => navigate("/")}
            className="flex flex-col items-center text-sm"
          >
            <TbMoneybag className="text-xl" />
            <span>Qarz</span>
          </div>

          <div
            onClick={() => navigate("/firms")}
            className="flex flex-col items-center text-sm"
          >
            <FaTruck className="text-xl" />
            <span>Firmalar</span>
          </div>

          <div
            onClick={() => navigate("/list")}
            className="flex flex-col items-center text-sm"
          >
            <LiaListOlSolid className="text-xl" />
            <span>Ro'yxat</span>
          </div>

          <div
            onClick={() => navigate("/employes")}
            className="flex flex-col items-center text-sm"
          >
            <GrUserWorker className="text-xl" />
            <span>Ishchilar</span>
          </div>
        </div>
      </div>

      <Layout>
        <Header
          className="flex items-center "
          style={{ padding: 0, height: "90px", backgroundColor: "white" }}
        >
          <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            className="text-[20px] !w-[64px] h-[64px]"
          />
        </Header>
        <Content
          style={{
            margin: "24px 16px",
            padding: 24,
            height: 280,
          }}
          className="!overflow-y-scroll"
        >
          <Outlet />
        </Content>
      </Layout>
      <AddDebtModal />
    </Layout>
  );
};

export default HomePage;
