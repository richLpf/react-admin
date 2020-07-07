import React, { Fragment } from 'react'
import { Modal, Form, Transfer, Input } from 'antd'



function AddModal(props){

    const { visible, handleOk, handleCancel, confirmLoading, mockData, form, targetKeys } = props

    const { TextArea } = Input;

    const filterOption = (inputValue, option) => option.description.indexOf(inputValue) > -1;

    const handleChange = targetKeys => {
      //this.setState({ targetKeys });
    };

    const layout = {
        labelCol: { span: 4 },
        wrapperCol: { span: 17 },
    }

    const handleSearch = (dir, value) => {
      console.log('search:', dir, value);
    };

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
                    name="username"
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
                    name="description"
                    rules={[{ required: true, message: '请输入描述信息' }]}
                >
                    <TextArea rows={4} placeholder="请输入英文名"/>
                </Form.Item>

                <Form.Item
                    label="操作权限"
                    name="role"
                    rules={[{ required: true, message: '请选择权限' }]}
                >
                    <Transfer
                      dataSource={mockData}
                      showSearch
                      filterOption={filterOption}
                      targetKeys={targetKeys}
                      onChange={handleChange}
                      onSearch={handleSearch}
                      render={item => item.title}
                    />
                </Form.Item>
            </Form>
        </Modal>
    </Fragment>
}

export default AddModal