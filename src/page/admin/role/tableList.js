import React from 'react'
import { Table } from 'antd'

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
            dataIndex: 'age',
            key: 'age',
        },
        {
            title: '描述',
            dataIndex: 'address',
            key: 'address',
        },
        {
            title: '创建人',
            dataIndex: 'address',
            key: 'address',
        },
        {
            title: '创建时间',
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