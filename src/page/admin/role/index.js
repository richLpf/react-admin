import React, { Fragment, useState, useEffect } from 'react'
import TableList from './tableList'
import { Button, Col, Row, Input, Form, message } from 'antd'
import { SearchOutlined } from "@ant-design/icons";
import AddModal from './addModal'
import { roleAdd, getRoleList, getResourceList, delRole, updateRole, RolePermission } from '@/api/acl'

function User(){
    
    const [visible, setVisible] = useState(false)
    const [confirmLoading, setconfirmLoading] = useState(false)
    const [mockData, setMockData] = useState([])
    const [targetKeys, setTargetKeys] = useState([])
    const [roleList, setRoleList] = useState([])
    const [resourceList, setResourceList] = useState([])
    const [loading, setLoading] = useState(false)
    const [isNew, setIsNew] = useState(true)
    const [currentRole, setCurrentRole] = useState({})

    const [form] = Form.useForm()

    useEffect(()=>{
        getRole()
        fetchResourceList()
    },[])

    const fetchResourceList = () => {
        getResourceList().then(res => {
            setResourceList(res.Data)
        })
    }

    const handleOk = () => {
        form.validateFields().then(values => {
            values.namespace = "demo"
            //添加角色成功
            if(isNew){
                handleRoleAdd(values)
            }else{
                // 编辑
                values.id = currentRole.id
                values.namespace = currentRole.namespace
                editRole(values)
            }
        }, err => {
            console.log("err values", err)
        })
    }

    const getRole = () => {
        setLoading(true)
        getRoleList().then(res => {
            setRoleList(res.Data)
            setLoading(false)
        })
    }

    const handleRoleAdd = (data) => {
        roleAdd(data).then(res => {
            if(res.RetCode === 0){
                message.success("添加成功")
                form.resetFields();
                getRole()
            }else{
                message.error(res.Message)
            }
            setVisible(false)
        })
    }

    const handleEdit = async (val) => {
        const { id, name, role, describe } = val 
        const roleInfo = await getRolePermission(id)
        if(roleInfo.RetCode === 0){
            // 获取所有的资源信息
            const hasResources = roleInfo.Data.map(item => item.resource_id)
            setTargetKeys(hasResources)
            form.setFieldsValue({
                role,
                name,
                describe,
                permission: hasResources
            })
            setIsNew(false)
            setCurrentRole(val)
            setVisible(true)
        }else{
            message.error(roleInfo.Msg)
        }
    }

    const handleDelete = (val) => {
        delRole(val.id).then(res => {
            const { RetCode, Msg } = res
            if(RetCode === 0){
                message.success("删除成功", Msg)
                getRole()
            }
        }).then(err => {
            console.log("删除失败", err)
        })
    }

    const editRole = (data) => {
        updateRole(data).then(res => {
            console.log("更新角色", res)
            const { RetCode, Msg } = res
            if(RetCode === 0){
                message.success("更新成功")
                setVisible(false)
                form.resetFields();
                getRole()
            }else{
                message.error(Msg)
            }
        })
    }

    const handleAddRole = () => {
        form.resetFields()
        setVisible(true)
        setIsNew(true)
    }

    const getRolePermission = (id) => {
        return RolePermission(id).then(response => {
            return response
        })
    }

    return <Fragment>
        <Row span={24} className="row-space">
            <Col span={8}>
                <Button type="primary" onClick={()=>{handleAddRole()}}>新增角色</Button>   
            </Col>
            <Col offset={8} span={8}>
                <Input suffix={<SearchOutlined />} placeholder="搜索..."/>
            </Col>
        </Row>
        <TableList dataSource={roleList} handleEdit={handleEdit} handleDelete={handleDelete} loading={loading}/>
        <AddModal 
            visible={visible} 
            isNew={isNew} 
            handleOk={handleOk} 
            handleCancel={()=>setVisible(false)} 
            form={form} 
            confirmLoading={confirmLoading} 
            targetKeys={targetKeys} 
            resourceList={resourceList} 
            handleChange={(val)=>setTargetKeys(val)}
        />
    </Fragment>
}

export default User
