import React, { Fragment } from 'react'
import { Form, Input, Button, Checkbox, Modal } from 'antd'
import { addResource, updateResource } from '@/api/acl'

function ResourceModal(props){

    const [form] = Form.useForm()

    const { visible } = props;

    const handleAddResource = (data) => {
        addResource(data).then(response => {
            console.log("添加资源", response)
        })
    }

    const handleUpdateResource = (data) => {
        updateResource(data).then(response => {
            console.log("更新资源", response)
        })
    }

    const handleOk = () => {
        form.validateFields().then(values => {
            console.log("填写信息", values)
            values.namespace = "demo"
            handleAddResource(values)
        }, err => {
            console.log("err values", err)
        })
    }

    const handleCancel = () => {

    }

    const layout = {
        labelCol: { span: 6 },
        wrapperCol: { span: 18 }
    }

    return <Fragment>
        <Modal
          title="新增资源"
          visible={visible}
          onOk={handleOk}
          onCancel={handleCancel}
        >
          <Form
            {...layout}
            name="basic"
            form={form}
            >
                <Form.Item
                    label="Namespace"
                    name="namespace"
                    rules={[{ required: true, message: '请输入命名空间' }]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    label="Category"
                    name="category"
                    rules={[{ required: true, message: '权限类别' }]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    label="Resource"
                    name="resource"
                    rules={[{ required: true, message: '资源标识' }]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    label="资源名称"
                    name="name"
                    rules={[{ required: true, message: '请输入资源名称' }]}
                >
                    <Input />
                </Form.Item>
            </Form>
        </Modal>
    </Fragment>
}

export default ResourceModal