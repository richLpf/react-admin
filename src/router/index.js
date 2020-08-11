import React from 'react'
import { lazy } from 'react'
import {
  UserOutlined,
  VideoCameraOutlined,
  LaptopOutlined,
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  DashboardOutlined
} from "@ant-design/icons";

/*
  Define Menus Paths
    一级菜单必须加入Icon；二级菜单无Icon；不在菜单的须隐藏，加 hidden: true；(除index.js 外，习惯文件名大写表示菜单展示 ^▽^)
    权限控制参数 - permissions，设置可访问的用户角色，数组形式，如：permissions: ['administrator', 'tester'] 等，无权限菜单也不展示
 */
// Projects
const EChart = import('@/page/chart/echarts');
const Antv = import("@/page/chart/bizcharts");
const HeaderInfo = import("@/component/HeaderInfo");
const NotFound = import("@/page/NotFound/404");
const Progress = import("@/page/progress");
const Tree = import("@/page/tree");
const Demo = import("@/page/bases/demo");
const DashBoard1 = import("@/page/dashboard/dashboard1")
const DashBoard2 = import("@/page/dashboard/dashboard2")
const Editor = import('@/page/bases/Editor')
const AdminRole = import('@/page/admin/role')
const AdminUser = import('@/page/admin/user')
const About = import('@/page/about')
const TableDemo = import('@/page/Table')

const routes = [
    {
      name: '看板',
      key: '/dashboard',
      icon: <MenuUnfoldOutlined />,
      children: [
        {
          name: '看板一',
          key: '/one',
          component: lazy(() => DashBoard1),
        },
        {
          name: '看板二',
          key: '/two',
          component: lazy(() => DashBoard2),
        }
      ]
    },
    {
      name: '图表',
      key: '/chart',
      icon: <VideoCameraOutlined />,
      children: [
        {
          name: 'Echart',
          key: '/echart',
          component: lazy(() => EChart),
        },
        {
          name: 'Antv',
          key: '/antv',
          component: lazy(() => Antv),
        },
      ]
    },
    {
      name: '基础组件',
      key: '/base',
      icon: <LaptopOutlined />,
      children: [
        {
          name: 'progress',
          key: '/progress',
          component: lazy(() => Progress),
        },
        {
          name: 'tree',
          key: '/tree',
          component: lazy(() => Tree),
        },
        {
          name: 'demo',
          key: '/demo',
          component: lazy(() => Demo),
        },
        {
          name: '富文本',
          key: '/editor',
          component: lazy(() => Editor),
        },
        {
          name: '表格',
          key: '/table',
          component: lazy(() => TableDemo)
        }
      ]
    },
    {
      name: '权限管理',
      key: '/premission',
      icon: <MenuUnfoldOutlined />,
      children: [
        {
          name: '用户管理',
          key: '/user',
          component: lazy(() => AdminUser),
        },
        {
          name: '角色管理',
          key: '/role',
          component: lazy(() => AdminRole),
        }
      ]
    },{
      name: '系统设置',
      key: '/system',
      icon: <MenuFoldOutlined />,
      children: [{
        name: '关于我们',
        key: '/about',
        component: lazy(()=> About)
      }]
    }
]

export default routes