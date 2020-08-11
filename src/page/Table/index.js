import React, { Fragment, useState } from 'react'
import UTable from './components/utable'
import { Button } from 'antd'

function TableDemo(props){

	const dataSource = [
	  {
	    key: '1',
	    name: '胡彦斌',
	    age: 32,
	    address: '西湖区湖底公园1号',
	  },
	  {
	    key: '2',
	    name: '胡彦祖',
	    age: 42,
	    address: '西湖区湖底公园1号',
	  },
	];


	const columns = [
	  {
	    title: '姓名',
	    dataIndex: 'name',
	    key: 'name',
	  },
	  {
	    title: '年龄',
	    dataIndex: 'age',
	    key: 'age',
	  },
	  {
	    title: '住址',
	    dataIndex: 'address',
	    key: 'address',
	  },
	]


	return <Fragment>
		<UTable dataSource={dataSource} columns={columns} download={true} filename="csv下载文件" />;
	</Fragment>
}

export default TableDemo