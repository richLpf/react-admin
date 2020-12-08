import React, { useState, useEffect } from "react";
import { Layout } from "antd";
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
} from "@ant-design/icons";
import { HashRouter as Router, Link, Route } from "react-router-dom";
import ContentComponent from './content'
import MenuComponent from './menu'
import { getMenuAcl } from '@/api/acl'
import HeaderInfo from "@/component/HeaderInfo";
import routes, { publicRoutes } from '@/router'
const { Header, Content, Sider } = Layout;

function LayoutComponent(props) {
  
  const [collapsed, setCollapsed] = useState(false);
  const [newRoutes, setNewRoutes] = useState([])

  const toggle = () => {
    setCollapsed(!collapsed);
  };

  useEffect(() => {
    let obj = {
      user: 'pengfei.lv',
      namespace: 'demo',
      category: 'menu'
    }
    getMyMenu(obj)
  }, [])

  const getMyMenu = (data) => {
    getMenuAcl(data).then(res => {
      if(res.RetCode === 0){
        const p = res.Data.map(item => {
          return ("-"+item.resource).replace(new RegExp(/-/g), "/")
        })
        generateRoute(p)
      }
    })
  }

  // 页面权限，将获取的资源存放在状态管理中，页面刷新重新获取
  // 路由权限生成
  const generateRoute = (permissions) => {
    let result = []
    console.log("permissions", permissions)
    routes.forEach(item => {
      let itemRoute = item
      if(item.children){
        itemRoute.children = handleChildren(permissions, item.children) 
      }
      if(permissions.includes(item.key)){
        result.push(itemRoute)    
      }
    });
    console.log("生成的路由result", result)
    setNewRoutes(result.concat(publicRoutes))
  }

  const handleChildren = (permissions, route) => {
    return route.filter(item => {
      return permissions.includes(item.key)
    })
  }

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
          <MenuComponent routes={routes} />
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
        {newRoutes.length>0?<ContentComponent routes={routes} />:null}
      </Layout>
    </Layout>
  );
}

export default LayoutComponent;
