## 关于表单控件，前端搜索功能和下载表单功能的封装

一、表单下载

表单下载利用了浏览器blob方法生成scv表单

1、核心代码：首先我们下载一个文件要使用的方法

```
function download(){
	// csv内容
	const csv = `标题, 姓名, 年龄\n测试, 张三, 18\n研发, 王五, 19`
	// csv文件名
	const filename = "测试下载.csv"
	// 将csv内容转化成blob对象
	const blobObject = new Blob(['\ufeff', csv], {
			type: 'text/csv;charset=utf-8;'
	})

	// 若浏览器支持，使用navigator对象下载文件
	// 不支持，则使用js创建标签，下载文件
	if(navigator.msSaveOrOpenBlob){
		navigator.msSaveOrOpenBlob(blobObject, filename)
	}else{
		const downloadLink = document.createElement('a')
		downloadLink.href = URL.createObjectURL(blobObject)
		downloadLink.download = filename
		document.body.appendChild(downloadLink)
		downloadLink.click()
		document.body.removeChild(downloadLink)
	}
	return csv
}

<button onClick={download}>点击下载</button>
```
我们可以看到上面一个，下载了一个csv文件

2、接下来，主要的问题就是将表格的内容转化成csv的文件格式，传入filename字段，这样下载文件的功能就可以做成通用能力

以antd的为例，传入表格的数据格式为：

```
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
];

<Table dataSource={dataSource} columns={columns} />;

```

我们先不考虑渲染，上面数据，我们可以从columns中，拿到CVS表头。从dataSource中，拿到CVS的内容

开搞。。。

```
//获取表头
const getCSVHeader = (columns) => {
	return columns.map(item => (item.title)).join(",") + "\n"
}

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

//dataSource直接处理太麻烦，需要通过columns匹配到对应的值
//将dataSource格式数据转化成 [["胡彦斌", 32, '西湖区湖底公园1号'],["胡彦斌", 32, '西湖区湖底公园1号']]
const formatData = (dataSource, columns) => {
	let result = []
	dataSource.forEach(item => {
		const arr = columns.map(c => ({
			values: getValue(item, c)
		}))
		result.push(arr)
	})
	return result
}

//匹配表头获取对应的内容
const getValue = (data, model) => {
	let value = data[model.dataIndex].toString()
	// 这里需要判断下数据类型，针对不是字符串的类型需要转化成字符串
	return value
}

//将获取的表头字段和内容字段进行拼接
const getCsv = (data, columns) => {
	let header = getCSVHeader(data, columns)
	let body = ""
	data.forEach(item => {
		let row = item.values.map((v)=>{
			if(typeof v==='string' || typeof v === 'number') return value.toString() else return ''
		}).join(",") + "\n"
		body += row
	})
	return header + body
}
```

三、结合table进行封装