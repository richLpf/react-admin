import React, { Fragment, useEffect, useState } from 'react'
import { Table, Col, Row, Input } from 'antd'
import ExportCVSButton from './download'
import Search from './search'

function UTable(props){

	const { columns, dataSource, search, download, filename, ...rest } = props

	const [data, setData] = useState([])

	useEffect(() => {
		setData(dataSource)
	}, [dataSource])

	const tableProps = {
		columns,
		dataSource: data,
		search,
		download,
		filename,
		...rest
	}

	const getResult = (data) => {
		//console.log("getResult", data)
		setData(data)
	}


	return <Fragment>
		<Row justify="space-between" style={{marginBottom: '10px'}}>
			<Col span={8}>
				{download?<ExportCVSButton text={"导出列表"} schema={columns} data={dataSource} filename={filename} />:null}
			</Col>
			<Col span={8}>
				<Search getResult={getResult} originData={dataSource} schema={columns} />
			</Col>
		</Row>
		<Table {...tableProps} />
	</Fragment>
}

export default UTable

