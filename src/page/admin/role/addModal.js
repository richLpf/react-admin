import React, { Fragment } from 'react'
import { Modal, Form } from 'antd'

function AddModal(props){

    const { visible, handleOk, handleCancel, confirmLoading } = props

    return <Fragment>
        <Modal
          title="编辑角色"
          visible={visible}
          onOk={handleOk}
          onCancel={handleCancel}
          confirmLoading={confirmLoading}
        >
          <p>Some contents...</p>
          <p>Some contents...</p>
          <p>Some contents...</p>
        </Modal>
    </Fragment>
}

export default AddModal