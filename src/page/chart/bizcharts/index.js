import React, { Fragment } from "react";
import { Tabs, Row, Col } from "antd";
import BarComponent from "./Bar";
import BarComponent1 from "./Bar/second"
import Biao from "./biao";

const { TabPane } = Tabs;

function BizCharts(props) {
  const callback = (val) => {
    console.log("当前显示什么图", val);
  };

  return (
    <Fragment>
      <Tabs defaultActiveKey="1" onChange={callback}>
        <TabPane tab="柱状图" key="1">
          <Row gutter="16">
            <Col span="12">
              <BarComponent></BarComponent>
            </Col>
            <Col span="12">
              <BarComponent1></BarComponent1>
            </Col>
          </Row>
        </TabPane>
        <TabPane tab="饼图" key="2"></TabPane>
        <TabPane tab="折线图" key="3"></TabPane>
        <TabPane tab="仪表盘" key="4">
          <Biao />
        </TabPane>
      </Tabs>
    </Fragment>
  );
}

export default BizCharts;
