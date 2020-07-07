import React, { useState } from "react";
import { Layout } from "antd";
import {
  UserOutlined,
  VideoCameraOutlined,
  LaptopOutlined,
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  DashboardOutlined
} from "@ant-design/icons";
import { HashRouter as Router, Link, Route } from "react-router-dom";
import ContentComponent from './content'
import MenuComponent from './menu'
import EChart from "@/page/chart/echarts";
import Antv from "@/page/chart/bizcharts";
import HeaderInfo from "@/component/HeaderInfo";
import NotFound from "@/page/NotFound/404";
import Progress from "@/page/progress";
import Tree from "@/page/tree";
import Demo from "@/page/bases/demo";
import DashBoard1 from "@/page/dashboard/dashboard1"
import DashBoard2 from "@/page/dashboard/dashboard2"
import Editor from '@/page/bases/Editor'
import AdminRole from '@/page/admin/role'
import AdminUser from '@/page/admin/user'
import About from '@/page/about'

const { Header, Content, Sider } = Layout;
//const { SubMenu } = Menu;

function LayoutComponent(props) {
  const [collapsed, setCollapsed] = useState(false);

  const toggle = () => {
    setCollapsed(!collapsed);
  };

  return (
    <Layout>
      <Router>
        <Sider
          trigger={null}
          collapsible
          collapsed={collapsed}
          style={{
            overflow: "auto",
            minHeight: "100vh",
          }}
        >
          <div className="logo" />
          <MenuComponent />
        </Sider>
      </Router>
      <Layout className="site-layout">
        <Header
          className="site-layout-background"
          style={{ paddingLeft: 10, paddingRight: 10 }}
        >
          {React.createElement(
            collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
            {
              className: "trigger",
              onClick: toggle,
            }
          )}
          <HeaderInfo />
        </Header>
        <ContentComponent />
      </Layout>
    </Layout>
  );
}

export default LayoutComponent;
