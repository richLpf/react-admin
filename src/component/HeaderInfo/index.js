import React, { Fragment, useState, useRef, useEffect } from "react";
import { QuestionCircleOutlined, UserOutlined, FullscreenOutlined, FullscreenExitOutlined, SearchOutlined  } from "@ant-design/icons";
import { Avatar, Dropdown, Menu } from 'antd'
import moment from 'moment'
import screenfull from 'screenfull'
import UserGuide from 'react-user-guide';


const style = {
  width: '20vw',
  backgroundColor: 'grey',
  marginTop: '20vh',
  marginLeft: '40vw',
  padding: 5
};
 
const buttonConfig = {
  yesText: 'Yes',
  noText: 'No',
  nextText: 'Next',
  skipText: 'Skip',
  finishText: 'Finish'
};

const guides = [
  {
    querySelector: '.unique-classname',
    position: 'east',
    title: 'First',
    message: 'User guide position \'east\''
  },
  {
    querySelector: '.unique-classname',
    position: 'west',
    title: 'Second',
    message: 'User guide position \'west\''
  },
  {
    querySelector: '.unique-classname',
    position: 'north',
    title: 'Third',
    message: 'User guide position \'north\''
  },
  {
    querySelector: '.unique-classname',
    tooltipWidth: 500,
    position: 'south',
    title: 'Forth',
    message: 'User guide position \'south\', with custom width'
  }
];

function HeaderInfo(props) {

  const timerRef = useRef()
  const timeFormat = moment().format("YYYY-MM-DD HH:mm:ss")
  const [currentDate, setCurrentDate] = useState(timeFormat) 
  const [fullScreen, setFullScreen] = useState(false)

  useEffect(() => {
  	timerRef.current = setInterval(() => {
  		setCurrentDate(moment().format("YYYY-MM-DD HH:mm:ss"))
  	}, 1000)
  	return () => {
  		timerRef.current && clearInterval(timerRef.current)
  	}
  }, [])

  const handleScreen = () => {
    if (screenfull.isEnabled) {
        screenfull.toggle();
    }
    setFullScreen(!fullScreen)
  }

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
      <UserGuide buttonConfig={buttonConfig} guides={guides}>
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
        <div className="header-right">
          {fullScreen?<span style={{cursor: "pointer"}} onClick={handleScreen}><FullscreenExitOutlined /></span>:<span style={{cursor: "pointer"}} onClick={handleScreen}><FullscreenOutlined /></span>}
        </div>
        <div className="header-right">
          当前时间：{currentDate}
        </div>
        <div className="header-right">
          <SearchOutlined />
        </div>
      </UserGuide>
    </Fragment>
  );
}

export default HeaderInfo;
