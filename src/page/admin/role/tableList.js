import React from 'react'
import { Table, Button } from 'antd'
import { EditOutlined, DeleteOutlined } from '@ant-design/icons'
import moment from 'moment'

function TableList(props){

    const { dataSource } = props

    console.log("获取角色列表", dataSource)

    const columns = [
        {
            title: '角色名',
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
            render: () => {
                return  <div>
                    <Button shape="circle" style={{marginRight: '8px'}} icon={<EditOutlined />} />
                    <Button shape="circle" danger icon={<DeleteOutlined />} />
                </div>
            }
        }
    ];

    return <Table rowKey="id" bordered dataSource={dataSource} columns={columns} />;
}

export default TableList;