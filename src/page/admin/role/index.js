import React, { Fragment, useState } from 'react'
import TableList from './tableList'
import { Button, Col, Row, Input } from 'antd'
import { SearchOutlined } from "@ant-design/icons";
import AddModal from './addModal'

function User(){
    
    const [visible, setVisible] = useState(false)
    const [confirmLoading, setconfirmLoading] = useState(false)

    const dataSource = [
        {
            key: '1',
            name: '胡彦斌',
            age: 32,
            address: '西湖区湖底公园1号',
        },
        {
            key: '2',
            name: '胡彦祖',
            age: 42,
            address: '西湖区湖底公园1号',
        },
    ];
    const handleCancel = () => {

    }
    const handleOk = () => {

    }

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
        <AddModal visible={visible} handleOk={handleOk} handleCancel={handleCancel} confirmLoading={confirmLoading} />
    </Fragment>
}

export default User
