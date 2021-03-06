import React, { Fragment } from 'react'
//import routes from '@/router'
import { Menu } from 'antd'
import { HashRouter as Router, Link, Route, withRouter } from "react-router-dom";

const { SubMenu } = Menu;

function Menus(props){
	const { location, history, routes } = props
	const hasChild = (menu) => {
		return Array.isArray(menu.children) && menu.children.length > 0
	}
	const genSubMenu = (menu) => {
		const { icon, key, name, hidden } = menu
		if(!hidden){
			return (
				<SubMenu 
					key={key} 
					icon={icon} 
					title={name}>
					{genMenus(menu.children)}
				</SubMenu>
			)
		}
		return null
	}
	const genMenItem = (menu) => {
		const { hidden, icon, name, key } = menu
		if(!hidden){
			return (
				<Menu.Item key={key} icon={icon?icon:null}>
					<Link to={key}>
		              <span>{name}</span>
					</Link>
		        </Menu.Item>
		    )
		}
		return null
	}
	const genMenus = (routes) => {
		return routes.reduce((prev, next) => {
			return prev.concat(
				hasChild(next) ? genSubMenu(next) : genMenItem(next)
			)
		}, [])
	}
	const handleNavClick = (key) => {
		history.push(key)
	}
	return <Fragment>
		<Menu
	      theme="dark"
	      mode="inline"
	      selectedKeys={[location.pathname]}
	      onClick={handleNavClick}
	    >
	      {genMenus(routes)}
	    </Menu>
	</Fragment>
}

export default withRouter(Menus)