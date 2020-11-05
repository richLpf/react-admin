import React, { Fragment } from 'react'
import { Modal, Form, Input, Select } from 'antd'

const { Option } = Select

function AddUser(props){

    const { visible, handleCancel, handleOk, confirmLoading, form, roleList } = props

    console.log("roleList", roleList)

    const layout = {
        labelCol: { span: 4 },
        wrapperCol: { span: 17 },
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
          forceRender
          okText="确认"
          cancelText="取消"
        >
            <Form
                {...layout}
                name="basic"
                form={form}
                onFinish={onFinish}
            >
                <Form.Item
                    label="英文名"
                    name="user"
                    rules={[{ required: true, message: '请输入英文名' }]}
                >
                    <Input placeholder="请输入英文名"/>
                </Form.Item>

                <Form.Item
                    label="所属角色"
                    name="role_ids"
                    rules={[{ required: true, message: '请选择角色' }]}
                >
                    <Select
                        showSearch
                        mode="multiple"
                        placeholder="选择角色"
                        optionFilterProp="children"
                        filterOption={(input, option) =>
                            option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                        }
                    >
                        {roleList?roleList.map(item => {
                            return <Option value={item.id} key={item.id}>{item.role}</Option>
                        }):null}
                    </Select>
                </Form.Item>
            </Form>
        </Modal>
    </Fragment>
}

export default AddUser