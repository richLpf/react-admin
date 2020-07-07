import React from 'react'
import { Table, Button } from 'antd'
import { EditOutlined, DeleteOutlined } from '@ant-design/icons'

function TableList(props){

    const { dataSource } = props

    const columns = [
        {
            title: '角色名',
            dataIndex: 'name',
            key: 'name',
        },
        {
            title: '英文名',
            dataIndex: 'name',
            key: 'name',
        },
        {
            title: '描述',
            dataIndex: 'description',
            key: 'description',
        },
        {
            title: '创建人',
            dataIndex: 'created_user',
            key: 'created_user',
        },
        {
            title: '创建时间',
            dataIndex: 'created_at',
            key: 'created_at',
        },
        {
            title: '操作',
            render: () => {
                return  <div>
                    <Button shape="circle" style={{marginRight: '8px'}} icon={<EditOutlined />} />
                    <Button shape="circle" danger icon={<DeleteOutlined />} />
                </div>
            }
        }
    ];

    return <Table bordered dataSource={dataSource} columns={columns} />;
}

export default TableList;