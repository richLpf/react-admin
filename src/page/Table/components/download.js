import React, { Fragment } from 'react'
import { Button } from 'antd'

function Download(props){

	const { text, data, schema, filename } = props

	const handleExport = () => {
		console.log("导出列表", data, schema)
		let format_data = formatData(data, schema)
		console.log("要传递的参数", format_data, schema)
		exportCSV(format_data, schema, addCSVSuffixForFilename(filename));
	}

	const timeFormatOptions = { hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false };
	const dateFormatOptions = { year: 'numeric', month: '2-digit', day: '2-digit' };
	const datetimeFormatOptions = {
		year: 'numeric',
		month: '2-digit',
		day: '2-digit',
		hour: '2-digit',
		minute: '2-digit',
		second: '2-digit',
		hour12: false
	};

	const exportCSV = (data, schema, filename, suppressDownload) => {
		console.log("header", data)
		const header = schema.map(x => x.title).join(',') + '\n';
		const csv = header + data
			.map(item => {
				return (
					item.values
						.map(({ value }) => {
							console.log("value", value)
							if (typeof value === 'string' || typeof value === 'number')
								return `"${String(value).replace(/"/g, '""')}"`;
							else return '';
						})
						.join(',') + '\n'
				);
			})
			.join('');

		console.log("csv", csv)
		if(!suppressDownload){
			const blobObject = new Blob(['\ufeff', csv], {
				type: 'text/csv;charset=utf-8;'
			})
			// Internet Explorer
			if (navigator.msSaveOrOpenBlob) {
				navigator.msSaveOrOpenBlob(blobObject, filename);
			} else {
				// Chrome
				const downloadLink = document.createElement('a');
				downloadLink.href = URL.createObjectURL(blobObject);
				downloadLink.download = filename;
				document.body.appendChild(downloadLink);
				downloadLink.click();
				document.body.removeChild(downloadLink);
			}
		}
		return csv;
	}

	const addCSVSuffixForFilename = (filename) => {
		if(!filename)return "数据列表.csv"
	    if(!filename.includes('.csv'))return `${filename}.csv`
	    return filename
	}

	const formatData = (data, schema) => {
		console.log("格式化数据", data, schema)
		let _data = [];
		data.forEach(x => {
			let temp = [];
			schema.forEach(item => {
				temp.push({ value: getValue(x, item) })
			})
			_data.push({ values: temp });
		})
		return _data;
	}

	const getValue = (model, field) => {

		console.log("model", model, field)

		let key = field.dataIndex || field.name;
		let value;
		if (field.valueGetter) return field.valueGetter(model);
		if (!(key in model)) {
			return '';
		}
		value = model[field.dataIndex] || model[field.name];
		if (!value) return '';
		// if(field.render){
		// 	return field.render(value, field)
		// }
		switch (field.type) {
			case 'date':
				return new Date(value * 1000).toLocaleDateString([navigator.language], dateFormatOptions);
			case 'datetime':
				return new Date(value * 1000).toLocaleString([navigator.language], datetimeFormatOptions);
			case 'time':
				return new Date(value * 1000).toLocaleString([navigator.language], timeFormatOptions);
			case 'number':
				return Number(value).toLocaleString();
			case 'array':
				return value.join(',');
			default:
				return value;
		}
	}

	return <Fragment>
		<Button onClick={()=>handleExport()}>{text}</Button>
	</Fragment>
}

export default Download