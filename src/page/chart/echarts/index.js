import React, { Fragment } from "react";
import { Tabs, Row, Col } from "antd";
import Line from "./line";
import Bar from "./bar";
import { option1, option2, option4 } from "./line/option";
import { data } from "./bar/option";

const { TabPane } = Tabs;

function EchartsDemo(props) {
  return (
    <Fragment>
      <Tabs defaultActiveKey="1">
        <TabPane tab="折线图" key="1">
          <Row gutter="16">
            <Col span="12">
              <Line option={option1} />
            </Col>
            <Col span="12">
              <Line option={option2} />
            </Col>
          </Row>
          <Row gutter="16">
            <Col span="24">
              <Line option={option4} />
            </Col>
          </Row>
        </TabPane>
        <TabPane tab="柱状图" key="2">
          <Bar option={data} />
        </TabPane>
        <TabPane tab="饼图" key="3">
          <Line option={data} />
        </TabPane>
      </Tabs>
    </Fragment>
  );
}

export default EchartsDemo;
