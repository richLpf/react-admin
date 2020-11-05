import React from 'react'
import { Table } from 'antd'
import moment from 'moment'

function TableList(props){

    const { dataSource, loading } = props

    const columns = [
        {
            title: '用户名',
            dataIndex: 'user',
            key: 'user',
        },
        {
            title: '角色',
            dataIndex: 'role',
            key: 'role',
        },
        {
            title: '授权人',
            dataIndex: 'created_by',
            key: 'created_user',
        },
        {
            title: '授权时间',
            dataIndex: 'created_at',
            key: 'created_at',
            render: (value) => {
                return moment(value).format("YYYY-MM-DD HH:mm:ss")
            }
        },
        {
            title: '操作',
            dataIndex: 'option',
            key: 'option',
        }
    ];

    return <Table rowKey="id" loading={loading} bordered dataSource={dataSource} columns={columns} />;
}

export default TableList;