import React from 'react'
/**
 * getSearchResult 表格全字段搜索函数
 * @param {array} data 数据源
 * @param {array} schema 定义的表格schema，schema定义的字段进行搜索
 * @param {string} searchText 搜索内容
 */
export function getSearchResult(data, schema, searchText) {
	console.log("要筛选的数据", data, schema, searchText)
	try {
		if (!searchText.trim()) return data;
		let res = [];
		for (let j = 0; j < data.length; j++) {
			const item = data[j];
			console.log("schema", schema)
			for (let i = 0; i < schema.length; i++) {
				const scheme_item = schema[i];
				const { dataIndex, render } = scheme_item;
				console.log("dataINDEX", dataIndex, render)
				if (!dataIndex) {
					continue;
				} else if (render) {
					const value = getValue(item, split(dataIndex));
					console.log("val1111", valule, item)
					if (isReactNodeIncludesSearchText(render(value, item), searchText)) {
						res.push(item);
						break;
					}
				} else {
					const value = getValue(item, split(dataIndex));
					if (compare(value, searchText.trim())) {
						res.push(item);
						break;
					}
				}
			}
		}
		return res;
	} catch (error) {
		return [];
	}
}


const getValue = (data, dataIndex) => {
	const type = typeof dataIndex;
	if (type === 'string') return data[dataIndex];
	if (type === 'object') {
		let temp;
		for (let i = 0; i < dataIndex.length; i++) {
			try {
				if (typeof temp === 'object') {
					temp = temp[dataIndex[i]];
				} else {
					temp = data[dataIndex[i]];
				}
			} catch (error) {}
		}
		return temp;
	}
}

const compare = (data, searchText, needType) => {
	const type = typeof data;
	if (type === 'string') {
		if (equal(data, searchText)) {
			return true;
		}
	} else if (type === 'number') {
		if (equal(data, searchText)) {
			if (needType === 'datetime') {
				// TODO
			}
			return true;
		}
	} else if (type === 'object') {
		let res = compareObject(data, searchText);
		return res;
	}

	return false;
};

const split = dataIndex => {
	if (dataIndex.indexOf('.') > -1) {
		return dataIndex.split('.');
	}
	return dataIndex;
};

const compareObject = (data, searchText) => {
	if (Array.isArray(data)) {
		for (let i = 0; i < data.length; i++) {
			const item = data[i];
			const type = typeof item;
			if (type === 'object') {
				return compareObject(item, searchText);
			}
			return equal(item, searchText);
		}
	}
	if (typeof data === 'object') {
		for (let key in data) {
			const val = data[key];
			const valType = typeof val;
			if (valType === 'object') {
				return compareObject(val, searchText);
			} else {
				if (equal(val, searchText)) {
					return true;
				}
			}
		}

		return false;
	}

	return equal(data, searchText);
};

const equal = (data, searchText) =>
	String(data)
		.toLocaleLowerCase()
		.indexOf(searchText.toLocaleLowerCase()) > -1;

const isReactNodeIncludesSearchText = (node, searchText) => {
	const nodeText = getNodeTextFromReactNode(node);
	return nodeText.includes(searchText);
}

function getNodeTextFromReactNode(node) {
	if (React.isValidElement(node)) {
		const children = node.props.children;
		const childrenType = typeof children;
		if (childrenType === 'string') {
			return children;
		} else if (Array.isArray(children)) {
			let str = '';
			for (let i = 0; i < children.length; i++) {
				str += getNodeTextFromReactNode(children[i]);
			}
			return str;
		} else {
			return '';
		}
	} else {
		return String(node);
	}
}