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
            dataIndex: 'age',
            key: 'age',
        },
        {
            title: '授权人',
            dataIndex: 'address',
            key: 'address',
        },
        {
            title: '授权时间',
            dataIndex: 'address',
            key: 'address',
        },
        {
            title: '操作',
            dataIndex: 'address',
            key: 'address',
        }
    ];

    return <Table bordered dataSource={dataSource} columns={columns} />;
}

export default TableList;