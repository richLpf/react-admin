import React, { Fragment } from "react";
import { Row, Col } from "antd";
import { Interval, Chart, Tooltip, Axis, Geom } from "bizcharts";

function Bar(props) {
  // 数据源
  const barData = [
    { genre: "Sports", sold: 275 },
    { genre: "Strategy", sold: 115 },
    { genre: "Action", sold: 120 },
    { genre: "Shooter", sold: 350 },
    { genre: "Other", sold: 150 },
  ];

  const data1 = [
    { name: "London", 月份: "Jan.", 月均降雨量: 18.9 },
    { name: "London", 月份: "Feb.", 月均降雨量: 28.8 },
    { name: "London", 月份: "Mar.", 月均降雨量: 39.3 },
    { name: "London", 月份: "Apr.", 月均降雨量: 81.4 },
    { name: "London", 月份: "May", 月均降雨量: 47 },
    { name: "London", 月份: "Jun.", 月均降雨量: 20.3 },
    { name: "London", 月份: "Jul.", 月均降雨量: 24 },
    { name: "London", 月份: "Aug.", 月均降雨量: 35.6 },
    { name: "Berlin", 月份: "Jan.", 月均降雨量: 12.4 },
    { name: "Berlin", 月份: "Feb.", 月均降雨量: 23.2 },
    { name: "Berlin", 月份: "Mar.", 月均降雨量: 34.5 },
    { name: "Berlin", 月份: "Apr.", 月均降雨量: 99.7 },
    { name: "Berlin", 月份: "May", 月均降雨量: 52.6 },
    { name: "Berlin", 月份: "Jun.", 月均降雨量: 35.5 },
    { name: "Berlin", 月份: "Jul.", 月均降雨量: 37.4 },
    { name: "Berlin", 月份: "Aug.", 月均降雨量: 42.4 },
  ];

  return (
    <Fragment>
      <Row gutter="16">
        <Col span="12">
          <Chart height={320} autoFit data={barData}>
            <Interval position="genre*sold" />
            <Tooltip shared />
          </Chart>
        </Col>
        <Col span="12">
          <Chart height={320} padding="auto" data={data1} autoFit>
            <Interval
              adjust={[
                {
                  type: "dodge",
                  marginRatio: 0,
                },
              ]}
              color="name"
              position="月份*月均降雨量"
            />
            <Tooltip shared />
          </Chart>
        </Col>
      </Row>
    </Fragment>
  );
}

export default Bar;
