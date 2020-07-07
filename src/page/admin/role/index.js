import React, { Fragment, useState, useEffect } from 'react'
import TableList from './tableList'
import { Button, Col, Row, Input, Form } from 'antd'
import { SearchOutlined } from "@ant-design/icons";
import AddModal from './addModal'

function User(){
    
    const [visible, setVisible] = useState(false)
    const [confirmLoading, setconfirmLoading] = useState(false)
    const [mockData, setMockData] = useState([])
    const [targetKeys, setTargetKeys] = useState([])

    const [form] = Form.useForm()

    useEffect(()=>{
        getMock()
    },[])

    const dataSource = [
        {
            key: '1',
            name: '基础权限组',
            role: 'Basic',
            description: '基础权限组',
            created_at: '2020-02-03 12:00:00',
            created_user: '张三'
        },
        {
            key: '2',
            name: '服务经历',
            role: 'ServiceManager',
            description: '服务经理角色',
            created_at: '2020-02-03 23:00:00',
            created_user: '王五'
        },
    ];

    const handleOk = () => {
        form.validateFields().then(values => {
            console.log("values111", values)
        }, err => {
            console.log("err values", err)
        })
    }

    const getMock = () => {
        const targetKeys = [];
        const mockData = [];
        for (let i = 0; i < 20; i++) {
          const data = {
            key: i.toString(),
            title: `content${i + 1}`,
            description: `description of content${i + 1}`,
            chosen: Math.random() * 2 > 1,
          };
          if (data.chosen) {
            targetKeys.push(data.key);
          }
          mockData.push(data);
        }
        setMockData(mockData)
        setTargetKeys(targetKeys)
        //this.setState({ mockData, targetKeys });
    };

    return <Fragment>
        <Row span={24} className="row-space">
            <Col span={8}>
                <Button type="primary" onClick={()=>setVisible(true)}>新增角色</Button>   
            </Col>
            <Col offset={8} span={8}>
                <Input suffix={<SearchOutlined />} placeholder="搜索..."/>
            </Col>
        </Row>
        <TableList dataSource={dataSource} />
        <AddModal visible={visible} handleOk={handleOk} handleCancel={()=>setVisible(false)} form={form} confirmLoading={confirmLoading} targetKeys={targetKeys} />
    </Fragment>
}

export default User
