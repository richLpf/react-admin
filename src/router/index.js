import { lazy } from 'react'

/*
  Define Menus Paths
    一级菜单必须加入Icon；二级菜单无Icon；不在菜单的须隐藏，加 hidden: true；(除index.js 外，习惯文件名大写表示菜单展示 ^▽^)
    权限控制参数 - permissions，设置可访问的用户角色，数组形式，如：permissions: ['administrator', 'tester'] 等，无权限菜单也不展示
 */
const dashboard = import('../pages/Dashboard');

// Projects
const projects = import('../pages/Projects');
const projectDetail = import('../pages/Projects/projectDetail');

const menus = [
    {
      name: '业务数据管理',
      key: '/ucloud/datamanager',
      icon: 'cloud-server',
      permissions: ['administrator'],
      hidden: true,
      children: [
        {
          name: '产品管理',
          key: '/ucloud/product',
          component: lazy(() => UCloudProduct),
        },
        {
          name: '发布记录',
          key: '/ucloud/changelogs',
          component: lazy(() => UXiaoChangelogs),
        },
      ]
    },
    {
      name: '工作台',
      key: '/dashboard',
      icon: 'cloud-sync',
      component: lazy(() => dashboard),
    },
    {
      name: '需求池',
      key: '/demands',
      icon: 'file-text',
      component: lazy(() => Demands),
      hidden: false
    }
]

export default menus