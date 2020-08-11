import React, { useRef } from 'react'
import { getSearchResult } from './util'
import { Input } from 'antd'
import { SearchOutlined } from '@ant-design/icons'

function Search(props){

	// 这里实现一个搜索框，当用户输入完毕，延迟300ms触发查询

	// 具体实现： 通过定时器实现
	const { getResult, originData, schema } = props

	const timerRef = useRef()

	const onSearch = e => {
		const searchText = e.target.value.trim();
		console.log("searchText", searchText)
		if(timerRef.current) clearTimeout(timerRef.current)
		if(!searchText){
			getResult(originData);
		}
		timerRef.current = setTimeout(() => {
			const result = getSearchResult(originData, schema, searchText)
			getResult(result)
		}, 300)
	}
	return <Input onKeyUp={onSearch} placeholder="请搜索.." suffix={<SearchOutlined />} />
}

export default Search