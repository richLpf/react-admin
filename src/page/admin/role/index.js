import React, { Fragment, useState, useEffect } from 'react'
import TableList from './tableList'
import { Button, Col, Row, Input, Form } from 'antd'
import { SearchOutlined } from "@ant-design/icons";
import AddModal from './addModal'
import { roleAdd, getRoleList, getResourceList } from '@/api/acl'

function User(){
    
    const [visible, setVisible] = useState(false)
    const [confirmLoading, setconfirmLoading] = useState(false)
    const [mockData, setMockData] = useState([])
    const [targetKeys, setTargetKeys] = useState([])
    const [roleList, setRoleList] = useState([])
    const [resourceList, setResourceList] = useState([])

    const [form] = Form.useForm()

    useEffect(()=>{
        //getMock()
        getRole()
        fetchResourceList()
    },[])

    const fetchResourceList = () => {
        getResourceList().then(res => {
            console.log("获取资源列表", res)
            setResourceList(res.Data)
        })
    }

    const handleOk = () => {
        form.validateFields().then(values => {
            console.log("values111", values)
            //添加角色成功
            //handleRoleAdd(values)
        }, err => {
            console.log("err values", err)
        })
    }

    const getRole = () => {
        getRoleList().then(res => {
            console.log("获取角色信息", res.Data)
            setRoleList(res.Data)
        })
    }

    const handleRoleAdd = (data) => {
        roleAdd(data).then(res => {
            console.log("添加角色", res.Data)
        })
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
        <TableList dataSource={roleList} />
        <AddModal visible={visible} handleOk={handleOk} handleCancel={()=>setVisible(false)} form={form} confirmLoading={confirmLoading} targetKeys={targetKeys} resourceList={resourceList} />
    </Fragment>
}

export default User
