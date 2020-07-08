import React, { Fragment } from 'react'
import { Input, Button, Checkbox, Form, message } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';


function LoginForm(props){
    const onFinish = values => {
        console.log('Received values of form: ', values);
        const { username, password } = values
        if(username==="admin"&&password==="admin"){
            window.location.href = "/"
        }else{
            message.error("账号为：admin, 密码为：admin")
        }
    };
    return <Fragment>
        <Form
        name="normal_login"
        className="login-form"
        initialValues={{ remember: true }}
        onFinish={onFinish}
        >
            <Form.Item
                name="username"
                rules={[{ required: true, message: 'Please input your Username!' }]}
            >
                <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
            </Form.Item>
            <Form.Item
                name="password"
                rules={[{ required: true, message: 'Please input your Password!' }]}
            >
                <Input
                    prefix={<LockOutlined className="site-form-item-icon" />}
                    type="password"
                    placeholder="Password"
                />
            </Form.Item>
            <Form.Item>
                <Form.Item name="remember" valuePropName="checked" noStyle>
                <Checkbox>Remember me</Checkbox>
                </Form.Item>

                <a className="login-form-forgot" href="">
                Forgot password
                </a>
            </Form.Item>

            <Form.Item>
                <Button type="primary" htmlType="submit" className="login-form-button">
                    登录
                </Button>
            </Form.Item>
        </Form>
    </Fragment>
}

export default LoginForm
