import React, { Fragment, useState, useEffect } from 'react'
import { Modal, Form, Transfer, Input } from 'antd'


function AddModal(props){

    const { visible, handleOk, handleCancel, confirmLoading, form, resourceList } = props

    const { TextArea } = Input;
    const [selectedKeys, setSelectedKeys] = useState([])
    const [targetKeys, setTargetKeys] = useState([])
    useEffect(() => {

    }, [])

    const filterOption = (inputValue, option) => option.name.indexOf(inputValue) > -1;

    const handleChange = selected => {
      console.log("targetKeys", selected)
      setTargetKeys(selected)
    };

    const layout = {
        labelCol: { span: 4 },
        wrapperCol: { span: 17 },
    }

    const handleSearch = (dir, value) => {
      console.log('search:', dir, value);
    };

    const onSelectChange = (val) => {
      setSelectedKeys(val)
    }

    return <Fragment>
        <Modal
          title="编辑角色"
          visible={visible}
          onOk={handleOk}
          onCancel={handleCancel}
          confirmLoading={confirmLoading}
          forceRender
          width={700}
          okText="确认"
          cancelText="取消"
        >
          <Form
                {...layout}
                name="roleForm"
                form={form}
            >
                <Form.Item
                    label="英文名"
                    name="user"
                    rules={[{ required: true, message: '请输入英文名' }]}
                >
                    <Input placeholder="请输入英文名"/>
                </Form.Item>
                <Form.Item
                    label="角色标识"
                    name="role"
                    rules={[{ required: true, message: '请输入角色标识' }]}
                >
                    <Input placeholder="请输入英文名"/>
                </Form.Item>
                <Form.Item
                    label="描述"
                    name="describe"
                    rules={[{ required: true, message: '请输入描述信息' }]}
                >
                    <TextArea rows={4} placeholder="请输入英文名"/>
                </Form.Item>

                <Form.Item
                    label="操作权限"
                    name="permission"
                    rules={[{ required: true, message: '请选择权限' }]}
                >
                    <Transfer
                      rowKey={record => record.id}
                      dataSource={resourceList}
                      titles={['待选择权限', '选择权限']}
                      showSearch
                      filterOption={filterOption}
                      targetKeys={targetKeys}
                      onSelectChange={onSelectChange}
                      selectedKeys={selectedKeys}
                      onChange={handleChange}
                      onSearch={handleSearch}
                      render={item => item.name}
                    />
                </Form.Item>
            </Form>
        </Modal>
    </Fragment>
}

export default AddModal