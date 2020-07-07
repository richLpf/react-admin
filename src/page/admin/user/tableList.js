import React from 'react'
import { Table } from 'antd'

function TableList(props){

    const { dataSource } = props

    const columns = [
        {
            title: '用户名',
            dataIndex: 'name',
            key: 'name',
        },
        {
            title: '角色',
            dataIndex: 'role',
            key: 'role',
        },
        {
            title: '授权人',
            dataIndex: 'created_user',
            key: 'created_user',
        },
        {
            title: '授权时间',
            dataIndex: 'created_at',
            key: 'created_at',
        },
        {
            title: '操作',
            dataIndex: 'option',
            key: 'option',
        }
    ];

    return <Table bordered dataSource={dataSource} columns={columns} />;
}

export default TableList;