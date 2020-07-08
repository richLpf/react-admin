import React, { Fragment } from "react";

import { QuestionCircleOutlined, UserOutlined } from "@ant-design/icons";

import { Avatar, Dropdown, Menu } from 'antd'

function HeaderInfo(props) {

  const menu = (
  	<Menu>
	    <Menu.Item>
	      <a target="_blank" rel="noopener noreferrer" href="http://www.alipay.com/">
	        个人设置
	      </a>
	    </Menu.Item>
	    <Menu.Item>
	      <a target="_blank" rel="noopener noreferrer" href="http://www.taobao.com/">
	        退出
	      </a>
	    </Menu.Item>
    </Menu>
  )

  return (
    <Fragment>
      <div className="header-left"></div>
      <div className="header-right">
	      <Dropdown overlay={menu} arrow>
		    <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
		      <Avatar icon={<UserOutlined />} />
		    </a>
		  </Dropdown>
      </div>
      <div className="header-right">
        <QuestionCircleOutlined />
        &nbsp;帮助说明
      </div>
    </Fragment>
  );
}

export default HeaderInfo;
