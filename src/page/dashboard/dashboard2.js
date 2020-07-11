import React, { Fragment, useState } from "react";
import { Row, Col, Card, Tabs } from 'antd'
import './dashboard.css'

const { TabPane } = Tabs

// 展示内容
// 时间维度：展示7天内的数据
// 展示7天内变更单发布情况
// 展示不同变更单的影响范围
// 展示7天内发布的频率
function DashBoard2(props) {

	const [tab, setTab] = useState("tab1")

	const tabList = [
		{
			key: 'tab1',
			tab: 'tab1',
		},
		{
			key: 'tab2',
			tab: 'tab2',
		}
	]

	const contentList = {
		tab1: <p>content1</p>,
		tab2: <p>content2</p>,
	};

    return <Fragment>
		<Row gutter={8}>
			<Col span={8}>
				<Card title="变更产品数" className="CardSmall" extra={<a href="#">More</a>}>
					<p>Card content</p>
					<p>Card content</p>
					<p>Card content</p>
				</Card>
				<Card title="地域分布" className="CardSmall" extra={<a href="#">More</a>}>
					<p>Card content</p>
					<p>Card content</p>
					<p>Card content</p>
				</Card>
			</Col>
			<Col span={16}>
				<Card style={{height: "400px", marginBottom: "10px"}}>
					
				</Card>
			</Col>
		</Row>
    </Fragment>;
}

export default DashBoard2