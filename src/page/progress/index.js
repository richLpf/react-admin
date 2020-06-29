import React, { Fragment, useState } from "react";
import { Row, Col, Card, Steps, Button, message, List, Select } from "antd";
import "./style.css";
const { Option } = Select;

const { Step } = Steps;

function Progress(props) {
  const [current, setCurrent] = useState(0);
  const [data, setData] = useState([]);

  let steps = [
    {
      title: "分支合并",
      content: "First-content",
    },
    {
      title: "CICD",
      content: "Second-content",
    },
    {
      title: "KUN部署",
      content: "Last-content",
    },
    {
      title: "完成",
      content: "Last-content",
    },
  ];

  const next = () => {};
  const prev = () => {};
  const onChange = () => {};
  const onBlur = () => {};
  const onFocus = () => {};
  const onSearch = () => {};

  return (
    <Fragment>
      <Row className="row-space" gutter={16}>
        <Col span={12}>
          <Card className="cardMinHeight" title="发布任务">
            <List
              dataSource={data}
              renderItem={(item) => (
                <List.Item key={item.id}>
                  <List.Item.Meta
                    title={<a href="https://ant.design">{item.name.last}</a>}
                    description={item.email}
                  />
                  <div>Content</div>
                </List.Item>
              )}
            ></List>
          </Card>
        </Col>
        <Col span={12}>
          <Card
            className="cardMinHeight"
            title="合并分支"
            extra={<Button>合并</Button>}
          >
            <Row className="row-space">
              <Col span={4}>当前分支：</Col>
              <Col style={{ lineHeight: 2 }} span={20}>
                feature
              </Col>
            </Row>
            <Row>
              <Col span={4}>选择分支：</Col>
              <Col span={20}>
                <Select
                  showSearch
                  style={{ width: 200 }}
                  placeholder="选择分支"
                  optionFilterProp="children"
                  onChange={onChange}
                  onFocus={onFocus}
                  onBlur={onBlur}
                  onSearch={onSearch}
                  filterOption={(input, option) =>
                    option.props.children
                      .toLowerCase()
                      .indexOf(input.toLowerCase()) >= 0
                  }
                >
                  <Option value="jack">dev</Option>
                  <Option value="lucy">master</Option>
                  <Option value="tom">pre</Option>
                </Select>
              </Col>
            </Row>
          </Card>
        </Col>
      </Row>

      <Row gutter={16}>
        <Col span={24}>
          <Card title="自动发布">
            <Steps current={current}>
              {steps.map((item) => (
                <Step key={item.title} title={item.title} />
              ))}
            </Steps>
            <div className="stepsContent">{steps[current].content}</div>
            <div className="stepsAction">
              {current < steps.length - 1 && (
                <Button type="primary" onClick={() => next()}>
                  Next
                </Button>
              )}
              {current === steps.length - 1 && (
                <Button
                  type="primary"
                  onClick={() => message.success("Processing complete!")}
                >
                  Done
                </Button>
              )}
              {current > 0 && (
                <Button style={{ marginLeft: 8 }} onClick={() => prev()}>
                  Previous
                </Button>
              )}
            </div>
          </Card>
        </Col>
      </Row>
    </Fragment>
  );
}

export default Progress;
