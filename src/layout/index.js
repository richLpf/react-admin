import React, { useState } from "react";
import { Layout, Menu } from "antd";
import {
  UserOutlined,
  VideoCameraOutlined,
  LaptopOutlined,
  MenuUnfoldOutlined,
  MenuFoldOutlined,
} from "@ant-design/icons";
import { HashRouter as Router, Link, Route } from "react-router-dom";
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

const { Header, Content, Sider } = Layout;
const { SubMenu } = Menu;

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
          <Menu
            theme="dark"
            mode="inline"
            defaultSelectedKeys={["1"]}
            defaultOpenKeys={["sub1"]}
          >
            <SubMenu key="sub1" icon={<UserOutlined />} title="看板">
              <Menu.Item key="1" icon={<UserOutlined />}>
                <Link to="/dashboard1">
                  <span>Link看板一</span>
                </Link>
              </Menu.Item>
              <Menu.Item key="2" icon={<VideoCameraOutlined />}>
                <Link to="/dashboard2">
                  <span>Link看板二</span>
                </Link>
              </Menu.Item>
            </SubMenu>
            <SubMenu key="sub2" icon={<LaptopOutlined />} title="图表">
              <Menu.Item key="3" icon={<UserOutlined />}>
                <Link to="/echart">
                  <span>Echart</span>
                </Link>
              </Menu.Item>
              <Menu.Item key="4" icon={<VideoCameraOutlined />}>
                <Link to="/bizchart">
                  <span>Antv</span>
                </Link>
              </Menu.Item>
            </SubMenu>
            <SubMenu key="sub3" icon={<LaptopOutlined />} title="基础组件">
              <Menu.Item key="5" icon={<UserOutlined />}>
                <Link to="/progress">
                  <span>进度</span>
                </Link>
              </Menu.Item>
              <Menu.Item key="6" icon={<UserOutlined />}>
                <Link to="/tree">
                  <span>树组件</span>
                </Link>
              </Menu.Item>
              <Menu.Item key="7" icon={<UserOutlined />}>
                <Link to="/editor">
                  <span>富文本</span>
                </Link>
              </Menu.Item>
            </SubMenu>
            <SubMenu key="sub4" icon={<LaptopOutlined />} title="权限管理">
              <Menu.Item key="8" icon={<UserOutlined />}>
                <Link to="/user">
                  <span>用户管理</span>
                </Link>
              </Menu.Item>
              <Menu.Item key="9" icon={<UserOutlined />}>
                <Link to="/role">
                  <span>角色管理</span>
                </Link>
              </Menu.Item>
            </SubMenu>
            <SubMenu key="sub5" icon={<LaptopOutlined />} title="错误页面">
              <Menu.Item key="10" icon={<UserOutlined />}>
                <Link to="/404">
                  <span>用户管理</span>
                </Link>
              </Menu.Item>
            </SubMenu>
          </Menu>
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
          </Router>
        </Content>
      </Layout>
    </Layout>
  );
}

export default Home;
