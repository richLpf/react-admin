import React, { Fragment } from 'react'
import { Input, Modal, Form } from 'antd'

function ResourceModal(props){

    const { visible, form, handleOk, handleCancel } = props;

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
            name="resource"
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