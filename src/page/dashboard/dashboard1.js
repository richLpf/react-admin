import React, { Fragment, useState } from "react";
import { Row, Col, Card, Tabs } from 'antd'
import './dashboard.css'
import PieDemo from './components/pie'
import BarDemo from './components/bar'
const { TabPane } = Tabs

// 展示内容
// 时间维度：展示7天内的数据
// 展示7天内变更单发布情况
// 展示不同变更单的影响范围
// 展示7天内发布的频率
function DashBoard1(props) {

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
		<Row>
			<Col span={24}>
				<Card style={{height: "400px", marginBottom: "10px"}}>
					<Tabs tabPosition={"left"}>
						<TabPane tab="UHOST" key="1">
							Content of Tab 1
						</TabPane>
						<TabPane tab="UNET" key="2">
							Content of Tab 2
						</TabPane>
						<TabPane tab="CDN" key="3">
							Content of Tab 3
						</TabPane>
					</Tabs>
				</Card>
			</Col>
		</Row>
		<Row gutter={8}>
			<Col span={16}>
				<Card title="变更产品数" className="CardSmall" extra={<a href="#">More</a>}>
					<BarDemo />
				</Card>
			</Col>
			<Col span={8}>
				<Card title="地域分布" className="CardSmall" extra={<a href="#">More</a>}>
					<PieDemo />
				</Card>
			</Col>
		</Row>
    </Fragment>;
}

export default DashBoard1