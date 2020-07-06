import React, { Fragment } from "react";
import { Tabs, Row, Col } from "antd";
import Line from "./line";
import Bar from "./bar";
import Pie from "./pie"
import { option1, option2, option4 } from "./line/option";
import { bar_option, bar_option1 } from "./bar/option";
import { pie_option, pie_option1 } from "./pie/option"


const { TabPane } = Tabs;

function EchartsDemo() {
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
          <Row gutter="16">
            <Col span="12">
                <Bar option={bar_option} />
            </Col>
            <Col span="12">
                <Bar option={bar_option1} />
            </Col>
          </Row>
        </TabPane>
        <TabPane tab="饼图" key="3">
          <Row gutter="16">
            <Col span="12">
                <Pie option={pie_option} />
            </Col>
            <Col span="12">
                <Pie option={pie_option1} />
            </Col>
          </Row>
        </TabPane>
      </Tabs>
    </Fragment>
  );
}

export default EchartsDemo;
