import React from 'react'
import { Table, Button, Popconfirm } from 'antd'
import { EditOutlined, DeleteOutlined } from '@ant-design/icons'
import moment from 'moment'

function TableList(props){

    const { dataSource, handleEdit, handleDelete, loading } = props

    const columns = [
        {
            title: '角色名',
            dataIndex: 'name',
            key: 'name'
        },
        {
            title: '角色标识',
            dataIndex: 'role',
            key: 'role',
        },
        {
            title: '描述',
            dataIndex: 'describe',
            key: 'describe',
        },
        {
            title: '创建人',
            dataIndex: 'created_by',
            key: 'created_by',
        },
        {
            title: '创建时间',
            dataIndex: 'created_at',
            key: 'created_at',
            render: (value) => {
                return moment(value).format("YYYY-MM-DD HH:mm:ss")
            }
        },
        {
            title: '操作',
            render: (_, record) => {
                return  <div>
                    <Button shape="circle" style={{marginRight: '8px'}} icon={<EditOutlined />} onClick={()=>handleEdit(record)}/>
                    <Popconfirm
                        title="确认删除"
                        onConfirm={()=>handleDelete(record)}
                        okText="是"
                        cancelText="否"
                    >
                        <Button shape="circle" danger icon={<DeleteOutlined />} />
                    </Popconfirm>
                </div>
            }
        }
    ];

    return <Table rowKey="id" bordered dataSource={dataSource} columns={columns} loading={loading}/>;
}

export default TableList;