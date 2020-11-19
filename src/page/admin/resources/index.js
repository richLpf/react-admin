import React, { Fragment, useEffect, useState } from 'react'
import { Table, Button } from 'antd'
import ModalForm from './modal'
import { getResourceList, addResource, updateResource } from '@/api/acl'
import moment from 'moment'

function Resource(props){

    useEffect(() => {
        getResources()
    }, [])

    const [resourceList, setResourceList] = useState([])
    const [loading, setLoading] = useState(false)
    const [visible, setVisible] = useState(false)
    const [isNew, setIsNew] = useState(true)
 
    const getResources = (data) => {
        setLoading(true)
        getResourceList(data).then(res => {
            if(res.RetCode === 0){
                setResourceList(res.Data)
                setLoading(false)
            }
        })
    }

    const handleAddResource = () => {

    }

    const handleUpdateResource = () => {

    }

    const handleEdit = (record) => {
        console.log("要编辑的资源record", record)
        setVisible(true)
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
        <Table dataSource={resourceList} columns={columns} loading={loading} />
        <ModalForm visible={visible} isNew={isNew}/>
    </Fragment>
}

export default Resource