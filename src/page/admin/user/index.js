import React, { Fragment, useState, useEffect } from 'react'
import TableList from './tableList'
import { Button, Col, Row, Input, Form } from 'antd'
import { SearchOutlined } from "@ant-design/icons";
import AddUser from './addUser'
import { getUser, userAdd, getRoleList } from '@/api/acl'

function User(){

    const [visible, setVisible] = useState(false)
    const [confirmLoading, setConfirmLoading] = useState(false)
    const [userList, setUserList] = useState([])
    const [loading, setLoading] = useState(false)
    const [roleList, setRoleList] = useState([])

    useEffect(() => {
        console.log("dayin")
        getUserList()
        getRole()
    },[])

    const [form] = Form.useForm()

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
            //console.log("添加用户", res)
            setVisible(false)
            getUserList()
        })
    }

    const getRole = () => {
        getRoleList().then(res => {
            console.log("获取角色信息", res.Data)
            setRoleList(res.Data)
        })
    }

    const handleOk = () => {
        console.log("确认")
        form.validateFields().then(values => {
            console.log("values111", values)
            values.namespace = "demo"
            values.status = 1
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
        <AddUser visible={visible} handleOk={()=>handleOk()} roleList={roleList} handleCancel={()=> setVisible(false)} confirmLoading={confirmLoading} form={form} />
    </Fragment>
}

export default User
