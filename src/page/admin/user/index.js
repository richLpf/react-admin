import React, { Fragment, useState, useEffect } from 'react'
import TableList from './tableList'
import { Button, Col, Row, Input, Form } from 'antd'
import { SearchOutlined } from "@ant-design/icons";
import AddUser from './addUser'
import { getUser, userAdd } from '@/api/acl'

function User(){

    const [visible, setVisible] = useState(false)
    const [confirmLoading, setConfirmLoading] = useState(false)
    const [userList, setUserList] = useState([])
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        console.log("dayin")
        getUserList()
    },[])

    const [form] = Form.useForm()

    const dataSource = [
        {
            key: '1',
            name: 'pengfei',
            role: "管理员",
            created_user: '张三',
            created_at: '2020-09-09 12:00:00'
        },
        {
            key: '2',
            name: 'lisi',
            role: "客服",
            created_user: '王杰',
            created_at: '2020-10-09 12:00:00'
        },
    ];

    const getUserList = () => {
        setLoading(true)
        getUser().then(res => {
            console.log("用户列表", res)
            setUserList(res.Data)
            setLoading(false)
        })
    }

    const addUser = (data) => {
        userAdd(data).then(res => {
            console.log("添加用户", res)
            setVisible(false)
            getUserList()
        })
    }

    const handleOk = () => {
        console.log("确认")
        form.validateFields().then(values => {
            console.log("values111", values)
            addUser(values)
        }, err => {
            console.log("err values", err)
        })
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
        <TableList dataSource={userList} loading={loading}/>
        <AddUser visible={visible} handleOk={()=>handleOk()} handleCancel={()=> setVisible(false)} confirmLoading={confirmLoading} form={form} />
    </Fragment>
}

export default User
