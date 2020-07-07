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
import RouterComponent from '@/router'
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

function Home(props) {
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
          <RouterComponent />
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
        <Content
          className="site-layout-background"
          style={{
            margin: "24px 16px",
            padding: 24,
            minHeight: 280,
          }}
        >
          <Router>
            <Route exact path="/" component={DashBoard1} />
            <Route exact path="/dashboard1" component={DashBoard1} />
            <Route exact path="/dashboard2" component={DashBoard2} />
            <Route exact path="/echart" component={EChart} />
            <Route exact path="/bizchart" component={Antv} />
            <Route exact path="/progress" component={Progress} />
            <Route exact path="/404" component={NotFound} />
            <Route exact path="/tree" component={Tree} />
            <Route exact path="/demo" component={Demo} />
            <Route exact path="/editor" component={Editor} />
            <Route exact path="/user" component={AdminUser} />
            <Route exact path="/role" component={AdminRole} />
            <Route exact path="/about" component={About} />
          </Router>
        </Content>
      </Layout>
    </Layout>
  );
}

export default Home;
