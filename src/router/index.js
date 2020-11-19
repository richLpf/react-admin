import React from 'react'
import { lazy } from 'react'
import {
  UserOutlined,
  VideoCameraOutlined,
  LaptopOutlined,
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  DashboardOutlined,
  TableOutlined,
  AreaChartOutlined,
  ProfileOutlined,
  UserAddOutlined,
  SettingOutlined
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
const BigDashboard = import('@/page/bigDashboard')
const Page404 = import('@/page/ErrorPage/Page404')
const Resources = import('@/page/admin/resources')

const routes = [
    {
      name: '看板',
      key: '/dashboard',
      icon: <DashboardOutlined />,
      children: [
        {
          name: '看板一',
          key: '/dashboard/one',
          component: lazy(() => DashBoard1),
        },
        {
          name: '看板二',
          key: '/two',
          component: lazy(() => DashBoard2),
        },{
          name: '大屏',
          key: '/big',
          component: lazy(() => BigDashboard),
        }
      ]
    },
    {
      name: '表格和EXCEL',
      key: '/table',
      icon: <TableOutlined />,
      children: [
        {
          name: '下载excel',
          key: '/table1',
          component: lazy(() => TableDemo)
          
        },
        {
          name: '表格编辑',
          key: '/table2',
          component: lazy(() => Antv),
        },
        {
          name: '上传EXCEL',
          key: '/table3',
          component: lazy(() => EChart)        
        }
      ]
    },
    {
      name: '详情页面',
      key: '/detail',
      icon: <ProfileOutlined />,
      children: [
        {
          name: 'detail1',
          key: '/detail1',
          component: lazy(() => EChart),
        },
        {
          name: 'detail2',
          key: '/detail2',
          component: lazy(() => Antv),
        },
        {
          name: '水印',
          key: '/detail3',
          component: lazy(() => TableDemo)
        }
      ]
    },
    {
      name: '图表',
      key: '/chart',
      icon: <AreaChartOutlined />,
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
          name: '返回顶部',
          key: '/toTop',
          component: lazy(() => Editor),
        },
        {
          name: '复制',
          key: '/clipboard',
          component: lazy(() => Editor),
        }
      ]
    },
    {
      name: '权限管理',
      key: '/permission',
      icon: <UserAddOutlined />,
      children: [
        {
          name: '用户管理',
          key: '/permission/user',
          component: lazy(() => AdminUser),
        },
        {
          name: '角色管理',
          key: '/permission/role',
          component: lazy(() => AdminRole),
        }
      ]
    },{
      name: '系统设置',
      key: '/system',
      icon: <SettingOutlined />,
      children: [{
        name: '关于我们',
        key: '/about',
        component: lazy(()=> About)
      }]
    }
]

export const publicRoutes = [{
      key: '/resource',
      name: '权限资源',
      icon: <SettingOutlined />,
      component: lazy(()=> Resources)
},{
      name: '404',
      hidden: true,
      component: lazy(()=> Page404)
}]


export default routes