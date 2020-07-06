import React, { Fragment, useState } from 'react'
import TableList from './tableList'
import { Button, Col, Row, Input } from 'antd'
import { SearchOutlined } from "@ant-design/icons";
import AddUser from './addUser'

function User(){

    const [visible, setVisible] = useState(false)
    const [confirmLoading, setConfirmLoading] = useState(false)

    //const userRef = useRef(null)

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

    const handleOk = () => {
        //userRef.current.validateFields((err, o)=> {
            //if(!err){
                //console.log("err", err, o)
            //}
        //})
        console.log("val")
    }
    const onFinish = (val) => {
        //userRef.current.validateFields((err, o)=> {
            //if(!err){
                //console.log("err", err, o)
            //}
        //})
        console.log("val", val)
    }

    return <Fragment>
        <Row span={24} className="row-space">
            <Col span={8}>
                <Button type="primary" onClick={()=>setVisible(true)}>新增用户</Button>   
            </Col>
            <Col offset={8} span={8}>
                <Input suffix={<SearchOutlined />} placeholder="搜索..."/>
            </Col>
        </Row>
        <TableList dataSource={dataSource} />
        <AddUser visible={visible} handleOk={()=>handleOk()} handleCancel={()=> setVisible(false)} confirmLoading={confirmLoading} onFinish={(val)=>onFinish(val)}/>
    </Fragment>
}

export default User
