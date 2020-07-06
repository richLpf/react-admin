import React, { Fragment } from 'react'
import { Modal, Form, Input, Select } from 'antd'

const { Option } = Select

function AddUser(props){

    const { visible, handleOk, handleCancel, confirmLoading } = props

    const layout = {
        labelCol: { span: 4 },
        wrapperCol: { span: 17 },
    }

    const onChange = () => {

    }
    const onSearch = () => {

    }

    const onFinish = (val) => {
        console.log("val填写表单", val)
    }

    return <Fragment>
        <Modal
          title="编辑用户"
          visible={visible}
          onOk={handleOk}
          onCancel={handleCancel}
          confirmLoading={confirmLoading}
        >
            <Form
                {...layout}
                name="basic"
                onFinish={onFinish}
            >
                <Form.Item
                    label="英文名"
                    name="username"
                    rules={[{ required: true, message: 'Please input your username!' }]}
                >
                    <Input placeholder="请输入英文名"/>
                </Form.Item>

                <Form.Item
                    label="所属角色"
                    name="password"
                    rules={[{ required: true, message: 'Please input your password!' }]}
                >
                    <Select
                        showSearch
                        placeholder="选择角色"
                        optionFilterProp="children"
                        onChange={onChange}
                        onSearch={onSearch}
                        filterOption={(input, option) =>
                            option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                        }
                    >
                        <Option value="jack">Jack</Option>
                        <Option value="lucy">Lucy</Option>
                        <Option value="tom">Tom</Option>
                    </Select>
                </Form.Item>
            </Form>
        </Modal>
    </Fragment>
}

export default AddUser