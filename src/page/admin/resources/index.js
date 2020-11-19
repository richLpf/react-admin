import React, { Fragment, useEffect, useState } from 'react'
import { Table, Button, Form, message } from 'antd'
import ResourceModal from './modal'
import { getResourceList, addResource, updateResource } from '@/api/acl'
import moment from 'moment'

function Resource(props){

    const [form] = Form.useForm()

    useEffect(() => {
        getResources()
    }, [])

    const [resourceList, setResourceList] = useState([])
    const [loading, setLoading] = useState(false)
    const [visible, setVisible] = useState(false)
    const [isNew, setIsNew] = useState(true)
    const [curResource, setCurResource] = useState({})
    const [commitLoading, setCommitLoading] = useState(false)
 
    const getResources = (data) => {
        setLoading(true)
        getResourceList(data).then(res => {
            if(res.RetCode === 0){
                setResourceList(res.Data)
                setLoading(false)
            }
        })
    }

    const handleAddResource = (data) => {
        setCommitLoading(true)
        addResource(data).then(response => {
            console.log("添加资源", response)
            if(response.RetCode === 0){
                message.success("添加成功")
                getResources()
                setCommitLoading(false)
                setVisible(false)
            }else{
                message.error(response.Msg)
            }
        })
    }

    const handleUpdateResource = (data) => {
        setCommitLoading(true)
        updateResource(data).then(response => {
            if(response.RetCode === 0){
                message.success("更新成功")
                setVisible(false)
                getResources()
                setCommitLoading(false)
            }else{
                message.error(response.Msg)
            }
        })
    }

    const handleOk = () => {
        form.validateFields().then(values => {
            console.log("填写信息", values)
            values.namespace = "demo"
            if(isNew){
                handleAddResource(values)
            }else{
                values.id = curResource.id
                handleUpdateResource(values)
            }
        }, err => {
            console.log("err values", err)
        })
    }

    const handleResourceAdd = () => {
        form.resetFields()
        setIsNew(true)
        setVisible(true)
    }


    const handleEdit = (record) => {
        console.log("要编辑的资源record", record)
        setVisible(true)
        setIsNew(false)
        setCurResource(record)
        const { category, resource, name, namespace } = record
        form.setFieldsValue({
            category,
            resource,
            name,
            namespace
        })
    }

    const columns = [
        {
            title: 'ID',
            dataIndex: 'id',
            key: 'id',
        },
        {
            title: 'Category',
            dataIndex: 'category',
            key: 'category',
        },
        {
            title: 'Resource',
            dataIndex: 'resource',
            key: 'resource',
        },{
            title: 'Name',
            dataIndex: 'name',
            key: 'name'
        },{
            title: '创建人',
            dataIndex: 'created_by',
            key: 'created_by'
        },{
            title: '创建时间',
            dataIndex: 'created_at',
            key: 'created_at',
            render: (value) => {
                return moment(value).format("YYYY-MM-DD HH:mm:ss")
            }
        },{
            title: '操作',
            render: (_, record) => {
                return <div>
                    <Button onClick={()=>handleEdit(record)}>编辑</Button>
                </div>
            }
    }];

    return <Fragment>
        <Button style={{marginBottom: '5px'}} onClick={()=>handleResourceAdd()}>新增</Button>
        <Table dataSource={resourceList} columns={columns} loading={loading} />
        <ResourceModal 
            visible={visible} 
            isNew={isNew} 
            form={form} 
            handleOk={()=>handleOk()} 
            loading={commitLoading}
            handleCancel={()=>setVisible(false)} 
        />
    </Fragment>
}

export default Resource